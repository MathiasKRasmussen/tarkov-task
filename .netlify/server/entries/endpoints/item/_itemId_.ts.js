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
var import_items_46bb0941 = require("../../../chunks/items-46bb0941.js");
var import_traders_3f87bfe1 = require("../../../chunks/traders-3f87bfe1.js");
var import_graphql_request = require("graphql-request");
var import_prisma_e464139b = require("../../../chunks/prisma-e464139b.js");
var import_client = require("@prisma/client");
var import_trader_b7e5426c = require("../../../chunks/trader-b7e5426c.js");
async function get({ params }) {
  const { itemId } = params;
  const item = await (0, import_items_46bb0941.g)(itemId);
  const traders = await (0, import_traders_3f87bfe1.a)();
  let priceData;
  const query = import_graphql_request.gql` 
    {
        item(id: "${itemId}") {
            low24hPrice
            avg24hPrice
            high24hPrice
            sellFor {
                price
                currency
                vendor {
                    name
                }
            }
            buyFor {
                price
                currency
                vendor {
                    name
                }
            }
        }
    }
    `;
  await (0, import_graphql_request.request)("https://api.tarkov.dev/graphql", query).then((data) => priceData = data.item);
  return {
    body: {
      item,
      priceData,
      traders
    }
  };
}
