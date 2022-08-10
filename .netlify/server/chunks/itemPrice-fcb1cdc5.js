var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  a: () => convertCurrency,
  b: () => bestTraderToSell,
  c: () => currencySymbol,
  f: () => fleaProfit,
  g: () => getFleaCurrentPrice
});
module.exports = __toCommonJS(stdin_exports);
const euroRUBValue = 127;
const usdRUBValue = 114;
function currencySymbol(currency) {
  switch (currency) {
    case "RUB":
      return "\u20BD";
    case "USD":
      return "$";
    case "EUR":
      return "\u20AC";
    default:
      return "\u20BD";
  }
}
function bestTraderToSell(sellfor) {
  let bestOffer;
  sellfor.forEach((offer) => {
    if (offer.vendor.name !== "Flea Market") {
      if (!bestOffer)
        bestOffer = offer;
      else if (isBetterValue(bestOffer.price, offer))
        bestOffer = offer;
    }
  });
  return bestOffer;
}
function isBetterValue(current, offer) {
  if (offer.currency === "RUB")
    return offer.price > current;
  else if (offer.currency === "USD")
    return offer.price * usdRUBValue > current;
  else if (offer.currency === "EUR")
    return offer.price * euroRUBValue > current;
  return false;
}
function getFleaCurrentPrice(sellfor) {
  sellfor.forEach((offer) => {
    if (offer.vendor.name === "Flea Market")
      return offer.price;
  });
  return 0;
}
function fleaProfit(fleaPrice, traderPrice, currency) {
  if (currency === "RUB") {
    return fleaPrice - traderPrice;
  } else if (currency === "USD") {
    return fleaPrice - traderPrice * usdRUBValue;
  } else if (currency === "EUR") {
    return fleaPrice - traderPrice * euroRUBValue;
  }
  return 0;
}
function convertCurrency(price, inputCurrency, outputCurrency) {
  if (inputCurrency === "RUB") {
    if (outputCurrency === "USD")
      return price / usdRUBValue;
    else if (outputCurrency === "EUR")
      return price / euroRUBValue;
  } else if (inputCurrency === "USD") {
    if (outputCurrency === "RUB")
      return price * usdRUBValue;
    else if (outputCurrency === "EUR")
      return price * usdRUBValue / euroRUBValue;
  } else if (inputCurrency === "EUR") {
    if (outputCurrency === "RUB")
      return price * euroRUBValue;
    else if (outputCurrency === "USD")
      return price * euroRUBValue / usdRUBValue;
  }
  return price;
}
