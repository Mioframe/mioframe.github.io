import { d as oe, D as ce, B as re, l as ne, u as o, f as v, g as h, A as y, E as M, n as z, h as ie, P as le, Q as de, b as l, o as S, j as ue, s as O, r as f } from "./iframe-DDscWa3i.js";
import { u as pe, a as me, M as ve } from "./useStateLayer-DpjlUBDL.js";
import { s as he } from "./uniqueId-DOTzE4Ot.js";
import { _ as Se } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { M as $ } from "./MDSymbol-CKV7fl2t.js";
import { _ as Q } from "./MDStateLayerForcedStateProvider.vue_vue_type_script_setup_true_lang-Tk5RXY6o.js";
import { u as we } from "./useFocusIndicator-C4sWdQrq.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-Bk4hKnoc.js";
const be = { class: "md-switch__track" }, fe = { class: "md-switch__handle" }, De = { key: 0, class: "md-switch__icon", "aria-hidden": "true" }, ye = { key: 1, class: "md-switch__icon", "aria-hidden": "true" }, Me = ["for", "tabindex", "aria-label", "aria-labelledby", "aria-checked", "aria-disabled"], ge = ["id", "disabled"], ke = { class: "md-switch__track" }, _e = { class: "md-switch__handle", "data-md-focus-indicator-target": "" }, Ie = { key: 0, class: "md-switch__icon", "aria-hidden": "true" }, Pe = { key: 1, class: "md-switch__icon", "aria-hidden": "true" }, Le = oe({ __name: "MDSwitch", props: { selected: { type: Boolean, default: false }, disabled: { type: Boolean }, id: { default: () => he("switch") }, ariaLabel: {}, ariaLabelledby: {}, autofocus: { type: Boolean }, tabIndex: { default: 0 }, presentation: { type: Boolean } }, emits: ["update:selected", "change"], setup(t, { emit: i }) {
  const w = t, D = i, d = ce(), { disabled: a, selected: G, presentation: u } = re(w), s = l({ get: () => !!G.value, set: (e) => {
    D("update:selected", e), D("change", e);
  } }), U = l(() => !!d["selected-icon"]), E = l(() => !!d["unselected-icon"]), A = l(() => s.value ? U.value : E.value), R = () => {
    u.value || a.value || (s.value = !s.value);
  }, p = O(false), N = O(0), b = O(false), J = (e) => {
    u.value || a.value || e.button !== 0 || (p.value = true, N.value = e.clientX, b.value = false, n.value?.setPointerCapture?.(e.pointerId));
  }, Y = (e) => {
    p.value && e.preventDefault();
  }, Z = (e) => {
    if (!p.value) return;
    p.value = false, n.value?.releasePointerCapture?.(e.pointerId);
    const c = e.clientX - N.value;
    if (Math.abs(c) > 4) {
      b.value = true;
      const m = n.value;
      if (m) {
        const j = m.getBoundingClientRect(), q = e.clientX > j.left + j.width / 2;
        q !== s.value && (s.value = q);
      }
    }
  }, ee = (e) => {
    p.value && (p.value = false, b.value = false, n.value?.releasePointerCapture?.(e.pointerId));
  }, te = (e) => {
    if (!(u.value || a.value)) {
      if (e.preventDefault(), b.value) {
        b.value = false;
        return;
      }
      R();
    }
  }, ae = (e) => {
    if (u.value || a.value) return;
    const { key: c } = e;
    ["Enter", " "].includes(c) && (e.preventDefault(), R());
  }, n = ue("switchEl"), { hover: W, focused: X, durationPressedState: K } = pe(n), se = l(() => a.value ? -1 : w.tabIndex), H = l(() => !a.value);
  return me(l(() => !u.value && !a.value ? n.value : void 0)), ne([n, () => w.autofocus, a], ([e, c, m]) => {
    c && e && !m && e.focus();
  }, { immediate: true }), (e, c) => o(u) ? (S(), v("div", { key: 0, class: z(["md-switch md-switch_presentation", { "md-switch_selected": s.value, "md-switch_disabled": o(a), "md-switch_with-current-icon": A.value }]), "aria-hidden": "true" }, [h("div", be, [h("div", fe, [s.value && U.value ? (S(), v("span", De, [y(e.$slots, "selected-icon", {}, void 0, true)])) : M("", true), !s.value && E.value ? (S(), v("span", ye, [y(e.$slots, "unselected-icon", {}, void 0, true)])) : M("", true)])])], 2)) : (S(), v("label", { key: 1, ref_key: "switchEl", ref: n, for: t.id, class: z(["md-switch", { "md-switch_selected": s.value, "md-switch_disabled": o(a), "md-switch_with-current-icon": A.value, "md-state_hover": H.value && o(W), "md-state_focused": H.value && o(X), "md-state_pressed": H.value && o(K), "md-state_disabled": o(a) }]), role: "switch", tabindex: se.value, "aria-label": t.ariaLabelledby ? void 0 : t.ariaLabel, "aria-labelledby": t.ariaLabelledby, "aria-checked": s.value, "aria-disabled": o(a) ? "true" : void 0, onClick: te, onKeydown: ae, onPointerdown: J, onPointermove: Y, onPointerup: Z, onPointercancel: ee }, [c[1] || (c[1] = h("span", { class: "md-switch__target", "aria-hidden": "true" }, null, -1)), ie(o(ve), { class: "md-switch__state-layer", hover: o(W), focused: o(X), pressed: o(K), disabled: o(a) }, null, 8, ["hover", "focused", "pressed", "disabled"]), le(h("input", { id: t.id, "onUpdate:modelValue": c[0] || (c[0] = (m) => s.value = m), type: "checkbox", disabled: o(a), "aria-hidden": "true", class: "md-switch__input", tabindex: "-1" }, null, 8, ge), [[de, s.value]]), h("div", ke, [h("div", _e, [s.value && U.value ? (S(), v("span", Ie, [y(e.$slots, "selected-icon", {}, void 0, true)])) : M("", true), !s.value && E.value ? (S(), v("span", Pe, [y(e.$slots, "unselected-icon", {}, void 0, true)])) : M("", true)])])], 42, Me));
} }), r = Se(Le, [["__scopeId", "data-v-9522bcc5"]]), qe = { title: "shared/ui/MDSwitch", component: r, args: { ariaLabel: "Error diagnostics", id: "storybook-md-switch-default", selected: false }, argTypes: { "onUpdate:selected": { action: "update:selected" }, onChange: { action: "change" } }, parameters: { layout: "centered" } }, Fe = `
  <div data-testid="visual-md-switch-states" class="visual-checker-backdrop">
    <div class="visual-row">
      <MDSwitch id="storybook-md-switch-off" aria-label="Off" :selected="false" />
      <span>Off</span>
    </div>
    <div class="visual-row">
      <MDSwitch id="storybook-md-switch-on" aria-label="On" :selected="true" />
      <span>On</span>
    </div>
    <div class="visual-row">
      <MDSwitch id="storybook-md-switch-disabled-off" aria-label="Disabled off" :selected="false" disabled />
      <span>Disabled off</span>
    </div>
    <div class="visual-row">
      <MDSwitch id="storybook-md-switch-disabled-on" aria-label="Disabled on" :selected="true" disabled />
      <span>Disabled on</span>
    </div>
  </div>
`, Ce = `
  <div data-testid="visual-md-switch-interaction-states" class="visual-checker-backdrop">
    <div class="visual-row">
      <MDStateLayerForcedStateProvider hovered>
        <MDSwitch id="storybook-md-switch-hover-off" aria-label="Hover off" :selected="false" />
      </MDStateLayerForcedStateProvider>
      <span>Hover off</span>
    </div>
    <div class="visual-row">
      <MDStateLayerForcedStateProvider focused>
        <MDSwitch id="storybook-md-switch-focus-off" aria-label="Focus off" :selected="false" />
      </MDStateLayerForcedStateProvider>
      <span>Focus off</span>
    </div>
    <div class="visual-row">
      <MDStateLayerForcedStateProvider pressed>
        <MDSwitch id="storybook-md-switch-pressed-off" aria-label="Pressed off" :selected="false" />
      </MDStateLayerForcedStateProvider>
      <span>Pressed off</span>
    </div>
    <div class="visual-row">
      <MDStateLayerForcedStateProvider hovered>
        <MDSwitch id="storybook-md-switch-hover-on" aria-label="Hover on" :selected="true" />
      </MDStateLayerForcedStateProvider>
      <span>Hover on</span>
    </div>
    <div class="visual-row">
      <MDStateLayerForcedStateProvider focused>
        <MDSwitch id="storybook-md-switch-focus-on" aria-label="Focus on" :selected="true" />
      </MDStateLayerForcedStateProvider>
      <span>Focus on</span>
    </div>
    <div class="visual-row">
      <MDStateLayerForcedStateProvider pressed>
        <MDSwitch id="storybook-md-switch-pressed-on" aria-label="Pressed on" :selected="true" />
      </MDStateLayerForcedStateProvider>
      <span>Pressed on</span>
    </div>
  </div>
`, xe = `
  <div data-testid="visual-md-switch-icon-states" class="visual-checker-backdrop">
    <div class="visual-row">
      <MDSwitch id="storybook-md-switch-icon-off" aria-label="Off with icon" :selected="false">
        <template #unselected-icon><MDSymbol name="close" /></template>
      </MDSwitch>
      <span>Unselected icon</span>
    </div>
    <div class="visual-row">
      <MDSwitch id="storybook-md-switch-icon-on" aria-label="On with icon" :selected="true">
        <template #selected-icon><MDSymbol name="check" /></template>
      </MDSwitch>
      <span>Selected icon</span>
    </div>
    <div class="visual-row">
      <MDSwitch id="storybook-md-switch-both-off" aria-label="Both icons off" :selected="false">
        <template #selected-icon><MDSymbol name="check" /></template>
        <template #unselected-icon><MDSymbol name="close" /></template>
      </MDSwitch>
      <span>Both icons (off)</span>
    </div>
    <div class="visual-row">
      <MDSwitch id="storybook-md-switch-both-on" aria-label="Both icons on" :selected="true">
        <template #selected-icon><MDSymbol name="check" /></template>
        <template #unselected-icon><MDSymbol name="close" /></template>
      </MDSwitch>
      <span>Both icons (on)</span>
    </div>
    <div class="visual-row">
      <MDSwitch id="storybook-md-switch-icon-disabled-off" aria-label="Disabled with icon off" :selected="false" disabled>
        <template #selected-icon><MDSymbol name="check" /></template>
        <template #unselected-icon><MDSymbol name="close" /></template>
      </MDSwitch>
      <span>Disabled with icons (off)</span>
    </div>
    <div class="visual-row">
      <MDSwitch id="storybook-md-switch-icon-disabled-on" aria-label="Disabled with icon on" :selected="true" disabled>
        <template #selected-icon><MDSymbol name="check" /></template>
        <template #unselected-icon><MDSymbol name="close" /></template>
      </MDSwitch>
      <span>Disabled with icons (on)</span>
    </div>
  </div>
`, Te = `
  <div data-testid="visual-md-switch-icon-interaction-states" class="visual-checker-backdrop">
    <div class="visual-row">
      <MDStateLayerForcedStateProvider hovered>
        <MDSwitch id="storybook-md-switch-icon-hover-off" aria-label="Icon hover off" :selected="false">
          <template #selected-icon><MDSymbol name="check" /></template>
          <template #unselected-icon><MDSymbol name="close" /></template>
        </MDSwitch>
      </MDStateLayerForcedStateProvider>
      <span>Icon hover off</span>
    </div>
    <div class="visual-row">
      <MDStateLayerForcedStateProvider pressed>
        <MDSwitch id="storybook-md-switch-icon-pressed-off" aria-label="Icon pressed off" :selected="false">
          <template #selected-icon><MDSymbol name="check" /></template>
          <template #unselected-icon><MDSymbol name="close" /></template>
        </MDSwitch>
      </MDStateLayerForcedStateProvider>
      <span>Icon pressed off</span>
    </div>
    <div class="visual-row">
      <MDStateLayerForcedStateProvider hovered>
        <MDSwitch id="storybook-md-switch-icon-hover-on" aria-label="Icon hover on" :selected="true">
          <template #selected-icon><MDSymbol name="check" /></template>
          <template #unselected-icon><MDSymbol name="close" /></template>
        </MDSwitch>
      </MDStateLayerForcedStateProvider>
      <span>Icon hover on</span>
    </div>
    <div class="visual-row">
      <MDStateLayerForcedStateProvider pressed>
        <MDSwitch id="storybook-md-switch-icon-pressed-on" aria-label="Icon pressed on" :selected="true">
          <template #selected-icon><MDSymbol name="check" /></template>
          <template #unselected-icon><MDSymbol name="close" /></template>
        </MDSwitch>
      </MDStateLayerForcedStateProvider>
      <span>Icon pressed on</span>
    </div>
  </div>
`, Ve = `
  <div id="visual-md-switch-target-hit" class="visual-checker-backdrop">
    <MDSwitch
      id="storybook-md-switch-target-hit"
      aria-label="Expanded target"
      :selected="selected"
      @change="onChange"
      @update:selected="onUpdateSelected"
    />
    <span id="visual-md-switch-target-hit-count">{{ changeCount }}</span>
  </div>
`, Be = `
  <div id="visual-md-switch-drag" class="visual-checker-backdrop">
    <MDSwitch
      id="storybook-md-switch-drag"
      aria-label="Drag switch"
      :selected="selected"
      @change="onChange"
      @update:selected="onUpdateSelected"
    />
    <span id="visual-md-switch-drag-count">{{ changeCount }}</span>
    <span id="visual-md-switch-drag-value">{{ selected }}</span>
  </div>
`, Ue = () => ({ components: { MDSwitch: r }, setup: () => {
  const t = f(0), i = f(false);
  return { changeCount: t, selected: i, onChange: () => {
    t.value += 1;
  }, onUpdateSelected: (d) => {
    i.value = d;
  } };
}, template: Ve }), Ee = () => ({ components: { MDSwitch: r }, setup: () => {
  const t = f(0), i = f(false);
  return { changeCount: t, selected: i, onChange: () => {
    t.value += 1;
  }, onUpdateSelected: (d) => {
    i.value = d;
  } };
}, template: Be }), g = {}, k = { args: { selected: true } }, _ = { args: { disabled: true, selected: true } }, I = { args: { selected: true }, render: (t) => ({ components: { MDSwitch: r, MDSymbol: $ }, setup: () => t, template: `
      <MDSwitch v-bind="$props">
        <template #selected-icon><MDSymbol name="check" /></template>
        <template #unselected-icon><MDSymbol name="close" /></template>
      </MDSwitch>
    ` }) }, P = { render: () => ({ components: { MDSwitch: r }, setup: () => ({ selected: f(false) }), template: `
      <div style="display:flex;align-items:center;gap:12px">
        <span id="switch-label-example">Send error reports</span>
        <MDSwitch
          id="storybook-md-switch-labeled"
          aria-labelledby="switch-label-example"
          :selected="selected"
          @update:selected="selected = $event"
        />
      </div>
    ` }) }, L = { render: Ue }, F = { render: Ee }, C = { tags: ["visual"], render: () => ({ components: { MDSwitch: r }, template: Fe }) }, x = { tags: ["visual"], render: () => ({ components: { MDSwitch: r, MDStateLayerForcedStateProvider: Q }, template: Ce }) }, T = { tags: ["visual"], render: () => ({ components: { MDSwitch: r, MDSymbol: $ }, template: xe }) }, V = { tags: ["visual"], render: () => ({ components: { MDSwitch: r, MDSymbol: $, MDStateLayerForcedStateProvider: Q }, template: Te }) }, B = { render: () => ({ components: { MDSwitch: r }, setup() {
  we();
}, template: `
      <div id="visual-md-switch-focus-indicator">
        <MDSwitch
          id="storybook-md-switch-focus"
          aria-label="Focus target"
          :selected="false"
        />
      </div>
    ` }) };
g.parameters = { ...g.parameters, docs: { ...g.parameters?.docs, source: { originalSource: "{}", ...g.parameters?.docs?.source } } };
k.parameters = { ...k.parameters, docs: { ...k.parameters?.docs, source: { originalSource: `{
  args: {
    selected: true
  }
}`, ...k.parameters?.docs?.source } } };
_.parameters = { ..._.parameters, docs: { ..._.parameters?.docs, source: { originalSource: `{
  args: {
    disabled: true,
    selected: true
  }
}`, ..._.parameters?.docs?.source } } };
I.parameters = { ...I.parameters, docs: { ...I.parameters?.docs, source: { originalSource: `{
  args: {
    selected: true
  },
  render: args => ({
    components: {
      MDSwitch,
      MDSymbol
    },
    setup: () => args,
    template: \`
      <MDSwitch v-bind="$props">
        <template #selected-icon><MDSymbol name="check" /></template>
        <template #unselected-icon><MDSymbol name="close" /></template>
      </MDSwitch>
    \`
  })
}`, ...I.parameters?.docs?.source } } };
P.parameters = { ...P.parameters, docs: { ...P.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDSwitch
    },
    setup: () => {
      const selected = ref(false);
      return {
        selected
      };
    },
    template: \`
      <div style="display:flex;align-items:center;gap:12px">
        <span id="switch-label-example">Send error reports</span>
        <MDSwitch
          id="storybook-md-switch-labeled"
          aria-labelledby="switch-label-example"
          :selected="selected"
          @update:selected="selected = $event"
        />
      </div>
    \`
  })
}`, ...P.parameters?.docs?.source } } };
L.parameters = { ...L.parameters, docs: { ...L.parameters?.docs, source: { originalSource: `{
  render: targetHitAreaStory
}`, ...L.parameters?.docs?.source } } };
F.parameters = { ...F.parameters, docs: { ...F.parameters?.docs, source: { originalSource: `{
  render: dragStory
}`, ...F.parameters?.docs?.source } } };
C.parameters = { ...C.parameters, docs: { ...C.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDSwitch
    },
    template: switchStatesTemplate
  })
}`, ...C.parameters?.docs?.source } } };
x.parameters = { ...x.parameters, docs: { ...x.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDSwitch,
      MDStateLayerForcedStateProvider
    },
    template: switchInteractionStatesTemplate
  })
}`, ...x.parameters?.docs?.source } } };
T.parameters = { ...T.parameters, docs: { ...T.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDSwitch,
      MDSymbol
    },
    template: switchIconStatesTemplate
  })
}`, ...T.parameters?.docs?.source } } };
V.parameters = { ...V.parameters, docs: { ...V.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDSwitch,
      MDSymbol,
      MDStateLayerForcedStateProvider
    },
    template: switchIconInteractionStatesTemplate
  })
}`, ...V.parameters?.docs?.source } } };
B.parameters = { ...B.parameters, docs: { ...B.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDSwitch
    },
    setup() {
      useFocusIndicator();
    },
    template: \`
      <div id="visual-md-switch-focus-indicator">
        <MDSwitch
          id="storybook-md-switch-focus"
          aria-label="Focus target"
          :selected="false"
        />
      </div>
    \`
  })
}`, ...B.parameters?.docs?.source } } };
const ze = ["Default", "On", "Disabled", "WithSelectedIcon", "LabeledWithAriaLabelledby", "ExpandedTargetHitArea", "DragInteraction", "VisualStates", "VisualInteractionStates", "VisualIconStates", "VisualIconInteractionStates", "FocusIndicatorTarget"];
export {
  g as Default,
  _ as Disabled,
  F as DragInteraction,
  L as ExpandedTargetHitArea,
  B as FocusIndicatorTarget,
  P as LabeledWithAriaLabelledby,
  k as On,
  V as VisualIconInteractionStates,
  T as VisualIconStates,
  x as VisualInteractionStates,
  C as VisualStates,
  I as WithSelectedIcon,
  ze as __namedExportsOrder,
  qe as default
};
