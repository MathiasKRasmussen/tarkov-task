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
  default: () => Routes,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c03cb5e3 = require("../../chunks/index-c03cb5e3.js");
var import_stores_d9555cbf = require("../../chunks/stores-d9555cbf.js");
var import_Circle2_fc1f040e = require("../../chunks/Circle2-fc1f040e.js");
var import_itemPrice_fcb1cdc5 = require("../../chunks/itemPrice-fcb1cdc5.js");
var import_items_d239b701 = require("../../chunks/items-d239b701.js");
var import_backToTop_svelte_svelte_type_style_lang_839947c1 = require("../../chunks/backToTop.svelte_svelte_type_style_lang-839947c1.js");
var import_traderIcon_a735f441 = require("../../chunks/traderIcon-a735f441.js");
var import_trader_b7e5426c = require("../../chunks/trader-b7e5426c.js");
const version1 = "Standard Edition";
const version2 = "Left Behind Edition";
const version3 = "Prepare for Escape Edition";
const version4 = "Edge of Darkness Limited Edition";
function levelIcon(level) {
  if (level < 5) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/8c/Rank5.png";
  } else if (level < 10) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/33/Rank10.png";
  } else if (level < 15) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6e/Rank15.png";
  } else if (level < 20) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/93/Rank20.png";
  } else if (level < 25) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/9f/Rank25.png";
  } else if (level < 30) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e3/Rank30.png";
  } else if (level < 35) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/1c/Rank35.png";
  } else if (level < 40) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/75/Rank40.png";
  } else if (level < 45) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/7f/Rank45.png";
  } else if (level < 50) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/14/Rank50.png";
  } else if (level < 55) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6e/Rank55.png";
  } else if (level < 60) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b8/Rank60.png";
  } else if (level < 65) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/43/Rank65.png";
  } else if (level < 70) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f5/Rank70.png";
  } else if (level < 75) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b0/Rank75.png";
  } else if (level < 80) {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/de/Rank80.png";
  } else {
    return "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/8c/Rank5.png";
  }
}
function factionFullName(faction) {
  if (faction === "USEC") {
    return "United Security";
  } else {
    return "Battle Encounter Assault Regiment";
  }
}
function versionName(value) {
  switch (value) {
    case 1:
      return version1;
    case 2:
      return version2;
    case 3:
      return version3;
    case 4:
      return version4;
    default:
      return version1;
  }
}
function versionList() {
  return [{ value: 1, name: version1 }, { value: 2, name: version2 }, { value: 3, name: version3 }, { value: 4, name: version4 }];
}
function createTempPlayerTrader(traders) {
  let playerTraders = [];
  traders.forEach((trader) => {
    if (trader.PlayerHasTrader.length) {
      playerTraders.push({ trader, level: trader.PlayerHasTrader[0].level });
    }
  });
  return playerTraders;
}
var headerStats_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".main-text.svelte-12k9krn{color:#9e9d9d}")();
const css$2 = {
  code: ".main-text.svelte-12k9krn{color:#9e9d9d}",
  map: null
};
const HeaderStats = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { player } = $$props;
  if ($$props.player === void 0 && $$bindings.player && player !== void 0)
    $$bindings.player(player);
  $$result.css.add(css$2);
  return `<div class="${"stats shadow flex"}">
	<div class="${"stat w-1/6"}"><div class="${"avatar flex flex-row stat-figure"}"><div class="${"rounded w-16 cursor-help "}"><img${(0, import_index_c03cb5e3.b)("src", levelIcon(player.level), 0)}${(0, import_index_c03cb5e3.b)("alt", `Level ${player.level}`, 0)}${(0, import_index_c03cb5e3.b)("title", `Level ${player.level}`, 0)}></div></div>
		<div class="${"stat-title text-accent"}">Level</div>
		<div class="${"stat-value main-text pb-4 svelte-12k9krn"}">${(0, import_index_c03cb5e3.e)(player.level)}</div></div>

	
	<div class="${"stat w-2/3"}"><div class="${"stat-title text-accent"}">Name</div>
		<div class="${"stat-value main-text svelte-12k9krn"}">${(0, import_index_c03cb5e3.e)(player.name)}</div>
		<div class="${"stat-desc text-accent"}">${(0, import_index_c03cb5e3.e)(versionName(player.version))}</div></div>

	
	<div class="${"stat w-1/3"}"><div class="${"stat-title text-accent"}">Faction</div>
		<div class="${"stat-figure avatar flex flex-row"}"><div class="${"rounded w-20 cursor-help "}"><img${(0, import_index_c03cb5e3.b)("src", `/static/svg/${player.faction}.svg`, 0)}${(0, import_index_c03cb5e3.b)("alt", `${player.name} is ${player.faction}`, 0)}${(0, import_index_c03cb5e3.b)("title", `${player.name} is ${player.faction}`, 0)}></div></div>
		<div class="${"stat-value main-text svelte-12k9krn"}">${(0, import_index_c03cb5e3.e)(player.faction)}</div>
		<div class="${"stat-desc text-accent"}">${(0, import_index_c03cb5e3.e)(factionFullName(player.faction))}</div></div>
</div>`;
});
const ProgressStat = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { completed } = $$props;
  let { total } = $$props;
  let { header } = $$props;
  let { thickness } = $$props;
  let { size } = $$props;
  const percentage = Math.round(completed / total * 100);
  if ($$props.completed === void 0 && $$bindings.completed && completed !== void 0)
    $$bindings.completed(completed);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.thickness === void 0 && $$bindings.thickness && thickness !== void 0)
    $$bindings.thickness(thickness);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<div class="${"stat place-items-center"}"><div class="${"stat-title text-accent text-xl"}">${(0, import_index_c03cb5e3.e)(header)}</div>
	<div class="${"pt-6 pb-4"}"><div class="${"radial-progress cursor-help font-bold text-xl border-2 border-secondary " + (0, import_index_c03cb5e3.e)(percentage < 10 ? "text-error" : percentage > 90 ? "text-success" : "text-info")}" style="${"--value:" + (0, import_index_c03cb5e3.e)(percentage) + "; --thickness: " + (0, import_index_c03cb5e3.e)(thickness) + "px; --size:" + (0, import_index_c03cb5e3.e)(size) + "rem;"}" title="${(0, import_index_c03cb5e3.e)(completed) + "/" + (0, import_index_c03cb5e3.e)(total) + " items collected"}">${(0, import_index_c03cb5e3.e)(`${percentage}%`)}</div></div>
	<div class="${"stat-value text-primary text-3xl"}">
		${(0, import_index_c03cb5e3.e)(`${Math.abs(Number(completed)) >= 1e6 ? (Math.abs(Number(completed)) / 1e6).toFixed(2) + "M" : completed}/${Math.abs(Number(total)) >= 1e6 ? (Math.abs(Number(total)) / 1e6).toFixed(2) + "M" : total}`)}</div></div>`;
});
const OverallStats = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { traders } = $$props;
  let { stations } = $$props;
  let completedRUB = 0;
  let totalRUB = 0;
  let completedUSD = 0;
  let totalUSD = 0;
  let completedEUR = 0;
  let totalEUR = 0;
  function addMoney(item, count, completed) {
    if ((0, import_items_d239b701.b)(item)) {
      totalRUB += count;
      if (completed)
        completedRUB += count;
    } else if ((0, import_items_d239b701.c)(item)) {
      totalUSD += count;
      if (completed)
        completedUSD += count;
    } else if ((0, import_items_d239b701.d)(item)) {
      totalEUR += count;
      if (completed)
        completedEUR += count;
    }
  }
  let completedTasks = 0;
  let totalTasks = 0;
  let completedTaskItems = 0;
  let totalTaskItems = 0;
  traders.forEach((trader) => {
    trader.Task.forEach((task) => {
      var _a;
      if ((_a = task.PlayerHasTasks[0]) == null ? void 0 : _a.completed) {
        completedTasks += 1;
        task.TaskReqItem.forEach((taskReqItem) => {
          if (!(0, import_items_d239b701.a)(taskReqItem.item))
            completedTaskItems += taskReqItem.count;
        });
      }
      totalTasks += 1;
      task.TaskReqItem.forEach((taskReqItem) => {
        var _a2;
        if (!(0, import_items_d239b701.a)(taskReqItem.item))
          totalTaskItems += taskReqItem.count;
        else
          addMoney(taskReqItem.item, taskReqItem.count, (_a2 = task.PlayerHasTasks[0]) == null ? void 0 : _a2.completed);
      });
    });
  });
  let completedStations = 0;
  const totalStations = stations.length;
  let completedStationItems = 0;
  let totalStationItems = 0;
  stations.forEach((station) => {
    var _a;
    if ((_a = station.PlayerHasHideout[0]) == null ? void 0 : _a.completed) {
      completedStations += 1;
      station.HideoutReqItem.forEach((hideoutReqItem) => {
        if (!(0, import_items_d239b701.a)(hideoutReqItem.item))
          completedStationItems += hideoutReqItem.count;
      });
    }
    station.HideoutReqItem.forEach((hideoutReqItem) => {
      var _a2;
      if (!(0, import_items_d239b701.a)(hideoutReqItem.item))
        totalStationItems += hideoutReqItem.count;
      else
        addMoney(hideoutReqItem.item, hideoutReqItem.count, (_a2 = station.PlayerHasHideout[0]) == null ? void 0 : _a2.completed);
    });
  });
  if ($$props.traders === void 0 && $$bindings.traders && traders !== void 0)
    $$bindings.traders(traders);
  if ($$props.stations === void 0 && $$bindings.stations && stations !== void 0)
    $$bindings.stations(stations);
  return `<div class="${"flex flex-col w-full gap-2"}"><div class="${"stats shadow"}">
		${(0, import_index_c03cb5e3.v)(ProgressStat, "ProgressStat").$$render($$result, {
    completed: completedTasks,
    total: totalTasks,
    header: "Tasks",
    thickness: 10,
    size: 6
  }, {}, {})}

		
		${(0, import_index_c03cb5e3.v)(ProgressStat, "ProgressStat").$$render($$result, {
    completed: completedTaskItems,
    total: totalTaskItems,
    header: "Task Items",
    thickness: 10,
    size: 6
  }, {}, {})}

		
		${(0, import_index_c03cb5e3.v)(ProgressStat, "ProgressStat").$$render($$result, {
    completed: completedStations,
    total: totalStations,
    header: "Hideout",
    thickness: 10,
    size: 6
  }, {}, {})}

		
		${(0, import_index_c03cb5e3.v)(ProgressStat, "ProgressStat").$$render($$result, {
    completed: completedStationItems,
    total: totalStationItems,
    header: "Hideout Items",
    thickness: 10,
    size: 6
  }, {}, {})}</div>

	
	<div class="${"stats shadow"}">
		${(0, import_index_c03cb5e3.v)(ProgressStat, "ProgressStat").$$render($$result, {
    completed: completedRUB,
    total: totalRUB,
    header: `RUB (${(0, import_itemPrice_fcb1cdc5.c)("RUB")})`,
    thickness: 10,
    size: 6
  }, {}, {})}
		
		${(0, import_index_c03cb5e3.v)(ProgressStat, "ProgressStat").$$render($$result, {
    completed: completedUSD,
    total: totalUSD,
    header: `USD (${(0, import_itemPrice_fcb1cdc5.c)("USD")})`,
    thickness: 10,
    size: 6
  }, {}, {})}
		
		${(0, import_index_c03cb5e3.v)(ProgressStat, "ProgressStat").$$render($$result, {
    completed: completedEUR,
    total: totalEUR,
    header: `EUR (${(0, import_itemPrice_fcb1cdc5.c)("EUR")})`,
    thickness: 10,
    size: 6
  }, {}, {})}</div></div>`;
});
const TraderStats = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { trader } = $$props;
  let completedTask = 0;
  let completedItems = 0;
  let totalItems = 0;
  const totalTask = trader.Task.length;
  trader.Task.forEach((task) => {
    var _a;
    if ((_a = task.PlayerHasTasks[0]) == null ? void 0 : _a.completed) {
      completedTask += 1;
      task.TaskReqItem.forEach((taskReqItem) => {
        if (!(0, import_items_d239b701.a)(taskReqItem.item))
          completedItems += taskReqItem.count;
      });
    }
    task.TaskReqItem.forEach((taskReqItem) => {
      if (!(0, import_items_d239b701.a)(taskReqItem.item))
        totalItems += taskReqItem.count;
    });
  });
  if ($$props.trader === void 0 && $$bindings.trader && trader !== void 0)
    $$bindings.trader(trader);
  return `<div class="${"flex flex-col items-center"}"><div class="${"stats stats-vertical shadow"}">
		<div class="${"stat place-items-center"}"><h4 class="${"text-primary font-bold text-2xl pb-4"}">${(0, import_index_c03cb5e3.e)(trader.name)}</h4>
			${(0, import_index_c03cb5e3.v)(import_traderIcon_a735f441.T, "TraderIcon").$$render($$result, {
    trader,
    size: 36,
    level: trader.PlayerHasTrader.length ? trader.PlayerHasTrader[0].level : 1
  }, {}, {})}</div>

		
		${(0, import_index_c03cb5e3.v)(ProgressStat, "ProgressStat").$$render($$result, {
    completed: completedTask,
    total: totalTask,
    header: "Tasks",
    thickness: 10,
    size: 7
  }, {}, {})}

		
		${(0, import_index_c03cb5e3.v)(ProgressStat, "ProgressStat").$$render($$result, {
    completed: completedItems,
    total: totalItems,
    header: "Items",
    thickness: 10,
    size: 7
  }, {}, {})}</div></div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = (0, import_backToTop_svelte_svelte_type_style_lang_839947c1.w)(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = (0, import_index_c03cb5e3.h)();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = (0, import_index_c03cb5e3.h)();
      cancel_task = false;
      task = (0, import_index_c03cb5e3.l)((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
var Counter_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".counter.svelte-1k5vm1c.svelte-1k5vm1c{display:flex;margin:0.5rem 0}.counter.svelte-1k5vm1c button.svelte-1k5vm1c{width:1.5em;padding:0;display:flex;align-items:center;justify-content:center;border:0;background-color:transparent;touch-action:manipulation;font-size:2rem}.counter.svelte-1k5vm1c button.svelte-1k5vm1c:hover{background-color:var(--secondary-color)}svg.svelte-1k5vm1c.svelte-1k5vm1c{width:25%;height:25%}path.svelte-1k5vm1c.svelte-1k5vm1c{vector-effect:non-scaling-stroke;stroke-width:2px;stroke:var(--text-color)}.counter-viewport.svelte-1k5vm1c.svelte-1k5vm1c{width:3em;height:2em;overflow:hidden;text-align:center;position:relative}.counter-viewport.svelte-1k5vm1c strong.svelte-1k5vm1c{position:absolute;display:flex;width:100%;height:100%;font-weight:400;font-size:2rem;align-items:center;justify-content:center}.counter-digits.svelte-1k5vm1c.svelte-1k5vm1c{position:absolute;width:100%;height:100%}.hidden.svelte-1k5vm1c.svelte-1k5vm1c{top:-100%;-webkit-user-select:none;-moz-user-select:none;user-select:none}")();
const css$1 = {
  code: ".counter.svelte-1k5vm1c.svelte-1k5vm1c{display:flex;margin:0.5rem 0}.counter.svelte-1k5vm1c button.svelte-1k5vm1c{width:1.5em;padding:0;display:flex;align-items:center;justify-content:center;border:0;background-color:transparent;touch-action:manipulation;font-size:2rem}.counter.svelte-1k5vm1c button.svelte-1k5vm1c:hover{background-color:var(--secondary-color)}svg.svelte-1k5vm1c.svelte-1k5vm1c{width:25%;height:25%}path.svelte-1k5vm1c.svelte-1k5vm1c{vector-effect:non-scaling-stroke;stroke-width:2px;stroke:var(--text-color)}.counter-viewport.svelte-1k5vm1c.svelte-1k5vm1c{width:3em;height:2em;overflow:hidden;text-align:center;position:relative}.counter-viewport.svelte-1k5vm1c strong.svelte-1k5vm1c{position:absolute;display:flex;width:100%;height:100%;font-weight:400;font-size:2rem;align-items:center;justify-content:center}.counter-digits.svelte-1k5vm1c.svelte-1k5vm1c{position:absolute;width:100%;height:100%}.hidden.svelte-1k5vm1c.svelte-1k5vm1c{top:-100%;user-select:none}",
  map: null
};
function modulo(n, m) {
  return (n % m + m) % m;
}
const Counter = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let offset;
  let $displayed_count, $$unsubscribe_displayed_count;
  let { count } = $$props;
  const displayed_count = spring();
  $$unsubscribe_displayed_count = (0, import_index_c03cb5e3.a)(displayed_count, (value) => $displayed_count = value);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  $$result.css.add(css$1);
  {
    displayed_count.set(count);
  }
  offset = modulo($displayed_count, 1);
  $$unsubscribe_displayed_count();
  return `<div class="${"counter svelte-1k5vm1c"}"><button aria-label="${"Decrease the counter by one"}" class="${"svelte-1k5vm1c"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-1k5vm1c"}"><path d="${"M0,0.5 L1,0.5"}" class="${"svelte-1k5vm1c"}"></path></svg></button>

	<div class="${"counter-viewport svelte-1k5vm1c"}"><div class="${"counter-digits svelte-1k5vm1c"}" style="${"transform: translate(0, " + (0, import_index_c03cb5e3.e)(100 * offset) + "%)"}"><strong class="${"hidden svelte-1k5vm1c"}" aria-hidden="${"true"}">${(0, import_index_c03cb5e3.e)(Math.floor($displayed_count + 1))}</strong>
			<strong class="${"svelte-1k5vm1c"}">${(0, import_index_c03cb5e3.e)(Math.floor($displayed_count))}</strong></div></div>

	<button aria-label="${"Increase the counter by one"}" class="${"svelte-1k5vm1c"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-1k5vm1c"}"><path d="${"M0,0.5 L1,0.5 M0.5,0 L0.5,1"}" class="${"svelte-1k5vm1c"}"></path></svg></button>
</div>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".level.svelte-fsi020{color:#8c8b8a}")();
const css = {
  code: ".level.svelte-fsi020{color:#8c8b8a}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $userName, $$unsubscribe_userName;
  $$unsubscribe_page = (0, import_index_c03cb5e3.a)(import_stores_d9555cbf.p, (value) => $page = value);
  $$unsubscribe_userName = (0, import_index_c03cb5e3.a)(import_backToTop_svelte_svelte_type_style_lang_839947c1.u, (value) => $userName = value);
  let header = "Tarkov Tasker";
  let loadingUser = true;
  let player;
  let traders;
  let stations;
  const romanLevels = (0, import_trader_b7e5426c.b)();
  let gameVersions = versionList();
  let createModal = false;
  let newVersion = 1;
  let newLevel = 0;
  let newTraderLevels = [];
  let loginInput = "";
  let registerInput = "";
  let playerFaction = "USEC";
  let loadingMessage = "Just loading a bit";
  getProfile();
  async function getProfile() {
    await $userName;
    loadingMessage = "Retrieving player";
    if ($userName) {
      try {
        const res = await fetch(`${$page.url.origin}/api/get/${$userName}`, { method: "GET" });
        let data = await res.json();
        loadingUser = !data.success;
        header = `${$userName} - Tarkov Tasker`;
        player = data.player;
        traders = data.traders;
        stations = data.stations;
        createModal = true;
        newVersion = player.version;
        newLevel = player.level;
        newTraderLevels = createTempPlayerTrader(traders);
      } catch (error) {
        console.log("An error occured loading your player", error);
      }
    }
    loadingUser = false;
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>${(0, import_index_c03cb5e3.e)(header)}</title>`, ""}<meta name="${"description"}" content="${"Home page"}" data-svelte="svelte-xotzgi">`, ""}


${loadingUser ? `<div class="${"flex flex-col justify-center items-center pt-60"}">${(0, import_index_c03cb5e3.v)(import_Circle2_fc1f040e.C, "Circle2").$$render($$result, {
      size: "120",
      colorOuter: "#9A8866",
      colorCenter: "#786849",
      colorInner: "#CFA85F",
      unit: "px"
    }, {}, {})}
		<p class="${"pt-8"}"><i>${(0, import_index_c03cb5e3.e)(loadingMessage)}</i></p></div>
	` : `${$userName ? `<div class="${"flex flex-col w-full justify-center gap-4"}"><div class="${"flex flex-row justify-center items-center"}"><h1 class="${"p-4 font-bold"}">Player Profile</h1>
			
			<label for="${"player-setting-modal"}" class="${"btn btn-ghost modal-button modal-open w-16"}"><img${(0, import_index_c03cb5e3.b)("src", `/static/svg/cogwheel.svg`, 0)}${(0, import_index_c03cb5e3.b)("alt", `Update player`, 0)}${(0, import_index_c03cb5e3.b)("title", `Update player`, 0)}></label></div>

		
		${(0, import_index_c03cb5e3.v)(HeaderStats, "HeaderStats").$$render($$result, { player }, {}, {})}

		
		<div class="${"divider text-primary"}"><h2 class="${"level text-lg svelte-fsi020"}">Overall</h2></div>
		${(0, import_index_c03cb5e3.v)(OverallStats, "OverallStats").$$render($$result, { traders, stations }, {}, {})}

		
		<div class="${"divider text-primary"}"><h2 class="${"level text-lg svelte-fsi020"}">Traders</h2></div>
		<div class="${"grid grid-cols-4 justify-center gap-4"}">${(0, import_index_c03cb5e3.f)(traders, (trader) => {
      return `${(0, import_index_c03cb5e3.v)(TraderStats, "TraderStats").$$render($$result, { trader }, {}, {})}`;
    })}</div></div>
	` : `<h1 class="${"pb-4 font-bold"}">Welcome</h1>
	
	<div class="${"flex flex-col gap-8"}"><div class="${"hero bg-base-200 rounded-3xl"}"><div class="${"hero-content flex-col lg:flex-row-reverse w-full gap-32"}">
				<div class="${"text-center lg:text-left"}"><h1 class="${"text-5xl font-bold"}">Login now!</h1>
					<p class="${"py-6"}">Already have a player? Login now!</p></div>
				
				<div class="${"card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"}"><div class="${"card-body"}"><div class="${"form-control"}"><label class="${"label"}" for="${"login"}"><span class="${"label-text text-primary font-bold text-xl"}">Player name</span></label>
							<input id="${"login"}" type="${"text"}" placeholder="${"Name"}" class="${"input input-bordered text-accent placeholder-accent placeholder-opacity-40"}"${(0, import_index_c03cb5e3.b)("value", loginInput, 0)}></div>
						<div class="${"form-control mt-6"}"><label for="${"login-modal"}" class="${"btn modal-button btn-info"}">Login</label></div></div></div></div></div>

		
		<div class="${"hero bg-base-200 rounded-3xl"}"><div class="${"hero-content flex-col lg:flex-row w-full gap-32"}">
				<div class="${"text-center lg:text-left pl-6"}"><h1 class="${"text-5xl font-bold"}">Register!</h1>
					<p class="${"py-6"}">Don&#39;t have a player yet? Register now!</p></div>
				<div class="${"card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"}"><div class="${"card-body"}"><div class="${"flex flex-col gap-4"}">
							<div class="${"form-control"}"><label for="${"register"}" class="${"label"}"><span class="${"label-text text-primary font-bold text-xl"}">Player name</span></label>
								<input id="${"register"}" type="${"text"}" placeholder="${"Name"}" class="${"input input-bordered text-accent placeholder-accent placeholder-opacity-40"}"${(0, import_index_c03cb5e3.b)("value", registerInput, 0)}></div>
							
							<div class="${"flex justify-center"}"><div class="${"flex flex-col w-3/4 justify-center items-center gap-2"}"><h4 class="${"text-accent"}">Game edition</h4>
									<span class="${"text-xs"}">${(0, import_index_c03cb5e3.e)(gameVersions[newVersion - 1].name)}</span>
									<input type="${"range"}" min="${"1"}" max="${"4"}" step="${"1"}" class="${"range range-primary range-sm"}"${(0, import_index_c03cb5e3.b)("value", newVersion, 0)}></div></div>
							<div class="${"flex justify-center"}"><div class="${"form-control flex flex-row gap-8"}"><label class="${"label cursor-pointer flex flex-col gap-2"}"><h4 class="${"text-accent"}">Faction</h4>
										<span class="${"label-text"}">${(0, import_index_c03cb5e3.e)(playerFaction)}</span>
										<input type="${"checkbox"}" class="${"toggle toggle-primary"}" checked></label></div></div></div>
						<div class="${"form-control mt-6"}"><label for="${"login-modal"}" class="${"btn modal-button btn-success"}">Register</label></div></div></div></div></div>

		
		<div class="${"hero bg-base-200 rounded-3xl"}"><div class="${"hero-content text-center"}"><div class="${"max-w-xl p-4"}"><h1 class="${"text-5xl font-bold"}">Try Tarkov Tasker!</h1>
					<p class="${"py-6"}">If you don&#39;t want to create your own player you can use a test player</p>
					<button class="${"btn btn-accent"}">Try now</button></div></div></div></div>
	${``}`}`}


${createModal ? `<input type="${"checkbox"}" id="${"player-setting-modal"}" class="${"modal-toggle"}">
	<div class="${"modal flex flex-col"}"><div class="${"modal-box flex flex-col w-5/6 max-w-5xl items-center p-8"}">
			${`<h3 class="${"font-bold text-2xl text-primary"}">Update Player</h3>
				<div class="${"divider"}"></div>
				<div class="${"grid grid-cols-2 place-items-center w-full"}">
					<div class="${"flex flex-col w-3/4 items-center gap-2"}"><h4 class="${"text-accent"}">Game edition</h4>
						<span class="${"text-xs"}">${(0, import_index_c03cb5e3.e)(gameVersions[newVersion - 1].name)}</span>
						<input type="${"range"}" min="${"1"}" max="${"4"}" step="${"1"}" class="${"range range-primary range-sm"}"${(0, import_index_c03cb5e3.b)("value", newVersion, 0)}></div>
					
					<div class="${"flex flex-col w-3/4 items-center gap-1"}"><h4 class="${"text-accent"}">Player level</h4>
						${(0, import_index_c03cb5e3.v)(Counter, "Counter").$$render($$result, { count: newLevel }, {
      count: ($$value) => {
        newLevel = $$value;
        $$settled = false;
      }
    }, {})}</div></div>
				<div class="${"divider"}"></div>
				
				<h4 class="${"text-accent justify-center pb-4"}">Traders</h4>
				<div class="${"grid grid-cols-8 gap-4 place-items-center"}">${(0, import_index_c03cb5e3.f)(newTraderLevels, (traderLevel) => {
      return `<div class="${"gap-4 flex flex-col items-center"}">${(0, import_index_c03cb5e3.v)(import_traderIcon_a735f441.T, "TraderIcon").$$render($$result, {
        trader: traderLevel.trader,
        level: traderLevel.level,
        size: 20
      }, {}, {})}
							
							<div class="${"pt-2"}"><input type="${"range"}" min="${"1"}" max="${"4"}"${(0, import_index_c03cb5e3.b)("step", traderLevel.trader.name === "Fence" ? 3 : 1, 0)} class="${"range range-xs range-accent"}"${(0, import_index_c03cb5e3.b)("value", traderLevel.level, 0)}>
								
								<div class="${"w-full flex justify-between text-xs px-2"}">
									${traderLevel.trader.name === "Fence" ? `<span class="${"justify-center text-accent"}">${(0, import_index_c03cb5e3.e)(romanLevels[0])}</span>
										<span class="${"justify-center text-accent"}">${(0, import_index_c03cb5e3.e)(romanLevels[romanLevels.length - 1])}</span>` : `${(0, import_index_c03cb5e3.f)(romanLevels, (romanLevel) => {
        return `<span class="${"justify-center text-accent"}">${(0, import_index_c03cb5e3.e)(romanLevel)}</span>`;
      })}`}
								</div></div>
						</div>`;
    })}</div>
				<div class="${"pt-12 w-full"}">
					${`<div class="${"flex flex-row gap-6 justify-center"}">
							<div class="${"modal-action"}"><label for="${"player-setting-modal"}" class="${"btn btn-md btn-neutral w-24"}">Cancel</label></div>
							
							<div class="${"modal-action"}"><label for="${"player-setting-modal"}" class="${"btn btn-md btn-success w-24"}">Save</label></div></div>`}</div>`}</div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_userName();
  return $$rendered;
});
