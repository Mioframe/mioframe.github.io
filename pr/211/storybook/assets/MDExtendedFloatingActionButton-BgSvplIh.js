import { d as x, u as v, o as z, p as h, w as k, b as n, m as r, i, h as c, V as A, $ as B, y as l } from "./iframe-DDkSuJan.js";
import "./fab-BM7C4Glz.js";
import { _ as y } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const $ = { color: "primary-container", size: "small" }, w = ["size", "variant"], C = x({ inheritAttrs: false, __name: "MDExtendedFloatingActionButton", props: B({ size: {}, color: {} }, $), emits: ["click"], setup(d, { emit: m }) {
  const o = d, u = m, f = { slot: "label" }, s = v(), p = (t) => {
    u("click", t);
  }, _ = l(() => o.color), b = l(() => `md-extended-floating-action-button_color_${o.color}`), g = () => {
    const t = {};
    for (const [e, a] of Object.entries(s)) (e === "id" || e === "title" || e.startsWith("data-")) && (t[e] = a);
    return t;
  };
  return (t, e) => (z(), h(A, { appear: "", name: "md-extended-floating-action-button-appear" }, { default: k(() => [n("m3e-fab", r(g(), { class: ["md-extended-floating-action-button", `md-extended-floating-action-button_size_${o.size}`, b.value, i(s).class], style: i(s).style, extended: true, size: o.size, variant: _.value, onClick: p }), [c(t.$slots, "icon", {}, void 0, true), n("span", r(f, { class: "md-extended-floating-action-button__label" }), [c(t.$slots, "default", {}, void 0, true)], 16)], 16, w)]), _: 3 }));
} }), V = y(C, [["__scopeId", "data-v-9d12ad9f"]]);
export {
  V as M
};
