@file:OptIn(ExperimentalJsExport::class)

package com.cravrr.calculationengine

import com.cravrr.calculationengine.applyOffer.OfferEngineImpl
import com.cravrr.calculationengine.calculation.CalculationEngineImpl
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
fun refreshCalculationJs(
    orderJson: String,
    resetDiscount: Boolean = true,
    cashDiscount: Double = 0.0,
    surcharge: Double = 0.0,
    selectedPaymentType: String = "",
    isRoundOffEnabled: Boolean = false,
    roundOffType: String = "",
    applicableRoundOffPaymentTypes: ArrayList<String> = ArrayList(),
    isRefundingOrder: Boolean = false,
    isTaxIncluded: Boolean = false,
): String {
    val engine = CalculationEngineImpl()
    return engine.refreshCalculation(
        orderJson,
        resetDiscount,
        cashDiscount,
        surcharge,
        selectedPaymentType,
        isRoundOffEnabled,
        roundOffType,
        applicableRoundOffPaymentTypes.toList(),
        isRefundingOrder,
        isTaxIncluded
    )
}

@JsExport
suspend fun applyOrderLevelOfferJs(
    offerJson: String,
    orderJson: String,
    isTaxIncluded: Boolean,
    onCompleted: (String, Boolean) -> Unit
) {
    val engine = OfferEngineImpl()
    return engine.applyOrderLevelOffer(offerJson, orderJson, isTaxIncluded, onCompleted)
}

@JsExport
suspend fun applyItemLevelOfferJs(
    offerListJson: String,
    orderJson: String,
    isTaxIncluded: Boolean,
    onCompleted: (String) -> Unit = {},
) {
    val engine = OfferEngineImpl()
    return engine.applyItemLevelOffer(offerListJson, orderJson, isTaxIncluded, onCompleted)
}

@JsExport
suspend fun applyCouponCodeOfferJs(
    orderJson: String,
    offerListJson: String,
    isTaxIncluded: Boolean,
    couponCode: String,
    onCompleted: (String, Boolean) -> Unit
): Boolean {
    val engine = OfferEngineImpl()
    return engine.applyCouponCodeOffer(
        orderJson,
        offerListJson,
        isTaxIncluded,
        couponCode,
        onCompleted
    )
}

@JsExport
suspend fun isOfferValidOnCartJs(
    orderJson: String,
    offerJson: String
): Boolean {
    val engine = OfferEngineImpl()
    return engine.isOfferValidOnCart(
        offerJson,
        orderJson
    )
}

