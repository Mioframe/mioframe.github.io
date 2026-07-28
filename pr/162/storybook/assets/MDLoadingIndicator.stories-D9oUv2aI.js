import { M as n } from "./MDLoadingIndicator-6TbdKw3k.js";
import "./iframe-08fgOXbT.js";
import "./preload-helper-PPVm8Dsz.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
const s = { title: "Material 3/Components/Loading indicator/MDLoadingIndicator", component: n, args: { label: "Loading" }, parameters: { layout: "centered", docs: { description: { component: "Mioframe Material Loading indicator adapter backed privately by @m3e/web. Demand-scoped to the default/uncontained indeterminate presentation required by MDButton loading composition: an accessible purpose label, an optional numeric size (24-240 dp, default 48, clamped outside that range), and inherited active-indicator color." } } } }, a = {}, e = { tags: ["visual"], render: () => ({ components: { MDLoadingIndicator: n }, template: `
      <div data-testid="visual-md-loading-indicator-sizes" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDLoadingIndicator label="Size 24" :size="24" />
          <MDLoadingIndicator label="Size 32" :size="32" />
          <MDLoadingIndicator label="Size 40" :size="40" />
          <MDLoadingIndicator label="Default size 48" />
        </div>
      </div>
    ` }) }, i = { tags: ["visual"], render: () => ({ components: { MDLoadingIndicator: n }, template: `
      <div data-testid="visual-md-loading-indicator-inherited-color" class="visual-checker-backdrop">
        <div class="visual-row">
          <span style="color: #6750a4;"><MDLoadingIndicator label="Primary colored" /></span>
          <span style="color: #ffffff; background: #6750a4; display: inline-flex; padding: 8px;">
            <MDLoadingIndicator label="On primary background" />
          </span>
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
      <div data-testid="visual-md-loading-indicator-inherited-color" class="visual-checker-backdrop">
        <div class="visual-row">
          <span style="color: #6750a4;"><MDLoadingIndicator label="Primary colored" /></span>
          <span style="color: #ffffff; background: #6750a4; display: inline-flex; padding: 8px;">
            <MDLoadingIndicator label="On primary background" />
          </span>
        </div>
      </div>
    \`
  })
}`, ...i.parameters?.docs?.source } } };
const l = ["Default", "SizeMatrix", "InheritedColorOnColoredSurfaces"];
export {
  a as Default,
  i as InheritedColorOnColoredSurfaces,
  e as SizeMatrix,
  l as __namedExportsOrder,
  s as default
};
