import { d as g, f as B, h as M, g as f, t as x, r as p, o as k } from "./iframe-C6F5S-7E.js";
import { u as y } from "./useFocusIndicator-DPlhrxUa.js";
import { M as C } from "./MDLoadingIndicator-CY0pEfDQ.js";
import { M as t } from "./MDButton-BQv4KEua.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-D41zDJlS.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
const S = { id: "visual-md-button-target-hit", class: "visual-checker-backdrop" }, h = { id: "visual-md-button-target-hit-count" }, w = g({ __name: "MDButtonTargetHitVisualStory", setup(b) {
  const e = p(0), o = () => {
    e.value += 1;
  };
  return (v, D) => (k(), B("div", S, [M(t, { label: "OK", size: "extra-small", onClick: o }), f("output", h, x(e.value), 1)]));
} }), H = { title: "Material 3/Components/Buttons/MDButton", component: t, args: { color: "filled", label: "Save" }, argTypes: { onClick: { action: "click" } }, parameters: { layout: "centered", docs: { description: { component: "Mioframe Material action Button adapter backed privately by @m3e/web. Supports the production-selected filled, outlined, and text colors, small and extra-small sizes, disabled state, native button/submit behavior, leading icon content, and short indeterminate loading." } } } }, a = {}, n = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
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
    ` }) }, l = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
      <div data-testid="visual-md-button-size-geometry" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Extra small" size="extra-small"><template #icon>+</template></MDButton>
          <MDButton label="Small" size="small"><template #icon>+</template></MDButton>
        </div>
      </div>
    ` }) }, s = { render: () => ({ components: { MDButtonTargetHitVisualStory: w }, template: "<MDButtonTargetHitVisualStory />" }) }, i = { render: () => ({ components: { MDButton: t }, setup() {
  y();
}, template: `
      <div class="visual-checker-backdrop" style="position:fixed;inset:0;">
        <div id="visual-md-button-focus-indicator" style="position:absolute;inset:auto 12px 12px auto;">
          <MDButton label="Focus target" />
        </div>
      </div>
    ` }) }, r = { render: () => ({ components: { MDButton: t }, setup() {
  const b = p(0), e = p(0), o = p(0);
  return { disabledClickCount: o, loadingClickCount: e, onDisabledClick: () => {
    o.value += 1;
  }, onLoadingClick: () => {
    e.value += 1;
  }, onSubmit: () => {
    b.value += 1;
  }, submitCount: b };
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
    ` }) }, d = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
      <div data-testid="visual-md-button-real-interaction" class="visual-checker-backdrop">
        <MDButton label="Press me" color="filled" />
      </div>
    ` }) }, c = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
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
    ` }) }, u = { tags: ["visual"], render: () => ({ components: { MDButton: t, MDLoadingIndicator: C }, template: `
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
    ` }) }, m = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
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
a.parameters = { ...a.parameters, docs: { ...a.parameters?.docs, source: { originalSource: "{}", ...a.parameters?.docs?.source } } };
n.parameters = { ...n.parameters, docs: { ...n.parameters?.docs, source: { originalSource: `{
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
}`, ...n.parameters?.docs?.source } } };
l.parameters = { ...l.parameters, docs: { ...l.parameters?.docs, source: { originalSource: `{
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
}`, ...l.parameters?.docs?.source } } };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButtonTargetHitVisualStory
    },
    template: '<MDButtonTargetHitVisualStory />'
  })
}`, ...s.parameters?.docs?.source } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
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
}`, ...i.parameters?.docs?.source } } };
r.parameters = { ...r.parameters, docs: { ...r.parameters?.docs, source: { originalSource: `{
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
}`, ...r.parameters?.docs?.source } } };
d.parameters = { ...d.parameters, docs: { ...d.parameters?.docs, source: { originalSource: `{
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
}`, ...d.parameters?.docs?.source } } };
c.parameters = { ...c.parameters, docs: { ...c.parameters?.docs, source: { originalSource: `{
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
}`, ...c.parameters?.docs?.source } } };
u.parameters = { ...u.parameters, docs: { ...u.parameters?.docs, source: { originalSource: `{
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
}`, ...u.parameters?.docs?.source } } };
m.parameters = { ...m.parameters, docs: { ...m.parameters?.docs, source: { originalSource: `{
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
}`, ...m.parameters?.docs?.source } } };
const O = ["Default", "VisualStates", "SizeGeometry", "ExpandedTargetHitArea", "FocusIndicatorTarget", "BehaviorContracts", "RealInteractionFeedback", "LoadingIndicatorPresentation", "LegacySurfaceColorOwnership", "ContextualTextTokens"];
export {
  r as BehaviorContracts,
  m as ContextualTextTokens,
  a as Default,
  s as ExpandedTargetHitArea,
  i as FocusIndicatorTarget,
  u as LegacySurfaceColorOwnership,
  c as LoadingIndicatorPresentation,
  d as RealInteractionFeedback,
  l as SizeGeometry,
  n as VisualStates,
  O as __namedExportsOrder,
  H as default
};
