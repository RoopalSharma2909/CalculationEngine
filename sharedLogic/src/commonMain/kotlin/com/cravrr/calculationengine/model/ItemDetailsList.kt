package com.cravrr.calculationengine.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient


@Serializable
internal data class ItemDetailsList(
    @SerialName("_id") val id: String = "",
    @SerialName("item_id") val itemId: String? = null,
    @SerialName("is_stock") var isStock: Boolean = false,
    @SerialName("alias_name") val aliasName: String? = null,
    @SerialName("dining_option") val diningOption: String? = null,
    @SerialName("additional_price") val additionalPrice: Double? = null,
    @SerialName("selected_combo") var selectedCombo: ArrayList<ItemDetailsList>? = null,
    @SerialName("name") val name: String? = null,
    @SerialName("main_item_id") val mainItemID: String? = null,
    @SerialName("tag") val tag: List<String>? = null,
    @SerialName("item_img") val itemImage: String? = null,
    @SerialName("mappin_id") val mappingId: String? = null,
    @SerialName("description") val description: String? = null,
    @SerialName("sku") val sku: String? = null,
    @SerialName("quantity") var quantity: Int = 1,
    @SerialName("regular_sales_unit_price") var regularSalesUnitPrice: Double = 0.0,
    @SerialName("extended_amount") var extendedAmount: Double = 0.0,
    @SerialName("total_discount") var totalDiscount: Double = 0.0,
    @SerialName("total_item_tax") var totalItemTax: Double = 0.0,
    @SerialName("total_net_sale") var totalNetSale: Double = 0.0,
    @SerialName("status") val status: Boolean? = null,
    @SerialName("category_id") val categoryId: String? = null,
    @SerialName("item_name") val itemName: String,
    @SerialName("variant_name") val variantName: String = "",
    @SerialName("store_id") val storeId: String? = null,
    @SerialName("sequence_no") val sequenceNo: Int? = null,
    @SerialName("tax") var taxList: List<Tax>? = null,
    @SerialName("selected_modifier") var selectedModifier: ArrayList<SelectedModifier>? = null,
    @SerialName("selectedAddonsItems") var selectedAddonsItems: ArrayList<SelectedAddonsItems>? = null,
    @SerialName("printer_tag") var printerTag: PrinterTag? = null,
    @SerialName("item_confirmed") var itemConfirmed: Boolean = false,
    @SerialName("is_kot_printed") var isKotPrinted: Boolean = false,
    @SerialName("isSentItem") var isSentItem: Boolean? = null,
    @SerialName("special_request") var specialRequest: String? = null,
    @SerialName("total_order_discount") var totalOrderDiscount: Double = 0.0,
    @SerialName("sub_total") var subTotal: Double = 0.00,
    @SerialName("is_refund") var isRefund: Boolean? = null,
    @SerialName("is_void") var isVoid: Boolean? = null,
    @SerialName("is_out_of_stock") var isOutOfStock: Boolean = false,
    @SerialName("inventory_quantity") var inventoryQuantity: Int? = null,
    @SerialName("dietary") val dietary: String? = null,
    @SerialName("nutrition") var nutrition: ArrayList<Nutrition>? = null,
    @SerialName("item_display_img") val itemDisplayImage: String? = null,
    @SerialName("total_gross_sale") var totalGrossSale: Double = 0.00,
    @SerialName("is_prepared") var isPrepared: Boolean = false,
    @SerialName("discount_percent") var discountPercent: Double = 0.0,
    @SerialName("discount_amount") var discountAmount: Double = 0.0,
    @SerialName("item_seq") var itemSeq: Int? = null,
    @SerialName("applied_discount") var appliedDiscount: ChargesData? = null,
    @SerialName("is_retail_price") var isRetailPrice: Boolean? = null,
    @SerialName("item_type") var itemType: String? = null,
    @SerialName("combo_group_name") var comboGroupName: String? = null,
    @SerialName("suggested_list") val suggestedItems: ArrayList<String>? = null,
    @SerialName("is_base_item") val isBaseItem: Boolean? = null,
    @SerialName("is_open_item") val isOpenItem: Boolean? = null,
    @SerialName("is_membership") val isMembership: Boolean? = null,
    @SerialName("is_selected_item") var isSelectedItem: Boolean = false,
    @SerialName("channel_plu") var channelPlu: List<ChannelPlu>? = null,
    @SerialName("taxable_amount") var taxableAmount: Double? = null
)

@Serializable
data class Nutrition(
    @SerialName("nutrition_name")
    val nutritionName: String? = null,

    @SerialName("nutrition_value")
    val nutritionValue: String? = null,

    @SerialName("nutrition_uom")
    val nutritionUom: String? = null
)

@Serializable
internal data class SelectedModifier(
    @SerialName("_id") val id: String? = null,
    @SerialName("mg_id") val mgId: String? = null,
    @SerialName("alias_display_name") val aliasDisplayName: String? = null,
    @SerialName("created_at") val createdAt: String? = null,
    @SerialName("modifier_display_name") val modifierDisplayName: String? = null,
    @SerialName("modifiers") val modifiers: List<ItemModifier>? =null,
    @SerialName("modifiers_group") val modifiersGroup: String? = null,
    @SerialName("store_id") val storeId: String? = null
)

@Serializable
internal data class ItemModifier(
    @SerialName("_id") val id: String = "",
    @SerialName("alias_name") val aliasName: String? = null,
    @SerialName("mv_id") val mvId: String? = null,
    @SerialName("mg_id") val mgId: String = "",
    @SerialName("modifier_name") val modifierName: String = "",
    @SerialName("isSelected") var isSelected: Boolean = false
)

@Serializable
internal data class PrinterTag(
    @SerialName("label_name") var labelName: String? = null,
    @SerialName("printer_label_id") val printerLabelId: String? = null
)
@Serializable
internal data class SelectedAddonsItems(
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

@Serializable
internal data class ChannelPlu(
    @SerialName("sku") val sku: String = "",
    @SerialName("channel_name") val channelName: String = "",
    @SerialName("plu") val plu: Double = 0.0,
    @SerialName("integration_detail") val integrationDetail: String = "",
    @SerialName("channel_code") val channelCode: String = ""
)
