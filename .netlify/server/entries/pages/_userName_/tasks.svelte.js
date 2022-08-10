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
  default: () => Tasks
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c03cb5e3 = require("../../../chunks/index-c03cb5e3.js");
var import_stores_d9555cbf = require("../../../chunks/stores-d9555cbf.js");
var import_saveAlert_a32e402c = require("../../../chunks/saveAlert-a32e402c.js");
var import_traderIcon_a735f441 = require("../../../chunks/traderIcon-a735f441.js");
var import_trader_b7e5426c = require("../../../chunks/trader-b7e5426c.js");
var import_Circle2_fc1f040e = require("../../../chunks/Circle2-fc1f040e.js");
const header = "Tasks";
function createMapString(taskOnMaps) {
  if (taskOnMaps.length) {
    let mapsName = "(";
    taskOnMaps.forEach((taskOnMap, index) => {
      if (index === 0) {
        mapsName = mapsName.concat(taskOnMap.map.name);
      } else {
        mapsName = mapsName.concat(", " + taskOnMap.map.name);
      }
    });
    mapsName = mapsName.concat(")");
    return mapsName;
  } else {
    return "";
  }
}
const Tasks = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_c03cb5e3.a)(import_stores_d9555cbf.p, (value) => $page = value);
  let { traders } = $$props;
  let { playerHasTasks } = $$props;
  let { player } = $$props;
  let updatedPlayerTasks = [];
  let updateCheckBoxes = false;
  let saveLoad = false;
  function getTraderTasks(trader) {
    let traderTasks = [];
    playerHasTasks.forEach((playerTask) => {
      if (playerTask.task.trader.id === trader.id) {
        traderTasks.push(playerTask);
      }
    });
    return traderTasks;
  }
  function onCancel() {
    updatedPlayerTasks.forEach((playerTask) => {
      playerTask.completed = !playerTask.completed;
    });
    updatedPlayerTasks.length = 0;
    updateCheckBoxes = !updateCheckBoxes;
  }
  async function onSave() {
    saveLoad = true;
    try {
      const res = await fetch(`${$page.url.origin}/api/update/playerTasks`, {
        method: "POST",
        body: JSON.stringify({ updatedPlayerTasks })
      });
      let progressData = await res.json();
      saveLoad = !progressData.success;
      updatedPlayerTasks.length = 0;
      updateCheckBoxes = !updateCheckBoxes;
    } catch (error) {
      console.log("An error occured", error);
    }
  }
  if ($$props.traders === void 0 && $$bindings.traders && traders !== void 0)
    $$bindings.traders(traders);
  if ($$props.playerHasTasks === void 0 && $$bindings.playerHasTasks && playerHasTasks !== void 0)
    $$bindings.playerHasTasks(playerHasTasks);
  if ($$props.player === void 0 && $$bindings.player && player !== void 0)
    $$bindings.player(player);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Tasks - Tarkov Tasker</title>`, ""}<meta name="${"description"}" content="${"Tasks"}" data-svelte="svelte-zczci3">`, ""}


<h1 class="${"pt-2 pb-4 font-bold"}"${(0, import_index_c03cb5e3.b)("id", traders[0].name, 0)}>${(0, import_index_c03cb5e3.e)(header)}</h1>

<div class="${"flex flex-row gap-10 justify-center"}"><div class="${"w-40 flex flex-col"}">
		<div class="${"toast toast-start toast-middle sticky top-20 z-10 "}"><div class="${"alert alert-primary border border-primary sticky top-0 z-10 p-2 justify-center"}"><div class="${"grid grid-cols-1 gap-8 place-items-center p-2"}">${(0, import_index_c03cb5e3.f)(traders, (trader) => {
    return `<div class="${"gap-4 flex flex-col items-center border border-primary"}">${(0, import_index_c03cb5e3.v)(import_traderIcon_a735f441.T, "TraderIcon").$$render($$result, {
      trader,
      level: (0, import_trader_b7e5426c.a)(trader),
      size: 16,
      href: `#${trader.name}`
    }, {}, {})}
						</div>`;
  })}</div></div></div></div>

	
	<div class="${"flex flex-col justify-center"}"><div>${(0, import_index_c03cb5e3.f)(traders, (trader, index) => {
    return `<div${(0, import_index_c03cb5e3.b)("class", index === 0 ? "p-0" : "p-8", 0)}${(0, import_index_c03cb5e3.b)("id", index === 0 ? "" : trader.name, 0)}></div>
				<div class="${"overflow-x-auto"}"><div class="${"card shadow-xl"}">
						<div class="${"bg-primary flex flex-row items-center pt-3 p-4"}">
							${(0, import_index_c03cb5e3.v)(import_traderIcon_a735f441.T, "TraderIcon").$$render($$result, { trader, level: (0, import_trader_b7e5426c.a)(trader) }, {}, {})}
							
							<h2 class="${"pl-6 card-title text-secondary font-bold text-3xl"}">${(0, import_index_c03cb5e3.e)(trader.name)}</h2></div>

						${(0, import_index_c03cb5e3.f)(getTraderTasks(trader), (traderTask, index2) => {
      return `<div class="${"card border border-base-300 even:bg-base-100 odd:bg-base-200 rounded-none"}"><div class="${"card-body flex flex-row pt-2 pb-0 pl-4 pr-2"}">
									<div class="${"pt-4"}"><input type="${"checkbox"}" class="${"checkbox checkbox-primary align-middle"}"${(0, import_index_c03cb5e3.b)("checked", traderTask.completed, 1)}></div>
									
									<div tabindex="${"0"}" class="${"collapse collapse-plus bg-base-" + (0, import_index_c03cb5e3.e)(index2 % 2 === 0 ? "100" : "200") + " w-full pr-12"}"><input type="${"checkbox"}">
										
										<div class="${"collapse-title text-xl text-primary"}">${(0, import_index_c03cb5e3.e)(traderTask.task.name + " ")}
											<i>${(0, import_index_c03cb5e3.e)(createMapString(traderTask.task.TaskOnMap))}</i></div>
										
										<div class="${"collapse-content bg-base-" + (0, import_index_c03cb5e3.e)(index2 % 2 === 0 ? "100" : "200")}">
											<div class="${"divider text-primary"}">Info</div>
											
											<div class="${"flex flex-row gap-4"}"><div class="${"flex flex-row gap-1"}"><p class="${"flex text-accent"}">Kappa:</p>
													<p class="${"flex text-" + (0, import_index_c03cb5e3.e)(traderTask.task.forKappa ? "success" : "error")}">${(0, import_index_c03cb5e3.e)(traderTask.task.forKappa ? "Yes" : "No")}
													</p></div>
												
												<div class="${"flex flex-row gap-1"}"><p class="${"flex text-accent"}">Level:</p>
													<p class="${"flex text-" + (0, import_index_c03cb5e3.e)(traderTask.task.minPlayerLevel <= player.level ? "success" : "error")}">${(0, import_index_c03cb5e3.e)(traderTask.task.minPlayerLevel)}
													</p></div>
												
												<div class="${"flex flex-row gap-1"}"><p class="${"flex text-accent"}">EXP:</p>
													<p class="${"flex text-success"}">${(0, import_index_c03cb5e3.e)(traderTask.task.experience)}
													</p></div>
												
												<div class="${"flex flex-row gap-1"}"><a${(0, import_index_c03cb5e3.b)("href", traderTask.task.wiki, 0)} target="${"_blank"}">Wiki</a>
												</div></div>
											
											<div class="${"divider text-primary"}">Objectives</div>
											<div class="${"text-justify"}">${(0, import_index_c03cb5e3.f)(traderTask.task.TaskHasObjective, (objective) => {
        return `<ul class="${"list-disc list-inside"}">${objective.optional ? `<li class="${"text-accent"}">(optional) <i class="${"text-accent"}">${(0, import_index_c03cb5e3.e)(objective.description)}</i>
															</li>` : `<li class="${"text-accent"}">${(0, import_index_c03cb5e3.e)(objective.description)}</li>`}
													</ul>`;
      })}</div>
											
											${traderTask.task.TaskReqKey.length ? `<div class="${"divider text-primary"}">Required keys</div>
												<ul class="${"list-disc list-inside"}">${(0, import_index_c03cb5e3.f)(traderTask.task.TaskReqKey, (reqKey) => {
        return `<li class="${"text-accent"}">1x
															<a sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/item/${reqKey.key.id}`, 0)} target="${"_blank"}">${(0, import_index_c03cb5e3.e)(reqKey.key.name)}</a>
														</li>`;
      })}
												</ul>` : ``}
											
											${traderTask.task.TaskReqItem.length ? `<div class="${"divider text-primary"}">Required items</div>
												${(0, import_index_c03cb5e3.f)(traderTask.task.TaskReqItem, (reqItem) => {
        return `
													<ul class="${"list-disc pl-4"}"><li class="${"text-accent"}"><div class="${"flex flex-row gap-1"}">${(0, import_index_c03cb5e3.e)((reqItem.foundInRaid ? "Find " : "Obtain ") + reqItem.count + " ")}<a sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/item/${reqItem.item.id}`, 0)} target="${"_blank"}">${(0, import_index_c03cb5e3.e)(reqItem.item.name)}</a>
																${reqItem.foundInRaid ? `<p class="${"flex text-error"}">${(0, import_index_c03cb5e3.e)("in raid")}
																	</p>` : ``}
															</div></li>
													</ul>`;
      })}` : ``}
											
											${traderTask.task.TaskRewardsItem.length ? `<div class="${"divider text-primary"}">Rewards</div>
												<ul class="${"list-disc list-inside"}">${(0, import_index_c03cb5e3.f)(traderTask.task.TaskRewardsItem, (rewItem) => {
        return `<li class="${"text-accent"}">${(0, import_index_c03cb5e3.e)(rewItem.count + "x ")}<a sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/item/${rewItem.item.id}`, 0)} target="${"_blank"}">${(0, import_index_c03cb5e3.e)(rewItem.item.name)}</a>
														</li>`;
      })}
												</ul>` : ``}</div>
									</div></div>
							</div>`;
    })}</div>
				</div>`;
  })}</div></div></div>


${updatedPlayerTasks.length ? `${(0, import_index_c03cb5e3.v)(import_saveAlert_a32e402c.S, "SaveAlert").$$render($$result, {
    saveLoad,
    elementsToSave: updatedPlayerTasks.length,
    onCancel: () => onCancel(),
    onSave: () => onSave()
  }, {}, {})}` : ``}`;
});
