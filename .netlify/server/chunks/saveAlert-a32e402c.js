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
  S: () => SaveAlert
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c03cb5e3 = require("./index-c03cb5e3.js");
var import_Circle2_fc1f040e = require("./Circle2-fc1f040e.js");
const SaveAlert = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { saveLoad } = $$props;
  let { elementsToSave } = $$props;
  let { onCancel = () => {
  } } = $$props;
  let { onSave = () => {
  } } = $$props;
  if ($$props.saveLoad === void 0 && $$bindings.saveLoad && saveLoad !== void 0)
    $$bindings.saveLoad(saveLoad);
  if ($$props.elementsToSave === void 0 && $$bindings.elementsToSave && elementsToSave !== void 0)
    $$bindings.elementsToSave(elementsToSave);
  if ($$props.onCancel === void 0 && $$bindings.onCancel && onCancel !== void 0)
    $$bindings.onCancel(onCancel);
  if ($$props.onSave === void 0 && $$bindings.onSave && onSave !== void 0)
    $$bindings.onSave(onSave);
  return `<div class="${"alert alert-info shadow-lg sticky bottom-0 z-50"}">
	${saveLoad ? `<div class="${"flex justify-center w-full"}"><div class="${"justify-center"}">${(0, import_index_c03cb5e3.v)(import_Circle2_fc1f040e.C, "Circle2").$$render($$result, {
    size: "32",
    colorOuter: "#9A8866",
    colorCenter: "#786849",
    colorInner: "#CFA85F",
    unit: "px"
  }, {}, {})}</div></div>` : `<div>
			<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" class="${"stroke-current flex-shrink-0 w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
			
			<span class="${"text-lg"}">${(0, import_index_c03cb5e3.e)(`Remember to save ${elementsToSave} change${elementsToSave > 1 ? "s" : ""}`)}</span></div>
		
		<div class="${"flex-none"}"><button class="${"btn btn-sm btn-neutral"}">Cancel</button>
			<button class="${"btn btn-sm btn-success"}">Save</button></div>`}</div>`;
});
