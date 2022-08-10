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
  c: () => createPlayer,
  g: () => getPlayer,
  u: () => updatePlayer
});
module.exports = __toCommonJS(stdin_exports);
var import_prisma_e464139b = require("./prisma-e464139b.js");
var import_hideouts_77f22e37 = require("./hideouts-77f22e37.js");
var import_tasks_6660296f = require("./tasks-6660296f.js");
async function createPlayer(name, version, level, faction) {
  const tasks = await (0, import_tasks_6660296f.g)(faction);
  const stations = await (0, import_hideouts_77f22e37.g)();
  const stashIds = (0, import_tasks_6660296f.a)(version);
  const traders = (0, import_tasks_6660296f.c)();
  try {
    const player = await import_prisma_e464139b.p.player.create({ data: { name, version, level, faction } });
    if (player) {
      for (const task of tasks) {
        await import_prisma_e464139b.p.playerHasTasks.create({
          data: {
            completed: false,
            task: {
              connect: {
                id: task.id
              }
            },
            player: {
              connect: {
                id: player.id
              }
            }
          }
        });
      }
      for (const station of stations) {
        const isStashLevel = stashIds.includes(station.id);
        await import_prisma_e464139b.p.playerHasHideout.create({
          data: {
            completed: isStashLevel,
            hideoutStation: {
              connect: {
                id: station.id
              }
            },
            player: {
              connect: {
                id: player.id
              }
            }
          }
        });
      }
      for (const trader of traders) {
        const result = await import_prisma_e464139b.p.playerHasTrader.create({
          data: {
            trader: {
              connect: {
                id: trader.id
              }
            },
            player: {
              connect: {
                id: player.id
              }
            }
          }
        });
      }
    }
    return player;
  } catch (error) {
    console.log("createPlayer", error);
  }
}
async function updatePlayer(player, newVersion, newLevel, newTraderLevels) {
  try {
    const resPlayer = await import_prisma_e464139b.p.player.update({
      where: {
        id: player.id
      },
      data: {
        level: newLevel,
        version: newVersion
      }
    });
    if (resPlayer) {
      for (const traderLevel of newTraderLevels) {
        await import_prisma_e464139b.p.playerHasTrader.update({
          where: {
            playerId_traderId: {
              playerId: player.id,
              traderId: traderLevel.trader.id
            }
          },
          data: {
            level: traderLevel.level
          }
        });
      }
    }
    return resPlayer;
  } catch (error) {
    console.log("updatePlayer", error);
  }
}
async function getPlayer(name) {
  try {
    const player = await import_prisma_e464139b.p.player.findUnique({
      where: {
        name
      }
    });
    return player;
  } catch (error) {
    console.log("getPlayer", error);
  }
}
