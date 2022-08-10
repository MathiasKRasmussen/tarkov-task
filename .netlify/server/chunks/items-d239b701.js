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
  a: () => isMoney,
  b: () => isRUB,
  c: () => isUSD,
  d: () => isEUR,
  i: () => iconWidth
});
module.exports = __toCommonJS(stdin_exports);
function isMoney(item) {
  return item.shortName === "RUB" || item.shortName === "USD" || item.shortName === "EUR";
}
function isRUB(item) {
  return item.shortName === "RUB";
}
function isUSD(item) {
  return item.shortName === "USD";
}
function isEUR(item) {
  return item.shortName === "EUR";
}
function iconWidth(item) {
  return item.width > 4 ? 4 * 16 : item.width * 16;
}
