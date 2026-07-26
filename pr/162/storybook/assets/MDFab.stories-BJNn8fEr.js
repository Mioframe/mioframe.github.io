import { M as r } from "./MDFab-DZVXI5KG.js";
import { _ as u } from "./MDStateLayerForcedStateProvider-D22HNgYR.js";
import { u as g } from "./useFocusIndicator-BUgYPsIT.js";
import "./iframe-Cs02imFl.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDCircularProgressIndicator-3oJJhrSf.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./MDOverlayTooltip-BqThW_ZF.js";
import "./index-iT-jfvMv.js";
import "./main-3lAj5qZz.js";
import "./isNumber-BeRyA-l4.js";
import "./useStateLayer-Ckth6xmu.js";
import "./MDSymbol-CVK3lgIc.js";
const A = { title: "Material 3/Components/Buttons/MDFab", component: r, args: { tooltip: "Create item", mdSymbol: "add" }, argTypes: { onClick: { action: "click" } }, parameters: { layout: "centered", docs: { description: { component: ["Checked against Material 3 `components/floating-action-button/{overview,guidelines,specs,accessibility}`.", "", "**Props**: `size` (`regular` | `medium` | `large`, default `regular`), `color` (`primary` | `secondary` | `tertiary` | `primary-container` | `secondary-container` | `tertiary-container`, default `primary-container`), required `tooltip`.", "", "**Slots**: `icon`.", "", "**Project extension**: `loading` (`boolean | number`, `0` is active).", "", "**Tokens**: checked against the `material3` MCP snapshot captured at `2026-06-30T05:53:04.916Z`. Exact official `--md-comp-fab-*` properties are the public override surface. Each style routes container, icon, elevation, and state-layer values through local `--md-private-fab-*` rendered variables, while `MDStateLayer` continues to consume only the generic `--md-private-state-*` contract.", "", "**Required icon**: an icon source (`mdSymbol` or the `icon` slot) is required. Missing icon content logs a development warning and renders no fallback placeholder.", "", "**Color terminology**: `*-container` replaces the legacy `tonal-*` naming, matching the current Material 3 Expressive token names."].join(`
`) } } } }, S = `
  <div data-testid="visual-md-fab-states" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 2">
    <div class="visual-row"><span class="visual-gallery-label">Primary enabled</span><span class="visual-gallery-label">Secondary enabled</span><span class="visual-gallery-label">Tertiary enabled</span></div>
    <div class="visual-row">
      <MDFab tooltip="Primary" color="primary" md-symbol="add" />
      <MDFab tooltip="Secondary" color="secondary" md-symbol="edit" />
      <MDFab tooltip="Tertiary" color="tertiary" md-symbol="share" />
    </div>
    <div class="visual-row"><span class="visual-gallery-label">Primary container enabled</span><span class="visual-gallery-label">Secondary container enabled</span><span class="visual-gallery-label">Tertiary container enabled</span></div>
    <div class="visual-row">
      <MDFab tooltip="Primary container" color="primary-container" md-symbol="check" />
      <MDFab tooltip="Secondary container" color="secondary-container" md-symbol="star" />
      <MDFab tooltip="Tertiary container" color="tertiary-container" md-symbol="menu" />
    </div>
    <div class="visual-row"><span class="visual-gallery-label">Medium</span><span class="visual-gallery-label">Large</span><span class="visual-gallery-label">Loading</span></div>
    <div class="visual-row">
      <MDFab tooltip="Medium" size="medium" md-symbol="star" />
      <MDFab tooltip="Large" size="large" md-symbol="menu" />
      <MDFab tooltip="Loading" :loading="65" md-symbol="add" />
    </div>
  </div>
`, F = `
  <div data-testid="visual-md-fab-interaction-states" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 3">
    <div class="visual-row"><span class="visual-gallery-heading">Primary</span><span class="visual-gallery-label">Hover</span><span class="visual-gallery-label">Focus</span><span class="visual-gallery-label">Pressed</span></div>
    <div class="visual-row"><span aria-hidden="true"></span>
      <MDStateLayerForcedStateProvider hovered><MDFab class="md-state_hover" tooltip="Primary hover" color="primary" md-symbol="add" /></MDStateLayerForcedStateProvider>
      <MDStateLayerForcedStateProvider focused><MDFab class="md-state_focused" tooltip="Primary focus" color="primary" md-symbol="add" /></MDStateLayerForcedStateProvider>
      <MDStateLayerForcedStateProvider pressed><MDFab class="md-state_pressed" tooltip="Primary pressed" color="primary" md-symbol="add" /></MDStateLayerForcedStateProvider>
    </div>
    <div class="visual-row"><span class="visual-gallery-heading">Secondary</span><span class="visual-gallery-label">Hover</span><span class="visual-gallery-label">Focus</span><span class="visual-gallery-label">Pressed</span></div>
    <div class="visual-row"><span aria-hidden="true"></span>
      <MDStateLayerForcedStateProvider hovered><MDFab class="md-state_hover" tooltip="Secondary hover" color="secondary" md-symbol="edit" /></MDStateLayerForcedStateProvider>
      <MDStateLayerForcedStateProvider focused><MDFab class="md-state_focused" tooltip="Secondary focus" color="secondary" md-symbol="edit" /></MDStateLayerForcedStateProvider>
      <MDStateLayerForcedStateProvider pressed><MDFab class="md-state_pressed" tooltip="Secondary pressed" color="secondary" md-symbol="edit" /></MDStateLayerForcedStateProvider>
    </div>
    <div class="visual-row"><span class="visual-gallery-heading">Tertiary</span><span class="visual-gallery-label">Hover</span><span class="visual-gallery-label">Focus</span><span class="visual-gallery-label">Pressed</span></div>
    <div class="visual-row"><span aria-hidden="true"></span>
      <MDStateLayerForcedStateProvider hovered><MDFab class="md-state_hover" tooltip="Tertiary hover" color="tertiary" md-symbol="share" /></MDStateLayerForcedStateProvider>
      <MDStateLayerForcedStateProvider focused><MDFab class="md-state_focused" tooltip="Tertiary focus" color="tertiary" md-symbol="share" /></MDStateLayerForcedStateProvider>
      <MDStateLayerForcedStateProvider pressed><MDFab class="md-state_pressed" tooltip="Tertiary pressed" color="tertiary" md-symbol="share" /></MDStateLayerForcedStateProvider>
    </div>
    <div class="visual-row"><span class="visual-gallery-heading">Primary container</span><span class="visual-gallery-label">Hover</span><span class="visual-gallery-label">Focus</span><span class="visual-gallery-label">Pressed</span></div>
    <div class="visual-row"><span aria-hidden="true"></span>
      <MDStateLayerForcedStateProvider hovered><MDFab class="md-state_hover" tooltip="Primary container hover" color="primary-container" md-symbol="check" /></MDStateLayerForcedStateProvider>
      <MDStateLayerForcedStateProvider focused><MDFab class="md-state_focused" tooltip="Primary container focus" color="primary-container" md-symbol="check" /></MDStateLayerForcedStateProvider>
      <MDStateLayerForcedStateProvider pressed><MDFab class="md-state_pressed" tooltip="Primary container pressed" color="primary-container" md-symbol="check" /></MDStateLayerForcedStateProvider>
    </div>
    <div class="visual-row"><span class="visual-gallery-heading">Secondary container</span><span class="visual-gallery-label">Hover</span><span class="visual-gallery-label">Focus</span><span class="visual-gallery-label">Pressed</span></div>
    <div class="visual-row"><span aria-hidden="true"></span>
      <MDStateLayerForcedStateProvider hovered><MDFab class="md-state_hover" tooltip="Secondary container hover" color="secondary-container" md-symbol="star" /></MDStateLayerForcedStateProvider>
      <MDStateLayerForcedStateProvider focused><MDFab class="md-state_focused" tooltip="Secondary container focus" color="secondary-container" md-symbol="star" /></MDStateLayerForcedStateProvider>
      <MDStateLayerForcedStateProvider pressed><MDFab class="md-state_pressed" tooltip="Secondary container pressed" color="secondary-container" md-symbol="star" /></MDStateLayerForcedStateProvider>
    </div>
    <div class="visual-row"><span class="visual-gallery-heading">Tertiary container</span><span class="visual-gallery-label">Hover</span><span class="visual-gallery-label">Focus</span><span class="visual-gallery-label">Pressed</span></div>
    <div class="visual-row"><span aria-hidden="true"></span>
      <MDStateLayerForcedStateProvider hovered><MDFab class="md-state_hover" tooltip="Tertiary container hover" color="tertiary-container" md-symbol="menu" /></MDStateLayerForcedStateProvider>
      <MDStateLayerForcedStateProvider focused><MDFab class="md-state_focused" tooltip="Tertiary container focus" color="tertiary-container" md-symbol="menu" /></MDStateLayerForcedStateProvider>
      <MDStateLayerForcedStateProvider pressed><MDFab class="md-state_pressed" tooltip="Tertiary container pressed" color="tertiary-container" md-symbol="menu" /></MDStateLayerForcedStateProvider>
    </div>
  </div>
`, s = () => ({ template: '<div class="visual-checker-backdrop"><story /></div>' }), t = { decorators: [s] }, i = { args: { color: "secondary" }, decorators: [s] }, l = { args: { size: "large" }, decorators: [s] }, d = { args: { loading: true }, decorators: [s] }, n = { tags: ["visual"], render: () => ({ components: { MDFab: r }, template: S }) }, c = { tags: ["visual"], render: () => ({ components: { MDFab: r, MDStateLayerForcedStateProvider: u }, template: F }) }, p = { tags: ["visual"], render: () => ({ components: { MDFab: r }, template: `
      <div data-testid="visual-md-fab-size-comparison" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 2">
        <div class="visual-row"><span class="visual-gallery-label">Regular</span><span class="visual-gallery-label">Medium</span><span class="visual-gallery-label">Large</span></div>
        <div class="visual-row">
          <MDFab data-testid="fab-size-regular" tooltip="Regular" size="regular" color="primary-container" md-symbol="add" />
          <MDFab data-testid="fab-size-medium" tooltip="Medium" size="medium" color="primary-container" md-symbol="add" />
          <MDFab data-testid="fab-size-large" tooltip="Large" size="large" color="primary-container" md-symbol="add" />
        </div>
      </div>
    ` }) }, m = { decorators: [s], render: () => ({ components: { MDFab: r }, setup() {
  g();
}, template: `
      <div class="visual-checker-backdrop" style="position:fixed;inset:0;">
        <div id="visual-md-fab-focus-indicator" style="position:absolute;inset:auto 12px 12px auto;">
        <MDFab id="storybook-md-fab-focus" tooltip="Focus target" color="primary-container" md-symbol="add" />
        </div>
      </div>
    ` }) }, M = ["primary", "secondary", "tertiary", "primary-container", "secondary-container", "tertiary-container"], D = { primary: { hovered: { icon: "rgb(255 0 0)", elevation: "0 0 0 3px rgb(12 34 56)", opacity: "0.03" }, focused: { icon: "rgb(0 128 0)", elevation: "0 0 0 4px rgb(23 45 67)", opacity: "0.17" }, pressed: { icon: "rgb(0 0 255)", elevation: "0 0 0 5px rgb(34 56 78)", opacity: "0.29" } }, secondary: { hovered: { icon: "rgb(255 90 0)", elevation: "0 0 0 9px rgb(78 90 112)", opacity: "0.03" }, focused: { icon: "rgb(0 150 40)", elevation: "0 0 0 10px rgb(89 101 123)", opacity: "0.17" }, pressed: { icon: "rgb(20 20 255)", elevation: "0 0 0 11px rgb(101 112 134)", opacity: "0.29" } }, tertiary: { hovered: { icon: "rgb(255 140 0)", elevation: "0 0 0 12px rgb(112 123 145)", opacity: "0.03" }, focused: { icon: "rgb(0 170 90)", elevation: "0 0 0 13px rgb(123 134 156)", opacity: "0.17" }, pressed: { icon: "rgb(60 20 255)", elevation: "0 0 0 14px rgb(134 145 167)", opacity: "0.29" } }, "primary-container": { hovered: { icon: "rgb(255 80 0)", elevation: "0 0 0 6px rgb(45 67 89)", opacity: "0.05" }, focused: { icon: "rgb(0 180 120)", elevation: "0 0 0 7px rgb(56 78 90)", opacity: "0.19" }, pressed: { icon: "rgb(60 60 255)", elevation: "0 0 0 8px rgb(67 89 101)", opacity: "0.31" } }, "secondary-container": { hovered: { icon: "rgb(255 100 20)", elevation: "0 0 0 15px rgb(145 156 178)", opacity: "0.05" }, focused: { icon: "rgb(20 190 140)", elevation: "0 0 0 16px rgb(156 167 189)", opacity: "0.19" }, pressed: { icon: "rgb(80 80 255)", elevation: "0 0 0 17px rgb(167 178 200)", opacity: "0.31" } }, "tertiary-container": { hovered: { icon: "rgb(255 120 40)", elevation: "0 0 0 18px rgb(178 189 211)", opacity: "0.05" }, focused: { icon: "rgb(40 200 160)", elevation: "0 0 0 19px rgb(189 200 222)", opacity: "0.19" }, pressed: { icon: "rgb(100 100 255)", elevation: "0 0 0 20px rgb(200 211 233)", opacity: "0.31" } } }, f = (a) => {
  const [e, o, b] = a.replace(/^rgb\(|\)$/g, "").split(" ");
  return `rgb(${b} ${e} ${o})`;
}, h = (a, e) => {
  const o = D[a][e];
  return { [`--md-comp-fab-${a}-${e}-icon-color`]: o.icon, [`--md-comp-fab-${a}-${e}-container-elevation`]: o.elevation, [`--md-comp-fab-${a}-${e}-state-layer-color`]: f(o.icon), [`--md-comp-fab-${a}-${e}-state-layer-opacity`]: o.opacity };
}, y = { render: () => ({ components: { MDFab: r, MDStateLayerForcedStateProvider: u }, setup() {
  return { FAB_COLORS: M, fabTokenStyle: h };
}, template: `
      <div data-testid="visual-md-fab-interaction-state-tokens" class="visual-checker-backdrop">
        <div v-for="color in FAB_COLORS" :key="color" class="visual-row">
          <MDFab :data-testid="\`\${color}-resting\`" :tooltip="\`\${color} resting\`" :color="color" md-symbol="add" />
          <MDStateLayerForcedStateProvider hovered>
            <MDFab
              :data-testid="\`\${color}-hover\`"
              class="md-state_hover"
              :tooltip="\`\${color} hover\`"
              :color="color"
              md-symbol="add"
              :style="fabTokenStyle(color, 'hovered')"
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDFab
              :data-testid="\`\${color}-focus\`"
              class="md-state_focused"
              :tooltip="\`\${color} focus\`"
              :color="color"
              md-symbol="add"
              :style="fabTokenStyle(color, 'focused')"
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDFab
              :data-testid="\`\${color}-pressed\`"
              class="md-state_pressed"
              :tooltip="\`\${color} pressed\`"
              :color="color"
              md-symbol="add"
              :style="fabTokenStyle(color, 'pressed')"
            />
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    ` }) }, v = { render: () => ({ components: { MDFab: r }, template: `
      <div data-testid="visual-md-fab-loading-color-routing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDFab
            data-testid="fab-resting-color"
            tooltip="Loading"
            color="primary"
            md-symbol="add"
            style="--md-comp-fab-primary-icon-color: rgb(12 34 56);"
          />
          <MDFab
            data-testid="fab-loading-color"
            tooltip="Loading"
            color="primary"
            loading
            md-symbol="add"
            style="--md-comp-fab-primary-icon-color: rgb(12 34 56);"
          />
        </div>
      </div>
    ` }) };
t.parameters = { ...t.parameters, docs: { ...t.parameters?.docs, source: { originalSource: `{
  decorators: [withCheckerboard]
}`, ...t.parameters?.docs?.source } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
  args: {
    color: 'secondary'
  },
  decorators: [withCheckerboard]
}`, ...i.parameters?.docs?.source } } };
l.parameters = { ...l.parameters, docs: { ...l.parameters?.docs, source: { originalSource: `{
  args: {
    size: 'large'
  },
  decorators: [withCheckerboard]
}`, ...l.parameters?.docs?.source } } };
d.parameters = { ...d.parameters, docs: { ...d.parameters?.docs, source: { originalSource: `{
  args: {
    loading: true
  },
  decorators: [withCheckerboard]
}`, ...d.parameters?.docs?.source } } };
n.parameters = { ...n.parameters, docs: { ...n.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDFab
    },
    template: fabStatesTemplate
  })
}`, ...n.parameters?.docs?.source } } };
c.parameters = { ...c.parameters, docs: { ...c.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDFab,
      MDStateLayerForcedStateProvider
    },
    template: fabInteractionStatesTemplate
  })
}`, ...c.parameters?.docs?.source } } };
p.parameters = { ...p.parameters, docs: { ...p.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDFab
    },
    template: \`
      <div data-testid="visual-md-fab-size-comparison" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 2">
        <div class="visual-row"><span class="visual-gallery-label">Regular</span><span class="visual-gallery-label">Medium</span><span class="visual-gallery-label">Large</span></div>
        <div class="visual-row">
          <MDFab data-testid="fab-size-regular" tooltip="Regular" size="regular" color="primary-container" md-symbol="add" />
          <MDFab data-testid="fab-size-medium" tooltip="Medium" size="medium" color="primary-container" md-symbol="add" />
          <MDFab data-testid="fab-size-large" tooltip="Large" size="large" color="primary-container" md-symbol="add" />
        </div>
      </div>
    \`
  })
}`, ...p.parameters?.docs?.source } } };
m.parameters = { ...m.parameters, docs: { ...m.parameters?.docs, source: { originalSource: `{
  decorators: [withCheckerboard],
  render: () => ({
    components: {
      MDFab
    },
    setup() {
      useFocusIndicator();
    },
    template: \`
      <div class="visual-checker-backdrop" style="position:fixed;inset:0;">
        <div id="visual-md-fab-focus-indicator" style="position:absolute;inset:auto 12px 12px auto;">
        <MDFab id="storybook-md-fab-focus" tooltip="Focus target" color="primary-container" md-symbol="add" />
        </div>
      </div>
    \`
  })
}`, ...m.parameters?.docs?.source } } };
y.parameters = { ...y.parameters, docs: { ...y.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDFab,
      MDStateLayerForcedStateProvider
    },
    setup() {
      return {
        FAB_COLORS,
        fabTokenStyle
      };
    },
    template: \`
      <div data-testid="visual-md-fab-interaction-state-tokens" class="visual-checker-backdrop">
        <div v-for="color in FAB_COLORS" :key="color" class="visual-row">
          <MDFab :data-testid="\\\`\\\${color}-resting\\\`" :tooltip="\\\`\\\${color} resting\\\`" :color="color" md-symbol="add" />
          <MDStateLayerForcedStateProvider hovered>
            <MDFab
              :data-testid="\\\`\\\${color}-hover\\\`"
              class="md-state_hover"
              :tooltip="\\\`\\\${color} hover\\\`"
              :color="color"
              md-symbol="add"
              :style="fabTokenStyle(color, 'hovered')"
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDFab
              :data-testid="\\\`\\\${color}-focus\\\`"
              class="md-state_focused"
              :tooltip="\\\`\\\${color} focus\\\`"
              :color="color"
              md-symbol="add"
              :style="fabTokenStyle(color, 'focused')"
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDFab
              :data-testid="\\\`\\\${color}-pressed\\\`"
              class="md-state_pressed"
              :tooltip="\\\`\\\${color} pressed\\\`"
              :color="color"
              md-symbol="add"
              :style="fabTokenStyle(color, 'pressed')"
            />
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    \`
  })
}`, ...y.parameters?.docs?.source } } };
v.parameters = { ...v.parameters, docs: { ...v.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDFab
    },
    template: \`
      <div data-testid="visual-md-fab-loading-color-routing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDFab
            data-testid="fab-resting-color"
            tooltip="Loading"
            color="primary"
            md-symbol="add"
            style="--md-comp-fab-primary-icon-color: rgb(12 34 56);"
          />
          <MDFab
            data-testid="fab-loading-color"
            tooltip="Loading"
            color="primary"
            loading
            md-symbol="add"
            style="--md-comp-fab-primary-icon-color: rgb(12 34 56);"
          />
        </div>
      </div>
    \`
  })
}`, ...v.parameters?.docs?.source } } };
const B = ["Default", "Secondary", "Large", "Loading", "VisualStates", "VisualInteractionStates", "SizeComparison", "FocusIndicatorTarget", "InteractionStateTokens", "LoadingColorRouting"];
export {
  t as Default,
  m as FocusIndicatorTarget,
  y as InteractionStateTokens,
  l as Large,
  d as Loading,
  v as LoadingColorRouting,
  i as Secondary,
  p as SizeComparison,
  c as VisualInteractionStates,
  n as VisualStates,
  B as __namedExportsOrder,
  A as default
};
