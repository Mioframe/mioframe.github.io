import { d as l, c as p, b as d, t as b, f as k, e, j as u, a as r, w as _, o as s } from "./iframe-B3ODw3Yh.js";
import { M as v } from "./MDButton-Capgv1dP.js";
import "./MDLoadingIndicator-CnqnGTzy.js";
import "./MDCircularProgressIndicator-Bad1ygXF.js";
import "./useOverlay-Cd1b3qCv.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-uVYvm-4E.js";
import "./useStateLayer-BmE8qdS6.js";
import { M as f } from "./MDSymbol-Dz8s_2x7.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-BEvSyXSZ.js";
import "./useLocalSettings-Dh5j8Pr6.js";
import { M as C } from "./MDIconButton-D66N8bR-.js";
import { _ as D } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-C-RSkVqt.js";
import "./TeleportContainer.vue_vue_type_script_setup_true_lang-B5BpEm17.js";
import "./typography-C_Z8eobQ.js";
import "./onInteractionOutside-BGfF5qvN.js";
import "./main-BxowPwPx.js";
const M = { class: "md md-snackbar" }, x = { class: "md-snackbar__text" }, g = l({ __name: "MDSnackbar", props: { text: {}, actionLabel: {} }, emits: ["clickAction", "clickClose"], setup(t, { emit: n }) {
  const a = n, i = () => {
    a("clickAction");
  }, m = () => {
    a("clickClose");
  };
  return (S, h) => (s(), p("div", M, [d("div", x, b(t.text), 1), t.actionLabel ? (s(), k(e(v), { key: 0, color: "text", class: "md-snackbar__action", label: t.actionLabel, onClick: i }, null, 8, ["label"])) : u("", true), r(e(C), { tooltip: "close", color: "standard", class: "md md-snackbar__close-button", onClick: m }, { icon: _(() => [r(f, { name: "close" })]), _: 1 })]));
} }), c = D(g, [["__scopeId", "data-v-f3b14b95"]]), R = { title: "shared/ui/Snackbar/MDSnackbar", component: c, parameters: { layout: "centered" } }, o = { tags: ["visual"], args: { text: "Document saved", actionLabel: "Undo" }, render: (t) => ({ components: { MDSnackbar: c }, setup: () => ({ args: t }), template: '<div data-testid="snackbar-color-ownership"><MDSnackbar v-bind="args" /></div>' }) };
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
const T = ["ActionColorOwnership"];
export {
  o as ActionColorOwnership,
  T as __namedExportsOrder,
  R as default
};
