import { d as U, u as x, c as O, m as _, i as C, y as B, o as I, r as n } from "./iframe-BHNpv72I.js";
import { M as T } from "./MDSwitch.vue_vue_type_style_index_0_scoped_579f9506_lang-BGea3e5O.js";
import { _ as j } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./core-CHv0XPlm.js";
const L = ["checked", "disabled"], P = U({ inheritAttrs: false, __name: "MDSwitch", props: { selected: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, presentation: { type: Boolean, default: false } }, emits: ["update:selected"], setup(e, { emit: t }) {
  const a = e, s = t, c = (o) => {
    o.target instanceof T && (a.presentation || (o.preventDefault(), s("update:selected", !o.target.checked)));
  }, r = x(), l = B(() => a.presentation ? { "aria-hidden": "true", tabindex: -1 } : {}), k = () => {
    const o = {};
    for (const [i, y] of Object.entries(r)) (i === "id" || i === "title" || i === "aria-label" || i === "aria-labelledby" || i.startsWith("data-")) && (o[i] = y);
    return o;
  }, A = () => ({ ...k(), ...l.value });
  return (o, i) => (I(), O("m3e-switch", _(A(), { class: ["md-switch", { "md-switch_presentation": a.presentation }, C(r).class], style: C(r).style, checked: a.selected, disabled: a.disabled, onBeforeinput: c }), null, 16, L));
} }), d = j(P, [["__scopeId", "data-v-579f9506"]]), { useArgs: R } = __STORYBOOK_MODULE_PREVIEW_API__, W = { title: "Material 3/Components/Switch/MDSwitch", component: d, tags: ["autodocs"], args: { "aria-label": "Automatic updates", selected: false }, argTypes: { "onUpdate:selected": { action: "update:selected" } }, parameters: { layout: "centered", docs: { description: { component: "Mioframe Material Switch adapter backed privately by @m3e/web. Demand-scoped to the official standalone default (controlled `selected`, `disabled`) plus the Mioframe `presentation` composition extension used by decorative list-item toggles." } } } }, u = { render: function() {
  const [t, a] = R(), s = (c) => {
    a({ selected: c });
  };
  return { components: { MDSwitch: d }, setup() {
    return { args: t, onUpdateSelected: s };
  }, template: '<MDSwitch v-bind="args" @update:selected="onUpdateSelected" />' };
} }, p = { args: { selected: true } }, b = { args: { disabled: true } }, m = { render: () => ({ components: { MDSwitch: d }, template: `
      <div
        data-testid="md-switch-presentation"
        role="switch"
        aria-checked="true"
        aria-label="Automatic updates"
        tabindex="0"
        style="display: inline-flex; align-items: center; gap: 8px;"
      >
        Automatic updates
        <MDSwitch presentation selected />
      </div>
    ` }) }, h = { render: () => ({ components: { MDSwitch: d }, setup() {
  const e = n(0), t = n(void 0);
  return { intentCount: e, lastIntent: t, onUpdateSelected: (s) => {
    e.value += 1, t.value = s;
  } };
}, template: `
      <div data-testid="md-switch-rejected-intent">
        <MDSwitch aria-label="Rejected intent" :selected="false" @update:selected="onUpdateSelected" />
        <output id="md-switch-rejected-intent-count">{{ intentCount }}</output>
        <output id="md-switch-rejected-intent-value">{{ lastIntent }}</output>
      </div>
    ` }) }, v = { render: () => ({ components: { MDSwitch: d }, setup() {
  const e = n(false), t = n(false), a = n(0);
  return { disabled: t, onAction: () => {
    e.value = !e.value, a.value += 1;
  }, selected: e, toggleCount: a };
}, template: `
      <div
        data-testid="md-switch-presentation-composition"
        role="switch"
        :aria-checked="selected ? 'true' : 'false'"
        :aria-disabled="disabled ? 'true' : 'false'"
        aria-label="Automatic updates"
        tabindex="0"
        style="display: inline-flex; align-items: center; gap: 8px; cursor: pointer;"
        @click="onAction"
      >
        Automatic updates
        <MDSwitch presentation :selected="selected" :disabled="disabled" />
        <output id="md-switch-presentation-composition-count">{{ toggleCount }}</output>
      </div>
    ` }) }, w = { render: () => ({ components: { MDSwitch: d }, setup() {
  const e = n(false), t = n(false), a = n(0), s = n(false);
  return { changeCount: a, disabledSelected: s, labelledSelected: e, onUpdateLabelled: (l) => {
    e.value = l, a.value += 1;
  }, onUpdateStandalone: (l) => {
    t.value = l;
  }, standaloneSelected: t };
}, template: `
      <div data-testid="md-switch-behavior-contracts">
        <span id="behavior-labelledby-text">Labelledby switch</span>
        <MDSwitch id="behavior-labelled-switch" aria-labelledby="behavior-labelledby-text" :selected="labelledSelected" @update:selected="onUpdateLabelled" />
        <output id="md-switch-change-count">{{ changeCount }}</output>
        <MDSwitch aria-label="Standalone labelled switch" :selected="standaloneSelected" @update:selected="onUpdateStandalone" />
        <MDSwitch aria-label="Disabled switch" disabled :selected="disabledSelected" />
      </div>
    ` }) }, S = { render: () => ({ components: { MDSwitch: d }, template: `
      <div data-testid="md-switch-native-label-association">
        <label>
          Implicit native label
          <MDSwitch id="native-label-implicit-switch" />
        </label>
        <div>
          <MDSwitch id="native-label-explicit-switch" />
          <label for="native-label-explicit-switch">Explicit native label</label>
        </div>
      </div>
    ` }) }, g = { render: () => ({ components: { MDSwitch: d }, template: `
      <div data-testid="md-switch-tab-order">
        <button type="button" id="tab-order-before">Before</button>
        <MDSwitch id="tab-order-disabled" aria-label="Disabled tab order" disabled />
        <MDSwitch id="tab-order-presentation" presentation selected />
        <button type="button" id="tab-order-after">After</button>
      </div>
    ` }) }, f = { render: () => ({ components: { MDSwitch: d }, setup() {
  const e = n(false), t = n(0);
  return { onUpdateSelected: (s) => {
    e.value = s, t.value += 1;
  }, selected: e, toggleCount: t };
}, template: `
      <div data-testid="visual-md-switch-target-hit">
        <MDSwitch aria-label="Target hit" :selected="selected" @update:selected="onUpdateSelected" />
        <output id="visual-md-switch-target-hit-count">{{ toggleCount }}</output>
      </div>
    ` }) }, D = { render: () => ({ components: { MDSwitch: d }, setup() {
  const e = n({ checked: true, icons: "both", name: "bogus-name", value: "bogus-value" }), t = n(0);
  return { attemptedOverrides: e, clickCount: t, onClick: () => {
    t.value += 1;
  }, toggleAttemptedOverrides: () => {
    e.value = { ...e.value, checked: !e.value.checked, icons: e.value.icons === "both" ? "selected" : "both" };
  } };
}, template: `
      <div data-testid="md-switch-host-attribute-boundary">
        <MDSwitch
          data-testid="host-boundary-switch"
          aria-label="Boundary switch"
          v-bind="attemptedOverrides"
          @click="onClick"
        />
        <output data-testid="host-boundary-click-count">{{ clickCount }}</output>
        <button type="button" data-testid="host-boundary-toggle" @click="toggleAttemptedOverrides">
          Toggle attempted overrides
        </button>
      </div>
    ` }) }, M = { tags: ["visual"], render: () => ({ components: { MDSwitch: d }, template: `
      <div data-testid="visual-md-switch-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDSwitch aria-label="Unselected" />
          <MDSwitch aria-label="Selected" selected />
        </div>
        <div class="visual-row">
          <MDSwitch aria-label="Disabled unselected" disabled />
          <MDSwitch aria-label="Disabled selected" selected disabled />
        </div>
        <div class="visual-row">
          <MDSwitch aria-label="Presentation unselected" presentation />
          <MDSwitch aria-label="Presentation selected" presentation selected />
        </div>
      </div>
    ` }) };
u.parameters = { ...u.parameters, docs: { ...u.parameters?.docs, source: { originalSource: `{
  render: function Render() {
    const [args, updateArgs] = useArgs<{
      /** Official binary selection state. */
      selected?: boolean | undefined;
    }>();
    const onUpdateSelected = (selected: boolean) => {
      updateArgs({
        selected
      });
    };
    return {
      components: {
        MDSwitch
      },
      setup() {
        return {
          args,
          onUpdateSelected
        };
      },
      template: '<MDSwitch v-bind="args" @update:selected="onUpdateSelected" />'
    };
  }
}`, ...u.parameters?.docs?.source } } };
p.parameters = { ...p.parameters, docs: { ...p.parameters?.docs, source: { originalSource: `{
  args: {
    selected: true
  }
}`, ...p.parameters?.docs?.source } } };
b.parameters = { ...b.parameters, docs: { ...b.parameters?.docs, source: { originalSource: `{
  args: {
    disabled: true
  }
}`, ...b.parameters?.docs?.source } } };
m.parameters = { ...m.parameters, docs: { ...m.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDSwitch
    },
    template: \`
      <div
        data-testid="md-switch-presentation"
        role="switch"
        aria-checked="true"
        aria-label="Automatic updates"
        tabindex="0"
        style="display: inline-flex; align-items: center; gap: 8px;"
      >
        Automatic updates
        <MDSwitch presentation selected />
      </div>
    \`
  })
}`, ...m.parameters?.docs?.source } } };
h.parameters = { ...h.parameters, docs: { ...h.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDSwitch
    },
    setup() {
      const intentCount = ref(0);
      const lastIntent = ref<boolean | undefined>(undefined);
      const onUpdateSelected = (value: boolean) => {
        intentCount.value += 1;
        lastIntent.value = value;
      };
      return {
        intentCount,
        lastIntent,
        onUpdateSelected
      };
    },
    template: \`
      <div data-testid="md-switch-rejected-intent">
        <MDSwitch aria-label="Rejected intent" :selected="false" @update:selected="onUpdateSelected" />
        <output id="md-switch-rejected-intent-count">{{ intentCount }}</output>
        <output id="md-switch-rejected-intent-value">{{ lastIntent }}</output>
      </div>
    \`
  })
}`, ...h.parameters?.docs?.source } } };
v.parameters = { ...v.parameters, docs: { ...v.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDSwitch
    },
    setup() {
      const selected = ref(false);
      const disabled = ref(false);
      const toggleCount = ref(0);
      const onAction = () => {
        selected.value = !selected.value;
        toggleCount.value += 1;
      };
      return {
        disabled,
        onAction,
        selected,
        toggleCount
      };
    },
    template: \`
      <div
        data-testid="md-switch-presentation-composition"
        role="switch"
        :aria-checked="selected ? 'true' : 'false'"
        :aria-disabled="disabled ? 'true' : 'false'"
        aria-label="Automatic updates"
        tabindex="0"
        style="display: inline-flex; align-items: center; gap: 8px; cursor: pointer;"
        @click="onAction"
      >
        Automatic updates
        <MDSwitch presentation :selected="selected" :disabled="disabled" />
        <output id="md-switch-presentation-composition-count">{{ toggleCount }}</output>
      </div>
    \`
  })
}`, ...v.parameters?.docs?.source } } };
w.parameters = { ...w.parameters, docs: { ...w.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDSwitch
    },
    setup() {
      const labelledSelected = ref(false);
      const standaloneSelected = ref(false);
      const changeCount = ref(0);
      const disabledSelected = ref(false);
      const onUpdateLabelled = (value: boolean) => {
        labelledSelected.value = value;
        changeCount.value += 1;
      };
      const onUpdateStandalone = (value: boolean) => {
        standaloneSelected.value = value;
      };
      return {
        changeCount,
        disabledSelected,
        labelledSelected,
        onUpdateLabelled,
        onUpdateStandalone,
        standaloneSelected
      };
    },
    template: \`
      <div data-testid="md-switch-behavior-contracts">
        <span id="behavior-labelledby-text">Labelledby switch</span>
        <MDSwitch id="behavior-labelled-switch" aria-labelledby="behavior-labelledby-text" :selected="labelledSelected" @update:selected="onUpdateLabelled" />
        <output id="md-switch-change-count">{{ changeCount }}</output>
        <MDSwitch aria-label="Standalone labelled switch" :selected="standaloneSelected" @update:selected="onUpdateStandalone" />
        <MDSwitch aria-label="Disabled switch" disabled :selected="disabledSelected" />
      </div>
    \`
  })
}`, ...w.parameters?.docs?.source } } };
S.parameters = { ...S.parameters, docs: { ...S.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDSwitch
    },
    template: \`
      <div data-testid="md-switch-native-label-association">
        <label>
          Implicit native label
          <MDSwitch id="native-label-implicit-switch" />
        </label>
        <div>
          <MDSwitch id="native-label-explicit-switch" />
          <label for="native-label-explicit-switch">Explicit native label</label>
        </div>
      </div>
    \`
  })
}`, ...S.parameters?.docs?.source } } };
g.parameters = { ...g.parameters, docs: { ...g.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDSwitch
    },
    template: \`
      <div data-testid="md-switch-tab-order">
        <button type="button" id="tab-order-before">Before</button>
        <MDSwitch id="tab-order-disabled" aria-label="Disabled tab order" disabled />
        <MDSwitch id="tab-order-presentation" presentation selected />
        <button type="button" id="tab-order-after">After</button>
      </div>
    \`
  })
}`, ...g.parameters?.docs?.source } } };
f.parameters = { ...f.parameters, docs: { ...f.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDSwitch
    },
    setup() {
      const selected = ref(false);
      const toggleCount = ref(0);
      // Completes the controlled \`v-model:selected\`-style round trip: the corrected
      // \`beforeinput\`-derived contract calls \`preventDefault()\` before any renderer mutation, so
      // the rendered \`checked\` only ever changes when the owning consumer writes the emitted
      // value back into \`selected\` (ARCHITECTURE.md "State precedence and restoration").
      const onUpdateSelected = (value: boolean) => {
        selected.value = value;
        toggleCount.value += 1;
      };
      return {
        onUpdateSelected,
        selected,
        toggleCount
      };
    },
    template: \`
      <div data-testid="visual-md-switch-target-hit">
        <MDSwitch aria-label="Target hit" :selected="selected" @update:selected="onUpdateSelected" />
        <output id="visual-md-switch-target-hit-count">{{ toggleCount }}</output>
      </div>
    \`
  })
}`, ...f.parameters?.docs?.source } } };
D.parameters = { ...D.parameters, docs: { ...D.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDSwitch
    },
    setup() {
      const attemptedOverrides = ref<Record<string, unknown>>({
        checked: true,
        icons: 'both',
        name: 'bogus-name',
        value: 'bogus-value'
      });
      const clickCount = ref(0);
      const onClick = () => {
        clickCount.value += 1;
      };
      const toggleAttemptedOverrides = () => {
        attemptedOverrides.value = {
          ...attemptedOverrides.value,
          checked: !attemptedOverrides.value.checked,
          icons: attemptedOverrides.value.icons === 'both' ? 'selected' : 'both'
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
      <div data-testid="md-switch-host-attribute-boundary">
        <MDSwitch
          data-testid="host-boundary-switch"
          aria-label="Boundary switch"
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
}`, ...D.parameters?.docs?.source } } };
M.parameters = { ...M.parameters, docs: { ...M.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDSwitch
    },
    template: \`
      <div data-testid="visual-md-switch-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDSwitch aria-label="Unselected" />
          <MDSwitch aria-label="Selected" selected />
        </div>
        <div class="visual-row">
          <MDSwitch aria-label="Disabled unselected" disabled />
          <MDSwitch aria-label="Disabled selected" selected disabled />
        </div>
        <div class="visual-row">
          <MDSwitch aria-label="Presentation unselected" presentation />
          <MDSwitch aria-label="Presentation selected" presentation selected />
        </div>
      </div>
    \`
  })
}`, ...M.parameters?.docs?.source } } };
const K = ["Default", "Selected", "Disabled", "Presentation", "RejectedIntent", "PresentationComposition", "BehaviorContracts", "NativeLabelAssociation", "TabOrderFixture", "TargetHitArea", "HostAttributeBoundary", "VisualStates"];
export {
  w as BehaviorContracts,
  u as Default,
  b as Disabled,
  D as HostAttributeBoundary,
  S as NativeLabelAssociation,
  m as Presentation,
  v as PresentationComposition,
  h as RejectedIntent,
  p as Selected,
  g as TabOrderFixture,
  f as TargetHitArea,
  M as VisualStates,
  K as __namedExportsOrder,
  W as default
};
