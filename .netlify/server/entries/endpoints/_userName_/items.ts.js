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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
var import_player_dd733551 = require("../../../chunks/player-dd733551.js");
var import_hideouts_77f22e37 = require("../../../chunks/hideouts-77f22e37.js");
var import_prisma_e464139b = require("../../../chunks/prisma-e464139b.js");
var import_tasks_6660296f = require("../../../chunks/tasks-6660296f.js");
var import_client = require("@prisma/client");
function convertPlayerTaskItemsToItem(playerTasks) {
  let items = [];
  for (const playerTask of playerTasks) {
    for (const taskItem of playerTask.task.TaskReqItem) {
      items.push(taskItem);
    }
  }
  return items;
}
function getRequiredTaskItems(playerTasks) {
  let items = convertPlayerTaskItemsToItem(playerTasks);
  let sortedItems = [];
  items.forEach((item) => {
    let alreadyAdded = false;
    sortedItems.forEach((sortedItem) => {
      if (item.item.id === sortedItem.id) {
        if (item.foundInRaid) {
          sortedItem.inRaidCount += item.count;
        } else {
          sortedItem.otherCount += item.count;
        }
        alreadyAdded = true;
      }
    });
    if (!alreadyAdded) {
      if (item.foundInRaid) {
        item.item.inRaidCount = item.count;
        item.item.otherCount = 0;
      } else {
        item.item.inRaidCount = 0;
        item.item.otherCount = item.count;
      }
      item.item.stationCount = 0;
      sortedItems.push(item.item);
    }
  });
  return sortedItems;
}
function addHideoutItems(items, stations) {
  stations.forEach((station) => {
    station.hideoutStation.HideoutReqItem.forEach((reqItem) => {
      let itemExists = false;
      items.forEach((item) => {
        if (item.id === reqItem.item.id) {
          item.stationCount += reqItem.count;
          itemExists = true;
        }
      });
      if (!itemExists) {
        reqItem.item.stationCount = reqItem.count;
        reqItem.item.inRaidCount = 0;
        reqItem.item.otherCount = 0;
        items.push(reqItem.item);
      }
    });
  });
  items.sort(compareItemShortNames);
}
function compareItemShortNames(a, b) {
  if (a.shortName < b.shortName) {
    return -1;
  }
  if (a.shortName > b.shortName) {
    return 1;
  }
  return 0;
}
async function get({ params }) {
  const { userName } = params;
  const player = await (0, import_player_dd733551.g)(userName);
  const playerTasks = await (0, import_tasks_6660296f.b)(player);
  const items = getRequiredTaskItems(playerTasks);
  const playerHasStations = await (0, import_hideouts_77f22e37.d)(player);
  addHideoutItems(items, playerHasStations);
  return {
    body: {
      items
    }
  };
}
