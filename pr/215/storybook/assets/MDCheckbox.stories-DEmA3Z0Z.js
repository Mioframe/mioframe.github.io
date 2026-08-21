import { r as n } from "./iframe-CKr7v8KT.js";
import { M as o } from "./MDCheckbox-HdvbcKOd.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDCheckbox.vue_vue_type_style_index_0_scoped_45affbd6_lang-BcMr9jHw.js";
import "./core-CHv0XPlm.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
const { useArgs: M } = __STORYBOOK_MODULE_PREVIEW_API__, I = { title: "Material 3/Components/Checkbox/MDCheckbox", component: o, tags: ["autodocs"], args: { "aria-label": "Select item", checked: false }, argTypes: { "onUpdate:checked": { action: "update:checked" }, "onUpdate:indeterminate": { action: "update:indeterminate" } }, parameters: { layout: "centered", docs: { description: { component: "Mioframe Material Checkbox adapter backed privately by @m3e/web. Demand-scoped to the official tri-state selection axis (controlled `checked`/`indeterminate`, `disabled`) plus the Mioframe `presentation` composition extension used by decorative list-item/row toggles and read-only value displays." } } } }, r = { render: function() {
  const [t, a] = M(), d = (c) => {
    a({ checked: c });
  }, D = (c) => {
    a({ indeterminate: c });
  };
  return { components: { MDCheckbox: o }, setup() {
    return { args: t, onUpdateChecked: d, onUpdateIndeterminate: D };
  }, template: '<MDCheckbox v-bind="args" @update:checked="onUpdateChecked" @update:indeterminate="onUpdateIndeterminate" />' };
} }, s = { args: { checked: true } }, i = { args: { indeterminate: true } }, l = { args: { disabled: true } }, u = { render: () => ({ components: { MDCheckbox: o }, template: `
      <div
        data-testid="md-checkbox-presentation"
        role="checkbox"
        aria-checked="true"
        aria-label="Select item"
        tabindex="0"
        style="display: inline-flex; align-items: center; gap: 8px;"
      >
        Select item
        <MDCheckbox presentation checked />
      </div>
    ` }) }, b = { render: () => ({ components: { MDCheckbox: o }, setup() {
  const e = n(0), t = n(void 0);
  return { intentCount: e, lastChecked: t, onUpdateChecked: (d) => {
    e.value += 1, t.value = d;
  } };
}, template: `
      <div data-testid="md-checkbox-rejected-intent">
        <MDCheckbox aria-label="Rejected intent" :checked="false" @update:checked="onUpdateChecked" />
        <output id="md-checkbox-rejected-intent-count">{{ intentCount }}</output>
        <output id="md-checkbox-rejected-intent-value">{{ lastChecked }}</output>
      </div>
    ` }) }, p = { render: () => ({ components: { MDCheckbox: o }, setup() {
  const e = n(false), t = n(false), a = n(0);
  return { checked: e, disabled: t, onAction: () => {
    e.value = !e.value, a.value += 1;
  }, toggleCount: a };
}, template: `
      <div
        data-testid="md-checkbox-presentation-composition"
        role="checkbox"
        :aria-checked="checked ? 'true' : 'false'"
        :aria-disabled="disabled ? 'true' : 'false'"
        aria-label="Select item"
        tabindex="0"
        style="display: inline-flex; align-items: center; gap: 8px; cursor: pointer;"
        @click="onAction"
      >
        Select item
        <MDCheckbox presentation :checked="checked" :disabled="disabled" />
        <output id="md-checkbox-presentation-composition-count">{{ toggleCount }}</output>
      </div>
    ` }) }, h = { render: () => ({ components: { MDCheckbox: o }, setup() {
  const e = n(false), t = n(false), a = n(0), d = n(false);
  return { changeCount: a, disabledChecked: d, labelledChecked: e, onUpdateLabelled: (f) => {
    e.value = f, a.value += 1;
  }, onUpdateStandalone: (f) => {
    t.value = f;
  }, standaloneChecked: t };
}, template: `
      <div data-testid="md-checkbox-behavior-contracts">
        <span id="behavior-labelledby-text">Labelledby checkbox</span>
        <MDCheckbox id="behavior-labelled-checkbox" aria-labelledby="behavior-labelledby-text" :checked="labelledChecked" @update:checked="onUpdateLabelled" />
        <output id="md-checkbox-change-count">{{ changeCount }}</output>
        <MDCheckbox aria-label="Standalone labelled checkbox" :checked="standaloneChecked" @update:checked="onUpdateStandalone" />
        <MDCheckbox aria-label="Disabled checkbox" disabled :checked="disabledChecked" />
      </div>
    ` }) }, k = { render: () => ({ components: { MDCheckbox: o }, setup() {
  const e = n(false);
  return { checked: e, onUpdateChecked: (a) => {
    e.value = a;
  } };
}, template: `
      <div data-testid="md-checkbox-adjacent-label" style="display: inline-flex; align-items: center; gap: 8px;">
        <MDCheckbox id="adjacent-label-checkbox" :checked="checked" @update:checked="onUpdateChecked" />
        <label for="adjacent-label-checkbox">Adjacent label</label>
      </div>
    ` }) }, m = { render: () => ({ components: { MDCheckbox: o }, template: `
      <div data-testid="md-checkbox-tab-order">
        <button type="button" id="tab-order-before">Before</button>
        <MDCheckbox id="tab-order-disabled" aria-label="Disabled tab order" disabled />
        <MDCheckbox id="tab-order-presentation" presentation checked />
        <button type="button" id="tab-order-after">After</button>
      </div>
    ` }) }, v = { render: () => ({ components: { MDCheckbox: o }, setup() {
  const e = n(false), t = n(0);
  return { checked: e, onUpdateChecked: (d) => {
    e.value = d, t.value += 1;
  }, toggleCount: t };
}, template: `
      <div data-testid="visual-md-checkbox-target-hit">
        <MDCheckbox aria-label="Target hit" :checked="checked" @update:checked="onUpdateChecked" />
        <output id="visual-md-checkbox-target-hit-count">{{ toggleCount }}</output>
      </div>
    ` }) }, C = { render: () => ({ components: { MDCheckbox: o }, setup() {
  const e = n({ name: "bogus-name", required: true, value: "bogus-value" }), t = n(0);
  return { attemptedOverrides: e, clickCount: t, onClick: () => {
    t.value += 1;
  }, toggleAttemptedOverrides: () => {
    e.value = { ...e.value, name: e.value.name === "bogus-name" ? "other-name" : "bogus-name", required: !e.value.required };
  } };
}, template: `
      <div data-testid="md-checkbox-host-attribute-boundary">
        <MDCheckbox
          data-testid="host-boundary-checkbox"
          aria-label="Boundary checkbox"
          v-bind="attemptedOverrides"
          @click="onClick"
        />
        <output data-testid="host-boundary-click-count">{{ clickCount }}</output>
        <button type="button" data-testid="host-boundary-toggle" @click="toggleAttemptedOverrides">
          Toggle attempted overrides
        </button>
      </div>
    ` }) }, x = { tags: ["visual"], render: () => ({ components: { MDCheckbox: o }, template: `
      <div data-testid="visual-md-checkbox-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDCheckbox aria-label="Unselected" />
          <MDCheckbox aria-label="Selected" checked />
          <MDCheckbox aria-label="Indeterminate" indeterminate />
        </div>
        <div class="visual-row">
          <MDCheckbox aria-label="Disabled unselected" disabled />
          <MDCheckbox aria-label="Disabled selected" checked disabled />
          <MDCheckbox aria-label="Disabled indeterminate" indeterminate disabled />
        </div>
        <div class="visual-row">
          <MDCheckbox aria-label="Presentation unselected" presentation />
          <MDCheckbox aria-label="Presentation selected" presentation checked />
          <MDCheckbox aria-label="Presentation indeterminate" presentation indeterminate />
        </div>
      </div>
    ` }) }, g = { tags: ["visual"], render: () => ({ components: { MDCheckbox: o }, template: `
      <div data-testid="visual-md-checkbox-real-interaction">
        <MDCheckbox aria-label="Press me" />
      </div>
    ` }) };
r.parameters = { ...r.parameters, docs: { ...r.parameters?.docs, source: { originalSource: `{
  render: function Render() {
    const [args, updateArgs] = useArgs<{
      /** Official binary selection state. */
      checked?: boolean | undefined;
      /** Official tri-state indeterminate axis. */
      indeterminate?: boolean | undefined;
    }>();
    const onUpdateChecked = (checked: boolean) => {
      updateArgs({
        checked
      });
    };
    const onUpdateIndeterminate = (indeterminate: boolean) => {
      updateArgs({
        indeterminate
      });
    };
    return {
      components: {
        MDCheckbox
      },
      setup() {
        return {
          args,
          onUpdateChecked,
          onUpdateIndeterminate
        };
      },
      template: '<MDCheckbox v-bind="args" @update:checked="onUpdateChecked" @update:indeterminate="onUpdateIndeterminate" />'
    };
  }
}`, ...r.parameters?.docs?.source } } };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
  args: {
    checked: true
  }
}`, ...s.parameters?.docs?.source } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
  args: {
    indeterminate: true
  }
}`, ...i.parameters?.docs?.source } } };
l.parameters = { ...l.parameters, docs: { ...l.parameters?.docs, source: { originalSource: `{
  args: {
    disabled: true
  }
}`, ...l.parameters?.docs?.source } } };
u.parameters = { ...u.parameters, docs: { ...u.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDCheckbox
    },
    template: \`
      <div
        data-testid="md-checkbox-presentation"
        role="checkbox"
        aria-checked="true"
        aria-label="Select item"
        tabindex="0"
        style="display: inline-flex; align-items: center; gap: 8px;"
      >
        Select item
        <MDCheckbox presentation checked />
      </div>
    \`
  })
}`, ...u.parameters?.docs?.source } } };
b.parameters = { ...b.parameters, docs: { ...b.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDCheckbox
    },
    setup() {
      const intentCount = ref(0);
      const lastChecked = ref<boolean | undefined>(undefined);
      const onUpdateChecked = (value: boolean) => {
        intentCount.value += 1;
        lastChecked.value = value;
      };
      return {
        intentCount,
        lastChecked,
        onUpdateChecked
      };
    },
    template: \`
      <div data-testid="md-checkbox-rejected-intent">
        <MDCheckbox aria-label="Rejected intent" :checked="false" @update:checked="onUpdateChecked" />
        <output id="md-checkbox-rejected-intent-count">{{ intentCount }}</output>
        <output id="md-checkbox-rejected-intent-value">{{ lastChecked }}</output>
      </div>
    \`
  })
}`, ...b.parameters?.docs?.source } } };
p.parameters = { ...p.parameters, docs: { ...p.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDCheckbox
    },
    setup() {
      const checked = ref(false);
      const disabled = ref(false);
      const toggleCount = ref(0);
      const onAction = () => {
        checked.value = !checked.value;
        toggleCount.value += 1;
      };
      return {
        checked,
        disabled,
        onAction,
        toggleCount
      };
    },
    template: \`
      <div
        data-testid="md-checkbox-presentation-composition"
        role="checkbox"
        :aria-checked="checked ? 'true' : 'false'"
        :aria-disabled="disabled ? 'true' : 'false'"
        aria-label="Select item"
        tabindex="0"
        style="display: inline-flex; align-items: center; gap: 8px; cursor: pointer;"
        @click="onAction"
      >
        Select item
        <MDCheckbox presentation :checked="checked" :disabled="disabled" />
        <output id="md-checkbox-presentation-composition-count">{{ toggleCount }}</output>
      </div>
    \`
  })
}`, ...p.parameters?.docs?.source } } };
h.parameters = { ...h.parameters, docs: { ...h.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDCheckbox
    },
    setup() {
      const labelledChecked = ref(false);
      const standaloneChecked = ref(false);
      const changeCount = ref(0);
      const disabledChecked = ref(false);
      const onUpdateLabelled = (value: boolean) => {
        labelledChecked.value = value;
        changeCount.value += 1;
      };
      const onUpdateStandalone = (value: boolean) => {
        standaloneChecked.value = value;
      };
      return {
        changeCount,
        disabledChecked,
        labelledChecked,
        onUpdateLabelled,
        onUpdateStandalone,
        standaloneChecked
      };
    },
    template: \`
      <div data-testid="md-checkbox-behavior-contracts">
        <span id="behavior-labelledby-text">Labelledby checkbox</span>
        <MDCheckbox id="behavior-labelled-checkbox" aria-labelledby="behavior-labelledby-text" :checked="labelledChecked" @update:checked="onUpdateLabelled" />
        <output id="md-checkbox-change-count">{{ changeCount }}</output>
        <MDCheckbox aria-label="Standalone labelled checkbox" :checked="standaloneChecked" @update:checked="onUpdateStandalone" />
        <MDCheckbox aria-label="Disabled checkbox" disabled :checked="disabledChecked" />
      </div>
    \`
  })
}`, ...h.parameters?.docs?.source } } };
k.parameters = { ...k.parameters, docs: { ...k.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDCheckbox
    },
    setup() {
      const checked = ref(false);
      const onUpdateChecked = (value: boolean) => {
        checked.value = value;
      };
      return {
        checked,
        onUpdateChecked
      };
    },
    template: \`
      <div data-testid="md-checkbox-adjacent-label" style="display: inline-flex; align-items: center; gap: 8px;">
        <MDCheckbox id="adjacent-label-checkbox" :checked="checked" @update:checked="onUpdateChecked" />
        <label for="adjacent-label-checkbox">Adjacent label</label>
      </div>
    \`
  })
}`, ...k.parameters?.docs?.source } } };
m.parameters = { ...m.parameters, docs: { ...m.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDCheckbox
    },
    template: \`
      <div data-testid="md-checkbox-tab-order">
        <button type="button" id="tab-order-before">Before</button>
        <MDCheckbox id="tab-order-disabled" aria-label="Disabled tab order" disabled />
        <MDCheckbox id="tab-order-presentation" presentation checked />
        <button type="button" id="tab-order-after">After</button>
      </div>
    \`
  })
}`, ...m.parameters?.docs?.source } } };
v.parameters = { ...v.parameters, docs: { ...v.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDCheckbox
    },
    setup() {
      const checked = ref(false);
      const toggleCount = ref(0);
      // Completes the controlled \`v-model:checked\`-style round trip: the \`beforeinput\`-derived
      // contract calls \`preventDefault()\` before any renderer mutation, so the rendered \`checked\`
      // only ever changes when the owning consumer writes the emitted value back into \`checked\`
      // (ARCHITECTURE.md "State precedence and restoration").
      const onUpdateChecked = (value: boolean) => {
        checked.value = value;
        toggleCount.value += 1;
      };
      return {
        checked,
        onUpdateChecked,
        toggleCount
      };
    },
    template: \`
      <div data-testid="visual-md-checkbox-target-hit">
        <MDCheckbox aria-label="Target hit" :checked="checked" @update:checked="onUpdateChecked" />
        <output id="visual-md-checkbox-target-hit-count">{{ toggleCount }}</output>
      </div>
    \`
  })
}`, ...v.parameters?.docs?.source } } };
C.parameters = { ...C.parameters, docs: { ...C.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDCheckbox
    },
    setup() {
      // \`checked\`/\`indeterminate\` are deliberately excluded here: unlike Switch (whose public
      // prop \`selected\` is a distinct name from the renderer's \`checked\`), Checkbox's public
      // props are named identically to the renderer properties they control, so binding them
      // through \`v-bind\` is the legitimate controlled contract, not an attempted forbidden
      // override \u2014 that contract is proven by the "maps explicit checked/indeterminate" unit
      // tests, not this fixture. This fixture attempts only renderer-private/forbidden surface:
      // \`name\`, \`required\`, \`value\`, and an unknown attribute.
      const attemptedOverrides = ref<Record<string, unknown>>({
        name: 'bogus-name',
        required: true,
        value: 'bogus-value'
      });
      const clickCount = ref(0);
      const onClick = () => {
        clickCount.value += 1;
      };
      const toggleAttemptedOverrides = () => {
        attemptedOverrides.value = {
          ...attemptedOverrides.value,
          name: attemptedOverrides.value.name === 'bogus-name' ? 'other-name' : 'bogus-name',
          required: !attemptedOverrides.value.required
        };
      };
      return {
        attemptedOverrides,
        clickCount,
        onClick,
        toggleAttemptedOverrides
      };
    },
    template: \`
      <div data-testid="md-checkbox-host-attribute-boundary">
        <MDCheckbox
          data-testid="host-boundary-checkbox"
          aria-label="Boundary checkbox"
          v-bind="attemptedOverrides"
          @click="onClick"
        />
        <output data-testid="host-boundary-click-count">{{ clickCount }}</output>
        <button type="button" data-testid="host-boundary-toggle" @click="toggleAttemptedOverrides">
          Toggle attempted overrides
        </button>
      </div>
    \`
  })
}`, ...C.parameters?.docs?.source } } };
x.parameters = { ...x.parameters, docs: { ...x.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDCheckbox
    },
    template: \`
      <div data-testid="visual-md-checkbox-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDCheckbox aria-label="Unselected" />
          <MDCheckbox aria-label="Selected" checked />
          <MDCheckbox aria-label="Indeterminate" indeterminate />
        </div>
        <div class="visual-row">
          <MDCheckbox aria-label="Disabled unselected" disabled />
          <MDCheckbox aria-label="Disabled selected" checked disabled />
          <MDCheckbox aria-label="Disabled indeterminate" indeterminate disabled />
        </div>
        <div class="visual-row">
          <MDCheckbox aria-label="Presentation unselected" presentation />
          <MDCheckbox aria-label="Presentation selected" presentation checked />
          <MDCheckbox aria-label="Presentation indeterminate" presentation indeterminate />
        </div>
      </div>
    \`
  })
}`, ...x.parameters?.docs?.source } } };
g.parameters = { ...g.parameters, docs: { ...g.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDCheckbox
    },
    template: \`
      <div data-testid="visual-md-checkbox-real-interaction">
        <MDCheckbox aria-label="Press me" />
      </div>
    \`
  })
}`, ...g.parameters?.docs?.source } } };
const w = ["Default", "Checked", "Indeterminate", "Disabled", "Presentation", "RejectedIntent", "PresentationComposition", "BehaviorContracts", "AdjacentLabel", "TabOrderFixture", "TargetHitArea", "HostAttributeBoundary", "VisualStates", "RealInteractionFeedback"];
export {
  k as AdjacentLabel,
  h as BehaviorContracts,
  s as Checked,
  r as Default,
  l as Disabled,
  C as HostAttributeBoundary,
  i as Indeterminate,
  u as Presentation,
  p as PresentationComposition,
  g as RealInteractionFeedback,
  b as RejectedIntent,
  m as TabOrderFixture,
  v as TargetHitArea,
  x as VisualStates,
  w as __namedExportsOrder,
  I as default
};
