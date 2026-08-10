import { d as _, C as g, i as y, o as n, f as E, e, w as r, a as w, W as x, c as b, v as h, t as T, j as k, h as C, r as D } from "./iframe-BW_3G6Xd.js";
import { d as S, u as l, m as B, e as M } from "./index-CvzXYYFH.js";
import { u as P, a as R, _ as V, o as z, f as N, s as j } from "./TeleportContainer.vue_vue_type_script_setup_true_lang-Am3Z5Qnh.js";
import { u as A } from "./useOverlay-CXw3ON-R.js";
import { _ as F } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const I = _({ __name: "MDPlainTooltip", props: { text: {}, target: {}, disabledTeleport: { type: Boolean }, placement: { default: "top" } }, setup(t) {
  const i = t, { target: p, placement: d } = g(i), c = S(), a = C(() => M(p.value) ?? c.value), f = A(), o = y("tooltipEl"), { floatingStyles: u, update: m } = P(a, o, { strategy: "fixed", placement: d, middleware: [z(8), N({ padding: 16, fallbackAxisSideDirection: "end" }), j({ padding: 16 })], whileElementsMounted: R });
  l(window.visualViewport, "resize", m);
  const s = D(false);
  l(a, "pointerenter", () => {
    s.value = true;
  }), l(a, "pointerleave", () => {
    s.value = false;
  });
  const v = B(s, 1500);
  return (L, O) => (n(), E(e(V), { to: e(f), disabled: t.disabledTeleport, container: o.value }, { default: r(() => [w(x, null, { default: r(() => [e(v) ? (n(), b("div", { key: 0, ref_key: "tooltipEl", ref: o, class: "md-plain-tooltip", style: h(e(u)) }, T(t.text), 5)) : k("", true)]), _: 1 })]), _: 1 }, 8, ["to", "disabled", "container"]));
} }), H = F(I, [["__scopeId", "data-v-01ad35bc"]]);
export {
  H as M
};
