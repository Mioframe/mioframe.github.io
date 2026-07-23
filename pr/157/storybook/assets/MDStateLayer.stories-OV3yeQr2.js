import { d, r as o, l as n } from "./iframe-Cd65_v4V.js";
import { M as t, u as p, a as c } from "./useStateLayer-B2HE49WJ.js";
import "./preload-helper-PPVm8Dsz.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
const u = d({ components: { MDStateLayer: t }, props: { label: { type: String, required: true }, disabled: { type: Boolean, default: false }, enableRipple: { type: Boolean, default: true }, dragged: { type: Boolean, default: false } }, setup(e) {
  const a = o(null), { hover: l, focused: i, durationPressedState: r } = p(a);
  return c(n(() => e.enableRipple && !e.disabled ? a.value : void 0)), { focused: i, hostEl: a, hover: l, durationPressedState: r, props: e };
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
  ` }), g = { title: "shared/ui/MDStateLayer", component: t, parameters: { layout: "centered" } }, s = { tags: ["visual"], render: () => ({ components: { MDStateLayer: t, StateLayerDemoHost: u }, template: `
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
    ` }) };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
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
}`, ...s.parameters?.docs?.source } } };
const x = ["VisualStates"];
export {
  s as VisualStates,
  x as __namedExportsOrder,
  g as default
};
