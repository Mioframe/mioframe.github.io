import { d as M, c as y, a as k, b as f, t as x, r as a, o as C } from "./iframe-DJvKwGXx.js";
import { u as S } from "./useFocusIndicator-DoEb9q2A.js";
import { M as t } from "./MDButton-B9gjMaax.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-BgRO9X2J.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_72d5ac33_lang-Ap1GjFDU.js";
import "./core-CHv0XPlm.js";
import "./MDLoadingIndicator-DAhOQ3pZ.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_4de74d0c_lang-er2ULA8R.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
const h = { id: "visual-md-button-target-hit", class: "visual-checker-backdrop" }, O = { id: "visual-md-button-target-hit-count" }, w = M({ __name: "MDButtonTargetHitVisualStory", setup(e) {
  const o = a(0), n = () => {
    o.value += 1;
  };
  return (D, B) => (C(), y("div", h, [k(t, { label: "OK", size: "extra-small", onClick: n }), f("output", O, x(o.value), 1)]));
} }), G = { title: "Material 3/Components/Buttons/MDButton", component: t, tags: ["autodocs"], args: { color: "filled", label: "Save" }, argTypes: { onClick: { action: "click" } }, parameters: { layout: "centered", docs: { description: { component: "Mioframe Material action Button adapter backed privately by @m3e/web. Supports the production-selected filled, outlined, and text colors, small and extra-small sizes, disabled state, native button/submit behavior, leading icon content, and short indeterminate loading." } } } }, l = {}, s = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
      <div data-testid="visual-md-button-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Filled" color="filled"><template #icon>+</template></MDButton>
          <MDButton label="Outlined" color="outlined"><template #icon>+</template></MDButton>
          <MDButton label="Text" color="text"><template #icon>+</template></MDButton>
        </div>
        <div class="visual-row">
          <MDButton label="Extra small outlined" color="outlined" size="extra-small"><template #icon>+</template></MDButton>
        </div>
        <div class="visual-row">
          <MDButton label="Disabled filled" disabled><template #icon>+</template></MDButton>
          <MDButton label="Disabled outlined" color="outlined" disabled><template #icon>+</template></MDButton>
          <MDButton label="Disabled text" color="text" disabled><template #icon>+</template></MDButton>
        </div>
      </div>
    ` }) }, r = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
      <div data-testid="visual-md-button-size-geometry" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Extra small" size="extra-small"><template #icon>+</template></MDButton>
          <MDButton label="Small" size="small"><template #icon>+</template></MDButton>
        </div>
      </div>
    ` }) }, i = { render: () => ({ components: { MDButtonTargetHitVisualStory: w }, template: "<MDButtonTargetHitVisualStory />" }) }, d = { render: () => ({ components: { MDButton: t }, template: `
      <div data-testid="md-button-small-geometry-contract">
        <MDButton id="small-geometry-button" label="Small geometry" size="small" />
      </div>
    ` }) }, c = { render: () => ({ components: { MDButton: t }, setup() {
  S();
}, template: `
      <div class="visual-checker-backdrop" style="position:fixed;inset:0;">
        <div id="visual-md-button-focus-indicator" style="position:absolute;inset:auto 12px 12px auto;">
          <MDButton label="Focus target" />
        </div>
      </div>
    ` }) }, u = { render: () => ({ components: { MDButton: t }, setup() {
  const e = a(0), o = a(0), n = a(0);
  return { disabledClickCount: n, loadingClickCount: o, onDisabledClick: () => {
    n.value += 1;
  }, onLoadingClick: () => {
    o.value += 1;
  }, onSubmit: () => {
    e.value += 1;
  }, submitCount: e };
}, template: `
      <div data-testid="md-button-behavior-contracts">
        <form aria-label="Button form" @submit.prevent="onSubmit">
          <MDButton label="Submit action" native-type="submit" />
        </form>
        <output id="md-button-submit-count">{{ submitCount }}</output>
        <MDButton label="Loading action" loading @click="onLoadingClick" />
        <output id="md-button-loading-count">{{ loadingClickCount }}</output>
        <MDButton label="Disabled action" disabled @click="onDisabledClick" />
        <output id="md-button-disabled-count">{{ disabledClickCount }}</output>
        <MDButton label="Disabled loading action" disabled loading @click="onDisabledClick" />
      </div>
    ` }) }, m = { render: () => ({ components: { MDButton: t }, setup() {
  const e = a({ "bogus-consumer-flag": "leak-attempt", selected: true, shape: "square", toggle: true, variant: "outlined" });
  return { attemptedOverrides: e, toggleAttemptedOverrides: () => {
    e.value = { ...e.value, selected: !e.value.selected, shape: e.value.shape === "square" ? "circle" : "square", toggle: !e.value.toggle, variant: e.value.variant === "outlined" ? "text" : "outlined" };
  } };
}, template: `
      <div data-testid="md-button-host-attribute-boundary">
        <MDButton
          data-testid="host-boundary-button"
          label="Boundary action"
          color="filled"
          v-bind="attemptedOverrides"
        />
        <button
          data-testid="host-boundary-toggle"
          type="button"
          @click="toggleAttemptedOverrides"
        >
          Toggle attempted overrides
        </button>
      </div>
    ` }) }, p = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
      <div data-testid="visual-md-button-real-interaction" class="visual-checker-backdrop">
        <MDButton label="Press me" color="filled" />
      </div>
    ` }) }, v = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
      <div data-testid="visual-md-button-loading" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Saving" color="filled" loading />
          <MDButton label="Uploading" color="outlined" loading><template #icon>+</template></MDButton>
          <MDButton label="Sending" color="text" loading />
        </div>
        <div class="visual-row">
          <MDButton label="Disabled saving" color="filled" disabled loading />
        </div>
      </div>
    ` }) }, b = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
      <div
        data-testid="visual-md-button-legacy-surface"
        class="md visual-checker-backdrop"
        style="--md-container-color: #fff8f7; --md-content-color: #b3261e;"
      >
        <p data-testid="legacy-surface-text">Surface-owned ordinary text</p>
        <div class="visual-row">
          <MDButton label="Surface filled" color="filled" />
          <MDButton label="Surface outlined" color="outlined" />
          <MDButton label="Surface text" color="text" />
        </div>
        <div class="visual-row">
          <MDButton label="Surface icon" color="outlined">
            <template #icon><span data-testid="legacy-surface-button-icon">+</span></template>
          </MDButton>
          <MDButton label="Surface loading" color="text" loading />
        </div>
      </div>
    ` }) }, g = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
      <div class="visual-checker-backdrop" style="background: var(--md-sys-color-inverse-surface); padding: 16px;">
        <MDButton
          data-testid="contextual-text-button"
          label="Undo"
          color="text"
          style="
            --md-comp-button-text-label-text-color: var(--md-sys-color-inverse-primary);
            --md-comp-button-text-hovered-label-text-color: var(--md-sys-color-inverse-primary);
            --md-comp-button-text-focused-label-text-color: var(--md-sys-color-inverse-primary);
            --md-comp-button-text-pressed-label-text-color: var(--md-sys-color-inverse-primary);
            --md-comp-button-text-hovered-state-layer-color: var(--md-sys-color-inverse-primary);
            --md-comp-button-text-focused-state-layer-color: var(--md-sys-color-inverse-primary);
            --md-comp-button-text-pressed-state-layer-color: var(--md-sys-color-inverse-primary);
          "
        />
      </div>
    ` }) };
l.parameters = { ...l.parameters, docs: { ...l.parameters?.docs, source: { originalSource: "{}", ...l.parameters?.docs?.source } } };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="visual-md-button-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Filled" color="filled"><template #icon>+</template></MDButton>
          <MDButton label="Outlined" color="outlined"><template #icon>+</template></MDButton>
          <MDButton label="Text" color="text"><template #icon>+</template></MDButton>
        </div>
        <div class="visual-row">
          <MDButton label="Extra small outlined" color="outlined" size="extra-small"><template #icon>+</template></MDButton>
        </div>
        <div class="visual-row">
          <MDButton label="Disabled filled" disabled><template #icon>+</template></MDButton>
          <MDButton label="Disabled outlined" color="outlined" disabled><template #icon>+</template></MDButton>
          <MDButton label="Disabled text" color="text" disabled><template #icon>+</template></MDButton>
        </div>
      </div>
    \`
  })
}`, ...s.parameters?.docs?.source } } };
r.parameters = { ...r.parameters, docs: { ...r.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="visual-md-button-size-geometry" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Extra small" size="extra-small"><template #icon>+</template></MDButton>
          <MDButton label="Small" size="small"><template #icon>+</template></MDButton>
        </div>
      </div>
    \`
  })
}`, ...r.parameters?.docs?.source } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButtonTargetHitVisualStory
    },
    template: '<MDButtonTargetHitVisualStory />'
  })
}`, ...i.parameters?.docs?.source } } };
d.parameters = { ...d.parameters, docs: { ...d.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="md-button-small-geometry-contract">
        <MDButton id="small-geometry-button" label="Small geometry" size="small" />
      </div>
    \`
  })
}`, ...d.parameters?.docs?.source } } };
c.parameters = { ...c.parameters, docs: { ...c.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton
    },
    setup() {
      useFocusIndicator();
    },
    template: \`
      <div class="visual-checker-backdrop" style="position:fixed;inset:0;">
        <div id="visual-md-button-focus-indicator" style="position:absolute;inset:auto 12px 12px auto;">
          <MDButton label="Focus target" />
        </div>
      </div>
    \`
  })
}`, ...c.parameters?.docs?.source } } };
u.parameters = { ...u.parameters, docs: { ...u.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton
    },
    setup() {
      const submitCount = ref(0);
      const loadingClickCount = ref(0);
      const disabledClickCount = ref(0);
      const onSubmit = () => {
        submitCount.value += 1;
      };
      const onLoadingClick = () => {
        loadingClickCount.value += 1;
      };
      const onDisabledClick = () => {
        disabledClickCount.value += 1;
      };
      return {
        disabledClickCount,
        loadingClickCount,
        onDisabledClick,
        onLoadingClick,
        onSubmit,
        submitCount
      };
    },
    template: \`
      <div data-testid="md-button-behavior-contracts">
        <form aria-label="Button form" @submit.prevent="onSubmit">
          <MDButton label="Submit action" native-type="submit" />
        </form>
        <output id="md-button-submit-count">{{ submitCount }}</output>
        <MDButton label="Loading action" loading @click="onLoadingClick" />
        <output id="md-button-loading-count">{{ loadingClickCount }}</output>
        <MDButton label="Disabled action" disabled @click="onDisabledClick" />
        <output id="md-button-disabled-count">{{ disabledClickCount }}</output>
        <MDButton label="Disabled loading action" disabled loading @click="onDisabledClick" />
      </div>
    \`
  })
}`, ...u.parameters?.docs?.source } } };
m.parameters = { ...m.parameters, docs: { ...m.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton
    },
    setup() {
      const attemptedOverrides = ref<Record<string, unknown>>({
        'bogus-consumer-flag': 'leak-attempt',
        selected: true,
        shape: 'square',
        toggle: true,
        variant: 'outlined'
      });
      const toggleAttemptedOverrides = () => {
        attemptedOverrides.value = {
          ...attemptedOverrides.value,
          selected: !attemptedOverrides.value.selected,
          shape: attemptedOverrides.value.shape === 'square' ? 'circle' : 'square',
          toggle: !attemptedOverrides.value.toggle,
          variant: attemptedOverrides.value.variant === 'outlined' ? 'text' : 'outlined'
        };
      };
      return {
        attemptedOverrides,
        toggleAttemptedOverrides
      };
    },
    template: \`
      <div data-testid="md-button-host-attribute-boundary">
        <MDButton
          data-testid="host-boundary-button"
          label="Boundary action"
          color="filled"
          v-bind="attemptedOverrides"
        />
        <button
          data-testid="host-boundary-toggle"
          type="button"
          @click="toggleAttemptedOverrides"
        >
          Toggle attempted overrides
        </button>
      </div>
    \`
  })
}`, ...m.parameters?.docs?.source } } };
p.parameters = { ...p.parameters, docs: { ...p.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="visual-md-button-real-interaction" class="visual-checker-backdrop">
        <MDButton label="Press me" color="filled" />
      </div>
    \`
  })
}`, ...p.parameters?.docs?.source } } };
v.parameters = { ...v.parameters, docs: { ...v.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="visual-md-button-loading" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Saving" color="filled" loading />
          <MDButton label="Uploading" color="outlined" loading><template #icon>+</template></MDButton>
          <MDButton label="Sending" color="text" loading />
        </div>
        <div class="visual-row">
          <MDButton label="Disabled saving" color="filled" disabled loading />
        </div>
      </div>
    \`
  })
}`, ...v.parameters?.docs?.source } } };
b.parameters = { ...b.parameters, docs: { ...b.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div
        data-testid="visual-md-button-legacy-surface"
        class="md visual-checker-backdrop"
        style="--md-container-color: #fff8f7; --md-content-color: #b3261e;"
      >
        <p data-testid="legacy-surface-text">Surface-owned ordinary text</p>
        <div class="visual-row">
          <MDButton label="Surface filled" color="filled" />
          <MDButton label="Surface outlined" color="outlined" />
          <MDButton label="Surface text" color="text" />
        </div>
        <div class="visual-row">
          <MDButton label="Surface icon" color="outlined">
            <template #icon><span data-testid="legacy-surface-button-icon">+</span></template>
          </MDButton>
          <MDButton label="Surface loading" color="text" loading />
        </div>
      </div>
    \`
  })
}`, ...b.parameters?.docs?.source } } };
g.parameters = { ...g.parameters, docs: { ...g.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div class="visual-checker-backdrop" style="background: var(--md-sys-color-inverse-surface); padding: 16px;">
        <MDButton
          data-testid="contextual-text-button"
          label="Undo"
          color="text"
          style="
            --md-comp-button-text-label-text-color: var(--md-sys-color-inverse-primary);
            --md-comp-button-text-hovered-label-text-color: var(--md-sys-color-inverse-primary);
            --md-comp-button-text-focused-label-text-color: var(--md-sys-color-inverse-primary);
            --md-comp-button-text-pressed-label-text-color: var(--md-sys-color-inverse-primary);
            --md-comp-button-text-hovered-state-layer-color: var(--md-sys-color-inverse-primary);
            --md-comp-button-text-focused-state-layer-color: var(--md-sys-color-inverse-primary);
            --md-comp-button-text-pressed-state-layer-color: var(--md-sys-color-inverse-primary);
          "
        />
      </div>
    \`
  })
}`, ...g.parameters?.docs?.source } } };
const P = ["Default", "VisualStates", "SizeGeometry", "ExpandedTargetHitArea", "SmallGeometryContract", "FocusIndicatorTarget", "BehaviorContracts", "HostAttributeBoundary", "RealInteractionFeedback", "LoadingIndicatorPresentation", "LegacySurfaceColorOwnership", "ContextualTextTokens"];
export {
  u as BehaviorContracts,
  g as ContextualTextTokens,
  l as Default,
  i as ExpandedTargetHitArea,
  c as FocusIndicatorTarget,
  m as HostAttributeBoundary,
  b as LegacySurfaceColorOwnership,
  v as LoadingIndicatorPresentation,
  p as RealInteractionFeedback,
  r as SizeGeometry,
  d as SmallGeometryContract,
  s as VisualStates,
  P as __namedExportsOrder,
  G as default
};
