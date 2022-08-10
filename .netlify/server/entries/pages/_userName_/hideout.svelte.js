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
  default: () => Hideout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c03cb5e3 = require("../../../chunks/index-c03cb5e3.js");
var import_stores_d9555cbf = require("../../../chunks/stores-d9555cbf.js");
var import_saveAlert_a32e402c = require("../../../chunks/saveAlert-a32e402c.js");
var import_traderIcon_a735f441 = require("../../../chunks/traderIcon-a735f441.js");
var import_hideout_97b437b0 = require("../../../chunks/hideout-97b437b0.js");
var import_Circle2_fc1f040e = require("../../../chunks/Circle2-fc1f040e.js");
var import_trader_b7e5426c = require("../../../chunks/trader-b7e5426c.js");
const SkillIcon = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { skill } = $$props;
  let { level } = $$props;
  if ($$props.skill === void 0 && $$bindings.skill && skill !== void 0)
    $$bindings.skill(skill);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  return `
<div class="${"avatar indicator"}">
	<span class="${"indicator-item indicator-bottom badge badge-neutral"}"${(0, import_index_c03cb5e3.b)("title", `${skill.name} level ${level}`, 0)}>${(0, import_index_c03cb5e3.e)(level)}</span>
	
	<div class="${"avatar flex"}"><div class="${"rounded w-14"}"><a${(0, import_index_c03cb5e3.b)("href", skill.wiki, 0)} target="${"_blank"}"><img${(0, import_index_c03cb5e3.b)("src", skill.image, 0)}${(0, import_index_c03cb5e3.b)("alt", skill.name, 0)}${(0, import_index_c03cb5e3.b)("title", skill.name, 0)}></a></div></div></div>`;
});
const header = "Hideout Stations";
function stationHasReqs(station) {
  return station.HideoutReqItem.length || station.HideoutReqSkill.length || station.HideoutReqTrader.length;
}
const Hideout = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_c03cb5e3.a)(import_stores_d9555cbf.p, (value) => $page = value);
  let { hideouts } = $$props;
  let { playerHasStations } = $$props;
  let updateCheckBoxes = false;
  let saveLoad = false;
  let updatedPlayerStations = [];
  function onCancel() {
    updatedPlayerStations.forEach((playerStation) => {
      playerStation.completed = !playerStation.completed;
    });
    updatedPlayerStations.length = 0;
    updateCheckBoxes = !updateCheckBoxes;
  }
  async function onSave() {
    saveLoad = true;
    try {
      const res = await fetch(`${$page.url.origin}/api/update/playerHideout`, {
        method: "POST",
        body: JSON.stringify({ updatedPlayerStations })
      });
      let progressData = await res.json();
      saveLoad = !progressData.success;
      updatedPlayerStations.length = 0;
      updateCheckBoxes = !updateCheckBoxes;
    } catch (error) {
      console.log("An error occured", error);
    }
  }
  if ($$props.hideouts === void 0 && $$bindings.hideouts && hideouts !== void 0)
    $$bindings.hideouts(hideouts);
  if ($$props.playerHasStations === void 0 && $$bindings.playerHasStations && playerHasStations !== void 0)
    $$bindings.playerHasStations(playerHasStations);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Hideout - Tarkov Tasker</title>`, ""}<meta name="${"description"}" content="${"Hideout"}" data-svelte="svelte-1ay2jvv">`, ""}

<div class="${"flex flex-col justify-center"}"><h1 class="${"p-4 font-bold"}">${(0, import_index_c03cb5e3.e)(header)}</h1>
	<div class="${"grid grid-cols-2 gap-x-8 gap-y-2 justify-center"}">${(0, import_index_c03cb5e3.f)(hideouts, (hideout) => {
    return `<div class="${"overflow-x-auto pb-10"}"><div class="${"card " + (0, import_index_c03cb5e3.e)((0, import_hideout_97b437b0.i)(hideout, playerHasStations) ? "shadow-md shadow-success" : "")}">
					<div class="${"bg-primary flex flex-row items-center pt-3 p-4"}">
						<div class="${"avatar flex"}"><div class="${"rounded w-14"}"><img${(0, import_index_c03cb5e3.b)("src", (0, import_hideout_97b437b0.h)(hideout.name), 0)}${(0, import_index_c03cb5e3.b)("alt", hideout.name, 0)}${(0, import_index_c03cb5e3.b)("title", hideout.name, 0)}>
							</div></div>
						
						<h2 class="${"pl-6 card-title text-secondary font-bold text-3xl"}">${(0, import_index_c03cb5e3.e)(hideout.name)}</h2></div>
					${(0, import_index_c03cb5e3.f)(playerHasStations, (playerHasStation, index) => {
      return `${playerHasStation.hideoutStation.Hideout.id === hideout.id ? `<div class="${"card border border-base-300 even:bg-base-100 odd:bg-base-200 rounded-none"}"><div class="${"card-body flex flex-row pt-2 pb-0 pl-4 pr-2"}">
									<div class="${"pt-4"}"><input type="${"checkbox"}" class="${"checkbox checkbox-primary align-middle"}"${(0, import_index_c03cb5e3.b)("checked", playerHasStation.completed, 1)}></div>
									
									<div tabindex="${"0"}" class="${"collapse " + (0, import_index_c03cb5e3.e)(stationHasReqs(playerHasStation.hideoutStation) ? "collapse-plus" : "collapse-close") + " bg-base-" + (0, import_index_c03cb5e3.e)(index % 2 === 0 ? "100" : "200") + " w-full"}"><input type="${"checkbox"}">
										
										<div class="${"collapse-title text-xl text-primary"}">${(0, import_index_c03cb5e3.e)(`${hideout.name} ${playerHasStation.hideoutStation.level}`)}</div>
										
										${stationHasReqs(playerHasStation.hideoutStation) ? `<div class="${"collapse-content bg-base-" + (0, import_index_c03cb5e3.e)(index % 2 === 0 ? "100" : "200") + " pr-12"}">
												${playerHasStation.hideoutStation.HideoutReqItem.length ? `<div class="${"divider text-primary"}">Item requirements</div>
													<div class="${"flex flex-col gap-2"}">${(0, import_index_c03cb5e3.f)(playerHasStation.hideoutStation.HideoutReqItem, (reqItem) => {
        return `<div class="${"flex flex-row items-center gap-2"}"><div class="${"avatar flex justify-center"}"><div class="${"rounded-xl w-8 h-8"}"><a sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/item/${reqItem.item.id}`, 0)} target="${"_blank"}"><img${(0, import_index_c03cb5e3.b)("src", reqItem.item.image, 0)}${(0, import_index_c03cb5e3.b)("alt", reqItem.item.name, 0)}${(0, import_index_c03cb5e3.b)("title", reqItem.item.name, 0)}></a>
																	</div></div>
																<div class="${"flex flex-row gap-1"}"><p class="${"flex text-accent text-sm"}">${(0, import_index_c03cb5e3.e)(reqItem.count)}</p>
																	<a class="${"text-sm"}"${(0, import_index_c03cb5e3.b)("href", reqItem.item.wiki, 0)} target="${"_blank"}">${(0, import_index_c03cb5e3.e)(reqItem.item.name)}
																	</a></div>
															</div>`;
      })}
													</div>` : ``}
												
												${playerHasStation.hideoutStation.HideoutReqSkill.length ? `<div class="${"divider text-primary"}">Skill requirements</div>
													<div class="${"flex flex-row gap-8 justify-center"}">${(0, import_index_c03cb5e3.f)(playerHasStation.hideoutStation.HideoutReqSkill, (reqSkill) => {
        return `${(0, import_index_c03cb5e3.v)(SkillIcon, "SkillIcon").$$render($$result, {
          skill: reqSkill.skill,
          level: reqSkill.level
        }, {}, {})}`;
      })}
													</div>` : ``}
												
												${playerHasStation.hideoutStation.HideoutReqTrader.length ? `<div class="${"divider text-primary"}">Trader requirements</div>
													<div class="${"flex flex-row gap-8 justify-center"}">${(0, import_index_c03cb5e3.f)(playerHasStation.hideoutStation.HideoutReqTrader, (trader) => {
        return `${(0, import_index_c03cb5e3.v)(import_traderIcon_a735f441.T, "TraderIcon").$$render($$result, {
          trader: trader.trader,
          level: trader.level,
          size: 20
        }, {}, {})}`;
      })}
													</div>` : ``}
											</div>` : ``}
									</div></div>
							</div>` : ``}`;
    })}</div>
			</div>`;
  })}</div></div>


${updatedPlayerStations.length ? `${(0, import_index_c03cb5e3.v)(import_saveAlert_a32e402c.S, "SaveAlert").$$render($$result, {
    saveLoad,
    elementsToSave: updatedPlayerStations.length,
    onCancel: () => onCancel(),
    onSave: () => onSave()
  }, {}, {})}` : ``}`;
});
