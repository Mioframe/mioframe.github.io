import { d as m, r as u, f as c, g as r, n as f, h as _, w as b, u as y, o as l, F as h, i as v, c as S } from "./iframe-Dq4fvMGb.js";
import { _ as g } from "./useReorderItem-BVwbDNIa.js";
import { R as w } from "./ReorderSelfScrollableStoryItem-BPtYjSPd.js";
import { _ as x } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
const B = { class: "reorder-self-scrollable-story-harness" }, R = { role: "region", "aria-label": "Reorder scroll ancestor", class: "reorder-self-scrollable-story-harness__ancestor" }, C = { role: "list", "aria-label": "Self-scrollable reorder items", class: "reorder-self-scrollable-story-harness__container" }, k = m({ __name: "ReorderSelfScrollableStoryHarness", props: { clipped: { type: Boolean } }, setup(n) {
  const a = u(Array.from({ length: 20 }, (t, e) => `row-${e}`)), d = (t) => {
    a.value = [...t.orderedIds];
  };
  return (t, e) => (l(), c("div", B, [e[1] || (e[1] = r("p", null, "self-scrollable reorder container fixture", -1)), r("div", R, [r("div", { class: f(["reorder-self-scrollable-story-harness__ancestor-spacer-top", { "reorder-self-scrollable-story-harness__ancestor-spacer-top_clipped": n.clipped }]), "aria-hidden": "true" }, null, 2), _(y(g), { "item-ids": a.value, onReorder: d }, { default: b(() => [r("div", C, [(l(true), c(h, null, v(a.value, (i, p) => (l(), S(w, { key: i, "item-id": i, index: p, snap: !n.clipped }, null, 8, ["item-id", "index", "snap"]))), 128))])]), _: 1 }, 8, ["item-ids"]), e[0] || (e[0] = r("div", { class: "reorder-self-scrollable-story-harness__ancestor-spacer-bottom", "aria-hidden": "true" }, null, -1))])]));
} }), A = x(k, [["__scopeId", "data-v-227949ee"]]), F = { title: "shared/lib/reorder/ReorderSelfScrollableStoryHarness", component: A, parameters: { layout: "padded" } }, s = {}, o = { args: { clipped: true } };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: "{}", ...s.parameters?.docs?.source }, description: { story: `A dedicated fixture whose reorder container itself scrolls (\`overflow: auto\`) and sits inside
an outer scrollable ancestor that also has its own scroll room, used by Playwright to verify
visibility-first ownership between the outer surface position and inner content overflow. No
screenshot coverage applies here; the library owns no visual contract.`, ...s.parameters?.docs?.description } } };
o.parameters = { ...o.parameters, docs: { ...o.parameters?.docs, source: { originalSource: `{
  args: {
    clipped: true
  }
}`, ...o.parameters?.docs?.source }, description: { story: "The inner reorder container begins substantially clipped below the ancestor's visible edge.", ...o.parameters?.docs?.description } } };
const V = ["Default", "ClippedByAncestor"];
export {
  o as ClippedByAncestor,
  s as Default,
  V as __namedExportsOrder,
  F as default
};
