import { d, u as k, D as z, c as S, f as c, w as D, e as o, j as M, b as x, t as C, p as w, h as s, o as r, g as N, Z as A } from "./iframe-B7XlbVyG.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_10bb3159_lang-Bw0aXhD5.js";
import { M as I } from "./MDLoadingIndicator-DRlP_Dyk.js";
import { _ as T } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const V = ["aria-busy", "disabled", "size", "type", "variant"], j = { class: "md-button__label-text" }, L = d({ inheritAttrs: false, __name: "MDButton", props: { nativeType: { default: "button" }, color: { default: "filled" }, label: {}, disabled: { type: Boolean }, size: { default: "small" }, loading: { type: Boolean } }, emits: ["click"], setup(u, { emit: p }) {
  const a = u, m = p, b = k(), f = d({ name: "MDButtonSlottedContent", props: { slotName: { type: String, required: true } }, setup(t, { slots: e }) {
    return () => A("span", { slot: t.slotName }, e.default?.());
  } }), n = s(() => !!a.loading), _ = s(() => a.color), y = s(() => a.size), v = s(() => a.nativeType), g = s(() => ({ "extra-small": 24, small: 24 })[a.size]), h = (t) => {
    m("click", t);
  }, l = z(), B = () => {
    const t = {};
    for (const [e, i] of Object.entries(l)) (e === "id" || e === "title" || e === "aria-controls" || e === "aria-describedby" || e === "aria-expanded" || e === "aria-haspopup" || e.startsWith("data-")) && (t[e] = i);
    return t;
  };
  return (t, e) => (r(), S("m3e-button", w(B(), { class: ["md-button", o(l).class], style: o(l).style, "aria-busy": n.value ? "true" : void 0, disabled: a.disabled, shape: "rounded", size: y.value, toggle: false, type: v.value, variant: _.value, onClick: h }), [n.value || b.icon ? (r(), c(o(f), { key: 0, class: "md-button__icon", "slot-name": "icon" }, { default: D(() => [n.value ? (r(), c(o(I), { key: 0, class: "md-button__loading-indicator", "aria-hidden": "true", label: a.label, size: g.value }, null, 8, ["label", "size"])) : N(t.$slots, "icon", {}, void 0, true, 1)]), _: 3 })) : M("", true), x("span", j, C(a.label), 1)], 16, V));
} }), P = T(L, [["__scopeId", "data-v-10bb3159"]]);
export {
  P as M
};
