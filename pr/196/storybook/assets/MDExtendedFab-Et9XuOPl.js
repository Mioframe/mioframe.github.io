import { d as M, k as D, j as E, o as s, c as p, a as z, i as e, p as d, h as B, q as i, b as P, t as L, s as f, y as o } from "./iframe-D-D37Lk_.js";
import { M as N, a as T, b as n } from "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-C45UlKYX.js";
import "./useOverlay-DCJeQa-J.js";
import { u as F, a as I, M as V } from "./useStateLayer-CGFClYxV.js";
import { M as $ } from "./MDSymbol-B7NY5YzM.js";
import { _ as R } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const j = ["aria-label"], q = { key: 0, class: "md-extended-fab__icon" }, w = M({ __name: "MDExtendedFab", props: { size: { default: "small" }, color: { default: "primary-container" }, label: {}, tooltip: {}, loading: { type: [Number, Boolean] }, mdSymbol: {} }, emits: ["click"], setup(t, { emit: y }) {
  const a = t, g = y, _ = D(), k = o(() => `md-extended-fab_size_${a.size}`), v = o(() => `md-extended-fab_color_${a.color}`), c = o(() => a.loading !== void 0 && a.loading !== false), h = o(() => typeof a.loading == "number" ? a.loading : void 0), x = o(() => c.value || !!(a.mdSymbol || _.icon)), S = o(() => {
    switch (a.size) {
      case "small":
        return n.title.medium;
      case "medium":
        return n.title.large;
      case "large":
        return n.headline.small;
      default:
        return n.title.medium;
    }
  }), C = (l) => {
    l.stopPropagation(), g("click", l);
  }, r = E("buttonEl"), { hover: m, focused: u, durationPressedState: b } = F(r);
  return I(r), (l, A) => (s(), p("button", { ref_key: "buttonEl", ref: r, type: "button", "aria-label": t.tooltip ?? t.label, class: f(["md-extended-fab", [k.value, v.value, { "md-state_hover": e(m), "md-state_focused": e(u), "md-state_pressed": e(b) }]]), onClick: C }, [z(e(V), { hover: e(m), focused: e(u), pressed: e(b) }, null, 8, ["hover", "focused", "pressed"]), x.value ? (s(), p("span", q, [c.value ? (s(), d(e(N), { key: 0, class: "md-extended-fab__progress-indicator", progress: h.value }, null, 8, ["progress"])) : B(l.$slots, "icon", {}, () => [t.mdSymbol ? (s(), d(e($), { key: 0, name: t.mdSymbol }, null, 8, ["name"])) : i("", true)], true, 1)])) : i("", true), P("span", { class: f(["md-extended-fab__label", S.value]) }, L(t.label), 3), t.tooltip ? (s(), d(e(T), { key: 1, text: t.tooltip }, null, 8, ["text"])) : i("", true)], 10, j));
} }), U = R(w, [["__scopeId", "data-v-47e30c47"]]);
export {
  U as M
};
