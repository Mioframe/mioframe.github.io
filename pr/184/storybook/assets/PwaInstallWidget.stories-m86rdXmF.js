import { d as g, f as P, w as I, e, o as _, b as a, a as r, h as v, H as f } from "./iframe-B3ODw3Yh.js";
import { u as W, a as p } from "./usePwaInstallAction-nlaaA7Oa.js";
import "./MDList.vue_vue_type_style_index_0_scoped_7da43f85_lang-BrOIUybC.js";
import "./useStateLayer-BmE8qdS6.js";
import { M as b } from "./MDCard-BaY2DV7g.js";
import { M as i } from "./MDButton-Capgv1dP.js";
import "./MDLoadingIndicator-CnqnGTzy.js";
import { _ as h } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./useLocalSettings-Dh5j8Pr6.js";
import "./index-C-RSkVqt.js";
const y = { class: "pwa-install-widget__actions" }, x = g({ __name: "PwaInstallWidget", setup(t) {
  const { hasRetainedPrompt: d, runInstallAction: m, dismissHomeWidget: c } = W(), u = v(() => d.value ? "Install" : "How to install"), w = () => {
    m();
  };
  return (k, o) => (_(), P(e(b), { class: "pwa-install-widget", variant: "outlined", role: "region", "aria-labelledby": "pwa-install-widget-heading" }, { default: I(() => [o[0] || (o[0] = a("div", { class: "pwa-install-widget__body" }, [a("h2", { id: "pwa-install-widget-heading", class: "pwa-install-widget__headline md-typescale-title-small" }, " Install Mioframe "), a("p", { class: "pwa-install-widget__supporting-text md-typescale-body-medium" }, " Add Mioframe to your home screen for quick access and a better experience. ")], -1)), a("div", y, [r(e(i), { label: u.value, color: "filled", onClick: w }, null, 8, ["label"]), r(e(i), { label: "Later", color: "text", onClick: e(c) }, null, 8, ["onClick"])])]), _: 1 }));
} }), l = h(x, [["__scopeId", "data-v-44a3b448"]]), V = { title: "widgets/PwaInstallWidget/PwaInstallWidget", component: l, parameters: { layout: "padded" } }, n = { tags: ["visual"], render: () => ({ setup() {
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
const q = ["WithInstallPrompt", "WithoutInstallPrompt"];
export {
  n as WithInstallPrompt,
  s as WithoutInstallPrompt,
  q as __namedExportsOrder,
  V as default
};
