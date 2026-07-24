import {
  Unit_instance1fbcbse1fwigr as Unit_instance,
  VOID3gxj6tk5isa35 as VOID,
  getKClass1s3j9wy1cofik as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType1lgox3mzhchp5 as createKType,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  ArrayList3it5z8td81qkl as ArrayList,
  toList3jhuyej2anx2q as toList,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  checkIndexOverflow3frtmheghr0th as checkIndexOverflow,
  getNumberHashCode2l4nbdcihl25f as getNumberHashCode,
  equals2au1ep9vhcato as equals,
  removeAll3o43e67jmwdpc as removeAll,
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
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  toString1pkumu07cwy4m as toString,
  toString30pk9tzaqopn as toString_0,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  hashCodeq5arwsb9dgti as hashCode,
  createThis2j2avj17cvnv2 as createThis,
  Long2qws0ah9gnpki as Long,
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
  LongSerializer_getInstance194e4t3ow5wjs as LongSerializer_getInstance,
  DoubleSerializer_getInstance3da4hv5ndgjlx as DoubleSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
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
        order.l1i_1 = 0.0;
      }
      this.e1h_1.x1j(order, isTaxIncluded);
      this.e1h_1.y1j(isRoundOffEnabled, roundOffType, applicableRoundOffPaymentTypes, order, cashDiscount, surcharge, selectedPaymentType, isTaxIncluded);
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
  d1n(order, item, totalAmount, isTaxIncluded) {
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
        var tmp0_elvis_lhs = element.z1m_1;
        sum = tmp_0 + (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs);
      }
      tmp = sum;
    }
    var totalTaxPercentage = tmp;
    var comboPrice = calculateTotalPriceOfSelectedCombos(this, calculatedItem.u1k_1);
    var addonPrice = calculateTotalPriceOfAddons(this, calculatedItem.q1l_1);
    var tmp_1;
    if (isTaxIncluded) {
      var tmp_2 = calculatedItem.e1l_1;
      tmp_1 = tmp_2 / (1 + (totalTaxPercentage == null ? 0.0 : totalTaxPercentage) / 100);
    } else {
      tmp_1 = calculatedItem.e1l_1;
    }
    var extendedAmountWithOutTax = tmp_1;
    calculatedItem.f1m_1 = formatDoublePrice(extendedAmountWithOutTax * calculatedItem.c1l_1 + addonPrice + comboPrice);
    calculatedItem.x1l_1 = formatDoublePrice(calculatedItem.f1m_1);
    var tmp_3 = calculatedItem;
    var tmp_4;
    if (!(calculatedItem.r1m_1 === true)) {
      var tmp_5;
      if (order.s1i_1 > 0.0) {
        tmp_5 = calculatedItem.f1m_1 * (order.s1i_1 / 100);
      } else if (order.t1i_1 > 0.0) {
        tmp_5 = calculatedItem.f1m_1 / totalAmount * order.t1i_1;
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
    if (!(calculatedItem.r1m_1 === true)) {
      var tmp_8;
      if (calculatedItem.h1m_1 > 0.0) {
        tmp_8 = calculatedItem.f1m_1 * (calculatedItem.h1m_1 / 100);
      } else if (calculatedItem.i1m_1 > 0.0) {
        tmp_8 = calculatedItem.i1m_1;
      } else {
        tmp_8 = 0.0;
      }
      tmp_7 = tmp_8;
    } else {
      tmp_7 = 0.0;
    }
    tmp_6.f1l_1 = formatDoublePrice(tmp_7);
    calculatedItem.u1m_1 = formatDoublePrice(calculatedItem.f1m_1 - calculatedItem.f1l_1 - calculatedItem.w1l_1);
    var tmp_9 = calculatedItem;
    var tmp2_elvis_lhs = calculatedItem.u1m_1;
    tmp_9.g1l_1 = formatDoublePrice(calculateItemTax(this, order, tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs, calculatedItem.o1l_1));
    var tmp_10 = calculatedItem;
    var tmp3_elvis_lhs = calculatedItem.u1m_1;
    tmp_10.h1l_1 = formatDoublePrice(tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs);
    return calculatedItem;
  }
}
class RoundOffResult {
  constructor(finalAmount, roundOff) {
    this.e1n_1 = finalAmount;
    this.f1n_1 = roundOff;
  }
  toString() {
    return 'RoundOffResult(finalAmount=' + this.e1n_1 + ', roundOff=' + this.f1n_1 + ')';
  }
  hashCode() {
    var result = getNumberHashCode(this.e1n_1);
    result = imul(result, 31) + getNumberHashCode(this.f1n_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundOffResult))
      return false;
    var tmp0_other_with_cast = other instanceof RoundOffResult ? other : THROW_CCE();
    if (!equals(this.e1n_1, tmp0_other_with_cast.e1n_1))
      return false;
    if (!equals(this.f1n_1, tmp0_other_with_cast.f1n_1))
      return false;
    return true;
  }
}
class OrderCalculationService {
  constructor() {
    this.h1h_1 = new ItemPriceCalculator();
  }
  x1j(order, isTaxIncluded) {
    order.n1i_1 = 0.0;
    order.m1i_1 = 0.0;
    order.f1j_1 = 0.0;
    order.g1j_1 = 0.0;
    order.o1i_1 = 0.0;
    order.w1j_1 = 0.0;
    var totalAmountForDiscount = 0.0;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = order.b1i_1.v();
    while (_iterator__ex2g4s.w()) {
      var element = _iterator__ex2g4s.x();
      if (!(element.r1m_1 === true) && !(element.z1l_1 === true) && !(element.z1l_1 === true) && !(element.y1l_1 === true)) {
        var comboPrice = calculateTotalPriceOfSelectedCombos_0(this, element.u1k_1);
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
            var tmp0_elvis_lhs = element_0.z1m_1;
            sum = tmp_0 + (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs);
          }
          tmp = sum;
        }
        var tmp1_elvis_lhs = tmp;
        var totalTaxPercent = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
        var unitPrice = element.e1l_1 + comboPrice;
        var tmp_1;
        if (isTaxIncluded) {
          tmp_1 = unitPrice * element.c1l_1 * 100.0 / (100.0 + totalTaxPercent);
        } else {
          tmp_1 = unitPrice * element.c1l_1;
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
      var this_1 = item.b1p();
      if (!(item.z1l_1 === true) && !(item.y1l_1 === true)) {
        calculateItemPrice(this, order, index_0, this_1, totalAmountForDiscount, isTaxIncluded);
      }
      destination.f(this_1);
    }
    tmp_2.b1i_1 = toCollection(destination, ArrayList.d1());
    var tmp0_safe_receiver_0 = order.c1i_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_2 = tmp0_safe_receiver_0.v();
      while (_iterator__ex2g4s_2.w()) {
        var element_1 = _iterator__ex2g4s_2.x();
        var tmp_3 = order;
        var tmp0_elvis_lhs_0 = element_1.j1p_1;
        tmp_3.d1i_1 = tmp0_elvis_lhs_0 == null ? 0.0 : tmp0_elvis_lhs_0;
      }
    }
    order.n1i_1 = formatDoublePrice(order.n1i_1);
  }
  y1j(roundOff, type, paymentTypes, order, cashDiscount, surcharge, selectedPaymentType, isTaxIncluded) {
    var tmp0 = order.j1j_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index = 0;
      var _iterator__ex2g4s = tmp0.v();
      while (_iterator__ex2g4s.w()) {
        var item = _iterator__ex2g4s.x();
        if (item.x1n_1 === 'Complimentary Discount') {
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
      order.j1j_1.b1(indexOfComplimentaryDiscount).a1o_1 = order.l1i_1;
    }
    var orderDiscounts = ArrayList.r(order.j1j_1);
    var itemLevelDiscount = 0.0;
    var itemLevelPercentage = 0.0;
    var itemComplimentaryDiscount = 0.0;
    var itemComplimentaryPercentDiscount = 0.0;
    var orderLevelDiscount = 0.0;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = order.b1i_1.v();
    while (_iterator__ex2g4s_0.w()) {
      var element = _iterator__ex2g4s_0.x();
      var tmp0_safe_receiver = element.k1m_1;
      if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1n_1) === 'Item Complimentary Discount') {
        itemComplimentaryDiscount = itemComplimentaryDiscount + element.f1l_1;
        itemComplimentaryPercentDiscount = itemComplimentaryPercentDiscount + element.h1m_1;
      } else {
        itemLevelDiscount = itemLevelDiscount + element.f1l_1;
        itemLevelPercentage = itemLevelPercentage + element.h1m_1;
      }
      if (!isComplimentaryOrderLevelApplied) {
        orderLevelDiscount = orderLevelDiscount + element.w1l_1;
      }
    }
    updateDiscountCharge$default(this, orderDiscounts, 'Item Level Discount', itemLevelDiscount, itemLevelPercentage);
    updateDiscountCharge$default(this, orderDiscounts, 'Item Complimentary Discount', itemComplimentaryDiscount, itemComplimentaryPercentDiscount);
    var tmp = orderLevelDiscount;
    var tmp_0 = order.s1i_1;
    // Inline function 'kotlin.collections.find' call
    var tmp0_0 = order.j1j_1;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_1 = tmp0_0.v();
      while (_iterator__ex2g4s_1.w()) {
        var element_0 = _iterator__ex2g4s_1.x();
        if (element_0.x1n_1 === 'Order Level Discount') {
          tmp$ret$5 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$5 = null;
    }
    var tmp0_safe_receiver_0 = tmp$ret$5;
    updateDiscountCharge(this, orderDiscounts, 'Order Level Discount', tmp, tmp_0, tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.s1n_1);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$8;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_2 = orderDiscounts.v();
      while (_iterator__ex2g4s_2.w()) {
        var element_1 = _iterator__ex2g4s_2.x();
        if (element_1.x1n_1 === 'Loyalty Points') {
          tmp$ret$8 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$8 = null;
    }
    var appliedPoints = tmp$ret$8;
    var appliedPointsDiscount = 0.0;
    if (!(appliedPoints == null)) {
      var tmp_1 = order.n1i_1;
      var tmp1_elvis_lhs = appliedPoints.d1o_1;
      if (tmp_1 >= (tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs)) {
        order.l1i_1 = order.l1i_1 + appliedPoints.a1o_1;
        appliedPointsDiscount = appliedPoints.a1o_1;
      } else {
        var tmp$ret$11;
        $l$block_2: {
          // Inline function 'kotlin.collections.indexOfFirst' call
          var index_0 = 0;
          var _iterator__ex2g4s_3 = orderDiscounts.v();
          while (_iterator__ex2g4s_3.w()) {
            var item_0 = _iterator__ex2g4s_3.x();
            if (item_0.x1n_1 === 'Loyalty Points') {
              tmp$ret$11 = index_0;
              break $l$block_2;
            }
            index_0 = index_0 + 1 | 0;
          }
          tmp$ret$11 = -1;
        }
        var appliedIndex = tmp$ret$11;
        orderDiscounts.o2(appliedIndex);
        order.u1j_1 = null;
      }
    }
    calculateOrderTypeChargesAndTax(this, order, order.k1j_1, isTaxIncluded);
    var tmp_2 = order;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s_4 = order.k1j_1.v();
    while (_iterator__ex2g4s_4.w()) {
      var element_2 = _iterator__ex2g4s_4.x();
      var tmp_3 = sum;
      sum = tmp_3 + element_2.a1o_1;
    }
    tmp_2.h1j_1 = sum;
    var totalTax = 0.0;
    var taxList = ArrayList.d1();
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
              tmp_4 = taxList.e1();
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
              if (element_5.x1m_1 == element_4.x1m_1) {
                tmp$ret$14 = false;
                break $l$block_4;
              }
            }
            tmp$ret$14 = true;
          }
          if (tmp$ret$14) {
            taxList.f(element_4.l1p());
          }
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_8 = order.k1j_1.v();
    while (_iterator__ex2g4s_8.w()) {
      var element_6 = _iterator__ex2g4s_8.x();
      var tmp0_safe_receiver_2 = element_6.q1n_1;
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
              tmp_5 = taxList.e1();
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
              if (element_8.x1m_1 == element_7.x1o_1) {
                tmp$ret$20 = false;
                break $l$block_6;
              }
            }
            tmp$ret$20 = true;
          }
          if (tmp$ret$20) {
            taxList.f(new Tax(element_7.v1o_1, element_7.v1o_1, element_7.x1o_1, element_7.z1o_1, element_7.y1o_1, '', 0.0, 0.0));
          }
        }
      }
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0_1 = order.b1i_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.d1();
    var _iterator__ex2g4s_11 = tmp0_1.v();
    while (_iterator__ex2g4s_11.w()) {
      var element_9 = _iterator__ex2g4s_11.x();
      var tmp_6;
      var tmp_7;
      // Inline function 'kotlin.text.isNullOrEmpty' call
      var this_0 = element_9.w1k_1;
      if (this_0 == null || charSequenceLength(this_0) === 0) {
        tmp_7 = !(element_9.y1l_1 === true);
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
        if (!(this_1 == null || this_1.e1())) {
          var tmp0_safe_receiver_3 = element_11.o1l_1;
          if (tmp0_safe_receiver_3 == null)
            null;
          else {
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_14 = tmp0_safe_receiver_3.v();
            while (_iterator__ex2g4s_14.w()) {
              var element_12 = _iterator__ex2g4s_14.x();
              if (element_12.x1m_1 == element_10.x1m_1) {
                var tmp_8 = itemTaxAmount;
                var tmp0_elvis_lhs = element_12.b1n_1;
                itemTaxAmount = tmp_8 + (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs);
                var tmp_9 = taxableAmt;
                var tmp1_elvis_lhs_0 = element_12.c1n_1;
                taxableAmt = tmp_9 + (tmp1_elvis_lhs_0 == null ? 0.0 : tmp1_elvis_lhs_0);
              }
            }
          }
        }
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_15 = order.k1j_1.v();
      while (_iterator__ex2g4s_15.w()) {
        var element_13 = _iterator__ex2g4s_15.x();
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_2 = element_13.q1n_1;
        if (!(this_2 == null || this_2.e1())) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_16 = element_13.q1n_1.v();
          while (_iterator__ex2g4s_16.w()) {
            var element_14 = _iterator__ex2g4s_16.x();
            if (element_14.x1o_1 == element_10.x1m_1) {
              var tmp_10 = itemTaxAmount;
              var tmp0_elvis_lhs_0 = element_14.a1p_1;
              itemTaxAmount = tmp_10 + (tmp0_elvis_lhs_0 == null ? 0.0 : tmp0_elvis_lhs_0);
              taxableAmt = taxableAmt + element_13.a1o_1;
            }
          }
        }
      }
      element_10.c1n_1 = taxableAmt;
      element_10.b1n_1 = order.c1j_1 ? 0.0 : formatDoublePrice(itemTaxAmount);
      var tmp_11 = totalTax;
      var tmp0_elvis_lhs_1 = element_10.b1n_1;
      totalTax = tmp_11 + (tmp0_elvis_lhs_1 == null ? 0.0 : tmp0_elvis_lhs_1);
    }
    order.v1j_1 = taxList;
    order.m1i_1 = totalTax;
    var payableAmount = order.n1i_1 + order.m1i_1 + order.v1i_1 + order.h1j_1;
    var cashDiscountAmount = 0.0;
    if (cashDiscount > 0.0) {
      cashDiscountAmount = payableAmount * (cashDiscount / 100);
      updateDiscountCharge$default(this, orderDiscounts, 'Cash Discount', formatDoublePrice(cashDiscountAmount), cashDiscount);
    } else {
      removeAll(orderDiscounts, OrderCalculationService$applyDiscountsAndCharges$lambda);
    }
    order.j1j_1 = orderDiscounts;
    order.l1i_1 = order.l1i_1 + cashDiscountAmount;
    var tmp0_2 = order.k1j_1;
    var tmp$ret$43;
    $l$block_7: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index_1 = 0;
      var _iterator__ex2g4s_17 = tmp0_2.v();
      while (_iterator__ex2g4s_17.w()) {
        var item_1 = _iterator__ex2g4s_17.x();
        if (item_1.x1n_1 === 'Card Surcharge') {
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
        order.k1j_1.n2(surchargeIndex, surchargeCharge);
      } else {
        order.k1j_1.f(surchargeCharge);
      }
    } else {
      var tmp_12 = order.k1j_1;
      removeAll(tmp_12, OrderCalculationService$applyDiscountsAndCharges$lambda_0);
    }
    var tmp_13 = order;
    // Inline function 'kotlin.collections.sumOf' call
    var sum_0 = 0;
    var _iterator__ex2g4s_18 = order.k1j_1.v();
    while (_iterator__ex2g4s_18.w()) {
      var element_15 = _iterator__ex2g4s_18.x();
      var tmp_14 = sum_0;
      sum_0 = tmp_14 + element_15.a1o_1;
    }
    tmp_13.h1j_1 = sum_0;
    order.p1i_1 = formatDoublePrice(order.n1i_1 + order.m1i_1 + order.h1j_1 + order.v1i_1 - cashDiscountAmount - appliedPointsDiscount);
    var tmp_15;
    if (order.t1i_1 > 0.0) {
      var tmp_16 = order.t1i_1;
      var tmp4_elvis_lhs = order.g1j_1;
      tmp_15 = tmp_16 > (tmp4_elvis_lhs == null ? order.f1j_1 : tmp4_elvis_lhs);
    } else {
      tmp_15 = false;
    }
    if (tmp_15) {
      order.t1i_1 = 0.0;
      order.l1i_1 = 0.0;
      this.x1j(order, isTaxIncluded);
      this.y1j(roundOff, type, paymentTypes, order, cashDiscount, surcharge, selectedPaymentType, isTaxIncluded);
    }
    if (order.c1j_1) {
      order.p1i_1 = order.p1i_1 - order.m1i_1;
    }
    var roundOffData = this.m1p(selectedPaymentType, order.p1i_1, roundOff, type, paymentTypes);
    order.p1i_1 = roundOffData.e1n_1;
    var roundOff_0 = roundOffData.f1n_1;
    order.q1i_1 = this.n1p(roundOff_0);
  }
  i1h(order) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = order.k1j_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.d1();
    var _iterator__ex2g4s = tmp0.v();
    while (_iterator__ex2g4s.w()) {
      var element = _iterator__ex2g4s.x();
      if (!(element.x1n_1 === 'Card Surcharge')) {
        destination.f(element);
      }
    }
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s_0 = destination.v();
    while (_iterator__ex2g4s_0.w()) {
      var element_0 = _iterator__ex2g4s_0.x();
      var tmp = sum;
      var tmp0_elvis_lhs = element_0.v1n_1;
      sum = tmp + (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs);
    }
    var chargesTax = sum;
    // Inline function 'kotlin.collections.find' call
    var tmp0_0 = order.j1j_1;
    var tmp$ret$6;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_1 = tmp0_0.v();
      while (_iterator__ex2g4s_1.w()) {
        var element_1 = _iterator__ex2g4s_1.x();
        if (element_1.x1n_1 === 'Cash Discount') {
          tmp$ret$6 = element_1;
          break $l$block;
        }
      }
      tmp$ret$6 = null;
    }
    var tmp0_safe_receiver = tmp$ret$6;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1o_1;
    var cashDiscountAmount = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp0_1 = order.j1j_1;
    var tmp$ret$9;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_2 = tmp0_1.v();
      while (_iterator__ex2g4s_2.w()) {
        var element_2 = _iterator__ex2g4s_2.x();
        if (element_2.x1n_1 === 'Card Surcharge') {
          tmp$ret$9 = element_2;
          break $l$block_0;
        }
      }
      tmp$ret$9 = null;
    }
    var tmp2_safe_receiver = tmp$ret$9;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.a1o_1;
    var surchargeAmount = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_2 = order.k1j_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList.d1();
    var _iterator__ex2g4s_3 = tmp0_2.v();
    while (_iterator__ex2g4s_3.w()) {
      var element_3 = _iterator__ex2g4s_3.x();
      if (!(element_3.x1n_1 === 'Card Surcharge')) {
        destination_0.f(element_3);
      }
    }
    // Inline function 'kotlin.collections.sumOf' call
    var sum_0 = 0;
    var _iterator__ex2g4s_4 = destination_0.v();
    while (_iterator__ex2g4s_4.w()) {
      var element_4 = _iterator__ex2g4s_4.x();
      var tmp_0 = sum_0;
      sum_0 = tmp_0 + element_4.a1o_1;
    }
    var totalCharges = sum_0;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_3 = order.b1i_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList.d1();
    var _iterator__ex2g4s_5 = tmp0_3.v();
    while (_iterator__ex2g4s_5.w()) {
      var element_5 = _iterator__ex2g4s_5.x();
      if (element_5.y1l_1 === true || element_5.z1l_1 === true || element_5.z1l_1 === true) {
        destination_1.f(element_5);
      }
    }
    // Inline function 'kotlin.collections.sumOf' call
    var sum_1 = 0;
    var _iterator__ex2g4s_6 = destination_1.v();
    while (_iterator__ex2g4s_6.w()) {
      var element_6 = _iterator__ex2g4s_6.x();
      var tmp_1 = sum_1;
      order.n1i_1;
      var ratio = element_6.h1l_1 / order.n1i_1;
      var chargeShare = totalCharges * ratio;
      var chargeShareTax = chargesTax * ratio;
      var cashDiscountShare = cashDiscountAmount * ratio;
      var surchargeShare = surchargeAmount * ratio;
      var tipShare = order.v1i_1 * ratio;
      println('CALCULATION-> itemNetSale ' + element_6.h1l_1 + ' orderNetSale-' + order.n1i_1 + ' ratio-' + ratio + ' totalCharges-' + order.h1j_1 + ' chargesTax-' + chargesTax + ' cashDisAmt-' + cashDiscountAmount + ' cardSurcharge-' + surchargeAmount);
      println('CALCULATION-> taxableAmt-' + element_6.u1m_1 + ' totalTax-' + element_6.g1l_1 + ' charge share-' + chargeShare + ' charge share tax-' + chargeShareTax + ' cash discount share-' + cashDiscountShare + ' surcharge share-' + surchargeShare);
      var tmp0_elvis_lhs_0 = element_6.u1m_1;
      sum_1 = tmp_1 + ((tmp0_elvis_lhs_0 == null ? 0.0 : tmp0_elvis_lhs_0) + element_6.g1l_1 + chargeShareTax + chargeShare + tipShare + surchargeShare - cashDiscountShare);
    }
    var refundAmount = sum_1;
    order.p1i_1 = order.p1i_1 - refundAmount;
  }
  n1p(roundOff) {
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
  m1p(selectedPaymentType, amount, roundOff, type, paymentTypes) {
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
    var tmp_15 = lazy(tmp_14, OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_6);
    var tmp_16 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o1p_1 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_1, tmp_3, tmp_5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_7, tmp_9, null, null, null, null, null, null, null, null, tmp_11, tmp_13, null, null, null, null, tmp_15, null, null, null, null, null, lazy(tmp_16, OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_7), null];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderPlaceRequest', this, 65);
    tmp0_serialDesc.aw('isReprint', true);
    tmp0_serialDesc.aw('isAdjusting', true);
    tmp0_serialDesc.aw('isRefund', true);
    tmp0_serialDesc.aw('fromScreen', true);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('payment_code', true);
    tmp0_serialDesc.aw('type', true);
    tmp0_serialDesc.aw('invoice_no', true);
    tmp0_serialDesc.aw('invoice_bos_number', true);
    tmp0_serialDesc.aw('order_state', true);
    tmp0_serialDesc.aw('order_source_code', true);
    tmp0_serialDesc.aw('order_source', true);
    tmp0_serialDesc.aw('is_kot_printed', true);
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
    tmp0_serialDesc.aw('is_send', true);
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
    tmp0_serialDesc.aw('payment_ids', true);
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
    tmp0_serialDesc.aw('order_time_millis', true);
    tmp0_serialDesc.aw('order_state_history', true);
    tmp0_serialDesc.aw('selected_order_type', true);
    tmp0_serialDesc.aw('membership_plan', true);
    tmp0_serialDesc.aw('is_advance_order', true);
    tmp0_serialDesc.aw('order_scheduled', true);
    tmp0_serialDesc.aw('loyalty', true);
    tmp0_serialDesc.aw('taxes', true);
    tmp0_serialDesc.aw('taxable_amount', true);
    this.p1p_1 = tmp0_serialDesc;
  }
  q1p(encoder, value) {
    var tmp0_desc = this.p1p_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance().o1p_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.j1h_1 === false)) {
      tmp1_output.zp(tmp0_desc, 0, value.j1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.k1h_1 === false)) {
      tmp1_output.zp(tmp0_desc, 1, value.k1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.l1h_1 === false)) {
      tmp1_output.zp(tmp0_desc, 2, value.l1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.m1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.m1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.n1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.n1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.o1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.o1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.p1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.p1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.q1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, IntSerializer_getInstance(), value.q1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.r1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.r1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.s1h_1 === '')) {
      tmp1_output.hq(tmp0_desc, 9, value.s1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.t1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.t1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.u1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.u1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.v1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 12, BooleanSerializer_getInstance(), value.v1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.w1h_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, BooleanSerializer_getInstance(), value.w1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.x1h_1 === '')) {
      tmp1_output.hq(tmp0_desc, 14, value.x1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.y1h_1 === '')) {
      tmp1_output.hq(tmp0_desc, 15, value.y1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !value.z1h_1.equals(new OrderStoreDetails())) {
      tmp1_output.jq(tmp0_desc, 16, $serializer_getInstance_4(), value.z1h_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !equals(value.a1i_1, ArrayList.d1())) {
      tmp1_output.jq(tmp0_desc, 17, tmp2_cached[17].g2(), value.a1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !value.b1i_1.equals(ArrayList.d1())) {
      tmp1_output.jq(tmp0_desc, 18, tmp2_cached[18].g2(), value.b1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !(value.c1i_1 == null)) {
      tmp1_output.lq(tmp0_desc, 19, tmp2_cached[19].g2(), value.c1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !equals(value.d1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 20, value.d1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.e1i_1 === '')) {
      tmp1_output.lq(tmp0_desc, 21, StringSerializer_getInstance(), value.e1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 22) ? true : !(value.f1i_1 === false)) {
      tmp1_output.zp(tmp0_desc, 22, value.f1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 23) ? true : !(value.g1i_1 === false)) {
      tmp1_output.zp(tmp0_desc, 23, value.g1i_1);
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
    if (tmp1_output.pq(tmp0_desc, 27) ? true : !(value.k1i_1 === '')) {
      tmp1_output.hq(tmp0_desc, 27, value.k1i_1);
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
    if (tmp1_output.pq(tmp0_desc, 36) ? true : !equals(value.t1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 36, value.t1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 37) ? true : !(value.u1i_1 === '')) {
      tmp1_output.hq(tmp0_desc, 37, value.u1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 38) ? true : !equals(value.v1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 38, value.v1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 39) ? true : !equals(value.w1i_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 39, value.w1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 40) ? true : !(value.x1i_1 === 1)) {
      tmp1_output.cq(tmp0_desc, 40, value.x1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 41) ? true : !(value.y1i_1 == null)) {
      tmp1_output.lq(tmp0_desc, 41, tmp2_cached[41].g2(), value.y1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 42) ? true : !(value.z1i_1 == null)) {
      tmp1_output.lq(tmp0_desc, 42, tmp2_cached[42].g2(), value.z1i_1);
    }
    if (tmp1_output.pq(tmp0_desc, 43) ? true : !(value.a1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 43, StringSerializer_getInstance(), value.a1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 44) ? true : !(value.b1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 44, StringSerializer_getInstance(), value.b1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 45) ? true : !(value.c1j_1 === false)) {
      tmp1_output.zp(tmp0_desc, 45, value.c1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 46) ? true : !(value.d1j_1 === 1)) {
      tmp1_output.cq(tmp0_desc, 46, value.d1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 47) ? true : !(value.e1j_1 === 0)) {
      tmp1_output.lq(tmp0_desc, 47, IntSerializer_getInstance(), value.e1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 48) ? true : !equals(value.f1j_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 48, value.f1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 49) ? true : !equals(value.h1j_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 49, value.h1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 50) ? true : !equals(value.i1j_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 50, value.i1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 51) ? true : !value.j1j_1.equals(ArrayList.d1())) {
      tmp1_output.jq(tmp0_desc, 51, tmp2_cached[51].g2(), value.j1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 52) ? true : !value.k1j_1.equals(ArrayList.d1())) {
      tmp1_output.jq(tmp0_desc, 52, tmp2_cached[52].g2(), value.k1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 53) ? true : !(value.l1j_1 === -1)) {
      tmp1_output.cq(tmp0_desc, 53, value.l1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 54) ? true : !(value.m1j_1 === '')) {
      tmp1_output.lq(tmp0_desc, 54, StringSerializer_getInstance(), value.m1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 55) ? true : !(value.n1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 55, $serializer_getInstance_14(), value.n1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 56) ? true : !(value.o1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 56, LongSerializer_getInstance(), value.o1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 57) ? true : !(value.p1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 57, tmp2_cached[57].g2(), value.p1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 58) ? true : !(value.q1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 58, $serializer_getInstance_1(), value.q1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 59) ? true : !(value.r1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 59, $serializer_getInstance_6(), value.r1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 60) ? true : !(value.s1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 60, BooleanSerializer_getInstance(), value.s1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 61) ? true : !(value.t1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 61, $serializer_getInstance_0(), value.t1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 62) ? true : !(value.u1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 62, $serializer_getInstance_3(), value.u1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 63) ? true : !(value.v1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 63, tmp2_cached[63].g2(), value.v1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 64) ? true : !(value.w1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 64, DoubleSerializer_getInstance(), value.w1j_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.q1p(encoder, value instanceof OrderPlaceRequest ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.p1p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_bitMask2 = 0;
    var tmp6_local0 = false;
    var tmp7_local1 = false;
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
    var tmp20_local14 = null;
    var tmp21_local15 = null;
    var tmp22_local16 = null;
    var tmp23_local17 = null;
    var tmp24_local18 = null;
    var tmp25_local19 = null;
    var tmp26_local20 = 0.0;
    var tmp27_local21 = null;
    var tmp28_local22 = false;
    var tmp29_local23 = false;
    var tmp30_local24 = null;
    var tmp31_local25 = null;
    var tmp32_local26 = null;
    var tmp33_local27 = null;
    var tmp34_local28 = 0.0;
    var tmp35_local29 = 0.0;
    var tmp36_local30 = 0.0;
    var tmp37_local31 = 0.0;
    var tmp38_local32 = 0.0;
    var tmp39_local33 = 0.0;
    var tmp40_local34 = 0.0;
    var tmp41_local35 = 0.0;
    var tmp42_local36 = 0.0;
    var tmp43_local37 = null;
    var tmp44_local38 = 0.0;
    var tmp45_local39 = 0.0;
    var tmp46_local40 = 0;
    var tmp47_local41 = null;
    var tmp48_local42 = null;
    var tmp49_local43 = null;
    var tmp50_local44 = null;
    var tmp51_local45 = false;
    var tmp52_local46 = 0;
    var tmp53_local47 = null;
    var tmp54_local48 = 0.0;
    var tmp55_local49 = 0.0;
    var tmp56_local50 = 0.0;
    var tmp57_local51 = null;
    var tmp58_local52 = null;
    var tmp59_local53 = 0;
    var tmp60_local54 = null;
    var tmp61_local55 = null;
    var tmp62_local56 = null;
    var tmp63_local57 = null;
    var tmp64_local58 = null;
    var tmp65_local59 = null;
    var tmp66_local60 = null;
    var tmp67_local61 = null;
    var tmp68_local62 = null;
    var tmp69_local63 = null;
    var tmp70_local64 = null;
    var tmp72_input = decoder.so(tmp0_desc);
    var tmp73_cached = Companion_getInstance().o1p_1;
    if (tmp72_input.ip()) {
      tmp6_local0 = tmp72_input.uo(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp7_local1 = tmp72_input.uo(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp8_local2 = tmp72_input.uo(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp9_local3 = tmp72_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp9_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp10_local4 = tmp72_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp10_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp11_local5 = tmp72_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp11_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp12_local6 = tmp72_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp12_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp13_local7 = tmp72_input.gp(tmp0_desc, 7, IntSerializer_getInstance(), tmp13_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp14_local8 = tmp72_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp14_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp15_local9 = tmp72_input.cp(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp16_local10 = tmp72_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp16_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp17_local11 = tmp72_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp17_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp18_local12 = tmp72_input.gp(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp18_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp19_local13 = tmp72_input.gp(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp19_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp20_local14 = tmp72_input.cp(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp21_local15 = tmp72_input.cp(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp22_local16 = tmp72_input.ep(tmp0_desc, 16, $serializer_getInstance_4(), tmp22_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp23_local17 = tmp72_input.ep(tmp0_desc, 17, tmp73_cached[17].g2(), tmp23_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp24_local18 = tmp72_input.ep(tmp0_desc, 18, tmp73_cached[18].g2(), tmp24_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp25_local19 = tmp72_input.gp(tmp0_desc, 19, tmp73_cached[19].g2(), tmp25_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp26_local20 = tmp72_input.ap(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp27_local21 = tmp72_input.gp(tmp0_desc, 21, StringSerializer_getInstance(), tmp27_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp28_local22 = tmp72_input.uo(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp29_local23 = tmp72_input.uo(tmp0_desc, 23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp30_local24 = tmp72_input.cp(tmp0_desc, 24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp31_local25 = tmp72_input.cp(tmp0_desc, 25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp32_local26 = tmp72_input.cp(tmp0_desc, 26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp33_local27 = tmp72_input.cp(tmp0_desc, 27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp34_local28 = tmp72_input.ap(tmp0_desc, 28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp35_local29 = tmp72_input.ap(tmp0_desc, 29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp36_local30 = tmp72_input.ap(tmp0_desc, 30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp37_local31 = tmp72_input.ap(tmp0_desc, 31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp38_local32 = tmp72_input.ap(tmp0_desc, 32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp39_local33 = tmp72_input.ap(tmp0_desc, 33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp40_local34 = tmp72_input.ap(tmp0_desc, 34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp41_local35 = tmp72_input.ap(tmp0_desc, 35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp42_local36 = tmp72_input.ap(tmp0_desc, 36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp43_local37 = tmp72_input.cp(tmp0_desc, 37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp44_local38 = tmp72_input.ap(tmp0_desc, 38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp45_local39 = tmp72_input.ap(tmp0_desc, 39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp46_local40 = tmp72_input.xo(tmp0_desc, 40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp47_local41 = tmp72_input.gp(tmp0_desc, 41, tmp73_cached[41].g2(), tmp47_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp48_local42 = tmp72_input.gp(tmp0_desc, 42, tmp73_cached[42].g2(), tmp48_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp49_local43 = tmp72_input.gp(tmp0_desc, 43, StringSerializer_getInstance(), tmp49_local43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp50_local44 = tmp72_input.gp(tmp0_desc, 44, StringSerializer_getInstance(), tmp50_local44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
      tmp51_local45 = tmp72_input.uo(tmp0_desc, 45);
      tmp4_bitMask1 = tmp4_bitMask1 | 8192;
      tmp52_local46 = tmp72_input.xo(tmp0_desc, 46);
      tmp4_bitMask1 = tmp4_bitMask1 | 16384;
      tmp53_local47 = tmp72_input.gp(tmp0_desc, 47, IntSerializer_getInstance(), tmp53_local47);
      tmp4_bitMask1 = tmp4_bitMask1 | 32768;
      tmp54_local48 = tmp72_input.ap(tmp0_desc, 48);
      tmp4_bitMask1 = tmp4_bitMask1 | 65536;
      tmp55_local49 = tmp72_input.ap(tmp0_desc, 49);
      tmp4_bitMask1 = tmp4_bitMask1 | 131072;
      tmp56_local50 = tmp72_input.ap(tmp0_desc, 50);
      tmp4_bitMask1 = tmp4_bitMask1 | 262144;
      tmp57_local51 = tmp72_input.ep(tmp0_desc, 51, tmp73_cached[51].g2(), tmp57_local51);
      tmp4_bitMask1 = tmp4_bitMask1 | 524288;
      tmp58_local52 = tmp72_input.ep(tmp0_desc, 52, tmp73_cached[52].g2(), tmp58_local52);
      tmp4_bitMask1 = tmp4_bitMask1 | 1048576;
      tmp59_local53 = tmp72_input.xo(tmp0_desc, 53);
      tmp4_bitMask1 = tmp4_bitMask1 | 2097152;
      tmp60_local54 = tmp72_input.gp(tmp0_desc, 54, StringSerializer_getInstance(), tmp60_local54);
      tmp4_bitMask1 = tmp4_bitMask1 | 4194304;
      tmp61_local55 = tmp72_input.gp(tmp0_desc, 55, $serializer_getInstance_14(), tmp61_local55);
      tmp4_bitMask1 = tmp4_bitMask1 | 8388608;
      tmp62_local56 = tmp72_input.gp(tmp0_desc, 56, LongSerializer_getInstance(), tmp62_local56);
      tmp4_bitMask1 = tmp4_bitMask1 | 16777216;
      tmp63_local57 = tmp72_input.gp(tmp0_desc, 57, tmp73_cached[57].g2(), tmp63_local57);
      tmp4_bitMask1 = tmp4_bitMask1 | 33554432;
      tmp64_local58 = tmp72_input.gp(tmp0_desc, 58, $serializer_getInstance_1(), tmp64_local58);
      tmp4_bitMask1 = tmp4_bitMask1 | 67108864;
      tmp65_local59 = tmp72_input.gp(tmp0_desc, 59, $serializer_getInstance_6(), tmp65_local59);
      tmp4_bitMask1 = tmp4_bitMask1 | 134217728;
      tmp66_local60 = tmp72_input.gp(tmp0_desc, 60, BooleanSerializer_getInstance(), tmp66_local60);
      tmp4_bitMask1 = tmp4_bitMask1 | 268435456;
      tmp67_local61 = tmp72_input.gp(tmp0_desc, 61, $serializer_getInstance_0(), tmp67_local61);
      tmp4_bitMask1 = tmp4_bitMask1 | 536870912;
      tmp68_local62 = tmp72_input.gp(tmp0_desc, 62, $serializer_getInstance_3(), tmp68_local62);
      tmp4_bitMask1 = tmp4_bitMask1 | 1073741824;
      tmp69_local63 = tmp72_input.gp(tmp0_desc, 63, tmp73_cached[63].g2(), tmp69_local63);
      tmp4_bitMask1 = tmp4_bitMask1 | -2147483648;
      tmp70_local64 = tmp72_input.gp(tmp0_desc, 64, DoubleSerializer_getInstance(), tmp70_local64);
      tmp5_bitMask2 = tmp5_bitMask2 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp72_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp6_local0 = tmp72_input.uo(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp7_local1 = tmp72_input.uo(tmp0_desc, 1);
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
            tmp11_local5 = tmp72_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp11_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp12_local6 = tmp72_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp12_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp13_local7 = tmp72_input.gp(tmp0_desc, 7, IntSerializer_getInstance(), tmp13_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp14_local8 = tmp72_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp14_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp15_local9 = tmp72_input.cp(tmp0_desc, 9);
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
            tmp18_local12 = tmp72_input.gp(tmp0_desc, 12, BooleanSerializer_getInstance(), tmp18_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp19_local13 = tmp72_input.gp(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp19_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp20_local14 = tmp72_input.cp(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp21_local15 = tmp72_input.cp(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp22_local16 = tmp72_input.ep(tmp0_desc, 16, $serializer_getInstance_4(), tmp22_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp23_local17 = tmp72_input.ep(tmp0_desc, 17, tmp73_cached[17].g2(), tmp23_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp24_local18 = tmp72_input.ep(tmp0_desc, 18, tmp73_cached[18].g2(), tmp24_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp25_local19 = tmp72_input.gp(tmp0_desc, 19, tmp73_cached[19].g2(), tmp25_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp26_local20 = tmp72_input.ap(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp27_local21 = tmp72_input.gp(tmp0_desc, 21, StringSerializer_getInstance(), tmp27_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp28_local22 = tmp72_input.uo(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp29_local23 = tmp72_input.uo(tmp0_desc, 23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp30_local24 = tmp72_input.cp(tmp0_desc, 24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp31_local25 = tmp72_input.cp(tmp0_desc, 25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp32_local26 = tmp72_input.cp(tmp0_desc, 26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp33_local27 = tmp72_input.cp(tmp0_desc, 27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp34_local28 = tmp72_input.ap(tmp0_desc, 28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp35_local29 = tmp72_input.ap(tmp0_desc, 29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp36_local30 = tmp72_input.ap(tmp0_desc, 30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp37_local31 = tmp72_input.ap(tmp0_desc, 31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp38_local32 = tmp72_input.ap(tmp0_desc, 32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp39_local33 = tmp72_input.ap(tmp0_desc, 33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp40_local34 = tmp72_input.ap(tmp0_desc, 34);
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
            tmp43_local37 = tmp72_input.cp(tmp0_desc, 37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp44_local38 = tmp72_input.ap(tmp0_desc, 38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp45_local39 = tmp72_input.ap(tmp0_desc, 39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp46_local40 = tmp72_input.xo(tmp0_desc, 40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp47_local41 = tmp72_input.gp(tmp0_desc, 41, tmp73_cached[41].g2(), tmp47_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp48_local42 = tmp72_input.gp(tmp0_desc, 42, tmp73_cached[42].g2(), tmp48_local42);
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
            tmp51_local45 = tmp72_input.uo(tmp0_desc, 45);
            tmp4_bitMask1 = tmp4_bitMask1 | 8192;
            break;
          case 46:
            tmp52_local46 = tmp72_input.xo(tmp0_desc, 46);
            tmp4_bitMask1 = tmp4_bitMask1 | 16384;
            break;
          case 47:
            tmp53_local47 = tmp72_input.gp(tmp0_desc, 47, IntSerializer_getInstance(), tmp53_local47);
            tmp4_bitMask1 = tmp4_bitMask1 | 32768;
            break;
          case 48:
            tmp54_local48 = tmp72_input.ap(tmp0_desc, 48);
            tmp4_bitMask1 = tmp4_bitMask1 | 65536;
            break;
          case 49:
            tmp55_local49 = tmp72_input.ap(tmp0_desc, 49);
            tmp4_bitMask1 = tmp4_bitMask1 | 131072;
            break;
          case 50:
            tmp56_local50 = tmp72_input.ap(tmp0_desc, 50);
            tmp4_bitMask1 = tmp4_bitMask1 | 262144;
            break;
          case 51:
            tmp57_local51 = tmp72_input.ep(tmp0_desc, 51, tmp73_cached[51].g2(), tmp57_local51);
            tmp4_bitMask1 = tmp4_bitMask1 | 524288;
            break;
          case 52:
            tmp58_local52 = tmp72_input.ep(tmp0_desc, 52, tmp73_cached[52].g2(), tmp58_local52);
            tmp4_bitMask1 = tmp4_bitMask1 | 1048576;
            break;
          case 53:
            tmp59_local53 = tmp72_input.xo(tmp0_desc, 53);
            tmp4_bitMask1 = tmp4_bitMask1 | 2097152;
            break;
          case 54:
            tmp60_local54 = tmp72_input.gp(tmp0_desc, 54, StringSerializer_getInstance(), tmp60_local54);
            tmp4_bitMask1 = tmp4_bitMask1 | 4194304;
            break;
          case 55:
            tmp61_local55 = tmp72_input.gp(tmp0_desc, 55, $serializer_getInstance_14(), tmp61_local55);
            tmp4_bitMask1 = tmp4_bitMask1 | 8388608;
            break;
          case 56:
            tmp62_local56 = tmp72_input.gp(tmp0_desc, 56, LongSerializer_getInstance(), tmp62_local56);
            tmp4_bitMask1 = tmp4_bitMask1 | 16777216;
            break;
          case 57:
            tmp63_local57 = tmp72_input.gp(tmp0_desc, 57, tmp73_cached[57].g2(), tmp63_local57);
            tmp4_bitMask1 = tmp4_bitMask1 | 33554432;
            break;
          case 58:
            tmp64_local58 = tmp72_input.gp(tmp0_desc, 58, $serializer_getInstance_1(), tmp64_local58);
            tmp4_bitMask1 = tmp4_bitMask1 | 67108864;
            break;
          case 59:
            tmp65_local59 = tmp72_input.gp(tmp0_desc, 59, $serializer_getInstance_6(), tmp65_local59);
            tmp4_bitMask1 = tmp4_bitMask1 | 134217728;
            break;
          case 60:
            tmp66_local60 = tmp72_input.gp(tmp0_desc, 60, BooleanSerializer_getInstance(), tmp66_local60);
            tmp4_bitMask1 = tmp4_bitMask1 | 268435456;
            break;
          case 61:
            tmp67_local61 = tmp72_input.gp(tmp0_desc, 61, $serializer_getInstance_0(), tmp67_local61);
            tmp4_bitMask1 = tmp4_bitMask1 | 536870912;
            break;
          case 62:
            tmp68_local62 = tmp72_input.gp(tmp0_desc, 62, $serializer_getInstance_3(), tmp68_local62);
            tmp4_bitMask1 = tmp4_bitMask1 | 1073741824;
            break;
          case 63:
            tmp69_local63 = tmp72_input.gp(tmp0_desc, 63, tmp73_cached[63].g2(), tmp69_local63);
            tmp4_bitMask1 = tmp4_bitMask1 | -2147483648;
            break;
          case 64:
            tmp70_local64 = tmp72_input.gp(tmp0_desc, 64, DoubleSerializer_getInstance(), tmp70_local64);
            tmp5_bitMask2 = tmp5_bitMask2 | 1;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp72_input.to(tmp0_desc);
    return OrderPlaceRequest.r1p(tmp3_bitMask0, tmp4_bitMask1, tmp5_bitMask2, tmp6_local0, tmp7_local1, tmp8_local2, tmp9_local3, tmp10_local4, tmp11_local5, tmp12_local6, tmp13_local7, tmp14_local8, tmp15_local9, tmp16_local10, tmp17_local11, tmp18_local12, tmp19_local13, tmp20_local14, tmp21_local15, tmp22_local16, tmp23_local17, tmp24_local18, tmp25_local19, tmp26_local20, tmp27_local21, tmp28_local22, tmp29_local23, tmp30_local24, tmp31_local25, tmp32_local26, tmp33_local27, tmp34_local28, tmp35_local29, tmp36_local30, tmp37_local31, tmp38_local32, tmp39_local33, tmp40_local34, tmp41_local35, tmp42_local36, tmp43_local37, tmp44_local38, tmp45_local39, tmp46_local40, tmp47_local41, tmp48_local42, tmp49_local43, tmp50_local44, tmp51_local45, tmp52_local46, tmp53_local47, tmp54_local48, tmp55_local49, tmp56_local50, tmp57_local51, tmp58_local52, tmp59_local53, tmp60_local54, tmp61_local55, tmp62_local56, tmp63_local57, tmp64_local58, tmp65_local59, tmp66_local60, tmp67_local61, tmp68_local62, tmp69_local63, tmp70_local64, null);
  }
  al() {
    return this.p1p_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance().o1p_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_4(), tmp0_cached[17].g2(), tmp0_cached[18].g2(), get_nullable(tmp0_cached[19].g2()), DoubleSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(tmp0_cached[41].g2()), get_nullable(tmp0_cached[42].g2()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(IntSerializer_getInstance()), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), tmp0_cached[51].g2(), tmp0_cached[52].g2(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_14()), get_nullable(LongSerializer_getInstance()), get_nullable(tmp0_cached[57].g2()), get_nullable($serializer_getInstance_1()), get_nullable($serializer_getInstance_6()), get_nullable(BooleanSerializer_getInstance()), get_nullable($serializer_getInstance_0()), get_nullable($serializer_getInstance_3()), get_nullable(tmp0_cached[63].g2()), get_nullable(DoubleSerializer_getInstance())];
  }
}
class OrderPlaceRequest {
  constructor(isReprint, isAdjusting, isRefund, fromScreen, id, paymentCode, type, invoiceNo, invoiceBosNumber, orderState, orderSourceCode, orderSource, kotPrinted, isSync, offlineInvoiceNo, orderNo, orderStoreDetails, customerDetails, itemDetails, paymentDetails, changeTender, comment, isVoid, isSend, orderStatus, calenderDate, dateTime, businessDate, totalDiscount, totalItemTax, totalNetSale, totalGrossSale, transactionGrandAmount, roundOffAmount, refundAmount, discountPercentage, discountAmount, state, tipAmount, tipPercentage, splitBillTypeCount, splitTransactions, paidTransactions, orderType, orderTypeCode, isTaxExempt, splitBillType, receiptPrintCount, subTotal, subTotalExcludeMembership, totalCharges, initialPaid, appliedDiscount, charges, currentPayeeIndex, updateAt, platformDetails, orderTimeMillis, orderStateHistory, selectedOrderType, membershipPlan, isAdvanceOrder, orderScheduled, loyalty, taxes, taxableAmount) {
    Companion_getInstance();
    isReprint = isReprint === VOID ? false : isReprint;
    isAdjusting = isAdjusting === VOID ? false : isAdjusting;
    isRefund = isRefund === VOID ? false : isRefund;
    fromScreen = fromScreen === VOID ? null : fromScreen;
    id = id === VOID ? null : id;
    paymentCode = paymentCode === VOID ? null : paymentCode;
    type = type === VOID ? null : type;
    invoiceNo = invoiceNo === VOID ? null : invoiceNo;
    invoiceBosNumber = invoiceBosNumber === VOID ? null : invoiceBosNumber;
    orderState = orderState === VOID ? '' : orderState;
    orderSourceCode = orderSourceCode === VOID ? null : orderSourceCode;
    orderSource = orderSource === VOID ? null : orderSource;
    kotPrinted = kotPrinted === VOID ? null : kotPrinted;
    isSync = isSync === VOID ? null : isSync;
    offlineInvoiceNo = offlineInvoiceNo === VOID ? '' : offlineInvoiceNo;
    orderNo = orderNo === VOID ? '' : orderNo;
    orderStoreDetails = orderStoreDetails === VOID ? new OrderStoreDetails() : orderStoreDetails;
    customerDetails = customerDetails === VOID ? ArrayList.d1() : customerDetails;
    itemDetails = itemDetails === VOID ? ArrayList.d1() : itemDetails;
    paymentDetails = paymentDetails === VOID ? null : paymentDetails;
    changeTender = changeTender === VOID ? 0.0 : changeTender;
    comment = comment === VOID ? '' : comment;
    isVoid = isVoid === VOID ? false : isVoid;
    isSend = isSend === VOID ? false : isSend;
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
    splitTransactions = splitTransactions === VOID ? null : splitTransactions;
    paidTransactions = paidTransactions === VOID ? null : paidTransactions;
    orderType = orderType === VOID ? null : orderType;
    orderTypeCode = orderTypeCode === VOID ? null : orderTypeCode;
    isTaxExempt = isTaxExempt === VOID ? false : isTaxExempt;
    splitBillType = splitBillType === VOID ? 1 : splitBillType;
    receiptPrintCount = receiptPrintCount === VOID ? 0 : receiptPrintCount;
    subTotal = subTotal === VOID ? 0.0 : subTotal;
    subTotalExcludeMembership = subTotalExcludeMembership === VOID ? null : subTotalExcludeMembership;
    totalCharges = totalCharges === VOID ? 0.0 : totalCharges;
    initialPaid = initialPaid === VOID ? 0.0 : initialPaid;
    appliedDiscount = appliedDiscount === VOID ? ArrayList.d1() : appliedDiscount;
    charges = charges === VOID ? ArrayList.d1() : charges;
    currentPayeeIndex = currentPayeeIndex === VOID ? -1 : currentPayeeIndex;
    updateAt = updateAt === VOID ? '' : updateAt;
    platformDetails = platformDetails === VOID ? null : platformDetails;
    orderTimeMillis = orderTimeMillis === VOID ? null : orderTimeMillis;
    orderStateHistory = orderStateHistory === VOID ? null : orderStateHistory;
    selectedOrderType = selectedOrderType === VOID ? null : selectedOrderType;
    membershipPlan = membershipPlan === VOID ? null : membershipPlan;
    isAdvanceOrder = isAdvanceOrder === VOID ? null : isAdvanceOrder;
    orderScheduled = orderScheduled === VOID ? null : orderScheduled;
    loyalty = loyalty === VOID ? null : loyalty;
    taxes = taxes === VOID ? null : taxes;
    taxableAmount = taxableAmount === VOID ? null : taxableAmount;
    this.j1h_1 = isReprint;
    this.k1h_1 = isAdjusting;
    this.l1h_1 = isRefund;
    this.m1h_1 = fromScreen;
    this.n1h_1 = id;
    this.o1h_1 = paymentCode;
    this.p1h_1 = type;
    this.q1h_1 = invoiceNo;
    this.r1h_1 = invoiceBosNumber;
    this.s1h_1 = orderState;
    this.t1h_1 = orderSourceCode;
    this.u1h_1 = orderSource;
    this.v1h_1 = kotPrinted;
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
    this.g1i_1 = isSend;
    this.h1i_1 = orderStatus;
    this.i1i_1 = calenderDate;
    this.j1i_1 = dateTime;
    this.k1i_1 = businessDate;
    this.l1i_1 = totalDiscount;
    this.m1i_1 = totalItemTax;
    this.n1i_1 = totalNetSale;
    this.o1i_1 = totalGrossSale;
    this.p1i_1 = transactionGrandAmount;
    this.q1i_1 = roundOffAmount;
    this.r1i_1 = refundAmount;
    this.s1i_1 = discountPercentage;
    this.t1i_1 = discountAmount;
    this.u1i_1 = state;
    this.v1i_1 = tipAmount;
    this.w1i_1 = tipPercentage;
    this.x1i_1 = splitBillTypeCount;
    this.y1i_1 = splitTransactions;
    this.z1i_1 = paidTransactions;
    this.a1j_1 = orderType;
    this.b1j_1 = orderTypeCode;
    this.c1j_1 = isTaxExempt;
    this.d1j_1 = splitBillType;
    this.e1j_1 = receiptPrintCount;
    this.f1j_1 = subTotal;
    this.g1j_1 = subTotalExcludeMembership;
    this.h1j_1 = totalCharges;
    this.i1j_1 = initialPaid;
    this.j1j_1 = appliedDiscount;
    this.k1j_1 = charges;
    this.l1j_1 = currentPayeeIndex;
    this.m1j_1 = updateAt;
    this.n1j_1 = platformDetails;
    this.o1j_1 = orderTimeMillis;
    this.p1j_1 = orderStateHistory;
    this.q1j_1 = selectedOrderType;
    this.r1j_1 = membershipPlan;
    this.s1j_1 = isAdvanceOrder;
    this.t1j_1 = orderScheduled;
    this.u1j_1 = loyalty;
    this.v1j_1 = taxes;
    this.w1j_1 = taxableAmount;
  }
  toString() {
    return 'OrderPlaceRequest(isReprint=' + this.j1h_1 + ', isAdjusting=' + this.k1h_1 + ', isRefund=' + this.l1h_1 + ', fromScreen=' + this.m1h_1 + ', id=' + this.n1h_1 + ', paymentCode=' + this.o1h_1 + ', type=' + this.p1h_1 + ', invoiceNo=' + this.q1h_1 + ', invoiceBosNumber=' + this.r1h_1 + ', orderState=' + this.s1h_1 + ', orderSourceCode=' + this.t1h_1 + ', orderSource=' + this.u1h_1 + ', kotPrinted=' + this.v1h_1 + ', isSync=' + this.w1h_1 + ', offlineInvoiceNo=' + this.x1h_1 + ', orderNo=' + this.y1h_1 + ', orderStoreDetails=' + this.z1h_1.toString() + ', customerDetails=' + toString(this.a1i_1) + ', itemDetails=' + this.b1i_1.toString() + ', paymentDetails=' + toString_0(this.c1i_1) + ', changeTender=' + this.d1i_1 + ', comment=' + this.e1i_1 + ', isVoid=' + this.f1i_1 + ', isSend=' + this.g1i_1 + ', orderStatus=' + this.h1i_1 + ', calenderDate=' + this.i1i_1 + ', dateTime=' + this.j1i_1 + ', businessDate=' + this.k1i_1 + ', totalDiscount=' + this.l1i_1 + ', totalItemTax=' + this.m1i_1 + ', totalNetSale=' + this.n1i_1 + ', totalGrossSale=' + this.o1i_1 + ', transactionGrandAmount=' + this.p1i_1 + ', roundOffAmount=' + this.q1i_1 + ', refundAmount=' + this.r1i_1 + ', discountPercentage=' + this.s1i_1 + ', discountAmount=' + this.t1i_1 + ', state=' + this.u1i_1 + ', tipAmount=' + this.v1i_1 + ', tipPercentage=' + this.w1i_1 + ', splitBillTypeCount=' + this.x1i_1 + ', splitTransactions=' + toString_0(this.y1i_1) + ', paidTransactions=' + toString_0(this.z1i_1) + ', orderType=' + this.a1j_1 + ', orderTypeCode=' + this.b1j_1 + ', isTaxExempt=' + this.c1j_1 + ', splitBillType=' + this.d1j_1 + ', receiptPrintCount=' + this.e1j_1 + ', subTotal=' + this.f1j_1 + ', subTotalExcludeMembership=' + this.g1j_1 + ', totalCharges=' + this.h1j_1 + ', initialPaid=' + this.i1j_1 + ', appliedDiscount=' + this.j1j_1.toString() + ', charges=' + this.k1j_1.toString() + ', currentPayeeIndex=' + this.l1j_1 + ', updateAt=' + this.m1j_1 + ', platformDetails=' + toString_0(this.n1j_1) + ', orderTimeMillis=' + toString_0(this.o1j_1) + ', orderStateHistory=' + toString_0(this.p1j_1) + ', selectedOrderType=' + toString_0(this.q1j_1) + ', membershipPlan=' + toString_0(this.r1j_1) + ', isAdvanceOrder=' + this.s1j_1 + ', orderScheduled=' + toString_0(this.t1j_1) + ', loyalty=' + toString_0(this.u1j_1) + ', taxes=' + toString_0(this.v1j_1) + ', taxableAmount=' + this.w1j_1 + ')';
  }
  hashCode() {
    var result = getBooleanHashCode(this.j1h_1);
    result = imul(result, 31) + getBooleanHashCode(this.k1h_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.l1h_1) | 0;
    result = imul(result, 31) + (this.m1h_1 == null ? 0 : getStringHashCode(this.m1h_1)) | 0;
    result = imul(result, 31) + (this.n1h_1 == null ? 0 : getStringHashCode(this.n1h_1)) | 0;
    result = imul(result, 31) + (this.o1h_1 == null ? 0 : getStringHashCode(this.o1h_1)) | 0;
    result = imul(result, 31) + (this.p1h_1 == null ? 0 : getStringHashCode(this.p1h_1)) | 0;
    result = imul(result, 31) + (this.q1h_1 == null ? 0 : this.q1h_1) | 0;
    result = imul(result, 31) + (this.r1h_1 == null ? 0 : getStringHashCode(this.r1h_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.s1h_1) | 0;
    result = imul(result, 31) + (this.t1h_1 == null ? 0 : getStringHashCode(this.t1h_1)) | 0;
    result = imul(result, 31) + (this.u1h_1 == null ? 0 : getStringHashCode(this.u1h_1)) | 0;
    result = imul(result, 31) + (this.v1h_1 == null ? 0 : getBooleanHashCode(this.v1h_1)) | 0;
    result = imul(result, 31) + (this.w1h_1 == null ? 0 : getBooleanHashCode(this.w1h_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.x1h_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y1h_1) | 0;
    result = imul(result, 31) + this.z1h_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.a1i_1) | 0;
    result = imul(result, 31) + this.b1i_1.hashCode() | 0;
    result = imul(result, 31) + (this.c1i_1 == null ? 0 : this.c1i_1.hashCode()) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d1i_1) | 0;
    result = imul(result, 31) + (this.e1i_1 == null ? 0 : getStringHashCode(this.e1i_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.f1i_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.o1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w1i_1) | 0;
    result = imul(result, 31) + this.x1i_1 | 0;
    result = imul(result, 31) + (this.y1i_1 == null ? 0 : this.y1i_1.hashCode()) | 0;
    result = imul(result, 31) + (this.z1i_1 == null ? 0 : this.z1i_1.hashCode()) | 0;
    result = imul(result, 31) + (this.a1j_1 == null ? 0 : getStringHashCode(this.a1j_1)) | 0;
    result = imul(result, 31) + (this.b1j_1 == null ? 0 : getStringHashCode(this.b1j_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.c1j_1) | 0;
    result = imul(result, 31) + this.d1j_1 | 0;
    result = imul(result, 31) + (this.e1j_1 == null ? 0 : this.e1j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f1j_1) | 0;
    result = imul(result, 31) + (this.g1j_1 == null ? 0 : getNumberHashCode(this.g1j_1)) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h1j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i1j_1) | 0;
    result = imul(result, 31) + this.j1j_1.hashCode() | 0;
    result = imul(result, 31) + this.k1j_1.hashCode() | 0;
    result = imul(result, 31) + this.l1j_1 | 0;
    result = imul(result, 31) + (this.m1j_1 == null ? 0 : getStringHashCode(this.m1j_1)) | 0;
    result = imul(result, 31) + (this.n1j_1 == null ? 0 : this.n1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.o1j_1 == null ? 0 : this.o1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.p1j_1 == null ? 0 : hashCode(this.p1j_1)) | 0;
    result = imul(result, 31) + (this.q1j_1 == null ? 0 : this.q1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.r1j_1 == null ? 0 : this.r1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.s1j_1 == null ? 0 : getBooleanHashCode(this.s1j_1)) | 0;
    result = imul(result, 31) + (this.t1j_1 == null ? 0 : this.t1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.u1j_1 == null ? 0 : this.u1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.v1j_1 == null ? 0 : hashCode(this.v1j_1)) | 0;
    result = imul(result, 31) + (this.w1j_1 == null ? 0 : getNumberHashCode(this.w1j_1)) | 0;
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
    if (!(this.m1h_1 == tmp0_other_with_cast.m1h_1))
      return false;
    if (!(this.n1h_1 == tmp0_other_with_cast.n1h_1))
      return false;
    if (!(this.o1h_1 == tmp0_other_with_cast.o1h_1))
      return false;
    if (!(this.p1h_1 == tmp0_other_with_cast.p1h_1))
      return false;
    if (!(this.q1h_1 == tmp0_other_with_cast.q1h_1))
      return false;
    if (!(this.r1h_1 == tmp0_other_with_cast.r1h_1))
      return false;
    if (!(this.s1h_1 === tmp0_other_with_cast.s1h_1))
      return false;
    if (!(this.t1h_1 == tmp0_other_with_cast.t1h_1))
      return false;
    if (!(this.u1h_1 == tmp0_other_with_cast.u1h_1))
      return false;
    if (!(this.v1h_1 == tmp0_other_with_cast.v1h_1))
      return false;
    if (!(this.w1h_1 == tmp0_other_with_cast.w1h_1))
      return false;
    if (!(this.x1h_1 === tmp0_other_with_cast.x1h_1))
      return false;
    if (!(this.y1h_1 === tmp0_other_with_cast.y1h_1))
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
    if (!(this.k1i_1 === tmp0_other_with_cast.k1i_1))
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
    if (!equals(this.t1i_1, tmp0_other_with_cast.t1i_1))
      return false;
    if (!(this.u1i_1 === tmp0_other_with_cast.u1i_1))
      return false;
    if (!equals(this.v1i_1, tmp0_other_with_cast.v1i_1))
      return false;
    if (!equals(this.w1i_1, tmp0_other_with_cast.w1i_1))
      return false;
    if (!(this.x1i_1 === tmp0_other_with_cast.x1i_1))
      return false;
    if (!equals(this.y1i_1, tmp0_other_with_cast.y1i_1))
      return false;
    if (!equals(this.z1i_1, tmp0_other_with_cast.z1i_1))
      return false;
    if (!(this.a1j_1 == tmp0_other_with_cast.a1j_1))
      return false;
    if (!(this.b1j_1 == tmp0_other_with_cast.b1j_1))
      return false;
    if (!(this.c1j_1 === tmp0_other_with_cast.c1j_1))
      return false;
    if (!(this.d1j_1 === tmp0_other_with_cast.d1j_1))
      return false;
    if (!(this.e1j_1 == tmp0_other_with_cast.e1j_1))
      return false;
    if (!equals(this.f1j_1, tmp0_other_with_cast.f1j_1))
      return false;
    if (!equals(this.g1j_1, tmp0_other_with_cast.g1j_1))
      return false;
    if (!equals(this.h1j_1, tmp0_other_with_cast.h1j_1))
      return false;
    if (!equals(this.i1j_1, tmp0_other_with_cast.i1j_1))
      return false;
    if (!this.j1j_1.equals(tmp0_other_with_cast.j1j_1))
      return false;
    if (!this.k1j_1.equals(tmp0_other_with_cast.k1j_1))
      return false;
    if (!(this.l1j_1 === tmp0_other_with_cast.l1j_1))
      return false;
    if (!(this.m1j_1 == tmp0_other_with_cast.m1j_1))
      return false;
    if (!equals(this.n1j_1, tmp0_other_with_cast.n1j_1))
      return false;
    if (!equals(this.o1j_1, tmp0_other_with_cast.o1j_1))
      return false;
    if (!equals(this.p1j_1, tmp0_other_with_cast.p1j_1))
      return false;
    if (!equals(this.q1j_1, tmp0_other_with_cast.q1j_1))
      return false;
    if (!equals(this.r1j_1, tmp0_other_with_cast.r1j_1))
      return false;
    if (!(this.s1j_1 == tmp0_other_with_cast.s1j_1))
      return false;
    if (!equals(this.t1j_1, tmp0_other_with_cast.t1j_1))
      return false;
    if (!equals(this.u1j_1, tmp0_other_with_cast.u1j_1))
      return false;
    if (!equals(this.v1j_1, tmp0_other_with_cast.v1j_1))
      return false;
    if (!equals(this.w1j_1, tmp0_other_with_cast.w1j_1))
      return false;
    return true;
  }
  static r1p(seen0, seen1, seen2, isReprint, isAdjusting, isRefund, fromScreen, id, paymentCode, type, invoiceNo, invoiceBosNumber, orderState, orderSourceCode, orderSource, kotPrinted, isSync, offlineInvoiceNo, orderNo, orderStoreDetails, customerDetails, itemDetails, paymentDetails, changeTender, comment, isVoid, isSend, orderStatus, calenderDate, dateTime, businessDate, totalDiscount, totalItemTax, totalNetSale, totalGrossSale, transactionGrandAmount, roundOffAmount, refundAmount, discountPercentage, discountAmount, state, tipAmount, tipPercentage, splitBillTypeCount, splitTransactions, paidTransactions, orderType, orderTypeCode, isTaxExempt, splitBillType, receiptPrintCount, subTotal, totalCharges, initialPaid, appliedDiscount, charges, currentPayeeIndex, updateAt, platformDetails, orderTimeMillis, orderStateHistory, selectedOrderType, membershipPlan, isAdvanceOrder, orderScheduled, loyalty, taxes, taxableAmount, serializationConstructorMarker) {
    Companion_getInstance();
    if (!!(!!(!(0 === (0 & seen0)) | !(0 === (0 & seen1))) | !(0 === (0 & seen2)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1, seen2]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([0, 0, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance().p1p_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.j1h_1 = false;
    else
      $this.j1h_1 = isReprint;
    if (0 === (seen0 & 2))
      $this.k1h_1 = false;
    else
      $this.k1h_1 = isAdjusting;
    if (0 === (seen0 & 4))
      $this.l1h_1 = false;
    else
      $this.l1h_1 = isRefund;
    if (0 === (seen0 & 8))
      $this.m1h_1 = null;
    else
      $this.m1h_1 = fromScreen;
    if (0 === (seen0 & 16))
      $this.n1h_1 = null;
    else
      $this.n1h_1 = id;
    if (0 === (seen0 & 32))
      $this.o1h_1 = null;
    else
      $this.o1h_1 = paymentCode;
    if (0 === (seen0 & 64))
      $this.p1h_1 = null;
    else
      $this.p1h_1 = type;
    if (0 === (seen0 & 128))
      $this.q1h_1 = null;
    else
      $this.q1h_1 = invoiceNo;
    if (0 === (seen0 & 256))
      $this.r1h_1 = null;
    else
      $this.r1h_1 = invoiceBosNumber;
    if (0 === (seen0 & 512))
      $this.s1h_1 = '';
    else
      $this.s1h_1 = orderState;
    if (0 === (seen0 & 1024))
      $this.t1h_1 = null;
    else
      $this.t1h_1 = orderSourceCode;
    if (0 === (seen0 & 2048))
      $this.u1h_1 = null;
    else
      $this.u1h_1 = orderSource;
    if (0 === (seen0 & 4096))
      $this.v1h_1 = null;
    else
      $this.v1h_1 = kotPrinted;
    if (0 === (seen0 & 8192))
      $this.w1h_1 = null;
    else
      $this.w1h_1 = isSync;
    if (0 === (seen0 & 16384))
      $this.x1h_1 = '';
    else
      $this.x1h_1 = offlineInvoiceNo;
    if (0 === (seen0 & 32768))
      $this.y1h_1 = '';
    else
      $this.y1h_1 = orderNo;
    if (0 === (seen0 & 65536))
      $this.z1h_1 = new OrderStoreDetails();
    else
      $this.z1h_1 = orderStoreDetails;
    if (0 === (seen0 & 131072))
      $this.a1i_1 = ArrayList.d1();
    else
      $this.a1i_1 = customerDetails;
    if (0 === (seen0 & 262144))
      $this.b1i_1 = ArrayList.d1();
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
      $this.e1i_1 = '';
    else
      $this.e1i_1 = comment;
    if (0 === (seen0 & 4194304))
      $this.f1i_1 = false;
    else
      $this.f1i_1 = isVoid;
    if (0 === (seen0 & 8388608))
      $this.g1i_1 = false;
    else
      $this.g1i_1 = isSend;
    if (0 === (seen0 & 16777216))
      $this.h1i_1 = '';
    else
      $this.h1i_1 = orderStatus;
    if (0 === (seen0 & 33554432))
      $this.i1i_1 = '';
    else
      $this.i1i_1 = calenderDate;
    if (0 === (seen0 & 67108864))
      $this.j1i_1 = '';
    else
      $this.j1i_1 = dateTime;
    if (0 === (seen0 & 134217728))
      $this.k1i_1 = '';
    else
      $this.k1i_1 = businessDate;
    if (0 === (seen0 & 268435456))
      $this.l1i_1 = 0.0;
    else
      $this.l1i_1 = totalDiscount;
    if (0 === (seen0 & 536870912))
      $this.m1i_1 = 0.0;
    else
      $this.m1i_1 = totalItemTax;
    if (0 === (seen0 & 1073741824))
      $this.n1i_1 = 0.0;
    else
      $this.n1i_1 = totalNetSale;
    if (0 === (seen0 & -2147483648))
      $this.o1i_1 = 0.0;
    else
      $this.o1i_1 = totalGrossSale;
    if (0 === (seen1 & 1))
      $this.p1i_1 = 0.0;
    else
      $this.p1i_1 = transactionGrandAmount;
    if (0 === (seen1 & 2))
      $this.q1i_1 = 0.0;
    else
      $this.q1i_1 = roundOffAmount;
    if (0 === (seen1 & 4))
      $this.r1i_1 = 0.0;
    else
      $this.r1i_1 = refundAmount;
    if (0 === (seen1 & 8))
      $this.s1i_1 = 0.0;
    else
      $this.s1i_1 = discountPercentage;
    if (0 === (seen1 & 16))
      $this.t1i_1 = 0.0;
    else
      $this.t1i_1 = discountAmount;
    if (0 === (seen1 & 32))
      $this.u1i_1 = '';
    else
      $this.u1i_1 = state;
    if (0 === (seen1 & 64))
      $this.v1i_1 = 0.0;
    else
      $this.v1i_1 = tipAmount;
    if (0 === (seen1 & 128))
      $this.w1i_1 = 0.0;
    else
      $this.w1i_1 = tipPercentage;
    if (0 === (seen1 & 256))
      $this.x1i_1 = 1;
    else
      $this.x1i_1 = splitBillTypeCount;
    if (0 === (seen1 & 512))
      $this.y1i_1 = null;
    else
      $this.y1i_1 = splitTransactions;
    if (0 === (seen1 & 1024))
      $this.z1i_1 = null;
    else
      $this.z1i_1 = paidTransactions;
    if (0 === (seen1 & 2048))
      $this.a1j_1 = null;
    else
      $this.a1j_1 = orderType;
    if (0 === (seen1 & 4096))
      $this.b1j_1 = null;
    else
      $this.b1j_1 = orderTypeCode;
    if (0 === (seen1 & 8192))
      $this.c1j_1 = false;
    else
      $this.c1j_1 = isTaxExempt;
    if (0 === (seen1 & 16384))
      $this.d1j_1 = 1;
    else
      $this.d1j_1 = splitBillType;
    if (0 === (seen1 & 32768))
      $this.e1j_1 = 0;
    else
      $this.e1j_1 = receiptPrintCount;
    if (0 === (seen1 & 65536))
      $this.f1j_1 = 0.0;
    else
      $this.f1j_1 = subTotal;
    $this.g1j_1 = null;
    if (0 === (seen1 & 131072))
      $this.h1j_1 = 0.0;
    else
      $this.h1j_1 = totalCharges;
    if (0 === (seen1 & 262144))
      $this.i1j_1 = 0.0;
    else
      $this.i1j_1 = initialPaid;
    if (0 === (seen1 & 524288))
      $this.j1j_1 = ArrayList.d1();
    else
      $this.j1j_1 = appliedDiscount;
    if (0 === (seen1 & 1048576))
      $this.k1j_1 = ArrayList.d1();
    else
      $this.k1j_1 = charges;
    if (0 === (seen1 & 2097152))
      $this.l1j_1 = -1;
    else
      $this.l1j_1 = currentPayeeIndex;
    if (0 === (seen1 & 4194304))
      $this.m1j_1 = '';
    else
      $this.m1j_1 = updateAt;
    if (0 === (seen1 & 8388608))
      $this.n1j_1 = null;
    else
      $this.n1j_1 = platformDetails;
    if (0 === (seen1 & 16777216))
      $this.o1j_1 = null;
    else
      $this.o1j_1 = orderTimeMillis;
    if (0 === (seen1 & 33554432))
      $this.p1j_1 = null;
    else
      $this.p1j_1 = orderStateHistory;
    if (0 === (seen1 & 67108864))
      $this.q1j_1 = null;
    else
      $this.q1j_1 = selectedOrderType;
    if (0 === (seen1 & 134217728))
      $this.r1j_1 = null;
    else
      $this.r1j_1 = membershipPlan;
    if (0 === (seen1 & 268435456))
      $this.s1j_1 = null;
    else
      $this.s1j_1 = isAdvanceOrder;
    if (0 === (seen1 & 536870912))
      $this.t1j_1 = null;
    else
      $this.t1j_1 = orderScheduled;
    if (0 === (seen1 & 1073741824))
      $this.u1j_1 = null;
    else
      $this.u1j_1 = loyalty;
    if (0 === (seen1 & -2147483648))
      $this.v1j_1 = null;
    else
      $this.v1j_1 = taxes;
    if (0 === (seen2 & 1))
      $this.w1j_1 = null;
    else
      $this.w1j_1 = taxableAmount;
    return $this;
  }
}
class Companion_0 {}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderScheduled', this, 1);
    tmp0_serialDesc.aw('scheduled_date', true);
    this.s1p_1 = tmp0_serialDesc;
  }
  t1p(encoder, value) {
    var tmp0_desc = this.s1p_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.u1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.u1p_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.t1p(encoder, value instanceof OrderScheduled ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.s1p_1;
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
    return OrderScheduled.v1p(tmp3_bitMask0, tmp4_local0, null);
  }
  al() {
    return this.s1p_1;
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
    this.u1p_1 = scheduledDate;
  }
  toString() {
    return 'OrderScheduled(scheduledDate=' + this.u1p_1 + ')';
  }
  hashCode() {
    return this.u1p_1 == null ? 0 : getStringHashCode(this.u1p_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderScheduled))
      return false;
    var tmp0_other_with_cast = other instanceof OrderScheduled ? other : THROW_CCE();
    if (!(this.u1p_1 == tmp0_other_with_cast.u1p_1))
      return false;
    return true;
  }
  static v1p(seen0, scheduledDate, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().s1p_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.u1p_1 = null;
    else
      $this.u1p_1 = scheduledDate;
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
    tmp.w1p_1 = [null, null, null, null, null, null, lazy(tmp_0, OrderTypeData$Companion$$childSerializers$_anonymous__6oolc8), null];
  }
}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderTypeData', this, 8);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('order_code', true);
    tmp0_serialDesc.aw('order_type', true);
    tmp0_serialDesc.aw('status', true);
    tmp0_serialDesc.aw('store_id', true);
    tmp0_serialDesc.aw('updated_at', true);
    tmp0_serialDesc.aw('charges', true);
    tmp0_serialDesc.aw('selected', true);
    this.x1p_1 = tmp0_serialDesc;
  }
  y1p(encoder, value) {
    var tmp0_desc = this.x1p_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().w1p_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.g1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.g1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.h1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.h1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.i1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.i1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.j1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, BooleanSerializer_getInstance(), value.j1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.k1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.k1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.l1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.l1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.m1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, tmp2_cached[6].g2(), value.m1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.n1n_1 === false)) {
      tmp1_output.zp(tmp0_desc, 7, value.n1n_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.y1p(encoder, value instanceof OrderTypeData ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.x1p_1;
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
    var tmp11_local7 = false;
    var tmp12_input = decoder.so(tmp0_desc);
    var tmp13_cached = Companion_getInstance_1().w1p_1;
    if (tmp12_input.ip()) {
      tmp4_local0 = tmp12_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.gp(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.gp(tmp0_desc, 6, tmp13_cached[6].g2(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.uo(tmp0_desc, 7);
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
            tmp7_local3 = tmp12_input.gp(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.gp(tmp0_desc, 6, tmp13_cached[6].g2(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.uo(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp12_input.to(tmp0_desc);
    return OrderTypeData.z1p(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  }
  al() {
    return this.x1p_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_1().w1p_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[6].g2()), BooleanSerializer_getInstance()];
  }
}
class OrderTypeData {
  constructor(id, orderCode, orderType, status, storeId, updatedAt, charges, selected) {
    Companion_getInstance_1();
    id = id === VOID ? null : id;
    orderCode = orderCode === VOID ? null : orderCode;
    orderType = orderType === VOID ? null : orderType;
    status = status === VOID ? null : status;
    storeId = storeId === VOID ? null : storeId;
    updatedAt = updatedAt === VOID ? null : updatedAt;
    charges = charges === VOID ? null : charges;
    selected = selected === VOID ? false : selected;
    this.g1n_1 = id;
    this.h1n_1 = orderCode;
    this.i1n_1 = orderType;
    this.j1n_1 = status;
    this.k1n_1 = storeId;
    this.l1n_1 = updatedAt;
    this.m1n_1 = charges;
    this.n1n_1 = selected;
  }
  toString() {
    return 'OrderTypeData(id=' + this.g1n_1 + ', orderCode=' + this.h1n_1 + ', orderType=' + this.i1n_1 + ', status=' + this.j1n_1 + ', storeId=' + this.k1n_1 + ', updatedAt=' + this.l1n_1 + ', charges=' + toString_0(this.m1n_1) + ', selected=' + this.n1n_1 + ')';
  }
  hashCode() {
    var result = this.g1n_1 == null ? 0 : getStringHashCode(this.g1n_1);
    result = imul(result, 31) + (this.h1n_1 == null ? 0 : getStringHashCode(this.h1n_1)) | 0;
    result = imul(result, 31) + (this.i1n_1 == null ? 0 : getStringHashCode(this.i1n_1)) | 0;
    result = imul(result, 31) + (this.j1n_1 == null ? 0 : getBooleanHashCode(this.j1n_1)) | 0;
    result = imul(result, 31) + (this.k1n_1 == null ? 0 : getStringHashCode(this.k1n_1)) | 0;
    result = imul(result, 31) + (this.l1n_1 == null ? 0 : getStringHashCode(this.l1n_1)) | 0;
    result = imul(result, 31) + (this.m1n_1 == null ? 0 : hashCode(this.m1n_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.n1n_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderTypeData))
      return false;
    var tmp0_other_with_cast = other instanceof OrderTypeData ? other : THROW_CCE();
    if (!(this.g1n_1 == tmp0_other_with_cast.g1n_1))
      return false;
    if (!(this.h1n_1 == tmp0_other_with_cast.h1n_1))
      return false;
    if (!(this.i1n_1 == tmp0_other_with_cast.i1n_1))
      return false;
    if (!(this.j1n_1 == tmp0_other_with_cast.j1n_1))
      return false;
    if (!(this.k1n_1 == tmp0_other_with_cast.k1n_1))
      return false;
    if (!(this.l1n_1 == tmp0_other_with_cast.l1n_1))
      return false;
    if (!equals(this.m1n_1, tmp0_other_with_cast.m1n_1))
      return false;
    if (!(this.n1n_1 === tmp0_other_with_cast.n1n_1))
      return false;
    return true;
  }
  static z1p(seen0, id, orderCode, orderType, status, storeId, updatedAt, charges, selected, serializationConstructorMarker) {
    Companion_getInstance_1();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().x1p_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.g1n_1 = null;
    else
      $this.g1n_1 = id;
    if (0 === (seen0 & 2))
      $this.h1n_1 = null;
    else
      $this.h1n_1 = orderCode;
    if (0 === (seen0 & 4))
      $this.i1n_1 = null;
    else
      $this.i1n_1 = orderType;
    if (0 === (seen0 & 8))
      $this.j1n_1 = null;
    else
      $this.j1n_1 = status;
    if (0 === (seen0 & 16))
      $this.k1n_1 = null;
    else
      $this.k1n_1 = storeId;
    if (0 === (seen0 & 32))
      $this.l1n_1 = null;
    else
      $this.l1n_1 = updatedAt;
    if (0 === (seen0 & 64))
      $this.m1n_1 = null;
    else
      $this.m1n_1 = charges;
    if (0 === (seen0 & 128))
      $this.n1n_1 = false;
    else
      $this.n1n_1 = selected;
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
    tmp.a1q_1 = [null, null, tmp_1, null, null, tmp_3, null, tmp_5, null, tmp_7, null, lazy(tmp_8, OrderLevelChargesData$Companion$$childSerializers$_anonymous__6h1i7d_3), null, null, null, null];
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
    this.b1q_1 = tmp0_serialDesc;
  }
  c1q(encoder, value) {
    var tmp0_desc = this.b1q_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_2().a1q_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.e1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.e1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.f1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.f1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.g1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, tmp2_cached[2].g2(), value.g1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.h1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.h1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.i1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.i1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.j1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, tmp2_cached[5].g2(), value.j1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.k1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.k1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.l1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, tmp2_cached[7].g2(), value.l1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.m1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, DoubleSerializer_getInstance(), value.m1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.n1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, tmp2_cached[9].g2(), value.n1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.o1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, BooleanSerializer_getInstance(), value.o1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.p1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, tmp2_cached[11].g2(), value.p1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.q1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.q1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.r1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, StringSerializer_getInstance(), value.r1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.s1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 14, DoubleSerializer_getInstance(), value.s1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.t1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 15, StringSerializer_getInstance(), value.t1o_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.c1q(encoder, value instanceof OrderLevelChargesData ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.b1q_1;
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
    var tmp21_cached = Companion_getInstance_2().a1q_1;
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
    return OrderLevelChargesData.d1q(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  al() {
    return this.b1q_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_2().a1q_1;
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
    this.e1o_1 = applyAtLevel;
    this.f1o_1 = chargeId;
    this.g1o_1 = chargeTaxIds;
    this.h1o_1 = chargeType;
    this.i1o_1 = description;
    this.j1o_1 = excludedPlatforms;
    this.k1o_1 = id;
    this.l1o_1 = itemList;
    this.m1o_1 = minOrderAmount;
    this.n1o_1 = orderTypes;
    this.o1o_1 = status;
    this.p1o_1 = storeList;
    this.q1o_1 = title;
    this.r1o_1 = types;
    this.s1o_1 = value;
    this.t1o_1 = valueType;
  }
  toString() {
    return 'OrderLevelChargesData(applyAtLevel=' + this.e1o_1 + ', chargeId=' + this.f1o_1 + ', chargeTaxIds=' + toString_0(this.g1o_1) + ', chargeType=' + this.h1o_1 + ', description=' + this.i1o_1 + ', excludedPlatforms=' + toString_0(this.j1o_1) + ', id=' + this.k1o_1 + ', itemList=' + toString_0(this.l1o_1) + ', minOrderAmount=' + this.m1o_1 + ', orderTypes=' + toString_0(this.n1o_1) + ', status=' + this.o1o_1 + ', storeList=' + toString_0(this.p1o_1) + ', title=' + this.q1o_1 + ', types=' + this.r1o_1 + ', value=' + this.s1o_1 + ', valueType=' + this.t1o_1 + ')';
  }
  hashCode() {
    var result = this.e1o_1 == null ? 0 : getStringHashCode(this.e1o_1);
    result = imul(result, 31) + (this.f1o_1 == null ? 0 : getStringHashCode(this.f1o_1)) | 0;
    result = imul(result, 31) + (this.g1o_1 == null ? 0 : hashCode(this.g1o_1)) | 0;
    result = imul(result, 31) + (this.h1o_1 == null ? 0 : getStringHashCode(this.h1o_1)) | 0;
    result = imul(result, 31) + (this.i1o_1 == null ? 0 : getStringHashCode(this.i1o_1)) | 0;
    result = imul(result, 31) + (this.j1o_1 == null ? 0 : hashCode(this.j1o_1)) | 0;
    result = imul(result, 31) + (this.k1o_1 == null ? 0 : getStringHashCode(this.k1o_1)) | 0;
    result = imul(result, 31) + (this.l1o_1 == null ? 0 : hashCode(this.l1o_1)) | 0;
    result = imul(result, 31) + (this.m1o_1 == null ? 0 : getNumberHashCode(this.m1o_1)) | 0;
    result = imul(result, 31) + (this.n1o_1 == null ? 0 : hashCode(this.n1o_1)) | 0;
    result = imul(result, 31) + (this.o1o_1 == null ? 0 : getBooleanHashCode(this.o1o_1)) | 0;
    result = imul(result, 31) + (this.p1o_1 == null ? 0 : hashCode(this.p1o_1)) | 0;
    result = imul(result, 31) + (this.q1o_1 == null ? 0 : getStringHashCode(this.q1o_1)) | 0;
    result = imul(result, 31) + (this.r1o_1 == null ? 0 : getStringHashCode(this.r1o_1)) | 0;
    result = imul(result, 31) + (this.s1o_1 == null ? 0 : getNumberHashCode(this.s1o_1)) | 0;
    result = imul(result, 31) + (this.t1o_1 == null ? 0 : getStringHashCode(this.t1o_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderLevelChargesData))
      return false;
    var tmp0_other_with_cast = other instanceof OrderLevelChargesData ? other : THROW_CCE();
    if (!(this.e1o_1 == tmp0_other_with_cast.e1o_1))
      return false;
    if (!(this.f1o_1 == tmp0_other_with_cast.f1o_1))
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
    if (!equals(this.m1o_1, tmp0_other_with_cast.m1o_1))
      return false;
    if (!equals(this.n1o_1, tmp0_other_with_cast.n1o_1))
      return false;
    if (!(this.o1o_1 == tmp0_other_with_cast.o1o_1))
      return false;
    if (!equals(this.p1o_1, tmp0_other_with_cast.p1o_1))
      return false;
    if (!(this.q1o_1 == tmp0_other_with_cast.q1o_1))
      return false;
    if (!(this.r1o_1 == tmp0_other_with_cast.r1o_1))
      return false;
    if (!equals(this.s1o_1, tmp0_other_with_cast.s1o_1))
      return false;
    if (!(this.t1o_1 == tmp0_other_with_cast.t1o_1))
      return false;
    return true;
  }
  static d1q(seen0, applyAtLevel, chargeId, chargeTaxIds, chargeType, description, excludedPlatforms, id, itemList, minOrderAmount, orderTypes, status, storeList, title, types, value, valueType, serializationConstructorMarker) {
    Companion_getInstance_2();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().b1q_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.e1o_1 = null;
    else
      $this.e1o_1 = applyAtLevel;
    if (0 === (seen0 & 2))
      $this.f1o_1 = null;
    else
      $this.f1o_1 = chargeId;
    if (0 === (seen0 & 4))
      $this.g1o_1 = null;
    else
      $this.g1o_1 = chargeTaxIds;
    if (0 === (seen0 & 8))
      $this.h1o_1 = null;
    else
      $this.h1o_1 = chargeType;
    if (0 === (seen0 & 16))
      $this.i1o_1 = null;
    else
      $this.i1o_1 = description;
    if (0 === (seen0 & 32))
      $this.j1o_1 = null;
    else
      $this.j1o_1 = excludedPlatforms;
    if (0 === (seen0 & 64))
      $this.k1o_1 = null;
    else
      $this.k1o_1 = id;
    if (0 === (seen0 & 128))
      $this.l1o_1 = null;
    else
      $this.l1o_1 = itemList;
    if (0 === (seen0 & 256))
      $this.m1o_1 = null;
    else
      $this.m1o_1 = minOrderAmount;
    if (0 === (seen0 & 512))
      $this.n1o_1 = null;
    else
      $this.n1o_1 = orderTypes;
    if (0 === (seen0 & 1024))
      $this.o1o_1 = null;
    else
      $this.o1o_1 = status;
    if (0 === (seen0 & 2048))
      $this.p1o_1 = null;
    else
      $this.p1o_1 = storeList;
    if (0 === (seen0 & 4096))
      $this.q1o_1 = null;
    else
      $this.q1o_1 = title;
    if (0 === (seen0 & 8192))
      $this.r1o_1 = null;
    else
      $this.r1o_1 = types;
    if (0 === (seen0 & 16384))
      $this.s1o_1 = null;
    else
      $this.s1o_1 = value;
    if (0 === (seen0 & 32768))
      $this.t1o_1 = null;
    else
      $this.t1o_1 = valueType;
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
    this.e1q_1 = tmp0_serialDesc;
  }
  f1q(encoder, value) {
    var tmp0_desc = this.e1q_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.g1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.g1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.h1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.h1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.i1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.i1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.j1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.j1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.k1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.k1q_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.f1q(encoder, value instanceof LoyaltyData ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.e1q_1;
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
    return LoyaltyData.l1q(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  al() {
    return this.e1q_1;
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
    this.g1q_1 = loyaltyType;
    this.h1q_1 = programUUID;
    this.i1q_1 = storeId;
    this.j1q_1 = memberUUID;
    this.k1q_1 = rewardUUID;
  }
  toString() {
    return 'LoyaltyData(loyaltyType=' + this.g1q_1 + ', programUUID=' + this.h1q_1 + ', storeId=' + this.i1q_1 + ', memberUUID=' + this.j1q_1 + ', rewardUUID=' + this.k1q_1 + ')';
  }
  hashCode() {
    var result = this.g1q_1 == null ? 0 : getStringHashCode(this.g1q_1);
    result = imul(result, 31) + (this.h1q_1 == null ? 0 : getStringHashCode(this.h1q_1)) | 0;
    result = imul(result, 31) + (this.i1q_1 == null ? 0 : getStringHashCode(this.i1q_1)) | 0;
    result = imul(result, 31) + (this.j1q_1 == null ? 0 : getStringHashCode(this.j1q_1)) | 0;
    result = imul(result, 31) + (this.k1q_1 == null ? 0 : getStringHashCode(this.k1q_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof LoyaltyData))
      return false;
    var tmp0_other_with_cast = other instanceof LoyaltyData ? other : THROW_CCE();
    if (!(this.g1q_1 == tmp0_other_with_cast.g1q_1))
      return false;
    if (!(this.h1q_1 == tmp0_other_with_cast.h1q_1))
      return false;
    if (!(this.i1q_1 == tmp0_other_with_cast.i1q_1))
      return false;
    if (!(this.j1q_1 == tmp0_other_with_cast.j1q_1))
      return false;
    if (!(this.k1q_1 == tmp0_other_with_cast.k1q_1))
      return false;
    return true;
  }
  static l1q(seen0, loyaltyType, programUUID, storeId, memberUUID, rewardUUID, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().e1q_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.g1q_1 = null;
    else
      $this.g1q_1 = loyaltyType;
    if (0 === (seen0 & 2))
      $this.h1q_1 = null;
    else
      $this.h1q_1 = programUUID;
    if (0 === (seen0 & 4))
      $this.i1q_1 = null;
    else
      $this.i1q_1 = storeId;
    if (0 === (seen0 & 8))
      $this.j1q_1 = null;
    else
      $this.j1q_1 = memberUUID;
    if (0 === (seen0 & 16))
      $this.k1q_1 = null;
    else
      $this.k1q_1 = rewardUUID;
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
    tmp.m1q_1 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, OrderStoreDetails$Companion$$childSerializers$_anonymous__s8cdzv), null, null, null, null, null, null, null, null, null, null, null, null, null];
  }
}
class $serializer_4 {
  constructor() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderStoreDetails', this, 41);
    tmp0_serialDesc.aw('store_id', true);
    tmp0_serialDesc.aw('gst_no', true);
    tmp0_serialDesc.aw('fssai_no', true);
    tmp0_serialDesc.aw('store_tagline', true);
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
    tmp0_serialDesc.aw('currency_code', true);
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
    this.n1q_1 = tmp0_serialDesc;
  }
  o1q(encoder, value) {
    var tmp0_desc = this.n1q_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().m1q_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.p1q_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.p1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.q1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.q1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.r1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.r1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.s1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.s1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.t1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.t1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.u1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.u1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.v1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.v1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.w1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.w1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.x1q_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.x1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.y1q_1 === '')) {
      tmp1_output.hq(tmp0_desc, 9, value.y1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.z1q_1 === '')) {
      tmp1_output.hq(tmp0_desc, 10, value.z1q_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.a1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.a1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.b1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 12, value.b1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.c1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 13, value.c1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.d1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 14, value.d1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.e1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 15, value.e1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !(value.f1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 16, value.f1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !(value.g1r_1 === '')) {
      tmp1_output.hq(tmp0_desc, 17, value.g1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !(value.h1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 18, StringSerializer_getInstance(), value.h1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !(value.i1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 19, StringSerializer_getInstance(), value.i1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !(value.j1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 20, StringSerializer_getInstance(), value.j1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.k1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 21, StringSerializer_getInstance(), value.k1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 22) ? true : !(value.l1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 22, StringSerializer_getInstance(), value.l1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 23) ? true : !(value.m1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 23, StringSerializer_getInstance(), value.m1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 24) ? true : !(value.n1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 24, StringSerializer_getInstance(), value.n1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 25) ? true : !(value.o1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 25, StringSerializer_getInstance(), value.o1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 26) ? true : !(value.p1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 26, StringSerializer_getInstance(), value.p1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 27) ? true : !(value.q1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 27, tmp2_cached[27].g2(), value.q1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 28) ? true : !(value.r1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 28, StringSerializer_getInstance(), value.r1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 29) ? true : !(value.s1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 29, StringSerializer_getInstance(), value.s1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 30) ? true : !(value.t1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 30, StringSerializer_getInstance(), value.t1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 31) ? true : !(value.u1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 31, StringSerializer_getInstance(), value.u1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 32) ? true : !(value.v1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 32, StringSerializer_getInstance(), value.v1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 33) ? true : !(value.w1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 33, StringSerializer_getInstance(), value.w1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 34) ? true : !(value.x1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 34, StringSerializer_getInstance(), value.x1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 35) ? true : !(value.y1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 35, StringSerializer_getInstance(), value.y1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 36) ? true : !(value.z1r_1 == null)) {
      tmp1_output.lq(tmp0_desc, 36, IntSerializer_getInstance(), value.z1r_1);
    }
    if (tmp1_output.pq(tmp0_desc, 37) ? true : !(value.a1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 37, StringSerializer_getInstance(), value.a1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 38) ? true : !(value.b1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 38, StringSerializer_getInstance(), value.b1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 39) ? true : !(value.c1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 39, StringSerializer_getInstance(), value.c1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 40) ? true : !(value.d1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 40, StringSerializer_getInstance(), value.d1s_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.o1q(encoder, value instanceof OrderStoreDetails ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.n1q_1;
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
    var tmp46_input = decoder.so(tmp0_desc);
    var tmp47_cached = Companion_getInstance_4().m1q_1;
    if (tmp46_input.ip()) {
      tmp5_local0 = tmp46_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp46_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp46_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp46_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp46_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp46_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp46_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp46_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp46_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp46_input.cp(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp46_input.cp(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp46_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp46_input.cp(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp46_input.cp(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp46_input.cp(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp46_input.cp(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp46_input.cp(tmp0_desc, 16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp46_input.cp(tmp0_desc, 17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp46_input.gp(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp46_input.gp(tmp0_desc, 19, StringSerializer_getInstance(), tmp24_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp46_input.gp(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp46_input.gp(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp46_input.gp(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp46_input.gp(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp46_input.gp(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp46_input.gp(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp46_input.gp(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp46_input.gp(tmp0_desc, 27, tmp47_cached[27].g2(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp46_input.gp(tmp0_desc, 28, StringSerializer_getInstance(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp46_input.gp(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp46_input.gp(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp46_input.gp(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp46_input.gp(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp46_input.gp(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp46_input.gp(tmp0_desc, 34, StringSerializer_getInstance(), tmp39_local34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp46_input.gp(tmp0_desc, 35, StringSerializer_getInstance(), tmp40_local35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp46_input.gp(tmp0_desc, 36, IntSerializer_getInstance(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp46_input.gp(tmp0_desc, 37, StringSerializer_getInstance(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp46_input.gp(tmp0_desc, 38, StringSerializer_getInstance(), tmp43_local38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp46_input.gp(tmp0_desc, 39, StringSerializer_getInstance(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp46_input.gp(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp46_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp46_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp46_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp46_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp7_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp46_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp46_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp46_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp46_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp46_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp46_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp46_input.cp(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp46_input.cp(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp46_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp46_input.cp(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp46_input.cp(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp46_input.cp(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp46_input.cp(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp46_input.cp(tmp0_desc, 16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp46_input.cp(tmp0_desc, 17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp46_input.gp(tmp0_desc, 18, StringSerializer_getInstance(), tmp23_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp46_input.gp(tmp0_desc, 19, StringSerializer_getInstance(), tmp24_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp46_input.gp(tmp0_desc, 20, StringSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp46_input.gp(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp46_input.gp(tmp0_desc, 22, StringSerializer_getInstance(), tmp27_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp46_input.gp(tmp0_desc, 23, StringSerializer_getInstance(), tmp28_local23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp46_input.gp(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp46_input.gp(tmp0_desc, 25, StringSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp46_input.gp(tmp0_desc, 26, StringSerializer_getInstance(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp46_input.gp(tmp0_desc, 27, tmp47_cached[27].g2(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp46_input.gp(tmp0_desc, 28, StringSerializer_getInstance(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp46_input.gp(tmp0_desc, 29, StringSerializer_getInstance(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp46_input.gp(tmp0_desc, 30, StringSerializer_getInstance(), tmp35_local30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp46_input.gp(tmp0_desc, 31, StringSerializer_getInstance(), tmp36_local31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp46_input.gp(tmp0_desc, 32, StringSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp46_input.gp(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp46_input.gp(tmp0_desc, 34, StringSerializer_getInstance(), tmp39_local34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp46_input.gp(tmp0_desc, 35, StringSerializer_getInstance(), tmp40_local35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp46_input.gp(tmp0_desc, 36, IntSerializer_getInstance(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp46_input.gp(tmp0_desc, 37, StringSerializer_getInstance(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp46_input.gp(tmp0_desc, 38, StringSerializer_getInstance(), tmp43_local38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp46_input.gp(tmp0_desc, 39, StringSerializer_getInstance(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp46_input.gp(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp46_input.to(tmp0_desc);
    return OrderStoreDetails.e1s(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, null);
  }
  al() {
    return this.n1q_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_4().m1q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[27].g2()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class OrderStoreDetails {
  constructor(storeId, gstNumber, fssaiNo, storeTagLine, orderCode, integration, referenceStr, orderBeginDateTime, orderEndDateTime, storeSessionId, storeName, tentId, storeAd1, storeAd2, storeCity, storeZip, storeCountry, storeContactNo, currencyCode, empSessionId, empNo, empName, empMobileNo, tableNo, tableId, floorId, floorNo, managerOverride, deviceId, terminalId, orderReferenceNo, previousOrderNo, previousInvoiceNo, channel, associateEmpNo, associateEmpName, noOfGuest, previousFloorId, previousTableId, aggOrderRefNo, storeLogo) {
    Companion_getInstance_4();
    storeId = storeId === VOID ? '' : storeId;
    gstNumber = gstNumber === VOID ? null : gstNumber;
    fssaiNo = fssaiNo === VOID ? null : fssaiNo;
    storeTagLine = storeTagLine === VOID ? null : storeTagLine;
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
    empSessionId = empSessionId === VOID ? null : empSessionId;
    empNo = empNo === VOID ? null : empNo;
    empName = empName === VOID ? null : empName;
    empMobileNo = empMobileNo === VOID ? null : empMobileNo;
    tableNo = tableNo === VOID ? null : tableNo;
    tableId = tableId === VOID ? null : tableId;
    floorId = floorId === VOID ? null : floorId;
    floorNo = floorNo === VOID ? null : floorNo;
    managerOverride = managerOverride === VOID ? null : managerOverride;
    deviceId = deviceId === VOID ? null : deviceId;
    terminalId = terminalId === VOID ? null : terminalId;
    orderReferenceNo = orderReferenceNo === VOID ? null : orderReferenceNo;
    previousOrderNo = previousOrderNo === VOID ? null : previousOrderNo;
    previousInvoiceNo = previousInvoiceNo === VOID ? null : previousInvoiceNo;
    channel = channel === VOID ? null : channel;
    associateEmpNo = associateEmpNo === VOID ? null : associateEmpNo;
    associateEmpName = associateEmpName === VOID ? null : associateEmpName;
    noOfGuest = noOfGuest === VOID ? null : noOfGuest;
    previousFloorId = previousFloorId === VOID ? null : previousFloorId;
    previousTableId = previousTableId === VOID ? null : previousTableId;
    aggOrderRefNo = aggOrderRefNo === VOID ? null : aggOrderRefNo;
    storeLogo = storeLogo === VOID ? null : storeLogo;
    this.p1q_1 = storeId;
    this.q1q_1 = gstNumber;
    this.r1q_1 = fssaiNo;
    this.s1q_1 = storeTagLine;
    this.t1q_1 = orderCode;
    this.u1q_1 = integration;
    this.v1q_1 = referenceStr;
    this.w1q_1 = orderBeginDateTime;
    this.x1q_1 = orderEndDateTime;
    this.y1q_1 = storeSessionId;
    this.z1q_1 = storeName;
    this.a1r_1 = tentId;
    this.b1r_1 = storeAd1;
    this.c1r_1 = storeAd2;
    this.d1r_1 = storeCity;
    this.e1r_1 = storeZip;
    this.f1r_1 = storeCountry;
    this.g1r_1 = storeContactNo;
    this.h1r_1 = currencyCode;
    this.i1r_1 = empSessionId;
    this.j1r_1 = empNo;
    this.k1r_1 = empName;
    this.l1r_1 = empMobileNo;
    this.m1r_1 = tableNo;
    this.n1r_1 = tableId;
    this.o1r_1 = floorId;
    this.p1r_1 = floorNo;
    this.q1r_1 = managerOverride;
    this.r1r_1 = deviceId;
    this.s1r_1 = terminalId;
    this.t1r_1 = orderReferenceNo;
    this.u1r_1 = previousOrderNo;
    this.v1r_1 = previousInvoiceNo;
    this.w1r_1 = channel;
    this.x1r_1 = associateEmpNo;
    this.y1r_1 = associateEmpName;
    this.z1r_1 = noOfGuest;
    this.a1s_1 = previousFloorId;
    this.b1s_1 = previousTableId;
    this.c1s_1 = aggOrderRefNo;
    this.d1s_1 = storeLogo;
  }
  toString() {
    return 'OrderStoreDetails(storeId=' + this.p1q_1 + ', gstNumber=' + this.q1q_1 + ', fssaiNo=' + this.r1q_1 + ', storeTagLine=' + this.s1q_1 + ', orderCode=' + this.t1q_1 + ', integration=' + this.u1q_1 + ', referenceStr=' + this.v1q_1 + ', orderBeginDateTime=' + this.w1q_1 + ', orderEndDateTime=' + this.x1q_1 + ', storeSessionId=' + this.y1q_1 + ', storeName=' + this.z1q_1 + ', tentId=' + this.a1r_1 + ', storeAd1=' + this.b1r_1 + ', storeAd2=' + this.c1r_1 + ', storeCity=' + this.d1r_1 + ', storeZip=' + this.e1r_1 + ', storeCountry=' + this.f1r_1 + ', storeContactNo=' + this.g1r_1 + ', currencyCode=' + this.h1r_1 + ', empSessionId=' + this.i1r_1 + ', empNo=' + this.j1r_1 + ', empName=' + this.k1r_1 + ', empMobileNo=' + this.l1r_1 + ', tableNo=' + this.m1r_1 + ', tableId=' + this.n1r_1 + ', floorId=' + this.o1r_1 + ', floorNo=' + this.p1r_1 + ', managerOverride=' + toString_0(this.q1r_1) + ', deviceId=' + this.r1r_1 + ', terminalId=' + this.s1r_1 + ', orderReferenceNo=' + this.t1r_1 + ', previousOrderNo=' + this.u1r_1 + ', previousInvoiceNo=' + this.v1r_1 + ', channel=' + this.w1r_1 + ', associateEmpNo=' + this.x1r_1 + ', associateEmpName=' + this.y1r_1 + ', noOfGuest=' + this.z1r_1 + ', previousFloorId=' + this.a1s_1 + ', previousTableId=' + this.b1s_1 + ', aggOrderRefNo=' + this.c1s_1 + ', storeLogo=' + this.d1s_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.p1q_1);
    result = imul(result, 31) + (this.q1q_1 == null ? 0 : getStringHashCode(this.q1q_1)) | 0;
    result = imul(result, 31) + (this.r1q_1 == null ? 0 : getStringHashCode(this.r1q_1)) | 0;
    result = imul(result, 31) + (this.s1q_1 == null ? 0 : getStringHashCode(this.s1q_1)) | 0;
    result = imul(result, 31) + (this.t1q_1 == null ? 0 : getStringHashCode(this.t1q_1)) | 0;
    result = imul(result, 31) + (this.u1q_1 == null ? 0 : getStringHashCode(this.u1q_1)) | 0;
    result = imul(result, 31) + (this.v1q_1 == null ? 0 : getStringHashCode(this.v1q_1)) | 0;
    result = imul(result, 31) + (this.w1q_1 == null ? 0 : getStringHashCode(this.w1q_1)) | 0;
    result = imul(result, 31) + (this.x1q_1 == null ? 0 : getStringHashCode(this.x1q_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.y1q_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z1q_1) | 0;
    result = imul(result, 31) + (this.a1r_1 == null ? 0 : getStringHashCode(this.a1r_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.b1r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c1r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d1r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.e1r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f1r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g1r_1) | 0;
    result = imul(result, 31) + (this.h1r_1 == null ? 0 : getStringHashCode(this.h1r_1)) | 0;
    result = imul(result, 31) + (this.i1r_1 == null ? 0 : getStringHashCode(this.i1r_1)) | 0;
    result = imul(result, 31) + (this.j1r_1 == null ? 0 : getStringHashCode(this.j1r_1)) | 0;
    result = imul(result, 31) + (this.k1r_1 == null ? 0 : getStringHashCode(this.k1r_1)) | 0;
    result = imul(result, 31) + (this.l1r_1 == null ? 0 : getStringHashCode(this.l1r_1)) | 0;
    result = imul(result, 31) + (this.m1r_1 == null ? 0 : getStringHashCode(this.m1r_1)) | 0;
    result = imul(result, 31) + (this.n1r_1 == null ? 0 : getStringHashCode(this.n1r_1)) | 0;
    result = imul(result, 31) + (this.o1r_1 == null ? 0 : getStringHashCode(this.o1r_1)) | 0;
    result = imul(result, 31) + (this.p1r_1 == null ? 0 : getStringHashCode(this.p1r_1)) | 0;
    result = imul(result, 31) + (this.q1r_1 == null ? 0 : hashCode(this.q1r_1)) | 0;
    result = imul(result, 31) + (this.r1r_1 == null ? 0 : getStringHashCode(this.r1r_1)) | 0;
    result = imul(result, 31) + (this.s1r_1 == null ? 0 : getStringHashCode(this.s1r_1)) | 0;
    result = imul(result, 31) + (this.t1r_1 == null ? 0 : getStringHashCode(this.t1r_1)) | 0;
    result = imul(result, 31) + (this.u1r_1 == null ? 0 : getStringHashCode(this.u1r_1)) | 0;
    result = imul(result, 31) + (this.v1r_1 == null ? 0 : getStringHashCode(this.v1r_1)) | 0;
    result = imul(result, 31) + (this.w1r_1 == null ? 0 : getStringHashCode(this.w1r_1)) | 0;
    result = imul(result, 31) + (this.x1r_1 == null ? 0 : getStringHashCode(this.x1r_1)) | 0;
    result = imul(result, 31) + (this.y1r_1 == null ? 0 : getStringHashCode(this.y1r_1)) | 0;
    result = imul(result, 31) + (this.z1r_1 == null ? 0 : this.z1r_1) | 0;
    result = imul(result, 31) + (this.a1s_1 == null ? 0 : getStringHashCode(this.a1s_1)) | 0;
    result = imul(result, 31) + (this.b1s_1 == null ? 0 : getStringHashCode(this.b1s_1)) | 0;
    result = imul(result, 31) + (this.c1s_1 == null ? 0 : getStringHashCode(this.c1s_1)) | 0;
    result = imul(result, 31) + (this.d1s_1 == null ? 0 : getStringHashCode(this.d1s_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderStoreDetails))
      return false;
    var tmp0_other_with_cast = other instanceof OrderStoreDetails ? other : THROW_CCE();
    if (!(this.p1q_1 === tmp0_other_with_cast.p1q_1))
      return false;
    if (!(this.q1q_1 == tmp0_other_with_cast.q1q_1))
      return false;
    if (!(this.r1q_1 == tmp0_other_with_cast.r1q_1))
      return false;
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
    if (!(this.x1q_1 == tmp0_other_with_cast.x1q_1))
      return false;
    if (!(this.y1q_1 === tmp0_other_with_cast.y1q_1))
      return false;
    if (!(this.z1q_1 === tmp0_other_with_cast.z1q_1))
      return false;
    if (!(this.a1r_1 == tmp0_other_with_cast.a1r_1))
      return false;
    if (!(this.b1r_1 === tmp0_other_with_cast.b1r_1))
      return false;
    if (!(this.c1r_1 === tmp0_other_with_cast.c1r_1))
      return false;
    if (!(this.d1r_1 === tmp0_other_with_cast.d1r_1))
      return false;
    if (!(this.e1r_1 === tmp0_other_with_cast.e1r_1))
      return false;
    if (!(this.f1r_1 === tmp0_other_with_cast.f1r_1))
      return false;
    if (!(this.g1r_1 === tmp0_other_with_cast.g1r_1))
      return false;
    if (!(this.h1r_1 == tmp0_other_with_cast.h1r_1))
      return false;
    if (!(this.i1r_1 == tmp0_other_with_cast.i1r_1))
      return false;
    if (!(this.j1r_1 == tmp0_other_with_cast.j1r_1))
      return false;
    if (!(this.k1r_1 == tmp0_other_with_cast.k1r_1))
      return false;
    if (!(this.l1r_1 == tmp0_other_with_cast.l1r_1))
      return false;
    if (!(this.m1r_1 == tmp0_other_with_cast.m1r_1))
      return false;
    if (!(this.n1r_1 == tmp0_other_with_cast.n1r_1))
      return false;
    if (!(this.o1r_1 == tmp0_other_with_cast.o1r_1))
      return false;
    if (!(this.p1r_1 == tmp0_other_with_cast.p1r_1))
      return false;
    if (!equals(this.q1r_1, tmp0_other_with_cast.q1r_1))
      return false;
    if (!(this.r1r_1 == tmp0_other_with_cast.r1r_1))
      return false;
    if (!(this.s1r_1 == tmp0_other_with_cast.s1r_1))
      return false;
    if (!(this.t1r_1 == tmp0_other_with_cast.t1r_1))
      return false;
    if (!(this.u1r_1 == tmp0_other_with_cast.u1r_1))
      return false;
    if (!(this.v1r_1 == tmp0_other_with_cast.v1r_1))
      return false;
    if (!(this.w1r_1 == tmp0_other_with_cast.w1r_1))
      return false;
    if (!(this.x1r_1 == tmp0_other_with_cast.x1r_1))
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
    if (!(this.d1s_1 == tmp0_other_with_cast.d1s_1))
      return false;
    return true;
  }
  static e1s(seen0, seen1, storeId, gstNumber, fssaiNo, storeTagLine, orderCode, integration, referenceStr, orderBeginDateTime, orderEndDateTime, storeSessionId, storeName, tentId, storeAd1, storeAd2, storeCity, storeZip, storeCountry, storeContactNo, currencyCode, empSessionId, empNo, empName, empMobileNo, tableNo, tableId, floorId, floorNo, managerOverride, deviceId, terminalId, orderReferenceNo, previousOrderNo, previousInvoiceNo, channel, associateEmpNo, associateEmpName, noOfGuest, previousFloorId, previousTableId, aggOrderRefNo, storeLogo, serializationConstructorMarker) {
    Companion_getInstance_4();
    if (!!(!(0 === (0 & seen0)) | !(0 === (0 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([0, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_4().n1q_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.p1q_1 = '';
    else
      $this.p1q_1 = storeId;
    if (0 === (seen0 & 2))
      $this.q1q_1 = null;
    else
      $this.q1q_1 = gstNumber;
    if (0 === (seen0 & 4))
      $this.r1q_1 = null;
    else
      $this.r1q_1 = fssaiNo;
    if (0 === (seen0 & 8))
      $this.s1q_1 = null;
    else
      $this.s1q_1 = storeTagLine;
    if (0 === (seen0 & 16))
      $this.t1q_1 = null;
    else
      $this.t1q_1 = orderCode;
    if (0 === (seen0 & 32))
      $this.u1q_1 = null;
    else
      $this.u1q_1 = integration;
    if (0 === (seen0 & 64))
      $this.v1q_1 = null;
    else
      $this.v1q_1 = referenceStr;
    if (0 === (seen0 & 128))
      $this.w1q_1 = null;
    else
      $this.w1q_1 = orderBeginDateTime;
    if (0 === (seen0 & 256))
      $this.x1q_1 = null;
    else
      $this.x1q_1 = orderEndDateTime;
    if (0 === (seen0 & 512))
      $this.y1q_1 = '';
    else
      $this.y1q_1 = storeSessionId;
    if (0 === (seen0 & 1024))
      $this.z1q_1 = '';
    else
      $this.z1q_1 = storeName;
    if (0 === (seen0 & 2048))
      $this.a1r_1 = null;
    else
      $this.a1r_1 = tentId;
    if (0 === (seen0 & 4096))
      $this.b1r_1 = '';
    else
      $this.b1r_1 = storeAd1;
    if (0 === (seen0 & 8192))
      $this.c1r_1 = '';
    else
      $this.c1r_1 = storeAd2;
    if (0 === (seen0 & 16384))
      $this.d1r_1 = '';
    else
      $this.d1r_1 = storeCity;
    if (0 === (seen0 & 32768))
      $this.e1r_1 = '';
    else
      $this.e1r_1 = storeZip;
    if (0 === (seen0 & 65536))
      $this.f1r_1 = '';
    else
      $this.f1r_1 = storeCountry;
    if (0 === (seen0 & 131072))
      $this.g1r_1 = '';
    else
      $this.g1r_1 = storeContactNo;
    if (0 === (seen0 & 262144))
      $this.h1r_1 = null;
    else
      $this.h1r_1 = currencyCode;
    if (0 === (seen0 & 524288))
      $this.i1r_1 = null;
    else
      $this.i1r_1 = empSessionId;
    if (0 === (seen0 & 1048576))
      $this.j1r_1 = null;
    else
      $this.j1r_1 = empNo;
    if (0 === (seen0 & 2097152))
      $this.k1r_1 = null;
    else
      $this.k1r_1 = empName;
    if (0 === (seen0 & 4194304))
      $this.l1r_1 = null;
    else
      $this.l1r_1 = empMobileNo;
    if (0 === (seen0 & 8388608))
      $this.m1r_1 = null;
    else
      $this.m1r_1 = tableNo;
    if (0 === (seen0 & 16777216))
      $this.n1r_1 = null;
    else
      $this.n1r_1 = tableId;
    if (0 === (seen0 & 33554432))
      $this.o1r_1 = null;
    else
      $this.o1r_1 = floorId;
    if (0 === (seen0 & 67108864))
      $this.p1r_1 = null;
    else
      $this.p1r_1 = floorNo;
    if (0 === (seen0 & 134217728))
      $this.q1r_1 = null;
    else
      $this.q1r_1 = managerOverride;
    if (0 === (seen0 & 268435456))
      $this.r1r_1 = null;
    else
      $this.r1r_1 = deviceId;
    if (0 === (seen0 & 536870912))
      $this.s1r_1 = null;
    else
      $this.s1r_1 = terminalId;
    if (0 === (seen0 & 1073741824))
      $this.t1r_1 = null;
    else
      $this.t1r_1 = orderReferenceNo;
    if (0 === (seen0 & -2147483648))
      $this.u1r_1 = null;
    else
      $this.u1r_1 = previousOrderNo;
    if (0 === (seen1 & 1))
      $this.v1r_1 = null;
    else
      $this.v1r_1 = previousInvoiceNo;
    if (0 === (seen1 & 2))
      $this.w1r_1 = null;
    else
      $this.w1r_1 = channel;
    if (0 === (seen1 & 4))
      $this.x1r_1 = null;
    else
      $this.x1r_1 = associateEmpNo;
    if (0 === (seen1 & 8))
      $this.y1r_1 = null;
    else
      $this.y1r_1 = associateEmpName;
    if (0 === (seen1 & 16))
      $this.z1r_1 = null;
    else
      $this.z1r_1 = noOfGuest;
    if (0 === (seen1 & 32))
      $this.a1s_1 = null;
    else
      $this.a1s_1 = previousFloorId;
    if (0 === (seen1 & 64))
      $this.b1s_1 = null;
    else
      $this.b1s_1 = previousTableId;
    if (0 === (seen1 & 128))
      $this.c1s_1 = null;
    else
      $this.c1s_1 = aggOrderRefNo;
    if (0 === (seen1 & 256))
      $this.d1s_1 = null;
    else
      $this.d1s_1 = storeLogo;
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
    this.f1s_1 = tmp0_serialDesc;
  }
  g1s(encoder, value) {
    var tmp0_desc = this.f1s_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.h1s_1 === 'Guest')) {
      tmp1_output.hq(tmp0_desc, 0, value.h1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.i1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.i1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.j1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.j1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.k1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.k1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.l1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.l1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.m1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.m1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.n1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.n1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.o1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.o1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.p1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.p1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.q1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.q1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.r1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.r1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.s1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.s1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.t1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.t1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.u1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, IntSerializer_getInstance(), value.u1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.v1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 14, StringSerializer_getInstance(), value.v1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.w1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 15, StringSerializer_getInstance(), value.w1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !(value.x1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 16, StringSerializer_getInstance(), value.x1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !(value.y1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 17, StringSerializer_getInstance(), value.y1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !(value.z1s_1 == null)) {
      tmp1_output.lq(tmp0_desc, 18, StringSerializer_getInstance(), value.z1s_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !(value.a1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 19, StringSerializer_getInstance(), value.a1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !(value.b1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 20, StringSerializer_getInstance(), value.b1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.c1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 21, $serializer_getInstance_6(), value.c1t_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.g1s(encoder, value instanceof CustomerDetails ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.f1s_1;
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
    return CustomerDetails.d1t(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, tmp25_local21, null);
  }
  al() {
    return this.f1s_1;
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
    this.h1s_1 = name;
    this.i1s_1 = custLastName;
    this.j1s_1 = mobile;
    this.k1s_1 = emailId;
    this.l1s_1 = custAddress;
    this.m1s_1 = custTaxID;
    this.n1s_1 = custZipCode;
    this.o1s_1 = landMark;
    this.p1s_1 = cusCity;
    this.q1s_1 = cusCountry;
    this.r1s_1 = custState;
    this.s1s_1 = custDOB;
    this.t1s_1 = custDOA;
    this.u1s_1 = custLoyaltyPoints;
    this.v1s_1 = extras;
    this.w1s_1 = pointsAwarded;
    this.x1s_1 = loyaltyType;
    this.y1s_1 = custLoyaltyId;
    this.z1s_1 = programUUID;
    this.a1t_1 = tierUUID;
    this.b1t_1 = rewardUuid;
    this.c1t_1 = customerMembership;
  }
  toString() {
    return 'CustomerDetails(name=' + this.h1s_1 + ', custLastName=' + this.i1s_1 + ', mobile=' + this.j1s_1 + ', emailId=' + this.k1s_1 + ', custAddress=' + this.l1s_1 + ', custTaxID=' + this.m1s_1 + ', custZipCode=' + this.n1s_1 + ', landMark=' + this.o1s_1 + ', cusCity=' + this.p1s_1 + ', cusCountry=' + this.q1s_1 + ', custState=' + this.r1s_1 + ', custDOB=' + this.s1s_1 + ', custDOA=' + this.t1s_1 + ', custLoyaltyPoints=' + this.u1s_1 + ', extras=' + this.v1s_1 + ', pointsAwarded=' + this.w1s_1 + ', loyaltyType=' + this.x1s_1 + ', custLoyaltyId=' + this.y1s_1 + ', programUUID=' + this.z1s_1 + ', tierUUID=' + this.a1t_1 + ', rewardUuid=' + this.b1t_1 + ', customerMembership=' + toString_0(this.c1t_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.h1s_1);
    result = imul(result, 31) + (this.i1s_1 == null ? 0 : getStringHashCode(this.i1s_1)) | 0;
    result = imul(result, 31) + (this.j1s_1 == null ? 0 : getStringHashCode(this.j1s_1)) | 0;
    result = imul(result, 31) + (this.k1s_1 == null ? 0 : getStringHashCode(this.k1s_1)) | 0;
    result = imul(result, 31) + (this.l1s_1 == null ? 0 : getStringHashCode(this.l1s_1)) | 0;
    result = imul(result, 31) + (this.m1s_1 == null ? 0 : getStringHashCode(this.m1s_1)) | 0;
    result = imul(result, 31) + (this.n1s_1 == null ? 0 : getStringHashCode(this.n1s_1)) | 0;
    result = imul(result, 31) + (this.o1s_1 == null ? 0 : getStringHashCode(this.o1s_1)) | 0;
    result = imul(result, 31) + (this.p1s_1 == null ? 0 : getStringHashCode(this.p1s_1)) | 0;
    result = imul(result, 31) + (this.q1s_1 == null ? 0 : getStringHashCode(this.q1s_1)) | 0;
    result = imul(result, 31) + (this.r1s_1 == null ? 0 : getStringHashCode(this.r1s_1)) | 0;
    result = imul(result, 31) + (this.s1s_1 == null ? 0 : getStringHashCode(this.s1s_1)) | 0;
    result = imul(result, 31) + (this.t1s_1 == null ? 0 : getStringHashCode(this.t1s_1)) | 0;
    result = imul(result, 31) + (this.u1s_1 == null ? 0 : this.u1s_1) | 0;
    result = imul(result, 31) + (this.v1s_1 == null ? 0 : getStringHashCode(this.v1s_1)) | 0;
    result = imul(result, 31) + (this.w1s_1 == null ? 0 : getStringHashCode(this.w1s_1)) | 0;
    result = imul(result, 31) + (this.x1s_1 == null ? 0 : getStringHashCode(this.x1s_1)) | 0;
    result = imul(result, 31) + (this.y1s_1 == null ? 0 : getStringHashCode(this.y1s_1)) | 0;
    result = imul(result, 31) + (this.z1s_1 == null ? 0 : getStringHashCode(this.z1s_1)) | 0;
    result = imul(result, 31) + (this.a1t_1 == null ? 0 : getStringHashCode(this.a1t_1)) | 0;
    result = imul(result, 31) + (this.b1t_1 == null ? 0 : getStringHashCode(this.b1t_1)) | 0;
    result = imul(result, 31) + (this.c1t_1 == null ? 0 : this.c1t_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CustomerDetails))
      return false;
    var tmp0_other_with_cast = other instanceof CustomerDetails ? other : THROW_CCE();
    if (!(this.h1s_1 === tmp0_other_with_cast.h1s_1))
      return false;
    if (!(this.i1s_1 == tmp0_other_with_cast.i1s_1))
      return false;
    if (!(this.j1s_1 == tmp0_other_with_cast.j1s_1))
      return false;
    if (!(this.k1s_1 == tmp0_other_with_cast.k1s_1))
      return false;
    if (!(this.l1s_1 == tmp0_other_with_cast.l1s_1))
      return false;
    if (!(this.m1s_1 == tmp0_other_with_cast.m1s_1))
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
    if (!(this.s1s_1 == tmp0_other_with_cast.s1s_1))
      return false;
    if (!(this.t1s_1 == tmp0_other_with_cast.t1s_1))
      return false;
    if (!(this.u1s_1 == tmp0_other_with_cast.u1s_1))
      return false;
    if (!(this.v1s_1 == tmp0_other_with_cast.v1s_1))
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
    if (!equals(this.c1t_1, tmp0_other_with_cast.c1t_1))
      return false;
    return true;
  }
  static d1t(seen0, name, custLastName, mobile, emailId, custAddress, custTaxID, custZipCode, landMark, cusCity, cusCountry, custState, custDOB, custDOA, custLoyaltyPoints, extras, pointsAwarded, loyaltyType, custLoyaltyId, programUUID, tierUUID, rewardUuid, customerMembership, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().f1s_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.h1s_1 = 'Guest';
    else
      $this.h1s_1 = name;
    if (0 === (seen0 & 2))
      $this.i1s_1 = null;
    else
      $this.i1s_1 = custLastName;
    if (0 === (seen0 & 4))
      $this.j1s_1 = null;
    else
      $this.j1s_1 = mobile;
    if (0 === (seen0 & 8))
      $this.k1s_1 = null;
    else
      $this.k1s_1 = emailId;
    if (0 === (seen0 & 16))
      $this.l1s_1 = null;
    else
      $this.l1s_1 = custAddress;
    if (0 === (seen0 & 32))
      $this.m1s_1 = null;
    else
      $this.m1s_1 = custTaxID;
    if (0 === (seen0 & 64))
      $this.n1s_1 = null;
    else
      $this.n1s_1 = custZipCode;
    if (0 === (seen0 & 128))
      $this.o1s_1 = null;
    else
      $this.o1s_1 = landMark;
    if (0 === (seen0 & 256))
      $this.p1s_1 = null;
    else
      $this.p1s_1 = cusCity;
    if (0 === (seen0 & 512))
      $this.q1s_1 = null;
    else
      $this.q1s_1 = cusCountry;
    if (0 === (seen0 & 1024))
      $this.r1s_1 = null;
    else
      $this.r1s_1 = custState;
    if (0 === (seen0 & 2048))
      $this.s1s_1 = null;
    else
      $this.s1s_1 = custDOB;
    if (0 === (seen0 & 4096))
      $this.t1s_1 = null;
    else
      $this.t1s_1 = custDOA;
    if (0 === (seen0 & 8192))
      $this.u1s_1 = null;
    else
      $this.u1s_1 = custLoyaltyPoints;
    if (0 === (seen0 & 16384))
      $this.v1s_1 = null;
    else
      $this.v1s_1 = extras;
    if (0 === (seen0 & 32768))
      $this.w1s_1 = null;
    else
      $this.w1s_1 = pointsAwarded;
    if (0 === (seen0 & 65536))
      $this.x1s_1 = null;
    else
      $this.x1s_1 = loyaltyType;
    if (0 === (seen0 & 131072))
      $this.y1s_1 = null;
    else
      $this.y1s_1 = custLoyaltyId;
    if (0 === (seen0 & 262144))
      $this.z1s_1 = null;
    else
      $this.z1s_1 = programUUID;
    if (0 === (seen0 & 524288))
      $this.a1t_1 = null;
    else
      $this.a1t_1 = tierUUID;
    if (0 === (seen0 & 1048576))
      $this.b1t_1 = null;
    else
      $this.b1t_1 = rewardUuid;
    if (0 === (seen0 & 2097152))
      $this.c1t_1 = null;
    else
      $this.c1t_1 = customerMembership;
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
    tmp.e1t_1 = [null, null, null, null, null, tmp_1, null, null, null, null, null, null, null, tmp_3, null, lazy(tmp_4, MemberShipPlan$Companion$$childSerializers$_anonymous__f5ycq3_1)];
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
    this.f1t_1 = tmp0_serialDesc;
  }
  g1t(encoder, value) {
    var tmp0_desc = this.f1t_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().e1t_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.h1t_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.h1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.i1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.i1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.j1t_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.j1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.k1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, IntSerializer_getInstance(), value.k1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.l1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.l1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.m1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, tmp2_cached[5].g2(), value.m1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.n1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, DoubleSerializer_getInstance(), value.n1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.o1t_1 === true)) {
      tmp1_output.lq(tmp0_desc, 7, BooleanSerializer_getInstance(), value.o1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.p1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.p1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.q1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.q1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.r1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, IntSerializer_getInstance(), value.r1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.s1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.s1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.t1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.t1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.u1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, tmp2_cached[13].g2(), value.u1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.v1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 14, StringSerializer_getInstance(), value.v1t_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.w1t_1 == null)) {
      tmp1_output.lq(tmp0_desc, 15, tmp2_cached[15].g2(), value.w1t_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.g1t(encoder, value instanceof MemberShipPlan ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.f1t_1;
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
    var tmp22_cached = Companion_getInstance_6().e1t_1;
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
    return MemberShipPlan.y1t(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  al() {
    return this.f1t_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_6().e1t_1;
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
    this.h1t_1 = membershipId;
    this.i1t_1 = createdAt;
    this.j1t_1 = id;
    this.k1t_1 = loyaltyPoints;
    this.l1t_1 = membershipName;
    this.m1t_1 = offerDetails;
    this.n1t_1 = price;
    this.o1t_1 = status;
    this.p1t_1 = storeId;
    this.q1t_1 = updatedAt;
    this.r1t_1 = validity;
    this.s1t_1 = custMobile;
    this.t1t_1 = endDate;
    this.u1t_1 = redemptionDetails;
    this.v1t_1 = startDate;
    this.w1t_1 = tax;
    this.x1t_1 = isSelected;
  }
  toString() {
    return 'MemberShipPlan(membershipId=' + this.h1t_1 + ', createdAt=' + this.i1t_1 + ', id=' + this.j1t_1 + ', loyaltyPoints=' + this.k1t_1 + ', membershipName=' + this.l1t_1 + ', offerDetails=' + toString_0(this.m1t_1) + ', price=' + this.n1t_1 + ', status=' + this.o1t_1 + ', storeId=' + this.p1t_1 + ', updatedAt=' + this.q1t_1 + ', validity=' + this.r1t_1 + ', custMobile=' + this.s1t_1 + ', endDate=' + this.t1t_1 + ', redemptionDetails=' + toString_0(this.u1t_1) + ', startDate=' + this.v1t_1 + ', tax=' + toString_0(this.w1t_1) + ', isSelected=' + this.x1t_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.h1t_1);
    result = imul(result, 31) + (this.i1t_1 == null ? 0 : getStringHashCode(this.i1t_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.j1t_1) | 0;
    result = imul(result, 31) + (this.k1t_1 == null ? 0 : this.k1t_1) | 0;
    result = imul(result, 31) + (this.l1t_1 == null ? 0 : getStringHashCode(this.l1t_1)) | 0;
    result = imul(result, 31) + (this.m1t_1 == null ? 0 : hashCode(this.m1t_1)) | 0;
    result = imul(result, 31) + (this.n1t_1 == null ? 0 : getNumberHashCode(this.n1t_1)) | 0;
    result = imul(result, 31) + (this.o1t_1 == null ? 0 : getBooleanHashCode(this.o1t_1)) | 0;
    result = imul(result, 31) + (this.p1t_1 == null ? 0 : getStringHashCode(this.p1t_1)) | 0;
    result = imul(result, 31) + (this.q1t_1 == null ? 0 : getStringHashCode(this.q1t_1)) | 0;
    result = imul(result, 31) + (this.r1t_1 == null ? 0 : this.r1t_1) | 0;
    result = imul(result, 31) + (this.s1t_1 == null ? 0 : getStringHashCode(this.s1t_1)) | 0;
    result = imul(result, 31) + (this.t1t_1 == null ? 0 : getStringHashCode(this.t1t_1)) | 0;
    result = imul(result, 31) + (this.u1t_1 == null ? 0 : hashCode(this.u1t_1)) | 0;
    result = imul(result, 31) + (this.v1t_1 == null ? 0 : getStringHashCode(this.v1t_1)) | 0;
    result = imul(result, 31) + (this.w1t_1 == null ? 0 : hashCode(this.w1t_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.x1t_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof MemberShipPlan))
      return false;
    var tmp0_other_with_cast = other instanceof MemberShipPlan ? other : THROW_CCE();
    if (!(this.h1t_1 === tmp0_other_with_cast.h1t_1))
      return false;
    if (!(this.i1t_1 == tmp0_other_with_cast.i1t_1))
      return false;
    if (!(this.j1t_1 === tmp0_other_with_cast.j1t_1))
      return false;
    if (!(this.k1t_1 == tmp0_other_with_cast.k1t_1))
      return false;
    if (!(this.l1t_1 == tmp0_other_with_cast.l1t_1))
      return false;
    if (!equals(this.m1t_1, tmp0_other_with_cast.m1t_1))
      return false;
    if (!equals(this.n1t_1, tmp0_other_with_cast.n1t_1))
      return false;
    if (!(this.o1t_1 == tmp0_other_with_cast.o1t_1))
      return false;
    if (!(this.p1t_1 == tmp0_other_with_cast.p1t_1))
      return false;
    if (!(this.q1t_1 == tmp0_other_with_cast.q1t_1))
      return false;
    if (!(this.r1t_1 == tmp0_other_with_cast.r1t_1))
      return false;
    if (!(this.s1t_1 == tmp0_other_with_cast.s1t_1))
      return false;
    if (!(this.t1t_1 == tmp0_other_with_cast.t1t_1))
      return false;
    if (!equals(this.u1t_1, tmp0_other_with_cast.u1t_1))
      return false;
    if (!(this.v1t_1 == tmp0_other_with_cast.v1t_1))
      return false;
    if (!equals(this.w1t_1, tmp0_other_with_cast.w1t_1))
      return false;
    if (!(this.x1t_1 === tmp0_other_with_cast.x1t_1))
      return false;
    return true;
  }
  static y1t(seen0, membershipId, createdAt, id, loyaltyPoints, membershipName, offerDetails, price, status, storeId, updatedAt, validity, custMobile, endDate, redemptionDetails, startDate, tax, serializationConstructorMarker) {
    Companion_getInstance_6();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().f1t_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.h1t_1 = '';
    else
      $this.h1t_1 = membershipId;
    if (0 === (seen0 & 2))
      $this.i1t_1 = null;
    else
      $this.i1t_1 = createdAt;
    if (0 === (seen0 & 4))
      $this.j1t_1 = '';
    else
      $this.j1t_1 = id;
    if (0 === (seen0 & 8))
      $this.k1t_1 = null;
    else
      $this.k1t_1 = loyaltyPoints;
    if (0 === (seen0 & 16))
      $this.l1t_1 = null;
    else
      $this.l1t_1 = membershipName;
    if (0 === (seen0 & 32))
      $this.m1t_1 = null;
    else
      $this.m1t_1 = offerDetails;
    if (0 === (seen0 & 64))
      $this.n1t_1 = null;
    else
      $this.n1t_1 = price;
    if (0 === (seen0 & 128))
      $this.o1t_1 = true;
    else
      $this.o1t_1 = status;
    if (0 === (seen0 & 256))
      $this.p1t_1 = null;
    else
      $this.p1t_1 = storeId;
    if (0 === (seen0 & 512))
      $this.q1t_1 = null;
    else
      $this.q1t_1 = updatedAt;
    if (0 === (seen0 & 1024))
      $this.r1t_1 = null;
    else
      $this.r1t_1 = validity;
    if (0 === (seen0 & 2048))
      $this.s1t_1 = null;
    else
      $this.s1t_1 = custMobile;
    if (0 === (seen0 & 4096))
      $this.t1t_1 = null;
    else
      $this.t1t_1 = endDate;
    if (0 === (seen0 & 8192))
      $this.u1t_1 = null;
    else
      $this.u1t_1 = redemptionDetails;
    if (0 === (seen0 & 16384))
      $this.v1t_1 = null;
    else
      $this.v1t_1 = startDate;
    if (0 === (seen0 & 32768))
      $this.w1t_1 = null;
    else
      $this.w1t_1 = tax;
    $this.x1t_1 = false;
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
    this.z1t_1 = tmp0_serialDesc;
  }
  a1u(encoder, value) {
    var tmp0_desc = this.z1t_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.b1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, IntSerializer_getInstance(), value.b1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.c1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.c1u_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.a1u(encoder, value instanceof OfferDetail ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.z1t_1;
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
    return OfferDetail.d1u(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  al() {
    return this.z1t_1;
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
    this.b1u_1 = maxConsumption;
    this.c1u_1 = offerId;
  }
  toString() {
    return 'OfferDetail(maxConsumption=' + this.b1u_1 + ', offerId=' + this.c1u_1 + ')';
  }
  hashCode() {
    var result = this.b1u_1 == null ? 0 : this.b1u_1;
    result = imul(result, 31) + (this.c1u_1 == null ? 0 : getStringHashCode(this.c1u_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OfferDetail))
      return false;
    var tmp0_other_with_cast = other instanceof OfferDetail ? other : THROW_CCE();
    if (!(this.b1u_1 == tmp0_other_with_cast.b1u_1))
      return false;
    if (!(this.c1u_1 == tmp0_other_with_cast.c1u_1))
      return false;
    return true;
  }
  static d1u(seen0, maxConsumption, offerId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().z1t_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.b1u_1 = null;
    else
      $this.b1u_1 = maxConsumption;
    if (0 === (seen0 & 2))
      $this.c1u_1 = null;
    else
      $this.c1u_1 = offerId;
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
    this.e1u_1 = tmp0_serialDesc;
  }
  f1u(encoder, value) {
    var tmp0_desc = this.e1u_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.g1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.g1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.h1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.h1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.i1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, IntSerializer_getInstance(), value.i1u_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.f1u(encoder, value instanceof RedemptionDetails ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.e1u_1;
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
    return RedemptionDetails.j1u(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  al() {
    return this.e1u_1;
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
    this.g1u_1 = id;
    this.h1u_1 = offerId;
    this.i1u_1 = consumptionCount;
  }
  toString() {
    return 'RedemptionDetails(id=' + this.g1u_1 + ', offerId=' + this.h1u_1 + ', consumptionCount=' + this.i1u_1 + ')';
  }
  hashCode() {
    var result = this.g1u_1 == null ? 0 : getStringHashCode(this.g1u_1);
    result = imul(result, 31) + (this.h1u_1 == null ? 0 : getStringHashCode(this.h1u_1)) | 0;
    result = imul(result, 31) + (this.i1u_1 == null ? 0 : this.i1u_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RedemptionDetails))
      return false;
    var tmp0_other_with_cast = other instanceof RedemptionDetails ? other : THROW_CCE();
    if (!(this.g1u_1 == tmp0_other_with_cast.g1u_1))
      return false;
    if (!(this.h1u_1 == tmp0_other_with_cast.h1u_1))
      return false;
    if (!(this.i1u_1 == tmp0_other_with_cast.i1u_1))
      return false;
    return true;
  }
  static j1u(seen0, id, offerId, consumptionCount, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().e1u_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.g1u_1 = null;
    else
      $this.g1u_1 = id;
    if (0 === (seen0 & 2))
      $this.h1u_1 = null;
    else
      $this.h1u_1 = offerId;
    if (0 === (seen0 & 4))
      $this.i1u_1 = null;
    else
      $this.i1u_1 = consumptionCount;
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
    tmp.k1u_1 = [null, null, lazy(tmp_0, OrderDiscount$Companion$$childSerializers$_anonymous__1gq891), null, null, null, null];
  }
}
class $serializer_9 {
  constructor() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderDiscount', this, 7);
    tmp0_serialDesc.aw('entity', true);
    tmp0_serialDesc.aw('is_source_item', true);
    tmp0_serialDesc.aw('mapped_offer_items', true);
    tmp0_serialDesc.aw('offer_id', false);
    tmp0_serialDesc.aw('offer_header', true);
    tmp0_serialDesc.aw('offer_type', true);
    tmp0_serialDesc.aw('coupon_code', true);
    this.l1u_1 = tmp0_serialDesc;
  }
  m1u(encoder, value) {
    var tmp0_desc = this.l1u_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().k1u_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.n1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.n1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.o1u_1 === true)) {
      tmp1_output.lq(tmp0_desc, 1, BooleanSerializer_getInstance(), value.o1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.p1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, tmp2_cached[2].g2(), value.p1u_1);
    }
    tmp1_output.hq(tmp0_desc, 3, value.q1u_1);
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.r1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, $serializer_getInstance_10(), value.r1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.s1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.s1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.t1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.t1u_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.m1u(encoder, value instanceof OrderDiscount ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.l1u_1;
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
    var tmp12_cached = Companion_getInstance_9().k1u_1;
    if (tmp11_input.ip()) {
      tmp4_local0 = tmp11_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.gp(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.gp(tmp0_desc, 2, tmp12_cached[2].g2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.cp(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.gp(tmp0_desc, 4, $serializer_getInstance_10(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
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
            tmp5_local1 = tmp11_input.gp(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.gp(tmp0_desc, 2, tmp12_cached[2].g2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.cp(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.gp(tmp0_desc, 4, $serializer_getInstance_10(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.gp(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp11_input.to(tmp0_desc);
    return OrderDiscount.u1u(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  al() {
    return this.l1u_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_9().k1u_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[2].g2()), StringSerializer_getInstance(), get_nullable($serializer_getInstance_10()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class OrderDiscount {
  toString() {
    return 'OrderDiscount(entity=' + this.n1u_1 + ', isSourceItem=' + this.o1u_1 + ', mappedOfferItems=' + toString_0(this.p1u_1) + ', offerId=' + this.q1u_1 + ', offerHeader=' + toString_0(this.r1u_1) + ', offerType=' + this.s1u_1 + ', couponCode=' + this.t1u_1 + ')';
  }
  hashCode() {
    var result = this.n1u_1 == null ? 0 : getStringHashCode(this.n1u_1);
    result = imul(result, 31) + (this.o1u_1 == null ? 0 : getBooleanHashCode(this.o1u_1)) | 0;
    result = imul(result, 31) + (this.p1u_1 == null ? 0 : hashCode(this.p1u_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.q1u_1) | 0;
    result = imul(result, 31) + (this.r1u_1 == null ? 0 : this.r1u_1.hashCode()) | 0;
    result = imul(result, 31) + (this.s1u_1 == null ? 0 : getStringHashCode(this.s1u_1)) | 0;
    result = imul(result, 31) + (this.t1u_1 == null ? 0 : getStringHashCode(this.t1u_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderDiscount))
      return false;
    var tmp0_other_with_cast = other instanceof OrderDiscount ? other : THROW_CCE();
    if (!(this.n1u_1 == tmp0_other_with_cast.n1u_1))
      return false;
    if (!(this.o1u_1 == tmp0_other_with_cast.o1u_1))
      return false;
    if (!equals(this.p1u_1, tmp0_other_with_cast.p1u_1))
      return false;
    if (!(this.q1u_1 === tmp0_other_with_cast.q1u_1))
      return false;
    if (!equals(this.r1u_1, tmp0_other_with_cast.r1u_1))
      return false;
    if (!(this.s1u_1 == tmp0_other_with_cast.s1u_1))
      return false;
    if (!(this.t1u_1 == tmp0_other_with_cast.t1u_1))
      return false;
    return true;
  }
  static u1u(seen0, entity, isSourceItem, mappedOfferItems, offerId, offerHeader, offerType, couponCode, serializationConstructorMarker) {
    Companion_getInstance_9();
    if (!(8 === (8 & seen0))) {
      throwMissingFieldException(seen0, 8, $serializer_getInstance_9().l1u_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.n1u_1 = null;
    else
      $this.n1u_1 = entity;
    if (0 === (seen0 & 2))
      $this.o1u_1 = true;
    else
      $this.o1u_1 = isSourceItem;
    if (0 === (seen0 & 4))
      $this.p1u_1 = null;
    else
      $this.p1u_1 = mappedOfferItems;
    $this.q1u_1 = offerId;
    if (0 === (seen0 & 16))
      $this.r1u_1 = null;
    else
      $this.r1u_1 = offerHeader;
    if (0 === (seen0 & 32))
      $this.s1u_1 = null;
    else
      $this.s1u_1 = offerType;
    if (0 === (seen0 & 64))
      $this.t1u_1 = null;
    else
      $this.t1u_1 = couponCode;
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
    this.v1u_1 = tmp0_serialDesc;
  }
  w1u(encoder, value) {
    var tmp0_desc = this.v1u_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.x1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.x1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.y1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.y1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.z1u_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.z1u_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.a1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.a1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.b1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.b1v_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.w1u(encoder, value instanceof OrderOfferHeader ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.v1u_1;
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
    return OrderOfferHeader.c1v(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  al() {
    return this.v1u_1;
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
    this.x1u_1 = dealType;
    this.y1u_1 = description;
    this.z1u_1 = offerHeaderId;
    this.a1v_1 = termsConditions;
    this.b1v_1 = couponCode;
  }
  toString() {
    return 'OrderOfferHeader(dealType=' + this.x1u_1 + ', description=' + this.y1u_1 + ', offerHeaderId=' + this.z1u_1 + ', termsConditions=' + this.a1v_1 + ', couponCode=' + this.b1v_1 + ')';
  }
  hashCode() {
    var result = this.x1u_1 == null ? 0 : getStringHashCode(this.x1u_1);
    result = imul(result, 31) + (this.y1u_1 == null ? 0 : getStringHashCode(this.y1u_1)) | 0;
    result = imul(result, 31) + (this.z1u_1 == null ? 0 : getStringHashCode(this.z1u_1)) | 0;
    result = imul(result, 31) + (this.a1v_1 == null ? 0 : getStringHashCode(this.a1v_1)) | 0;
    result = imul(result, 31) + (this.b1v_1 == null ? 0 : getStringHashCode(this.b1v_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderOfferHeader))
      return false;
    var tmp0_other_with_cast = other instanceof OrderOfferHeader ? other : THROW_CCE();
    if (!(this.x1u_1 == tmp0_other_with_cast.x1u_1))
      return false;
    if (!(this.y1u_1 == tmp0_other_with_cast.y1u_1))
      return false;
    if (!(this.z1u_1 == tmp0_other_with_cast.z1u_1))
      return false;
    if (!(this.a1v_1 == tmp0_other_with_cast.a1v_1))
      return false;
    if (!(this.b1v_1 == tmp0_other_with_cast.b1v_1))
      return false;
    return true;
  }
  static c1v(seen0, dealType, description, offerHeaderId, termsConditions, couponCode, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().v1u_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.x1u_1 = null;
    else
      $this.x1u_1 = dealType;
    if (0 === (seen0 & 2))
      $this.y1u_1 = null;
    else
      $this.y1u_1 = description;
    if (0 === (seen0 & 4))
      $this.z1u_1 = null;
    else
      $this.z1u_1 = offerHeaderId;
    if (0 === (seen0 & 8))
      $this.a1v_1 = null;
    else
      $this.a1v_1 = termsConditions;
    if (0 === (seen0 & 16))
      $this.b1v_1 = null;
    else
      $this.b1v_1 = couponCode;
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
    this.d1v_1 = tmp0_serialDesc;
  }
  e1v(encoder, value) {
    var tmp0_desc = this.d1v_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.u1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.u1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.v1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.v1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.w1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, BooleanSerializer_getInstance(), value.w1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.x1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.x1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.y1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, DoubleSerializer_getInstance(), value.y1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.z1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.z1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.a1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, DoubleSerializer_getInstance(), value.a1p_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.e1v(encoder, value instanceof ChargeTaxId ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.d1v_1;
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
    return ChargeTaxId.f1v(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  al() {
    return this.d1v_1;
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
    this.u1o_1 = action;
    this.v1o_1 = id;
    this.w1o_1 = status;
    this.x1o_1 = taxDsc;
    this.y1o_1 = taxPct;
    this.z1o_1 = taxType;
    this.a1p_1 = taxAmount;
  }
  toString() {
    return 'ChargeTaxId(action=' + this.u1o_1 + ', id=' + this.v1o_1 + ', status=' + this.w1o_1 + ', taxDsc=' + this.x1o_1 + ', taxPct=' + this.y1o_1 + ', taxType=' + this.z1o_1 + ', taxAmount=' + this.a1p_1 + ')';
  }
  hashCode() {
    var result = this.u1o_1 == null ? 0 : getStringHashCode(this.u1o_1);
    result = imul(result, 31) + (this.v1o_1 == null ? 0 : getStringHashCode(this.v1o_1)) | 0;
    result = imul(result, 31) + (this.w1o_1 == null ? 0 : getBooleanHashCode(this.w1o_1)) | 0;
    result = imul(result, 31) + (this.x1o_1 == null ? 0 : getStringHashCode(this.x1o_1)) | 0;
    result = imul(result, 31) + (this.y1o_1 == null ? 0 : getNumberHashCode(this.y1o_1)) | 0;
    result = imul(result, 31) + (this.z1o_1 == null ? 0 : getStringHashCode(this.z1o_1)) | 0;
    result = imul(result, 31) + (this.a1p_1 == null ? 0 : getNumberHashCode(this.a1p_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ChargeTaxId))
      return false;
    var tmp0_other_with_cast = other instanceof ChargeTaxId ? other : THROW_CCE();
    if (!(this.u1o_1 == tmp0_other_with_cast.u1o_1))
      return false;
    if (!(this.v1o_1 == tmp0_other_with_cast.v1o_1))
      return false;
    if (!(this.w1o_1 == tmp0_other_with_cast.w1o_1))
      return false;
    if (!(this.x1o_1 == tmp0_other_with_cast.x1o_1))
      return false;
    if (!equals(this.y1o_1, tmp0_other_with_cast.y1o_1))
      return false;
    if (!(this.z1o_1 == tmp0_other_with_cast.z1o_1))
      return false;
    if (!equals(this.a1p_1, tmp0_other_with_cast.a1p_1))
      return false;
    return true;
  }
  static f1v(seen0, action, id, status, taxDsc, taxPct, taxType, taxAmount, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().d1v_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.u1o_1 = null;
    else
      $this.u1o_1 = action;
    if (0 === (seen0 & 2))
      $this.v1o_1 = null;
    else
      $this.v1o_1 = id;
    if (0 === (seen0 & 4))
      $this.w1o_1 = null;
    else
      $this.w1o_1 = status;
    if (0 === (seen0 & 8))
      $this.x1o_1 = null;
    else
      $this.x1o_1 = taxDsc;
    if (0 === (seen0 & 16))
      $this.y1o_1 = null;
    else
      $this.y1o_1 = taxPct;
    if (0 === (seen0 & 32))
      $this.z1o_1 = null;
    else
      $this.z1o_1 = taxType;
    if (0 === (seen0 & 64))
      $this.a1p_1 = null;
    else
      $this.a1p_1 = taxAmount;
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
    tmp.g1v_1 = [null, null, lazy(tmp_0, ChargesData$Companion$$childSerializers$_anonymous__htu7tr), null, null, null, null, null, null, null, null, null, null, null, null, null];
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
    this.h1v_1 = tmp0_serialDesc;
  }
  i1v(encoder, value) {
    var tmp0_desc = this.h1v_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().g1v_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.o1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.o1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.p1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.p1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.q1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, tmp2_cached[2].g2(), value.q1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.r1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, DoubleSerializer_getInstance(), value.r1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.s1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, $serializer_getInstance_9(), value.s1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.t1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.t1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.u1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, DoubleSerializer_getInstance(), value.u1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.v1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, DoubleSerializer_getInstance(), value.v1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.w1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.w1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.x1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.x1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.y1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, DoubleSerializer_getInstance(), value.y1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.z1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.z1n_1);
    }
    tmp1_output.fq(tmp0_desc, 12, value.a1o_1);
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.b1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, StringSerializer_getInstance(), value.b1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.c1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 14, IntSerializer_getInstance(), value.c1o_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.d1o_1 == null)) {
      tmp1_output.lq(tmp0_desc, 15, DoubleSerializer_getInstance(), value.d1o_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.i1v(encoder, value instanceof ChargesData ? value : THROW_CCE());
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
    var tmp21_cached = Companion_getInstance_12().g1v_1;
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
    return ChargesData.j1v(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  al() {
    return this.h1v_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_12().g1v_1;
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
    this.o1n_1 = applyAtLevel;
    this.p1n_1 = chargeId;
    this.q1n_1 = chargeTaxIds;
    this.r1n_1 = percentage;
    this.s1n_1 = offerDetails;
    this.t1n_1 = description;
    this.u1n_1 = orderLevelCharges;
    this.v1n_1 = orderLevelChargesTax;
    this.w1n_1 = storeId;
    this.x1n_1 = title;
    this.y1n_1 = totalOrderLevelCharges;
    this.z1n_1 = types;
    this.a1o_1 = value;
    this.b1o_1 = valueType;
    this.c1o_1 = points;
    this.d1o_1 = minOrderValue;
  }
  toString() {
    return 'ChargesData(applyAtLevel=' + this.o1n_1 + ', chargeId=' + this.p1n_1 + ', chargeTaxIds=' + toString_0(this.q1n_1) + ', percentage=' + this.r1n_1 + ', offerDetails=' + toString_0(this.s1n_1) + ', description=' + this.t1n_1 + ', orderLevelCharges=' + this.u1n_1 + ', orderLevelChargesTax=' + this.v1n_1 + ', storeId=' + this.w1n_1 + ', title=' + this.x1n_1 + ', totalOrderLevelCharges=' + this.y1n_1 + ', types=' + this.z1n_1 + ', value=' + this.a1o_1 + ', valueType=' + this.b1o_1 + ', points=' + this.c1o_1 + ', minOrderValue=' + this.d1o_1 + ')';
  }
  hashCode() {
    var result = this.o1n_1 == null ? 0 : getStringHashCode(this.o1n_1);
    result = imul(result, 31) + (this.p1n_1 == null ? 0 : getStringHashCode(this.p1n_1)) | 0;
    result = imul(result, 31) + (this.q1n_1 == null ? 0 : hashCode(this.q1n_1)) | 0;
    result = imul(result, 31) + (this.r1n_1 == null ? 0 : getNumberHashCode(this.r1n_1)) | 0;
    result = imul(result, 31) + (this.s1n_1 == null ? 0 : this.s1n_1.hashCode()) | 0;
    result = imul(result, 31) + (this.t1n_1 == null ? 0 : getStringHashCode(this.t1n_1)) | 0;
    result = imul(result, 31) + (this.u1n_1 == null ? 0 : getNumberHashCode(this.u1n_1)) | 0;
    result = imul(result, 31) + (this.v1n_1 == null ? 0 : getNumberHashCode(this.v1n_1)) | 0;
    result = imul(result, 31) + (this.w1n_1 == null ? 0 : getStringHashCode(this.w1n_1)) | 0;
    result = imul(result, 31) + (this.x1n_1 == null ? 0 : getStringHashCode(this.x1n_1)) | 0;
    result = imul(result, 31) + (this.y1n_1 == null ? 0 : getNumberHashCode(this.y1n_1)) | 0;
    result = imul(result, 31) + (this.z1n_1 == null ? 0 : getStringHashCode(this.z1n_1)) | 0;
    result = imul(result, 31) + getNumberHashCode(this.a1o_1) | 0;
    result = imul(result, 31) + (this.b1o_1 == null ? 0 : getStringHashCode(this.b1o_1)) | 0;
    result = imul(result, 31) + (this.c1o_1 == null ? 0 : this.c1o_1) | 0;
    result = imul(result, 31) + (this.d1o_1 == null ? 0 : getNumberHashCode(this.d1o_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ChargesData))
      return false;
    var tmp0_other_with_cast = other instanceof ChargesData ? other : THROW_CCE();
    if (!(this.o1n_1 == tmp0_other_with_cast.o1n_1))
      return false;
    if (!(this.p1n_1 == tmp0_other_with_cast.p1n_1))
      return false;
    if (!equals(this.q1n_1, tmp0_other_with_cast.q1n_1))
      return false;
    if (!equals(this.r1n_1, tmp0_other_with_cast.r1n_1))
      return false;
    if (!equals(this.s1n_1, tmp0_other_with_cast.s1n_1))
      return false;
    if (!(this.t1n_1 == tmp0_other_with_cast.t1n_1))
      return false;
    if (!equals(this.u1n_1, tmp0_other_with_cast.u1n_1))
      return false;
    if (!equals(this.v1n_1, tmp0_other_with_cast.v1n_1))
      return false;
    if (!(this.w1n_1 == tmp0_other_with_cast.w1n_1))
      return false;
    if (!(this.x1n_1 == tmp0_other_with_cast.x1n_1))
      return false;
    if (!equals(this.y1n_1, tmp0_other_with_cast.y1n_1))
      return false;
    if (!(this.z1n_1 == tmp0_other_with_cast.z1n_1))
      return false;
    if (!equals(this.a1o_1, tmp0_other_with_cast.a1o_1))
      return false;
    if (!(this.b1o_1 == tmp0_other_with_cast.b1o_1))
      return false;
    if (!(this.c1o_1 == tmp0_other_with_cast.c1o_1))
      return false;
    if (!equals(this.d1o_1, tmp0_other_with_cast.d1o_1))
      return false;
    return true;
  }
  static j1v(seen0, applyAtLevel, chargeId, chargeTaxIds, percentage, offerDetails, description, orderLevelCharges, orderLevelChargesTax, storeId, title, totalOrderLevelCharges, types, value, valueType, points, minOrderValue, serializationConstructorMarker) {
    Companion_getInstance_12();
    if (!(4096 === (4096 & seen0))) {
      throwMissingFieldException(seen0, 4096, $serializer_getInstance_12().h1v_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.o1n_1 = null;
    else
      $this.o1n_1 = applyAtLevel;
    if (0 === (seen0 & 2))
      $this.p1n_1 = null;
    else
      $this.p1n_1 = chargeId;
    if (0 === (seen0 & 4))
      $this.q1n_1 = null;
    else
      $this.q1n_1 = chargeTaxIds;
    if (0 === (seen0 & 8))
      $this.r1n_1 = null;
    else
      $this.r1n_1 = percentage;
    if (0 === (seen0 & 16))
      $this.s1n_1 = null;
    else
      $this.s1n_1 = offerDetails;
    if (0 === (seen0 & 32))
      $this.t1n_1 = null;
    else
      $this.t1n_1 = description;
    if (0 === (seen0 & 64))
      $this.u1n_1 = null;
    else
      $this.u1n_1 = orderLevelCharges;
    if (0 === (seen0 & 128))
      $this.v1n_1 = null;
    else
      $this.v1n_1 = orderLevelChargesTax;
    if (0 === (seen0 & 256))
      $this.w1n_1 = null;
    else
      $this.w1n_1 = storeId;
    if (0 === (seen0 & 512))
      $this.x1n_1 = null;
    else
      $this.x1n_1 = title;
    if (0 === (seen0 & 1024))
      $this.y1n_1 = null;
    else
      $this.y1n_1 = totalOrderLevelCharges;
    if (0 === (seen0 & 2048))
      $this.z1n_1 = null;
    else
      $this.z1n_1 = types;
    $this.a1o_1 = value;
    if (0 === (seen0 & 8192))
      $this.b1o_1 = null;
    else
      $this.b1o_1 = valueType;
    if (0 === (seen0 & 16384))
      $this.c1o_1 = null;
    else
      $this.c1o_1 = points;
    if (0 === (seen0 & 32768))
      $this.d1o_1 = null;
    else
      $this.d1o_1 = minOrderValue;
    return $this;
  }
}
class Companion_13 {}
class $serializer_13 {
  constructor() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderStateHistory', this, 6);
    tmp0_serialDesc.aw('_id', true);
    tmp0_serialDesc.aw('order_state', true);
    tmp0_serialDesc.aw('store_id', true);
    tmp0_serialDesc.aw('order_id', true);
    tmp0_serialDesc.aw('timestamp_unix', true);
    tmp0_serialDesc.aw('date_time', true);
    this.k1v_1 = tmp0_serialDesc;
  }
  l1v(encoder, value) {
    var tmp0_desc = this.k1v_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.m1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.m1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.n1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.n1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.o1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.o1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.p1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.p1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.q1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.q1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.r1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.r1v_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.l1v(encoder, value instanceof OrderStateHistory ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.k1v_1;
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
      tmp4_local0 = tmp10_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
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
            tmp4_local0 = tmp10_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
            tmp7_local3 = tmp10_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
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
    return OrderStateHistory.s1v(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  al() {
    return this.k1v_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class OrderStateHistory {
  constructor(id, orderState, storeId, orderId, timestampUnix, dateTime) {
    id = id === VOID ? null : id;
    orderState = orderState === VOID ? null : orderState;
    storeId = storeId === VOID ? null : storeId;
    orderId = orderId === VOID ? null : orderId;
    timestampUnix = timestampUnix === VOID ? null : timestampUnix;
    dateTime = dateTime === VOID ? null : dateTime;
    this.m1v_1 = id;
    this.n1v_1 = orderState;
    this.o1v_1 = storeId;
    this.p1v_1 = orderId;
    this.q1v_1 = timestampUnix;
    this.r1v_1 = dateTime;
  }
  toString() {
    return 'OrderStateHistory(id=' + this.m1v_1 + ', orderState=' + this.n1v_1 + ', storeId=' + this.o1v_1 + ', orderId=' + this.p1v_1 + ', timestampUnix=' + this.q1v_1 + ', dateTime=' + this.r1v_1 + ')';
  }
  hashCode() {
    var result = this.m1v_1 == null ? 0 : getStringHashCode(this.m1v_1);
    result = imul(result, 31) + (this.n1v_1 == null ? 0 : getStringHashCode(this.n1v_1)) | 0;
    result = imul(result, 31) + (this.o1v_1 == null ? 0 : getStringHashCode(this.o1v_1)) | 0;
    result = imul(result, 31) + (this.p1v_1 == null ? 0 : getStringHashCode(this.p1v_1)) | 0;
    result = imul(result, 31) + (this.q1v_1 == null ? 0 : getStringHashCode(this.q1v_1)) | 0;
    result = imul(result, 31) + (this.r1v_1 == null ? 0 : getStringHashCode(this.r1v_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderStateHistory))
      return false;
    var tmp0_other_with_cast = other instanceof OrderStateHistory ? other : THROW_CCE();
    if (!(this.m1v_1 == tmp0_other_with_cast.m1v_1))
      return false;
    if (!(this.n1v_1 == tmp0_other_with_cast.n1v_1))
      return false;
    if (!(this.o1v_1 == tmp0_other_with_cast.o1v_1))
      return false;
    if (!(this.p1v_1 == tmp0_other_with_cast.p1v_1))
      return false;
    if (!(this.q1v_1 == tmp0_other_with_cast.q1v_1))
      return false;
    if (!(this.r1v_1 == tmp0_other_with_cast.r1v_1))
      return false;
    return true;
  }
  static s1v(seen0, id, orderState, storeId, orderId, timestampUnix, dateTime, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().k1v_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.m1v_1 = null;
    else
      $this.m1v_1 = id;
    if (0 === (seen0 & 2))
      $this.n1v_1 = null;
    else
      $this.n1v_1 = orderState;
    if (0 === (seen0 & 4))
      $this.o1v_1 = null;
    else
      $this.o1v_1 = storeId;
    if (0 === (seen0 & 8))
      $this.p1v_1 = null;
    else
      $this.p1v_1 = orderId;
    if (0 === (seen0 & 16))
      $this.q1v_1 = null;
    else
      $this.q1v_1 = timestampUnix;
    if (0 === (seen0 & 32))
      $this.r1v_1 = null;
    else
      $this.r1v_1 = dateTime;
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
    this.t1v_1 = tmp0_serialDesc;
  }
  u1v(encoder, value) {
    var tmp0_desc = this.t1v_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.v1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.v1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.w1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.w1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.x1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.x1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.y1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, $serializer_getInstance_15(), value.y1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.z1v_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.z1v_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.a1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.a1w_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.u1v(encoder, value instanceof PlatForDetails ? value : THROW_CCE());
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
    var tmp10_input = decoder.so(tmp0_desc);
    if (tmp10_input.ip()) {
      tmp4_local0 = tmp10_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.gp(tmp0_desc, 3, $serializer_getInstance_15(), tmp7_local3);
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
            tmp4_local0 = tmp10_input.gp(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
            tmp7_local3 = tmp10_input.gp(tmp0_desc, 3, $serializer_getInstance_15(), tmp7_local3);
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
    return PlatForDetails.b1w(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  al() {
    return this.t1v_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_15()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class PlatForDetails {
  constructor(kind, name, deliveryType, extras, platformStoreId, id) {
    kind = kind === VOID ? null : kind;
    name = name === VOID ? null : name;
    deliveryType = deliveryType === VOID ? null : deliveryType;
    extras = extras === VOID ? null : extras;
    platformStoreId = platformStoreId === VOID ? null : platformStoreId;
    id = id === VOID ? null : id;
    this.v1v_1 = kind;
    this.w1v_1 = name;
    this.x1v_1 = deliveryType;
    this.y1v_1 = extras;
    this.z1v_1 = platformStoreId;
    this.a1w_1 = id;
  }
  toString() {
    return 'PlatForDetails(kind=' + this.v1v_1 + ', name=' + this.w1v_1 + ', deliveryType=' + this.x1v_1 + ', extras=' + toString_0(this.y1v_1) + ', platformStoreId=' + this.z1v_1 + ', id=' + this.a1w_1 + ')';
  }
  hashCode() {
    var result = this.v1v_1 == null ? 0 : getStringHashCode(this.v1v_1);
    result = imul(result, 31) + (this.w1v_1 == null ? 0 : getStringHashCode(this.w1v_1)) | 0;
    result = imul(result, 31) + (this.x1v_1 == null ? 0 : getStringHashCode(this.x1v_1)) | 0;
    result = imul(result, 31) + (this.y1v_1 == null ? 0 : this.y1v_1.hashCode()) | 0;
    result = imul(result, 31) + (this.z1v_1 == null ? 0 : getStringHashCode(this.z1v_1)) | 0;
    result = imul(result, 31) + (this.a1w_1 == null ? 0 : getStringHashCode(this.a1w_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatForDetails))
      return false;
    var tmp0_other_with_cast = other instanceof PlatForDetails ? other : THROW_CCE();
    if (!(this.v1v_1 == tmp0_other_with_cast.v1v_1))
      return false;
    if (!(this.w1v_1 == tmp0_other_with_cast.w1v_1))
      return false;
    if (!(this.x1v_1 == tmp0_other_with_cast.x1v_1))
      return false;
    if (!equals(this.y1v_1, tmp0_other_with_cast.y1v_1))
      return false;
    if (!(this.z1v_1 == tmp0_other_with_cast.z1v_1))
      return false;
    if (!(this.a1w_1 == tmp0_other_with_cast.a1w_1))
      return false;
    return true;
  }
  static b1w(seen0, kind, name, deliveryType, extras, platformStoreId, id, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().t1v_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.v1v_1 = null;
    else
      $this.v1v_1 = kind;
    if (0 === (seen0 & 2))
      $this.w1v_1 = null;
    else
      $this.w1v_1 = name;
    if (0 === (seen0 & 4))
      $this.x1v_1 = null;
    else
      $this.x1v_1 = deliveryType;
    if (0 === (seen0 & 8))
      $this.y1v_1 = null;
    else
      $this.y1v_1 = extras;
    if (0 === (seen0 & 16))
      $this.z1v_1 = null;
    else
      $this.z1v_1 = platformStoreId;
    if (0 === (seen0 & 32))
      $this.a1w_1 = null;
    else
      $this.a1w_1 = id;
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
    this.c1w_1 = tmp0_serialDesc;
  }
  d1w(encoder, value) {
    var tmp0_desc = this.c1w_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.e1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.e1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.f1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, BooleanSerializer_getInstance(), value.f1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.g1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.g1w_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.d1w(encoder, value instanceof Extras ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.c1w_1;
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
      tmp5_local1 = tmp7_input.gp(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
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
            tmp5_local1 = tmp7_input.gp(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
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
    return Extras.h1w(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  al() {
    return this.c1w_1;
  }
  cw() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Extras {
  constructor(orderOtp, deliverAsap, contactAccessCode) {
    orderOtp = orderOtp === VOID ? null : orderOtp;
    deliverAsap = deliverAsap === VOID ? null : deliverAsap;
    contactAccessCode = contactAccessCode === VOID ? null : contactAccessCode;
    this.e1w_1 = orderOtp;
    this.f1w_1 = deliverAsap;
    this.g1w_1 = contactAccessCode;
  }
  toString() {
    return 'Extras(orderOtp=' + this.e1w_1 + ', deliverAsap=' + this.f1w_1 + ', contactAccessCode=' + this.g1w_1 + ')';
  }
  hashCode() {
    var result = this.e1w_1 == null ? 0 : getStringHashCode(this.e1w_1);
    result = imul(result, 31) + (this.f1w_1 == null ? 0 : getBooleanHashCode(this.f1w_1)) | 0;
    result = imul(result, 31) + (this.g1w_1 == null ? 0 : getStringHashCode(this.g1w_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Extras))
      return false;
    var tmp0_other_with_cast = other instanceof Extras ? other : THROW_CCE();
    if (!(this.e1w_1 == tmp0_other_with_cast.e1w_1))
      return false;
    if (!(this.f1w_1 == tmp0_other_with_cast.f1w_1))
      return false;
    if (!(this.g1w_1 == tmp0_other_with_cast.g1w_1))
      return false;
    return true;
  }
  static h1w(seen0, orderOtp, deliverAsap, contactAccessCode, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().c1w_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.e1w_1 = null;
    else
      $this.e1w_1 = orderOtp;
    if (0 === (seen0 & 2))
      $this.f1w_1 = null;
    else
      $this.f1w_1 = deliverAsap;
    if (0 === (seen0 & 4))
      $this.g1w_1 = null;
    else
      $this.g1w_1 = contactAccessCode;
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
    tmp.i1w_1 = [null, null, null, null, null, null, lazy(tmp_0, PaymentDetails$Companion$$childSerializers$_anonymous__kbx1ou), null, null];
  }
}
class $serializer_16 {
  constructor() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.PaymentDetails', this, 9);
    tmp0_serialDesc.aw('amount', true);
    tmp0_serialDesc.aw('tnd_code', true);
    tmp0_serialDesc.aw('tnd_des', true);
    tmp0_serialDesc.aw('tnd_type', true);
    tmp0_serialDesc.aw('transaction_id', true);
    tmp0_serialDesc.aw('payment_gateway', true);
    tmp0_serialDesc.aw('transaction_detail', true);
    tmp0_serialDesc.aw('change', true);
    tmp0_serialDesc.aw('trans_type', true);
    this.j1w_1 = tmp0_serialDesc;
  }
  k1w(encoder, value) {
    var tmp0_desc = this.j1w_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().i1w_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.c1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, DoubleSerializer_getInstance(), value.c1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.d1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.d1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.e1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.e1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.f1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.f1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.g1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.g1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.h1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.h1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.i1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, tmp2_cached[6].g2(), value.i1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.j1p_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, DoubleSerializer_getInstance(), value.j1p_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.k1p_1 === '')) {
      tmp1_output.hq(tmp0_desc, 8, value.k1p_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.k1w(encoder, value instanceof PaymentDetails ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.j1w_1;
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
    var tmp13_input = decoder.so(tmp0_desc);
    var tmp14_cached = Companion_getInstance_16().i1w_1;
    if (tmp13_input.ip()) {
      tmp4_local0 = tmp13_input.gp(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.gp(tmp0_desc, 6, tmp14_cached[6].g2(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.gp(tmp0_desc, 7, DoubleSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.cp(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.gp(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.gp(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.gp(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.gp(tmp0_desc, 6, tmp14_cached[6].g2(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.gp(tmp0_desc, 7, DoubleSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.cp(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp13_input.to(tmp0_desc);
    return PaymentDetails.l1w(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  }
  al() {
    return this.j1w_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_16().i1w_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[6].g2()), get_nullable(DoubleSerializer_getInstance()), StringSerializer_getInstance()];
  }
}
class PaymentDetails {
  constructor(amount, tndCode, tndDes, tndType, transactionId, paymentGateway, transactionDetail, change, transType) {
    Companion_getInstance_16();
    amount = amount === VOID ? null : amount;
    tndCode = tndCode === VOID ? null : tndCode;
    tndDes = tndDes === VOID ? null : tndDes;
    tndType = tndType === VOID ? null : tndType;
    transactionId = transactionId === VOID ? null : transactionId;
    paymentGateway = paymentGateway === VOID ? null : paymentGateway;
    transactionDetail = transactionDetail === VOID ? null : transactionDetail;
    change = change === VOID ? null : change;
    transType = transType === VOID ? '' : transType;
    this.c1p_1 = amount;
    this.d1p_1 = tndCode;
    this.e1p_1 = tndDes;
    this.f1p_1 = tndType;
    this.g1p_1 = transactionId;
    this.h1p_1 = paymentGateway;
    this.i1p_1 = transactionDetail;
    this.j1p_1 = change;
    this.k1p_1 = transType;
  }
  toString() {
    return 'PaymentDetails(amount=' + this.c1p_1 + ', tndCode=' + this.d1p_1 + ', tndDes=' + this.e1p_1 + ', tndType=' + this.f1p_1 + ', transactionId=' + this.g1p_1 + ', paymentGateway=' + this.h1p_1 + ', transactionDetail=' + toString_0(this.i1p_1) + ', change=' + this.j1p_1 + ', transType=' + this.k1p_1 + ')';
  }
  hashCode() {
    var result = this.c1p_1 == null ? 0 : getNumberHashCode(this.c1p_1);
    result = imul(result, 31) + (this.d1p_1 == null ? 0 : getStringHashCode(this.d1p_1)) | 0;
    result = imul(result, 31) + (this.e1p_1 == null ? 0 : getStringHashCode(this.e1p_1)) | 0;
    result = imul(result, 31) + (this.f1p_1 == null ? 0 : getStringHashCode(this.f1p_1)) | 0;
    result = imul(result, 31) + (this.g1p_1 == null ? 0 : getStringHashCode(this.g1p_1)) | 0;
    result = imul(result, 31) + (this.h1p_1 == null ? 0 : getStringHashCode(this.h1p_1)) | 0;
    result = imul(result, 31) + (this.i1p_1 == null ? 0 : this.i1p_1.hashCode()) | 0;
    result = imul(result, 31) + (this.j1p_1 == null ? 0 : getNumberHashCode(this.j1p_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.k1p_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PaymentDetails))
      return false;
    var tmp0_other_with_cast = other instanceof PaymentDetails ? other : THROW_CCE();
    if (!equals(this.c1p_1, tmp0_other_with_cast.c1p_1))
      return false;
    if (!(this.d1p_1 == tmp0_other_with_cast.d1p_1))
      return false;
    if (!(this.e1p_1 == tmp0_other_with_cast.e1p_1))
      return false;
    if (!(this.f1p_1 == tmp0_other_with_cast.f1p_1))
      return false;
    if (!(this.g1p_1 == tmp0_other_with_cast.g1p_1))
      return false;
    if (!(this.h1p_1 == tmp0_other_with_cast.h1p_1))
      return false;
    if (!equals(this.i1p_1, tmp0_other_with_cast.i1p_1))
      return false;
    if (!equals(this.j1p_1, tmp0_other_with_cast.j1p_1))
      return false;
    if (!(this.k1p_1 === tmp0_other_with_cast.k1p_1))
      return false;
    return true;
  }
  static l1w(seen0, amount, tndCode, tndDes, tndType, transactionId, paymentGateway, transactionDetail, change, transType, serializationConstructorMarker) {
    Companion_getInstance_16();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().j1w_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.c1p_1 = null;
    else
      $this.c1p_1 = amount;
    if (0 === (seen0 & 2))
      $this.d1p_1 = null;
    else
      $this.d1p_1 = tndCode;
    if (0 === (seen0 & 4))
      $this.e1p_1 = null;
    else
      $this.e1p_1 = tndDes;
    if (0 === (seen0 & 8))
      $this.f1p_1 = null;
    else
      $this.f1p_1 = tndType;
    if (0 === (seen0 & 16))
      $this.g1p_1 = null;
    else
      $this.g1p_1 = transactionId;
    if (0 === (seen0 & 32))
      $this.h1p_1 = null;
    else
      $this.h1p_1 = paymentGateway;
    if (0 === (seen0 & 64))
      $this.i1p_1 = null;
    else
      $this.i1p_1 = transactionDetail;
    if (0 === (seen0 & 128))
      $this.j1p_1 = null;
    else
      $this.j1p_1 = change;
    if (0 === (seen0 & 256))
      $this.k1p_1 = '';
    else
      $this.k1p_1 = transType;
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
    this.m1w_1 = tmp0_serialDesc;
  }
  n1w(encoder, value) {
    var tmp0_desc = this.m1w_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.o1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.o1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.p1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.p1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.q1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.q1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.r1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.r1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.s1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.s1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.t1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.t1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.u1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.u1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.v1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.v1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.w1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.w1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.x1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.x1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.y1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, DoubleSerializer_getInstance(), value.y1w_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.z1w_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.z1w_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.n1w(encoder, value instanceof PaymentIntentClass ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.m1w_1;
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
    return PaymentIntentClass.a1x(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, null);
  }
  al() {
    return this.m1w_1;
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
    this.o1w_1 = id;
    this.p1w_1 = cardNumber;
    this.q1w_1 = fingerPrint;
    this.r1w_1 = expires;
    this.s1w_1 = cardType;
    this.t1w_1 = issuer;
    this.u1w_1 = Address;
    this.v1w_1 = cardBrand;
    this.w1w_1 = readMethod;
    this.x1w_1 = cardHolderName;
    this.y1w_1 = cardAmount;
    this.z1w_1 = cardTransaction;
  }
  toString() {
    return 'PaymentIntentClass(id=' + this.o1w_1 + ', cardNumber=' + this.p1w_1 + ', fingerPrint=' + this.q1w_1 + ', expires=' + this.r1w_1 + ', cardType=' + this.s1w_1 + ', issuer=' + this.t1w_1 + ', Address=' + this.u1w_1 + ', cardBrand=' + this.v1w_1 + ', readMethod=' + this.w1w_1 + ', cardHolderName=' + this.x1w_1 + ', cardAmount=' + this.y1w_1 + ', cardTransaction=' + this.z1w_1 + ')';
  }
  hashCode() {
    var result = this.o1w_1 == null ? 0 : getStringHashCode(this.o1w_1);
    result = imul(result, 31) + (this.p1w_1 == null ? 0 : getStringHashCode(this.p1w_1)) | 0;
    result = imul(result, 31) + (this.q1w_1 == null ? 0 : getStringHashCode(this.q1w_1)) | 0;
    result = imul(result, 31) + (this.r1w_1 == null ? 0 : getStringHashCode(this.r1w_1)) | 0;
    result = imul(result, 31) + (this.s1w_1 == null ? 0 : getStringHashCode(this.s1w_1)) | 0;
    result = imul(result, 31) + (this.t1w_1 == null ? 0 : getStringHashCode(this.t1w_1)) | 0;
    result = imul(result, 31) + (this.u1w_1 == null ? 0 : getStringHashCode(this.u1w_1)) | 0;
    result = imul(result, 31) + (this.v1w_1 == null ? 0 : getStringHashCode(this.v1w_1)) | 0;
    result = imul(result, 31) + (this.w1w_1 == null ? 0 : getStringHashCode(this.w1w_1)) | 0;
    result = imul(result, 31) + (this.x1w_1 == null ? 0 : getStringHashCode(this.x1w_1)) | 0;
    result = imul(result, 31) + (this.y1w_1 == null ? 0 : getNumberHashCode(this.y1w_1)) | 0;
    result = imul(result, 31) + (this.z1w_1 == null ? 0 : getStringHashCode(this.z1w_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PaymentIntentClass))
      return false;
    var tmp0_other_with_cast = other instanceof PaymentIntentClass ? other : THROW_CCE();
    if (!(this.o1w_1 == tmp0_other_with_cast.o1w_1))
      return false;
    if (!(this.p1w_1 == tmp0_other_with_cast.p1w_1))
      return false;
    if (!(this.q1w_1 == tmp0_other_with_cast.q1w_1))
      return false;
    if (!(this.r1w_1 == tmp0_other_with_cast.r1w_1))
      return false;
    if (!(this.s1w_1 == tmp0_other_with_cast.s1w_1))
      return false;
    if (!(this.t1w_1 == tmp0_other_with_cast.t1w_1))
      return false;
    if (!(this.u1w_1 == tmp0_other_with_cast.u1w_1))
      return false;
    if (!(this.v1w_1 == tmp0_other_with_cast.v1w_1))
      return false;
    if (!(this.w1w_1 == tmp0_other_with_cast.w1w_1))
      return false;
    if (!(this.x1w_1 == tmp0_other_with_cast.x1w_1))
      return false;
    if (!equals(this.y1w_1, tmp0_other_with_cast.y1w_1))
      return false;
    if (!(this.z1w_1 == tmp0_other_with_cast.z1w_1))
      return false;
    return true;
  }
  static a1x(seen0, id, cardNumber, fingerPrint, expires, cardType, issuer, Address, cardBrand, readMethod, cardHolderName, cardAmount, cardTransaction, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_17().m1w_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.o1w_1 = null;
    else
      $this.o1w_1 = id;
    if (0 === (seen0 & 2))
      $this.p1w_1 = null;
    else
      $this.p1w_1 = cardNumber;
    if (0 === (seen0 & 4))
      $this.q1w_1 = null;
    else
      $this.q1w_1 = fingerPrint;
    if (0 === (seen0 & 8))
      $this.r1w_1 = null;
    else
      $this.r1w_1 = expires;
    if (0 === (seen0 & 16))
      $this.s1w_1 = null;
    else
      $this.s1w_1 = cardType;
    if (0 === (seen0 & 32))
      $this.t1w_1 = null;
    else
      $this.t1w_1 = issuer;
    if (0 === (seen0 & 64))
      $this.u1w_1 = null;
    else
      $this.u1w_1 = Address;
    if (0 === (seen0 & 128))
      $this.v1w_1 = null;
    else
      $this.v1w_1 = cardBrand;
    if (0 === (seen0 & 256))
      $this.w1w_1 = null;
    else
      $this.w1w_1 = readMethod;
    if (0 === (seen0 & 512))
      $this.x1w_1 = null;
    else
      $this.x1w_1 = cardHolderName;
    if (0 === (seen0 & 1024))
      $this.y1w_1 = null;
    else
      $this.y1w_1 = cardAmount;
    if (0 === (seen0 & 2048))
      $this.z1w_1 = null;
    else
      $this.z1w_1 = cardTransaction;
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
    this.b1x_1 = tmp0_serialDesc;
  }
  c1x(encoder, value) {
    var tmp0_desc = this.b1x_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.v1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.v1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.w1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.w1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.x1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.x1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.y1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.y1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.z1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, DoubleSerializer_getInstance(), value.z1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.a1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.a1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.b1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, DoubleSerializer_getInstance(), value.b1n_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.c1n_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, DoubleSerializer_getInstance(), value.c1n_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.c1x(encoder, value instanceof Tax ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.b1x_1;
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
    return Tax.d1x(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  }
  al() {
    return this.b1x_1;
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
    this.v1m_1 = id;
    this.w1m_1 = taxId;
    this.x1m_1 = taxDsc;
    this.y1m_1 = taxType;
    this.z1m_1 = taxPct;
    this.a1n_1 = storeId;
    this.b1n_1 = taxAmount;
    this.c1n_1 = taxableAmount;
  }
  e1x(id, taxId, taxDsc, taxType, taxPct, storeId, taxAmount, taxableAmount) {
    return new Tax(id, taxId, taxDsc, taxType, taxPct, storeId, taxAmount, taxableAmount);
  }
  l1p(id, taxId, taxDsc, taxType, taxPct, storeId, taxAmount, taxableAmount, $super) {
    id = id === VOID ? this.v1m_1 : id;
    taxId = taxId === VOID ? this.w1m_1 : taxId;
    taxDsc = taxDsc === VOID ? this.x1m_1 : taxDsc;
    taxType = taxType === VOID ? this.y1m_1 : taxType;
    taxPct = taxPct === VOID ? this.z1m_1 : taxPct;
    storeId = storeId === VOID ? this.a1n_1 : storeId;
    taxAmount = taxAmount === VOID ? this.b1n_1 : taxAmount;
    taxableAmount = taxableAmount === VOID ? this.c1n_1 : taxableAmount;
    return $super === VOID ? this.e1x(id, taxId, taxDsc, taxType, taxPct, storeId, taxAmount, taxableAmount) : $super.e1x.call(this, id, taxId, taxDsc, taxType, taxPct, storeId, taxAmount, taxableAmount);
  }
  toString() {
    return 'Tax(id=' + this.v1m_1 + ', taxId=' + this.w1m_1 + ', taxDsc=' + this.x1m_1 + ', taxType=' + this.y1m_1 + ', taxPct=' + this.z1m_1 + ', storeId=' + this.a1n_1 + ', taxAmount=' + this.b1n_1 + ', taxableAmount=' + this.c1n_1 + ')';
  }
  hashCode() {
    var result = this.v1m_1 == null ? 0 : getStringHashCode(this.v1m_1);
    result = imul(result, 31) + (this.w1m_1 == null ? 0 : getStringHashCode(this.w1m_1)) | 0;
    result = imul(result, 31) + (this.x1m_1 == null ? 0 : getStringHashCode(this.x1m_1)) | 0;
    result = imul(result, 31) + (this.y1m_1 == null ? 0 : getStringHashCode(this.y1m_1)) | 0;
    result = imul(result, 31) + (this.z1m_1 == null ? 0 : getNumberHashCode(this.z1m_1)) | 0;
    result = imul(result, 31) + (this.a1n_1 == null ? 0 : getStringHashCode(this.a1n_1)) | 0;
    result = imul(result, 31) + (this.b1n_1 == null ? 0 : getNumberHashCode(this.b1n_1)) | 0;
    result = imul(result, 31) + (this.c1n_1 == null ? 0 : getNumberHashCode(this.c1n_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Tax))
      return false;
    var tmp0_other_with_cast = other instanceof Tax ? other : THROW_CCE();
    if (!(this.v1m_1 == tmp0_other_with_cast.v1m_1))
      return false;
    if (!(this.w1m_1 == tmp0_other_with_cast.w1m_1))
      return false;
    if (!(this.x1m_1 == tmp0_other_with_cast.x1m_1))
      return false;
    if (!(this.y1m_1 == tmp0_other_with_cast.y1m_1))
      return false;
    if (!equals(this.z1m_1, tmp0_other_with_cast.z1m_1))
      return false;
    if (!(this.a1n_1 == tmp0_other_with_cast.a1n_1))
      return false;
    if (!equals(this.b1n_1, tmp0_other_with_cast.b1n_1))
      return false;
    if (!equals(this.c1n_1, tmp0_other_with_cast.c1n_1))
      return false;
    return true;
  }
  static d1x(seen0, id, taxId, taxDsc, taxType, taxPct, storeId, taxAmount, taxableAmount, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_18().b1x_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.v1m_1 = null;
    else
      $this.v1m_1 = id;
    if (0 === (seen0 & 2))
      $this.w1m_1 = null;
    else
      $this.w1m_1 = taxId;
    if (0 === (seen0 & 4))
      $this.x1m_1 = null;
    else
      $this.x1m_1 = taxDsc;
    if (0 === (seen0 & 8))
      $this.y1m_1 = null;
    else
      $this.y1m_1 = taxType;
    if (0 === (seen0 & 16))
      $this.z1m_1 = null;
    else
      $this.z1m_1 = taxPct;
    if (0 === (seen0 & 32))
      $this.a1n_1 = null;
    else
      $this.a1n_1 = storeId;
    if (0 === (seen0 & 64))
      $this.b1n_1 = null;
    else
      $this.b1n_1 = taxAmount;
    if (0 === (seen0 & 128))
      $this.c1n_1 = null;
    else
      $this.c1n_1 = taxableAmount;
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
    tmp.f1x_1 = [tmp_1, tmp_3, null, null, null, null, null, lazy(tmp_4, OrderPaymentDetails$Companion$$childSerializers$_anonymous__ddnqhs_1), null, null, null, null, null, null, null, null, null, null, null, null, null];
  }
}
class $serializer_19 {
  constructor() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.OrderPaymentDetails', this, 21);
    tmp0_serialDesc.aw('print_data', true);
    tmp0_serialDesc.aw('transaction_detail', true);
    tmp0_serialDesc.aw('amount', true);
    tmp0_serialDesc.aw('percent', true);
    tmp0_serialDesc.aw('payee_name', true);
    tmp0_serialDesc.aw('status', true);
    tmp0_serialDesc.aw('name', true);
    tmp0_serialDesc.aw('payment_intent', true);
    tmp0_serialDesc.aw('Change', true);
    tmp0_serialDesc.aw('tnd_code', true);
    tmp0_serialDesc.aw('tnd_des', true);
    tmp0_serialDesc.aw('tnd_type', true);
    tmp0_serialDesc.aw('payment_type', true);
    tmp0_serialDesc.aw('paxResponse', true);
    tmp0_serialDesc.aw('cloverPaymentResponse', true);
    tmp0_serialDesc.aw('razorPayEdcResponse', true);
    tmp0_serialDesc.aw('magTekPaymentResponse', true);
    tmp0_serialDesc.aw('pineTransactionStatusResponse', true);
    tmp0_serialDesc.aw('transactionSummary', true);
    tmp0_serialDesc.aw('pine_digi_qr_status_response', true);
    tmp0_serialDesc.aw('transResponse', true);
    this.g1x_1 = tmp0_serialDesc;
  }
  h1x(encoder, value) {
    var tmp0_desc = this.g1x_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().f1x_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.i1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, tmp2_cached[0].g2(), value.i1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.j1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, tmp2_cached[1].g2(), value.j1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.k1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, DoubleSerializer_getInstance(), value.k1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.l1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, DoubleSerializer_getInstance(), value.l1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.m1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.m1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.n1x_1 === false)) {
      tmp1_output.zp(tmp0_desc, 5, value.n1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.o1x_1 === '')) {
      tmp1_output.hq(tmp0_desc, 6, value.o1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.p1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, tmp2_cached[7].g2(), value.p1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.q1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, DoubleSerializer_getInstance(), value.q1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.r1x_1 === '')) {
      tmp1_output.hq(tmp0_desc, 9, value.r1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.s1x_1 === '')) {
      tmp1_output.hq(tmp0_desc, 10, value.s1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.t1x_1 === '')) {
      tmp1_output.hq(tmp0_desc, 11, value.t1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.u1x_1 === '')) {
      tmp1_output.hq(tmp0_desc, 12, value.u1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.v1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, $serializer_getInstance_20(), value.v1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.w1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 14, $serializer_getInstance_21(), value.w1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.x1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 15, $serializer_getInstance_28(), value.x1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !(value.y1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 16, $serializer_getInstance_29(), value.y1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !(value.z1x_1 == null)) {
      tmp1_output.lq(tmp0_desc, 17, $serializer_getInstance_34(), value.z1x_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !(value.a1y_1 == null)) {
      tmp1_output.lq(tmp0_desc, 18, $serializer_getInstance_36(), value.a1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !(value.b1y_1 == null)) {
      tmp1_output.lq(tmp0_desc, 19, $serializer_getInstance_37(), value.b1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !(value.c1y_1 == null)) {
      tmp1_output.lq(tmp0_desc, 20, $serializer_getInstance_40(), value.c1y_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.h1x(encoder, value instanceof OrderPaymentDetails ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.g1x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = false;
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
    var tmp25_input = decoder.so(tmp0_desc);
    var tmp26_cached = Companion_getInstance_19().f1x_1;
    if (tmp25_input.ip()) {
      tmp4_local0 = tmp25_input.gp(tmp0_desc, 0, tmp26_cached[0].g2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp25_input.gp(tmp0_desc, 1, tmp26_cached[1].g2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp25_input.gp(tmp0_desc, 2, DoubleSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp25_input.gp(tmp0_desc, 3, DoubleSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp25_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp25_input.uo(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp25_input.cp(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp25_input.gp(tmp0_desc, 7, tmp26_cached[7].g2(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp25_input.gp(tmp0_desc, 8, DoubleSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp25_input.cp(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp25_input.cp(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp25_input.cp(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp25_input.cp(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp25_input.gp(tmp0_desc, 13, $serializer_getInstance_20(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp25_input.gp(tmp0_desc, 14, $serializer_getInstance_21(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp25_input.gp(tmp0_desc, 15, $serializer_getInstance_28(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp25_input.gp(tmp0_desc, 16, $serializer_getInstance_29(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp25_input.gp(tmp0_desc, 17, $serializer_getInstance_34(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp25_input.gp(tmp0_desc, 18, $serializer_getInstance_36(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp25_input.gp(tmp0_desc, 19, $serializer_getInstance_37(), tmp23_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp25_input.gp(tmp0_desc, 20, $serializer_getInstance_40(), tmp24_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp25_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp25_input.gp(tmp0_desc, 0, tmp26_cached[0].g2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp25_input.gp(tmp0_desc, 1, tmp26_cached[1].g2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp25_input.gp(tmp0_desc, 2, DoubleSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp25_input.gp(tmp0_desc, 3, DoubleSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp25_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp25_input.uo(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp25_input.cp(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp25_input.gp(tmp0_desc, 7, tmp26_cached[7].g2(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp25_input.gp(tmp0_desc, 8, DoubleSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp25_input.cp(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp25_input.cp(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp25_input.cp(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp25_input.cp(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp25_input.gp(tmp0_desc, 13, $serializer_getInstance_20(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp25_input.gp(tmp0_desc, 14, $serializer_getInstance_21(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp25_input.gp(tmp0_desc, 15, $serializer_getInstance_28(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp25_input.gp(tmp0_desc, 16, $serializer_getInstance_29(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp25_input.gp(tmp0_desc, 17, $serializer_getInstance_34(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp25_input.gp(tmp0_desc, 18, $serializer_getInstance_36(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp25_input.gp(tmp0_desc, 19, $serializer_getInstance_37(), tmp23_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp25_input.gp(tmp0_desc, 20, $serializer_getInstance_40(), tmp24_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp25_input.to(tmp0_desc);
    return OrderPaymentDetails.d1y(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, null);
  }
  al() {
    return this.g1x_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_19().f1x_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].g2()), get_nullable(tmp0_cached[1].g2()), get_nullable(DoubleSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(tmp0_cached[7].g2()), get_nullable(DoubleSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable($serializer_getInstance_20()), get_nullable($serializer_getInstance_21()), get_nullable($serializer_getInstance_28()), get_nullable($serializer_getInstance_29()), get_nullable($serializer_getInstance_34()), get_nullable($serializer_getInstance_36()), get_nullable($serializer_getInstance_37()), get_nullable($serializer_getInstance_40())];
  }
}
class OrderPaymentDetails {
  constructor(printData, transactionDetail, amount, percent, payeeName, status, name, paymentIntent, change, tndCode, tndDes, tndType, paymentType, paxResponse, cloverPaymentResponse, razorPayEdcResponse, magTekPaymentResponse, pineTransactionStatusResponse, transactionSummary, pineDigiQrStatusResponse, transResponse) {
    Companion_getInstance_19();
    printData = printData === VOID ? null : printData;
    transactionDetail = transactionDetail === VOID ? null : transactionDetail;
    amount = amount === VOID ? null : amount;
    percent = percent === VOID ? null : percent;
    payeeName = payeeName === VOID ? null : payeeName;
    status = status === VOID ? false : status;
    name = name === VOID ? '' : name;
    paymentIntent = paymentIntent === VOID ? null : paymentIntent;
    change = change === VOID ? null : change;
    tndCode = tndCode === VOID ? '' : tndCode;
    tndDes = tndDes === VOID ? '' : tndDes;
    tndType = tndType === VOID ? '' : tndType;
    paymentType = paymentType === VOID ? '' : paymentType;
    paxResponse = paxResponse === VOID ? null : paxResponse;
    cloverPaymentResponse = cloverPaymentResponse === VOID ? null : cloverPaymentResponse;
    razorPayEdcResponse = razorPayEdcResponse === VOID ? null : razorPayEdcResponse;
    magTekPaymentResponse = magTekPaymentResponse === VOID ? null : magTekPaymentResponse;
    pineTransactionStatusResponse = pineTransactionStatusResponse === VOID ? null : pineTransactionStatusResponse;
    transactionSummary = transactionSummary === VOID ? null : transactionSummary;
    pineDigiQrStatusResponse = pineDigiQrStatusResponse === VOID ? null : pineDigiQrStatusResponse;
    transResponse = transResponse === VOID ? null : transResponse;
    this.i1x_1 = printData;
    this.j1x_1 = transactionDetail;
    this.k1x_1 = amount;
    this.l1x_1 = percent;
    this.m1x_1 = payeeName;
    this.n1x_1 = status;
    this.o1x_1 = name;
    this.p1x_1 = paymentIntent;
    this.q1x_1 = change;
    this.r1x_1 = tndCode;
    this.s1x_1 = tndDes;
    this.t1x_1 = tndType;
    this.u1x_1 = paymentType;
    this.v1x_1 = paxResponse;
    this.w1x_1 = cloverPaymentResponse;
    this.x1x_1 = razorPayEdcResponse;
    this.y1x_1 = magTekPaymentResponse;
    this.z1x_1 = pineTransactionStatusResponse;
    this.a1y_1 = transactionSummary;
    this.b1y_1 = pineDigiQrStatusResponse;
    this.c1y_1 = transResponse;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderPaymentDetails))
      THROW_CCE();
    if (!(this.m1x_1 == other.m1x_1))
      return false;
    if (!(this.n1x_1 === other.n1x_1))
      return false;
    if (!(this.o1x_1 === other.o1x_1))
      return false;
    return true;
  }
  hashCode() {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.m1x_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + getBooleanHashCode(this.n1x_1) | 0;
    result = imul(31, result) + getStringHashCode(this.o1x_1) | 0;
    return result;
  }
  toString() {
    return 'OrderPaymentDetails(printData=' + toString_0(this.i1x_1) + ', transactionDetail=' + toString_0(this.j1x_1) + ', amount=' + this.k1x_1 + ', percent=' + this.l1x_1 + ', payeeName=' + this.m1x_1 + ', status=' + this.n1x_1 + ', name=' + this.o1x_1 + ', paymentIntent=' + toString_0(this.p1x_1) + ', change=' + this.q1x_1 + ', tndCode=' + this.r1x_1 + ', tndDes=' + this.s1x_1 + ', tndType=' + this.t1x_1 + ', paymentType=' + this.u1x_1 + ', paxResponse=' + toString_0(this.v1x_1) + ', cloverPaymentResponse=' + toString_0(this.w1x_1) + ', razorPayEdcResponse=' + toString_0(this.x1x_1) + ', magTekPaymentResponse=' + toString_0(this.y1x_1) + ', pineTransactionStatusResponse=' + toString_0(this.z1x_1) + ', transactionSummary=' + toString_0(this.a1y_1) + ', pineDigiQrStatusResponse=' + toString_0(this.b1y_1) + ', transResponse=' + toString_0(this.c1y_1) + ')';
  }
  static d1y(seen0, printData, transactionDetail, amount, percent, payeeName, status, name, paymentIntent, change, tndCode, tndDes, tndType, paymentType, paxResponse, cloverPaymentResponse, razorPayEdcResponse, magTekPaymentResponse, pineTransactionStatusResponse, transactionSummary, pineDigiQrStatusResponse, transResponse, serializationConstructorMarker) {
    Companion_getInstance_19();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_19().g1x_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.i1x_1 = null;
    else
      $this.i1x_1 = printData;
    if (0 === (seen0 & 2))
      $this.j1x_1 = null;
    else
      $this.j1x_1 = transactionDetail;
    if (0 === (seen0 & 4))
      $this.k1x_1 = null;
    else
      $this.k1x_1 = amount;
    if (0 === (seen0 & 8))
      $this.l1x_1 = null;
    else
      $this.l1x_1 = percent;
    if (0 === (seen0 & 16))
      $this.m1x_1 = null;
    else
      $this.m1x_1 = payeeName;
    if (0 === (seen0 & 32))
      $this.n1x_1 = false;
    else
      $this.n1x_1 = status;
    if (0 === (seen0 & 64))
      $this.o1x_1 = '';
    else
      $this.o1x_1 = name;
    if (0 === (seen0 & 128))
      $this.p1x_1 = null;
    else
      $this.p1x_1 = paymentIntent;
    if (0 === (seen0 & 256))
      $this.q1x_1 = null;
    else
      $this.q1x_1 = change;
    if (0 === (seen0 & 512))
      $this.r1x_1 = '';
    else
      $this.r1x_1 = tndCode;
    if (0 === (seen0 & 1024))
      $this.s1x_1 = '';
    else
      $this.s1x_1 = tndDes;
    if (0 === (seen0 & 2048))
      $this.t1x_1 = '';
    else
      $this.t1x_1 = tndType;
    if (0 === (seen0 & 4096))
      $this.u1x_1 = '';
    else
      $this.u1x_1 = paymentType;
    if (0 === (seen0 & 8192))
      $this.v1x_1 = null;
    else
      $this.v1x_1 = paxResponse;
    if (0 === (seen0 & 16384))
      $this.w1x_1 = null;
    else
      $this.w1x_1 = cloverPaymentResponse;
    if (0 === (seen0 & 32768))
      $this.x1x_1 = null;
    else
      $this.x1x_1 = razorPayEdcResponse;
    if (0 === (seen0 & 65536))
      $this.y1x_1 = null;
    else
      $this.y1x_1 = magTekPaymentResponse;
    if (0 === (seen0 & 131072))
      $this.z1x_1 = null;
    else
      $this.z1x_1 = pineTransactionStatusResponse;
    if (0 === (seen0 & 262144))
      $this.a1y_1 = null;
    else
      $this.a1y_1 = transactionSummary;
    if (0 === (seen0 & 524288))
      $this.b1y_1 = null;
    else
      $this.b1y_1 = pineDigiQrStatusResponse;
    if (0 === (seen0 & 1048576))
      $this.c1y_1 = null;
    else
      $this.c1y_1 = transResponse;
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
    this.e1y_1 = tmp0_serialDesc;
  }
  f1y(encoder, value) {
    var tmp0_desc = this.e1y_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.g1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.g1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.h1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.h1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.i1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.i1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.j1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.j1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.k1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.k1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.l1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 5, value.l1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.m1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 6, value.m1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.n1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 7, value.n1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.o1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 8, value.o1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.p1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 9, value.p1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.q1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 10, value.q1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.r1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 11, value.r1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.s1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 12, value.s1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.t1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 13, value.t1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.u1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 14, value.u1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.v1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 15, value.v1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !(value.w1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 16, value.w1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !(value.x1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 17, value.x1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !(value.y1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 18, value.y1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !(value.z1y_1 === '')) {
      tmp1_output.hq(tmp0_desc, 19, value.z1y_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !(value.a1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 20, value.a1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.b1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 21, value.b1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 22) ? true : !(value.c1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 22, value.c1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 23) ? true : !(value.d1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 23, value.d1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 24) ? true : !(value.e1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 24, value.e1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 25) ? true : !(value.f1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 25, value.f1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 26) ? true : !(value.g1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 26, value.g1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 27) ? true : !(value.h1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 27, value.h1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 28) ? true : !(value.i1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 28, value.i1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 29) ? true : !(value.j1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 29, value.j1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 30) ? true : !(value.k1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 30, value.k1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 31) ? true : !(value.l1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 31, value.l1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 32) ? true : !(value.m1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 32, value.m1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 33) ? true : !(value.n1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 33, value.n1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 34) ? true : !(value.o1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 34, value.o1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 35) ? true : !(value.p1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 35, value.p1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 36) ? true : !(value.q1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 36, value.q1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 37) ? true : !(value.r1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 37, value.r1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 38) ? true : !(value.s1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 38, value.s1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 39) ? true : !(value.t1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 39, value.t1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 40) ? true : !(value.u1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 40, value.u1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 41) ? true : !(value.v1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 41, value.v1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 42) ? true : !(value.w1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 42, value.w1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 43) ? true : !(value.x1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 43, value.x1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 44) ? true : !(value.y1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 44, value.y1z_1);
    }
    if (tmp1_output.pq(tmp0_desc, 45) ? true : !(value.z1z_1 === '')) {
      tmp1_output.hq(tmp0_desc, 45, value.z1z_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.f1y(encoder, value instanceof PaxPaymentResponse ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.e1y_1;
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
    return PaxPaymentResponse.a20(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, tmp49_local44, tmp50_local45, null);
  }
  al() {
    return this.e1y_1;
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
    this.g1y_1 = authCode;
    this.h1y_1 = approvedAmount;
    this.i1y_1 = avsResponse;
    this.j1y_1 = bogusAccountNum;
    this.k1y_1 = cardType;
    this.l1y_1 = cvResponse;
    this.m1y_1 = hostCode;
    this.n1y_1 = hostResponse;
    this.o1y_1 = message;
    this.p1y_1 = refNum;
    this.q1y_1 = rawResponse;
    this.r1y_1 = remainingBalance;
    this.s1y_1 = extraBalance;
    this.t1y_1 = requestedAmount;
    this.u1y_1 = resultCode;
    this.v1y_1 = resultTxt;
    this.w1y_1 = timestamp;
    this.x1y_1 = sigFileName;
    this.y1y_1 = signData;
    this.z1y_1 = transactionIntegrityClass;
    this.a1z_1 = extData;
    this.b1z_1 = giftCardType;
    this.c1z_1 = transactionRemainingAmount;
    this.d1z_1 = debitAccountType;
    this.e1z_1 = hostDetailedMessage;
    this.f1z_1 = gatewayTransactionID;
    this.g1z_1 = retrievalReferenceNumber;
    this.h1z_1 = maskedPAN;
    this.i1z_1 = track1Data;
    this.j1z_1 = track2Data;
    this.k1z_1 = track3Data;
    this.l1z_1 = edcType;
    this.m1z_1 = paymentService2000;
    this.n1z_1 = authorizationResponse;
    this.o1z_1 = issuerResponseCode;
    this.p1z_1 = ecrTransID;
    this.q1z_1 = approvedTipAmount;
    this.r1z_1 = approvedCashBackAmount;
    this.s1z_1 = approvedMerchantFee;
    this.t1z_1 = approvedTaxAmount;
    this.u1z_1 = paymentAccountReferenceID;
    this.v1z_1 = payloadData;
    this.w1z_1 = hostTimeStamp;
    this.x1z_1 = hostAccount;
    this.y1z_1 = hostCardType;
    this.z1z_1 = cardBin;
  }
  toString() {
    return 'PaxPaymentResponse(authCode=' + this.g1y_1 + ', approvedAmount=' + this.h1y_1 + ', avsResponse=' + this.i1y_1 + ', bogusAccountNum=' + this.j1y_1 + ', cardType=' + this.k1y_1 + ', cvResponse=' + this.l1y_1 + ', hostCode=' + this.m1y_1 + ', hostResponse=' + this.n1y_1 + ', message=' + this.o1y_1 + ', refNum=' + this.p1y_1 + ', rawResponse=' + this.q1y_1 + ', remainingBalance=' + this.r1y_1 + ', extraBalance=' + this.s1y_1 + ', requestedAmount=' + this.t1y_1 + ', resultCode=' + this.u1y_1 + ', resultTxt=' + this.v1y_1 + ', timestamp=' + this.w1y_1 + ', sigFileName=' + this.x1y_1 + ', signData=' + this.y1y_1 + ', transactionIntegrityClass=' + this.z1y_1 + ', extData=' + this.a1z_1 + ', giftCardType=' + this.b1z_1 + ', transactionRemainingAmount=' + this.c1z_1 + ', debitAccountType=' + this.d1z_1 + ', hostDetailedMessage=' + this.e1z_1 + ', gatewayTransactionID=' + this.f1z_1 + ', retrievalReferenceNumber=' + this.g1z_1 + ', maskedPAN=' + this.h1z_1 + ', track1Data=' + this.i1z_1 + ', track2Data=' + this.j1z_1 + ', track3Data=' + this.k1z_1 + ', edcType=' + this.l1z_1 + ', paymentService2000=' + this.m1z_1 + ', authorizationResponse=' + this.n1z_1 + ', issuerResponseCode=' + this.o1z_1 + ', ecrTransID=' + this.p1z_1 + ', approvedTipAmount=' + this.q1z_1 + ', approvedCashBackAmount=' + this.r1z_1 + ', approvedMerchantFee=' + this.s1z_1 + ', approvedTaxAmount=' + this.t1z_1 + ', paymentAccountReferenceID=' + this.u1z_1 + ', payloadData=' + this.v1z_1 + ', hostTimeStamp=' + this.w1z_1 + ', hostAccount=' + this.x1z_1 + ', hostCardType=' + this.y1z_1 + ', cardBin=' + this.z1z_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.g1y_1);
    result = imul(result, 31) + getStringHashCode(this.h1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.n1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.o1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.p1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.q1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.r1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.s1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.t1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u1y_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v1y_1) | 0;
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
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PaxPaymentResponse))
      return false;
    var tmp0_other_with_cast = other instanceof PaxPaymentResponse ? other : THROW_CCE();
    if (!(this.g1y_1 === tmp0_other_with_cast.g1y_1))
      return false;
    if (!(this.h1y_1 === tmp0_other_with_cast.h1y_1))
      return false;
    if (!(this.i1y_1 === tmp0_other_with_cast.i1y_1))
      return false;
    if (!(this.j1y_1 === tmp0_other_with_cast.j1y_1))
      return false;
    if (!(this.k1y_1 === tmp0_other_with_cast.k1y_1))
      return false;
    if (!(this.l1y_1 === tmp0_other_with_cast.l1y_1))
      return false;
    if (!(this.m1y_1 === tmp0_other_with_cast.m1y_1))
      return false;
    if (!(this.n1y_1 === tmp0_other_with_cast.n1y_1))
      return false;
    if (!(this.o1y_1 === tmp0_other_with_cast.o1y_1))
      return false;
    if (!(this.p1y_1 === tmp0_other_with_cast.p1y_1))
      return false;
    if (!(this.q1y_1 === tmp0_other_with_cast.q1y_1))
      return false;
    if (!(this.r1y_1 === tmp0_other_with_cast.r1y_1))
      return false;
    if (!(this.s1y_1 === tmp0_other_with_cast.s1y_1))
      return false;
    if (!(this.t1y_1 === tmp0_other_with_cast.t1y_1))
      return false;
    if (!(this.u1y_1 === tmp0_other_with_cast.u1y_1))
      return false;
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
    return true;
  }
  static a20(seen0, seen1, authCode, approvedAmount, avsResponse, bogusAccountNum, cardType, cvResponse, hostCode, hostResponse, message, refNum, rawResponse, remainingBalance, extraBalance, requestedAmount, resultCode, resultTxt, timestamp, sigFileName, signData, transactionIntegrityClass, extData, giftCardType, transactionRemainingAmount, debitAccountType, hostDetailedMessage, gatewayTransactionID, retrievalReferenceNumber, maskedPAN, track1Data, track2Data, track3Data, edcType, paymentService2000, authorizationResponse, issuerResponseCode, ecrTransID, approvedTipAmount, approvedCashBackAmount, approvedMerchantFee, approvedTaxAmount, paymentAccountReferenceID, payloadData, hostTimeStamp, hostAccount, hostCardType, cardBin, serializationConstructorMarker) {
    if (!!(!(0 === (0 & seen0)) | !(0 === (0 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([0, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_20().e1y_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.g1y_1 = '';
    else
      $this.g1y_1 = authCode;
    if (0 === (seen0 & 2))
      $this.h1y_1 = '';
    else
      $this.h1y_1 = approvedAmount;
    if (0 === (seen0 & 4))
      $this.i1y_1 = '';
    else
      $this.i1y_1 = avsResponse;
    if (0 === (seen0 & 8))
      $this.j1y_1 = '';
    else
      $this.j1y_1 = bogusAccountNum;
    if (0 === (seen0 & 16))
      $this.k1y_1 = '';
    else
      $this.k1y_1 = cardType;
    if (0 === (seen0 & 32))
      $this.l1y_1 = '';
    else
      $this.l1y_1 = cvResponse;
    if (0 === (seen0 & 64))
      $this.m1y_1 = '';
    else
      $this.m1y_1 = hostCode;
    if (0 === (seen0 & 128))
      $this.n1y_1 = '';
    else
      $this.n1y_1 = hostResponse;
    if (0 === (seen0 & 256))
      $this.o1y_1 = '';
    else
      $this.o1y_1 = message;
    if (0 === (seen0 & 512))
      $this.p1y_1 = '';
    else
      $this.p1y_1 = refNum;
    if (0 === (seen0 & 1024))
      $this.q1y_1 = '';
    else
      $this.q1y_1 = rawResponse;
    if (0 === (seen0 & 2048))
      $this.r1y_1 = '';
    else
      $this.r1y_1 = remainingBalance;
    if (0 === (seen0 & 4096))
      $this.s1y_1 = '';
    else
      $this.s1y_1 = extraBalance;
    if (0 === (seen0 & 8192))
      $this.t1y_1 = '';
    else
      $this.t1y_1 = requestedAmount;
    if (0 === (seen0 & 16384))
      $this.u1y_1 = '';
    else
      $this.u1y_1 = resultCode;
    if (0 === (seen0 & 32768))
      $this.v1y_1 = '';
    else
      $this.v1y_1 = resultTxt;
    if (0 === (seen0 & 65536))
      $this.w1y_1 = '';
    else
      $this.w1y_1 = timestamp;
    if (0 === (seen0 & 131072))
      $this.x1y_1 = '';
    else
      $this.x1y_1 = sigFileName;
    if (0 === (seen0 & 262144))
      $this.y1y_1 = '';
    else
      $this.y1y_1 = signData;
    if (0 === (seen0 & 524288))
      $this.z1y_1 = '';
    else
      $this.z1y_1 = transactionIntegrityClass;
    if (0 === (seen0 & 1048576))
      $this.a1z_1 = '';
    else
      $this.a1z_1 = extData;
    if (0 === (seen0 & 2097152))
      $this.b1z_1 = '';
    else
      $this.b1z_1 = giftCardType;
    if (0 === (seen0 & 4194304))
      $this.c1z_1 = '';
    else
      $this.c1z_1 = transactionRemainingAmount;
    if (0 === (seen0 & 8388608))
      $this.d1z_1 = '';
    else
      $this.d1z_1 = debitAccountType;
    if (0 === (seen0 & 16777216))
      $this.e1z_1 = '';
    else
      $this.e1z_1 = hostDetailedMessage;
    if (0 === (seen0 & 33554432))
      $this.f1z_1 = '';
    else
      $this.f1z_1 = gatewayTransactionID;
    if (0 === (seen0 & 67108864))
      $this.g1z_1 = '';
    else
      $this.g1z_1 = retrievalReferenceNumber;
    if (0 === (seen0 & 134217728))
      $this.h1z_1 = '';
    else
      $this.h1z_1 = maskedPAN;
    if (0 === (seen0 & 268435456))
      $this.i1z_1 = '';
    else
      $this.i1z_1 = track1Data;
    if (0 === (seen0 & 536870912))
      $this.j1z_1 = '';
    else
      $this.j1z_1 = track2Data;
    if (0 === (seen0 & 1073741824))
      $this.k1z_1 = '';
    else
      $this.k1z_1 = track3Data;
    if (0 === (seen0 & -2147483648))
      $this.l1z_1 = '';
    else
      $this.l1z_1 = edcType;
    if (0 === (seen1 & 1))
      $this.m1z_1 = '';
    else
      $this.m1z_1 = paymentService2000;
    if (0 === (seen1 & 2))
      $this.n1z_1 = '';
    else
      $this.n1z_1 = authorizationResponse;
    if (0 === (seen1 & 4))
      $this.o1z_1 = '';
    else
      $this.o1z_1 = issuerResponseCode;
    if (0 === (seen1 & 8))
      $this.p1z_1 = '';
    else
      $this.p1z_1 = ecrTransID;
    if (0 === (seen1 & 16))
      $this.q1z_1 = '';
    else
      $this.q1z_1 = approvedTipAmount;
    if (0 === (seen1 & 32))
      $this.r1z_1 = '';
    else
      $this.r1z_1 = approvedCashBackAmount;
    if (0 === (seen1 & 64))
      $this.s1z_1 = '';
    else
      $this.s1z_1 = approvedMerchantFee;
    if (0 === (seen1 & 128))
      $this.t1z_1 = '';
    else
      $this.t1z_1 = approvedTaxAmount;
    if (0 === (seen1 & 256))
      $this.u1z_1 = '';
    else
      $this.u1z_1 = paymentAccountReferenceID;
    if (0 === (seen1 & 512))
      $this.v1z_1 = '';
    else
      $this.v1z_1 = payloadData;
    if (0 === (seen1 & 1024))
      $this.w1z_1 = '';
    else
      $this.w1z_1 = hostTimeStamp;
    if (0 === (seen1 & 2048))
      $this.x1z_1 = '';
    else
      $this.x1z_1 = hostAccount;
    if (0 === (seen1 & 4096))
      $this.y1z_1 = '';
    else
      $this.y1z_1 = hostCardType;
    if (0 === (seen1 & 8192))
      $this.z1z_1 = '';
    else
      $this.z1z_1 = cardBin;
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
    this.b20_1 = tmp0_serialDesc;
  }
  c20(encoder, value) {
    var tmp0_desc = this.b20_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.d20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.d20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.e20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.e20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.f20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.f20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.g20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.g20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.h20_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, $serializer_getInstance_22(), value.h20_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.c20(encoder, value instanceof CloverPaymentResponse ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.b20_1;
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
    return CloverPaymentResponse.i20(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  al() {
    return this.b20_1;
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
    this.d20_1 = message;
    this.e20_1 = requestId;
    this.f20_1 = requestType;
    this.g20_1 = type;
    this.h20_1 = payment;
  }
  toString() {
    return 'CloverPaymentResponse(message=' + this.d20_1 + ', requestId=' + this.e20_1 + ', requestType=' + this.f20_1 + ', type=' + this.g20_1 + ', payment=' + toString_0(this.h20_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.d20_1);
    result = imul(result, 31) + getStringHashCode(this.e20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g20_1) | 0;
    result = imul(result, 31) + (this.h20_1 == null ? 0 : this.h20_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CloverPaymentResponse))
      return false;
    var tmp0_other_with_cast = other instanceof CloverPaymentResponse ? other : THROW_CCE();
    if (!(this.d20_1 === tmp0_other_with_cast.d20_1))
      return false;
    if (!(this.e20_1 === tmp0_other_with_cast.e20_1))
      return false;
    if (!(this.f20_1 === tmp0_other_with_cast.f20_1))
      return false;
    if (!(this.g20_1 === tmp0_other_with_cast.g20_1))
      return false;
    if (!equals(this.h20_1, tmp0_other_with_cast.h20_1))
      return false;
    return true;
  }
  static i20(seen0, message, requestId, requestType, type, payment, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_21().b20_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.d20_1 = '';
    else
      $this.d20_1 = message;
    if (0 === (seen0 & 2))
      $this.e20_1 = '';
    else
      $this.e20_1 = requestId;
    if (0 === (seen0 & 4))
      $this.f20_1 = '';
    else
      $this.f20_1 = requestType;
    if (0 === (seen0 & 8))
      $this.g20_1 = '';
    else
      $this.g20_1 = type;
    if (0 === (seen0 & 16))
      $this.h20_1 = null;
    else
      $this.h20_1 = payment;
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
    this.j20_1 = tmp0_serialDesc;
  }
  k20(encoder, value) {
    var tmp0_desc = this.j20_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !value.l20_1.equals(new Long(0, 0))) {
      tmp1_output.dq(tmp0_desc, 0, value.l20_1);
    }
    tmp1_output.jq(tmp0_desc, 1, $serializer_getInstance_23(), value.m20_1);
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !value.n20_1.equals(new Long(0, 0))) {
      tmp1_output.dq(tmp0_desc, 2, value.n20_1);
    }
    tmp1_output.jq(tmp0_desc, 3, $serializer_getInstance_25(), value.o20_1);
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.p20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.p20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.q20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 5, value.q20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.r20_1 === false)) {
      tmp1_output.zp(tmp0_desc, 6, value.r20_1);
    }
    tmp1_output.jq(tmp0_desc, 7, $serializer_getInstance_26(), value.s20_1);
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.t20_1 === '')) {
      tmp1_output.hq(tmp0_desc, 8, value.t20_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !value.u20_1.equals(new Long(0, 0))) {
      tmp1_output.dq(tmp0_desc, 9, value.u20_1);
    }
    tmp1_output.jq(tmp0_desc, 10, $serializer_getInstance_27(), value.v20_1);
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !value.w20_1.equals(new Long(0, 0))) {
      tmp1_output.dq(tmp0_desc, 11, value.w20_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.k20(encoder, value instanceof PaymentInfo ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.j20_1;
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
    return PaymentInfo.x20(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, null);
  }
  al() {
    return this.j20_1;
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
    return 'PaymentInfo(amount=' + this.l20_1.toString() + ', cardTransaction=' + this.m20_1.toString() + ', createdTime=' + this.n20_1.toString() + ', employee=' + this.o20_1.toString() + ', externalPaymentId=' + this.p20_1 + ', id=' + this.q20_1 + ', offline=' + this.r20_1 + ', order=' + this.s20_1.toString() + ', result=' + this.t20_1 + ', taxAmount=' + this.u20_1.toString() + ', tender=' + this.v20_1.toString() + ', tipAmount=' + this.w20_1.toString() + ')';
  }
  hashCode() {
    var result = this.l20_1.hashCode();
    result = imul(result, 31) + this.m20_1.hashCode() | 0;
    result = imul(result, 31) + this.n20_1.hashCode() | 0;
    result = imul(result, 31) + this.o20_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.p20_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.q20_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.r20_1) | 0;
    result = imul(result, 31) + this.s20_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.t20_1) | 0;
    result = imul(result, 31) + this.u20_1.hashCode() | 0;
    result = imul(result, 31) + this.v20_1.hashCode() | 0;
    result = imul(result, 31) + this.w20_1.hashCode() | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PaymentInfo))
      return false;
    var tmp0_other_with_cast = other instanceof PaymentInfo ? other : THROW_CCE();
    if (!this.l20_1.equals(tmp0_other_with_cast.l20_1))
      return false;
    if (!this.m20_1.equals(tmp0_other_with_cast.m20_1))
      return false;
    if (!this.n20_1.equals(tmp0_other_with_cast.n20_1))
      return false;
    if (!this.o20_1.equals(tmp0_other_with_cast.o20_1))
      return false;
    if (!(this.p20_1 === tmp0_other_with_cast.p20_1))
      return false;
    if (!(this.q20_1 === tmp0_other_with_cast.q20_1))
      return false;
    if (!(this.r20_1 === tmp0_other_with_cast.r20_1))
      return false;
    if (!this.s20_1.equals(tmp0_other_with_cast.s20_1))
      return false;
    if (!(this.t20_1 === tmp0_other_with_cast.t20_1))
      return false;
    if (!this.u20_1.equals(tmp0_other_with_cast.u20_1))
      return false;
    if (!this.v20_1.equals(tmp0_other_with_cast.v20_1))
      return false;
    if (!this.w20_1.equals(tmp0_other_with_cast.w20_1))
      return false;
    return true;
  }
  static x20(seen0, amount, cardTransaction, createdTime, employee, externalPaymentId, id, offline, order, result, taxAmount, tender, tipAmount, serializationConstructorMarker) {
    if (!(1162 === (1162 & seen0))) {
      throwMissingFieldException(seen0, 1162, $serializer_getInstance_22().j20_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.l20_1 = new Long(0, 0);
    else
      $this.l20_1 = amount;
    $this.m20_1 = cardTransaction;
    if (0 === (seen0 & 4))
      $this.n20_1 = new Long(0, 0);
    else
      $this.n20_1 = createdTime;
    $this.o20_1 = employee;
    if (0 === (seen0 & 16))
      $this.p20_1 = '';
    else
      $this.p20_1 = externalPaymentId;
    if (0 === (seen0 & 32))
      $this.q20_1 = '';
    else
      $this.q20_1 = id;
    if (0 === (seen0 & 64))
      $this.r20_1 = false;
    else
      $this.r20_1 = offline;
    $this.s20_1 = order;
    if (0 === (seen0 & 256))
      $this.t20_1 = '';
    else
      $this.t20_1 = result;
    if (0 === (seen0 & 512))
      $this.u20_1 = new Long(0, 0);
    else
      $this.u20_1 = taxAmount;
    $this.v20_1 = tender;
    if (0 === (seen0 & 2048))
      $this.w20_1 = new Long(0, 0);
    else
      $this.w20_1 = tipAmount;
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
    this.y20_1 = tmp0_serialDesc;
  }
  z20(encoder, value) {
    var tmp0_desc = this.y20_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.a21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.a21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.b21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.b21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.c21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.c21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.d21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.d21_1);
    }
    tmp1_output.jq(tmp0_desc, 4, $serializer_getInstance_24(), value.e21_1);
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.f21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 5, value.f21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.g21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 6, value.g21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.h21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 7, value.h21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.i21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 8, value.i21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.j21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 9, value.j21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.k21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 10, value.k21_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.l21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 11, value.l21_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.z20(encoder, value instanceof CardTransaction ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.y20_1;
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
    return CardTransaction.m21(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, null);
  }
  al() {
    return this.y20_1;
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
    return 'CardTransaction(authCode=' + this.a21_1 + ', cardType=' + this.b21_1 + ', cardholderName=' + this.c21_1 + ', entryType=' + this.d21_1 + ', extra=' + this.e21_1.toString() + ', first6=' + this.f21_1 + ', last4=' + this.g21_1 + ', referenceId=' + this.h21_1 + ', state=' + this.i21_1 + ', token=' + this.j21_1 + ', transactionNo=' + this.k21_1 + ', type=' + this.l21_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.a21_1);
    result = imul(result, 31) + getStringHashCode(this.b21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d21_1) | 0;
    result = imul(result, 31) + this.e21_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.f21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l21_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CardTransaction))
      return false;
    var tmp0_other_with_cast = other instanceof CardTransaction ? other : THROW_CCE();
    if (!(this.a21_1 === tmp0_other_with_cast.a21_1))
      return false;
    if (!(this.b21_1 === tmp0_other_with_cast.b21_1))
      return false;
    if (!(this.c21_1 === tmp0_other_with_cast.c21_1))
      return false;
    if (!(this.d21_1 === tmp0_other_with_cast.d21_1))
      return false;
    if (!this.e21_1.equals(tmp0_other_with_cast.e21_1))
      return false;
    if (!(this.f21_1 === tmp0_other_with_cast.f21_1))
      return false;
    if (!(this.g21_1 === tmp0_other_with_cast.g21_1))
      return false;
    if (!(this.h21_1 === tmp0_other_with_cast.h21_1))
      return false;
    if (!(this.i21_1 === tmp0_other_with_cast.i21_1))
      return false;
    if (!(this.j21_1 === tmp0_other_with_cast.j21_1))
      return false;
    if (!(this.k21_1 === tmp0_other_with_cast.k21_1))
      return false;
    if (!(this.l21_1 === tmp0_other_with_cast.l21_1))
      return false;
    return true;
  }
  static m21(seen0, authCode, cardType, cardholderName, entryType, extra, first6, last4, referenceId, state, token, transactionNo, type, serializationConstructorMarker) {
    if (!(16 === (16 & seen0))) {
      throwMissingFieldException(seen0, 16, $serializer_getInstance_23().y20_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.a21_1 = '';
    else
      $this.a21_1 = authCode;
    if (0 === (seen0 & 2))
      $this.b21_1 = '';
    else
      $this.b21_1 = cardType;
    if (0 === (seen0 & 4))
      $this.c21_1 = '';
    else
      $this.c21_1 = cardholderName;
    if (0 === (seen0 & 8))
      $this.d21_1 = '';
    else
      $this.d21_1 = entryType;
    $this.e21_1 = extra;
    if (0 === (seen0 & 32))
      $this.f21_1 = '';
    else
      $this.f21_1 = first6;
    if (0 === (seen0 & 64))
      $this.g21_1 = '';
    else
      $this.g21_1 = last4;
    if (0 === (seen0 & 128))
      $this.h21_1 = '';
    else
      $this.h21_1 = referenceId;
    if (0 === (seen0 & 256))
      $this.i21_1 = '';
    else
      $this.i21_1 = state;
    if (0 === (seen0 & 512))
      $this.j21_1 = '';
    else
      $this.j21_1 = token;
    if (0 === (seen0 & 1024))
      $this.k21_1 = '';
    else
      $this.k21_1 = transactionNo;
    if (0 === (seen0 & 2048))
      $this.l21_1 = '';
    else
      $this.l21_1 = type;
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
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.o21(encoder, value instanceof Extra ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.n21_1;
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
    return Extra.s21(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  al() {
    return this.n21_1;
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
    this.p21_1 = authorizingNetworkName;
    this.q21_1 = cvmResult;
    this.r21_1 = card;
  }
  toString() {
    return 'Extra(authorizingNetworkName=' + this.p21_1 + ', cvmResult=' + this.q21_1 + ', card=' + this.r21_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.p21_1);
    result = imul(result, 31) + getStringHashCode(this.q21_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.r21_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Extra))
      return false;
    var tmp0_other_with_cast = other instanceof Extra ? other : THROW_CCE();
    if (!(this.p21_1 === tmp0_other_with_cast.p21_1))
      return false;
    if (!(this.q21_1 === tmp0_other_with_cast.q21_1))
      return false;
    if (!(this.r21_1 === tmp0_other_with_cast.r21_1))
      return false;
    return true;
  }
  static s21(seen0, authorizingNetworkName, cvmResult, card, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_24().n21_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.p21_1 = '';
    else
      $this.p21_1 = authorizingNetworkName;
    if (0 === (seen0 & 2))
      $this.q21_1 = '';
    else
      $this.q21_1 = cvmResult;
    if (0 === (seen0 & 4))
      $this.r21_1 = '';
    else
      $this.r21_1 = card;
    return $this;
  }
}
class Companion_25 {}
class $serializer_25 {
  constructor() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.Employee', this, 1);
    tmp0_serialDesc.aw('id', true);
    this.t21_1 = tmp0_serialDesc;
  }
  u21(encoder, value) {
    var tmp0_desc = this.t21_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.v21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.v21_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.u21(encoder, value instanceof Employee ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.t21_1;
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
    return Employee.w21(tmp3_bitMask0, tmp4_local0, null);
  }
  al() {
    return this.t21_1;
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
    this.v21_1 = id;
  }
  toString() {
    return 'Employee(id=' + this.v21_1 + ')';
  }
  hashCode() {
    return getStringHashCode(this.v21_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Employee))
      return false;
    var tmp0_other_with_cast = other instanceof Employee ? other : THROW_CCE();
    if (!(this.v21_1 === tmp0_other_with_cast.v21_1))
      return false;
    return true;
  }
  static w21(seen0, id, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_25().t21_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.v21_1 = '';
    else
      $this.v21_1 = id;
    return $this;
  }
}
class Companion_26 {}
class $serializer_26 {
  constructor() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.Order', this, 1);
    tmp0_serialDesc.aw('id', true);
    this.x21_1 = tmp0_serialDesc;
  }
  y21(encoder, value) {
    var tmp0_desc = this.x21_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.z21_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.z21_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.y21(encoder, value instanceof Order ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.x21_1;
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
    return Order.a22(tmp3_bitMask0, tmp4_local0, null);
  }
  al() {
    return this.x21_1;
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
    this.z21_1 = id;
  }
  toString() {
    return 'Order(id=' + this.z21_1 + ')';
  }
  hashCode() {
    return getStringHashCode(this.z21_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Order))
      return false;
    var tmp0_other_with_cast = other instanceof Order ? other : THROW_CCE();
    if (!(this.z21_1 === tmp0_other_with_cast.z21_1))
      return false;
    return true;
  }
  static a22(seen0, id, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_26().x21_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.z21_1 = '';
    else
      $this.z21_1 = id;
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
    this.b22_1 = tmp0_serialDesc;
  }
  c22(encoder, value) {
    var tmp0_desc = this.b22_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.d22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.d22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.e22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.e22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.f22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.f22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.g22_1 === false)) {
      tmp1_output.zp(tmp0_desc, 3, value.g22_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.c22(encoder, value instanceof Tender ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.b22_1;
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
    return Tender.h22(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  al() {
    return this.b22_1;
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
    this.d22_1 = id;
    this.e22_1 = label;
    this.f22_1 = labelKey;
    this.g22_1 = opensCashDrawer;
  }
  toString() {
    return 'Tender(id=' + this.d22_1 + ', label=' + this.e22_1 + ', labelKey=' + this.f22_1 + ', opensCashDrawer=' + this.g22_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.d22_1);
    result = imul(result, 31) + getStringHashCode(this.e22_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f22_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g22_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Tender))
      return false;
    var tmp0_other_with_cast = other instanceof Tender ? other : THROW_CCE();
    if (!(this.d22_1 === tmp0_other_with_cast.d22_1))
      return false;
    if (!(this.e22_1 === tmp0_other_with_cast.e22_1))
      return false;
    if (!(this.f22_1 === tmp0_other_with_cast.f22_1))
      return false;
    if (!(this.g22_1 === tmp0_other_with_cast.g22_1))
      return false;
    return true;
  }
  static h22(seen0, id, label, labelKey, opensCashDrawer, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().b22_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.d22_1 = '';
    else
      $this.d22_1 = id;
    if (0 === (seen0 & 2))
      $this.e22_1 = '';
    else
      $this.e22_1 = label;
    if (0 === (seen0 & 4))
      $this.f22_1 = '';
    else
      $this.f22_1 = labelKey;
    if (0 === (seen0 & 8))
      $this.g22_1 = false;
    else
      $this.g22_1 = opensCashDrawer;
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
    this.i22_1 = tmp0_serialDesc;
  }
  j22(encoder, value) {
    var tmp0_desc = this.i22_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.k22_1 === false)) {
      tmp1_output.zp(tmp0_desc, 0, value.k22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.l22_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.l22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.m22_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.m22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.n22_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.n22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.o22_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.o22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.p22_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.p22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.q22_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.q22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.r22_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.r22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.s22_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.s22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.t22_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.t22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.u22_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.u22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.v22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 11, value.v22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.w22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 12, value.w22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.x22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 13, value.x22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.y22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 14, value.y22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.z22_1 === '')) {
      tmp1_output.hq(tmp0_desc, 15, value.z22_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !(value.a23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 16, value.a23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !(value.b23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 17, value.b23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !(value.c23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 18, value.c23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !(value.d23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 19, value.d23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !(value.e23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 20, value.e23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.f23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 21, value.f23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 22) ? true : !(value.g23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 22, value.g23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 23) ? true : !(value.h23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 23, value.h23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 24) ? true : !(value.i23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 24, value.i23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 25) ? true : !(value.j23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 25, value.j23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 26) ? true : !(value.k23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 26, value.k23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 27) ? true : !(value.l23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 27, value.l23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 28) ? true : !(value.m23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 28, value.m23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 29) ? true : !(value.n23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 29, value.n23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 30) ? true : !(value.o23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 30, value.o23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 31) ? true : !(value.p23_1 === false)) {
      tmp1_output.zp(tmp0_desc, 31, value.p23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 32) ? true : !(value.q23_1 === false)) {
      tmp1_output.zp(tmp0_desc, 32, value.q23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 33) ? true : !(value.r23_1 === false)) {
      tmp1_output.zp(tmp0_desc, 33, value.r23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 34) ? true : !(value.s23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 34, value.s23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 35) ? true : !(value.t23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 35, value.t23_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.j22(encoder, value instanceof RazorPayEdcStatusResponse ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.i22_1;
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
    return RazorPayEdcStatusResponse.u23(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, null);
  }
  al() {
    return this.i22_1;
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
    this.k22_1 = success;
    this.l22_1 = status;
    this.m22_1 = messageCode;
    this.n22_1 = message;
    this.o22_1 = errorCode;
    this.p22_1 = errorMessage;
    this.q22_1 = realCode;
    this.r22_1 = apiMessageTitle;
    this.s22_1 = apiMessage;
    this.t22_1 = apiMessageText;
    this.u22_1 = apiWarning;
    this.v22_1 = origP2pRequestId;
    this.w22_1 = tid;
    this.x22_1 = authCode;
    this.y22_1 = batchNumber;
    this.z22_1 = cardLastFourDigit;
    this.a23_1 = currencyCode;
    this.b23_1 = customerName;
    this.c23_1 = customerEmail;
    this.d23_1 = customerReceiptUrl;
    this.e23_1 = deviceSerial;
    this.f23_1 = externalRefNumber;
    this.g23_1 = txnId;
    this.h23_1 = merchantName;
    this.i23_1 = mid;
    this.j23_1 = merchantCode;
    this.k23_1 = payerName;
    this.l23_1 = paymentCardBin;
    this.m23_1 = paymentCardBrand;
    this.n23_1 = paymentCardType;
    this.o23_1 = paymentMode;
    this.p23_1 = voidable;
    this.q23_1 = refundable;
    this.r23_1 = onlineRefundable;
    this.s23_1 = invoiceNumber;
    this.t23_1 = cardType;
  }
  toString() {
    return 'RazorPayEdcStatusResponse(success=' + this.k22_1 + ', status=' + this.l22_1 + ', messageCode=' + this.m22_1 + ', message=' + this.n22_1 + ', errorCode=' + this.o22_1 + ', errorMessage=' + this.p22_1 + ', realCode=' + this.q22_1 + ', apiMessageTitle=' + this.r22_1 + ', apiMessage=' + this.s22_1 + ', apiMessageText=' + this.t22_1 + ', apiWarning=' + this.u22_1 + ', origP2pRequestId=' + this.v22_1 + ', tid=' + this.w22_1 + ', authCode=' + this.x22_1 + ', batchNumber=' + this.y22_1 + ', cardLastFourDigit=' + this.z22_1 + ', currencyCode=' + this.a23_1 + ', customerName=' + this.b23_1 + ', customerEmail=' + this.c23_1 + ', customerReceiptUrl=' + this.d23_1 + ', deviceSerial=' + this.e23_1 + ', externalRefNumber=' + this.f23_1 + ', txnId=' + this.g23_1 + ', merchantName=' + this.h23_1 + ', mid=' + this.i23_1 + ', merchantCode=' + this.j23_1 + ', payerName=' + this.k23_1 + ', paymentCardBin=' + this.l23_1 + ', paymentCardBrand=' + this.m23_1 + ', paymentCardType=' + this.n23_1 + ', paymentMode=' + this.o23_1 + ', voidable=' + this.p23_1 + ', refundable=' + this.q23_1 + ', onlineRefundable=' + this.r23_1 + ', invoiceNumber=' + this.s23_1 + ', cardType=' + this.t23_1 + ')';
  }
  hashCode() {
    var result = getBooleanHashCode(this.k22_1);
    result = imul(result, 31) + (this.l22_1 == null ? 0 : getStringHashCode(this.l22_1)) | 0;
    result = imul(result, 31) + (this.m22_1 == null ? 0 : getStringHashCode(this.m22_1)) | 0;
    result = imul(result, 31) + (this.n22_1 == null ? 0 : getStringHashCode(this.n22_1)) | 0;
    result = imul(result, 31) + (this.o22_1 == null ? 0 : getStringHashCode(this.o22_1)) | 0;
    result = imul(result, 31) + (this.p22_1 == null ? 0 : getStringHashCode(this.p22_1)) | 0;
    result = imul(result, 31) + (this.q22_1 == null ? 0 : getStringHashCode(this.q22_1)) | 0;
    result = imul(result, 31) + (this.r22_1 == null ? 0 : getStringHashCode(this.r22_1)) | 0;
    result = imul(result, 31) + (this.s22_1 == null ? 0 : getStringHashCode(this.s22_1)) | 0;
    result = imul(result, 31) + (this.t22_1 == null ? 0 : getStringHashCode(this.t22_1)) | 0;
    result = imul(result, 31) + (this.u22_1 == null ? 0 : getStringHashCode(this.u22_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.v22_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w22_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x22_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y22_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z22_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.e23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.n23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.o23_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.p23_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.q23_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.r23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.s23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.t23_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RazorPayEdcStatusResponse))
      return false;
    var tmp0_other_with_cast = other instanceof RazorPayEdcStatusResponse ? other : THROW_CCE();
    if (!(this.k22_1 === tmp0_other_with_cast.k22_1))
      return false;
    if (!(this.l22_1 == tmp0_other_with_cast.l22_1))
      return false;
    if (!(this.m22_1 == tmp0_other_with_cast.m22_1))
      return false;
    if (!(this.n22_1 == tmp0_other_with_cast.n22_1))
      return false;
    if (!(this.o22_1 == tmp0_other_with_cast.o22_1))
      return false;
    if (!(this.p22_1 == tmp0_other_with_cast.p22_1))
      return false;
    if (!(this.q22_1 == tmp0_other_with_cast.q22_1))
      return false;
    if (!(this.r22_1 == tmp0_other_with_cast.r22_1))
      return false;
    if (!(this.s22_1 == tmp0_other_with_cast.s22_1))
      return false;
    if (!(this.t22_1 == tmp0_other_with_cast.t22_1))
      return false;
    if (!(this.u22_1 == tmp0_other_with_cast.u22_1))
      return false;
    if (!(this.v22_1 === tmp0_other_with_cast.v22_1))
      return false;
    if (!(this.w22_1 === tmp0_other_with_cast.w22_1))
      return false;
    if (!(this.x22_1 === tmp0_other_with_cast.x22_1))
      return false;
    if (!(this.y22_1 === tmp0_other_with_cast.y22_1))
      return false;
    if (!(this.z22_1 === tmp0_other_with_cast.z22_1))
      return false;
    if (!(this.a23_1 === tmp0_other_with_cast.a23_1))
      return false;
    if (!(this.b23_1 === tmp0_other_with_cast.b23_1))
      return false;
    if (!(this.c23_1 === tmp0_other_with_cast.c23_1))
      return false;
    if (!(this.d23_1 === tmp0_other_with_cast.d23_1))
      return false;
    if (!(this.e23_1 === tmp0_other_with_cast.e23_1))
      return false;
    if (!(this.f23_1 === tmp0_other_with_cast.f23_1))
      return false;
    if (!(this.g23_1 === tmp0_other_with_cast.g23_1))
      return false;
    if (!(this.h23_1 === tmp0_other_with_cast.h23_1))
      return false;
    if (!(this.i23_1 === tmp0_other_with_cast.i23_1))
      return false;
    if (!(this.j23_1 === tmp0_other_with_cast.j23_1))
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
    return true;
  }
  static u23(seen0, seen1, success, status, messageCode, message, errorCode, errorMessage, realCode, apiMessageTitle, apiMessage, apiMessageText, apiWarning, origP2pRequestId, tid, authCode, batchNumber, cardLastFourDigit, currencyCode, customerName, customerEmail, customerReceiptUrl, deviceSerial, externalRefNumber, txnId, merchantName, mid, merchantCode, payerName, paymentCardBin, paymentCardBrand, paymentCardType, paymentMode, voidable, refundable, onlineRefundable, invoiceNumber, cardType, serializationConstructorMarker) {
    if (!!(!(0 === (0 & seen0)) | !(0 === (0 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([0, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_28().i22_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.k22_1 = false;
    else
      $this.k22_1 = success;
    if (0 === (seen0 & 2))
      $this.l22_1 = null;
    else
      $this.l22_1 = status;
    if (0 === (seen0 & 4))
      $this.m22_1 = null;
    else
      $this.m22_1 = messageCode;
    if (0 === (seen0 & 8))
      $this.n22_1 = null;
    else
      $this.n22_1 = message;
    if (0 === (seen0 & 16))
      $this.o22_1 = null;
    else
      $this.o22_1 = errorCode;
    if (0 === (seen0 & 32))
      $this.p22_1 = null;
    else
      $this.p22_1 = errorMessage;
    if (0 === (seen0 & 64))
      $this.q22_1 = null;
    else
      $this.q22_1 = realCode;
    if (0 === (seen0 & 128))
      $this.r22_1 = null;
    else
      $this.r22_1 = apiMessageTitle;
    if (0 === (seen0 & 256))
      $this.s22_1 = null;
    else
      $this.s22_1 = apiMessage;
    if (0 === (seen0 & 512))
      $this.t22_1 = null;
    else
      $this.t22_1 = apiMessageText;
    if (0 === (seen0 & 1024))
      $this.u22_1 = null;
    else
      $this.u22_1 = apiWarning;
    if (0 === (seen0 & 2048))
      $this.v22_1 = '';
    else
      $this.v22_1 = origP2pRequestId;
    if (0 === (seen0 & 4096))
      $this.w22_1 = '';
    else
      $this.w22_1 = tid;
    if (0 === (seen0 & 8192))
      $this.x22_1 = '';
    else
      $this.x22_1 = authCode;
    if (0 === (seen0 & 16384))
      $this.y22_1 = '';
    else
      $this.y22_1 = batchNumber;
    if (0 === (seen0 & 32768))
      $this.z22_1 = '';
    else
      $this.z22_1 = cardLastFourDigit;
    if (0 === (seen0 & 65536))
      $this.a23_1 = '';
    else
      $this.a23_1 = currencyCode;
    if (0 === (seen0 & 131072))
      $this.b23_1 = '';
    else
      $this.b23_1 = customerName;
    if (0 === (seen0 & 262144))
      $this.c23_1 = '';
    else
      $this.c23_1 = customerEmail;
    if (0 === (seen0 & 524288))
      $this.d23_1 = '';
    else
      $this.d23_1 = customerReceiptUrl;
    if (0 === (seen0 & 1048576))
      $this.e23_1 = '';
    else
      $this.e23_1 = deviceSerial;
    if (0 === (seen0 & 2097152))
      $this.f23_1 = '';
    else
      $this.f23_1 = externalRefNumber;
    if (0 === (seen0 & 4194304))
      $this.g23_1 = '';
    else
      $this.g23_1 = txnId;
    if (0 === (seen0 & 8388608))
      $this.h23_1 = '';
    else
      $this.h23_1 = merchantName;
    if (0 === (seen0 & 16777216))
      $this.i23_1 = '';
    else
      $this.i23_1 = mid;
    if (0 === (seen0 & 33554432))
      $this.j23_1 = '';
    else
      $this.j23_1 = merchantCode;
    if (0 === (seen0 & 67108864))
      $this.k23_1 = '';
    else
      $this.k23_1 = payerName;
    if (0 === (seen0 & 134217728))
      $this.l23_1 = '';
    else
      $this.l23_1 = paymentCardBin;
    if (0 === (seen0 & 268435456))
      $this.m23_1 = '';
    else
      $this.m23_1 = paymentCardBrand;
    if (0 === (seen0 & 536870912))
      $this.n23_1 = '';
    else
      $this.n23_1 = paymentCardType;
    if (0 === (seen0 & 1073741824))
      $this.o23_1 = '';
    else
      $this.o23_1 = paymentMode;
    if (0 === (seen0 & -2147483648))
      $this.p23_1 = false;
    else
      $this.p23_1 = voidable;
    if (0 === (seen1 & 1))
      $this.q23_1 = false;
    else
      $this.q23_1 = refundable;
    if (0 === (seen1 & 2))
      $this.r23_1 = false;
    else
      $this.r23_1 = onlineRefundable;
    if (0 === (seen1 & 4))
      $this.s23_1 = '';
    else
      $this.s23_1 = invoiceNumber;
    if (0 === (seen1 & 8))
      $this.t23_1 = '';
    else
      $this.t23_1 = cardType;
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
    this.v23_1 = tmp0_serialDesc;
  }
  w23(encoder, value) {
    var tmp0_desc = this.v23_1;
    var tmp1_output = encoder.so(tmp0_desc);
    tmp1_output.jq(tmp0_desc, 0, $serializer_getInstance_30(), value.x23_1);
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.y23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.y23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.z23_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.z23_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.a24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.a24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.b24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.b24_1);
    }
    tmp1_output.jq(tmp0_desc, 5, $serializer_getInstance_32(), value.c24_1);
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.w23(encoder, value instanceof MagTekPaymentResponse ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.v23_1;
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
    return MagTekPaymentResponse.d24(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  al() {
    return this.v23_1;
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
    return 'MagTekPaymentResponse(dataOutput=' + this.x23_1.toString() + ', traceId=' + this.y23_1 + ', magTranId=' + this.z23_1 + ', customerTransactionId=' + this.a24_1 + ', transactionUtctimeStamp=' + this.b24_1 + ', transactionOutput=' + this.c24_1.toString() + ')';
  }
  hashCode() {
    var result = this.x23_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.y23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z23_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a24_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b24_1) | 0;
    result = imul(result, 31) + this.c24_1.hashCode() | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof MagTekPaymentResponse))
      return false;
    var tmp0_other_with_cast = other instanceof MagTekPaymentResponse ? other : THROW_CCE();
    if (!this.x23_1.equals(tmp0_other_with_cast.x23_1))
      return false;
    if (!(this.y23_1 === tmp0_other_with_cast.y23_1))
      return false;
    if (!(this.z23_1 === tmp0_other_with_cast.z23_1))
      return false;
    if (!(this.a24_1 === tmp0_other_with_cast.a24_1))
      return false;
    if (!(this.b24_1 === tmp0_other_with_cast.b24_1))
      return false;
    if (!this.c24_1.equals(tmp0_other_with_cast.c24_1))
      return false;
    return true;
  }
  static d24(seen0, dataOutput, traceId, magTranId, customerTransactionId, transactionUtctimeStamp, transactionOutput, serializationConstructorMarker) {
    if (!(33 === (33 & seen0))) {
      throwMissingFieldException(seen0, 33, $serializer_getInstance_29().v23_1);
    }
    var $this = createThis(this);
    $this.x23_1 = dataOutput;
    if (0 === (seen0 & 2))
      $this.y23_1 = '';
    else
      $this.y23_1 = traceId;
    if (0 === (seen0 & 4))
      $this.z23_1 = '';
    else
      $this.z23_1 = magTranId;
    if (0 === (seen0 & 8))
      $this.a24_1 = '';
    else
      $this.a24_1 = customerTransactionId;
    if (0 === (seen0 & 16))
      $this.b24_1 = '';
    else
      $this.b24_1 = transactionUtctimeStamp;
    $this.c24_1 = transactionOutput;
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
    tmp.e24_1 = [null, null, null, lazy(tmp_0, DataOutput$Companion$$childSerializers$_anonymous__bcjz5)];
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
    this.f24_1 = tmp0_serialDesc;
  }
  g24(encoder, value) {
    var tmp0_desc = this.f24_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_30().e24_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.h24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.h24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.i24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.i24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.j24_1 === false)) {
      tmp1_output.zp(tmp0_desc, 2, value.j24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !equals(value.k24_1, emptyList())) {
      tmp1_output.jq(tmp0_desc, 3, tmp2_cached[3].g2(), value.k24_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.g24(encoder, value instanceof DataOutput ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.f24_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.so(tmp0_desc);
    var tmp9_cached = Companion_getInstance_30().e24_1;
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
    return DataOutput.l24(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  al() {
    return this.f24_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_30().e24_1;
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
    this.h24_1 = cardId;
    this.i24_1 = panLast4;
    this.j24_1 = isReplay;
    this.k24_1 = additionalOutputData;
  }
  toString() {
    return 'DataOutput(cardId=' + this.h24_1 + ', panLast4=' + this.i24_1 + ', isReplay=' + this.j24_1 + ', additionalOutputData=' + toString(this.k24_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.h24_1);
    result = imul(result, 31) + getStringHashCode(this.i24_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.j24_1) | 0;
    result = imul(result, 31) + hashCode(this.k24_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof DataOutput))
      return false;
    var tmp0_other_with_cast = other instanceof DataOutput ? other : THROW_CCE();
    if (!(this.h24_1 === tmp0_other_with_cast.h24_1))
      return false;
    if (!(this.i24_1 === tmp0_other_with_cast.i24_1))
      return false;
    if (!(this.j24_1 === tmp0_other_with_cast.j24_1))
      return false;
    if (!equals(this.k24_1, tmp0_other_with_cast.k24_1))
      return false;
    return true;
  }
  static l24(seen0, cardId, panLast4, isReplay, additionalOutputData, serializationConstructorMarker) {
    Companion_getInstance_30();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_30().f24_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.h24_1 = '';
    else
      $this.h24_1 = cardId;
    if (0 === (seen0 & 2))
      $this.i24_1 = '';
    else
      $this.i24_1 = panLast4;
    if (0 === (seen0 & 4))
      $this.j24_1 = false;
    else
      $this.j24_1 = isReplay;
    if (0 === (seen0 & 8))
      $this.k24_1 = emptyList();
    else
      $this.k24_1 = additionalOutputData;
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
    this.m24_1 = tmp0_serialDesc;
  }
  n24(encoder, value) {
    var tmp0_desc = this.m24_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.o24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.o24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.p24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.p24_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.n24(encoder, value instanceof AdditionalOutputDaum ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.m24_1;
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
    return AdditionalOutputDaum.q24(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  al() {
    return this.m24_1;
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
    this.o24_1 = key;
    this.p24_1 = value;
  }
  toString() {
    return 'AdditionalOutputDaum(key=' + this.o24_1 + ', value=' + this.p24_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.o24_1);
    result = imul(result, 31) + getStringHashCode(this.p24_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof AdditionalOutputDaum))
      return false;
    var tmp0_other_with_cast = other instanceof AdditionalOutputDaum ? other : THROW_CCE();
    if (!(this.o24_1 === tmp0_other_with_cast.o24_1))
      return false;
    if (!(this.p24_1 === tmp0_other_with_cast.p24_1))
      return false;
    return true;
  }
  static q24(seen0, key, value, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_31().m24_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.o24_1 = '';
    else
      $this.o24_1 = key;
    if (0 === (seen0 & 2))
      $this.p24_1 = '';
    else
      $this.p24_1 = value;
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
    tmp.r24_1 = [null, null, null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, TransactionOutput$Companion$$childSerializers$_anonymous__covch7)];
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
    this.s24_1 = tmp0_serialDesc;
  }
  t24(encoder, value) {
    var tmp0_desc = this.s24_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_32().r24_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.u24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.u24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.v24_1 === false)) {
      tmp1_output.zp(tmp0_desc, 1, value.v24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.w24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.w24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.x24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.x24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.y24_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.y24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !equals(value.z24_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 5, value.z24_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.a25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 6, value.a25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.b25_1 === '')) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.b25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.c25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 8, value.c25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.d25_1 === '')) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.d25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.e25_1 === '')) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.e25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.f25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 11, value.f25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !equals(value.g25_1, emptyList())) {
      tmp1_output.jq(tmp0_desc, 12, tmp2_cached[12].g2(), value.g25_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.t24(encoder, value instanceof TransactionOutput ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.s24_1;
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
    var tmp18_cached = Companion_getInstance_32().r24_1;
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
    return TransactionOutput.h25(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, null);
  }
  al() {
    return this.s24_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_32().r24_1;
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
    this.u24_1 = transactionId;
    this.v24_1 = isTransactionApproved;
    this.w24_1 = transactionStatus;
    this.x24_1 = transactionMessage;
    this.y24_1 = authCode;
    this.z24_1 = authorizedAmount;
    this.a25_1 = avsResult;
    this.b25_1 = cvvResult;
    this.c25_1 = issuerAuthenticationData;
    this.d25_1 = issuerScriptTemplate1;
    this.e25_1 = issuerScriptTemplate2;
    this.f25_1 = token;
    this.g25_1 = transactionOutputDetails;
  }
  toString() {
    return 'TransactionOutput(transactionId=' + this.u24_1 + ', isTransactionApproved=' + this.v24_1 + ', transactionStatus=' + this.w24_1 + ', transactionMessage=' + this.x24_1 + ', authCode=' + this.y24_1 + ', authorizedAmount=' + this.z24_1 + ', avsResult=' + this.a25_1 + ', cvvResult=' + this.b25_1 + ', issuerAuthenticationData=' + this.c25_1 + ', issuerScriptTemplate1=' + this.d25_1 + ', issuerScriptTemplate2=' + this.e25_1 + ', token=' + this.f25_1 + ', transactionOutputDetails=' + toString(this.g25_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.u24_1);
    result = imul(result, 31) + getBooleanHashCode(this.v24_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w24_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x24_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y24_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.z24_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a25_1) | 0;
    result = imul(result, 31) + (this.b25_1 == null ? 0 : getStringHashCode(this.b25_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.c25_1) | 0;
    result = imul(result, 31) + (this.d25_1 == null ? 0 : getStringHashCode(this.d25_1)) | 0;
    result = imul(result, 31) + (this.e25_1 == null ? 0 : getStringHashCode(this.e25_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.f25_1) | 0;
    result = imul(result, 31) + hashCode(this.g25_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof TransactionOutput))
      return false;
    var tmp0_other_with_cast = other instanceof TransactionOutput ? other : THROW_CCE();
    if (!(this.u24_1 === tmp0_other_with_cast.u24_1))
      return false;
    if (!(this.v24_1 === tmp0_other_with_cast.v24_1))
      return false;
    if (!(this.w24_1 === tmp0_other_with_cast.w24_1))
      return false;
    if (!(this.x24_1 === tmp0_other_with_cast.x24_1))
      return false;
    if (!(this.y24_1 === tmp0_other_with_cast.y24_1))
      return false;
    if (!equals(this.z24_1, tmp0_other_with_cast.z24_1))
      return false;
    if (!(this.a25_1 === tmp0_other_with_cast.a25_1))
      return false;
    if (!(this.b25_1 == tmp0_other_with_cast.b25_1))
      return false;
    if (!(this.c25_1 === tmp0_other_with_cast.c25_1))
      return false;
    if (!(this.d25_1 == tmp0_other_with_cast.d25_1))
      return false;
    if (!(this.e25_1 == tmp0_other_with_cast.e25_1))
      return false;
    if (!(this.f25_1 === tmp0_other_with_cast.f25_1))
      return false;
    if (!equals(this.g25_1, tmp0_other_with_cast.g25_1))
      return false;
    return true;
  }
  static h25(seen0, transactionId, isTransactionApproved, transactionStatus, transactionMessage, authCode, authorizedAmount, avsResult, cvvResult, issuerAuthenticationData, issuerScriptTemplate1, issuerScriptTemplate2, token, transactionOutputDetails, serializationConstructorMarker) {
    Companion_getInstance_32();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_32().s24_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.u24_1 = '';
    else
      $this.u24_1 = transactionId;
    if (0 === (seen0 & 2))
      $this.v24_1 = false;
    else
      $this.v24_1 = isTransactionApproved;
    if (0 === (seen0 & 4))
      $this.w24_1 = '';
    else
      $this.w24_1 = transactionStatus;
    if (0 === (seen0 & 8))
      $this.x24_1 = '';
    else
      $this.x24_1 = transactionMessage;
    if (0 === (seen0 & 16))
      $this.y24_1 = '';
    else
      $this.y24_1 = authCode;
    if (0 === (seen0 & 32))
      $this.z24_1 = 0.0;
    else
      $this.z24_1 = authorizedAmount;
    if (0 === (seen0 & 64))
      $this.a25_1 = '';
    else
      $this.a25_1 = avsResult;
    if (0 === (seen0 & 128))
      $this.b25_1 = '';
    else
      $this.b25_1 = cvvResult;
    if (0 === (seen0 & 256))
      $this.c25_1 = '';
    else
      $this.c25_1 = issuerAuthenticationData;
    if (0 === (seen0 & 512))
      $this.d25_1 = '';
    else
      $this.d25_1 = issuerScriptTemplate1;
    if (0 === (seen0 & 1024))
      $this.e25_1 = '';
    else
      $this.e25_1 = issuerScriptTemplate2;
    if (0 === (seen0 & 2048))
      $this.f25_1 = '';
    else
      $this.f25_1 = token;
    if (0 === (seen0 & 4096))
      $this.g25_1 = emptyList();
    else
      $this.g25_1 = transactionOutputDetails;
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
    this.i25_1 = tmp0_serialDesc;
  }
  j25(encoder, value) {
    var tmp0_desc = this.i25_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.k25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.k25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.l25_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.l25_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.j25(encoder, value instanceof TransactionOutputDetail ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.i25_1;
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
    return TransactionOutputDetail.m25(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  al() {
    return this.i25_1;
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
    this.k25_1 = key;
    this.l25_1 = value;
  }
  toString() {
    return 'TransactionOutputDetail(key=' + this.k25_1 + ', value=' + this.l25_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.k25_1);
    result = imul(result, 31) + getStringHashCode(this.l25_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof TransactionOutputDetail))
      return false;
    var tmp0_other_with_cast = other instanceof TransactionOutputDetail ? other : THROW_CCE();
    if (!(this.k25_1 === tmp0_other_with_cast.k25_1))
      return false;
    if (!(this.l25_1 === tmp0_other_with_cast.l25_1))
      return false;
    return true;
  }
  static m25(seen0, key, value, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_33().i25_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.k25_1 = '';
    else
      $this.k25_1 = key;
    if (0 === (seen0 & 2))
      $this.l25_1 = '';
    else
      $this.l25_1 = value;
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
    tmp.n25_1 = [null, null, null, lazy(tmp_0, PineEDCStatusResponse$Companion$$childSerializers$_anonymous__g6y2g3), null];
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
    this.o25_1 = tmp0_serialDesc;
  }
  p25(encoder, value) {
    var tmp0_desc = this.o25_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_34().n25_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.q25_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, IntSerializer_getInstance(), value.q25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.r25_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.r25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.s25_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, IntSerializer_getInstance(), value.s25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.t25_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, tmp2_cached[3].g2(), value.t25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.u25_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.u25_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.p25(encoder, value instanceof PineEDCStatusResponse ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.o25_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.so(tmp0_desc);
    var tmp10_cached = Companion_getInstance_34().n25_1;
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
    return PineEDCStatusResponse.v25(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  al() {
    return this.o25_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_34().n25_1;
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
    this.q25_1 = responseCode;
    this.r25_1 = responseMessage;
    this.s25_1 = plutusTransactionReferenceId;
    this.t25_1 = transactionData;
    this.u25_1 = transactionId;
  }
  toString() {
    return 'PineEDCStatusResponse(responseCode=' + this.q25_1 + ', responseMessage=' + this.r25_1 + ', plutusTransactionReferenceId=' + this.s25_1 + ', transactionData=' + toString_0(this.t25_1) + ', transactionId=' + this.u25_1 + ')';
  }
  hashCode() {
    var result = this.q25_1 == null ? 0 : this.q25_1;
    result = imul(result, 31) + (this.r25_1 == null ? 0 : getStringHashCode(this.r25_1)) | 0;
    result = imul(result, 31) + (this.s25_1 == null ? 0 : this.s25_1) | 0;
    result = imul(result, 31) + (this.t25_1 == null ? 0 : hashCode(this.t25_1)) | 0;
    result = imul(result, 31) + (this.u25_1 == null ? 0 : getStringHashCode(this.u25_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PineEDCStatusResponse))
      return false;
    var tmp0_other_with_cast = other instanceof PineEDCStatusResponse ? other : THROW_CCE();
    if (!(this.q25_1 == tmp0_other_with_cast.q25_1))
      return false;
    if (!(this.r25_1 == tmp0_other_with_cast.r25_1))
      return false;
    if (!(this.s25_1 == tmp0_other_with_cast.s25_1))
      return false;
    if (!equals(this.t25_1, tmp0_other_with_cast.t25_1))
      return false;
    if (!(this.u25_1 == tmp0_other_with_cast.u25_1))
      return false;
    return true;
  }
  static v25(seen0, responseCode, responseMessage, plutusTransactionReferenceId, transactionData, transactionId, serializationConstructorMarker) {
    Companion_getInstance_34();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_34().o25_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.q25_1 = null;
    else
      $this.q25_1 = responseCode;
    if (0 === (seen0 & 2))
      $this.r25_1 = null;
    else
      $this.r25_1 = responseMessage;
    if (0 === (seen0 & 4))
      $this.s25_1 = null;
    else
      $this.s25_1 = plutusTransactionReferenceId;
    if (0 === (seen0 & 8))
      $this.t25_1 = null;
    else
      $this.t25_1 = transactionData;
    if (0 === (seen0 & 16))
      $this.u25_1 = null;
    else
      $this.u25_1 = transactionId;
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
    this.w25_1 = tmp0_serialDesc;
  }
  x25(encoder, value) {
    var tmp0_desc = this.w25_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.y25_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.y25_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.z25_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.z25_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.x25(encoder, value instanceof TransactionData ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.w25_1;
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
    return TransactionData.a26(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  al() {
    return this.w25_1;
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
    this.y25_1 = tag;
    this.z25_1 = value;
  }
  toString() {
    return 'TransactionData(tag=' + this.y25_1 + ', value=' + this.z25_1 + ')';
  }
  hashCode() {
    var result = this.y25_1 == null ? 0 : getStringHashCode(this.y25_1);
    result = imul(result, 31) + (this.z25_1 == null ? 0 : getStringHashCode(this.z25_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof TransactionData))
      return false;
    var tmp0_other_with_cast = other instanceof TransactionData ? other : THROW_CCE();
    if (!(this.y25_1 == tmp0_other_with_cast.y25_1))
      return false;
    if (!(this.z25_1 == tmp0_other_with_cast.z25_1))
      return false;
    return true;
  }
  static a26(seen0, tag, value, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_35().w25_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.y25_1 = null;
    else
      $this.y25_1 = tag;
    if (0 === (seen0 & 2))
      $this.z25_1 = null;
    else
      $this.z25_1 = value;
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
    this.b26_1 = tmp0_serialDesc;
  }
  c26(encoder, value) {
    var tmp0_desc = this.b26_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.d26_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.d26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.e26_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.e26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.f26_1 === '')) {
      tmp1_output.hq(tmp0_desc, 2, value.f26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.g26_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.g26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.h26_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.h26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.i26_1 === '')) {
      tmp1_output.hq(tmp0_desc, 5, value.i26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.j26_1 === '')) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.j26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.k26_1 === '')) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.k26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.l26_1 === '')) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.l26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.m26_1 === '')) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.m26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.n26_1 === '')) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.n26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.o26_1 === '')) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.o26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.p26_1 === '')) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.p26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.q26_1 === '')) {
      tmp1_output.lq(tmp0_desc, 13, StringSerializer_getInstance(), value.q26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.r26_1 === '')) {
      tmp1_output.lq(tmp0_desc, 14, StringSerializer_getInstance(), value.r26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.s26_1 === '')) {
      tmp1_output.lq(tmp0_desc, 15, StringSerializer_getInstance(), value.s26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !(value.t26_1 === '')) {
      tmp1_output.lq(tmp0_desc, 16, StringSerializer_getInstance(), value.t26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !(value.u26_1 === '')) {
      tmp1_output.lq(tmp0_desc, 17, StringSerializer_getInstance(), value.u26_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.c26(encoder, value instanceof ChargeSlipResponse ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.b26_1;
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
    return ChargeSlipResponse.v26(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, null);
  }
  al() {
    return this.b26_1;
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
    this.d26_1 = accNumber;
    this.e26_1 = cardType;
    this.f26_1 = authCode;
    this.g26_1 = refNumber;
    this.h26_1 = merchantID;
    this.i26_1 = paymentStatus;
    this.j26_1 = tc;
    this.k26_1 = tvr;
    this.l26_1 = aid;
    this.m26_1 = tsi;
    this.n26_1 = tid;
    this.o26_1 = atc;
    this.p26_1 = applab;
    this.q26_1 = terminalId;
    this.r26_1 = customerVpa;
    this.s26_1 = paymentMode;
    this.t26_1 = transactionLogId;
    this.u26_1 = cardHolderName;
  }
  toString() {
    return 'ChargeSlipResponse(accNumber=' + this.d26_1 + ', cardType=' + this.e26_1 + ', authCode=' + this.f26_1 + ', refNumber=' + this.g26_1 + ', merchantID=' + this.h26_1 + ', paymentStatus=' + this.i26_1 + ', tc=' + this.j26_1 + ', tvr=' + this.k26_1 + ', aid=' + this.l26_1 + ', tsi=' + this.m26_1 + ', tid=' + this.n26_1 + ', atc=' + this.o26_1 + ', applab=' + this.p26_1 + ', terminalId=' + this.q26_1 + ', customerVpa=' + this.r26_1 + ', paymentMode=' + this.s26_1 + ', transactionLogId=' + this.t26_1 + ', cardHolderName=' + this.u26_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.d26_1);
    result = imul(result, 31) + getStringHashCode(this.e26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i26_1) | 0;
    result = imul(result, 31) + (this.j26_1 == null ? 0 : getStringHashCode(this.j26_1)) | 0;
    result = imul(result, 31) + (this.k26_1 == null ? 0 : getStringHashCode(this.k26_1)) | 0;
    result = imul(result, 31) + (this.l26_1 == null ? 0 : getStringHashCode(this.l26_1)) | 0;
    result = imul(result, 31) + (this.m26_1 == null ? 0 : getStringHashCode(this.m26_1)) | 0;
    result = imul(result, 31) + (this.n26_1 == null ? 0 : getStringHashCode(this.n26_1)) | 0;
    result = imul(result, 31) + (this.o26_1 == null ? 0 : getStringHashCode(this.o26_1)) | 0;
    result = imul(result, 31) + (this.p26_1 == null ? 0 : getStringHashCode(this.p26_1)) | 0;
    result = imul(result, 31) + (this.q26_1 == null ? 0 : getStringHashCode(this.q26_1)) | 0;
    result = imul(result, 31) + (this.r26_1 == null ? 0 : getStringHashCode(this.r26_1)) | 0;
    result = imul(result, 31) + (this.s26_1 == null ? 0 : getStringHashCode(this.s26_1)) | 0;
    result = imul(result, 31) + (this.t26_1 == null ? 0 : getStringHashCode(this.t26_1)) | 0;
    result = imul(result, 31) + (this.u26_1 == null ? 0 : getStringHashCode(this.u26_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ChargeSlipResponse))
      return false;
    var tmp0_other_with_cast = other instanceof ChargeSlipResponse ? other : THROW_CCE();
    if (!(this.d26_1 === tmp0_other_with_cast.d26_1))
      return false;
    if (!(this.e26_1 === tmp0_other_with_cast.e26_1))
      return false;
    if (!(this.f26_1 === tmp0_other_with_cast.f26_1))
      return false;
    if (!(this.g26_1 === tmp0_other_with_cast.g26_1))
      return false;
    if (!(this.h26_1 === tmp0_other_with_cast.h26_1))
      return false;
    if (!(this.i26_1 === tmp0_other_with_cast.i26_1))
      return false;
    if (!(this.j26_1 == tmp0_other_with_cast.j26_1))
      return false;
    if (!(this.k26_1 == tmp0_other_with_cast.k26_1))
      return false;
    if (!(this.l26_1 == tmp0_other_with_cast.l26_1))
      return false;
    if (!(this.m26_1 == tmp0_other_with_cast.m26_1))
      return false;
    if (!(this.n26_1 == tmp0_other_with_cast.n26_1))
      return false;
    if (!(this.o26_1 == tmp0_other_with_cast.o26_1))
      return false;
    if (!(this.p26_1 == tmp0_other_with_cast.p26_1))
      return false;
    if (!(this.q26_1 == tmp0_other_with_cast.q26_1))
      return false;
    if (!(this.r26_1 == tmp0_other_with_cast.r26_1))
      return false;
    if (!(this.s26_1 == tmp0_other_with_cast.s26_1))
      return false;
    if (!(this.t26_1 == tmp0_other_with_cast.t26_1))
      return false;
    if (!(this.u26_1 == tmp0_other_with_cast.u26_1))
      return false;
    return true;
  }
  static v26(seen0, accNumber, cardType, authCode, refNumber, merchantID, paymentStatus, tc, tvr, aid, tsi, tid, atc, applab, terminalId, customerVpa, paymentMode, transactionLogId, cardHolderName, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_36().b26_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.d26_1 = '';
    else
      $this.d26_1 = accNumber;
    if (0 === (seen0 & 2))
      $this.e26_1 = '';
    else
      $this.e26_1 = cardType;
    if (0 === (seen0 & 4))
      $this.f26_1 = '';
    else
      $this.f26_1 = authCode;
    if (0 === (seen0 & 8))
      $this.g26_1 = '';
    else
      $this.g26_1 = refNumber;
    if (0 === (seen0 & 16))
      $this.h26_1 = '';
    else
      $this.h26_1 = merchantID;
    if (0 === (seen0 & 32))
      $this.i26_1 = '';
    else
      $this.i26_1 = paymentStatus;
    if (0 === (seen0 & 64))
      $this.j26_1 = '';
    else
      $this.j26_1 = tc;
    if (0 === (seen0 & 128))
      $this.k26_1 = '';
    else
      $this.k26_1 = tvr;
    if (0 === (seen0 & 256))
      $this.l26_1 = '';
    else
      $this.l26_1 = aid;
    if (0 === (seen0 & 512))
      $this.m26_1 = '';
    else
      $this.m26_1 = tsi;
    if (0 === (seen0 & 1024))
      $this.n26_1 = '';
    else
      $this.n26_1 = tid;
    if (0 === (seen0 & 2048))
      $this.o26_1 = '';
    else
      $this.o26_1 = atc;
    if (0 === (seen0 & 4096))
      $this.p26_1 = '';
    else
      $this.p26_1 = applab;
    if (0 === (seen0 & 8192))
      $this.q26_1 = '';
    else
      $this.q26_1 = terminalId;
    if (0 === (seen0 & 16384))
      $this.r26_1 = '';
    else
      $this.r26_1 = customerVpa;
    if (0 === (seen0 & 32768))
      $this.s26_1 = '';
    else
      $this.s26_1 = paymentMode;
    if (0 === (seen0 & 65536))
      $this.t26_1 = '';
    else
      $this.t26_1 = transactionLogId;
    if (0 === (seen0 & 131072))
      $this.u26_1 = '';
    else
      $this.u26_1 = cardHolderName;
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
    this.w26_1 = tmp0_serialDesc;
  }
  x26(encoder, value) {
    var tmp0_desc = this.w26_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.y26_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, $serializer_getInstance_38(), value.y26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.z26_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.z26_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.a27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.a27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.b27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, $serializer_getInstance_39(), value.b27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.c27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.c27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.d27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.d27_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.x26(encoder, value instanceof PineQrCheckerData ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.w26_1;
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
    return PineQrCheckerData.e27(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  al() {
    return this.w26_1;
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
    this.y26_1 = amount;
    this.z26_1 = message;
    this.a27_1 = orderId;
    this.b27_1 = payee;
    this.c27_1 = status;
    this.d27_1 = transactionId;
  }
  toString() {
    return 'PineQrCheckerData(amount=' + toString_0(this.y26_1) + ', message=' + this.z26_1 + ', orderId=' + this.a27_1 + ', payee=' + toString_0(this.b27_1) + ', status=' + this.c27_1 + ', transactionId=' + this.d27_1 + ')';
  }
  hashCode() {
    var result = this.y26_1 == null ? 0 : this.y26_1.hashCode();
    result = imul(result, 31) + (this.z26_1 == null ? 0 : getStringHashCode(this.z26_1)) | 0;
    result = imul(result, 31) + (this.a27_1 == null ? 0 : getStringHashCode(this.a27_1)) | 0;
    result = imul(result, 31) + (this.b27_1 == null ? 0 : this.b27_1.hashCode()) | 0;
    result = imul(result, 31) + (this.c27_1 == null ? 0 : getStringHashCode(this.c27_1)) | 0;
    result = imul(result, 31) + (this.d27_1 == null ? 0 : getStringHashCode(this.d27_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PineQrCheckerData))
      return false;
    var tmp0_other_with_cast = other instanceof PineQrCheckerData ? other : THROW_CCE();
    if (!equals(this.y26_1, tmp0_other_with_cast.y26_1))
      return false;
    if (!(this.z26_1 == tmp0_other_with_cast.z26_1))
      return false;
    if (!(this.a27_1 == tmp0_other_with_cast.a27_1))
      return false;
    if (!equals(this.b27_1, tmp0_other_with_cast.b27_1))
      return false;
    if (!(this.c27_1 == tmp0_other_with_cast.c27_1))
      return false;
    if (!(this.d27_1 == tmp0_other_with_cast.d27_1))
      return false;
    return true;
  }
  static e27(seen0, amount, message, orderId, payee, status, transactionId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_37().w26_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.y26_1 = null;
    else
      $this.y26_1 = amount;
    if (0 === (seen0 & 2))
      $this.z26_1 = null;
    else
      $this.z26_1 = message;
    if (0 === (seen0 & 4))
      $this.a27_1 = null;
    else
      $this.a27_1 = orderId;
    if (0 === (seen0 & 8))
      $this.b27_1 = null;
    else
      $this.b27_1 = payee;
    if (0 === (seen0 & 16))
      $this.c27_1 = null;
    else
      $this.c27_1 = status;
    if (0 === (seen0 & 32))
      $this.d27_1 = null;
    else
      $this.d27_1 = transactionId;
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
    this.f27_1 = tmp0_serialDesc;
  }
  g27(encoder, value) {
    var tmp0_desc = this.f27_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.h27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.h27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.i27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, IntSerializer_getInstance(), value.i27_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.g27(encoder, value instanceof AmountChecker ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.f27_1;
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
    return AmountChecker.j27(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  al() {
    return this.f27_1;
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
    this.h27_1 = currencyCode;
    this.i27_1 = value;
  }
  toString() {
    return 'AmountChecker(currencyCode=' + this.h27_1 + ', value=' + this.i27_1 + ')';
  }
  hashCode() {
    var result = this.h27_1 == null ? 0 : getStringHashCode(this.h27_1);
    result = imul(result, 31) + (this.i27_1 == null ? 0 : this.i27_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof AmountChecker))
      return false;
    var tmp0_other_with_cast = other instanceof AmountChecker ? other : THROW_CCE();
    if (!(this.h27_1 == tmp0_other_with_cast.h27_1))
      return false;
    if (!(this.i27_1 == tmp0_other_with_cast.i27_1))
      return false;
    return true;
  }
  static j27(seen0, currencyCode, value, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_38().f27_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.h27_1 = null;
    else
      $this.h27_1 = currencyCode;
    if (0 === (seen0 & 2))
      $this.i27_1 = null;
    else
      $this.i27_1 = value;
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
    this.k27_1 = tmp0_serialDesc;
  }
  l27(encoder, value) {
    var tmp0_desc = this.k27_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.m27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.m27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.n27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.n27_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.l27(encoder, value instanceof PayeeChecker ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.k27_1;
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
    return PayeeChecker.o27(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  al() {
    return this.k27_1;
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
    this.m27_1 = acquirerName;
    this.n27_1 = merchantReferenceId;
  }
  toString() {
    return 'PayeeChecker(acquirerName=' + this.m27_1 + ', merchantReferenceId=' + this.n27_1 + ')';
  }
  hashCode() {
    var result = this.m27_1 == null ? 0 : getStringHashCode(this.m27_1);
    result = imul(result, 31) + (this.n27_1 == null ? 0 : getStringHashCode(this.n27_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PayeeChecker))
      return false;
    var tmp0_other_with_cast = other instanceof PayeeChecker ? other : THROW_CCE();
    if (!(this.m27_1 == tmp0_other_with_cast.m27_1))
      return false;
    if (!(this.n27_1 == tmp0_other_with_cast.n27_1))
      return false;
    return true;
  }
  static o27(seen0, acquirerName, merchantReferenceId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_39().k27_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.m27_1 = null;
    else
      $this.m27_1 = acquirerName;
    if (0 === (seen0 & 2))
      $this.n27_1 = null;
    else
      $this.n27_1 = merchantReferenceId;
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
    this.p27_1 = tmp0_serialDesc;
  }
  q27(encoder, value) {
    var tmp0_desc = this.p27_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.r27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.r27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.s27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.s27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.t27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.t27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.u27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.u27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.v27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.v27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.w27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, StringSerializer_getInstance(), value.w27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.x27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.x27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.y27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.y27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.z27_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.z27_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.a28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.a28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.b28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.b28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.c28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.c28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.d28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.d28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.e28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, StringSerializer_getInstance(), value.e28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.f28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 14, StringSerializer_getInstance(), value.f28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !(value.g28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 15, StringSerializer_getInstance(), value.g28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !(value.h28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 16, StringSerializer_getInstance(), value.h28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !(value.i28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 17, StringSerializer_getInstance(), value.i28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !(value.j28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 18, StringSerializer_getInstance(), value.j28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !(value.k28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 19, StringSerializer_getInstance(), value.k28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !(value.l28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 20, StringSerializer_getInstance(), value.l28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.m28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 21, StringSerializer_getInstance(), value.m28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 22) ? true : !(value.n28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 22, StringSerializer_getInstance(), value.n28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 23) ? true : !(value.o28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 23, StringSerializer_getInstance(), value.o28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 24) ? true : !(value.p28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 24, StringSerializer_getInstance(), value.p28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 25) ? true : !(value.q28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 25, StringSerializer_getInstance(), value.q28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 26) ? true : !(value.r28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 26, StringSerializer_getInstance(), value.r28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 27) ? true : !(value.s28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 27, StringSerializer_getInstance(), value.s28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 28) ? true : !(value.t28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 28, StringSerializer_getInstance(), value.t28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 29) ? true : !(value.u28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 29, StringSerializer_getInstance(), value.u28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 30) ? true : !(value.v28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 30, StringSerializer_getInstance(), value.v28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 31) ? true : !(value.w28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 31, StringSerializer_getInstance(), value.w28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 32) ? true : !(value.x28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 32, StringSerializer_getInstance(), value.x28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 33) ? true : !(value.y28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 33, StringSerializer_getInstance(), value.y28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 34) ? true : !(value.z28_1 == null)) {
      tmp1_output.lq(tmp0_desc, 34, StringSerializer_getInstance(), value.z28_1);
    }
    if (tmp1_output.pq(tmp0_desc, 35) ? true : !(value.a29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 35, StringSerializer_getInstance(), value.a29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 36) ? true : !(value.b29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 36, $serializer_getInstance_41(), value.b29_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.q27(encoder, value instanceof TranResponse ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.p27_1;
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
    return TranResponse.c29(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, null);
  }
  al() {
    return this.p27_1;
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
    this.r27_1 = merchantID;
    this.s27_1 = payAPIId;
    this.t27_1 = terminalID;
    this.u27_1 = expDate;
    this.v27_1 = acctNo;
    this.w27_1 = cardType;
    this.x27_1 = tranCode;
    this.y27_1 = authCode;
    this.z27_1 = avsResult;
    this.a28_1 = cvvResult;
    this.b28_1 = captureStatus;
    this.c28_1 = cardholderName;
    this.d28_1 = cardHolderID;
    this.e28_1 = refNo;
    this.f28_1 = operatorID;
    this.g28_1 = invoiceNo;
    this.h28_1 = acqRefData;
    this.i28_1 = processorToken;
    this.j28_1 = postProcess;
    this.k28_1 = processData;
    this.l28_1 = recordNo;
    this.m28_1 = recurringData;
    this.n28_1 = entryMethod;
    this.o28_1 = date;
    this.p28_1 = time;
    this.q28_1 = applicationLabel;
    this.r28_1 = tvr;
    this.s28_1 = aid;
    this.t28_1 = iad;
    this.u28_1 = tsi;
    this.v28_1 = arc;
    this.w28_1 = cvm;
    this.x28_1 = receiptLanguage;
    this.y28_1 = customerReceiptLanguage;
    this.z28_1 = isoRespCode;
    this.a29_1 = networkName;
    this.b29_1 = amount;
  }
  toString() {
    return 'TranResponse(merchantID=' + this.r27_1 + ', acctNo=' + this.v27_1 + ', cardType=' + this.w27_1 + ', ' + ('tranCode=' + this.x27_1 + ', authCode=' + this.y27_1 + ', captureStatus=' + this.b28_1 + ', ') + ('refNo=' + this.e28_1 + ', invoiceNo=' + this.g28_1 + ', amount=' + toString_0(this.b29_1) + ', acqRefData=' + this.h28_1 + ', ') + ('processData=' + this.k28_1 + ', recordNo=' + this.l28_1 + ', entryMethod=' + this.n28_1 + ', ') + ('date=' + this.o28_1 + ', time=' + this.p28_1 + ', applicationLabel=' + this.q28_1 + ', tvr=' + this.r28_1 + ', ') + ('iad=' + this.t28_1 + ', tsi=' + this.u28_1 + ', cvm=' + this.w28_1 + ', payAPIId=' + this.s27_1 + ')');
  }
  hashCode() {
    var result = this.r27_1 == null ? 0 : getStringHashCode(this.r27_1);
    result = imul(result, 31) + (this.s27_1 == null ? 0 : getStringHashCode(this.s27_1)) | 0;
    result = imul(result, 31) + (this.t27_1 == null ? 0 : getStringHashCode(this.t27_1)) | 0;
    result = imul(result, 31) + (this.u27_1 == null ? 0 : getStringHashCode(this.u27_1)) | 0;
    result = imul(result, 31) + (this.v27_1 == null ? 0 : getStringHashCode(this.v27_1)) | 0;
    result = imul(result, 31) + (this.w27_1 == null ? 0 : getStringHashCode(this.w27_1)) | 0;
    result = imul(result, 31) + (this.x27_1 == null ? 0 : getStringHashCode(this.x27_1)) | 0;
    result = imul(result, 31) + (this.y27_1 == null ? 0 : getStringHashCode(this.y27_1)) | 0;
    result = imul(result, 31) + (this.z27_1 == null ? 0 : getStringHashCode(this.z27_1)) | 0;
    result = imul(result, 31) + (this.a28_1 == null ? 0 : getStringHashCode(this.a28_1)) | 0;
    result = imul(result, 31) + (this.b28_1 == null ? 0 : getStringHashCode(this.b28_1)) | 0;
    result = imul(result, 31) + (this.c28_1 == null ? 0 : getStringHashCode(this.c28_1)) | 0;
    result = imul(result, 31) + (this.d28_1 == null ? 0 : getStringHashCode(this.d28_1)) | 0;
    result = imul(result, 31) + (this.e28_1 == null ? 0 : getStringHashCode(this.e28_1)) | 0;
    result = imul(result, 31) + (this.f28_1 == null ? 0 : getStringHashCode(this.f28_1)) | 0;
    result = imul(result, 31) + (this.g28_1 == null ? 0 : getStringHashCode(this.g28_1)) | 0;
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
    result = imul(result, 31) + (this.b29_1 == null ? 0 : this.b29_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof TranResponse))
      return false;
    var tmp0_other_with_cast = other instanceof TranResponse ? other : THROW_CCE();
    if (!(this.r27_1 == tmp0_other_with_cast.r27_1))
      return false;
    if (!(this.s27_1 == tmp0_other_with_cast.s27_1))
      return false;
    if (!(this.t27_1 == tmp0_other_with_cast.t27_1))
      return false;
    if (!(this.u27_1 == tmp0_other_with_cast.u27_1))
      return false;
    if (!(this.v27_1 == tmp0_other_with_cast.v27_1))
      return false;
    if (!(this.w27_1 == tmp0_other_with_cast.w27_1))
      return false;
    if (!(this.x27_1 == tmp0_other_with_cast.x27_1))
      return false;
    if (!(this.y27_1 == tmp0_other_with_cast.y27_1))
      return false;
    if (!(this.z27_1 == tmp0_other_with_cast.z27_1))
      return false;
    if (!(this.a28_1 == tmp0_other_with_cast.a28_1))
      return false;
    if (!(this.b28_1 == tmp0_other_with_cast.b28_1))
      return false;
    if (!(this.c28_1 == tmp0_other_with_cast.c28_1))
      return false;
    if (!(this.d28_1 == tmp0_other_with_cast.d28_1))
      return false;
    if (!(this.e28_1 == tmp0_other_with_cast.e28_1))
      return false;
    if (!(this.f28_1 == tmp0_other_with_cast.f28_1))
      return false;
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
    if (!equals(this.b29_1, tmp0_other_with_cast.b29_1))
      return false;
    return true;
  }
  static c29(seen0, seen1, merchantID, payAPIId, terminalID, expDate, acctNo, cardType, tranCode, authCode, avsResult, cvvResult, captureStatus, cardholderName, cardHolderID, refNo, operatorID, invoiceNo, acqRefData, processorToken, postProcess, processData, recordNo, recurringData, entryMethod, date, time, applicationLabel, tvr, aid, iad, tsi, arc, cvm, receiptLanguage, customerReceiptLanguage, isoRespCode, networkName, amount, serializationConstructorMarker) {
    if (!!(!(0 === (0 & seen0)) | !(0 === (0 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([0, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_40().p27_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.r27_1 = null;
    else
      $this.r27_1 = merchantID;
    if (0 === (seen0 & 2))
      $this.s27_1 = null;
    else
      $this.s27_1 = payAPIId;
    if (0 === (seen0 & 4))
      $this.t27_1 = null;
    else
      $this.t27_1 = terminalID;
    if (0 === (seen0 & 8))
      $this.u27_1 = null;
    else
      $this.u27_1 = expDate;
    if (0 === (seen0 & 16))
      $this.v27_1 = null;
    else
      $this.v27_1 = acctNo;
    if (0 === (seen0 & 32))
      $this.w27_1 = null;
    else
      $this.w27_1 = cardType;
    if (0 === (seen0 & 64))
      $this.x27_1 = null;
    else
      $this.x27_1 = tranCode;
    if (0 === (seen0 & 128))
      $this.y27_1 = null;
    else
      $this.y27_1 = authCode;
    if (0 === (seen0 & 256))
      $this.z27_1 = null;
    else
      $this.z27_1 = avsResult;
    if (0 === (seen0 & 512))
      $this.a28_1 = null;
    else
      $this.a28_1 = cvvResult;
    if (0 === (seen0 & 1024))
      $this.b28_1 = null;
    else
      $this.b28_1 = captureStatus;
    if (0 === (seen0 & 2048))
      $this.c28_1 = null;
    else
      $this.c28_1 = cardholderName;
    if (0 === (seen0 & 4096))
      $this.d28_1 = null;
    else
      $this.d28_1 = cardHolderID;
    if (0 === (seen0 & 8192))
      $this.e28_1 = null;
    else
      $this.e28_1 = refNo;
    if (0 === (seen0 & 16384))
      $this.f28_1 = null;
    else
      $this.f28_1 = operatorID;
    if (0 === (seen0 & 32768))
      $this.g28_1 = null;
    else
      $this.g28_1 = invoiceNo;
    if (0 === (seen0 & 65536))
      $this.h28_1 = null;
    else
      $this.h28_1 = acqRefData;
    if (0 === (seen0 & 131072))
      $this.i28_1 = null;
    else
      $this.i28_1 = processorToken;
    if (0 === (seen0 & 262144))
      $this.j28_1 = null;
    else
      $this.j28_1 = postProcess;
    if (0 === (seen0 & 524288))
      $this.k28_1 = null;
    else
      $this.k28_1 = processData;
    if (0 === (seen0 & 1048576))
      $this.l28_1 = null;
    else
      $this.l28_1 = recordNo;
    if (0 === (seen0 & 2097152))
      $this.m28_1 = null;
    else
      $this.m28_1 = recurringData;
    if (0 === (seen0 & 4194304))
      $this.n28_1 = null;
    else
      $this.n28_1 = entryMethod;
    if (0 === (seen0 & 8388608))
      $this.o28_1 = null;
    else
      $this.o28_1 = date;
    if (0 === (seen0 & 16777216))
      $this.p28_1 = null;
    else
      $this.p28_1 = time;
    if (0 === (seen0 & 33554432))
      $this.q28_1 = null;
    else
      $this.q28_1 = applicationLabel;
    if (0 === (seen0 & 67108864))
      $this.r28_1 = null;
    else
      $this.r28_1 = tvr;
    if (0 === (seen0 & 134217728))
      $this.s28_1 = null;
    else
      $this.s28_1 = aid;
    if (0 === (seen0 & 268435456))
      $this.t28_1 = null;
    else
      $this.t28_1 = iad;
    if (0 === (seen0 & 536870912))
      $this.u28_1 = null;
    else
      $this.u28_1 = tsi;
    if (0 === (seen0 & 1073741824))
      $this.v28_1 = null;
    else
      $this.v28_1 = arc;
    if (0 === (seen0 & -2147483648))
      $this.w28_1 = null;
    else
      $this.w28_1 = cvm;
    if (0 === (seen1 & 1))
      $this.x28_1 = null;
    else
      $this.x28_1 = receiptLanguage;
    if (0 === (seen1 & 2))
      $this.y28_1 = null;
    else
      $this.y28_1 = customerReceiptLanguage;
    if (0 === (seen1 & 4))
      $this.z28_1 = null;
    else
      $this.z28_1 = isoRespCode;
    if (0 === (seen1 & 8))
      $this.a29_1 = null;
    else
      $this.a29_1 = networkName;
    if (0 === (seen1 & 16))
      $this.b29_1 = null;
    else
      $this.b29_1 = amount;
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
    this.d29_1 = tmp0_serialDesc;
  }
  e29(encoder, value) {
    var tmp0_desc = this.d29_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !equals(value.f29_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 0, value.f29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !equals(value.g29_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 1, value.g29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !equals(value.h29_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 2, value.h29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !equals(value.i29_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 3, value.i29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !equals(value.j29_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 4, value.j29_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.e29(encoder, value instanceof Amount2 ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.d29_1;
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
    return Amount2.k29(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  al() {
    return this.d29_1;
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
    this.f29_1 = purchase;
    this.g29_1 = authorize;
    this.h29_1 = cashBack;
    this.i29_1 = gratuity;
    this.j29_1 = surchargeWithLookup;
  }
  toString() {
    return 'Amount2(purchase=' + this.f29_1 + ', authorize=' + this.g29_1 + ', cashBack=' + this.h29_1 + ', gratuity=' + this.i29_1 + ', surchargeWithLookup=' + this.j29_1 + ')';
  }
  hashCode() {
    var result = getNumberHashCode(this.f29_1);
    result = imul(result, 31) + getNumberHashCode(this.g29_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h29_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i29_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j29_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Amount2))
      return false;
    var tmp0_other_with_cast = other instanceof Amount2 ? other : THROW_CCE();
    if (!equals(this.f29_1, tmp0_other_with_cast.f29_1))
      return false;
    if (!equals(this.g29_1, tmp0_other_with_cast.g29_1))
      return false;
    if (!equals(this.h29_1, tmp0_other_with_cast.h29_1))
      return false;
    if (!equals(this.i29_1, tmp0_other_with_cast.i29_1))
      return false;
    if (!equals(this.j29_1, tmp0_other_with_cast.j29_1))
      return false;
    return true;
  }
  static k29(seen0, purchase, authorize, cashBack, gratuity, surchargeWithLookup, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_41().d29_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.f29_1 = 0.0;
    else
      $this.f29_1 = purchase;
    if (0 === (seen0 & 2))
      $this.g29_1 = 0.0;
    else
      $this.g29_1 = authorize;
    if (0 === (seen0 & 4))
      $this.h29_1 = 0.0;
    else
      $this.h29_1 = cashBack;
    if (0 === (seen0 & 8))
      $this.i29_1 = 0.0;
    else
      $this.i29_1 = gratuity;
    if (0 === (seen0 & 16))
      $this.j29_1 = 0.0;
    else
      $this.j29_1 = surchargeWithLookup;
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
    tmp.l29_1 = [null, null, null, null, null, null, tmp_1, null, null, tmp_3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tmp_5, tmp_7, tmp_9, null, null, null, null, null, null, null, null, null, null, null, null, tmp_11, null, null, null, null, null, null, null, null, null, null, tmp_13, null, null, null, null, lazy(tmp_14, ItemDetailsList$Companion$$childSerializers$_anonymous__mn4m83_6), null];
  }
}
class $serializer_42 {
  constructor() {
    $serializer_instance_42 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.cravrr.calculationengine.model.ItemDetailsList', this, 59);
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
    tmp0_serialDesc.aw('store_id', true);
    tmp0_serialDesc.aw('sequence_no', true);
    tmp0_serialDesc.aw('tax', true);
    tmp0_serialDesc.aw('selected_modifier', true);
    tmp0_serialDesc.aw('selectedAddonsItems', true);
    tmp0_serialDesc.aw('printer_tag', true);
    tmp0_serialDesc.aw('item_confirmed', true);
    tmp0_serialDesc.aw('is_kot_printed', true);
    tmp0_serialDesc.aw('isSentItem', true);
    tmp0_serialDesc.aw('special_request', true);
    tmp0_serialDesc.aw('total_order_discount', true);
    tmp0_serialDesc.aw('sub_total', true);
    tmp0_serialDesc.aw('is_refund', true);
    tmp0_serialDesc.aw('is_void', true);
    tmp0_serialDesc.aw('is_out_of_stock', true);
    tmp0_serialDesc.aw('inventory_quantity', true);
    tmp0_serialDesc.aw('dietary', true);
    tmp0_serialDesc.aw('nutrition', true);
    tmp0_serialDesc.aw('item_display_img', true);
    tmp0_serialDesc.aw('total_gross_sale', true);
    tmp0_serialDesc.aw('is_prepared', true);
    tmp0_serialDesc.aw('discount_percent', true);
    tmp0_serialDesc.aw('discount_amount', true);
    tmp0_serialDesc.aw('item_seq', true);
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
    this.m29_1 = tmp0_serialDesc;
  }
  n29(encoder, value) {
    var tmp0_desc = this.m29_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_42().l29_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.o1k_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.o1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.p1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.p1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.q1k_1 === false)) {
      tmp1_output.zp(tmp0_desc, 2, value.q1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.r1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.r1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.s1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.s1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.t1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, DoubleSerializer_getInstance(), value.t1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.u1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, tmp2_cached[6].g2(), value.u1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.v1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.v1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.w1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 8, StringSerializer_getInstance(), value.w1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.x1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, tmp2_cached[9].g2(), value.x1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.y1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.y1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.z1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.z1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.a1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.a1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.b1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, StringSerializer_getInstance(), value.b1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 14) ? true : !(value.c1l_1 === 1)) {
      tmp1_output.cq(tmp0_desc, 14, value.c1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 15) ? true : !equals(value.d1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 15, value.d1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 16) ? true : !equals(value.e1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 16, value.e1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 17) ? true : !equals(value.f1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 17, value.f1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 18) ? true : !equals(value.g1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 18, value.g1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 19) ? true : !equals(value.h1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 19, value.h1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 20) ? true : !(value.i1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 20, BooleanSerializer_getInstance(), value.i1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 21) ? true : !(value.j1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 21, StringSerializer_getInstance(), value.j1l_1);
    }
    tmp1_output.hq(tmp0_desc, 22, value.k1l_1);
    if (tmp1_output.pq(tmp0_desc, 23) ? true : !(value.l1l_1 === '')) {
      tmp1_output.hq(tmp0_desc, 23, value.l1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 24) ? true : !(value.m1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 24, StringSerializer_getInstance(), value.m1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 25) ? true : !(value.n1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 25, IntSerializer_getInstance(), value.n1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 26) ? true : !(value.o1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 26, tmp2_cached[26].g2(), value.o1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 27) ? true : !(value.p1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 27, tmp2_cached[27].g2(), value.p1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 28) ? true : !(value.q1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 28, tmp2_cached[28].g2(), value.q1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 29) ? true : !(value.r1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 29, $serializer_getInstance_46(), value.r1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 30) ? true : !(value.s1l_1 === false)) {
      tmp1_output.zp(tmp0_desc, 30, value.s1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 31) ? true : !(value.t1l_1 === false)) {
      tmp1_output.zp(tmp0_desc, 31, value.t1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 32) ? true : !(value.u1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 32, BooleanSerializer_getInstance(), value.u1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 33) ? true : !(value.v1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 33, StringSerializer_getInstance(), value.v1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 34) ? true : !equals(value.w1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 34, value.w1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 35) ? true : !equals(value.x1l_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 35, value.x1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 36) ? true : !(value.y1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 36, BooleanSerializer_getInstance(), value.y1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 37) ? true : !(value.z1l_1 == null)) {
      tmp1_output.lq(tmp0_desc, 37, BooleanSerializer_getInstance(), value.z1l_1);
    }
    if (tmp1_output.pq(tmp0_desc, 38) ? true : !(value.a1m_1 === false)) {
      tmp1_output.zp(tmp0_desc, 38, value.a1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 39) ? true : !(value.b1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 39, IntSerializer_getInstance(), value.b1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 40) ? true : !(value.c1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 40, StringSerializer_getInstance(), value.c1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 41) ? true : !(value.d1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 41, tmp2_cached[41].g2(), value.d1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 42) ? true : !(value.e1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 42, StringSerializer_getInstance(), value.e1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 43) ? true : !equals(value.f1m_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 43, value.f1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 44) ? true : !(value.g1m_1 === false)) {
      tmp1_output.zp(tmp0_desc, 44, value.g1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 45) ? true : !equals(value.h1m_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 45, value.h1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 46) ? true : !equals(value.i1m_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 46, value.i1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 47) ? true : !(value.j1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 47, IntSerializer_getInstance(), value.j1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 48) ? true : !(value.k1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 48, $serializer_getInstance_12(), value.k1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 49) ? true : !(value.l1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 49, BooleanSerializer_getInstance(), value.l1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 50) ? true : !(value.m1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 50, StringSerializer_getInstance(), value.m1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 51) ? true : !(value.n1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 51, StringSerializer_getInstance(), value.n1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 52) ? true : !(value.o1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 52, tmp2_cached[52].g2(), value.o1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 53) ? true : !(value.p1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 53, BooleanSerializer_getInstance(), value.p1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 54) ? true : !(value.q1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 54, BooleanSerializer_getInstance(), value.q1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 55) ? true : !(value.r1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 55, BooleanSerializer_getInstance(), value.r1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 56) ? true : !(value.s1m_1 === false)) {
      tmp1_output.zp(tmp0_desc, 56, value.s1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 57) ? true : !(value.t1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 57, tmp2_cached[57].g2(), value.t1m_1);
    }
    if (tmp1_output.pq(tmp0_desc, 58) ? true : !(value.u1m_1 == null)) {
      tmp1_output.lq(tmp0_desc, 58, DoubleSerializer_getInstance(), value.u1m_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.n29(encoder, value instanceof ItemDetailsList ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.m29_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_bitMask1 = 0;
    var tmp5_local0 = null;
    var tmp6_local1 = null;
    var tmp7_local2 = false;
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
    var tmp19_local14 = 0;
    var tmp20_local15 = 0.0;
    var tmp21_local16 = 0.0;
    var tmp22_local17 = 0.0;
    var tmp23_local18 = 0.0;
    var tmp24_local19 = 0.0;
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
    var tmp35_local30 = false;
    var tmp36_local31 = false;
    var tmp37_local32 = null;
    var tmp38_local33 = null;
    var tmp39_local34 = 0.0;
    var tmp40_local35 = 0.0;
    var tmp41_local36 = null;
    var tmp42_local37 = null;
    var tmp43_local38 = false;
    var tmp44_local39 = null;
    var tmp45_local40 = null;
    var tmp46_local41 = null;
    var tmp47_local42 = null;
    var tmp48_local43 = 0.0;
    var tmp49_local44 = false;
    var tmp50_local45 = 0.0;
    var tmp51_local46 = 0.0;
    var tmp52_local47 = null;
    var tmp53_local48 = null;
    var tmp54_local49 = null;
    var tmp55_local50 = null;
    var tmp56_local51 = null;
    var tmp57_local52 = null;
    var tmp58_local53 = null;
    var tmp59_local54 = null;
    var tmp60_local55 = null;
    var tmp61_local56 = false;
    var tmp62_local57 = null;
    var tmp63_local58 = null;
    var tmp64_input = decoder.so(tmp0_desc);
    var tmp65_cached = Companion_getInstance_42().l29_1;
    if (tmp64_input.ip()) {
      tmp5_local0 = tmp64_input.cp(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp6_local1 = tmp64_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp7_local2 = tmp64_input.uo(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp8_local3 = tmp64_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp9_local4 = tmp64_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp10_local5 = tmp64_input.gp(tmp0_desc, 5, DoubleSerializer_getInstance(), tmp10_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp11_local6 = tmp64_input.gp(tmp0_desc, 6, tmp65_cached[6].g2(), tmp11_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp12_local7 = tmp64_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp13_local8 = tmp64_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp14_local9 = tmp64_input.gp(tmp0_desc, 9, tmp65_cached[9].g2(), tmp14_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp15_local10 = tmp64_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp15_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp16_local11 = tmp64_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp16_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp17_local12 = tmp64_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp17_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp18_local13 = tmp64_input.gp(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp19_local14 = tmp64_input.xo(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp20_local15 = tmp64_input.ap(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp21_local16 = tmp64_input.ap(tmp0_desc, 16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp22_local17 = tmp64_input.ap(tmp0_desc, 17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp23_local18 = tmp64_input.ap(tmp0_desc, 18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp24_local19 = tmp64_input.ap(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp25_local20 = tmp64_input.gp(tmp0_desc, 20, BooleanSerializer_getInstance(), tmp25_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp26_local21 = tmp64_input.gp(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp27_local22 = tmp64_input.cp(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp28_local23 = tmp64_input.cp(tmp0_desc, 23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp29_local24 = tmp64_input.gp(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp30_local25 = tmp64_input.gp(tmp0_desc, 25, IntSerializer_getInstance(), tmp30_local25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp31_local26 = tmp64_input.gp(tmp0_desc, 26, tmp65_cached[26].g2(), tmp31_local26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
      tmp32_local27 = tmp64_input.gp(tmp0_desc, 27, tmp65_cached[27].g2(), tmp32_local27);
      tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
      tmp33_local28 = tmp64_input.gp(tmp0_desc, 28, tmp65_cached[28].g2(), tmp33_local28);
      tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
      tmp34_local29 = tmp64_input.gp(tmp0_desc, 29, $serializer_getInstance_46(), tmp34_local29);
      tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
      tmp35_local30 = tmp64_input.uo(tmp0_desc, 30);
      tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
      tmp36_local31 = tmp64_input.uo(tmp0_desc, 31);
      tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
      tmp37_local32 = tmp64_input.gp(tmp0_desc, 32, BooleanSerializer_getInstance(), tmp37_local32);
      tmp4_bitMask1 = tmp4_bitMask1 | 1;
      tmp38_local33 = tmp64_input.gp(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
      tmp4_bitMask1 = tmp4_bitMask1 | 2;
      tmp39_local34 = tmp64_input.ap(tmp0_desc, 34);
      tmp4_bitMask1 = tmp4_bitMask1 | 4;
      tmp40_local35 = tmp64_input.ap(tmp0_desc, 35);
      tmp4_bitMask1 = tmp4_bitMask1 | 8;
      tmp41_local36 = tmp64_input.gp(tmp0_desc, 36, BooleanSerializer_getInstance(), tmp41_local36);
      tmp4_bitMask1 = tmp4_bitMask1 | 16;
      tmp42_local37 = tmp64_input.gp(tmp0_desc, 37, BooleanSerializer_getInstance(), tmp42_local37);
      tmp4_bitMask1 = tmp4_bitMask1 | 32;
      tmp43_local38 = tmp64_input.uo(tmp0_desc, 38);
      tmp4_bitMask1 = tmp4_bitMask1 | 64;
      tmp44_local39 = tmp64_input.gp(tmp0_desc, 39, IntSerializer_getInstance(), tmp44_local39);
      tmp4_bitMask1 = tmp4_bitMask1 | 128;
      tmp45_local40 = tmp64_input.gp(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
      tmp4_bitMask1 = tmp4_bitMask1 | 256;
      tmp46_local41 = tmp64_input.gp(tmp0_desc, 41, tmp65_cached[41].g2(), tmp46_local41);
      tmp4_bitMask1 = tmp4_bitMask1 | 512;
      tmp47_local42 = tmp64_input.gp(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
      tmp4_bitMask1 = tmp4_bitMask1 | 1024;
      tmp48_local43 = tmp64_input.ap(tmp0_desc, 43);
      tmp4_bitMask1 = tmp4_bitMask1 | 2048;
      tmp49_local44 = tmp64_input.uo(tmp0_desc, 44);
      tmp4_bitMask1 = tmp4_bitMask1 | 4096;
      tmp50_local45 = tmp64_input.ap(tmp0_desc, 45);
      tmp4_bitMask1 = tmp4_bitMask1 | 8192;
      tmp51_local46 = tmp64_input.ap(tmp0_desc, 46);
      tmp4_bitMask1 = tmp4_bitMask1 | 16384;
      tmp52_local47 = tmp64_input.gp(tmp0_desc, 47, IntSerializer_getInstance(), tmp52_local47);
      tmp4_bitMask1 = tmp4_bitMask1 | 32768;
      tmp53_local48 = tmp64_input.gp(tmp0_desc, 48, $serializer_getInstance_12(), tmp53_local48);
      tmp4_bitMask1 = tmp4_bitMask1 | 65536;
      tmp54_local49 = tmp64_input.gp(tmp0_desc, 49, BooleanSerializer_getInstance(), tmp54_local49);
      tmp4_bitMask1 = tmp4_bitMask1 | 131072;
      tmp55_local50 = tmp64_input.gp(tmp0_desc, 50, StringSerializer_getInstance(), tmp55_local50);
      tmp4_bitMask1 = tmp4_bitMask1 | 262144;
      tmp56_local51 = tmp64_input.gp(tmp0_desc, 51, StringSerializer_getInstance(), tmp56_local51);
      tmp4_bitMask1 = tmp4_bitMask1 | 524288;
      tmp57_local52 = tmp64_input.gp(tmp0_desc, 52, tmp65_cached[52].g2(), tmp57_local52);
      tmp4_bitMask1 = tmp4_bitMask1 | 1048576;
      tmp58_local53 = tmp64_input.gp(tmp0_desc, 53, BooleanSerializer_getInstance(), tmp58_local53);
      tmp4_bitMask1 = tmp4_bitMask1 | 2097152;
      tmp59_local54 = tmp64_input.gp(tmp0_desc, 54, BooleanSerializer_getInstance(), tmp59_local54);
      tmp4_bitMask1 = tmp4_bitMask1 | 4194304;
      tmp60_local55 = tmp64_input.gp(tmp0_desc, 55, BooleanSerializer_getInstance(), tmp60_local55);
      tmp4_bitMask1 = tmp4_bitMask1 | 8388608;
      tmp61_local56 = tmp64_input.uo(tmp0_desc, 56);
      tmp4_bitMask1 = tmp4_bitMask1 | 16777216;
      tmp62_local57 = tmp64_input.gp(tmp0_desc, 57, tmp65_cached[57].g2(), tmp62_local57);
      tmp4_bitMask1 = tmp4_bitMask1 | 33554432;
      tmp63_local58 = tmp64_input.gp(tmp0_desc, 58, DoubleSerializer_getInstance(), tmp63_local58);
      tmp4_bitMask1 = tmp4_bitMask1 | 67108864;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp64_input.jp(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp5_local0 = tmp64_input.cp(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp6_local1 = tmp64_input.gp(tmp0_desc, 1, StringSerializer_getInstance(), tmp6_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp7_local2 = tmp64_input.uo(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp8_local3 = tmp64_input.gp(tmp0_desc, 3, StringSerializer_getInstance(), tmp8_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp9_local4 = tmp64_input.gp(tmp0_desc, 4, StringSerializer_getInstance(), tmp9_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp10_local5 = tmp64_input.gp(tmp0_desc, 5, DoubleSerializer_getInstance(), tmp10_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp11_local6 = tmp64_input.gp(tmp0_desc, 6, tmp65_cached[6].g2(), tmp11_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp12_local7 = tmp64_input.gp(tmp0_desc, 7, StringSerializer_getInstance(), tmp12_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp13_local8 = tmp64_input.gp(tmp0_desc, 8, StringSerializer_getInstance(), tmp13_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp14_local9 = tmp64_input.gp(tmp0_desc, 9, tmp65_cached[9].g2(), tmp14_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp15_local10 = tmp64_input.gp(tmp0_desc, 10, StringSerializer_getInstance(), tmp15_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp16_local11 = tmp64_input.gp(tmp0_desc, 11, StringSerializer_getInstance(), tmp16_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp17_local12 = tmp64_input.gp(tmp0_desc, 12, StringSerializer_getInstance(), tmp17_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp18_local13 = tmp64_input.gp(tmp0_desc, 13, StringSerializer_getInstance(), tmp18_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp19_local14 = tmp64_input.xo(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp20_local15 = tmp64_input.ap(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp21_local16 = tmp64_input.ap(tmp0_desc, 16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp22_local17 = tmp64_input.ap(tmp0_desc, 17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp23_local18 = tmp64_input.ap(tmp0_desc, 18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp24_local19 = tmp64_input.ap(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp25_local20 = tmp64_input.gp(tmp0_desc, 20, BooleanSerializer_getInstance(), tmp25_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp26_local21 = tmp64_input.gp(tmp0_desc, 21, StringSerializer_getInstance(), tmp26_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp27_local22 = tmp64_input.cp(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp28_local23 = tmp64_input.cp(tmp0_desc, 23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp29_local24 = tmp64_input.gp(tmp0_desc, 24, StringSerializer_getInstance(), tmp29_local24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp30_local25 = tmp64_input.gp(tmp0_desc, 25, IntSerializer_getInstance(), tmp30_local25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp31_local26 = tmp64_input.gp(tmp0_desc, 26, tmp65_cached[26].g2(), tmp31_local26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          case 27:
            tmp32_local27 = tmp64_input.gp(tmp0_desc, 27, tmp65_cached[27].g2(), tmp32_local27);
            tmp3_bitMask0 = tmp3_bitMask0 | 134217728;
            break;
          case 28:
            tmp33_local28 = tmp64_input.gp(tmp0_desc, 28, tmp65_cached[28].g2(), tmp33_local28);
            tmp3_bitMask0 = tmp3_bitMask0 | 268435456;
            break;
          case 29:
            tmp34_local29 = tmp64_input.gp(tmp0_desc, 29, $serializer_getInstance_46(), tmp34_local29);
            tmp3_bitMask0 = tmp3_bitMask0 | 536870912;
            break;
          case 30:
            tmp35_local30 = tmp64_input.uo(tmp0_desc, 30);
            tmp3_bitMask0 = tmp3_bitMask0 | 1073741824;
            break;
          case 31:
            tmp36_local31 = tmp64_input.uo(tmp0_desc, 31);
            tmp3_bitMask0 = tmp3_bitMask0 | -2147483648;
            break;
          case 32:
            tmp37_local32 = tmp64_input.gp(tmp0_desc, 32, BooleanSerializer_getInstance(), tmp37_local32);
            tmp4_bitMask1 = tmp4_bitMask1 | 1;
            break;
          case 33:
            tmp38_local33 = tmp64_input.gp(tmp0_desc, 33, StringSerializer_getInstance(), tmp38_local33);
            tmp4_bitMask1 = tmp4_bitMask1 | 2;
            break;
          case 34:
            tmp39_local34 = tmp64_input.ap(tmp0_desc, 34);
            tmp4_bitMask1 = tmp4_bitMask1 | 4;
            break;
          case 35:
            tmp40_local35 = tmp64_input.ap(tmp0_desc, 35);
            tmp4_bitMask1 = tmp4_bitMask1 | 8;
            break;
          case 36:
            tmp41_local36 = tmp64_input.gp(tmp0_desc, 36, BooleanSerializer_getInstance(), tmp41_local36);
            tmp4_bitMask1 = tmp4_bitMask1 | 16;
            break;
          case 37:
            tmp42_local37 = tmp64_input.gp(tmp0_desc, 37, BooleanSerializer_getInstance(), tmp42_local37);
            tmp4_bitMask1 = tmp4_bitMask1 | 32;
            break;
          case 38:
            tmp43_local38 = tmp64_input.uo(tmp0_desc, 38);
            tmp4_bitMask1 = tmp4_bitMask1 | 64;
            break;
          case 39:
            tmp44_local39 = tmp64_input.gp(tmp0_desc, 39, IntSerializer_getInstance(), tmp44_local39);
            tmp4_bitMask1 = tmp4_bitMask1 | 128;
            break;
          case 40:
            tmp45_local40 = tmp64_input.gp(tmp0_desc, 40, StringSerializer_getInstance(), tmp45_local40);
            tmp4_bitMask1 = tmp4_bitMask1 | 256;
            break;
          case 41:
            tmp46_local41 = tmp64_input.gp(tmp0_desc, 41, tmp65_cached[41].g2(), tmp46_local41);
            tmp4_bitMask1 = tmp4_bitMask1 | 512;
            break;
          case 42:
            tmp47_local42 = tmp64_input.gp(tmp0_desc, 42, StringSerializer_getInstance(), tmp47_local42);
            tmp4_bitMask1 = tmp4_bitMask1 | 1024;
            break;
          case 43:
            tmp48_local43 = tmp64_input.ap(tmp0_desc, 43);
            tmp4_bitMask1 = tmp4_bitMask1 | 2048;
            break;
          case 44:
            tmp49_local44 = tmp64_input.uo(tmp0_desc, 44);
            tmp4_bitMask1 = tmp4_bitMask1 | 4096;
            break;
          case 45:
            tmp50_local45 = tmp64_input.ap(tmp0_desc, 45);
            tmp4_bitMask1 = tmp4_bitMask1 | 8192;
            break;
          case 46:
            tmp51_local46 = tmp64_input.ap(tmp0_desc, 46);
            tmp4_bitMask1 = tmp4_bitMask1 | 16384;
            break;
          case 47:
            tmp52_local47 = tmp64_input.gp(tmp0_desc, 47, IntSerializer_getInstance(), tmp52_local47);
            tmp4_bitMask1 = tmp4_bitMask1 | 32768;
            break;
          case 48:
            tmp53_local48 = tmp64_input.gp(tmp0_desc, 48, $serializer_getInstance_12(), tmp53_local48);
            tmp4_bitMask1 = tmp4_bitMask1 | 65536;
            break;
          case 49:
            tmp54_local49 = tmp64_input.gp(tmp0_desc, 49, BooleanSerializer_getInstance(), tmp54_local49);
            tmp4_bitMask1 = tmp4_bitMask1 | 131072;
            break;
          case 50:
            tmp55_local50 = tmp64_input.gp(tmp0_desc, 50, StringSerializer_getInstance(), tmp55_local50);
            tmp4_bitMask1 = tmp4_bitMask1 | 262144;
            break;
          case 51:
            tmp56_local51 = tmp64_input.gp(tmp0_desc, 51, StringSerializer_getInstance(), tmp56_local51);
            tmp4_bitMask1 = tmp4_bitMask1 | 524288;
            break;
          case 52:
            tmp57_local52 = tmp64_input.gp(tmp0_desc, 52, tmp65_cached[52].g2(), tmp57_local52);
            tmp4_bitMask1 = tmp4_bitMask1 | 1048576;
            break;
          case 53:
            tmp58_local53 = tmp64_input.gp(tmp0_desc, 53, BooleanSerializer_getInstance(), tmp58_local53);
            tmp4_bitMask1 = tmp4_bitMask1 | 2097152;
            break;
          case 54:
            tmp59_local54 = tmp64_input.gp(tmp0_desc, 54, BooleanSerializer_getInstance(), tmp59_local54);
            tmp4_bitMask1 = tmp4_bitMask1 | 4194304;
            break;
          case 55:
            tmp60_local55 = tmp64_input.gp(tmp0_desc, 55, BooleanSerializer_getInstance(), tmp60_local55);
            tmp4_bitMask1 = tmp4_bitMask1 | 8388608;
            break;
          case 56:
            tmp61_local56 = tmp64_input.uo(tmp0_desc, 56);
            tmp4_bitMask1 = tmp4_bitMask1 | 16777216;
            break;
          case 57:
            tmp62_local57 = tmp64_input.gp(tmp0_desc, 57, tmp65_cached[57].g2(), tmp62_local57);
            tmp4_bitMask1 = tmp4_bitMask1 | 33554432;
            break;
          case 58:
            tmp63_local58 = tmp64_input.gp(tmp0_desc, 58, DoubleSerializer_getInstance(), tmp63_local58);
            tmp4_bitMask1 = tmp4_bitMask1 | 67108864;
            break;
          default:
            throw UnknownFieldException.hm(tmp2_index);
        }
      }
    tmp64_input.to(tmp0_desc);
    return ItemDetailsList.o29(tmp3_bitMask0, tmp4_bitMask1, tmp5_local0, tmp6_local1, tmp7_local2, tmp8_local3, tmp9_local4, tmp10_local5, tmp11_local6, tmp12_local7, tmp13_local8, tmp14_local9, tmp15_local10, tmp16_local11, tmp17_local12, tmp18_local13, tmp19_local14, tmp20_local15, tmp21_local16, tmp22_local17, tmp23_local18, tmp24_local19, tmp25_local20, tmp26_local21, tmp27_local22, tmp28_local23, tmp29_local24, tmp30_local25, tmp31_local26, tmp32_local27, tmp33_local28, tmp34_local29, tmp35_local30, tmp36_local31, tmp37_local32, tmp38_local33, tmp39_local34, tmp40_local35, tmp41_local36, tmp42_local37, tmp43_local38, tmp44_local39, tmp45_local40, tmp46_local41, tmp47_local42, tmp48_local43, tmp49_local44, tmp50_local45, tmp51_local46, tmp52_local47, tmp53_local48, tmp54_local49, tmp55_local50, tmp56_local51, tmp57_local52, tmp58_local53, tmp59_local54, tmp60_local55, tmp61_local56, tmp62_local57, tmp63_local58, null);
  }
  al() {
    return this.m29_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_42().l29_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(tmp0_cached[6].g2()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[9].g2()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[26].g2()), get_nullable(tmp0_cached[27].g2()), get_nullable(tmp0_cached[28].g2()), get_nullable($serializer_getInstance_46()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[41].g2()), get_nullable(StringSerializer_getInstance()), DoubleSerializer_getInstance(), BooleanSerializer_getInstance(), DoubleSerializer_getInstance(), DoubleSerializer_getInstance(), get_nullable(IntSerializer_getInstance()), get_nullable($serializer_getInstance_12()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[52].g2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable(tmp0_cached[57].g2()), get_nullable(DoubleSerializer_getInstance())];
  }
}
class ItemDetailsList {
  constructor(id, itemId, isStock, aliasName, diningOption, additionalPrice, selectedCombo, name, mainItemID, tag, itemImage, mappingId, description, sku, quantity, regularSalesUnitPrice, extendedAmount, totalDiscount, totalItemTax, totalNetSale, status, categoryId, itemName, variantName, storeId, sequenceNo, taxList, selectedModifier, selectedAddonsItems, printerTag, itemConfirmed, isKotPrinted, isSentItem, specialRequest, totalOrderDiscount, subTotal, isRefund, isVoid, isOutOfStock, inventoryQuantity, dietary, nutrition, itemDisplayImage, totalGrossSale, isPrepared, discountPercent, discountAmount, itemSeq, appliedDiscount, isRetailPrice, itemType, comboGroupName, suggestedItems, isBaseItem, isOpenItem, isMembership, isSelectedItem, channelPlu, taxableAmount) {
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
    isRefund = isRefund === VOID ? null : isRefund;
    isVoid = isVoid === VOID ? null : isVoid;
    isOutOfStock = isOutOfStock === VOID ? false : isOutOfStock;
    inventoryQuantity = inventoryQuantity === VOID ? null : inventoryQuantity;
    dietary = dietary === VOID ? null : dietary;
    nutrition = nutrition === VOID ? null : nutrition;
    itemDisplayImage = itemDisplayImage === VOID ? null : itemDisplayImage;
    totalGrossSale = totalGrossSale === VOID ? 0.0 : totalGrossSale;
    isPrepared = isPrepared === VOID ? false : isPrepared;
    discountPercent = discountPercent === VOID ? 0.0 : discountPercent;
    discountAmount = discountAmount === VOID ? 0.0 : discountAmount;
    itemSeq = itemSeq === VOID ? null : itemSeq;
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
    this.o1k_1 = id;
    this.p1k_1 = itemId;
    this.q1k_1 = isStock;
    this.r1k_1 = aliasName;
    this.s1k_1 = diningOption;
    this.t1k_1 = additionalPrice;
    this.u1k_1 = selectedCombo;
    this.v1k_1 = name;
    this.w1k_1 = mainItemID;
    this.x1k_1 = tag;
    this.y1k_1 = itemImage;
    this.z1k_1 = mappingId;
    this.a1l_1 = description;
    this.b1l_1 = sku;
    this.c1l_1 = quantity;
    this.d1l_1 = regularSalesUnitPrice;
    this.e1l_1 = extendedAmount;
    this.f1l_1 = totalDiscount;
    this.g1l_1 = totalItemTax;
    this.h1l_1 = totalNetSale;
    this.i1l_1 = status;
    this.j1l_1 = categoryId;
    this.k1l_1 = itemName;
    this.l1l_1 = variantName;
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
    this.y1l_1 = isRefund;
    this.z1l_1 = isVoid;
    this.a1m_1 = isOutOfStock;
    this.b1m_1 = inventoryQuantity;
    this.c1m_1 = dietary;
    this.d1m_1 = nutrition;
    this.e1m_1 = itemDisplayImage;
    this.f1m_1 = totalGrossSale;
    this.g1m_1 = isPrepared;
    this.h1m_1 = discountPercent;
    this.i1m_1 = discountAmount;
    this.j1m_1 = itemSeq;
    this.k1m_1 = appliedDiscount;
    this.l1m_1 = isRetailPrice;
    this.m1m_1 = itemType;
    this.n1m_1 = comboGroupName;
    this.o1m_1 = suggestedItems;
    this.p1m_1 = isBaseItem;
    this.q1m_1 = isOpenItem;
    this.r1m_1 = isMembership;
    this.s1m_1 = isSelectedItem;
    this.t1m_1 = channelPlu;
    this.u1m_1 = taxableAmount;
  }
  p29(id, itemId, isStock, aliasName, diningOption, additionalPrice, selectedCombo, name, mainItemID, tag, itemImage, mappingId, description, sku, quantity, regularSalesUnitPrice, extendedAmount, totalDiscount, totalItemTax, totalNetSale, status, categoryId, itemName, variantName, storeId, sequenceNo, taxList, selectedModifier, selectedAddonsItems, printerTag, itemConfirmed, isKotPrinted, isSentItem, specialRequest, totalOrderDiscount, subTotal, isRefund, isVoid, isOutOfStock, inventoryQuantity, dietary, nutrition, itemDisplayImage, totalGrossSale, isPrepared, discountPercent, discountAmount, itemSeq, appliedDiscount, isRetailPrice, itemType, comboGroupName, suggestedItems, isBaseItem, isOpenItem, isMembership, isSelectedItem, channelPlu, taxableAmount) {
    return new ItemDetailsList(id, itemId, isStock, aliasName, diningOption, additionalPrice, selectedCombo, name, mainItemID, tag, itemImage, mappingId, description, sku, quantity, regularSalesUnitPrice, extendedAmount, totalDiscount, totalItemTax, totalNetSale, status, categoryId, itemName, variantName, storeId, sequenceNo, taxList, selectedModifier, selectedAddonsItems, printerTag, itemConfirmed, isKotPrinted, isSentItem, specialRequest, totalOrderDiscount, subTotal, isRefund, isVoid, isOutOfStock, inventoryQuantity, dietary, nutrition, itemDisplayImage, totalGrossSale, isPrepared, discountPercent, discountAmount, itemSeq, appliedDiscount, isRetailPrice, itemType, comboGroupName, suggestedItems, isBaseItem, isOpenItem, isMembership, isSelectedItem, channelPlu, taxableAmount);
  }
  b1p(id, itemId, isStock, aliasName, diningOption, additionalPrice, selectedCombo, name, mainItemID, tag, itemImage, mappingId, description, sku, quantity, regularSalesUnitPrice, extendedAmount, totalDiscount, totalItemTax, totalNetSale, status, categoryId, itemName, variantName, storeId, sequenceNo, taxList, selectedModifier, selectedAddonsItems, printerTag, itemConfirmed, isKotPrinted, isSentItem, specialRequest, totalOrderDiscount, subTotal, isRefund, isVoid, isOutOfStock, inventoryQuantity, dietary, nutrition, itemDisplayImage, totalGrossSale, isPrepared, discountPercent, discountAmount, itemSeq, appliedDiscount, isRetailPrice, itemType, comboGroupName, suggestedItems, isBaseItem, isOpenItem, isMembership, isSelectedItem, channelPlu, taxableAmount, $super) {
    id = id === VOID ? this.o1k_1 : id;
    itemId = itemId === VOID ? this.p1k_1 : itemId;
    isStock = isStock === VOID ? this.q1k_1 : isStock;
    aliasName = aliasName === VOID ? this.r1k_1 : aliasName;
    diningOption = diningOption === VOID ? this.s1k_1 : diningOption;
    additionalPrice = additionalPrice === VOID ? this.t1k_1 : additionalPrice;
    selectedCombo = selectedCombo === VOID ? this.u1k_1 : selectedCombo;
    name = name === VOID ? this.v1k_1 : name;
    mainItemID = mainItemID === VOID ? this.w1k_1 : mainItemID;
    tag = tag === VOID ? this.x1k_1 : tag;
    itemImage = itemImage === VOID ? this.y1k_1 : itemImage;
    mappingId = mappingId === VOID ? this.z1k_1 : mappingId;
    description = description === VOID ? this.a1l_1 : description;
    sku = sku === VOID ? this.b1l_1 : sku;
    quantity = quantity === VOID ? this.c1l_1 : quantity;
    regularSalesUnitPrice = regularSalesUnitPrice === VOID ? this.d1l_1 : regularSalesUnitPrice;
    extendedAmount = extendedAmount === VOID ? this.e1l_1 : extendedAmount;
    totalDiscount = totalDiscount === VOID ? this.f1l_1 : totalDiscount;
    totalItemTax = totalItemTax === VOID ? this.g1l_1 : totalItemTax;
    totalNetSale = totalNetSale === VOID ? this.h1l_1 : totalNetSale;
    status = status === VOID ? this.i1l_1 : status;
    categoryId = categoryId === VOID ? this.j1l_1 : categoryId;
    itemName = itemName === VOID ? this.k1l_1 : itemName;
    variantName = variantName === VOID ? this.l1l_1 : variantName;
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
    isRefund = isRefund === VOID ? this.y1l_1 : isRefund;
    isVoid = isVoid === VOID ? this.z1l_1 : isVoid;
    isOutOfStock = isOutOfStock === VOID ? this.a1m_1 : isOutOfStock;
    inventoryQuantity = inventoryQuantity === VOID ? this.b1m_1 : inventoryQuantity;
    dietary = dietary === VOID ? this.c1m_1 : dietary;
    nutrition = nutrition === VOID ? this.d1m_1 : nutrition;
    itemDisplayImage = itemDisplayImage === VOID ? this.e1m_1 : itemDisplayImage;
    totalGrossSale = totalGrossSale === VOID ? this.f1m_1 : totalGrossSale;
    isPrepared = isPrepared === VOID ? this.g1m_1 : isPrepared;
    discountPercent = discountPercent === VOID ? this.h1m_1 : discountPercent;
    discountAmount = discountAmount === VOID ? this.i1m_1 : discountAmount;
    itemSeq = itemSeq === VOID ? this.j1m_1 : itemSeq;
    appliedDiscount = appliedDiscount === VOID ? this.k1m_1 : appliedDiscount;
    isRetailPrice = isRetailPrice === VOID ? this.l1m_1 : isRetailPrice;
    itemType = itemType === VOID ? this.m1m_1 : itemType;
    comboGroupName = comboGroupName === VOID ? this.n1m_1 : comboGroupName;
    suggestedItems = suggestedItems === VOID ? this.o1m_1 : suggestedItems;
    isBaseItem = isBaseItem === VOID ? this.p1m_1 : isBaseItem;
    isOpenItem = isOpenItem === VOID ? this.q1m_1 : isOpenItem;
    isMembership = isMembership === VOID ? this.r1m_1 : isMembership;
    isSelectedItem = isSelectedItem === VOID ? this.s1m_1 : isSelectedItem;
    channelPlu = channelPlu === VOID ? this.t1m_1 : channelPlu;
    taxableAmount = taxableAmount === VOID ? this.u1m_1 : taxableAmount;
    return $super === VOID ? this.p29(id, itemId, isStock, aliasName, diningOption, additionalPrice, selectedCombo, name, mainItemID, tag, itemImage, mappingId, description, sku, quantity, regularSalesUnitPrice, extendedAmount, totalDiscount, totalItemTax, totalNetSale, status, categoryId, itemName, variantName, storeId, sequenceNo, taxList, selectedModifier, selectedAddonsItems, printerTag, itemConfirmed, isKotPrinted, isSentItem, specialRequest, totalOrderDiscount, subTotal, isRefund, isVoid, isOutOfStock, inventoryQuantity, dietary, nutrition, itemDisplayImage, totalGrossSale, isPrepared, discountPercent, discountAmount, itemSeq, appliedDiscount, isRetailPrice, itemType, comboGroupName, suggestedItems, isBaseItem, isOpenItem, isMembership, isSelectedItem, channelPlu, taxableAmount) : $super.p29.call(this, id, itemId, isStock, aliasName, diningOption, additionalPrice, selectedCombo, name, mainItemID, tag, itemImage, mappingId, description, sku, quantity, regularSalesUnitPrice, extendedAmount, totalDiscount, totalItemTax, totalNetSale, status, categoryId, itemName, variantName, storeId, sequenceNo, taxList, selectedModifier, selectedAddonsItems, printerTag, itemConfirmed, isKotPrinted, isSentItem, specialRequest, totalOrderDiscount, subTotal, isRefund, isVoid, isOutOfStock, inventoryQuantity, dietary, nutrition, itemDisplayImage, totalGrossSale, isPrepared, discountPercent, discountAmount, itemSeq, appliedDiscount, isRetailPrice, itemType, comboGroupName, suggestedItems, isBaseItem, isOpenItem, isMembership, isSelectedItem, channelPlu, taxableAmount);
  }
  toString() {
    return 'ItemDetailsList(id=' + this.o1k_1 + ', itemId=' + this.p1k_1 + ', isStock=' + this.q1k_1 + ', aliasName=' + this.r1k_1 + ', diningOption=' + this.s1k_1 + ', additionalPrice=' + this.t1k_1 + ', selectedCombo=' + toString_0(this.u1k_1) + ', name=' + this.v1k_1 + ', mainItemID=' + this.w1k_1 + ', tag=' + toString_0(this.x1k_1) + ', itemImage=' + this.y1k_1 + ', mappingId=' + this.z1k_1 + ', description=' + this.a1l_1 + ', sku=' + this.b1l_1 + ', quantity=' + this.c1l_1 + ', regularSalesUnitPrice=' + this.d1l_1 + ', extendedAmount=' + this.e1l_1 + ', totalDiscount=' + this.f1l_1 + ', totalItemTax=' + this.g1l_1 + ', totalNetSale=' + this.h1l_1 + ', status=' + this.i1l_1 + ', categoryId=' + this.j1l_1 + ', itemName=' + this.k1l_1 + ', variantName=' + this.l1l_1 + ', storeId=' + this.m1l_1 + ', sequenceNo=' + this.n1l_1 + ', taxList=' + toString_0(this.o1l_1) + ', selectedModifier=' + toString_0(this.p1l_1) + ', selectedAddonsItems=' + toString_0(this.q1l_1) + ', printerTag=' + toString_0(this.r1l_1) + ', itemConfirmed=' + this.s1l_1 + ', isKotPrinted=' + this.t1l_1 + ', isSentItem=' + this.u1l_1 + ', specialRequest=' + this.v1l_1 + ', totalOrderDiscount=' + this.w1l_1 + ', subTotal=' + this.x1l_1 + ', isRefund=' + this.y1l_1 + ', isVoid=' + this.z1l_1 + ', isOutOfStock=' + this.a1m_1 + ', inventoryQuantity=' + this.b1m_1 + ', dietary=' + this.c1m_1 + ', nutrition=' + toString_0(this.d1m_1) + ', itemDisplayImage=' + this.e1m_1 + ', totalGrossSale=' + this.f1m_1 + ', isPrepared=' + this.g1m_1 + ', discountPercent=' + this.h1m_1 + ', discountAmount=' + this.i1m_1 + ', itemSeq=' + this.j1m_1 + ', appliedDiscount=' + toString_0(this.k1m_1) + ', isRetailPrice=' + this.l1m_1 + ', itemType=' + this.m1m_1 + ', comboGroupName=' + this.n1m_1 + ', suggestedItems=' + toString_0(this.o1m_1) + ', isBaseItem=' + this.p1m_1 + ', isOpenItem=' + this.q1m_1 + ', isMembership=' + this.r1m_1 + ', isSelectedItem=' + this.s1m_1 + ', channelPlu=' + toString_0(this.t1m_1) + ', taxableAmount=' + this.u1m_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.o1k_1);
    result = imul(result, 31) + (this.p1k_1 == null ? 0 : getStringHashCode(this.p1k_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.q1k_1) | 0;
    result = imul(result, 31) + (this.r1k_1 == null ? 0 : getStringHashCode(this.r1k_1)) | 0;
    result = imul(result, 31) + (this.s1k_1 == null ? 0 : getStringHashCode(this.s1k_1)) | 0;
    result = imul(result, 31) + (this.t1k_1 == null ? 0 : getNumberHashCode(this.t1k_1)) | 0;
    result = imul(result, 31) + (this.u1k_1 == null ? 0 : this.u1k_1.hashCode()) | 0;
    result = imul(result, 31) + (this.v1k_1 == null ? 0 : getStringHashCode(this.v1k_1)) | 0;
    result = imul(result, 31) + (this.w1k_1 == null ? 0 : getStringHashCode(this.w1k_1)) | 0;
    result = imul(result, 31) + (this.x1k_1 == null ? 0 : hashCode(this.x1k_1)) | 0;
    result = imul(result, 31) + (this.y1k_1 == null ? 0 : getStringHashCode(this.y1k_1)) | 0;
    result = imul(result, 31) + (this.z1k_1 == null ? 0 : getStringHashCode(this.z1k_1)) | 0;
    result = imul(result, 31) + (this.a1l_1 == null ? 0 : getStringHashCode(this.a1l_1)) | 0;
    result = imul(result, 31) + (this.b1l_1 == null ? 0 : getStringHashCode(this.b1l_1)) | 0;
    result = imul(result, 31) + this.c1l_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.d1l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e1l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f1l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g1l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h1l_1) | 0;
    result = imul(result, 31) + (this.i1l_1 == null ? 0 : getBooleanHashCode(this.i1l_1)) | 0;
    result = imul(result, 31) + (this.j1l_1 == null ? 0 : getStringHashCode(this.j1l_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.k1l_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l1l_1) | 0;
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
    result = imul(result, 31) + (this.y1l_1 == null ? 0 : getBooleanHashCode(this.y1l_1)) | 0;
    result = imul(result, 31) + (this.z1l_1 == null ? 0 : getBooleanHashCode(this.z1l_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.a1m_1) | 0;
    result = imul(result, 31) + (this.b1m_1 == null ? 0 : this.b1m_1) | 0;
    result = imul(result, 31) + (this.c1m_1 == null ? 0 : getStringHashCode(this.c1m_1)) | 0;
    result = imul(result, 31) + (this.d1m_1 == null ? 0 : this.d1m_1.hashCode()) | 0;
    result = imul(result, 31) + (this.e1m_1 == null ? 0 : getStringHashCode(this.e1m_1)) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f1m_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g1m_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h1m_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i1m_1) | 0;
    result = imul(result, 31) + (this.j1m_1 == null ? 0 : this.j1m_1) | 0;
    result = imul(result, 31) + (this.k1m_1 == null ? 0 : this.k1m_1.hashCode()) | 0;
    result = imul(result, 31) + (this.l1m_1 == null ? 0 : getBooleanHashCode(this.l1m_1)) | 0;
    result = imul(result, 31) + (this.m1m_1 == null ? 0 : getStringHashCode(this.m1m_1)) | 0;
    result = imul(result, 31) + (this.n1m_1 == null ? 0 : getStringHashCode(this.n1m_1)) | 0;
    result = imul(result, 31) + (this.o1m_1 == null ? 0 : this.o1m_1.hashCode()) | 0;
    result = imul(result, 31) + (this.p1m_1 == null ? 0 : getBooleanHashCode(this.p1m_1)) | 0;
    result = imul(result, 31) + (this.q1m_1 == null ? 0 : getBooleanHashCode(this.q1m_1)) | 0;
    result = imul(result, 31) + (this.r1m_1 == null ? 0 : getBooleanHashCode(this.r1m_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.s1m_1) | 0;
    result = imul(result, 31) + (this.t1m_1 == null ? 0 : hashCode(this.t1m_1)) | 0;
    result = imul(result, 31) + (this.u1m_1 == null ? 0 : getNumberHashCode(this.u1m_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ItemDetailsList))
      return false;
    var tmp0_other_with_cast = other instanceof ItemDetailsList ? other : THROW_CCE();
    if (!(this.o1k_1 === tmp0_other_with_cast.o1k_1))
      return false;
    if (!(this.p1k_1 == tmp0_other_with_cast.p1k_1))
      return false;
    if (!(this.q1k_1 === tmp0_other_with_cast.q1k_1))
      return false;
    if (!(this.r1k_1 == tmp0_other_with_cast.r1k_1))
      return false;
    if (!(this.s1k_1 == tmp0_other_with_cast.s1k_1))
      return false;
    if (!equals(this.t1k_1, tmp0_other_with_cast.t1k_1))
      return false;
    if (!equals(this.u1k_1, tmp0_other_with_cast.u1k_1))
      return false;
    if (!(this.v1k_1 == tmp0_other_with_cast.v1k_1))
      return false;
    if (!(this.w1k_1 == tmp0_other_with_cast.w1k_1))
      return false;
    if (!equals(this.x1k_1, tmp0_other_with_cast.x1k_1))
      return false;
    if (!(this.y1k_1 == tmp0_other_with_cast.y1k_1))
      return false;
    if (!(this.z1k_1 == tmp0_other_with_cast.z1k_1))
      return false;
    if (!(this.a1l_1 == tmp0_other_with_cast.a1l_1))
      return false;
    if (!(this.b1l_1 == tmp0_other_with_cast.b1l_1))
      return false;
    if (!(this.c1l_1 === tmp0_other_with_cast.c1l_1))
      return false;
    if (!equals(this.d1l_1, tmp0_other_with_cast.d1l_1))
      return false;
    if (!equals(this.e1l_1, tmp0_other_with_cast.e1l_1))
      return false;
    if (!equals(this.f1l_1, tmp0_other_with_cast.f1l_1))
      return false;
    if (!equals(this.g1l_1, tmp0_other_with_cast.g1l_1))
      return false;
    if (!equals(this.h1l_1, tmp0_other_with_cast.h1l_1))
      return false;
    if (!(this.i1l_1 == tmp0_other_with_cast.i1l_1))
      return false;
    if (!(this.j1l_1 == tmp0_other_with_cast.j1l_1))
      return false;
    if (!(this.k1l_1 === tmp0_other_with_cast.k1l_1))
      return false;
    if (!(this.l1l_1 === tmp0_other_with_cast.l1l_1))
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
    if (!(this.y1l_1 == tmp0_other_with_cast.y1l_1))
      return false;
    if (!(this.z1l_1 == tmp0_other_with_cast.z1l_1))
      return false;
    if (!(this.a1m_1 === tmp0_other_with_cast.a1m_1))
      return false;
    if (!(this.b1m_1 == tmp0_other_with_cast.b1m_1))
      return false;
    if (!(this.c1m_1 == tmp0_other_with_cast.c1m_1))
      return false;
    if (!equals(this.d1m_1, tmp0_other_with_cast.d1m_1))
      return false;
    if (!(this.e1m_1 == tmp0_other_with_cast.e1m_1))
      return false;
    if (!equals(this.f1m_1, tmp0_other_with_cast.f1m_1))
      return false;
    if (!(this.g1m_1 === tmp0_other_with_cast.g1m_1))
      return false;
    if (!equals(this.h1m_1, tmp0_other_with_cast.h1m_1))
      return false;
    if (!equals(this.i1m_1, tmp0_other_with_cast.i1m_1))
      return false;
    if (!(this.j1m_1 == tmp0_other_with_cast.j1m_1))
      return false;
    if (!equals(this.k1m_1, tmp0_other_with_cast.k1m_1))
      return false;
    if (!(this.l1m_1 == tmp0_other_with_cast.l1m_1))
      return false;
    if (!(this.m1m_1 == tmp0_other_with_cast.m1m_1))
      return false;
    if (!(this.n1m_1 == tmp0_other_with_cast.n1m_1))
      return false;
    if (!equals(this.o1m_1, tmp0_other_with_cast.o1m_1))
      return false;
    if (!(this.p1m_1 == tmp0_other_with_cast.p1m_1))
      return false;
    if (!(this.q1m_1 == tmp0_other_with_cast.q1m_1))
      return false;
    if (!(this.r1m_1 == tmp0_other_with_cast.r1m_1))
      return false;
    if (!(this.s1m_1 === tmp0_other_with_cast.s1m_1))
      return false;
    if (!equals(this.t1m_1, tmp0_other_with_cast.t1m_1))
      return false;
    if (!equals(this.u1m_1, tmp0_other_with_cast.u1m_1))
      return false;
    return true;
  }
  static o29(seen0, seen1, id, itemId, isStock, aliasName, diningOption, additionalPrice, selectedCombo, name, mainItemID, tag, itemImage, mappingId, description, sku, quantity, regularSalesUnitPrice, extendedAmount, totalDiscount, totalItemTax, totalNetSale, status, categoryId, itemName, variantName, storeId, sequenceNo, taxList, selectedModifier, selectedAddonsItems, printerTag, itemConfirmed, isKotPrinted, isSentItem, specialRequest, totalOrderDiscount, subTotal, isRefund, isVoid, isOutOfStock, inventoryQuantity, dietary, nutrition, itemDisplayImage, totalGrossSale, isPrepared, discountPercent, discountAmount, itemSeq, appliedDiscount, isRetailPrice, itemType, comboGroupName, suggestedItems, isBaseItem, isOpenItem, isMembership, isSelectedItem, channelPlu, taxableAmount, serializationConstructorMarker) {
    Companion_getInstance_42();
    if (!!(!(4194304 === (4194304 & seen0)) | !(0 === (0 & seen1)))) {
      // Inline function 'kotlin.intArrayOf' call
      var tmp = new Int32Array([seen0, seen1]);
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$1 = new Int32Array([4194304, 0]);
      throwArrayMissingFieldException(tmp, tmp$ret$1, $serializer_getInstance_42().m29_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.o1k_1 = '';
    else
      $this.o1k_1 = id;
    if (0 === (seen0 & 2))
      $this.p1k_1 = null;
    else
      $this.p1k_1 = itemId;
    if (0 === (seen0 & 4))
      $this.q1k_1 = false;
    else
      $this.q1k_1 = isStock;
    if (0 === (seen0 & 8))
      $this.r1k_1 = null;
    else
      $this.r1k_1 = aliasName;
    if (0 === (seen0 & 16))
      $this.s1k_1 = null;
    else
      $this.s1k_1 = diningOption;
    if (0 === (seen0 & 32))
      $this.t1k_1 = null;
    else
      $this.t1k_1 = additionalPrice;
    if (0 === (seen0 & 64))
      $this.u1k_1 = null;
    else
      $this.u1k_1 = selectedCombo;
    if (0 === (seen0 & 128))
      $this.v1k_1 = null;
    else
      $this.v1k_1 = name;
    if (0 === (seen0 & 256))
      $this.w1k_1 = null;
    else
      $this.w1k_1 = mainItemID;
    if (0 === (seen0 & 512))
      $this.x1k_1 = null;
    else
      $this.x1k_1 = tag;
    if (0 === (seen0 & 1024))
      $this.y1k_1 = null;
    else
      $this.y1k_1 = itemImage;
    if (0 === (seen0 & 2048))
      $this.z1k_1 = null;
    else
      $this.z1k_1 = mappingId;
    if (0 === (seen0 & 4096))
      $this.a1l_1 = null;
    else
      $this.a1l_1 = description;
    if (0 === (seen0 & 8192))
      $this.b1l_1 = null;
    else
      $this.b1l_1 = sku;
    if (0 === (seen0 & 16384))
      $this.c1l_1 = 1;
    else
      $this.c1l_1 = quantity;
    if (0 === (seen0 & 32768))
      $this.d1l_1 = 0.0;
    else
      $this.d1l_1 = regularSalesUnitPrice;
    if (0 === (seen0 & 65536))
      $this.e1l_1 = 0.0;
    else
      $this.e1l_1 = extendedAmount;
    if (0 === (seen0 & 131072))
      $this.f1l_1 = 0.0;
    else
      $this.f1l_1 = totalDiscount;
    if (0 === (seen0 & 262144))
      $this.g1l_1 = 0.0;
    else
      $this.g1l_1 = totalItemTax;
    if (0 === (seen0 & 524288))
      $this.h1l_1 = 0.0;
    else
      $this.h1l_1 = totalNetSale;
    if (0 === (seen0 & 1048576))
      $this.i1l_1 = null;
    else
      $this.i1l_1 = status;
    if (0 === (seen0 & 2097152))
      $this.j1l_1 = null;
    else
      $this.j1l_1 = categoryId;
    $this.k1l_1 = itemName;
    if (0 === (seen0 & 8388608))
      $this.l1l_1 = '';
    else
      $this.l1l_1 = variantName;
    if (0 === (seen0 & 16777216))
      $this.m1l_1 = null;
    else
      $this.m1l_1 = storeId;
    if (0 === (seen0 & 33554432))
      $this.n1l_1 = null;
    else
      $this.n1l_1 = sequenceNo;
    if (0 === (seen0 & 67108864))
      $this.o1l_1 = null;
    else
      $this.o1l_1 = taxList;
    if (0 === (seen0 & 134217728))
      $this.p1l_1 = null;
    else
      $this.p1l_1 = selectedModifier;
    if (0 === (seen0 & 268435456))
      $this.q1l_1 = null;
    else
      $this.q1l_1 = selectedAddonsItems;
    if (0 === (seen0 & 536870912))
      $this.r1l_1 = null;
    else
      $this.r1l_1 = printerTag;
    if (0 === (seen0 & 1073741824))
      $this.s1l_1 = false;
    else
      $this.s1l_1 = itemConfirmed;
    if (0 === (seen0 & -2147483648))
      $this.t1l_1 = false;
    else
      $this.t1l_1 = isKotPrinted;
    if (0 === (seen1 & 1))
      $this.u1l_1 = null;
    else
      $this.u1l_1 = isSentItem;
    if (0 === (seen1 & 2))
      $this.v1l_1 = null;
    else
      $this.v1l_1 = specialRequest;
    if (0 === (seen1 & 4))
      $this.w1l_1 = 0.0;
    else
      $this.w1l_1 = totalOrderDiscount;
    if (0 === (seen1 & 8))
      $this.x1l_1 = 0.0;
    else
      $this.x1l_1 = subTotal;
    if (0 === (seen1 & 16))
      $this.y1l_1 = null;
    else
      $this.y1l_1 = isRefund;
    if (0 === (seen1 & 32))
      $this.z1l_1 = null;
    else
      $this.z1l_1 = isVoid;
    if (0 === (seen1 & 64))
      $this.a1m_1 = false;
    else
      $this.a1m_1 = isOutOfStock;
    if (0 === (seen1 & 128))
      $this.b1m_1 = null;
    else
      $this.b1m_1 = inventoryQuantity;
    if (0 === (seen1 & 256))
      $this.c1m_1 = null;
    else
      $this.c1m_1 = dietary;
    if (0 === (seen1 & 512))
      $this.d1m_1 = null;
    else
      $this.d1m_1 = nutrition;
    if (0 === (seen1 & 1024))
      $this.e1m_1 = null;
    else
      $this.e1m_1 = itemDisplayImage;
    if (0 === (seen1 & 2048))
      $this.f1m_1 = 0.0;
    else
      $this.f1m_1 = totalGrossSale;
    if (0 === (seen1 & 4096))
      $this.g1m_1 = false;
    else
      $this.g1m_1 = isPrepared;
    if (0 === (seen1 & 8192))
      $this.h1m_1 = 0.0;
    else
      $this.h1m_1 = discountPercent;
    if (0 === (seen1 & 16384))
      $this.i1m_1 = 0.0;
    else
      $this.i1m_1 = discountAmount;
    if (0 === (seen1 & 32768))
      $this.j1m_1 = null;
    else
      $this.j1m_1 = itemSeq;
    if (0 === (seen1 & 65536))
      $this.k1m_1 = null;
    else
      $this.k1m_1 = appliedDiscount;
    if (0 === (seen1 & 131072))
      $this.l1m_1 = null;
    else
      $this.l1m_1 = isRetailPrice;
    if (0 === (seen1 & 262144))
      $this.m1m_1 = null;
    else
      $this.m1m_1 = itemType;
    if (0 === (seen1 & 524288))
      $this.n1m_1 = null;
    else
      $this.n1m_1 = comboGroupName;
    if (0 === (seen1 & 1048576))
      $this.o1m_1 = null;
    else
      $this.o1m_1 = suggestedItems;
    if (0 === (seen1 & 2097152))
      $this.p1m_1 = null;
    else
      $this.p1m_1 = isBaseItem;
    if (0 === (seen1 & 4194304))
      $this.q1m_1 = null;
    else
      $this.q1m_1 = isOpenItem;
    if (0 === (seen1 & 8388608))
      $this.r1m_1 = null;
    else
      $this.r1m_1 = isMembership;
    if (0 === (seen1 & 16777216))
      $this.s1m_1 = false;
    else
      $this.s1m_1 = isSelectedItem;
    if (0 === (seen1 & 33554432))
      $this.t1m_1 = null;
    else
      $this.t1m_1 = channelPlu;
    if (0 === (seen1 & 67108864))
      $this.u1m_1 = null;
    else
      $this.u1m_1 = taxableAmount;
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
    this.q29_1 = tmp0_serialDesc;
  }
  r29(encoder, value) {
    var tmp0_desc = this.q29_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.s29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.s29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.t29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.t29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.u29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.u29_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.r29(encoder, value instanceof Nutrition ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.q29_1;
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
    return Nutrition.v29(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  al() {
    return this.q29_1;
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
    this.s29_1 = nutritionName;
    this.t29_1 = nutritionValue;
    this.u29_1 = nutritionUom;
  }
  toString() {
    return 'Nutrition(nutritionName=' + this.s29_1 + ', nutritionValue=' + this.t29_1 + ', nutritionUom=' + this.u29_1 + ')';
  }
  hashCode() {
    var result = this.s29_1 == null ? 0 : getStringHashCode(this.s29_1);
    result = imul(result, 31) + (this.t29_1 == null ? 0 : getStringHashCode(this.t29_1)) | 0;
    result = imul(result, 31) + (this.u29_1 == null ? 0 : getStringHashCode(this.u29_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Nutrition))
      return false;
    var tmp0_other_with_cast = other instanceof Nutrition ? other : THROW_CCE();
    if (!(this.s29_1 == tmp0_other_with_cast.s29_1))
      return false;
    if (!(this.t29_1 == tmp0_other_with_cast.t29_1))
      return false;
    if (!(this.u29_1 == tmp0_other_with_cast.u29_1))
      return false;
    return true;
  }
  static v29(seen0, nutritionName, nutritionValue, nutritionUom, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_43().q29_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.s29_1 = null;
    else
      $this.s29_1 = nutritionName;
    if (0 === (seen0 & 2))
      $this.t29_1 = null;
    else
      $this.t29_1 = nutritionValue;
    if (0 === (seen0 & 4))
      $this.u29_1 = null;
    else
      $this.u29_1 = nutritionUom;
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
    tmp.w29_1 = [null, null, null, null, null, lazy(tmp_0, SelectedModifier$Companion$$childSerializers$_anonymous__12f5uw), null, null];
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
    this.x29_1 = tmp0_serialDesc;
  }
  y29(encoder, value) {
    var tmp0_desc = this.x29_1;
    var tmp1_output = encoder.so(tmp0_desc);
    var tmp2_cached = Companion_getInstance_44().w29_1;
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.z29_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.z29_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.a2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.a2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.b2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.b2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.c2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.c2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.d2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 4, StringSerializer_getInstance(), value.d2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.e2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 5, tmp2_cached[5].g2(), value.e2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !(value.f2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 6, StringSerializer_getInstance(), value.f2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !(value.g2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 7, StringSerializer_getInstance(), value.g2a_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.y29(encoder, value instanceof SelectedModifier ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.x29_1;
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
    var tmp13_cached = Companion_getInstance_44().w29_1;
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
    return SelectedModifier.h2a(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  }
  al() {
    return this.x29_1;
  }
  cw() {
    var tmp0_cached = Companion_getInstance_44().w29_1;
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
    this.z29_1 = id;
    this.a2a_1 = mgId;
    this.b2a_1 = aliasDisplayName;
    this.c2a_1 = createdAt;
    this.d2a_1 = modifierDisplayName;
    this.e2a_1 = modifiers;
    this.f2a_1 = modifiersGroup;
    this.g2a_1 = storeId;
  }
  toString() {
    return 'SelectedModifier(id=' + this.z29_1 + ', mgId=' + this.a2a_1 + ', aliasDisplayName=' + this.b2a_1 + ', createdAt=' + this.c2a_1 + ', modifierDisplayName=' + this.d2a_1 + ', modifiers=' + toString_0(this.e2a_1) + ', modifiersGroup=' + this.f2a_1 + ', storeId=' + this.g2a_1 + ')';
  }
  hashCode() {
    var result = this.z29_1 == null ? 0 : getStringHashCode(this.z29_1);
    result = imul(result, 31) + (this.a2a_1 == null ? 0 : getStringHashCode(this.a2a_1)) | 0;
    result = imul(result, 31) + (this.b2a_1 == null ? 0 : getStringHashCode(this.b2a_1)) | 0;
    result = imul(result, 31) + (this.c2a_1 == null ? 0 : getStringHashCode(this.c2a_1)) | 0;
    result = imul(result, 31) + (this.d2a_1 == null ? 0 : getStringHashCode(this.d2a_1)) | 0;
    result = imul(result, 31) + (this.e2a_1 == null ? 0 : hashCode(this.e2a_1)) | 0;
    result = imul(result, 31) + (this.f2a_1 == null ? 0 : getStringHashCode(this.f2a_1)) | 0;
    result = imul(result, 31) + (this.g2a_1 == null ? 0 : getStringHashCode(this.g2a_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectedModifier))
      return false;
    var tmp0_other_with_cast = other instanceof SelectedModifier ? other : THROW_CCE();
    if (!(this.z29_1 == tmp0_other_with_cast.z29_1))
      return false;
    if (!(this.a2a_1 == tmp0_other_with_cast.a2a_1))
      return false;
    if (!(this.b2a_1 == tmp0_other_with_cast.b2a_1))
      return false;
    if (!(this.c2a_1 == tmp0_other_with_cast.c2a_1))
      return false;
    if (!(this.d2a_1 == tmp0_other_with_cast.d2a_1))
      return false;
    if (!equals(this.e2a_1, tmp0_other_with_cast.e2a_1))
      return false;
    if (!(this.f2a_1 == tmp0_other_with_cast.f2a_1))
      return false;
    if (!(this.g2a_1 == tmp0_other_with_cast.g2a_1))
      return false;
    return true;
  }
  static h2a(seen0, id, mgId, aliasDisplayName, createdAt, modifierDisplayName, modifiers, modifiersGroup, storeId, serializationConstructorMarker) {
    Companion_getInstance_44();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_44().x29_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.z29_1 = null;
    else
      $this.z29_1 = id;
    if (0 === (seen0 & 2))
      $this.a2a_1 = null;
    else
      $this.a2a_1 = mgId;
    if (0 === (seen0 & 4))
      $this.b2a_1 = null;
    else
      $this.b2a_1 = aliasDisplayName;
    if (0 === (seen0 & 8))
      $this.c2a_1 = null;
    else
      $this.c2a_1 = createdAt;
    if (0 === (seen0 & 16))
      $this.d2a_1 = null;
    else
      $this.d2a_1 = modifierDisplayName;
    if (0 === (seen0 & 32))
      $this.e2a_1 = null;
    else
      $this.e2a_1 = modifiers;
    if (0 === (seen0 & 64))
      $this.f2a_1 = null;
    else
      $this.f2a_1 = modifiersGroup;
    if (0 === (seen0 & 128))
      $this.g2a_1 = null;
    else
      $this.g2a_1 = storeId;
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
    this.i2a_1 = tmp0_serialDesc;
  }
  j2a(encoder, value) {
    var tmp0_desc = this.i2a_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.k2a_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.k2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.l2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.l2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.m2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.m2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.n2a_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.n2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.o2a_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.o2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !(value.p2a_1 === false)) {
      tmp1_output.zp(tmp0_desc, 5, value.p2a_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.j2a(encoder, value instanceof ItemModifier ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.i2a_1;
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
    return ItemModifier.q2a(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  al() {
    return this.i2a_1;
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
    this.k2a_1 = id;
    this.l2a_1 = aliasName;
    this.m2a_1 = mvId;
    this.n2a_1 = mgId;
    this.o2a_1 = modifierName;
    this.p2a_1 = isSelected;
  }
  toString() {
    return 'ItemModifier(id=' + this.k2a_1 + ', aliasName=' + this.l2a_1 + ', mvId=' + this.m2a_1 + ', mgId=' + this.n2a_1 + ', modifierName=' + this.o2a_1 + ', isSelected=' + this.p2a_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.k2a_1);
    result = imul(result, 31) + (this.l2a_1 == null ? 0 : getStringHashCode(this.l2a_1)) | 0;
    result = imul(result, 31) + (this.m2a_1 == null ? 0 : getStringHashCode(this.m2a_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.n2a_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.o2a_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.p2a_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ItemModifier))
      return false;
    var tmp0_other_with_cast = other instanceof ItemModifier ? other : THROW_CCE();
    if (!(this.k2a_1 === tmp0_other_with_cast.k2a_1))
      return false;
    if (!(this.l2a_1 == tmp0_other_with_cast.l2a_1))
      return false;
    if (!(this.m2a_1 == tmp0_other_with_cast.m2a_1))
      return false;
    if (!(this.n2a_1 === tmp0_other_with_cast.n2a_1))
      return false;
    if (!(this.o2a_1 === tmp0_other_with_cast.o2a_1))
      return false;
    if (!(this.p2a_1 === tmp0_other_with_cast.p2a_1))
      return false;
    return true;
  }
  static q2a(seen0, id, aliasName, mvId, mgId, modifierName, isSelected, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_45().i2a_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.k2a_1 = '';
    else
      $this.k2a_1 = id;
    if (0 === (seen0 & 2))
      $this.l2a_1 = null;
    else
      $this.l2a_1 = aliasName;
    if (0 === (seen0 & 4))
      $this.m2a_1 = null;
    else
      $this.m2a_1 = mvId;
    if (0 === (seen0 & 8))
      $this.n2a_1 = '';
    else
      $this.n2a_1 = mgId;
    if (0 === (seen0 & 16))
      $this.o2a_1 = '';
    else
      $this.o2a_1 = modifierName;
    if (0 === (seen0 & 32))
      $this.p2a_1 = false;
    else
      $this.p2a_1 = isSelected;
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
    this.r2a_1 = tmp0_serialDesc;
  }
  s2a(encoder, value) {
    var tmp0_desc = this.r2a_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.t2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.t2a_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.u2a_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.u2a_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.s2a(encoder, value instanceof PrinterTag ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.r2a_1;
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
    return PrinterTag.v2a(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  al() {
    return this.r2a_1;
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
    this.t2a_1 = labelName;
    this.u2a_1 = printerLabelId;
  }
  toString() {
    return 'PrinterTag(labelName=' + this.t2a_1 + ', printerLabelId=' + this.u2a_1 + ')';
  }
  hashCode() {
    var result = this.t2a_1 == null ? 0 : getStringHashCode(this.t2a_1);
    result = imul(result, 31) + (this.u2a_1 == null ? 0 : getStringHashCode(this.u2a_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PrinterTag))
      return false;
    var tmp0_other_with_cast = other instanceof PrinterTag ? other : THROW_CCE();
    if (!(this.t2a_1 == tmp0_other_with_cast.t2a_1))
      return false;
    if (!(this.u2a_1 == tmp0_other_with_cast.u2a_1))
      return false;
    return true;
  }
  static v2a(seen0, labelName, printerLabelId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_46().r2a_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.t2a_1 = null;
    else
      $this.t2a_1 = labelName;
    if (0 === (seen0 & 2))
      $this.u2a_1 = null;
    else
      $this.u2a_1 = printerLabelId;
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
    this.w2a_1 = tmp0_serialDesc;
  }
  x2a(encoder, value) {
    var tmp0_desc = this.w2a_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.z1j_1 == null)) {
      tmp1_output.lq(tmp0_desc, 0, StringSerializer_getInstance(), value.z1j_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.a1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 1, StringSerializer_getInstance(), value.a1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !(value.b1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 2, StringSerializer_getInstance(), value.b1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.c1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 3, StringSerializer_getInstance(), value.c1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !equals(value.d1k_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 4, value.d1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 5) ? true : !equals(value.e1k_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 5, value.e1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 6) ? true : !equals(value.f1k_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 6, value.f1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 7) ? true : !equals(value.g1k_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 7, value.g1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 8) ? true : !(value.h1k_1 === false)) {
      tmp1_output.zp(tmp0_desc, 8, value.h1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 9) ? true : !(value.i1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 9, StringSerializer_getInstance(), value.i1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 10) ? true : !(value.j1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 10, StringSerializer_getInstance(), value.j1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 11) ? true : !(value.k1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 11, StringSerializer_getInstance(), value.k1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 12) ? true : !(value.l1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 12, StringSerializer_getInstance(), value.l1k_1);
    }
    if (tmp1_output.pq(tmp0_desc, 13) ? true : !(value.m1k_1 == null)) {
      tmp1_output.lq(tmp0_desc, 13, StringSerializer_getInstance(), value.m1k_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.x2a(encoder, value instanceof SelectedAddonsItems ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.w2a_1;
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
    return SelectedAddonsItems.y2a(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, null);
  }
  al() {
    return this.w2a_1;
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
    this.z1j_1 = id;
    this.a1k_1 = headerId;
    this.b1k_1 = itemName;
    this.c1k_1 = aliasName;
    this.d1k_1 = price;
    this.e1k_1 = subTotal;
    this.f1k_1 = taxAmount;
    this.g1k_1 = qty;
    this.h1k_1 = isSelected;
    this.i1k_1 = mappinId;
    this.j1k_1 = addonGroupId;
    this.k1k_1 = addonGroupName;
    this.l1k_1 = addonGroupMappinId;
    this.m1k_1 = sku;
    this.n1k_1 = isItemLevel;
  }
  toString() {
    return 'SelectedAddonsItems(id=' + this.z1j_1 + ', headerId=' + this.a1k_1 + ', itemName=' + this.b1k_1 + ', aliasName=' + this.c1k_1 + ', price=' + this.d1k_1 + ', subTotal=' + this.e1k_1 + ', taxAmount=' + this.f1k_1 + ', qty=' + this.g1k_1 + ', isSelected=' + this.h1k_1 + ', mappinId=' + this.i1k_1 + ', addonGroupId=' + this.j1k_1 + ', addonGroupName=' + this.k1k_1 + ', addonGroupMappinId=' + this.l1k_1 + ', sku=' + this.m1k_1 + ', isItemLevel=' + this.n1k_1 + ')';
  }
  hashCode() {
    var result = this.z1j_1 == null ? 0 : getStringHashCode(this.z1j_1);
    result = imul(result, 31) + (this.a1k_1 == null ? 0 : getStringHashCode(this.a1k_1)) | 0;
    result = imul(result, 31) + (this.b1k_1 == null ? 0 : getStringHashCode(this.b1k_1)) | 0;
    result = imul(result, 31) + (this.c1k_1 == null ? 0 : getStringHashCode(this.c1k_1)) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d1k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e1k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f1k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g1k_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.h1k_1) | 0;
    result = imul(result, 31) + (this.i1k_1 == null ? 0 : getStringHashCode(this.i1k_1)) | 0;
    result = imul(result, 31) + (this.j1k_1 == null ? 0 : getStringHashCode(this.j1k_1)) | 0;
    result = imul(result, 31) + (this.k1k_1 == null ? 0 : getStringHashCode(this.k1k_1)) | 0;
    result = imul(result, 31) + (this.l1k_1 == null ? 0 : getStringHashCode(this.l1k_1)) | 0;
    result = imul(result, 31) + (this.m1k_1 == null ? 0 : getStringHashCode(this.m1k_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.n1k_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectedAddonsItems))
      return false;
    var tmp0_other_with_cast = other instanceof SelectedAddonsItems ? other : THROW_CCE();
    if (!(this.z1j_1 == tmp0_other_with_cast.z1j_1))
      return false;
    if (!(this.a1k_1 == tmp0_other_with_cast.a1k_1))
      return false;
    if (!(this.b1k_1 == tmp0_other_with_cast.b1k_1))
      return false;
    if (!(this.c1k_1 == tmp0_other_with_cast.c1k_1))
      return false;
    if (!equals(this.d1k_1, tmp0_other_with_cast.d1k_1))
      return false;
    if (!equals(this.e1k_1, tmp0_other_with_cast.e1k_1))
      return false;
    if (!equals(this.f1k_1, tmp0_other_with_cast.f1k_1))
      return false;
    if (!equals(this.g1k_1, tmp0_other_with_cast.g1k_1))
      return false;
    if (!(this.h1k_1 === tmp0_other_with_cast.h1k_1))
      return false;
    if (!(this.i1k_1 == tmp0_other_with_cast.i1k_1))
      return false;
    if (!(this.j1k_1 == tmp0_other_with_cast.j1k_1))
      return false;
    if (!(this.k1k_1 == tmp0_other_with_cast.k1k_1))
      return false;
    if (!(this.l1k_1 == tmp0_other_with_cast.l1k_1))
      return false;
    if (!(this.m1k_1 == tmp0_other_with_cast.m1k_1))
      return false;
    if (!(this.n1k_1 === tmp0_other_with_cast.n1k_1))
      return false;
    return true;
  }
  static y2a(seen0, id, headerId, itemName, aliasName, price, subTotal, taxAmount, qty, isSelected, mappinId, addonGroupId, addonGroupName, addonGroupMappinId, sku, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_47().w2a_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.z1j_1 = null;
    else
      $this.z1j_1 = id;
    if (0 === (seen0 & 2))
      $this.a1k_1 = null;
    else
      $this.a1k_1 = headerId;
    if (0 === (seen0 & 4))
      $this.b1k_1 = null;
    else
      $this.b1k_1 = itemName;
    if (0 === (seen0 & 8))
      $this.c1k_1 = null;
    else
      $this.c1k_1 = aliasName;
    if (0 === (seen0 & 16))
      $this.d1k_1 = 0.0;
    else
      $this.d1k_1 = price;
    if (0 === (seen0 & 32))
      $this.e1k_1 = 0.0;
    else
      $this.e1k_1 = subTotal;
    if (0 === (seen0 & 64))
      $this.f1k_1 = 0.0;
    else
      $this.f1k_1 = taxAmount;
    if (0 === (seen0 & 128))
      $this.g1k_1 = 0.0;
    else
      $this.g1k_1 = qty;
    if (0 === (seen0 & 256))
      $this.h1k_1 = false;
    else
      $this.h1k_1 = isSelected;
    if (0 === (seen0 & 512))
      $this.i1k_1 = null;
    else
      $this.i1k_1 = mappinId;
    if (0 === (seen0 & 1024))
      $this.j1k_1 = null;
    else
      $this.j1k_1 = addonGroupId;
    if (0 === (seen0 & 2048))
      $this.k1k_1 = null;
    else
      $this.k1k_1 = addonGroupName;
    if (0 === (seen0 & 4096))
      $this.l1k_1 = null;
    else
      $this.l1k_1 = addonGroupMappinId;
    if (0 === (seen0 & 8192))
      $this.m1k_1 = null;
    else
      $this.m1k_1 = sku;
    $this.n1k_1 = false;
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
    this.z2a_1 = tmp0_serialDesc;
  }
  a2b(encoder, value) {
    var tmp0_desc = this.z2a_1;
    var tmp1_output = encoder.so(tmp0_desc);
    if (tmp1_output.pq(tmp0_desc, 0) ? true : !(value.b2b_1 === '')) {
      tmp1_output.hq(tmp0_desc, 0, value.b2b_1);
    }
    if (tmp1_output.pq(tmp0_desc, 1) ? true : !(value.c2b_1 === '')) {
      tmp1_output.hq(tmp0_desc, 1, value.c2b_1);
    }
    if (tmp1_output.pq(tmp0_desc, 2) ? true : !equals(value.d2b_1, 0.0)) {
      tmp1_output.fq(tmp0_desc, 2, value.d2b_1);
    }
    if (tmp1_output.pq(tmp0_desc, 3) ? true : !(value.e2b_1 === '')) {
      tmp1_output.hq(tmp0_desc, 3, value.e2b_1);
    }
    if (tmp1_output.pq(tmp0_desc, 4) ? true : !(value.f2b_1 === '')) {
      tmp1_output.hq(tmp0_desc, 4, value.f2b_1);
    }
    tmp1_output.to(tmp0_desc);
  }
  bl(encoder, value) {
    return this.a2b(encoder, value instanceof ChannelPlu ? value : THROW_CCE());
  }
  cl(decoder) {
    var tmp0_desc = this.z2a_1;
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
    return ChannelPlu.g2b(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  al() {
    return this.z2a_1;
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
    this.b2b_1 = sku;
    this.c2b_1 = channelName;
    this.d2b_1 = plu;
    this.e2b_1 = integrationDetail;
    this.f2b_1 = channelCode;
  }
  toString() {
    return 'ChannelPlu(sku=' + this.b2b_1 + ', channelName=' + this.c2b_1 + ', plu=' + this.d2b_1 + ', integrationDetail=' + this.e2b_1 + ', channelCode=' + this.f2b_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.b2b_1);
    result = imul(result, 31) + getStringHashCode(this.c2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d2b_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.e2b_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f2b_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ChannelPlu))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelPlu ? other : THROW_CCE();
    if (!(this.b2b_1 === tmp0_other_with_cast.b2b_1))
      return false;
    if (!(this.c2b_1 === tmp0_other_with_cast.c2b_1))
      return false;
    if (!equals(this.d2b_1, tmp0_other_with_cast.d2b_1))
      return false;
    if (!(this.e2b_1 === tmp0_other_with_cast.e2b_1))
      return false;
    if (!(this.f2b_1 === tmp0_other_with_cast.f2b_1))
      return false;
    return true;
  }
  static g2b(seen0, sku, channelName, plu, integrationDetail, channelCode, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_48().z2a_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.b2b_1 = '';
    else
      $this.b2b_1 = sku;
    if (0 === (seen0 & 2))
      $this.c2b_1 = '';
    else
      $this.c2b_1 = channelName;
    if (0 === (seen0 & 4))
      $this.d2b_1 = 0.0;
    else
      $this.d2b_1 = plu;
    if (0 === (seen0 & 8))
      $this.e2b_1 = '';
    else
      $this.e2b_1 = integrationDetail;
    if (0 === (seen0 & 16))
      $this.f2b_1 = '';
    else
      $this.f2b_1 = channelCode;
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
      sum = tmp_0 + element.e1k_1;
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
          sum_0 = tmp_2 + element_0.d1k_1 * element_0.g1k_1;
        }
        tmp_1 = sum_0;
      }
      var tmp1_elvis_lhs = tmp_1;
      var tmp_3 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = element.t1k_1;
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
      var tmp0_elvis_lhs = element.z1m_1;
      var taxValue = amount * (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs) / 100;
      element.b1n_1 = order.c1j_1 ? formatDoublePrice(0.0) : taxValue;
      taxAmount = taxAmount + taxValue;
      element.c1n_1 = formatDoublePrice(amount);
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
  applicableRoundOffPaymentTypes = applicableRoundOffPaymentTypes === VOID ? ArrayList.d1() : applicableRoundOffPaymentTypes;
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
          sum_0 = tmp_2 + element_0.d1k_1 * element_0.g1k_1;
        }
        tmp_1 = sum_0;
      }
      var tmp1_elvis_lhs = tmp_1;
      var tmp_3 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = element.t1k_1;
      sum = tmp_0 + (tmp_3 + (tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs));
    }
    tmp = sum;
  }
  var tmp1_elvis_lhs_0 = tmp;
  return tmp1_elvis_lhs_0 == null ? 0.0 : tmp1_elvis_lhs_0;
}
function calculateItemPrice($this, order, index, item, totalAmount, isTaxIncluded) {
  // Inline function 'kotlin.text.isNullOrEmpty' call
  var this_0 = item.w1k_1;
  if (this_0 == null || charSequenceLength(this_0) === 0) {
    item.f1l_1 = 0.0;
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
          $this.h1h_1.d1n(order, calculatedItem, totalAmount, isTaxIncluded);
          item_0.d1k_1 = formatDoublePrice(calculatedItem.d1l_1);
          item_0.e1k_1 = formatDoublePrice(calculatedItem.f1m_1);
        }
      }
    }
    $this.h1h_1.d1n(order, item, totalAmount, isTaxIncluded);
    order.f1j_1 = order.f1j_1 + item.x1l_1;
    if (!(item.r1m_1 === true)) {
      var tmp = order;
      var tmp1_safe_receiver = order.g1j_1;
      tmp.g1j_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver + item.x1l_1;
    }
    var tmp_0 = order;
    var tmp2_safe_receiver = order.w1j_1;
    var tmp_1;
    if (tmp2_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp3_elvis_lhs = item.u1m_1;
      tmp_1 = tmp2_safe_receiver + (tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs);
    }
    tmp_0.w1j_1 = tmp_1;
    order.n1i_1 = order.n1i_1 + item.h1l_1;
    order.o1i_1 = order.o1i_1 + item.f1m_1;
    order.l1i_1 = order.l1i_1 + (item.f1l_1 + item.w1l_1);
  }
  return item;
}
function calculateOrderTypeChargesAndTax($this, order, charge, isTaxIncluded) {
  var tmp0_safe_receiver = order.q1j_1;
  // Inline function 'kotlin.collections.isNullOrEmpty' call
  var this_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1n_1;
  if (this_0 == null || this_0.e1()) {
    removeAll(charge, OrderCalculationService$calculateOrderTypeChargesAndTax$lambda(order));
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = charge.v();
    while (_iterator__ex2g4s.w()) {
      var element = _iterator__ex2g4s.x();
      var tmp = sum;
      var tmp0_elvis_lhs = element.v1n_1;
      sum = tmp + (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs);
    }
    return sum;
  }
  var chargesTax = 0.0;
  var tmp1_safe_receiver = order.q1j_1;
  var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.m1n_1;
  var tmp_0;
  if (tmp2_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.d1();
    var _iterator__ex2g4s_0 = tmp2_safe_receiver.v();
    while (_iterator__ex2g4s_0.w()) {
      var element_0 = _iterator__ex2g4s_0.x();
      if (element_0.e1o_1 === 'Order') {
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
    var tmp$ret$6 = item.f1o_1;
    destination_0.f(tmp$ret$6);
  }
  var orderChargeIds = toSet(destination_0);
  // Inline function 'kotlin.collections.filter' call
  // Inline function 'kotlin.collections.filterTo' call
  var destination_1 = ArrayList.d1();
  var _iterator__ex2g4s_2 = orderLevelCharges.v();
  while (_iterator__ex2g4s_2.w()) {
    var element_1 = _iterator__ex2g4s_2.x();
    var tmp0_elvis_lhs_0 = order.w1j_1;
    var tmp_1 = tmp0_elvis_lhs_0 == null ? 0.0 : tmp0_elvis_lhs_0;
    var tmp1_elvis_lhs = element_1.m1o_1;
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
    var tmp0_elvis_lhs_1 = maxElem.m1o_1;
    var maxValue = tmp0_elvis_lhs_1 == null ? 0.0 : tmp0_elvis_lhs_1;
    do {
      var e = iterator.x();
      var tmp0_elvis_lhs_2 = e.m1o_1;
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
  if (equals_0(applicableCharge.t1o_1, 'Absolute', true)) {
    var tmp4_safe_receiver = applicableCharge.g1o_1;
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
        var tmp0_elvis_lhs_3 = element_2.y1o_1;
        sum_0 = tmp_4 + (tmp0_elvis_lhs_3 == null ? 0.0 : tmp0_elvis_lhs_3);
      }
      tmp_3 = sum_0;
    }
    var tmp5_elvis_lhs = tmp_3;
    var totalTaxPercent = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
    var tmp_5;
    if (isTaxIncluded) {
      var tmp6_elvis_lhs = applicableCharge.s1o_1;
      tmp_5 = (tmp6_elvis_lhs == null ? 0.0 : tmp6_elvis_lhs) / (1 + totalTaxPercent / 100);
    } else {
      tmp_5 = applicableCharge.s1o_1;
    }
    tmp_2 = tmp_5;
  } else {
    var tmp7_elvis_lhs = order.w1j_1;
    var tmp_6 = tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs;
    var tmp8_elvis_lhs = applicableCharge.s1o_1;
    tmp_2 = tmp_6 * ((tmp8_elvis_lhs == null ? 0.0 : tmp8_elvis_lhs) / 100);
  }
  var chargeValue = tmp_2;
  var tmp9_safe_receiver = applicableCharge.g1o_1;
  if (tmp9_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_4 = tmp9_safe_receiver.v();
    while (_iterator__ex2g4s_4.w()) {
      var element_3 = _iterator__ex2g4s_4.x();
      var tmp_7 = chargeValue == null ? 0.0 : chargeValue;
      var tmp1_elvis_lhs_0 = element_3.y1o_1;
      var taxAmount = tmp_7 * ((tmp1_elvis_lhs_0 == null ? 0.0 : tmp1_elvis_lhs_0) / 100);
      chargesTax = chargesTax + taxAmount;
      element_3.a1p_1 = order.c1j_1 ? 0.0 : taxAmount;
    }
  }
  var tmp12_applyAtLevel = applicableCharge.e1o_1;
  var tmp13_chargeId = applicableCharge.f1o_1;
  var tmp10_elvis_lhs = applicableCharge.m1o_1;
  var tmp14_minOrderValue = tmp10_elvis_lhs == null ? 0.0 : tmp10_elvis_lhs;
  var tmp15_title = applicableCharge.q1o_1;
  var tmp16_value = chargeValue == null ? 0.0 : chargeValue;
  var tmp17_description = applicableCharge.i1o_1;
  var tmp_8;
  if (equals_0(applicableCharge.t1o_1, 'Percentage', true)) {
    tmp_8 = applicableCharge.s1o_1;
  } else {
    tmp_8 = 0.0;
  }
  var tmp18_percentage = tmp_8;
  var tmp19_chargeTaxIds = applicableCharge.g1o_1;
  var tmp20_types = applicableCharge.r1o_1;
  var tmp21_valueType = applicableCharge.t1o_1;
  var tmp22_orderLevelChargesTax = order.c1j_1 ? 0.0 : chargesTax;
  var newCharge = new ChargesData(tmp12_applyAtLevel, tmp13_chargeId, tmp19_chargeTaxIds, tmp18_percentage, VOID, tmp17_description, VOID, tmp22_orderLevelChargesTax, VOID, tmp15_title, VOID, tmp20_types, tmp16_value, tmp21_valueType, VOID, tmp14_minOrderValue);
  var tmp$ret$20;
  $l$block_1: {
    // Inline function 'kotlin.collections.indexOfFirst' call
    var index = 0;
    var _iterator__ex2g4s_5 = charge.v();
    while (_iterator__ex2g4s_5.w()) {
      var item_0 = _iterator__ex2g4s_5.x();
      if (item_0.p1n_1 == applicableCharge.f1o_1) {
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
  return order.c1j_1 ? 0.0 : chargesTax;
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
      if (item.x1n_1 === title) {
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
  return it.x1n_1 === 'Cash Discount';
}
function OrderCalculationService$applyDiscountsAndCharges$lambda_0(it) {
  return it.x1n_1 === 'Card Surcharge';
}
function OrderCalculationService$calculateOrderTypeChargesAndTax$lambda($order) {
  return function (it) {
    var tmp0_elvis_lhs = $order.w1j_1;
    var tmp = tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = it.d1o_1;
    return tmp < (tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs);
  };
}
function OrderCalculationService$calculateOrderTypeChargesAndTax$lambda_0($orderChargeIds, $applicableCharge) {
  return function (it) {
    var tmp;
    if ($orderChargeIds.d2(it.p1n_1)) {
      var tmp0_safe_receiver = $applicableCharge;
      tmp = !(it.p1n_1 == (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1o_1));
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
  return new ArrayListSerializer($serializer_getInstance_19());
}
function OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_4() {
  return new ArrayListSerializer($serializer_getInstance_12());
}
function OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_5() {
  return new ArrayListSerializer($serializer_getInstance_12());
}
function OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_6() {
  return new ArrayListSerializer($serializer_getInstance_13());
}
function OrderPlaceRequest$Companion$$childSerializers$_anonymous__fwqn3o_7() {
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
initMetadataForClass(OrderStateHistory, 'OrderStateHistory', OrderStateHistory, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
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
