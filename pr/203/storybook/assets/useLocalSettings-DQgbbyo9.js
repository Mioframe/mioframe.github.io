import { M as he, a3 as be, D as Y, r as ye } from "./iframe-BUIxNuCi.js";
import { w as ve, c as xe } from "./index-tsZdLjyk.js";
function T(e) {
  return new Promise((t, n) => {
    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error);
  });
}
function _e(e, t) {
  let n;
  const r = () => {
    if (n) return n;
    const s = indexedDB.open(e);
    return s.onupgradeneeded = () => s.result.createObjectStore(t), n = T(s), n.then((o) => {
      o.onclose = () => n = void 0;
    }, () => {
      n = void 0;
    }), n;
  };
  return (s, o) => r().then((a) => o(a.transaction(t, s).objectStore(t)));
}
let Z;
function D() {
  return Z || (Z = _e("keyval-store", "keyval")), Z;
}
function Se(e, t = D()) {
  return t("readonly", (n) => T(n.get(e)));
}
function we(e, t, n = D()) {
  return n("readwrite", (r) => (r.put(t, e), T(r.transaction)));
}
function ze(e, t, n = D()) {
  return n("readwrite", (r) => new Promise((s, o) => {
    const a = r.get(e);
    a.onsuccess = function() {
      try {
        r.put(t(a.result), e), s(T(r.transaction));
      } catch (i) {
        o(i);
      }
    }, a.onerror = () => o(a.error);
  }));
}
function Re(e, t = D()) {
  return t("readwrite", (n) => (n.delete(e), T(n.transaction)));
}
function Ee(e, t, n = {}) {
  const { flush: r = "pre", deep: s = true, shallow: o = false, onError: a = (f) => {
    console.error(f);
  }, writeDefaults: i = true, serializer: c = { read: (f) => f, write: (f) => f } } = n, l = Y(false), u = (o ? Y : ye)(t), g = he(t);
  async function d() {
    try {
      const f = await Se(e);
      f === void 0 ? g != null && i && await we(e, c.write(g)) : u.value = c.read(f);
    } catch (f) {
      a(f);
    }
    l.value = true;
  }
  d();
  async function m() {
    try {
      if (u.value == null) await Re(e);
      else {
        const f = be(u.value), me = c.write(f);
        await ze(e, () => me);
      }
    } catch (f) {
      a(f);
    }
  }
  const { pause: h, resume: I } = ve(u, () => m(), { flush: r, deep: s });
  async function z(f) {
    h(), u.value = f, await m(), I();
  }
  return { set: z, isFinished: l, data: u };
}
var J;
function p(e, t, n) {
  function r(i, c) {
    if (i._zod || Object.defineProperty(i, "_zod", { value: { def: c, constr: a, traits: /* @__PURE__ */ new Set() }, enumerable: false }), i._zod.traits.has(e)) return;
    i._zod.traits.add(e), t(i, c);
    const l = a.prototype, u = Object.keys(l);
    for (let g = 0; g < u.length; g++) {
      const d = u[g];
      d in i || (i[d] = l[d].bind(i));
    }
  }
  const s = n?.Parent ?? Object;
  class o extends s {
  }
  Object.defineProperty(o, "name", { value: e });
  function a(i) {
    var c;
    const l = n?.Parent ? new o() : this;
    r(l, i), (c = l._zod).deferred ?? (c.deferred = []);
    for (const u of l._zod.deferred) u();
    return l;
  }
  return Object.defineProperty(a, "init", { value: r }), Object.defineProperty(a, Symbol.hasInstance, { value: (i) => n?.Parent && i instanceof n.Parent ? true : i?._zod?.traits?.has(e) }), Object.defineProperty(a, "name", { value: e }), a;
}
class E extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
(J = globalThis).__zod_globalConfig ?? (J.__zod_globalConfig = {});
const Ae = globalThis.__zod_globalConfig;
function N(e) {
  return Ae;
}
function Te(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function Oe(e) {
  return { get value() {
    {
      const t = e();
      return Object.defineProperty(this, "value", { value: t }), t;
    }
  } };
}
function Ie(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
const X = /* @__PURE__ */ Symbol("evaluating");
function w(e, t, n) {
  let r;
  Object.defineProperty(e, t, { get() {
    if (r !== X) return r === void 0 && (r = X, r = n()), r;
  }, set(s) {
    Object.defineProperty(e, t, { value: s });
  }, configurable: true });
}
const ae = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function W(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function je(e) {
  if (W(e) === false) return false;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function") return true;
  const n = t.prototype;
  return !(W(n) === false || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === false);
}
function qe(e) {
  return je(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
function Pe(e, t, n) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || n?.parent) && (r._zod.parent = e), r;
}
function O(e) {
  return {};
}
function ke(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function j(e, t = 0) {
  if (e.aborted === true) return true;
  for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== true) return true;
  return false;
}
function Ce(e, t = 0) {
  if (e.aborted === true) return true;
  for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === false) return true;
  return false;
}
function ie(e, t) {
  return t.map((n) => {
    var r;
    return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
  });
}
function q(e) {
  return typeof e == "string" ? e : e?.message;
}
function L(e, t, n) {
  const r = e.message ? e.message : q(e.inst?._zod.def?.error?.(e)) ?? q(t?.error?.(e)) ?? q(n.customError?.(e)) ?? q(n.localeError?.(e)) ?? "Invalid input", { inst: s, continue: o, input: a, ...i } = e;
  return i.path ?? (i.path = []), i.message = r, t?.reportInput && (i.input = a), i;
}
const oe = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", { value: e._zod, enumerable: false }), Object.defineProperty(e, "issues", { value: t, enumerable: false }), e.message = JSON.stringify(t, Te, 2), Object.defineProperty(e, "toString", { value: () => e.message, enumerable: false });
}, De = p("$ZodError", oe), M = p("$ZodError", oe, { Parent: Error }), Ne = (e) => (t, n, r, s) => {
  const o = r ? { ...r, async: false } : { async: false }, a = t._zod.run({ value: n, issues: [] }, o);
  if (a instanceof Promise) throw new E();
  if (a.issues.length) {
    const i = new (s?.Err ?? e)(a.issues.map((c) => L(c, o, N())));
    throw ae(i, s?.callee), i;
  }
  return a.value;
}, Le = Ne(M), Me = (e) => async (t, n, r, s) => {
  const o = r ? { ...r, async: true } : { async: true };
  let a = t._zod.run({ value: n, issues: [] }, o);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const i = new (s?.Err ?? e)(a.issues.map((c) => L(c, o, N())));
    throw ae(i, s?.callee), i;
  }
  return a.value;
}, Fe = Me(M), Ze = (e) => (t, n, r) => {
  const s = r ? { ...r, async: false } : { async: false }, o = t._zod.run({ value: n, issues: [] }, s);
  if (o instanceof Promise) throw new E();
  return o.issues.length ? { success: false, error: new (e ?? De)(o.issues.map((a) => L(a, s, N()))) } : { success: true, data: o.value };
}, ce = Ze(M), Ve = (e) => async (t, n, r) => {
  const s = r ? { ...r, async: true } : { async: true };
  let o = t._zod.run({ value: n, issues: [] }, s);
  return o instanceof Promise && (o = await o), o.issues.length ? { success: false, error: new e(o.issues.map((a) => L(a, s, N()))) } : { success: true, data: o.value };
}, le = Ve(M), $e = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Ue = /^-?\d+(?:\.\d+)?$/, Be = /^(?:true|false)$/i, Ke = { major: 4, minor: 4, patch: 3 }, b = p("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Ke;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const s of r) for (const o of s._zod.onattach) o(e);
  if (r.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
    e._zod.run = e._zod.parse;
  });
  else {
    const s = (a, i, c) => {
      let l = j(a), u;
      for (const g of i) {
        if (g._zod.def.when) {
          if (Ce(a) || !g._zod.def.when(a)) continue;
        } else if (l) continue;
        const d = a.issues.length, m = g._zod.check(a);
        if (m instanceof Promise && c?.async === false) throw new E();
        if (u || m instanceof Promise) u = (u ?? Promise.resolve()).then(async () => {
          await m, a.issues.length !== d && (l || (l = j(a, d)));
        });
        else {
          if (a.issues.length === d) continue;
          l || (l = j(a, d));
        }
      }
      return u ? u.then(() => a) : a;
    }, o = (a, i, c) => {
      if (j(a)) return a.aborted = true, a;
      const l = s(i, r, c);
      if (l instanceof Promise) {
        if (c.async === false) throw new E();
        return l.then((u) => e._zod.parse(u, c));
      }
      return e._zod.parse(l, c);
    };
    e._zod.run = (a, i) => {
      if (i.skipChecks) return e._zod.parse(a, i);
      if (i.direction === "backward") {
        const l = e._zod.parse({ value: a.value, issues: [] }, { ...i, skipChecks: true });
        return l instanceof Promise ? l.then((u) => o(u, a, i)) : o(l, a, i);
      }
      const c = e._zod.parse(a, i);
      if (c instanceof Promise) {
        if (i.async === false) throw new E();
        return c.then((l) => s(l, r, i));
      }
      return s(c, r, i);
    };
  }
  w(e, "~standard", () => ({ validate: (s) => {
    try {
      const o = ce(e, s);
      return o.success ? { value: o.data } : { issues: o.error?.issues };
    } catch {
      return le(e, s).then((a) => a.success ? { value: a.data } : { issues: a.error?.issues });
    }
  }, vendor: "zod", version: 1 }));
}), He = p("$ZodString", (e, t) => {
  b.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? $e(e._zod.bag), e._zod.parse = (n, r) => {
    if (t.coerce) try {
      n.value = String(n.value);
    } catch {
    }
    return typeof n.value == "string" || n.issues.push({ expected: "string", code: "invalid_type", input: n.value, inst: e }), n;
  };
}), We = p("$ZodNumber", (e, t) => {
  b.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Ue, e._zod.parse = (n, r) => {
    if (t.coerce) try {
      n.value = Number(n.value);
    } catch {
    }
    const s = n.value;
    if (typeof s == "number" && !Number.isNaN(s) && Number.isFinite(s)) return n;
    const o = typeof s == "number" ? Number.isNaN(s) ? "NaN" : Number.isFinite(s) ? void 0 : "Infinity" : void 0;
    return n.issues.push({ expected: "number", code: "invalid_type", input: s, inst: e, ...o ? { received: o } : {} }), n;
  };
}), Ge = p("$ZodBoolean", (e, t) => {
  b.init(e, t), e._zod.pattern = Be, e._zod.parse = (n, r) => {
    if (t.coerce) try {
      n.value = !!n.value;
    } catch {
    }
    const s = n.value;
    return typeof s == "boolean" || n.issues.push({ expected: "boolean", code: "invalid_type", input: s, inst: e }), n;
  };
});
function ee(e, t, n) {
  e.issues.length && t.issues.push(...ie(n, e.issues)), t.value[n] = e.value;
}
const Qe = p("$ZodArray", (e, t) => {
  b.init(e, t), e._zod.parse = (n, r) => {
    const s = n.value;
    if (!Array.isArray(s)) return n.issues.push({ expected: "array", code: "invalid_type", input: s, inst: e }), n;
    n.value = Array(s.length);
    const o = [];
    for (let a = 0; a < s.length; a++) {
      const i = s[a], c = t.element._zod.run({ value: i, issues: [] }, r);
      c instanceof Promise ? o.push(c.then((l) => ee(l, n, a))) : ee(c, n, a);
    }
    return o.length ? Promise.all(o).then(() => n) : n;
  };
});
function k(e, t, n, r, s, o) {
  const a = n in r;
  if (e.issues.length) {
    if (s && o && !a) return;
    t.issues.push(...ie(n, e.issues));
  }
  if (!a && !s) {
    e.issues.length || t.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [n] });
    return;
  }
  e.value === void 0 ? a && (t.value[n] = void 0) : t.value[n] = e.value;
}
function Ye(e) {
  const t = Object.keys(e.shape);
  for (const r of t) if (!e.shape?.[r]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const n = ke(e.shape);
  return { ...e, keys: t, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(n) };
}
function Je(e, t, n, r, s, o) {
  const a = [], i = s.keySet, c = s.catchall._zod, l = c.def.type, u = c.optin === "optional", g = c.optout === "optional";
  for (const d in t) {
    if (d === "__proto__" || i.has(d)) continue;
    if (l === "never") {
      a.push(d);
      continue;
    }
    const m = c.run({ value: t[d], issues: [] }, r);
    m instanceof Promise ? e.push(m.then((h) => k(h, n, d, t, u, g))) : k(m, n, d, t, u, g);
  }
  return a.length && n.issues.push({ code: "unrecognized_keys", keys: a, input: t, inst: o }), e.length ? Promise.all(e).then(() => n) : n;
}
const Xe = p("$ZodObject", (e, t) => {
  if (b.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const i = t.shape;
    Object.defineProperty(t, "shape", { get: () => {
      const c = { ...i };
      return Object.defineProperty(t, "shape", { value: c }), c;
    } });
  }
  const r = Oe(() => Ye(t));
  w(e._zod, "propValues", () => {
    const i = t.shape, c = {};
    for (const l in i) {
      const u = i[l]._zod;
      if (u.values) {
        c[l] ?? (c[l] = /* @__PURE__ */ new Set());
        for (const g of u.values) c[l].add(g);
      }
    }
    return c;
  });
  const s = W, o = t.catchall;
  let a;
  e._zod.parse = (i, c) => {
    a ?? (a = r.value);
    const l = i.value;
    if (!s(l)) return i.issues.push({ expected: "object", code: "invalid_type", input: l, inst: e }), i;
    i.value = {};
    const u = [], g = a.shape;
    for (const d of a.keys) {
      const m = g[d], h = m._zod.optin === "optional", I = m._zod.optout === "optional", z = m._zod.run({ value: l[d], issues: [] }, c);
      z instanceof Promise ? u.push(z.then((f) => k(f, i, d, l, h, I))) : k(z, i, d, l, h, I);
    }
    return o ? Je(u, l, i, c, r.value, e) : u.length ? Promise.all(u).then(() => i) : i;
  };
});
function te(e, t) {
  return t === void 0 && (e.issues.length || e.fallback) ? { issues: [], value: void 0 } : e;
}
const et = p("$ZodOptional", (e, t) => {
  b.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", w(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), w(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${Ie(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, r) => {
    if (t.innerType._zod.optin === "optional") {
      const s = n.value, o = t.innerType._zod.run(n, r);
      return o instanceof Promise ? o.then((a) => te(a, s)) : te(o, s);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, r);
  };
}), tt = p("$ZodDefault", (e, t) => {
  b.init(e, t), e._zod.optin = "optional", w(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward") return t.innerType._zod.run(n, r);
    if (n.value === void 0) return n.value = t.defaultValue, n;
    const s = t.innerType._zod.run(n, r);
    return s instanceof Promise ? s.then((o) => ne(o, t)) : ne(s, t);
  };
});
function ne(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
function nt(e, t) {
  return new e({ type: "string", ...O() });
}
function rt(e, t) {
  return new e({ type: "number", checks: [], ...O() });
}
function st(e, t) {
  return new e({ type: "boolean", ...O() });
}
const v = p("ZodMiniType", (e, t) => {
  if (!e._zod) throw new Error("Uninitialized schema in ZodMiniType.");
  b.init(e, t), e.def = t, e.type = t.type, e.parse = (n, r) => Le(e, n, r, { callee: e.parse }), e.safeParse = (n, r) => ce(e, n, r), e.parseAsync = async (n, r) => Fe(e, n, r, { callee: e.parseAsync }), e.safeParseAsync = async (n, r) => le(e, n, r), e.check = (...n) => e.clone({ ...t, checks: [...t.checks ?? [], ...n.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)] }, { parent: true }), e.with = e.check, e.clone = (n, r) => Pe(e, n, r), e.brand = () => e, e.register = ((n, r) => (n.add(e, r), e)), e.apply = (n) => n(e);
}), at = p("ZodMiniString", (e, t) => {
  He.init(e, t), v.init(e, t);
});
function it(e) {
  return nt(at);
}
const ot = p("ZodMiniNumber", (e, t) => {
  We.init(e, t), v.init(e, t);
});
function re(e) {
  return rt(ot);
}
const ct = p("ZodMiniBoolean", (e, t) => {
  Ge.init(e, t), v.init(e, t);
});
function _(e) {
  return st(ct);
}
const lt = p("ZodMiniArray", (e, t) => {
  Qe.init(e, t), v.init(e, t);
});
function ut(e, t) {
  return new lt({ type: "array", element: e, ...O() });
}
const dt = p("ZodMiniObject", (e, t) => {
  Xe.init(e, t), v.init(e, t), w(e, "shape", () => t.shape);
});
function gt(e, t) {
  const n = { type: "object", shape: e ?? {}, ...O() };
  return new dt(n);
}
const ft = p("ZodMiniOptional", (e, t) => {
  et.init(e, t), v.init(e, t);
});
function x(e) {
  return new ft({ type: "optional", innerType: e });
}
const pt = p("ZodMiniDefault", (e, t) => {
  tt.init(e, t), v.init(e, t);
});
function C(e, t) {
  return new pt({ type: "default", innerType: e, get defaultValue() {
    return typeof t == "function" ? t() : qe(t);
  } });
}
var R = ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e.Fatal = "fatal", e))(R || {});
const mt = /* @__PURE__ */ new Map(), A = (e, t) => {
  mt.set(e, t);
};
A.__docgenInfo = Object.assign({ displayName: A.name ?? A.__name }, { exportName: "registerDiagnosticsRuntimeEffects", displayName: "registerDiagnosticsRuntimeEffects", description: `Registers a pair of flush/clear queue side effects for the shared diagnostics runtime.
Registration is idempotent: registering the same key again replaces the previous entry.
Each diagnostics transport module calls this once at import time so
\`setDiagnosticsRuntimeState\` can drive all queues without importing transport modules.`, type: 2, props: [{ name: "toString", global: false, description: "Returns a string representation of a string.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "charAt", global: false, description: "Returns the character at the specified index.", tags: [{ name: "param", text: "pos The zero-based index of the desired character." }], required: true, type: "(pos: number) => string", schema: "(pos: number) => string", declarations: [] }, { name: "charCodeAt", global: false, description: "Returns the Unicode value of the character at the specified location.", tags: [{ name: "param", text: "index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned." }], required: true, type: "(index: number) => number", schema: "(index: number) => number", declarations: [] }, { name: "concat", global: false, description: "Returns a string that contains the concatenation of two or more strings.", tags: [{ name: "param", text: "strings The strings to append to the end of the string." }], required: true, type: "(...strings: string[]) => string", schema: "(...strings: string[]) => string", declarations: [] }, { name: "indexOf", global: false, description: "Returns the position of the first occurrence of a substring.", tags: [{ name: "param", text: "searchString The substring to search for in the string" }, { name: "param", text: "position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string." }], required: true, type: "(searchString: string, position?: number | undefined) => number", schema: "(searchString: string, position?: number | undefined) => number", declarations: [] }, { name: "lastIndexOf", global: false, description: "Returns the last occurrence of a substring in the string.", tags: [{ name: "param", text: "searchString The substring to search for." }, { name: "param", text: "position The index at which to begin searching. If omitted, the search begins at the end of the string." }], required: true, type: "(searchString: string, position?: number | undefined) => number", schema: "(searchString: string, position?: number | undefined) => number", declarations: [] }, { name: "localeCompare", global: false, description: `Determines whether two strings are equivalent in the current locale.
Determines whether two strings are equivalent in the current or specified locale.`, tags: [{ name: "param", text: "that String to compare to target string" }, { name: "param", text: "that String to compare to target string" }, { name: "param", text: "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details." }, { name: "param", text: "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details." }, { name: "param", text: "that String to compare to target string" }, { name: "param", text: "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details." }, { name: "param", text: "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details." }], required: true, type: "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: Intl.CollatorOptions | undefined): number; (that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions | undefined): number; }", schema: "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: Intl.CollatorOptions | undefined): number; (that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions | undefined): number; }", declarations: [] }, { name: "match", global: false, description: `Matches a string with a regular expression, and returns an array containing the results of that search.
Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.`, tags: [{ name: "param", text: "regexp A variable name or string literal containing the regular expression pattern and flags." }, { name: "param", text: "matcher An object that supports being matched against." }], required: true, type: "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }", schema: "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }", declarations: [] }, { name: "replace", global: false, description: "Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.", tags: [{ name: "param", text: "searchValue A string or regular expression to search for." }, { name: "param", text: "replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced." }, { name: "param", text: "searchValue A string to search for." }, { name: "param", text: "replacer A function that returns the replacement text." }, { name: "param", text: "searchValue An object that supports searching for and replacing matches within a string." }, { name: "param", text: "replaceValue The replacement text." }, { name: "param", text: "searchValue A object can search for and replace matches within a string." }, { name: "param", text: "replacer A function that returns the replacement text." }], required: true, type: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string; (searchValue: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }, replacer: (substring: string, ...args: any[]) => string): string; }", schema: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string; (searchValue: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }, replacer: (substring: string, ...args: any[]) => string): string; }", declarations: [] }, { name: "search", global: false, description: "Finds the first substring match in a regular expression search.", tags: [{ name: "param", text: "regexp The regular expression pattern and applicable flags." }, { name: "param", text: "searcher An object which supports searching within a string." }], required: true, type: "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }", schema: "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }", declarations: [] }, { name: "slice", global: false, description: "Returns a section of a string.", tags: [{ name: "param", text: "start The index to the beginning of the specified portion of stringObj." }, { name: "param", text: `end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
If this value is not specified, the substring continues to the end of stringObj.` }], required: true, type: "(start?: number | undefined, end?: number | undefined) => string", schema: "(start?: number | undefined, end?: number | undefined) => string", declarations: [] }, { name: "split", global: false, description: "Split a string into substrings using the specified separator and return them as an array.", tags: [{ name: "param", text: "separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned." }, { name: "param", text: "limit A value used to limit the number of elements returned in the array." }, { name: "param", text: "splitter An object that can split a string." }, { name: "param", text: "limit A value used to limit the number of elements returned in the array." }], required: true, type: "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }", schema: "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }", declarations: [] }, { name: "substring", global: false, description: "Returns the substring at the specified location within a String object.", tags: [{ name: "param", text: "start The zero-based index number indicating the beginning of the substring." }, { name: "param", text: `end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
If end is omitted, the characters from start through the end of the original string are returned.` }], required: true, type: "(start: number, end?: number | undefined) => string", schema: "(start: number, end?: number | undefined) => string", declarations: [] }, { name: "toLowerCase", global: false, description: "Converts all the alphabetic characters in a string to lowercase.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "toLocaleLowerCase", global: false, description: "Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.", tags: [], required: true, type: "{ (locales?: string | string[] | undefined): string; (locales?: Intl.LocalesArgument): string; }", schema: "{ (locales?: string | string[] | undefined): string; (locales?: Intl.LocalesArgument): string; }", declarations: [] }, { name: "toUpperCase", global: false, description: "Converts all the alphabetic characters in a string to uppercase.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "toLocaleUpperCase", global: false, description: "Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.", tags: [], required: true, type: "{ (locales?: string | string[] | undefined): string; (locales?: Intl.LocalesArgument): string; }", schema: "{ (locales?: string | string[] | undefined): string; (locales?: Intl.LocalesArgument): string; }", declarations: [] }, { name: "trim", global: false, description: "Removes the leading and trailing white space and line terminator characters from a string.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "length", global: false, description: "Returns the length of a String object.", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "substr", global: false, description: "Gets a substring beginning at the specified location and having the specified length.", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }, { name: "param", text: "from The starting position of the desired substring. The index of the first character in the string is zero." }, { name: "param", text: "length The number of characters to include in the returned substring." }], required: true, type: "(from: number, length?: number | undefined) => string", schema: "(from: number, length?: number | undefined) => string", declarations: [] }, { name: "valueOf", global: false, description: "Returns the primitive value of the specified object.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "codePointAt", global: false, description: `Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.`, tags: [], required: true, type: "(pos: number) => number | undefined", schema: "(pos: number) => number | undefined", declarations: [] }, { name: "includes", global: false, description: `Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.`, tags: [{ name: "param", text: "searchString search string" }, { name: "param", text: "position If position is undefined, 0 is assumed, so as to search all of the String." }], required: true, type: "(searchString: string, position?: number | undefined) => boolean", schema: "(searchString: string, position?: number | undefined) => boolean", declarations: [] }, { name: "endsWith", global: false, description: `Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition \u2013 length(this). Otherwise returns false.`, tags: [], required: true, type: "(searchString: string, endPosition?: number | undefined) => boolean", schema: "(searchString: string, endPosition?: number | undefined) => boolean", declarations: [] }, { name: "normalize", global: false, description: `Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.`, tags: [{ name: "param", text: `form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"` }, { name: "param", text: `form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"` }], required: true, type: '{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }', schema: '{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }', declarations: [] }, { name: "repeat", global: false, description: `Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.`, tags: [{ name: "param", text: "count number of copies to append" }], required: true, type: "(count: number) => string", schema: "(count: number) => string", declarations: [] }, { name: "startsWith", global: false, description: `Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.`, tags: [], required: true, type: "(searchString: string, position?: number | undefined) => boolean", schema: "(searchString: string, position?: number | undefined) => boolean", declarations: [] }, { name: "anchor", global: false, description: "Returns an `<a>` HTML anchor element and sets the name attribute to the text value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }, { name: "param", text: "name" }], required: true, type: "(name: string) => string", schema: "(name: string) => string", declarations: [] }, { name: "big", global: false, description: "Returns a `<big>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "blink", global: false, description: "Returns a `<blink>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "bold", global: false, description: "Returns a `<b>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "fixed", global: false, description: "Returns a `<tt>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "fontcolor", global: false, description: "Returns a `<font>` HTML element and sets the color attribute value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "(color: string) => string", schema: "(color: string) => string", declarations: [] }, { name: "fontsize", global: false, description: "Returns a `<font>` HTML element and sets the size attribute value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }, { name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "{ (size: number): string; (size: string): string; }", schema: "{ (size: number): string; (size: string): string; }", declarations: [] }, { name: "italics", global: false, description: "Returns an `<i>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "link", global: false, description: "Returns an `<a>` HTML element and sets the href attribute value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "(url: string) => string", schema: "(url: string) => string", declarations: [] }, { name: "small", global: false, description: "Returns a `<small>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "strike", global: false, description: "Returns a `<strike>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "sub", global: false, description: "Returns a `<sub>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "sup", global: false, description: "Returns a `<sup>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "padStart", global: false, description: `Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.`, tags: [{ name: "param", text: `maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.` }, { name: "param", text: `fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).` }], required: true, type: "(maxLength: number, fillString?: string | undefined) => string", schema: "(maxLength: number, fillString?: string | undefined) => string", declarations: [] }, { name: "padEnd", global: false, description: `Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.`, tags: [{ name: "param", text: `maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.` }, { name: "param", text: `fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).` }], required: true, type: "(maxLength: number, fillString?: string | undefined) => string", schema: "(maxLength: number, fillString?: string | undefined) => string", declarations: [] }, { name: "trimEnd", global: false, description: "Removes the trailing white space and line terminator characters from a string.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "trimStart", global: false, description: "Removes the leading white space and line terminator characters from a string.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "trimLeft", global: false, description: "Removes the leading white space and line terminator characters from a string.", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility. Use `trimStart` instead" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "trimRight", global: false, description: "Removes the trailing white space and line terminator characters from a string.", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility. Use `trimEnd` instead" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "matchAll", global: false, description: `Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.`, tags: [{ name: "param", text: "regexp A variable name or string literal containing the regular expression pattern and flags." }], required: true, type: "(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>", schema: "(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>", declarations: [] }, { name: "replaceAll", global: false, description: "Replace all instances of a substring in a string, using a regular expression or search string.", tags: [{ name: "param", text: "searchValue A string to search for." }, { name: "param", text: "replaceValue A string containing the text to replace for every successful match of searchValue in this string." }, { name: "param", text: "searchValue A string to search for." }, { name: "param", text: "replacer A function that returns the replacement text." }], required: true, type: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }", schema: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }", declarations: [] }, { name: "at", global: false, description: "Returns a new String consisting of the single UTF-16 code unit located at the specified index.", tags: [{ name: "param", text: "index The zero-based index of the desired code unit. A negative index will count back from the last item." }], required: true, type: "(index: number) => string | undefined", schema: "(index: number) => string | undefined", declarations: [] }, { name: "isWellFormed", global: false, description: "Returns true if all leading surrogates and trailing surrogates appear paired and in order.", tags: [], required: true, type: "() => boolean", schema: "() => boolean", declarations: [] }, { name: "toWellFormed", global: false, description: "Returns a string where all lone or out-of-order surrogates have been replaced by the Unicode replacement character (U+FFFD).", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "__@iterator@617", global: false, description: "Iterator", tags: [], required: true, type: "() => StringIterator<string>", schema: "() => StringIterator<string>", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/diagnostics/runtimeEffects.ts" });
const ht = /^session:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/, bt = (e) => typeof e == "string" && ht.test(e), yt = ["path", "file", "filename", "name", "document", "doc", "storagekey", "key", "url", "uri", "href", "email", "user", "username", "account", "token", "secret", "credential", "cookie", "content", "body", "bytes", "handle", "message", "cause", "stack", "target"], vt = /(?:^|[\s"'`(])(?:\/[^/\s]{1,260}){2,}|^[a-zA-Z]:\\|^\.{1,2}[/\\]/, xt = /^[a-z][a-z0-9+\-.]{1,20}:\/\//i, _t = /[^@\s]{1,64}@[^@\s]{1,255}\.[a-z]{2,}/i, St = /^[A-Za-z0-9]{20,}[_~][A-Za-z0-9_~.-]{1,}/, F = (e) => {
  const t = e.toLowerCase();
  return yt.some((n) => t.includes(n));
}, G = (e) => !!(vt.test(e) || xt.test(e) || _t.test(e) || St.test(e)), y = 200, wt = 320, P = (e, t = y) => {
  const n = e.trim();
  if (!(n.length === 0 || n.length > t) && !G(n)) return n;
}, zt = (e) => e == null || typeof e == "boolean" || typeof e == "number" || typeof e == "string", ue = (e, t = y) => {
  const n = {};
  for (const [r, s] of Object.entries(e)) if (!F(r) && zt(s) && s != null && !(typeof s == "number" && !Number.isFinite(s))) {
    if (typeof s == "string") {
      const o = P(s, t);
      if (o === void 0) continue;
      n[r] = o;
      continue;
    }
    n[r] = s;
  }
  return Object.keys(n).length > 0 ? n : void 0;
}, Rt = /^[a-z][a-zA-Z0-9]*(?:\.[a-zA-Z][a-zA-Z0-9]*)+$/, Et = 60, At = (e) => !(typeof e != "string" || e.length === 0 || e.length > Et || !Rt.test(e)), Tt = (e) => e ? wt : y, de = (e, t, n) => {
  if (typeof e != "string") return;
  const r = e.trim(), s = Tt(t);
  if (!(r.length === 0 || r.length > s)) return r;
}, Ot = (e, t) => {
  if (!e) return;
  const n = {};
  for (const r of Object.keys(e)) {
    if (F(r)) continue;
    const s = e[r];
    if (s !== void 0) {
      if (typeof s == "boolean") {
        n[r] = s;
        continue;
      }
      if (typeof s == "number") {
        Number.isFinite(s) && (n[r] = s);
        continue;
      }
      if (typeof s == "string") {
        const o = de(s, t);
        o !== void 0 && !G(o) && (n[r] = o);
        continue;
      }
    }
  }
  return Object.keys(n).length > 0 ? n : void 0;
}, It = (e, t) => {
  if (!e) return "info";
  if (!(e === "fatal" || e === "log") && !(e === "debug" && !t)) switch (e) {
    case "debug":
    case "info":
    case "warning":
    case "error":
      return e;
    default:
      return;
  }
}, ge = (e, t) => {
  if (!At(e.category)) return null;
  const n = It(e.level, t);
  if (n === void 0) return null;
  const r = de(e.message, t), s = Ot(e.data, t);
  return r === void 0 && s === void 0 ? null : { category: e.category, ...s !== void 0 ? { data: s } : {}, level: n, ...r !== void 0 ? { message: r } : {}, ...typeof e.timestamp == "number" && Number.isFinite(e.timestamp) ? { timestamp: e.timestamp } : {} };
}, jt = (e, t = () => "enabled") => (n) => t() !== "enabled" ? null : ge(n, e), qt = (e, t) => {
  if (!e) return;
  const n = e.flatMap((r) => {
    const s = ge(r, t);
    return s ? [s] : [];
  });
  return n.length > 0 ? n : void 0;
}, Pt = (e) => e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string", kt = (e) => {
  const t = {};
  if (!e) return t;
  for (const [n, r] of Object.entries(e)) F(n) || Pt(r) && r !== null && (typeof r == "string" && (r.length > y || G(r)) || (t[n] = r));
  return t;
}, Ct = (e) => e ? ue(e) ?? {} : {}, Dt = (e) => typeof e == "object" && e !== null && !Array.isArray(e), Nt = (e) => {
  if (!e) return {};
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (!Dt(r) || F(n)) continue;
    const s = ue(r);
    s && Object.keys(s).length > 0 && (t[n] = s);
  }
  return t;
}, Lt = (e) => {
  if (!e) return;
  const { id: t } = e;
  if (bt(t)) return { id: t };
}, Mt = "[sanitized]", Ft = (e) => {
  const { type: t, handled: n, synthetic: r, source: s, exception_id: o, parent_id: a, is_exception_group: i } = e, c = { type: t };
  return n !== void 0 && (c.handled = n), r !== void 0 && (c.synthetic = r), s !== void 0 && (c.source = s), o !== void 0 && (c.exception_id = o), a !== void 0 && (c.parent_id = a), i !== void 0 && (c.is_exception_group = i), c;
}, Zt = (e) => e.frames ? { ...e, frames: e.frames.map(({ vars: t, ...n }) => n) } : e, Vt = (e) => {
  const { value: t, type: n, mechanism: r, module: s, thread_id: o, stacktrace: a } = e, i = {};
  if (n !== void 0 && (i.type = P(n, y) ?? "Error"), s !== void 0) {
    const c = P(s, y);
    c !== void 0 && (i.module = c);
  }
  if (o !== void 0 && (i.thread_id = o), t !== void 0) {
    const c = P(t, y);
    i.value = c !== void 0 ? c : Mt;
  }
  return r !== void 0 && (i.mechanism = Ft(r)), a !== void 0 && (i.stacktrace = Zt(a)), i;
}, $t = (e) => e?.values ? { ...e, values: e.values.map(Vt) } : e, Ut = (e) => e.tags?.eventKind === "handledException" ? false : e.exception?.values?.some((t) => t.type === "WebFileSystemAccessRequiredError" && (t.mechanism?.handled === false || t.mechanism?.type === "onunhandledrejection")) ?? false, Bt = ({ isVerbose: e, getState: t }) => (n) => {
  if (t() !== "enabled" || Ut(n)) return null;
  const r = { ...n };
  delete r.request;
  const s = $t(n.exception);
  s !== void 0 && (r.exception = s);
  const o = qt(n.breadcrumbs, e);
  o !== void 0 ? r.breadcrumbs = o : delete r.breadcrumbs;
  const a = Nt(n.contexts);
  Object.keys(a).length > 0 ? r.contexts = a : delete r.contexts;
  const i = Lt(n.user);
  i !== void 0 ? r.user = i : delete r.user;
  const c = Ct(n.extra);
  Object.keys(c).length > 0 ? r.extra = c : delete r.extra;
  const l = kt(n.tags);
  return Object.keys(l).length > 0 ? r.tags = l : delete r.tags, r;
}, V = ({ isVerbose: e, dsn: t, release: n, getReportingState: r }) => ({ dsn: t, ...n ? { release: n } : {}, tracesSampleRate: 0, sendDefaultPii: false, maxBreadcrumbs: e ? 50 : 25, beforeBreadcrumb: jt(e, r), beforeSend: Bt({ isVerbose: e, getState: r }) });
V.__docgenInfo = Object.assign({ displayName: V.name ?? V.__name }, { exportName: "createSentryOptions", displayName: "createSentryOptions", description: "Builds shared Sentry `init` options for both main-thread and worker runtimes.\nStatic config (DSN, release, environment) is derived from build-time imports.\nDynamic reporting state is checked at event time via `getReportingState`.\n\nMain thread passes the optional `app` param in addition to these options.\nWorker uses the same shared init options as the main runtime.", type: 2, props: [{ name: "isVerbose", global: false, description: "", tags: [], required: true, type: "boolean", schema: "boolean", declarations: [] }, { name: "dsn", global: false, description: "", tags: [], required: true, type: "string", schema: "string", declarations: [] }, { name: "release", global: false, description: "", tags: [], required: true, type: "string | undefined", schema: "string | undefined", declarations: [] }, { name: "getReportingState", global: false, description: "", tags: [], required: true, type: "() => SentryReportingState", schema: "() => SentryReportingState", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/diagnostics/sentryOptions.ts" });
let Kt, Ht = "unknown";
const Wt = (e) => e?.enabled === true, Gt = () => Wt(Kt), Qt = () => Ht, se = 50, S = [];
let $;
const Q = () => {
  S.length = 0;
}, Yt = () => {
  S.length > se && S.splice(0, S.length - se);
}, Jt = (e) => {
  switch (e) {
    case R.Info:
      return "info";
    case R.Warning:
      return "warning";
    case R.Error:
      return "error";
    case R.Fatal:
      return "fatal";
  }
}, U = (e) => {
  const t = {};
  if (e.attemptId !== void 0 && (t.attemptId = e.attemptId), e.counters) {
    const { pendingCount: n, failedCount: r, flushedCount: s } = e.counters;
    n !== void 0 && (t.pendingCount = n), r !== void 0 && (t.failedCount = r), s !== void 0 && (t.flushedCount = s);
  }
  return { level: Jt(e.severity), tags: { eventKind: "diagnostic", severity: e.severity, result: e.result, classification: e.classification, ...e.safeTags }, ...Object.keys(t).length > 0 ? { extra: t } : {} };
}, Xt = async () => {
  if (S.length !== 0) {
    Q();
    return;
  }
}, en = () => ($ ??= Xt().catch(() => {
}).finally(() => {
  $ = void 0;
}), $), tn = () => {
  en();
};
A("diagnosticEvents", { flush: tn, clear: Q });
const B = (e) => {
  try {
    if (!Gt()) {
      Q();
      return;
    }
    const t = Qt();
    S.push(e), Yt();
  } catch {
  }
};
U.__docgenInfo = Object.assign({ displayName: U.name ?? U.__name }, { exportName: "toSentryDiagnosticCaptureContext", displayName: "toSentryDiagnosticCaptureContext", description: `Builds a Sentry capture context from a structured diagnostic event.
Maps severity, tags, counters, and safe event metadata into Sentry capture context.`, type: 2, props: [{ name: "name", global: false, description: `Project-controlled event name. Use dot-separated namespacing.
Must be a stable project-controlled string constant \u2014 not derived from user data.`, tags: [], required: true, type: "string", schema: "string", declarations: [] }, { name: "severity", global: false, description: "How severe the event is.", tags: [], required: true, type: "DiagnosticSeverity", schema: "DiagnosticSeverity", declarations: [] }, { name: "result", global: false, description: "Observed outcome at the emitting stage.", tags: [], required: true, type: "DiagnosticResult", schema: "DiagnosticResult", declarations: [] }, { name: "classification", global: false, description: "Safe classification of the root cause.", tags: [], required: true, type: "DiagnosticClassification", schema: "DiagnosticClassification", declarations: [] }, { name: "attemptId", global: false, description: "Optional attempt or request id \u2014 must be project-generated, never derived from user data.", tags: [], required: false, type: "string | undefined", schema: "string | undefined", declarations: [] }, { name: "counters", global: false, description: "Optional safe numeric counters.", tags: [], required: false, type: "DiagnosticCounters | undefined", schema: "DiagnosticCounters | undefined", declarations: [] }, { name: "safeTags", global: false, description: `Optional project-controlled primitive tags for additional safe context.
All keys and values must be project-controlled \u2014 no paths, ids, names, URLs, or user data.`, tags: [], required: false, type: "DiagnosticSafeTags | undefined", schema: "DiagnosticSafeTags | undefined", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/diagnostics/reportDiagnosticEvent.ts" });
B.__docgenInfo = Object.assign({ displayName: B.name ?? B.__name }, { exportName: "reportDiagnosticEvent", displayName: "reportDiagnosticEvent", description: `Reports a structured diagnostic event.

- Respects diagnostics consent/Sentry reporting state.
- Fire-and-forget: does not throw into product code.
- Uses Sentry as the transport backend; callers must not import Sentry directly.
- In the worker runtime, the worker's own Sentry instance delivers events directly.

Must only be called from service, repository-service, or service-client layers.
Do not call from VFS providers or low-level storage adapters.`, type: 2, props: [{ name: "name", global: false, description: `Project-controlled event name. Use dot-separated namespacing.
Must be a stable project-controlled string constant \u2014 not derived from user data.`, tags: [], required: true, type: "string", schema: "string", declarations: [] }, { name: "severity", global: false, description: "How severe the event is.", tags: [], required: true, type: "DiagnosticSeverity", schema: "DiagnosticSeverity", declarations: [] }, { name: "result", global: false, description: "Observed outcome at the emitting stage.", tags: [], required: true, type: "DiagnosticResult", schema: "DiagnosticResult", declarations: [] }, { name: "classification", global: false, description: "Safe classification of the root cause.", tags: [], required: true, type: "DiagnosticClassification", schema: "DiagnosticClassification", declarations: [] }, { name: "attemptId", global: false, description: "Optional attempt or request id \u2014 must be project-generated, never derived from user data.", tags: [], required: false, type: "string | undefined", schema: "string | undefined", declarations: [] }, { name: "counters", global: false, description: "Optional safe numeric counters.", tags: [], required: false, type: "DiagnosticCounters | undefined", schema: "DiagnosticCounters | undefined", declarations: [] }, { name: "safeTags", global: false, description: `Optional project-controlled primitive tags for additional safe context.
All keys and values must be project-controlled \u2014 no paths, ids, names, URLs, or user data.`, tags: [], required: false, type: "DiagnosticSafeTags | undefined", schema: "DiagnosticSafeTags | undefined", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/diagnostics/reportDiagnosticEvent.ts" });
const fe = [];
let K;
const pe = () => {
  fe.length = 0;
}, nn = async () => {
  if (fe.length !== 0) {
    pe();
    return;
  }
}, rn = () => (K ??= nn().catch(() => {
}).finally(() => {
  K = void 0;
}), K), sn = () => {
  rn();
};
A("diagnosticExceptions", { flush: sn, clear: pe });
const an = "settings", on = { diagnosticsEnabled: C(_(), false), diagnosticsConsentRequested: C(_(), false) }, H = C(gt({ ...on, diagnosticsErrorPromptDismissedVersion: x(it()), showPerformance: x(_()), showAutomergeFiles: x(_()), googleDriveIntegrationEnabled: x(_()), hideStarterWidget: x(_()), panesWidth: C(ut(re()), []), pwaInstallWidgetDismissedUntil: x(re()) }), { diagnosticsEnabled: false, diagnosticsConsentRequested: false, panesWidth: [] }), un = xe(() => {
  const e = H.parse(void 0), { data: t, isFinished: n } = Ee(an, e, { serializer: { read: (r) => H.safeParse(r).data ?? e, write: (r) => H.safeParse(r).data } });
  return { settings: t, isFinished: n };
});
export {
  un as u
};
