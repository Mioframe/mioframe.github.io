import { d as _, D as m, c as u, p as f, e as r, h as i, o as I } from "./iframe-Ck9zoa4y.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_2d47c860_lang-BUZKk2H1.js";
import { _ as h } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const A = ["aria-label"], b = 24, g = 240, v = 48, E = 38 / 48, M = _({ inheritAttrs: false, __name: "MDLoadingIndicator", props: { label: {}, size: { default: 48 } }, setup(c) {
  const a = c, s = i(() => Number.isFinite(a.size) ? Math.min(g, Math.max(b, a.size)) : v), d = i(() => s.value * E), l = i(() => ({ width: `${s.value}px`, height: `${s.value}px`, "--m3e-loading-indicator-size": `${d.value}px` })), o = m(), p = () => {
    const t = {};
    for (const [e, n] of Object.entries(o)) (e === "id" || e === "title" || e === "aria-hidden" || e === "aria-describedby" || e.startsWith("data-")) && (t[e] = n);
    return t;
  };
  return (t, e) => (I(), u("m3e-loading-indicator", f(p(), { class: ["md-loading-indicator", r(o).class], "aria-label": a.label, style: [r(o).style, l.value] }), null, 16, A));
} }), y = h(M, [["__scopeId", "data-v-2d47c860"]]);
export {
  y as M
};
