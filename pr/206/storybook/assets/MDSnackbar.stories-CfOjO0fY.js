import { d as l, c as p, b as d, t as b, p as k, i as e, q as u, a as r, w as _, o as s } from "./iframe-CNk51zxz.js";
import { M as v } from "./MDButton-DNX9ekPX.js";
import "./MDCheckbox.vue_vue_type_style_index_0_scoped_45affbd6_lang-BcMr9jHw.js";
import "./MDFab.vue_vue_type_style_index_0_scoped_04b4e77f_lang-BD1ic30s.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_fd42f7e0_lang-ScYAOCNP.js";
import "./MDSwitch.vue_vue_type_style_index_0_scoped_579f9506_lang-BGea3e5O.js";
import "./useOverlay-BSkGc0RL.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-BQx9hpKZ.js";
import "./useLocalSettings-BTFtggMe.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-CqgP4IY8.js";
import "./useStateLayer-C_unDG8b.js";
import { M as C } from "./MDSymbol-Dp-ZG7jo.js";
import { M as D } from "./MDIconButton-3SZbQ-nK.js";
import { _ as M } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_4eb981d2_lang-DV1aMrhv.js";
import "./core-CHv0XPlm.js";
import "./MDLoadingIndicator-CGzCHEPe.js";
import "./index-B7v-Df2K.js";
import "./onInteractionOutside-5ai7O1O9.js";
import "./main-0iBtzcRH.js";
const f = { class: "md md-snackbar" }, x = { class: "md-snackbar__text" }, g = l({ __name: "MDSnackbar", props: { text: {}, actionLabel: {} }, emits: ["clickAction", "clickClose"], setup(t, { emit: n }) {
  const a = n, i = () => {
    a("clickAction");
  }, m = () => {
    a("clickClose");
  };
  return (S, h) => (s(), p("div", f, [d("div", x, b(t.text), 1), t.actionLabel ? (s(), k(e(v), { key: 0, color: "text", class: "md-snackbar__action", label: t.actionLabel, onClick: i }, null, 8, ["label"])) : u("", true), r(e(D), { tooltip: "close", color: "standard", class: "md md-snackbar__close-button", onClick: m }, { icon: _(() => [r(C, { name: "close" })]), _: 1 })]));
} }), c = M(g, [["__scopeId", "data-v-f3b14b95"]]), W = { title: "shared/ui/Snackbar/MDSnackbar", component: c, parameters: { layout: "centered" } }, o = { tags: ["visual"], args: { text: "Document saved", actionLabel: "Undo" }, render: (t) => ({ components: { MDSnackbar: c }, setup: () => ({ args: t }), template: '<div data-testid="snackbar-color-ownership"><MDSnackbar v-bind="args" /></div>' }) };
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
const X = ["ActionColorOwnership"];
export {
  o as ActionColorOwnership,
  X as __namedExportsOrder,
  W as default
};
