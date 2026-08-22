import { d, r as n, y as p } from "./iframe-CPQujPLZ.js";
import { M as c } from "./MDButton-ZHaMYbgj.js";
import "./MDCheckbox.vue_vue_type_style_index_0_scoped_45affbd6_lang-BcMr9jHw.js";
import "./fab-BM7C4Glz.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_fd42f7e0_lang-ScYAOCNP.js";
import "./MDSwitch.vue_vue_type_style_index_0_scoped_579f9506_lang-BGea3e5O.js";
import { M as l, u, a as v } from "./useStateLayer-DOyOqYkS.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_4eb981d2_lang-DV1aMrhv.js";
import "./core-CHv0XPlm.js";
import "./MDLoadingIndicator-Dw-Jj7T7.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./index-CY-N4Z2P.js";
const m = d({ components: { MDStateLayer: l }, props: { label: { type: String, required: true }, disabled: { type: Boolean, default: false }, enableRipple: { type: Boolean, default: true }, dragged: { type: Boolean, default: false } }, setup(a) {
  const t = n(null), { hover: i, focused: o, durationPressedState: r } = u(t);
  return v(p(() => a.enableRipple && !a.disabled ? t.value : void 0)), { focused: o, hostEl: t, hover: i, durationPressedState: r, props: a };
}, template: `
    <button
      ref="hostEl"
      type="button"
      class="demo-host"
      style="position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:160px;height:56px;padding:0 24px;border:0;border-radius:20px;background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary);font:var(--md-sys-typescale-label-large-font);"
      :disabled="props.disabled"
      :class="{
        'md-state_hover': !props.disabled && hover,
        'md-state_focused': !props.disabled && focused,
        'md-state_pressed': !props.disabled && durationPressedState,
        'md-state_dragged': !props.disabled && props.dragged,
      }"
    >
      <MDStateLayer
        :hover="hover"
        :focused="focused"
        :pressed="durationPressedState"
        :dragged="props.dragged"
        :disabled="props.disabled"
      />
      <span class="demo-host__label" style="position:relative;z-index:1;">{{ props.label }}</span>
    </button>
  ` }), H = { title: "shared/ui/MDStateLayer", component: l, parameters: { layout: "centered" } }, e = { tags: ["visual"], render: () => ({ components: { MDStateLayer: l, StateLayerDemoHost: m }, template: `
      <div data-testid="visual-md-state-layer" class="visual-checker-backdrop visual-surface">
        <div class="visual-row">
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Default</span>
            <StateLayerDemoHost label="Default" :enable-ripple="false" />
          </div>
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Hover</span>
            <button class="demo-host md-state_hover" type="button" style="position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:160px;height:56px;padding:0 24px;border:0;border-radius:20px;background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary);">
              <MDStateLayer hover />
              <span class="demo-host__label" style="position:relative;z-index:1;">Hover</span>
            </button>
          </div>
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Focus visible</span>
            <button class="demo-host md-state_focused" type="button" style="position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:160px;height:56px;padding:0 24px;border:0;border-radius:20px;background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary);">
              <MDStateLayer focused />
              <span class="demo-host__label" style="position:relative;z-index:1;">Focus visible</span>
            </button>
          </div>
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Pressed</span>
            <button class="demo-host md-state_pressed" type="button" style="position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:160px;height:56px;padding:0 24px;border:0;border-radius:20px;background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary);">
              <MDStateLayer pressed />
              <span class="demo-host__label" style="position:relative;z-index:1;">Pressed</span>
            </button>
          </div>
        </div>
        <div class="visual-row">
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Dragged</span>
            <button class="demo-host md-state_dragged" type="button" style="position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:160px;height:56px;padding:0 24px;border:0;border-radius:20px;background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary);box-shadow:var(--md-sys-elevation-level2);">
              <MDStateLayer dragged />
              <span class="demo-host__label" style="position:relative;z-index:1;">Dragged</span>
            </button>
          </div>
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Disabled</span>
            <button class="demo-host md-state_hover md-state_focused md-state_pressed md-state_dragged" type="button" disabled style="position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:160px;height:56px;padding:0 24px;border:0;border-radius:20px;background:rgb(from var(--md-sys-color-on-surface) r g b / 0.12);color:rgb(from var(--md-sys-color-on-surface) r g b / 0.38);">
              <MDStateLayer hover focused pressed dragged disabled />
              <span class="demo-host__label" style="position:relative;z-index:1;">Disabled</span>
            </button>
          </div>
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Ripple enabled</span>
            <StateLayerDemoHost label="Ripple host" />
          </div>
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Ripple disabled</span>
            <StateLayerDemoHost label="No ripple host" :enable-ripple="false" />
          </div>
        </div>
      </div>
    ` }) }, s = { tags: ["visual"], render: () => ({ components: { MDButton: c }, template: `
      <div data-testid="visual-md-state-layer-hosts" class="visual-checker-backdrop visual-surface">
        <div class="visual-row">
          <MDButton label="Filled button" color="filled" />
          <MDButton label="Outlined button" color="outlined" />
          <MDButton label="Disabled button" color="filled" disabled />
        </div>
        <div class="visual-row">
          <MDButton label="Text button" color="text" />
          <MDButton label="Extra-small button" color="outlined" size="extra-small" />
        </div>
      </div>
    ` }) };
e.parameters = { ...e.parameters, docs: { ...e.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDStateLayer,
      StateLayerDemoHost
    },
    template: \`
      <div data-testid="visual-md-state-layer" class="visual-checker-backdrop visual-surface">
        <div class="visual-row">
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Default</span>
            <StateLayerDemoHost label="Default" :enable-ripple="false" />
          </div>
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Hover</span>
            <button class="demo-host md-state_hover" type="button" style="position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:160px;height:56px;padding:0 24px;border:0;border-radius:20px;background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary);">
              <MDStateLayer hover />
              <span class="demo-host__label" style="position:relative;z-index:1;">Hover</span>
            </button>
          </div>
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Focus visible</span>
            <button class="demo-host md-state_focused" type="button" style="position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:160px;height:56px;padding:0 24px;border:0;border-radius:20px;background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary);">
              <MDStateLayer focused />
              <span class="demo-host__label" style="position:relative;z-index:1;">Focus visible</span>
            </button>
          </div>
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Pressed</span>
            <button class="demo-host md-state_pressed" type="button" style="position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:160px;height:56px;padding:0 24px;border:0;border-radius:20px;background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary);">
              <MDStateLayer pressed />
              <span class="demo-host__label" style="position:relative;z-index:1;">Pressed</span>
            </button>
          </div>
        </div>
        <div class="visual-row">
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Dragged</span>
            <button class="demo-host md-state_dragged" type="button" style="position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:160px;height:56px;padding:0 24px;border:0;border-radius:20px;background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary);box-shadow:var(--md-sys-elevation-level2);">
              <MDStateLayer dragged />
              <span class="demo-host__label" style="position:relative;z-index:1;">Dragged</span>
            </button>
          </div>
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Disabled</span>
            <button class="demo-host md-state_hover md-state_focused md-state_pressed md-state_dragged" type="button" disabled style="position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:160px;height:56px;padding:0 24px;border:0;border-radius:20px;background:rgb(from var(--md-sys-color-on-surface) r g b / 0.12);color:rgb(from var(--md-sys-color-on-surface) r g b / 0.38);">
              <MDStateLayer hover focused pressed dragged disabled />
              <span class="demo-host__label" style="position:relative;z-index:1;">Disabled</span>
            </button>
          </div>
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Ripple enabled</span>
            <StateLayerDemoHost label="Ripple host" />
          </div>
          <div class="visual-cell" style="display:grid;gap:8px;justify-items:start;">
            <span class="visual-label">Ripple disabled</span>
            <StateLayerDemoHost label="No ripple host" :enable-ripple="false" />
          </div>
        </div>
      </div>
    \`
  })
}`, ...e.parameters?.docs?.source } } };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="visual-md-state-layer-hosts" class="visual-checker-backdrop visual-surface">
        <div class="visual-row">
          <MDButton label="Filled button" color="filled" />
          <MDButton label="Outlined button" color="outlined" />
          <MDButton label="Disabled button" color="filled" disabled />
        </div>
        <div class="visual-row">
          <MDButton label="Text button" color="text" />
          <MDButton label="Extra-small button" color="outlined" size="extra-small" />
        </div>
      </div>
    \`
  })
}`, ...s.parameters?.docs?.source } } };
const z = ["VisualStates", "VisualHostIntegration"];
export {
  s as VisualHostIntegration,
  e as VisualStates,
  z as __namedExportsOrder,
  H as default
};
