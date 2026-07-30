import { M as o } from "./MDLoadingIndicator-Sdd4SH8G.js";
import "./iframe-DBNYVk8H.js";
import "./preload-helper-PPVm8Dsz.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
const c = { title: "Material 3/Components/Loading indicator/MDLoadingIndicator", component: o, args: { label: "Loading" }, parameters: { layout: "centered", docs: { description: { component: "Mioframe Material Loading indicator adapter backed privately by @m3e/web. Demand-scoped to the default/uncontained indeterminate presentation: an accessible purpose label, an optional numeric size (24-240 dp, default 48, clamped outside that range), and the official primary active-indicator color with a public component-token override." } } } }, a = {}, e = { tags: ["visual"], render: () => ({ components: { MDLoadingIndicator: o }, template: `
      <div data-testid="visual-md-loading-indicator-sizes" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDLoadingIndicator label="Size 24" :size="24" />
          <MDLoadingIndicator label="Size 32" :size="32" />
          <MDLoadingIndicator label="Size 40" :size="40" />
          <MDLoadingIndicator label="Default size 48" />
        </div>
      </div>
    ` }) }, i = { tags: ["visual"], render: () => ({ components: { MDLoadingIndicator: o }, template: `
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
a.parameters = { ...a.parameters, docs: { ...a.parameters?.docs, source: { originalSource: "{}", ...a.parameters?.docs?.source } } };
e.parameters = { ...e.parameters, docs: { ...e.parameters?.docs, source: { originalSource: `{
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
}`, ...e.parameters?.docs?.source } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
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
}`, ...i.parameters?.docs?.source } } };
const s = ["Default", "SizeMatrix", "ColorContract"];
export {
  i as ColorContract,
  a as Default,
  e as SizeMatrix,
  s as __namedExportsOrder,
  c as default
};
