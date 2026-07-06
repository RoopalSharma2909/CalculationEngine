import {
  Unit_instance1fbcbse1fwigr as Unit_instance,
  VOID3gxj6tk5isa35 as VOID,
  getKClass1s3j9wy1cofik as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType1lgox3mzhchp5 as createKType,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  toList383f556t1dixk as toList,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  checkIndexOverflow3frtmheghr0th as checkIndexOverflow,
  getNumberHashCode2l4nbdcihl25f as getNumberHashCode,
  equals2au1ep9vhcato as equals,
  removeAll3o43e67jmwdpc as removeAll,
  ArrayList3it5z8td81qkl as ArrayList,
  emptyList1g2z5xcrvp2zy as emptyList,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  toSet2orjxp16sotqu as toSet,
  compareTo3ankvs086tmwq as compareTo,
  equals2v6cggk171b6e as equals_0,
  toCollection2m9l1tsz2ecpm as toCollection,
  Collection1k04j3hzsbod0 as Collection,
  println2shhhgwwt4c61 as println,
  round2mrvepag8eey0 as round,
  LazyThreadSafetyMode_PUBLICATION_getInstance3hlj875zwihx0 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  Long2qws0ah9gnpki as Long,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  toString1pkumu07cwy4m as toString,
  toString30pk9tzaqopn as toString_0,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  hashCodeq5arwsb9dgti as hashCode,
  createThis2j2avj17cvnv2 as createThis,
} from './kotlin-kotlin-stdlib.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import {
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  ArrayListSerializer7k5wnrulb3y6 as ArrayListSerializer,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  StringSerializer_getInstance2wffkbpdux3h9 as StringSerializer_getInstance,
  IntSerializer_getInstance2q7s8kvk1il5u as IntSerializer_getInstance,
  BooleanSerializer_getInstance1t8habeqgiyq1 as BooleanSerializer_getInstance,
  DoubleSerializer_getInstance3da4hv5ndgjlx as DoubleSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  LongSerializer_getInstance194e4t3ow5wjs as LongSerializer_getInstance,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwArrayMissingFieldExceptionbk1mj238w44a as throwArrayMissingFieldException,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class CalculationEngineImpl {
  constructor(orderCalculationService, json) {
    orderCalculationService = orderCalculationService === VOID ? new OrderCalculationService() : orderCalculationService;
    var tmp;
    if (json === VOID) {
      tmp = Json(VOID, CalculationEngineImpl$_init_$lambda_bw48f4);
    } else {
      tmp = json;
    }
    json = tmp;
    this.e1h_1 = orderCalculationService;
    this.f1h_1 = json;
  }
  g1h(orderJson, resetDiscount, cashDiscount, surcharge, selectedPaymentType, isRoundOffEnabled, roundOffType, applicableRoundOffPaymentTypes, isRefundingOrder, isTaxIncluded) {
    // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
    var this_0 = this.f1h_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.hp();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(OrderPlaceRequest), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var order = this_0.e15(tmp$ret$1, orderJson);
    if (!isRefundingOrder) {
      if (resetDiscount) {
        order.k1i_1 = 0.0;
      }
      this.e1h_1.w1j(order, isTaxIncluded);
      this.e1h_1.x1j(isRoundOffEnabled, roundOffType, applicableRoundOffPaymentTypes, order, cashDiscount, surcharge, selectedPaymentType, isTaxIncluded);
    } else {
      this.e1h_1.i1h(order);
    }
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_3 = this.f1h_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_4 = this_3.hp();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_5 = serializer(this_4, createKType(getKClass(OrderPlaceRequest), arrayOf([]), false));
    var tmp$ret$4 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
    return this_3.d15(tmp$ret$4, order);
  }
}
class ItemPriceCalculator {
  j1n(order, item, totalAmount, isTaxIncluded) {
    var calculatedItem = item;
    var tmp0_safe_receiver = calculatedItem.o1l_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var _iterator__ex2g4s = tmp0_safe_receiver.v();
      while (_iterator__ex2g4s.w()) {
        var element = _iterator__ex2g4s.x();
        var tmp_0 = sum;
        var tmp0_elvis_lhs = element.f1n_1;
        sum = tmp_0 + (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs);
      }
      tmp = sum;
    }
    var totalTaxPercentage = tmp;
    var comboPrice = calculateTotalPriceOfSelectedCombos(this, calculatedItem.t1k_1);
    var addonPrice = calculateTotalPriceOfAddons(this, calculatedItem.q1l_1);
    var tmp_1;
    if (isTaxIncluded) {
      var tmp_2 = calculatedItem.d1l_1;
      tmp_1 = tmp_2 / (1 + (totalTaxPercentage == null ? 0.0 : totalTaxPercentage) / 100);
    } else {
      tmp_1 = calculatedItem.d1l_1;
    }
    var extendedAmountWithOutTax = tmp_1;
    calculatedItem.j1m_1 = formatDoublePrice(extendedAmountWithOutTax * calculatedItem.b1l_1 + addonPrice + comboPrice);
    calculatedItem.x1l_1 = formatDoublePrice(calculatedItem.j1m_1);
    var tmp_3 = calculatedItem;
    var tmp_4;
    if (!(calculatedItem.x1m_1 === true)) {
      var tmp_5;
      if (order.r1i_1 > 0.0) {
        tmp_5 = calculatedItem.j1m_1 * (order.r1i_1 / 100);
      } else if (order.s1i_1 > 0.0) {
        tmp_5 = calculatedItem.j1m_1 / totalAmount * order.s1i_1;
      } else {
        tmp_5 = 0.0;
      }
      tmp_4 = tmp_5;
    } else {
      tmp_4 = 0.0;
    }
    tmp_3.w1l_1 = formatDoublePrice(tmp_4);
    var tmp_6 = calculatedItem;
    var tmp_7;
    if (!(calculatedItem.x1m_1 === true)) {
      var tmp_8;
      if (calculatedItem.l1m_1 > 0.0) {
        tmp_8 = calculatedItem.j1m_1 * (calculatedItem.l1m_1 / 100);
      } else if (calculatedItem.m1m_1 > 0.0) {
        tmp_8 = calculatedItem.m1m_1;
      } else {
        tmp_8 = 0.0;
      }
      tmp_7 = tmp_8;
    } else {
      tmp_7 = 0.0;
    }
    tmp_6.e1l_1 = formatDoublePrice(tmp_7);
    calculatedItem.a1n_1 = formatDoublePrice(calculatedItem.j1m_1 - calculatedItem.e1l_1 - calculatedItem.w1l_1);
    var tmp_9 = calculatedItem;
    var tmp2_elvis_lhs = calculatedItem.a1n_1;
    tmp_9.f1l_1 = formatDoublePrice(calculateItemTax(this, order, tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs, calculatedItem.o1l_1));
    var tmp_10 = calculatedItem;
    var tmp3_elvis_lhs = calculatedItem.a1n_1;
    tmp_10.g1l_1 = formatDoublePrice(tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs);
    return calculatedItem;
  }
}
class RoundOffResult {
  constructor(finalAmount, roundOff) {
    this.k1n_1 = finalAmount;
    this.l1n_1 = roundOff;
  }
  toString() {
    return 'RoundOffResult(finalAmount=' + this.k1n_1 + ', roundOff=' + this.l1n_1 + ')';
  }
  hashCode() {
    var result = getNumberHashCode(this.k1n_1);
    result = imul(result, 31) + getNumberHashCode(this.l1n_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundOffResult))
      return false;
    var tmp0_other_with_cast = other instanceof RoundOffResult ? other : THROW_CCE();
    if (!equals(this.k1n_1, tmp0_other_with_cast.k1n_1))
      return false;
    if (!equals(this.l1n_1, tmp0_other_with_cast.l1n_1))
      return false;
    return true;
  }
}
class OrderCalculationService {
  constructor() {
    this.h1h_1 = new ItemPriceCalculator();
  }
  w1j(order, isTaxIncluded) {
    order.m1i_1 = 0.0;
    order.l1i_1 = 0.0;
    order.e1j_1 = 0.0;
    order.f1j_1 = 0.0;
    order.n1i_1 = 0.0;
    order.v1j_1 = 0.0;
    var totalAmountForDiscount = 0.0;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = order.b1i_1.v();
    while (_iterator__ex2g4s.w()) {
      var element = _iterator__ex2g4s.x();
      if (!(element.x1m_1 === true) && !(element.z1l_1 === true) && !(element.z1l_1 === true) && !(element.a1m_1 === true)) {
        var comboPrice = calculateTotalPriceOfSelectedCombos_0(this, element.t1k_1);
        var tmp0_safe_receiver = element.o1l_1;
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.collections.sumOf' call
          var sum = 0;
          var _iterator__ex2g4s_0 = tmp0_safe_receiver.v();
          while (_iterator__ex2g4s_0.w()) {
            var element_0 = _iterator__ex2g4s_0.x();
            var tmp_0 = sum;
            var tmp0_elvis_lhs = element_0.f1n_1;
            sum = tmp_0 + (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs);
          }
          tmp = sum;
        }
        var tmp1_elvis_lhs = tmp;
        var totalTaxPercent = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
        var unitPrice = element.c1l_1 + comboPrice;
        var tmp_1;
        if (isTaxIncluded) {
          tmp_1 = unitPrice * element.b1l_1 * 100.0 / (100.0 + totalTaxPercent);
        } else {
          tmp_1 = unitPrice * element.b1l_1;
        }
        var grossSales = tmp_1;
        totalAmountForDiscount = totalAmountForDiscount + grossSales;
      }
    }
    var tmp_2 = order;
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = order.b1i_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList.b6(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var _iterator__ex2g4s_1 = this_0.v();
    while (_iterator__ex2g4s_1.w()) {
      var item = _iterator__ex2g4s_1.x();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      // Inline function 'kotlin.also' call
      var this_1 = item.m1p();
      if (!(item.z1l_1 === true) && !(item.b1m_1 === true) && !(item.a1m_1 === true)) {
        calculateItemPrice(this, order, index_0, this_1, totalAmountForDiscount, isTaxIncluded);
      }
      destination.f(this_1);
    }
    tmp_2.b1i_1 = toCollection(destination, ArrayList.e1());
    var tmp0_safe_receiver_0 = order.c1i_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_2 = tmp0_safe_receiver_0.v();
      while (_iterator__ex2g4s_2.w()) {
        var element_1 = _iterator__ex2g4s_2.x();
        order.d1i_1 = element_1.v1p_1;
      }
    }
    order.m1i_1 = formatDoublePrice(order.m1i_1);
  }
  x1j(roundOff, type, paymentTypes, order, cashDiscount, surcharge, selectedPaymentType, isTaxIncluded) {
    var tmp0 = order.i1j_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index = 0;
      var _iterator__ex2g4s = tmp0.v();
      while (_iterator__ex2g4s.w()) {
        var item = _iterator__ex2g4s.x();
        if (item.i1o_1 === 'Complimentary Discount') {
          tmp$ret$1 = index;
          break $l$block;
        }
        index = index + 1 | 0;
      }
      tmp$ret$1 = -1;
    }
    var indexOfComplimentaryDiscount = tmp$ret$1;
    var isComplimentaryOrderLevelApplied = !(indexOfComplimentaryDiscount === -1);
    if (isComplimentaryOrderLevelApplied) {
      order.i1j_1.b1(indexOfComplimentaryDiscount).l1o_1 = order.k1i_1;
    }
    var orderDiscounts = ArrayList.r(order.i1j_1);
    var itemLevelDiscount = 0.0;
    var itemLevelPercentage = 0.0;
    var itemComplimentaryDiscount = 0.0;
    var itemComplimentaryPercentDiscount = 0.0;
    var orderLevelDiscount = 0.0;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = order.b1i_1.v();
    while (_iterator__ex2g4s_0.w()) {
      var element = _iterator__ex2g4s_0.x();
      var tmp0_safe_receiver = element.q1m_1;
      if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1o_1) === 'Item Complimentary Discount') {
        itemComplimentaryDiscount = itemComplimentaryDiscount + element.e1l_1;
        itemComplimentaryPercentDiscount = itemComplimentaryPercentDiscount + element.l1m_1;
      } else {
        itemLevelDiscount = itemLevelDiscount + element.e1l_1;
        itemLevelPercentage = itemLevelPercentage + element.l1m_1;
      }
      if (!isComplimentaryOrderLevelApplied) {
        orderLevelDiscount = orderLevelDiscount + element.w1l_1;
      }
    }
    updateDiscountCharge$default(this, orderDiscounts, 'Item Level Discount', itemLevelDiscount, itemLevelPercentage);
    updateDiscountCharge$default(this, orderDiscounts, 'Item Complimentary Discount', itemComplimentaryDiscount, itemComplimentaryPercentDiscount);
    var tmp = orderLevelDiscount;
    var tmp_0 = order.r1i_1;
    // Inline function 'kotlin.collections.find' call
    var tmp0_0 = order.i1j_1;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_1 = tmp0_0.v();
      while (_iterator__ex2g4s_1.w()) {
        var element_0 = _iterator__ex2g4s_1.x();
        if (element_0.i1o_1 === 'Order Level Discount') {
          tmp$ret$5 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$5 = null;
    }
    var tmp0_safe_receiver_0 = tmp$ret$5;
    updateDiscountCharge(this, orderDiscounts, 'Order Level Discount', tmp, tmp_0, tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.d1o_1);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$8;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_2 = orderDiscounts.v();
      while (_iterator__ex2g4s_2.w()) {
        var element_1 = _iterator__ex2g4s_2.x();
        if (element_1.i1o_1 === 'Loyalty Points') {
          tmp$ret$8 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$8 = null;
    }
    var appliedPoints = tmp$ret$8;
    var appliedPointsDiscount = 0.0;
    if (!(appliedPoints == null)) {
      var tmp_1 = order.m1i_1;
      var tmp1_elvis_lhs = appliedPoints.o1o_1;
      if (tmp_1 >= (tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs)) {
        order.k1i_1 = order.k1i_1 + appliedPoints.l1o_1;
        appliedPointsDiscount = appliedPoints.l1o_1;
      } else {
        var tmp$ret$11;
        $l$block_2: {
          // Inline function 'kotlin.collections.indexOfFirst' call
          var index_0 = 0;
          var _iterator__ex2g4s_3 = orderDiscounts.v();
          while (_iterator__ex2g4s_3.w()) {
            var item_0 = _iterator__ex2g4s_3.x();
            if (item_0.i1o_1 === 'Loyalty Points') {
              tmp$ret$11 = index_0;
              break $l$block_2;
            }
            index_0 = index_0 + 1 | 0;
          }
          tmp$ret$11 = -1;
        }
        var appliedIndex = tmp$ret$11;
        orderDiscounts.o2(appliedIndex);
        order.t1j_1 = null;
      }
    }
    calculateOrderTypeChargesAndTax(this, order, order.j1j_1, isTaxIncluded);
    var tmp_2 = order;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s_4 = order.j1j_1.v();
    while (_iterator__ex2g4s_4.w()) {
      var element_2 = _iterator__ex2g4s_4.x();
      var tmp_3 = sum;
      sum = tmp_3 + element_2.l1o_1;
    }
    tmp_2.g1j_1 = sum;
    var totalTax = 0.0;
    var taxList = ArrayList.e1();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_5 = order.b1i_1.v();
    while (_iterator__ex2g4s_5.w()) {
      var element_3 = _iterator__ex2g4s_5.x();
      var tmp0_safe_receiver_1 = element_3.o1l_1;
      if (tmp0_safe_receiver_1 == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_6 = tmp0_safe_receiver_1.v();
        while (_iterator__ex2g4s_6.w()) {
          var element_4 = _iterator__ex2g4s_6.x();
          var tmp$ret$14;
          $l$block_4: {
            // Inline function 'kotlin.collections.none' call
            var tmp_4;
            if (isInterface(taxList, Collection)) {
              tmp_4 = taxList.d1();
            } else {
              tmp_4 = false;
            }
            if (tmp_4) {
              tmp$ret$14 = true;
              break $l$block_4;
            }
            var _iterator__ex2g4s_7 = taxList.v();
            while (_iterator__ex2g4s_7.w()) {
              var element_5 = _iterator__ex2g4s_7.x();
              if (element_5.d1n_1 == element_4.d1n_1) {
                tmp$ret$14 = false;
                break $l$block_4;
              }
            }
            tmp$ret$14 = true;
          }
          if (tmp$ret$14) {
            taxList.f(element_4.x1p());
          }
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_8 = order.j1j_1.v();
    while (_iterator__ex2g4s_8.w()) {
      var element_6 = _iterator__ex2g4s_8.x();
      var tmp0_safe_receiver_2 = element_6.b1o_1;
      if (tmp0_safe_receiver_2 == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_9 = tmp0_safe_receiver_2.v();
        while (_iterator__ex2g4s_9.w()) {
          var element_7 = _iterator__ex2g4s_9.x();
          var tmp$ret$20;
          $l$block_6: {
            // Inline function 'kotlin.collections.none' call
            var tmp_5;
            if (isInterface(taxList, Collection)) {
              tmp_5 = taxList.d1();
            } else {
              tmp_5 = false;
            }
            if (tmp_5) {
              tmp$ret$20 = true;
              break $l$block_6;
            }
            var _iterator__ex2g4s_10 = taxList.v();
            while (_iterator__ex2g4s_10.w()) {
              var element_8 = _iterator__ex2g4s_10.x();
              if (element_8.d1n_1 == element_7.i1p_1) {
                tmp$ret$20 = false;
                break $l$block_6;
              }
            }
            tmp$ret$20 = true;
          }
          if (tmp$ret$20) {
            taxList.f(new Tax(element_7.g1p_1, element_7.g1p_1, element_7.i1p_1, element_7.k1p_1, element_7.j1p_1, '', 0.0, 0.0));
          }
        }
      }
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0_1 = order.b1i_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.e1();
    var _iterator__ex2g4s_11 = tmp0_1.v();
    while (_iterator__ex2g4s_11.w()) {
      var element_9 = _iterator__ex2g4s_11.x();
      var tmp_6;
      var tmp_7;
      // Inline function 'kotlin.text.isNullOrEmpty' call
      var this_0 = element_9.v1k_1;
      if (this_0 == null || charSequenceLength(this_0) === 0) {
        tmp_7 = !(element_9.a1m_1 === true);
      } else {
        tmp_7 = false;
      }
      if (tmp_7) {
        tmp_6 = !(element_9.z1l_1 === true);
      } else {
        tmp_6 = false;
      }
      if (tmp_6) {
        destination.f(element_9);
      }
    }
    var itemListFilter = destination;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_12 = taxList.v();
    while (_iterator__ex2g4s_12.w()) {
      var element_10 = _iterator__ex2g4s_12.x();
      var itemTaxAmount = 0.0;
      var taxableAmt = 0.0;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_13 = itemListFilter.v();
      while (_iterator__ex2g4s_13.w()) {
        var element_11 = _iterator__ex2g4s_13.x();
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_1 = element_11.o1l_1;
        if (!(this_1 == null || this_1.d1())) {
          var tmp0_safe_receiver_3 = element_11.o1l_1;
          if (tmp0_safe_receiver_3 == null)
            null;
          else {
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_14 = tmp0_safe_receiver_3.v();
            while (_iterator__ex2g4s_14.w()) {
              var element_12 = _iterator__ex2g4s_14.x();
              if (element_12.d1n_1 == element_10.d1n_1) {
                var tmp_8 = itemTaxAmount;
                var tmp0_elvis_lhs = element_12.h1n_1;
                itemTaxAmount = tmp_8 + (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs);
                var tmp_9 = taxableAmt;
                var tmp1_elvis_lhs_0 = element_12.i1n_1;
                taxableAmt = tmp_9 + (tmp1_elvis_lhs_0 == null ? 0.0 : tmp1_elvis_lhs_0);
              }
            }
          }
        }
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_15 = order.j1j_1.v();
      while (_iterator__ex2g4s_15.w()) {
        var element_13 = _iterator__ex2g4s_15.x();
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_2 = element_13.b1o_1;
        if (!(this_2 == null || this_2.d1())) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_16 = element_13.b1o_1.v();
          while (_iterator__ex2g4s_16.w()) {
            var element_14 = _iterator__ex2g4s_16.x();
            if (element_14.i1p_1 == element_10.d1n_1) {
              var tmp_10 = itemTaxAmount;
              var tmp0_elvis_lhs_0 = element_14.l1p_1;
              itemTaxAmount = tmp_10 + (tmp0_elvis_lhs_0 == null ? 0.0 : tmp0_elvis_lhs_0);
              taxableAmt = taxableAmt + element_13.l1o_1;
            }
          }
        }
      }
      element_10.i1n_1 = taxableAmt;
      element_10.h1n_1 = order.b1j_1 ? 0.0 : formatDoublePrice(itemTaxAmount);
      var tmp_11 = totalTax;
      var tmp0_elvis_lhs_1 = element_10.h1n_1;
      totalTax = tmp_11 + (tmp0_elvis_lhs_1 == null ? 0.0 : tmp0_elvis_lhs_1);
    }
    order.u1j_1 = taxList;
    order.l1i_1 = totalTax;
    var payableAmount = order.m1i_1 + order.l1i_1 + order.u1i_1 + order.g1j_1;
    var cashDiscountAmount = 0.0;
    if (cashDiscount > 0.0) {
      cashDiscountAmount = payableAmount * (cashDiscount / 100);
      updateDiscountCharge$default(this, orderDiscounts, 'Cash Discount', formatDoublePrice(cashDiscountAmount), cashDiscount);
    } else {
      removeAll(orderDiscounts, OrderCalculationService$applyDiscountsAndCharges$lambda);
    }
    order.i1j_1 = orderDiscounts;
    order.k1i_1 = order.k1i_1 + cashDiscountAmount;
    var tmp0_2 = order.j1j_1;
    var tmp$ret$43;
    $l$block_7: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index_1 = 0;
      var _iterator__ex2g4s_17 = tmp0_2.v();
      while (_iterator__ex2g4s_17.w()) {
        var item_1 = _iterator__ex2g4s_17.x();
        if (item_1.i1o_1 === 'Card Surcharge') {
          tmp$ret$43 = index_1;
          break $l$block_7;
        }
        index_1 = index_1 + 1 | 0;
      }
      tmp$ret$43 = -1;
    }
    var surchargeIndex = tmp$ret$43;
    if (surcharge > 0.0) {
      var tmp2_title = 'Card Surcharge';
      var tmp3_value = formatDoublePrice(payableAmount * (surcharge / 100));
      var surchargeCharge = new ChargesData(VOID, VOID, VOID, surcharge, VOID, VOID, VOID, VOID, VOID, tmp2_title, VOID, VOID, tmp3_value);
      if (surchargeIndex >= 0) {
        order.j1j_1.n2(surchargeIndex, surchargeCharge);
      } else {
        order.j1j_1.f(surchargeCharge);
      }
    } else {
      var tmp_12 = order.j1j_1;
      removeAll(tmp_12, OrderCalculationService$applyDiscountsAndCharges$lambda_0);
    }
    var tmp_13 = order;
    // Inline function 'kotlin.collections.sumOf' call
    var sum_0 = 0;
    var _iterator__ex2g4s_18 = order.j1j_1.v();
    while (_iterator__ex2g4s_18.w()) {
      var element_15 = _iterator__ex2g4s_18.x();
      var tmp_14 = sum_0;
      sum_0 = tmp_14 + element_15.l1o_1;
    }
    tmp_13.g1j_1 = sum_0;
    order.o1i_1 = formatDoublePrice(order.m1i_1 + order.l1i_1 + order.g1j_1 + order.u1i_1 - cashDiscountAmount - appliedPointsDiscount);
    var tmp_15;
    if (order.s1i_1 > 0.0) {
      var tmp_16 = order.s1i_1;
      var tmp4_elvis_lhs = order.f1j_1;
      tmp_15 = tmp_16 > (tmp4_elvis_lhs == null ? order.e1j_1 : tmp4_elvis_lhs);
    } else {
      tmp_15 = false;
    }
    if (tmp_15) {
      order.s1i_1 = 0.0;
      order.k1i_1 = 0.0;
      this.w1j(order, isTaxIncluded);
      this.x1j(roundOff, type, paymentTypes, order, cashDiscount, surcharge, selectedPaymentType, isTaxIncluded);
    }
    if (order.b1j_1) {
      order.o1i_1 = order.o1i_1 - order.l1i_1;
    }
    var roundOffData = this.y1p(selectedPaymentType, order.o1i_1, roundOff, type, paymentTypes);
    order.o1i_1 = roundOffData.k1n_1;
    var roundOff_0 = roundOffData.l1n_1;
    order.p1i_1 = this.z1p(roundOff_0);
  }
  i1h(order) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = order.j1j_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.e1();
    var _iterator__ex2g4s = tmp0.v();
    while (_iterator__ex2g4s.w()) {
      var element = _iterator__ex2g4s.x();
      if (!(element.i1o_1 === 'Card Surcharge')) {
        destination.f(element);
      }
    }
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s_0 = destination.v();
    while (_iterator__ex2g4s_0.w()) {
      var element_0 = _iterator__ex2g4s_0.x();
      var tmp = sum;
      var tmp0_elvis_lhs = element_0.g1o_1;
      sum = tmp + (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs);
    }
    var chargesTax = sum;
    // Inline function 'kotlin.collections.find' call
    var tmp0_0 = order.i1j_1;
    var tmp$ret$6;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_1 = tmp0_0.v();
      while (_iterator__ex2g4s_1.w()) {
        var element_1 = _iterator__ex2g4s_1.x();
        if (element_1.i1o_1 === 'Cash Discount') {
          tmp$ret$6 = element_1;
          break $l$block;
        }
      }
      tmp$ret$6 = null;
    }
    var tmp0_safe_receiver = tmp$ret$6;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1o_1;
    var cashDiscountAmount = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp0_1 = order.i1j_1;
    var tmp$ret$9;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_2 = tmp0_1.v();
      while (_iterator__ex2g4s_2.w()) {
        var element_2 = _iterator__ex2g4s_2.x();
        if (element_2.i1o_1 === 'Card Surcharge') {
          tmp$ret$9 = element_2;
          break $l$block_0;
        }
      }
      tmp$ret$9 = null;
    }
    var tmp2_safe_receiver = tmp$ret$9;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.l1o_1;
    var surchargeAmount = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_2 = order.j1j_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList.e1();
    var _iterator__ex2g4s_3 = tmp0_2.v();
    while (_iterator__ex2g4s_3.w()) {
      var element_3 = _iterator__ex2g4s_3.x();
      if (!(element_3.i1o_1 === 'Card Surcharge')) {
        destination_0.f(element_3);
      }
    }
    // Inline function 'kotlin.collections.sumOf' call
    var sum_0 = 0;
    var _iterator__ex2g4s_4 = destination_0.v();
    while (_iterator__ex2g4s_4.w()) {
      var element_4 = _iterator__ex2g4s_4.x();
      var tmp_0 = sum_0;
      sum_0 = tmp_0 + element_4.l1o_1;
    }
    var totalCharges = sum_0;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_3 = order.b1i_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList.e1();
    var _iterator__ex2g4s_5 = tmp0_3.v();
    while (_iterator__ex2g4s_5.w()) {
      var element_5 = _iterator__ex2g4s_5.x();
      if (element_5.a1m_1 === true || element_5.z1l_1 === true || element_5.z1l_1 === true) {
        destination_1.f(element_5);
      }
    }
    // Inline function 'kotlin.collections.sumOf' call
    var sum_1 = 0;
    var _iterator__ex2g4s_6 = destination_1.v();
    while (_iterator__ex2g4s_6.w()) {
      var element_6 = _iterator__ex2g4s_6.x();
      var tmp_1 = sum_1;
      order.m1i_1;
      var ratio = element_6.g1l_1 / order.m1i_1;
      var chargeShare = totalCharges * ratio;
      var chargeShareTax = chargesTax * ratio;
      var cashDiscountShare = cashDiscountAmount * ratio;
      var surchargeShare = surchargeAmount * ratio;
      var tipShare = order.u1i_1 * ratio;
      println('CALCULATION-> itemNetSale ' + element_6.g1l_1 + ' orderNetSale-' + order.m1i_1 + ' ratio-' + ratio + ' totalCharges-' + order.g1j_1 + ' chargesTax-' + chargesTax + ' cashDisAmt-' + cashDiscountAmount + ' cardSurcharge-' + surchargeAmount);
      println('CALCULATION-> taxableAmt-' + element_6.a1n_1 + ' totalTax-' + element_6.f1l_1 + ' charge share-' + chargeShare + ' charge share tax-' + chargeShareTax + ' cash discount share-' + cashDiscountShare + ' surcharge share-' + surchargeShare);
      var tmp0_elvis_lhs_0 = element_6.a1n_1;
      sum_1 = tmp_1 + ((tmp0_elvis_lhs_0 == null ? 0.0 : tmp0_elvis_lhs_0) + element_6.f1l_1 + chargeShareTax + chargeShare + tipShare + surchargeShare - cashDiscountShare);
    }
    var refundAmount = sum_1;
    order.o1i_1 = order.o1i_1 - refundAmount;
  }
  z1p(roundOff) {
    var tmp;
    if (roundOff > 0) {
      tmp = round(roundOff * 100) / 100;
    } else if (roundOff < 0) {
      // Inline function 'kotlin.math.absoluteValue' call
      var tmp$ret$0 = Math.abs(roundOff);
      tmp = -round(tmp$ret$0 * 100) / 100;
    } else {
      tmp = 0.0;
    }
    return tmp;
  }
  y1p(selectedPaymentType, amount, roundOff, type, paymentTypes) {
    var tmp;
    if (paymentTypes.d2(selectedPaymentType) && roundOff) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0;
      switch (type.toLowerCase()) {
        case 'nearest':
          var decimal = amount % 1;
          var tmp_1;
          if (decimal >= 0.5) {
            // Inline function 'kotlin.math.ceil' call
            tmp_1 = Math.ceil(amount);
          } else {
            // Inline function 'kotlin.math.floor' call
            tmp_1 = Math.floor(amount);
          }

          tmp_0 = tmp_1;
          break;
        case 'down':
          // Inline function 'kotlin.math.floor' call

          tmp_0 = Math.floor(amount);
          break;
        case 'up':
          // Inline function 'kotlin.math.ceil' call

          tmp_0 = Math.ceil(amount);
          break;
        default:
          tmp_0 = amount;
          break;
      }
      tmp = tmp_0;
    } else {
      tmp = amount;
    }
    var roundedAmount = tmp;
    var roundOffValue = roundedAmount - amount;
    return new RoundOffResult(roundedAmount, roundOffValue);
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_9 = lazy(tmp_8, OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_3);
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_11 = lazy(tmp_10, OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_4);
    var tmp_12 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_13 = lazy(tmp_12, OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_5);
    var tmp_14 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a1q_1 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_1, tmp_3, tmp_5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_7, null, null, null, null, null, null, null, null, tmp_9, tmp_11, null, null, null, null, tmp_13, null, null, null, null, null, lazy(tmp_14, OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_6), null];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderPlaceRequest', this, 63);
    tmp0_serialDesc.aw('isReprint', true);
    tmp0_serialDesc.aw('itemSelected', true);
    tmp0_serialDesc.aw('isAdjusting', true);
    tmp0_serialDesc.aw('isRefund', true);
    tmp0_serialDesc.aw('fromScreen', true);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('invoice_no', true);
    tmp0_serialDesc.aw('invoice_bos_number', true);
    tmp0_serialDesc.aw('order_state', true);
    tmp0_serialDesc.aw('order_source_code', true);
    tmp0_serialDesc.aw('order_source', true);
    tmp0_serialDesc.aw('is_kot_printed', true);
    tmp0_serialDesc.aw('is_receipt_printed', true);
    tmp0_serialDesc.aw('is_sync', true);
    tmp0_serialDesc.aw('offline_invoice_no', true);
    tmp0_serialDesc.aw('order_no', true);
    tmp0_serialDesc.aw('store_details', true);
    tmp0_serialDesc.aw('customer_details', true);
    tmp0_serialDesc.aw('item_details', true);
    tmp0_serialDesc.aw('payment_details', true);
    tmp0_serialDesc.aw('change_tender', true);
    tmp0_serialDesc.aw('comment', true);
    tmp0_serialDesc.aw('is_void', true);
    tmp0_serialDesc.aw('order_status', true);
    tmp0_serialDesc.aw('calender_date', true);
    tmp0_serialDesc.aw('date_time', true);
    tmp0_serialDesc.aw('business_date', true);
    tmp0_serialDesc.aw('total_discount', true);
    tmp0_serialDesc.aw('total_item_tax', true);
    tmp0_serialDesc.aw('total_net_sale', true);
    tmp0_serialDesc.aw('total_gross_sale', true);
    tmp0_serialDesc.aw('transaction_grand_amount', true);
    tmp0_serialDesc.aw('round_off_amount', true);
    tmp0_serialDesc.aw('refund_amount', true);
    tmp0_serialDesc.aw('discount_percent', true);
    tmp0_serialDesc.aw('discount_amount', true);
    tmp0_serialDesc.aw('state', true);
    tmp0_serialDesc.aw('tip_amount', true);
    tmp0_serialDesc.aw('tip_percentage', true);
    tmp0_serialDesc.aw('split_bill_type_count', true);
    tmp0_serialDesc.aw('payment_payee_details', true);
    tmp0_serialDesc.aw('order_type', true);
    tmp0_serialDesc.aw('order_code', true);
    tmp0_serialDesc.aw('is_tax_exempt', true);
    tmp0_serialDesc.aw('split_bill_type', true);
    tmp0_serialDesc.aw('receipt_print_count', true);
    tmp0_serialDesc.aw('sub_total', true);
    tmp0_serialDesc.aw('total_charges', true);
    tmp0_serialDesc.aw('initial_paid', true);
    tmp0_serialDesc.aw('applied_discount', true);
    tmp0_serialDesc.aw('charges', true);
    tmp0_serialDesc.aw('currentPayeeIndex', true);
    tmp0_serialDesc.aw('updated_at', true);
    tmp0_serialDesc.aw('platform_details', true);
    tmp0_serialDesc.aw('orderTimeMillis', true);
    tmp0_serialDesc.aw('order_state_history', true);
    tmp0_serialDesc.aw('selectedOrderType', true);
    tmp0_serialDesc.aw('membership_plan', true);
    tmp0_serialDesc.aw('is_advance_order', true);
    tmp0_serialDesc.aw('order_scheduled', true);
    tmp0_serialDesc.aw('loyalty', true);
    tmp0_serialDesc.aw('taxes', true);
    tmp0_serialDesc.aw('taxable_amount', true);
    this.b1q_1 = tmp0_serialDesc;
  }
  c1q(encoder, value) {
    var tmp0_desc = this.b1q_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance().a1q_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.j1h_1 === false)) {
      tmp1_output.zp(tmp0_desc, 0, value.j1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.k1h_1 === false)) {
      tmp1_output.zp(tmp0_desc, 1, value.k1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.l1h_1 === false)) {
      tmp1_output.zp(tmp0_desc, 2, value.l1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.m1h_1 === false)) {
      tmp1_output.zp(tmp0_desc, 3, value.m1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.n1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.n1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.o1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.o1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.p1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, IntSerializer_getInstance(), value.p1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.q1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.q1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.r1h_1 === '')) {
      tmp1_output.hq(tmp0_desc, 8, value.r1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.s1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.s1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.t1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.t1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.u1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, BooleanSerializer_getInstance(), value.u1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.v1h_1 === false)) {
      tmp1_output.zp(tmp0_desc, 12, value.v1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.w1h_1 === false)) {
      tmp1_output.zp(tmp0_desc, 13, value.w1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.x1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 14, StringSerializer_getInstance(), value.x1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.y1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 15, StringSerializer_getInstance(), value.y1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !value.z1h_1.equals(new OrderStoreDetails())) {
      tmp1_output.jq(tmp0_desc, 16, $serializer_getInstance_4(), value.z1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !equals(value.a1i_1, ArrayList.e1())) {
      tmp1_output.jq(tmp0_desc, 17, tmp2_cached[17].g2(), value.a1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !value.b1i_1.equals(ArrayList.e1())) {
      tmp1_output.jq(tmp0_desc, 18, tmp2_cached[18].g2(), value.b1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !(value.c1i_1 == null)) {
      tmp1_output.lq(tmp0_desc, 19, tmp2_cached[19].g2(), value.c1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !equals(value.d1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 20, value.d1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.e1i_1 == null)) {
      tmp1_output.lq(tmp0_desc, 21, StringSerializer_getInstance(), value.e1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 22) ? true : !(value.f1i_1 === false)) {
      tmp1_output.zp(tmp0_desc, 22, value.f1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 23) ? true : !(value.g1i_1 === '')) {
      tmp1_output.hq(tmp0_desc, 23, value.g1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 24) ? true : !(value.h1i_1 === '')) {
      tmp1_output.hq(tmp0_desc, 24, value.h1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 25) ? true : !(value.i1i_1 === '')) {
      tmp1_output.hq(tmp0_desc, 25, value.i1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 26) ? true : !(value.j1i_1 === '')) {
      tmp1_output.hq(tmp0_desc, 26, value.j1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 27) ? true : !equals(value.k1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 27, value.k1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 28) ? true : !equals(value.l1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 28, value.l1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 29) ? true : !equals(value.m1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 29, value.m1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 30) ? true : !equals(value.n1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 30, value.n1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 31) ? true : !equals(value.o1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 31, value.o1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 32) ? true : !equals(value.p1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 32, value.p1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 33) ? true : !equals(value.q1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 33, value.q1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 34) ? true : !equals(value.r1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 34, value.r1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 35) ? true : !equals(value.s1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 35, value.s1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 36) ? true : !(value.t1i_1 === '')) {
      tmp1_output.hq(tmp0_desc, 36, value.t1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 37) ? true : !equals(value.u1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 37, value.u1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 38) ? true : !equals(value.v1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 38, value.v1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 39) ? true : !(value.w1i_1 === 1)) {
      tmp1_output.cq(tmp0_desc, 39, value.w1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 40) ? true : !value.x1i_1.equals(ArrayList.e1())) {
      tmp1_output.jq(tmp0_desc, 40, tmp2_cached[40].g2(), value.x1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 41) ? true : !(value.z1i_1 == null)) {
      tmp1_output.lq(tmp0_desc, 41, StringSerializer_getInstance(), value.z1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 42) ? true : !(value.a1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 42, StringSerializer_getInstance(), value.a1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 43) ? true : !(value.b1j_1 === false)) {
      tmp1_output.zp(tmp0_desc, 43, value.b1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 44) ? true : !(value.c1j_1 === 1)) {
      tmp1_output.cq(tmp0_desc, 44, value.c1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 45) ? true : !(value.d1j_1 === 0)) {
      tmp1_output.lq(tmp0_desc, 45, IntSerializer_getInstance(), value.d1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 46) ? true : !equals(value.e1j_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 46, value.e1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 47) ? true : !equals(value.g1j_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 47, value.g1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 48) ? true : !equals(value.h1j_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 48, value.h1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 49) ? true : !value.i1j_1.equals(ArrayList.e1())) {
      tmp1_output.jq(tmp0_desc, 49, tmp2_cached[49].g2(), value.i1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 50) ? true : !value.j1j_1.equals(ArrayList.e1())) {
      tmp1_output.jq(tmp0_desc, 50, tmp2_cached[50].g2(), value.j1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 51) ? true : !(value.k1j_1 === -1)) {
      tmp1_output.cq(tmp0_desc, 51, value.k1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 52) ? true : !(value.l1j_1 === '')) {
      tmp1_output.lq(tmp0_desc, 52, StringSerializer_getInstance(), value.l1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 53) ? true : !(value.m1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 53, $serializer_getInstance_14(), value.m1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 54) ? true : !value.n1j_1.equals(new Long(0, 0))) {
      tmp1_output.dq(tmp0_desc, 54, value.n1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 55) ? true : !(value.o1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 55, tmp2_cached[55].g2(), value.o1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 56) ? true : !(value.p1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 56, $serializer_getInstance_1(), value.p1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 57) ? true : !(value.q1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 57, $serializer_getInstance_6(), value.q1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 58) ? true : !(value.r1j_1 === false)) {
      tmp1_output.zp(tmp0_desc, 58, value.r1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 59) ? true : !(value.s1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 59, $serializer_getInstance_0(), value.s1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 60) ? true : !(value.t1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 60, $serializer_getInstance_3(), value.t1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 61) ? true : !(value.u1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 61, tmp2_cached[61].g2(), value.u1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 62) ? true : !(value.v1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 62, DoubleSerializer_getInstance(), value.v1j_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.c1q(encoder, value instanceof OrderPlaceRequest ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.b1q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = false;
    var tmp6_local1 = false;
    var tmp7_local2 = false;
    var tmp8_local3 = false;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = false;
    var tmp18_local13 = false;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = 0.0;
    var tmp26_local21 = null;
    var tmp27_local22 = false;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = 0.0;
    var tmp33_local28 = 0.0;
    var tmp34_local29 = 0.0;
    var tmp35_local30 = 0.0;
    var tmp36_local31 = 0.0;
    var tmp37_local32 = 0.0;
    var tmp38_local33 = 0.0;
    var tmp39_local34 = 0.0;
    var tmp40_local35 = 0.0;
    var tmp41_local36 = null;
    var tmp42_local37 = 0.0;
    var tmp43_local38 = 0.0;
    var tmp44_local39 = 0;
    var tmp45_local40 = null;
    var tmp46_local41 = null;
    var tmp47_local42 = null;
    var tmp48_local43 = false;
    var tmp49_local44 = 0;
    var tmp50_local45 = null;
    var tmp51_local46 = 0.0;
    var tmp52_local47 = 0.0;
    var tmp53_local48 = 0.0;
    var tmp54_local49 = null;
    var tmp55_local50 = null;
    var tmp56_local51 = 0;
    var tmp57_local52 = null;
    var tmp58_local53 = null;
    var tmp59_local54 = new Long(0, 0);
    var tmp60_local55 = null;
    var tmp61_local56 = null;
    var tmp62_local57 = null;
    var tmp63_local58 = false;
    var tmp64_local59 = null;
    var tmp65_local60 = null;
    var tmp66_local61 = null;
    var tmp67_local62 = null;
    var tmp70_input = decoder.so(tmp0_desc);
    var tmp71_cached = Companion_getInstance().a1q_1;
    if (tmp70_input.ip()) {
      tmp5_local0 = tmp70_input.uo(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp70_input.uo(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp70_input.uo(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp70_input.uo(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp70_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp70_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp70_input.gp(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp70_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp70_input.cp(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp70_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp70_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp70_input.gp(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp70_input.uo(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp70_input.uo(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp70_input.gp(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp70_input.gp(tmp0_desc, 15, StringSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp70_input.ep(tmp0_desc, 16, $serializer_getInstance_4(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp70_input.ep(tmp0_desc, 17, tmp71_cached[17].g2(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp70_input.ep(tmp0_desc, 18, tmp71_cached[18].g2(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp70_input.gp(tmp0_desc, 19, tmp71_cached[19].g2(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp70_input.ap(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp70_input.gp(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp70_input.uo(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp70_input.cp(tmp0_desc, 23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp70_input.cp(tmp0_desc, 24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp70_input.cp(tmp0_desc, 25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp70_input.cp(tmp0_desc, 26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp70_input.ap(tmp0_desc, 27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp70_input.ap(tmp0_desc, 28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp70_input.ap(tmp0_desc, 29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp70_input.ap(tmp0_desc, 30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp70_input.ap(tmp0_desc, 31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp70_input.ap(tmp0_desc, 32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp70_input.ap(tmp0_desc, 33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp70_input.ap(tmp0_desc, 34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp70_input.ap(tmp0_desc, 35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp70_input.cp(tmp0_desc, 36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp70_input.ap(tmp0_desc, 37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp70_input.ap(tmp0_desc, 38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp70_input.xo(tmp0_desc, 39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp70_input.ep(tmp0_desc, 40, tmp71_cached[40].g2(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp70_input.gp(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp70_input.gp(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp70_input.uo(tmp0_desc, 43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp49_local44 = tmp70_input.xo(tmp0_desc, 44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
      tmp50_local45 = tmp70_input.gp(tmp0_desc, 45, IntSerializer_getInstance(), tmp50_local45);
      tmp4_bitMask1 = tmp4_bitMask1 | 8192;
      tmp51_local46 = tmp70_input.ap(tmp0_desc, 46);
      tmp4_bitMask1 = tmp4_bitMask1 | 16384;
      tmp52_local47 = tmp70_input.ap(tmp0_desc, 47);
      tmp4_bitMask1 = tmp4_bitMask1 | 32768;
      tmp53_local48 = tmp70_input.ap(tmp0_desc, 48);
      tmp4_bitMask1 = tmp4_bitMask1 | 65536;
      tmp54_local49 = tmp70_input.ep(tmp0_desc, 49, tmp71_cached[49].g2(), tmp54_local49);
      tmp4_bitMask1 = tmp4_bitMask1 | 131072;
      tmp55_local50 = tmp70_input.ep(tmp0_desc, 50, tmp71_cached[50].g2(), tmp55_local50);
      tmp4_bitMask1 = tmp4_bitMask1 | 262144;
      tmp56_local51 = tmp70_input.xo(tmp0_desc, 51);
      tmp4_bitMask1 = tmp4_bitMask1 | 524288;
      tmp57_local52 = tmp70_input.gp(tmp0_desc, 52, StringSerializer_getInstance(), tmp57_local52);
      tmp4_bitMask1 = tmp4_bitMask1 | 1048576;
      tmp58_local53 = tmp70_input.gp(tmp0_desc, 53, $serializer_getInstance_14(), tmp58_local53);
      tmp4_bitMask1 = tmp4_bitMask1 | 2097152;
      tmp59_local54 = tmp70_input.yo(tmp0_desc, 54);
      tmp4_bitMask1 = tmp4_bitMask1 | 4194304;
      tmp60_local55 = tmp70_input.gp(tmp0_desc, 55, tmp71_cached[55].g2(), tmp60_local55);
      tmp4_bitMask1 = tmp4_bitMask1 | 8388608;
      tmp61_local56 = tmp70_input.gp(tmp0_desc, 56, $serializer_getInstance_1(), tmp61_local56);
      tmp4_bitMask1 = tmp4_bitMask1 | 16777216;
      tmp62_local57 = tmp70_input.gp(tmp0_desc, 57, $serializer_getInstance_6(), tmp62_local57);
      tmp4_bitMask1 = tmp4_bitMask1 | 33554432;
      tmp63_local58 = tmp70_input.uo(tmp0_desc, 58);
      tmp4_bitMask1 = tmp4_bitMask1 | 67108864;
      tmp64_local59 = tmp70_input.gp(tmp0_desc, 59, $serializer_getInstance_0(), tmp64_local59);
      tmp4_bitMask1 = tmp4_bitMask1 | 134217728;
      tmp65_local60 = tmp70_input.gp(tmp0_desc, 60, $serializer_getInstance_3(), tmp65_local60);
      tmp4_bitMask1 = tmp4_bitMask1 | 268435456;
      tmp66_local61 = tmp70_input.gp(tmp0_desc, 61, tmp71_cached[61].g2(), tmp66_local61);
      tmp4_bitMask1 = tmp4_bitMask1 | 536870912;
      tmp67_local62 = tmp70_input.gp(tmp0_desc, 62, DoubleSerializer_getInstance(), tmp67_local62);
      tmp4_bitMask1 = tmp4_bitMask1 | 1073741824;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp70_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp70_input.uo(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp70_input.uo(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp70_input.uo(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp70_input.uo(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp70_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp70_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp70_input.gp(tmp0_desc, 6, IntSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp70_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp70_input.cp(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp70_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp70_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp70_input.gp(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp70_input.uo(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp70_input.uo(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp70_input.gp(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp70_input.gp(tmp0_desc, 15, StringSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp70_input.ep(tmp0_desc, 16, $serializer_getInstance_4(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp70_input.ep(tmp0_desc, 17, tmp71_cached[17].g2(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp70_input.ep(tmp0_desc, 18, tmp71_cached[18].g2(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp70_input.gp(tmp0_desc, 19, tmp71_cached[19].g2(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp70_input.ap(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp70_input.gp(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp70_input.uo(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp70_input.cp(tmp0_desc, 23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp70_input.cp(tmp0_desc, 24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp70_input.cp(tmp0_desc, 25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp70_input.cp(tmp0_desc, 26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp70_input.ap(tmp0_desc, 27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp70_input.ap(tmp0_desc, 28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp70_input.ap(tmp0_desc, 29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp70_input.ap(tmp0_desc, 30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp70_input.ap(tmp0_desc, 31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp70_input.ap(tmp0_desc, 32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp70_input.ap(tmp0_desc, 33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp70_input.ap(tmp0_desc, 34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp70_input.ap(tmp0_desc, 35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp70_input.cp(tmp0_desc, 36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp70_input.ap(tmp0_desc, 37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp70_input.ap(tmp0_desc, 38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp70_input.xo(tmp0_desc, 39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp70_input.ep(tmp0_desc, 40, tmp71_cached[40].g2(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp70_input.gp(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp70_input.gp(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp70_input.uo(tmp0_desc, 43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          case 44:
            tmp49_local44 = tmp70_input.xo(tmp0_desc, 44);
            tmp4_bitMask1 = tmp4_bitMask1 | 4096;
            break;
          case 45:
            tmp50_local45 = tmp70_input.gp(tmp0_desc, 45, IntSerializer_getInstance(), tmp50_local45);
            tmp4_bitMask1 = tmp4_bitMask1 | 8192;
            break;
          case 46:
            tmp51_local46 = tmp70_input.ap(tmp0_desc, 46);
            tmp4_bitMask1 = tmp4_bitMask1 | 16384;
            break;
          case 47:
            tmp52_local47 = tmp70_input.ap(tmp0_desc, 47);
            tmp4_bitMask1 = tmp4_bitMask1 | 32768;
            break;
          case 48:
            tmp53_local48 = tmp70_input.ap(tmp0_desc, 48);
            tmp4_bitMask1 = tmp4_bitMask1 | 65536;
            break;
          case 49:
            tmp54_local49 = tmp70_input.ep(tmp0_desc, 49, tmp71_cached[49].g2(), tmp54_local49);
            tmp4_bitMask1 = tmp4_bitMask1 | 131072;
            break;
          case 50:
            tmp55_local50 = tmp70_input.ep(tmp0_desc, 50, tmp71_cached[50].g2(), tmp55_local50);
            tmp4_bitMask1 = tmp4_bitMask1 | 262144;
            break;
          case 51:
            tmp56_local51 = tmp70_input.xo(tmp0_desc, 51);
            tmp4_bitMask1 = tmp4_bitMask1 | 524288;
            break;
          case 52:
            tmp57_local52 = tmp70_input.gp(tmp0_desc, 52, StringSerializer_getInstance(), tmp57_local52);
            tmp4_bitMask1 = tmp4_bitMask1 | 1048576;
            break;
          case 53:
            tmp58_local53 = tmp70_input.gp(tmp0_desc, 53, $serializer_getInstance_14(), tmp58_local53);
            tmp4_bitMask1 = tmp4_bitMask1 | 2097152;
            break;
          case 54:
            tmp59_local54 = tmp70_input.yo(tmp0_desc, 54);
            tmp4_bitMask1 = tmp4_bitMask1 | 4194304;
            break;
          case 55:
            tmp60_local55 = tmp70_input.gp(tmp0_desc, 55, tmp71_cached[55].g2(), tmp60_local55);
            tmp4_bitMask1 = tmp4_bitMask1 | 8388608;
            break;
          case 56:
            tmp61_local56 = tmp70_input.gp(tmp0_desc, 56, $serializer_getInstance_1(), tmp61_local56);
            tmp4_bitMask1 = tmp4_bitMask1 | 16777216;
            break;
          case 57:
            tmp62_local57 = tmp70_input.gp(tmp0_desc, 57, $serializer_getInstance_6(), tmp62_local57);
            tmp4_bitMask1 = tmp4_bitMask1 | 33554432;
            break;
          case 58:
            tmp63_local58 = tmp70_input.uo(tmp0_desc, 58);
            tmp4_bitMask1 = tmp4_bitMask1 | 67108864;
            break;
          case 59:
            tmp64_local59 = tmp70_input.gp(tmp0_desc, 59, $serializer_getInstance_0(), tmp64_local59);
            tmp4_bitMask1 = tmp4_bitMask1 | 134217728;
            break;
          case 60:
            tmp65_local60 = tmp70_input.gp(tmp0_desc, 60, $serializer_getInstance_3(), tmp65_local60);
            tmp4_bitMask1 = tmp4_bitMask1 | 268435456;
            break;
          case 61:
            tmp66_local61 = tmp70_input.gp(tmp0_desc, 61, tmp71_cached[61].g2(), tmp66_local61);
            tmp4_bitMask1 = tmp4_bitMask1 | 536870912;
            break;
          case 62:
            tmp67_local62 = tmp70_input.gp(tmp0_desc, 62, DoubleSerializer_getInstance(), tmp67_local62);
            tmp4_bitMask1 = tmp4_bitMask1 | 1073741824;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp70_input.to(tmp0_desc);
    return OrderPlaceRequest.d1q(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, tmp49_local44, tmp50_local45, tmp51_local46, tmp52_local47, tmp53_local48, tmp54_local49, tmp55_local50, tmp56_local51, tmp57_local52, tmp58_local53, tmp59_local54, tmp60_local55, tmp61_local56, tmp62_local57, tmp63_local58, tmp64_local59, tmp65_local60, tmp66_local61, tmp67_local62, null);
  }
  al() {
    return this.b1q_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance().a1q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), $serializer_getInstance_4(), tmp0_cached[17].g2(), tmp0_cached[18].g2(), get_nullable(tmp0_cached[19].g2()), DoubleSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[40].g2(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(IntSerializer_getInstance()), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), tmp0_cached[49].g2(), tmp0_cached[50].g2(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_14()), LongSerializer_getInstance(), get_nullable(tmp0_cached[55].g2()), get_nullable($serializer_getInstance_1()), get_nullable($serializer_getInstance_6()), BooleanSerializer_getInstance(), get_nullable($serializer_getInstance_0()), get_nullable($serializer_getInstance_3()), get_nullable(tmp0_cached[61].g2()), get_nullable(DoubleSerializer_getInstance())];
  }
}
class OrderPlaceRequest {
  constructor(isReprint, itemSelected, isAdjusting, isRefund, fromScreen, id, invoiceNo, invoiceBosNumber, orderState, orderSourceCode, orderSource, kotPrinted, isReceiptPrinted, isSync, offlineInvoiceNo, orderNo, orderStoreDetails, customerDetails, itemDetails, paymentDetails, changeTender, comment, isVoid, orderStatus, calenderDate, dateTime, businessDate, totalDiscount, totalItemTax, totalNetSale, totalGrossSale, transactionGrandAmount, roundOffAmount, refundAmount, discountPercentage, discountAmount, state, tipAmount, tipPercentage, splitBillTypeCount, splitTransactions, paidTransactions, orderType, orderTypeCode, isTaxExempt, splitBillType, receiptPrintCount, subTotal, subTotalExcludeMembership, totalCharges, initialPaid, appliedDiscount, charges, currentPayeeIndex, updateAt, platformDetails, orderTimeMillis, orderStateHistory, selectedOrderType, membershipPlan, isAdvanceOrder, orderScheduled, loyalty, taxes, taxableAmount) {
    Companion_getInstance();
    isReprint = isReprint === VOID ? false : isReprint;
    itemSelected = itemSelected === VOID ? false : itemSelected;
    isAdjusting = isAdjusting === VOID ? false : isAdjusting;
    isRefund = isRefund === VOID ? false : isRefund;
    fromScreen = fromScreen === VOID ? null : fromScreen;
    id = id === VOID ? null : id;
    invoiceNo = invoiceNo === VOID ? null : invoiceNo;
    invoiceBosNumber = invoiceBosNumber === VOID ? null : invoiceBosNumber;
    orderState = orderState === VOID ? '' : orderState;
    orderSourceCode = orderSourceCode === VOID ? null : orderSourceCode;
    orderSource = orderSource === VOID ? null : orderSource;
    kotPrinted = kotPrinted === VOID ? null : kotPrinted;
    isReceiptPrinted = isReceiptPrinted === VOID ? false : isReceiptPrinted;
    isSync = isSync === VOID ? false : isSync;
    offlineInvoiceNo = offlineInvoiceNo === VOID ? null : offlineInvoiceNo;
    orderNo = orderNo === VOID ? null : orderNo;
    orderStoreDetails = orderStoreDetails === VOID ? new OrderStoreDetails() : orderStoreDetails;
    customerDetails = customerDetails === VOID ? ArrayList.e1() : customerDetails;
    itemDetails = itemDetails === VOID ? ArrayList.e1() : itemDetails;
    paymentDetails = paymentDetails === VOID ? null : paymentDetails;
    changeTender = changeTender === VOID ? 0.0 : changeTender;
    comment = comment === VOID ? null : comment;
    isVoid = isVoid === VOID ? false : isVoid;
    orderStatus = orderStatus === VOID ? '' : orderStatus;
    calenderDate = calenderDate === VOID ? '' : calenderDate;
    dateTime = dateTime === VOID ? '' : dateTime;
    businessDate = businessDate === VOID ? '' : businessDate;
    totalDiscount = totalDiscount === VOID ? 0.0 : totalDiscount;
    totalItemTax = totalItemTax === VOID ? 0.0 : totalItemTax;
    totalNetSale = totalNetSale === VOID ? 0.0 : totalNetSale;
    totalGrossSale = totalGrossSale === VOID ? 0.0 : totalGrossSale;
    transactionGrandAmount = transactionGrandAmount === VOID ? 0.0 : transactionGrandAmount;
    roundOffAmount = roundOffAmount === VOID ? 0.0 : roundOffAmount;
    refundAmount = refundAmount === VOID ? 0.0 : refundAmount;
    discountPercentage = discountPercentage === VOID ? 0.0 : discountPercentage;
    discountAmount = discountAmount === VOID ? 0.0 : discountAmount;
    state = state === VOID ? '' : state;
    tipAmount = tipAmount === VOID ? 0.0 : tipAmount;
    tipPercentage = tipPercentage === VOID ? 0.0 : tipPercentage;
    splitBillTypeCount = splitBillTypeCount === VOID ? 1 : splitBillTypeCount;
    splitTransactions = splitTransactions === VOID ? ArrayList.e1() : splitTransactions;
    paidTransactions = paidTransactions === VOID ? ArrayList.e1() : paidTransactions;
    orderType = orderType === VOID ? null : orderType;
    orderTypeCode = orderTypeCode === VOID ? null : orderTypeCode;
    isTaxExempt = isTaxExempt === VOID ? false : isTaxExempt;
    splitBillType = splitBillType === VOID ? 1 : splitBillType;
    receiptPrintCount = receiptPrintCount === VOID ? 0 : receiptPrintCount;
    subTotal = subTotal === VOID ? 0.0 : subTotal;
    subTotalExcludeMembership = subTotalExcludeMembership === VOID ? null : subTotalExcludeMembership;
    totalCharges = totalCharges === VOID ? 0.0 : totalCharges;
    initialPaid = initialPaid === VOID ? 0.0 : initialPaid;
    appliedDiscount = appliedDiscount === VOID ? ArrayList.e1() : appliedDiscount;
    charges = charges === VOID ? ArrayList.e1() : charges;
    currentPayeeIndex = currentPayeeIndex === VOID ? -1 : currentPayeeIndex;
    updateAt = updateAt === VOID ? '' : updateAt;
    platformDetails = platformDetails === VOID ? null : platformDetails;
    orderTimeMillis = orderTimeMillis === VOID ? new Long(0, 0) : orderTimeMillis;
    orderStateHistory = orderStateHistory === VOID ? null : orderStateHistory;
    selectedOrderType = selectedOrderType === VOID ? null : selectedOrderType;
    membershipPlan = membershipPlan === VOID ? null : membershipPlan;
    isAdvanceOrder = isAdvanceOrder === VOID ? false : isAdvanceOrder;
    orderScheduled = orderScheduled === VOID ? null : orderScheduled;
    loyalty = loyalty === VOID ? null : loyalty;
    taxes = taxes === VOID ? null : taxes;
    taxableAmount = taxableAmount === VOID ? null : taxableAmount;
    this.j1h_1 = isReprint;
    this.k1h_1 = itemSelected;
    this.l1h_1 = isAdjusting;
    this.m1h_1 = isRefund;
    this.n1h_1 = fromScreen;
    this.o1h_1 = id;
    this.p1h_1 = invoiceNo;
    this.q1h_1 = invoiceBosNumber;
    this.r1h_1 = orderState;
    this.s1h_1 = orderSourceCode;
    this.t1h_1 = orderSource;
    this.u1h_1 = kotPrinted;
    this.v1h_1 = isReceiptPrinted;
    this.w1h_1 = isSync;
    this.x1h_1 = offlineInvoiceNo;
    this.y1h_1 = orderNo;
    this.z1h_1 = orderStoreDetails;
    this.a1i_1 = customerDetails;
    this.b1i_1 = itemDetails;
    this.c1i_1 = paymentDetails;
    this.d1i_1 = changeTender;
    this.e1i_1 = comment;
    this.f1i_1 = isVoid;
    this.g1i_1 = orderStatus;
    this.h1i_1 = calenderDate;
    this.i1i_1 = dateTime;
    this.j1i_1 = businessDate;
    this.k1i_1 = totalDiscount;
    this.l1i_1 = totalItemTax;
    this.m1i_1 = totalNetSale;
    this.n1i_1 = totalGrossSale;
    this.o1i_1 = transactionGrandAmount;
    this.p1i_1 = roundOffAmount;
    this.q1i_1 = refundAmount;
    this.r1i_1 = discountPercentage;
    this.s1i_1 = discountAmount;
    this.t1i_1 = state;
    this.u1i_1 = tipAmount;
    this.v1i_1 = tipPercentage;
    this.w1i_1 = splitBillTypeCount;
    this.x1i_1 = splitTransactions;
    this.y1i_1 = paidTransactions;
    this.z1i_1 = orderType;
    this.a1j_1 = orderTypeCode;
    this.b1j_1 = isTaxExempt;
    this.c1j_1 = splitBillType;
    this.d1j_1 = receiptPrintCount;
    this.e1j_1 = subTotal;
    this.f1j_1 = subTotalExcludeMembership;
    this.g1j_1 = totalCharges;
    this.h1j_1 = initialPaid;
    this.i1j_1 = appliedDiscount;
    this.j1j_1 = charges;
    this.k1j_1 = currentPayeeIndex;
    this.l1j_1 = updateAt;
    this.m1j_1 = platformDetails;
    this.n1j_1 = orderTimeMillis;
    this.o1j_1 = orderStateHistory;
    this.p1j_1 = selectedOrderType;
    this.q1j_1 = membershipPlan;
    this.r1j_1 = isAdvanceOrder;
    this.s1j_1 = orderScheduled;
    this.t1j_1 = loyalty;
    this.u1j_1 = taxes;
    this.v1j_1 = taxableAmount;
  }
  toString() {
    return 'OrderPlaceRequest(isReprint=' + this.j1h_1 + ', itemSelected=' + this.k1h_1 + ', isAdjusting=' + this.l1h_1 + ', isRefund=' + this.m1h_1 + ', fromScreen=' + this.n1h_1 + ', id=' + this.o1h_1 + ', invoiceNo=' + this.p1h_1 + ', invoiceBosNumber=' + this.q1h_1 + ', orderState=' + this.r1h_1 + ', orderSourceCode=' + this.s1h_1 + ', orderSource=' + this.t1h_1 + ', kotPrinted=' + this.u1h_1 + ', isReceiptPrinted=' + this.v1h_1 + ', isSync=' + this.w1h_1 + ', offlineInvoiceNo=' + this.x1h_1 + ', orderNo=' + this.y1h_1 + ', orderStoreDetails=' + this.z1h_1.toString() + ', customerDetails=' + toString(this.a1i_1) + ', itemDetails=' + this.b1i_1.toString() + ', paymentDetails=' + toString_0(this.c1i_1) + ', changeTender=' + this.d1i_1 + ', comment=' + this.e1i_1 + ', isVoid=' + this.f1i_1 + ', orderStatus=' + this.g1i_1 + ', calenderDate=' + this.h1i_1 + ', dateTime=' + this.i1i_1 + ', businessDate=' + this.j1i_1 + ', totalDiscount=' + this.k1i_1 + ', totalItemTax=' + this.l1i_1 + ', totalNetSale=' + this.m1i_1 + ', totalGrossSale=' + this.n1i_1 + ', transactionGrandAmount=' + this.o1i_1 + ', roundOffAmount=' + this.p1i_1 + ', refundAmount=' + this.q1i_1 + ', discountPercentage=' + this.r1i_1 + ', discountAmount=' + this.s1i_1 + ', state=' + this.t1i_1 + ', tipAmount=' + this.u1i_1 + ', tipPercentage=' + this.v1i_1 + ', splitBillTypeCount=' + this.w1i_1 + ', splitTransactions=' + this.x1i_1.toString() + ', paidTransactions=' + this.y1i_1.toString() + ', orderType=' + this.z1i_1 + ', orderTypeCode=' + this.a1j_1 + ', isTaxExempt=' + this.b1j_1 + ', splitBillType=' + this.c1j_1 + ', receiptPrintCount=' + this.d1j_1 + ', subTotal=' + this.e1j_1 + ', subTotalExcludeMembership=' + this.f1j_1 + ', totalCharges=' + this.g1j_1 + ', initialPaid=' + this.h1j_1 + ', appliedDiscount=' + this.i1j_1.toString() + ', charges=' + this.j1j_1.toString() + ', currentPayeeIndex=' + this.k1j_1 + ', updateAt=' + this.l1j_1 + ', platformDetails=' + toString_0(this.m1j_1) + ', orderTimeMillis=' + this.n1j_1.toString() + ', orderStateHistory=' + toString_0(this.o1j_1) + ', selectedOrderType=' + toString_0(this.p1j_1) + ', membershipPlan=' + toString_0(this.q1j_1) + ', isAdvanceOrder=' + this.r1j_1 + ', orderScheduled=' + toString_0(this.s1j_1) + ', loyalty=' + toString_0(this.t1j_1) + ', taxes=' + toString_0(this.u1j_1) + ', taxableAmount=' + this.v1j_1 + ')';
  }
  hashCode() {
    var result = getBooleanHashCode(this.j1h_1);
    result = imul(result, 31) + getBooleanHashCode(this.k1h_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.l1h_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.m1h_1) | 0;
    result = imul(result, 31) + (this.n1h_1 == null ? 0 : getStringHashCode(this.n1h_1)) | 0;
    result = imul(result, 31) + (this.o1h_1 == null ? 0 : getStringHashCode(this.o1h_1)) | 0;
    result = imul(result, 31) + (this.p1h_1 == null ? 0 : this.p1h_1) | 0;
    result = imul(result, 31) + (this.q1h_1 == null ? 0 : getStringHashCode(this.q1h_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.r1h_1) | 0;
    result = imul(result, 31) + (this.s1h_1 == null ? 0 : getStringHashCode(this.s1h_1)) | 0;
    result = imul(result, 31) + (this.t1h_1 == null ? 0 : getStringHashCode(this.t1h_1)) | 0;
    result = imul(result, 31) + (this.u1h_1 == null ? 0 : getBooleanHashCode(this.u1h_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.v1h_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.w1h_1) | 0;
    result = imul(result, 31) + (this.x1h_1 == null ? 0 : getStringHashCode(this.x1h_1)) | 0;
    result = imul(result, 31) + (this.y1h_1 == null ? 0 : getStringHashCode(this.y1h_1)) | 0;
    result = imul(result, 31) + this.z1h_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.a1i_1) | 0;
    result = imul(result, 31) + this.b1i_1.hashCode() | 0;
    result = imul(result, 31) + (this.c1i_1 == null ? 0 : this.c1i_1.hashCode()) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d1i_1) | 0;
    result = imul(result, 31) + (this.e1i_1 == null ? 0 : getStringHashCode(this.e1i_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.f1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.o1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.t1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v1i_1) | 0;
    result = imul(result, 31) + this.w1i_1 | 0;
    result = imul(result, 31) + this.x1i_1.hashCode() | 0;
    result = imul(result, 31) + this.y1i_1.hashCode() | 0;
    result = imul(result, 31) + (this.z1i_1 == null ? 0 : getStringHashCode(this.z1i_1)) | 0;
    result = imul(result, 31) + (this.a1j_1 == null ? 0 : getStringHashCode(this.a1j_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.b1j_1) | 0;
    result = imul(result, 31) + this.c1j_1 | 0;
    result = imul(result, 31) + (this.d1j_1 == null ? 0 : this.d1j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e1j_1) | 0;
    result = imul(result, 31) + (this.f1j_1 == null ? 0 : getNumberHashCode(this.f1j_1)) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g1j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h1j_1) | 0;
    result = imul(result, 31) + this.i1j_1.hashCode() | 0;
    result = imul(result, 31) + this.j1j_1.hashCode() | 0;
    result = imul(result, 31) + this.k1j_1 | 0;
    result = imul(result, 31) + (this.l1j_1 == null ? 0 : getStringHashCode(this.l1j_1)) | 0;
    result = imul(result, 31) + (this.m1j_1 == null ? 0 : this.m1j_1.hashCode()) | 0;
    result = imul(result, 31) + this.n1j_1.hashCode() | 0;
    result = imul(result, 31) + (this.o1j_1 == null ? 0 : hashCode(this.o1j_1)) | 0;
    result = imul(result, 31) + (this.p1j_1 == null ? 0 : this.p1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.q1j_1 == null ? 0 : this.q1j_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.r1j_1) | 0;
    result = imul(result, 31) + (this.s1j_1 == null ? 0 : this.s1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.t1j_1 == null ? 0 : this.t1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.u1j_1 == null ? 0 : hashCode(this.u1j_1)) | 0;
    result = imul(result, 31) + (this.v1j_1 == null ? 0 : getNumberHashCode(this.v1j_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderPlaceRequest))
      return false;
    var tmp0_other_with_cast = other instanceof OrderPlaceRequest ? other : THROW_CCE();
    if (!(this.j1h_1 === tmp0_other_with_cast.j1h_1))
      return false;
    if (!(this.k1h_1 === tmp0_other_with_cast.k1h_1))
      return false;
    if (!(this.l1h_1 === tmp0_other_with_cast.l1h_1))
      return false;
    if (!(this.m1h_1 === tmp0_other_with_cast.m1h_1))
      return false;
    if (!(this.n1h_1 == tmp0_other_with_cast.n1h_1))
      return false;
    if (!(this.o1h_1 == tmp0_other_with_cast.o1h_1))
      return false;
    if (!(this.p1h_1 == tmp0_other_with_cast.p1h_1))
      return false;
    if (!(this.q1h_1 == tmp0_other_with_cast.q1h_1))
      return false;
    if (!(this.r1h_1 === tmp0_other_with_cast.r1h_1))
      return false;
    if (!(this.s1h_1 == tmp0_other_with_cast.s1h_1))
      return false;
    if (!(this.t1h_1 == tmp0_other_with_cast.t1h_1))
      return false;
    if (!(this.u1h_1 == tmp0_other_with_cast.u1h_1))
      return false;
    if (!(this.v1h_1 === tmp0_other_with_cast.v1h_1))
      return false;
    if (!(this.w1h_1 === tmp0_other_with_cast.w1h_1))
      return false;
    if (!(this.x1h_1 == tmp0_other_with_cast.x1h_1))
      return false;
    if (!(this.y1h_1 == tmp0_other_with_cast.y1h_1))
      return false;
    if (!this.z1h_1.equals(tmp0_other_with_cast.z1h_1))
      return false;
    if (!equals(this.a1i_1, tmp0_other_with_cast.a1i_1))
      return false;
    if (!this.b1i_1.equals(tmp0_other_with_cast.b1i_1))
      return false;
    if (!equals(this.c1i_1, tmp0_other_with_cast.c1i_1))
      return false;
    if (!equals(this.d1i_1, tmp0_other_with_cast.d1i_1))
      return false;
    if (!(this.e1i_1 == tmp0_other_with_cast.e1i_1))
      return false;
    if (!(this.f1i_1 === tmp0_other_with_cast.f1i_1))
      return false;
    if (!(this.g1i_1 === tmp0_other_with_cast.g1i_1))
      return false;
    if (!(this.h1i_1 === tmp0_other_with_cast.h1i_1))
      return false;
    if (!(this.i1i_1 === tmp0_other_with_cast.i1i_1))
      return false;
    if (!(this.j1i_1 === tmp0_other_with_cast.j1i_1))
      return false;
    if (!equals(this.k1i_1, tmp0_other_with_cast.k1i_1))
      return false;
    if (!equals(this.l1i_1, tmp0_other_with_cast.l1i_1))
      return false;
    if (!equals(this.m1i_1, tmp0_other_with_cast.m1i_1))
      return false;
    if (!equals(this.n1i_1, tmp0_other_with_cast.n1i_1))
      return false;
    if (!equals(this.o1i_1, tmp0_other_with_cast.o1i_1))
      return false;
    if (!equals(this.p1i_1, tmp0_other_with_cast.p1i_1))
      return false;
    if (!equals(this.q1i_1, tmp0_other_with_cast.q1i_1))
      return false;
    if (!equals(this.r1i_1, tmp0_other_with_cast.r1i_1))
      return false;
    if (!equals(this.s1i_1, tmp0_other_with_cast.s1i_1))
      return false;
    if (!(this.t1i_1 === tmp0_other_with_cast.t1i_1))
      return false;
    if (!equals(this.u1i_1, tmp0_other_with_cast.u1i_1))
      return false;
    if (!equals(this.v1i_1, tmp0_other_with_cast.v1i_1))
      return false;
    if (!(this.w1i_1 === tmp0_other_with_cast.w1i_1))
      return false;
    if (!this.x1i_1.equals(tmp0_other_with_cast.x1i_1))
      return false;
    if (!this.y1i_1.equals(tmp0_other_with_cast.y1i_1))
      return false;
    if (!(this.z1i_1 == tmp0_other_with_cast.z1i_1))
      return false;
    if (!(this.a1j_1 == tmp0_other_with_cast.a1j_1))
      return false;
    if (!(this.b1j_1 === tmp0_other_with_cast.b1j_1))
      return false;
    if (!(this.c1j_1 === tmp0_other_with_cast.c1j_1))
      return false;
    if (!(this.d1j_1 == tmp0_other_with_cast.d1j_1))
      return false;
    if (!equals(this.e1j_1, tmp0_other_with_cast.e1j_1))
      return false;
    if (!equals(this.f1j_1, tmp0_other_with_cast.f1j_1))
      return false;
    if (!equals(this.g1j_1, tmp0_other_with_cast.g1j_1))
      return false;
    if (!equals(this.h1j_1, tmp0_other_with_cast.h1j_1))
      return false;
    if (!this.i1j_1.equals(tmp0_other_with_cast.i1j_1))
      return false;
    if (!this.j1j_1.equals(tmp0_other_with_cast.j1j_1))
      return false;
    if (!(this.k1j_1 === tmp0_other_with_cast.k1j_1))
      return false;
    if (!(this.l1j_1 == tmp0_other_with_cast.l1j_1))
      return false;
    if (!equals(this.m1j_1, tmp0_other_with_cast.m1j_1))
      return false;
    if (!this.n1j_1.equals(tmp0_other_with_cast.n1j_1))
      return false;
    if (!equals(this.o1j_1, tmp0_other_with_cast.o1j_1))
      return false;
    if (!equals(this.p1j_1, tmp0_other_with_cast.p1j_1))
      return false;
    if (!equals(this.q1j_1, tmp0_other_with_cast.q1j_1))
      return false;
    if (!(this.r1j_1 === tmp0_other_with_cast.r1j_1))
      return false;
    if (!equals(this.s1j_1, tmp0_other_with_cast.s1j_1))
      return false;
    if (!equals(this.t1j_1, tmp0_other_with_cast.t1j_1))
      return false;
    if (!equals(this.u1j_1, tmp0_other_with_cast.u1j_1))
      return false;
    if (!equals(this.v1j_1, tmp0_other_with_cast.v1j_1))
      return false;
    return true;
  }
  static d1q(seen0, seen1, isReprint, itemSelected, isAdjusting, isRefund, fromScreen, id, invoiceNo, invoiceBosNumber, orderState, orderSourceCode, orderSource, kotPrinted, isReceiptPrinted, isSync, offlineInvoiceNo, orderNo, orderStoreDetails, customerDetails, itemDetails, paymentDetails, changeTender, comment, isVoid, orderStatus, calenderDate, dateTime, businessDate, totalDiscount, totalItemTax, totalNetSale, totalGrossSale, transactionGrandAmount, roundOffAmount, refundAmount, discountPercentage, discountAmount, state, tipAmount, tipPercentage, splitBillTypeCount, splitTransactions, orderType, orderTypeCode, isTaxExempt, splitBillType, receiptPrintCount, subTotal, totalCharges, initialPaid, appliedDiscount, charges, currentPayeeIndex, updateAt, platformDetails, orderTimeMillis, orderStateHistory, selectedOrderType, membershipPlan, isAdvanceOrder, orderScheduled, loyalty, taxes, taxableAmount, serializationConstructorMarker) {
    Companion_getInstance();
    if (!!(!(0 === (0 & seen0)) | !(0 === (0 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([0, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance().b1q_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.j1h_1 = false;
    else
      $this.j1h_1 = isReprint;
    if (0 === (seen0 & 2))
      $this.k1h_1 = false;
    else
      $this.k1h_1 = itemSelected;
    if (0 === (seen0 & 4))
      $this.l1h_1 = false;
    else
      $this.l1h_1 = isAdjusting;
    if (0 === (seen0 & 8))
      $this.m1h_1 = false;
    else
      $this.m1h_1 = isRefund;
    if (0 === (seen0 & 16))
      $this.n1h_1 = null;
    else
      $this.n1h_1 = fromScreen;
    if (0 === (seen0 & 32))
      $this.o1h_1 = null;
    else
      $this.o1h_1 = id;
    if (0 === (seen0 & 64))
      $this.p1h_1 = null;
    else
      $this.p1h_1 = invoiceNo;
    if (0 === (seen0 & 128))
      $this.q1h_1 = null;
    else
      $this.q1h_1 = invoiceBosNumber;
    if (0 === (seen0 & 256))
      $this.r1h_1 = '';
    else
      $this.r1h_1 = orderState;
    if (0 === (seen0 & 512))
      $this.s1h_1 = null;
    else
      $this.s1h_1 = orderSourceCode;
    if (0 === (seen0 & 1024))
      $this.t1h_1 = null;
    else
      $this.t1h_1 = orderSource;
    if (0 === (seen0 & 2048))
      $this.u1h_1 = null;
    else
      $this.u1h_1 = kotPrinted;
    if (0 === (seen0 & 4096))
      $this.v1h_1 = false;
    else
      $this.v1h_1 = isReceiptPrinted;
    if (0 === (seen0 & 8192))
      $this.w1h_1 = false;
    else
      $this.w1h_1 = isSync;
    if (0 === (seen0 & 16384))
      $this.x1h_1 = null;
    else
      $this.x1h_1 = offlineInvoiceNo;
    if (0 === (seen0 & 32768))
      $this.y1h_1 = null;
    else
      $this.y1h_1 = orderNo;
    if (0 === (seen0 & 65536))
      $this.z1h_1 = new OrderStoreDetails();
    else
      $this.z1h_1 = orderStoreDetails;
    if (0 === (seen0 & 131072))
      $this.a1i_1 = ArrayList.e1();
    else
      $this.a1i_1 = customerDetails;
    if (0 === (seen0 & 262144))
      $this.b1i_1 = ArrayList.e1();
    else
      $this.b1i_1 = itemDetails;
    if (0 === (seen0 & 524288))
      $this.c1i_1 = null;
    else
      $this.c1i_1 = paymentDetails;
    if (0 === (seen0 & 1048576))
      $this.d1i_1 = 0.0;
    else
      $this.d1i_1 = changeTender;
    if (0 === (seen0 & 2097152))
      $this.e1i_1 = null;
    else
      $this.e1i_1 = comment;
    if (0 === (seen0 & 4194304))
      $this.f1i_1 = false;
    else
      $this.f1i_1 = isVoid;
    if (0 === (seen0 & 8388608))
      $this.g1i_1 = '';
    else
      $this.g1i_1 = orderStatus;
    if (0 === (seen0 & 16777216))
      $this.h1i_1 = '';
    else
      $this.h1i_1 = calenderDate;
    if (0 === (seen0 & 33554432))
      $this.i1i_1 = '';
    else
      $this.i1i_1 = dateTime;
    if (0 === (seen0 & 67108864))
      $this.j1i_1 = '';
    else
      $this.j1i_1 = businessDate;
    if (0 === (seen0 & 134217728))
      $this.k1i_1 = 0.0;
    else
      $this.k1i_1 = totalDiscount;
    if (0 === (seen0 & 268435456))
      $this.l1i_1 = 0.0;
    else
      $this.l1i_1 = totalItemTax;
    if (0 === (seen0 & 536870912))
      $this.m1i_1 = 0.0;
    else
      $this.m1i_1 = totalNetSale;
    if (0 === (seen0 & 1073741824))
      $this.n1i_1 = 0.0;
    else
      $this.n1i_1 = totalGrossSale;
    if (0 === (seen0 & -2147483648))
      $this.o1i_1 = 0.0;
    else
      $this.o1i_1 = transactionGrandAmount;
    if (0 === (seen1 & 1))
      $this.p1i_1 = 0.0;
    else
      $this.p1i_1 = roundOffAmount;
    if (0 === (seen1 & 2))
      $this.q1i_1 = 0.0;
    else
      $this.q1i_1 = refundAmount;
    if (0 === (seen1 & 4))
      $this.r1i_1 = 0.0;
    else
      $this.r1i_1 = discountPercentage;
    if (0 === (seen1 & 8))
      $this.s1i_1 = 0.0;
    else
      $this.s1i_1 = discountAmount;
    if (0 === (seen1 & 16))
      $this.t1i_1 = '';
    else
      $this.t1i_1 = state;
    if (0 === (seen1 & 32))
      $this.u1i_1 = 0.0;
    else
      $this.u1i_1 = tipAmount;
    if (0 === (seen1 & 64))
      $this.v1i_1 = 0.0;
    else
      $this.v1i_1 = tipPercentage;
    if (0 === (seen1 & 128))
      $this.w1i_1 = 1;
    else
      $this.w1i_1 = splitBillTypeCount;
    if (0 === (seen1 & 256))
      $this.x1i_1 = ArrayList.e1();
    else
      $this.x1i_1 = splitTransactions;
    $this.y1i_1 = ArrayList.e1();
    if (0 === (seen1 & 512))
      $this.z1i_1 = null;
    else
      $this.z1i_1 = orderType;
    if (0 === (seen1 & 1024))
      $this.a1j_1 = null;
    else
      $this.a1j_1 = orderTypeCode;
    if (0 === (seen1 & 2048))
      $this.b1j_1 = false;
    else
      $this.b1j_1 = isTaxExempt;
    if (0 === (seen1 & 4096))
      $this.c1j_1 = 1;
    else
      $this.c1j_1 = splitBillType;
    if (0 === (seen1 & 8192))
      $this.d1j_1 = 0;
    else
      $this.d1j_1 = receiptPrintCount;
    if (0 === (seen1 & 16384))
      $this.e1j_1 = 0.0;
    else
      $this.e1j_1 = subTotal;
    $this.f1j_1 = null;
    if (0 === (seen1 & 32768))
      $this.g1j_1 = 0.0;
    else
      $this.g1j_1 = totalCharges;
    if (0 === (seen1 & 65536))
      $this.h1j_1 = 0.0;
    else
      $this.h1j_1 = initialPaid;
    if (0 === (seen1 & 131072))
      $this.i1j_1 = ArrayList.e1();
    else
      $this.i1j_1 = appliedDiscount;
    if (0 === (seen1 & 262144))
      $this.j1j_1 = ArrayList.e1();
    else
      $this.j1j_1 = charges;
    if (0 === (seen1 & 524288))
      $this.k1j_1 = -1;
    else
      $this.k1j_1 = currentPayeeIndex;
    if (0 === (seen1 & 1048576))
      $this.l1j_1 = '';
    else
      $this.l1j_1 = updateAt;
    if (0 === (seen1 & 2097152))
      $this.m1j_1 = null;
    else
      $this.m1j_1 = platformDetails;
    if (0 === (seen1 & 4194304))
      $this.n1j_1 = new Long(0, 0);
    else
      $this.n1j_1 = orderTimeMillis;
    if (0 === (seen1 & 8388608))
      $this.o1j_1 = null;
    else
      $this.o1j_1 = orderStateHistory;
    if (0 === (seen1 & 16777216))
      $this.p1j_1 = null;
    else
      $this.p1j_1 = selectedOrderType;
    if (0 === (seen1 & 33554432))
      $this.q1j_1 = null;
    else
      $this.q1j_1 = membershipPlan;
    if (0 === (seen1 & 67108864))
      $this.r1j_1 = false;
    else
      $this.r1j_1 = isAdvanceOrder;
    if (0 === (seen1 & 134217728))
      $this.s1j_1 = null;
    else
      $this.s1j_1 = orderScheduled;
    if (0 === (seen1 & 268435456))
      $this.t1j_1 = null;
    else
      $this.t1j_1 = loyalty;
    if (0 === (seen1 & 536870912))
      $this.u1j_1 = null;
    else
      $this.u1j_1 = taxes;
    if (0 === (seen1 & 1073741824))
      $this.v1j_1 = null;
    else
      $this.v1j_1 = taxableAmount;
    return $this;
  }
}
class Companion_0 {}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderScheduled', this, 1);
    tmp0_serialDesc.aw('scheduled_date', true);
    this.e1q_1 = tmp0_serialDesc;
  }
  f1q(encoder, value) {
    var tmp0_desc = this.e1q_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.g1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.g1q_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.f1q(encoder, value instanceof OrderScheduled ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.e1q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.so(tmp0_desc);
    if (tmp5_input.ip()) {
      tmp4_local0 = tmp5_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp5_input.to(tmp0_desc);
    return OrderScheduled.h1q(tmp3_bitMask0, tmp4_local0, null);
  }
  al() {
    return this.e1q_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class OrderScheduled {
  constructor(scheduledDate) {
    scheduledDate = scheduledDate === VOID ? null : scheduledDate;
    this.g1q_1 = scheduledDate;
  }
  toString() {
    return 'OrderScheduled(scheduledDate=' + this.g1q_1 + ')';
  }
  hashCode() {
    return this.g1q_1 == null ? 0 : getStringHashCode(this.g1q_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderScheduled))
      return false;
    var tmp0_other_with_cast = other instanceof OrderScheduled ? other : THROW_CCE();
    if (!(this.g1q_1 == tmp0_other_with_cast.g1q_1))
      return false;
    return true;
  }
  static h1q(seen0, scheduledDate, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().e1q_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.g1q_1 = null;
    else
      $this.g1q_1 = scheduledDate;
    return $this;
  }
}
class Companion_1 {
  constructor() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i1q_1 = [null, null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, OrderTypeData$Companion$$childSerializers$_anonymous__6oolc8), null];
  }
}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderTypeData', this, 13);
    tmp0_serialDesc.aw('action', true);
    tmp0_serialDesc.aw('created_at', true);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('order_code', true);
    tmp0_serialDesc.aw('order_des', true);
    tmp0_serialDesc.aw('order_type', true);
    tmp0_serialDesc.aw('status', true);
    tmp0_serialDesc.aw('stdat', true);
    tmp0_serialDesc.aw('stendat', true);
    tmp0_serialDesc.aw('store_id', true);
    tmp0_serialDesc.aw('updated_at', true);
    tmp0_serialDesc.aw('charges', true);
    tmp0_serialDesc.aw('selected', true);
    this.j1q_1 = tmp0_serialDesc;
  }
  k1q(encoder, value) {
    var tmp0_desc = this.j1q_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().i1q_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.m1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.m1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.n1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.n1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.o1n_1 === '')) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.o1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.p1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.p1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.q1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.q1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.r1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.r1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.s1n_1 === false)) {
      tmp1_output.lq(tmp0_desc, 6, BooleanSerializer_getInstance(), value.s1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.t1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.t1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.u1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.u1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.v1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.v1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.w1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.w1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.x1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, tmp2_cached[11].g2(), value.x1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.y1n_1 === false)) {
      tmp1_output.zp(tmp0_desc, 12, value.y1n_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.k1q(encoder, value instanceof OrderTypeData ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.j1q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = false;
    var tmp17_input = decoder.so(tmp0_desc);
    var tmp18_cached = Companion_getInstance_1().i1q_1;
    if (tmp17_input.ip()) {
      tmp4_local0 = tmp17_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp17_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp17_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp17_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp17_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp17_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp17_input.gp(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp17_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp17_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp17_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp17_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp17_input.gp(tmp0_desc, 11, tmp18_cached[11].g2(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp17_input.uo(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp17_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp17_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp17_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp17_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp17_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp17_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp17_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp17_input.gp(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp17_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp17_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp17_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp17_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp17_input.gp(tmp0_desc, 11, tmp18_cached[11].g2(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp17_input.uo(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp17_input.to(tmp0_desc);
    return OrderTypeData.l1q(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, null);
  }
  al() {
    return this.j1q_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_1().i1q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[11].g2()), BooleanSerializer_getInstance()];
  }
}
class OrderTypeData {
  constructor(action, createdAt, id, orderCode, orderDes, orderType, status, stdat, stendat, storeId, updatedAt, charges, selected) {
    Companion_getInstance_1();
    action = action === VOID ? null : action;
    createdAt = createdAt === VOID ? null : createdAt;
    id = id === VOID ? '' : id;
    orderCode = orderCode === VOID ? null : orderCode;
    orderDes = orderDes === VOID ? null : orderDes;
    orderType = orderType === VOID ? null : orderType;
    status = status === VOID ? false : status;
    stdat = stdat === VOID ? null : stdat;
    stendat = stendat === VOID ? null : stendat;
    storeId = storeId === VOID ? null : storeId;
    updatedAt = updatedAt === VOID ? null : updatedAt;
    charges = charges === VOID ? null : charges;
    selected = selected === VOID ? false : selected;
    this.m1n_1 = action;
    this.n1n_1 = createdAt;
    this.o1n_1 = id;
    this.p1n_1 = orderCode;
    this.q1n_1 = orderDes;
    this.r1n_1 = orderType;
    this.s1n_1 = status;
    this.t1n_1 = stdat;
    this.u1n_1 = stendat;
    this.v1n_1 = storeId;
    this.w1n_1 = updatedAt;
    this.x1n_1 = charges;
    this.y1n_1 = selected;
  }
  toString() {
    return 'OrderTypeData(action=' + this.m1n_1 + ', createdAt=' + this.n1n_1 + ', id=' + this.o1n_1 + ', orderCode=' + this.p1n_1 + ', orderDes=' + this.q1n_1 + ', orderType=' + this.r1n_1 + ', status=' + this.s1n_1 + ', stdat=' + this.t1n_1 + ', stendat=' + this.u1n_1 + ', storeId=' + this.v1n_1 + ', updatedAt=' + this.w1n_1 + ', charges=' + toString_0(this.x1n_1) + ', selected=' + this.y1n_1 + ')';
  }
  hashCode() {
    var result = this.m1n_1 == null ? 0 : getStringHashCode(this.m1n_1);
    result = imul(result, 31) + (this.n1n_1 == null ? 0 : getStringHashCode(this.n1n_1)) | 0;
    result = imul(result, 31) + (this.o1n_1 == null ? 0 : getStringHashCode(this.o1n_1)) | 0;
    result = imul(result, 31) + (this.p1n_1 == null ? 0 : getStringHashCode(this.p1n_1)) | 0;
    result = imul(result, 31) + (this.q1n_1 == null ? 0 : getStringHashCode(this.q1n_1)) | 0;
    result = imul(result, 31) + (this.r1n_1 == null ? 0 : getStringHashCode(this.r1n_1)) | 0;
    result = imul(result, 31) + (this.s1n_1 == null ? 0 : getBooleanHashCode(this.s1n_1)) | 0;
    result = imul(result, 31) + (this.t1n_1 == null ? 0 : getStringHashCode(this.t1n_1)) | 0;
    result = imul(result, 31) + (this.u1n_1 == null ? 0 : getStringHashCode(this.u1n_1)) | 0;
    result = imul(result, 31) + (this.v1n_1 == null ? 0 : getStringHashCode(this.v1n_1)) | 0;
    result = imul(result, 31) + (this.w1n_1 == null ? 0 : getStringHashCode(this.w1n_1)) | 0;
    result = imul(result, 31) + (this.x1n_1 == null ? 0 : hashCode(this.x1n_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.y1n_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderTypeData))
      return false;
    var tmp0_other_with_cast = other instanceof OrderTypeData ? other : THROW_CCE();
    if (!(this.m1n_1 == tmp0_other_with_cast.m1n_1))
      return false;
    if (!(this.n1n_1 == tmp0_other_with_cast.n1n_1))
      return false;
    if (!(this.o1n_1 == tmp0_other_with_cast.o1n_1))
      return false;
    if (!(this.p1n_1 == tmp0_other_with_cast.p1n_1))
      return false;
    if (!(this.q1n_1 == tmp0_other_with_cast.q1n_1))
      return false;
    if (!(this.r1n_1 == tmp0_other_with_cast.r1n_1))
      return false;
    if (!(this.s1n_1 == tmp0_other_with_cast.s1n_1))
      return false;
    if (!(this.t1n_1 == tmp0_other_with_cast.t1n_1))
      return false;
    if (!(this.u1n_1 == tmp0_other_with_cast.u1n_1))
      return false;
    if (!(this.v1n_1 == tmp0_other_with_cast.v1n_1))
      return false;
    if (!(this.w1n_1 == tmp0_other_with_cast.w1n_1))
      return false;
    if (!equals(this.x1n_1, tmp0_other_with_cast.x1n_1))
      return false;
    if (!(this.y1n_1 === tmp0_other_with_cast.y1n_1))
      return false;
    return true;
  }
  static l1q(seen0, action, createdAt, id, orderCode, orderDes, orderType, status, stdat, stendat, storeId, updatedAt, charges, selected, serializationConstructorMarker) {
    Companion_getInstance_1();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().j1q_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.m1n_1 = null;
    else
      $this.m1n_1 = action;
    if (0 === (seen0 & 2))
      $this.n1n_1 = null;
    else
      $this.n1n_1 = createdAt;
    if (0 === (seen0 & 4))
      $this.o1n_1 = '';
    else
      $this.o1n_1 = id;
    if (0 === (seen0 & 8))
      $this.p1n_1 = null;
    else
      $this.p1n_1 = orderCode;
    if (0 === (seen0 & 16))
      $this.q1n_1 = null;
    else
      $this.q1n_1 = orderDes;
    if (0 === (seen0 & 32))
      $this.r1n_1 = null;
    else
      $this.r1n_1 = orderType;
    if (0 === (seen0 & 64))
      $this.s1n_1 = false;
    else
      $this.s1n_1 = status;
    if (0 === (seen0 & 128))
      $this.t1n_1 = null;
    else
      $this.t1n_1 = stdat;
    if (0 === (seen0 & 256))
      $this.u1n_1 = null;
    else
      $this.u1n_1 = stendat;
    if (0 === (seen0 & 512))
      $this.v1n_1 = null;
    else
      $this.v1n_1 = storeId;
    if (0 === (seen0 & 1024))
      $this.w1n_1 = null;
    else
      $this.w1n_1 = updatedAt;
    if (0 === (seen0 & 2048))
      $this.x1n_1 = null;
    else
      $this.x1n_1 = charges;
    if (0 === (seen0 & 4096))
      $this.y1n_1 = false;
    else
      $this.y1n_1 = selected;
    return $this;
  }
}
class Companion_2 {
  constructor() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, OrderLevelChargesData$Companion$$childSerializers$_anonymous__6h1i7d);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, OrderLevelChargesData$Companion$$childSerializers$_anonymous__6h1i7d_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, OrderLevelChargesData$Companion$$childSerializers$_anonymous__6h1i7d_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, OrderLevelChargesData$Companion$$childSerializers$_anonymous__6h1i7d_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m1q_1 = [null, null, tmp_1, null, null, tmp_3, null, tmp_5, null, tmp_7, null, lazy(tmp_8, OrderLevelChargesData$Companion$$childSerializers$_anonymous__6h1i7d_3), null, null, null, null];
  }
}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderLevelChargesData', this, 16);
    tmp0_serialDesc.aw('apply_at_level', true);
    tmp0_serialDesc.aw('charge_id', true);
    tmp0_serialDesc.aw('charge_tax_ids', true);
    tmp0_serialDesc.aw('charge_type', true);
    tmp0_serialDesc.aw('description', true);
    tmp0_serialDesc.aw('excluded_platforms', true);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('item_list', true);
    tmp0_serialDesc.aw('min_order_amount', true);
    tmp0_serialDesc.aw('order_types', true);
    tmp0_serialDesc.aw('status', true);
    tmp0_serialDesc.aw('store_list', true);
    tmp0_serialDesc.aw('title', true);
    tmp0_serialDesc.aw('types', true);
    tmp0_serialDesc.aw('value', true);
    tmp0_serialDesc.aw('value_type', true);
    this.n1q_1 = tmp0_serialDesc;
  }
  o1q(encoder, value) {
    var tmp0_desc = this.n1q_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_2().m1q_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.p1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.p1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.q1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.q1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.r1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, tmp2_cached[2].g2(), value.r1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.s1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.s1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.t1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.t1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.u1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, tmp2_cached[5].g2(), value.u1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.v1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.v1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.w1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, tmp2_cached[7].g2(), value.w1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.x1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, DoubleSerializer_getInstance(), value.x1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.y1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, tmp2_cached[9].g2(), value.y1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.z1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, BooleanSerializer_getInstance(), value.z1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.a1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, tmp2_cached[11].g2(), value.a1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.b1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.b1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.c1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, StringSerializer_getInstance(), value.c1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.d1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 14, DoubleSerializer_getInstance(), value.d1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.e1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 15, StringSerializer_getInstance(), value.e1p_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.o1q(encoder, value instanceof OrderLevelChargesData ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.n1q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_input = decoder.so(tmp0_desc);
    var tmp21_cached = Companion_getInstance_2().m1q_1;
    if (tmp20_input.ip()) {
      tmp4_local0 = tmp20_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.gp(tmp0_desc, 2, tmp21_cached[2].g2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.gp(tmp0_desc, 5, tmp21_cached[5].g2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.gp(tmp0_desc, 7, tmp21_cached[7].g2(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.gp(tmp0_desc, 8, DoubleSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.gp(tmp0_desc, 9, tmp21_cached[9].g2(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.gp(tmp0_desc, 10, BooleanSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.gp(tmp0_desc, 11, tmp21_cached[11].g2(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.gp(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.gp(tmp0_desc, 14, DoubleSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.gp(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.gp(tmp0_desc, 2, tmp21_cached[2].g2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.gp(tmp0_desc, 5, tmp21_cached[5].g2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.gp(tmp0_desc, 7, tmp21_cached[7].g2(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.gp(tmp0_desc, 8, DoubleSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.gp(tmp0_desc, 9, tmp21_cached[9].g2(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.gp(tmp0_desc, 10, BooleanSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.gp(tmp0_desc, 11, tmp21_cached[11].g2(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.gp(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.gp(tmp0_desc, 14, DoubleSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.gp(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp20_input.to(tmp0_desc);
    return OrderLevelChargesData.p1q(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  al() {
    return this.n1q_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_2().m1q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2].g2()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[5].g2()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[7].g2()), get_nullable(DoubleSerializer_getInstance()), get_nullable(tmp0_cached[9].g2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[11].g2()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class OrderLevelChargesData {
  constructor(applyAtLevel, chargeId, chargeTaxIds, chargeType, description, excludedPlatforms, id, itemList, minOrderAmount, orderTypes, status, storeList, title, types, value, valueType) {
    Companion_getInstance_2();
    applyAtLevel = applyAtLevel === VOID ? null : applyAtLevel;
    chargeId = chargeId === VOID ? null : chargeId;
    chargeTaxIds = chargeTaxIds === VOID ? null : chargeTaxIds;
    chargeType = chargeType === VOID ? null : chargeType;
    description = description === VOID ? null : description;
    excludedPlatforms = excludedPlatforms === VOID ? null : excludedPlatforms;
    id = id === VOID ? null : id;
    itemList = itemList === VOID ? null : itemList;
    minOrderAmount = minOrderAmount === VOID ? null : minOrderAmount;
    orderTypes = orderTypes === VOID ? null : orderTypes;
    status = status === VOID ? null : status;
    storeList = storeList === VOID ? null : storeList;
    title = title === VOID ? null : title;
    types = types === VOID ? null : types;
    value = value === VOID ? null : value;
    valueType = valueType === VOID ? null : valueType;
    this.p1o_1 = applyAtLevel;
    this.q1o_1 = chargeId;
    this.r1o_1 = chargeTaxIds;
    this.s1o_1 = chargeType;
    this.t1o_1 = description;
    this.u1o_1 = excludedPlatforms;
    this.v1o_1 = id;
    this.w1o_1 = itemList;
    this.x1o_1 = minOrderAmount;
    this.y1o_1 = orderTypes;
    this.z1o_1 = status;
    this.a1p_1 = storeList;
    this.b1p_1 = title;
    this.c1p_1 = types;
    this.d1p_1 = value;
    this.e1p_1 = valueType;
  }
  toString() {
    return 'OrderLevelChargesData(applyAtLevel=' + this.p1o_1 + ', chargeId=' + this.q1o_1 + ', chargeTaxIds=' + toString_0(this.r1o_1) + ', chargeType=' + this.s1o_1 + ', description=' + this.t1o_1 + ', excludedPlatforms=' + toString_0(this.u1o_1) + ', id=' + this.v1o_1 + ', itemList=' + toString_0(this.w1o_1) + ', minOrderAmount=' + this.x1o_1 + ', orderTypes=' + toString_0(this.y1o_1) + ', status=' + this.z1o_1 + ', storeList=' + toString_0(this.a1p_1) + ', title=' + this.b1p_1 + ', types=' + this.c1p_1 + ', value=' + this.d1p_1 + ', valueType=' + this.e1p_1 + ')';
  }
  hashCode() {
    var result = this.p1o_1 == null ? 0 : getStringHashCode(this.p1o_1);
    result = imul(result, 31) + (this.q1o_1 == null ? 0 : getStringHashCode(this.q1o_1)) | 0;
    result = imul(result, 31) + (this.r1o_1 == null ? 0 : hashCode(this.r1o_1)) | 0;
    result = imul(result, 31) + (this.s1o_1 == null ? 0 : getStringHashCode(this.s1o_1)) | 0;
    result = imul(result, 31) + (this.t1o_1 == null ? 0 : getStringHashCode(this.t1o_1)) | 0;
    result = imul(result, 31) + (this.u1o_1 == null ? 0 : hashCode(this.u1o_1)) | 0;
    result = imul(result, 31) + (this.v1o_1 == null ? 0 : getStringHashCode(this.v1o_1)) | 0;
    result = imul(result, 31) + (this.w1o_1 == null ? 0 : hashCode(this.w1o_1)) | 0;
    result = imul(result, 31) + (this.x1o_1 == null ? 0 : getNumberHashCode(this.x1o_1)) | 0;
    result = imul(result, 31) + (this.y1o_1 == null ? 0 : hashCode(this.y1o_1)) | 0;
    result = imul(result, 31) + (this.z1o_1 == null ? 0 : getBooleanHashCode(this.z1o_1)) | 0;
    result = imul(result, 31) + (this.a1p_1 == null ? 0 : hashCode(this.a1p_1)) | 0;
    result = imul(result, 31) + (this.b1p_1 == null ? 0 : getStringHashCode(this.b1p_1)) | 0;
    result = imul(result, 31) + (this.c1p_1 == null ? 0 : getStringHashCode(this.c1p_1)) | 0;
    result = imul(result, 31) + (this.d1p_1 == null ? 0 : getNumberHashCode(this.d1p_1)) | 0;
    result = imul(result, 31) + (this.e1p_1 == null ? 0 : getStringHashCode(this.e1p_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderLevelChargesData))
      return false;
    var tmp0_other_with_cast = other instanceof OrderLevelChargesData ? other : THROW_CCE();
    if (!(this.p1o_1 == tmp0_other_with_cast.p1o_1))
      return false;
    if (!(this.q1o_1 == tmp0_other_with_cast.q1o_1))
      return false;
    if (!equals(this.r1o_1, tmp0_other_with_cast.r1o_1))
      return false;
    if (!(this.s1o_1 == tmp0_other_with_cast.s1o_1))
      return false;
    if (!(this.t1o_1 == tmp0_other_with_cast.t1o_1))
      return false;
    if (!equals(this.u1o_1, tmp0_other_with_cast.u1o_1))
      return false;
    if (!(this.v1o_1 == tmp0_other_with_cast.v1o_1))
      return false;
    if (!equals(this.w1o_1, tmp0_other_with_cast.w1o_1))
      return false;
    if (!equals(this.x1o_1, tmp0_other_with_cast.x1o_1))
      return false;
    if (!equals(this.y1o_1, tmp0_other_with_cast.y1o_1))
      return false;
    if (!(this.z1o_1 == tmp0_other_with_cast.z1o_1))
      return false;
    if (!equals(this.a1p_1, tmp0_other_with_cast.a1p_1))
      return false;
    if (!(this.b1p_1 == tmp0_other_with_cast.b1p_1))
      return false;
    if (!(this.c1p_1 == tmp0_other_with_cast.c1p_1))
      return false;
    if (!equals(this.d1p_1, tmp0_other_with_cast.d1p_1))
      return false;
    if (!(this.e1p_1 == tmp0_other_with_cast.e1p_1))
      return false;
    return true;
  }
  static p1q(seen0, applyAtLevel, chargeId, chargeTaxIds, chargeType, description, excludedPlatforms, id, itemList, minOrderAmount, orderTypes, status, storeList, title, types, value, valueType, serializationConstructorMarker) {
    Companion_getInstance_2();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().n1q_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.p1o_1 = null;
    else
      $this.p1o_1 = applyAtLevel;
    if (0 === (seen0 & 2))
      $this.q1o_1 = null;
    else
      $this.q1o_1 = chargeId;
    if (0 === (seen0 & 4))
      $this.r1o_1 = null;
    else
      $this.r1o_1 = chargeTaxIds;
    if (0 === (seen0 & 8))
      $this.s1o_1 = null;
    else
      $this.s1o_1 = chargeType;
    if (0 === (seen0 & 16))
      $this.t1o_1 = null;
    else
      $this.t1o_1 = description;
    if (0 === (seen0 & 32))
      $this.u1o_1 = null;
    else
      $this.u1o_1 = excludedPlatforms;
    if (0 === (seen0 & 64))
      $this.v1o_1 = null;
    else
      $this.v1o_1 = id;
    if (0 === (seen0 & 128))
      $this.w1o_1 = null;
    else
      $this.w1o_1 = itemList;
    if (0 === (seen0 & 256))
      $this.x1o_1 = null;
    else
      $this.x1o_1 = minOrderAmount;
    if (0 === (seen0 & 512))
      $this.y1o_1 = null;
    else
      $this.y1o_1 = orderTypes;
    if (0 === (seen0 & 1024))
      $this.z1o_1 = null;
    else
      $this.z1o_1 = status;
    if (0 === (seen0 & 2048))
      $this.a1p_1 = null;
    else
      $this.a1p_1 = storeList;
    if (0 === (seen0 & 4096))
      $this.b1p_1 = null;
    else
      $this.b1p_1 = title;
    if (0 === (seen0 & 8192))
      $this.c1p_1 = null;
    else
      $this.c1p_1 = types;
    if (0 === (seen0 & 16384))
      $this.d1p_1 = null;
    else
      $this.d1p_1 = value;
    if (0 === (seen0 & 32768))
      $this.e1p_1 = null;
    else
      $this.e1p_1 = valueType;
    return $this;
  }
}
class Companion_3 {}
class $serializer_3 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.LoyaltyData', this, 5);
    tmp0_serialDesc.aw('loyalty_type', true);
    tmp0_serialDesc.aw('program_uuid', true);
    tmp0_serialDesc.aw('store_id', true);
    tmp0_serialDesc.aw('member_uuid', true);
    tmp0_serialDesc.aw('reward_uuid', true);
    this.q1q_1 = tmp0_serialDesc;
  }
  r1q(encoder, value) {
    var tmp0_desc = this.q1q_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.s1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.s1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.t1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.t1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.u1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.u1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.v1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.v1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.w1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.w1q_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.r1q(encoder, value instanceof LoyaltyData ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.q1q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.so(tmp0_desc);
    if (tmp9_input.ip()) {
      tmp4_local0 = tmp9_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp9_input.to(tmp0_desc);
    return LoyaltyData.x1q(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  al() {
    return this.q1q_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class LoyaltyData {
  constructor(loyaltyType, programUUID, storeId, memberUUID, rewardUUID) {
    loyaltyType = loyaltyType === VOID ? null : loyaltyType;
    programUUID = programUUID === VOID ? null : programUUID;
    storeId = storeId === VOID ? null : storeId;
    memberUUID = memberUUID === VOID ? null : memberUUID;
    rewardUUID = rewardUUID === VOID ? null : rewardUUID;
    this.s1q_1 = loyaltyType;
    this.t1q_1 = programUUID;
    this.u1q_1 = storeId;
    this.v1q_1 = memberUUID;
    this.w1q_1 = rewardUUID;
  }
  toString() {
    return 'LoyaltyData(loyaltyType=' + this.s1q_1 + ', programUUID=' + this.t1q_1 + ', storeId=' + this.u1q_1 + ', memberUUID=' + this.v1q_1 + ', rewardUUID=' + this.w1q_1 + ')';
  }
  hashCode() {
    var result = this.s1q_1 == null ? 0 : getStringHashCode(this.s1q_1);
    result = imul(result, 31) + (this.t1q_1 == null ? 0 : getStringHashCode(this.t1q_1)) | 0;
    result = imul(result, 31) + (this.u1q_1 == null ? 0 : getStringHashCode(this.u1q_1)) | 0;
    result = imul(result, 31) + (this.v1q_1 == null ? 0 : getStringHashCode(this.v1q_1)) | 0;
    result = imul(result, 31) + (this.w1q_1 == null ? 0 : getStringHashCode(this.w1q_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof LoyaltyData))
      return false;
    var tmp0_other_with_cast = other instanceof LoyaltyData ? other : THROW_CCE();
    if (!(this.s1q_1 == tmp0_other_with_cast.s1q_1))
      return false;
    if (!(this.t1q_1 == tmp0_other_with_cast.t1q_1))
      return false;
    if (!(this.u1q_1 == tmp0_other_with_cast.u1q_1))
      return false;
    if (!(this.v1q_1 == tmp0_other_with_cast.v1q_1))
      return false;
    if (!(this.w1q_1 == tmp0_other_with_cast.w1q_1))
      return false;
    return true;
  }
  static x1q(seen0, loyaltyType, programUUID, storeId, memberUUID, rewardUUID, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().q1q_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.s1q_1 = null;
    else
      $this.s1q_1 = loyaltyType;
    if (0 === (seen0 & 2))
      $this.t1q_1 = null;
    else
      $this.t1q_1 = programUUID;
    if (0 === (seen0 & 4))
      $this.u1q_1 = null;
    else
      $this.u1q_1 = storeId;
    if (0 === (seen0 & 8))
      $this.v1q_1 = null;
    else
      $this.v1q_1 = memberUUID;
    if (0 === (seen0 & 16))
      $this.w1q_1 = null;
    else
      $this.w1q_1 = rewardUUID;
    return $this;
  }
}
class Companion_4 {
  constructor() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y1q_1 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, OrderStoreDetails$Companion$$childSerializers$_anonymous__s8cdzv), null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  }
}
class $serializer_4 {
  constructor() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderStoreDetails', this, 43);
    tmp0_serialDesc.aw('store_id', true);
    tmp0_serialDesc.aw('gst_no', true);
    tmp0_serialDesc.aw('fssai_no', true);
    tmp0_serialDesc.aw('store_tagline', true);
    tmp0_serialDesc.aw('order_des', true);
    tmp0_serialDesc.aw('order_code', true);
    tmp0_serialDesc.aw('integration', true);
    tmp0_serialDesc.aw('referencestr', true);
    tmp0_serialDesc.aw('order_begin_date_time', true);
    tmp0_serialDesc.aw('order_end_date_time', true);
    tmp0_serialDesc.aw('store_session_id', true);
    tmp0_serialDesc.aw('store_name', true);
    tmp0_serialDesc.aw('tent_id', true);
    tmp0_serialDesc.aw('store_ad1', true);
    tmp0_serialDesc.aw('store_ad2', true);
    tmp0_serialDesc.aw('store_city', true);
    tmp0_serialDesc.aw('store_zip', true);
    tmp0_serialDesc.aw('store_country', true);
    tmp0_serialDesc.aw('store_contact_no', true);
    tmp0_serialDesc.aw('currencycode', true);
    tmp0_serialDesc.aw('emp_session_id', true);
    tmp0_serialDesc.aw('emp_no', true);
    tmp0_serialDesc.aw('emp_name', true);
    tmp0_serialDesc.aw('emp_mobile_no', true);
    tmp0_serialDesc.aw('table_no', true);
    tmp0_serialDesc.aw('table_id', true);
    tmp0_serialDesc.aw('floor_id', true);
    tmp0_serialDesc.aw('floor_no', true);
    tmp0_serialDesc.aw('manager_override', true);
    tmp0_serialDesc.aw('device_id', true);
    tmp0_serialDesc.aw('is_child_print_active', true);
    tmp0_serialDesc.aw('terminal_id', true);
    tmp0_serialDesc.aw('order_reference_no', true);
    tmp0_serialDesc.aw('previous_order_no', true);
    tmp0_serialDesc.aw('previous_invoice_no', true);
    tmp0_serialDesc.aw('channel', true);
    tmp0_serialDesc.aw('associate_emp_no', true);
    tmp0_serialDesc.aw('associate_emp_name', true);
    tmp0_serialDesc.aw('no_of_guest', true);
    tmp0_serialDesc.aw('prev_floor_id', true);
    tmp0_serialDesc.aw('prev_table_id', true);
    tmp0_serialDesc.aw('agg_order_ref_no', true);
    tmp0_serialDesc.aw('store_logo', true);
    this.z1q_1 = tmp0_serialDesc;
  }
  a1r(encoder, value) {
    var tmp0_desc = this.z1q_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().y1q_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.b1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.b1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.c1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.c1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.d1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.d1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.e1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.e1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.f1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.f1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.g1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.g1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.h1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.h1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.i1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.i1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.j1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.j1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.k1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.k1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.l1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 10, value.l1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.m1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 11, value.m1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.n1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.n1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.o1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 13, value.o1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.p1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 14, value.p1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.q1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 15, value.q1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !(value.r1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 16, value.r1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !(value.s1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 17, value.s1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !(value.t1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 18, value.t1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !(value.u1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 19, StringSerializer_getInstance(), value.u1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !(value.v1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 20, value.v1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.w1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 21, value.w1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 22) ? true : !(value.x1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 22, value.x1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 23) ? true : !(value.y1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 23, StringSerializer_getInstance(), value.y1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 24) ? true : !(value.z1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 24, StringSerializer_getInstance(), value.z1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 25) ? true : !(value.a1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 25, StringSerializer_getInstance(), value.a1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 26) ? true : !(value.b1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 26, StringSerializer_getInstance(), value.b1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 27) ? true : !(value.c1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 27, StringSerializer_getInstance(), value.c1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 28) ? true : !(value.d1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 28, tmp2_cached[28].g2(), value.d1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 29) ? true : !(value.e1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 29, StringSerializer_getInstance(), value.e1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 30) ? true : !(value.f1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 30, BooleanSerializer_getInstance(), value.f1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 31) ? true : !(value.g1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 31, StringSerializer_getInstance(), value.g1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 32) ? true : !(value.h1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 32, StringSerializer_getInstance(), value.h1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 33) ? true : !(value.i1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 33, StringSerializer_getInstance(), value.i1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 34) ? true : !(value.j1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 34, StringSerializer_getInstance(), value.j1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 35) ? true : !(value.k1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 35, StringSerializer_getInstance(), value.k1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 36) ? true : !(value.l1s_1 === '')) {
      tmp1_output.hq(tmp0_desc, 36, value.l1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 37) ? true : !(value.m1s_1 === '')) {
      tmp1_output.hq(tmp0_desc, 37, value.m1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 38) ? true : !(value.n1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 38, IntSerializer_getInstance(), value.n1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 39) ? true : !(value.o1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 39, StringSerializer_getInstance(), value.o1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 40) ? true : !(value.p1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 40, StringSerializer_getInstance(), value.p1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 41) ? true : !(value.q1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 41, StringSerializer_getInstance(), value.q1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 42) ? true : !(value.r1s_1 === '')) {
      tmp1_output.lq(tmp0_desc, 42, StringSerializer_getInstance(), value.r1s_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.a1r(encoder, value instanceof OrderStoreDetails ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.z1q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_local41 = null;
    var tmp47_local42 = null;
    var tmp48_input = decoder.so(tmp0_desc);
    var tmp49_cached = Companion_getInstance_4().y1q_1;
    if (tmp48_input.ip()) {
      tmp5_local0 = tmp48_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp48_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp48_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp48_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp48_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp48_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp48_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp48_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp48_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp48_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp48_input.cp(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp48_input.cp(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp48_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp48_input.cp(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp48_input.cp(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp48_input.cp(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp48_input.cp(tmp0_desc, 16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp48_input.cp(tmp0_desc, 17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp48_input.cp(tmp0_desc, 18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp48_input.gp(tmp0_desc, 19, StringSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp48_input.cp(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp48_input.cp(tmp0_desc, 21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp48_input.cp(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp48_input.gp(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp48_input.gp(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp48_input.gp(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp48_input.gp(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp48_input.gp(tmp0_desc, 27, StringSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp48_input.gp(tmp0_desc, 28, tmp49_cached[28].g2(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp48_input.gp(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp48_input.gp(tmp0_desc, 30, BooleanSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp48_input.gp(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp48_input.gp(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp48_input.gp(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp48_input.gp(tmp0_desc, 34, StringSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp48_input.gp(tmp0_desc, 35, StringSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp48_input.cp(tmp0_desc, 36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp48_input.cp(tmp0_desc, 37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp48_input.gp(tmp0_desc, 38, IntSerializer_getInstance(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp48_input.gp(tmp0_desc, 39, StringSerializer_getInstance(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp48_input.gp(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp48_input.gp(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp48_input.gp(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp48_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp48_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp48_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp48_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp48_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp48_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp48_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp48_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp48_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp48_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp48_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp48_input.cp(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp48_input.cp(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp48_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp48_input.cp(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp48_input.cp(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp48_input.cp(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp48_input.cp(tmp0_desc, 16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp48_input.cp(tmp0_desc, 17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp48_input.cp(tmp0_desc, 18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp48_input.gp(tmp0_desc, 19, StringSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp48_input.cp(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp48_input.cp(tmp0_desc, 21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp48_input.cp(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp48_input.gp(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp48_input.gp(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp48_input.gp(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp48_input.gp(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp48_input.gp(tmp0_desc, 27, StringSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp48_input.gp(tmp0_desc, 28, tmp49_cached[28].g2(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp48_input.gp(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp48_input.gp(tmp0_desc, 30, BooleanSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp48_input.gp(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp48_input.gp(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp48_input.gp(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp48_input.gp(tmp0_desc, 34, StringSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp48_input.gp(tmp0_desc, 35, StringSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp48_input.cp(tmp0_desc, 36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp48_input.cp(tmp0_desc, 37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp48_input.gp(tmp0_desc, 38, IntSerializer_getInstance(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp48_input.gp(tmp0_desc, 39, StringSerializer_getInstance(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp48_input.gp(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp48_input.gp(tmp0_desc, 41, StringSerializer_getInstance(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp48_input.gp(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp48_input.to(tmp0_desc);
    return OrderStoreDetails.s1s(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, null);
  }
  al() {
    return this.z1q_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_4().y1q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[28].g2()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class OrderStoreDetails {
  constructor(storeId, gstNumber, fssaiNo, storeTagLine, orderDes, orderCode, integration, referenceStr, orderBeginDateTime, orderEndDateTime, storeSessionId, storeName, tentId, storeAd1, storeAd2, storeCity, storeZip, storeCountry, storeContactNo, currencyCode, empSessionId, empNo, empName, empMobileNo, tableNo, tableId, floorId, floorNo, managerOverride, deviceId, isChildPrintActive, terminalId, orderReferenceNo, previousOrderNo, previousInvoiceNo, channel, associateEmpNo, associateEmpName, noOfGuest, previousFloorId, previousTableId, aggOrderRefNo, storeLogo) {
    Companion_getInstance_4();
    storeId = storeId === VOID ? '' : storeId;
    gstNumber = gstNumber === VOID ? null : gstNumber;
    fssaiNo = fssaiNo === VOID ? null : fssaiNo;
    storeTagLine = storeTagLine === VOID ? null : storeTagLine;
    orderDes = orderDes === VOID ? null : orderDes;
    orderCode = orderCode === VOID ? null : orderCode;
    integration = integration === VOID ? null : integration;
    referenceStr = referenceStr === VOID ? null : referenceStr;
    orderBeginDateTime = orderBeginDateTime === VOID ? null : orderBeginDateTime;
    orderEndDateTime = orderEndDateTime === VOID ? null : orderEndDateTime;
    storeSessionId = storeSessionId === VOID ? '' : storeSessionId;
    storeName = storeName === VOID ? '' : storeName;
    tentId = tentId === VOID ? null : tentId;
    storeAd1 = storeAd1 === VOID ? '' : storeAd1;
    storeAd2 = storeAd2 === VOID ? '' : storeAd2;
    storeCity = storeCity === VOID ? '' : storeCity;
    storeZip = storeZip === VOID ? '' : storeZip;
    storeCountry = storeCountry === VOID ? '' : storeCountry;
    storeContactNo = storeContactNo === VOID ? '' : storeContactNo;
    currencyCode = currencyCode === VOID ? null : currencyCode;
    empSessionId = empSessionId === VOID ? '' : empSessionId;
    empNo = empNo === VOID ? '' : empNo;
    empName = empName === VOID ? '' : empName;
    empMobileNo = empMobileNo === VOID ? null : empMobileNo;
    tableNo = tableNo === VOID ? null : tableNo;
    tableId = tableId === VOID ? null : tableId;
    floorId = floorId === VOID ? null : floorId;
    floorNo = floorNo === VOID ? null : floorNo;
    managerOverride = managerOverride === VOID ? null : managerOverride;
    deviceId = deviceId === VOID ? null : deviceId;
    isChildPrintActive = isChildPrintActive === VOID ? null : isChildPrintActive;
    terminalId = terminalId === VOID ? null : terminalId;
    orderReferenceNo = orderReferenceNo === VOID ? null : orderReferenceNo;
    previousOrderNo = previousOrderNo === VOID ? null : previousOrderNo;
    previousInvoiceNo = previousInvoiceNo === VOID ? null : previousInvoiceNo;
    channel = channel === VOID ? null : channel;
    associateEmpNo = associateEmpNo === VOID ? '' : associateEmpNo;
    associateEmpName = associateEmpName === VOID ? '' : associateEmpName;
    noOfGuest = noOfGuest === VOID ? null : noOfGuest;
    previousFloorId = previousFloorId === VOID ? null : previousFloorId;
    previousTableId = previousTableId === VOID ? null : previousTableId;
    aggOrderRefNo = aggOrderRefNo === VOID ? null : aggOrderRefNo;
    storeLogo = storeLogo === VOID ? '' : storeLogo;
    this.b1r_1 = storeId;
    this.c1r_1 = gstNumber;
    this.d1r_1 = fssaiNo;
    this.e1r_1 = storeTagLine;
    this.f1r_1 = orderDes;
    this.g1r_1 = orderCode;
    this.h1r_1 = integration;
    this.i1r_1 = referenceStr;
    this.j1r_1 = orderBeginDateTime;
    this.k1r_1 = orderEndDateTime;
    this.l1r_1 = storeSessionId;
    this.m1r_1 = storeName;
    this.n1r_1 = tentId;
    this.o1r_1 = storeAd1;
    this.p1r_1 = storeAd2;
    this.q1r_1 = storeCity;
    this.r1r_1 = storeZip;
    this.s1r_1 = storeCountry;
    this.t1r_1 = storeContactNo;
    this.u1r_1 = currencyCode;
    this.v1r_1 = empSessionId;
    this.w1r_1 = empNo;
    this.x1r_1 = empName;
    this.y1r_1 = empMobileNo;
    this.z1r_1 = tableNo;
    this.a1s_1 = tableId;
    this.b1s_1 = floorId;
    this.c1s_1 = floorNo;
    this.d1s_1 = managerOverride;
    this.e1s_1 = deviceId;
    this.f1s_1 = isChildPrintActive;
    this.g1s_1 = terminalId;
    this.h1s_1 = orderReferenceNo;
    this.i1s_1 = previousOrderNo;
    this.j1s_1 = previousInvoiceNo;
    this.k1s_1 = channel;
    this.l1s_1 = associateEmpNo;
    this.m1s_1 = associateEmpName;
    this.n1s_1 = noOfGuest;
    this.o1s_1 = previousFloorId;
    this.p1s_1 = previousTableId;
    this.q1s_1 = aggOrderRefNo;
    this.r1s_1 = storeLogo;
  }
  toString() {
    return 'OrderStoreDetails(storeId=' + this.b1r_1 + ', gstNumber=' + this.c1r_1 + ', fssaiNo=' + this.d1r_1 + ', storeTagLine=' + this.e1r_1 + ', orderDes=' + this.f1r_1 + ', orderCode=' + this.g1r_1 + ', integration=' + this.h1r_1 + ', referenceStr=' + this.i1r_1 + ', orderBeginDateTime=' + this.j1r_1 + ', orderEndDateTime=' + this.k1r_1 + ', storeSessionId=' + this.l1r_1 + ', storeName=' + this.m1r_1 + ', tentId=' + this.n1r_1 + ', storeAd1=' + this.o1r_1 + ', storeAd2=' + this.p1r_1 + ', storeCity=' + this.q1r_1 + ', storeZip=' + this.r1r_1 + ', storeCountry=' + this.s1r_1 + ', storeContactNo=' + this.t1r_1 + ', currencyCode=' + this.u1r_1 + ', empSessionId=' + this.v1r_1 + ', empNo=' + this.w1r_1 + ', empName=' + this.x1r_1 + ', empMobileNo=' + this.y1r_1 + ', tableNo=' + this.z1r_1 + ', tableId=' + this.a1s_1 + ', floorId=' + this.b1s_1 + ', floorNo=' + this.c1s_1 + ', managerOverride=' + toString_0(this.d1s_1) + ', deviceId=' + this.e1s_1 + ', isChildPrintActive=' + this.f1s_1 + ', terminalId=' + this.g1s_1 + ', orderReferenceNo=' + this.h1s_1 + ', previousOrderNo=' + this.i1s_1 + ', previousInvoiceNo=' + this.j1s_1 + ', channel=' + this.k1s_1 + ', associateEmpNo=' + this.l1s_1 + ', associateEmpName=' + this.m1s_1 + ', noOfGuest=' + this.n1s_1 + ', previousFloorId=' + this.o1s_1 + ', previousTableId=' + this.p1s_1 + ', aggOrderRefNo=' + this.q1s_1 + ', storeLogo=' + this.r1s_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.b1r_1);
    result = imul(result, 31) + (this.c1r_1 == null ? 0 : getStringHashCode(this.c1r_1)) | 0;
    result = imul(result, 31) + (this.d1r_1 == null ? 0 : getStringHashCode(this.d1r_1)) | 0;
    result = imul(result, 31) + (this.e1r_1 == null ? 0 : getStringHashCode(this.e1r_1)) | 0;
    result = imul(result, 31) + (this.f1r_1 == null ? 0 : getStringHashCode(this.f1r_1)) | 0;
    result = imul(result, 31) + (this.g1r_1 == null ? 0 : getStringHashCode(this.g1r_1)) | 0;
    result = imul(result, 31) + (this.h1r_1 == null ? 0 : getStringHashCode(this.h1r_1)) | 0;
    result = imul(result, 31) + (this.i1r_1 == null ? 0 : getStringHashCode(this.i1r_1)) | 0;
    result = imul(result, 31) + (this.j1r_1 == null ? 0 : getStringHashCode(this.j1r_1)) | 0;
    result = imul(result, 31) + (this.k1r_1 == null ? 0 : getStringHashCode(this.k1r_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.l1r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m1r_1) | 0;
    result = imul(result, 31) + (this.n1r_1 == null ? 0 : getStringHashCode(this.n1r_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.o1r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.p1r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.q1r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.r1r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.s1r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.t1r_1) | 0;
    result = imul(result, 31) + (this.u1r_1 == null ? 0 : getStringHashCode(this.u1r_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.v1r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w1r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x1r_1) | 0;
    result = imul(result, 31) + (this.y1r_1 == null ? 0 : getStringHashCode(this.y1r_1)) | 0;
    result = imul(result, 31) + (this.z1r_1 == null ? 0 : getStringHashCode(this.z1r_1)) | 0;
    result = imul(result, 31) + (this.a1s_1 == null ? 0 : getStringHashCode(this.a1s_1)) | 0;
    result = imul(result, 31) + (this.b1s_1 == null ? 0 : getStringHashCode(this.b1s_1)) | 0;
    result = imul(result, 31) + (this.c1s_1 == null ? 0 : getStringHashCode(this.c1s_1)) | 0;
    result = imul(result, 31) + (this.d1s_1 == null ? 0 : hashCode(this.d1s_1)) | 0;
    result = imul(result, 31) + (this.e1s_1 == null ? 0 : getStringHashCode(this.e1s_1)) | 0;
    result = imul(result, 31) + (this.f1s_1 == null ? 0 : getBooleanHashCode(this.f1s_1)) | 0;
    result = imul(result, 31) + (this.g1s_1 == null ? 0 : getStringHashCode(this.g1s_1)) | 0;
    result = imul(result, 31) + (this.h1s_1 == null ? 0 : getStringHashCode(this.h1s_1)) | 0;
    result = imul(result, 31) + (this.i1s_1 == null ? 0 : getStringHashCode(this.i1s_1)) | 0;
    result = imul(result, 31) + (this.j1s_1 == null ? 0 : getStringHashCode(this.j1s_1)) | 0;
    result = imul(result, 31) + (this.k1s_1 == null ? 0 : getStringHashCode(this.k1s_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.l1s_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m1s_1) | 0;
    result = imul(result, 31) + (this.n1s_1 == null ? 0 : this.n1s_1) | 0;
    result = imul(result, 31) + (this.o1s_1 == null ? 0 : getStringHashCode(this.o1s_1)) | 0;
    result = imul(result, 31) + (this.p1s_1 == null ? 0 : getStringHashCode(this.p1s_1)) | 0;
    result = imul(result, 31) + (this.q1s_1 == null ? 0 : getStringHashCode(this.q1s_1)) | 0;
    result = imul(result, 31) + (this.r1s_1 == null ? 0 : getStringHashCode(this.r1s_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderStoreDetails))
      return false;
    var tmp0_other_with_cast = other instanceof OrderStoreDetails ? other : THROW_CCE();
    if (!(this.b1r_1 === tmp0_other_with_cast.b1r_1))
      return false;
    if (!(this.c1r_1 == tmp0_other_with_cast.c1r_1))
      return false;
    if (!(this.d1r_1 == tmp0_other_with_cast.d1r_1))
      return false;
    if (!(this.e1r_1 == tmp0_other_with_cast.e1r_1))
      return false;
    if (!(this.f1r_1 == tmp0_other_with_cast.f1r_1))
      return false;
    if (!(this.g1r_1 == tmp0_other_with_cast.g1r_1))
      return false;
    if (!(this.h1r_1 == tmp0_other_with_cast.h1r_1))
      return false;
    if (!(this.i1r_1 == tmp0_other_with_cast.i1r_1))
      return false;
    if (!(this.j1r_1 == tmp0_other_with_cast.j1r_1))
      return false;
    if (!(this.k1r_1 == tmp0_other_with_cast.k1r_1))
      return false;
    if (!(this.l1r_1 === tmp0_other_with_cast.l1r_1))
      return false;
    if (!(this.m1r_1 === tmp0_other_with_cast.m1r_1))
      return false;
    if (!(this.n1r_1 == tmp0_other_with_cast.n1r_1))
      return false;
    if (!(this.o1r_1 === tmp0_other_with_cast.o1r_1))
      return false;
    if (!(this.p1r_1 === tmp0_other_with_cast.p1r_1))
      return false;
    if (!(this.q1r_1 === tmp0_other_with_cast.q1r_1))
      return false;
    if (!(this.r1r_1 === tmp0_other_with_cast.r1r_1))
      return false;
    if (!(this.s1r_1 === tmp0_other_with_cast.s1r_1))
      return false;
    if (!(this.t1r_1 === tmp0_other_with_cast.t1r_1))
      return false;
    if (!(this.u1r_1 == tmp0_other_with_cast.u1r_1))
      return false;
    if (!(this.v1r_1 === tmp0_other_with_cast.v1r_1))
      return false;
    if (!(this.w1r_1 === tmp0_other_with_cast.w1r_1))
      return false;
    if (!(this.x1r_1 === tmp0_other_with_cast.x1r_1))
      return false;
    if (!(this.y1r_1 == tmp0_other_with_cast.y1r_1))
      return false;
    if (!(this.z1r_1 == tmp0_other_with_cast.z1r_1))
      return false;
    if (!(this.a1s_1 == tmp0_other_with_cast.a1s_1))
      return false;
    if (!(this.b1s_1 == tmp0_other_with_cast.b1s_1))
      return false;
    if (!(this.c1s_1 == tmp0_other_with_cast.c1s_1))
      return false;
    if (!equals(this.d1s_1, tmp0_other_with_cast.d1s_1))
      return false;
    if (!(this.e1s_1 == tmp0_other_with_cast.e1s_1))
      return false;
    if (!(this.f1s_1 == tmp0_other_with_cast.f1s_1))
      return false;
    if (!(this.g1s_1 == tmp0_other_with_cast.g1s_1))
      return false;
    if (!(this.h1s_1 == tmp0_other_with_cast.h1s_1))
      return false;
    if (!(this.i1s_1 == tmp0_other_with_cast.i1s_1))
      return false;
    if (!(this.j1s_1 == tmp0_other_with_cast.j1s_1))
      return false;
    if (!(this.k1s_1 == tmp0_other_with_cast.k1s_1))
      return false;
    if (!(this.l1s_1 === tmp0_other_with_cast.l1s_1))
      return false;
    if (!(this.m1s_1 === tmp0_other_with_cast.m1s_1))
      return false;
    if (!(this.n1s_1 == tmp0_other_with_cast.n1s_1))
      return false;
    if (!(this.o1s_1 == tmp0_other_with_cast.o1s_1))
      return false;
    if (!(this.p1s_1 == tmp0_other_with_cast.p1s_1))
      return false;
    if (!(this.q1s_1 == tmp0_other_with_cast.q1s_1))
      return false;
    if (!(this.r1s_1 == tmp0_other_with_cast.r1s_1))
      return false;
    return true;
  }
  static s1s(seen0, seen1, storeId, gstNumber, fssaiNo, storeTagLine, orderDes, orderCode, integration, referenceStr, orderBeginDateTime, orderEndDateTime, storeSessionId, storeName, tentId, storeAd1, storeAd2, storeCity, storeZip, storeCountry, storeContactNo, currencyCode, empSessionId, empNo, empName, empMobileNo, tableNo, tableId, floorId, floorNo, managerOverride, deviceId, isChildPrintActive, terminalId, orderReferenceNo, previousOrderNo, previousInvoiceNo, channel, associateEmpNo, associateEmpName, noOfGuest, previousFloorId, previousTableId, aggOrderRefNo, storeLogo, serializationConstructorMarker) {
    Companion_getInstance_4();
    if (!!(!(0 === (0 & seen0)) | !(0 === (0 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([0, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_4().z1q_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.b1r_1 = '';
    else
      $this.b1r_1 = storeId;
    if (0 === (seen0 & 2))
      $this.c1r_1 = null;
    else
      $this.c1r_1 = gstNumber;
    if (0 === (seen0 & 4))
      $this.d1r_1 = null;
    else
      $this.d1r_1 = fssaiNo;
    if (0 === (seen0 & 8))
      $this.e1r_1 = null;
    else
      $this.e1r_1 = storeTagLine;
    if (0 === (seen0 & 16))
      $this.f1r_1 = null;
    else
      $this.f1r_1 = orderDes;
    if (0 === (seen0 & 32))
      $this.g1r_1 = null;
    else
      $this.g1r_1 = orderCode;
    if (0 === (seen0 & 64))
      $this.h1r_1 = null;
    else
      $this.h1r_1 = integration;
    if (0 === (seen0 & 128))
      $this.i1r_1 = null;
    else
      $this.i1r_1 = referenceStr;
    if (0 === (seen0 & 256))
      $this.j1r_1 = null;
    else
      $this.j1r_1 = orderBeginDateTime;
    if (0 === (seen0 & 512))
      $this.k1r_1 = null;
    else
      $this.k1r_1 = orderEndDateTime;
    if (0 === (seen0 & 1024))
      $this.l1r_1 = '';
    else
      $this.l1r_1 = storeSessionId;
    if (0 === (seen0 & 2048))
      $this.m1r_1 = '';
    else
      $this.m1r_1 = storeName;
    if (0 === (seen0 & 4096))
      $this.n1r_1 = null;
    else
      $this.n1r_1 = tentId;
    if (0 === (seen0 & 8192))
      $this.o1r_1 = '';
    else
      $this.o1r_1 = storeAd1;
    if (0 === (seen0 & 16384))
      $this.p1r_1 = '';
    else
      $this.p1r_1 = storeAd2;
    if (0 === (seen0 & 32768))
      $this.q1r_1 = '';
    else
      $this.q1r_1 = storeCity;
    if (0 === (seen0 & 65536))
      $this.r1r_1 = '';
    else
      $this.r1r_1 = storeZip;
    if (0 === (seen0 & 131072))
      $this.s1r_1 = '';
    else
      $this.s1r_1 = storeCountry;
    if (0 === (seen0 & 262144))
      $this.t1r_1 = '';
    else
      $this.t1r_1 = storeContactNo;
    if (0 === (seen0 & 524288))
      $this.u1r_1 = null;
    else
      $this.u1r_1 = currencyCode;
    if (0 === (seen0 & 1048576))
      $this.v1r_1 = '';
    else
      $this.v1r_1 = empSessionId;
    if (0 === (seen0 & 2097152))
      $this.w1r_1 = '';
    else
      $this.w1r_1 = empNo;
    if (0 === (seen0 & 4194304))
      $this.x1r_1 = '';
    else
      $this.x1r_1 = empName;
    if (0 === (seen0 & 8388608))
      $this.y1r_1 = null;
    else
      $this.y1r_1 = empMobileNo;
    if (0 === (seen0 & 16777216))
      $this.z1r_1 = null;
    else
      $this.z1r_1 = tableNo;
    if (0 === (seen0 & 33554432))
      $this.a1s_1 = null;
    else
      $this.a1s_1 = tableId;
    if (0 === (seen0 & 67108864))
      $this.b1s_1 = null;
    else
      $this.b1s_1 = floorId;
    if (0 === (seen0 & 134217728))
      $this.c1s_1 = null;
    else
      $this.c1s_1 = floorNo;
    if (0 === (seen0 & 268435456))
      $this.d1s_1 = null;
    else
      $this.d1s_1 = managerOverride;
    if (0 === (seen0 & 536870912))
      $this.e1s_1 = null;
    else
      $this.e1s_1 = deviceId;
    if (0 === (seen0 & 1073741824))
      $this.f1s_1 = null;
    else
      $this.f1s_1 = isChildPrintActive;
    if (0 === (seen0 & -2147483648))
      $this.g1s_1 = null;
    else
      $this.g1s_1 = terminalId;
    if (0 === (seen1 & 1))
      $this.h1s_1 = null;
    else
      $this.h1s_1 = orderReferenceNo;
    if (0 === (seen1 & 2))
      $this.i1s_1 = null;
    else
      $this.i1s_1 = previousOrderNo;
    if (0 === (seen1 & 4))
      $this.j1s_1 = null;
    else
      $this.j1s_1 = previousInvoiceNo;
    if (0 === (seen1 & 8))
      $this.k1s_1 = null;
    else
      $this.k1s_1 = channel;
    if (0 === (seen1 & 16))
      $this.l1s_1 = '';
    else
      $this.l1s_1 = associateEmpNo;
    if (0 === (seen1 & 32))
      $this.m1s_1 = '';
    else
      $this.m1s_1 = associateEmpName;
    if (0 === (seen1 & 64))
      $this.n1s_1 = null;
    else
      $this.n1s_1 = noOfGuest;
    if (0 === (seen1 & 128))
      $this.o1s_1 = null;
    else
      $this.o1s_1 = previousFloorId;
    if (0 === (seen1 & 256))
      $this.p1s_1 = null;
    else
      $this.p1s_1 = previousTableId;
    if (0 === (seen1 & 512))
      $this.q1s_1 = null;
    else
      $this.q1s_1 = aggOrderRefNo;
    if (0 === (seen1 & 1024))
      $this.r1s_1 = '';
    else
      $this.r1s_1 = storeLogo;
    return $this;
  }
}
class Companion_5 {}
class $serializer_5 {
  constructor() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.CustomerDetails', this, 22);
    tmp0_serialDesc.aw('cust_first_name', true);
    tmp0_serialDesc.aw('cust_last_name', true);
    tmp0_serialDesc.aw('cust_mobile', true);
    tmp0_serialDesc.aw('email_id', true);
    tmp0_serialDesc.aw('cust_address', true);
    tmp0_serialDesc.aw('cust_tax_id', true);
    tmp0_serialDesc.aw('cust_zipcode', true);
    tmp0_serialDesc.aw('landmark', true);
    tmp0_serialDesc.aw('cust_city', true);
    tmp0_serialDesc.aw('cust_country', true);
    tmp0_serialDesc.aw('cust_state', true);
    tmp0_serialDesc.aw('cust_DOB', true);
    tmp0_serialDesc.aw('cust_DOA', true);
    tmp0_serialDesc.aw('cust_loyality_points', true);
    tmp0_serialDesc.aw('extras', true);
    tmp0_serialDesc.aw('points_awarded', true);
    tmp0_serialDesc.aw('loyalty_type', true);
    tmp0_serialDesc.aw('cust_loyalty_id', true);
    tmp0_serialDesc.aw('program_uuid', true);
    tmp0_serialDesc.aw('tier_uuid', true);
    tmp0_serialDesc.aw('reward_uuid', true);
    tmp0_serialDesc.aw('customer_membership', true);
    this.t1s_1 = tmp0_serialDesc;
  }
  u1s(encoder, value) {
    var tmp0_desc = this.t1s_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.v1s_1 === 'Guest')) {
      tmp1_output.hq(tmp0_desc, 0, value.v1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.w1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.w1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.x1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.x1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.y1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.y1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.z1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.z1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.a1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.a1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.b1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.b1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.c1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.c1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.d1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.d1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.e1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.e1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.f1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.f1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.g1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.g1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.h1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.h1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.i1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, IntSerializer_getInstance(), value.i1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.j1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 14, StringSerializer_getInstance(), value.j1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.k1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 15, StringSerializer_getInstance(), value.k1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !(value.l1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 16, StringSerializer_getInstance(), value.l1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !(value.m1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 17, StringSerializer_getInstance(), value.m1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !(value.n1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 18, StringSerializer_getInstance(), value.n1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !(value.o1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 19, StringSerializer_getInstance(), value.o1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !(value.p1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 20, StringSerializer_getInstance(), value.p1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.q1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 21, $serializer_getInstance_6(), value.q1t_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.u1s(encoder, value instanceof CustomerDetails ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.t1s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_local17 = null;
    var tmp22_local18 = null;
    var tmp23_local19 = null;
    var tmp24_local20 = null;
    var tmp25_local21 = null;
    var tmp26_input = decoder.so(tmp0_desc);
    if (tmp26_input.ip()) {
      tmp4_local0 = tmp26_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp26_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp26_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp26_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp26_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp26_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp26_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp26_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp26_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp26_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp26_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp26_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp26_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp26_input.gp(tmp0_desc, 13, IntSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp26_input.gp(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp26_input.gp(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp26_input.gp(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp26_input.gp(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp26_input.gp(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp26_input.gp(tmp0_desc, 19, StringSerializer_getInstance(), tmp23_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp26_input.gp(tmp0_desc, 20, StringSerializer_getInstance(), tmp24_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp25_local21 = tmp26_input.gp(tmp0_desc, 21, $serializer_getInstance_6(), tmp25_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp26_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp26_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp26_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp26_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp26_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp26_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp26_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp26_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp26_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp26_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp26_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp26_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp26_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp26_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp26_input.gp(tmp0_desc, 13, IntSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp26_input.gp(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp26_input.gp(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp26_input.gp(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp26_input.gp(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp26_input.gp(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp26_input.gp(tmp0_desc, 19, StringSerializer_getInstance(), tmp23_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp26_input.gp(tmp0_desc, 20, StringSerializer_getInstance(), tmp24_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp25_local21 = tmp26_input.gp(tmp0_desc, 21, $serializer_getInstance_6(), tmp25_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp26_input.to(tmp0_desc);
    return CustomerDetails.r1t(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, tmp25_local21, null);
  }
  al() {
    return this.t1s_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_6())];
  }
}
class CustomerDetails {
  constructor(name, custLastName, mobile, emailId, custAddress, custTaxID, custZipCode, landMark, cusCity, cusCountry, custState, custDOB, custDOA, custLoyaltyPoints, extras, pointsAwarded, loyaltyType, custLoyaltyId, programUUID, tierUUID, rewardUuid, customerMembership) {
    name = name === VOID ? 'Guest' : name;
    custLastName = custLastName === VOID ? null : custLastName;
    mobile = mobile === VOID ? null : mobile;
    emailId = emailId === VOID ? null : emailId;
    custAddress = custAddress === VOID ? null : custAddress;
    custTaxID = custTaxID === VOID ? null : custTaxID;
    custZipCode = custZipCode === VOID ? null : custZipCode;
    landMark = landMark === VOID ? null : landMark;
    cusCity = cusCity === VOID ? null : cusCity;
    cusCountry = cusCountry === VOID ? null : cusCountry;
    custState = custState === VOID ? null : custState;
    custDOB = custDOB === VOID ? null : custDOB;
    custDOA = custDOA === VOID ? null : custDOA;
    custLoyaltyPoints = custLoyaltyPoints === VOID ? null : custLoyaltyPoints;
    extras = extras === VOID ? null : extras;
    pointsAwarded = pointsAwarded === VOID ? null : pointsAwarded;
    loyaltyType = loyaltyType === VOID ? null : loyaltyType;
    custLoyaltyId = custLoyaltyId === VOID ? null : custLoyaltyId;
    programUUID = programUUID === VOID ? null : programUUID;
    tierUUID = tierUUID === VOID ? null : tierUUID;
    rewardUuid = rewardUuid === VOID ? null : rewardUuid;
    customerMembership = customerMembership === VOID ? null : customerMembership;
    this.v1s_1 = name;
    this.w1s_1 = custLastName;
    this.x1s_1 = mobile;
    this.y1s_1 = emailId;
    this.z1s_1 = custAddress;
    this.a1t_1 = custTaxID;
    this.b1t_1 = custZipCode;
    this.c1t_1 = landMark;
    this.d1t_1 = cusCity;
    this.e1t_1 = cusCountry;
    this.f1t_1 = custState;
    this.g1t_1 = custDOB;
    this.h1t_1 = custDOA;
    this.i1t_1 = custLoyaltyPoints;
    this.j1t_1 = extras;
    this.k1t_1 = pointsAwarded;
    this.l1t_1 = loyaltyType;
    this.m1t_1 = custLoyaltyId;
    this.n1t_1 = programUUID;
    this.o1t_1 = tierUUID;
    this.p1t_1 = rewardUuid;
    this.q1t_1 = customerMembership;
  }
  toString() {
    return 'CustomerDetails(name=' + this.v1s_1 + ', custLastName=' + this.w1s_1 + ', mobile=' + this.x1s_1 + ', emailId=' + this.y1s_1 + ', custAddress=' + this.z1s_1 + ', custTaxID=' + this.a1t_1 + ', custZipCode=' + this.b1t_1 + ', landMark=' + this.c1t_1 + ', cusCity=' + this.d1t_1 + ', cusCountry=' + this.e1t_1 + ', custState=' + this.f1t_1 + ', custDOB=' + this.g1t_1 + ', custDOA=' + this.h1t_1 + ', custLoyaltyPoints=' + this.i1t_1 + ', extras=' + this.j1t_1 + ', pointsAwarded=' + this.k1t_1 + ', loyaltyType=' + this.l1t_1 + ', custLoyaltyId=' + this.m1t_1 + ', programUUID=' + this.n1t_1 + ', tierUUID=' + this.o1t_1 + ', rewardUuid=' + this.p1t_1 + ', customerMembership=' + toString_0(this.q1t_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.v1s_1);
    result = imul(result, 31) + (this.w1s_1 == null ? 0 : getStringHashCode(this.w1s_1)) | 0;
    result = imul(result, 31) + (this.x1s_1 == null ? 0 : getStringHashCode(this.x1s_1)) | 0;
    result = imul(result, 31) + (this.y1s_1 == null ? 0 : getStringHashCode(this.y1s_1)) | 0;
    result = imul(result, 31) + (this.z1s_1 == null ? 0 : getStringHashCode(this.z1s_1)) | 0;
    result = imul(result, 31) + (this.a1t_1 == null ? 0 : getStringHashCode(this.a1t_1)) | 0;
    result = imul(result, 31) + (this.b1t_1 == null ? 0 : getStringHashCode(this.b1t_1)) | 0;
    result = imul(result, 31) + (this.c1t_1 == null ? 0 : getStringHashCode(this.c1t_1)) | 0;
    result = imul(result, 31) + (this.d1t_1 == null ? 0 : getStringHashCode(this.d1t_1)) | 0;
    result = imul(result, 31) + (this.e1t_1 == null ? 0 : getStringHashCode(this.e1t_1)) | 0;
    result = imul(result, 31) + (this.f1t_1 == null ? 0 : getStringHashCode(this.f1t_1)) | 0;
    result = imul(result, 31) + (this.g1t_1 == null ? 0 : getStringHashCode(this.g1t_1)) | 0;
    result = imul(result, 31) + (this.h1t_1 == null ? 0 : getStringHashCode(this.h1t_1)) | 0;
    result = imul(result, 31) + (this.i1t_1 == null ? 0 : this.i1t_1) | 0;
    result = imul(result, 31) + (this.j1t_1 == null ? 0 : getStringHashCode(this.j1t_1)) | 0;
    result = imul(result, 31) + (this.k1t_1 == null ? 0 : getStringHashCode(this.k1t_1)) | 0;
    result = imul(result, 31) + (this.l1t_1 == null ? 0 : getStringHashCode(this.l1t_1)) | 0;
    result = imul(result, 31) + (this.m1t_1 == null ? 0 : getStringHashCode(this.m1t_1)) | 0;
    result = imul(result, 31) + (this.n1t_1 == null ? 0 : getStringHashCode(this.n1t_1)) | 0;
    result = imul(result, 31) + (this.o1t_1 == null ? 0 : getStringHashCode(this.o1t_1)) | 0;
    result = imul(result, 31) + (this.p1t_1 == null ? 0 : getStringHashCode(this.p1t_1)) | 0;
    result = imul(result, 31) + (this.q1t_1 == null ? 0 : this.q1t_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomerDetails))
      return false;
    var tmp0_other_with_cast = other instanceof CustomerDetails ? other : THROW_CCE();
    if (!(this.v1s_1 === tmp0_other_with_cast.v1s_1))
      return false;
    if (!(this.w1s_1 == tmp0_other_with_cast.w1s_1))
      return false;
    if (!(this.x1s_1 == tmp0_other_with_cast.x1s_1))
      return false;
    if (!(this.y1s_1 == tmp0_other_with_cast.y1s_1))
      return false;
    if (!(this.z1s_1 == tmp0_other_with_cast.z1s_1))
      return false;
    if (!(this.a1t_1 == tmp0_other_with_cast.a1t_1))
      return false;
    if (!(this.b1t_1 == tmp0_other_with_cast.b1t_1))
      return false;
    if (!(this.c1t_1 == tmp0_other_with_cast.c1t_1))
      return false;
    if (!(this.d1t_1 == tmp0_other_with_cast.d1t_1))
      return false;
    if (!(this.e1t_1 == tmp0_other_with_cast.e1t_1))
      return false;
    if (!(this.f1t_1 == tmp0_other_with_cast.f1t_1))
      return false;
    if (!(this.g1t_1 == tmp0_other_with_cast.g1t_1))
      return false;
    if (!(this.h1t_1 == tmp0_other_with_cast.h1t_1))
      return false;
    if (!(this.i1t_1 == tmp0_other_with_cast.i1t_1))
      return false;
    if (!(this.j1t_1 == tmp0_other_with_cast.j1t_1))
      return false;
    if (!(this.k1t_1 == tmp0_other_with_cast.k1t_1))
      return false;
    if (!(this.l1t_1 == tmp0_other_with_cast.l1t_1))
      return false;
    if (!(this.m1t_1 == tmp0_other_with_cast.m1t_1))
      return false;
    if (!(this.n1t_1 == tmp0_other_with_cast.n1t_1))
      return false;
    if (!(this.o1t_1 == tmp0_other_with_cast.o1t_1))
      return false;
    if (!(this.p1t_1 == tmp0_other_with_cast.p1t_1))
      return false;
    if (!equals(this.q1t_1, tmp0_other_with_cast.q1t_1))
      return false;
    return true;
  }
  static r1t(seen0, name, custLastName, mobile, emailId, custAddress, custTaxID, custZipCode, landMark, cusCity, cusCountry, custState, custDOB, custDOA, custLoyaltyPoints, extras, pointsAwarded, loyaltyType, custLoyaltyId, programUUID, tierUUID, rewardUuid, customerMembership, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().t1s_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.v1s_1 = 'Guest';
    else
      $this.v1s_1 = name;
    if (0 === (seen0 & 2))
      $this.w1s_1 = null;
    else
      $this.w1s_1 = custLastName;
    if (0 === (seen0 & 4))
      $this.x1s_1 = null;
    else
      $this.x1s_1 = mobile;
    if (0 === (seen0 & 8))
      $this.y1s_1 = null;
    else
      $this.y1s_1 = emailId;
    if (0 === (seen0 & 16))
      $this.z1s_1 = null;
    else
      $this.z1s_1 = custAddress;
    if (0 === (seen0 & 32))
      $this.a1t_1 = null;
    else
      $this.a1t_1 = custTaxID;
    if (0 === (seen0 & 64))
      $this.b1t_1 = null;
    else
      $this.b1t_1 = custZipCode;
    if (0 === (seen0 & 128))
      $this.c1t_1 = null;
    else
      $this.c1t_1 = landMark;
    if (0 === (seen0 & 256))
      $this.d1t_1 = null;
    else
      $this.d1t_1 = cusCity;
    if (0 === (seen0 & 512))
      $this.e1t_1 = null;
    else
      $this.e1t_1 = cusCountry;
    if (0 === (seen0 & 1024))
      $this.f1t_1 = null;
    else
      $this.f1t_1 = custState;
    if (0 === (seen0 & 2048))
      $this.g1t_1 = null;
    else
      $this.g1t_1 = custDOB;
    if (0 === (seen0 & 4096))
      $this.h1t_1 = null;
    else
      $this.h1t_1 = custDOA;
    if (0 === (seen0 & 8192))
      $this.i1t_1 = null;
    else
      $this.i1t_1 = custLoyaltyPoints;
    if (0 === (seen0 & 16384))
      $this.j1t_1 = null;
    else
      $this.j1t_1 = extras;
    if (0 === (seen0 & 32768))
      $this.k1t_1 = null;
    else
      $this.k1t_1 = pointsAwarded;
    if (0 === (seen0 & 65536))
      $this.l1t_1 = null;
    else
      $this.l1t_1 = loyaltyType;
    if (0 === (seen0 & 131072))
      $this.m1t_1 = null;
    else
      $this.m1t_1 = custLoyaltyId;
    if (0 === (seen0 & 262144))
      $this.n1t_1 = null;
    else
      $this.n1t_1 = programUUID;
    if (0 === (seen0 & 524288))
      $this.o1t_1 = null;
    else
      $this.o1t_1 = tierUUID;
    if (0 === (seen0 & 1048576))
      $this.p1t_1 = null;
    else
      $this.p1t_1 = rewardUuid;
    if (0 === (seen0 & 2097152))
      $this.q1t_1 = null;
    else
      $this.q1t_1 = customerMembership;
    return $this;
  }
}
class Companion_6 {
  constructor() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, MemberShipPlan$Companion$$childSerializers$_anonymous__f5ycq3);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, MemberShipPlan$Companion$$childSerializers$_anonymous__f5ycq3_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s1t_1 = [null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, tmp_3, null, lazy(tmp_4, MemberShipPlan$Companion$$childSerializers$_anonymous__f5ycq3_1)];
  }
}
class $serializer_6 {
  constructor() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.MemberShipPlan', this, 16);
    tmp0_serialDesc.aw('membership_id', true);
    tmp0_serialDesc.aw('created_at', true);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('loyality_points', true);
    tmp0_serialDesc.aw('membership_name', true);
    tmp0_serialDesc.aw('offer_details', true);
    tmp0_serialDesc.aw('price', true);
    tmp0_serialDesc.aw('status', true);
    tmp0_serialDesc.aw('store_id', true);
    tmp0_serialDesc.aw('updated_at', true);
    tmp0_serialDesc.aw('validity', true);
    tmp0_serialDesc.aw('cust_mobile', true);
    tmp0_serialDesc.aw('end_date', true);
    tmp0_serialDesc.aw('redeemtion_details', true);
    tmp0_serialDesc.aw('start_date', true);
    tmp0_serialDesc.aw('tax', true);
    this.t1t_1 = tmp0_serialDesc;
  }
  u1t(encoder, value) {
    var tmp0_desc = this.t1t_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().s1t_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.v1t_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.v1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.w1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.w1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.x1t_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.x1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.y1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, IntSerializer_getInstance(), value.y1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.z1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.z1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.a1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, tmp2_cached[5].g2(), value.a1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.b1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, DoubleSerializer_getInstance(), value.b1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.c1u_1 === true)) {
      tmp1_output.lq(tmp0_desc, 7, BooleanSerializer_getInstance(), value.c1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.d1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.d1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.e1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.e1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.f1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, IntSerializer_getInstance(), value.f1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.g1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.g1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.h1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.h1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.i1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, tmp2_cached[13].g2(), value.i1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.j1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 14, StringSerializer_getInstance(), value.j1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.k1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 15, tmp2_cached[15].g2(), value.k1u_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.u1t(encoder, value instanceof MemberShipPlan ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.t1t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp21_input = decoder.so(tmp0_desc);
    var tmp22_cached = Companion_getInstance_6().s1t_1;
    if (tmp21_input.ip()) {
      tmp4_local0 = tmp21_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp21_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp21_input.cp(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp21_input.gp(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp21_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp21_input.gp(tmp0_desc, 5, tmp22_cached[5].g2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp21_input.gp(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp21_input.gp(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp21_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp21_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp21_input.gp(tmp0_desc, 10, IntSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp21_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp21_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp21_input.gp(tmp0_desc, 13, tmp22_cached[13].g2(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp21_input.gp(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp21_input.gp(tmp0_desc, 15, tmp22_cached[15].g2(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp21_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp21_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp21_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp21_input.cp(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp21_input.gp(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp21_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp21_input.gp(tmp0_desc, 5, tmp22_cached[5].g2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp21_input.gp(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp21_input.gp(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp21_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp21_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp21_input.gp(tmp0_desc, 10, IntSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp21_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp21_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp21_input.gp(tmp0_desc, 13, tmp22_cached[13].g2(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp21_input.gp(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp21_input.gp(tmp0_desc, 15, tmp22_cached[15].g2(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp21_input.to(tmp0_desc);
    return MemberShipPlan.m1u(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  al() {
    return this.t1t_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_6().s1t_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[5].g2()), get_nullable(DoubleSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[13].g2()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[15].g2())];
  }
}
class MemberShipPlan {
  constructor(membershipId, createdAt, id, loyaltyPoints, membershipName, offerDetails, price, status, storeId, updatedAt, validity, custMobile, endDate, redemptionDetails, startDate, tax, isSelected) {
    Companion_getInstance_6();
    membershipId = membershipId === VOID ? '' : membershipId;
    createdAt = createdAt === VOID ? null : createdAt;
    id = id === VOID ? '' : id;
    loyaltyPoints = loyaltyPoints === VOID ? null : loyaltyPoints;
    membershipName = membershipName === VOID ? null : membershipName;
    offerDetails = offerDetails === VOID ? null : offerDetails;
    price = price === VOID ? null : price;
    status = status === VOID ? true : status;
    storeId = storeId === VOID ? null : storeId;
    updatedAt = updatedAt === VOID ? null : updatedAt;
    validity = validity === VOID ? null : validity;
    custMobile = custMobile === VOID ? null : custMobile;
    endDate = endDate === VOID ? null : endDate;
    redemptionDetails = redemptionDetails === VOID ? null : redemptionDetails;
    startDate = startDate === VOID ? null : startDate;
    tax = tax === VOID ? null : tax;
    isSelected = isSelected === VOID ? false : isSelected;
    this.v1t_1 = membershipId;
    this.w1t_1 = createdAt;
    this.x1t_1 = id;
    this.y1t_1 = loyaltyPoints;
    this.z1t_1 = membershipName;
    this.a1u_1 = offerDetails;
    this.b1u_1 = price;
    this.c1u_1 = status;
    this.d1u_1 = storeId;
    this.e1u_1 = updatedAt;
    this.f1u_1 = validity;
    this.g1u_1 = custMobile;
    this.h1u_1 = endDate;
    this.i1u_1 = redemptionDetails;
    this.j1u_1 = startDate;
    this.k1u_1 = tax;
    this.l1u_1 = isSelected;
  }
  toString() {
    return 'MemberShipPlan(membershipId=' + this.v1t_1 + ', createdAt=' + this.w1t_1 + ', id=' + this.x1t_1 + ', loyaltyPoints=' + this.y1t_1 + ', membershipName=' + this.z1t_1 + ', offerDetails=' + toString_0(this.a1u_1) + ', price=' + this.b1u_1 + ', status=' + this.c1u_1 + ', storeId=' + this.d1u_1 + ', updatedAt=' + this.e1u_1 + ', validity=' + this.f1u_1 + ', custMobile=' + this.g1u_1 + ', endDate=' + this.h1u_1 + ', redemptionDetails=' + toString_0(this.i1u_1) + ', startDate=' + this.j1u_1 + ', tax=' + toString_0(this.k1u_1) + ', isSelected=' + this.l1u_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.v1t_1);
    result = imul(result, 31) + (this.w1t_1 == null ? 0 : getStringHashCode(this.w1t_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.x1t_1) | 0;
    result = imul(result, 31) + (this.y1t_1 == null ? 0 : this.y1t_1) | 0;
    result = imul(result, 31) + (this.z1t_1 == null ? 0 : getStringHashCode(this.z1t_1)) | 0;
    result = imul(result, 31) + (this.a1u_1 == null ? 0 : hashCode(this.a1u_1)) | 0;
    result = imul(result, 31) + (this.b1u_1 == null ? 0 : getNumberHashCode(this.b1u_1)) | 0;
    result = imul(result, 31) + (this.c1u_1 == null ? 0 : getBooleanHashCode(this.c1u_1)) | 0;
    result = imul(result, 31) + (this.d1u_1 == null ? 0 : getStringHashCode(this.d1u_1)) | 0;
    result = imul(result, 31) + (this.e1u_1 == null ? 0 : getStringHashCode(this.e1u_1)) | 0;
    result = imul(result, 31) + (this.f1u_1 == null ? 0 : this.f1u_1) | 0;
    result = imul(result, 31) + (this.g1u_1 == null ? 0 : getStringHashCode(this.g1u_1)) | 0;
    result = imul(result, 31) + (this.h1u_1 == null ? 0 : getStringHashCode(this.h1u_1)) | 0;
    result = imul(result, 31) + (this.i1u_1 == null ? 0 : hashCode(this.i1u_1)) | 0;
    result = imul(result, 31) + (this.j1u_1 == null ? 0 : getStringHashCode(this.j1u_1)) | 0;
    result = imul(result, 31) + (this.k1u_1 == null ? 0 : hashCode(this.k1u_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.l1u_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof MemberShipPlan))
      return false;
    var tmp0_other_with_cast = other instanceof MemberShipPlan ? other : THROW_CCE();
    if (!(this.v1t_1 === tmp0_other_with_cast.v1t_1))
      return false;
    if (!(this.w1t_1 == tmp0_other_with_cast.w1t_1))
      return false;
    if (!(this.x1t_1 === tmp0_other_with_cast.x1t_1))
      return false;
    if (!(this.y1t_1 == tmp0_other_with_cast.y1t_1))
      return false;
    if (!(this.z1t_1 == tmp0_other_with_cast.z1t_1))
      return false;
    if (!equals(this.a1u_1, tmp0_other_with_cast.a1u_1))
      return false;
    if (!equals(this.b1u_1, tmp0_other_with_cast.b1u_1))
      return false;
    if (!(this.c1u_1 == tmp0_other_with_cast.c1u_1))
      return false;
    if (!(this.d1u_1 == tmp0_other_with_cast.d1u_1))
      return false;
    if (!(this.e1u_1 == tmp0_other_with_cast.e1u_1))
      return false;
    if (!(this.f1u_1 == tmp0_other_with_cast.f1u_1))
      return false;
    if (!(this.g1u_1 == tmp0_other_with_cast.g1u_1))
      return false;
    if (!(this.h1u_1 == tmp0_other_with_cast.h1u_1))
      return false;
    if (!equals(this.i1u_1, tmp0_other_with_cast.i1u_1))
      return false;
    if (!(this.j1u_1 == tmp0_other_with_cast.j1u_1))
      return false;
    if (!equals(this.k1u_1, tmp0_other_with_cast.k1u_1))
      return false;
    if (!(this.l1u_1 === tmp0_other_with_cast.l1u_1))
      return false;
    return true;
  }
  static m1u(seen0, membershipId, createdAt, id, loyaltyPoints, membershipName, offerDetails, price, status, storeId, updatedAt, validity, custMobile, endDate, redemptionDetails, startDate, tax, serializationConstructorMarker) {
    Companion_getInstance_6();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().t1t_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.v1t_1 = '';
    else
      $this.v1t_1 = membershipId;
    if (0 === (seen0 & 2))
      $this.w1t_1 = null;
    else
      $this.w1t_1 = createdAt;
    if (0 === (seen0 & 4))
      $this.x1t_1 = '';
    else
      $this.x1t_1 = id;
    if (0 === (seen0 & 8))
      $this.y1t_1 = null;
    else
      $this.y1t_1 = loyaltyPoints;
    if (0 === (seen0 & 16))
      $this.z1t_1 = null;
    else
      $this.z1t_1 = membershipName;
    if (0 === (seen0 & 32))
      $this.a1u_1 = null;
    else
      $this.a1u_1 = offerDetails;
    if (0 === (seen0 & 64))
      $this.b1u_1 = null;
    else
      $this.b1u_1 = price;
    if (0 === (seen0 & 128))
      $this.c1u_1 = true;
    else
      $this.c1u_1 = status;
    if (0 === (seen0 & 256))
      $this.d1u_1 = null;
    else
      $this.d1u_1 = storeId;
    if (0 === (seen0 & 512))
      $this.e1u_1 = null;
    else
      $this.e1u_1 = updatedAt;
    if (0 === (seen0 & 1024))
      $this.f1u_1 = null;
    else
      $this.f1u_1 = validity;
    if (0 === (seen0 & 2048))
      $this.g1u_1 = null;
    else
      $this.g1u_1 = custMobile;
    if (0 === (seen0 & 4096))
      $this.h1u_1 = null;
    else
      $this.h1u_1 = endDate;
    if (0 === (seen0 & 8192))
      $this.i1u_1 = null;
    else
      $this.i1u_1 = redemptionDetails;
    if (0 === (seen0 & 16384))
      $this.j1u_1 = null;
    else
      $this.j1u_1 = startDate;
    if (0 === (seen0 & 32768))
      $this.k1u_1 = null;
    else
      $this.k1u_1 = tax;
    $this.l1u_1 = false;
    return $this;
  }
}
class Companion_7 {}
class $serializer_7 {
  constructor() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OfferDetail', this, 2);
    tmp0_serialDesc.aw('max_consuption', true);
    tmp0_serialDesc.aw('offer_id', true);
    this.n1u_1 = tmp0_serialDesc;
  }
  o1u(encoder, value) {
    var tmp0_desc = this.n1u_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.p1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, IntSerializer_getInstance(), value.p1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.q1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.q1u_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.o1u(encoder, value instanceof OfferDetail ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.n1u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.so(tmp0_desc);
    if (tmp6_input.ip()) {
      tmp4_local0 = tmp6_input.gp(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.gp(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp6_input.to(tmp0_desc);
    return OfferDetail.r1u(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  al() {
    return this.n1u_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class OfferDetail {
  constructor(maxConsumption, offerId) {
    maxConsumption = maxConsumption === VOID ? null : maxConsumption;
    offerId = offerId === VOID ? null : offerId;
    this.p1u_1 = maxConsumption;
    this.q1u_1 = offerId;
  }
  toString() {
    return 'OfferDetail(maxConsumption=' + this.p1u_1 + ', offerId=' + this.q1u_1 + ')';
  }
  hashCode() {
    var result = this.p1u_1 == null ? 0 : this.p1u_1;
    result = imul(result, 31) + (this.q1u_1 == null ? 0 : getStringHashCode(this.q1u_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OfferDetail))
      return false;
    var tmp0_other_with_cast = other instanceof OfferDetail ? other : THROW_CCE();
    if (!(this.p1u_1 == tmp0_other_with_cast.p1u_1))
      return false;
    if (!(this.q1u_1 == tmp0_other_with_cast.q1u_1))
      return false;
    return true;
  }
  static r1u(seen0, maxConsumption, offerId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().n1u_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.p1u_1 = null;
    else
      $this.p1u_1 = maxConsumption;
    if (0 === (seen0 & 2))
      $this.q1u_1 = null;
    else
      $this.q1u_1 = offerId;
    return $this;
  }
}
class Companion_8 {}
class $serializer_8 {
  constructor() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.RedemptionDetails', this, 3);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('offer_id', true);
    tmp0_serialDesc.aw('consumption_count', true);
    this.s1u_1 = tmp0_serialDesc;
  }
  t1u(encoder, value) {
    var tmp0_desc = this.s1u_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.u1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.u1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.v1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.v1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.w1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, IntSerializer_getInstance(), value.w1u_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.t1u(encoder, value instanceof RedemptionDetails ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.s1u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.so(tmp0_desc);
    if (tmp7_input.ip()) {
      tmp4_local0 = tmp7_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.gp(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.gp(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp7_input.to(tmp0_desc);
    return RedemptionDetails.x1u(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  al() {
    return this.s1u_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class RedemptionDetails {
  constructor(id, offerId, consumptionCount) {
    id = id === VOID ? null : id;
    offerId = offerId === VOID ? null : offerId;
    consumptionCount = consumptionCount === VOID ? null : consumptionCount;
    this.u1u_1 = id;
    this.v1u_1 = offerId;
    this.w1u_1 = consumptionCount;
  }
  toString() {
    return 'RedemptionDetails(id=' + this.u1u_1 + ', offerId=' + this.v1u_1 + ', consumptionCount=' + this.w1u_1 + ')';
  }
  hashCode() {
    var result = this.u1u_1 == null ? 0 : getStringHashCode(this.u1u_1);
    result = imul(result, 31) + (this.v1u_1 == null ? 0 : getStringHashCode(this.v1u_1)) | 0;
    result = imul(result, 31) + (this.w1u_1 == null ? 0 : this.w1u_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RedemptionDetails))
      return false;
    var tmp0_other_with_cast = other instanceof RedemptionDetails ? other : THROW_CCE();
    if (!(this.u1u_1 == tmp0_other_with_cast.u1u_1))
      return false;
    if (!(this.v1u_1 == tmp0_other_with_cast.v1u_1))
      return false;
    if (!(this.w1u_1 == tmp0_other_with_cast.w1u_1))
      return false;
    return true;
  }
  static x1u(seen0, id, offerId, consumptionCount, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().s1u_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.u1u_1 = null;
    else
      $this.u1u_1 = id;
    if (0 === (seen0 & 2))
      $this.v1u_1 = null;
    else
      $this.v1u_1 = offerId;
    if (0 === (seen0 & 4))
      $this.w1u_1 = null;
    else
      $this.w1u_1 = consumptionCount;
    return $this;
  }
}
class Companion_9 {
  constructor() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y1u_1 = [null, null, lazy(tmp_0, OrderDiscount$Companion$$childSerializers$_anonymous__1gq891), null, null];
  }
}
class $serializer_9 {
  constructor() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderDiscount', this, 5);
    tmp0_serialDesc.aw('entity', true);
    tmp0_serialDesc.aw('is_source_item', true);
    tmp0_serialDesc.aw('mapped_offer_items', true);
    tmp0_serialDesc.aw('offer_id', false);
    tmp0_serialDesc.aw('offer_header', true);
    this.z1u_1 = tmp0_serialDesc;
  }
  a1v(encoder, value) {
    var tmp0_desc = this.z1u_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().y1u_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.b1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.b1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.c1v_1 === true)) {
      tmp1_output.lq(tmp0_desc, 1, BooleanSerializer_getInstance(), value.c1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.d1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, tmp2_cached[2].g2(), value.d1v_1);
    }
    tmp1_output.hq(tmp0_desc, 3, value.e1v_1);
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.f1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, $serializer_getInstance_10(), value.f1v_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.a1v(encoder, value instanceof OrderDiscount ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.z1u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.so(tmp0_desc);
    var tmp10_cached = Companion_getInstance_9().y1u_1;
    if (tmp9_input.ip()) {
      tmp4_local0 = tmp9_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.gp(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.gp(tmp0_desc, 2, tmp10_cached[2].g2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.cp(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.gp(tmp0_desc, 4, $serializer_getInstance_10(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.gp(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.gp(tmp0_desc, 2, tmp10_cached[2].g2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.cp(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.gp(tmp0_desc, 4, $serializer_getInstance_10(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp9_input.to(tmp0_desc);
    return OrderDiscount.g1v(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  al() {
    return this.z1u_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_9().y1u_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[2].g2()), StringSerializer_getInstance(), get_nullable($serializer_getInstance_10())];
  }
}
class OrderDiscount {
  toString() {
    return 'OrderDiscount(entity=' + this.b1v_1 + ', isSourceItem=' + this.c1v_1 + ', mappedOfferItems=' + toString_0(this.d1v_1) + ', offerId=' + this.e1v_1 + ', offerHeader=' + toString_0(this.f1v_1) + ')';
  }
  hashCode() {
    var result = this.b1v_1 == null ? 0 : getStringHashCode(this.b1v_1);
    result = imul(result, 31) + (this.c1v_1 == null ? 0 : getBooleanHashCode(this.c1v_1)) | 0;
    result = imul(result, 31) + (this.d1v_1 == null ? 0 : hashCode(this.d1v_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.e1v_1) | 0;
    result = imul(result, 31) + (this.f1v_1 == null ? 0 : this.f1v_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderDiscount))
      return false;
    var tmp0_other_with_cast = other instanceof OrderDiscount ? other : THROW_CCE();
    if (!(this.b1v_1 == tmp0_other_with_cast.b1v_1))
      return false;
    if (!(this.c1v_1 == tmp0_other_with_cast.c1v_1))
      return false;
    if (!equals(this.d1v_1, tmp0_other_with_cast.d1v_1))
      return false;
    if (!(this.e1v_1 === tmp0_other_with_cast.e1v_1))
      return false;
    if (!equals(this.f1v_1, tmp0_other_with_cast.f1v_1))
      return false;
    return true;
  }
  static g1v(seen0, entity, isSourceItem, mappedOfferItems, offerId, offerHeader, serializationConstructorMarker) {
    Companion_getInstance_9();
    if (!(8 === (8 & seen0))) {
      throwMissingFieldException(seen0, 8, $serializer_getInstance_9().z1u_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.b1v_1 = null;
    else
      $this.b1v_1 = entity;
    if (0 === (seen0 & 2))
      $this.c1v_1 = true;
    else
      $this.c1v_1 = isSourceItem;
    if (0 === (seen0 & 4))
      $this.d1v_1 = null;
    else
      $this.d1v_1 = mappedOfferItems;
    $this.e1v_1 = offerId;
    if (0 === (seen0 & 16))
      $this.f1v_1 = null;
    else
      $this.f1v_1 = offerHeader;
    return $this;
  }
}
class Companion_10 {}
class $serializer_10 {
  constructor() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderOfferHeader', this, 5);
    tmp0_serialDesc.aw('deal_type', true);
    tmp0_serialDesc.aw('description', true);
    tmp0_serialDesc.aw('offer_header_id', true);
    tmp0_serialDesc.aw('terms_conditions', true);
    tmp0_serialDesc.aw('coupon_code', true);
    this.h1v_1 = tmp0_serialDesc;
  }
  i1v(encoder, value) {
    var tmp0_desc = this.h1v_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.j1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.j1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.k1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.k1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.l1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.l1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.m1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.m1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.n1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.n1v_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.i1v(encoder, value instanceof OrderOfferHeader ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.h1v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.so(tmp0_desc);
    if (tmp9_input.ip()) {
      tmp4_local0 = tmp9_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp9_input.to(tmp0_desc);
    return OrderOfferHeader.o1v(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  al() {
    return this.h1v_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class OrderOfferHeader {
  constructor(dealType, description, offerHeaderId, termsConditions, couponCode) {
    dealType = dealType === VOID ? null : dealType;
    description = description === VOID ? null : description;
    offerHeaderId = offerHeaderId === VOID ? null : offerHeaderId;
    termsConditions = termsConditions === VOID ? null : termsConditions;
    couponCode = couponCode === VOID ? null : couponCode;
    this.j1v_1 = dealType;
    this.k1v_1 = description;
    this.l1v_1 = offerHeaderId;
    this.m1v_1 = termsConditions;
    this.n1v_1 = couponCode;
  }
  toString() {
    return 'OrderOfferHeader(dealType=' + this.j1v_1 + ', description=' + this.k1v_1 + ', offerHeaderId=' + this.l1v_1 + ', termsConditions=' + this.m1v_1 + ', couponCode=' + this.n1v_1 + ')';
  }
  hashCode() {
    var result = this.j1v_1 == null ? 0 : getStringHashCode(this.j1v_1);
    result = imul(result, 31) + (this.k1v_1 == null ? 0 : getStringHashCode(this.k1v_1)) | 0;
    result = imul(result, 31) + (this.l1v_1 == null ? 0 : getStringHashCode(this.l1v_1)) | 0;
    result = imul(result, 31) + (this.m1v_1 == null ? 0 : getStringHashCode(this.m1v_1)) | 0;
    result = imul(result, 31) + (this.n1v_1 == null ? 0 : getStringHashCode(this.n1v_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderOfferHeader))
      return false;
    var tmp0_other_with_cast = other instanceof OrderOfferHeader ? other : THROW_CCE();
    if (!(this.j1v_1 == tmp0_other_with_cast.j1v_1))
      return false;
    if (!(this.k1v_1 == tmp0_other_with_cast.k1v_1))
      return false;
    if (!(this.l1v_1 == tmp0_other_with_cast.l1v_1))
      return false;
    if (!(this.m1v_1 == tmp0_other_with_cast.m1v_1))
      return false;
    if (!(this.n1v_1 == tmp0_other_with_cast.n1v_1))
      return false;
    return true;
  }
  static o1v(seen0, dealType, description, offerHeaderId, termsConditions, couponCode, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().h1v_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.j1v_1 = null;
    else
      $this.j1v_1 = dealType;
    if (0 === (seen0 & 2))
      $this.k1v_1 = null;
    else
      $this.k1v_1 = description;
    if (0 === (seen0 & 4))
      $this.l1v_1 = null;
    else
      $this.l1v_1 = offerHeaderId;
    if (0 === (seen0 & 8))
      $this.m1v_1 = null;
    else
      $this.m1v_1 = termsConditions;
    if (0 === (seen0 & 16))
      $this.n1v_1 = null;
    else
      $this.n1v_1 = couponCode;
    return $this;
  }
}
class Companion_11 {}
class $serializer_11 {
  constructor() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.ChargeTaxId', this, 7);
    tmp0_serialDesc.aw('action', true);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('status', true);
    tmp0_serialDesc.aw('tax_dsc', true);
    tmp0_serialDesc.aw('tax_pct', true);
    tmp0_serialDesc.aw('tax_type', true);
    tmp0_serialDesc.aw('tax_amount', true);
    this.p1v_1 = tmp0_serialDesc;
  }
  q1v(encoder, value) {
    var tmp0_desc = this.p1v_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.f1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.f1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.g1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.g1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.h1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, BooleanSerializer_getInstance(), value.h1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.i1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.i1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.j1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, DoubleSerializer_getInstance(), value.j1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.k1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.k1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.l1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, DoubleSerializer_getInstance(), value.l1p_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.q1v(encoder, value instanceof ChargeTaxId ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.p1v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.so(tmp0_desc);
    if (tmp11_input.ip()) {
      tmp4_local0 = tmp11_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.gp(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.gp(tmp0_desc, 4, DoubleSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.gp(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.gp(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.gp(tmp0_desc, 4, DoubleSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.gp(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp11_input.to(tmp0_desc);
    return ChargeTaxId.r1v(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  al() {
    return this.p1v_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance())];
  }
}
class ChargeTaxId {
  constructor(action, id, status, taxDsc, taxPct, taxType, taxAmount) {
    action = action === VOID ? null : action;
    id = id === VOID ? null : id;
    status = status === VOID ? null : status;
    taxDsc = taxDsc === VOID ? null : taxDsc;
    taxPct = taxPct === VOID ? null : taxPct;
    taxType = taxType === VOID ? null : taxType;
    taxAmount = taxAmount === VOID ? null : taxAmount;
    this.f1p_1 = action;
    this.g1p_1 = id;
    this.h1p_1 = status;
    this.i1p_1 = taxDsc;
    this.j1p_1 = taxPct;
    this.k1p_1 = taxType;
    this.l1p_1 = taxAmount;
  }
  toString() {
    return 'ChargeTaxId(action=' + this.f1p_1 + ', id=' + this.g1p_1 + ', status=' + this.h1p_1 + ', taxDsc=' + this.i1p_1 + ', taxPct=' + this.j1p_1 + ', taxType=' + this.k1p_1 + ', taxAmount=' + this.l1p_1 + ')';
  }
  hashCode() {
    var result = this.f1p_1 == null ? 0 : getStringHashCode(this.f1p_1);
    result = imul(result, 31) + (this.g1p_1 == null ? 0 : getStringHashCode(this.g1p_1)) | 0;
    result = imul(result, 31) + (this.h1p_1 == null ? 0 : getBooleanHashCode(this.h1p_1)) | 0;
    result = imul(result, 31) + (this.i1p_1 == null ? 0 : getStringHashCode(this.i1p_1)) | 0;
    result = imul(result, 31) + (this.j1p_1 == null ? 0 : getNumberHashCode(this.j1p_1)) | 0;
    result = imul(result, 31) + (this.k1p_1 == null ? 0 : getStringHashCode(this.k1p_1)) | 0;
    result = imul(result, 31) + (this.l1p_1 == null ? 0 : getNumberHashCode(this.l1p_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ChargeTaxId))
      return false;
    var tmp0_other_with_cast = other instanceof ChargeTaxId ? other : THROW_CCE();
    if (!(this.f1p_1 == tmp0_other_with_cast.f1p_1))
      return false;
    if (!(this.g1p_1 == tmp0_other_with_cast.g1p_1))
      return false;
    if (!(this.h1p_1 == tmp0_other_with_cast.h1p_1))
      return false;
    if (!(this.i1p_1 == tmp0_other_with_cast.i1p_1))
      return false;
    if (!equals(this.j1p_1, tmp0_other_with_cast.j1p_1))
      return false;
    if (!(this.k1p_1 == tmp0_other_with_cast.k1p_1))
      return false;
    if (!equals(this.l1p_1, tmp0_other_with_cast.l1p_1))
      return false;
    return true;
  }
  static r1v(seen0, action, id, status, taxDsc, taxPct, taxType, taxAmount, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().p1v_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.f1p_1 = null;
    else
      $this.f1p_1 = action;
    if (0 === (seen0 & 2))
      $this.g1p_1 = null;
    else
      $this.g1p_1 = id;
    if (0 === (seen0 & 4))
      $this.h1p_1 = null;
    else
      $this.h1p_1 = status;
    if (0 === (seen0 & 8))
      $this.i1p_1 = null;
    else
      $this.i1p_1 = taxDsc;
    if (0 === (seen0 & 16))
      $this.j1p_1 = null;
    else
      $this.j1p_1 = taxPct;
    if (0 === (seen0 & 32))
      $this.k1p_1 = null;
    else
      $this.k1p_1 = taxType;
    if (0 === (seen0 & 64))
      $this.l1p_1 = null;
    else
      $this.l1p_1 = taxAmount;
    return $this;
  }
}
class Companion_12 {
  constructor() {
    Companion_instance_12 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s1v_1 = [null, null, lazy(tmp_0, ChargesData$Companion$$childSerializers$_anonymous__htu7tr), null, null, null, null, null, null, null, null, null, null, null, null, null];
  }
}
class $serializer_12 {
  constructor() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.ChargesData', this, 16);
    tmp0_serialDesc.aw('apply_at_level', true);
    tmp0_serialDesc.aw('charge_id', true);
    tmp0_serialDesc.aw('charge_tax_ids', true);
    tmp0_serialDesc.aw('percentage', true);
    tmp0_serialDesc.aw('offer_details', true);
    tmp0_serialDesc.aw('description', true);
    tmp0_serialDesc.aw('order_level_charges', true);
    tmp0_serialDesc.aw('order_level_charges_tax', true);
    tmp0_serialDesc.aw('store_id', true);
    tmp0_serialDesc.aw('title', true);
    tmp0_serialDesc.aw('total_order_level_charges', true);
    tmp0_serialDesc.aw('types', true);
    tmp0_serialDesc.aw('value', false);
    tmp0_serialDesc.aw('value_type', true);
    tmp0_serialDesc.aw('points', true);
    tmp0_serialDesc.aw('min_order_value', true);
    this.t1v_1 = tmp0_serialDesc;
  }
  u1v(encoder, value) {
    var tmp0_desc = this.t1v_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().s1v_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.z1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.z1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.a1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.a1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.b1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, tmp2_cached[2].g2(), value.b1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.c1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, DoubleSerializer_getInstance(), value.c1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.d1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, $serializer_getInstance_9(), value.d1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.e1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.e1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.f1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, DoubleSerializer_getInstance(), value.f1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.g1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, DoubleSerializer_getInstance(), value.g1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.h1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.h1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.i1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.i1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.j1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, DoubleSerializer_getInstance(), value.j1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.k1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.k1o_1);
    }
    tmp1_output.fq(tmp0_desc, 12, value.l1o_1);
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.m1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, StringSerializer_getInstance(), value.m1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.n1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 14, IntSerializer_getInstance(), value.n1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.o1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 15, DoubleSerializer_getInstance(), value.o1o_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.u1v(encoder, value instanceof ChargesData ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.t1v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = 0.0;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_input = decoder.so(tmp0_desc);
    var tmp21_cached = Companion_getInstance_12().s1v_1;
    if (tmp20_input.ip()) {
      tmp4_local0 = tmp20_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.gp(tmp0_desc, 2, tmp21_cached[2].g2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.gp(tmp0_desc, 3, DoubleSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.gp(tmp0_desc, 4, $serializer_getInstance_9(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.gp(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.gp(tmp0_desc, 7, DoubleSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.gp(tmp0_desc, 10, DoubleSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.ap(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.gp(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.gp(tmp0_desc, 14, IntSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.gp(tmp0_desc, 15, DoubleSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.gp(tmp0_desc, 2, tmp21_cached[2].g2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.gp(tmp0_desc, 3, DoubleSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.gp(tmp0_desc, 4, $serializer_getInstance_9(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.gp(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.gp(tmp0_desc, 7, DoubleSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.gp(tmp0_desc, 10, DoubleSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.ap(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.gp(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.gp(tmp0_desc, 14, IntSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.gp(tmp0_desc, 15, DoubleSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp20_input.to(tmp0_desc);
    return ChargesData.v1v(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  al() {
    return this.t1v_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_12().s1v_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2].g2()), get_nullable(DoubleSerializer_getInstance()), get_nullable($serializer_getInstance_9()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), DoubleSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance())];
  }
}
class ChargesData {
  constructor(applyAtLevel, chargeId, chargeTaxIds, percentage, offerDetails, description, orderLevelCharges, orderLevelChargesTax, storeId, title, totalOrderLevelCharges, types, value, valueType, points, minOrderValue) {
    Companion_getInstance_12();
    applyAtLevel = applyAtLevel === VOID ? null : applyAtLevel;
    chargeId = chargeId === VOID ? null : chargeId;
    chargeTaxIds = chargeTaxIds === VOID ? null : chargeTaxIds;
    percentage = percentage === VOID ? null : percentage;
    offerDetails = offerDetails === VOID ? null : offerDetails;
    description = description === VOID ? null : description;
    orderLevelCharges = orderLevelCharges === VOID ? null : orderLevelCharges;
    orderLevelChargesTax = orderLevelChargesTax === VOID ? null : orderLevelChargesTax;
    storeId = storeId === VOID ? null : storeId;
    title = title === VOID ? null : title;
    totalOrderLevelCharges = totalOrderLevelCharges === VOID ? null : totalOrderLevelCharges;
    types = types === VOID ? null : types;
    valueType = valueType === VOID ? null : valueType;
    points = points === VOID ? null : points;
    minOrderValue = minOrderValue === VOID ? null : minOrderValue;
    this.z1n_1 = applyAtLevel;
    this.a1o_1 = chargeId;
    this.b1o_1 = chargeTaxIds;
    this.c1o_1 = percentage;
    this.d1o_1 = offerDetails;
    this.e1o_1 = description;
    this.f1o_1 = orderLevelCharges;
    this.g1o_1 = orderLevelChargesTax;
    this.h1o_1 = storeId;
    this.i1o_1 = title;
    this.j1o_1 = totalOrderLevelCharges;
    this.k1o_1 = types;
    this.l1o_1 = value;
    this.m1o_1 = valueType;
    this.n1o_1 = points;
    this.o1o_1 = minOrderValue;
  }
  toString() {
    return 'ChargesData(applyAtLevel=' + this.z1n_1 + ', chargeId=' + this.a1o_1 + ', chargeTaxIds=' + toString_0(this.b1o_1) + ', percentage=' + this.c1o_1 + ', offerDetails=' + toString_0(this.d1o_1) + ', description=' + this.e1o_1 + ', orderLevelCharges=' + this.f1o_1 + ', orderLevelChargesTax=' + this.g1o_1 + ', storeId=' + this.h1o_1 + ', title=' + this.i1o_1 + ', totalOrderLevelCharges=' + this.j1o_1 + ', types=' + this.k1o_1 + ', value=' + this.l1o_1 + ', valueType=' + this.m1o_1 + ', points=' + this.n1o_1 + ', minOrderValue=' + this.o1o_1 + ')';
  }
  hashCode() {
    var result = this.z1n_1 == null ? 0 : getStringHashCode(this.z1n_1);
    result = imul(result, 31) + (this.a1o_1 == null ? 0 : getStringHashCode(this.a1o_1)) | 0;
    result = imul(result, 31) + (this.b1o_1 == null ? 0 : hashCode(this.b1o_1)) | 0;
    result = imul(result, 31) + (this.c1o_1 == null ? 0 : getNumberHashCode(this.c1o_1)) | 0;
    result = imul(result, 31) + (this.d1o_1 == null ? 0 : this.d1o_1.hashCode()) | 0;
    result = imul(result, 31) + (this.e1o_1 == null ? 0 : getStringHashCode(this.e1o_1)) | 0;
    result = imul(result, 31) + (this.f1o_1 == null ? 0 : getNumberHashCode(this.f1o_1)) | 0;
    result = imul(result, 31) + (this.g1o_1 == null ? 0 : getNumberHashCode(this.g1o_1)) | 0;
    result = imul(result, 31) + (this.h1o_1 == null ? 0 : getStringHashCode(this.h1o_1)) | 0;
    result = imul(result, 31) + (this.i1o_1 == null ? 0 : getStringHashCode(this.i1o_1)) | 0;
    result = imul(result, 31) + (this.j1o_1 == null ? 0 : getNumberHashCode(this.j1o_1)) | 0;
    result = imul(result, 31) + (this.k1o_1 == null ? 0 : getStringHashCode(this.k1o_1)) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l1o_1) | 0;
    result = imul(result, 31) + (this.m1o_1 == null ? 0 : getStringHashCode(this.m1o_1)) | 0;
    result = imul(result, 31) + (this.n1o_1 == null ? 0 : this.n1o_1) | 0;
    result = imul(result, 31) + (this.o1o_1 == null ? 0 : getNumberHashCode(this.o1o_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ChargesData))
      return false;
    var tmp0_other_with_cast = other instanceof ChargesData ? other : THROW_CCE();
    if (!(this.z1n_1 == tmp0_other_with_cast.z1n_1))
      return false;
    if (!(this.a1o_1 == tmp0_other_with_cast.a1o_1))
      return false;
    if (!equals(this.b1o_1, tmp0_other_with_cast.b1o_1))
      return false;
    if (!equals(this.c1o_1, tmp0_other_with_cast.c1o_1))
      return false;
    if (!equals(this.d1o_1, tmp0_other_with_cast.d1o_1))
      return false;
    if (!(this.e1o_1 == tmp0_other_with_cast.e1o_1))
      return false;
    if (!equals(this.f1o_1, tmp0_other_with_cast.f1o_1))
      return false;
    if (!equals(this.g1o_1, tmp0_other_with_cast.g1o_1))
      return false;
    if (!(this.h1o_1 == tmp0_other_with_cast.h1o_1))
      return false;
    if (!(this.i1o_1 == tmp0_other_with_cast.i1o_1))
      return false;
    if (!equals(this.j1o_1, tmp0_other_with_cast.j1o_1))
      return false;
    if (!(this.k1o_1 == tmp0_other_with_cast.k1o_1))
      return false;
    if (!equals(this.l1o_1, tmp0_other_with_cast.l1o_1))
      return false;
    if (!(this.m1o_1 == tmp0_other_with_cast.m1o_1))
      return false;
    if (!(this.n1o_1 == tmp0_other_with_cast.n1o_1))
      return false;
    if (!equals(this.o1o_1, tmp0_other_with_cast.o1o_1))
      return false;
    return true;
  }
  static v1v(seen0, applyAtLevel, chargeId, chargeTaxIds, percentage, offerDetails, description, orderLevelCharges, orderLevelChargesTax, storeId, title, totalOrderLevelCharges, types, value, valueType, points, minOrderValue, serializationConstructorMarker) {
    Companion_getInstance_12();
    if (!(4096 === (4096 & seen0))) {
      throwMissingFieldException(seen0, 4096, $serializer_getInstance_12().t1v_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.z1n_1 = null;
    else
      $this.z1n_1 = applyAtLevel;
    if (0 === (seen0 & 2))
      $this.a1o_1 = null;
    else
      $this.a1o_1 = chargeId;
    if (0 === (seen0 & 4))
      $this.b1o_1 = null;
    else
      $this.b1o_1 = chargeTaxIds;
    if (0 === (seen0 & 8))
      $this.c1o_1 = null;
    else
      $this.c1o_1 = percentage;
    if (0 === (seen0 & 16))
      $this.d1o_1 = null;
    else
      $this.d1o_1 = offerDetails;
    if (0 === (seen0 & 32))
      $this.e1o_1 = null;
    else
      $this.e1o_1 = description;
    if (0 === (seen0 & 64))
      $this.f1o_1 = null;
    else
      $this.f1o_1 = orderLevelCharges;
    if (0 === (seen0 & 128))
      $this.g1o_1 = null;
    else
      $this.g1o_1 = orderLevelChargesTax;
    if (0 === (seen0 & 256))
      $this.h1o_1 = null;
    else
      $this.h1o_1 = storeId;
    if (0 === (seen0 & 512))
      $this.i1o_1 = null;
    else
      $this.i1o_1 = title;
    if (0 === (seen0 & 1024))
      $this.j1o_1 = null;
    else
      $this.j1o_1 = totalOrderLevelCharges;
    if (0 === (seen0 & 2048))
      $this.k1o_1 = null;
    else
      $this.k1o_1 = types;
    $this.l1o_1 = value;
    if (0 === (seen0 & 8192))
      $this.m1o_1 = null;
    else
      $this.m1o_1 = valueType;
    if (0 === (seen0 & 16384))
      $this.n1o_1 = null;
    else
      $this.n1o_1 = points;
    if (0 === (seen0 & 32768))
      $this.o1o_1 = null;
    else
      $this.o1o_1 = minOrderValue;
    return $this;
  }
}
class Companion_13 {}
class $serializer_13 {
  constructor() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderStateHistory', this, 6);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('order_state', false);
    tmp0_serialDesc.aw('store_id', false);
    tmp0_serialDesc.aw('order_id', false);
    tmp0_serialDesc.aw('timestamp_unix', true);
    tmp0_serialDesc.aw('date_time', true);
    this.w1v_1 = tmp0_serialDesc;
  }
  x1v(encoder, value) {
    var tmp0_desc = this.w1v_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.y1v_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.y1v_1);
    }
    tmp1_output.hq(tmp0_desc, 1, value.z1v_1);
    tmp1_output.hq(tmp0_desc, 2, value.a1w_1);
    tmp1_output.hq(tmp0_desc, 3, value.b1w_1);
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.c1w_1 === '')) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.c1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.d1w_1 === '')) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.d1w_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.x1v(encoder, value instanceof OrderStateHistory ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.w1v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.so(tmp0_desc);
    if (tmp10_input.ip()) {
      tmp4_local0 = tmp10_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.cp(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.cp(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.cp(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.cp(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.cp(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.cp(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp10_input.to(tmp0_desc);
    return OrderStateHistory.e1w(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  al() {
    return this.w1v_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class OrderStateHistory {
  toString() {
    return 'OrderStateHistory(_id=' + this.y1v_1 + ', order_state=' + this.z1v_1 + ', store_id=' + this.a1w_1 + ', order_id=' + this.b1w_1 + ', timestamp_unix=' + this.c1w_1 + ', date_time=' + this.d1w_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.y1v_1);
    result = imul(result, 31) + getStringHashCode(this.z1v_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a1w_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b1w_1) | 0;
    result = imul(result, 31) + (this.c1w_1 == null ? 0 : getStringHashCode(this.c1w_1)) | 0;
    result = imul(result, 31) + (this.d1w_1 == null ? 0 : getStringHashCode(this.d1w_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderStateHistory))
      return false;
    var tmp0_other_with_cast = other instanceof OrderStateHistory ? other : THROW_CCE();
    if (!(this.y1v_1 === tmp0_other_with_cast.y1v_1))
      return false;
    if (!(this.z1v_1 === tmp0_other_with_cast.z1v_1))
      return false;
    if (!(this.a1w_1 === tmp0_other_with_cast.a1w_1))
      return false;
    if (!(this.b1w_1 === tmp0_other_with_cast.b1w_1))
      return false;
    if (!(this.c1w_1 == tmp0_other_with_cast.c1w_1))
      return false;
    if (!(this.d1w_1 == tmp0_other_with_cast.d1w_1))
      return false;
    return true;
  }
  static e1w(seen0, _id, order_state, store_id, order_id, timestamp_unix, date_time, serializationConstructorMarker) {
    if (!(14 === (14 & seen0))) {
      throwMissingFieldException(seen0, 14, $serializer_getInstance_13().w1v_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.y1v_1 = '';
    else
      $this.y1v_1 = _id;
    $this.z1v_1 = order_state;
    $this.a1w_1 = store_id;
    $this.b1w_1 = order_id;
    if (0 === (seen0 & 16))
      $this.c1w_1 = '';
    else
      $this.c1w_1 = timestamp_unix;
    if (0 === (seen0 & 32))
      $this.d1w_1 = '';
    else
      $this.d1w_1 = date_time;
    return $this;
  }
}
class Companion_14 {}
class $serializer_14 {
  constructor() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.PlatForDetails', this, 6);
    tmp0_serialDesc.aw('kind', true);
    tmp0_serialDesc.aw('name', true);
    tmp0_serialDesc.aw('delivery_type', true);
    tmp0_serialDesc.aw('extras', true);
    tmp0_serialDesc.aw('platform_store_id', true);
    tmp0_serialDesc.aw('id', true);
    this.f1w_1 = tmp0_serialDesc;
  }
  g1w(encoder, value) {
    var tmp0_desc = this.f1w_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.h1w_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.h1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.i1w_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.i1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.j1w_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.j1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.k1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, $serializer_getInstance_15(), value.k1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.l1w_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.l1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.m1w_1 === '')) {
      tmp1_output.hq(tmp0_desc, 5, value.m1w_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.g1w(encoder, value instanceof PlatForDetails ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.f1w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.so(tmp0_desc);
    if (tmp10_input.ip()) {
      tmp4_local0 = tmp10_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.cp(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.cp(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.gp(tmp0_desc, 3, $serializer_getInstance_15(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.cp(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.cp(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.cp(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.cp(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.gp(tmp0_desc, 3, $serializer_getInstance_15(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.cp(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.cp(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp10_input.to(tmp0_desc);
    return PlatForDetails.n1w(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  al() {
    return this.f1w_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable($serializer_getInstance_15()), StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class PlatForDetails {
  constructor(kind, name, delivery_type, extras, platform_store_id, id) {
    kind = kind === VOID ? '' : kind;
    name = name === VOID ? '' : name;
    delivery_type = delivery_type === VOID ? '' : delivery_type;
    extras = extras === VOID ? null : extras;
    platform_store_id = platform_store_id === VOID ? '' : platform_store_id;
    id = id === VOID ? '' : id;
    this.h1w_1 = kind;
    this.i1w_1 = name;
    this.j1w_1 = delivery_type;
    this.k1w_1 = extras;
    this.l1w_1 = platform_store_id;
    this.m1w_1 = id;
  }
  toString() {
    return 'PlatForDetails(kind=' + this.h1w_1 + ', name=' + this.i1w_1 + ', delivery_type=' + this.j1w_1 + ', extras=' + toString_0(this.k1w_1) + ', platform_store_id=' + this.l1w_1 + ', id=' + this.m1w_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.h1w_1);
    result = imul(result, 31) + getStringHashCode(this.i1w_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j1w_1) | 0;
    result = imul(result, 31) + (this.k1w_1 == null ? 0 : this.k1w_1.hashCode()) | 0;
    result = imul(result, 31) + getStringHashCode(this.l1w_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m1w_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatForDetails))
      return false;
    var tmp0_other_with_cast = other instanceof PlatForDetails ? other : THROW_CCE();
    if (!(this.h1w_1 === tmp0_other_with_cast.h1w_1))
      return false;
    if (!(this.i1w_1 === tmp0_other_with_cast.i1w_1))
      return false;
    if (!(this.j1w_1 === tmp0_other_with_cast.j1w_1))
      return false;
    if (!equals(this.k1w_1, tmp0_other_with_cast.k1w_1))
      return false;
    if (!(this.l1w_1 === tmp0_other_with_cast.l1w_1))
      return false;
    if (!(this.m1w_1 === tmp0_other_with_cast.m1w_1))
      return false;
    return true;
  }
  static n1w(seen0, kind, name, delivery_type, extras, platform_store_id, id, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().f1w_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.h1w_1 = '';
    else
      $this.h1w_1 = kind;
    if (0 === (seen0 & 2))
      $this.i1w_1 = '';
    else
      $this.i1w_1 = name;
    if (0 === (seen0 & 4))
      $this.j1w_1 = '';
    else
      $this.j1w_1 = delivery_type;
    if (0 === (seen0 & 8))
      $this.k1w_1 = null;
    else
      $this.k1w_1 = extras;
    if (0 === (seen0 & 16))
      $this.l1w_1 = '';
    else
      $this.l1w_1 = platform_store_id;
    if (0 === (seen0 & 32))
      $this.m1w_1 = '';
    else
      $this.m1w_1 = id;
    return $this;
  }
}
class Companion_15 {}
class $serializer_15 {
  constructor() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.Extras', this, 3);
    tmp0_serialDesc.aw('order_otp', true);
    tmp0_serialDesc.aw('deliver_asap', true);
    tmp0_serialDesc.aw('contact_access_code', true);
    this.o1w_1 = tmp0_serialDesc;
  }
  p1w(encoder, value) {
    var tmp0_desc = this.o1w_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.q1w_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.q1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.r1w_1 === false)) {
      tmp1_output.zp(tmp0_desc, 1, value.r1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.s1w_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.s1w_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.p1w(encoder, value instanceof Extras ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.o1w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_input = decoder.so(tmp0_desc);
    if (tmp7_input.ip()) {
      tmp4_local0 = tmp7_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.uo(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.cp(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.uo(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.cp(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp7_input.to(tmp0_desc);
    return Extras.t1w(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  al() {
    return this.o1w_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class Extras {
  constructor(order_otp, deliver_asap, contact_access_code) {
    order_otp = order_otp === VOID ? '' : order_otp;
    deliver_asap = deliver_asap === VOID ? false : deliver_asap;
    contact_access_code = contact_access_code === VOID ? '' : contact_access_code;
    this.q1w_1 = order_otp;
    this.r1w_1 = deliver_asap;
    this.s1w_1 = contact_access_code;
  }
  toString() {
    return 'Extras(order_otp=' + this.q1w_1 + ', deliver_asap=' + this.r1w_1 + ', contact_access_code=' + this.s1w_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.q1w_1);
    result = imul(result, 31) + getBooleanHashCode(this.r1w_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.s1w_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Extras))
      return false;
    var tmp0_other_with_cast = other instanceof Extras ? other : THROW_CCE();
    if (!(this.q1w_1 === tmp0_other_with_cast.q1w_1))
      return false;
    if (!(this.r1w_1 === tmp0_other_with_cast.r1w_1))
      return false;
    if (!(this.s1w_1 === tmp0_other_with_cast.s1w_1))
      return false;
    return true;
  }
  static t1w(seen0, order_otp, deliver_asap, contact_access_code, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().o1w_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.q1w_1 = '';
    else
      $this.q1w_1 = order_otp;
    if (0 === (seen0 & 2))
      $this.r1w_1 = false;
    else
      $this.r1w_1 = deliver_asap;
    if (0 === (seen0 & 4))
      $this.s1w_1 = '';
    else
      $this.s1w_1 = contact_access_code;
    return $this;
  }
}
class Companion_16 {
  constructor() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.u1w_1 = [null, null, null, null, null, null, null, lazy(tmp_0, PaymentDetails$Companion$$childSerializers$_anonymous__kbx1ou), null, null];
  }
}
class $serializer_16 {
  constructor() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.PaymentDetails', this, 10);
    tmp0_serialDesc.aw('amount', true);
    tmp0_serialDesc.aw('amount_round', true);
    tmp0_serialDesc.aw('tnd_code', true);
    tmp0_serialDesc.aw('tnd_des', true);
    tmp0_serialDesc.aw('tnd_type', true);
    tmp0_serialDesc.aw('transaction_id', true);
    tmp0_serialDesc.aw('payment_gateway', true);
    tmp0_serialDesc.aw('transaction_detail', true);
    tmp0_serialDesc.aw('change', true);
    tmp0_serialDesc.aw('transType', true);
    this.v1w_1 = tmp0_serialDesc;
  }
  w1w(encoder, value) {
    var tmp0_desc = this.v1w_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().u1w_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.n1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, DoubleSerializer_getInstance(), value.n1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.o1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, DoubleSerializer_getInstance(), value.o1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.p1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.p1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.q1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.q1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.r1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.r1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.s1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.s1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.t1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.t1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !value.u1p_1.equals(ArrayList.e1())) {
      tmp1_output.jq(tmp0_desc, 7, tmp2_cached[7].g2(), value.u1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !equals(value.v1p_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 8, value.v1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.w1p_1 === '')) {
      tmp1_output.hq(tmp0_desc, 9, value.w1p_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.w1w(encoder, value instanceof PaymentDetails ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.v1w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = 0.0;
    var tmp13_local9 = null;
    var tmp14_input = decoder.so(tmp0_desc);
    var tmp15_cached = Companion_getInstance_16().u1w_1;
    if (tmp14_input.ip()) {
      tmp4_local0 = tmp14_input.gp(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.gp(tmp0_desc, 1, DoubleSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.ep(tmp0_desc, 7, tmp15_cached[7].g2(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.ap(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.cp(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.gp(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.gp(tmp0_desc, 1, DoubleSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.ep(tmp0_desc, 7, tmp15_cached[7].g2(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.ap(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.cp(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp14_input.to(tmp0_desc);
    return PaymentDetails.x1w(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  }
  al() {
    return this.v1w_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_16().u1w_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(DoubleSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), tmp0_cached[7].g2(), DoubleSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class PaymentDetails {
  constructor(amount, amountRound, tndCode, tndDes, tndType, transactionId, paymentGateway, transactionDetail, change, transType) {
    Companion_getInstance_16();
    amount = amount === VOID ? null : amount;
    amountRound = amountRound === VOID ? null : amountRound;
    tndCode = tndCode === VOID ? null : tndCode;
    tndDes = tndDes === VOID ? null : tndDes;
    tndType = tndType === VOID ? null : tndType;
    transactionId = transactionId === VOID ? null : transactionId;
    paymentGateway = paymentGateway === VOID ? null : paymentGateway;
    transactionDetail = transactionDetail === VOID ? ArrayList.e1() : transactionDetail;
    change = change === VOID ? 0.0 : change;
    transType = transType === VOID ? '' : transType;
    this.n1p_1 = amount;
    this.o1p_1 = amountRound;
    this.p1p_1 = tndCode;
    this.q1p_1 = tndDes;
    this.r1p_1 = tndType;
    this.s1p_1 = transactionId;
    this.t1p_1 = paymentGateway;
    this.u1p_1 = transactionDetail;
    this.v1p_1 = change;
    this.w1p_1 = transType;
  }
  toString() {
    return 'PaymentDetails(amount=' + this.n1p_1 + ', amountRound=' + this.o1p_1 + ', tndCode=' + this.p1p_1 + ', tndDes=' + this.q1p_1 + ', tndType=' + this.r1p_1 + ', transactionId=' + this.s1p_1 + ', paymentGateway=' + this.t1p_1 + ', transactionDetail=' + this.u1p_1.toString() + ', change=' + this.v1p_1 + ', transType=' + this.w1p_1 + ')';
  }
  hashCode() {
    var result = this.n1p_1 == null ? 0 : getNumberHashCode(this.n1p_1);
    result = imul(result, 31) + (this.o1p_1 == null ? 0 : getNumberHashCode(this.o1p_1)) | 0;
    result = imul(result, 31) + (this.p1p_1 == null ? 0 : getStringHashCode(this.p1p_1)) | 0;
    result = imul(result, 31) + (this.q1p_1 == null ? 0 : getStringHashCode(this.q1p_1)) | 0;
    result = imul(result, 31) + (this.r1p_1 == null ? 0 : getStringHashCode(this.r1p_1)) | 0;
    result = imul(result, 31) + (this.s1p_1 == null ? 0 : getStringHashCode(this.s1p_1)) | 0;
    result = imul(result, 31) + (this.t1p_1 == null ? 0 : getStringHashCode(this.t1p_1)) | 0;
    result = imul(result, 31) + this.u1p_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.v1p_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w1p_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PaymentDetails))
      return false;
    var tmp0_other_with_cast = other instanceof PaymentDetails ? other : THROW_CCE();
    if (!equals(this.n1p_1, tmp0_other_with_cast.n1p_1))
      return false;
    if (!equals(this.o1p_1, tmp0_other_with_cast.o1p_1))
      return false;
    if (!(this.p1p_1 == tmp0_other_with_cast.p1p_1))
      return false;
    if (!(this.q1p_1 == tmp0_other_with_cast.q1p_1))
      return false;
    if (!(this.r1p_1 == tmp0_other_with_cast.r1p_1))
      return false;
    if (!(this.s1p_1 == tmp0_other_with_cast.s1p_1))
      return false;
    if (!(this.t1p_1 == tmp0_other_with_cast.t1p_1))
      return false;
    if (!this.u1p_1.equals(tmp0_other_with_cast.u1p_1))
      return false;
    if (!equals(this.v1p_1, tmp0_other_with_cast.v1p_1))
      return false;
    if (!(this.w1p_1 === tmp0_other_with_cast.w1p_1))
      return false;
    return true;
  }
  static x1w(seen0, amount, amountRound, tndCode, tndDes, tndType, transactionId, paymentGateway, transactionDetail, change, transType, serializationConstructorMarker) {
    Companion_getInstance_16();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().v1w_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.n1p_1 = null;
    else
      $this.n1p_1 = amount;
    if (0 === (seen0 & 2))
      $this.o1p_1 = null;
    else
      $this.o1p_1 = amountRound;
    if (0 === (seen0 & 4))
      $this.p1p_1 = null;
    else
      $this.p1p_1 = tndCode;
    if (0 === (seen0 & 8))
      $this.q1p_1 = null;
    else
      $this.q1p_1 = tndDes;
    if (0 === (seen0 & 16))
      $this.r1p_1 = null;
    else
      $this.r1p_1 = tndType;
    if (0 === (seen0 & 32))
      $this.s1p_1 = null;
    else
      $this.s1p_1 = transactionId;
    if (0 === (seen0 & 64))
      $this.t1p_1 = null;
    else
      $this.t1p_1 = paymentGateway;
    if (0 === (seen0 & 128))
      $this.u1p_1 = ArrayList.e1();
    else
      $this.u1p_1 = transactionDetail;
    if (0 === (seen0 & 256))
      $this.v1p_1 = 0.0;
    else
      $this.v1p_1 = change;
    if (0 === (seen0 & 512))
      $this.w1p_1 = '';
    else
      $this.w1p_1 = transType;
    return $this;
  }
}
class Companion_17 {}
class $serializer_17 {
  constructor() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.PaymentIntentClass', this, 12);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('card_number', true);
    tmp0_serialDesc.aw('finger_print', true);
    tmp0_serialDesc.aw('expires', true);
    tmp0_serialDesc.aw('card_type', true);
    tmp0_serialDesc.aw('issuer', true);
    tmp0_serialDesc.aw('address', true);
    tmp0_serialDesc.aw('card_brand', true);
    tmp0_serialDesc.aw('read_method', true);
    tmp0_serialDesc.aw('card_holder_name', true);
    tmp0_serialDesc.aw('card_amount', true);
    tmp0_serialDesc.aw('card_transaction', true);
    this.y1w_1 = tmp0_serialDesc;
  }
  z1w(encoder, value) {
    var tmp0_desc = this.y1w_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.a1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.a1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.b1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.b1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.c1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.c1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.d1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.d1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.e1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.e1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.f1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.f1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.g1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.g1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.h1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.h1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.i1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.i1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.j1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.j1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.k1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, DoubleSerializer_getInstance(), value.k1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.l1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.l1x_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.z1w(encoder, value instanceof PaymentIntentClass ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.y1w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_input = decoder.so(tmp0_desc);
    if (tmp16_input.ip()) {
      tmp4_local0 = tmp16_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp16_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp16_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp16_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp16_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp16_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp16_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp16_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp16_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp16_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp16_input.gp(tmp0_desc, 10, DoubleSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp16_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp16_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp16_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp16_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp16_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp16_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp16_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp16_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp16_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp16_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp16_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp16_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp16_input.gp(tmp0_desc, 10, DoubleSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp16_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp16_input.to(tmp0_desc);
    return PaymentIntentClass.m1x(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, null);
  }
  al() {
    return this.y1w_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class PaymentIntentClass {
  constructor(id, cardNumber, fingerPrint, expires, cardType, issuer, Address, cardBrand, readMethod, cardHolderName, cardAmount, cardTransaction) {
    id = id === VOID ? null : id;
    cardNumber = cardNumber === VOID ? null : cardNumber;
    fingerPrint = fingerPrint === VOID ? null : fingerPrint;
    expires = expires === VOID ? null : expires;
    cardType = cardType === VOID ? null : cardType;
    issuer = issuer === VOID ? null : issuer;
    Address = Address === VOID ? null : Address;
    cardBrand = cardBrand === VOID ? null : cardBrand;
    readMethod = readMethod === VOID ? null : readMethod;
    cardHolderName = cardHolderName === VOID ? null : cardHolderName;
    cardAmount = cardAmount === VOID ? null : cardAmount;
    cardTransaction = cardTransaction === VOID ? null : cardTransaction;
    this.a1x_1 = id;
    this.b1x_1 = cardNumber;
    this.c1x_1 = fingerPrint;
    this.d1x_1 = expires;
    this.e1x_1 = cardType;
    this.f1x_1 = issuer;
    this.g1x_1 = Address;
    this.h1x_1 = cardBrand;
    this.i1x_1 = readMethod;
    this.j1x_1 = cardHolderName;
    this.k1x_1 = cardAmount;
    this.l1x_1 = cardTransaction;
  }
  toString() {
    return 'PaymentIntentClass(id=' + this.a1x_1 + ', cardNumber=' + this.b1x_1 + ', fingerPrint=' + this.c1x_1 + ', expires=' + this.d1x_1 + ', cardType=' + this.e1x_1 + ', issuer=' + this.f1x_1 + ', Address=' + this.g1x_1 + ', cardBrand=' + this.h1x_1 + ', readMethod=' + this.i1x_1 + ', cardHolderName=' + this.j1x_1 + ', cardAmount=' + this.k1x_1 + ', cardTransaction=' + this.l1x_1 + ')';
  }
  hashCode() {
    var result = this.a1x_1 == null ? 0 : getStringHashCode(this.a1x_1);
    result = imul(result, 31) + (this.b1x_1 == null ? 0 : getStringHashCode(this.b1x_1)) | 0;
    result = imul(result, 31) + (this.c1x_1 == null ? 0 : getStringHashCode(this.c1x_1)) | 0;
    result = imul(result, 31) + (this.d1x_1 == null ? 0 : getStringHashCode(this.d1x_1)) | 0;
    result = imul(result, 31) + (this.e1x_1 == null ? 0 : getStringHashCode(this.e1x_1)) | 0;
    result = imul(result, 31) + (this.f1x_1 == null ? 0 : getStringHashCode(this.f1x_1)) | 0;
    result = imul(result, 31) + (this.g1x_1 == null ? 0 : getStringHashCode(this.g1x_1)) | 0;
    result = imul(result, 31) + (this.h1x_1 == null ? 0 : getStringHashCode(this.h1x_1)) | 0;
    result = imul(result, 31) + (this.i1x_1 == null ? 0 : getStringHashCode(this.i1x_1)) | 0;
    result = imul(result, 31) + (this.j1x_1 == null ? 0 : getStringHashCode(this.j1x_1)) | 0;
    result = imul(result, 31) + (this.k1x_1 == null ? 0 : getNumberHashCode(this.k1x_1)) | 0;
    result = imul(result, 31) + (this.l1x_1 == null ? 0 : getStringHashCode(this.l1x_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PaymentIntentClass))
      return false;
    var tmp0_other_with_cast = other instanceof PaymentIntentClass ? other : THROW_CCE();
    if (!(this.a1x_1 == tmp0_other_with_cast.a1x_1))
      return false;
    if (!(this.b1x_1 == tmp0_other_with_cast.b1x_1))
      return false;
    if (!(this.c1x_1 == tmp0_other_with_cast.c1x_1))
      return false;
    if (!(this.d1x_1 == tmp0_other_with_cast.d1x_1))
      return false;
    if (!(this.e1x_1 == tmp0_other_with_cast.e1x_1))
      return false;
    if (!(this.f1x_1 == tmp0_other_with_cast.f1x_1))
      return false;
    if (!(this.g1x_1 == tmp0_other_with_cast.g1x_1))
      return false;
    if (!(this.h1x_1 == tmp0_other_with_cast.h1x_1))
      return false;
    if (!(this.i1x_1 == tmp0_other_with_cast.i1x_1))
      return false;
    if (!(this.j1x_1 == tmp0_other_with_cast.j1x_1))
      return false;
    if (!equals(this.k1x_1, tmp0_other_with_cast.k1x_1))
      return false;
    if (!(this.l1x_1 == tmp0_other_with_cast.l1x_1))
      return false;
    return true;
  }
  static m1x(seen0, id, cardNumber, fingerPrint, expires, cardType, issuer, Address, cardBrand, readMethod, cardHolderName, cardAmount, cardTransaction, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_17().y1w_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.a1x_1 = null;
    else
      $this.a1x_1 = id;
    if (0 === (seen0 & 2))
      $this.b1x_1 = null;
    else
      $this.b1x_1 = cardNumber;
    if (0 === (seen0 & 4))
      $this.c1x_1 = null;
    else
      $this.c1x_1 = fingerPrint;
    if (0 === (seen0 & 8))
      $this.d1x_1 = null;
    else
      $this.d1x_1 = expires;
    if (0 === (seen0 & 16))
      $this.e1x_1 = null;
    else
      $this.e1x_1 = cardType;
    if (0 === (seen0 & 32))
      $this.f1x_1 = null;
    else
      $this.f1x_1 = issuer;
    if (0 === (seen0 & 64))
      $this.g1x_1 = null;
    else
      $this.g1x_1 = Address;
    if (0 === (seen0 & 128))
      $this.h1x_1 = null;
    else
      $this.h1x_1 = cardBrand;
    if (0 === (seen0 & 256))
      $this.i1x_1 = null;
    else
      $this.i1x_1 = readMethod;
    if (0 === (seen0 & 512))
      $this.j1x_1 = null;
    else
      $this.j1x_1 = cardHolderName;
    if (0 === (seen0 & 1024))
      $this.k1x_1 = null;
    else
      $this.k1x_1 = cardAmount;
    if (0 === (seen0 & 2048))
      $this.l1x_1 = null;
    else
      $this.l1x_1 = cardTransaction;
    return $this;
  }
}
class Companion_18 {}
class $serializer_18 {
  constructor() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.Tax', this, 8);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('tax_id', true);
    tmp0_serialDesc.aw('tax_dsc', true);
    tmp0_serialDesc.aw('tax_type', true);
    tmp0_serialDesc.aw('tax_pct', true);
    tmp0_serialDesc.aw('store_id', true);
    tmp0_serialDesc.aw('tax_amount', true);
    tmp0_serialDesc.aw('taxable_amount', true);
    this.n1x_1 = tmp0_serialDesc;
  }
  o1x(encoder, value) {
    var tmp0_desc = this.n1x_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.b1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.b1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.c1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.c1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.d1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.d1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.e1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.e1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.f1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, DoubleSerializer_getInstance(), value.f1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.g1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.g1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.h1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, DoubleSerializer_getInstance(), value.h1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.i1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, DoubleSerializer_getInstance(), value.i1n_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.o1x(encoder, value instanceof Tax ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.n1x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.so(tmp0_desc);
    if (tmp12_input.ip()) {
      tmp4_local0 = tmp12_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.gp(tmp0_desc, 4, DoubleSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.gp(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.gp(tmp0_desc, 7, DoubleSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.gp(tmp0_desc, 4, DoubleSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.gp(tmp0_desc, 6, DoubleSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.gp(tmp0_desc, 7, DoubleSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp12_input.to(tmp0_desc);
    return Tax.p1x(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  }
  al() {
    return this.n1x_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance())];
  }
}
class Tax {
  constructor(id, taxId, taxDsc, taxType, taxPct, storeId, taxAmount, taxableAmount) {
    id = id === VOID ? null : id;
    taxId = taxId === VOID ? null : taxId;
    taxDsc = taxDsc === VOID ? null : taxDsc;
    taxType = taxType === VOID ? null : taxType;
    taxPct = taxPct === VOID ? null : taxPct;
    storeId = storeId === VOID ? null : storeId;
    taxAmount = taxAmount === VOID ? null : taxAmount;
    taxableAmount = taxableAmount === VOID ? null : taxableAmount;
    this.b1n_1 = id;
    this.c1n_1 = taxId;
    this.d1n_1 = taxDsc;
    this.e1n_1 = taxType;
    this.f1n_1 = taxPct;
    this.g1n_1 = storeId;
    this.h1n_1 = taxAmount;
    this.i1n_1 = taxableAmount;
  }
  q1x(id, taxId, taxDsc, taxType, taxPct, storeId, taxAmount, taxableAmount) {
    return new Tax(id, taxId, taxDsc, taxType, taxPct, storeId, taxAmount, taxableAmount);
  }
  x1p(id, taxId, taxDsc, taxType, taxPct, storeId, taxAmount, taxableAmount, $super) {
    id = id === VOID ? this.b1n_1 : id;
    taxId = taxId === VOID ? this.c1n_1 : taxId;
    taxDsc = taxDsc === VOID ? this.d1n_1 : taxDsc;
    taxType = taxType === VOID ? this.e1n_1 : taxType;
    taxPct = taxPct === VOID ? this.f1n_1 : taxPct;
    storeId = storeId === VOID ? this.g1n_1 : storeId;
    taxAmount = taxAmount === VOID ? this.h1n_1 : taxAmount;
    taxableAmount = taxableAmount === VOID ? this.i1n_1 : taxableAmount;
    return $super === VOID ? this.q1x(id, taxId, taxDsc, taxType, taxPct, storeId, taxAmount, taxableAmount) : $super.q1x.call(this, id, taxId, taxDsc, taxType, taxPct, storeId, taxAmount, taxableAmount);
  }
  toString() {
    return 'Tax(id=' + this.b1n_1 + ', taxId=' + this.c1n_1 + ', taxDsc=' + this.d1n_1 + ', taxType=' + this.e1n_1 + ', taxPct=' + this.f1n_1 + ', storeId=' + this.g1n_1 + ', taxAmount=' + this.h1n_1 + ', taxableAmount=' + this.i1n_1 + ')';
  }
  hashCode() {
    var result = this.b1n_1 == null ? 0 : getStringHashCode(this.b1n_1);
    result = imul(result, 31) + (this.c1n_1 == null ? 0 : getStringHashCode(this.c1n_1)) | 0;
    result = imul(result, 31) + (this.d1n_1 == null ? 0 : getStringHashCode(this.d1n_1)) | 0;
    result = imul(result, 31) + (this.e1n_1 == null ? 0 : getStringHashCode(this.e1n_1)) | 0;
    result = imul(result, 31) + (this.f1n_1 == null ? 0 : getNumberHashCode(this.f1n_1)) | 0;
    result = imul(result, 31) + (this.g1n_1 == null ? 0 : getStringHashCode(this.g1n_1)) | 0;
    result = imul(result, 31) + (this.h1n_1 == null ? 0 : getNumberHashCode(this.h1n_1)) | 0;
    result = imul(result, 31) + (this.i1n_1 == null ? 0 : getNumberHashCode(this.i1n_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Tax))
      return false;
    var tmp0_other_with_cast = other instanceof Tax ? other : THROW_CCE();
    if (!(this.b1n_1 == tmp0_other_with_cast.b1n_1))
      return false;
    if (!(this.c1n_1 == tmp0_other_with_cast.c1n_1))
      return false;
    if (!(this.d1n_1 == tmp0_other_with_cast.d1n_1))
      return false;
    if (!(this.e1n_1 == tmp0_other_with_cast.e1n_1))
      return false;
    if (!equals(this.f1n_1, tmp0_other_with_cast.f1n_1))
      return false;
    if (!(this.g1n_1 == tmp0_other_with_cast.g1n_1))
      return false;
    if (!equals(this.h1n_1, tmp0_other_with_cast.h1n_1))
      return false;
    if (!equals(this.i1n_1, tmp0_other_with_cast.i1n_1))
      return false;
    return true;
  }
  static p1x(seen0, id, taxId, taxDsc, taxType, taxPct, storeId, taxAmount, taxableAmount, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_18().n1x_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.b1n_1 = null;
    else
      $this.b1n_1 = id;
    if (0 === (seen0 & 2))
      $this.c1n_1 = null;
    else
      $this.c1n_1 = taxId;
    if (0 === (seen0 & 4))
      $this.d1n_1 = null;
    else
      $this.d1n_1 = taxDsc;
    if (0 === (seen0 & 8))
      $this.e1n_1 = null;
    else
      $this.e1n_1 = taxType;
    if (0 === (seen0 & 16))
      $this.f1n_1 = null;
    else
      $this.f1n_1 = taxPct;
    if (0 === (seen0 & 32))
      $this.g1n_1 = null;
    else
      $this.g1n_1 = storeId;
    if (0 === (seen0 & 64))
      $this.h1n_1 = null;
    else
      $this.h1n_1 = taxAmount;
    if (0 === (seen0 & 128))
      $this.i1n_1 = null;
    else
      $this.i1n_1 = taxableAmount;
    return $this;
  }
}
class Companion_19 {
  constructor() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, OrderPaymentDetails$Companion$$childSerializers$_anonymous__ddnqhs);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, OrderPaymentDetails$Companion$$childSerializers$_anonymous__ddnqhs_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r1x_1 = [tmp_1, tmp_3, null, null, null, null, null, null, null, lazy(tmp_4, OrderPaymentDetails$Companion$$childSerializers$_anonymous__ddnqhs_1), null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  }
}
class $serializer_19 {
  constructor() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderPaymentDetails', this, 24);
    tmp0_serialDesc.aw('printData', true);
    tmp0_serialDesc.aw('transactionDetail', true);
    tmp0_serialDesc.aw('amount', true);
    tmp0_serialDesc.aw('percent', true);
    tmp0_serialDesc.aw('payeeName', true);
    tmp0_serialDesc.aw('status', true);
    tmp0_serialDesc.aw('name', true);
    tmp0_serialDesc.aw('paymentMethodId', true);
    tmp0_serialDesc.aw('enteredAmount', true);
    tmp0_serialDesc.aw('paymentIntent', true);
    tmp0_serialDesc.aw('Change', true);
    tmp0_serialDesc.aw('tnd_code', true);
    tmp0_serialDesc.aw('tnd_des', true);
    tmp0_serialDesc.aw('tnd_type', true);
    tmp0_serialDesc.aw('payment_type', true);
    tmp0_serialDesc.aw('terminalInvoiceNo', true);
    tmp0_serialDesc.aw('paxResponse', true);
    tmp0_serialDesc.aw('cloverPaymentResponse', true);
    tmp0_serialDesc.aw('razorPayEdcResponse', true);
    tmp0_serialDesc.aw('magTekPaymentResponse', true);
    tmp0_serialDesc.aw('pineTransactionStatusResponse', true);
    tmp0_serialDesc.aw('transactionSummary', true);
    tmp0_serialDesc.aw('pine_digi_qr_status_response', true);
    tmp0_serialDesc.aw('transResponse', true);
    this.s1x_1 = tmp0_serialDesc;
  }
  t1x(encoder, value) {
    var tmp0_desc = this.s1x_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().r1x_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.u1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, tmp2_cached[0].g2(), value.u1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !value.v1x_1.equals(ArrayList.e1())) {
      tmp1_output.jq(tmp0_desc, 1, tmp2_cached[1].g2(), value.v1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.w1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, DoubleSerializer_getInstance(), value.w1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !equals(value.x1x_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 3, value.x1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.y1x_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.y1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.z1x_1 === false)) {
      tmp1_output.zp(tmp0_desc, 5, value.z1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.a1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 6, value.a1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.b1y_1 === -1)) {
      tmp1_output.cq(tmp0_desc, 7, value.b1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !equals(value.c1y_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 8, value.c1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.d1y_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, tmp2_cached[9].g2(), value.d1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !equals(value.e1y_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 10, value.e1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.f1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 11, value.f1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.g1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 12, value.g1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.h1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 13, value.h1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.i1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 14, value.i1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.j1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 15, value.j1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !(value.k1y_1 == null)) {
      tmp1_output.lq(tmp0_desc, 16, $serializer_getInstance_20(), value.k1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !(value.l1y_1 == null)) {
      tmp1_output.lq(tmp0_desc, 17, $serializer_getInstance_21(), value.l1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !(value.m1y_1 == null)) {
      tmp1_output.lq(tmp0_desc, 18, $serializer_getInstance_28(), value.m1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !(value.n1y_1 == null)) {
      tmp1_output.lq(tmp0_desc, 19, $serializer_getInstance_29(), value.n1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !(value.o1y_1 == null)) {
      tmp1_output.lq(tmp0_desc, 20, $serializer_getInstance_34(), value.o1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.p1y_1 == null)) {
      tmp1_output.lq(tmp0_desc, 21, $serializer_getInstance_36(), value.p1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 22) ? true : !(value.q1y_1 == null)) {
      tmp1_output.lq(tmp0_desc, 22, $serializer_getInstance_37(), value.q1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 23) ? true : !(value.r1y_1 == null)) {
      tmp1_output.lq(tmp0_desc, 23, $serializer_getInstance_40(), value.r1y_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.t1x(encoder, value instanceof OrderPaymentDetails ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.s1x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0.0;
    var tmp8_local4 = null;
    var tmp9_local5 = false;
    var tmp10_local6 = null;
    var tmp11_local7 = 0;
    var tmp12_local8 = 0.0;
    var tmp13_local9 = null;
    var tmp14_local10 = 0.0;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_local17 = null;
    var tmp22_local18 = null;
    var tmp23_local19 = null;
    var tmp24_local20 = null;
    var tmp25_local21 = null;
    var tmp26_local22 = null;
    var tmp27_local23 = null;
    var tmp28_input = decoder.so(tmp0_desc);
    var tmp29_cached = Companion_getInstance_19().r1x_1;
    if (tmp28_input.ip()) {
      tmp4_local0 = tmp28_input.gp(tmp0_desc, 0, tmp29_cached[0].g2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp28_input.ep(tmp0_desc, 1, tmp29_cached[1].g2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp28_input.gp(tmp0_desc, 2, DoubleSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp28_input.ap(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp28_input.cp(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp28_input.uo(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp28_input.cp(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp28_input.xo(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp28_input.ap(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp28_input.gp(tmp0_desc, 9, tmp29_cached[9].g2(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp28_input.ap(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp28_input.cp(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp28_input.cp(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp28_input.cp(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp28_input.cp(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp28_input.cp(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp28_input.gp(tmp0_desc, 16, $serializer_getInstance_20(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp28_input.gp(tmp0_desc, 17, $serializer_getInstance_21(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp28_input.gp(tmp0_desc, 18, $serializer_getInstance_28(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp28_input.gp(tmp0_desc, 19, $serializer_getInstance_29(), tmp23_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp28_input.gp(tmp0_desc, 20, $serializer_getInstance_34(), tmp24_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp25_local21 = tmp28_input.gp(tmp0_desc, 21, $serializer_getInstance_36(), tmp25_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp26_local22 = tmp28_input.gp(tmp0_desc, 22, $serializer_getInstance_37(), tmp26_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp27_local23 = tmp28_input.gp(tmp0_desc, 23, $serializer_getInstance_40(), tmp27_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp28_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp28_input.gp(tmp0_desc, 0, tmp29_cached[0].g2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp28_input.ep(tmp0_desc, 1, tmp29_cached[1].g2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp28_input.gp(tmp0_desc, 2, DoubleSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp28_input.ap(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp28_input.cp(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp28_input.uo(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp28_input.cp(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp28_input.xo(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp28_input.ap(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp28_input.gp(tmp0_desc, 9, tmp29_cached[9].g2(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp28_input.ap(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp28_input.cp(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp28_input.cp(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp28_input.cp(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp28_input.cp(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp28_input.cp(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp28_input.gp(tmp0_desc, 16, $serializer_getInstance_20(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp28_input.gp(tmp0_desc, 17, $serializer_getInstance_21(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp28_input.gp(tmp0_desc, 18, $serializer_getInstance_28(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp28_input.gp(tmp0_desc, 19, $serializer_getInstance_29(), tmp23_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp28_input.gp(tmp0_desc, 20, $serializer_getInstance_34(), tmp24_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp25_local21 = tmp28_input.gp(tmp0_desc, 21, $serializer_getInstance_36(), tmp25_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp26_local22 = tmp28_input.gp(tmp0_desc, 22, $serializer_getInstance_37(), tmp26_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp27_local23 = tmp28_input.gp(tmp0_desc, 23, $serializer_getInstance_40(), tmp27_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp28_input.to(tmp0_desc);
    return OrderPaymentDetails.s1y(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, tmp25_local21, tmp26_local22, tmp27_local23, null);
  }
  al() {
    return this.s1x_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_19().r1x_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].g2()), tmp0_cached[1].g2(), get_nullable(DoubleSerializer_getInstance()), DoubleSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(tmp0_cached[9].g2()), DoubleSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable($serializer_getInstance_20()), get_nullable($serializer_getInstance_21()), get_nullable($serializer_getInstance_28()), get_nullable($serializer_getInstance_29()), get_nullable($serializer_getInstance_34()), get_nullable($serializer_getInstance_36()), get_nullable($serializer_getInstance_37()), get_nullable($serializer_getInstance_40())];
  }
}
class OrderPaymentDetails {
  constructor(printData, transactionDetail, amount, percent, payeeName, status, name, paymentMethodId, enteredAmount, paymentIntent, change, tndCode, tndDes, tndType, paymentType, terminalInvoiceNo, paxResponse, cloverPaymentResponse, razorPayEdcResponse, magTekPaymentResponse, pineTransactionStatusResponse, transactionSummary, pineDigiQrStatusResponse, transResponse) {
    Companion_getInstance_19();
    printData = printData === VOID ? null : printData;
    transactionDetail = transactionDetail === VOID ? ArrayList.e1() : transactionDetail;
    amount = amount === VOID ? null : amount;
    percent = percent === VOID ? 0.0 : percent;
    payeeName = payeeName === VOID ? '' : payeeName;
    status = status === VOID ? false : status;
    name = name === VOID ? '' : name;
    paymentMethodId = paymentMethodId === VOID ? -1 : paymentMethodId;
    enteredAmount = enteredAmount === VOID ? 0.0 : enteredAmount;
    paymentIntent = paymentIntent === VOID ? null : paymentIntent;
    change = change === VOID ? 0.0 : change;
    tndCode = tndCode === VOID ? '' : tndCode;
    tndDes = tndDes === VOID ? '' : tndDes;
    tndType = tndType === VOID ? '' : tndType;
    paymentType = paymentType === VOID ? '' : paymentType;
    terminalInvoiceNo = terminalInvoiceNo === VOID ? '' : terminalInvoiceNo;
    paxResponse = paxResponse === VOID ? null : paxResponse;
    cloverPaymentResponse = cloverPaymentResponse === VOID ? null : cloverPaymentResponse;
    razorPayEdcResponse = razorPayEdcResponse === VOID ? null : razorPayEdcResponse;
    magTekPaymentResponse = magTekPaymentResponse === VOID ? null : magTekPaymentResponse;
    pineTransactionStatusResponse = pineTransactionStatusResponse === VOID ? null : pineTransactionStatusResponse;
    transactionSummary = transactionSummary === VOID ? null : transactionSummary;
    pineDigiQrStatusResponse = pineDigiQrStatusResponse === VOID ? null : pineDigiQrStatusResponse;
    transResponse = transResponse === VOID ? null : transResponse;
    this.u1x_1 = printData;
    this.v1x_1 = transactionDetail;
    this.w1x_1 = amount;
    this.x1x_1 = percent;
    this.y1x_1 = payeeName;
    this.z1x_1 = status;
    this.a1y_1 = name;
    this.b1y_1 = paymentMethodId;
    this.c1y_1 = enteredAmount;
    this.d1y_1 = paymentIntent;
    this.e1y_1 = change;
    this.f1y_1 = tndCode;
    this.g1y_1 = tndDes;
    this.h1y_1 = tndType;
    this.i1y_1 = paymentType;
    this.j1y_1 = terminalInvoiceNo;
    this.k1y_1 = paxResponse;
    this.l1y_1 = cloverPaymentResponse;
    this.m1y_1 = razorPayEdcResponse;
    this.n1y_1 = magTekPaymentResponse;
    this.o1y_1 = pineTransactionStatusResponse;
    this.p1y_1 = transactionSummary;
    this.q1y_1 = pineDigiQrStatusResponse;
    this.r1y_1 = transResponse;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderPaymentDetails))
      THROW_CCE();
    if (!(this.y1x_1 === other.y1x_1))
      return false;
    if (!(this.z1x_1 === other.z1x_1))
      return false;
    if (!(this.a1y_1 === other.a1y_1))
      return false;
    if (!(this.b1y_1 === other.b1y_1))
      return false;
    return true;
  }
  hashCode() {
    var result = getStringHashCode(this.y1x_1);
    result = imul(31, result) + getBooleanHashCode(this.z1x_1) | 0;
    result = imul(31, result) + getStringHashCode(this.a1y_1) | 0;
    result = imul(31, result) + this.b1y_1 | 0;
    return result;
  }
  toString() {
    return 'OrderPaymentDetails(printData=' + toString_0(this.u1x_1) + ', transactionDetail=' + this.v1x_1.toString() + ', amount=' + this.w1x_1 + ', percent=' + this.x1x_1 + ', payeeName=' + this.y1x_1 + ', status=' + this.z1x_1 + ', name=' + this.a1y_1 + ', paymentMethodId=' + this.b1y_1 + ', enteredAmount=' + this.c1y_1 + ', paymentIntent=' + toString_0(this.d1y_1) + ', change=' + this.e1y_1 + ', tndCode=' + this.f1y_1 + ', tndDes=' + this.g1y_1 + ', tndType=' + this.h1y_1 + ', paymentType=' + this.i1y_1 + ', terminalInvoiceNo=' + this.j1y_1 + ', paxResponse=' + toString_0(this.k1y_1) + ', cloverPaymentResponse=' + toString_0(this.l1y_1) + ', razorPayEdcResponse=' + toString_0(this.m1y_1) + ', magTekPaymentResponse=' + toString_0(this.n1y_1) + ', pineTransactionStatusResponse=' + toString_0(this.o1y_1) + ', transactionSummary=' + toString_0(this.p1y_1) + ', pineDigiQrStatusResponse=' + toString_0(this.q1y_1) + ', transResponse=' + toString_0(this.r1y_1) + ')';
  }
  static s1y(seen0, printData, transactionDetail, amount, percent, payeeName, status, name, paymentMethodId, enteredAmount, paymentIntent, change, tndCode, tndDes, tndType, paymentType, terminalInvoiceNo, paxResponse, cloverPaymentResponse, razorPayEdcResponse, magTekPaymentResponse, pineTransactionStatusResponse, transactionSummary, pineDigiQrStatusResponse, transResponse, serializationConstructorMarker) {
    Companion_getInstance_19();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_19().s1x_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.u1x_1 = null;
    else
      $this.u1x_1 = printData;
    if (0 === (seen0 & 2))
      $this.v1x_1 = ArrayList.e1();
    else
      $this.v1x_1 = transactionDetail;
    if (0 === (seen0 & 4))
      $this.w1x_1 = null;
    else
      $this.w1x_1 = amount;
    if (0 === (seen0 & 8))
      $this.x1x_1 = 0.0;
    else
      $this.x1x_1 = percent;
    if (0 === (seen0 & 16))
      $this.y1x_1 = '';
    else
      $this.y1x_1 = payeeName;
    if (0 === (seen0 & 32))
      $this.z1x_1 = false;
    else
      $this.z1x_1 = status;
    if (0 === (seen0 & 64))
      $this.a1y_1 = '';
    else
      $this.a1y_1 = name;
    if (0 === (seen0 & 128))
      $this.b1y_1 = -1;
    else
      $this.b1y_1 = paymentMethodId;
    if (0 === (seen0 & 256))
      $this.c1y_1 = 0.0;
    else
      $this.c1y_1 = enteredAmount;
    if (0 === (seen0 & 512))
      $this.d1y_1 = null;
    else
      $this.d1y_1 = paymentIntent;
    if (0 === (seen0 & 1024))
      $this.e1y_1 = 0.0;
    else
      $this.e1y_1 = change;
    if (0 === (seen0 & 2048))
      $this.f1y_1 = '';
    else
      $this.f1y_1 = tndCode;
    if (0 === (seen0 & 4096))
      $this.g1y_1 = '';
    else
      $this.g1y_1 = tndDes;
    if (0 === (seen0 & 8192))
      $this.h1y_1 = '';
    else
      $this.h1y_1 = tndType;
    if (0 === (seen0 & 16384))
      $this.i1y_1 = '';
    else
      $this.i1y_1 = paymentType;
    if (0 === (seen0 & 32768))
      $this.j1y_1 = '';
    else
      $this.j1y_1 = terminalInvoiceNo;
    if (0 === (seen0 & 65536))
      $this.k1y_1 = null;
    else
      $this.k1y_1 = paxResponse;
    if (0 === (seen0 & 131072))
      $this.l1y_1 = null;
    else
      $this.l1y_1 = cloverPaymentResponse;
    if (0 === (seen0 & 262144))
      $this.m1y_1 = null;
    else
      $this.m1y_1 = razorPayEdcResponse;
    if (0 === (seen0 & 524288))
      $this.n1y_1 = null;
    else
      $this.n1y_1 = magTekPaymentResponse;
    if (0 === (seen0 & 1048576))
      $this.o1y_1 = null;
    else
      $this.o1y_1 = pineTransactionStatusResponse;
    if (0 === (seen0 & 2097152))
      $this.p1y_1 = null;
    else
      $this.p1y_1 = transactionSummary;
    if (0 === (seen0 & 4194304))
      $this.q1y_1 = null;
    else
      $this.q1y_1 = pineDigiQrStatusResponse;
    if (0 === (seen0 & 8388608))
      $this.r1y_1 = null;
    else
      $this.r1y_1 = transResponse;
    return $this;
  }
}
class Companion_20 {}
class $serializer_20 {
  constructor() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.PaxPaymentResponse', this, 46);
    tmp0_serialDesc.aw('authCode', true);
    tmp0_serialDesc.aw('approvedAmount', true);
    tmp0_serialDesc.aw('avsResponse', true);
    tmp0_serialDesc.aw('bogusAccountNum', true);
    tmp0_serialDesc.aw('cardType', true);
    tmp0_serialDesc.aw('cvResponse', true);
    tmp0_serialDesc.aw('hostCode', true);
    tmp0_serialDesc.aw('hostResponse', true);
    tmp0_serialDesc.aw('message', true);
    tmp0_serialDesc.aw('refNum', true);
    tmp0_serialDesc.aw('rawResponse', true);
    tmp0_serialDesc.aw('remainingBalance', true);
    tmp0_serialDesc.aw('extraBalance', true);
    tmp0_serialDesc.aw('requestedAmount', true);
    tmp0_serialDesc.aw('resultCode', true);
    tmp0_serialDesc.aw('resultTxt', true);
    tmp0_serialDesc.aw('timestamp', true);
    tmp0_serialDesc.aw('sigFileName', true);
    tmp0_serialDesc.aw('signData', true);
    tmp0_serialDesc.aw('transactionIntegrityClass', true);
    tmp0_serialDesc.aw('extData', true);
    tmp0_serialDesc.aw('giftCardType', true);
    tmp0_serialDesc.aw('transactionRemainingAmount', true);
    tmp0_serialDesc.aw('debitAccountType', true);
    tmp0_serialDesc.aw('hostDetailedMessage', true);
    tmp0_serialDesc.aw('gatewayTransactionID', true);
    tmp0_serialDesc.aw('retrievalReferenceNumber', true);
    tmp0_serialDesc.aw('maskedPAN', true);
    tmp0_serialDesc.aw('track1Data', true);
    tmp0_serialDesc.aw('track2Data', true);
    tmp0_serialDesc.aw('track3Data', true);
    tmp0_serialDesc.aw('edcType', true);
    tmp0_serialDesc.aw('paymentService2000', true);
    tmp0_serialDesc.aw('authorizationResponse', true);
    tmp0_serialDesc.aw('issuerResponseCode', true);
    tmp0_serialDesc.aw('ecrTransID', true);
    tmp0_serialDesc.aw('approvedTipAmount', true);
    tmp0_serialDesc.aw('approvedCashBackAmount', true);
    tmp0_serialDesc.aw('approvedMerchantFee', true);
    tmp0_serialDesc.aw('approvedTaxAmount', true);
    tmp0_serialDesc.aw('paymentAccountReferenceID', true);
    tmp0_serialDesc.aw('payloadData', true);
    tmp0_serialDesc.aw('hostTimeStamp', true);
    tmp0_serialDesc.aw('hostAccount', true);
    tmp0_serialDesc.aw('hostCardType', true);
    tmp0_serialDesc.aw('cardBin', true);
    this.t1y_1 = tmp0_serialDesc;
  }
  u1y(encoder, value) {
    var tmp0_desc = this.t1y_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.v1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.v1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.w1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.w1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.x1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.x1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.y1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.y1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.z1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.z1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.a1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 5, value.a1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.b1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 6, value.b1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.c1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 7, value.c1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.d1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 8, value.d1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.e1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 9, value.e1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.f1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 10, value.f1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.g1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 11, value.g1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.h1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 12, value.h1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.i1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 13, value.i1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.j1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 14, value.j1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.k1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 15, value.k1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !(value.l1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 16, value.l1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !(value.m1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 17, value.m1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !(value.n1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 18, value.n1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !(value.o1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 19, value.o1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !(value.p1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 20, value.p1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.q1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 21, value.q1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 22) ? true : !(value.r1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 22, value.r1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 23) ? true : !(value.s1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 23, value.s1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 24) ? true : !(value.t1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 24, value.t1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 25) ? true : !(value.u1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 25, value.u1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 26) ? true : !(value.v1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 26, value.v1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 27) ? true : !(value.w1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 27, value.w1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 28) ? true : !(value.x1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 28, value.x1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 29) ? true : !(value.y1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 29, value.y1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 30) ? true : !(value.z1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 30, value.z1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 31) ? true : !(value.a20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 31, value.a20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 32) ? true : !(value.b20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 32, value.b20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 33) ? true : !(value.c20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 33, value.c20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 34) ? true : !(value.d20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 34, value.d20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 35) ? true : !(value.e20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 35, value.e20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 36) ? true : !(value.f20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 36, value.f20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 37) ? true : !(value.g20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 37, value.g20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 38) ? true : !(value.h20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 38, value.h20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 39) ? true : !(value.i20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 39, value.i20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 40) ? true : !(value.j20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 40, value.j20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 41) ? true : !(value.k20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 41, value.k20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 42) ? true : !(value.l20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 42, value.l20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 43) ? true : !(value.m20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 43, value.m20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 44) ? true : !(value.n20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 44, value.n20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 45) ? true : !(value.o20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 45, value.o20_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.u1y(encoder, value instanceof PaxPaymentResponse ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.t1y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = null;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_local41 = null;
    var tmp47_local42 = null;
    var tmp48_local43 = null;
    var tmp49_local44 = null;
    var tmp50_local45 = null;
    var tmp51_input = decoder.so(tmp0_desc);
    if (tmp51_input.ip()) {
      tmp5_local0 = tmp51_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp51_input.cp(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp51_input.cp(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp51_input.cp(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp51_input.cp(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp51_input.cp(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp51_input.cp(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp51_input.cp(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp51_input.cp(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp51_input.cp(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp51_input.cp(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp51_input.cp(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp51_input.cp(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp51_input.cp(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp51_input.cp(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp51_input.cp(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp51_input.cp(tmp0_desc, 16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp51_input.cp(tmp0_desc, 17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp51_input.cp(tmp0_desc, 18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp51_input.cp(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp51_input.cp(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp51_input.cp(tmp0_desc, 21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp51_input.cp(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp51_input.cp(tmp0_desc, 23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp51_input.cp(tmp0_desc, 24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp51_input.cp(tmp0_desc, 25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp51_input.cp(tmp0_desc, 26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp51_input.cp(tmp0_desc, 27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp51_input.cp(tmp0_desc, 28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp51_input.cp(tmp0_desc, 29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp51_input.cp(tmp0_desc, 30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp51_input.cp(tmp0_desc, 31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp51_input.cp(tmp0_desc, 32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp51_input.cp(tmp0_desc, 33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp51_input.cp(tmp0_desc, 34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp51_input.cp(tmp0_desc, 35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp51_input.cp(tmp0_desc, 36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp51_input.cp(tmp0_desc, 37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp51_input.cp(tmp0_desc, 38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp51_input.cp(tmp0_desc, 39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp51_input.cp(tmp0_desc, 40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp51_input.cp(tmp0_desc, 41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp51_input.cp(tmp0_desc, 42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp51_input.cp(tmp0_desc, 43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp49_local44 = tmp51_input.cp(tmp0_desc, 44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
      tmp50_local45 = tmp51_input.cp(tmp0_desc, 45);
      tmp4_bitMask1 = tmp4_bitMask1 | 8192;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp51_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp51_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp51_input.cp(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp51_input.cp(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp51_input.cp(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp51_input.cp(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp51_input.cp(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp51_input.cp(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp51_input.cp(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp51_input.cp(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp51_input.cp(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp51_input.cp(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp51_input.cp(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp51_input.cp(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp51_input.cp(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp51_input.cp(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp51_input.cp(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp51_input.cp(tmp0_desc, 16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp51_input.cp(tmp0_desc, 17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp51_input.cp(tmp0_desc, 18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp51_input.cp(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp51_input.cp(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp51_input.cp(tmp0_desc, 21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp51_input.cp(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp51_input.cp(tmp0_desc, 23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp51_input.cp(tmp0_desc, 24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp51_input.cp(tmp0_desc, 25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp51_input.cp(tmp0_desc, 26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp51_input.cp(tmp0_desc, 27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp51_input.cp(tmp0_desc, 28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp51_input.cp(tmp0_desc, 29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp51_input.cp(tmp0_desc, 30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp51_input.cp(tmp0_desc, 31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp51_input.cp(tmp0_desc, 32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp51_input.cp(tmp0_desc, 33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp51_input.cp(tmp0_desc, 34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp51_input.cp(tmp0_desc, 35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp51_input.cp(tmp0_desc, 36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp51_input.cp(tmp0_desc, 37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp51_input.cp(tmp0_desc, 38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp51_input.cp(tmp0_desc, 39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp51_input.cp(tmp0_desc, 40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp51_input.cp(tmp0_desc, 41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp51_input.cp(tmp0_desc, 42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp51_input.cp(tmp0_desc, 43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          case 44:
            tmp49_local44 = tmp51_input.cp(tmp0_desc, 44);
            tmp4_bitMask1 = tmp4_bitMask1 | 4096;
            break;
          case 45:
            tmp50_local45 = tmp51_input.cp(tmp0_desc, 45);
            tmp4_bitMask1 = tmp4_bitMask1 | 8192;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp51_input.to(tmp0_desc);
    return PaxPaymentResponse.p20(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, tmp49_local44, tmp50_local45, null);
  }
  al() {
    return this.t1y_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class PaxPaymentResponse {
  constructor(authCode, approvedAmount, avsResponse, bogusAccountNum, cardType, cvResponse, hostCode, hostResponse, message, refNum, rawResponse, remainingBalance, extraBalance, requestedAmount, resultCode, resultTxt, timestamp, sigFileName, signData, transactionIntegrityClass, extData, giftCardType, transactionRemainingAmount, debitAccountType, hostDetailedMessage, gatewayTransactionID, retrievalReferenceNumber, maskedPAN, track1Data, track2Data, track3Data, edcType, paymentService2000, authorizationResponse, issuerResponseCode, ecrTransID, approvedTipAmount, approvedCashBackAmount, approvedMerchantFee, approvedTaxAmount, paymentAccountReferenceID, payloadData, hostTimeStamp, hostAccount, hostCardType, cardBin) {
    authCode = authCode === VOID ? '' : authCode;
    approvedAmount = approvedAmount === VOID ? '' : approvedAmount;
    avsResponse = avsResponse === VOID ? '' : avsResponse;
    bogusAccountNum = bogusAccountNum === VOID ? '' : bogusAccountNum;
    cardType = cardType === VOID ? '' : cardType;
    cvResponse = cvResponse === VOID ? '' : cvResponse;
    hostCode = hostCode === VOID ? '' : hostCode;
    hostResponse = hostResponse === VOID ? '' : hostResponse;
    message = message === VOID ? '' : message;
    refNum = refNum === VOID ? '' : refNum;
    rawResponse = rawResponse === VOID ? '' : rawResponse;
    remainingBalance = remainingBalance === VOID ? '' : remainingBalance;
    extraBalance = extraBalance === VOID ? '' : extraBalance;
    requestedAmount = requestedAmount === VOID ? '' : requestedAmount;
    resultCode = resultCode === VOID ? '' : resultCode;
    resultTxt = resultTxt === VOID ? '' : resultTxt;
    timestamp = timestamp === VOID ? '' : timestamp;
    sigFileName = sigFileName === VOID ? '' : sigFileName;
    signData = signData === VOID ? '' : signData;
    transactionIntegrityClass = transactionIntegrityClass === VOID ? '' : transactionIntegrityClass;
    extData = extData === VOID ? '' : extData;
    giftCardType = giftCardType === VOID ? '' : giftCardType;
    transactionRemainingAmount = transactionRemainingAmount === VOID ? '' : transactionRemainingAmount;
    debitAccountType = debitAccountType === VOID ? '' : debitAccountType;
    hostDetailedMessage = hostDetailedMessage === VOID ? '' : hostDetailedMessage;
    gatewayTransactionID = gatewayTransactionID === VOID ? '' : gatewayTransactionID;
    retrievalReferenceNumber = retrievalReferenceNumber === VOID ? '' : retrievalReferenceNumber;
    maskedPAN = maskedPAN === VOID ? '' : maskedPAN;
    track1Data = track1Data === VOID ? '' : track1Data;
    track2Data = track2Data === VOID ? '' : track2Data;
    track3Data = track3Data === VOID ? '' : track3Data;
    edcType = edcType === VOID ? '' : edcType;
    paymentService2000 = paymentService2000 === VOID ? '' : paymentService2000;
    authorizationResponse = authorizationResponse === VOID ? '' : authorizationResponse;
    issuerResponseCode = issuerResponseCode === VOID ? '' : issuerResponseCode;
    ecrTransID = ecrTransID === VOID ? '' : ecrTransID;
    approvedTipAmount = approvedTipAmount === VOID ? '' : approvedTipAmount;
    approvedCashBackAmount = approvedCashBackAmount === VOID ? '' : approvedCashBackAmount;
    approvedMerchantFee = approvedMerchantFee === VOID ? '' : approvedMerchantFee;
    approvedTaxAmount = approvedTaxAmount === VOID ? '' : approvedTaxAmount;
    paymentAccountReferenceID = paymentAccountReferenceID === VOID ? '' : paymentAccountReferenceID;
    payloadData = payloadData === VOID ? '' : payloadData;
    hostTimeStamp = hostTimeStamp === VOID ? '' : hostTimeStamp;
    hostAccount = hostAccount === VOID ? '' : hostAccount;
    hostCardType = hostCardType === VOID ? '' : hostCardType;
    cardBin = cardBin === VOID ? '' : cardBin;
    this.v1y_1 = authCode;
    this.w1y_1 = approvedAmount;
    this.x1y_1 = avsResponse;
    this.y1y_1 = bogusAccountNum;
    this.z1y_1 = cardType;
    this.a1z_1 = cvResponse;
    this.b1z_1 = hostCode;
    this.c1z_1 = hostResponse;
    this.d1z_1 = message;
    this.e1z_1 = refNum;
    this.f1z_1 = rawResponse;
    this.g1z_1 = remainingBalance;
    this.h1z_1 = extraBalance;
    this.i1z_1 = requestedAmount;
    this.j1z_1 = resultCode;
    this.k1z_1 = resultTxt;
    this.l1z_1 = timestamp;
    this.m1z_1 = sigFileName;
    this.n1z_1 = signData;
    this.o1z_1 = transactionIntegrityClass;
    this.p1z_1 = extData;
    this.q1z_1 = giftCardType;
    this.r1z_1 = transactionRemainingAmount;
    this.s1z_1 = debitAccountType;
    this.t1z_1 = hostDetailedMessage;
    this.u1z_1 = gatewayTransactionID;
    this.v1z_1 = retrievalReferenceNumber;
    this.w1z_1 = maskedPAN;
    this.x1z_1 = track1Data;
    this.y1z_1 = track2Data;
    this.z1z_1 = track3Data;
    this.a20_1 = edcType;
    this.b20_1 = paymentService2000;
    this.c20_1 = authorizationResponse;
    this.d20_1 = issuerResponseCode;
    this.e20_1 = ecrTransID;
    this.f20_1 = approvedTipAmount;
    this.g20_1 = approvedCashBackAmount;
    this.h20_1 = approvedMerchantFee;
    this.i20_1 = approvedTaxAmount;
    this.j20_1 = paymentAccountReferenceID;
    this.k20_1 = payloadData;
    this.l20_1 = hostTimeStamp;
    this.m20_1 = hostAccount;
    this.n20_1 = hostCardType;
    this.o20_1 = cardBin;
  }
  toString() {
    return 'PaxPaymentResponse(authCode=' + this.v1y_1 + ', approvedAmount=' + this.w1y_1 + ', avsResponse=' + this.x1y_1 + ', bogusAccountNum=' + this.y1y_1 + ', cardType=' + this.z1y_1 + ', cvResponse=' + this.a1z_1 + ', hostCode=' + this.b1z_1 + ', hostResponse=' + this.c1z_1 + ', message=' + this.d1z_1 + ', refNum=' + this.e1z_1 + ', rawResponse=' + this.f1z_1 + ', remainingBalance=' + this.g1z_1 + ', extraBalance=' + this.h1z_1 + ', requestedAmount=' + this.i1z_1 + ', resultCode=' + this.j1z_1 + ', resultTxt=' + this.k1z_1 + ', timestamp=' + this.l1z_1 + ', sigFileName=' + this.m1z_1 + ', signData=' + this.n1z_1 + ', transactionIntegrityClass=' + this.o1z_1 + ', extData=' + this.p1z_1 + ', giftCardType=' + this.q1z_1 + ', transactionRemainingAmount=' + this.r1z_1 + ', debitAccountType=' + this.s1z_1 + ', hostDetailedMessage=' + this.t1z_1 + ', gatewayTransactionID=' + this.u1z_1 + ', retrievalReferenceNumber=' + this.v1z_1 + ', maskedPAN=' + this.w1z_1 + ', track1Data=' + this.x1z_1 + ', track2Data=' + this.y1z_1 + ', track3Data=' + this.z1z_1 + ', edcType=' + this.a20_1 + ', paymentService2000=' + this.b20_1 + ', authorizationResponse=' + this.c20_1 + ', issuerResponseCode=' + this.d20_1 + ', ecrTransID=' + this.e20_1 + ', approvedTipAmount=' + this.f20_1 + ', approvedCashBackAmount=' + this.g20_1 + ', approvedMerchantFee=' + this.h20_1 + ', approvedTaxAmount=' + this.i20_1 + ', paymentAccountReferenceID=' + this.j20_1 + ', payloadData=' + this.k20_1 + ', hostTimeStamp=' + this.l20_1 + ', hostAccount=' + this.m20_1 + ', hostCardType=' + this.n20_1 + ', cardBin=' + this.o20_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.v1y_1);
    result = imul(result, 31) + getStringHashCode(this.w1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.e1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.n1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.o1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.p1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.q1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.r1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.s1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.t1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z1z_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.e20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.n20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.o20_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PaxPaymentResponse))
      return false;
    var tmp0_other_with_cast = other instanceof PaxPaymentResponse ? other : THROW_CCE();
    if (!(this.v1y_1 === tmp0_other_with_cast.v1y_1))
      return false;
    if (!(this.w1y_1 === tmp0_other_with_cast.w1y_1))
      return false;
    if (!(this.x1y_1 === tmp0_other_with_cast.x1y_1))
      return false;
    if (!(this.y1y_1 === tmp0_other_with_cast.y1y_1))
      return false;
    if (!(this.z1y_1 === tmp0_other_with_cast.z1y_1))
      return false;
    if (!(this.a1z_1 === tmp0_other_with_cast.a1z_1))
      return false;
    if (!(this.b1z_1 === tmp0_other_with_cast.b1z_1))
      return false;
    if (!(this.c1z_1 === tmp0_other_with_cast.c1z_1))
      return false;
    if (!(this.d1z_1 === tmp0_other_with_cast.d1z_1))
      return false;
    if (!(this.e1z_1 === tmp0_other_with_cast.e1z_1))
      return false;
    if (!(this.f1z_1 === tmp0_other_with_cast.f1z_1))
      return false;
    if (!(this.g1z_1 === tmp0_other_with_cast.g1z_1))
      return false;
    if (!(this.h1z_1 === tmp0_other_with_cast.h1z_1))
      return false;
    if (!(this.i1z_1 === tmp0_other_with_cast.i1z_1))
      return false;
    if (!(this.j1z_1 === tmp0_other_with_cast.j1z_1))
      return false;
    if (!(this.k1z_1 === tmp0_other_with_cast.k1z_1))
      return false;
    if (!(this.l1z_1 === tmp0_other_with_cast.l1z_1))
      return false;
    if (!(this.m1z_1 === tmp0_other_with_cast.m1z_1))
      return false;
    if (!(this.n1z_1 === tmp0_other_with_cast.n1z_1))
      return false;
    if (!(this.o1z_1 === tmp0_other_with_cast.o1z_1))
      return false;
    if (!(this.p1z_1 === tmp0_other_with_cast.p1z_1))
      return false;
    if (!(this.q1z_1 === tmp0_other_with_cast.q1z_1))
      return false;
    if (!(this.r1z_1 === tmp0_other_with_cast.r1z_1))
      return false;
    if (!(this.s1z_1 === tmp0_other_with_cast.s1z_1))
      return false;
    if (!(this.t1z_1 === tmp0_other_with_cast.t1z_1))
      return false;
    if (!(this.u1z_1 === tmp0_other_with_cast.u1z_1))
      return false;
    if (!(this.v1z_1 === tmp0_other_with_cast.v1z_1))
      return false;
    if (!(this.w1z_1 === tmp0_other_with_cast.w1z_1))
      return false;
    if (!(this.x1z_1 === tmp0_other_with_cast.x1z_1))
      return false;
    if (!(this.y1z_1 === tmp0_other_with_cast.y1z_1))
      return false;
    if (!(this.z1z_1 === tmp0_other_with_cast.z1z_1))
      return false;
    if (!(this.a20_1 === tmp0_other_with_cast.a20_1))
      return false;
    if (!(this.b20_1 === tmp0_other_with_cast.b20_1))
      return false;
    if (!(this.c20_1 === tmp0_other_with_cast.c20_1))
      return false;
    if (!(this.d20_1 === tmp0_other_with_cast.d20_1))
      return false;
    if (!(this.e20_1 === tmp0_other_with_cast.e20_1))
      return false;
    if (!(this.f20_1 === tmp0_other_with_cast.f20_1))
      return false;
    if (!(this.g20_1 === tmp0_other_with_cast.g20_1))
      return false;
    if (!(this.h20_1 === tmp0_other_with_cast.h20_1))
      return false;
    if (!(this.i20_1 === tmp0_other_with_cast.i20_1))
      return false;
    if (!(this.j20_1 === tmp0_other_with_cast.j20_1))
      return false;
    if (!(this.k20_1 === tmp0_other_with_cast.k20_1))
      return false;
    if (!(this.l20_1 === tmp0_other_with_cast.l20_1))
      return false;
    if (!(this.m20_1 === tmp0_other_with_cast.m20_1))
      return false;
    if (!(this.n20_1 === tmp0_other_with_cast.n20_1))
      return false;
    if (!(this.o20_1 === tmp0_other_with_cast.o20_1))
      return false;
    return true;
  }
  static p20(seen0, seen1, authCode, approvedAmount, avsResponse, bogusAccountNum, cardType, cvResponse, hostCode, hostResponse, message, refNum, rawResponse, remainingBalance, extraBalance, requestedAmount, resultCode, resultTxt, timestamp, sigFileName, signData, transactionIntegrityClass, extData, giftCardType, transactionRemainingAmount, debitAccountType, hostDetailedMessage, gatewayTransactionID, retrievalReferenceNumber, maskedPAN, track1Data, track2Data, track3Data, edcType, paymentService2000, authorizationResponse, issuerResponseCode, ecrTransID, approvedTipAmount, approvedCashBackAmount, approvedMerchantFee, approvedTaxAmount, paymentAccountReferenceID, payloadData, hostTimeStamp, hostAccount, hostCardType, cardBin, serializationConstructorMarker) {
    if (!!(!(0 === (0 & seen0)) | !(0 === (0 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([0, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_20().t1y_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.v1y_1 = '';
    else
      $this.v1y_1 = authCode;
    if (0 === (seen0 & 2))
      $this.w1y_1 = '';
    else
      $this.w1y_1 = approvedAmount;
    if (0 === (seen0 & 4))
      $this.x1y_1 = '';
    else
      $this.x1y_1 = avsResponse;
    if (0 === (seen0 & 8))
      $this.y1y_1 = '';
    else
      $this.y1y_1 = bogusAccountNum;
    if (0 === (seen0 & 16))
      $this.z1y_1 = '';
    else
      $this.z1y_1 = cardType;
    if (0 === (seen0 & 32))
      $this.a1z_1 = '';
    else
      $this.a1z_1 = cvResponse;
    if (0 === (seen0 & 64))
      $this.b1z_1 = '';
    else
      $this.b1z_1 = hostCode;
    if (0 === (seen0 & 128))
      $this.c1z_1 = '';
    else
      $this.c1z_1 = hostResponse;
    if (0 === (seen0 & 256))
      $this.d1z_1 = '';
    else
      $this.d1z_1 = message;
    if (0 === (seen0 & 512))
      $this.e1z_1 = '';
    else
      $this.e1z_1 = refNum;
    if (0 === (seen0 & 1024))
      $this.f1z_1 = '';
    else
      $this.f1z_1 = rawResponse;
    if (0 === (seen0 & 2048))
      $this.g1z_1 = '';
    else
      $this.g1z_1 = remainingBalance;
    if (0 === (seen0 & 4096))
      $this.h1z_1 = '';
    else
      $this.h1z_1 = extraBalance;
    if (0 === (seen0 & 8192))
      $this.i1z_1 = '';
    else
      $this.i1z_1 = requestedAmount;
    if (0 === (seen0 & 16384))
      $this.j1z_1 = '';
    else
      $this.j1z_1 = resultCode;
    if (0 === (seen0 & 32768))
      $this.k1z_1 = '';
    else
      $this.k1z_1 = resultTxt;
    if (0 === (seen0 & 65536))
      $this.l1z_1 = '';
    else
      $this.l1z_1 = timestamp;
    if (0 === (seen0 & 131072))
      $this.m1z_1 = '';
    else
      $this.m1z_1 = sigFileName;
    if (0 === (seen0 & 262144))
      $this.n1z_1 = '';
    else
      $this.n1z_1 = signData;
    if (0 === (seen0 & 524288))
      $this.o1z_1 = '';
    else
      $this.o1z_1 = transactionIntegrityClass;
    if (0 === (seen0 & 1048576))
      $this.p1z_1 = '';
    else
      $this.p1z_1 = extData;
    if (0 === (seen0 & 2097152))
      $this.q1z_1 = '';
    else
      $this.q1z_1 = giftCardType;
    if (0 === (seen0 & 4194304))
      $this.r1z_1 = '';
    else
      $this.r1z_1 = transactionRemainingAmount;
    if (0 === (seen0 & 8388608))
      $this.s1z_1 = '';
    else
      $this.s1z_1 = debitAccountType;
    if (0 === (seen0 & 16777216))
      $this.t1z_1 = '';
    else
      $this.t1z_1 = hostDetailedMessage;
    if (0 === (seen0 & 33554432))
      $this.u1z_1 = '';
    else
      $this.u1z_1 = gatewayTransactionID;
    if (0 === (seen0 & 67108864))
      $this.v1z_1 = '';
    else
      $this.v1z_1 = retrievalReferenceNumber;
    if (0 === (seen0 & 134217728))
      $this.w1z_1 = '';
    else
      $this.w1z_1 = maskedPAN;
    if (0 === (seen0 & 268435456))
      $this.x1z_1 = '';
    else
      $this.x1z_1 = track1Data;
    if (0 === (seen0 & 536870912))
      $this.y1z_1 = '';
    else
      $this.y1z_1 = track2Data;
    if (0 === (seen0 & 1073741824))
      $this.z1z_1 = '';
    else
      $this.z1z_1 = track3Data;
    if (0 === (seen0 & -2147483648))
      $this.a20_1 = '';
    else
      $this.a20_1 = edcType;
    if (0 === (seen1 & 1))
      $this.b20_1 = '';
    else
      $this.b20_1 = paymentService2000;
    if (0 === (seen1 & 2))
      $this.c20_1 = '';
    else
      $this.c20_1 = authorizationResponse;
    if (0 === (seen1 & 4))
      $this.d20_1 = '';
    else
      $this.d20_1 = issuerResponseCode;
    if (0 === (seen1 & 8))
      $this.e20_1 = '';
    else
      $this.e20_1 = ecrTransID;
    if (0 === (seen1 & 16))
      $this.f20_1 = '';
    else
      $this.f20_1 = approvedTipAmount;
    if (0 === (seen1 & 32))
      $this.g20_1 = '';
    else
      $this.g20_1 = approvedCashBackAmount;
    if (0 === (seen1 & 64))
      $this.h20_1 = '';
    else
      $this.h20_1 = approvedMerchantFee;
    if (0 === (seen1 & 128))
      $this.i20_1 = '';
    else
      $this.i20_1 = approvedTaxAmount;
    if (0 === (seen1 & 256))
      $this.j20_1 = '';
    else
      $this.j20_1 = paymentAccountReferenceID;
    if (0 === (seen1 & 512))
      $this.k20_1 = '';
    else
      $this.k20_1 = payloadData;
    if (0 === (seen1 & 1024))
      $this.l20_1 = '';
    else
      $this.l20_1 = hostTimeStamp;
    if (0 === (seen1 & 2048))
      $this.m20_1 = '';
    else
      $this.m20_1 = hostAccount;
    if (0 === (seen1 & 4096))
      $this.n20_1 = '';
    else
      $this.n20_1 = hostCardType;
    if (0 === (seen1 & 8192))
      $this.o20_1 = '';
    else
      $this.o20_1 = cardBin;
    return $this;
  }
}
class Companion_21 {}
class $serializer_21 {
  constructor() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.CloverPaymentResponse', this, 5);
    tmp0_serialDesc.aw('message', true);
    tmp0_serialDesc.aw('requestId', true);
    tmp0_serialDesc.aw('requestType', true);
    tmp0_serialDesc.aw('type', true);
    tmp0_serialDesc.aw('payment', true);
    this.q20_1 = tmp0_serialDesc;
  }
  r20(encoder, value) {
    var tmp0_desc = this.q20_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.s20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.s20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.t20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.t20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.u20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.u20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.v20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.v20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.w20_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, $serializer_getInstance_22(), value.w20_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.r20(encoder, value instanceof CloverPaymentResponse ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.q20_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.so(tmp0_desc);
    if (tmp9_input.ip()) {
      tmp4_local0 = tmp9_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.cp(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.cp(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.cp(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.gp(tmp0_desc, 4, $serializer_getInstance_22(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.cp(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.cp(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.cp(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.gp(tmp0_desc, 4, $serializer_getInstance_22(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp9_input.to(tmp0_desc);
    return CloverPaymentResponse.x20(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  al() {
    return this.q20_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable($serializer_getInstance_22())];
  }
}
class CloverPaymentResponse {
  constructor(message, requestId, requestType, type, payment) {
    message = message === VOID ? '' : message;
    requestId = requestId === VOID ? '' : requestId;
    requestType = requestType === VOID ? '' : requestType;
    type = type === VOID ? '' : type;
    payment = payment === VOID ? null : payment;
    this.s20_1 = message;
    this.t20_1 = requestId;
    this.u20_1 = requestType;
    this.v20_1 = type;
    this.w20_1 = payment;
  }
  toString() {
    return 'CloverPaymentResponse(message=' + this.s20_1 + ', requestId=' + this.t20_1 + ', requestType=' + this.u20_1 + ', type=' + this.v20_1 + ', payment=' + toString_0(this.w20_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.s20_1);
    result = imul(result, 31) + getStringHashCode(this.t20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v20_1) | 0;
    result = imul(result, 31) + (this.w20_1 == null ? 0 : this.w20_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CloverPaymentResponse))
      return false;
    var tmp0_other_with_cast = other instanceof CloverPaymentResponse ? other : THROW_CCE();
    if (!(this.s20_1 === tmp0_other_with_cast.s20_1))
      return false;
    if (!(this.t20_1 === tmp0_other_with_cast.t20_1))
      return false;
    if (!(this.u20_1 === tmp0_other_with_cast.u20_1))
      return false;
    if (!(this.v20_1 === tmp0_other_with_cast.v20_1))
      return false;
    if (!equals(this.w20_1, tmp0_other_with_cast.w20_1))
      return false;
    return true;
  }
  static x20(seen0, message, requestId, requestType, type, payment, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_21().q20_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.s20_1 = '';
    else
      $this.s20_1 = message;
    if (0 === (seen0 & 2))
      $this.t20_1 = '';
    else
      $this.t20_1 = requestId;
    if (0 === (seen0 & 4))
      $this.u20_1 = '';
    else
      $this.u20_1 = requestType;
    if (0 === (seen0 & 8))
      $this.v20_1 = '';
    else
      $this.v20_1 = type;
    if (0 === (seen0 & 16))
      $this.w20_1 = null;
    else
      $this.w20_1 = payment;
    return $this;
  }
}
class Companion_22 {}
class $serializer_22 {
  constructor() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.PaymentInfo', this, 12);
    tmp0_serialDesc.aw('amount', true);
    tmp0_serialDesc.aw('cardTransaction', false);
    tmp0_serialDesc.aw('createdTime', true);
    tmp0_serialDesc.aw('employee', false);
    tmp0_serialDesc.aw('externalPaymentId', true);
    tmp0_serialDesc.aw('id', true);
    tmp0_serialDesc.aw('offline', true);
    tmp0_serialDesc.aw('order', false);
    tmp0_serialDesc.aw('result', true);
    tmp0_serialDesc.aw('taxAmount', true);
    tmp0_serialDesc.aw('tender', false);
    tmp0_serialDesc.aw('tipAmount', true);
    this.y20_1 = tmp0_serialDesc;
  }
  z20(encoder, value) {
    var tmp0_desc = this.y20_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !value.a21_1.equals(new Long(0, 0))) {
      tmp1_output.dq(tmp0_desc, 0, value.a21_1);
    }
    tmp1_output.jq(tmp0_desc, 1, $serializer_getInstance_23(), value.b21_1);
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !value.c21_1.equals(new Long(0, 0))) {
      tmp1_output.dq(tmp0_desc, 2, value.c21_1);
    }
    tmp1_output.jq(tmp0_desc, 3, $serializer_getInstance_25(), value.d21_1);
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.e21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.e21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.f21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 5, value.f21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.g21_1 === false)) {
      tmp1_output.zp(tmp0_desc, 6, value.g21_1);
    }
    tmp1_output.jq(tmp0_desc, 7, $serializer_getInstance_26(), value.h21_1);
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.i21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 8, value.i21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !value.j21_1.equals(new Long(0, 0))) {
      tmp1_output.dq(tmp0_desc, 9, value.j21_1);
    }
    tmp1_output.jq(tmp0_desc, 10, $serializer_getInstance_27(), value.k21_1);
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !value.l21_1.equals(new Long(0, 0))) {
      tmp1_output.dq(tmp0_desc, 11, value.l21_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.z20(encoder, value instanceof PaymentInfo ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.y20_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = new Long(0, 0);
    var tmp5_local1 = null;
    var tmp6_local2 = new Long(0, 0);
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = false;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = new Long(0, 0);
    var tmp14_local10 = null;
    var tmp15_local11 = new Long(0, 0);
    var tmp16_input = decoder.so(tmp0_desc);
    if (tmp16_input.ip()) {
      tmp4_local0 = tmp16_input.yo(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp16_input.ep(tmp0_desc, 1, $serializer_getInstance_23(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp16_input.yo(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp16_input.ep(tmp0_desc, 3, $serializer_getInstance_25(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp16_input.cp(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp16_input.cp(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp16_input.uo(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp16_input.ep(tmp0_desc, 7, $serializer_getInstance_26(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp16_input.cp(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp16_input.yo(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp16_input.ep(tmp0_desc, 10, $serializer_getInstance_27(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp16_input.yo(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp16_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp16_input.yo(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp16_input.ep(tmp0_desc, 1, $serializer_getInstance_23(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp16_input.yo(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp16_input.ep(tmp0_desc, 3, $serializer_getInstance_25(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp16_input.cp(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp16_input.cp(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp16_input.uo(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp16_input.ep(tmp0_desc, 7, $serializer_getInstance_26(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp16_input.cp(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp16_input.yo(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp16_input.ep(tmp0_desc, 10, $serializer_getInstance_27(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp16_input.yo(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp16_input.to(tmp0_desc);
    return PaymentInfo.m21(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, null);
  }
  al() {
    return this.y20_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [LongSerializer_getInstance(), $serializer_getInstance_23(), LongSerializer_getInstance(), $serializer_getInstance_25(), StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), $serializer_getInstance_26(), StringSerializer_getInstance(), LongSerializer_getInstance(), $serializer_getInstance_27(), LongSerializer_getInstance()];
  }
}
class PaymentInfo {
  toString() {
    return 'PaymentInfo(amount=' + this.a21_1.toString() + ', cardTransaction=' + this.b21_1.toString() + ', createdTime=' + this.c21_1.toString() + ', employee=' + this.d21_1.toString() + ', externalPaymentId=' + this.e21_1 + ', id=' + this.f21_1 + ', offline=' + this.g21_1 + ', order=' + this.h21_1.toString() + ', result=' + this.i21_1 + ', taxAmount=' + this.j21_1.toString() + ', tender=' + this.k21_1.toString() + ', tipAmount=' + this.l21_1.toString() + ')';
  }
  hashCode() {
    var result = this.a21_1.hashCode();
    result = imul(result, 31) + this.b21_1.hashCode() | 0;
    result = imul(result, 31) + this.c21_1.hashCode() | 0;
    result = imul(result, 31) + this.d21_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.e21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f21_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g21_1) | 0;
    result = imul(result, 31) + this.h21_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.i21_1) | 0;
    result = imul(result, 31) + this.j21_1.hashCode() | 0;
    result = imul(result, 31) + this.k21_1.hashCode() | 0;
    result = imul(result, 31) + this.l21_1.hashCode() | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PaymentInfo))
      return false;
    var tmp0_other_with_cast = other instanceof PaymentInfo ? other : THROW_CCE();
    if (!this.a21_1.equals(tmp0_other_with_cast.a21_1))
      return false;
    if (!this.b21_1.equals(tmp0_other_with_cast.b21_1))
      return false;
    if (!this.c21_1.equals(tmp0_other_with_cast.c21_1))
      return false;
    if (!this.d21_1.equals(tmp0_other_with_cast.d21_1))
      return false;
    if (!(this.e21_1 === tmp0_other_with_cast.e21_1))
      return false;
    if (!(this.f21_1 === tmp0_other_with_cast.f21_1))
      return false;
    if (!(this.g21_1 === tmp0_other_with_cast.g21_1))
      return false;
    if (!this.h21_1.equals(tmp0_other_with_cast.h21_1))
      return false;
    if (!(this.i21_1 === tmp0_other_with_cast.i21_1))
      return false;
    if (!this.j21_1.equals(tmp0_other_with_cast.j21_1))
      return false;
    if (!this.k21_1.equals(tmp0_other_with_cast.k21_1))
      return false;
    if (!this.l21_1.equals(tmp0_other_with_cast.l21_1))
      return false;
    return true;
  }
  static m21(seen0, amount, cardTransaction, createdTime, employee, externalPaymentId, id, offline, order, result, taxAmount, tender, tipAmount, serializationConstructorMarker) {
    if (!(1162 === (1162 & seen0))) {
      throwMissingFieldException(seen0, 1162, $serializer_getInstance_22().y20_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.a21_1 = new Long(0, 0);
    else
      $this.a21_1 = amount;
    $this.b21_1 = cardTransaction;
    if (0 === (seen0 & 4))
      $this.c21_1 = new Long(0, 0);
    else
      $this.c21_1 = createdTime;
    $this.d21_1 = employee;
    if (0 === (seen0 & 16))
      $this.e21_1 = '';
    else
      $this.e21_1 = externalPaymentId;
    if (0 === (seen0 & 32))
      $this.f21_1 = '';
    else
      $this.f21_1 = id;
    if (0 === (seen0 & 64))
      $this.g21_1 = false;
    else
      $this.g21_1 = offline;
    $this.h21_1 = order;
    if (0 === (seen0 & 256))
      $this.i21_1 = '';
    else
      $this.i21_1 = result;
    if (0 === (seen0 & 512))
      $this.j21_1 = new Long(0, 0);
    else
      $this.j21_1 = taxAmount;
    $this.k21_1 = tender;
    if (0 === (seen0 & 2048))
      $this.l21_1 = new Long(0, 0);
    else
      $this.l21_1 = tipAmount;
    return $this;
  }
}
class Companion_23 {}
class $serializer_23 {
  constructor() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.CardTransaction', this, 12);
    tmp0_serialDesc.aw('authCode', true);
    tmp0_serialDesc.aw('cardType', true);
    tmp0_serialDesc.aw('cardholderName', true);
    tmp0_serialDesc.aw('entryType', true);
    tmp0_serialDesc.aw('extra', false);
    tmp0_serialDesc.aw('first6', true);
    tmp0_serialDesc.aw('last4', true);
    tmp0_serialDesc.aw('referenceId', true);
    tmp0_serialDesc.aw('state', true);
    tmp0_serialDesc.aw('token', true);
    tmp0_serialDesc.aw('transactionNo', true);
    tmp0_serialDesc.aw('type', true);
    this.n21_1 = tmp0_serialDesc;
  }
  o21(encoder, value) {
    var tmp0_desc = this.n21_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.p21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.p21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.q21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.q21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.r21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.r21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.s21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.s21_1);
    }
    tmp1_output.jq(tmp0_desc, 4, $serializer_getInstance_24(), value.t21_1);
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.u21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 5, value.u21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.v21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 6, value.v21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.w21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 7, value.w21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.x21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 8, value.x21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.y21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 9, value.y21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.z21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 10, value.z21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.a22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 11, value.a22_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.o21(encoder, value instanceof CardTransaction ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.n21_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_input = decoder.so(tmp0_desc);
    if (tmp16_input.ip()) {
      tmp4_local0 = tmp16_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp16_input.cp(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp16_input.cp(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp16_input.cp(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp16_input.ep(tmp0_desc, 4, $serializer_getInstance_24(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp16_input.cp(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp16_input.cp(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp16_input.cp(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp16_input.cp(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp16_input.cp(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp16_input.cp(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp16_input.cp(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp16_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp16_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp16_input.cp(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp16_input.cp(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp16_input.cp(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp16_input.ep(tmp0_desc, 4, $serializer_getInstance_24(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp16_input.cp(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp16_input.cp(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp16_input.cp(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp16_input.cp(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp16_input.cp(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp16_input.cp(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp16_input.cp(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp16_input.to(tmp0_desc);
    return CardTransaction.b22(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, null);
  }
  al() {
    return this.n21_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_24(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class CardTransaction {
  toString() {
    return 'CardTransaction(authCode=' + this.p21_1 + ', cardType=' + this.q21_1 + ', cardholderName=' + this.r21_1 + ', entryType=' + this.s21_1 + ', extra=' + this.t21_1.toString() + ', first6=' + this.u21_1 + ', last4=' + this.v21_1 + ', referenceId=' + this.w21_1 + ', state=' + this.x21_1 + ', token=' + this.y21_1 + ', transactionNo=' + this.z21_1 + ', type=' + this.a22_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.p21_1);
    result = imul(result, 31) + getStringHashCode(this.q21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.r21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.s21_1) | 0;
    result = imul(result, 31) + this.t21_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.u21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a22_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CardTransaction))
      return false;
    var tmp0_other_with_cast = other instanceof CardTransaction ? other : THROW_CCE();
    if (!(this.p21_1 === tmp0_other_with_cast.p21_1))
      return false;
    if (!(this.q21_1 === tmp0_other_with_cast.q21_1))
      return false;
    if (!(this.r21_1 === tmp0_other_with_cast.r21_1))
      return false;
    if (!(this.s21_1 === tmp0_other_with_cast.s21_1))
      return false;
    if (!this.t21_1.equals(tmp0_other_with_cast.t21_1))
      return false;
    if (!(this.u21_1 === tmp0_other_with_cast.u21_1))
      return false;
    if (!(this.v21_1 === tmp0_other_with_cast.v21_1))
      return false;
    if (!(this.w21_1 === tmp0_other_with_cast.w21_1))
      return false;
    if (!(this.x21_1 === tmp0_other_with_cast.x21_1))
      return false;
    if (!(this.y21_1 === tmp0_other_with_cast.y21_1))
      return false;
    if (!(this.z21_1 === tmp0_other_with_cast.z21_1))
      return false;
    if (!(this.a22_1 === tmp0_other_with_cast.a22_1))
      return false;
    return true;
  }
  static b22(seen0, authCode, cardType, cardholderName, entryType, extra, first6, last4, referenceId, state, token, transactionNo, type, serializationConstructorMarker) {
    if (!(16 === (16 & seen0))) {
      throwMissingFieldException(seen0, 16, $serializer_getInstance_23().n21_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.p21_1 = '';
    else
      $this.p21_1 = authCode;
    if (0 === (seen0 & 2))
      $this.q21_1 = '';
    else
      $this.q21_1 = cardType;
    if (0 === (seen0 & 4))
      $this.r21_1 = '';
    else
      $this.r21_1 = cardholderName;
    if (0 === (seen0 & 8))
      $this.s21_1 = '';
    else
      $this.s21_1 = entryType;
    $this.t21_1 = extra;
    if (0 === (seen0 & 32))
      $this.u21_1 = '';
    else
      $this.u21_1 = first6;
    if (0 === (seen0 & 64))
      $this.v21_1 = '';
    else
      $this.v21_1 = last4;
    if (0 === (seen0 & 128))
      $this.w21_1 = '';
    else
      $this.w21_1 = referenceId;
    if (0 === (seen0 & 256))
      $this.x21_1 = '';
    else
      $this.x21_1 = state;
    if (0 === (seen0 & 512))
      $this.y21_1 = '';
    else
      $this.y21_1 = token;
    if (0 === (seen0 & 1024))
      $this.z21_1 = '';
    else
      $this.z21_1 = transactionNo;
    if (0 === (seen0 & 2048))
      $this.a22_1 = '';
    else
      $this.a22_1 = type;
    return $this;
  }
}
class Companion_24 {}
class $serializer_24 {
  constructor() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.Extra', this, 3);
    tmp0_serialDesc.aw('authorizingNetworkName', true);
    tmp0_serialDesc.aw('cvmResult', true);
    tmp0_serialDesc.aw('card', true);
    this.c22_1 = tmp0_serialDesc;
  }
  d22(encoder, value) {
    var tmp0_desc = this.c22_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.e22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.e22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.f22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.f22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.g22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.g22_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.d22(encoder, value instanceof Extra ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.c22_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.so(tmp0_desc);
    if (tmp7_input.ip()) {
      tmp4_local0 = tmp7_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.cp(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.cp(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.cp(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.cp(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp7_input.to(tmp0_desc);
    return Extra.h22(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  al() {
    return this.c22_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class Extra {
  constructor(authorizingNetworkName, cvmResult, card) {
    authorizingNetworkName = authorizingNetworkName === VOID ? '' : authorizingNetworkName;
    cvmResult = cvmResult === VOID ? '' : cvmResult;
    card = card === VOID ? '' : card;
    this.e22_1 = authorizingNetworkName;
    this.f22_1 = cvmResult;
    this.g22_1 = card;
  }
  toString() {
    return 'Extra(authorizingNetworkName=' + this.e22_1 + ', cvmResult=' + this.f22_1 + ', card=' + this.g22_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.e22_1);
    result = imul(result, 31) + getStringHashCode(this.f22_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g22_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Extra))
      return false;
    var tmp0_other_with_cast = other instanceof Extra ? other : THROW_CCE();
    if (!(this.e22_1 === tmp0_other_with_cast.e22_1))
      return false;
    if (!(this.f22_1 === tmp0_other_with_cast.f22_1))
      return false;
    if (!(this.g22_1 === tmp0_other_with_cast.g22_1))
      return false;
    return true;
  }
  static h22(seen0, authorizingNetworkName, cvmResult, card, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_24().c22_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.e22_1 = '';
    else
      $this.e22_1 = authorizingNetworkName;
    if (0 === (seen0 & 2))
      $this.f22_1 = '';
    else
      $this.f22_1 = cvmResult;
    if (0 === (seen0 & 4))
      $this.g22_1 = '';
    else
      $this.g22_1 = card;
    return $this;
  }
}
class Companion_25 {}
class $serializer_25 {
  constructor() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.Employee', this, 1);
    tmp0_serialDesc.aw('id', true);
    this.i22_1 = tmp0_serialDesc;
  }
  j22(encoder, value) {
    var tmp0_desc = this.i22_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.k22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.k22_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.j22(encoder, value instanceof Employee ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.i22_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.so(tmp0_desc);
    if (tmp5_input.ip()) {
      tmp4_local0 = tmp5_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp5_input.to(tmp0_desc);
    return Employee.l22(tmp3_bitMask0, tmp4_local0, null);
  }
  al() {
    return this.i22_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class Employee {
  constructor(id) {
    id = id === VOID ? '' : id;
    this.k22_1 = id;
  }
  toString() {
    return 'Employee(id=' + this.k22_1 + ')';
  }
  hashCode() {
    return getStringHashCode(this.k22_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Employee))
      return false;
    var tmp0_other_with_cast = other instanceof Employee ? other : THROW_CCE();
    if (!(this.k22_1 === tmp0_other_with_cast.k22_1))
      return false;
    return true;
  }
  static l22(seen0, id, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_25().i22_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.k22_1 = '';
    else
      $this.k22_1 = id;
    return $this;
  }
}
class Companion_26 {}
class $serializer_26 {
  constructor() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.Order', this, 1);
    tmp0_serialDesc.aw('id', true);
    this.m22_1 = tmp0_serialDesc;
  }
  n22(encoder, value) {
    var tmp0_desc = this.m22_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.o22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.o22_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.n22(encoder, value instanceof Order ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.m22_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.so(tmp0_desc);
    if (tmp5_input.ip()) {
      tmp4_local0 = tmp5_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp5_input.to(tmp0_desc);
    return Order.p22(tmp3_bitMask0, tmp4_local0, null);
  }
  al() {
    return this.m22_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class Order {
  constructor(id) {
    id = id === VOID ? '' : id;
    this.o22_1 = id;
  }
  toString() {
    return 'Order(id=' + this.o22_1 + ')';
  }
  hashCode() {
    return getStringHashCode(this.o22_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Order))
      return false;
    var tmp0_other_with_cast = other instanceof Order ? other : THROW_CCE();
    if (!(this.o22_1 === tmp0_other_with_cast.o22_1))
      return false;
    return true;
  }
  static p22(seen0, id, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_26().m22_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.o22_1 = '';
    else
      $this.o22_1 = id;
    return $this;
  }
}
class Companion_27 {}
class $serializer_27 {
  constructor() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.Tender', this, 4);
    tmp0_serialDesc.aw('id', true);
    tmp0_serialDesc.aw('label', true);
    tmp0_serialDesc.aw('labelKey', true);
    tmp0_serialDesc.aw('opensCashDrawer', true);
    this.q22_1 = tmp0_serialDesc;
  }
  r22(encoder, value) {
    var tmp0_desc = this.q22_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.s22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.s22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.t22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.t22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.u22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.u22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.v22_1 === false)) {
      tmp1_output.zp(tmp0_desc, 3, value.v22_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.r22(encoder, value instanceof Tender ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.q22_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_input = decoder.so(tmp0_desc);
    if (tmp8_input.ip()) {
      tmp4_local0 = tmp8_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.cp(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.cp(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.uo(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.cp(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.cp(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.uo(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp8_input.to(tmp0_desc);
    return Tender.w22(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  al() {
    return this.q22_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
  }
}
class Tender {
  constructor(id, label, labelKey, opensCashDrawer) {
    id = id === VOID ? '' : id;
    label = label === VOID ? '' : label;
    labelKey = labelKey === VOID ? '' : labelKey;
    opensCashDrawer = opensCashDrawer === VOID ? false : opensCashDrawer;
    this.s22_1 = id;
    this.t22_1 = label;
    this.u22_1 = labelKey;
    this.v22_1 = opensCashDrawer;
  }
  toString() {
    return 'Tender(id=' + this.s22_1 + ', label=' + this.t22_1 + ', labelKey=' + this.u22_1 + ', opensCashDrawer=' + this.v22_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.s22_1);
    result = imul(result, 31) + getStringHashCode(this.t22_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u22_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.v22_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Tender))
      return false;
    var tmp0_other_with_cast = other instanceof Tender ? other : THROW_CCE();
    if (!(this.s22_1 === tmp0_other_with_cast.s22_1))
      return false;
    if (!(this.t22_1 === tmp0_other_with_cast.t22_1))
      return false;
    if (!(this.u22_1 === tmp0_other_with_cast.u22_1))
      return false;
    if (!(this.v22_1 === tmp0_other_with_cast.v22_1))
      return false;
    return true;
  }
  static w22(seen0, id, label, labelKey, opensCashDrawer, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().q22_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.s22_1 = '';
    else
      $this.s22_1 = id;
    if (0 === (seen0 & 2))
      $this.t22_1 = '';
    else
      $this.t22_1 = label;
    if (0 === (seen0 & 4))
      $this.u22_1 = '';
    else
      $this.u22_1 = labelKey;
    if (0 === (seen0 & 8))
      $this.v22_1 = false;
    else
      $this.v22_1 = opensCashDrawer;
    return $this;
  }
}
class Companion_28 {}
class $serializer_28 {
  constructor() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.RazorPayEdcStatusResponse', this, 36);
    tmp0_serialDesc.aw('success', true);
    tmp0_serialDesc.aw('status', true);
    tmp0_serialDesc.aw('messageCode', true);
    tmp0_serialDesc.aw('message', true);
    tmp0_serialDesc.aw('errorCode', true);
    tmp0_serialDesc.aw('errorMessage', true);
    tmp0_serialDesc.aw('realCode', true);
    tmp0_serialDesc.aw('apiMessageTitle', true);
    tmp0_serialDesc.aw('apiMessage', true);
    tmp0_serialDesc.aw('apiMessageText', true);
    tmp0_serialDesc.aw('apiWarning', true);
    tmp0_serialDesc.aw('origP2pRequestId', true);
    tmp0_serialDesc.aw('tid', true);
    tmp0_serialDesc.aw('authCode', true);
    tmp0_serialDesc.aw('batchNumber', true);
    tmp0_serialDesc.aw('cardLastFourDigit', true);
    tmp0_serialDesc.aw('currencyCode', true);
    tmp0_serialDesc.aw('customerName', true);
    tmp0_serialDesc.aw('customerEmail', true);
    tmp0_serialDesc.aw('customerReceiptUrl', true);
    tmp0_serialDesc.aw('deviceSerial', true);
    tmp0_serialDesc.aw('externalRefNumber', true);
    tmp0_serialDesc.aw('txnId', true);
    tmp0_serialDesc.aw('merchantName', true);
    tmp0_serialDesc.aw('mid', true);
    tmp0_serialDesc.aw('merchantCode', true);
    tmp0_serialDesc.aw('payerName', true);
    tmp0_serialDesc.aw('paymentCardBin', true);
    tmp0_serialDesc.aw('paymentCardBrand', true);
    tmp0_serialDesc.aw('paymentCardType', true);
    tmp0_serialDesc.aw('paymentMode', true);
    tmp0_serialDesc.aw('voidable', true);
    tmp0_serialDesc.aw('refundable', true);
    tmp0_serialDesc.aw('onlineRefundable', true);
    tmp0_serialDesc.aw('invoiceNumber', true);
    tmp0_serialDesc.aw('cardType', true);
    this.x22_1 = tmp0_serialDesc;
  }
  y22(encoder, value) {
    var tmp0_desc = this.x22_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.z22_1 === false)) {
      tmp1_output.zp(tmp0_desc, 0, value.z22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.a23_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.a23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.b23_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.b23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.c23_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.c23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.d23_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.d23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.e23_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.e23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.f23_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.f23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.g23_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.g23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.h23_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.h23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.i23_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.i23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.j23_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.j23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.k23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 11, value.k23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.l23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 12, value.l23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.m23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 13, value.m23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.n23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 14, value.n23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.o23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 15, value.o23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !(value.p23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 16, value.p23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !(value.q23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 17, value.q23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !(value.r23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 18, value.r23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !(value.s23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 19, value.s23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !(value.t23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 20, value.t23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.u23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 21, value.u23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 22) ? true : !(value.v23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 22, value.v23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 23) ? true : !(value.w23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 23, value.w23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 24) ? true : !(value.x23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 24, value.x23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 25) ? true : !(value.y23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 25, value.y23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 26) ? true : !(value.z23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 26, value.z23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 27) ? true : !(value.a24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 27, value.a24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 28) ? true : !(value.b24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 28, value.b24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 29) ? true : !(value.c24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 29, value.c24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 30) ? true : !(value.d24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 30, value.d24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 31) ? true : !(value.e24_1 === false)) {
      tmp1_output.zp(tmp0_desc, 31, value.e24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 32) ? true : !(value.f24_1 === false)) {
      tmp1_output.zp(tmp0_desc, 32, value.f24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 33) ? true : !(value.g24_1 === false)) {
      tmp1_output.zp(tmp0_desc, 33, value.g24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 34) ? true : !(value.h24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 34, value.h24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 35) ? true : !(value.i24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 35, value.i24_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.y22(encoder, value instanceof RazorPayEdcStatusResponse ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.x22_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = false;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = false;
    var tmp37_local32 = false;
    var tmp38_local33 = false;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_input = decoder.so(tmp0_desc);
    if (tmp41_input.ip()) {
      tmp5_local0 = tmp41_input.uo(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp41_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp41_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp41_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp41_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp41_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp41_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp41_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp41_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp41_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp41_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp41_input.cp(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp41_input.cp(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp41_input.cp(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp41_input.cp(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp41_input.cp(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp41_input.cp(tmp0_desc, 16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp41_input.cp(tmp0_desc, 17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp41_input.cp(tmp0_desc, 18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp41_input.cp(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp41_input.cp(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp41_input.cp(tmp0_desc, 21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp41_input.cp(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp41_input.cp(tmp0_desc, 23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp41_input.cp(tmp0_desc, 24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp41_input.cp(tmp0_desc, 25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp41_input.cp(tmp0_desc, 26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp41_input.cp(tmp0_desc, 27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp41_input.cp(tmp0_desc, 28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp41_input.cp(tmp0_desc, 29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp41_input.cp(tmp0_desc, 30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp41_input.uo(tmp0_desc, 31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp41_input.uo(tmp0_desc, 32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp41_input.uo(tmp0_desc, 33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp41_input.cp(tmp0_desc, 34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp41_input.cp(tmp0_desc, 35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp41_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp41_input.uo(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp41_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp41_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp41_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp41_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp41_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp41_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp41_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp41_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp41_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp41_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp41_input.cp(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp41_input.cp(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp41_input.cp(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp41_input.cp(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp41_input.cp(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp41_input.cp(tmp0_desc, 16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp41_input.cp(tmp0_desc, 17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp41_input.cp(tmp0_desc, 18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp41_input.cp(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp41_input.cp(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp41_input.cp(tmp0_desc, 21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp41_input.cp(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp41_input.cp(tmp0_desc, 23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp41_input.cp(tmp0_desc, 24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp41_input.cp(tmp0_desc, 25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp41_input.cp(tmp0_desc, 26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp41_input.cp(tmp0_desc, 27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp41_input.cp(tmp0_desc, 28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp41_input.cp(tmp0_desc, 29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp41_input.cp(tmp0_desc, 30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp41_input.uo(tmp0_desc, 31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp41_input.uo(tmp0_desc, 32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp41_input.uo(tmp0_desc, 33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp41_input.cp(tmp0_desc, 34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp41_input.cp(tmp0_desc, 35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp41_input.to(tmp0_desc);
    return RazorPayEdcStatusResponse.j24(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, null);
  }
  al() {
    return this.x22_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class RazorPayEdcStatusResponse {
  constructor(success, status, messageCode, message, errorCode, errorMessage, realCode, apiMessageTitle, apiMessage, apiMessageText, apiWarning, origP2pRequestId, tid, authCode, batchNumber, cardLastFourDigit, currencyCode, customerName, customerEmail, customerReceiptUrl, deviceSerial, externalRefNumber, txnId, merchantName, mid, merchantCode, payerName, paymentCardBin, paymentCardBrand, paymentCardType, paymentMode, voidable, refundable, onlineRefundable, invoiceNumber, cardType) {
    success = success === VOID ? false : success;
    status = status === VOID ? null : status;
    messageCode = messageCode === VOID ? null : messageCode;
    message = message === VOID ? null : message;
    errorCode = errorCode === VOID ? null : errorCode;
    errorMessage = errorMessage === VOID ? null : errorMessage;
    realCode = realCode === VOID ? null : realCode;
    apiMessageTitle = apiMessageTitle === VOID ? null : apiMessageTitle;
    apiMessage = apiMessage === VOID ? null : apiMessage;
    apiMessageText = apiMessageText === VOID ? null : apiMessageText;
    apiWarning = apiWarning === VOID ? null : apiWarning;
    origP2pRequestId = origP2pRequestId === VOID ? '' : origP2pRequestId;
    tid = tid === VOID ? '' : tid;
    authCode = authCode === VOID ? '' : authCode;
    batchNumber = batchNumber === VOID ? '' : batchNumber;
    cardLastFourDigit = cardLastFourDigit === VOID ? '' : cardLastFourDigit;
    currencyCode = currencyCode === VOID ? '' : currencyCode;
    customerName = customerName === VOID ? '' : customerName;
    customerEmail = customerEmail === VOID ? '' : customerEmail;
    customerReceiptUrl = customerReceiptUrl === VOID ? '' : customerReceiptUrl;
    deviceSerial = deviceSerial === VOID ? '' : deviceSerial;
    externalRefNumber = externalRefNumber === VOID ? '' : externalRefNumber;
    txnId = txnId === VOID ? '' : txnId;
    merchantName = merchantName === VOID ? '' : merchantName;
    mid = mid === VOID ? '' : mid;
    merchantCode = merchantCode === VOID ? '' : merchantCode;
    payerName = payerName === VOID ? '' : payerName;
    paymentCardBin = paymentCardBin === VOID ? '' : paymentCardBin;
    paymentCardBrand = paymentCardBrand === VOID ? '' : paymentCardBrand;
    paymentCardType = paymentCardType === VOID ? '' : paymentCardType;
    paymentMode = paymentMode === VOID ? '' : paymentMode;
    voidable = voidable === VOID ? false : voidable;
    refundable = refundable === VOID ? false : refundable;
    onlineRefundable = onlineRefundable === VOID ? false : onlineRefundable;
    invoiceNumber = invoiceNumber === VOID ? '' : invoiceNumber;
    cardType = cardType === VOID ? '' : cardType;
    this.z22_1 = success;
    this.a23_1 = status;
    this.b23_1 = messageCode;
    this.c23_1 = message;
    this.d23_1 = errorCode;
    this.e23_1 = errorMessage;
    this.f23_1 = realCode;
    this.g23_1 = apiMessageTitle;
    this.h23_1 = apiMessage;
    this.i23_1 = apiMessageText;
    this.j23_1 = apiWarning;
    this.k23_1 = origP2pRequestId;
    this.l23_1 = tid;
    this.m23_1 = authCode;
    this.n23_1 = batchNumber;
    this.o23_1 = cardLastFourDigit;
    this.p23_1 = currencyCode;
    this.q23_1 = customerName;
    this.r23_1 = customerEmail;
    this.s23_1 = customerReceiptUrl;
    this.t23_1 = deviceSerial;
    this.u23_1 = externalRefNumber;
    this.v23_1 = txnId;
    this.w23_1 = merchantName;
    this.x23_1 = mid;
    this.y23_1 = merchantCode;
    this.z23_1 = payerName;
    this.a24_1 = paymentCardBin;
    this.b24_1 = paymentCardBrand;
    this.c24_1 = paymentCardType;
    this.d24_1 = paymentMode;
    this.e24_1 = voidable;
    this.f24_1 = refundable;
    this.g24_1 = onlineRefundable;
    this.h24_1 = invoiceNumber;
    this.i24_1 = cardType;
  }
  toString() {
    return 'RazorPayEdcStatusResponse(success=' + this.z22_1 + ', status=' + this.a23_1 + ', messageCode=' + this.b23_1 + ', message=' + this.c23_1 + ', errorCode=' + this.d23_1 + ', errorMessage=' + this.e23_1 + ', realCode=' + this.f23_1 + ', apiMessageTitle=' + this.g23_1 + ', apiMessage=' + this.h23_1 + ', apiMessageText=' + this.i23_1 + ', apiWarning=' + this.j23_1 + ', origP2pRequestId=' + this.k23_1 + ', tid=' + this.l23_1 + ', authCode=' + this.m23_1 + ', batchNumber=' + this.n23_1 + ', cardLastFourDigit=' + this.o23_1 + ', currencyCode=' + this.p23_1 + ', customerName=' + this.q23_1 + ', customerEmail=' + this.r23_1 + ', customerReceiptUrl=' + this.s23_1 + ', deviceSerial=' + this.t23_1 + ', externalRefNumber=' + this.u23_1 + ', txnId=' + this.v23_1 + ', merchantName=' + this.w23_1 + ', mid=' + this.x23_1 + ', merchantCode=' + this.y23_1 + ', payerName=' + this.z23_1 + ', paymentCardBin=' + this.a24_1 + ', paymentCardBrand=' + this.b24_1 + ', paymentCardType=' + this.c24_1 + ', paymentMode=' + this.d24_1 + ', voidable=' + this.e24_1 + ', refundable=' + this.f24_1 + ', onlineRefundable=' + this.g24_1 + ', invoiceNumber=' + this.h24_1 + ', cardType=' + this.i24_1 + ')';
  }
  hashCode() {
    var result = getBooleanHashCode(this.z22_1);
    result = imul(result, 31) + (this.a23_1 == null ? 0 : getStringHashCode(this.a23_1)) | 0;
    result = imul(result, 31) + (this.b23_1 == null ? 0 : getStringHashCode(this.b23_1)) | 0;
    result = imul(result, 31) + (this.c23_1 == null ? 0 : getStringHashCode(this.c23_1)) | 0;
    result = imul(result, 31) + (this.d23_1 == null ? 0 : getStringHashCode(this.d23_1)) | 0;
    result = imul(result, 31) + (this.e23_1 == null ? 0 : getStringHashCode(this.e23_1)) | 0;
    result = imul(result, 31) + (this.f23_1 == null ? 0 : getStringHashCode(this.f23_1)) | 0;
    result = imul(result, 31) + (this.g23_1 == null ? 0 : getStringHashCode(this.g23_1)) | 0;
    result = imul(result, 31) + (this.h23_1 == null ? 0 : getStringHashCode(this.h23_1)) | 0;
    result = imul(result, 31) + (this.i23_1 == null ? 0 : getStringHashCode(this.i23_1)) | 0;
    result = imul(result, 31) + (this.j23_1 == null ? 0 : getStringHashCode(this.j23_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.k23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.n23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.o23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.p23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.q23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.r23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.s23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.t23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a24_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b24_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c24_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d24_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.e24_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.f24_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g24_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h24_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i24_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RazorPayEdcStatusResponse))
      return false;
    var tmp0_other_with_cast = other instanceof RazorPayEdcStatusResponse ? other : THROW_CCE();
    if (!(this.z22_1 === tmp0_other_with_cast.z22_1))
      return false;
    if (!(this.a23_1 == tmp0_other_with_cast.a23_1))
      return false;
    if (!(this.b23_1 == tmp0_other_with_cast.b23_1))
      return false;
    if (!(this.c23_1 == tmp0_other_with_cast.c23_1))
      return false;
    if (!(this.d23_1 == tmp0_other_with_cast.d23_1))
      return false;
    if (!(this.e23_1 == tmp0_other_with_cast.e23_1))
      return false;
    if (!(this.f23_1 == tmp0_other_with_cast.f23_1))
      return false;
    if (!(this.g23_1 == tmp0_other_with_cast.g23_1))
      return false;
    if (!(this.h23_1 == tmp0_other_with_cast.h23_1))
      return false;
    if (!(this.i23_1 == tmp0_other_with_cast.i23_1))
      return false;
    if (!(this.j23_1 == tmp0_other_with_cast.j23_1))
      return false;
    if (!(this.k23_1 === tmp0_other_with_cast.k23_1))
      return false;
    if (!(this.l23_1 === tmp0_other_with_cast.l23_1))
      return false;
    if (!(this.m23_1 === tmp0_other_with_cast.m23_1))
      return false;
    if (!(this.n23_1 === tmp0_other_with_cast.n23_1))
      return false;
    if (!(this.o23_1 === tmp0_other_with_cast.o23_1))
      return false;
    if (!(this.p23_1 === tmp0_other_with_cast.p23_1))
      return false;
    if (!(this.q23_1 === tmp0_other_with_cast.q23_1))
      return false;
    if (!(this.r23_1 === tmp0_other_with_cast.r23_1))
      return false;
    if (!(this.s23_1 === tmp0_other_with_cast.s23_1))
      return false;
    if (!(this.t23_1 === tmp0_other_with_cast.t23_1))
      return false;
    if (!(this.u23_1 === tmp0_other_with_cast.u23_1))
      return false;
    if (!(this.v23_1 === tmp0_other_with_cast.v23_1))
      return false;
    if (!(this.w23_1 === tmp0_other_with_cast.w23_1))
      return false;
    if (!(this.x23_1 === tmp0_other_with_cast.x23_1))
      return false;
    if (!(this.y23_1 === tmp0_other_with_cast.y23_1))
      return false;
    if (!(this.z23_1 === tmp0_other_with_cast.z23_1))
      return false;
    if (!(this.a24_1 === tmp0_other_with_cast.a24_1))
      return false;
    if (!(this.b24_1 === tmp0_other_with_cast.b24_1))
      return false;
    if (!(this.c24_1 === tmp0_other_with_cast.c24_1))
      return false;
    if (!(this.d24_1 === tmp0_other_with_cast.d24_1))
      return false;
    if (!(this.e24_1 === tmp0_other_with_cast.e24_1))
      return false;
    if (!(this.f24_1 === tmp0_other_with_cast.f24_1))
      return false;
    if (!(this.g24_1 === tmp0_other_with_cast.g24_1))
      return false;
    if (!(this.h24_1 === tmp0_other_with_cast.h24_1))
      return false;
    if (!(this.i24_1 === tmp0_other_with_cast.i24_1))
      return false;
    return true;
  }
  static j24(seen0, seen1, success, status, messageCode, message, errorCode, errorMessage, realCode, apiMessageTitle, apiMessage, apiMessageText, apiWarning, origP2pRequestId, tid, authCode, batchNumber, cardLastFourDigit, currencyCode, customerName, customerEmail, customerReceiptUrl, deviceSerial, externalRefNumber, txnId, merchantName, mid, merchantCode, payerName, paymentCardBin, paymentCardBrand, paymentCardType, paymentMode, voidable, refundable, onlineRefundable, invoiceNumber, cardType, serializationConstructorMarker) {
    if (!!(!(0 === (0 & seen0)) | !(0 === (0 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([0, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_28().x22_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.z22_1 = false;
    else
      $this.z22_1 = success;
    if (0 === (seen0 & 2))
      $this.a23_1 = null;
    else
      $this.a23_1 = status;
    if (0 === (seen0 & 4))
      $this.b23_1 = null;
    else
      $this.b23_1 = messageCode;
    if (0 === (seen0 & 8))
      $this.c23_1 = null;
    else
      $this.c23_1 = message;
    if (0 === (seen0 & 16))
      $this.d23_1 = null;
    else
      $this.d23_1 = errorCode;
    if (0 === (seen0 & 32))
      $this.e23_1 = null;
    else
      $this.e23_1 = errorMessage;
    if (0 === (seen0 & 64))
      $this.f23_1 = null;
    else
      $this.f23_1 = realCode;
    if (0 === (seen0 & 128))
      $this.g23_1 = null;
    else
      $this.g23_1 = apiMessageTitle;
    if (0 === (seen0 & 256))
      $this.h23_1 = null;
    else
      $this.h23_1 = apiMessage;
    if (0 === (seen0 & 512))
      $this.i23_1 = null;
    else
      $this.i23_1 = apiMessageText;
    if (0 === (seen0 & 1024))
      $this.j23_1 = null;
    else
      $this.j23_1 = apiWarning;
    if (0 === (seen0 & 2048))
      $this.k23_1 = '';
    else
      $this.k23_1 = origP2pRequestId;
    if (0 === (seen0 & 4096))
      $this.l23_1 = '';
    else
      $this.l23_1 = tid;
    if (0 === (seen0 & 8192))
      $this.m23_1 = '';
    else
      $this.m23_1 = authCode;
    if (0 === (seen0 & 16384))
      $this.n23_1 = '';
    else
      $this.n23_1 = batchNumber;
    if (0 === (seen0 & 32768))
      $this.o23_1 = '';
    else
      $this.o23_1 = cardLastFourDigit;
    if (0 === (seen0 & 65536))
      $this.p23_1 = '';
    else
      $this.p23_1 = currencyCode;
    if (0 === (seen0 & 131072))
      $this.q23_1 = '';
    else
      $this.q23_1 = customerName;
    if (0 === (seen0 & 262144))
      $this.r23_1 = '';
    else
      $this.r23_1 = customerEmail;
    if (0 === (seen0 & 524288))
      $this.s23_1 = '';
    else
      $this.s23_1 = customerReceiptUrl;
    if (0 === (seen0 & 1048576))
      $this.t23_1 = '';
    else
      $this.t23_1 = deviceSerial;
    if (0 === (seen0 & 2097152))
      $this.u23_1 = '';
    else
      $this.u23_1 = externalRefNumber;
    if (0 === (seen0 & 4194304))
      $this.v23_1 = '';
    else
      $this.v23_1 = txnId;
    if (0 === (seen0 & 8388608))
      $this.w23_1 = '';
    else
      $this.w23_1 = merchantName;
    if (0 === (seen0 & 16777216))
      $this.x23_1 = '';
    else
      $this.x23_1 = mid;
    if (0 === (seen0 & 33554432))
      $this.y23_1 = '';
    else
      $this.y23_1 = merchantCode;
    if (0 === (seen0 & 67108864))
      $this.z23_1 = '';
    else
      $this.z23_1 = payerName;
    if (0 === (seen0 & 134217728))
      $this.a24_1 = '';
    else
      $this.a24_1 = paymentCardBin;
    if (0 === (seen0 & 268435456))
      $this.b24_1 = '';
    else
      $this.b24_1 = paymentCardBrand;
    if (0 === (seen0 & 536870912))
      $this.c24_1 = '';
    else
      $this.c24_1 = paymentCardType;
    if (0 === (seen0 & 1073741824))
      $this.d24_1 = '';
    else
      $this.d24_1 = paymentMode;
    if (0 === (seen0 & -2147483648))
      $this.e24_1 = false;
    else
      $this.e24_1 = voidable;
    if (0 === (seen1 & 1))
      $this.f24_1 = false;
    else
      $this.f24_1 = refundable;
    if (0 === (seen1 & 2))
      $this.g24_1 = false;
    else
      $this.g24_1 = onlineRefundable;
    if (0 === (seen1 & 4))
      $this.h24_1 = '';
    else
      $this.h24_1 = invoiceNumber;
    if (0 === (seen1 & 8))
      $this.i24_1 = '';
    else
      $this.i24_1 = cardType;
    return $this;
  }
}
class Companion_29 {}
class $serializer_29 {
  constructor() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.MagTekPaymentResponse', this, 6);
    tmp0_serialDesc.aw('dataOutput', false);
    tmp0_serialDesc.aw('traceID', true);
    tmp0_serialDesc.aw('magTranID', true);
    tmp0_serialDesc.aw('customerTransactionID', true);
    tmp0_serialDesc.aw('transactionUTCTimeStamp', true);
    tmp0_serialDesc.aw('transactionOutput', false);
    this.k24_1 = tmp0_serialDesc;
  }
  l24(encoder, value) {
    var tmp0_desc = this.k24_1;
    var tmp1_output = encoder.so(tmp0_desc);
    tmp1_output.jq(tmp0_desc, 0, $serializer_getInstance_30(), value.m24_1);
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.n24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.n24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.o24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.o24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.p24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.p24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.q24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.q24_1);
    }
    tmp1_output.jq(tmp0_desc, 5, $serializer_getInstance_32(), value.r24_1);
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.l24(encoder, value instanceof MagTekPaymentResponse ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.k24_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.so(tmp0_desc);
    if (tmp10_input.ip()) {
      tmp4_local0 = tmp10_input.ep(tmp0_desc, 0, $serializer_getInstance_30(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.cp(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.cp(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.cp(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.cp(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.ep(tmp0_desc, 5, $serializer_getInstance_32(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.ep(tmp0_desc, 0, $serializer_getInstance_30(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.cp(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.cp(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.cp(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.cp(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.ep(tmp0_desc, 5, $serializer_getInstance_32(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp10_input.to(tmp0_desc);
    return MagTekPaymentResponse.s24(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  al() {
    return this.k24_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_30(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_32()];
  }
}
class MagTekPaymentResponse {
  toString() {
    return 'MagTekPaymentResponse(dataOutput=' + this.m24_1.toString() + ', traceId=' + this.n24_1 + ', magTranId=' + this.o24_1 + ', customerTransactionId=' + this.p24_1 + ', transactionUtctimeStamp=' + this.q24_1 + ', transactionOutput=' + this.r24_1.toString() + ')';
  }
  hashCode() {
    var result = this.m24_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.n24_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.o24_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.p24_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.q24_1) | 0;
    result = imul(result, 31) + this.r24_1.hashCode() | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof MagTekPaymentResponse))
      return false;
    var tmp0_other_with_cast = other instanceof MagTekPaymentResponse ? other : THROW_CCE();
    if (!this.m24_1.equals(tmp0_other_with_cast.m24_1))
      return false;
    if (!(this.n24_1 === tmp0_other_with_cast.n24_1))
      return false;
    if (!(this.o24_1 === tmp0_other_with_cast.o24_1))
      return false;
    if (!(this.p24_1 === tmp0_other_with_cast.p24_1))
      return false;
    if (!(this.q24_1 === tmp0_other_with_cast.q24_1))
      return false;
    if (!this.r24_1.equals(tmp0_other_with_cast.r24_1))
      return false;
    return true;
  }
  static s24(seen0, dataOutput, traceId, magTranId, customerTransactionId, transactionUtctimeStamp, transactionOutput, serializationConstructorMarker) {
    if (!(33 === (33 & seen0))) {
      throwMissingFieldException(seen0, 33, $serializer_getInstance_29().k24_1);
    }
    var $this = createThis(this);
    $this.m24_1 = dataOutput;
    if (0 === (seen0 & 2))
      $this.n24_1 = '';
    else
      $this.n24_1 = traceId;
    if (0 === (seen0 & 4))
      $this.o24_1 = '';
    else
      $this.o24_1 = magTranId;
    if (0 === (seen0 & 8))
      $this.p24_1 = '';
    else
      $this.p24_1 = customerTransactionId;
    if (0 === (seen0 & 16))
      $this.q24_1 = '';
    else
      $this.q24_1 = transactionUtctimeStamp;
    $this.r24_1 = transactionOutput;
    return $this;
  }
}
class Companion_30 {
  constructor() {
    Companion_instance_30 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t24_1 = [null, null, null, lazy(tmp_0, DataOutput$Companion$$childSerializers$_anonymous__bcjz5)];
  }
}
class $serializer_30 {
  constructor() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.DataOutput', this, 4);
    tmp0_serialDesc.aw('cardID', true);
    tmp0_serialDesc.aw('panLast4', true);
    tmp0_serialDesc.aw('isReplay', true);
    tmp0_serialDesc.aw('additionalOutputData', true);
    this.u24_1 = tmp0_serialDesc;
  }
  v24(encoder, value) {
    var tmp0_desc = this.u24_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_30().t24_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.w24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.w24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.x24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.x24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.y24_1 === false)) {
      tmp1_output.zp(tmp0_desc, 2, value.y24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !equals(value.z24_1, emptyList())) {
      tmp1_output.jq(tmp0_desc, 3, tmp2_cached[3].g2(), value.z24_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.v24(encoder, value instanceof DataOutput ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.u24_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.so(tmp0_desc);
    var tmp9_cached = Companion_getInstance_30().t24_1;
    if (tmp8_input.ip()) {
      tmp4_local0 = tmp8_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.cp(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.uo(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ep(tmp0_desc, 3, tmp9_cached[3].g2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.cp(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.uo(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ep(tmp0_desc, 3, tmp9_cached[3].g2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp8_input.to(tmp0_desc);
    return DataOutput.a25(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  al() {
    return this.u24_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_30().t24_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[3].g2()];
  }
}
class DataOutput {
  constructor(cardId, panLast4, isReplay, additionalOutputData) {
    Companion_getInstance_30();
    cardId = cardId === VOID ? '' : cardId;
    panLast4 = panLast4 === VOID ? '' : panLast4;
    isReplay = isReplay === VOID ? false : isReplay;
    additionalOutputData = additionalOutputData === VOID ? emptyList() : additionalOutputData;
    this.w24_1 = cardId;
    this.x24_1 = panLast4;
    this.y24_1 = isReplay;
    this.z24_1 = additionalOutputData;
  }
  toString() {
    return 'DataOutput(cardId=' + this.w24_1 + ', panLast4=' + this.x24_1 + ', isReplay=' + this.y24_1 + ', additionalOutputData=' + toString(this.z24_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.w24_1);
    result = imul(result, 31) + getStringHashCode(this.x24_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.y24_1) | 0;
    result = imul(result, 31) + hashCode(this.z24_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof DataOutput))
      return false;
    var tmp0_other_with_cast = other instanceof DataOutput ? other : THROW_CCE();
    if (!(this.w24_1 === tmp0_other_with_cast.w24_1))
      return false;
    if (!(this.x24_1 === tmp0_other_with_cast.x24_1))
      return false;
    if (!(this.y24_1 === tmp0_other_with_cast.y24_1))
      return false;
    if (!equals(this.z24_1, tmp0_other_with_cast.z24_1))
      return false;
    return true;
  }
  static a25(seen0, cardId, panLast4, isReplay, additionalOutputData, serializationConstructorMarker) {
    Companion_getInstance_30();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_30().u24_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.w24_1 = '';
    else
      $this.w24_1 = cardId;
    if (0 === (seen0 & 2))
      $this.x24_1 = '';
    else
      $this.x24_1 = panLast4;
    if (0 === (seen0 & 4))
      $this.y24_1 = false;
    else
      $this.y24_1 = isReplay;
    if (0 === (seen0 & 8))
      $this.z24_1 = emptyList();
    else
      $this.z24_1 = additionalOutputData;
    return $this;
  }
}
class Companion_31 {}
class $serializer_31 {
  constructor() {
    $serializer_instance_31 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.AdditionalOutputDaum', this, 2);
    tmp0_serialDesc.aw('key', true);
    tmp0_serialDesc.aw('value', true);
    this.b25_1 = tmp0_serialDesc;
  }
  c25(encoder, value) {
    var tmp0_desc = this.b25_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.d25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.d25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.e25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.e25_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.c25(encoder, value instanceof AdditionalOutputDaum ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.b25_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.so(tmp0_desc);
    if (tmp6_input.ip()) {
      tmp4_local0 = tmp6_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.cp(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.cp(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp6_input.to(tmp0_desc);
    return AdditionalOutputDaum.f25(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  al() {
    return this.b25_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class AdditionalOutputDaum {
  constructor(key, value) {
    key = key === VOID ? '' : key;
    value = value === VOID ? '' : value;
    this.d25_1 = key;
    this.e25_1 = value;
  }
  toString() {
    return 'AdditionalOutputDaum(key=' + this.d25_1 + ', value=' + this.e25_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.d25_1);
    result = imul(result, 31) + getStringHashCode(this.e25_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof AdditionalOutputDaum))
      return false;
    var tmp0_other_with_cast = other instanceof AdditionalOutputDaum ? other : THROW_CCE();
    if (!(this.d25_1 === tmp0_other_with_cast.d25_1))
      return false;
    if (!(this.e25_1 === tmp0_other_with_cast.e25_1))
      return false;
    return true;
  }
  static f25(seen0, key, value, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_31().b25_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.d25_1 = '';
    else
      $this.d25_1 = key;
    if (0 === (seen0 & 2))
      $this.e25_1 = '';
    else
      $this.e25_1 = value;
    return $this;
  }
}
class Companion_32 {
  constructor() {
    Companion_instance_32 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g25_1 = [null, null, null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, TransactionOutput$Companion$$childSerializers$_anonymous__covch7)];
  }
}
class $serializer_32 {
  constructor() {
    $serializer_instance_32 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.TransactionOutput', this, 13);
    tmp0_serialDesc.aw('transactionID', true);
    tmp0_serialDesc.aw('isTransactionApproved', true);
    tmp0_serialDesc.aw('transactionStatus', true);
    tmp0_serialDesc.aw('transactionMessage', true);
    tmp0_serialDesc.aw('authCode', true);
    tmp0_serialDesc.aw('authorizedAmount', true);
    tmp0_serialDesc.aw('avsResult', true);
    tmp0_serialDesc.aw('cvvResult', true);
    tmp0_serialDesc.aw('issuerAuthenticationData', true);
    tmp0_serialDesc.aw('issuerScriptTemplate1', true);
    tmp0_serialDesc.aw('issuerScriptTemplate2', true);
    tmp0_serialDesc.aw('token', true);
    tmp0_serialDesc.aw('transactionOutputDetails', true);
    this.h25_1 = tmp0_serialDesc;
  }
  i25(encoder, value) {
    var tmp0_desc = this.h25_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_32().g25_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.j25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.j25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.k25_1 === false)) {
      tmp1_output.zp(tmp0_desc, 1, value.k25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.l25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.l25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.m25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.m25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.n25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.n25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !equals(value.o25_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 5, value.o25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.p25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 6, value.p25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.q25_1 === '')) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.q25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.r25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 8, value.r25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.s25_1 === '')) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.s25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.t25_1 === '')) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.t25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.u25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 11, value.u25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !equals(value.v25_1, emptyList())) {
      tmp1_output.jq(tmp0_desc, 12, tmp2_cached[12].g2(), value.v25_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.i25(encoder, value instanceof TransactionOutput ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.h25_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = 0.0;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_input = decoder.so(tmp0_desc);
    var tmp18_cached = Companion_getInstance_32().g25_1;
    if (tmp17_input.ip()) {
      tmp4_local0 = tmp17_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp17_input.uo(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp17_input.cp(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp17_input.cp(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp17_input.cp(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp17_input.ap(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp17_input.cp(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp17_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp17_input.cp(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp17_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp17_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp17_input.cp(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp17_input.ep(tmp0_desc, 12, tmp18_cached[12].g2(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp17_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp17_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp17_input.uo(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp17_input.cp(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp17_input.cp(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp17_input.cp(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp17_input.ap(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp17_input.cp(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp17_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp17_input.cp(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp17_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp17_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp17_input.cp(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp17_input.ep(tmp0_desc, 12, tmp18_cached[12].g2(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp17_input.to(tmp0_desc);
    return TransactionOutput.w25(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, null);
  }
  al() {
    return this.h25_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_32().g25_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), tmp0_cached[12].g2()];
  }
}
class TransactionOutput {
  constructor(transactionId, isTransactionApproved, transactionStatus, transactionMessage, authCode, authorizedAmount, avsResult, cvvResult, issuerAuthenticationData, issuerScriptTemplate1, issuerScriptTemplate2, token, transactionOutputDetails) {
    Companion_getInstance_32();
    transactionId = transactionId === VOID ? '' : transactionId;
    isTransactionApproved = isTransactionApproved === VOID ? false : isTransactionApproved;
    transactionStatus = transactionStatus === VOID ? '' : transactionStatus;
    transactionMessage = transactionMessage === VOID ? '' : transactionMessage;
    authCode = authCode === VOID ? '' : authCode;
    authorizedAmount = authorizedAmount === VOID ? 0.0 : authorizedAmount;
    avsResult = avsResult === VOID ? '' : avsResult;
    cvvResult = cvvResult === VOID ? '' : cvvResult;
    issuerAuthenticationData = issuerAuthenticationData === VOID ? '' : issuerAuthenticationData;
    issuerScriptTemplate1 = issuerScriptTemplate1 === VOID ? '' : issuerScriptTemplate1;
    issuerScriptTemplate2 = issuerScriptTemplate2 === VOID ? '' : issuerScriptTemplate2;
    token = token === VOID ? '' : token;
    transactionOutputDetails = transactionOutputDetails === VOID ? emptyList() : transactionOutputDetails;
    this.j25_1 = transactionId;
    this.k25_1 = isTransactionApproved;
    this.l25_1 = transactionStatus;
    this.m25_1 = transactionMessage;
    this.n25_1 = authCode;
    this.o25_1 = authorizedAmount;
    this.p25_1 = avsResult;
    this.q25_1 = cvvResult;
    this.r25_1 = issuerAuthenticationData;
    this.s25_1 = issuerScriptTemplate1;
    this.t25_1 = issuerScriptTemplate2;
    this.u25_1 = token;
    this.v25_1 = transactionOutputDetails;
  }
  toString() {
    return 'TransactionOutput(transactionId=' + this.j25_1 + ', isTransactionApproved=' + this.k25_1 + ', transactionStatus=' + this.l25_1 + ', transactionMessage=' + this.m25_1 + ', authCode=' + this.n25_1 + ', authorizedAmount=' + this.o25_1 + ', avsResult=' + this.p25_1 + ', cvvResult=' + this.q25_1 + ', issuerAuthenticationData=' + this.r25_1 + ', issuerScriptTemplate1=' + this.s25_1 + ', issuerScriptTemplate2=' + this.t25_1 + ', token=' + this.u25_1 + ', transactionOutputDetails=' + toString(this.v25_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.j25_1);
    result = imul(result, 31) + getBooleanHashCode(this.k25_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l25_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m25_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.n25_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.o25_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.p25_1) | 0;
    result = imul(result, 31) + (this.q25_1 == null ? 0 : getStringHashCode(this.q25_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.r25_1) | 0;
    result = imul(result, 31) + (this.s25_1 == null ? 0 : getStringHashCode(this.s25_1)) | 0;
    result = imul(result, 31) + (this.t25_1 == null ? 0 : getStringHashCode(this.t25_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.u25_1) | 0;
    result = imul(result, 31) + hashCode(this.v25_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof TransactionOutput))
      return false;
    var tmp0_other_with_cast = other instanceof TransactionOutput ? other : THROW_CCE();
    if (!(this.j25_1 === tmp0_other_with_cast.j25_1))
      return false;
    if (!(this.k25_1 === tmp0_other_with_cast.k25_1))
      return false;
    if (!(this.l25_1 === tmp0_other_with_cast.l25_1))
      return false;
    if (!(this.m25_1 === tmp0_other_with_cast.m25_1))
      return false;
    if (!(this.n25_1 === tmp0_other_with_cast.n25_1))
      return false;
    if (!equals(this.o25_1, tmp0_other_with_cast.o25_1))
      return false;
    if (!(this.p25_1 === tmp0_other_with_cast.p25_1))
      return false;
    if (!(this.q25_1 == tmp0_other_with_cast.q25_1))
      return false;
    if (!(this.r25_1 === tmp0_other_with_cast.r25_1))
      return false;
    if (!(this.s25_1 == tmp0_other_with_cast.s25_1))
      return false;
    if (!(this.t25_1 == tmp0_other_with_cast.t25_1))
      return false;
    if (!(this.u25_1 === tmp0_other_with_cast.u25_1))
      return false;
    if (!equals(this.v25_1, tmp0_other_with_cast.v25_1))
      return false;
    return true;
  }
  static w25(seen0, transactionId, isTransactionApproved, transactionStatus, transactionMessage, authCode, authorizedAmount, avsResult, cvvResult, issuerAuthenticationData, issuerScriptTemplate1, issuerScriptTemplate2, token, transactionOutputDetails, serializationConstructorMarker) {
    Companion_getInstance_32();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_32().h25_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.j25_1 = '';
    else
      $this.j25_1 = transactionId;
    if (0 === (seen0 & 2))
      $this.k25_1 = false;
    else
      $this.k25_1 = isTransactionApproved;
    if (0 === (seen0 & 4))
      $this.l25_1 = '';
    else
      $this.l25_1 = transactionStatus;
    if (0 === (seen0 & 8))
      $this.m25_1 = '';
    else
      $this.m25_1 = transactionMessage;
    if (0 === (seen0 & 16))
      $this.n25_1 = '';
    else
      $this.n25_1 = authCode;
    if (0 === (seen0 & 32))
      $this.o25_1 = 0.0;
    else
      $this.o25_1 = authorizedAmount;
    if (0 === (seen0 & 64))
      $this.p25_1 = '';
    else
      $this.p25_1 = avsResult;
    if (0 === (seen0 & 128))
      $this.q25_1 = '';
    else
      $this.q25_1 = cvvResult;
    if (0 === (seen0 & 256))
      $this.r25_1 = '';
    else
      $this.r25_1 = issuerAuthenticationData;
    if (0 === (seen0 & 512))
      $this.s25_1 = '';
    else
      $this.s25_1 = issuerScriptTemplate1;
    if (0 === (seen0 & 1024))
      $this.t25_1 = '';
    else
      $this.t25_1 = issuerScriptTemplate2;
    if (0 === (seen0 & 2048))
      $this.u25_1 = '';
    else
      $this.u25_1 = token;
    if (0 === (seen0 & 4096))
      $this.v25_1 = emptyList();
    else
      $this.v25_1 = transactionOutputDetails;
    return $this;
  }
}
class Companion_33 {}
class $serializer_33 {
  constructor() {
    $serializer_instance_33 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.TransactionOutputDetail', this, 2);
    tmp0_serialDesc.aw('key', true);
    tmp0_serialDesc.aw('value', true);
    this.x25_1 = tmp0_serialDesc;
  }
  y25(encoder, value) {
    var tmp0_desc = this.x25_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.z25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.z25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.a26_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.a26_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.y25(encoder, value instanceof TransactionOutputDetail ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.x25_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.so(tmp0_desc);
    if (tmp6_input.ip()) {
      tmp4_local0 = tmp6_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.cp(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.cp(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp6_input.to(tmp0_desc);
    return TransactionOutputDetail.b26(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  al() {
    return this.x25_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class TransactionOutputDetail {
  constructor(key, value) {
    key = key === VOID ? '' : key;
    value = value === VOID ? '' : value;
    this.z25_1 = key;
    this.a26_1 = value;
  }
  toString() {
    return 'TransactionOutputDetail(key=' + this.z25_1 + ', value=' + this.a26_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.z25_1);
    result = imul(result, 31) + getStringHashCode(this.a26_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof TransactionOutputDetail))
      return false;
    var tmp0_other_with_cast = other instanceof TransactionOutputDetail ? other : THROW_CCE();
    if (!(this.z25_1 === tmp0_other_with_cast.z25_1))
      return false;
    if (!(this.a26_1 === tmp0_other_with_cast.a26_1))
      return false;
    return true;
  }
  static b26(seen0, key, value, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_33().x25_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.z25_1 = '';
    else
      $this.z25_1 = key;
    if (0 === (seen0 & 2))
      $this.a26_1 = '';
    else
      $this.a26_1 = value;
    return $this;
  }
}
class Companion_34 {
  constructor() {
    Companion_instance_34 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c26_1 = [null, null, null, lazy(tmp_0, PineEDCStatusResponse$Companion$$childSerializers$_anonymous__g6y2g3), null];
  }
}
class $serializer_34 {
  constructor() {
    $serializer_instance_34 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.PineEDCStatusResponse', this, 5);
    tmp0_serialDesc.aw('ResponseCode', true);
    tmp0_serialDesc.aw('ResponseMessage', true);
    tmp0_serialDesc.aw('PlutusTransactionReferenceID', true);
    tmp0_serialDesc.aw('TransactionData', true);
    tmp0_serialDesc.aw('TransactionID', true);
    this.d26_1 = tmp0_serialDesc;
  }
  e26(encoder, value) {
    var tmp0_desc = this.d26_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_34().c26_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.f26_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, IntSerializer_getInstance(), value.f26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.g26_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.g26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.h26_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, IntSerializer_getInstance(), value.h26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.i26_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, tmp2_cached[3].g2(), value.i26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.j26_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.j26_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.e26(encoder, value instanceof PineEDCStatusResponse ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.d26_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.so(tmp0_desc);
    var tmp10_cached = Companion_getInstance_34().c26_1;
    if (tmp9_input.ip()) {
      tmp4_local0 = tmp9_input.gp(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.gp(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.gp(tmp0_desc, 3, tmp10_cached[3].g2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.gp(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.gp(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.gp(tmp0_desc, 3, tmp10_cached[3].g2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp9_input.to(tmp0_desc);
    return PineEDCStatusResponse.k26(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  al() {
    return this.d26_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_34().c26_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[3].g2()), get_nullable(StringSerializer_getInstance())];
  }
}
class PineEDCStatusResponse {
  constructor(responseCode, responseMessage, plutusTransactionReferenceId, transactionData, transactionId) {
    Companion_getInstance_34();
    responseCode = responseCode === VOID ? null : responseCode;
    responseMessage = responseMessage === VOID ? null : responseMessage;
    plutusTransactionReferenceId = plutusTransactionReferenceId === VOID ? null : plutusTransactionReferenceId;
    transactionData = transactionData === VOID ? null : transactionData;
    transactionId = transactionId === VOID ? null : transactionId;
    this.f26_1 = responseCode;
    this.g26_1 = responseMessage;
    this.h26_1 = plutusTransactionReferenceId;
    this.i26_1 = transactionData;
    this.j26_1 = transactionId;
  }
  toString() {
    return 'PineEDCStatusResponse(responseCode=' + this.f26_1 + ', responseMessage=' + this.g26_1 + ', plutusTransactionReferenceId=' + this.h26_1 + ', transactionData=' + toString_0(this.i26_1) + ', transactionId=' + this.j26_1 + ')';
  }
  hashCode() {
    var result = this.f26_1 == null ? 0 : this.f26_1;
    result = imul(result, 31) + (this.g26_1 == null ? 0 : getStringHashCode(this.g26_1)) | 0;
    result = imul(result, 31) + (this.h26_1 == null ? 0 : this.h26_1) | 0;
    result = imul(result, 31) + (this.i26_1 == null ? 0 : hashCode(this.i26_1)) | 0;
    result = imul(result, 31) + (this.j26_1 == null ? 0 : getStringHashCode(this.j26_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PineEDCStatusResponse))
      return false;
    var tmp0_other_with_cast = other instanceof PineEDCStatusResponse ? other : THROW_CCE();
    if (!(this.f26_1 == tmp0_other_with_cast.f26_1))
      return false;
    if (!(this.g26_1 == tmp0_other_with_cast.g26_1))
      return false;
    if (!(this.h26_1 == tmp0_other_with_cast.h26_1))
      return false;
    if (!equals(this.i26_1, tmp0_other_with_cast.i26_1))
      return false;
    if (!(this.j26_1 == tmp0_other_with_cast.j26_1))
      return false;
    return true;
  }
  static k26(seen0, responseCode, responseMessage, plutusTransactionReferenceId, transactionData, transactionId, serializationConstructorMarker) {
    Companion_getInstance_34();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_34().d26_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.f26_1 = null;
    else
      $this.f26_1 = responseCode;
    if (0 === (seen0 & 2))
      $this.g26_1 = null;
    else
      $this.g26_1 = responseMessage;
    if (0 === (seen0 & 4))
      $this.h26_1 = null;
    else
      $this.h26_1 = plutusTransactionReferenceId;
    if (0 === (seen0 & 8))
      $this.i26_1 = null;
    else
      $this.i26_1 = transactionData;
    if (0 === (seen0 & 16))
      $this.j26_1 = null;
    else
      $this.j26_1 = transactionId;
    return $this;
  }
}
class Companion_35 {}
class $serializer_35 {
  constructor() {
    $serializer_instance_35 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.TransactionData', this, 2);
    tmp0_serialDesc.aw('Tag', true);
    tmp0_serialDesc.aw('Value', true);
    this.l26_1 = tmp0_serialDesc;
  }
  m26(encoder, value) {
    var tmp0_desc = this.l26_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.n26_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.n26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.o26_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.o26_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.m26(encoder, value instanceof TransactionData ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.l26_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.so(tmp0_desc);
    if (tmp6_input.ip()) {
      tmp4_local0 = tmp6_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp6_input.to(tmp0_desc);
    return TransactionData.p26(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  al() {
    return this.l26_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class TransactionData {
  constructor(tag, value) {
    tag = tag === VOID ? null : tag;
    value = value === VOID ? null : value;
    this.n26_1 = tag;
    this.o26_1 = value;
  }
  toString() {
    return 'TransactionData(tag=' + this.n26_1 + ', value=' + this.o26_1 + ')';
  }
  hashCode() {
    var result = this.n26_1 == null ? 0 : getStringHashCode(this.n26_1);
    result = imul(result, 31) + (this.o26_1 == null ? 0 : getStringHashCode(this.o26_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof TransactionData))
      return false;
    var tmp0_other_with_cast = other instanceof TransactionData ? other : THROW_CCE();
    if (!(this.n26_1 == tmp0_other_with_cast.n26_1))
      return false;
    if (!(this.o26_1 == tmp0_other_with_cast.o26_1))
      return false;
    return true;
  }
  static p26(seen0, tag, value, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_35().l26_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.n26_1 = null;
    else
      $this.n26_1 = tag;
    if (0 === (seen0 & 2))
      $this.o26_1 = null;
    else
      $this.o26_1 = value;
    return $this;
  }
}
class Companion_36 {}
class $serializer_36 {
  constructor() {
    $serializer_instance_36 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.ChargeSlipResponse', this, 18);
    tmp0_serialDesc.aw('acc_number', true);
    tmp0_serialDesc.aw('card_type', true);
    tmp0_serialDesc.aw('auth_code', true);
    tmp0_serialDesc.aw('ref_number', true);
    tmp0_serialDesc.aw('merchant_id', true);
    tmp0_serialDesc.aw('payment_status', true);
    tmp0_serialDesc.aw('tc', true);
    tmp0_serialDesc.aw('tvr', true);
    tmp0_serialDesc.aw('aid', true);
    tmp0_serialDesc.aw('tsi', true);
    tmp0_serialDesc.aw('tid', true);
    tmp0_serialDesc.aw('atc', true);
    tmp0_serialDesc.aw('app_lab', true);
    tmp0_serialDesc.aw('terminal_id', true);
    tmp0_serialDesc.aw('customer_vpa', true);
    tmp0_serialDesc.aw('payment_mode', true);
    tmp0_serialDesc.aw('transaction_log_id', true);
    tmp0_serialDesc.aw('card_holder_name', true);
    this.q26_1 = tmp0_serialDesc;
  }
  r26(encoder, value) {
    var tmp0_desc = this.q26_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.s26_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.s26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.t26_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.t26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.u26_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.u26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.v26_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.v26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.w26_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.w26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.x26_1 === '')) {
      tmp1_output.hq(tmp0_desc, 5, value.x26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.y26_1 === '')) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.y26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.z26_1 === '')) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.z26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.a27_1 === '')) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.a27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.b27_1 === '')) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.b27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.c27_1 === '')) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.c27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.d27_1 === '')) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.d27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.e27_1 === '')) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.e27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.f27_1 === '')) {
      tmp1_output.lq(tmp0_desc, 13, StringSerializer_getInstance(), value.f27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.g27_1 === '')) {
      tmp1_output.lq(tmp0_desc, 14, StringSerializer_getInstance(), value.g27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.h27_1 === '')) {
      tmp1_output.lq(tmp0_desc, 15, StringSerializer_getInstance(), value.h27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !(value.i27_1 === '')) {
      tmp1_output.lq(tmp0_desc, 16, StringSerializer_getInstance(), value.i27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !(value.j27_1 === '')) {
      tmp1_output.lq(tmp0_desc, 17, StringSerializer_getInstance(), value.j27_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.r26(encoder, value instanceof ChargeSlipResponse ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.q26_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_local17 = null;
    var tmp22_input = decoder.so(tmp0_desc);
    if (tmp22_input.ip()) {
      tmp4_local0 = tmp22_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp22_input.cp(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp22_input.cp(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp22_input.cp(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp22_input.cp(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp22_input.cp(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp22_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp22_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp22_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp22_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp22_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp22_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp22_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp22_input.gp(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp22_input.gp(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp22_input.gp(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp22_input.gp(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp22_input.gp(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp22_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp22_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp22_input.cp(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp22_input.cp(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp22_input.cp(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp22_input.cp(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp22_input.cp(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp22_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp22_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp22_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp22_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp22_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp22_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp22_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp22_input.gp(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp22_input.gp(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp22_input.gp(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp22_input.gp(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp22_input.gp(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp22_input.to(tmp0_desc);
    return ChargeSlipResponse.k27(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, null);
  }
  al() {
    return this.q26_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class ChargeSlipResponse {
  constructor(accNumber, cardType, authCode, refNumber, merchantID, paymentStatus, tc, tvr, aid, tsi, tid, atc, applab, terminalId, customerVpa, paymentMode, transactionLogId, cardHolderName) {
    accNumber = accNumber === VOID ? '' : accNumber;
    cardType = cardType === VOID ? '' : cardType;
    authCode = authCode === VOID ? '' : authCode;
    refNumber = refNumber === VOID ? '' : refNumber;
    merchantID = merchantID === VOID ? '' : merchantID;
    paymentStatus = paymentStatus === VOID ? '' : paymentStatus;
    tc = tc === VOID ? '' : tc;
    tvr = tvr === VOID ? '' : tvr;
    aid = aid === VOID ? '' : aid;
    tsi = tsi === VOID ? '' : tsi;
    tid = tid === VOID ? '' : tid;
    atc = atc === VOID ? '' : atc;
    applab = applab === VOID ? '' : applab;
    terminalId = terminalId === VOID ? '' : terminalId;
    customerVpa = customerVpa === VOID ? '' : customerVpa;
    paymentMode = paymentMode === VOID ? '' : paymentMode;
    transactionLogId = transactionLogId === VOID ? '' : transactionLogId;
    cardHolderName = cardHolderName === VOID ? '' : cardHolderName;
    this.s26_1 = accNumber;
    this.t26_1 = cardType;
    this.u26_1 = authCode;
    this.v26_1 = refNumber;
    this.w26_1 = merchantID;
    this.x26_1 = paymentStatus;
    this.y26_1 = tc;
    this.z26_1 = tvr;
    this.a27_1 = aid;
    this.b27_1 = tsi;
    this.c27_1 = tid;
    this.d27_1 = atc;
    this.e27_1 = applab;
    this.f27_1 = terminalId;
    this.g27_1 = customerVpa;
    this.h27_1 = paymentMode;
    this.i27_1 = transactionLogId;
    this.j27_1 = cardHolderName;
  }
  toString() {
    return 'ChargeSlipResponse(accNumber=' + this.s26_1 + ', cardType=' + this.t26_1 + ', authCode=' + this.u26_1 + ', refNumber=' + this.v26_1 + ', merchantID=' + this.w26_1 + ', paymentStatus=' + this.x26_1 + ', tc=' + this.y26_1 + ', tvr=' + this.z26_1 + ', aid=' + this.a27_1 + ', tsi=' + this.b27_1 + ', tid=' + this.c27_1 + ', atc=' + this.d27_1 + ', applab=' + this.e27_1 + ', terminalId=' + this.f27_1 + ', customerVpa=' + this.g27_1 + ', paymentMode=' + this.h27_1 + ', transactionLogId=' + this.i27_1 + ', cardHolderName=' + this.j27_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.s26_1);
    result = imul(result, 31) + getStringHashCode(this.t26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x26_1) | 0;
    result = imul(result, 31) + (this.y26_1 == null ? 0 : getStringHashCode(this.y26_1)) | 0;
    result = imul(result, 31) + (this.z26_1 == null ? 0 : getStringHashCode(this.z26_1)) | 0;
    result = imul(result, 31) + (this.a27_1 == null ? 0 : getStringHashCode(this.a27_1)) | 0;
    result = imul(result, 31) + (this.b27_1 == null ? 0 : getStringHashCode(this.b27_1)) | 0;
    result = imul(result, 31) + (this.c27_1 == null ? 0 : getStringHashCode(this.c27_1)) | 0;
    result = imul(result, 31) + (this.d27_1 == null ? 0 : getStringHashCode(this.d27_1)) | 0;
    result = imul(result, 31) + (this.e27_1 == null ? 0 : getStringHashCode(this.e27_1)) | 0;
    result = imul(result, 31) + (this.f27_1 == null ? 0 : getStringHashCode(this.f27_1)) | 0;
    result = imul(result, 31) + (this.g27_1 == null ? 0 : getStringHashCode(this.g27_1)) | 0;
    result = imul(result, 31) + (this.h27_1 == null ? 0 : getStringHashCode(this.h27_1)) | 0;
    result = imul(result, 31) + (this.i27_1 == null ? 0 : getStringHashCode(this.i27_1)) | 0;
    result = imul(result, 31) + (this.j27_1 == null ? 0 : getStringHashCode(this.j27_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ChargeSlipResponse))
      return false;
    var tmp0_other_with_cast = other instanceof ChargeSlipResponse ? other : THROW_CCE();
    if (!(this.s26_1 === tmp0_other_with_cast.s26_1))
      return false;
    if (!(this.t26_1 === tmp0_other_with_cast.t26_1))
      return false;
    if (!(this.u26_1 === tmp0_other_with_cast.u26_1))
      return false;
    if (!(this.v26_1 === tmp0_other_with_cast.v26_1))
      return false;
    if (!(this.w26_1 === tmp0_other_with_cast.w26_1))
      return false;
    if (!(this.x26_1 === tmp0_other_with_cast.x26_1))
      return false;
    if (!(this.y26_1 == tmp0_other_with_cast.y26_1))
      return false;
    if (!(this.z26_1 == tmp0_other_with_cast.z26_1))
      return false;
    if (!(this.a27_1 == tmp0_other_with_cast.a27_1))
      return false;
    if (!(this.b27_1 == tmp0_other_with_cast.b27_1))
      return false;
    if (!(this.c27_1 == tmp0_other_with_cast.c27_1))
      return false;
    if (!(this.d27_1 == tmp0_other_with_cast.d27_1))
      return false;
    if (!(this.e27_1 == tmp0_other_with_cast.e27_1))
      return false;
    if (!(this.f27_1 == tmp0_other_with_cast.f27_1))
      return false;
    if (!(this.g27_1 == tmp0_other_with_cast.g27_1))
      return false;
    if (!(this.h27_1 == tmp0_other_with_cast.h27_1))
      return false;
    if (!(this.i27_1 == tmp0_other_with_cast.i27_1))
      return false;
    if (!(this.j27_1 == tmp0_other_with_cast.j27_1))
      return false;
    return true;
  }
  static k27(seen0, accNumber, cardType, authCode, refNumber, merchantID, paymentStatus, tc, tvr, aid, tsi, tid, atc, applab, terminalId, customerVpa, paymentMode, transactionLogId, cardHolderName, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_36().q26_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.s26_1 = '';
    else
      $this.s26_1 = accNumber;
    if (0 === (seen0 & 2))
      $this.t26_1 = '';
    else
      $this.t26_1 = cardType;
    if (0 === (seen0 & 4))
      $this.u26_1 = '';
    else
      $this.u26_1 = authCode;
    if (0 === (seen0 & 8))
      $this.v26_1 = '';
    else
      $this.v26_1 = refNumber;
    if (0 === (seen0 & 16))
      $this.w26_1 = '';
    else
      $this.w26_1 = merchantID;
    if (0 === (seen0 & 32))
      $this.x26_1 = '';
    else
      $this.x26_1 = paymentStatus;
    if (0 === (seen0 & 64))
      $this.y26_1 = '';
    else
      $this.y26_1 = tc;
    if (0 === (seen0 & 128))
      $this.z26_1 = '';
    else
      $this.z26_1 = tvr;
    if (0 === (seen0 & 256))
      $this.a27_1 = '';
    else
      $this.a27_1 = aid;
    if (0 === (seen0 & 512))
      $this.b27_1 = '';
    else
      $this.b27_1 = tsi;
    if (0 === (seen0 & 1024))
      $this.c27_1 = '';
    else
      $this.c27_1 = tid;
    if (0 === (seen0 & 2048))
      $this.d27_1 = '';
    else
      $this.d27_1 = atc;
    if (0 === (seen0 & 4096))
      $this.e27_1 = '';
    else
      $this.e27_1 = applab;
    if (0 === (seen0 & 8192))
      $this.f27_1 = '';
    else
      $this.f27_1 = terminalId;
    if (0 === (seen0 & 16384))
      $this.g27_1 = '';
    else
      $this.g27_1 = customerVpa;
    if (0 === (seen0 & 32768))
      $this.h27_1 = '';
    else
      $this.h27_1 = paymentMode;
    if (0 === (seen0 & 65536))
      $this.i27_1 = '';
    else
      $this.i27_1 = transactionLogId;
    if (0 === (seen0 & 131072))
      $this.j27_1 = '';
    else
      $this.j27_1 = cardHolderName;
    return $this;
  }
}
class Companion_37 {}
class $serializer_37 {
  constructor() {
    $serializer_instance_37 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.PineQrCheckerData', this, 6);
    tmp0_serialDesc.aw('amount', true);
    tmp0_serialDesc.aw('message', true);
    tmp0_serialDesc.aw('order_id', true);
    tmp0_serialDesc.aw('payee', true);
    tmp0_serialDesc.aw('status', true);
    tmp0_serialDesc.aw('transaction_id', true);
    this.l27_1 = tmp0_serialDesc;
  }
  m27(encoder, value) {
    var tmp0_desc = this.l27_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.n27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, $serializer_getInstance_38(), value.n27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.o27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.o27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.p27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.p27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.q27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, $serializer_getInstance_39(), value.q27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.r27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.r27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.s27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.s27_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.m27(encoder, value instanceof PineQrCheckerData ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.l27_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.so(tmp0_desc);
    if (tmp10_input.ip()) {
      tmp4_local0 = tmp10_input.gp(tmp0_desc, 0, $serializer_getInstance_38(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.gp(tmp0_desc, 3, $serializer_getInstance_39(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.gp(tmp0_desc, 0, $serializer_getInstance_38(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.gp(tmp0_desc, 3, $serializer_getInstance_39(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp10_input.to(tmp0_desc);
    return PineQrCheckerData.t27(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  al() {
    return this.l27_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_38()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_39()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class PineQrCheckerData {
  constructor(amount, message, orderId, payee, status, transactionId) {
    amount = amount === VOID ? null : amount;
    message = message === VOID ? null : message;
    orderId = orderId === VOID ? null : orderId;
    payee = payee === VOID ? null : payee;
    status = status === VOID ? null : status;
    transactionId = transactionId === VOID ? null : transactionId;
    this.n27_1 = amount;
    this.o27_1 = message;
    this.p27_1 = orderId;
    this.q27_1 = payee;
    this.r27_1 = status;
    this.s27_1 = transactionId;
  }
  toString() {
    return 'PineQrCheckerData(amount=' + toString_0(this.n27_1) + ', message=' + this.o27_1 + ', orderId=' + this.p27_1 + ', payee=' + toString_0(this.q27_1) + ', status=' + this.r27_1 + ', transactionId=' + this.s27_1 + ')';
  }
  hashCode() {
    var result = this.n27_1 == null ? 0 : this.n27_1.hashCode();
    result = imul(result, 31) + (this.o27_1 == null ? 0 : getStringHashCode(this.o27_1)) | 0;
    result = imul(result, 31) + (this.p27_1 == null ? 0 : getStringHashCode(this.p27_1)) | 0;
    result = imul(result, 31) + (this.q27_1 == null ? 0 : this.q27_1.hashCode()) | 0;
    result = imul(result, 31) + (this.r27_1 == null ? 0 : getStringHashCode(this.r27_1)) | 0;
    result = imul(result, 31) + (this.s27_1 == null ? 0 : getStringHashCode(this.s27_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PineQrCheckerData))
      return false;
    var tmp0_other_with_cast = other instanceof PineQrCheckerData ? other : THROW_CCE();
    if (!equals(this.n27_1, tmp0_other_with_cast.n27_1))
      return false;
    if (!(this.o27_1 == tmp0_other_with_cast.o27_1))
      return false;
    if (!(this.p27_1 == tmp0_other_with_cast.p27_1))
      return false;
    if (!equals(this.q27_1, tmp0_other_with_cast.q27_1))
      return false;
    if (!(this.r27_1 == tmp0_other_with_cast.r27_1))
      return false;
    if (!(this.s27_1 == tmp0_other_with_cast.s27_1))
      return false;
    return true;
  }
  static t27(seen0, amount, message, orderId, payee, status, transactionId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_37().l27_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.n27_1 = null;
    else
      $this.n27_1 = amount;
    if (0 === (seen0 & 2))
      $this.o27_1 = null;
    else
      $this.o27_1 = message;
    if (0 === (seen0 & 4))
      $this.p27_1 = null;
    else
      $this.p27_1 = orderId;
    if (0 === (seen0 & 8))
      $this.q27_1 = null;
    else
      $this.q27_1 = payee;
    if (0 === (seen0 & 16))
      $this.r27_1 = null;
    else
      $this.r27_1 = status;
    if (0 === (seen0 & 32))
      $this.s27_1 = null;
    else
      $this.s27_1 = transactionId;
    return $this;
  }
}
class Companion_38 {}
class $serializer_38 {
  constructor() {
    $serializer_instance_38 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.AmountChecker', this, 2);
    tmp0_serialDesc.aw('currency_code', true);
    tmp0_serialDesc.aw('value', true);
    this.u27_1 = tmp0_serialDesc;
  }
  v27(encoder, value) {
    var tmp0_desc = this.u27_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.w27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.w27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.x27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, IntSerializer_getInstance(), value.x27_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.v27(encoder, value instanceof AmountChecker ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.u27_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.so(tmp0_desc);
    if (tmp6_input.ip()) {
      tmp4_local0 = tmp6_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.gp(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.gp(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp6_input.to(tmp0_desc);
    return AmountChecker.y27(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  al() {
    return this.u27_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class AmountChecker {
  constructor(currencyCode, value) {
    currencyCode = currencyCode === VOID ? null : currencyCode;
    value = value === VOID ? null : value;
    this.w27_1 = currencyCode;
    this.x27_1 = value;
  }
  toString() {
    return 'AmountChecker(currencyCode=' + this.w27_1 + ', value=' + this.x27_1 + ')';
  }
  hashCode() {
    var result = this.w27_1 == null ? 0 : getStringHashCode(this.w27_1);
    result = imul(result, 31) + (this.x27_1 == null ? 0 : this.x27_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof AmountChecker))
      return false;
    var tmp0_other_with_cast = other instanceof AmountChecker ? other : THROW_CCE();
    if (!(this.w27_1 == tmp0_other_with_cast.w27_1))
      return false;
    if (!(this.x27_1 == tmp0_other_with_cast.x27_1))
      return false;
    return true;
  }
  static y27(seen0, currencyCode, value, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_38().u27_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.w27_1 = null;
    else
      $this.w27_1 = currencyCode;
    if (0 === (seen0 & 2))
      $this.x27_1 = null;
    else
      $this.x27_1 = value;
    return $this;
  }
}
class Companion_39 {}
class $serializer_39 {
  constructor() {
    $serializer_instance_39 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.PayeeChecker', this, 2);
    tmp0_serialDesc.aw('acquirer_name', true);
    tmp0_serialDesc.aw('merchant_reference_id', true);
    this.z27_1 = tmp0_serialDesc;
  }
  a28(encoder, value) {
    var tmp0_desc = this.z27_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.b28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.b28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.c28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.c28_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.a28(encoder, value instanceof PayeeChecker ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.z27_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.so(tmp0_desc);
    if (tmp6_input.ip()) {
      tmp4_local0 = tmp6_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp6_input.to(tmp0_desc);
    return PayeeChecker.d28(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  al() {
    return this.z27_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class PayeeChecker {
  constructor(acquirerName, merchantReferenceId) {
    acquirerName = acquirerName === VOID ? null : acquirerName;
    merchantReferenceId = merchantReferenceId === VOID ? null : merchantReferenceId;
    this.b28_1 = acquirerName;
    this.c28_1 = merchantReferenceId;
  }
  toString() {
    return 'PayeeChecker(acquirerName=' + this.b28_1 + ', merchantReferenceId=' + this.c28_1 + ')';
  }
  hashCode() {
    var result = this.b28_1 == null ? 0 : getStringHashCode(this.b28_1);
    result = imul(result, 31) + (this.c28_1 == null ? 0 : getStringHashCode(this.c28_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PayeeChecker))
      return false;
    var tmp0_other_with_cast = other instanceof PayeeChecker ? other : THROW_CCE();
    if (!(this.b28_1 == tmp0_other_with_cast.b28_1))
      return false;
    if (!(this.c28_1 == tmp0_other_with_cast.c28_1))
      return false;
    return true;
  }
  static d28(seen0, acquirerName, merchantReferenceId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_39().z27_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.b28_1 = null;
    else
      $this.b28_1 = acquirerName;
    if (0 === (seen0 & 2))
      $this.c28_1 = null;
    else
      $this.c28_1 = merchantReferenceId;
    return $this;
  }
}
class Companion_40 {}
class $serializer_40 {
  constructor() {
    $serializer_instance_40 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('TranResponse', this, 37);
    tmp0_serialDesc.aw('MerchantID', true);
    tmp0_serialDesc.aw('PayAPI_Id', true);
    tmp0_serialDesc.aw('TerminalID', true);
    tmp0_serialDesc.aw('ExpDate', true);
    tmp0_serialDesc.aw('AcctNo', true);
    tmp0_serialDesc.aw('CardType', true);
    tmp0_serialDesc.aw('TranCode', true);
    tmp0_serialDesc.aw('AuthCode', true);
    tmp0_serialDesc.aw('AVSResult', true);
    tmp0_serialDesc.aw('CVVResult', true);
    tmp0_serialDesc.aw('CaptureStatus', true);
    tmp0_serialDesc.aw('CardholderName', true);
    tmp0_serialDesc.aw('CardHolderID', true);
    tmp0_serialDesc.aw('RefNo', true);
    tmp0_serialDesc.aw('OperatorID', true);
    tmp0_serialDesc.aw('InvoiceNo', true);
    tmp0_serialDesc.aw('AcqRefData', true);
    tmp0_serialDesc.aw('ProcessorToken', true);
    tmp0_serialDesc.aw('PostProcess', true);
    tmp0_serialDesc.aw('ProcessData', true);
    tmp0_serialDesc.aw('RecordNo', true);
    tmp0_serialDesc.aw('RecurringData', true);
    tmp0_serialDesc.aw('EntryMethod', true);
    tmp0_serialDesc.aw('Date', true);
    tmp0_serialDesc.aw('Time', true);
    tmp0_serialDesc.aw('ApplicationLabel', true);
    tmp0_serialDesc.aw('TVR', true);
    tmp0_serialDesc.aw('AID', true);
    tmp0_serialDesc.aw('IAD', true);
    tmp0_serialDesc.aw('TSI', true);
    tmp0_serialDesc.aw('ARC', true);
    tmp0_serialDesc.aw('CVM', true);
    tmp0_serialDesc.aw('ReceiptLanguage', true);
    tmp0_serialDesc.aw('CustomerReceiptLanguage', true);
    tmp0_serialDesc.aw('ISORespCode', true);
    tmp0_serialDesc.aw('NetworkName', true);
    tmp0_serialDesc.aw('Amount', true);
    this.e28_1 = tmp0_serialDesc;
  }
  f28(encoder, value) {
    var tmp0_desc = this.e28_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.g28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.g28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.h28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.h28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.i28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.i28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.j28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.j28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.k28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.k28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.l28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.l28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.m28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.m28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.n28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.n28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.o28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.o28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.p28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.p28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.q28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.q28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.r28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.r28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.s28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.s28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.t28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, StringSerializer_getInstance(), value.t28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.u28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 14, StringSerializer_getInstance(), value.u28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.v28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 15, StringSerializer_getInstance(), value.v28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !(value.w28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 16, StringSerializer_getInstance(), value.w28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !(value.x28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 17, StringSerializer_getInstance(), value.x28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !(value.y28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 18, StringSerializer_getInstance(), value.y28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !(value.z28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 19, StringSerializer_getInstance(), value.z28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !(value.a29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 20, StringSerializer_getInstance(), value.a29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.b29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 21, StringSerializer_getInstance(), value.b29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 22) ? true : !(value.c29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 22, StringSerializer_getInstance(), value.c29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 23) ? true : !(value.d29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 23, StringSerializer_getInstance(), value.d29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 24) ? true : !(value.e29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 24, StringSerializer_getInstance(), value.e29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 25) ? true : !(value.f29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 25, StringSerializer_getInstance(), value.f29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 26) ? true : !(value.g29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 26, StringSerializer_getInstance(), value.g29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 27) ? true : !(value.h29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 27, StringSerializer_getInstance(), value.h29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 28) ? true : !(value.i29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 28, StringSerializer_getInstance(), value.i29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 29) ? true : !(value.j29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 29, StringSerializer_getInstance(), value.j29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 30) ? true : !(value.k29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 30, StringSerializer_getInstance(), value.k29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 31) ? true : !(value.l29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 31, StringSerializer_getInstance(), value.l29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 32) ? true : !(value.m29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 32, StringSerializer_getInstance(), value.m29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 33) ? true : !(value.n29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 33, StringSerializer_getInstance(), value.n29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 34) ? true : !(value.o29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 34, StringSerializer_getInstance(), value.o29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 35) ? true : !(value.p29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 35, StringSerializer_getInstance(), value.p29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 36) ? true : !(value.q29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 36, $serializer_getInstance_41(), value.q29_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.f28(encoder, value instanceof TranResponse ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.e28_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = null;
    var tmp8_local3 = null;
    var tmp9_local4 = null;
    var tmp10_local5 = null;
    var tmp11_local6 = null;
    var tmp12_local7 = null;
    var tmp13_local8 = null;
    var tmp14_local9 = null;
    var tmp15_local10 = null;
    var tmp16_local11 = null;
    var tmp17_local12 = null;
    var tmp18_local13 = null;
    var tmp19_local14 = null;
    var tmp20_local15 = null;
    var tmp21_local16 = null;
    var tmp22_local17 = null;
    var tmp23_local18 = null;
    var tmp24_local19 = null;
    var tmp25_local20 = null;
    var tmp26_local21 = null;
    var tmp27_local22 = null;
    var tmp28_local23 = null;
    var tmp29_local24 = null;
    var tmp30_local25 = null;
    var tmp31_local26 = null;
    var tmp32_local27 = null;
    var tmp33_local28 = null;
    var tmp34_local29 = null;
    var tmp35_local30 = null;
    var tmp36_local31 = null;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = null;
    var tmp40_local35 = null;
    var tmp41_local36 = null;
    var tmp42_input = decoder.so(tmp0_desc);
    if (tmp42_input.ip()) {
      tmp5_local0 = tmp42_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp42_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp42_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp42_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp42_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp42_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp42_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp42_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp42_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp42_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp42_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp42_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp42_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp42_input.gp(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp42_input.gp(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp42_input.gp(tmp0_desc, 15, StringSerializer_getInstance(), tmp20_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp42_input.gp(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp42_input.gp(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp42_input.gp(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp42_input.gp(tmp0_desc, 19, StringSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp42_input.gp(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp42_input.gp(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp42_input.gp(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp42_input.gp(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp42_input.gp(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp42_input.gp(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp42_input.gp(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp42_input.gp(tmp0_desc, 27, StringSerializer_getInstance(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp42_input.gp(tmp0_desc, 28, StringSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp42_input.gp(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp42_input.gp(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp42_input.gp(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp42_input.gp(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp42_input.gp(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp42_input.gp(tmp0_desc, 34, StringSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp42_input.gp(tmp0_desc, 35, StringSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp42_input.gp(tmp0_desc, 36, $serializer_getInstance_41(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp42_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp42_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp5_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp42_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp42_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp42_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp42_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp42_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp42_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp42_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp42_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp42_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp42_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp42_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp42_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp42_input.gp(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp42_input.gp(tmp0_desc, 14, StringSerializer_getInstance(), tmp19_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp42_input.gp(tmp0_desc, 15, StringSerializer_getInstance(), tmp20_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp42_input.gp(tmp0_desc, 16, StringSerializer_getInstance(), tmp21_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp42_input.gp(tmp0_desc, 17, StringSerializer_getInstance(), tmp22_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp42_input.gp(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp42_input.gp(tmp0_desc, 19, StringSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp42_input.gp(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp42_input.gp(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp42_input.gp(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp42_input.gp(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp42_input.gp(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp42_input.gp(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp42_input.gp(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp42_input.gp(tmp0_desc, 27, StringSerializer_getInstance(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp42_input.gp(tmp0_desc, 28, StringSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp42_input.gp(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp42_input.gp(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp42_input.gp(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp42_input.gp(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp42_input.gp(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp42_input.gp(tmp0_desc, 34, StringSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp42_input.gp(tmp0_desc, 35, StringSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp42_input.gp(tmp0_desc, 36, $serializer_getInstance_41(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp42_input.to(tmp0_desc);
    return TranResponse.r29(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, null);
  }
  al() {
    return this.e28_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_41())];
  }
}
class TranResponse {
  constructor(merchantID, payAPIId, terminalID, expDate, acctNo, cardType, tranCode, authCode, avsResult, cvvResult, captureStatus, cardholderName, cardHolderID, refNo, operatorID, invoiceNo, acqRefData, processorToken, postProcess, processData, recordNo, recurringData, entryMethod, date, time, applicationLabel, tvr, aid, iad, tsi, arc, cvm, receiptLanguage, customerReceiptLanguage, isoRespCode, networkName, amount) {
    merchantID = merchantID === VOID ? null : merchantID;
    payAPIId = payAPIId === VOID ? null : payAPIId;
    terminalID = terminalID === VOID ? null : terminalID;
    expDate = expDate === VOID ? null : expDate;
    acctNo = acctNo === VOID ? null : acctNo;
    cardType = cardType === VOID ? null : cardType;
    tranCode = tranCode === VOID ? null : tranCode;
    authCode = authCode === VOID ? null : authCode;
    avsResult = avsResult === VOID ? null : avsResult;
    cvvResult = cvvResult === VOID ? null : cvvResult;
    captureStatus = captureStatus === VOID ? null : captureStatus;
    cardholderName = cardholderName === VOID ? null : cardholderName;
    cardHolderID = cardHolderID === VOID ? null : cardHolderID;
    refNo = refNo === VOID ? null : refNo;
    operatorID = operatorID === VOID ? null : operatorID;
    invoiceNo = invoiceNo === VOID ? null : invoiceNo;
    acqRefData = acqRefData === VOID ? null : acqRefData;
    processorToken = processorToken === VOID ? null : processorToken;
    postProcess = postProcess === VOID ? null : postProcess;
    processData = processData === VOID ? null : processData;
    recordNo = recordNo === VOID ? null : recordNo;
    recurringData = recurringData === VOID ? null : recurringData;
    entryMethod = entryMethod === VOID ? null : entryMethod;
    date = date === VOID ? null : date;
    time = time === VOID ? null : time;
    applicationLabel = applicationLabel === VOID ? null : applicationLabel;
    tvr = tvr === VOID ? null : tvr;
    aid = aid === VOID ? null : aid;
    iad = iad === VOID ? null : iad;
    tsi = tsi === VOID ? null : tsi;
    arc = arc === VOID ? null : arc;
    cvm = cvm === VOID ? null : cvm;
    receiptLanguage = receiptLanguage === VOID ? null : receiptLanguage;
    customerReceiptLanguage = customerReceiptLanguage === VOID ? null : customerReceiptLanguage;
    isoRespCode = isoRespCode === VOID ? null : isoRespCode;
    networkName = networkName === VOID ? null : networkName;
    amount = amount === VOID ? null : amount;
    this.g28_1 = merchantID;
    this.h28_1 = payAPIId;
    this.i28_1 = terminalID;
    this.j28_1 = expDate;
    this.k28_1 = acctNo;
    this.l28_1 = cardType;
    this.m28_1 = tranCode;
    this.n28_1 = authCode;
    this.o28_1 = avsResult;
    this.p28_1 = cvvResult;
    this.q28_1 = captureStatus;
    this.r28_1 = cardholderName;
    this.s28_1 = cardHolderID;
    this.t28_1 = refNo;
    this.u28_1 = operatorID;
    this.v28_1 = invoiceNo;
    this.w28_1 = acqRefData;
    this.x28_1 = processorToken;
    this.y28_1 = postProcess;
    this.z28_1 = processData;
    this.a29_1 = recordNo;
    this.b29_1 = recurringData;
    this.c29_1 = entryMethod;
    this.d29_1 = date;
    this.e29_1 = time;
    this.f29_1 = applicationLabel;
    this.g29_1 = tvr;
    this.h29_1 = aid;
    this.i29_1 = iad;
    this.j29_1 = tsi;
    this.k29_1 = arc;
    this.l29_1 = cvm;
    this.m29_1 = receiptLanguage;
    this.n29_1 = customerReceiptLanguage;
    this.o29_1 = isoRespCode;
    this.p29_1 = networkName;
    this.q29_1 = amount;
  }
  toString() {
    return 'TranResponse(merchantID=' + this.g28_1 + ', acctNo=' + this.k28_1 + ', cardType=' + this.l28_1 + ', ' + ('tranCode=' + this.m28_1 + ', authCode=' + this.n28_1 + ', captureStatus=' + this.q28_1 + ', ') + ('refNo=' + this.t28_1 + ', invoiceNo=' + this.v28_1 + ', amount=' + toString_0(this.q29_1) + ', acqRefData=' + this.w28_1 + ', ') + ('processData=' + this.z28_1 + ', recordNo=' + this.a29_1 + ', entryMethod=' + this.c29_1 + ', ') + ('date=' + this.d29_1 + ', time=' + this.e29_1 + ', applicationLabel=' + this.f29_1 + ', tvr=' + this.g29_1 + ', ') + ('iad=' + this.i29_1 + ', tsi=' + this.j29_1 + ', cvm=' + this.l29_1 + ', payAPIId=' + this.h28_1 + ')');
  }
  hashCode() {
    var result = this.g28_1 == null ? 0 : getStringHashCode(this.g28_1);
    result = imul(result, 31) + (this.h28_1 == null ? 0 : getStringHashCode(this.h28_1)) | 0;
    result = imul(result, 31) + (this.i28_1 == null ? 0 : getStringHashCode(this.i28_1)) | 0;
    result = imul(result, 31) + (this.j28_1 == null ? 0 : getStringHashCode(this.j28_1)) | 0;
    result = imul(result, 31) + (this.k28_1 == null ? 0 : getStringHashCode(this.k28_1)) | 0;
    result = imul(result, 31) + (this.l28_1 == null ? 0 : getStringHashCode(this.l28_1)) | 0;
    result = imul(result, 31) + (this.m28_1 == null ? 0 : getStringHashCode(this.m28_1)) | 0;
    result = imul(result, 31) + (this.n28_1 == null ? 0 : getStringHashCode(this.n28_1)) | 0;
    result = imul(result, 31) + (this.o28_1 == null ? 0 : getStringHashCode(this.o28_1)) | 0;
    result = imul(result, 31) + (this.p28_1 == null ? 0 : getStringHashCode(this.p28_1)) | 0;
    result = imul(result, 31) + (this.q28_1 == null ? 0 : getStringHashCode(this.q28_1)) | 0;
    result = imul(result, 31) + (this.r28_1 == null ? 0 : getStringHashCode(this.r28_1)) | 0;
    result = imul(result, 31) + (this.s28_1 == null ? 0 : getStringHashCode(this.s28_1)) | 0;
    result = imul(result, 31) + (this.t28_1 == null ? 0 : getStringHashCode(this.t28_1)) | 0;
    result = imul(result, 31) + (this.u28_1 == null ? 0 : getStringHashCode(this.u28_1)) | 0;
    result = imul(result, 31) + (this.v28_1 == null ? 0 : getStringHashCode(this.v28_1)) | 0;
    result = imul(result, 31) + (this.w28_1 == null ? 0 : getStringHashCode(this.w28_1)) | 0;
    result = imul(result, 31) + (this.x28_1 == null ? 0 : getStringHashCode(this.x28_1)) | 0;
    result = imul(result, 31) + (this.y28_1 == null ? 0 : getStringHashCode(this.y28_1)) | 0;
    result = imul(result, 31) + (this.z28_1 == null ? 0 : getStringHashCode(this.z28_1)) | 0;
    result = imul(result, 31) + (this.a29_1 == null ? 0 : getStringHashCode(this.a29_1)) | 0;
    result = imul(result, 31) + (this.b29_1 == null ? 0 : getStringHashCode(this.b29_1)) | 0;
    result = imul(result, 31) + (this.c29_1 == null ? 0 : getStringHashCode(this.c29_1)) | 0;
    result = imul(result, 31) + (this.d29_1 == null ? 0 : getStringHashCode(this.d29_1)) | 0;
    result = imul(result, 31) + (this.e29_1 == null ? 0 : getStringHashCode(this.e29_1)) | 0;
    result = imul(result, 31) + (this.f29_1 == null ? 0 : getStringHashCode(this.f29_1)) | 0;
    result = imul(result, 31) + (this.g29_1 == null ? 0 : getStringHashCode(this.g29_1)) | 0;
    result = imul(result, 31) + (this.h29_1 == null ? 0 : getStringHashCode(this.h29_1)) | 0;
    result = imul(result, 31) + (this.i29_1 == null ? 0 : getStringHashCode(this.i29_1)) | 0;
    result = imul(result, 31) + (this.j29_1 == null ? 0 : getStringHashCode(this.j29_1)) | 0;
    result = imul(result, 31) + (this.k29_1 == null ? 0 : getStringHashCode(this.k29_1)) | 0;
    result = imul(result, 31) + (this.l29_1 == null ? 0 : getStringHashCode(this.l29_1)) | 0;
    result = imul(result, 31) + (this.m29_1 == null ? 0 : getStringHashCode(this.m29_1)) | 0;
    result = imul(result, 31) + (this.n29_1 == null ? 0 : getStringHashCode(this.n29_1)) | 0;
    result = imul(result, 31) + (this.o29_1 == null ? 0 : getStringHashCode(this.o29_1)) | 0;
    result = imul(result, 31) + (this.p29_1 == null ? 0 : getStringHashCode(this.p29_1)) | 0;
    result = imul(result, 31) + (this.q29_1 == null ? 0 : this.q29_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof TranResponse))
      return false;
    var tmp0_other_with_cast = other instanceof TranResponse ? other : THROW_CCE();
    if (!(this.g28_1 == tmp0_other_with_cast.g28_1))
      return false;
    if (!(this.h28_1 == tmp0_other_with_cast.h28_1))
      return false;
    if (!(this.i28_1 == tmp0_other_with_cast.i28_1))
      return false;
    if (!(this.j28_1 == tmp0_other_with_cast.j28_1))
      return false;
    if (!(this.k28_1 == tmp0_other_with_cast.k28_1))
      return false;
    if (!(this.l28_1 == tmp0_other_with_cast.l28_1))
      return false;
    if (!(this.m28_1 == tmp0_other_with_cast.m28_1))
      return false;
    if (!(this.n28_1 == tmp0_other_with_cast.n28_1))
      return false;
    if (!(this.o28_1 == tmp0_other_with_cast.o28_1))
      return false;
    if (!(this.p28_1 == tmp0_other_with_cast.p28_1))
      return false;
    if (!(this.q28_1 == tmp0_other_with_cast.q28_1))
      return false;
    if (!(this.r28_1 == tmp0_other_with_cast.r28_1))
      return false;
    if (!(this.s28_1 == tmp0_other_with_cast.s28_1))
      return false;
    if (!(this.t28_1 == tmp0_other_with_cast.t28_1))
      return false;
    if (!(this.u28_1 == tmp0_other_with_cast.u28_1))
      return false;
    if (!(this.v28_1 == tmp0_other_with_cast.v28_1))
      return false;
    if (!(this.w28_1 == tmp0_other_with_cast.w28_1))
      return false;
    if (!(this.x28_1 == tmp0_other_with_cast.x28_1))
      return false;
    if (!(this.y28_1 == tmp0_other_with_cast.y28_1))
      return false;
    if (!(this.z28_1 == tmp0_other_with_cast.z28_1))
      return false;
    if (!(this.a29_1 == tmp0_other_with_cast.a29_1))
      return false;
    if (!(this.b29_1 == tmp0_other_with_cast.b29_1))
      return false;
    if (!(this.c29_1 == tmp0_other_with_cast.c29_1))
      return false;
    if (!(this.d29_1 == tmp0_other_with_cast.d29_1))
      return false;
    if (!(this.e29_1 == tmp0_other_with_cast.e29_1))
      return false;
    if (!(this.f29_1 == tmp0_other_with_cast.f29_1))
      return false;
    if (!(this.g29_1 == tmp0_other_with_cast.g29_1))
      return false;
    if (!(this.h29_1 == tmp0_other_with_cast.h29_1))
      return false;
    if (!(this.i29_1 == tmp0_other_with_cast.i29_1))
      return false;
    if (!(this.j29_1 == tmp0_other_with_cast.j29_1))
      return false;
    if (!(this.k29_1 == tmp0_other_with_cast.k29_1))
      return false;
    if (!(this.l29_1 == tmp0_other_with_cast.l29_1))
      return false;
    if (!(this.m29_1 == tmp0_other_with_cast.m29_1))
      return false;
    if (!(this.n29_1 == tmp0_other_with_cast.n29_1))
      return false;
    if (!(this.o29_1 == tmp0_other_with_cast.o29_1))
      return false;
    if (!(this.p29_1 == tmp0_other_with_cast.p29_1))
      return false;
    if (!equals(this.q29_1, tmp0_other_with_cast.q29_1))
      return false;
    return true;
  }
  static r29(seen0, seen1, merchantID, payAPIId, terminalID, expDate, acctNo, cardType, tranCode, authCode, avsResult, cvvResult, captureStatus, cardholderName, cardHolderID, refNo, operatorID, invoiceNo, acqRefData, processorToken, postProcess, processData, recordNo, recurringData, entryMethod, date, time, applicationLabel, tvr, aid, iad, tsi, arc, cvm, receiptLanguage, customerReceiptLanguage, isoRespCode, networkName, amount, serializationConstructorMarker) {
    if (!!(!(0 === (0 & seen0)) | !(0 === (0 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([0, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_40().e28_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.g28_1 = null;
    else
      $this.g28_1 = merchantID;
    if (0 === (seen0 & 2))
      $this.h28_1 = null;
    else
      $this.h28_1 = payAPIId;
    if (0 === (seen0 & 4))
      $this.i28_1 = null;
    else
      $this.i28_1 = terminalID;
    if (0 === (seen0 & 8))
      $this.j28_1 = null;
    else
      $this.j28_1 = expDate;
    if (0 === (seen0 & 16))
      $this.k28_1 = null;
    else
      $this.k28_1 = acctNo;
    if (0 === (seen0 & 32))
      $this.l28_1 = null;
    else
      $this.l28_1 = cardType;
    if (0 === (seen0 & 64))
      $this.m28_1 = null;
    else
      $this.m28_1 = tranCode;
    if (0 === (seen0 & 128))
      $this.n28_1 = null;
    else
      $this.n28_1 = authCode;
    if (0 === (seen0 & 256))
      $this.o28_1 = null;
    else
      $this.o28_1 = avsResult;
    if (0 === (seen0 & 512))
      $this.p28_1 = null;
    else
      $this.p28_1 = cvvResult;
    if (0 === (seen0 & 1024))
      $this.q28_1 = null;
    else
      $this.q28_1 = captureStatus;
    if (0 === (seen0 & 2048))
      $this.r28_1 = null;
    else
      $this.r28_1 = cardholderName;
    if (0 === (seen0 & 4096))
      $this.s28_1 = null;
    else
      $this.s28_1 = cardHolderID;
    if (0 === (seen0 & 8192))
      $this.t28_1 = null;
    else
      $this.t28_1 = refNo;
    if (0 === (seen0 & 16384))
      $this.u28_1 = null;
    else
      $this.u28_1 = operatorID;
    if (0 === (seen0 & 32768))
      $this.v28_1 = null;
    else
      $this.v28_1 = invoiceNo;
    if (0 === (seen0 & 65536))
      $this.w28_1 = null;
    else
      $this.w28_1 = acqRefData;
    if (0 === (seen0 & 131072))
      $this.x28_1 = null;
    else
      $this.x28_1 = processorToken;
    if (0 === (seen0 & 262144))
      $this.y28_1 = null;
    else
      $this.y28_1 = postProcess;
    if (0 === (seen0 & 524288))
      $this.z28_1 = null;
    else
      $this.z28_1 = processData;
    if (0 === (seen0 & 1048576))
      $this.a29_1 = null;
    else
      $this.a29_1 = recordNo;
    if (0 === (seen0 & 2097152))
      $this.b29_1 = null;
    else
      $this.b29_1 = recurringData;
    if (0 === (seen0 & 4194304))
      $this.c29_1 = null;
    else
      $this.c29_1 = entryMethod;
    if (0 === (seen0 & 8388608))
      $this.d29_1 = null;
    else
      $this.d29_1 = date;
    if (0 === (seen0 & 16777216))
      $this.e29_1 = null;
    else
      $this.e29_1 = time;
    if (0 === (seen0 & 33554432))
      $this.f29_1 = null;
    else
      $this.f29_1 = applicationLabel;
    if (0 === (seen0 & 67108864))
      $this.g29_1 = null;
    else
      $this.g29_1 = tvr;
    if (0 === (seen0 & 134217728))
      $this.h29_1 = null;
    else
      $this.h29_1 = aid;
    if (0 === (seen0 & 268435456))
      $this.i29_1 = null;
    else
      $this.i29_1 = iad;
    if (0 === (seen0 & 536870912))
      $this.j29_1 = null;
    else
      $this.j29_1 = tsi;
    if (0 === (seen0 & 1073741824))
      $this.k29_1 = null;
    else
      $this.k29_1 = arc;
    if (0 === (seen0 & -2147483648))
      $this.l29_1 = null;
    else
      $this.l29_1 = cvm;
    if (0 === (seen1 & 1))
      $this.m29_1 = null;
    else
      $this.m29_1 = receiptLanguage;
    if (0 === (seen1 & 2))
      $this.n29_1 = null;
    else
      $this.n29_1 = customerReceiptLanguage;
    if (0 === (seen1 & 4))
      $this.o29_1 = null;
    else
      $this.o29_1 = isoRespCode;
    if (0 === (seen1 & 8))
      $this.p29_1 = null;
    else
      $this.p29_1 = networkName;
    if (0 === (seen1 & 16))
      $this.q29_1 = null;
    else
      $this.q29_1 = amount;
    return $this;
  }
}
class Companion_41 {}
class $serializer_41 {
  constructor() {
    $serializer_instance_41 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.Amount2', this, 5);
    tmp0_serialDesc.aw('Purchase', true);
    tmp0_serialDesc.aw('Authorize', true);
    tmp0_serialDesc.aw('CashBack', true);
    tmp0_serialDesc.aw('Gratuity', true);
    tmp0_serialDesc.aw('SurchargeWithLookup', true);
    this.s29_1 = tmp0_serialDesc;
  }
  t29(encoder, value) {
    var tmp0_desc = this.s29_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !equals(value.u29_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 0, value.u29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !equals(value.v29_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 1, value.v29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !equals(value.w29_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 2, value.w29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !equals(value.x29_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 3, value.x29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !equals(value.y29_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 4, value.y29_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.t29(encoder, value instanceof Amount2 ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.s29_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = 0.0;
    var tmp8_local4 = 0.0;
    var tmp9_input = decoder.so(tmp0_desc);
    if (tmp9_input.ip()) {
      tmp4_local0 = tmp9_input.ap(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ap(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ap(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ap(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ap(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ap(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ap(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ap(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ap(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ap(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp9_input.to(tmp0_desc);
    return Amount2.z29(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  al() {
    return this.s29_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance()];
  }
}
class Amount2 {
  constructor(purchase, authorize, cashBack, gratuity, surchargeWithLookup) {
    purchase = purchase === VOID ? 0.0 : purchase;
    authorize = authorize === VOID ? 0.0 : authorize;
    cashBack = cashBack === VOID ? 0.0 : cashBack;
    gratuity = gratuity === VOID ? 0.0 : gratuity;
    surchargeWithLookup = surchargeWithLookup === VOID ? 0.0 : surchargeWithLookup;
    this.u29_1 = purchase;
    this.v29_1 = authorize;
    this.w29_1 = cashBack;
    this.x29_1 = gratuity;
    this.y29_1 = surchargeWithLookup;
  }
  toString() {
    return 'Amount2(purchase=' + this.u29_1 + ', authorize=' + this.v29_1 + ', cashBack=' + this.w29_1 + ', gratuity=' + this.x29_1 + ', surchargeWithLookup=' + this.y29_1 + ')';
  }
  hashCode() {
    var result = getNumberHashCode(this.u29_1);
    result = imul(result, 31) + getNumberHashCode(this.v29_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w29_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x29_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y29_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Amount2))
      return false;
    var tmp0_other_with_cast = other instanceof Amount2 ? other : THROW_CCE();
    if (!equals(this.u29_1, tmp0_other_with_cast.u29_1))
      return false;
    if (!equals(this.v29_1, tmp0_other_with_cast.v29_1))
      return false;
    if (!equals(this.w29_1, tmp0_other_with_cast.w29_1))
      return false;
    if (!equals(this.x29_1, tmp0_other_with_cast.x29_1))
      return false;
    if (!equals(this.y29_1, tmp0_other_with_cast.y29_1))
      return false;
    return true;
  }
  static z29(seen0, purchase, authorize, cashBack, gratuity, surchargeWithLookup, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_41().s29_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.u29_1 = 0.0;
    else
      $this.u29_1 = purchase;
    if (0 === (seen0 & 2))
      $this.v29_1 = 0.0;
    else
      $this.v29_1 = authorize;
    if (0 === (seen0 & 4))
      $this.w29_1 = 0.0;
    else
      $this.w29_1 = cashBack;
    if (0 === (seen0 & 8))
      $this.x29_1 = 0.0;
    else
      $this.x29_1 = gratuity;
    if (0 === (seen0 & 16))
      $this.y29_1 = 0.0;
    else
      $this.y29_1 = surchargeWithLookup;
    return $this;
  }
}
class Companion_42 {
  constructor() {
    Companion_instance_42 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_9 = lazy(tmp_8, ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_3);
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_11 = lazy(tmp_10, ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_4);
    var tmp_12 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_13 = lazy(tmp_12, ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_5);
    var tmp_14 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a2a_1 = [null, null, null, null, null, null, tmp_1, null, null, tmp_3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_5, tmp_7, tmp_9, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_11, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_13, null, null, null, null, lazy(tmp_14, ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_6), null];
  }
}
class $serializer_42 {
  constructor() {
    $serializer_instance_42 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.model.ItemDetailsList', this, 66);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('item_id', true);
    tmp0_serialDesc.aw('is_stock', true);
    tmp0_serialDesc.aw('alias_name', true);
    tmp0_serialDesc.aw('dining_option', true);
    tmp0_serialDesc.aw('additional_price', true);
    tmp0_serialDesc.aw('selected_combo', true);
    tmp0_serialDesc.aw('name', true);
    tmp0_serialDesc.aw('main_item_id', true);
    tmp0_serialDesc.aw('tag', true);
    tmp0_serialDesc.aw('item_img', true);
    tmp0_serialDesc.aw('mappin_id', true);
    tmp0_serialDesc.aw('description', true);
    tmp0_serialDesc.aw('sku', true);
    tmp0_serialDesc.aw('quantity', true);
    tmp0_serialDesc.aw('regular_sales_unit_price', true);
    tmp0_serialDesc.aw('extended_amount', true);
    tmp0_serialDesc.aw('total_discount', true);
    tmp0_serialDesc.aw('total_item_tax', true);
    tmp0_serialDesc.aw('total_net_sale', true);
    tmp0_serialDesc.aw('status', true);
    tmp0_serialDesc.aw('category_id', true);
    tmp0_serialDesc.aw('item_name', false);
    tmp0_serialDesc.aw('variant_name', true);
    tmp0_serialDesc.aw('unit_of_measurement', true);
    tmp0_serialDesc.aw('store_id', true);
    tmp0_serialDesc.aw('sequence_no', true);
    tmp0_serialDesc.aw('tax', true);
    tmp0_serialDesc.aw('selected_modifier', true);
    tmp0_serialDesc.aw('selectedAddonsItems', true);
    tmp0_serialDesc.aw('printer_tag', true);
    tmp0_serialDesc.aw('item_confirmed', true);
    tmp0_serialDesc.aw('is_kot_printed', true);
    tmp0_serialDesc.aw('isSentItem', true);
    tmp0_serialDesc.aw('specialRequest', true);
    tmp0_serialDesc.aw('total_order_discount', true);
    tmp0_serialDesc.aw('sub_total', true);
    tmp0_serialDesc.aw('price_with_addons', true);
    tmp0_serialDesc.aw('isVoid', true);
    tmp0_serialDesc.aw('is_refund', true);
    tmp0_serialDesc.aw('is_void', true);
    tmp0_serialDesc.aw('is_out_of_stock', true);
    tmp0_serialDesc.aw('inventory_quantity', true);
    tmp0_serialDesc.aw('dietary', true);
    tmp0_serialDesc.aw('upc', true);
    tmp0_serialDesc.aw('nutrition', true);
    tmp0_serialDesc.aw('item_display_img', true);
    tmp0_serialDesc.aw('mainItemIndex', true);
    tmp0_serialDesc.aw('total_gross_sale', true);
    tmp0_serialDesc.aw('is_prepared', true);
    tmp0_serialDesc.aw('discount_percent', true);
    tmp0_serialDesc.aw('discount_amount', true);
    tmp0_serialDesc.aw('base_price', true);
    tmp0_serialDesc.aw('item_seq', true);
    tmp0_serialDesc.aw('original_plu', true);
    tmp0_serialDesc.aw('applied_discount', true);
    tmp0_serialDesc.aw('is_retail_price', true);
    tmp0_serialDesc.aw('item_type', true);
    tmp0_serialDesc.aw('combo_group_name', true);
    tmp0_serialDesc.aw('suggested_list', true);
    tmp0_serialDesc.aw('is_base_item', true);
    tmp0_serialDesc.aw('is_open_item', true);
    tmp0_serialDesc.aw('is_membership', true);
    tmp0_serialDesc.aw('is_selected_item', true);
    tmp0_serialDesc.aw('channel_plu', true);
    tmp0_serialDesc.aw('taxable_amount', true);
    this.b2a_1 = tmp0_serialDesc;
  }
  c2a(encoder, value) {
    var tmp0_desc = this.b2a_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_42().a2a_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.n1k_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.n1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.o1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.o1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.p1k_1 === false)) {
      tmp1_output.zp(tmp0_desc, 2, value.p1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.q1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.q1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.r1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.r1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.s1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, DoubleSerializer_getInstance(), value.s1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.t1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, tmp2_cached[6].g2(), value.t1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.u1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.u1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.v1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.v1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.w1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, tmp2_cached[9].g2(), value.w1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.x1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.x1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.y1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.y1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.z1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.z1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.a1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, StringSerializer_getInstance(), value.a1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.b1l_1 === 1)) {
      tmp1_output.cq(tmp0_desc, 14, value.b1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !equals(value.c1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 15, value.c1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !equals(value.d1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 16, value.d1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !equals(value.e1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 17, value.e1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !equals(value.f1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 18, value.f1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !equals(value.g1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 19, value.g1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !(value.h1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 20, BooleanSerializer_getInstance(), value.h1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.i1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 21, StringSerializer_getInstance(), value.i1l_1);
    }
    tmp1_output.hq(tmp0_desc, 22, value.j1l_1);
    if (tmp1_output.pq(tmp0_desc, 23) ? true : !(value.k1l_1 === '')) {
      tmp1_output.hq(tmp0_desc, 23, value.k1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 24) ? true : !(value.l1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 24, StringSerializer_getInstance(), value.l1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 25) ? true : !(value.m1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 25, StringSerializer_getInstance(), value.m1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 26) ? true : !(value.n1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 26, IntSerializer_getInstance(), value.n1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 27) ? true : !(value.o1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 27, tmp2_cached[27].g2(), value.o1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 28) ? true : !(value.p1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 28, tmp2_cached[28].g2(), value.p1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 29) ? true : !(value.q1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 29, tmp2_cached[29].g2(), value.q1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 30) ? true : !(value.r1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 30, $serializer_getInstance_46(), value.r1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 31) ? true : !(value.s1l_1 === false)) {
      tmp1_output.zp(tmp0_desc, 31, value.s1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 32) ? true : !(value.t1l_1 === false)) {
      tmp1_output.zp(tmp0_desc, 32, value.t1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 33) ? true : !(value.u1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 33, BooleanSerializer_getInstance(), value.u1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 34) ? true : !(value.v1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 34, StringSerializer_getInstance(), value.v1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 35) ? true : !equals(value.w1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 35, value.w1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 36) ? true : !equals(value.x1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 36, value.x1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 37) ? true : !equals(value.y1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 37, value.y1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 38) ? true : !(value.z1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 38, BooleanSerializer_getInstance(), value.z1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 39) ? true : !(value.a1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 39, BooleanSerializer_getInstance(), value.a1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 40) ? true : !(value.b1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 40, BooleanSerializer_getInstance(), value.b1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 41) ? true : !(value.c1m_1 === false)) {
      tmp1_output.zp(tmp0_desc, 41, value.c1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 42) ? true : !(value.d1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 42, IntSerializer_getInstance(), value.d1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 43) ? true : !(value.e1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 43, StringSerializer_getInstance(), value.e1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 44) ? true : !(value.f1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 44, StringSerializer_getInstance(), value.f1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 45) ? true : !(value.g1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 45, tmp2_cached[45].g2(), value.g1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 46) ? true : !(value.h1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 46, StringSerializer_getInstance(), value.h1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 47) ? true : !(value.i1m_1 === -1)) {
      tmp1_output.cq(tmp0_desc, 47, value.i1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 48) ? true : !equals(value.j1m_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 48, value.j1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 49) ? true : !(value.k1m_1 === false)) {
      tmp1_output.zp(tmp0_desc, 49, value.k1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 50) ? true : !equals(value.l1m_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 50, value.l1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 51) ? true : !equals(value.m1m_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 51, value.m1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 52) ? true : !equals(value.n1m_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 52, value.n1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 53) ? true : !(value.o1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 53, IntSerializer_getInstance(), value.o1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 54) ? true : !equals(value.p1m_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 54, value.p1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 55) ? true : !(value.q1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 55, $serializer_getInstance_12(), value.q1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 56) ? true : !(value.r1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 56, BooleanSerializer_getInstance(), value.r1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 57) ? true : !(value.s1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 57, StringSerializer_getInstance(), value.s1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 58) ? true : !(value.t1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 58, StringSerializer_getInstance(), value.t1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 59) ? true : !(value.u1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 59, tmp2_cached[59].g2(), value.u1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 60) ? true : !(value.v1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 60, BooleanSerializer_getInstance(), value.v1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 61) ? true : !(value.w1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 61, BooleanSerializer_getInstance(), value.w1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 62) ? true : !(value.x1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 62, BooleanSerializer_getInstance(), value.x1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 63) ? true : !(value.y1m_1 === false)) {
      tmp1_output.zp(tmp0_desc, 63, value.y1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 64) ? true : !(value.z1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 64, tmp2_cached[64].g2(), value.z1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 65) ? true : !(value.a1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 65, DoubleSerializer_getInstance(), value.a1n_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.c2a(encoder, value instanceof ItemDetailsList ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.b2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_bitMask2 = 0;
    var tmp6_local0 = null;
    var tmp7_local1 = null;
    var tmp8_local2 = false;
    var tmp9_local3 = null;
    var tmp10_local4 = null;
    var tmp11_local5 = null;
    var tmp12_local6 = null;
    var tmp13_local7 = null;
    var tmp14_local8 = null;
    var tmp15_local9 = null;
    var tmp16_local10 = null;
    var tmp17_local11 = null;
    var tmp18_local12 = null;
    var tmp19_local13 = null;
    var tmp20_local14 = 0;
    var tmp21_local15 = 0.0;
    var tmp22_local16 = 0.0;
    var tmp23_local17 = 0.0;
    var tmp24_local18 = 0.0;
    var tmp25_local19 = 0.0;
    var tmp26_local20 = null;
    var tmp27_local21 = null;
    var tmp28_local22 = null;
    var tmp29_local23 = null;
    var tmp30_local24 = null;
    var tmp31_local25 = null;
    var tmp32_local26 = null;
    var tmp33_local27 = null;
    var tmp34_local28 = null;
    var tmp35_local29 = null;
    var tmp36_local30 = null;
    var tmp37_local31 = false;
    var tmp38_local32 = false;
    var tmp39_local33 = null;
    var tmp40_local34 = null;
    var tmp41_local35 = 0.0;
    var tmp42_local36 = 0.0;
    var tmp43_local37 = 0.0;
    var tmp44_local38 = null;
    var tmp45_local39 = null;
    var tmp46_local40 = null;
    var tmp47_local41 = false;
    var tmp48_local42 = null;
    var tmp49_local43 = null;
    var tmp50_local44 = null;
    var tmp51_local45 = null;
    var tmp52_local46 = null;
    var tmp53_local47 = 0;
    var tmp54_local48 = 0.0;
    var tmp55_local49 = false;
    var tmp56_local50 = 0.0;
    var tmp57_local51 = 0.0;
    var tmp58_local52 = 0.0;
    var tmp59_local53 = null;
    var tmp60_local54 = 0.0;
    var tmp61_local55 = null;
    var tmp62_local56 = null;
    var tmp63_local57 = null;
    var tmp64_local58 = null;
    var tmp65_local59 = null;
    var tmp66_local60 = null;
    var tmp67_local61 = null;
    var tmp68_local62 = null;
    var tmp69_local63 = false;
    var tmp70_local64 = null;
    var tmp71_local65 = null;
    var tmp72_input = decoder.so(tmp0_desc);
    var tmp73_cached = Companion_getInstance_42().a2a_1;
    if (tmp72_input.ip()) {
      tmp6_local0 = tmp72_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp7_local1 = tmp72_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp7_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp8_local2 = tmp72_input.uo(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp9_local3 = tmp72_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp9_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp10_local4 = tmp72_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp10_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp11_local5 = tmp72_input.gp(tmp0_desc, 5, DoubleSerializer_getInstance(), tmp11_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp12_local6 = tmp72_input.gp(tmp0_desc, 6, tmp73_cached[6].g2(), tmp12_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp13_local7 = tmp72_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp13_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp14_local8 = tmp72_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp14_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp15_local9 = tmp72_input.gp(tmp0_desc, 9, tmp73_cached[9].g2(), tmp15_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp16_local10 = tmp72_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp16_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp17_local11 = tmp72_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp17_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp18_local12 = tmp72_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp18_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp19_local13 = tmp72_input.gp(tmp0_desc, 13, StringSerializer_getInstance(), tmp19_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp20_local14 = tmp72_input.xo(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp21_local15 = tmp72_input.ap(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp22_local16 = tmp72_input.ap(tmp0_desc, 16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp23_local17 = tmp72_input.ap(tmp0_desc, 17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp24_local18 = tmp72_input.ap(tmp0_desc, 18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp25_local19 = tmp72_input.ap(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp26_local20 = tmp72_input.gp(tmp0_desc, 20, BooleanSerializer_getInstance(), tmp26_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp27_local21 = tmp72_input.gp(tmp0_desc, 21, StringSerializer_getInstance(), tmp27_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp28_local22 = tmp72_input.cp(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp29_local23 = tmp72_input.cp(tmp0_desc, 23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp30_local24 = tmp72_input.gp(tmp0_desc, 24, StringSerializer_getInstance(), tmp30_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp31_local25 = tmp72_input.gp(tmp0_desc, 25, StringSerializer_getInstance(), tmp31_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp32_local26 = tmp72_input.gp(tmp0_desc, 26, IntSerializer_getInstance(), tmp32_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp33_local27 = tmp72_input.gp(tmp0_desc, 27, tmp73_cached[27].g2(), tmp33_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp34_local28 = tmp72_input.gp(tmp0_desc, 28, tmp73_cached[28].g2(), tmp34_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp35_local29 = tmp72_input.gp(tmp0_desc, 29, tmp73_cached[29].g2(), tmp35_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp36_local30 = tmp72_input.gp(tmp0_desc, 30, $serializer_getInstance_46(), tmp36_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp37_local31 = tmp72_input.uo(tmp0_desc, 31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp38_local32 = tmp72_input.uo(tmp0_desc, 32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp39_local33 = tmp72_input.gp(tmp0_desc, 33, BooleanSerializer_getInstance(), tmp39_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp40_local34 = tmp72_input.gp(tmp0_desc, 34, StringSerializer_getInstance(), tmp40_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp41_local35 = tmp72_input.ap(tmp0_desc, 35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp42_local36 = tmp72_input.ap(tmp0_desc, 36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp43_local37 = tmp72_input.ap(tmp0_desc, 37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp44_local38 = tmp72_input.gp(tmp0_desc, 38, BooleanSerializer_getInstance(), tmp44_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp45_local39 = tmp72_input.gp(tmp0_desc, 39, BooleanSerializer_getInstance(), tmp45_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp46_local40 = tmp72_input.gp(tmp0_desc, 40, BooleanSerializer_getInstance(), tmp46_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp47_local41 = tmp72_input.uo(tmp0_desc, 41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp48_local42 = tmp72_input.gp(tmp0_desc, 42, IntSerializer_getInstance(), tmp48_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp49_local43 = tmp72_input.gp(tmp0_desc, 43, StringSerializer_getInstance(), tmp49_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp50_local44 = tmp72_input.gp(tmp0_desc, 44, StringSerializer_getInstance(), tmp50_local44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
      tmp51_local45 = tmp72_input.gp(tmp0_desc, 45, tmp73_cached[45].g2(), tmp51_local45);
      tmp4_bitMask1 = tmp4_bitMask1 | 8192;
      tmp52_local46 = tmp72_input.gp(tmp0_desc, 46, StringSerializer_getInstance(), tmp52_local46);
      tmp4_bitMask1 = tmp4_bitMask1 | 16384;
      tmp53_local47 = tmp72_input.xo(tmp0_desc, 47);
      tmp4_bitMask1 = tmp4_bitMask1 | 32768;
      tmp54_local48 = tmp72_input.ap(tmp0_desc, 48);
      tmp4_bitMask1 = tmp4_bitMask1 | 65536;
      tmp55_local49 = tmp72_input.uo(tmp0_desc, 49);
      tmp4_bitMask1 = tmp4_bitMask1 | 131072;
      tmp56_local50 = tmp72_input.ap(tmp0_desc, 50);
      tmp4_bitMask1 = tmp4_bitMask1 | 262144;
      tmp57_local51 = tmp72_input.ap(tmp0_desc, 51);
      tmp4_bitMask1 = tmp4_bitMask1 | 524288;
      tmp58_local52 = tmp72_input.ap(tmp0_desc, 52);
      tmp4_bitMask1 = tmp4_bitMask1 | 1048576;
      tmp59_local53 = tmp72_input.gp(tmp0_desc, 53, IntSerializer_getInstance(), tmp59_local53);
      tmp4_bitMask1 = tmp4_bitMask1 | 2097152;
      tmp60_local54 = tmp72_input.ap(tmp0_desc, 54);
      tmp4_bitMask1 = tmp4_bitMask1 | 4194304;
      tmp61_local55 = tmp72_input.gp(tmp0_desc, 55, $serializer_getInstance_12(), tmp61_local55);
      tmp4_bitMask1 = tmp4_bitMask1 | 8388608;
      tmp62_local56 = tmp72_input.gp(tmp0_desc, 56, BooleanSerializer_getInstance(), tmp62_local56);
      tmp4_bitMask1 = tmp4_bitMask1 | 16777216;
      tmp63_local57 = tmp72_input.gp(tmp0_desc, 57, StringSerializer_getInstance(), tmp63_local57);
      tmp4_bitMask1 = tmp4_bitMask1 | 33554432;
      tmp64_local58 = tmp72_input.gp(tmp0_desc, 58, StringSerializer_getInstance(), tmp64_local58);
      tmp4_bitMask1 = tmp4_bitMask1 | 67108864;
      tmp65_local59 = tmp72_input.gp(tmp0_desc, 59, tmp73_cached[59].g2(), tmp65_local59);
      tmp4_bitMask1 = tmp4_bitMask1 | 134217728;
      tmp66_local60 = tmp72_input.gp(tmp0_desc, 60, BooleanSerializer_getInstance(), tmp66_local60);
      tmp4_bitMask1 = tmp4_bitMask1 | 268435456;
      tmp67_local61 = tmp72_input.gp(tmp0_desc, 61, BooleanSerializer_getInstance(), tmp67_local61);
      tmp4_bitMask1 = tmp4_bitMask1 | 536870912;
      tmp68_local62 = tmp72_input.gp(tmp0_desc, 62, BooleanSerializer_getInstance(), tmp68_local62);
      tmp4_bitMask1 = tmp4_bitMask1 | 1073741824;
      tmp69_local63 = tmp72_input.uo(tmp0_desc, 63);
      tmp4_bitMask1 = tmp4_bitMask1 | -2147483648;
      tmp70_local64 = tmp72_input.gp(tmp0_desc, 64, tmp73_cached[64].g2(), tmp70_local64);
      tmp5_bitMask2 = tmp5_bitMask2 | 1;
      tmp71_local65 = tmp72_input.gp(tmp0_desc, 65, DoubleSerializer_getInstance(), tmp71_local65);
      tmp5_bitMask2 = tmp5_bitMask2 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp72_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp6_local0 = tmp72_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp7_local1 = tmp72_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp7_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp8_local2 = tmp72_input.uo(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp9_local3 = tmp72_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp9_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp10_local4 = tmp72_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp10_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp11_local5 = tmp72_input.gp(tmp0_desc, 5, DoubleSerializer_getInstance(), tmp11_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp12_local6 = tmp72_input.gp(tmp0_desc, 6, tmp73_cached[6].g2(), tmp12_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp13_local7 = tmp72_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp13_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp14_local8 = tmp72_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp14_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp15_local9 = tmp72_input.gp(tmp0_desc, 9, tmp73_cached[9].g2(), tmp15_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp16_local10 = tmp72_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp16_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp17_local11 = tmp72_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp17_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp18_local12 = tmp72_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp18_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp19_local13 = tmp72_input.gp(tmp0_desc, 13, StringSerializer_getInstance(), tmp19_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp20_local14 = tmp72_input.xo(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp21_local15 = tmp72_input.ap(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp22_local16 = tmp72_input.ap(tmp0_desc, 16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp23_local17 = tmp72_input.ap(tmp0_desc, 17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp24_local18 = tmp72_input.ap(tmp0_desc, 18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp25_local19 = tmp72_input.ap(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp26_local20 = tmp72_input.gp(tmp0_desc, 20, BooleanSerializer_getInstance(), tmp26_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp27_local21 = tmp72_input.gp(tmp0_desc, 21, StringSerializer_getInstance(), tmp27_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp28_local22 = tmp72_input.cp(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp29_local23 = tmp72_input.cp(tmp0_desc, 23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp30_local24 = tmp72_input.gp(tmp0_desc, 24, StringSerializer_getInstance(), tmp30_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp31_local25 = tmp72_input.gp(tmp0_desc, 25, StringSerializer_getInstance(), tmp31_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp32_local26 = tmp72_input.gp(tmp0_desc, 26, IntSerializer_getInstance(), tmp32_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp33_local27 = tmp72_input.gp(tmp0_desc, 27, tmp73_cached[27].g2(), tmp33_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp34_local28 = tmp72_input.gp(tmp0_desc, 28, tmp73_cached[28].g2(), tmp34_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp35_local29 = tmp72_input.gp(tmp0_desc, 29, tmp73_cached[29].g2(), tmp35_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp36_local30 = tmp72_input.gp(tmp0_desc, 30, $serializer_getInstance_46(), tmp36_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp37_local31 = tmp72_input.uo(tmp0_desc, 31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp38_local32 = tmp72_input.uo(tmp0_desc, 32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp39_local33 = tmp72_input.gp(tmp0_desc, 33, BooleanSerializer_getInstance(), tmp39_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp40_local34 = tmp72_input.gp(tmp0_desc, 34, StringSerializer_getInstance(), tmp40_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp41_local35 = tmp72_input.ap(tmp0_desc, 35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp42_local36 = tmp72_input.ap(tmp0_desc, 36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp43_local37 = tmp72_input.ap(tmp0_desc, 37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp44_local38 = tmp72_input.gp(tmp0_desc, 38, BooleanSerializer_getInstance(), tmp44_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp45_local39 = tmp72_input.gp(tmp0_desc, 39, BooleanSerializer_getInstance(), tmp45_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp46_local40 = tmp72_input.gp(tmp0_desc, 40, BooleanSerializer_getInstance(), tmp46_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp47_local41 = tmp72_input.uo(tmp0_desc, 41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp48_local42 = tmp72_input.gp(tmp0_desc, 42, IntSerializer_getInstance(), tmp48_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp49_local43 = tmp72_input.gp(tmp0_desc, 43, StringSerializer_getInstance(), tmp49_local43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          case 44:
            tmp50_local44 = tmp72_input.gp(tmp0_desc, 44, StringSerializer_getInstance(), tmp50_local44);
            tmp4_bitMask1 = tmp4_bitMask1 | 4096;
            break;
          case 45:
            tmp51_local45 = tmp72_input.gp(tmp0_desc, 45, tmp73_cached[45].g2(), tmp51_local45);
            tmp4_bitMask1 = tmp4_bitMask1 | 8192;
            break;
          case 46:
            tmp52_local46 = tmp72_input.gp(tmp0_desc, 46, StringSerializer_getInstance(), tmp52_local46);
            tmp4_bitMask1 = tmp4_bitMask1 | 16384;
            break;
          case 47:
            tmp53_local47 = tmp72_input.xo(tmp0_desc, 47);
            tmp4_bitMask1 = tmp4_bitMask1 | 32768;
            break;
          case 48:
            tmp54_local48 = tmp72_input.ap(tmp0_desc, 48);
            tmp4_bitMask1 = tmp4_bitMask1 | 65536;
            break;
          case 49:
            tmp55_local49 = tmp72_input.uo(tmp0_desc, 49);
            tmp4_bitMask1 = tmp4_bitMask1 | 131072;
            break;
          case 50:
            tmp56_local50 = tmp72_input.ap(tmp0_desc, 50);
            tmp4_bitMask1 = tmp4_bitMask1 | 262144;
            break;
          case 51:
            tmp57_local51 = tmp72_input.ap(tmp0_desc, 51);
            tmp4_bitMask1 = tmp4_bitMask1 | 524288;
            break;
          case 52:
            tmp58_local52 = tmp72_input.ap(tmp0_desc, 52);
            tmp4_bitMask1 = tmp4_bitMask1 | 1048576;
            break;
          case 53:
            tmp59_local53 = tmp72_input.gp(tmp0_desc, 53, IntSerializer_getInstance(), tmp59_local53);
            tmp4_bitMask1 = tmp4_bitMask1 | 2097152;
            break;
          case 54:
            tmp60_local54 = tmp72_input.ap(tmp0_desc, 54);
            tmp4_bitMask1 = tmp4_bitMask1 | 4194304;
            break;
          case 55:
            tmp61_local55 = tmp72_input.gp(tmp0_desc, 55, $serializer_getInstance_12(), tmp61_local55);
            tmp4_bitMask1 = tmp4_bitMask1 | 8388608;
            break;
          case 56:
            tmp62_local56 = tmp72_input.gp(tmp0_desc, 56, BooleanSerializer_getInstance(), tmp62_local56);
            tmp4_bitMask1 = tmp4_bitMask1 | 16777216;
            break;
          case 57:
            tmp63_local57 = tmp72_input.gp(tmp0_desc, 57, StringSerializer_getInstance(), tmp63_local57);
            tmp4_bitMask1 = tmp4_bitMask1 | 33554432;
            break;
          case 58:
            tmp64_local58 = tmp72_input.gp(tmp0_desc, 58, StringSerializer_getInstance(), tmp64_local58);
            tmp4_bitMask1 = tmp4_bitMask1 | 67108864;
            break;
          case 59:
            tmp65_local59 = tmp72_input.gp(tmp0_desc, 59, tmp73_cached[59].g2(), tmp65_local59);
            tmp4_bitMask1 = tmp4_bitMask1 | 134217728;
            break;
          case 60:
            tmp66_local60 = tmp72_input.gp(tmp0_desc, 60, BooleanSerializer_getInstance(), tmp66_local60);
            tmp4_bitMask1 = tmp4_bitMask1 | 268435456;
            break;
          case 61:
            tmp67_local61 = tmp72_input.gp(tmp0_desc, 61, BooleanSerializer_getInstance(), tmp67_local61);
            tmp4_bitMask1 = tmp4_bitMask1 | 536870912;
            break;
          case 62:
            tmp68_local62 = tmp72_input.gp(tmp0_desc, 62, BooleanSerializer_getInstance(), tmp68_local62);
            tmp4_bitMask1 = tmp4_bitMask1 | 1073741824;
            break;
          case 63:
            tmp69_local63 = tmp72_input.uo(tmp0_desc, 63);
            tmp4_bitMask1 = tmp4_bitMask1 | -2147483648;
            break;
          case 64:
            tmp70_local64 = tmp72_input.gp(tmp0_desc, 64, tmp73_cached[64].g2(), tmp70_local64);
            tmp5_bitMask2 = tmp5_bitMask2 | 1;
            break;
          case 65:
            tmp71_local65 = tmp72_input.gp(tmp0_desc, 65, DoubleSerializer_getInstance(), tmp71_local65);
            tmp5_bitMask2 = tmp5_bitMask2 | 2;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp72_input.to(tmp0_desc);
    return ItemDetailsList.d2a(tmp3_bitMask0, tmp4_bitMask1, tmp5_bitMask2, tmp6_local0, tmp7_local1, tmp8_local2, tmp9_local3, tmp10_local4, tmp11_local5, tmp12_local6, tmp13_local7, tmp14_local8, tmp15_local9, tmp16_local10, tmp17_local11, tmp18_local12, tmp19_local13, tmp20_local14, tmp21_local15, tmp22_local16, tmp23_local17, tmp24_local18, tmp25_local19, tmp26_local20, tmp27_local21, tmp28_local22, tmp29_local23, tmp30_local24, tmp31_local25, tmp32_local26, tmp33_local27, tmp34_local28, tmp35_local29, tmp36_local30, tmp37_local31, tmp38_local32, tmp39_local33, tmp40_local34, tmp41_local35, tmp42_local36, tmp43_local37, tmp44_local38, tmp45_local39, tmp46_local40, tmp47_local41, tmp48_local42, tmp49_local43, tmp50_local44, tmp51_local45, tmp52_local46, tmp53_local47, tmp54_local48, tmp55_local49, tmp56_local50, tmp57_local51, tmp58_local52, tmp59_local53, tmp60_local54, tmp61_local55, tmp62_local56, tmp63_local57, tmp64_local58, tmp65_local59, tmp66_local60, tmp67_local61, tmp68_local62, tmp69_local63, tmp70_local64, tmp71_local65, null);
  }
  al() {
    return this.b2a_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_42().a2a_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(tmp0_cached[6].g2()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[9].g2()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[27].g2()), get_nullable(tmp0_cached[28].g2()), get_nullable(tmp0_cached[29].g2()), get_nullable($serializer_getInstance_46()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[45].g2()), get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), DoubleSerializer_getInstance(), BooleanSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(IntSerializer_getInstance()), DoubleSerializer_getInstance(), get_nullable($serializer_getInstance_12()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[59].g2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable(tmp0_cached[64].g2()), get_nullable(DoubleSerializer_getInstance())];
  }
}
class ItemDetailsList {
  constructor(id, itemId, isStock, aliasName, diningOption, additionalPrice, selectedCombo, name, mainItemID, tag, itemImage, mappingId, description, sku, quantity, regularSalesUnitPrice, extendedAmount, totalDiscount, totalItemTax, totalNetSale, status, categoryId, itemName, variantName, unitOfMeasurement, storeId, sequenceNo, taxList, selectedModifier, selectedAddonsItems, printerTag, itemConfirmed, isKotPrinted, isSentItem, specialRequest, totalOrderDiscount, subTotal, priceWithAddons, isVoid, isRefund, is_void, isOutOfStock, inventoryQuantity, dietary, upc, nutrition, itemDisplayImage, mainItemIndex, totalGrossSale, isPrepared, discountPercent, discountAmount, basePrice, itemSeq, originalPrice, appliedDiscount, isRetailPrice, itemType, comboGroupName, suggestedItems, isBaseItem, isOpenItem, isMembership, isSelectedItem, channelPlu, taxableAmount) {
    Companion_getInstance_42();
    id = id === VOID ? '' : id;
    itemId = itemId === VOID ? null : itemId;
    isStock = isStock === VOID ? false : isStock;
    aliasName = aliasName === VOID ? null : aliasName;
    diningOption = diningOption === VOID ? null : diningOption;
    additionalPrice = additionalPrice === VOID ? null : additionalPrice;
    selectedCombo = selectedCombo === VOID ? null : selectedCombo;
    name = name === VOID ? null : name;
    mainItemID = mainItemID === VOID ? null : mainItemID;
    tag = tag === VOID ? null : tag;
    itemImage = itemImage === VOID ? null : itemImage;
    mappingId = mappingId === VOID ? null : mappingId;
    description = description === VOID ? null : description;
    sku = sku === VOID ? null : sku;
    quantity = quantity === VOID ? 1 : quantity;
    regularSalesUnitPrice = regularSalesUnitPrice === VOID ? 0.0 : regularSalesUnitPrice;
    extendedAmount = extendedAmount === VOID ? 0.0 : extendedAmount;
    totalDiscount = totalDiscount === VOID ? 0.0 : totalDiscount;
    totalItemTax = totalItemTax === VOID ? 0.0 : totalItemTax;
    totalNetSale = totalNetSale === VOID ? 0.0 : totalNetSale;
    status = status === VOID ? null : status;
    categoryId = categoryId === VOID ? null : categoryId;
    variantName = variantName === VOID ? '' : variantName;
    unitOfMeasurement = unitOfMeasurement === VOID ? null : unitOfMeasurement;
    storeId = storeId === VOID ? null : storeId;
    sequenceNo = sequenceNo === VOID ? null : sequenceNo;
    taxList = taxList === VOID ? null : taxList;
    selectedModifier = selectedModifier === VOID ? null : selectedModifier;
    selectedAddonsItems = selectedAddonsItems === VOID ? null : selectedAddonsItems;
    printerTag = printerTag === VOID ? null : printerTag;
    itemConfirmed = itemConfirmed === VOID ? false : itemConfirmed;
    isKotPrinted = isKotPrinted === VOID ? false : isKotPrinted;
    isSentItem = isSentItem === VOID ? null : isSentItem;
    specialRequest = specialRequest === VOID ? null : specialRequest;
    totalOrderDiscount = totalOrderDiscount === VOID ? 0.0 : totalOrderDiscount;
    subTotal = subTotal === VOID ? 0.0 : subTotal;
    priceWithAddons = priceWithAddons === VOID ? 0.0 : priceWithAddons;
    isVoid = isVoid === VOID ? null : isVoid;
    isRefund = isRefund === VOID ? null : isRefund;
    is_void = is_void === VOID ? null : is_void;
    isOutOfStock = isOutOfStock === VOID ? false : isOutOfStock;
    inventoryQuantity = inventoryQuantity === VOID ? null : inventoryQuantity;
    dietary = dietary === VOID ? null : dietary;
    upc = upc === VOID ? null : upc;
    nutrition = nutrition === VOID ? null : nutrition;
    itemDisplayImage = itemDisplayImage === VOID ? null : itemDisplayImage;
    mainItemIndex = mainItemIndex === VOID ? -1 : mainItemIndex;
    totalGrossSale = totalGrossSale === VOID ? 0.0 : totalGrossSale;
    isPrepared = isPrepared === VOID ? false : isPrepared;
    discountPercent = discountPercent === VOID ? 0.0 : discountPercent;
    discountAmount = discountAmount === VOID ? 0.0 : discountAmount;
    basePrice = basePrice === VOID ? 0.0 : basePrice;
    itemSeq = itemSeq === VOID ? null : itemSeq;
    originalPrice = originalPrice === VOID ? 0.0 : originalPrice;
    appliedDiscount = appliedDiscount === VOID ? null : appliedDiscount;
    isRetailPrice = isRetailPrice === VOID ? null : isRetailPrice;
    itemType = itemType === VOID ? null : itemType;
    comboGroupName = comboGroupName === VOID ? null : comboGroupName;
    suggestedItems = suggestedItems === VOID ? null : suggestedItems;
    isBaseItem = isBaseItem === VOID ? null : isBaseItem;
    isOpenItem = isOpenItem === VOID ? null : isOpenItem;
    isMembership = isMembership === VOID ? null : isMembership;
    isSelectedItem = isSelectedItem === VOID ? false : isSelectedItem;
    channelPlu = channelPlu === VOID ? null : channelPlu;
    taxableAmount = taxableAmount === VOID ? null : taxableAmount;
    this.n1k_1 = id;
    this.o1k_1 = itemId;
    this.p1k_1 = isStock;
    this.q1k_1 = aliasName;
    this.r1k_1 = diningOption;
    this.s1k_1 = additionalPrice;
    this.t1k_1 = selectedCombo;
    this.u1k_1 = name;
    this.v1k_1 = mainItemID;
    this.w1k_1 = tag;
    this.x1k_1 = itemImage;
    this.y1k_1 = mappingId;
    this.z1k_1 = description;
    this.a1l_1 = sku;
    this.b1l_1 = quantity;
    this.c1l_1 = regularSalesUnitPrice;
    this.d1l_1 = extendedAmount;
    this.e1l_1 = totalDiscount;
    this.f1l_1 = totalItemTax;
    this.g1l_1 = totalNetSale;
    this.h1l_1 = status;
    this.i1l_1 = categoryId;
    this.j1l_1 = itemName;
    this.k1l_1 = variantName;
    this.l1l_1 = unitOfMeasurement;
    this.m1l_1 = storeId;
    this.n1l_1 = sequenceNo;
    this.o1l_1 = taxList;
    this.p1l_1 = selectedModifier;
    this.q1l_1 = selectedAddonsItems;
    this.r1l_1 = printerTag;
    this.s1l_1 = itemConfirmed;
    this.t1l_1 = isKotPrinted;
    this.u1l_1 = isSentItem;
    this.v1l_1 = specialRequest;
    this.w1l_1 = totalOrderDiscount;
    this.x1l_1 = subTotal;
    this.y1l_1 = priceWithAddons;
    this.z1l_1 = isVoid;
    this.a1m_1 = isRefund;
    this.b1m_1 = is_void;
    this.c1m_1 = isOutOfStock;
    this.d1m_1 = inventoryQuantity;
    this.e1m_1 = dietary;
    this.f1m_1 = upc;
    this.g1m_1 = nutrition;
    this.h1m_1 = itemDisplayImage;
    this.i1m_1 = mainItemIndex;
    this.j1m_1 = totalGrossSale;
    this.k1m_1 = isPrepared;
    this.l1m_1 = discountPercent;
    this.m1m_1 = discountAmount;
    this.n1m_1 = basePrice;
    this.o1m_1 = itemSeq;
    this.p1m_1 = originalPrice;
    this.q1m_1 = appliedDiscount;
    this.r1m_1 = isRetailPrice;
    this.s1m_1 = itemType;
    this.t1m_1 = comboGroupName;
    this.u1m_1 = suggestedItems;
    this.v1m_1 = isBaseItem;
    this.w1m_1 = isOpenItem;
    this.x1m_1 = isMembership;
    this.y1m_1 = isSelectedItem;
    this.z1m_1 = channelPlu;
    this.a1n_1 = taxableAmount;
  }
  e2a(id, itemId, isStock, aliasName, diningOption, additionalPrice, selectedCombo, name, mainItemID, tag, itemImage, mappingId, description, sku, quantity, regularSalesUnitPrice, extendedAmount, totalDiscount, totalItemTax, totalNetSale, status, categoryId, itemName, variantName, unitOfMeasurement, storeId, sequenceNo, taxList, selectedModifier, selectedAddonsItems, printerTag, itemConfirmed, isKotPrinted, isSentItem, specialRequest, totalOrderDiscount, subTotal, priceWithAddons, isVoid, isRefund, is_void, isOutOfStock, inventoryQuantity, dietary, upc, nutrition, itemDisplayImage, mainItemIndex, totalGrossSale, isPrepared, discountPercent, discountAmount, basePrice, itemSeq, originalPrice, appliedDiscount, isRetailPrice, itemType, comboGroupName, suggestedItems, isBaseItem, isOpenItem, isMembership, isSelectedItem, channelPlu, taxableAmount) {
    return new ItemDetailsList(id, itemId, isStock, aliasName, diningOption, additionalPrice, selectedCombo, name, mainItemID, tag, itemImage, mappingId, description, sku, quantity, regularSalesUnitPrice, extendedAmount, totalDiscount, totalItemTax, totalNetSale, status, categoryId, itemName, variantName, unitOfMeasurement, storeId, sequenceNo, taxList, selectedModifier, selectedAddonsItems, printerTag, itemConfirmed, isKotPrinted, isSentItem, specialRequest, totalOrderDiscount, subTotal, priceWithAddons, isVoid, isRefund, is_void, isOutOfStock, inventoryQuantity, dietary, upc, nutrition, itemDisplayImage, mainItemIndex, totalGrossSale, isPrepared, discountPercent, discountAmount, basePrice, itemSeq, originalPrice, appliedDiscount, isRetailPrice, itemType, comboGroupName, suggestedItems, isBaseItem, isOpenItem, isMembership, isSelectedItem, channelPlu, taxableAmount);
  }
  m1p(id, itemId, isStock, aliasName, diningOption, additionalPrice, selectedCombo, name, mainItemID, tag, itemImage, mappingId, description, sku, quantity, regularSalesUnitPrice, extendedAmount, totalDiscount, totalItemTax, totalNetSale, status, categoryId, itemName, variantName, unitOfMeasurement, storeId, sequenceNo, taxList, selectedModifier, selectedAddonsItems, printerTag, itemConfirmed, isKotPrinted, isSentItem, specialRequest, totalOrderDiscount, subTotal, priceWithAddons, isVoid, isRefund, is_void, isOutOfStock, inventoryQuantity, dietary, upc, nutrition, itemDisplayImage, mainItemIndex, totalGrossSale, isPrepared, discountPercent, discountAmount, basePrice, itemSeq, originalPrice, appliedDiscount, isRetailPrice, itemType, comboGroupName, suggestedItems, isBaseItem, isOpenItem, isMembership, isSelectedItem, channelPlu, taxableAmount, $super) {
    id = id === VOID ? this.n1k_1 : id;
    itemId = itemId === VOID ? this.o1k_1 : itemId;
    isStock = isStock === VOID ? this.p1k_1 : isStock;
    aliasName = aliasName === VOID ? this.q1k_1 : aliasName;
    diningOption = diningOption === VOID ? this.r1k_1 : diningOption;
    additionalPrice = additionalPrice === VOID ? this.s1k_1 : additionalPrice;
    selectedCombo = selectedCombo === VOID ? this.t1k_1 : selectedCombo;
    name = name === VOID ? this.u1k_1 : name;
    mainItemID = mainItemID === VOID ? this.v1k_1 : mainItemID;
    tag = tag === VOID ? this.w1k_1 : tag;
    itemImage = itemImage === VOID ? this.x1k_1 : itemImage;
    mappingId = mappingId === VOID ? this.y1k_1 : mappingId;
    description = description === VOID ? this.z1k_1 : description;
    sku = sku === VOID ? this.a1l_1 : sku;
    quantity = quantity === VOID ? this.b1l_1 : quantity;
    regularSalesUnitPrice = regularSalesUnitPrice === VOID ? this.c1l_1 : regularSalesUnitPrice;
    extendedAmount = extendedAmount === VOID ? this.d1l_1 : extendedAmount;
    totalDiscount = totalDiscount === VOID ? this.e1l_1 : totalDiscount;
    totalItemTax = totalItemTax === VOID ? this.f1l_1 : totalItemTax;
    totalNetSale = totalNetSale === VOID ? this.g1l_1 : totalNetSale;
    status = status === VOID ? this.h1l_1 : status;
    categoryId = categoryId === VOID ? this.i1l_1 : categoryId;
    itemName = itemName === VOID ? this.j1l_1 : itemName;
    variantName = variantName === VOID ? this.k1l_1 : variantName;
    unitOfMeasurement = unitOfMeasurement === VOID ? this.l1l_1 : unitOfMeasurement;
    storeId = storeId === VOID ? this.m1l_1 : storeId;
    sequenceNo = sequenceNo === VOID ? this.n1l_1 : sequenceNo;
    taxList = taxList === VOID ? this.o1l_1 : taxList;
    selectedModifier = selectedModifier === VOID ? this.p1l_1 : selectedModifier;
    selectedAddonsItems = selectedAddonsItems === VOID ? this.q1l_1 : selectedAddonsItems;
    printerTag = printerTag === VOID ? this.r1l_1 : printerTag;
    itemConfirmed = itemConfirmed === VOID ? this.s1l_1 : itemConfirmed;
    isKotPrinted = isKotPrinted === VOID ? this.t1l_1 : isKotPrinted;
    isSentItem = isSentItem === VOID ? this.u1l_1 : isSentItem;
    specialRequest = specialRequest === VOID ? this.v1l_1 : specialRequest;
    totalOrderDiscount = totalOrderDiscount === VOID ? this.w1l_1 : totalOrderDiscount;
    subTotal = subTotal === VOID ? this.x1l_1 : subTotal;
    priceWithAddons = priceWithAddons === VOID ? this.y1l_1 : priceWithAddons;
    isVoid = isVoid === VOID ? this.z1l_1 : isVoid;
    isRefund = isRefund === VOID ? this.a1m_1 : isRefund;
    is_void = is_void === VOID ? this.b1m_1 : is_void;
    isOutOfStock = isOutOfStock === VOID ? this.c1m_1 : isOutOfStock;
    inventoryQuantity = inventoryQuantity === VOID ? this.d1m_1 : inventoryQuantity;
    dietary = dietary === VOID ? this.e1m_1 : dietary;
    upc = upc === VOID ? this.f1m_1 : upc;
    nutrition = nutrition === VOID ? this.g1m_1 : nutrition;
    itemDisplayImage = itemDisplayImage === VOID ? this.h1m_1 : itemDisplayImage;
    mainItemIndex = mainItemIndex === VOID ? this.i1m_1 : mainItemIndex;
    totalGrossSale = totalGrossSale === VOID ? this.j1m_1 : totalGrossSale;
    isPrepared = isPrepared === VOID ? this.k1m_1 : isPrepared;
    discountPercent = discountPercent === VOID ? this.l1m_1 : discountPercent;
    discountAmount = discountAmount === VOID ? this.m1m_1 : discountAmount;
    basePrice = basePrice === VOID ? this.n1m_1 : basePrice;
    itemSeq = itemSeq === VOID ? this.o1m_1 : itemSeq;
    originalPrice = originalPrice === VOID ? this.p1m_1 : originalPrice;
    appliedDiscount = appliedDiscount === VOID ? this.q1m_1 : appliedDiscount;
    isRetailPrice = isRetailPrice === VOID ? this.r1m_1 : isRetailPrice;
    itemType = itemType === VOID ? this.s1m_1 : itemType;
    comboGroupName = comboGroupName === VOID ? this.t1m_1 : comboGroupName;
    suggestedItems = suggestedItems === VOID ? this.u1m_1 : suggestedItems;
    isBaseItem = isBaseItem === VOID ? this.v1m_1 : isBaseItem;
    isOpenItem = isOpenItem === VOID ? this.w1m_1 : isOpenItem;
    isMembership = isMembership === VOID ? this.x1m_1 : isMembership;
    isSelectedItem = isSelectedItem === VOID ? this.y1m_1 : isSelectedItem;
    channelPlu = channelPlu === VOID ? this.z1m_1 : channelPlu;
    taxableAmount = taxableAmount === VOID ? this.a1n_1 : taxableAmount;
    return $super === VOID ? this.e2a(id, itemId, isStock, aliasName, diningOption, additionalPrice, selectedCombo, name, mainItemID, tag, itemImage, mappingId, description, sku, quantity, regularSalesUnitPrice, extendedAmount, totalDiscount, totalItemTax, totalNetSale, status, categoryId, itemName, variantName, unitOfMeasurement, storeId, sequenceNo, taxList, selectedModifier, selectedAddonsItems, printerTag, itemConfirmed, isKotPrinted, isSentItem, specialRequest, totalOrderDiscount, subTotal, priceWithAddons, isVoid, isRefund, is_void, isOutOfStock, inventoryQuantity, dietary, upc, nutrition, itemDisplayImage, mainItemIndex, totalGrossSale, isPrepared, discountPercent, discountAmount, basePrice, itemSeq, originalPrice, appliedDiscount, isRetailPrice, itemType, comboGroupName, suggestedItems, isBaseItem, isOpenItem, isMembership, isSelectedItem, channelPlu, taxableAmount) : $super.e2a.call(this, id, itemId, isStock, aliasName, diningOption, additionalPrice, selectedCombo, name, mainItemID, tag, itemImage, mappingId, description, sku, quantity, regularSalesUnitPrice, extendedAmount, totalDiscount, totalItemTax, totalNetSale, status, categoryId, itemName, variantName, unitOfMeasurement, storeId, sequenceNo, taxList, selectedModifier, selectedAddonsItems, printerTag, itemConfirmed, isKotPrinted, isSentItem, specialRequest, totalOrderDiscount, subTotal, priceWithAddons, isVoid, isRefund, is_void, isOutOfStock, inventoryQuantity, dietary, upc, nutrition, itemDisplayImage, mainItemIndex, totalGrossSale, isPrepared, discountPercent, discountAmount, basePrice, itemSeq, originalPrice, appliedDiscount, isRetailPrice, itemType, comboGroupName, suggestedItems, isBaseItem, isOpenItem, isMembership, isSelectedItem, channelPlu, taxableAmount);
  }
  toString() {
    return 'ItemDetailsList(id=' + this.n1k_1 + ', itemId=' + this.o1k_1 + ', isStock=' + this.p1k_1 + ', aliasName=' + this.q1k_1 + ', diningOption=' + this.r1k_1 + ', additionalPrice=' + this.s1k_1 + ', selectedCombo=' + toString_0(this.t1k_1) + ', name=' + this.u1k_1 + ', mainItemID=' + this.v1k_1 + ', tag=' + toString_0(this.w1k_1) + ', itemImage=' + this.x1k_1 + ', mappingId=' + this.y1k_1 + ', description=' + this.z1k_1 + ', sku=' + this.a1l_1 + ', quantity=' + this.b1l_1 + ', regularSalesUnitPrice=' + this.c1l_1 + ', extendedAmount=' + this.d1l_1 + ', totalDiscount=' + this.e1l_1 + ', totalItemTax=' + this.f1l_1 + ', totalNetSale=' + this.g1l_1 + ', status=' + this.h1l_1 + ', categoryId=' + this.i1l_1 + ', itemName=' + this.j1l_1 + ', variantName=' + this.k1l_1 + ', unitOfMeasurement=' + this.l1l_1 + ', storeId=' + this.m1l_1 + ', sequenceNo=' + this.n1l_1 + ', taxList=' + toString_0(this.o1l_1) + ', selectedModifier=' + toString_0(this.p1l_1) + ', selectedAddonsItems=' + toString_0(this.q1l_1) + ', printerTag=' + toString_0(this.r1l_1) + ', itemConfirmed=' + this.s1l_1 + ', isKotPrinted=' + this.t1l_1 + ', isSentItem=' + this.u1l_1 + ', specialRequest=' + this.v1l_1 + ', totalOrderDiscount=' + this.w1l_1 + ', subTotal=' + this.x1l_1 + ', priceWithAddons=' + this.y1l_1 + ', isVoid=' + this.z1l_1 + ', isRefund=' + this.a1m_1 + ', is_void=' + this.b1m_1 + ', isOutOfStock=' + this.c1m_1 + ', inventoryQuantity=' + this.d1m_1 + ', dietary=' + this.e1m_1 + ', upc=' + this.f1m_1 + ', nutrition=' + toString_0(this.g1m_1) + ', itemDisplayImage=' + this.h1m_1 + ', mainItemIndex=' + this.i1m_1 + ', totalGrossSale=' + this.j1m_1 + ', isPrepared=' + this.k1m_1 + ', discountPercent=' + this.l1m_1 + ', discountAmount=' + this.m1m_1 + ', basePrice=' + this.n1m_1 + ', itemSeq=' + this.o1m_1 + ', originalPrice=' + this.p1m_1 + ', appliedDiscount=' + toString_0(this.q1m_1) + ', isRetailPrice=' + this.r1m_1 + ', itemType=' + this.s1m_1 + ', comboGroupName=' + this.t1m_1 + ', suggestedItems=' + toString_0(this.u1m_1) + ', isBaseItem=' + this.v1m_1 + ', isOpenItem=' + this.w1m_1 + ', isMembership=' + this.x1m_1 + ', isSelectedItem=' + this.y1m_1 + ', channelPlu=' + toString_0(this.z1m_1) + ', taxableAmount=' + this.a1n_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.n1k_1);
    result = imul(result, 31) + (this.o1k_1 == null ? 0 : getStringHashCode(this.o1k_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.p1k_1) | 0;
    result = imul(result, 31) + (this.q1k_1 == null ? 0 : getStringHashCode(this.q1k_1)) | 0;
    result = imul(result, 31) + (this.r1k_1 == null ? 0 : getStringHashCode(this.r1k_1)) | 0;
    result = imul(result, 31) + (this.s1k_1 == null ? 0 : getNumberHashCode(this.s1k_1)) | 0;
    result = imul(result, 31) + (this.t1k_1 == null ? 0 : this.t1k_1.hashCode()) | 0;
    result = imul(result, 31) + (this.u1k_1 == null ? 0 : getStringHashCode(this.u1k_1)) | 0;
    result = imul(result, 31) + (this.v1k_1 == null ? 0 : getStringHashCode(this.v1k_1)) | 0;
    result = imul(result, 31) + (this.w1k_1 == null ? 0 : hashCode(this.w1k_1)) | 0;
    result = imul(result, 31) + (this.x1k_1 == null ? 0 : getStringHashCode(this.x1k_1)) | 0;
    result = imul(result, 31) + (this.y1k_1 == null ? 0 : getStringHashCode(this.y1k_1)) | 0;
    result = imul(result, 31) + (this.z1k_1 == null ? 0 : getStringHashCode(this.z1k_1)) | 0;
    result = imul(result, 31) + (this.a1l_1 == null ? 0 : getStringHashCode(this.a1l_1)) | 0;
    result = imul(result, 31) + this.b1l_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.c1l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d1l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e1l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f1l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g1l_1) | 0;
    result = imul(result, 31) + (this.h1l_1 == null ? 0 : getBooleanHashCode(this.h1l_1)) | 0;
    result = imul(result, 31) + (this.i1l_1 == null ? 0 : getStringHashCode(this.i1l_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.j1l_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k1l_1) | 0;
    result = imul(result, 31) + (this.l1l_1 == null ? 0 : getStringHashCode(this.l1l_1)) | 0;
    result = imul(result, 31) + (this.m1l_1 == null ? 0 : getStringHashCode(this.m1l_1)) | 0;
    result = imul(result, 31) + (this.n1l_1 == null ? 0 : this.n1l_1) | 0;
    result = imul(result, 31) + (this.o1l_1 == null ? 0 : hashCode(this.o1l_1)) | 0;
    result = imul(result, 31) + (this.p1l_1 == null ? 0 : this.p1l_1.hashCode()) | 0;
    result = imul(result, 31) + (this.q1l_1 == null ? 0 : this.q1l_1.hashCode()) | 0;
    result = imul(result, 31) + (this.r1l_1 == null ? 0 : this.r1l_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.s1l_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.t1l_1) | 0;
    result = imul(result, 31) + (this.u1l_1 == null ? 0 : getBooleanHashCode(this.u1l_1)) | 0;
    result = imul(result, 31) + (this.v1l_1 == null ? 0 : getStringHashCode(this.v1l_1)) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w1l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x1l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y1l_1) | 0;
    result = imul(result, 31) + (this.z1l_1 == null ? 0 : getBooleanHashCode(this.z1l_1)) | 0;
    result = imul(result, 31) + (this.a1m_1 == null ? 0 : getBooleanHashCode(this.a1m_1)) | 0;
    result = imul(result, 31) + (this.b1m_1 == null ? 0 : getBooleanHashCode(this.b1m_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.c1m_1) | 0;
    result = imul(result, 31) + (this.d1m_1 == null ? 0 : this.d1m_1) | 0;
    result = imul(result, 31) + (this.e1m_1 == null ? 0 : getStringHashCode(this.e1m_1)) | 0;
    result = imul(result, 31) + (this.f1m_1 == null ? 0 : getStringHashCode(this.f1m_1)) | 0;
    result = imul(result, 31) + (this.g1m_1 == null ? 0 : this.g1m_1.hashCode()) | 0;
    result = imul(result, 31) + (this.h1m_1 == null ? 0 : getStringHashCode(this.h1m_1)) | 0;
    result = imul(result, 31) + this.i1m_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.j1m_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.k1m_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l1m_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m1m_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n1m_1) | 0;
    result = imul(result, 31) + (this.o1m_1 == null ? 0 : this.o1m_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p1m_1) | 0;
    result = imul(result, 31) + (this.q1m_1 == null ? 0 : this.q1m_1.hashCode()) | 0;
    result = imul(result, 31) + (this.r1m_1 == null ? 0 : getBooleanHashCode(this.r1m_1)) | 0;
    result = imul(result, 31) + (this.s1m_1 == null ? 0 : getStringHashCode(this.s1m_1)) | 0;
    result = imul(result, 31) + (this.t1m_1 == null ? 0 : getStringHashCode(this.t1m_1)) | 0;
    result = imul(result, 31) + (this.u1m_1 == null ? 0 : this.u1m_1.hashCode()) | 0;
    result = imul(result, 31) + (this.v1m_1 == null ? 0 : getBooleanHashCode(this.v1m_1)) | 0;
    result = imul(result, 31) + (this.w1m_1 == null ? 0 : getBooleanHashCode(this.w1m_1)) | 0;
    result = imul(result, 31) + (this.x1m_1 == null ? 0 : getBooleanHashCode(this.x1m_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.y1m_1) | 0;
    result = imul(result, 31) + (this.z1m_1 == null ? 0 : hashCode(this.z1m_1)) | 0;
    result = imul(result, 31) + (this.a1n_1 == null ? 0 : getNumberHashCode(this.a1n_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ItemDetailsList))
      return false;
    var tmp0_other_with_cast = other instanceof ItemDetailsList ? other : THROW_CCE();
    if (!(this.n1k_1 === tmp0_other_with_cast.n1k_1))
      return false;
    if (!(this.o1k_1 == tmp0_other_with_cast.o1k_1))
      return false;
    if (!(this.p1k_1 === tmp0_other_with_cast.p1k_1))
      return false;
    if (!(this.q1k_1 == tmp0_other_with_cast.q1k_1))
      return false;
    if (!(this.r1k_1 == tmp0_other_with_cast.r1k_1))
      return false;
    if (!equals(this.s1k_1, tmp0_other_with_cast.s1k_1))
      return false;
    if (!equals(this.t1k_1, tmp0_other_with_cast.t1k_1))
      return false;
    if (!(this.u1k_1 == tmp0_other_with_cast.u1k_1))
      return false;
    if (!(this.v1k_1 == tmp0_other_with_cast.v1k_1))
      return false;
    if (!equals(this.w1k_1, tmp0_other_with_cast.w1k_1))
      return false;
    if (!(this.x1k_1 == tmp0_other_with_cast.x1k_1))
      return false;
    if (!(this.y1k_1 == tmp0_other_with_cast.y1k_1))
      return false;
    if (!(this.z1k_1 == tmp0_other_with_cast.z1k_1))
      return false;
    if (!(this.a1l_1 == tmp0_other_with_cast.a1l_1))
      return false;
    if (!(this.b1l_1 === tmp0_other_with_cast.b1l_1))
      return false;
    if (!equals(this.c1l_1, tmp0_other_with_cast.c1l_1))
      return false;
    if (!equals(this.d1l_1, tmp0_other_with_cast.d1l_1))
      return false;
    if (!equals(this.e1l_1, tmp0_other_with_cast.e1l_1))
      return false;
    if (!equals(this.f1l_1, tmp0_other_with_cast.f1l_1))
      return false;
    if (!equals(this.g1l_1, tmp0_other_with_cast.g1l_1))
      return false;
    if (!(this.h1l_1 == tmp0_other_with_cast.h1l_1))
      return false;
    if (!(this.i1l_1 == tmp0_other_with_cast.i1l_1))
      return false;
    if (!(this.j1l_1 === tmp0_other_with_cast.j1l_1))
      return false;
    if (!(this.k1l_1 === tmp0_other_with_cast.k1l_1))
      return false;
    if (!(this.l1l_1 == tmp0_other_with_cast.l1l_1))
      return false;
    if (!(this.m1l_1 == tmp0_other_with_cast.m1l_1))
      return false;
    if (!(this.n1l_1 == tmp0_other_with_cast.n1l_1))
      return false;
    if (!equals(this.o1l_1, tmp0_other_with_cast.o1l_1))
      return false;
    if (!equals(this.p1l_1, tmp0_other_with_cast.p1l_1))
      return false;
    if (!equals(this.q1l_1, tmp0_other_with_cast.q1l_1))
      return false;
    if (!equals(this.r1l_1, tmp0_other_with_cast.r1l_1))
      return false;
    if (!(this.s1l_1 === tmp0_other_with_cast.s1l_1))
      return false;
    if (!(this.t1l_1 === tmp0_other_with_cast.t1l_1))
      return false;
    if (!(this.u1l_1 == tmp0_other_with_cast.u1l_1))
      return false;
    if (!(this.v1l_1 == tmp0_other_with_cast.v1l_1))
      return false;
    if (!equals(this.w1l_1, tmp0_other_with_cast.w1l_1))
      return false;
    if (!equals(this.x1l_1, tmp0_other_with_cast.x1l_1))
      return false;
    if (!equals(this.y1l_1, tmp0_other_with_cast.y1l_1))
      return false;
    if (!(this.z1l_1 == tmp0_other_with_cast.z1l_1))
      return false;
    if (!(this.a1m_1 == tmp0_other_with_cast.a1m_1))
      return false;
    if (!(this.b1m_1 == tmp0_other_with_cast.b1m_1))
      return false;
    if (!(this.c1m_1 === tmp0_other_with_cast.c1m_1))
      return false;
    if (!(this.d1m_1 == tmp0_other_with_cast.d1m_1))
      return false;
    if (!(this.e1m_1 == tmp0_other_with_cast.e1m_1))
      return false;
    if (!(this.f1m_1 == tmp0_other_with_cast.f1m_1))
      return false;
    if (!equals(this.g1m_1, tmp0_other_with_cast.g1m_1))
      return false;
    if (!(this.h1m_1 == tmp0_other_with_cast.h1m_1))
      return false;
    if (!(this.i1m_1 === tmp0_other_with_cast.i1m_1))
      return false;
    if (!equals(this.j1m_1, tmp0_other_with_cast.j1m_1))
      return false;
    if (!(this.k1m_1 === tmp0_other_with_cast.k1m_1))
      return false;
    if (!equals(this.l1m_1, tmp0_other_with_cast.l1m_1))
      return false;
    if (!equals(this.m1m_1, tmp0_other_with_cast.m1m_1))
      return false;
    if (!equals(this.n1m_1, tmp0_other_with_cast.n1m_1))
      return false;
    if (!(this.o1m_1 == tmp0_other_with_cast.o1m_1))
      return false;
    if (!equals(this.p1m_1, tmp0_other_with_cast.p1m_1))
      return false;
    if (!equals(this.q1m_1, tmp0_other_with_cast.q1m_1))
      return false;
    if (!(this.r1m_1 == tmp0_other_with_cast.r1m_1))
      return false;
    if (!(this.s1m_1 == tmp0_other_with_cast.s1m_1))
      return false;
    if (!(this.t1m_1 == tmp0_other_with_cast.t1m_1))
      return false;
    if (!equals(this.u1m_1, tmp0_other_with_cast.u1m_1))
      return false;
    if (!(this.v1m_1 == tmp0_other_with_cast.v1m_1))
      return false;
    if (!(this.w1m_1 == tmp0_other_with_cast.w1m_1))
      return false;
    if (!(this.x1m_1 == tmp0_other_with_cast.x1m_1))
      return false;
    if (!(this.y1m_1 === tmp0_other_with_cast.y1m_1))
      return false;
    if (!equals(this.z1m_1, tmp0_other_with_cast.z1m_1))
      return false;
    if (!equals(this.a1n_1, tmp0_other_with_cast.a1n_1))
      return false;
    return true;
  }
  static d2a(seen0, seen1, seen2, id, itemId, isStock, aliasName, diningOption, additionalPrice, selectedCombo, name, mainItemID, tag, itemImage, mappingId, description, sku, quantity, regularSalesUnitPrice, extendedAmount, totalDiscount, totalItemTax, totalNetSale, status, categoryId, itemName, variantName, unitOfMeasurement, storeId, sequenceNo, taxList, selectedModifier, selectedAddonsItems, printerTag, itemConfirmed, isKotPrinted, isSentItem, specialRequest, totalOrderDiscount, subTotal, priceWithAddons, isVoid, isRefund, is_void, isOutOfStock, inventoryQuantity, dietary, upc, nutrition, itemDisplayImage, mainItemIndex, totalGrossSale, isPrepared, discountPercent, discountAmount, basePrice, itemSeq, originalPrice, appliedDiscount, isRetailPrice, itemType, comboGroupName, suggestedItems, isBaseItem, isOpenItem, isMembership, isSelectedItem, channelPlu, taxableAmount, serializationConstructorMarker) {
    Companion_getInstance_42();
    if (!!(!!(!(4194304 === (4194304 & seen0)) | !(0 === (0 & seen1))) | !(0 === (0 & seen2)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1, seen2]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([4194304, 0, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_42().b2a_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.n1k_1 = '';
    else
      $this.n1k_1 = id;
    if (0 === (seen0 & 2))
      $this.o1k_1 = null;
    else
      $this.o1k_1 = itemId;
    if (0 === (seen0 & 4))
      $this.p1k_1 = false;
    else
      $this.p1k_1 = isStock;
    if (0 === (seen0 & 8))
      $this.q1k_1 = null;
    else
      $this.q1k_1 = aliasName;
    if (0 === (seen0 & 16))
      $this.r1k_1 = null;
    else
      $this.r1k_1 = diningOption;
    if (0 === (seen0 & 32))
      $this.s1k_1 = null;
    else
      $this.s1k_1 = additionalPrice;
    if (0 === (seen0 & 64))
      $this.t1k_1 = null;
    else
      $this.t1k_1 = selectedCombo;
    if (0 === (seen0 & 128))
      $this.u1k_1 = null;
    else
      $this.u1k_1 = name;
    if (0 === (seen0 & 256))
      $this.v1k_1 = null;
    else
      $this.v1k_1 = mainItemID;
    if (0 === (seen0 & 512))
      $this.w1k_1 = null;
    else
      $this.w1k_1 = tag;
    if (0 === (seen0 & 1024))
      $this.x1k_1 = null;
    else
      $this.x1k_1 = itemImage;
    if (0 === (seen0 & 2048))
      $this.y1k_1 = null;
    else
      $this.y1k_1 = mappingId;
    if (0 === (seen0 & 4096))
      $this.z1k_1 = null;
    else
      $this.z1k_1 = description;
    if (0 === (seen0 & 8192))
      $this.a1l_1 = null;
    else
      $this.a1l_1 = sku;
    if (0 === (seen0 & 16384))
      $this.b1l_1 = 1;
    else
      $this.b1l_1 = quantity;
    if (0 === (seen0 & 32768))
      $this.c1l_1 = 0.0;
    else
      $this.c1l_1 = regularSalesUnitPrice;
    if (0 === (seen0 & 65536))
      $this.d1l_1 = 0.0;
    else
      $this.d1l_1 = extendedAmount;
    if (0 === (seen0 & 131072))
      $this.e1l_1 = 0.0;
    else
      $this.e1l_1 = totalDiscount;
    if (0 === (seen0 & 262144))
      $this.f1l_1 = 0.0;
    else
      $this.f1l_1 = totalItemTax;
    if (0 === (seen0 & 524288))
      $this.g1l_1 = 0.0;
    else
      $this.g1l_1 = totalNetSale;
    if (0 === (seen0 & 1048576))
      $this.h1l_1 = null;
    else
      $this.h1l_1 = status;
    if (0 === (seen0 & 2097152))
      $this.i1l_1 = null;
    else
      $this.i1l_1 = categoryId;
    $this.j1l_1 = itemName;
    if (0 === (seen0 & 8388608))
      $this.k1l_1 = '';
    else
      $this.k1l_1 = variantName;
    if (0 === (seen0 & 16777216))
      $this.l1l_1 = null;
    else
      $this.l1l_1 = unitOfMeasurement;
    if (0 === (seen0 & 33554432))
      $this.m1l_1 = null;
    else
      $this.m1l_1 = storeId;
    if (0 === (seen0 & 67108864))
      $this.n1l_1 = null;
    else
      $this.n1l_1 = sequenceNo;
    if (0 === (seen0 & 134217728))
      $this.o1l_1 = null;
    else
      $this.o1l_1 = taxList;
    if (0 === (seen0 & 268435456))
      $this.p1l_1 = null;
    else
      $this.p1l_1 = selectedModifier;
    if (0 === (seen0 & 536870912))
      $this.q1l_1 = null;
    else
      $this.q1l_1 = selectedAddonsItems;
    if (0 === (seen0 & 1073741824))
      $this.r1l_1 = null;
    else
      $this.r1l_1 = printerTag;
    if (0 === (seen0 & -2147483648))
      $this.s1l_1 = false;
    else
      $this.s1l_1 = itemConfirmed;
    if (0 === (seen1 & 1))
      $this.t1l_1 = false;
    else
      $this.t1l_1 = isKotPrinted;
    if (0 === (seen1 & 2))
      $this.u1l_1 = null;
    else
      $this.u1l_1 = isSentItem;
    if (0 === (seen1 & 4))
      $this.v1l_1 = null;
    else
      $this.v1l_1 = specialRequest;
    if (0 === (seen1 & 8))
      $this.w1l_1 = 0.0;
    else
      $this.w1l_1 = totalOrderDiscount;
    if (0 === (seen1 & 16))
      $this.x1l_1 = 0.0;
    else
      $this.x1l_1 = subTotal;
    if (0 === (seen1 & 32))
      $this.y1l_1 = 0.0;
    else
      $this.y1l_1 = priceWithAddons;
    if (0 === (seen1 & 64))
      $this.z1l_1 = null;
    else
      $this.z1l_1 = isVoid;
    if (0 === (seen1 & 128))
      $this.a1m_1 = null;
    else
      $this.a1m_1 = isRefund;
    if (0 === (seen1 & 256))
      $this.b1m_1 = null;
    else
      $this.b1m_1 = is_void;
    if (0 === (seen1 & 512))
      $this.c1m_1 = false;
    else
      $this.c1m_1 = isOutOfStock;
    if (0 === (seen1 & 1024))
      $this.d1m_1 = null;
    else
      $this.d1m_1 = inventoryQuantity;
    if (0 === (seen1 & 2048))
      $this.e1m_1 = null;
    else
      $this.e1m_1 = dietary;
    if (0 === (seen1 & 4096))
      $this.f1m_1 = null;
    else
      $this.f1m_1 = upc;
    if (0 === (seen1 & 8192))
      $this.g1m_1 = null;
    else
      $this.g1m_1 = nutrition;
    if (0 === (seen1 & 16384))
      $this.h1m_1 = null;
    else
      $this.h1m_1 = itemDisplayImage;
    if (0 === (seen1 & 32768))
      $this.i1m_1 = -1;
    else
      $this.i1m_1 = mainItemIndex;
    if (0 === (seen1 & 65536))
      $this.j1m_1 = 0.0;
    else
      $this.j1m_1 = totalGrossSale;
    if (0 === (seen1 & 131072))
      $this.k1m_1 = false;
    else
      $this.k1m_1 = isPrepared;
    if (0 === (seen1 & 262144))
      $this.l1m_1 = 0.0;
    else
      $this.l1m_1 = discountPercent;
    if (0 === (seen1 & 524288))
      $this.m1m_1 = 0.0;
    else
      $this.m1m_1 = discountAmount;
    if (0 === (seen1 & 1048576))
      $this.n1m_1 = 0.0;
    else
      $this.n1m_1 = basePrice;
    if (0 === (seen1 & 2097152))
      $this.o1m_1 = null;
    else
      $this.o1m_1 = itemSeq;
    if (0 === (seen1 & 4194304))
      $this.p1m_1 = 0.0;
    else
      $this.p1m_1 = originalPrice;
    if (0 === (seen1 & 8388608))
      $this.q1m_1 = null;
    else
      $this.q1m_1 = appliedDiscount;
    if (0 === (seen1 & 16777216))
      $this.r1m_1 = null;
    else
      $this.r1m_1 = isRetailPrice;
    if (0 === (seen1 & 33554432))
      $this.s1m_1 = null;
    else
      $this.s1m_1 = itemType;
    if (0 === (seen1 & 67108864))
      $this.t1m_1 = null;
    else
      $this.t1m_1 = comboGroupName;
    if (0 === (seen1 & 134217728))
      $this.u1m_1 = null;
    else
      $this.u1m_1 = suggestedItems;
    if (0 === (seen1 & 268435456))
      $this.v1m_1 = null;
    else
      $this.v1m_1 = isBaseItem;
    if (0 === (seen1 & 536870912))
      $this.w1m_1 = null;
    else
      $this.w1m_1 = isOpenItem;
    if (0 === (seen1 & 1073741824))
      $this.x1m_1 = null;
    else
      $this.x1m_1 = isMembership;
    if (0 === (seen1 & -2147483648))
      $this.y1m_1 = false;
    else
      $this.y1m_1 = isSelectedItem;
    if (0 === (seen2 & 1))
      $this.z1m_1 = null;
    else
      $this.z1m_1 = channelPlu;
    if (0 === (seen2 & 2))
      $this.a1n_1 = null;
    else
      $this.a1n_1 = taxableAmount;
    return $this;
  }
}
class Companion_43 {}
class $serializer_43 {
  constructor() {
    $serializer_instance_43 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.model.Nutrition', this, 3);
    tmp0_serialDesc.aw('nutrition_name', true);
    tmp0_serialDesc.aw('nutrition_value', true);
    tmp0_serialDesc.aw('nutrition_uom', true);
    this.f2a_1 = tmp0_serialDesc;
  }
  g2a(encoder, value) {
    var tmp0_desc = this.f2a_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.h2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.h2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.i2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.i2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.j2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.j2a_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.g2a(encoder, value instanceof Nutrition ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.f2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.so(tmp0_desc);
    if (tmp7_input.ip()) {
      tmp4_local0 = tmp7_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp7_input.to(tmp0_desc);
    return Nutrition.k2a(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  al() {
    return this.f2a_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Nutrition {
  constructor(nutritionName, nutritionValue, nutritionUom) {
    nutritionName = nutritionName === VOID ? null : nutritionName;
    nutritionValue = nutritionValue === VOID ? null : nutritionValue;
    nutritionUom = nutritionUom === VOID ? null : nutritionUom;
    this.h2a_1 = nutritionName;
    this.i2a_1 = nutritionValue;
    this.j2a_1 = nutritionUom;
  }
  toString() {
    return 'Nutrition(nutritionName=' + this.h2a_1 + ', nutritionValue=' + this.i2a_1 + ', nutritionUom=' + this.j2a_1 + ')';
  }
  hashCode() {
    var result = this.h2a_1 == null ? 0 : getStringHashCode(this.h2a_1);
    result = imul(result, 31) + (this.i2a_1 == null ? 0 : getStringHashCode(this.i2a_1)) | 0;
    result = imul(result, 31) + (this.j2a_1 == null ? 0 : getStringHashCode(this.j2a_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Nutrition))
      return false;
    var tmp0_other_with_cast = other instanceof Nutrition ? other : THROW_CCE();
    if (!(this.h2a_1 == tmp0_other_with_cast.h2a_1))
      return false;
    if (!(this.i2a_1 == tmp0_other_with_cast.i2a_1))
      return false;
    if (!(this.j2a_1 == tmp0_other_with_cast.j2a_1))
      return false;
    return true;
  }
  static k2a(seen0, nutritionName, nutritionValue, nutritionUom, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_43().f2a_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.h2a_1 = null;
    else
      $this.h2a_1 = nutritionName;
    if (0 === (seen0 & 2))
      $this.i2a_1 = null;
    else
      $this.i2a_1 = nutritionValue;
    if (0 === (seen0 & 4))
      $this.j2a_1 = null;
    else
      $this.j2a_1 = nutritionUom;
    return $this;
  }
}
class Companion_44 {
  constructor() {
    Companion_instance_44 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.l2a_1 = [null, null, null, null, null, lazy(tmp_0, SelectedModifier$Companion$$childSerializers$_anonymous__12f5uw), null, null];
  }
}
class $serializer_44 {
  constructor() {
    $serializer_instance_44 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.model.SelectedModifier', this, 8);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('mg_id', true);
    tmp0_serialDesc.aw('alias_display_name', true);
    tmp0_serialDesc.aw('created_at', true);
    tmp0_serialDesc.aw('modifier_display_name', true);
    tmp0_serialDesc.aw('modifiers', true);
    tmp0_serialDesc.aw('modifiers_group', true);
    tmp0_serialDesc.aw('store_id', true);
    this.m2a_1 = tmp0_serialDesc;
  }
  n2a(encoder, value) {
    var tmp0_desc = this.m2a_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_44().l2a_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.o2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.o2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.p2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.p2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.q2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.q2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.r2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.r2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.s2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.s2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.t2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, tmp2_cached[5].g2(), value.t2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.u2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.u2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.v2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.v2a_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.n2a(encoder, value instanceof SelectedModifier ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.m2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.so(tmp0_desc);
    var tmp13_cached = Companion_getInstance_44().l2a_1;
    if (tmp12_input.ip()) {
      tmp4_local0 = tmp12_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.gp(tmp0_desc, 5, tmp13_cached[5].g2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.gp(tmp0_desc, 5, tmp13_cached[5].g2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp12_input.to(tmp0_desc);
    return SelectedModifier.w2a(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  }
  al() {
    return this.m2a_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_44().l2a_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[5].g2()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class SelectedModifier {
  constructor(id, mgId, aliasDisplayName, createdAt, modifierDisplayName, modifiers, modifiersGroup, storeId) {
    Companion_getInstance_44();
    id = id === VOID ? null : id;
    mgId = mgId === VOID ? null : mgId;
    aliasDisplayName = aliasDisplayName === VOID ? null : aliasDisplayName;
    createdAt = createdAt === VOID ? null : createdAt;
    modifierDisplayName = modifierDisplayName === VOID ? null : modifierDisplayName;
    modifiers = modifiers === VOID ? null : modifiers;
    modifiersGroup = modifiersGroup === VOID ? null : modifiersGroup;
    storeId = storeId === VOID ? null : storeId;
    this.o2a_1 = id;
    this.p2a_1 = mgId;
    this.q2a_1 = aliasDisplayName;
    this.r2a_1 = createdAt;
    this.s2a_1 = modifierDisplayName;
    this.t2a_1 = modifiers;
    this.u2a_1 = modifiersGroup;
    this.v2a_1 = storeId;
  }
  toString() {
    return 'SelectedModifier(id=' + this.o2a_1 + ', mgId=' + this.p2a_1 + ', aliasDisplayName=' + this.q2a_1 + ', createdAt=' + this.r2a_1 + ', modifierDisplayName=' + this.s2a_1 + ', modifiers=' + toString_0(this.t2a_1) + ', modifiersGroup=' + this.u2a_1 + ', storeId=' + this.v2a_1 + ')';
  }
  hashCode() {
    var result = this.o2a_1 == null ? 0 : getStringHashCode(this.o2a_1);
    result = imul(result, 31) + (this.p2a_1 == null ? 0 : getStringHashCode(this.p2a_1)) | 0;
    result = imul(result, 31) + (this.q2a_1 == null ? 0 : getStringHashCode(this.q2a_1)) | 0;
    result = imul(result, 31) + (this.r2a_1 == null ? 0 : getStringHashCode(this.r2a_1)) | 0;
    result = imul(result, 31) + (this.s2a_1 == null ? 0 : getStringHashCode(this.s2a_1)) | 0;
    result = imul(result, 31) + (this.t2a_1 == null ? 0 : hashCode(this.t2a_1)) | 0;
    result = imul(result, 31) + (this.u2a_1 == null ? 0 : getStringHashCode(this.u2a_1)) | 0;
    result = imul(result, 31) + (this.v2a_1 == null ? 0 : getStringHashCode(this.v2a_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectedModifier))
      return false;
    var tmp0_other_with_cast = other instanceof SelectedModifier ? other : THROW_CCE();
    if (!(this.o2a_1 == tmp0_other_with_cast.o2a_1))
      return false;
    if (!(this.p2a_1 == tmp0_other_with_cast.p2a_1))
      return false;
    if (!(this.q2a_1 == tmp0_other_with_cast.q2a_1))
      return false;
    if (!(this.r2a_1 == tmp0_other_with_cast.r2a_1))
      return false;
    if (!(this.s2a_1 == tmp0_other_with_cast.s2a_1))
      return false;
    if (!equals(this.t2a_1, tmp0_other_with_cast.t2a_1))
      return false;
    if (!(this.u2a_1 == tmp0_other_with_cast.u2a_1))
      return false;
    if (!(this.v2a_1 == tmp0_other_with_cast.v2a_1))
      return false;
    return true;
  }
  static w2a(seen0, id, mgId, aliasDisplayName, createdAt, modifierDisplayName, modifiers, modifiersGroup, storeId, serializationConstructorMarker) {
    Companion_getInstance_44();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_44().m2a_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.o2a_1 = null;
    else
      $this.o2a_1 = id;
    if (0 === (seen0 & 2))
      $this.p2a_1 = null;
    else
      $this.p2a_1 = mgId;
    if (0 === (seen0 & 4))
      $this.q2a_1 = null;
    else
      $this.q2a_1 = aliasDisplayName;
    if (0 === (seen0 & 8))
      $this.r2a_1 = null;
    else
      $this.r2a_1 = createdAt;
    if (0 === (seen0 & 16))
      $this.s2a_1 = null;
    else
      $this.s2a_1 = modifierDisplayName;
    if (0 === (seen0 & 32))
      $this.t2a_1 = null;
    else
      $this.t2a_1 = modifiers;
    if (0 === (seen0 & 64))
      $this.u2a_1 = null;
    else
      $this.u2a_1 = modifiersGroup;
    if (0 === (seen0 & 128))
      $this.v2a_1 = null;
    else
      $this.v2a_1 = storeId;
    return $this;
  }
}
class Companion_45 {}
class $serializer_45 {
  constructor() {
    $serializer_instance_45 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.model.ItemModifier', this, 6);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('alias_name', true);
    tmp0_serialDesc.aw('mv_id', true);
    tmp0_serialDesc.aw('mg_id', true);
    tmp0_serialDesc.aw('modifier_name', true);
    tmp0_serialDesc.aw('isSelected', true);
    this.x2a_1 = tmp0_serialDesc;
  }
  y2a(encoder, value) {
    var tmp0_desc = this.x2a_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.z2a_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.z2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.a2b_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.a2b_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.b2b_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.b2b_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.c2b_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.c2b_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.d2b_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.d2b_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.e2b_1 === false)) {
      tmp1_output.zp(tmp0_desc, 5, value.e2b_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.y2a(encoder, value instanceof ItemModifier ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.x2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = false;
    var tmp10_input = decoder.so(tmp0_desc);
    if (tmp10_input.ip()) {
      tmp4_local0 = tmp10_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.cp(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.cp(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.uo(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.cp(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.cp(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.uo(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp10_input.to(tmp0_desc);
    return ItemModifier.f2b(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  al() {
    return this.x2a_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
  }
}
class ItemModifier {
  constructor(id, aliasName, mvId, mgId, modifierName, isSelected) {
    id = id === VOID ? '' : id;
    aliasName = aliasName === VOID ? null : aliasName;
    mvId = mvId === VOID ? null : mvId;
    mgId = mgId === VOID ? '' : mgId;
    modifierName = modifierName === VOID ? '' : modifierName;
    isSelected = isSelected === VOID ? false : isSelected;
    this.z2a_1 = id;
    this.a2b_1 = aliasName;
    this.b2b_1 = mvId;
    this.c2b_1 = mgId;
    this.d2b_1 = modifierName;
    this.e2b_1 = isSelected;
  }
  toString() {
    return 'ItemModifier(id=' + this.z2a_1 + ', aliasName=' + this.a2b_1 + ', mvId=' + this.b2b_1 + ', mgId=' + this.c2b_1 + ', modifierName=' + this.d2b_1 + ', isSelected=' + this.e2b_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.z2a_1);
    result = imul(result, 31) + (this.a2b_1 == null ? 0 : getStringHashCode(this.a2b_1)) | 0;
    result = imul(result, 31) + (this.b2b_1 == null ? 0 : getStringHashCode(this.b2b_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.c2b_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d2b_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.e2b_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ItemModifier))
      return false;
    var tmp0_other_with_cast = other instanceof ItemModifier ? other : THROW_CCE();
    if (!(this.z2a_1 === tmp0_other_with_cast.z2a_1))
      return false;
    if (!(this.a2b_1 == tmp0_other_with_cast.a2b_1))
      return false;
    if (!(this.b2b_1 == tmp0_other_with_cast.b2b_1))
      return false;
    if (!(this.c2b_1 === tmp0_other_with_cast.c2b_1))
      return false;
    if (!(this.d2b_1 === tmp0_other_with_cast.d2b_1))
      return false;
    if (!(this.e2b_1 === tmp0_other_with_cast.e2b_1))
      return false;
    return true;
  }
  static f2b(seen0, id, aliasName, mvId, mgId, modifierName, isSelected, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_45().x2a_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.z2a_1 = '';
    else
      $this.z2a_1 = id;
    if (0 === (seen0 & 2))
      $this.a2b_1 = null;
    else
      $this.a2b_1 = aliasName;
    if (0 === (seen0 & 4))
      $this.b2b_1 = null;
    else
      $this.b2b_1 = mvId;
    if (0 === (seen0 & 8))
      $this.c2b_1 = '';
    else
      $this.c2b_1 = mgId;
    if (0 === (seen0 & 16))
      $this.d2b_1 = '';
    else
      $this.d2b_1 = modifierName;
    if (0 === (seen0 & 32))
      $this.e2b_1 = false;
    else
      $this.e2b_1 = isSelected;
    return $this;
  }
}
class Companion_46 {}
class $serializer_46 {
  constructor() {
    $serializer_instance_46 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.model.PrinterTag', this, 2);
    tmp0_serialDesc.aw('label_name', true);
    tmp0_serialDesc.aw('printer_label_id', true);
    this.g2b_1 = tmp0_serialDesc;
  }
  h2b(encoder, value) {
    var tmp0_desc = this.g2b_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.i2b_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.i2b_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.j2b_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.j2b_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.h2b(encoder, value instanceof PrinterTag ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.g2b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.so(tmp0_desc);
    if (tmp6_input.ip()) {
      tmp4_local0 = tmp6_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp6_input.to(tmp0_desc);
    return PrinterTag.k2b(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  al() {
    return this.g2b_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class PrinterTag {
  constructor(labelName, printerLabelId) {
    labelName = labelName === VOID ? null : labelName;
    printerLabelId = printerLabelId === VOID ? null : printerLabelId;
    this.i2b_1 = labelName;
    this.j2b_1 = printerLabelId;
  }
  toString() {
    return 'PrinterTag(labelName=' + this.i2b_1 + ', printerLabelId=' + this.j2b_1 + ')';
  }
  hashCode() {
    var result = this.i2b_1 == null ? 0 : getStringHashCode(this.i2b_1);
    result = imul(result, 31) + (this.j2b_1 == null ? 0 : getStringHashCode(this.j2b_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PrinterTag))
      return false;
    var tmp0_other_with_cast = other instanceof PrinterTag ? other : THROW_CCE();
    if (!(this.i2b_1 == tmp0_other_with_cast.i2b_1))
      return false;
    if (!(this.j2b_1 == tmp0_other_with_cast.j2b_1))
      return false;
    return true;
  }
  static k2b(seen0, labelName, printerLabelId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_46().g2b_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.i2b_1 = null;
    else
      $this.i2b_1 = labelName;
    if (0 === (seen0 & 2))
      $this.j2b_1 = null;
    else
      $this.j2b_1 = printerLabelId;
    return $this;
  }
}
class Companion_47 {}
class $serializer_47 {
  constructor() {
    $serializer_instance_47 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.model.SelectedAddonsItems', this, 14);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('header_id', true);
    tmp0_serialDesc.aw('item_name', true);
    tmp0_serialDesc.aw('alias_name', true);
    tmp0_serialDesc.aw('price', true);
    tmp0_serialDesc.aw('subTotal', true);
    tmp0_serialDesc.aw('taxAmount', true);
    tmp0_serialDesc.aw('qty', true);
    tmp0_serialDesc.aw('isSelected', true);
    tmp0_serialDesc.aw('mappin_id', true);
    tmp0_serialDesc.aw('addon_group_id', true);
    tmp0_serialDesc.aw('addon_group_name', true);
    tmp0_serialDesc.aw('addon_group_mappin_id', true);
    tmp0_serialDesc.aw('sku', true);
    this.l2b_1 = tmp0_serialDesc;
  }
  m2b(encoder, value) {
    var tmp0_desc = this.l2b_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.y1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.y1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.z1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.z1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.a1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.a1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.b1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.b1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !equals(value.c1k_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 4, value.c1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !equals(value.d1k_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 5, value.d1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !equals(value.e1k_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 6, value.e1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !equals(value.f1k_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 7, value.f1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.g1k_1 === false)) {
      tmp1_output.zp(tmp0_desc, 8, value.g1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.h1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.h1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.i1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.i1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.j1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.j1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.k1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.k1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.l1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, StringSerializer_getInstance(), value.l1k_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.m2b(encoder, value instanceof SelectedAddonsItems ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.l2b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = 0.0;
    var tmp9_local5 = 0.0;
    var tmp10_local6 = 0.0;
    var tmp11_local7 = 0.0;
    var tmp12_local8 = false;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp19_input = decoder.so(tmp0_desc);
    if (tmp19_input.ip()) {
      tmp4_local0 = tmp19_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp19_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp19_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp19_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp19_input.ap(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp19_input.ap(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp19_input.ap(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp19_input.ap(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp19_input.uo(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp19_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp19_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp19_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp19_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp19_input.gp(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp19_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp19_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp19_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp19_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp19_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp19_input.ap(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp19_input.ap(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp19_input.ap(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp19_input.ap(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp19_input.uo(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp19_input.gp(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp19_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp19_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp19_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp19_input.gp(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp19_input.to(tmp0_desc);
    return SelectedAddonsItems.n2b(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, null);
  }
  al() {
    return this.l2b_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class SelectedAddonsItems {
  constructor(id, headerId, itemName, aliasName, price, subTotal, taxAmount, qty, isSelected, mappinId, addonGroupId, addonGroupName, addonGroupMappinId, sku, isItemLevel) {
    id = id === VOID ? null : id;
    headerId = headerId === VOID ? null : headerId;
    itemName = itemName === VOID ? null : itemName;
    aliasName = aliasName === VOID ? null : aliasName;
    price = price === VOID ? 0.0 : price;
    subTotal = subTotal === VOID ? 0.0 : subTotal;
    taxAmount = taxAmount === VOID ? 0.0 : taxAmount;
    qty = qty === VOID ? 0.0 : qty;
    isSelected = isSelected === VOID ? false : isSelected;
    mappinId = mappinId === VOID ? null : mappinId;
    addonGroupId = addonGroupId === VOID ? null : addonGroupId;
    addonGroupName = addonGroupName === VOID ? null : addonGroupName;
    addonGroupMappinId = addonGroupMappinId === VOID ? null : addonGroupMappinId;
    sku = sku === VOID ? null : sku;
    isItemLevel = isItemLevel === VOID ? false : isItemLevel;
    this.y1j_1 = id;
    this.z1j_1 = headerId;
    this.a1k_1 = itemName;
    this.b1k_1 = aliasName;
    this.c1k_1 = price;
    this.d1k_1 = subTotal;
    this.e1k_1 = taxAmount;
    this.f1k_1 = qty;
    this.g1k_1 = isSelected;
    this.h1k_1 = mappinId;
    this.i1k_1 = addonGroupId;
    this.j1k_1 = addonGroupName;
    this.k1k_1 = addonGroupMappinId;
    this.l1k_1 = sku;
    this.m1k_1 = isItemLevel;
  }
  toString() {
    return 'SelectedAddonsItems(id=' + this.y1j_1 + ', headerId=' + this.z1j_1 + ', itemName=' + this.a1k_1 + ', aliasName=' + this.b1k_1 + ', price=' + this.c1k_1 + ', subTotal=' + this.d1k_1 + ', taxAmount=' + this.e1k_1 + ', qty=' + this.f1k_1 + ', isSelected=' + this.g1k_1 + ', mappinId=' + this.h1k_1 + ', addonGroupId=' + this.i1k_1 + ', addonGroupName=' + this.j1k_1 + ', addonGroupMappinId=' + this.k1k_1 + ', sku=' + this.l1k_1 + ', isItemLevel=' + this.m1k_1 + ')';
  }
  hashCode() {
    var result = this.y1j_1 == null ? 0 : getStringHashCode(this.y1j_1);
    result = imul(result, 31) + (this.z1j_1 == null ? 0 : getStringHashCode(this.z1j_1)) | 0;
    result = imul(result, 31) + (this.a1k_1 == null ? 0 : getStringHashCode(this.a1k_1)) | 0;
    result = imul(result, 31) + (this.b1k_1 == null ? 0 : getStringHashCode(this.b1k_1)) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c1k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d1k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e1k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f1k_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g1k_1) | 0;
    result = imul(result, 31) + (this.h1k_1 == null ? 0 : getStringHashCode(this.h1k_1)) | 0;
    result = imul(result, 31) + (this.i1k_1 == null ? 0 : getStringHashCode(this.i1k_1)) | 0;
    result = imul(result, 31) + (this.j1k_1 == null ? 0 : getStringHashCode(this.j1k_1)) | 0;
    result = imul(result, 31) + (this.k1k_1 == null ? 0 : getStringHashCode(this.k1k_1)) | 0;
    result = imul(result, 31) + (this.l1k_1 == null ? 0 : getStringHashCode(this.l1k_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.m1k_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectedAddonsItems))
      return false;
    var tmp0_other_with_cast = other instanceof SelectedAddonsItems ? other : THROW_CCE();
    if (!(this.y1j_1 == tmp0_other_with_cast.y1j_1))
      return false;
    if (!(this.z1j_1 == tmp0_other_with_cast.z1j_1))
      return false;
    if (!(this.a1k_1 == tmp0_other_with_cast.a1k_1))
      return false;
    if (!(this.b1k_1 == tmp0_other_with_cast.b1k_1))
      return false;
    if (!equals(this.c1k_1, tmp0_other_with_cast.c1k_1))
      return false;
    if (!equals(this.d1k_1, tmp0_other_with_cast.d1k_1))
      return false;
    if (!equals(this.e1k_1, tmp0_other_with_cast.e1k_1))
      return false;
    if (!equals(this.f1k_1, tmp0_other_with_cast.f1k_1))
      return false;
    if (!(this.g1k_1 === tmp0_other_with_cast.g1k_1))
      return false;
    if (!(this.h1k_1 == tmp0_other_with_cast.h1k_1))
      return false;
    if (!(this.i1k_1 == tmp0_other_with_cast.i1k_1))
      return false;
    if (!(this.j1k_1 == tmp0_other_with_cast.j1k_1))
      return false;
    if (!(this.k1k_1 == tmp0_other_with_cast.k1k_1))
      return false;
    if (!(this.l1k_1 == tmp0_other_with_cast.l1k_1))
      return false;
    if (!(this.m1k_1 === tmp0_other_with_cast.m1k_1))
      return false;
    return true;
  }
  static n2b(seen0, id, headerId, itemName, aliasName, price, subTotal, taxAmount, qty, isSelected, mappinId, addonGroupId, addonGroupName, addonGroupMappinId, sku, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_47().l2b_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.y1j_1 = null;
    else
      $this.y1j_1 = id;
    if (0 === (seen0 & 2))
      $this.z1j_1 = null;
    else
      $this.z1j_1 = headerId;
    if (0 === (seen0 & 4))
      $this.a1k_1 = null;
    else
      $this.a1k_1 = itemName;
    if (0 === (seen0 & 8))
      $this.b1k_1 = null;
    else
      $this.b1k_1 = aliasName;
    if (0 === (seen0 & 16))
      $this.c1k_1 = 0.0;
    else
      $this.c1k_1 = price;
    if (0 === (seen0 & 32))
      $this.d1k_1 = 0.0;
    else
      $this.d1k_1 = subTotal;
    if (0 === (seen0 & 64))
      $this.e1k_1 = 0.0;
    else
      $this.e1k_1 = taxAmount;
    if (0 === (seen0 & 128))
      $this.f1k_1 = 0.0;
    else
      $this.f1k_1 = qty;
    if (0 === (seen0 & 256))
      $this.g1k_1 = false;
    else
      $this.g1k_1 = isSelected;
    if (0 === (seen0 & 512))
      $this.h1k_1 = null;
    else
      $this.h1k_1 = mappinId;
    if (0 === (seen0 & 1024))
      $this.i1k_1 = null;
    else
      $this.i1k_1 = addonGroupId;
    if (0 === (seen0 & 2048))
      $this.j1k_1 = null;
    else
      $this.j1k_1 = addonGroupName;
    if (0 === (seen0 & 4096))
      $this.k1k_1 = null;
    else
      $this.k1k_1 = addonGroupMappinId;
    if (0 === (seen0 & 8192))
      $this.l1k_1 = null;
    else
      $this.l1k_1 = sku;
    $this.m1k_1 = false;
    return $this;
  }
}
class Companion_48 {}
class $serializer_48 {
  constructor() {
    $serializer_instance_48 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.model.ChannelPlu', this, 5);
    tmp0_serialDesc.aw('sku', true);
    tmp0_serialDesc.aw('channel_name', true);
    tmp0_serialDesc.aw('plu', true);
    tmp0_serialDesc.aw('integration_detail', true);
    tmp0_serialDesc.aw('channel_code', true);
    this.o2b_1 = tmp0_serialDesc;
  }
  p2b(encoder, value) {
    var tmp0_desc = this.o2b_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.q2b_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.q2b_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.r2b_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.r2b_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !equals(value.s2b_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 2, value.s2b_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.t2b_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.t2b_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.u2b_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.u2b_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.p2b(encoder, value instanceof ChannelPlu ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.o2b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.so(tmp0_desc);
    if (tmp9_input.ip()) {
      tmp4_local0 = tmp9_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.cp(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ap(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.cp(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.cp(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.cp(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ap(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.cp(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.cp(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp9_input.to(tmp0_desc);
    return ChannelPlu.v2b(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  al() {
    return this.o2b_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class ChannelPlu {
  constructor(sku, channelName, plu, integrationDetail, channelCode) {
    sku = sku === VOID ? '' : sku;
    channelName = channelName === VOID ? '' : channelName;
    plu = plu === VOID ? 0.0 : plu;
    integrationDetail = integrationDetail === VOID ? '' : integrationDetail;
    channelCode = channelCode === VOID ? '' : channelCode;
    this.q2b_1 = sku;
    this.r2b_1 = channelName;
    this.s2b_1 = plu;
    this.t2b_1 = integrationDetail;
    this.u2b_1 = channelCode;
  }
  toString() {
    return 'ChannelPlu(sku=' + this.q2b_1 + ', channelName=' + this.r2b_1 + ', plu=' + this.s2b_1 + ', integrationDetail=' + this.t2b_1 + ', channelCode=' + this.u2b_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.q2b_1);
    result = imul(result, 31) + getStringHashCode(this.r2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s2b_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.t2b_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u2b_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ChannelPlu))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelPlu ? other : THROW_CCE();
    if (!(this.q2b_1 === tmp0_other_with_cast.q2b_1))
      return false;
    if (!(this.r2b_1 === tmp0_other_with_cast.r2b_1))
      return false;
    if (!equals(this.s2b_1, tmp0_other_with_cast.s2b_1))
      return false;
    if (!(this.t2b_1 === tmp0_other_with_cast.t2b_1))
      return false;
    if (!(this.u2b_1 === tmp0_other_with_cast.u2b_1))
      return false;
    return true;
  }
  static v2b(seen0, sku, channelName, plu, integrationDetail, channelCode, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_48().o2b_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.q2b_1 = '';
    else
      $this.q2b_1 = sku;
    if (0 === (seen0 & 2))
      $this.r2b_1 = '';
    else
      $this.r2b_1 = channelName;
    if (0 === (seen0 & 4))
      $this.s2b_1 = 0.0;
    else
      $this.s2b_1 = plu;
    if (0 === (seen0 & 8))
      $this.t2b_1 = '';
    else
      $this.t2b_1 = integrationDetail;
    if (0 === (seen0 & 16))
      $this.u2b_1 = '';
    else
      $this.u2b_1 = channelCode;
    return $this;
  }
}
//endregion
function CalculationEngineImpl$_init_$lambda_bw48f4($this$Json) {
  $this$Json.w15_1 = true;
  $this$Json.v15_1 = false;
  $this$Json.u15_1 = true;
  return Unit_instance;
}
function calculateTotalPriceOfAddons($this, addons) {
  var tmp;
  if (addons == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = addons.v();
    while (_iterator__ex2g4s.w()) {
      var element = _iterator__ex2g4s.x();
      var tmp_0 = sum;
      sum = tmp_0 + element.d1k_1;
    }
    tmp = sum;
  }
  var tmp1_elvis_lhs = tmp;
  return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
}
function calculateTotalPriceOfSelectedCombos($this, combos) {
  var tmp;
  if (combos == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = combos.v();
    while (_iterator__ex2g4s.w()) {
      var element = _iterator__ex2g4s.x();
      var tmp_0 = sum;
      var tmp0_safe_receiver = element.q1l_1;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.collections.sumOf' call
        var sum_0 = 0;
        var _iterator__ex2g4s_0 = tmp0_safe_receiver.v();
        while (_iterator__ex2g4s_0.w()) {
          var element_0 = _iterator__ex2g4s_0.x();
          var tmp_2 = sum_0;
          sum_0 = tmp_2 + element_0.c1k_1 * element_0.f1k_1;
        }
        tmp_1 = sum_0;
      }
      var tmp1_elvis_lhs = tmp_1;
      var tmp_3 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = element.s1k_1;
      sum = tmp_0 + (tmp_3 + (tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs));
    }
    tmp = sum;
  }
  var tmp1_elvis_lhs_0 = tmp;
  return tmp1_elvis_lhs_0 == null ? 0.0 : tmp1_elvis_lhs_0;
}
function calculateItemTax($this, order, amount, taxList) {
  var taxAmount = 0.0;
  if (taxList == null)
    null;
  else {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = taxList.v();
    while (_iterator__ex2g4s.w()) {
      var element = _iterator__ex2g4s.x();
      var tmp0_elvis_lhs = element.f1n_1;
      var taxValue = amount * (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs) / 100;
      element.h1n_1 = order.b1j_1 ? formatDoublePrice(0.0) : taxValue;
      taxAmount = taxAmount + taxValue;
      element.i1n_1 = formatDoublePrice(amount);
    }
  }
  return taxAmount;
}
function refreshCalculationJs(orderJson, resetDiscount, cashDiscount, surcharge, selectedPaymentType, isRoundOffEnabled, roundOffType, applicableRoundOffPaymentTypes, isRefundingOrder, isTaxIncluded) {
  resetDiscount = resetDiscount === VOID ? true : resetDiscount;
  cashDiscount = cashDiscount === VOID ? 0.0 : cashDiscount;
  surcharge = surcharge === VOID ? 0.0 : surcharge;
  selectedPaymentType = selectedPaymentType === VOID ? '' : selectedPaymentType;
  isRoundOffEnabled = isRoundOffEnabled === VOID ? false : isRoundOffEnabled;
  roundOffType = roundOffType === VOID ? '' : roundOffType;
  var tmp;
  if (applicableRoundOffPaymentTypes === VOID) {
    // Inline function 'kotlin.emptyArray' call
    tmp = [];
  } else {
    tmp = applicableRoundOffPaymentTypes;
  }
  applicableRoundOffPaymentTypes = tmp;
  isRefundingOrder = isRefundingOrder === VOID ? false : isRefundingOrder;
  isTaxIncluded = isTaxIncluded === VOID ? false : isTaxIncluded;
  var engine = new CalculationEngineImpl();
  return engine.g1h(orderJson, resetDiscount, cashDiscount, surcharge, selectedPaymentType, isRoundOffEnabled, roundOffType, toList(applicableRoundOffPaymentTypes), isRefundingOrder, isTaxIncluded);
}
function calculateTotalPriceOfSelectedCombos_0($this, combos) {
  var tmp;
  if (combos == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = combos.v();
    while (_iterator__ex2g4s.w()) {
      var element = _iterator__ex2g4s.x();
      var tmp_0 = sum;
      var tmp0_safe_receiver = element.q1l_1;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.collections.sumOf' call
        var sum_0 = 0;
        var _iterator__ex2g4s_0 = tmp0_safe_receiver.v();
        while (_iterator__ex2g4s_0.w()) {
          var element_0 = _iterator__ex2g4s_0.x();
          var tmp_2 = sum_0;
          sum_0 = tmp_2 + element_0.c1k_1 * element_0.f1k_1;
        }
        tmp_1 = sum_0;
      }
      var tmp1_elvis_lhs = tmp_1;
      var tmp_3 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = element.s1k_1;
      sum = tmp_0 + (tmp_3 + (tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs));
    }
    tmp = sum;
  }
  var tmp1_elvis_lhs_0 = tmp;
  return tmp1_elvis_lhs_0 == null ? 0.0 : tmp1_elvis_lhs_0;
}
function calculateItemPrice($this, order, index, item, totalAmount, isTaxIncluded) {
  // Inline function 'kotlin.text.isNullOrEmpty' call
  var this_0 = item.v1k_1;
  if (this_0 == null || charSequenceLength(this_0) === 0) {
    item.e1l_1 = 0.0;
    var tmp0_safe_receiver = item.q1l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index_0 = 0;
      var _iterator__ex2g4s = tmp0_safe_receiver.v();
      while (_iterator__ex2g4s.w()) {
        var item_0 = _iterator__ex2g4s.x();
        var _unary__edvuaz = index_0;
        index_0 = _unary__edvuaz + 1 | 0;
        var calculatedItemIndex = (index + checkIndexOverflow(_unary__edvuaz) | 0) + 1 | 0;
        if (order.b1i_1.a1() > calculatedItemIndex) {
          var calculatedItem = order.b1i_1.b1(calculatedItemIndex);
          $this.h1h_1.j1n(order, calculatedItem, totalAmount, isTaxIncluded);
          item_0.c1k_1 = formatDoublePrice(calculatedItem.c1l_1);
          item_0.d1k_1 = formatDoublePrice(calculatedItem.j1m_1);
        }
      }
    }
    $this.h1h_1.j1n(order, item, totalAmount, isTaxIncluded);
    order.e1j_1 = order.e1j_1 + item.x1l_1;
    if (!(item.x1m_1 === true)) {
      var tmp = order;
      var tmp1_safe_receiver = order.f1j_1;
      tmp.f1j_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver + item.x1l_1;
    }
    var tmp_0 = order;
    var tmp2_safe_receiver = order.v1j_1;
    var tmp_1;
    if (tmp2_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp3_elvis_lhs = item.a1n_1;
      tmp_1 = tmp2_safe_receiver + (tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs);
    }
    tmp_0.v1j_1 = tmp_1;
    order.m1i_1 = order.m1i_1 + item.g1l_1;
    order.n1i_1 = order.n1i_1 + item.j1m_1;
    order.k1i_1 = order.k1i_1 + (item.e1l_1 + item.w1l_1);
  }
  return item;
}
function calculateOrderTypeChargesAndTax($this, order, charge, isTaxIncluded) {
  var tmp0_safe_receiver = order.p1j_1;
  // Inline function 'kotlin.collections.isNullOrEmpty' call
  var this_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1n_1;
  if (this_0 == null || this_0.d1()) {
    removeAll(charge, OrderCalculationService$calculateOrderTypeChargesAndTax$lambda(order));
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = charge.v();
    while (_iterator__ex2g4s.w()) {
      var element = _iterator__ex2g4s.x();
      var tmp = sum;
      var tmp0_elvis_lhs = element.g1o_1;
      sum = tmp + (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs);
    }
    return sum;
  }
  var chargesTax = 0.0;
  var tmp1_safe_receiver = order.p1j_1;
  var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x1n_1;
  var tmp_0;
  if (tmp2_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.e1();
    var _iterator__ex2g4s_0 = tmp2_safe_receiver.v();
    while (_iterator__ex2g4s_0.w()) {
      var element_0 = _iterator__ex2g4s_0.x();
      if (element_0.p1o_1 === 'Order') {
        destination.f(element_0);
      }
    }
    tmp_0 = destination;
  }
  var tmp3_elvis_lhs = tmp_0;
  var orderLevelCharges = tmp3_elvis_lhs == null ? emptyList() : tmp3_elvis_lhs;
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination_0 = ArrayList.b6(collectionSizeOrDefault(orderLevelCharges, 10));
  var _iterator__ex2g4s_1 = orderLevelCharges.v();
  while (_iterator__ex2g4s_1.w()) {
    var item = _iterator__ex2g4s_1.x();
    var tmp$ret$6 = item.q1o_1;
    destination_0.f(tmp$ret$6);
  }
  var orderChargeIds = toSet(destination_0);
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_1 = ArrayList.e1();
  var _iterator__ex2g4s_2 = orderLevelCharges.v();
  while (_iterator__ex2g4s_2.w()) {
    var element_1 = _iterator__ex2g4s_2.x();
    var tmp0_elvis_lhs_0 = order.v1j_1;
    var tmp_1 = tmp0_elvis_lhs_0 == null ? 0.0 : tmp0_elvis_lhs_0;
    var tmp1_elvis_lhs = element_1.x1o_1;
    if (tmp_1 >= (tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs)) {
      destination_1.f(element_1);
    }
  }
  var tmp$ret$12;
  $l$block_0: {
    // Inline function 'kotlin.collections.maxByOrNull' call
    var iterator = destination_1.v();
    if (!iterator.w()) {
      tmp$ret$12 = null;
      break $l$block_0;
    }
    var maxElem = iterator.x();
    if (!iterator.w()) {
      tmp$ret$12 = maxElem;
      break $l$block_0;
    }
    var tmp0_elvis_lhs_1 = maxElem.x1o_1;
    var maxValue = tmp0_elvis_lhs_1 == null ? 0.0 : tmp0_elvis_lhs_1;
    do {
      var e = iterator.x();
      var tmp0_elvis_lhs_2 = e.x1o_1;
      var v = tmp0_elvis_lhs_2 == null ? 0.0 : tmp0_elvis_lhs_2;
      if (compareTo(maxValue, v) < 0) {
        maxElem = e;
        maxValue = v;
      }
    }
     while (iterator.w());
    tmp$ret$12 = maxElem;
  }
  var applicableCharge = tmp$ret$12;
  removeAll(charge, OrderCalculationService$calculateOrderTypeChargesAndTax$lambda_0(orderChargeIds, applicableCharge));
  if (applicableCharge == null) {
    return 0.0;
  }
  var tmp_2;
  if (equals_0(applicableCharge.e1p_1, 'Absolute', true)) {
    var tmp4_safe_receiver = applicableCharge.r1o_1;
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.collections.sumOf' call
      var sum_0 = 0;
      var _iterator__ex2g4s_3 = tmp4_safe_receiver.v();
      while (_iterator__ex2g4s_3.w()) {
        var element_2 = _iterator__ex2g4s_3.x();
        var tmp_4 = sum_0;
        var tmp0_elvis_lhs_3 = element_2.j1p_1;
        sum_0 = tmp_4 + (tmp0_elvis_lhs_3 == null ? 0.0 : tmp0_elvis_lhs_3);
      }
      tmp_3 = sum_0;
    }
    var tmp5_elvis_lhs = tmp_3;
    var totalTaxPercent = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
    var tmp_5;
    if (isTaxIncluded) {
      var tmp6_elvis_lhs = applicableCharge.d1p_1;
      tmp_5 = (tmp6_elvis_lhs == null ? 0.0 : tmp6_elvis_lhs) / (1 + totalTaxPercent / 100);
    } else {
      tmp_5 = applicableCharge.d1p_1;
    }
    tmp_2 = tmp_5;
  } else {
    var tmp7_elvis_lhs = order.v1j_1;
    var tmp_6 = tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs;
    var tmp8_elvis_lhs = applicableCharge.d1p_1;
    tmp_2 = tmp_6 * ((tmp8_elvis_lhs == null ? 0.0 : tmp8_elvis_lhs) / 100);
  }
  var chargeValue = tmp_2;
  var tmp9_safe_receiver = applicableCharge.r1o_1;
  if (tmp9_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_4 = tmp9_safe_receiver.v();
    while (_iterator__ex2g4s_4.w()) {
      var element_3 = _iterator__ex2g4s_4.x();
      var tmp_7 = chargeValue == null ? 0.0 : chargeValue;
      var tmp1_elvis_lhs_0 = element_3.j1p_1;
      var taxAmount = tmp_7 * ((tmp1_elvis_lhs_0 == null ? 0.0 : tmp1_elvis_lhs_0) / 100);
      chargesTax = chargesTax + taxAmount;
      element_3.l1p_1 = order.b1j_1 ? 0.0 : taxAmount;
    }
  }
  var tmp12_applyAtLevel = applicableCharge.p1o_1;
  var tmp13_chargeId = applicableCharge.q1o_1;
  var tmp10_elvis_lhs = applicableCharge.x1o_1;
  var tmp14_minOrderValue = tmp10_elvis_lhs == null ? 0.0 : tmp10_elvis_lhs;
  var tmp15_title = applicableCharge.b1p_1;
  var tmp16_value = chargeValue == null ? 0.0 : chargeValue;
  var tmp17_description = applicableCharge.t1o_1;
  var tmp_8;
  if (equals_0(applicableCharge.e1p_1, 'Percentage', true)) {
    tmp_8 = applicableCharge.d1p_1;
  } else {
    tmp_8 = 0.0;
  }
  var tmp18_percentage = tmp_8;
  var tmp19_chargeTaxIds = applicableCharge.r1o_1;
  var tmp20_types = applicableCharge.c1p_1;
  var tmp21_valueType = applicableCharge.e1p_1;
  var tmp22_orderLevelChargesTax = order.b1j_1 ? 0.0 : chargesTax;
  var newCharge = new ChargesData(tmp12_applyAtLevel, tmp13_chargeId, tmp19_chargeTaxIds, tmp18_percentage, VOID, tmp17_description, VOID, tmp22_orderLevelChargesTax, VOID, tmp15_title, VOID, tmp20_types, tmp16_value, tmp21_valueType, VOID, tmp14_minOrderValue);
  var tmp$ret$20;
  $l$block_1: {
    // Inline function 'kotlin.collections.indexOfFirst' call
    var index = 0;
    var _iterator__ex2g4s_5 = charge.v();
    while (_iterator__ex2g4s_5.w()) {
      var item_0 = _iterator__ex2g4s_5.x();
      if (item_0.a1o_1 == applicableCharge.q1o_1) {
        tmp$ret$20 = index;
        break $l$block_1;
      }
      index = index + 1 | 0;
    }
    tmp$ret$20 = -1;
  }
  var existingIndex = tmp$ret$20;
  if (existingIndex >= 0) {
    charge.n2(existingIndex, newCharge);
  } else {
    charge.f(newCharge);
  }
  return order.b1j_1 ? 0.0 : chargesTax;
}
function updateDiscountCharge($this, charges, title, value, percentage, offerDetails) {
  var formattedValue = formatDoublePrice(value);
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.indexOfFirst' call
    var index = 0;
    var _iterator__ex2g4s = charges.v();
    while (_iterator__ex2g4s.w()) {
      var item = _iterator__ex2g4s.x();
      if (item.i1o_1 === title) {
        tmp$ret$1 = index;
        break $l$block;
      }
      index = index + 1 | 0;
    }
    tmp$ret$1 = -1;
  }
  var existingChargeIndex = tmp$ret$1;
  if (value > 0.0) {
    var newCharge = new ChargesData(VOID, VOID, VOID, percentage, offerDetails, VOID, VOID, VOID, VOID, title, VOID, VOID, formattedValue);
    if (!(existingChargeIndex === -1)) {
      charges.n2(existingChargeIndex, newCharge);
    } else {
      charges.f(newCharge);
    }
  } else {
    if (!(existingChargeIndex === -1)) {
      charges.o2(existingChargeIndex);
    }
  }
}
function updateDiscountCharge$default($this, charges, title, value, percentage, offerDetails, $super) {
  percentage = percentage === VOID ? null : percentage;
  offerDetails = offerDetails === VOID ? null : offerDetails;
  return updateDiscountCharge($this, charges, title, value, percentage, offerDetails);
}
function OrderCalculationService$applyDiscountsAndCharges$lambda(it) {
  return it.i1o_1 === 'Cash Discount';
}
function OrderCalculationService$applyDiscountsAndCharges$lambda_0(it) {
  return it.i1o_1 === 'Card Surcharge';
}
function OrderCalculationService$calculateOrderTypeChargesAndTax$lambda($order) {
  return function (it) {
    var tmp0_elvis_lhs = $order.v1j_1;
    var tmp = tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = it.o1o_1;
    return tmp < (tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs);
  };
}
function OrderCalculationService$calculateOrderTypeChargesAndTax$lambda_0($orderChargeIds, $applicableCharge) {
  return function (it) {
    var tmp;
    if ($orderChargeIds.d2(it.a1o_1)) {
      var tmp0_safe_receiver = $applicableCharge;
      tmp = !(it.a1o_1 == (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1o_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
}
function OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o() {
  return new ArrayListSerializer($serializer_getInstance_5());
}
function OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_0() {
  return new ArrayListSerializer($serializer_getInstance_42());
}
function OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_1() {
  return new ArrayListSerializer($serializer_getInstance_16());
}
function OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_2() {
  return new ArrayListSerializer($serializer_getInstance_19());
}
function OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_3() {
  return new ArrayListSerializer($serializer_getInstance_12());
}
function OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_4() {
  return new ArrayListSerializer($serializer_getInstance_12());
}
function OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_5() {
  return new ArrayListSerializer($serializer_getInstance_13());
}
function OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_6() {
  return new ArrayListSerializer($serializer_getInstance_18());
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  return Companion_instance_0;
}
var $serializer_instance_0;
function $serializer_getInstance_0() {
  if ($serializer_instance_0 === VOID)
    new $serializer_0();
  return $serializer_instance_0;
}
function OrderTypeData$Companion$$childSerializers$_anonymous__6oolc8() {
  return new ArrayListSerializer($serializer_getInstance_2());
}
var Companion_instance_1;
function Companion_getInstance_1() {
  if (Companion_instance_1 === VOID)
    new Companion_1();
  return Companion_instance_1;
}
var $serializer_instance_1;
function $serializer_getInstance_1() {
  if ($serializer_instance_1 === VOID)
    new $serializer_1();
  return $serializer_instance_1;
}
function OrderLevelChargesData$Companion$$childSerializers$_anonymous__6h1i7d() {
  return new ArrayListSerializer($serializer_getInstance_11());
}
function OrderLevelChargesData$Companion$$childSerializers$_anonymous__6h1i7d_0() {
  return new ArrayListSerializer(StringSerializer_getInstance());
}
function OrderLevelChargesData$Companion$$childSerializers$_anonymous__6h1i7d_1() {
  return new ArrayListSerializer(StringSerializer_getInstance());
}
function OrderLevelChargesData$Companion$$childSerializers$_anonymous__6h1i7d_2() {
  return new ArrayListSerializer(StringSerializer_getInstance());
}
function OrderLevelChargesData$Companion$$childSerializers$_anonymous__6h1i7d_3() {
  return new ArrayListSerializer(StringSerializer_getInstance());
}
var Companion_instance_2;
function Companion_getInstance_2() {
  if (Companion_instance_2 === VOID)
    new Companion_2();
  return Companion_instance_2;
}
var $serializer_instance_2;
function $serializer_getInstance_2() {
  if ($serializer_instance_2 === VOID)
    new $serializer_2();
  return $serializer_instance_2;
}
var Companion_instance_3;
function Companion_getInstance_3() {
  return Companion_instance_3;
}
var $serializer_instance_3;
function $serializer_getInstance_3() {
  if ($serializer_instance_3 === VOID)
    new $serializer_3();
  return $serializer_instance_3;
}
function OrderStoreDetails$Companion$$childSerializers$_anonymous__s8cdzv() {
  return new ArrayListSerializer(StringSerializer_getInstance());
}
var Companion_instance_4;
function Companion_getInstance_4() {
  if (Companion_instance_4 === VOID)
    new Companion_4();
  return Companion_instance_4;
}
var $serializer_instance_4;
function $serializer_getInstance_4() {
  if ($serializer_instance_4 === VOID)
    new $serializer_4();
  return $serializer_instance_4;
}
var Companion_instance_5;
function Companion_getInstance_5() {
  return Companion_instance_5;
}
var $serializer_instance_5;
function $serializer_getInstance_5() {
  if ($serializer_instance_5 === VOID)
    new $serializer_5();
  return $serializer_instance_5;
}
function MemberShipPlan$Companion$$childSerializers$_anonymous__f5ycq3() {
  return new ArrayListSerializer($serializer_getInstance_7());
}
function MemberShipPlan$Companion$$childSerializers$_anonymous__f5ycq3_0() {
  return new ArrayListSerializer($serializer_getInstance_8());
}
function MemberShipPlan$Companion$$childSerializers$_anonymous__f5ycq3_1() {
  return new ArrayListSerializer($serializer_getInstance_18());
}
var Companion_instance_6;
function Companion_getInstance_6() {
  if (Companion_instance_6 === VOID)
    new Companion_6();
  return Companion_instance_6;
}
var $serializer_instance_6;
function $serializer_getInstance_6() {
  if ($serializer_instance_6 === VOID)
    new $serializer_6();
  return $serializer_instance_6;
}
var Companion_instance_7;
function Companion_getInstance_7() {
  return Companion_instance_7;
}
var $serializer_instance_7;
function $serializer_getInstance_7() {
  if ($serializer_instance_7 === VOID)
    new $serializer_7();
  return $serializer_instance_7;
}
var Companion_instance_8;
function Companion_getInstance_8() {
  return Companion_instance_8;
}
var $serializer_instance_8;
function $serializer_getInstance_8() {
  if ($serializer_instance_8 === VOID)
    new $serializer_8();
  return $serializer_instance_8;
}
function OrderDiscount$Companion$$childSerializers$_anonymous__1gq891() {
  return new ArrayListSerializer(IntSerializer_getInstance());
}
var Companion_instance_9;
function Companion_getInstance_9() {
  if (Companion_instance_9 === VOID)
    new Companion_9();
  return Companion_instance_9;
}
var $serializer_instance_9;
function $serializer_getInstance_9() {
  if ($serializer_instance_9 === VOID)
    new $serializer_9();
  return $serializer_instance_9;
}
var Companion_instance_10;
function Companion_getInstance_10() {
  return Companion_instance_10;
}
var $serializer_instance_10;
function $serializer_getInstance_10() {
  if ($serializer_instance_10 === VOID)
    new $serializer_10();
  return $serializer_instance_10;
}
var Companion_instance_11;
function Companion_getInstance_11() {
  return Companion_instance_11;
}
var $serializer_instance_11;
function $serializer_getInstance_11() {
  if ($serializer_instance_11 === VOID)
    new $serializer_11();
  return $serializer_instance_11;
}
function ChargesData$Companion$$childSerializers$_anonymous__htu7tr() {
  return new ArrayListSerializer($serializer_getInstance_11());
}
var Companion_instance_12;
function Companion_getInstance_12() {
  if (Companion_instance_12 === VOID)
    new Companion_12();
  return Companion_instance_12;
}
var $serializer_instance_12;
function $serializer_getInstance_12() {
  if ($serializer_instance_12 === VOID)
    new $serializer_12();
  return $serializer_instance_12;
}
var Companion_instance_13;
function Companion_getInstance_13() {
  return Companion_instance_13;
}
var $serializer_instance_13;
function $serializer_getInstance_13() {
  if ($serializer_instance_13 === VOID)
    new $serializer_13();
  return $serializer_instance_13;
}
var Companion_instance_14;
function Companion_getInstance_14() {
  return Companion_instance_14;
}
var $serializer_instance_14;
function $serializer_getInstance_14() {
  if ($serializer_instance_14 === VOID)
    new $serializer_14();
  return $serializer_instance_14;
}
var Companion_instance_15;
function Companion_getInstance_15() {
  return Companion_instance_15;
}
var $serializer_instance_15;
function $serializer_getInstance_15() {
  if ($serializer_instance_15 === VOID)
    new $serializer_15();
  return $serializer_instance_15;
}
function PaymentDetails$Companion$$childSerializers$_anonymous__kbx1ou() {
  return new ArrayListSerializer($serializer_getInstance_19());
}
var Companion_instance_16;
function Companion_getInstance_16() {
  if (Companion_instance_16 === VOID)
    new Companion_16();
  return Companion_instance_16;
}
var $serializer_instance_16;
function $serializer_getInstance_16() {
  if ($serializer_instance_16 === VOID)
    new $serializer_16();
  return $serializer_instance_16;
}
var Companion_instance_17;
function Companion_getInstance_17() {
  return Companion_instance_17;
}
var $serializer_instance_17;
function $serializer_getInstance_17() {
  if ($serializer_instance_17 === VOID)
    new $serializer_17();
  return $serializer_instance_17;
}
var Companion_instance_18;
function Companion_getInstance_18() {
  return Companion_instance_18;
}
var $serializer_instance_18;
function $serializer_getInstance_18() {
  if ($serializer_instance_18 === VOID)
    new $serializer_18();
  return $serializer_instance_18;
}
function OrderPaymentDetails$Companion$$childSerializers$_anonymous__ddnqhs() {
  return new ArrayListSerializer(StringSerializer_getInstance());
}
function OrderPaymentDetails$Companion$$childSerializers$_anonymous__ddnqhs_0() {
  return new ArrayListSerializer($serializer_getInstance_19());
}
function OrderPaymentDetails$Companion$$childSerializers$_anonymous__ddnqhs_1() {
  return new ArrayListSerializer($serializer_getInstance_17());
}
var Companion_instance_19;
function Companion_getInstance_19() {
  if (Companion_instance_19 === VOID)
    new Companion_19();
  return Companion_instance_19;
}
var $serializer_instance_19;
function $serializer_getInstance_19() {
  if ($serializer_instance_19 === VOID)
    new $serializer_19();
  return $serializer_instance_19;
}
var Companion_instance_20;
function Companion_getInstance_20() {
  return Companion_instance_20;
}
var $serializer_instance_20;
function $serializer_getInstance_20() {
  if ($serializer_instance_20 === VOID)
    new $serializer_20();
  return $serializer_instance_20;
}
var Companion_instance_21;
function Companion_getInstance_21() {
  return Companion_instance_21;
}
var $serializer_instance_21;
function $serializer_getInstance_21() {
  if ($serializer_instance_21 === VOID)
    new $serializer_21();
  return $serializer_instance_21;
}
var Companion_instance_22;
function Companion_getInstance_22() {
  return Companion_instance_22;
}
var $serializer_instance_22;
function $serializer_getInstance_22() {
  if ($serializer_instance_22 === VOID)
    new $serializer_22();
  return $serializer_instance_22;
}
var Companion_instance_23;
function Companion_getInstance_23() {
  return Companion_instance_23;
}
var $serializer_instance_23;
function $serializer_getInstance_23() {
  if ($serializer_instance_23 === VOID)
    new $serializer_23();
  return $serializer_instance_23;
}
var Companion_instance_24;
function Companion_getInstance_24() {
  return Companion_instance_24;
}
var $serializer_instance_24;
function $serializer_getInstance_24() {
  if ($serializer_instance_24 === VOID)
    new $serializer_24();
  return $serializer_instance_24;
}
var Companion_instance_25;
function Companion_getInstance_25() {
  return Companion_instance_25;
}
var $serializer_instance_25;
function $serializer_getInstance_25() {
  if ($serializer_instance_25 === VOID)
    new $serializer_25();
  return $serializer_instance_25;
}
var Companion_instance_26;
function Companion_getInstance_26() {
  return Companion_instance_26;
}
var $serializer_instance_26;
function $serializer_getInstance_26() {
  if ($serializer_instance_26 === VOID)
    new $serializer_26();
  return $serializer_instance_26;
}
var Companion_instance_27;
function Companion_getInstance_27() {
  return Companion_instance_27;
}
var $serializer_instance_27;
function $serializer_getInstance_27() {
  if ($serializer_instance_27 === VOID)
    new $serializer_27();
  return $serializer_instance_27;
}
var Companion_instance_28;
function Companion_getInstance_28() {
  return Companion_instance_28;
}
var $serializer_instance_28;
function $serializer_getInstance_28() {
  if ($serializer_instance_28 === VOID)
    new $serializer_28();
  return $serializer_instance_28;
}
var Companion_instance_29;
function Companion_getInstance_29() {
  return Companion_instance_29;
}
var $serializer_instance_29;
function $serializer_getInstance_29() {
  if ($serializer_instance_29 === VOID)
    new $serializer_29();
  return $serializer_instance_29;
}
function DataOutput$Companion$$childSerializers$_anonymous__bcjz5() {
  return new ArrayListSerializer($serializer_getInstance_31());
}
var Companion_instance_30;
function Companion_getInstance_30() {
  if (Companion_instance_30 === VOID)
    new Companion_30();
  return Companion_instance_30;
}
var $serializer_instance_30;
function $serializer_getInstance_30() {
  if ($serializer_instance_30 === VOID)
    new $serializer_30();
  return $serializer_instance_30;
}
var Companion_instance_31;
function Companion_getInstance_31() {
  return Companion_instance_31;
}
var $serializer_instance_31;
function $serializer_getInstance_31() {
  if ($serializer_instance_31 === VOID)
    new $serializer_31();
  return $serializer_instance_31;
}
function TransactionOutput$Companion$$childSerializers$_anonymous__covch7() {
  return new ArrayListSerializer($serializer_getInstance_33());
}
var Companion_instance_32;
function Companion_getInstance_32() {
  if (Companion_instance_32 === VOID)
    new Companion_32();
  return Companion_instance_32;
}
var $serializer_instance_32;
function $serializer_getInstance_32() {
  if ($serializer_instance_32 === VOID)
    new $serializer_32();
  return $serializer_instance_32;
}
var Companion_instance_33;
function Companion_getInstance_33() {
  return Companion_instance_33;
}
var $serializer_instance_33;
function $serializer_getInstance_33() {
  if ($serializer_instance_33 === VOID)
    new $serializer_33();
  return $serializer_instance_33;
}
function PineEDCStatusResponse$Companion$$childSerializers$_anonymous__g6y2g3() {
  return new ArrayListSerializer($serializer_getInstance_35());
}
var Companion_instance_34;
function Companion_getInstance_34() {
  if (Companion_instance_34 === VOID)
    new Companion_34();
  return Companion_instance_34;
}
var $serializer_instance_34;
function $serializer_getInstance_34() {
  if ($serializer_instance_34 === VOID)
    new $serializer_34();
  return $serializer_instance_34;
}
var Companion_instance_35;
function Companion_getInstance_35() {
  return Companion_instance_35;
}
var $serializer_instance_35;
function $serializer_getInstance_35() {
  if ($serializer_instance_35 === VOID)
    new $serializer_35();
  return $serializer_instance_35;
}
var Companion_instance_36;
function Companion_getInstance_36() {
  return Companion_instance_36;
}
var $serializer_instance_36;
function $serializer_getInstance_36() {
  if ($serializer_instance_36 === VOID)
    new $serializer_36();
  return $serializer_instance_36;
}
var Companion_instance_37;
function Companion_getInstance_37() {
  return Companion_instance_37;
}
var $serializer_instance_37;
function $serializer_getInstance_37() {
  if ($serializer_instance_37 === VOID)
    new $serializer_37();
  return $serializer_instance_37;
}
var Companion_instance_38;
function Companion_getInstance_38() {
  return Companion_instance_38;
}
var $serializer_instance_38;
function $serializer_getInstance_38() {
  if ($serializer_instance_38 === VOID)
    new $serializer_38();
  return $serializer_instance_38;
}
var Companion_instance_39;
function Companion_getInstance_39() {
  return Companion_instance_39;
}
var $serializer_instance_39;
function $serializer_getInstance_39() {
  if ($serializer_instance_39 === VOID)
    new $serializer_39();
  return $serializer_instance_39;
}
var Companion_instance_40;
function Companion_getInstance_40() {
  return Companion_instance_40;
}
var $serializer_instance_40;
function $serializer_getInstance_40() {
  if ($serializer_instance_40 === VOID)
    new $serializer_40();
  return $serializer_instance_40;
}
var Companion_instance_41;
function Companion_getInstance_41() {
  return Companion_instance_41;
}
var $serializer_instance_41;
function $serializer_getInstance_41() {
  if ($serializer_instance_41 === VOID)
    new $serializer_41();
  return $serializer_instance_41;
}
function roundHalfUp(value, scale) {
  // Inline function 'kotlin.math.pow' call
  var factor = Math.pow(10.0, scale);
  // Inline function 'kotlin.math.floor' call
  var x = value * factor + 0.5;
  return Math.floor(x) / factor;
}
function formatDoublePrice(input) {
  return roundHalfUp(input, 2);
}
function ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83() {
  return new ArrayListSerializer($serializer_getInstance_42());
}
function ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_0() {
  return new ArrayListSerializer(StringSerializer_getInstance());
}
function ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_1() {
  return new ArrayListSerializer($serializer_getInstance_18());
}
function ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_2() {
  return new ArrayListSerializer($serializer_getInstance_44());
}
function ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_3() {
  return new ArrayListSerializer($serializer_getInstance_47());
}
function ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_4() {
  return new ArrayListSerializer($serializer_getInstance_43());
}
function ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_5() {
  return new ArrayListSerializer(StringSerializer_getInstance());
}
function ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_6() {
  return new ArrayListSerializer($serializer_getInstance_48());
}
var Companion_instance_42;
function Companion_getInstance_42() {
  if (Companion_instance_42 === VOID)
    new Companion_42();
  return Companion_instance_42;
}
var $serializer_instance_42;
function $serializer_getInstance_42() {
  if ($serializer_instance_42 === VOID)
    new $serializer_42();
  return $serializer_instance_42;
}
var Companion_instance_43;
function Companion_getInstance_43() {
  return Companion_instance_43;
}
var $serializer_instance_43;
function $serializer_getInstance_43() {
  if ($serializer_instance_43 === VOID)
    new $serializer_43();
  return $serializer_instance_43;
}
function SelectedModifier$Companion$$childSerializers$_anonymous__12f5uw() {
  return new ArrayListSerializer($serializer_getInstance_45());
}
var Companion_instance_44;
function Companion_getInstance_44() {
  if (Companion_instance_44 === VOID)
    new Companion_44();
  return Companion_instance_44;
}
var $serializer_instance_44;
function $serializer_getInstance_44() {
  if ($serializer_instance_44 === VOID)
    new $serializer_44();
  return $serializer_instance_44;
}
var Companion_instance_45;
function Companion_getInstance_45() {
  return Companion_instance_45;
}
var $serializer_instance_45;
function $serializer_getInstance_45() {
  if ($serializer_instance_45 === VOID)
    new $serializer_45();
  return $serializer_instance_45;
}
var Companion_instance_46;
function Companion_getInstance_46() {
  return Companion_instance_46;
}
var $serializer_instance_46;
function $serializer_getInstance_46() {
  if ($serializer_instance_46 === VOID)
    new $serializer_46();
  return $serializer_instance_46;
}
var Companion_instance_47;
function Companion_getInstance_47() {
  return Companion_instance_47;
}
var $serializer_instance_47;
function $serializer_getInstance_47() {
  if ($serializer_instance_47 === VOID)
    new $serializer_47();
  return $serializer_instance_47;
}
var Companion_instance_48;
function Companion_getInstance_48() {
  return Companion_instance_48;
}
var $serializer_instance_48;
function $serializer_getInstance_48() {
  if ($serializer_instance_48 === VOID)
    new $serializer_48();
  return $serializer_instance_48;
}
//region block: post-declaration
initMetadataForClass(CalculationEngineImpl, 'CalculationEngineImpl', CalculationEngineImpl);
initMetadataForClass(ItemPriceCalculator, 'ItemPriceCalculator', ItemPriceCalculator);
initMetadataForClass(RoundOffResult, 'RoundOffResult');
initMetadataForClass(OrderCalculationService, 'OrderCalculationService', OrderCalculationService);
initMetadataForCompanion(Companion);
protoOf($serializer).dw = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(OrderPlaceRequest, 'OrderPlaceRequest', OrderPlaceRequest, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).dw = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(OrderScheduled, 'OrderScheduled', OrderScheduled, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).dw = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(OrderTypeData, 'OrderTypeData', OrderTypeData, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForCompanion(Companion_2);
protoOf($serializer_2).dw = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(OrderLevelChargesData, 'OrderLevelChargesData', OrderLevelChargesData, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForCompanion(Companion_3);
protoOf($serializer_3).dw = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LoyaltyData, 'LoyaltyData', LoyaltyData, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForCompanion(Companion_4);
protoOf($serializer_4).dw = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(OrderStoreDetails, 'OrderStoreDetails', OrderStoreDetails, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
initMetadataForCompanion(Companion_5);
protoOf($serializer_5).dw = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CustomerDetails, 'CustomerDetails', CustomerDetails, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
initMetadataForCompanion(Companion_6);
protoOf($serializer_6).dw = typeParametersSerializers;
initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(MemberShipPlan, 'MemberShipPlan', MemberShipPlan, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
initMetadataForCompanion(Companion_7);
protoOf($serializer_7).dw = typeParametersSerializers;
initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(OfferDetail, 'OfferDetail', OfferDetail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
initMetadataForCompanion(Companion_8);
protoOf($serializer_8).dw = typeParametersSerializers;
initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RedemptionDetails, 'RedemptionDetails', RedemptionDetails, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
initMetadataForCompanion(Companion_9);
protoOf($serializer_9).dw = typeParametersSerializers;
initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(OrderDiscount, 'OrderDiscount', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
initMetadataForCompanion(Companion_10);
protoOf($serializer_10).dw = typeParametersSerializers;
initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(OrderOfferHeader, 'OrderOfferHeader', OrderOfferHeader, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
initMetadataForCompanion(Companion_11);
protoOf($serializer_11).dw = typeParametersSerializers;
initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ChargeTaxId, 'ChargeTaxId', ChargeTaxId, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
initMetadataForCompanion(Companion_12);
protoOf($serializer_12).dw = typeParametersSerializers;
initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ChargesData, 'ChargesData', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
initMetadataForCompanion(Companion_13);
protoOf($serializer_13).dw = typeParametersSerializers;
initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(OrderStateHistory, 'OrderStateHistory', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
initMetadataForCompanion(Companion_14);
protoOf($serializer_14).dw = typeParametersSerializers;
initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PlatForDetails, 'PlatForDetails', PlatForDetails, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
initMetadataForCompanion(Companion_15);
protoOf($serializer_15).dw = typeParametersSerializers;
initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Extras, 'Extras', Extras, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
initMetadataForCompanion(Companion_16);
protoOf($serializer_16).dw = typeParametersSerializers;
initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PaymentDetails, 'PaymentDetails', PaymentDetails, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
initMetadataForCompanion(Companion_17);
protoOf($serializer_17).dw = typeParametersSerializers;
initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PaymentIntentClass, 'PaymentIntentClass', PaymentIntentClass, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
initMetadataForCompanion(Companion_18);
protoOf($serializer_18).dw = typeParametersSerializers;
initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Tax, 'Tax', Tax, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
initMetadataForCompanion(Companion_19);
protoOf($serializer_19).dw = typeParametersSerializers;
initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(OrderPaymentDetails, 'OrderPaymentDetails', OrderPaymentDetails, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
initMetadataForCompanion(Companion_20);
protoOf($serializer_20).dw = typeParametersSerializers;
initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PaxPaymentResponse, 'PaxPaymentResponse', PaxPaymentResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_20});
initMetadataForCompanion(Companion_21);
protoOf($serializer_21).dw = typeParametersSerializers;
initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CloverPaymentResponse, 'CloverPaymentResponse', CloverPaymentResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_21});
initMetadataForCompanion(Companion_22);
protoOf($serializer_22).dw = typeParametersSerializers;
initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PaymentInfo, 'PaymentInfo', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_22});
initMetadataForCompanion(Companion_23);
protoOf($serializer_23).dw = typeParametersSerializers;
initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CardTransaction, 'CardTransaction', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_23});
initMetadataForCompanion(Companion_24);
protoOf($serializer_24).dw = typeParametersSerializers;
initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Extra, 'Extra', Extra, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_24});
initMetadataForCompanion(Companion_25);
protoOf($serializer_25).dw = typeParametersSerializers;
initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Employee, 'Employee', Employee, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_25});
initMetadataForCompanion(Companion_26);
protoOf($serializer_26).dw = typeParametersSerializers;
initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Order, 'Order', Order, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_26});
initMetadataForCompanion(Companion_27);
protoOf($serializer_27).dw = typeParametersSerializers;
initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Tender, 'Tender', Tender, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_27});
initMetadataForCompanion(Companion_28);
protoOf($serializer_28).dw = typeParametersSerializers;
initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RazorPayEdcStatusResponse, 'RazorPayEdcStatusResponse', RazorPayEdcStatusResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_28});
initMetadataForCompanion(Companion_29);
protoOf($serializer_29).dw = typeParametersSerializers;
initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(MagTekPaymentResponse, 'MagTekPaymentResponse', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_29});
initMetadataForCompanion(Companion_30);
protoOf($serializer_30).dw = typeParametersSerializers;
initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(DataOutput, 'DataOutput', DataOutput, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_30});
initMetadataForCompanion(Companion_31);
protoOf($serializer_31).dw = typeParametersSerializers;
initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AdditionalOutputDaum, 'AdditionalOutputDaum', AdditionalOutputDaum, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_31});
initMetadataForCompanion(Companion_32);
protoOf($serializer_32).dw = typeParametersSerializers;
initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(TransactionOutput, 'TransactionOutput', TransactionOutput, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_32});
initMetadataForCompanion(Companion_33);
protoOf($serializer_33).dw = typeParametersSerializers;
initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(TransactionOutputDetail, 'TransactionOutputDetail', TransactionOutputDetail, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_33});
initMetadataForCompanion(Companion_34);
protoOf($serializer_34).dw = typeParametersSerializers;
initMetadataForObject($serializer_34, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PineEDCStatusResponse, 'PineEDCStatusResponse', PineEDCStatusResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_34});
initMetadataForCompanion(Companion_35);
protoOf($serializer_35).dw = typeParametersSerializers;
initMetadataForObject($serializer_35, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(TransactionData, 'TransactionData', TransactionData, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_35});
initMetadataForCompanion(Companion_36);
protoOf($serializer_36).dw = typeParametersSerializers;
initMetadataForObject($serializer_36, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ChargeSlipResponse, 'ChargeSlipResponse', ChargeSlipResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_36});
initMetadataForCompanion(Companion_37);
protoOf($serializer_37).dw = typeParametersSerializers;
initMetadataForObject($serializer_37, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PineQrCheckerData, 'PineQrCheckerData', PineQrCheckerData, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_37});
initMetadataForCompanion(Companion_38);
protoOf($serializer_38).dw = typeParametersSerializers;
initMetadataForObject($serializer_38, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AmountChecker, 'AmountChecker', AmountChecker, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_38});
initMetadataForCompanion(Companion_39);
protoOf($serializer_39).dw = typeParametersSerializers;
initMetadataForObject($serializer_39, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PayeeChecker, 'PayeeChecker', PayeeChecker, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_39});
initMetadataForCompanion(Companion_40);
protoOf($serializer_40).dw = typeParametersSerializers;
initMetadataForObject($serializer_40, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(TranResponse, 'TranResponse', TranResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_40});
initMetadataForCompanion(Companion_41);
protoOf($serializer_41).dw = typeParametersSerializers;
initMetadataForObject($serializer_41, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Amount2, 'Amount2', Amount2, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_41});
initMetadataForCompanion(Companion_42);
protoOf($serializer_42).dw = typeParametersSerializers;
initMetadataForObject($serializer_42, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ItemDetailsList, 'ItemDetailsList', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_42});
initMetadataForCompanion(Companion_43);
protoOf($serializer_43).dw = typeParametersSerializers;
initMetadataForObject($serializer_43, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Nutrition, 'Nutrition', Nutrition, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_43});
initMetadataForCompanion(Companion_44);
protoOf($serializer_44).dw = typeParametersSerializers;
initMetadataForObject($serializer_44, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SelectedModifier, 'SelectedModifier', SelectedModifier, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_44});
initMetadataForCompanion(Companion_45);
protoOf($serializer_45).dw = typeParametersSerializers;
initMetadataForObject($serializer_45, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ItemModifier, 'ItemModifier', ItemModifier, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_45});
initMetadataForCompanion(Companion_46);
protoOf($serializer_46).dw = typeParametersSerializers;
initMetadataForObject($serializer_46, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PrinterTag, 'PrinterTag', PrinterTag, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_46});
initMetadataForCompanion(Companion_47);
protoOf($serializer_47).dw = typeParametersSerializers;
initMetadataForObject($serializer_47, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SelectedAddonsItems, 'SelectedAddonsItems', SelectedAddonsItems, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_47});
initMetadataForCompanion(Companion_48);
protoOf($serializer_48).dw = typeParametersSerializers;
initMetadataForObject($serializer_48, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ChannelPlu, 'ChannelPlu', ChannelPlu, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_48});
//endregion
//region block: init
Companion_instance_0 = new Companion_0();
Companion_instance_3 = new Companion_3();
Companion_instance_5 = new Companion_5();
Companion_instance_7 = new Companion_7();
Companion_instance_8 = new Companion_8();
Companion_instance_10 = new Companion_10();
Companion_instance_11 = new Companion_11();
Companion_instance_13 = new Companion_13();
Companion_instance_14 = new Companion_14();
Companion_instance_15 = new Companion_15();
Companion_instance_17 = new Companion_17();
Companion_instance_18 = new Companion_18();
Companion_instance_20 = new Companion_20();
Companion_instance_21 = new Companion_21();
Companion_instance_22 = new Companion_22();
Companion_instance_23 = new Companion_23();
Companion_instance_24 = new Companion_24();
Companion_instance_25 = new Companion_25();
Companion_instance_26 = new Companion_26();
Companion_instance_27 = new Companion_27();
Companion_instance_28 = new Companion_28();
Companion_instance_29 = new Companion_29();
Companion_instance_31 = new Companion_31();
Companion_instance_33 = new Companion_33();
Companion_instance_35 = new Companion_35();
Companion_instance_36 = new Companion_36();
Companion_instance_37 = new Companion_37();
Companion_instance_38 = new Companion_38();
Companion_instance_39 = new Companion_39();
Companion_instance_40 = new Companion_40();
Companion_instance_41 = new Companion_41();
Companion_instance_43 = new Companion_43();
Companion_instance_45 = new Companion_45();
Companion_instance_46 = new Companion_46();
Companion_instance_47 = new Companion_47();
Companion_instance_48 = new Companion_48();
//endregion
//region block: exports
export {
  refreshCalculationJs as refreshCalculationJs,
};
//endregion

//# sourceMappingURL=CalculationEngine-sharedLogic.mjs.map
