import { V as r, l, d, B as c, f as i, t as u, u as p, n as y, b as _, o as b } from "./iframe-Dq4fvMGb.js";
import { _ as S } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const e = r(/* @__PURE__ */ new Set()), f = () => ({ useLoadSymbol: (s) => {
  l(s, (o) => {
    o && e.add(o);
  }, { immediate: true });
}, loadedSymbols: e }), h = d({ __name: "MDSymbol", props: { name: {} }, setup(a) {
  const s = a, { name: o } = c(s), { useLoadSymbol: t, loadedSymbols: n } = f(), m = _(() => n.has(o.value));
  return t(o), (v, w) => (b(), i("i", { class: y(["md-symbol material-symbols-rounded", [{ "md-symbol_not-ready": !m.value }]]), translate: "no", "aria-hidden": "true" }, u(p(o)), 3));
} }), M = S(h, [["__scopeId", "data-v-0159d969"]]);
export {
  M
};
