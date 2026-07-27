import { d as ie, E as re, K as le, j as de, u as s, c as h, a as g, z as k, G as D, n as G, b as oe, L as ce, M as ue, l as o, h as me, e as f, s as F, r as v } from "./iframe-CfWhvfgG.js";
import { u as pe, a as he, M as ge } from "./useStateLayer-BiojVwNj.js";
import { s as fe } from "./uniqueId-nN02hbhL.js";
import { _ as be } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { M as V } from "./MDSymbol-uJBkb_Iv.js";
import { _ as Y, u as ye } from "./useFocusIndicator-CQ_irBo3.js";
import "./preload-helper-PPVm8Dsz.js";
const ve = { class: "md-switch__track" }, we = { class: "md-switch__handle" }, ke = { key: 0, class: "md-switch__icon", "aria-hidden": "true" }, De = { key: 1, class: "md-switch__icon", "aria-hidden": "true" }, Se = ["for", "tabindex", "aria-label", "aria-labelledby", "aria-checked", "aria-disabled"], Me = ["id", "disabled"], Ie = { class: "md-switch__track" }, xe = { class: "md-switch__handle", "data-md-focus-indicator-target": "" }, qe = { key: 0, class: "md-switch__icon", "aria-hidden": "true" }, Ee = { key: 1, class: "md-switch__icon", "aria-hidden": "true" }, B = ie({ __name: "MDSwitch", props: { selected: { type: Boolean, default: false }, disabled: { type: Boolean }, id: { default: () => fe("switch") }, ariaLabel: {}, ariaLabelledby: {}, autofocus: { type: Boolean }, tabIndex: { default: 0 }, presentation: { type: Boolean } }, emits: ["update:selected", "change"], setup(a, { emit: d }) {
  const b = a, w = d, c = re(), { disabled: t, selected: J, presentation: u } = le(b), n = o({ get: () => !!J.value, set: (e) => {
    w("update:selected", e), w("change", e);
  } }), W = o(() => !!c["selected-icon"]), L = o(() => !!c["unselected-icon"]), T = o(() => n.value ? W.value : L.value), O = () => {
    u.value || t.value || (n.value = !n.value);
  }, m = F(false), H = F(0), y = F(false), Q = (e) => {
    u.value || t.value || e.button !== 0 || (m.value = true, H.value = e.clientX, y.value = false, l.value?.setPointerCapture?.(e.pointerId));
  }, Z = (e) => {
    m.value && e.preventDefault();
  }, ee = (e) => {
    if (!m.value) return;
    m.value = false, l.value?.releasePointerCapture?.(e.pointerId);
    const i = e.clientX - H.value;
    if (Math.abs(i) > 4) {
      y.value = true;
      const p = l.value;
      if (p) {
        const K = p.getBoundingClientRect(), X = e.clientX > K.left + K.width / 2;
        X !== n.value && (n.value = X);
      }
    }
  }, ae = (e) => {
    m.value && (m.value = false, y.value = false, l.value?.releasePointerCapture?.(e.pointerId));
  }, te = (e) => {
    if (!(u.value || t.value)) {
      if (e.preventDefault(), y.value) {
        y.value = false;
        return;
      }
      O();
    }
  }, ne = (e) => {
    if (u.value || t.value) return;
    const { key: i } = e;
    ["Enter", " "].includes(i) && (e.preventDefault(), O());
  }, l = me("switchEl"), { hover: U, focused: $, durationPressedState: j } = pe(l), se = o(() => t.value ? -1 : b.tabIndex), C = o(() => !t.value);
  return he(o(() => !u.value && !t.value ? l.value : void 0)), de([l, () => b.autofocus, t], ([e, i, p]) => {
    i && e && !p && e.focus();
  }, { immediate: true }), (e, i) => s(u) ? (f(), h("div", { key: 0, class: G(["md-switch md-switch_presentation", { "md-switch_selected": n.value, "md-switch_disabled": s(t), "md-switch_with-current-icon": T.value }]), "aria-hidden": "true" }, [g("div", ve, [g("div", we, [n.value && W.value ? (f(), h("span", ke, [k(e.$slots, "selected-icon", {}, void 0, true)])) : D("", true), !n.value && L.value ? (f(), h("span", De, [k(e.$slots, "unselected-icon", {}, void 0, true)])) : D("", true)])])], 2)) : (f(), h("label", { key: 1, ref_key: "switchEl", ref: l, for: a.id, class: G(["md-switch", { "md-switch_selected": n.value, "md-switch_disabled": s(t), "md-switch_with-current-icon": T.value, "md-state_hover": C.value && s(U), "md-state_focused": C.value && s($), "md-state_pressed": C.value && s(j), "md-state_disabled": s(t) }]), role: "switch", tabindex: se.value, "aria-label": a.ariaLabelledby ? void 0 : a.ariaLabel, "aria-labelledby": a.ariaLabelledby, "aria-checked": n.value, "aria-disabled": s(t) ? "true" : void 0, onClick: te, onKeydown: ne, onPointerdown: Q, onPointermove: Z, onPointerup: ee, onPointercancel: ae }, [i[1] || (i[1] = g("span", { class: "md-switch__target", "aria-hidden": "true" }, null, -1)), oe(s(ge), { class: "md-switch__state-layer", hover: s(U), focused: s($), pressed: s(j), disabled: s(t) }, null, 8, ["hover", "focused", "pressed", "disabled"]), ce(g("input", { id: a.id, "onUpdate:modelValue": i[0] || (i[0] = (p) => n.value = p), type: "checkbox", disabled: s(t), "aria-hidden": "true", class: "md-switch__input", tabindex: "-1" }, null, 8, Me), [[ue, n.value]]), g("div", Ie, [g("div", xe, [n.value && W.value ? (f(), h("span", qe, [k(e.$slots, "selected-icon", {}, void 0, true)])) : D("", true), !n.value && L.value ? (f(), h("span", Ee, [k(e.$slots, "unselected-icon", {}, void 0, true)])) : D("", true)])])], 42, Se));
} }), r = be(B, [["__scopeId", "data-v-9522bcc5"]]);
B.__docgenInfo = Object.assign({ displayName: B.name ?? B.__name }, { exportName: "default", displayName: "MDSwitch", type: 1, props: [{ name: "selected", global: false, description: "", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] }, default: "false" }, { name: "disabled", global: false, description: "", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "id", global: false, description: "", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] }, default: 'sessionUniqueId("switch")' }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "ariaLabelledby", global: false, description: "", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "autofocus", global: false, description: "", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "tabIndex", global: false, description: "", tags: [], required: false, type: "number | undefined", declarations: [], schema: { kind: "enum", type: "number | undefined", schema: ["undefined", "number"] }, default: "0" }, { name: "presentation", global: false, description: "", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "key", global: true, description: "", tags: [], required: false, type: "PropertyKey", declarations: [], schema: { kind: "enum", type: "PropertyKey", schema: ["string", "number", "symbol"] } }, { name: "ref", global: true, description: "", tags: [], required: false, type: "VNodeRef", declarations: [], schema: { kind: "enum", type: "VNodeRef", schema: ["string", "Ref<any, any>", { kind: "event", type: "(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void" }] } }, { name: "ref_for", global: true, description: "", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "ref_key", global: true, description: "", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "class", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "style", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "tabindex", global: true, description: "", tags: [], required: false, type: "string | number", declarations: [], schema: { kind: "enum", type: "string | number", schema: ["string", "number"] } }, { name: "aria-activedescendant", global: true, description: "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-atomic", global: true, description: "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-autocomplete", global: true, description: `Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`, tags: [], required: false, type: '"none" | "inline" | "list" | "both" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "inline" | "list" | "both" | undefined', schema: ["undefined", '"none"', '"inline"', '"list"', '"both"'] } }, { name: "aria-busy", global: true, description: "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-checked", global: true, description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.', tags: [{ name: "see", text: "aria-pressed" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-colcount", global: true, description: "Defines the total number of columns in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colindex", global: true, description: "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colcount" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colspan", global: true, description: "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-controls", global: true, description: "Identifies the element (or elements) whose contents or presence are controlled by the current element.", tags: [{ name: "see", text: "aria-owns." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-current", global: true, description: "Indicates the element that represents the current item within a container or set of related elements.", tags: [], required: false, type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"page"', '"step"', '"location"', '"date"', '"time"'] } }, { name: "aria-describedby", global: true, description: "Identifies the element (or elements) that describes the object.", tags: [{ name: "see", text: "aria-labelledby" }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-details", global: true, description: "Identifies the element that provides a detailed, extended description for the object.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-disabled", global: true, description: "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.", tags: [{ name: "see", text: "aria-hidden" }, { name: "see", text: "aria-readonly." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-dropeffect", global: true, description: "Indicates what functions can be performed when a dragged object is released on the drop target.", tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: '"link" | "none" | "copy" | "execute" | "move" | "popup" | undefined', declarations: [], schema: { kind: "enum", type: '"link" | "none" | "copy" | "execute" | "move" | "popup" | undefined', schema: ["undefined", '"link"', '"none"', '"copy"', '"execute"', '"move"', '"popup"'] } }, { name: "aria-errormessage", global: true, description: "Identifies the element that provides an error message for the object.", tags: [{ name: "see", text: "aria-invalid" }, { name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-expanded", global: true, description: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-flowto", global: true, description: `Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-grabbed", global: true, description: `Indicates an element's "grabbed" state in a drag-and-drop operation.`, tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-haspopup", global: true, description: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", tags: [], required: false, type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"menu"', '"listbox"', '"tree"', '"grid"', '"dialog"'] } }, { name: "aria-hidden", global: true, description: "Indicates whether the element is exposed to an accessibility API.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-invalid", global: true, description: "Indicates the entered value does not conform to the format expected by the application.", tags: [{ name: "see", text: "aria-errormessage." }], required: false, type: 'Booleanish | "grammar" | "spelling" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "grammar" | "spelling" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"grammar"', '"spelling"'] } }, { name: "aria-keyshortcuts", global: true, description: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-label", global: true, description: "Defines a string value that labels the current element.", tags: [{ name: "see", text: "aria-labelledby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-labelledby", global: true, description: "Identifies the element (or elements) that labels the current element.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-level", global: true, description: "Defines the hierarchical level of an element within a structure.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-live", global: true, description: "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", tags: [], required: false, type: '"off" | "assertive" | "polite" | undefined', declarations: [], schema: { kind: "enum", type: '"off" | "assertive" | "polite" | undefined', schema: ["undefined", '"off"', '"assertive"', '"polite"'] } }, { name: "aria-modal", global: true, description: "Indicates whether an element is modal when displayed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiline", global: true, description: "Indicates whether a text box accepts multiple lines of input or only a single line.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiselectable", global: true, description: "Indicates that the user may select more than one item from the current selectable descendants.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-orientation", global: true, description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", tags: [], required: false, type: '"horizontal" | "vertical" | undefined', declarations: [], schema: { kind: "enum", type: '"horizontal" | "vertical" | undefined', schema: ["undefined", '"horizontal"', '"vertical"'] } }, { name: "aria-owns", global: true, description: `Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.`, tags: [{ name: "see", text: "aria-controls." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-placeholder", global: true, description: `Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-posinset", global: true, description: "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-setsize." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-pressed", global: true, description: 'Indicates the current "pressed" state of toggle buttons.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-readonly", global: true, description: "Indicates that the element is not editable, but is otherwise operable.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-relevant", global: true, description: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.", tags: [{ name: "see", text: "aria-atomic." }], required: false, type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', declarations: [], schema: { kind: "enum", type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', schema: ["undefined", '"additions"', '"additions removals"', '"additions text"', '"all"', '"removals"', '"removals additions"', '"removals text"', '"text"', '"text additions"', '"text removals"'] } }, { name: "aria-required", global: true, description: "Indicates that user input is required on the element before a form may be submitted.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-roledescription", global: true, description: "Defines a human-readable, author-localized description for the role of an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-rowcount", global: true, description: "Defines the total number of rows in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowindex", global: true, description: "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowcount" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowspan", global: true, description: "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-selected", global: true, description: 'Indicates the current "selected" state of various widgets.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-pressed." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-setsize", global: true, description: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-posinset." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-sort", global: true, description: "Indicates if items in a table or grid are sorted in ascending or descending order.", tags: [], required: false, type: '"none" | "ascending" | "descending" | "other" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "ascending" | "descending" | "other" | undefined', schema: ["undefined", '"none"', '"ascending"', '"descending"', '"other"'] } }, { name: "aria-valuemax", global: true, description: "Defines the maximum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuemin", global: true, description: "Defines the minimum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuenow", global: true, description: "Defines the current value for a range widget.", tags: [{ name: "see", text: "aria-valuetext." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuetext", global: true, description: "Defines the human readable text alternative of aria-valuenow for a range widget.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: false, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }], events: [{ name: "update:selected", description: "", tags: [], type: "[selected: boolean]", signature: '(event: "update:selected", selected: boolean): void', declarations: [], schema: [{ kind: "enum", type: "boolean", schema: ["false", "true"] }] }, { name: "change", description: "", tags: [], type: "[selected: boolean]", signature: '(event: "change", selected: boolean): void', declarations: [], schema: [{ kind: "enum", type: "boolean", schema: ["false", "true"] }] }], slots: [{ name: "selected-icon", type: "any", description: "", declarations: [], schema: "any" }, { name: "unselected-icon", type: "any", description: "", declarations: [], schema: "any" }], exposed: [{ name: "$slots", type: "Readonly<InternalSlots> & __VLS_Slots", description: "", declarations: [], schema: { kind: "object", type: "Readonly<InternalSlots> & __VLS_Slots" } }, { name: "selected", type: "boolean | undefined", description: "", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "id", type: "string | undefined", description: "", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "tabIndex", type: "number | undefined", description: "", declarations: [], schema: { kind: "enum", type: "number | undefined", schema: ["undefined", "number"] } }, { name: "ariaLabel", type: "string | undefined", description: "", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "disabled", type: "boolean | undefined", description: "", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "ariaLabelledby", type: "string | undefined", description: "", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "autofocus", type: "boolean | undefined", description: "", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "presentation", type: "boolean | undefined", description: "", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Switch/MDSwitch.vue" });
const Ue = { title: "shared/ui/MDSwitch", component: r, args: { ariaLabel: "Error diagnostics", id: "storybook-md-switch-default", selected: false }, argTypes: { "onUpdate:selected": { action: "update:selected" }, onChange: { action: "change" } }, parameters: { layout: "centered" } }, Pe = `
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
`, Ne = `
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
`, Re = `
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
`, Ae = `
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
`, _e = `
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
`, ze = `
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
`, Be = () => ({ components: { MDSwitch: r }, setup: () => {
  const a = v(0), d = v(false);
  return { changeCount: a, selected: d, onChange: () => {
    a.value += 1;
  }, onUpdateSelected: (c) => {
    d.value = c;
  } };
}, template: _e }), We = () => ({ components: { MDSwitch: r }, setup: () => {
  const a = v(0), d = v(false);
  return { changeCount: a, selected: d, onChange: () => {
    a.value += 1;
  }, onUpdateSelected: (c) => {
    d.value = c;
  } };
}, template: ze }), S = {}, M = { args: { selected: true } }, I = { args: { disabled: true, selected: true } }, x = { args: { selected: true }, render: (a) => ({ components: { MDSwitch: r, MDSymbol: V }, setup: () => a, template: `
      <MDSwitch v-bind="$props">
        <template #selected-icon><MDSymbol name="check" /></template>
        <template #unselected-icon><MDSymbol name="close" /></template>
      </MDSwitch>
    ` }) }, q = { render: () => ({ components: { MDSwitch: r }, setup: () => ({ selected: v(false) }), template: `
      <div style="display:flex;align-items:center;gap:12px">
        <span id="switch-label-example">Send error reports</span>
        <MDSwitch
          id="storybook-md-switch-labeled"
          aria-labelledby="switch-label-example"
          :selected="selected"
          @update:selected="selected = $event"
        />
      </div>
    ` }) }, E = { render: Be }, P = { render: We }, N = { tags: ["visual"], render: () => ({ components: { MDSwitch: r }, template: Pe }) }, R = { tags: ["visual"], render: () => ({ components: { MDSwitch: r, MDStateLayerForcedStateProvider: Y }, template: Ne }) }, A = { tags: ["visual"], render: () => ({ components: { MDSwitch: r, MDSymbol: V }, template: Re }) }, _ = { tags: ["visual"], render: () => ({ components: { MDSwitch: r, MDSymbol: V, MDStateLayerForcedStateProvider: Y }, template: Ae }) }, z = { render: () => ({ components: { MDSwitch: r }, setup() {
  ye();
}, template: `
      <div id="visual-md-switch-focus-indicator">
        <MDSwitch
          id="storybook-md-switch-focus"
          aria-label="Focus target"
          :selected="false"
        />
      </div>
    ` }) };
S.parameters = { ...S.parameters, docs: { ...S.parameters?.docs, source: { originalSource: "{}", ...S.parameters?.docs?.source } } };
M.parameters = { ...M.parameters, docs: { ...M.parameters?.docs, source: { originalSource: `{
  args: {
    selected: true
  }
}`, ...M.parameters?.docs?.source } } };
I.parameters = { ...I.parameters, docs: { ...I.parameters?.docs, source: { originalSource: `{
  args: {
    disabled: true,
    selected: true
  }
}`, ...I.parameters?.docs?.source } } };
x.parameters = { ...x.parameters, docs: { ...x.parameters?.docs, source: { originalSource: `{
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
}`, ...x.parameters?.docs?.source } } };
q.parameters = { ...q.parameters, docs: { ...q.parameters?.docs, source: { originalSource: `{
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
}`, ...q.parameters?.docs?.source } } };
E.parameters = { ...E.parameters, docs: { ...E.parameters?.docs, source: { originalSource: `{
  render: targetHitAreaStory
}`, ...E.parameters?.docs?.source } } };
P.parameters = { ...P.parameters, docs: { ...P.parameters?.docs, source: { originalSource: `{
  render: dragStory
}`, ...P.parameters?.docs?.source } } };
N.parameters = { ...N.parameters, docs: { ...N.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDSwitch
    },
    template: switchStatesTemplate
  })
}`, ...N.parameters?.docs?.source } } };
R.parameters = { ...R.parameters, docs: { ...R.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDSwitch,
      MDStateLayerForcedStateProvider
    },
    template: switchInteractionStatesTemplate
  })
}`, ...R.parameters?.docs?.source } } };
A.parameters = { ...A.parameters, docs: { ...A.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDSwitch,
      MDSymbol
    },
    template: switchIconStatesTemplate
  })
}`, ...A.parameters?.docs?.source } } };
_.parameters = { ..._.parameters, docs: { ..._.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDSwitch,
      MDSymbol,
      MDStateLayerForcedStateProvider
    },
    template: switchIconInteractionStatesTemplate
  })
}`, ..._.parameters?.docs?.source } } };
z.parameters = { ...z.parameters, docs: { ...z.parameters?.docs, source: { originalSource: `{
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
}`, ...z.parameters?.docs?.source } } };
const $e = ["Default", "On", "Disabled", "WithSelectedIcon", "LabeledWithAriaLabelledby", "ExpandedTargetHitArea", "DragInteraction", "VisualStates", "VisualInteractionStates", "VisualIconStates", "VisualIconInteractionStates", "FocusIndicatorTarget"];
export {
  S as Default,
  I as Disabled,
  P as DragInteraction,
  E as ExpandedTargetHitArea,
  z as FocusIndicatorTarget,
  q as LabeledWithAriaLabelledby,
  M as On,
  _ as VisualIconInteractionStates,
  A as VisualIconStates,
  R as VisualInteractionStates,
  N as VisualStates,
  x as WithSelectedIcon,
  $e as __namedExportsOrder,
  Ue as default
};
