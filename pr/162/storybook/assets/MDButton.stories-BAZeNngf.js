import { d as v, f as D, h as B, g, t as M, r as u, o as k } from "./iframe-CFFpST2C.js";
import { u as C } from "./useFocusIndicator-BIMuS5F7.js";
import { M as t } from "./MDButton-CAXQ90s9.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-CD9ivRR3.js";
import "./MDLoadingIndicator-BTxODlxV.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
const f = { id: "visual-md-button-target-hit", class: "visual-checker-backdrop" }, S = { id: "visual-md-button-target-hit-count" }, x = v({ __name: "MDButtonTargetHitVisualStory", setup(m) {
  const e = u(0), o = () => {
    e.value += 1;
  };
  return (p, b) => (k(), D("div", f, [B(t, { label: "OK", size: "extra-small", onClick: o }), g("output", S, M(e.value), 1)]));
} }), V = { title: "Material 3/Components/Buttons/MDButton", component: t, args: { color: "filled", label: "Save" }, argTypes: { onClick: { action: "click" } }, parameters: { layout: "centered", docs: { description: { component: "Mioframe Material action Button adapter backed privately by @m3e/web. Supports the production-selected filled, outlined, and text colors, small and extra-small sizes, disabled state, native button/submit behavior, leading icon content, and short indeterminate loading." } } } }, n = {}, a = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
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
    ` }) }, l = { render: () => ({ components: { MDButton: t }, template: `
      <div data-testid="visual-md-button-size-geometry" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Extra small" size="extra-small"><template #icon>+</template></MDButton>
          <MDButton label="Small" size="small"><template #icon>+</template></MDButton>
        </div>
      </div>
    ` }) }, i = { render: () => ({ components: { MDButtonTargetHitVisualStory: x }, template: "<MDButtonTargetHitVisualStory />" }) }, s = { render: () => ({ components: { MDButton: t }, setup() {
  C();
}, template: `
      <div class="visual-checker-backdrop" style="position:fixed;inset:0;">
        <div id="visual-md-button-focus-indicator" style="position:absolute;inset:auto 12px 12px auto;">
          <MDButton label="Focus target" />
        </div>
      </div>
    ` }) }, d = { render: () => ({ components: { MDButton: t }, setup() {
  const m = u(0), e = u(0), o = u(0);
  return { disabledClickCount: o, loadingClickCount: e, onDisabledClick: () => {
    o.value += 1;
  }, onLoadingClick: () => {
    e.value += 1;
  }, onSubmit: () => {
    m.value += 1;
  }, submitCount: m };
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
    ` }) }, r = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
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
    ` }) };
n.parameters = { ...n.parameters, docs: { ...n.parameters?.docs, source: { originalSource: "{}", ...n.parameters?.docs?.source } } };
a.parameters = { ...a.parameters, docs: { ...a.parameters?.docs, source: { originalSource: `{
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
}`, ...a.parameters?.docs?.source } } };
l.parameters = { ...l.parameters, docs: { ...l.parameters?.docs, source: { originalSource: `{
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
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButtonTargetHitVisualStory
    },
    template: '<MDButtonTargetHitVisualStory />'
  })
}`, ...i.parameters?.docs?.source } } };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
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
}`, ...s.parameters?.docs?.source } } };
d.parameters = { ...d.parameters, docs: { ...d.parameters?.docs, source: { originalSource: `{
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
}`, ...d.parameters?.docs?.source } } };
r.parameters = { ...r.parameters, docs: { ...r.parameters?.docs, source: { originalSource: `{
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
}`, ...r.parameters?.docs?.source } } };
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
const E = ["Default", "VisualStates", "SizeGeometry", "ExpandedTargetHitArea", "FocusIndicatorTarget", "BehaviorContracts", "RealInteractionFeedback", "LoadingIndicatorPresentation"];
export {
  d as BehaviorContracts,
  n as Default,
  i as ExpandedTargetHitArea,
  s as FocusIndicatorTarget,
  c as LoadingIndicatorPresentation,
  r as RealInteractionFeedback,
  l as SizeGeometry,
  a as VisualStates,
  E as __namedExportsOrder,
  V as default
};
