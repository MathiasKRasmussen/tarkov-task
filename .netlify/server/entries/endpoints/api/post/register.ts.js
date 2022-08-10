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
  post: () => post
});
module.exports = __toCommonJS(stdin_exports);
var import_player_dd733551 = require("../../../../chunks/player-dd733551.js");
var import_prisma_e464139b = require("../../../../chunks/prisma-e464139b.js");
var import_client = require("@prisma/client");
var import_hideouts_77f22e37 = require("../../../../chunks/hideouts-77f22e37.js");
var import_tasks_6660296f = require("../../../../chunks/tasks-6660296f.js");
async function post({ request }) {
  let data = await request.json();
  const exists = await (0, import_player_dd733551.g)(data.registerInput);
  if (exists) {
    return {
      body: {
        success: false
      }
    };
  } else {
    const player = await (0, import_player_dd733551.c)(data.registerInput, data.newVersion, 1, data.playerFaction);
    return {
      body: {
        player,
        success: true
      }
    };
  }
}
