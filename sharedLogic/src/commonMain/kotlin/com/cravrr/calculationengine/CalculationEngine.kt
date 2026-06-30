package com.cravrr.calculationengine

interface CalculationEngine {

    fun refreshCalculation(
        orderJson: String,
        resetDiscount: Boolean = true,
        cashDiscount: Double = 0.0,
        surcharge: Double = 0.0,
        selectedPaymentType: String = "",
        isRoundOffEnabled: Boolean = false,
        roundOffType: String = "",
        applicableRoundOffPaymentTypes: List<String> = emptyList(),
        isRefundingOrder: Boolean = false,
        isTaxIncluded: Boolean = false,
    ): String

}