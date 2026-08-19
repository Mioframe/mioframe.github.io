import { d as c, r as p, c as d, b as r, a as m, w as u, i as _, o as a, F as f, f as v, p as w } from "./iframe-Qwr1WlLg.js";
import { _ as h } from "./useReorderItem-BVfXHrtT.js";
import { R as y } from "./ReorderSelfScrollableStoryItem-DRRUthfA.js";
import { _ as b } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
const g = { class: "reorder-document-viewport-story-harness" }, x = { role: "region", "aria-label": "Reorder scroll ancestor", class: "reorder-document-viewport-story-harness__ancestor" }, R = { role: "list", "aria-label": "Document viewport reorder items", class: "reorder-document-viewport-story-harness__container" }, S = c({ __name: "ReorderDocumentViewportStoryHarness", setup(D) {
  const t = p(Array.from({ length: 20 }, (s, e) => `row-${e}`)), i = (s) => {
    t.value = [...s.orderedIds];
  };
  return (s, e) => (a(), d("div", g, [e[1] || (e[1] = r("p", null, "document viewport autoscroll fallback fixture", -1)), e[2] || (e[2] = r("div", { class: "reorder-document-viewport-story-harness__page-spacer-top", "aria-hidden": "true" }, null, -1)), r("div", x, [e[0] || (e[0] = r("div", { class: "reorder-document-viewport-story-harness__ancestor-spacer-top", "aria-hidden": "true" }, null, -1)), m(_(h), { "item-ids": t.value, onReorder: i }, { default: u(() => [r("div", R, [(a(true), d(f, null, v(t.value, (n, l) => (a(), w(y, { key: n, "item-id": n, index: l }, null, 8, ["item-id", "index"]))), 128))])]), _: 1 }, 8, ["item-ids"])]), e[3] || (e[3] = r("div", { class: "reorder-document-viewport-story-harness__page-spacer-bottom", "aria-hidden": "true" }, null, -1))]));
} }), k = b(S, [["__scopeId", "data-v-0a4cd260"]]), A = { title: "shared/lib/reorder/ReorderDocumentViewportStoryHarness", component: k, parameters: { layout: "padded" } }, o = {};
o.parameters = { ...o.parameters, docs: { ...o.parameters?.docs, source: { originalSource: "{}", ...o.parameters?.docs?.source }, description: { story: `A dedicated fixture proving the full autoscroll fallback chain: the reorder container's own
overflow, its scrollable ancestor's overflow, and the real document viewport, each with
independent scroll room. No screenshot coverage applies here; the library owns no visual
contract.`, ...o.parameters?.docs?.description } } };
const C = ["Default"];
export {
  o as Default,
  C as __namedExportsOrder,
  A as default
};
