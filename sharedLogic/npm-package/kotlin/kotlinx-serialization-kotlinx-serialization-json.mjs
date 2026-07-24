import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  Decoder23nde051s631g as Decoder,
  CompositeDecoder2tzm7wpwkr0og as CompositeDecoder,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  serializer1x79l67jvwntn as serializer,
  InlinePrimitiveDescriptor3i6ccn1a4fw94 as InlinePrimitiveDescriptor,
  SEALED_getInstance3nsev85ow9059 as SEALED_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
  KSerializerzf77vz1967fq as KSerializer,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SerialDescriptor2pelqekb5ic3a as SerialDescriptor,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  STRING_getInstance2ou4lro9xn2qn as STRING_getInstance,
  ENUM_getInstance22lfbrqor0c0a as ENUM_getInstance,
  PrimitiveSerialDescriptor3egfp53lutxj2 as PrimitiveSerialDescriptor,
  serializer2lw83vwvpnyms as serializer_0,
  get_isNullable36pbikm8xb7bz as get_isNullable,
  get_isInline5x26qrhi9qs6 as get_isInline,
  get_annotationshjxdbdcl8kmv as get_annotations,
  Encoderqvmrpqtq8hnu as Encoder,
  CompositeEncoderknecpkexzn3v as CompositeEncoder,
  ElementMarker33ojvsajwmzts as ElementMarker,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  CLASS_getInstance14ex35co4jkrb as CLASS_getInstance,
  LIST_getInstancey7k5h8d5cvxt as LIST_getInstance,
  CONTEXTUAL_getInstance1845118lbzky0 as CONTEXTUAL_getInstance,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  MAP_getInstance3s1t6byguxmp9 as MAP_getInstance,
  ENUMlmq49cvwy4ow as ENUM,
  contextual3hpp1gupsu4al as contextual,
  SerializersModuleCollector3dddz14wd7brg as SerializersModuleCollector,
  SealedClassSerializeriwipiibk55zc as SealedClassSerializer,
  jsonCachedSerialNameslxufy2gu43jt as jsonCachedSerialNames,
  AbstractDecoder35guh02ubh2hm as AbstractDecoder,
  AbstractPolymorphicSerializer1ccxwp48nfy58 as AbstractPolymorphicSerializer,
  DeserializationStrategy1z3z5pj9f7zc8 as DeserializationStrategy,
  findPolymorphicSerializer1nm87hvemahcj as findPolymorphicSerializer,
  MissingFieldException24tqif29emcmi as MissingFieldException,
  AbstractEncoder2gxtu3xmy3f8j as AbstractEncoder,
  OBJECT_getInstance26229tfe4t547 as OBJECT_getInstance,
  findPolymorphicSerializerk638ixyjovk5 as findPolymorphicSerializer_0,
  SerializationStrategyh6ouydnm6hci as SerializationStrategy,
  serializer3ikrxnm8b29d6 as serializer_1,
  serializer36584sjyg5661 as serializer_2,
  serializer1q7c5q67ysppr as serializer_3,
  NamedValueDecoderzk26ztf92xbq as NamedValueDecoder,
  getContextualDescriptor2n1gf3b895yb8 as getContextualDescriptor,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  equals2au1ep9vhcato as equals,
  toString30pk9tzaqopn as toString_0,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  StringBuildermazzzhj6kkai as StringBuilder,
  hashCodeq5arwsb9dgti as hashCode,
  joinToString1cxrrlmo0chqs as joinToString,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  KtMap140uvy3s5zad8 as KtMap,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  KtList3hktaavzmj137 as KtList,
  toDouble1kn912gjoizjp as toDouble,
  StringCompanionObject_instance3alxothmy382k as StringCompanionObject_instance,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  toLongOrNullutqivezb0wx1 as toLongOrNull,
  toULongOrNullojoyxi0i9tgj as toULongOrNull,
  ULong3f9k7s38t3rfp as ULong,
  Companion_getInstance1puqqwzccfvrg as Companion_getInstance,
  _ULong___get_data__impl__fggpzb2qlkrfp9zs48z as _ULong___get_data__impl__fggpzb,
  toDoubleOrNullkxwozihadygj as toDoubleOrNull,
  toBooleanStrictOrNull2j0md398tkvbj as toBooleanStrictOrNull,
  isInterface3d6p8outrmvmk as isInterface,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef1ajb9in178r5r as getPropertyCallableRef,
  lazy2hsh8ze7j6ikd as lazy,
  protoOf180f3jzyo7rfj as protoOf,
  toLongw1zpgk99d84b as toLong,
  _UInt___init__impl__l7qpdltd1eeof8nsuj as _UInt___init__impl__l7qpdl,
  UInt__toString_impl_dbgl213fqto411a11p0 as UInt__toString_impl_dbgl21,
  _ULong___init__impl__c78o9k1p6qzv0dh0bvg as _ULong___init__impl__c78o9k,
  ULong__toString_impl_f9au7kivnvhcxkib53 as ULong__toString_impl_f9au7k,
  _UByte___init__impl__g9hnc43ude1dscg1q30 as _UByte___init__impl__g9hnc4,
  UByte__toString_impl_v72jg2vnfngefiworp as UByte__toString_impl_v72jg,
  _UShort___init__impl__jigrne2jag2u7194ozm as _UShort___init__impl__jigrne,
  UShort__toString_impl_edaoee3e5ovvzk9wm4f as UShort__toString_impl_edaoee,
  captureStack1fzi4aczwc4hg as captureStack,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  coerceAtMost322komnqp70ag as coerceAtMost,
  Collection1k04j3hzsbod0 as Collection,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  ArrayList3it5z8td81qkl as ArrayList,
  singleOrNullrknfaxokm1sl as singleOrNull,
  emptyMapr06gerzljqtm as emptyMap,
  getValue48kllevslyh6 as getValue,
  copyOf2ng0t8oizk6it as copyOf,
  copyOf3rutauicler23 as copyOf_0,
  DeepRecursiveFunction3r49v8igsve1g as DeepRecursiveFunction,
  invoke246lvi6tzooz1 as invoke,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  DeepRecursiveScope1pqaydvh4vdcu as DeepRecursiveScope,
  Unitkvevlwgzwiuc as Unit,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  getKClass1s3j9wy1cofik as getKClass,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  substringBefore3n7kj60w69hju as substringBefore,
  removeSuffix3d61x5lsuvuho as removeSuffix,
  substringAfter1hku067gwr5ve as substringAfter,
  contains3ue2qo8xhmpf1 as contains,
  plus17rl43at52ays as plus,
  isFinite1tx0gn65nl9tj as isFinite,
  isFinite2t9l5a275mxm6 as isFinite_0,
  charCodeAt1yspne1d8erbm as charCodeAt,
  toUInt21lx0mz8wkp7c as toUInt,
  _UInt___get_data__impl__f0vqqw13y1a2xkii3dn as _UInt___get_data__impl__f0vqqw,
  toULong266mnyksbttkw as toULong,
  toUByteh6p4wmqswkrs as toUByte,
  _UByte___get_data__impl__jof9qr2p2xx2i2jvnz8 as _UByte___get_data__impl__jof9qr,
  toUShort7yqspfnhrot4 as toUShort,
  _UShort___get_data__impl__g0245hlms5v6vgvnl as _UShort___get_data__impl__g0245,
  toString3o7ifthqydp6e as toString_1,
  Companion_getInstanceuedpedmz4g65 as Companion_getInstance_0,
  Companion_getInstance1trnkq9cty7vr as Companion_getInstance_1,
  Companion_getInstance2du03jiluw9jj as Companion_getInstance_2,
  setOf45ia9pnfhe90 as setOf,
  Char__toInt_impl_vasixd1agw9q2fuvclj as Char__toInt_impl_vasixd,
  numberToChar93r9buh19yek as numberToChar,
  equals2v6cggk171b6e as equals_0,
  toByte4i43936u611k as toByte,
  startsWith26w8qjqapeeq6 as startsWith,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  ClosedRangehokgr73im9z3 as ClosedRange,
  contains2c50nlxg7en7o as contains_0,
  single29ec4rh52687r as single,
  Char19o2r8palgjof as Char,
  emptySetcxexqki71qfa as emptySet,
  plus1ogy4liedzq5j as plus_0,
  toInt2q8uldh7sc951 as toInt,
  toList3jhuyej2anx2q as toList,
  enumEntries20mr21zbe3az4 as enumEntries,
  last1vo29oleiqj36 as last,
  removeLast3759euu1xvfa3 as removeLast,
  lastIndexOf2d52xhix5ymjr as lastIndexOf,
  Long2qws0ah9gnpki as Long,
  Char__minus_impl_a2frrh3548ixwefqxih as Char__minus_impl_a2frrh,
  numberToLong1a4cndvg6c52s as numberToLong,
  charArray2ujmm1qusno00 as charArray,
  indexOfwa4w6635jewi as indexOf,
  indexOf1xbs558u7wr52 as indexOf_0,
  substringiqarkczpya5m as substring,
  HashMap1a0ld5kgwhmhv as HashMap,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Json {
  constructor(configuration, serializersModule) {
    Default_getInstance();
    this.a15_1 = configuration;
    this.b15_1 = serializersModule;
    this.c15_1 = new DescriptorSchemaCache();
  }
  hp() {
    return this.b15_1;
  }
  d15(serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.g15();
    }
  }
  e15(deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.al(), null);
    var result = input.ro(deserializer);
    lexer.t15();
    return result;
  }
}
class Default extends Json {
  constructor() {
    Default_instance = null;
    super(new JsonConfiguration(), EmptySerializersModule());
    Default_instance = this;
  }
}
class JsonBuilder {
  constructor(json) {
    this.u15_1 = json.a15_1.n16_1;
    this.v15_1 = json.a15_1.s16_1;
    this.w15_1 = json.a15_1.o16_1;
    this.x15_1 = json.a15_1.p16_1;
    this.y15_1 = json.a15_1.r16_1;
    this.z15_1 = json.a15_1.t16_1;
    this.a16_1 = json.a15_1.u16_1;
    this.b16_1 = json.a15_1.w16_1;
    this.c16_1 = json.a15_1.d17_1;
    this.d16_1 = json.a15_1.y16_1;
    this.e16_1 = json.a15_1.z16_1;
    this.f16_1 = json.a15_1.a17_1;
    this.g16_1 = json.a15_1.b17_1;
    this.h16_1 = json.a15_1.c17_1;
    this.i16_1 = json.a15_1.x16_1;
    this.j16_1 = json.a15_1.q16_1;
    this.k16_1 = json.a15_1.v16_1;
    this.l16_1 = json.hp();
  }
  m16() {
    if (this.k16_1) {
      // Inline function 'kotlin.require' call
      if (!(this.b16_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException.n(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.c16_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException.n(toString(message_0));
      }
    }
    if (!this.y15_1) {
      // Inline function 'kotlin.require' call
      if (!(this.z15_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException.n(toString(message_1));
      }
    } else if (!(this.z15_1 === '    ')) {
      var tmp0 = this.z15_1;
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$7 = false;
            break $l$block;
          }
        }
        tmp$ret$7 = true;
      }
      var allWhitespaces = tmp$ret$7;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.z15_1;
        throw IllegalArgumentException.n(toString(message_2));
      }
    }
    return new JsonConfiguration(this.u15_1, this.w15_1, this.x15_1, this.j16_1, this.y15_1, this.v15_1, this.z15_1, this.a16_1, this.k16_1, this.b16_1, this.i16_1, this.d16_1, this.e16_1, this.f16_1, this.g16_1, this.h16_1, this.c16_1);
  }
}
class JsonImpl extends Json {
  constructor(configuration, module_0) {
    super(configuration, module_0);
    validateConfiguration(this);
  }
}
class JsonClassDiscriminator {}
class JsonIgnoreUnknownKeys {}
class JsonNames {}
class JsonConfiguration {
  constructor(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    this.n16_1 = encodeDefaults;
    this.o16_1 = ignoreUnknownKeys;
    this.p16_1 = isLenient;
    this.q16_1 = allowStructuredMapKeys;
    this.r16_1 = prettyPrint;
    this.s16_1 = explicitNulls;
    this.t16_1 = prettyPrintIndent;
    this.u16_1 = coerceInputValues;
    this.v16_1 = useArrayPolymorphism;
    this.w16_1 = classDiscriminator;
    this.x16_1 = allowSpecialFloatingPointValues;
    this.y16_1 = useAlternativeNames;
    this.z16_1 = namingStrategy;
    this.a17_1 = decodeEnumsCaseInsensitive;
    this.b17_1 = allowTrailingComma;
    this.c17_1 = allowComments;
    this.d17_1 = classDiscriminatorMode;
  }
  toString() {
    return 'JsonConfiguration(encodeDefaults=' + this.n16_1 + ', ignoreUnknownKeys=' + this.o16_1 + ', isLenient=' + this.p16_1 + ', ' + ('allowStructuredMapKeys=' + this.q16_1 + ', prettyPrint=' + this.r16_1 + ', explicitNulls=' + this.s16_1 + ', ') + ("prettyPrintIndent='" + this.t16_1 + "', coerceInputValues=" + this.u16_1 + ', useArrayPolymorphism=' + this.v16_1 + ', ') + ("classDiscriminator='" + this.w16_1 + "', allowSpecialFloatingPointValues=" + this.x16_1 + ', ') + ('useAlternativeNames=' + this.y16_1 + ', namingStrategy=' + toString_0(this.z16_1) + ', decodeEnumsCaseInsensitive=' + this.a17_1 + ', ') + ('allowTrailingComma=' + this.b17_1 + ', allowComments=' + this.c17_1 + ', classDiscriminatorMode=' + this.d17_1.toString() + ')');
  }
}
class ClassDiscriminatorMode extends Enum {}
class JsonDecoder {}
class Companion {}
class JsonElement {}
class Companion_0 {}
class JsonObject extends JsonElement {
  constructor(content) {
    super();
    this.g17_1 = content;
  }
  equals(other) {
    return equals(this.g17_1, other);
  }
  hashCode() {
    return hashCode(this.g17_1);
  }
  toString() {
    var tmp = this.g17_1.m2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  }
  e1() {
    return this.g17_1.e1();
  }
  h17(key) {
    return this.g17_1.h2(key);
  }
  h2(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.h17((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  i17(key) {
    return this.g17_1.j2(key);
  }
  j2(key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.i17((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  }
  a1() {
    return this.g17_1.a1();
  }
  k2() {
    return this.g17_1.k2();
  }
  l2() {
    return this.g17_1.l2();
  }
  m2() {
    return this.g17_1.m2();
  }
}
class JsonPrimitive extends JsonElement {
  toString() {
    return this.k17();
  }
}
class JsonNull extends JsonPrimitive {
  constructor() {
    JsonNull_instance = null;
    super();
    JsonNull_instance = this;
    this.j17_1 = 'null';
  }
  k17() {
    return this.j17_1;
  }
  l17() {
    return JsonNullSerializer_getInstance();
  }
  qw(typeParamsSerializers) {
    return this.l17();
  }
}
class Companion_1 {}
class JsonLiteral extends JsonPrimitive {
  constructor(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    super();
    this.m17_1 = isString;
    this.n17_1 = coerceToInlineType;
    this.o17_1 = toString(body);
    if (!(this.n17_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.n17_1.bn()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException.n(toString(message));
      }
    }
  }
  k17() {
    return this.o17_1;
  }
  toString() {
    var tmp;
    if (this.m17_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder.t();
      printQuoted(this_0, this.o17_1);
      tmp = this_0.toString();
    } else {
      tmp = this.o17_1;
    }
    return tmp;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.m17_1 === other.m17_1))
      return false;
    if (!(this.o17_1 === other.o17_1))
      return false;
    return true;
  }
  hashCode() {
    var result = getBooleanHashCode(this.m17_1);
    result = imul(31, result) + getStringHashCode(this.o17_1) | 0;
    return result;
  }
}
class Companion_2 {}
class JsonArray extends JsonElement {
  constructor(content) {
    super();
    this.p17_1 = content;
  }
  equals(other) {
    return equals(this.p17_1, other);
  }
  hashCode() {
    return hashCode(this.p17_1);
  }
  toString() {
    return joinToString(this.p17_1, ',', '[', ']');
  }
  e1() {
    return this.p17_1.e1();
  }
  q17(element) {
    return this.p17_1.d2(element);
  }
  d2(element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.q17(element instanceof JsonElement ? element : THROW_CCE());
  }
  v() {
    return this.p17_1.v();
  }
  b1(index) {
    return this.p17_1.b1(index);
  }
  a1() {
    return this.p17_1.a1();
  }
}
class JsonElementSerializer {
  constructor() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.x17_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  al() {
    return this.x17_1;
  }
  y17(encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.kq(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.kq(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.kq(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  bl(encoder, value) {
    return this.y17(encoder, value instanceof JsonElement ? value : THROW_CCE());
  }
  cl(decoder) {
    var input = asJsonDecoder(decoder);
    return input.f17();
  }
}
class JsonObjectDescriptor {
  constructor() {
    JsonObjectDescriptor_instance = this;
    this.z17_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).al();
    this.a18_1 = 'kotlinx.serialization.json.JsonObject';
  }
  zm() {
    return this.a18_1;
  }
  en(index) {
    return this.z17_1.en(index);
  }
  fn(name) {
    return this.z17_1.fn(name);
  }
  gn(index) {
    return this.z17_1.gn(index);
  }
  hn(index) {
    return this.z17_1.hn(index);
  }
  in(index) {
    return this.z17_1.in(index);
  }
  an() {
    return this.z17_1.an();
  }
  vm() {
    return this.z17_1.vm();
  }
  bn() {
    return this.z17_1.bn();
  }
  cn() {
    return this.z17_1.cn();
  }
  dn() {
    return this.z17_1.dn();
  }
}
class JsonObjectSerializer {
  constructor() {
    JsonObjectSerializer_instance = this;
    this.v17_1 = JsonObjectDescriptor_getInstance();
  }
  al() {
    return this.v17_1;
  }
  b18(encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).bl(encoder, value);
  }
  bl(encoder, value) {
    return this.b18(encoder, value instanceof JsonObject ? value : THROW_CCE());
  }
  cl(decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).cl(decoder));
  }
}
class JsonArrayDescriptor {
  constructor() {
    JsonArrayDescriptor_instance = this;
    this.c18_1 = ListSerializer(JsonElementSerializer_getInstance()).al();
    this.d18_1 = 'kotlinx.serialization.json.JsonArray';
  }
  zm() {
    return this.d18_1;
  }
  en(index) {
    return this.c18_1.en(index);
  }
  fn(name) {
    return this.c18_1.fn(name);
  }
  gn(index) {
    return this.c18_1.gn(index);
  }
  hn(index) {
    return this.c18_1.hn(index);
  }
  in(index) {
    return this.c18_1.in(index);
  }
  an() {
    return this.c18_1.an();
  }
  vm() {
    return this.c18_1.vm();
  }
  bn() {
    return this.c18_1.bn();
  }
  cn() {
    return this.c18_1.cn();
  }
  dn() {
    return this.c18_1.dn();
  }
}
class JsonArraySerializer {
  constructor() {
    JsonArraySerializer_instance = this;
    this.w17_1 = JsonArrayDescriptor_getInstance();
  }
  al() {
    return this.w17_1;
  }
  e18(encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).bl(encoder, value);
  }
  bl(encoder, value) {
    return this.e18(encoder, value instanceof JsonArray ? value : THROW_CCE());
  }
  cl(decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).cl(decoder));
  }
}
class JsonPrimitiveSerializer {
  constructor() {
    JsonPrimitiveSerializer_instance = this;
    this.s17_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  al() {
    return this.s17_1;
  }
  f18(encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.kq(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.kq(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  }
  bl(encoder, value) {
    return this.f18(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  }
  cl(decoder) {
    var result = asJsonDecoder(decoder).f17();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result)), toString(result));
    return result;
  }
}
class JsonNullSerializer {
  constructor() {
    JsonNullSerializer_instance = this;
    this.t17_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  al() {
    return this.t17_1;
  }
  g18(encoder, value) {
    verify(encoder);
    encoder.op();
  }
  bl(encoder, value) {
    return this.g18(encoder, value instanceof JsonNull ? value : THROW_CCE());
  }
  cl(decoder) {
    verify_0(decoder);
    if (decoder.eo()) {
      throw JsonDecodingException.n18("Expected 'null' literal");
    }
    decoder.fo();
    return JsonNull_getInstance();
  }
}
class JsonLiteralSerializer {
  constructor() {
    JsonLiteralSerializer_instance = this;
    this.u17_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  al() {
    return this.u17_1;
  }
  o18(encoder, value) {
    verify(encoder);
    if (value.m17_1) {
      return encoder.xp(value.o17_1);
    }
    if (!(value.n17_1 == null)) {
      return encoder.yp(value.n17_1).xp(value.o17_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.o17_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.tp(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.o17_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).kk_1;
      var tmp_1 = encoder.yp(serializer_0(Companion_getInstance()).al());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.tp(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.o17_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.vp(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.o17_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.pp(tmp3_safe_receiver);
    }
    encoder.xp(value.o17_1);
  }
  bl(encoder, value) {
    return this.o18(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  }
  cl(decoder) {
    var result = asJsonDecoder(decoder).f17();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result)), toString(result));
    return result;
  }
}
class defer$1 {
  constructor($deferred) {
    this.p18_1 = lazy($deferred);
  }
  zm() {
    return _get_original__l7ku1m(this).zm();
  }
  an() {
    return _get_original__l7ku1m(this).an();
  }
  cn() {
    return _get_original__l7ku1m(this).cn();
  }
  en(index) {
    return _get_original__l7ku1m(this).en(index);
  }
  fn(name) {
    return _get_original__l7ku1m(this).fn(name);
  }
  gn(index) {
    return _get_original__l7ku1m(this).gn(index);
  }
  hn(index) {
    return _get_original__l7ku1m(this).hn(index);
  }
  in(index) {
    return _get_original__l7ku1m(this).in(index);
  }
}
class JsonEncoder {}
class Composer {
  constructor(writer) {
    this.q18_1 = writer;
    this.r18_1 = true;
  }
  s18() {
    this.r18_1 = true;
  }
  t18() {
    return Unit_instance;
  }
  u18() {
    this.r18_1 = false;
  }
  v18() {
    this.r18_1 = false;
  }
  w18() {
    return Unit_instance;
  }
  x18(v) {
    return this.q18_1.y18(v);
  }
  z18(v) {
    return this.q18_1.a19(v);
  }
  b19(v) {
    return this.q18_1.a19(v.toString());
  }
  c19(v) {
    return this.q18_1.a19(v.toString());
  }
  d19(v) {
    return this.q18_1.e19(toLong(v));
  }
  f19(v) {
    return this.q18_1.e19(toLong(v));
  }
  g19(v) {
    return this.q18_1.e19(toLong(v));
  }
  h19(v) {
    return this.q18_1.e19(v);
  }
  i19(v) {
    return this.q18_1.a19(v.toString());
  }
  j19(value) {
    return this.q18_1.k19(value);
  }
}
class ComposerForUnsignedNumbers extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.n19_1 = forceQuoting;
  }
  g19(v) {
    if (this.n19_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.j19(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.z18(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  }
  h19(v) {
    if (this.n19_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.j19(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.z18(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  }
  d19(v) {
    if (this.n19_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.j19(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.z18(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  }
  f19(v) {
    if (this.n19_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.j19(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.z18(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  }
}
class ComposerForUnquotedLiterals extends Composer {
  constructor(writer, forceQuoting) {
    super(writer);
    this.q19_1 = forceQuoting;
  }
  j19(value) {
    if (this.q19_1) {
      super.j19(value);
    } else {
      super.z18(value);
    }
  }
}
class ComposerWithPrettyPrint extends Composer {
  constructor(writer, json) {
    super(writer);
    this.t19_1 = json;
    this.u19_1 = 0;
  }
  s18() {
    this.r18_1 = true;
    this.u19_1 = this.u19_1 + 1 | 0;
  }
  t18() {
    this.u19_1 = this.u19_1 - 1 | 0;
  }
  u18() {
    this.r18_1 = false;
    this.z18('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.u19_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.z18(this.t19_1.a15_1.t16_1);
      }
       while (inductionVariable < times);
  }
  v18() {
    if (this.r18_1)
      this.r18_1 = false;
    else {
      this.u18();
    }
  }
  w18() {
    this.x18(_Char___init__impl__6a9atx(32));
  }
}
class JsonElementMarker {
  constructor(descriptor) {
    var tmp = this;
    tmp.v19_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.w19_1 = false;
  }
  x19(index) {
    this.v19_1.yu(index);
  }
  y19() {
    return this.v19_1.zu();
  }
}
class JsonException extends SerializationException {
  static n1a(message) {
    var $this = this.zl(message);
    captureStack($this, $this.m1a_1);
    return $this;
  }
}
class JsonEncodingException extends JsonException {
  static h1a(message) {
    var $this = this.n1a(message);
    captureStack($this, $this.g1a_1);
    return $this;
  }
}
class JsonDecodingException extends JsonException {
  static n18(message) {
    var $this = this.n1a(message);
    captureStack($this, $this.m18_1);
    return $this;
  }
}
class Tombstone {}
class JsonPath {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.s1a_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.t1a_1 = tmp_2;
    this.u1a_1 = -1;
  }
  v1a(sd) {
    this.u1a_1 = this.u1a_1 + 1 | 0;
    var depth = this.u1a_1;
    if (depth === this.s1a_1.length) {
      resize(this);
    }
    this.s1a_1[depth] = sd;
  }
  w1a(index) {
    this.t1a_1[this.u1a_1] = index;
  }
  x1a(key) {
    var tmp;
    if (!(this.t1a_1[this.u1a_1] === -2)) {
      this.u1a_1 = this.u1a_1 + 1 | 0;
      tmp = this.u1a_1 === this.s1a_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.s1a_1[this.u1a_1] = key;
    this.t1a_1[this.u1a_1] = -2;
  }
  y1a() {
    if (this.t1a_1[this.u1a_1] === -2) {
      this.s1a_1[this.u1a_1] = Tombstone_instance;
    }
  }
  z1a() {
    var depth = this.u1a_1;
    if (this.t1a_1[depth] === -2) {
      this.t1a_1[depth] = -1;
      this.u1a_1 = this.u1a_1 - 1 | 0;
    }
    if (!(this.u1a_1 === -1)) {
      this.u1a_1 = this.u1a_1 - 1 | 0;
    }
  }
  a1b() {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder.t();
    this_0.x9('$');
    // Inline function 'kotlin.repeat' call
    var times = this.u1a_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.s1a_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.an(), LIST_getInstance())) {
            if (!(this.t1a_1[index] === -1)) {
              this_0.x9('[');
              this_0.xe(this.t1a_1[index]);
              this_0.x9(']');
            }
          } else {
            var idx = this.t1a_1[index];
            if (idx >= 0) {
              this_0.x9('.');
              this_0.x9(element.en(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.x9('[');
            this_0.x9("'");
            this_0.w9(element);
            this_0.x9("'");
            this_0.x9(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  }
  toString() {
    return this.a1b();
  }
}
class JsonSerializersModuleValidator {
  constructor(configuration) {
    this.b1b_1 = configuration.w16_1;
    this.c1b_1 = configuration.v16_1;
    this.d1b_1 = !configuration.d17_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  r14(kClass, provider) {
  }
  u14(baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.al();
    checkKind(this, descriptor, actualClass);
    if (!this.c1b_1 && this.d1b_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  }
  v14(baseClass, defaultSerializerProvider) {
  }
  w14(baseClass, defaultDeserializerProvider) {
  }
}
class JsonTreeReader$readDeepRecursive$slambda extends CoroutineImpl {
  constructor(this$0, resultContinuation, $box) {
    if ($box === VOID)
      $box = {};
    $box.w1c_1 = this$0;
    super(resultContinuation, $box);
  }
  b1d($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.c1d($this$DeepRecursiveFunction, it, $completion);
    tmp.za_1 = Unit_instance;
    tmp.ab_1 = null;
    return tmp.fb();
  }
  lb(p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.b1d(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  }
  fb() {
    var suspendResult = this.za_1;
    $sm: do
      try {
        var tmp = this.xa_1;
        switch (tmp) {
          case 0:
            this.ya_1 = 3;
            this.z1c_1 = this.w1c_1.o1b_1.t1b();
            if (this.z1c_1 === 1) {
              this.a1d_1 = readValue(this.w1c_1, true);
              this.xa_1 = 2;
              continue $sm;
            } else {
              if (this.z1c_1 === 0) {
                this.a1d_1 = readValue(this.w1c_1, false);
                this.xa_1 = 2;
                continue $sm;
              } else {
                if (this.z1c_1 === 6) {
                  this.xa_1 = 1;
                  suspendResult = readObject_0(this.w1c_1, this.x1c_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.z1c_1 === 8) {
                    this.a1d_1 = readArray(this.w1c_1);
                    this.xa_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.w1c_1.o1b_1.a1a("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.a1d_1 = suspendResult;
            this.xa_1 = 2;
            continue $sm;
          case 2:
            return this.a1d_1;
          case 3:
            throw this.ab_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ya_1 === 3) {
          throw e;
        } else {
          this.xa_1 = this.ya_1;
          this.ab_1 = e;
        }
      }
     while (true);
  }
  c1d($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.w1c_1, completion);
    i.x1c_1 = $this$DeepRecursiveFunction;
    i.y1c_1 = it;
    return i;
  }
}
class $readObjectCOROUTINE$ extends CoroutineImpl {
  constructor(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    super(resultContinuation);
    this.h1c_1 = _this__u8e3s4;
    this.i1c_1 = _this__u8e3s4_0;
  }
  fb() {
    var suspendResult = this.za_1;
    $sm: do
      try {
        var tmp = this.xa_1;
        switch (tmp) {
          case 0:
            this.ya_1 = 5;
            var tmp_0 = this;
            tmp_0.j1c_1 = this.h1c_1;
            this.k1c_1 = this.j1c_1;
            this.l1c_1 = this.k1c_1.o1b_1.s1b(6);
            if (this.k1c_1.o1b_1.t1b() === 4) {
              this.k1c_1.o1b_1.a1a('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.m1c_1 = LinkedHashMap.ja();
            this.xa_1 = 1;
            continue $sm;
          case 1:
            if (!this.k1c_1.o1b_1.u1b()) {
              this.xa_1 = 4;
              continue $sm;
            }

            this.n1c_1 = this.k1c_1.p1b_1 ? this.k1c_1.o1b_1.w1b() : this.k1c_1.o1b_1.v1b();
            this.k1c_1.o1b_1.s1b(5);
            this.xa_1 = 2;
            suspendResult = this.i1c_1.ri(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.m1c_1;
            var key = this.n1c_1;
            tmp0.p2(key, element);
            this.l1c_1 = this.k1c_1.o1b_1.y1b();
            var tmp0_subject = this.l1c_1;
            if (tmp0_subject === 4) {
              this.xa_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.xa_1 = 4;
                continue $sm;
              } else {
                this.k1c_1.o1b_1.a1a('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.xa_1 = 1;
            continue $sm;
          case 4:
            if (this.l1c_1 === 6) {
              this.k1c_1.o1b_1.s1b(7);
            } else if (this.l1c_1 === 4) {
              if (!this.k1c_1.q1b_1) {
                invalidTrailingComma(this.k1c_1.o1b_1);
              }
              this.k1c_1.o1b_1.s1b(7);
            }

            return new JsonObject(this.m1c_1);
          case 5:
            throw this.ab_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ya_1 === 5) {
          throw e;
        } else {
          this.xa_1 = this.ya_1;
          this.ab_1 = e;
        }
      }
     while (true);
  }
}
class JsonTreeReader {
  constructor(configuration, lexer) {
    this.o1b_1 = lexer;
    this.p1b_1 = configuration.p16_1;
    this.q1b_1 = configuration.b17_1;
    this.r1b_1 = 0;
  }
  x1b() {
    var token = this.o1b_1.t1b();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.r1b_1 = this.r1b_1 + 1 | 0;
      if (this.r1b_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.r1b_1 = this.r1b_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.o1b_1.a1a('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  }
}
class Key {}
class DescriptorSchemaCache {
  constructor() {
    this.o1a_1 = createMapForCache(16);
  }
  e1d(descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.o1a_1;
    var value_0 = this_0.j2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.p2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.p2(tmp2, value_1);
  }
  p1a(descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.f1d(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.e1d(descriptor, key, value);
    return value;
  }
  f1d(descriptor, key) {
    var tmp0_safe_receiver = this.o1a_1.j2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.j2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  }
}
class DiscriminatorHolder {
  constructor(discriminatorToSkip) {
    this.g1d_1 = discriminatorToSkip;
  }
}
class StreamingJsonDecoder extends AbstractDecoder {
  constructor(json, mode, lexer, descriptor, discriminatorHolder) {
    super();
    this.h15_1 = json;
    this.i15_1 = mode;
    this.j15_1 = lexer;
    this.k15_1 = this.h15_1.hp();
    this.l15_1 = -1;
    this.m15_1 = discriminatorHolder;
    this.n15_1 = this.h15_1.a15_1;
    this.o15_1 = this.n15_1.s16_1 ? null : new JsonElementMarker(descriptor);
  }
  e17() {
    return this.h15_1;
  }
  hp() {
    return this.k15_1;
  }
  f17() {
    return (new JsonTreeReader(this.h15_1.a15_1, this.j15_1)).x1b();
  }
  ro(deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.h15_1.a15_1.v16_1;
      }
      if (tmp) {
        return deserializer.cl(this);
      }
      var discriminator = classDiscriminator(deserializer.al(), this.h15_1);
      var tmp0_elvis_lhs = this.j15_1.p1d(discriminator, this.n15_1.p16_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.e17().a15_1.v16_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.cl(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.al(), this.e17());
          var tmp0 = this.f17();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.al().zm();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).gd();
            var tmp_3 = getKClassFromExpression(tmp0).gd();
            var tmp$ret$1 = this.j15_1.q15_1.a1b();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.i17(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4;
          try {
            tmp_4 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_5;
            if ($p instanceof SerializationException) {
              var it = $p;
              throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_4;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.e17(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p) {
        var tmp_8;
        if ($p instanceof SerializationException) {
          var it_0 = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.j15_1.a1a(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.m15_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.cl(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        throw MissingFieldException.om(e.mm_1, plus(e.message, ' at path: ') + this.j15_1.q15_1.a1b(), e);
      } else {
        throw $p;
      }
    }
  }
  so(descriptor) {
    var newMode = switchMode(this.h15_1, descriptor);
    this.j15_1.q15_1.v1a(descriptor);
    this.j15_1.h1d(newMode.s1d_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.r2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.h15_1, newMode, this.j15_1, descriptor, this.m15_1);
        break;
      default:
        var tmp_0;
        if (this.i15_1.equals(newMode) && this.h15_1.a15_1.s16_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.h15_1, newMode, this.j15_1, descriptor, this.m15_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  }
  to(descriptor) {
    if (descriptor.cn() === 0 && ignoreUnknownKeys(descriptor, this.h15_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.j15_1.i1d() && !this.h15_1.a15_1.b17_1) {
      invalidTrailingComma(this.j15_1, '');
    }
    this.j15_1.h1d(this.i15_1.t1d_1);
    this.j15_1.q15_1.z1a();
  }
  eo() {
    var tmp;
    var tmp0_safe_receiver = this.o15_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w19_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.j15_1.u1d();
    } else {
      tmp = false;
    }
    return tmp;
  }
  fo() {
    return null;
  }
  ep(descriptor, index, deserializer, previousValue) {
    var isMapKey = this.i15_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.j15_1.q15_1.y1a();
    }
    var value = super.ep(descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.j15_1.q15_1.x1a(value);
    }
    return value;
  }
  jp(descriptor) {
    var index;
    switch (this.i15_1.r2_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.i15_1.equals(WriteMode_MAP_getInstance())) {
      this.j15_1.q15_1.w1a(index);
    }
    return index;
  }
  go() {
    return this.j15_1.v1d();
  }
  ho() {
    var value = this.j15_1.w1d();
    if (!value.equals(toLong(value.k3()))) {
      this.j15_1.a1a("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.k3();
  }
  io() {
    var value = this.j15_1.w1d();
    if (!value.equals(toLong(value.l3()))) {
      this.j15_1.a1a("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.l3();
  }
  jo() {
    var value = this.j15_1.w1d();
    if (!value.equals(toLong(value.o1()))) {
      this.j15_1.a1a("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.o1();
  }
  ko() {
    return this.j15_1.w1d();
  }
  lo() {
    var tmp0 = this.j15_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.w1b();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.a1a("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.h15_1.a15_1.x16_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.j15_1, result);
  }
  mo() {
    var tmp0 = this.j15_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.w1b();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.a1a("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.h15_1.a15_1.x16_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.j15_1, result);
  }
  no() {
    var string = this.j15_1.w1b();
    if (!(string.length === 1)) {
      this.j15_1.a1a("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  }
  oo() {
    var tmp;
    if (this.n15_1.p16_1) {
      tmp = this.j15_1.o1d();
    } else {
      tmp = this.j15_1.v1b();
    }
    return tmp;
  }
  po(descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.j15_1, this.h15_1) : super.po(descriptor);
  }
}
class JsonDecoderForUnsignedTypes extends AbstractDecoder {
  constructor(lexer, json) {
    super();
    this.x1d_1 = lexer;
    this.y1d_1 = json.hp();
  }
  hp() {
    return this.y1d_1;
  }
  jp(descriptor) {
    var message = 'unsupported';
    throw IllegalStateException.t3(toString(message));
  }
  jo() {
    var tmp0 = this.x1d_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.w1b();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.a1a("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  ko() {
    var tmp0 = this.x1d_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.w1b();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.a1a("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  ho() {
    var tmp0 = this.x1d_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.w1b();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.a1a("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
  io() {
    var tmp0 = this.x1d_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.w1b();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.a1a("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  }
}
class StreamingJsonEncoder extends AbstractEncoder {
  static z1d(composer, json, mode, modeReuseCache) {
    var $this = this.lp();
    $this.e1b_1 = composer;
    $this.f1b_1 = json;
    $this.g1b_1 = mode;
    $this.h1b_1 = modeReuseCache;
    $this.i1b_1 = $this.f1b_1.hp();
    $this.j1b_1 = $this.f1b_1.a15_1;
    $this.k1b_1 = false;
    $this.l1b_1 = null;
    $this.m1b_1 = null;
    var i = $this.g1b_1.r2_1;
    if (!($this.h1b_1 == null)) {
      if (!($this.h1b_1[i] === null) || !($this.h1b_1[i] === $this)) {
        $this.h1b_1[i] = $this;
      }
    }
    return $this;
  }
  e17() {
    return this.f1b_1;
  }
  static n1b(output, json, mode, modeReuseCache) {
    return this.z1d(Composer_0(output, json), json, mode, modeReuseCache);
  }
  hp() {
    return this.i1b_1;
  }
  pq(descriptor, index) {
    return this.j1b_1.n16_1;
  }
  kq(serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.e17().a15_1.v16_1) {
        serializer.bl(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.e17().a15_1.d17_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.e17().a15_1.d17_1.r2_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.al().an();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.al(), this.e17()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.al()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException.n(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
          checkKind_0(actual.al().an());
        }
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        var serialName = actualSerializer.al().zm();
        this.l1b_1 = baseClassDiscriminator;
        this.m1b_1 = serialName;
      }
      actualSerializer.bl(this, value);
    }
  }
  so(descriptor) {
    var newMode = switchMode(this.f1b_1, descriptor);
    if (!(newMode.s1d_1 === _Char___init__impl__6a9atx(0))) {
      this.e1b_1.x18(newMode.s1d_1);
      this.e1b_1.s18();
    }
    var discriminator = this.l1b_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.m1b_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.zm() : tmp0_elvis_lhs);
      this.l1b_1 = null;
      this.m1b_1 = null;
    }
    if (this.g1b_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.h1b_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.r2_1];
    return tmp2_elvis_lhs == null ? StreamingJsonEncoder.z1d(this.e1b_1, this.f1b_1, newMode, this.h1b_1) : tmp2_elvis_lhs;
  }
  to(descriptor) {
    if (!(this.g1b_1.t1d_1 === _Char___init__impl__6a9atx(0))) {
      this.e1b_1.t18();
      this.e1b_1.v18();
      this.e1b_1.x18(this.g1b_1.t1d_1);
    }
  }
  mp(descriptor, index) {
    switch (this.g1b_1.r2_1) {
      case 1:
        if (!this.e1b_1.r18_1) {
          this.e1b_1.x18(_Char___init__impl__6a9atx(44));
        }

        this.e1b_1.u18();
        break;
      case 2:
        if (!this.e1b_1.r18_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.e1b_1.x18(_Char___init__impl__6a9atx(44));
            this.e1b_1.u18();
            tmp_0 = true;
          } else {
            this.e1b_1.x18(_Char___init__impl__6a9atx(58));
            this.e1b_1.w18();
            tmp_0 = false;
          }
          tmp.k1b_1 = tmp_0;
        } else {
          this.k1b_1 = true;
          this.e1b_1.u18();
        }

        break;
      case 3:
        if (index === 0)
          this.k1b_1 = true;
        if (index === 1) {
          this.e1b_1.x18(_Char___init__impl__6a9atx(44));
          this.e1b_1.w18();
          this.k1b_1 = false;
        }

        break;
      default:
        if (!this.e1b_1.r18_1) {
          this.e1b_1.x18(_Char___init__impl__6a9atx(44));
        }

        this.e1b_1.u18();
        this.xp(getJsonElementName(descriptor, this.f1b_1, index));
        this.e1b_1.x18(_Char___init__impl__6a9atx(58));
        this.e1b_1.w18();
        break;
    }
    return true;
  }
  lq(descriptor, index, serializer, value) {
    if (!(value == null) || this.j1b_1.s16_1) {
      super.lq(descriptor, index, serializer, value);
    }
  }
  yp(descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.e1b_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.e1b_1;
      } else {
        var tmp0 = this.e1b_1.q18_1;
        var p1 = this.k1b_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = StreamingJsonEncoder.z1d(tmp$ret$1, this.f1b_1, this.g1b_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.e1b_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.e1b_1;
      } else {
        var tmp0_0 = this.e1b_1.q18_1;
        var p1_0 = this.k1b_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$3 = tmp_2;
      tmp = StreamingJsonEncoder.z1d(tmp$ret$3, this.f1b_1, this.g1b_1, null);
    } else if (!(this.l1b_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.m1b_1 = descriptor.zm();
      tmp = this;
    } else {
      tmp = super.yp(descriptor);
    }
    return tmp;
  }
  op() {
    this.e1b_1.z18('null');
  }
  pp(value) {
    if (this.k1b_1) {
      this.xp(value.toString());
    } else {
      this.e1b_1.i19(value);
    }
  }
  qp(value) {
    if (this.k1b_1) {
      this.xp(value.toString());
    } else {
      this.e1b_1.d19(value);
    }
  }
  rp(value) {
    if (this.k1b_1) {
      this.xp(value.toString());
    } else {
      this.e1b_1.f19(value);
    }
  }
  sp(value) {
    if (this.k1b_1) {
      this.xp(value.toString());
    } else {
      this.e1b_1.g19(value);
    }
  }
  tp(value) {
    if (this.k1b_1) {
      this.xp(value.toString());
    } else {
      this.e1b_1.h19(value);
    }
  }
  up(value) {
    if (this.k1b_1) {
      this.xp(value.toString());
    } else {
      this.e1b_1.b19(value);
    }
    if (!this.j1b_1.x16_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.e1b_1.q18_1));
    }
  }
  vp(value) {
    if (this.k1b_1) {
      this.xp(value.toString());
    } else {
      this.e1b_1.c19(value);
    }
    if (!this.j1b_1.x16_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.e1b_1.q18_1));
    }
  }
  wp(value) {
    this.xp(toString_1(value));
  }
  xp(value) {
    return this.e1b_1.j19(value);
  }
}
class AbstractJsonTreeDecoder extends NamedValueDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super();
    this.c1e_1 = json;
    this.d1e_1 = value;
    this.e1e_1 = polymorphicDiscriminator;
    this.f1e_1 = this.e17().a15_1;
  }
  e17() {
    return this.c1e_1;
  }
  g2() {
    return this.d1e_1;
  }
  hp() {
    return this.e17().hp();
  }
  h1e() {
    var tmp0_safe_receiver = this.i12();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.i1e(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.g2() : tmp1_elvis_lhs;
  }
  g1e(currentTag) {
    return this.k12() + ('.' + currentTag);
  }
  f17() {
    return this.h1e();
  }
  ro(deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.e17().a15_1.v16_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.cl(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.al(), this.e17());
      var tmp0 = this.f17();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.al().zm();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).gd();
        var tmp_1 = getKClassFromExpression(tmp0).gd();
        var tmp$ret$1 = this.k12();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.i17(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_2;
      try {
        tmp_2 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof SerializationException) {
          var it = $p;
          throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_2;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.e17(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  }
  j12(parentName, childName) {
    return childName;
  }
  so(descriptor) {
    var currentObject = this.h1e();
    var tmp0_subject = descriptor.an();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.e17();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.zm();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).gd();
        var tmp_3 = getKClassFromExpression(currentObject).gd();
        var tmp$ret$0 = this.k12();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.e17();
        var keyDescriptor = carrierDescriptor(descriptor.hn(0), this_0.hp());
        var keyKind = keyDescriptor.an();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.e17();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.zm();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).gd();
            var tmp_8 = getKClassFromExpression(currentObject).gd();
            var tmp$ret$3 = this.k12();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.a15_1.q16_1) {
            var tmp_9 = this.e17();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.zm();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).gd();
              var tmp_11 = getKClassFromExpression(currentObject).gd();
              var tmp$ret$7 = this.k12();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.e17();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.zm();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).gd();
          var tmp_14 = getKClassFromExpression(currentObject).gd();
          var tmp$ret$12 = this.k12();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.e1e_1);
      }
    }
    return tmp;
  }
  to(descriptor) {
  }
  eo() {
    var tmp = this.h1e();
    return !(tmp instanceof JsonNull);
  }
  j1e(tag) {
    return !(this.i1e(tag) === JsonNull_getInstance());
  }
  m12(tag) {
    return this.j1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  k1e(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gd();
        var tmp_0 = getKClassFromExpression(value).gd();
        var tmp$ret$0 = this.g1e(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  }
  n12(tag) {
    return this.k1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  l1e(tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gd();
        var tmp_0 = getKClassFromExpression(value).gd();
        var tmp$ret$0 = this.g1e(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.k3();
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  }
  o12(tag) {
    return this.l1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  m1e(tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gd();
        var tmp_0 = getKClassFromExpression(value).gd();
        var tmp$ret$0 = this.g1e(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.l3();
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  }
  p12(tag) {
    return this.m1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  n1e(tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gd();
        var tmp_0 = getKClassFromExpression(value).gd();
        var tmp$ret$0 = this.g1e(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.o1();
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  }
  q12(tag) {
    return this.n1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  o1e(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gd();
        var tmp_0 = getKClassFromExpression(value).gd();
        var tmp$ret$0 = this.g1e(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  }
  r12(tag) {
    return this.o1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  p1e(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gd();
        var tmp_0 = getKClassFromExpression(value).gd();
        var tmp$ret$0 = this.g1e(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'float' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.e17().a15_1.x16_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.h1e()));
  }
  s12(tag) {
    return this.p1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  q1e(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gd();
        var tmp_0 = getKClassFromExpression(value).gd();
        var tmp$ret$0 = this.g1e(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.e17().a15_1.x16_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.h1e()));
  }
  t12(tag) {
    return this.q1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  r1e(tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gd();
        var tmp_0 = getKClassFromExpression(value).gd();
        var tmp$ret$0 = this.g1e(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.k17()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1.q1_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  }
  u12(tag) {
    return this.r1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  s1e(tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.i1e(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).gd();
      var tmp_0 = getKClassFromExpression(value).gd();
      var tmp$ret$0 = this.g1e(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.g1e(tag), toString(this.h1e()));
    if (!value_0.m17_1 && !this.e17().a15_1.p16_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.g1e(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.h1e()));
    }
    return value_0.o17_1;
  }
  v12(tag) {
    return this.s1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  }
  t1e(tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.e17();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.i1e(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.zm();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).gd();
        var tmp_2 = getKClassFromExpression(tmp2).gd();
        var tmp$ret$0 = this.g1e(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.k17());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.e17());
    } else {
      tmp = super.w12(tag, inlineDescriptor);
    }
    return tmp;
  }
  w12(tag, inlineDescriptor) {
    return this.t1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  }
  po(descriptor) {
    return !(this.i12() == null) ? super.po(descriptor) : (new JsonPrimitiveDecoder(this.e17(), this.g2(), this.e1e_1)).po(descriptor);
  }
}
class JsonTreeDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    super(json, value, polymorphicDiscriminator);
    this.a1f_1 = value;
    this.b1f_1 = polyDescriptor;
    this.c1f_1 = 0;
    this.d1f_1 = false;
  }
  g2() {
    return this.a1f_1;
  }
  jp(descriptor) {
    $l$loop: while (this.c1f_1 < descriptor.cn()) {
      var _unary__edvuaz = this.c1f_1;
      this.c1f_1 = _unary__edvuaz + 1 | 0;
      var name = this.d12(descriptor, _unary__edvuaz);
      var index = this.c1f_1 - 1 | 0;
      this.d1f_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.g2();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).h2(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.f1e_1.u16_1)
          return index;
        var tmp0 = this.e17();
        var tmp$ret$3;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.in(index);
          var elementDescriptor = descriptor.hn(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.vm()) {
            var tmp_1 = this.e1f(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$3 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.an(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.vm()) {
              var tmp_3 = this.e1f(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$3 = false;
              break $l$block_2;
            }
            var tmp_4 = this.e1f(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$3 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.a15_1.s16_1 && elementDescriptor.vm();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$3 = true;
              break $l$block_2;
            }
          }
          tmp$ret$3 = false;
        }
        if (tmp$ret$3)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  }
  eo() {
    return !this.d1f_1 && super.eo();
  }
  e12(descriptor, index) {
    var strategy = namingStrategy(descriptor, this.e17());
    var baseName = descriptor.en(index);
    if (strategy == null) {
      if (!this.f1e_1.y16_1)
        return baseName;
      if (this.g2().k2().d2(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.e17(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.g2().k2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.v();
      while (_iterator__ex2g4s.w()) {
        var element = _iterator__ex2g4s.x();
        if (deserializationNamesMap_0.j2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.r1a(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  }
  i1e(tag) {
    return getValue(this.g2(), tag);
  }
  e1f(tag) {
    return this.g2().i17(tag);
  }
  so(descriptor) {
    if (descriptor === this.b1f_1) {
      var tmp = this.e17();
      var tmp2 = this.h1e();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.b1f_1.zm();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).gd();
        var tmp_1 = getKClassFromExpression(tmp2).gd();
        var tmp$ret$0 = this.k12();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      return new JsonTreeDecoder(tmp, tmp2, this.e1e_1, this.b1f_1);
    }
    return super.so(descriptor);
  }
  to(descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.e17())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.an();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.e17());
    var tmp_1;
    if (strategy == null && !this.f1e_1.y16_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.e17(), descriptor).k2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.e17()).f1d(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.g2().k2().v();
    while (_iterator__ex2g4s.w()) {
      var key = _iterator__ex2g4s.x();
      if (!names.d2(key) && !(key === this.e1e_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.k12() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.g2().toString()))));
      }
    }
  }
}
class JsonTreeListDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.l1f_1 = value;
    this.m1f_1 = this.l1f_1.a1();
    this.n1f_1 = -1;
  }
  g2() {
    return this.l1f_1;
  }
  e12(descriptor, index) {
    return index.toString();
  }
  i1e(tag) {
    return this.l1f_1.b1(toInt(tag));
  }
  jp(descriptor) {
    while (this.n1f_1 < (this.m1f_1 - 1 | 0)) {
      this.n1f_1 = this.n1f_1 + 1 | 0;
      return this.n1f_1;
    }
    return -1;
  }
}
class JsonPrimitiveDecoder extends AbstractJsonTreeDecoder {
  constructor(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    super(json, value, polymorphicDiscriminator);
    this.u1f_1 = value;
    this.x12('primitive');
  }
  g2() {
    return this.u1f_1;
  }
  jp(descriptor) {
    return 0;
  }
  i1e(tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException.n(toString(message));
    }
    return this.u1f_1;
  }
}
class JsonTreeMapDecoder extends JsonTreeDecoder {
  constructor(json, value) {
    super(json, value);
    this.f1g_1 = value;
    this.g1g_1 = toList(this.f1g_1.k2());
    this.h1g_1 = imul(this.g1g_1.a1(), 2);
    this.i1g_1 = -1;
  }
  g2() {
    return this.f1g_1;
  }
  e12(descriptor, index) {
    var i = index / 2 | 0;
    return this.g1g_1.b1(i);
  }
  jp(descriptor) {
    while (this.i1g_1 < (this.h1g_1 - 1 | 0)) {
      this.i1g_1 = this.i1g_1 + 1 | 0;
      return this.i1g_1;
    }
    return -1;
  }
  i1e(tag) {
    return (this.i1g_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.f1g_1, tag);
  }
  to(descriptor) {
  }
}
class WriteMode extends Enum {
  constructor(name, ordinal, begin, end) {
    super(name, ordinal);
    this.s1d_1 = begin;
    this.t1d_1 = end;
  }
}
class AbstractJsonLexer {
  constructor() {
    this.p15_1 = 0;
    this.q15_1 = new JsonPath();
    this.r15_1 = null;
    this.s15_1 = StringBuilder.t();
  }
  m1g() {
  }
  i1d() {
    var current = this.n1g();
    var source = this.k1g();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.p15_1 = this.p15_1 + 1 | 0;
      return true;
    }
    return false;
  }
  o1g(c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  }
  t15() {
    var nextToken = this.y1b();
    if (!(nextToken === 10)) {
      this.a1a('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.k1g(), this.p15_1 - 1 | 0)) + ' instead');
    }
  }
  s1b(expected) {
    var token = this.y1b();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.p15_1 - 1 | 0 : this.p15_1;
      var s = this.p15_1 === charSequenceLength(this.k1g()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.k1g(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.a1a(tmp$ret$0, position);
    }
    return token;
  }
  p1g(expected) {
    if (this.p15_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.p15_1;
        try {
          this.p15_1 = this.p15_1 - 1 | 0;
          tmp$ret$1 = this.w1b();
          break $l$block;
        }finally {
          this.p15_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.z19("Expected string literal but 'null' literal was found", this.p15_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.p15_1 - 1 | 0 : this.p15_1;
    var s = this.p15_1 === charSequenceLength(this.k1g()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.k1g(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.a1a(tmp$ret$2, position);
  }
  t1b() {
    var source = this.k1g();
    var cpos = this.p15_1;
    $l$loop_0: while (true) {
      cpos = this.l1g(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.p15_1 = cpos;
      return charToTokenClass(ch);
    }
    this.p15_1 = cpos;
    return 10;
  }
  j1d(doConsume) {
    var current = this.n1g();
    current = this.l1g(current);
    var len = charSequenceLength(this.k1g()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.k1g(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.k1g(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.p15_1 = current + 4 | 0;
    }
    return true;
  }
  u1d(doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.j1d(doConsume) : $super.j1d.call(this, doConsume);
  }
  k1d(isLenient) {
    var token = this.t1b();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.w1b();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.v1b();
    }
    var string = tmp;
    this.r15_1 = string;
    return string;
  }
  q1g() {
    this.r15_1 = null;
  }
  r1g(startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.k1g();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  }
  v1b() {
    if (!(this.r15_1 == null)) {
      return takePeeked(this);
    }
    return this.n1d();
  }
  consumeString2(source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.l1g(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.a1a('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.j1g(lastPosition, currentPosition);
          currentPosition = this.l1g(currentPosition);
          if (currentPosition === -1) {
            this.a1a('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.r1g(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.p15_1 = currentPosition + 1 | 0;
    return string;
  }
  o1d() {
    var result = this.w1b();
    if (result === 'null' && wasUnquotedString(this)) {
      this.a1a("Unexpected 'null' value instead of string literal");
    }
    return result;
  }
  w1b() {
    if (!(this.r15_1 == null)) {
      return takePeeked(this);
    }
    var current = this.n1g();
    if (current >= charSequenceLength(this.k1g()) || current === -1) {
      this.a1a('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.k1g(), current));
    if (token === 1) {
      return this.v1b();
    }
    if (!(token === 0)) {
      this.a1a('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.k1g(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.k1g(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.k1g())) {
        usedAppend = true;
        this.j1g(this.p15_1, current);
        var eof = this.l1g(current);
        if (eof === -1) {
          this.p15_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.r1g(this.p15_1, current);
    } else {
      tmp = decodedString(this, this.p15_1, current);
    }
    var result = tmp;
    this.p15_1 = current;
    return result;
  }
  j1g(fromIndex, toIndex) {
    this.s15_1.ue(this.k1g(), fromIndex, toIndex);
  }
  m1d(allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList.d1();
    var lastToken = this.t1b();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.w1b();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.t1b();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.w1b();
        else
          this.n1d();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.f(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.p15_1, 'found ] instead of } at path: ' + this.q15_1.toString(), this.k1g());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.p15_1, 'found } instead of ] at path: ' + this.q15_1.toString(), this.k1g());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.a1a('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.y1b();
      if (tokenStack.a1() === 0)
        return Unit_instance;
    }
  }
  toString() {
    return "JsonReader(source='" + toString(this.k1g()) + "', currentPosition=" + this.p15_1 + ')';
  }
  l1d(key) {
    var processed = this.r1g(0, this.p15_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw JsonDecodingException.n18("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.q15_1.a1b() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.k1g(), lastIndexOf_0))));
  }
  z19(message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.q15_1.a1b() + hintMessage, this.k1g());
  }
  a1a(message, position, hint, $super) {
    position = position === VOID ? this.p15_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.z19(message, position, hint) : $super.z19.call(this, message, position, hint);
  }
  w1d() {
    var current = this.n1g();
    current = this.l1g(current);
    if (current >= charSequenceLength(this.k1g()) || current === -1) {
      this.a1a('EOF');
    }
    var tmp;
    if (charSequenceGet(this.k1g(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.k1g())) {
        this.a1a('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.k1g()))) {
      var ch = charSequenceGet(this.k1g(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.a1a('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.a1a("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.a1a("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.a1a("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.a1a("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        // Inline function 'kotlin.Long.plus' call
        exponentAccumulator = exponentAccumulator.z2(toLong(10)).x2(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.minus' call
      accumulator = accumulator.z2(toLong(10)).y2(toLong(digit));
      if (accumulator.m1(new Long(0, 0)) > 0) {
        this.a1a('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.a1a('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.a1a('EOF');
      }
      if (!(charSequenceGet(this.k1g(), current) === _Char___init__impl__6a9atx(34))) {
        this.a1a('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.p15_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.m3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).m3() || doubleAccumulator < (new Long(0, -2147483648)).m3()) {
        this.a1a('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.a1a("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.c3();
    } else {
      this.a1a('Numeric value overflow');
    }
    return tmp_0;
  }
  r17() {
    var result = this.w1d();
    var next = this.y1b();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.p15_1 - 1 | 0 : this.p15_1;
      var s = this.p15_1 === charSequenceLength(this.k1g()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.k1g(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.a1a(tmp$ret$0, position);
    }
    return result;
  }
  v1d() {
    var current = this.n1g();
    if (current === charSequenceLength(this.k1g())) {
      this.a1a('EOF');
    }
    var tmp;
    if (charSequenceGet(this.k1g(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.p15_1 === charSequenceLength(this.k1g())) {
        this.a1a('EOF');
      }
      if (!(charSequenceGet(this.k1g(), this.p15_1) === _Char___init__impl__6a9atx(34))) {
        this.a1a('Expected closing quotation mark');
      }
      this.p15_1 = this.p15_1 + 1 | 0;
    }
    return result;
  }
}
class CharMappings {
  constructor() {
    CharMappings_instance = this;
    this.s1g_1 = charArray(117);
    this.t1g_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
}
class StringJsonLexer extends AbstractJsonLexer {
  constructor(source) {
    super();
    this.d1h_1 = source;
  }
  k1g() {
    return this.d1h_1;
  }
  l1g(position) {
    return position < this.k1g().length ? position : -1;
  }
  y1b() {
    var source = this.k1g();
    var cpos = this.p15_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.p15_1 = cpos;
      return charToTokenClass(c);
    }
    this.p15_1 = source.length;
    return 10;
  }
  u1b() {
    var current = this.p15_1;
    if (current === -1)
      return false;
    var source = this.k1g();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.p15_1 = current;
      return this.o1g(c);
    }
    this.p15_1 = current;
    return false;
  }
  n1g() {
    var current = this.p15_1;
    if (current === -1)
      return current;
    var source = this.k1g();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.p15_1 = current;
    return current;
  }
  h1d(expected) {
    if (this.p15_1 === -1) {
      this.p1g(expected);
    }
    var source = this.k1g();
    var cpos = this.p15_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.p15_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.p1g(expected);
    }
    this.p15_1 = -1;
    this.p1g(expected);
  }
  n1d() {
    this.h1d(_Char___init__impl__6a9atx(34));
    var current = this.p15_1;
    var closingQuote = indexOf_0(this.k1g(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.w1b();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.p15_1 - 1 | 0 : this.p15_1;
      var s = this.p15_1 === charSequenceLength(this.k1g()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.k1g(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.a1a(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.k1g(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.k1g(), this.p15_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.p15_1 = closingQuote + 1 | 0;
    return substring(this.k1g(), current, closingQuote);
  }
  p1d(keyToMatch, isLenient) {
    var positionSnapshot = this.p15_1;
    try {
      if (!(this.y1b() === 6))
        return null;
      var firstKey = this.k1d(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.q1g();
      if (!(this.y1b() === 5))
        return null;
      return this.k1d(isLenient);
    }finally {
      this.p15_1 = positionSnapshot;
      this.q1g();
    }
  }
}
class StringJsonLexerWithComments extends StringJsonLexer {
  y1b() {
    var source = this.k1g();
    var cpos = this.n1g();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.p15_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  u1b() {
    var current = this.n1g();
    if (current >= this.k1g().length || current === -1)
      return false;
    return this.o1g(charCodeAt(this.k1g(), current));
  }
  h1d(expected) {
    var source = this.k1g();
    var current = this.n1g();
    if (current >= source.length || current === -1) {
      this.p15_1 = -1;
      this.p1g(expected);
    }
    var c = charCodeAt(source, current);
    this.p15_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.p1g(expected);
    }
  }
  t1b() {
    var source = this.k1g();
    var cpos = this.n1g();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.p15_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  }
  n1g() {
    var current = this.p15_1;
    if (current === -1)
      return current;
    var source = this.k1g();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.p15_1 = source.length;
            this.a1a('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.p15_1 = current;
    return current;
  }
}
class JsonToStringWriter {
  constructor() {
    this.f15_1 = StringBuilder.ba(128);
  }
  e19(value) {
    this.f15_1.ye(value);
  }
  y18(char) {
    this.f15_1.y9(char);
  }
  a19(text) {
    this.f15_1.x9(text);
  }
  k19(text) {
    printQuoted(this.f15_1, text);
  }
  g15() {
    this.f15_1.bf();
  }
  toString() {
    return this.f15_1.toString();
  }
}
//endregion
var Default_instance;
function Default_getInstance() {
  if (Default_instance === VOID)
    new Default();
  return Default_instance;
}
function Json_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new JsonBuilder(from);
  builderAction(builder);
  var conf = builder.m16();
  return new JsonImpl(conf, builder.l16_1);
}
function validateConfiguration($this) {
  if (equals($this.hp(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new JsonSerializersModuleValidator($this.a15_1);
  $this.hp().i14(collector);
}
var ClassDiscriminatorMode_NONE_instance;
var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
var ClassDiscriminatorMode_POLYMORPHIC_instance;
var ClassDiscriminatorMode_entriesInitialized;
function ClassDiscriminatorMode_initEntries() {
  if (ClassDiscriminatorMode_entriesInitialized)
    return Unit_instance;
  ClassDiscriminatorMode_entriesInitialized = true;
  ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
  ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
  ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
}
function ClassDiscriminatorMode_NONE_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_NONE_instance;
}
function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_POLYMORPHIC_instance;
}
function get_jsonUnquotedLiteralDescriptor() {
  _init_properties_JsonElement_kt__7cbdc2();
  return jsonUnquotedLiteralDescriptor;
}
var jsonUnquotedLiteralDescriptor;
var Companion_instance;
function Companion_getInstance_3() {
  return Companion_instance;
}
var Companion_instance_0;
function Companion_getInstance_4() {
  return Companion_instance_0;
}
function JsonObject$toString$lambda(_destruct__k2r9zo) {
  // Inline function 'kotlin.collections.component1' call
  var k = _destruct__k2r9zo.f2();
  // Inline function 'kotlin.collections.component2' call
  var v = _destruct__k2r9zo.g2();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.t();
  printQuoted(this_0, k);
  this_0.y9(_Char___init__impl__6a9atx(58));
  this_0.w9(v);
  return this_0.toString();
}
var JsonNull_instance;
function JsonNull_getInstance() {
  if (JsonNull_instance === VOID)
    new JsonNull();
  return JsonNull_instance;
}
var Companion_instance_1;
function Companion_getInstance_5() {
  return Companion_instance_1;
}
function JsonPrimitive_0(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, true);
}
var Companion_instance_2;
function Companion_getInstance_6() {
  return Companion_instance_2;
}
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.k17());
}
function parseLongImpl(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return (new StringJsonLexer(_this__u8e3s4.k17())).r17();
}
function get_float(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloat' call
  var this_0 = _this__u8e3s4.k17();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.k17());
}
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.k17();
  }
  return tmp;
}
function get_jsonPrimitive(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    error(_this__u8e3s4, 'JsonPrimitive');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function error(_this__u8e3s4, element) {
  _init_properties_JsonElement_kt__7cbdc2();
  throw IllegalArgumentException.n('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
}
var properties_initialized_JsonElement_kt_abxy8s;
function _init_properties_JsonElement_kt__7cbdc2() {
  if (!properties_initialized_JsonElement_kt_abxy8s) {
    properties_initialized_JsonElement_kt_abxy8s = true;
    jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
  }
}
function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
  $this$buildSerialDescriptor.ll('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.ll('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.ll('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.ll('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.ll('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().s17_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().t17_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().u17_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().v17_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().w17_1;
}
var JsonElementSerializer_instance;
function JsonElementSerializer_getInstance() {
  if (JsonElementSerializer_instance === VOID)
    new JsonElementSerializer();
  return JsonElementSerializer_instance;
}
var JsonObjectDescriptor_instance;
function JsonObjectDescriptor_getInstance() {
  if (JsonObjectDescriptor_instance === VOID)
    new JsonObjectDescriptor();
  return JsonObjectDescriptor_instance;
}
var JsonObjectSerializer_instance;
function JsonObjectSerializer_getInstance() {
  if (JsonObjectSerializer_instance === VOID)
    new JsonObjectSerializer();
  return JsonObjectSerializer_instance;
}
var JsonArrayDescriptor_instance;
function JsonArrayDescriptor_getInstance() {
  if (JsonArrayDescriptor_instance === VOID)
    new JsonArrayDescriptor();
  return JsonArrayDescriptor_instance;
}
var JsonArraySerializer_instance;
function JsonArraySerializer_getInstance() {
  if (JsonArraySerializer_instance === VOID)
    new JsonArraySerializer();
  return JsonArraySerializer_instance;
}
function defer(deferred) {
  return new defer$1(deferred);
}
var JsonPrimitiveSerializer_instance;
function JsonPrimitiveSerializer_getInstance() {
  if (JsonPrimitiveSerializer_instance === VOID)
    new JsonPrimitiveSerializer();
  return JsonPrimitiveSerializer_instance;
}
var JsonNullSerializer_instance;
function JsonNullSerializer_getInstance() {
  if (JsonNullSerializer_instance === VOID)
    new JsonNullSerializer();
  return JsonNullSerializer_instance;
}
var JsonLiteralSerializer_instance;
function JsonLiteralSerializer_getInstance() {
  if (JsonLiteralSerializer_instance === VOID)
    new JsonLiteralSerializer();
  return JsonLiteralSerializer_instance;
}
function verify(encoder) {
  asJsonEncoder(encoder);
}
function asJsonDecoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.t3('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function verify_0(decoder) {
  asJsonDecoder(decoder);
}
function asJsonEncoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException.t3('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function _get_original__l7ku1m($this) {
  var tmp0 = $this.p18_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.g2();
}
function defer$o$_get_original_$ref_3cje7k() {
  return function (p0) {
    return _get_original__l7ku1m(p0);
  };
}
function Composer_0(sb, json) {
  return json.a15_1.r16_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function readIfAbsent($this, descriptor, index) {
  $this.w19_1 = (!descriptor.in(index) && descriptor.hn(index).vm());
  return $this.w19_1;
}
function JsonElementMarker$readIfAbsent$ref(p0) {
  var l = function (_this__u8e3s4, p0_0) {
    var tmp0 = p0;
    return readIfAbsent(tmp0, _this__u8e3s4, p0_0);
  };
  l.callableName = 'readIfAbsent';
  return l;
}
function invalidTrailingComma(_this__u8e3s4, entity) {
  entity = entity === VOID ? 'object' : entity;
  _this__u8e3s4.z19('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.p15_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
}
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.a1a('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function InvalidKeyKindException(keyDescriptor) {
  return JsonEncodingException.h1a("Value of type '" + keyDescriptor.zm() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.an().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
}
function JsonDecodingException_0(offset, message, input) {
  return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
}
function InvalidFloatingPointDecoded(value, key, output) {
  return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
}
function JsonDecodingException_1(offset, message) {
  return JsonDecodingException.n18(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
}
function minify(_this__u8e3s4, offset) {
  offset = offset === VOID ? -1 : offset;
  if (charSequenceLength(_this__u8e3s4) < 200)
    return _this__u8e3s4;
  if (offset === -1) {
    var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
    if (start <= 0)
      return _this__u8e3s4;
    // Inline function 'kotlin.text.substring' call
    var endIndex = charSequenceLength(_this__u8e3s4);
    return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
  }
  var start_0 = offset - 30 | 0;
  var end = offset + 30 | 0;
  var prefix = start_0 <= 0 ? '' : '.....';
  var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
  var tmp2 = coerceAtLeast(start_0, 0);
  // Inline function 'kotlin.text.substring' call
  var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
  return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
}
function InvalidFloatingPointEncoded(value, output) {
  return JsonEncodingException.h1a('Unexpected special floating-point value ' + toString(value) + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
}
function unexpectedFpErrorMessage(value, key, output) {
  return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
}
function get_JsonDeserializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonDeserializationNamesKey;
}
var JsonDeserializationNamesKey;
function get_JsonSerializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonSerializationNamesKey;
}
var JsonSerializationNamesKey;
function ignoreUnknownKeys(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp;
  if (json.a15_1.o16_1) {
    tmp = true;
  } else {
    var tmp0 = _this__u8e3s4.dn();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.e1();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.v();
      while (_iterator__ex2g4s.w()) {
        var element = _iterator__ex2g4s.x();
        if (element instanceof JsonIgnoreUnknownKeys) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    tmp = tmp$ret$0;
  }
  return tmp;
}
function getJsonNameIndex(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  if (decodeCaseInsensitive(json, _this__u8e3s4)) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = name.toLowerCase();
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
  }
  var strategy = namingStrategy(_this__u8e3s4, json);
  if (!(strategy == null))
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  var index = _this__u8e3s4.fn(name);
  if (!(index === -3))
    return index;
  if (!json.a15_1.y16_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.en(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.an(), CLASS_getInstance()) ? json.a15_1.z16_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.p1a(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.a15_1.a17_1 && equals(descriptor.an(), ENUM_getInstance());
}
function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).j2(name);
  return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.p1a(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap.ja();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.cn();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.gn(i);
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList.d1();
      var _iterator__ex2g4s = tmp0.v();
      while (_iterator__ex2g4s.w()) {
        var element = _iterator__ex2g4s.x();
        if (element instanceof JsonNames) {
          destination.f(element);
        }
      }
      var tmp0_safe_receiver = singleOrNull(destination);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1a_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable_0 = 0;
        var last_0 = tmp1_safe_receiver.length;
        while (inductionVariable_0 < last_0) {
          var element_0 = tmp1_safe_receiver[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp;
          if (useLowercaseEnums) {
            // Inline function 'kotlin.text.lowercase' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp = element_0.toLowerCase();
          } else {
            tmp = element_0;
          }
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
        }
      }
      var tmp_0;
      if (useLowercaseEnums) {
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = _this__u8e3s4.en(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.r1a(_this__u8e3s4, i, _this__u8e3s4.en(i));
      } else {
        tmp_0 = null;
      }
      var nameToPut = tmp_0;
      if (nameToPut == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
      }
    }
     while (inductionVariable < last);
  // Inline function 'kotlin.collections.ifEmpty' call
  var tmp_1;
  if (builder.e1()) {
    tmp_1 = emptyMap();
  } else {
    tmp_1 = builder;
  }
  return tmp_1;
}
function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
  var entity = equals($this_buildDeserializationNamesMap.an(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).h2(name)) {
    throw JsonException.n1a("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.en(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.en(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
  }
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.p2(name, index);
}
function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
  return function () {
    return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
  };
}
function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
  return function () {
    var tmp = 0;
    var tmp_0 = $this_serializationNamesIndices.cn();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.en(tmp_2);
      tmp_1[tmp_2] = $strategy.r1a($this_serializationNamesIndices, tmp_2, baseName);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
}
var properties_initialized_JsonNamesMap_kt_ljpf42;
function _init_properties_JsonNamesMap_kt__cbbp0k() {
  if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
    properties_initialized_JsonNamesMap_kt_ljpf42 = true;
    JsonDeserializationNamesKey = new Key();
    JsonSerializationNamesKey = new Key();
  }
}
var Tombstone_instance;
function Tombstone_getInstance() {
  return Tombstone_instance;
}
function resize($this) {
  var newSize = imul($this.u1a_1, 2);
  $this.s1a_1 = copyOf($this.s1a_1, newSize);
  $this.t1a_1 = copyOf_0($this.t1a_1, newSize);
}
function checkKind($this, descriptor, actualClass) {
  var kind = descriptor.an();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException.n('Serializer for ' + actualClass.gd() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.c1b_1)
    return Unit_instance;
  if (!$this.d1b_1)
    return Unit_instance;
  var tmp_0;
  var tmp_1;
  if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
    tmp_1 = true;
  } else {
    tmp_1 = kind instanceof PrimitiveKind;
  }
  if (tmp_1) {
    tmp_0 = true;
  } else {
    tmp_0 = kind instanceof ENUM;
  }
  if (tmp_0) {
    throw IllegalArgumentException.n('Serializer for ' + actualClass.gd() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function checkDiscriminatorCollisions($this, descriptor, actualClass) {
  var inductionVariable = 0;
  var last = descriptor.cn();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var name = descriptor.en(i);
      if (name === $this.b1b_1) {
        throw IllegalArgumentException.n('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism');
      }
    }
     while (inductionVariable < last);
}
function encodeByWriter(json, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = get_entries().a1();
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder.n1b(writer, json, tmp, tmp$ret$0);
  encoder.kq(serializer, value);
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.o1b_1.s1b(6);
  if ($this.o1b_1.t1b() === 4) {
    $this.o1b_1.a1a('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap.ja();
  $l$loop: while ($this.o1b_1.u1b()) {
    var key = $this.p1b_1 ? $this.o1b_1.w1b() : $this.o1b_1.v1b();
    $this.o1b_1.s1b(5);
    var element = $this.x1b();
    // Inline function 'kotlin.collections.set' call
    result.p2(key, element);
    lastToken = $this.o1b_1.y1b();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.o1b_1.a1a('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.o1b_1.s1b(7);
  } else if (lastToken === 4) {
    if (!$this.q1b_1) {
      invalidTrailingComma($this.o1b_1);
    }
    $this.o1b_1.s1b(7);
  }
  return new JsonObject(result);
}
function readObject_0($this, _this__u8e3s4, $completion) {
  var tmp = new $readObjectCOROUTINE$($this, _this__u8e3s4, $completion);
  tmp.za_1 = Unit_instance;
  tmp.ab_1 = null;
  return tmp.fb();
}
function readArray($this) {
  var lastToken = $this.o1b_1.y1b();
  if ($this.o1b_1.t1b() === 4) {
    $this.o1b_1.a1a('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList.d1();
  while ($this.o1b_1.u1b()) {
    var element = $this.x1b();
    result.f(element);
    lastToken = $this.o1b_1.y1b();
    if (!(lastToken === 4)) {
      var tmp0 = $this.o1b_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.p15_1;
      if (!condition) {
        var tmp$ret$1 = 'Expected end of the array or comma';
        tmp0.a1a(tmp$ret$1, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.o1b_1.s1b(9);
  } else if (lastToken === 4) {
    if (!$this.q1b_1) {
      invalidTrailingComma($this.o1b_1, 'array');
    }
    $this.o1b_1.s1b(9);
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.p1b_1 || !isString) {
    tmp = $this.o1b_1.w1b();
  } else {
    tmp = $this.o1b_1.v1b();
  }
  var string = tmp;
  if (!isString && string === 'null')
    return JsonNull_getInstance();
  return new JsonLiteral(string, isString);
}
function readDeepRecursive($this) {
  return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
}
function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
  var l = function ($this$DeepRecursiveFunction, it, $completion) {
    return i.b1d($this$DeepRecursiveFunction, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function classDiscriminator(_this__u8e3s4, json) {
  var _iterator__ex2g4s = _this__u8e3s4.dn().v();
  while (_iterator__ex2g4s.w()) {
    var annotation = _iterator__ex2g4s.x();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.d1d_1;
  }
  return json.a15_1.w16_1;
}
function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
  if (!(serializer instanceof SealedClassSerializer))
    return Unit_instance;
  if (jsonCachedSerialNames(actualSerializer.al()).d2(classDiscriminator)) {
    var baseName = serializer.al().zm();
    var actualName = actualSerializer.al().zm();
    // Inline function 'kotlin.error' call
    var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism';
    throw IllegalStateException.t3(toString(message));
  }
}
function checkKind_0(kind) {
  if (kind instanceof ENUM) {
    // Inline function 'kotlin.error' call
    var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException.t3(toString(message));
  }
  if (kind instanceof PrimitiveKind) {
    // Inline function 'kotlin.error' call
    var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException.t3(toString(message_0));
  }
  if (kind instanceof PolymorphicKind) {
    // Inline function 'kotlin.error' call
    var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
    throw IllegalStateException.t3(toString(message_1));
  }
}
function access$validateIfSealed$tPolymorphicKt(serializer, actualSerializer, classDiscriminator) {
  return validateIfSealed(serializer, actualSerializer, classDiscriminator);
}
function trySkip($this, _this__u8e3s4, unknownKey) {
  if (_this__u8e3s4 == null)
    return false;
  if (_this__u8e3s4.g1d_1 === unknownKey) {
    _this__u8e3s4.g1d_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.jp(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.j15_1.t1b() === 4) {
    $this.j15_1.a1a('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.l15_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.l15_1 === -1)) {
      hasComma = $this.j15_1.i1d();
    }
  } else {
    $this.j15_1.h1d(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.j15_1.u1b()) {
    if (decodingKey) {
      if ($this.l15_1 === -1) {
        var tmp0 = $this.j15_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.p15_1;
        if (!condition) {
          var tmp$ret$0 = 'Unexpected leading comma';
          tmp0.a1a(tmp$ret$0, position);
        }
      } else {
        var tmp0_0 = $this.j15_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.p15_1;
        if (!condition_0) {
          var tmp$ret$2 = 'Expected comma after the key-value pair';
          tmp0_0.a1a(tmp$ret$2, position_0);
        }
      }
    }
    $this.l15_1 = $this.l15_1 + 1 | 0;
    tmp = $this.l15_1;
  } else {
    if (hasComma && !$this.h15_1.a15_1.b17_1) {
      invalidTrailingComma($this.j15_1);
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.h15_1;
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.in(index);
    var elementDescriptor = descriptor.hn(index);
    var tmp;
    if (isOptional && !elementDescriptor.vm()) {
      tmp = $this.j15_1.j1d(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.an(), ENUM_getInstance())) {
      var tmp_0;
      if (elementDescriptor.vm()) {
        tmp_0 = $this.j15_1.j1d(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.j15_1.k1d($this.n15_1.p16_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.a15_1.s16_1 && elementDescriptor.vm();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        $this.j15_1.v1b();
        tmp$ret$1 = true;
        break $l$block_2;
      }
    }
    tmp$ret$1 = false;
  }
  return tmp$ret$1;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.j15_1.i1d();
  while ($this.j15_1.u1b()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.j15_1.h1d(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.h15_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.n15_1.u16_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.j15_1.i1d();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.o15_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.x19(index);
        }
        return index;
      }
      tmp = tmp_0;
    } else {
      tmp = true;
    }
    var isUnknown = tmp;
    if (isUnknown) {
      hasComma = handleUnknown($this, descriptor, key);
    }
  }
  if (hasComma && !$this.h15_1.a15_1.b17_1) {
    invalidTrailingComma($this.j15_1);
  }
  var tmp1_safe_receiver = $this.o15_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y19();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, descriptor, key) {
  if (ignoreUnknownKeys(descriptor, $this.h15_1) || trySkip($this, $this.m15_1, key)) {
    $this.j15_1.m1d($this.n15_1.p16_1);
  } else {
    $this.j15_1.q15_1.z1a();
    $this.j15_1.l1d(key);
  }
  return $this.j15_1.i1d();
}
function decodeListIndex($this) {
  var hasComma = $this.j15_1.i1d();
  var tmp;
  if ($this.j15_1.u1b()) {
    if (!($this.l15_1 === -1) && !hasComma) {
      $this.j15_1.a1a('Expected end of the array or comma');
    }
    $this.l15_1 = $this.l15_1 + 1 | 0;
    tmp = $this.l15_1;
  } else {
    if (hasComma && !$this.h15_1.a15_1.b17_1) {
      invalidTrailingComma($this.j15_1, 'array');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.n15_1.p16_1) {
    tmp = $this.j15_1.o1d();
  } else {
    tmp = $this.j15_1.n1d();
  }
  return tmp;
}
function get_unsignedNumberDescriptors() {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return unsignedNumberDescriptors;
}
var unsignedNumberDescriptors;
function encodeTypeInfo($this, discriminator, serialName) {
  $this.e1b_1.u18();
  $this.xp(discriminator);
  $this.e1b_1.x18(_Char___init__impl__6a9atx(58));
  $this.e1b_1.w18();
  $this.xp(serialName);
}
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.bn() && get_unsignedNumberDescriptors().d2(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.bn() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).al(), serializer_0(Companion_getInstance()).al(), serializer_2(Companion_getInstance_1()).al(), serializer_3(Companion_getInstance_2()).al()]);
  }
}
function get_ESCAPE_STRINGS() {
  _init_properties_StringOps_kt__fcy1db();
  return ESCAPE_STRINGS;
}
var ESCAPE_STRINGS;
var ESCAPE_MARKERS;
function toHexChar(i) {
  _init_properties_StringOps_kt__fcy1db();
  var d = i & 15;
  var tmp;
  if (d < 10) {
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    tmp = numberToChar(d + tmp$ret$0 | 0);
  } else {
    var tmp_0 = d - 10 | 0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
    tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
  }
  return tmp;
}
function printQuoted(_this__u8e3s4, value) {
  _init_properties_StringOps_kt__fcy1db();
  _this__u8e3s4.y9(_Char___init__impl__6a9atx(34));
  var lastPos = 0;
  var inductionVariable = 0;
  var last = charSequenceLength(value) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charCodeAt(value, i);
      var c = Char__toInt_impl_vasixd(this_0);
      if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
        _this__u8e3s4.ue(value, lastPos, i);
        _this__u8e3s4.x9(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0))
    _this__u8e3s4.ue(value, lastPos, value.length);
  else
    _this__u8e3s4.x9(value);
  _this__u8e3s4.y9(_Char___init__impl__6a9atx(34));
}
function toBooleanStrictOrNull_0(_this__u8e3s4) {
  _init_properties_StringOps_kt__fcy1db();
  return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
}
var properties_initialized_StringOps_kt_wzaea7;
function _init_properties_StringOps_kt__fcy1db() {
  if (!properties_initialized_StringOps_kt_wzaea7) {
    properties_initialized_StringOps_kt_wzaea7 = true;
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.apply' call
    var this_0 = Array(93);
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c1 = toHexChar(c >> 12);
        var c2 = toHexChar(c >> 8);
        var c3 = toHexChar(c >> 4);
        var c4 = toHexChar(c);
        this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
      }
       while (inductionVariable <= 31);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(34);
    this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(92);
    this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(9);
    this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
    // Inline function 'kotlin.code' call
    var this_4 = _Char___init__impl__6a9atx(8);
    this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
    // Inline function 'kotlin.code' call
    var this_5 = _Char___init__impl__6a9atx(10);
    this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
    // Inline function 'kotlin.code' call
    var this_6 = _Char___init__impl__6a9atx(13);
    this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
    this_0[12] = '\\f';
    ESCAPE_STRINGS = this_0;
    // Inline function 'kotlin.apply' call
    var this_7 = new Int8Array(93);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 <= 31)
      do {
        var c_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_7[c_0] = 1;
      }
       while (inductionVariable_0 <= 31);
    // Inline function 'kotlin.code' call
    var this_8 = _Char___init__impl__6a9atx(34);
    var tmp = Char__toInt_impl_vasixd(this_8);
    // Inline function 'kotlin.code' call
    var this_9 = _Char___init__impl__6a9atx(34);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
    this_7[tmp] = toByte(tmp$ret$1);
    // Inline function 'kotlin.code' call
    var this_10 = _Char___init__impl__6a9atx(92);
    var tmp_0 = Char__toInt_impl_vasixd(this_10);
    // Inline function 'kotlin.code' call
    var this_11 = _Char___init__impl__6a9atx(92);
    var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
    this_7[tmp_0] = toByte(tmp$ret$3);
    // Inline function 'kotlin.code' call
    var this_12 = _Char___init__impl__6a9atx(9);
    var tmp_1 = Char__toInt_impl_vasixd(this_12);
    // Inline function 'kotlin.code' call
    var this_13 = _Char___init__impl__6a9atx(116);
    var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
    this_7[tmp_1] = toByte(tmp$ret$5);
    // Inline function 'kotlin.code' call
    var this_14 = _Char___init__impl__6a9atx(8);
    var tmp_2 = Char__toInt_impl_vasixd(this_14);
    // Inline function 'kotlin.code' call
    var this_15 = _Char___init__impl__6a9atx(98);
    var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
    this_7[tmp_2] = toByte(tmp$ret$7);
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(10);
    var tmp_3 = Char__toInt_impl_vasixd(this_16);
    // Inline function 'kotlin.code' call
    var this_17 = _Char___init__impl__6a9atx(110);
    var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
    this_7[tmp_3] = toByte(tmp$ret$9);
    // Inline function 'kotlin.code' call
    var this_18 = _Char___init__impl__6a9atx(13);
    var tmp_4 = Char__toInt_impl_vasixd(this_18);
    // Inline function 'kotlin.code' call
    var this_19 = _Char___init__impl__6a9atx(114);
    var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
    this_7[tmp_4] = toByte(tmp$ret$11);
    // Inline function 'kotlin.code' call
    var this_20 = _Char___init__impl__6a9atx(102);
    var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
    this_7[12] = toByte(tmp$ret$12);
    ESCAPE_MARKERS = this_7;
  }
}
function unparsedPrimitive($this, literal, primitive, tag) {
  var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
  throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.g1e(tag), toString($this.h1e()));
}
function setForceNull($this, descriptor, index) {
  $this.d1f_1 = (!$this.e17().a15_1.s16_1 && !descriptor.in(index) && descriptor.hn(index).vm());
  return $this.d1f_1;
}
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.al())).ro(deserializer);
}
var WriteMode_OBJ_instance;
var WriteMode_LIST_instance;
var WriteMode_MAP_instance;
var WriteMode_POLY_OBJ_instance;
function values() {
  return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var WriteMode_entriesInitialized;
function WriteMode_initEntries() {
  if (WriteMode_entriesInitialized)
    return Unit_instance;
  WriteMode_entriesInitialized = true;
  WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
}
var $ENTRIES;
function switchMode(_this__u8e3s4, desc) {
  var tmp0_subject = desc.an();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.hn(0), _this__u8e3s4.hp());
        var keyKind = keyDescriptor.an();
        var tmp_0;
        var tmp_1;
        if (keyKind instanceof PrimitiveKind) {
          tmp_1 = true;
        } else {
          tmp_1 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_1) {
          tmp_0 = WriteMode_MAP_getInstance();
        } else {
          if (_this__u8e3s4.a15_1.q16_1) {
            tmp_0 = WriteMode_LIST_getInstance();
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_0;
      } else {
        tmp = WriteMode_OBJ_getInstance();
      }
    }
  }
  return tmp;
}
function carrierDescriptor(_this__u8e3s4, module_0) {
  var tmp;
  if (equals(_this__u8e3s4.an(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.bn()) {
    tmp = carrierDescriptor(_this__u8e3s4.hn(0), module_0);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function WriteMode_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_OBJ_instance;
}
function WriteMode_LIST_getInstance() {
  WriteMode_initEntries();
  return WriteMode_LIST_instance;
}
function WriteMode_MAP_getInstance() {
  WriteMode_initEntries();
  return WriteMode_MAP_instance;
}
function WriteMode_POLY_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_POLY_OBJ_instance;
}
function appendEscape($this, lastPosition, current) {
  $this.j1g(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.j1g(lastPosition, currentPosition);
  var result = $this.s15_1.toString();
  $this.s15_1.af(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.r15_1);
  $this.r15_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.k1g(), $this.p15_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.l1g(currentPosition);
  if (currentPosition === -1) {
    $this.a1a('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.k1g();
  var _unary__edvuaz = currentPosition;
  currentPosition = _unary__edvuaz + 1 | 0;
  var currentChar = charSequenceGet(tmp, _unary__edvuaz);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.k1g(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.a1a("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.s15_1.y9(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.p15_1 = startPos;
    $this.m1g();
    if (($this.p15_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.a1a('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.p15_1);
  }
  $this.s15_1.y9(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
  return startPos + 4 | 0;
}
function fromHexChar($this, source, currentPosition) {
  var character = charSequenceGet(source, currentPosition);
  var tmp;
  if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
    // Inline function 'kotlin.code' call
    var tmp_0 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
  } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
    // Inline function 'kotlin.code' call
    var tmp_1 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
  } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
    // Inline function 'kotlin.code' call
    var tmp_2 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(65);
    tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
  } else {
    $this.a1a("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.l1g(start);
  if (current >= charSequenceLength($this.k1g()) || current === -1) {
    $this.a1a('EOF');
  }
  var tmp = $this.k1g();
  var _unary__edvuaz = current;
  current = _unary__edvuaz + 1 | 0;
  // Inline function 'kotlin.code' call
  var this_0 = charSequenceGet(tmp, _unary__edvuaz);
  var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
  var tmp_0;
  // Inline function 'kotlin.code' call
  var this_1 = _Char___init__impl__6a9atx(116);
  if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
    consumeBooleanLiteral($this, 'rue', current);
    tmp_0 = true;
  } else {
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(102);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
      consumeBooleanLiteral($this, 'alse', current);
      tmp_0 = false;
    } else {
      $this.a1a("Expected valid boolean literal prefix, but had '" + $this.w1b() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.k1g()) - current | 0) < literalSuffix.length) {
    $this.a1a('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.k1g(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.a1a("Expected valid boolean literal prefix, but had '" + $this.w1b() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.p15_1 = current + literalSuffix.length | 0;
}
function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
  var tmp;
  switch (isExponentPositive) {
    case false:
      // Inline function 'kotlin.math.pow' call

      var x = -exponentAccumulator.m3();
      tmp = Math.pow(10.0, x);
      break;
    case true:
      // Inline function 'kotlin.math.pow' call

      var x_0 = exponentAccumulator.m3();
      tmp = Math.pow(10.0, x_0);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function charToTokenClass(c) {
  var tmp;
  // Inline function 'kotlin.code' call
  if (Char__toInt_impl_vasixd(c) < 126) {
    var tmp_0 = CharMappings_getInstance().t1g_1;
    // Inline function 'kotlin.code' call
    tmp = tmp_0[Char__toInt_impl_vasixd(c)];
  } else {
    tmp = 0;
  }
  return tmp;
}
function tokenDescription(token) {
  return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
}
function escapeToChar(c) {
  return c < 117 ? CharMappings_getInstance().s1g_1[c] : _Char___init__impl__6a9atx(0);
}
function initEscape($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 31)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2ESC($this, i, _Char___init__impl__6a9atx(117));
    }
     while (inductionVariable <= 31);
  initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
  initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
  initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
  initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
  initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
  initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
  initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
  initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
}
function initCharToToken($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 32)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2TC($this, i, 127);
    }
     while (inductionVariable <= 32);
  initC2TC($this, 9, 3);
  initC2TC($this, 10, 3);
  initC2TC($this, 13, 3);
  initC2TC($this, 32, 3);
  initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
  initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
  initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
  initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
  initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
  initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
  initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
  initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
}
function initC2ESC($this, c, esc) {
  if (!(esc === _Char___init__impl__6a9atx(117))) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
    $this.s1g_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.t1g_1[c] = cl;
}
function initC2TC_0($this, c, cl) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2TC($this, tmp$ret$0, cl);
}
var CharMappings_instance;
function CharMappings_getInstance() {
  if (CharMappings_instance === VOID)
    new CharMappings();
  return CharMappings_instance;
}
function StringJsonLexer_0(json, source) {
  return !json.a15_1.c17_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
}
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.c15_1;
}
function createMapForCache(initialCapacity) {
  return HashMap.g7(initialCapacity);
}
//region block: post-declaration
initMetadataForClass(Json, 'Json');
initMetadataForObject(Default, 'Default');
initMetadataForClass(JsonBuilder, 'JsonBuilder');
initMetadataForClass(JsonImpl, 'JsonImpl');
initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
initMetadataForClass(JsonNames, 'JsonNames');
initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode');
initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
initMetadataForCompanion(Companion);
initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
initMetadataForCompanion(Companion_0);
initMetadataForClass(JsonObject, 'JsonObject', VOID, VOID, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, VOID, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
initMetadataForObject(JsonNull, 'JsonNull', VOID, VOID, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
initMetadataForCompanion(Companion_1);
initMetadataForClass(JsonLiteral, 'JsonLiteral');
initMetadataForCompanion(Companion_2);
initMetadataForClass(JsonArray, 'JsonArray', VOID, VOID, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
protoOf(defer$1).vm = get_isNullable;
protoOf(defer$1).bn = get_isInline;
protoOf(defer$1).dn = get_annotations;
initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
initMetadataForClass(Composer, 'Composer');
initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers');
initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals');
initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint');
initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
initMetadataForClass(JsonException, 'JsonException');
initMetadataForClass(JsonEncodingException, 'JsonEncodingException');
initMetadataForClass(JsonDecodingException, 'JsonDecodingException');
initMetadataForObject(Tombstone, 'Tombstone');
initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
protoOf(JsonSerializersModuleValidator).t14 = contextual;
initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, VOID, VOID, [2]);
initMetadataForCoroutine($readObjectCOROUTINE$);
initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
initMetadataForClass(Key, 'Key', Key);
initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, VOID, [JsonDecoder, AbstractDecoder]);
initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes');
initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, VOID, [JsonEncoder, AbstractEncoder]);
initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, VOID, [NamedValueDecoder, JsonDecoder]);
initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder');
initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder');
initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder');
initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder');
initMetadataForClass(WriteMode, 'WriteMode');
initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
initMetadataForObject(CharMappings, 'CharMappings');
initMetadataForClass(StringJsonLexer, 'StringJsonLexer');
initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments');
initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
//endregion
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
Tombstone_instance = new Tombstone();
//endregion
//region block: exports
export {
  Json_0 as Jsonsmkyu9xjl7fv,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.mjs.map
