import { d as l, c as p, b as d, t as b, p as k, j as e, q as u, a as r, w as _, o as s } from "./iframe--Cz4NY7w.js";
import { M as v } from "./MDButton-BjlEX6aa.js";
import "./MDCheckbox.vue_vue_type_style_index_0_scoped_45affbd6_lang-BcMr9jHw.js";
import "./MDFab.vue_vue_type_style_index_0_scoped_a3282281_lang-XxxE3LjX.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_4de74d0c_lang-er2ULA8R.js";
import "./MDSwitch.vue_vue_type_style_index_0_scoped_579f9506_lang-BGea3e5O.js";
import "./useOverlay-DmgRpv0u.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-BMz6ICSU.js";
import "./useLocalSettings-EbFy-4I2.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-TIUwGZgp.js";
import "./useStateLayer-3AbOpDhX.js";
import { M as C } from "./MDSymbol-BLJ7Fdxb.js";
import { M as D } from "./MDIconButton-DUNZNHBb.js";
import { _ as M } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_10bb3159_lang-Bw0aXhD5.js";
import "./core-CHv0XPlm.js";
import "./MDLoadingIndicator-BsK1WfCU.js";
import "./index-BuxbxuQk.js";
import "./onInteractionOutside-CnTF94k-.js";
import "./main-t8YHIN2r.js";
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
