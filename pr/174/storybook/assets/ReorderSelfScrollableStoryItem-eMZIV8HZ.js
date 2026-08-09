import { d as a, i as s, o as l, c as i, n, e as d, t as m } from "./iframe-KtfoL3fw.js";
import { u as c } from "./useReorderItem-BRrROm0N.js";
import { _ as f } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const p = ["aria-label"], u = a({ __name: "ReorderSelfScrollableStoryItem", props: { itemId: {}, index: {}, snap: { type: Boolean } }, setup(e) {
  const o = e, r = s("root"), { isDragging: t } = c({ id: () => o.itemId, index: () => o.index, element: () => r.value ?? void 0, handle: () => r.value ?? void 0 });
  return (_, I) => (l(), i("div", { ref: "root", role: "listitem", "aria-label": e.itemId, class: n(["reorder-self-scrollable-story-item", { "reorder-self-scrollable-story-item_dragging": d(t), "reorder-self-scrollable-story-item_snap": e.snap !== false }]) }, m(e.itemId), 11, p));
} }), S = f(u, [["__scopeId", "data-v-5291510c"]]);
export {
  S as R
};
