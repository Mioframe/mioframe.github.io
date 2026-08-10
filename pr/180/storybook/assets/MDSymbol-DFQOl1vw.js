import { W as r, B as l, d as c, N as d, c as i, t as p, e as u, n as y, h as _, o as b } from "./iframe-BH_xToKO.js";
import { _ as S } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const e = r(/* @__PURE__ */ new Set()), f = () => ({ useLoadSymbol: (s) => {
  l(s, (o) => {
    o && e.add(o);
  }, { immediate: true });
}, loadedSymbols: e }), h = c({ __name: "MDSymbol", props: { name: {} }, setup(a) {
  const s = a, { name: o } = d(s), { useLoadSymbol: t, loadedSymbols: n } = f(), m = _(() => n.has(o.value));
  return t(o), (v, w) => (b(), i("i", { class: y(["md-symbol material-symbols-rounded", [{ "md-symbol_not-ready": !m.value }]]), translate: "no", "aria-hidden": "true" }, p(u(o)), 3));
} }), M = S(h, [["__scopeId", "data-v-0159d969"]]);
export {
  M
};
