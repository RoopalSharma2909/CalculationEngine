package com.cravrr.calculationengine

import com.cravrr.calculationengine.expects.formatDoublePrice
import com.cravrr.calculationengine.model.ItemDetailsList
import com.cravrr.calculationengine.model.SelectedAddonsItems


internal class ItemPriceCalculator {

    private fun calculateTotalPriceOfAddons(addons: MutableList<SelectedAddonsItems>?): Double {
        return addons?.sumOf { it.subTotal } ?: 0.0
    }


    private fun calculateTotalPriceOfSelectedCombos(combos: MutableList<ItemDetailsList>?): Double {
        return combos?.sumOf { comboItem ->
            (comboItem.selectedAddonsItems?.sumOf { it.price * it.qty }
                ?: 0.0) + (comboItem.additionalPrice ?: 0.0)
        } ?: 0.0
    }

    fun calculateItemPrice(
        order: OrderPlaceRequest,
        item: ItemDetailsList,
        totalAmount: Double,
        isTaxIncluded: Boolean,
    ): ItemDetailsList {
        val calculatedItem = item
        val totalTaxPercentage = calculatedItem.taxList?.sumOf { (it.taxPct ?: 0.0) }
        val comboPrice = calculateTotalPriceOfSelectedCombos(calculatedItem.selectedCombo)
        val addonPrice = calculateTotalPriceOfAddons(calculatedItem.selectedAddonsItems)
        val extendedAmountWithOutTax = if (isTaxIncluded) {
            (calculatedItem.extendedAmount) / (1 + (totalTaxPercentage ?: 0.0) / 100)
        } else {
            calculatedItem.extendedAmount
        }
        calculatedItem.totalGrossSale =
            formatDoublePrice((extendedAmountWithOutTax * calculatedItem.quantity) + addonPrice + comboPrice)

        calculatedItem.subTotal = formatDoublePrice(calculatedItem.totalGrossSale)

        calculatedItem.totalOrderDiscount = formatDoublePrice(
            if (calculatedItem.isMembership != true) {
                if (order.discountPercentage > 0.0) {
                    calculatedItem.totalGrossSale * (order.discountPercentage / 100)
                } else if (order.discountAmount > 0.0) {
                    (calculatedItem.totalGrossSale / totalAmount) * order.discountAmount
                } else 0.0
            } else 0.0
        )

        calculatedItem.totalDiscount = formatDoublePrice(
            if (calculatedItem.isMembership != true) {
                if (calculatedItem.discountPercent > 0.0) {
                    calculatedItem.totalGrossSale * (calculatedItem.discountPercent / 100)
                } else if (calculatedItem.discountAmount > 0.0) {
                    calculatedItem.discountAmount
                } else {
                    0.0
                }
            } else 0.0
        )

        calculatedItem.taxableAmount = formatDoublePrice(
            calculatedItem.totalGrossSale - calculatedItem.totalDiscount - calculatedItem.totalOrderDiscount
        )

        calculatedItem.totalItemTax = formatDoublePrice(
            calculateItemTax(
                order,
                calculatedItem.taxableAmount ?: 0.0,
                calculatedItem.taxList
            )
        )

        calculatedItem.totalNetSale = formatDoublePrice(calculatedItem.taxableAmount ?: 0.0)

        return calculatedItem
    }

    private fun calculateItemTax(
        order: OrderPlaceRequest,
        amount: Double,
        taxList: List<Tax>?,
    ): Double {
        var taxAmount = 0.0
        taxList?.forEach { tax ->
            val taxValue = (amount * (tax.taxPct ?: 0.0) / 100)
            tax.taxAmount =
                if (order.isTaxExempt) formatDoublePrice(0.0) else taxValue
            taxAmount += taxValue
            tax.taxableAmount = formatDoublePrice(amount)
        }
        return (taxAmount)
    }

}