import { d as V, T as G, u as W, C as J, i as A, A as g, o as s, f as m, e as t, w as C, a as L, W as Q, c as B, v as X, b as y, n as D, t as Z, g as k, j as w, U as N, h as d, r as H, D as z } from "./iframe-BFysBzVV.js";
import { M as ee } from "./MDCircularProgressIndicator-DSaH8JUM.js";
import { M as te } from "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-BnSu_nWA.js";
import { M as I } from "./typography-C_Z8eobQ.js";
import { d as oe, l as P, m as ae, u as R, e as se } from "./index-BdtWu7Hc.js";
import { o as le } from "./onInteractionOutside-DXMdxTom.js";
import { u as ie, a as ne, _ as de, o as re, f as ue, s as ce } from "./TeleportContainer.vue_vue_type_script_setup_true_lang-Dc-7AFqq.js";
import { u as me } from "./useOverlay-DblFcUZv.js";
import { b as pe, c as fe } from "./main-B3FoMVZa.js";
import { _ as U } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { M as ve } from "./MDSymbol-Cutz2yE7.js";
import { u as he, a as be, M as _e } from "./useStateLayer-LV6gGmVL.js";
const ge = { key: 0, class: "md-rich-tooltip__actions" }, ye = V({ __name: "MDRichTooltip", props: N({ subhead: {}, disabledTeleport: { type: Boolean }, targetElement: {}, useClick: { type: Boolean }, useHover: { type: Boolean }, placement: { default: "top-end" } }, { show: { type: Boolean }, showModifiers: {} }), emits: N(["interactionOutside"], ["update:show"]), setup(i, { emit: T }) {
  const e = G(i, "show"), M = i, S = T, E = W(), { subhead: r, targetElement: p, useClick: f, useHover: v, placement: u } = J(M), h = oe(), n = d(() => se(p.value ?? h.value)), l = me(), b = P(n), j = d(() => v.value && (b.value || F.value)), c = A("tooltipEl"), F = P(c), K = ae(j, 1500), _ = H(false);
  R(n, "click", () => {
    f.value && (_.value = true);
  });
  const a = H(false);
  le(c, (o) => {
    a.value && (S("interactionOutside", o), _.value = false);
  });
  const $ = g(a, (o) => {
    x.pause(), e.value = o, z(x.resume);
  }), x = g(e, (o) => {
    $.pause(), a.value = o ?? false, z($.resume);
  }, { immediate: true });
  g(_, (o) => {
    a.value = o;
  }), g(K, (o) => {
    a.value = o;
  });
  const O = () => {
    _.value = false, a.value = false;
  };
  pe(a, () => (O(), false)), fe(a, () => (O(), false));
  const { floatingStyles: Y, update: q } = ie(n, c, { strategy: "fixed", transform: false, placement: u, middleware: [re(({ rects: o }) => ({ alignmentAxis: -o.floating.width - 8, mainAxis: 8 })), ue({ padding: 16 }), ce({ padding: 16 })], whileElementsMounted: ne });
  return R(window.visualViewport, "resize", q), (o, Se) => (s(), m(t(de), { to: t(l), disabled: i.disabledTeleport, container: c.value }, { default: C(() => [L(Q, null, { default: C(() => [a.value ? (s(), B("div", { key: 0, ref_key: "tooltipEl", ref: c, class: "md md-rich-tooltip", style: X(t(Y)) }, [y("div", { class: D(["md-rich-tooltip__subhead", t(I).title.small]) }, Z(t(r)), 3), y("div", { class: D(["md-rich-tooltip__supporting-text", t(I).body.medium]) }, [k(o.$slots, "text", {}, void 0, true)], 2), E.actions ? (s(), B("div", ge, [k(o.$slots, "actions", {}, void 0, true)])) : w("", true)], 4)) : w("", true)]), _: 3 })]), _: 3 }, 8, ["to", "disabled", "container"]));
} }), ke = U(ye, [["__scopeId", "data-v-989eed3c"]]), we = ["disabled", "type", "aria-label", "aria-pressed"], Te = { class: "md-icon-button__icon" }, Me = V({ __name: "MDIconButton", props: { nativeType: { default: "button" }, color: { default: "filled" }, disabled: { type: Boolean }, loading: { type: [Number, Boolean] }, tooltip: {}, showTooltipOnClick: { type: Boolean }, mdSymbolName: {}, variant: { default: "default" }, selected: { type: Boolean }, size: { default: "small" }, width: { default: "default" }, shape: { default: "round" } }, emits: ["click"], setup(i, { emit: T }) {
  const e = i, M = T, S = W(), E = (l) => {
    l.stopPropagation(), M("click", l);
  }, r = A("buttonEl"), { hover: p, focused: f, durationPressedState: v } = he(r), u = d(() => !e.disabled), h = d(() => e.variant === "toggle"), n = d(() => h.value && !!e.selected);
  return be(d(() => e.disabled ? void 0 : r.value)), (l, b) => (s(), B("button", { ref_key: "buttonEl", ref: r, disabled: i.disabled, type: e.nativeType, class: D(["md-icon-button", [`md-icon-button_color-${e.color}`, `md-icon-button_variant-${e.variant}`, `md-icon-button_size-${e.size}`, `md-icon-button_width-${e.width}`, `md-icon-button_shape-${e.shape}`, { "md-icon-button_selected": n.value, "md-icon-button_loading": e.loading !== void 0 && e.loading !== false, "md-state_hover": u.value && t(p), "md-state_focused": u.value && t(f), "md-state_pressed": u.value && t(v), "md-state_disabled": e.disabled }]]), "aria-label": e.tooltip, "aria-pressed": h.value ? n.value : void 0, onClick: E }, [b[0] || (b[0] = y("span", { class: "md-icon-button__target", "aria-hidden": "true" }, null, -1)), L(t(_e), { hover: t(p), focused: t(f), pressed: t(v), disabled: e.disabled }, null, 8, ["hover", "focused", "pressed", "disabled"]), y("span", Te, [k(l.$slots, "icon", {}, () => [e.mdSymbolName ? (s(), m(t(ve), { key: 0, name: e.mdSymbolName }, null, 8, ["name"])) : w("", true)], true)]), e.loading !== void 0 && e.loading !== false ? (s(), m(t(ee), { key: 0, class: "md-icon-button__progress-indicator", progress: e.loading === true ? 0 : e.loading }, null, 8, ["progress"])) : w("", true), S.richTooltipContent ? (s(), m(t(ke), { key: 1, subhead: e.tooltip, "use-hover": "", "use-click": e.showTooltipOnClick }, { text: C(() => [k(l.$slots, "richTooltipContent", {}, void 0, true)]), _: 3 }, 8, ["subhead", "use-click"])) : (s(), m(t(te), { key: 2, text: e.tooltip }, null, 8, ["text"]))], 10, we));
} }), Re = U(Me, [["__scopeId", "data-v-fbc4a709"]]);
export {
  Re as M,
  ke as a
};
