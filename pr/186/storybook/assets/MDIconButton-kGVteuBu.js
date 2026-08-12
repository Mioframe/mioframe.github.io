import { d as R, U as q, u as A, A as G, i as L, B as g, o as s, f as m, e as t, w as B, a as W, X as J, c as C, v as Q, b as y, n as $, t as Z, g as k, j as w, V as N, h as d, r as H, E as V } from "./iframe-Covb6gfZ.js";
import { M as ee } from "./MDCircularProgressIndicator-SGG_415M.js";
import { M as te } from "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-2kxlWOfe.js";
import { M as z } from "./typography-C_Z8eobQ.js";
import { d as oe, l as I, m as ae, u as P, e as se } from "./index-DV98pJdi.js";
import { o as le } from "./onInteractionOutside-C5lvoqJy.js";
import { u as ie, a as ne, _ as de, o as re, f as ue, s as ce, M as me } from "./MDSymbol-Bc9BYxuO.js";
import { u as pe } from "./useOverlay-BpcsWOwI.js";
import { b as fe, c as ve } from "./main-CJ5bdIwz.js";
import { _ as U } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { u as he, a as be, M as _e } from "./useStateLayer-DMWio8DL.js";
const ge = { key: 0, class: "md-rich-tooltip__actions" }, ye = R({ __name: "MDRichTooltip", props: N({ subhead: {}, disabledTeleport: { type: Boolean }, targetElement: {}, useClick: { type: Boolean }, useHover: { type: Boolean }, placement: { default: "top-end" } }, { show: { type: Boolean }, showModifiers: {} }), emits: N(["interactionOutside"], ["update:show"]), setup(i, { emit: M }) {
  const e = q(i, "show"), T = i, E = M, S = A(), { subhead: r, targetElement: p, useClick: f, useHover: v, placement: u } = G(T), h = oe(), n = d(() => se(p.value ?? h.value)), l = pe(), b = I(n), j = d(() => v.value && (b.value || F.value)), c = L("tooltipEl"), F = I(c), K = ae(j, 1500), _ = H(false);
  P(n, "click", () => {
    f.value && (_.value = true);
  });
  const a = H(false);
  le(c, (o) => {
    a.value && (E("interactionOutside", o), _.value = false);
  });
  const D = g(a, (o) => {
    x.pause(), e.value = o, V(x.resume);
  }), x = g(e, (o) => {
    D.pause(), a.value = o ?? false, V(D.resume);
  }, { immediate: true });
  g(_, (o) => {
    a.value = o;
  }), g(K, (o) => {
    a.value = o;
  });
  const O = () => {
    _.value = false, a.value = false;
  };
  fe(a, () => (O(), false)), ve(a, () => (O(), false));
  const { floatingStyles: X, update: Y } = ie(n, c, { strategy: "fixed", transform: false, placement: u, middleware: [re(({ rects: o }) => ({ alignmentAxis: -o.floating.width - 8, mainAxis: 8 })), ue({ padding: 16 }), ce({ padding: 16 })], whileElementsMounted: ne });
  return P(window.visualViewport, "resize", Y), (o, Ee) => (s(), m(t(de), { to: t(l), disabled: i.disabledTeleport, container: c.value }, { default: B(() => [W(J, null, { default: B(() => [a.value ? (s(), C("div", { key: 0, ref_key: "tooltipEl", ref: c, class: "md md-rich-tooltip", style: Q(t(X)) }, [y("div", { class: $(["md-rich-tooltip__subhead", t(z).title.small]) }, Z(t(r)), 3), y("div", { class: $(["md-rich-tooltip__supporting-text", t(z).body.medium]) }, [k(o.$slots, "text", {}, void 0, true)], 2), S.actions ? (s(), C("div", ge, [k(o.$slots, "actions", {}, void 0, true)])) : w("", true)], 4)) : w("", true)]), _: 3 })]), _: 3 }, 8, ["to", "disabled", "container"]));
} }), ke = U(ye, [["__scopeId", "data-v-989eed3c"]]), we = ["disabled", "type", "aria-label", "aria-pressed"], Me = { class: "md-icon-button__icon" }, Te = R({ __name: "MDIconButton", props: { nativeType: { default: "button" }, color: { default: "filled" }, disabled: { type: Boolean }, loading: { type: [Number, Boolean] }, tooltip: {}, showTooltipOnClick: { type: Boolean }, mdSymbolName: {}, variant: { default: "default" }, selected: { type: Boolean }, size: { default: "small" }, width: { default: "default" }, shape: { default: "round" } }, emits: ["click"], setup(i, { emit: M }) {
  const e = i, T = M, E = A(), S = (l) => {
    l.stopPropagation(), T("click", l);
  }, r = L("buttonEl"), { hover: p, focused: f, durationPressedState: v } = he(r), u = d(() => !e.disabled), h = d(() => e.variant === "toggle"), n = d(() => h.value && !!e.selected);
  return be(d(() => e.disabled ? void 0 : r.value)), (l, b) => (s(), C("button", { ref_key: "buttonEl", ref: r, disabled: i.disabled, type: e.nativeType, class: $(["md-icon-button", [`md-icon-button_color-${e.color}`, `md-icon-button_variant-${e.variant}`, `md-icon-button_size-${e.size}`, `md-icon-button_width-${e.width}`, `md-icon-button_shape-${e.shape}`, { "md-icon-button_selected": n.value, "md-icon-button_loading": e.loading !== void 0 && e.loading !== false, "md-state_hover": u.value && t(p), "md-state_focused": u.value && t(f), "md-state_pressed": u.value && t(v), "md-state_disabled": e.disabled }]]), "aria-label": e.tooltip, "aria-pressed": h.value ? n.value : void 0, onClick: S }, [b[0] || (b[0] = y("span", { class: "md-icon-button__target", "aria-hidden": "true" }, null, -1)), W(t(_e), { hover: t(p), focused: t(f), pressed: t(v), disabled: e.disabled }, null, 8, ["hover", "focused", "pressed", "disabled"]), y("span", Me, [k(l.$slots, "icon", {}, () => [e.mdSymbolName ? (s(), m(t(me), { key: 0, name: e.mdSymbolName }, null, 8, ["name"])) : w("", true)], true)]), e.loading !== void 0 && e.loading !== false ? (s(), m(t(ee), { key: 0, class: "md-icon-button__progress-indicator", progress: e.loading === true ? 0 : e.loading }, null, 8, ["progress"])) : w("", true), E.richTooltipContent ? (s(), m(t(ke), { key: 1, subhead: e.tooltip, "use-hover": "", "use-click": e.showTooltipOnClick }, { text: B(() => [k(l.$slots, "richTooltipContent", {}, void 0, true)]), _: 3 }, 8, ["subhead", "use-click"])) : (s(), m(t(te), { key: 2, text: e.tooltip }, null, 8, ["text"]))], 10, we));
} }), Ie = U(Te, [["__scopeId", "data-v-fbc4a709"]]);
export {
  Ie as M,
  ke as a
};
