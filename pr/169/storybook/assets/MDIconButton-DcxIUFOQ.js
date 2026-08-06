import { d as V, R as G, D as A, B as J, l as g, c as p, u as t, w as B, S as N, j as L, o as s, h as W, f as C, g as y, t as Q, n as D, A as k, E as w, k as X, U as Z, r as H, b as d, p as R } from "./iframe-Dz4KbPDL.js";
import { M as ee } from "./MDCircularProgressIndicator-BhJLQ6Zo.js";
import { M as te } from "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-SKH24BE1.js";
import { M as z } from "./typography-C_Z8eobQ.js";
import { u as oe, k as I, l as ae, d as P, e as se } from "./index-exp9HTG-.js";
import { o as le, u as ie, a as ne } from "./main-IOykPyZp.js";
import { u as de, a as re, _ as ue, b as ce, o as pe, f as me, s as fe } from "./floating-ui.vue-BQUJNWEG.js";
import { _ as U } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { M as ve } from "./MDSymbol-BGSgDnZb.js";
import { u as he, a as be, M as _e } from "./useStateLayer-4t0iU_NG.js";
const ge = { key: 0, class: "md-rich-tooltip__actions" }, ye = V({ __name: "MDRichTooltip", props: N({ subhead: {}, disabledTeleport: { type: Boolean }, targetElement: {}, useClick: { type: Boolean }, useHover: { type: Boolean }, placement: { default: "top-end" } }, { show: { type: Boolean }, showModifiers: {} }), emits: N(["interactionOutside"], ["update:show"]), setup(i, { emit: M }) {
  const e = G(i, "show"), S = i, T = M, E = A(), { subhead: r, targetElement: m, useClick: f, useHover: v, placement: u } = J(S), h = oe(), n = d(() => se(m.value ?? h.value)), l = de(), b = I(n), j = d(() => v.value && (b.value || F.value)), c = L("tooltipEl"), F = I(c), K = ae(j, 1500), _ = H(false);
  P(n, "click", () => {
    f.value && (_.value = true);
  });
  const a = H(false);
  le(c, (o) => {
    a.value && (T("interactionOutside", o), _.value = false);
  });
  const $ = g(a, (o) => {
    x.pause(), e.value = o, R(x.resume);
  }), x = g(e, (o) => {
    $.pause(), a.value = o ?? false, R($.resume);
  }, { immediate: true });
  g(_, (o) => {
    a.value = o;
  }), g(K, (o) => {
    a.value = o;
  });
  const O = () => {
    _.value = false, a.value = false;
  };
  ie(a, () => (O(), false)), ne(a, () => (O(), false));
  const { floatingStyles: Y, update: q } = re(n, c, { strategy: "fixed", transform: false, placement: u, middleware: [pe(({ rects: o }) => ({ alignmentAxis: -o.floating.width - 8, mainAxis: 8 })), me({ padding: 16 }), fe({ padding: 16 })], whileElementsMounted: ce });
  return P(window.visualViewport, "resize", q), (o, Te) => (s(), p(t(ue), { to: t(l), disabled: i.disabledTeleport, container: c.value }, { default: B(() => [W(Z, null, { default: B(() => [a.value ? (s(), C("div", { key: 0, ref_key: "tooltipEl", ref: c, class: "md md-rich-tooltip", style: X(t(Y)) }, [y("div", { class: D(["md-rich-tooltip__subhead", t(z).title.small]) }, Q(t(r)), 3), y("div", { class: D(["md-rich-tooltip__supporting-text", t(z).body.medium]) }, [k(o.$slots, "text", {}, void 0, true)], 2), E.actions ? (s(), C("div", ge, [k(o.$slots, "actions", {}, void 0, true)])) : w("", true)], 4)) : w("", true)]), _: 3 })]), _: 3 }, 8, ["to", "disabled", "container"]));
} }), ke = U(ye, [["__scopeId", "data-v-989eed3c"]]), we = ["disabled", "type", "aria-label", "aria-pressed"], Me = { class: "md-icon-button__icon" }, Se = V({ __name: "MDIconButton", props: { nativeType: { default: "button" }, color: { default: "filled" }, disabled: { type: Boolean }, loading: { type: [Number, Boolean] }, tooltip: {}, showTooltipOnClick: { type: Boolean }, mdSymbolName: {}, variant: { default: "default" }, selected: { type: Boolean }, size: { default: "small" }, width: { default: "default" }, shape: { default: "round" } }, emits: ["click"], setup(i, { emit: M }) {
  const e = i, S = M, T = A(), E = (l) => {
    l.stopPropagation(), S("click", l);
  }, r = L("buttonEl"), { hover: m, focused: f, durationPressedState: v } = he(r), u = d(() => !e.disabled), h = d(() => e.variant === "toggle"), n = d(() => h.value && !!e.selected);
  return be(d(() => e.disabled ? void 0 : r.value)), (l, b) => (s(), C("button", { ref_key: "buttonEl", ref: r, disabled: i.disabled, type: e.nativeType, class: D(["md-icon-button", [`md-icon-button_color-${e.color}`, `md-icon-button_variant-${e.variant}`, `md-icon-button_size-${e.size}`, `md-icon-button_width-${e.width}`, `md-icon-button_shape-${e.shape}`, { "md-icon-button_selected": n.value, "md-icon-button_loading": e.loading !== void 0 && e.loading !== false, "md-state_hover": u.value && t(m), "md-state_focused": u.value && t(f), "md-state_pressed": u.value && t(v), "md-state_disabled": e.disabled }]]), "aria-label": e.tooltip, "aria-pressed": h.value ? n.value : void 0, onClick: E }, [b[0] || (b[0] = y("span", { class: "md-icon-button__target", "aria-hidden": "true" }, null, -1)), W(t(_e), { hover: t(m), focused: t(f), pressed: t(v), disabled: e.disabled }, null, 8, ["hover", "focused", "pressed", "disabled"]), y("span", Me, [k(l.$slots, "icon", {}, () => [e.mdSymbolName ? (s(), p(t(ve), { key: 0, name: e.mdSymbolName }, null, 8, ["name"])) : w("", true)], true)]), e.loading !== void 0 && e.loading !== false ? (s(), p(t(ee), { key: 0, class: "md-icon-button__progress-indicator", progress: e.loading === true ? 0 : e.loading }, null, 8, ["progress"])) : w("", true), T.richTooltipContent ? (s(), p(t(ke), { key: 1, subhead: e.tooltip, "use-hover": "", "use-click": e.showTooltipOnClick }, { text: B(() => [k(l.$slots, "richTooltipContent", {}, void 0, true)]), _: 3 }, 8, ["subhead", "use-click"])) : (s(), p(t(te), { key: 2, text: e.tooltip }, null, 8, ["text"]))], 10, we));
} }), ze = U(Se, [["__scopeId", "data-v-fbc4a709"]]);
export {
  ze as M,
  ke as a
};
