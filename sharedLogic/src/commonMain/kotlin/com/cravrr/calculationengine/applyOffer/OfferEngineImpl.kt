package com.cravrr.calculationengine.applyOffer

import com.cravrr.calculationengine.model.ChargesData
import com.cravrr.calculationengine.model.OrderDiscount
import com.cravrr.calculationengine.model.OrderOfferHeader
import com.cravrr.calculationengine.model.OrderPlaceRequest
import com.cravrr.calculationengine.model.ItemDetailsList
import com.cravrr.calculationengine.model.ItemLite
import com.cravrr.calculationengine.model.OfferData
import com.cravrr.calculationengine.model.OfferTerm
import com.cravrr.calculationengine.model.OfferTermProduct
import com.cravrr.calculationengine.model.TimeFrame
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.filter
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlinx.datetime.Clock
import kotlinx.datetime.DayOfWeek
import kotlinx.datetime.Instant
import kotlinx.datetime.LocalDate
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlinx.serialization.json.Json
import kotlin.collections.get
import kotlin.math.ceil
import kotlin.time.ExperimentalTime

enum class OfferingType {
    Item,
}

enum class ConditionType {
    Amount, Count, Both
}

enum class TermStyle {
    C1, C2, C3
}

internal class OfferEngineImpl(
    private val json: Json = Json {
        ignoreUnknownKeys = true
        explicitNulls = false
        encodeDefaults = true
    }
) : OfferEngine {

    private var itemLevelOfferList =
        HashMap<String, Pair<HashMap<String, String>, HashMap<String, String>>>()
    private var sourceAndTarget =
        HashMap<String, Pair<List<OfferTerm>, List<OfferTerm>>>()

    private fun clearMappedData() {
        itemLevelOfferList.clear()
        sourceAndTarget.clear()
        clear()
    }

    private fun mapItemLevelOffers(
        offerData: List<OfferData>,
        order: OrderPlaceRequest
    ) {
        offerData.forEach { offer ->
            val (sourceTerms, targetTerms) = getSourceAndTarget(offer)
            sourceAndTarget[offer.offerId] = sourceTerms to targetTerms
            val (sourceItems, targetItems) = getSourceAndTargetItems(
                offer,
                order,
                sourceTerms,
                targetTerms
            )
            itemLevelOfferList[offer.offerId] = sourceItems to targetItems
        }
    }

    private fun getCouponType(offer: OfferData): CouponType {
        if (offer.offerTerm.isEmpty()) return CouponType.NONE
        val term = offer.offerTerm[0]
        val termStyle = offer.offerHeader.termStyle
        val isIncludeItems = term.isIncludeItems
        val conditionType = term.conditionType
        val offeringType = term.offeringType

        return when (termStyle) {
            TermStyle.C1.name, TermStyle.C2.name -> when (conditionType) {
                ConditionType.Both.name -> if (offeringType == OfferingType.Item.name) {
                    CouponType.C1_C2_ITEM_BOTH
                } else {
                    if (isIncludeItems) CouponType.C1_C2_TRANSACTION_WITH_ITEMS_BOTH else CouponType.C1_C2_TRANSACTION_WITHOUT_ITEMS_BOTH
                }

                ConditionType.Count.name -> if (offeringType == OfferingType.Item.name) {
                    CouponType.C1_C2_ITEM_COUNT
                } else {
                    if (isIncludeItems) CouponType.C1_C2_TRANSACTION_WITH_ITEMS_COUNT else CouponType.C1_C2_TRANSACTION_WITHOUT_ITEMS_COUNT
                }

                ConditionType.Amount.name -> if (offeringType == OfferingType.Item.name) {
                    CouponType.C1_C2_ITEM_AMOUNT
                } else {
                    if (isIncludeItems) CouponType.C1_C2_TRANSACTION_WITH_ITEMS_AMOUNT else CouponType.C1_C2_TRANSACTION_WITHOUT_ITEMS_AMOUNT
                }

                else -> CouponType.NONE
            }

            TermStyle.C3.name -> {
                val validTerms =
                    offer.offerTerm.filter { it.discountTypeCode == "1" && it.discountTypeValue == "0" }
                if (validTerms.isNotEmpty()) {
                    return when (conditionType) {
                        ConditionType.Both.name -> CouponType.C3_ITEM_BOTH
                        ConditionType.Amount.name -> CouponType.C3_ITEM_AMOUNT
                        ConditionType.Count.name -> CouponType.C3_ITEM_COUNT
                        else -> CouponType.NONE
                    }
                }
                return CouponType.NONE
            }

            else -> CouponType.NONE
        }
    }

    private fun mapTempItemLevelOffers(
        offerData: List<OfferData>,
        order: OrderPlaceRequest
    ): Pair<HashMap<String, Pair<HashMap<String, String>, HashMap<String, String>>>, HashMap<String, Pair<List<OfferTerm>, List<OfferTerm>>>> {
        val itemLevelOffers =
            HashMap<String, Pair<HashMap<String, String>, HashMap<String, String>>>()
        val sourceTarget =
            HashMap<String, Pair<List<OfferTerm>, List<OfferTerm>>>()
        offerData.forEach { offer ->
            val (sourceTerms, targetTerms) = getSourceAndTarget(offer)
            sourceTarget[offer.offerId] = sourceTerms to targetTerms
            val (sourceItems, targetItems) = getSourceAndTargetItems(
                offer,
                order,
                sourceTerms,
                targetTerms
            )
            itemLevelOffers[offer.offerId] = sourceItems to targetItems
        }
        return itemLevelOffers to sourceTarget
    }

    override suspend fun isOfferValidOnCart(offerJson: String, orderJson: String): Boolean {
        val order = json.decodeFromString<OrderPlaceRequest>(orderJson)
        val offer = json.decodeFromString<OfferData>(offerJson)
        if (!OfferSchedulerUtil.isOfferActiveNow(offer)) return false
        if (offer.offerTerm.isEmpty()) return false
        val term = offer.offerTerm[0]
        val termStyle = offer.offerHeader.termStyle
        val conditionType = term.conditionType
        val (itemCount, itemPrice) = calculateCartValues(offer, order)
        val (itemLevelOffersList, mappedSourceAndTarget) = mapTempItemLevelOffers(
            listOf(offer),
            order
        )
        when (termStyle) {
            TermStyle.C1.name -> {
                return isSimpleOfferValid(conditionType, term, itemCount, itemPrice)
            }

            TermStyle.C2.name -> {
                return if (offer.offerTerm.size > 1) {
                    isC3OfferValid(itemLevelOffersList, mappedSourceAndTarget, offer, order)
                } else {
                    isSimpleOfferValid(conditionType, term, itemCount, itemPrice)
                }
            }

            TermStyle.C3.name -> {
                return isC3OfferValid(itemLevelOffersList, mappedSourceAndTarget, offer, order)
            }
        }
        return false
    }

    private fun checkC3Offer(
        offer: OfferData,
        items: ArrayList<ItemDetailsList>,
        sourceTerm: OfferTerm,
        targetTerm: OfferTerm,
        sourceItems: HashMap<String, String>,
        targetItems: HashMap<String, String>
    ): Boolean {
        var sourceItemCount = sourceTerm.count
        var sourceItemAmount = sourceTerm.amount
        var targetItemCount = targetTerm.count
        val cartItem = items.sortedByDescending { it.regularSalesUnitPrice }
        val cartItems = ArrayList<ItemDetailsList>()
        cartItems.addAll(cartItem)
        for (i in 0 until cartItems.size) {
            if (cartItems[i].isMembership != true) {
                if (sourceTerm.conditionType == ConditionType.Amount.name) {
                    if ((sourceItemAmount ?: 0.0) > 0.0) {
                        if (sourceItems.containsKey(cartItems[i].sku)) {
                            val itemValue =
                                cartItems[i].quantity * cartItems[i].extendedAmount // replace with your price field

                            if (itemValue > sourceItemAmount!!) {
                                val maxQty =
                                    ceil(sourceItemAmount / cartItems[i].extendedAmount).toInt()

                                if (maxQty > 0) {
                                    val itemToAdd = cartItems[i].copy()
                                    itemToAdd.quantity = cartItems[i].quantity - maxQty
                                    cartItems[i].quantity = maxQty
                                    cartItems.add(i + 1, itemToAdd)
                                }
                                sourceItemAmount = 0.0
                            } else {
                                sourceItemAmount = sourceItemAmount - itemValue
                            }

                            cartItems[i].appliedDiscount = ChargesData(
                                title = "Item Level Discount",
                                value = 0.0,
                                percentage = 0.0,
                                offerDetails = convertToOrderDiscount(
                                    offer,
                                    true
                                )
                            )
                        }
                    } else {
                        break
                    }
                } else if (sourceTerm.conditionType == ConditionType.Count.name) {
                    if (sourceItemCount > 0) {
                        if (sourceItems.containsKey(cartItems[i].sku)) {
                            if (cartItems[i].quantity > sourceItemCount) {
                                val itemToAdd = cartItems[i].copy()
                                itemToAdd.quantity = cartItems[i].quantity - sourceItemCount
                                cartItems[i].quantity = sourceItemCount
                                cartItems.add(i + 1, itemToAdd)
                                sourceItemCount = 0
                            } else {
                                sourceItemCount -= cartItems[i].quantity
                            }
                            cartItems[i].appliedDiscount = ChargesData(
                                title = "Item Level Discount",
                                value = 0.0,
                                percentage = 0.0,
                                offerDetails = convertToOrderDiscount(
                                    offer,
                                    true
                                )
                            )
                        }
                    } else {
                        break
                    }
                } else {
                    if (sourceItemCount > 0 || (sourceItemAmount ?: 0.0) > 0.0) {
                        if (sourceItems.containsKey(cartItems[i].sku)) {
                            val item = cartItems[i]

                            var blockableCount = item.quantity

                            if ((sourceItemAmount ?: 0.0) > 0.0) {
                                val neededByAmount =
                                    ceil((sourceItemAmount ?: 0.0) / item.extendedAmount).toInt()
                                blockableCount = neededByAmount
                            }

                            if (blockableCount >= sourceItemCount) {
                                if (item.quantity > blockableCount) {
                                    val itemToAdd = item.copy()
                                    itemToAdd.quantity = item.quantity - blockableCount
                                    cartItems[i].quantity = blockableCount
                                    cartItems.add(i + 1, itemToAdd)
                                } else {
                                    cartItems[i].quantity = blockableCount
                                }

                                if (sourceItemCount > 0) {
                                    sourceItemCount -= blockableCount
                                }
                                if ((sourceItemAmount ?: 0.0) > 0.0) {
                                    sourceItemAmount =
                                        (sourceItemAmount
                                            ?: 0.0) - (blockableCount * item.extendedAmount)
                                }

                                cartItems[i].appliedDiscount = ChargesData(
                                    title = "Item Level Discount",
                                    value = 0.0,
                                    percentage = 0.0,
                                    offerDetails = convertToOrderDiscount(
                                        offer,
                                        true
                                    )
                                )
                            }
                        }
                    } else {
                        break
                    }


                }
            }
        }

        for (i in 0 until cartItems.size) {
            val item = cartItems[i]

            if (item.isMembership == true) continue
            if (!item.nonDiscounted()) continue

            if (!targetItems.containsKey(item.sku)) continue

            if (targetItemCount > 0) {
                if (item.quantity > targetItemCount) {
                    val itemToAdd = item.copy()
                    itemToAdd.quantity = item.quantity - targetItemCount
                    cartItems[i].quantity = targetItemCount
                    cartItems.add(i + 1, itemToAdd)
                    targetItemCount = 0
                } else {
                    targetItemCount -= item.quantity
                }

                cartItems[i].appliedDiscount = ChargesData(
                    title = "Item Level Discount",
                    value = 0.0,
                    percentage = 0.0,
                    offerDetails = convertToOrderDiscount(
                        offer,
                        false
                    )
                )
            } else break


        }


        var isSourceValid = false
        val conditionType = sourceTerm.conditionType
        when (conditionType) {
            ConditionType.Both.name -> {
                if (sourceItemCount <= 0) {
                    var itemPrice = 0.0
                    cartItems.forEach {
                        if (it.appliedDiscount != null && it.isMembership != true && it.appliedDiscount?.offerDetails?.isSourceItem == true) {
                            itemPrice += it.extendedAmount * it.quantity
                        }
                    }
                    isSourceValid = if (sourceTerm.amount != null) {
                        if (sourceTerm.amount != 0.0) {
                            itemPrice >= sourceTerm.amount
                        } else {
                            false
                        }
                    } else {
                        true
                    }
                }
            }

            ConditionType.Amount.name -> {
                var itemPrice = 0.0
                cartItems.forEach {
                    if (it.appliedDiscount != null && it.appliedDiscount?.offerDetails?.isSourceItem == true) {
                        itemPrice += it.extendedAmount * it.quantity
                    }
                }
                isSourceValid = if (sourceTerm.amount != null) {
                    if (sourceTerm.amount != 0.0) itemPrice >= sourceTerm.amount else false
                } else {
                    true
                }
            }

            ConditionType.Count.name -> {
                isSourceValid = sourceItemCount <= 0
            }
        }
        return isSourceValid && targetItemCount == 0
    }

    override suspend fun applyOrderLevelOffer(
        offerJson: String,
        orderJson: String,
        isTaxIncluded: Boolean,
        onCompleted: (String, Boolean) -> Unit
    ) {
        val order = json.decodeFromString<OrderPlaceRequest>(orderJson)
        val offer = json.decodeFromString<OfferData>(offerJson)
        clearMappedData()
        mapItemLevelOffers(listOf(offer), order)
        if (offer.offerTerm.size > 1) {
            val offerListJson = json.encodeToString(listOf(offer))
            autoApply(offerListJson, orderJson, isTaxIncluded, onCompleted = {
                onCompleted(it, true)
            })
        } else {
            order.itemDetails.forEach {
                it.appliedDiscount = null
                it.discountAmount = 0.0
                it.totalDiscount = 0.0
                it.discountPercent = 0.0
            }
            val complimentaryDiscount =
                order.appliedDiscount?.indexOfFirst { it.title == "Complimentary Discount" }
            if (complimentaryDiscount != -1 && complimentaryDiscount != null) {
                order.appliedDiscount?.removeAt(complimentaryDiscount)
                order.discountPercentage = 0.0
            }
            if (isOfferValidOnCart(offerJson, orderJson)) {
                when (getCouponType(offer)) {
                    CouponType.C1_C2_TRANSACTION_WITH_ITEMS_BOTH, CouponType.C1_C2_TRANSACTION_WITHOUT_ITEMS_COUNT,
                    CouponType.C1_C2_TRANSACTION_WITH_ITEMS_COUNT, CouponType.C1_C2_TRANSACTION_WITHOUT_ITEMS_BOTH,
                    CouponType.C1_C2_TRANSACTION_WITH_ITEMS_AMOUNT, CouponType.C1_C2_TRANSACTION_WITHOUT_ITEMS_AMOUNT -> {
                        val discountAmount =
                            getDiscountValue(
                                offerTerm = offer.offerTerm[0],
                                amount = (order.subTotalExcludeMembership ?: order.subTotal)
                            )
                        order.discountAmount = discountAmount
                        var isCouponAdded = false
                        order.appliedDiscount?.forEach {
                            if (it.title == "Order Level Discount") {
                                isCouponAdded = true
                                it.value = discountAmount
                                it.percentage = 0.0
                                it.offerDetails = convertToOrderDiscount(offer, true)
                            }
                        }
                        if (!isCouponAdded) {
                            order.appliedDiscount?.add(
                                ChargesData(
                                    title = "Order Level Discount",
                                    value = discountAmount,
                                    percentage = 0.0,
                                    offerDetails = convertToOrderDiscount(offer, true)
                                )
                            )
                        }
                    }

                    else -> {
                    }
                }
                onCompleted(json.encodeToString(order), true)
            } else {
                onCompleted(json.encodeToString(order), false)
            }
        }
    }

    override suspend fun applyCouponCodeOffer(
        orderJson: String,
        offerListJson: String,
        isTaxIncluded: Boolean,
        couponCode: String,
        onCompleted: (String, Boolean) -> Unit
    ) {
        val offers = json.decodeFromString<List<OfferData>>(offerListJson)
        val matchingOffer = offers.find { offer ->
            offer.offerTerm.isNotEmpty() &&
                    offer.offerTerm[0].couponCode == couponCode
        }
        if (matchingOffer == null) {
            onCompleted(orderJson, false)
            return
        }
        val matchingOfferJson = json.encodeToString(matchingOffer)
        if (isOfferValidOnCart(matchingOfferJson, orderJson)) {
            applyOrderLevelOffer(
                matchingOfferJson,
                orderJson,
                isTaxIncluded,
                onCompleted = { order, bool ->
                    onCompleted(order, bool)
                })
        } else {
            onCompleted(orderJson, false)
        }
    }

    override suspend fun applyItemLevelOffer(
        offerListJson: String,
        orderJson: String,
        isTaxIncluded: Boolean,
        onCompleted: (String) -> Unit,
    ) {
        val order = json.decodeFromString<OrderPlaceRequest>(orderJson)
        val offerList = json.decodeFromString<List<OfferData>>(offerListJson)
        val appliedCouponOfferIds = order.itemDetails
            .mapNotNull { it.appliedDiscount?.offerDetails }
            .filter {
                !it.couponCode.isNullOrEmpty()
            }
            .map { it.offerId }
            .distinct()

        val offers = if (appliedCouponOfferIds.isNotEmpty()) {
            offerList.filter { offer ->
                offer.offerId in appliedCouponOfferIds && OfferSchedulerUtil.isOfferActiveNow(offer)
            }
        } else {
            offerList.filter { offer ->
                (offer.offerHeader.termStyle == TermStyle.C3.name || offer.offerHeader.termStyle == TermStyle.C1.name) && offer.offerTerm[0].couponCode.isNullOrEmpty() && OfferSchedulerUtil.isOfferActiveNow(
                    offer
                )
            }
        }

        autoApply(json.encodeToString(offers), orderJson, isTaxIncluded, onCompleted)
    }

    suspend fun autoApply(
        offerListJson: String,
        orderJson: String,
        isTaxIncluded: Boolean,
        onCompleted: (String) -> Unit,
    ) {
        val order = json.decodeFromString<OrderPlaceRequest>(orderJson)
        val offers = json.decodeFromString<List<OfferData>>(offerListJson)

        if (order.appliedDiscount?.none { it.title == "Order Level Discount" || it.title == "Complimentary Discount" } == true) {
            clearMappedData()
            mapItemLevelOffers(offers, order)
            val items = ArrayList<ItemDetailsList>()
            val memberShipItem = ArrayList<ItemDetailsList>()
            val addOnItem = ArrayList<ItemDetailsList>()
            val itemsLite = ArrayList<ItemLite>()
            order.itemDetails.forEach {
                if (it.isMembership != true) {
                    var quantity = it.quantity
                    if (it.mainItemID.isNullOrEmpty()) {
                        if (it.quantity > 1) {
                            while (quantity >= 1) {
                                val item = it.copy(
                                    appliedDiscount = if (it.isManualDiscountApplied()) it.appliedDiscount else null,
                                    discountAmount = if (it.isManualDiscountApplied()) it.discountAmount else 0.0,
                                    totalDiscount = 0.0
                                )
                                item.quantity = 1
                                items.add(item)
                                itemsLite.add(item.convertItemToLite(isTaxIncluded))
                                quantity--
                            }
                        } else {
                            val item = it.copy(
                                appliedDiscount = if (it.isManualDiscountApplied()) it.appliedDiscount else null,
                                discountAmount = if (it.isManualDiscountApplied()) it.discountAmount else 0.0,
                                totalDiscount = 0.0
                            )
                            items.add(item)
                            itemsLite.add(item.convertItemToLite(isTaxIncluded))
                        }
                    } else {
                        addOnItem.add(it)
                    }
                } else {
                    memberShipItem.add(it)
                }
            }

            if (items.isNotEmpty()) {
                checkOfferValid(
                    offers,
                    memberShipItem,
                    itemsLite,
                    items,
                    addOnItem,
                    order, onCompleted
                )
            }
        }
    }

    private fun ItemDetailsList.isManualDiscountApplied(): Boolean {
        return this.appliedDiscount != null && this.appliedDiscount?.offerDetails == null
    }

    private fun ItemDetailsList.convertItemToLite(isTaxIncluded: Boolean): ItemLite {
        return ItemLite(
            this.sku,
            this.appliedDiscount,
            if (isTaxIncluded) {
                val totalTaxPercentage = this.taxList?.sumOf { (it.taxPct ?: 0.0) } ?: 0.0
                (this.extendedAmount) / (1 + (totalTaxPercentage ?: 0.0) / 100)
            } else {
                this.extendedAmount
            },
            this.quantity,
            this.mainItemID,
            this.discountAmount,
            this.itemName,
            this.categoryId ?: ""
        )
    }


    @OptIn(ExperimentalTime::class)
    private suspend fun checkOfferValid(
        offers: List<OfferData>,
        membershipItems: List<ItemDetailsList>,
        itemsLite: List<ItemLite>,
        items: List<ItemDetailsList>,
        addonItems: List<ItemDetailsList>,
        order: OrderPlaceRequest,
        onCompleted: (String) -> Unit,
    ) = coroutineScope {
        val list = ArrayList<Deferred<Unit>>()
        val isValid = HashMap<String, Boolean>()
        offers.forEach {
            list.add(
                async {
                    isValid[it.offerId] =
                        isOfferValidOnCart(json.encodeToString(it), json.encodeToString(order))
                }
            )
        }
        list.awaitAll()

        if (items.isNotEmpty()) {
            val discountedLiteItems =
                applyC3Coupon(offers, itemsLite, isValid)
            order.itemDetails =
                mergeSameItems(
                    membershipItems,
                    convertDiscountedItem(discountedLiteItems, items),
                    addonItems
                ) as ArrayList
        }
        onCompleted(json.encodeToString(order))
    }

    private fun convertDiscountedItem(
        itemsLite: List<ItemLite>,
        items: List<ItemDetailsList>
    ): List<ItemDetailsList> {
        itemsLite.indices.forEach { i ->
            for (j in items.indices) {
                if (items[j].sku == itemsLite[i].sku && items[j].nonDiscounted()) {
                    items[j].appliedDiscount = itemsLite[i].appliedDiscount
                    items[j].discountAmount = itemsLite[i].discountAmount
                    items[j].quantity = itemsLite[i].quantity
                    break
                }
            }
        }

        return items
    }

    private fun mergeSameItems(
        membershipItems: List<ItemDetailsList>,
        items: List<ItemDetailsList>,
        addonItems: List<ItemDetailsList>
    ): List<ItemDetailsList> {
        val finalList = ArrayList<ItemDetailsList>()
        membershipItems.forEach {
            finalList.add(it)
        }
        val finalItemList = items.groupBy { it.copy(quantity = 0) }
            .map { (key, groupedItems) ->
                key.copy(
                    quantity = groupedItems.sumOf { it.quantity },
                    appliedDiscount = key.appliedDiscount?.copy(
                        value = groupedItems.sumOf {
                            it.appliedDiscount?.value ?: 0.0
                        }
                    )
                )
            }

        finalItemList.forEach { item ->
            finalList.add(item)
            item.selectedAddonsItems?.forEachIndexed { _, addon ->
                for (i in 0 until addonItems.size) {
                    val addOnItem = addonItems[i]
                    if (addOnItem.mainItemID == item.sku && addOnItem.id == addon.id && addon.sku == addOnItem.sku) {
                        finalList.add(addOnItem.copy(quantity = addon.qty.toInt() * item.quantity))
                        break
                    }
                }
            }
        }

        return finalList
    }

    private fun clear() {
        skusToBestCart.clear()
        offersAndSkus.clear()
    }

    private val skusToBestCart =
        HashMap<Pair<List<String>, List<String>>, List<ItemLite>>()
    private val offersAndSkus =
        HashMap<Pair<String, List<String>>, List<ItemLite>>()

    private suspend fun applyC3Coupon(
        offerList: List<OfferData>,
        cartItems: List<ItemLite>,
        isValid: Map<String, Boolean>
    ): List<ItemLite> = coroutineScope {
        // base condition
        if (cartItems.isEmpty()) return@coroutineScope emptyList()

        // optimisation for same cart and offers
        val offerIds = offerList.map { it.offerId }.sorted()
        val cartItemSkus = cartItems.mapNotNull { it.sku }.sorted()
        val key = Pair(offerIds, cartItemSkus)
        if (skusToBestCart.containsKey(
                Pair(
                    offerIds,
                    cartItemSkus
                )
            )
        ) {
            return@coroutineScope (skusToBestCart[key]!!)
        }

        val cartCopy = cartItems.map { it.copy() }
        var bestCart = Pair(0.0, cartCopy)
        val list = ArrayList<Deferred<Unit>>()
        offerList.forEach { offer ->
            list.add(
                async {
                    if (isValid[offer.offerId] == true) {
                        val sourceTargetTerms = sourceAndTarget[offer.offerId]
                        val sourceTargetItems = itemLevelOfferList[offer.offerId]
                        if (sourceTargetTerms != null && sourceTargetItems != null) {
                            val (sourceItems, targetItems) = sourceTargetItems
                            val (source, target) = sourceTargetTerms
                            if (target.isNotEmpty()) {
                                var updatedCart =
                                    if (offer.offerTerm.size > 1) {
                                        if (source.isNotEmpty()) {
                                            setSourceAndTarget(
                                                offer,
                                                cartCopy,
                                                source[0],
                                                target[0],
                                                sourceItems,
                                                targetItems
                                            )
                                        } else {
                                            cartCopy
                                        }
                                    } else {
                                        applyItemLevel(offer, cartCopy, target[0], targetItems)
                                    }
                                if (updatedCart != cartCopy) {
                                    updatedCart =
                                        updatedCart.filter { !it.nonDiscounted() } + applyC3Coupon(
                                            if (target[0].noPerTrans == 1) offerList else offerList.filter { it.offerId != offer.offerId },
                                            updatedCart.filter { it.nonDiscounted() },
                                            isValid
                                        )

                                    val discountedValue =
                                        updatedCart.sumOf {
                                            (it.appliedDiscount?.value?.times(it.quantity)) ?: 0.0
                                        }
                                    bestCart = maxOf(
                                        bestCart,
                                        Pair(discountedValue, updatedCart),
                                        compareBy { it.first }
                                    )
                                }
                            }
                        }
                    }
                }
            )
            list.awaitAll()
        }
        skusToBestCart[key] = bestCart.second.map { it.copy() }
        return@coroutineScope bestCart.second
    }

    private fun applyItemLevel(
        offer: OfferData,
        items: List<ItemLite>,
        offerTerm: OfferTerm,
        offerItems: HashMap<String, String>
    ): List<ItemLite> {
        val cartSkus = items.mapNotNull { it.sku }.sorted()
        val key = Pair(offer.offerId, cartSkus)
        if (offersAndSkus.containsKey(key)) return offersAndSkus[key]!!
        var count = offerTerm.count
        val mappedItems = mutableListOf<Int>()
        val cartItems = ArrayList<ItemLite>()
        val validCartItems = ArrayList<Pair<String, Double>>()
        var validCount = 0

        items.forEach {
            val item = it.copy()
            cartItems.add(item)
            if (it.isValidItem(offerItems, offerTerm)) {
                it.sku?.let { it1 -> validCartItems.add(Pair(it1, it.price)) }
                validCount += it.quantity
            }
        }
        if (validCount >= count) {
            if (offerTerm.conditionType == ConditionType.Count.name) {
                val minAmountItems = validCartItems.takeTopN(count, true)
                count = applyDiscounts(
                    minAmountItems,
                    cartItems,
                    count,
                    offerTerm,
                    mappedItems,
                    offer,
                    false
                )
            } else {
                var price = 0.0
                var quantity = 0
                val sortedItems = cartItems.sortedByDescending { it.price }
                for (index in sortedItems.indices) {
                    for (i in 0 until cartItems.size) {
                        if (price < offerTerm.amount!!) {
                            if (sortedItems[index].sku == cartItems[i].sku && cartItems[i].nonDiscounted()) {
                                mappedItems.add(i)
                                cartItems[i].appliedDiscount = ChargesData(
                                    title = "Item Level Discount",
                                    value = 0.0,
                                    percentage = 0.0,
                                    offerDetails = convertToOrderDiscount(offer, false, ArrayList())
                                )
                                price += cartItems[i].price
                                quantity += 1
                            }
                        } else {
                            break
                        }
                    }
                }
                val isValid =
                    if (offerTerm.conditionType == ConditionType.Both.name) price >= offerTerm.amount!! && quantity >= offerTerm.count else price >= offerTerm.amount!!
                if (mappedItems.isNotEmpty() && !isValid) {
                    mappedItems.forEach {
                        cartItems[it].appliedDiscount = null
                        cartItems[it].discountAmount = 0.0
                    }
                    mappedItems.clear()
                } else {
                    count -= mappedItems.size
                }
            }
        }

        validateDiscounts(
            offerTerm,
            offer.offerHeader.dealdist == "1",
            cartItems,
            mappedItems,
            count
        )
        val isRepeat = offerTerm.noPerTrans == 1
        val isValidCart = cartItems.any {
            it.mainItemID.isNullOrEmpty() && it.nonDiscounted()
        }

        val updatedCart = if (isValidCart && isRepeat) {
            if (items == cartItems) {
                cartItems
            } else {
                cartItems.filter { !it.nonDiscounted() } + applyItemLevel(
                    offer,
                    cartItems.filter { it.nonDiscounted() },
                    offerTerm,
                    offerItems
                )
            }
        } else {
            cartItems
        }
        offersAndSkus[key] = updatedCart
        return updatedCart
    }

    private fun setSourceAndTarget(
        offer: OfferData,
        items: List<ItemLite>,
        sourceTerm: OfferTerm,
        targetTerm: OfferTerm,
        sourceItems: HashMap<String, String>,
        targetItems: HashMap<String, String>
    ): List<ItemLite> {
        val cartSkus = items.mapNotNull { it.sku }.sorted()
        val key = Pair(offer.offerId, cartSkus)
        if (offersAndSkus.containsKey(key)) return offersAndSkus[key]!!

        val sourceItemCount = sourceTerm.count
        var targetItemCount = targetTerm.count
        val mappedItems = mutableListOf<Int>()
        val cartItems = ArrayList<ItemLite>()
        val validSourceItems = ArrayList<Pair<String, Double>>()
        var validCount = 0

        items.forEach {
            val item = it.copy()
            cartItems.add(item)
            if (it.isValidItem(sourceItems, sourceTerm)) {
                it.sku?.let { it1 -> validSourceItems.add(Pair(it1, it.price)) }
                validCount += it.quantity
            }
        }

        if (validCount >= sourceItemCount) {

            if (sourceTerm.conditionType == ConditionType.Count.name) {
                if (sourceTerm.offeringType == OfferingType.Item.name) {
                    val maxAmountItem = validSourceItems.takeTopN(sourceItemCount)
                    applyDiscounts(
                        maxAmountItem,
                        cartItems,
                        sourceItemCount,
                        targetTerm,
                        mappedItems,
                        offer,
                        true
                    )
                } else {
                    var price = 0.0
                    var quantity = 0
                    val sortedItems = cartItems.sortedByDescending { it.price }
                    for (index in sortedItems.indices) {
                        for (i in 0 until cartItems.size) {
                            if (price < sourceTerm.amount!!) {
                                if (sortedItems[index].sku == cartItems[i].sku && cartItems[i].nonDiscounted()) {
                                    mappedItems.add(i)
                                    cartItems[i].appliedDiscount = ChargesData(
                                        title = "Item Level Discount",
                                        value = 0.0,
                                        percentage = 0.0,
                                        offerDetails = convertToOrderDiscount(
                                            offer,
                                            true,
                                            ArrayList()
                                        )
                                    )
                                    price += cartItems[i].price
                                    quantity += 1
                                }
                            } else {
                                break
                            }
                        }
                    }
                    val isValid =
                        if (sourceTerm.conditionType == ConditionType.Both.name) price >= sourceTerm.amount!! && quantity >= sourceTerm.count else price >= sourceTerm.amount!!
                    if (mappedItems.isNotEmpty() && !isValid) {
                        mappedItems.forEach {
                            cartItems[it].appliedDiscount = null
                            cartItems[it].discountAmount = 0.0
                        }
                        mappedItems.clear()
                    }
                }

            } else {
                var price = 0.0
                var quantity = 0
                val sortedItems = cartItems.sortedByDescending { it.price }
                for (index in sortedItems.indices) {
                    for (i in 0 until cartItems.size) {
                        if (price < sourceTerm.amount!!) {
                            if (sortedItems[index].sku == cartItems[i].sku && cartItems[i].nonDiscounted()) {
                                mappedItems.add(i)
                                cartItems[i].appliedDiscount = ChargesData(
                                    title = "Item Level Discount",
                                    value = 0.0,
                                    percentage = 0.0,
                                    offerDetails = convertToOrderDiscount(
                                        offer,
                                        true,
                                        ArrayList()
                                    )
                                )
                                price += cartItems[i].price
                                quantity += 1
                            }
                        } else {
                            break
                        }
                    }
                }
                val isValid =
                    if (sourceTerm.conditionType == ConditionType.Both.name) price >= sourceTerm.amount!! && quantity >= sourceTerm.count else price >= sourceTerm.amount!!

                if (mappedItems.isNotEmpty() && !isValid) {
                    mappedItems.forEach {
                        cartItems[it].appliedDiscount = null
                        cartItems[it].discountAmount = 0.0
                    }
                    mappedItems.clear()
                }
            }


            val validTargetItems = ArrayList<Pair<String, Double>>()
            var validTargetCount = 0
            cartItems.forEach {
                if (it.isValidItem(targetItems, targetTerm)) {
                    it.sku?.let { it1 -> validTargetItems.add(Pair(it1, it.price)) }
                    validTargetCount += it.quantity
                }
            }
            if (validTargetCount >= targetItemCount && mappedItems.isNotEmpty()) {
                val minAmountItem = validTargetItems.takeTopN(targetItemCount, true)
                targetItemCount = applyDiscounts(
                    minAmountItem,
                    cartItems,
                    targetItemCount,
                    targetTerm,
                    mappedItems,
                    offer,
                    false
                )
            }
        }

        validateDiscounts(
            targetTerm,
            offer.offerHeader.dealdist == "1",
            cartItems,
            mappedItems,
            targetItemCount
        )

        val isRepeat =
            sourceTerm.noPerTrans == 1
        val isValidCart = cartItems.any {
            it.mainItemID.isNullOrEmpty() && it.nonDiscounted()
        }

        val updatedCart = if (isValidCart && isRepeat) {
            if (items == cartItems) {
                items
            } else {
                cartItems.filter { !it.nonDiscounted() } + setSourceAndTarget(
                    offer,
                    cartItems.filter { it.nonDiscounted() },
                    sourceTerm,
                    targetTerm,
                    sourceItems,
                    targetItems
                )
            }
        } else {
            cartItems
        }
        offersAndSkus[key] = updatedCart
        return updatedCart
    }

    private fun ItemLite.nonDiscounted(): Boolean {
        return this.appliedDiscount == null
    }

    private fun ItemDetailsList.nonDiscounted(): Boolean {
        return this.appliedDiscount == null
    }

    private fun applyDiscounts(
        items: List<Pair<String, Double>>,
        cartItems: ArrayList<ItemLite>,
        itemCount: Int,
        targetTerm: OfferTerm,
        mappedItems: MutableList<Int>,
        offer: OfferData,
        isSource: Boolean
    ): Int {
        var remainingCount = itemCount

        items.forEach {
            for (i in 0 until cartItems.size) {
                if (remainingCount > 0) {
                    if (it.first == cartItems[i].sku && cartItems[i].nonDiscounted()) {
                        remainingCount -= cartItems[i].quantity
                        val discountValue = if (!isSource) {
                            getDiscountValue(
                                offerTerm = targetTerm,
                                amount = cartItems[i].price * cartItems[i].quantity
                            )
                        } else {
                            0.00
                        }
                        cartItems[i].discountAmount = discountValue
                        cartItems[i].appliedDiscount = ChargesData(
                            title = "Item Level Discount",
                            value = discountValue,
                            percentage = 0.0,
                            offerDetails = convertToOrderDiscount(offer, isSource)
                        )
                        mappedItems.add(i)
                    }
                } else {
                    break
                }
            }
        }

        return remainingCount
    }

    private fun validateDiscounts(
        offerTerm: OfferTerm,
        dealDistribution: Boolean,
        cartItems: ArrayList<ItemLite>,
        mappedItems: List<Int>,
        itemCount: Int
    ) {
        if (itemCount != 0) {
            mappedItems.forEach { cartItems[it].appliedDiscount = null }
        } else {
            var totalPrice = 0.0
            var discountAmount = 0.0

            mappedItems.forEach {
                val discount = getDiscountValue(
                    cartItems[it].appliedDiscount?.offerDetails?.isSourceItem == true,
                    offerTerm,
                    cartItems[it].price * cartItems[it].quantity,
                    mappedItems,
                    cartItems
                )
                cartItems[it].appliedDiscount?.value = discount / cartItems[it].quantity
                cartItems[it].discountAmount = discount / cartItems[it].quantity
            }
            if (dealDistribution) {
                mappedItems.forEach { index ->
                    totalPrice += cartItems[index].price * cartItems[index].quantity
                    if (cartItems[index].appliedDiscount?.offerDetails?.isSourceItem == false) {
                        cartItems[index].appliedDiscount?.value?.let { discountAmount += it }
                    }
                }
            }

            mappedItems.forEach {
                val discountValue = if (dealDistribution) {
                    ((cartItems[it].price * cartItems[it].quantity) / totalPrice) * discountAmount
                } else {
                    getDiscountValue(
                        cartItems[it].appliedDiscount?.offerDetails?.isSourceItem == true,
                        offerTerm,
                        cartItems[it].price * cartItems[it].quantity,
                        mappedItems,
                        cartItems

                    )
                }
                cartItems[it].appliedDiscount?.value = discountValue / cartItems[it].quantity
                cartItems[it].discountAmount = discountValue / cartItems[it].quantity
                cartItems[it].appliedDiscount?.offerDetails?.mappedOfferItems = mappedItems
            }
        }
    }

    private fun ArrayList<Pair<String, Double>>.takeTopN(
        n: Int,
        ascending: Boolean = false
    ): List<Pair<String, Double>> {
        return if (ascending) {
            this.sortedBy { it.second } // Ascending order
        } else {
            this.sortedByDescending { it.second } // Descending order
        }.take(n)
    }

    private fun ItemLite.isValidItem(
        items: HashMap<String, String>,
        offerTerm: OfferTerm
    ): Boolean {
        val isValid = items[this.sku]
        return (isValid != null || !offerTerm.isIncludeItems) &&
                this.mainItemID.isNullOrEmpty() &&
                this.appliedDiscount == null
    }

    private fun getDiscountValue(
        isSource: Boolean = false,
        offerTerm: OfferTerm,
        amount: Double,
        mappedItems: List<Int> = emptyList(),
        cartItems: List<ItemLite> = emptyList()
    ): Double {
        if (!isSource) {
            when (offerTerm.discountTypeCode.toInt()) {
                2 -> {
                    val discount = if (offerTerm.discountTypeValue.toDouble() > 100) {
                        amount
                    } else {
                        (offerTerm.discountTypeValue.toDouble() / 100) * amount
                    }
                    return discount
                }

                3 -> {
                    return if (mappedItems.isNotEmpty()) {
                        val itemsToDiscount = ArrayList<ItemLite>()
                        var totalPrice = 0.0
                        mappedItems.forEach {
                            itemsToDiscount.add(cartItems[it])
                            totalPrice =
                                mappedItems.sumOf { index -> if (cartItems[index].appliedDiscount?.offerDetails?.isSourceItem == false) cartItems[index].price * cartItems[index].quantity else 0.0 }
                        }
                        val minimumAmountItem =
                            itemsToDiscount.minByOrNull { it.price }
                        val minimumAmount = minimumAmountItem?.price ?: 0.0
                        val discount =
                            if (minimumAmount < offerTerm.discountTypeValue.toDouble()) {
                                minimumAmount
                            } else {
                                offerTerm.discountTypeValue.toDouble()
                            }
                        (amount / totalPrice) * discount
                    } else {
                        val discount = if (amount < offerTerm.discountTypeValue.toDouble()) {
                            amount
                        } else {
                            offerTerm.discountTypeValue.toDouble()
                        }
                        discount
                    }
                }

                4 -> {
                    var totalPrice = amount
                    val discountValue = offerTerm.discountTypeValue.toDouble()
                    if (mappedItems.isNotEmpty()) {
                        totalPrice =
                            mappedItems.sumOf { if (cartItems[it].appliedDiscount?.offerDetails?.isSourceItem == false) cartItems[it].price * cartItems[it].quantity else 0.0 }
                        val discount =
                            if (totalPrice > discountValue) totalPrice - discountValue else 0.0
                        return (amount / totalPrice) * discount
                    } else {
                        if (totalPrice > discountValue) totalPrice - discountValue
                    }
                }
            }
        }

        return 0.0
    }

    private fun calculateCartValues(
        offer: OfferData,
        order: OrderPlaceRequest
    ): Pair<Int, Double> {
        var itemCount = 0
        var itemPrice = 0.0

        if (offer.offerTerm[0].isIncludeItems) {
            offer.offerTermProduct.forEach { product ->
                order.itemDetails.forEach { item ->
                    if (item.isMembership != true && (
                                product.itemId.isEmpty() && item.categoryId == product.categoryId ||
                                        product.itemId.isNotEmpty() && item.sku == product.itemId
                                )
                    ) {
                        itemCount += item.quantity
                        itemPrice += item.subTotal
                    }
                }
            }
        } else {
            order.itemDetails.forEach {
                if (it.mainItemID.isNullOrEmpty() && it.isMembership != true) {
                    itemPrice += it.subTotal
                    itemCount += it.quantity
                }
            }
        }

        return Pair(itemCount, itemPrice)
    }

    private fun validateBothCondition(
        term: OfferTerm,
        itemCount: Int,
        itemPrice: Double
    ): Boolean {
        val comparedAmount = term.amount?.let { itemPrice >= it } ?: false
        val comparedCount = itemCount > 0 && itemCount >= term.count
        return comparedCount && comparedAmount
    }

    private fun validateAmountCondition(
        term: OfferTerm,
        itemPrice: Double
    ): Boolean {
        val comparedAmount =
            term.amount?.let { itemPrice >= it } ?: false
        return comparedAmount
    }

    private fun validateQuantityCondition(
        term: OfferTerm,
        itemCount: Int
    ): Boolean {
        return itemCount >= term.count
    }

    private fun convertToOrderDiscount(
        offer: OfferData,
        isSource: Boolean?,
        mappedItemList: ArrayList<Int> = ArrayList()
    ): OrderDiscount {
        offer.apply {
            val offerHeader = OrderOfferHeader(
                offerHeader.dealType,
                offerHeader.description,
                offerHeader.offerHeaderId,
                offerHeader.termsConditions
            )
            return OrderDiscount(
                entity,
                isSource,
                mappedItemList,
                offerId,
                offerHeader,
                offer.offerHeader.termStyle,
                if (offer.offerTerm.isNotEmpty()) offer.offerTerm[0].couponCode else ""
            )
        }
    }

    private fun isSimpleOfferValid(
        conditionType: String,
        term: OfferTerm,
        itemCount: Int,
        itemPrice: Double,
    ): Boolean {
        return when (conditionType) {
            ConditionType.Both.name -> validateBothCondition(
                term,
                itemCount,
                itemPrice
            )

            ConditionType.Amount.name -> validateAmountCondition(
                term,
                itemPrice
            )

            ConditionType.Count.name -> validateQuantityCondition(
                term,
                itemCount
            )

            else -> false
        }
    }

    private val orderMutex = Mutex()
    private suspend fun isC3OfferValid(
        itemLevelOfferList: HashMap<String, Pair<HashMap<String, String>, HashMap<String, String>>>,
        sourceAndTarget: HashMap<String, Pair<List<OfferTerm>, List<OfferTerm>>>,
        offer: OfferData,
        order: OrderPlaceRequest,
    ): Boolean {
        orderMutex.withLock {
            val cartItems = order.itemDetails.map {
                it.copy(
                    appliedDiscount = null,
                    discountAmount = 0.0,
                    totalDiscount = 0.0
                )
            }
            if (offer.offerTerm.size > 1) {
                val filteredSourceAndTarget =
                    sourceAndTarget[offer.offerId]
                val filteredItems =
                    itemLevelOfferList[offer.offerId]
                if (filteredSourceAndTarget != null && filteredItems != null) {
                    val (sourceItems, targetItems) = filteredItems
                    val (source, target) = filteredSourceAndTarget
                    if (source.isNotEmpty() && !source[0].isIncludeItems) {
                        sourceItems.clear()
                        cartItems.forEach { item -> item.sku?.let { sourceItems[it] = it } }
                    }
                    if (target.isNotEmpty() && !target[0].isIncludeItems) {
                        targetItems.clear()
                        cartItems.forEach { item -> item.sku?.let { targetItems[it] = it } }
                    }
                    if (target.isNotEmpty() && source.isNotEmpty()) {
                        return checkC3Offer(
                            offer,
                            cartItems as ArrayList<ItemDetailsList>,
                            source[0],
                            target[0],
                            sourceItems,
                            targetItems
                        )
                    }
                }
            }
            return false
        }


    }
}

private enum class CouponType {
    C1_C2_TRANSACTION_WITH_ITEMS_BOTH,
    C1_C2_TRANSACTION_WITH_ITEMS_COUNT,
    C1_C2_TRANSACTION_WITH_ITEMS_AMOUNT,
    C1_C2_TRANSACTION_WITHOUT_ITEMS_BOTH,
    C1_C2_TRANSACTION_WITHOUT_ITEMS_COUNT,
    C1_C2_TRANSACTION_WITHOUT_ITEMS_AMOUNT,
    C1_C2_ITEM_BOTH,
    C1_C2_ITEM_COUNT,
    C1_C2_ITEM_AMOUNT,
    C3_ITEM_AMOUNT,
    C3_ITEM_COUNT,
    C3_ITEM_BOTH,
    NONE
}

private fun getSourceAndTarget(offer: OfferData): Pair<List<OfferTerm>, List<OfferTerm>> {
    val sourceArray = mutableListOf<OfferTerm>()
    val targetArray = mutableListOf<OfferTerm>()

    offer.offerTerm.forEach {
        when {
            it.discountTypeCode == "1" -> sourceArray.add(it)
            else -> targetArray.add(it)
        }
    }

    return sourceArray to targetArray
}

private fun getSourceAndTargetItems(
    offer: OfferData,
    order: OrderPlaceRequest,
    sourceTerms: List<OfferTerm>,
    targetTerms: List<OfferTerm>
): Pair<HashMap<String, String>, HashMap<String, String>> {
    val sourceProductList = getOfferTermProducts(offer, sourceTerms.firstOrNull())
    val targetProductList = getOfferTermProducts(offer, targetTerms.firstOrNull())

    val sourceItems = processProductList(sourceProductList, order)
    val targetItems = processProductList(targetProductList, order)

    return sourceItems to targetItems
}

private fun processProductList(
    productList: List<OfferTermProduct>,
    order: OrderPlaceRequest,
): HashMap<String, String> {

    val map = HashMap<String, String>()

    order.itemDetails.forEach { item ->

        productList.forEach { product ->

            val isMatch =
                if (product.itemId.isNotEmpty()) {
                    product.itemId == item.sku
                } else {
                    product.categoryId == item.categoryId
                }

            if (isMatch) {
                item.sku?.let { sku ->
                    map[sku] = sku
                }
            }
        }
    }

    return map
}

private fun getOfferTermProducts(offer: OfferData, term: OfferTerm?): List<OfferTermProduct> {
    return term?.let { offer.offerTermProduct.filter { it.offerTermId == term.offerTermId } }
        ?: emptyList()
}

object OfferSchedulerUtil {

    fun isOfferActiveNow(offer: OfferData): Boolean {
        if (!isWithinDateRange(offer)) return false

        val scheduler = offer.offerScheduler
        if (scheduler.days.isEmpty()) return true

        val currentDay = getCurrentDayAbbreviation()
        val currentMinutes = getCurrentTimeInMinutes()

        return if (scheduler.isAllDays) {
            val daySchedule = scheduler.days.find { it.day == currentDay }
            daySchedule?.let { isTimeInAnyFrame(currentMinutes, it.timeFrame) } ?: true
        } else {
            val daySchedule = scheduler.days.find { it.day == currentDay }
            daySchedule?.let { isTimeInAnyFrame(currentMinutes, it.timeFrame) } ?: false
        }
    }

    private val timeZone = TimeZone.currentSystemDefault()

    private fun isWithinDateRange(offer: OfferData): Boolean {
        return try {
            val today = Clock.System.now()
                .toLocalDateTime(timeZone)
                .date

            val startDate = parseIsoDate(offer.offerHeader.effectiveDate)
            val endDate = parseIsoDate(offer.offerHeader.endDate)

            today >= startDate && today <= endDate
        } catch (e: Exception) {
            true
        }
    }

    private fun parseIsoDate(dateStr: String): LocalDate {
        return Instant.parse(dateStr)
            .toLocalDateTime(timeZone)
            .date
    }

    private fun getCurrentTimeInMinutes(): Int {
        val now = Clock.System.now()
            .toLocalDateTime(timeZone)

        return now.hour * 60 + now.minute
    }

    private fun getCurrentDayAbbreviation(): String {
        return when (Clock.System.now().toLocalDateTime(timeZone).dayOfWeek) {
            DayOfWeek.MONDAY -> "Mon"
            DayOfWeek.TUESDAY -> "Tue"
            DayOfWeek.WEDNESDAY -> "Wed"
            DayOfWeek.THURSDAY -> "Thu"
            DayOfWeek.FRIDAY -> "Fri"
            DayOfWeek.SATURDAY -> "Sat"
            DayOfWeek.SUNDAY -> "Sun"
            else -> {
                ""
            }
        }
    }

    private fun parseTimeToMinutes(time: String): Int {
        val parts = time.split(":")
        return parts[0].toInt() * 60 + parts[1].toInt()
    }


    private fun isTimeInAnyFrame(currentMinutes: Int, timeFrames: List<TimeFrame>): Boolean {
        if (timeFrames.isEmpty()) return true
        return timeFrames.any { frame ->
            try {
                val start = parseTimeToMinutes(frame.startTime)
                val end = parseTimeToMinutes(frame.endTime)
                when {
                    // Full day: 00:00 to 23:59
                    start == 0 && end == 1439 -> true
                    // Overnight e.g. 22:00–02:00
                    end < start -> currentMinutes >= start || currentMinutes <= end
                    // Normal range
                    else -> currentMinutes >= start && currentMinutes <= end
                }
            } catch (e: Exception) {
                true
            }
        }
    }
}

