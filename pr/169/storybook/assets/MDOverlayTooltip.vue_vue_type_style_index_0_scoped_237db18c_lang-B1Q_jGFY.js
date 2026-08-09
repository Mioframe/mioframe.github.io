import { d as v, B as g, c as E, u as e, w as n, j as y, o as r, h as b, f as w, t as x, k as h, E as k, V as T, b as B, r as D } from "./iframe-BmKBn1Mu.js";
import { u as S, f as l, l as C, g as M } from "./index-CROe5JIw.js";
import { u as V, _ as P, a as R, o as z, f as N, s as j } from "./floating-ui.vue-C3Ysfbvu.js";
import { u as A } from "./useOverlay-DJ1otShK.js";
import { _ as F } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const I = v({ __name: "MDPlainTooltip", props: { text: {}, target: {}, disabledTeleport: { type: Boolean }, placement: { default: "top" } }, setup(t) {
  const i = t, { target: p, placement: c } = g(i), d = S(), a = B(() => M(p.value) ?? d.value), f = A(), o = y("tooltipEl"), { floatingStyles: u, update: m } = V(a, o, { strategy: "fixed", placement: c, middleware: [z(8), N({ padding: 16, fallbackAxisSideDirection: "end" }), j({ padding: 16 })], whileElementsMounted: R });
  l(window.visualViewport, "resize", m);
  const s = D(false);
  l(a, "pointerenter", () => {
    s.value = true;
  }), l(a, "pointerleave", () => {
    s.value = false;
  });
  const _ = C(s, 1500);
  return (L, O) => (r(), E(e(P), { to: e(f), disabled: t.disabledTeleport, container: o.value }, { default: n(() => [b(T, null, { default: n(() => [e(_) ? (r(), w("div", { key: 0, ref_key: "tooltipEl", ref: o, class: "md-plain-tooltip", style: h(e(u)) }, x(t.text), 5)) : k("", true)]), _: 1 })]), _: 1 }, 8, ["to", "disabled", "container"]));
} }), J = F(I, [["__scopeId", "data-v-01ad35bc"]]);
export {
  J as M
};
