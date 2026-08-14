import { C as U, g as $, r as B, D as q, d as I, u as P, B as R, E as V, c as w, b, i as T, q as S, j as a, t as O, p as z, a as G, G as H, s as Z, k as j, o as h } from "./iframe-CHPDa0j6.js";
import { u as K } from "./index-Cxb7Yx9S.js";
import { s as A } from "./uniqueId-BwagBYY5.js";
import { u as J } from "./useFocusTrap-DTzpSsC6.js";
import { u as Q, a as W } from "./main-BR_gFKX2.js";
import { M as F } from "./MDButton-Cb-uTzhf.js";
import "./MDCheckbox.vue_vue_type_style_index_0_scoped_45affbd6_lang-BnnKqJOG.js";
import "./MDFab.vue_vue_type_style_index_0_scoped_a3282281_lang-dAAf79jX.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_2d47c860_lang-BUZKk2H1.js";
import "./MDSwitch.vue_vue_type_style_index_0_scoped_579f9506_lang-DIWY0hb6.js";
import { i as x } from "./isUndefined-Dgw4-efh.js";
import { c as X, t as Y, b as ee } from "./index-Cbs5MwuF.js";
import "./useOverlay-ZFvR1ITu.js";
import { _ as ae } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_10bb3159_lang-Be9CuhxN.js";
import "./core-T_lF-iKZ.js";
import "./MDLoadingIndicator-D4voOaTo.js";
const oe = X(() => {
  const l = $(/* @__PURE__ */ new Set()), t = [];
  let s;
  const o = () => {
    if (!x(s)) return;
    const e = t.shift();
    x(e) || (s = e, l.add(e));
  }, i = async (e, r) => await new Promise((k) => {
    const D = A("dialog");
    let f = false;
    const g = (c) => {
      f || s !== n || (f = true, l.delete(n), s = void 0, k(c), o());
    }, n = { type: e, id: D, headline: r.headline, supportingText: r.supportingText, confirmLabel: r.confirmLabel, cancelLabel: r.cancelLabel, callback: g, symbolName: r.symbolName };
    t.push(n), o();
  }), u = async (e) => await i("confirm", e), _ = async (e) => await i("alert", e), m = B(0), v = q();
  return { alert: _, confirm: u, alertSet: l, numberOfOpenDialogs: m, globalDialogContainer: v };
}), te = (l) => {
  const { numberOfOpenDialogs: t, globalDialogContainer: s } = oe();
  let o = false;
  return U(l, (i, u) => {
    i && !o ? (t.value += 1, o = true) : !i && !x(u) && o && (t.value -= 1, o = false);
  }, { immediate: true, flush: "sync" }), Y(() => {
    o && (t.value -= 1, o = false);
  }), { dialogContainer: s };
}, se = ["aria-labelledby", "aria-hidden"], ie = ["aria-busy"], le = { key: 0, class: "md-dialog__icon" }, re = ["id"], ne = { class: "md-dialog__supporting-text" }, ce = { key: 1, class: "md-dialog__body" }, de = { class: "md-dialog__actions" }, ue = I({ __name: "DialogForm", props: { headline: {}, supportingText: {}, type: { default: "basic" }, cancelLabel: { default: "Cancel" }, applyLabel: {}, hasCancelAction: { type: Boolean }, loading: { type: Boolean }, class: {} }, emits: ["cancel", "apply"], setup(l, { emit: t }) {
  const s = l, o = t, i = P(), { applyLabel: u, cancelLabel: _, hasCancelAction: m, headline: v, loading: e, supportingText: r, type: k, class: D } = R(s), f = K(), g = B(true);
  te(g);
  const n = A("dialogTitle"), c = j("formEl"), L = () => {
    const d = c.value;
    if (!d) throw new Error("DialogForm focus trap is active without its form container");
    return d;
  }, { activate: E, deactivate: N } = J(c, { allowOutsideClick: true, fallbackFocus: L });
  V(() => {
    c.value && E();
  }), ee(() => {
    g.value = false, N();
  });
  const M = () => {
    e.value || o("apply");
  }, C = () => {
    !e.value && m.value && o("cancel");
  };
  return Q(() => (C(), false)), W(() => {
    C();
  }), (d, me) => (h(), w("dialog", { open: "", class: Z(["md-dialog md-dialog__scrim", [{ "md-dialog_has-icon": !!d.$slots.icon }, `md-dialog_${a(k)}-type`, a(D)]]), "aria-labelledby": a(n), "aria-hidden": a(f) }, [b("form", { ref_key: "formEl", ref: c, class: "md md-dialog__container", tabindex: "-1", "aria-busy": a(e) ? "true" : void 0, onSubmit: H(M, ["prevent"]) }, [i.icon ? (h(), w("div", le, [T(d.$slots, "icon", {}, void 0, true)])) : S("", true), b("div", { id: a(n), class: "md-dialog__headline" }, O(a(v)), 9, re), b("div", ne, O(a(r)), 1), i.default ? (h(), w("div", ce, [T(d.$slots, "default", {}, void 0, true)])) : S("", true), b("div", de, [a(m) ? (h(), z(a(F), { key: 0, label: a(_), color: "text", disabled: a(e), onClick: C }, null, 8, ["label", "disabled"])) : S("", true), G(a(F), { label: a(u), color: "text", disabled: a(e), "native-type": "submit" }, null, 8, ["label", "disabled"])])], 40, ie)], 10, se));
} }), pe = ae(ue, [["__scopeId", "data-v-f59891b9"]]), Ee = { title: "Shared/Dialog/DialogForm", component: pe, parameters: { layout: "fullscreen" }, args: { headline: "Confirm", supportingText: "Apply the change?", applyLabel: "Apply" } }, y = {}, p = { args: { hasCancelAction: true, loading: true } };
y.parameters = { ...y.parameters, docs: { ...y.parameters?.docs, source: { originalSource: "{}", ...y.parameters?.docs?.source } } };
p.parameters = { ...p.parameters, docs: { ...p.parameters?.docs, source: { originalSource: `{
  args: {
    hasCancelAction: true,
    loading: true
  }
}`, ...p.parameters?.docs?.source }, description: { story: "`loading` disables every rendered action control (both apply and cancel),\nleaving zero tabbable elements in the dialog body: the exact condition\nthat requires the form's own `fallbackFocus` for the real focus trap to\nactivate instead of throwing. Used by the Storybook browser behavior spec\nproving real focus-trap fallback behavior.", ...p.parameters?.docs?.description } } };
const Ne = ["Playground", "ZeroTabbableActions"];
export {
  y as Playground,
  p as ZeroTabbableActions,
  Ne as __namedExportsOrder,
  Ee as default
};
