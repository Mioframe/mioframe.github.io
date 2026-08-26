import { d, k as B, u as z, c as S, p as c, w as M, i as o, q as x, b as C, t as D, m as w, y as s, o as r, h as N, a1 as A } from "./iframe-Ba0w1CUJ.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_4eb981d2_lang-DV1aMrhv.js";
import { M as I } from "./MDLoadingIndicator-D2LDWIBI.js";
import { _ as T } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const V = ["aria-busy", "disabled", "size", "type", "variant"], q = { class: "md-button__label-text" }, L = d({ inheritAttrs: false, __name: "MDButton", props: { nativeType: { default: "button" }, color: { default: "filled" }, label: {}, disabled: { type: Boolean }, size: { default: "small" }, loading: { type: Boolean } }, emits: ["click"], setup(u, { emit: p }) {
  const a = u, m = p, b = B(), _ = d({ name: "MDButtonSlottedContent", props: { slotName: { type: String, required: true } }, setup(t, { slots: e }) {
    return () => A("span", { slot: t.slotName }, e.default?.());
  } }), n = s(() => !!a.loading), f = s(() => a.color), y = s(() => a.size), v = s(() => a.nativeType), g = s(() => ({ "extra-small": 24, small: 24 })[a.size]), h = (t) => {
    m("click", t);
  }, l = z(), k = () => {
    const t = {};
    for (const [e, i] of Object.entries(l)) (e === "id" || e === "title" || e === "aria-controls" || e === "aria-describedby" || e === "aria-expanded" || e === "aria-haspopup" || e.startsWith("data-")) && (t[e] = i);
    return t;
  };
  return (t, e) => (r(), S("m3e-button", w(k(), { class: ["md-button", o(l).class], style: o(l).style, "aria-busy": n.value ? "true" : void 0, disabled: a.disabled, shape: "rounded", size: y.value, toggle: false, type: v.value, variant: f.value, onClick: h }), [n.value || b.icon ? (r(), c(o(_), { key: 0, class: "md-button__icon", "slot-name": "icon" }, { default: M(() => [n.value ? (r(), c(o(I), { key: 0, class: "md-button__loading-indicator", "aria-hidden": "true", label: a.label, size: g.value }, null, 8, ["label", "size"])) : N(t.$slots, "icon", {}, void 0, true, 1)]), _: 3 })) : x("", true), C("span", q, D(a.label), 1)], 16, V));
} }), P = T(L, [["__scopeId", "data-v-4eb981d2"]]);
export {
  P as M
};
