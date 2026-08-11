@file:OptIn(ExperimentalJsExport::class)

package com.cravrr.calculationengine

import com.cravrr.calculationengine.applyOffer.OfferEngineImpl
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.promise
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.js.Promise

/**
 * Kotlin/JS cannot export `suspend` functions, so the offer engine's suspend API is
 * exposed here as `Promise`-returning wrappers that JS callers can `await`.
 */
private val offerScope = CoroutineScope(Dispatchers.Default)

@JsExport
fun applyOrderLevelOfferJs(
    offerJson: String,
    orderJson: String,
    isTaxIncluded: Boolean,
    onCompleted: (String, Boolean) -> Unit
): Promise<Unit> = offerScope.promise {
    OfferEngineImpl().applyOrderLevelOffer(offerJson, orderJson, isTaxIncluded, onCompleted)
}

@JsExport
fun applyItemLevelOfferJs(
    offerListJson: String,
    orderJson: String,
    isTaxIncluded: Boolean,
    onCompleted: (String) -> Unit = {},
): Promise<Unit> = offerScope.promise {
    OfferEngineImpl().applyItemLevelOffer(offerListJson, orderJson, isTaxIncluded, onCompleted)
}

@JsExport
fun applyCouponCodeOfferJs(
    orderJson: String,
    offerListJson: String,
    isTaxIncluded: Boolean,
    couponCode: String,
    onCompleted: (String, Boolean) -> Unit
): Promise<Unit> = offerScope.promise {
    OfferEngineImpl().applyCouponCodeOffer(
        orderJson,
        offerListJson,
        isTaxIncluded,
        couponCode,
        onCompleted
    )
}

@JsExport
fun isOfferValidOnCartJs(
    orderJson: String,
    offerJson: String
): Promise<Boolean> = offerScope.promise {
    OfferEngineImpl().isOfferValidOnCart(
        offerJson,
        orderJson
    )
}
