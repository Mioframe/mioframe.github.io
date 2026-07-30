import { o as r } from "./iframe-Bk97ZflZ.js";
import { M as n } from "./MDList-X69RJy3i.js";
import { _ as a, u as i } from "./PwaInstallSettingsListItem-BNMae54u.js";
import "./preload-helper-PPVm8Dsz.js";
import "./useStateLayer-DuchyksI.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./MDSymbol-CXWoQaoQ.js";
import "./useLocalSettings-D23vDcG0.js";
const P = { title: "features/pwaInstall/PwaInstallSettingsListItem", component: a, parameters: { layout: "padded" } }, e = { tags: ["visual"], render: () => ({ setup() {
  const { retainedPrompt: t } = i();
  t.value = {}, r(() => {
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
const L = ["WithInstallPrompt", "WithoutInstallPrompt"];
export {
  e as WithInstallPrompt,
  s as WithoutInstallPrompt,
  L as __namedExportsOrder,
  P as default
};
