import { l as p, y as E, b as L, Y as k, W as N, r as P } from "./iframe-BGm-z7zv.js";
import { i as m, t as d, e as h, o as A, d as W } from "./index-C7d31q4Z.js";
import { d as T } from "./floating-ui.vue-BR8yo4y6.js";
function j(t) {
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
function B(t) {
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
      const a = t[e + 1];
      (a === void 0 || a === ".") && n.push("");
    } else r += o;
    e++;
  }
  return r && n.push(r), n;
}
function v(t) {
  return t === "__proto__";
}
const C = /\.|(\[(?:[^[\]]*|(["'])(?:(?!\2)[^\\]|\\.)*?\2)\])/;
function D(t) {
  switch (typeof t) {
    case "number":
    case "symbol":
      return false;
    case "string":
      return t === "" || t.startsWith(".") || t.endsWith(".") ? false : C.test(t);
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
      return e === void 0 ? D(n) && !Object.hasOwn(t, n) ? S(t, B(n), s) : s : e;
    }
    case "number":
    case "symbol": {
      typeof n == "number" && (n = O(n));
      const e = t[n];
      return e === void 0 ? s : e;
    }
    default: {
      if (Array.isArray(n)) return I(t, n, s);
      if (Object.is(n?.valueOf(), -0) ? n = "-0" : n = String(n), v(n)) return s;
      const e = t[n];
      return e === void 0 ? s : e;
    }
  }
}
function I(t, n, s) {
  if (n.length === 0) return s;
  let e = t;
  for (let r = 0; r < n.length; r++) {
    if (e == null || v(n[r])) return s;
    e = e[n[r]];
  }
  return e === void 0 ? s : e;
}
function _(t) {
  return typeof t == "object" && t !== null;
}
function y(t) {
  return typeof t == "number" || _(t) && j(t) === "[object Number]";
}
const q = m(() => {
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
  const e = ["click", "touchstart", "keydown", "visibilitychange", "wheel"], { events: r = e, ignore: i = [] } = s, { childStack: c } = T(), o = (f) => {
    const l = f.target instanceof Node ? f.target : void 0;
    if (!l) return;
    const x = E(i).map(h);
    [h(t), ...x, ...c].some((g) => g && (g == l || g.contains(l))) || n(f);
  }, a = L(() => !!h(t)), { add: u, remove: b } = q();
  p(a, (f) => {
    f ? r.forEach((l) => {
      u(l, o);
    }) : r.forEach((l) => {
      b(l, o);
    });
  }, { immediate: true }), d(() => {
    r.forEach((f) => {
      b(f, o);
    });
  });
}, H = m(() => {
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
}), X = (t, n) => {
  const s = H();
  let e;
  const r = p(() => E(t) === true, (i) => {
    i && !e ? e = s(n) : !i && e && (e(), e = void 0);
  }, { immediate: true, flush: "sync" });
  d(() => {
    r(), e?.(), e = void 0;
  });
}, R = m(() => {
  const t = k(), n = U(), s = [];
  let e;
  const r = async (c, o) => (e || (e = (async () => {
    let a = true;
    for (let u = s.length - 1; u >= 0 && a; u--) a = await s.at(u)?.(c, o) === true;
    return a;
  })(), queueMicrotask(() => {
    e = void 0;
  })), await e), i = (c) => {
    s.push(c);
    const o = () => {
      const a = s.indexOf(c);
      a >= 0 && s.splice(a, 1);
    };
    return d(() => {
      o();
    }), o;
  };
  return t.beforeEach(async (c, o) => {
    const a = n.value, u = S(window.history.state, "position");
    return y(a) && y(u) && a > u ? await r(c, o) : true;
  }), { onBackNavigationStacked: i };
}), U = m(() => {
  const t = k(), n = P(), s = () => {
    const e = S(window.history.state, "position");
    n.value = y(e) ? e : void 0;
  };
  return t.afterEach(() => {
    setTimeout(() => {
      s();
    }, 0);
  }), W(window, "popstate", () => {
    s();
  }), N(n);
}), Z = (t, n) => {
  const { onBackNavigationStacked: s } = R();
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
  X as u
};
