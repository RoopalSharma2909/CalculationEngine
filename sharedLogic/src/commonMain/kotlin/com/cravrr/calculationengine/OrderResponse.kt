package com.cravrr.calculationengine

import com.cravrr.calculationengine.model.ItemDetailsList
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient


@Serializable
internal data class OrderPlaceRequest(

    @SerialName("isReprint")
    var isReprint: Boolean = false,

    @SerialName("isAdjusting")
    var isAdjusting: Boolean = false,

    @SerialName("isRefund")
    var isRefund: Boolean = false,

    @SerialName("fromScreen")
    var fromScreen: String? = "",

    @SerialName("_id")
    var id: String? = null,

    @SerialName("payment_code")
    var paymentCode: String? = null,

    @SerialName("type")
    var type: String? = null,

    @SerialName("invoice_no")
    var invoiceNo: Int? = null,

    @SerialName("invoice_bos_number")
    var invoiceBosNumber: String? = null,

    @SerialName("order_state")
    var orderState: String = "",

    @SerialName("order_source_code")
    var orderSourceCode: String? = null,

    @SerialName("order_source")
    var orderSource: String? = null,

    @SerialName("is_kot_printed")
    var kotPrinted: Boolean? = null,

    @SerialName("is_receipt_printed")
    var isReceiptPrinted: Boolean = false,

    @SerialName("is_sync")
    var isSync: Boolean = false,

    @SerialName("offline_invoice_no")
    var offlineInvoiceNo: String = "",

    @SerialName("order_no")
    var orderNo: String = "",

    @SerialName("store_details")
    var orderStoreDetails: OrderStoreDetails = OrderStoreDetails(),

    @SerialName("customer_details")
    var customerDetails: List<CustomerDetails> = ArrayList(),

    @SerialName("item_details")
    var itemDetails: ArrayList<ItemDetailsList> = ArrayList(),

    @SerialName("payment_details")
    var paymentDetails: ArrayList<PaymentDetails>? = null,

    @SerialName("change_tender")
    var changeTender: Double = 0.0,

    @SerialName("comment")
    var comment: String? = "",

    @SerialName("is_void")
    var isVoid: Boolean = false,

    @SerialName("is_send")
    var isSend: Boolean = false,

    @SerialName("order_status")
    var orderStatus: String = "",

    @SerialName("calender_date")
    var calenderDate: String = "",

    @SerialName("date_time")
    var dateTime: String = "",

    @SerialName("business_date")
    var businessDate: String = "",

    @SerialName("total_discount")
    var totalDiscount: Double = 0.0,

    @SerialName("total_item_tax")
    var totalItemTax: Double = 0.0,

    @SerialName("total_net_sale")
    var totalNetSale: Double = 0.0,

    @SerialName("total_gross_sale")
    var totalGrossSale: Double = 0.0,

    @SerialName("transaction_grand_amount")
    var transactionGrandAmount: Double = 0.0,

    @SerialName("round_off_amount")
    var roundOffAmount: Double = 0.0,

    @SerialName("refund_amount")
    var refundAmount: Double = 0.0,

    @SerialName("discount_percent")
    var discountPercentage: Double = 0.0,

    @SerialName("discount_amount")
    var discountAmount: Double = 0.0,

    @SerialName("state")
    var state: String = "",

    @SerialName("tip_amount")
    var tipAmount: Double = 0.0,

    @SerialName("tip_percentage")
    var tipPercentage: Double = 0.0,

    @SerialName("split_bill_type_count")
    var splitBillTypeCount: Int = 1,

    @SerialName("payment_payee_details")
    var splitTransactions: ArrayList<OrderPaymentDetails> = ArrayList(),

    @SerialName("payment_ids")
    var paidTransactions: ArrayList<OrderPaymentDetails> = ArrayList(),

    @SerialName("order_type")
    var orderType: String? = "",

    @SerialName("order_code")
    var orderTypeCode: String? = "",

    @SerialName("is_tax_exempt")
    var isTaxExempt: Boolean = false,

    @SerialName("split_bill_type")
    var splitBillType: Int = 1,

    @SerialName("receipt_print_count")
    var receiptPrintCount: Int? = 0,

    @SerialName("sub_total")
    var subTotal: Double = 0.0,

    @Transient
    @SerialName("sub_total_exclude_membership")
    var subTotalExcludeMembership: Double? = null,

    @SerialName("total_charges")
    var totalCharges: Double = 0.0,

    @SerialName("initial_paid")
    var initialPaid: Double = 0.0,

    @SerialName("applied_discount")
    var appliedDiscount: ArrayList<ChargesData> = ArrayList(),

    @SerialName("charges")
    var charges: ArrayList<ChargesData> = ArrayList(),

    var currentPayeeIndex: Int = -1,

    @SerialName("updated_at")
    var updateAt: String? = "",

    @SerialName("platform_details")
    var platformDetails: PlatForDetails? = null,

    @SerialName("order_time_millis")
    var orderTimeMillis: Long = 0L,

    @SerialName("order_state_history")
    var orderStateHistory: List<OrderStateHistory>? = null,

    @SerialName("selected_order_type")
    var selectedOrderType: OrderTypeData? = null,

    @SerialName("membership_plan")
    var membershipPlan: MemberShipPlan? = null,

    @SerialName("is_advance_order")
    var isAdvanceOrder: Boolean = false,

    @SerialName("order_scheduled")
    var orderScheduled: OrderScheduled? = null,

    @SerialName("loyalty")
    var loyalty: LoyaltyData? = null,

    @SerialName("taxes")
    var taxes: List<Tax>? = null,

    @SerialName("taxable_amount")
    var taxableAmount: Double? = null,
)

@Serializable
internal data class OrderScheduled(
    @SerialName("scheduled_date")
    val scheduledDate: String? = null
)

@Serializable
internal data class OrderTypeData(
    @SerialName("action") val action: String? = null,
    @SerialName("created_at") val createdAt: String? = null,
    @SerialName("_id") val id: String? = "",
    @SerialName("order_code") val orderCode: String? = null,
    @SerialName("order_des") val orderDes: String? = null,
    @SerialName("order_type") val orderType: String? = null,
    @SerialName("status") val status: Boolean? = false,
    @SerialName("stdat") val stdat: String? = null,
    @SerialName("stendat") val stendat: String? = null,
    @SerialName("store_id") val storeId: String? = null,
    @SerialName("updated_at") val updatedAt: String? = null,
    @SerialName("charges") var charges: List<OrderLevelChargesData>? = null,
    var selected: Boolean = false
)

@Serializable
internal data class OrderLevelChargesData(
    @SerialName("apply_at_level") val applyAtLevel: String? = null,
    @SerialName("charge_id") val chargeId: String? = null,
    @SerialName("charge_tax_ids") val chargeTaxIds: List<ChargeTaxId>? = null,
    @SerialName("charge_type") val chargeType: String? = null,
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

@Serializable
internal data class LoyaltyData(
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
internal data class OrderStoreDetails(
    @SerialName("store_id") var storeId: String = "",
    @SerialName("gst_no") var gstNumber: String? = null,
    @SerialName("fssai_no") var fssaiNo: String? = null,
    @SerialName("store_tagline") var storeTagLine: String? = null,
    @SerialName("order_des") var orderDes: String? = null,
    @SerialName("order_code") var orderCode: String? = null,
    @SerialName("integration") var integration: String? = null,
    @SerialName("referencestr") var referenceStr: String? = null,
    @SerialName("order_begin_date_time") var orderBeginDateTime: String? = null,
    @SerialName("order_end_date_time") var orderEndDateTime: String? = null,
    @SerialName("store_session_id") var storeSessionId: String = "",
    @SerialName("store_name") var storeName: String = "",
    @SerialName("tent_id") var tentId: String? = null,
    @SerialName("store_ad1") var storeAd1: String = "",
    @SerialName("store_ad2") var storeAd2: String = "",
    @SerialName("store_city") var storeCity: String = "",
    @SerialName("store_zip") var storeZip: String = "",
    @SerialName("store_country") var storeCountry: String = "",
    @SerialName("store_contact_no") var storeContactNo: String = "",
    @SerialName("currencycode") var currencyCode: String? = null,
    @SerialName("emp_session_id") var empSessionId: String = "",
    @SerialName("emp_no") var empNo: String = "",
    @SerialName("emp_name") var empName: String = "",
    @SerialName("emp_mobile_no") val empMobileNo: String? = null,
    @SerialName("table_no") var tableNo: String? = null,
    @SerialName("table_id") var tableId: String? = null,
    @SerialName("floor_id") var floorId: String? = null,
    @SerialName("floor_no") var floorNo: String? = null,
    @SerialName("manager_override") var managerOverride: List<String>? = null,
    @SerialName("device_id") var deviceId: String? = null,
    @SerialName("is_child_print_active") var isChildPrintActive: Boolean? = null,
    @SerialName("terminal_id") var terminalId: String? = null,
    @SerialName("order_reference_no") var orderReferenceNo: String? = null,
    @SerialName("previous_order_no") var previousOrderNo: String? = null,
    @SerialName("previous_invoice_no") var previousInvoiceNo: String? = null,
    @SerialName("channel") var channel: String? = null,
    @SerialName("associate_emp_no") var associateEmpNo: String = "",
    @SerialName("associate_emp_name") var associateEmpName: String = "",
    @SerialName("no_of_guest") var noOfGuest: Int? = null,
    @SerialName("prev_floor_id") var previousFloorId: String? = null,
    @SerialName("prev_table_id") var previousTableId: String? = null,
    @SerialName("agg_order_ref_no") var aggOrderRefNo: String? = null,
    @SerialName("store_logo") var storeLogo: String? = ""
)


@Serializable
internal data class CustomerDetails(
    @SerialName("cust_first_name") val name: String = "Guest",
    @SerialName("cust_last_name") val custLastName: String? = null,
    @SerialName("cust_mobile") val mobile: String? = null,
    @SerialName("email_id") val emailId: String? = null,
    @SerialName("cust_address") val custAddress: String? = null,
    @SerialName("cust_tax_id") val custTaxID: String? = null,
    @SerialName("cust_zipcode") val custZipCode: String? = null,
    @SerialName("landmark") val landMark: String? = null,
    @SerialName("cust_city") val cusCity: String? = null,
    @SerialName("cust_country") val cusCountry: String? = null,
    @SerialName("cust_state") val custState: String? = null,
    @SerialName("cust_DOB") val custDOB: String? = null,
    @SerialName("cust_DOA") val custDOA: String? = null,
    @SerialName("cust_loyality_points") var custLoyaltyPoints: Int? = null,
    @SerialName("extras") val extras: String? = null,
    @SerialName("points_awarded") var pointsAwarded: String? = null,
    @SerialName("loyalty_type") var loyaltyType: String? = null,
    @SerialName("cust_loyalty_id") var custLoyaltyId: String? = null,
    @SerialName("program_uuid") var programUUID: String? = null,
    @SerialName("tier_uuid") var tierUUID: String? = null,
    @SerialName("reward_uuid") var rewardUuid: String? = null,
    @SerialName("customer_membership") var customerMembership: MemberShipPlan? = null,
)

@Serializable
internal data class MemberShipPlan(
    @SerialName("membership_id")
    var membershipId: String = "",

    @SerialName("created_at")
    var createdAt: String? = null,

    @SerialName("_id")
    var id: String = "",

    @SerialName("loyality_points")
    var loyaltyPoints: Int? = null,

    @SerialName("membership_name")
    var membershipName: String? = null,

    @SerialName("offer_details")
    var offerDetails: List<OfferDetail>? = null,

    @SerialName("price")
    var price: Double? = null,

    @SerialName("status")
    var status: Boolean? = true,

    @SerialName("store_id")
    var storeId: String? = null,

    @SerialName("updated_at")
    var updatedAt: String? = null,

    @SerialName("validity")
    var validity: Int? = null,

    @SerialName("cust_mobile")
    var custMobile: String? = null,

    @SerialName("end_date")
    var endDate: String? = null,

    @SerialName("redeemtion_details")
    var redemptionDetails: List<RedemptionDetails>? = null,

    @SerialName("start_date")
    var startDate: String? = null,

    @SerialName("tax")
    var tax: List<Tax>? = null,

    @Transient
    var isSelected: Boolean = false
)

@Serializable
internal data class OfferDetail(
    @SerialName("max_consuption") val maxConsumption: Int? = null,
    @SerialName("offer_id") val offerId: String? = null
)

@Serializable
internal data class RedemptionDetails(
    @SerialName("_id") var id: String? = null,
    @SerialName("offer_id") var offerId: String? = null,
    @SerialName("consumption_count") var consumptionCount: Int? = null
)

@Serializable
internal data class OrderDiscount(
    @SerialName("entity") val entity: String? = null,
    @SerialName("is_source_item") val isSourceItem: Boolean? = true,
    @SerialName("mapped_offer_items") var mappedOfferItems: List<Int>? = null,
    @SerialName("offer_id") val offerId: String,
    @SerialName("offer_header") val offerHeader: OrderOfferHeader? = null
)

@Serializable
data class OrderOfferHeader(
    @SerialName("deal_type") val dealType: String? = null,
    @SerialName("description") val description: String? = null,
    @SerialName("offer_header_id") val offerHeaderId: String? = null,
    @SerialName("terms_conditions") val termsConditions: String? = null,
    @SerialName("coupon_code") val couponCode: String? = null
)

@Serializable
internal data class ChargeTaxId(
    @SerialName("action") val action: String? = null,
    @SerialName("_id") val id: String? = null,
    @SerialName("status") val status: Boolean? = null,
    @SerialName("tax_dsc") val taxDsc: String? = null,
    @SerialName("tax_pct") val taxPct: Double? = null,
    @SerialName("tax_type") val taxType: String? = null,
    @SerialName("tax_amount") var taxAmount: Double? = null
)


@Serializable
internal data class ChargesData(
    @SerialName("apply_at_level") val applyAtLevel: String? = null,
    @SerialName("charge_id") val chargeId: String? = null,
    @SerialName("charge_tax_ids") val chargeTaxIds: List<ChargeTaxId>? = null,
    @SerialName("percentage") var percentage: Double? = null,
    @SerialName("offer_details") var offerDetails: OrderDiscount? = null,
    @SerialName("description") val description: String? = null,
    @SerialName("order_level_charges") val orderLevelCharges: Double? = null,
    @SerialName("order_level_charges_tax") val orderLevelChargesTax: Double? = null,
    @SerialName("store_id") val storeId: String? = null,
    @SerialName("title") val title: String? = null,
    @SerialName("total_order_level_charges") val totalOrderLevelCharges: Double? = null,
    @SerialName("types") val types: String? = null,
    @SerialName("value") var value: Double,
    @SerialName("value_type") val valueType: String? = null,
    @SerialName("points") val points: Int? = null,
    @SerialName("min_order_value") val minOrderValue: Double? = null,
)

@Serializable
internal data class OrderStateHistory(
    val _id: String = "",
    val order_state: String,
    val store_id: String,
    val order_id: String,
    val timestamp_unix: String? = "",
    val date_time: String? = ""
)

@Serializable
internal data class PlatForDetails(
    val kind: String = "",
    val name: String = "",
    val delivery_type: String = "",
    val extras: Extras? = null,
    val platform_store_id: String = "",
    val id: String = ""
)


@Serializable
internal data class Extras(
    val order_otp: String = "",
    val deliver_asap: Boolean = false,
    val contact_access_code: String = ""
)

@Serializable
internal data class PaymentDetails(
    @SerialName("amount") var amount: Double? = null,
    @SerialName("amount_round") var amountRound: Double? = null,
    @SerialName("tnd_code") var tndCode: String? = null,
    @SerialName("tnd_des") var tndDes: String? = null,
    @SerialName("tnd_type") var tndType: String? = null,
    @SerialName("transaction_id") var transactionId: String? = null,
    @SerialName("payment_gateway") var paymentGateway: String? = null,
    @SerialName("transaction_detail") var transactionDetail: ArrayList<OrderPaymentDetails> = ArrayList(),
    @SerialName("change") var change: Double = 0.0,
    var transType: String = ""
)

@Serializable
internal data class PaymentIntentClass(
    @SerialName("_id") var id: String? = null,
    @SerialName("card_number") var cardNumber: String? = null,
    @SerialName("finger_print") var fingerPrint: String? = null,
    @SerialName("expires") var expires: String? = null,
    @SerialName("card_type") var cardType: String? = null,
    @SerialName("issuer") var issuer: String? = null,
    @SerialName("address") var Address: String? = null,
    @SerialName("card_brand") var cardBrand: String? = null,
    @SerialName("read_method") var readMethod: String? = null,
    @SerialName("card_holder_name") var cardHolderName: String? = null,
    @SerialName("card_amount") var cardAmount: Double? = null,
    @SerialName("card_transaction") var cardTransaction: String? = null
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
internal data class OrderPaymentDetails(
    var printData: ArrayList<String>? = null,

    var transactionDetail: ArrayList<OrderPaymentDetails> = ArrayList(),

    var amount: Double? = null,
    var percent: Double = 0.0,
    var payeeName: String = "",
    var status: Boolean = false,
    var name: String = "",
    var paymentMethodId: Int = -1,
    var enteredAmount: Double = 0.0,

    @SerialName("paymentIntent")
    var paymentIntent: ArrayList<PaymentIntentClass>? = null,

    @SerialName("Change")
    var change: Double = 0.0,

    @SerialName("tnd_code")
    var tndCode: String = "",

    @SerialName("tnd_des")
    var tndDes: String = "",

    @SerialName("tnd_type")
    var tndType: String = "",

    @SerialName("payment_type")
    var paymentType: String = "",

    var terminalInvoiceNo: String = "",

    @SerialName("paxResponse")
    var paxResponse: PaxPaymentResponse? = null,
    var cloverPaymentResponse: CloverPaymentResponse? = null,
    var razorPayEdcResponse: RazorPayEdcStatusResponse? = null,
    var magTekPaymentResponse: MagTekPaymentResponse? = null,
    var pineTransactionStatusResponse: PineEDCStatusResponse? = null,
    var transactionSummary: ChargeSlipResponse? = null,
    @SerialName("pine_digi_qr_status_response")
    var pineDigiQrStatusResponse: PineQrCheckerData? = null,
    @SerialName("transResponse")
    var transResponse: TranResponse? = null,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        other as OrderPaymentDetails

        if (payeeName != other.payeeName) return false
        if (status != other.status) return false
        if (name != other.name) return false
        if (paymentMethodId != other.paymentMethodId) return false

        return true
    }

    override fun hashCode(): Int {
        var result = payeeName.hashCode()
        result = 31 * result + status.hashCode()
        result = 31 * result + name.hashCode()
        result = 31 * result + paymentMethodId
        return result
    }
}


@Serializable
internal data class PaxPaymentResponse(
    var authCode: String = "",
    var approvedAmount: String = "",
    var avsResponse: String = "",
    var bogusAccountNum: String = "",
    var cardType: String = "",
    var cvResponse: String = "",
    var hostCode: String = "",
    var hostResponse: String = "",
    var message: String = "",
    var refNum: String = "",
    var rawResponse: String = "",
    var remainingBalance: String = "",
    var extraBalance: String = "",
    var requestedAmount: String = "",
    var resultCode: String = "",
    var resultTxt: String = "",
    var timestamp: String = "",
    var sigFileName: String = "",
    var signData: String = "",
    var transactionIntegrityClass: String = "",
    var extData: String = "",
    var giftCardType: String = "",
    var transactionRemainingAmount: String = "",
    var debitAccountType: String = "",
    var hostDetailedMessage: String = "",
    var gatewayTransactionID: String = "",
    var retrievalReferenceNumber: String = "",
    var maskedPAN: String = "",
    var track1Data: String = "",
    var track2Data: String = "",
    var track3Data: String = "",
    var edcType: String = "",
    var paymentService2000: String = "",
    var authorizationResponse: String = "",
    var issuerResponseCode: String = "",
    var ecrTransID: String = "",
    var approvedTipAmount: String = "",
    var approvedCashBackAmount: String = "",
    var approvedMerchantFee: String = "",
    var approvedTaxAmount: String = "",
    var paymentAccountReferenceID: String = "",
    var payloadData: String = "",
    var hostTimeStamp: String = "",
    var hostAccount: String = "",
    var hostCardType: String = "",
    var cardBin: String = ""

)

@Serializable
internal data class CloverPaymentResponse(
    val message: String = "",
    val requestId: String = "",
    val requestType: String = "",
    val type: String = "",
    val payment: PaymentInfo? = null
)

@Serializable
internal data class PaymentInfo(
    val amount: Long = 0L,
    val cardTransaction: CardTransaction,
    val createdTime: Long = 0L,
    val employee: Employee,
    val externalPaymentId: String = "",
    val id: String = "",
    val offline: Boolean = false,
    val order: Order,
    val result: String = "",
    val taxAmount: Long = 0L,
    val tender: Tender,
    val tipAmount: Long = 0L
)

@Serializable
internal data class CardTransaction(
    val authCode: String = "",
    val cardType: String = "",
    val cardholderName: String = "",
    val entryType: String = "",
    val extra: Extra,
    val first6: String = "",
    val last4: String = "",
    val referenceId: String = "",
    val state: String = "",
    val token: String = "",
    val transactionNo: String = "",
    val type: String = ""
)

@Serializable
internal data class Extra(
    val authorizingNetworkName: String = "",
    val cvmResult: String = "",
    val card: String = ""
)

@Serializable
internal data class Employee(
    val id: String = ""
)

@Serializable
internal data class Order(
    val id: String = ""
)

@Serializable
internal data class Tender(
    val id: String = "",
    val label: String = "",
    val labelKey: String = "",
    val opensCashDrawer: Boolean = false
)


@Serializable
internal data class RazorPayEdcStatusResponse(
    @SerialName("success") val success: Boolean = false,
    @SerialName("status") val status: String? = null,
    @SerialName("messageCode") val messageCode: String? = null,
    @SerialName("message") val message: String? = null,
    @SerialName("errorCode") val errorCode: String? = null,
    @SerialName("errorMessage") val errorMessage: String? = null,
    @SerialName("realCode") val realCode: String? = null,
    @SerialName("apiMessageTitle") val apiMessageTitle: String? = null,
    @SerialName("apiMessage") val apiMessage: String? = null,
    @SerialName("apiMessageText") val apiMessageText: String? = null,
    @SerialName("apiWarning") val apiWarning: String? = null,
    @SerialName("origP2pRequestId") val origP2pRequestId: String = "",
    @SerialName("tid") val tid: String = "",
    @SerialName("authCode") val authCode: String = "",
    @SerialName("batchNumber") val batchNumber: String = "",
    @SerialName("cardLastFourDigit") val cardLastFourDigit: String = "",
    @SerialName("currencyCode") val currencyCode: String = "",
    @SerialName("customerName") val customerName: String = "",
    @SerialName("customerEmail") val customerEmail: String = "",
    @SerialName("customerReceiptUrl") val customerReceiptUrl: String = "",
    @SerialName("deviceSerial") val deviceSerial: String = "",
    @SerialName("externalRefNumber") val externalRefNumber: String = "",
    @SerialName("txnId") val txnId: String = "",
    @SerialName("merchantName") val merchantName: String = "",
    @SerialName("mid") val mid: String = "",
    @SerialName("merchantCode") val merchantCode: String = "",
    @SerialName("payerName") val payerName: String = "",
    @SerialName("paymentCardBin") val paymentCardBin: String = "",
    @SerialName("paymentCardBrand") val paymentCardBrand: String = "",
    @SerialName("paymentCardType") val paymentCardType: String = "",
    @SerialName("paymentMode") val paymentMode: String = "",
    @SerialName("voidable") val voidable: Boolean = false,
    @SerialName("refundable") val refundable: Boolean = false,
    @SerialName("onlineRefundable") val onlineRefundable: Boolean = false,
    @SerialName("invoiceNumber") val invoiceNumber: String = "",
    @SerialName("cardType") val cardType: String = ""
)

@Serializable
internal data class MagTekPaymentResponse(
    val dataOutput: DataOutput,
    @SerialName("traceID")
    val traceId: String = "",
    @SerialName("magTranID")
    val magTranId: String = "",
    @SerialName("customerTransactionID")
    val customerTransactionId: String = "",
    @SerialName("transactionUTCTimeStamp")
    val transactionUtctimeStamp: String = "",
    val transactionOutput: TransactionOutput,
)

@Serializable
internal data class DataOutput(
    @SerialName("cardID")
    val cardId: String = "",
    val panLast4: String = "",
    val isReplay: Boolean = false,
    val additionalOutputData: List<AdditionalOutputDaum> = emptyList()
)

@Serializable
internal data class AdditionalOutputDaum(
    val key: String = "",
    val value: String = ""
)

@Serializable
internal data class TransactionOutput(
    @SerialName("transactionID")
    val transactionId: String = "",
    val isTransactionApproved: Boolean = false,
    val transactionStatus: String = "",
    val transactionMessage: String = "",
    val authCode: String = "",
    val authorizedAmount: Double = 0.0,
    val avsResult: String = "",
    val cvvResult: String? = "",
    val issuerAuthenticationData: String = "",
    val issuerScriptTemplate1: String? = "",
    val issuerScriptTemplate2: String? = "",
    val token: String = "",
    val transactionOutputDetails: List<TransactionOutputDetail> = emptyList()
)

@Serializable
internal data class TransactionOutputDetail(
    val key: String = "",
    val value: String = ""
)

@Serializable
internal data class PineEDCStatusResponse(

    @SerialName("ResponseCode")
    val responseCode: Int? = null,

    @SerialName("ResponseMessage")
    val responseMessage: String? = null,

    @SerialName("PlutusTransactionReferenceID")
    val plutusTransactionReferenceId: Int? = null,

    @SerialName("TransactionData")
    val transactionData: List<TransactionData>? = null,

    @SerialName("TransactionID")
    var transactionId: String? = null
)

@Serializable
internal data class TransactionData(
    @SerialName("Tag")
    val tag: String? = null,

    @SerialName("Value")
    val value: String? = null
)


@Serializable
internal data class ChargeSlipResponse(
    @SerialName("acc_number")
    var accNumber: String = "",
    @SerialName("card_type")
    var cardType: String = "",
    @SerialName("auth_code")
    var authCode: String = "",
    @SerialName("ref_number")
    var refNumber: String = "",
    @SerialName("merchant_id")
    var merchantID: String = "",
    @SerialName("payment_status")
    var paymentStatus: String = "",
    @SerialName("tc")
    var tc: String? = "",
    @SerialName("tvr")
    var tvr: String? = "",
    @SerialName("aid")
    var aid: String? = "",
    @SerialName("tsi")
    var tsi: String? = "",
    @SerialName("tid")
    var tid: String? = "",
    @SerialName("atc")
    var atc: String? = "",
    @SerialName("app_lab")
    var applab: String? = "",
    @SerialName("terminal_id")
    var terminalId: String? = "",
    @SerialName("customer_vpa")
    var customerVpa: String? = "",
    @SerialName("payment_mode")
    var paymentMode: String? = "",
    @SerialName("transaction_log_id")
    var transactionLogId: String? = "",
    @SerialName("card_holder_name")
    var cardHolderName: String? = ""
)

@Serializable
internal data class PineQrCheckerData(
    @SerialName("amount")
    val amount: AmountChecker? = null,

    @SerialName("message")
    val message: String? = null,

    @SerialName("order_id")
    val orderId: String? = null,

    @SerialName("payee")
    val payee: PayeeChecker? = null,

    @SerialName("status")
    val status: String? = null,

    @SerialName("transaction_id")
    val transactionId: String? = null
)

@Serializable
internal data class AmountChecker(
    @SerialName("currency_code")
    val currencyCode: String? = null,

    @SerialName("value")
    val value: Int? = null
)

@Serializable
internal data class PayeeChecker(
    @SerialName("acquirer_name")
    val acquirerName: String? = null,

    @SerialName("merchant_reference_id")
    val merchantReferenceId: String? = null
)

@Serializable
@SerialName("TranResponse")
internal data class TranResponse(
    @SerialName("MerchantID")
    val merchantID: String? = null,

    @SerialName("PayAPI_Id")
    val payAPIId: String? = null,

    @SerialName("TerminalID")
    val terminalID: String? = null,

    @SerialName("ExpDate")
    val expDate: String? = null,

    @SerialName("AcctNo")
    val acctNo: String? = null,

    @SerialName("CardType")
    val cardType: String? = null,

    @SerialName("TranCode")
    val tranCode: String? = null,

    @SerialName("AuthCode")
    val authCode: String? = null,

    @SerialName("AVSResult")
    val avsResult: String? = null,

    @SerialName("CVVResult")
    val cvvResult: String? = null,

    @SerialName("CaptureStatus")
    val captureStatus: String? = null,

    @SerialName("CardholderName")
    val cardholderName: String? = null,

    @SerialName("CardHolderID")
    val cardHolderID: String? = null,

    @SerialName("RefNo")
    val refNo: String? = null,

    @SerialName("OperatorID")
    val operatorID: String? = null,

    @SerialName("InvoiceNo")
    val invoiceNo: String? = null,

    @SerialName("AcqRefData")
    val acqRefData: String? = null,

    @SerialName("ProcessorToken")
    val processorToken: String? = null,

    @SerialName("PostProcess")
    val postProcess: String? = null,

    @SerialName("ProcessData")
    val processData: String? = null,

    @SerialName("RecordNo")
    val recordNo: String? = null,

    @SerialName("RecurringData")
    val recurringData: String? = null,

    @SerialName("EntryMethod")
    val entryMethod: String? = null,

    @SerialName("Date")
    val date: String? = null,

    @SerialName("Time")
    val time: String? = null,

    @SerialName("ApplicationLabel")
    val applicationLabel: String? = null,

    @SerialName("TVR")
    val tvr: String? = null,

    @SerialName("AID")
    val aid: String? = null,

    @SerialName("IAD")
    val iad: String? = null,

    @SerialName("TSI")
    val tsi: String? = null,

    @SerialName("ARC")
    val arc: String? = null,

    @SerialName("CVM")
    val cvm: String? = null,

    @SerialName("ReceiptLanguage")
    val receiptLanguage: String? = null,

    @SerialName("CustomerReceiptLanguage")
    val customerReceiptLanguage: String? = null,

    @SerialName("ISORespCode")
    val isoRespCode: String? = null,

    @SerialName("NetworkName")
    val networkName: String? = null,

    @SerialName("Amount")
    val amount: Amount2? = null
) {
    override fun toString(): String {
        return "TranResponse(merchantID=$merchantID, acctNo=$acctNo, cardType=$cardType, " +
                "tranCode=$tranCode, authCode=$authCode, captureStatus=$captureStatus, " +
                "refNo=$refNo, invoiceNo=$invoiceNo, amount=$amount, acqRefData=$acqRefData, " +
                "processData=$processData, recordNo=$recordNo, entryMethod=$entryMethod, " +
                "date=$date, time=$time, applicationLabel=$applicationLabel, tvr=$tvr, " +
                "iad=$iad, tsi=$tsi, cvm=$cvm, payAPIId=$payAPIId)"
    }
}

@Serializable
internal data class Amount2(
    @SerialName("Purchase")
    val purchase: Double = 0.0,

    @SerialName("Authorize")
    val authorize: Double = 0.0,

    @SerialName("CashBack")
    val cashBack: Double = 0.0,

    @SerialName("Gratuity")
    val gratuity: Double = 0.0,

    @SerialName("SurchargeWithLookup")
    val surchargeWithLookup: Double = 0.0
) {
    override fun toString(): String {
        return "Amount2(purchase=$purchase, authorize=$authorize, cashBack=$cashBack, gratuity=$gratuity, surchargeWithLookup=$surchargeWithLookup)"
    }
}
