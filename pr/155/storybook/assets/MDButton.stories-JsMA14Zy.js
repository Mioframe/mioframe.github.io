import { M as e } from "./MDButton-BBNn8FZd.js";
import { d as q, c as N, b as R, a as O, t as A, r as C, e as $ } from "./iframe-CPn3Tj5P.js";
import { _ as n, u as W } from "./useFocusIndicator-CFDqNYhk.js";
import "./typography-qm14BBLM.js";
import "./MDCircularProgressIndicator-oPw0XDYr.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./useStateLayer-DSup9Ls-.js";
import "./preload-helper-PPVm8Dsz.js";
const U = { id: "visual-md-button-target-hit", class: "visual-checker-backdrop" }, G = { id: "visual-md-button-target-hit-count" }, T = q({ __name: "MDButtonTargetHitVisualStory", setup(a) {
  const o = C(0), t = () => {
    o.value += 1;
  };
  return (r, l) => ($(), N("div", U, [R(e, { label: "OK", size: "extra-small", onClick: t }), O("output", G, A(o.value), 1)]));
} });
T.__docgenInfo = Object.assign({ displayName: T.name ?? T.__name }, { exportName: "default", displayName: "MDButtonTargetHitVisualStory", type: 1, props: [{ name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: false, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "key", global: true, description: "", tags: [], required: false, type: "PropertyKey", declarations: [], schema: { kind: "enum", type: "PropertyKey", schema: ["string", "number", "symbol"] } }, { name: "ref", global: true, description: "", tags: [], required: false, type: "VNodeRef", declarations: [], schema: { kind: "enum", type: "VNodeRef", schema: ["string", "Ref<any, any>", { kind: "event", type: "(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void" }] } }, { name: "ref_for", global: true, description: "", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "ref_key", global: true, description: "", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "class", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "style", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "tabindex", global: true, description: "", tags: [], required: false, type: "string | number", declarations: [], schema: { kind: "enum", type: "string | number", schema: ["string", "number"] } }, { name: "aria-activedescendant", global: true, description: "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-atomic", global: true, description: "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-autocomplete", global: true, description: `Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`, tags: [], required: false, type: '"none" | "inline" | "list" | "both" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "inline" | "list" | "both" | undefined', schema: ["undefined", '"none"', '"inline"', '"list"', '"both"'] } }, { name: "aria-busy", global: true, description: "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-checked", global: true, description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.', tags: [{ name: "see", text: "aria-pressed" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-colcount", global: true, description: "Defines the total number of columns in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colindex", global: true, description: "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colcount" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colspan", global: true, description: "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-controls", global: true, description: "Identifies the element (or elements) whose contents or presence are controlled by the current element.", tags: [{ name: "see", text: "aria-owns." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-current", global: true, description: "Indicates the element that represents the current item within a container or set of related elements.", tags: [], required: false, type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"page"', '"step"', '"location"', '"date"', '"time"'] } }, { name: "aria-describedby", global: true, description: "Identifies the element (or elements) that describes the object.", tags: [{ name: "see", text: "aria-labelledby" }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-details", global: true, description: "Identifies the element that provides a detailed, extended description for the object.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-disabled", global: true, description: "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.", tags: [{ name: "see", text: "aria-hidden" }, { name: "see", text: "aria-readonly." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-dropeffect", global: true, description: "Indicates what functions can be performed when a dragged object is released on the drop target.", tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: '"none" | "link" | "copy" | "execute" | "move" | "popup" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "link" | "copy" | "execute" | "move" | "popup" | undefined', schema: ["undefined", '"none"', '"link"', '"copy"', '"execute"', '"move"', '"popup"'] } }, { name: "aria-errormessage", global: true, description: "Identifies the element that provides an error message for the object.", tags: [{ name: "see", text: "aria-invalid" }, { name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-expanded", global: true, description: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-flowto", global: true, description: `Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-grabbed", global: true, description: `Indicates an element's "grabbed" state in a drag-and-drop operation.`, tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-haspopup", global: true, description: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", tags: [], required: false, type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"menu"', '"listbox"', '"tree"', '"grid"', '"dialog"'] } }, { name: "aria-hidden", global: true, description: "Indicates whether the element is exposed to an accessibility API.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-invalid", global: true, description: "Indicates the entered value does not conform to the format expected by the application.", tags: [{ name: "see", text: "aria-errormessage." }], required: false, type: 'Booleanish | "grammar" | "spelling" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "grammar" | "spelling" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"grammar"', '"spelling"'] } }, { name: "aria-keyshortcuts", global: true, description: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-label", global: true, description: "Defines a string value that labels the current element.", tags: [{ name: "see", text: "aria-labelledby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-labelledby", global: true, description: "Identifies the element (or elements) that labels the current element.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-level", global: true, description: "Defines the hierarchical level of an element within a structure.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-live", global: true, description: "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", tags: [], required: false, type: '"off" | "assertive" | "polite" | undefined', declarations: [], schema: { kind: "enum", type: '"off" | "assertive" | "polite" | undefined', schema: ["undefined", '"off"', '"assertive"', '"polite"'] } }, { name: "aria-modal", global: true, description: "Indicates whether an element is modal when displayed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiline", global: true, description: "Indicates whether a text box accepts multiple lines of input or only a single line.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiselectable", global: true, description: "Indicates that the user may select more than one item from the current selectable descendants.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-orientation", global: true, description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", tags: [], required: false, type: '"horizontal" | "vertical" | undefined', declarations: [], schema: { kind: "enum", type: '"horizontal" | "vertical" | undefined', schema: ["undefined", '"horizontal"', '"vertical"'] } }, { name: "aria-owns", global: true, description: `Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.`, tags: [{ name: "see", text: "aria-controls." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-placeholder", global: true, description: `Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-posinset", global: true, description: "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-setsize." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-pressed", global: true, description: 'Indicates the current "pressed" state of toggle buttons.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-readonly", global: true, description: "Indicates that the element is not editable, but is otherwise operable.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-relevant", global: true, description: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.", tags: [{ name: "see", text: "aria-atomic." }], required: false, type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', declarations: [], schema: { kind: "enum", type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', schema: ["undefined", '"additions"', '"additions removals"', '"additions text"', '"all"', '"removals"', '"removals additions"', '"removals text"', '"text"', '"text additions"', '"text removals"'] } }, { name: "aria-required", global: true, description: "Indicates that user input is required on the element before a form may be submitted.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-roledescription", global: true, description: "Defines a human-readable, author-localized description for the role of an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-rowcount", global: true, description: "Defines the total number of rows in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowindex", global: true, description: "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowcount" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowspan", global: true, description: "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-selected", global: true, description: 'Indicates the current "selected" state of various widgets.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-pressed." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-setsize", global: true, description: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-posinset." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-sort", global: true, description: "Indicates if items in a table or grid are sorted in ascending or descending order.", tags: [], required: false, type: '"none" | "ascending" | "descending" | "other" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "ascending" | "descending" | "other" | undefined', schema: ["undefined", '"none"', '"ascending"', '"descending"', '"other"'] } }, { name: "aria-valuemax", global: true, description: "Defines the maximum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuemin", global: true, description: "Defines the minimum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuenow", global: true, description: "Defines the current value for a range widget.", tags: [{ name: "see", text: "aria-valuetext." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuetext", global: true, description: "Defines the human readable text alternative of aria-valuenow for a range widget.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Button/MDButtonTargetHitVisualStory.vue" });
const re = { title: "Material 3/Components/Buttons/MDButton", component: e, args: { label: "Save", color: "filled" }, argTypes: { onClick: { action: "click" } }, parameters: { layout: "centered", docs: { description: { component: ["Checked against Material 3 `components/buttons/{overview,guidelines,specs,accessibility}`.", "", "**Props**: `variant` (`default` | `toggle`, default `default`), `color` (`elevated` | `filled` | `tonal` | `outlined` | `text`, default `filled`), `size` (`extra-small` | `small` | `medium` | `large` | `extra-large`, default `small`), `shape` (`round` | `square`, default `round`), `nativeType` (`button` | `submit` | `reset`, default `button`), `label` (required), `selected`, `disabled`, `loading` (project extension: `boolean | number`, `0` is an active loading state).", "", "**Slots**: `icon` (leading icon).", "", "**Emits**: `click` (native click, not synthesized).", "", "**Tokens**: checked against the `material3` MCP snapshot captured at `2026-06-30T05:53:04.916Z`. Exact official `--md-comp-button-*` properties are the public override surface. Each state and variant routes through component-local rendered variables for container, label, icon, outline, elevation, and state-layer color, while `MDStateLayer` continues to consume only the generic `--md-private-state-*` contract.", "", "**Typography**: the label uses the shared `MD_TYPESCALE` utility classes (no handwritten font CSS). `md.comp.button.<size>.label-text` is a composite official token with no exact decomposed `--md-comp-*` path, so it is documented here rather than split into invented font/size/line-height/weight/tracking fragments: `xsmall`/`small`\u2192label-large, `medium`\u2192title-medium, `large`\u2192headline-small, `xlarge`\u2192headline-large.", "", '**Toggle semantics**: `variant="toggle"` exposes controlled `aria-pressed` from `selected`. The consumer owns `selected` state; clicking only emits `click`.', "", '**Invalid combination**: `selected` with `variant="default"` is ignored (not rendered as selected) and logs a development warning.', "", "**Target area**: `extra-small` and `small` sizes keep a 48dp minimum hit target via `.md-button__target`.", "", "**Toggle shape**: selected toggle buttons morph container shape per size (round input shape morphs to the size's square corner token, square input shape morphs to a fully-rounded corner token); the pressed shape always takes precedence over the selected shape, and the selected shape is preserved while disabled (pressed cannot activate while disabled, so it never overrides selected there).", "", '**Unsupported: text toggle**: the verified Material Button specs state that toggle buttons do not use the text style, and the color matrix publishes no text selected/unselected routes. `color="text"` combined with `variant="toggle"` normalizes the applied variant to `"default"`: no `aria-pressed`, `selected` ignored, no selected shape or classes, and a development warning is logged. Ordinary `color="text"` `variant="default"` is unaffected.', "", "**Text spacing**: text buttons use the same per-size `leading-space`/`trailing-space` tokens as every other color style (no fixed small-size padding override)."].join(`
`) } } } }, F = () => ({ template: '<div class="visual-checker-backdrop"><story /></div>' }), d = { decorators: [F] }, i = { args: { variant: "toggle", selected: true, color: "tonal", label: "Bookmark" }, decorators: [F] }, c = { args: { variant: "toggle", selected: true, color: "text", label: "Bookmark" }, decorators: [F] }, u = { tags: ["visual"], render: () => ({ components: { MDButton: e, MDStateLayerForcedStateProvider: n }, template: `
      <div data-testid="visual-md-button-toggle-shapes" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton data-testid="toggle-round-selected" label="Round selected" variant="toggle" shape="round" selected color="tonal" />
          <MDButton data-testid="toggle-round-unselected" label="Round unselected" variant="toggle" shape="round" color="tonal" />
          <MDStateLayerForcedStateProvider pressed>
            <MDButton data-testid="toggle-round-pressed" class="md-state_pressed" label="Round pressed" shape="round" color="tonal" />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton data-testid="toggle-round-selected-pressed" class="md-state_pressed" label="Round selected pressed" variant="toggle" shape="round" selected color="tonal" />
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDButton data-testid="toggle-square-selected" label="Square selected" variant="toggle" shape="square" selected color="tonal" />
          <MDButton data-testid="toggle-square-unselected" label="Square unselected" variant="toggle" shape="square" color="tonal" />
        </div>
      </div>
    ` }) }, m = { tags: ["visual"], render: () => ({ components: { MDButton: e, MDStateLayerForcedStateProvider: n }, template: `
      <div data-testid="visual-md-button-toggle-interaction-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Unselected" variant="toggle" color="tonal">
            <template #icon>+</template>
          </MDButton>
          <MDButton label="Selected" variant="toggle" selected color="tonal">
            <template #icon>+</template>
          </MDButton>
          <MDStateLayerForcedStateProvider hovered>
            <MDButton class="md-state_hover" label="Selected hover" variant="toggle" selected color="tonal">
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider focused>
            <MDButton class="md-state_focused" label="Selected focus" variant="toggle" selected color="tonal">
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton class="md-state_pressed" label="Selected pressed" variant="toggle" selected color="tonal">
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDButton label="Disabled selected" variant="toggle" selected disabled color="tonal">
            <template #icon>+</template>
          </MDButton>
        </div>
      </div>
    ` }) }, p = { tags: ["visual"], render: () => ({ components: { MDButton: e }, template: `
      <div data-testid="visual-md-button-disabled-selected-outlined-text" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 2">
        <div class="visual-row"><span class="visual-gallery-label">Outlined unselected disabled</span><span class="visual-gallery-label">Outlined selected disabled</span></div>
        <div class="visual-row">
          <MDButton data-testid="outlined-unselected-disabled" label="Unselected" variant="toggle" disabled color="outlined" />
          <MDButton data-testid="outlined-selected-disabled" label="Selected" variant="toggle" selected disabled color="outlined" />
        </div>
        <div class="visual-row"><span class="visual-gallery-label">Text disabled</span><span aria-hidden="true"></span></div>
        <div class="visual-row">
          <MDButton data-testid="text-disabled" label="Disabled text" color="text" disabled />
          <span aria-hidden="true"></span>
        </div>
      </div>
    ` }) }, g = { decorators: [F], render: () => ({ components: { MDButton: e }, setup() {
  W();
}, template: `
      <div class="visual-checker-backdrop" style="position:fixed;inset:0;">
        <div id="visual-md-button-focus-indicator" style="position:absolute;inset:auto 12px 12px auto;">
        <MDButton id="storybook-md-button-focus" label="Focus target" color="filled" />
        </div>
      </div>
    ` }) }, b = { tags: ["visual"], render: () => ({ components: { MDButton: e }, template: `
      <div data-testid="visual-md-button-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Filled" color="filled"><template #icon>+</template></MDButton>
          <MDButton label="Outlined" color="outlined"><template #icon>+</template></MDButton>
          <MDButton label="Text" color="text"><template #icon>+</template></MDButton>
        </div>
        <div class="visual-row">
          <MDButton label="Tonal" color="tonal"><template #icon>+</template></MDButton>
          <MDButton label="Elevated" color="elevated"><template #icon>+</template></MDButton>
          <MDButton label="Disabled elevated" color="elevated" disabled><template #icon>+</template></MDButton>
        </div>
        <div class="visual-row">
          <MDButton label="Disabled filled" color="filled" disabled><template #icon>+</template></MDButton>
          <MDButton label="Disabled tonal" color="tonal" disabled><template #icon>+</template></MDButton>
          <MDButton label="Disabled outlined" color="outlined" disabled><template #icon>+</template></MDButton>
          <MDButton label="Disabled text" color="text" disabled><template #icon>+</template></MDButton>
        </div>
      </div>
    ` }) }, v = { tags: ["visual"], render: () => ({ components: { MDButton: e, MDStateLayerForcedStateProvider: n }, template: `
      <div data-testid="visual-md-button-interaction-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered><MDButton class="md-state_hover" label="Elevated hover" color="elevated" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDButton class="md-state_focused" label="Elevated focus" color="elevated" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDButton class="md-state_pressed" label="Elevated pressed" color="elevated" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered><MDButton class="md-state_hover" label="Filled hover" color="filled" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDButton class="md-state_focused" label="Filled focus" color="filled" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDButton class="md-state_pressed" label="Filled pressed" color="filled" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered><MDButton class="md-state_hover" label="Tonal hover" color="tonal" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDButton class="md-state_focused" label="Tonal focus" color="tonal" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDButton class="md-state_pressed" label="Tonal pressed" color="tonal" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered><MDButton class="md-state_hover" label="Outlined hover" color="outlined" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDButton class="md-state_focused" label="Outlined focus" color="outlined" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDButton class="md-state_pressed" label="Outlined pressed" color="outlined" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered><MDButton class="md-state_hover" label="Text hover" color="text" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDButton class="md-state_focused" label="Text focus" color="text" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDButton class="md-state_pressed" label="Text pressed" color="text" /></MDStateLayerForcedStateProvider>
        </div>
      </div>
    ` }) }, V = ["elevated", "filled", "tonal", "outlined", "text"], H = ["hover", "focus", "pressed"], y = { render: () => ({ components: { MDButton: e, MDStateLayerForcedStateProvider: n }, setup() {
  return { DEFAULT_ROLE_BUTTON_STYLES: V, DEFAULT_ROLE_STATES: H };
}, template: `
      <div data-testid="visual-md-button-default-role-matrix" class="visual-checker-backdrop">
        <div v-for="style in DEFAULT_ROLE_BUTTON_STYLES" :key="style" class="visual-row">
          <MDStateLayerForcedStateProvider
            v-for="state in DEFAULT_ROLE_STATES"
            :key="state"
            :hovered="state === 'hover'"
            :focused="state === 'focus'"
            :pressed="state === 'pressed'"
          >
            <MDButton
              :class="'md-state_' + (state === 'focus' ? 'focused' : state)"
              :label="style + ' ' + state"
              :color="style"
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    ` }) }, h = { render: () => ({ components: { MDButtonTargetHitVisualStory: T }, template: "<MDButtonTargetHitVisualStory />" }) }, f = { render: () => ({ components: { MDButton: e }, template: `
      <div data-testid="visual-md-button-size-typography" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton data-testid="typography-extra-small" label="Extra small" size="extra-small" />
          <MDButton data-testid="typography-small" label="Small" size="small" />
          <MDButton data-testid="typography-medium" label="Medium" size="medium" />
          <MDButton data-testid="typography-large" label="Large" size="large" />
          <MDButton data-testid="typography-extra-large" label="Extra large" size="extra-large" />
        </div>
      </div>
    ` }) }, Y = ["extra-small", "small", "medium", "large", "extra-large"], D = { render: () => ({ components: { MDButton: e, MDStateLayerForcedStateProvider: n }, setup() {
  return { BUTTON_SIZES: Y };
}, template: `
      <div data-testid="visual-md-button-size-geometry" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 6">
        <div class="visual-row"><span class="visual-gallery-heading">Size</span><span class="visual-gallery-label">Round</span><span class="visual-gallery-label">Square</span><span class="visual-gallery-label">Pressed</span><span class="visual-gallery-label">Selected round</span><span class="visual-gallery-label">Selected square</span><span class="visual-gallery-label">Outlined</span></div>
        <div v-for="size in BUTTON_SIZES" :key="size" class="visual-row">
          <span class="visual-gallery-label">{{ size }}</span>
          <MDButton :data-testid="\`geometry-\${size}-round\`" :label="size" :size="size" shape="round">
            <template #icon>+</template>
          </MDButton>
          <MDButton :data-testid="\`geometry-\${size}-square\`" :label="size" :size="size" shape="square">
            <template #icon>+</template>
          </MDButton>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton
              :data-testid="\`geometry-\${size}-pressed\`"
              class="md-state_pressed"
              :label="size"
              :size="size"
              shape="round"
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDButton
            :data-testid="\`geometry-\${size}-selected-round\`"
            :label="size"
            :size="size"
            shape="round"
            variant="toggle"
            selected
            color="tonal"
          >
            <template #icon>+</template>
          </MDButton>
          <MDButton
            :data-testid="\`geometry-\${size}-selected-square\`"
            :label="size"
            :size="size"
            shape="square"
            variant="toggle"
            selected
            color="tonal"
          >
            <template #icon>+</template>
          </MDButton>
          <MDButton :data-testid="\`geometry-\${size}-outlined\`" :label="size" :size="size" color="outlined" />
        </div>
      </div>
    ` }) }, M = { render: () => ({ components: { MDButton: e, MDStateLayerForcedStateProvider: n }, template: `
      <div data-testid="visual-md-button-disabled-state-precedence" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton data-testid="disabled-resting" label="Disabled outlined" color="outlined" disabled>
            <template #icon>+</template>
          </MDButton>
          <MDStateLayerForcedStateProvider hovered>
            <MDButton data-testid="disabled-hover" class="md-state_hover" label="Disabled outlined hover" color="outlined" disabled>
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDButton data-testid="disabled-focus" class="md-state_focused" label="Disabled outlined focus" color="outlined" disabled>
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton data-testid="disabled-pressed" class="md-state_pressed" label="Disabled outlined pressed" color="outlined" disabled>
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    ` }) }, S = { render: () => ({ components: { MDButton: e }, template: `
      <div data-testid="visual-md-button-text-spacing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton data-testid="text-spacing-small" label="Small" color="text" size="small" />
          <MDButton data-testid="text-spacing-medium" label="Medium" color="text" size="medium" />
          <MDButton data-testid="text-spacing-large" label="Large" color="text" size="large" />
          <MDButton data-testid="text-spacing-extra-large" label="Extra large" color="text" size="extra-large" />
          <MDButton data-testid="text-spacing-small-icon" label="With icon" color="text" size="small">
            <template #icon>+</template>
          </MDButton>
        </div>
      </div>
    ` }) }, B = { render: () => ({ components: { MDButton: e, MDStateLayerForcedStateProvider: n }, template: `
      <div data-testid="visual-md-button-token-routing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDButton
              data-testid="button-hover"
              class="md-state_hover"
              label="Hover"
              color="filled"
              style="
                --md-comp-button-filled-label-text-color: rgb(30 30 30);
                --md-comp-button-filled-hovered-label-text-color: rgb(0 128 0);
                --md-comp-button-filled-icon-color: rgb(90 20 150);
                --md-comp-button-filled-hovered-icon-color: rgb(255 0 0);
                --md-comp-button-filled-hovered-container-elevation: 0 0 0 3px rgb(12 34 56);
                --md-comp-button-filled-hovered-state-layer-color: rgb(255 0 200);
                --md-comp-button-filled-hovered-state-layer-opacity: 0.03;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDButton
              data-testid="button-focus"
              class="md-state_focused"
              label="Focus"
              color="filled"
              style="
                --md-comp-button-filled-focused-label-text-color: rgb(0 0 255);
                --md-comp-button-filled-focused-icon-color: rgb(255 165 0);
                --md-comp-button-filled-focused-container-elevation: 0 0 0 4px rgb(23 45 67);
                --md-comp-button-filled-focused-state-layer-color: rgb(0 128 0);
                --md-comp-button-filled-focused-state-layer-opacity: 0.17;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton
              data-testid="button-pressed"
              class="md-state_pressed"
              label="Pressed"
              color="filled"
              style="
                --md-comp-button-filled-pressed-label-text-color: rgb(255 0 255);
                --md-comp-button-filled-pressed-icon-color: rgb(0 255 255);
                --md-comp-button-filled-pressed-container-elevation: 0 0 0 5px rgb(34 56 78);
                --md-comp-button-filled-pressed-state-layer-color: rgb(0 0 255);
                --md-comp-button-filled-pressed-state-layer-opacity: 0.29;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDButton
              data-testid="button-outlined-hover"
              class="md-state_hover"
              label="Outlined hover"
              color="outlined"
              style="
                --md-comp-button-outlined-hovered-label-text-color: rgb(0 128 0);
                --md-comp-button-outlined-hovered-icon-color: rgb(255 0 0);
                --md-comp-button-outlined-hovered-outline-color: rgb(120 10 10);
                --md-comp-button-outlined-hovered-state-layer-color: rgb(255 0 200);
                --md-comp-button-outlined-hovered-state-layer-opacity: 0.03;
              "
            ><template #icon>+</template></MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDButton
              data-testid="button-outlined-focus"
              class="md-state_focused"
              label="Outlined focus"
              color="outlined"
              style="
                --md-comp-button-outlined-focused-label-text-color: rgb(0 0 255);
                --md-comp-button-outlined-focused-icon-color: rgb(255 165 0);
                --md-comp-button-outlined-focused-outline-color: rgb(10 120 10);
                --md-comp-button-outlined-focused-state-layer-color: rgb(0 128 0);
                --md-comp-button-outlined-focused-state-layer-opacity: 0.17;
              "
            ><template #icon>+</template></MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton
              data-testid="button-outlined-pressed"
              class="md-state_pressed"
              label="Outlined pressed"
              color="outlined"
              style="
                --md-comp-button-outlined-pressed-label-text-color: rgb(255 0 255);
                --md-comp-button-outlined-pressed-icon-color: rgb(0 255 255);
                --md-comp-button-outlined-pressed-outline-color: rgb(10 10 120);
                --md-comp-button-outlined-pressed-state-layer-color: rgb(0 0 255);
                --md-comp-button-outlined-pressed-state-layer-opacity: 0.29;
              "
            ><template #icon>+</template></MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDButton
              data-testid="button-tonal-hover"
              class="md-state_hover"
              label="Tonal hover"
              color="tonal"
              style="
                --md-comp-button-tonal-label-text-color: rgb(30 30 30);
                --md-comp-button-tonal-hovered-label-text-color: rgb(0 128 0);
                --md-comp-button-tonal-icon-color: rgb(90 20 150);
                --md-comp-button-tonal-hovered-icon-color: rgb(255 0 0);
                --md-comp-button-tonal-hovered-container-elevation: 0 0 0 3px rgb(12 34 56);
                --md-comp-button-tonal-hovered-state-layer-color: rgb(255 0 200);
                --md-comp-button-tonal-hovered-state-layer-opacity: 0.03;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDButton
              data-testid="button-tonal-focus"
              class="md-state_focused"
              label="Tonal focus"
              color="tonal"
              style="
                --md-comp-button-tonal-focused-label-text-color: rgb(0 0 255);
                --md-comp-button-tonal-focused-icon-color: rgb(255 165 0);
                --md-comp-button-tonal-focused-container-elevation: 0 0 0 4px rgb(23 45 67);
                --md-comp-button-tonal-focused-state-layer-color: rgb(0 128 0);
                --md-comp-button-tonal-focused-state-layer-opacity: 0.17;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton
              data-testid="button-tonal-pressed"
              class="md-state_pressed"
              label="Tonal pressed"
              color="tonal"
              style="
                --md-comp-button-tonal-pressed-label-text-color: rgb(255 0 255);
                --md-comp-button-tonal-pressed-icon-color: rgb(0 255 255);
                --md-comp-button-tonal-pressed-container-elevation: 0 0 0 5px rgb(34 56 78);
                --md-comp-button-tonal-pressed-state-layer-color: rgb(0 0 255);
                --md-comp-button-tonal-pressed-state-layer-opacity: 0.29;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDButton
              data-testid="button-elevated-hover"
              class="md-state_hover"
              label="Elevated hover"
              color="elevated"
              style="
                --md-comp-button-elevated-label-text-color: rgb(30 30 30);
                --md-comp-button-elevated-hovered-label-text-color: rgb(0 128 0);
                --md-comp-button-elevated-icon-color: rgb(90 20 150);
                --md-comp-button-elevated-hovered-icon-color: rgb(255 0 0);
                --md-comp-button-elevated-hovered-container-elevation: 0 0 0 3px rgb(12 34 56);
                --md-comp-button-elevated-hovered-state-layer-color: rgb(255 0 200);
                --md-comp-button-elevated-hovered-state-layer-opacity: 0.03;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDButton
              data-testid="button-elevated-focus"
              class="md-state_focused"
              label="Elevated focus"
              color="elevated"
              style="
                --md-comp-button-elevated-focused-label-text-color: rgb(0 0 255);
                --md-comp-button-elevated-focused-icon-color: rgb(255 165 0);
                --md-comp-button-elevated-focused-container-elevation: 0 0 0 4px rgb(23 45 67);
                --md-comp-button-elevated-focused-state-layer-color: rgb(0 128 0);
                --md-comp-button-elevated-focused-state-layer-opacity: 0.17;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton
              data-testid="button-elevated-pressed"
              class="md-state_pressed"
              label="Elevated pressed"
              color="elevated"
              style="
                --md-comp-button-elevated-pressed-label-text-color: rgb(255 0 255);
                --md-comp-button-elevated-pressed-icon-color: rgb(0 255 255);
                --md-comp-button-elevated-pressed-container-elevation: 0 0 0 5px rgb(34 56 78);
                --md-comp-button-elevated-pressed-state-layer-color: rgb(0 0 255);
                --md-comp-button-elevated-pressed-state-layer-opacity: 0.29;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDButton
              data-testid="button-text-hover"
              class="md-state_hover"
              label="Text hover"
              color="text"
              style="
                --md-comp-button-text-label-text-color: rgb(30 30 30);
                --md-comp-button-text-hovered-label-text-color: rgb(0 128 0);
                --md-comp-button-text-icon-color: rgb(90 20 150);
                --md-comp-button-text-hovered-icon-color: rgb(255 0 0);
                --md-comp-button-text-hovered-state-layer-color: rgb(255 0 200);
                --md-comp-button-text-hovered-state-layer-opacity: 0.03;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDButton
              data-testid="button-text-focus"
              class="md-state_focused"
              label="Text focus"
              color="text"
              style="
                --md-comp-button-text-focused-label-text-color: rgb(0 0 255);
                --md-comp-button-text-focused-icon-color: rgb(255 165 0);
                --md-comp-button-text-focused-state-layer-color: rgb(0 128 0);
                --md-comp-button-text-focused-state-layer-opacity: 0.17;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton
              data-testid="button-text-pressed"
              class="md-state_pressed"
              label="Text pressed"
              color="text"
              style="
                --md-comp-button-text-pressed-label-text-color: rgb(255 0 255);
                --md-comp-button-text-pressed-icon-color: rgb(0 255 255);
                --md-comp-button-text-pressed-state-layer-color: rgb(0 0 255);
                --md-comp-button-text-pressed-state-layer-opacity: 0.29;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    ` }) }, _ = ["elevated", "filled", "tonal", "outlined"], w = ["hover", "focus", "pressed"], x = { render: () => ({ components: { MDButton: e, MDStateLayerForcedStateProvider: n }, setup() {
  return { BUTTON_TOGGLE_STYLES: _, BUTTON_TOGGLE_INTERACTION_STATES: w };
}, template: `
      <div data-testid="visual-md-button-default-toggle-role-matrix" class="visual-checker-backdrop">
        <div v-for="style in BUTTON_TOGGLE_STYLES" :key="style" class="visual-row">
          <template v-for="selected in [false, true]" :key="String(selected)">
            <MDButton :data-testid="'default-button-toggle-' + style + '-' + (selected ? 'selected' : 'unselected') + '-resting'" :label="style + ' ' + (selected ? 'selected' : 'unselected') + ' resting'" variant="toggle" :selected="selected" :color="style"><template #icon>+</template></MDButton>
            <MDStateLayerForcedStateProvider
              v-for="state in BUTTON_TOGGLE_INTERACTION_STATES"
              :key="state"
              :hovered="state === 'hover'"
              :focused="state === 'focus'"
              :pressed="state === 'pressed'"
            >
              <MDButton :data-testid="'default-button-toggle-' + style + '-' + (selected ? 'selected' : 'unselected') + '-' + state" :class="'md-state_' + (state === 'focus' ? 'focused' : state)" :label="style + ' ' + (selected ? 'selected' : 'unselected') + ' ' + state" variant="toggle" :selected="selected" :color="style"><template #icon>+</template></MDButton>
            </MDStateLayerForcedStateProvider>
          </template>
        </div>
      </div>
    ` }) }, E = { elevated: { selected: { focus: { label: "rgb(201 254 199)", icon: "rgb(254 209 2)", stateLayerColor: "rgb(2 198 161)" }, pressed: { label: "rgb(202 253 198)", icon: "rgb(253 208 4)", stateLayerColor: "rgb(4 196 162)" } }, unselected: { focus: { label: "rgb(189 211 254)", icon: "rgb(254 121 179)", stateLayerColor: "rgb(149 82 1)" }, pressed: { label: "rgb(188 212 253)", icon: "rgb(253 122 178)", stateLayerColor: "rgb(148 84 2)" } }, focusOpacity: "0.19", pressedOpacity: "0.29" }, filled: { selected: { focus: { label: "rgb(21 22 23)", icon: "rgb(41 42 43)", stateLayerColor: "rgb(179 2 3)" }, pressed: { label: "rgb(24 25 26)", icon: "rgb(44 45 46)", stateLayerColor: "rgb(178 4 6)" } }, unselected: { focus: { label: "rgb(51 52 53)", icon: "rgb(71 72 73)", stateLayerColor: "rgb(2 3 179)" }, pressed: { label: "rgb(54 55 56)", icon: "rgb(74 75 76)", stateLayerColor: "rgb(4 6 178)" } }, focusOpacity: "0.21", pressedOpacity: "0.31" }, tonal: { selected: { focus: { label: "rgb(254 239 198)", icon: "rgb(254 253 2)", stateLayerColor: "rgb(199 102 3)" }, pressed: { label: "rgb(253 238 196)", icon: "rgb(253 251 4)", stateLayerColor: "rgb(198 104 6)" } }, unselected: { focus: { label: "rgb(198 254 239)", icon: "rgb(2 253 254)", stateLayerColor: "rgb(3 119 199)" }, pressed: { label: "rgb(196 253 238)", icon: "rgb(4 251 253)", stateLayerColor: "rgb(6 118 198)" } }, focusOpacity: "0.23", pressedOpacity: "0.33" }, outlined: { selected: { focus: { label: "rgb(239 198 254)", icon: "rgb(254 2 149)", stateLayerColor: "rgb(149 3 254)" }, pressed: { label: "rgb(238 196 253)", icon: "rgb(253 4 148)", stateLayerColor: "rgb(148 6 253)" } }, unselected: { focus: { label: "rgb(209 208 207)", icon: "rgb(2 253 119)", stateLayerColor: "rgb(3 89 254)" }, pressed: { label: "rgb(206 205 204)", icon: "rgb(4 251 118)", stateLayerColor: "rgb(6 88 253)" } }, focusOpacity: "0.25", pressedOpacity: "0.35" } }, z = { elevated: { selected: { container: "rgb(10 60 10)", restingLabel: "rgb(11 61 12)", restingIcon: "rgb(13 62 14)", label: "rgb(200 255 200)", icon: "rgb(255 210 0)", stateLayerColor: "rgb(0 200 160)" }, unselected: { container: "rgb(10 10 90)", restingLabel: "rgb(11 12 91)", restingIcon: "rgb(13 14 92)", label: "rgb(190 210 255)", icon: "rgb(255 120 180)", stateLayerColor: "rgb(150 80 0)" }, hoverOpacity: "0.09" }, filled: { selected: { container: "rgb(120 20 20)", restingLabel: "rgb(121 21 22)", restingIcon: "rgb(122 23 24)", label: "rgb(20 20 20)", icon: "rgb(40 40 40)", stateLayerColor: "rgb(180 0 0)" }, unselected: { container: "rgb(20 20 120)", restingLabel: "rgb(21 22 121)", restingIcon: "rgb(23 24 122)", label: "rgb(50 50 50)", icon: "rgb(70 70 70)", stateLayerColor: "rgb(0 0 180)" }, hoverOpacity: "0.11" }, tonal: { selected: { container: "rgb(90 60 10)", restingLabel: "rgb(91 61 12)", restingIcon: "rgb(92 63 14)", label: "rgb(255 240 200)", icon: "rgb(255 255 0)", stateLayerColor: "rgb(200 100 0)" }, unselected: { container: "rgb(10 90 60)", restingLabel: "rgb(11 91 62)", restingIcon: "rgb(13 92 64)", label: "rgb(200 255 240)", icon: "rgb(0 255 255)", stateLayerColor: "rgb(0 120 200)" }, hoverOpacity: "0.13" }, outlined: { selected: { container: "rgb(60 10 90)", restingLabel: "rgb(61 12 91)", restingIcon: "rgb(63 14 92)", label: "rgb(240 200 255)", icon: "rgb(255 0 150)", stateLayerColor: "rgb(150 0 255)", outline: "rgb(200 0 120)" }, unselected: { restingLabel: "rgb(211 212 213)", restingIcon: "rgb(2 251 121)", label: "rgb(210 210 210)", icon: "rgb(0 255 120)", stateLayerColor: "rgb(0 90 255)", outline: "rgb(90 60 0)" }, hoverOpacity: "0.15" } }, j = (a, o) => {
  const t = z[a][o], r = {};
  return t.container !== void 0 && (r[`--md-comp-button-${a}-${o}-container-color`] = t.container), r[`--md-comp-button-${a}-${o}-label-text-color`] = t.restingLabel, r[`--md-comp-button-${a}-${o}-icon-color`] = t.restingIcon, t.outline !== void 0 && (r[`--md-comp-button-${a}-${o}-outline-color`] = t.outline), r;
}, K = (a, o, t) => {
  const r = z[a], l = t === "hover" ? r[o] : E[a][o][t], I = t === "hover" ? r.hoverOpacity : E[a][`${t}Opacity`], s = t === "hover" ? "hovered" : t === "focus" ? "focused" : "pressed";
  return { [`--md-comp-button-${a}-${s}-state-layer-opacity`]: I, [`--md-comp-button-${a}-${o}-${s}-label-text-color`]: l.label, [`--md-comp-button-${a}-${o}-${s}-icon-color`]: l.icon, [`--md-comp-button-${a}-${o}-${s}-state-layer-color`]: l.stateLayerColor };
}, L = { render: () => ({ components: { MDButton: e, MDStateLayerForcedStateProvider: n }, setup() {
  return { BUTTON_TOGGLE_STYLES: _, BUTTON_TOGGLE_INTERACTION_STATES: w, buttonToggleRestingStyle: j, buttonToggleInteractionStyle: K };
}, template: `
      <div data-testid="visual-md-button-toggle-token-routing" class="visual-checker-backdrop">
        <div v-for="style in BUTTON_TOGGLE_STYLES" :key="style" class="visual-row">
          <MDButton
            :data-testid="\`toggle-token-\${style}-selected-resting\`"
            :label="\`\${style} selected\`"
            variant="toggle"
            selected
            :color="style"
            :style="buttonToggleRestingStyle(style, 'selected')"
          >
            <template #icon>+</template>
          </MDButton>
          <MDButton
            :data-testid="\`toggle-token-\${style}-unselected-resting\`"
            :label="\`\${style} unselected\`"
            variant="toggle"
            :color="style"
            :style="buttonToggleRestingStyle(style, 'unselected')"
          >
            <template #icon>+</template>
          </MDButton>
          <MDStateLayerForcedStateProvider
            v-for="state in BUTTON_TOGGLE_INTERACTION_STATES"
            :key="'selected-' + state"
            :hovered="state === 'hover'"
            :focused="state === 'focus'"
            :pressed="state === 'pressed'"
          >
            <MDButton
              :data-testid="\`toggle-token-\${style}-selected-\${state}\`"
              :class="'md-state_' + (state === 'focus' ? 'focused' : state)"
              :label="\`\${style} selected \${state}\`"
              variant="toggle"
              selected
              :color="style"
              :style="buttonToggleInteractionStyle(style, 'selected', state)"
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider
            v-for="state in BUTTON_TOGGLE_INTERACTION_STATES"
            :key="'unselected-' + state"
            :hovered="state === 'hover'"
            :focused="state === 'focus'"
            :pressed="state === 'pressed'"
          >
            <MDButton
              :data-testid="\`toggle-token-\${style}-unselected-\${state}\`"
              :class="'md-state_' + (state === 'focus' ? 'focused' : state)"
              :label="\`\${style} unselected \${state}\`"
              variant="toggle"
              :color="style"
              :style="buttonToggleInteractionStyle(style, 'unselected', state)"
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    ` }) }, k = { render: () => ({ components: { MDButton: e }, template: `
      <div data-testid="visual-md-button-loading-color-routing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton
            data-testid="button-resting-color"
            label="Loading"
            color="filled"
            style="
              --md-comp-button-filled-label-text-color: rgb(12 34 56);
              --md-comp-button-filled-icon-color: rgb(90 12 180);
            "
          >
            <template #icon>+</template>
          </MDButton>
          <MDButton
            data-testid="button-loading-color"
            label="Loading"
            color="filled"
            loading
            style="
              --md-comp-button-filled-label-text-color: rgb(12 34 56);
              --md-comp-button-filled-icon-color: rgb(90 12 180);
            "
          >
            <template #icon>+</template>
          </MDButton>
        </div>
      </div>
    ` }) }, P = { render: () => ({ components: { MDButton: e }, template: `
      <div data-testid="visual-md-button-targets" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="XS target" size="extra-small" />
          <MDButton label="S target" size="small" />
        </div>
      </div>
    ` }) };
d.parameters = { ...d.parameters, docs: { ...d.parameters?.docs, source: { originalSource: `{
  decorators: [withCheckerboard]
}`, ...d.parameters?.docs?.source } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
  args: {
    variant: 'toggle',
    selected: true,
    color: 'tonal',
    label: 'Bookmark'
  },
  decorators: [withCheckerboard]
}`, ...i.parameters?.docs?.source } } };
c.parameters = { ...c.parameters, docs: { ...c.parameters?.docs, source: { originalSource: `{
  args: {
    variant: 'toggle',
    selected: true,
    color: 'text',
    label: 'Bookmark'
  },
  decorators: [withCheckerboard]
}`, ...c.parameters?.docs?.source } } };
u.parameters = { ...u.parameters, docs: { ...u.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton,
      MDStateLayerForcedStateProvider
    },
    template: \`
      <div data-testid="visual-md-button-toggle-shapes" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton data-testid="toggle-round-selected" label="Round selected" variant="toggle" shape="round" selected color="tonal" />
          <MDButton data-testid="toggle-round-unselected" label="Round unselected" variant="toggle" shape="round" color="tonal" />
          <MDStateLayerForcedStateProvider pressed>
            <MDButton data-testid="toggle-round-pressed" class="md-state_pressed" label="Round pressed" shape="round" color="tonal" />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton data-testid="toggle-round-selected-pressed" class="md-state_pressed" label="Round selected pressed" variant="toggle" shape="round" selected color="tonal" />
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDButton data-testid="toggle-square-selected" label="Square selected" variant="toggle" shape="square" selected color="tonal" />
          <MDButton data-testid="toggle-square-unselected" label="Square unselected" variant="toggle" shape="square" color="tonal" />
        </div>
      </div>
    \`
  })
}`, ...u.parameters?.docs?.source } } };
m.parameters = { ...m.parameters, docs: { ...m.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton,
      MDStateLayerForcedStateProvider
    },
    template: \`
      <div data-testid="visual-md-button-toggle-interaction-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Unselected" variant="toggle" color="tonal">
            <template #icon>+</template>
          </MDButton>
          <MDButton label="Selected" variant="toggle" selected color="tonal">
            <template #icon>+</template>
          </MDButton>
          <MDStateLayerForcedStateProvider hovered>
            <MDButton class="md-state_hover" label="Selected hover" variant="toggle" selected color="tonal">
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider focused>
            <MDButton class="md-state_focused" label="Selected focus" variant="toggle" selected color="tonal">
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton class="md-state_pressed" label="Selected pressed" variant="toggle" selected color="tonal">
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDButton label="Disabled selected" variant="toggle" selected disabled color="tonal">
            <template #icon>+</template>
          </MDButton>
        </div>
      </div>
    \`
  })
}`, ...m.parameters?.docs?.source } } };
p.parameters = { ...p.parameters, docs: { ...p.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="visual-md-button-disabled-selected-outlined-text" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 2">
        <div class="visual-row"><span class="visual-gallery-label">Outlined unselected disabled</span><span class="visual-gallery-label">Outlined selected disabled</span></div>
        <div class="visual-row">
          <MDButton data-testid="outlined-unselected-disabled" label="Unselected" variant="toggle" disabled color="outlined" />
          <MDButton data-testid="outlined-selected-disabled" label="Selected" variant="toggle" selected disabled color="outlined" />
        </div>
        <div class="visual-row"><span class="visual-gallery-label">Text disabled</span><span aria-hidden="true"></span></div>
        <div class="visual-row">
          <MDButton data-testid="text-disabled" label="Disabled text" color="text" disabled />
          <span aria-hidden="true"></span>
        </div>
      </div>
    \`
  })
}`, ...p.parameters?.docs?.source } } };
g.parameters = { ...g.parameters, docs: { ...g.parameters?.docs, source: { originalSource: `{
  decorators: [withCheckerboard],
  render: () => ({
    components: {
      MDButton
    },
    setup() {
      useFocusIndicator();
    },
    template: \`
      <div class="visual-checker-backdrop" style="position:fixed;inset:0;">
        <div id="visual-md-button-focus-indicator" style="position:absolute;inset:auto 12px 12px auto;">
        <MDButton id="storybook-md-button-focus" label="Focus target" color="filled" />
        </div>
      </div>
    \`
  })
}`, ...g.parameters?.docs?.source } } };
b.parameters = { ...b.parameters, docs: { ...b.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="visual-md-button-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="Filled" color="filled"><template #icon>+</template></MDButton>
          <MDButton label="Outlined" color="outlined"><template #icon>+</template></MDButton>
          <MDButton label="Text" color="text"><template #icon>+</template></MDButton>
        </div>
        <div class="visual-row">
          <MDButton label="Tonal" color="tonal"><template #icon>+</template></MDButton>
          <MDButton label="Elevated" color="elevated"><template #icon>+</template></MDButton>
          <MDButton label="Disabled elevated" color="elevated" disabled><template #icon>+</template></MDButton>
        </div>
        <div class="visual-row">
          <MDButton label="Disabled filled" color="filled" disabled><template #icon>+</template></MDButton>
          <MDButton label="Disabled tonal" color="tonal" disabled><template #icon>+</template></MDButton>
          <MDButton label="Disabled outlined" color="outlined" disabled><template #icon>+</template></MDButton>
          <MDButton label="Disabled text" color="text" disabled><template #icon>+</template></MDButton>
        </div>
      </div>
    \`
  })
}`, ...b.parameters?.docs?.source } } };
v.parameters = { ...v.parameters, docs: { ...v.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDButton,
      MDStateLayerForcedStateProvider
    },
    template: \`
      <div data-testid="visual-md-button-interaction-states" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered><MDButton class="md-state_hover" label="Elevated hover" color="elevated" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDButton class="md-state_focused" label="Elevated focus" color="elevated" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDButton class="md-state_pressed" label="Elevated pressed" color="elevated" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered><MDButton class="md-state_hover" label="Filled hover" color="filled" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDButton class="md-state_focused" label="Filled focus" color="filled" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDButton class="md-state_pressed" label="Filled pressed" color="filled" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered><MDButton class="md-state_hover" label="Tonal hover" color="tonal" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDButton class="md-state_focused" label="Tonal focus" color="tonal" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDButton class="md-state_pressed" label="Tonal pressed" color="tonal" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered><MDButton class="md-state_hover" label="Outlined hover" color="outlined" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDButton class="md-state_focused" label="Outlined focus" color="outlined" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDButton class="md-state_pressed" label="Outlined pressed" color="outlined" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered><MDButton class="md-state_hover" label="Text hover" color="text" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDButton class="md-state_focused" label="Text focus" color="text" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDButton class="md-state_pressed" label="Text pressed" color="text" /></MDStateLayerForcedStateProvider>
        </div>
      </div>
    \`
  })
}`, ...v.parameters?.docs?.source } } };
y.parameters = { ...y.parameters, docs: { ...y.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton,
      MDStateLayerForcedStateProvider
    },
    setup() {
      return {
        DEFAULT_ROLE_BUTTON_STYLES,
        DEFAULT_ROLE_STATES
      };
    },
    template: \`
      <div data-testid="visual-md-button-default-role-matrix" class="visual-checker-backdrop">
        <div v-for="style in DEFAULT_ROLE_BUTTON_STYLES" :key="style" class="visual-row">
          <MDStateLayerForcedStateProvider
            v-for="state in DEFAULT_ROLE_STATES"
            :key="state"
            :hovered="state === 'hover'"
            :focused="state === 'focus'"
            :pressed="state === 'pressed'"
          >
            <MDButton
              :class="'md-state_' + (state === 'focus' ? 'focused' : state)"
              :label="style + ' ' + state"
              :color="style"
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    \`
  })
}`, ...y.parameters?.docs?.source } } };
h.parameters = { ...h.parameters, docs: { ...h.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButtonTargetHitVisualStory
    },
    template: '<MDButtonTargetHitVisualStory />'
  })
}`, ...h.parameters?.docs?.source } } };
f.parameters = { ...f.parameters, docs: { ...f.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="visual-md-button-size-typography" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton data-testid="typography-extra-small" label="Extra small" size="extra-small" />
          <MDButton data-testid="typography-small" label="Small" size="small" />
          <MDButton data-testid="typography-medium" label="Medium" size="medium" />
          <MDButton data-testid="typography-large" label="Large" size="large" />
          <MDButton data-testid="typography-extra-large" label="Extra large" size="extra-large" />
        </div>
      </div>
    \`
  })
}`, ...f.parameters?.docs?.source } } };
D.parameters = { ...D.parameters, docs: { ...D.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton,
      MDStateLayerForcedStateProvider
    },
    setup() {
      return {
        BUTTON_SIZES
      };
    },
    template: \`
      <div data-testid="visual-md-button-size-geometry" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 6">
        <div class="visual-row"><span class="visual-gallery-heading">Size</span><span class="visual-gallery-label">Round</span><span class="visual-gallery-label">Square</span><span class="visual-gallery-label">Pressed</span><span class="visual-gallery-label">Selected round</span><span class="visual-gallery-label">Selected square</span><span class="visual-gallery-label">Outlined</span></div>
        <div v-for="size in BUTTON_SIZES" :key="size" class="visual-row">
          <span class="visual-gallery-label">{{ size }}</span>
          <MDButton :data-testid="\\\`geometry-\\\${size}-round\\\`" :label="size" :size="size" shape="round">
            <template #icon>+</template>
          </MDButton>
          <MDButton :data-testid="\\\`geometry-\\\${size}-square\\\`" :label="size" :size="size" shape="square">
            <template #icon>+</template>
          </MDButton>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton
              :data-testid="\\\`geometry-\\\${size}-pressed\\\`"
              class="md-state_pressed"
              :label="size"
              :size="size"
              shape="round"
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDButton
            :data-testid="\\\`geometry-\\\${size}-selected-round\\\`"
            :label="size"
            :size="size"
            shape="round"
            variant="toggle"
            selected
            color="tonal"
          >
            <template #icon>+</template>
          </MDButton>
          <MDButton
            :data-testid="\\\`geometry-\\\${size}-selected-square\\\`"
            :label="size"
            :size="size"
            shape="square"
            variant="toggle"
            selected
            color="tonal"
          >
            <template #icon>+</template>
          </MDButton>
          <MDButton :data-testid="\\\`geometry-\\\${size}-outlined\\\`" :label="size" :size="size" color="outlined" />
        </div>
      </div>
    \`
  })
}`, ...D.parameters?.docs?.source } } };
M.parameters = { ...M.parameters, docs: { ...M.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton,
      MDStateLayerForcedStateProvider
    },
    template: \`
      <div data-testid="visual-md-button-disabled-state-precedence" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton data-testid="disabled-resting" label="Disabled outlined" color="outlined" disabled>
            <template #icon>+</template>
          </MDButton>
          <MDStateLayerForcedStateProvider hovered>
            <MDButton data-testid="disabled-hover" class="md-state_hover" label="Disabled outlined hover" color="outlined" disabled>
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDButton data-testid="disabled-focus" class="md-state_focused" label="Disabled outlined focus" color="outlined" disabled>
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton data-testid="disabled-pressed" class="md-state_pressed" label="Disabled outlined pressed" color="outlined" disabled>
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    \`
  })
}`, ...M.parameters?.docs?.source } } };
S.parameters = { ...S.parameters, docs: { ...S.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="visual-md-button-text-spacing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton data-testid="text-spacing-small" label="Small" color="text" size="small" />
          <MDButton data-testid="text-spacing-medium" label="Medium" color="text" size="medium" />
          <MDButton data-testid="text-spacing-large" label="Large" color="text" size="large" />
          <MDButton data-testid="text-spacing-extra-large" label="Extra large" color="text" size="extra-large" />
          <MDButton data-testid="text-spacing-small-icon" label="With icon" color="text" size="small">
            <template #icon>+</template>
          </MDButton>
        </div>
      </div>
    \`
  })
}`, ...S.parameters?.docs?.source } } };
B.parameters = { ...B.parameters, docs: { ...B.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton,
      MDStateLayerForcedStateProvider
    },
    template: \`
      <div data-testid="visual-md-button-token-routing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDButton
              data-testid="button-hover"
              class="md-state_hover"
              label="Hover"
              color="filled"
              style="
                --md-comp-button-filled-label-text-color: rgb(30 30 30);
                --md-comp-button-filled-hovered-label-text-color: rgb(0 128 0);
                --md-comp-button-filled-icon-color: rgb(90 20 150);
                --md-comp-button-filled-hovered-icon-color: rgb(255 0 0);
                --md-comp-button-filled-hovered-container-elevation: 0 0 0 3px rgb(12 34 56);
                --md-comp-button-filled-hovered-state-layer-color: rgb(255 0 200);
                --md-comp-button-filled-hovered-state-layer-opacity: 0.03;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDButton
              data-testid="button-focus"
              class="md-state_focused"
              label="Focus"
              color="filled"
              style="
                --md-comp-button-filled-focused-label-text-color: rgb(0 0 255);
                --md-comp-button-filled-focused-icon-color: rgb(255 165 0);
                --md-comp-button-filled-focused-container-elevation: 0 0 0 4px rgb(23 45 67);
                --md-comp-button-filled-focused-state-layer-color: rgb(0 128 0);
                --md-comp-button-filled-focused-state-layer-opacity: 0.17;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton
              data-testid="button-pressed"
              class="md-state_pressed"
              label="Pressed"
              color="filled"
              style="
                --md-comp-button-filled-pressed-label-text-color: rgb(255 0 255);
                --md-comp-button-filled-pressed-icon-color: rgb(0 255 255);
                --md-comp-button-filled-pressed-container-elevation: 0 0 0 5px rgb(34 56 78);
                --md-comp-button-filled-pressed-state-layer-color: rgb(0 0 255);
                --md-comp-button-filled-pressed-state-layer-opacity: 0.29;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDButton
              data-testid="button-outlined-hover"
              class="md-state_hover"
              label="Outlined hover"
              color="outlined"
              style="
                --md-comp-button-outlined-hovered-label-text-color: rgb(0 128 0);
                --md-comp-button-outlined-hovered-icon-color: rgb(255 0 0);
                --md-comp-button-outlined-hovered-outline-color: rgb(120 10 10);
                --md-comp-button-outlined-hovered-state-layer-color: rgb(255 0 200);
                --md-comp-button-outlined-hovered-state-layer-opacity: 0.03;
              "
            ><template #icon>+</template></MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDButton
              data-testid="button-outlined-focus"
              class="md-state_focused"
              label="Outlined focus"
              color="outlined"
              style="
                --md-comp-button-outlined-focused-label-text-color: rgb(0 0 255);
                --md-comp-button-outlined-focused-icon-color: rgb(255 165 0);
                --md-comp-button-outlined-focused-outline-color: rgb(10 120 10);
                --md-comp-button-outlined-focused-state-layer-color: rgb(0 128 0);
                --md-comp-button-outlined-focused-state-layer-opacity: 0.17;
              "
            ><template #icon>+</template></MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton
              data-testid="button-outlined-pressed"
              class="md-state_pressed"
              label="Outlined pressed"
              color="outlined"
              style="
                --md-comp-button-outlined-pressed-label-text-color: rgb(255 0 255);
                --md-comp-button-outlined-pressed-icon-color: rgb(0 255 255);
                --md-comp-button-outlined-pressed-outline-color: rgb(10 10 120);
                --md-comp-button-outlined-pressed-state-layer-color: rgb(0 0 255);
                --md-comp-button-outlined-pressed-state-layer-opacity: 0.29;
              "
            ><template #icon>+</template></MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDButton
              data-testid="button-tonal-hover"
              class="md-state_hover"
              label="Tonal hover"
              color="tonal"
              style="
                --md-comp-button-tonal-label-text-color: rgb(30 30 30);
                --md-comp-button-tonal-hovered-label-text-color: rgb(0 128 0);
                --md-comp-button-tonal-icon-color: rgb(90 20 150);
                --md-comp-button-tonal-hovered-icon-color: rgb(255 0 0);
                --md-comp-button-tonal-hovered-container-elevation: 0 0 0 3px rgb(12 34 56);
                --md-comp-button-tonal-hovered-state-layer-color: rgb(255 0 200);
                --md-comp-button-tonal-hovered-state-layer-opacity: 0.03;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDButton
              data-testid="button-tonal-focus"
              class="md-state_focused"
              label="Tonal focus"
              color="tonal"
              style="
                --md-comp-button-tonal-focused-label-text-color: rgb(0 0 255);
                --md-comp-button-tonal-focused-icon-color: rgb(255 165 0);
                --md-comp-button-tonal-focused-container-elevation: 0 0 0 4px rgb(23 45 67);
                --md-comp-button-tonal-focused-state-layer-color: rgb(0 128 0);
                --md-comp-button-tonal-focused-state-layer-opacity: 0.17;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton
              data-testid="button-tonal-pressed"
              class="md-state_pressed"
              label="Tonal pressed"
              color="tonal"
              style="
                --md-comp-button-tonal-pressed-label-text-color: rgb(255 0 255);
                --md-comp-button-tonal-pressed-icon-color: rgb(0 255 255);
                --md-comp-button-tonal-pressed-container-elevation: 0 0 0 5px rgb(34 56 78);
                --md-comp-button-tonal-pressed-state-layer-color: rgb(0 0 255);
                --md-comp-button-tonal-pressed-state-layer-opacity: 0.29;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDButton
              data-testid="button-elevated-hover"
              class="md-state_hover"
              label="Elevated hover"
              color="elevated"
              style="
                --md-comp-button-elevated-label-text-color: rgb(30 30 30);
                --md-comp-button-elevated-hovered-label-text-color: rgb(0 128 0);
                --md-comp-button-elevated-icon-color: rgb(90 20 150);
                --md-comp-button-elevated-hovered-icon-color: rgb(255 0 0);
                --md-comp-button-elevated-hovered-container-elevation: 0 0 0 3px rgb(12 34 56);
                --md-comp-button-elevated-hovered-state-layer-color: rgb(255 0 200);
                --md-comp-button-elevated-hovered-state-layer-opacity: 0.03;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDButton
              data-testid="button-elevated-focus"
              class="md-state_focused"
              label="Elevated focus"
              color="elevated"
              style="
                --md-comp-button-elevated-focused-label-text-color: rgb(0 0 255);
                --md-comp-button-elevated-focused-icon-color: rgb(255 165 0);
                --md-comp-button-elevated-focused-container-elevation: 0 0 0 4px rgb(23 45 67);
                --md-comp-button-elevated-focused-state-layer-color: rgb(0 128 0);
                --md-comp-button-elevated-focused-state-layer-opacity: 0.17;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton
              data-testid="button-elevated-pressed"
              class="md-state_pressed"
              label="Elevated pressed"
              color="elevated"
              style="
                --md-comp-button-elevated-pressed-label-text-color: rgb(255 0 255);
                --md-comp-button-elevated-pressed-icon-color: rgb(0 255 255);
                --md-comp-button-elevated-pressed-container-elevation: 0 0 0 5px rgb(34 56 78);
                --md-comp-button-elevated-pressed-state-layer-color: rgb(0 0 255);
                --md-comp-button-elevated-pressed-state-layer-opacity: 0.29;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDButton
              data-testid="button-text-hover"
              class="md-state_hover"
              label="Text hover"
              color="text"
              style="
                --md-comp-button-text-label-text-color: rgb(30 30 30);
                --md-comp-button-text-hovered-label-text-color: rgb(0 128 0);
                --md-comp-button-text-icon-color: rgb(90 20 150);
                --md-comp-button-text-hovered-icon-color: rgb(255 0 0);
                --md-comp-button-text-hovered-state-layer-color: rgb(255 0 200);
                --md-comp-button-text-hovered-state-layer-opacity: 0.03;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDButton
              data-testid="button-text-focus"
              class="md-state_focused"
              label="Text focus"
              color="text"
              style="
                --md-comp-button-text-focused-label-text-color: rgb(0 0 255);
                --md-comp-button-text-focused-icon-color: rgb(255 165 0);
                --md-comp-button-text-focused-state-layer-color: rgb(0 128 0);
                --md-comp-button-text-focused-state-layer-opacity: 0.17;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDButton
              data-testid="button-text-pressed"
              class="md-state_pressed"
              label="Text pressed"
              color="text"
              style="
                --md-comp-button-text-pressed-label-text-color: rgb(255 0 255);
                --md-comp-button-text-pressed-icon-color: rgb(0 255 255);
                --md-comp-button-text-pressed-state-layer-color: rgb(0 0 255);
                --md-comp-button-text-pressed-state-layer-opacity: 0.29;
              "
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    \`
  })
}`, ...B.parameters?.docs?.source } } };
x.parameters = { ...x.parameters, docs: { ...x.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton,
      MDStateLayerForcedStateProvider
    },
    setup() {
      return {
        BUTTON_TOGGLE_STYLES,
        BUTTON_TOGGLE_INTERACTION_STATES
      };
    },
    template: \`
      <div data-testid="visual-md-button-default-toggle-role-matrix" class="visual-checker-backdrop">
        <div v-for="style in BUTTON_TOGGLE_STYLES" :key="style" class="visual-row">
          <template v-for="selected in [false, true]" :key="String(selected)">
            <MDButton :data-testid="'default-button-toggle-' + style + '-' + (selected ? 'selected' : 'unselected') + '-resting'" :label="style + ' ' + (selected ? 'selected' : 'unselected') + ' resting'" variant="toggle" :selected="selected" :color="style"><template #icon>+</template></MDButton>
            <MDStateLayerForcedStateProvider
              v-for="state in BUTTON_TOGGLE_INTERACTION_STATES"
              :key="state"
              :hovered="state === 'hover'"
              :focused="state === 'focus'"
              :pressed="state === 'pressed'"
            >
              <MDButton :data-testid="'default-button-toggle-' + style + '-' + (selected ? 'selected' : 'unselected') + '-' + state" :class="'md-state_' + (state === 'focus' ? 'focused' : state)" :label="style + ' ' + (selected ? 'selected' : 'unselected') + ' ' + state" variant="toggle" :selected="selected" :color="style"><template #icon>+</template></MDButton>
            </MDStateLayerForcedStateProvider>
          </template>
        </div>
      </div>
    \`
  })
}`, ...x.parameters?.docs?.source } } };
L.parameters = { ...L.parameters, docs: { ...L.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton,
      MDStateLayerForcedStateProvider
    },
    setup() {
      return {
        BUTTON_TOGGLE_STYLES,
        BUTTON_TOGGLE_INTERACTION_STATES,
        buttonToggleRestingStyle,
        buttonToggleInteractionStyle
      };
    },
    template: \`
      <div data-testid="visual-md-button-toggle-token-routing" class="visual-checker-backdrop">
        <div v-for="style in BUTTON_TOGGLE_STYLES" :key="style" class="visual-row">
          <MDButton
            :data-testid="\\\`toggle-token-\\\${style}-selected-resting\\\`"
            :label="\\\`\\\${style} selected\\\`"
            variant="toggle"
            selected
            :color="style"
            :style="buttonToggleRestingStyle(style, 'selected')"
          >
            <template #icon>+</template>
          </MDButton>
          <MDButton
            :data-testid="\\\`toggle-token-\\\${style}-unselected-resting\\\`"
            :label="\\\`\\\${style} unselected\\\`"
            variant="toggle"
            :color="style"
            :style="buttonToggleRestingStyle(style, 'unselected')"
          >
            <template #icon>+</template>
          </MDButton>
          <MDStateLayerForcedStateProvider
            v-for="state in BUTTON_TOGGLE_INTERACTION_STATES"
            :key="'selected-' + state"
            :hovered="state === 'hover'"
            :focused="state === 'focus'"
            :pressed="state === 'pressed'"
          >
            <MDButton
              :data-testid="\\\`toggle-token-\\\${style}-selected-\\\${state}\\\`"
              :class="'md-state_' + (state === 'focus' ? 'focused' : state)"
              :label="\\\`\\\${style} selected \\\${state}\\\`"
              variant="toggle"
              selected
              :color="style"
              :style="buttonToggleInteractionStyle(style, 'selected', state)"
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider
            v-for="state in BUTTON_TOGGLE_INTERACTION_STATES"
            :key="'unselected-' + state"
            :hovered="state === 'hover'"
            :focused="state === 'focus'"
            :pressed="state === 'pressed'"
          >
            <MDButton
              :data-testid="\\\`toggle-token-\\\${style}-unselected-\\\${state}\\\`"
              :class="'md-state_' + (state === 'focus' ? 'focused' : state)"
              :label="\\\`\\\${style} unselected \\\${state}\\\`"
              variant="toggle"
              :color="style"
              :style="buttonToggleInteractionStyle(style, 'unselected', state)"
            >
              <template #icon>+</template>
            </MDButton>
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    \`
  })
}`, ...L.parameters?.docs?.source } } };
k.parameters = { ...k.parameters, docs: { ...k.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="visual-md-button-loading-color-routing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton
            data-testid="button-resting-color"
            label="Loading"
            color="filled"
            style="
              --md-comp-button-filled-label-text-color: rgb(12 34 56);
              --md-comp-button-filled-icon-color: rgb(90 12 180);
            "
          >
            <template #icon>+</template>
          </MDButton>
          <MDButton
            data-testid="button-loading-color"
            label="Loading"
            color="filled"
            loading
            style="
              --md-comp-button-filled-label-text-color: rgb(12 34 56);
              --md-comp-button-filled-icon-color: rgb(90 12 180);
            "
          >
            <template #icon>+</template>
          </MDButton>
        </div>
      </div>
    \`
  })
}`, ...k.parameters?.docs?.source } } };
P.parameters = { ...P.parameters, docs: { ...P.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDButton
    },
    template: \`
      <div data-testid="visual-md-button-targets" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDButton label="XS target" size="extra-small" />
          <MDButton label="S target" size="small" />
        </div>
      </div>
    \`
  })
}`, ...P.parameters?.docs?.source } } };
const ne = ["Default", "Toggle", "ToggleText", "ToggleShapes", "ToggleInteractionStates", "DisabledSelectedOutlinedAndText", "FocusIndicatorTarget", "VisualStates", "VisualInteractionStates", "DefaultRoleMatrix", "ExpandedTargetHitArea", "SizeTypography", "SizeGeometryMatrix", "DisabledStatePrecedence", "TextButtonSpacing", "TokenRoutingMatrix", "DefaultToggleRoleMatrix", "ToggleTokenRoutingMatrix", "LoadingColorRouting", "TargetLayers"];
export {
  d as Default,
  y as DefaultRoleMatrix,
  x as DefaultToggleRoleMatrix,
  p as DisabledSelectedOutlinedAndText,
  M as DisabledStatePrecedence,
  h as ExpandedTargetHitArea,
  g as FocusIndicatorTarget,
  k as LoadingColorRouting,
  D as SizeGeometryMatrix,
  f as SizeTypography,
  P as TargetLayers,
  S as TextButtonSpacing,
  i as Toggle,
  m as ToggleInteractionStates,
  u as ToggleShapes,
  c as ToggleText,
  L as ToggleTokenRoutingMatrix,
  B as TokenRoutingMatrix,
  v as VisualInteractionStates,
  b as VisualStates,
  ne as __namedExportsOrder,
  re as default
};
