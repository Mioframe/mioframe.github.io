import { r } from "./iframe-xlZKd4aF.js";
import { M as i } from "./MDLoadingIndicator-CDPqTIpt.js";
import "./preload-helper-PPVm8Dsz.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
const m = { title: "Material 3/Components/Loading indicator/MDLoadingIndicator", component: i, args: { label: "Loading" }, parameters: { layout: "centered", docs: { description: { component: "Mioframe Material Loading indicator adapter backed privately by @m3e/web. Demand-scoped to the default/uncontained indeterminate presentation: an accessible purpose label, an optional numeric size (24-240 dp, default 48, clamped outside that range), and the official primary active-indicator color with a public component-token override." } } } }, e = {}, a = { tags: ["visual"], render: () => ({ components: { MDLoadingIndicator: i }, template: `
      <div data-testid="visual-md-loading-indicator-sizes" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDLoadingIndicator label="Size 24" :size="24" />
          <MDLoadingIndicator label="Size 32" :size="32" />
          <MDLoadingIndicator label="Size 40" :size="40" />
          <MDLoadingIndicator label="Default size 48" />
        </div>
      </div>
    ` }) }, t = { render: () => ({ components: { MDLoadingIndicator: i }, setup() {
  const d = r(false), o = r(0);
  return { clickCount: o, onClick: () => {
    o.value += 1;
  }, toggleUndeclared: () => {
    d.value = !d.value;
  }, undeclaredActive: d };
}, template: `
      <div data-testid="md-loading-indicator-attribute-boundary">
        <button type="button" data-testid="toggle-undeclared-attrs" @click="toggleUndeclared">
          Toggle undeclared attrs
        </button>
        <output data-testid="attribute-boundary-click-count">{{ clickCount }}</output>
        <MDLoadingIndicator
          label="Attribute boundary"
          :aria-valuemax="undeclaredActive ? 83 : undefined"
          :aria-valuemin="undeclaredActive ? 17 : undefined"
          :aria-valuenow="undeclaredActive ? 63 : undefined"
          :contained="undeclaredActive ? true : undefined"
          :role="undeclaredActive ? 'alert' : undefined"
          :variant="undeclaredActive ? 'contained' : undefined"
          @click="onClick"
        />
      </div>
    ` }) }, n = { tags: ["visual"], render: () => ({ components: { MDLoadingIndicator: i }, template: `
      <div data-testid="visual-md-loading-indicator-colors" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDLoadingIndicator label="Default primary" />
          <MDLoadingIndicator
            label="Public color override"
            style="--md-comp-loading-indicator-active-indicator-color: #006e1c;"
          />
        </div>
      </div>
    ` }) };
e.parameters = { ...e.parameters, docs: { ...e.parameters?.docs, source: { originalSource: "{}", ...e.parameters?.docs?.source } } };
a.parameters = { ...a.parameters, docs: { ...a.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDLoadingIndicator
    },
    template: \`
      <div data-testid="visual-md-loading-indicator-sizes" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDLoadingIndicator label="Size 24" :size="24" />
          <MDLoadingIndicator label="Size 32" :size="32" />
          <MDLoadingIndicator label="Size 40" :size="40" />
          <MDLoadingIndicator label="Default size 48" />
        </div>
      </div>
    \`
  })
}`, ...a.parameters?.docs?.source } } };
t.parameters = { ...t.parameters, docs: { ...t.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDLoadingIndicator
    },
    setup() {
      const undeclaredActive = ref(false);
      const clickCount = ref(0);
      const toggleUndeclared = () => {
        undeclaredActive.value = !undeclaredActive.value;
      };
      const onClick = () => {
        clickCount.value += 1;
      };
      return {
        clickCount,
        onClick,
        toggleUndeclared,
        undeclaredActive
      };
    },
    template: \`
      <div data-testid="md-loading-indicator-attribute-boundary">
        <button type="button" data-testid="toggle-undeclared-attrs" @click="toggleUndeclared">
          Toggle undeclared attrs
        </button>
        <output data-testid="attribute-boundary-click-count">{{ clickCount }}</output>
        <MDLoadingIndicator
          label="Attribute boundary"
          :aria-valuemax="undeclaredActive ? 83 : undefined"
          :aria-valuemin="undeclaredActive ? 17 : undefined"
          :aria-valuenow="undeclaredActive ? 63 : undefined"
          :contained="undeclaredActive ? true : undefined"
          :role="undeclaredActive ? 'alert' : undefined"
          :variant="undeclaredActive ? 'contained' : undefined"
          @click="onClick"
        />
      </div>
    \`
  })
}`, ...t.parameters?.docs?.source } } };
n.parameters = { ...n.parameters, docs: { ...n.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDLoadingIndicator
    },
    template: \`
      <div data-testid="visual-md-loading-indicator-colors" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDLoadingIndicator label="Default primary" />
          <MDLoadingIndicator
            label="Public color override"
            style="--md-comp-loading-indicator-active-indicator-color: #006e1c;"
          />
        </div>
      </div>
    \`
  })
}`, ...n.parameters?.docs?.source } } };
const g = ["Default", "SizeMatrix", "AttributeBoundary", "ColorContract"];
export {
  t as AttributeBoundary,
  n as ColorContract,
  e as Default,
  a as SizeMatrix,
  g as __namedExportsOrder,
  m as default
};
