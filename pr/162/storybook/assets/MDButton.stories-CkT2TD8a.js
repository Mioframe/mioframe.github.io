import { d as M, f as k, h as C, g as S, t as x, r as e, o as f } from "./iframe-DnoOpgcD.js";
import { u as h } from "./useFocusIndicator-Dmu3Pz_q.js";
import { M as t } from "./MDButton-DPagst_B.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-BqsjQOe7.js";
import "./MDLoadingIndicator-BDQN4ILa.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
const T = { id: "visual-md-button-target-hit", class: "visual-checker-backdrop" }, y = { id: "visual-md-button-target-hit-count" }, w = M({ __name: "MDButtonTargetHitVisualStory", setup(b) {
  const n = e(0), o = () => {
    n.value += 1;
  };
  return (g, v) => (f(), k("div", T, [C(t, { label: "OK", size: "extra-small", onClick: o }), S("output", y, x(n.value), 1)]));
} }), H = { title: "Material 3/Components/Buttons/MDButton", component: t, args: { color: "filled", label: "Save" }, argTypes: { onClick: { action: "click" } }, parameters: { layout: "centered", docs: { description: { component: "Mioframe Material Button adapter backed privately by @m3e/web. Supports default and controlled toggle variants (including text), five color configurations and sizes, round/square shapes, disabled state, native form types, leading icon content, and an indeterminate Loading indicator composition." } } } }, a = {}, l = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
      <div data-testid="visual-md-button-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Filled" color="filled"><template #icon>+</template></MDButton>
          <MDButton label="Outlined" color="outlined"><template #icon>+</template></MDButton>
          <MDButton label="Text" color="text"><template #icon>+</template></MDButton>
        </div>
        <div class="visual-row">
          <MDButton label="Tonal" color="tonal"><template #icon>+</template></MDButton>
          <MDButton label="Elevated" color="elevated"><template #icon>+</template></MDButton>
        </div>
        <div class="visual-row">
          <MDButton label="Disabled filled" disabled><template #icon>+</template></MDButton>
          <MDButton label="Disabled outlined" color="outlined" disabled><template #icon>+</template></MDButton>
          <MDButton label="Disabled text" color="text" disabled><template #icon>+</template></MDButton>
        </div>
      </div>
    ` }) }, i = { render: () => ({ components: { MDButton: t }, template: `
      <div data-testid="visual-md-button-size-geometry" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Extra small" size="extra-small"><template #icon>+</template></MDButton>
          <MDButton label="Small" size="small"><template #icon>+</template></MDButton>
          <MDButton label="Medium" size="medium"><template #icon>+</template></MDButton>
        </div>
        <div class="visual-row">
          <MDButton label="Large" size="large"><template #icon>+</template></MDButton>
          <MDButton label="Extra large" size="extra-large"><template #icon>+</template></MDButton>
        </div>
      </div>
    ` }) }, s = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
      <div data-testid="visual-md-button-toggle-shapes" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Round selected" variant="toggle" selected color="tonal" />
          <MDButton label="Round unselected" variant="toggle" color="tonal" />
        </div>
        <div class="visual-row">
          <MDButton label="Square selected" variant="toggle" selected shape="square" color="tonal" />
          <MDButton label="Square unselected" variant="toggle" shape="square" color="tonal" />
        </div>
        <div class="visual-row">
          <MDButton label="Text selected" variant="toggle" selected color="text" />
          <MDButton label="Text unselected" variant="toggle" color="text" />
        </div>
      </div>
    ` }) }, d = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
      <div data-testid="visual-md-button-disabled-selected-outlined-text" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Outlined unselected" variant="toggle" disabled color="outlined" />
          <MDButton label="Outlined selected" variant="toggle" selected disabled color="outlined" />
          <MDButton label="Text disabled" disabled color="text" />
        </div>
      </div>
    ` }) }, u = { render: () => ({ components: { MDButtonTargetHitVisualStory: w }, template: "<MDButtonTargetHitVisualStory />" }) }, c = { render: () => ({ components: { MDButton: t }, setup() {
  h();
}, template: `
      <div class="visual-checker-backdrop" style="position:fixed;inset:0;">
        <div id="visual-md-button-focus-indicator" style="position:absolute;inset:auto 12px 12px auto;">
          <MDButton label="Focus target" />
        </div>
      </div>
    ` }) }, r = { render: () => ({ components: { MDButton: t }, setup() {
  const b = e(false), n = e(0), o = e(0), g = e(0), v = e(0), D = e(0);
  return { disabledClickCount: D, loadingClickCount: v, onDisabledClick: () => {
    D.value += 1;
  }, onLoadingClick: () => {
    v.value += 1;
  }, onSubmit: () => {
    o.value += 1;
  }, onUpdateSelected: (B) => {
    n.value += 1, b.value = B;
  }, resetCount: g, selected: b, selectionIntentCount: n, submitCount: o };
}, template: `
      <div data-testid="md-button-behavior-contracts">
        <form aria-label="Button form" @submit.prevent="onSubmit" @reset="resetCount += 1">
          <input aria-label="Reset value" value="initial" />
          <MDButton label="Submit action" native-type="submit" />
          <MDButton label="Reset action" native-type="reset" />
        </form>
        <output id="md-button-submit-count">{{ submitCount }}</output>
        <output id="md-button-reset-count">{{ resetCount }}</output>
        <MDButton label="Toggle action" variant="toggle" :selected="selected" @update:selected="onUpdateSelected" />
        <output id="md-button-selected">{{ selected }}</output>
        <output id="md-button-selection-intent-count">{{ selectionIntentCount }}</output>
        <button id="md-button-programmatic-select" type="button" @click="selected = true">Select programmatically</button>
        <MDButton label="Loading action" loading @click="onLoadingClick" />
        <output id="md-button-loading-count">{{ loadingClickCount }}</output>
        <MDButton label="Disabled action" disabled @click="onDisabledClick" />
        <output id="md-button-disabled-count">{{ disabledClickCount }}</output>
        <MDButton label="Disabled loading action" disabled loading @click="onDisabledClick" />
        <MDButton label="Toggle loading action" variant="toggle" selected loading>
          <template #selected-icon><span data-selected-icon>&#9733;</span></template>
        </MDButton>
        <MDButton label="Press action" size="medium" />
      </div>
    ` }) }, p = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
      <div data-testid="visual-md-button-real-interaction" class="visual-checker-backdrop">
        <MDButton label="Press me" color="filled" />
      </div>
    ` }) }, m = { tags: ["visual"], render: () => ({ components: { MDButton: t }, template: `
      <div data-testid="visual-md-button-loading" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Saving" color="filled" loading />
          <MDButton label="Uploading" color="outlined" loading><template #icon>+</template></MDButton>
          <MDButton label="Sending" color="text" loading />
        </div>
        <div class="visual-row">
          <MDButton label="Saving" color="tonal" loading />
          <MDButton label="Disabled saving" color="filled" disabled loading />
        </div>
      </div>
    ` }) };
a.parameters = { ...a.parameters, docs: { ...a.parameters?.docs, source: { originalSource: "{}", ...a.parameters?.docs?.source } } };
l.parameters = { ...l.parameters, docs: { ...l.parameters?.docs, source: { originalSource: `{
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
          <MDButton label="Tonal" color="tonal"><template #icon>+</template></MDButton>
          <MDButton label="Elevated" color="elevated"><template #icon>+</template></MDButton>
        </div>
        <div class="visual-row">
          <MDButton label="Disabled filled" disabled><template #icon>+</template></MDButton>
          <MDButton label="Disabled outlined" color="outlined" disabled><template #icon>+</template></MDButton>
          <MDButton label="Disabled text" color="text" disabled><template #icon>+</template></MDButton>
        </div>
      </div>
    \`
  })
}`, ...l.parameters?.docs?.source } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="visual-md-button-size-geometry" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Extra small" size="extra-small"><template #icon>+</template></MDButton>
          <MDButton label="Small" size="small"><template #icon>+</template></MDButton>
          <MDButton label="Medium" size="medium"><template #icon>+</template></MDButton>
        </div>
        <div class="visual-row">
          <MDButton label="Large" size="large"><template #icon>+</template></MDButton>
          <MDButton label="Extra large" size="extra-large"><template #icon>+</template></MDButton>
        </div>
      </div>
    \`
  })
}`, ...i.parameters?.docs?.source } } };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="visual-md-button-toggle-shapes" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Round selected" variant="toggle" selected color="tonal" />
          <MDButton label="Round unselected" variant="toggle" color="tonal" />
        </div>
        <div class="visual-row">
          <MDButton label="Square selected" variant="toggle" selected shape="square" color="tonal" />
          <MDButton label="Square unselected" variant="toggle" shape="square" color="tonal" />
        </div>
        <div class="visual-row">
          <MDButton label="Text selected" variant="toggle" selected color="text" />
          <MDButton label="Text unselected" variant="toggle" color="text" />
        </div>
      </div>
    \`
  })
}`, ...s.parameters?.docs?.source } } };
d.parameters = { ...d.parameters, docs: { ...d.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="visual-md-button-disabled-selected-outlined-text" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Outlined unselected" variant="toggle" disabled color="outlined" />
          <MDButton label="Outlined selected" variant="toggle" selected disabled color="outlined" />
          <MDButton label="Text disabled" disabled color="text" />
        </div>
      </div>
    \`
  })
}`, ...d.parameters?.docs?.source } } };
u.parameters = { ...u.parameters, docs: { ...u.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButtonTargetHitVisualStory
    },
    template: '<MDButtonTargetHitVisualStory />'
  })
}`, ...u.parameters?.docs?.source } } };
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
r.parameters = { ...r.parameters, docs: { ...r.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton
    },
    setup() {
      const selected = ref(false);
      const selectionIntentCount = ref(0);
      const submitCount = ref(0);
      const resetCount = ref(0);
      const loadingClickCount = ref(0);
      const disabledClickCount = ref(0);
      const onSubmit = () => {
        submitCount.value += 1;
      };
      const onUpdateSelected = (nextSelected: boolean) => {
        selectionIntentCount.value += 1;
        selected.value = nextSelected;
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
        onUpdateSelected,
        resetCount,
        selected,
        selectionIntentCount,
        submitCount
      };
    },
    template: \`
      <div data-testid="md-button-behavior-contracts">
        <form aria-label="Button form" @submit.prevent="onSubmit" @reset="resetCount += 1">
          <input aria-label="Reset value" value="initial" />
          <MDButton label="Submit action" native-type="submit" />
          <MDButton label="Reset action" native-type="reset" />
        </form>
        <output id="md-button-submit-count">{{ submitCount }}</output>
        <output id="md-button-reset-count">{{ resetCount }}</output>
        <MDButton label="Toggle action" variant="toggle" :selected="selected" @update:selected="onUpdateSelected" />
        <output id="md-button-selected">{{ selected }}</output>
        <output id="md-button-selection-intent-count">{{ selectionIntentCount }}</output>
        <button id="md-button-programmatic-select" type="button" @click="selected = true">Select programmatically</button>
        <MDButton label="Loading action" loading @click="onLoadingClick" />
        <output id="md-button-loading-count">{{ loadingClickCount }}</output>
        <MDButton label="Disabled action" disabled @click="onDisabledClick" />
        <output id="md-button-disabled-count">{{ disabledClickCount }}</output>
        <MDButton label="Disabled loading action" disabled loading @click="onDisabledClick" />
        <MDButton label="Toggle loading action" variant="toggle" selected loading>
          <template #selected-icon><span data-selected-icon>&#9733;</span></template>
        </MDButton>
        <MDButton label="Press action" size="medium" />
      </div>
    \`
  })
}`, ...r.parameters?.docs?.source } } };
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
m.parameters = { ...m.parameters, docs: { ...m.parameters?.docs, source: { originalSource: `{
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
          <MDButton label="Saving" color="tonal" loading />
          <MDButton label="Disabled saving" color="filled" disabled loading />
        </div>
      </div>
    \`
  })
}`, ...m.parameters?.docs?.source } } };
const P = ["Default", "VisualStates", "SizeGeometryMatrix", "ToggleShapes", "DisabledSelectedOutlinedAndText", "ExpandedTargetHitArea", "FocusIndicatorTarget", "BehaviorContracts", "RealInteractionFeedback", "LoadingIndicatorPresentation"];
export {
  r as BehaviorContracts,
  a as Default,
  d as DisabledSelectedOutlinedAndText,
  u as ExpandedTargetHitArea,
  c as FocusIndicatorTarget,
  m as LoadingIndicatorPresentation,
  p as RealInteractionFeedback,
  i as SizeGeometryMatrix,
  s as ToggleShapes,
  l as VisualStates,
  P as __namedExportsOrder,
  H as default
};
