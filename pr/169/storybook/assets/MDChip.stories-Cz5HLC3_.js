import { d as _, D as K, l as Q, f as m, n as L, u as e, g as n, h as s, c as y, A as S, E as x, t as j, b as p, j as U, r as W, o as i, I as O, w as V } from "./iframe-BmKBn1Mu.js";
import "./MDCircularProgressIndicator-DOisiz-R.js";
import "./useOverlay-DJ1otShK.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-B1Q_jGFY.js";
import { u as X, a as Y, M as H } from "./useStateLayer-DalrK0pL.js";
import { M as E } from "./MDSymbol-BfB6TF8u.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-Dna3Omro.js";
import "./useLocalSettings-Bb4TLqpL.js";
import { M as Z } from "./MDIconButton-7IB94KEA.js";
import { _ as ee } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-CROe5JIw.js";
import "./floating-ui.vue-C3Ysfbvu.js";
import "./typography-C_Z8eobQ.js";
import "./onInteractionOutside-C4f8P7lC.js";
import "./main-s0GXXqFc.js";
const ae = ["aria-disabled", "draggable"], te = ["disabled"], se = { key: 0, class: "md-chip__leading-icon" }, le = { class: "md-chip__label-text" }, oe = ["disabled", "draggable"], ie = { key: 0, class: "md-chip__leading-icon" }, de = { class: "md-chip__label-text" }, ce = { key: 1, class: "md-chip__trailing-icon" }, ne = _({ __name: "MDChipBase", props: { elevated: { type: Boolean }, label: {}, type: {}, selected: { type: Boolean }, draggable: { type: Boolean }, autofocus: { type: Boolean }, disabled: { type: Boolean }, closeTooltip: {} }, emits: ["click", "clickClose"], setup(t, { emit: c }) {
  const a = t, r = c, l = K(), o = p(() => a.type), F = p(() => o.value === "input"), P = p(() => o.value === "assist"), C = p(() => o.value === "filter"), h = p(() => !!a.selected), q = p(() => a.closeTooltip ?? "remove"), k = U("actionEl"), b = W(false), { hover: D, focused: B, durationPressedState: I } = X(k, { dragged: b }), u = p(() => !a.disabled);
  Y(p(() => a.disabled ? void 0 : k.value)), Q([k, () => a.autofocus, () => a.disabled], ([d, z, J]) => {
    z && d && !J && d.focus();
  }, { immediate: true });
  const G = (d) => {
    d.stopPropagation(), r("clickClose", d);
  }, N = (d) => {
    a.disabled || (d.stopPropagation(), r("click", d));
  }, R = () => {
    a.disabled || (b.value = true);
  }, $ = () => {
    b.value = false;
  };
  return (d, z) => F.value ? (i(), m("span", { key: 0, class: L(["md-chip md-chip_input-shell", [`md-chip_${o.value}`, { "md-chip_elevated": a.elevated, "md-chip_selected": h.value, "md-chip_disabled": a.disabled, "md-state_hover": u.value && e(D), "md-state_focused": u.value && e(B), "md-state_pressed": u.value && e(I), "md-state_dragged": u.value && b.value }]]), "aria-disabled": a.disabled ? "true" : void 0, draggable: a.draggable && !a.disabled ? "true" : void 0, onDragstart: R, onDragend: $, onDrop: $ }, [n("button", { ref_key: "actionEl", ref: k, type: "button", class: "md-chip__action", disabled: a.disabled, onClick: N }, [s(e(H), { hover: e(D), focused: e(B), pressed: e(I), dragged: b.value, disabled: a.disabled, class: "md-chip__state-layer" }, null, 8, ["hover", "focused", "pressed", "dragged", "disabled"]), C.value && h.value || P.value && l.leadingIcon ? (i(), m("span", se, [C.value && h.value ? (i(), y(E, { key: 0, name: "check" })) : S(d.$slots, "leadingIcon", {}, void 0, true, 1)])) : x("", true), n("span", le, j(a.label), 1)], 8, te), s(e(Z), { tooltip: q.value, "md-symbol-name": "close", size: "extra-small", color: "standard", disabled: a.disabled, class: "md-chip__close-btn", onClick: G }, null, 8, ["tooltip", "disabled"])], 42, ae)) : (i(), m("button", { key: 1, ref_key: "actionEl", ref: k, class: L(["md-chip", [`md-chip_${o.value}`, { "md-chip_elevated": a.elevated, "md-chip_selected": h.value, "md-chip_disabled": a.disabled, "md-state_hover": u.value && e(D), "md-state_focused": u.value && e(B), "md-state_pressed": u.value && e(I), "md-state_dragged": u.value && b.value }]]), type: "button", disabled: a.disabled, draggable: a.draggable && !a.disabled ? "true" : void 0, onClick: N, onDragstart: R, onDragend: $, onDrop: $ }, [s(e(H), { hover: e(D), focused: e(B), pressed: e(I), dragged: b.value, disabled: a.disabled, class: "md-chip__state-layer" }, null, 8, ["hover", "focused", "pressed", "dragged", "disabled"]), C.value && h.value || P.value && l.leadingIcon ? (i(), m("span", ie, [C.value && h.value ? (i(), y(E, { key: 0, name: "check" })) : S(d.$slots, "leadingIcon", {}, void 0, true, 1)])) : x("", true), n("span", de, j(a.label), 1), C.value && l.trailingIcon ? (i(), m("span", ce, [S(d.$slots, "trailingIcon", {}, void 0, true)])) : x("", true)], 42, oe));
} }), T = ee(ne, [["__scopeId", "data-v-e3ea9b0a"]]), f = _({ __name: "MDAssistChip", props: { elevated: { type: Boolean }, label: {}, draggable: { type: Boolean }, autofocus: { type: Boolean }, disabled: { type: Boolean } }, emits: ["click"], setup(t, { emit: c }) {
  const a = c, r = (l) => {
    a("click", l);
  };
  return (l, o) => (i(), y(T, { type: "assist", label: t.label, elevated: t.elevated, draggable: t.draggable, autofocus: t.autofocus, disabled: t.disabled, onClick: r }, O({ _: 2 }, [l.$slots.leadingIcon ? { name: "leadingIcon", fn: V(() => [S(l.$slots, "leadingIcon")]), key: "0" } : void 0]), 1032, ["label", "elevated", "draggable", "autofocus", "disabled"]));
} }), g = _({ __name: "MDFilterChip", props: { elevated: { type: Boolean }, label: {}, draggable: { type: Boolean }, autofocus: { type: Boolean }, disabled: { type: Boolean }, selected: { type: Boolean } }, emits: ["click"], setup(t, { emit: c }) {
  const a = c, r = (l) => {
    a("click", l);
  };
  return (l, o) => (i(), y(T, { type: "filter", label: t.label, elevated: t.elevated, selected: t.selected, draggable: t.draggable, autofocus: t.autofocus, disabled: t.disabled, onClick: r }, O({ _: 2 }, [l.$slots.trailingIcon ? { name: "trailingIcon", fn: V(() => [S(l.$slots, "trailingIcon")]), key: "0" } : void 0]), 1032, ["label", "elevated", "selected", "draggable", "autofocus", "disabled"]));
} }), v = _({ __name: "MDInputChip", props: { elevated: { type: Boolean }, label: {}, draggable: { type: Boolean }, autofocus: { type: Boolean }, disabled: { type: Boolean }, closeTooltip: {} }, emits: ["click", "clickClose"], setup(t, { emit: c }) {
  const a = c, r = (o) => {
    a("click", o);
  }, l = (o) => {
    a("clickClose", o);
  };
  return (o, F) => (i(), y(T, { type: "input", label: t.label, elevated: t.elevated, draggable: t.draggable, autofocus: t.autofocus, disabled: t.disabled, "close-tooltip": t.closeTooltip, onClick: r, onClickClose: l }, null, 8, ["label", "elevated", "draggable", "autofocus", "disabled", "close-tooltip"]));
} }), A = _({ __name: "MDSuggestionChip", props: { elevated: { type: Boolean }, label: {}, draggable: { type: Boolean }, autofocus: { type: Boolean }, disabled: { type: Boolean } }, emits: ["click"], setup(t, { emit: c }) {
  const a = c, r = (l) => {
    a("click", l);
  };
  return (l, o) => (i(), y(T, { type: "suggestion", label: t.label, elevated: t.elevated, draggable: t.draggable, autofocus: t.autofocus, disabled: t.disabled, onClick: r }, null, 8, ["label", "elevated", "draggable", "autofocus", "disabled"]));
} }), re = { id: "visual-md-chip-interaction-states", class: "visual-surface" }, ue = { class: "visual-row" }, pe = { class: "visual-row" }, be = _({ __name: "MDChipInteractionStatesStory", setup(t) {
  return (c, a) => (i(), m("div", re, [n("div", ue, [s(e(f), { class: "md-state_hover", label: "Hover" }), s(e(g), { class: "md-state_focused", label: "Focus" }), s(e(v), { class: "md-state_pressed", label: "Pressed" })]), n("div", pe, [s(e(A), { class: "md-state_dragged", label: "Dragged", draggable: "" }), s(e(g), { class: "md-state_hover", label: "Filter hover selected", selected: "" }), s(e(v), { class: "md-state_focused", label: "Input focus" })])]));
} }), me = { id: "visual-md-chip-states", class: "visual-surface" }, ge = { class: "visual-row" }, ve = { class: "visual-row" }, _e = { class: "visual-row" }, he = { class: "visual-row" }, fe = { id: "visual-md-chip-targets", class: "visual-row" }, ye = { class: "visual-row" }, Ce = _({ __name: "MDChipVisualStatesStory", setup(t) {
  return (c, a) => (i(), m("div", me, [n("div", ge, [s(e(f), { label: "Assist" }), s(e(f), { label: "Assist with icon" }, { leadingIcon: V(() => [s(e(E), { name: "search" })]), _: 1 }), s(e(g), { label: "Filter" })]), n("div", ve, [s(e(g), { label: "Selected filter", selected: "" }), s(e(g), { label: "Trailing icon" }, { trailingIcon: V(() => [s(e(E), { name: "arrow_drop_down" })]), _: 1 }), s(e(v), { label: "Input chip" })]), n("div", _e, [s(e(v), { label: "Custom close label", "close-tooltip": "Remove input chip" }), s(e(f), { label: "Elevated", elevated: "" }), s(e(A), { label: "Suggestion" })]), n("div", he, [s(e(f), { label: "Disabled assist", disabled: "" }), s(e(g), { label: "Disabled filter", disabled: "" }), s(e(v), { label: "Disabled input chip", disabled: "" })]), n("div", fe, [s(e(A), { label: "Disabled suggestion", disabled: "" }), s(e(g), { label: "Disabled selected filter", selected: "", disabled: "" }), s(e(f), { label: "Disabled elevated assist", elevated: "", disabled: "" })]), n("div", ye, [s(e(v), { label: "Close target" }), s(e(v), { label: "Disabled close target", disabled: "" })])]));
} }), je = { title: "shared/ui/MDChip", args: { label: "Chip label" }, argTypes: { onClick: { action: "click" }, onClickClose: { action: "clickClose" } }, parameters: { layout: "centered" } }, M = { tags: ["visual"], render: () => ({ components: { MDChipVisualStatesStory: Ce }, template: "<MDChipVisualStatesStory />" }) }, w = { tags: ["visual"], render: () => ({ components: { MDChipInteractionStatesStory: be }, template: "<MDChipInteractionStatesStory />" }) };
M.parameters = { ...M.parameters, docs: { ...M.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDChipVisualStatesStory
    },
    template: '<MDChipVisualStatesStory />'
  })
}`, ...M.parameters?.docs?.source } } };
w.parameters = { ...w.parameters, docs: { ...w.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDChipInteractionStatesStory
    },
    template: '<MDChipInteractionStatesStory />'
  })
}`, ...w.parameters?.docs?.source } } };
const He = ["VisualStates", "VisualInteractionStates"];
export {
  w as VisualInteractionStates,
  M as VisualStates,
  He as __namedExportsOrder,
  je as default
};
