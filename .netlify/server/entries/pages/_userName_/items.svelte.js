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
  default: () => Items
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c03cb5e3 = require("../../../chunks/index-c03cb5e3.js");
var import_items_d239b701 = require("../../../chunks/items-d239b701.js");
var import_stores_d9555cbf = require("../../../chunks/stores-d9555cbf.js");
var Tooltip_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".top-100.svelte-j3362d{top:100%}.bottom-100.svelte-j3362d{bottom:100%}.left-100.svelte-j3362d{left:100%}.right-100.svelte-j3362d{right:100%}")();
const css$1 = {
  code: ".top-100.svelte-j3362d{top:100%}.bottom-100.svelte-j3362d{bottom:100%}.left-100.svelte-j3362d{left:100%}.right-100.svelte-j3362d{right:100%}",
  map: null
};
const Tooltip = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { position = "top" } = $$props;
  let { pointer = "middle" } = $$props;
  let { color = "black" } = $$props;
  let { text_color = "white" } = $$props;
  let { text = "" } = $$props;
  let { show = true } = $$props;
  let { w = null } = $$props;
  let points = {
    top: "0,0 127.5,127.5 255,0",
    right: "255,0 127.5,127.5 255,255",
    left: "0,0 127.5,127.5 0,255",
    bottom: "0,255 127.5,127.5 255,255"
  };
  let pointer_class = "left-0";
  let cursor_class = "";
  let elm_class = "";
  let lhidden = "opacity-0";
  let current_node = null;
  function mposition(node) {
    current_node = node;
    let m = 0;
    if (position == "top" || position == "bottom") {
      if (pointer == "middle") {
        m = node.parentNode.clientWidth / 2 - node.clientWidth / 2;
        node.style.marginLeft = `${m}px`;
        cursor_class = "w-full";
      } else if (pointer == "start") {
        pointer_class = "left-0";
        cursor_class = "ml-2";
      } else if (pointer == "end") {
        pointer_class = "right-0";
        cursor_class = "mr-2";
      }
      elm_class = position == "top" ? "mb-2" : "mt-2";
    } else {
      if (pointer == "middle") {
        m = node.parentNode.clientHeight / 2 - node.clientHeight / 2;
        node.style.marginTop = `${m}px`;
        cursor_class = "h-full w-2";
        pointer_class = "top-0";
      } else if (pointer == "start") {
        pointer_class = "top-0";
        cursor_class = "mt-2";
      } else if (pointer == "end") {
        cursor_class = "mb-2";
        pointer_class = "bottom-0";
      }
      elm_class = position == "left" ? "mr-2" : "ml-2";
    }
    lhidden = "opacity-100";
  }
  let inv_position = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
  };
  let otext = null;
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.pointer === void 0 && $$bindings.pointer && pointer !== void 0)
    $$bindings.pointer(pointer);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.text_color === void 0 && $$bindings.text_color && text_color !== void 0)
    $$bindings.text_color(text_color);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.w === void 0 && $$bindings.w && w !== void 0)
    $$bindings.w(w);
  $$result.css.add(css$1);
  {
    if (text && otext != text && current_node) {
      otext = text;
      setTimeout(() => mposition(current_node));
    }
  }
  return `${show ? `<div class="${"absolute z-40 " + (0, import_index_c03cb5e3.e)(lhidden) + " " + (0, import_index_c03cb5e3.e)(inv_position[position]) + "-100 " + (0, import_index_c03cb5e3.e)(elm_class) + " " + (0, import_index_c03cb5e3.e)(pointer_class) + " " + (0, import_index_c03cb5e3.e)(w ? "w-" + w : "min-w-full") + " svelte-j3362d"}"><div class="${"relative shadow-md"}">${slots.default ? slots.default({}) : `
        <div class="${"bg-" + (0, import_index_c03cb5e3.e)(color) + " text-" + (0, import_index_c03cb5e3.e)(text_color) + " truncate text-xs rounded py-1 px-4 svelte-j3362d"}">${(0, import_index_c03cb5e3.e)(text)}</div>
      `}
      <svg class="${"absolute text-" + (0, import_index_c03cb5e3.e)(color) + " " + (0, import_index_c03cb5e3.e)(cursor_class) + " h-2 " + (0, import_index_c03cb5e3.e)(pointer_class) + " " + (0, import_index_c03cb5e3.e)(position) + "-100 svelte-j3362d"}" x="${"0px"}" y="${"0px"}" viewBox="${"0 0 255 255"}" xml:space="${"preserve"}"><polygon class="${"fill-current"}"${(0, import_index_c03cb5e3.b)("points", points[position], 0)}></polygon></svg></div></div>` : ``}`;
});
var itemTable_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".zoom.svelte-ld7g7w:hover{transform:scale(\r\n			1.5\r\n		)}")();
const css = {
  code: ".zoom.svelte-ld7g7w:hover{transform:scale(\r\n			1.5\r\n		)}",
  map: null
};
const maxNameLength = 55;
const ItemTable = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let currentId = "";
  let { shortNameCol: shortNameCol2 } = $$props;
  let { nameCol: nameCol2 } = $$props;
  let { inRaidCol: inRaidCol2 } = $$props;
  let { otherCol: otherCol2 } = $$props;
  let { hideoutCol: hideoutCol2 } = $$props;
  let { items } = $$props;
  if ($$props.shortNameCol === void 0 && $$bindings.shortNameCol && shortNameCol2 !== void 0)
    $$bindings.shortNameCol(shortNameCol2);
  if ($$props.nameCol === void 0 && $$bindings.nameCol && nameCol2 !== void 0)
    $$bindings.nameCol(nameCol2);
  if ($$props.inRaidCol === void 0 && $$bindings.inRaidCol && inRaidCol2 !== void 0)
    $$bindings.inRaidCol(inRaidCol2);
  if ($$props.otherCol === void 0 && $$bindings.otherCol && otherCol2 !== void 0)
    $$bindings.otherCol(otherCol2);
  if ($$props.hideoutCol === void 0 && $$bindings.hideoutCol && hideoutCol2 !== void 0)
    $$bindings.hideoutCol(hideoutCol2);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css);
  return `<div class="${"overflow-x-auto"}"><table class="${"table table-zebra table-compact w-full"}">
		<thead><tr class="${"bg-primary"}">
				<th class="${"bg-opacity-0"}"></th>
				
				<th class="${"bg-opacity-0"}" style="${"cursor: pointer"}"><div class="${"flex justify-center text-secondary"}">${(0, import_index_c03cb5e3.e)(shortNameCol2)}</div></th>
				
				<th class="${"bg-opacity-0"}" style="${"cursor: pointer"}"><div class="${"flex justify-center text-secondary"}">${(0, import_index_c03cb5e3.e)(nameCol2)}</div></th>
				
				<th class="${"bg-opacity-0"}" style="${"cursor: pointer"}"><div class="${"flex justify-center text-secondary"}">${(0, import_index_c03cb5e3.e)(inRaidCol2)}</div></th>
				
				<th class="${"bg-opacity-0"}" style="${"cursor: pointer"}"><div class="${"flex justify-center text-secondary"}">${(0, import_index_c03cb5e3.e)(otherCol2)}</div></th>
				
				<th class="${"bg-opacity-0"}" style="${"cursor: pointer"}"><div class="${"flex justify-center text-secondary"}">${(0, import_index_c03cb5e3.e)(hideoutCol2)}</div></th>
				
				<th class="${"bg-opacity-0"}"></th></tr></thead>
		<tbody>${(0, import_index_c03cb5e3.f)(items, (taskItem) => {
    return `<tr>
					<td><div class="${"avatar flex justify-center"}"><div class="${"rounded w-12"}">
								${(0, import_index_c03cb5e3.v)(Tooltip, "Tooltip").$$render($$result, {
      pointer: "end",
      position: "right",
      color: "red-500",
      show: currentId === taskItem.id
    }, {}, {
      default: () => {
        return `
									<div class="${"p-0.5 w-" + (0, import_index_c03cb5e3.e)((0, import_items_d239b701.i)(taskItem)) + " bg-primary svelte-ld7g7w"}"><img${(0, import_index_c03cb5e3.b)("src", taskItem.nameIcon, 0)}${(0, import_index_c03cb5e3.b)("alt", taskItem.name, 0)}${(0, import_index_c03cb5e3.b)("title", taskItem.name, 0)}></div>
								`;
      }
    })}
								
								<a sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/item/${taskItem.id}`, 0)} target="${"_blank"}"><img${(0, import_index_c03cb5e3.b)("src", taskItem.nameIcon, 0)}${(0, import_index_c03cb5e3.b)("alt", taskItem.name, 0)}>
								</a></div>
						</div></td>
					
					<td><div class="${"flex justify-center text-primary"}"><a sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/item/${taskItem.id}`, 0)} target="${"_blank"}"><b>${(0, import_index_c03cb5e3.e)(taskItem.shortName)}</b></a>
						</div></td>
					
					<td><div class="${"flex justify-center text-primary"}"${(0, import_index_c03cb5e3.b)("title", taskItem.name, 0)}><a sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/item/${taskItem.id}`, 0)} target="${"_blank"}"><b class="${"text-primary"}">${(0, import_index_c03cb5e3.e)(taskItem.name.length > maxNameLength ? taskItem.name.substring(0, maxNameLength) + ".." : taskItem.name)}</b></a>
						</div></td>
					
					<td><div class="${"flex justify-center text-error"}"${(0, import_index_c03cb5e3.b)("title", taskItem.craftAble ? "Can be crafted" : "", 0)}><b>${(0, import_index_c03cb5e3.e)(taskItem.inRaidCount ? taskItem.inRaidCount : 0)}${(0, import_index_c03cb5e3.e)(taskItem.craftAble ? "*" : "")}</b>
						</div></td>
					
					<td><div class="${"flex justify-center text-success"}"><b>${(0, import_index_c03cb5e3.e)(taskItem.otherCount ? taskItem.otherCount : 0)}</b>
						</div></td>
					
					<td><div class="${"flex justify-center text-success"}"><b>${(0, import_index_c03cb5e3.e)(taskItem.stationCount ? taskItem.stationCount : 0)}</b>
						</div></td>
					
					<td><div class="${"flex justify-center"}"><a class="${"btn btn-outline btn-primary btn-sm"}" role="${"button"}"${(0, import_index_c03cb5e3.b)("href", taskItem.wiki, 0)} target="${"_blank"}">Wiki</a>
						</div></td>
				</tr>`;
  })}</tbody></table>
</div>`;
});
const shortNameCol = "Short Name";
const nameCol = "Name";
const inRaidCol = "In Raid";
const otherCol = "Other Task";
const hideoutCol = "Hideout";
const header = "Items";
const Items = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_c03cb5e3.a)(import_stores_d9555cbf.p, (value) => value);
  let { items } = $$props;
  let searchText = "";
  let searchItems = [];
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Items - Tarkov Tasker</title>`, ""}<meta name="${"description"}" content="${"Items"}" data-svelte="svelte-15h937v">`, ""}

<div><h1 class="${"p-4 font-bold"}">${(0, import_index_c03cb5e3.e)(header)}</h1>

	
	${!items.length ? `<div class="${"flex justify-center pt-6"}"><h2 class="${"text-success text-3xl font-bold"}">All items collected</h2></div>` : `
		<div class="${"pb-2"}"><div class="${"flex relative"}">
				<div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg aria-hidden="${"true"}" class="${"w-5 h-5 text-primary"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path${(0, import_index_c03cb5e3.b)("opacity", 0.75, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></div>
				
				<input type="${"text"}" id="${"default-search"}" class="${"block p-3 pl-10 w-full text-md text-primary bg-base-100 rounded-l-lg input-bordered input-primary border border-secondary placeholder-primary placeholder-opacity-50"}" placeholder="${"Search Items"}" required${(0, import_index_c03cb5e3.b)("value", searchText, 0)}>
				
				<button class="${"btn btn-square rounded-none rounded-r-lg btn-primary " + (0, import_index_c03cb5e3.e)("")}" ${searchText.replace(/\s/g, "").length < 3 ? "disabled" : ""} title="${"Clear input"}">
					${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg>`}</button></div></div>

		<div class="${"divider"}"></div>

		
		${``}

		
		${!searchText.replace(/\s/g, "").length ? `
			${(0, import_index_c03cb5e3.v)(ItemTable, "ItemTable").$$render($$result, {
    shortNameCol,
    nameCol,
    inRaidCol,
    otherCol,
    hideoutCol,
    items
  }, {}, {})}` : `${searchItems.length ? `
			${(0, import_index_c03cb5e3.v)(ItemTable, "ItemTable").$$render($$result, {
    shortNameCol,
    nameCol,
    inRaidCol,
    otherCol,
    hideoutCol,
    items: searchItems
  }, {}, {})}` : `${``}`}`}`}</div>`;
});
