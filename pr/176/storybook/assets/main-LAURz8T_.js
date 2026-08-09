import { B as p, J as E, h as L, M as b, X as N, r as P } from "./iframe-D36RwZ-1.js";
import { c as m, t as d, d as h, o as A, u as T } from "./index-CNHV7fyn.js";
import { d as W } from "./useOverlay-DOL14NwK.js";
const B = m(() => {
  const t = {}, n = (r) => {
    document.addEventListener(r, (i) => {
      t[r]?.toReversed().forEach((c) => {
        c(i);
      });
    }, { capture: true, passive: true });
  };
  return { add: (r, i) => {
    t[r] || (n(r), t[r] = []), t[r].push(i);
  }, remove: (r, i) => {
    if (t[r]) {
      const c = t[r].indexOf(i);
      c >= 0 && t[r].splice(c, 1);
    }
  } };
});
const Q = (t, n, s = {}) => {
  const e = ["click", "touchstart", "keydown", "visibilitychange", "wheel"], { events: r = e, ignore: i = [] } = s, { childStack: c } = W(), o = (f) => {
    const l = f.target instanceof Node ? f.target : void 0;
    if (!l) return;
    const x = E(i).map(h);
    [h(t), ...x, ...c].some((g) => g && (g == l || g.contains(l))) || n(f);
  }, u = L(() => !!h(t)), { add: a, remove: k } = B();
  p(u, (f) => {
    f ? r.forEach((l) => {
      a(l, o);
    }) : r.forEach((l) => {
      k(l, o);
    });
  }, { immediate: true }), d(() => {
    r.forEach((f) => {
      k(f, o);
    });
  });
}, j = m(() => {
  const t = [];
  return A("Escape", (e) => {
    let r = true;
    for (let i = t.length - 1; i > -1 && i <= t.length && r; i--) r = t.at(i)?.(e) ?? false;
  }), (e) => {
    t.push(e);
    const r = () => {
      const i = t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    };
    return d(() => {
      r();
    }), r;
  };
}), Y = (t, n) => {
  const s = j();
  let e;
  const r = p(() => E(t) === true, (i) => {
    i && !e ? e = s(n) : !i && e && (e(), e = void 0);
  }, { immediate: true, flush: "sync" });
  d(() => {
    r(), e?.(), e = void 0;
  });
};
function C(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
function w(t) {
  if (t == null) return "";
  if (typeof t == "string") return t;
  if (Array.isArray(t)) return t.map(w).join(",");
  const n = String(t);
  return n === "0" && Object.is(Number(t), -0) ? "-0" : n;
}
function O(t) {
  return typeof t == "string" || typeof t == "symbol" ? t : Object.is(t?.valueOf?.(), -0) ? "-0" : String(t);
}
function D(t) {
  if (Array.isArray(t)) return t.map(O);
  if (typeof t == "symbol") return [t];
  t = w(t);
  const n = [], s = t.length;
  if (s === 0) return n;
  let e = 0, r = "", i = "", c = false;
  for (t.charCodeAt(0) === 46 && n.push(""); e < s; ) {
    const o = t[e];
    if (i) o === "\\" && e + 1 < s ? (e++, r += t[e]) : o === i ? i = "" : r += o;
    else if (c) o === '"' || o === "'" ? i = o : o === "]" ? (c = false, n.push(r), r = "") : r += o;
    else if (o === "[") c = true, r && (n.push(r), r = "");
    else if (o === ".") {
      r && (n.push(r), r = "");
      const u = t[e + 1];
      (u === void 0 || u === ".") && n.push("");
    } else r += o;
    e++;
  }
  return r && n.push(r), n;
}
function v(t) {
  return t === "__proto__";
}
const I = /\.|(\[(?:[^[\]]*|(["'])(?:(?!\2)[^\\]|\\.)*?\2)\])/;
function _(t) {
  switch (typeof t) {
    case "number":
    case "symbol":
      return false;
    case "string":
      return t === "" || t.startsWith(".") || t.endsWith(".") ? false : I.test(t);
    default:
      return false;
  }
}
function S(t, n, s) {
  if (t == null) return s;
  switch (typeof n) {
    case "string": {
      if (v(n)) return s;
      const e = t[n];
      return e === void 0 ? _(n) && !Object.hasOwn(t, n) ? S(t, D(n), s) : s : e;
    }
    case "number":
    case "symbol": {
      typeof n == "number" && (n = O(n));
      const e = t[n];
      return e === void 0 ? s : e;
    }
    default: {
      if (Array.isArray(n)) return q(t, n, s);
      if (Object.is(n?.valueOf(), -0) ? n = "-0" : n = String(n), v(n)) return s;
      const e = t[n];
      return e === void 0 ? s : e;
    }
  }
}
function q(t, n, s) {
  if (n.length === 0) return s;
  let e = t;
  for (let r = 0; r < n.length; r++) {
    if (e == null || v(n[r])) return s;
    e = e[n[r]];
  }
  return e === void 0 ? s : e;
}
function H(t) {
  return typeof t == "object" && t !== null;
}
function y(t) {
  return typeof t == "number" || H(t) && C(t) === "[object Number]";
}
const M = m(() => {
  const t = b(), n = R(), s = [];
  let e;
  const r = async (c, o) => (e || (e = (async () => {
    let u = true;
    for (let a = s.length - 1; a >= 0 && u; a--) u = await s.at(a)?.(c, o) === true;
    return u;
  })(), queueMicrotask(() => {
    e = void 0;
  })), await e), i = (c) => {
    s.push(c);
    const o = () => {
      const u = s.indexOf(c);
      u >= 0 && s.splice(u, 1);
    };
    return d(() => {
      o();
    }), o;
  };
  return t.beforeEach(async (c, o) => {
    const u = n.value, a = S(window.history.state, "position");
    return y(u) && y(a) && u > a ? await r(c, o) : true;
  }), { onBackNavigationStacked: i };
}), R = m(() => {
  const t = b(), n = P(), s = () => {
    const e = S(window.history.state, "position");
    n.value = y(e) ? e : void 0;
  };
  return t.afterEach(() => {
    setTimeout(() => {
      s();
    }, 0);
  }), T(window, "popstate", () => {
    s();
  }), N(n);
}), Z = (t, n) => {
  const { onBackNavigationStacked: s } = M();
  let e;
  const r = p(() => E(t) === true, (i) => {
    i && !e ? e = s(n) : !i && e && (e(), e = void 0);
  }, { immediate: true, flush: "sync" });
  d(() => {
    r(), e?.(), e = void 0;
  });
};
export {
  Z as a,
  Q as o,
  Y as u
};
