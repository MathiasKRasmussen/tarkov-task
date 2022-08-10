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
  a: () => getTraders,
  b: () => getPlayerTraders,
  g: () => getPlayerTradersWithTasks
});
module.exports = __toCommonJS(stdin_exports);
var import_prisma_e464139b = require("./prisma-e464139b.js");
var import_trader_b7e5426c = require("./trader-b7e5426c.js");
async function getTraders() {
  const traders = await import_prisma_e464139b.p.trader.findMany();
  return traders;
}
async function getPlayerTraders(player) {
  let traders = await import_prisma_e464139b.p.trader.findMany({
    include: {
      PlayerHasTrader: {
        where: {
          player: {
            id: player.id
          }
        }
      }
    }
  });
  traders = (0, import_trader_b7e5426c.e)(traders);
  return traders;
}
async function getPlayerTradersWithTasks(player) {
  let traders = await import_prisma_e464139b.p.trader.findMany({
    include: {
      PlayerHasTrader: {
        where: {
          player: {
            id: player.id
          }
        }
      },
      Task: {
        include: {
          PlayerHasTasks: {
            where: {
              player: {
                id: player.id
              }
            }
          },
          TaskReqItem: {
            include: {
              item: true
            }
          }
        }
      }
    }
  });
  traders = (0, import_trader_b7e5426c.e)(traders);
  return traders;
}
