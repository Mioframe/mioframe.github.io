import { J as g, d as j, N as K, C as O, B as z, e, c as N, b as _, f as v, j as p, n as I, a as F, O as J, P as W, h as d, i as S, o as s } from "./iframe-C_blFvN6.js";
import { M as L } from "./MDSymbol-w4aMWdmy.js";
import { i as A } from "./isUndefined-Dgw4-efh.js";
import { u as G, a as H, M as Q } from "./useStateLayer-DJo0QLAw.js";
import { s as X } from "./uniqueId-DdQxRsxT.js";
import { M as R } from "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-CregFK2G.js";
import "./useOverlay-DI3Ipj3N.js";
import { _ as Y } from "./_plugin-vue_export-helper-DlAUqK2U.js";
function T(a) {
  return a == null;
}
const E = (a, r) => r ? a ? void 0 : a !== void 0 : !a, B = (a, r) => ({ toggleBoolean: () => {
  a.value = E(a.value, g(r));
} });
B.__docgenInfo = Object.assign({ displayName: B.name ?? B.__name }, { exportName: "useBooleanEdit", displayName: "useBooleanEdit", type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "boolean | undefined", schema: "boolean | undefined", declarations: [] }, { name: "__@RefSymbol@299", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", schema: "true", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Checkbox/toggleBoolean.ts" });
const Z = { class: "md md-checkbox__container" }, $ = ["for", "tabindex", "aria-label"], ee = ["id", "disabled", "aria-label"], ae = { class: "md md-checkbox__container" }, te = j({ __name: "MDCheckbox", props: { error: { type: Boolean }, disabled: { type: Boolean }, indeterminate: { type: Boolean }, modelValue: { type: Boolean, default: void 0 }, id: { default: () => X("checkbox") }, readonly: { type: Boolean }, tooltip: {}, ariaLabel: {}, autofocus: { type: Boolean }, tabIndex: { default: 0 }, presentation: { type: Boolean } }, emits: ["update:modelValue", "click"], setup(a, { emit: r }) {
  const c = a, h = r, { error: C, disabled: o, indeterminate: u, modelValue: V, presentation: n, readonly: m } = K(c), t = d({ get: () => u.value ? V.value : !!V.value, set: (l) => {
    h("update:modelValue", l);
  } }), b = d(() => t.value === void 0 ? "remove" : t.value ? "check" : void 0), q = (l) => {
    n.value || o.value || (l.preventDefault(), h("click"), !m.value && (t.value = E(t.value, g(u))));
  }, k = S("inputEl");
  O(() => {
    k.value && (k.value.indeterminate = u.value && A(t.value));
  });
  const P = (l) => {
    if (n.value) return;
    const { key: i } = l;
    ["Enter", " "].includes(i) && (o.value || (l.preventDefault(), h("click"), !m.value && (t.value = E(t.value, g(u)))));
  }, f = S("checkboxEl"), { hover: w, focused: M, durationPressedState: D } = G(f), U = d(() => o.value ? -1 : c.tabIndex), x = d(() => !o.value);
  return H(d(() => !n.value && !o.value ? f.value : void 0)), z([f, () => c.autofocus, o], ([l, i, y]) => {
    i && l && !y && l.focus();
  }, { immediate: true }), (l, i) => e(n) ? (s(), N("div", { key: 0, class: I(["md-checkbox", { "md-checkbox_selected": t.value === true, "md-checkbox_indeterminate": e(T)(t.value), "md-checkbox_error": e(C), "md-checkbox_disabled": e(o), "md-checkbox_presentation": e(n), "md-checkbox_readonly": e(m) }]), "aria-hidden": "true" }, [_("div", Z, [b.value ? (s(), v(e(L), { key: 0, class: "md-checkbox__icon", name: b.value }, null, 8, ["name"])) : p("", true)]), a.tooltip ? (s(), v(e(R), { key: 0, text: a.tooltip }, null, 8, ["text"])) : p("", true)], 2)) : (s(), N("label", { key: 1, ref_key: "checkboxEl", ref: f, for: a.id, class: I(["md-checkbox", { "md-checkbox_selected": t.value === true, "md-checkbox_indeterminate": e(T)(t.value), "md-checkbox_error": e(C), "md-checkbox_disabled": e(o), "md-checkbox_presentation": e(n), "md-checkbox_readonly": e(m), "md-state_hover": x.value && e(w), "md-state_focused": x.value && e(M), "md-state_pressed": x.value && e(D), "md-state_disabled": e(o) }]), tabindex: U.value, "aria-label": a.tooltip ?? a.ariaLabel, onClick: q, onKeydown: P }, [F(e(Q), { hover: e(w), focused: e(M), pressed: e(D), disabled: e(o) }, null, 8, ["hover", "focused", "pressed", "disabled"]), J(_("input", { id: a.id, ref_key: "inputEl", ref: k, "onUpdate:modelValue": i[0] || (i[0] = (y) => t.value = y), type: "checkbox", disabled: e(o), "aria-label": a.ariaLabel, class: "md-checkbox__input", tabindex: "-1" }, null, 8, ee), [[W, t.value]]), _("div", ae, [b.value ? (s(), v(e(L), { key: 0, class: "md-checkbox__icon", name: b.value }, null, 8, ["name"])) : p("", true)]), a.tooltip ? (s(), v(e(R), { key: 0, text: a.tooltip }, null, 8, ["text"])) : p("", true)], 42, $));
} }), ue = Y(te, [["__scopeId", "data-v-3f1fbd09"]]);
export {
  ue as M
};
