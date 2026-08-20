import { d as s, j as a, o as l, c as i, s as n, i as d, t as m } from "./iframe-O6XwQGQr.js";
import { u as c } from "./useReorderItem-CMNKS0H5.js";
import { _ as f } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const p = ["aria-label"], u = s({ __name: "ReorderSelfScrollableStoryItem", props: { itemId: {}, index: {}, snap: { type: Boolean } }, setup(e) {
  const o = e, r = a("root"), { isDragging: t } = c({ id: () => o.itemId, index: () => o.index, element: () => r.value ?? void 0, handle: () => r.value ?? void 0 });
  return (_, I) => (l(), i("div", { ref: "root", role: "listitem", "aria-label": e.itemId, class: n(["reorder-self-scrollable-story-item", { "reorder-self-scrollable-story-item_dragging": d(t), "reorder-self-scrollable-story-item_snap": e.snap !== false }]) }, m(e.itemId), 11, p));
} }), S = f(u, [["__scopeId", "data-v-5291510c"]]);
export {
  S as R
};
