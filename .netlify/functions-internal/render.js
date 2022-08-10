const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp","svg/BEAR.svg","svg/USEC.svg","svg/arrowUp.svg","svg/cogwheel.svg","svg/rightArrow.svg"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-daa7bd64.js","js":["start-daa7bd64.js","chunks/index-b201b107.js","chunks/index-6fbf9a8c.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js'))
		],
		routes: [
			{
				type: 'endpoint',
				id: "api/update/playerTasks",
				pattern: /^\/api\/update\/playerTasks\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/update/playerTasks.ts.js'))
			},
			{
				type: 'endpoint',
				id: "api/update/playerHideout",
				pattern: /^\/api\/update\/playerHideout\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/update/playerHideout.ts.js'))
			},
			{
				type: 'endpoint',
				id: "api/update/player",
				pattern: /^\/api\/update\/player\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/update/player.ts.js'))
			},
			{
				type: 'endpoint',
				id: "api/update/data",
				pattern: /^\/api\/update\/data\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/update/data.ts.js'))
			},
			{
				type: 'endpoint',
				id: "api/post/register",
				pattern: /^\/api\/post\/register\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/post/register.ts.js'))
			},
			{
				type: 'endpoint',
				id: "api/post/login",
				pattern: /^\/api\/post\/login\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/post/login.ts.js'))
			},
			{
				type: 'endpoint',
				id: "api/get/searchItems",
				pattern: /^\/api\/get\/searchItems\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/get/searchItems.ts.js'))
			},
			{
				type: 'endpoint',
				id: "api/get/[playerName]",
				pattern: /^\/api\/get\/([^/]+?)\/?$/,
				names: ["playerName"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/get/_playerName_.ts.js'))
			},
			{
				type: 'page',
				id: "item/[itemId]",
				pattern: /^\/item\/([^/]+?)\/?$/,
				names: ["itemId"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/item/_itemId_.ts.js')),
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "[userName]/hideout",
				pattern: /^\/([^/]+?)\/hideout\/?$/,
				names: ["userName"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/_userName_/hideout.ts.js')),
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "[userName]/items",
				pattern: /^\/([^/]+?)\/items\/?$/,
				names: ["userName"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/_userName_/items.ts.js')),
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "[userName]/keys",
				pattern: /^\/([^/]+?)\/keys\/?$/,
				names: ["userName"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/_userName_/keys.ts.js')),
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "[userName]/tasks",
				pattern: /^\/([^/]+?)\/tasks\/?$/,
				names: ["userName"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/_userName_/tasks.ts.js')),
				a: [0,6],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
