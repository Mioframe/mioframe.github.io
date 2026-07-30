import { d as l, o as d, f as n, k as w, n as _, u as p, t as f, j as y, g as h, h as v, w as x, r as I, F as S, i as b, c as R } from "./iframe-Dbwnn8Sj.js";
import { u as k, _ as W } from "./useReorderItem-CRVc7kM9.js";
import { _ as u } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
const z = ["aria-label"], $ = l({ __name: "ReorderWrapStoryItem", props: { itemId: {}, index: {}, width: {}, height: {} }, setup(e) {
  const r = e, t = y("root"), { isDragging: a } = k({ id: () => r.itemId, index: () => r.index, element: () => t.value ?? void 0, handle: () => t.value ?? void 0 });
  return (c, s) => (d(), n("div", { ref: "root", role: "listitem", "aria-label": e.itemId, class: _(["reorder-wrap-story-item", { "reorder-wrap-story-item_dragging": p(a) }]), style: w({ width: `${e.width}px`, height: `${e.height}px` }) }, f(e.itemId), 15, z));
} }), B = u($, [["__scopeId", "data-v-d13176b4"]]), D = { class: "reorder-wrap-story-harness" }, E = { role: "list", "aria-label": "Wrapping reorder items", class: "reorder-wrap-story-harness__container" }, C = l({ __name: "ReorderWrapStoryHarness", setup(e) {
  const r = { "wrap-item-0": { width: 100, height: 40 }, "wrap-item-1": { width: 140, height: 60 }, "wrap-item-2": { width: 80, height: 50 }, "wrap-item-3": { width: 120, height: 40 }, "wrap-item-4": { width: 100, height: 60 }, "wrap-item-5": { width: 140, height: 50 } }, t = (s) => r[s] ?? { width: 100, height: 40 }, a = I(Object.keys(r)), c = (s) => {
    a.value = [...s.orderedIds];
  };
  return (s, m) => (d(), n("div", D, [m[0] || (m[0] = h("p", null, "wrapping/grid reorder fixture: mixed item sizes, movement across rows", -1)), v(p(W), { "item-ids": a.value, onReorder: c }, { default: x(() => [h("div", E, [(d(true), n(S, null, b(a.value, (o, g) => (d(), R(B, { key: o, "item-id": o, index: g, width: t(o).width, height: t(o).height }, null, 8, ["item-id", "index", "width", "height"]))), 128))])]), _: 1 }, 8, ["item-ids"])]));
} }), H = u(C, [["__scopeId", "data-v-67baaef2"]]), T = { title: "shared/lib/reorder/ReorderWrapStoryHarness", component: H, parameters: { layout: "padded" } }, i = {};
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: "{}", ...i.parameters?.docs?.source }, description: { story: `A narrow flex-wrap container with mixed-size items, used by Playwright to verify
\`ReorderSurface\` supports non-linear layouts: a drag can move an item across rows in either
direction, and the dragged item stays bounded by its direct parent container regardless of
layout direction. No screenshot coverage applies here; the library owns no visual contract.`, ...i.parameters?.docs?.description } } };
const V = ["Default"];
export {
  i as Default,
  V as __namedExportsOrder,
  T as default
};
