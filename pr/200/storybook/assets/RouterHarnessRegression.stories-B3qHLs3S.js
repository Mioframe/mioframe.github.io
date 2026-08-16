import { d as c, c as p, b as t, t as a, i as e, a as h, w as l, O as m, P as _, o as b, e as k, R as f } from "./iframe-CxsxGJ5B.js";
import "./preload-helper-PPVm8Dsz.js";
const y = { "data-testid": "router-harness-regression" }, R = { "data-testid": "router-harness-path" }, w = { "data-testid": "router-harness-query-tab" }, B = { "data-testid": "router-harness-hash" }, g = { "data-testid": "router-harness-param-id" }, x = c({ __name: "RouterHarnessRegressionStory", setup(v) {
  const r = m(), s = _(), d = () => {
    s.push("/detail/99?tab=updated#bottom");
  }, u = () => {
    s.back();
  }, i = () => {
    s.forward();
  };
  return (P, n) => (b(), p("div", y, [t("p", R, a(e(r).path), 1), t("p", w, a(e(r).query.tab), 1), t("p", B, a(e(r).hash), 1), t("p", g, a(e(r).params.id), 1), h(e(f), { "data-testid": "router-harness-link", to: "/" }, { default: l(() => [...n[0] || (n[0] = [k("Back to root", -1)])]), _: 1 }), t("button", { "data-testid": "router-harness-push", type: "button", onClick: d }, "Push detail 99"), t("button", { "data-testid": "router-harness-back", type: "button", onClick: u }, "Back"), t("button", { "data-testid": "router-harness-forward", type: "button", onClick: i }, "Forward")]));
} }), C = { routes: [{ path: "/", name: "router-harness-root", component: { render: () => null } }, { path: "/detail/:id", name: "router-harness-detail", component: { render: () => null } }], initialLocation: "/detail/42?tab=overview#top" }, S = { title: "shared/lib/router/RouterHarnessRegression", component: x, parameters: { layout: "centered", router: C } }, o = {};
o.parameters = { ...o.parameters, docs: { ...o.parameters?.docs, source: { originalSource: "{}", ...o.parameters?.docs?.source } } };
const V = ["Default"];
export {
  o as Default,
  V as __namedExportsOrder,
  S as default
};
