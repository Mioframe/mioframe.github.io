import { d as _, A as g, i as y, o as n, f as E, e, w as r, a as w, X as x, c as b, v as h, t as T, j as k, h as D, r as S } from "./iframe-DtOriYE2.js";
import { d as B, u as l, m as C, e as M } from "./index-DLjCGCTm.js";
import { u as P, a as R, _ as V, o as z, f as A, s as N } from "./MDSymbol-Dwazvxqg.js";
import { u as j } from "./useOverlay-Wd9lR9Hm.js";
import { _ as F } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const I = _({ __name: "MDPlainTooltip", props: { text: {}, target: {}, disabledTeleport: { type: Boolean }, placement: { default: "top" } }, setup(t) {
  const i = t, { target: p, placement: d } = g(i), c = B(), a = D(() => M(p.value) ?? c.value), f = j(), o = y("tooltipEl"), { floatingStyles: u, update: m } = P(a, o, { strategy: "fixed", placement: d, middleware: [z(8), A({ padding: 16, fallbackAxisSideDirection: "end" }), N({ padding: 16 })], whileElementsMounted: R });
  l(window.visualViewport, "resize", m);
  const s = S(false);
  l(a, "pointerenter", () => {
    s.value = true;
  }), l(a, "pointerleave", () => {
    s.value = false;
  });
  const v = C(s, 1500);
  return (L, O) => (n(), E(e(V), { to: e(f), disabled: t.disabledTeleport, container: o.value }, { default: r(() => [w(x, null, { default: r(() => [e(v) ? (n(), b("div", { key: 0, ref_key: "tooltipEl", ref: o, class: "md-plain-tooltip", style: h(e(u)) }, T(t.text), 5)) : k("", true)]), _: 1 })]), _: 1 }, 8, ["to", "disabled", "container"]));
} }), H = F(I, [["__scopeId", "data-v-01ad35bc"]]);
export {
  H as M
};
