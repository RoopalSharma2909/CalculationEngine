package com.cravrr.calculationengine

import kotlinx.serialization.json.Json

internal class CalculationEngineImpl(
    private val orderCalculationService: OrderCalculationService = OrderCalculationService(),
    private val json: Json = Json {
        ignoreUnknownKeys = true
        explicitNulls = false
        encodeDefaults = true
    }
) : CalculationEngine {


    override fun refreshCalculation(
        orderJson: String,
        resetDiscount: Boolean,
        cashDiscount: Double,
        surcharge: Double,
        selectedPaymentType: String,
        isRoundOffEnabled: Boolean,
        roundOffType: String,
        applicableRoundOffPaymentTypes: List<String>,
        isRefundingOrder: Boolean,
        isTaxIncluded: Boolean
    ): String {
        val order = json.decodeFromString<OrderPlaceRequest>(orderJson)

        if (!isRefundingOrder) {
            if (resetDiscount) {
                order.totalDiscount = 0.0
            }

            orderCalculationService.calculateOrderTotals(
                order,
                isTaxIncluded
            )

            orderCalculationService.applyDiscountsAndCharges(
                isRoundOffEnabled,
                roundOffType,
                applicableRoundOffPaymentTypes,
                order,
                cashDiscount,
                surcharge,
                selectedPaymentType,
                isTaxIncluded
            )
        } else {
            orderCalculationService.refundItem(order)
        }

        return json.encodeToString(order)
    }
}