import { J as W, C as N, W as B, L as K, y as I, M as x, d as q, S as z, B as P, H as Y, p as J, i as E, w as Q, T as C, j as X, o as w, c as $, h as G, v as Z, q as ee, E as te } from "./iframe-DkW6VBSL.js";
import { t as ne, r as re, o as ae, u as se, b as oe, e as ie } from "./index-DLGMgvp2.js";
import { u as ue, o as ce, a as le, _ as de, f as fe, s as me, c as ge } from "./MDSymbol-Sxdo4UI6.js";
import { u as pe } from "./useFocusTrap-CrzDbzYF.js";
import { b as he, c as Ae, d as ve } from "./main-D9r-Wi7k.js";
import { g as Ie } from "./_commonjsHelpers-CqkleIqs.js";
import { _ as Oe } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const F = /* @__PURE__ */ Symbol("MenuFocusSymbol"), ye = () => {
  const e = B(/* @__PURE__ */ new Map());
  return K(F, e), e;
}, R = (e, t) => {
  const n = W(F, void 0);
  N([e, t], ([r, s], [a]) => {
    n && s && (a !== void 0 && n.delete(a), n.set(r, s));
  }, { immediate: true }), ne(() => {
    n?.delete(e.value);
  });
};
R.__docgenInfo = Object.assign({ displayName: R.name ?? R.__name }, { exportName: "useInjectFocusRegister", displayName: "useInjectFocusRegister", type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "string", schema: "string", declarations: [] }, { name: "__@RefSymbol@297", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", schema: "true", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Menu/focusProvider.ts" });
const Ee = () => {
  const e = re(void 0, 500);
  return ae(({ key: t }) => /^.$/.test(t), ({ key: t }) => {
    e.value = (e.value ?? "") + t;
  }), e;
};
var v = { exports: {} }, M;
function Re() {
  if (M) return v.exports;
  M = 1;
  var e = { \u00C0: "A", \u00C1: "A", \u00C2: "A", \u00C3: "A", \u00C4: "A", \u00C5: "A", \u1EA4: "A", \u1EAE: "A", \u1EB2: "A", \u1EB4: "A", \u1EB6: "A", \u00C6: "AE", \u1EA6: "A", \u1EB0: "A", \u0202: "A", \u1EA2: "A", \u1EA0: "A", \u1EA8: "A", \u1EAA: "A", \u1EAC: "A", \u00C7: "C", \u1E08: "C", \u00C8: "E", \u00C9: "E", \u00CA: "E", \u00CB: "E", \u1EBE: "E", \u1E16: "E", \u1EC0: "E", \u1E14: "E", \u1E1C: "E", \u0206: "E", \u1EBA: "E", \u1EBC: "E", \u1EB8: "E", \u1EC2: "E", \u1EC4: "E", \u1EC6: "E", \u00CC: "I", \u00CD: "I", \u00CE: "I", \u00CF: "I", \u1E2E: "I", \u020A: "I", \u1EC8: "I", \u1ECA: "I", \u00D0: "D", \u00D1: "N", \u00D2: "O", \u00D3: "O", \u00D4: "O", \u00D5: "O", \u00D6: "O", \u00D8: "O", \u1ED0: "O", \u1E4C: "O", \u1E52: "O", \u020E: "O", \u1ECE: "O", \u1ECC: "O", \u1ED4: "O", \u1ED6: "O", \u1ED8: "O", \u1EDC: "O", \u1EDE: "O", \u1EE0: "O", \u1EDA: "O", \u1EE2: "O", \u00D9: "U", \u00DA: "U", \u00DB: "U", \u00DC: "U", \u1EE6: "U", \u1EE4: "U", \u1EEC: "U", \u1EEE: "U", \u1EF0: "U", \u00DD: "Y", \u00E0: "a", \u00E1: "a", \u00E2: "a", \u00E3: "a", \u00E4: "a", \u00E5: "a", \u1EA5: "a", \u1EAF: "a", \u1EB3: "a", \u1EB5: "a", \u1EB7: "a", \u00E6: "ae", \u1EA7: "a", \u1EB1: "a", \u0203: "a", \u1EA3: "a", \u1EA1: "a", \u1EA9: "a", \u1EAB: "a", \u1EAD: "a", \u00E7: "c", \u1E09: "c", \u00E8: "e", \u00E9: "e", \u00EA: "e", \u00EB: "e", \u1EBF: "e", \u1E17: "e", \u1EC1: "e", \u1E15: "e", \u1E1D: "e", \u0207: "e", \u1EBB: "e", \u1EBD: "e", \u1EB9: "e", \u1EC3: "e", \u1EC5: "e", \u1EC7: "e", \u00EC: "i", \u00ED: "i", \u00EE: "i", \u00EF: "i", \u1E2F: "i", \u020B: "i", \u1EC9: "i", \u1ECB: "i", \u00F0: "d", \u00F1: "n", \u00F2: "o", \u00F3: "o", \u00F4: "o", \u00F5: "o", \u00F6: "o", \u00F8: "o", \u1ED1: "o", \u1E4D: "o", \u1E53: "o", \u020F: "o", \u1ECF: "o", \u1ECD: "o", \u1ED5: "o", \u1ED7: "o", \u1ED9: "o", \u1EDD: "o", \u1EDF: "o", \u1EE1: "o", \u1EDB: "o", \u1EE3: "o", \u00F9: "u", \u00FA: "u", \u00FB: "u", \u00FC: "u", \u1EE7: "u", \u1EE5: "u", \u1EED: "u", \u1EEF: "u", \u1EF1: "u", \u00FD: "y", \u00FF: "y", \u0100: "A", \u0101: "a", \u0102: "A", \u0103: "a", \u0104: "A", \u0105: "a", \u0106: "C", \u0107: "c", \u0108: "C", \u0109: "c", \u010A: "C", \u010B: "c", \u010C: "C", \u010D: "c", C\u0306: "C", c\u0306: "c", \u010E: "D", \u010F: "d", \u0110: "D", \u0111: "d", \u0112: "E", \u0113: "e", \u0114: "E", \u0115: "e", \u0116: "E", \u0117: "e", \u0118: "E", \u0119: "e", \u011A: "E", \u011B: "e", \u011C: "G", \u01F4: "G", \u011D: "g", \u01F5: "g", \u011E: "G", \u011F: "g", \u0120: "G", \u0121: "g", \u0122: "G", \u0123: "g", \u0124: "H", \u0125: "h", \u0126: "H", \u0127: "h", \u1E2A: "H", \u1E2B: "h", \u0128: "I", \u0129: "i", \u012A: "I", \u012B: "i", \u012C: "I", \u012D: "i", \u012E: "I", \u012F: "i", \u0130: "I", \u0131: "i", \u0132: "IJ", \u0133: "ij", \u0134: "J", \u0135: "j", \u0136: "K", \u0137: "k", \u1E30: "K", \u1E31: "k", K\u0306: "K", k\u0306: "k", \u0139: "L", \u013A: "l", \u013B: "L", \u013C: "l", \u013D: "L", \u013E: "l", \u013F: "L", \u0140: "l", \u0141: "l", \u0142: "l", \u1E3E: "M", \u1E3F: "m", M\u0306: "M", m\u0306: "m", \u0143: "N", \u0144: "n", \u0145: "N", \u0146: "n", \u0147: "N", \u0148: "n", \u0149: "n", N\u0306: "N", n\u0306: "n", \u014C: "O", \u014D: "o", \u014E: "O", \u014F: "o", \u0150: "O", \u0151: "o", \u0152: "OE", \u0153: "oe", P\u0306: "P", p\u0306: "p", \u0154: "R", \u0155: "r", \u0156: "R", \u0157: "r", \u0158: "R", \u0159: "r", R\u0306: "R", r\u0306: "r", \u0212: "R", \u0213: "r", \u015A: "S", \u015B: "s", \u015C: "S", \u015D: "s", \u015E: "S", \u0218: "S", \u0219: "s", \u015F: "s", \u0160: "S", \u0161: "s", \u0162: "T", \u0163: "t", \u021B: "t", \u021A: "T", \u0164: "T", \u0165: "t", \u0166: "T", \u0167: "t", T\u0306: "T", t\u0306: "t", \u0168: "U", \u0169: "u", \u016A: "U", \u016B: "u", \u016C: "U", \u016D: "u", \u016E: "U", \u016F: "u", \u0170: "U", \u0171: "u", \u0172: "U", \u0173: "u", \u0216: "U", \u0217: "u", V\u0306: "V", v\u0306: "v", \u0174: "W", \u0175: "w", \u1E82: "W", \u1E83: "w", X\u0306: "X", x\u0306: "x", \u0176: "Y", \u0177: "y", \u0178: "Y", Y\u0306: "Y", y\u0306: "y", \u0179: "Z", \u017A: "z", \u017B: "Z", \u017C: "z", \u017D: "Z", \u017E: "z", \u017F: "s", \u0192: "f", \u01A0: "O", \u01A1: "o", \u01AF: "U", \u01B0: "u", \u01CD: "A", \u01CE: "a", \u01CF: "I", \u01D0: "i", \u01D1: "O", \u01D2: "o", \u01D3: "U", \u01D4: "u", \u01D5: "U", \u01D6: "u", \u01D7: "U", \u01D8: "u", \u01D9: "U", \u01DA: "u", \u01DB: "U", \u01DC: "u", \u1EE8: "U", \u1EE9: "u", \u1E78: "U", \u1E79: "u", \u01FA: "A", \u01FB: "a", \u01FC: "AE", \u01FD: "ae", \u01FE: "O", \u01FF: "o", \u00DE: "TH", \u00FE: "th", \u1E54: "P", \u1E55: "p", \u1E64: "S", \u1E65: "s", X\u0301: "X", x\u0301: "x", \u0403: "\u0413", \u0453: "\u0433", \u040C: "\u041A", \u045C: "\u043A", A\u030B: "A", a\u030B: "a", E\u030B: "E", e\u030B: "e", I\u030B: "I", i\u030B: "i", \u01F8: "N", \u01F9: "n", \u1ED2: "O", \u1ED3: "o", \u1E50: "O", \u1E51: "o", \u1EEA: "U", \u1EEB: "u", \u1E80: "W", \u1E81: "w", \u1EF2: "Y", \u1EF3: "y", \u0200: "A", \u0201: "a", \u0204: "E", \u0205: "e", \u0208: "I", \u0209: "i", \u020C: "O", \u020D: "o", \u0210: "R", \u0211: "r", \u0214: "U", \u0215: "u", B\u030C: "B", b\u030C: "b", \u010C\u0323: "C", \u010D\u0323: "c", \u00CA\u030C: "E", \u00EA\u030C: "e", F\u030C: "F", f\u030C: "f", \u01E6: "G", \u01E7: "g", \u021E: "H", \u021F: "h", J\u030C: "J", \u01F0: "j", \u01E8: "K", \u01E9: "k", M\u030C: "M", m\u030C: "m", P\u030C: "P", p\u030C: "p", Q\u030C: "Q", q\u030C: "q", \u0158\u0329: "R", \u0159\u0329: "r", \u1E66: "S", \u1E67: "s", V\u030C: "V", v\u030C: "v", W\u030C: "W", w\u030C: "w", X\u030C: "X", x\u030C: "x", Y\u030C: "Y", y\u030C: "y", A\u0327: "A", a\u0327: "a", B\u0327: "B", b\u0327: "b", \u1E10: "D", \u1E11: "d", \u0228: "E", \u0229: "e", \u0190\u0327: "E", \u025B\u0327: "e", \u1E28: "H", \u1E29: "h", I\u0327: "I", i\u0327: "i", \u0197\u0327: "I", \u0268\u0327: "i", M\u0327: "M", m\u0327: "m", O\u0327: "O", o\u0327: "o", Q\u0327: "Q", q\u0327: "q", U\u0327: "U", u\u0327: "u", X\u0327: "X", x\u0327: "x", Z\u0327: "Z", z\u0327: "z", \u0439: "\u0438", \u0419: "\u0418", \u0451: "\u0435", \u0401: "\u0415" }, t = Object.keys(e).join("|"), n = new RegExp(t, "g"), r = new RegExp(t, "");
  function s(u) {
    return e[u];
  }
  var a = function(u) {
    return u.replace(n, s);
  }, i = function(u) {
    return !!u.match(r);
  };
  return v.exports = a, v.exports.has = i, v.exports.remove = a, v.exports;
}
var be = Re();
const Se = Ie(be);
const f = { CASE_SENSITIVE_EQUAL: 7, EQUAL: 6, STARTS_WITH: 5, WORD_STARTS_WITH: 4, CONTAINS: 3, ACRONYM: 2, MATCHES: 1, NO_MATCH: 0 }, Te = (e, t) => String(e.rankedValue).localeCompare(String(t.rankedValue));
function V(e, t, n = {}) {
  return xe(e, t, n).map(({ item: r }) => r);
}
function xe(e, t, n) {
  const { keys: r, threshold: s = f.MATCHES, baseSort: a = Te, sorter: i = (c) => c.sort((l, d) => Ue(l, d, a)) } = n, u = e.reduce(o, []);
  return i(u);
  function o(c, l, d) {
    const m = Ce(l, r, t, n), { rank: p, keyThreshold: h = s } = m;
    return p >= h && c.push({ ...m, item: l, index: d }), c;
  }
}
V.rankings = f;
function Ce(e, t, n, r) {
  if (!t) {
    const a = e;
    return { rankedValue: a, rank: k(a, n, r), keyIndex: -1, keyThreshold: r.threshold };
  }
  return Fe(e, t).reduce(({ rank: a, rankedValue: i, keyIndex: u, keyThreshold: o }, { itemValue: c, attributes: l }, d) => {
    let m = k(c, n, r), p = i;
    const { minRanking: h, maxRanking: A, threshold: O } = l;
    return m < h && m >= f.MATCHES ? m = h : m > A && (m = A), m > a && (a = m, u = d, o = O, p = c), { rankedValue: p, rank: a, keyIndex: u, keyThreshold: o };
  }, { rankedValue: e, rank: f.NO_MATCH, keyIndex: -1, keyThreshold: r.threshold });
}
function* we(e, t) {
  let n = -1;
  for (; (n = e.indexOf(t, n + 1)) > -1; ) yield n;
  return -1;
}
function k(e, t, n) {
  if (e = U(e, n), t = U(t, n), t.length > e.length) return f.NO_MATCH;
  if (e === t) return f.CASE_SENSITIVE_EQUAL;
  e = e.toLowerCase(), t = t.toLowerCase();
  const r = we(e, t), s = r.next(), a = s.value;
  if (e.length === t.length && a === 0) return f.EQUAL;
  if (a === 0) return f.STARTS_WITH;
  let i = s;
  for (; !i.done; ) {
    if (i.value > 0 && e[i.value - 1] === " ") return f.WORD_STARTS_WITH;
    i = r.next();
  }
  return a > 0 ? f.CONTAINS : t.length === 1 ? f.NO_MATCH : Me(e).includes(t) ? f.ACRONYM : ke(e, t);
}
function Me(e) {
  let t = "", n = " ";
  for (let r = 0; r < e.length; r++) {
    const s = e.charAt(r);
    (n === " " || n === "-") && !(s === " " || s === "-") && (t += s), n = s;
  }
  return t;
}
function ke(e, t) {
  let n = 0, r = 0;
  function s(o, c, l) {
    for (let d = l, m = c.length; d < m; d++) if (c[d] === o) return n += 1, d + 1;
    return -1;
  }
  function a(o) {
    const c = 1 / o, l = n / t.length;
    return f.MATCHES + l * c;
  }
  const i = s(t[0], e, 0);
  if (i < 0) return f.NO_MATCH;
  r = i;
  for (let o = 1, c = t.length; o < c; o++) {
    const l = t[o];
    if (r = s(l, e, r), !(r > -1)) return f.NO_MATCH;
  }
  const u = r - i;
  return a(u);
}
function Ue(e, t, n) {
  const { rank: a, keyIndex: i } = e, { rank: u, keyIndex: o } = t;
  return a === u ? i === o ? n(e, t) : i < o ? -1 : 1 : a > u ? -1 : 1;
}
function U(e, { keepDiacritics: t }) {
  return e = `${e}`, t || (e = Se(e)), e;
}
function _e(e, t) {
  typeof t == "object" && (t = t.key);
  let n;
  if (typeof t == "function") n = t(e);
  else if (e == null) n = null;
  else if (Object.hasOwnProperty.call(e, t)) n = e[t];
  else {
    if (t.includes(".")) return Ne(t, e);
    n = null;
  }
  return n == null ? [] : Array.isArray(n) ? n : [String(n)];
}
function Ne(e, t) {
  const n = e.split(".");
  let r = [t];
  for (let s = 0, a = n.length; s < a; s++) {
    const i = n[s];
    let u = [];
    for (let o = 0, c = r.length; o < c; o++) {
      const l = r[o];
      if (l != null) if (Object.hasOwnProperty.call(l, i)) {
        const d = l[i];
        d != null && u.push(d);
      } else i === "*" && (u = u.concat(l));
    }
    r = u;
  }
  return Array.isArray(r[0]) ? [].concat(...r) : r;
}
function Fe(e, t) {
  const n = [];
  for (let r = 0, s = t.length; r < s; r++) {
    const a = t[r], i = Ve(a), u = _e(e, a);
    for (let o = 0, c = u.length; o < c; o++) n.push({ itemValue: u[o], attributes: i });
  }
  return n;
}
const _ = { maxRanking: 1 / 0, minRanking: -1 / 0 };
function Ve(e) {
  return typeof e == "string" ? _ : { ..._, ...e };
}
const y = (e, t) => I(() => {
  const n = x(t);
  if (n) return V(x(e), n);
});
y.__docgenInfo = Object.assign({ displayName: y.name ?? y.__name }, { exportName: "useMatchSorter", displayName: "useMatchSorter", description: `Fuzzy search filtering using match-sorter algorithm.

Provides reactive sorted results based on fuzzy matching against a search value.
Uses match-sorter for intelligent ranking and filtering.`, type: 2, props: [{ name: "toString", global: false, description: `Returns a string representation of an array.
Returns a string representation of an object.
Returns a string representation of a function.`, tags: [], required: true, type: "(() => string) | (() => string) | (() => string)", schema: "(() => string) | (() => string) | (() => string)", declarations: [] }, { name: "toLocaleString", global: false, description: `Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.
Returns a date converted to a string using the current locale.`, tags: [], required: true, type: "(() => string) | { (): string; (locales: string | string[], options?: (Intl.NumberFormatOptions & Intl.DateTimeFormatOptions) | undefined): string; }", schema: "(() => string) | { (): string; (locales: string | string[], options?: (Intl.NumberFormatOptions & Intl.DateTimeFormatOptions) | undefined): string; }", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/useMatchSorter.ts" });
const He = ["aria-label", "role"], je = q({ __name: "MDMenuBase", props: C({ target: {}, outsideIgnore: {}, disabledTeleport: { type: Boolean }, placement: { default: "bottom-start" }, ariaLabel: {}, role: { default: "menu" } }, { show: { type: Boolean, required: true }, showModifiers: {} }), emits: C(["interactionOutside", "deactivateFocus"], ["update:show"]), setup(e, { emit: t }) {
  const n = z(e, "show"), r = e, s = t, { target: a, outsideIgnore: i, placement: u } = P(r), o = X("listContainerRef"), c = I(() => {
    const g = ie(o);
    if (g instanceof HTMLElement) return g;
  }), { floatingStyles: l, update: d } = ue(a, c, { strategy: "fixed", transform: false, placement: u, middleware: [fe({ padding: 16 }), me({ padding: 16, crossAxis: true }), ge({ padding: 16, apply({ elements: g, rects: { reference: { width: T } }, availableHeight: L }) {
    Object.assign(g.floating.style, { minWidth: `${T}px`, maxHeight: `${L}px` });
  } })], whileElementsMounted: le });
  se(window.visualViewport, "resize", d);
  const m = he(), p = I(() => i.value ? [a.value, ...i.value] : [a.value]);
  ce(o, () => {
    n.value && (s("interactionOutside"), n.value = false);
  }, { ignore: p });
  const { activate: h, deactivate: A } = pe(c, { allowOutsideClick: true, isKeyForward: ({ key: g }) => ["Tab", "ArrowDown", "ArrowRight"].includes(g), isKeyBackward: ({ key: g }) => ["ArrowUp", "ArrowLeft"].includes(g), onDeactivate: () => {
    s("deactivateFocus");
  } });
  N([n, c], async ([g]) => {
    g ? (await te(), c.value && h()) : A();
  }, { immediate: true, flush: "post" }), oe(A);
  const O = ye(), H = I(() => Array.from(O.keys())), j = Ee(), D = y(H, j), b = I(() => D.value?.at(0));
  Y(() => {
    n.value && b.value && O.get(b.value)?.();
  });
  const S = () => {
    n.value = false;
  };
  return Ae(n, () => (S(), false)), ve(n, () => (S(), false)), (g, T) => (w(), J(E(de), { to: E(m), disabled: e.disabledTeleport, container: o.value }, { default: Q(() => [n.value ? (w(), $("div", { key: 0, ref_key: "listContainerRef", ref: o, class: "md md-menu", style: Z(E(l)), "aria-label": e.ariaLabel, role: e.role }, [G(g.$slots, "default", {}, void 0, true)], 12, He)) : ee("", true)]), _: 3 }, 8, ["to", "disabled", "container"]));
} }), Pe = Oe(je, [["__scopeId", "data-v-7026a230"]]);
export {
  Pe as M,
  R as u
};
