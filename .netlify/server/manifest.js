var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "robots.txt", "svelte-welcome.png", "svelte-welcome.webp", "svg/BEAR.svg", "svg/USEC.svg", "svg/arrowUp.svg", "svg/cogwheel.svg", "svg/rightArrow.svg"]),
  mimeTypes: { ".png": "image/png", ".txt": "text/plain", ".webp": "image/webp", ".svg": "image/svg+xml" },
  _: {
    entry: { "file": "start-daa7bd64.js", "js": ["start-daa7bd64.js", "chunks/index-b201b107.js", "chunks/index-6fbf9a8c.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "endpoint",
        id: "api/update/playerTasks",
        pattern: /^\/api\/update\/playerTasks\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/update/playerTasks.ts.js")))
      },
      {
        type: "endpoint",
        id: "api/update/playerHideout",
        pattern: /^\/api\/update\/playerHideout\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/update/playerHideout.ts.js")))
      },
      {
        type: "endpoint",
        id: "api/update/player",
        pattern: /^\/api\/update\/player\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/update/player.ts.js")))
      },
      {
        type: "endpoint",
        id: "api/update/data",
        pattern: /^\/api\/update\/data\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/update/data.ts.js")))
      },
      {
        type: "endpoint",
        id: "api/post/register",
        pattern: /^\/api\/post\/register\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/post/register.ts.js")))
      },
      {
        type: "endpoint",
        id: "api/post/login",
        pattern: /^\/api\/post\/login\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/post/login.ts.js")))
      },
      {
        type: "endpoint",
        id: "api/get/searchItems",
        pattern: /^\/api\/get\/searchItems\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/get/searchItems.ts.js")))
      },
      {
        type: "endpoint",
        id: "api/get/[playerName]",
        pattern: /^\/api\/get\/([^/]+?)\/?$/,
        names: ["playerName"],
        types: [null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/get/_playerName_.ts.js")))
      },
      {
        type: "page",
        id: "item/[itemId]",
        pattern: /^\/item\/([^/]+?)\/?$/,
        names: ["itemId"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/item/_itemId_.ts.js"))),
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "[userName]/hideout",
        pattern: /^\/([^/]+?)\/hideout\/?$/,
        names: ["userName"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/_userName_/hideout.ts.js"))),
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "[userName]/items",
        pattern: /^\/([^/]+?)\/items\/?$/,
        names: ["userName"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/_userName_/items.ts.js"))),
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "[userName]/keys",
        pattern: /^\/([^/]+?)\/keys\/?$/,
        names: ["userName"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/_userName_/keys.ts.js"))),
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "[userName]/tasks",
        pattern: /^\/([^/]+?)\/tasks\/?$/,
        names: ["userName"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/_userName_/tasks.ts.js"))),
        a: [0, 7],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
