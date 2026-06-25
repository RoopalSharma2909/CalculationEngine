package com.cravrr.calculationengine

import com.cravrr.calculationengine.expects.formatDoublePrice
import com.cravrr.calculationengine.model.ItemDetailsList
import com.cravrr.calculationengine.model.SelectedAddonsItems
import kotlin.collections.minusAssign
import kotlin.collections.plusAssign
import kotlin.compareTo


class ItemPriceCalculator {

    private fun calculateTotalPriceOfAddons(addons: ArrayList<SelectedAddonsItems>?): Double {
        return addons?.sumOf { it.subTotal } ?: 0.0
    }

    private fun calculateTotalTaxOfAddons(addons: ArrayList<SelectedAddonsItems>?): Double {
        return addons?.sumOf { it.taxAmount } ?: 0.0
    }

    private fun calculateTotalPriceOfSelectedCombos(combos: ArrayList<ItemDetailsList>?): Double {
        return combos?.sumOf { comboItem ->
            (comboItem.selectedAddonsItems?.sumOf { it.price * it.qty }
                ?: 0.0) + (comboItem.additionalPrice ?: 0.0)
        } ?: 0.0
    }

    private fun calculateExtendedAmount(
        regularPrice: Double,
        comboPrice: Double,
        isTaxIncluded: Boolean,
        totalTaxPct: Double,
    ): Double {
        return if (isTaxIncluded) {
            (regularPrice + comboPrice) / (1 + totalTaxPct / 100)
        } else {
            regularPrice + comboPrice
        }
    }

    private fun calculateItemDiscount(
        extendedAmount: Double,
        quantity: Int,
        discountPercent: Double,
        discountAmount: Double,
    ): Double {
        return if (discountPercent > 0.0) {
            (extendedAmount * quantity) * (discountPercent / 100)
        } else if (discountAmount > 0.0) {
            discountAmount * quantity
        } else {
            0.0
        }
    }

    private fun calculateOrderDiscount(
        subTotal: Double,
        totalAmount: Double,
        orderDiscountPercent: Double,
        orderDiscountAmount: Double,
    ): Double {
        var orderDiscount = 0.0
        if (orderDiscountPercent > 0.0) {
            orderDiscount = (subTotal * orderDiscountPercent / 100.00)
        }
        if (orderDiscountAmount > 0.0) {
            orderDiscount += ((subTotal) / totalAmount) * orderDiscountAmount
        }
        return orderDiscount
    }

    private fun calculateTax(
        order: OrderPlaceRequest,
        amount: Double,
        taxList: List<Tax>?,
        isTaxIncluded: Boolean,
    ): Double {
        var taxAmount = 0.0
        if (!isTaxIncluded) {
            taxList?.forEach { tax ->
                val taxValue = (amount * (tax.taxPct ?: 0.0) / 100)
                tax.taxAmount =
                    if (order.isTaxExempt) formatDoublePrice(0.0) else formatDoublePrice(taxValue)
                taxAmount += taxValue
                tax.taxableAmount = formatDoublePrice(amount)
            }
        } else {
            val totalTaxPercentage = taxList?.sumOf { (it.taxPct ?: 0.0) }
            val taxableAmount = (amount * 100) / (100 + (totalTaxPercentage ?: 0.0))
            taxList?.forEach { tax ->
                val taxValue = taxableAmount * ((tax.taxPct ?: 0.0) / 100)
                tax.taxAmount =
                    if (order.isTaxExempt) formatDoublePrice(0.0) else formatDoublePrice(taxValue)
                taxAmount += taxValue
                tax.taxableAmount = formatDoublePrice(taxableAmount)
            }
        }
        return (taxAmount)
    }

    private fun calculateTotalGrossSale(
        netSale: Double,
        taxAmount: Double,
        isTaxIncluded: Boolean,
        totalDiscount: Double,
        totalOrderDiscount: Double,
    ): Double {
        return if (isTaxIncluded) {
            netSale + taxAmount
        } else {
            netSale + totalDiscount + totalOrderDiscount
        }
    }

    fun calculateItemPrice2(
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
                if (order.isTaxExempt) formatDoublePrice(0.0) else formatDoublePrice(taxValue)
            taxAmount += taxValue
            tax.taxableAmount = formatDoublePrice(amount)
        }
        return (taxAmount)
    }


    fun calculateItemPrice(
        order: OrderPlaceRequest,
        item: ItemDetailsList,
        orderDiscountPercent: Double,
        orderDiscountAmount: Double,
        totalAmount: Double,
        isTaxIncluded: Boolean,
    ): ItemDetailsList {
        val calculatedItem = item
        if (calculatedItem.isMembership != true) {
            calculatedItem.totalOrderDiscount = 0.0
            val comboPrice = calculateTotalPriceOfSelectedCombos(calculatedItem.selectedCombo)
            val addonPrice = calculateTotalPriceOfAddons(calculatedItem.selectedAddonsItems)
            val addonTax = calculateTotalTaxOfAddons(calculatedItem.selectedAddonsItems)

            val totalTaxPercentage = calculatedItem.taxList?.sumOf { (it.taxPct ?: 0.0) } ?: 0.0

            calculatedItem.extendedAmount = calculateExtendedAmount(
                calculatedItem.regularSalesUnitPrice,
                comboPrice,
                isTaxIncluded,
                totalTaxPercentage
            )
            val itemExtendedAmount = if (isTaxIncluded) {
                calculatedItem.regularSalesUnitPrice + comboPrice
            } else {
                calculatedItem.extendedAmount
            }
            if (calculatedItem.mainItemID.isNullOrEmpty()) {
                calculatedItem.totalDiscount = calculateItemDiscount(
                    itemExtendedAmount,
                    calculatedItem.quantity,
                    calculatedItem.discountPercent,
                    calculatedItem.discountAmount
                )
            }

            calculatedItem.subTotal =
                (calculatedItem.extendedAmount * calculatedItem.quantity) + addonPrice

            val itemSubTotal = if (isTaxIncluded) {
                (itemExtendedAmount * calculatedItem.quantity) + addonPrice + addonTax
            } else {
                calculatedItem.subTotal
            }

            calculatedItem.totalNetSale = if (isTaxIncluded) {
                itemSubTotal
            } else {
                calculatedItem.subTotal
            }

            if (calculatedItem.mainItemID.isNullOrEmpty()) {
                calculatedItem.totalOrderDiscount = calculateOrderDiscount(
                    itemSubTotal,
                    totalAmount,
                    orderDiscountPercent,
                    orderDiscountAmount
                )
                calculatedItem.totalNetSale -= calculatedItem.totalOrderDiscount
                if (calculatedItem.totalDiscount > 0.0) {
                    calculatedItem.totalNetSale -= calculatedItem.totalDiscount
                }
            }

            val itemTotalNetSale = if (isTaxIncluded) {
                val withOrderDiscount = itemSubTotal - calculatedItem.totalOrderDiscount
                withOrderDiscount - calculatedItem.totalDiscount
            } else {
                calculatedItem.totalNetSale
            }

            calculatedItem.totalItemTax =
                calculateTax(order, itemTotalNetSale, calculatedItem.taxList, isTaxIncluded)

            if (isTaxIncluded) {
                calculatedItem.totalNetSale -= calculatedItem.totalItemTax
            }
            calculatedItem.totalGrossSale = calculateTotalGrossSale(
                calculatedItem.totalNetSale,
                calculatedItem.totalItemTax,
                isTaxIncluded,
                calculatedItem.totalDiscount,
                calculatedItem.totalOrderDiscount
            )
        } else {
            calculateMembershipPrice(order, calculatedItem, isTaxIncluded)
        }
        return calculatedItem
    }

    private fun calculateMembershipPrice(
        order: OrderPlaceRequest,
        calculatedItem: ItemDetailsList,
        isTaxIncluded: Boolean,
    ) {
        val totalTaxPercentage = calculatedItem.taxList?.sumOf { it.taxPct ?: 0.0 } ?: 0.0
        calculatedItem.extendedAmount = calculateExtendedAmount(
            calculatedItem.regularSalesUnitPrice,
            0.0,
            isTaxIncluded,
            totalTaxPercentage
        )
        calculatedItem.subTotal = calculatedItem.extendedAmount
        calculatedItem.totalNetSale = calculatedItem.subTotal
        calculatedItem.totalItemTax =
            if (isTaxIncluded) {
                calculateTax(
                    order,
                    calculatedItem.regularSalesUnitPrice,
                    calculatedItem.taxList,
                    isTaxIncluded
                )
            } else {
                calculateTax(
                    order,
                    calculatedItem.subTotal,
                    calculatedItem.taxList,
                    isTaxIncluded
                )
            }
        calculatedItem.totalGrossSale = calculateTotalGrossSale(
            calculatedItem.totalNetSale,
            calculatedItem.totalItemTax,
            isTaxIncluded,
            0.0,
            0.0
        )
    }
}