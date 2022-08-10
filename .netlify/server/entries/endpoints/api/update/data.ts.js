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
var import_prisma_e464139b = require("../../../../chunks/prisma-e464139b.js");
var import_graphql_request = require("graphql-request");
var import_client = require("@prisma/client");
async function post() {
  console.log("DAB");
  const query = import_graphql_request.gql`
    {
        items(name: "m855") {
            id
            low24hPrice
            avg24hPrice
            high24hPrice
        }
    }
    `;
  (0, import_graphql_request.request)("https://api.tarkov.dev/graphql", query).then((data) => console.log(data));
  let success = true;
  return {
    body: {
      success,
      message: success ? "Success" : "Failed"
    }
  };
}
