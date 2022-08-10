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
var import_tasks_6660296f = require("../../../../chunks/tasks-6660296f.js");
var import_prisma_e464139b = require("../../../../chunks/prisma-e464139b.js");
var import_client = require("@prisma/client");
async function post({ request }) {
  let data = await request.json();
  let success = await (0, import_tasks_6660296f.u)(data.updatedPlayerTasks);
  return {
    body: {
      success,
      message: success ? "Success" : "Failed"
    }
  };
}