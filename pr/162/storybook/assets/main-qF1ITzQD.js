import { m as ct, t as J, b as de, p as dt, f as pe, o as ut, u as mt } from "./index-Ci8IP0M-.js";
import { V as ft, W as pt, j as T, p as ae, N as gt, C as ht, l as A, v as Re, d as yt, g as bt, X as vt, z as wt, e as xt, r as Y, y as X, s as kt, Y as Et, Z as Rt, x as z, _ as Xe, R as At } from "./iframe-D_xDKw6y.js";
import { i as Ae } from "./isNumber-BeRyA-l4.js";
function Ye(e) {
  if (e == null) return "";
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return e.map(Ye).join(",");
  const t = String(e);
  return t === "0" && Object.is(Number(e), -0) ? "-0" : t;
}
function Ge(e) {
  return typeof e == "string" || typeof e == "symbol" ? e : Object.is(e?.valueOf?.(), -0) ? "-0" : String(e);
}
function Dt(e) {
  if (Array.isArray(e)) return e.map(Ge);
  if (typeof e == "symbol") return [e];
  e = Ye(e);
  const t = [], i = e.length;
  if (i === 0) return t;
  let n = 0, a = "", r = "", s = false;
  for (e.charCodeAt(0) === 46 && t.push(""); n < i; ) {
    const o = e[n];
    if (r) o === "\\" && n + 1 < i ? (n++, a += e[n]) : o === r ? r = "" : a += o;
    else if (s) o === '"' || o === "'" ? r = o : o === "]" ? (s = false, t.push(a), a = "") : a += o;
    else if (o === "[") s = true, a && (t.push(a), a = "");
    else if (o === ".") {
      a && (t.push(a), a = "");
      const l = e[n + 1];
      (l === void 0 || l === ".") && t.push("");
    } else a += o;
    n++;
  }
  return a && t.push(a), t;
}
function De(e) {
  return e === "__proto__";
}
function qt(e) {
  switch (typeof e) {
    case "number":
    case "symbol":
      return false;
    case "string":
      return e.includes(".") || e.includes("[") || e.includes("]");
  }
}
function Me(e, t, i) {
  if (e == null) return i;
  switch (typeof t) {
    case "string": {
      if (De(t)) return i;
      const n = e[t];
      return n === void 0 ? qt(t) && !Object.hasOwn(e, t) ? Me(e, Dt(t), i) : i : n;
    }
    case "number":
    case "symbol": {
      typeof t == "number" && (t = Ge(t));
      const n = e[t];
      return n === void 0 ? i : n;
    }
    default: {
      if (Array.isArray(t)) return It(e, t, i);
      if (Object.is(t?.valueOf(), -0) ? t = "-0" : t = String(t), De(t)) return i;
      const n = e[t];
      return n === void 0 ? i : n;
    }
  }
}
function It(e, t, i) {
  if (t.length === 0) return i;
  let n = e;
  for (let a = 0; a < t.length; a++) {
    if (n == null || De(t[a])) return i;
    n = n[t[a]];
  }
  return n === void 0 ? i : n;
}
const Ce = (e) => e instanceof Element ? e : e?.$el instanceof HTMLElement ? e.$el : e?.$parent ? Ce(e.$parent) : document.body, Nt = () => {
  const e = pt(), t = ct(() => {
  }, () => {
    if (e?.proxy) return Ce(e.proxy);
  });
  return ft(t.trigger), t;
}, qe = /* @__PURE__ */ Symbol("childrenStackKey"), St = () => {
  const e = gt(/* @__PURE__ */ new Set()), t = ae(qe, void 0), i = t ? ae(t) : void 0, n = /* @__PURE__ */ Symbol("childrenStackKey");
  return Re(qe, n), Re(n, { add: (o) => {
    e.add(o), i?.add(o);
  }, remove: (o) => {
    e.delete(o), i?.remove(o);
  } }), { childStack: e };
}, ie = ht(/* @__PURE__ */ new Map()), Mt = (e) => {
  const t = A(() => de(e)), i = ae(qe, void 0), n = i ? ae(i, void 0) : void 0;
  T(t, (r, s) => {
    s && (n?.remove(s), ie.delete(s)), r && n?.add(r);
  }, { immediate: true });
  const a = Nt();
  T([t, a], ([r, s], [o]) => {
    o && ie.delete(o), r && s && ie.set(r, s);
  }, { immediate: true }), J(() => {
    t.value && (n?.remove(t.value), ie.delete(t.value));
  });
}, Ie = (e, t) => {
  if (e instanceof Element) {
    const n = ie.get(e);
    if (n && n.matches(t)) return n;
    const a = e.parentElement;
    return a ? a.matches(t) ? a : Ie(a, t) : document.body;
  }
  const i = e.$parent;
  if (i) {
    const n = Ce(i);
    return n.matches(t) ? n : Ie(i, t);
  }
  return document.body;
}, Ue = /* @__PURE__ */ Symbol("overlay-container"), we = (e) => {
  Re(Ue, A(() => e.value));
}, An = () => {
  const e = dt(), t = A(() => {
    const n = e.value;
    return n ? Ie(n, "[data-v-app]") : document.body;
  }), i = ae(Ue, t);
  return A(() => i.value ?? t.value);
};
we.__docgenInfo = Object.assign({ displayName: we.name ?? we.__name }, { exportName: "provideOverlayContainer", displayName: "provideOverlayContainer", type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "HTMLElement | SVGElement | null | undefined", declarations: [], schema: { kind: "enum", type: "HTMLElement | SVGElement | null | undefined", schema: ["undefined", "null", { kind: "object", type: "HTMLElement" }, { kind: "object", type: "SVGElement" }] } }, { name: "__@RefSymbol@280", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", declarations: [], schema: "true" }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Overlay/useOverlay.ts" });
const xe = yt({ __name: "TeleportContainer", props: { to: {}, container: {}, defer: { type: Boolean }, disabled: { type: Boolean } }, setup(e) {
  const t = e;
  return Mt(A(() => t.container)), (i, n) => (xt(), bt(vt, { to: e.to, defer: e.defer, disabled: e.disabled }, [wt(i.$slots, "default")], 8, ["to", "defer", "disabled"]));
} });
xe.__docgenInfo = Object.assign({ displayName: xe.name ?? xe.__name }, { exportName: "default", displayName: "TeleportContainer", type: 1, props: [{ name: "to", global: false, description: "", tags: [], required: true, type: "string | RendererElement | null | undefined", declarations: [], schema: { kind: "enum", type: "string | RendererElement | null | undefined", schema: ["undefined", "null", "string", { kind: "object", type: "RendererElement" }] } }, { name: "container", global: false, description: "", tags: [], required: true, type: "MaybeElement", declarations: [], schema: { kind: "enum", type: "MaybeElement", schema: ["undefined", "null", { kind: "object", type: "HTMLElement" }, { kind: "object", type: "SVGElement" }, { kind: "object", type: "VueInstance" }] } }, { name: "defer", global: false, description: "", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "disabled", global: false, description: "", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "key", global: true, description: "", tags: [], required: false, type: "PropertyKey", declarations: [], schema: { kind: "enum", type: "PropertyKey", schema: ["string", "number", "symbol"] } }, { name: "ref", global: true, description: "", tags: [], required: false, type: "VNodeRef", declarations: [], schema: { kind: "enum", type: "VNodeRef", schema: ["string", "Ref<any, any>", { kind: "event", type: "(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void" }] } }, { name: "ref_for", global: true, description: "", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "ref_key", global: true, description: "", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "class", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "style", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "tabindex", global: true, description: "", tags: [], required: false, type: "string | number", declarations: [], schema: { kind: "enum", type: "string | number", schema: ["string", "number"] } }, { name: "aria-activedescendant", global: true, description: "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-atomic", global: true, description: "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-autocomplete", global: true, description: `Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`, tags: [], required: false, type: '"none" | "inline" | "list" | "both" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "inline" | "list" | "both" | undefined', schema: ["undefined", '"none"', '"inline"', '"list"', '"both"'] } }, { name: "aria-busy", global: true, description: "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-checked", global: true, description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.', tags: [{ name: "see", text: "aria-pressed" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-colcount", global: true, description: "Defines the total number of columns in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colindex", global: true, description: "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colcount" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colspan", global: true, description: "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-controls", global: true, description: "Identifies the element (or elements) whose contents or presence are controlled by the current element.", tags: [{ name: "see", text: "aria-owns." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-current", global: true, description: "Indicates the element that represents the current item within a container or set of related elements.", tags: [], required: false, type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"page"', '"step"', '"location"', '"date"', '"time"'] } }, { name: "aria-describedby", global: true, description: "Identifies the element (or elements) that describes the object.", tags: [{ name: "see", text: "aria-labelledby" }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-details", global: true, description: "Identifies the element that provides a detailed, extended description for the object.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-disabled", global: true, description: "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.", tags: [{ name: "see", text: "aria-hidden" }, { name: "see", text: "aria-readonly." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-dropeffect", global: true, description: "Indicates what functions can be performed when a dragged object is released on the drop target.", tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: '"none" | "link" | "copy" | "execute" | "move" | "popup" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "link" | "copy" | "execute" | "move" | "popup" | undefined', schema: ["undefined", '"none"', '"link"', '"copy"', '"execute"', '"move"', '"popup"'] } }, { name: "aria-errormessage", global: true, description: "Identifies the element that provides an error message for the object.", tags: [{ name: "see", text: "aria-invalid" }, { name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-expanded", global: true, description: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-flowto", global: true, description: `Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-grabbed", global: true, description: `Indicates an element's "grabbed" state in a drag-and-drop operation.`, tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-haspopup", global: true, description: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", tags: [], required: false, type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"menu"', '"listbox"', '"tree"', '"grid"', '"dialog"'] } }, { name: "aria-hidden", global: true, description: "Indicates whether the element is exposed to an accessibility API.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-invalid", global: true, description: "Indicates the entered value does not conform to the format expected by the application.", tags: [{ name: "see", text: "aria-errormessage." }], required: false, type: 'Booleanish | "grammar" | "spelling" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "grammar" | "spelling" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"grammar"', '"spelling"'] } }, { name: "aria-keyshortcuts", global: true, description: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-label", global: true, description: "Defines a string value that labels the current element.", tags: [{ name: "see", text: "aria-labelledby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-labelledby", global: true, description: "Identifies the element (or elements) that labels the current element.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-level", global: true, description: "Defines the hierarchical level of an element within a structure.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-live", global: true, description: "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", tags: [], required: false, type: '"off" | "assertive" | "polite" | undefined', declarations: [], schema: { kind: "enum", type: '"off" | "assertive" | "polite" | undefined', schema: ["undefined", '"off"', '"assertive"', '"polite"'] } }, { name: "aria-modal", global: true, description: "Indicates whether an element is modal when displayed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiline", global: true, description: "Indicates whether a text box accepts multiple lines of input or only a single line.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiselectable", global: true, description: "Indicates that the user may select more than one item from the current selectable descendants.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-orientation", global: true, description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", tags: [], required: false, type: '"horizontal" | "vertical" | undefined', declarations: [], schema: { kind: "enum", type: '"horizontal" | "vertical" | undefined', schema: ["undefined", '"horizontal"', '"vertical"'] } }, { name: "aria-owns", global: true, description: `Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.`, tags: [{ name: "see", text: "aria-controls." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-placeholder", global: true, description: `Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-posinset", global: true, description: "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-setsize." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-pressed", global: true, description: 'Indicates the current "pressed" state of toggle buttons.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-readonly", global: true, description: "Indicates that the element is not editable, but is otherwise operable.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-relevant", global: true, description: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.", tags: [{ name: "see", text: "aria-atomic." }], required: false, type: '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined', declarations: [], schema: { kind: "enum", type: '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined', schema: ["undefined", '"text"', '"additions"', '"additions removals"', '"additions text"', '"all"', '"removals"', '"removals additions"', '"removals text"', '"text additions"', '"text removals"'] } }, { name: "aria-required", global: true, description: "Indicates that user input is required on the element before a form may be submitted.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-roledescription", global: true, description: "Defines a human-readable, author-localized description for the role of an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-rowcount", global: true, description: "Defines the total number of rows in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowindex", global: true, description: "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowcount" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowspan", global: true, description: "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-selected", global: true, description: 'Indicates the current "selected" state of various widgets.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-pressed." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-setsize", global: true, description: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-posinset." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-sort", global: true, description: "Indicates if items in a table or grid are sorted in ascending or descending order.", tags: [], required: false, type: '"none" | "ascending" | "descending" | "other" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "ascending" | "descending" | "other" | undefined', schema: ["undefined", '"none"', '"ascending"', '"descending"', '"other"'] } }, { name: "aria-valuemax", global: true, description: "Defines the maximum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuemin", global: true, description: "Defines the minimum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuenow", global: true, description: "Defines the current value for a range widget.", tags: [{ name: "see", text: "aria-valuetext." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuetext", global: true, description: "Defines the human readable text alternative of aria-valuenow for a range widget.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: false, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }], events: [], slots: [{ name: "default", type: "any", description: "", declarations: [], schema: "any" }], exposed: [{ name: "$slots", type: "Readonly<InternalSlots> & __VLS_Slots", description: "", declarations: [], schema: { kind: "object", type: "Readonly<InternalSlots> & __VLS_Slots" } }, { name: "disabled", type: "boolean | undefined", description: "", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "to", type: "string | RendererElement | null | undefined", description: "", declarations: [], schema: { kind: "enum", type: "string | RendererElement | null | undefined", schema: ["undefined", "null", "string", { kind: "object", type: "RendererElement" }] } }, { name: "container", type: "MaybeElement", description: "", declarations: [], schema: { kind: "enum", type: "MaybeElement", schema: ["undefined", "null", { kind: "object", type: "HTMLElement" }, { kind: "object", type: "SVGElement" }, { kind: "object", type: "VueInstance" }] } }, { name: "defer", type: "boolean | undefined", description: "", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/teleportContainer/TeleportContainer.vue" });
const U = Math.min, D = Math.max, ue = Math.round, ce = Math.floor, C = (e) => ({ x: e, y: e }), Ct = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Be(e, t, i) {
  return D(e, U(t, i));
}
function se(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _(e) {
  return e.split("-")[0];
}
function oe(e) {
  return e.split("-")[1];
}
function Ze(e) {
  return e === "x" ? "y" : "x";
}
function Je(e) {
  return e === "y" ? "height" : "width";
}
function W(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Qe(e) {
  return Ze(W(e));
}
function Pt(e, t, i) {
  i === void 0 && (i = false);
  const n = oe(e), a = Qe(e), r = Je(a);
  let s = a === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = me(s)), [s, me(s)];
}
function Ot(e) {
  const t = me(e);
  return [Ne(e), t, Ne(t)];
}
function Ne(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const ze = ["left", "right"], Te = ["right", "left"], Wt = ["top", "bottom"], Lt = ["bottom", "top"];
function Bt(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? Te : ze : t ? ze : Te;
    case "left":
    case "right":
      return t ? Wt : Lt;
    default:
      return [];
  }
}
function zt(e, t, i, n) {
  const a = oe(e);
  let r = Bt(_(e), i === "start", n);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(Ne)))), r;
}
function me(e) {
  const t = _(e);
  return Ct[t] + e.slice(t.length);
}
function Tt(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function _t(e) {
  return typeof e != "number" ? Tt(e) : { top: e, right: e, bottom: e, left: e };
}
function fe(e) {
  const { x: t, y: i, width: n, height: a } = e;
  return { width: n, height: a, top: i, left: t, right: t + n, bottom: i + a, x: t, y: i };
}
function _e(e, t, i) {
  let { reference: n, floating: a } = e;
  const r = W(t), s = Qe(t), o = Je(s), l = _(t), d = r === "y", c = n.x + n.width / 2 - a.width / 2, u = n.y + n.height / 2 - a.height / 2, f = n[o] / 2 - a[o] / 2;
  let m;
  switch (l) {
    case "top":
      m = { x: c, y: n.y - a.height };
      break;
    case "bottom":
      m = { x: c, y: n.y + n.height };
      break;
    case "right":
      m = { x: n.x + n.width, y: u };
      break;
    case "left":
      m = { x: n.x - a.width, y: u };
      break;
    default:
      m = { x: n.x, y: n.y };
  }
  switch (oe(t)) {
    case "start":
      m[s] -= f * (i && d ? -1 : 1);
      break;
    case "end":
      m[s] += f * (i && d ? -1 : 1);
      break;
  }
  return m;
}
async function Vt(e, t) {
  var i;
  t === void 0 && (t = {});
  const { x: n, y: a, platform: r, rects: s, elements: o, strategy: l } = e, { boundary: d = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: f = false, padding: m = 0 } = se(t, e), p = _t(m), y = o[f ? u === "floating" ? "reference" : "floating" : u], g = fe(await r.getClippingRect({ element: (i = await (r.isElement == null ? void 0 : r.isElement(y))) == null || i ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)), boundary: d, rootBoundary: c, strategy: l })), b = u === "floating" ? { x: n, y: a, width: s.floating.width, height: s.floating.height } : s.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), x = await (r.isElement == null ? void 0 : r.isElement(v)) ? await (r.getScale == null ? void 0 : r.getScale(v)) || { x: 1, y: 1 } : { x: 1, y: 1 }, E = fe(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: o, rect: b, offsetParent: v, strategy: l }) : b);
  return { top: (g.top - E.top + p.top) / x.y, bottom: (E.bottom - g.bottom + p.bottom) / x.y, left: (g.left - E.left + p.left) / x.x, right: (E.right - g.right + p.right) / x.x };
}
const Ft = 50, Ht = async (e, t, i) => {
  const { placement: n = "bottom", strategy: a = "absolute", middleware: r = [], platform: s } = i, o = s.detectOverflow ? s : { ...s, detectOverflow: Vt }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({ reference: e, floating: t, strategy: a }), { x: c, y: u } = _e(d, n, l), f = n, m = 0;
  const p = {};
  for (let h = 0; h < r.length; h++) {
    const y = r[h];
    if (!y) continue;
    const { name: g, fn: b } = y, { x: v, y: x, data: E, reset: k } = await b({ x: c, y: u, initialPlacement: n, placement: f, strategy: a, middlewareData: p, rects: d, platform: o, elements: { reference: e, floating: t } });
    c = v ?? c, u = x ?? u, p[g] = { ...p[g], ...E }, k && m < Ft && (m++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (d = k.rects === true ? await s.getElementRects({ reference: e, floating: t, strategy: a }) : k.rects), { x: c, y: u } = _e(d, f, l)), h = -1);
  }
  return { x: c, y: u, placement: f, strategy: a, middlewareData: p };
}, $t = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var i, n;
    const { placement: a, middlewareData: r, rects: s, initialPlacement: o, platform: l, elements: d } = t, { mainAxis: c = true, crossAxis: u = true, fallbackPlacements: f, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: h = true, ...y } = se(e, t);
    if ((i = r.arrow) != null && i.alignmentOffset) return {};
    const g = _(a), b = W(o), v = _(o) === o, x = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), E = f || (v || !h ? [me(o)] : Ot(o)), k = p !== "none";
    !f && k && E.push(...zt(o, h, p, x));
    const w = [o, ...E], R = await l.detectOverflow(t, y), M = [];
    let O = ((n = r.flip) == null ? void 0 : n.overflows) || [];
    if (c && M.push(R[g]), u) {
      const F = Pt(a, s, x);
      M.push(R[F[0]], R[F[1]]);
    }
    if (O = [...O, { placement: a, overflows: M }], !M.every((F) => F <= 0)) {
      var Q, ee;
      const F = (((Q = r.flip) == null ? void 0 : Q.index) || 0) + 1, ve = w[F];
      if (ve && (!(u === "alignment" ? b !== W(ve) : false) || O.every((I) => W(I.placement) === b ? I.overflows[0] > 0 : true))) return { data: { index: F, overflows: O }, reset: { placement: ve } };
      let ne = (ee = O.filter((H) => H.overflows[0] <= 0).sort((H, I) => H.overflows[1] - I.overflows[1])[0]) == null ? void 0 : ee.placement;
      if (!ne) switch (m) {
        case "bestFit": {
          var te;
          const H = (te = O.filter((I) => {
            if (k) {
              const B = W(I.placement);
              return B === b || B === "y";
            }
            return true;
          }).map((I) => [I.placement, I.overflows.filter((B) => B > 0).reduce((B, lt) => B + lt, 0)]).sort((I, B) => I[1] - B[1])[0]) == null ? void 0 : te[0];
          H && (ne = H);
          break;
        }
        case "initialPlacement":
          ne = o;
          break;
      }
      if (a !== ne) return { reset: { placement: ne } };
    }
    return {};
  } };
}, jt = /* @__PURE__ */ new Set(["left", "top"]);
async function Kt(e, t) {
  const { placement: i, platform: n, elements: a } = e, r = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), s = _(i), o = oe(i), l = W(i) === "y", d = jt.has(s) ? -1 : 1, c = r && l ? -1 : 1, u = se(t, e);
  let { mainAxis: f, crossAxis: m, alignmentAxis: p } = typeof u == "number" ? { mainAxis: u, crossAxis: 0, alignmentAxis: null } : { mainAxis: u.mainAxis || 0, crossAxis: u.crossAxis || 0, alignmentAxis: u.alignmentAxis };
  return o && typeof p == "number" && (m = o === "end" ? p * -1 : p), l ? { x: m * c, y: f * d } : { x: f * d, y: m * c };
}
const Xt = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    var i, n;
    const { x: a, y: r, placement: s, middlewareData: o } = t, l = await Kt(t, e);
    return s === ((i = o.offset) == null ? void 0 : i.placement) && (n = o.arrow) != null && n.alignmentOffset ? {} : { x: a + l.x, y: r + l.y, data: { ...l, placement: s } };
  } };
}, Yt = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: i, y: n, placement: a, platform: r } = t, { mainAxis: s = true, crossAxis: o = false, limiter: l = { fn: (g) => {
      let { x: b, y: v } = g;
      return { x: b, y: v };
    } }, ...d } = se(e, t), c = { x: i, y: n }, u = await r.detectOverflow(t, d), f = W(_(a)), m = Ze(f);
    let p = c[m], h = c[f];
    if (s) {
      const g = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", v = p + u[g], x = p - u[b];
      p = Be(v, p, x);
    }
    if (o) {
      const g = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", v = h + u[g], x = h - u[b];
      h = Be(v, h, x);
    }
    const y = l.fn({ ...t, [m]: p, [f]: h });
    return { ...y, data: { x: y.x - i, y: y.y - n, enabled: { [m]: s, [f]: o } } };
  } };
}, Gt = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    var i, n;
    const { placement: a, rects: r, platform: s, elements: o } = t, { apply: l = () => {
    }, ...d } = se(e, t), c = await s.detectOverflow(t, d), u = _(a), f = oe(a), m = W(a) === "y", { width: p, height: h } = r.floating;
    let y, g;
    u === "top" || u === "bottom" ? (y = u, g = f === (await (s.isRTL == null ? void 0 : s.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (g = u, y = f === "end" ? "top" : "bottom");
    const b = h - c.top - c.bottom, v = p - c.left - c.right, x = U(h - c[y], b), E = U(p - c[g], v), k = !t.middlewareData.shift;
    let w = x, R = E;
    if ((i = t.middlewareData.shift) != null && i.enabled.x && (R = v), (n = t.middlewareData.shift) != null && n.enabled.y && (w = b), k && !f) {
      const O = D(c.left, 0), Q = D(c.right, 0), ee = D(c.top, 0), te = D(c.bottom, 0);
      m ? R = p - 2 * (O !== 0 || Q !== 0 ? O + Q : D(c.left, c.right)) : w = h - 2 * (ee !== 0 || te !== 0 ? ee + te : D(c.top, c.bottom));
    }
    await l({ ...t, availableWidth: R, availableHeight: w });
    const M = await s.getDimensions(o.floating);
    return p !== M.width || h !== M.height ? { reset: { rects: true } } : {};
  } };
};
function ge() {
  return typeof window < "u";
}
function K(e) {
  return Pe(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function q(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function P(e) {
  var t;
  return (t = (Pe(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Pe(e) {
  return ge() ? e instanceof Node || e instanceof q(e).Node : false;
}
function N(e) {
  return ge() ? e instanceof Element || e instanceof q(e).Element : false;
}
function L(e) {
  return ge() ? e instanceof HTMLElement || e instanceof q(e).HTMLElement : false;
}
function Ve(e) {
  return !ge() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof q(e).ShadowRoot;
}
function le(e) {
  const { overflow: t, overflowX: i, overflowY: n, display: a } = S(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + i) && a !== "inline" && a !== "contents";
}
function Ut(e) {
  return /^(table|td|th)$/.test(K(e));
}
function he(e) {
  try {
    if (e.matches(":popover-open")) return true;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return false;
  }
}
const Zt = /transform|translate|scale|rotate|perspective|filter/, Jt = /paint|layout|strict|content/, $ = (e) => !!e && e !== "none";
let ke;
function Oe(e) {
  const t = N(e) ? S(e) : e;
  return $(t.transform) || $(t.translate) || $(t.scale) || $(t.rotate) || $(t.perspective) || !We() && ($(t.backdropFilter) || $(t.filter)) || Zt.test(t.willChange || "") || Jt.test(t.contain || "");
}
function Qt(e) {
  let t = V(e);
  for (; L(t) && !Z(t); ) {
    if (Oe(t)) return t;
    if (he(t)) return null;
    t = V(t);
  }
  return null;
}
function We() {
  return ke == null && (ke = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), ke;
}
function Z(e) {
  return /^(html|body|#document)$/.test(K(e));
}
function S(e) {
  return q(e).getComputedStyle(e);
}
function ye(e) {
  return N(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function V(e) {
  if (K(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Ve(e) && e.host || P(e);
  return Ve(t) ? t.host : t;
}
function et(e) {
  const t = V(e);
  return Z(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : L(t) && le(t) ? t : et(t);
}
function re(e, t, i) {
  var n;
  t === void 0 && (t = []), i === void 0 && (i = true);
  const a = et(e), r = a === ((n = e.ownerDocument) == null ? void 0 : n.body), s = q(a);
  if (r) {
    const o = Se(s);
    return t.concat(s, s.visualViewport || [], le(a) ? a : [], o && i ? re(o) : []);
  } else return t.concat(a, re(a, [], i));
}
function Se(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function tt(e) {
  const t = S(e);
  let i = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const a = L(e), r = a ? e.offsetWidth : i, s = a ? e.offsetHeight : n, o = ue(i) !== r || ue(n) !== s;
  return o && (i = r, n = s), { width: i, height: n, $: o };
}
function Le(e) {
  return N(e) ? e : e.contextElement;
}
function G(e) {
  const t = Le(e);
  if (!L(t)) return C(1);
  const i = t.getBoundingClientRect(), { width: n, height: a, $: r } = tt(t);
  let s = (r ? ue(i.width) : i.width) / n, o = (r ? ue(i.height) : i.height) / a;
  return (!s || !Number.isFinite(s)) && (s = 1), (!o || !Number.isFinite(o)) && (o = 1), { x: s, y: o };
}
const en = C(0);
function nt(e) {
  const t = q(e);
  return !We() || !t.visualViewport ? en : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function tn(e, t, i) {
  return t === void 0 && (t = false), !i || t && i !== q(e) ? false : t;
}
function j(e, t, i, n) {
  t === void 0 && (t = false), i === void 0 && (i = false);
  const a = e.getBoundingClientRect(), r = Le(e);
  let s = C(1);
  t && (n ? N(n) && (s = G(n)) : s = G(e));
  const o = tn(r, i, n) ? nt(r) : C(0);
  let l = (a.left + o.x) / s.x, d = (a.top + o.y) / s.y, c = a.width / s.x, u = a.height / s.y;
  if (r) {
    const f = q(r), m = n && N(n) ? q(n) : n;
    let p = f, h = Se(p);
    for (; h && n && m !== p; ) {
      const y = G(h), g = h.getBoundingClientRect(), b = S(h), v = g.left + (h.clientLeft + parseFloat(b.paddingLeft)) * y.x, x = g.top + (h.clientTop + parseFloat(b.paddingTop)) * y.y;
      l *= y.x, d *= y.y, c *= y.x, u *= y.y, l += v, d += x, p = q(h), h = Se(p);
    }
  }
  return fe({ width: c, height: u, x: l, y: d });
}
function be(e, t) {
  const i = ye(e).scrollLeft;
  return t ? t.left + i : j(P(e)).left + i;
}
function it(e, t) {
  const i = e.getBoundingClientRect(), n = i.left + t.scrollLeft - be(e, i), a = i.top + t.scrollTop;
  return { x: n, y: a };
}
function nn(e) {
  let { elements: t, rect: i, offsetParent: n, strategy: a } = e;
  const r = a === "fixed", s = P(n), o = t ? he(t.floating) : false;
  if (n === s || o && r) return i;
  let l = { scrollLeft: 0, scrollTop: 0 }, d = C(1);
  const c = C(0), u = L(n);
  if ((u || !u && !r) && ((K(n) !== "body" || le(s)) && (l = ye(n)), u)) {
    const m = j(n);
    d = G(n), c.x = m.x + n.clientLeft, c.y = m.y + n.clientTop;
  }
  const f = s && !u && !r ? it(s, l) : C(0);
  return { width: i.width * d.x, height: i.height * d.y, x: i.x * d.x - l.scrollLeft * d.x + c.x + f.x, y: i.y * d.y - l.scrollTop * d.y + c.y + f.y };
}
function an(e) {
  return Array.from(e.getClientRects());
}
function rn(e) {
  const t = P(e), i = ye(e), n = e.ownerDocument.body, a = D(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = D(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -i.scrollLeft + be(e);
  const o = -i.scrollTop;
  return S(n).direction === "rtl" && (s += D(t.clientWidth, n.clientWidth) - a), { width: a, height: r, x: s, y: o };
}
const Fe = 25;
function sn(e, t) {
  const i = q(e), n = P(e), a = i.visualViewport;
  let r = n.clientWidth, s = n.clientHeight, o = 0, l = 0;
  if (a) {
    r = a.width, s = a.height;
    const c = We();
    (!c || c && t === "fixed") && (o = a.offsetLeft, l = a.offsetTop);
  }
  const d = be(n);
  if (d <= 0) {
    const c = n.ownerDocument, u = c.body, f = getComputedStyle(u), m = c.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, p = Math.abs(n.clientWidth - u.clientWidth - m);
    p <= Fe && (r -= p);
  } else d <= Fe && (r += d);
  return { width: r, height: s, x: o, y: l };
}
function on(e, t) {
  const i = j(e, true, t === "fixed"), n = i.top + e.clientTop, a = i.left + e.clientLeft, r = L(e) ? G(e) : C(1), s = e.clientWidth * r.x, o = e.clientHeight * r.y, l = a * r.x, d = n * r.y;
  return { width: s, height: o, x: l, y: d };
}
function He(e, t, i) {
  let n;
  if (t === "viewport") n = sn(e, i);
  else if (t === "document") n = rn(P(e));
  else if (N(t)) n = on(t, i);
  else {
    const a = nt(e);
    n = { x: t.x - a.x, y: t.y - a.y, width: t.width, height: t.height };
  }
  return fe(n);
}
function at(e, t) {
  const i = V(e);
  return i === t || !N(i) || Z(i) ? false : S(i).position === "fixed" || at(i, t);
}
function ln(e, t) {
  const i = t.get(e);
  if (i) return i;
  let n = re(e, [], false).filter((o) => N(o) && K(o) !== "body"), a = null;
  const r = S(e).position === "fixed";
  let s = r ? V(e) : e;
  for (; N(s) && !Z(s); ) {
    const o = S(s), l = Oe(s);
    !l && o.position === "fixed" && (a = null), (r ? !l && !a : !l && o.position === "static" && !!a && (a.position === "absolute" || a.position === "fixed") || le(s) && !l && at(e, s)) ? n = n.filter((c) => c !== s) : a = o, s = V(s);
  }
  return t.set(e, n), n;
}
function cn(e) {
  let { element: t, boundary: i, rootBoundary: n, strategy: a } = e;
  const s = [...i === "clippingAncestors" ? he(t) ? [] : ln(t, this._c) : [].concat(i), n], o = He(t, s[0], a);
  let l = o.top, d = o.right, c = o.bottom, u = o.left;
  for (let f = 1; f < s.length; f++) {
    const m = He(t, s[f], a);
    l = D(m.top, l), d = U(m.right, d), c = U(m.bottom, c), u = D(m.left, u);
  }
  return { width: d - u, height: c - l, x: u, y: l };
}
function dn(e) {
  const { width: t, height: i } = tt(e);
  return { width: t, height: i };
}
function un(e, t, i) {
  const n = L(t), a = P(t), r = i === "fixed", s = j(e, true, r, t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const l = C(0);
  function d() {
    l.x = be(a);
  }
  if (n || !n && !r) if ((K(t) !== "body" || le(a)) && (o = ye(t)), n) {
    const m = j(t, true, r, t);
    l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
  } else a && d();
  r && !n && a && d();
  const c = a && !n && !r ? it(a, o) : C(0), u = s.left + o.scrollLeft - l.x - c.x, f = s.top + o.scrollTop - l.y - c.y;
  return { x: u, y: f, width: s.width, height: s.height };
}
function Ee(e) {
  return S(e).position === "static";
}
function $e(e, t) {
  if (!L(e) || S(e).position === "fixed") return null;
  if (t) return t(e);
  let i = e.offsetParent;
  return P(e) === i && (i = i.ownerDocument.body), i;
}
function rt(e, t) {
  const i = q(e);
  if (he(e)) return i;
  if (!L(e)) {
    let a = V(e);
    for (; a && !Z(a); ) {
      if (N(a) && !Ee(a)) return a;
      a = V(a);
    }
    return i;
  }
  let n = $e(e, t);
  for (; n && Ut(n) && Ee(n); ) n = $e(n, t);
  return n && Z(n) && Ee(n) && !Oe(n) ? i : n || Qt(e) || i;
}
const mn = async function(e) {
  const t = this.getOffsetParent || rt, i = this.getDimensions, n = await i(e.floating);
  return { reference: un(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: n.width, height: n.height } };
};
function fn(e) {
  return S(e).direction === "rtl";
}
const pn = { convertOffsetParentRelativeRectToViewportRelativeRect: nn, getDocumentElement: P, getClippingRect: cn, getOffsetParent: rt, getElementRects: mn, getClientRects: an, getDimensions: dn, getScale: G, isElement: N, isRTL: fn };
function st(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function gn(e, t) {
  let i = null, n;
  const a = P(e);
  function r() {
    var o;
    clearTimeout(n), (o = i) == null || o.disconnect(), i = null;
  }
  function s(o, l) {
    o === void 0 && (o = false), l === void 0 && (l = 1), r();
    const d = e.getBoundingClientRect(), { left: c, top: u, width: f, height: m } = d;
    if (o || t(), !f || !m) return;
    const p = ce(u), h = ce(a.clientWidth - (c + f)), y = ce(a.clientHeight - (u + m)), g = ce(c), v = { rootMargin: -p + "px " + -h + "px " + -y + "px " + -g + "px", threshold: D(0, U(1, l)) || 1 };
    let x = true;
    function E(k) {
      const w = k[0].intersectionRatio;
      if (w !== l) {
        if (!x) return s();
        w ? s(false, w) : n = setTimeout(() => {
          s(false, 1e-7);
        }, 1e3);
      }
      w === 1 && !st(d, e.getBoundingClientRect()) && s(), x = false;
    }
    try {
      i = new IntersectionObserver(E, { ...v, root: a.ownerDocument });
    } catch {
      i = new IntersectionObserver(E, v);
    }
    i.observe(e);
  }
  return s(true), r;
}
function Dn(e, t, i, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: a = true, ancestorResize: r = true, elementResize: s = typeof ResizeObserver == "function", layoutShift: o = typeof IntersectionObserver == "function", animationFrame: l = false } = n, d = Le(e), c = a || r ? [...d ? re(d) : [], ...t ? re(t) : []] : [];
  c.forEach((g) => {
    a && g.addEventListener("scroll", i, { passive: true }), r && g.addEventListener("resize", i);
  });
  const u = d && o ? gn(d, i) : null;
  let f = -1, m = null;
  s && (m = new ResizeObserver((g) => {
    let [b] = g;
    b && b.target === d && m && t && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var v;
      (v = m) == null || v.observe(t);
    })), i();
  }), d && !l && m.observe(d), t && m.observe(t));
  let p, h = l ? j(e) : null;
  l && y();
  function y() {
    const g = j(e);
    h && !st(h, g) && i(), h = g, p = requestAnimationFrame(y);
  }
  return i(), () => {
    var g;
    c.forEach((b) => {
      a && b.removeEventListener("scroll", i), r && b.removeEventListener("resize", i);
    }), u?.(), (g = m) == null || g.disconnect(), m = null, l && cancelAnimationFrame(p);
  };
}
const qn = Xt, In = Yt, Nn = $t, Sn = Gt, hn = (e, t, i) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: pn, ...i }, r = { ...a.platform, _c: n };
  return Ht(e, t, { ...a, platform: r });
};
function yn(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function je(e) {
  if (yn(e)) {
    const t = e.$el;
    return Pe(t) && K(t) === "#comment" ? null : t;
  }
  return e;
}
function ot(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ke(e, t) {
  const i = ot(e);
  return Math.round(t * i) / i;
}
function Mn(e, t, i) {
  i === void 0 && (i = {});
  const n = i.whileElementsMounted, a = A(() => {
    var w;
    return (w = z(i.open)) != null ? w : true;
  }), r = A(() => z(i.middleware)), s = A(() => {
    var w;
    return (w = z(i.placement)) != null ? w : "bottom";
  }), o = A(() => {
    var w;
    return (w = z(i.strategy)) != null ? w : "absolute";
  }), l = A(() => {
    var w;
    return (w = z(i.transform)) != null ? w : true;
  }), d = A(() => je(e.value)), c = A(() => je(t.value)), u = Y(0), f = Y(0), m = Y(o.value), p = Y(s.value), h = kt({}), y = Y(false), g = A(() => {
    const w = { position: m.value, left: "0", top: "0" };
    if (!c.value) return w;
    const R = Ke(c.value, u.value), M = Ke(c.value, f.value);
    return l.value ? { ...w, transform: "translate(" + R + "px, " + M + "px)", ...ot(c.value) >= 1.5 && { willChange: "transform" } } : { position: m.value, left: R + "px", top: M + "px" };
  });
  let b;
  function v() {
    if (d.value == null || c.value == null) return;
    const w = a.value;
    hn(d.value, c.value, { middleware: r.value, placement: s.value, strategy: o.value }).then((R) => {
      u.value = R.x, f.value = R.y, m.value = R.strategy, p.value = R.placement, h.value = R.middlewareData, y.value = w !== false;
    });
  }
  function x() {
    typeof b == "function" && (b(), b = void 0);
  }
  function E() {
    if (x(), n === void 0) {
      v();
      return;
    }
    if (d.value != null && c.value != null) {
      b = n(d.value, c.value, v);
      return;
    }
  }
  function k() {
    a.value || (y.value = false);
  }
  return T([r, s, o, a], v, { flush: "sync" }), T([d, c], E, { flush: "sync" }), T(a, k, { flush: "sync" }), Et() && Rt(x), { x: X(u), y: X(f), strategy: X(m), placement: X(p), middlewareData: X(h), isPositioned: X(y), floatingStyles: g, update: v };
}
const bn = pe(() => {
  const e = {}, t = (a) => {
    document.addEventListener(a, (r) => {
      e[a]?.toReversed().forEach((s) => {
        s(r);
      });
    }, { capture: true, passive: true });
  };
  return { add: (a, r) => {
    e[a] || (t(a), e[a] = []), e[a].push(r);
  }, remove: (a, r) => {
    if (e[a]) {
      const s = e[a].indexOf(r);
      s >= 0 && e[a].splice(s, 1);
    }
  } };
});
const Cn = (e, t, i = {}) => {
  const n = ["click", "touchstart", "keydown", "visibilitychange", "wheel"], { events: a = n, ignore: r = [] } = i, { childStack: s } = St(), o = (u) => {
    const f = u.target instanceof Node ? u.target : void 0;
    if (!f) return;
    const m = z(r).map(de);
    [de(e), ...m, ...s].some((g) => g && (g == f || g.contains(f))) || t(u);
  }, l = A(() => !!de(e)), { add: d, remove: c } = bn();
  T(l, (u) => {
    u ? a.forEach((f) => {
      d(f, o);
    }) : a.forEach((f) => {
      c(f, o);
    });
  }, { immediate: true }), J(() => {
    a.forEach((u) => {
      c(u, o);
    });
  });
}, vn = pe(() => {
  const e = [];
  return ut("Escape", (n) => {
    let a = true;
    for (let r = e.length - 1; r > -1 && r <= e.length && a; r--) a = e.at(r)?.(n) ?? false;
  }), (n) => {
    e.push(n);
    const a = () => {
      const r = e.indexOf(n);
      r >= 0 && e.splice(r, 1);
    };
    return J(() => {
      a();
    }), a;
  };
}), Pn = (e, t) => {
  const i = vn();
  let n;
  const a = T(() => z(e) === true, (r) => {
    r && !n ? n = i(t) : !r && n && (n(), n = void 0);
  }, { immediate: true, flush: "sync" });
  J(() => {
    a(), n?.(), n = void 0;
  });
}, wn = pe(() => {
  const e = Xe(), t = xn(), i = [];
  let n;
  const a = async (s, o) => (n || (n = (async () => {
    let l = true;
    for (let d = i.length - 1; d >= 0 && l; d--) l = await i.at(d)?.(s, o) === true;
    return l;
  })(), queueMicrotask(() => {
    n = void 0;
  })), await n), r = (s) => {
    i.push(s);
    const o = () => {
      const l = i.indexOf(s);
      l >= 0 && i.splice(l, 1);
    };
    return J(() => {
      o();
    }), o;
  };
  return e.beforeEach(async (s, o) => {
    const l = t.value, d = Me(window.history.state, "position");
    return Ae(l) && Ae(d) && l > d ? await a(s, o) : true;
  }), { onBackNavigationStacked: r };
}), xn = pe(() => {
  const e = Xe(), t = Y(), i = () => {
    const n = Me(window.history.state, "position");
    t.value = Ae(n) ? n : void 0;
  };
  return e.afterEach(() => {
    setTimeout(() => {
      i();
    }, 0);
  }), mt(window, "popstate", () => {
    i();
  }), At(t);
}), On = (e, t) => {
  const { onBackNavigationStacked: i } = wn();
  let n;
  const a = T(() => z(e) === true, (r) => {
    r && !n ? n = i(t) : !r && n && (n(), n = void 0);
  }, { immediate: true, flush: "sync" });
  J(() => {
    a(), n?.(), n = void 0;
  });
};
export {
  xe as _,
  An as a,
  Pn as b,
  On as c,
  Dn as d,
  Sn as e,
  Nn as f,
  qn as g,
  Cn as o,
  In as s,
  Mn as u
};
