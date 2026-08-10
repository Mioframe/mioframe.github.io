import { d as l, c as d, b as p, t as b, f as k, e, j as u, a as r, w as _, o as s } from "./iframe-T0xuxn3D.js";
import { M as v } from "./MDButton-VcMv5iDp.js";
import "./MDLoadingIndicator-Cq-XUYx5.js";
import "./MDCircularProgressIndicator-CaxRNS7L.js";
import "./useOverlay-CBdST-Oy.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-DZzg84Z0.js";
import "./useStateLayer-DeTbK6Mi.js";
import { M as f } from "./MDSymbol-CGXww1VG.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-xwyx3FRq.js";
import { M as C } from "./MDIconButton-CUJngAY5.js";
import { _ as D } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-DigRLDFt.js";
import "./typography-C_Z8eobQ.js";
import "./main-DaYNgav1.js";
const M = { class: "md md-snackbar" }, x = { class: "md-snackbar__text" }, g = l({ __name: "MDSnackbar", props: { text: {}, actionLabel: {} }, emits: ["clickAction", "clickClose"], setup(t, { emit: n }) {
  const a = n, i = () => {
    a("clickAction");
  }, m = () => {
    a("clickClose");
  };
  return (S, h) => (s(), d("div", M, [p("div", x, b(t.text), 1), t.actionLabel ? (s(), k(e(v), { key: 0, color: "text", class: "md-snackbar__action", label: t.actionLabel, onClick: i }, null, 8, ["label"])) : u("", true), r(e(C), { tooltip: "close", color: "standard", class: "md md-snackbar__close-button", onClick: m }, { icon: _(() => [r(f, { name: "close" })]), _: 1 })]));
} }), c = D(g, [["__scopeId", "data-v-f3b14b95"]]), K = { title: "shared/ui/Snackbar/MDSnackbar", component: c, parameters: { layout: "centered" } }, o = { tags: ["visual"], args: { text: "Document saved", actionLabel: "Undo" }, render: (t) => ({ components: { MDSnackbar: c }, setup: () => ({ args: t }), template: '<div data-testid="snackbar-color-ownership"><MDSnackbar v-bind="args" /></div>' }) };
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
