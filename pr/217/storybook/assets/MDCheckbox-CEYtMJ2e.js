import { d as m, u, c as h, m as b, i as r, y as k, o as _ } from "./iframe-Dv1Ds16a.js";
import { M as x } from "./MDCheckbox.vue_vue_type_style_index_0_scoped_45affbd6_lang-BcMr9jHw.js";
import { _ as y } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const B = ["checked", "indeterminate", "disabled"], g = m({ inheritAttrs: false, __name: "MDCheckbox", props: { checked: { type: Boolean, default: false }, indeterminate: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, presentation: { type: Boolean, default: false } }, emits: ["update:checked", "update:indeterminate"], setup(c, { emit: d }) {
  const a = c, n = d, i = (e) => {
    e.target instanceof x && (a.presentation || (e.preventDefault(), n("update:checked", !e.target.checked), n("update:indeterminate", false)));
  }, s = u(), l = k(() => a.presentation ? { "aria-hidden": "true", tabindex: -1 } : {}), p = () => {
    const e = {};
    for (const [t, o] of Object.entries(s)) (t === "id" || t === "title" || t === "aria-label" || t === "aria-labelledby" || t.startsWith("data-")) && (e[t] = o);
    return e;
  }, f = () => ({ ...p(), ...l.value });
  return (e, t) => (_(), h("m3e-checkbox", b(f(), { class: ["md-checkbox", { "md-checkbox_presentation": a.presentation }, r(s).class], style: r(s).style, checked: a.checked, indeterminate: a.indeterminate, disabled: a.disabled, onBeforeinput: i }), null, 16, B));
} }), D = y(g, [["__scopeId", "data-v-45affbd6"]]);
export {
  D as M
};
