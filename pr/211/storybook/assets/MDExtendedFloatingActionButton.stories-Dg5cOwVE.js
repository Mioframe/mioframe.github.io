import { d as g, r as u } from "./iframe-Bg4SrTbj.js";
import { M as t } from "./MDExtendedFloatingActionButton-D7b1SqVJ.js";
import "./preload-helper-PPVm8Dsz.js";
import "./fab-BM7C4Glz.js";
import "./core-CHv0XPlm.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
const e = g({ template: `
    <svg aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  ` }), D = { title: "Material 3/Components/Extended Floating Action Button/MDExtendedFloatingActionButton", component: t, tags: ["autodocs"], args: { color: "primary-container", size: "small" }, parameters: { layout: "centered" } }, o = { render: (n) => ({ components: { AddIcon: e, MDExtendedFloatingActionButton: t }, setup() {
  return { args: n };
}, template: `
      <MDExtendedFloatingActionButton :color="args.color" :size="args.size">
        <template #icon><AddIcon /></template>
        Create note
      </MDExtendedFloatingActionButton>
    ` }) }, d = { render: () => ({ components: { AddIcon: e, MDExtendedFloatingActionButton: t }, setup() {
  const n = u(0);
  return { clickCount: n, onClick: () => {
    n.value += 1;
  } };
}, template: `
      <div data-testid="md-extended-fab-behavior-contracts">
        <button type="button" data-testid="behavior-extended-fab-focus-origin">Focus origin</button>
        <MDExtendedFloatingActionButton @click="onClick">
          <template #icon><AddIcon data-testid="behavior-extended-fab-icon" /></template>
          Create a new note
        </MDExtendedFloatingActionButton>
        <MDExtendedFloatingActionButton data-testid="behavior-extended-fab-no-icon" @click="onClick">
          Create note without icon
        </MDExtendedFloatingActionButton>
        <output id="md-extended-fab-click-count">{{ clickCount }}</output>
      </div>
    ` }) }, a = { render: () => ({ components: { AddIcon: e, MDExtendedFloatingActionButton: t }, setup() {
  const n = u({ "aria-label": "Unrelated action", "bogus-consumer-flag": "leak-attempt", disabled: true, extended: false, lowered: true, variant: "primary" });
  return { attemptedOverrides: n, toggleAttemptedOverrides: () => {
    n.value = { ...n.value, disabled: !n.value.disabled, variant: n.value.variant === "primary" ? "secondary" : "primary" };
  } };
}, template: `
      <div data-testid="md-extended-fab-host-attribute-boundary">
        <MDExtendedFloatingActionButton
          data-testid="host-boundary-extended-fab"
          v-bind="attemptedOverrides"
        >
          <template #icon><AddIcon /></template>
          Create note
        </MDExtendedFloatingActionButton>
        <button data-testid="host-boundary-toggle" type="button" @click="toggleAttemptedOverrides">
          Toggle attempted overrides
        </button>
      </div>
    ` }) }, i = { render: () => ({ components: { AddIcon: e, MDExtendedFloatingActionButton: t }, template: `
      <div data-testid="md-extended-fab-geometry-contracts" class="md-extended-fab-geometry-contracts">
        <MDExtendedFloatingActionButton data-testid="geometry-extended-fab-small" size="small">
          <template #icon><AddIcon data-testid="geometry-extended-fab-small-icon" /></template>
          Create note
        </MDExtendedFloatingActionButton>
        <MDExtendedFloatingActionButton data-testid="geometry-extended-fab-medium" size="medium">
          <template #icon><AddIcon data-testid="geometry-extended-fab-medium-icon" /></template>
          Create note
        </MDExtendedFloatingActionButton>
        <MDExtendedFloatingActionButton data-testid="geometry-extended-fab-large" size="large">
          <template #icon><AddIcon data-testid="geometry-extended-fab-large-icon" /></template>
          Create note
        </MDExtendedFloatingActionButton>
      </div>
    ` }) }, r = { render: () => ({ components: { AddIcon: e, MDExtendedFloatingActionButton: t }, template: `
      <div data-testid="geometry-token-override-extended-fab-contracts">
        <MDExtendedFloatingActionButton
          data-testid="geometry-token-override-extended-fab-small"
          size="small"
          style="
            --md-comp-extended-fab-small-container-height: 72px;
            --md-comp-extended-fab-small-icon-size: 32px;
          "
        >
          <template #icon>
            <AddIcon data-testid="geometry-token-override-extended-fab-small-icon" />
          </template>
          Create note
        </MDExtendedFloatingActionButton>
        <MDExtendedFloatingActionButton
          data-testid="geometry-token-override-extended-fab-medium"
          size="medium"
          style="
            --md-comp-extended-fab-medium-container-height: 96px;
            --md-comp-extended-fab-medium-icon-size: 36px;
          "
        >
          <template #icon>
            <AddIcon data-testid="geometry-token-override-extended-fab-medium-icon" />
          </template>
          Create note
        </MDExtendedFloatingActionButton>
        <MDExtendedFloatingActionButton
          data-testid="geometry-token-override-extended-fab-large"
          size="large"
          style="
            --md-comp-extended-fab-large-container-height: 112px;
            --md-comp-extended-fab-large-icon-size: 44px;
          "
        >
          <template #icon>
            <AddIcon data-testid="geometry-token-override-extended-fab-large-icon" />
          </template>
          Create note
        </MDExtendedFloatingActionButton>
      </div>
    ` }) }, c = { render: () => ({ components: { AddIcon: e, MDExtendedFloatingActionButton: t }, template: `
      <div dir="rtl" data-testid="rtl-extended-fab-contracts">
        <MDExtendedFloatingActionButton data-testid="rtl-extended-fab" size="small">
          <template #icon><AddIcon data-testid="rtl-extended-fab-icon" /></template>
          Create note
        </MDExtendedFloatingActionButton>
      </div>
    ` }) }, l = { render: () => ({ components: { AddIcon: e, MDExtendedFloatingActionButton: t }, template: `
      <div
        data-testid="motion-extended-fab-contracts"
        style="--md-private-motion-expressive-fast-spatial-duration: 2s"
      >
        <MDExtendedFloatingActionButton data-testid="motion-extended-fab">
          <template #icon><AddIcon /></template>
          Create note
        </MDExtendedFloatingActionButton>
      </div>
    ` }) }, m = { tags: ["visual"], render: () => ({ components: { AddIcon: e, MDExtendedFloatingActionButton: t }, template: `
      <div data-testid="visual-md-extended-fab-real-interaction">
        <MDExtendedFloatingActionButton>
          <template #icon><AddIcon /></template>
          Press me
        </MDExtendedFloatingActionButton>
      </div>
    ` }) }, s = { tags: ["visual"], render: () => ({ components: { AddIcon: e, MDExtendedFloatingActionButton: t }, template: `
      <div data-testid="visual-md-extended-fab-plain-color-real-interaction" style="padding: 16px">
        <MDExtendedFloatingActionButton color="primary">
          <template #icon><AddIcon /></template>
          Press me
        </MDExtendedFloatingActionButton>
      </div>
    ` }) }, p = { tags: ["visual"], render: () => ({ components: { AddIcon: e, MDExtendedFloatingActionButton: t }, template: `
      <div data-testid="visual-md-extended-fab-states" class="visual-checker-backdrop">
        <div class="visual-column">
          <MDExtendedFloatingActionButton size="small">
            <template #icon><AddIcon /></template>
            Create note
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton size="medium">
            <template #icon><AddIcon /></template>
            Create note
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton size="large">
            <template #icon><AddIcon /></template>
            Create note
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton>Create note</MDExtendedFloatingActionButton>
        </div>
      </div>
    ` }) }, f = { tags: ["visual"], render: () => ({ components: { AddIcon: e, MDExtendedFloatingActionButton: t }, template: `
      <div data-testid="visual-md-extended-fab-token-override" class="visual-checker-backdrop">
        <div class="visual-column">
          <MDExtendedFloatingActionButton
            color="primary-container"
            style="
              --md-comp-extended-fab-primary-container-container-color: #006e1c;
              --md-comp-extended-fab-primary-container-icon-color: #ffffff;
              --md-comp-extended-fab-primary-container-label-text-color: #ffffff;
            "
          >
            <template #icon><AddIcon /></template>
            Primary container
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton
            color="secondary-container"
            style="
              --md-comp-extended-fab-secondary-container-container-color: #6d4c41;
              --md-comp-extended-fab-secondary-container-icon-color: #ffffff;
              --md-comp-extended-fab-secondary-container-label-text-color: #ffffff;
            "
          >
            <template #icon><AddIcon /></template>
            Secondary container
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton
            color="tertiary-container"
            style="
              --md-comp-extended-fab-tertiary-container-container-color: #7b1fa2;
              --md-comp-extended-fab-tertiary-container-icon-color: #ffffff;
              --md-comp-extended-fab-tertiary-container-label-text-color: #ffffff;
            "
          >
            <template #icon><AddIcon /></template>
            Tertiary container
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton
            color="primary"
            style="
              --md-comp-extended-fab-primary-container-color: #0061a4;
              --md-comp-extended-fab-primary-icon-color: #ffffff;
              --md-comp-extended-fab-primary-label-text-color: #ffffff;
            "
          >
            <template #icon><AddIcon /></template>
            Primary
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton
            color="secondary"
            style="
              --md-comp-extended-fab-secondary-container-color: #426b1f;
              --md-comp-extended-fab-secondary-icon-color: #ffffff;
              --md-comp-extended-fab-secondary-label-text-color: #ffffff;
            "
          >
            <template #icon><AddIcon /></template>
            Secondary
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton
            color="tertiary"
            style="
              --md-comp-extended-fab-tertiary-container-color: #a33c5f;
              --md-comp-extended-fab-tertiary-icon-color: #ffffff;
              --md-comp-extended-fab-tertiary-label-text-color: #ffffff;
            "
          >
            <template #icon><AddIcon /></template>
            Tertiary
          </MDExtendedFloatingActionButton>
        </div>
      </div>
    ` }) };
o.parameters = { ...o.parameters, docs: { ...o.parameters?.docs, source: { originalSource: `{
  render: args => ({
    components: {
      AddIcon,
      MDExtendedFloatingActionButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <MDExtendedFloatingActionButton :color="args.color" :size="args.size">
        <template #icon><AddIcon /></template>
        Create note
      </MDExtendedFloatingActionButton>
    \`
  })
}`, ...o.parameters?.docs?.source } } };
d.parameters = { ...d.parameters, docs: { ...d.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      AddIcon,
      MDExtendedFloatingActionButton
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
      <div data-testid="md-extended-fab-behavior-contracts">
        <button type="button" data-testid="behavior-extended-fab-focus-origin">Focus origin</button>
        <MDExtendedFloatingActionButton @click="onClick">
          <template #icon><AddIcon data-testid="behavior-extended-fab-icon" /></template>
          Create a new note
        </MDExtendedFloatingActionButton>
        <MDExtendedFloatingActionButton data-testid="behavior-extended-fab-no-icon" @click="onClick">
          Create note without icon
        </MDExtendedFloatingActionButton>
        <output id="md-extended-fab-click-count">{{ clickCount }}</output>
      </div>
    \`
  })
}`, ...d.parameters?.docs?.source } } };
a.parameters = { ...a.parameters, docs: { ...a.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      AddIcon,
      MDExtendedFloatingActionButton
    },
    setup() {
      const attemptedOverrides = ref<Record<string, unknown>>({
        'aria-label': 'Unrelated action',
        'bogus-consumer-flag': 'leak-attempt',
        disabled: true,
        extended: false,
        lowered: true,
        variant: 'primary'
      });
      const toggleAttemptedOverrides = () => {
        attemptedOverrides.value = {
          ...attemptedOverrides.value,
          disabled: !attemptedOverrides.value.disabled,
          variant: attemptedOverrides.value.variant === 'primary' ? 'secondary' : 'primary'
        };
      };
      return {
        attemptedOverrides,
        toggleAttemptedOverrides
      };
    },
    template: \`
      <div data-testid="md-extended-fab-host-attribute-boundary">
        <MDExtendedFloatingActionButton
          data-testid="host-boundary-extended-fab"
          v-bind="attemptedOverrides"
        >
          <template #icon><AddIcon /></template>
          Create note
        </MDExtendedFloatingActionButton>
        <button data-testid="host-boundary-toggle" type="button" @click="toggleAttemptedOverrides">
          Toggle attempted overrides
        </button>
      </div>
    \`
  })
}`, ...a.parameters?.docs?.source } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      AddIcon,
      MDExtendedFloatingActionButton
    },
    template: \`
      <div data-testid="md-extended-fab-geometry-contracts" class="md-extended-fab-geometry-contracts">
        <MDExtendedFloatingActionButton data-testid="geometry-extended-fab-small" size="small">
          <template #icon><AddIcon data-testid="geometry-extended-fab-small-icon" /></template>
          Create note
        </MDExtendedFloatingActionButton>
        <MDExtendedFloatingActionButton data-testid="geometry-extended-fab-medium" size="medium">
          <template #icon><AddIcon data-testid="geometry-extended-fab-medium-icon" /></template>
          Create note
        </MDExtendedFloatingActionButton>
        <MDExtendedFloatingActionButton data-testid="geometry-extended-fab-large" size="large">
          <template #icon><AddIcon data-testid="geometry-extended-fab-large-icon" /></template>
          Create note
        </MDExtendedFloatingActionButton>
      </div>
    \`
  })
}`, ...i.parameters?.docs?.source } } };
r.parameters = { ...r.parameters, docs: { ...r.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      AddIcon,
      MDExtendedFloatingActionButton
    },
    template: \`
      <div data-testid="geometry-token-override-extended-fab-contracts">
        <MDExtendedFloatingActionButton
          data-testid="geometry-token-override-extended-fab-small"
          size="small"
          style="
            --md-comp-extended-fab-small-container-height: 72px;
            --md-comp-extended-fab-small-icon-size: 32px;
          "
        >
          <template #icon>
            <AddIcon data-testid="geometry-token-override-extended-fab-small-icon" />
          </template>
          Create note
        </MDExtendedFloatingActionButton>
        <MDExtendedFloatingActionButton
          data-testid="geometry-token-override-extended-fab-medium"
          size="medium"
          style="
            --md-comp-extended-fab-medium-container-height: 96px;
            --md-comp-extended-fab-medium-icon-size: 36px;
          "
        >
          <template #icon>
            <AddIcon data-testid="geometry-token-override-extended-fab-medium-icon" />
          </template>
          Create note
        </MDExtendedFloatingActionButton>
        <MDExtendedFloatingActionButton
          data-testid="geometry-token-override-extended-fab-large"
          size="large"
          style="
            --md-comp-extended-fab-large-container-height: 112px;
            --md-comp-extended-fab-large-icon-size: 44px;
          "
        >
          <template #icon>
            <AddIcon data-testid="geometry-token-override-extended-fab-large-icon" />
          </template>
          Create note
        </MDExtendedFloatingActionButton>
      </div>
    \`
  })
}`, ...r.parameters?.docs?.source } } };
c.parameters = { ...c.parameters, docs: { ...c.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      AddIcon,
      MDExtendedFloatingActionButton
    },
    template: \`
      <div dir="rtl" data-testid="rtl-extended-fab-contracts">
        <MDExtendedFloatingActionButton data-testid="rtl-extended-fab" size="small">
          <template #icon><AddIcon data-testid="rtl-extended-fab-icon" /></template>
          Create note
        </MDExtendedFloatingActionButton>
      </div>
    \`
  })
}`, ...c.parameters?.docs?.source } } };
l.parameters = { ...l.parameters, docs: { ...l.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      AddIcon,
      MDExtendedFloatingActionButton
    },
    template: \`
      <div
        data-testid="motion-extended-fab-contracts"
        style="--md-private-motion-expressive-fast-spatial-duration: 2s"
      >
        <MDExtendedFloatingActionButton data-testid="motion-extended-fab">
          <template #icon><AddIcon /></template>
          Create note
        </MDExtendedFloatingActionButton>
      </div>
    \`
  })
}`, ...l.parameters?.docs?.source } } };
m.parameters = { ...m.parameters, docs: { ...m.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      AddIcon,
      MDExtendedFloatingActionButton
    },
    template: \`
      <div data-testid="visual-md-extended-fab-real-interaction">
        <MDExtendedFloatingActionButton>
          <template #icon><AddIcon /></template>
          Press me
        </MDExtendedFloatingActionButton>
      </div>
    \`
  })
}`, ...m.parameters?.docs?.source } } };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      AddIcon,
      MDExtendedFloatingActionButton
    },
    template: \`
      <div data-testid="visual-md-extended-fab-plain-color-real-interaction" style="padding: 16px">
        <MDExtendedFloatingActionButton color="primary">
          <template #icon><AddIcon /></template>
          Press me
        </MDExtendedFloatingActionButton>
      </div>
    \`
  })
}`, ...s.parameters?.docs?.source } } };
p.parameters = { ...p.parameters, docs: { ...p.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      AddIcon,
      MDExtendedFloatingActionButton
    },
    template: \`
      <div data-testid="visual-md-extended-fab-states" class="visual-checker-backdrop">
        <div class="visual-column">
          <MDExtendedFloatingActionButton size="small">
            <template #icon><AddIcon /></template>
            Create note
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton size="medium">
            <template #icon><AddIcon /></template>
            Create note
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton size="large">
            <template #icon><AddIcon /></template>
            Create note
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton>Create note</MDExtendedFloatingActionButton>
        </div>
      </div>
    \`
  })
}`, ...p.parameters?.docs?.source } } };
f.parameters = { ...f.parameters, docs: { ...f.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      AddIcon,
      MDExtendedFloatingActionButton
    },
    template: \`
      <div data-testid="visual-md-extended-fab-token-override" class="visual-checker-backdrop">
        <div class="visual-column">
          <MDExtendedFloatingActionButton
            color="primary-container"
            style="
              --md-comp-extended-fab-primary-container-container-color: #006e1c;
              --md-comp-extended-fab-primary-container-icon-color: #ffffff;
              --md-comp-extended-fab-primary-container-label-text-color: #ffffff;
            "
          >
            <template #icon><AddIcon /></template>
            Primary container
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton
            color="secondary-container"
            style="
              --md-comp-extended-fab-secondary-container-container-color: #6d4c41;
              --md-comp-extended-fab-secondary-container-icon-color: #ffffff;
              --md-comp-extended-fab-secondary-container-label-text-color: #ffffff;
            "
          >
            <template #icon><AddIcon /></template>
            Secondary container
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton
            color="tertiary-container"
            style="
              --md-comp-extended-fab-tertiary-container-container-color: #7b1fa2;
              --md-comp-extended-fab-tertiary-container-icon-color: #ffffff;
              --md-comp-extended-fab-tertiary-container-label-text-color: #ffffff;
            "
          >
            <template #icon><AddIcon /></template>
            Tertiary container
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton
            color="primary"
            style="
              --md-comp-extended-fab-primary-container-color: #0061a4;
              --md-comp-extended-fab-primary-icon-color: #ffffff;
              --md-comp-extended-fab-primary-label-text-color: #ffffff;
            "
          >
            <template #icon><AddIcon /></template>
            Primary
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton
            color="secondary"
            style="
              --md-comp-extended-fab-secondary-container-color: #426b1f;
              --md-comp-extended-fab-secondary-icon-color: #ffffff;
              --md-comp-extended-fab-secondary-label-text-color: #ffffff;
            "
          >
            <template #icon><AddIcon /></template>
            Secondary
          </MDExtendedFloatingActionButton>
          <MDExtendedFloatingActionButton
            color="tertiary"
            style="
              --md-comp-extended-fab-tertiary-container-color: #a33c5f;
              --md-comp-extended-fab-tertiary-icon-color: #ffffff;
              --md-comp-extended-fab-tertiary-label-text-color: #ffffff;
            "
          >
            <template #icon><AddIcon /></template>
            Tertiary
          </MDExtendedFloatingActionButton>
        </div>
      </div>
    \`
  })
}`, ...f.parameters?.docs?.source } } };
const E = ["Default", "BehaviorContracts", "HostAttributeBoundary", "GeometryContracts", "GeometryTokenOverrideContracts", "RtlContracts", "MotionContracts", "RealInteractionFeedback", "RealInteractionFeedbackPlainColor", "VisualStates", "TokenOverride"];
export {
  d as BehaviorContracts,
  o as Default,
  i as GeometryContracts,
  r as GeometryTokenOverrideContracts,
  a as HostAttributeBoundary,
  l as MotionContracts,
  m as RealInteractionFeedback,
  s as RealInteractionFeedbackPlainColor,
  c as RtlContracts,
  f as TokenOverride,
  p as VisualStates,
  E as __namedExportsOrder,
  D as default
};
