import { y as Q, a1 as ee, s as S, r as ne, l as te, b as R } from "./iframe-BLPmToDj.js";
import { w as re, i as U, t as oe } from "./index-BOR_SvLg.js";
function O(e) {
  return new Promise((n, t) => {
    e.oncomplete = e.onsuccess = () => n(e.result), e.onabort = e.onerror = () => t(e.error);
  });
}
function se(e, n) {
  let t;
  const o = () => {
    if (t) return t;
    const s = indexedDB.open(e);
    return s.onupgradeneeded = () => s.result.createObjectStore(n), t = O(s), t.then((u) => {
      u.onclose = () => t = void 0;
    }, () => {
      t = void 0;
    }), t;
  };
  return (s, u) => o().then((r) => u(r.transaction(n, s).objectStore(n)));
}
let C;
function T() {
  return C || (C = se("keyval-store", "keyval")), C;
}
function ie(e, n = T()) {
  return n("readonly", (t) => O(t.get(e)));
}
function ue(e, n, t = T()) {
  return t("readwrite", (o) => (o.put(n, e), O(o.transaction)));
}
function ae(e, n, t = T()) {
  return t("readwrite", (o) => new Promise((s, u) => {
    const r = o.get(e);
    r.onsuccess = function() {
      try {
        o.put(n(r.result), e), s(O(o.transaction));
      } catch (i) {
        u(i);
      }
    }, r.onerror = () => u(r.error);
  }));
}
function ce(e, n = T()) {
  return n("readwrite", (t) => (t.delete(e), O(t.transaction)));
}
function le(e, n, t = {}) {
  const { flush: o = "pre", deep: s = true, shallow: u = false, onError: r = (h) => {
    console.error(h);
  }, writeDefaults: i = true, serializer: a = { read: (h) => h, write: (h) => h } } = t, c = S(false), f = (u ? S : ne)(n), d = Q(n);
  async function l() {
    try {
      const h = await ie(e);
      h === void 0 ? d != null && i && await ue(e, a.write(d)) : f.value = a.read(h);
    } catch (h) {
      r(h);
    }
    c.value = true;
  }
  l();
  async function p() {
    try {
      if (f.value == null) await ce(e);
      else {
        const h = ee(f.value), q = a.write(h);
        await ae(e, () => q);
      }
    } catch (h) {
      r(h);
    }
  }
  const { pause: _, resume: Z } = re(f, () => p(), { flush: o, deep: s });
  async function y(h) {
    _(), f.value = h, await p(), Z();
  }
  return { set: y, isFinished: c, data: f };
}
var V;
function m(e, n, t) {
  function o(i, a) {
    if (i._zod || Object.defineProperty(i, "_zod", { value: { def: a, constr: r, traits: /* @__PURE__ */ new Set() }, enumerable: false }), i._zod.traits.has(e)) return;
    i._zod.traits.add(e), n(i, a);
    const c = r.prototype, f = Object.keys(c);
    for (let d = 0; d < f.length; d++) {
      const l = f[d];
      l in i || (i[l] = c[l].bind(i));
    }
  }
  const s = t?.Parent ?? Object;
  class u extends s {
  }
  Object.defineProperty(u, "name", { value: e });
  function r(i) {
    var a;
    const c = t?.Parent ? new u() : this;
    o(c, i), (a = c._zod).deferred ?? (a.deferred = []);
    for (const f of c._zod.deferred) f();
    return c;
  }
  return Object.defineProperty(r, "init", { value: o }), Object.defineProperty(r, Symbol.hasInstance, { value: (i) => t?.Parent && i instanceof t.Parent ? true : i?._zod?.traits?.has(e) }), Object.defineProperty(r, "name", { value: e }), r;
}
class P extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
(V = globalThis).__zod_globalConfig ?? (V.__zod_globalConfig = {});
const fe = globalThis.__zod_globalConfig;
function D(e) {
  return fe;
}
function de(e, n) {
  return typeof n == "bigint" ? n.toString() : n;
}
function pe(e) {
  return { get value() {
    {
      const n = e();
      return Object.defineProperty(this, "value", { value: n }), n;
    }
  } };
}
function he(e) {
  const n = e.startsWith("^") ? 1 : 0, t = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(n, t);
}
const F = /* @__PURE__ */ Symbol("evaluating");
function z(e, n, t) {
  let o;
  Object.defineProperty(e, n, { get() {
    if (o !== F) return o === void 0 && (o = F, o = t()), o;
  }, set(s) {
    Object.defineProperty(e, n, { value: s });
  }, configurable: true });
}
const K = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function W(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function me(e) {
  if (W(e) === false) return false;
  const n = e.constructor;
  if (n === void 0 || typeof n != "function") return true;
  const t = n.prototype;
  return !(W(t) === false || Object.prototype.hasOwnProperty.call(t, "isPrototypeOf") === false);
}
function _e(e) {
  return me(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
function ge(e, n, t) {
  const o = new e._zod.constr(n ?? e._zod.def);
  return (!n || t?.parent) && (o._zod.parent = e), o;
}
function k(e) {
  return {};
}
function ve(e) {
  return Object.keys(e).filter((n) => e[n]._zod.optin === "optional" && e[n]._zod.optout === "optional");
}
function $(e, n = 0) {
  if (e.aborted === true) return true;
  for (let t = n; t < e.issues.length; t++) if (e.issues[t]?.continue !== true) return true;
  return false;
}
function we(e, n = 0) {
  if (e.aborted === true) return true;
  for (let t = n; t < e.issues.length; t++) if (e.issues[t]?.continue === false) return true;
  return false;
}
function H(e, n) {
  return n.map((t) => {
    var o;
    return (o = t).path ?? (o.path = []), t.path.unshift(e), t;
  });
}
function E(e) {
  return typeof e == "string" ? e : e?.message;
}
function A(e, n, t) {
  const o = e.message ? e.message : E(e.inst?._zod.def?.error?.(e)) ?? E(n?.error?.(e)) ?? E(t.customError?.(e)) ?? E(t.localeError?.(e)) ?? "Invalid input", { inst: s, continue: u, input: r, ...i } = e;
  return i.path ?? (i.path = []), i.message = o, n?.reportInput && (i.input = r), i;
}
const Y = (e, n) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", { value: e._zod, enumerable: false }), Object.defineProperty(e, "issues", { value: n, enumerable: false }), e.message = JSON.stringify(n, de, 2), Object.defineProperty(e, "toString", { value: () => e.message, enumerable: false });
}, be = m("$ZodError", Y), M = m("$ZodError", Y, { Parent: Error }), ze = (e) => (n, t, o, s) => {
  const u = o ? { ...o, async: false } : { async: false }, r = n._zod.run({ value: t, issues: [] }, u);
  if (r instanceof Promise) throw new P();
  if (r.issues.length) {
    const i = new (s?.Err ?? e)(r.issues.map((a) => A(a, u, D())));
    throw K(i, s?.callee), i;
  }
  return r.value;
}, ye = ze(M), Pe = (e) => async (n, t, o, s) => {
  const u = o ? { ...o, async: true } : { async: true };
  let r = n._zod.run({ value: t, issues: [] }, u);
  if (r instanceof Promise && (r = await r), r.issues.length) {
    const i = new (s?.Err ?? e)(r.issues.map((a) => A(a, u, D())));
    throw K(i, s?.callee), i;
  }
  return r.value;
}, Se = Pe(M), Oe = (e) => (n, t, o) => {
  const s = o ? { ...o, async: false } : { async: false }, u = n._zod.run({ value: t, issues: [] }, s);
  if (u instanceof Promise) throw new P();
  return u.issues.length ? { success: false, error: new (e ?? be)(u.issues.map((r) => A(r, s, D()))) } : { success: true, data: u.value };
}, J = Oe(M), ke = (e) => async (n, t, o) => {
  const s = o ? { ...o, async: true } : { async: true };
  let u = n._zod.run({ value: t, issues: [] }, s);
  return u instanceof Promise && (u = await u), u.issues.length ? { success: false, error: new e(u.issues.map((r) => A(r, s, D()))) } : { success: true, data: u.value };
}, X = ke(M), Ze = (e) => {
  const n = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${n}$`);
}, $e = /^-?\d+(?:\.\d+)?$/, Ee = /^(?:true|false)$/i, je = { major: 4, minor: 4, patch: 3 }, g = m("$ZodType", (e, n) => {
  var t;
  e ?? (e = {}), e._zod.def = n, e._zod.bag = e._zod.bag || {}, e._zod.version = je;
  const o = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && o.unshift(e);
  for (const s of o) for (const u of s._zod.onattach) u(e);
  if (o.length === 0) (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred?.push(() => {
    e._zod.run = e._zod.parse;
  });
  else {
    const s = (r, i, a) => {
      let c = $(r), f;
      for (const d of i) {
        if (d._zod.def.when) {
          if (we(r) || !d._zod.def.when(r)) continue;
        } else if (c) continue;
        const l = r.issues.length, p = d._zod.check(r);
        if (p instanceof Promise && a?.async === false) throw new P();
        if (f || p instanceof Promise) f = (f ?? Promise.resolve()).then(async () => {
          await p, r.issues.length !== l && (c || (c = $(r, l)));
        });
        else {
          if (r.issues.length === l) continue;
          c || (c = $(r, l));
        }
      }
      return f ? f.then(() => r) : r;
    }, u = (r, i, a) => {
      if ($(r)) return r.aborted = true, r;
      const c = s(i, o, a);
      if (c instanceof Promise) {
        if (a.async === false) throw new P();
        return c.then((f) => e._zod.parse(f, a));
      }
      return e._zod.parse(c, a);
    };
    e._zod.run = (r, i) => {
      if (i.skipChecks) return e._zod.parse(r, i);
      if (i.direction === "backward") {
        const c = e._zod.parse({ value: r.value, issues: [] }, { ...i, skipChecks: true });
        return c instanceof Promise ? c.then((f) => u(f, r, i)) : u(c, r, i);
      }
      const a = e._zod.parse(r, i);
      if (a instanceof Promise) {
        if (i.async === false) throw new P();
        return a.then((c) => s(c, o, i));
      }
      return s(a, o, i);
    };
  }
  z(e, "~standard", () => ({ validate: (s) => {
    try {
      const u = J(e, s);
      return u.success ? { value: u.data } : { issues: u.error?.issues };
    } catch {
      return X(e, s).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
    }
  }, vendor: "zod", version: 1 }));
}), Ie = m("$ZodString", (e, n) => {
  g.init(e, n), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Ze(e._zod.bag), e._zod.parse = (t, o) => {
    if (n.coerce) try {
      t.value = String(t.value);
    } catch {
    }
    return typeof t.value == "string" || t.issues.push({ expected: "string", code: "invalid_type", input: t.value, inst: e }), t;
  };
}), Te = m("$ZodNumber", (e, n) => {
  g.init(e, n), e._zod.pattern = e._zod.bag.pattern ?? $e, e._zod.parse = (t, o) => {
    if (n.coerce) try {
      t.value = Number(t.value);
    } catch {
    }
    const s = t.value;
    if (typeof s == "number" && !Number.isNaN(s) && Number.isFinite(s)) return t;
    const u = typeof s == "number" ? Number.isNaN(s) ? "NaN" : Number.isFinite(s) ? void 0 : "Infinity" : void 0;
    return t.issues.push({ expected: "number", code: "invalid_type", input: s, inst: e, ...u ? { received: u } : {} }), t;
  };
}), De = m("$ZodBoolean", (e, n) => {
  g.init(e, n), e._zod.pattern = Ee, e._zod.parse = (t, o) => {
    if (n.coerce) try {
      t.value = !!t.value;
    } catch {
    }
    const s = t.value;
    return typeof s == "boolean" || t.issues.push({ expected: "boolean", code: "invalid_type", input: s, inst: e }), t;
  };
});
function B(e, n, t) {
  e.issues.length && n.issues.push(...H(t, e.issues)), n.value[t] = e.value;
}
const Ae = m("$ZodArray", (e, n) => {
  g.init(e, n), e._zod.parse = (t, o) => {
    const s = t.value;
    if (!Array.isArray(s)) return t.issues.push({ expected: "array", code: "invalid_type", input: s, inst: e }), t;
    t.value = Array(s.length);
    const u = [];
    for (let r = 0; r < s.length; r++) {
      const i = s[r], a = n.element._zod.run({ value: i, issues: [] }, o);
      a instanceof Promise ? u.push(a.then((c) => B(c, t, r))) : B(a, t, r);
    }
    return u.length ? Promise.all(u).then(() => t) : t;
  };
});
function I(e, n, t, o, s, u) {
  const r = t in o;
  if (e.issues.length) {
    if (s && u && !r) return;
    n.issues.push(...H(t, e.issues));
  }
  if (!r && !s) {
    e.issues.length || n.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [t] });
    return;
  }
  e.value === void 0 ? r && (n.value[t] = void 0) : n.value[t] = e.value;
}
function Me(e) {
  const n = Object.keys(e.shape);
  for (const o of n) if (!e.shape?.[o]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
  const t = ve(e.shape);
  return { ...e, keys: n, keySet: new Set(n), numKeys: n.length, optionalKeys: new Set(t) };
}
function Re(e, n, t, o, s, u) {
  const r = [], i = s.keySet, a = s.catchall._zod, c = a.def.type, f = a.optin === "optional", d = a.optout === "optional";
  for (const l in n) {
    if (l === "__proto__" || i.has(l)) continue;
    if (c === "never") {
      r.push(l);
      continue;
    }
    const p = a.run({ value: n[l], issues: [] }, o);
    p instanceof Promise ? e.push(p.then((_) => I(_, t, l, n, f, d))) : I(p, t, l, n, f, d);
  }
  return r.length && t.issues.push({ code: "unrecognized_keys", keys: r, input: n, inst: u }), e.length ? Promise.all(e).then(() => t) : t;
}
const Ce = m("$ZodObject", (e, n) => {
  if (g.init(e, n), !Object.getOwnPropertyDescriptor(n, "shape")?.get) {
    const i = n.shape;
    Object.defineProperty(n, "shape", { get: () => {
      const a = { ...i };
      return Object.defineProperty(n, "shape", { value: a }), a;
    } });
  }
  const o = pe(() => Me(n));
  z(e._zod, "propValues", () => {
    const i = n.shape, a = {};
    for (const c in i) {
      const f = i[c]._zod;
      if (f.values) {
        a[c] ?? (a[c] = /* @__PURE__ */ new Set());
        for (const d of f.values) a[c].add(d);
      }
    }
    return a;
  });
  const s = W, u = n.catchall;
  let r;
  e._zod.parse = (i, a) => {
    r ?? (r = o.value);
    const c = i.value;
    if (!s(c)) return i.issues.push({ expected: "object", code: "invalid_type", input: c, inst: e }), i;
    i.value = {};
    const f = [], d = r.shape;
    for (const l of r.keys) {
      const p = d[l], _ = p._zod.optin === "optional", Z = p._zod.optout === "optional", y = p._zod.run({ value: c[l], issues: [] }, a);
      y instanceof Promise ? f.push(y.then((h) => I(h, i, l, c, _, Z))) : I(y, i, l, c, _, Z);
    }
    return u ? Re(f, c, i, a, o.value, e) : f.length ? Promise.all(f).then(() => i) : i;
  };
});
function G(e, n) {
  return n === void 0 && (e.issues.length || e.fallback) ? { issues: [], value: void 0 } : e;
}
const Ne = m("$ZodOptional", (e, n) => {
  g.init(e, n), e._zod.optin = "optional", e._zod.optout = "optional", z(e._zod, "values", () => n.innerType._zod.values ? /* @__PURE__ */ new Set([...n.innerType._zod.values, void 0]) : void 0), z(e._zod, "pattern", () => {
    const t = n.innerType._zod.pattern;
    return t ? new RegExp(`^(${he(t.source)})?$`) : void 0;
  }), e._zod.parse = (t, o) => {
    if (n.innerType._zod.optin === "optional") {
      const s = t.value, u = n.innerType._zod.run(t, o);
      return u instanceof Promise ? u.then((r) => G(r, s)) : G(u, s);
    }
    return t.value === void 0 ? t : n.innerType._zod.run(t, o);
  };
}), We = m("$ZodDefault", (e, n) => {
  g.init(e, n), e._zod.optin = "optional", z(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (t, o) => {
    if (o.direction === "backward") return n.innerType._zod.run(t, o);
    if (t.value === void 0) return t.value = n.defaultValue, t;
    const s = n.innerType._zod.run(t, o);
    return s instanceof Promise ? s.then((u) => L(u, n)) : L(s, n);
  };
});
function L(e, n) {
  return e.value === void 0 && (e.value = n.defaultValue), e;
}
function Ue(e, n) {
  return new e({ type: "string", ...k() });
}
function Ve(e, n) {
  return new e({ type: "number", checks: [], ...k() });
}
function Fe(e, n) {
  return new e({ type: "boolean", ...k() });
}
const v = m("ZodMiniType", (e, n) => {
  if (!e._zod) throw new Error("Uninitialized schema in ZodMiniType.");
  g.init(e, n), e.def = n, e.type = n.type, e.parse = (t, o) => ye(e, t, o, { callee: e.parse }), e.safeParse = (t, o) => J(e, t, o), e.parseAsync = async (t, o) => Se(e, t, o, { callee: e.parseAsync }), e.safeParseAsync = async (t, o) => X(e, t, o), e.check = (...t) => e.clone({ ...n, checks: [...n.checks ?? [], ...t.map((o) => typeof o == "function" ? { _zod: { check: o, def: { check: "custom" }, onattach: [] } } : o)] }, { parent: true }), e.with = e.check, e.clone = (t, o) => ge(e, t, o), e.brand = () => e, e.register = ((t, o) => (t.add(e, o), e)), e.apply = (t) => t(e);
}), Be = m("ZodMiniString", (e, n) => {
  Ie.init(e, n), v.init(e, n);
});
function Ge(e) {
  return Ue(Be);
}
const Le = m("ZodMiniNumber", (e, n) => {
  Te.init(e, n), v.init(e, n);
});
function x(e) {
  return Ve(Le);
}
const xe = m("ZodMiniBoolean", (e, n) => {
  De.init(e, n), v.init(e, n);
});
function w(e) {
  return Fe(xe);
}
const Ke = m("ZodMiniArray", (e, n) => {
  Ae.init(e, n), v.init(e, n);
});
function He(e, n) {
  return new Ke({ type: "array", element: e, ...k() });
}
const Ye = m("ZodMiniObject", (e, n) => {
  Ce.init(e, n), v.init(e, n), z(e, "shape", () => n.shape);
});
function Je(e, n) {
  const t = { type: "object", shape: e ?? {}, ...k() };
  return new Ye(t);
}
const Xe = m("ZodMiniOptional", (e, n) => {
  Ne.init(e, n), v.init(e, n);
});
function b(e) {
  return new Xe({ type: "optional", innerType: e });
}
const qe = m("ZodMiniDefault", (e, n) => {
  We.init(e, n), v.init(e, n);
});
function j(e, n) {
  return new qe({ type: "default", innerType: e, get defaultValue() {
    return typeof n == "function" ? n() : _e(n);
  } });
}
const N = j(Je({ diagnosticsEnabled: j(w(), false), diagnosticsConsentRequested: j(w(), false), diagnosticsErrorPromptDismissedVersion: b(Ge()), showPerformance: b(w()), showAutomergeFiles: b(w()), googleDriveIntegrationEnabled: b(w()), hideStarterWidget: b(w()), panesWidth: j(He(x()), []), pwaInstallWidgetDismissedUntil: b(x()) }), { diagnosticsEnabled: false, diagnosticsConsentRequested: false, panesWidth: [] }), Qe = U(() => {
  const e = N.parse(void 0), { data: n, isFinished: t } = le("settings", e, { serializer: { read: (o) => N.safeParse(o).data ?? e, write: (o) => N.safeParse(o).data } });
  return { settings: n, isFinished: t };
}), en = (e) => /iPhone|iPad|iPod/.test(e) && /WebKit/.test(e) && !/CriOS|FxiOS/.test(e) ? "safari-ios" : /Chrome\//.test(e) && !/Chromium\/|Edg\/|OPR\//.test(e) ? /Android/.test(e) ? "chrome-android" : "chrome-desktop" : "unknown", nn = { "safari-ios": "https://support.apple.com/guide/iphone/bookmark-favorite-webpages-iph42ab2f3a7/ios", "chrome-android": "https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid", "chrome-desktop": "https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop", unknown: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Installing" }, tn = (e) => nn[e], rn = () => window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true, on = U(() => {
  const e = S(null), n = S(rn());
  return { retainedPrompt: e, isInstalledForSession: n };
}), sn = 720 * 60 * 60 * 1e3, un = 2 ** 31 - 1, ln = U(() => {
  const { retainedPrompt: e, isInstalledForSession: n } = on(), { settings: t, isFinished: o } = Qe(), s = R(() => e.value !== null), u = S(Date.now());
  let r = null;
  const i = (l) => {
    const p = l - Date.now();
    if (p <= 0) {
      u.value = Date.now();
      return;
    }
    r = setTimeout(() => {
      u.value = Date.now(), r = null, i(l);
    }, Math.min(p, un));
  };
  te(() => t.value.pwaInstallWidgetDismissedUntil, (l) => {
    r !== null && (clearTimeout(r), r = null), l !== void 0 && i(l);
  }, { immediate: true }), oe(() => {
    r !== null && (clearTimeout(r), r = null);
  });
  const a = R(() => {
    if (!o.value || n.value) return false;
    const l = t.value.pwaInstallWidgetDismissedUntil;
    return !(l !== void 0 && u.value < l);
  }), c = R(() => !n.value);
  return { hasRetainedPrompt: s, isHomeWidgetVisible: a, isSettingsEntryVisible: c, runInstallAction: async () => {
    const l = e.value;
    if (l) {
      try {
        await l.prompt();
      } finally {
        e.value = null;
      }
      return;
    }
    const p = tn(en(navigator.userAgent));
    window.open(p, "_blank", "noopener,noreferrer");
  }, dismissHomeWidget: () => {
    t.value.pwaInstallWidgetDismissedUntil = Date.now() + sn;
  } };
});
export {
  on as a,
  ln as u
};
