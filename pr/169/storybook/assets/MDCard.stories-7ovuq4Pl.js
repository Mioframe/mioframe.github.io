import { M as k } from "./MDButton-isrJsGgl.js";
import { d as _, c as A, b as n, a as p, w as v, t as D, r as M, o as S, k as b } from "./iframe-BFysBzVV.js";
import "./MDLoadingIndicator-CE3mloNu.js";
import { M as t } from "./MDCard-Cx4uD71Z.js";
import { _ as B } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./useStateLayer-LV6gGmVL.js";
import "./index-BdtWu7Hc.js";
const V = { class: "md-card-action-story visual-row" }, I = { class: "md-card-action-story__cell" }, $ = { "data-testid": "md-card-button-action-count" }, O = { class: "md-card-action-story__cell" }, T = { "data-testid": "md-card-link-action-count" }, E = { class: "md-card-action-story__cell" }, L = { "data-testid": "md-card-disabled-link-action-count" }, F = _({ __name: "MDCardActionVisualStory", setup(a) {
  const h = M(0), y = M(0), g = M(0), w = () => {
    h.value += 1;
  }, x = () => {
    y.value += 1;
  }, f = () => {
    g.value += 1;
  };
  return (j, e) => (S(), A("div", V, [n("div", I, [p(t, { mode: "button", variant: "elevated", class: "md-card-action-story__card", "data-testid": "md-card-button-action", onAction: w }, { default: v(() => [...e[0] || (e[0] = [b(" Tap this whole card ", -1)])]), _: 1 }), n("output", $, D(h.value), 1)]), n("div", O, [p(t, { mode: "link", href: "#md-card-link-action-target", variant: "outlined", class: "md-card-action-story__card", "data-testid": "md-card-link-action", onAction: x }, { default: v(() => [...e[1] || (e[1] = [b(" Open Material 3 cards docs ", -1)])]), _: 1 }), n("output", T, D(y.value), 1)]), n("div", E, [p(t, { mode: "link", href: "/unreachable", variant: "outlined", disabled: "", class: "md-card-action-story__card", "data-testid": "md-card-disabled-link-action", onAction: f }, { default: v(() => [...e[2] || (e[2] = [b(" Disabled link card ", -1)])]), _: 1 }), n("output", L, D(g.value), 1)])]));
} }), N = B(F, [["__scopeId", "data-v-1bc71b30"]]), K = { title: "shared/ui/MDCard", component: t, argTypes: { onAction: { action: "action" } }, parameters: { layout: "centered", docs: { description: { component: 'Material 3 card. Checked against `components/cards/overview.md`,\n`components/cards/specs.md`, `components/cards/guidelines.md`, and\n`components/cards/accessibility.md` (m3-docs-mcp cache).\n\nA card is either a non-actionable container that holds its own buttons/links\n(`mode="static"`, the default), or a directly actionable card surface with no\ninternal buttons/links (`mode="button"` / `mode="link"`). Material explicitly\nwarns against stacking actionable surfaces, so MDCard does not support nested\nbuttons/links inside an actionable card as a documented pattern \u2014 that\ncombination is a deviation from the component contract, not a supported slot\nshape.\n\n`mode="button"` renders the whole card as a native `<button>`, whose HTML\ncontent model only accepts phrasing content (text, inline elements, icons).\nMDCard does not restrict this at the type level (the default slot is\ngeneric), but it does warn in development when the rendered content\nincludes a block-level or interactive tag \u2014 use `mode="static"` for rich\nblock content or cards with internal buttons/links instead. `mode="link"`\nhas no such restriction: `<a>` accepts flow content.' } } } }, d = { render: () => ({ components: { MDCard: t }, template: `
      <div class="visual-row">
        <MDCard variant="elevated" style="width: 220px;">Elevated card</MDCard>
        <MDCard variant="filled" style="width: 220px;">Filled card</MDCard>
        <MDCard variant="outlined" style="width: 220px;">Outlined card</MDCard>
      </div>
    ` }) }, r = { name: "Static card with internal actions", render: () => ({ components: { MDCard: t, MDButton: k }, template: `
      <MDCard variant="outlined" style="width: 280px;">
        <h3 class="md-typescale-title-medium" style="margin: 0;">Install Mioframe</h3>
        <p class="md-typescale-body-medium" style="margin: 0;">Add Mioframe to your home screen for quick access.</p>
        <div style="display: flex; gap: 8px; justify-content: flex-end;">
          <MDButton label="Later" color="text" />
          <MDButton label="Install" color="filled" />
        </div>
      </MDCard>
    ` }) }, s = { name: "Actionable button card", render: (a) => ({ components: { MDCard: t }, setup: () => ({ args: a }), template: `
      <MDCard v-bind="args" mode="button" variant="elevated" style="width: 220px;" @action="args.onAction">
        Tap this whole card
      </MDCard>
    ` }) }, i = { name: "Actionable link card", render: (a) => ({ components: { MDCard: t }, setup: () => ({ args: a }), template: `
      <MDCard v-bind="args" mode="link" href="https://m3.material.io/components/cards" variant="outlined" style="width: 220px;" @action="args.onAction">
        Open Material 3 cards docs
      </MDCard>
    ` }) }, o = { name: "Actionable card action/keyboard behavior", render: () => ({ components: { MDCardActionVisualStory: N }, template: "<MDCardActionVisualStory />" }) }, l = { name: "Disabled actionable cards", render: () => ({ components: { MDCard: t }, template: `
      <div class="visual-row">
        <MDCard mode="button" variant="elevated" disabled style="width: 200px;">Disabled button card</MDCard>
        <MDCard mode="link" href="/unreachable" variant="outlined" disabled style="width: 200px;">Disabled link card</MDCard>
      </div>
    ` }) }, c = { render: () => ({ components: { MDCard: t }, template: `
      <MDCard mode="button" variant="elevated" dragged style="width: 220px;">Dragged card</MDCard>
    ` }) }, C = (a) => `
  <div class="visual-row">
    <MDCard mode="button" variant="${a}" style="width: 180px;">Rest</MDCard>
    <MDCard mode="button" variant="${a}" class="md-state_hover" style="width: 180px;">Hover</MDCard>
    <MDCard mode="button" variant="${a}" class="md-state_focused" style="width: 180px;">Focused</MDCard>
    <MDCard mode="button" variant="${a}" class="md-state_pressed" style="width: 180px;">Pressed</MDCard>
    <MDCard mode="button" variant="${a}" class="md-state_dragged" style="width: 180px;">Dragged</MDCard>
  </div>
`, m = { tags: ["visual"], render: () => ({ components: { MDCard: t }, template: `
      <div data-testid="visual-md-card-interaction-states" class="visual-checker-backdrop">
        ${C("elevated")}
        ${C("filled")}
        ${C("outlined")}
      </div>
    ` }) }, u = { tags: ["visual"], render: () => ({ components: { MDCard: t }, template: `
      <div data-testid="visual-md-card-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDCard variant="elevated" style="width: 180px;">Elevated static</MDCard>
          <MDCard variant="filled" style="width: 180px;">Filled static</MDCard>
          <MDCard variant="outlined" style="width: 180px;">Outlined static</MDCard>
        </div>
        <div class="visual-row">
          <MDCard mode="button" variant="elevated" style="width: 180px;">Elevated button</MDCard>
          <MDCard mode="button" variant="filled" style="width: 180px;">Filled button</MDCard>
          <MDCard mode="button" variant="outlined" style="width: 180px;">Outlined button</MDCard>
        </div>
        <div class="visual-row">
          <MDCard mode="button" variant="elevated" disabled style="width: 180px;">Disabled elevated</MDCard>
          <MDCard mode="button" variant="filled" disabled style="width: 180px;">Disabled filled</MDCard>
          <MDCard mode="button" variant="outlined" disabled style="width: 180px;">Disabled outlined</MDCard>
        </div>
        <div class="visual-row">
          <MDCard mode="button" variant="elevated" dragged style="width: 180px;">Dragged elevated</MDCard>
          <MDCard mode="button" variant="filled" dragged style="width: 180px;">Dragged filled</MDCard>
          <MDCard mode="button" variant="outlined" dragged style="width: 180px;">Dragged outlined</MDCard>
        </div>
      </div>
    ` }) };
d.parameters = { ...d.parameters, docs: { ...d.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDCard
    },
    template: \`
      <div class="visual-row">
        <MDCard variant="elevated" style="width: 220px;">Elevated card</MDCard>
        <MDCard variant="filled" style="width: 220px;">Filled card</MDCard>
        <MDCard variant="outlined" style="width: 220px;">Outlined card</MDCard>
      </div>
    \`
  })
}`, ...d.parameters?.docs?.source } } };
r.parameters = { ...r.parameters, docs: { ...r.parameters?.docs, source: { originalSource: `{
  name: 'Static card with internal actions',
  render: () => ({
    components: {
      MDCard,
      MDButton
    },
    template: \`
      <MDCard variant="outlined" style="width: 280px;">
        <h3 class="md-typescale-title-medium" style="margin: 0;">Install Mioframe</h3>
        <p class="md-typescale-body-medium" style="margin: 0;">Add Mioframe to your home screen for quick access.</p>
        <div style="display: flex; gap: 8px; justify-content: flex-end;">
          <MDButton label="Later" color="text" />
          <MDButton label="Install" color="filled" />
        </div>
      </MDCard>
    \`
  })
}`, ...r.parameters?.docs?.source } } };
s.parameters = { ...s.parameters, docs: { ...s.parameters?.docs, source: { originalSource: `{
  name: 'Actionable button card',
  render: args => ({
    components: {
      MDCard
    },
    setup: () => ({
      args
    }),
    template: \`
      <MDCard v-bind="args" mode="button" variant="elevated" style="width: 220px;" @action="args.onAction">
        Tap this whole card
      </MDCard>
    \`
  })
}`, ...s.parameters?.docs?.source } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
  name: 'Actionable link card',
  render: args => ({
    components: {
      MDCard
    },
    setup: () => ({
      args
    }),
    template: \`
      <MDCard v-bind="args" mode="link" href="https://m3.material.io/components/cards" variant="outlined" style="width: 220px;" @action="args.onAction">
        Open Material 3 cards docs
      </MDCard>
    \`
  })
}`, ...i.parameters?.docs?.source } } };
o.parameters = { ...o.parameters, docs: { ...o.parameters?.docs, source: { originalSource: `{
  name: 'Actionable card action/keyboard behavior',
  render: () => ({
    components: {
      MDCardActionVisualStory
    },
    template: '<MDCardActionVisualStory />'
  })
}`, ...o.parameters?.docs?.source } } };
l.parameters = { ...l.parameters, docs: { ...l.parameters?.docs, source: { originalSource: `{
  name: 'Disabled actionable cards',
  render: () => ({
    components: {
      MDCard
    },
    template: \`
      <div class="visual-row">
        <MDCard mode="button" variant="elevated" disabled style="width: 200px;">Disabled button card</MDCard>
        <MDCard mode="link" href="/unreachable" variant="outlined" disabled style="width: 200px;">Disabled link card</MDCard>
      </div>
    \`
  })
}`, ...l.parameters?.docs?.source } } };
c.parameters = { ...c.parameters, docs: { ...c.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDCard
    },
    template: \`
      <MDCard mode="button" variant="elevated" dragged style="width: 220px;">Dragged card</MDCard>
    \`
  })
}`, ...c.parameters?.docs?.source } } };
m.parameters = { ...m.parameters, docs: { ...m.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDCard
    },
    template: \`
      <div data-testid="visual-md-card-interaction-states" class="visual-checker-backdrop">
        \${variantInteractionStatesTemplate('elevated')}
        \${variantInteractionStatesTemplate('filled')}
        \${variantInteractionStatesTemplate('outlined')}
      </div>
    \`
  })
}`, ...m.parameters?.docs?.source } } };
u.parameters = { ...u.parameters, docs: { ...u.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDCard
    },
    template: \`
      <div data-testid="visual-md-card-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDCard variant="elevated" style="width: 180px;">Elevated static</MDCard>
          <MDCard variant="filled" style="width: 180px;">Filled static</MDCard>
          <MDCard variant="outlined" style="width: 180px;">Outlined static</MDCard>
        </div>
        <div class="visual-row">
          <MDCard mode="button" variant="elevated" style="width: 180px;">Elevated button</MDCard>
          <MDCard mode="button" variant="filled" style="width: 180px;">Filled button</MDCard>
          <MDCard mode="button" variant="outlined" style="width: 180px;">Outlined button</MDCard>
        </div>
        <div class="visual-row">
          <MDCard mode="button" variant="elevated" disabled style="width: 180px;">Disabled elevated</MDCard>
          <MDCard mode="button" variant="filled" disabled style="width: 180px;">Disabled filled</MDCard>
          <MDCard mode="button" variant="outlined" disabled style="width: 180px;">Disabled outlined</MDCard>
        </div>
        <div class="visual-row">
          <MDCard mode="button" variant="elevated" dragged style="width: 180px;">Dragged elevated</MDCard>
          <MDCard mode="button" variant="filled" dragged style="width: 180px;">Dragged filled</MDCard>
          <MDCard mode="button" variant="outlined" dragged style="width: 180px;">Dragged outlined</MDCard>
        </div>
      </div>
    \`
  })
}`, ...u.parameters?.docs?.source } } };
const Q = ["Variants", "StaticWithInternalActions", "ActionableButtonCard", "ActionableLinkCard", "ActionBehavior", "DisabledActionableCards", "Dragged", "VisualInteractionStates", "VisualStates"];
export {
  o as ActionBehavior,
  s as ActionableButtonCard,
  i as ActionableLinkCard,
  l as DisabledActionableCards,
  c as Dragged,
  r as StaticWithInternalActions,
  d as Variants,
  m as VisualInteractionStates,
  u as VisualStates,
  Q as __namedExportsOrder,
  K as default
};
