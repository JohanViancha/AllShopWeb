
export interface Endpoint {
    itemsProducts: string;
}

export interface Items {
  site_id:                   SiteID;
  seller:                    Seller;
  country_default_time_zone: string;
  paging:                    Paging;
  results:                   ResultItems[];
  sort:                      Sort;
  available_sorts:           Sort[];
  filters:                   any[];
  available_filters:         AvailableFilter[];
  pads_info:                 PadsInfo;
}

export interface AvailableFilter {
  id:     string;
  name:   string;
  type:   string;
  values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
  id:      string;
  name:    string;
  results: number;
}

export interface Sort {
  id:   ID;
  name: Name;
}

export enum ID {
  Co = "CO",
  CoSAN = "CO-SAN",
  PriceAsc = "price_asc",
  PriceDesc = "price_desc",
  Relevance = "relevance",
  TUNPQ0JVQzkzMTE4 = "TUNPQ0JVQzkzMTE4",
}

export enum Name {
  Bucaramanga = "Bucaramanga",
  Colombia = "Colombia",
  MayorPrecio = "Mayor precio",
  MenorPrecio = "Menor precio",
  MásRelevantes = "Más relevantes",
  Santander = "Santander",
}

export interface PadsInfo {
  tracelog: string[];
}

export interface Paging {
  total:           number;
  primary_results: number;
  offset:          number;
  limit:           number;
}

export interface ResultItems {
  id:                    string;
  title:                 string;
  condition:             Condition;
  thumbnail_id:          string;
  catalog_product_id:    null | string;
  listing_type_id:       ListingTypeID;
  permalink:             string;
  buying_mode:           BuyingMode;
  site_id:               SiteID;
  category_id:           string;
  domain_id:             string;
  thumbnail:             string;
  currency_id:           CurrencyID;
  order_backend:         number;
  price:                 number;
  original_price:        null;
  sale_price:            null;
  sold_quantity:         number;
  available_quantity:    number;
  official_store_id:     null;
  use_thumbnail_id:      boolean;
  accepts_mercadopago:   boolean;
  tags:                  ResultTag[];
  shipping:              Shipping;
  stop_time:             Date;
  seller:                Seller;
  seller_address:        SellerAddress;
  address:               Address;
  attributes:            Attribute[];
  installments:          Installments;
  winner_item_id:        null;
  catalog_listing:       boolean;
  discounts:             null;
  promotions:            any[];
  inventory_id:          null | string;
  differential_pricing?: DifferentialPricing;
  variation_filters?:    string[];
  variations_data?:      { [key: string]: VariationsDatum };
}

export interface Address {
  state_id:   ID;
  state_name: Name;
  city_id:    ID;
  city_name:  Name;
}

export interface Attribute {
  id:                   string;
  name:                 string;
  value_id:             null | string;
  value_name:           null | string;
  attribute_group_id:   AttributeGroupID;
  attribute_group_name: AttributeGroupName;
  value_struct:         Struct | null;
  values:               AttributeValue[];
  source:               number;
  value_type:           ValueType | null;
}

export enum AttributeGroupID {
  Others = "OTHERS",
}

export enum AttributeGroupName {
  Otros = "Otros",
}

export interface Struct {
  number: number;
  unit:   Unit;
}

export enum Unit {
  CM = "cm",
  G = "g",
  Kg = "kg",
  L = "L",
  M = "m",
  Mm = "mm",
}

export enum ValueType {
  List = "list",
  Number = "number",
  NumberUnit = "number_unit",
  String = "string",
}

export interface AttributeValue {
  id:     null | string;
  name:   null | string;
  struct: Struct | null;
  source: number;
}

export enum BuyingMode {
  BuyItNow = "buy_it_now",
}

export enum Condition {
  New = "new",
}

export enum CurrencyID {
  Cop = "COP",
}

export interface DifferentialPricing {
  id: number;
}

export interface Installments {
  quantity:    number;
  amount:      number;
  rate:        number;
  currency_id: CurrencyID;
}

export enum ListingTypeID {
  GoldPro = "gold_pro",
  GoldSpecial = "gold_special",
}

export interface Seller {
  id:                 number;
  nickname:           Nickname;
  car_dealer:         boolean;
  real_estate_agency: boolean;
  _:                  boolean;
  registration_date:  Date;
  tags:               SellerTag[];
  car_dealer_logo?:   string;
  permalink:          string;
  seller_reputation:  SellerReputation;
  eshop:              Eshop;
}

export interface Eshop {
  eshop_id:         number;
  seller:           number;
  nick_name:        Nickname;
  eshop_status_id:  number;
  site_id:          SiteID;
  eshop_experience: number;
  eshop_rubro:      null;
  eshop_locations:  any[];
  eshop_logo_url:   string;
}

export enum Nickname {
  Maxprintercolombia = "MAXPRINTERCOLOMBIA",
}

export enum SiteID {
  Mco = "MCO",
}

export interface SellerReputation {
  level_id:            LevelID;
  power_seller_status: PowerSellerStatus;
  transactions:        Transactions;
  metrics:             Metrics;
}

export enum LevelID {
  The5_Green = "5_green",
}

export interface Metrics {
  sales:                 Sales;
  claims:                Cancellations;
  delayed_handling_time: Cancellations;
  cancellations:         Cancellations;
}

export interface Cancellations {
  period: CancellationsPeriod;
  rate:   number;
  value:  number;
}

export enum CancellationsPeriod {
  The60Days = "60 days",
}

export interface Sales {
  period:    CancellationsPeriod;
  completed: number;
}

export enum PowerSellerStatus {
  Platinum = "platinum",
}

export interface Transactions {
  canceled:  number;
  completed: number;
  period:    TransactionsPeriod;
  ratings:   Ratings;
  total:     number;
}

export enum TransactionsPeriod {
  Historic = "historic",
}

export interface Ratings {
  negative: number;
  neutral:  number;
  positive: number;
}

export enum SellerTag {
  Eshop = "eshop",
  MessagesAsSeller = "messages_as_seller",
  Mshops = "mshops",
  Normal = "normal",
}

export interface SellerAddress {
  comment:      string;
  address_line: string;
  id:           null;
  latitude:     null;
  longitude:    null;
  country:      Sort;
  state:        Sort;
  city:         Sort;
}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: LogisticType;
  mode:          Mode;
  tags:          ShippingTag[];
  benefits:      null;
  promise:       null;
}

export enum LogisticType {
  CrossDocking = "cross_docking",
  Fulfillment = "fulfillment",
}

export enum Mode {
  Me2 = "me2",
}

export enum ShippingTag {
  Fulfillment = "fulfillment",
  MCOChgThresholdJan23 = "MCO-chg-threshold-Jan-23",
  MandatoryFreeShipping = "mandatory_free_shipping",
}

export enum ResultTag {
  BestSellerCandidate = "best_seller_candidate",
  CartEligible = "cart_eligible",
  CatalogBoost = "catalog_boost",
  GoodQualityPicture = "good_quality_picture",
  GoodQualityThumbnail = "good_quality_thumbnail",
  ImmediatePayment = "immediate_payment",
  KvsPrimary = "kvs_primary",
  LoyaltyDiscountEligible = "loyalty_discount_eligible",
  ModerationPenalty = "moderation_penalty",
  ShippingGuaranteed = "shipping_guaranteed",
  StandardPriceByChannel = "standard_price_by_channel",
}

export interface VariationsDatum {
  thumbnail:    string;
  ratio:        string;
  name:         string;
  pictures_qty: number;
  inventory_id: string;
}