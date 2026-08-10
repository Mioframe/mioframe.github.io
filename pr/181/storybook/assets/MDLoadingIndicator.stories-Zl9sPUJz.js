import { r as c } from "./iframe-CGoIUeDj.js";
import { M as e } from "./MDLoadingIndicator-DxTGrHAU.js";
import "./preload-helper-PPVm8Dsz.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
const g = { title: "Material 3/Components/Loading indicator/MDLoadingIndicator", component: e, args: { label: "Loading" }, parameters: { layout: "centered", docs: { description: { component: "Mioframe Material Loading indicator adapter backed privately by @m3e/web. Demand-scoped to the default/uncontained indeterminate presentation: an accessible purpose label, an optional numeric size (24-240 dp, default 48, clamped outside that range), and the official primary active-indicator color with a public component-token override." } } } }, a = {}, t = { tags: ["visual"], render: () => ({ components: { MDLoadingIndicator: e }, template: `
      <div data-testid="visual-md-loading-indicator-sizes" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDLoadingIndicator label="Size 24" :size="24" />
          <MDLoadingIndicator label="Size 32" :size="32" />
          <MDLoadingIndicator label="Size 40" :size="40" />
          <MDLoadingIndicator label="Default size 48" />
        </div>
      </div>
    ` }) }, n = { render: () => ({ components: { MDLoadingIndicator: e }, setup() {
  const o = c(false), r = c(0);
  return { clickCount: r, onClick: () => {
    r.value += 1;
  }, toggleUndeclared: () => {
    o.value = !o.value;
  }, undeclaredActive: o };
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
    ` }) }, d = { tags: ["visual"], render: () => ({ components: { MDLoadingIndicator: e }, template: `
      <div data-testid="visual-md-loading-indicator-colors" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDLoadingIndicator label="Default primary" />
          <MDLoadingIndicator
            label="Public color override"
            style="--md-comp-loading-indicator-active-indicator-color: #006e1c;"
          />
        </div>
      </div>
    ` }) }, i = { render: () => ({ components: { MDLoadingIndicator: e }, template: `
      <div
        data-testid="visual-md-loading-indicator-legacy-surface"
        class="md"
        style="--md-container-color: #fff8f7; --md-content-color: #b3261e;"
      >
        <p data-testid="legacy-surface-text">Surface-owned ordinary text</p>
        <MDLoadingIndicator label="Surface standalone loading" />
      </div>
    ` }) };
a.parameters = { ...a.parameters, docs: { ...a.parameters?.docs, source: { originalSource: "{}", ...a.parameters?.docs?.source } } };
t.parameters = { ...t.parameters, docs: { ...t.parameters?.docs, source: { originalSource: `{
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
}`, ...t.parameters?.docs?.source } } };
n.parameters = { ...n.parameters, docs: { ...n.parameters?.docs, source: { originalSource: `{
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
}`, ...n.parameters?.docs?.source } } };
d.parameters = { ...d.parameters, docs: { ...d.parameters?.docs, source: { originalSource: `{
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
}`, ...d.parameters?.docs?.source } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDLoadingIndicator
    },
    template: \`
      <div
        data-testid="visual-md-loading-indicator-legacy-surface"
        class="md"
        style="--md-container-color: #fff8f7; --md-content-color: #b3261e;"
      >
        <p data-testid="legacy-surface-text">Surface-owned ordinary text</p>
        <MDLoadingIndicator label="Surface standalone loading" />
      </div>
    \`
  })
}`, ...i.parameters?.docs?.source } } };
const b = ["Default", "SizeMatrix", "AttributeBoundary", "ColorContract", "LegacySurfaceIsolation"];
export {
  n as AttributeBoundary,
  d as ColorContract,
  a as Default,
  i as LegacySurfaceIsolation,
  t as SizeMatrix,
  b as __namedExportsOrder,
  g as default
};
