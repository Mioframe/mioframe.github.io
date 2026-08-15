import { d as C, u as D, i as E, o as s, c as b, a as z, e, f as d, g as B, j as i, b as P, t as L, n as f, h as o } from "./iframe-B7XlbVyG.js";
import { M as n } from "./typography-C_Z8eobQ.js";
import { M as N, a as T } from "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-UCKQfPVB.js";
import "./useOverlay-HRXiFoV9.js";
import { u as F, a as I, M as V } from "./useStateLayer-pwmgCppS.js";
import { M as $ } from "./MDSymbol-fEEWrMp6.js";
import { _ as R } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const j = ["aria-label"], w = { key: 0, class: "md-extended-fab__icon" }, A = C({ __name: "MDExtendedFab", props: { size: { default: "small" }, color: { default: "primary-container" }, label: {}, tooltip: {}, loading: { type: [Number, Boolean] }, mdSymbol: {} }, emits: ["click"], setup(t, { emit: y }) {
  const a = t, g = y, _ = D(), v = o(() => `md-extended-fab_size_${a.size}`), h = o(() => `md-extended-fab_color_${a.color}`), c = o(() => a.loading !== void 0 && a.loading !== false), k = o(() => typeof a.loading == "number" ? a.loading : void 0), x = o(() => c.value || !!(a.mdSymbol || _.icon)), M = o(() => {
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
  }), S = (l) => {
    l.stopPropagation(), g("click", l);
  }, r = E("buttonEl"), { hover: m, focused: u, durationPressedState: p } = F(r);
  return I(r), (l, Y) => (s(), b("button", { ref_key: "buttonEl", ref: r, type: "button", "aria-label": t.tooltip ?? t.label, class: f(["md-extended-fab", [v.value, h.value, { "md-state_hover": e(m), "md-state_focused": e(u), "md-state_pressed": e(p) }]]), onClick: S }, [z(e(V), { hover: e(m), focused: e(u), pressed: e(p) }, null, 8, ["hover", "focused", "pressed"]), x.value ? (s(), b("span", w, [c.value ? (s(), d(e(N), { key: 0, class: "md-extended-fab__progress-indicator", progress: k.value }, null, 8, ["progress"])) : B(l.$slots, "icon", {}, () => [t.mdSymbol ? (s(), d(e($), { key: 0, name: t.mdSymbol }, null, 8, ["name"])) : i("", true)], true, 1)])) : i("", true), P("span", { class: f(["md-extended-fab__label", M.value]) }, L(t.label), 3), t.tooltip ? (s(), d(e(T), { key: 1, text: t.tooltip }, null, 8, ["text"])) : i("", true)], 10, j));
} }), W = R(A, [["__scopeId", "data-v-47e30c47"]]);
export {
  W as M
};
