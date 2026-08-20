import { p as L, t as d, e as W, q as T, c as g, o as j, u as B } from "./index-DTAjtwLd.js";
import { l as M, a3 as q, J as f, C as m, W as H, g as I, y as p, L as v, M as w, P as C, X as K, r as $ } from "./iframe-TXn654RC.js";
const E = (e) => e instanceof Element ? e : e?.$el instanceof HTMLElement ? e.$el : e?.$parent ? E(e.$parent) : document.body, D = () => {
  const e = q(), t = L(() => {
  }, () => {
    if (e?.proxy) return E(e.proxy);
  });
  return M(t.trigger), t;
}, S = /* @__PURE__ */ Symbol("childrenStackKey"), Z = () => {
  const e = H(/* @__PURE__ */ new Set()), t = f(S, void 0), r = t ? f(t) : void 0, n = /* @__PURE__ */ Symbol("childrenStackKey");
  return v(S, n), v(n, { add: (i) => {
    e.add(i), r?.add(i);
  }, remove: (i) => {
    e.delete(i), r?.remove(i);
  } }), { childStack: e };
}, l = I(/* @__PURE__ */ new Map()), V = (e) => {
  const t = p(() => W(e)), r = f(S, void 0), n = r ? f(r, void 0) : void 0;
  m(t, (s, a) => {
    a && (n?.remove(a), l.delete(a)), s && n?.add(s);
  }, { immediate: true });
  const o = D();
  m([t, o], ([s, a], [i]) => {
    i && l.delete(i), s && a && l.set(s, a);
  }, { immediate: true }), d(() => {
    t.value && (n?.remove(t.value), l.delete(t.value));
  });
}, h = (e, t) => {
  if (e instanceof Element) {
    const n = l.get(e);
    if (n && n.matches(t)) return n;
    const o = e.parentElement;
    return o ? o.matches(t) ? o : h(o, t) : document.body;
  }
  const r = e.$parent;
  if (r) {
    const n = E(r);
    return n.matches(t) ? n : h(r, t);
  }
  return document.body;
}, N = /* @__PURE__ */ Symbol("overlay-container"), y = (e) => {
  v(N, p(() => e.value));
}, ee = () => {
  const e = T(), t = p(() => {
    const n = e.value;
    return n ? h(n, "[data-v-app]") : document.body;
  }), r = f(N, t);
  return p(() => r.value ?? t.value);
};
y.__docgenInfo = Object.assign({ displayName: y.name ?? y.__name }, { exportName: "provideOverlayContainer", displayName: "provideOverlayContainer", type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "HTMLElement | SVGElement | null | undefined", schema: "HTMLElement | SVGElement | null | undefined", declarations: [] }, { name: "__@RefSymbol@296", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", schema: "true", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Overlay/useOverlay.ts" });
const x = g(() => {
  const e = [];
  return j("Escape", (n) => {
    let o = true;
    for (let s = e.length - 1; s > -1 && s <= e.length && o; s--) o = e.at(s)?.(n) ?? false;
  }), (n) => {
    e.push(n);
    const o = () => {
      const s = e.indexOf(n);
      s >= 0 && e.splice(s, 1);
    };
    return d(() => {
      o();
    }), o;
  };
}), te = (e) => {
  x()(e);
}, ne = (e, t) => {
  const r = x();
  let n;
  const o = m(() => w(e) === true, (s) => {
    s && !n ? n = r(t) : !s && n && (n(), n = void 0);
  }, { immediate: true, flush: "sync" });
  d(() => {
    o(), n?.(), n = void 0;
  });
};
function R(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function P(e) {
  if (e == null) return "";
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return e.map(P).join(",");
  const t = String(e);
  return t === "0" && Object.is(Number(e), -0) ? "-0" : t;
}
function A(e) {
  return typeof e == "string" || typeof e == "symbol" ? e : Object.is(e?.valueOf?.(), -0) ? "-0" : String(e);
}
function F(e) {
  if (Array.isArray(e)) return e.map(A);
  if (typeof e == "symbol") return [e];
  e = P(e);
  const t = [], r = e.length;
  if (r === 0) return t;
  let n = 0, o = "", s = "", a = false;
  for (e.charCodeAt(0) === 46 && t.push(""); n < r; ) {
    const i = e[n];
    if (s) i === "\\" && n + 1 < r ? (n++, o += e[n]) : i === s ? s = "" : o += i;
    else if (a) i === '"' || i === "'" ? s = i : i === "]" ? (a = false, t.push(o), o = "") : o += i;
    else if (i === "[") a = true, o && (t.push(o), o = "");
    else if (i === ".") {
      o && (t.push(o), o = "");
      const c = e[n + 1];
      (c === void 0 || c === ".") && t.push("");
    } else o += i;
    n++;
  }
  return o && t.push(o), t;
}
function k(e) {
  return e === "__proto__";
}
const G = /\.|(\[(?:[^[\]]*|(["'])(?:(?!\2)[^\\]|\\.)*?\2)\])/;
function U(e) {
  switch (typeof e) {
    case "number":
    case "symbol":
      return false;
    case "string":
      return e === "" || e.startsWith(".") || e.endsWith(".") ? false : G.test(e);
    default:
      return false;
  }
}
function O(e, t, r) {
  if (e == null) return r;
  switch (typeof t) {
    case "string": {
      if (k(t)) return r;
      const n = e[t];
      return n === void 0 ? U(t) && !Object.hasOwn(e, t) ? O(e, F(t), r) : r : n;
    }
    case "number":
    case "symbol": {
      typeof t == "number" && (t = A(t));
      const n = e[t];
      return n === void 0 ? r : n;
    }
    default: {
      if (Array.isArray(t)) return Y(e, t, r);
      if (Object.is(t?.valueOf(), -0) ? t = "-0" : t = String(t), k(t)) return r;
      const n = e[t];
      return n === void 0 ? r : n;
    }
  }
}
function Y(e, t, r) {
  if (t.length === 0) return r;
  let n = e;
  for (let o = 0; o < t.length; o++) {
    if (n == null || k(t[o])) return r;
    n = n[t[o]];
  }
  return n === void 0 ? r : n;
}
function J(e) {
  return typeof e == "object" && e !== null;
}
function b(e) {
  return typeof e == "number" || J(e) && R(e) === "[object Number]";
}
const _ = g(() => {
  const e = C(), t = X(), r = [];
  let n;
  const o = async (a, i) => (n || (n = (async () => {
    let c = true;
    for (let u = r.length - 1; u >= 0 && c; u--) c = await r.at(u)?.(a, i) === true;
    return c;
  })(), queueMicrotask(() => {
    n = void 0;
  })), await n), s = (a) => {
    r.push(a);
    const i = () => {
      const c = r.indexOf(a);
      c >= 0 && r.splice(c, 1);
    };
    return d(() => {
      i();
    }), i;
  };
  return e.beforeEach(async (a, i) => {
    const c = t.value, u = O(window.history.state, "position");
    return b(c) && b(u) && c > u ? await o(a, i) : true;
  }), { onBackNavigationStacked: s };
}), X = g(() => {
  const e = C(), t = $(), r = () => {
    const n = O(window.history.state, "position");
    t.value = b(n) ? n : void 0;
  };
  return e.afterEach(() => {
    setTimeout(() => {
      r();
    }, 0);
  }), B(window, "popstate", () => {
    r();
  }), K(t);
}), re = (e) => {
  const { onBackNavigationStacked: t } = _();
  t(e);
}, oe = (e, t) => {
  const { onBackNavigationStacked: r } = _();
  let n;
  const o = m(() => w(e) === true, (s) => {
    s && !n ? n = r(t) : !s && n && (n(), n = void 0);
  }, { immediate: true, flush: "sync" });
  d(() => {
    o(), n?.(), n = void 0;
  });
};
export {
  te as a,
  ee as b,
  ne as c,
  oe as d,
  V as e,
  Z as f,
  re as u
};
