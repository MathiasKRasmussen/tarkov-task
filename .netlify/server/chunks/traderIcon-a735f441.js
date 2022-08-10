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
  T: () => TraderIcon
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c03cb5e3 = require("./index-c03cb5e3.js");
var import_trader_b7e5426c = require("./trader-b7e5426c.js");
const TraderIcon = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { trader } = $$props;
  let { level } = $$props;
  let { size = 14 } = $$props;
  let { href = "" } = $$props;
  if ($$props.trader === void 0 && $$bindings.trader && trader !== void 0)
    $$bindings.trader(trader);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `
<div class="${"avatar indicator"}">
	<span class="${"indicator-item indicator-bottom badge badge-neutral cursor-help w-6 h-6 text-lg"}"${(0, import_index_c03cb5e3.b)("title", `${trader.name} level ${level}`, 0)}>${(0, import_index_c03cb5e3.e)((0, import_trader_b7e5426c.g)(level))}</span>
	
	<div class="${"avatar flex"}"><div class="${"rounded w-" + (0, import_index_c03cb5e3.e)(size)}">${href.length ? `<a sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", href, 0)}><img${(0, import_index_c03cb5e3.b)("src", trader.image, 0)}${(0, import_index_c03cb5e3.b)("alt", trader.name, 0)}${(0, import_index_c03cb5e3.b)("title", trader.name, 0)}></a>` : `<a${(0, import_index_c03cb5e3.b)("href", trader.wiki, 0)} target="${"_blank"}"><img${(0, import_index_c03cb5e3.b)("src", trader.image, 0)}${(0, import_index_c03cb5e3.b)("alt", trader.name, 0)}${(0, import_index_c03cb5e3.b)("title", trader.name, 0)}></a>`}</div></div></div>`;
});
