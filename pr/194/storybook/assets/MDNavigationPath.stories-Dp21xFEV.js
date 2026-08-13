import { d as P, o as i, f as y, e as d, A as B, c as m, a as p, F as g, l as x, h as k, r as R } from "./iframe-DAzO0cC_.js";
import { M as _ } from "./MDButton-ByEWcfh3.js";
import "./MDCheckbox.vue_vue_type_style_index_0_scoped_45affbd6_lang-BnnKqJOG.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_2d47c860_lang-BUZKk2H1.js";
import "./MDSwitch.vue_vue_type_style_index_0_scoped_579f9506_lang-DIWY0hb6.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-CuODEqW_.js";
import "./useOverlay-Cxdzlx4S.js";
import "./useStateLayer-DP2cFB4x.js";
import { M as S } from "./MDSymbol-I1yz3PyP.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-C2P9oGmS.js";
import "./useLocalSettings-vJiY-IOb.js";
import { M as z } from "./MDIconButton-8LC8bLb9.js";
import { _ as O } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_10bb3159_lang-Be9CuhxN.js";
import "./core-T_lF-iKZ.js";
import "./MDLoadingIndicator-D36Aah_V.js";
import "./index-CIjS04aG.js";
import "./typography-C_Z8eobQ.js";
import "./onInteractionOutside-CCU-5Phl.js";
import "./main-B4RzuxW8.js";
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
  const a = t, o = e, { path: s, hideCurrent: h } = B(a), l = k(() => u.split(s.value).map((r, f, c) => ({ name: r, path: u.join(u.SEPARATOR, ...c.slice(0, f + 1)) }))), M = k(() => h.value === true ? l.value.slice(0, -1) : l.value), D = () => {
    o("clickHome");
  }, C = (r) => {
    o("click", r);
  };
  return (r, f) => (i(), m("div", j, [p(d(z), { tooltip: "Home", "md-symbol-name": "home", color: "standard", class: "md-navigation-path__home-button", onClick: D }), (i(true), m(g, null, x(M.value, ({ name: c, path: v }) => (i(), m(g, { key: v }, [p(d(S), { class: "md-navigation-path__separator", name: "chevron_right" }), p(N, { label: c, path: v, onClick: C }, null, 8, ["label", "path"])], 64))), 128))]));
} }), b = O(A, [["__scopeId", "data-v-8478865b"]]), nt = { title: "shared/ui/NavigationPath/MDNavigationPath", component: b, parameters: { layout: "centered" } }, n = { args: { path: "/My Drive/Long project folder/Research materials/Final documents" }, render: () => ({ components: { MDButton: _, MDNavigationPath: b }, setup() {
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
n.parameters = { ...n.parameters, docs: { ...n.parameters?.docs, source: { originalSource: `{
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
}`, ...n.parameters?.docs?.source } } };
const it = ["ButtonGeometryAndOverflow"];
export {
  n as ButtonGeometryAndOverflow,
  it as __namedExportsOrder,
  nt as default
};
