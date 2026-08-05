package com.cravrr.calculationengine.calculation.expects

import kotlin.math.floor
import kotlin.math.pow

fun roundHalfUp(value: Double, scale: Int): Double {
    val factor = 10.0.pow(scale)
    return floor(value * factor + 0.5) / factor
}


fun formatDoublePrice(input: Double): Double =
    roundHalfUp(input, 2)