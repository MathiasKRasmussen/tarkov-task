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
  a: () => getStashIds,
  b: () => getPlayerTasksItems,
  c: () => createTraders,
  d: () => getPlayerTasks,
  g: () => getTasksByFaction,
  u: () => updatePlayerTasks
});
module.exports = __toCommonJS(stdin_exports);
var import_prisma_e464139b = require("./prisma-e464139b.js");
var tradersData = [
  {
    id: "54cb50c76803fa8b248b4571",
    name: "Prapor",
    wiki: "https://escapefromtarkov.fandom.com/wiki/Prapor"
  },
  {
    id: "54cb57776803fa99248b456e",
    name: "Therapist",
    wiki: "https://escapefromtarkov.fandom.com/wiki/Therapist"
  },
  {
    id: "579dc571d53a0658a154fbec",
    name: "Fence",
    wiki: "https://escapefromtarkov.fandom.com/wiki/Fence"
  },
  {
    id: "58330581ace78e27b8b10cee",
    name: "Skier",
    wiki: "https://escapefromtarkov.fandom.com/wiki/Skier"
  },
  {
    id: "5935c25fb3acc3127c3d8cd9",
    name: "Peacekeeper",
    wiki: "https://escapefromtarkov.fandom.com/wiki/Peacekeeper"
  },
  {
    id: "5a7c2eca46aef81a7ca2145d",
    name: "Mechanic",
    wiki: "https://escapefromtarkov.fandom.com/wiki/Mechanic"
  },
  {
    id: "5ac3b934156ae10c4430e83c",
    name: "Ragman",
    wiki: "https://escapefromtarkov.fandom.com/wiki/Ragman"
  },
  {
    id: "5c0647fdd443bc2504c2d371",
    name: "Jaeger",
    wiki: "https://escapefromtarkov.fandom.com/wiki/Jaeger"
  }
];
function getStashIds(version) {
  const standard = "5d484fc0654e76006657e0ab-1";
  const leftBehind = "5d484fc0654e76006657e0ab-2";
  const prepareEscape = "5d484fc0654e76006657e0ab-3";
  const edgeOfDarkness = "5d484fc0654e76006657e0ab-4";
  let ids = [];
  if (1 <= version && version <= 4) {
    ids.push(standard);
    if (version > 1)
      ids.push(leftBehind);
    if (version > 2)
      ids.push(prepareEscape);
    if (version > 3)
      ids.push(edgeOfDarkness);
  }
  return ids;
}
function createTraders() {
  return tradersData;
}
function getFaction(name) {
  return name;
}
async function getTasksByFaction(faction) {
  let tasks = [];
  const factions = [getFaction("Any"), faction];
  try {
    tasks = await import_prisma_e464139b.p.task.findMany({
      where: {
        faction: {
          in: factions
        }
      }
    });
  } catch (error) {
    console.log("getTasksByFaction", error);
  }
  return tasks;
}
async function getPlayerTasksItems(player) {
  try {
    const playerTasks = await import_prisma_e464139b.p.playerHasTasks.findMany({
      where: {
        player: {
          id: player.id
        },
        completed: false
      },
      select: {
        task: {
          select: {
            TaskReqItem: {
              select: {
                foundInRaid: true,
                count: true,
                item: true
              }
            }
          }
        }
      }
    });
    return playerTasks;
  } catch (error) {
    console.log("getPlayerTasksItems", error);
  }
}
async function getPlayerTasks(player) {
  try {
    const playerTasks = await import_prisma_e464139b.p.playerHasTasks.findMany({
      where: {
        player: {
          id: player.id
        }
      },
      include: {
        task: {
          include: {
            trader: {
              include: {
                PlayerHasTrader: true
              }
            },
            TaskOnMap: {
              include: {
                map: true
              }
            },
            TaskHasObjective: true,
            TaskReqKey: {
              include: {
                key: true
              }
            },
            TaskReqItem: {
              include: {
                item: true
              }
            },
            TaskRewardsItem: {
              include: {
                item: true
              }
            }
          }
        }
      }
    });
    return playerTasks;
  } catch (error) {
    console.log("getPlayerTasks", error);
  }
}
async function updatePlayerTasks(playerTasks) {
  let results = [];
  try {
    for (const playerTask of playerTasks) {
      const result = await import_prisma_e464139b.p.playerHasTasks.update({
        where: {
          id: playerTask.id
        },
        data: {
          completed: playerTask.completed
        }
      });
      results.push(result);
    }
  } catch (error) {
    console.log("updatePlayerTasks", error);
  }
  return playerTasks.length === results.length;
}
