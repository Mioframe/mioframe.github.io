import { d as P, o as i, p as y, i as d, B, c as m, a as p, F as g, f as x, y as k, r as R } from "./iframe-CB5jtGvD.js";
import { M as _ } from "./MDButton-BESPOdLK.js";
import "./MDCheckbox.vue_vue_type_style_index_0_scoped_45affbd6_lang-BcMr9jHw.js";
import "./fab-BM7C4Glz.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_fd42f7e0_lang-ScYAOCNP.js";
import "./MDSwitch.vue_vue_type_style_index_0_scoped_579f9506_lang-BGea3e5O.js";
import "./main-YbjiYtim.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_7d3751a5_lang-hKcDpJUz.js";
import "./useLocalSettings-BSrfBCU0.js";
import { M as S } from "./MDIconButton-CfV98vwo.js";
import { M as z } from "./MDSymbol-Ce9pXjfn.js";
import { _ as O } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_4eb981d2_lang-DV1aMrhv.js";
import "./core-CHv0XPlm.js";
import "./MDLoadingIndicator-CW5JrNdo.js";
import "./index-BpIwnSnk.js";
import "./useStateLayer-CQDsYH4a.js";
const u = { SEPARATOR: "/", normalize(t) {
  const e = t.split(/\/+/), a = [];
  for (const o of e) o === "" || o === "." || (o === ".." ? a.length > 0 && a.pop() : a.push(o));
  return `/${a.join("/")}`;
}, join(...t) {
  return this.normalize(t.join("/"));
}, dirname(t) {
  const e = this.normalize(t), a = e.lastIndexOf("/");
  return a === 0 ? "/" : a === -1 ? "." : e.substring(0, a);
}, basename(t) {
  const e = this.normalize(t), a = e.lastIndexOf("/");
  return e.substring(a + 1);
}, isChildOrSame(t, e) {
  return t === "/" || t === e ? true : e.startsWith(`${t}/`);
}, isDirectChild(t, e) {
  return t === e ? true : this.dirname(e) === t;
}, isSameOrDescendantOf(t, e) {
  return e === "/" || t === e ? true : t.startsWith(`${e}/`);
}, split(t) {
  const e = this.normalize(t);
  return e === "/" ? [] : e.split("/").filter(Boolean);
} }, N = P({ __name: "MDNavigationPathSegmentButton", props: { label: {}, path: {} }, emits: ["click"], setup(t, { emit: e }) {
  const a = t, o = e, s = () => {
    o("click", a.path);
  };
  return (h, l) => (i(), y(d(_), { label: t.label, color: "text", class: "md-navigation-path-segment-button", onClick: s }, null, 8, ["label"]));
} }), j = { class: "md-navigation-path", role: "navigation", "aria-label": "Path" }, A = P({ __name: "MDNavigationPath", props: { path: {}, hideCurrent: { type: Boolean } }, emits: ["click", "clickHome"], setup(t, { emit: e }) {
  const a = t, o = e, { path: s, hideCurrent: h } = B(a), l = k(() => u.split(s.value).map((n, f, c) => ({ name: n, path: u.join(u.SEPARATOR, ...c.slice(0, f + 1)) }))), M = k(() => h.value === true ? l.value.slice(0, -1) : l.value), D = () => {
    o("clickHome");
  }, C = (n) => {
    o("click", n);
  };
  return (n, f) => (i(), m("div", j, [p(d(S), { tooltip: "Home", "md-symbol-name": "home", color: "standard", class: "md-navigation-path__home-button", onClick: D }), (i(true), m(g, null, x(M.value, ({ name: c, path: v }) => (i(), m(g, { key: v }, [p(d(z), { class: "md-navigation-path__separator", name: "chevron_right" }), p(N, { label: c, path: v, onClick: C }, null, 8, ["label", "path"])], 64))), 128))]));
} }), b = O(A, [["__scopeId", "data-v-8478865b"]]), at = { title: "shared/ui/NavigationPath/MDNavigationPath", component: b, parameters: { layout: "centered" } }, r = { args: { path: "/My Drive/Long project folder/Research materials/Final documents" }, render: () => ({ components: { MDButton: _, MDNavigationPath: b }, setup() {
  const t = R("none");
  return { onClickPath: (a) => {
    t.value = a;
  }, selectedPath: t };
}, template: `
      <div data-testid="navigation-path-contract" style="width: 320px">
        <MDButton data-testid="small-button-reference" label="Reference" color="text" size="small" />
        <MDNavigationPath
          path="/My Drive/Long project folder/Research materials/Final documents"
          @click="onClickPath"
        />
        <output data-testid="selected-navigation-path">{{ selectedPath }}</output>
      </div>
    ` }) };
r.parameters = { ...r.parameters, docs: { ...r.parameters?.docs, source: { originalSource: `{
  args: {
    path: '/My Drive/Long project folder/Research materials/Final documents'
  },
  render: () => ({
    components: {
      MDButton,
      MDNavigationPath
    },
    setup() {
      const selectedPath = ref('none');
      const onClickPath = (path: string) => {
        selectedPath.value = path;
      };
      return {
        onClickPath,
        selectedPath
      };
    },
    template: \`
      <div data-testid="navigation-path-contract" style="width: 320px">
        <MDButton data-testid="small-button-reference" label="Reference" color="text" size="small" />
        <MDNavigationPath
          path="/My Drive/Long project folder/Research materials/Final documents"
          @click="onClickPath"
        />
        <output data-testid="selected-navigation-path">{{ selectedPath }}</output>
      </div>
    \`
  })
}`, ...r.parameters?.docs?.source } } };
const ot = ["ButtonGeometryAndOverflow"];
export {
  r as ButtonGeometryAndOverflow,
  ot as __namedExportsOrder,
  at as default
};
