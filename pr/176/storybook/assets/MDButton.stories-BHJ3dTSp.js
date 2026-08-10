import { d as B, c as M, a as y, b as f, t as k, r as a, o as x } from "./iframe-T0xuxn3D.js";
import { u as C } from "./useFocusIndicator-BRKQqAvF.js";
import { M as S } from "./MDLoadingIndicator-Cq-XUYx5.js";
import { M as e } from "./MDButton-VcMv5iDp.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-DigRLDFt.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
const h = { id: "visual-md-button-target-hit", class: "visual-checker-backdrop" }, O = { id: "visual-md-button-target-hit-count" }, w = B({ __name: "MDButtonTargetHitVisualStory", setup(t) {
  const o = a(0), n = () => {
    o.value += 1;
  };
  return (g, D) => (x(), M("div", h, [y(e, { label: "OK", size: "extra-small", onClick: n }), f("output", O, k(o.value), 1)]));
} }), V = { title: "Material 3/Components/Buttons/MDButton", component: e, tags: ["autodocs"], args: { color: "filled", label: "Save" }, argTypes: { onClick: { action: "click" } }, parameters: { layout: "centered", docs: { description: { component: "Mioframe Material action Button adapter backed privately by @m3e/web. Supports the production-selected filled, outlined, and text colors, small and extra-small sizes, disabled state, native button/submit behavior, leading icon content, and short indeterminate loading." } } } }, l = {}, s = { tags: ["visual"], render: () => ({ components: { MDButton: e }, template: `
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
    ` }) }, r = { tags: ["visual"], render: () => ({ components: { MDButton: e }, template: `
      <div data-testid="visual-md-button-size-geometry" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Extra small" size="extra-small"><template #icon>+</template></MDButton>
          <MDButton label="Small" size="small"><template #icon>+</template></MDButton>
        </div>
      </div>
    ` }) }, i = { render: () => ({ components: { MDButtonTargetHitVisualStory: w }, template: "<MDButtonTargetHitVisualStory />" }) }, d = { render: () => ({ components: { MDButton: e }, setup() {
  C();
}, template: `
      <div class="visual-checker-backdrop" style="position:fixed;inset:0;">
        <div id="visual-md-button-focus-indicator" style="position:absolute;inset:auto 12px 12px auto;">
          <MDButton label="Focus target" />
        </div>
      </div>
    ` }) }, c = { render: () => ({ components: { MDButton: e }, setup() {
  const t = a(0), o = a(0), n = a(0);
  return { disabledClickCount: n, loadingClickCount: o, onDisabledClick: () => {
    n.value += 1;
  }, onLoadingClick: () => {
    o.value += 1;
  }, onSubmit: () => {
    t.value += 1;
  }, submitCount: t };
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
    ` }) }, u = { render: () => ({ components: { MDButton: e }, setup() {
  const t = a({ "bogus-consumer-flag": "leak-attempt", selected: true, shape: "square", toggle: true, variant: "outlined" });
  return { attemptedOverrides: t, toggleAttemptedOverrides: () => {
    t.value = { ...t.value, selected: !t.value.selected, shape: t.value.shape === "square" ? "circle" : "square", toggle: !t.value.toggle, variant: t.value.variant === "outlined" ? "text" : "outlined" };
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
    ` }) }, m = { tags: ["visual"], render: () => ({ components: { MDButton: e }, template: `
      <div data-testid="visual-md-button-real-interaction" class="visual-checker-backdrop">
        <MDButton label="Press me" color="filled" />
      </div>
    ` }) }, p = { tags: ["visual"], render: () => ({ components: { MDButton: e }, template: `
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
    ` }) }, v = { tags: ["visual"], render: () => ({ components: { MDButton: e, MDLoadingIndicator: S }, template: `
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
          <MDLoadingIndicator label="Surface standalone loading" />
        </div>
      </div>
    ` }) }, b = { tags: ["visual"], render: () => ({ components: { MDButton: e }, template: `
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
}`, ...d.parameters?.docs?.source } } };
c.parameters = { ...c.parameters, docs: { ...c.parameters?.docs, source: { originalSource: `{
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
}`, ...c.parameters?.docs?.source } } };
u.parameters = { ...u.parameters, docs: { ...u.parameters?.docs, source: { originalSource: `{
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
}`, ...u.parameters?.docs?.source } } };
m.parameters = { ...m.parameters, docs: { ...m.parameters?.docs, source: { originalSource: `{
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
}`, ...m.parameters?.docs?.source } } };
p.parameters = { ...p.parameters, docs: { ...p.parameters?.docs, source: { originalSource: `{
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
}`, ...p.parameters?.docs?.source } } };
v.parameters = { ...v.parameters, docs: { ...v.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton,
      MDLoadingIndicator
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
          <MDLoadingIndicator label="Surface standalone loading" />
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
}`, ...b.parameters?.docs?.source } } };
const E = ["Default", "VisualStates", "SizeGeometry", "ExpandedTargetHitArea", "FocusIndicatorTarget", "BehaviorContracts", "HostAttributeBoundary", "RealInteractionFeedback", "LoadingIndicatorPresentation", "LegacySurfaceColorOwnership", "ContextualTextTokens"];
export {
  c as BehaviorContracts,
  b as ContextualTextTokens,
  l as Default,
  i as ExpandedTargetHitArea,
  d as FocusIndicatorTarget,
  u as HostAttributeBoundary,
  v as LegacySurfaceColorOwnership,
  p as LoadingIndicatorPresentation,
  m as RealInteractionFeedback,
  r as SizeGeometry,
  s as VisualStates,
  E as __namedExportsOrder,
  V as default
};
