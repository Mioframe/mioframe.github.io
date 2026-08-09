import { d as R, S as G, D as A, B as J, l as g, c as m, u as t, w as B, T as N, j as L, o as s, h as W, f as C, g as y, t as Q, n as D, A as k, E as w, k as X, V as Z, r as H, b as d, p as V } from "./iframe-BmKBn1Mu.js";
import { M as ee } from "./MDCircularProgressIndicator-DOisiz-R.js";
import { M as te } from "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-B1Q_jGFY.js";
import { M as z } from "./typography-C_Z8eobQ.js";
import { u as oe, k as I, l as ae, f as P, g as se } from "./index-CROe5JIw.js";
import { o as le } from "./onInteractionOutside-C4f8P7lC.js";
import { u as ie, _ as ne, a as de, o as re, f as ue, s as ce } from "./floating-ui.vue-C3Ysfbvu.js";
import { u as me } from "./useOverlay-DJ1otShK.js";
import { b as pe, c as fe } from "./main-s0GXXqFc.js";
import { _ as j } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { M as ve } from "./MDSymbol-BfB6TF8u.js";
import { u as he, a as be, M as _e } from "./useStateLayer-DalrK0pL.js";
const ge = { key: 0, class: "md-rich-tooltip__actions" }, ye = R({ __name: "MDRichTooltip", props: N({ subhead: {}, disabledTeleport: { type: Boolean }, targetElement: {}, useClick: { type: Boolean }, useHover: { type: Boolean }, placement: { default: "top-end" } }, { show: { type: Boolean }, showModifiers: {} }), emits: N(["interactionOutside"], ["update:show"]), setup(i, { emit: T }) {
  const e = G(i, "show"), M = i, S = T, E = A(), { subhead: r, targetElement: p, useClick: f, useHover: v, placement: u } = J(M), h = oe(), n = d(() => se(p.value ?? h.value)), l = me(), b = I(n), F = d(() => v.value && (b.value || K.value)), c = L("tooltipEl"), K = I(c), U = ae(F, 1500), _ = H(false);
  P(n, "click", () => {
    f.value && (_.value = true);
  });
  const a = H(false);
  le(c, (o) => {
    a.value && (S("interactionOutside", o), _.value = false);
  });
  const $ = g(a, (o) => {
    x.pause(), e.value = o, V(x.resume);
  }), x = g(e, (o) => {
    $.pause(), a.value = o ?? false, V($.resume);
  }, { immediate: true });
  g(_, (o) => {
    a.value = o;
  }), g(U, (o) => {
    a.value = o;
  });
  const O = () => {
    _.value = false, a.value = false;
  };
  pe(a, () => (O(), false)), fe(a, () => (O(), false));
  const { floatingStyles: Y, update: q } = ie(n, c, { strategy: "fixed", transform: false, placement: u, middleware: [re(({ rects: o }) => ({ alignmentAxis: -o.floating.width - 8, mainAxis: 8 })), ue({ padding: 16 }), ce({ padding: 16 })], whileElementsMounted: de });
  return P(window.visualViewport, "resize", q), (o, Se) => (s(), m(t(ne), { to: t(l), disabled: i.disabledTeleport, container: c.value }, { default: B(() => [W(Z, null, { default: B(() => [a.value ? (s(), C("div", { key: 0, ref_key: "tooltipEl", ref: c, class: "md md-rich-tooltip", style: X(t(Y)) }, [y("div", { class: D(["md-rich-tooltip__subhead", t(z).title.small]) }, Q(t(r)), 3), y("div", { class: D(["md-rich-tooltip__supporting-text", t(z).body.medium]) }, [k(o.$slots, "text", {}, void 0, true)], 2), E.actions ? (s(), C("div", ge, [k(o.$slots, "actions", {}, void 0, true)])) : w("", true)], 4)) : w("", true)]), _: 3 })]), _: 3 }, 8, ["to", "disabled", "container"]));
} }), ke = j(ye, [["__scopeId", "data-v-989eed3c"]]), we = ["disabled", "type", "aria-label", "aria-pressed"], Te = { class: "md-icon-button__icon" }, Me = R({ __name: "MDIconButton", props: { nativeType: { default: "button" }, color: { default: "filled" }, disabled: { type: Boolean }, loading: { type: [Number, Boolean] }, tooltip: {}, showTooltipOnClick: { type: Boolean }, mdSymbolName: {}, variant: { default: "default" }, selected: { type: Boolean }, size: { default: "small" }, width: { default: "default" }, shape: { default: "round" } }, emits: ["click"], setup(i, { emit: T }) {
  const e = i, M = T, S = A(), E = (l) => {
    l.stopPropagation(), M("click", l);
  }, r = L("buttonEl"), { hover: p, focused: f, durationPressedState: v } = he(r), u = d(() => !e.disabled), h = d(() => e.variant === "toggle"), n = d(() => h.value && !!e.selected);
  return be(d(() => e.disabled ? void 0 : r.value)), (l, b) => (s(), C("button", { ref_key: "buttonEl", ref: r, disabled: i.disabled, type: e.nativeType, class: D(["md-icon-button", [`md-icon-button_color-${e.color}`, `md-icon-button_variant-${e.variant}`, `md-icon-button_size-${e.size}`, `md-icon-button_width-${e.width}`, `md-icon-button_shape-${e.shape}`, { "md-icon-button_selected": n.value, "md-icon-button_loading": e.loading !== void 0 && e.loading !== false, "md-state_hover": u.value && t(p), "md-state_focused": u.value && t(f), "md-state_pressed": u.value && t(v), "md-state_disabled": e.disabled }]]), "aria-label": e.tooltip, "aria-pressed": h.value ? n.value : void 0, onClick: E }, [b[0] || (b[0] = y("span", { class: "md-icon-button__target", "aria-hidden": "true" }, null, -1)), W(t(_e), { hover: t(p), focused: t(f), pressed: t(v), disabled: e.disabled }, null, 8, ["hover", "focused", "pressed", "disabled"]), y("span", Te, [k(l.$slots, "icon", {}, () => [e.mdSymbolName ? (s(), m(t(ve), { key: 0, name: e.mdSymbolName }, null, 8, ["name"])) : w("", true)], true)]), e.loading !== void 0 && e.loading !== false ? (s(), m(t(ee), { key: 0, class: "md-icon-button__progress-indicator", progress: e.loading === true ? 0 : e.loading }, null, 8, ["progress"])) : w("", true), S.richTooltipContent ? (s(), m(t(ke), { key: 1, subhead: e.tooltip, "use-hover": "", "use-click": e.showTooltipOnClick }, { text: B(() => [k(l.$slots, "richTooltipContent", {}, void 0, true)]), _: 3 }, 8, ["subhead", "use-click"])) : (s(), m(t(te), { key: 2, text: e.tooltip }, null, 8, ["text"]))], 10, we));
} }), Pe = j(Me, [["__scopeId", "data-v-fbc4a709"]]);
export {
  Pe as M,
  ke as a
};
