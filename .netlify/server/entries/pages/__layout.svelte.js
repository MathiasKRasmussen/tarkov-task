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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c03cb5e3 = require("../../chunks/index-c03cb5e3.js");
var import_backToTop_svelte_svelte_type_style_lang_839947c1 = require("../../chunks/backToTop.svelte_svelte_type_style_lang-839947c1.js");
var import_stores_d9555cbf = require("../../chunks/stores-d9555cbf.js");
var Header_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "header.svelte-bkz94v{display:flex;justify-content:space-between}ul.svelte-bkz94v{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-bkz94v{position:relative;height:100%}")();
const css$3 = {
  code: "header.svelte-bkz94v{display:flex;justify-content:space-between}ul.svelte-bkz94v{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-bkz94v{position:relative;height:100%}",
  map: null
};
const title = "TARKOV TASKER";
const Header = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let $userName, $$unsubscribe_userName;
  $$unsubscribe_userName = (0, import_index_c03cb5e3.a)(import_backToTop_svelte_svelte_type_style_lang_839947c1.u, (value) => $userName = value);
  $$result.css.add(css$3);
  $$unsubscribe_userName();
  return `<header class="${"sticky top-0 z-50 svelte-bkz94v"}"><div class="${"navbar bg-secondary border-b-[1px] border-primary"}"><div class="${"navbar-start"}"><a class="${"btn btn-ghost text-primary text-2xl font-bold"}" sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/`, 0)}>${(0, import_index_c03cb5e3.e)(title)}</a></div>
		${$userName ? `<div class="${"navbar-center hidden lg:flex"}"><ul class="${"menu menu-horizontal p-0 svelte-bkz94v"}"><li class="${"svelte-bkz94v"}"><a class="${"text-primary font-bold"}" sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/${$userName}/items`, 0)}>Items</a></li>
					<li class="${"svelte-bkz94v"}"><a class="${"text-primary font-bold"}" sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/${$userName}/tasks`, 0)}>Tasks</a></li>
					<li class="${"svelte-bkz94v"}"><a class="${"text-primary font-bold"}" sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/${$userName}/hideout`, 0)}>Hideout</a></li>
					<li class="${"svelte-bkz94v"}"><a class="${"text-primary font-bold"}" sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/${$userName}/keys`, 0)}>Keys</a></li></ul></div>
			<div class="${"navbar-end pr-4"}"><a class="${"text-primary font-bold"}" sveltekit:prefetch${(0, import_index_c03cb5e3.b)("href", `/`, 0)}>Logout</a></div>` : ``}</div>
</header>`;
});
var app = /* @__PURE__ */ (() => `/* fira-mono-cyrillic-ext-400-normal*/
@font-face {
  font-family: 'Fira Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* fira-mono-cyrillic-400-normal*/
@font-face {
  font-family: 'Fira Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/fira-mono-cyrillic-400-normal-c7d433fd.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* fira-mono-greek-ext-400-normal*/
@font-face {
  font-family: 'Fira Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/fira-mono-greek-ext-400-normal-9e2fe623.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');
  unicode-range: U+1F00-1FFF;
}
/* fira-mono-greek-400-normal*/
@font-face {
  font-family: 'Fira Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/fira-mono-greek-400-normal-a8be01ce.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');
  unicode-range: U+0370-03FF;
}
/* fira-mono-latin-ext-400-normal*/
@font-face {
  font-family: 'Fira Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/fira-mono-latin-ext-400-normal-6bfabd30.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* fira-mono-latin-400-normal*/
@font-face {
  font-family: 'Fira Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/fira-mono-latin-400-normal-e43b3538.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* ! tailwindcss v3.1.4 | MIT License | https://tailwindcss.com*/
/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/
*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}
::before,
::after {
  --tw-content: '';
}
/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/
html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}
/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/
body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}
/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/
hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}
/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/
abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}
/*
Remove the default font size and weight for headings.
*/
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
/*
Reset links to optimize for opt-in styling instead of opt-out.
*/
a {
  color: inherit;
  text-decoration: inherit;
}
/*
Add the correct font weight in Edge and Safari.
*/
b,
strong {
  font-weight: bolder;
}
/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/
code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}
/*
Add the correct font size in all browsers.
*/
small {
  font-size: 80%;
}
/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/
table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}
/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}
/*
Remove the inheritance of text transform in Edge and Firefox.
*/
button,
select {
  text-transform: none;
}
/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}
/*
Use the modern Firefox focus style for all focusable elements.
*/
:-moz-focusring {
  outline: auto;
}
/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/
:-moz-ui-invalid {
  box-shadow: none;
}
/*
Add the correct vertical alignment in Chrome and Firefox.
*/
progress {
  vertical-align: baseline;
}
/*
Correct the cursor style of increment and decrement buttons in Safari.
*/
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}
/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/
[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
/*
Remove the inner padding in Chrome and Safari on macOS.
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}
/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
/*
Add the correct display in Chrome and Safari.
*/
summary {
  display: list-item;
}
/*
Removes the default spacing and border for appropriate elements.
*/
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: 0;
}
legend {
  padding: 0;
}
ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
/*
Prevent resizing textareas horizontally by default.
*/
textarea {
  resize: vertical;
}
/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/
input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}
input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}
/*
Set the default cursor for buttons.
*/
button,
[role="button"] {
  cursor: pointer;
}
/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}
/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}
/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/
img,
video {
  max-width: 100%;
  height: auto;
}
:root,
[data-theme] {
  background-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));
  color: hsla(var(--bc) / var(--tw-text-opacity, 1));
}
html {
  -webkit-tap-highlight-color: transparent;
}
:root {
  --p: 39 20% 50%;
  --pf: 39 20% 40%;
  --sf: 35 20% 9%;
  --af: 39 38% 61%;
  --nf: 201 19% 14%;
  --b2: 0 0% 9%;
  --b3: 0 0% 8%;
  --bc: 0 0% 82%;
  --pc: 39 100% 10%;
  --sc: 35 29% 82%;
  --ac: 39 100% 15%;
  --nc: 201 44% 83%;
  --inc: 268 100% 88%;
  --suc: 120 100% 85%;
  --wac: 36 100% 10%;
  --erc: 0 100% 88%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 35 20% 12%;
  --a: 39 38% 76%;
  --n: 201 19% 17%;
  --b1: 0 0% 10%;
  --in: 268 44% 39%;
  --su: 120 100% 24%;
  --wa: 36 100% 50%;
  --er: 0 100% 39%;
}
*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.alert {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
  padding: 1rem;
  border-radius: var(--rounded-box, 1rem);
}
.alert > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
@media (min-width: 768px) {
  .alert {
    flex-direction: row;
  }
  .alert > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }
}
.alert > :where(*) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.avatar {
  position: relative;
  display: inline-flex;
}
.avatar > div {
  display: block;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
.avatar img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.avatar.placeholder > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  height: 1.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  padding-left: 0.563rem;
  padding-right: 0.563rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--n) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--nc) / var(--tw-text-opacity));
  border-radius: var(--rounded-badge, 1.9rem);
}
.btn {
  display: inline-flex;
  flex-shrink: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  border-color: hsl(var(--n) / var(--tw-border-opacity));
  text-align: center;
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: var(--rounded-btn, 0.5rem);
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 1em;
  min-height: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  text-transform: var(--btn-text-case, uppercase);
  -webkit-text-decoration-line: none;
  text-decoration-line: none;
  border-width: var(--border-btn, 1px);
  -webkit-animation: button-pop var(--animation-btn, 0.25s) ease-out;
          animation: button-pop var(--animation-btn, 0.25s) ease-out;
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--nc) / var(--tw-text-opacity));
}
.btn-disabled, 
  .btn[disabled] {
  pointer-events: none;
}
.btn-square {
  height: 3rem;
  width: 3rem;
  padding: 0px;
}
.btn-circle {
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  padding: 0px;
}
.btn.loading, 
    .btn.loading:hover {
  pointer-events: none;
}
.btn.loading:before {
  margin-right: 0.5rem;
  height: 1rem;
  width: 1rem;
  border-radius: 9999px;
  border-width: 2px;
  -webkit-animation: spin 2s linear infinite;
          animation: spin 2s linear infinite;
  content: "";
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: currentColor;
  border-right-color: currentColor;
}
@media (prefers-reduced-motion: reduce) {
  .btn.loading:before {
    -webkit-animation: spin 10s linear infinite;
            animation: spin 10s linear infinite;
  }
}
@-webkit-keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.btn-group > input[type="radio"].btn {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.btn-group > input[type="radio"].btn:before {
  content: attr(data-title);
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--rounded-box, 1rem);
}
.card:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.card-body {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: var(--padding-card, 2rem);
  gap: 0.5rem;
}
.card-body :where(p) {
  flex-grow: 1;
}
.card-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.5rem;
}
.card figure {
  display: flex;
  align-items: center;
  justify-content: center;
}
.card.image-full {
  display: grid;
}
.card.image-full:before {
  position: relative;
  content: "";
  z-index: 10;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  opacity: 0.75;
  border-radius: var(--rounded-box, 1rem);
}
.card.image-full:before, 
    .card.image-full > * {
  grid-column-start: 1;
  grid-row-start: 1;
}
.card.image-full > figure img {
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.card.image-full > .card-body {
  position: relative;
  z-index: 20;
  --tw-text-opacity: 1;
  color: hsl(var(--nc) / var(--tw-text-opacity));
}
.checkbox {
  flex-shrink: 0;
  --chkbg: var(--bc);
  --chkfg: var(--b1);
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border-width: 1px;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0.2;
  border-radius: var(--rounded-btn, 0.5rem);
}
.collapse {
  position: relative;
  display: grid;
  overflow: hidden;
}
.collapse-title, 
.collapse > input[type="checkbox"], 
.collapse-content {
  grid-column-start: 1;
  grid-row-start: 1;
}
.collapse > input[type="checkbox"] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  opacity: 0;
}
.collapse-content {
  grid-row-start: 2;
  overflow: hidden;
  max-height: 0px;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: unset;
  transition: padding 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
.collapse-open .collapse-content,
.collapse:focus:not(.collapse-close) .collapse-content,
.collapse:not(.collapse-close)
  input[type="checkbox"]:checked
  ~ .collapse-content {
  max-height: 9000px;
}
.divider {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 1rem;
  white-space: nowrap;
}
.divider:before,
  .divider:after {
  content: "";
  flex-grow: 1;
  height: 0.125rem;
  width: 100%;
}
.footer {
  display: grid;
  width: 100%;
  grid-auto-flow: row;
  place-items: start;
  row-gap: 2.5rem;
  -moz-column-gap: 1rem;
       column-gap: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.footer > * {
  display: grid;
  place-items: start;
  gap: 0.5rem;
}
@media (min-width: 48rem) {
  .footer {
    grid-auto-flow: column;
  }
  .footer-center {
    grid-auto-flow: row dense;
  }
}
.form-control {
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.hero {
  display: grid;
  width: 100%;
  place-items: center;
  background-size: cover;
  background-position: center;
}
.hero > * {
  grid-column-start: 1;
  grid-row-start: 1;
}
.hero-content {
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80rem;
  gap: 1rem;
  padding: 1rem;
}
.indicator {
  position: relative;
  display: inline-flex;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}
.indicator :where(.indicator-item) {
  z-index: 1;
  position: absolute;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.input {
  flex-shrink: 1;
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 2;
  border-width: 1px;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
  border-radius: var(--rounded-btn, 0.5rem);
}
.input-group > *, 
  .input-group > .input {
  border-radius: 0px;
}
.kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));
  --tw-border-opacity: 0.2;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: var(--rounded-btn, 0.5rem);
  border-bottom-width: 2px;
  min-height: 2.2em;
  min-width: 2.2em;
}
.link {
  cursor: pointer;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
}
.menu {
  display: flex;
  flex-direction: column;
}
.menu.horizontal {
  display: inline-flex;
  flex-direction: row;
}
.menu.horizontal :where(li) {
  flex-direction: row;
}
.menu :where(li) {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
}
.menu :where(li:not(.menu-title)) > :where(*:not(ul)) {
  display: flex;
}
.menu :where(li:not(.disabled):not(.menu-title)) > :where(*:not(ul)) {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  align-items: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.menu > :where(li > *:not(ul):focus) {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.menu > :where(li.disabled > *:not(ul):focus) {
  cursor: auto;
}
.menu > :where(li) :where(ul) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.menu > :where(li) > :where(ul) {
  position: absolute;
  display: none;
  top: initial;
  left: 100%;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.menu > :where(li:hover) > :where(ul) {
  display: flex;
}
.menu > :where(li:focus) > :where(ul) {
  display: flex;
}
.modal {
  pointer-events: none;
  visibility: hidden;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  opacity: 0;
  z-index: 999;
  background-color: hsl(var(--nf, var(--n)) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.4;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: transform, opacity;
  overflow-y: hidden;
  overscroll-behavior: contain;
}
:where(.modal) {
  align-items: center;
}
.modal-box {
  max-height: calc(100vh - 5em);
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
  padding: 1.5rem;
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 91.666667%;
  max-width: 32rem;
  --tw-scale-x: .9;
  --tw-scale-y: .9;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-top-left-radius: var(--rounded-box, 1rem);
  border-top-right-radius: var(--rounded-box, 1rem);
  border-bottom-left-radius: var(--rounded-box, 1rem);
  border-bottom-right-radius: var(--rounded-box, 1rem);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  overscroll-behavior: contain;
}
.modal-open, 
.modal:target, 
.modal-toggle:checked + .modal {
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
}
.modal-action {
  display: flex;
  margin-top: 1.5rem;
  justify-content: flex-end;
}
.modal-toggle {
  position: fixed;
  height: 0px;
  width: 0px;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  opacity: 0;
}
.navbar {
  display: flex;
  align-items: center;
  padding: var(--navbar-padding, 0.5rem);
  min-height: 4rem;
  width: 100%;
}
:where(.navbar > *) {
  display: inline-flex;
  align-items: center;
}
.navbar-start {
  width: 50%;
  justify-content: flex-start;
}
.navbar-center {
  flex-shrink: 0;
}
.navbar-end {
  width: 50%;
  justify-content: flex-end;
}
.progress {
  position: relative;
  width: 100%;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  overflow: hidden;
  height: 0.5rem;
  border-radius: var(--rounded-box, 1rem);
}
.radial-progress {
  position: relative;
  display: inline-grid;
  height: var(--size);
  width: var(--size);
  place-content: center;
  border-radius: 9999px;
  background-color: transparent;
  vertical-align: middle;
  box-sizing: content-box;
  --value: 0;
  --size: 5rem;
  --thickness: calc(var(--size) / 10);
}
.radial-progress::-moz-progress-bar {
  -moz-appearance: none;
       appearance: none;
  background-color: transparent;
}
.radial-progress::-webkit-progress-value {
  -webkit-appearance: none;
          appearance: none;
  background-color: transparent;
}
.radial-progress::-webkit-progress-bar {
  -webkit-appearance: none;
          appearance: none;
  background-color: transparent;
}
.radial-progress:before, 
.radial-progress:after {
  position: absolute;
  border-radius: 9999px;
  content: "";
}
.radial-progress:before {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: radial-gradient(farthest-side, currentColor 98%, #0000) top/var(--thickness) var(--thickness) no-repeat, conic-gradient(currentColor calc(var(--value) * 1%), #0000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)));
  mask: radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)));
}
.radial-progress:after {
  inset: calc(50% - var(--thickness) / 2);
  transform: rotate(calc(var(--value) * 3.6deg - 90deg)) translate(calc(var(--size) / 2 - 50%));
  background-color: currentColor;
}
.range {
  height: 1.5rem;
  width: 100%;
  cursor: pointer;
  -webkit-appearance: none;
  --range-shdw: var(--bc);
  overflow: hidden;
  background-color: transparent;
  border-radius: var(--rounded-box, 1rem);
}
.range:focus {
  outline: none;
}
.select {
  display: inline-flex;
  flex-shrink: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 2.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 2;
  min-height: 3rem;
  border-width: 1px;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
  font-weight: 600;
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: var(--rounded-btn, 0.5rem);
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1px + 50%), calc(100% - 16px) calc(1px + 50%);
  background-size: 4px 4px, 4px 4px;
  background-repeat: no-repeat;
}
.select-disabled, 
  .select[disabled] {
  pointer-events: none;
  cursor: not-allowed;
  --tw-border-opacity: 1;
  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
  --tw-text-opacity: 0.2;
}
.select[multiple] {
  height: auto;
}
.stats {
  display: inline-grid;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--bc) / var(--tw-text-opacity));
  border-radius: var(--rounded-box, 1rem);
}
:where(.stats) {
  grid-auto-flow: column;
  overflow-x: auto;
}
.stat {
  display: inline-grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  -moz-column-gap: 1rem;
       column-gap: 1rem;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0.1;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.stat-figure {
  grid-column-start: 2;
  grid-row: span 3 / span 3;
  grid-row-start: 1;
  place-self: center;
  justify-self: end;
}
.stat-title {
  grid-column-start: 1;
  white-space: nowrap;
  opacity: 0.6;
}
.stat-value {
  grid-column-start: 1;
  white-space: nowrap;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 800;
}
.stat-desc {
  grid-column-start: 1;
  white-space: nowrap;
  font-size: 0.75rem;
  line-height: 1rem;
  opacity: 0.6;
}
.steps .step {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-columns: auto;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-template-rows: 40px 1fr;
  place-items: center;
  text-align: center;
  min-width: 4rem;
}
.table {
  position: relative;
  text-align: left;
}
.table th:first-child {
  position: sticky;
  position: -webkit-sticky;
  left: 0px;
  z-index: 11;
}
.toggle {
  flex-shrink: 0;
  --chkbg: hsla(var(--bc) / 0.2);
  --handleoffset: 1.5rem;
  height: 1.5rem;
  width: 3rem;
  cursor: pointer;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border-width: 1px;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-border-opacity: 0.2;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.2;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: var(--rounded-badge, 1.9rem);
  transition: background, box-shadow var(--animation-input, 0.2s) ease-in-out;
  box-shadow: calc(var(--handleoffset) * -1) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;
}
.avatar-group .avatar {
  overflow: hidden;
  border-radius: 9999px;
  border-width: 4px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--b1) / var(--tw-border-opacity));
}
.btn-outline .badge {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--nc) / var(--tw-text-opacity));
}
.btn-outline.btn-primary .badge {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
.btn-outline.btn-secondary .badge {
  --tw-border-opacity: 1;
  border-color: hsl(var(--s) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--s) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--sc) / var(--tw-text-opacity));
}
.btn-outline.btn-accent .badge {
  --tw-border-opacity: 1;
  border-color: hsl(var(--a) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--a) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--ac) / var(--tw-text-opacity));
}
.btn-outline .badge.outline {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));
  background-color: transparent;
}
.btn-outline.btn-primary .badge-outline {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
  background-color: transparent;
  --tw-text-opacity: 1;
  color: hsl(var(--p) / var(--tw-text-opacity));
}
.btn-outline.btn-secondary .badge-outline {
  --tw-border-opacity: 1;
  border-color: hsl(var(--s) / var(--tw-border-opacity));
  background-color: transparent;
  --tw-text-opacity: 1;
  color: hsl(var(--s) / var(--tw-text-opacity));
}
.btn-outline.btn-accent .badge-outline {
  --tw-border-opacity: 1;
  border-color: hsl(var(--a) / var(--tw-border-opacity));
  background-color: transparent;
  --tw-text-opacity: 1;
  color: hsl(var(--a) / var(--tw-text-opacity));
}
.btn-outline.btn-info .badge-outline {
  --tw-border-opacity: 1;
  border-color: hsl(var(--in) / var(--tw-border-opacity));
  background-color: transparent;
  --tw-text-opacity: 1;
  color: hsl(var(--in) / var(--tw-text-opacity));
}
.btn-outline.btn-success .badge-outline {
  --tw-border-opacity: 1;
  border-color: hsl(var(--su) / var(--tw-border-opacity));
  background-color: transparent;
  --tw-text-opacity: 1;
  color: hsl(var(--su) / var(--tw-text-opacity));
}
.btn-outline.btn-warning .badge-outline {
  --tw-border-opacity: 1;
  border-color: hsl(var(--wa) / var(--tw-border-opacity));
  background-color: transparent;
  --tw-text-opacity: 1;
  color: hsl(var(--wa) / var(--tw-text-opacity));
}
.btn-outline.btn-error .badge-outline {
  --tw-border-opacity: 1;
  border-color: hsl(var(--er) / var(--tw-border-opacity));
  background-color: transparent;
  --tw-text-opacity: 1;
  color: hsl(var(--er) / var(--tw-text-opacity));
}
.btn-outline:hover .badge {
  --tw-border-opacity: 1;
  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--bc) / var(--tw-text-opacity));
}
.btn-outline:hover .badge.outline {
  --tw-border-opacity: 1;
  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--nc) / var(--tw-text-opacity));
}
.btn-outline.btn-primary:hover .badge {
  --tw-border-opacity: 1;
  border-color: hsl(var(--pc) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--pc) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--p) / var(--tw-text-opacity));
}
.btn-outline.btn-primary:hover .badge.outline {
  --tw-border-opacity: 1;
  border-color: hsl(var(--pc) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
.btn-outline.btn-secondary:hover .badge {
  --tw-border-opacity: 1;
  border-color: hsl(var(--sc) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--sc) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--s) / var(--tw-text-opacity));
}
.btn-outline.btn-secondary:hover .badge.outline {
  --tw-border-opacity: 1;
  border-color: hsl(var(--sc) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--sc) / var(--tw-text-opacity));
}
.btn-outline.btn-accent:hover .badge {
  --tw-border-opacity: 1;
  border-color: hsl(var(--ac) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--ac) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--a) / var(--tw-text-opacity));
}
.btn-outline.btn-accent:hover .badge.outline {
  --tw-border-opacity: 1;
  border-color: hsl(var(--ac) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--af, var(--a)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--ac) / var(--tw-text-opacity));
}
.btn:active:hover,
  .btn:active:focus {
  -webkit-animation: none;
          animation: none;
  transform: scale(var(--btn-focus-scale, 0.95));
}
.btn:hover, 
    .btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nf, var(--n)) / var(--tw-bg-opacity));
}
.btn:focus-visible {
  outline: 2px solid hsl(var(--nf));
  outline-offset: 2px;
}
.btn-primary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
.btn-primary:hover, 
    .btn-primary.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--pf, var(--p)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));
}
.btn-primary:focus-visible {
  outline: 2px solid hsl(var(--p));
}
.btn-accent {
  --tw-border-opacity: 1;
  border-color: hsl(var(--a) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--a) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--ac) / var(--tw-text-opacity));
}
.btn-accent:hover, 
    .btn-accent.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--af, var(--a)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--af, var(--a)) / var(--tw-bg-opacity));
}
.btn-accent:focus-visible {
  outline: 2px solid hsl(var(--a));
}
.btn-info {
  --tw-border-opacity: 1;
  border-color: hsl(var(--in) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity));
}
.btn-info:hover, 
    .btn-info.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--in) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
}
.btn-info:focus-visible {
  outline: 2px solid hsl(var(--in));
}
.btn-success {
  --tw-border-opacity: 1;
  border-color: hsl(var(--su) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity));
}
.btn-success:hover, 
    .btn-success.btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--su) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
}
.btn-success:focus-visible {
  outline: 2px solid hsl(var(--su));
}
.btn.glass:hover,
    .btn.glass.btn-active {
  --glass-opacity: 25%;
  --glass-border-opacity: 15%;
}
.btn.glass:focus-visible {
  outline: 2px solid 0 0 2px currentColor;
}
.btn-ghost {
  border-width: 1px;
  border-color: transparent;
  background-color: transparent;
  color: currentColor;
}
.btn-ghost:hover, 
    .btn-ghost.btn-active {
  --tw-border-opacity: 0;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.2;
}
.btn-ghost:focus-visible {
  outline: 2px solid 0 0 2px currentColor;
}
.btn-outline {
  border-color: currentColor;
  background-color: transparent;
  --tw-text-opacity: 1;
  color: hsl(var(--bc) / var(--tw-text-opacity));
}
.btn-outline:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--b1) / var(--tw-text-opacity));
}
.btn-outline.btn-primary {
  --tw-text-opacity: 1;
  color: hsl(var(--p) / var(--tw-text-opacity));
}
.btn-outline.btn-primary:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--pf, var(--p)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
.btn-outline.btn-secondary {
  --tw-text-opacity: 1;
  color: hsl(var(--s) / var(--tw-text-opacity));
}
.btn-outline.btn-secondary:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--sf, var(--s)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--sc) / var(--tw-text-opacity));
}
.btn-outline.btn-accent {
  --tw-text-opacity: 1;
  color: hsl(var(--a) / var(--tw-text-opacity));
}
.btn-outline.btn-accent:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--af, var(--a)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--af, var(--a)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--ac) / var(--tw-text-opacity));
}
.btn-outline.btn-success {
  --tw-text-opacity: 1;
  color: hsl(var(--su) / var(--tw-text-opacity));
}
.btn-outline.btn-success:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--su) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity));
}
.btn-outline.btn-info {
  --tw-text-opacity: 1;
  color: hsl(var(--in) / var(--tw-text-opacity));
}
.btn-outline.btn-info:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--in) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity));
}
.btn-outline.btn-warning {
  --tw-text-opacity: 1;
  color: hsl(var(--wa) / var(--tw-text-opacity));
}
.btn-outline.btn-warning:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--wa) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--wa) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--wac, var(--nc)) / var(--tw-text-opacity));
}
.btn-outline.btn-error {
  --tw-text-opacity: 1;
  color: hsl(var(--er) / var(--tw-text-opacity));
}
.btn-outline.btn-error:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--er) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--er) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity));
}
.btn-disabled, 
  .btn-disabled:hover, 
  .btn[disabled], 
  .btn[disabled]:hover {
  --tw-border-opacity: 0;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.2;
  color: hsl(var(--bc) / var(--tw-text-opacity));
  --tw-text-opacity: 0.2;
}
.btn.loading.btn-square:before, 
    .btn.loading.btn-circle:before {
  margin-right: 0px;
}
.btn.loading.btn-xl:before, 
    .btn.loading.btn-lg:before {
  height: 1.25rem;
  width: 1.25rem;
}
.btn.loading.btn-sm:before, 
    .btn.loading.btn-xs:before {
  height: 0.75rem;
  width: 0.75rem;
}
.btn-group > input[type="radio"]:checked.btn, 
  .btn-group > .btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
.btn-group > input[type="radio"]:checked.btn:focus-visible, .btn-group > .btn-active:focus-visible {
  outline: 2px solid hsl(var(--p));
}
.btn-group:not(.btn-group-vertical) > .btn:not(:first-of-type) {
  margin-left: -1px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.btn-group:not(.btn-group-vertical) > .btn:not(:last-of-type) {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.btn-group-vertical > .btn:not(:first-of-type) {
  margin-top: -1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.btn-group-vertical > .btn:not(:last-of-type) {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}
@-webkit-keyframes button-pop {
  0% {
    transform: scale(var(--btn-focus-scale, 0.95));
  }
  40% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes button-pop {
  0% {
    transform: scale(var(--btn-focus-scale, 0.95));
  }
  40% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}
.card:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
.card.bordered {
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
}
.card.compact .card-body {
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.card-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
}
.checkbox:focus-visible {
  outline: 2px solid hsl(var(--bc));
  outline-offset: 2px;
}
.checkbox:checked, 
  .checkbox[checked="true"] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  background-repeat: no-repeat;
  -webkit-animation: checkmark var(--animation-input, 0.2s) ease-in-out;
          animation: checkmark var(--animation-input, 0.2s) ease-in-out;
  background-image: linear-gradient(-45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);
}
.checkbox:indeterminate {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  background-repeat: no-repeat;
  -webkit-animation: checkmark var(--animation-input, 0.2s) ease-in-out;
          animation: checkmark var(--animation-input, 0.2s) ease-in-out;
  background-image: linear-gradient(90deg, transparent 80%, hsl(var(--chkbg)) 80%), linear-gradient(-90deg, transparent 80%, hsl(var(--chkbg)) 80%), linear-gradient(0deg, hsl(var(--chkbg)) 43%, hsl(var(--chkfg)) 43%, hsl(var(--chkfg)) 57%, hsl(var(--chkbg)) 57%);
}
.checkbox-primary {
  --chkbg: var(--p);
  --chkfg: var(--pc);
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}
.checkbox-primary:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}
.checkbox-primary:focus-visible {
  outline: 2px solid hsl(var(--p));
}
.checkbox-primary:checked, 
    .checkbox-primary[checked="true"] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
.checkbox:disabled {
  cursor: not-allowed;
  border-color: transparent;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  opacity: 0.2;
}
@-webkit-keyframes checkmark {
  0% {
    background-position-y: 5px;
  }
  50% {
    background-position-y: -2px;
  }
  100% {
    background-position-y: 0;
  }
}
@keyframes checkmark {
  0% {
    background-position-y: 5px;
  }
  50% {
    background-position-y: -2px;
  }
  100% {
    background-position-y: 0;
  }
}
body[dir="rtl"] .checkbox {
  --chkbg: var(--bc);
  --chkfg: var(--b1);
}
body[dir="rtl"] .checkbox:checked,
    body[dir="rtl"] .checkbox[checked="true"] {
  background-image: linear-gradient(45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(-45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);
}
.collapse:focus-visible {
  outline: 2px solid hsl(var(--nf));
  outline-offset: 2px;
}
.collapse-arrow .collapse-title:after {
  position: absolute;
  display: block;
  height: 0.5rem;
  width: 0.5rem;
  transition-property: all;
  transition-duration: 150ms;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  top: 1.4rem;
  right: 1.4rem;
  content: "";
  transform-origin: 75% 75%;
  transform: rotate(45deg);
  box-shadow: 2px 2px;
  pointer-events: none;
}
.collapse-plus .collapse-title:after {
  position: absolute;
  display: block;
  height: 0.5rem;
  width: 0.5rem;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  top: 0.9rem;
  right: 1.4rem;
  content: "+";
  pointer-events: none;
}
.collapse:not(.collapse-open):not(.collapse-close) input[type="checkbox"], 
.collapse:not(.collapse-open):not(.collapse-close) .collapse-title {
  cursor: pointer;
}
.collapse:focus:not(.collapse-open):not(.collapse-close) .collapse-title {
  cursor: unset;
}
.collapse-title, 
.collapse > input[type="checkbox"] {
  width: 100%;
  padding: 1rem;
  padding-right: 3rem;
  min-height: 3.75rem;
  transition: background-color 0.2s ease-in-out;
}
.collapse-open :where(.collapse-content), 
.collapse:focus:not(.collapse-close) :where(.collapse-content), 
.collapse:not(.collapse-close) :where(input[type="checkbox"]:checked ~ .collapse-content) {
  padding-bottom: 1rem;
  transition: padding 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
.collapse-open.collapse-arrow .collapse-title:after,
.collapse-arrow:focus:not(.collapse-close) .collapse-title:after,
.collapse-arrow:not(.collapse-close) input[type="checkbox"]:checked ~ .collapse-title:after {
  transform: rotate(225deg);
}
.collapse-open.collapse-plus .collapse-title:after,
.collapse-plus:focus:not(.collapse-close) .collapse-title:after,
.collapse-plus:not(.collapse-close) input[type="checkbox"]:checked ~ .collapse-title:after {
  content: "\u2212";
}
.divider:before {
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
}
.divider:after {
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
}
.divider:not(:empty) {
  gap: 1rem;
}
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-primary {
  outline: 2px solid hsl(var(--p));
}
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-accent {
  outline: 2px solid hsl(var(--a));
}
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-info {
  outline: 2px solid hsl(var(--in));
}
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-success {
  outline: 2px solid hsl(var(--su));
}
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-ghost {
  outline: 2px solid currentColor;
}
.label-text {
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: hsl(var(--bc) / var(--tw-text-opacity));
}
.label a:hover {
  --tw-text-opacity: 1;
  color: hsl(var(--bc) / var(--tw-text-opacity));
}
.input[list]::-webkit-calendar-picker-indicator {
  line-height: 1em;
}
.input-bordered {
  --tw-border-opacity: 0.2;
}
.input:focus {
  outline: 2px solid hsla(var(--bc) / 0.2);
  outline-offset: 2px;
}
.input-primary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}
.input-primary:focus {
  outline: 2px solid hsl(var(--p));
}
.input-disabled, 
  .input[disabled] {
  cursor: not-allowed;
  --tw-border-opacity: 1;
  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
  --tw-text-opacity: 0.2;
}
.input-disabled::-moz-placeholder, .input[disabled]::-moz-placeholder {
  color: hsl(var(--bc) / var(--tw-placeholder-opacity));
  --tw-placeholder-opacity: 0.2;
}
.input-disabled::placeholder, 
  .input[disabled]::placeholder {
  color: hsl(var(--bc) / var(--tw-placeholder-opacity));
  --tw-placeholder-opacity: 0.2;
}
.link:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
.menu.horizontal li.bordered > a, 
        .menu.horizontal li.bordered > button, 
        .menu.horizontal li.bordered > span {
  border-left-width: 0px;
  border-bottom-width: 4px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}
.menu[class*=" p-"] li > *, 
  .menu[class^="p-"] li > * {
  border-radius: var(--rounded-btn, 0.5rem);
}
.menu :where(li.bordered > *) {
  border-left-width: 4px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}
.menu :where(li) > :where(*:not(ul)) {
  gap: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: currentColor;
}
.menu :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):focus), 
  .menu :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):hover) {
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
}
.menu :where(li:not(.menu-title):not(:empty)) > :where(:not(ul).active), 
  .menu :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):active) {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
.menu :where(li:empty) {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  height: 1px;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
}
.menu li.disabled > * {
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  color: hsl(var(--bc) / var(--tw-text-opacity));
  --tw-text-opacity: 0.2;
}
.menu li.disabled > *:hover {
  background-color: transparent;
}
.menu li.hover-bordered a {
  border-left-width: 4px;
  border-color: transparent;
}
.menu li.hover-bordered a:hover {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}
.menu.compact li > a, 
      .menu.compact li > span {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.menu .menu-title > * {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  color: hsl(var(--bc) / var(--tw-text-opacity));
  --tw-text-opacity: 0.4;
}
.menu :where(li:not(.disabled)) > :where(*:not(ul)) {
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.menu > :where(li:first-child) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom-right-radius: unset;
  border-bottom-left-radius: unset;
}
.menu > :where(li:first-child) > :where(:not(ul)) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom-right-radius: unset;
  border-bottom-left-radius: unset;
}
.menu > :where(li:last-child) {
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.menu > :where(li:last-child) > :where(:not(ul)) {
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.menu > :where(li) > :where(ul) :where(li) {
  width: 100%;
  white-space: nowrap;
}
.menu > :where(li) > :where(ul) :where(li) :where(ul) {
  padding-left: 1rem;
}
.menu > :where(li) > :where(ul) :where(li) > :where(:not(ul)) {
  width: 100%;
  white-space: nowrap;
}
.menu > :where(li) > :where(ul) > :where(li:first-child) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom-right-radius: unset;
  border-bottom-left-radius: unset;
}
.menu > :where(li) > :where(ul) > :where(li:first-child) > :where(:not(ul)) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom-right-radius: unset;
  border-bottom-left-radius: unset;
}
.menu > :where(li) > :where(ul) > :where(li:last-child) {
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.menu > :where(li) > :where(ul) > :where(li:last-child) > :where(:not(ul)) {
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.mockup-phone .display {
  overflow: hidden;
  border-radius: 40px;
  margin-top: -25px;
}
.modal-open .modal-box, 
.modal-toggle:checked + .modal .modal-box, 
.modal:target .modal-box {
  --tw-translate-y: 0px;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.modal-action > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.progress::-moz-progress-bar {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
}
.progress:indeterminate::after {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  content: "";
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: -40%;
  width: 33.333333%;
  border-radius: var(--rounded-box, 1rem);
  -webkit-animation: progress-loading 5s infinite ease-in-out;
          animation: progress-loading 5s infinite ease-in-out;
}
.progress::-webkit-progress-bar {
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.2;
  border-radius: var(--rounded-box, 1rem);
}
.progress::-webkit-progress-value {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nf, var(--n)) / var(--tw-bg-opacity));
  border-radius: var(--rounded-box, 1rem);
}
@-webkit-keyframes progress-loading {
  50% {
    left: 107%;
  }
}
@keyframes progress-loading {
  50% {
    left: 107%;
  }
}
@-webkit-keyframes radiomark {
  0% {
    box-shadow: 0 0 0 12px hsl(var(--b1)) inset, 0 0 0 12px hsl(var(--b1)) inset;
  }
  50% {
    box-shadow: 0 0 0 3px hsl(var(--b1)) inset, 0 0 0 3px hsl(var(--b1)) inset;
  }
  100% {
    box-shadow: 0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset;
  }
}
@keyframes radiomark {
  0% {
    box-shadow: 0 0 0 12px hsl(var(--b1)) inset, 0 0 0 12px hsl(var(--b1)) inset;
  }
  50% {
    box-shadow: 0 0 0 3px hsl(var(--b1)) inset, 0 0 0 3px hsl(var(--b1)) inset;
  }
  100% {
    box-shadow: 0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset;
  }
}
.range:focus-visible::-webkit-slider-thumb {
  --focus-shadow: 0 0 0 6px hsl(var(--b1)) inset, 0 0 0 2rem hsl(var(--range-shdw)) inset;
}
.range:focus-visible::-moz-range-thumb {
  --focus-shadow: 0 0 0 6px hsl(var(--b1)) inset, 0 0 0 2rem hsl(var(--range-shdw)) inset;
}
.range::-webkit-slider-runnable-track {
  height: 0.5rem;
  width: 100%;
  border-radius: var(--rounded-box, 1rem);
  background-color: hsla(var(--bc) / 0.1);
}
.range::-moz-range-track {
  height: 0.5rem;
  width: 100%;
  border-radius: var(--rounded-box, 1rem);
  background-color: hsla(var(--bc) / 0.1);
}
.range::-webkit-slider-thumb {
  background-color: hsl(var(--b1));
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  border-style: none;
  border-radius: var(--rounded-box, 1rem);
  -webkit-appearance: none;
  top: 50%;
  color: hsl(var(--range-shdw));
  transform: translateY(-50%);
  --filler-size: 100rem;
  --filler-offset: 0.6rem;
  box-shadow: 0 0 0 3px hsl(var(--range-shdw)) inset, var(--focus-shadow, 0 0), calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size);
}
.range::-moz-range-thumb {
  background-color: hsl(var(--b1));
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  border-style: none;
  border-radius: var(--rounded-box, 1rem);
  top: 50%;
  color: hsl(var(--range-shdw));
  --filler-size: 100rem;
  --filler-offset: 0.5rem;
  box-shadow: 0 0 0 3px hsl(var(--range-shdw)) inset, var(--focus-shadow, 0 0), calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size);
}
.range-primary {
  --range-shdw: var(--p);
}
.range-accent {
  --range-shdw: var(--a);
}
@-webkit-keyframes rating-pop {
  0% {
    transform: translateY(-0.125em);
  }
  40% {
    transform: translateY(-0.125em);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes rating-pop {
  0% {
    transform: translateY(-0.125em);
  }
  40% {
    transform: translateY(-0.125em);
  }
  100% {
    transform: translateY(0);
  }
}
.select:focus {
  outline: 2px solid hsla(var(--bc) / 0.2);
  outline-offset: 2px;
}
.select-disabled::-moz-placeholder, .select[disabled]::-moz-placeholder {
  color: hsl(var(--bc) / var(--tw-placeholder-opacity));
  --tw-placeholder-opacity: 0.2;
}
.select-disabled::placeholder, 
  .select[disabled]::placeholder {
  color: hsl(var(--bc) / var(--tw-placeholder-opacity));
  --tw-placeholder-opacity: 0.2;
}
.select-multiple, 
  .select[multiple], 
  .select[size].select:not([size="1"]) {
  background-image: none;
  padding-right: 1rem;
}
:where(.stats) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
  --tw-divide-y-reverse: 0;
  border-top-width: calc(0px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(0px * var(--tw-divide-y-reverse));
}
.steps .step:before {
  top: 0px;
  grid-column-start: 1;
  grid-row-start: 1;
  height: 0.5rem;
  width: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--bc) / var(--tw-text-opacity));
  content: "";
  margin-left: -100%;
}
.steps .step:after {
  content: counter(step);
  counter-increment: step;
  z-index: 1;
  position: relative;
  grid-column-start: 1;
  grid-row-start: 1;
  display: grid;
  height: 2rem;
  width: 2rem;
  place-items: center;
  place-self: center;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--bc) / var(--tw-text-opacity));
}
.steps .step:first-child:before {
  content: none;
}
.steps .step[data-content]:after {
  content: attr(data-content);
}
.table :where(th, td) {
  white-space: nowrap;
  padding: 1rem;
  vertical-align: middle;
}
.table tr.active th, 
    .table tr.active td, 
    .table tr.active:nth-child(even) th, 
    .table tr.active:nth-child(even) td {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
}
.table tr.hover:hover th, 
    .table tr.hover:hover td, 
    .table tr.hover:nth-child(even):hover th, 
    .table tr.hover:nth-child(even):hover td {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
}
.table:where(:not(.table-zebra)) :where(thead, tbody, tfoot) :where(tr:not(:last-child) :where(th, td)) {
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
}
.table :where(thead, tfoot) :where(th, td) {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}
.table :where(:first-child) :where(:first-child) :where(th, td):first-child {
  border-top-left-radius: 0.5rem;
}
.table :where(:first-child) :where(:first-child) :where(th, td):last-child {
  border-top-right-radius: 0.5rem;
}
.table :where(:last-child) :where(:last-child) :where(th, td):first-child {
  border-bottom-left-radius: 0.5rem;
}
.table :where(:last-child) :where(:last-child) :where(th, td):last-child {
  border-bottom-right-radius: 0.5rem;
}
.table :where(tbody th, tbody td) {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
}
.table-zebra tbody tr:nth-child(even) th, 
      .table-zebra tbody tr:nth-child(even) td {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
}
.toggle:focus-visible {
  outline: 2px solid hsl(var(--bc));
  outline-offset: 2px;
}
.toggle:checked,
  .toggle[checked="true"] {
  --chkbg: hsl(var(--bc));
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  box-shadow: var(--handleoffset) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;
}
[dir="rtl"] .toggle:checked, [dir="rtl"] .toggle[checked="true"] {
  box-shadow: calc(var(--handleoffset) * 1) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;
}
.toggle:indeterminate {
  --chkbg: hsl(var(--bc));
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  box-shadow: calc(var(--handleoffset) / 2) 0 0 2px hsl(var(--b1)) inset, calc(var(--handleoffset) / -2) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;
}
[dir="rtl"] .toggle:indeterminate {
  box-shadow: calc(var(--handleoffset) / 2) 0 0 2px hsl(var(--b1)) inset, calc(var(--handleoffset) / -2) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;
}
.toggle-primary:focus-visible {
  outline: 2px solid hsl(var(--p));
}
.toggle-primary:checked,
    .toggle-primary[checked="true"] {
  --chkbg: hsl(var(--p));
  border-color: hsl(var(--p) / var(--tw-border-opacity));
  --tw-border-opacity: 0.1;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
.toggle:disabled {
  cursor: not-allowed;
  border-color: transparent;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.2;
}
.btn-sm {
  height: 2rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  min-height: 2rem;
  font-size: 0.875rem;
}
.btn-md {
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 3rem;
  font-size: 0.875rem;
}
.btn-square:where(.btn-xs) {
  height: 1.5rem;
  width: 1.5rem;
  padding: 0px;
}
.btn-square:where(.btn-sm) {
  height: 2rem;
  width: 2rem;
  padding: 0px;
}
.btn-square:where(.btn-md) {
  height: 3rem;
  width: 3rem;
  padding: 0px;
}
.btn-square:where(.btn-lg) {
  height: 4rem;
  width: 4rem;
  padding: 0px;
}
.btn-circle:where(.btn-xs) {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 9999px;
  padding: 0px;
}
.btn-circle:where(.btn-sm) {
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
  padding: 0px;
}
.btn-circle:where(.btn-md) {
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  padding: 0px;
}
.btn-circle:where(.btn-lg) {
  height: 4rem;
  width: 4rem;
  border-radius: 9999px;
  padding: 0px;
}
.divider-horizontal {
  flex-direction: column;
}
.divider-horizontal:before {
  height: 100%;
  width: 0.125rem;
}
.divider-horizontal:after {
  height: 100%;
  width: 0.125rem;
}
.indicator :where(.indicator-item) {
  right: 0px;
  left: auto;
  top: 0px;
  bottom: auto;
  --tw-translate-x: 50%;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.indicator :where(.indicator-item.indicator-start) {
  right: auto;
  left: 0px;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.indicator :where(.indicator-item.indicator-center) {
  right: 50%;
  left: 50%;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.indicator :where(.indicator-item.indicator-end) {
  right: 0px;
  left: auto;
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.indicator :where(.indicator-item.indicator-bottom) {
  top: auto;
  bottom: 0px;
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.indicator :where(.indicator-item.indicator-middle) {
  top: 50%;
  bottom: 50%;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.indicator :where(.indicator-item.indicator-top) {
  top: 0px;
  bottom: auto;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.kbd-md {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  min-height: 2.2em;
  min-width: 2.2em;
}
.menu-horizontal {
  display: inline-flex;
  flex-direction: row;
}
.menu-horizontal :where(li) {
  flex-direction: row;
}
.menu-horizontal > :where(li) > :where(ul) {
  top: 100%;
  left: initial;
}
.range-xs {
  height: 1rem;
}
.range-xs::-webkit-slider-runnable-track {
  height: 0.25rem;
}
.range-xs::-moz-range-track {
  height: 0.25rem;
}
.range-xs::-webkit-slider-thumb {
  height: 1rem;
  width: 1rem;
  --filler-offset: 0.4rem;
}
.range-xs::-moz-range-thumb {
  height: 1rem;
  width: 1rem;
  --filler-offset: 0.4rem;
}
.range-sm {
  height: 1.25rem;
}
.range-sm::-webkit-slider-runnable-track {
  height: 0.25rem;
}
.range-sm::-moz-range-track {
  height: 0.25rem;
}
.range-sm::-webkit-slider-thumb {
  height: 1.25rem;
  width: 1.25rem;
  --filler-offset: 0.5rem;
}
.range-sm::-moz-range-thumb {
  height: 1.25rem;
  width: 1.25rem;
  --filler-offset: 0.5rem;
}
.stats-vertical {
  grid-auto-flow: row;
}
.steps-horizontal .step {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  place-items: center;
  text-align: center;
}
.steps-vertical .step {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(1, minmax(0, 1fr));
}
.alert-info {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--in) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity));
}
.alert-error {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--er) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity));
}
.avatar.online:before {
  content: "";
  position: absolute;
  z-index: 10;
  display: block;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
  width: 15%;
  height: 15%;
  top: 7%;
  right: 7%;
  box-shadow: 0 0 0 2px hsl(var(--b1));
}
.avatar.offline:before {
  content: "";
  position: absolute;
  z-index: 10;
  display: block;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
  width: 15%;
  height: 15%;
  top: 7%;
  right: 7%;
  box-shadow: 0 0 0 2px hsl(var(--b1));
}
.card-compact .card-body {
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.card-compact .card-title {
  margin-bottom: 0.25rem;
}
.card-normal .card-body {
  padding: var(--padding-card, 2rem);
  font-size: 1rem;
  line-height: 1.5rem;
}
.card-normal .card-title {
  margin-bottom: 0.75rem;
}
.divider-horizontal {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 1rem;
  margin-right: 1rem;
  height: auto;
  width: 1rem;
}
.menu-horizontal :where(li.bordered > *) {
  border-left-width: 0px;
  border-bottom-width: 4px;
}
.menu-horizontal > :where(li:first-child) {
  border-top-left-radius: inherit;
  border-top-right-radius: unset;
  border-bottom-right-radius: unset;
  border-bottom-left-radius: inherit;
}
.menu-horizontal > :where(li:first-child) > :where(*:not(ul)) {
  border-top-left-radius: inherit;
  border-top-right-radius: unset;
  border-bottom-right-radius: unset;
  border-bottom-left-radius: inherit;
}
.menu-horizontal > :where(li:last-child) {
  border-top-left-radius: unset;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: unset;
}
.menu-horizontal > :where(li:last-child) > :where(*:not(ul)) {
  border-top-left-radius: unset;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: unset;
}
.modal-bottom :where(.modal-box) {
  width: 100%;
  max-width: none;
  --tw-translate-y: 2.5rem;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}
.modal-middle :where(.modal-box) {
  width: 91.666667%;
  max-width: 32rem;
  --tw-translate-y: 0px;
  --tw-scale-x: .9;
  --tw-scale-y: .9;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-bottom-left-radius: var(--rounded-box, 1rem);
  border-bottom-right-radius: var(--rounded-box, 1rem);
}
.stats-vertical > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
  --tw-divide-x-reverse: 0;
  border-right-width: calc(0px * var(--tw-divide-x-reverse));
  border-left-width: calc(0px * calc(1 - var(--tw-divide-x-reverse)));
}
.stats-vertical {
  overflow-y: auto;
}
.steps-horizontal .step {
  grid-template-rows: 40px 1fr;
  grid-template-columns: auto;
  min-width: 4rem;
}
.steps-horizontal .step:before {
  height: 0.5rem;
  width: 100%;
  --tw-translate-y: 0px;
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  content: "";
  margin-left: -100%;
}
.steps-vertical .step {
  gap: 0.5rem;
  grid-template-columns: 40px 1fr;
  grid-template-rows: auto;
  min-height: 4rem;
  justify-items: start;
}
.steps-vertical .step:before {
  height: 100%;
  width: 0.5rem;
  --tw-translate-y: -50%;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  margin-left: 50%;
}
.table-compact :where(th, td) {
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.pointer-events-none {
  pointer-events: none;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: -webkit-sticky;
  position: sticky;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.bottom-0 {
  bottom: 0px;
}
.left-0 {
  left: 0px;
}
.top-0 {
  top: 0px;
}
.right-0 {
  right: 0px;
}
.top-20 {
  top: 5rem;
}
.z-50 {
  z-index: 50;
}
.z-10 {
  z-index: 10;
}
.mt-6 {
  margin-top: 1.5rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mr-4 {
  margin-right: 1rem;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.hidden {
  display: none;
}
.h-14 {
  height: 3.5rem;
}
.h-6 {
  height: 1.5rem;
}
.h-5 {
  height: 1.25rem;
}
.h-8 {
  height: 2rem;
}
.min-h-screen {
  min-height: 100vh;
}
.w-full {
  width: 100%;
}
.w-16 {
  width: 4rem;
}
.w-3\\/4 {
  width: 75%;
}
.w-5\\/6 {
  width: 83.333333%;
}
.w-24 {
  width: 6rem;
}
.w-14 {
  width: 3.5rem;
}
.w-6 {
  width: 1.5rem;
}
.w-12 {
  width: 3rem;
}
.w-5 {
  width: 1.25rem;
}
.w-2\\/3 {
  width: 66.666667%;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/3 {
  width: 33.333333%;
}
.w-32 {
  width: 8rem;
}
.w-1\\/12 {
  width: 8.333333%;
}
.w-8 {
  width: 2rem;
}
.w-40 {
  width: 10rem;
}
.w-1\\/6 {
  width: 16.666667%;
}
.w-20 {
  width: 5rem;
}
.max-w-sm {
  max-width: 24rem;
}
.max-w-xl {
  max-width: 36rem;
}
.max-w-5xl {
  max-width: 64rem;
}
.flex-none {
  flex: none;
}
.flex-shrink-0 {
  flex-shrink: 0;
}
.table-auto {
  table-layout: auto;
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-help {
  cursor: help;
}
.list-inside {
  list-style-position: inside;
}
.list-disc {
  list-style-type: disc;
}
.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-cols-8 {
  grid-template-columns: repeat(8, minmax(0, 1fr));
}
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.place-items-center {
  place-items: center;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-4 {
  gap: 1rem;
}
.gap-8 {
  gap: 2rem;
}
.gap-32 {
  gap: 8rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-6 {
  gap: 1.5rem;
}
.gap-14 {
  gap: 3.5rem;
}
.gap-10 {
  gap: 2.5rem;
}
.gap-x-8 {
  -moz-column-gap: 2rem;
       column-gap: 2rem;
}
.gap-y-2 {
  row-gap: 0.5rem;
}
.overflow-x-auto {
  overflow-x: auto;
}
.rounded-3xl {
  border-radius: 1.5rem;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-none {
  border-radius: 0px;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.border {
  border-width: 1px;
}
.border-2 {
  border-width: 2px;
}
.border-x-0 {
  border-left-width: 0px;
  border-right-width: 0px;
}
.border-y-0 {
  border-top-width: 0px;
  border-bottom-width: 0px;
}
.border-b-\\[1px\\] {
  border-bottom-width: 1px;
}
.border-secondary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--s) / var(--tw-border-opacity));
}
.border-primary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
}
.border-base-300 {
  --tw-border-opacity: 1;
  border-color: hsl(var(--b3, var(--b2)) / var(--tw-border-opacity));
}
.bg-base-200 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
}
.bg-base-100 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
}
.bg-primary {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
}
.bg-secondary {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--s) / var(--tw-bg-opacity));
}
.bg-opacity-0 {
  --tw-bg-opacity: 0;
}
.stroke-current {
  stroke: currentColor;
}
.p-4 {
  padding: 1rem;
}
.p-8 {
  padding: 2rem;
}
.p-0\\.5 {
  padding: 0.125rem;
}
.p-0 {
  padding: 0px;
}
.p-3 {
  padding: 0.75rem;
}
.p-2 {
  padding: 0.5rem;
}
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.pt-60 {
  padding-top: 15rem;
}
.pt-8 {
  padding-top: 2rem;
}
.pb-4 {
  padding-bottom: 1rem;
}
.pl-6 {
  padding-left: 1.5rem;
}
.pt-2 {
  padding-top: 0.5rem;
}
.pt-12 {
  padding-top: 3rem;
}
.pb-2 {
  padding-bottom: 0.5rem;
}
.pl-3 {
  padding-left: 0.75rem;
}
.pl-10 {
  padding-left: 2.5rem;
}
.pr-4 {
  padding-right: 1rem;
}
.pb-8 {
  padding-bottom: 2rem;
}
.pt-4 {
  padding-top: 1rem;
}
.pb-10 {
  padding-bottom: 2.5rem;
}
.pt-3 {
  padding-top: 0.75rem;
}
.pb-0 {
  padding-bottom: 0px;
}
.pl-4 {
  padding-left: 1rem;
}
.pr-2 {
  padding-right: 0.5rem;
}
.pr-12 {
  padding-right: 3rem;
}
.pt-6 {
  padding-top: 1.5rem;
}
.pt-10 {
  padding-top: 2.5rem;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.align-middle {
  vertical-align: middle;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-5xl {
  font-size: 3rem;
  line-height: 1;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.font-bold {
  font-weight: 700;
}
.text-primary {
  --tw-text-opacity: 1;
  color: hsl(var(--p) / var(--tw-text-opacity));
}
.text-accent {
  --tw-text-opacity: 1;
  color: hsl(var(--a) / var(--tw-text-opacity));
}
.text-secondary {
  --tw-text-opacity: 1;
  color: hsl(var(--s) / var(--tw-text-opacity));
}
.text-error {
  --tw-text-opacity: 1;
  color: hsl(var(--er) / var(--tw-text-opacity));
}
.text-success {
  --tw-text-opacity: 1;
  color: hsl(var(--su) / var(--tw-text-opacity));
}
.text-info {
  --tw-text-opacity: 1;
  color: hsl(var(--in) / var(--tw-text-opacity));
}
.placeholder-accent::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: hsl(var(--a) / var(--tw-placeholder-opacity));
}
.placeholder-accent::placeholder {
  --tw-placeholder-opacity: 1;
  color: hsl(var(--a) / var(--tw-placeholder-opacity));
}
.placeholder-primary::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: hsl(var(--p) / var(--tw-placeholder-opacity));
}
.placeholder-primary::placeholder {
  --tw-placeholder-opacity: 1;
  color: hsl(var(--p) / var(--tw-placeholder-opacity));
}
.placeholder-opacity-40::-moz-placeholder {
  --tw-placeholder-opacity: 0.4;
}
.placeholder-opacity-40::placeholder {
  --tw-placeholder-opacity: 0.4;
}
.placeholder-opacity-50::-moz-placeholder {
  --tw-placeholder-opacity: 0.5;
}
.placeholder-opacity-50::placeholder {
  --tw-placeholder-opacity: 0.5;
}
.shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-success {
  --tw-shadow-color: hsl(var(--su));
  --tw-shadow: var(--tw-shadow-colored);
}
.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
:root {\r
	font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\r
		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r
	--font-mono: 'Fira Mono', monospace;\r
	--pure-white: #ffffff;\r
	--primary-color: #5e4b2315;\r
	--secondary-color: #332f25;\r
	--tertiary-color: #0e0c09;\r
	--accent-color: #ff9d00;\r
	--heading-color: #9A8866;\r
	--text-color: #bfbbbb;\r
	--background-without-opacity: rgba(255, 255, 255, 0.7);\r
	--column-width: 42rem;\r
	--column-margin-top: 4rem;\r
}
body {\r
	min-height: 100vh;\r
	margin: 0;\r
	background-color: var(--primary-color);\r
}
body::before {\r
	content: '';\r
	width: 80vw;\r
	height: 100vh;\r
	position: absolute;\r
	top: 0;\r
	left: 10vw;\r
	z-index: -1;\r
	background: radial-gradient(50% 50% at 50% 50%,\r
			var(--pure-white) 0%,\r
			rgba(255, 255, 255, 0) 100%);\r
	opacity: 0.05;\r
}
#svelte {\r
	min-height: 100vh;\r
	display: flex;\r
	flex-direction: column;\r
}
h1,\r
h2,\r
p {\r
	font-weight: 400;\r
	color: var(--heading-color);\r
}
p {\r
	line-height: 1.5;\r
}
a {\r
	color: var(--accent-color);\r
	text-decoration: none;\r
}
a:hover {\r
	text-decoration: underline;\r
}
h1 {\r
	font-size: 2rem;\r
	text-align: center;\r
}
h2 {\r
	font-size: 1rem;\r
}
pre {\r
	font-size: 16px;\r
	font-family: var(--font-mono);\r
	background-color: rgba(255, 255, 255, 0.45);\r
	border-radius: 3px;\r
	box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);\r
	padding: 0.5em;\r
	overflow-x: auto;\r
	color: var(--text-color);\r
}
input,\r
button {\r
	font-size: inherit;\r
	font-family: inherit;\r
}
button:focus:not(:focus-visible) {\r
	outline: none;\r
}
@media (min-width: 720px) {\r
	h1 {\r
		font-size: 2.4rem;\r
	}\r
}
.odd\\:bg-base-200:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
}
.even\\:bg-base-100:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
}
@media (min-width: 1024px) {
  .lg\\:card-side {
    align-items: stretch;
    flex-direction: row;
  }
  .lg\\:card-side figure > * {
    max-width: unset;
  }
   {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
       object-fit: cover;
  }
  .lg\\:flex {
    display: flex;
  }
  .lg\\:flex-row {
    flex-direction: row;
  }
  .lg\\:flex-row-reverse {
    flex-direction: row-reverse;
  }
  .lg\\:text-left {
    text-align: left;
  }
}`)();
var Circle_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".circle.svelte-14upwad{height:var(--size);width:var(--size);border-color:var(--color) transparent var(--color) var(--color);border-width:calc(var(--size) / 15);border-style:solid;-o-border-image:initial;border-image:initial;border-radius:50%;-webkit-animation:var(--duration) linear 0s infinite normal none running svelte-14upwad-rotate;animation:var(--duration) linear 0s infinite normal none running svelte-14upwad-rotate}@-webkit-keyframes svelte-14upwad-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes svelte-14upwad-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}")();
var Circle2_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '.circle.svelte-1vclic6{width:var(--size);height:var(--size);box-sizing:border-box;position:relative;border:3px solid transparent;border-top-color:var(--colorOuter);border-radius:50%;-webkit-animation:svelte-1vclic6-circleSpin var(--durationOuter) linear infinite;animation:svelte-1vclic6-circleSpin var(--durationOuter) linear infinite}.circle.svelte-1vclic6:before,.circle.svelte-1vclic6:after{content:"";box-sizing:border-box;position:absolute;border:3px solid transparent;border-radius:50%}.circle.svelte-1vclic6:after{border-top-color:var(--colorInner);top:9px;left:9px;right:9px;bottom:9px;-webkit-animation:svelte-1vclic6-circleSpin var(--durationInner) linear infinite;animation:svelte-1vclic6-circleSpin var(--durationInner) linear infinite}.circle.svelte-1vclic6:before{border-top-color:var(--colorCenter);top:3px;left:3px;right:3px;bottom:3px;-webkit-animation:svelte-1vclic6-circleSpin var(--durationCenter) linear infinite;animation:svelte-1vclic6-circleSpin var(--durationCenter) linear infinite}@-webkit-keyframes svelte-1vclic6-circleSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes svelte-1vclic6-circleSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}')();
const css$2 = {
  code: '.circle.svelte-1vclic6{width:var(--size);height:var(--size);box-sizing:border-box;position:relative;border:3px solid transparent;border-top-color:var(--colorOuter);border-radius:50%;animation:svelte-1vclic6-circleSpin var(--durationOuter) linear infinite}.circle.svelte-1vclic6:before,.circle.svelte-1vclic6:after{content:"";box-sizing:border-box;position:absolute;border:3px solid transparent;border-radius:50%}.circle.svelte-1vclic6:after{border-top-color:var(--colorInner);top:9px;left:9px;right:9px;bottom:9px;animation:svelte-1vclic6-circleSpin var(--durationInner) linear infinite}.circle.svelte-1vclic6:before{border-top-color:var(--colorCenter);top:3px;left:3px;right:3px;bottom:3px;animation:svelte-1vclic6-circleSpin var(--durationCenter) linear infinite}@keyframes svelte-1vclic6-circleSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',
  map: null
};
const Circle2 = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "60" } = $$props;
  let { unit = "px" } = $$props;
  let { colorOuter = "#FF3E00" } = $$props;
  let { colorCenter = "#40B3FF" } = $$props;
  let { colorInner = "#676778" } = $$props;
  let { durationMultiplier = 1 } = $$props;
  let { durationOuter = `${durationMultiplier * 2}s` } = $$props;
  let { durationInner = `${durationMultiplier * 1.5}s` } = $$props;
  let { durationCenter = `${durationMultiplier * 3}s` } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.colorOuter === void 0 && $$bindings.colorOuter && colorOuter !== void 0)
    $$bindings.colorOuter(colorOuter);
  if ($$props.colorCenter === void 0 && $$bindings.colorCenter && colorCenter !== void 0)
    $$bindings.colorCenter(colorCenter);
  if ($$props.colorInner === void 0 && $$bindings.colorInner && colorInner !== void 0)
    $$bindings.colorInner(colorInner);
  if ($$props.durationMultiplier === void 0 && $$bindings.durationMultiplier && durationMultiplier !== void 0)
    $$bindings.durationMultiplier(durationMultiplier);
  if ($$props.durationOuter === void 0 && $$bindings.durationOuter && durationOuter !== void 0)
    $$bindings.durationOuter(durationOuter);
  if ($$props.durationInner === void 0 && $$bindings.durationInner && durationInner !== void 0)
    $$bindings.durationInner(durationInner);
  if ($$props.durationCenter === void 0 && $$bindings.durationCenter && durationCenter !== void 0)
    $$bindings.durationCenter(durationCenter);
  $$result.css.add(css$2);
  return `<div class="${"circle svelte-1vclic6"}" style="${"--size: " + (0, import_index_c03cb5e3.e)(size) + (0, import_index_c03cb5e3.e)(unit) + "; --colorInner: " + (0, import_index_c03cb5e3.e)(colorInner) + "; --colorCenter: " + (0, import_index_c03cb5e3.e)(colorCenter) + "; --colorOuter: " + (0, import_index_c03cb5e3.e)(colorOuter) + "; --durationInner: " + (0, import_index_c03cb5e3.e)(durationInner) + "; --durationCenter: " + (0, import_index_c03cb5e3.e)(durationCenter) + "; --durationOuter: " + (0, import_index_c03cb5e3.e)(durationOuter) + ";"}"></div>`;
});
var Circle3_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-1vf8im1{width:var(--size);height:var(--size);display:flex;justify-content:center;align-items:center;line-height:0;box-sizing:border-box}.inner.svelte-1vf8im1{transform:scale(calc(var(--floatSize) / 52))}.ball-container.svelte-1vf8im1{-webkit-animation:svelte-1vf8im1-ballTwo var(--duration) infinite;animation:svelte-1vf8im1-ballTwo var(--duration) infinite;width:44px;height:44px;flex-shrink:0;position:relative}.single-ball.svelte-1vf8im1{width:44px;height:44px;position:absolute}.ball.svelte-1vf8im1{width:20px;height:20px;border-radius:50%;position:absolute;-webkit-animation:svelte-1vf8im1-ballOne var(--duration) infinite ease;animation:svelte-1vf8im1-ballOne var(--duration) infinite ease}.ball-top-left.svelte-1vf8im1{background-color:var(--ballTopLeftColor);top:0;left:0}.ball-top-right.svelte-1vf8im1{background-color:var(--ballTopRightColor);top:0;left:24px}.ball-bottom-left.svelte-1vf8im1{background-color:var(--ballBottomLeftColor);top:24px;left:0}.ball-bottom-right.svelte-1vf8im1{background-color:var(--ballBottomRightColor);top:24px;left:24px}@-webkit-keyframes svelte-1vf8im1-ballOne{0%{position:absolute}50%{top:12px;left:12px;position:absolute;opacity:0.5}100%{position:absolute}}@keyframes svelte-1vf8im1-ballOne{0%{position:absolute}50%{top:12px;left:12px;position:absolute;opacity:0.5}100%{position:absolute}}@-webkit-keyframes svelte-1vf8im1-ballTwo{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(360deg) scale(1.3)}100%{transform:rotate(720deg) scale(1)}}@keyframes svelte-1vf8im1-ballTwo{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(360deg) scale(1.3)}100%{transform:rotate(720deg) scale(1)}}")();
var DoubleBounce_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-h1a2xs{position:relative;width:var(--size);height:var(--size)}.circle.svelte-h1a2xs{position:absolute;width:var(--size);height:var(--size);background-color:var(--color);border-radius:100%;opacity:0.6;top:0;left:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:svelte-h1a2xs-bounce !important;animation-name:svelte-h1a2xs-bounce !important}@-webkit-keyframes svelte-h1a2xs-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}@keyframes svelte-h1a2xs-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}")();
var GoogleSpin_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '.svelte-1exboqr{overflow:hidden;position:relative;text-indent:-9999px;display:inline-block;background:#f86;border-radius:50%;transform:rotateZ(90deg);transform-origin:50% 50%;-webkit-animation:svelte-1exboqr-plus-loader-background var(--duration) infinite ease-in-out;animation:svelte-1exboqr-plus-loader-background var(--duration) infinite ease-in-out}.svelte-1exboqr:after{background:#f86;border-radius:50% 0 0 50%;content:"";position:absolute;right:50%;top:0;width:50%;height:100%;transform-origin:100% 50%;-webkit-animation:svelte-1exboqr-plus-loader-top var(--duration) infinite linear;animation:svelte-1exboqr-plus-loader-top var(--duration) infinite linear}.svelte-1exboqr:before{background:#fc6;border-radius:50% 0 0 50%;content:"";position:absolute;right:50%;top:0;width:50%;height:100%;transform-origin:100% 50%;-webkit-animation:svelte-1exboqr-plus-loader-bottom var(--duration) infinite linear;animation:svelte-1exboqr-plus-loader-bottom var(--duration) infinite linear}@-webkit-keyframes svelte-1exboqr-plus-loader-top{2.5%{background:#f86;transform:rotateY(0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}13.75%{background:#ff430d;transform:rotateY(90deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}13.76%{background:#ffae0d;transform:rotateY(90deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}25%{background:#fc6;transform:rotateY(180deg)}27.5%{background:#fc6;transform:rotateY(180deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}41.25%{background:#ffae0d;transform:rotateY(90deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}41.26%{background:#2cc642;transform:rotateY(90deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{background:#6d7;transform:rotateY(0deg)}52.5%{background:#6d7;transform:rotateY(0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}63.75%{background:#2cc642;transform:rotateY(90deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}63.76%{background:#1386d2;transform:rotateY(90deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}75%{background:#4ae;transform:rotateY(180deg)}77.5%{background:#4ae;transform:rotateY(180deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}91.25%{background:#1386d2;transform:rotateY(90deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}91.26%{background:#ff430d;transform:rotateY(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{background:#f86;transform:rotateY(0deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}}@keyframes svelte-1exboqr-plus-loader-top{2.5%{background:#f86;transform:rotateY(0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}13.75%{background:#ff430d;transform:rotateY(90deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}13.76%{background:#ffae0d;transform:rotateY(90deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}25%{background:#fc6;transform:rotateY(180deg)}27.5%{background:#fc6;transform:rotateY(180deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}41.25%{background:#ffae0d;transform:rotateY(90deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}41.26%{background:#2cc642;transform:rotateY(90deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{background:#6d7;transform:rotateY(0deg)}52.5%{background:#6d7;transform:rotateY(0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}63.75%{background:#2cc642;transform:rotateY(90deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}63.76%{background:#1386d2;transform:rotateY(90deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}75%{background:#4ae;transform:rotateY(180deg)}77.5%{background:#4ae;transform:rotateY(180deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}91.25%{background:#1386d2;transform:rotateY(90deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}91.26%{background:#ff430d;transform:rotateY(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{background:#f86;transform:rotateY(0deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}}@-webkit-keyframes svelte-1exboqr-plus-loader-bottom{0%{background:#fc6;-webkit-animation-timing-function:step-start;animation-timing-function:step-start}50%{background:#fc6;-webkit-animation-timing-function:step-start;animation-timing-function:step-start}75%{background:#4ae;-webkit-animation-timing-function:step-start;animation-timing-function:step-start}100%{background:#4ae;-webkit-animation-timing-function:step-start;animation-timing-function:step-start}}@keyframes svelte-1exboqr-plus-loader-bottom{0%{background:#fc6;-webkit-animation-timing-function:step-start;animation-timing-function:step-start}50%{background:#fc6;-webkit-animation-timing-function:step-start;animation-timing-function:step-start}75%{background:#4ae;-webkit-animation-timing-function:step-start;animation-timing-function:step-start}100%{background:#4ae;-webkit-animation-timing-function:step-start;animation-timing-function:step-start}}@-webkit-keyframes svelte-1exboqr-plus-loader-background{0%{background:#f86;transform:rotateZ(180deg)}25%{background:#f86;transform:rotateZ(180deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}27.5%{background:#6d7;transform:rotateZ(90deg)}50%{background:#6d7;transform:rotateZ(90deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}52.5%{background:#6d7;transform:rotateZ(0deg)}75%{background:#6d7;transform:rotateZ(0deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}77.5%{background:#f86;transform:rotateZ(270deg)}100%{background:#f86;transform:rotateZ(270deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}}@keyframes svelte-1exboqr-plus-loader-background{0%{background:#f86;transform:rotateZ(180deg)}25%{background:#f86;transform:rotateZ(180deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}27.5%{background:#6d7;transform:rotateZ(90deg)}50%{background:#6d7;transform:rotateZ(90deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}52.5%{background:#6d7;transform:rotateZ(0deg)}75%{background:#6d7;transform:rotateZ(0deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}77.5%{background:#f86;transform:rotateZ(270deg)}100%{background:#f86;transform:rotateZ(270deg);-webkit-animation-timing-function:step-start;animation-timing-function:step-start}}')();
var ScaleOut_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-9juun5{width:var(--size);height:var(--size)}.circle.svelte-9juun5{width:var(--size);height:var(--size);background-color:var(--color);-webkit-animation-duration:var(--duration);animation-duration:var(--duration);border-radius:100%;display:inline-block;-webkit-animation:svelte-9juun5-scaleOut var(--duration) ease-in-out infinite;animation:svelte-9juun5-scaleOut var(--duration) ease-in-out infinite}@-webkit-keyframes svelte-9juun5-scaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}@keyframes svelte-9juun5-scaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}")();
var SpinLine_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-1wp57lu{width:var(--size);height:var(--stroke);transform:scale(calc(var(--floatSize) / 75));display:flex;justify-content:center;align-items:center}.line.svelte-1wp57lu{width:var(--size);height:var(--stroke);background:var(--color);border-radius:var(--stroke);transform-origin:center center;-webkit-animation:svelte-1wp57lu-spineLine var(--duration) ease infinite;animation:svelte-1wp57lu-spineLine var(--duration) ease infinite}@-webkit-keyframes svelte-1wp57lu-spineLine{0%{transform:rotate(-20deg);height:5px;width:75px}5%{height:5px;width:75px}30%{transform:rotate(380deg);height:5px;width:75px}40%{transform:rotate(360deg);height:5px;width:75px}55%{transform:rotate(0deg);height:5px;width:5px}65%{transform:rotate(0deg);height:5px;width:85px}68%{transform:rotate(0deg);height:5px}75%{transform:rotate(0deg);height:5px;width:1px}78%{height:5px;width:5px}90%{height:5px;width:75px;transform:rotate(0deg)}99%,100%{height:5px;width:75px;transform:rotate(-20deg)}}@keyframes svelte-1wp57lu-spineLine{0%{transform:rotate(-20deg);height:5px;width:75px}5%{height:5px;width:75px}30%{transform:rotate(380deg);height:5px;width:75px}40%{transform:rotate(360deg);height:5px;width:75px}55%{transform:rotate(0deg);height:5px;width:5px}65%{transform:rotate(0deg);height:5px;width:85px}68%{transform:rotate(0deg);height:5px}75%{transform:rotate(0deg);height:5px;width:1px}78%{height:5px;width:5px}90%{height:5px;width:75px;transform:rotate(0deg)}99%,100%{height:5px;width:75px;transform:rotate(-20deg)}}")();
var Stretch_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-1uxpkwt{height:var(--size);width:var(--size);display:inline-block;text-align:center;font-size:10px}.rect.svelte-1uxpkwt{height:100%;width:10%;display:inline-block;margin-right:4px;background-color:var(--color);-webkit-animation:svelte-1uxpkwt-stretch var(--duration) ease-in-out infinite;animation:svelte-1uxpkwt-stretch var(--duration) ease-in-out infinite}@-webkit-keyframes svelte-1uxpkwt-stretch{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}@keyframes svelte-1uxpkwt-stretch{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}")();
var BarLoader_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-vhcw6{height:calc(var(--size) / 15);width:calc(var(--size) * 2);background-color:var(--rgba);position:relative;overflow:hidden;background-clip:padding-box}.lines.svelte-vhcw6{height:calc(var(--size) / 15);background-color:var(--color)}.small-lines.svelte-vhcw6{position:absolute;overflow:hidden;background-clip:padding-box;display:block;border-radius:2px;will-change:left, right;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.small-lines.\\31 .svelte-vhcw6{-webkit-animation:var(--duration) cubic-bezier(0.65, 0.815, 0.735, 0.395) 0s\r\n      infinite normal none running svelte-vhcw6-long;animation:var(--duration) cubic-bezier(0.65, 0.815, 0.735, 0.395) 0s\r\n      infinite normal none running svelte-vhcw6-long}.small-lines.\\32 .svelte-vhcw6{-webkit-animation:var(--duration) cubic-bezier(0.165, 0.84, 0.44, 1)\r\n      calc((var(--duration)+0.1) / 2) infinite normal none running svelte-vhcw6-short;animation:var(--duration) cubic-bezier(0.165, 0.84, 0.44, 1)\r\n      calc((var(--duration)+0.1) / 2) infinite normal none running svelte-vhcw6-short}@-webkit-keyframes svelte-vhcw6-long{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes svelte-vhcw6-long{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@-webkit-keyframes svelte-vhcw6-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}@keyframes svelte-vhcw6-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}")();
var Jumper_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-1cy66mt{width:var(--size);height:var(--size)}.circle.svelte-1cy66mt{border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;position:absolute;opacity:0;width:var(--size);height:var(--size);background-color:var(--color);-webkit-animation:svelte-1cy66mt-bounce var(--duration) linear infinite;animation:svelte-1cy66mt-bounce var(--duration) linear infinite}@-webkit-keyframes svelte-1cy66mt-bounce{0%{opacity:0;transform:scale(0)}5%{opacity:1}100%{opacity:0;transform:scale(1)}}@keyframes svelte-1cy66mt-bounce{0%{opacity:0;transform:scale(0)}5%{opacity:1}100%{opacity:0;transform:scale(1)}}")();
var RingLoader_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-17ey38u{position:relative;width:var(--size);height:var(--size)}.border.svelte-17ey38u{border-color:var(--color);position:absolute;top:0px;left:0px;width:var(--size);height:var(--size);opacity:0.4;perspective:800px;border-width:6px;border-style:solid;-o-border-image:initial;border-image:initial;border-radius:100%}.border.\\31 .svelte-17ey38u{-webkit-animation:var(--duration) linear 0s infinite normal none running svelte-17ey38u-ringOne;animation:var(--duration) linear 0s infinite normal none running svelte-17ey38u-ringOne}.border.\\32 .svelte-17ey38u{-webkit-animation:var(--duration) linear 0s infinite normal none running svelte-17ey38u-ringTwo;animation:var(--duration) linear 0s infinite normal none running svelte-17ey38u-ringTwo}@-webkit-keyframes svelte-17ey38u-ringOne{0%{transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}100%{transform:rotateX(360deg) rotateY(180deg) rotateZ(360deg)}}@keyframes svelte-17ey38u-ringOne{0%{transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}100%{transform:rotateX(360deg) rotateY(180deg) rotateZ(360deg)}}@-webkit-keyframes svelte-17ey38u-ringTwo{0%{transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}100%{transform:rotateX(180deg) rotateY(360deg) rotateZ(360deg)}}@keyframes svelte-17ey38u-ringTwo{0%{transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}100%{transform:rotateX(180deg) rotateY(360deg) rotateZ(360deg)}}")();
var SyncLoader_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-14w6xk7{height:var(--size);width:var(--size);display:flex;align-items:center;justify-content:center}.dot.svelte-14w6xk7{height:var(--dotSize);width:var(--dotSize);background-color:var(--color);margin:2px;display:inline-block;border-radius:100%;-webkit-animation:svelte-14w6xk7-sync var(--duration) ease-in-out infinite alternate both running;animation:svelte-14w6xk7-sync var(--duration) ease-in-out infinite alternate both running}@-webkit-keyframes svelte-14w6xk7-sync{33%{transform:translateY(10px)}66%{transform:translateY(-10px)}100%{transform:translateY(0)}}@keyframes svelte-14w6xk7-sync{33%{transform:translateY(10px)}66%{transform:translateY(-10px)}100%{transform:translateY(0)}}")();
var Rainbow_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-1fuumrt{width:var(--size);height:calc(var(--size) / 2);overflow:hidden}.rainbow.svelte-1fuumrt{width:var(--size);height:var(--size);border-left-color:transparent;border-bottom-color:transparent;border-top-color:var(--color);border-right-color:var(--color);box-sizing:border-box;transform:rotate(-200deg);border-radius:50%;border-style:solid;-webkit-animation:var(--duration) ease-in-out 0s infinite normal none running\r\n      svelte-1fuumrt-rotate;animation:var(--duration) ease-in-out 0s infinite normal none running\r\n      svelte-1fuumrt-rotate}@-webkit-keyframes svelte-1fuumrt-rotate{0%{border-width:10px}25%{border-width:3px}50%{transform:rotate(115deg);border-width:10px}75%{border-width:3px}100%{border-width:10px}}@keyframes svelte-1fuumrt-rotate{0%{border-width:10px}25%{border-width:3px}50%{transform:rotate(115deg);border-width:10px}75%{border-width:3px}100%{border-width:10px}}")();
var Wave_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-8cmcz4{position:relative;display:flex;justify-content:center;align-items:center;width:calc(var(--size) * 2.5);height:var(--size);overflow:hidden}.bar.svelte-8cmcz4{position:absolute;top:calc(var(--size) / 10);width:calc(var(--size) / 5);height:calc(var(--size) / 10);margin-top:calc(var(--size) - var(--size) / 10);transform:skewY(0deg);background-color:var(--color);-webkit-animation:svelte-8cmcz4-motion var(--duration) ease-in-out infinite;animation:svelte-8cmcz4-motion var(--duration) ease-in-out infinite}@-webkit-keyframes svelte-8cmcz4-motion{25%{transform:skewY(25deg)}50%{height:100%;margin-top:0}75%{transform:skewY(-25deg)}}@keyframes svelte-8cmcz4-motion{25%{transform:skewY(25deg)}50%{height:100%;margin-top:0}75%{transform:skewY(-25deg)}}")();
var Firework_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-1x2s7pr{width:calc(var(--size) * 1.3);height:calc(var(--size) * 1.3);display:flex;justify-content:center;align-items:center}.firework.svelte-1x2s7pr{border:calc(var(--size) / 10) dotted var(--color);width:var(--size);height:var(--size);border-radius:50%;-webkit-animation:svelte-1x2s7pr-fire var(--duration) cubic-bezier(0.165, 0.84, 0.44, 1) infinite;animation:svelte-1x2s7pr-fire var(--duration) cubic-bezier(0.165, 0.84, 0.44, 1) infinite}@-webkit-keyframes svelte-1x2s7pr-fire{0%{opacity:1;transform:scale(0.1)}25%{opacity:0.85}100%{transform:scale(1);opacity:0}}@keyframes svelte-1x2s7pr-fire{0%{opacity:1;transform:scale(0.1)}25%{opacity:0.85}100%{transform:scale(1);opacity:0}}")();
var Pulse_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-446r86{position:relative;display:flex;justify-content:center;align-items:center;width:var(--size);height:calc(var(--size) / 2.5)}.cube.svelte-446r86{position:absolute;top:0px;width:calc(var(--size) / 5);height:calc(var(--size) / 2.5);background-color:var(--color);-webkit-animation:svelte-446r86-motion var(--duration) cubic-bezier(0.895, 0.03, 0.685, 0.22)\r\n      infinite;animation:svelte-446r86-motion var(--duration) cubic-bezier(0.895, 0.03, 0.685, 0.22)\r\n      infinite}@-webkit-keyframes svelte-446r86-motion{0%{opacity:1}50%{opacity:0}100%{opacity:1}}@keyframes svelte-446r86-motion{0%{opacity:1}50%{opacity:0}100%{opacity:1}}")();
var Jellyfish_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-1v1mfqa{position:relative;display:flex;justify-content:center;align-items:center;width:var(--size);height:var(--size)}.ring.svelte-1v1mfqa{position:absolute;border:2px solid var(--color);border-radius:50%;background-color:transparent;-webkit-animation:svelte-1v1mfqa-motion var(--duration) ease infinite;animation:svelte-1v1mfqa-motion var(--duration) ease infinite}@-webkit-keyframes svelte-1v1mfqa-motion{0%{transform:translateY(var(--motionOne))}50%{transform:translateY(var(--motionTwo))}100%{transform:translateY(var(--motionThree))}}@keyframes svelte-1v1mfqa-motion{0%{transform:translateY(var(--motionOne))}50%{transform:translateY(var(--motionTwo))}100%{transform:translateY(var(--motionThree))}}")();
var Chasing_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-1unnvn6{height:var(--size);width:var(--size);display:flex;justify-content:center;align-items:center}.spinner.svelte-1unnvn6{height:var(--size);width:var(--size);-webkit-animation:svelte-1unnvn6-rotate var(--duration) infinite linear;animation:svelte-1unnvn6-rotate var(--duration) infinite linear}.dot.svelte-1unnvn6{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:var(--color);border-radius:100%;-webkit-animation:svelte-1unnvn6-bounce var(--duration) infinite ease-in-out;animation:svelte-1unnvn6-bounce var(--duration) infinite ease-in-out}@-webkit-keyframes svelte-1unnvn6-rotate{100%{transform:rotate(360deg)}}@keyframes svelte-1unnvn6-rotate{100%{transform:rotate(360deg)}}@-webkit-keyframes svelte-1unnvn6-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}@keyframes svelte-1unnvn6-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}")();
var Shadow_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-tycttu{position:relative;display:flex;justify-content:center;align-items:center;width:var(--size);height:var(--size)}.shadow.svelte-tycttu{color:var(--color);font-size:var(--size);overflow:hidden;width:var(--size);height:var(--size);border-radius:50%;margin:28px auto;position:relative;transform:translateZ(0);-webkit-animation:svelte-tycttu-load var(--duration) infinite ease,\r\n      svelte-tycttu-round var(--duration) infinite ease;animation:svelte-tycttu-load var(--duration) infinite ease,\r\n      svelte-tycttu-round var(--duration) infinite ease}@-webkit-keyframes svelte-tycttu-load{0%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,\r\n        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}5%,95%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,\r\n        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}10%,59%{box-shadow:0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,\r\n        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,\r\n        -0.297em -0.775em 0 -0.477em}20%{box-shadow:0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,\r\n        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,\r\n        -0.749em -0.34em 0 -0.477em}38%{box-shadow:0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,\r\n        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,\r\n        -0.82em -0.09em 0 -0.477em}100%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,\r\n        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}}@keyframes svelte-tycttu-load{0%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,\r\n        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}5%,95%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,\r\n        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}10%,59%{box-shadow:0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,\r\n        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,\r\n        -0.297em -0.775em 0 -0.477em}20%{box-shadow:0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,\r\n        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,\r\n        -0.749em -0.34em 0 -0.477em}38%{box-shadow:0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,\r\n        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,\r\n        -0.82em -0.09em 0 -0.477em}100%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,\r\n        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}}@-webkit-keyframes svelte-tycttu-round{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes svelte-tycttu-round{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")();
var Square_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".square.svelte-btmyrn{height:var(--size);width:var(--size);background-color:var(--color);-webkit-animation:svelte-btmyrn-squareDelay var(--duration) 0s infinite\r\n      cubic-bezier(0.09, 0.57, 0.49, 0.9);animation:svelte-btmyrn-squareDelay var(--duration) 0s infinite\r\n      cubic-bezier(0.09, 0.57, 0.49, 0.9);-webkit-animation-fill-mode:both;animation-fill-mode:both;perspective:100px;display:inline-block}@-webkit-keyframes svelte-btmyrn-squareDelay{25%{transform:rotateX(180deg) rotateY(0)}50%{transform:rotateX(180deg) rotateY(180deg)}75%{transform:rotateX(0) rotateY(180deg)}100%{transform:rotateX(0) rotateY(0)}}@keyframes svelte-btmyrn-squareDelay{25%{transform:rotateX(180deg) rotateY(0)}50%{transform:rotateX(180deg) rotateY(180deg)}75%{transform:rotateX(0) rotateY(180deg)}100%{transform:rotateX(0) rotateY(0)}}")();
var Moon_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-nlgli4{height:var(--size);width:var(--size);border-radius:100%;-webkit-animation:svelte-nlgli4-moonStretchDelay var(--duration) 0s infinite linear;animation:svelte-nlgli4-moonStretchDelay var(--duration) 0s infinite linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;position:relative}.circle-one.svelte-nlgli4{top:var(--moonSize);background-color:var(--color);width:calc(var(--size) / 7);height:calc(var(--size) / 7);border-radius:100%;-webkit-animation:svelte-nlgli4-moonStretchDelay var(--duration) 0s infinite linear;animation:svelte-nlgli4-moonStretchDelay var(--duration) 0s infinite linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;opacity:0.8;position:absolute}.circle-two.svelte-nlgli4{opacity:0.1;border:calc(var(--size) / 7) solid var(--color);height:var(--size);width:var(--size);border-radius:100%;box-sizing:border-box}@-webkit-keyframes svelte-nlgli4-moonStretchDelay{100%{transform:rotate(360deg)}}@keyframes svelte-nlgli4-moonStretchDelay{100%{transform:rotate(360deg)}}")();
var Plane_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".wrapper.svelte-1sqavxm.svelte-1sqavxm{height:var(--size);width:var(--size);position:relative;display:flex;justify-content:center;align-items:center}.wrapper.svelte-1sqavxm .svelte-1sqavxm{line-height:0;box-sizing:border-box}.spinner-inner.svelte-1sqavxm.svelte-1sqavxm{height:var(--size);width:var(--size);transform:scale(calc(var(--size) / 70))}.mask.svelte-1sqavxm.svelte-1sqavxm{position:absolute;border-radius:2px;overflow:hidden;perspective:1000;-webkit-backface-visibility:hidden;backface-visibility:hidden}.plane.svelte-1sqavxm.svelte-1sqavxm{background:var(--color);width:400%;height:100%;position:absolute;z-index:100;perspective:1000;-webkit-backface-visibility:hidden;backface-visibility:hidden}#top.svelte-1sqavxm .plane.svelte-1sqavxm{z-index:2000;-webkit-animation:svelte-1sqavxm-trans1 var(--duration) ease-in infinite 0s backwards;animation:svelte-1sqavxm-trans1 var(--duration) ease-in infinite 0s backwards}#middle.svelte-1sqavxm .plane.svelte-1sqavxm{transform:translate3d(0px, 0, 0);background:var(--rgba);-webkit-animation:svelte-1sqavxm-trans2 var(--duration) linear infinite calc(var(--duration) / 4)\r\n      backwards;animation:svelte-1sqavxm-trans2 var(--duration) linear infinite calc(var(--duration) / 4)\r\n      backwards}#bottom.svelte-1sqavxm .plane.svelte-1sqavxm{z-index:2000;-webkit-animation:svelte-1sqavxm-trans3 var(--duration) ease-out infinite\r\n      calc(var(--duration) / 2) backwards;animation:svelte-1sqavxm-trans3 var(--duration) ease-out infinite\r\n      calc(var(--duration) / 2) backwards}#top.svelte-1sqavxm.svelte-1sqavxm{width:53px;height:20px;left:20px;top:5px;transform:skew(-15deg, 0);z-index:100}#middle.svelte-1sqavxm.svelte-1sqavxm{width:33px;height:20px;left:20px;top:21px;transform:skew(-15deg, 40deg)}#bottom.svelte-1sqavxm.svelte-1sqavxm{width:53px;height:20px;top:35px;transform:skew(-15deg, 0)}@-webkit-keyframes svelte-1sqavxm-trans1{from{transform:translate3d(53px, 0, 0)}to{transform:translate3d(-250px, 0, 0)}}@keyframes svelte-1sqavxm-trans1{from{transform:translate3d(53px, 0, 0)}to{transform:translate3d(-250px, 0, 0)}}@-webkit-keyframes svelte-1sqavxm-trans2{from{transform:translate3d(-160px, 0, 0)}to{transform:translate3d(53px, 0, 0)}}@keyframes svelte-1sqavxm-trans2{from{transform:translate3d(-160px, 0, 0)}to{transform:translate3d(53px, 0, 0)}}@-webkit-keyframes svelte-1sqavxm-trans3{from{transform:translate3d(53px, 0, 0)}to{transform:translate3d(-220px, 0, 0)}}@keyframes svelte-1sqavxm-trans3{from{transform:translate3d(53px, 0, 0)}to{transform:translate3d(-220px, 0, 0)}}")();
var Diamonds_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "span.svelte-evhfle{width:var(--size);height:calc(var(--size) / 4);position:relative;display:block}div.svelte-evhfle{width:calc(var(--size) / 4);height:calc(var(--size) / 4);position:absolute;left:0;top:0;border-radius:2px;background:var(--color);transform:translateX(-50%) rotate(45deg) scale(0);-webkit-animation:svelte-evhfle-diamonds var(--duration) linear infinite;animation:svelte-evhfle-diamonds var(--duration) linear infinite}div.svelte-evhfle:nth-child(1){-webkit-animation-delay:calc(var(--duration) * 2 / 3 * -1);animation-delay:calc(var(--duration) * 2 / 3 * -1)}div.svelte-evhfle:nth-child(2){-webkit-animation-delay:calc(var(--duration) * 2 / 3 * -2);animation-delay:calc(var(--duration) * 2 / 3 * -2)}div.svelte-evhfle:nth-child(3){-webkit-animation-delay:calc(var(--duration) * 2 / 3 * -3);animation-delay:calc(var(--duration) * 2 / 3 * -3)}@-webkit-keyframes svelte-evhfle-diamonds{50%{left:50%;transform:translateX(-50%) rotate(45deg) scale(1)}100%{left:100%;transform:translateX(-50%) rotate(45deg) scale(0)}}@keyframes svelte-evhfle-diamonds{50%{left:50%;transform:translateX(-50%) rotate(45deg) scale(1)}100%{left:100%;transform:translateX(-50%) rotate(45deg) scale(0)}}")();
var Clock_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => 'div.svelte-1cgj772{position:relative;width:var(--size);height:var(--size);background-color:transparent;box-shadow:inset 0px 0px 0px 2px var(--color);border-radius:50%}div.svelte-1cgj772::before,div.svelte-1cgj772:after{position:absolute;content:"";background-color:var(--color)}div.svelte-1cgj772:after{width:calc(var(--size) / 2.4);height:2px;top:calc(var(--size) / 2);left:calc(var(--size) / 2);transform-origin:1px 1px;-webkit-animation:svelte-1cgj772-rotate calc(var(--duration) / 4) linear infinite;animation:svelte-1cgj772-rotate calc(var(--duration) / 4) linear infinite}div.svelte-1cgj772:before{width:calc(var(--size) / 3);height:2px;top:calc((var(--size) / 2));left:calc((var(--size) / 2));transform-origin:1px 1px;-webkit-animation:svelte-1cgj772-rotate var(--duration) linear infinite;animation:svelte-1cgj772-rotate var(--duration) linear infinite}@-webkit-keyframes svelte-1cgj772-rotate{100%{transform:rotate(360deg)}}@keyframes svelte-1cgj772-rotate{100%{transform:rotate(360deg)}}')();
const css$1 = {
  code: ".back_to_start.svelte-16snqin{opacity:1;transition:opacity 1s, visibility 1s;position:fixed;z-index:99;right:20px;user-select:none;bottom:20px;padding:5px}.back_to_start.hidden.svelte-16snqin{opacity:0;visibility:hidden}",
  map: null
};
const BackToTop = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let { buttonVisibleOnPX = 200 } = $$props;
  if ($$props.buttonVisibleOnPX === void 0 && $$bindings.buttonVisibleOnPX && buttonVisibleOnPX !== void 0)
    $$bindings.buttonVisibleOnPX(buttonVisibleOnPX);
  $$result.css.add(css$1);
  return `

<button class="${[
    "back_to_start btn btn-circle btn-info items-center font-bold w-14 h-14 svelte-16snqin",
    "hidden"
  ].join(" ").trim()}">
</button>`;
});
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "main.svelte-8cxlkp{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-8cxlkp{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}@media(min-width: 480px){footer.svelte-8cxlkp{padding:40px 0}}")();
const css = {
  code: "main.svelte-8cxlkp{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-8cxlkp{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}@media(min-width: 480px){footer.svelte-8cxlkp{padding:40px 0}}",
  map: null
};
const _layout = (0, import_index_c03cb5e3.c)(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = (0, import_index_c03cb5e3.a)(import_stores_d9555cbf.n, (value) => $navigating = value);
  $$result.css.add(css);
  $$unsubscribe_navigating();
  return `<div class="${"flex flex-col min-h-screen"}">${(0, import_index_c03cb5e3.v)(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"svelte-8cxlkp"}">
		${$navigating ? `<div class="${"flex flex-col justify-center items-center pt-60"}">${(0, import_index_c03cb5e3.v)(Circle2, "Circle2").$$render($$result, {
    size: "120",
    colorOuter: "#9A8866",
    colorCenter: "#786849",
    colorInner: "#CFA85F",
    unit: "px"
  }, {}, {})}
				<p class="${"pt-8"}"><i>Just loading a bit</i></p></div>` : `${slots.default ? slots.default({}) : ``}`}</main>

	${(0, import_index_c03cb5e3.v)(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}

	
	${!$navigating ? `<footer class="${"svelte-8cxlkp"}"><p>Made with wholesome memes</p></footer>` : ``}
</div>`;
});
