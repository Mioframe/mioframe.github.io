import { d as g, f as P, w as I, e, o as _, b as a, a as r, h as v, I as f } from "./iframe-BkZuit3Y.js";
import { u as W, a as p } from "./usePwaInstallAction-1kdLBFQJ.js";
import "./MDList.vue_vue_type_style_index_0_scoped_7da43f85_lang-CKd7bFme.js";
import "./useStateLayer-BZySU9st.js";
import { M as b } from "./MDCard-DSV3dDUo.js";
import { M as i } from "./MDButton-BVZlnSIZ.js";
import "./MDCheckbox.vue_vue_type_style_index_0_scoped_45affbd6_lang-BnnKqJOG.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_2d47c860_lang-BUZKk2H1.js";
import "./MDSwitch.vue_vue_type_style_index_0_scoped_579f9506_lang-DIWY0hb6.js";
import { _ as h } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./useLocalSettings-BhlWpGic.js";
import "./index-F6f5yM0-.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_10bb3159_lang-Be9CuhxN.js";
import "./core-T_lF-iKZ.js";
import "./MDLoadingIndicator-Xd9W_6lf.js";
const y = { class: "pwa-install-widget__actions" }, x = g({ __name: "PwaInstallWidget", setup(t) {
  const { hasRetainedPrompt: d, runInstallAction: m, dismissHomeWidget: c } = W(), u = v(() => d.value ? "Install" : "How to install"), w = () => {
    m();
  };
  return (k, o) => (_(), P(e(b), { class: "pwa-install-widget", variant: "outlined", role: "region", "aria-labelledby": "pwa-install-widget-heading" }, { default: I(() => [o[0] || (o[0] = a("div", { class: "pwa-install-widget__body" }, [a("h2", { id: "pwa-install-widget-heading", class: "pwa-install-widget__headline md-typescale-title-small" }, " Install Mioframe "), a("p", { class: "pwa-install-widget__supporting-text md-typescale-body-medium" }, " Add Mioframe to your home screen for quick access and a better experience. ")], -1)), a("div", y, [r(e(i), { label: u.value, color: "filled", onClick: w }, null, 8, ["label"]), r(e(i), { label: "Later", color: "text", onClick: e(c) }, null, 8, ["onClick"])])]), _: 1 }));
} }), l = h(x, [["__scopeId", "data-v-44a3b448"]]), F = { title: "widgets/PwaInstallWidget/PwaInstallWidget", component: l, parameters: { layout: "padded" } }, n = { tags: ["visual"], render: () => ({ setup() {
  const { retainedPrompt: t } = p();
  t.value = {}, f(() => {
    t.value = null;
  });
}, components: { PwaInstallWidget: l }, template: "<PwaInstallWidget />" }) }, s = { tags: ["visual"], render: () => ({ setup() {
  const { retainedPrompt: t } = p();
  t.value = null;
}, components: { PwaInstallWidget: l }, template: "<PwaInstallWidget />" }) };
n.parameters = { ...n.parameters, docs: { ...n.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    setup() {
      const {
        retainedPrompt
      } = usePwaInstallRuntime();
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- BeforeInstallPromptEvent cannot be instantiated directly; structural cast is the only option in story setup
      retainedPrompt.value = {} as BeforeInstallPromptEvent;
      onUnmounted(() => {
        retainedPrompt.value = null;
      });
    },
    components: {
      PwaInstallWidget
    },
    template: '<PwaInstallWidget />'
  })
}`, ...n.parameters?.docs?.source } } };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    setup() {
      const {
        retainedPrompt
      } = usePwaInstallRuntime();
      retainedPrompt.value = null;
    },
    components: {
      PwaInstallWidget
    },
    template: '<PwaInstallWidget />'
  })
}`, ...s.parameters?.docs?.source } } };
const G = ["WithInstallPrompt", "WithoutInstallPrompt"];
export {
  n as WithInstallPrompt,
  s as WithoutInstallPrompt,
  G as __namedExportsOrder,
  F as default
};
