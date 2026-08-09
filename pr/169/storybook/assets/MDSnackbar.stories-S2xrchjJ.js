import { d as l, f as p, g as d, t as b, c as k, u as e, E as u, h as r, w as _, o as s } from "./iframe-BmKBn1Mu.js";
import { M as v } from "./MDButton-CoUSI009.js";
import "./MDLoadingIndicator-BuA6LzDW.js";
import "./MDCircularProgressIndicator-DOisiz-R.js";
import "./useOverlay-DJ1otShK.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-B1Q_jGFY.js";
import "./useStateLayer-DalrK0pL.js";
import { M as f } from "./MDSymbol-BfB6TF8u.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-Dna3Omro.js";
import "./useLocalSettings-Bb4TLqpL.js";
import { M as C } from "./MDIconButton-7IB94KEA.js";
import { _ as D } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-CROe5JIw.js";
import "./floating-ui.vue-C3Ysfbvu.js";
import "./typography-C_Z8eobQ.js";
import "./onInteractionOutside-C4f8P7lC.js";
import "./main-s0GXXqFc.js";
const M = { class: "md md-snackbar" }, g = { class: "md-snackbar__text" }, x = l({ __name: "MDSnackbar", props: { text: {}, actionLabel: {} }, emits: ["clickAction", "clickClose"], setup(t, { emit: n }) {
  const a = n, i = () => {
    a("clickAction");
  }, m = () => {
    a("clickClose");
  };
  return (h, S) => (s(), p("div", M, [d("div", g, b(t.text), 1), t.actionLabel ? (s(), k(e(v), { key: 0, color: "text", class: "md-snackbar__action", label: t.actionLabel, onClick: i }, null, 8, ["label"])) : u("", true), r(e(C), { tooltip: "close", color: "standard", class: "md md-snackbar__close-button", onClick: m }, { icon: _(() => [r(f, { name: "close" })]), _: 1 })]));
} }), c = D(x, [["__scopeId", "data-v-f3b14b95"]]), R = { title: "shared/ui/Snackbar/MDSnackbar", component: c, parameters: { layout: "centered" } }, o = { tags: ["visual"], args: { text: "Document saved", actionLabel: "Undo" }, render: (t) => ({ components: { MDSnackbar: c }, setup: () => ({ args: t }), template: '<div data-testid="snackbar-color-ownership"><MDSnackbar v-bind="args" /></div>' }) };
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
