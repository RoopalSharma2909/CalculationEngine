package com.cravrr.calculationengine.model

import com.cravrr.calculationengine.ChargesData
import com.cravrr.calculationengine.ItemPriceCalculator
import com.cravrr.calculationengine.OrderPlaceRequest
import com.cravrr.calculationengine.Tax
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

@Serializable
data class ItemDetailsList(
    @SerialName("additional_price") val additionalPrice: Double? = null,
    @SerialName("selected_combo") var selectedCombo: ArrayList<ItemDetailsList> = ArrayList(),
    @SerialName("main_item_id") val mainItemID: String? = null,
    @SerialName("quantity") var quantity: Int = 1,
    @SerialName("regular_sales_unit_price") var regularSalesUnitPrice: Double = 0.0,
    @SerialName("extended_amount") var extendedAmount: Double = 0.0,
    @SerialName("total_discount") var totalDiscount: Double = 0.0,
    @SerialName("total_item_tax") var totalItemTax: Double = 0.0,
    @SerialName("total_net_sale") var totalNetSale: Double = 0.0,
    @SerialName("tax") var taxList: List<Tax>? = null,
    @SerialName("selectedAddonsItems") var selectedAddonsItems: ArrayList<SelectedAddonsItems>? = arrayListOf(),
    @SerialName("total_order_discount") var totalOrderDiscount: Double = 0.0,
    @SerialName("sub_total") var subTotal: Double = 0.00,
    @SerialName("isVoid") var isVoid: Boolean? = null,
    @SerialName("is_refund") var isRefund: Boolean? = null,
    @SerialName("total_gross_sale") var totalGrossSale: Double = 0.00,
    @SerialName("discount_percent") var discountPercent: Double = 0.0,
    @SerialName("discount_amount") var discountAmount: Double = 0.0,
    @SerialName("applied_discount") var appliedDiscount: ChargesData? = null,
    @SerialName("is_membership") val isMembership: Boolean? = null,
    @SerialName("taxable_amount") var taxableAmount: Double? = null,
) {

    fun calculatePrice(
        order : OrderPlaceRequest,
        calculator: ItemPriceCalculator,
        totalAmount: Double,
        isTaxIncluded: Boolean
    ): ItemDetailsList {
        return calculator.calculateItemPrice2(
            order,
            this,
            totalAmount,
            isTaxIncluded
        )
    }
}

@Serializable
data class SelectedAddonsItems(
    @SerialName("_id")
    val id: String? = null,

    @SerialName("header_id")
    val headerId: String? = null,

    @SerialName("item_name")
    val itemName: String? = null,

    @SerialName("alias_name")
    val aliasName: String? = null,

    @SerialName("price")
    var price: Double = 0.0,

    @SerialName("subTotal")
    var subTotal: Double = 0.0,

    @SerialName("taxAmount")
    var taxAmount: Double = 0.0,

    @SerialName("qty")
    val qty: Double = 0.0,

    @SerialName("isSelected")
    var isSelected: Boolean = false,

    @SerialName("mappin_id")
    var mappinId: String? = null,

    @SerialName("addon_group_id")
    var addonGroupId: String? = null,

    @SerialName("addon_group_name")
    var addonGroupName: String? = null,

    @SerialName("addon_group_mappin_id")
    var addonGroupMappinId: String? = null,

    @SerialName("sku")
    var sku: String? = null,

    @Transient
    @SerialName("is_item_level")
    var isItemLevel: Boolean = false
)