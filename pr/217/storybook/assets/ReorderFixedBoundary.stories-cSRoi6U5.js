import { d as c, r as u, c as i, b as r, a as p, w as m, i as f, o as a, F as _, f as y, p as x } from "./iframe-BYE7UI1S.js";
import { _ as b } from "./useReorderItem-EqqaELTr.js";
import { R as h } from "./ReorderSelfScrollableStoryItem-YUEebech.js";
import { _ as v } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
const w = { class: "reorder-fixed-boundary-story-harness" }, g = { role: "region", "aria-label": "Reorder scroll ancestor", class: "reorder-fixed-boundary-story-harness__ancestor" }, R = { class: "reorder-fixed-boundary-story-harness__fixed-surface" }, S = { role: "list", "aria-label": "Fixed boundary reorder items", class: "reorder-fixed-boundary-story-harness__container" }, k = c({ __name: "ReorderFixedBoundaryStoryHarness", setup(F) {
  const s = u(Array.from({ length: 10 }, (t, e) => `row-${e}`)), d = (t) => {
    s.value = [...t.orderedIds];
  };
  return (t, e) => (a(), i("div", w, [e[1] || (e[1] = r("p", null, " position: fixed reorder surface fixture whose containing block is a transformed ancestor, not the browser viewport \u2014 the ancestor's own scroll must still be able to participate in autoscroll ", -1)), r("div", g, [e[0] || (e[0] = r("div", { class: "reorder-fixed-boundary-story-harness__ancestor-spacer-top", "aria-hidden": "true" }, null, -1)), r("div", R, [p(f(b), { "item-ids": s.value, onReorder: d }, { default: m(() => [r("div", S, [(a(true), i(_, null, y(s.value, (n, l) => (a(), x(h, { key: n, "item-id": n, index: l, snap: false }, null, 8, ["item-id", "index"]))), 128))])]), _: 1 }, 8, ["item-ids"])])])]));
} }), B = v(k, [["__scopeId", "data-v-c78e4da6"]]), D = { title: "shared/lib/reorder/ReorderFixedBoundaryStoryHarness", component: B, parameters: { layout: "padded" } }, o = {};
o.parameters = { ...o.parameters, docs: { ...o.parameters?.docs, source: { originalSource: "{}", ...o.parameters?.docs?.source }, description: { story: "A dedicated fixture proving `getReorderScrollCandidates` does not mistake a `position: fixed`\nelement for a viewport-fixed boundary when its actual containing block is a transformed\nancestor: that ancestor's own scroll must still be able to participate in autoscroll. No\nscreenshot coverage applies here; the library owns no visual contract.", ...o.parameters?.docs?.description } } };
const E = ["Default"];
export {
  o as Default,
  E as __namedExportsOrder,
  D as default
};
