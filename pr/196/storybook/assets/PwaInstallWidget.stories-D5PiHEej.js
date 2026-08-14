import { d as g, p as P, w as I, j as e, o as _, b as a, a as r, y as v, I as f } from "./iframe-CHPDa0j6.js";
import { u as W, a as p } from "./usePwaInstallAction-BB0CiGto.js";
import "./MDList.vue_vue_type_style_index_0_scoped_7da43f85_lang-CbpIjBqu.js";
import "./useStateLayer-Cp3LC58g.js";
import { M as y } from "./MDCard-Jxl3e1ua.js";
import { M as i } from "./MDButton-Cb-uTzhf.js";
import "./MDCheckbox.vue_vue_type_style_index_0_scoped_45affbd6_lang-BnnKqJOG.js";
import "./MDFab.vue_vue_type_style_index_0_scoped_a3282281_lang-dAAf79jX.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_2d47c860_lang-BUZKk2H1.js";
import "./MDSwitch.vue_vue_type_style_index_0_scoped_579f9506_lang-DIWY0hb6.js";
import { _ as b } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./useLocalSettings-BJnmoTrX.js";
import "./index-Cbs5MwuF.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_10bb3159_lang-Be9CuhxN.js";
import "./core-T_lF-iKZ.js";
import "./MDLoadingIndicator-D4voOaTo.js";
const h = { class: "pwa-install-widget__actions" }, x = g({ __name: "PwaInstallWidget", setup(t) {
  const { hasRetainedPrompt: d, runInstallAction: m, dismissHomeWidget: c } = W(), u = v(() => d.value ? "Install" : "How to install"), w = () => {
    m();
  };
  return (k, o) => (_(), P(e(y), { class: "pwa-install-widget", variant: "outlined", role: "region", "aria-labelledby": "pwa-install-widget-heading" }, { default: I(() => [o[0] || (o[0] = a("div", { class: "pwa-install-widget__body" }, [a("h2", { id: "pwa-install-widget-heading", class: "pwa-install-widget__headline md-typescale-title-small" }, " Install Mioframe "), a("p", { class: "pwa-install-widget__supporting-text md-typescale-body-medium" }, " Add Mioframe to your home screen for quick access and a better experience. ")], -1)), a("div", h, [r(e(i), { label: u.value, color: "filled", onClick: w }, null, 8, ["label"]), r(e(i), { label: "Later", color: "text", onClick: e(c) }, null, 8, ["onClick"])])]), _: 1 }));
} }), l = b(x, [["__scopeId", "data-v-44a3b448"]]), G = { title: "widgets/PwaInstallWidget/PwaInstallWidget", component: l, parameters: { layout: "padded" } }, n = { tags: ["visual"], render: () => ({ setup() {
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
const J = ["WithInstallPrompt", "WithoutInstallPrompt"];
export {
  n as WithInstallPrompt,
  s as WithoutInstallPrompt,
  J as __namedExportsOrder,
  G as default
};
