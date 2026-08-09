import { l as U, G as $, r as A, s as I, d as P, D as R, B as V, p as q, f as w, g as b, A as T, E as S, u as a, t as O, c as z, h as G, J as H, n as Z, j, o as h } from "./iframe-BmKBn1Mu.js";
import { a as J } from "./index-CTAbr4nr.js";
import { s as B } from "./uniqueId-Chqrr24i.js";
import { u as K } from "./useFocusTrap-Ci7JbyrG.js";
import { u as Q, a as W } from "./main-s0GXXqFc.js";
import { M as F } from "./MDButton-CoUSI009.js";
import "./MDLoadingIndicator-BuA6LzDW.js";
import { i as x } from "./isUndefined-Dgw4-efh.js";
import { d as X, t as Y, e as ee } from "./index-CROe5JIw.js";
import "./useOverlay-DJ1otShK.js";
import { _ as ae } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
const oe = X(() => {
  const i = $(/* @__PURE__ */ new Set()), t = [];
  let s;
  const o = () => {
    if (!x(s)) return;
    const e = t.shift();
    x(e) || (s = e, i.add(e));
  }, l = async (e, n) => await new Promise((k) => {
    const D = B("dialog");
    let f = false;
    const g = (c) => {
      f || s !== r || (f = true, i.delete(r), s = void 0, k(c), o());
    }, r = { type: e, id: D, headline: n.headline, supportingText: n.supportingText, confirmLabel: n.confirmLabel, cancelLabel: n.cancelLabel, callback: g, symbolName: n.symbolName };
    t.push(r), o();
  }), u = async (e) => await l("confirm", e), _ = async (e) => await l("alert", e), m = A(0), v = I();
  return { alert: _, confirm: u, alertSet: i, numberOfOpenDialogs: m, globalDialogContainer: v };
}), te = (i) => {
  const { numberOfOpenDialogs: t, globalDialogContainer: s } = oe();
  let o = false;
  return U(i, (l, u) => {
    l && !o ? (t.value += 1, o = true) : !l && !x(u) && o && (t.value -= 1, o = false);
  }, { immediate: true, flush: "sync" }), Y(() => {
    o && (t.value -= 1, o = false);
  }), { dialogContainer: s };
}, se = ["aria-labelledby", "aria-hidden"], le = ["aria-busy"], ie = { key: 0, class: "md-dialog__icon" }, ne = ["id"], re = { class: "md-dialog__supporting-text" }, ce = { key: 1, class: "md-dialog__body" }, de = { class: "md-dialog__actions" }, ue = P({ __name: "DialogForm", props: { headline: {}, supportingText: {}, type: { default: "basic" }, cancelLabel: { default: "Cancel" }, applyLabel: {}, hasCancelAction: { type: Boolean }, loading: { type: Boolean }, class: {} }, emits: ["cancel", "apply"], setup(i, { emit: t }) {
  const s = i, o = t, l = R(), { applyLabel: u, cancelLabel: _, hasCancelAction: m, headline: v, loading: e, supportingText: n, type: k, class: D } = V(s), f = J(), g = A(true);
  te(g);
  const r = B("dialogTitle"), c = j("formEl"), L = () => {
    const d = c.value;
    if (!d) throw new Error("DialogForm focus trap is active without its form container");
    return d;
  }, { activate: E, deactivate: N } = K(c, { allowOutsideClick: true, fallbackFocus: L });
  q(() => {
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
  }), (d, me) => (h(), w("dialog", { open: "", class: Z(["md-dialog md-dialog__scrim", [{ "md-dialog_has-icon": !!d.$slots.icon }, `md-dialog_${a(k)}-type`, a(D)]]), "aria-labelledby": a(r), "aria-hidden": a(f) }, [b("form", { ref_key: "formEl", ref: c, class: "md md-dialog__container", tabindex: "-1", "aria-busy": a(e) ? "true" : void 0, onSubmit: H(M, ["prevent"]) }, [l.icon ? (h(), w("div", ie, [T(d.$slots, "icon", {}, void 0, true)])) : S("", true), b("div", { id: a(r), class: "md-dialog__headline" }, O(a(v)), 9, ne), b("div", re, O(a(n)), 1), l.default ? (h(), w("div", ce, [T(d.$slots, "default", {}, void 0, true)])) : S("", true), b("div", de, [a(m) ? (h(), z(a(F), { key: 0, label: a(_), color: "text", disabled: a(e), onClick: C }, null, 8, ["label", "disabled"])) : S("", true), G(a(F), { label: a(u), color: "text", disabled: a(e), "native-type": "submit" }, null, 8, ["label", "disabled"])])], 40, le)], 10, se));
} }), pe = ae(ue, [["__scopeId", "data-v-f59891b9"]]), Te = { title: "Shared/Dialog/DialogForm", component: pe, parameters: { layout: "fullscreen" }, args: { headline: "Confirm", supportingText: "Apply the change?", applyLabel: "Apply" } }, y = {}, p = { args: { hasCancelAction: true, loading: true } };
y.parameters = { ...y.parameters, docs: { ...y.parameters?.docs, source: { originalSource: "{}", ...y.parameters?.docs?.source } } };
p.parameters = { ...p.parameters, docs: { ...p.parameters?.docs, source: { originalSource: `{
  args: {
    hasCancelAction: true,
    loading: true
  }
}`, ...p.parameters?.docs?.source }, description: { story: "`loading` disables every rendered action control (both apply and cancel),\nleaving zero tabbable elements in the dialog body: the exact condition\nthat requires the form's own `fallbackFocus` for the real focus trap to\nactivate instead of throwing. Used by the Storybook browser behavior spec\nproving real focus-trap fallback behavior.", ...p.parameters?.docs?.description } } };
const Oe = ["Playground", "ZeroTabbableActions"];
export {
  y as Playground,
  p as ZeroTabbableActions,
  Oe as __namedExportsOrder,
  Te as default
};
