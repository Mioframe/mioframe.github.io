import { p as ze, v as _e, d as We, c as Be, n as Oe, l as D, e as Ce, r as F, x as w, j as M, y as we, U as ie, m as Q, a4 as se, a5 as Le, _ as le, a6 as ke, a7 as Fe, R as Ve, a0 as je, a1 as He, V as $e, s as I, X as Ue, k as xe, C as he, u as Ke } from "./iframe-DojX1KGr.js";
import { _ as Je } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const Ge = { trailing: true };
function Ye(e, t = 25, n = {}) {
  if (n = { ...Ge, ...n }, !Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
  let a, i, s = [], r, o;
  const u = (l, m) => (r = Xe(e, l, m), r.finally(() => {
    if (r = null, n.trailing && o && !i) {
      const f = u(l, o);
      return o = null, f;
    }
  }), r), c = function(...l) {
    return n.trailing && (o = l), r || new Promise((m) => {
      const f = !i && n.leading;
      clearTimeout(i), i = setTimeout(() => {
        i = null;
        const b = n.leading ? a : u(this, l);
        o = null;
        for (const k of s) k(b);
        s = [];
      }, t), f ? (a = u(this, l), m(a)) : s.push(m);
    });
  }, d = (l) => {
    l && (clearTimeout(l), i = null);
  };
  return c.isPending = () => !!i, c.cancel = () => {
    d(i), s = [], o = null;
  }, c.flush = () => {
    if (d(i), !o || r) return;
    const l = o;
    return o = null, u(this, l);
  }, c;
}
async function Xe(e, t, n) {
  return await e.apply(t, n);
}
const De = /* @__PURE__ */ Symbol("MDStateLayerForcedState"), ee = (e) => {
  _e(De, e);
}, Qe = () => ze(De, void 0);
ee.__docgenInfo = Object.assign({ displayName: ee.name ?? ee.__name }, { exportName: "provideMDStateLayerForcedState", displayName: "provideMDStateLayerForcedState", type: 2, props: [{ name: "hovered", global: false, description: "Forces the hover state-layer visual on or off when set.", tags: [], required: false, type: "Ref<boolean | undefined, boolean | undefined>", declarations: [], schema: "Ref<boolean | undefined, boolean | undefined>" }, { name: "focused", global: false, description: "Forces the focus state-layer visual on or off when set.", tags: [], required: false, type: "Ref<boolean | undefined, boolean | undefined>", declarations: [], schema: "Ref<boolean | undefined, boolean | undefined>" }, { name: "pressed", global: false, description: "Forces the pressed state-layer visual on or off when set.", tags: [], required: false, type: "Ref<boolean | undefined, boolean | undefined>", declarations: [], schema: "Ref<boolean | undefined, boolean | undefined>" }, { name: "dragged", global: false, description: "Forces the dragged state-layer visual on or off when set.", tags: [], required: false, type: "Ref<boolean | undefined, boolean | undefined>", declarations: [], schema: "Ref<boolean | undefined, boolean | undefined>" }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/State/forcedState.ts" });
const X = We({ __name: "MDStateLayer", props: { hover: { type: Boolean, default: false }, focused: { type: Boolean, default: false }, pressed: { type: Boolean, default: false }, dragged: { type: Boolean, default: false }, disabled: { type: Boolean, default: false } }, setup(e) {
  const t = e, n = Qe(), a = D(() => n?.hovered?.value ?? t.hover), i = D(() => n?.focused?.value ?? t.focused), s = D(() => n?.pressed?.value ?? t.pressed), r = D(() => n?.dragged?.value ?? t.dragged);
  return (o, u) => (Ce(), Be("span", { class: Oe(["md-state-layer", { "md-state_hover": !t.disabled && a.value, "md-state_focused": !t.disabled && i.value, "md-state_pressed": !t.disabled && s.value, "md-state_dragged": !t.disabled && r.value, "md-state_disabled": t.disabled }]), "aria-hidden": "true" }, null, 2));
} }), Bt = Je(X, [["__scopeId", "data-v-73ae0dfb"]]);
X.__docgenInfo = Object.assign({ displayName: X.name ?? X.__name }, { exportName: "default", displayName: "MDStateLayer", type: 1, props: [{ name: "hover", global: false, description: "", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] }, default: "false" }, { name: "focused", global: false, description: "", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] }, default: "false" }, { name: "pressed", global: false, description: "", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] }, default: "false" }, { name: "dragged", global: false, description: "", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] }, default: "false" }, { name: "disabled", global: false, description: "", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] }, default: "false" }, { name: "key", global: true, description: "", tags: [], required: false, type: "PropertyKey", declarations: [], schema: { kind: "enum", type: "PropertyKey", schema: ["string", "number", "symbol"] } }, { name: "ref", global: true, description: "", tags: [], required: false, type: "VNodeRef", declarations: [], schema: { kind: "enum", type: "VNodeRef", schema: ["string", "Ref<any, any>", { kind: "event", type: "(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void" }] } }, { name: "ref_for", global: true, description: "", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "ref_key", global: true, description: "", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "class", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "style", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "tabindex", global: true, description: "", tags: [], required: false, type: "string | number", declarations: [], schema: { kind: "enum", type: "string | number", schema: ["string", "number"] } }, { name: "aria-activedescendant", global: true, description: "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-atomic", global: true, description: "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-autocomplete", global: true, description: `Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`, tags: [], required: false, type: '"none" | "inline" | "list" | "both" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "inline" | "list" | "both" | undefined', schema: ["undefined", '"none"', '"inline"', '"list"', '"both"'] } }, { name: "aria-busy", global: true, description: "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-checked", global: true, description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.', tags: [{ name: "see", text: "aria-pressed" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-colcount", global: true, description: "Defines the total number of columns in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colindex", global: true, description: "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colcount" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colspan", global: true, description: "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-controls", global: true, description: "Identifies the element (or elements) whose contents or presence are controlled by the current element.", tags: [{ name: "see", text: "aria-owns." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-current", global: true, description: "Indicates the element that represents the current item within a container or set of related elements.", tags: [], required: false, type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"page"', '"step"', '"location"', '"date"', '"time"'] } }, { name: "aria-describedby", global: true, description: "Identifies the element (or elements) that describes the object.", tags: [{ name: "see", text: "aria-labelledby" }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-details", global: true, description: "Identifies the element that provides a detailed, extended description for the object.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-disabled", global: true, description: "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.", tags: [{ name: "see", text: "aria-hidden" }, { name: "see", text: "aria-readonly." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-dropeffect", global: true, description: "Indicates what functions can be performed when a dragged object is released on the drop target.", tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: '"none" | "link" | "copy" | "execute" | "move" | "popup" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "link" | "copy" | "execute" | "move" | "popup" | undefined', schema: ["undefined", '"none"', '"link"', '"copy"', '"execute"', '"move"', '"popup"'] } }, { name: "aria-errormessage", global: true, description: "Identifies the element that provides an error message for the object.", tags: [{ name: "see", text: "aria-invalid" }, { name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-expanded", global: true, description: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-flowto", global: true, description: `Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-grabbed", global: true, description: `Indicates an element's "grabbed" state in a drag-and-drop operation.`, tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-haspopup", global: true, description: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", tags: [], required: false, type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"menu"', '"listbox"', '"tree"', '"grid"', '"dialog"'] } }, { name: "aria-hidden", global: true, description: "Indicates whether the element is exposed to an accessibility API.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-invalid", global: true, description: "Indicates the entered value does not conform to the format expected by the application.", tags: [{ name: "see", text: "aria-errormessage." }], required: false, type: 'Booleanish | "grammar" | "spelling" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "grammar" | "spelling" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"grammar"', '"spelling"'] } }, { name: "aria-keyshortcuts", global: true, description: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-label", global: true, description: "Defines a string value that labels the current element.", tags: [{ name: "see", text: "aria-labelledby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-labelledby", global: true, description: "Identifies the element (or elements) that labels the current element.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-level", global: true, description: "Defines the hierarchical level of an element within a structure.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-live", global: true, description: "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", tags: [], required: false, type: '"off" | "assertive" | "polite" | undefined', declarations: [], schema: { kind: "enum", type: '"off" | "assertive" | "polite" | undefined', schema: ["undefined", '"off"', '"assertive"', '"polite"'] } }, { name: "aria-modal", global: true, description: "Indicates whether an element is modal when displayed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiline", global: true, description: "Indicates whether a text box accepts multiple lines of input or only a single line.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiselectable", global: true, description: "Indicates that the user may select more than one item from the current selectable descendants.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-orientation", global: true, description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", tags: [], required: false, type: '"horizontal" | "vertical" | undefined', declarations: [], schema: { kind: "enum", type: '"horizontal" | "vertical" | undefined', schema: ["undefined", '"horizontal"', '"vertical"'] } }, { name: "aria-owns", global: true, description: `Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.`, tags: [{ name: "see", text: "aria-controls." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-placeholder", global: true, description: `Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-posinset", global: true, description: "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-setsize." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-pressed", global: true, description: 'Indicates the current "pressed" state of toggle buttons.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-readonly", global: true, description: "Indicates that the element is not editable, but is otherwise operable.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-relevant", global: true, description: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.", tags: [{ name: "see", text: "aria-atomic." }], required: false, type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', declarations: [], schema: { kind: "enum", type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', schema: ["undefined", '"additions"', '"additions removals"', '"additions text"', '"all"', '"removals"', '"removals additions"', '"removals text"', '"text"', '"text additions"', '"text removals"'] } }, { name: "aria-required", global: true, description: "Indicates that user input is required on the element before a form may be submitted.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-roledescription", global: true, description: "Defines a human-readable, author-localized description for the role of an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-rowcount", global: true, description: "Defines the total number of rows in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowindex", global: true, description: "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowcount" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowspan", global: true, description: "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-selected", global: true, description: 'Indicates the current "selected" state of various widgets.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-pressed." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-setsize", global: true, description: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-posinset." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-sort", global: true, description: "Indicates if items in a table or grid are sorted in ascending or descending order.", tags: [], required: false, type: '"none" | "ascending" | "descending" | "other" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "ascending" | "descending" | "other" | undefined', schema: ["undefined", '"none"', '"ascending"', '"descending"', '"other"'] } }, { name: "aria-valuemax", global: true, description: "Defines the maximum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuemin", global: true, description: "Defines the minimum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuenow", global: true, description: "Defines the current value for a range widget.", tags: [{ name: "see", text: "aria-valuetext." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuetext", global: true, description: "Defines the human readable text alternative of aria-valuenow for a range widget.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: false, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }], events: [], slots: [], exposed: [{ name: "disabled", type: "boolean | undefined", description: "", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "dragged", type: "boolean | undefined", description: "", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "focused", type: "boolean | undefined", description: "", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "pressed", type: "boolean | undefined", description: "", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "hover", type: "boolean | undefined", description: "", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/State/MDStateLayer.vue" });
function Ze(e, t, n = {}) {
  let a, i, s, r = true;
  const o = () => {
    r = true, s();
  };
  M(e, o, { flush: "sync", ...n });
  const u = typeof t == "function" ? t : t.get, c = typeof t == "function" ? void 0 : t.set, d = se((l, m) => (i = l, s = m, { get() {
    return r && (a = u(a), r = false), i(), a;
  }, set(f) {
    c?.(f);
  } }));
  return d.trigger = o, d;
}
function Z(e, t) {
  return je() ? (He(e, t), true) : false;
}
function et(e) {
  let t = false, n;
  const a = Le(true);
  return ((...i) => (t || (n = a.run(() => e(...i)), t = true), n));
}
const tt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const nt = (e) => e != null, at = Object.prototype.toString, rt = (e) => at.call(e) === "[object Object]", O = () => {
};
function it(...e) {
  if (e.length !== 1) return Fe(...e);
  const t = e[0];
  return typeof t == "function" ? Ve(se(() => ({ get: t, set: O }))) : F(t);
}
function oe(e, t) {
  function n(...a) {
    return new Promise((i, s) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(i).catch(s);
    });
  }
  return n;
}
const qe = (e) => e();
function st(e, t = {}) {
  let n, a, i = O;
  const s = (u) => {
    clearTimeout(u), i(), i = O;
  };
  let r;
  return (u) => {
    const c = w(e), d = w(t.maxWait);
    return n && s(n), c <= 0 || d !== void 0 && d <= 0 ? (a && (s(a), a = void 0), Promise.resolve(u())) : new Promise((l, m) => {
      i = t.rejectOnCancel ? m : l, r = u, d && !a && (a = setTimeout(() => {
        n && s(n), a = void 0, l(r());
      }, d)), n = setTimeout(() => {
        a && s(a), a = void 0, l(u());
      }, c);
    });
  };
}
function lt(...e) {
  let t = 0, n, a = true, i = O, s, r, o, u, c;
  !ke(e[0]) && typeof e[0] == "object" ? { delay: r, trailing: o = true, leading: u = true, rejectOnCancel: c = false } = e[0] : [r, o = true, u = true, c = false] = e;
  const d = () => {
    n && (clearTimeout(n), n = void 0, i(), i = O);
  };
  return (m) => {
    const f = w(r), b = Date.now() - t, k = () => s = m();
    return d(), f <= 0 ? (t = Date.now(), k()) : (b > f ? (t = Date.now(), (u || !a) && k()) : o && (s = new Promise((g, E) => {
      i = c ? E : g, n = setTimeout(() => {
        t = Date.now(), a = true, g(k()), d();
      }, Math.max(0, f - b));
    })), !u && !n && (n = setTimeout(() => a = true, f)), a = false, s);
  };
}
function ot(e = qe, t = {}) {
  const { initialState: n = "active" } = t, a = it(n === "active");
  function i() {
    a.value = false;
  }
  function s() {
    a.value = true;
  }
  const r = (...o) => {
    a.value && e(...o);
  };
  return { isActive: we(a), pause: i, resume: s, eventFilter: r };
}
function ge(e, t = false, n = "Timeout") {
  return new Promise((a, i) => {
    t ? setTimeout(i, e, n) : setTimeout(a, e);
  });
}
function j(e) {
  return Array.isArray(e) ? e : [e];
}
function Re(e) {
  return le();
}
function Ot(e, t = 1e4) {
  return se((n, a) => {
    let i = w(e), s;
    const r = () => setTimeout(() => {
      i = w(e), a();
    }, w(t));
    return Z(() => {
      clearTimeout(s);
    }), { get() {
      return n(), i;
    }, set(o) {
      i = o, a(), clearTimeout(s), s = r();
    } };
  });
}
function Se(e, t = 200, n = {}) {
  return oe(st(t, n), e);
}
function Ct(e, t = 200, n = {}) {
  const a = F(w(e)), i = Se(() => {
    a.value = e.value;
  }, t, n);
  return M(e, () => i()), we(a);
}
function dt(e, t = 200, n = false, a = true, i = false) {
  return oe(lt(t, n, a, i), e);
}
function ut(e, t, n = {}) {
  const { eventFilter: a = qe, ...i } = n;
  return M(e, oe(a, t), i);
}
function ne(e, t, n = {}) {
  const { eventFilter: a, initialState: i = "active", ...s } = n, { eventFilter: r, pause: o, resume: u, isActive: c } = ot(a, { initialState: i });
  return { stop: ut(e, t, { ...s, eventFilter: r }), pause: o, resume: u, isActive: c };
}
function Lt(e, t, ...[n]) {
  const { flush: a = "sync", deep: i = false, immediate: s = true, direction: r = "both", transform: o = {} } = n || {}, u = [], c = "ltr" in o && o.ltr || ((m) => m), d = "rtl" in o && o.rtl || ((m) => m);
  return (r === "both" || r === "ltr") && u.push(ne(e, (m) => {
    u.forEach((f) => f.pause()), t.value = c(m), u.forEach((f) => f.resume());
  }, { flush: a, deep: i, immediate: s })), (r === "both" || r === "rtl") && u.push(ne(t, (m) => {
    u.forEach((f) => f.pause()), e.value = d(m), u.forEach((f) => f.resume());
  }, { flush: a, deep: i, immediate: s })), () => {
    u.forEach((m) => m.stop());
  };
}
function ye(e, t, n = {}) {
  const { flush: a = "sync", deep: i = false, immediate: s = true } = n, r = j(t);
  return M(e, (o) => r.forEach((u) => u.value = o), { flush: a, deep: i, immediate: s });
}
function Ft(e, t) {
  Re() && $e(e, t);
}
function $(e, t = true, n) {
  Re() ? ie(e, n) : t ? e() : Q(e);
}
function ae(e, t = false) {
  function n(l, { flush: m = "sync", deep: f = false, timeout: b, throwOnTimeout: k } = {}) {
    let g = null;
    const E = [new Promise((S) => {
      g = M(e, (R) => {
        l(R) !== t && (g ? g() : Q(() => g?.()), S(R));
      }, { flush: m, deep: f, immediate: true });
    })];
    return b != null && E.push(ge(b, k).then(() => w(e)).finally(() => g?.())), Promise.race(E);
  }
  function a(l, m) {
    if (!ke(l)) return n((R) => R === l, m);
    const { flush: f = "sync", deep: b = false, timeout: k, throwOnTimeout: g } = m ?? {};
    let E = null;
    const S = [new Promise((R) => {
      E = M([e, l], ([P, C]) => {
        t !== (P === C) && (E ? E() : Q(() => E?.()), R(P));
      }, { flush: f, deep: b, immediate: true });
    })];
    return k != null && S.push(ge(k, g).then(() => w(e)).finally(() => (E?.(), w(e)))), Promise.race(S);
  }
  function i(l) {
    return n((m) => !!m, l);
  }
  function s(l) {
    return a(null, l);
  }
  function r(l) {
    return a(void 0, l);
  }
  function o(l) {
    return n(Number.isNaN, l);
  }
  function u(l, m) {
    return n((f) => {
      const b = Array.from(f);
      return b.includes(l) || b.includes(w(l));
    }, m);
  }
  function c(l) {
    return d(1, l);
  }
  function d(l = 1, m) {
    let f = -1;
    return n(() => (f += 1, f >= l), m);
  }
  return Array.isArray(w(e)) ? { toMatch: n, toContains: u, changed: c, changedTimes: d, get not() {
    return ae(e, !t);
  } } : { toMatch: n, toBe: a, toBeTruthy: i, toBeNull: s, toBeNaN: o, toBeUndefined: r, changed: c, changedTimes: d, get not() {
    return ae(e, !t);
  } };
}
function Vt(e) {
  return ae(e);
}
function ct(e, t, n) {
  return M(e, t, { ...n, immediate: true });
}
const A = tt ? window : void 0;
function q(e) {
  var t;
  const n = w(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function x(...e) {
  const t = (a, i, s, r) => (a.addEventListener(i, s, r), () => a.removeEventListener(i, s, r)), n = D(() => {
    const a = j(w(e[0])).filter((i) => i != null);
    return a.every((i) => typeof i != "string") ? a : void 0;
  });
  return ct(() => {
    var a, i;
    return [(a = (i = n.value) === null || i === void 0 ? void 0 : i.map((s) => q(s))) !== null && a !== void 0 ? a : [A].filter((s) => s != null), j(w(n.value ? e[1] : e[0])), j(Ke(n.value ? e[2] : e[1])), w(n.value ? e[3] : e[2])];
  }, ([a, i, s, r], o, u) => {
    if (!a?.length || !i?.length || !s?.length) return;
    const c = rt(r) ? { ...r } : r, d = a.flatMap((l) => i.flatMap((m) => s.map((f) => t(l, m, f, c))));
    u(() => {
      d.forEach((l) => l());
    });
  }, { flush: "post" });
}
function mt() {
  const e = I(false), t = le();
  return t && ie(() => {
    e.value = true;
  }, t), e;
}
function Ne(e) {
  const t = mt();
  return D(() => (t.value, !!e()));
}
function de(e, t, n = {}) {
  const { window: a = A, ...i } = n;
  let s;
  const r = Ne(() => a && "MutationObserver" in a), o = () => {
    s && (s.disconnect(), s = void 0);
  }, u = M(D(() => {
    const l = j(w(e)).map(q).filter(nt);
    return new Set(l);
  }), (l) => {
    o(), r.value && l.size && (s = new MutationObserver(t), l.forEach((m) => s.observe(m, i)));
  }, { immediate: true, flush: "post" }), c = () => s?.takeRecords(), d = () => {
    u(), o();
  };
  return Z(d), { isSupported: r, stop: d, takeRecords: c };
}
function Ie(e, t, n = {}) {
  const { window: a = A, document: i = a?.document, flush: s = "sync" } = n;
  if (!a || !i) return O;
  let r;
  const o = (d) => {
    r?.(), r = d;
  }, u = xe(() => {
    const d = q(e);
    if (d) {
      const { stop: l } = de(i, (m) => {
        m.map((f) => [...f.removedNodes]).flat().some((f) => f === d || f.contains(d)) && t(m);
      }, { window: a, childList: true, subtree: true });
      o(l);
    }
  }, { flush: s }), c = () => {
    u(), o();
  };
  return Z(c), c;
}
function ft(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => true;
}
function jt(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = true, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = true, n = e[0]);
  const { target: i = A, eventName: s = "keydown", passive: r = false, dedupe: o = false } = a, u = ft(t);
  return x(i, s, (d) => {
    d.repeat && w(o) || u(d) && n(d);
  }, r);
}
function pt(e = {}) {
  var t;
  const { window: n = A, deep: a = true, triggerOnRemoval: i = false } = e, s = (t = e.document) !== null && t !== void 0 ? t : n?.document, r = () => {
    let c = s?.activeElement;
    if (a) for (var d; c?.shadowRoot; ) c = c == null || (d = c.shadowRoot) === null || d === void 0 ? void 0 : d.activeElement;
    return c;
  }, o = I(), u = () => {
    o.value = r();
  };
  if (n) {
    const c = { capture: true, passive: true };
    x(n, "blur", (d) => {
      d.relatedTarget === null && u();
    }, c), x(n, "focus", u, c);
  }
  return i && Ie(o, u, { document: s }), u(), o;
}
const K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, J = "__vueuse_ssr_handlers__", ht = gt();
function gt() {
  return J in K || (K[J] = K[J] || {}), K[J];
}
function yt(e, t) {
  return ht[e] || t;
}
function bt(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const vt = { boolean: { read: (e) => e === "true", write: (e) => String(e) }, object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) }, number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) }, any: { read: (e) => e, write: (e) => String(e) }, string: { read: (e) => e, write: (e) => String(e) }, map: { read: (e) => new Map(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e.entries())) }, set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) }, date: { read: (e) => new Date(e), write: (e) => e.toISOString() } }, be = "vueuse-storage";
function Et(e, t, n, a = {}) {
  var i;
  const { flush: s = "pre", deep: r = true, listenToStorageChanges: o = true, writeDefaults: u = true, mergeDefaults: c = false, shallow: d, window: l = A, eventFilter: m, onError: f = (p) => {
    console.error(p);
  }, initOnMounted: b } = a, k = (d ? I : F)(typeof t == "function" ? t() : t), g = D(() => w(e));
  if (!n) try {
    n = yt("getDefaultStorage", () => A?.localStorage)();
  } catch (p) {
    f(p);
  }
  if (!n) return k;
  const E = w(t), S = bt(E), R = (i = a.serializer) !== null && i !== void 0 ? i : vt[S], { pause: P, resume: C } = ne(k, (p) => _(p), { flush: s, deep: r, eventFilter: m });
  M(g, () => z(), { flush: s });
  let H = false;
  const V = (p) => {
    b && !H || z(p);
  }, U = (p) => {
    b && !H || B(p);
  };
  l && o && (n instanceof Storage ? x(l, "storage", V, { passive: true }) : x(l, be, U)), b ? $(() => {
    H = true, z();
  }) : z();
  function h(p, v) {
    if (l) {
      const N = { key: g.value, oldValue: p, newValue: v, storageArea: n };
      l.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", N) : new CustomEvent(be, { detail: N }));
    }
  }
  function _(p) {
    try {
      const v = n.getItem(g.value);
      if (p == null) h(v, null), n.removeItem(g.value);
      else {
        const N = R.write(p);
        v !== N && (n.setItem(g.value, N), h(v, N));
      }
    } catch (v) {
      f(v);
    }
  }
  function T(p) {
    const v = p ? p.newValue : n.getItem(g.value);
    if (v == null) return u && E != null && n.setItem(g.value, R.write(E)), E;
    if (!p && c) {
      const N = R.read(v);
      return typeof c == "function" ? c(N, E) : S === "object" && !Array.isArray(N) ? { ...E, ...N } : N;
    } else return typeof v != "string" ? v : R.read(v);
  }
  function z(p) {
    if (!(p && p.storageArea !== n)) {
      if (p && p.key == null) {
        k.value = E;
        return;
      }
      if (!(p && p.key !== g.value)) {
        P();
        try {
          const v = R.write(k.value);
          (p === void 0 || p?.newValue !== v) && (k.value = T(p));
        } catch (v) {
          f(v);
        } finally {
          p ? Q(C) : C();
        }
      }
    }
  }
  function B(p) {
    z(p.detail);
  }
  return k;
}
function wt(e) {
  const t = le(), n = Ze(() => null, () => t.proxy.$el);
  return Ue(n.trigger), ie(n.trigger), n;
}
function Me(e, t, n = {}) {
  const { window: a = A, ...i } = n;
  let s;
  const r = Ne(() => a && "ResizeObserver" in a), o = () => {
    s && (s.disconnect(), s = void 0);
  }, u = M(D(() => {
    const d = w(e);
    return Array.isArray(d) ? d.map((l) => q(l)) : [q(d)];
  }), (d) => {
    if (o(), r.value && a) {
      s = new ResizeObserver(t);
      for (const l of d) l && s.observe(l, i);
    }
  }, { immediate: true, flush: "post" }), c = () => {
    o(), u();
  };
  return Z(c), { isSupported: r, stop: c };
}
function Ht(e, t = {}) {
  const { reset: n = true, windowResize: a = true, windowScroll: i = true, immediate: s = true, updateTiming: r = "sync" } = t, o = I(0), u = I(0), c = I(0), d = I(0), l = I(0), m = I(0), f = I(0), b = I(0);
  function k() {
    const E = q(e);
    if (!E) {
      n && (o.value = 0, u.value = 0, c.value = 0, d.value = 0, l.value = 0, m.value = 0, f.value = 0, b.value = 0);
      return;
    }
    const S = E.getBoundingClientRect();
    o.value = S.height, u.value = S.bottom, c.value = S.left, d.value = S.right, l.value = S.top, m.value = S.width, f.value = S.x, b.value = S.y;
  }
  function g() {
    r === "sync" ? k() : r === "next-frame" && requestAnimationFrame(() => k());
  }
  return Me(e, g), M(() => q(e), (E) => !E && g()), de(e, g, { attributeFilter: ["style", "class"] }), i && x("scroll", g, { capture: true, passive: true }), a && x("resize", g, { passive: true }), $(() => {
    s && g();
  }), { height: o, bottom: u, left: c, right: d, top: l, width: m, x: f, y: b, update: g };
}
function $t(e, t = {}) {
  const { delayEnter: n = 0, delayLeave: a = 0, triggerOnRemoval: i = false, window: s = A } = t, r = I(false);
  let o;
  const u = (c) => {
    const d = c ? n : a;
    o && (clearTimeout(o), o = void 0), d ? o = setTimeout(() => r.value = c, d) : r.value = c;
  };
  return s && (x(e, "mouseenter", () => u(true), { passive: true }), x(e, "mouseleave", () => u(false), { passive: true }), i && Ie(D(() => q(e)), () => u(false))), r;
}
function Ut(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: a = A, box: i = "content-box" } = n, s = D(() => {
    var l;
    return (l = q(e)) === null || l === void 0 || (l = l.namespaceURI) === null || l === void 0 ? void 0 : l.includes("svg");
  }), r = I(t.width), o = I(t.height), { stop: u } = Me(e, ([l]) => {
    const m = i === "border-box" ? l.borderBoxSize : i === "content-box" ? l.contentBoxSize : l.devicePixelContentBoxSize;
    if (a && s.value) {
      const f = q(e);
      if (f) {
        const b = f.getBoundingClientRect();
        r.value = b.width, o.value = b.height;
      }
    } else if (m) {
      const f = j(m);
      r.value = f.reduce((b, { inlineSize: k }) => b + k, 0), o.value = f.reduce((b, { blockSize: k }) => b + k, 0);
    } else r.value = l.contentRect.width, o.value = l.contentRect.height;
  }, n);
  $(() => {
    const l = q(e);
    l && (r.value = "offsetWidth" in l ? l.offsetWidth : t.width, o.value = "offsetHeight" in l ? l.offsetHeight : t.height);
  });
  const c = M(() => q(e), (l) => {
    r.value = l ? t.width : 0, o.value = l ? t.height : 0;
  });
  function d() {
    u(), c();
  }
  return { width: r, height: o, stop: d };
}
function kt(e, t = {}) {
  const { initialValue: n = false, focusVisible: a = false, preventScroll: i = false } = t, s = I(false), r = D(() => q(e)), o = { passive: true };
  x(r, "focus", (c) => {
    var d, l;
    (!a || !((d = (l = c.target).matches) === null || d === void 0) && d.call(l, ":focus-visible")) && (s.value = true);
  }, o), x(r, "blur", () => s.value = false, o);
  const u = D({ get: () => s.value, set(c) {
    var d, l;
    !c && s.value ? (d = r.value) === null || d === void 0 || d.blur() : c && !s.value && ((l = r.value) === null || l === void 0 || l.focus({ preventScroll: i }));
  } });
  return M(r, () => {
    u.value = n;
  }, { immediate: true, flush: "post" }), { focused: u };
}
const xt = "focusin", Dt = "focusout", qt = ":focus-within";
function Kt(e, t = {}) {
  const { window: n = A } = t, a = D(() => q(e)), i = I(false), s = D(() => i.value);
  if (!n || !pt(t).value) return { focused: s };
  const o = { passive: true };
  return x(a, xt, () => i.value = true, o), x(a, Dt, () => {
    var u, c, d;
    return i.value = (u = (c = a.value) === null || c === void 0 || (d = c.matches) === null || d === void 0 ? void 0 : d.call(c, qt)) !== null && u !== void 0 ? u : false;
  }, o), { focused: s };
}
const ve = 1;
function Jt(e, t = {}) {
  const { throttle: n = 0, idle: a = 200, onStop: i = O, onScroll: s = O, offset: r = { left: 0, right: 0, top: 0, bottom: 0 }, observe: o = { mutation: false }, eventListenerOptions: u = { capture: false, passive: true }, behavior: c = "auto", window: d = A, onError: l = (h) => {
    console.error(h);
  } } = t, m = typeof o == "boolean" ? { mutation: o } : o, f = I(0), b = I(0), k = D({ get() {
    return f.value;
  }, set(h) {
    E(h, void 0);
  } }), g = D({ get() {
    return b.value;
  }, set(h) {
    E(void 0, h);
  } });
  function E(h, _) {
    var T, z, B, p;
    if (!d) return;
    const v = w(e);
    if (!v) return;
    (T = v instanceof Document ? d.document.body : v) === null || T === void 0 || T.scrollTo({ top: (z = w(_)) !== null && z !== void 0 ? z : g.value, left: (B = w(h)) !== null && B !== void 0 ? B : k.value, behavior: w(c) });
    const N = (v == null || (p = v.document) === null || p === void 0 ? void 0 : p.documentElement) || v?.documentElement || v;
    k != null && (f.value = N.scrollLeft), g != null && (b.value = N.scrollTop);
  }
  const S = I(false), R = he({ left: true, right: false, top: true, bottom: false }), P = he({ left: false, right: false, top: false, bottom: false }), C = (h) => {
    S.value && (S.value = false, P.left = false, P.right = false, P.top = false, P.bottom = false, i(h));
  }, H = Se(C, n + a), V = (h) => {
    var _;
    if (!d) return;
    const T = (h == null || (_ = h.document) === null || _ === void 0 ? void 0 : _.documentElement) || h?.documentElement || q(h), { display: z, flexDirection: B, direction: p } = d.getComputedStyle(T), v = p === "rtl" ? -1 : 1, N = T.scrollLeft;
    P.left = N < f.value, P.right = N > f.value;
    const ce = Math.abs(N * v) <= (r.left || 0), me = Math.abs(N * v) + T.clientWidth >= T.scrollWidth - (r.right || 0) - ve;
    z === "flex" && B === "row-reverse" ? (R.left = me, R.right = ce) : (R.left = ce, R.right = me), f.value = N;
    let L = T.scrollTop;
    h === d.document && !L && (L = d.document.body.scrollTop), P.top = L < b.value, P.bottom = L > b.value;
    const fe = Math.abs(L) <= (r.top || 0), pe = Math.abs(L) + T.clientHeight >= T.scrollHeight - (r.bottom || 0) - ve;
    z === "flex" && B === "column-reverse" ? (R.top = pe, R.bottom = fe) : (R.top = fe, R.bottom = pe), b.value = L;
  }, U = (h) => {
    var _;
    d && (V((_ = h.target.documentElement) !== null && _ !== void 0 ? _ : h.target), S.value = true, H(h), s(h));
  };
  return x(e, "scroll", n ? dt(U, n, true, false) : U, u), $(() => {
    try {
      const h = w(e);
      if (!h) return;
      V(h);
    } catch (h) {
      l(h);
    }
  }), m?.mutation && e != null && e !== d && e !== document && de(e, () => {
    const h = w(e);
    h && V(h);
  }, { attributes: true, childList: true, subtree: true }), x(e, "scrollend", C, u), { x: k, y: g, isScrolling: S, arrivedState: R, directions: P, measure() {
    const h = w(e);
    d && h && V(h);
  } };
}
function Gt(e = wt()) {
  const t = I(), n = () => {
    const a = q(e);
    a && (t.value = a.parentElement);
  };
  return $(n), M(() => w(e), n), t;
}
function Yt(e, t, n = {}) {
  const { window: a = A } = n;
  return Et(e, t, a?.sessionStorage, n);
}
const y = /* @__PURE__ */ Object.create(null), Ae = 6e4, Pe = Ae * 60, ue = Pe * 24, Te = ue * 365.25;
y.year = y.yr = y.y = Te;
y.month = y.mo = y.mth = Te / 12;
y.week = y.wk = y.w = ue * 7;
y.day = y.d = ue;
y.hour = y.hr = y.h = Pe;
y.minute = y.min = y.m = Ae;
y.second = y.sec = y.s = 1e3;
y.millisecond = y.millisec = y.ms = 1;
y.microsecond = y.microsec = y.us = y.\u00B5s = 1e-3;
y.nanosecond = y.nanosec = y.ns = 1e-6;
y.group = ",";
y.decimal = ".";
y.placeholder = " _";
const Rt = /((?:\d{1,16}(?:\.\d{1,16})?|\.\d{1,16})(?:[eE][-+]?\d{1,4})?)\s?([\p{L}]{0,14})/gu;
W.unit = y;
function W(e = "", t = "ms") {
  let n = null, a;
  return String(e).replace(new RegExp(`(\\d)[${W.unit.placeholder}${W.unit.group}](\\d)`, "g"), "$1$2").replace(W.unit.decimal, ".").replace(Rt, (i, s, r) => {
    if (r) r = r.toLowerCase();
    else if (a) {
      for (const o in W.unit) if (W.unit[o] < a) {
        r = o;
        break;
      }
    } else r = t;
    a = r = W.unit[r] || W.unit[r.replace(/s$/, "")], r && (n = (n || 0) + s * r);
  }), n && n / (W.unit[t] || 1) * (e[0] === "-" ? -1 : 1);
}
let G;
const St = (e) => {
  const t = D(() => q(e)), n = F(false);
  x(t, ["mousedown", "dragstart", "touchstart"], ({ currentTarget: r }) => {
    r instanceof Element && r === q(t) && (!G || !r.contains(G)) && (G = r, n.value = true);
  }, { passive: true }), x(window, ["mouseleave", "mouseup", "drop", "dragend", "touchend", "touchcancel"], () => {
    G = void 0, n.value = false;
  });
  const a = F(false);
  let i;
  const s = () => {
    const o = q(t);
    return o instanceof Element ? W(getComputedStyle(o).getPropertyValue("transition-duration")) ?? 200 : 200;
  };
  return M(n, (r) => {
    r ? (a.value = r, clearTimeout(i), i = setTimeout(() => {
      a.value = n.value, i = void 0;
    }, s())) : i === void 0 && (a.value = n.value);
  }, { immediate: true }), { pressed: n, durationPressedState: a };
};
function Nt(e) {
  return typeof e == "symbol" || e instanceof Symbol;
}
function It(e) {
  return Nt(e) ? NaN : Number(e);
}
const Mt = () => new Promise(requestAnimationFrame), At = async ({ target: e, clientX: t, clientY: n }) => {
  const { left: a, top: i, right: s, bottom: r } = e.getBoundingClientRect(), o = t - a, u = n - i, c = Math.max(Math.hypot(a - t, i - n), Math.hypot(s - t, i - n), Math.hypot(a - t, r - n), Math.hypot(s - t, r - n)) * 2, d = document.createElement("span");
  d.classList.add("md-ripple"), d.style.setProperty("--md-ripple-y", `${u}px`), d.style.setProperty("--md-ripple-x", `${o}px`), d.style.setProperty("--md-ripple-diameter", `${c}px`), e.prepend(d);
  const l = 1e3;
  await Mt();
  const m = d.animate([{ "--md-ripple-opacity": 1, "--md-ripple-scale": 0 }, { "--md-ripple-opacity": 1, "--md-ripple-scale": 1 }, { "--md-ripple-opacity": 0, "--md-ripple-scale": 1 }], { duration: l });
  return m.addEventListener("finish", () => {
    d.remove();
  }), m;
};
let Y;
const Xt = (e) => {
  const t = D(() => q(e));
  let n;
  const a = async (r) => {
    const { target: o, clientX: u, clientY: c } = r;
    o instanceof Element && o === q(t) && (!Y || !o.contains(Y)) && (Y = o, n = await At({ clientX: u, clientY: c, target: o }));
  }, i = () => {
    if (Y = void 0, n?.effect instanceof KeyframeEffect) {
      const { target: r } = n.effect;
      if (r instanceof Element) {
        const u = It(n.effect.getTiming().duration);
        n.playbackRate = u / 200;
      }
    }
  };
  x(t, "pointerdown", ({ currentTarget: r, clientX: o, clientY: u }) => {
    a({ clientX: o, clientY: u, target: r });
  }, { passive: true }), x(t, ["pointerup", "pointerout", "pointerleave", "touchend", "touchcancel", "keyup", "touchmove", "pointermove"], () => {
    i();
  });
  const s = Ye(({ currentTarget: r, key: o }) => {
    (o === " " || o === "Enter") && r instanceof Element && a({ clientX: 0, clientY: 0, target: r });
  }, 500, { leading: true });
  x(t, "keydown", (r) => {
    s(r);
  });
}, Ee = 'input, select, textarea, button, [tabindex]:not([tabindex="-1"])', Pt = (e, t) => {
  const n = D(() => {
    const i = q(e);
    if (i) {
      if (t?.useTarget && i.matches(Ee)) return i;
      const s = i.querySelector(Ee);
      return s instanceof HTMLElement ? s : void 0;
    }
  }), { focused: a } = kt(n, t);
  return xe(() => {
    t?.initialValue && (a.value = !!n.value);
  }), { focused: a };
}, re = (e) => e !== "touch", Tt = et(() => {
  const e = F([]), t = D(() => e.value.at(-1)), n = () => {
    e.value = [];
  }, a = (s) => {
    e.value.includes(s) && i(s), e.value.push(s);
  }, i = (s) => {
    const r = e.value.indexOf(s);
    r >= 0 && e.value.splice(r, 1);
  };
  return x("pointerdown", (s) => {
    re(s.pointerType) || n();
  }, { passive: true, capture: true }), x(["touchstart", "pointercancel", "touchcancel", "dragstart", "drop"], n, { passive: true, capture: true }), { clear: n, push: a, remove: i, lastTarget: t };
}), zt = (e) => {
  const t = D(() => q(e)), { lastTarget: n, push: a, remove: i } = Tt();
  return x(t, "pointerenter", (s) => {
    if (!re(s.pointerType)) return;
    const { currentTarget: r } = s;
    r instanceof Element && r === t.value && a(r);
  }), x(t, "pointerleave", (s) => {
    if (!re(s.pointerType)) return;
    const { currentTarget: r } = s;
    r instanceof Element && i(r);
  }), M(t, (s, r) => {
    r instanceof Element && i(r);
  }, { immediate: true }), D(() => !!t.value && t.value === n.value);
}, te = (e, t = {}) => {
  const { pressed: n, durationPressedState: a } = St(e), i = zt(e), { focused: s } = Pt(e, { useTarget: true, focusVisible: true }), r = t.dragged ?? F(false);
  return t.hover && ye(i, t.hover), t.focused && ye(s, t.focused), { hover: i, focused: s, pressed: n, durationPressedState: a, dragged: r };
};
te.__docgenInfo = Object.assign({ displayName: te.name ?? te.__name }, { exportName: "useStateLayer", displayName: "useStateLayer", type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "HTMLElement | null", declarations: [], schema: { kind: "enum", type: "HTMLElement | null", schema: ["null", { kind: "object", type: "HTMLElement" }] } }, { name: "__@RefSymbol@991", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", declarations: [], schema: "true" }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/State/useStateLayer.ts" });
export {
  $t as A,
  Lt as B,
  Bt as M,
  Xt as a,
  x as b,
  Ft as c,
  q as d,
  Vt as e,
  Ut as f,
  Ht as g,
  j as h,
  et as i,
  Yt as j,
  zt as k,
  Pt as l,
  St as m,
  nt as n,
  jt as o,
  ee as p,
  Gt as q,
  Ot as r,
  Jt as s,
  Z as t,
  te as u,
  Kt as v,
  ne as w,
  Ze as x,
  wt as y,
  Ct as z
};
