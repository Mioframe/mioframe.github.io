import { d as $, A as b, o as u, c as i, e as r, j as p, r as D, h as e, i as P, f as N, w as x, a as S, V, v as z, t as O } from "./iframe-Ck9zoa4y.js";
import { _ as E } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { d as R, u as _, m as A, e as G } from "./index-DPLatO-f.js";
import { u as j, a as F, _ as U, o as q, f as H, s as J } from "./MDSymbol-gQDvs1zx.js";
import { u as K } from "./useOverlay-P5sgXCMz.js";
const Q = ["width", "height", "viewBox"], W = ["cx", "cy", "r", "stroke-width", "stroke-linecap", "stroke-dasharray", "stroke-dashoffset"], X = ["cx", "cy", "r", "stroke-width", "stroke-linecap", "stroke-dasharray", "stroke-dashoffset"], Y = ["values"], Z = { key: 2, attributeName: "transform", type: "rotate", from: "0", to: "360", dur: ".7s", repeatCount: "indefinite" }, ee = $({ __name: "MDCircularProgressIndicator", props: { progress: { default: 0 }, size: { default: 40 } }, setup(c) {
  const h = c, { progress: t, size: d } = b(h), n = D(4), o = e(() => (d.value - n.value) / 2), l = e(() => o.value + n.value / 2), v = e(() => `0 0 ${2 * l.value} ${2 * l.value}`), s = e(() => 2 * Math.PI * o.value), f = e(() => t.value === 1 ? void 0 : "round"), a = e(() => Number.isInteger(t) ? 0 : n.value * 2), m = e(() => s.value * t.value - a.value), y = e(() => s.value * (1 - t.value) + a.value), g = e(() => `${m.value} ${y.value}`), L = e(() => -a.value / 2 + s.value / 4), k = e(() => s.value * (1 - t.value) - a.value), C = e(() => s.value * t.value + a.value), I = e(() => `${k.value} ${C.value}`), T = e(() => -s.value * t.value - a.value / 2 + s.value / 4), w = e(() => `${s.value * 0.1 - a.value} ${s.value * 0.9 + a.value}`), B = e(() => `${s.value * 0.9 - a.value} ${s.value * 0.1 + a.value}`), M = e(() => `${w.value};${B.value};${w.value}`);
  return (te, se) => (u(), i("svg", { width: r(d), height: r(d), viewBox: v.value, class: "md md-circular-progress-indicator" }, [k.value > 0 && r(t) ? (u(), i("circle", { key: 0, cx: l.value, cy: l.value, r: o.value, fill: "none", "stroke-width": n.value, "stroke-linecap": f.value, "stroke-dasharray": I.value, "stroke-dashoffset": T.value, class: "md-circular-progress-indicator__empty" }, null, 8, W)) : p("", true), m.value > 0 || !r(t) ? (u(), i("circle", { key: 1, cx: l.value, cy: l.value, r: o.value, fill: "none", stroke: "blue", "stroke-width": n.value, "stroke-linecap": f.value, "stroke-dasharray": g.value, "stroke-dashoffset": L.value, class: "md-circular-progress-indicator__progress" }, [r(t) ? p("", true) : (u(), i("animate", { key: 0, attributeName: "stroke-dasharray", values: M.value, dur: "4s", repeatCount: "indefinite" }, null, 8, Y))], 8, X)) : p("", true), r(t) ? p("", true) : (u(), i("animateTransform", Z))], 8, Q));
} }), ie = E(ee, [["__scopeId", "data-v-8c8e3b0d"]]), ae = $({ __name: "MDPlainTooltip", props: { text: {}, target: {}, disabledTeleport: { type: Boolean }, placement: { default: "top" } }, setup(c) {
  const h = c, { target: t, placement: d } = b(h), n = R(), o = e(() => G(t.value) ?? n.value), l = K(), v = P("tooltipEl"), { floatingStyles: s, update: f } = j(o, v, { strategy: "fixed", placement: d, middleware: [q(8), H({ padding: 16, fallbackAxisSideDirection: "end" }), J({ padding: 16 })], whileElementsMounted: F });
  _(window.visualViewport, "resize", f);
  const a = D(false);
  _(o, "pointerenter", () => {
    a.value = true;
  }), _(o, "pointerleave", () => {
    a.value = false;
  });
  const m = A(a, 1500);
  return (y, g) => (u(), N(r(U), { to: r(l), disabled: c.disabledTeleport, container: v.value }, { default: x(() => [S(V, null, { default: x(() => [r(m) ? (u(), i("div", { key: 0, ref_key: "tooltipEl", ref: v, class: "md-plain-tooltip", style: z(r(s)) }, O(c.text), 5)) : p("", true)]), _: 1 })]), _: 1 }, 8, ["to", "disabled", "container"]));
} }), ce = E(ae, [["__scopeId", "data-v-01ad35bc"]]);
export {
  ie as M,
  ce as a
};
