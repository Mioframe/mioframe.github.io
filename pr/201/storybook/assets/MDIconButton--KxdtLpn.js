import { d as R, S as G, k as L, B as J, j as W, C as y, o as s, p, i as t, w as B, a as A, V as Q, c as C, v as X, b as g, s as $, t as Z, h as k, q as w, T as N, y as d, r as H, E as V } from "./iframe-smYjRMrB.js";
import { b as z, M as ee, a as te } from "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-CKxOV9rw.js";
import { d as oe, l as I, m as ae, u as P, e as se } from "./index-DKHq6Dpi.js";
import { o as le } from "./onInteractionOutside-40Y7VsTZ.js";
import { u as ie, a as ne, _ as de, o as re, f as ue, s as ce, M as pe } from "./MDSymbol-De2rlTZI.js";
import { u as me } from "./useOverlay-CTgjg9xs.js";
import { b as fe, c as ve } from "./main-Bsq7saPh.js";
import { _ as j } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { u as he, a as be, M as _e } from "./useStateLayer-CCFI-OdS.js";
const ye = { key: 0, class: "md-rich-tooltip__actions" }, ge = R({ __name: "MDRichTooltip", props: N({ subhead: {}, disabledTeleport: { type: Boolean }, targetElement: {}, useClick: { type: Boolean }, useHover: { type: Boolean }, placement: { default: "top-end" } }, { show: { type: Boolean }, showModifiers: {} }), emits: N(["interactionOutside"], ["update:show"]), setup(i, { emit: T }) {
  const e = G(i, "show"), S = i, E = T, M = L(), { subhead: r, targetElement: m, useClick: f, useHover: v, placement: u } = J(S), h = oe(), n = d(() => se(m.value ?? h.value)), l = me(), b = I(n), q = d(() => v.value && (b.value || F.value)), c = W("tooltipEl"), F = I(c), K = ae(q, 1500), _ = H(false);
  P(n, "click", () => {
    f.value && (_.value = true);
  });
  const a = H(false);
  le(c, (o) => {
    a.value && (E("interactionOutside", o), _.value = false);
  });
  const D = y(a, (o) => {
    x.pause(), e.value = o, V(x.resume);
  }), x = y(e, (o) => {
    D.pause(), a.value = o ?? false, V(D.resume);
  }, { immediate: true });
  y(_, (o) => {
    a.value = o;
  }), y(K, (o) => {
    a.value = o;
  });
  const O = () => {
    _.value = false, a.value = false;
  };
  fe(a, () => (O(), false)), ve(a, () => (O(), false));
  const { floatingStyles: U, update: Y } = ie(n, c, { strategy: "fixed", transform: false, placement: u, middleware: [re(({ rects: o }) => ({ alignmentAxis: -o.floating.width - 8, mainAxis: 8 })), ue({ padding: 16 }), ce({ padding: 16 })], whileElementsMounted: ne });
  return P(window.visualViewport, "resize", Y), (o, Ee) => (s(), p(t(de), { to: t(l), disabled: i.disabledTeleport, container: c.value }, { default: B(() => [A(Q, null, { default: B(() => [a.value ? (s(), C("div", { key: 0, ref_key: "tooltipEl", ref: c, class: "md md-rich-tooltip", style: X(t(U)) }, [g("div", { class: $(["md-rich-tooltip__subhead", t(z).title.small]) }, Z(t(r)), 3), g("div", { class: $(["md-rich-tooltip__supporting-text", t(z).body.medium]) }, [k(o.$slots, "text", {}, void 0, true)], 2), M.actions ? (s(), C("div", ye, [k(o.$slots, "actions", {}, void 0, true)])) : w("", true)], 4)) : w("", true)]), _: 3 })]), _: 3 }, 8, ["to", "disabled", "container"]));
} }), ke = j(ge, [["__scopeId", "data-v-989eed3c"]]), we = ["disabled", "type", "aria-label", "aria-pressed"], Te = { class: "md-icon-button__icon" }, Se = R({ __name: "MDIconButton", props: { nativeType: { default: "button" }, color: { default: "filled" }, disabled: { type: Boolean }, loading: { type: [Number, Boolean] }, tooltip: {}, showTooltipOnClick: { type: Boolean }, mdSymbolName: {}, variant: { default: "default" }, selected: { type: Boolean }, size: { default: "small" }, width: { default: "default" }, shape: { default: "round" } }, emits: ["click"], setup(i, { emit: T }) {
  const e = i, S = T, E = L(), M = (l) => {
    l.stopPropagation(), S("click", l);
  }, r = W("buttonEl"), { hover: m, focused: f, durationPressedState: v } = he(r), u = d(() => !e.disabled), h = d(() => e.variant === "toggle"), n = d(() => h.value && !!e.selected);
  return be(d(() => e.disabled ? void 0 : r.value)), (l, b) => (s(), C("button", { ref_key: "buttonEl", ref: r, disabled: i.disabled, type: e.nativeType, class: $(["md-icon-button", [`md-icon-button_color-${e.color}`, `md-icon-button_variant-${e.variant}`, `md-icon-button_size-${e.size}`, `md-icon-button_width-${e.width}`, `md-icon-button_shape-${e.shape}`, { "md-icon-button_selected": n.value, "md-icon-button_loading": e.loading !== void 0 && e.loading !== false, "md-state_hover": u.value && t(m), "md-state_focused": u.value && t(f), "md-state_pressed": u.value && t(v), "md-state_disabled": e.disabled }]]), "aria-label": e.tooltip, "aria-pressed": h.value ? n.value : void 0, onClick: M }, [b[0] || (b[0] = g("span", { class: "md-icon-button__target", "aria-hidden": "true" }, null, -1)), A(t(_e), { hover: t(m), focused: t(f), pressed: t(v), disabled: e.disabled }, null, 8, ["hover", "focused", "pressed", "disabled"]), g("span", Te, [k(l.$slots, "icon", {}, () => [e.mdSymbolName ? (s(), p(t(pe), { key: 0, name: e.mdSymbolName }, null, 8, ["name"])) : w("", true)], true)]), e.loading !== void 0 && e.loading !== false ? (s(), p(t(ee), { key: 0, class: "md-icon-button__progress-indicator", progress: e.loading === true ? 0 : e.loading }, null, 8, ["progress"])) : w("", true), E.richTooltipContent ? (s(), p(t(ke), { key: 1, subhead: e.tooltip, "use-hover": "", "use-click": e.showTooltipOnClick }, { text: B(() => [k(l.$slots, "richTooltipContent", {}, void 0, true)]), _: 3 }, 8, ["subhead", "use-click"])) : (s(), p(t(te), { key: 2, text: e.tooltip }, null, 8, ["text"]))], 10, we));
} }), Ve = j(Se, [["__scopeId", "data-v-fbc4a709"]]);
export {
  Ve as M,
  ke as a
};
