import { d as x, B as $, o as i, c as u, i as l, q as p, r as D, y as e, j as P, p as S, w, a as N, V, v as z, t as O } from "./iframe-Cs7PXa1J.js";
import { _ as E } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { d as R, u as h, m as A, e as G } from "./index-RiRbiydp.js";
import { u as j, a as q, _ as F, o as U, f as Y, s as H } from "./MDSymbol-C1e1Iab2.js";
import { u as J } from "./useOverlay-Du8-D_qA.js";
const ue = { display: { large: "md-typescale-display-large", medium: "md-typescale-display-medium", small: "md-typescale-display-small" }, label: { large: "md-typescale-label-large", medium: "md-typescale-label-medium", small: "md-typescale-label-small" }, body: { large: "md-typescale-body-large", medium: "md-typescale-body-medium", small: "md-typescale-body-small" }, headline: { large: "md-typescale-headline-large", medium: "md-typescale-headline-medium", small: "md-typescale-headline-small" }, title: { large: "md-typescale-title-large", medium: "md-typescale-title-medium", small: "md-typescale-title-small" } }, K = ["width", "height", "viewBox"], Q = ["cx", "cy", "r", "stroke-width", "stroke-linecap", "stroke-dasharray", "stroke-dashoffset"], W = ["cx", "cy", "r", "stroke-width", "stroke-linecap", "stroke-dasharray", "stroke-dashoffset"], X = ["values"], Z = { key: 2, attributeName: "transform", type: "rotate", from: "0", to: "360", dur: ".7s", repeatCount: "indefinite" }, ee = x({ __name: "MDCircularProgressIndicator", props: { progress: { default: 0 }, size: { default: 40 } }, setup(c) {
  const f = c, { progress: t, size: d } = $(f), n = D(4), r = e(() => (d.value - n.value) / 2), o = e(() => r.value + n.value / 2), m = e(() => `0 0 ${2 * o.value} ${2 * o.value}`), s = e(() => 2 * Math.PI * r.value), v = e(() => t.value === 1 ? void 0 : "round"), a = e(() => Number.isInteger(t) ? 0 : n.value * 2), y = e(() => s.value * t.value - a.value), g = e(() => s.value * (1 - t.value) + a.value), _ = e(() => `${y.value} ${g.value}`), L = e(() => -a.value / 2 + s.value / 4), k = e(() => s.value * (1 - t.value) - a.value), C = e(() => s.value * t.value + a.value), T = e(() => `${k.value} ${C.value}`), B = e(() => -s.value * t.value - a.value / 2 + s.value / 4), b = e(() => `${s.value * 0.1 - a.value} ${s.value * 0.9 + a.value}`), I = e(() => `${s.value * 0.9 - a.value} ${s.value * 0.1 + a.value}`), M = e(() => `${b.value};${I.value};${b.value}`);
  return (te, se) => (i(), u("svg", { width: l(d), height: l(d), viewBox: m.value, class: "md md-circular-progress-indicator" }, [k.value > 0 && l(t) ? (i(), u("circle", { key: 0, cx: o.value, cy: o.value, r: r.value, fill: "none", "stroke-width": n.value, "stroke-linecap": v.value, "stroke-dasharray": T.value, "stroke-dashoffset": B.value, class: "md-circular-progress-indicator__empty" }, null, 8, Q)) : p("", true), y.value > 0 || !l(t) ? (i(), u("circle", { key: 1, cx: o.value, cy: o.value, r: r.value, fill: "none", stroke: "blue", "stroke-width": n.value, "stroke-linecap": v.value, "stroke-dasharray": _.value, "stroke-dashoffset": L.value, class: "md-circular-progress-indicator__progress" }, [l(t) ? p("", true) : (i(), u("animate", { key: 0, attributeName: "stroke-dasharray", values: M.value, dur: "4s", repeatCount: "indefinite" }, null, 8, X))], 8, W)) : p("", true), l(t) ? p("", true) : (i(), u("animateTransform", Z))], 8, K));
} }), ce = E(ee, [["__scopeId", "data-v-8c8e3b0d"]]), ae = x({ __name: "MDPlainTooltip", props: { text: {}, target: {}, disabledTeleport: { type: Boolean }, placement: { default: "top" } }, setup(c) {
  const f = c, { target: t, placement: d } = $(f), n = R(), r = e(() => G(t.value) ?? n.value), o = J(), m = P("tooltipEl"), { floatingStyles: s, update: v } = j(r, m, { strategy: "fixed", placement: d, middleware: [U(8), Y({ padding: 16, fallbackAxisSideDirection: "end" }), H({ padding: 16 })], whileElementsMounted: q });
  h(window.visualViewport, "resize", v);
  const a = D(false);
  h(r, "pointerenter", () => {
    a.value = true;
  }), h(r, "pointerleave", () => {
    a.value = false;
  });
  const y = A(a, 1500);
  return (g, _) => (i(), S(l(F), { to: l(o), disabled: c.disabledTeleport, container: m.value }, { default: w(() => [N(V, null, { default: w(() => [l(y) ? (i(), u("div", { key: 0, ref_key: "tooltipEl", ref: m, class: "md-plain-tooltip", style: z(l(s)) }, O(c.text), 5)) : p("", true)]), _: 1 })]), _: 1 }, 8, ["to", "disabled", "container"]));
} }), de = E(ae, [["__scopeId", "data-v-01ad35bc"]]);
export {
  ce as M,
  de as a,
  ue as b
};
