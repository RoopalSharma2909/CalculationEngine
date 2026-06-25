package com.cravrr.calculationengine

import com.cravrr.calculationengine.model.ItemDetailsList
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable


@Serializable
class OrderPlaceRequest(
    var itemDetails: ArrayList<ItemDetailsList>,
    var paymentDetails: ArrayList<PaymentDetails>,
    var changeTender: Double,
    var totalDiscount: Double,
    var totalItemTax: Double,
    var totalNetSale: Double,
    var totalGrossSale: Double,
    var transactionGrandAmount: Double,
    var roundOffAmount: Double,
    var discountPercentage: Double,
    var discountAmount: Double,
    var tipAmount: Double,
    var isTaxExempt: Boolean,
    var subTotal: Double,
    var subTotalExcludeMembership: Double?,
    var totalCharges: Double,
    var appliedDiscount: ArrayList<ChargesData>,
    var charges: ArrayList<ChargesData>,
    var selectedOrderType: OrderTypeData?,
    var loyalty: LoyaltyData?,
    var taxes: List<Tax>?,
    var taxableAmount: Double?
)


@Serializable
data class OrderTypeData(
    var charges: List<OrderLevelChargesData>? = emptyList(),
)

@Serializable
data class OrderLevelChargesData(
    @SerialName("apply_at_level") val applyAtLevel: String? = null,
    @SerialName("charge_id") val chargeId: String? = null,
    @SerialName("charge_tax_ids") val chargeTaxIds: List<ChargeTaxId>? = null,
    @SerialName("description") val description: String? = null,
    @SerialName("excluded_platforms") val excludedPlatforms: List<String>? = null,
    @SerialName("_id") val id: String? = null,
    @SerialName("item_list") val itemList: List<String>? = null,
    @SerialName("min_order_amount") val minOrderAmount: Double? = null,
    @SerialName("order_types") val orderTypes: List<String>? = null,
    @SerialName("status") val status: Boolean? = null,
    @SerialName("store_list") val storeList: List<String>? = null,
    @SerialName("title") val title: String? = null,
    @SerialName("types") val types: String? = null,
    @SerialName("value") val value: Double? = null,
    @SerialName("value_type") val valueType: String? = null
)

suspend fun OrderPlaceRequest.refreshCalculation(
    roundOff: Boolean,
    type: String,
    paymentTypes: List<String>,
    resetDiscount: Boolean,
    isTaxIncluded: Boolean,
    cashDiscount: Double,
    surcharge: Double,
    selectedPayment: String
) {
    if (resetDiscount) {
        totalDiscount = 0.0
    }
    OrderCalculationService.calculateOrderTotals(
        this,
        isTaxIncluded
    )
    OrderCalculationService.applyDiscountsAndCharges(
        roundOff,
        type, paymentTypes,
        this,
        cashDiscount,
        surcharge,
        selectedPayment, isTaxIncluded,
    )
    OrderCalculationService.updateUIState()
    if (OrderCalculationService.updateUI.value > 1000) {
        OrderCalculationService.setUpdateUI(0)
    }
}

@Serializable
data class LoyaltyData(
    @SerialName("loyalty_type")
    val loyaltyType: String? = null,

    @SerialName("program_uuid")
    val programUUID: String? = null,

    @SerialName("store_id")
    val storeId: String? = null,

    @SerialName("member_uuid")
    val memberUUID: String? = null,

    @SerialName("reward_uuid")
    val rewardUUID: String? = null,
)


@Serializable
data class OrderDiscount(
    @SerialName("entity") val entity: String,
    @SerialName("is_source_item") val isSourceItem: Boolean? = true,
    @SerialName("mapped_offer_items") var mappedOfferItems: List<Int>? = emptyList(),
    @SerialName("offer_id") val offerId: String,
    @SerialName("offer_header") val offerHeader: OrderOfferHeader
)

@Serializable
data class OrderOfferHeader(
    @SerialName("deal_type") val dealType: String,
    @SerialName("description") val description: String,
    @SerialName("offer_header_id") val offerHeaderId: String,
    @SerialName("terms_conditions") val termsConditions: String,
    @SerialName("coupon_code") val couponCode: String = ""
)

@Serializable
data class ChargesData(
    @SerialName("apply_at_level") val applyAtLevel: String? = "",
    @SerialName("charge_id") val chargeId: String? = "",
    @SerialName("charge_tax_ids") val chargeTaxIds: List<ChargeTaxId>? = emptyList(),
    @SerialName("percentage") var percentage: Double? = 0.0,
    @SerialName("offer_details") var offerDetails: OrderDiscount? = null,
    @SerialName("description") val description: String? = "",
    @SerialName("order_level_charges") val orderLevelCharges: Double? = 0.0,
    @SerialName("order_level_charges_tax") val orderLevelChargesTax: Double? = 0.0,
    @SerialName("store_id") val storeId: String? = "",
    @SerialName("title") val title: String? = "",
    @SerialName("total_order_level_charges") val totalOrderLevelCharges: Double? = 0.0,
    @SerialName("types") val types: String? = "",
    @SerialName("value") var value: Double,
    @SerialName("value_type") val valueType: String? = "",
    @SerialName("points") val points: Int? = 0,
    @SerialName("min_order_value") val minOrderValue: Double = 0.0,
)


@Serializable
data class PaymentDetails(
    @SerialName("change") var change: Double = 0.0,
)


@Serializable
data class Tax(
    @SerialName("_id") val id: String? = null,
    @SerialName("tax_id") val taxId: String? = null,
    @SerialName("tax_dsc") val taxDsc: String? = null,
    @SerialName("tax_type") val taxType: String? = null,
    @SerialName("tax_pct") val taxPct: Double? = null,
    @SerialName("store_id") val storeId: String? = null,
    @SerialName("tax_amount") var taxAmount: Double? = null,
    @SerialName("taxable_amount") var taxableAmount: Double? = null
)

@Serializable
data class ChargeTaxId(
    @SerialName("action") val action: String? = null,
    @SerialName("_id") val id: String? = null,
    @SerialName("status") val status: Boolean? = null,
    @SerialName("tax_dsc") val taxDsc: String? = null,
    @SerialName("tax_pct") val taxPct: Double? = null,
    @SerialName("tax_type") val taxType: String? = null,
    @SerialName("tax_amount") var taxAmount: Double? = 0.0
)