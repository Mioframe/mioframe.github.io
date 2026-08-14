import { d as k, u as F, h as D, c as M, i as y, m as C, j as p, o as h, r as u } from "./iframe--Cz4NY7w.js";
import "./MDFab.vue_vue_type_style_index_0_scoped_a3282281_lang-XxxE3LjX.js";
import { _ as O } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./core-CHv0XPlm.js";
const _ = ["aria-label"], A = "primary-container", w = "medium", B = k({ inheritAttrs: false, __name: "MDFab", props: { label: {} }, emits: ["click"], setup(e, { emit: c }) {
  const b = e, v = c;
  F();
  const g = (t) => {
    v("click", t);
  }, l = D(), f = () => {
    const t = {};
    for (const [a, m] of Object.entries(l)) (a === "id" || a === "title" || a.startsWith("data-")) && (t[a] = m);
    return t;
  };
  return (t, a) => (h(), M("m3e-fab", C(f(), { class: ["md-fab", p(l).class], style: p(l).style, "aria-label": b.label, size: w, variant: A, onClick: g }), [y(t.$slots, "icon", {}, void 0, true)], 16, _));
} }), r = O(B, [["__scopeId", "data-v-a3282281"]]), R = { title: "Material 3/Components/Floating Action Button/MDFab", component: r, tags: ["autodocs"], args: { label: "Compose a new message" }, argTypes: { onClick: { action: "click" } }, parameters: { layout: "centered", docs: { description: { component: "Mioframe Material Floating action button adapter backed privately by @m3e/web. Demand-scoped to the single official standalone default: medium size, primary-container color, a required icon, and a required accessible action label. No disabled affordance exists \u2014 official guidance forbids disabling a FAB." } } } }, s = { render: (e) => ({ components: { MDFab: r }, setup() {
  return { args: e };
}, template: '<MDFab v-bind="args"><template #icon>+</template></MDFab>' }) }, o = { tags: ["visual"], render: () => ({ components: { MDFab: r }, template: `
      <div data-testid="visual-md-fab-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDFab label="Compose"><template #icon>+</template></MDFab>
        </div>
      </div>
    ` }) }, n = { render: () => ({ components: { MDFab: r }, setup() {
  const e = u(0);
  return { clickCount: e, onClick: () => {
    e.value += 1;
  } };
}, template: `
      <div data-testid="md-fab-behavior-contracts">
        <MDFab label="Compose a new message" @click="onClick">
          <template #icon>+</template>
        </MDFab>
        <output id="md-fab-click-count">{{ clickCount }}</output>
      </div>
    ` }) }, i = { render: () => ({ components: { MDFab: r }, setup() {
  const e = u({ "bogus-consumer-flag": "leak-attempt", disabled: true, extended: true, lowered: true, size: "large", variant: "primary" });
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
          <template #icon>+</template>
        </MDFab>
        <button
          data-testid="host-boundary-toggle"
          type="button"
          @click="toggleAttemptedOverrides"
        >
          Toggle attempted overrides
        </button>
      </div>
    ` }) }, d = { tags: ["visual"], render: () => ({ components: { MDFab: r }, template: `
      <div data-testid="visual-md-fab-real-interaction" class="visual-checker-backdrop">
        <MDFab label="Press me"><template #icon>+</template></MDFab>
      </div>
    ` }) };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
  render: args => ({
    components: {
      MDFab
    },
    setup() {
      return {
        args
      };
    },
    template: '<MDFab v-bind="args"><template #icon>+</template></MDFab>'
  })
}`, ...s.parameters?.docs?.source } } };
o.parameters = { ...o.parameters, docs: { ...o.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDFab
    },
    template: \`
      <div data-testid="visual-md-fab-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDFab label="Compose"><template #icon>+</template></MDFab>
        </div>
      </div>
    \`
  })
}`, ...o.parameters?.docs?.source } } };
n.parameters = { ...n.parameters, docs: { ...n.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
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
          <template #icon>+</template>
        </MDFab>
        <output id="md-fab-click-count">{{ clickCount }}</output>
      </div>
    \`
  })
}`, ...n.parameters?.docs?.source } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
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
          <template #icon>+</template>
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
d.parameters = { ...d.parameters, docs: { ...d.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDFab
    },
    template: \`
      <div data-testid="visual-md-fab-real-interaction" class="visual-checker-backdrop">
        <MDFab label="Press me"><template #icon>+</template></MDFab>
      </div>
    \`
  })
}`, ...d.parameters?.docs?.source } } };
const T = ["Default", "VisualStates", "BehaviorContracts", "HostAttributeBoundary", "RealInteractionFeedback"];
export {
  n as BehaviorContracts,
  s as Default,
  i as HostAttributeBoundary,
  d as RealInteractionFeedback,
  o as VisualStates,
  T as __namedExportsOrder,
  R as default
};
