@file:OptIn(kotlin.js.ExperimentalJsExport::class)
package com.cravrr.calculationengine

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
