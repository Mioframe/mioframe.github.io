import { M as a } from "./MDIconButton-CPPri3Ap.js";
import { d as F, c as m, a as l, b as W, B as _, t as g, r as V, e as p, F as A, f as T, C as K, D as Y } from "./iframe-BunZ6L-5.js";
import { _ as O } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { _ as c, u as Z } from "./useFocusIndicator-CAgGAsHW.js";
import "./MDCircularProgressIndicator-ZuQHwcY_.js";
import "./MDOverlayTooltip-BHbqCA2z.js";
import "./useStateLayer-DKHZottX.js";
import "./typography-qm14BBLM.js";
import "./MDSymbol-B8X8ggct.js";
import "./preload-helper-PPVm8Dsz.js";
const X = { id: "visual-md-icon-button-target-hit", class: "visual-checker-backdrop md-icon-button-target-hit" }, J = { class: "md-icon-button-target-hit__stage" }, Q = { class: "md-icon-button-target-hit__status" }, ee = { id: "visual-md-icon-button-target-hit-count" }, N = F({ __name: "MDIconButtonTargetHitVisualStory", setup(n) {
  const t = V(0), e = () => {
    t.value += 1;
  };
  return (s, i) => (p(), m("div", X, [l("div", J, [W(a, { tooltip: "Expanded target", size: "small", "md-symbol-name": "add", color: "standard", onClick: e })]), l("p", Q, [i[0] || (i[0] = _(" Click count: ", -1)), l("output", ee, g(t.value), 1)])]));
} }), te = O(N, [["__scopeId", "data-v-fb414def"]]);
N.__docgenInfo = Object.assign({ displayName: N.name ?? N.__name }, { exportName: "default", displayName: "MDIconButtonTargetHitVisualStory", type: 1, props: [{ name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: false, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "key", global: true, description: "", tags: [], required: false, type: "PropertyKey", declarations: [], schema: { kind: "enum", type: "PropertyKey", schema: ["string", "number", "symbol"] } }, { name: "ref", global: true, description: "", tags: [], required: false, type: "VNodeRef", declarations: [], schema: { kind: "enum", type: "VNodeRef", schema: ["string", "Ref<any, any>", { kind: "event", type: "(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void" }] } }, { name: "ref_for", global: true, description: "", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "ref_key", global: true, description: "", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "class", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "style", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "tabindex", global: true, description: "", tags: [], required: false, type: "string | number", declarations: [], schema: { kind: "enum", type: "string | number", schema: ["string", "number"] } }, { name: "aria-activedescendant", global: true, description: "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-atomic", global: true, description: "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-autocomplete", global: true, description: `Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`, tags: [], required: false, type: '"none" | "inline" | "list" | "both" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "inline" | "list" | "both" | undefined', schema: ["undefined", '"none"', '"inline"', '"list"', '"both"'] } }, { name: "aria-busy", global: true, description: "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-checked", global: true, description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.', tags: [{ name: "see", text: "aria-pressed" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-colcount", global: true, description: "Defines the total number of columns in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colindex", global: true, description: "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colcount" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colspan", global: true, description: "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-controls", global: true, description: "Identifies the element (or elements) whose contents or presence are controlled by the current element.", tags: [{ name: "see", text: "aria-owns." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-current", global: true, description: "Indicates the element that represents the current item within a container or set of related elements.", tags: [], required: false, type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"page"', '"step"', '"location"', '"date"', '"time"'] } }, { name: "aria-describedby", global: true, description: "Identifies the element (or elements) that describes the object.", tags: [{ name: "see", text: "aria-labelledby" }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-details", global: true, description: "Identifies the element that provides a detailed, extended description for the object.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-disabled", global: true, description: "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.", tags: [{ name: "see", text: "aria-hidden" }, { name: "see", text: "aria-readonly." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-dropeffect", global: true, description: "Indicates what functions can be performed when a dragged object is released on the drop target.", tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined', schema: ["undefined", '"none"', '"copy"', '"execute"', '"link"', '"move"', '"popup"'] } }, { name: "aria-errormessage", global: true, description: "Identifies the element that provides an error message for the object.", tags: [{ name: "see", text: "aria-invalid" }, { name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-expanded", global: true, description: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-flowto", global: true, description: `Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-grabbed", global: true, description: `Indicates an element's "grabbed" state in a drag-and-drop operation.`, tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-haspopup", global: true, description: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", tags: [], required: false, type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"menu"', '"listbox"', '"tree"', '"grid"', '"dialog"'] } }, { name: "aria-hidden", global: true, description: "Indicates whether the element is exposed to an accessibility API.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-invalid", global: true, description: "Indicates the entered value does not conform to the format expected by the application.", tags: [{ name: "see", text: "aria-errormessage." }], required: false, type: 'Booleanish | "grammar" | "spelling" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "grammar" | "spelling" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"grammar"', '"spelling"'] } }, { name: "aria-keyshortcuts", global: true, description: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-label", global: true, description: "Defines a string value that labels the current element.", tags: [{ name: "see", text: "aria-labelledby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-labelledby", global: true, description: "Identifies the element (or elements) that labels the current element.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-level", global: true, description: "Defines the hierarchical level of an element within a structure.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-live", global: true, description: "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", tags: [], required: false, type: '"off" | "assertive" | "polite" | undefined', declarations: [], schema: { kind: "enum", type: '"off" | "assertive" | "polite" | undefined', schema: ["undefined", '"off"', '"assertive"', '"polite"'] } }, { name: "aria-modal", global: true, description: "Indicates whether an element is modal when displayed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiline", global: true, description: "Indicates whether a text box accepts multiple lines of input or only a single line.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiselectable", global: true, description: "Indicates that the user may select more than one item from the current selectable descendants.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-orientation", global: true, description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", tags: [], required: false, type: '"horizontal" | "vertical" | undefined', declarations: [], schema: { kind: "enum", type: '"horizontal" | "vertical" | undefined', schema: ["undefined", '"horizontal"', '"vertical"'] } }, { name: "aria-owns", global: true, description: `Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.`, tags: [{ name: "see", text: "aria-controls." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-placeholder", global: true, description: `Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-posinset", global: true, description: "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-setsize." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-pressed", global: true, description: 'Indicates the current "pressed" state of toggle buttons.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-readonly", global: true, description: "Indicates that the element is not editable, but is otherwise operable.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-relevant", global: true, description: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.", tags: [{ name: "see", text: "aria-atomic." }], required: false, type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', declarations: [], schema: { kind: "enum", type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', schema: ["undefined", '"additions"', '"additions removals"', '"additions text"', '"all"', '"removals"', '"removals additions"', '"removals text"', '"text"', '"text additions"', '"text removals"'] } }, { name: "aria-required", global: true, description: "Indicates that user input is required on the element before a form may be submitted.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-roledescription", global: true, description: "Defines a human-readable, author-localized description for the role of an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-rowcount", global: true, description: "Defines the total number of rows in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowindex", global: true, description: "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowcount" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowspan", global: true, description: "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-selected", global: true, description: 'Indicates the current "selected" state of various widgets.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-pressed." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-setsize", global: true, description: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-posinset." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-sort", global: true, description: "Indicates if items in a table or grid are sorted in ascending or descending order.", tags: [], required: false, type: '"none" | "ascending" | "descending" | "other" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "ascending" | "descending" | "other" | undefined', schema: ["undefined", '"none"', '"ascending"', '"descending"', '"other"'] } }, { name: "aria-valuemax", global: true, description: "Defines the maximum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuemin", global: true, description: "Defines the minimum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuenow", global: true, description: "Defines the current value for a range widget.", tags: [{ name: "see", text: "aria-valuetext." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuetext", global: true, description: "Defines the human readable text alternative of aria-valuenow for a range widget.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Button/MDIconButtonTargetHitVisualStory.vue" });
const ae = { id: "visual-md-icon-button-toolbar-interaction", class: "visual-checker-backdrop md-icon-button-toolbar-interaction" }, ne = { class: "md-icon-button-toolbar-interaction__row", role: "toolbar", "aria-label": "Dense toolbar" }, se = ["onPointerenter", "onPointerleave"], re = { class: "md-icon-button-toolbar-interaction__status" }, le = { id: "toolbar-hovered-button" }, ie = ["id"], z = F({ __name: "MDIconButtonToolbarInteractionStory", setup(n) {
  const t = ["add", "filter", "sort", "search"], e = K({ add: 0, filter: 0, sort: 0, search: 0 }), s = V("none"), i = (d) => {
    e[d] += 1;
  }, o = (d) => {
    s.value = d;
  }, L = (d) => {
    s.value === d && (s.value = "none");
  };
  return (d, u) => (p(), m("div", ae, [l("div", ne, [(p(), m(A, null, T(t, (r) => l("span", { key: r, class: "md-icon-button-toolbar-interaction__button", onPointerenter: (C) => o(r), onPointerleave: (C) => L(r) }, [W(a, { tooltip: r, "md-symbol-name": r === "add" ? "add" : r === "filter" ? "filter_list" : r === "sort" ? "sort" : "search", color: "standard", onClick: (C) => i(r) }, null, 8, ["tooltip", "md-symbol-name", "onClick"])], 40, se)), 64))]), l("div", re, [l("p", null, [u[0] || (u[0] = _(" Hovered: ", -1)), l("output", le, g(s.value), 1)]), (p(), m(A, null, T(t, (r) => l("p", { key: `${r}-count` }, [_(g(r) + ": ", 1), l("output", { id: `toolbar-count-${r}` }, g(e[r]), 9, ie)])), 64))])]));
} }), oe = O(z, [["__scopeId", "data-v-40230283"]]);
z.__docgenInfo = Object.assign({ displayName: z.name ?? z.__name }, { exportName: "default", displayName: "MDIconButtonToolbarInteractionStory", type: 1, props: [{ name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: false, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "key", global: true, description: "", tags: [], required: false, type: "PropertyKey", declarations: [], schema: { kind: "enum", type: "PropertyKey", schema: ["string", "number", "symbol"] } }, { name: "ref", global: true, description: "", tags: [], required: false, type: "VNodeRef", declarations: [], schema: { kind: "enum", type: "VNodeRef", schema: ["string", "Ref<any, any>", { kind: "event", type: "(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void" }] } }, { name: "ref_for", global: true, description: "", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "ref_key", global: true, description: "", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "class", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "style", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "tabindex", global: true, description: "", tags: [], required: false, type: "string | number", declarations: [], schema: { kind: "enum", type: "string | number", schema: ["string", "number"] } }, { name: "aria-activedescendant", global: true, description: "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-atomic", global: true, description: "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-autocomplete", global: true, description: `Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`, tags: [], required: false, type: '"none" | "inline" | "list" | "both" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "inline" | "list" | "both" | undefined', schema: ["undefined", '"none"', '"inline"', '"list"', '"both"'] } }, { name: "aria-busy", global: true, description: "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-checked", global: true, description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.', tags: [{ name: "see", text: "aria-pressed" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-colcount", global: true, description: "Defines the total number of columns in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colindex", global: true, description: "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colcount" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colspan", global: true, description: "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-controls", global: true, description: "Identifies the element (or elements) whose contents or presence are controlled by the current element.", tags: [{ name: "see", text: "aria-owns." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-current", global: true, description: "Indicates the element that represents the current item within a container or set of related elements.", tags: [], required: false, type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"page"', '"step"', '"location"', '"date"', '"time"'] } }, { name: "aria-describedby", global: true, description: "Identifies the element (or elements) that describes the object.", tags: [{ name: "see", text: "aria-labelledby" }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-details", global: true, description: "Identifies the element that provides a detailed, extended description for the object.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-disabled", global: true, description: "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.", tags: [{ name: "see", text: "aria-hidden" }, { name: "see", text: "aria-readonly." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-dropeffect", global: true, description: "Indicates what functions can be performed when a dragged object is released on the drop target.", tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined', schema: ["undefined", '"none"', '"copy"', '"execute"', '"link"', '"move"', '"popup"'] } }, { name: "aria-errormessage", global: true, description: "Identifies the element that provides an error message for the object.", tags: [{ name: "see", text: "aria-invalid" }, { name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-expanded", global: true, description: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-flowto", global: true, description: `Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-grabbed", global: true, description: `Indicates an element's "grabbed" state in a drag-and-drop operation.`, tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-haspopup", global: true, description: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", tags: [], required: false, type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"menu"', '"listbox"', '"tree"', '"grid"', '"dialog"'] } }, { name: "aria-hidden", global: true, description: "Indicates whether the element is exposed to an accessibility API.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-invalid", global: true, description: "Indicates the entered value does not conform to the format expected by the application.", tags: [{ name: "see", text: "aria-errormessage." }], required: false, type: 'Booleanish | "grammar" | "spelling" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "grammar" | "spelling" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"grammar"', '"spelling"'] } }, { name: "aria-keyshortcuts", global: true, description: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-label", global: true, description: "Defines a string value that labels the current element.", tags: [{ name: "see", text: "aria-labelledby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-labelledby", global: true, description: "Identifies the element (or elements) that labels the current element.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-level", global: true, description: "Defines the hierarchical level of an element within a structure.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-live", global: true, description: "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", tags: [], required: false, type: '"off" | "assertive" | "polite" | undefined', declarations: [], schema: { kind: "enum", type: '"off" | "assertive" | "polite" | undefined', schema: ["undefined", '"off"', '"assertive"', '"polite"'] } }, { name: "aria-modal", global: true, description: "Indicates whether an element is modal when displayed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiline", global: true, description: "Indicates whether a text box accepts multiple lines of input or only a single line.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiselectable", global: true, description: "Indicates that the user may select more than one item from the current selectable descendants.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-orientation", global: true, description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", tags: [], required: false, type: '"horizontal" | "vertical" | undefined', declarations: [], schema: { kind: "enum", type: '"horizontal" | "vertical" | undefined', schema: ["undefined", '"horizontal"', '"vertical"'] } }, { name: "aria-owns", global: true, description: `Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.`, tags: [{ name: "see", text: "aria-controls." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-placeholder", global: true, description: `Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-posinset", global: true, description: "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-setsize." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-pressed", global: true, description: 'Indicates the current "pressed" state of toggle buttons.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-readonly", global: true, description: "Indicates that the element is not editable, but is otherwise operable.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-relevant", global: true, description: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.", tags: [{ name: "see", text: "aria-atomic." }], required: false, type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', declarations: [], schema: { kind: "enum", type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', schema: ["undefined", '"additions"', '"additions removals"', '"additions text"', '"all"', '"removals"', '"removals additions"', '"removals text"', '"text"', '"text additions"', '"text removals"'] } }, { name: "aria-required", global: true, description: "Indicates that user input is required on the element before a form may be submitted.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-roledescription", global: true, description: "Defines a human-readable, author-localized description for the role of an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-rowcount", global: true, description: "Defines the total number of rows in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowindex", global: true, description: "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowcount" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowspan", global: true, description: "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-selected", global: true, description: 'Indicates the current "selected" state of various widgets.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-pressed." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-setsize", global: true, description: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-posinset." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-sort", global: true, description: "Indicates if items in a table or grid are sorted in ascending or descending order.", tags: [], required: false, type: '"none" | "ascending" | "descending" | "other" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "ascending" | "descending" | "other" | undefined', schema: ["undefined", '"none"', '"ascending"', '"descending"', '"other"'] } }, { name: "aria-valuemax", global: true, description: "Defines the maximum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuemin", global: true, description: "Defines the minimum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuenow", global: true, description: "Defines the current value for a range widget.", tags: [{ name: "see", text: "aria-valuetext." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuetext", global: true, description: "Defines the human readable text alternative of aria-valuenow for a range widget.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Button/MDIconButtonToolbarInteractionStory.vue" });
const de = { class: "md-icon-button-toolbar__row", role: "toolbar", "aria-label": "Database toolbar" }, ce = { class: "visual-gallery-label" }, R = F({ __name: "MDIconButtonToolbarVisualStory", setup(n) {
  const t = { "data-testid": "visual-md-icon-button-toolbar-layout" }, e = [{ label: "Add row", icon: "add" }, { label: "Filter", icon: "filter_list" }, { label: "Sort", icon: "sort" }, { label: "Search", icon: "search" }];
  return (s, i) => (p(), m("div", Y(t, { class: "visual-checker-backdrop md-icon-button-toolbar" }), [l("div", de, [(p(), m(A, null, T(e, (o) => l("div", { key: o.label, class: "md-icon-button-toolbar__item" }, [W(a, { tooltip: o.label, "md-symbol-name": o.icon, color: "standard" }, null, 8, ["tooltip", "md-symbol-name"]), l("span", ce, g(o.label), 1)])), 64))])], 16));
} }), ue = O(R, [["__scopeId", "data-v-47bbd743"]]);
R.__docgenInfo = Object.assign({ displayName: R.name ?? R.__name }, { exportName: "default", displayName: "MDIconButtonToolbarVisualStory", type: 1, props: [{ name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: false, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "key", global: true, description: "", tags: [], required: false, type: "PropertyKey", declarations: [], schema: { kind: "enum", type: "PropertyKey", schema: ["string", "number", "symbol"] } }, { name: "ref", global: true, description: "", tags: [], required: false, type: "VNodeRef", declarations: [], schema: { kind: "enum", type: "VNodeRef", schema: ["string", "Ref<any, any>", { kind: "event", type: "(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void" }] } }, { name: "ref_for", global: true, description: "", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "ref_key", global: true, description: "", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "class", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "style", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "tabindex", global: true, description: "", tags: [], required: false, type: "string | number", declarations: [], schema: { kind: "enum", type: "string | number", schema: ["string", "number"] } }, { name: "aria-activedescendant", global: true, description: "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-atomic", global: true, description: "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-autocomplete", global: true, description: `Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`, tags: [], required: false, type: '"none" | "inline" | "list" | "both" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "inline" | "list" | "both" | undefined', schema: ["undefined", '"none"', '"inline"', '"list"', '"both"'] } }, { name: "aria-busy", global: true, description: "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-checked", global: true, description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.', tags: [{ name: "see", text: "aria-pressed" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-colcount", global: true, description: "Defines the total number of columns in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colindex", global: true, description: "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colcount" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colspan", global: true, description: "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-controls", global: true, description: "Identifies the element (or elements) whose contents or presence are controlled by the current element.", tags: [{ name: "see", text: "aria-owns." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-current", global: true, description: "Indicates the element that represents the current item within a container or set of related elements.", tags: [], required: false, type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"page"', '"step"', '"location"', '"date"', '"time"'] } }, { name: "aria-describedby", global: true, description: "Identifies the element (or elements) that describes the object.", tags: [{ name: "see", text: "aria-labelledby" }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-details", global: true, description: "Identifies the element that provides a detailed, extended description for the object.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-disabled", global: true, description: "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.", tags: [{ name: "see", text: "aria-hidden" }, { name: "see", text: "aria-readonly." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-dropeffect", global: true, description: "Indicates what functions can be performed when a dragged object is released on the drop target.", tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined', schema: ["undefined", '"none"', '"copy"', '"execute"', '"link"', '"move"', '"popup"'] } }, { name: "aria-errormessage", global: true, description: "Identifies the element that provides an error message for the object.", tags: [{ name: "see", text: "aria-invalid" }, { name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-expanded", global: true, description: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-flowto", global: true, description: `Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-grabbed", global: true, description: `Indicates an element's "grabbed" state in a drag-and-drop operation.`, tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-haspopup", global: true, description: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", tags: [], required: false, type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"menu"', '"listbox"', '"tree"', '"grid"', '"dialog"'] } }, { name: "aria-hidden", global: true, description: "Indicates whether the element is exposed to an accessibility API.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-invalid", global: true, description: "Indicates the entered value does not conform to the format expected by the application.", tags: [{ name: "see", text: "aria-errormessage." }], required: false, type: 'Booleanish | "grammar" | "spelling" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "grammar" | "spelling" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"grammar"', '"spelling"'] } }, { name: "aria-keyshortcuts", global: true, description: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-label", global: true, description: "Defines a string value that labels the current element.", tags: [{ name: "see", text: "aria-labelledby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-labelledby", global: true, description: "Identifies the element (or elements) that labels the current element.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-level", global: true, description: "Defines the hierarchical level of an element within a structure.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-live", global: true, description: "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", tags: [], required: false, type: '"off" | "assertive" | "polite" | undefined', declarations: [], schema: { kind: "enum", type: '"off" | "assertive" | "polite" | undefined', schema: ["undefined", '"off"', '"assertive"', '"polite"'] } }, { name: "aria-modal", global: true, description: "Indicates whether an element is modal when displayed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiline", global: true, description: "Indicates whether a text box accepts multiple lines of input or only a single line.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiselectable", global: true, description: "Indicates that the user may select more than one item from the current selectable descendants.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-orientation", global: true, description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", tags: [], required: false, type: '"horizontal" | "vertical" | undefined', declarations: [], schema: { kind: "enum", type: '"horizontal" | "vertical" | undefined', schema: ["undefined", '"horizontal"', '"vertical"'] } }, { name: "aria-owns", global: true, description: `Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.`, tags: [{ name: "see", text: "aria-controls." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-placeholder", global: true, description: `Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-posinset", global: true, description: "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-setsize." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-pressed", global: true, description: 'Indicates the current "pressed" state of toggle buttons.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-readonly", global: true, description: "Indicates that the element is not editable, but is otherwise operable.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-relevant", global: true, description: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.", tags: [{ name: "see", text: "aria-atomic." }], required: false, type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', declarations: [], schema: { kind: "enum", type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', schema: ["undefined", '"additions"', '"additions removals"', '"additions text"', '"all"', '"removals"', '"removals additions"', '"removals text"', '"text"', '"text additions"', '"text removals"'] } }, { name: "aria-required", global: true, description: "Indicates that user input is required on the element before a form may be submitted.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-roledescription", global: true, description: "Defines a human-readable, author-localized description for the role of an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-rowcount", global: true, description: "Defines the total number of rows in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowindex", global: true, description: "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowcount" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowspan", global: true, description: "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-selected", global: true, description: 'Indicates the current "selected" state of various widgets.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-pressed." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-setsize", global: true, description: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-posinset." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-sort", global: true, description: "Indicates if items in a table or grid are sorted in ascending or descending order.", tags: [], required: false, type: '"none" | "ascending" | "descending" | "other" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "ascending" | "descending" | "other" | undefined', schema: ["undefined", '"none"', '"ascending"', '"descending"', '"other"'] } }, { name: "aria-valuemax", global: true, description: "Defines the maximum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuemin", global: true, description: "Defines the minimum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuenow", global: true, description: "Defines the current value for a range widget.", tags: [{ name: "see", text: "aria-valuetext." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuetext", global: true, description: "Defines the human readable text alternative of aria-valuenow for a range widget.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Button/MDIconButtonToolbarVisualStory.vue" });
const we = { title: "Material 3/Components/Buttons/MDIconButton", component: a, args: { tooltip: "Close", mdSymbolName: "close" }, argTypes: { onClick: { action: "click" } }, parameters: { layout: "centered", docs: { description: { component: ["Checked against Material 3 `components/icon-buttons/{overview,guidelines,specs,accessibility}`.", "", '**Props**: `variant` (`default` | `toggle`, default `default`), `color` (`filled` | `tonal` | `outlined` | `standard`, default `filled` \u2014 the official `md.comp.icon-button` default; existing product consumers migrated to explicit `color="standard"` to preserve their prior appearance), `size` (`extra-small` | `small` | `medium` | `large` | `extra-large`, default `small`), `width` (`narrow` | `default` | `wide`, default `default`), `shape` (`round` | `square`, default `round`), `nativeType` (`button` | `submit` | `reset`, default `button`), required `tooltip`, `selected`, `disabled`.', "", "**Slots**: `icon`, `richTooltipContent`.", "", "**Project extensions**: `loading` (`boolean | number`, `0` is active), `showTooltipOnClick`, `mdSymbolName`.", "", "**Tokens**: checked against the `material3` MCP snapshot captured at `2026-06-30T05:53:04.916Z`. Exact official `--md-comp-icon-button-*` properties are the public override surface. Each variant routes container, icon, outline, and state-layer values through component-local rendered variables, while `MDStateLayer` continues to consume only the generic `--md-private-state-*` contract.", "", '**Toggle semantics**: `variant="toggle"` exposes controlled `aria-pressed` from `selected` and morphs the icon fill/shape on select, per Material outlined-to-filled toggle guidance.', "", '**Invalid combination**: `selected` with `variant="default"` is ignored and logs a development warning.', "", "**Target area**: `extra-small` and `small` sizes keep a 48dp minimum hit target via a private `--md-private-icon-button-target-size` implementation variable (no official component-token path exists for it).", "", "**Outlined outline width**: scales by size per `md.comp.icon-button.<size>.outlined.outline.width` (xsmall/small/medium 1dp, large 2dp, xlarge 3dp). The outlined interaction contract exposes one official outline-color token, `--md-comp-icon-button-outlined-outline-color`; hover, focus, and pressed vary icon and state-layer values, not the outline token name.", "", "**Disabled precedence**: disabled selected-toggle controls explicitly exclude the active hover/focus/pressed and selected-color selectors so a higher-specificity `.md-icon-button_selected` rule cannot outrank `:disabled`. `aria-pressed`, the selected container shape, and the selected built-in `MDSymbol` fill route independently of disabled and are preserved. Outlined selected-disabled uses the published `on-surface @ 0.1` container route; tonal disabled container opacity is `0.1`."].join(`
`) } } } }, G = () => ({ template: '<div class="visual-checker-backdrop"><story /></div>' }), h = { decorators: [G] }, b = { tags: ["visual"], render: () => ({ components: { MDIconButton: a, MDStateLayerForcedStateProvider: c }, template: `
      <div data-testid="visual-md-icon-button-states" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 2">
        <div class="visual-row"><span class="visual-gallery-label">Standard enabled</span><span class="visual-gallery-label">Filled enabled</span><span class="visual-gallery-label">Outlined enabled</span></div>
        <div class="visual-row">
          <MDIconButton tooltip="Standard" color="standard" md-symbol-name="more_vert" />
          <MDIconButton tooltip="Filled" color="filled" md-symbol-name="favorite" />
          <MDIconButton tooltip="Outlined" color="outlined" md-symbol-name="edit" />
        </div>
        <div class="visual-row"><span class="visual-gallery-label">Tonal enabled</span><span class="visual-gallery-label">Selected</span><span class="visual-gallery-label">Disabled standard</span></div>
        <div class="visual-row">
          <MDIconButton tooltip="Tonal" color="tonal" md-symbol-name="bookmark" />
          <MDIconButton tooltip="Selected toggle" variant="toggle" selected color="standard" md-symbol-name="check" />
          <MDIconButton tooltip="Disabled standard" color="standard" disabled md-symbol-name="block" />
        </div>
        <div class="visual-row"><span class="visual-gallery-label">Disabled unselected</span><span class="visual-gallery-label">Disabled selected</span><span class="visual-gallery-label">Disabled filled selected</span></div>
        <div class="visual-row">
          <MDIconButton tooltip="Disabled standard toggle" variant="toggle" color="standard" disabled md-symbol-name="bookmark" />
          <MDIconButton tooltip="Disabled standard toggle selected" variant="toggle" selected color="standard" disabled md-symbol-name="bookmark" />
          <MDIconButton tooltip="Disabled filled toggle selected" variant="toggle" selected color="filled" disabled md-symbol-name="favorite" />
        </div>
        <div class="visual-row"><span class="visual-gallery-label">Disabled tonal selected</span><span class="visual-gallery-label">Disabled outlined selected</span><span class="visual-gallery-label">Disabled outlined</span></div>
        <div class="visual-row">
          <MDIconButton tooltip="Disabled tonal toggle selected" variant="toggle" selected color="tonal" disabled md-symbol-name="bookmark" />
          <MDIconButton tooltip="Disabled outlined toggle selected" variant="toggle" selected color="outlined" disabled md-symbol-name="edit" />
          <MDIconButton tooltip="Disabled outlined" color="outlined" disabled md-symbol-name="edit" />
        </div>
        <div class="visual-row"><span class="visual-gallery-label">Disabled filled</span><span class="visual-gallery-label">Disabled tonal</span><span aria-hidden="true"></span></div>
        <div class="visual-row">
          <MDIconButton tooltip="Disabled filled" color="filled" disabled md-symbol-name="favorite" />
          <MDIconButton tooltip="Disabled tonal" color="tonal" disabled md-symbol-name="bookmark" />
          <span aria-hidden="true"></span>
        </div>
        <div class="visual-row"><span class="visual-gallery-label">Extra-small target</span><span class="visual-gallery-label">Small target</span><span aria-hidden="true"></span></div>
        <div data-testid="visual-md-icon-button-targets" class="visual-row">
          <MDIconButton tooltip="Extra small target" size="extra-small" md-symbol-name="add" />
          <MDIconButton tooltip="Small target" size="small" md-symbol-name="add" />
          <span aria-hidden="true"></span>
        </div>
      </div>
    ` }) }, y = { tags: ["visual"], render: () => ({ components: { MDIconButton: a, MDStateLayerForcedStateProvider: c }, template: `
      <div data-testid="visual-md-icon-button-interaction-states" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 3">
        <div class="visual-row"><span class="visual-gallery-heading">Standard</span><span class="visual-gallery-label">Hover</span><span class="visual-gallery-label">Focus</span><span class="visual-gallery-label">Pressed</span></div>
        <div class="visual-row"><span aria-hidden="true"></span>
          <MDStateLayerForcedStateProvider hovered><MDIconButton class="md-state_hover" tooltip="Standard hover" color="standard" md-symbol-name="add" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDIconButton class="md-state_focused" tooltip="Standard focus" color="standard" md-symbol-name="add" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDIconButton class="md-state_pressed" tooltip="Standard pressed" color="standard" md-symbol-name="add" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row"><span class="visual-gallery-heading">Filled</span><span class="visual-gallery-label">Hover</span><span class="visual-gallery-label">Focus</span><span class="visual-gallery-label">Pressed</span></div>
        <div class="visual-row"><span aria-hidden="true"></span>
          <MDStateLayerForcedStateProvider hovered><MDIconButton class="md-state_hover" tooltip="Filled hover" color="filled" md-symbol-name="favorite" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDIconButton class="md-state_focused" tooltip="Filled focus" color="filled" md-symbol-name="favorite" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDIconButton class="md-state_pressed" tooltip="Filled pressed" color="filled" md-symbol-name="favorite" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row"><span class="visual-gallery-heading">Tonal</span><span class="visual-gallery-label">Hover</span><span class="visual-gallery-label">Focus</span><span class="visual-gallery-label">Pressed</span></div>
        <div class="visual-row"><span aria-hidden="true"></span>
          <MDStateLayerForcedStateProvider hovered><MDIconButton class="md-state_hover" tooltip="Tonal hover" color="tonal" md-symbol-name="bookmark" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDIconButton class="md-state_focused" tooltip="Tonal focus" color="tonal" md-symbol-name="bookmark" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDIconButton class="md-state_pressed" tooltip="Tonal pressed" color="tonal" md-symbol-name="bookmark" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row"><span class="visual-gallery-heading">Outlined</span><span class="visual-gallery-label">Hover</span><span class="visual-gallery-label">Focus</span><span class="visual-gallery-label">Pressed</span></div>
        <div class="visual-row"><span aria-hidden="true"></span>
          <MDStateLayerForcedStateProvider hovered><MDIconButton class="md-state_hover" tooltip="Outlined hover" color="outlined" md-symbol-name="edit" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDIconButton class="md-state_focused" tooltip="Outlined focus" color="outlined" md-symbol-name="edit" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDIconButton class="md-state_pressed" tooltip="Outlined pressed" color="outlined" md-symbol-name="edit" /></MDStateLayerForcedStateProvider>
        </div>
      </div>
    ` }) }, f = { tags: ["visual"], render: () => ({ components: { MDIconButtonToolbarVisualStory: ue }, template: "<MDIconButtonToolbarVisualStory />" }) }, v = { render: () => ({ components: { MDIconButtonTargetHitVisualStory: te }, template: "<MDIconButtonTargetHitVisualStory />" }) }, D = { tags: ["visual"], render: () => ({ components: { MDIconButton: a, MDStateLayerForcedStateProvider: c }, template: `
      <div data-testid="visual-md-icon-button-geometry" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 3">
        <div class="visual-row"><span class="visual-gallery-heading">Width</span><span class="visual-gallery-label">Narrow</span><span class="visual-gallery-label">Default width</span><span class="visual-gallery-label">Wide</span></div>
        <div class="visual-row"><span aria-hidden="true"></span>
          <MDIconButton data-testid="geometry-width-narrow" tooltip="Narrow" width="narrow" md-symbol-name="edit" />
          <MDIconButton data-testid="geometry-width-default" tooltip="Default width" width="default" md-symbol-name="edit" />
          <MDIconButton data-testid="geometry-width-wide" tooltip="Wide" width="wide" md-symbol-name="edit" />
        </div>
        <div class="visual-row"><span class="visual-gallery-heading">Shape</span><span class="visual-gallery-label">Round</span><span class="visual-gallery-label">Square</span><span aria-hidden="true"></span></div>
        <div class="visual-row"><span aria-hidden="true"></span>
          <MDIconButton data-testid="geometry-shape-round" tooltip="Round" shape="round" color="tonal" md-symbol-name="edit" />
          <MDIconButton data-testid="geometry-shape-square" tooltip="Square" shape="square" color="tonal" md-symbol-name="edit" />
          <span aria-hidden="true"></span>
        </div>
        <div class="visual-row"><span class="visual-gallery-heading">Shape state</span><span class="visual-gallery-label">Selected round</span><span class="visual-gallery-label">Pressed round</span><span class="visual-gallery-label">Selected + pressed round</span></div>
        <div class="visual-row"><span aria-hidden="true"></span>
          <MDIconButton data-testid="geometry-round-selected" tooltip="Round selected" variant="toggle" shape="round" selected color="tonal" md-symbol-name="check" />
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton data-testid="geometry-round-pressed" class="md-state_pressed" tooltip="Round pressed" shape="round" color="tonal" md-symbol-name="check" />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton data-testid="geometry-round-selected-pressed" class="md-state_pressed" tooltip="Round selected pressed" variant="toggle" shape="round" selected color="tonal" md-symbol-name="check" />
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    ` }) }, me = ["extra-small", "small", "medium", "large", "extra-large"], k = { render: () => ({ components: { MDIconButton: a }, setup() {
  return { ICON_BUTTON_SIZES: me };
}, template: '\n      <div data-testid="visual-md-icon-button-size-geometry" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 8">\n        <div class="visual-row"><span class="visual-gallery-heading">Size</span><span class="visual-gallery-label">Default width</span><span class="visual-gallery-label">Narrow</span><span class="visual-gallery-label">Wide</span><span class="visual-gallery-label">Square</span><span class="visual-gallery-label">Pressed</span><span class="visual-gallery-label">Selected round</span><span class="visual-gallery-label">Selected square</span><span class="visual-gallery-label">Outlined</span></div>\n        <div v-for="size in ICON_BUTTON_SIZES" :key="size" class="visual-row">\n          <span class="visual-gallery-label">{{ size }}</span>\n          <MDIconButton :data-testid="`icon-geometry-${size}-default`" :tooltip="size" :size="size" width="default" md-symbol-name="edit" />\n          <MDIconButton :data-testid="`icon-geometry-${size}-narrow`" :tooltip="size" :size="size" width="narrow" md-symbol-name="edit" />\n          <MDIconButton :data-testid="`icon-geometry-${size}-wide`" :tooltip="size" :size="size" width="wide" md-symbol-name="edit" />\n          <MDIconButton :data-testid="`icon-geometry-${size}-square`" :tooltip="size" :size="size" shape="square" md-symbol-name="edit" />\n          <MDStateLayerForcedStateProvider pressed>\n            <MDIconButton :data-testid="`icon-geometry-${size}-pressed`" class="md-state_pressed" :tooltip="size" :size="size" shape="round" md-symbol-name="edit" />\n          </MDStateLayerForcedStateProvider>\n          <MDIconButton :data-testid="`icon-geometry-${size}-selected-round`" :tooltip="size" :size="size" shape="round" variant="toggle" selected color="tonal" md-symbol-name="check" />\n          <MDIconButton :data-testid="`icon-geometry-${size}-selected-square`" :tooltip="size" :size="size" shape="square" variant="toggle" selected color="tonal" md-symbol-name="check" />\n          <MDIconButton :data-testid="`icon-geometry-${size}-outlined`" :tooltip="size" :size="size" color="outlined" md-symbol-name="edit" />\n        </div>\n      </div>\n    ' }) }, M = { tags: ["visual"], render: () => ({ components: { MDIconButton: a, MDStateLayerForcedStateProvider: c }, template: `
      <div data-testid="visual-md-icon-button-toggle-interaction-states" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 2">
        <div class="visual-row"><span class="visual-gallery-label">Unselected</span><span class="visual-gallery-label">Selected</span><span class="visual-gallery-label">Selected hover</span></div>
        <div class="visual-row">
          <MDIconButton tooltip="Unselected" variant="toggle" color="tonal" md-symbol-name="bookmark" />
          <MDIconButton tooltip="Selected" variant="toggle" selected color="tonal" md-symbol-name="bookmark" />
          <MDStateLayerForcedStateProvider hovered>
            <MDIconButton class="md-state_hover" tooltip="Selected hover" variant="toggle" selected color="tonal" md-symbol-name="bookmark" />
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row"><span class="visual-gallery-label">Selected focus</span><span class="visual-gallery-label">Selected pressed</span><span class="visual-gallery-label">Disabled selected</span></div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider focused>
            <MDIconButton class="md-state_focused" tooltip="Selected focus" variant="toggle" selected color="tonal" md-symbol-name="bookmark" />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton class="md-state_pressed" tooltip="Selected pressed" variant="toggle" selected color="tonal" md-symbol-name="bookmark" />
          </MDStateLayerForcedStateProvider>
          <MDIconButton tooltip="Disabled selected" variant="toggle" selected disabled color="tonal" md-symbol-name="bookmark" />
        </div>
      </div>
    ` }) }, I = { decorators: [G], render: () => ({ components: { MDIconButton: a }, setup() {
  Z();
}, template: `
      <div class="visual-checker-backdrop" style="position:fixed;inset:0;">
        <div id="visual-md-icon-button-focus-indicator" style="position:absolute;inset:auto 12px 12px auto;">
        <MDIconButton id="storybook-md-icon-button-focus" tooltip="Focus target" color="filled" md-symbol-name="favorite" />
        </div>
      </div>
    ` }) }, S = { render: () => ({ components: { MDIconButton: a, MDStateLayerForcedStateProvider: c }, template: `
      <div data-testid="visual-md-icon-button-disabled-state-precedence" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDIconButton data-testid="disabled-resting-standard" tooltip="Disabled standard" color="standard" disabled md-symbol-name="edit" />
          <MDIconButton data-testid="disabled-resting" tooltip="Disabled outlined" color="outlined" disabled md-symbol-name="edit" />
          <MDStateLayerForcedStateProvider hovered>
            <MDIconButton data-testid="disabled-hover" class="md-state_hover" tooltip="Disabled outlined hover" color="outlined" disabled md-symbol-name="edit" />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDIconButton data-testid="disabled-focus" class="md-state_focused" tooltip="Disabled outlined focus" color="outlined" disabled md-symbol-name="edit" />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton data-testid="disabled-pressed" class="md-state_pressed" tooltip="Disabled outlined pressed" color="outlined" disabled md-symbol-name="edit" />
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    ` }) }, w = { render: () => ({ components: { MDIconButton: a }, template: `
      <div data-testid="visual-md-icon-button-outline-widths" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDIconButton data-testid="outline-width-small" tooltip="Small outlined" color="outlined" size="small" md-symbol-name="edit" />
          <MDIconButton data-testid="outline-width-large" tooltip="Large outlined" color="outlined" size="large" md-symbol-name="edit" />
          <MDIconButton data-testid="outline-width-extra-large" tooltip="Extra large outlined" color="outlined" size="extra-large" md-symbol-name="edit" />
        </div>
      </div>
    ` }) }, x = { render: () => ({ components: { MDIconButton: a, MDStateLayerForcedStateProvider: c }, template: `
      <div data-testid="visual-md-icon-button-token-routing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered><MDIconButton data-testid="icon-button-standard-hover" class="md-state_hover" tooltip="Standard hover" color="standard" md-symbol-name="edit" style="--md-comp-icon-button-standard-hovered-icon-color:rgb(240 20 20);--md-comp-icon-button-standard-hovered-state-layer-color:rgb(20 210 210);--md-comp-icon-button-standard-hovered-state-layer-opacity:0.04;" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDIconButton data-testid="icon-button-standard-focus" class="md-state_focused" tooltip="Standard focus" color="standard" md-symbol-name="edit" style="--md-comp-icon-button-standard-focused-icon-color:rgb(20 140 20);--md-comp-icon-button-standard-focused-state-layer-color:rgb(210 20 210);--md-comp-icon-button-standard-focused-state-layer-opacity:0.18;" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDIconButton data-testid="icon-button-standard-pressed" class="md-state_pressed" tooltip="Standard pressed" color="standard" md-symbol-name="edit" style="--md-comp-icon-button-standard-pressed-icon-color:rgb(20 20 240);--md-comp-icon-button-standard-pressed-state-layer-color:rgb(210 130 20);--md-comp-icon-button-standard-pressed-state-layer-opacity:0.30;" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDIconButton
              data-testid="icon-button-hover"
              class="md-state_hover"
              tooltip="Filled hover"
              color="filled"
              md-symbol-name="favorite"
              style="
                --md-comp-icon-button-filled-hovered-icon-color: rgb(255 0 0);
                --md-comp-icon-button-filled-hovered-state-layer-color: rgb(0 200 200);
                --md-comp-icon-button-filled-hovered-state-layer-opacity: 0.03;
              "
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDIconButton
              data-testid="icon-button-focus"
              class="md-state_focused"
              tooltip="Filled focus"
              color="filled"
              md-symbol-name="favorite"
              style="
                --md-comp-icon-button-filled-focused-icon-color: rgb(0 128 0);
                --md-comp-icon-button-filled-focused-state-layer-color: rgb(200 0 200);
                --md-comp-icon-button-filled-focused-state-layer-opacity: 0.17;
              "
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton
              data-testid="icon-button-pressed"
              class="md-state_pressed"
              tooltip="Filled pressed"
              color="filled"
              md-symbol-name="favorite"
              style="
                --md-comp-icon-button-filled-pressed-icon-color: rgb(0 0 255);
                --md-comp-icon-button-filled-pressed-state-layer-color: rgb(200 120 0);
                --md-comp-icon-button-filled-pressed-state-layer-opacity: 0.29;
              "
            />
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDIconButton
              data-testid="icon-button-tonal-hover"
              class="md-state_hover"
              tooltip="Tonal hover"
              color="tonal"
              md-symbol-name="bookmark"
              style="
                --md-comp-icon-button-tonal-hovered-icon-color: rgb(255 0 0);
                --md-comp-icon-button-tonal-hovered-state-layer-color: rgb(0 200 200);
                --md-comp-icon-button-tonal-hovered-state-layer-opacity: 0.03;
              "
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDIconButton
              data-testid="icon-button-tonal-focus"
              class="md-state_focused"
              tooltip="Tonal focus"
              color="tonal"
              md-symbol-name="bookmark"
              style="
                --md-comp-icon-button-tonal-focused-icon-color: rgb(0 128 0);
                --md-comp-icon-button-tonal-focused-state-layer-color: rgb(200 0 200);
                --md-comp-icon-button-tonal-focused-state-layer-opacity: 0.17;
              "
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton
              data-testid="icon-button-tonal-pressed"
              class="md-state_pressed"
              tooltip="Tonal pressed"
              color="tonal"
              md-symbol-name="bookmark"
              style="
                --md-comp-icon-button-tonal-pressed-icon-color: rgb(0 0 255);
                --md-comp-icon-button-tonal-pressed-state-layer-color: rgb(200 120 0);
                --md-comp-icon-button-tonal-pressed-state-layer-opacity: 0.29;
              "
            />
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDIconButton
              data-testid="icon-button-outlined-hover"
              class="md-state_hover"
              tooltip="Outlined hover"
              color="outlined"
              md-symbol-name="edit"
              style="
                --md-comp-icon-button-outlined-outline-color: rgb(120 10 10);
                --md-comp-icon-button-outlined-hovered-icon-color: rgb(120 10 200);
                --md-comp-icon-button-outlined-hovered-state-layer-color: rgb(0 200 200);
                --md-comp-icon-button-outlined-hovered-state-layer-opacity: 0.03;
              "
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDIconButton
              data-testid="icon-button-outlined-focus"
              class="md-state_focused"
              tooltip="Outlined focus"
              color="outlined"
              md-symbol-name="edit"
              style="
                --md-comp-icon-button-outlined-outline-color: rgb(120 10 10);
                --md-comp-icon-button-outlined-focused-icon-color: rgb(10 120 10);
                --md-comp-icon-button-outlined-focused-state-layer-color: rgb(200 0 200);
                --md-comp-icon-button-outlined-focused-state-layer-opacity: 0.17;
              "
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton
              data-testid="icon-button-outlined-pressed"
              class="md-state_pressed"
              tooltip="Outlined pressed"
              color="outlined"
              md-symbol-name="edit"
              style="
                --md-comp-icon-button-outlined-outline-color: rgb(120 10 10);
                --md-comp-icon-button-outlined-pressed-icon-color: rgb(10 10 120);
                --md-comp-icon-button-outlined-pressed-state-layer-color: rgb(200 120 0);
                --md-comp-icon-button-outlined-pressed-state-layer-opacity: 0.29;
              "
            />
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDIconButton
            data-testid="icon-button-outlined-unselected"
            tooltip="Outlined unselected"
            variant="toggle"
            color="outlined"
            md-symbol-name="edit"
            style="--md-comp-icon-button-outlined-unselected-outline-color: rgb(120 10 10);"
          />
          <MDIconButton
            data-testid="icon-button-outlined-selected"
            tooltip="Outlined selected"
            variant="toggle"
            selected
            color="outlined"
            md-symbol-name="edit"
            style="--md-comp-icon-button-outlined-selected-container-color: rgb(10 120 10);"
          />
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton
              data-testid="icon-button-selected-pressed"
              class="md-state_pressed"
              tooltip="Standard selected pressed"
              variant="toggle"
              selected
              color="standard"
              md-symbol-name="bookmark"
              style="
                --md-comp-icon-button-standard-selected-pressed-icon-color: rgb(180 0 180);
                --md-comp-icon-button-standard-selected-pressed-state-layer-color: rgb(180 0 0);
                --md-comp-icon-button-standard-pressed-state-layer-opacity: 0.11;
              "
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton
              data-testid="icon-button-unselected-pressed"
              class="md-state_pressed"
              tooltip="Standard unselected pressed"
              variant="toggle"
              color="standard"
              md-symbol-name="bookmark"
              style="
                --md-comp-icon-button-standard-unselected-pressed-icon-color: rgb(0 90 0);
                --md-comp-icon-button-standard-unselected-pressed-state-layer-color: rgb(0 0 180);
                --md-comp-icon-button-standard-pressed-state-layer-opacity: 0.21;
              "
            />
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    ` }) }, H = ["standard", "filled", "tonal", "outlined"], U = ["hover", "focus", "pressed"], P = { render: () => ({ components: { MDIconButton: a, MDStateLayerForcedStateProvider: c }, setup() {
  return { ICON_BUTTON_TOGGLE_STYLES: H, ICON_BUTTON_TOGGLE_INTERACTION_STATES: U };
}, template: `
      <div data-testid="visual-md-icon-button-default-toggle-role-matrix" class="visual-checker-backdrop">
        <div v-for="style in ICON_BUTTON_TOGGLE_STYLES" :key="style" class="visual-row">
          <template v-for="selected in [false, true]" :key="String(selected)">
            <MDIconButton :data-testid="'default-toggle-' + style + '-' + (selected ? 'selected' : 'unselected') + '-resting'" :tooltip="style + ' ' + (selected ? 'selected' : 'unselected') + ' resting'" variant="toggle" :selected="selected" :color="style" md-symbol-name="bookmark" />
            <MDStateLayerForcedStateProvider
              v-for="state in ICON_BUTTON_TOGGLE_INTERACTION_STATES"
              :key="state"
              :hovered="state === 'hover'"
              :focused="state === 'focus'"
              :pressed="state === 'pressed'"
            >
              <MDIconButton :data-testid="'default-toggle-' + style + '-' + (selected ? 'selected' : 'unselected') + '-' + state" :class="'md-state_' + (state === 'focus' ? 'focused' : state)" :tooltip="style + ' ' + (selected ? 'selected' : 'unselected') + ' ' + state" variant="toggle" :selected="selected" :color="style" md-symbol-name="bookmark" />
            </MDStateLayerForcedStateProvider>
          </template>
        </div>
      </div>
    ` }) }, $ = { standard: { selected: { focus: ["rgb(209 91 2)", "rgb(2 149 209)"], pressed: ["rgb(208 92 4)", "rgb(4 148 208)"] }, unselected: { focus: ["rgb(2 139 71)", "rgb(149 2 91)"], pressed: ["rgb(4 138 72)", "rgb(148 4 92)"] }, focusOpacity: "0.17", pressedOpacity: "0.27" }, filled: { selected: { focus: ["rgb(254 229 62)", "rgb(2 198 161)"], pressed: ["rgb(253 228 64)", "rgb(4 196 162)"] }, unselected: { focus: ["rgb(254 149 202)", "rgb(149 82 1)"], pressed: ["rgb(253 148 204)", "rgb(148 84 2)"] }, focusOpacity: "0.19", pressedOpacity: "0.29" }, tonal: { selected: { focus: ["rgb(254 253 92)", "rgb(199 102 3)"], pressed: ["rgb(253 251 94)", "rgb(198 104 6)"] }, unselected: { focus: ["rgb(92 253 254)", "rgb(3 119 199)"], pressed: ["rgb(94 251 253)", "rgb(6 118 198)"] }, focusOpacity: "0.23", pressedOpacity: "0.33" }, outlined: { selected: { focus: ["rgb(254 62 179)", "rgb(149 3 254)"], pressed: ["rgb(253 64 178)", "rgb(148 6 253)"] }, unselected: { focus: ["rgb(62 253 149)", "rgb(3 89 254)"], pressed: ["rgb(64 251 148)", "rgb(6 88 253)"] }, focusOpacity: "0.25", pressedOpacity: "0.35" } }, j = { standard: { selected: { icon: "rgb(210 90 0)", hoverIcon: "rgb(210 90 40)", stateLayerColor: "rgb(0 150 210)" }, unselected: { icon: "rgb(0 140 70)", hoverIcon: "rgb(40 140 70)", stateLayerColor: "rgb(150 0 90)" }, hoverOpacity: "0.07" }, filled: { selected: { container: "rgb(10 60 10)", icon: "rgb(255 210 0)", hoverIcon: "rgb(255 230 60)", stateLayerColor: "rgb(0 200 160)" }, unselected: { container: "rgb(10 10 90)", icon: "rgb(255 120 180)", hoverIcon: "rgb(255 150 200)", stateLayerColor: "rgb(150 80 0)" }, hoverOpacity: "0.09" }, tonal: { selected: { container: "rgb(90 60 10)", icon: "rgb(255 255 0)", hoverIcon: "rgb(255 255 90)", stateLayerColor: "rgb(200 100 0)" }, unselected: { container: "rgb(10 90 60)", icon: "rgb(0 255 255)", hoverIcon: "rgb(90 255 255)", stateLayerColor: "rgb(0 120 200)" }, hoverOpacity: "0.13" }, outlined: { selected: { container: "rgb(60 10 90)", icon: "rgb(255 0 150)", hoverIcon: "rgb(255 60 180)", stateLayerColor: "rgb(150 0 255)" }, unselected: { icon: "rgb(0 255 120)", hoverIcon: "rgb(60 255 150)", stateLayerColor: "rgb(0 90 255)", outline: "rgb(90 60 0)" }, hoverOpacity: "0.15" } }, pe = (n, t) => {
  const e = j[n][t], s = { [`--md-comp-icon-button-${n}-${t}-icon-color`]: e.icon };
  return e.container !== void 0 && (s[`--md-comp-icon-button-${n}-${t}-container-color`] = e.container), e.outline !== void 0 && (s[`--md-comp-icon-button-${n}-${t}-outline-color`] = e.outline), s;
}, ge = (n, t, e) => {
  const s = j[n], i = s[t], [o, L] = e === "hover" ? [i.hoverIcon, i.stateLayerColor] : $[n][t][e], d = e === "hover" ? s.hoverOpacity : $[n][`${e}Opacity`], u = e === "hover" ? "hovered" : e === "focus" ? "focused" : "pressed";
  return { [`--md-comp-icon-button-${n}-${u}-state-layer-opacity`]: d, [`--md-comp-icon-button-${n}-${t}-${u}-icon-color`]: o, [`--md-comp-icon-button-${n}-${t}-${u}-state-layer-color`]: L };
}, B = { render: () => ({ components: { MDIconButton: a, MDStateLayerForcedStateProvider: c }, setup() {
  return { ICON_BUTTON_TOGGLE_STYLES: H, ICON_BUTTON_TOGGLE_INTERACTION_STATES: U, iconButtonToggleRestingStyle: pe, iconButtonToggleInteractionStyle: ge };
}, template: `
      <div data-testid="visual-md-icon-button-toggle-token-routing" class="visual-checker-backdrop">
        <div v-for="style in ICON_BUTTON_TOGGLE_STYLES" :key="style" class="visual-row">
          <MDIconButton
            :data-testid="\`icon-toggle-token-\${style}-selected-resting\`"
            :tooltip="\`\${style} selected\`"
            variant="toggle"
            selected
            :color="style"
            md-symbol-name="check"
            :style="iconButtonToggleRestingStyle(style, 'selected')"
          />
          <MDIconButton
            :data-testid="\`icon-toggle-token-\${style}-unselected-resting\`"
            :tooltip="\`\${style} unselected\`"
            variant="toggle"
            :color="style"
            md-symbol-name="check"
            :style="iconButtonToggleRestingStyle(style, 'unselected')"
          />
          <MDStateLayerForcedStateProvider
            v-for="state in ICON_BUTTON_TOGGLE_INTERACTION_STATES"
            :key="'selected-' + state"
            :hovered="state === 'hover'" :focused="state === 'focus'" :pressed="state === 'pressed'"
          >
            <MDIconButton
              :data-testid="\`icon-toggle-token-\${style}-selected-\${state}\`"
              :class="'md-state_' + (state === 'focus' ? 'focused' : state)"
              :tooltip="\`\${style} selected \${state}\`"
              variant="toggle"
              selected
              :color="style"
              md-symbol-name="check"
              :style="iconButtonToggleInteractionStyle(style, 'selected', state)"
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider
            v-for="state in ICON_BUTTON_TOGGLE_INTERACTION_STATES"
            :key="'unselected-' + state"
            :hovered="state === 'hover'" :focused="state === 'focus'" :pressed="state === 'pressed'"
          >
            <MDIconButton
              :data-testid="\`icon-toggle-token-\${style}-unselected-\${state}\`"
              :class="'md-state_' + (state === 'focus' ? 'focused' : state)"
              :tooltip="\`\${style} unselected \${state}\`"
              variant="toggle"
              :color="style"
              md-symbol-name="check"
              :style="iconButtonToggleInteractionStyle(style, 'unselected', state)"
            />
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    ` }) }, q = { render: () => ({ components: { MDIconButtonToolbarInteractionStory: oe }, template: "<MDIconButtonToolbarInteractionStory />" }) }, E = { render: () => ({ components: { MDIconButton: a }, template: `
      <div data-testid="visual-md-icon-button-loading-color-routing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDIconButton
            data-testid="icon-button-resting-color"
            tooltip="Loading"
            color="filled"
            md-symbol-name="favorite"
            style="--md-comp-icon-button-filled-icon-color: rgb(12 34 56);"
          />
          <MDIconButton
            data-testid="icon-button-loading-color"
            tooltip="Loading"
            color="filled"
            loading
            md-symbol-name="favorite"
            style="--md-comp-icon-button-filled-icon-color: rgb(12 34 56);"
          />
        </div>
      </div>
    ` }) };
h.parameters = { ...h.parameters, docs: { ...h.parameters?.docs, source: { originalSource: `{
  decorators: [withCheckerboard]
}`, ...h.parameters?.docs?.source } } };
b.parameters = { ...b.parameters, docs: { ...b.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDIconButton,
      MDStateLayerForcedStateProvider
    },
    template: \`
      <div data-testid="visual-md-icon-button-states" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 2">
        <div class="visual-row"><span class="visual-gallery-label">Standard enabled</span><span class="visual-gallery-label">Filled enabled</span><span class="visual-gallery-label">Outlined enabled</span></div>
        <div class="visual-row">
          <MDIconButton tooltip="Standard" color="standard" md-symbol-name="more_vert" />
          <MDIconButton tooltip="Filled" color="filled" md-symbol-name="favorite" />
          <MDIconButton tooltip="Outlined" color="outlined" md-symbol-name="edit" />
        </div>
        <div class="visual-row"><span class="visual-gallery-label">Tonal enabled</span><span class="visual-gallery-label">Selected</span><span class="visual-gallery-label">Disabled standard</span></div>
        <div class="visual-row">
          <MDIconButton tooltip="Tonal" color="tonal" md-symbol-name="bookmark" />
          <MDIconButton tooltip="Selected toggle" variant="toggle" selected color="standard" md-symbol-name="check" />
          <MDIconButton tooltip="Disabled standard" color="standard" disabled md-symbol-name="block" />
        </div>
        <div class="visual-row"><span class="visual-gallery-label">Disabled unselected</span><span class="visual-gallery-label">Disabled selected</span><span class="visual-gallery-label">Disabled filled selected</span></div>
        <div class="visual-row">
          <MDIconButton tooltip="Disabled standard toggle" variant="toggle" color="standard" disabled md-symbol-name="bookmark" />
          <MDIconButton tooltip="Disabled standard toggle selected" variant="toggle" selected color="standard" disabled md-symbol-name="bookmark" />
          <MDIconButton tooltip="Disabled filled toggle selected" variant="toggle" selected color="filled" disabled md-symbol-name="favorite" />
        </div>
        <div class="visual-row"><span class="visual-gallery-label">Disabled tonal selected</span><span class="visual-gallery-label">Disabled outlined selected</span><span class="visual-gallery-label">Disabled outlined</span></div>
        <div class="visual-row">
          <MDIconButton tooltip="Disabled tonal toggle selected" variant="toggle" selected color="tonal" disabled md-symbol-name="bookmark" />
          <MDIconButton tooltip="Disabled outlined toggle selected" variant="toggle" selected color="outlined" disabled md-symbol-name="edit" />
          <MDIconButton tooltip="Disabled outlined" color="outlined" disabled md-symbol-name="edit" />
        </div>
        <div class="visual-row"><span class="visual-gallery-label">Disabled filled</span><span class="visual-gallery-label">Disabled tonal</span><span aria-hidden="true"></span></div>
        <div class="visual-row">
          <MDIconButton tooltip="Disabled filled" color="filled" disabled md-symbol-name="favorite" />
          <MDIconButton tooltip="Disabled tonal" color="tonal" disabled md-symbol-name="bookmark" />
          <span aria-hidden="true"></span>
        </div>
        <div class="visual-row"><span class="visual-gallery-label">Extra-small target</span><span class="visual-gallery-label">Small target</span><span aria-hidden="true"></span></div>
        <div data-testid="visual-md-icon-button-targets" class="visual-row">
          <MDIconButton tooltip="Extra small target" size="extra-small" md-symbol-name="add" />
          <MDIconButton tooltip="Small target" size="small" md-symbol-name="add" />
          <span aria-hidden="true"></span>
        </div>
      </div>
    \`
  })
}`, ...b.parameters?.docs?.source } } };
y.parameters = { ...y.parameters, docs: { ...y.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDIconButton,
      MDStateLayerForcedStateProvider
    },
    template: \`
      <div data-testid="visual-md-icon-button-interaction-states" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 3">
        <div class="visual-row"><span class="visual-gallery-heading">Standard</span><span class="visual-gallery-label">Hover</span><span class="visual-gallery-label">Focus</span><span class="visual-gallery-label">Pressed</span></div>
        <div class="visual-row"><span aria-hidden="true"></span>
          <MDStateLayerForcedStateProvider hovered><MDIconButton class="md-state_hover" tooltip="Standard hover" color="standard" md-symbol-name="add" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDIconButton class="md-state_focused" tooltip="Standard focus" color="standard" md-symbol-name="add" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDIconButton class="md-state_pressed" tooltip="Standard pressed" color="standard" md-symbol-name="add" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row"><span class="visual-gallery-heading">Filled</span><span class="visual-gallery-label">Hover</span><span class="visual-gallery-label">Focus</span><span class="visual-gallery-label">Pressed</span></div>
        <div class="visual-row"><span aria-hidden="true"></span>
          <MDStateLayerForcedStateProvider hovered><MDIconButton class="md-state_hover" tooltip="Filled hover" color="filled" md-symbol-name="favorite" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDIconButton class="md-state_focused" tooltip="Filled focus" color="filled" md-symbol-name="favorite" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDIconButton class="md-state_pressed" tooltip="Filled pressed" color="filled" md-symbol-name="favorite" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row"><span class="visual-gallery-heading">Tonal</span><span class="visual-gallery-label">Hover</span><span class="visual-gallery-label">Focus</span><span class="visual-gallery-label">Pressed</span></div>
        <div class="visual-row"><span aria-hidden="true"></span>
          <MDStateLayerForcedStateProvider hovered><MDIconButton class="md-state_hover" tooltip="Tonal hover" color="tonal" md-symbol-name="bookmark" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDIconButton class="md-state_focused" tooltip="Tonal focus" color="tonal" md-symbol-name="bookmark" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDIconButton class="md-state_pressed" tooltip="Tonal pressed" color="tonal" md-symbol-name="bookmark" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row"><span class="visual-gallery-heading">Outlined</span><span class="visual-gallery-label">Hover</span><span class="visual-gallery-label">Focus</span><span class="visual-gallery-label">Pressed</span></div>
        <div class="visual-row"><span aria-hidden="true"></span>
          <MDStateLayerForcedStateProvider hovered><MDIconButton class="md-state_hover" tooltip="Outlined hover" color="outlined" md-symbol-name="edit" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDIconButton class="md-state_focused" tooltip="Outlined focus" color="outlined" md-symbol-name="edit" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDIconButton class="md-state_pressed" tooltip="Outlined pressed" color="outlined" md-symbol-name="edit" /></MDStateLayerForcedStateProvider>
        </div>
      </div>
    \`
  })
}`, ...y.parameters?.docs?.source } } };
f.parameters = { ...f.parameters, docs: { ...f.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDIconButtonToolbarVisualStory
    },
    template: '<MDIconButtonToolbarVisualStory />'
  })
}`, ...f.parameters?.docs?.source } } };
v.parameters = { ...v.parameters, docs: { ...v.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDIconButtonTargetHitVisualStory
    },
    template: '<MDIconButtonTargetHitVisualStory />'
  })
}`, ...v.parameters?.docs?.source } } };
D.parameters = { ...D.parameters, docs: { ...D.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDIconButton,
      MDStateLayerForcedStateProvider
    },
    template: \`
      <div data-testid="visual-md-icon-button-geometry" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 3">
        <div class="visual-row"><span class="visual-gallery-heading">Width</span><span class="visual-gallery-label">Narrow</span><span class="visual-gallery-label">Default width</span><span class="visual-gallery-label">Wide</span></div>
        <div class="visual-row"><span aria-hidden="true"></span>
          <MDIconButton data-testid="geometry-width-narrow" tooltip="Narrow" width="narrow" md-symbol-name="edit" />
          <MDIconButton data-testid="geometry-width-default" tooltip="Default width" width="default" md-symbol-name="edit" />
          <MDIconButton data-testid="geometry-width-wide" tooltip="Wide" width="wide" md-symbol-name="edit" />
        </div>
        <div class="visual-row"><span class="visual-gallery-heading">Shape</span><span class="visual-gallery-label">Round</span><span class="visual-gallery-label">Square</span><span aria-hidden="true"></span></div>
        <div class="visual-row"><span aria-hidden="true"></span>
          <MDIconButton data-testid="geometry-shape-round" tooltip="Round" shape="round" color="tonal" md-symbol-name="edit" />
          <MDIconButton data-testid="geometry-shape-square" tooltip="Square" shape="square" color="tonal" md-symbol-name="edit" />
          <span aria-hidden="true"></span>
        </div>
        <div class="visual-row"><span class="visual-gallery-heading">Shape state</span><span class="visual-gallery-label">Selected round</span><span class="visual-gallery-label">Pressed round</span><span class="visual-gallery-label">Selected + pressed round</span></div>
        <div class="visual-row"><span aria-hidden="true"></span>
          <MDIconButton data-testid="geometry-round-selected" tooltip="Round selected" variant="toggle" shape="round" selected color="tonal" md-symbol-name="check" />
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton data-testid="geometry-round-pressed" class="md-state_pressed" tooltip="Round pressed" shape="round" color="tonal" md-symbol-name="check" />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton data-testid="geometry-round-selected-pressed" class="md-state_pressed" tooltip="Round selected pressed" variant="toggle" shape="round" selected color="tonal" md-symbol-name="check" />
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    \`
  })
}`, ...D.parameters?.docs?.source } } };
k.parameters = { ...k.parameters, docs: { ...k.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDIconButton
    },
    setup() {
      return {
        ICON_BUTTON_SIZES
      };
    },
    template: \`
      <div data-testid="visual-md-icon-button-size-geometry" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 8">
        <div class="visual-row"><span class="visual-gallery-heading">Size</span><span class="visual-gallery-label">Default width</span><span class="visual-gallery-label">Narrow</span><span class="visual-gallery-label">Wide</span><span class="visual-gallery-label">Square</span><span class="visual-gallery-label">Pressed</span><span class="visual-gallery-label">Selected round</span><span class="visual-gallery-label">Selected square</span><span class="visual-gallery-label">Outlined</span></div>
        <div v-for="size in ICON_BUTTON_SIZES" :key="size" class="visual-row">
          <span class="visual-gallery-label">{{ size }}</span>
          <MDIconButton :data-testid="\\\`icon-geometry-\\\${size}-default\\\`" :tooltip="size" :size="size" width="default" md-symbol-name="edit" />
          <MDIconButton :data-testid="\\\`icon-geometry-\\\${size}-narrow\\\`" :tooltip="size" :size="size" width="narrow" md-symbol-name="edit" />
          <MDIconButton :data-testid="\\\`icon-geometry-\\\${size}-wide\\\`" :tooltip="size" :size="size" width="wide" md-symbol-name="edit" />
          <MDIconButton :data-testid="\\\`icon-geometry-\\\${size}-square\\\`" :tooltip="size" :size="size" shape="square" md-symbol-name="edit" />
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton :data-testid="\\\`icon-geometry-\\\${size}-pressed\\\`" class="md-state_pressed" :tooltip="size" :size="size" shape="round" md-symbol-name="edit" />
          </MDStateLayerForcedStateProvider>
          <MDIconButton :data-testid="\\\`icon-geometry-\\\${size}-selected-round\\\`" :tooltip="size" :size="size" shape="round" variant="toggle" selected color="tonal" md-symbol-name="check" />
          <MDIconButton :data-testid="\\\`icon-geometry-\\\${size}-selected-square\\\`" :tooltip="size" :size="size" shape="square" variant="toggle" selected color="tonal" md-symbol-name="check" />
          <MDIconButton :data-testid="\\\`icon-geometry-\\\${size}-outlined\\\`" :tooltip="size" :size="size" color="outlined" md-symbol-name="edit" />
        </div>
      </div>
    \`
  })
}`, ...k.parameters?.docs?.source } } };
M.parameters = { ...M.parameters, docs: { ...M.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDIconButton,
      MDStateLayerForcedStateProvider
    },
    template: \`
      <div data-testid="visual-md-icon-button-toggle-interaction-states" class="visual-checker-backdrop visual-gallery-grid" style="--visual-gallery-columns: 2">
        <div class="visual-row"><span class="visual-gallery-label">Unselected</span><span class="visual-gallery-label">Selected</span><span class="visual-gallery-label">Selected hover</span></div>
        <div class="visual-row">
          <MDIconButton tooltip="Unselected" variant="toggle" color="tonal" md-symbol-name="bookmark" />
          <MDIconButton tooltip="Selected" variant="toggle" selected color="tonal" md-symbol-name="bookmark" />
          <MDStateLayerForcedStateProvider hovered>
            <MDIconButton class="md-state_hover" tooltip="Selected hover" variant="toggle" selected color="tonal" md-symbol-name="bookmark" />
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row"><span class="visual-gallery-label">Selected focus</span><span class="visual-gallery-label">Selected pressed</span><span class="visual-gallery-label">Disabled selected</span></div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider focused>
            <MDIconButton class="md-state_focused" tooltip="Selected focus" variant="toggle" selected color="tonal" md-symbol-name="bookmark" />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton class="md-state_pressed" tooltip="Selected pressed" variant="toggle" selected color="tonal" md-symbol-name="bookmark" />
          </MDStateLayerForcedStateProvider>
          <MDIconButton tooltip="Disabled selected" variant="toggle" selected disabled color="tonal" md-symbol-name="bookmark" />
        </div>
      </div>
    \`
  })
}`, ...M.parameters?.docs?.source } } };
I.parameters = { ...I.parameters, docs: { ...I.parameters?.docs, source: { originalSource: `{
  decorators: [withCheckerboard],
  render: () => ({
    components: {
      MDIconButton
    },
    setup() {
      useFocusIndicator();
    },
    template: \`
      <div class="visual-checker-backdrop" style="position:fixed;inset:0;">
        <div id="visual-md-icon-button-focus-indicator" style="position:absolute;inset:auto 12px 12px auto;">
        <MDIconButton id="storybook-md-icon-button-focus" tooltip="Focus target" color="filled" md-symbol-name="favorite" />
        </div>
      </div>
    \`
  })
}`, ...I.parameters?.docs?.source } } };
S.parameters = { ...S.parameters, docs: { ...S.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDIconButton,
      MDStateLayerForcedStateProvider
    },
    template: \`
      <div data-testid="visual-md-icon-button-disabled-state-precedence" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDIconButton data-testid="disabled-resting-standard" tooltip="Disabled standard" color="standard" disabled md-symbol-name="edit" />
          <MDIconButton data-testid="disabled-resting" tooltip="Disabled outlined" color="outlined" disabled md-symbol-name="edit" />
          <MDStateLayerForcedStateProvider hovered>
            <MDIconButton data-testid="disabled-hover" class="md-state_hover" tooltip="Disabled outlined hover" color="outlined" disabled md-symbol-name="edit" />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDIconButton data-testid="disabled-focus" class="md-state_focused" tooltip="Disabled outlined focus" color="outlined" disabled md-symbol-name="edit" />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton data-testid="disabled-pressed" class="md-state_pressed" tooltip="Disabled outlined pressed" color="outlined" disabled md-symbol-name="edit" />
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    \`
  })
}`, ...S.parameters?.docs?.source } } };
w.parameters = { ...w.parameters, docs: { ...w.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDIconButton
    },
    template: \`
      <div data-testid="visual-md-icon-button-outline-widths" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDIconButton data-testid="outline-width-small" tooltip="Small outlined" color="outlined" size="small" md-symbol-name="edit" />
          <MDIconButton data-testid="outline-width-large" tooltip="Large outlined" color="outlined" size="large" md-symbol-name="edit" />
          <MDIconButton data-testid="outline-width-extra-large" tooltip="Extra large outlined" color="outlined" size="extra-large" md-symbol-name="edit" />
        </div>
      </div>
    \`
  })
}`, ...w.parameters?.docs?.source } } };
x.parameters = { ...x.parameters, docs: { ...x.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDIconButton,
      MDStateLayerForcedStateProvider
    },
    template: \`
      <div data-testid="visual-md-icon-button-token-routing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered><MDIconButton data-testid="icon-button-standard-hover" class="md-state_hover" tooltip="Standard hover" color="standard" md-symbol-name="edit" style="--md-comp-icon-button-standard-hovered-icon-color:rgb(240 20 20);--md-comp-icon-button-standard-hovered-state-layer-color:rgb(20 210 210);--md-comp-icon-button-standard-hovered-state-layer-opacity:0.04;" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused><MDIconButton data-testid="icon-button-standard-focus" class="md-state_focused" tooltip="Standard focus" color="standard" md-symbol-name="edit" style="--md-comp-icon-button-standard-focused-icon-color:rgb(20 140 20);--md-comp-icon-button-standard-focused-state-layer-color:rgb(210 20 210);--md-comp-icon-button-standard-focused-state-layer-opacity:0.18;" /></MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed><MDIconButton data-testid="icon-button-standard-pressed" class="md-state_pressed" tooltip="Standard pressed" color="standard" md-symbol-name="edit" style="--md-comp-icon-button-standard-pressed-icon-color:rgb(20 20 240);--md-comp-icon-button-standard-pressed-state-layer-color:rgb(210 130 20);--md-comp-icon-button-standard-pressed-state-layer-opacity:0.30;" /></MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDIconButton
              data-testid="icon-button-hover"
              class="md-state_hover"
              tooltip="Filled hover"
              color="filled"
              md-symbol-name="favorite"
              style="
                --md-comp-icon-button-filled-hovered-icon-color: rgb(255 0 0);
                --md-comp-icon-button-filled-hovered-state-layer-color: rgb(0 200 200);
                --md-comp-icon-button-filled-hovered-state-layer-opacity: 0.03;
              "
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDIconButton
              data-testid="icon-button-focus"
              class="md-state_focused"
              tooltip="Filled focus"
              color="filled"
              md-symbol-name="favorite"
              style="
                --md-comp-icon-button-filled-focused-icon-color: rgb(0 128 0);
                --md-comp-icon-button-filled-focused-state-layer-color: rgb(200 0 200);
                --md-comp-icon-button-filled-focused-state-layer-opacity: 0.17;
              "
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton
              data-testid="icon-button-pressed"
              class="md-state_pressed"
              tooltip="Filled pressed"
              color="filled"
              md-symbol-name="favorite"
              style="
                --md-comp-icon-button-filled-pressed-icon-color: rgb(0 0 255);
                --md-comp-icon-button-filled-pressed-state-layer-color: rgb(200 120 0);
                --md-comp-icon-button-filled-pressed-state-layer-opacity: 0.29;
              "
            />
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDIconButton
              data-testid="icon-button-tonal-hover"
              class="md-state_hover"
              tooltip="Tonal hover"
              color="tonal"
              md-symbol-name="bookmark"
              style="
                --md-comp-icon-button-tonal-hovered-icon-color: rgb(255 0 0);
                --md-comp-icon-button-tonal-hovered-state-layer-color: rgb(0 200 200);
                --md-comp-icon-button-tonal-hovered-state-layer-opacity: 0.03;
              "
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDIconButton
              data-testid="icon-button-tonal-focus"
              class="md-state_focused"
              tooltip="Tonal focus"
              color="tonal"
              md-symbol-name="bookmark"
              style="
                --md-comp-icon-button-tonal-focused-icon-color: rgb(0 128 0);
                --md-comp-icon-button-tonal-focused-state-layer-color: rgb(200 0 200);
                --md-comp-icon-button-tonal-focused-state-layer-opacity: 0.17;
              "
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton
              data-testid="icon-button-tonal-pressed"
              class="md-state_pressed"
              tooltip="Tonal pressed"
              color="tonal"
              md-symbol-name="bookmark"
              style="
                --md-comp-icon-button-tonal-pressed-icon-color: rgb(0 0 255);
                --md-comp-icon-button-tonal-pressed-state-layer-color: rgb(200 120 0);
                --md-comp-icon-button-tonal-pressed-state-layer-opacity: 0.29;
              "
            />
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider hovered>
            <MDIconButton
              data-testid="icon-button-outlined-hover"
              class="md-state_hover"
              tooltip="Outlined hover"
              color="outlined"
              md-symbol-name="edit"
              style="
                --md-comp-icon-button-outlined-outline-color: rgb(120 10 10);
                --md-comp-icon-button-outlined-hovered-icon-color: rgb(120 10 200);
                --md-comp-icon-button-outlined-hovered-state-layer-color: rgb(0 200 200);
                --md-comp-icon-button-outlined-hovered-state-layer-opacity: 0.03;
              "
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider focused>
            <MDIconButton
              data-testid="icon-button-outlined-focus"
              class="md-state_focused"
              tooltip="Outlined focus"
              color="outlined"
              md-symbol-name="edit"
              style="
                --md-comp-icon-button-outlined-outline-color: rgb(120 10 10);
                --md-comp-icon-button-outlined-focused-icon-color: rgb(10 120 10);
                --md-comp-icon-button-outlined-focused-state-layer-color: rgb(200 0 200);
                --md-comp-icon-button-outlined-focused-state-layer-opacity: 0.17;
              "
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton
              data-testid="icon-button-outlined-pressed"
              class="md-state_pressed"
              tooltip="Outlined pressed"
              color="outlined"
              md-symbol-name="edit"
              style="
                --md-comp-icon-button-outlined-outline-color: rgb(120 10 10);
                --md-comp-icon-button-outlined-pressed-icon-color: rgb(10 10 120);
                --md-comp-icon-button-outlined-pressed-state-layer-color: rgb(200 120 0);
                --md-comp-icon-button-outlined-pressed-state-layer-opacity: 0.29;
              "
            />
          </MDStateLayerForcedStateProvider>
        </div>
        <div class="visual-row">
          <MDIconButton
            data-testid="icon-button-outlined-unselected"
            tooltip="Outlined unselected"
            variant="toggle"
            color="outlined"
            md-symbol-name="edit"
            style="--md-comp-icon-button-outlined-unselected-outline-color: rgb(120 10 10);"
          />
          <MDIconButton
            data-testid="icon-button-outlined-selected"
            tooltip="Outlined selected"
            variant="toggle"
            selected
            color="outlined"
            md-symbol-name="edit"
            style="--md-comp-icon-button-outlined-selected-container-color: rgb(10 120 10);"
          />
        </div>
        <div class="visual-row">
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton
              data-testid="icon-button-selected-pressed"
              class="md-state_pressed"
              tooltip="Standard selected pressed"
              variant="toggle"
              selected
              color="standard"
              md-symbol-name="bookmark"
              style="
                --md-comp-icon-button-standard-selected-pressed-icon-color: rgb(180 0 180);
                --md-comp-icon-button-standard-selected-pressed-state-layer-color: rgb(180 0 0);
                --md-comp-icon-button-standard-pressed-state-layer-opacity: 0.11;
              "
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider pressed>
            <MDIconButton
              data-testid="icon-button-unselected-pressed"
              class="md-state_pressed"
              tooltip="Standard unselected pressed"
              variant="toggle"
              color="standard"
              md-symbol-name="bookmark"
              style="
                --md-comp-icon-button-standard-unselected-pressed-icon-color: rgb(0 90 0);
                --md-comp-icon-button-standard-unselected-pressed-state-layer-color: rgb(0 0 180);
                --md-comp-icon-button-standard-pressed-state-layer-opacity: 0.21;
              "
            />
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    \`
  })
}`, ...x.parameters?.docs?.source } } };
P.parameters = { ...P.parameters, docs: { ...P.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDIconButton,
      MDStateLayerForcedStateProvider
    },
    setup() {
      return {
        ICON_BUTTON_TOGGLE_STYLES,
        ICON_BUTTON_TOGGLE_INTERACTION_STATES
      };
    },
    template: \`
      <div data-testid="visual-md-icon-button-default-toggle-role-matrix" class="visual-checker-backdrop">
        <div v-for="style in ICON_BUTTON_TOGGLE_STYLES" :key="style" class="visual-row">
          <template v-for="selected in [false, true]" :key="String(selected)">
            <MDIconButton :data-testid="'default-toggle-' + style + '-' + (selected ? 'selected' : 'unselected') + '-resting'" :tooltip="style + ' ' + (selected ? 'selected' : 'unselected') + ' resting'" variant="toggle" :selected="selected" :color="style" md-symbol-name="bookmark" />
            <MDStateLayerForcedStateProvider
              v-for="state in ICON_BUTTON_TOGGLE_INTERACTION_STATES"
              :key="state"
              :hovered="state === 'hover'"
              :focused="state === 'focus'"
              :pressed="state === 'pressed'"
            >
              <MDIconButton :data-testid="'default-toggle-' + style + '-' + (selected ? 'selected' : 'unselected') + '-' + state" :class="'md-state_' + (state === 'focus' ? 'focused' : state)" :tooltip="style + ' ' + (selected ? 'selected' : 'unselected') + ' ' + state" variant="toggle" :selected="selected" :color="style" md-symbol-name="bookmark" />
            </MDStateLayerForcedStateProvider>
          </template>
        </div>
      </div>
    \`
  })
}`, ...P.parameters?.docs?.source } } };
B.parameters = { ...B.parameters, docs: { ...B.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDIconButton,
      MDStateLayerForcedStateProvider
    },
    setup() {
      return {
        ICON_BUTTON_TOGGLE_STYLES,
        ICON_BUTTON_TOGGLE_INTERACTION_STATES,
        iconButtonToggleRestingStyle,
        iconButtonToggleInteractionStyle
      };
    },
    template: \`
      <div data-testid="visual-md-icon-button-toggle-token-routing" class="visual-checker-backdrop">
        <div v-for="style in ICON_BUTTON_TOGGLE_STYLES" :key="style" class="visual-row">
          <MDIconButton
            :data-testid="\\\`icon-toggle-token-\\\${style}-selected-resting\\\`"
            :tooltip="\\\`\\\${style} selected\\\`"
            variant="toggle"
            selected
            :color="style"
            md-symbol-name="check"
            :style="iconButtonToggleRestingStyle(style, 'selected')"
          />
          <MDIconButton
            :data-testid="\\\`icon-toggle-token-\\\${style}-unselected-resting\\\`"
            :tooltip="\\\`\\\${style} unselected\\\`"
            variant="toggle"
            :color="style"
            md-symbol-name="check"
            :style="iconButtonToggleRestingStyle(style, 'unselected')"
          />
          <MDStateLayerForcedStateProvider
            v-for="state in ICON_BUTTON_TOGGLE_INTERACTION_STATES"
            :key="'selected-' + state"
            :hovered="state === 'hover'" :focused="state === 'focus'" :pressed="state === 'pressed'"
          >
            <MDIconButton
              :data-testid="\\\`icon-toggle-token-\\\${style}-selected-\\\${state}\\\`"
              :class="'md-state_' + (state === 'focus' ? 'focused' : state)"
              :tooltip="\\\`\\\${style} selected \\\${state}\\\`"
              variant="toggle"
              selected
              :color="style"
              md-symbol-name="check"
              :style="iconButtonToggleInteractionStyle(style, 'selected', state)"
            />
          </MDStateLayerForcedStateProvider>
          <MDStateLayerForcedStateProvider
            v-for="state in ICON_BUTTON_TOGGLE_INTERACTION_STATES"
            :key="'unselected-' + state"
            :hovered="state === 'hover'" :focused="state === 'focus'" :pressed="state === 'pressed'"
          >
            <MDIconButton
              :data-testid="\\\`icon-toggle-token-\\\${style}-unselected-\\\${state}\\\`"
              :class="'md-state_' + (state === 'focus' ? 'focused' : state)"
              :tooltip="\\\`\\\${style} unselected \\\${state}\\\`"
              variant="toggle"
              :color="style"
              md-symbol-name="check"
              :style="iconButtonToggleInteractionStyle(style, 'unselected', state)"
            />
          </MDStateLayerForcedStateProvider>
        </div>
      </div>
    \`
  })
}`, ...B.parameters?.docs?.source } } };
q.parameters = { ...q.parameters, docs: { ...q.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDIconButtonToolbarInteractionStory
    },
    template: '<MDIconButtonToolbarInteractionStory />'
  })
}`, ...q.parameters?.docs?.source } } };
E.parameters = { ...E.parameters, docs: { ...E.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      MDIconButton
    },
    template: \`
      <div data-testid="visual-md-icon-button-loading-color-routing" class="visual-checker-backdrop">
        <div class="visual-row">
          <MDIconButton
            data-testid="icon-button-resting-color"
            tooltip="Loading"
            color="filled"
            md-symbol-name="favorite"
            style="--md-comp-icon-button-filled-icon-color: rgb(12 34 56);"
          />
          <MDIconButton
            data-testid="icon-button-loading-color"
            tooltip="Loading"
            color="filled"
            loading
            md-symbol-name="favorite"
            style="--md-comp-icon-button-filled-icon-color: rgb(12 34 56);"
          />
        </div>
      </div>
    \`
  })
}`, ...E.parameters?.docs?.source } } };
const xe = ["Default", "VisualStates", "VisualInteractionStates", "CompactToolbarLayout", "ExpandedTargetHitArea", "Geometry", "SizeGeometryMatrix", "ToggleInteractionStates", "FocusIndicatorTarget", "DisabledStatePrecedence", "OutlinedOutlineWidths", "TokenRoutingMatrix", "DefaultToggleRoleMatrix", "ToggleTokenRoutingMatrix", "DenseToolbarInteraction", "LoadingColorRouting"];
export {
  f as CompactToolbarLayout,
  h as Default,
  P as DefaultToggleRoleMatrix,
  q as DenseToolbarInteraction,
  S as DisabledStatePrecedence,
  v as ExpandedTargetHitArea,
  I as FocusIndicatorTarget,
  D as Geometry,
  E as LoadingColorRouting,
  w as OutlinedOutlineWidths,
  k as SizeGeometryMatrix,
  M as ToggleInteractionStates,
  B as ToggleTokenRoutingMatrix,
  x as TokenRoutingMatrix,
  y as VisualInteractionStates,
  b as VisualStates,
  xe as __namedExportsOrder,
  we as default
};
