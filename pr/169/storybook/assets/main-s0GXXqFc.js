import { d, o as O, t as f, f as v } from "./index-CROe5JIw.js";
import { l as m, y as S, $ as k, X as N, r as x } from "./iframe-BmKBn1Mu.js";
function E(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
function p(t) {
  if (t == null) return "";
  if (typeof t == "string") return t;
  if (Array.isArray(t)) return t.map(p).join(",");
  const n = String(t);
  return n === "0" && Object.is(Number(t), -0) ? "-0" : n;
}
function b(t) {
  return typeof t == "string" || typeof t == "symbol" ? t : Object.is(t?.valueOf?.(), -0) ? "-0" : String(t);
}
function P(t) {
  if (Array.isArray(t)) return t.map(b);
  if (typeof t == "symbol") return [t];
  t = p(t);
  const n = [], r = t.length;
  if (r === 0) return n;
  let e = 0, s = "", i = "", a = false;
  for (t.charCodeAt(0) === 46 && n.push(""); e < r; ) {
    const o = t[e];
    if (i) o === "\\" && e + 1 < r ? (e++, s += t[e]) : o === i ? i = "" : s += o;
    else if (a) o === '"' || o === "'" ? i = o : o === "]" ? (a = false, n.push(s), s = "") : s += o;
    else if (o === "[") a = true, s && (n.push(s), s = "");
    else if (o === ".") {
      s && (n.push(s), s = "");
      const c = t[e + 1];
      (c === void 0 || c === ".") && n.push("");
    } else s += o;
    e++;
  }
  return s && n.push(s), n;
}
function l(t) {
  return t === "__proto__";
}
const A = /\.|(\[(?:[^[\]]*|(["'])(?:(?!\2)[^\\]|\\.)*?\2)\])/;
function B(t) {
  switch (typeof t) {
    case "number":
    case "symbol":
      return false;
    case "string":
      return t === "" || t.startsWith(".") || t.endsWith(".") ? false : A.test(t);
    default:
      return false;
  }
}
function g(t, n, r) {
  if (t == null) return r;
  switch (typeof n) {
    case "string": {
      if (l(n)) return r;
      const e = t[n];
      return e === void 0 ? B(n) && !Object.hasOwn(t, n) ? g(t, P(n), r) : r : e;
    }
    case "number":
    case "symbol": {
      typeof n == "number" && (n = b(n));
      const e = t[n];
      return e === void 0 ? r : e;
    }
    default: {
      if (Array.isArray(n)) return W(t, n, r);
      if (Object.is(n?.valueOf(), -0) ? n = "-0" : n = String(n), l(n)) return r;
      const e = t[n];
      return e === void 0 ? r : e;
    }
  }
}
function W(t, n, r) {
  if (n.length === 0) return r;
  let e = t;
  for (let s = 0; s < n.length; s++) {
    if (e == null || l(n[s])) return r;
    e = e[n[s]];
  }
  return e === void 0 ? r : e;
}
function L(t) {
  return typeof t == "object" && t !== null;
}
function y(t) {
  return typeof t == "number" || L(t) && E(t) === "[object Number]";
}
const h = d(() => {
  const t = [];
  return O("Escape", (e) => {
    let s = true;
    for (let i = t.length - 1; i > -1 && i <= t.length && s; i--) s = t.at(i)?.(e) ?? false;
  }), (e) => {
    t.push(e);
    const s = () => {
      const i = t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    };
    return f(() => {
      s();
    }), s;
  };
}), q = (t) => {
  h()(t);
}, H = (t, n) => {
  const r = h();
  let e;
  const s = m(() => S(t) === true, (i) => {
    i && !e ? e = r(n) : !i && e && (e(), e = void 0);
  }, { immediate: true, flush: "sync" });
  f(() => {
    s(), e?.(), e = void 0;
  });
}, w = d(() => {
  const t = k(), n = j(), r = [];
  let e;
  const s = async (a, o) => (e || (e = (async () => {
    let c = true;
    for (let u = r.length - 1; u >= 0 && c; u--) c = await r.at(u)?.(a, o) === true;
    return c;
  })(), queueMicrotask(() => {
    e = void 0;
  })), await e), i = (a) => {
    r.push(a);
    const o = () => {
      const c = r.indexOf(a);
      c >= 0 && r.splice(c, 1);
    };
    return f(() => {
      o();
    }), o;
  };
  return t.beforeEach(async (a, o) => {
    const c = n.value, u = g(window.history.state, "position");
    return y(c) && y(u) && c > u ? await s(a, o) : true;
  }), { onBackNavigationStacked: i };
}), j = d(() => {
  const t = k(), n = x(), r = () => {
    const e = g(window.history.state, "position");
    n.value = y(e) ? e : void 0;
  };
  return t.afterEach(() => {
    setTimeout(() => {
      r();
    }, 0);
  }), v(window, "popstate", () => {
    r();
  }), N(n);
}), C = (t) => {
  const { onBackNavigationStacked: n } = w();
  n(t);
}, T = (t, n) => {
  const { onBackNavigationStacked: r } = w();
  let e;
  const s = m(() => S(t) === true, (i) => {
    i && !e ? e = r(n) : !i && e && (e(), e = void 0);
  }, { immediate: true, flush: "sync" });
  f(() => {
    s(), e?.(), e = void 0;
  });
};
export {
  q as a,
  H as b,
  T as c,
  C as u
};
