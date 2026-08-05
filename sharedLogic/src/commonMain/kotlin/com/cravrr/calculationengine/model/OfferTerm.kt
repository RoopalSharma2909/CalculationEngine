package com.cravrr.calculationengine.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class OfferTerm(
    @SerialName("_id")
    val id: String = "",
    val amount: Double? = null,
    @SerialName("condition_type")
    val conditionType: String = "",
    val count: Int = 0,
    @SerialName("coupon_code")
    val couponCode: String? = null,
    @SerialName("created_at")
    val createdAt: String = "",
    @SerialName("discount_type_code")
    val discountTypeCode: String = "",
    @SerialName("discount_type_value")
    val discountTypeValue: String = "",
    @SerialName("is_include_items")
    val isIncludeItems: Boolean = false,
    @SerialName("meid_typecode")
    val meidTypecode: String? = null,
    @SerialName("meid_value")
    val meidValue: String? = null,
    @SerialName("no_pertrans")
    val noPerTrans: Int = 0,
    @SerialName("offer_id")
    val offerId: String = "",
    @SerialName("offer_term_id")
    val offerTermId: String = "",
    @SerialName("offering_type")
    val offeringType: String = "",
    @SerialName("offering_typecode")
    val offeringTypeCode: Int = 0,
    @SerialName("product_type")
    val productType: String = "",
    @SerialName("quan_enforce")
    val quanEnforce: Boolean = false,
    @SerialName("reward_type")
    val rewardType: String = "",
    @SerialName("subsdiscavailable")
    val subsDiscAvailable: Boolean = false,
    @SerialName("type_code")
    val typeCode: String = ""
)

internal data class ItemLite(
    val sku: String? = null,
    var appliedDiscount: ChargesData? = null,
    val price: Double,
    var quantity: Int,
    val mainItemID: String? = null,
    var discountAmount: Double,
    var itemName: String,
    var categoryId: String,
)

@Serializable
data class OfferData(
    @SerialName("offer_id")
    var offerId: String = "",

    @SerialName("_id")
    var id: String = "",

    @SerialName("created_at")
    var createdAt: String = "",

    var entity: String = "",

    @SerialName("offer_distribution_id")
    var offerDistributionId: String = "",

    @SerialName("offer_header")
    var offerHeader: OfferHeader = OfferHeader(),

    @SerialName("offer_scheduler")
    var offerScheduler: OfferScheduler = OfferScheduler(),

    @SerialName("offer_term")
    var offerTerm: List<OfferTerm> = emptyList(),

    @SerialName("offer_term_product")
    var offerTermProduct: List<OfferTermProduct> = emptyList(),

    var status: Boolean = false,

    @SerialName("store_id")
    var storeId: String = "",

    var isValid: Boolean = false,

    @SerialName("offering_type_first")
    var offeringTypeFirst: String = ""
)

@Serializable
data class OfferTermProduct(
    @SerialName("_id")
    val id: String = "",
    @SerialName("category_id")
    val categoryId: String = "",
    @SerialName("created_at")
    val createdAt: String = "",
    @SerialName("disc_type_code")
    val discTypeCode: String = "",
    @SerialName("disc_value")
    val discValue: String = "",
    @SerialName("display_qty")
    val displayQty: String = "",
    @SerialName("inex_flag")
    val inexFlag: String = "",
    @SerialName("item_id")
    val itemId: String = "",
    @SerialName("offer_id")
    val offerId: String = "",
    @SerialName("offer_term_id")
    val offerTermId: String = "",
    @SerialName("offer_term_product_id")
    val offerTermProductId: String = "",
    @SerialName("product_type")
    val productType: String = ""
)

@Serializable
data class OfferHeader(
    @SerialName("_id")
    val id: String = "",
    val anniversary: String = "",
    val birthday: String = "",
    @SerialName("created_at")
    val createdAt: String = "",
    @SerialName("deal_type")
    val dealType: String = "",
    val description: String = "",
    @SerialName("effective_date")
    val effectiveDate: String = "",
    @SerialName("end_date")
    val endDate: String = "",
    @SerialName("offer_header_id")
    val offerHeaderId: String = "",
    @SerialName("offer_id")
    val offerId: String = "",
    @SerialName("term_style")
    val termStyle: String = "",
    @SerialName("terms_conditions")
    val termsConditions: String = "",
    val dealdist: String = ""
)

@Serializable
data class OfferScheduler(
    @SerialName("_id")
    val id: String = "",
    val days: List<Day> = emptyList(),
    @SerialName("is_all_days")
    val isAllDays: Boolean = false,
    @SerialName("offer_id")
    val offerId: String = "",
    @SerialName("offer_scheduler_id")
    val offerSchedulerId: String = ""
)

@Serializable
data class Day(
    val day: String = "",
    @SerialName("time_frame")
    val timeFrame: List<TimeFrame> = emptyList()
)

@Serializable
data class TimeFrame(
    @SerialName("end_time")
    val endTime: String = "",
    @SerialName("start_time")
    val startTime: String = ""
)
