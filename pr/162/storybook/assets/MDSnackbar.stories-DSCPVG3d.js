import { d as l, f as d, g as p, t as k, c as b, u as e, E as u, h as r, w as _, o as s } from "./iframe-DBNYVk8H.js";
import { M as v } from "./MDButton-6zhg887o.js";
import "./MDLoadingIndicator-Sdd4SH8G.js";
import "./MDCircularProgressIndicator-DMnIscRk.js";
import "./floating-ui.vue-CZbj_Ted.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-Doz4LY7l.js";
import "./useStateLayer-DLDcxNCM.js";
import { M as f } from "./MDSymbol-d1yuwRGs.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-D4BKVc2m.js";
import { M as C } from "./MDIconButton-DaZ4gPz_.js";
import { _ as D } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-BvesK8Qv.js";
import "./typography-C_Z8eobQ.js";
import "./main-CPc_lryB.js";
const M = { class: "md md-snackbar" }, g = { class: "md-snackbar__text" }, x = l({ __name: "MDSnackbar", props: { text: {}, actionLabel: {} }, emits: ["clickAction", "clickClose"], setup(t, { emit: n }) {
  const a = n, i = () => {
    a("clickAction");
  }, m = () => {
    a("clickClose");
  };
  return (h, S) => (s(), d("div", M, [p("div", g, k(t.text), 1), t.actionLabel ? (s(), b(e(v), { key: 0, color: "text", class: "md-snackbar__action", label: t.actionLabel, onClick: i }, null, 8, ["label"])) : u("", true), r(e(C), { tooltip: "close", color: "standard", class: "md md-snackbar__close-button", onClick: m }, { icon: _(() => [r(f, { name: "close" })]), _: 1 })]));
} }), c = D(x, [["__scopeId", "data-v-af74e535"]]), K = { title: "shared/ui/Snackbar/MDSnackbar", component: c, parameters: { layout: "centered" } }, o = { tags: ["visual"], args: { text: "Document saved", actionLabel: "Undo" }, render: (t) => ({ components: { MDSnackbar: c }, setup: () => ({ args: t }), template: '<div data-testid="snackbar-color-ownership"><MDSnackbar v-bind="args" /></div>' }) };
o.parameters = { ...o.parameters, docs: { ...o.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  args: {
    text: 'Document saved',
    actionLabel: 'Undo'
  },
  render: args => ({
    components: {
      MDSnackbar
    },
    setup: () => ({
      args
    }),
    template: '<div data-testid="snackbar-color-ownership"><MDSnackbar v-bind="args" /></div>'
  })
}`, ...o.parameters?.docs?.source } } };
const P = ["ActionColorOwnership"];
export {
  o as ActionColorOwnership,
  P as __namedExportsOrder,
  K as default
};
