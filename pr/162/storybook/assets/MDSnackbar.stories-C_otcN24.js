import { d as l, f as d, g as p, t as b, c as k, u as e, E as u, h as r, w as _, o as s } from "./iframe-aWYE055N.js";
import { M as v } from "./MDButton-C60j8bHc.js";
import "./MDLoadingIndicator-P5UzsXOu.js";
import "./MDCircularProgressIndicator-xnVTiMwY.js";
import "./floating-ui.vue-BHy6W7J6.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-DsFwnp8d.js";
import "./useStateLayer-CDtB3yNk.js";
import { M as f } from "./MDSymbol-B_ZeFRcc.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-DhVzxiuf.js";
import { M as C } from "./MDIconButton-CKGCrYv4.js";
import { _ as D } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-_G7XkgEL.js";
import "./typography-C_Z8eobQ.js";
import "./main-C2lBcRcg.js";
const M = { class: "md md-snackbar" }, g = { class: "md-snackbar__text" }, x = l({ __name: "MDSnackbar", props: { text: {}, actionLabel: {} }, emits: ["clickAction", "clickClose"], setup(t, { emit: n }) {
  const a = n, i = () => {
    a("clickAction");
  }, m = () => {
    a("clickClose");
  };
  return (h, S) => (s(), d("div", M, [p("div", g, b(t.text), 1), t.actionLabel ? (s(), k(e(v), { key: 0, color: "text", class: "md-snackbar__action", label: t.actionLabel, onClick: i }, null, 8, ["label"])) : u("", true), r(e(C), { tooltip: "close", color: "standard", class: "md md-snackbar__close-button", onClick: m }, { icon: _(() => [r(f, { name: "close" })]), _: 1 })]));
} }), c = D(x, [["__scopeId", "data-v-f3b14b95"]]), K = { title: "shared/ui/Snackbar/MDSnackbar", component: c, parameters: { layout: "centered" } }, o = { tags: ["visual"], args: { text: "Document saved", actionLabel: "Undo" }, render: (t) => ({ components: { MDSnackbar: c }, setup: () => ({ args: t }), template: '<div data-testid="snackbar-color-ownership"><MDSnackbar v-bind="args" /></div>' }) };
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
