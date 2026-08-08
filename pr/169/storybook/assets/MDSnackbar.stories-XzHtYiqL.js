import { d as l, f as d, g as p, t as b, c as k, u as e, E as u, h as r, w as _, o as s } from "./iframe-B3Q048Qo.js";
import { M as v } from "./MDButton-C8AKfFJv.js";
import "./MDLoadingIndicator-f7liwDMX.js";
import "./MDCircularProgressIndicator-wR_eNa_L.js";
import "./floating-ui.vue-Dq-pjgBo.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-CPJhTab8.js";
import "./useStateLayer-DO2uhXGM.js";
import { M as f } from "./MDSymbol-BmSF1qVS.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-CBZ0ss_m.js";
import "./useLocalSettings-Y1bkwvyO.js";
import { M as C } from "./MDIconButton-DZe-ZeFl.js";
import { _ as D } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-CYV1F2Z9.js";
import "./typography-C_Z8eobQ.js";
import "./main-BDe91txR.js";
const M = { class: "md md-snackbar" }, g = { class: "md-snackbar__text" }, x = l({ __name: "MDSnackbar", props: { text: {}, actionLabel: {} }, emits: ["clickAction", "clickClose"], setup(t, { emit: n }) {
  const a = n, i = () => {
    a("clickAction");
  }, m = () => {
    a("clickClose");
  };
  return (h, S) => (s(), d("div", M, [p("div", g, b(t.text), 1), t.actionLabel ? (s(), k(e(v), { key: 0, color: "text", class: "md-snackbar__action", label: t.actionLabel, onClick: i }, null, 8, ["label"])) : u("", true), r(e(C), { tooltip: "close", color: "standard", class: "md md-snackbar__close-button", onClick: m }, { icon: _(() => [r(f, { name: "close" })]), _: 1 })]));
} }), c = D(x, [["__scopeId", "data-v-f3b14b95"]]), P = { title: "shared/ui/Snackbar/MDSnackbar", component: c, parameters: { layout: "centered" } }, o = { tags: ["visual"], args: { text: "Document saved", actionLabel: "Undo" }, render: (t) => ({ components: { MDSnackbar: c }, setup: () => ({ args: t }), template: '<div data-testid="snackbar-color-ownership"><MDSnackbar v-bind="args" /></div>' }) };
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
const Q = ["ActionColorOwnership"];
export {
  o as ActionColorOwnership,
  Q as __namedExportsOrder,
  P as default
};
