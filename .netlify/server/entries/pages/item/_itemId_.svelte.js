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
  default: () => U5BitemIdu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c03cb5e3 = require("../../../chunks/index-c03cb5e3.js");
var import_traderIcon_a735f441 = require("../../../chunks/traderIcon-a735f441.js");
var import_hideout_97b437b0 = require("../../../chunks/hideout-97b437b0.js");
var import_itemPrice_fcb1cdc5 = require("../../../chunks/itemPrice-fcb1cdc5.js");
var import_trader_b7e5426c = require("../../../chunks/trader-b7e5426c.js");
const CraftBarterItem = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let { count } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  return `<div class="${"flex flex-col items-center gap-1"}"><span class="${"flex justify-center"}"><a class="${"text-sm"}" sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/item/${item.id}`, 0)}>${(0, import_index_c03cb5e3.e)(item.shortName)}</a></span>
	<div class="${"flex justify-center w-" + (0, import_index_c03cb5e3.e)(item.width > 2 ? 40 : item.width * 16)}"><a sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/item/${item.id}`, 0)}><img class="${"border border-primary flex justify-center"}"${(0, import_index_c03cb5e3.b)("src", item.nameIcon, 0)}${(0, import_index_c03cb5e3.b)("alt", item.name, 0)}${(0, import_index_c03cb5e3.b)("title", item.name, 0)}></a></div>
	<span class="${"text-accent flex justify-center"}">${(0, import_index_c03cb5e3.e)(`x${count}`)}</span></div>`;
});
const Barter = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { barter } = $$props;
  if ($$props.barter === void 0 && $$bindings.barter && barter !== void 0)
    $$bindings.barter(barter);
  return `<div class="${"flex flex-row items-center"}">
	<div class="${"flex flex-col items-center gap-2 w-1/6 pb-4"}"><a${(0, import_index_c03cb5e3.b)("href", barter.trader.wiki, 0)} target="${"_blank"}">${(0, import_index_c03cb5e3.e)(`${barter.trader.name} LL${barter.traderLevel}`)}</a>
		${(0, import_index_c03cb5e3.v)(import_traderIcon_a735f441.T, "TraderIcon").$$render($$result, {
    trader: barter.trader,
    level: barter.traderLevel,
    size: 24
  }, {}, {})}</div>
	<div class="${"divider divider-horizontal"}"></div>
	<div class="${"flex flex-row gap-6 w-5/6 justify-center items-center"}">
		<div class="${"flex flex-row gap-2 items-center"}">${(0, import_index_c03cb5e3.f)(barter.BarterReqItem, (reqItem) => {
    return `${(0, import_index_c03cb5e3.v)(CraftBarterItem, "CraftBarterItem").$$render($$result, { item: reqItem.item, count: reqItem.count }, {}, {})}`;
  })}</div>
		
		<div class="${"flex flex-col gap-2 items-center"}"><div class="${"w-12"}"><img${(0, import_index_c03cb5e3.b)("src", `/static/svg/rightArrow.svg`, 0)} alt="${(0, import_index_c03cb5e3.e)(`Arrow that points to reward item`) + "}"}"></div></div>

		
		<div class="${"flex flex-row gap-2 items-center"}">${(0, import_index_c03cb5e3.f)(barter.BarterRewItem, (rewItem) => {
    return `${(0, import_index_c03cb5e3.v)(CraftBarterItem, "CraftBarterItem").$$render($$result, { item: rewItem.item, count: rewItem.count }, {}, {})}`;
  })}</div></div></div>`;
});
function timeString(seconds) {
  return hourString(seconds) + minuteString(seconds);
}
function hourString(seconds) {
  if (seconds > 3600) {
    return Math.floor(seconds / 3600) + "h ";
  }
  return "";
}
function minuteString(seconds) {
  if (seconds > 3600) {
    const afterHours = seconds % 3600;
    return Math.floor(afterHours / 60) + "m";
  }
  return Math.floor(seconds / 60) + "m";
}
const Crafting = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { craft } = $$props;
  if ($$props.craft === void 0 && $$bindings.craft && craft !== void 0)
    $$bindings.craft(craft);
  return `<div class="${"flex flex-row items-center"}">
	<div class="${"flex flex-col items-center gap-2 w-1/6"}">
		<span class="${"text-primary"}">${(0, import_index_c03cb5e3.e)(`${craft.HideoutStation.Hideout.name} ${craft.HideoutStation.level}`)}</span>
		
		<img class="${"w-12"}"${(0, import_index_c03cb5e3.b)("src", (0, import_hideout_97b437b0.h)(craft.HideoutStation.Hideout.name), 0)}${(0, import_index_c03cb5e3.b)("alt", craft.HideoutStation.Hideout.name, 0)}${(0, import_index_c03cb5e3.b)("title", craft.HideoutStation.Hideout.name, 0)}></div>
	<div class="${"divider divider-horizontal"}"></div>
	<div class="${"flex flex-row gap-6 w-5/6 justify-center items-center"}">
		<div class="${"flex flex-row gap-2 items-center"}">${(0, import_index_c03cb5e3.f)(craft.CraftReqItem, (reqItem) => {
    return `${(0, import_index_c03cb5e3.v)(CraftBarterItem, "CraftBarterItem").$$render($$result, { item: reqItem.item, count: reqItem.count }, {}, {})}`;
  })}</div>
		
		<div class="${"flex flex-col gap-2 items-center"}"><div class="${"w-12"}"><img${(0, import_index_c03cb5e3.b)("src", `/static/svg/rightArrow.svg`, 0)} alt="${(0, import_index_c03cb5e3.e)(`Arrow that points to reward item`) + "}"}"></div>
			<span class="${"text-accent"}">${(0, import_index_c03cb5e3.e)(timeString(craft.duration))}</span></div>

		<div class="${"flex flex-row gap-2 items-center"}">${(0, import_index_c03cb5e3.f)(craft.CraftRewItem, (rewItem) => {
    return `${(0, import_index_c03cb5e3.v)(CraftBarterItem, "CraftBarterItem").$$render($$result, { item: rewItem.item, count: rewItem.count }, {}, {})}`;
  })}</div></div></div>`;
});
const FleaPrice = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { price } = $$props;
  let { priceColor } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.priceColor === void 0 && $$bindings.priceColor && priceColor !== void 0)
    $$bindings.priceColor(priceColor);
  return `<div class="${"flex flex-col"}"><span class="${"text-accent font-bold flex justify-center"}">${(0, import_index_c03cb5e3.e)(header)}</span>
	<span class="${(0, import_index_c03cb5e3.e)(priceColor) + " flex justify-center"}">${(0, import_index_c03cb5e3.e)(price.toLocaleString("en-US") + (0, import_itemPrice_fcb1cdc5.c)("RUB"))}</span></div>`;
});
const U5BitemIdu5D = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let { traders } = $$props;
  let { priceData } = $$props;
  (0, import_itemPrice_fcb1cdc5.g)(priceData.sellFor);
  let bestOffer;
  let bestSellTrader;
  let profit = 0;
  function setProfit() {
    if (bestOffer) {
      profit = (0, import_itemPrice_fcb1cdc5.f)(priceData.avg24hPrice, bestOffer.price, bestOffer.currency);
    }
  }
  function canBeBoughtFromTrader() {
    if (!priceData.buyFor.length)
      return false;
    else if (priceData.buyFor.length === 1 && priceData.buyFor[0].vendor.name === "Flea Market")
      return false;
    return true;
  }
  function traderPriceString(offer) {
    if (offer.currency === "USD") {
      return (0, import_itemPrice_fcb1cdc5.c)(offer.currency) + offer.price + " ~ " + (0, import_itemPrice_fcb1cdc5.a)(offer.price, offer.currency, "RUB").toLocaleString("en-US") + (0, import_itemPrice_fcb1cdc5.c)("RUB");
    } else if (offer.currency === "EUR") {
      return offer.price.toLocaleString("en-US") + (0, import_itemPrice_fcb1cdc5.c)(offer.currency) + " ~ " + (0, import_itemPrice_fcb1cdc5.a)(offer.price, offer.currency, "RUB").toLocaleString("en-US") + (0, import_itemPrice_fcb1cdc5.c)("RUB");
    }
    return offer.price.toLocaleString("en-US") + (0, import_itemPrice_fcb1cdc5.c)(offer.currency);
  }
  function getTrader(name) {
    let trader;
    traders.forEach((t) => {
      if (t.name === name)
        trader = t;
    });
    return trader;
  }
  function canBeFlea() {
    let canBeFlea2 = true;
    item.ItemHasType.forEach((itemHasType) => {
      if (itemHasType.type.name === "noFlea")
        canBeFlea2 = false;
    });
    return canBeFlea2;
  }
  function setTraderToSell() {
    bestOffer = (0, import_itemPrice_fcb1cdc5.b)(priceData.sellFor);
    if (bestOffer) {
      traders.forEach((trader) => {
        if (trader.name === bestOffer.vendor.name)
          bestSellTrader = trader;
      });
    }
  }
  setTraderToSell();
  setProfit();
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.traders === void 0 && $$bindings.traders && traders !== void 0)
    $$bindings.traders(traders);
  if ($$props.priceData === void 0 && $$bindings.priceData && priceData !== void 0)
    $$bindings.priceData(priceData);
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_c03cb5e3.e)(item.name)} - Tarkov Tasker</title>`, ""}<meta name="${"description"}" content="${"Item page"}" data-svelte="svelte-1phpfv">`, ""}

<h1 class="${"py-2"}">${(0, import_index_c03cb5e3.e)(item.name)}</h1>
<div class="${"flex flex-row gap-14 justify-center pb-8"}"><div class="${"card w-2/3 bg-base-100 shadow-xl"}"><div class="${"card-body"}"><div class="${"divider"}"><h2 class="${"card-title justify-center flex"}">Traders</h2></div>
			
			${bestSellTrader ? `<span class="${"flex justify-center text-primary"}">Sell</span>
				<div class="${"flex flex-row gap-1"}"><div class="${"avatar flex"}"><div class="${"rounded w-6"}"><img${(0, import_index_c03cb5e3.b)("src", bestSellTrader.image, 0)}${(0, import_index_c03cb5e3.b)("alt", bestSellTrader.name, 0)}${(0, import_index_c03cb5e3.b)("title", bestSellTrader.name, 0)}></div></div>
					<span class="${"text-accent font-bold w-1/2"}">${(0, import_index_c03cb5e3.e)(bestSellTrader.name)}</span>
					<span class="${"text-success flex justify-end w-full"}">${(0, import_index_c03cb5e3.e)(traderPriceString(bestOffer))}</span></div>` : ``}

			
			${canBeBoughtFromTrader() ? `<div class="${"divider p-0"}"></div>
				<span class="${"flex justify-center text-primary"}">Buy</span>
				${(0, import_index_c03cb5e3.f)(priceData.buyFor, (buyOffer) => {
    return `${buyOffer.vendor.name !== "Flea Market" ? `<div class="${"flex flex-row gap-1 justify-center"}"><div class="${"avatar flex"}"><div class="${"rounded w-6"}"><img${(0, import_index_c03cb5e3.b)("src", getTrader(buyOffer.vendor.name).image, 0)}${(0, import_index_c03cb5e3.b)("alt", getTrader(buyOffer.vendor.name).name, 0)}${(0, import_index_c03cb5e3.b)("title", getTrader(buyOffer.vendor.name).name, 0)}>
								</div></div>
							<span class="${"text-accent font-bold w-1/2"}">${(0, import_index_c03cb5e3.e)(getTrader(buyOffer.vendor.name).name)}</span>
							<span class="${"text-error flex justify-end w-full"}">${(0, import_index_c03cb5e3.e)(traderPriceString(buyOffer))}</span>
						</div>` : ``}`;
  })}` : ``}

			
			<div class="${"divider"}"><h3 class="${"text-primary font-bold text-lg justify-center flex"}">Flea market</h3></div>
			${canBeFlea() ? `<span class="${"flex justify-center text-primary"}">24 hour pricing</span>
				<div class="${"grid grid-cols-3"}">
					${(0, import_index_c03cb5e3.v)(FleaPrice, "FleaPrice").$$render($$result, {
    price: priceData.low24hPrice,
    header: "Low",
    priceColor: "text-error"
  }, {}, {})}
					
					${(0, import_index_c03cb5e3.v)(FleaPrice, "FleaPrice").$$render($$result, {
    price: priceData.avg24hPrice,
    header: "Average",
    priceColor: "text-success"
  }, {}, {})}
					
					${(0, import_index_c03cb5e3.v)(FleaPrice, "FleaPrice").$$render($$result, {
    price: priceData.high24hPrice,
    header: "High",
    priceColor: "text-info"
  }, {}, {})}</div>` : `
				<span class="${"text-error justify-center flex"}">Banned from flea</span>`}
			
			<div class="${"divider"}"><h3 class="${"text-primary font-bold text-lg justify-center flex"}">Profit</h3></div>
			
			<div class="${"grid grid-cols-2"}">${(0, import_index_c03cb5e3.v)(FleaPrice, "FleaPrice").$$render($$result, {
    price: profit,
    header: "Profit flea vs Trader",
    priceColor: profit > 0 ? "text-success" : "text-error"
  }, {}, {})}
				
				${(0, import_index_c03cb5e3.v)(FleaPrice, "FleaPrice").$$render($$result, {
    price: Math.round(priceData.avg24hPrice / (item.width * item.height)),
    header: "Price per slot",
    priceColor: "text-success"
  }, {}, {})}</div></div></div>

	
	<div class="${"flex w-1/3"}"><div class="${"card bg-base-100 shadow-xl"}">
			<figure><img${(0, import_index_c03cb5e3.b)("src", item.image, 0)} alt="${"Image of " + (0, import_index_c03cb5e3.e)(item.name)}"${(0, import_index_c03cb5e3.b)("title", item.name, 0)}></figure>
			<img class="${"absolute top-0 right-0 mt-4 mr-4 hover:shadow-outline " + (0, import_index_c03cb5e3.e)(item.height < item.width ? "w-32" : "w-16")}"${(0, import_index_c03cb5e3.b)("src", item.nameIcon, 0)} alt="${(0, import_index_c03cb5e3.e)(item.name) + " icon"}"${(0, import_index_c03cb5e3.b)("title", item.name, 0)}>
			
			<div class="${"card-body flex pt-4"}"><h2 class="${"flex justify-center text-primary font-bold text-lg"}">${(0, import_index_c03cb5e3.e)(item.name)}</h2>
				<span class="${"flex justify-center text-accent"}">${(0, import_index_c03cb5e3.e)(item.shortName)}</span>
				<span class="${"flex justify-center text-accent text-sm"}">${(0, import_index_c03cb5e3.e)(item.width + "x" + item.height)}</span>
				<ul class="${"list-disc list-inside py-2"}">${(0, import_index_c03cb5e3.f)(item.TaskRewardsItem, (taskRewards) => {
    return `<li class="${"text-accent text-xs"}"><span class="${"text-success"}">${(0, import_index_c03cb5e3.e)(taskRewards.count)}</span>
							<span>from</span>
							<a${(0, import_index_c03cb5e3.b)("href", taskRewards.task.wiki, 0)} target="${"_blank"}">${(0, import_index_c03cb5e3.e)(taskRewards.task.name)}</a>
						</li>`;
  })}</ul>
				<div class="${"card-actions justify-end"}"><a class="${"btn btn-outline btn-primary btn-sm"}" role="${"button"}"${(0, import_index_c03cb5e3.b)("href", item.wiki, 0)} target="${"_blank"}">Wiki</a></div></div></div></div></div>


${item.TaskReqItem.length || item.HideoutReqItem.length ? `<div class="${"pb-8"}"><div class="${"card w-full flex-wrap justify-center bg-base-100 shadow-xl lg:card-side"}"><div class="${"flex w-full bg-primary justify-center"}"><h2 class="${"py-3 text-3xl text-secondary font-bold"}">Required for Tasks / Hideout</h2></div>
			<div class="${"flex flex-col p-0 w-full"}"><div class="${"overflow-x-auto"}"><table class="${"table table-auto table-zebra w-full"}">
						<thead><tr class="${"border border-b-[1px] border-primary border-x-0 border-y-0"}"><th class="${"text-primary w-1/12 "}"><div class="${"flex justify-center text-primary"}">Amount</div></th>
								<th class="${"text-primary flex justify-center"}">Task / Hideout</th></tr></thead>
						<tbody>
							${(0, import_index_c03cb5e3.f)(item.TaskReqItem, (reqItem) => {
    return `<tr><td class="${"font-bold flex justify-center " + (0, import_index_c03cb5e3.e)(reqItem.foundInRaid ? "text-error" : "text-success")}"${(0, import_index_c03cb5e3.b)("title", reqItem.foundInRaid ? "Find in raid" : "Item can be bought", 0)}>${(0, import_index_c03cb5e3.e)(reqItem.count)}</td>
									<td><div class="${"text-accent flex justify-center"}"><a${(0, import_index_c03cb5e3.b)("href", reqItem.task.wiki, 0)} target="${"_blank"}">${(0, import_index_c03cb5e3.e)(reqItem.task.name)}</a>
										</div></td>
								</tr>`;
  })}
							
							${(0, import_index_c03cb5e3.f)(item.HideoutReqItem, (reqItem) => {
    return `<tr><td class="${"text-success font-bold flex justify-center"}" title="${"Item can be bought"}">${(0, import_index_c03cb5e3.e)(reqItem.count)}</td>
									<td><div class="${"text-accent flex justify-center"}">${(0, import_index_c03cb5e3.e)(reqItem.hideoutStation.Hideout.name + " " + reqItem.hideoutStation.level)}
										</div></td>
								</tr>`;
  })}</tbody></table></div></div></div></div>` : ``}


${item.CraftReqItem.length || item.CraftRewItem.length ? `<div class="${"pb-8"}"><div class="${"card w-full flex-wrap justify-center bg-base-100 shadow-xl lg:card-side"}"><div class="${"flex w-full bg-primary justify-center"}"><h2 class="${"py-3 text-3xl text-secondary font-bold"}">Crafts</h2></div>
			<div class="${"flex flex-col p-4 w-full"}">
				${(0, import_index_c03cb5e3.f)(item.CraftRewItem, (craftRewItem, index) => {
    return `${index !== 0 ? `<div class="${"divider"}"></div>` : ``}
					${(0, import_index_c03cb5e3.v)(Crafting, "Crafting").$$render($$result, { craft: craftRewItem.Craft }, {}, {})}`;
  })}
				
				${(0, import_index_c03cb5e3.f)(item.CraftReqItem, (craftReqItem, index) => {
    return `${item.CraftRewItem.length || index !== 0 ? `<div class="${"divider"}"></div>` : ``}
					${(0, import_index_c03cb5e3.v)(Crafting, "Crafting").$$render($$result, { craft: craftReqItem.Craft }, {}, {})}`;
  })}</div></div></div>` : ``}


${item.BarterReqItem.length || item.BarterRewItem.length ? `<div class="${"pb-8"}"><div class="${"card w-full flex-wrap justify-center bg-base-100 shadow-xl lg:card-side"}"><div class="${"flex w-full bg-primary justify-center"}"><h2 class="${"py-3 text-3xl text-secondary font-bold"}">Barter trades</h2></div>
			<div class="${"flex flex-col p-4 w-full"}">
				${(0, import_index_c03cb5e3.f)(item.BarterRewItem, (barterRewItem, index) => {
    return `${index !== 0 ? `<div class="${"divider"}"></div>` : ``}
					${(0, import_index_c03cb5e3.v)(Barter, "Barter").$$render($$result, { barter: barterRewItem.Barter }, {}, {})}`;
  })}
				
				${(0, import_index_c03cb5e3.f)(item.BarterReqItem, (barterReqItem, index) => {
    return `${item.BarterRewItem.length || index !== 0 ? `<div class="${"divider"}"></div>` : ``}
					${(0, import_index_c03cb5e3.v)(Barter, "Barter").$$render($$result, { barter: barterReqItem.Barter }, {}, {})}`;
  })}</div></div></div>` : ``}`;
});
