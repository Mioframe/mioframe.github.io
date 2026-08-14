import { d as l, c as p, b as d, t as b, f as k, e, j as u, a as r, w as _, o as s } from "./iframe-twe7UoJ3.js";
import { M as v } from "./MDButton-C1zhvhq5.js";
import "./MDCheckbox.vue_vue_type_style_index_0_scoped_45affbd6_lang-BnnKqJOG.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_2d47c860_lang-BUZKk2H1.js";
import "./MDSwitch.vue_vue_type_style_index_0_scoped_579f9506_lang-DIWY0hb6.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-DrXS_mds.js";
import "./useOverlay-DbhK9_jx.js";
import "./useStateLayer-P86cGDgt.js";
import { M as f } from "./MDSymbol-DfiJJZDL.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-CwnjtmRi.js";
import "./useLocalSettings-DnzbQzh1.js";
import { M as C } from "./MDIconButton-Dh3-I9TS.js";
import { _ as D } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_10bb3159_lang-Be9CuhxN.js";
import "./core-T_lF-iKZ.js";
import "./MDLoadingIndicator-DWhhgflU.js";
import "./index-CasDA4Rl.js";
import "./typography-C_Z8eobQ.js";
import "./onInteractionOutside-CXxdNG7C.js";
import "./main-Deakdjyc.js";
const M = { class: "md md-snackbar" }, x = { class: "md-snackbar__text" }, g = l({ __name: "MDSnackbar", props: { text: {}, actionLabel: {} }, emits: ["clickAction", "clickClose"], setup(t, { emit: n }) {
  const a = n, i = () => {
    a("clickAction");
  }, m = () => {
    a("clickClose");
  };
  return (S, h) => (s(), p("div", M, [d("div", x, b(t.text), 1), t.actionLabel ? (s(), k(e(v), { key: 0, color: "text", class: "md-snackbar__action", label: t.actionLabel, onClick: i }, null, 8, ["label"])) : u("", true), r(e(C), { tooltip: "close", color: "standard", class: "md md-snackbar__close-button", onClick: m }, { icon: _(() => [r(f, { name: "close" })]), _: 1 })]));
} }), c = D(g, [["__scopeId", "data-v-f3b14b95"]]), X = { title: "shared/ui/Snackbar/MDSnackbar", component: c, parameters: { layout: "centered" } }, o = { tags: ["visual"], args: { text: "Document saved", actionLabel: "Undo" }, render: (t) => ({ components: { MDSnackbar: c }, setup: () => ({ args: t }), template: '<div data-testid="snackbar-color-ownership"><MDSnackbar v-bind="args" /></div>' }) };
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
const Y = ["ActionColorOwnership"];
export {
  o as ActionColorOwnership,
  Y as __namedExportsOrder,
  X as default
};
