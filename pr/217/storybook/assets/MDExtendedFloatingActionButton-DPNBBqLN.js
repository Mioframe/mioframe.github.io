import { d as x, u as v, o as z, p as h, w as k, b as n, m as r, i, h as c, V as A, a3 as B, y as l } from "./iframe-D7zZOFbE.js";
import "./fab-BM7C4Glz.js";
import { _ as y } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const w = { color: "primary-container", size: "small" }, C = ["size", "variant"], D = x({ inheritAttrs: false, __name: "MDExtendedFloatingActionButton", props: B({ size: {}, color: {} }, w), emits: ["click"], setup(d, { emit: m }) {
  const o = d, u = m, f = { slot: "label" }, a = v(), p = (t) => {
    u("click", t);
  }, _ = l(() => o.color), b = l(() => `md-extended-floating-action-button_color_${o.color}`), g = () => {
    const t = {};
    for (const [e, s] of Object.entries(a)) (e === "id" || e === "title" || e.startsWith("data-")) && (t[e] = s);
    return t;
  };
  return (t, e) => (z(), h(A, { appear: "", name: "md-extended-floating-action-button-appear" }, { default: k(() => [n("m3e-fab", r(g(), { class: ["md-extended-floating-action-button", `md-extended-floating-action-button_size_${o.size}`, b.value, i(a).class], style: i(a).style, extended: true, size: o.size, variant: _.value, onClick: p }), [c(t.$slots, "icon", {}, void 0, true), n("span", r(f, { class: "md-extended-floating-action-button__label" }), [c(t.$slots, "default", {}, void 0, true)], 16)], 16, C)]), _: 3 }));
} }), V = y(D, [["__scopeId", "data-v-9d12ad9f"]]);
export {
  V as M
};
