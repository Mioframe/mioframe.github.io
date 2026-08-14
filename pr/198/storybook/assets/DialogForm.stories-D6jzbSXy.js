import { B as U, m as $, r as A, C as I, d as P, u as R, A as V, E as q, c as w, b, g as T, j as S, e as a, t as O, f as z, a as G, G as H, n as Z, i as j, o as h } from "./iframe-BU9uQS1c.js";
import { u as K } from "./index-DPksiQYk.js";
import { s as B } from "./uniqueId-Cfnkv7CY.js";
import { u as J } from "./useFocusTrap-BjeVP6ib.js";
import { u as Q, a as W } from "./main-CJBz0Dqr.js";
import { M as F } from "./MDButton-CqZWd5e7.js";
import "./MDCheckbox.vue_vue_type_style_index_0_scoped_45affbd6_lang-BnnKqJOG.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_2d47c860_lang-BUZKk2H1.js";
import "./MDSwitch.vue_vue_type_style_index_0_scoped_579f9506_lang-DIWY0hb6.js";
import { i as x } from "./isUndefined-Dgw4-efh.js";
import { c as X, t as Y, b as ee } from "./index-DO0pPyO6.js";
import "./useOverlay-VmiOKXlv.js";
import { _ as ae } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_10bb3159_lang-Be9CuhxN.js";
import "./core-T_lF-iKZ.js";
import "./MDLoadingIndicator-I5395mlJ.js";
const oe = X(() => {
  const l = $(/* @__PURE__ */ new Set()), t = [];
  let s;
  const o = () => {
    if (!x(s)) return;
    const e = t.shift();
    x(e) || (s = e, l.add(e));
  }, i = async (e, r) => await new Promise((k) => {
    const D = B("dialog");
    let f = false;
    const g = (c) => {
      f || s !== n || (f = true, l.delete(n), s = void 0, k(c), o());
    }, n = { type: e, id: D, headline: r.headline, supportingText: r.supportingText, confirmLabel: r.confirmLabel, cancelLabel: r.cancelLabel, callback: g, symbolName: r.symbolName };
    t.push(n), o();
  }), u = async (e) => await i("confirm", e), _ = async (e) => await i("alert", e), p = A(0), v = I();
  return { alert: _, confirm: u, alertSet: l, numberOfOpenDialogs: p, globalDialogContainer: v };
}), te = (l) => {
  const { numberOfOpenDialogs: t, globalDialogContainer: s } = oe();
  let o = false;
  return U(l, (i, u) => {
    i && !o ? (t.value += 1, o = true) : !i && !x(u) && o && (t.value -= 1, o = false);
  }, { immediate: true, flush: "sync" }), Y(() => {
    o && (t.value -= 1, o = false);
  }), { dialogContainer: s };
}, se = ["aria-labelledby", "aria-hidden"], ie = ["aria-busy"], le = { key: 0, class: "md-dialog__icon" }, re = ["id"], ne = { class: "md-dialog__supporting-text" }, ce = { key: 1, class: "md-dialog__body" }, de = { class: "md-dialog__actions" }, ue = P({ __name: "DialogForm", props: { headline: {}, supportingText: {}, type: { default: "basic" }, cancelLabel: { default: "Cancel" }, applyLabel: {}, hasCancelAction: { type: Boolean }, loading: { type: Boolean }, class: {} }, emits: ["cancel", "apply"], setup(l, { emit: t }) {
  const s = l, o = t, i = R(), { applyLabel: u, cancelLabel: _, hasCancelAction: p, headline: v, loading: e, supportingText: r, type: k, class: D } = V(s), f = K(), g = A(true);
  te(g);
  const n = B("dialogTitle"), c = j("formEl"), L = () => {
    const d = c.value;
    if (!d) throw new Error("DialogForm focus trap is active without its form container");
    return d;
  }, { activate: E, deactivate: N } = J(c, { allowOutsideClick: true, fallbackFocus: L });
  q(() => {
    c.value && E();
  }), ee(() => {
    g.value = false, N();
  });
  const M = () => {
    e.value || o("apply");
  }, C = () => {
    !e.value && p.value && o("cancel");
  };
  return Q(() => (C(), false)), W(() => {
    C();
  }), (d, pe) => (h(), w("dialog", { open: "", class: Z(["md-dialog md-dialog__scrim", [{ "md-dialog_has-icon": !!d.$slots.icon }, `md-dialog_${a(k)}-type`, a(D)]]), "aria-labelledby": a(n), "aria-hidden": a(f) }, [b("form", { ref_key: "formEl", ref: c, class: "md md-dialog__container", tabindex: "-1", "aria-busy": a(e) ? "true" : void 0, onSubmit: H(M, ["prevent"]) }, [i.icon ? (h(), w("div", le, [T(d.$slots, "icon", {}, void 0, true)])) : S("", true), b("div", { id: a(n), class: "md-dialog__headline" }, O(a(v)), 9, re), b("div", ne, O(a(r)), 1), i.default ? (h(), w("div", ce, [T(d.$slots, "default", {}, void 0, true)])) : S("", true), b("div", de, [a(p) ? (h(), z(a(F), { key: 0, label: a(_), color: "text", disabled: a(e), onClick: C }, null, 8, ["label", "disabled"])) : S("", true), G(a(F), { label: a(u), color: "text", disabled: a(e), "native-type": "submit" }, null, 8, ["label", "disabled"])])], 40, ie)], 10, se));
} }), me = ae(ue, [["__scopeId", "data-v-f59891b9"]]), Le = { title: "Shared/Dialog/DialogForm", component: me, parameters: { layout: "fullscreen" }, args: { headline: "Confirm", supportingText: "Apply the change?", applyLabel: "Apply" } }, y = {}, m = { args: { hasCancelAction: true, loading: true } };
y.parameters = { ...y.parameters, docs: { ...y.parameters?.docs, source: { originalSource: "{}", ...y.parameters?.docs?.source } } };
m.parameters = { ...m.parameters, docs: { ...m.parameters?.docs, source: { originalSource: `{
  args: {
    hasCancelAction: true,
    loading: true
  }
}`, ...m.parameters?.docs?.source }, description: { story: "`loading` disables every rendered action control (both apply and cancel),\nleaving zero tabbable elements in the dialog body: the exact condition\nthat requires the form's own `fallbackFocus` for the real focus trap to\nactivate instead of throwing. Used by the Storybook browser behavior spec\nproving real focus-trap fallback behavior.", ...m.parameters?.docs?.description } } };
const Ee = ["Playground", "ZeroTabbableActions"];
export {
  y as Playground,
  m as ZeroTabbableActions,
  Ee as __namedExportsOrder,
  Le as default
};
