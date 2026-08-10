import { d as _, N as g, i as y, o as n, f as E, e, w as r, a as b, V as w, c as x, v as h, t as T, j as k, h as D, r as S } from "./iframe-T0xuxn3D.js";
import { b as B, u as l, m as C, d as M } from "./index-DigRLDFt.js";
import { u as V, a as N, b as P, _ as R, o as z, f as j, s as A } from "./useOverlay-CBdST-Oy.js";
import { _ as F } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const I = _({ __name: "MDPlainTooltip", props: { text: {}, target: {}, disabledTeleport: { type: Boolean }, placement: { default: "top" } }, setup(t) {
  const i = t, { target: d, placement: p } = g(i), c = B(), a = D(() => M(d.value) ?? c.value), f = V(), o = y("tooltipEl"), { floatingStyles: u, update: m } = N(a, o, { strategy: "fixed", placement: p, middleware: [z(8), j({ padding: 16, fallbackAxisSideDirection: "end" }), A({ padding: 16 })], whileElementsMounted: P });
  l(window.visualViewport, "resize", m);
  const s = S(false);
  l(a, "pointerenter", () => {
    s.value = true;
  }), l(a, "pointerleave", () => {
    s.value = false;
  });
  const v = C(s, 1500);
  return (L, O) => (n(), E(e(R), { to: e(f), disabled: t.disabledTeleport, container: o.value }, { default: r(() => [b(w, null, { default: r(() => [e(v) ? (n(), x("div", { key: 0, ref_key: "tooltipEl", ref: o, class: "md-plain-tooltip", style: h(e(u)) }, T(t.text), 5)) : k("", true)]), _: 1 })]), _: 1 }, 8, ["to", "disabled", "container"]));
} }), H = F(I, [["__scopeId", "data-v-01ad35bc"]]);
export {
  H as M
};
