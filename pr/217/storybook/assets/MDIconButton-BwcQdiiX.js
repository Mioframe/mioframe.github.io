import { d as L, B as R, o, c as _, i as t, q as g, r as C, y as a, j as A, p as T, w as x, a as W, V as K, v as U, t as Y, S as de, k as J, C as B, b as D, s as H, h as I, T as G, E as j } from "./iframe-Ct2Kcxpc.js";
import { _ as N } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { d as Q, u as E, l as X, e as Z, m as q } from "./index-DS1-AJHE.js";
import { u as ee, a as te, _ as ae, b as se, f as le, s as oe, o as ue, M as ce } from "./MDSymbol-DXIIYzES.js";
import { b as ne, c as pe, d as me } from "./main-eXBO142w.js";
import { u as ve, a as fe, M as he } from "./useStateLayer-CaA6pBzQ.js";
const ye = ["width", "height", "viewBox"], _e = ["cx", "cy", "r", "stroke-width", "stroke-linecap", "stroke-dasharray", "stroke-dashoffset"], ge = ["cx", "cy", "r", "stroke-width", "stroke-linecap", "stroke-dasharray", "stroke-dashoffset"], be = ["values"], ke = { key: 2, attributeName: "transform", type: "rotate", from: "0", to: "360", dur: ".7s", repeatCount: "indefinite" }, we = L({ __name: "MDCircularProgressIndicator", props: { progress: { default: 0 }, size: { default: 40 } }, setup(r) {
  const b = r, { progress: e, size: v } = R(b), u = C(4), d = a(() => (v.value - u.value) / 2), n = a(() => d.value + u.value / 2), p = a(() => `0 0 ${2 * n.value} ${2 * n.value}`), l = a(() => 2 * Math.PI * d.value), f = a(() => e.value === 1 ? void 0 : "round"), s = a(() => Number.isInteger(e) ? 0 : u.value * 2), h = a(() => l.value * e.value - s.value), y = a(() => l.value * (1 - e.value) + s.value), m = a(() => `${h.value} ${y.value}`), $ = a(() => -s.value / 2 + l.value / 4), S = a(() => l.value * (1 - e.value) - s.value), k = a(() => l.value * e.value + s.value), O = a(() => `${S.value} ${k.value}`), z = a(() => -l.value * e.value - s.value / 2 + l.value / 4), w = a(() => `${l.value * 0.1 - s.value} ${l.value * 0.9 + s.value}`), c = a(() => `${l.value * 0.9 - s.value} ${l.value * 0.1 + s.value}`), M = a(() => `${w.value};${c.value};${w.value}`);
  return (P, V) => (o(), _("svg", { width: t(v), height: t(v), viewBox: p.value, class: "md md-circular-progress-indicator" }, [S.value > 0 && t(e) ? (o(), _("circle", { key: 0, cx: n.value, cy: n.value, r: d.value, fill: "none", "stroke-width": u.value, "stroke-linecap": f.value, "stroke-dasharray": O.value, "stroke-dashoffset": z.value, class: "md-circular-progress-indicator__empty" }, null, 8, _e)) : g("", true), h.value > 0 || !t(e) ? (o(), _("circle", { key: 1, cx: n.value, cy: n.value, r: d.value, fill: "none", stroke: "blue", "stroke-width": u.value, "stroke-linecap": f.value, "stroke-dasharray": m.value, "stroke-dashoffset": $.value, class: "md-circular-progress-indicator__progress" }, [t(e) ? g("", true) : (o(), _("animate", { key: 0, attributeName: "stroke-dasharray", values: M.value, dur: "4s", repeatCount: "indefinite" }, null, 8, be))], 8, ge)) : g("", true), t(e) ? g("", true) : (o(), _("animateTransform", ke))], 8, ye));
} }), $e = N(we, [["__scopeId", "data-v-8c8e3b0d"]]), Te = L({ __name: "MDPlainTooltip", props: { text: {}, target: {}, disabledTeleport: { type: Boolean }, placement: { default: "top" } }, setup(r) {
  const b = r, { target: e, placement: v } = R(b), u = Q(), d = a(() => Z(e.value) ?? u.value), n = ne(), p = A("tooltipEl"), { floatingStyles: l, update: f } = ee(d, p, { strategy: "fixed", placement: v, middleware: [se(8), le({ padding: 16, fallbackAxisSideDirection: "end" }), oe({ padding: 16 })], whileElementsMounted: te });
  E(window.visualViewport, "resize", f);
  const s = C(false);
  E(d, "pointerenter", () => {
    s.value = true;
  }), E(d, "pointerleave", () => {
    s.value = false;
  });
  const h = X(s, 1500);
  return (y, m) => (o(), T(t(ae), { to: t(n), disabled: r.disabledTeleport, container: p.value }, { default: x(() => [W(K, null, { default: x(() => [t(h) ? (o(), _("div", { key: 0, ref_key: "tooltipEl", ref: p, class: "md-plain-tooltip", style: U(t(l)) }, Y(r.text), 5)) : g("", true)]), _: 1 })]), _: 1 }, 8, ["to", "disabled", "container"]));
} }), Ee = N(Te, [["__scopeId", "data-v-01ad35bc"]]), F = { display: { large: "md-typescale-display-large", medium: "md-typescale-display-medium", small: "md-typescale-display-small" }, label: { large: "md-typescale-label-large", medium: "md-typescale-label-medium", small: "md-typescale-label-small" }, body: { large: "md-typescale-body-large", medium: "md-typescale-body-medium", small: "md-typescale-body-small" }, headline: { large: "md-typescale-headline-large", medium: "md-typescale-headline-medium", small: "md-typescale-headline-small" }, title: { large: "md-typescale-title-large", medium: "md-typescale-title-medium", small: "md-typescale-title-small" } }, xe = { key: 0, class: "md-rich-tooltip__actions" }, Se = L({ __name: "MDRichTooltip", props: G({ subhead: {}, disabledTeleport: { type: Boolean }, targetElement: {}, useClick: { type: Boolean }, useHover: { type: Boolean }, placement: { default: "top-end" } }, { show: { type: Boolean }, showModifiers: {} }), emits: G(["interactionOutside"], ["update:show"]), setup(r, { emit: b }) {
  const e = de(r, "show"), v = r, u = b, d = J(), { subhead: n, targetElement: p, useClick: l, useHover: f, placement: s } = R(v), h = Q(), y = a(() => Z(p.value ?? h.value)), m = ne(), $ = q(y), S = a(() => f.value && ($.value || O.value)), k = A("tooltipEl"), O = q(k), z = X(S, 1500), w = C(false);
  E(y, "click", () => {
    l.value && (w.value = true);
  });
  const c = C(false);
  ue(k, (i) => {
    c.value && (u("interactionOutside", i), w.value = false);
  });
  const M = B(c, (i) => {
    P.pause(), e.value = i, j(P.resume);
  }), P = B(e, (i) => {
    M.pause(), c.value = i ?? false, j(M.resume);
  }, { immediate: true });
  B(w, (i) => {
    c.value = i;
  }), B(z, (i) => {
    c.value = i;
  });
  const V = () => {
    w.value = false, c.value = false;
  };
  pe(c, () => (V(), false)), me(c, () => (V(), false));
  const { floatingStyles: ie, update: re } = ee(y, k, { strategy: "fixed", transform: false, placement: s, middleware: [se(({ rects: i }) => ({ alignmentAxis: -i.floating.width - 8, mainAxis: 8 })), le({ padding: 16 }), oe({ padding: 16 })], whileElementsMounted: te });
  return E(window.visualViewport, "resize", re), (i, Ie) => (o(), T(t(ae), { to: t(m), disabled: r.disabledTeleport, container: k.value }, { default: x(() => [W(K, null, { default: x(() => [c.value ? (o(), _("div", { key: 0, ref_key: "tooltipEl", ref: k, class: "md md-rich-tooltip", style: U(t(ie)) }, [D("div", { class: H(["md-rich-tooltip__subhead", t(F).title.small]) }, Y(t(n)), 3), D("div", { class: H(["md-rich-tooltip__supporting-text", t(F).body.medium]) }, [I(i.$slots, "text", {}, void 0, true)], 2), d.actions ? (o(), _("div", xe, [I(i.$slots, "actions", {}, void 0, true)])) : g("", true)], 4)) : g("", true)]), _: 3 })]), _: 3 }, 8, ["to", "disabled", "container"]));
} }), Me = N(Se, [["__scopeId", "data-v-989eed3c"]]), Be = ["disabled", "type", "aria-label", "aria-pressed"], Ce = { class: "md-icon-button__icon" }, De = L({ __name: "MDIconButton", props: { nativeType: { default: "button" }, color: { default: "filled" }, disabled: { type: Boolean }, loading: { type: [Number, Boolean] }, tooltip: {}, showTooltipOnClick: { type: Boolean }, mdSymbolName: {}, variant: { default: "default" }, selected: { type: Boolean }, size: { default: "small" }, width: { default: "default" }, shape: { default: "round" } }, emits: ["click"], setup(r, { emit: b }) {
  const e = r, v = b, u = J(), d = (m) => {
    m.stopPropagation(), v("click", m);
  }, n = A("buttonEl"), { hover: p, focused: l, durationPressedState: f } = ve(n), s = a(() => !e.disabled), h = a(() => e.variant === "toggle"), y = a(() => h.value && !!e.selected);
  return fe(a(() => e.disabled ? void 0 : n.value)), (m, $) => (o(), _("button", { ref_key: "buttonEl", ref: n, disabled: r.disabled, type: e.nativeType, class: H(["md-icon-button", [`md-icon-button_color-${e.color}`, `md-icon-button_variant-${e.variant}`, `md-icon-button_size-${e.size}`, `md-icon-button_width-${e.width}`, `md-icon-button_shape-${e.shape}`, { "md-icon-button_selected": y.value, "md-icon-button_loading": e.loading !== void 0 && e.loading !== false, "md-state_hover": s.value && t(p), "md-state_focused": s.value && t(l), "md-state_pressed": s.value && t(f), "md-state_disabled": e.disabled }]]), "aria-label": e.tooltip, "aria-pressed": h.value ? y.value : void 0, onClick: d }, [$[0] || ($[0] = D("span", { class: "md-icon-button__target", "aria-hidden": "true" }, null, -1)), W(t(he), { hover: t(p), focused: t(l), pressed: t(f), disabled: e.disabled }, null, 8, ["hover", "focused", "pressed", "disabled"]), D("span", Ce, [I(m.$slots, "icon", {}, () => [e.mdSymbolName ? (o(), T(t(ce), { key: 0, name: e.mdSymbolName }, null, 8, ["name"])) : g("", true)], true)]), e.loading !== void 0 && e.loading !== false ? (o(), T(t($e), { key: 0, class: "md-icon-button__progress-indicator", progress: e.loading === true ? 0 : e.loading }, null, 8, ["progress"])) : g("", true), u.richTooltipContent ? (o(), T(t(Me), { key: 1, subhead: e.tooltip, "use-hover": "", "use-click": e.showTooltipOnClick }, { text: x(() => [I(m.$slots, "richTooltipContent", {}, void 0, true)]), _: 3 }, 8, ["subhead", "use-click"])) : (o(), T(t(Ee), { key: 2, text: e.tooltip }, null, 8, ["text"]))], 10, Be));
} }), He = N(De, [["__scopeId", "data-v-fbc4a709"]]);
export {
  He as M,
  Me as a
};
