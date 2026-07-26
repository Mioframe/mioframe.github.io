import { m as ct, t as J, b as de, p as dt, f as pe, o as ut, u as mt } from "./index-BUnEqRiy.js";
import { V as ft, W as pt, j as T, p as re, N as gt, C as ht, l as A, v as Re, d as yt, g as bt, X as vt, z as wt, e as xt, r as Y, y as X, s as kt, Y as Et, Z as Rt, x as z, _ as Xe, R as At } from "./iframe-C3ozRcF1.js";
function Dt(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
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
function qt(e) {
  if (Array.isArray(e)) return e.map(Ge);
  if (typeof e == "symbol") return [e];
  e = Ye(e);
  const t = [], i = e.length;
  if (i === 0) return t;
  let n = 0, r = "", a = "", s = false;
  for (e.charCodeAt(0) === 46 && t.push(""); n < i; ) {
    const o = e[n];
    if (a) o === "\\" && n + 1 < i ? (n++, r += e[n]) : o === a ? a = "" : r += o;
    else if (s) o === '"' || o === "'" ? a = o : o === "]" ? (s = false, t.push(r), r = "") : r += o;
    else if (o === "[") s = true, r && (t.push(r), r = "");
    else if (o === ".") {
      r && (t.push(r), r = "");
      const l = e[n + 1];
      (l === void 0 || l === ".") && t.push("");
    } else r += o;
    n++;
  }
  return r && t.push(r), t;
}
function Ae(e) {
  return e === "__proto__";
}
function Nt(e) {
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
      if (Ae(t)) return i;
      const n = e[t];
      return n === void 0 ? Nt(t) && !Object.hasOwn(e, t) ? Me(e, qt(t), i) : i : n;
    }
    case "number":
    case "symbol": {
      typeof t == "number" && (t = Ge(t));
      const n = e[t];
      return n === void 0 ? i : n;
    }
    default: {
      if (Array.isArray(t)) return It(e, t, i);
      if (Object.is(t?.valueOf(), -0) ? t = "-0" : t = String(t), Ae(t)) return i;
      const n = e[t];
      return n === void 0 ? i : n;
    }
  }
}
function It(e, t, i) {
  if (t.length === 0) return i;
  let n = e;
  for (let r = 0; r < t.length; r++) {
    if (n == null || Ae(t[r])) return i;
    n = n[t[r]];
  }
  return n === void 0 ? i : n;
}
function St(e) {
  return typeof e == "object" && e !== null;
}
function De(e) {
  return typeof e == "number" || St(e) && Dt(e) === "[object Number]";
}
const Ce = (e) => e instanceof Element ? e : e?.$el instanceof HTMLElement ? e.$el : e?.$parent ? Ce(e.$parent) : document.body, Mt = () => {
  const e = pt(), t = ct(() => {
  }, () => {
    if (e?.proxy) return Ce(e.proxy);
  });
  return ft(t.trigger), t;
}, qe = /* @__PURE__ */ Symbol("childrenStackKey"), Ct = () => {
  const e = gt(/* @__PURE__ */ new Set()), t = re(qe, void 0), i = t ? re(t) : void 0, n = /* @__PURE__ */ Symbol("childrenStackKey");
  return Re(qe, n), Re(n, { add: (o) => {
    e.add(o), i?.add(o);
  }, remove: (o) => {
    e.delete(o), i?.remove(o);
  } }), { childStack: e };
}, ie = ht(/* @__PURE__ */ new Map()), Pt = (e) => {
  const t = A(() => de(e)), i = re(qe, void 0), n = i ? re(i, void 0) : void 0;
  T(t, (a, s) => {
    s && (n?.remove(s), ie.delete(s)), a && n?.add(a);
  }, { immediate: true });
  const r = Mt();
  T([t, r], ([a, s], [o]) => {
    o && ie.delete(o), a && s && ie.set(a, s);
  }, { immediate: true }), J(() => {
    t.value && (n?.remove(t.value), ie.delete(t.value));
  });
}, Ne = (e, t) => {
  if (e instanceof Element) {
    const n = ie.get(e);
    if (n && n.matches(t)) return n;
    const r = e.parentElement;
    return r ? r.matches(t) ? r : Ne(r, t) : document.body;
  }
  const i = e.$parent;
  if (i) {
    const n = Ce(i);
    return n.matches(t) ? n : Ne(i, t);
  }
  return document.body;
}, Ue = /* @__PURE__ */ Symbol("overlay-container"), we = (e) => {
  Re(Ue, A(() => e.value));
}, Dn = () => {
  const e = dt(), t = A(() => {
    const n = e.value;
    return n ? Ne(n, "[data-v-app]") : document.body;
  }), i = re(Ue, t);
  return A(() => i.value ?? t.value);
};
we.__docgenInfo = Object.assign({ displayName: we.name ?? we.__name }, { exportName: "provideOverlayContainer", displayName: "provideOverlayContainer", type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "HTMLElement | SVGElement | null | undefined", declarations: [], schema: { kind: "enum", type: "HTMLElement | SVGElement | null | undefined", schema: ["undefined", "null", { kind: "object", type: "HTMLElement" }, { kind: "object", type: "SVGElement" }] } }, { name: "__@RefSymbol@1002", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", declarations: [], schema: "true" }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Overlay/useOverlay.ts" });
const xe = yt({ __name: "TeleportContainer", props: { to: {}, container: {}, defer: { type: Boolean }, disabled: { type: Boolean } }, setup(e) {
  const t = e;
  return Pt(A(() => t.container)), (i, n) => (xt(), bt(vt, { to: e.to, defer: e.defer, disabled: e.disabled }, [wt(i.$slots, "default")], 8, ["to", "defer", "disabled"]));
} });
xe.__docgenInfo = Object.assign({ displayName: xe.name ?? xe.__name }, { exportName: "default", displayName: "TeleportContainer", type: 1, props: [{ name: "to", global: false, description: "", tags: [], required: true, type: "string | RendererElement | null | undefined", declarations: [], schema: { kind: "enum", type: "string | RendererElement | null | undefined", schema: ["undefined", "null", "string", { kind: "object", type: "RendererElement" }] } }, { name: "container", global: false, description: "", tags: [], required: true, type: "MaybeElement", declarations: [], schema: { kind: "enum", type: "MaybeElement", schema: ["undefined", "null", { kind: "object", type: "HTMLElement" }, { kind: "object", type: "SVGElement" }, { kind: "object", type: "VueInstance" }] } }, { name: "defer", global: false, description: "", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "disabled", global: false, description: "", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "key", global: true, description: "", tags: [], required: false, type: "PropertyKey", declarations: [], schema: { kind: "enum", type: "PropertyKey", schema: ["string", "number", "symbol"] } }, { name: "ref", global: true, description: "", tags: [], required: false, type: "VNodeRef", declarations: [], schema: { kind: "enum", type: "VNodeRef", schema: ["string", "Ref<any, any>", { kind: "event", type: "(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void" }] } }, { name: "ref_for", global: true, description: "", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "ref_key", global: true, description: "", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "class", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "style", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "tabindex", global: true, description: "", tags: [], required: false, type: "string | number", declarations: [], schema: { kind: "enum", type: "string | number", schema: ["string", "number"] } }, { name: "aria-activedescendant", global: true, description: "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-atomic", global: true, description: "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-autocomplete", global: true, description: `Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`, tags: [], required: false, type: '"none" | "inline" | "list" | "both" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "inline" | "list" | "both" | undefined', schema: ["undefined", '"none"', '"inline"', '"list"', '"both"'] } }, { name: "aria-busy", global: true, description: "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-checked", global: true, description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.', tags: [{ name: "see", text: "aria-pressed" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-colcount", global: true, description: "Defines the total number of columns in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colindex", global: true, description: "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colcount" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colspan", global: true, description: "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-controls", global: true, description: "Identifies the element (or elements) whose contents or presence are controlled by the current element.", tags: [{ name: "see", text: "aria-owns." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-current", global: true, description: "Indicates the element that represents the current item within a container or set of related elements.", tags: [], required: false, type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"page"', '"step"', '"location"', '"date"', '"time"'] } }, { name: "aria-describedby", global: true, description: "Identifies the element (or elements) that describes the object.", tags: [{ name: "see", text: "aria-labelledby" }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-details", global: true, description: "Identifies the element that provides a detailed, extended description for the object.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-disabled", global: true, description: "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.", tags: [{ name: "see", text: "aria-hidden" }, { name: "see", text: "aria-readonly." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-dropeffect", global: true, description: "Indicates what functions can be performed when a dragged object is released on the drop target.", tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined', schema: ["undefined", '"none"', '"copy"', '"execute"', '"link"', '"move"', '"popup"'] } }, { name: "aria-errormessage", global: true, description: "Identifies the element that provides an error message for the object.", tags: [{ name: "see", text: "aria-invalid" }, { name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-expanded", global: true, description: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-flowto", global: true, description: `Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-grabbed", global: true, description: `Indicates an element's "grabbed" state in a drag-and-drop operation.`, tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-haspopup", global: true, description: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", tags: [], required: false, type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"menu"', '"listbox"', '"tree"', '"grid"', '"dialog"'] } }, { name: "aria-hidden", global: true, description: "Indicates whether the element is exposed to an accessibility API.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-invalid", global: true, description: "Indicates the entered value does not conform to the format expected by the application.", tags: [{ name: "see", text: "aria-errormessage." }], required: false, type: 'Booleanish | "grammar" | "spelling" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "grammar" | "spelling" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"grammar"', '"spelling"'] } }, { name: "aria-keyshortcuts", global: true, description: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-label", global: true, description: "Defines a string value that labels the current element.", tags: [{ name: "see", text: "aria-labelledby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-labelledby", global: true, description: "Identifies the element (or elements) that labels the current element.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-level", global: true, description: "Defines the hierarchical level of an element within a structure.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-live", global: true, description: "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", tags: [], required: false, type: '"off" | "assertive" | "polite" | undefined', declarations: [], schema: { kind: "enum", type: '"off" | "assertive" | "polite" | undefined', schema: ["undefined", '"off"', '"assertive"', '"polite"'] } }, { name: "aria-modal", global: true, description: "Indicates whether an element is modal when displayed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiline", global: true, description: "Indicates whether a text box accepts multiple lines of input or only a single line.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiselectable", global: true, description: "Indicates that the user may select more than one item from the current selectable descendants.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-orientation", global: true, description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", tags: [], required: false, type: '"horizontal" | "vertical" | undefined', declarations: [], schema: { kind: "enum", type: '"horizontal" | "vertical" | undefined', schema: ["undefined", '"horizontal"', '"vertical"'] } }, { name: "aria-owns", global: true, description: `Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.`, tags: [{ name: "see", text: "aria-controls." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-placeholder", global: true, description: `Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-posinset", global: true, description: "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-setsize." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-pressed", global: true, description: 'Indicates the current "pressed" state of toggle buttons.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-readonly", global: true, description: "Indicates that the element is not editable, but is otherwise operable.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-relevant", global: true, description: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.", tags: [{ name: "see", text: "aria-atomic." }], required: false, type: '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined', declarations: [], schema: { kind: "enum", type: '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined', schema: ["undefined", '"text"', '"additions"', '"additions removals"', '"additions text"', '"all"', '"removals"', '"removals additions"', '"removals text"', '"text additions"', '"text removals"'] } }, { name: "aria-required", global: true, description: "Indicates that user input is required on the element before a form may be submitted.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-roledescription", global: true, description: "Defines a human-readable, author-localized description for the role of an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-rowcount", global: true, description: "Defines the total number of rows in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowindex", global: true, description: "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowcount" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowspan", global: true, description: "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-selected", global: true, description: 'Indicates the current "selected" state of various widgets.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-pressed." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-setsize", global: true, description: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-posinset." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-sort", global: true, description: "Indicates if items in a table or grid are sorted in ascending or descending order.", tags: [], required: false, type: '"none" | "ascending" | "descending" | "other" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "ascending" | "descending" | "other" | undefined', schema: ["undefined", '"none"', '"ascending"', '"descending"', '"other"'] } }, { name: "aria-valuemax", global: true, description: "Defines the maximum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuemin", global: true, description: "Defines the minimum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuenow", global: true, description: "Defines the current value for a range widget.", tags: [{ name: "see", text: "aria-valuetext." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuetext", global: true, description: "Defines the human readable text alternative of aria-valuenow for a range widget.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: false, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }], events: [], slots: [{ name: "default", type: "any", description: "", declarations: [], schema: "any" }], exposed: [{ name: "$slots", type: "Readonly<InternalSlots> & __VLS_Slots", description: "", declarations: [], schema: { kind: "object", type: "Readonly<InternalSlots> & __VLS_Slots" } }, { name: "disabled", type: "boolean | undefined", description: "", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "to", type: "string | RendererElement | null | undefined", description: "", declarations: [], schema: { kind: "enum", type: "string | RendererElement | null | undefined", schema: ["undefined", "null", "string", { kind: "object", type: "RendererElement" }] } }, { name: "container", type: "MaybeElement", description: "", declarations: [], schema: { kind: "enum", type: "MaybeElement", schema: ["undefined", "null", { kind: "object", type: "HTMLElement" }, { kind: "object", type: "SVGElement" }, { kind: "object", type: "VueInstance" }] } }, { name: "defer", type: "boolean | undefined", description: "", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/teleportContainer/TeleportContainer.vue" });
const U = Math.min, D = Math.max, ue = Math.round, ce = Math.floor, C = (e) => ({ x: e, y: e }), Ot = { left: "right", right: "left", bottom: "top", top: "bottom" };
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
function Wt(e, t, i) {
  i === void 0 && (i = false);
  const n = oe(e), r = Qe(e), a = Je(r);
  let s = r === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = me(s)), [s, me(s)];
}
function Lt(e) {
  const t = me(e);
  return [Ie(e), t, Ie(t)];
}
function Ie(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const ze = ["left", "right"], Te = ["right", "left"], Bt = ["top", "bottom"], zt = ["bottom", "top"];
function Tt(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? Te : ze : t ? ze : Te;
    case "left":
    case "right":
      return t ? Bt : zt;
    default:
      return [];
  }
}
function _t(e, t, i, n) {
  const r = oe(e);
  let a = Tt(_(e), i === "start", n);
  return r && (a = a.map((s) => s + "-" + r), t && (a = a.concat(a.map(Ie)))), a;
}
function me(e) {
  const t = _(e);
  return Ot[t] + e.slice(t.length);
}
function Vt(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Ft(e) {
  return typeof e != "number" ? Vt(e) : { top: e, right: e, bottom: e, left: e };
}
function fe(e) {
  const { x: t, y: i, width: n, height: r } = e;
  return { width: n, height: r, top: i, left: t, right: t + n, bottom: i + r, x: t, y: i };
}
function _e(e, t, i) {
  let { reference: n, floating: r } = e;
  const a = W(t), s = Qe(t), o = Je(s), l = _(t), d = a === "y", c = n.x + n.width / 2 - r.width / 2, u = n.y + n.height / 2 - r.height / 2, f = n[o] / 2 - r[o] / 2;
  let m;
  switch (l) {
    case "top":
      m = { x: c, y: n.y - r.height };
      break;
    case "bottom":
      m = { x: c, y: n.y + n.height };
      break;
    case "right":
      m = { x: n.x + n.width, y: u };
      break;
    case "left":
      m = { x: n.x - r.width, y: u };
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
async function jt(e, t) {
  var i;
  t === void 0 && (t = {});
  const { x: n, y: r, platform: a, rects: s, elements: o, strategy: l } = e, { boundary: d = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: f = false, padding: m = 0 } = se(t, e), p = Ft(m), y = o[f ? u === "floating" ? "reference" : "floating" : u], g = fe(await a.getClippingRect({ element: (i = await (a.isElement == null ? void 0 : a.isElement(y))) == null || i ? y : y.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(o.floating)), boundary: d, rootBoundary: c, strategy: l })), b = u === "floating" ? { x: n, y: r, width: s.floating.width, height: s.floating.height } : s.reference, v = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(o.floating)), x = await (a.isElement == null ? void 0 : a.isElement(v)) ? await (a.getScale == null ? void 0 : a.getScale(v)) || { x: 1, y: 1 } : { x: 1, y: 1 }, E = fe(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: o, rect: b, offsetParent: v, strategy: l }) : b);
  return { top: (g.top - E.top + p.top) / x.y, bottom: (E.bottom - g.bottom + p.bottom) / x.y, left: (g.left - E.left + p.left) / x.x, right: (E.right - g.right + p.right) / x.x };
}
const Ht = 50, $t = async (e, t, i) => {
  const { placement: n = "bottom", strategy: r = "absolute", middleware: a = [], platform: s } = i, o = s.detectOverflow ? s : { ...s, detectOverflow: jt }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({ reference: e, floating: t, strategy: r }), { x: c, y: u } = _e(d, n, l), f = n, m = 0;
  const p = {};
  for (let h = 0; h < a.length; h++) {
    const y = a[h];
    if (!y) continue;
    const { name: g, fn: b } = y, { x: v, y: x, data: E, reset: k } = await b({ x: c, y: u, initialPlacement: n, placement: f, strategy: r, middlewareData: p, rects: d, platform: o, elements: { reference: e, floating: t } });
    c = v ?? c, u = x ?? u, p[g] = { ...p[g], ...E }, k && m < Ht && (m++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (d = k.rects === true ? await s.getElementRects({ reference: e, floating: t, strategy: r }) : k.rects), { x: c, y: u } = _e(d, f, l)), h = -1);
  }
  return { x: c, y: u, placement: f, strategy: r, middlewareData: p };
}, Kt = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var i, n;
    const { placement: r, middlewareData: a, rects: s, initialPlacement: o, platform: l, elements: d } = t, { mainAxis: c = true, crossAxis: u = true, fallbackPlacements: f, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: h = true, ...y } = se(e, t);
    if ((i = a.arrow) != null && i.alignmentOffset) return {};
    const g = _(r), b = W(o), v = _(o) === o, x = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), E = f || (v || !h ? [me(o)] : Lt(o)), k = p !== "none";
    !f && k && E.push(..._t(o, h, p, x));
    const w = [o, ...E], R = await l.detectOverflow(t, y), M = [];
    let O = ((n = a.flip) == null ? void 0 : n.overflows) || [];
    if (c && M.push(R[g]), u) {
      const F = Wt(r, s, x);
      M.push(R[F[0]], R[F[1]]);
    }
    if (O = [...O, { placement: r, overflows: M }], !M.every((F) => F <= 0)) {
      var Q, ee;
      const F = (((Q = a.flip) == null ? void 0 : Q.index) || 0) + 1, ve = w[F];
      if (ve && (!(u === "alignment" ? b !== W(ve) : false) || O.every((N) => W(N.placement) === b ? N.overflows[0] > 0 : true))) return { data: { index: F, overflows: O }, reset: { placement: ve } };
      let ne = (ee = O.filter((j) => j.overflows[0] <= 0).sort((j, N) => j.overflows[1] - N.overflows[1])[0]) == null ? void 0 : ee.placement;
      if (!ne) switch (m) {
        case "bestFit": {
          var te;
          const j = (te = O.filter((N) => {
            if (k) {
              const B = W(N.placement);
              return B === b || B === "y";
            }
            return true;
          }).map((N) => [N.placement, N.overflows.filter((B) => B > 0).reduce((B, lt) => B + lt, 0)]).sort((N, B) => N[1] - B[1])[0]) == null ? void 0 : te[0];
          j && (ne = j);
          break;
        }
        case "initialPlacement":
          ne = o;
          break;
      }
      if (r !== ne) return { reset: { placement: ne } };
    }
    return {};
  } };
}, Xt = /* @__PURE__ */ new Set(["left", "top"]);
async function Yt(e, t) {
  const { placement: i, platform: n, elements: r } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(r.floating)), s = _(i), o = oe(i), l = W(i) === "y", d = Xt.has(s) ? -1 : 1, c = a && l ? -1 : 1, u = se(t, e);
  let { mainAxis: f, crossAxis: m, alignmentAxis: p } = typeof u == "number" ? { mainAxis: u, crossAxis: 0, alignmentAxis: null } : { mainAxis: u.mainAxis || 0, crossAxis: u.crossAxis || 0, alignmentAxis: u.alignmentAxis };
  return o && typeof p == "number" && (m = o === "end" ? p * -1 : p), l ? { x: m * c, y: f * d } : { x: f * d, y: m * c };
}
const Gt = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    var i, n;
    const { x: r, y: a, placement: s, middlewareData: o } = t, l = await Yt(t, e);
    return s === ((i = o.offset) == null ? void 0 : i.placement) && (n = o.arrow) != null && n.alignmentOffset ? {} : { x: r + l.x, y: a + l.y, data: { ...l, placement: s } };
  } };
}, Ut = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: i, y: n, placement: r, platform: a } = t, { mainAxis: s = true, crossAxis: o = false, limiter: l = { fn: (g) => {
      let { x: b, y: v } = g;
      return { x: b, y: v };
    } }, ...d } = se(e, t), c = { x: i, y: n }, u = await a.detectOverflow(t, d), f = W(_(r)), m = Ze(f);
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
}, Zt = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    var i, n;
    const { placement: r, rects: a, platform: s, elements: o } = t, { apply: l = () => {
    }, ...d } = se(e, t), c = await s.detectOverflow(t, d), u = _(r), f = oe(r), m = W(r) === "y", { width: p, height: h } = a.floating;
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
function I(e) {
  return ge() ? e instanceof Element || e instanceof q(e).Element : false;
}
function L(e) {
  return ge() ? e instanceof HTMLElement || e instanceof q(e).HTMLElement : false;
}
function Ve(e) {
  return !ge() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof q(e).ShadowRoot;
}
function le(e) {
  const { overflow: t, overflowX: i, overflowY: n, display: r } = S(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + i) && r !== "inline" && r !== "contents";
}
function Jt(e) {
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
const Qt = /transform|translate|scale|rotate|perspective|filter/, en = /paint|layout|strict|content/, H = (e) => !!e && e !== "none";
let ke;
function Oe(e) {
  const t = I(e) ? S(e) : e;
  return H(t.transform) || H(t.translate) || H(t.scale) || H(t.rotate) || H(t.perspective) || !We() && (H(t.backdropFilter) || H(t.filter)) || Qt.test(t.willChange || "") || en.test(t.contain || "");
}
function tn(e) {
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
  return I(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
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
function ae(e, t, i) {
  var n;
  t === void 0 && (t = []), i === void 0 && (i = true);
  const r = et(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = q(r);
  if (a) {
    const o = Se(s);
    return t.concat(s, s.visualViewport || [], le(r) ? r : [], o && i ? ae(o) : []);
  } else return t.concat(r, ae(r, [], i));
}
function Se(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function tt(e) {
  const t = S(e);
  let i = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const r = L(e), a = r ? e.offsetWidth : i, s = r ? e.offsetHeight : n, o = ue(i) !== a || ue(n) !== s;
  return o && (i = a, n = s), { width: i, height: n, $: o };
}
function Le(e) {
  return I(e) ? e : e.contextElement;
}
function G(e) {
  const t = Le(e);
  if (!L(t)) return C(1);
  const i = t.getBoundingClientRect(), { width: n, height: r, $: a } = tt(t);
  let s = (a ? ue(i.width) : i.width) / n, o = (a ? ue(i.height) : i.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!o || !Number.isFinite(o)) && (o = 1), { x: s, y: o };
}
const nn = C(0);
function nt(e) {
  const t = q(e);
  return !We() || !t.visualViewport ? nn : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function rn(e, t, i) {
  return t === void 0 && (t = false), !i || t && i !== q(e) ? false : t;
}
function $(e, t, i, n) {
  t === void 0 && (t = false), i === void 0 && (i = false);
  const r = e.getBoundingClientRect(), a = Le(e);
  let s = C(1);
  t && (n ? I(n) && (s = G(n)) : s = G(e));
  const o = rn(a, i, n) ? nt(a) : C(0);
  let l = (r.left + o.x) / s.x, d = (r.top + o.y) / s.y, c = r.width / s.x, u = r.height / s.y;
  if (a) {
    const f = q(a), m = n && I(n) ? q(n) : n;
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
  return t ? t.left + i : $(P(e)).left + i;
}
function it(e, t) {
  const i = e.getBoundingClientRect(), n = i.left + t.scrollLeft - be(e, i), r = i.top + t.scrollTop;
  return { x: n, y: r };
}
function an(e) {
  let { elements: t, rect: i, offsetParent: n, strategy: r } = e;
  const a = r === "fixed", s = P(n), o = t ? he(t.floating) : false;
  if (n === s || o && a) return i;
  let l = { scrollLeft: 0, scrollTop: 0 }, d = C(1);
  const c = C(0), u = L(n);
  if ((u || !u && !a) && ((K(n) !== "body" || le(s)) && (l = ye(n)), u)) {
    const m = $(n);
    d = G(n), c.x = m.x + n.clientLeft, c.y = m.y + n.clientTop;
  }
  const f = s && !u && !a ? it(s, l) : C(0);
  return { width: i.width * d.x, height: i.height * d.y, x: i.x * d.x - l.scrollLeft * d.x + c.x + f.x, y: i.y * d.y - l.scrollTop * d.y + c.y + f.y };
}
function sn(e) {
  return Array.from(e.getClientRects());
}
function on(e) {
  const t = P(e), i = ye(e), n = e.ownerDocument.body, r = D(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = D(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -i.scrollLeft + be(e);
  const o = -i.scrollTop;
  return S(n).direction === "rtl" && (s += D(t.clientWidth, n.clientWidth) - r), { width: r, height: a, x: s, y: o };
}
const Fe = 25;
function ln(e, t) {
  const i = q(e), n = P(e), r = i.visualViewport;
  let a = n.clientWidth, s = n.clientHeight, o = 0, l = 0;
  if (r) {
    a = r.width, s = r.height;
    const c = We();
    (!c || c && t === "fixed") && (o = r.offsetLeft, l = r.offsetTop);
  }
  const d = be(n);
  if (d <= 0) {
    const c = n.ownerDocument, u = c.body, f = getComputedStyle(u), m = c.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, p = Math.abs(n.clientWidth - u.clientWidth - m);
    p <= Fe && (a -= p);
  } else d <= Fe && (a += d);
  return { width: a, height: s, x: o, y: l };
}
function cn(e, t) {
  const i = $(e, true, t === "fixed"), n = i.top + e.clientTop, r = i.left + e.clientLeft, a = L(e) ? G(e) : C(1), s = e.clientWidth * a.x, o = e.clientHeight * a.y, l = r * a.x, d = n * a.y;
  return { width: s, height: o, x: l, y: d };
}
function je(e, t, i) {
  let n;
  if (t === "viewport") n = ln(e, i);
  else if (t === "document") n = on(P(e));
  else if (I(t)) n = cn(t, i);
  else {
    const r = nt(e);
    n = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
  }
  return fe(n);
}
function rt(e, t) {
  const i = V(e);
  return i === t || !I(i) || Z(i) ? false : S(i).position === "fixed" || rt(i, t);
}
function dn(e, t) {
  const i = t.get(e);
  if (i) return i;
  let n = ae(e, [], false).filter((o) => I(o) && K(o) !== "body"), r = null;
  const a = S(e).position === "fixed";
  let s = a ? V(e) : e;
  for (; I(s) && !Z(s); ) {
    const o = S(s), l = Oe(s);
    !l && o.position === "fixed" && (r = null), (a ? !l && !r : !l && o.position === "static" && !!r && (r.position === "absolute" || r.position === "fixed") || le(s) && !l && rt(e, s)) ? n = n.filter((c) => c !== s) : r = o, s = V(s);
  }
  return t.set(e, n), n;
}
function un(e) {
  let { element: t, boundary: i, rootBoundary: n, strategy: r } = e;
  const s = [...i === "clippingAncestors" ? he(t) ? [] : dn(t, this._c) : [].concat(i), n], o = je(t, s[0], r);
  let l = o.top, d = o.right, c = o.bottom, u = o.left;
  for (let f = 1; f < s.length; f++) {
    const m = je(t, s[f], r);
    l = D(m.top, l), d = U(m.right, d), c = U(m.bottom, c), u = D(m.left, u);
  }
  return { width: d - u, height: c - l, x: u, y: l };
}
function mn(e) {
  const { width: t, height: i } = tt(e);
  return { width: t, height: i };
}
function fn(e, t, i) {
  const n = L(t), r = P(t), a = i === "fixed", s = $(e, true, a, t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const l = C(0);
  function d() {
    l.x = be(r);
  }
  if (n || !n && !a) if ((K(t) !== "body" || le(r)) && (o = ye(t)), n) {
    const m = $(t, true, a, t);
    l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
  } else r && d();
  a && !n && r && d();
  const c = r && !n && !a ? it(r, o) : C(0), u = s.left + o.scrollLeft - l.x - c.x, f = s.top + o.scrollTop - l.y - c.y;
  return { x: u, y: f, width: s.width, height: s.height };
}
function Ee(e) {
  return S(e).position === "static";
}
function He(e, t) {
  if (!L(e) || S(e).position === "fixed") return null;
  if (t) return t(e);
  let i = e.offsetParent;
  return P(e) === i && (i = i.ownerDocument.body), i;
}
function at(e, t) {
  const i = q(e);
  if (he(e)) return i;
  if (!L(e)) {
    let r = V(e);
    for (; r && !Z(r); ) {
      if (I(r) && !Ee(r)) return r;
      r = V(r);
    }
    return i;
  }
  let n = He(e, t);
  for (; n && Jt(n) && Ee(n); ) n = He(n, t);
  return n && Z(n) && Ee(n) && !Oe(n) ? i : n || tn(e) || i;
}
const pn = async function(e) {
  const t = this.getOffsetParent || at, i = this.getDimensions, n = await i(e.floating);
  return { reference: fn(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: n.width, height: n.height } };
};
function gn(e) {
  return S(e).direction === "rtl";
}
const hn = { convertOffsetParentRelativeRectToViewportRelativeRect: an, getDocumentElement: P, getClippingRect: un, getOffsetParent: at, getElementRects: pn, getClientRects: sn, getDimensions: mn, getScale: G, isElement: I, isRTL: gn };
function st(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function yn(e, t) {
  let i = null, n;
  const r = P(e);
  function a() {
    var o;
    clearTimeout(n), (o = i) == null || o.disconnect(), i = null;
  }
  function s(o, l) {
    o === void 0 && (o = false), l === void 0 && (l = 1), a();
    const d = e.getBoundingClientRect(), { left: c, top: u, width: f, height: m } = d;
    if (o || t(), !f || !m) return;
    const p = ce(u), h = ce(r.clientWidth - (c + f)), y = ce(r.clientHeight - (u + m)), g = ce(c), v = { rootMargin: -p + "px " + -h + "px " + -y + "px " + -g + "px", threshold: D(0, U(1, l)) || 1 };
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
      i = new IntersectionObserver(E, { ...v, root: r.ownerDocument });
    } catch {
      i = new IntersectionObserver(E, v);
    }
    i.observe(e);
  }
  return s(true), a;
}
function qn(e, t, i, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: r = true, ancestorResize: a = true, elementResize: s = typeof ResizeObserver == "function", layoutShift: o = typeof IntersectionObserver == "function", animationFrame: l = false } = n, d = Le(e), c = r || a ? [...d ? ae(d) : [], ...t ? ae(t) : []] : [];
  c.forEach((g) => {
    r && g.addEventListener("scroll", i, { passive: true }), a && g.addEventListener("resize", i);
  });
  const u = d && o ? yn(d, i) : null;
  let f = -1, m = null;
  s && (m = new ResizeObserver((g) => {
    let [b] = g;
    b && b.target === d && m && t && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var v;
      (v = m) == null || v.observe(t);
    })), i();
  }), d && !l && m.observe(d), t && m.observe(t));
  let p, h = l ? $(e) : null;
  l && y();
  function y() {
    const g = $(e);
    h && !st(h, g) && i(), h = g, p = requestAnimationFrame(y);
  }
  return i(), () => {
    var g;
    c.forEach((b) => {
      r && b.removeEventListener("scroll", i), a && b.removeEventListener("resize", i);
    }), u?.(), (g = m) == null || g.disconnect(), m = null, l && cancelAnimationFrame(p);
  };
}
const Nn = Gt, In = Ut, Sn = Kt, Mn = Zt, bn = (e, t, i) => {
  const n = /* @__PURE__ */ new Map(), r = { platform: hn, ...i }, a = { ...r.platform, _c: n };
  return $t(e, t, { ...r, platform: a });
};
function vn(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function $e(e) {
  if (vn(e)) {
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
function Cn(e, t, i) {
  i === void 0 && (i = {});
  const n = i.whileElementsMounted, r = A(() => {
    var w;
    return (w = z(i.open)) != null ? w : true;
  }), a = A(() => z(i.middleware)), s = A(() => {
    var w;
    return (w = z(i.placement)) != null ? w : "bottom";
  }), o = A(() => {
    var w;
    return (w = z(i.strategy)) != null ? w : "absolute";
  }), l = A(() => {
    var w;
    return (w = z(i.transform)) != null ? w : true;
  }), d = A(() => $e(e.value)), c = A(() => $e(t.value)), u = Y(0), f = Y(0), m = Y(o.value), p = Y(s.value), h = kt({}), y = Y(false), g = A(() => {
    const w = { position: m.value, left: "0", top: "0" };
    if (!c.value) return w;
    const R = Ke(c.value, u.value), M = Ke(c.value, f.value);
    return l.value ? { ...w, transform: "translate(" + R + "px, " + M + "px)", ...ot(c.value) >= 1.5 && { willChange: "transform" } } : { position: m.value, left: R + "px", top: M + "px" };
  });
  let b;
  function v() {
    if (d.value == null || c.value == null) return;
    const w = r.value;
    bn(d.value, c.value, { middleware: a.value, placement: s.value, strategy: o.value }).then((R) => {
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
    r.value || (y.value = false);
  }
  return T([a, s, o, r], v, { flush: "sync" }), T([d, c], E, { flush: "sync" }), T(r, k, { flush: "sync" }), Et() && Rt(x), { x: X(u), y: X(f), strategy: X(m), placement: X(p), middlewareData: X(h), isPositioned: X(y), floatingStyles: g, update: v };
}
const wn = pe(() => {
  const e = {}, t = (r) => {
    document.addEventListener(r, (a) => {
      e[r]?.toReversed().forEach((s) => {
        s(a);
      });
    }, { capture: true, passive: true });
  };
  return { add: (r, a) => {
    e[r] || (t(r), e[r] = []), e[r].push(a);
  }, remove: (r, a) => {
    if (e[r]) {
      const s = e[r].indexOf(a);
      s >= 0 && e[r].splice(s, 1);
    }
  } };
});
const Pn = (e, t, i = {}) => {
  const n = ["click", "touchstart", "keydown", "visibilitychange", "wheel"], { events: r = n, ignore: a = [] } = i, { childStack: s } = Ct(), o = (u) => {
    const f = u.target instanceof Node ? u.target : void 0;
    if (!f) return;
    const m = z(a).map(de);
    [de(e), ...m, ...s].some((g) => g && (g == f || g.contains(f))) || t(u);
  }, l = A(() => !!de(e)), { add: d, remove: c } = wn();
  T(l, (u) => {
    u ? r.forEach((f) => {
      d(f, o);
    }) : r.forEach((f) => {
      c(f, o);
    });
  }, { immediate: true }), J(() => {
    r.forEach((u) => {
      c(u, o);
    });
  });
}, xn = pe(() => {
  const e = [];
  return ut("Escape", (n) => {
    let r = true;
    for (let a = e.length - 1; a > -1 && a <= e.length && r; a--) r = e.at(a)?.(n) ?? false;
  }), (n) => {
    e.push(n);
    const r = () => {
      const a = e.indexOf(n);
      a >= 0 && e.splice(a, 1);
    };
    return J(() => {
      r();
    }), r;
  };
}), On = (e, t) => {
  const i = xn();
  let n;
  const r = T(() => z(e) === true, (a) => {
    a && !n ? n = i(t) : !a && n && (n(), n = void 0);
  }, { immediate: true, flush: "sync" });
  J(() => {
    r(), n?.(), n = void 0;
  });
}, kn = pe(() => {
  const e = Xe(), t = En(), i = [];
  let n;
  const r = async (s, o) => (n || (n = (async () => {
    let l = true;
    for (let d = i.length - 1; d >= 0 && l; d--) l = await i.at(d)?.(s, o) === true;
    return l;
  })(), queueMicrotask(() => {
    n = void 0;
  })), await n), a = (s) => {
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
    return De(l) && De(d) && l > d ? await r(s, o) : true;
  }), { onBackNavigationStacked: a };
}), En = pe(() => {
  const e = Xe(), t = Y(), i = () => {
    const n = Me(window.history.state, "position");
    t.value = De(n) ? n : void 0;
  };
  return e.afterEach(() => {
    setTimeout(() => {
      i();
    }, 0);
  }), mt(window, "popstate", () => {
    i();
  }), At(t);
}), Wn = (e, t) => {
  const { onBackNavigationStacked: i } = kn();
  let n;
  const r = T(() => z(e) === true, (a) => {
    a && !n ? n = i(t) : !a && n && (n(), n = void 0);
  }, { immediate: true, flush: "sync" });
  J(() => {
    r(), n?.(), n = void 0;
  });
};
export {
  xe as _,
  Dn as a,
  On as b,
  Wn as c,
  qn as d,
  Mn as e,
  Sn as f,
  Nn as g,
  Pn as o,
  In as s,
  Cn as u
};
