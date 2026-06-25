package com.cravrr.calculationengine

import com.cravrr.calculationengine.expects.formatDoublePrice
import com.cravrr.calculationengine.model.ItemDetailsList
import kotlinx.coroutines.CoroutineExceptionHandler
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.async
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlin.math.absoluteValue
import kotlin.math.ceil
import kotlin.math.floor
import kotlin.math.round

object OrderCalculationService {

    val coroutineScope =
        CoroutineScope(
            SupervisorJob() + Dispatchers.Default + CoroutineExceptionHandler { _, exception ->
                println("CalculationService Exception ${exception.message}")
            }
        )

    private val itemPriceCalculator = ItemPriceCalculator()
    private var _updateUI = MutableStateFlow(0)
    val updateUI = _updateUI.asStateFlow()

    fun updateUIState() {
        coroutineScope.launch {
            _updateUI.value += 1
        }
    }

    fun setUpdateUI(value: Int) {
        coroutineScope.launch {
            _updateUI.emit(value)
        }
    }

    private fun calculateTotalPriceOfSelectedCombos(combos: ArrayList<ItemDetailsList>?): Double {
        return combos?.sumOf { comboItem ->
            (
                    comboItem.selectedAddonsItems?.sumOf { it.price * it.qty }
                        ?: 0.0
                    ) + (comboItem.additionalPrice ?: 0.0)
        } ?: 0.0
    }

    suspend fun calculateOrderTotals(
        order: OrderPlaceRequest,
        isTaxIncluded: Boolean,
    ) {
        coroutineScope.async {
            order.totalNetSale = 0.0
            order.totalItemTax = 0.0
            order.subTotal = 0.0
            order.subTotalExcludeMembership = 0.0
            order.totalGrossSale = 0.0
            order.taxableAmount = 0.0

            var totalAmountForDiscount = 0.0

            order.itemDetails.forEach { item ->
                if (
                    item.isMembership != true && item.isVoid != true && item.isVoid != true && item.isRefund != true
                ) {
                    val comboPrice =
                        calculateTotalPriceOfSelectedCombos(item.selectedCombo)

                    val totalTaxPercent =
                        item.taxList?.sumOf { tax -> tax.taxPct ?: 0.0 } ?: 0.0

                    val unitPrice =
                        item.regularSalesUnitPrice + comboPrice

                    val grossSales =
                        if (isTaxIncluded) {
                            ((unitPrice * item.quantity) * 100.0) /
                                    (100.0 + totalTaxPercent)
                        } else {
                            unitPrice * item.quantity
                        }

                    totalAmountForDiscount += grossSales
                }
            }

            order.itemDetails = order.itemDetails
                .mapIndexed { index, item ->
                    item.copy().also { itemCopy ->
                        if (item.isVoid != true && item.isVoid != true && item.isRefund != true) {
                            calculateItemPrice(
                                order,
                                index,
                                itemCopy,
                                totalAmountForDiscount,
                                isTaxIncluded
                            )
                        }

                    }
                }
                .toCollection(ArrayList())

            order.paymentDetails?.forEach {
                order.changeTender = it.change
            }

            order.totalItemTax = formatDoublePrice(order.totalItemTax)
            order.totalNetSale = formatDoublePrice(order.totalNetSale)
            if (order.isTaxExempt) {
                order.totalItemTax = 0.00
            }
        }.await()
    }

    private fun calculateItemPrice(
        order: OrderPlaceRequest,
        index: Int,
        item: ItemDetailsList,
        totalAmount: Double,
        isTaxIncluded: Boolean,
    ): ItemDetailsList {
        if (item.mainItemID.isNullOrEmpty()) {
            item.totalDiscount = 0.0
            item.selectedAddonsItems?.forEachIndexed { addonIndex, selectedAddonItem ->
                val calculatedItemIndex = index + addonIndex + 1
                if (order.itemDetails.size > calculatedItemIndex) {
                    val calculatedItem = order.itemDetails[calculatedItemIndex]
                    calculatedItem.calculatePrice(
                        order,
                        itemPriceCalculator,
                        totalAmount,
                        isTaxIncluded = isTaxIncluded
                    )
                    selectedAddonItem.price =
                        formatDoublePrice(calculatedItem.regularSalesUnitPrice)
                    selectedAddonItem.subTotal = formatDoublePrice(calculatedItem.totalGrossSale)
                }
            }

            item.calculatePrice(
                order,
                itemPriceCalculator,
                totalAmount,
                isTaxIncluded = isTaxIncluded
            )
            order.subTotal += item.subTotal
            if (item.isMembership != true) {
                order.subTotalExcludeMembership =
                    order.subTotalExcludeMembership?.plus(item.subTotal)
            }
            order.taxableAmount = order.taxableAmount?.plus(item.taxableAmount ?: 0.0)
            order.totalNetSale += item.totalNetSale
            order.totalItemTax += item.totalItemTax
            order.totalGrossSale += item.totalGrossSale
            order.totalDiscount += (item.totalDiscount + item.totalOrderDiscount)
        }
        return item
    }

    const val CARD_SURCHARGE = "Card Surcharge"
    const val CASH_DISCOUNT = "Cash Discount"

    suspend fun applyDiscountsAndCharges(
        roundOff: Boolean,
        type: String,
        paymentTypes: List<String>,
        order: OrderPlaceRequest,
        cashDiscount: Double = 0.0,
        surcharge: Double = 0.0,
        selectedPaymentType: String = "",
        isTaxIncluded: Boolean,
    ) {
        val indexOfComplimentaryDiscount =
            order.appliedDiscount.indexOfFirst { it.title == "Complimentary Discount" }
        val isComplimentaryOrderLevelApplied = indexOfComplimentaryDiscount != -1
        if (isComplimentaryOrderLevelApplied) {
            order.appliedDiscount[indexOfComplimentaryDiscount].value =
                order.totalDiscount
        }
        val orderDiscounts = ArrayList(order.appliedDiscount)
        var itemLevelDiscount = 0.0
        var itemLevelPercentage = 0.0
        var itemComplimentaryDiscount = 0.0
        var itemComplimentaryPercentDiscount = 0.0
        var orderLevelDiscount = 0.0
        order.itemDetails.forEach {
            if (it.appliedDiscount?.title == "Item Complimentary Discount") {
                itemComplimentaryDiscount += it.totalDiscount
                itemComplimentaryPercentDiscount += it.discountPercent
            } else {
                itemLevelDiscount += it.totalDiscount
                itemLevelPercentage += it.discountPercent
            }

            if (!isComplimentaryOrderLevelApplied) {
                orderLevelDiscount += it.totalOrderDiscount
            }
        }

        updateDiscountCharge(
            orderDiscounts,
            "Item Level Discount",
            itemLevelDiscount,
            percentage = itemLevelPercentage
        )
        updateDiscountCharge(
            orderDiscounts,
            "Item Complimentary Discount",
            itemComplimentaryDiscount,
            percentage = itemComplimentaryPercentDiscount
        )
        updateDiscountCharge(
            orderDiscounts,
            "Order Level Discount",
            orderLevelDiscount,
            order.discountPercentage,
            order.appliedDiscount.find { it.title == "Order Level Discount" }?.offerDetails
        )

        val appliedPoints = orderDiscounts.find { it.title == "Loyalty Points" }

        var appliedPointsDiscount = 0.0

        if (appliedPoints != null) {
            if (order.totalNetSale >= (appliedPoints.minOrderValue ?: 0.0)) {
                order.totalDiscount += appliedPoints.value
                appliedPointsDiscount = appliedPoints.value
            } else {
                val appliedIndex = orderDiscounts.indexOfFirst { it.title == "Loyalty Points" }
                orderDiscounts.removeAt(appliedIndex)
                order.loyalty = null
            }
        }

        val chargesTax =
            calculateOrderTypeChargesAndTax(
                order,
                order.charges,
                isTaxIncluded
            )

        order.totalCharges = order.charges.sumOf { it.value }
        order.totalItemTax += chargesTax

        val payableAmount =
            order.totalNetSale + order.totalItemTax + order.tipAmount + order.totalCharges

        var cashDiscountAmount = 0.0

        if (cashDiscount > 0.00) {
            cashDiscountAmount = payableAmount * (cashDiscount / 100)
            updateDiscountCharge(
                orderDiscounts,
                CASH_DISCOUNT,
                formatDoublePrice(cashDiscountAmount),
                cashDiscount
            )
        } else {
            orderDiscounts.removeAll { it.title == CASH_DISCOUNT }
        }

        order.appliedDiscount = orderDiscounts
        order.totalDiscount += cashDiscountAmount

        val surchargeIndex =
            order.charges.indexOfFirst {
                it.title == CARD_SURCHARGE
            }

        if (surcharge > 0.0) {
            val surchargeCharge = ChargesData(
                title = CARD_SURCHARGE,
                value = formatDoublePrice(payableAmount * (surcharge / 100)),
                percentage = surcharge
            )

            if (surchargeIndex >= 0) {
                order.charges[surchargeIndex] = surchargeCharge
            } else {
                order.charges.add(surchargeCharge)
            }
        } else {
            order.charges.removeAll { it.title == CARD_SURCHARGE }
        }

        order.totalCharges = order.charges.sumOf { it.value }

        order.transactionGrandAmount =
            formatDoublePrice(
                order.totalNetSale + order.totalItemTax + order.totalCharges + order.tipAmount - cashDiscountAmount - appliedPointsDiscount
            )

        if (order.discountAmount > 0.0 && order.discountAmount > (
                    order.subTotalExcludeMembership
                        ?: order.subTotal
                    )
        ) {
            order.discountAmount = 0.0
            order.totalDiscount = 0.0
            calculateOrderTotals(order, isTaxIncluded)
            applyDiscountsAndCharges(
                roundOff,
                type,
                paymentTypes,
                order,
                cashDiscount,
                surcharge,
                selectedPaymentType,
                isTaxIncluded
            )
        }

        if (order.isTaxExempt) {
            order.transactionGrandAmount -= order.totalItemTax
        }

        val roundOffData =
            applyRoundOff(
                selectedPaymentType,
                order.transactionGrandAmount,
                roundOff,
                type,
                paymentTypes
            )
        order.transactionGrandAmount = roundOffData.finalAmount
        val roundOff = roundOffData.roundOff
        order.roundOffAmount = formatRoundOff(roundOff)
    }

    fun refundItem(order: OrderPlaceRequest) {
        val chargesTax = order.charges.filter { it.title != CARD_SURCHARGE }
            .sumOf { it.orderLevelChargesTax ?: 0.0 }
        val cashDiscountAmount =
            order.appliedDiscount.find { it.title == CASH_DISCOUNT }?.value ?: 0.0
        val surchargeAmount =
            order.appliedDiscount.find { it.title == CARD_SURCHARGE }?.value ?: 0.0
        val totalCharges = order.charges.filter { it.title != CARD_SURCHARGE }.sumOf { it.value }
        val refundAmount =
            order.itemDetails
                .filter { it.isRefund == true || it.isVoid == true || it.isVoid == true }
                .sumOf {
                    if (order.totalNetSale <= 0.0) 0.0
                    val ratio = it.totalNetSale / order.totalNetSale
                    val chargeShare = totalCharges * ratio
                    val chargeShareTax = chargesTax * ratio
                    val cashDiscountShare = cashDiscountAmount * ratio
                    val surchargeShare = surchargeAmount * ratio
                    val tipShare = order.tipAmount * ratio

                    println("CALCULATION-> itemNetSale ${it.totalNetSale} orderNetSale-${order.totalNetSale} ratio-$ratio totalCharges-${order.totalCharges} chargesTax-${chargesTax} cashDisAmt-${cashDiscountAmount} cardSurcharge-${surchargeAmount}")
                    println("CALCULATION-> taxableAmt-${it.taxableAmount} totalTax-${it.totalItemTax} charge share-$chargeShare charge share tax-$chargeShareTax cash discount share-$cashDiscountShare surcharge share-$surchargeShare")

                    (it.taxableAmount ?: 0.0) +
                            it.totalItemTax +
                            chargeShareTax +
                            chargeShare +
                            tipShare +
                            surchargeShare -
                            cashDiscountShare
                }

        order.transactionGrandAmount -= refundAmount

    }

    fun formatRoundOff(roundOff: Double): Double {
        return when {
            roundOff > 0 -> round(roundOff * 100) / 100
            roundOff < 0 -> -round(roundOff.absoluteValue * 100) / 100
            else -> 0.0
        }
    }

    data class RoundOffResult(
        val finalAmount: Double,
        val roundOff: Double,
    )

    fun applyRoundOff(
        selectedPaymentType: String,
        amount: Double,
        roundOff: Boolean,
        type: String,
        paymentTypes: List<String>,
    ): RoundOffResult {
        val roundedAmount =
            if (paymentTypes.contains(selectedPaymentType) && roundOff) {
                when (type.lowercase()) {
                    "nearest" -> {
                        val decimal = amount % 1

                        if (decimal >= 0.5) {
                            ceil(amount)
                        } else {
                            floor(amount)
                        }
                    }

                    "down" -> floor(amount)

                    "up" -> ceil(amount)

                    else -> amount
                }
            } else {
                amount
            }

        val roundOffValue = roundedAmount - amount

        return RoundOffResult(
            finalAmount = roundedAmount,
            roundOff = roundOffValue
        )
    }

    private fun calculateOrderTypeChargesAndTax(
        order: OrderPlaceRequest,
        charge: ArrayList<ChargesData>,
        isTaxIncluded: Boolean,
    ): Double {

        if (order.selectedOrderType?.charges.isNullOrEmpty()) {

            charge.removeAll {
                (order.taxableAmount ?: 0.0) < (it.minOrderValue ?: 0.0)
            }

            return charge.sumOf {
                it.orderLevelChargesTax ?: 0.0
            }
        }

        var chargesTax = 0.0

        val orderLevelCharges =
            order.selectedOrderType?.charges
                ?.filter { it.applyAtLevel == "Order" }
                ?: emptyList()

        val orderChargeIds =
            orderLevelCharges.map { it.chargeId }.toSet()

        val applicableCharge =
            orderLevelCharges
                .filter {
                    (order.taxableAmount ?: 0.0) >= (it.minOrderAmount ?: 0.0)
                }
                .maxByOrNull { (it.minOrderAmount ?: 0.0) }

        /**
         * Remove all stale order-level charges.
         * If applicableCharge is null, all order-level charges are removed.
         */
        charge.removeAll {
            it.chargeId in orderChargeIds &&
                    it.chargeId != applicableCharge?.chargeId
        }

        if (applicableCharge == null) {
            return 0.0
        }

        val chargeValue =
            if (applicableCharge.valueType.equals("Absolute", true)) {

                val totalTaxPercent =
                    applicableCharge.chargeTaxIds?.sumOf { (it.taxPct ?: 0.0)} ?: 0.0

                if (isTaxIncluded) {
                    (applicableCharge.value ?: 0.0) / (1 + totalTaxPercent / 100)
                } else {
                    applicableCharge.value
                }

            } else {

                (order.taxableAmount ?: 0.0) *
                        ((applicableCharge.value ?: 0.0) / 100)
            }

        applicableCharge.chargeTaxIds?.forEach { tax ->
            val taxAmount = (chargeValue ?: 0.0) * ((tax.taxPct ?: 0.0) / 100)

            chargesTax += taxAmount

            tax.taxAmount =
                if (order.isTaxExempt) 0.0 else taxAmount
        }

        val newCharge = ChargesData(
            applyAtLevel = applicableCharge.applyAtLevel,
            chargeId = applicableCharge.chargeId,
            minOrderValue = applicableCharge.minOrderAmount ?: 0.0,
            title = applicableCharge.title,
            value = chargeValue ?: 0.0,
            description = applicableCharge.description,
            percentage = if (
                applicableCharge.valueType.equals("Percentage", true)
            ) {
                applicableCharge.value
            } else {
                0.0
            },
            chargeTaxIds = applicableCharge.chargeTaxIds,
            types = applicableCharge.types,
            valueType = applicableCharge.valueType,
            orderLevelChargesTax =
                if (order.isTaxExempt) 0.0 else chargesTax
        )

        val existingIndex =
            charge.indexOfFirst {
                it.chargeId == applicableCharge.chargeId
            }

        if (existingIndex >= 0) {
            charge[existingIndex] = newCharge
        } else {
            charge.add(newCharge)
        }

        return if (order.isTaxExempt) 0.0 else chargesTax
    }

    private fun updateDiscountCharge(
        charges: ArrayList<ChargesData>,
        title: String,
        value: Double,
        percentage: Double? = null,
        offerDetails: OrderDiscount? = null,
    ) {
        val formattedValue = formatDoublePrice(value)
        val existingChargeIndex = charges.indexOfFirst { it.title == title }

        if (value > 0.00) {
            val newCharge = ChargesData(
                title = title,
                value = formattedValue,
                percentage = percentage,
                offerDetails = offerDetails
            )
            if (existingChargeIndex != -1) {
                charges[existingChargeIndex] = newCharge
            } else {
                charges.add(newCharge)
            }
        } else {
            if (existingChargeIndex != -1) {
                charges.removeAt(existingChargeIndex)
            }
        }
    }
}
