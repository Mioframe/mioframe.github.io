import { x as Q, Z as X, s as I, r as Y } from "./iframe-CDA31-IU.js";
import { w as ee, i as ne } from "./useStateLayer-B816PSQn.js";
function Z(e) {
  return new Promise((n, t) => {
    e.oncomplete = e.onsuccess = () => n(e.result), e.onabort = e.onerror = () => t(e.error);
  });
}
function te(e, n) {
  let t;
  const r = () => {
    if (t) return t;
    const s = indexedDB.open(e);
    return s.onupgradeneeded = () => s.result.createObjectStore(n), t = Z(s), t.then((u) => {
      u.onclose = () => t = void 0;
    }, () => {
    }), t;
  };
  return (s, u) => r().then((o) => u(o.transaction(n, s).objectStore(n)));
}
let D;
function E() {
  return D || (D = te("keyval-store", "keyval")), D;
}
function re(e, n = E()) {
  return n("readonly", (t) => Z(t.get(e)));
}
function oe(e, n, t = E()) {
  return t("readwrite", (r) => (r.put(n, e), Z(r.transaction)));
}
function se(e, n, t = E()) {
  return t("readwrite", (r) => new Promise((s, u) => {
    const o = r.get(e);
    o.onsuccess = function() {
      try {
        r.put(n(this.result), e), s(Z(r.transaction));
      } catch (i) {
        u(i);
      }
    }, o.onerror = () => u(o.error);
  }));
}
function ie(e, n = E()) {
  return n("readwrite", (t) => (t.delete(e), Z(t.transaction)));
}
function ue(e, n, t = {}) {
  const { flush: r = "pre", deep: s = true, shallow: u = false, onError: o = (p) => {
    console.error(p);
  }, writeDefaults: i = true, serializer: c = { read: (p) => p, write: (p) => p } } = t, a = I(false), l = (u ? I : Y)(n), d = Q(n);
  async function f() {
    try {
      const p = await re(e);
      p === void 0 ? d != null && i && await oe(e, c.write(d)) : l.value = c.read(p);
    } catch (p) {
      o(p);
    }
    a.value = true;
  }
  f();
  async function _() {
    try {
      if (l.value == null) await ie(e);
      else {
        const p = X(l.value), H = c.write(p);
        await se(e, () => H);
      }
    } catch (p) {
      o(p);
    }
  }
  const { pause: g, resume: $ } = ee(l, () => _(), { flush: r, deep: s });
  async function y(p) {
    g(), l.value = p, await _(), $();
  }
  return { set: y, isFinished: a, data: l };
}
var V;
function h(e, n, t) {
  function r(i, c) {
    if (i._zod || Object.defineProperty(i, "_zod", { value: { def: c, constr: o, traits: /* @__PURE__ */ new Set() }, enumerable: false }), i._zod.traits.has(e)) return;
    i._zod.traits.add(e), n(i, c);
    const a = o.prototype, l = Object.keys(a);
    for (let d = 0; d < l.length; d++) {
      const f = l[d];
      f in i || (i[f] = a[f].bind(i));
    }
  }
  const s = t?.Parent ?? Object;
  class u extends s {
  }
  Object.defineProperty(u, "name", { value: e });
  function o(i) {
    var c;
    const a = t?.Parent ? new u() : this;
    r(a, i), (c = a._zod).deferred ?? (c.deferred = []);
    for (const l of a._zod.deferred) l();
    return a;
  }
  return Object.defineProperty(o, "init", { value: r }), Object.defineProperty(o, Symbol.hasInstance, { value: (i) => t?.Parent && i instanceof t.Parent ? true : i?._zod?.traits?.has(e) }), Object.defineProperty(o, "name", { value: e }), o;
}
class P extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
(V = globalThis).__zod_globalConfig ?? (V.__zod_globalConfig = {});
const ce = globalThis.__zod_globalConfig;
function T(e) {
  return ce;
}
function ae(e, n) {
  return typeof n == "bigint" ? n.toString() : n;
}
function le(e) {
  return { get value() {
    {
      const n = e();
      return Object.defineProperty(this, "value", { value: n }), n;
    }
  } };
}
function fe(e) {
  const n = e.startsWith("^") ? 1 : 0, t = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(n, t);
}
const B = /* @__PURE__ */ Symbol("evaluating");
function w(e, n, t) {
  let r;
  Object.defineProperty(e, n, { get() {
    if (r !== B) return r === void 0 && (r = B, r = t()), r;
  }, set(s) {
    Object.defineProperty(e, n, { value: s });
  }, configurable: true });
}
const K = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function C(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function de(e) {
  if (C(e) === false) return false;
  const n = e.constructor;
  if (n === void 0 || typeof n != "function") return true;
  const t = n.prototype;
  return !(C(t) === false || Object.prototype.hasOwnProperty.call(t, "isPrototypeOf") === false);
}
function pe(e) {
  return de(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
function he(e, n, t) {
  const r = new e._zod.constr(n ?? e._zod.def);
  return (!n || t?.parent) && (r._zod.parent = e), r;
}
function O(e) {
  return {};
}
function _e(e) {
  return Object.keys(e).filter((n) => e[n]._zod.optin === "optional" && e[n]._zod.optout === "optional");
}
function S(e, n = 0) {
  if (e.aborted === true) return true;
  for (let t = n; t < e.issues.length; t++) if (e.issues[t]?.continue !== true) return true;
  return false;
}
function ge(e, n = 0) {
  if (e.aborted === true) return true;
  for (let t = n; t < e.issues.length; t++) if (e.issues[t]?.continue === false) return true;
  return false;
}
function U(e, n) {
  return n.map((t) => {
    var r;
    return (r = t).path ?? (r.path = []), t.path.unshift(e), t;
  });
}
function k(e) {
  return typeof e == "string" ? e : e?.message;
}
function M(e, n, t) {
  const r = e.message ? e.message : k(e.inst?._zod.def?.error?.(e)) ?? k(n?.error?.(e)) ?? k(t.customError?.(e)) ?? k(t.localeError?.(e)) ?? "Invalid input", { inst: s, continue: u, input: o, ...i } = e;
  return i.path ?? (i.path = []), i.message = r, n?.reportInput && (i.input = o), i;
}
const x = (e, n) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", { value: e._zod, enumerable: false }), Object.defineProperty(e, "issues", { value: n, enumerable: false }), e.message = JSON.stringify(n, ae, 2), Object.defineProperty(e, "toString", { value: () => e.message, enumerable: false });
}, ze = h("$ZodError", x), R = h("$ZodError", x, { Parent: Error }), ve = (e) => (n, t, r, s) => {
  const u = r ? { ...r, async: false } : { async: false }, o = n._zod.run({ value: t, issues: [] }, u);
  if (o instanceof Promise) throw new P();
  if (o.issues.length) {
    const i = new (s?.Err ?? e)(o.issues.map((c) => M(c, u, T())));
    throw K(i, s?.callee), i;
  }
  return o.value;
}, be = ve(R), me = (e) => async (n, t, r, s) => {
  const u = r ? { ...r, async: true } : { async: true };
  let o = n._zod.run({ value: t, issues: [] }, u);
  if (o instanceof Promise && (o = await o), o.issues.length) {
    const i = new (s?.Err ?? e)(o.issues.map((c) => M(c, u, T())));
    throw K(i, s?.callee), i;
  }
  return o.value;
}, we = me(R), ye = (e) => (n, t, r) => {
  const s = r ? { ...r, async: false } : { async: false }, u = n._zod.run({ value: t, issues: [] }, s);
  if (u instanceof Promise) throw new P();
  return u.issues.length ? { success: false, error: new (e ?? ze)(u.issues.map((o) => M(o, s, T()))) } : { success: true, data: u.value };
}, J = ye(R), Pe = (e) => async (n, t, r) => {
  const s = r ? { ...r, async: true } : { async: true };
  let u = n._zod.run({ value: t, issues: [] }, s);
  return u instanceof Promise && (u = await u), u.issues.length ? { success: false, error: new e(u.issues.map((o) => M(o, s, T()))) } : { success: true, data: u.value };
}, q = Pe(R), Ze = (e) => {
  const n = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${n}$`);
}, Oe = /^-?\d+(?:\.\d+)?$/, $e = /^(?:true|false)$/i, Se = { major: 4, minor: 4, patch: 3 }, z = h("$ZodType", (e, n) => {
  var t;
  e ?? (e = {}), e._zod.def = n, e._zod.bag = e._zod.bag || {}, e._zod.version = Se;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const s of r) for (const u of s._zod.onattach) u(e);
  if (r.length === 0) (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred?.push(() => {
    e._zod.run = e._zod.parse;
  });
  else {
    const s = (o, i, c) => {
      let a = S(o), l;
      for (const d of i) {
        if (d._zod.def.when) {
          if (ge(o) || !d._zod.def.when(o)) continue;
        } else if (a) continue;
        const f = o.issues.length, _ = d._zod.check(o);
        if (_ instanceof Promise && c?.async === false) throw new P();
        if (l || _ instanceof Promise) l = (l ?? Promise.resolve()).then(async () => {
          await _, o.issues.length !== f && (a || (a = S(o, f)));
        });
        else {
          if (o.issues.length === f) continue;
          a || (a = S(o, f));
        }
      }
      return l ? l.then(() => o) : o;
    }, u = (o, i, c) => {
      if (S(o)) return o.aborted = true, o;
      const a = s(i, r, c);
      if (a instanceof Promise) {
        if (c.async === false) throw new P();
        return a.then((l) => e._zod.parse(l, c));
      }
      return e._zod.parse(a, c);
    };
    e._zod.run = (o, i) => {
      if (i.skipChecks) return e._zod.parse(o, i);
      if (i.direction === "backward") {
        const a = e._zod.parse({ value: o.value, issues: [] }, { ...i, skipChecks: true });
        return a instanceof Promise ? a.then((l) => u(l, o, i)) : u(a, o, i);
      }
      const c = e._zod.parse(o, i);
      if (c instanceof Promise) {
        if (i.async === false) throw new P();
        return c.then((a) => s(a, r, i));
      }
      return s(c, r, i);
    };
  }
  w(e, "~standard", () => ({ validate: (s) => {
    try {
      const u = J(e, s);
      return u.success ? { value: u.data } : { issues: u.error?.issues };
    } catch {
      return q(e, s).then((o) => o.success ? { value: o.data } : { issues: o.error?.issues });
    }
  }, vendor: "zod", version: 1 }));
}), ke = h("$ZodString", (e, n) => {
  z.init(e, n), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Ze(e._zod.bag), e._zod.parse = (t, r) => {
    if (n.coerce) try {
      t.value = String(t.value);
    } catch {
    }
    return typeof t.value == "string" || t.issues.push({ expected: "string", code: "invalid_type", input: t.value, inst: e }), t;
  };
}), je = h("$ZodNumber", (e, n) => {
  z.init(e, n), e._zod.pattern = e._zod.bag.pattern ?? Oe, e._zod.parse = (t, r) => {
    if (n.coerce) try {
      t.value = Number(t.value);
    } catch {
    }
    const s = t.value;
    if (typeof s == "number" && !Number.isNaN(s) && Number.isFinite(s)) return t;
    const u = typeof s == "number" ? Number.isNaN(s) ? "NaN" : Number.isFinite(s) ? void 0 : "Infinity" : void 0;
    return t.issues.push({ expected: "number", code: "invalid_type", input: s, inst: e, ...u ? { received: u } : {} }), t;
  };
}), Ae = h("$ZodBoolean", (e, n) => {
  z.init(e, n), e._zod.pattern = $e, e._zod.parse = (t, r) => {
    if (n.coerce) try {
      t.value = !!t.value;
    } catch {
    }
    const s = t.value;
    return typeof s == "boolean" || t.issues.push({ expected: "boolean", code: "invalid_type", input: s, inst: e }), t;
  };
});
function L(e, n, t) {
  e.issues.length && n.issues.push(...U(t, e.issues)), n.value[t] = e.value;
}
const Ee = h("$ZodArray", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => {
    const s = t.value;
    if (!Array.isArray(s)) return t.issues.push({ expected: "array", code: "invalid_type", input: s, inst: e }), t;
    t.value = Array(s.length);
    const u = [];
    for (let o = 0; o < s.length; o++) {
      const i = s[o], c = n.element._zod.run({ value: i, issues: [] }, r);
      c instanceof Promise ? u.push(c.then((a) => L(a, t, o))) : L(c, t, o);
    }
    return u.length ? Promise.all(u).then(() => t) : t;
  };
});
function A(e, n, t, r, s, u) {
  const o = t in r;
  if (e.issues.length) {
    if (s && u && !o) return;
    n.issues.push(...U(t, e.issues));
  }
  if (!o && !s) {
    e.issues.length || n.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [t] });
    return;
  }
  e.value === void 0 ? o && (n.value[t] = void 0) : n.value[t] = e.value;
}
function Te(e) {
  const n = Object.keys(e.shape);
  for (const r of n) if (!e.shape?.[r]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const t = _e(e.shape);
  return { ...e, keys: n, keySet: new Set(n), numKeys: n.length, optionalKeys: new Set(t) };
}
function Me(e, n, t, r, s, u) {
  const o = [], i = s.keySet, c = s.catchall._zod, a = c.def.type, l = c.optin === "optional", d = c.optout === "optional";
  for (const f in n) {
    if (f === "__proto__" || i.has(f)) continue;
    if (a === "never") {
      o.push(f);
      continue;
    }
    const _ = c.run({ value: n[f], issues: [] }, r);
    _ instanceof Promise ? e.push(_.then((g) => A(g, t, f, n, l, d))) : A(_, t, f, n, l, d);
  }
  return o.length && t.issues.push({ code: "unrecognized_keys", keys: o, input: n, inst: u }), e.length ? Promise.all(e).then(() => t) : t;
}
const Re = h("$ZodObject", (e, n) => {
  if (z.init(e, n), !Object.getOwnPropertyDescriptor(n, "shape")?.get) {
    const i = n.shape;
    Object.defineProperty(n, "shape", { get: () => {
      const c = { ...i };
      return Object.defineProperty(n, "shape", { value: c }), c;
    } });
  }
  const r = le(() => Te(n));
  w(e._zod, "propValues", () => {
    const i = n.shape, c = {};
    for (const a in i) {
      const l = i[a]._zod;
      if (l.values) {
        c[a] ?? (c[a] = /* @__PURE__ */ new Set());
        for (const d of l.values) c[a].add(d);
      }
    }
    return c;
  });
  const s = C, u = n.catchall;
  let o;
  e._zod.parse = (i, c) => {
    o ?? (o = r.value);
    const a = i.value;
    if (!s(a)) return i.issues.push({ expected: "object", code: "invalid_type", input: a, inst: e }), i;
    i.value = {};
    const l = [], d = o.shape;
    for (const f of o.keys) {
      const _ = d[f], g = _._zod.optin === "optional", $ = _._zod.optout === "optional", y = _._zod.run({ value: a[f], issues: [] }, c);
      y instanceof Promise ? l.push(y.then((p) => A(p, i, f, a, g, $))) : A(y, i, f, a, g, $);
    }
    return u ? Me(l, a, i, c, r.value, e) : l.length ? Promise.all(l).then(() => i) : i;
  };
});
function W(e, n) {
  return n === void 0 && (e.issues.length || e.fallback) ? { issues: [], value: void 0 } : e;
}
const De = h("$ZodOptional", (e, n) => {
  z.init(e, n), e._zod.optin = "optional", e._zod.optout = "optional", w(e._zod, "values", () => n.innerType._zod.values ? /* @__PURE__ */ new Set([...n.innerType._zod.values, void 0]) : void 0), w(e._zod, "pattern", () => {
    const t = n.innerType._zod.pattern;
    return t ? new RegExp(`^(${fe(t.source)})?$`) : void 0;
  }), e._zod.parse = (t, r) => {
    if (n.innerType._zod.optin === "optional") {
      const s = t.value, u = n.innerType._zod.run(t, r);
      return u instanceof Promise ? u.then((o) => W(o, s)) : W(u, s);
    }
    return t.value === void 0 ? t : n.innerType._zod.run(t, r);
  };
}), Ne = h("$ZodDefault", (e, n) => {
  z.init(e, n), e._zod.optin = "optional", w(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (t, r) => {
    if (r.direction === "backward") return n.innerType._zod.run(t, r);
    if (t.value === void 0) return t.value = n.defaultValue, t;
    const s = n.innerType._zod.run(t, r);
    return s instanceof Promise ? s.then((u) => F(u, n)) : F(s, n);
  };
});
function F(e, n) {
  return e.value === void 0 && (e.value = n.defaultValue), e;
}
function Ce(e, n) {
  return new e({ type: "string", ...O() });
}
function Ie(e, n) {
  return new e({ type: "number", checks: [], ...O() });
}
function Ve(e, n) {
  return new e({ type: "boolean", ...O() });
}
const v = h("ZodMiniType", (e, n) => {
  if (!e._zod) throw new Error("Uninitialized schema in ZodMiniType.");
  z.init(e, n), e.def = n, e.type = n.type, e.parse = (t, r) => be(e, t, r, { callee: e.parse }), e.safeParse = (t, r) => J(e, t, r), e.parseAsync = async (t, r) => we(e, t, r, { callee: e.parseAsync }), e.safeParseAsync = async (t, r) => q(e, t, r), e.check = (...t) => e.clone({ ...n, checks: [...n.checks ?? [], ...t.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)] }, { parent: true }), e.with = e.check, e.clone = (t, r) => he(e, t, r), e.brand = () => e, e.register = ((t, r) => (t.add(e, r), e)), e.apply = (t) => t(e);
}), Be = h("ZodMiniString", (e, n) => {
  ke.init(e, n), v.init(e, n);
});
function Le(e) {
  return Ce(Be);
}
const We = h("ZodMiniNumber", (e, n) => {
  je.init(e, n), v.init(e, n);
});
function G(e) {
  return Ie(We);
}
const Fe = h("ZodMiniBoolean", (e, n) => {
  Ae.init(e, n), v.init(e, n);
});
function b(e) {
  return Ve(Fe);
}
const Ge = h("ZodMiniArray", (e, n) => {
  Ee.init(e, n), v.init(e, n);
});
function Ke(e, n) {
  return new Ge({ type: "array", element: e, ...O() });
}
const Ue = h("ZodMiniObject", (e, n) => {
  Re.init(e, n), v.init(e, n), w(e, "shape", () => n.shape);
});
function xe(e, n) {
  const t = { type: "object", shape: e ?? {}, ...O() };
  return new Ue(t);
}
const Je = h("ZodMiniOptional", (e, n) => {
  De.init(e, n), v.init(e, n);
});
function m(e) {
  return new Je({ type: "optional", innerType: e });
}
const qe = h("ZodMiniDefault", (e, n) => {
  Ne.init(e, n), v.init(e, n);
});
function j(e, n) {
  return new qe({ type: "default", innerType: e, get defaultValue() {
    return typeof n == "function" ? n() : pe(n);
  } });
}
const N = j(xe({ diagnosticsEnabled: j(b(), false), diagnosticsConsentRequested: j(b(), false), diagnosticsErrorPromptDismissedVersion: m(Le()), showPerformance: m(b()), showAutomergeFiles: m(b()), googleDriveIntegrationEnabled: m(b()), hideStarterWidget: m(b()), panesWidth: j(Ke(G()), []), pwaInstallWidgetDismissedUntil: m(G()) }), { diagnosticsEnabled: false, diagnosticsConsentRequested: false, panesWidth: [] }), Xe = ne(() => {
  const e = N.parse(void 0), { data: n, isFinished: t } = ue("settings", e, { serializer: { read: (r) => N.safeParse(r).data ?? e, write: (r) => N.safeParse(r).data } });
  return { settings: n, isFinished: t };
});
export {
  Xe as u
};
