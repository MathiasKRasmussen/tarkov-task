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
var import_player_dd733551 = require("../../../../chunks/player-dd733551.js");
var import_hideouts_77f22e37 = require("../../../../chunks/hideouts-77f22e37.js");
var import_traders_3f87bfe1 = require("../../../../chunks/traders-3f87bfe1.js");
var import_prisma_e464139b = require("../../../../chunks/prisma-e464139b.js");
var import_client = require("@prisma/client");
var import_tasks_6660296f = require("../../../../chunks/tasks-6660296f.js");
var import_trader_b7e5426c = require("../../../../chunks/trader-b7e5426c.js");
async function get({ params }) {
  let player = await (0, import_player_dd733551.g)(params.playerName);
  let traders = await (0, import_traders_3f87bfe1.g)(player);
  let stations = await (0, import_hideouts_77f22e37.a)(player);
  return {
    body: {
      player,
      traders,
      stations,
      success: params.playerName ? true : false
    }
  };
}
