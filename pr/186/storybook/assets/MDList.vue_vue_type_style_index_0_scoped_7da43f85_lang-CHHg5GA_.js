import { h as u, q as A, a0 as R, I as k, E as D } from "./iframe-Covb6gfZ.js";
const v = (e) => {
};
v.__docgenInfo = Object.assign({ displayName: v.name ?? v.__name }, { exportName: "warnMultiActionMissingRequirements", displayName: "warnMultiActionMissingRequirements", description: `Emits a development warning when a multi-action MDListItem is missing its
trailing action slot.`, type: 2, props: [{ name: "valueOf", global: false, description: "Returns the primitive value of the specified object.", tags: [], required: true, type: "() => boolean", schema: "() => boolean", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Lists/listItemDevWarnings.ts" });
const J = (e) => {
  if (!e || e.hidden || e.closest("[hidden]") || "inert" in e && (e.inert || e.closest("[inert]")) || e.getAttribute("aria-disabled") === "true" || (e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement || e instanceof HTMLFieldSetElement) && e.disabled) return false;
  const t = e.getAttribute("tabindex");
  return !(t !== null && Number(t) < 0);
}, H = (e, t) => e === t ? 0 : e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1, j = (e) => {
  const t = e.getPrimaryElement();
  return t instanceof HTMLElement ? { primaryElement: t, trailingElement: e.getTrailingElement(), isPrimaryDisabled: e.isPrimaryDisabled(), isTrailingDisabled: e.isTrailingDisabled() } : null;
}, O = (e) => e.getItems().map(j).filter((t) => t !== null).sort((t, n) => H(t.primaryElement, n.primaryElement)), T = ".md-list-item__primary-action, .md-list-item__trailing-action", q = (e, t) => {
  const n = O(e), s = t.closest(T);
  for (const i of n) {
    if (i.primaryElement === t || i.primaryElement.contains(t)) return s === i.primaryElement ? { row: i, column: "primary" } : null;
    if (i.trailingElement && (i.trailingElement === t || i.trailingElement.contains(t))) {
      const l = i.trailingElement.closest(T);
      return s === l ? { row: i, column: "trailing" } : null;
    }
  }
  return null;
}, C = (e, t) => t === "primary" ? e.primaryElement : e.trailingElement, W = (e, t, n, s) => {
  const i = O(e).filter((c) => !c.isPrimaryDisabled && !(n === "trailing" && c.isTrailingDisabled));
  if (!i.length) return null;
  const l = (c) => c ? C(c, n) ?? c.primaryElement : null;
  if (s === "first") return l(i[0]);
  if (s === "last") return l(i.at(-1));
  const r = i.findIndex((c) => c.primaryElement === t || c.trailingElement === t);
  if (r === -1) return l(s === 1 ? i[0] : i.at(-1));
  const a = i.at((r + s + i.length) % i.length);
  return a ? l(a) : null;
}, P = (e, t) => {
  const n = q(e, t);
  if (!n) return null;
  const s = n.column === "primary" ? "trailing" : "primary";
  return s === "trailing" && n.row.isTrailingDisabled ? null : C(n.row, s);
}, g = (e, t, n) => n || (e && t ? 3 : e || t ? 2 : 1), b = (e) => ({ "--md-private-list-item-resolved-container-height": `${e}px` });
g.__docgenInfo = Object.assign({ displayName: g.name ?? g.__name }, { exportName: "resolveListItemLineCount", displayName: "resolveListItemLineCount", description: "Resolves the Material line count for a list item from its slot/prop presence.\nExplicit `lineCount` always wins; otherwise derived from content presence.", type: 2, props: [{ name: "valueOf", global: false, description: "Returns the primitive value of the specified object.", tags: [], required: true, type: "() => boolean", schema: "() => boolean", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Lists/listItemLayout.ts" });
b.__docgenInfo = Object.assign({ displayName: b.name ?? b.__name }, { exportName: "buildListItemHostStyle", displayName: "buildListItemHostStyle", description: `Returns the inline style object that exposes the computed container height
as a CSS custom property for the list item.
The numeric source value tracks the Material dp token table, but runtime CSS
receives a px-backed custom property string.`, type: 2, props: [{ name: "toString", global: false, description: "Returns a string representation of an object.", tags: [{ name: "param", text: "radix Specifies a radix for converting numeric values to strings. This value is only used for numbers." }], required: true, type: "(radix?: number | undefined) => string", schema: "(radix?: number | undefined) => string", declarations: [] }, { name: "toFixed", global: false, description: "Returns a string representing a number in fixed-point notation.", tags: [{ name: "param", text: "fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive." }], required: true, type: "(fractionDigits?: number | undefined) => string", schema: "(fractionDigits?: number | undefined) => string", declarations: [] }, { name: "toExponential", global: false, description: "Returns a string containing a number represented in exponential notation.", tags: [{ name: "param", text: "fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive." }], required: true, type: "(fractionDigits?: number | undefined) => string", schema: "(fractionDigits?: number | undefined) => string", declarations: [] }, { name: "toPrecision", global: false, description: "Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.", tags: [{ name: "param", text: "precision Number of significant digits. Must be in the range 1 - 21, inclusive." }], required: true, type: "(precision?: number | undefined) => string", schema: "(precision?: number | undefined) => string", declarations: [] }, { name: "valueOf", global: false, description: "Returns the primitive value of the specified object.", tags: [], required: true, type: "() => number", schema: "() => number", declarations: [] }, { name: "toLocaleString", global: false, description: "Converts a number to a string by using the current or specified locale.", tags: [{ name: "param", text: "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used." }, { name: "param", text: "options An object that contains one or more properties that specify comparison options." }, { name: "param", text: "locales A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used." }, { name: "param", text: "options An object that contains one or more properties that specify comparison options." }], required: true, type: "{ (locales?: string | string[] | undefined, options?: Intl.NumberFormatOptions | undefined): string; (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions | undefined): string; }", schema: "{ (locales?: string | string[] | undefined, options?: Intl.NumberFormatOptions | undefined): string; (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions | undefined): string; }", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Lists/listItemLayout.ts" });
const K = { 1: 56, 2: 72, 3: 88 }, L = (e, t, n) => {
  const s = u(() => !!t.leading), i = u(() => !!t.overline || !!e.overline), l = u(() => !!t.supportingText || !!e.supportingText), r = u(() => !!t.trailing), a = u(() => g(i.value, l.value, e.lineCount)), c = u(() => K[a.value]), o = u(() => b(c.value)), m = u(() => `${n}__leading_type_${e.leadingType ?? "icon"}`), I = u(() => ({ [`${n}__supporting-text_two-line`]: a.value === 2, [`${n}__supporting-text_three-line`]: a.value === 3 }));
  return { hasLeading: s, hasOverline: i, hasSupportingText: l, hasTrailing: r, resolvedLineCount: a, resolvedHeight: c, hostStyle: o, leadingClass: m, supportingTextClass: I };
};
L.__docgenInfo = Object.assign({ displayName: L.name ?? L.__name }, { exportName: "useListItemAnatomy", displayName: "useListItemAnatomy", description: "Shared anatomy computeds for Material list item components.\n\nExtracts slot detection, line-count resolution, height resolution, and the\nderived CSS class/style values that are identical between `MDListItem` and\n`MDListSelectionItem`.", type: 2, props: [{ name: "leadingType", global: false, description: "", tags: [], required: false, type: "MDListLeadingType | undefined", schema: "MDListLeadingType | undefined", declarations: [] }, { name: "lineCount", global: false, description: "", tags: [], required: false, type: "1 | 2 | 3 | undefined", schema: "1 | 2 | 3 | undefined", declarations: [] }, { name: "overline", global: false, description: "", tags: [], required: false, type: "string | undefined", schema: "string | undefined", declarations: [] }, { name: "supportingText", global: false, description: "", tags: [], required: false, type: "string | undefined", schema: "string | undefined", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Lists/useListItemAnatomy.ts" });
const S = (e, t) => {
}, w = (e, t) => {
};
S.__docgenInfo = Object.assign({ displayName: S.name ?? S.__name }, { exportName: "useWarnSelectionListTagMismatch", displayName: "useWarnSelectionListTagMismatch", description: 'Warns in development when selection lists request `tag="ul"` even though the\nrendered container must fall back to `div[role="listbox"]`.', type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: '"none" | "single" | "multiple"', schema: '"none" | "single" | "multiple"', declarations: [] }, { name: "effect", global: false, description: "", tags: [{ name: "deprecated", text: "computed no longer uses effect" }], required: true, type: "ComputedRefImpl<any>", schema: "ComputedRefImpl<any>", declarations: [] }, { name: "__@ComputedRefSymbol@3540", global: false, description: "", tags: [], required: true, type: "true", schema: "true", declarations: [] }, { name: "__@RefSymbol@301", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", schema: "true", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Lists/listDevWarnings.ts" });
w.__docgenInfo = Object.assign({ displayName: w.name ?? w.__name }, { exportName: "useWarnSelectionListMissingAccessibleName", displayName: "useWarnSelectionListMissingAccessibleName", description: 'Warns in development when a selection list renders `role="listbox"` without an\naccessible name. A listbox with no `aria-label`/`aria-labelledby` is invalid ARIA and\nmust not render silently.', type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "boolean", schema: "boolean", declarations: [] }, { name: "__@RefSymbol@301", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", schema: "true", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Lists/listDevWarnings.ts" });
const E = (e, t, n) => {
  const s = (r) => {
    if (!t.value || r.defaultPrevented || !(r instanceof KeyboardEvent) || !(r.target instanceof HTMLElement)) return;
    const a = q(n, r.target);
    if (!a) return;
    if (r.key === "ArrowLeft" || r.key === "ArrowRight") {
      const m = P(n, r.target);
      m && (r.preventDefault(), m.focus()), r.stopPropagation();
      return;
    }
    let c = null;
    switch (r.key) {
      case "ArrowDown":
        c = 1;
        break;
      case "ArrowUp":
        c = -1;
        break;
      case "Home":
        c = "first";
        break;
      case "End":
        c = "last";
        break;
      default:
        return;
    }
    const o = W(n, r.target, a.column, c);
    o && (r.preventDefault(), o.focus(), r.stopPropagation());
  };
  let i = null;
  const l = () => {
    const r = e.value;
    r !== i && (i?.removeEventListener("keydown", s), r?.addEventListener("keydown", s), i = r);
  };
  A(l), R(l), k(() => {
    i?.removeEventListener("keydown", s);
  });
};
E.__docgenInfo = Object.assign({ displayName: E.name ?? E.__name }, { exportName: "useListActionKeyboard", displayName: "useListActionKeyboard", description: "Wires Material List keyboard navigation for non-selection `MDList` containers holding\n`single-action` / `multi-action` rows: `ArrowDown`/`ArrowUp` move vertically within the\nsame action column, `ArrowLeft`/`ArrowRight` move between a row's primary and trailing\naction, and `Home`/`End` move to the first/last enabled row in the current column.\n`Space`/`Enter` activation is handled by the focused native button/link itself.", type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "HTMLElement | null", schema: "HTMLElement | null", declarations: [] }, { name: "__@RefSymbol@301", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", schema: "true", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Lists/useListActionKeyboard.ts" });
const U = (e, t) => e === t ? 0 : e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1, $ = (e) => {
  const t = e.getElement();
  return t instanceof HTMLElement ? { element: t, isDisabled: e.isDisabled(), isSelected: e.isSelected() } : null;
}, y = (e) => e.getItems().map($).filter((t) => t !== null).sort((t, n) => U(t.element, n.element)), G = (e) => y(e).filter((t) => !t.isDisabled), x = (e, t) => y(e).find((n) => n.element === t || n.element.contains(t))?.element ?? null, d = (e, t) => {
  const n = x(e, t);
  if (!n) return null;
  const s = t.closest('[role="option"]');
  return s && s !== n ? null : n;
}, F = (e, t) => {
  for (const n of e) n.element.tabIndex = t !== null && n.element === t ? 0 : -1;
}, p = (e) => {
  const t = y(e), n = t.filter((a) => !a.isDisabled), s = document.activeElement instanceof HTMLElement ? document.activeElement : null, i = s === null ? null : x(e, s), l = i !== null ? n.find((a) => a.element === i)?.element ?? null : null, r = n.find((a) => a.isSelected)?.element ?? n[0]?.element ?? null;
  F(t, l ?? r);
}, f = (e, t) => {
  const n = y(e);
  if (!n.some((i) => i.element === t && !i.isDisabled)) {
    p(e);
    return;
  }
  F(n, t), t.focus();
}, h = (e, t, n) => {
  const s = G(e).map((r) => r.element);
  if (!s.length) return null;
  if (n === "first") return s[0] ?? null;
  if (n === "last") return s.at(-1) ?? null;
  const i = x(e, t), l = i ? s.findIndex((r) => r === i) : -1;
  return l === -1 ? n === 1 ? s[0] ?? null : s.at(-1) ?? null : s.at((l + n + s.length) % s.length) ?? null;
};
d.__docgenInfo = Object.assign({ displayName: d.name ?? d.__name }, { exportName: "resolveOwnSelectionItemTarget", displayName: "resolveOwnSelectionItemTarget", description: `Resolves the selection item that owns a DOM event, scoped to this list's own registry
only. A nested \`MDList\` renders inside the DOM subtree of one of this list's items, so a
bubbled event whose nearest \`[role="option"]\` ancestor is not itself one of this list's
registered items originated in a nested selection list and must be ignored here.`, type: 2, props: [{ name: "getItems", global: false, description: "Returns the current registered items for this list only.", tags: [], required: true, type: "() => readonly MDListSelectionItemRecord[]", schema: "() => readonly MDListSelectionItemRecord[]", declarations: [] }, { name: "registerItem", global: false, description: "Registers one owned item and returns its unregister callback.", tags: [], required: true, type: "(item: MDListSelectionItemRecord) => () => void", schema: "(item: MDListSelectionItemRecord) => () => void", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Lists/listSelectionItemNavigation.ts" });
p.__docgenInfo = Object.assign({ displayName: p.name ?? p.__name }, { exportName: "syncListSelectionItemTabStops", displayName: "syncListSelectionItemTabStops", description: `Synchronizes roving tab stops for listbox selection items, preferring the active
enabled item, then the selected enabled item, then the first enabled item.`, type: 2, props: [{ name: "getItems", global: false, description: "Returns the current registered items for this list only.", tags: [], required: true, type: "() => readonly MDListSelectionItemRecord[]", schema: "() => readonly MDListSelectionItemRecord[]", declarations: [] }, { name: "registerItem", global: false, description: "Registers one owned item and returns its unregister callback.", tags: [], required: true, type: "(item: MDListSelectionItemRecord) => () => void", schema: "(item: MDListSelectionItemRecord) => () => void", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Lists/listSelectionItemNavigation.ts" });
f.__docgenInfo = Object.assign({ displayName: f.name ?? f.__name }, { exportName: "focusListSelectionItem", displayName: "focusListSelectionItem", description: "Moves roving focus to the requested enabled selection item.", type: 2, props: [{ name: "getItems", global: false, description: "Returns the current registered items for this list only.", tags: [], required: true, type: "() => readonly MDListSelectionItemRecord[]", schema: "() => readonly MDListSelectionItemRecord[]", declarations: [] }, { name: "registerItem", global: false, description: "Registers one owned item and returns its unregister callback.", tags: [], required: true, type: "(item: MDListSelectionItemRecord) => () => void", schema: "(item: MDListSelectionItemRecord) => () => void", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Lists/listSelectionItemNavigation.ts" });
h.__docgenInfo = Object.assign({ displayName: h.name ?? h.__name }, { exportName: "getNextEnabledListSelectionItem", displayName: "getNextEnabledListSelectionItem", description: "Resolves the next enabled selection item for roving keyboard navigation.", type: 2, props: [{ name: "getItems", global: false, description: "Returns the current registered items for this list only.", tags: [], required: true, type: "() => readonly MDListSelectionItemRecord[]", schema: "() => readonly MDListSelectionItemRecord[]", declarations: [] }, { name: "registerItem", global: false, description: "Registers one owned item and returns its unregister callback.", tags: [], required: true, type: "(item: MDListSelectionItemRecord) => () => void", schema: "(item: MDListSelectionItemRecord) => () => void", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Lists/listSelectionItemNavigation.ts" });
const _ = (e, t, n) => {
  const s = (o, m) => {
    if (!t.value) return;
    const I = e.value, M = o.target;
    if (!(I && M instanceof HTMLElement)) return;
    const N = h(n, M, m);
    N && (o.preventDefault(), f(n, N));
  }, i = (o) => {
    if (!t.value || !(o instanceof FocusEvent) || !(o.target instanceof HTMLElement)) return;
    const m = d(n, o.target);
    m && f(n, m);
  }, l = (o) => {
    if (!(!t.value || o.defaultPrevented || !(o instanceof KeyboardEvent) || !(o.target instanceof HTMLElement)) && d(n, o.target)) {
      switch (o.key) {
        case "ArrowDown":
          s(o, 1);
          break;
        case "ArrowUp":
          s(o, -1);
          break;
        case "Home":
          s(o, "first");
          break;
        case "End":
          s(o, "last");
          break;
        default:
          return;
      }
      o.stopPropagation();
    }
  }, r = () => {
    !t.value || !e.value || p(n);
  };
  let a = null;
  const c = () => {
    const o = e.value;
    o !== a && (a?.removeEventListener("focusin", i), a?.removeEventListener("keydown", l), o?.addEventListener("focusin", i), o?.addEventListener("keydown", l), a = o, o && D(r));
  };
  A(c), k(() => {
    a?.removeEventListener("focusin", i), a?.removeEventListener("keydown", l);
  }), R(() => {
    c(), D(r);
  });
};
_.__docgenInfo = Object.assign({ displayName: _.name ?? _.__name }, { exportName: "useListSelectionKeyboard", displayName: "useListSelectionKeyboard", description: "Wires roving keyboard navigation and tab-stop synchronization for a listbox\ncontainer. Only active when `enabled` is true (i.e. when selectionMode !== 'none').", type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "HTMLElement | null", schema: "HTMLElement | null", declarations: [] }, { name: "__@RefSymbol@301", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", schema: "true", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Lists/useListSelectionKeyboard.ts" });
export {
  _ as a,
  E as b,
  J as i,
  L as u
};
