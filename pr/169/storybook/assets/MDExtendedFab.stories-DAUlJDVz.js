import { M as r } from "./MDExtendedFab-wwBKS9nz.js";
import { _ as b, u } from "./useFocusIndicator-Boii27NL.js";
import "./iframe-CErKLwnd.js";
import "./preload-helper-PPVm8Dsz.js";
import "./typography-qm14BBLM.js";
import "./MDCircularProgressIndicator-BxYqW12Y.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./MDOverlayTooltip-B6iLLG-D.js";
import "./useStateLayer-CmUGBU30.js";
import "./MDSymbol-BqUfcMLQ.js";
const $ = { title: "Material 3/Components/Buttons/MDExtendedFab", component: r, args: { label: "Add", mdSymbol: "add" }, argTypes: { onClick: { action: "click" } }, parameters: { layout: "centered", docs: { description: { component: ["Checked against Material 3 `components/extended-fab/{overview,guidelines,specs,accessibility}`.", "", "**Props**: `size` (`small` | `medium` | `large`, default `small`), `color` (`primary` | `secondary` | `tertiary` | `primary-container` | `secondary-container` | `tertiary-container`, default `primary-container`), required `label`, optional `tooltip` (also used as the accessible name fallback).", "", "**Slots**: `icon` (optional).", "", "**Project extension**: `loading` (`boolean | number`, `0` is active).", "", "**Tokens**: checked against the `material3` MCP snapshot captured at `2026-06-30T05:53:04.916Z`. Exact official `--md-comp-extended-fab-*` properties are the public override surface; icon-label gap follows size (`small`\u21928dp, `medium`\u219212dp, `large`\u219216dp) via `--md-comp-extended-fab-{small,medium,large}-icon-label-space`. Each style routes container, label, icon, elevation, and state-layer values through local rendered variables, while `MDStateLayer` continues to consume only the generic `--md-private-state-*` contract.", "", "**Typography**: the label uses the shared `MD_TYPESCALE` utility classes (no handwritten font CSS), mapped by size: `small`\u2192title-medium, `medium`\u2192title-large, `large`\u2192headline-small.", "", "**Color terminology**: `*-container` replaces the legacy `tonal-*` naming; `primary-container` preserves the previous `tonal-primary` visual default."].join(`
`) } } } }, p = () => ({ template: '<div class="visual-checker-backdrop"><story /></div>' }), d = { decorators: [p] }, t = { render: () => ({ components: { MDExtendedFab: r }, template: `
      <div data-testid="visual-md-extended-fab-size-gaps" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDExtendedFab data-testid="gap-small" label="Small" size="small" md-symbol="add" />
          <MDExtendedFab data-testid="gap-medium" label="Medium" size="medium" md-symbol="add" />
          <MDExtendedFab data-testid="gap-large" label="Large" size="large" md-symbol="add" />
        </div>
      </div>
    ` }) }, n = { tags: ["visual"], render: () => ({ components: { MDExtendedFab: r }, template: `
        <div data-testid="visual-md-extended-fab-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDExtendedFab label="Primary container" md-symbol="add" />
          <MDExtendedFab label="Secondary container" color="secondary-container" md-symbol="share" />
          <MDExtendedFab label="Primary" color="primary" md-symbol="archive" />
        </div>
        <div class="visual-row">
          <MDExtendedFab label="Secondary" color="secondary" md-symbol="menu" />
          <MDExtendedFab label="Tertiary" color="tertiary" md-symbol="star" />
          <MDExtendedFab label="Tertiary container" color="tertiary-container" md-symbol="archive" />
        </div>
      </div>
    ` }) }, s = { tags: ["visual"], render: () => ({ components: { MDExtendedFab: r, MDStateLayerForcedStateProvider: b }, template: `
      <div data-testid="visual-md-extended-fab-interaction-states" class="visual-checker-backdrop">
        <span class="visual-gallery-heading">Enabled colors</span>
        <div class="visual-row">
          <MDExtendedFab label="Primary" color="primary" md-symbol="add" />
          <MDExtendedFab label="Secondary" color="secondary" md-symbol="edit" />
          <MDExtendedFab label="Tertiary" color="tertiary" md-symbol="star" />
        </div>
        <div class="visual-row">
          <MDExtendedFab label="Primary container" color="primary-container" md-symbol="add" />
          <MDExtendedFab label="Secondary container" color="secondary-container" md-symbol="edit" />
          <MDExtendedFab label="Tertiary container" color="tertiary-container" md-symbol="star" />
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered><MDExtendedFab class="md-state_hover" label="Hover" color="primary-container" md-symbol="add" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDExtendedFab class="md-state_focused" label="Focus" color="primary-container" md-symbol="add" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDExtendedFab class="md-state_pressed" label="Pressed" color="primary-container" md-symbol="add" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDExtendedFab label="Small" size="small" color="primary-container" md-symbol="add" />
          <MDExtendedFab label="Medium" size="medium" color="primary-container" md-symbol="add" />
          <MDExtendedFab label="Large" size="large" color="primary-container" md-symbol="add" />
        </div>
        <div class="visual-row">
          <MDExtendedFab label="With icon" color="primary-container" md-symbol="add" />
          <MDExtendedFab label="No icon" color="primary-container" />
          <MDExtendedFab label="Loading" color="primary-container" md-symbol="add" :loading="65" />
        </div>
      </div>
    ` }) }, l = { decorators: [p], render: () => ({ components: { MDExtendedFab: r }, setup() {
  u();
}, template: `
      <div class="visual-checker-backdrop" style="position:fixed;inset:0;">
        <div id="visual-md-extended-fab-focus-indicator" style="position:absolute;inset:auto 12px 12px auto;">
        <MDExtendedFab id="storybook-md-extended-fab-focus" label="Focus target" color="primary-container" md-symbol="add" />
        </div>
      </div>
    ` }) }, y = ["primary", "secondary", "tertiary", "primary-container", "secondary-container", "tertiary-container"], x = ["hover", "focus", "pressed"], i = { render: () => ({ components: { MDExtendedFab: r, MDStateLayerForcedStateProvider: b }, setup() {
  return { EXTENDED_FAB_COLORS: y, DEFAULT_ROLE_STATES: x };
}, template: `
      <div data-testid="visual-md-extended-fab-default-role-matrix" class="visual-checker-backdrop">
        <div v-for="color in EXTENDED_FAB_COLORS" :key="color" class="visual-row">
          <MDStateLayerForcedStateProvider
            v-for="state in DEFAULT_ROLE_STATES"
            :key="state"
            :hovered="state === 'hover'"
            :focused="state === 'focus'"
            :pressed="state === 'pressed'"
          >
            <MDExtendedFab
              :class="'md-state_' + (state === 'focus' ? 'focused' : state)"
              :label="color + ' ' + state"
              :color="color"
              md-symbol="add"
            />
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    ` }) }, g = { primary: { hovered: { label: "rgb(255 0 0)", icon: "rgb(255 120 0)", elevation: "0 0 0 3px rgb(12 34 56)", opacity: "0.03" }, focused: { label: "rgb(0 128 0)", icon: "rgb(0 180 120)", elevation: "0 0 0 4px rgb(23 45 67)", opacity: "0.17" }, pressed: { label: "rgb(0 0 255)", icon: "rgb(120 0 255)", elevation: "0 0 0 5px rgb(34 56 78)", opacity: "0.29" } }, secondary: { hovered: { label: "rgb(255 60 0)", icon: "rgb(255 150 0)", elevation: "0 0 0 9px rgb(78 90 112)", opacity: "0.03" }, focused: { label: "rgb(0 150 60)", icon: "rgb(0 200 150)", elevation: "0 0 0 10px rgb(89 101 123)", opacity: "0.17" }, pressed: { label: "rgb(20 20 255)", icon: "rgb(150 20 255)", elevation: "0 0 0 11px rgb(101 112 134)", opacity: "0.29" } }, tertiary: { hovered: { label: "rgb(255 100 0)", icon: "rgb(255 180 0)", elevation: "0 0 0 12px rgb(112 123 145)", opacity: "0.03" }, focused: { label: "rgb(0 170 90)", icon: "rgb(0 220 180)", elevation: "0 0 0 13px rgb(123 134 156)", opacity: "0.17" }, pressed: { label: "rgb(60 20 255)", icon: "rgb(180 20 255)", elevation: "0 0 0 14px rgb(134 145 167)", opacity: "0.29" } }, "primary-container": { hovered: { label: "rgb(255 80 0)", icon: "rgb(255 180 0)", elevation: "0 0 0 6px rgb(45 67 89)", opacity: "0.05" }, focused: { label: "rgb(0 160 120)", icon: "rgb(0 220 180)", elevation: "0 0 0 7px rgb(56 78 90)", opacity: "0.19" }, pressed: { label: "rgb(80 80 255)", icon: "rgb(140 80 255)", elevation: "0 0 0 8px rgb(67 89 101)", opacity: "0.31" } }, "secondary-container": { hovered: { label: "rgb(255 110 20)", icon: "rgb(255 200 20)", elevation: "0 0 0 15px rgb(145 156 178)", opacity: "0.05" }, focused: { label: "rgb(20 190 140)", icon: "rgb(20 230 200)", elevation: "0 0 0 16px rgb(156 167 189)", opacity: "0.19" }, pressed: { label: "rgb(100 100 255)", icon: "rgb(160 100 255)", elevation: "0 0 0 17px rgb(167 178 200)", opacity: "0.31" } }, "tertiary-container": { hovered: { label: "rgb(255 130 40)", icon: "rgb(255 210 40)", elevation: "0 0 0 18px rgb(178 189 211)", opacity: "0.05" }, focused: { label: "rgb(40 200 160)", icon: "rgb(40 240 210)", elevation: "0 0 0 19px rgb(189 200 222)", opacity: "0.19" }, pressed: { label: "rgb(120 120 255)", icon: "rgb(180 120 255)", elevation: "0 0 0 20px rgb(200 211 233)", opacity: "0.31" } } }, F = (e) => {
  const [a, o, v] = e.replace(/^rgb\(|\)$/g, "").split(" ");
  return `rgb(${v} ${a} ${o})`;
}, D = (e, a) => {
  const o = g[e][a];
  return { [`--md-comp-extended-fab-${e}-${a}-label-text-color`]: o.label, [`--md-comp-extended-fab-${e}-${a}-icon-color`]: o.icon, [`--md-comp-extended-fab-${e}-${a}-container-elevation`]: o.elevation, [`--md-comp-extended-fab-${e}-${a}-state-layer-color`]: F(o.label), [`--md-comp-extended-fab-${e}-${a}-state-layer-opacity`]: o.opacity };
}, c = { render: () => ({ components: { MDExtendedFab: r, MDStateLayerForcedStateProvider: b }, setup() {
  return { EXTENDED_FAB_COLORS: y, extendedFabTokenStyle: D };
}, template: `
      <div data-testid="visual-md-extended-fab-interaction-state-tokens" class="visual-checker-backdrop">
        <div v-for="color in EXTENDED_FAB_COLORS" :key="color" class="visual-row">
          <MDExtendedFab :data-testid="\`extended-\${color}-resting\`" :label="\`\${color} resting\`" :color="color" md-symbol="add" />
          <MDStateLayerForcedStateProvider hovered>
            <MDExtendedFab
              :data-testid="\`extended-\${color}-hover\`"
              class="md-state_hover"
              :label="\`\${color} hover\`"
              :color="color"
              md-symbol="add"
              :style="extendedFabTokenStyle(color, 'hovered')"
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDExtendedFab
              :data-testid="\`extended-\${color}-focus\`"
              class="md-state_focused"
              :label="\`\${color} focus\`"
              :color="color"
              md-symbol="add"
              :style="extendedFabTokenStyle(color, 'focused')"
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDExtendedFab
              :data-testid="\`extended-\${color}-pressed\`"
              class="md-state_pressed"
              :label="\`\${color} pressed\`"
              :color="color"
              md-symbol="add"
              :style="extendedFabTokenStyle(color, 'pressed')"
            />
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    ` }) }, m = { render: () => ({ components: { MDExtendedFab: r }, template: `
      <div data-testid="visual-md-extended-fab-loading-color-routing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDExtendedFab
            data-testid="extended-fab-resting-color"
            label="Loading"
            color="primary"
            md-symbol="add"
            style="
              --md-comp-extended-fab-primary-label-text-color: rgb(12 34 56);
              --md-comp-extended-fab-primary-icon-color: rgb(90 12 180);
            "
          />
          <MDExtendedFab
            data-testid="extended-fab-loading-color"
            label="Loading"
            color="primary"
            loading
            md-symbol="add"
            style="
              --md-comp-extended-fab-primary-label-text-color: rgb(12 34 56);
              --md-comp-extended-fab-primary-icon-color: rgb(90 12 180);
            "
          />
        </div>
      </div>
    ` }) };
d.parameters = { ...d.parameters, docs: { ...d.parameters?.docs, source: { originalSource: `{
  decorators: [withCheckerboard]
}`, ...d.parameters?.docs?.source } } };
t.parameters = { ...t.parameters, docs: { ...t.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDExtendedFab
    },
    template: \`
      <div data-testid="visual-md-extended-fab-size-gaps" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDExtendedFab data-testid="gap-small" label="Small" size="small" md-symbol="add" />
          <MDExtendedFab data-testid="gap-medium" label="Medium" size="medium" md-symbol="add" />
          <MDExtendedFab data-testid="gap-large" label="Large" size="large" md-symbol="add" />
        </div>
      </div>
    \`
  })
}`, ...t.parameters?.docs?.source } } };
n.parameters = { ...n.parameters, docs: { ...n.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDExtendedFab
    },
    template: \`
        <div data-testid="visual-md-extended-fab-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDExtendedFab label="Primary container" md-symbol="add" />
          <MDExtendedFab label="Secondary container" color="secondary-container" md-symbol="share" />
          <MDExtendedFab label="Primary" color="primary" md-symbol="archive" />
        </div>
        <div class="visual-row">
          <MDExtendedFab label="Secondary" color="secondary" md-symbol="menu" />
          <MDExtendedFab label="Tertiary" color="tertiary" md-symbol="star" />
          <MDExtendedFab label="Tertiary container" color="tertiary-container" md-symbol="archive" />
        </div>
      </div>
    \`
  })
}`, ...n.parameters?.docs?.source } } };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDExtendedFab,
      MDStateLayerForcedStateProvider
    },
    template: \`
      <div data-testid="visual-md-extended-fab-interaction-states" class="visual-checker-backdrop">
        <span class="visual-gallery-heading">Enabled colors</span>
        <div class="visual-row">
          <MDExtendedFab label="Primary" color="primary" md-symbol="add" />
          <MDExtendedFab label="Secondary" color="secondary" md-symbol="edit" />
          <MDExtendedFab label="Tertiary" color="tertiary" md-symbol="star" />
        </div>
        <div class="visual-row">
          <MDExtendedFab label="Primary container" color="primary-container" md-symbol="add" />
          <MDExtendedFab label="Secondary container" color="secondary-container" md-symbol="edit" />
          <MDExtendedFab label="Tertiary container" color="tertiary-container" md-symbol="star" />
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered><MDExtendedFab class="md-state_hover" label="Hover" color="primary-container" md-symbol="add" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDExtendedFab class="md-state_focused" label="Focus" color="primary-container" md-symbol="add" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDExtendedFab class="md-state_pressed" label="Pressed" color="primary-container" md-symbol="add" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDExtendedFab label="Small" size="small" color="primary-container" md-symbol="add" />
          <MDExtendedFab label="Medium" size="medium" color="primary-container" md-symbol="add" />
          <MDExtendedFab label="Large" size="large" color="primary-container" md-symbol="add" />
        </div>
        <div class="visual-row">
          <MDExtendedFab label="With icon" color="primary-container" md-symbol="add" />
          <MDExtendedFab label="No icon" color="primary-container" />
          <MDExtendedFab label="Loading" color="primary-container" md-symbol="add" :loading="65" />
        </div>
      </div>
    \`
  })
}`, ...s.parameters?.docs?.source } } };
l.parameters = { ...l.parameters, docs: { ...l.parameters?.docs, source: { originalSource: `{
  decorators: [withCheckerboard],
  render: () => ({
    components: {
      MDExtendedFab
    },
    setup() {
      useFocusIndicator();
    },
    template: \`
      <div class="visual-checker-backdrop" style="position:fixed;inset:0;">
        <div id="visual-md-extended-fab-focus-indicator" style="position:absolute;inset:auto 12px 12px auto;">
        <MDExtendedFab id="storybook-md-extended-fab-focus" label="Focus target" color="primary-container" md-symbol="add" />
        </div>
      </div>
    \`
  })
}`, ...l.parameters?.docs?.source } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDExtendedFab,
      MDStateLayerForcedStateProvider
    },
    setup() {
      return {
        EXTENDED_FAB_COLORS,
        DEFAULT_ROLE_STATES
      };
    },
    template: \`
      <div data-testid="visual-md-extended-fab-default-role-matrix" class="visual-checker-backdrop">
        <div v-for="color in EXTENDED_FAB_COLORS" :key="color" class="visual-row">
          <MDStateLayerForcedStateProvider
            v-for="state in DEFAULT_ROLE_STATES"
            :key="state"
            :hovered="state === 'hover'"
            :focused="state === 'focus'"
            :pressed="state === 'pressed'"
          >
            <MDExtendedFab
              :class="'md-state_' + (state === 'focus' ? 'focused' : state)"
              :label="color + ' ' + state"
              :color="color"
              md-symbol="add"
            />
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    \`
  })
}`, ...i.parameters?.docs?.source } } };
c.parameters = { ...c.parameters, docs: { ...c.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDExtendedFab,
      MDStateLayerForcedStateProvider
    },
    setup() {
      return {
        EXTENDED_FAB_COLORS,
        extendedFabTokenStyle
      };
    },
    template: \`
      <div data-testid="visual-md-extended-fab-interaction-state-tokens" class="visual-checker-backdrop">
        <div v-for="color in EXTENDED_FAB_COLORS" :key="color" class="visual-row">
          <MDExtendedFab :data-testid="\\\`extended-\\\${color}-resting\\\`" :label="\\\`\\\${color} resting\\\`" :color="color" md-symbol="add" />
          <MDStateLayerForcedStateProvider hovered>
            <MDExtendedFab
              :data-testid="\\\`extended-\\\${color}-hover\\\`"
              class="md-state_hover"
              :label="\\\`\\\${color} hover\\\`"
              :color="color"
              md-symbol="add"
              :style="extendedFabTokenStyle(color, 'hovered')"
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDExtendedFab
              :data-testid="\\\`extended-\\\${color}-focus\\\`"
              class="md-state_focused"
              :label="\\\`\\\${color} focus\\\`"
              :color="color"
              md-symbol="add"
              :style="extendedFabTokenStyle(color, 'focused')"
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDExtendedFab
              :data-testid="\\\`extended-\\\${color}-pressed\\\`"
              class="md-state_pressed"
              :label="\\\`\\\${color} pressed\\\`"
              :color="color"
              md-symbol="add"
              :style="extendedFabTokenStyle(color, 'pressed')"
            />
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    \`
  })
}`, ...c.parameters?.docs?.source } } };
m.parameters = { ...m.parameters, docs: { ...m.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDExtendedFab
    },
    template: \`
      <div data-testid="visual-md-extended-fab-loading-color-routing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDExtendedFab
            data-testid="extended-fab-resting-color"
            label="Loading"
            color="primary"
            md-symbol="add"
            style="
              --md-comp-extended-fab-primary-label-text-color: rgb(12 34 56);
              --md-comp-extended-fab-primary-icon-color: rgb(90 12 180);
            "
          />
          <MDExtendedFab
            data-testid="extended-fab-loading-color"
            label="Loading"
            color="primary"
            loading
            md-symbol="add"
            style="
              --md-comp-extended-fab-primary-label-text-color: rgb(12 34 56);
              --md-comp-extended-fab-primary-icon-color: rgb(90 12 180);
            "
          />
        </div>
      </div>
    \`
  })
}`, ...m.parameters?.docs?.source } } };
const w = ["Default", "SizeGaps", "VisualStates", "InteractionStates", "FocusIndicatorTarget", "DefaultRoleMatrix", "InteractionStateTokens", "LoadingColorRouting"];
export {
  d as Default,
  i as DefaultRoleMatrix,
  l as FocusIndicatorTarget,
  c as InteractionStateTokens,
  s as InteractionStates,
  m as LoadingColorRouting,
  t as SizeGaps,
  n as VisualStates,
  w as __namedExportsOrder,
  $ as default
};
