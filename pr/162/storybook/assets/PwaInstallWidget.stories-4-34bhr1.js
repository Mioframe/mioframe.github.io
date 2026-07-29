import { d as g, c as P, u as e, w as I, o as _, g as a, h as r, b as v, e as f } from "./iframe-CAtcu9T7.js";
import { u as W, a as d } from "./usePwaInstallAction-B7eRr_Cp.js";
import "./MDList.vue_vue_type_style_index_0_scoped_7da43f85_lang-DVHx7wc1.js";
import "./useStateLayer-V5uQxk2m.js";
import { M as b } from "./MDCard-Njdx4aeh.js";
import { M as i } from "./MDButton-C9SEANxq.js";
import "./MDLoadingIndicator-pbSscdwU.js";
import { _ as h } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-CBJlwsWx.js";
const y = { class: "pwa-install-widget__actions" }, x = g({ __name: "PwaInstallWidget", setup(t) {
  const { hasRetainedPrompt: p, runInstallAction: m, dismissHomeWidget: c } = W(), u = v(() => p.value ? "Install" : "How to install"), w = () => {
    m();
  };
  return (k, o) => (_(), P(e(b), { class: "pwa-install-widget", variant: "outlined", role: "region", "aria-labelledby": "pwa-install-widget-heading" }, { default: I(() => [o[0] || (o[0] = a("div", { class: "pwa-install-widget__body" }, [a("h2", { id: "pwa-install-widget-heading", class: "pwa-install-widget__headline md-typescale-title-small" }, " Install Mioframe "), a("p", { class: "pwa-install-widget__supporting-text md-typescale-body-medium" }, " Add Mioframe to your home screen for quick access and a better experience. ")], -1)), a("div", y, [r(e(i), { label: u.value, color: "filled", onClick: w }, null, 8, ["label"]), r(e(i), { label: "Later", color: "text", onClick: e(c) }, null, 8, ["onClick"])])]), _: 1 }));
} }), l = h(x, [["__scopeId", "data-v-44a3b448"]]), U = { title: "widgets/PwaInstallWidget/PwaInstallWidget", component: l, parameters: { layout: "padded" } }, n = { tags: ["visual"], render: () => ({ setup() {
  const { retainedPrompt: t } = d();
  t.value = {}, f(() => {
    t.value = null;
  });
}, components: { PwaInstallWidget: l }, template: "<PwaInstallWidget />" }) }, s = { tags: ["visual"], render: () => ({ setup() {
  const { retainedPrompt: t } = d();
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
const V = ["WithInstallPrompt", "WithoutInstallPrompt"];
export {
  n as WithInstallPrompt,
  s as WithoutInstallPrompt,
  V as __namedExportsOrder,
  U as default
};
