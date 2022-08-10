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
  default: () => Keys
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c03cb5e3 = require("../../../chunks/index-c03cb5e3.js");
var import_stores_d9555cbf = require("../../../chunks/stores-d9555cbf.js");
const KeyTable = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { shortNameCol: shortNameCol2 } = $$props;
  let { nameCol: nameCol2 } = $$props;
  let { taskCol: taskCol2 } = $$props;
  let { handinCol: handinCol2 } = $$props;
  let { keys } = $$props;
  if ($$props.shortNameCol === void 0 && $$bindings.shortNameCol && shortNameCol2 !== void 0)
    $$bindings.shortNameCol(shortNameCol2);
  if ($$props.nameCol === void 0 && $$bindings.nameCol && nameCol2 !== void 0)
    $$bindings.nameCol(nameCol2);
  if ($$props.taskCol === void 0 && $$bindings.taskCol && taskCol2 !== void 0)
    $$bindings.taskCol(taskCol2);
  if ($$props.handinCol === void 0 && $$bindings.handinCol && handinCol2 !== void 0)
    $$bindings.handinCol(handinCol2);
  if ($$props.keys === void 0 && $$bindings.keys && keys !== void 0)
    $$bindings.keys(keys);
  return `<div class="${"overflow-x-auto"}"><table class="${"table table-zebra table-compact w-full"}">
		<thead><tr class="${"bg-primary"}">
				<th class="${"bg-opacity-0"}"></th>
				
				<th class="${"bg-opacity-0"}" style="${"cursor: pointer"}"><div class="${"flex justify-center text-secondary"}">${(0, import_index_c03cb5e3.e)(shortNameCol2)}</div></th>
				
				<th class="${"bg-opacity-0"}" style="${"cursor: pointer"}"><div class="${"flex justify-center text-secondary"}">${(0, import_index_c03cb5e3.e)(nameCol2)}</div></th>
				
				<th class="${"bg-opacity-0"}" style="${"cursor: pointer"}"><div class="${"flex justify-center text-secondary"}">${(0, import_index_c03cb5e3.e)(taskCol2)}</div></th>
				
				<th class="${"bg-opacity-0"}" style="${"cursor: pointer"}"><div class="${"flex justify-center text-secondary"}">${(0, import_index_c03cb5e3.e)(handinCol2)}</div></th>
				
				<th class="${"bg-opacity-0"}"></th></tr></thead>
		<tbody>${(0, import_index_c03cb5e3.f)(keys, (key) => {
    return `<tr>
					<td><div class="${"avatar flex justify-center"}"><div class="${"rounded w-12"}"><a sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/item/${key.item.id}`, 0)} target="${"_blank"}"><img${(0, import_index_c03cb5e3.b)("src", key.item.image, 0)}${(0, import_index_c03cb5e3.b)("alt", key.item.name, 0)}${(0, import_index_c03cb5e3.b)("title", key.item.name, 0)}>
								</a></div>
						</div></td>
					
					<td><div class="${"flex justify-center text-primary"}"><a sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/item/${key.item.id}`, 0)} target="${"_blank"}" class="${"font-bold"}">${(0, import_index_c03cb5e3.e)(key.item.shortName)}</a>
						</div></td>
					
					<td><div class="${"flex justify-center text-primary"}"><a sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/item/${key.item.id}`, 0)} target="${"_blank"}" class="${"text-primary font-bold"}">${(0, import_index_c03cb5e3.e)(key.item.name)}</a>
						</div></td>
					
					<td><div class="${"flex justify-center " + (0, import_index_c03cb5e3.e)(key.item.TaskReqKey.length ? "text-success" : "text-error")}"><b>${(0, import_index_c03cb5e3.e)(key.item.TaskReqKey.length ? "YES" : "NO")}</b>
						</div></td>
					
					<td><div class="${"flex justify-center " + (0, import_index_c03cb5e3.e)(key.item.TaskReqItem.length ? "text-success" : "text-error")}"><b>${(0, import_index_c03cb5e3.e)(key.item.TaskReqItem.length ? "YES" : "NO")}</b>
						</div></td>
					
					<td><div class="${"flex justify-center"}"><a class="${"btn btn-outline btn-primary btn-sm"}" role="${"button"}"${(0, import_index_c03cb5e3.b)("href", key.item.wiki, 0)} target="${"_blank"}">Wiki</a>
						</div></td>
				</tr>`;
  })}</tbody></table></div>`;
});
const SearchbarItems = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { searchText } = $$props;
  let { searchForItems = () => {
  } } = $$props;
  if ($$props.searchText === void 0 && $$bindings.searchText && searchText !== void 0)
    $$bindings.searchText(searchText);
  if ($$props.searchForItems === void 0 && $$bindings.searchForItems && searchForItems !== void 0)
    $$bindings.searchForItems(searchForItems);
  return `<div class="${"pb-2"}"><div class="${"flex relative"}">
		<div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg aria-hidden="${"true"}" class="${"w-5 h-5 text-primary"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path${(0, import_index_c03cb5e3.b)("opacity", 0.75, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></div>
		
		<input type="${"text"}" id="${"default-search"}" class="${"block p-3 pl-10 w-full text-md text-primary bg-base-100 rounded-l-lg input-bordered input-primary border border-secondary placeholder-primary placeholder-opacity-50"}" placeholder="${"Search Items"}" required${(0, import_index_c03cb5e3.b)("value", searchText, 0)}>
		<button class="${"btn btn-square rounded-none rounded-r-lg btn-primary"}" ${searchText.replace(/\s/g, "").length === 0 ? "disabled" : ""} title="${"Clear input"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button></div></div>`;
});
const header = "Keys";
const shortNameCol = "Short Name";
const nameCol = "Name";
const taskCol = "Needed for task";
const handinCol = "Handin for task";
const Keys = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_c03cb5e3.a)(import_stores_d9555cbf.p, (value) => value);
  let { keys } = $$props;
  let searchText = "";
  let searchKeys = [];
  function searchForItems() {
    searchKeys.length = 0;
    keys.find((key) => {
      if (key.item.name.toLowerCase().includes(searchText.toLowerCase()) || key.item.shortName.toLowerCase().includes(searchText.toLowerCase())) {
        searchKeys.push(key);
      }
    });
  }
  if ($$props.keys === void 0 && $$bindings.keys && keys !== void 0)
    $$bindings.keys(keys);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>Keys - Tarkov Tasker</title>`, ""}<meta name="${"description"}" content="${"Keys"}" data-svelte="svelte-w7pfap">`, ""}

<div><h1 class="${"p-4 font-bold"}">${(0, import_index_c03cb5e3.e)(header)}</h1>

	${(0, import_index_c03cb5e3.v)(SearchbarItems, "SearchbarItems").$$render($$result, { searchForItems, searchText }, {
      searchText: ($$value) => {
        searchText = $$value;
        $$settled = false;
      }
    }, {})}

	<div class="${"divider"}"></div>

	${!searchText.replace(/\s/g, "").length ? `${(0, import_index_c03cb5e3.v)(KeyTable, "KeyTable").$$render($$result, {
      shortNameCol,
      nameCol,
      taskCol,
      handinCol,
      keys
    }, {}, {})}` : `${searchKeys.length ? `${(0, import_index_c03cb5e3.v)(KeyTable, "KeyTable").$$render($$result, {
      shortNameCol,
      nameCol,
      taskCol,
      handinCol,
      keys: searchKeys
    }, {}, {})}` : `<div class="${"flex flex-col justify-center items-center"}"><i class="${"pl-4 pb-2 text-primary text-xl"}">Could not find that key</i></div>`}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
