import { d as v, u as D, c as h, h as A, m as C, i as b, j as I, o as O, r as g } from "./iframe-DeRvklRS.js";
import "./fab-BM7C4Glz.js";
import { _ as w } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./core-CHv0XPlm.js";
const _ = ["aria-label"], z = "primary-container", B = "medium", S = v({ inheritAttrs: false, __name: "MDFab", props: { label: {} }, emits: ["click"], setup(e, { emit: m }) {
  const f = e, k = m, F = I("hostElement"), M = (t) => {
    k("click", t);
  }, p = D(), y = () => {
    const t = {};
    for (const [r, u] of Object.entries(p)) (r === "id" || r === "title" || r.startsWith("data-")) && (t[r] = u);
    return t;
  };
  return (t, r) => (O(), h("m3e-fab", C({ ref_key: "hostElement", ref: F }, y(), { class: ["md-fab", b(p).class], style: b(p).style, "aria-label": f.label, size: B, variant: z, onClick: M }), [A(t.$slots, "icon", {}, void 0, true)], 16, _));
} }), a = w(S, [["__scopeId", "data-v-04b4e77f"]]), o = v({ template: `
    <svg aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  ` }), P = { title: "Material 3/Components/Floating Action Button/MDFab", component: a, tags: ["autodocs"], args: { label: "Compose a new message" }, argTypes: { onClick: { action: "click" } }, parameters: { layout: "centered", docs: { description: { component: "Mioframe Material Floating action button adapter backed privately by @m3e/web. Demand-scoped to the selected configuration: medium size (Material's most-recommended size for general use), primary-container color (the documented Material default color mapping), a required filled-icon slot, and a required accessible action label. No disabled affordance exists \u2014 official guidance forbids disabling a FAB." } } } }, n = { render: (e) => ({ components: { AddIcon: o, MDFab: a }, setup() {
  return { args: e };
}, template: '<MDFab v-bind="args"><template #icon><AddIcon /></template></MDFab>' }) }, s = { tags: ["visual"], render: () => ({ components: { AddIcon: o, MDFab: a }, template: `
      <div data-testid="visual-md-fab-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDFab label="Compose"><template #icon><AddIcon /></template></MDFab>
        </div>
      </div>
    ` }) }, d = { render: () => ({ components: { AddIcon: o, MDFab: a }, setup() {
  const e = g(0);
  return { clickCount: e, onClick: () => {
    e.value += 1;
  } };
}, template: `
      <div data-testid="md-fab-behavior-contracts">
        <MDFab label="Compose a new message" @click="onClick">
          <template #icon><AddIcon data-testid="behavior-fab-icon" /></template>
        </MDFab>
        <output id="md-fab-click-count">{{ clickCount }}</output>
      </div>
    ` }) }, i = { render: () => ({ components: { AddIcon: o, MDFab: a }, setup() {
  const e = g({ "bogus-consumer-flag": "leak-attempt", disabled: true, extended: true, lowered: true, size: "large", variant: "primary" });
  return { attemptedOverrides: e, toggleAttemptedOverrides: () => {
    e.value = { ...e.value, disabled: !e.value.disabled, size: e.value.size === "large" ? "small" : "large", variant: e.value.variant === "primary" ? "secondary" : "primary" };
  } };
}, template: `
      <div data-testid="md-fab-host-attribute-boundary">
        <MDFab
          data-testid="host-boundary-fab"
          label="Boundary action"
          v-bind="attemptedOverrides"
        >
          <template #icon><AddIcon /></template>
        </MDFab>
        <button
          data-testid="host-boundary-toggle"
          type="button"
          @click="toggleAttemptedOverrides"
        >
          Toggle attempted overrides
        </button>
      </div>
    ` }) }, c = { render: () => ({ components: { AddIcon: o, MDFab: a }, template: `
      <div data-testid="md-fab-geometry-contract">
        <MDFab data-testid="geometry-fab" label="Compose a new message">
          <template #icon><AddIcon data-testid="geometry-fab-icon" /></template>
        </MDFab>
      </div>
    ` }) }, l = { tags: ["visual"], render: () => ({ components: { AddIcon: o, MDFab: a }, template: `
      <div data-testid="visual-md-fab-real-interaction" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDFab label="Press me"><template #icon><AddIcon /></template></MDFab>
        </div>
      </div>
    ` }) };
n.parameters = { ...n.parameters, docs: { ...n.parameters?.docs, source: { originalSource: `{
  render: args => ({
    components: {
      AddIcon,
      MDFab
    },
    setup() {
      return {
        args
      };
    },
    template: '<MDFab v-bind="args"><template #icon><AddIcon /></template></MDFab>'
  })
}`, ...n.parameters?.docs?.source } } };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      AddIcon,
      MDFab
    },
    template: \`
      <div data-testid="visual-md-fab-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDFab label="Compose"><template #icon><AddIcon /></template></MDFab>
        </div>
      </div>
    \`
  })
}`, ...s.parameters?.docs?.source } } };
d.parameters = { ...d.parameters, docs: { ...d.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      AddIcon,
      MDFab
    },
    setup() {
      const clickCount = ref(0);
      const onClick = () => {
        clickCount.value += 1;
      };
      return {
        clickCount,
        onClick
      };
    },
    template: \`
      <div data-testid="md-fab-behavior-contracts">
        <MDFab label="Compose a new message" @click="onClick">
          <template #icon><AddIcon data-testid="behavior-fab-icon" /></template>
        </MDFab>
        <output id="md-fab-click-count">{{ clickCount }}</output>
      </div>
    \`
  })
}`, ...d.parameters?.docs?.source } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      AddIcon,
      MDFab
    },
    setup() {
      const attemptedOverrides = ref<Record<string, unknown>>({
        'bogus-consumer-flag': 'leak-attempt',
        disabled: true,
        extended: true,
        lowered: true,
        size: 'large',
        variant: 'primary'
      });
      const toggleAttemptedOverrides = () => {
        attemptedOverrides.value = {
          ...attemptedOverrides.value,
          disabled: !attemptedOverrides.value.disabled,
          size: attemptedOverrides.value.size === 'large' ? 'small' : 'large',
          variant: attemptedOverrides.value.variant === 'primary' ? 'secondary' : 'primary'
        };
      };
      return {
        attemptedOverrides,
        toggleAttemptedOverrides
      };
    },
    template: \`
      <div data-testid="md-fab-host-attribute-boundary">
        <MDFab
          data-testid="host-boundary-fab"
          label="Boundary action"
          v-bind="attemptedOverrides"
        >
          <template #icon><AddIcon /></template>
        </MDFab>
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
}`, ...i.parameters?.docs?.source } } };
c.parameters = { ...c.parameters, docs: { ...c.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      AddIcon,
      MDFab
    },
    template: \`
      <div data-testid="md-fab-geometry-contract">
        <MDFab data-testid="geometry-fab" label="Compose a new message">
          <template #icon><AddIcon data-testid="geometry-fab-icon" /></template>
        </MDFab>
      </div>
    \`
  })
}`, ...c.parameters?.docs?.source } } };
l.parameters = { ...l.parameters, docs: { ...l.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      AddIcon,
      MDFab
    },
    template: \`
      <div data-testid="visual-md-fab-real-interaction" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDFab label="Press me"><template #icon><AddIcon /></template></MDFab>
        </div>
      </div>
    \`
  })
}`, ...l.parameters?.docs?.source } } };
const j = ["Default", "VisualStates", "BehaviorContracts", "HostAttributeBoundary", "GeometryContract", "RealInteractionFeedback"];
export {
  d as BehaviorContracts,
  n as Default,
  c as GeometryContract,
  i as HostAttributeBoundary,
  l as RealInteractionFeedback,
  s as VisualStates,
  j as __namedExportsOrder,
  P as default
};
