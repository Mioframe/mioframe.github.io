import { d as p, c, w as u, u as d, o as I, a as P, t as g, b as L, e as v } from "./iframe-DC9_iB_W.js";
import "./MDList.vue_vue_type_style_index_0_scoped_7da43f85_lang-C9Z8kvGX.js";
import "./useStateLayer-CYARcJeb.js";
import { M as w, a as n } from "./MDList-D3tqd1dr.js";
import { u as D, a as o } from "./usePwaInstallAction-yNePhJER.js";
import "./preload-helper-PPVm8Dsz.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./index-BRY4_dFI.js";
const a = p({ __name: "PwaInstallSettingsListItem", setup(t) {
  const { hasRetainedPrompt: i, runInstallAction: l } = D(), r = L(() => i.value ? "Install" : "How to install"), m = () => {
    l();
  };
  return (M, S) => (I(), c(d(w), { mode: "single-action", class: "pwa-install-settings-list-item", "label-text": "Install app", onAction: m }, { supportingText: u(() => [P(g(r.value), 1)]), _: 1 }));
} }), k = { title: "features/pwaInstall/PwaInstallSettingsListItem", component: a, parameters: { layout: "padded" } }, e = { tags: ["visual"], render: () => ({ setup() {
  const { retainedPrompt: t } = o();
  t.value = {}, v(() => {
    t.value = null;
  });
}, components: { PwaInstallSettingsListItem: a, MDList: n }, template: '<MDList tag="div"><PwaInstallSettingsListItem /></MDList>' }) }, s = { tags: ["visual"], render: () => ({ setup() {
  const { retainedPrompt: t } = o();
  t.value = null;
}, components: { PwaInstallSettingsListItem: a, MDList: n }, template: '<MDList tag="div"><PwaInstallSettingsListItem /></MDList>' }) };
e.parameters = { ...e.parameters, docs: { ...e.parameters?.docs, source: { originalSource: `{
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
      PwaInstallSettingsListItem,
      MDList
    },
    template: '<MDList tag="div"><PwaInstallSettingsListItem /></MDList>'
  })
}`, ...e.parameters?.docs?.source } } };
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
      PwaInstallSettingsListItem,
      MDList
    },
    template: '<MDList tag="div"><PwaInstallSettingsListItem /></MDList>'
  })
}`, ...s.parameters?.docs?.source } } };
const A = ["WithInstallPrompt", "WithoutInstallPrompt"];
export {
  e as WithInstallPrompt,
  s as WithoutInstallPrompt,
  A as __namedExportsOrder,
  k as default
};
