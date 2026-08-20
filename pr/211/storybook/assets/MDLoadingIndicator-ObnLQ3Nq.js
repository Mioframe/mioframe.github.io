import { d as _, u as p, c as u, m as f, i as r, y as i, o as I } from "./iframe-DOC4TUDo.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_fd42f7e0_lang-ScYAOCNP.js";
import { _ as h } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const A = ["aria-label"], b = 24, g = 240, v = 48, E = 38 / 48, M = _({ inheritAttrs: false, __name: "MDLoadingIndicator", props: { label: {}, size: { default: 48 } }, setup(c) {
  const a = c, s = i(() => Number.isFinite(a.size) ? Math.min(g, Math.max(b, a.size)) : v), d = i(() => s.value * E), l = i(() => ({ width: `${s.value}px`, height: `${s.value}px`, "--m3e-loading-indicator-size": `${d.value}px` })), o = p(), m = () => {
    const t = {};
    for (const [e, n] of Object.entries(o)) (e === "id" || e === "title" || e === "aria-hidden" || e === "aria-describedby" || e.startsWith("data-")) && (t[e] = n);
    return t;
  };
  return (t, e) => (I(), u("m3e-loading-indicator", f(m(), { class: ["md-loading-indicator", r(o).class], "aria-label": a.label, style: [r(o).style, l.value] }), null, 16, A));
} }), S = h(M, [["__scopeId", "data-v-fd42f7e0"]]);
export {
  S as M
};
