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
  a: () => getTraderLevel,
  b: () => getTraderRomanList,
  e: () => eftSort,
  g: () => getTraderRomanLevel
});
module.exports = __toCommonJS(stdin_exports);
function getTraderLevel(trader) {
  return trader.PlayerHasTrader.length ? trader.PlayerHasTrader[0].level : 1;
}
function getTraderRomanLevel(level) {
  switch (level) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "\u2655";
    default:
      return "I";
  }
}
function getTraderRomanList() {
  return ["I", "II", "III", "\u2655"];
}
function eftSort(traders) {
  let newTraders = [];
  newTraders.push(getTrader(traders, "Prapor"));
  newTraders.push(getTrader(traders, "Therapist"));
  newTraders.push(getTrader(traders, "Fence"));
  newTraders.push(getTrader(traders, "Skier"));
  newTraders.push(getTrader(traders, "Peacekeeper"));
  newTraders.push(getTrader(traders, "Mechanic"));
  newTraders.push(getTrader(traders, "Ragman"));
  newTraders.push(getTrader(traders, "Jaeger"));
  return newTraders;
}
function getTrader(traders, name) {
  for (let trader of traders) {
    if (trader.name === name)
      return trader;
  }
  return traders[0];
}
