import { d as P, o as i, c as B, u as d, B as y, f as m, h as p, F as g, i as x, b as k, r as R } from "./iframe-KpOVhpbr.js";
import { M as _ } from "./MDButton-kFY4CQdq.js";
import "./MDLoadingIndicator-BnL4E60m.js";
import "./MDCircularProgressIndicator-DPB16-_L.js";
import "./floating-ui.vue-BUmTfRAv.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-C3P6C78Q.js";
import "./useStateLayer-B7hGXZDY.js";
import { M as S } from "./MDSymbol-CyVc3h-Q.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-C15IVyZr.js";
import "./useLocalSettings-D01NeYCE.js";
import { M as z } from "./MDIconButton-DfQYWkeO.js";
import { _ as O } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-e6-pOXA4.js";
import "./typography-C_Z8eobQ.js";
import "./main-Bpc-YLWm.js";
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
  return (h, l) => (i(), B(d(_), { label: t.label, color: "text", class: "md-navigation-path-segment-button", onClick: s }, null, 8, ["label"]));
} }), j = { class: "md-navigation-path", role: "navigation", "aria-label": "Path" }, A = P({ __name: "MDNavigationPath", props: { path: {}, hideCurrent: { type: Boolean } }, emits: ["click", "clickHome"], setup(t, { emit: e }) {
  const a = t, o = e, { path: s, hideCurrent: h } = y(a), l = k(() => u.split(s.value).map((n, f, c) => ({ name: n, path: u.join(u.SEPARATOR, ...c.slice(0, f + 1)) }))), M = k(() => h.value === true ? l.value.slice(0, -1) : l.value), D = () => {
    o("clickHome");
  }, C = (n) => {
    o("click", n);
  };
  return (n, f) => (i(), m("div", j, [p(d(z), { tooltip: "Home", "md-symbol-name": "home", color: "standard", class: "md-navigation-path__home-button", onClick: D }), (i(true), m(g, null, x(M.value, ({ name: c, path: v }) => (i(), m(g, { key: v }, [p(d(S), { class: "md-navigation-path__separator", name: "chevron_right" }), p(N, { label: c, path: v, onClick: C }, null, 8, ["label", "path"])], 64))), 128))]));
} }), b = O(A, [["__scopeId", "data-v-8478865b"]]), tt = { title: "shared/ui/NavigationPath/MDNavigationPath", component: b, parameters: { layout: "centered" } }, r = { args: { path: "/My Drive/Long project folder/Research materials/Final documents" }, render: () => ({ components: { MDButton: _, MDNavigationPath: b }, setup() {
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
const et = ["ButtonGeometryAndOverflow"];
export {
  r as ButtonGeometryAndOverflow,
  et as __namedExportsOrder,
  tt as default
};
