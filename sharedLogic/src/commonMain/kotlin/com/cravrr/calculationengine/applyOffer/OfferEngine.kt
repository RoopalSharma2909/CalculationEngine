package com.cravrr.calculationengine.applyOffer

interface OfferEngine {

    suspend fun applyOrderLevelOffer(
        offerJson: String,
        orderJson: String,
        isTaxIncluded: Boolean,
        onCompleted: (String, Boolean) -> Unit
    )

    suspend fun applyItemLevelOffer(
        offerListJson: String,
        orderJson: String,
        isTaxIncluded: Boolean,
        onCompleted: (String) -> Unit = {},
    )

    suspend fun isOfferValidOnCart(offerJson: String, orderJson: String): Boolean

    suspend fun applyCouponCodeOffer(
        orderJson: String,
        offerListJson: String,
        isTaxIncluded: Boolean,
        couponCode: String,
        onCompleted: (String, Boolean) -> Unit
    ): Boolean

    companion object {
        fun create(): OfferEngine = OfferEngineImpl()
    }
}