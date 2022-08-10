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
  C: () => Circle2
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c03cb5e3 = require("./index-c03cb5e3.js");
const css = {
  code: '.circle.svelte-1vclic6{width:var(--size);height:var(--size);box-sizing:border-box;position:relative;border:3px solid transparent;border-top-color:var(--colorOuter);border-radius:50%;animation:svelte-1vclic6-circleSpin var(--durationOuter) linear infinite}.circle.svelte-1vclic6:before,.circle.svelte-1vclic6:after{content:"";box-sizing:border-box;position:absolute;border:3px solid transparent;border-radius:50%}.circle.svelte-1vclic6:after{border-top-color:var(--colorInner);top:9px;left:9px;right:9px;bottom:9px;animation:svelte-1vclic6-circleSpin var(--durationInner) linear infinite}.circle.svelte-1vclic6:before{border-top-color:var(--colorCenter);top:3px;left:3px;right:3px;bottom:3px;animation:svelte-1vclic6-circleSpin var(--durationCenter) linear infinite}@keyframes svelte-1vclic6-circleSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',
  map: null
};
const Circle2 = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "60" } = $$props;
  let { unit = "px" } = $$props;
  let { colorOuter = "#FF3E00" } = $$props;
  let { colorCenter = "#40B3FF" } = $$props;
  let { colorInner = "#676778" } = $$props;
  let { durationMultiplier = 1 } = $$props;
  let { durationOuter = `${durationMultiplier * 2}s` } = $$props;
  let { durationInner = `${durationMultiplier * 1.5}s` } = $$props;
  let { durationCenter = `${durationMultiplier * 3}s` } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.colorOuter === void 0 && $$bindings.colorOuter && colorOuter !== void 0)
    $$bindings.colorOuter(colorOuter);
  if ($$props.colorCenter === void 0 && $$bindings.colorCenter && colorCenter !== void 0)
    $$bindings.colorCenter(colorCenter);
  if ($$props.colorInner === void 0 && $$bindings.colorInner && colorInner !== void 0)
    $$bindings.colorInner(colorInner);
  if ($$props.durationMultiplier === void 0 && $$bindings.durationMultiplier && durationMultiplier !== void 0)
    $$bindings.durationMultiplier(durationMultiplier);
  if ($$props.durationOuter === void 0 && $$bindings.durationOuter && durationOuter !== void 0)
    $$bindings.durationOuter(durationOuter);
  if ($$props.durationInner === void 0 && $$bindings.durationInner && durationInner !== void 0)
    $$bindings.durationInner(durationInner);
  if ($$props.durationCenter === void 0 && $$bindings.durationCenter && durationCenter !== void 0)
    $$bindings.durationCenter(durationCenter);
  $$result.css.add(css);
  return `<div class="${"circle svelte-1vclic6"}" style="${"--size: " + (0, import_index_c03cb5e3.e)(size) + (0, import_index_c03cb5e3.e)(unit) + "; --colorInner: " + (0, import_index_c03cb5e3.e)(colorInner) + "; --colorCenter: " + (0, import_index_c03cb5e3.e)(colorCenter) + "; --colorOuter: " + (0, import_index_c03cb5e3.e)(colorOuter) + "; --durationInner: " + (0, import_index_c03cb5e3.e)(durationInner) + "; --durationCenter: " + (0, import_index_c03cb5e3.e)(durationCenter) + "; --durationOuter: " + (0, import_index_c03cb5e3.e)(durationOuter) + ";"}"></div>`;
});
