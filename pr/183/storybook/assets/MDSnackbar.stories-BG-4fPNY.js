import { d as l, c as p, b as d, t as b, f as k, e, j as u, a as r, w as _, o as s } from "./iframe-DuRz90mR.js";
import { M as v } from "./MDButton-DOiFuycV.js";
import "./MDLoadingIndicator-D2IwS6rZ.js";
import "./MDCircularProgressIndicator-BJl67TS9.js";
import "./useOverlay-D-1GXb_C.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-CaHUUpd1.js";
import "./useStateLayer-F7-Z6NGE.js";
import { M as f } from "./MDSymbol-sYxGQYey.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-DlTR4WYm.js";
import "./useLocalSettings-BfFNB35X.js";
import { M as C } from "./MDIconButton-N44WgJKw.js";
import { _ as D } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-iTPYOSr0.js";
import "./TeleportContainer.vue_vue_type_script_setup_true_lang-6WraOl_T.js";
import "./typography-C_Z8eobQ.js";
import "./onInteractionOutside-P45x8_iS.js";
import "./main-B4nUgckX.js";
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
