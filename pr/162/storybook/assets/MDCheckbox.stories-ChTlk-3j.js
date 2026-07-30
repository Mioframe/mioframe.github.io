import { M as d } from "./MDCheckbox-DWuhcRsZ.js";
import "./iframe-DBNYVk8H.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDSymbol-d1yuwRGs.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./isUndefined-Dgw4-efh.js";
import "./useStateLayer-DLDcxNCM.js";
import "./index-BvesK8Qv.js";
import "./uniqueId-CcwiEUzO.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-Doz4LY7l.js";
import "./floating-ui.vue-CZbj_Ted.js";
const g = { title: "shared/ui/MDCheckbox", component: d, args: { ariaLabel: "Diagnostics", id: "storybook-md-checkbox-default", modelValue: false }, argTypes: { "onUpdate:modelValue": { action: "update:modelValue" }, onClick: { action: "click" } }, parameters: { layout: "centered" } }, c = `
  <div data-testid="visual-md-checkbox-states" class="visual-surface">
    <div class="visual-row">
      <MDCheckbox id="storybook-md-checkbox-unchecked" aria-label="Unchecked" :model-value="false" />
      <span>Unchecked</span>
    </div>
    <div class="visual-row">
      <MDCheckbox id="storybook-md-checkbox-checked" aria-label="Checked" :model-value="true" />
      <span>Checked</span>
    </div>
    <div class="visual-row">
      <MDCheckbox id="storybook-md-checkbox-indeterminate" aria-label="Indeterminate" indeterminate />
      <span>Indeterminate</span>
    </div>
    <div class="visual-row">
      <MDCheckbox id="storybook-md-checkbox-disabled" aria-label="Disabled" :model-value="true" disabled />
      <span>Disabled</span>
    </div>
    <div class="visual-row">
      <MDCheckbox id="storybook-md-checkbox-readonly" aria-label="Readonly" :model-value="true" readonly />
      <span>Readonly</span>
    </div>
  </div>
`, l = `
  <div data-testid="visual-md-checkbox-interaction-states" class="visual-surface">
    <div class="visual-row">
      <MDCheckbox class="md-state_hover" id="storybook-md-checkbox-hover" aria-label="Hover" :model-value="false" />
      <span>Hover</span>
    </div>
    <div class="visual-row">
      <MDCheckbox class="md-state_focused" id="storybook-md-checkbox-focus" aria-label="Focus" :model-value="true" />
      <span>Focus</span>
    </div>
    <div class="visual-row">
      <MDCheckbox class="md-state_pressed" id="storybook-md-checkbox-pressed" aria-label="Pressed" :model-value="false" />
      <span>Pressed</span>
    </div>
    <div class="visual-row">
      <MDCheckbox class="md-state_hover" id="storybook-md-checkbox-readonly-hover" aria-label="Readonly hover" :model-value="true" readonly />
      <span>Readonly hover</span>
    </div>
  </div>
`, e = {}, a = { args: { modelValue: true } }, s = { args: { indeterminate: true, modelValue: void 0 } }, o = { args: { disabled: true, modelValue: true } }, r = { tags: ["visual"], render: () => ({ components: { MDCheckbox: d }, template: c }) }, t = { tags: ["visual"], render: () => ({ components: { MDCheckbox: d }, template: l }) };
e.parameters = { ...e.parameters, docs: { ...e.parameters?.docs, source: { originalSource: "{}", ...e.parameters?.docs?.source } } };
a.parameters = { ...a.parameters, docs: { ...a.parameters?.docs, source: { originalSource: `{
  args: {
    modelValue: true
  }
}`, ...a.parameters?.docs?.source } } };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
  args: {
    indeterminate: true,
    modelValue: undefined
  }
}`, ...s.parameters?.docs?.source } } };
o.parameters = { ...o.parameters, docs: { ...o.parameters?.docs, source: { originalSource: `{
  args: {
    disabled: true,
    modelValue: true
  }
}`, ...o.parameters?.docs?.source } } };
r.parameters = { ...r.parameters, docs: { ...r.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDCheckbox
    },
    template: checkboxStatesTemplate
  })
}`, ...r.parameters?.docs?.source } } };
t.parameters = { ...t.parameters, docs: { ...t.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDCheckbox
    },
    template: checkboxInteractionStatesTemplate
  })
}`, ...t.parameters?.docs?.source } } };
const C = ["Default", "Checked", "Indeterminate", "Disabled", "VisualStates", "VisualInteractionStates"];
export {
  a as Checked,
  e as Default,
  o as Disabled,
  s as Indeterminate,
  t as VisualInteractionStates,
  r as VisualStates,
  C as __namedExportsOrder,
  g as default
};
