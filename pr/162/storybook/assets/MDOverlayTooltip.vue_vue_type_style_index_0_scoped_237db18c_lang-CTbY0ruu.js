import { d as v, B as E, c as g, u as e, w as n, j as y, o as r, h as b, f as w, t as x, k as h, E as k, U as T, b as B, r as D } from "./iframe-Cd5mQHLq.js";
import { u as S, d as l, l as C, e as M } from "./index-D3dWfn0F.js";
import { u as P, a as R, _ as V, b as z, o as N, f as U, s as j } from "./floating-ui.vue-xRqcUQfa.js";
import { _ as A } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const F = v({ __name: "MDPlainTooltip", props: { text: {}, target: {}, disabledTeleport: { type: Boolean }, placement: { default: "top" } }, setup(t) {
  const i = t, { target: d, placement: p } = E(i), c = S(), a = B(() => M(d.value) ?? c.value), f = P(), o = y("tooltipEl"), { floatingStyles: u, update: m } = R(a, o, { strategy: "fixed", placement: p, middleware: [N(8), U({ padding: 16, fallbackAxisSideDirection: "end" }), j({ padding: 16 })], whileElementsMounted: z });
  l(window.visualViewport, "resize", m);
  const s = D(false);
  l(a, "pointerenter", () => {
    s.value = true;
  }), l(a, "pointerleave", () => {
    s.value = false;
  });
  const _ = C(s, 1500);
  return (I, L) => (r(), g(e(V), { to: e(f), disabled: t.disabledTeleport, container: o.value }, { default: n(() => [b(T, null, { default: n(() => [e(_) ? (r(), w("div", { key: 0, ref_key: "tooltipEl", ref: o, class: "md-plain-tooltip", style: h(e(u)) }, x(t.text), 5)) : k("", true)]), _: 1 })]), _: 1 }, 8, ["to", "disabled", "container"]));
} }), H = A(F, [["__scopeId", "data-v-01ad35bc"]]);
export {
  H as M
};
