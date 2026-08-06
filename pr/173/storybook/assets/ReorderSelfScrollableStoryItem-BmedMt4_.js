import { d as a, o as s, f as l, n as i, u as n, t as d, j as m } from "./iframe-xlZKd4aF.js";
import { u as c } from "./useReorderItem-Dln0iRCL.js";
import { _ as f } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const p = ["aria-label"], u = a({ __name: "ReorderSelfScrollableStoryItem", props: { itemId: {}, index: {}, snap: { type: Boolean } }, setup(e) {
  const o = e, r = m("root"), { isDragging: t } = c({ id: () => o.itemId, index: () => o.index, element: () => r.value ?? void 0, handle: () => r.value ?? void 0 });
  return (_, I) => (s(), l("div", { ref: "root", role: "listitem", "aria-label": e.itemId, class: i(["reorder-self-scrollable-story-item", { "reorder-self-scrollable-story-item_dragging": n(t), "reorder-self-scrollable-story-item_snap": e.snap !== false }]) }, d(e.itemId), 11, p));
} }), S = f(u, [["__scopeId", "data-v-5291510c"]]);
export {
  S as R
};
