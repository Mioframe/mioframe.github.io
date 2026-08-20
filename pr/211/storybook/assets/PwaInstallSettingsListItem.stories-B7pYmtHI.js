import { d as p, p as c, w as u, i as d, o as I, e as P, t as g, y as L, I as v } from "./iframe-NLCeLsW5.js";
import "./MDList.vue_vue_type_style_index_0_scoped_7da43f85_lang-BwnjsRs3.js";
import "./useStateLayer-DhDWCMWP.js";
import { M as w, a as n } from "./MDList-CeZMO8UE.js";
import { u as D, a as i } from "./usePwaInstallAction-36YbvKda.js";
import "./preload-helper-PPVm8Dsz.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./index-Dssnc-8d.js";
import "./useLocalSettings-CpGnx38V.js";
const a = p({ __name: "PwaInstallSettingsListItem", setup(t) {
  const { hasRetainedPrompt: o, runInstallAction: l } = D(), r = L(() => o.value ? "Install" : "How to install"), m = () => {
    l();
  };
  return (M, S) => (I(), c(d(w), { mode: "single-action", class: "pwa-install-settings-list-item", "label-text": "Install app", onAction: m }, { supportingText: u(() => [P(g(r.value), 1)]), _: 1 }));
} }), A = { title: "features/pwaInstall/PwaInstallSettingsListItem", component: a, parameters: { layout: "padded" } }, e = { tags: ["visual"], render: () => ({ setup() {
  const { retainedPrompt: t } = i();
  t.value = {}, v(() => {
    t.value = null;
  });
}, components: { PwaInstallSettingsListItem: a, MDList: n }, template: '<MDList tag="div"><PwaInstallSettingsListItem /></MDList>' }) }, s = { tags: ["visual"], render: () => ({ setup() {
  const { retainedPrompt: t } = i();
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
const C = ["WithInstallPrompt", "WithoutInstallPrompt"];
export {
  e as WithInstallPrompt,
  s as WithoutInstallPrompt,
  C as __namedExportsOrder,
  A as default
};
