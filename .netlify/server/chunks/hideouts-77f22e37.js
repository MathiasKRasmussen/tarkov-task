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
  a: () => getPlayerStations,
  b: () => getStationsByPlayer,
  c: () => getHideouts,
  d: () => getStationItemsByPlayer,
  g: () => getHideoutStations,
  u: () => updatePlayerStations
});
module.exports = __toCommonJS(stdin_exports);
var import_prisma_e464139b = require("./prisma-e464139b.js");
async function getHideoutStations() {
  let stations = [];
  try {
    stations = await import_prisma_e464139b.p.hideoutStation.findMany({
      include: {
        Hideout: true
      }
    });
  } catch (error) {
    console.log("getHideoutStations", error);
  }
  return stations;
}
async function getHideouts() {
  let hideouts = [];
  try {
    hideouts = await import_prisma_e464139b.p.hideout.findMany({
      orderBy: {
        name: "asc"
      }
    });
  } catch (error) {
    console.log("getHideouts", error);
  }
  return hideouts;
}
async function getStationItemsByPlayer(player) {
  let stations = [];
  try {
    stations = await import_prisma_e464139b.p.playerHasHideout.findMany({
      where: {
        player: {
          id: player.id
        },
        completed: false
      },
      select: {
        hideoutStation: {
          select: {
            HideoutReqItem: {
              select: {
                item: true,
                count: true
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.log("getStationItemsByPlayer", error);
  }
  return stations;
}
async function getStationsByPlayer(player) {
  let stations = [];
  try {
    stations = await import_prisma_e464139b.p.playerHasHideout.findMany({
      where: {
        player: {
          id: player.id
        }
      },
      select: {
        id: true,
        completed: true,
        hideoutStation: {
          select: {
            level: true,
            HideoutReqItem: {
              select: {
                item: true,
                count: true
              }
            },
            HideoutReqSkill: {
              select: {
                level: true,
                skill: true
              }
            },
            HideoutReqTrader: {
              select: {
                level: true,
                trader: true
              }
            },
            RequiresStation: {
              select: {
                station: {
                  include: {
                    Hideout: true
                  }
                }
              }
            },
            Hideout: true
          }
        }
      },
      orderBy: {
        hideoutStation: {
          id: "asc"
        }
      }
    });
  } catch (error) {
    console.log("getStationsByPlayer", error);
  }
  return stations;
}
async function updatePlayerStations(playerHideouts) {
  let results = [];
  try {
    for (const playerHideout of playerHideouts) {
      const result = await import_prisma_e464139b.p.playerHasHideout.update({
        where: {
          id: playerHideout.id
        },
        data: {
          completed: playerHideout.completed
        }
      });
      results.push(result);
    }
  } catch (error) {
    console.log("updatePlayerStations", error);
  }
  return playerHideouts.length === results.length;
}
async function getPlayerStations(player) {
  try {
    const stations = await import_prisma_e464139b.p.hideoutStation.findMany({
      include: {
        PlayerHasHideout: {
          where: {
            player: {
              id: player.id
            }
          }
        },
        HideoutReqItem: {
          include: {
            item: true
          }
        }
      }
    });
    return stations;
  } catch (error) {
    console.log("getPlayerStations", error);
  }
}
