import { d as l, c as p, b as d, t as b, f as k, e, j as u, a as r, w as _, o as s } from "./iframe-DYHhLY_i.js";
import { M as v } from "./MDButton-vX4RPL8s.js";
import "./MDLoadingIndicator-CNPe_n1Q.js";
import "./MDCircularProgressIndicator-CObxLwCD.js";
import "./useOverlay-CaiHk8-U.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-BteS98Gk.js";
import "./useStateLayer-D6u_hqj9.js";
import { M as f } from "./MDSymbol-ywx8DK9J.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-yD9SU49E.js";
import "./useLocalSettings-BVqT8dPR.js";
import { M as C } from "./MDIconButton-BM13i3gN.js";
import { _ as D } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-DPcEk4kQ.js";
import "./TeleportContainer.vue_vue_type_script_setup_true_lang-DyhEIl70.js";
import "./typography-C_Z8eobQ.js";
import "./onInteractionOutside-C7SmqTV8.js";
import "./main-C00eXBEp.js";
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
