import { M as i } from "./MDCircularProgressIndicator-BYg1pCtM.js";
import "./iframe-BHm5Ipn_.js";
import "./preload-helper-PPVm8Dsz.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
const g = { title: "Material 3/Components/Progress Indicators/MDCircularProgressIndicator", component: i, parameters: { layout: "centered", docs: { description: { component: ["Checked against Material 3 `components/progress-indicators/{overview,specs}` (circular variant only).", "", "**Props**: `progress` (`0`-`1` determinate value; omit for indeterminate), `size` (rendered diameter in CSS pixels, default `40`), `label` (accessible name; omit for the decorative `aria-hidden` default used by every current consumer).", "", "**Tokens**: `--md-comp-progress-indicator-active-indicator-color` / `-track-color`. The active-indicator route is also the public `--md-circular-progress-color` external contract, overridable by any consumer (e.g. `MDButton`)."].join(`
`) } } } }, r = {}, s = { args: { progress: 0.65 } }, e = { args: { progress: 0 } }, a = { args: { progress: 0.4, label: "Uploading" } }, o = { tags: ["visual"], render: () => ({ components: { MDCircularProgressIndicator: i }, template: `
      <div data-testid="visual-md-circular-progress-indicator-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDCircularProgressIndicator data-testid="progress-indeterminate" />
          <MDCircularProgressIndicator data-testid="progress-0" :progress="0" />
          <MDCircularProgressIndicator data-testid="progress-25" :progress="0.25" />
          <MDCircularProgressIndicator data-testid="progress-65" :progress="0.65" />
          <MDCircularProgressIndicator data-testid="progress-100" :progress="1" />
        </div>
        <div class="visual-row">
          <MDCircularProgressIndicator data-testid="progress-size-16" :size="16" :progress="0.5" />
          <MDCircularProgressIndicator data-testid="progress-size-24" :size="24" :progress="0.5" />
          <MDCircularProgressIndicator data-testid="progress-size-40" :size="40" :progress="0.5" />
          <MDCircularProgressIndicator data-testid="progress-size-64" :size="64" :progress="0.5" />
        </div>
      </div>
    ` }) }, t = { tags: ["visual"], render: () => ({ components: { MDCircularProgressIndicator: i }, template: `
      <div data-testid="visual-md-circular-progress-indicator-token-routing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDCircularProgressIndicator
            data-testid="progress-recolored"
            :progress="0.5"
            style="
              --md-circular-progress-color: rgb(200 20 60);
              --md-comp-progress-indicator-track-color: rgb(20 60 200);
            "
          />
        </div>
      </div>
    ` }) };
r.parameters = { ...r.parameters, docs: { ...r.parameters?.docs, source: { originalSource: "{}", ...r.parameters?.docs?.source } } };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
  args: {
    progress: 0.65
  }
}`, ...s.parameters?.docs?.source } } };
e.parameters = { ...e.parameters, docs: { ...e.parameters?.docs, source: { originalSource: `{
  args: {
    progress: 0
  }
}`, ...e.parameters?.docs?.source } } };
a.parameters = { ...a.parameters, docs: { ...a.parameters?.docs, source: { originalSource: `{
  args: {
    progress: 0.4,
    label: 'Uploading'
  }
}`, ...a.parameters?.docs?.source } } };
o.parameters = { ...o.parameters, docs: { ...o.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDCircularProgressIndicator
    },
    template: \`
      <div data-testid="visual-md-circular-progress-indicator-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDCircularProgressIndicator data-testid="progress-indeterminate" />
          <MDCircularProgressIndicator data-testid="progress-0" :progress="0" />
          <MDCircularProgressIndicator data-testid="progress-25" :progress="0.25" />
          <MDCircularProgressIndicator data-testid="progress-65" :progress="0.65" />
          <MDCircularProgressIndicator data-testid="progress-100" :progress="1" />
        </div>
        <div class="visual-row">
          <MDCircularProgressIndicator data-testid="progress-size-16" :size="16" :progress="0.5" />
          <MDCircularProgressIndicator data-testid="progress-size-24" :size="24" :progress="0.5" />
          <MDCircularProgressIndicator data-testid="progress-size-40" :size="40" :progress="0.5" />
          <MDCircularProgressIndicator data-testid="progress-size-64" :size="64" :progress="0.5" />
        </div>
      </div>
    \`
  })
}`, ...o.parameters?.docs?.source } } };
t.parameters = { ...t.parameters, docs: { ...t.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDCircularProgressIndicator
    },
    template: \`
      <div data-testid="visual-md-circular-progress-indicator-token-routing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDCircularProgressIndicator
            data-testid="progress-recolored"
            :progress="0.5"
            style="
              --md-circular-progress-color: rgb(200 20 60);
              --md-comp-progress-indicator-track-color: rgb(20 60 200);
            "
          />
        </div>
      </div>
    \`
  })
}`, ...t.parameters?.docs?.source } } };
const l = ["Indeterminate", "Determinate", "DeterminateEmpty", "Labeled", "VisualStates", "TokenRouting"];
export {
  s as Determinate,
  e as DeterminateEmpty,
  r as Indeterminate,
  a as Labeled,
  t as TokenRouting,
  o as VisualStates,
  l as __namedExportsOrder,
  g as default
};
