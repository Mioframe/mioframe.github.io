import { d as _, D as K, l as Q, f as m, n as L, u as e, g as n, h as t, c as y, A as S, E as x, t as j, b as p, j as U, r as W, o as i, I as O, w as V } from "./iframe-BKiidlQm.js";
import "./MDCircularProgressIndicator-BXRiJfXI.js";
import "./floating-ui.vue-BU0HbGEI.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-BykVsRL8.js";
import { u as X, a as Y, M as H } from "./useStateLayer-DknjEhiB.js";
import { M as E } from "./MDSymbol-T6kX-7AO.js";
import "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-DmpR4ZP-.js";
import { M as Z } from "./MDIconButton-DFi1UKZa.js";
import { _ as ee } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-CGiq93Yh.js";
import "./typography-C_Z8eobQ.js";
import "./main-Dt1UYEUN.js";
const ae = ["aria-disabled", "draggable"], se = ["disabled"], te = { key: 0, class: "md-chip__leading-icon" }, le = { class: "md-chip__label-text" }, oe = ["disabled", "draggable"], ie = { key: 0, class: "md-chip__leading-icon" }, de = { class: "md-chip__label-text" }, ce = { key: 1, class: "md-chip__trailing-icon" }, ne = _({ __name: "MDChipBase", props: { elevated: { type: Boolean }, label: {}, type: {}, selected: { type: Boolean }, draggable: { type: Boolean }, autofocus: { type: Boolean }, disabled: { type: Boolean }, closeTooltip: {} }, emits: ["click", "clickClose"], setup(s, { emit: c }) {
  const a = s, r = c, l = K(), o = p(() => a.type), F = p(() => o.value === "input"), P = p(() => o.value === "assist"), C = p(() => o.value === "filter"), h = p(() => !!a.selected), q = p(() => a.closeTooltip ?? "remove"), k = U("actionEl"), b = W(false), { hover: D, focused: B, durationPressedState: I } = X(k, { dragged: b }), u = p(() => !a.disabled);
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
  return (d, z) => F.value ? (i(), m("span", { key: 0, class: L(["md-chip md-chip_input-shell", [`md-chip_${o.value}`, { "md-chip_elevated": a.elevated, "md-chip_selected": h.value, "md-chip_disabled": a.disabled, "md-state_hover": u.value && e(D), "md-state_focused": u.value && e(B), "md-state_pressed": u.value && e(I), "md-state_dragged": u.value && b.value }]]), "aria-disabled": a.disabled ? "true" : void 0, draggable: a.draggable && !a.disabled ? "true" : void 0, onDragstart: R, onDragend: $, onDrop: $ }, [n("button", { ref_key: "actionEl", ref: k, type: "button", class: "md-chip__action", disabled: a.disabled, onClick: N }, [t(e(H), { hover: e(D), focused: e(B), pressed: e(I), dragged: b.value, disabled: a.disabled, class: "md-chip__state-layer" }, null, 8, ["hover", "focused", "pressed", "dragged", "disabled"]), C.value && h.value || P.value && l.leadingIcon ? (i(), m("span", te, [C.value && h.value ? (i(), y(E, { key: 0, name: "check" })) : S(d.$slots, "leadingIcon", {}, void 0, true, 1)])) : x("", true), n("span", le, j(a.label), 1)], 8, se), t(e(Z), { tooltip: q.value, "md-symbol-name": "close", size: "extra-small", color: "standard", disabled: a.disabled, class: "md-chip__close-btn", onClick: G }, null, 8, ["tooltip", "disabled"])], 42, ae)) : (i(), m("button", { key: 1, ref_key: "actionEl", ref: k, class: L(["md-chip", [`md-chip_${o.value}`, { "md-chip_elevated": a.elevated, "md-chip_selected": h.value, "md-chip_disabled": a.disabled, "md-state_hover": u.value && e(D), "md-state_focused": u.value && e(B), "md-state_pressed": u.value && e(I), "md-state_dragged": u.value && b.value }]]), type: "button", disabled: a.disabled, draggable: a.draggable && !a.disabled ? "true" : void 0, onClick: N, onDragstart: R, onDragend: $, onDrop: $ }, [t(e(H), { hover: e(D), focused: e(B), pressed: e(I), dragged: b.value, disabled: a.disabled, class: "md-chip__state-layer" }, null, 8, ["hover", "focused", "pressed", "dragged", "disabled"]), C.value && h.value || P.value && l.leadingIcon ? (i(), m("span", ie, [C.value && h.value ? (i(), y(E, { key: 0, name: "check" })) : S(d.$slots, "leadingIcon", {}, void 0, true, 1)])) : x("", true), n("span", de, j(a.label), 1), C.value && l.trailingIcon ? (i(), m("span", ce, [S(d.$slots, "trailingIcon", {}, void 0, true)])) : x("", true)], 42, oe));
} }), T = ee(ne, [["__scopeId", "data-v-e3ea9b0a"]]), f = _({ __name: "MDAssistChip", props: { elevated: { type: Boolean }, label: {}, draggable: { type: Boolean }, autofocus: { type: Boolean }, disabled: { type: Boolean } }, emits: ["click"], setup(s, { emit: c }) {
  const a = c, r = (l) => {
    a("click", l);
  };
  return (l, o) => (i(), y(T, { type: "assist", label: s.label, elevated: s.elevated, draggable: s.draggable, autofocus: s.autofocus, disabled: s.disabled, onClick: r }, O({ _: 2 }, [l.$slots.leadingIcon ? { name: "leadingIcon", fn: V(() => [S(l.$slots, "leadingIcon")]), key: "0" } : void 0]), 1032, ["label", "elevated", "draggable", "autofocus", "disabled"]));
} }), g = _({ __name: "MDFilterChip", props: { elevated: { type: Boolean }, label: {}, draggable: { type: Boolean }, autofocus: { type: Boolean }, disabled: { type: Boolean }, selected: { type: Boolean } }, emits: ["click"], setup(s, { emit: c }) {
  const a = c, r = (l) => {
    a("click", l);
  };
  return (l, o) => (i(), y(T, { type: "filter", label: s.label, elevated: s.elevated, selected: s.selected, draggable: s.draggable, autofocus: s.autofocus, disabled: s.disabled, onClick: r }, O({ _: 2 }, [l.$slots.trailingIcon ? { name: "trailingIcon", fn: V(() => [S(l.$slots, "trailingIcon")]), key: "0" } : void 0]), 1032, ["label", "elevated", "selected", "draggable", "autofocus", "disabled"]));
} }), v = _({ __name: "MDInputChip", props: { elevated: { type: Boolean }, label: {}, draggable: { type: Boolean }, autofocus: { type: Boolean }, disabled: { type: Boolean }, closeTooltip: {} }, emits: ["click", "clickClose"], setup(s, { emit: c }) {
  const a = c, r = (o) => {
    a("click", o);
  }, l = (o) => {
    a("clickClose", o);
  };
  return (o, F) => (i(), y(T, { type: "input", label: s.label, elevated: s.elevated, draggable: s.draggable, autofocus: s.autofocus, disabled: s.disabled, "close-tooltip": s.closeTooltip, onClick: r, onClickClose: l }, null, 8, ["label", "elevated", "draggable", "autofocus", "disabled", "close-tooltip"]));
} }), A = _({ __name: "MDSuggestionChip", props: { elevated: { type: Boolean }, label: {}, draggable: { type: Boolean }, autofocus: { type: Boolean }, disabled: { type: Boolean } }, emits: ["click"], setup(s, { emit: c }) {
  const a = c, r = (l) => {
    a("click", l);
  };
  return (l, o) => (i(), y(T, { type: "suggestion", label: s.label, elevated: s.elevated, draggable: s.draggable, autofocus: s.autofocus, disabled: s.disabled, onClick: r }, null, 8, ["label", "elevated", "draggable", "autofocus", "disabled"]));
} }), re = { id: "visual-md-chip-interaction-states", class: "visual-surface" }, ue = { class: "visual-row" }, pe = { class: "visual-row" }, be = _({ __name: "MDChipInteractionStatesStory", setup(s) {
  return (c, a) => (i(), m("div", re, [n("div", ue, [t(e(f), { class: "md-state_hover", label: "Hover" }), t(e(g), { class: "md-state_focused", label: "Focus" }), t(e(v), { class: "md-state_pressed", label: "Pressed" })]), n("div", pe, [t(e(A), { class: "md-state_dragged", label: "Dragged", draggable: "" }), t(e(g), { class: "md-state_hover", label: "Filter hover selected", selected: "" }), t(e(v), { class: "md-state_focused", label: "Input focus" })])]));
} }), me = { id: "visual-md-chip-states", class: "visual-surface" }, ge = { class: "visual-row" }, ve = { class: "visual-row" }, _e = { class: "visual-row" }, he = { class: "visual-row" }, fe = { id: "visual-md-chip-targets", class: "visual-row" }, ye = { class: "visual-row" }, Ce = _({ __name: "MDChipVisualStatesStory", setup(s) {
  return (c, a) => (i(), m("div", me, [n("div", ge, [t(e(f), { label: "Assist" }), t(e(f), { label: "Assist with icon" }, { leadingIcon: V(() => [t(e(E), { name: "search" })]), _: 1 }), t(e(g), { label: "Filter" })]), n("div", ve, [t(e(g), { label: "Selected filter", selected: "" }), t(e(g), { label: "Trailing icon" }, { trailingIcon: V(() => [t(e(E), { name: "arrow_drop_down" })]), _: 1 }), t(e(v), { label: "Input chip" })]), n("div", _e, [t(e(v), { label: "Custom close label", "close-tooltip": "Remove input chip" }), t(e(f), { label: "Elevated", elevated: "" }), t(e(A), { label: "Suggestion" })]), n("div", he, [t(e(f), { label: "Disabled assist", disabled: "" }), t(e(g), { label: "Disabled filter", disabled: "" }), t(e(v), { label: "Disabled input chip", disabled: "" })]), n("div", fe, [t(e(A), { label: "Disabled suggestion", disabled: "" }), t(e(g), { label: "Disabled selected filter", selected: "", disabled: "" }), t(e(f), { label: "Disabled elevated assist", elevated: "", disabled: "" })]), n("div", ye, [t(e(v), { label: "Close target" }), t(e(v), { label: "Disabled close target", disabled: "" })])]));
} }), Re = { title: "shared/ui/MDChip", args: { label: "Chip label" }, argTypes: { onClick: { action: "click" }, onClickClose: { action: "clickClose" } }, parameters: { layout: "centered" } }, M = { tags: ["visual"], render: () => ({ components: { MDChipVisualStatesStory: Ce }, template: "<MDChipVisualStatesStory />" }) }, w = { tags: ["visual"], render: () => ({ components: { MDChipInteractionStatesStory: be }, template: "<MDChipInteractionStatesStory />" }) };
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
const ze = ["VisualStates", "VisualInteractionStates"];
export {
  w as VisualInteractionStates,
  M as VisualStates,
  ze as __namedExportsOrder,
  Re as default
};
