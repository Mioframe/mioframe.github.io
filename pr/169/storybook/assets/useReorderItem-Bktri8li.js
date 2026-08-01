import { d as to, s as Ha, j as ur, k as Tr, l as De, o as Hd, m as Bd, p as no, r as hr, q as Ba, v as ro, x as z, y as Kd, g as Gd, w as Yd, u as qn, e as Xd, z as Zd } from "./iframe-Dp376eQc.js";
var Jd = /* @__PURE__ */ Symbol.for("preact-signals");
function Mr() {
  if (Ee > 1) Ee--;
  else {
    var e, t = false;
    for ((function() {
      var a = pr;
      for (pr = void 0; a !== void 0; ) {
        var i = a.S;
        if (i.v === a.v) for (var s = i.t; s !== void 0; s = s.x) s.i === a.i && (s.i = i.i);
        a = a.o;
      }
    })(); ln !== void 0; ) {
      var n = ln;
      for (ln = void 0, mr++; n !== void 0; ) {
        var r = n.u;
        if (n.u = void 0, n.f &= -3, !(8 & n.f) && io(n)) try {
          n.c();
        } catch (a) {
          t || (e = a, t = true);
        }
        n = r;
      }
    }
    if (mr = 0, Ee--, t) throw e;
  }
}
function W(e) {
  if (Ee > 0) return e();
  ca = ++Qd, Ee++;
  try {
    return e();
  } finally {
    Mr();
  }
}
var on, O = void 0;
function P(e) {
  var t = O, n = on;
  O = void 0, on = void 0;
  try {
    return e();
  } finally {
    O = t, on = n;
  }
}
var ln = void 0, Ee = 0, mr = 0, Qd = 0, ca = 0, pr = void 0, gr = 0;
function ao(e) {
  if (O !== void 0) {
    var t = e.n;
    if (t === void 0 || t.t !== O) return t = { i: 0, S: e, p: O.s, n: void 0, t: O, e: void 0, x: void 0, r: t }, O.s !== void 0 && (O.s.n = t), O.s = t, e.n = t, 32 & O.f && e.S(t), t;
    if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = O.s, t.n = void 0, O.s.n = t, O.s = t), t;
  }
}
function Q(e, t) {
  this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
Q.prototype.brand = Jd;
Q.prototype.h = function() {
  return true;
};
Q.prototype.S = function(e) {
  var t = this, n = this.t;
  n !== e && e.e === void 0 && (e.x = n, this.t = e, n !== void 0 ? n.e = e : P(function() {
    var r;
    (r = t.W) == null || r.call(t);
  }));
};
Q.prototype.U = function(e) {
  var t = this;
  if (this.t !== void 0) {
    var n = e.e, r = e.x;
    n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && P(function() {
      var a;
      (a = t.Z) == null || a.call(t);
    }));
  }
};
Q.prototype.subscribe = function(e) {
  var t = this;
  return ie(function() {
    var n = t.value;
    P(function() {
      return e(n);
    });
  }, { name: "sub" });
};
Q.prototype.valueOf = function() {
  return this.value;
};
Q.prototype.toString = function() {
  return this.value + "";
};
Q.prototype.toJSON = function() {
  return this.value;
};
Q.prototype.peek = function() {
  var e = this;
  return P(function() {
    return e.value;
  });
};
Object.defineProperty(Q.prototype, "value", { get: function() {
  var e = ao(this);
  return e !== void 0 && (e.i = this.i), this.v;
}, set: function(e) {
  if (e !== this.v) {
    if (mr > 100) throw new Error("Cycle detected");
    (function(n) {
      Ee !== 0 && mr === 0 && n.l !== ca && (n.l = ca, pr = { S: n, v: n.v, i: n.i, o: pr });
    })(this), this.v = e, this.i++, gr++, Ee++;
    try {
      for (var t = this.t; t !== void 0; t = t.x) t.t.N();
    } finally {
      Mr();
    }
  }
} });
function at(e, t) {
  return new Q(e, t);
}
function io(e) {
  for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return true;
  return false;
}
function so(e) {
  for (var t = e.s; t !== void 0; t = t.n) {
    var n = t.S.n;
    if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
      e.s = t;
      break;
    }
  }
}
function oo(e) {
  for (var t = e.s, n = void 0; t !== void 0; ) {
    var r = t.p;
    t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
  }
  e.s = n;
}
function it(e, t) {
  Q.call(this, void 0, t), this.x = e, this.s = void 0, this.g = gr - 1, this.f = 4;
}
it.prototype = new Q();
it.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return false;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === gr)) return true;
  if (this.g = gr, this.f |= 1, this.i > 0 && !io(this)) return this.f &= -2, true;
  var e = O;
  try {
    so(this), O = this;
    var t = this.x();
    (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
  } catch (n) {
    this.v = n, this.f |= 16, this.i++;
  }
  return O = e, oo(this), this.f &= -2, true;
};
it.prototype.S = function(e) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
  }
  Q.prototype.S.call(this, e);
};
it.prototype.U = function(e) {
  if (this.t !== void 0 && (Q.prototype.U.call(this, e), this.t === void 0)) {
    this.f &= -33;
    for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
  }
};
it.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var e = this.t; e !== void 0; e = e.x) e.t.N();
  }
};
Object.defineProperty(it.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var e = ao(this);
  if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function gs(e, t) {
  return new it(e, t);
}
function lo(e) {
  var t = e.m;
  if (e.m = void 0, typeof t == "function") {
    Ee++;
    var n = O;
    O = void 0;
    try {
      t();
    } catch (r) {
      throw e.f &= -2, e.f |= 8, Ka(e), r;
    } finally {
      O = n, Mr();
    }
  }
}
function Ka(e) {
  for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
  e.x = void 0, e.s = void 0, lo(e);
}
function ec(e) {
  if (O !== this) throw new Error("Out-of-order effect");
  oo(this), O = e, this.f &= -2, 8 & this.f && Ka(this), Mr();
}
function Mt(e, t) {
  this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name, on && on.push(this);
}
Mt.prototype.c = function() {
  var e = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var t = this.x();
    typeof t == "function" && (this.m = t);
  } finally {
    e();
  }
};
Mt.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, lo(this), so(this), Ee++;
  var e = O;
  return O = this, ec.bind(this, e);
};
Mt.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.u = ln, ln = this);
};
Mt.prototype.d = function() {
  this.f |= 8, 1 & this.f || Ka(this);
};
Mt.prototype.dispose = function() {
  this.d();
};
function ie(e, t) {
  var n = new Mt(e, t);
  try {
    n.c();
  } catch (a) {
    throw n.d(), a;
  }
  var r = n.d.bind(n);
  return r[Symbol.dispose] = r, r;
}
var tc = Object.create, Ga = Object.defineProperty, nc = Object.defineProperties, rc = Object.getOwnPropertyDescriptor, ac = Object.getOwnPropertyDescriptors, fs = Object.getOwnPropertySymbols, ic = Object.prototype.hasOwnProperty, sc = Object.prototype.propertyIsEnumerable, oc = (e, t) => (t = Symbol[e]) ? t : /* @__PURE__ */ Symbol.for("Symbol." + e), St = (e) => {
  throw TypeError(e);
}, ua = (e, t, n) => t in e ? Ga(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n, lc = (e, t) => {
  for (var n in t || (t = {})) ic.call(t, n) && ua(e, n, t[n]);
  if (fs) for (var n of fs(t)) sc.call(t, n) && ua(e, n, t[n]);
  return e;
}, dc = (e, t) => nc(e, ac(t)), bs = (e, t) => Ga(e, "name", { value: t, configurable: true }), cc = (e) => {
  var t;
  return [, , , tc((t = void 0) != null ? t : null)];
}, co = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Ut = (e) => e !== void 0 && typeof e != "function" ? St("Function expected") : e, uc = (e, t, n, r, a) => ({ kind: co[e], name: t, metadata: r, addInitializer: (i) => n._ ? St("Already initialized") : a.push(Ut(i || null)) }), uo = (e, t) => ua(t, oc("metadata"), e[3]), Ue = (e, t, n, r) => {
  for (var a = 0, i = e[t >> 1], s = i && i.length; a < s; a++) t & 1 ? i[a].call(n) : r = i[a].call(n, r);
  return r;
}, Rt = (e, t, n, r, a, i) => {
  var s, o, l, c, u, d = t & 7, m = !!(t & 8), p = !!(t & 16), y = d > 3 ? e.length + 1 : d ? m ? 1 : 2 : 0, v = co[d + 5], w = d > 3 && (e[y - 1] = []), x = e[y] || (e[y] = []), h = d && (!p && !m && (a = a.prototype), d < 5 && (d > 3 || !p) && rc(d < 4 ? a : { get [n]() {
    return le(this, i);
  }, set [n](b) {
    return Oe(this, i, b);
  } }, n));
  d ? p && d < 4 && bs(i, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : bs(a, n);
  for (var g = r.length - 1; g >= 0; g--) c = uc(d, n, l = {}, e[3], x), d && (c.static = m, c.private = p, u = c.access = { has: p ? (b) => hc(a, b) : (b) => n in b }, d ^ 3 && (u.get = p ? (b) => (d ^ 1 ? le : mc)(b, a, d ^ 4 ? i : h.get) : (b) => b[n]), d > 2 && (u.set = p ? (b, f) => Oe(b, a, f, d ^ 4 ? i : h.set) : (b, f) => b[n] = f)), o = (0, r[g])(d ? d < 4 ? p ? i : h[v] : d > 4 ? void 0 : { get: h.get, set: h.set } : a, c), l._ = 1, d ^ 4 || o === void 0 ? Ut(o) && (d > 4 ? w.unshift(o) : d ? p ? i = o : h[v] = o : a = o) : typeof o != "object" || o === null ? St("Object expected") : (Ut(s = o.get) && (h.get = s), Ut(s = o.set) && (h.set = s), Ut(s = o.init) && w.unshift(s));
  return d || uo(e, a), h && Ga(a, n, h), p ? d ^ 4 ? i : h : a;
}, Ya = (e, t, n) => t.has(e) || St("Cannot " + n), hc = (e, t) => Object(t) !== t ? St('Cannot use the "in" operator on this value') : e.has(t), le = (e, t, n) => (Ya(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ht = (e, t, n) => t.has(e) ? St("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Oe = (e, t, n, r) => (Ya(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), mc = (e, t, n) => (Ya(e, t, "access private method"), n);
function ha(e, t) {
  if (t) {
    let n;
    return gs(() => {
      const r = e();
      return r && n && t(n, r) ? n : (n = r, r);
    });
  }
  return gs(e);
}
function ma(e, t) {
  if (Object.is(e, t)) return true;
  if (e === null || t === null) return false;
  if (typeof e == "function" && typeof t == "function") return e === t;
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return false;
    for (const n of e) if (!t.has(n)) return false;
    return true;
  }
  if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? false : !e.some((r, a) => !ma(r, t[a]));
  if (typeof e == "object" && typeof t == "object") {
    const n = Object.keys(e), r = Object.keys(t);
    return n.length !== r.length ? false : !n.some((i) => !ma(e[i], t[i]));
  }
  return false;
}
function _({ get: e }, t) {
  return { init(n) {
    return at(n);
  }, get() {
    return e.call(this).value;
  }, set(n) {
    const r = e.call(this);
    r.peek() !== n && (r.value = n);
  } };
}
function U(e, t) {
  const n = /* @__PURE__ */ new WeakMap();
  return function() {
    let r = n.get(this);
    return r || (r = ha(e.bind(this)), n.set(this, r)), r.value;
  };
}
function Gr(e = true) {
  return function(t, n) {
    n.addInitializer(function() {
      const r = n.kind === "field" ? this : n.static ? this : Object.getPrototypeOf(this), a = Object.getOwnPropertyDescriptor(r, n.name);
      a && Object.defineProperty(r, n.name, dc(lc({}, a), { enumerable: e }));
    });
  };
}
function An(...e) {
  const t = e.map((n) => ie(n));
  return () => t.forEach((n) => n());
}
var ho, mo, po, go, fo, bo, X, Xa, Yr, pa, ga, Y, Za, Xr, yo, fa, Ja, Zr, ba, ya;
bo = [_], fo = [_], go = [_], po = [Gr()], mo = [Gr()], ho = [Gr()];
var Nt = class {
  constructor(e, t = Object.is) {
    this.defaultValue = e, this.equals = t, Ue(X, 5, this), Ht(this, Y), Ht(this, Xa, Ue(X, 8, this)), Ue(X, 11, this), Ht(this, Za, Ue(X, 12, this)), Ue(X, 15, this), Ht(this, Ja, Ue(X, 16, this)), Ue(X, 19, this), this.reset = this.reset.bind(this), this.reset();
  }
  get current() {
    return le(this, Y, ba);
  }
  get initial() {
    return le(this, Y, pa);
  }
  get previous() {
    return le(this, Y, yo);
  }
  set current(e) {
    const t = P(() => le(this, Y, ba));
    e && t && this.equals(t, e) || W(() => {
      le(this, Y, pa) || Oe(this, Y, e, ga), Oe(this, Y, t, fa), Oe(this, Y, e, ya);
    });
  }
  reset(e = this.defaultValue) {
    W(() => {
      Oe(this, Y, void 0, fa), Oe(this, Y, e, ga), Oe(this, Y, e, ya);
    });
  }
};
X = cc();
Xa = /* @__PURE__ */ new WeakMap();
Y = /* @__PURE__ */ new WeakSet();
Za = /* @__PURE__ */ new WeakMap();
Ja = /* @__PURE__ */ new WeakMap();
Yr = Rt(X, 20, "#initial", bo, Y, Xa), pa = Yr.get, ga = Yr.set;
Xr = Rt(X, 20, "#previous", fo, Y, Za), yo = Xr.get, fa = Xr.set;
Zr = Rt(X, 20, "#current", go, Y, Ja), ba = Zr.get, ya = Zr.set;
Rt(X, 2, "current", po, Nt);
Rt(X, 2, "initial", mo, Nt);
Rt(X, 2, "previous", ho, Nt);
uo(X, Nt);
function Jr(e) {
  return P(() => {
    const t = {};
    for (const n in e) t[n] = e[n];
    return t;
  });
}
var Be, pc = class {
  constructor() {
    Ht(this, Be, /* @__PURE__ */ new WeakMap());
  }
  get(e, t) {
    var n;
    return e ? (n = le(this, Be).get(e)) == null ? void 0 : n.get(t) : void 0;
  }
  set(e, t, n) {
    var r;
    if (e) return le(this, Be).has(e) || le(this, Be).set(e, /* @__PURE__ */ new Map()), (r = le(this, Be).get(e)) == null ? void 0 : r.set(t, n);
  }
  clear(e) {
    var t;
    return e ? (t = le(this, Be).get(e)) == null ? void 0 : t.clear() : void 0;
  }
};
Be = /* @__PURE__ */ new WeakMap();
var gc = Object.create, vo = Object.defineProperty, fc = Object.getOwnPropertyDescriptor, ys = Object.getOwnPropertySymbols, bc = Object.prototype.hasOwnProperty, yc = Object.prototype.propertyIsEnumerable, xo = (e, t) => (t = Symbol[e]) ? t : /* @__PURE__ */ Symbol.for("Symbol." + e), Sr = (e) => {
  throw TypeError(e);
}, vs = Math.pow, va = (e, t, n) => t in e ? vo(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n, vc = (e, t) => {
  for (var n in t || (t = {})) bc.call(t, n) && va(e, n, t[n]);
  if (ys) for (var n of ys(t)) yc.call(t, n) && va(e, n, t[n]);
  return e;
}, xc = (e) => {
  var t;
  return [, , , gc((t = e?.[xo("metadata")]) != null ? t : null)];
}, wo = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Do = (e) => e !== void 0 && typeof e != "function" ? Sr("Function expected") : e, wc = (e, t, n, r, a) => ({ kind: wo[e], name: t, metadata: r, addInitializer: (i) => n._ ? Sr("Already initialized") : a.push(Do(i || null)) }), Dc = (e, t) => va(t, xo("metadata"), e[3]), kc = (e, t, n, r) => {
  for (var a = 0, i = e[t >> 1], s = i && i.length; a < s; a++) i[a].call(n);
  return r;
}, ko = (e, t, n, r, a, i) => {
  for (var s, o, l, c, u = t & 7, d = false, m = false, p = 2, y = wo[u + 5], v = e[p] || (e[p] = []), w = (a = a.prototype, fc(a, n)), x = r.length - 1; x >= 0; x--) l = wc(u, n, o = {}, e[3], v), l.static = d, l.private = m, c = l.access = { has: (h) => n in h }, c.get = (h) => h[n], s = (0, r[x])(w[y], l), o._ = 1, Do(s) && (w[y] = s);
  return w && vo(a, n, w), a;
}, Eo = (e, t, n) => t.has(e) || Sr("Cannot " + n), Ec = (e, t, n) => (Eo(e, t, "read from private field"), t.get(e)), Ac = (e, t, n) => t.has(e) ? Sr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ic = (e, t, n, r) => (Eo(e, t, "write to private field"), t.set(e, n), n), de = class xa {
  constructor(t, n) {
    this.x = t, this.y = n;
  }
  static delta(t, n) {
    return new xa(t.x - n.x, t.y - n.y);
  }
  static distance(t, n) {
    return Math.hypot(t.x - n.x, t.y - n.y);
  }
  static equals(t, n) {
    return t.x === n.x && t.y === n.y;
  }
  static from({ x: t, y: n }) {
    return new xa(t, n);
  }
}, pe = class Ke {
  constructor(t, n, r, a) {
    this.left = t, this.top = n, this.width = r, this.height = a, this.scale = { x: 1, y: 1 };
  }
  get inverseScale() {
    return { x: 1 / this.scale.x, y: 1 / this.scale.y };
  }
  translate(t, n) {
    const { top: r, left: a, width: i, height: s, scale: o } = this, l = new Ke(a + t, r + n, i, s);
    return l.scale = vc({}, o), l;
  }
  get boundingRectangle() {
    const { width: t, height: n, left: r, top: a, right: i, bottom: s } = this;
    return { width: t, height: n, left: r, top: a, right: i, bottom: s };
  }
  get center() {
    const { left: t, top: n, right: r, bottom: a } = this;
    return new de((t + r) / 2, (n + a) / 2);
  }
  get area() {
    const { width: t, height: n } = this;
    return t * n;
  }
  equals(t) {
    if (!(t instanceof Ke)) return false;
    const { left: n, top: r, width: a, height: i } = this;
    return n === t.left && r === t.top && a === t.width && i === t.height;
  }
  containsPoint(t) {
    const { top: n, left: r, bottom: a, right: i } = this;
    return n <= t.y && t.y <= a && r <= t.x && t.x <= i;
  }
  intersectionArea(t) {
    return t instanceof Ke ? Pc(this, t) : 0;
  }
  intersectionRatio(t) {
    const { area: n } = this, r = this.intersectionArea(t);
    return r / (t.area + n - r);
  }
  get bottom() {
    const { top: t, height: n } = this;
    return t + n;
  }
  get right() {
    const { left: t, width: n } = this;
    return t + n;
  }
  get aspectRatio() {
    const { width: t, height: n } = this;
    return t / n;
  }
  get corners() {
    return [{ x: this.left, y: this.top }, { x: this.right, y: this.top }, { x: this.left, y: this.bottom }, { x: this.right, y: this.bottom }];
  }
  static from({ top: t, left: n, width: r, height: a }) {
    return new Ke(n, t, r, a);
  }
  static delta(t, n, r = { x: "center", y: "center" }) {
    const a = (i, s) => {
      const o = r[s], l = s === "x" ? i.left : i.top, c = s === "x" ? i.width : i.height;
      return o == "start" ? l : o == "end" ? l + c : l + c / 2;
    };
    return de.delta({ x: a(t, "x"), y: a(t, "y") }, { x: a(n, "x"), y: a(n, "y") });
  }
  static intersectionRatio(t, n) {
    return Ke.from(t).intersectionRatio(Ke.from(n));
  }
};
function Pc(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), a = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), s = a - r, o = i - n;
  return r < a && n < i ? s * o : 0;
}
var Ao, Io, wa, Bn, In, Rr = class extends (wa = Nt, Io = [U], Ao = [U], wa) {
  constructor(e) {
    const t = de.from(e);
    super(t, (n, r) => de.equals(n, r)), kc(In, 5, this), Ac(this, Bn, 0), this.velocity = { x: 0, y: 0 };
  }
  get delta() {
    return de.delta(this.current, this.initial);
  }
  get direction() {
    const { current: e, previous: t } = this;
    if (!t) return null;
    const n = { x: e.x - t.x, y: e.y - t.y };
    return !n.x && !n.y ? null : Math.abs(n.x) > Math.abs(n.y) ? n.x > 0 ? "right" : "left" : n.y > 0 ? "down" : "up";
  }
  get current() {
    return super.current;
  }
  set current(e) {
    const { current: t } = this, n = de.from(e), r = { x: n.x - t.x, y: n.y - t.y }, a = Date.now(), i = a - Ec(this, Bn), s = (o) => Math.round(o / i * 100);
    W(() => {
      Ic(this, Bn, a), this.velocity = { x: s(r.x), y: s(r.y) }, super.current = n;
    });
  }
  reset(e = this.defaultValue) {
    super.reset(de.from(e)), this.velocity = { x: 0, y: 0 };
  }
};
In = xc(wa);
Bn = /* @__PURE__ */ new WeakMap();
ko(In, 2, "delta", Io, Rr);
ko(In, 2, "direction", Ao, Rr);
Dc(In, Rr);
function Da({ x: e, y: t }, n) {
  const r = Math.abs(e), a = Math.abs(t);
  return typeof n == "number" ? Math.sqrt(vs(r, 2) + vs(a, 2)) > n : "x" in n && "y" in n ? r > n.x && a > n.y : "x" in n ? r > n.x : "y" in n ? a > n.y : false;
}
var Po = ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(Po || {}), _o = Object.values(Po), _c = Object.create, Qa = Object.defineProperty, Tc = Object.defineProperties, Mc = Object.getOwnPropertyDescriptor, Sc = Object.getOwnPropertyDescriptors, fr = Object.getOwnPropertySymbols, To = Object.prototype.hasOwnProperty, Mo = Object.prototype.propertyIsEnumerable, So = (e, t) => (t = Symbol[e]) ? t : /* @__PURE__ */ Symbol.for("Symbol." + e), Ot = (e) => {
  throw TypeError(e);
}, ka = (e, t, n) => t in e ? Qa(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n, ei = (e, t) => {
  for (var n in t || (t = {})) To.call(t, n) && ka(e, n, t[n]);
  if (fr) for (var n of fr(t)) Mo.call(t, n) && ka(e, n, t[n]);
  return e;
}, ti = (e, t) => Tc(e, Sc(t)), xs = (e, t) => Qa(e, "name", { value: t, configurable: true }), Ro = (e, t) => {
  var n = {};
  for (var r in e) To.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && fr) for (var r of fr(e)) t.indexOf(r) < 0 && Mo.call(e, r) && (n[r] = e[r]);
  return n;
}, qt = (e) => {
  var t;
  return [, , , _c((t = e?.[So("metadata")]) != null ? t : null)];
}, No = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Bt = (e) => e !== void 0 && typeof e != "function" ? Ot("Function expected") : e, Rc = (e, t, n, r, a) => ({ kind: No[e], name: t, metadata: r, addInitializer: (i) => n._ ? Ot("Already initialized") : a.push(Bt(i || null)) }), st = (e, t) => ka(t, So("metadata"), e[3]), E = (e, t, n, r) => {
  for (var a = 0, i = e[t >> 1], s = i && i.length; a < s; a++) t & 1 ? i[a].call(n) : r = i[a].call(n, r);
  return r;
}, T = (e, t, n, r, a, i) => {
  var s, o, l, c, u, d = t & 7, m = !!(t & 8), p = !!(t & 16), y = d > 3 ? e.length + 1 : d ? m ? 1 : 2 : 0, v = No[d + 5], w = d > 3 && (e[y - 1] = []), x = e[y] || (e[y] = []), h = d && (!p && !m && (a = a.prototype), d < 5 && (d > 3 || !p) && Mc(d < 4 ? a : { get [n]() {
    return V(this, i);
  }, set [n](b) {
    return ae(this, i, b);
  } }, n));
  d ? p && d < 4 && xs(i, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : xs(a, n);
  for (var g = r.length - 1; g >= 0; g--) c = Rc(d, n, l = {}, e[3], x), d && (c.static = m, c.private = p, u = c.access = { has: p ? (b) => Nc(a, b) : (b) => n in b }, d ^ 3 && (u.get = p ? (b) => (d ^ 1 ? V : Oo)(b, a, d ^ 4 ? i : h.get) : (b) => b[n]), d > 2 && (u.set = p ? (b, f) => ae(b, a, f, d ^ 4 ? i : h.set) : (b, f) => b[n] = f)), o = (0, r[g])(d ? d < 4 ? p ? i : h[v] : d > 4 ? void 0 : { get: h.get, set: h.set } : a, c), l._ = 1, d ^ 4 || o === void 0 ? Bt(o) && (d > 4 ? w.unshift(o) : d ? p ? i = o : h[v] = o : a = o) : typeof o != "object" || o === null ? Ot("Object expected") : (Bt(s = o.get) && (h.get = s), Bt(s = o.set) && (h.set = s), Bt(s = o.init) && w.unshift(s));
  return d || st(e, a), h && Qa(a, n, h), p ? d ^ 4 ? i : h : a;
}, ni = (e, t, n) => t.has(e) || Ot("Cannot " + n), Nc = (e, t) => Object(t) !== t ? Ot('Cannot use the "in" operator on this value') : e.has(t), V = (e, t, n) => (ni(e, t, "read from private field"), n ? n.call(e) : t.get(e)), M = (e, t, n) => t.has(e) ? Ot("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ae = (e, t, n, r) => (ni(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Oo = (e, t, n) => (ni(e, t, "access private method"), n);
function qo(e, t) {
  return { plugin: e, options: t };
}
function je(e) {
  return (t) => qo(e, t);
}
function fn(e) {
  return typeof e == "function" ? { plugin: e, options: void 0 } : e;
}
var Co, bn, ri, Kn;
Co = [_];
var G = class {
  constructor(e, t) {
    this.manager = e, this.options = t, M(this, ri, E(bn, 8, this, false)), E(bn, 11, this), M(this, Kn, /* @__PURE__ */ new Set());
  }
  enable() {
    this.disabled = false;
  }
  disable() {
    this.disabled = true;
  }
  isDisabled() {
    return P(() => this.disabled);
  }
  configure(e) {
    this.options = e;
  }
  registerEffect(e) {
    const t = ie(e.bind(this));
    return V(this, Kn).add(t), t;
  }
  destroy() {
    V(this, Kn).forEach((e) => e());
  }
  static configure(e) {
    return qo(this, e);
  }
};
bn = qt(null);
ri = /* @__PURE__ */ new WeakMap();
Kn = /* @__PURE__ */ new WeakMap();
T(bn, 4, "disabled", Co, G, ri);
st(bn, G);
var Pn = class extends G {
}, Gn, Qr = class {
  constructor(e) {
    this.manager = e, this.instances = /* @__PURE__ */ new Map(), M(this, Gn, []);
  }
  get values() {
    return Array.from(this.instances.values());
  }
  set values(e) {
    const t = e.map(fn).reduce((r, a) => {
      const i = r.find(({ plugin: s }) => s === a.plugin);
      return i ? (i.options = a.options, r) : [...r, a];
    }, []), n = t.map(({ plugin: r }) => r);
    for (const r of V(this, Gn)) if (!n.includes(r)) {
      if (r.prototype instanceof Pn) continue;
      this.unregister(r);
    }
    for (const { plugin: r, options: a } of t) this.register(r, a);
    ae(this, Gn, n);
  }
  get(e) {
    return this.instances.get(e);
  }
  register(e, t) {
    const n = this.instances.get(e);
    if (n) return n.options !== t && (n.options = t), n;
    const r = new e(this.manager, t);
    return this.instances.set(e, r), r;
  }
  unregister(e) {
    const t = this.instances.get(e);
    t && (t.destroy(), this.instances.delete(e));
  }
  destroy() {
    for (const e of this.instances.values()) e.destroy();
    this.instances.clear();
  }
};
Gn = /* @__PURE__ */ new WeakMap();
function Oc(e, t) {
  return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var Cn = [], pt, gt, qc = class extends G {
  constructor(e) {
    super(e), M(this, pt), M(this, gt), this.computeCollisions = this.computeCollisions.bind(this), ae(this, gt, at(Cn)), this.destroy = An(() => {
      const t = this.computeCollisions(), n = P(() => this.manager.dragOperation.position.current);
      if (t !== Cn) {
        const r = V(this, pt);
        if (ae(this, pt, n), r && n.x == r.x && n.y == r.y) return;
      } else ae(this, pt, void 0);
      V(this, gt).value = t;
    }, () => {
      const { dragOperation: t } = this.manager;
      t.status.initialized && this.forceUpdate();
    });
  }
  forceUpdate(e = true) {
    P(() => {
      e ? V(this, gt).value = this.computeCollisions() : ae(this, pt, void 0);
    });
  }
  computeCollisions(e, t) {
    const { registry: n, dragOperation: r } = this.manager, { source: a, shape: i, status: s } = r;
    if (!s.initialized || !i) return Cn;
    const o = [], l = [];
    for (const c of e ?? n.droppables) {
      if (c.disabled || a && !c.accepts(a)) continue;
      const u = t ?? c.collisionDetector;
      if (!u) continue;
      l.push(c), c.shape;
      const d = P(() => u({ droppable: c, dragOperation: r }));
      d && (c.collisionPriority != null && (d.priority = c.collisionPriority), o.push(d));
    }
    return l.length === 0 ? Cn : (o.sort(Oc), o);
  }
  get collisions() {
    return V(this, gt).value;
  }
};
pt = /* @__PURE__ */ new WeakMap();
gt = /* @__PURE__ */ new WeakMap();
var Lo, zo, Wo, ai, Vo, he, ii, wt, si, oi;
Wo = [_], zo = [_], Lo = [_];
var Ie = class Ge {
  constructor(t, n) {
    M(this, ii, E(he, 8, this)), E(he, 11, this), M(this, wt), M(this, si, E(he, 12, this)), E(he, 15, this), M(this, oi, E(he, 16, this)), E(he, 19, this);
    const { effects: r, id: a, data: i = {}, disabled: s = false, register: o = true } = t;
    let l = a;
    ae(this, wt, at(a)), this.manager = n, this.data = i, this.disabled = s, this.effects = () => {
      var c;
      return [() => {
        const { id: u, manager: d } = this;
        if (u !== l) return l = u, d?.registry.register(this), () => d?.registry.unregister(this);
      }, ...(c = r?.()) != null ? c : []];
    }, this.register = this.register.bind(this), this.unregister = this.unregister.bind(this), this.destroy = this.destroy.bind(this), n && o && queueMicrotask(this.register);
  }
  get id() {
    var t, n;
    const r = V(this, wt).value;
    return (n = (t = Ge.pendingIdChanges) == null ? void 0 : t.get(this)) != null ? n : r;
  }
  set id(t) {
    var n, r;
    const a = (r = (n = Ge.pendingIdChanges) == null ? void 0 : n.get(this)) != null ? r : V(this, wt).peek();
    t !== a && (Ge.pendingIdChanges || (Ge.pendingIdChanges = /* @__PURE__ */ new Map(), queueMicrotask(() => {
      var i;
      return Oo(i = Ge, ai, Vo).call(i);
    })), Ge.pendingIdChanges.set(this, t));
  }
  register() {
    var t;
    return (t = this.manager) == null ? void 0 : t.registry.register(this);
  }
  unregister() {
    var t;
    (t = this.manager) == null || t.registry.unregister(this);
  }
  destroy() {
    var t;
    (t = this.manager) == null || t.registry.unregister(this);
  }
};
he = qt(null);
ai = /* @__PURE__ */ new WeakSet();
Vo = function() {
  const e = Ie.pendingIdChanges;
  Ie.pendingIdChanges = null, e && W(() => {
    for (const [t, n] of e) V(t, wt).value = n;
  });
};
ii = /* @__PURE__ */ new WeakMap();
wt = /* @__PURE__ */ new WeakMap();
si = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
T(he, 4, "manager", Wo, Ie, ii);
T(he, 4, "data", zo, Ie, si);
T(he, 4, "disabled", Lo, Ie, oi);
M(Ie, ai);
st(he, Ie);
Ie.pendingIdChanges = null;
var Nr = Ie, ws = class {
  constructor() {
    this.map = at(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
      const n = this.map.peek(), r = n.get(e), a = () => this.unregister(e, t);
      if (r === t) return a;
      if (r && r.id === e) {
        const o = this.cleanupFunctions.get(r);
        o?.(), this.cleanupFunctions.delete(r);
      }
      const i = new Map(n);
      for (const [o, l] of n) if (l === t && o !== e) {
        i.delete(o);
        break;
      }
      i.set(e, t), this.map.value = i;
      const s = An(...t.effects());
      return this.cleanupFunctions.set(t, s), a;
    }, this.unregister = (e, t) => {
      const n = this.map.peek();
      if (n.get(e) !== t) return;
      const r = this.cleanupFunctions.get(t);
      r?.(), this.cleanupFunctions.delete(t);
      const a = new Map(n);
      a.delete(e), this.map.value = a;
    };
  }
  [Symbol.iterator]() {
    return this.map.peek().values();
  }
  get value() {
    return this.map.value.values();
  }
  has(e) {
    return this.map.value.has(e);
  }
  get(e) {
    return this.map.value.get(e);
  }
  destroy() {
    for (const e of this) {
      const t = this.cleanupFunctions.get(e);
      t?.(), e.destroy();
    }
    this.map.value = /* @__PURE__ */ new Map();
  }
}, jo, $o, Fo, Uo, Ho, Bo, Ea, Z, li, di, ci, ve = class extends (Ea = Nr, Bo = [_], Ho = [_], Uo = [_], Fo = [U], $o = [U], jo = [U], Ea) {
  constructor(t, n) {
    var r = t, { modifiers: a, type: i, sensors: s, plugins: o, effects: l } = r, c = Ro(r, ["modifiers", "type", "sensors", "plugins", "effects"]);
    super(ti(ei({}, c), { effects: () => {
      var u;
      return [...(u = l?.()) != null ? u : [], () => {
        const { manager: d, plugins: m } = this;
        if (!(!d || !m)) for (const p of m) {
          const { plugin: y } = fn(p);
          d.registry.plugins.register(y);
        }
      }];
    } }), n), E(Z, 5, this), M(this, li, E(Z, 8, this)), E(Z, 11, this), M(this, di, E(Z, 12, this)), E(Z, 15, this), M(this, ci, E(Z, 16, this, this.isDragSource ? "dragging" : "idle")), E(Z, 19, this), this.type = i, this.sensors = s, this.modifiers = a, this.alignment = c.alignment, this.plugins = o;
  }
  pluginConfig(t) {
    if (this.plugins) for (const n of this.plugins) {
      const r = fn(n);
      if (r.plugin === t) return r.options;
    }
  }
  get isDropping() {
    return this.status === "dropping" && this.isDragSource;
  }
  get isDragging() {
    return this.status === "dragging" && this.isDragSource;
  }
  get isDragSource() {
    var t, n;
    return ((n = (t = this.manager) == null ? void 0 : t.dragOperation.source) == null ? void 0 : n.id) === this.id;
  }
};
Z = qt(Ea);
li = /* @__PURE__ */ new WeakMap();
di = /* @__PURE__ */ new WeakMap();
ci = /* @__PURE__ */ new WeakMap();
T(Z, 4, "type", Bo, ve, li);
T(Z, 4, "modifiers", Ho, ve, di);
T(Z, 4, "status", Uo, ve, ci);
T(Z, 2, "isDropping", Fo, ve);
T(Z, 2, "isDragging", $o, ve);
T(Z, 2, "isDragSource", jo, ve);
st(Z, ve);
var Ko, Go, Yo, Xo, Zo, Jo, Aa, F, ui, hi, mi, pi, gi, xe = class extends (Aa = Nr, Jo = [_], Zo = [_], Xo = [_], Yo = [_], Go = [_], Ko = [U], Aa) {
  constructor(t, n) {
    var r = t, { accept: a, collisionDetector: i, collisionPriority: s, type: o } = r, l = Ro(r, ["accept", "collisionDetector", "collisionPriority", "type"]);
    super(l, n), E(F, 5, this), M(this, ui, E(F, 8, this)), E(F, 11, this), M(this, hi, E(F, 12, this)), E(F, 15, this), M(this, mi, E(F, 16, this)), E(F, 19, this), M(this, pi, E(F, 20, this)), E(F, 23, this), M(this, gi, E(F, 24, this)), E(F, 27, this), this.accept = a, this.collisionDetector = i, this.collisionPriority = s, this.type = o;
  }
  accepts(t) {
    const { accept: n } = this;
    return n ? typeof n == "function" ? n(t) : t.type ? Array.isArray(n) ? n.includes(t.type) : t.type === n : false : true;
  }
  get isDropTarget() {
    var t, n;
    return ((n = (t = this.manager) == null ? void 0 : t.dragOperation.target) == null ? void 0 : n.id) === this.id;
  }
};
F = qt(Aa);
ui = /* @__PURE__ */ new WeakMap();
hi = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakMap();
pi = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakMap();
T(F, 4, "accept", Jo, xe, ui);
T(F, 4, "type", Zo, xe, hi);
T(F, 4, "collisionDetector", Xo, xe, mi);
T(F, 4, "collisionPriority", Yo, xe, pi);
T(F, 4, "shape", Go, xe, gi);
T(F, 2, "isDropTarget", Ko, xe);
st(F, xe);
var Cc = class {
  constructor() {
    this.registry = /* @__PURE__ */ new Map();
  }
  addEventListener(e, t) {
    const { registry: n } = this, r = new Set(n.get(e));
    return r.add(t), n.set(e, r), () => this.removeEventListener(e, t);
  }
  removeEventListener(e, t) {
    const { registry: n } = this, r = new Set(n.get(e));
    r.delete(t), n.set(e, r);
  }
  dispatch(e, ...t) {
    const { registry: n } = this, r = n.get(e);
    if (r) for (const a of r) a(...t);
  }
}, Lc = class extends Cc {
  constructor(e) {
    super(), this.manager = e;
  }
  dispatch(e, t) {
    const n = [t, this.manager];
    super.dispatch(e, ...n);
  }
};
function Yn(e, t = true) {
  let n = false;
  return ti(ei({}, e), { cancelable: t, get defaultPrevented() {
    return n;
  }, preventDefault() {
    t && (n = true);
  } });
}
var zc = class extends Pn {
  constructor(e) {
    super(e);
    const t = (r, a) => r.map(({ id: i }) => i).join("") === a.map(({ id: i }) => i).join("");
    let n = [];
    this.destroy = An(() => {
      const { dragOperation: r, collisionObserver: a } = e;
      r.status.initializing && (n = [], a.enable());
    }, () => {
      const { collisionObserver: r, monitor: a } = e, { collisions: i } = r;
      if (r.isDisabled() || Nr.pendingIdChanges) return;
      const s = Yn({ collisions: i });
      if (a.dispatch("collision", s), s.defaultPrevented || t(i, n)) return;
      n = i;
      const [o] = i;
      P(() => {
        var l;
        o?.id !== ((l = e.dragOperation.target) == null ? void 0 : l.id) && (r.disable(), e.actions.setDropTarget(o?.id).then(() => {
          r.enable();
        }));
      });
    });
  }
}, Or = ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(Or || {}), qr = ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(qr || {}), Qo, el, tl, nl, rl, al, il, ce, fi;
il = [_], al = [U], rl = [U], nl = [U], tl = [U], el = [U], Qo = [U];
var _e = class {
  constructor() {
    E(ce, 5, this), M(this, fi, E(ce, 8, this, "idle")), E(ce, 11, this);
  }
  get current() {
    return this.value;
  }
  get idle() {
    return this.value === "idle";
  }
  get initializing() {
    return this.value === "initializing";
  }
  get initialized() {
    const { value: e } = this;
    return e !== "idle" && e !== "initialization-pending";
  }
  get dragging() {
    return this.value === "dragging";
  }
  get dropped() {
    return this.value === "dropped";
  }
  set(e) {
    this.value = e;
  }
};
ce = qt(null);
fi = /* @__PURE__ */ new WeakMap();
T(ce, 4, "value", il, _e, fi);
T(ce, 2, "current", al, _e);
T(ce, 2, "idle", rl, _e);
T(ce, 2, "initializing", nl, _e);
T(ce, 2, "initialized", tl, _e);
T(ce, 2, "dragging", el, _e);
T(ce, 2, "dropped", Qo, _e);
st(ce, _e);
var Wc = class {
  constructor(e) {
    this.manager = e;
  }
  setDragSource(e) {
    const { dragOperation: t } = this.manager;
    t.sourceIdentifier = typeof e == "string" || typeof e == "number" ? e : e.id;
  }
  setDropTarget(e) {
    return P(() => {
      const { dragOperation: t } = this.manager, n = e ?? null;
      if (t.targetIdentifier === n) return Promise.resolve(false);
      t.targetIdentifier = n;
      const r = Yn({ operation: t.snapshot() });
      return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
    });
  }
  start(e) {
    return P(() => {
      const { dragOperation: t } = this.manager;
      if (e.source != null && this.setDragSource(e.source), !t.source) throw new Error("Cannot start a drag operation without a drag source");
      if (!t.status.idle) throw new Error("Cannot start a drag operation while another is active");
      const r = new AbortController(), { event: a, coordinates: i } = e;
      W(() => {
        t.status.set("initialization-pending"), t.shape = null, t.canceled = false, t.activatorEvent = a ?? null, t.position.reset(i);
      });
      const s = Yn({ operation: t.snapshot() });
      return this.manager.monitor.dispatch("beforedragstart", s), s.defaultPrevented ? (t.reset(), r.abort(), r) : (t.status.set("initializing"), t.controller = r, this.manager.renderer.rendering.then(() => {
        if (r.signal.aborted) return;
        const { status: o } = t;
        o.current === "initializing" && W(() => {
          t.status.set("dragging"), this.manager.monitor.dispatch("dragstart", { nativeEvent: a, operation: t.snapshot(), cancelable: false });
        });
      }), r);
    });
  }
  move(e) {
    return P(() => {
      var t, n;
      const { dragOperation: r } = this.manager, { status: a, controller: i } = r;
      if (!a.dragging || !i || i.signal.aborted) return;
      const s = Yn({ nativeEvent: e.event, operation: r.snapshot(), by: e.by, to: e.to }, (t = e.cancelable) != null ? t : true);
      ((n = e.propagate) == null || n) && this.manager.monitor.dispatch("dragmove", s), queueMicrotask(() => {
        var o, l, c, u, d;
        if (s.defaultPrevented) return;
        const m = (d = e.to) != null ? d : { x: r.position.current.x + ((l = (o = e.by) == null ? void 0 : o.x) != null ? l : 0), y: r.position.current.y + ((u = (c = e.by) == null ? void 0 : c.y) != null ? u : 0) };
        r.position.current = m;
      });
    });
  }
  stop(e = {}) {
    return P(() => {
      var t, n;
      const { dragOperation: r } = this.manager, { controller: a } = r;
      if (!a || a.signal.aborted) return;
      let i;
      const s = () => {
        const l = { resume: () => {
        }, abort: () => {
        } };
        return i = new Promise((c, u) => {
          l.resume = c, l.abort = u;
        }), l;
      };
      a.abort();
      const o = () => {
        this.manager.renderer.rendering.then(() => {
          r.status.set("dropped");
          const l = P(() => {
            var u;
            return ((u = r.source) == null ? void 0 : u.status) === "dropping";
          }), c = () => {
            r.controller === a && (r.controller = void 0), r.reset();
          };
          if (l) {
            const { source: u } = r, d = ie(() => {
              u?.status === "idle" && (d(), c());
            });
          } else this.manager.renderer.rendering.then(c);
        });
      };
      r.canceled = (t = e.canceled) != null ? t : false, this.manager.monitor.dispatch("dragend", { nativeEvent: e.event, operation: r.snapshot(), canceled: (n = e.canceled) != null ? n : false, suspend: s }), i ? i.then(o).catch(() => r.reset()) : o();
    });
  }
}, Et = class extends G {
  constructor(e, t) {
    super(e, t), this.manager = e, this.options = t;
  }
}, Vc = class extends AbortController {
  constructor(e, t) {
    super(), this.constraints = e, this.onActivate = t, this.activated = false;
    for (const n of e ?? []) n.controller = this;
  }
  onEvent(e) {
    var t;
    if (!this.activated) if ((t = this.constraints) != null && t.length) for (const n of this.constraints) n.onEvent(e);
    else this.activate(e);
  }
  activate(e) {
    this.activated || (this.activated = true, this.onActivate(e));
  }
  abort(e) {
    this.activated = false, super.abort(e);
  }
}, Xn, sl = class {
  constructor(e) {
    this.options = e, M(this, Xn);
  }
  set controller(e) {
    ae(this, Xn, e), e.signal.addEventListener("abort", () => this.abort());
  }
  activate(e) {
    var t;
    (t = V(this, Xn)) == null || t.activate(e);
  }
};
Xn = /* @__PURE__ */ new WeakMap();
var yn = class extends G {
  constructor(e, t) {
    super(e, t), this.manager = e, this.options = t;
  }
  apply(e) {
    return e.transform;
  }
}, jc = class {
  constructor(e) {
    this.draggables = new ws(), this.droppables = new ws(), this.plugins = new Qr(e), this.sensors = new Qr(e), this.modifiers = new Qr(e);
  }
  register(e, t) {
    if (e instanceof ve) return this.draggables.register(e.id, e);
    if (e instanceof xe) return this.droppables.register(e.id, e);
    if (e.prototype instanceof yn) return this.modifiers.register(e, t);
    if (e.prototype instanceof Et) return this.sensors.register(e, t);
    if (e.prototype instanceof G) return this.plugins.register(e, t);
    throw new Error("Invalid instance type");
  }
  unregister(e) {
    if (e instanceof Nr) return e instanceof ve ? this.draggables.unregister(e.id, e) : e instanceof xe ? this.droppables.unregister(e.id, e) : () => {
    };
    if (e.prototype instanceof yn) return this.modifiers.unregister(e);
    if (e.prototype instanceof Et) return this.sensors.unregister(e);
    if (e.prototype instanceof G) return this.plugins.unregister(e);
    throw new Error("Invalid instance type");
  }
  destroy() {
    this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
  }
}, ol, ll, dl, cl, ul, hl, ml, pl, gl, Kt, Zn, ft, L, bi, yi, vi, xi, wi, Gt;
gl = [U], pl = [_], ml = [_], hl = [_], ul = [_], cl = [_], dl = [U], ll = [U], ol = [U];
var ge = class {
  constructor(e) {
    E(L, 5, this), M(this, Kt), M(this, Zn), M(this, ft, new Nt(void 0, (t, n) => t && n ? t.equals(n) : t === n)), this.status = new _e(), M(this, bi, E(L, 8, this, false)), E(L, 11, this), M(this, yi, E(L, 12, this, null)), E(L, 15, this), M(this, vi, E(L, 16, this, null)), E(L, 19, this), M(this, xi, E(L, 20, this, null)), E(L, 23, this), M(this, wi, E(L, 24, this, [])), E(L, 27, this), this.position = new Rr({ x: 0, y: 0 }), M(this, Gt, { x: 0, y: 0 }), ae(this, Kt, e);
  }
  get shape() {
    const { current: e, initial: t, previous: n } = V(this, ft);
    return !e || !t ? null : { current: e, initial: t, previous: n };
  }
  set shape(e) {
    e ? V(this, ft).current = e : V(this, ft).reset();
  }
  get source() {
    var e;
    const t = this.sourceIdentifier;
    if (t == null) return null;
    const n = V(this, Kt).registry.draggables.get(t);
    return n && ae(this, Zn, n), (e = n ?? V(this, Zn)) != null ? e : null;
  }
  get target() {
    var e;
    const t = this.targetIdentifier;
    return t != null && (e = V(this, Kt).registry.droppables.get(t)) != null ? e : null;
  }
  get transform() {
    const { x: e, y: t } = this.position.delta;
    let n = { x: e, y: t };
    for (const r of this.modifiers) n = r.apply(ti(ei({}, this.snapshot()), { transform: n }));
    return ae(this, Gt, n), n;
  }
  snapshot() {
    return P(() => ({ source: this.source, target: this.target, activatorEvent: this.activatorEvent, transform: V(this, Gt), shape: this.shape ? Jr(this.shape) : null, position: Jr(this.position), status: Jr(this.status), canceled: this.canceled }));
  }
  reset() {
    W(() => {
      this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, V(this, ft).reset(), this.position.reset({ x: 0, y: 0 }), ae(this, Gt, { x: 0, y: 0 }), this.modifiers = [];
    });
  }
};
L = qt(null);
Kt = /* @__PURE__ */ new WeakMap();
Zn = /* @__PURE__ */ new WeakMap();
ft = /* @__PURE__ */ new WeakMap();
bi = /* @__PURE__ */ new WeakMap();
yi = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakMap();
xi = /* @__PURE__ */ new WeakMap();
wi = /* @__PURE__ */ new WeakMap();
Gt = /* @__PURE__ */ new WeakMap();
T(L, 2, "shape", gl, ge);
T(L, 4, "canceled", pl, ge, bi);
T(L, 4, "activatorEvent", ml, ge, yi);
T(L, 4, "sourceIdentifier", hl, ge, vi);
T(L, 4, "targetIdentifier", ul, ge, xi);
T(L, 4, "modifiers", cl, ge, wi);
T(L, 2, "source", dl, ge);
T(L, 2, "target", ll, ge);
T(L, 2, "transform", ol, ge);
st(L, ge);
var $c = { get rendering() {
  return Promise.resolve();
} };
function me(e, t) {
  return typeof e == "function" ? e(t) : e ?? t;
}
var Fc = class {
  constructor(t) {
    this.destroy = () => {
      this.dragOperation.status.idle || this.actions.stop({ canceled: true }), this.dragOperation.modifiers.forEach((m) => m.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
    };
    var n;
    const r = t ?? {}, a = me(r.plugins, []), i = me(r.sensors, []), s = me(r.modifiers, []), o = (n = r.renderer) != null ? n : $c, l = new Lc(this), c = new jc(this);
    this.registry = c, this.monitor = l, this.renderer = o, this.actions = new Wc(this), this.dragOperation = new ge(this), this.collisionObserver = new qc(this), this.plugins = [zc, ...a], this.modifiers = s, this.sensors = i;
    const { destroy: u } = this, d = An(() => {
      var m, p, y;
      const v = P(() => this.dragOperation.modifiers), w = this.modifiers;
      for (const x of v) w.includes(x) || x.destroy();
      this.dragOperation.modifiers = (y = (p = (m = this.dragOperation.source) == null ? void 0 : m.modifiers) == null ? void 0 : p.map((x) => {
        const { plugin: h, options: g } = fn(x);
        return new h(this, g);
      })) != null ? y : w;
    });
    this.destroy = () => {
      d(), u();
    };
  }
  get plugins() {
    return this.registry.plugins.values;
  }
  set plugins(t) {
    this.registry.plugins.values = t;
  }
  get modifiers() {
    return this.registry.modifiers.values;
  }
  set modifiers(t) {
    this.registry.modifiers.values = t;
  }
  get sensors() {
    return this.registry.sensors.values;
  }
  set sensors(t) {
    this.registry.sensors.values = t;
  }
}, fl = (e) => {
  throw TypeError(e);
}, Di = (e, t, n) => t.has(e) || fl("Cannot " + n), k = (e, t, n) => (Di(e, t, "read from private field"), t.get(e)), ee = (e, t, n) => t.has(e) ? fl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), re = (e, t, n, r) => (Di(e, t, "write to private field"), t.set(e, n), n), bl = (e, t, n) => (Di(e, t, "access private method"), n);
function Cr(e) {
  return e ? e instanceof KeyframeEffect ? true : "getKeyframes" in e && typeof e.getKeyframes == "function" : false;
}
function yl(e, t) {
  const n = e.getAnimations();
  let r = null;
  for (const a of n) {
    if (a.playState !== "running") continue;
    const { effect: i } = a, o = (Cr(i) ? i.getKeyframes() : []).filter(t);
    o.length > 0 && (r = [o[o.length - 1], a]);
  }
  return r;
}
function ot(e) {
  const { width: t, height: n, top: r, left: a, bottom: i, right: s } = e.getBoundingClientRect();
  return { width: t, height: n, top: r, left: a, bottom: i, right: s };
}
function ki(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || t === "[object global]";
}
function _n(e) {
  return "nodeType" in e;
}
function se(e) {
  var t, n, r;
  return e ? ki(e) ? e : _n(e) ? "defaultView" in e ? (t = e.defaultView) != null ? t : window : (r = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? r : window : window : window;
}
function Ei(e) {
  const { Document: t } = se(e);
  return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function Pe(e) {
  return !e || ki(e) ? false : e instanceof se(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function vl(e) {
  return e instanceof se(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function Ct(e) {
  return e ? ki(e) ? e.document : _n(e) ? Ei(e) ? e : Pe(e) || vl(e) ? e.ownerDocument : document : document : document;
}
function xl(e) {
  var t, n, r, a;
  const { documentElement: i } = Ct(e), s = se(e).visualViewport, o = (t = s?.width) != null ? t : i.clientWidth, l = (n = s?.height) != null ? n : i.clientHeight, c = (r = s?.offsetTop) != null ? r : 0, u = (a = s?.offsetLeft) != null ? a : 0;
  return { top: c, left: u, right: u + o, bottom: c + l, width: o, height: l };
}
function Uc(e, t) {
  if (Hc(e) && e.open === false) return false;
  const { overflow: n, overflowX: r, overflowY: a } = getComputedStyle(e);
  return n === "visible" && r === "visible" && a === "visible";
}
function Hc(e) {
  return e.tagName === "DETAILS";
}
function At(e, t = e.getBoundingClientRect(), n = 0) {
  var r, a, i, s, o;
  let l = t;
  const { ownerDocument: c } = e, u = (r = c.defaultView) != null ? r : window;
  let d = e.parentElement;
  for (; d && d !== c.documentElement; ) {
    if (!Uc(d)) {
      const g = d.getBoundingClientRect(), b = n * (g.bottom - g.top), f = n * (g.right - g.left), D = n * (g.bottom - g.top), I = n * (g.right - g.left);
      l = { top: Math.max(l.top, g.top - b), right: Math.min(l.right, g.right + f), bottom: Math.min(l.bottom, g.bottom + D), left: Math.max(l.left, g.left - I), width: 0, height: 0 }, l.width = l.right - l.left, l.height = l.bottom - l.top;
    }
    d = d.parentElement;
  }
  const m = u.visualViewport, p = (a = m?.offsetTop) != null ? a : 0, y = (i = m?.offsetLeft) != null ? i : 0, v = (s = m?.width) != null ? s : u.innerWidth, w = (o = m?.height) != null ? o : u.innerHeight, x = n * w, h = n * v;
  return l = { top: Math.max(l.top, p - x), right: Math.min(l.right, y + v + h), bottom: Math.min(l.bottom, p + w + x), left: Math.max(l.left, y - h), width: 0, height: 0 }, l.width = l.right - l.left, l.height = l.bottom - l.top, l.width < 0 && (l.width = 0), l.height < 0 && (l.height = 0), l;
}
function It(e) {
  return { x: e.clientX, y: e.clientY };
}
var wl = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Ia(e = document, t = /* @__PURE__ */ new Set()) {
  if (t.has(e)) return [];
  t.add(e);
  const n = [e];
  for (const r of Array.from(e.querySelectorAll("iframe, frame"))) try {
    const a = r.contentDocument;
    a && !t.has(a) && n.push(...Ia(a, t));
  } catch {
  }
  try {
    const r = e.defaultView;
    if (r && r !== window.top) {
      const a = r.parent;
      a && a.document && a.document !== e && n.push(...Ia(a.document, t));
    }
  } catch {
  }
  return n;
}
function Ai() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Dl() {
  var e, t;
  const n = Ai() ? window.visualViewport : null;
  return { x: (e = n?.offsetLeft) != null ? e : 0, y: (t = n?.offsetTop) != null ? t : 0 };
}
function Ii(e) {
  return !e || !_n(e) ? false : e instanceof se(e).ShadowRoot;
}
function br(e) {
  if (e && _n(e)) {
    let t = e.getRootNode();
    if (Ii(t)) return t;
    if (t instanceof Document) return t;
  }
  return Ct(e);
}
function Pi(e) {
  return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Bc(e) {
  const t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(true), r = Array.from(e.querySelectorAll(t));
  return Array.from(n.querySelectorAll(t)).forEach((i, s) => {
    const o = r[s];
    if (Ds(i) && Ds(o) && (i.type !== "file" && (i.value = o.value), i.type === "radio" && i.name && (i.name = `Cloned__${i.name}`)), ks(i) && ks(o) && o.width > 0 && o.height > 0) {
      const l = i.getContext("2d");
      l?.drawImage(o, 0, 0);
    }
  }), n;
}
function Ds(e) {
  return "value" in e;
}
function ks(e) {
  return e.tagName === "CANVAS";
}
function kl(e, { x: t, y: n }) {
  const r = e.elementFromPoint(t, n);
  if (Kc(r)) {
    const { contentDocument: a } = r;
    if (a) {
      const { left: i, top: s } = r.getBoundingClientRect();
      return kl(a, { x: t - i, y: n - s });
    }
  }
  return r;
}
function Kc(e) {
  return e?.tagName === "IFRAME";
}
var Pa = /* @__PURE__ */ new WeakMap();
function Gc(e) {
  return e.closest(`
    input:not([disabled]),
    select:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled]),
    a[href],
    [contenteditable]:not([contenteditable="false"])
  `);
}
var El = class {
  constructor() {
    this.entries = /* @__PURE__ */ new Set(), this.clear = () => {
      for (const e of this.entries) {
        const [t, { type: n, listener: r, options: a }] = e;
        t.removeEventListener(n, r, a);
      }
      this.entries.clear();
    };
  }
  bind(e, t) {
    const n = Array.isArray(e) ? e : [e], r = Array.isArray(t) ? t : [t], a = [];
    for (const s of n) for (const o of r) {
      const { type: l, listener: c, options: u } = o, d = [s, o];
      s.addEventListener(l, c, u), this.entries.add(d), a.push(d);
    }
    const i = this.entries;
    return function() {
      for (const o of a) {
        const [l, { type: c, listener: u, options: d }] = o;
        l.removeEventListener(c, u, d), i.delete(o);
      }
    };
  }
};
function Pt(e) {
  const t = e?.ownerDocument.defaultView;
  if (t && t.self !== t.parent) return t.frameElement;
}
function Yc(e) {
  const t = /* @__PURE__ */ new Set();
  let n = Pt(e);
  for (; n; ) t.add(n), n = Pt(n);
  return t;
}
function Xc(e, t) {
  const n = setTimeout(e, t);
  return () => clearTimeout(n);
}
function Al(e, t) {
  const n = () => performance.now();
  let r, a;
  return function(...i) {
    const s = this;
    a ? (r?.(), r = Xc(() => {
      e.apply(s, i), a = n();
    }, t - (n() - a))) : (e.apply(s, i), a = n());
  };
}
function Zc(e, t) {
  return e === t ? true : !e || !t ? false : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function Jc(e, t = e.getBoundingClientRect()) {
  const { width: n, height: r } = At(e, t);
  return n > 0 && r > 0;
}
var Qc = wl ? ResizeObserver : class {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
}, Jn, eu = class extends Qc {
  constructor(e) {
    super((t) => {
      if (!k(this, Jn)) {
        re(this, Jn, true);
        return;
      }
      e(t, this);
    }), ee(this, Jn, false);
  }
};
Jn = /* @__PURE__ */ new WeakMap();
var Es = Array.from({ length: 100 }, (e, t) => t / 100), Il = 75, Ye, yr, Re, Xe, Yt, K, dn, Xt, vr, Pl, _l, Tl = class {
  constructor(e, t, n = { debug: false, skipInitial: false }) {
    this.element = e, this.callback = t, ee(this, vr), this.disconnect = () => {
      var i, s, o;
      re(this, dn, true), (i = k(this, Re)) == null || i.disconnect(), (s = k(this, Xe)) == null || s.disconnect(), k(this, Yt).disconnect(), (o = k(this, K)) == null || o.remove();
    }, ee(this, Ye, true), ee(this, yr), ee(this, Re), ee(this, Xe), ee(this, Yt), ee(this, K), ee(this, dn, false), ee(this, Xt, Al(() => {
      var i, s, o;
      const { element: l } = this;
      if ((i = k(this, Xe)) == null || i.disconnect(), k(this, dn) || !k(this, Ye) || !l.isConnected) return;
      const c = (s = l.ownerDocument) != null ? s : document, { innerHeight: u, innerWidth: d } = (o = c.defaultView) != null ? o : window, m = l.getBoundingClientRect(), p = At(l, m), { top: y, left: v, bottom: w, right: x } = p, h = -Math.floor(y), g = -Math.floor(v), b = -Math.floor(d - x), f = -Math.floor(u - w), D = `${h}px ${b}px ${f}px ${g}px`;
      this.boundingClientRect = m, re(this, Xe, new IntersectionObserver((I) => {
        const [S] = I, { intersectionRect: q } = S;
        (S.intersectionRatio !== 1 ? S.intersectionRatio : pe.intersectionRatio(q, At(l))) !== 1 && k(this, Xt).call(this);
      }, { threshold: Es, rootMargin: D, root: c })), k(this, Xe).observe(l), bl(this, vr, Pl).call(this);
    }, Il)), this.boundingClientRect = e.getBoundingClientRect(), re(this, Ye, Jc(e, this.boundingClientRect));
    let r = true;
    this.callback = (i) => {
      r && (r = false, n.skipInitial) || t(i);
    };
    const a = e.ownerDocument;
    n?.debug && (re(this, K, document.createElement("div")), k(this, K).style.background = "rgba(0,0,0,0.15)", k(this, K).style.position = "fixed", k(this, K).style.pointerEvents = "none", a.body.appendChild(k(this, K))), re(this, Yt, new IntersectionObserver((i) => {
      var s, o;
      const l = i[i.length - 1], { boundingClientRect: c, isIntersecting: u } = l, { width: d, height: m } = c, p = k(this, Ye);
      re(this, Ye, u), !(!d && !m) && (p && !u ? ((s = k(this, Xe)) == null || s.disconnect(), this.callback(null), (o = k(this, Re)) == null || o.disconnect(), re(this, Re, void 0), k(this, K) && (k(this, K).style.visibility = "hidden")) : k(this, Xt).call(this), u && !k(this, Re) && (re(this, Re, new eu(k(this, Xt))), k(this, Re).observe(e)));
    }, { threshold: Es, root: a })), k(this, Ye) && !n.skipInitial && this.callback(this.boundingClientRect), k(this, Yt).observe(e);
  }
};
Ye = /* @__PURE__ */ new WeakMap();
yr = /* @__PURE__ */ new WeakMap();
Re = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
Yt = /* @__PURE__ */ new WeakMap();
K = /* @__PURE__ */ new WeakMap();
dn = /* @__PURE__ */ new WeakMap();
Xt = /* @__PURE__ */ new WeakMap();
vr = /* @__PURE__ */ new WeakSet();
Pl = function() {
  k(this, dn) || (bl(this, vr, _l).call(this), !Zc(this.boundingClientRect, k(this, yr)) && (this.callback(this.boundingClientRect), re(this, yr, this.boundingClientRect)));
};
_l = function() {
  if (k(this, K)) {
    const { top: e, left: t, width: n, height: r } = At(this.element);
    k(this, K).style.overflow = "hidden", k(this, K).style.visibility = "visible", k(this, K).style.top = `${Math.floor(e)}px`, k(this, K).style.left = `${Math.floor(t)}px`, k(this, K).style.width = `${Math.floor(n)}px`, k(this, K).style.height = `${Math.floor(r)}px`;
  }
};
var Ln = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakMap();
function tu(e, t) {
  let n = Ln.get(e);
  return n || (n = { disconnect: new Tl(e, (a) => {
    const i = Ln.get(e);
    i && i.callbacks.forEach((s) => s(a));
  }, { skipInitial: true }).disconnect, callbacks: /* @__PURE__ */ new Set() }), n.callbacks.add(t), Ln.set(e, n), () => {
    n.callbacks.delete(t), n.callbacks.size === 0 && (Ln.delete(e), n.disconnect());
  };
}
function nu(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const a = tu(r, t);
    n.add(a);
  }
  return () => n.forEach((r) => r());
}
function ru(e, t) {
  var n;
  const r = e.ownerDocument;
  if (!zn.has(r)) {
    const s = new AbortController(), o = /* @__PURE__ */ new Set();
    document.addEventListener("scroll", (l) => o.forEach((c) => c(l)), { capture: true, passive: true, signal: s.signal }), zn.set(r, { disconnect: () => s.abort(), listeners: o });
  }
  const { listeners: a, disconnect: i } = (n = zn.get(r)) != null ? n : {};
  return !a || !i ? () => {
  } : (a.add(t), () => {
    a.delete(t), a.size === 0 && (i(), zn.delete(r));
  });
}
var Zt, Jt, Qn, _a, au = class {
  constructor(e, t, n) {
    this.callback = t, ee(this, Zt), ee(this, Jt, false), ee(this, Qn), ee(this, _a, Al((s) => {
      if (!k(this, Jt) && s.target && "contains" in s.target && typeof s.target.contains == "function") {
        for (const o of k(this, Qn)) if (s.target.contains(o)) {
          this.callback(k(this, Zt).boundingClientRect);
          break;
        }
      }
    }, Il));
    const r = Yc(e), a = nu(r, t), i = ru(e, k(this, _a));
    re(this, Qn, r), re(this, Zt, new Tl(e, t, n)), this.disconnect = () => {
      k(this, Jt) || (re(this, Jt, true), a(), i(), k(this, Zt).disconnect());
    };
  }
};
Zt = /* @__PURE__ */ new WeakMap();
Jt = /* @__PURE__ */ new WeakMap();
Qn = /* @__PURE__ */ new WeakMap();
_a = /* @__PURE__ */ new WeakMap();
function Ta(e) {
  return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function Dt(e) {
  try {
    Ta(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
  } catch {
  }
}
function As(e) {
  return !wl || !e ? false : e === Ct(e).scrollingElement;
}
function Ml(e) {
  var t, n;
  const r = se(e), a = As(e) ? xl(e) : ot(e), i = r.visualViewport, s = As(e) ? { height: (t = i?.height) != null ? t : r.innerHeight, width: (n = i?.width) != null ? n : r.innerWidth } : { height: e.clientHeight, width: e.clientWidth }, o = { current: { x: e.scrollLeft, y: e.scrollTop }, max: { x: e.scrollWidth - s.width, y: e.scrollHeight - s.height } }, l = o.current.y <= 0, c = o.current.x <= 0, u = o.current.y >= o.max.y, d = o.current.x >= o.max.x;
  return { rect: a, position: o, isTop: l, isLeft: c, isBottom: u, isRight: d };
}
function _i(e, t) {
  const { isTop: n, isBottom: r, isLeft: a, isRight: i, position: s } = Ml(e), { x: o, y: l } = t ?? { x: 0, y: 0 }, c = !n && s.current.y + l > 0, u = !r && s.current.y + l < s.max.y, d = !a && s.current.x + o > 0, m = !i && s.current.x + o < s.max.x;
  return { top: c, bottom: u, left: d, right: m, x: d || m, y: c || u };
}
var Ti = class {
  constructor(t) {
    this.scheduler = t, this.pending = false, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
      const { tasks: n, resolvers: r } = this;
      this.pending = false, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
      for (const a of n) a();
      for (const a of r) a();
    };
  }
  schedule(t) {
    return this.tasks.add(t), this.pending || (this.pending = true, this.scheduler(this.flush)), new Promise((n) => this.resolvers.add(n));
  }
}, xr = new Ti((e) => {
  typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), iu = new Ti((e) => setTimeout(e, 50)), wr = /* @__PURE__ */ new Map(), su = wr.clear.bind(wr);
function fe(e, t = false) {
  if (!t) return Is(e);
  let n = wr.get(e);
  return n || (n = Is(e), wr.set(e, n), iu.schedule(su), n);
}
function Is(e) {
  return se(e).getComputedStyle(e);
}
function ou(e, t = fe(e, true)) {
  return t.position === "fixed" || t.position === "sticky";
}
function lu(e, t = fe(e, true)) {
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((a) => {
    const i = t[a];
    return typeof i == "string" ? n.test(i) : false;
  });
}
var du = { excludeElement: true, escapeShadowDOM: true };
function Dr(e, t = du) {
  const { limit: n, excludeElement: r, escapeShadowDOM: a } = t, i = /* @__PURE__ */ new Set();
  function s(o) {
    if (n != null && i.size >= n || !o) return i;
    if (Ei(o) && o.scrollingElement != null && !i.has(o.scrollingElement)) return i.add(o.scrollingElement), i;
    if (a && Ii(o)) return s(o.host);
    if (!Pe(o)) return vl(o) ? s(o.parentElement) : i;
    if (i.has(o)) return i;
    const l = fe(o, true);
    if (r && o === e || lu(o, l) && i.add(o), ou(o, l)) {
      const { scrollingElement: c } = o.ownerDocument;
      return c && i.add(c), i;
    }
    return s(o.parentNode);
  }
  return e ? s(e) : i;
}
function tt(e, t = window.frameElement) {
  const n = { x: 0, y: 0, scaleX: 1, scaleY: 1 };
  if (!e) return n;
  let r = Pt(e);
  for (; r; ) {
    if (r === t) return n;
    const a = ot(r), { x: i, y: s } = cu(r, a);
    n.x = n.x + a.left, n.y = n.y + a.top, n.scaleX = n.scaleX * i, n.scaleY = n.scaleY * s, r = Pt(r);
  }
  return n;
}
function cu(e, t = ot(e)) {
  const n = Math.round(t.width), r = Math.round(t.height);
  if (Pe(e)) return { x: n / e.offsetWidth, y: r / e.offsetHeight };
  const a = fe(e, true);
  return { x: (parseFloat(a.width) || n) / n, y: (parseFloat(a.height) || r) / r };
}
function uu(e) {
  if (!e || e === "none") return null;
  const t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
  return isNaN(n) && isNaN(r) ? null : { x: isNaN(n) ? r : n, y: isNaN(r) ? n : r };
}
function vn(e) {
  if (!e || e === "none") return null;
  const [t, n, r = "0"] = e.split(" "), a = { x: parseFloat(t), y: parseFloat(n), z: parseInt(r, 10) };
  return isNaN(a.x) && isNaN(a.y) ? null : { x: isNaN(a.x) ? 0 : a.x, y: isNaN(a.y) ? 0 : a.y, z: isNaN(a.z) ? 0 : a.z };
}
function Lr(e) {
  var t, n, r, a, i, s, o, l, c;
  const { scale: u, transform: d, translate: m } = e, p = uu(u), y = vn(m), v = hu(d);
  if (!v && !p && !y) return null;
  const w = { x: (t = p?.x) != null ? t : 1, y: (n = p?.y) != null ? n : 1 }, x = { x: (r = y?.x) != null ? r : 0, y: (a = y?.y) != null ? a : 0 }, h = { x: (i = v?.x) != null ? i : 0, y: (s = v?.y) != null ? s : 0, scaleX: (o = v?.scaleX) != null ? o : 1, scaleY: (l = v?.scaleY) != null ? l : 1 };
  return { x: x.x + h.x, y: x.y + h.y, z: (c = y?.z) != null ? c : 0, scaleX: w.x * h.scaleX, scaleY: w.y * h.scaleY };
}
function hu(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] };
  }
  return null;
}
var A = ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(A || {}), mu = { x: 0.2, y: 0.2 }, pu = { x: 10, y: 10 };
function Sl(e, t, n, r = 25, a = mu, i = pu) {
  const { x: s, y: o } = t, { rect: l, isTop: c, isBottom: u, isLeft: d, isRight: m } = Ml(e), p = tt(e), y = fe(e, true), v = Lr(y), w = v !== null ? v?.scaleX < 0 : false, x = v !== null ? v?.scaleY < 0 : false, h = new pe(l.left * p.scaleX + p.x, l.top * p.scaleY + p.y, l.width * p.scaleX, l.height * p.scaleY), g = { x: 0, y: 0 }, b = { x: 0, y: 0 }, f = { height: h.height * a.y, width: h.width * a.x };
  return f.height > 0 && (!c || x && !u) && o <= h.top + f.height && n?.y !== 1 && s >= h.left - i.x && s <= h.right + i.x ? (g.y = x ? 1 : -1, b.y = r * Math.abs((h.top + f.height - o) / f.height)) : f.height > 0 && (!u || x && !c) && o >= h.bottom - f.height && n?.y !== -1 && s >= h.left - i.x && s <= h.right + i.x && (g.y = x ? -1 : 1, b.y = r * Math.abs((h.bottom - f.height - o) / f.height)), f.width > 0 && (!m || w && !d) && s >= h.right - f.width && n?.x !== -1 && o >= h.top - i.y && o <= h.bottom + i.y ? (g.x = w ? -1 : 1, b.x = r * Math.abs((h.right - f.width - s) / f.width)) : f.width > 0 && (!d || w && !m) && s <= h.left + f.width && n?.x !== 1 && o >= h.top - i.y && o <= h.bottom + i.y && (g.x = w ? 1 : -1, b.x = r * Math.abs((h.left + f.width - s) / f.width)), { direction: g, speed: b };
}
function Rl(e, { block: t = "nearest", inline: n = "nearest" } = {}) {
  if (!Pe(e)) return;
  const r = Dr(e), a = [];
  for (const i of r) {
    if (!Pe(i)) continue;
    const { top: s, left: o } = gu(e, i);
    let l = s, c = o;
    for (const u of a) l -= u.scrollTop, c -= u.scrollLeft;
    if (t !== "none") {
      const u = l < i.scrollTop, d = l + e.offsetHeight > i.scrollTop + i.clientHeight;
      u !== d && (t === "center" ? i.scrollTop = l - i.clientHeight / 2 + e.offsetHeight / 2 : u ? i.scrollTop = l : i.scrollTop = l + e.offsetHeight - i.clientHeight);
    }
    if (n !== "none") {
      const u = c < i.scrollLeft, d = c + e.offsetWidth > i.scrollLeft + i.clientWidth;
      u !== d && (n === "center" ? i.scrollLeft = c - i.clientWidth / 2 + e.offsetWidth / 2 : u ? i.scrollLeft = c : i.scrollLeft = c + e.offsetWidth - i.clientWidth);
    }
    a.push(i);
  }
}
function Ps(e) {
  let t = 0, n = 0, r = e;
  for (; r; ) {
    t += r.offsetTop, n += r.offsetLeft;
    const a = r.offsetParent;
    if (!Pe(a)) break;
    t += a.clientTop, n += a.clientLeft, r = a;
  }
  return { top: t, left: n };
}
function gu(e, t) {
  const n = Ps(e), r = Ps(t);
  return { top: n.top - r.top - t.clientTop, left: n.left - r.left - t.clientLeft };
}
function fu(e, t, n) {
  const { scaleX: r, scaleY: a, x: i, y: s } = t, o = e.left + i + (1 - r) * parseFloat(n), l = e.top + s + (1 - a) * parseFloat(n.slice(n.indexOf(" ") + 1)), c = r ? e.width * r : e.width, u = a ? e.height * a : e.height;
  return { width: c, height: u, top: l, right: o + c, bottom: l + u, left: o };
}
function bu(e, t, n) {
  const { scaleX: r, scaleY: a, x: i, y: s } = t, o = e.left - i - (1 - r) * parseFloat(n), l = e.top - s - (1 - a) * parseFloat(n.slice(n.indexOf(" ") + 1)), c = r ? e.width / r : e.width, u = a ? e.height / a : e.height;
  return { width: c, height: u, top: l, right: o + c, bottom: l + u, left: o };
}
function Nl({ element: e, keyframes: t, options: n }) {
  return e.animate(t, n).finished;
}
function _s(e, t = fe(e).translate, n = true) {
  if (n) {
    const r = yl(e, (a) => "translate" in a);
    if (r) {
      const { translate: a = "" } = r[0];
      if (typeof a == "string") {
        const i = vn(a);
        if (i) return i;
      }
    }
  }
  if (t) {
    const r = vn(t);
    if (r) return r;
  }
  return { x: 0, y: 0, z: 0 };
}
var yu = new Ti((e) => setTimeout(e, 0)), cn = /* @__PURE__ */ new Map(), vu = cn.clear.bind(cn);
function xu(e) {
  const t = e.ownerDocument;
  let n = cn.get(t);
  if (n) return n;
  n = t.getAnimations(), cn.set(t, n), yu.schedule(vu);
  const r = n.filter((a) => Cr(a.effect) && a.effect.target === e);
  return cn.set(e, r), n;
}
function wu(e, t) {
  const n = xu(e).filter((r) => {
    var a, i;
    if (Cr(r.effect)) {
      const { target: s } = r.effect;
      if ((i = s && ((a = t.isValidTarget) == null ? void 0 : a.call(t, s))) != null ? i : true) return r.effect.getKeyframes().some((l) => {
        for (const c of t.properties) if (l[c]) return true;
      });
    }
  }).map((r) => {
    const { effect: a, currentTime: i } = r, s = a?.getComputedTiming().duration;
    if (!(r.pending || r.playState === "finished") && typeof s == "number" && typeof i == "number" && i < s) return r.currentTime = s, () => {
      r.currentTime = i;
    };
  });
  if (n.length > 0) return () => n.forEach((r) => r?.());
}
var ye = class extends pe {
  constructor(e, t = {}) {
    var n, r, a, i;
    const { frameTransform: s = tt(e), ignoreTransforms: o, getBoundingClientRect: l = ot } = t, c = wu(e, { properties: ["transform", "translate", "scale", "width", "height"], isValidTarget: (f) => (f !== e || Ai()) && f.contains(e) }), u = l(e);
    let { top: d, left: m, width: p, height: y } = u, v;
    const w = fe(e), x = Lr(w), h = { x: (n = x?.scaleX) != null ? n : 1, y: (r = x?.scaleY) != null ? r : 1 }, g = Du(e, w);
    c?.(), x && (v = bu(u, x, w.transformOrigin), (o || g) && (d = v.top, m = v.left, p = v.width, y = v.height));
    const b = { width: (a = v?.width) != null ? a : p, height: (i = v?.height) != null ? i : y };
    if (g && !o && v) {
      const f = fu(v, g, w.transformOrigin);
      d = f.top, m = f.left, p = f.width, y = f.height, h.x = g.scaleX, h.y = g.scaleY;
    }
    s && (o || (m *= s.scaleX, p *= s.scaleX, d *= s.scaleY, y *= s.scaleY), m += s.x, d += s.y), super(m, d, p, y), this.scale = h, this.intrinsicWidth = b.width, this.intrinsicHeight = b.height;
  }
};
function Du(e, t) {
  const n = e.getAnimations();
  if (!n.length) return null;
  let r, a, i, s = false;
  for (const o of n) {
    if (o.playState !== "running") continue;
    const l = Cr(o.effect) ? o.effect.getKeyframes() : [], c = l[l.length - 1];
    if (!c) continue;
    const { transform: u, translate: d, scale: m } = c;
    typeof u == "string" && u && (r = u, s = true), typeof d == "string" && d && (a = d, s = true), typeof m == "string" && m && (i = m, s = true);
  }
  return s ? Lr({ transform: r ?? t.transform, translate: a ?? t.translate, scale: i ?? t.scale }) : null;
}
function un(e) {
  return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var ku = class {
  constructor(e) {
    this.element = e, this.initial = /* @__PURE__ */ new Map();
  }
  set(e, t = "") {
    const { element: n } = this;
    if (un(n)) for (const [r, a] of Object.entries(e)) {
      const i = `${t}${r}`;
      this.initial.has(i) || this.initial.set(i, n.style.getPropertyValue(i)), n.style.setProperty(i, typeof a == "string" ? a : `${a}px`);
    }
  }
  remove(e, t = "") {
    const { element: n } = this;
    if (un(n)) for (const r of e) {
      const a = `${t}${r}`;
      n.style.removeProperty(a);
    }
  }
  reset() {
    const { element: e } = this;
    if (un(e)) {
      for (const [t, n] of this.initial) e.style.setProperty(t, n);
      e.getAttribute("style") === "" && e.removeAttribute("style");
    }
  }
};
function nt(e) {
  return e ? e instanceof se(e).Element || _n(e) && e.nodeType === Node.ELEMENT_NODE : false;
}
function xn(e) {
  if (!e) return false;
  const { KeyboardEvent: t } = se(e.target);
  return e instanceof t;
}
function Eu(e) {
  if (!e) return false;
  const { PointerEvent: t } = se(e.target);
  return e instanceof t;
}
function Au(e) {
  if (!nt(e)) return false;
  const { tagName: t } = e;
  return t === "INPUT" || t === "TEXTAREA" || Iu(e);
}
function Iu(e) {
  return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var ea = {};
function Ma(e) {
  const t = ea[e] == null ? 0 : ea[e] + 1;
  return ea[e] = t, `${e}-${t}`;
}
var Pu = ({ dragOperation: e, droppable: t }) => {
  const n = e.position.current;
  if (!n) return null;
  const { id: r } = t;
  if (!t.shape) return null;
  if (t.shape.containsPoint(n)) {
    const a = de.distance(t.shape.center, n);
    return { id: r, value: 1 / a, type: qr.PointerIntersection, priority: Or.High };
  }
  return null;
}, _u = ({ dragOperation: e, droppable: t }) => {
  const { shape: n } = e;
  if (!t.shape || !n?.current) return null;
  const r = n.current.intersectionArea(t.shape);
  if (r) {
    const { position: a } = e, i = de.distance(t.shape.center, a.current), o = r / (n.current.area + t.shape.area - r) / i;
    return { id: t.id, value: o, type: qr.ShapeIntersection, priority: Or.Normal };
  }
  return null;
}, Ol = (e) => {
  var t;
  return (t = Pu(e)) != null ? t : _u(e);
}, Tu = (e) => {
  const { dragOperation: t, droppable: n } = e, { shape: r, position: a } = t;
  if (!n.shape) return null;
  const i = r ? pe.from(r.current.boundingRectangle).corners : void 0, o = pe.from(n.shape.boundingRectangle).corners.reduce((l, c, u) => {
    var d;
    return l + de.distance(de.from(c), (d = i?.[u]) != null ? d : a.current);
  }, 0) / 4;
  return { id: n.id, value: 1 / o, type: qr.Collision, priority: Or.Normal };
}, Mu = Object.create, Mi = Object.defineProperty, Su = Object.defineProperties, Ru = Object.getOwnPropertyDescriptor, Nu = Object.getOwnPropertyDescriptors, kr = Object.getOwnPropertySymbols, ql = Object.prototype.hasOwnProperty, Cl = Object.prototype.propertyIsEnumerable, Ll = (e, t) => (t = Symbol[e]) ? t : /* @__PURE__ */ Symbol.for("Symbol." + e), Lt = (e) => {
  throw TypeError(e);
}, Sa = (e, t, n) => t in e ? Mi(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n, wn = (e, t) => {
  for (var n in t || (t = {})) ql.call(t, n) && Sa(e, n, t[n]);
  if (kr) for (var n of kr(t)) Cl.call(t, n) && Sa(e, n, t[n]);
  return e;
}, Si = (e, t) => Su(e, Nu(t)), Ts = (e, t) => Mi(e, "name", { value: t, configurable: true }), zl = (e, t) => {
  var n = {};
  for (var r in e) ql.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && kr) for (var r of kr(e)) t.indexOf(r) < 0 && Cl.call(e, r) && (n[r] = e[r]);
  return n;
}, zt = (e) => {
  var t;
  return [, , , Mu((t = e?.[Ll("metadata")]) != null ? t : null)];
}, Wl = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Qt = (e) => e !== void 0 && typeof e != "function" ? Lt("Function expected") : e, Ou = (e, t, n, r, a) => ({ kind: Wl[e], name: t, metadata: r, addInitializer: (i) => n._ ? Lt("Already initialized") : a.push(Qt(i || null)) }), lt = (e, t) => Sa(t, Ll("metadata"), e[3]), H = (e, t, n, r) => {
  for (var a = 0, i = e[t >> 1], s = i && i.length; a < s; a++) t & 1 ? i[a].call(n) : r = i[a].call(n, r);
  return r;
}, ue = (e, t, n, r, a, i) => {
  var s, o, l, c, u, d = t & 7, m = !!(t & 8), p = !!(t & 16), y = d > 3 ? e.length + 1 : d ? m ? 1 : 2 : 0, v = Wl[d + 5], w = d > 3 && (e[y - 1] = []), x = e[y] || (e[y] = []), h = d && (!p && !m && (a = a.prototype), d < 5 && (d > 3 || !p) && Ru(d < 4 ? a : { get [n]() {
    return N(this, i);
  }, set [n](b) {
    return J(this, i, b);
  } }, n));
  d ? p && d < 4 && Ts(i, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Ts(a, n);
  for (var g = r.length - 1; g >= 0; g--) c = Ou(d, n, l = {}, e[3], x), d && (c.static = m, c.private = p, u = c.access = { has: p ? (b) => qu(a, b) : (b) => n in b }, d ^ 3 && (u.get = p ? (b) => (d ^ 1 ? N : rt)(b, a, d ^ 4 ? i : h.get) : (b) => b[n]), d > 2 && (u.set = p ? (b, f) => J(b, a, f, d ^ 4 ? i : h.set) : (b, f) => b[n] = f)), o = (0, r[g])(d ? d < 4 ? p ? i : h[v] : d > 4 ? void 0 : { get: h.get, set: h.set } : a, c), l._ = 1, d ^ 4 || o === void 0 ? Qt(o) && (d > 4 ? w.unshift(o) : d ? p ? i = o : h[v] = o : a = o) : typeof o != "object" || o === null ? Lt("Object expected") : (Qt(s = o.get) && (h.get = s), Qt(s = o.set) && (h.set = s), Qt(s = o.init) && w.unshift(s));
  return d || lt(e, a), h && Mi(a, n, h), p ? d ^ 4 ? i : h : a;
}, Ri = (e, t, n) => t.has(e) || Lt("Cannot " + n), qu = (e, t) => Object(t) !== t ? Lt('Cannot use the "in" operator on this value') : e.has(t), N = (e, t, n) => (Ri(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => t.has(e) ? Lt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), J = (e, t, n, r) => (Ri(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), rt = (e, t, n) => (Ri(e, t, "access private method"), n), Ms = { role: "button", roleDescription: "draggable" }, Cu = "dnd-kit-description", Lu = "dnd-kit-announcement", zu = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, Wu = { dragstart({ operation: { source: e } }) {
  if (e) return `Picked up draggable item ${e.id}.`;
}, dragover({ operation: { source: e, target: t } }) {
  if (!(!e || e.id === t?.id)) return t ? `Draggable item ${e.id} was moved over droppable target ${t.id}.` : `Draggable item ${e.id} is no longer over a droppable target.`;
}, dragend({ operation: { source: e, target: t }, canceled: n }) {
  if (e) return n ? `Dragging was cancelled. Draggable item ${e.id} was dropped.` : t ? `Draggable item ${e.id} was dropped over droppable target ${t.id}` : `Draggable item ${e.id} was dropped.`;
} };
function Vu(e) {
  const t = e.tagName.toLowerCase();
  return ["input", "select", "textarea", "a", "button"].includes(t);
}
function ju(e, t) {
  const n = document.createElement("div");
  return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function $u(e) {
  const t = document.createElement("div");
  return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var Fu = ["dragover", "dragmove"], Vl = class extends G {
  constructor(e, t) {
    super(e);
    const { id: n, idPrefix: { description: r = Cu, announcement: a = Lu } = {}, announcements: i = Wu, screenReaderInstructions: s = zu, debounce: o = 500 } = t ?? {}, l = n ? `${r}-${n}` : Ma(r), c = n ? `${a}-${n}` : Ma(a);
    let u, d, m, p;
    const y = (f = p) => {
      !m || !f || m?.nodeValue !== f && (m.nodeValue = f);
    }, v = () => xr.schedule(y), w = Uu(v, o), x = Object.entries(i).map(([f, D]) => this.manager.monitor.addEventListener(f, (I, S) => {
      const q = m;
      if (!q) return;
      const C = D?.(I, S);
      C && q.nodeValue !== C && (p = C, Fu.includes(f) ? w() : (v(), w.cancel()));
    })), h = () => {
      let f = [];
      u?.isConnected || (u = ju(l, s.draggable), f.push(u)), d?.isConnected || (d = $u(c), m = document.createTextNode(""), d.appendChild(m), f.push(d)), f.length > 0 && document.body.append(...f);
    }, g = /* @__PURE__ */ new Set();
    function b() {
      for (const f of g) f();
    }
    this.registerEffect(() => {
      var f;
      g.clear();
      for (const D of this.manager.registry.draggables.value) {
        const I = (f = D.handle) != null ? f : D.element;
        if (I) {
          (!u || !d) && g.add(h), (!Vu(I) || Ai()) && !I.hasAttribute("tabindex") && g.add(() => I.setAttribute("tabindex", "0")), !I.hasAttribute("role") && I.tagName.toLowerCase() !== "button" && g.add(() => I.setAttribute("role", Ms.role)), I.hasAttribute("aria-roledescription") || g.add(() => I.setAttribute("aria-roledescription", Ms.roleDescription)), I.hasAttribute("aria-describedby") || g.add(() => I.setAttribute("aria-describedby", l));
          for (const q of ["aria-pressed", "aria-grabbed"]) {
            const C = String(D.isDragging);
            I.getAttribute(q) !== C && g.add(() => I.setAttribute(q, C));
          }
          const S = String(D.disabled);
          I.getAttribute("aria-disabled") !== S && g.add(() => I.setAttribute("aria-disabled", S));
        }
      }
      g.size > 0 && xr.schedule(b);
    }), this.destroy = () => {
      super.destroy(), u?.remove(), d?.remove(), x.forEach((f) => f());
    };
  }
};
function Uu(e, t) {
  let n;
  const r = () => {
    clearTimeout(n), n = setTimeout(e, t);
  };
  return r.cancel = () => clearTimeout(n), r;
}
var Er = /* @__PURE__ */ new Map(), jl, $l, Fl, Ul, Ra, hn, Ae, Ni, _t, Hl, Bl, Kl, Gl, Ve = class extends (Ra = Pn, Ul = [_], Fl = [U], $l = [U], jl = [U], Ra) {
  constructor(t, n) {
    super(t, n), H(Ae, 5, this), j(this, _t), j(this, hn, /* @__PURE__ */ new Set()), j(this, Ni, H(Ae, 8, this, /* @__PURE__ */ new Set())), H(Ae, 11, this), this.registerEffect(rt(this, _t, Hl));
  }
  register(t) {
    return N(this, hn).add(t), () => {
      N(this, hn).delete(t);
    };
  }
  addRoot(t) {
    return P(() => {
      const n = new Set(this.additionalRoots);
      n.add(t), this.additionalRoots = n;
    }), () => {
      P(() => {
        const n = new Set(this.additionalRoots);
        n.delete(t), this.additionalRoots = n;
      });
    };
  }
  get sourceRoot() {
    var t;
    const { source: n } = this.manager.dragOperation;
    return br((t = n?.element) != null ? t : null);
  }
  get targetRoot() {
    var t;
    const { target: n } = this.manager.dragOperation;
    return br((t = n?.element) != null ? t : null);
  }
  get roots() {
    const { status: t } = this.manager.dragOperation;
    if (t.initializing || t.initialized) {
      const n = [this.sourceRoot, this.targetRoot].filter((r) => r != null);
      return /* @__PURE__ */ new Set([...n, ...this.additionalRoots]);
    }
    return /* @__PURE__ */ new Set();
  }
};
Ae = zt(Ra);
hn = /* @__PURE__ */ new WeakMap();
Ni = /* @__PURE__ */ new WeakMap();
_t = /* @__PURE__ */ new WeakSet();
Hl = function() {
  const { roots: e } = this, t = [];
  for (const n of e) for (const r of N(this, hn)) t.push(rt(this, _t, Bl).call(this, n, r));
  return () => {
    for (const n of t) n();
  };
};
Bl = function(e, t) {
  let n = Er.get(e);
  n || (n = /* @__PURE__ */ new Map(), Er.set(e, n));
  let r = n.get(t);
  if (!r) {
    const i = Ei(e) ? rt(this, _t, Kl).call(this, e, n, t) : rt(this, _t, Gl).call(this, e, n, t);
    if (!i) return () => {
    };
    r = i, n.set(t, r);
  }
  r.refCount++;
  let a = false;
  return () => {
    a || (a = true, r.refCount--, r.refCount === 0 && r.cleanup());
  };
};
Kl = function(e, t, n) {
  var r;
  const a = e.createElement("style"), { nonce: i } = (r = this.options) != null ? r : {};
  i && a.setAttribute("nonce", i), a.textContent = n, e.head.prepend(a);
  const s = new MutationObserver((o) => {
    for (const l of o) for (const c of Array.from(l.removedNodes)) if (c === a) {
      e.head.prepend(a);
      return;
    }
  });
  return s.observe(e.head, { childList: true }), { refCount: 0, cleanup: () => {
    s.disconnect(), a.remove(), t.delete(n), t.size === 0 && Er.delete(e);
  } };
};
Gl = function(e, t, n) {
  "adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets);
  const r = e.ownerDocument.defaultView, { CSSStyleSheet: a } = r ?? {};
  if (!a) return null;
  const i = new a();
  return i.replaceSync(n), e.adoptedStyleSheets.push(i), { refCount: 0, cleanup: () => {
    var s;
    if (Ii(e) && ((s = e.host) != null && s.isConnected)) {
      const o = e.adoptedStyleSheets.indexOf(i);
      o !== -1 && e.adoptedStyleSheets.splice(o, 1);
    }
    t.delete(n), t.size === 0 && Er.delete(e);
  } };
};
ue(Ae, 4, "additionalRoots", Ul, Ve, Ni);
ue(Ae, 2, "sourceRoot", Fl, Ve);
ue(Ae, 2, "targetRoot", $l, Ve);
ue(Ae, 2, "roots", jl, Ve);
lt(Ae, Ve);
Ve.configure = je(Ve);
var zr = Ve, Hu = class extends G {
  constructor(e, t) {
    super(e, t), this.manager = e;
    const { cursor: n = "grabbing" } = t ?? {}, r = e.registry.plugins.get(zr), a = r?.register(`* { cursor: ${n} !important; }`);
    if (a) {
      const i = this.destroy.bind(this);
      this.destroy = () => {
        a(), i();
      };
    }
  }
}, Tn = "data-dnd-", Na = `${Tn}dropping`, B = "--dnd-", be = `${Tn}dragging`, Ar = `${Tn}placeholder`, Bu = [be, Ar, "popover", "aria-pressed", "aria-grabbing"], Ku = ["view-transition-name"], Gu = `
  :is(:root,:host) [${be}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${B}top, 0px) !important;
    left: var(${B}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${B}width, auto);
    max-width: var(${B}width, auto);
    height: var(${B}height, auto);
    max-height: var(${B}height, auto);
    transform: var(${B}transform, none) !important;
    transition: var(${B}transition) !important;
  }

  :is(:root,:host) [${Ar}] {
    transition: none;
  }

  :is(:root,:host) [${Ar}='hidden'] {
    visibility: hidden;
  }

  [${be}] * {
    pointer-events: none !important;
  }

  [${be}]:not([${Na}]) {
    translate: var(${B}translate) !important;
  }

  [${be}][style*='${B}scale'] {
    scale: var(${B}scale) !important;
    transform-origin: var(${B}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${be}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${be}]::backdrop, [${Tn}overlay]:not([${be}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function Yu(e, t = "hidden") {
  return P(() => {
    const { element: n, manager: r } = e;
    if (!n || !r) return;
    const a = Xu(n, r.registry.droppables), i = [], s = Bc(n), { remove: o } = s;
    return Zu(a, s, i), Ju(s, t), s.remove = () => {
      i.forEach((l) => l()), o.call(s);
    }, s;
  });
}
function Xu(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of t) if (r.element && (e === r.element || e.contains(r.element))) {
    const a = `${Tn}${Ma("dom-id")}`;
    r.element.setAttribute(a, ""), n.set(r, a);
  }
  return n;
}
function Zu(e, t, n) {
  for (const [r, a] of e) {
    if (!r.element) continue;
    const i = `[${a}]`, s = t.matches(i) ? t : t.querySelector(i);
    if (r.element.removeAttribute(a), !s) continue;
    const o = r.element;
    r.proxy = s, s.removeAttribute(a), Pa.set(o, s), n.push(() => {
      Pa.delete(o), r.proxy = void 0;
    });
  }
}
function Ju(e, t = "hidden") {
  e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(Ar, t);
}
function Yl(e, t) {
  return e === t ? true : Pt(e) === Pt(t);
}
function Ss(e) {
  const { target: t } = e;
  "newState" in e && e.newState === "closed" && nt(t) && t.hasAttribute("popover") && requestAnimationFrame(() => Dt(t));
}
function Oa(e) {
  return e.tagName === "TR";
}
function Qu(e, t, n) {
  const r = new MutationObserver((a) => {
    let i = false;
    for (const s of a) {
      if (s.target !== e) {
        i = true;
        continue;
      }
      if (s.type !== "attributes") continue;
      const o = s.attributeName;
      if (o.startsWith("aria-") || Bu.includes(o)) continue;
      const l = e.getAttribute(o);
      if (o === "style") {
        if (un(e) && un(t)) {
          const c = e.style;
          for (const u of Array.from(t.style)) c.getPropertyValue(u) === "" && t.style.removeProperty(u);
          for (const u of Array.from(c)) {
            if (Ku.includes(u) || u.startsWith(B)) continue;
            const d = c.getPropertyValue(u);
            t.style.setProperty(u, d);
          }
        }
      } else l !== null ? t.setAttribute(o, l) : t.removeAttribute(o);
    }
    i && n && t.replaceChildren(...e.cloneNode(true).childNodes);
  });
  return r.observe(e, { attributes: true, subtree: true, childList: true }), r;
}
function eh(e, t, n) {
  const r = new MutationObserver((a) => {
    for (const i of a) if (i.addedNodes.length !== 0) for (const s of Array.from(i.addedNodes)) {
      if (s.contains(e) && e.nextElementSibling !== t) {
        e.insertAdjacentElement("afterend", t), Dt(n);
        return;
      }
      if (s.contains(t) && t.previousElementSibling !== e) {
        t.insertAdjacentElement("beforebegin", e), Dt(n);
        return;
      }
    }
    e.isConnected && t.isConnected && e.nextElementSibling !== t && (e.insertAdjacentElement("afterend", t), Dt(n));
  });
  return r.observe(e.ownerDocument.body, { childList: true, subtree: true }), r;
}
function th(e) {
  return new ResizeObserver(() => {
    var t, n, r;
    const a = new ye(e.placeholder, { frameTransform: e.frameTransform, ignoreTransforms: true }), i = (t = e.transformOrigin) != null ? t : { x: 1, y: 1 }, s = (e.width - a.width) * i.x + e.delta.x, o = (e.height - a.height) * i.y + e.delta.y, l = Dl();
    if (e.styles.set({ width: a.width - e.widthOffset, height: a.height - e.heightOffset, top: e.top + o + l.y, left: e.left + s + l.x }, B), (n = e.getElementMutationObserver()) == null || n.takeRecords(), Oa(e.element) && Oa(e.placeholder)) {
      const v = Array.from(e.element.cells), w = Array.from(e.placeholder.cells);
      e.getSavedCellWidths() || e.setSavedCellWidths(v.map((x) => x.style.width));
      for (const [x, h] of v.entries()) {
        const g = w[x];
        h.style.width = `${g.getBoundingClientRect().width}px`;
      }
    }
    const c = (r = e.getTranslate()) != null ? r : { x: 0, y: 0 }, u = e.left + s + l.x + c.x, d = e.top + o + l.y + c.y, m = a.width - e.widthOffset, p = a.height - e.heightOffset, y = e.frameTransform;
    e.dragOperation.shape = new pe(u * y.scaleX + y.x, d * y.scaleY + y.y, m * y.scaleX, p * y.scaleY);
  });
}
var nh = 250, rh = "ease";
function ah(e) {
  var t, n, r, a;
  const { animation: i } = e;
  if (typeof i == "function") {
    const h = i({ source: e.source, element: e.element, feedbackElement: e.feedbackElement, placeholder: e.placeholder, translate: e.translate, moved: e.moved });
    Promise.resolve(h).then(() => {
      e.cleanup(), requestAnimationFrame(e.restoreFocus);
    });
    return;
  }
  const { duration: s = nh, easing: o = rh } = i ?? {};
  Dt(e.feedbackElement);
  const [, l] = (t = yl(e.feedbackElement, (h) => "translate" in h)) != null ? t : [];
  l?.pause();
  const c = (n = e.placeholder) != null ? n : e.element, u = { frameTransform: Yl(e.feedbackElement, c) ? null : void 0 }, d = new ye(e.feedbackElement, u), m = (r = vn(fe(e.feedbackElement).translate)) != null ? r : e.translate, p = new ye(c, u), y = pe.delta(d, p, e.alignment), v = { x: m.x - y.x, y: m.y - y.y }, w = Math.round(d.intrinsicHeight) !== Math.round(p.intrinsicHeight) ? { minHeight: [`${d.intrinsicHeight}px`, `${p.intrinsicHeight}px`], maxHeight: [`${d.intrinsicHeight}px`, `${p.intrinsicHeight}px`] } : {}, x = Math.round(d.intrinsicWidth) !== Math.round(p.intrinsicWidth) ? { minWidth: [`${d.intrinsicWidth}px`, `${p.intrinsicWidth}px`], maxWidth: [`${d.intrinsicWidth}px`, `${p.intrinsicWidth}px`] } : {};
  e.styles.set({ transition: e.transition }, B), e.feedbackElement.setAttribute(Na, ""), (a = e.getElementMutationObserver()) == null || a.takeRecords(), Nl({ element: e.feedbackElement, keyframes: Si(wn(wn({}, w), x), { translate: [`${m.x}px ${m.y}px 0`, `${v.x}px ${v.y}px 0`] }), options: { duration: Pi(se(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? s : 0, easing: o } }).then(() => {
    e.feedbackElement.removeAttribute(Na), l?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
  });
}
var Xl, qa, Dn, Oi, er, Zl, Jl, Tt = class extends (qa = G, Xl = [_], qa) {
  constructor(t, n) {
    super(t, n), j(this, er), j(this, Oi, H(Dn, 8, this)), H(Dn, 11, this), this.state = { initial: {}, current: {} };
    const r = t.registry.plugins.get(zr), a = r?.register(Gu);
    if (a) {
      const i = this.destroy.bind(this);
      this.destroy = () => {
        a(), i();
      };
    }
    this.registerEffect(rt(this, er, Zl).bind(this, r)), this.registerEffect(rt(this, er, Jl));
  }
};
Dn = zt(qa);
Oi = /* @__PURE__ */ new WeakMap();
er = /* @__PURE__ */ new WeakSet();
Zl = function(e) {
  const { overlay: t } = this;
  if (!t || !e) return;
  const n = br(t);
  if (n) return e.addRoot(n);
};
Jl = function() {
  var e, t, n, r, a, i, s;
  const { state: o, manager: l, options: c } = this, { dragOperation: u } = l, { position: d, source: m, status: p } = u;
  if (p.idle) {
    o.current = {}, o.initial = {};
    return;
  }
  if (!m) return;
  const { element: y } = m, v = m.pluginConfig(Tt), w = (t = (e = v?.feedback) != null ? e : c?.feedback) != null ? t : "default", x = typeof w == "function" ? w(m, l) : w;
  if (!y || x === "none" || !p.initialized || p.initializing) return;
  const { initial: h } = o, g = (n = this.overlay) != null ? n : y, b = tt(g), f = tt(y), D = !Yl(y, g), I = new ye(y, { frameTransform: D ? f : null, ignoreTransforms: !D }), S = { x: f.scaleX / b.scaleX, y: f.scaleY / b.scaleY };
  let { width: q, height: C, top: oe, left: Te } = I;
  D && (q = q / S.x, C = C / S.y);
  const Me = new ku(g), Wt = fe(y), { transition: Gi, translate: Yi, boxSizing: _d, paddingBlockStart: Td, paddingBlockEnd: Md, paddingInlineStart: Sd, paddingInlineEnd: Rd, borderInlineStartWidth: Nd, borderInlineEndWidth: Od, borderBlockStartWidth: qd, borderBlockEndWidth: Cd } = Wt, Rn = Gi.split(",").filter((R) => !/^\s*(transform|translate|scale)\b/.test(R)).join(","), $e = Lr(Wt), Ld = Wt.transform, Xi = x === "clone", Zi = _d === "content-box", Ji = Zi ? parseInt(Sd) + parseInt(Rd) + parseInt(Nd) + parseInt(Od) : 0, Qi = Zi ? parseInt(Td) + parseInt(Md) + parseInt(qd) + parseInt(Cd) : 0, te = x !== "move" && !this.overlay ? Yu(m, Xi ? "clone" : "hidden") : null, jr = P(() => xn(l.dragOperation.activatorEvent));
  if (!h.translate) {
    if (this.overlay && $e) h.translate = { x: $e.x, y: $e.y };
    else if (Yi !== "none") {
      const R = vn(Yi);
      R && (h.translate = R);
    }
  }
  if (!h.transformOrigin) {
    const R = P(() => d.current), $ = Te + ((r = $e?.x) != null ? r : 0), ne = oe + ((a = $e?.y) != null ? a : 0);
    h.transformOrigin = { x: (R.x - $ * b.scaleX - b.x) / (q * b.scaleX), y: (R.y - ne * b.scaleY - b.y) / (C * b.scaleY) };
  }
  const { transformOrigin: dt } = h, es = oe * b.scaleY + b.y, ts = Te * b.scaleX + b.x;
  if (!h.coordinates && (h.coordinates = { x: ts, y: es }, S.x !== 1 || S.y !== 1)) {
    const { scaleX: R, scaleY: $ } = f, { x: ne, y: Se } = dt;
    h.coordinates.x += (q * R - q) * ne, h.coordinates.y += (C * $ - C) * Se;
  }
  h.dimensions || (h.dimensions = { width: q, height: C }), h.frameTransform || (h.frameTransform = b);
  const ns = { x: h.coordinates.x - ts, y: h.coordinates.y - es }, rs = { width: (h.dimensions.width * h.frameTransform.scaleX - q * b.scaleX) * dt.x, height: (h.dimensions.height * h.frameTransform.scaleY - C * b.scaleY) * dt.y }, $r = { x: ns.x / b.scaleX + rs.width, y: ns.y / b.scaleY + rs.height }, as = { left: Te + $r.x, top: oe + $r.y };
  g.setAttribute(be, "true");
  const is = P(() => u.transform), ss = (i = h.translate) != null ? i : { x: 0, y: 0 }, zd = is.x * b.scaleX + ss.x, Wd = is.y * b.scaleY + ss.y, os = Dl();
  Me.set({ width: q - Ji, height: C - Qi, top: as.top + os.y, left: as.left + os.x, translate: `${zd}px ${Wd}px 0`, transform: this.overlay ? "none" : Ld, transition: Rn ? `${Rn}, translate 0ms linear` : "translate 0ms linear", scale: D ? `${S.x} ${S.y}` : "", "transform-origin": `${dt.x * 100}% ${dt.y * 100}%` }, B), te && (y.insertAdjacentElement("afterend", te), c?.rootElement && (typeof c.rootElement == "function" ? c.rootElement(m) : c.rootElement).appendChild(y)), Ta(g) && (g.hasAttribute("popover") || g.setAttribute("popover", "manual"), Dt(g), g.addEventListener("beforetoggle", Ss));
  let Fe, Fr, Nn;
  const ls = th({ placeholder: te, element: y, feedbackElement: g, frameTransform: b, transformOrigin: dt, width: q, height: C, top: oe, left: Te, widthOffset: Ji, heightOffset: Qi, delta: $r, styles: Me, dragOperation: u, getTranslate: () => o.current.translate, getElementMutationObserver: () => Fe, getSavedCellWidths: () => Nn, setSavedCellWidths: (R) => {
    Nn = R;
  } }), ds = new ye(g);
  P(() => u.shape = ds);
  const Ur = se(g), cs = (R) => {
    this.manager.actions.stop({ event: R });
  }, Vd = Pi(Ur);
  jr && Ur.addEventListener("resize", cs), P(() => m.status) === "idle" && requestAnimationFrame(() => m.status = "dragging"), te && (ls.observe(te), Fe = Qu(y, te, Xi), Fr = eh(y, te, g));
  const us = (s = l.dragOperation.source) == null ? void 0 : s.id, jd = () => {
    var R;
    if (!jr || us == null) return;
    const $ = l.registry.draggables.get(us), ne = (R = $?.handle) != null ? R : $?.element;
    Pe(ne) && ne.focus();
  }, Hr = () => {
    Fe?.disconnect(), Fr?.disconnect(), ls.disconnect(), Ur.removeEventListener("resize", cs), Ta(g) && (g.removeEventListener("beforetoggle", Ss), g.removeAttribute("popover")), g.removeAttribute(be), Me.reset();
    const R = () => {
      var $;
      if (Nn && Oa(y)) {
        const Br = Array.from(y.cells);
        for (const [On, ct] of Br.entries()) ct.style.width = ($ = Nn[On]) != null ? $ : "";
      }
      m.status = "idle";
      const ne = o.current.translate != null, Se = u.status.dragging;
      te && (!Se && ne || te.parentElement !== g.parentElement) && g.isConnected && te.replaceWith(g), te?.remove();
    };
    g === this.overlay ? setTimeout(R, 0) : R();
  }, $d = c?.dropAnimation, hs = this, Fd = An(() => {
    var R, $, ne;
    const { transform: Se, status: Br } = u;
    if (!(!Se.x && !Se.y && !o.current.translate) && Br.dragging) {
      const On = (R = h.translate) != null ? R : { x: 0, y: 0 }, ct = { x: Se.x / b.scaleX + On.x, y: Se.y / b.scaleY + On.y }, ms = o.current.translate, Ud = P(() => u.modifiers), Kr = P(() => {
        var jt;
        return (jt = u.shape) == null ? void 0 : jt.current;
      }), Vt = c?.keyboardTransition, ps = jr && !Vd && Vt !== null ? `${($ = Vt?.duration) != null ? $ : 250}ms ${(ne = Vt?.easing) != null ? ne : "cubic-bezier(0.25, 1, 0.5, 1)"}` : "0ms linear";
      if (Me.set({ transition: Rn ? `${Rn}, translate ${ps}` : `translate ${ps}`, translate: `${ct.x}px ${ct.y}px 0` }, B), Fe?.takeRecords(), Kr && Kr !== ds && ms && !Ud.length) {
        const jt = de.delta(ct, ms);
        u.shape = pe.from(Kr.boundingRectangle).translate(jt.x * b.scaleX, jt.y * b.scaleY);
      } else u.shape = new ye(g);
      o.current.translate = ct;
    }
  }, function() {
    if (u.status.dropped) {
      this.dispose(), m.status = "dropping";
      const R = v?.dropAnimation !== void 0 ? v.dropAnimation : hs.dropAnimation !== void 0 ? hs.dropAnimation : $d;
      let $ = o.current.translate;
      const ne = $ != null;
      if (!$ && y !== g && ($ = { x: 0, y: 0 }), !$ || R === null) {
        Hr();
        return;
      }
      l.renderer.rendering.then(() => {
        ah({ source: m, element: y, feedbackElement: g, placeholder: te, translate: $, moved: ne, transition: Gi, alignment: m.alignment, styles: Me, animation: R ?? void 0, getElementMutationObserver: () => Fe, cleanup: Hr, restoreFocus: jd });
      });
    }
  });
  return () => {
    Hr(), Fd();
  };
};
ue(Dn, 4, "overlay", Xl, Tt, Oi);
lt(Dn, Tt);
Tt.configure = je(Tt);
var Ql = Tt, $t = true, ih = false, ed, td, nd, rd, qe, qi, Ci;
rd = (nd = [_], A.Forward), td = (ed = [_], A.Reverse);
var kn = class {
  constructor() {
    j(this, qi, H(qe, 8, this, $t)), H(qe, 11, this), j(this, Ci, H(qe, 12, this, $t)), H(qe, 15, this);
  }
  isLocked(e) {
    return e === A.Idle ? false : e == null ? this[A.Forward] === $t && this[A.Reverse] === $t : this[e] === $t;
  }
  unlock(e) {
    e !== A.Idle && (this[e] = ih);
  }
};
qe = zt(null);
qi = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakMap();
ue(qe, 4, rd, nd, kn, qi);
ue(qe, 4, td, ed, kn, Ci);
lt(qe, kn);
var sh = [A.Forward, A.Reverse], Rs = class {
  constructor() {
    this.x = new kn(), this.y = new kn();
  }
  isLocked() {
    return this.x.isLocked() && this.y.isLocked();
  }
}, oh = class extends G {
  constructor(e) {
    super(e);
    const t = at(new Rs());
    let n = null;
    this.signal = t, ie(() => {
      const { status: r } = e.dragOperation;
      if (!r.initialized) {
        n = null, t.value = new Rs();
        return;
      }
      const { delta: a } = e.dragOperation.position;
      if (n) {
        const i = { x: Ns(a.x, n.x), y: Ns(a.y, n.y) }, s = t.peek();
        W(() => {
          for (const o of _o) for (const l of sh) i[o] === l && s[o].unlock(l);
          t.value = s;
        });
      }
      n = a;
    });
  }
  get current() {
    return this.signal.peek();
  }
};
function Ns(e, t) {
  return Math.sign(e - t);
}
var ad, Ca, En, Li, Ne, La, Mn = class extends (Ca = Pn, ad = [_], Ca) {
  constructor(e) {
    super(e), j(this, Li, H(En, 8, this, false)), H(En, 11, this), j(this, Ne), j(this, La, () => {
      if (!N(this, Ne)) return;
      const { element: i, by: s } = N(this, Ne);
      s.y && (i.scrollTop += s.y), s.x && (i.scrollLeft += s.x);
    }), this.scroll = (i, s) => {
      var o;
      if (this.disabled) return false;
      const l = this.getScrollableElements();
      if (!l) return J(this, Ne, void 0), false;
      const { position: c } = this.manager.dragOperation, u = c?.current;
      if (u) {
        const { by: d } = i ?? {}, m = d ? { x: Os(d.x), y: Os(d.y) } : void 0, p = m ? void 0 : this.scrollIntentTracker.current;
        if (p?.isLocked()) return false;
        for (const y of l) {
          const v = _i(y, d);
          if (v.x || v.y) {
            const { speed: w, direction: x } = Sl(y, u, m, s?.acceleration, s?.threshold);
            if (p) for (const h of _o) p[h].isLocked(x[h]) && (w[h] = 0, x[h] = 0);
            if (x.x || x.y) {
              const { x: h, y: g } = d ?? x, b = h * w.x, f = g * w.y;
              if (b || f) {
                const D = (o = N(this, Ne)) == null ? void 0 : o.by;
                if (this.autoScrolling && D && (D.x && !b || D.y && !f)) continue;
                return J(this, Ne, { element: y, by: { x: b, y: f } }), xr.schedule(N(this, La)), true;
              }
            }
          }
        }
      }
      return J(this, Ne, void 0), false;
    };
    let t = null, n = null;
    const r = ha(() => {
      const { position: i, source: s } = e.dragOperation;
      if (!i) return null;
      const o = kl(br(s?.element), i.current);
      return o && (t = o), o ?? t;
    }), a = ha(() => {
      const i = r.value, { documentElement: s } = Ct(i);
      if (!i || i === s) {
        const { target: o } = e.dragOperation, l = o?.element;
        if (l) {
          const c = Dr(l, { excludeElement: false });
          return n = c, c;
        }
      }
      if (i) {
        const o = Dr(i, { excludeElement: false });
        return this.autoScrolling && n && o.size < n?.size ? n : (n = o, o);
      }
      return n = null, null;
    }, ma);
    this.getScrollableElements = () => a.value, this.scrollIntentTracker = new oh(e), this.destroy = e.monitor.addEventListener("dragmove", (i) => {
      this.disabled || i.defaultPrevented || !xn(e.dragOperation.activatorEvent) || !i.by || this.scroll({ by: i.by }) && i.preventDefault();
    });
  }
};
En = zt(Ca);
Li = /* @__PURE__ */ new WeakMap();
Ne = /* @__PURE__ */ new WeakMap();
La = /* @__PURE__ */ new WeakMap();
ue(En, 4, "autoScrolling", ad, Mn, Li);
lt(En, Mn);
function Os(e) {
  return e > 0 ? A.Forward : e < 0 ? A.Reverse : A.Idle;
}
var lh = class {
  constructor(e) {
    this.scheduler = e, this.pending = false, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
      const { tasks: t, resolvers: n } = this;
      this.pending = false, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
      for (const r of t) r();
      for (const r of n) r();
    };
  }
  schedule(e) {
    return this.tasks.add(e), this.pending || (this.pending = true, this.scheduler(this.flush)), new Promise((t) => this.resolvers.add(t));
  }
}, dh = new lh((e) => {
  typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), ch = 10, za = class extends G {
  constructor(t, n) {
    super(t, n);
    const r = t.registry.plugins.get(Mn);
    if (!r) throw new Error("AutoScroller plugin depends on Scroller plugin");
    this.destroy = ie(() => {
      var a, i, s;
      if (this.disabled) return;
      const { position: o, status: l } = t.dragOperation;
      if (l.dragging) {
        const c = { acceleration: (a = this.options) == null ? void 0 : a.acceleration, threshold: typeof ((i = this.options) == null ? void 0 : i.threshold) == "number" ? { x: this.options.threshold, y: this.options.threshold } : (s = this.options) == null ? void 0 : s.threshold };
        if (r.scroll(void 0, c)) {
          r.autoScrolling = true;
          const d = setInterval(() => dh.schedule(() => r.scroll(void 0, c)), ch);
          return () => {
            clearInterval(d);
          };
        } else r.autoScrolling = false;
      }
    });
  }
};
za.configure = je(za);
var zi = za, qs = { capture: true, passive: true }, en, uh = class extends Pn {
  constructor(e) {
    super(e), j(this, en), this.handleScroll = () => {
      N(this, en) == null && J(this, en, setTimeout(() => {
        this.manager.collisionObserver.forceUpdate(false), J(this, en, void 0);
      }, 50));
    };
    const { dragOperation: t } = this.manager;
    this.destroy = ie(() => {
      var n, r, a;
      if (t.status.dragging) {
        const s = (a = (r = (n = t.source) == null ? void 0 : n.element) == null ? void 0 : r.ownerDocument) != null ? a : document;
        return s.addEventListener("scroll", this.handleScroll, qs), () => {
          s.removeEventListener("scroll", this.handleScroll, qs);
        };
      }
    });
  }
};
en = /* @__PURE__ */ new WeakMap();
var hh = "* { user-select: none !important; -webkit-user-select: none !important; }", mh = class extends G {
  constructor(e) {
    super(e), this.manager = e;
    const t = e.registry.plugins.get(zr), n = t?.register(hh);
    if (this.destroy = ie(() => {
      const { dragOperation: r } = this.manager;
      if (r.status.initialized) return ta(), document.addEventListener("selectionchange", ta, { capture: true }), () => {
        document.removeEventListener("selectionchange", ta, { capture: true });
      };
    }), n) {
      const r = this.destroy.bind(this);
      this.destroy = () => {
        n(), r();
      };
    }
  }
};
function ta() {
  var e;
  (e = document.getSelection()) == null || e.removeAllRanges();
}
var tn = Object.freeze({ offset: 10, keyboardCodes: { start: ["Space", "Enter"], cancel: ["Escape"], end: ["Space", "Enter", "Tab"], up: ["ArrowUp"], down: ["ArrowDown"], left: ["ArrowLeft"], right: ["ArrowRight"] }, preventActivation(e, t) {
  var n;
  const r = (n = t.handle) != null ? n : t.element;
  return e.target !== r;
} }), bt, Ir = class extends Et {
  constructor(t, n) {
    super(t), this.manager = t, this.options = n, j(this, bt, []), this.listeners = new El(), this.handleSourceKeyDown = (r, a, i) => {
      if (this.disabled || r.defaultPrevented || !nt(r.target) || a.disabled) return;
      const { keyboardCodes: s = tn.keyboardCodes, preventActivation: o = tn.preventActivation } = i ?? {};
      s.start.includes(r.code) && this.manager.dragOperation.status.idle && (o?.(r, a) || this.handleStart(r, a, i));
    };
  }
  bind(t, n = this.options) {
    return ie(() => {
      var a;
      const i = (a = t.handle) != null ? a : t.element, s = (o) => {
        xn(o) && this.handleSourceKeyDown(o, t, n);
      };
      if (i) return i.addEventListener("keydown", s), () => {
        i.removeEventListener("keydown", s);
      };
    });
  }
  handleStart(t, n, r) {
    const { element: a } = n;
    if (!a) throw new Error("Source draggable does not have an associated element");
    t.preventDefault(), t.stopImmediatePropagation(), Rl(a);
    const { center: i } = new ye(a);
    if (this.manager.actions.start({ event: t, coordinates: { x: i.x, y: i.y }, source: n }).signal.aborted) return this.cleanup();
    this.sideEffects();
    const o = Ct(a), l = [this.listeners.bind(o, [{ type: "keydown", listener: (c) => this.handleKeyDown(c, n, r), options: { capture: true } }])];
    N(this, bt).push(...l);
  }
  handleKeyDown(t, n, r) {
    const { keyboardCodes: a = tn.keyboardCodes } = r ?? {};
    if (ut(t, [...a.end, ...a.cancel])) {
      t.preventDefault();
      const i = ut(t, a.cancel);
      this.handleEnd(t, i);
      return;
    }
    ut(t, a.up) ? this.handleMove("up", t) : ut(t, a.down) && this.handleMove("down", t), ut(t, a.left) ? this.handleMove("left", t) : ut(t, a.right) && this.handleMove("right", t);
  }
  handleEnd(t, n) {
    this.manager.actions.stop({ event: t, canceled: n }), this.cleanup();
  }
  handleMove(t, n) {
    var r, a;
    const { shape: i } = this.manager.dragOperation, s = n.shiftKey ? 5 : 1;
    let o = { x: 0, y: 0 }, l = (a = (r = this.options) == null ? void 0 : r.offset) != null ? a : tn.offset;
    if (typeof l == "number" && (l = { x: l, y: l }), !!i) {
      switch (t) {
        case "up":
          o = { x: 0, y: -l.y * s };
          break;
        case "down":
          o = { x: 0, y: l.y * s };
          break;
        case "left":
          o = { x: -l.x * s, y: 0 };
          break;
        case "right":
          o = { x: l.x * s, y: 0 };
          break;
      }
      (o.x || o.y) && (n.preventDefault(), this.manager.actions.move({ event: n, by: o }));
    }
  }
  sideEffects() {
    const t = this.manager.registry.plugins.get(zi);
    t?.disabled === false && (t.disable(), N(this, bt).push(() => {
      t.enable();
    }));
  }
  cleanup() {
    N(this, bt).forEach((t) => t()), J(this, bt, []);
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
bt = /* @__PURE__ */ new WeakMap();
Ir.configure = je(Ir);
Ir.defaults = tn;
var ph = Ir;
function ut(e, t) {
  return t.includes(e.code);
}
var Ze, gh = class extends sl {
  constructor() {
    super(...arguments), j(this, Ze);
  }
  onEvent(e) {
    switch (e.type) {
      case "pointerdown":
        J(this, Ze, It(e));
        break;
      case "pointermove":
        if (!N(this, Ze)) return;
        const { x: t, y: n } = It(e), r = { x: t - N(this, Ze).x, y: n - N(this, Ze).y }, { tolerance: a } = this.options;
        if (a && Da(r, a)) {
          this.abort();
          return;
        }
        Da(r, this.options.value) && this.activate(e);
        break;
      case "pointerup":
        this.abort();
        break;
    }
  }
  abort() {
    J(this, Ze, void 0);
  }
};
Ze = /* @__PURE__ */ new WeakMap();
var yt, Je, fh = class extends sl {
  constructor() {
    super(...arguments), j(this, yt), j(this, Je);
  }
  onEvent(e) {
    switch (e.type) {
      case "pointerdown":
        J(this, Je, It(e)), J(this, yt, setTimeout(() => this.activate(e), this.options.value));
        break;
      case "pointermove":
        if (!N(this, Je)) return;
        const { x: t, y: n } = It(e), r = { x: t - N(this, Je).x, y: n - N(this, Je).y };
        Da(r, this.options.tolerance) && this.abort();
        break;
      case "pointerup":
        this.abort();
        break;
    }
  }
  abort() {
    N(this, yt) && (clearTimeout(N(this, yt)), J(this, Je, void 0), J(this, yt, void 0));
  }
};
yt = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
var Ce = class {
};
Ce.Delay = fh;
Ce.Distance = gh;
var Wa = Object.freeze({ activationConstraints(e, t) {
  var n;
  const { pointerType: r, target: a } = e;
  if (!(r === "mouse" && nt(a) && (t.handle === a || (n = t.handle) != null && n.contains(a)))) return r === "touch" ? [new Ce.Delay({ value: 250, tolerance: 5 })] : Au(a) && !e.defaultPrevented ? [new Ce.Delay({ value: 200, tolerance: 0 })] : [new Ce.Delay({ value: 200, tolerance: 10 }), new Ce.Distance({ value: 5 })];
}, preventActivation(e, t) {
  var n;
  const { target: r } = e;
  if (r === t.element || r === t.handle || !nt(r) || (n = t.handle) != null && n.contains(r)) return false;
  const a = Gc(r);
  return a === t.element ? false : !!a;
} }), vt, Pr = class extends Et {
  constructor(t, n) {
    super(t), this.manager = t, this.options = n, j(this, vt, /* @__PURE__ */ new Set()), this.listeners = new El(), this.latest = { event: void 0, coordinates: void 0 }, this.handleMove = () => {
      const { event: r, coordinates: a } = this.latest;
      !r || !a || this.manager.actions.move({ event: r, to: a });
    }, this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  activationConstraints(t, n, r = this.options) {
    const { activationConstraints: a = Wa.activationConstraints } = r ?? {};
    return typeof a == "function" ? a(t, n) : a;
  }
  bind(t, n = this.options) {
    return ie(() => {
      var a;
      const i = new AbortController(), { signal: s } = i, o = (c) => {
        Eu(c) && this.handlePointerDown(c, t, n);
      };
      let l = [(a = t.handle) != null ? a : t.element];
      n?.activatorElements && (Array.isArray(n.activatorElements) ? l = n.activatorElements : l = n.activatorElements(t));
      for (const c of l) c && (vh(c.ownerDocument.defaultView), c.addEventListener("pointerdown", o, { signal: s }));
      return () => i.abort();
    });
  }
  handlePointerDown(t, n, r) {
    if (this.disabled || !t.isPrimary || t.button !== 0 || !nt(t.target) || n.disabled || bh(t) || !this.manager.dragOperation.status.idle) return;
    const { preventActivation: a = Wa.preventActivation } = r ?? {};
    if (a?.(t, n)) return;
    const { target: i } = t, s = Pe(i) && i.draggable && i.getAttribute("draggable") === "true", o = tt(n.element), { x: l, y: c } = It(t);
    this.initialCoordinates = { x: l * o.scaleX + o.x, y: c * o.scaleY + o.y };
    const u = this.activationConstraints(t, n, r);
    t.sensor = this;
    const d = new Vc(u, (v) => this.handleStart(n, v));
    d.signal.onabort = () => this.handleCancel(t), d.onEvent(t), this.controller = d;
    const m = Ia(), p = this.listeners.bind(m, [{ type: "pointermove", listener: (v) => this.handlePointerMove(v, n) }, { type: "pointerup", listener: this.handlePointerUp, options: { capture: true } }, { type: "pointercancel", listener: this.handleCancel }, { type: "dragstart", listener: s ? this.handleCancel : Wn, options: { capture: true } }]), y = () => {
      p(), this.initialCoordinates = void 0;
    };
    N(this, vt).add(y);
  }
  handlePointerMove(t, n) {
    var r, a;
    if (((r = this.controller) == null ? void 0 : r.activated) === false) {
      (a = this.controller) == null || a.onEvent(t);
      return;
    }
    if (this.manager.dragOperation.status.dragging) {
      const i = It(t), s = tt(n.element);
      i.x = i.x * s.scaleX + s.x, i.y = i.y * s.scaleY + s.y, t.preventDefault(), t.stopPropagation(), this.latest.event = t, this.latest.coordinates = i, xr.schedule(this.handleMove);
    }
  }
  handlePointerUp(t) {
    const { status: n } = this.manager.dragOperation;
    if (!n.idle) {
      t.preventDefault(), t.stopPropagation();
      const r = !n.initialized;
      this.manager.actions.stop({ event: t, canceled: r });
    }
    this.cleanup();
  }
  handleKeyDown(t) {
    t.key === "Escape" && (t.preventDefault(), this.handleCancel(t));
  }
  handleStart(t, n) {
    const { manager: r, initialCoordinates: a } = this;
    if (!a || !r.dragOperation.status.idle || n.defaultPrevented) return;
    if (r.actions.start({ coordinates: a, event: n, source: t }).signal.aborted) return this.cleanup();
    n.preventDefault();
    const o = Ct(n.target).body;
    try {
      o.setPointerCapture(n.pointerId);
    } catch {
      this.handleCancel(n);
      return;
    }
    const l = nt(n.target) ? [n.target, o] : o, c = this.listeners.bind(l, [{ type: "touchmove", listener: Wn, options: { passive: false } }, { type: "click", listener: Wn }, { type: "contextmenu", listener: Wn }, { type: "keydown", listener: this.handleKeyDown }]);
    N(this, vt).add(c);
  }
  handleCancel(t) {
    const { dragOperation: n } = this.manager;
    n.status.initialized && this.manager.actions.stop({ event: t, canceled: true }), this.cleanup();
  }
  cleanup() {
    const { controller: t } = this;
    this.controller = void 0, t && !t.signal.aborted && t.abort(), this.latest = { event: void 0, coordinates: void 0 }, N(this, vt).forEach((n) => n()), N(this, vt).clear();
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
vt = /* @__PURE__ */ new WeakMap();
Pr.configure = je(Pr);
Pr.defaults = Wa;
var id = Pr;
function bh(e) {
  return "sensor" in e;
}
function Wn(e) {
  e.preventDefault();
}
function yh() {
}
var Cs = /* @__PURE__ */ new WeakSet();
function vh(e) {
  !e || Cs.has(e) || (e.addEventListener("touchmove", yh, { capture: false, passive: false }), Cs.add(e));
}
var kt = { modifiers: [], plugins: [Vl, zi, Hu, Ql, mh], sensors: [id, ph] }, Ls = class extends Fc {
  constructor(e = {}) {
    const t = me(e.plugins, kt.plugins), n = me(e.sensors, kt.sensors), r = me(e.modifiers, kt.modifiers);
    super(Si(wn({}, e), { plugins: [uh, Mn, zr, ...t], sensors: n, modifiers: r }));
  }
}, sd, od, Va, Le, Wi, Vi, Wr = class extends (Va = ve, od = [_], sd = [_], Va) {
  constructor(e, t) {
    var n = e, { element: r, effects: a = () => [], handle: i } = n, s = zl(n, ["element", "effects", "handle"]);
    super(wn({ effects: () => [...a(), () => {
      var o, l;
      const { manager: c } = this;
      if (!c) return;
      const d = ((l = (o = this.sensors) == null ? void 0 : o.map(fn)) != null ? l : [...c.sensors]).map((m) => {
        const p = m instanceof Et ? m : c.registry.register(m.plugin), y = m instanceof Et ? void 0 : m.options;
        return p.bind(this, y);
      });
      return function() {
        d.forEach((p) => p());
      };
    }] }, s), t), j(this, Wi, H(Le, 8, this)), H(Le, 11, this), j(this, Vi, H(Le, 12, this)), H(Le, 15, this), this.element = r, this.handle = i;
  }
};
Le = zt(Va);
Wi = /* @__PURE__ */ new WeakMap();
Vi = /* @__PURE__ */ new WeakMap();
ue(Le, 4, "handle", od, Wr, Wi);
ue(Le, 4, "element", sd, Wr, Vi);
lt(Le, Wr);
var ld, dd, ja, ze, ji, na, cd, ud, mn, $i, Fi = class extends (ja = xe, dd = [_], ld = [_], ja) {
  constructor(e, t) {
    var n = e, { element: r, effects: a = () => [] } = n, i = zl(n, ["element", "effects"]);
    const { collisionDetector: s = Ol } = i, o = (c) => {
      const { manager: u, element: d } = this;
      if (!d || c === null) {
        this.shape = void 0;
        return;
      }
      if (!u) return;
      const m = new ye(d), p = P(() => this.shape);
      return m && p?.equals(m) ? p : (this.shape = m, m);
    }, l = at(false);
    super(Si(wn({}, i), { collisionDetector: s, effects: () => [...a(), () => {
      const { element: c, manager: u } = this;
      if (!u) return;
      const { dragOperation: d } = u, { source: m } = d;
      l.value = !!(m && d.status.initialized && c && !this.disabled && this.accepts(m));
    }, () => {
      const { element: c } = this;
      if (l.value && c) {
        const u = new au(c, o);
        return () => {
          u.disconnect(), this.shape = void 0;
        };
      }
    }, () => {
      var c;
      if ((c = this.manager) != null && c.dragOperation.status.initialized) return () => {
        this.shape = void 0;
      };
    }] }), t), j(this, mn), j(this, ji, H(ze, 8, this)), H(ze, 11, this), j(this, $i, H(ze, 12, this)), H(ze, 15, this), this.element = r, this.refreshShape = () => o();
  }
  set element(e) {
    J(this, mn, e, ud);
  }
  get element() {
    var e;
    return (e = this.proxy) != null ? e : N(this, mn, cd);
  }
};
ze = zt(ja);
ji = /* @__PURE__ */ new WeakMap();
mn = /* @__PURE__ */ new WeakSet();
$i = /* @__PURE__ */ new WeakMap();
na = ue(ze, 20, "#element", dd, mn, ji), cd = na.get, ud = na.set;
ue(ze, 4, "proxy", ld, Fi, $i);
lt(ze, Fi);
function xh() {
  const e = hr(0), t = hr(null);
  let n = null;
  ur(e, () => {
    n?.(), t.value = null;
  }, { flush: "post" });
  const r = { get rendering() {
    var i;
    return (i = t.value) != null ? i : Promise.resolve();
  } };
  function a(i) {
    t.value || (t.value = new Promise((s) => {
      n = s;
    })), i(), Bd(() => {
      e.value++;
    });
  }
  return { renderer: r, trackRendering: a };
}
function wh(e) {
  const t = /* @__PURE__ */ Symbol(`${e}Context`);
  return [n, r];
  function n(a) {
    const i = no(t, a);
    if (i || i === null) return i;
    throw new Error(`Injection \`${t.toString()}\` not found. Component must be used within \`${e}\``);
  }
  function r(a) {
    return ro(t, a), a;
  }
}
var [Dh, kh] = wh("DragDropProvider"), Eh = to({ props: ["manager", "plugins", "sensors", "modifiers"], emits: ["beforeDragStart", "collision", "dragStart", "dragMove", "dragOver", "dragEnd"], __typeProps: {}, __typeEmits: {}, setup(e, { emit: t, slots: n }) {
  var r;
  const { renderer: a, trackRendering: i } = xh(), s = Ha((r = e.manager) != null ? r : new Ls(e));
  return ur([() => e.manager], () => {
    var o;
    const l = (o = e.manager) != null ? o : new Ls(e), c = [];
    l.renderer = a, c.push(l.monitor.addEventListener("beforedragstart", (u, d) => i(() => t("beforeDragStart", u, d)))), c.push(l.monitor.addEventListener("dragstart", (u, d) => t("dragStart", u, d))), c.push(l.monitor.addEventListener("dragover", (u, d) => i(() => t("dragOver", u, d)))), c.push(l.monitor.addEventListener("dragmove", (u, d) => i(() => t("dragMove", u, d)))), c.push(l.monitor.addEventListener("dragend", (u, d) => i(() => t("dragEnd", u, d)))), c.push(l.monitor.addEventListener("collision", (u, d) => t("collision", u, d))), s.value = l, Ba(() => c.forEach((u) => u()));
  }, { immediate: true }), Tr(() => {
    s.value.plugins = me(e.plugins, kt.plugins), s.value.sensors = me(e.sensors, kt.sensors), s.value.modifiers = me(e.modifiers, kt.modifiers);
  }), kh(De(() => s.value)), Hd(() => {
    e.manager || s.value.destroy();
  }), () => {
    var o;
    return (o = n.default) == null ? void 0 : o.call(n);
  };
} });
function Ah() {
  return Dh();
}
function Ih(e) {
  const t = Ah(), n = Ha(e(t.value));
  return Tr(() => {
    n.value.manager = t.value, Ba(n.value.register());
  }), De(() => n.value);
}
var Ph = Object.create, hd = Object.defineProperty, _h = Object.defineProperties, Th = Object.getOwnPropertyDescriptor, Mh = Object.getOwnPropertyDescriptors, _r = Object.getOwnPropertySymbols, md = Object.prototype.hasOwnProperty, pd = Object.prototype.propertyIsEnumerable, Sh = (e, t) => (t = Symbol[e]) ? t : /* @__PURE__ */ Symbol.for("Symbol." + e), Sn = (e) => {
  throw TypeError(e);
}, $a = (e, t, n) => t in e ? hd(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n, ra = (e, t) => {
  for (var n in t || (t = {})) md.call(t, n) && $a(e, n, t[n]);
  if (_r) for (var n of _r(t)) pd.call(t, n) && $a(e, n, t[n]);
  return e;
}, aa = (e, t) => _h(e, Mh(t)), Rh = (e, t) => {
  var n = {};
  for (var r in e) md.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && _r) for (var r of _r(e)) t.indexOf(r) < 0 && pd.call(e, r) && (n[r] = e[r]);
  return n;
}, Nh = (e) => {
  var t;
  return [, , , Ph((t = void 0) != null ? t : null)];
}, gd = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], nn = (e) => e !== void 0 && typeof e != "function" ? Sn("Function expected") : e, Oh = (e, t, n, r, a) => ({ kind: gd[e], name: t, metadata: r, addInitializer: (i) => n._ ? Sn("Already initialized") : a.push(nn(i || null)) }), qh = (e, t) => $a(t, Sh("metadata"), e[3]), Vn = (e, t, n, r) => {
  for (var a = 0, i = e[t >> 1], s = i && i.length; a < s; a++) t & 1 ? i[a].call(n) : r = i[a].call(n, r);
  return r;
}, fd = (e, t, n, r, a, i) => {
  for (var s, o, l, c, u, d = t & 7, m = false, p = false, y = e.length + 1, v = gd[d + 5], w = e[y - 1] = [], x = e[y] || (e[y] = []), h = (a = a.prototype, Th({ get [n]() {
    return rn(this, i);
  }, set [n](b) {
    return Qe(this, i, b);
  } }, n)), g = r.length - 1; g >= 0; g--) c = Oh(d, n, l = {}, e[3], x), c.static = m, c.private = p, u = c.access = { has: (b) => n in b }, u.get = (b) => b[n], u.set = (b, f) => b[n] = f, o = (0, r[g])({ get: h.get, set: h.set }, c), l._ = 1, o === void 0 ? nn(o) && (h[v] = o) : typeof o != "object" || o === null ? Sn("Object expected") : (nn(s = o.get) && (h.get = s), nn(s = o.set) && (h.set = s), nn(s = o.init) && w.unshift(s));
  return h && hd(a, n, h), a;
}, bd = (e, t, n) => t.has(e) || Sn("Cannot " + n), rn = (e, t, n) => (bd(e, t, "read from private field"), t.get(e)), Ft = (e, t, n) => t.has(e) ? Sn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Qe = (e, t, n, r) => (bd(e, t, "write to private field"), t.set(e, n), n);
function ke(e) {
  return e instanceof Bi || e instanceof wd;
}
function Ch(e) {
  return ke(e.source) && ke(e.target);
}
var jn = 10, Lh = class extends G {
  constructor(e) {
    super(e);
    const t = ie(() => {
      const { dragOperation: r } = e;
      if (xn(r.activatorEvent) && ke(r.source) && r.status.initialized) {
        const a = e.registry.plugins.get(Mn);
        if (a) return a.disable(), () => a.enable();
      }
    }), n = e.monitor.addEventListener("dragmove", (r, a) => {
      queueMicrotask(() => {
        if (this.disabled || r.defaultPrevented || !r.nativeEvent) return;
        const { dragOperation: i } = a;
        if (!xn(r.nativeEvent) || !ke(i.source) || !i.shape) return;
        const { actions: s, collisionObserver: o, registry: l } = a, { by: c } = r;
        if (!c) return;
        const u = zh(c), { source: d, target: m } = i, { center: p } = i.shape.current, y = [], v = [];
        W(() => {
          for (const f of l.droppables) {
            const { id: D } = f;
            if (!f.accepts(d) || D === m?.id && ke(f) || !f.element) continue;
            let I = f.shape;
            const S = new ye(f.element, { getBoundingClientRect: (q) => At(q, void 0, 0.2) });
            !S.height || !S.width || (u == "down" && p.y + jn < S.center.y || u == "up" && p.y - jn > S.center.y || u == "left" && p.x - jn > S.center.x || u == "right" && p.x + jn < S.center.x) && (y.push(f), f.shape = S, v.push(() => f.shape = I));
          }
        }), r.preventDefault(), o.disable();
        const w = o.computeCollisions(y, Tu);
        W(() => v.forEach((f) => f()));
        const [x] = w;
        if (!x) return;
        const { id: h } = x, { index: g, group: b } = d.sortable;
        s.setDropTarget(h).then(() => {
          const { source: f, target: D, shape: I } = i;
          if (!f || !ke(f) || !I) return;
          const { index: S, group: q, target: C } = f.sortable, oe = g !== S || b !== q, Te = oe ? C : D?.element;
          if (!Te) return;
          Rl(Te);
          const Me = new ye(Te);
          if (!Me) return;
          const Wt = pe.delta(Me, pe.from(I.current.boundingRectangle), f.alignment);
          s.move({ by: Wt }), oe ? s.setDropTarget(f.id).then(() => o.enable()) : o.enable();
        });
      });
    });
    this.destroy = () => {
      n(), t();
    };
  }
};
function zh(e) {
  const { x: t, y: n } = e;
  if (t > 0) return "right";
  if (t < 0) return "left";
  if (n > 0) return "down";
  if (n < 0) return "up";
}
var Wh = Object.defineProperty, Vh = Object.defineProperties, jh = Object.getOwnPropertyDescriptors, zs = Object.getOwnPropertySymbols, $h = Object.prototype.hasOwnProperty, Fh = Object.prototype.propertyIsEnumerable, Ws = (e, t, n) => t in e ? Wh(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n, ht = (e, t) => {
  for (var n in t || (t = {})) $h.call(t, n) && Ws(e, n, t[n]);
  if (zs) for (var n of zs(t)) Fh.call(t, n) && Ws(e, n, t[n]);
  return e;
}, mt = (e, t) => Vh(e, jh(t));
function Uh(e, t, n) {
  if (t === n) return e;
  const r = e.slice();
  return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function $n(e, t) {
  const n = String(t);
  return Object.prototype.hasOwnProperty.call(e, n) ? n : void 0;
}
function ia(e) {
  return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function Hh(e, t, n) {
  var r, a;
  const { source: i, target: s, canceled: o } = t.operation;
  if (!i || !s || o) return "preventDefault" in t && t.preventDefault(), e;
  const l = (g, b) => g === b || g !== null && typeof g == "object" && "id" in g && g.id === b;
  if (Array.isArray(e)) {
    const g = e.findIndex((f) => l(f, i.id)), b = e.findIndex((f) => l(f, s.id));
    if (g === -1 || b === -1) {
      if (ia(i)) {
        const f = i.initialIndex, D = i.index;
        return f === D || f < 0 || f >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, f, D);
      }
      return e;
    }
    if (!o && "index" in i && typeof i.index == "number") {
      const f = i.index;
      if (f !== g) return n(e, g, f);
    }
    return n(e, g, b);
  }
  const c = Object.entries(e);
  let u = -1, d, m = -1, p;
  for (const [g, b] of c) if (u === -1 && (u = b.findIndex((f) => l(f, i.id)), u !== -1 && (d = g)), m === -1 && (m = b.findIndex((f) => l(f, s.id)), m !== -1 && (p = g)), u !== -1 && m !== -1) break;
  if (u === -1 && ia(i)) {
    const g = i.initialGroup == null ? void 0 : $n(e, i.initialGroup), b = i.initialIndex, f = i.group == null ? void 0 : $n(e, i.group), D = i.index;
    if (g == null || f == null || g === f && b === D) return "preventDefault" in t && t.preventDefault(), e;
    if (g === f) return mt(ht({}, e), { [g]: n(e[g], b, D) });
    const I = e[g][b];
    return mt(ht({}, e), { [g]: [...e[g].slice(0, b), ...e[g].slice(b + 1)], [f]: [...e[f].slice(0, D), I, ...e[f].slice(D)] });
  }
  if (!i.manager) return e;
  const { dragOperation: y } = i.manager, v = (a = (r = y.shape) == null ? void 0 : r.current.center) != null ? a : y.position.current;
  if (p == null) {
    const g = $n(e, s.id);
    if (g != null) {
      const b = s.shape && v.y > s.shape.center.y ? e[g].length : 0;
      p = g, m = b;
    }
  }
  if (d == null || p == null || d === p && u === m) {
    if (d != null && d === p && u === m && ia(i)) {
      const g = i.group == null ? void 0 : $n(e, i.group), b = i.group != null && g !== d, f = i.index !== u;
      if (b || f) {
        const D = i.group == null ? d : g;
        if (D != null) {
          if (d === D) return mt(ht({}, e), { [d]: n(e[d], u, i.index) });
          const I = e[d][u];
          return mt(ht({}, e), { [d]: [...e[d].slice(0, u), ...e[d].slice(u + 1)], [D]: [...e[D].slice(0, i.index), I, ...e[D].slice(i.index)] });
        }
      }
    }
    return "preventDefault" in t && t.preventDefault(), e;
  }
  if (d === p) return mt(ht({}, e), { [d]: n(e[d], u, m) });
  const x = s.shape && Math.round(v.y) > Math.round(s.shape.center.y) ? 1 : 0, h = e[d][u];
  return mt(ht({}, e), { [d]: [...e[d].slice(0, u), ...e[d].slice(u + 1)], [p]: [...e[p].slice(0, m + x), h, ...e[p].slice(m + x)] });
}
function Bh(e, t) {
  return Hh(e, t, Uh);
}
function Vs(e) {
  const t = /* @__PURE__ */ new Map();
  for (const [, n] of e) for (const r of n) t.set(r.id, r.index);
  return t;
}
function js(e, t, n) {
  var r;
  for (const [a, i] of t) for (const s of i) {
    const o = e.get(s.id);
    if (s.index !== o || s.group !== a || !((r = n.get(a)) != null && r.has(s))) return true;
  }
  return false;
}
var $s = "__default__", Kh = class extends G {
  constructor(e) {
    super(e);
    const t = () => {
      const r = /* @__PURE__ */ new Map();
      for (const a of e.registry.droppables) if (a instanceof Bi) {
        const { sortable: i } = a, { group: s } = i;
        let o = r.get(s);
        o || (o = /* @__PURE__ */ new Set(), r.set(s, o)), o.add(i);
      }
      return r;
    }, n = [e.monitor.addEventListener("dragover", (r, a) => {
      if (this.disabled) return;
      const { dragOperation: i } = a, { source: s, target: o } = i;
      if (!ke(s) || !ke(o) || s.sortable === o.sortable) return;
      const l = t(), c = Vs(l), u = s.sortable.group === o.sortable.group, d = l.get(s.sortable.group), m = u ? d : l.get(o.sortable.group);
      !d || !m || queueMicrotask(() => {
        r.defaultPrevented || a.renderer.rendering.then(() => {
          var p, y;
          const v = t();
          if (js(c, l, v)) return;
          const w = s.sortable.element, x = o.sortable.element;
          if (!x || !w || !u && o.id === s.sortable.group) return;
          const h = Fn(d), g = u ? h : Fn(m), b = (p = s.sortable.group) != null ? p : $s, f = (y = o.sortable.group) != null ? y : $s, D = { [b]: h, [f]: g }, I = Bh(D, r);
          if (D === I) return;
          const S = I[f].indexOf(s.sortable), q = I[f].indexOf(o.sortable);
          a.collisionObserver.disable(), Fs(w, S, x, q), W(() => {
            for (const [C, oe] of I[b].entries()) oe.index = C;
            if (!u) for (const [C, oe] of I[f].entries()) oe.group = o.sortable.group, oe.index = C;
          }), a.actions.setDropTarget(s.id).then(() => a.collisionObserver.enable());
        });
      });
    }), e.monitor.addEventListener("dragend", (r, a) => {
      if (!r.canceled) return;
      const { dragOperation: i } = a, { source: s } = i;
      ke(s) && (s.sortable.initialIndex === s.sortable.index && s.sortable.initialGroup === s.sortable.group || queueMicrotask(() => {
        const o = t(), l = Vs(o), c = o.get(s.sortable.initialGroup);
        c && a.renderer.rendering.then(() => {
          const u = t();
          if (js(l, o, u)) return;
          const d = Fn(c), m = Fn(c, Yh), p = s.sortable.element, y = m.indexOf(s.sortable), v = d[y], w = v?.element;
          !v || !w || !p || (Fs(p, v.index, w, s.index), W(() => {
            for (const x of o.values()) {
              const h = Array.from(x).values();
              for (const g of h) g.index = g.initialIndex, g.group = g.initialGroup;
            }
          }));
        });
      }));
    })];
    this.destroy = () => {
      for (const r of n) r();
    };
  }
};
function Fs(e, t, n, r) {
  const a = r < t ? "afterend" : "beforebegin";
  n.insertAdjacentElement(a, e);
}
function Gh(e, t) {
  return e.index - t.index;
}
function Yh(e, t) {
  return e.initialIndex - t.initialIndex;
}
function Fn(e, t = Gh) {
  return Array.from(e).sort(t);
}
var Us = [Lh, Kh], yd = { duration: 250, easing: "cubic-bezier(0.25, 1, 0.5, 1)", idle: false };
function Hs(e) {
  var t, n;
  return typeof e == "boolean" ? { draggable: e, droppable: e } : { draggable: (t = e?.draggable) != null ? t : false, droppable: (n = e?.droppable) != null ? n : false };
}
var Un = new pc(), vd, xd, We, Ui, an, sn, Hi, xt;
xd = [_], vd = [_];
var Vr = class {
  constructor(e, t) {
    Ft(this, Ui, Vn(We, 8, this)), Vn(We, 11, this), Ft(this, an), Ft(this, sn), Ft(this, Hi, Vn(We, 12, this)), Vn(We, 15, this), Ft(this, xt), this.register = () => (W(() => {
      var y, v;
      (y = this.manager) == null || y.registry.register(this.droppable), (v = this.manager) == null || v.registry.register(this.draggable);
    }), () => this.unregister()), this.unregister = () => {
      W(() => {
        var y, v;
        (y = this.manager) == null || y.registry.unregister(this.droppable), (v = this.manager) == null || v.registry.unregister(this.draggable);
      });
    }, this.destroy = () => {
      W(() => {
        this.droppable.destroy(), this.draggable.destroy();
      });
    };
    var n = e, { effects: r = () => [], disabled: a, group: i, index: s, sensors: o, type: l, transition: c = yd, plugins: u } = n, d = Rh(n, ["effects", "disabled", "group", "index", "sensors", "type", "transition", "plugins"]);
    const m = me(u, Us), p = Hs(a);
    this.droppable = new Bi(aa(ra({}, d), { disabled: p.droppable }), t, this), this.draggable = new wd(aa(ra({}, d), { disabled: p.draggable, plugins: m, effects: () => [() => {
      var y, v, w;
      const x = (y = this.manager) == null ? void 0 : y.dragOperation.status;
      x?.initializing && this.id === ((w = (v = this.manager) == null ? void 0 : v.dragOperation.source) == null ? void 0 : w.id) && Un.clear(this.manager), x?.dragging && Un.set(this.manager, this.id, P(() => ({ initialIndex: this.index, initialGroup: this.group })));
    }, () => {
      const { index: y, group: v, manager: w } = this, x = rn(this, sn), h = rn(this, an);
      (y !== x || v !== h) && (Qe(this, sn, y), Qe(this, an, v), this.animate());
    }, () => {
      var y, v;
      const { target: w } = this, { isDragSource: x } = this.draggable;
      ((v = (y = this.draggable.pluginConfig(Ql)) == null ? void 0 : y.feedback) != null ? v : "default") === "move" && x && (this.droppable.disabled = !w);
    }, ...r()], type: l, sensors: o }), t, this), Qe(this, xt, d.element), this.manager = t, this.index = s, Qe(this, sn, s), this.group = i, Qe(this, an, i), this.type = l, this.transition = c;
  }
  get initialIndex() {
    var e, t;
    return (t = (e = Un.get(this.manager, this.id)) == null ? void 0 : e.initialIndex) != null ? t : this.index;
  }
  get initialGroup() {
    var e, t;
    return (t = (e = Un.get(this.manager, this.id)) == null ? void 0 : e.initialGroup) != null ? t : this.group;
  }
  animate() {
    P(() => {
      const { manager: e, transition: t } = this, { shape: n } = this.droppable;
      if (!e) return;
      const { idle: r } = e.dragOperation.status;
      !n || !t || r && !t.idle || e.renderer.rendering.then(() => {
        const { element: a } = this;
        if (!a) return;
        for (const u of a.getAnimations()) "transitionProperty" in u && (u.transitionProperty === "transform" || u.transitionProperty === "translate" || u.transitionProperty === "scale") && u.cancel();
        const i = this.refreshShape();
        if (!i) return;
        const s = { x: n.boundingRectangle.left - i.boundingRectangle.left, y: n.boundingRectangle.top - i.boundingRectangle.top }, { translate: o } = fe(a), l = _s(a, o, false), c = _s(a, o);
        if (s.x || s.y) {
          const u = Pi(se(a)) ? aa(ra({}, t), { duration: 0 }) : t;
          Nl({ element: a, keyframes: { translate: [`${l.x + s.x}px ${l.y + s.y}px ${l.z}`, `${c.x}px ${c.y}px ${c.z}`] }, options: u }).then(() => {
            e.dragOperation.status.dragging || (this.droppable.shape = void 0);
          });
        }
      });
    });
  }
  get manager() {
    return this.draggable.manager;
  }
  set manager(e) {
    W(() => {
      this.draggable.manager = e, this.droppable.manager = e;
    });
  }
  set element(e) {
    W(() => {
      const t = rn(this, xt), n = this.droppable.element, r = this.draggable.element;
      (!n || n === t) && (this.droppable.element = e), (!r || r === t) && (this.draggable.element = e), Qe(this, xt, e);
    });
  }
  get element() {
    var e, t;
    const n = rn(this, xt);
    if (n) return (t = (e = Pa.get(n)) != null ? e : n) != null ? t : this.droppable.element;
  }
  set target(e) {
    this.droppable.element = e;
  }
  get target() {
    return this.droppable.element;
  }
  set source(e) {
    this.draggable.element = e;
  }
  get source() {
    return this.draggable.element;
  }
  get disabled() {
    const { disabled: e } = this.draggable, { disabled: t } = this.droppable;
    return e === t ? e : { draggable: e, droppable: t };
  }
  set plugins(e) {
    this.draggable.plugins = me(e, Us);
  }
  set disabled(e) {
    const t = Hs(e);
    W(() => {
      this.droppable.disabled = t.droppable, this.draggable.disabled = t.draggable;
    });
  }
  set data(e) {
    W(() => {
      this.droppable.data = e, this.draggable.data = e;
    });
  }
  set handle(e) {
    this.draggable.handle = e;
  }
  set id(e) {
    this.droppable.id = e, this.draggable.id = e;
  }
  get id() {
    return this.droppable.id;
  }
  set sensors(e) {
    this.draggable.sensors = e;
  }
  set modifiers(e) {
    this.draggable.modifiers = e;
  }
  set collisionPriority(e) {
    this.droppable.collisionPriority = e;
  }
  set collisionDetector(e) {
    this.droppable.collisionDetector = e ?? Ol;
  }
  set alignment(e) {
    this.draggable.alignment = e;
  }
  get alignment() {
    return this.draggable.alignment;
  }
  set type(e) {
    W(() => {
      this.droppable.type = e, this.draggable.type = e;
    });
  }
  get type() {
    return this.draggable.type;
  }
  set accept(e) {
    this.droppable.accept = e;
  }
  get accept() {
    return this.droppable.accept;
  }
  get isDropTarget() {
    return this.droppable.isDropTarget;
  }
  get isDragSource() {
    return this.draggable.isDragSource;
  }
  get isDragging() {
    return this.draggable.isDragging;
  }
  get isDropping() {
    return this.draggable.isDropping;
  }
  get status() {
    return this.draggable.status;
  }
  refreshShape() {
    return this.droppable.refreshShape();
  }
  accepts(e) {
    return this.droppable.accepts(e);
  }
};
We = Nh();
Ui = /* @__PURE__ */ new WeakMap();
an = /* @__PURE__ */ new WeakMap();
sn = /* @__PURE__ */ new WeakMap();
Hi = /* @__PURE__ */ new WeakMap();
xt = /* @__PURE__ */ new WeakMap();
fd(We, 4, "index", xd, Vr, Ui);
fd(We, 4, "group", vd, Vr, Hi);
qh(We, Vr);
var wd = class extends Wr {
  constructor(e, t, n) {
    super(e, t), this.sortable = n;
  }
  get index() {
    return this.sortable.index;
  }
  get initialIndex() {
    return this.sortable.initialIndex;
  }
  get group() {
    return this.sortable.group;
  }
  get initialGroup() {
    return this.sortable.initialGroup;
  }
}, Bi = class extends Fi {
  constructor(e, t, n) {
    super(e, t), this.sortable = n;
  }
  get index() {
    return this.sortable.index;
  }
  get group() {
    return this.sortable.group;
  }
};
function Xh(e) {
  const t = /* @__PURE__ */ new Map(), n = hr(0);
  return Tr(() => {
    const r = z(e);
    if (!r) {
      t.clear();
      return;
    }
    Ba(ie(() => {
      let a = false;
      for (const i of t) {
        const [s] = i, o = P(() => i[1]), l = r[s];
        o !== l && (a = true, t.set(s, l));
      }
      a && n.value++;
    }));
  }, { flush: "post" }), De(() => {
    const r = z(e);
    return n.value, r && new Proxy(r, { get(a, i) {
      const s = a[i];
      return t.set(i, s), s;
    } });
  });
}
function we(e) {
  var t, n;
  const r = z(e);
  return (n = (t = r?.$el) != null ? t : r) != null ? n : void 0;
}
function Zh(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => [t, z(n)]));
}
var Jh = Object.defineProperty, Qh = Object.defineProperties, em = Object.getOwnPropertyDescriptors, Bs = Object.getOwnPropertySymbols, tm = Object.prototype.hasOwnProperty, nm = Object.prototype.propertyIsEnumerable, Ks = (e, t, n) => t in e ? Jh(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n, sa = (e, t) => {
  for (var n in t || (t = {})) tm.call(t, n) && Ks(e, n, t[n]);
  if (Bs) for (var n of Bs(t)) nm.call(t, n) && Ks(e, n, t[n]);
  return e;
}, rm = (e, t) => Qh(e, em(t));
function am(e) {
  const t = De(() => sa(sa({}, yd), z(e.transition))), n = Ih((a) => {
    const i = Zh(e);
    return new Vr(rm(sa({}, i), { register: false, transition: t.value, element: we(e.element), handle: we(e.handle), target: we(e.target) }), a);
  }), r = Xh(n);
  return Tr(() => {
    var a;
    n.value.element = we(e.element), n.value.handle = we(e.handle), we(e.source) && (n.value.source = we(e.source)), we(e.target) && (n.value.target = we(e.target)), n.value.id = z(e.id), n.value.disabled = (a = z(e.disabled)) != null ? a : false, n.value.alignment = z(e.alignment), n.value.plugins = z(e.plugins), n.value.modifiers = z(e.modifiers), n.value.sensors = z(e.sensors), n.value.accept = z(e.accept), n.value.type = z(e.type), n.value.collisionPriority = z(e.collisionPriority), n.value.transition = t.value, z(e.data) && (n.value.data = z(e.data));
  }), ur([() => z(e.group), () => z(e.index)], () => {
    W(() => {
      n.value.group = z(e.group), n.value.index = z(e.index);
    });
  }, { flush: "sync" }), ur(() => z(e.index), () => {
    var a, i;
    (a = n.value.manager) != null && a.dragOperation.status.idle && ((i = n.value.transition) != null && i.idle) && n.value.refreshShape();
  }), { sortable: Kd(n), isDragging: De(() => r.value.isDragging), isDropping: De(() => r.value.isDropping), isDragSource: De(() => r.value.isDragSource), isDropTarget: De(() => r.value.isDropTarget) };
}
var im = Object.defineProperty, sm = Object.defineProperties, om = Object.getOwnPropertyDescriptors, Gs = Object.getOwnPropertySymbols, lm = Object.prototype.hasOwnProperty, dm = Object.prototype.propertyIsEnumerable, Ys = (e, t, n) => t in e ? im(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n, Ki = (e, t) => {
  for (var n in t || (t = {})) lm.call(t, n) && Ys(e, n, t[n]);
  if (Gs) for (var n of Gs(t)) dm.call(t, n) && Ys(e, n, t[n]);
  return e;
}, Dd = (e, t) => sm(e, om(t)), Fa = class extends yn {
  apply({ transform: t }) {
    if (!this.options) return t;
    const { axis: n, value: r } = this.options;
    return Dd(Ki({}, t), { [n]: r });
  }
};
Fa.configure = je(Fa);
var kd = Fa;
kd.configure({ axis: "x", value: 0 });
kd.configure({ axis: "y", value: 0 });
function cm(e, t, n) {
  const r = Ki({}, t);
  return e.boundingRectangle.top + t.y <= n.top ? r.y = n.top - e.boundingRectangle.top : e.boundingRectangle.bottom + t.y >= n.top + n.height && (r.y = n.top + n.height - e.boundingRectangle.bottom), e.boundingRectangle.left + t.x <= n.left ? r.x = n.left - e.boundingRectangle.left : e.boundingRectangle.right + t.x >= n.left + n.width && (r.x = n.left + n.width - e.boundingRectangle.right), r;
}
var Xs = class extends yn {
  apply({ transform: t }) {
    var n;
    const { size: r = 20 } = (n = this.options) != null ? n : {}, a = typeof r == "number" ? r : r.x, i = typeof r == "number" ? r : r.y;
    return Dd(Ki({}, t), { x: Math.ceil(t.x / a) * a, y: Math.ceil(t.y / i) * i });
  }
};
Xs.configure = je(Xs);
var Ua = class extends yn {
  constructor(t, n) {
    super(t, n), this.boundingRectangle = at(null), this.destroy = ie(() => {
      if (!this.options) return;
      const { dragOperation: r } = t, { status: a } = r;
      if (a.initialized) {
        const { element: i } = this.options, s = typeof i == "function" ? i(r) : i;
        if (!s) return;
        let o;
        const l = () => {
          this.boundingRectangle.value = ot(s);
        }, c = () => {
          o || (o = setTimeout(() => {
            l(), o = void 0;
          }, 25));
        }, u = new ResizeObserver(l);
        return u.observe(s), document.addEventListener("scroll", c, { passive: true, capture: true }), () => {
          document.removeEventListener("scroll", c, { capture: true }), u.disconnect(), this.boundingRectangle.value = null;
        };
      }
    });
  }
  apply(t) {
    const { shape: n, transform: r } = t;
    if (!n) return r;
    const a = this.boundingRectangle.value;
    if (!a) return r;
    const { initial: i, current: s } = n, { height: o, width: l } = s.boundingRectangle, c = i.center.x - l / 2, u = i.center.y - o / 2;
    return cm(new pe(c, u, l, o), r, a);
  }
};
Ua.configure = je(Ua);
var um = Ua;
const pn = (e) => e.source?.element?.parentElement ?? null;
pn.__docgenInfo = Object.assign({ displayName: pn.name ?? pn.__name }, { exportName: "getReorderContainer", displayName: "getReorderContainer", type: 2, props: [{ name: "__#22@#private", global: false, description: "", tags: [], required: true, type: "any", declarations: [], schema: "any" }, { name: "status", global: false, description: "Current status of the drag operation", tags: [], required: true, type: "Status", declarations: [], schema: { kind: "object", type: "Status" } }, { name: "controller", global: false, description: "The controller for the currentdrag operation", tags: [], required: true, type: "AbortController | undefined", declarations: [], schema: { kind: "enum", type: "AbortController | undefined", schema: ["undefined", { kind: "object", type: "AbortController" }] } }, { name: "shape", global: false, description: `Gets the current shape of the dragged entity with history.
Sets the shape of the dragged entity.`, tags: [{ name: "returns", text: "The shape history or null if no shape is set" }, { name: "param", text: "value - The new shape or null to reset" }], required: true, type: "WithHistory<Shape> | null", declarations: [], schema: { kind: "enum", type: "WithHistory<Shape> | null", schema: ["null", { kind: "object", type: "WithHistory<Shape>" }] } }, { name: "canceled", global: false, description: "Whether the drag operation was canceled", tags: [], required: true, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "activatorEvent", global: false, description: "The event that initiated the drag operation", tags: [], required: true, type: "Event | null", declarations: [], schema: { kind: "enum", type: "Event | null", schema: ["null", { kind: "object", type: "Event" }] } }, { name: "sourceIdentifier", global: false, description: "Unique identifier of the source draggable entity", tags: [], required: true, type: "UniqueIdentifier | null", declarations: [], schema: { kind: "enum", type: "UniqueIdentifier | null", schema: ["null", "string", "number"] } }, { name: "targetIdentifier", global: false, description: "Unique identifier of the target droppable entity", tags: [], required: true, type: "UniqueIdentifier | null", declarations: [], schema: { kind: "enum", type: "UniqueIdentifier | null", schema: ["null", "string", "number"] } }, { name: "modifiers", global: false, description: "List of modifiers applied to the drag operation", tags: [], required: true, type: "Modifier<DragDropManager<any, any>, PluginOptions>[]", declarations: [], schema: { kind: "array", type: "Modifier<DragDropManager<any, any>, PluginOptions>[]" } }, { name: "position", global: false, description: "Current position of the dragged entity", tags: [], required: true, type: "Position", declarations: [], schema: { kind: "object", type: "Position" } }, { name: "source", global: false, description: "Gets the source draggable entity.", tags: [{ name: "returns", text: `The current draggable entity, falling back to the previous
instance to bridge the gap when React unmounts and remounts a sortable
during reparenting (e.g. moving an item between columns).` }], required: true, type: "Draggable<Data> | null", declarations: [], schema: { kind: "enum", type: "Draggable<Data> | null", schema: ["null", "Draggable<Data>"] } }, { name: "target", global: false, description: "Gets the target droppable entity.", tags: [{ name: "returns", text: "The current droppable entity or null if not found" }], required: true, type: "Droppable<Data> | null", declarations: [], schema: { kind: "enum", type: "Droppable<Data> | null", schema: ["null", "Droppable<Data>"] } }, { name: "transform", global: false, description: "Gets the current transform after applying all modifiers.", tags: [{ name: "returns", text: "The transformed coordinates" }], required: true, type: "{ x: number; y: number; }", declarations: [], schema: { kind: "object", type: "{ x: number; y: number; }" } }, { name: "snapshot", global: false, description: "Creates a snapshot of the current drag operation state.", tags: [{ name: "returns", text: "An immutable snapshot of the current operation state" }], required: true, type: "() => DragOperationSnapshot<Draggable<Data>, Droppable<Data>>", declarations: [], schema: { kind: "event", type: "(): DragOperationSnapshot<Draggable<Data>, Droppable<Data>>" } }, { name: "reset", global: false, description: "Resets the drag operation to its initial state.", tags: [{ name: "remarks", text: `This method:
- Sets status to idle
- Clears source and target identifiers
- Resets shape history
- Resets position and transform
- Clears modifiers` }], required: true, type: "() => void", declarations: [], schema: { kind: "event", type: "(): void" } }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/getReorderContainer.ts" });
const hm = (e) => {
  let t = e;
  for (; t; ) {
    if (Pe(t) && fe(t, true).position === "fixed") return t;
    t = t.parentElement;
  }
  return null;
}, mm = (e) => e.offsetParent === null, gn = (e) => {
  const t = [...Dr(e, { excludeElement: false })], n = hm(e);
  if (!n) return t;
  const r = t.filter((i) => i === n || n.contains(i));
  if (mm(n)) return r;
  const a = n.parentElement ? gn(n.parentElement) : [];
  return [...r, ...a];
};
gn.__docgenInfo = Object.assign({ displayName: gn.name ?? gn.__name }, { exportName: "getReorderScrollCandidates", displayName: "getReorderScrollCandidates", type: 2, props: [{ name: "attributes", global: false, description: "The **`Element.attributes`** property returns a live collection of all attribute nodes registered to the specified node.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/attributes)", tags: [], required: true, type: "NamedNodeMap", declarations: [], schema: { kind: "object", type: "NamedNodeMap" } }, { name: "classList", global: false, description: "The **`Element.classList`** is a read-only property that returns a live DOMTokenList collection of the `class` attributes of the element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/classList)", tags: [], required: true, type: "DOMTokenList", declarations: [], schema: { kind: "object", type: "DOMTokenList" } }, { name: "className", global: false, description: "The **`className`** property of the of the specified element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/className)", tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "clientHeight", global: false, description: "The **`clientHeight`** read-only property of the Element interface is zero for elements with no CSS or inline layout boxes; otherwise, it's the inner height of an element in pixels.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientHeight)", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "clientLeft", global: false, description: "The **`clientLeft`** read-only property of the Element interface returns the width of the left border of an element in pixels.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientLeft)", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "clientTop", global: false, description: "The **`clientTop`** read-only property of the Element interface returns the width of the top border of an element in pixels.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientTop)", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "clientWidth", global: false, description: "The **`clientWidth`** read-only property of the Element interface is zero for inline elements and elements with no CSS; otherwise, it's the inner width of an element in pixels.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientWidth)", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "currentCSSZoom", global: false, description: "The **`currentCSSZoom`** read-only property of the Element interface provides the 'effective' CSS `zoom` of an element, taking into account the zoom applied to the element and all its parent elements.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/currentCSSZoom)", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "id", global: false, description: "The **`id`** property of the Element interface represents the element's identifier, reflecting the **`id`** global attribute.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/id)", tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "innerHTML", global: false, description: "The **`innerHTML`** property of the Element interface gets or sets the HTML or XML markup contained within the element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/innerHTML)", tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "localName", global: false, description: "The **`Element.localName`** read-only property returns the local part of the qualified name of an element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/localName)", tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "namespaceURI", global: false, description: "The **`Element.namespaceURI`** read-only property returns the namespace URI of the element, or `null` if the element is not in a namespace.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/namespaceURI)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "onfullscreenchange", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenchange_event)", tags: [], required: true, type: "((this: Element, ev: Event) => any) | null", declarations: [], schema: { kind: "enum", type: "((this: Element, ev: Event) => any) | null", schema: ["null", { kind: "event", type: "(this: Element, ev: Event): any" }] } }, { name: "onfullscreenerror", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenerror_event)", tags: [], required: true, type: "((this: Element, ev: Event) => any) | null", declarations: [], schema: { kind: "enum", type: "((this: Element, ev: Event) => any) | null", schema: ["null", { kind: "event", type: "(this: Element, ev: Event): any" }] } }, { name: "outerHTML", global: false, description: "The **`outerHTML`** attribute of the Element DOM interface gets the serialized HTML fragment describing the element including its descendants.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/outerHTML)", tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "ownerDocument", global: false, description: "The read-only **`ownerDocument`** property of the Node interface returns the top-level document object of the node.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/ownerDocument)", tags: [], required: true, type: "Document", declarations: [], schema: { kind: "object", type: "Document" } }, { name: "part", global: false, description: "The **`part`** property of the Element interface represents the part identifier(s) of the element (i.e., set using the `part` attribute), returned as a DOMTokenList.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/part)", tags: [], required: true, type: "DOMTokenList", declarations: [], schema: { kind: "object", type: "DOMTokenList" } }, { name: "prefix", global: false, description: "The **`Element.prefix`** read-only property returns the namespace prefix of the specified element, or `null` if no prefix is specified.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/prefix)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "scrollHeight", global: false, description: "The **`scrollHeight`** read-only property of the Element interface is a measurement of the height of an element's content, including content not visible on the screen due to overflow.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollHeight)", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "scrollLeft", global: false, description: "The **`scrollLeft`** property of the Element interface gets or sets the number of pixels by which an element's content is scrolled from its left edge.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollLeft)", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "scrollTop", global: false, description: "The **`scrollTop`** property of the Element interface gets or sets the number of pixels by which an element's content is scrolled from its top edge.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollTop)", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "scrollWidth", global: false, description: "The **`scrollWidth`** read-only property of the Element interface is a measurement of the width of an element's content, including content not visible on the screen due to overflow.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollWidth)", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "shadowRoot", global: false, description: "The `Element.shadowRoot` read-only property represents the shadow root hosted by the element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/shadowRoot)", tags: [], required: true, type: "ShadowRoot | null", declarations: [], schema: { kind: "enum", type: "ShadowRoot | null", schema: ["null", { kind: "object", type: "ShadowRoot" }] } }, { name: "slot", global: false, description: "The **`slot`** property of the Element interface returns the name of the shadow DOM slot the element is inserted in.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/slot)", tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "tagName", global: false, description: "The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)", tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "attachShadow", global: false, description: "The **`Element.attachShadow()`** method attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/attachShadow)", tags: [], required: true, type: "(init: ShadowRootInit) => ShadowRoot", declarations: [], schema: { kind: "event", type: "(init: ShadowRootInit): ShadowRoot" } }, { name: "checkVisibility", global: false, description: "The **`checkVisibility()`** method of the Element interface checks whether the element is visible.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/checkVisibility)", tags: [], required: true, type: "(options?: CheckVisibilityOptions | undefined) => boolean", declarations: [], schema: { kind: "event", type: "(options?: CheckVisibilityOptions | undefined): boolean" } }, { name: "closest", global: false, description: "The **`closest()`** method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/closest)", tags: [], required: true, type: "{ <K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null; <K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null; <K extends keyof MathMLElementTagNameMap>(selector: K): MathMLElementTagNameMap[K] | null; <E extends Element = Element>(selectors: string): E ...", declarations: [], schema: "{ <K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null; <K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null; <K extends keyof MathMLElementTagNameMap>(selector: K): MathMLElementTagNameMap[K] | null; <E extends Element = Element>(selectors: string): E ..." }, { name: "computedStyleMap", global: false, description: "The **`computedStyleMap()`** method of the Element interface returns a StylePropertyMapReadOnly interface which provides a read-only representation of a CSS declaration block that is an alternative to CSSStyleDeclaration.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/computedStyleMap)", tags: [], required: true, type: "() => StylePropertyMapReadOnly", declarations: [], schema: { kind: "event", type: "(): StylePropertyMapReadOnly" } }, { name: "getAttribute", global: false, description: "The **`getAttribute()`** method of the element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttribute)", tags: [], required: true, type: "(qualifiedName: string) => string | null", declarations: [], schema: { kind: "event", type: "(qualifiedName: string): string | null" } }, { name: "getAttributeNS", global: false, description: "The **`getAttributeNS()`** method of the Element interface returns the string value of the attribute with the specified namespace and name.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNS)", tags: [], required: true, type: "(namespace: string | null, localName: string) => string | null", declarations: [], schema: { kind: "event", type: "(namespace: string | null, localName: string): string | null" } }, { name: "getAttributeNames", global: false, description: "The **`getAttributeNames()`** method of the array.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNames)", tags: [], required: true, type: "() => string[]", declarations: [], schema: { kind: "event", type: "(): string[]" } }, { name: "getAttributeNode", global: false, description: `Returns the specified attribute of the specified element, as an Attr node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNode)`, tags: [], required: true, type: "(qualifiedName: string) => Attr | null", declarations: [], schema: { kind: "event", type: "(qualifiedName: string): Attr | null" } }, { name: "getAttributeNodeNS", global: false, description: "The **`getAttributeNodeNS()`** method of the Element interface returns the namespaced Attr node of an element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNodeNS)", tags: [], required: true, type: "(namespace: string | null, localName: string) => Attr | null", declarations: [], schema: { kind: "event", type: "(namespace: string | null, localName: string): Attr | null" } }, { name: "getBoundingClientRect", global: false, description: "The **`Element.getBoundingClientRect()`** method returns a position relative to the viewport.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getBoundingClientRect)", tags: [], required: true, type: "() => DOMRect", declarations: [], schema: { kind: "event", type: "(): DOMRect" } }, { name: "getClientRects", global: false, description: "The **`getClientRects()`** method of the Element interface returns a collection of DOMRect objects that indicate the bounding rectangles for each CSS border box in a client.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getClientRects)", tags: [], required: true, type: "() => DOMRectList", declarations: [], schema: { kind: "event", type: "(): DOMRectList" } }, { name: "getElementsByClassName", global: false, description: "The Element method **`getElementsByClassName()`** returns a live specified class name or names.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByClassName)", tags: [], required: true, type: "(classNames: string) => HTMLCollectionOf<Element>", declarations: [], schema: { kind: "event", type: "(classNames: string): HTMLCollectionOf<Element>" } }, { name: "getElementsByTagName", global: false, description: "The **`Element.getElementsByTagName()`** method returns a live All descendants of the specified element are searched, but not the element itself.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByTagName)", tags: [{ name: "deprecated" }], required: true, type: "{ <K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>; <K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<...>; <K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<...>; <K extends keyof HTMLElementDeprecatedTagNameMa...", declarations: [], schema: "{ <K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>; <K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<...>; <K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<...>; <K extends keyof HTMLElementDeprecatedTagNameMa..." }, { name: "getElementsByTagNameNS", global: false, description: "The **`Element.getElementsByTagNameNS()`** method returns a live HTMLCollection of elements with the given tag name belonging to the given namespace.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByTagNameNS)", tags: [], required: true, type: '{ (namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>; (namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<...>; (namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: string): HTMLCollectionOf<...>; (namespace: string | null, localN...', declarations: [], schema: '{ (namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>; (namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<...>; (namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: string): HTMLCollectionOf<...>; (namespace: string | null, localN...' }, { name: "getHTML", global: false, description: "The **`getHTML()`** method of the Element interface is used to serialize an element's DOM to an HTML string.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getHTML)", tags: [], required: true, type: "(options?: GetHTMLOptions | undefined) => string", declarations: [], schema: { kind: "event", type: "(options?: GetHTMLOptions | undefined): string" } }, { name: "hasAttribute", global: false, description: "The **`Element.hasAttribute()`** method returns a **Boolean** value indicating whether the specified element has the specified attribute or not.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttribute)", tags: [], required: true, type: "(qualifiedName: string) => boolean", declarations: [], schema: { kind: "event", type: "(qualifiedName: string): boolean" } }, { name: "hasAttributeNS", global: false, description: "The **`hasAttributeNS()`** method of the Element interface returns a boolean value indicating whether the current element has the specified attribute with the specified namespace.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttributeNS)", tags: [], required: true, type: "(namespace: string | null, localName: string) => boolean", declarations: [], schema: { kind: "event", type: "(namespace: string | null, localName: string): boolean" } }, { name: "hasAttributes", global: false, description: "The **`hasAttributes()`** method of the Element interface returns a boolean value indicating whether the current element has any attributes or not.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttributes)", tags: [], required: true, type: "() => boolean", declarations: [], schema: { kind: "event", type: "(): boolean" } }, { name: "hasPointerCapture", global: false, description: "The **`hasPointerCapture()`** method of the pointer capture for the pointer identified by the given pointer ID.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasPointerCapture)", tags: [], required: true, type: "(pointerId: number) => boolean", declarations: [], schema: { kind: "event", type: "(pointerId: number): boolean" } }, { name: "insertAdjacentElement", global: false, description: "The **`insertAdjacentElement()`** method of the relative to the element it is invoked upon.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentElement)", tags: [], required: true, type: "(where: InsertPosition, element: Element) => Element | null", declarations: [], schema: { kind: "event", type: "(where: InsertPosition, element: Element): Element | null" } }, { name: "insertAdjacentHTML", global: false, description: "The **`insertAdjacentHTML()`** method of the the resulting nodes into the DOM tree at a specified position.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentHTML)", tags: [], required: true, type: "(position: InsertPosition, string: string) => void", declarations: [], schema: { kind: "event", type: "(position: InsertPosition, string: string): void" } }, { name: "insertAdjacentText", global: false, description: "The **`insertAdjacentText()`** method of the Element interface, given a relative position and a string, inserts a new text node at the given position relative to the element it is called from.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentText)", tags: [], required: true, type: "(where: InsertPosition, data: string) => void", declarations: [], schema: { kind: "event", type: "(where: InsertPosition, data: string): void" } }, { name: "matches", global: false, description: "The **`matches()`** method of the Element interface tests whether the element would be selected by the specified CSS selector.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/matches)", tags: [], required: true, type: "(selectors: string) => boolean", declarations: [], schema: { kind: "event", type: "(selectors: string): boolean" } }, { name: "releasePointerCapture", global: false, description: "The **`releasePointerCapture()`** method of the previously set for a specific (PointerEvent) _pointer_.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/releasePointerCapture)", tags: [], required: true, type: "(pointerId: number) => void", declarations: [], schema: { kind: "event", type: "(pointerId: number): void" } }, { name: "removeAttribute", global: false, description: "The Element method **`removeAttribute()`** removes the attribute with the specified name from the element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttribute)", tags: [], required: true, type: "(qualifiedName: string) => void", declarations: [], schema: { kind: "event", type: "(qualifiedName: string): void" } }, { name: "removeAttributeNS", global: false, description: "The **`removeAttributeNS()`** method of the If you are working with HTML and you don't need to specify the requested attribute as being part of a specific namespace, use the Element.removeAttribute() method instead.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttributeNS)", tags: [], required: true, type: "(namespace: string | null, localName: string) => void", declarations: [], schema: { kind: "event", type: "(namespace: string | null, localName: string): void" } }, { name: "removeAttributeNode", global: false, description: "The **`removeAttributeNode()`** method of the Element interface removes the specified Attr node from the element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttributeNode)", tags: [], required: true, type: "(attr: Attr) => Attr", declarations: [], schema: { kind: "event", type: "(attr: Attr): Attr" } }, { name: "requestFullscreen", global: false, description: "The **`Element.requestFullscreen()`** method issues an asynchronous request to make the element be displayed in fullscreen mode.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/requestFullscreen)", tags: [], required: true, type: "(options?: FullscreenOptions | undefined) => Promise<void>", declarations: [], schema: { kind: "event", type: "(options?: FullscreenOptions | undefined): Promise<void>" } }, { name: "requestPointerLock", global: false, description: "The **`requestPointerLock()`** method of the Element interface lets you asynchronously ask for the pointer to be locked on the given element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/requestPointerLock)", tags: [], required: true, type: "(options?: PointerLockOptions | undefined) => Promise<void>", declarations: [], schema: { kind: "event", type: "(options?: PointerLockOptions | undefined): Promise<void>" } }, { name: "scroll", global: false, description: "The **`scroll()`** method of the Element interface scrolls the element to a particular set of coordinates inside a given element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scroll)", tags: [], required: true, type: "{ (options?: ScrollToOptions | undefined): void; (x: number, y: number): void; }", declarations: [], schema: "{ (options?: ScrollToOptions | undefined): void; (x: number, y: number): void; }" }, { name: "scrollBy", global: false, description: "The **`scrollBy()`** method of the Element interface scrolls an element by the given amount.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollBy)", tags: [], required: true, type: "{ (options?: ScrollToOptions | undefined): void; (x: number, y: number): void; }", declarations: [], schema: "{ (options?: ScrollToOptions | undefined): void; (x: number, y: number): void; }" }, { name: "scrollIntoView", global: false, description: "The Element interface's **`scrollIntoView()`** method scrolls the element's ancestor containers such that the element on which `scrollIntoView()` is called is visible to the user.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollIntoView)", tags: [], required: true, type: "(arg?: boolean | ScrollIntoViewOptions | undefined) => void", declarations: [], schema: { kind: "event", type: "(arg?: boolean | ScrollIntoViewOptions | undefined): void" } }, { name: "scrollTo", global: false, description: "The **`scrollTo()`** method of the Element interface scrolls to a particular set of coordinates inside a given element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollTo)", tags: [], required: true, type: "{ (options?: ScrollToOptions | undefined): void; (x: number, y: number): void; }", declarations: [], schema: "{ (options?: ScrollToOptions | undefined): void; (x: number, y: number): void; }" }, { name: "setAttribute", global: false, description: "The **`setAttribute()`** method of the Element interface sets the value of an attribute on the specified element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttribute)", tags: [], required: true, type: "(qualifiedName: string, value: string) => void", declarations: [], schema: { kind: "event", type: "(qualifiedName: string, value: string): void" } }, { name: "setAttributeNS", global: false, description: "`setAttributeNS` adds a new attribute or changes the value of an attribute with the given namespace and name.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNS)", tags: [], required: true, type: "(namespace: string | null, qualifiedName: string, value: string) => void", declarations: [], schema: { kind: "event", type: "(namespace: string | null, qualifiedName: string, value: string): void" } }, { name: "setAttributeNode", global: false, description: "The **`setAttributeNode()`** method of the Element interface adds a new Attr node to the specified element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNode)", tags: [], required: true, type: "(attr: Attr) => Attr | null", declarations: [], schema: { kind: "event", type: "(attr: Attr): Attr | null" } }, { name: "setAttributeNodeNS", global: false, description: "The **`setAttributeNodeNS()`** method of the Element interface adds a new namespaced Attr node to an element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNodeNS)", tags: [], required: true, type: "(attr: Attr) => Attr | null", declarations: [], schema: { kind: "event", type: "(attr: Attr): Attr | null" } }, { name: "setHTMLUnsafe", global: false, description: "The **`setHTMLUnsafe()`** method of the Element interface is used to parse a string of HTML into a DocumentFragment, optionally filtering out unwanted elements and attributes, and those that don't belong in the context, and then using it to replace the element's subtree in the DOM.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setHTMLUnsafe)", tags: [], required: true, type: "(html: string) => void", declarations: [], schema: { kind: "event", type: "(html: string): void" } }, { name: "setPointerCapture", global: false, description: "The **`setPointerCapture()`** method of the _capture target_ of future pointer events.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setPointerCapture)", tags: [], required: true, type: "(pointerId: number) => void", declarations: [], schema: { kind: "event", type: "(pointerId: number): void" } }, { name: "toggleAttribute", global: false, description: "The **`toggleAttribute()`** method of the present and adding it if it is not present) on the given element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/toggleAttribute)", tags: [], required: true, type: "(qualifiedName: string, force?: boolean | undefined) => boolean", declarations: [], schema: { kind: "event", type: "(qualifiedName: string, force?: boolean | undefined): boolean" } }, { name: "webkitMatchesSelector", global: false, description: "", tags: [{ name: "deprecated", text: "This is a legacy alias of `matches`.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/matches)" }], required: true, type: "(selectors: string) => boolean", declarations: [], schema: { kind: "event", type: "(selectors: string): boolean" } }, { name: "textContent", global: false, description: "[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)", tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "addEventListener", global: false, description: `The **\`addEventListener()\`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)
The **\`addEventListener()\`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)`, tags: [], required: true, type: "{ <K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void; (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | ... 1 more ... | undefined): void; }", declarations: [], schema: "{ <K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void; (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | ... 1 more ... | undefined): void; }" }, { name: "removeEventListener", global: false, description: `The **\`removeEventListener()\`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)
The **\`removeEventListener()\`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)`, tags: [], required: true, type: "{ <K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions | undefined): void; (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | ... 1 more ... | undefined): void; }", declarations: [], schema: "{ <K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions | undefined): void; (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | ... 1 more ... | undefined): void; }" }, { name: "baseURI", global: false, description: "The read-only **`baseURI`** property of the Node interface returns the absolute base URL of the document containing the node.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/baseURI)", tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "childNodes", global: false, description: "The read-only **`childNodes`** property of the Node interface returns a live the first child node is assigned index `0`.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/childNodes)", tags: [], required: true, type: "NodeListOf<ChildNode>", declarations: [], schema: "NodeListOf<ChildNode>" }, { name: "firstChild", global: false, description: "The read-only **`firstChild`** property of the Node interface returns the node's first child in the tree, or `null` if the node has no children.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/firstChild)", tags: [], required: true, type: "ChildNode | null", declarations: [], schema: { kind: "enum", type: "ChildNode | null", schema: ["null", { kind: "object", type: "ChildNode" }] } }, { name: "isConnected", global: false, description: "The read-only **`isConnected`** property of the Node interface returns a boolean indicating whether the node is connected (directly or indirectly) to a Document object.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isConnected)", tags: [], required: true, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "lastChild", global: false, description: "The read-only **`lastChild`** property of the Node interface returns the last child of the node, or `null` if there are no child nodes.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lastChild)", tags: [], required: true, type: "ChildNode | null", declarations: [], schema: { kind: "enum", type: "ChildNode | null", schema: ["null", { kind: "object", type: "ChildNode" }] } }, { name: "nextSibling", global: false, description: "The read-only **`nextSibling`** property of the Node interface returns the node immediately following the specified one in their parent's Node.childNodes, or returns `null` if the specified node is the last child in the parent element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)", tags: [], required: true, type: "ChildNode | null", declarations: [], schema: { kind: "enum", type: "ChildNode | null", schema: ["null", { kind: "object", type: "ChildNode" }] } }, { name: "nodeName", global: false, description: "The read-only **`nodeName`** property of Node returns the name of the current node as a string.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeName)", tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "nodeType", global: false, description: "The read-only **`nodeType`** property of a Node interface is an integer that identifies what the node is.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeType)", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "nodeValue", global: false, description: "The **`nodeValue`** property of the Node interface returns or sets the value of the current node.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeValue)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "parentElement", global: false, description: "The read-only **`parentElement`** property of Node interface returns the DOM node's parent Element, or `null` if the node either has no parent, or its parent isn't a DOM Element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentElement)", tags: [], required: true, type: "HTMLElement | null", declarations: [], schema: { kind: "enum", type: "HTMLElement | null", schema: ["null", { kind: "object", type: "HTMLElement" }] } }, { name: "parentNode", global: false, description: "The read-only **`parentNode`** property of the Node interface returns the parent of the specified node in the DOM tree.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentNode)", tags: [], required: true, type: "ParentNode | null", declarations: [], schema: { kind: "enum", type: "ParentNode | null", schema: ["null", { kind: "object", type: "ParentNode" }] } }, { name: "previousSibling", global: false, description: "The read-only **`previousSibling`** property of the Node interface returns the node immediately preceding the specified one in its parent's or `null` if the specified node is the first in that list.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/previousSibling)", tags: [], required: true, type: "ChildNode | null", declarations: [], schema: { kind: "enum", type: "ChildNode | null", schema: ["null", { kind: "object", type: "ChildNode" }] } }, { name: "appendChild", global: false, description: "The **`appendChild()`** method of the Node interface adds a node to the end of the list of children of a specified parent node.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/appendChild)", tags: [], required: true, type: "<T extends Node>(node: T) => T", declarations: [], schema: { kind: "event", type: "<T extends Node>(node: T): T" } }, { name: "cloneNode", global: false, description: "The **`cloneNode()`** method of the Node interface returns a duplicate of the node on which this method was called.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/cloneNode)", tags: [], required: true, type: "(subtree?: boolean | undefined) => Node", declarations: [], schema: { kind: "event", type: "(subtree?: boolean | undefined): Node" } }, { name: "compareDocumentPosition", global: false, description: "The **`compareDocumentPosition()`** method of the Node interface reports the position of its argument node relative to the node on which it is called.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/compareDocumentPosition)", tags: [], required: true, type: "(other: Node) => number", declarations: [], schema: { kind: "event", type: "(other: Node): number" } }, { name: "contains", global: false, description: "The **`contains()`** method of the Node interface returns a boolean value indicating whether a node is a descendant of a given node, that is the node itself, one of its direct children (Node.childNodes), one of the children's direct children, and so on.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/contains)", tags: [], required: true, type: "(other: Node | null) => boolean", declarations: [], schema: { kind: "event", type: "(other: Node | null): boolean" } }, { name: "getRootNode", global: false, description: "The **`getRootNode()`** method of the Node interface returns the context object's root, which optionally includes the shadow root if it is available.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/getRootNode)", tags: [], required: true, type: "(options?: GetRootNodeOptions | undefined) => Node", declarations: [], schema: { kind: "event", type: "(options?: GetRootNodeOptions | undefined): Node" } }, { name: "hasChildNodes", global: false, description: "The **`hasChildNodes()`** method of the Node interface returns a boolean value indicating whether the given Node has child nodes or not.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/hasChildNodes)", tags: [], required: true, type: "() => boolean", declarations: [], schema: { kind: "event", type: "(): boolean" } }, { name: "insertBefore", global: false, description: "The **`insertBefore()`** method of the Node interface inserts a node before a _reference node_ as a child of a specified _parent node_.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/insertBefore)", tags: [], required: true, type: "<T extends Node>(node: T, child: Node | null) => T", declarations: [], schema: { kind: "event", type: "<T extends Node>(node: T, child: Node | null): T" } }, { name: "isDefaultNamespace", global: false, description: "The **`isDefaultNamespace()`** method of the Node interface accepts a namespace URI as an argument.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isDefaultNamespace)", tags: [], required: true, type: "(namespace: string | null) => boolean", declarations: [], schema: { kind: "event", type: "(namespace: string | null): boolean" } }, { name: "isEqualNode", global: false, description: "The **`isEqualNode()`** method of the Node interface tests whether two nodes are equal.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isEqualNode)", tags: [], required: true, type: "(otherNode: Node | null) => boolean", declarations: [], schema: { kind: "event", type: "(otherNode: Node | null): boolean" } }, { name: "isSameNode", global: false, description: "The **`isSameNode()`** method of the Node interface is a legacy alias the for the `===` strict equality operator.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isSameNode)", tags: [], required: true, type: "(otherNode: Node | null) => boolean", declarations: [], schema: { kind: "event", type: "(otherNode: Node | null): boolean" } }, { name: "lookupNamespaceURI", global: false, description: "The **`lookupNamespaceURI()`** method of the Node interface takes a prefix as parameter and returns the namespace URI associated with it on the given node if found (and `null` if not).\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupNamespaceURI)", tags: [], required: true, type: "(prefix: string | null) => string | null", declarations: [], schema: { kind: "event", type: "(prefix: string | null): string | null" } }, { name: "lookupPrefix", global: false, description: "The **`lookupPrefix()`** method of the Node interface returns a string containing the prefix for a given namespace URI, if present, and `null` if not.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupPrefix)", tags: [], required: true, type: "(namespace: string | null) => string | null", declarations: [], schema: { kind: "event", type: "(namespace: string | null): string | null" } }, { name: "normalize", global: false, description: "The **`normalize()`** method of the Node interface puts the specified node and all of its sub-tree into a _normalized_ form.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/normalize)", tags: [], required: true, type: "() => void", declarations: [], schema: { kind: "event", type: "(): void" } }, { name: "removeChild", global: false, description: "The **`removeChild()`** method of the Node interface removes a child node from the DOM and returns the removed node.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/removeChild)", tags: [], required: true, type: "<T extends Node>(child: T) => T", declarations: [], schema: { kind: "event", type: "<T extends Node>(child: T): T" } }, { name: "replaceChild", global: false, description: "The **`replaceChild()`** method of the Node interface replaces a child node within the given (parent) node.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/replaceChild)", tags: [], required: true, type: "<T extends Node>(node: Node, child: T) => T", declarations: [], schema: { kind: "event", type: "<T extends Node>(node: Node, child: T): T" } }, { name: "ELEMENT_NODE", global: false, description: "node is an element.", tags: [], required: true, type: "1", declarations: [], schema: "1" }, { name: "ATTRIBUTE_NODE", global: false, description: "", tags: [], required: true, type: "2", declarations: [], schema: "2" }, { name: "TEXT_NODE", global: false, description: "node is a Text node.", tags: [], required: true, type: "3", declarations: [], schema: "3" }, { name: "CDATA_SECTION_NODE", global: false, description: "node is a CDATASection node.", tags: [], required: true, type: "4", declarations: [], schema: "4" }, { name: "ENTITY_REFERENCE_NODE", global: false, description: "", tags: [], required: true, type: "5", declarations: [], schema: "5" }, { name: "ENTITY_NODE", global: false, description: "", tags: [], required: true, type: "6", declarations: [], schema: "6" }, { name: "PROCESSING_INSTRUCTION_NODE", global: false, description: "node is a ProcessingInstruction node.", tags: [], required: true, type: "7", declarations: [], schema: "7" }, { name: "COMMENT_NODE", global: false, description: "node is a Comment node.", tags: [], required: true, type: "8", declarations: [], schema: "8" }, { name: "DOCUMENT_NODE", global: false, description: "node is a document.", tags: [], required: true, type: "9", declarations: [], schema: "9" }, { name: "DOCUMENT_TYPE_NODE", global: false, description: "node is a doctype.", tags: [], required: true, type: "10", declarations: [], schema: "10" }, { name: "DOCUMENT_FRAGMENT_NODE", global: false, description: "node is a DocumentFragment node.", tags: [], required: true, type: "11", declarations: [], schema: "11" }, { name: "NOTATION_NODE", global: false, description: "", tags: [], required: true, type: "12", declarations: [], schema: "12" }, { name: "DOCUMENT_POSITION_DISCONNECTED", global: false, description: "Set when node and other are not in the same tree.", tags: [], required: true, type: "1", declarations: [], schema: "1" }, { name: "DOCUMENT_POSITION_PRECEDING", global: false, description: "Set when other is preceding node.", tags: [], required: true, type: "2", declarations: [], schema: "2" }, { name: "DOCUMENT_POSITION_FOLLOWING", global: false, description: "Set when other is following node.", tags: [], required: true, type: "4", declarations: [], schema: "4" }, { name: "DOCUMENT_POSITION_CONTAINS", global: false, description: "Set when other is an ancestor of node.", tags: [], required: true, type: "8", declarations: [], schema: "8" }, { name: "DOCUMENT_POSITION_CONTAINED_BY", global: false, description: "Set when other is a descendant of node.", tags: [], required: true, type: "16", declarations: [], schema: "16" }, { name: "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", global: false, description: "", tags: [], required: true, type: "32", declarations: [], schema: "32" }, { name: "dispatchEvent", global: false, description: "The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)", tags: [], required: true, type: "{ (event: Event): boolean; (event: Event): boolean; }", declarations: [], schema: "{ (event: Event): boolean; (event: Event): boolean; }" }, { name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: true, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: true, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: true, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: true, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: true, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: true, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: true, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: true, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: true, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "animate", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animate)", tags: [], required: true, type: "(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions | undefined) => Animation", declarations: [], schema: { kind: "event", type: "(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions | undefined): Animation" } }, { name: "getAnimations", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAnimations)", tags: [], required: true, type: "(options?: GetAnimationsOptions | undefined) => Animation[]", declarations: [], schema: { kind: "event", type: "(options?: GetAnimationsOptions | undefined): Animation[]" } }, { name: "after", global: false, description: `Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/after)`, tags: [], required: true, type: "(...nodes: (string | Node)[]) => void", declarations: [], schema: { kind: "event", type: "(...nodes: (string | Node)[]): void" } }, { name: "before", global: false, description: `Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/before)`, tags: [], required: true, type: "(...nodes: (string | Node)[]) => void", declarations: [], schema: { kind: "event", type: "(...nodes: (string | Node)[]): void" } }, { name: "remove", global: false, description: `Removes node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/remove)`, tags: [], required: true, type: "() => void", declarations: [], schema: { kind: "event", type: "(): void" } }, { name: "replaceWith", global: false, description: `Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/replaceWith)`, tags: [], required: true, type: "(...nodes: (string | Node)[]) => void", declarations: [], schema: { kind: "event", type: "(...nodes: (string | Node)[]): void" } }, { name: "nextElementSibling", global: false, description: `Returns the first following sibling that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/nextElementSibling)`, tags: [], required: true, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "previousElementSibling", global: false, description: `Returns the first preceding sibling that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/previousElementSibling)`, tags: [], required: true, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "childElementCount", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/childElementCount)", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "children", global: false, description: `Returns the child elements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/children)`, tags: [], required: true, type: "HTMLCollection", declarations: [], schema: { kind: "object", type: "HTMLCollection" } }, { name: "firstElementChild", global: false, description: `Returns the first child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/firstElementChild)`, tags: [], required: true, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "lastElementChild", global: false, description: `Returns the last child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lastElementChild)`, tags: [], required: true, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "append", global: false, description: `Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/append)`, tags: [], required: true, type: "(...nodes: (string | Node)[]) => void", declarations: [], schema: { kind: "event", type: "(...nodes: (string | Node)[]): void" } }, { name: "prepend", global: false, description: `Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/prepend)`, tags: [], required: true, type: "(...nodes: (string | Node)[]) => void", declarations: [], schema: { kind: "event", type: "(...nodes: (string | Node)[]): void" } }, { name: "querySelector", global: false, description: `Returns the first element that is a descendant of node that matches selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelector)`, tags: [{ name: "deprecated" }], required: true, type: "{ <K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null; <K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null; <K extends keyof MathMLElementTagNameMap>(selectors: K): MathMLElementTagNameMap[K] | null; <K extends keyof HTMLElementDeprecatedTagNameMap>...", declarations: [], schema: "{ <K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null; <K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null; <K extends keyof MathMLElementTagNameMap>(selectors: K): MathMLElementTagNameMap[K] | null; <K extends keyof HTMLElementDeprecatedTagNameMap>..." }, { name: "querySelectorAll", global: false, description: `Returns all element descendants of node that match selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll)`, tags: [{ name: "deprecated" }], required: true, type: "{ <K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>; <K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<...>; <K extends keyof MathMLElementTagNameMap>(selectors: K): NodeListOf<...>; <K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): NodeListOf<....", declarations: [], schema: "{ <K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>; <K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<...>; <K extends keyof MathMLElementTagNameMap>(selectors: K): NodeListOf<...>; <K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): NodeListOf<...." }, { name: "replaceChildren", global: false, description: `Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/replaceChildren)`, tags: [], required: true, type: "(...nodes: (string | Node)[]) => void", declarations: [], schema: { kind: "event", type: "(...nodes: (string | Node)[]): void" } }, { name: "assignedSlot", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/assignedSlot)", tags: [], required: true, type: "HTMLSlotElement | null", declarations: [], schema: { kind: "enum", type: "HTMLSlotElement | null", schema: ["null", { kind: "object", type: "HTMLSlotElement" }] } }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/getReorderScrollCandidates.ts" });
const He = "scroll-snap-type", Zs = "none", pm = "", tr = (e) => {
  const t = new Set(e.filter((a) => a instanceof HTMLElement)), n = [];
  for (const a of t) n.push({ element: a, value: a.style.getPropertyValue(He), priority: a.style.getPropertyPriority(He) }), a.style.setProperty(He, Zs);
  let r = false;
  return { dispose: () => {
    if (!r) {
      r = true;
      for (const { element: a, value: i, priority: s } of n) {
        const o = a.style.getPropertyPriority(He);
        a.style.getPropertyValue(He) === Zs && o === pm && (i ? a.style.setProperty(He, i, s) : a.style.removeProperty(He));
      }
    }
  } };
};
tr.__docgenInfo = Object.assign({ displayName: tr.name ?? tr.__name }, { exportName: "acquireReorderAutoscrollEnvironment", displayName: "acquireReorderAutoscrollEnvironment", type: 2, props: [{ name: "length", global: false, description: "Gets the length of the array. This is a number one higher than the highest element defined in an array.", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "toString", global: false, description: "Returns a string representation of an array.", tags: [], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "toLocaleString", global: false, description: "Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.", tags: [], required: true, type: "{ (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }", declarations: [], schema: "{ (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }" }, { name: "concat", global: false, description: "Combines two or more arrays.", tags: [{ name: "param", text: "items Additional items to add to the end of array1." }, { name: "param", text: "items Additional items to add to the end of array1." }], required: true, type: "{ (...items: ConcatArray<Element>[]): Element[]; (...items: (Element | ConcatArray<Element>)[]): Element[]; }", declarations: [], schema: "{ (...items: ConcatArray<Element>[]): Element[]; (...items: (Element | ConcatArray<Element>)[]): Element[]; }" }, { name: "join", global: false, description: "Adds all the elements of an array separated by the specified separator string.", tags: [{ name: "param", text: "separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma." }], required: true, type: "(separator?: string | undefined) => string", declarations: [], schema: { kind: "event", type: "(separator?: string | undefined): string" } }, { name: "slice", global: false, description: "Returns a section of an array.", tags: [{ name: "param", text: "start The beginning of the specified portion of the array." }, { name: "param", text: "end The end of the specified portion of the array. This is exclusive of the element at the index 'end'." }], required: true, type: "(start?: number | undefined, end?: number | undefined) => Element[]", declarations: [], schema: { kind: "event", type: "(start?: number | undefined, end?: number | undefined): Element[]" } }, { name: "indexOf", global: false, description: "Returns the index of the first occurrence of a value in an array.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0." }], required: true, type: "{ (searchElement: Element, fromIndex?: number | undefined): number; (searchElement: Element, fromIndex?: number | undefined): number; }", declarations: [], schema: "{ (searchElement: Element, fromIndex?: number | undefined): number; (searchElement: Element, fromIndex?: number | undefined): number; }" }, { name: "lastIndexOf", global: false, description: "Returns the index of the last occurrence of a specified value in an array.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array." }], required: true, type: "{ (searchElement: Element, fromIndex?: number | undefined): number; (searchElement: Element, fromIndex?: number | undefined): number; }", declarations: [], schema: "{ (searchElement: Element, fromIndex?: number | undefined): number; (searchElement: Element, fromIndex?: number | undefined): number; }" }, { name: "every", global: false, description: "Determines whether all the members of an array satisfy the specified test.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }, { name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "{ <S extends Element>(predicate: (value: Element, index: number, array: readonly Element[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: Element, index: number, array: readonly Element[]) => unknown, thisArg?: any): boolean; }", declarations: [], schema: "{ <S extends Element>(predicate: (value: Element, index: number, array: readonly Element[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: Element, index: number, array: readonly Element[]) => unknown, thisArg?: any): boolean; }" }, { name: "some", global: false, description: "Determines whether the specified callback function returns true for any element of an array.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "(predicate: (value: Element, index: number, array: readonly Element[]) => unknown, thisArg?: any) => boolean", declarations: [], schema: { kind: "event", type: "(predicate: (value: Element, index: number, array: readonly Element[]) => unknown, thisArg?: any): boolean" } }, { name: "forEach", global: false, description: "Performs the specified action for each element in an array.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "(callbackfn: (value: Element, index: number, array: readonly Element[]) => void, thisArg?: any) => void", declarations: [], schema: { kind: "event", type: "(callbackfn: (value: Element, index: number, array: readonly Element[]) => void, thisArg?: any): void" } }, { name: "map", global: false, description: "Calls a defined callback function on each element of an array, and returns an array that contains the results.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "<U>(callbackfn: (value: Element, index: number, array: readonly Element[]) => U, thisArg?: any) => U[]", declarations: [], schema: { kind: "event", type: "<U>(callbackfn: (value: Element, index: number, array: readonly Element[]) => U, thisArg?: any): U[]" } }, { name: "filter", global: false, description: "Returns the elements of an array that meet the condition specified in a callback function.", tags: [{ name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }, { name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "{ <S extends Element>(predicate: (value: Element, index: number, array: readonly Element[]) => value is S, thisArg?: any): S[]; (predicate: (value: Element, index: number, array: readonly Element[]) => unknown, thisArg?: any): Element[]; <S extends Element>(predicate: BooleanConstructor, thisArg?: any): NonFalsy<......", declarations: [], schema: "{ <S extends Element>(predicate: (value: Element, index: number, array: readonly Element[]) => value is S, thisArg?: any): S[]; (predicate: (value: Element, index: number, array: readonly Element[]) => unknown, thisArg?: any): Element[]; <S extends Element>(predicate: BooleanConstructor, thisArg?: any): NonFalsy<......" }, { name: "reduce", global: false, description: "Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: Element, currentValue: Element, currentIndex: number, array: readonly Element[]) => Element): Element; (callbackfn: (previousValue: Element, currentValue: Element, currentIndex: number, array: readonly Element[]) => Element, initialValue: Element): Element; <U>(callbackfn: (previousVal...", declarations: [], schema: "{ (callbackfn: (previousValue: Element, currentValue: Element, currentIndex: number, array: readonly Element[]) => Element): Element; (callbackfn: (previousValue: Element, currentValue: Element, currentIndex: number, array: readonly Element[]) => Element, initialValue: Element): Element; <U>(callbackfn: (previousVal..." }, { name: "reduceRight", global: false, description: "Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: Element, currentValue: Element, currentIndex: number, array: readonly Element[]) => Element): Element; (callbackfn: (previousValue: Element, currentValue: Element, currentIndex: number, array: readonly Element[]) => Element, initialValue: Element): Element; <U>(callbackfn: (previousVal...", declarations: [], schema: "{ (callbackfn: (previousValue: Element, currentValue: Element, currentIndex: number, array: readonly Element[]) => Element): Element; (callbackfn: (previousValue: Element, currentValue: Element, currentIndex: number, array: readonly Element[]) => Element, initialValue: Element): Element; <U>(callbackfn: (previousVal..." }, { name: "find", global: false, description: `Returns the value of the first element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends Element>(predicate: (value: Element, index: number, obj: readonly Element[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: Element, index: number, obj: readonly Element[]) => unknown, thisArg?: any): Element | undefined; }", declarations: [], schema: "{ <S extends Element>(predicate: (value: Element, index: number, obj: readonly Element[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: Element, index: number, obj: readonly Element[]) => unknown, thisArg?: any): Element | undefined; }" }, { name: "findIndex", global: false, description: `Returns the index of the first element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: Element, index: number, obj: readonly Element[]) => unknown, thisArg?: any) => number", declarations: [], schema: { kind: "event", type: "(predicate: (value: Element, index: number, obj: readonly Element[]) => unknown, thisArg?: any): number" } }, { name: "entries", global: false, description: "Returns an iterable of key, value pairs for every entry in the array", tags: [], required: true, type: "() => ArrayIterator<[number, Element]>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<[number, Element]>" } }, { name: "keys", global: false, description: "Returns an iterable of keys in the array", tags: [], required: true, type: "() => ArrayIterator<number>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<number>" } }, { name: "values", global: false, description: "Returns an iterable of values in the array", tags: [], required: true, type: "() => ArrayIterator<Element>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<Element>" } }, { name: "includes", global: false, description: "Determines whether an array includes a certain element, returning true or false as appropriate.", tags: [{ name: "param", text: "searchElement The element to search for." }, { name: "param", text: "fromIndex The position in this array at which to begin searching for searchElement." }], required: true, type: "{ (searchElement: Element, fromIndex?: number | undefined): boolean; (searchElement: Element, fromIndex?: number | undefined): boolean; }", declarations: [], schema: "{ (searchElement: Element, fromIndex?: number | undefined): boolean; (searchElement: Element, fromIndex?: number | undefined): boolean; }" }, { name: "flatMap", global: false, description: `Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.`, tags: [{ name: "param", text: `callback A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.` }], required: true, type: "<U, This = undefined>(callback: (this: This, value: Element, index: number, array: Element[]) => U | readonly U[], thisArg?: This | undefined) => U[]", declarations: [], schema: { kind: "event", type: "<U, This = undefined>(callback: (this: This, value: Element, index: number, array: Element[]) => U | readonly U[], thisArg?: This | undefined): U[]" } }, { name: "flat", global: false, description: `Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.`, tags: [{ name: "param", text: "depth The maximum recursion depth" }], required: true, type: "<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]", declarations: [], schema: { kind: "event", type: "<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[]" } }, { name: "at", global: false, description: "Returns the item located at the specified index.", tags: [{ name: "param", text: "index The zero-based index of the desired code unit. A negative index will count back from the last item." }], required: true, type: "(index: number) => Element | undefined", declarations: [], schema: { kind: "event", type: "(index: number): Element | undefined" } }, { name: "findLast", global: false, description: `Returns the value of the last element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate findLast calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found, findLast
immediately returns that element value. Otherwise, findLast returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends Element>(predicate: (value: Element, index: number, array: readonly Element[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: Element, index: number, array: readonly Element[]) => unknown, thisArg?: any): Element | undefined; }", declarations: [], schema: "{ <S extends Element>(predicate: (value: Element, index: number, array: readonly Element[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: Element, index: number, array: readonly Element[]) => unknown, thisArg?: any): Element | undefined; }" }, { name: "findLastIndex", global: false, description: `Returns the index of the last element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate findLastIndex calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found,
findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: Element, index: number, array: readonly Element[]) => unknown, thisArg?: any) => number", declarations: [], schema: { kind: "event", type: "(predicate: (value: Element, index: number, array: readonly Element[]) => unknown, thisArg?: any): number" } }, { name: "toReversed", global: false, description: "Copies the array and returns the copied array with all of its elements reversed.", tags: [], required: true, type: "() => Element[]", declarations: [], schema: { kind: "event", type: "(): Element[]" } }, { name: "toSorted", global: false, description: "Copies and sorts the array.", tags: [{ name: "param", text: "compareFn Function used to determine the order of the elements. It is expected to return\na negative value if the first argument is less than the second argument, zero if they're equal, and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.\n```ts\n[11, 2, 22, 1].toSorted((a, b) => a - b) // [1, 2, 11, 22]\n```" }], required: true, type: "(compareFn?: ((a: Element, b: Element) => number) | undefined) => Element[]", declarations: [], schema: { kind: "event", type: "(compareFn?: ((a: Element, b: Element) => number) | undefined): Element[]" } }, { name: "toSpliced", global: false, description: `Copies an array and removes elements while, if necessary, inserting new elements in their place, returning the remaining elements.
Copies an array and removes elements while returning the remaining elements.`, tags: [{ name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "param", text: "items Elements to insert into the copied array in place of the deleted elements." }, { name: "returns", text: "A copy of the original array with the remaining elements." }, { name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "returns", text: "A copy of the original array with the remaining elements." }], required: true, type: "{ (start: number, deleteCount: number, ...items: Element[]): Element[]; (start: number, deleteCount?: number | undefined): Element[]; }", declarations: [], schema: "{ (start: number, deleteCount: number, ...items: Element[]): Element[]; (start: number, deleteCount?: number | undefined): Element[]; }" }, { name: "with", global: false, description: `Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array`, tags: [{ name: "param", text: `index The index of the value to overwrite. If the index is
negative, then it replaces from the end of the array.` }, { name: "param", text: "value The value to insert into the copied array." }, { name: "returns", text: "A copy of the original array with the inserted value." }], required: true, type: "(index: number, value: Element) => Element[]", declarations: [], schema: { kind: "event", type: "(index: number, value: Element): Element[]" } }, { name: "__@iterator@725", global: false, description: "Iterator of values in the array.", tags: [], required: true, type: "() => ArrayIterator<Element>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<Element>" } }, { name: "__@unscopables@727", global: false, description: `Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.`, tags: [], required: true, type: "{ readonly [x: number]: boolean | undefined; readonly length?: boolean; toString?: boolean; toLocaleString?: boolean; concat?: boolean; join?: boolean; slice?: boolean; indexOf?: boolean; lastIndexOf?: boolean; ... 23 more ...; readonly [Symbol.unscopables]?: boolean; }", declarations: [], schema: "{ readonly [x: number]: boolean | undefined; readonly length?: boolean; toString?: boolean; toLocaleString?: boolean; concat?: boolean; join?: boolean; slice?: boolean; indexOf?: boolean; lastIndexOf?: boolean; ... 23 more ...; readonly [Symbol.unscopables]?: boolean; }" }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/reorderAutoscrollEnvironment.ts" });
const gm = 10, Js = (e, t, n, r, a) => {
  const i = n - t, s = a - r;
  if (i <= 0 || s <= 0) return null;
  const o = i / s;
  return { coordinate: t + (e - r) * o, scale: o };
}, nr = (e, t, n, r = gm) => {
  const a = Js(n.x, e.left, e.right, t.left, t.right), i = Js(n.y, e.top, e.bottom, t.top, t.bottom);
  return !a || !i ? null : { coordinates: { x: a.coordinate, y: i.coordinate }, tolerance: { x: r * a.scale, y: r * i.scale } };
}, Ed = 1, Hn = (e, t) => Math.max(0, e - t), rr = (e, t, n, r, a = Ed) => n === "y" ? r === A.Reverse ? t.top - e.top > a : r === A.Forward ? e.bottom - t.bottom > a : false : r === A.Reverse ? t.left - e.left > a : r === A.Forward ? e.right - t.right > a : false, ar = (e, t, n, r, a = Ed) => {
  if (e === "container") return { x: r.direction.x * r.speed.x, y: r.direction.y * r.speed.y };
  const i = Hn(Math.max(0, n.top - t.top), a), s = Hn(Math.max(0, t.bottom - n.bottom), a), o = Hn(Math.max(0, n.left - t.left), a), l = Hn(Math.max(0, t.right - n.right), a);
  let c = 0;
  r.direction.y === A.Reverse && i > 0 ? c = -Math.min(r.speed.y, i) : r.direction.y === A.Forward && s > 0 && (c = Math.min(r.speed.y, s));
  let u = 0;
  return r.direction.x === A.Reverse && o > 0 ? u = -Math.min(r.speed.x, o) : r.direction.x === A.Forward && l > 0 && (u = Math.min(r.speed.x, l)), { x: u, y: c };
};
nr.__docgenInfo = Object.assign({ displayName: nr.name ?? nr.__name }, { exportName: "projectVisibleScrollIntentInput", displayName: "projectVisibleScrollIntentInput", type: 2, props: [{ name: "top", global: false, description: "Distance from the top of the coordinate space.", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "right", global: false, description: "Distance from the left of the coordinate space to the right edge.", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "bottom", global: false, description: "Distance from the top of the coordinate space to the bottom edge.", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "left", global: false, description: "Distance from the left of the coordinate space.", tags: [], required: true, type: "number", declarations: [], schema: "number" }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/reorderAutoscrollGeometry.ts" });
rr.__docgenInfo = Object.assign({ displayName: rr.name ?? rr.__name }, { exportName: "isReorderContainerEdgeHidden", displayName: "isReorderContainerEdgeHidden", type: 2, props: [{ name: "top", global: false, description: "Distance from the top of the coordinate space.", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "right", global: false, description: "Distance from the left of the coordinate space to the right edge.", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "bottom", global: false, description: "Distance from the top of the coordinate space to the bottom edge.", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "left", global: false, description: "Distance from the left of the coordinate space.", tags: [], required: true, type: "number", declarations: [], schema: "number" }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/reorderAutoscrollGeometry.ts" });
ar.__docgenInfo = Object.assign({ displayName: ar.name ?? ar.__name }, { exportName: "resolveReorderScrollDelta", displayName: "resolveReorderScrollDelta", type: 2, props: [{ name: "toString", global: false, description: "Returns a string representation of a string.", tags: [], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "charAt", global: false, description: "Returns the character at the specified index.", tags: [{ name: "param", text: "pos The zero-based index of the desired character." }], required: true, type: "(pos: number) => string", declarations: [], schema: { kind: "event", type: "(pos: number): string" } }, { name: "charCodeAt", global: false, description: "Returns the Unicode value of the character at the specified location.", tags: [{ name: "param", text: "index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned." }], required: true, type: "(index: number) => number", declarations: [], schema: { kind: "event", type: "(index: number): number" } }, { name: "concat", global: false, description: "Returns a string that contains the concatenation of two or more strings.", tags: [{ name: "param", text: "strings The strings to append to the end of the string." }], required: true, type: "(...strings: string[]) => string", declarations: [], schema: { kind: "event", type: "(...strings: string[]): string" } }, { name: "indexOf", global: false, description: "Returns the position of the first occurrence of a substring.", tags: [{ name: "param", text: "searchString The substring to search for in the string" }, { name: "param", text: "position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string." }], required: true, type: "(searchString: string, position?: number | undefined) => number", declarations: [], schema: { kind: "event", type: "(searchString: string, position?: number | undefined): number" } }, { name: "lastIndexOf", global: false, description: "Returns the last occurrence of a substring in the string.", tags: [{ name: "param", text: "searchString The substring to search for." }, { name: "param", text: "position The index at which to begin searching. If omitted, the search begins at the end of the string." }], required: true, type: "(searchString: string, position?: number | undefined) => number", declarations: [], schema: { kind: "event", type: "(searchString: string, position?: number | undefined): number" } }, { name: "localeCompare", global: false, description: `Determines whether two strings are equivalent in the current locale.
Determines whether two strings are equivalent in the current or specified locale.`, tags: [{ name: "param", text: "that String to compare to target string" }, { name: "param", text: "that String to compare to target string" }, { name: "param", text: "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details." }, { name: "param", text: "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details." }, { name: "param", text: "that String to compare to target string" }, { name: "param", text: "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details." }, { name: "param", text: "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details." }], required: true, type: "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; (that: string, locales?: LocalesArgument, options?: CollatorOptions | undefined): number; }", declarations: [], schema: "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; (that: string, locales?: LocalesArgument, options?: CollatorOptions | undefined): number; }" }, { name: "match", global: false, description: `Matches a string with a regular expression, and returns an array containing the results of that search.
Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.`, tags: [{ name: "param", text: "regexp A variable name or string literal containing the regular expression pattern and flags." }, { name: "param", text: "matcher An object that supports being matched against." }], required: true, type: "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }", declarations: [], schema: "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }" }, { name: "replace", global: false, description: "Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.", tags: [{ name: "param", text: "searchValue A string or regular expression to search for." }, { name: "param", text: "replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced." }, { name: "param", text: "searchValue A string to search for." }, { name: "param", text: "replacer A function that returns the replacement text." }, { name: "param", text: "searchValue An object that supports searching for and replacing matches within a string." }, { name: "param", text: "replaceValue The replacement text." }, { name: "param", text: "searchValue A object can search for and replace matches within a string." }, { name: "param", text: "replacer A function that returns the replacement text." }], required: true, type: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }", declarations: [], schema: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }" }, { name: "search", global: false, description: "Finds the first substring match in a regular expression search.", tags: [{ name: "param", text: "regexp The regular expression pattern and applicable flags." }, { name: "param", text: "searcher An object which supports searching within a string." }], required: true, type: "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }", declarations: [], schema: "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }" }, { name: "slice", global: false, description: "Returns a section of a string.", tags: [{ name: "param", text: "start The index to the beginning of the specified portion of stringObj." }, { name: "param", text: `end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
If this value is not specified, the substring continues to the end of stringObj.` }], required: true, type: "(start?: number | undefined, end?: number | undefined) => string", declarations: [], schema: { kind: "event", type: "(start?: number | undefined, end?: number | undefined): string" } }, { name: "split", global: false, description: "Split a string into substrings using the specified separator and return them as an array.", tags: [{ name: "param", text: "separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned." }, { name: "param", text: "limit A value used to limit the number of elements returned in the array." }, { name: "param", text: "splitter An object that can split a string." }, { name: "param", text: "limit A value used to limit the number of elements returned in the array." }], required: true, type: "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }", declarations: [], schema: "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }" }, { name: "substring", global: false, description: "Returns the substring at the specified location within a String object.", tags: [{ name: "param", text: "start The zero-based index number indicating the beginning of the substring." }, { name: "param", text: `end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
If end is omitted, the characters from start through the end of the original string are returned.` }], required: true, type: "(start: number, end?: number | undefined) => string", declarations: [], schema: { kind: "event", type: "(start: number, end?: number | undefined): string" } }, { name: "toLowerCase", global: false, description: "Converts all the alphabetic characters in a string to lowercase.", tags: [], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "toLocaleLowerCase", global: false, description: "Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.", tags: [], required: true, type: "{ (locales?: string | string[] | undefined): string; (locales?: LocalesArgument): string; }", declarations: [], schema: "{ (locales?: string | string[] | undefined): string; (locales?: LocalesArgument): string; }" }, { name: "toUpperCase", global: false, description: "Converts all the alphabetic characters in a string to uppercase.", tags: [], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "toLocaleUpperCase", global: false, description: "Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.", tags: [], required: true, type: "{ (locales?: string | string[] | undefined): string; (locales?: LocalesArgument): string; }", declarations: [], schema: "{ (locales?: string | string[] | undefined): string; (locales?: LocalesArgument): string; }" }, { name: "trim", global: false, description: "Removes the leading and trailing white space and line terminator characters from a string.", tags: [], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "length", global: false, description: "Returns the length of a String object.", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "substr", global: false, description: "Gets a substring beginning at the specified location and having the specified length.", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }, { name: "param", text: "from The starting position of the desired substring. The index of the first character in the string is zero." }, { name: "param", text: "length The number of characters to include in the returned substring." }], required: true, type: "(from: number, length?: number | undefined) => string", declarations: [], schema: { kind: "event", type: "(from: number, length?: number | undefined): string" } }, { name: "valueOf", global: false, description: "Returns the primitive value of the specified object.", tags: [], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "codePointAt", global: false, description: `Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.`, tags: [], required: true, type: "(pos: number) => number | undefined", declarations: [], schema: { kind: "event", type: "(pos: number): number | undefined" } }, { name: "includes", global: false, description: `Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.`, tags: [{ name: "param", text: "searchString search string" }, { name: "param", text: "position If position is undefined, 0 is assumed, so as to search all of the String." }], required: true, type: "(searchString: string, position?: number | undefined) => boolean", declarations: [], schema: { kind: "event", type: "(searchString: string, position?: number | undefined): boolean" } }, { name: "endsWith", global: false, description: `Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition \u2013 length(this). Otherwise returns false.`, tags: [], required: true, type: "(searchString: string, endPosition?: number | undefined) => boolean", declarations: [], schema: { kind: "event", type: "(searchString: string, endPosition?: number | undefined): boolean" } }, { name: "normalize", global: false, description: `Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.`, tags: [{ name: "param", text: `form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"` }, { name: "param", text: `form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"` }], required: true, type: '{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }', declarations: [], schema: '{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }' }, { name: "repeat", global: false, description: `Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.`, tags: [{ name: "param", text: "count number of copies to append" }], required: true, type: "(count: number) => string", declarations: [], schema: { kind: "event", type: "(count: number): string" } }, { name: "startsWith", global: false, description: `Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.`, tags: [], required: true, type: "(searchString: string, position?: number | undefined) => boolean", declarations: [], schema: { kind: "event", type: "(searchString: string, position?: number | undefined): boolean" } }, { name: "anchor", global: false, description: "Returns an `<a>` HTML anchor element and sets the name attribute to the text value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }, { name: "param", text: "name" }], required: true, type: "(name: string) => string", declarations: [], schema: { kind: "event", type: "(name: string): string" } }, { name: "big", global: false, description: "Returns a `<big>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "blink", global: false, description: "Returns a `<blink>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "bold", global: false, description: "Returns a `<b>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "fixed", global: false, description: "Returns a `<tt>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "fontcolor", global: false, description: "Returns a `<font>` HTML element and sets the color attribute value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "(color: string) => string", declarations: [], schema: { kind: "event", type: "(color: string): string" } }, { name: "fontsize", global: false, description: "Returns a `<font>` HTML element and sets the size attribute value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }, { name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "{ (size: number): string; (size: string): string; }", declarations: [], schema: "{ (size: number): string; (size: string): string; }" }, { name: "italics", global: false, description: "Returns an `<i>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "link", global: false, description: "Returns an `<a>` HTML element and sets the href attribute value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "(url: string) => string", declarations: [], schema: { kind: "event", type: "(url: string): string" } }, { name: "small", global: false, description: "Returns a `<small>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "strike", global: false, description: "Returns a `<strike>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "sub", global: false, description: "Returns a `<sub>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "sup", global: false, description: "Returns a `<sup>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "padStart", global: false, description: `Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.`, tags: [{ name: "param", text: `maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.` }, { name: "param", text: `fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).` }], required: true, type: "(maxLength: number, fillString?: string | undefined) => string", declarations: [], schema: { kind: "event", type: "(maxLength: number, fillString?: string | undefined): string" } }, { name: "padEnd", global: false, description: `Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.`, tags: [{ name: "param", text: `maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.` }, { name: "param", text: `fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).` }], required: true, type: "(maxLength: number, fillString?: string | undefined) => string", declarations: [], schema: { kind: "event", type: "(maxLength: number, fillString?: string | undefined): string" } }, { name: "trimEnd", global: false, description: "Removes the trailing white space and line terminator characters from a string.", tags: [], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "trimStart", global: false, description: "Removes the leading white space and line terminator characters from a string.", tags: [], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "trimLeft", global: false, description: "Removes the leading white space and line terminator characters from a string.", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility. Use `trimStart` instead" }], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "trimRight", global: false, description: "Removes the trailing white space and line terminator characters from a string.", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility. Use `trimEnd` instead" }], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "matchAll", global: false, description: `Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.`, tags: [{ name: "param", text: "regexp A variable name or string literal containing the regular expression pattern and flags." }], required: true, type: "(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>", declarations: [], schema: { kind: "event", type: "(regexp: RegExp): RegExpStringIterator<RegExpExecArray>" } }, { name: "replaceAll", global: false, description: "Replace all instances of a substring in a string, using a regular expression or search string.", tags: [{ name: "param", text: "searchValue A string to search for." }, { name: "param", text: "replaceValue A string containing the text to replace for every successful match of searchValue in this string." }, { name: "param", text: "searchValue A string to search for." }, { name: "param", text: "replacer A function that returns the replacement text." }], required: true, type: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }", declarations: [], schema: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }" }, { name: "at", global: false, description: "Returns a new String consisting of the single UTF-16 code unit located at the specified index.", tags: [{ name: "param", text: "index The zero-based index of the desired code unit. A negative index will count back from the last item." }], required: true, type: "(index: number) => string | undefined", declarations: [], schema: { kind: "event", type: "(index: number): string | undefined" } }, { name: "isWellFormed", global: false, description: "Returns true if all leading surrogates and trailing surrogates appear paired and in order.", tags: [], required: true, type: "() => boolean", declarations: [], schema: { kind: "event", type: "(): boolean" } }, { name: "toWellFormed", global: false, description: "Returns a string where all lone or out-of-order surrogates have been replaced by the Unicode replacement character (U+FFFD).", tags: [], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "__@iterator@725", global: false, description: "Iterator", tags: [], required: true, type: "() => StringIterator<string>", declarations: [], schema: { kind: "event", type: "(): StringIterator<string>" } }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/reorderAutoscrollGeometry.ts" });
const oa = 25, fm = { x: 0.2, y: 0.2 }, Ad = (e) => e.x === A.Idle && e.y === A.Idle, Qs = (e, t) => ({ top: e.top * t.scaleY + t.y, right: e.right * t.scaleX + t.x, bottom: e.bottom * t.scaleY + t.y, left: e.left * t.scaleX + t.x, width: e.width * t.scaleX, height: e.height * t.scaleY }), Id = (e) => {
  const t = e === e.ownerDocument.scrollingElement, n = t ? xl(e) : ot(e);
  return { full: n, visible: t ? n : At(e) };
}, bm = (e, t, n, r) => {
  const a = { x: n ? t.x : A.Idle, y: r ? t.y : A.Idle };
  if (Ad(a)) return a;
  const i = _i(e, a);
  return (a.y === A.Reverse && !i.top || a.y === A.Forward && !i.bottom) && (a.y = A.Idle), (a.x === A.Reverse && !i.left || a.x === A.Forward && !i.right) && (a.x = A.Idle), a;
}, ym = (e, t, n, r) => {
  if (!rr(t, Id(e).visible, n, r)) return false;
  const a = { x: n === "x" ? r : A.Idle, y: n === "y" ? r : A.Idle }, i = _i(e, a);
  return n === "x" ? r === A.Reverse ? i.left : i.right : r === A.Reverse ? i.top : i.bottom;
}, eo = (e, t, n, r, a) => {
  for (let i = t; i < e.length; i += 1) {
    const s = e[i];
    if (s && ym(s, n, r, a)) return true;
  }
  return false;
}, vm = (e, t, n, r, a, i, s, o) => {
  const { full: l, visible: c } = Id(e), u = tt(e), d = nr(Qs(l, u), Qs(c, u), r);
  if (!d) return { resolvedX: false, resolvedY: false };
  const { direction: m, speed: p } = Sl(e, d.coordinates, void 0, oa, fm, d.tolerance), y = { x: Math.min(p.x, oa), y: Math.min(p.y, oa) }, v = bm(e, m, a, i);
  if (e === t) {
    const f = o + 1;
    v.x !== A.Idle && eo(s, f, n, "x", v.x) && (v.x = A.Idle), v.y !== A.Idle && eo(s, f, n, "y", v.y) && (v.y = A.Idle);
  }
  if (Ad(v)) return { resolvedX: false, resolvedY: false };
  const w = e === t ? "container" : "ancestor", h = ar(w, n, w === "ancestor" ? c : n, { direction: v, speed: y }), g = e.scrollLeft, b = e.scrollTop;
  return (h.x !== 0 || h.y !== 0) && e.scrollTo({ left: g + h.x, top: b + h.y, behavior: "instant" }), { resolvedX: w === "ancestor" ? h.x !== 0 : e.scrollLeft !== g, resolvedY: w === "ancestor" ? h.y !== 0 : e.scrollTop !== b };
}, ir = (e, t, n) => {
  const { position: r, source: a } = e.dragOperation;
  if (!t.isConnected || !a?.element?.isConnected) return;
  const i = r.current, s = ot(t);
  let o = true, l = true;
  for (let c = 0; c < n.length && !(!o && !l); c += 1) {
    const u = n[c];
    if (!u) continue;
    const { resolvedX: d, resolvedY: m } = vm(u, t, s, i, o, l, n, c);
    o && d && (o = false), l && m && (l = false);
  }
};
class xm extends G {
  constructor(t) {
    super(t), this.registerEffect(() => {
      if (this.disabled || !t.dragOperation.status.dragging) return;
      const n = pn(t.dragOperation);
      if (!n) return;
      const r = gn(n);
      if (r.length === 0) return;
      const a = tr(r);
      let i = true, s;
      const o = () => {
        if (!i || this.disabled || !t.dragOperation.status.dragging) {
          i = false;
          return;
        }
        ir(t, n, r), s = requestAnimationFrame(o);
      };
      return s = requestAnimationFrame(o), () => {
        i = false, s !== void 0 && cancelAnimationFrame(s), a.dispose();
      };
    });
  }
}
ir.__docgenInfo = Object.assign({ displayName: ir.name ?? ir.__name }, { exportName: "runReorderAutoscrollFrame", displayName: "runReorderAutoscrollFrame", type: 2, props: [{ name: "dragOperation", global: false, description: "", tags: [], required: true, type: "ReorderAutoscrollOperationSnapshot", declarations: [], schema: { kind: "object", type: "ReorderAutoscrollOperationSnapshot" } }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/ReorderAutoScroller.ts" });
const wm = (e) => e.pointerType === "touch" || e.pointerType === "pen" ? [new Ce.Delay({ value: 400, tolerance: 8 })] : [new Ce.Distance({ value: 4 })], Dm = [id.configure({ activationConstraints: wm })], sr = (e) => e.filter((t) => t !== Vl).map((t) => t === zi ? xm : t), km = { duration: 350, easing: "cubic-bezier(0.42, 1.67, 0.21, 0.90)", idle: false }, Em = [um.configure({ element: pn })];
sr.__docgenInfo = Object.assign({ displayName: sr.name ?? sr.__name }, { exportName: "getReorderPlugins", displayName: "getReorderPlugins", type: 2, props: [{ name: "length", global: false, description: "Gets or sets the length of the array. This is a number one higher than the highest index in the array.", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "toString", global: false, description: "Returns a string representation of an array.", tags: [], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "toLocaleString", global: false, description: "Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.", tags: [], required: true, type: "{ (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }", declarations: [], schema: "{ (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }" }, { name: "pop", global: false, description: `Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.`, tags: [], required: true, type: "() => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...> | undefined", declarations: [], schema: { kind: "event", type: "(): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...> | undefined" } }, { name: "push", global: false, description: "Appends new elements to the end of an array, and returns the new length of the array.", tags: [{ name: "param", text: "items New elements to add to the array." }], required: true, type: "(...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>)[]) => number", declarations: [], schema: { kind: "event", type: "(...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>)[]): number" } }, { name: "concat", global: false, description: `Combines two or more arrays.
This method returns a new array without modifying any existing arrays.`, tags: [{ name: "param", text: "items Additional arrays and/or items to add to the end of the array." }, { name: "param", text: "items Additional arrays and/or items to add to the end of the array." }], required: true, type: "{ (...items: ConcatArray<PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>>[]): (PluginConstructor<...> | PluginDescriptor<...>)[]; (...items: (PluginConstructor<...> | ... 1...", declarations: [], schema: "{ (...items: ConcatArray<PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>>[]): (PluginConstructor<...> | PluginDescriptor<...>)[]; (...items: (PluginConstructor<...> | ... 1..." }, { name: "join", global: false, description: "Adds all the elements of an array into a string, separated by the specified separator string.", tags: [{ name: "param", text: "separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma." }], required: true, type: "(separator?: string | undefined) => string", declarations: [], schema: { kind: "event", type: "(separator?: string | undefined): string" } }, { name: "reverse", global: false, description: `Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.`, tags: [], required: true, type: "() => (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>)[]", declarations: [], schema: { kind: "event", type: "(): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>)[]" } }, { name: "shift", global: false, description: `Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.`, tags: [], required: true, type: "() => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...> | undefined", declarations: [], schema: { kind: "event", type: "(): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...> | undefined" } }, { name: "slice", global: false, description: `Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.`, tags: [{ name: "param", text: `start The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.` }, { name: "param", text: `end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.` }], required: true, type: "(start?: number | undefined, end?: number | undefined) => (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<...>, PluginOptions> | PluginDescriptor<...>)[]", declarations: [], schema: { kind: "event", type: "(start?: number | undefined, end?: number | undefined): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<...>, PluginOptions> | PluginDescriptor<...>)[]" } }, { name: "sort", global: false, description: `Sorts an array in place.
This method mutates the array and returns a reference to the same array.`, tags: [{ name: "param", text: "compareFn Function used to determine the order of the elements. It is expected to return\na negative value if the first argument is less than the second argument, zero if they're equal, and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.\n```ts\n[11,2,22,1].sort((a, b) => a - b)\n```" }], required: true, type: "(compareFn?: ((a: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, b: PluginConstructor<...> | PluginDescriptor<...>) => number) | undefined) => Plugins<...>", declarations: [], schema: { kind: "event", type: "(compareFn?: ((a: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, b: PluginConstructor<...> | PluginDescriptor<...>) => number) | undefined): Plugins<...>" } }, { name: "splice", global: false, description: "Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.", tags: [{ name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: `deleteCount The number of elements to remove. Omitting this argument will remove all elements from the start
paramater location to end of the array. If value of this argument is either a negative number, zero, undefined, or a type
that cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.` }, { name: "returns", text: "An array containing the elements that were deleted." }, { name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: `deleteCount The number of elements to remove. If value of this argument is either a negative number, zero,
undefined, or a type that cannot be converted to an integer, the function will evaluate the argument as zero and
not remove any elements.` }, { name: "param", text: "items Elements to insert into the array in place of the deleted elements." }, { name: "returns", text: "An array containing the elements that were deleted." }], required: true, type: "{ (start: number, deleteCount?: number | undefined): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<...>, PluginOptions> | PluginDescriptor<...>)[]; (start: number, deleteCount: number, ...items: (PluginConstructor<...> | PluginDescriptor<...>)[]): (PluginConstructor<...> | Plugin...", declarations: [], schema: "{ (start: number, deleteCount?: number | undefined): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<...>, PluginOptions> | PluginDescriptor<...>)[]; (start: number, deleteCount: number, ...items: (PluginConstructor<...> | PluginDescriptor<...>)[]): (PluginConstructor<...> | Plugin..." }, { name: "unshift", global: false, description: "Inserts new elements at the start of an array, and returns the new length of the array.", tags: [{ name: "param", text: "items Elements to insert at the start of the array." }], required: true, type: "(...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>)[]) => number", declarations: [], schema: { kind: "event", type: "(...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>)[]): number" } }, { name: "indexOf", global: false, description: "Returns the index of the first occurrence of a value in an array, or -1 if it is not present.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0." }], required: true, type: "{ (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, fromIndex?: number | undefined): number; (searchElement: PluginConstructor<...> | PluginDescriptor<...>, ...", declarations: [], schema: "{ (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, fromIndex?: number | undefined): number; (searchElement: PluginConstructor<...> | PluginDescriptor<...>, ..." }, { name: "lastIndexOf", global: false, description: "Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array." }], required: true, type: "{ (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, fromIndex?: number | undefined): number; (searchElement: PluginConstructor<...> | PluginDescriptor<...>, ...", declarations: [], schema: "{ (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, fromIndex?: number | undefined): number; (searchElement: PluginConstructor<...> | PluginDescriptor<...>, ..." }, { name: "every", global: false, description: "Determines whether all the members of an array satisfy the specified test.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }, { name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>>(predicate: (value: PluginConstructor<...> | PluginDescriptor<...>, index: number, array: (PluginConstructor<.....", declarations: [], schema: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>>(predicate: (value: PluginConstructor<...> | PluginDescriptor<...>, index: number, array: (PluginConstructor<....." }, { name: "some", global: false, description: "Determines whether the specified callback function returns true for any element of an array.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, index: number, array: (PluginConstructor<...> | PluginDescriptor<...>)[]) => unknown, thisArg?: any) =>...", declarations: [], schema: { kind: "event", type: "(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, index: number, array: (PluginConstructor<...> | PluginDescriptor<...>)[]) => unknown, thisArg?: any): boolean" } }, { name: "forEach", global: false, description: "Performs the specified action for each element in an array.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "(callbackfn: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, index: number, array: (PluginConstructor<...> | PluginDescriptor<...>)[]) => void, thisArg?: any) => v...", declarations: [], schema: { kind: "event", type: "(callbackfn: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, index: number, array: (PluginConstructor<...> | PluginDescriptor<...>)[]) => void, thisArg?: any): void" } }, { name: "map", global: false, description: "Calls a defined callback function on each element of an array, and returns an array that contains the results.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "<U>(callbackfn: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, index: number, array: (PluginConstructor<...> | PluginDescriptor<...>)[]) => U, thisArg?: any) => U[]", declarations: [], schema: { kind: "event", type: "<U>(callbackfn: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, index: number, array: (PluginConstructor<...> | PluginDescriptor<...>)[]) => U, thisArg?: any): U[]" } }, { name: "filter", global: false, description: "Returns the elements of an array that meet the condition specified in a callback function.", tags: [{ name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }, { name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>>(predicate: (value: PluginConstructor<...> | PluginDescriptor<...>, index: number, array: (PluginConstructor<.....", declarations: [], schema: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>>(predicate: (value: PluginConstructor<...> | PluginDescriptor<...>, index: number, array: (PluginConstructor<....." }, { name: "reduce", global: false, description: "Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, currentValue: PluginConstructor<...> | PluginDescriptor<...>, currentIndex: number, array: (...", declarations: [], schema: "{ (callbackfn: (previousValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, currentValue: PluginConstructor<...> | PluginDescriptor<...>, currentIndex: number, array: (..." }, { name: "reduceRight", global: false, description: "Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, currentValue: PluginConstructor<...> | PluginDescriptor<...>, currentIndex: number, array: (...", declarations: [], schema: "{ (callbackfn: (previousValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, currentValue: PluginConstructor<...> | PluginDescriptor<...>, currentIndex: number, array: (..." }, { name: "find", global: false, description: `Returns the value of the first element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>>(predicate: (value: PluginConstructor<...> | PluginDescriptor<...>, index: number, obj: (PluginConstructor<...>...", declarations: [], schema: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>>(predicate: (value: PluginConstructor<...> | PluginDescriptor<...>, index: number, obj: (PluginConstructor<...>..." }, { name: "findIndex", global: false, description: `Returns the index of the first element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, index: number, obj: (PluginConstructor<...> | PluginDescriptor<...>)[]) => unknown, thisArg?: any) => n...", declarations: [], schema: { kind: "event", type: "(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, index: number, obj: (PluginConstructor<...> | PluginDescriptor<...>)[]) => unknown, thisArg?: any): number" } }, { name: "fill", global: false, description: "Changes all array elements from `start` to `end` index to a static `value` and returns the modified array", tags: [{ name: "param", text: "value value to fill array section with" }, { name: "param", text: `start index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.` }, { name: "param", text: `end index to stop filling the array at. If end is negative, it is treated as
length+end.` }], required: true, type: "(value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, start?: number | undefined, end?: number | undefined) => Plugins<...>", declarations: [], schema: { kind: "event", type: "(value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, start?: number | undefined, end?: number | undefined): Plugins<...>" } }, { name: "copyWithin", global: false, description: `Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target`, tags: [{ name: "param", text: `target If target is negative, it is treated as length+target where length is the
length of the array.` }, { name: "param", text: `start If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.` }, { name: "param", text: "end If not specified, length of the this object is used as its default value." }], required: true, type: "(target: number, start: number, end?: number | undefined) => Plugins<DragDropManager<Data, Draggable<Data>, Droppable<Data>>>", declarations: [], schema: { kind: "event", type: "(target: number, start: number, end?: number | undefined): Plugins<DragDropManager<Data, Draggable<Data>, Droppable<Data>>>" } }, { name: "entries", global: false, description: "Returns an iterable of key, value pairs for every entry in the array", tags: [], required: true, type: "() => ArrayIterator<[number, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>]>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<[number, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>]>" } }, { name: "keys", global: false, description: "Returns an iterable of keys in the array", tags: [], required: true, type: "() => ArrayIterator<number>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<number>" } }, { name: "values", global: false, description: "Returns an iterable of values in the array", tags: [], required: true, type: "() => ArrayIterator<PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>>" } }, { name: "includes", global: false, description: "Determines whether an array includes a certain element, returning true or false as appropriate.", tags: [{ name: "param", text: "searchElement The element to search for." }, { name: "param", text: "fromIndex The position in this array at which to begin searching for searchElement." }], required: true, type: "{ (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, fromIndex?: number | undefined): boolean; (searchElement: PluginConstructor<...> | PluginDescriptor<...>,...", declarations: [], schema: "{ (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, fromIndex?: number | undefined): boolean; (searchElement: PluginConstructor<...> | PluginDescriptor<...>,..." }, { name: "flatMap", global: false, description: `Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.`, tags: [{ name: "param", text: `callback A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.` }], required: true, type: "<U, This = undefined>(callback: (this: This, value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, index: number, array: (PluginConstructor<...> | PluginDescriptor<...>)[...", declarations: [], schema: { kind: "event", type: "<U, This = undefined>(callback: (this: This, value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, index: number, array: (PluginConstructor<...> | PluginDescriptor<...>)[]) => U | readonly U[], thisArg?: This | undefined): U[]" } }, { name: "flat", global: false, description: `Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.`, tags: [{ name: "param", text: "depth The maximum recursion depth" }], required: true, type: "<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]", declarations: [], schema: { kind: "event", type: "<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[]" } }, { name: "at", global: false, description: "Returns the item located at the specified index.", tags: [{ name: "param", text: "index The zero-based index of the desired code unit. A negative index will count back from the last item." }], required: true, type: "(index: number) => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...> | undefined", declarations: [], schema: { kind: "event", type: "(index: number): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...> | undefined" } }, { name: "findLast", global: false, description: `Returns the value of the last element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate findLast calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found, findLast
immediately returns that element value. Otherwise, findLast returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>>(predicate: (value: PluginConstructor<...> | PluginDescriptor<...>, index: number, array: (PluginConstructor<.....", declarations: [], schema: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>>(predicate: (value: PluginConstructor<...> | PluginDescriptor<...>, index: number, array: (PluginConstructor<....." }, { name: "findLastIndex", global: false, description: `Returns the index of the last element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate findLastIndex calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found,
findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, index: number, array: (PluginConstructor<...> | PluginDescriptor<...>)[]) => unknown, thisArg?: any) =>...", declarations: [], schema: { kind: "event", type: "(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, index: number, array: (PluginConstructor<...> | PluginDescriptor<...>)[]) => unknown, thisArg?: any): number" } }, { name: "toReversed", global: false, description: "Returns a copy of an array with its elements reversed.", tags: [], required: true, type: "() => (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>)[]", declarations: [], schema: { kind: "event", type: "(): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>)[]" } }, { name: "toSorted", global: false, description: "Returns a copy of an array with its elements sorted.", tags: [{ name: "param", text: "compareFn Function used to determine the order of the elements. It is expected to return\na negative value if the first argument is less than the second argument, zero if they're equal, and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.\n```ts\n[11, 2, 22, 1].toSorted((a, b) => a - b) // [1, 2, 11, 22]\n```" }], required: true, type: "(compareFn?: ((a: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, b: PluginConstructor<...> | PluginDescriptor<...>) => number) | undefined) => (PluginConstructor<...> | P...", declarations: [], schema: { kind: "event", type: "(compareFn?: ((a: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>, b: PluginConstructor<...> | PluginDescriptor<...>) => number) | undefined): (PluginConstructor<...> | PluginDescriptor<...>)[]" } }, { name: "toSpliced", global: false, description: `Copies an array and removes elements and, if necessary, inserts new elements in their place. Returns the copied array.
Copies an array and removes elements while returning the remaining elements.`, tags: [{ name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "param", text: "items Elements to insert into the copied array in place of the deleted elements." }, { name: "returns", text: "The copied array." }, { name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "returns", text: "A copy of the original array with the remaining elements." }], required: true, type: "{ (start: number, deleteCount: number, ...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<...>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>)[]): (PluginConstructor<...> | PluginDescriptor<...>)[]; (start: number, de...", declarations: [], schema: "{ (start: number, deleteCount: number, ...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<...>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>)[]): (PluginConstructor<...> | PluginDescriptor<...>)[]; (start: number, de..." }, { name: "with", global: false, description: `Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array.`, tags: [{ name: "param", text: `index The index of the value to overwrite. If the index is
negative, then it replaces from the end of the array.` }, { name: "param", text: "value The value to write into the copied array." }, { name: "returns", text: "The copied array with the updated value." }], required: true, type: "(index: number, value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>) => (PluginConstructor<...> | PluginDescriptor<...>)[]", declarations: [], schema: { kind: "event", type: "(index: number, value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>): (PluginConstructor<...> | PluginDescriptor<...>)[]" } }, { name: "__@iterator@725", global: false, description: "Iterator", tags: [], required: true, type: "() => ArrayIterator<PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<...>>, PluginOptions>, PluginOptions> | PluginDescriptor<...>>" } }, { name: "__@unscopables@727", global: false, description: `Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.`, tags: [], required: true, type: "{ [x: number]: boolean | undefined; length?: boolean; toString?: boolean; toLocaleString?: boolean; pop?: boolean; push?: boolean; concat?: boolean; join?: boolean; reverse?: boolean; shift?: boolean; slice?: boolean; ... 30 more ...; readonly [Symbol.unscopables]?: boolean; }", declarations: [], schema: "{ [x: number]: boolean | undefined; length?: boolean; toString?: boolean; toLocaleString?: boolean; pop?: boolean; push?: boolean; concat?: boolean; join?: boolean; reverse?: boolean; shift?: boolean; slice?: boolean; ... 30 more ...; readonly [Symbol.unscopables]?: boolean; }" }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/reorderConfig.ts" });
const Pd = /* @__PURE__ */ Symbol("reorder-surface"), Am = (e) => {
  if (e === "touch") try {
    navigator.vibrate(10);
  } catch {
  }
}, Im = (e, t) => {
  e !== "touch" && e !== "pen" || requestAnimationFrame(() => {
    const n = document.getSelection();
    n && n.rangeCount > 0 && n.removeAllRanges();
    const r = document.activeElement;
    r instanceof HTMLElement && (r === t || (t?.contains(r) ?? false)) && typeof r.blur == "function" && r.blur();
  });
}, or = (e, t, n) => {
  const r = [...e], [a] = r.splice(t, 1);
  return a === void 0 || r.splice(n, 0, a), r;
}, lr = (e, t) => e.length === t.length && e.every((n, r) => n === t[r]);
or.__docgenInfo = Object.assign({ displayName: or.name ?? or.__name }, { exportName: "moveItem", displayName: "moveItem", type: 2, props: [{ name: "length", global: false, description: "Gets the length of the array. This is a number one higher than the highest element defined in an array.", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "toString", global: false, description: "Returns a string representation of an array.", tags: [], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "toLocaleString", global: false, description: "Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.", tags: [], required: true, type: "{ (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }", declarations: [], schema: "{ (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }" }, { name: "concat", global: false, description: "Combines two or more arrays.", tags: [{ name: "param", text: "items Additional items to add to the end of array1." }, { name: "param", text: "items Additional items to add to the end of array1." }], required: true, type: "{ (...items: ConcatArray<unknown>[]): unknown[]; (...items: unknown[]): unknown[]; }", declarations: [], schema: "{ (...items: ConcatArray<unknown>[]): unknown[]; (...items: unknown[]): unknown[]; }" }, { name: "join", global: false, description: "Adds all the elements of an array separated by the specified separator string.", tags: [{ name: "param", text: "separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma." }], required: true, type: "(separator?: string | undefined) => string", declarations: [], schema: { kind: "event", type: "(separator?: string | undefined): string" } }, { name: "slice", global: false, description: "Returns a section of an array.", tags: [{ name: "param", text: "start The beginning of the specified portion of the array." }, { name: "param", text: "end The end of the specified portion of the array. This is exclusive of the element at the index 'end'." }], required: true, type: "(start?: number | undefined, end?: number | undefined) => unknown[]", declarations: [], schema: { kind: "event", type: "(start?: number | undefined, end?: number | undefined): unknown[]" } }, { name: "indexOf", global: false, description: "Returns the index of the first occurrence of a value in an array.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0." }], required: true, type: "{ (searchElement: unknown, fromIndex?: number | undefined): number; (searchElement: unknown, fromIndex?: number | undefined): number; }", declarations: [], schema: "{ (searchElement: unknown, fromIndex?: number | undefined): number; (searchElement: unknown, fromIndex?: number | undefined): number; }" }, { name: "lastIndexOf", global: false, description: "Returns the index of the last occurrence of a specified value in an array.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array." }], required: true, type: "{ (searchElement: unknown, fromIndex?: number | undefined): number; (searchElement: unknown, fromIndex?: number | undefined): number; }", declarations: [], schema: "{ (searchElement: unknown, fromIndex?: number | undefined): number; (searchElement: unknown, fromIndex?: number | undefined): number; }" }, { name: "every", global: false, description: "Determines whether all the members of an array satisfy the specified test.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }, { name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "{ <S extends unknown>(predicate: (value: unknown, index: number, array: readonly unknown[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): boolean; }", declarations: [], schema: "{ <S extends unknown>(predicate: (value: unknown, index: number, array: readonly unknown[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): boolean; }" }, { name: "some", global: false, description: "Determines whether the specified callback function returns true for any element of an array.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "(predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any) => boolean", declarations: [], schema: { kind: "event", type: "(predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): boolean" } }, { name: "forEach", global: false, description: "Performs the specified action for each element in an array.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "(callbackfn: (value: unknown, index: number, array: readonly unknown[]) => void, thisArg?: any) => void", declarations: [], schema: { kind: "event", type: "(callbackfn: (value: unknown, index: number, array: readonly unknown[]) => void, thisArg?: any): void" } }, { name: "map", global: false, description: "Calls a defined callback function on each element of an array, and returns an array that contains the results.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "<U>(callbackfn: (value: unknown, index: number, array: readonly unknown[]) => U, thisArg?: any) => U[]", declarations: [], schema: { kind: "event", type: "<U>(callbackfn: (value: unknown, index: number, array: readonly unknown[]) => U, thisArg?: any): U[]" } }, { name: "filter", global: false, description: "Returns the elements of an array that meet the condition specified in a callback function.", tags: [{ name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }, { name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "{ <S extends unknown>(predicate: (value: unknown, index: number, array: readonly unknown[]) => value is S, thisArg?: any): S[]; (predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): unknown[]; <S extends unknown>(predicate: BooleanConstructor, thisArg?: any): NonFalsy<......", declarations: [], schema: "{ <S extends unknown>(predicate: (value: unknown, index: number, array: readonly unknown[]) => value is S, thisArg?: any): S[]; (predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): unknown[]; <S extends unknown>(predicate: BooleanConstructor, thisArg?: any): NonFalsy<......" }, { name: "reduce", global: false, description: "Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown): unknown; (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown, initialValue: unknown): unknown; <U>(callbackfn: (previousVal...", declarations: [], schema: "{ (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown): unknown; (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown, initialValue: unknown): unknown; <U>(callbackfn: (previousVal..." }, { name: "reduceRight", global: false, description: "Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown): unknown; (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown, initialValue: unknown): unknown; <U>(callbackfn: (previousVal...", declarations: [], schema: "{ (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown): unknown; (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown, initialValue: unknown): unknown; <U>(callbackfn: (previousVal..." }, { name: "find", global: false, description: `Returns the value of the first element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends unknown>(predicate: (value: unknown, index: number, obj: readonly unknown[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: unknown, index: number, obj: readonly unknown[]) => unknown, thisArg?: any): unknown; }", declarations: [], schema: "{ <S extends unknown>(predicate: (value: unknown, index: number, obj: readonly unknown[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: unknown, index: number, obj: readonly unknown[]) => unknown, thisArg?: any): unknown; }" }, { name: "findIndex", global: false, description: `Returns the index of the first element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: unknown, index: number, obj: readonly unknown[]) => unknown, thisArg?: any) => number", declarations: [], schema: { kind: "event", type: "(predicate: (value: unknown, index: number, obj: readonly unknown[]) => unknown, thisArg?: any): number" } }, { name: "entries", global: false, description: "Returns an iterable of key, value pairs for every entry in the array", tags: [], required: true, type: "() => ArrayIterator<[number, unknown]>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<[number, unknown]>" } }, { name: "keys", global: false, description: "Returns an iterable of keys in the array", tags: [], required: true, type: "() => ArrayIterator<number>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<number>" } }, { name: "values", global: false, description: "Returns an iterable of values in the array", tags: [], required: true, type: "() => ArrayIterator<unknown>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<unknown>" } }, { name: "includes", global: false, description: "Determines whether an array includes a certain element, returning true or false as appropriate.", tags: [{ name: "param", text: "searchElement The element to search for." }, { name: "param", text: "fromIndex The position in this array at which to begin searching for searchElement." }], required: true, type: "{ (searchElement: unknown, fromIndex?: number | undefined): boolean; (searchElement: unknown, fromIndex?: number | undefined): boolean; }", declarations: [], schema: "{ (searchElement: unknown, fromIndex?: number | undefined): boolean; (searchElement: unknown, fromIndex?: number | undefined): boolean; }" }, { name: "flatMap", global: false, description: `Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.`, tags: [{ name: "param", text: `callback A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.` }], required: true, type: "<U, This = undefined>(callback: (this: This, value: unknown, index: number, array: unknown[]) => U | readonly U[], thisArg?: This | undefined) => U[]", declarations: [], schema: { kind: "event", type: "<U, This = undefined>(callback: (this: This, value: unknown, index: number, array: unknown[]) => U | readonly U[], thisArg?: This | undefined): U[]" } }, { name: "flat", global: false, description: `Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.`, tags: [{ name: "param", text: "depth The maximum recursion depth" }], required: true, type: "<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]", declarations: [], schema: { kind: "event", type: "<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[]" } }, { name: "at", global: false, description: "Returns the item located at the specified index.", tags: [{ name: "param", text: "index The zero-based index of the desired code unit. A negative index will count back from the last item." }], required: true, type: "(index: number) => unknown", declarations: [], schema: { kind: "event", type: "(index: number): unknown" } }, { name: "findLast", global: false, description: `Returns the value of the last element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate findLast calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found, findLast
immediately returns that element value. Otherwise, findLast returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends unknown>(predicate: (value: unknown, index: number, array: readonly unknown[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): unknown; }", declarations: [], schema: "{ <S extends unknown>(predicate: (value: unknown, index: number, array: readonly unknown[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): unknown; }" }, { name: "findLastIndex", global: false, description: `Returns the index of the last element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate findLastIndex calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found,
findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any) => number", declarations: [], schema: { kind: "event", type: "(predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): number" } }, { name: "toReversed", global: false, description: "Copies the array and returns the copied array with all of its elements reversed.", tags: [], required: true, type: "() => unknown[]", declarations: [], schema: { kind: "event", type: "(): unknown[]" } }, { name: "toSorted", global: false, description: "Copies and sorts the array.", tags: [{ name: "param", text: "compareFn Function used to determine the order of the elements. It is expected to return\na negative value if the first argument is less than the second argument, zero if they're equal, and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.\n```ts\n[11, 2, 22, 1].toSorted((a, b) => a - b) // [1, 2, 11, 22]\n```" }], required: true, type: "(compareFn?: ((a: unknown, b: unknown) => number) | undefined) => unknown[]", declarations: [], schema: { kind: "event", type: "(compareFn?: ((a: unknown, b: unknown) => number) | undefined): unknown[]" } }, { name: "toSpliced", global: false, description: `Copies an array and removes elements while, if necessary, inserting new elements in their place, returning the remaining elements.
Copies an array and removes elements while returning the remaining elements.`, tags: [{ name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "param", text: "items Elements to insert into the copied array in place of the deleted elements." }, { name: "returns", text: "A copy of the original array with the remaining elements." }, { name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "returns", text: "A copy of the original array with the remaining elements." }], required: true, type: "{ (start: number, deleteCount: number, ...items: unknown[]): unknown[]; (start: number, deleteCount?: number | undefined): unknown[]; }", declarations: [], schema: "{ (start: number, deleteCount: number, ...items: unknown[]): unknown[]; (start: number, deleteCount?: number | undefined): unknown[]; }" }, { name: "with", global: false, description: `Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array`, tags: [{ name: "param", text: `index The index of the value to overwrite. If the index is
negative, then it replaces from the end of the array.` }, { name: "param", text: "value The value to insert into the copied array." }, { name: "returns", text: "A copy of the original array with the inserted value." }], required: true, type: "(index: number, value: unknown) => unknown[]", declarations: [], schema: { kind: "event", type: "(index: number, value: unknown): unknown[]" } }, { name: "__@iterator@725", global: false, description: "Iterator of values in the array.", tags: [], required: true, type: "() => ArrayIterator<unknown>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<unknown>" } }, { name: "__@unscopables@727", global: false, description: `Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.`, tags: [], required: true, type: "{ readonly [x: number]: boolean | undefined; readonly length?: boolean; toString?: boolean; toLocaleString?: boolean; concat?: boolean; join?: boolean; slice?: boolean; indexOf?: boolean; lastIndexOf?: boolean; ... 23 more ...; readonly [Symbol.unscopables]?: boolean; }", declarations: [], schema: "{ readonly [x: number]: boolean | undefined; readonly length?: boolean; toString?: boolean; toLocaleString?: boolean; concat?: boolean; join?: boolean; slice?: boolean; indexOf?: boolean; lastIndexOf?: boolean; ... 23 more ...; readonly [Symbol.unscopables]?: boolean; }" }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/reorderArray.ts" });
lr.__docgenInfo = Object.assign({ displayName: lr.name ?? lr.__name }, { exportName: "isSameOrder", displayName: "isSameOrder", type: 2, props: [{ name: "length", global: false, description: "Gets the length of the array. This is a number one higher than the highest element defined in an array.", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "toString", global: false, description: "Returns a string representation of an array.", tags: [], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "toLocaleString", global: false, description: "Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.", tags: [], required: true, type: "{ (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }", declarations: [], schema: "{ (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }" }, { name: "concat", global: false, description: "Combines two or more arrays.", tags: [{ name: "param", text: "items Additional items to add to the end of array1." }, { name: "param", text: "items Additional items to add to the end of array1." }], required: true, type: "{ (...items: ConcatArray<unknown>[]): unknown[]; (...items: unknown[]): unknown[]; }", declarations: [], schema: "{ (...items: ConcatArray<unknown>[]): unknown[]; (...items: unknown[]): unknown[]; }" }, { name: "join", global: false, description: "Adds all the elements of an array separated by the specified separator string.", tags: [{ name: "param", text: "separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma." }], required: true, type: "(separator?: string | undefined) => string", declarations: [], schema: { kind: "event", type: "(separator?: string | undefined): string" } }, { name: "slice", global: false, description: "Returns a section of an array.", tags: [{ name: "param", text: "start The beginning of the specified portion of the array." }, { name: "param", text: "end The end of the specified portion of the array. This is exclusive of the element at the index 'end'." }], required: true, type: "(start?: number | undefined, end?: number | undefined) => unknown[]", declarations: [], schema: { kind: "event", type: "(start?: number | undefined, end?: number | undefined): unknown[]" } }, { name: "indexOf", global: false, description: "Returns the index of the first occurrence of a value in an array.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0." }], required: true, type: "{ (searchElement: unknown, fromIndex?: number | undefined): number; (searchElement: unknown, fromIndex?: number | undefined): number; }", declarations: [], schema: "{ (searchElement: unknown, fromIndex?: number | undefined): number; (searchElement: unknown, fromIndex?: number | undefined): number; }" }, { name: "lastIndexOf", global: false, description: "Returns the index of the last occurrence of a specified value in an array.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array." }], required: true, type: "{ (searchElement: unknown, fromIndex?: number | undefined): number; (searchElement: unknown, fromIndex?: number | undefined): number; }", declarations: [], schema: "{ (searchElement: unknown, fromIndex?: number | undefined): number; (searchElement: unknown, fromIndex?: number | undefined): number; }" }, { name: "every", global: false, description: "Determines whether all the members of an array satisfy the specified test.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }, { name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "{ <S extends unknown>(predicate: (value: unknown, index: number, array: readonly unknown[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): boolean; }", declarations: [], schema: "{ <S extends unknown>(predicate: (value: unknown, index: number, array: readonly unknown[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): boolean; }" }, { name: "some", global: false, description: "Determines whether the specified callback function returns true for any element of an array.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "(predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any) => boolean", declarations: [], schema: { kind: "event", type: "(predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): boolean" } }, { name: "forEach", global: false, description: "Performs the specified action for each element in an array.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "(callbackfn: (value: unknown, index: number, array: readonly unknown[]) => void, thisArg?: any) => void", declarations: [], schema: { kind: "event", type: "(callbackfn: (value: unknown, index: number, array: readonly unknown[]) => void, thisArg?: any): void" } }, { name: "map", global: false, description: "Calls a defined callback function on each element of an array, and returns an array that contains the results.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "<U>(callbackfn: (value: unknown, index: number, array: readonly unknown[]) => U, thisArg?: any) => U[]", declarations: [], schema: { kind: "event", type: "<U>(callbackfn: (value: unknown, index: number, array: readonly unknown[]) => U, thisArg?: any): U[]" } }, { name: "filter", global: false, description: "Returns the elements of an array that meet the condition specified in a callback function.", tags: [{ name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }, { name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "{ <S extends unknown>(predicate: (value: unknown, index: number, array: readonly unknown[]) => value is S, thisArg?: any): S[]; (predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): unknown[]; <S extends unknown>(predicate: BooleanConstructor, thisArg?: any): NonFalsy<......", declarations: [], schema: "{ <S extends unknown>(predicate: (value: unknown, index: number, array: readonly unknown[]) => value is S, thisArg?: any): S[]; (predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): unknown[]; <S extends unknown>(predicate: BooleanConstructor, thisArg?: any): NonFalsy<......" }, { name: "reduce", global: false, description: "Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown): unknown; (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown, initialValue: unknown): unknown; <U>(callbackfn: (previousVal...", declarations: [], schema: "{ (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown): unknown; (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown, initialValue: unknown): unknown; <U>(callbackfn: (previousVal..." }, { name: "reduceRight", global: false, description: "Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown): unknown; (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown, initialValue: unknown): unknown; <U>(callbackfn: (previousVal...", declarations: [], schema: "{ (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown): unknown; (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown, initialValue: unknown): unknown; <U>(callbackfn: (previousVal..." }, { name: "find", global: false, description: `Returns the value of the first element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends unknown>(predicate: (value: unknown, index: number, obj: readonly unknown[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: unknown, index: number, obj: readonly unknown[]) => unknown, thisArg?: any): unknown; }", declarations: [], schema: "{ <S extends unknown>(predicate: (value: unknown, index: number, obj: readonly unknown[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: unknown, index: number, obj: readonly unknown[]) => unknown, thisArg?: any): unknown; }" }, { name: "findIndex", global: false, description: `Returns the index of the first element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: unknown, index: number, obj: readonly unknown[]) => unknown, thisArg?: any) => number", declarations: [], schema: { kind: "event", type: "(predicate: (value: unknown, index: number, obj: readonly unknown[]) => unknown, thisArg?: any): number" } }, { name: "entries", global: false, description: "Returns an iterable of key, value pairs for every entry in the array", tags: [], required: true, type: "() => ArrayIterator<[number, unknown]>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<[number, unknown]>" } }, { name: "keys", global: false, description: "Returns an iterable of keys in the array", tags: [], required: true, type: "() => ArrayIterator<number>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<number>" } }, { name: "values", global: false, description: "Returns an iterable of values in the array", tags: [], required: true, type: "() => ArrayIterator<unknown>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<unknown>" } }, { name: "includes", global: false, description: "Determines whether an array includes a certain element, returning true or false as appropriate.", tags: [{ name: "param", text: "searchElement The element to search for." }, { name: "param", text: "fromIndex The position in this array at which to begin searching for searchElement." }], required: true, type: "{ (searchElement: unknown, fromIndex?: number | undefined): boolean; (searchElement: unknown, fromIndex?: number | undefined): boolean; }", declarations: [], schema: "{ (searchElement: unknown, fromIndex?: number | undefined): boolean; (searchElement: unknown, fromIndex?: number | undefined): boolean; }" }, { name: "flatMap", global: false, description: `Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.`, tags: [{ name: "param", text: `callback A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.` }], required: true, type: "<U, This = undefined>(callback: (this: This, value: unknown, index: number, array: unknown[]) => U | readonly U[], thisArg?: This | undefined) => U[]", declarations: [], schema: { kind: "event", type: "<U, This = undefined>(callback: (this: This, value: unknown, index: number, array: unknown[]) => U | readonly U[], thisArg?: This | undefined): U[]" } }, { name: "flat", global: false, description: `Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.`, tags: [{ name: "param", text: "depth The maximum recursion depth" }], required: true, type: "<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]", declarations: [], schema: { kind: "event", type: "<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[]" } }, { name: "at", global: false, description: "Returns the item located at the specified index.", tags: [{ name: "param", text: "index The zero-based index of the desired code unit. A negative index will count back from the last item." }], required: true, type: "(index: number) => unknown", declarations: [], schema: { kind: "event", type: "(index: number): unknown" } }, { name: "findLast", global: false, description: `Returns the value of the last element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate findLast calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found, findLast
immediately returns that element value. Otherwise, findLast returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends unknown>(predicate: (value: unknown, index: number, array: readonly unknown[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): unknown; }", declarations: [], schema: "{ <S extends unknown>(predicate: (value: unknown, index: number, array: readonly unknown[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): unknown; }" }, { name: "findLastIndex", global: false, description: `Returns the index of the last element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate findLastIndex calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found,
findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any) => number", declarations: [], schema: { kind: "event", type: "(predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): number" } }, { name: "toReversed", global: false, description: "Copies the array and returns the copied array with all of its elements reversed.", tags: [], required: true, type: "() => unknown[]", declarations: [], schema: { kind: "event", type: "(): unknown[]" } }, { name: "toSorted", global: false, description: "Copies and sorts the array.", tags: [{ name: "param", text: "compareFn Function used to determine the order of the elements. It is expected to return\na negative value if the first argument is less than the second argument, zero if they're equal, and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.\n```ts\n[11, 2, 22, 1].toSorted((a, b) => a - b) // [1, 2, 11, 22]\n```" }], required: true, type: "(compareFn?: ((a: unknown, b: unknown) => number) | undefined) => unknown[]", declarations: [], schema: { kind: "event", type: "(compareFn?: ((a: unknown, b: unknown) => number) | undefined): unknown[]" } }, { name: "toSpliced", global: false, description: `Copies an array and removes elements while, if necessary, inserting new elements in their place, returning the remaining elements.
Copies an array and removes elements while returning the remaining elements.`, tags: [{ name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "param", text: "items Elements to insert into the copied array in place of the deleted elements." }, { name: "returns", text: "A copy of the original array with the remaining elements." }, { name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "returns", text: "A copy of the original array with the remaining elements." }], required: true, type: "{ (start: number, deleteCount: number, ...items: unknown[]): unknown[]; (start: number, deleteCount?: number | undefined): unknown[]; }", declarations: [], schema: "{ (start: number, deleteCount: number, ...items: unknown[]): unknown[]; (start: number, deleteCount?: number | undefined): unknown[]; }" }, { name: "with", global: false, description: `Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array`, tags: [{ name: "param", text: `index The index of the value to overwrite. If the index is
negative, then it replaces from the end of the array.` }, { name: "param", text: "value The value to insert into the copied array." }, { name: "returns", text: "A copy of the original array with the inserted value." }], required: true, type: "(index: number, value: unknown) => unknown[]", declarations: [], schema: { kind: "event", type: "(index: number, value: unknown): unknown[]" } }, { name: "__@iterator@725", global: false, description: "Iterator of values in the array.", tags: [], required: true, type: "() => ArrayIterator<unknown>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<unknown>" } }, { name: "__@unscopables@727", global: false, description: `Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.`, tags: [], required: true, type: "{ readonly [x: number]: boolean | undefined; readonly length?: boolean; toString?: boolean; toLocaleString?: boolean; concat?: boolean; join?: boolean; slice?: boolean; indexOf?: boolean; lastIndexOf?: boolean; ... 23 more ...; readonly [Symbol.unscopables]?: boolean; }", declarations: [], schema: "{ readonly [x: number]: boolean | undefined; readonly length?: boolean; toString?: boolean; toLocaleString?: boolean; concat?: boolean; join?: boolean; slice?: boolean; indexOf?: boolean; lastIndexOf?: boolean; ... 23 more ...; readonly [Symbol.unscopables]?: boolean; }" }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/reorderArray.ts" });
const Pm = "ReorderSurface: itemIds must contain unique values.", et = (e) => new Set(e).size === e.length, dr = (e) => {
  if (!et(e)) throw new Error(Pm);
}, cr = ({ canceled: e, snapshot: t, currentItemIds: n, source: r }) => {
  if (e || !t || !r || !et(t) || !et(n) || !lr(n, t)) return null;
  const { initialIndex: a, index: i } = r;
  return a < 0 || a >= t.length || i < 0 || i >= t.length || String(r.id) !== t[a] || a === i ? null : { expectedOrderedIds: t, orderedIds: or(t, a, i) };
};
et.__docgenInfo = Object.assign({ displayName: et.name ?? et.__name }, { exportName: "hasUniqueItemIds", displayName: "hasUniqueItemIds", type: 2, props: [{ name: "length", global: false, description: "Gets the length of the array. This is a number one higher than the highest element defined in an array.", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "toString", global: false, description: "Returns a string representation of an array.", tags: [], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "toLocaleString", global: false, description: "Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.", tags: [], required: true, type: "{ (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }", declarations: [], schema: "{ (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }" }, { name: "concat", global: false, description: "Combines two or more arrays.", tags: [{ name: "param", text: "items Additional items to add to the end of array1." }, { name: "param", text: "items Additional items to add to the end of array1." }], required: true, type: "{ (...items: ConcatArray<string>[]): string[]; (...items: (string | ConcatArray<string>)[]): string[]; }", declarations: [], schema: "{ (...items: ConcatArray<string>[]): string[]; (...items: (string | ConcatArray<string>)[]): string[]; }" }, { name: "join", global: false, description: "Adds all the elements of an array separated by the specified separator string.", tags: [{ name: "param", text: "separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma." }], required: true, type: "(separator?: string | undefined) => string", declarations: [], schema: { kind: "event", type: "(separator?: string | undefined): string" } }, { name: "slice", global: false, description: "Returns a section of an array.", tags: [{ name: "param", text: "start The beginning of the specified portion of the array." }, { name: "param", text: "end The end of the specified portion of the array. This is exclusive of the element at the index 'end'." }], required: true, type: "(start?: number | undefined, end?: number | undefined) => string[]", declarations: [], schema: { kind: "event", type: "(start?: number | undefined, end?: number | undefined): string[]" } }, { name: "indexOf", global: false, description: "Returns the index of the first occurrence of a value in an array.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0." }], required: true, type: "{ (searchElement: string, fromIndex?: number | undefined): number; (searchElement: string, fromIndex?: number | undefined): number; }", declarations: [], schema: "{ (searchElement: string, fromIndex?: number | undefined): number; (searchElement: string, fromIndex?: number | undefined): number; }" }, { name: "lastIndexOf", global: false, description: "Returns the index of the last occurrence of a specified value in an array.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array." }], required: true, type: "{ (searchElement: string, fromIndex?: number | undefined): number; (searchElement: string, fromIndex?: number | undefined): number; }", declarations: [], schema: "{ (searchElement: string, fromIndex?: number | undefined): number; (searchElement: string, fromIndex?: number | undefined): number; }" }, { name: "every", global: false, description: "Determines whether all the members of an array satisfy the specified test.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }, { name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean; }", declarations: [], schema: "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean; }" }, { name: "some", global: false, description: "Determines whether the specified callback function returns true for any element of an array.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "(predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any) => boolean", declarations: [], schema: { kind: "event", type: "(predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean" } }, { name: "forEach", global: false, description: "Performs the specified action for each element in an array.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "(callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any) => void", declarations: [], schema: { kind: "event", type: "(callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any): void" } }, { name: "map", global: false, description: "Calls a defined callback function on each element of an array, and returns an array that contains the results.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "<U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any) => U[]", declarations: [], schema: { kind: "event", type: "<U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any): U[]" } }, { name: "filter", global: false, description: "Returns the elements of an array that meet the condition specified in a callback function.", tags: [{ name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }, { name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[]; <S extends string>(predicate: BooleanConstructor, thisArg?: any): NonFalsy<...>[]; }", declarations: [], schema: "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[]; <S extends string>(predicate: BooleanConstructor, thisArg?: any): NonFalsy<...>[]; }" }, { name: "reduce", global: false, description: "Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, curr...", declarations: [], schema: "{ (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, curr..." }, { name: "reduceRight", global: false, description: "Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, curr...", declarations: [], schema: "{ (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, curr..." }, { name: "find", global: false, description: `Returns the value of the first element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends string>(predicate: (value: string, index: number, obj: readonly string[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string | undefined; }", declarations: [], schema: "{ <S extends string>(predicate: (value: string, index: number, obj: readonly string[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string | undefined; }" }, { name: "findIndex", global: false, description: `Returns the index of the first element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any) => number", declarations: [], schema: { kind: "event", type: "(predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): number" } }, { name: "entries", global: false, description: "Returns an iterable of key, value pairs for every entry in the array", tags: [], required: true, type: "() => ArrayIterator<[number, string]>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<[number, string]>" } }, { name: "keys", global: false, description: "Returns an iterable of keys in the array", tags: [], required: true, type: "() => ArrayIterator<number>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<number>" } }, { name: "values", global: false, description: "Returns an iterable of values in the array", tags: [], required: true, type: "() => ArrayIterator<string>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<string>" } }, { name: "includes", global: false, description: "Determines whether an array includes a certain element, returning true or false as appropriate.", tags: [{ name: "param", text: "searchElement The element to search for." }, { name: "param", text: "fromIndex The position in this array at which to begin searching for searchElement." }], required: true, type: "{ (searchElement: string, fromIndex?: number | undefined): boolean; (searchElement: string, fromIndex?: number | undefined): boolean; }", declarations: [], schema: "{ (searchElement: string, fromIndex?: number | undefined): boolean; (searchElement: string, fromIndex?: number | undefined): boolean; }" }, { name: "flatMap", global: false, description: `Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.`, tags: [{ name: "param", text: `callback A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.` }], required: true, type: "<U, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U | readonly U[], thisArg?: This | undefined) => U[]", declarations: [], schema: { kind: "event", type: "<U, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U | readonly U[], thisArg?: This | undefined): U[]" } }, { name: "flat", global: false, description: `Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.`, tags: [{ name: "param", text: "depth The maximum recursion depth" }], required: true, type: "<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]", declarations: [], schema: { kind: "event", type: "<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[]" } }, { name: "at", global: false, description: "Returns the item located at the specified index.", tags: [{ name: "param", text: "index The zero-based index of the desired code unit. A negative index will count back from the last item." }], required: true, type: "(index: number) => string | undefined", declarations: [], schema: { kind: "event", type: "(index: number): string | undefined" } }, { name: "findLast", global: false, description: `Returns the value of the last element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate findLast calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found, findLast
immediately returns that element value. Otherwise, findLast returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string | undefined; }", declarations: [], schema: "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string | undefined; }" }, { name: "findLastIndex", global: false, description: `Returns the index of the last element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate findLastIndex calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found,
findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any) => number", declarations: [], schema: { kind: "event", type: "(predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): number" } }, { name: "toReversed", global: false, description: "Copies the array and returns the copied array with all of its elements reversed.", tags: [], required: true, type: "() => string[]", declarations: [], schema: { kind: "event", type: "(): string[]" } }, { name: "toSorted", global: false, description: "Copies and sorts the array.", tags: [{ name: "param", text: "compareFn Function used to determine the order of the elements. It is expected to return\na negative value if the first argument is less than the second argument, zero if they're equal, and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.\n```ts\n[11, 2, 22, 1].toSorted((a, b) => a - b) // [1, 2, 11, 22]\n```" }], required: true, type: "(compareFn?: ((a: string, b: string) => number) | undefined) => string[]", declarations: [], schema: { kind: "event", type: "(compareFn?: ((a: string, b: string) => number) | undefined): string[]" } }, { name: "toSpliced", global: false, description: `Copies an array and removes elements while, if necessary, inserting new elements in their place, returning the remaining elements.
Copies an array and removes elements while returning the remaining elements.`, tags: [{ name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "param", text: "items Elements to insert into the copied array in place of the deleted elements." }, { name: "returns", text: "A copy of the original array with the remaining elements." }, { name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "returns", text: "A copy of the original array with the remaining elements." }], required: true, type: "{ (start: number, deleteCount: number, ...items: string[]): string[]; (start: number, deleteCount?: number | undefined): string[]; }", declarations: [], schema: "{ (start: number, deleteCount: number, ...items: string[]): string[]; (start: number, deleteCount?: number | undefined): string[]; }" }, { name: "with", global: false, description: `Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array`, tags: [{ name: "param", text: `index The index of the value to overwrite. If the index is
negative, then it replaces from the end of the array.` }, { name: "param", text: "value The value to insert into the copied array." }, { name: "returns", text: "A copy of the original array with the inserted value." }], required: true, type: "(index: number, value: string) => string[]", declarations: [], schema: { kind: "event", type: "(index: number, value: string): string[]" } }, { name: "__@iterator@725", global: false, description: "Iterator of values in the array.", tags: [], required: true, type: "() => ArrayIterator<string>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<string>" } }, { name: "__@unscopables@727", global: false, description: `Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.`, tags: [], required: true, type: "{ readonly [x: number]: boolean | undefined; readonly length?: boolean; toString?: boolean; toLocaleString?: boolean; concat?: boolean; join?: boolean; slice?: boolean; indexOf?: boolean; lastIndexOf?: boolean; ... 23 more ...; readonly [Symbol.unscopables]?: boolean; }", declarations: [], schema: "{ readonly [x: number]: boolean | undefined; readonly length?: boolean; toString?: boolean; toLocaleString?: boolean; concat?: boolean; join?: boolean; slice?: boolean; indexOf?: boolean; lastIndexOf?: boolean; ... 23 more ...; readonly [Symbol.unscopables]?: boolean; }" }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/validateReorderSurface.ts" });
dr.__docgenInfo = Object.assign({ displayName: dr.name ?? dr.__name }, { exportName: "assertUniqueItemIds", displayName: "assertUniqueItemIds", type: 2, props: [{ name: "length", global: false, description: "Gets the length of the array. This is a number one higher than the highest element defined in an array.", tags: [], required: true, type: "number", declarations: [], schema: "number" }, { name: "toString", global: false, description: "Returns a string representation of an array.", tags: [], required: true, type: "() => string", declarations: [], schema: { kind: "event", type: "(): string" } }, { name: "toLocaleString", global: false, description: "Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.", tags: [], required: true, type: "{ (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }", declarations: [], schema: "{ (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }" }, { name: "concat", global: false, description: "Combines two or more arrays.", tags: [{ name: "param", text: "items Additional items to add to the end of array1." }, { name: "param", text: "items Additional items to add to the end of array1." }], required: true, type: "{ (...items: ConcatArray<string>[]): string[]; (...items: (string | ConcatArray<string>)[]): string[]; }", declarations: [], schema: "{ (...items: ConcatArray<string>[]): string[]; (...items: (string | ConcatArray<string>)[]): string[]; }" }, { name: "join", global: false, description: "Adds all the elements of an array separated by the specified separator string.", tags: [{ name: "param", text: "separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma." }], required: true, type: "(separator?: string | undefined) => string", declarations: [], schema: { kind: "event", type: "(separator?: string | undefined): string" } }, { name: "slice", global: false, description: "Returns a section of an array.", tags: [{ name: "param", text: "start The beginning of the specified portion of the array." }, { name: "param", text: "end The end of the specified portion of the array. This is exclusive of the element at the index 'end'." }], required: true, type: "(start?: number | undefined, end?: number | undefined) => string[]", declarations: [], schema: { kind: "event", type: "(start?: number | undefined, end?: number | undefined): string[]" } }, { name: "indexOf", global: false, description: "Returns the index of the first occurrence of a value in an array.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0." }], required: true, type: "{ (searchElement: string, fromIndex?: number | undefined): number; (searchElement: string, fromIndex?: number | undefined): number; }", declarations: [], schema: "{ (searchElement: string, fromIndex?: number | undefined): number; (searchElement: string, fromIndex?: number | undefined): number; }" }, { name: "lastIndexOf", global: false, description: "Returns the index of the last occurrence of a specified value in an array.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array." }], required: true, type: "{ (searchElement: string, fromIndex?: number | undefined): number; (searchElement: string, fromIndex?: number | undefined): number; }", declarations: [], schema: "{ (searchElement: string, fromIndex?: number | undefined): number; (searchElement: string, fromIndex?: number | undefined): number; }" }, { name: "every", global: false, description: "Determines whether all the members of an array satisfy the specified test.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }, { name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean; }", declarations: [], schema: "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean; }" }, { name: "some", global: false, description: "Determines whether the specified callback function returns true for any element of an array.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "(predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any) => boolean", declarations: [], schema: { kind: "event", type: "(predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean" } }, { name: "forEach", global: false, description: "Performs the specified action for each element in an array.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "(callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any) => void", declarations: [], schema: { kind: "event", type: "(callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any): void" } }, { name: "map", global: false, description: "Calls a defined callback function on each element of an array, and returns an array that contains the results.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "<U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any) => U[]", declarations: [], schema: { kind: "event", type: "<U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any): U[]" } }, { name: "filter", global: false, description: "Returns the elements of an array that meet the condition specified in a callback function.", tags: [{ name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }, { name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[]; <S extends string>(predicate: BooleanConstructor, thisArg?: any): NonFalsy<...>[]; }", declarations: [], schema: "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[]; <S extends string>(predicate: BooleanConstructor, thisArg?: any): NonFalsy<...>[]; }" }, { name: "reduce", global: false, description: "Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, curr...", declarations: [], schema: "{ (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, curr..." }, { name: "reduceRight", global: false, description: "Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, curr...", declarations: [], schema: "{ (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, curr..." }, { name: "find", global: false, description: `Returns the value of the first element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends string>(predicate: (value: string, index: number, obj: readonly string[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string | undefined; }", declarations: [], schema: "{ <S extends string>(predicate: (value: string, index: number, obj: readonly string[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string | undefined; }" }, { name: "findIndex", global: false, description: `Returns the index of the first element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any) => number", declarations: [], schema: { kind: "event", type: "(predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): number" } }, { name: "entries", global: false, description: "Returns an iterable of key, value pairs for every entry in the array", tags: [], required: true, type: "() => ArrayIterator<[number, string]>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<[number, string]>" } }, { name: "keys", global: false, description: "Returns an iterable of keys in the array", tags: [], required: true, type: "() => ArrayIterator<number>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<number>" } }, { name: "values", global: false, description: "Returns an iterable of values in the array", tags: [], required: true, type: "() => ArrayIterator<string>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<string>" } }, { name: "includes", global: false, description: "Determines whether an array includes a certain element, returning true or false as appropriate.", tags: [{ name: "param", text: "searchElement The element to search for." }, { name: "param", text: "fromIndex The position in this array at which to begin searching for searchElement." }], required: true, type: "{ (searchElement: string, fromIndex?: number | undefined): boolean; (searchElement: string, fromIndex?: number | undefined): boolean; }", declarations: [], schema: "{ (searchElement: string, fromIndex?: number | undefined): boolean; (searchElement: string, fromIndex?: number | undefined): boolean; }" }, { name: "flatMap", global: false, description: `Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.`, tags: [{ name: "param", text: `callback A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.` }], required: true, type: "<U, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U | readonly U[], thisArg?: This | undefined) => U[]", declarations: [], schema: { kind: "event", type: "<U, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U | readonly U[], thisArg?: This | undefined): U[]" } }, { name: "flat", global: false, description: `Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.`, tags: [{ name: "param", text: "depth The maximum recursion depth" }], required: true, type: "<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]", declarations: [], schema: { kind: "event", type: "<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[]" } }, { name: "at", global: false, description: "Returns the item located at the specified index.", tags: [{ name: "param", text: "index The zero-based index of the desired code unit. A negative index will count back from the last item." }], required: true, type: "(index: number) => string | undefined", declarations: [], schema: { kind: "event", type: "(index: number): string | undefined" } }, { name: "findLast", global: false, description: `Returns the value of the last element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate findLast calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found, findLast
immediately returns that element value. Otherwise, findLast returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string | undefined; }", declarations: [], schema: "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string | undefined; }" }, { name: "findLastIndex", global: false, description: `Returns the index of the last element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate findLastIndex calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found,
findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any) => number", declarations: [], schema: { kind: "event", type: "(predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): number" } }, { name: "toReversed", global: false, description: "Copies the array and returns the copied array with all of its elements reversed.", tags: [], required: true, type: "() => string[]", declarations: [], schema: { kind: "event", type: "(): string[]" } }, { name: "toSorted", global: false, description: "Copies and sorts the array.", tags: [{ name: "param", text: "compareFn Function used to determine the order of the elements. It is expected to return\na negative value if the first argument is less than the second argument, zero if they're equal, and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.\n```ts\n[11, 2, 22, 1].toSorted((a, b) => a - b) // [1, 2, 11, 22]\n```" }], required: true, type: "(compareFn?: ((a: string, b: string) => number) | undefined) => string[]", declarations: [], schema: { kind: "event", type: "(compareFn?: ((a: string, b: string) => number) | undefined): string[]" } }, { name: "toSpliced", global: false, description: `Copies an array and removes elements while, if necessary, inserting new elements in their place, returning the remaining elements.
Copies an array and removes elements while returning the remaining elements.`, tags: [{ name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "param", text: "items Elements to insert into the copied array in place of the deleted elements." }, { name: "returns", text: "A copy of the original array with the remaining elements." }, { name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "returns", text: "A copy of the original array with the remaining elements." }], required: true, type: "{ (start: number, deleteCount: number, ...items: string[]): string[]; (start: number, deleteCount?: number | undefined): string[]; }", declarations: [], schema: "{ (start: number, deleteCount: number, ...items: string[]): string[]; (start: number, deleteCount?: number | undefined): string[]; }" }, { name: "with", global: false, description: `Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array`, tags: [{ name: "param", text: `index The index of the value to overwrite. If the index is
negative, then it replaces from the end of the array.` }, { name: "param", text: "value The value to insert into the copied array." }, { name: "returns", text: "A copy of the original array with the inserted value." }], required: true, type: "(index: number, value: string) => string[]", declarations: [], schema: { kind: "event", type: "(index: number, value: string): string[]" } }, { name: "__@iterator@725", global: false, description: "Iterator of values in the array.", tags: [], required: true, type: "() => ArrayIterator<string>", declarations: [], schema: { kind: "event", type: "(): ArrayIterator<string>" } }, { name: "__@unscopables@727", global: false, description: `Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.`, tags: [], required: true, type: "{ readonly [x: number]: boolean | undefined; readonly length?: boolean; toString?: boolean; toLocaleString?: boolean; concat?: boolean; join?: boolean; slice?: boolean; indexOf?: boolean; lastIndexOf?: boolean; ... 23 more ...; readonly [Symbol.unscopables]?: boolean; }", declarations: [], schema: "{ readonly [x: number]: boolean | undefined; readonly length?: boolean; toString?: boolean; toLocaleString?: boolean; concat?: boolean; join?: boolean; slice?: boolean; indexOf?: boolean; lastIndexOf?: boolean; ... 23 more ...; readonly [Symbol.unscopables]?: boolean; }" }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/validateReorderSurface.ts" });
cr.__docgenInfo = Object.assign({ displayName: cr.name ?? cr.__name }, { exportName: "resolveReorderDragEnd", displayName: "resolveReorderDragEnd", type: 2, props: [{ name: "canceled", global: false, description: "Whether dnd-kit reports this operation as cancelled.", tags: [], required: true, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "snapshot", global: false, description: "The `itemIds` snapshot captured at drag start, or `null` when no drag was active.", tags: [], required: true, type: "readonly string[] | null", declarations: [], schema: { kind: "enum", type: "readonly string[] | null", schema: ["null", { kind: "array", type: "readonly string[]" }] } }, { name: "currentItemIds", global: false, description: "The surface's current, live `itemIds` at drag end.", tags: [], required: true, type: "readonly string[]", declarations: [], schema: { kind: "array", type: "readonly string[]" } }, { name: "source", global: false, description: "The completed operation's sortable source, or `null` when the operation was not sortable.", tags: [], required: true, type: "ReorderDragEndSource | null", declarations: [], schema: { kind: "enum", type: "ReorderDragEndSource | null", schema: ["null", { kind: "object", type: "ReorderDragEndSource" }] } }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/validateReorderSurface.ts" });
const la = to({ __name: "ReorderSurface", props: { itemIds: {}, disabled: { type: Boolean } }, emits: ["reorder"], setup(e, { emit: t }) {
  const n = e, r = t;
  ro(Pd, { disabled: De(() => !!n.disabled) }), dr(n.itemIds);
  const a = Ha(null), i = hr(void 0), s = (c) => {
    et(n.itemIds) || c.preventDefault();
  }, o = (c) => {
    a.value = [...n.itemIds];
    const u = c.nativeEvent instanceof PointerEvent ? c.nativeEvent.pointerType : void 0;
    i.value = u, Am(u);
  }, l = (c) => {
    const u = a.value, d = i.value;
    a.value = null, i.value = void 0;
    const { operation: m } = c, p = Ch(m) ? m.source : null;
    Im(d, p?.element);
    const y = cr({ canceled: c.canceled, snapshot: u, currentItemIds: n.itemIds, source: p });
    y && r("reorder", y);
  };
  return (c, u) => (Xd(), Gd(qn(Eh), { sensors: qn(Dm), plugins: qn(sr), modifiers: qn(Em), onBeforeDragStart: s, onDragStart: o, onDragEnd: l }, { default: Yd(() => [Zd(c.$slots, "default")]), _: 3 }, 8, ["sensors", "plugins", "modifiers"]));
} });
la.__docgenInfo = Object.assign({ displayName: la.name ?? la.__name }, { exportName: "default", displayName: "ReorderSurface", type: 2, props: [{ name: "itemIds", global: false, description: "The current ordered item ids rendered by the surface. This is the order a drag operates on,\nnot necessarily the canonical persisted order: a caller reconciling optimistic state (see\n`useDatabaseViewReorderState`) passes its optimistic display order while a reorder is pending.", tags: [], required: true, type: "readonly string[]", declarations: [], schema: { kind: "array", type: "readonly string[]" } }, { name: "disabled", global: false, description: "Whether new drag activation must stay disabled, e.g. while a reorder is still pending.", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "key", global: true, description: "", tags: [], required: false, type: "PropertyKey", declarations: [], schema: { kind: "enum", type: "PropertyKey", schema: ["string", "number", "symbol"] } }, { name: "ref", global: true, description: "", tags: [], required: false, type: "VNodeRef", declarations: [], schema: { kind: "enum", type: "VNodeRef", schema: ["string", "Ref<any, any>", { kind: "event", type: "(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void" }] } }, { name: "ref_for", global: true, description: "", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "ref_key", global: true, description: "", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "class", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "style", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "tabindex", global: true, description: "", tags: [], required: false, type: "string | number", declarations: [], schema: { kind: "enum", type: "string | number", schema: ["string", "number"] } }, { name: "aria-activedescendant", global: true, description: "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-atomic", global: true, description: "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-autocomplete", global: true, description: `Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`, tags: [], required: false, type: '"none" | "inline" | "list" | "both" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "inline" | "list" | "both" | undefined', schema: ["undefined", '"none"', '"inline"', '"list"', '"both"'] } }, { name: "aria-busy", global: true, description: "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-checked", global: true, description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.', tags: [{ name: "see", text: "aria-pressed" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-colcount", global: true, description: "Defines the total number of columns in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colindex", global: true, description: "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colcount" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colspan", global: true, description: "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-controls", global: true, description: "Identifies the element (or elements) whose contents or presence are controlled by the current element.", tags: [{ name: "see", text: "aria-owns." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-current", global: true, description: "Indicates the element that represents the current item within a container or set of related elements.", tags: [], required: false, type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"page"', '"step"', '"location"', '"date"', '"time"'] } }, { name: "aria-describedby", global: true, description: "Identifies the element (or elements) that describes the object.", tags: [{ name: "see", text: "aria-labelledby" }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-details", global: true, description: "Identifies the element that provides a detailed, extended description for the object.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-disabled", global: true, description: "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.", tags: [{ name: "see", text: "aria-hidden" }, { name: "see", text: "aria-readonly." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-dropeffect", global: true, description: "Indicates what functions can be performed when a dragged object is released on the drop target.", tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined', schema: ["undefined", '"none"', '"copy"', '"execute"', '"link"', '"move"', '"popup"'] } }, { name: "aria-errormessage", global: true, description: "Identifies the element that provides an error message for the object.", tags: [{ name: "see", text: "aria-invalid" }, { name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-expanded", global: true, description: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-flowto", global: true, description: `Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-grabbed", global: true, description: `Indicates an element's "grabbed" state in a drag-and-drop operation.`, tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-haspopup", global: true, description: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", tags: [], required: false, type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"menu"', '"listbox"', '"tree"', '"grid"', '"dialog"'] } }, { name: "aria-hidden", global: true, description: "Indicates whether the element is exposed to an accessibility API.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-invalid", global: true, description: "Indicates the entered value does not conform to the format expected by the application.", tags: [{ name: "see", text: "aria-errormessage." }], required: false, type: 'Booleanish | "grammar" | "spelling" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "grammar" | "spelling" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"grammar"', '"spelling"'] } }, { name: "aria-keyshortcuts", global: true, description: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-label", global: true, description: "Defines a string value that labels the current element.", tags: [{ name: "see", text: "aria-labelledby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-labelledby", global: true, description: "Identifies the element (or elements) that labels the current element.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-level", global: true, description: "Defines the hierarchical level of an element within a structure.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-live", global: true, description: "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", tags: [], required: false, type: '"off" | "assertive" | "polite" | undefined', declarations: [], schema: { kind: "enum", type: '"off" | "assertive" | "polite" | undefined', schema: ["undefined", '"off"', '"assertive"', '"polite"'] } }, { name: "aria-modal", global: true, description: "Indicates whether an element is modal when displayed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiline", global: true, description: "Indicates whether a text box accepts multiple lines of input or only a single line.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiselectable", global: true, description: "Indicates that the user may select more than one item from the current selectable descendants.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-orientation", global: true, description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", tags: [], required: false, type: '"horizontal" | "vertical" | undefined', declarations: [], schema: { kind: "enum", type: '"horizontal" | "vertical" | undefined', schema: ["undefined", '"horizontal"', '"vertical"'] } }, { name: "aria-owns", global: true, description: `Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.`, tags: [{ name: "see", text: "aria-controls." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-placeholder", global: true, description: `Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-posinset", global: true, description: "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-setsize." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-pressed", global: true, description: 'Indicates the current "pressed" state of toggle buttons.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-readonly", global: true, description: "Indicates that the element is not editable, but is otherwise operable.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-relevant", global: true, description: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.", tags: [{ name: "see", text: "aria-atomic." }], required: false, type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', declarations: [], schema: { kind: "enum", type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', schema: ["undefined", '"additions"', '"additions removals"', '"additions text"', '"all"', '"removals"', '"removals additions"', '"removals text"', '"text"', '"text additions"', '"text removals"'] } }, { name: "aria-required", global: true, description: "Indicates that user input is required on the element before a form may be submitted.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-roledescription", global: true, description: "Defines a human-readable, author-localized description for the role of an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-rowcount", global: true, description: "Defines the total number of rows in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowindex", global: true, description: "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowcount" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowspan", global: true, description: "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-selected", global: true, description: 'Indicates the current "selected" state of various widgets.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-pressed." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-setsize", global: true, description: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-posinset." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-sort", global: true, description: "Indicates if items in a table or grid are sorted in ascending or descending order.", tags: [], required: false, type: '"none" | "ascending" | "descending" | "other" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "ascending" | "descending" | "other" | undefined', schema: ["undefined", '"none"', '"ascending"', '"descending"', '"other"'] } }, { name: "aria-valuemax", global: true, description: "Defines the maximum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuemin", global: true, description: "Defines the minimum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuenow", global: true, description: "Defines the current value for a range widget.", tags: [{ name: "see", text: "aria-valuetext." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuetext", global: true, description: "Defines the human readable text alternative of aria-valuenow for a range widget.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: false, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }], events: [{ name: "reorder", description: "One completed, changed, valid drag translated into a guarded reorder request.", tags: [], type: "[request: ReorderCommitRequest<string>]", signature: '(evt: "reorder", request: ReorderCommitRequest<string>): void', declarations: [], schema: ["ReorderCommitRequest<string>"] }], slots: [{ name: "default", type: "any", description: "", declarations: [], schema: "any" }], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/ReorderSurface.vue" });
const da = ({ id: e, index: t, element: n, handle: r }) => {
  const a = no(Pd, null);
  if (!a) throw new Error("useReorderItem must be used within a ReorderSurface");
  const { isDragging: i } = am({ id: e, index: t, element: n, handle: r, disabled: a.disabled, transition: km });
  return { isDragging: i };
};
da.__docgenInfo = Object.assign({ displayName: da.name ?? da.__name }, { exportName: "useReorderItem", displayName: "useReorderItem", type: 2, props: [{ name: "id", global: false, description: "Stable item id, matching one entry of the surface's `itemIds`.", tags: [], required: true, type: "MaybeRefOrGetter<string>", declarations: [], schema: { kind: "enum", type: "MaybeRefOrGetter<string>", schema: ["string", "Ref<string, string>", { kind: "object", type: "ShallowRef<string, string>" }, "WritableComputedRef<string, string>", "ComputedRef<string>", { kind: "event", type: "(): string" }] } }, { name: "index", global: false, description: "The item's position within the surface's displayed order.", tags: [], required: true, type: "MaybeRefOrGetter<number>", declarations: [], schema: { kind: "enum", type: "MaybeRefOrGetter<number>", schema: ["number", "Ref<number, number>", { kind: "object", type: "ShallowRef<number, number>" }, "WritableComputedRef<number, number>", "ComputedRef<number>", { kind: "event", type: "(): number" }] } }, { name: "element", global: false, description: "The row's root element used for pointer geometry and drag transforms.", tags: [], required: true, type: "MaybeRefOrGetter<HTMLElement | undefined>", declarations: [], schema: { kind: "enum", type: "MaybeRefOrGetter<HTMLElement | undefined>", schema: ["undefined", { kind: "object", type: "HTMLElement" }, "Ref<HTMLElement | undefined, HTMLElement | undefined>", { kind: "object", type: "ShallowRef<HTMLElement | undefined, HTMLElement | undefined>" }, "WritableComputedRef<HTMLElement | undefined, HTMLElement | undefined>", "ComputedRef<HTMLElement | undefined>", { kind: "event", type: "(): HTMLElement | undefined" }] } }, { name: "handle", global: false, description: "The element that must receive the pointer-down gesture to activate a drag.", tags: [], required: true, type: "MaybeRefOrGetter<HTMLElement | undefined>", declarations: [], schema: { kind: "enum", type: "MaybeRefOrGetter<HTMLElement | undefined>", schema: ["undefined", { kind: "object", type: "HTMLElement" }, "Ref<HTMLElement | undefined, HTMLElement | undefined>", { kind: "object", type: "ShallowRef<HTMLElement | undefined, HTMLElement | undefined>" }, "WritableComputedRef<HTMLElement | undefined, HTMLElement | undefined>", "ComputedRef<HTMLElement | undefined>", { kind: "event", type: "(): HTMLElement | undefined" }] } }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/useReorderItem.ts" });
export {
  la as _,
  da as u
};
