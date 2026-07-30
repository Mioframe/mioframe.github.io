import { d as Bo, s as qn, l as tr, m as yr, b as Me, e as qg, p as Lg, q as Go, r as rr, v as Ln, x as Yo, y as W, z as Wg, c as zg, w as $g, u as Nt, o as Vg, A as Ug } from "./iframe-DfQr5I72.js";
var jg = /* @__PURE__ */ Symbol.for("preact-signals");
function Mr() {
  if (xe > 1) xe--;
  else {
    var e, a = false;
    for ((function() {
      var n = ir;
      for (ir = void 0; n !== void 0; ) {
        var i = n.S;
        if (i.v === n.v) for (var o = i.t; o !== void 0; o = o.x) o.i === n.i && (o.i = i.i);
        n = n.o;
      }
    })(); ot !== void 0; ) {
      var t = ot;
      for (ot = void 0, nr++; t !== void 0; ) {
        var r = t.u;
        if (t.u = void 0, t.f &= -3, !(8 & t.f) && Zo(t)) try {
          t.c();
        } catch (n) {
          a || (e = n, a = true);
        }
        t = r;
      }
    }
    if (nr = 0, xe--, a) throw e;
  }
}
function z(e) {
  if (xe > 0) return e();
  en = ++Fg, xe++;
  try {
    return e();
  } finally {
    Mr();
  }
}
var it, R = void 0;
function _(e) {
  var a = R, t = it;
  R = void 0, it = void 0;
  try {
    return e();
  } finally {
    R = a, it = t;
  }
}
var ot = void 0, xe = 0, nr = 0, Fg = 0, en = 0, ir = void 0, or = 0;
function Xo(e) {
  if (R !== void 0) {
    var a = e.n;
    if (a === void 0 || a.t !== R) return a = { i: 0, S: e, p: R.s, n: void 0, t: R, e: void 0, x: void 0, r: a }, R.s !== void 0 && (R.s.n = a), R.s = a, e.n = a, 32 & R.f && e.S(a), a;
    if (a.i === -1) return a.i = 0, a.n !== void 0 && (a.n.p = a.p, a.p !== void 0 && (a.p.n = a.n), a.p = R.s, a.n = void 0, R.s.n = a, R.s = a), a;
  }
}
function Q(e, a) {
  this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = a?.watched, this.Z = a?.unwatched, this.name = a?.name;
}
Q.prototype.brand = jg;
Q.prototype.h = function() {
  return true;
};
Q.prototype.S = function(e) {
  var a = this, t = this.t;
  t !== e && e.e === void 0 && (e.x = t, this.t = e, t !== void 0 ? t.e = e : _(function() {
    var r;
    (r = a.W) == null || r.call(a);
  }));
};
Q.prototype.U = function(e) {
  var a = this;
  if (this.t !== void 0) {
    var t = e.e, r = e.x;
    t !== void 0 && (t.x = r, e.e = void 0), r !== void 0 && (r.e = t, e.x = void 0), e === this.t && (this.t = r, r === void 0 && _(function() {
      var n;
      (n = a.Z) == null || n.call(a);
    }));
  }
};
Q.prototype.subscribe = function(e) {
  var a = this;
  return ie(function() {
    var t = a.value;
    _(function() {
      return e(t);
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
  return _(function() {
    return e.value;
  });
};
Object.defineProperty(Q.prototype, "value", { get: function() {
  var e = Xo(this);
  return e !== void 0 && (e.i = this.i), this.v;
}, set: function(e) {
  if (e !== this.v) {
    if (nr > 100) throw new Error("Cycle detected");
    (function(t) {
      xe !== 0 && nr === 0 && t.l !== en && (t.l = en, ir = { S: t, v: t.v, i: t.i, o: ir });
    })(this), this.v = e, this.i++, or++, xe++;
    try {
      for (var a = this.t; a !== void 0; a = a.x) a.t.N();
    } finally {
      Mr();
    }
  }
} });
function ra(e, a) {
  return new Q(e, a);
}
function Zo(e) {
  for (var a = e.s; a !== void 0; a = a.n) if (a.S.i !== a.i || !a.S.h() || a.S.i !== a.i) return true;
  return false;
}
function Jo(e) {
  for (var a = e.s; a !== void 0; a = a.n) {
    var t = a.S.n;
    if (t !== void 0 && (a.r = t), a.S.n = a, a.i = -1, a.n === void 0) {
      e.s = a;
      break;
    }
  }
}
function Qo(e) {
  for (var a = e.s, t = void 0; a !== void 0; ) {
    var r = a.p;
    a.i === -1 ? (a.S.U(a), r !== void 0 && (r.n = a.n), a.n !== void 0 && (a.n.p = r)) : t = a, a.S.n = a.r, a.r !== void 0 && (a.r = void 0), a = r;
  }
  e.s = t;
}
function na(e, a) {
  Q.call(this, void 0, a), this.x = e, this.s = void 0, this.g = or - 1, this.f = 4;
}
na.prototype = new Q();
na.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return false;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === or)) return true;
  if (this.g = or, this.f |= 1, this.i > 0 && !Zo(this)) return this.f &= -2, true;
  var e = R;
  try {
    Jo(this), R = this;
    var a = this.x();
    (16 & this.f || this.v !== a || this.i === 0) && (this.v = a, this.f &= -17, this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return R = e, Qo(this), this.f &= -2, true;
};
na.prototype.S = function(e) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var a = this.s; a !== void 0; a = a.n) a.S.S(a);
  }
  Q.prototype.S.call(this, e);
};
na.prototype.U = function(e) {
  if (this.t !== void 0 && (Q.prototype.U.call(this, e), this.t === void 0)) {
    this.f &= -33;
    for (var a = this.s; a !== void 0; a = a.n) a.S.U(a);
  }
};
na.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var e = this.t; e !== void 0; e = e.x) e.t.N();
  }
};
Object.defineProperty(na.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var e = Xo(this);
  if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function oo(e, a) {
  return new na(e, a);
}
function el(e) {
  var a = e.m;
  if (e.m = void 0, typeof a == "function") {
    xe++;
    var t = R;
    R = void 0;
    try {
      a();
    } catch (r) {
      throw e.f &= -2, e.f |= 8, Wn(e), r;
    } finally {
      R = t, Mr();
    }
  }
}
function Wn(e) {
  for (var a = e.s; a !== void 0; a = a.n) a.S.U(a);
  e.x = void 0, e.s = void 0, el(e);
}
function Kg(e) {
  if (R !== this) throw new Error("Out-of-order effect");
  Qo(this), R = e, this.f &= -2, 8 & this.f && Wn(this), Mr();
}
function Ca(e, a) {
  this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = a?.name, it && it.push(this);
}
Ca.prototype.c = function() {
  var e = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var a = this.x();
    typeof a == "function" && (this.m = a);
  } finally {
    e();
  }
};
Ca.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, el(this), Jo(this), xe++;
  var e = R;
  return R = this, Kg.bind(this, e);
};
Ca.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.u = ot, ot = this);
};
Ca.prototype.d = function() {
  this.f |= 8, 1 & this.f || Wn(this);
};
Ca.prototype.dispose = function() {
  this.d();
};
function ie(e, a) {
  var t = new Ca(e, a);
  try {
    t.c();
  } catch (n) {
    throw t.d(), n;
  }
  var r = t.d.bind(t);
  return r[Symbol.dispose] = r, r;
}
var Hg = Object.create, zn = Object.defineProperty, Bg = Object.defineProperties, Gg = Object.getOwnPropertyDescriptor, Yg = Object.getOwnPropertyDescriptors, lo = Object.getOwnPropertySymbols, Xg = Object.prototype.hasOwnProperty, Zg = Object.prototype.propertyIsEnumerable, Jg = (e, a) => (a = Symbol[e]) ? a : /* @__PURE__ */ Symbol.for("Symbol." + e), Ia = (e) => {
  throw TypeError(e);
}, an = (e, a, t) => a in e ? zn(e, a, { enumerable: true, configurable: true, writable: true, value: t }) : e[a] = t, Qg = (e, a) => {
  for (var t in a || (a = {})) Xg.call(a, t) && an(e, t, a[t]);
  if (lo) for (var t of lo(a)) Zg.call(a, t) && an(e, t, a[t]);
  return e;
}, eD = (e, a) => Bg(e, Yg(a)), so = (e, a) => zn(e, "name", { value: a, configurable: true }), aD = (e) => {
  var a;
  return [, , , Hg((a = void 0) != null ? a : null)];
}, al = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], ja = (e) => e !== void 0 && typeof e != "function" ? Ia("Function expected") : e, tD = (e, a, t, r, n) => ({ kind: al[e], name: a, metadata: r, addInitializer: (i) => t._ ? Ia("Already initialized") : n.push(ja(i || null)) }), tl = (e, a) => an(a, Jg("metadata"), e[3]), Fe = (e, a, t, r) => {
  for (var n = 0, i = e[a >> 1], o = i && i.length; n < o; n++) a & 1 ? i[n].call(t) : r = i[n].call(t, r);
  return r;
}, Aa = (e, a, t, r, n, i) => {
  var o, l, s, D, p, g = a & 7, c = !!(a & 8), d = !!(a & 16), m = g > 3 ? e.length + 1 : g ? c ? 1 : 2 : 0, P = al[g + 5], y = g > 3 && (e[m - 1] = []), v = e[m] || (e[m] = []), u = g && (!d && !c && (n = n.prototype), g < 5 && (g > 3 || !d) && Gg(g < 4 ? n : { get [t]() {
    return se(this, i);
  }, set [t](f) {
    return Re(this, i, f);
  } }, t));
  g ? d && g < 4 && so(i, (g > 2 ? "set " : g > 1 ? "get " : "") + t) : so(n, t);
  for (var h = r.length - 1; h >= 0; h--) D = tD(g, t, s = {}, e[3], v), g && (D.static = c, D.private = d, p = D.access = { has: d ? (f) => rD(n, f) : (f) => t in f }, g ^ 3 && (p.get = d ? (f) => (g ^ 1 ? se : nD)(f, n, g ^ 4 ? i : u.get) : (f) => f[t]), g > 2 && (p.set = d ? (f, b) => Re(f, n, b, g ^ 4 ? i : u.set) : (f, b) => f[t] = b)), l = (0, r[h])(g ? g < 4 ? d ? i : u[P] : g > 4 ? void 0 : { get: u.get, set: u.set } : n, D), s._ = 1, g ^ 4 || l === void 0 ? ja(l) && (g > 4 ? y.unshift(l) : g ? d ? i = l : u[P] = l : n = l) : typeof l != "object" || l === null ? Ia("Object expected") : (ja(o = l.get) && (u.get = o), ja(o = l.set) && (u.set = o), ja(o = l.init) && y.unshift(o));
  return g || tl(e, n), u && zn(n, t, u), d ? g ^ 4 ? i : u : n;
}, $n = (e, a, t) => a.has(e) || Ia("Cannot " + t), rD = (e, a) => Object(a) !== a ? Ia('Cannot use the "in" operator on this value') : e.has(a), se = (e, a, t) => ($n(e, a, "read from private field"), t ? t.call(e) : a.get(e)), Fa = (e, a, t) => a.has(e) ? Ia("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(e) : a.set(e, t), Re = (e, a, t, r) => ($n(e, a, "write to private field"), r ? r.call(e, t) : a.set(e, t), t), nD = (e, a, t) => ($n(e, a, "access private method"), t);
function tn(e, a) {
  if (a) {
    let t;
    return oo(() => {
      const r = e();
      return r && t && a(t, r) ? t : (t = r, r);
    });
  }
  return oo(e);
}
function rn(e, a) {
  if (Object.is(e, a)) return true;
  if (e === null || a === null) return false;
  if (typeof e == "function" && typeof a == "function") return e === a;
  if (e instanceof Set && a instanceof Set) {
    if (e.size !== a.size) return false;
    for (const t of e) if (!a.has(t)) return false;
    return true;
  }
  if (Array.isArray(e)) return !Array.isArray(a) || e.length !== a.length ? false : !e.some((r, n) => !rn(r, a[n]));
  if (typeof e == "object" && typeof a == "object") {
    const t = Object.keys(e), r = Object.keys(a);
    return t.length !== r.length ? false : !t.some((i) => !rn(e[i], a[i]));
  }
  return false;
}
function E({ get: e }, a) {
  return { init(t) {
    return ra(t);
  }, get() {
    return e.call(this).value;
  }, set(t) {
    const r = e.call(this);
    r.peek() !== t && (r.value = t);
  } };
}
function F(e, a) {
  const t = /* @__PURE__ */ new WeakMap();
  return function() {
    let r = t.get(this);
    return r || (r = tn(e.bind(this)), t.set(this, r)), r.value;
  };
}
function $r(e = true) {
  return function(a, t) {
    t.addInitializer(function() {
      const r = t.kind === "field" ? this : t.static ? this : Object.getPrototypeOf(this), n = Object.getOwnPropertyDescriptor(r, t.name);
      n && Object.defineProperty(r, t.name, eD(Qg({}, n), { enumerable: e }));
    });
  };
}
function Ot(...e) {
  const a = e.map((t) => ie(t));
  return () => a.forEach((t) => t());
}
var rl, nl, il, ol, ll, sl, X, Vn, Vr, nn, on, Y, Un, Ur, gl, ln, jn, jr, sn, gn;
sl = [E], ll = [E], ol = [E], il = [$r()], nl = [$r()], rl = [$r()];
var Sa = class {
  constructor(e, a = Object.is) {
    this.defaultValue = e, this.equals = a, Fe(X, 5, this), Fa(this, Y), Fa(this, Vn, Fe(X, 8, this)), Fe(X, 11, this), Fa(this, Un, Fe(X, 12, this)), Fe(X, 15, this), Fa(this, jn, Fe(X, 16, this)), Fe(X, 19, this), this.reset = this.reset.bind(this), this.reset();
  }
  get current() {
    return se(this, Y, sn);
  }
  get initial() {
    return se(this, Y, nn);
  }
  get previous() {
    return se(this, Y, gl);
  }
  set current(e) {
    const a = _(() => se(this, Y, sn));
    e && a && this.equals(a, e) || z(() => {
      se(this, Y, nn) || Re(this, Y, e, on), Re(this, Y, a, ln), Re(this, Y, e, gn);
    });
  }
  reset(e = this.defaultValue) {
    z(() => {
      Re(this, Y, void 0, ln), Re(this, Y, e, on), Re(this, Y, e, gn);
    });
  }
};
X = aD();
Vn = /* @__PURE__ */ new WeakMap();
Y = /* @__PURE__ */ new WeakSet();
Un = /* @__PURE__ */ new WeakMap();
jn = /* @__PURE__ */ new WeakMap();
Vr = Aa(X, 20, "#initial", sl, Y, Vn), nn = Vr.get, on = Vr.set;
Ur = Aa(X, 20, "#previous", ll, Y, Un), gl = Ur.get, ln = Ur.set;
jr = Aa(X, 20, "#current", ol, Y, jn), sn = jr.get, gn = jr.set;
Aa(X, 2, "current", il, Sa);
Aa(X, 2, "initial", nl, Sa);
Aa(X, 2, "previous", rl, Sa);
tl(X, Sa);
function Fr(e) {
  return _(() => {
    const a = {};
    for (const t in e) a[t] = e[t];
    return a;
  });
}
var He, iD = class {
  constructor() {
    Fa(this, He, /* @__PURE__ */ new WeakMap());
  }
  get(e, a) {
    var t;
    return e ? (t = se(this, He).get(e)) == null ? void 0 : t.get(a) : void 0;
  }
  set(e, a, t) {
    var r;
    if (e) return se(this, He).has(e) || se(this, He).set(e, /* @__PURE__ */ new Map()), (r = se(this, He).get(e)) == null ? void 0 : r.set(a, t);
  }
  clear(e) {
    var a;
    return e ? (a = se(this, He).get(e)) == null ? void 0 : a.clear() : void 0;
  }
};
He = /* @__PURE__ */ new WeakMap();
var oD = Object.create, Dl = Object.defineProperty, lD = Object.getOwnPropertyDescriptor, go = Object.getOwnPropertySymbols, sD = Object.prototype.hasOwnProperty, gD = Object.prototype.propertyIsEnumerable, pl = (e, a) => (a = Symbol[e]) ? a : /* @__PURE__ */ Symbol.for("Symbol." + e), Or = (e) => {
  throw TypeError(e);
}, Do = Math.pow, Dn = (e, a, t) => a in e ? Dl(e, a, { enumerable: true, configurable: true, writable: true, value: t }) : e[a] = t, DD = (e, a) => {
  for (var t in a || (a = {})) sD.call(a, t) && Dn(e, t, a[t]);
  if (go) for (var t of go(a)) gD.call(a, t) && Dn(e, t, a[t]);
  return e;
}, pD = (e) => {
  var a;
  return [, , , oD((a = e?.[pl("metadata")]) != null ? a : null)];
}, ul = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], cl = (e) => e !== void 0 && typeof e != "function" ? Or("Function expected") : e, uD = (e, a, t, r, n) => ({ kind: ul[e], name: a, metadata: r, addInitializer: (i) => t._ ? Or("Already initialized") : n.push(cl(i || null)) }), cD = (e, a) => Dn(a, pl("metadata"), e[3]), dD = (e, a, t, r) => {
  for (var n = 0, i = e[a >> 1], o = i && i.length; n < o; n++) i[n].call(t);
  return r;
}, dl = (e, a, t, r, n, i) => {
  for (var o, l, s, D, p = a & 7, g = false, c = false, d = 2, m = ul[p + 5], P = e[d] || (e[d] = []), y = (n = n.prototype, lD(n, t)), v = r.length - 1; v >= 0; v--) s = uD(p, t, l = {}, e[3], P), s.static = g, s.private = c, D = s.access = { has: (u) => t in u }, D.get = (u) => u[t], o = (0, r[v])(y[m], s), l._ = 1, cl(o) && (y[m] = o);
  return y && Dl(n, t, y), n;
}, hl = (e, a, t) => a.has(e) || Or("Cannot " + t), hD = (e, a, t) => (hl(e, a, "read from private field"), a.get(e)), bD = (e, a, t) => a.has(e) ? Or("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(e) : a.set(e, t), fD = (e, a, t, r) => (hl(e, a, "write to private field"), a.set(e, t), t), ge = class pn {
  constructor(a, t) {
    this.x = a, this.y = t;
  }
  static delta(a, t) {
    return new pn(a.x - t.x, a.y - t.y);
  }
  static distance(a, t) {
    return Math.hypot(a.x - t.x, a.y - t.y);
  }
  static equals(a, t) {
    return a.x === t.x && a.y === t.y;
  }
  static from({ x: a, y: t }) {
    return new pn(a, t);
  }
}, de = class Be {
  constructor(a, t, r, n) {
    this.left = a, this.top = t, this.width = r, this.height = n, this.scale = { x: 1, y: 1 };
  }
  get inverseScale() {
    return { x: 1 / this.scale.x, y: 1 / this.scale.y };
  }
  translate(a, t) {
    const { top: r, left: n, width: i, height: o, scale: l } = this, s = new Be(n + a, r + t, i, o);
    return s.scale = DD({}, l), s;
  }
  get boundingRectangle() {
    const { width: a, height: t, left: r, top: n, right: i, bottom: o } = this;
    return { width: a, height: t, left: r, top: n, right: i, bottom: o };
  }
  get center() {
    const { left: a, top: t, right: r, bottom: n } = this;
    return new ge((a + r) / 2, (t + n) / 2);
  }
  get area() {
    const { width: a, height: t } = this;
    return a * t;
  }
  equals(a) {
    if (!(a instanceof Be)) return false;
    const { left: t, top: r, width: n, height: i } = this;
    return t === a.left && r === a.top && n === a.width && i === a.height;
  }
  containsPoint(a) {
    const { top: t, left: r, bottom: n, right: i } = this;
    return t <= a.y && a.y <= n && r <= a.x && a.x <= i;
  }
  intersectionArea(a) {
    return a instanceof Be ? mD(this, a) : 0;
  }
  intersectionRatio(a) {
    const { area: t } = this, r = this.intersectionArea(a);
    return r / (a.area + t - r);
  }
  get bottom() {
    const { top: a, height: t } = this;
    return a + t;
  }
  get right() {
    const { left: a, width: t } = this;
    return a + t;
  }
  get aspectRatio() {
    const { width: a, height: t } = this;
    return a / t;
  }
  get corners() {
    return [{ x: this.left, y: this.top }, { x: this.right, y: this.top }, { x: this.left, y: this.bottom }, { x: this.right, y: this.bottom }];
  }
  static from({ top: a, left: t, width: r, height: n }) {
    return new Be(t, a, r, n);
  }
  static delta(a, t, r = { x: "center", y: "center" }) {
    const n = (i, o) => {
      const l = r[o], s = o === "x" ? i.left : i.top, D = o === "x" ? i.width : i.height;
      return l == "start" ? s : l == "end" ? s + D : s + D / 2;
    };
    return ge.delta({ x: n(a, "x"), y: n(a, "y") }, { x: n(t, "x"), y: n(t, "y") });
  }
  static intersectionRatio(a, t) {
    return Be.from(a).intersectionRatio(Be.from(t));
  }
};
function mD(e, a) {
  const t = Math.max(a.top, e.top), r = Math.max(a.left, e.left), n = Math.min(a.left + a.width, e.left + e.width), i = Math.min(a.top + a.height, e.top + e.height), o = n - r, l = i - t;
  return r < n && t < i ? o * l : 0;
}
var bl, fl, un, Ft, xt, xr = class extends (un = Sa, fl = [F], bl = [F], un) {
  constructor(e) {
    const a = ge.from(e);
    super(a, (t, r) => ge.equals(t, r)), dD(xt, 5, this), bD(this, Ft, 0), this.velocity = { x: 0, y: 0 };
  }
  get delta() {
    return ge.delta(this.current, this.initial);
  }
  get direction() {
    const { current: e, previous: a } = this;
    if (!a) return null;
    const t = { x: e.x - a.x, y: e.y - a.y };
    return !t.x && !t.y ? null : Math.abs(t.x) > Math.abs(t.y) ? t.x > 0 ? "right" : "left" : t.y > 0 ? "down" : "up";
  }
  get current() {
    return super.current;
  }
  set current(e) {
    const { current: a } = this, t = ge.from(e), r = { x: t.x - a.x, y: t.y - a.y }, n = Date.now(), i = n - hD(this, Ft), o = (l) => Math.round(l / i * 100);
    z(() => {
      fD(this, Ft, n), this.velocity = { x: o(r.x), y: o(r.y) }, super.current = t;
    });
  }
  reset(e = this.defaultValue) {
    super.reset(ge.from(e)), this.velocity = { x: 0, y: 0 };
  }
};
xt = pD(un);
Ft = /* @__PURE__ */ new WeakMap();
dl(xt, 2, "delta", fl, xr);
dl(xt, 2, "direction", bl, xr);
cD(xt, xr);
function cn({ x: e, y: a }, t) {
  const r = Math.abs(e), n = Math.abs(a);
  return typeof t == "number" ? Math.sqrt(Do(r, 2) + Do(n, 2)) > t : "x" in t && "y" in t ? r > t.x && n > t.y : "x" in t ? r > t.x : "y" in t ? n > t.y : false;
}
var ml = ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(ml || {}), Pl = Object.values(ml), PD = Object.create, Fn = Object.defineProperty, vD = Object.defineProperties, yD = Object.getOwnPropertyDescriptor, MD = Object.getOwnPropertyDescriptors, lr = Object.getOwnPropertySymbols, vl = Object.prototype.hasOwnProperty, yl = Object.prototype.propertyIsEnumerable, Ml = (e, a) => (a = Symbol[e]) ? a : /* @__PURE__ */ Symbol.for("Symbol." + e), Na = (e) => {
  throw TypeError(e);
}, dn = (e, a, t) => a in e ? Fn(e, a, { enumerable: true, configurable: true, writable: true, value: t }) : e[a] = t, Kn = (e, a) => {
  for (var t in a || (a = {})) vl.call(a, t) && dn(e, t, a[t]);
  if (lr) for (var t of lr(a)) yl.call(a, t) && dn(e, t, a[t]);
  return e;
}, Hn = (e, a) => vD(e, MD(a)), po = (e, a) => Fn(e, "name", { value: a, configurable: true }), Ol = (e, a) => {
  var t = {};
  for (var r in e) vl.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && lr) for (var r of lr(e)) a.indexOf(r) < 0 && yl.call(e, r) && (t[r] = e[r]);
  return t;
}, Ra = (e) => {
  var a;
  return [, , , PD((a = e?.[Ml("metadata")]) != null ? a : null)];
}, xl = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Ka = (e) => e !== void 0 && typeof e != "function" ? Na("Function expected") : e, OD = (e, a, t, r, n) => ({ kind: xl[e], name: a, metadata: r, addInitializer: (i) => t._ ? Na("Already initialized") : n.push(Ka(i || null)) }), ia = (e, a) => dn(a, Ml("metadata"), e[3]), x = (e, a, t, r) => {
  for (var n = 0, i = e[a >> 1], o = i && i.length; n < o; n++) a & 1 ? i[n].call(t) : r = i[n].call(t, r);
  return r;
}, C = (e, a, t, r, n, i) => {
  var o, l, s, D, p, g = a & 7, c = !!(a & 8), d = !!(a & 16), m = g > 3 ? e.length + 1 : g ? c ? 1 : 2 : 0, P = xl[g + 5], y = g > 3 && (e[m - 1] = []), v = e[m] || (e[m] = []), u = g && (!d && !c && (n = n.prototype), g < 5 && (g > 3 || !d) && yD(g < 4 ? n : { get [t]() {
    return $(this, i);
  }, set [t](f) {
    return ne(this, i, f);
  } }, t));
  g ? d && g < 4 && po(i, (g > 2 ? "set " : g > 1 ? "get " : "") + t) : po(n, t);
  for (var h = r.length - 1; h >= 0; h--) D = OD(g, t, s = {}, e[3], v), g && (D.static = c, D.private = d, p = D.access = { has: d ? (f) => xD(n, f) : (f) => t in f }, g ^ 3 && (p.get = d ? (f) => (g ^ 1 ? $ : Tl)(f, n, g ^ 4 ? i : u.get) : (f) => f[t]), g > 2 && (p.set = d ? (f, b) => ne(f, n, b, g ^ 4 ? i : u.set) : (f, b) => f[t] = b)), l = (0, r[h])(g ? g < 4 ? d ? i : u[P] : g > 4 ? void 0 : { get: u.get, set: u.set } : n, D), s._ = 1, g ^ 4 || l === void 0 ? Ka(l) && (g > 4 ? y.unshift(l) : g ? d ? i = l : u[P] = l : n = l) : typeof l != "object" || l === null ? Na("Object expected") : (Ka(o = l.get) && (u.get = o), Ka(o = l.set) && (u.set = o), Ka(o = l.init) && y.unshift(o));
  return g || ia(e, n), u && Fn(n, t, u), d ? g ^ 4 ? i : u : n;
}, Bn = (e, a, t) => a.has(e) || Na("Cannot " + t), xD = (e, a) => Object(a) !== a ? Na('Cannot use the "in" operator on this value') : e.has(a), $ = (e, a, t) => (Bn(e, a, "read from private field"), t ? t.call(e) : a.get(e)), I = (e, a, t) => a.has(e) ? Na("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(e) : a.set(e, t), ne = (e, a, t, r) => (Bn(e, a, "write to private field"), r ? r.call(e, t) : a.set(e, t), t), Tl = (e, a, t) => (Bn(e, a, "access private method"), t);
function wl(e, a) {
  return { plugin: e, options: a };
}
function Ve(e) {
  return (a) => wl(e, a);
}
function dt(e) {
  return typeof e == "function" ? { plugin: e, options: void 0 } : e;
}
var _l, ht, Gn, Kt;
_l = [E];
var G = class {
  constructor(e, a) {
    this.manager = e, this.options = a, I(this, Gn, x(ht, 8, this, false)), x(ht, 11, this), I(this, Kt, /* @__PURE__ */ new Set());
  }
  enable() {
    this.disabled = false;
  }
  disable() {
    this.disabled = true;
  }
  isDisabled() {
    return _(() => this.disabled);
  }
  configure(e) {
    this.options = e;
  }
  registerEffect(e) {
    const a = ie(e.bind(this));
    return $(this, Kt).add(a), a;
  }
  destroy() {
    $(this, Kt).forEach((e) => e());
  }
  static configure(e) {
    return wl(this, e);
  }
};
ht = Ra(null);
Gn = /* @__PURE__ */ new WeakMap();
Kt = /* @__PURE__ */ new WeakMap();
C(ht, 4, "disabled", _l, G, Gn);
ia(ht, G);
var Tt = class extends G {
}, Ht, Kr = class {
  constructor(e) {
    this.manager = e, this.instances = /* @__PURE__ */ new Map(), I(this, Ht, []);
  }
  get values() {
    return Array.from(this.instances.values());
  }
  set values(e) {
    const a = e.map(dt).reduce((r, n) => {
      const i = r.find(({ plugin: o }) => o === n.plugin);
      return i ? (i.options = n.options, r) : [...r, n];
    }, []), t = a.map(({ plugin: r }) => r);
    for (const r of $(this, Ht)) if (!t.includes(r)) {
      if (r.prototype instanceof Tt) continue;
      this.unregister(r);
    }
    for (const { plugin: r, options: n } of a) this.register(r, n);
    ne(this, Ht, t);
  }
  get(e) {
    return this.instances.get(e);
  }
  register(e, a) {
    const t = this.instances.get(e);
    if (t) return t.options !== a && (t.options = a), t;
    const r = new e(this.manager, a);
    return this.instances.set(e, r), r;
  }
  unregister(e) {
    const a = this.instances.get(e);
    a && (a.destroy(), this.instances.delete(e));
  }
  destroy() {
    for (const e of this.instances.values()) e.destroy();
    this.instances.clear();
  }
};
Ht = /* @__PURE__ */ new WeakMap();
function TD(e, a) {
  return e.priority === a.priority ? e.type === a.type ? a.value - e.value : a.type - e.type : a.priority - e.priority;
}
var Rt = [], ca, da, wD = class extends G {
  constructor(e) {
    super(e), I(this, ca), I(this, da), this.computeCollisions = this.computeCollisions.bind(this), ne(this, da, ra(Rt)), this.destroy = Ot(() => {
      const a = this.computeCollisions(), t = _(() => this.manager.dragOperation.position.current);
      if (a !== Rt) {
        const r = $(this, ca);
        if (ne(this, ca, t), r && t.x == r.x && t.y == r.y) return;
      } else ne(this, ca, void 0);
      $(this, da).value = a;
    }, () => {
      const { dragOperation: a } = this.manager;
      a.status.initialized && this.forceUpdate();
    });
  }
  forceUpdate(e = true) {
    _(() => {
      e ? $(this, da).value = this.computeCollisions() : ne(this, ca, void 0);
    });
  }
  computeCollisions(e, a) {
    const { registry: t, dragOperation: r } = this.manager, { source: n, shape: i, status: o } = r;
    if (!o.initialized || !i) return Rt;
    const l = [], s = [];
    for (const D of e ?? t.droppables) {
      if (D.disabled || n && !D.accepts(n)) continue;
      const p = a ?? D.collisionDetector;
      if (!p) continue;
      s.push(D), D.shape;
      const g = _(() => p({ droppable: D, dragOperation: r }));
      g && (D.collisionPriority != null && (g.priority = D.collisionPriority), l.push(g));
    }
    return s.length === 0 ? Rt : (l.sort(TD), l);
  }
  get collisions() {
    return $(this, da).value;
  }
};
ca = /* @__PURE__ */ new WeakMap();
da = /* @__PURE__ */ new WeakMap();
var El, Cl, Il, Yn, Al, ue, Xn, va, Zn, Jn;
Il = [E], Cl = [E], El = [E];
var we = class Ge {
  constructor(a, t) {
    I(this, Xn, x(ue, 8, this)), x(ue, 11, this), I(this, va), I(this, Zn, x(ue, 12, this)), x(ue, 15, this), I(this, Jn, x(ue, 16, this)), x(ue, 19, this);
    const { effects: r, id: n, data: i = {}, disabled: o = false, register: l = true } = a;
    let s = n;
    ne(this, va, ra(n)), this.manager = t, this.data = i, this.disabled = o, this.effects = () => {
      var D;
      return [() => {
        const { id: p, manager: g } = this;
        if (p !== s) return s = p, g?.registry.register(this), () => g?.registry.unregister(this);
      }, ...(D = r?.()) != null ? D : []];
    }, this.register = this.register.bind(this), this.unregister = this.unregister.bind(this), this.destroy = this.destroy.bind(this), t && l && queueMicrotask(this.register);
  }
  get id() {
    var a, t;
    const r = $(this, va).value;
    return (t = (a = Ge.pendingIdChanges) == null ? void 0 : a.get(this)) != null ? t : r;
  }
  set id(a) {
    var t, r;
    const n = (r = (t = Ge.pendingIdChanges) == null ? void 0 : t.get(this)) != null ? r : $(this, va).peek();
    a !== n && (Ge.pendingIdChanges || (Ge.pendingIdChanges = /* @__PURE__ */ new Map(), queueMicrotask(() => {
      var i;
      return Tl(i = Ge, Yn, Al).call(i);
    })), Ge.pendingIdChanges.set(this, a));
  }
  register() {
    var a;
    return (a = this.manager) == null ? void 0 : a.registry.register(this);
  }
  unregister() {
    var a;
    (a = this.manager) == null || a.registry.unregister(this);
  }
  destroy() {
    var a;
    (a = this.manager) == null || a.registry.unregister(this);
  }
};
ue = Ra(null);
Yn = /* @__PURE__ */ new WeakSet();
Al = function() {
  const e = we.pendingIdChanges;
  we.pendingIdChanges = null, e && z(() => {
    for (const [a, t] of e) $(a, va).value = t;
  });
};
Xn = /* @__PURE__ */ new WeakMap();
va = /* @__PURE__ */ new WeakMap();
Zn = /* @__PURE__ */ new WeakMap();
Jn = /* @__PURE__ */ new WeakMap();
C(ue, 4, "manager", Il, we, Xn);
C(ue, 4, "data", Cl, we, Zn);
C(ue, 4, "disabled", El, we, Jn);
I(we, Yn);
ia(ue, we);
we.pendingIdChanges = null;
var Tr = we, uo = class {
  constructor() {
    this.map = ra(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, a) => {
      const t = this.map.peek(), r = t.get(e), n = () => this.unregister(e, a);
      if (r === a) return n;
      if (r && r.id === e) {
        const l = this.cleanupFunctions.get(r);
        l?.(), this.cleanupFunctions.delete(r);
      }
      const i = new Map(t);
      for (const [l, s] of t) if (s === a && l !== e) {
        i.delete(l);
        break;
      }
      i.set(e, a), this.map.value = i;
      const o = Ot(...a.effects());
      return this.cleanupFunctions.set(a, o), n;
    }, this.unregister = (e, a) => {
      const t = this.map.peek();
      if (t.get(e) !== a) return;
      const r = this.cleanupFunctions.get(a);
      r?.(), this.cleanupFunctions.delete(a);
      const n = new Map(t);
      n.delete(e), this.map.value = n;
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
      const a = this.cleanupFunctions.get(e);
      a?.(), e.destroy();
    }
    this.map.value = /* @__PURE__ */ new Map();
  }
}, Sl, Nl, Rl, kl, ql, Ll, hn, Z, Qn, ei, ai, Pe = class extends (hn = Tr, Ll = [E], ql = [E], kl = [E], Rl = [F], Nl = [F], Sl = [F], hn) {
  constructor(a, t) {
    var r = a, { modifiers: n, type: i, sensors: o, plugins: l, effects: s } = r, D = Ol(r, ["modifiers", "type", "sensors", "plugins", "effects"]);
    super(Hn(Kn({}, D), { effects: () => {
      var p;
      return [...(p = s?.()) != null ? p : [], () => {
        const { manager: g, plugins: c } = this;
        if (!(!g || !c)) for (const d of c) {
          const { plugin: m } = dt(d);
          g.registry.plugins.register(m);
        }
      }];
    } }), t), x(Z, 5, this), I(this, Qn, x(Z, 8, this)), x(Z, 11, this), I(this, ei, x(Z, 12, this)), x(Z, 15, this), I(this, ai, x(Z, 16, this, this.isDragSource ? "dragging" : "idle")), x(Z, 19, this), this.type = i, this.sensors = o, this.modifiers = n, this.alignment = D.alignment, this.plugins = l;
  }
  pluginConfig(a) {
    if (this.plugins) for (const t of this.plugins) {
      const r = dt(t);
      if (r.plugin === a) return r.options;
    }
  }
  get isDropping() {
    return this.status === "dropping" && this.isDragSource;
  }
  get isDragging() {
    return this.status === "dragging" && this.isDragSource;
  }
  get isDragSource() {
    var a, t;
    return ((t = (a = this.manager) == null ? void 0 : a.dragOperation.source) == null ? void 0 : t.id) === this.id;
  }
};
Z = Ra(hn);
Qn = /* @__PURE__ */ new WeakMap();
ei = /* @__PURE__ */ new WeakMap();
ai = /* @__PURE__ */ new WeakMap();
C(Z, 4, "type", Ll, Pe, Qn);
C(Z, 4, "modifiers", ql, Pe, ei);
C(Z, 4, "status", kl, Pe, ai);
C(Z, 2, "isDropping", Rl, Pe);
C(Z, 2, "isDragging", Nl, Pe);
C(Z, 2, "isDragSource", Sl, Pe);
ia(Z, Pe);
var Wl, zl, $l, Vl, Ul, jl, bn, j, ti, ri, ni, ii, oi, ve = class extends (bn = Tr, jl = [E], Ul = [E], Vl = [E], $l = [E], zl = [E], Wl = [F], bn) {
  constructor(a, t) {
    var r = a, { accept: n, collisionDetector: i, collisionPriority: o, type: l } = r, s = Ol(r, ["accept", "collisionDetector", "collisionPriority", "type"]);
    super(s, t), x(j, 5, this), I(this, ti, x(j, 8, this)), x(j, 11, this), I(this, ri, x(j, 12, this)), x(j, 15, this), I(this, ni, x(j, 16, this)), x(j, 19, this), I(this, ii, x(j, 20, this)), x(j, 23, this), I(this, oi, x(j, 24, this)), x(j, 27, this), this.accept = n, this.collisionDetector = i, this.collisionPriority = o, this.type = l;
  }
  accepts(a) {
    const { accept: t } = this;
    return t ? typeof t == "function" ? t(a) : a.type ? Array.isArray(t) ? t.includes(a.type) : a.type === t : false : true;
  }
  get isDropTarget() {
    var a, t;
    return ((t = (a = this.manager) == null ? void 0 : a.dragOperation.target) == null ? void 0 : t.id) === this.id;
  }
};
j = Ra(bn);
ti = /* @__PURE__ */ new WeakMap();
ri = /* @__PURE__ */ new WeakMap();
ni = /* @__PURE__ */ new WeakMap();
ii = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
C(j, 4, "accept", jl, ve, ti);
C(j, 4, "type", Ul, ve, ri);
C(j, 4, "collisionDetector", Vl, ve, ni);
C(j, 4, "collisionPriority", $l, ve, ii);
C(j, 4, "shape", zl, ve, oi);
C(j, 2, "isDropTarget", Wl, ve);
ia(j, ve);
var _D = class {
  constructor() {
    this.registry = /* @__PURE__ */ new Map();
  }
  addEventListener(e, a) {
    const { registry: t } = this, r = new Set(t.get(e));
    return r.add(a), t.set(e, r), () => this.removeEventListener(e, a);
  }
  removeEventListener(e, a) {
    const { registry: t } = this, r = new Set(t.get(e));
    r.delete(a), t.set(e, r);
  }
  dispatch(e, ...a) {
    const { registry: t } = this, r = t.get(e);
    if (r) for (const n of r) n(...a);
  }
}, ED = class extends _D {
  constructor(e) {
    super(), this.manager = e;
  }
  dispatch(e, a) {
    const t = [a, this.manager];
    super.dispatch(e, ...t);
  }
};
function Bt(e, a = true) {
  let t = false;
  return Hn(Kn({}, e), { cancelable: a, get defaultPrevented() {
    return t;
  }, preventDefault() {
    a && (t = true);
  } });
}
var CD = class extends Tt {
  constructor(e) {
    super(e);
    const a = (r, n) => r.map(({ id: i }) => i).join("") === n.map(({ id: i }) => i).join("");
    let t = [];
    this.destroy = Ot(() => {
      const { dragOperation: r, collisionObserver: n } = e;
      r.status.initializing && (t = [], n.enable());
    }, () => {
      const { collisionObserver: r, monitor: n } = e, { collisions: i } = r;
      if (r.isDisabled() || Tr.pendingIdChanges) return;
      const o = Bt({ collisions: i });
      if (n.dispatch("collision", o), o.defaultPrevented || a(i, t)) return;
      t = i;
      const [l] = i;
      _(() => {
        var s;
        l?.id !== ((s = e.dragOperation.target) == null ? void 0 : s.id) && (r.disable(), e.actions.setDropTarget(l?.id).then(() => {
          r.enable();
        }));
      });
    });
  }
}, wr = ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(wr || {}), _r = ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(_r || {}), Fl, Kl, Hl, Bl, Gl, Yl, Xl, De, li;
Xl = [E], Yl = [F], Gl = [F], Bl = [F], Hl = [F], Kl = [F], Fl = [F];
var Ee = class {
  constructor() {
    x(De, 5, this), I(this, li, x(De, 8, this, "idle")), x(De, 11, this);
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
De = Ra(null);
li = /* @__PURE__ */ new WeakMap();
C(De, 4, "value", Xl, Ee, li);
C(De, 2, "current", Yl, Ee);
C(De, 2, "idle", Gl, Ee);
C(De, 2, "initializing", Bl, Ee);
C(De, 2, "initialized", Hl, Ee);
C(De, 2, "dragging", Kl, Ee);
C(De, 2, "dropped", Fl, Ee);
ia(De, Ee);
var ID = class {
  constructor(e) {
    this.manager = e;
  }
  setDragSource(e) {
    const { dragOperation: a } = this.manager;
    a.sourceIdentifier = typeof e == "string" || typeof e == "number" ? e : e.id;
  }
  setDropTarget(e) {
    return _(() => {
      const { dragOperation: a } = this.manager, t = e ?? null;
      if (a.targetIdentifier === t) return Promise.resolve(false);
      a.targetIdentifier = t;
      const r = Bt({ operation: a.snapshot() });
      return a.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
    });
  }
  start(e) {
    return _(() => {
      const { dragOperation: a } = this.manager;
      if (e.source != null && this.setDragSource(e.source), !a.source) throw new Error("Cannot start a drag operation without a drag source");
      if (!a.status.idle) throw new Error("Cannot start a drag operation while another is active");
      const r = new AbortController(), { event: n, coordinates: i } = e;
      z(() => {
        a.status.set("initialization-pending"), a.shape = null, a.canceled = false, a.activatorEvent = n ?? null, a.position.reset(i);
      });
      const o = Bt({ operation: a.snapshot() });
      return this.manager.monitor.dispatch("beforedragstart", o), o.defaultPrevented ? (a.reset(), r.abort(), r) : (a.status.set("initializing"), a.controller = r, this.manager.renderer.rendering.then(() => {
        if (r.signal.aborted) return;
        const { status: l } = a;
        l.current === "initializing" && z(() => {
          a.status.set("dragging"), this.manager.monitor.dispatch("dragstart", { nativeEvent: n, operation: a.snapshot(), cancelable: false });
        });
      }), r);
    });
  }
  move(e) {
    return _(() => {
      var a, t;
      const { dragOperation: r } = this.manager, { status: n, controller: i } = r;
      if (!n.dragging || !i || i.signal.aborted) return;
      const o = Bt({ nativeEvent: e.event, operation: r.snapshot(), by: e.by, to: e.to }, (a = e.cancelable) != null ? a : true);
      ((t = e.propagate) == null || t) && this.manager.monitor.dispatch("dragmove", o), queueMicrotask(() => {
        var l, s, D, p, g;
        if (o.defaultPrevented) return;
        const c = (g = e.to) != null ? g : { x: r.position.current.x + ((s = (l = e.by) == null ? void 0 : l.x) != null ? s : 0), y: r.position.current.y + ((p = (D = e.by) == null ? void 0 : D.y) != null ? p : 0) };
        r.position.current = c;
      });
    });
  }
  stop(e = {}) {
    return _(() => {
      var a, t;
      const { dragOperation: r } = this.manager, { controller: n } = r;
      if (!n || n.signal.aborted) return;
      let i;
      const o = () => {
        const s = { resume: () => {
        }, abort: () => {
        } };
        return i = new Promise((D, p) => {
          s.resume = D, s.abort = p;
        }), s;
      };
      n.abort();
      const l = () => {
        this.manager.renderer.rendering.then(() => {
          r.status.set("dropped");
          const s = _(() => {
            var p;
            return ((p = r.source) == null ? void 0 : p.status) === "dropping";
          }), D = () => {
            r.controller === n && (r.controller = void 0), r.reset();
          };
          if (s) {
            const { source: p } = r, g = ie(() => {
              p?.status === "idle" && (g(), D());
            });
          } else this.manager.renderer.rendering.then(D);
        });
      };
      r.canceled = (a = e.canceled) != null ? a : false, this.manager.monitor.dispatch("dragend", { nativeEvent: e.event, operation: r.snapshot(), canceled: (t = e.canceled) != null ? t : false, suspend: o }), i ? i.then(l).catch(() => r.reset()) : l();
    });
  }
}, Oa = class extends G {
  constructor(e, a) {
    super(e, a), this.manager = e, this.options = a;
  }
}, AD = class extends AbortController {
  constructor(e, a) {
    super(), this.constraints = e, this.onActivate = a, this.activated = false;
    for (const t of e ?? []) t.controller = this;
  }
  onEvent(e) {
    var a;
    if (!this.activated) if ((a = this.constraints) != null && a.length) for (const t of this.constraints) t.onEvent(e);
    else this.activate(e);
  }
  activate(e) {
    this.activated || (this.activated = true, this.onActivate(e));
  }
  abort(e) {
    this.activated = false, super.abort(e);
  }
}, Gt, Zl = class {
  constructor(e) {
    this.options = e, I(this, Gt);
  }
  set controller(e) {
    ne(this, Gt, e), e.signal.addEventListener("abort", () => this.abort());
  }
  activate(e) {
    var a;
    (a = $(this, Gt)) == null || a.activate(e);
  }
};
Gt = /* @__PURE__ */ new WeakMap();
var bt = class extends G {
  constructor(e, a) {
    super(e, a), this.manager = e, this.options = a;
  }
  apply(e) {
    return e.transform;
  }
}, SD = class {
  constructor(e) {
    this.draggables = new uo(), this.droppables = new uo(), this.plugins = new Kr(e), this.sensors = new Kr(e), this.modifiers = new Kr(e);
  }
  register(e, a) {
    if (e instanceof Pe) return this.draggables.register(e.id, e);
    if (e instanceof ve) return this.droppables.register(e.id, e);
    if (e.prototype instanceof bt) return this.modifiers.register(e, a);
    if (e.prototype instanceof Oa) return this.sensors.register(e, a);
    if (e.prototype instanceof G) return this.plugins.register(e, a);
    throw new Error("Invalid instance type");
  }
  unregister(e) {
    if (e instanceof Tr) return e instanceof Pe ? this.draggables.unregister(e.id, e) : e instanceof ve ? this.droppables.unregister(e.id, e) : () => {
    };
    if (e.prototype instanceof bt) return this.modifiers.unregister(e);
    if (e.prototype instanceof Oa) return this.sensors.unregister(e);
    if (e.prototype instanceof G) return this.plugins.unregister(e);
    throw new Error("Invalid instance type");
  }
  destroy() {
    this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
  }
}, Jl, Ql, es, as, ts, rs, ns, is, os, Ha, Yt, ha, L, si, gi, Di, pi, ui, Ba;
os = [F], is = [E], ns = [E], rs = [E], ts = [E], as = [E], es = [F], Ql = [F], Jl = [F];
var he = class {
  constructor(e) {
    x(L, 5, this), I(this, Ha), I(this, Yt), I(this, ha, new Sa(void 0, (a, t) => a && t ? a.equals(t) : a === t)), this.status = new Ee(), I(this, si, x(L, 8, this, false)), x(L, 11, this), I(this, gi, x(L, 12, this, null)), x(L, 15, this), I(this, Di, x(L, 16, this, null)), x(L, 19, this), I(this, pi, x(L, 20, this, null)), x(L, 23, this), I(this, ui, x(L, 24, this, [])), x(L, 27, this), this.position = new xr({ x: 0, y: 0 }), I(this, Ba, { x: 0, y: 0 }), ne(this, Ha, e);
  }
  get shape() {
    const { current: e, initial: a, previous: t } = $(this, ha);
    return !e || !a ? null : { current: e, initial: a, previous: t };
  }
  set shape(e) {
    e ? $(this, ha).current = e : $(this, ha).reset();
  }
  get source() {
    var e;
    const a = this.sourceIdentifier;
    if (a == null) return null;
    const t = $(this, Ha).registry.draggables.get(a);
    return t && ne(this, Yt, t), (e = t ?? $(this, Yt)) != null ? e : null;
  }
  get target() {
    var e;
    const a = this.targetIdentifier;
    return a != null && (e = $(this, Ha).registry.droppables.get(a)) != null ? e : null;
  }
  get transform() {
    const { x: e, y: a } = this.position.delta;
    let t = { x: e, y: a };
    for (const r of this.modifiers) t = r.apply(Hn(Kn({}, this.snapshot()), { transform: t }));
    return ne(this, Ba, t), t;
  }
  snapshot() {
    return _(() => ({ source: this.source, target: this.target, activatorEvent: this.activatorEvent, transform: $(this, Ba), shape: this.shape ? Fr(this.shape) : null, position: Fr(this.position), status: Fr(this.status), canceled: this.canceled }));
  }
  reset() {
    z(() => {
      this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, $(this, ha).reset(), this.position.reset({ x: 0, y: 0 }), ne(this, Ba, { x: 0, y: 0 }), this.modifiers = [];
    });
  }
};
L = Ra(null);
Ha = /* @__PURE__ */ new WeakMap();
Yt = /* @__PURE__ */ new WeakMap();
ha = /* @__PURE__ */ new WeakMap();
si = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakMap();
Di = /* @__PURE__ */ new WeakMap();
pi = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakMap();
Ba = /* @__PURE__ */ new WeakMap();
C(L, 2, "shape", os, he);
C(L, 4, "canceled", is, he, si);
C(L, 4, "activatorEvent", ns, he, gi);
C(L, 4, "sourceIdentifier", rs, he, Di);
C(L, 4, "targetIdentifier", ts, he, pi);
C(L, 4, "modifiers", as, he, ui);
C(L, 2, "source", es, he);
C(L, 2, "target", Ql, he);
C(L, 2, "transform", Jl, he);
ia(L, he);
var ND = { get rendering() {
  return Promise.resolve();
} };
function ce(e, a) {
  return typeof e == "function" ? e(a) : e ?? a;
}
var RD = class {
  constructor(a) {
    this.destroy = () => {
      this.dragOperation.status.idle || this.actions.stop({ canceled: true }), this.dragOperation.modifiers.forEach((c) => c.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
    };
    var t;
    const r = a ?? {}, n = ce(r.plugins, []), i = ce(r.sensors, []), o = ce(r.modifiers, []), l = (t = r.renderer) != null ? t : ND, s = new ED(this), D = new SD(this);
    this.registry = D, this.monitor = s, this.renderer = l, this.actions = new ID(this), this.dragOperation = new he(this), this.collisionObserver = new wD(this), this.plugins = [CD, ...n], this.modifiers = o, this.sensors = i;
    const { destroy: p } = this, g = Ot(() => {
      var c, d, m;
      const P = _(() => this.dragOperation.modifiers), y = this.modifiers;
      for (const v of P) y.includes(v) || v.destroy();
      this.dragOperation.modifiers = (m = (d = (c = this.dragOperation.source) == null ? void 0 : c.modifiers) == null ? void 0 : d.map((v) => {
        const { plugin: u, options: h } = dt(v);
        return new u(this, h);
      })) != null ? m : y;
    });
    this.destroy = () => {
      g(), p();
    };
  }
  get plugins() {
    return this.registry.plugins.values;
  }
  set plugins(a) {
    this.registry.plugins.values = a;
  }
  get modifiers() {
    return this.registry.modifiers.values;
  }
  set modifiers(a) {
    this.registry.modifiers.values = a;
  }
  get sensors() {
    return this.registry.sensors.values;
  }
  set sensors(a) {
    this.registry.sensors.values = a;
  }
}, ls = (e) => {
  throw TypeError(e);
}, ci = (e, a, t) => a.has(e) || ls("Cannot " + t), O = (e, a, t) => (ci(e, a, "read from private field"), a.get(e)), ee = (e, a, t) => a.has(e) ? ls("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(e) : a.set(e, t), re = (e, a, t, r) => (ci(e, a, "write to private field"), a.set(e, t), t), ss = (e, a, t) => (ci(e, a, "access private method"), t);
function Er(e) {
  return e ? e instanceof KeyframeEffect ? true : "getKeyframes" in e && typeof e.getKeyframes == "function" : false;
}
function gs(e, a) {
  const t = e.getAnimations();
  let r = null;
  for (const n of t) {
    if (n.playState !== "running") continue;
    const { effect: i } = n, l = (Er(i) ? i.getKeyframes() : []).filter(a);
    l.length > 0 && (r = [l[l.length - 1], n]);
  }
  return r;
}
function oa(e) {
  const { width: a, height: t, top: r, left: n, bottom: i, right: o } = e.getBoundingClientRect();
  return { width: a, height: t, top: r, left: n, bottom: i, right: o };
}
function di(e) {
  const a = Object.prototype.toString.call(e);
  return a === "[object Window]" || a === "[object global]";
}
function wt(e) {
  return "nodeType" in e;
}
function oe(e) {
  var a, t, r;
  return e ? di(e) ? e : wt(e) ? "defaultView" in e ? (a = e.defaultView) != null ? a : window : (r = (t = e.ownerDocument) == null ? void 0 : t.defaultView) != null ? r : window : window : window;
}
function hi(e) {
  const { Document: a } = oe(e);
  return e instanceof a || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function _e(e) {
  return !e || di(e) ? false : e instanceof oe(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function Ds(e) {
  return e instanceof oe(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function ka(e) {
  return e ? di(e) ? e.document : wt(e) ? hi(e) ? e : _e(e) || Ds(e) ? e.ownerDocument : document : document : document;
}
function ps(e) {
  var a, t, r, n;
  const { documentElement: i } = ka(e), o = oe(e).visualViewport, l = (a = o?.width) != null ? a : i.clientWidth, s = (t = o?.height) != null ? t : i.clientHeight, D = (r = o?.offsetTop) != null ? r : 0, p = (n = o?.offsetLeft) != null ? n : 0;
  return { top: D, left: p, right: p + l, bottom: D + s, width: l, height: s };
}
function kD(e, a) {
  if (qD(e) && e.open === false) return false;
  const { overflow: t, overflowX: r, overflowY: n } = getComputedStyle(e);
  return t === "visible" && r === "visible" && n === "visible";
}
function qD(e) {
  return e.tagName === "DETAILS";
}
function xa(e, a = e.getBoundingClientRect(), t = 0) {
  var r, n, i, o, l;
  let s = a;
  const { ownerDocument: D } = e, p = (r = D.defaultView) != null ? r : window;
  let g = e.parentElement;
  for (; g && g !== D.documentElement; ) {
    if (!kD(g)) {
      const h = g.getBoundingClientRect(), f = t * (h.bottom - h.top), b = t * (h.right - h.left), M = t * (h.bottom - h.top), w = t * (h.right - h.left);
      s = { top: Math.max(s.top, h.top - f), right: Math.min(s.right, h.right + b), bottom: Math.min(s.bottom, h.bottom + M), left: Math.max(s.left, h.left - w), width: 0, height: 0 }, s.width = s.right - s.left, s.height = s.bottom - s.top;
    }
    g = g.parentElement;
  }
  const c = p.visualViewport, d = (n = c?.offsetTop) != null ? n : 0, m = (i = c?.offsetLeft) != null ? i : 0, P = (o = c?.width) != null ? o : p.innerWidth, y = (l = c?.height) != null ? l : p.innerHeight, v = t * y, u = t * P;
  return s = { top: Math.max(s.top, d - v), right: Math.min(s.right, m + P + u), bottom: Math.min(s.bottom, d + y + v), left: Math.max(s.left, m - u), width: 0, height: 0 }, s.width = s.right - s.left, s.height = s.bottom - s.top, s.width < 0 && (s.width = 0), s.height < 0 && (s.height = 0), s;
}
function Ta(e) {
  return { x: e.clientX, y: e.clientY };
}
var us = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function fn(e = document, a = /* @__PURE__ */ new Set()) {
  if (a.has(e)) return [];
  a.add(e);
  const t = [e];
  for (const r of Array.from(e.querySelectorAll("iframe, frame"))) try {
    const n = r.contentDocument;
    n && !a.has(n) && t.push(...fn(n, a));
  } catch {
  }
  try {
    const r = e.defaultView;
    if (r && r !== window.top) {
      const n = r.parent;
      n && n.document && n.document !== e && t.push(...fn(n.document, a));
    }
  } catch {
  }
  return t;
}
function bi() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function cs() {
  var e, a;
  const t = bi() ? window.visualViewport : null;
  return { x: (e = t?.offsetLeft) != null ? e : 0, y: (a = t?.offsetTop) != null ? a : 0 };
}
function fi(e) {
  return !e || !wt(e) ? false : e instanceof oe(e).ShadowRoot;
}
function sr(e) {
  if (e && wt(e)) {
    let a = e.getRootNode();
    if (fi(a)) return a;
    if (a instanceof Document) return a;
  }
  return ka(e);
}
function mi(e) {
  return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function LD(e) {
  const a = "input, textarea, select, canvas, [contenteditable]", t = e.cloneNode(true), r = Array.from(e.querySelectorAll(a));
  return Array.from(t.querySelectorAll(a)).forEach((i, o) => {
    const l = r[o];
    if (co(i) && co(l) && (i.type !== "file" && (i.value = l.value), i.type === "radio" && i.name && (i.name = `Cloned__${i.name}`)), ho(i) && ho(l) && l.width > 0 && l.height > 0) {
      const s = i.getContext("2d");
      s?.drawImage(l, 0, 0);
    }
  }), t;
}
function co(e) {
  return "value" in e;
}
function ho(e) {
  return e.tagName === "CANVAS";
}
function ds(e, { x: a, y: t }) {
  const r = e.elementFromPoint(a, t);
  if (WD(r)) {
    const { contentDocument: n } = r;
    if (n) {
      const { left: i, top: o } = r.getBoundingClientRect();
      return ds(n, { x: a - i, y: t - o });
    }
  }
  return r;
}
function WD(e) {
  return e?.tagName === "IFRAME";
}
var mn = /* @__PURE__ */ new WeakMap();
function zD(e) {
  return e.closest(`
    input:not([disabled]),
    select:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled]),
    a[href],
    [contenteditable]:not([contenteditable="false"])
  `);
}
var hs = class {
  constructor() {
    this.entries = /* @__PURE__ */ new Set(), this.clear = () => {
      for (const e of this.entries) {
        const [a, { type: t, listener: r, options: n }] = e;
        a.removeEventListener(t, r, n);
      }
      this.entries.clear();
    };
  }
  bind(e, a) {
    const t = Array.isArray(e) ? e : [e], r = Array.isArray(a) ? a : [a], n = [];
    for (const o of t) for (const l of r) {
      const { type: s, listener: D, options: p } = l, g = [o, l];
      o.addEventListener(s, D, p), this.entries.add(g), n.push(g);
    }
    const i = this.entries;
    return function() {
      for (const l of n) {
        const [s, { type: D, listener: p, options: g }] = l;
        s.removeEventListener(D, p, g), i.delete(l);
      }
    };
  }
};
function wa(e) {
  const a = e?.ownerDocument.defaultView;
  if (a && a.self !== a.parent) return a.frameElement;
}
function $D(e) {
  const a = /* @__PURE__ */ new Set();
  let t = wa(e);
  for (; t; ) a.add(t), t = wa(t);
  return a;
}
function VD(e, a) {
  const t = setTimeout(e, a);
  return () => clearTimeout(t);
}
function bs(e, a) {
  const t = () => performance.now();
  let r, n;
  return function(...i) {
    const o = this;
    n ? (r?.(), r = VD(() => {
      e.apply(o, i), n = t();
    }, a - (t() - n))) : (e.apply(o, i), n = t());
  };
}
function UD(e, a) {
  return e === a ? true : !e || !a ? false : e.top == a.top && e.left == a.left && e.right == a.right && e.bottom == a.bottom;
}
function jD(e, a = e.getBoundingClientRect()) {
  const { width: t, height: r } = xa(e, a);
  return t > 0 && r > 0;
}
var FD = us ? ResizeObserver : class {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
}, Xt, KD = class extends FD {
  constructor(e) {
    super((a) => {
      if (!O(this, Xt)) {
        re(this, Xt, true);
        return;
      }
      e(a, this);
    }), ee(this, Xt, false);
  }
};
Xt = /* @__PURE__ */ new WeakMap();
var bo = Array.from({ length: 100 }, (e, a) => a / 100), fs = 75, Ye, gr, Se, Xe, Ga, B, lt, Ya, Dr, ms, Ps, vs = class {
  constructor(e, a, t = { debug: false, skipInitial: false }) {
    this.element = e, this.callback = a, ee(this, Dr), this.disconnect = () => {
      var i, o, l;
      re(this, lt, true), (i = O(this, Se)) == null || i.disconnect(), (o = O(this, Xe)) == null || o.disconnect(), O(this, Ga).disconnect(), (l = O(this, B)) == null || l.remove();
    }, ee(this, Ye, true), ee(this, gr), ee(this, Se), ee(this, Xe), ee(this, Ga), ee(this, B), ee(this, lt, false), ee(this, Ya, bs(() => {
      var i, o, l;
      const { element: s } = this;
      if ((i = O(this, Xe)) == null || i.disconnect(), O(this, lt) || !O(this, Ye) || !s.isConnected) return;
      const D = (o = s.ownerDocument) != null ? o : document, { innerHeight: p, innerWidth: g } = (l = D.defaultView) != null ? l : window, c = s.getBoundingClientRect(), d = xa(s, c), { top: m, left: P, bottom: y, right: v } = d, u = -Math.floor(m), h = -Math.floor(P), f = -Math.floor(g - v), b = -Math.floor(p - y), M = `${u}px ${f}px ${b}px ${h}px`;
      this.boundingClientRect = c, re(this, Xe, new IntersectionObserver((w) => {
        const [A] = w, { intersectionRect: k } = A;
        (A.intersectionRatio !== 1 ? A.intersectionRatio : de.intersectionRatio(k, xa(s))) !== 1 && O(this, Ya).call(this);
      }, { threshold: bo, rootMargin: M, root: D })), O(this, Xe).observe(s), ss(this, Dr, ms).call(this);
    }, fs)), this.boundingClientRect = e.getBoundingClientRect(), re(this, Ye, jD(e, this.boundingClientRect));
    let r = true;
    this.callback = (i) => {
      r && (r = false, t.skipInitial) || a(i);
    };
    const n = e.ownerDocument;
    t?.debug && (re(this, B, document.createElement("div")), O(this, B).style.background = "rgba(0,0,0,0.15)", O(this, B).style.position = "fixed", O(this, B).style.pointerEvents = "none", n.body.appendChild(O(this, B))), re(this, Ga, new IntersectionObserver((i) => {
      var o, l;
      const s = i[i.length - 1], { boundingClientRect: D, isIntersecting: p } = s, { width: g, height: c } = D, d = O(this, Ye);
      re(this, Ye, p), !(!g && !c) && (d && !p ? ((o = O(this, Xe)) == null || o.disconnect(), this.callback(null), (l = O(this, Se)) == null || l.disconnect(), re(this, Se, void 0), O(this, B) && (O(this, B).style.visibility = "hidden")) : O(this, Ya).call(this), p && !O(this, Se) && (re(this, Se, new KD(O(this, Ya))), O(this, Se).observe(e)));
    }, { threshold: bo, root: n })), O(this, Ye) && !t.skipInitial && this.callback(this.boundingClientRect), O(this, Ga).observe(e);
  }
};
Ye = /* @__PURE__ */ new WeakMap();
gr = /* @__PURE__ */ new WeakMap();
Se = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
Ga = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakMap();
lt = /* @__PURE__ */ new WeakMap();
Ya = /* @__PURE__ */ new WeakMap();
Dr = /* @__PURE__ */ new WeakSet();
ms = function() {
  O(this, lt) || (ss(this, Dr, Ps).call(this), !UD(this.boundingClientRect, O(this, gr)) && (this.callback(this.boundingClientRect), re(this, gr, this.boundingClientRect)));
};
Ps = function() {
  if (O(this, B)) {
    const { top: e, left: a, width: t, height: r } = xa(this.element);
    O(this, B).style.overflow = "hidden", O(this, B).style.visibility = "visible", O(this, B).style.top = `${Math.floor(e)}px`, O(this, B).style.left = `${Math.floor(a)}px`, O(this, B).style.width = `${Math.floor(t)}px`, O(this, B).style.height = `${Math.floor(r)}px`;
  }
};
var kt = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap();
function HD(e, a) {
  let t = kt.get(e);
  return t || (t = { disconnect: new vs(e, (n) => {
    const i = kt.get(e);
    i && i.callbacks.forEach((o) => o(n));
  }, { skipInitial: true }).disconnect, callbacks: /* @__PURE__ */ new Set() }), t.callbacks.add(a), kt.set(e, t), () => {
    t.callbacks.delete(a), t.callbacks.size === 0 && (kt.delete(e), t.disconnect());
  };
}
function BD(e, a) {
  const t = /* @__PURE__ */ new Set();
  for (const r of e) {
    const n = HD(r, a);
    t.add(n);
  }
  return () => t.forEach((r) => r());
}
function GD(e, a) {
  var t;
  const r = e.ownerDocument;
  if (!qt.has(r)) {
    const o = new AbortController(), l = /* @__PURE__ */ new Set();
    document.addEventListener("scroll", (s) => l.forEach((D) => D(s)), { capture: true, passive: true, signal: o.signal }), qt.set(r, { disconnect: () => o.abort(), listeners: l });
  }
  const { listeners: n, disconnect: i } = (t = qt.get(r)) != null ? t : {};
  return !n || !i ? () => {
  } : (n.add(a), () => {
    n.delete(a), n.size === 0 && (i(), qt.delete(r));
  });
}
var Xa, Za, Zt, Pn, YD = class {
  constructor(e, a, t) {
    this.callback = a, ee(this, Xa), ee(this, Za, false), ee(this, Zt), ee(this, Pn, bs((o) => {
      if (!O(this, Za) && o.target && "contains" in o.target && typeof o.target.contains == "function") {
        for (const l of O(this, Zt)) if (o.target.contains(l)) {
          this.callback(O(this, Xa).boundingClientRect);
          break;
        }
      }
    }, fs));
    const r = $D(e), n = BD(r, a), i = GD(e, O(this, Pn));
    re(this, Zt, r), re(this, Xa, new vs(e, a, t)), this.disconnect = () => {
      O(this, Za) || (re(this, Za, true), n(), i(), O(this, Xa).disconnect());
    };
  }
};
Xa = /* @__PURE__ */ new WeakMap();
Za = /* @__PURE__ */ new WeakMap();
Zt = /* @__PURE__ */ new WeakMap();
Pn = /* @__PURE__ */ new WeakMap();
function vn(e) {
  return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function ya(e) {
  try {
    vn(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
  } catch {
  }
}
function fo(e) {
  return !us || !e ? false : e === ka(e).scrollingElement;
}
function ys(e) {
  var a, t;
  const r = oe(e), n = fo(e) ? ps(e) : oa(e), i = r.visualViewport, o = fo(e) ? { height: (a = i?.height) != null ? a : r.innerHeight, width: (t = i?.width) != null ? t : r.innerWidth } : { height: e.clientHeight, width: e.clientWidth }, l = { current: { x: e.scrollLeft, y: e.scrollTop }, max: { x: e.scrollWidth - o.width, y: e.scrollHeight - o.height } }, s = l.current.y <= 0, D = l.current.x <= 0, p = l.current.y >= l.max.y, g = l.current.x >= l.max.x;
  return { rect: n, position: l, isTop: s, isLeft: D, isBottom: p, isRight: g };
}
function Pi(e, a) {
  const { isTop: t, isBottom: r, isLeft: n, isRight: i, position: o } = ys(e), { x: l, y: s } = a ?? { x: 0, y: 0 }, D = !t && o.current.y + s > 0, p = !r && o.current.y + s < o.max.y, g = !n && o.current.x + l > 0, c = !i && o.current.x + l < o.max.x;
  return { top: D, bottom: p, left: g, right: c, x: g || c, y: D || p };
}
var vi = class {
  constructor(a) {
    this.scheduler = a, this.pending = false, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
      const { tasks: t, resolvers: r } = this;
      this.pending = false, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
      for (const n of t) n();
      for (const n of r) n();
    };
  }
  schedule(a) {
    return this.tasks.add(a), this.pending || (this.pending = true, this.scheduler(this.flush)), new Promise((t) => this.resolvers.add(t));
  }
}, pr = new vi((e) => {
  typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), XD = new vi((e) => setTimeout(e, 50)), ur = /* @__PURE__ */ new Map(), ZD = ur.clear.bind(ur);
function be(e, a = false) {
  if (!a) return mo(e);
  let t = ur.get(e);
  return t || (t = mo(e), ur.set(e, t), XD.schedule(ZD), t);
}
function mo(e) {
  return oe(e).getComputedStyle(e);
}
function JD(e, a = be(e, true)) {
  return a.position === "fixed" || a.position === "sticky";
}
function QD(e, a = be(e, true)) {
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((n) => {
    const i = a[n];
    return typeof i == "string" ? t.test(i) : false;
  });
}
var ep = { excludeElement: true, escapeShadowDOM: true };
function cr(e, a = ep) {
  const { limit: t, excludeElement: r, escapeShadowDOM: n } = a, i = /* @__PURE__ */ new Set();
  function o(l) {
    if (t != null && i.size >= t || !l) return i;
    if (hi(l) && l.scrollingElement != null && !i.has(l.scrollingElement)) return i.add(l.scrollingElement), i;
    if (n && fi(l)) return o(l.host);
    if (!_e(l)) return Ds(l) ? o(l.parentElement) : i;
    if (i.has(l)) return i;
    const s = be(l, true);
    if (r && l === e || QD(l, s) && i.add(l), JD(l, s)) {
      const { scrollingElement: D } = l.ownerDocument;
      return D && i.add(D), i;
    }
    return o(l.parentNode);
  }
  return e ? o(e) : i;
}
function ea(e, a = window.frameElement) {
  const t = { x: 0, y: 0, scaleX: 1, scaleY: 1 };
  if (!e) return t;
  let r = wa(e);
  for (; r; ) {
    if (r === a) return t;
    const n = oa(r), { x: i, y: o } = ap(r, n);
    t.x = t.x + n.left, t.y = t.y + n.top, t.scaleX = t.scaleX * i, t.scaleY = t.scaleY * o, r = wa(r);
  }
  return t;
}
function ap(e, a = oa(e)) {
  const t = Math.round(a.width), r = Math.round(a.height);
  if (_e(e)) return { x: t / e.offsetWidth, y: r / e.offsetHeight };
  const n = be(e, true);
  return { x: (parseFloat(n.width) || t) / t, y: (parseFloat(n.height) || r) / r };
}
function tp(e) {
  if (!e || e === "none") return null;
  const a = e.split(" "), t = parseFloat(a[0]), r = parseFloat(a[1]);
  return isNaN(t) && isNaN(r) ? null : { x: isNaN(t) ? r : t, y: isNaN(r) ? t : r };
}
function ft(e) {
  if (!e || e === "none") return null;
  const [a, t, r = "0"] = e.split(" "), n = { x: parseFloat(a), y: parseFloat(t), z: parseInt(r, 10) };
  return isNaN(n.x) && isNaN(n.y) ? null : { x: isNaN(n.x) ? 0 : n.x, y: isNaN(n.y) ? 0 : n.y, z: isNaN(n.z) ? 0 : n.z };
}
function Cr(e) {
  var a, t, r, n, i, o, l, s, D;
  const { scale: p, transform: g, translate: c } = e, d = tp(p), m = ft(c), P = rp(g);
  if (!P && !d && !m) return null;
  const y = { x: (a = d?.x) != null ? a : 1, y: (t = d?.y) != null ? t : 1 }, v = { x: (r = m?.x) != null ? r : 0, y: (n = m?.y) != null ? n : 0 }, u = { x: (i = P?.x) != null ? i : 0, y: (o = P?.y) != null ? o : 0, scaleX: (l = P?.scaleX) != null ? l : 1, scaleY: (s = P?.scaleY) != null ? s : 1 };
  return { x: v.x + u.x, y: v.y + u.y, z: (D = m?.z) != null ? D : 0, scaleX: y.x * u.scaleX, scaleY: y.y * u.scaleY };
}
function rp(e) {
  if (e.startsWith("matrix3d(")) {
    const a = e.slice(9, -1).split(/, /);
    return { x: +a[12], y: +a[13], scaleX: +a[0], scaleY: +a[5] };
  } else if (e.startsWith("matrix(")) {
    const a = e.slice(7, -1).split(/, /);
    return { x: +a[4], y: +a[5], scaleX: +a[0], scaleY: +a[3] };
  }
  return null;
}
var T = ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(T || {}), np = { x: 0.2, y: 0.2 }, ip = { x: 10, y: 10 };
function Ms(e, a, t, r = 25, n = np, i = ip) {
  const { x: o, y: l } = a, { rect: s, isTop: D, isBottom: p, isLeft: g, isRight: c } = ys(e), d = ea(e), m = be(e, true), P = Cr(m), y = P !== null ? P?.scaleX < 0 : false, v = P !== null ? P?.scaleY < 0 : false, u = new de(s.left * d.scaleX + d.x, s.top * d.scaleY + d.y, s.width * d.scaleX, s.height * d.scaleY), h = { x: 0, y: 0 }, f = { x: 0, y: 0 }, b = { height: u.height * n.y, width: u.width * n.x };
  return b.height > 0 && (!D || v && !p) && l <= u.top + b.height && t?.y !== 1 && o >= u.left - i.x && o <= u.right + i.x ? (h.y = v ? 1 : -1, f.y = r * Math.abs((u.top + b.height - l) / b.height)) : b.height > 0 && (!p || v && !D) && l >= u.bottom - b.height && t?.y !== -1 && o >= u.left - i.x && o <= u.right + i.x && (h.y = v ? -1 : 1, f.y = r * Math.abs((u.bottom - b.height - l) / b.height)), b.width > 0 && (!c || y && !g) && o >= u.right - b.width && t?.x !== -1 && l >= u.top - i.y && l <= u.bottom + i.y ? (h.x = y ? -1 : 1, f.x = r * Math.abs((u.right - b.width - o) / b.width)) : b.width > 0 && (!g || y && !c) && o <= u.left + b.width && t?.x !== 1 && l >= u.top - i.y && l <= u.bottom + i.y && (h.x = y ? 1 : -1, f.x = r * Math.abs((u.left + b.width - o) / b.width)), { direction: h, speed: f };
}
function Os(e, { block: a = "nearest", inline: t = "nearest" } = {}) {
  if (!_e(e)) return;
  const r = cr(e), n = [];
  for (const i of r) {
    if (!_e(i)) continue;
    const { top: o, left: l } = op(e, i);
    let s = o, D = l;
    for (const p of n) s -= p.scrollTop, D -= p.scrollLeft;
    if (a !== "none") {
      const p = s < i.scrollTop, g = s + e.offsetHeight > i.scrollTop + i.clientHeight;
      p !== g && (a === "center" ? i.scrollTop = s - i.clientHeight / 2 + e.offsetHeight / 2 : p ? i.scrollTop = s : i.scrollTop = s + e.offsetHeight - i.clientHeight);
    }
    if (t !== "none") {
      const p = D < i.scrollLeft, g = D + e.offsetWidth > i.scrollLeft + i.clientWidth;
      p !== g && (t === "center" ? i.scrollLeft = D - i.clientWidth / 2 + e.offsetWidth / 2 : p ? i.scrollLeft = D : i.scrollLeft = D + e.offsetWidth - i.clientWidth);
    }
    n.push(i);
  }
}
function Po(e) {
  let a = 0, t = 0, r = e;
  for (; r; ) {
    a += r.offsetTop, t += r.offsetLeft;
    const n = r.offsetParent;
    if (!_e(n)) break;
    a += n.clientTop, t += n.clientLeft, r = n;
  }
  return { top: a, left: t };
}
function op(e, a) {
  const t = Po(e), r = Po(a);
  return { top: t.top - r.top - a.clientTop, left: t.left - r.left - a.clientLeft };
}
function lp(e, a, t) {
  const { scaleX: r, scaleY: n, x: i, y: o } = a, l = e.left + i + (1 - r) * parseFloat(t), s = e.top + o + (1 - n) * parseFloat(t.slice(t.indexOf(" ") + 1)), D = r ? e.width * r : e.width, p = n ? e.height * n : e.height;
  return { width: D, height: p, top: s, right: l + D, bottom: s + p, left: l };
}
function sp(e, a, t) {
  const { scaleX: r, scaleY: n, x: i, y: o } = a, l = e.left - i - (1 - r) * parseFloat(t), s = e.top - o - (1 - n) * parseFloat(t.slice(t.indexOf(" ") + 1)), D = r ? e.width / r : e.width, p = n ? e.height / n : e.height;
  return { width: D, height: p, top: s, right: l + D, bottom: s + p, left: l };
}
function xs({ element: e, keyframes: a, options: t }) {
  return e.animate(a, t).finished;
}
function vo(e, a = be(e).translate, t = true) {
  if (t) {
    const r = gs(e, (n) => "translate" in n);
    if (r) {
      const { translate: n = "" } = r[0];
      if (typeof n == "string") {
        const i = ft(n);
        if (i) return i;
      }
    }
  }
  if (a) {
    const r = ft(a);
    if (r) return r;
  }
  return { x: 0, y: 0, z: 0 };
}
var gp = new vi((e) => setTimeout(e, 0)), st = /* @__PURE__ */ new Map(), Dp = st.clear.bind(st);
function pp(e) {
  const a = e.ownerDocument;
  let t = st.get(a);
  if (t) return t;
  t = a.getAnimations(), st.set(a, t), gp.schedule(Dp);
  const r = t.filter((n) => Er(n.effect) && n.effect.target === e);
  return st.set(e, r), t;
}
function up(e, a) {
  const t = pp(e).filter((r) => {
    var n, i;
    if (Er(r.effect)) {
      const { target: o } = r.effect;
      if ((i = o && ((n = a.isValidTarget) == null ? void 0 : n.call(a, o))) != null ? i : true) return r.effect.getKeyframes().some((s) => {
        for (const D of a.properties) if (s[D]) return true;
      });
    }
  }).map((r) => {
    const { effect: n, currentTime: i } = r, o = n?.getComputedTiming().duration;
    if (!(r.pending || r.playState === "finished") && typeof o == "number" && typeof i == "number" && i < o) return r.currentTime = o, () => {
      r.currentTime = i;
    };
  });
  if (t.length > 0) return () => t.forEach((r) => r?.());
}
var me = class extends de {
  constructor(e, a = {}) {
    var t, r, n, i;
    const { frameTransform: o = ea(e), ignoreTransforms: l, getBoundingClientRect: s = oa } = a, D = up(e, { properties: ["transform", "translate", "scale", "width", "height"], isValidTarget: (b) => (b !== e || bi()) && b.contains(e) }), p = s(e);
    let { top: g, left: c, width: d, height: m } = p, P;
    const y = be(e), v = Cr(y), u = { x: (t = v?.scaleX) != null ? t : 1, y: (r = v?.scaleY) != null ? r : 1 }, h = cp(e, y);
    D?.(), v && (P = sp(p, v, y.transformOrigin), (l || h) && (g = P.top, c = P.left, d = P.width, m = P.height));
    const f = { width: (n = P?.width) != null ? n : d, height: (i = P?.height) != null ? i : m };
    if (h && !l && P) {
      const b = lp(P, h, y.transformOrigin);
      g = b.top, c = b.left, d = b.width, m = b.height, u.x = h.scaleX, u.y = h.scaleY;
    }
    o && (l || (c *= o.scaleX, d *= o.scaleX, g *= o.scaleY, m *= o.scaleY), c += o.x, g += o.y), super(c, g, d, m), this.scale = u, this.intrinsicWidth = f.width, this.intrinsicHeight = f.height;
  }
};
function cp(e, a) {
  const t = e.getAnimations();
  if (!t.length) return null;
  let r, n, i, o = false;
  for (const l of t) {
    if (l.playState !== "running") continue;
    const s = Er(l.effect) ? l.effect.getKeyframes() : [], D = s[s.length - 1];
    if (!D) continue;
    const { transform: p, translate: g, scale: c } = D;
    typeof p == "string" && p && (r = p, o = true), typeof g == "string" && g && (n = g, o = true), typeof c == "string" && c && (i = c, o = true);
  }
  return o ? Cr({ transform: r ?? a.transform, translate: n ?? a.translate, scale: i ?? a.scale }) : null;
}
function gt(e) {
  return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var dp = class {
  constructor(e) {
    this.element = e, this.initial = /* @__PURE__ */ new Map();
  }
  set(e, a = "") {
    const { element: t } = this;
    if (gt(t)) for (const [r, n] of Object.entries(e)) {
      const i = `${a}${r}`;
      this.initial.has(i) || this.initial.set(i, t.style.getPropertyValue(i)), t.style.setProperty(i, typeof n == "string" ? n : `${n}px`);
    }
  }
  remove(e, a = "") {
    const { element: t } = this;
    if (gt(t)) for (const r of e) {
      const n = `${a}${r}`;
      t.style.removeProperty(n);
    }
  }
  reset() {
    const { element: e } = this;
    if (gt(e)) {
      for (const [a, t] of this.initial) e.style.setProperty(a, t);
      e.getAttribute("style") === "" && e.removeAttribute("style");
    }
  }
};
function aa(e) {
  return e ? e instanceof oe(e).Element || wt(e) && e.nodeType === Node.ELEMENT_NODE : false;
}
function mt(e) {
  if (!e) return false;
  const { KeyboardEvent: a } = oe(e.target);
  return e instanceof a;
}
function hp(e) {
  if (!e) return false;
  const { PointerEvent: a } = oe(e.target);
  return e instanceof a;
}
function bp(e) {
  if (!aa(e)) return false;
  const { tagName: a } = e;
  return a === "INPUT" || a === "TEXTAREA" || fp(e);
}
function fp(e) {
  return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var Hr = {};
function yn(e) {
  const a = Hr[e] == null ? 0 : Hr[e] + 1;
  return Hr[e] = a, `${e}-${a}`;
}
var mp = ({ dragOperation: e, droppable: a }) => {
  const t = e.position.current;
  if (!t) return null;
  const { id: r } = a;
  if (!a.shape) return null;
  if (a.shape.containsPoint(t)) {
    const n = ge.distance(a.shape.center, t);
    return { id: r, value: 1 / n, type: _r.PointerIntersection, priority: wr.High };
  }
  return null;
}, Pp = ({ dragOperation: e, droppable: a }) => {
  const { shape: t } = e;
  if (!a.shape || !t?.current) return null;
  const r = t.current.intersectionArea(a.shape);
  if (r) {
    const { position: n } = e, i = ge.distance(a.shape.center, n.current), l = r / (t.current.area + a.shape.area - r) / i;
    return { id: a.id, value: l, type: _r.ShapeIntersection, priority: wr.Normal };
  }
  return null;
}, Ts = (e) => {
  var a;
  return (a = mp(e)) != null ? a : Pp(e);
}, vp = (e) => {
  const { dragOperation: a, droppable: t } = e, { shape: r, position: n } = a;
  if (!t.shape) return null;
  const i = r ? de.from(r.current.boundingRectangle).corners : void 0, l = de.from(t.shape.boundingRectangle).corners.reduce((s, D, p) => {
    var g;
    return s + ge.distance(ge.from(D), (g = i?.[p]) != null ? g : n.current);
  }, 0) / 4;
  return { id: t.id, value: 1 / l, type: _r.Collision, priority: wr.Normal };
}, yp = Object.create, yi = Object.defineProperty, Mp = Object.defineProperties, Op = Object.getOwnPropertyDescriptor, xp = Object.getOwnPropertyDescriptors, dr = Object.getOwnPropertySymbols, ws = Object.prototype.hasOwnProperty, _s = Object.prototype.propertyIsEnumerable, Es = (e, a) => (a = Symbol[e]) ? a : /* @__PURE__ */ Symbol.for("Symbol." + e), qa = (e) => {
  throw TypeError(e);
}, Mn = (e, a, t) => a in e ? yi(e, a, { enumerable: true, configurable: true, writable: true, value: t }) : e[a] = t, Pt = (e, a) => {
  for (var t in a || (a = {})) ws.call(a, t) && Mn(e, t, a[t]);
  if (dr) for (var t of dr(a)) _s.call(a, t) && Mn(e, t, a[t]);
  return e;
}, Mi = (e, a) => Mp(e, xp(a)), yo = (e, a) => yi(e, "name", { value: a, configurable: true }), Cs = (e, a) => {
  var t = {};
  for (var r in e) ws.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && dr) for (var r of dr(e)) a.indexOf(r) < 0 && _s.call(e, r) && (t[r] = e[r]);
  return t;
}, La = (e) => {
  var a;
  return [, , , yp((a = e?.[Es("metadata")]) != null ? a : null)];
}, Is = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Ja = (e) => e !== void 0 && typeof e != "function" ? qa("Function expected") : e, Tp = (e, a, t, r, n) => ({ kind: Is[e], name: a, metadata: r, addInitializer: (i) => t._ ? qa("Already initialized") : n.push(Ja(i || null)) }), la = (e, a) => Mn(a, Es("metadata"), e[3]), K = (e, a, t, r) => {
  for (var n = 0, i = e[a >> 1], o = i && i.length; n < o; n++) a & 1 ? i[n].call(t) : r = i[n].call(t, r);
  return r;
}, pe = (e, a, t, r, n, i) => {
  var o, l, s, D, p, g = a & 7, c = !!(a & 8), d = !!(a & 16), m = g > 3 ? e.length + 1 : g ? c ? 1 : 2 : 0, P = Is[g + 5], y = g > 3 && (e[m - 1] = []), v = e[m] || (e[m] = []), u = g && (!d && !c && (n = n.prototype), g < 5 && (g > 3 || !d) && Op(g < 4 ? n : { get [t]() {
    return N(this, i);
  }, set [t](f) {
    return J(this, i, f);
  } }, t));
  g ? d && g < 4 && yo(i, (g > 2 ? "set " : g > 1 ? "get " : "") + t) : yo(n, t);
  for (var h = r.length - 1; h >= 0; h--) D = Tp(g, t, s = {}, e[3], v), g && (D.static = c, D.private = d, p = D.access = { has: d ? (f) => wp(n, f) : (f) => t in f }, g ^ 3 && (p.get = d ? (f) => (g ^ 1 ? N : ta)(f, n, g ^ 4 ? i : u.get) : (f) => f[t]), g > 2 && (p.set = d ? (f, b) => J(f, n, b, g ^ 4 ? i : u.set) : (f, b) => f[t] = b)), l = (0, r[h])(g ? g < 4 ? d ? i : u[P] : g > 4 ? void 0 : { get: u.get, set: u.set } : n, D), s._ = 1, g ^ 4 || l === void 0 ? Ja(l) && (g > 4 ? y.unshift(l) : g ? d ? i = l : u[P] = l : n = l) : typeof l != "object" || l === null ? qa("Object expected") : (Ja(o = l.get) && (u.get = o), Ja(o = l.set) && (u.set = o), Ja(o = l.init) && y.unshift(o));
  return g || la(e, n), u && yi(n, t, u), d ? g ^ 4 ? i : u : n;
}, Oi = (e, a, t) => a.has(e) || qa("Cannot " + t), wp = (e, a) => Object(a) !== a ? qa('Cannot use the "in" operator on this value') : e.has(a), N = (e, a, t) => (Oi(e, a, "read from private field"), t ? t.call(e) : a.get(e)), V = (e, a, t) => a.has(e) ? qa("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(e) : a.set(e, t), J = (e, a, t, r) => (Oi(e, a, "write to private field"), r ? r.call(e, t) : a.set(e, t), t), ta = (e, a, t) => (Oi(e, a, "access private method"), t), Mo = { role: "button", roleDescription: "draggable" }, _p = "dnd-kit-description", Ep = "dnd-kit-announcement", Cp = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, Ip = { dragstart({ operation: { source: e } }) {
  if (e) return `Picked up draggable item ${e.id}.`;
}, dragover({ operation: { source: e, target: a } }) {
  if (!(!e || e.id === a?.id)) return a ? `Draggable item ${e.id} was moved over droppable target ${a.id}.` : `Draggable item ${e.id} is no longer over a droppable target.`;
}, dragend({ operation: { source: e, target: a }, canceled: t }) {
  if (e) return t ? `Dragging was cancelled. Draggable item ${e.id} was dropped.` : a ? `Draggable item ${e.id} was dropped over droppable target ${a.id}` : `Draggable item ${e.id} was dropped.`;
} };
function Ap(e) {
  const a = e.tagName.toLowerCase();
  return ["input", "select", "textarea", "a", "button"].includes(a);
}
function Sp(e, a) {
  const t = document.createElement("div");
  return t.id = e, t.style.setProperty("display", "none"), t.textContent = a, t;
}
function Np(e) {
  const a = document.createElement("div");
  return a.id = e, a.setAttribute("role", "status"), a.setAttribute("aria-live", "polite"), a.setAttribute("aria-atomic", "true"), a.style.setProperty("position", "fixed"), a.style.setProperty("width", "1px"), a.style.setProperty("height", "1px"), a.style.setProperty("margin", "-1px"), a.style.setProperty("border", "0"), a.style.setProperty("padding", "0"), a.style.setProperty("overflow", "hidden"), a.style.setProperty("clip", "rect(0 0 0 0)"), a.style.setProperty("clip-path", "inset(100%)"), a.style.setProperty("white-space", "nowrap"), a;
}
var Rp = ["dragover", "dragmove"], As = class extends G {
  constructor(e, a) {
    super(e);
    const { id: t, idPrefix: { description: r = _p, announcement: n = Ep } = {}, announcements: i = Ip, screenReaderInstructions: o = Cp, debounce: l = 500 } = a ?? {}, s = t ? `${r}-${t}` : yn(r), D = t ? `${n}-${t}` : yn(n);
    let p, g, c, d;
    const m = (b = d) => {
      !c || !b || c?.nodeValue !== b && (c.nodeValue = b);
    }, P = () => pr.schedule(m), y = kp(P, l), v = Object.entries(i).map(([b, M]) => this.manager.monitor.addEventListener(b, (w, A) => {
      const k = c;
      if (!k) return;
      const q = M?.(w, A);
      q && k.nodeValue !== q && (d = q, Rp.includes(b) ? y() : (P(), y.cancel()));
    })), u = () => {
      let b = [];
      p?.isConnected || (p = Sp(s, o.draggable), b.push(p)), g?.isConnected || (g = Np(D), c = document.createTextNode(""), g.appendChild(c), b.push(g)), b.length > 0 && document.body.append(...b);
    }, h = /* @__PURE__ */ new Set();
    function f() {
      for (const b of h) b();
    }
    this.registerEffect(() => {
      var b;
      h.clear();
      for (const M of this.manager.registry.draggables.value) {
        const w = (b = M.handle) != null ? b : M.element;
        if (w) {
          (!p || !g) && h.add(u), (!Ap(w) || bi()) && !w.hasAttribute("tabindex") && h.add(() => w.setAttribute("tabindex", "0")), !w.hasAttribute("role") && w.tagName.toLowerCase() !== "button" && h.add(() => w.setAttribute("role", Mo.role)), w.hasAttribute("aria-roledescription") || h.add(() => w.setAttribute("aria-roledescription", Mo.roleDescription)), w.hasAttribute("aria-describedby") || h.add(() => w.setAttribute("aria-describedby", s));
          for (const k of ["aria-pressed", "aria-grabbed"]) {
            const q = String(M.isDragging);
            w.getAttribute(k) !== q && h.add(() => w.setAttribute(k, q));
          }
          const A = String(M.disabled);
          w.getAttribute("aria-disabled") !== A && h.add(() => w.setAttribute("aria-disabled", A));
        }
      }
      h.size > 0 && pr.schedule(f);
    }), this.destroy = () => {
      super.destroy(), p?.remove(), g?.remove(), v.forEach((b) => b());
    };
  }
};
function kp(e, a) {
  let t;
  const r = () => {
    clearTimeout(t), t = setTimeout(e, a);
  };
  return r.cancel = () => clearTimeout(t), r;
}
var hr = /* @__PURE__ */ new Map(), Ss, Ns, Rs, ks, On, Dt, Te, xi, _a, qs, Ls, Ws, zs, $e = class extends (On = Tt, ks = [E], Rs = [F], Ns = [F], Ss = [F], On) {
  constructor(a, t) {
    super(a, t), K(Te, 5, this), V(this, _a), V(this, Dt, /* @__PURE__ */ new Set()), V(this, xi, K(Te, 8, this, /* @__PURE__ */ new Set())), K(Te, 11, this), this.registerEffect(ta(this, _a, qs));
  }
  register(a) {
    return N(this, Dt).add(a), () => {
      N(this, Dt).delete(a);
    };
  }
  addRoot(a) {
    return _(() => {
      const t = new Set(this.additionalRoots);
      t.add(a), this.additionalRoots = t;
    }), () => {
      _(() => {
        const t = new Set(this.additionalRoots);
        t.delete(a), this.additionalRoots = t;
      });
    };
  }
  get sourceRoot() {
    var a;
    const { source: t } = this.manager.dragOperation;
    return sr((a = t?.element) != null ? a : null);
  }
  get targetRoot() {
    var a;
    const { target: t } = this.manager.dragOperation;
    return sr((a = t?.element) != null ? a : null);
  }
  get roots() {
    const { status: a } = this.manager.dragOperation;
    if (a.initializing || a.initialized) {
      const t = [this.sourceRoot, this.targetRoot].filter((r) => r != null);
      return /* @__PURE__ */ new Set([...t, ...this.additionalRoots]);
    }
    return /* @__PURE__ */ new Set();
  }
};
Te = La(On);
Dt = /* @__PURE__ */ new WeakMap();
xi = /* @__PURE__ */ new WeakMap();
_a = /* @__PURE__ */ new WeakSet();
qs = function() {
  const { roots: e } = this, a = [];
  for (const t of e) for (const r of N(this, Dt)) a.push(ta(this, _a, Ls).call(this, t, r));
  return () => {
    for (const t of a) t();
  };
};
Ls = function(e, a) {
  let t = hr.get(e);
  t || (t = /* @__PURE__ */ new Map(), hr.set(e, t));
  let r = t.get(a);
  if (!r) {
    const i = hi(e) ? ta(this, _a, Ws).call(this, e, t, a) : ta(this, _a, zs).call(this, e, t, a);
    if (!i) return () => {
    };
    r = i, t.set(a, r);
  }
  r.refCount++;
  let n = false;
  return () => {
    n || (n = true, r.refCount--, r.refCount === 0 && r.cleanup());
  };
};
Ws = function(e, a, t) {
  var r;
  const n = e.createElement("style"), { nonce: i } = (r = this.options) != null ? r : {};
  i && n.setAttribute("nonce", i), n.textContent = t, e.head.prepend(n);
  const o = new MutationObserver((l) => {
    for (const s of l) for (const D of Array.from(s.removedNodes)) if (D === n) {
      e.head.prepend(n);
      return;
    }
  });
  return o.observe(e.head, { childList: true }), { refCount: 0, cleanup: () => {
    o.disconnect(), n.remove(), a.delete(t), a.size === 0 && hr.delete(e);
  } };
};
zs = function(e, a, t) {
  "adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets);
  const r = e.ownerDocument.defaultView, { CSSStyleSheet: n } = r ?? {};
  if (!n) return null;
  const i = new n();
  return i.replaceSync(t), e.adoptedStyleSheets.push(i), { refCount: 0, cleanup: () => {
    var o;
    if (fi(e) && ((o = e.host) != null && o.isConnected)) {
      const l = e.adoptedStyleSheets.indexOf(i);
      l !== -1 && e.adoptedStyleSheets.splice(l, 1);
    }
    a.delete(t), a.size === 0 && hr.delete(e);
  } };
};
pe(Te, 4, "additionalRoots", ks, $e, xi);
pe(Te, 2, "sourceRoot", Rs, $e);
pe(Te, 2, "targetRoot", Ns, $e);
pe(Te, 2, "roots", Ss, $e);
la(Te, $e);
$e.configure = Ve($e);
var Ir = $e, qp = class extends G {
  constructor(e, a) {
    super(e, a), this.manager = e;
    const { cursor: t = "grabbing" } = a ?? {}, r = e.registry.plugins.get(Ir), n = r?.register(`* { cursor: ${t} !important; }`);
    if (n) {
      const i = this.destroy.bind(this);
      this.destroy = () => {
        n(), i();
      };
    }
  }
}, _t = "data-dnd-", xn = `${_t}dropping`, H = "--dnd-", fe = `${_t}dragging`, br = `${_t}placeholder`, Lp = [fe, br, "popover", "aria-pressed", "aria-grabbing"], Wp = ["view-transition-name"], zp = `
  :is(:root,:host) [${fe}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${H}top, 0px) !important;
    left: var(${H}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${H}width, auto);
    max-width: var(${H}width, auto);
    height: var(${H}height, auto);
    max-height: var(${H}height, auto);
    transform: var(${H}transform, none) !important;
    transition: var(${H}transition) !important;
  }

  :is(:root,:host) [${br}] {
    transition: none;
  }

  :is(:root,:host) [${br}='hidden'] {
    visibility: hidden;
  }

  [${fe}] * {
    pointer-events: none !important;
  }

  [${fe}]:not([${xn}]) {
    translate: var(${H}translate) !important;
  }

  [${fe}][style*='${H}scale'] {
    scale: var(${H}scale) !important;
    transform-origin: var(${H}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${fe}][popover]) {
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
  [${fe}]::backdrop, [${_t}overlay]:not([${fe}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function $p(e, a = "hidden") {
  return _(() => {
    const { element: t, manager: r } = e;
    if (!t || !r) return;
    const n = Vp(t, r.registry.droppables), i = [], o = LD(t), { remove: l } = o;
    return Up(n, o, i), jp(o, a), o.remove = () => {
      i.forEach((s) => s()), l.call(o);
    }, o;
  });
}
function Vp(e, a) {
  const t = /* @__PURE__ */ new Map();
  for (const r of a) if (r.element && (e === r.element || e.contains(r.element))) {
    const n = `${_t}${yn("dom-id")}`;
    r.element.setAttribute(n, ""), t.set(r, n);
  }
  return t;
}
function Up(e, a, t) {
  for (const [r, n] of e) {
    if (!r.element) continue;
    const i = `[${n}]`, o = a.matches(i) ? a : a.querySelector(i);
    if (r.element.removeAttribute(n), !o) continue;
    const l = r.element;
    r.proxy = o, o.removeAttribute(n), mn.set(l, o), t.push(() => {
      mn.delete(l), r.proxy = void 0;
    });
  }
}
function jp(e, a = "hidden") {
  e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(br, a);
}
function $s(e, a) {
  return e === a ? true : wa(e) === wa(a);
}
function Oo(e) {
  const { target: a } = e;
  "newState" in e && e.newState === "closed" && aa(a) && a.hasAttribute("popover") && requestAnimationFrame(() => ya(a));
}
function Tn(e) {
  return e.tagName === "TR";
}
function Fp(e, a, t) {
  const r = new MutationObserver((n) => {
    let i = false;
    for (const o of n) {
      if (o.target !== e) {
        i = true;
        continue;
      }
      if (o.type !== "attributes") continue;
      const l = o.attributeName;
      if (l.startsWith("aria-") || Lp.includes(l)) continue;
      const s = e.getAttribute(l);
      if (l === "style") {
        if (gt(e) && gt(a)) {
          const D = e.style;
          for (const p of Array.from(a.style)) D.getPropertyValue(p) === "" && a.style.removeProperty(p);
          for (const p of Array.from(D)) {
            if (Wp.includes(p) || p.startsWith(H)) continue;
            const g = D.getPropertyValue(p);
            a.style.setProperty(p, g);
          }
        }
      } else s !== null ? a.setAttribute(l, s) : a.removeAttribute(l);
    }
    i && t && a.replaceChildren(...e.cloneNode(true).childNodes);
  });
  return r.observe(e, { attributes: true, subtree: true, childList: true }), r;
}
function Kp(e, a, t) {
  const r = new MutationObserver((n) => {
    for (const i of n) if (i.addedNodes.length !== 0) for (const o of Array.from(i.addedNodes)) {
      if (o.contains(e) && e.nextElementSibling !== a) {
        e.insertAdjacentElement("afterend", a), ya(t);
        return;
      }
      if (o.contains(a) && a.previousElementSibling !== e) {
        a.insertAdjacentElement("beforebegin", e), ya(t);
        return;
      }
    }
    e.isConnected && a.isConnected && e.nextElementSibling !== a && (e.insertAdjacentElement("afterend", a), ya(t));
  });
  return r.observe(e.ownerDocument.body, { childList: true, subtree: true }), r;
}
function Hp(e) {
  return new ResizeObserver(() => {
    var a, t, r;
    const n = new me(e.placeholder, { frameTransform: e.frameTransform, ignoreTransforms: true }), i = (a = e.transformOrigin) != null ? a : { x: 1, y: 1 }, o = (e.width - n.width) * i.x + e.delta.x, l = (e.height - n.height) * i.y + e.delta.y, s = cs();
    if (e.styles.set({ width: n.width - e.widthOffset, height: n.height - e.heightOffset, top: e.top + l + s.y, left: e.left + o + s.x }, H), (t = e.getElementMutationObserver()) == null || t.takeRecords(), Tn(e.element) && Tn(e.placeholder)) {
      const P = Array.from(e.element.cells), y = Array.from(e.placeholder.cells);
      e.getSavedCellWidths() || e.setSavedCellWidths(P.map((v) => v.style.width));
      for (const [v, u] of P.entries()) {
        const h = y[v];
        u.style.width = `${h.getBoundingClientRect().width}px`;
      }
    }
    const D = (r = e.getTranslate()) != null ? r : { x: 0, y: 0 }, p = e.left + o + s.x + D.x, g = e.top + l + s.y + D.y, c = n.width - e.widthOffset, d = n.height - e.heightOffset, m = e.frameTransform;
    e.dragOperation.shape = new de(p * m.scaleX + m.x, g * m.scaleY + m.y, c * m.scaleX, d * m.scaleY);
  });
}
var Bp = 250, Gp = "ease";
function Yp(e) {
  var a, t, r, n;
  const { animation: i } = e;
  if (typeof i == "function") {
    const u = i({ source: e.source, element: e.element, feedbackElement: e.feedbackElement, placeholder: e.placeholder, translate: e.translate, moved: e.moved });
    Promise.resolve(u).then(() => {
      e.cleanup(), requestAnimationFrame(e.restoreFocus);
    });
    return;
  }
  const { duration: o = Bp, easing: l = Gp } = i ?? {};
  ya(e.feedbackElement);
  const [, s] = (a = gs(e.feedbackElement, (u) => "translate" in u)) != null ? a : [];
  s?.pause();
  const D = (t = e.placeholder) != null ? t : e.element, p = { frameTransform: $s(e.feedbackElement, D) ? null : void 0 }, g = new me(e.feedbackElement, p), c = (r = ft(be(e.feedbackElement).translate)) != null ? r : e.translate, d = new me(D, p), m = de.delta(g, d, e.alignment), P = { x: c.x - m.x, y: c.y - m.y }, y = Math.round(g.intrinsicHeight) !== Math.round(d.intrinsicHeight) ? { minHeight: [`${g.intrinsicHeight}px`, `${d.intrinsicHeight}px`], maxHeight: [`${g.intrinsicHeight}px`, `${d.intrinsicHeight}px`] } : {}, v = Math.round(g.intrinsicWidth) !== Math.round(d.intrinsicWidth) ? { minWidth: [`${g.intrinsicWidth}px`, `${d.intrinsicWidth}px`], maxWidth: [`${g.intrinsicWidth}px`, `${d.intrinsicWidth}px`] } : {};
  e.styles.set({ transition: e.transition }, H), e.feedbackElement.setAttribute(xn, ""), (n = e.getElementMutationObserver()) == null || n.takeRecords(), xs({ element: e.feedbackElement, keyframes: Mi(Pt(Pt({}, y), v), { translate: [`${c.x}px ${c.y}px 0`, `${P.x}px ${P.y}px 0`] }), options: { duration: mi(oe(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? o : 0, easing: l } }).then(() => {
    e.feedbackElement.removeAttribute(xn), s?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
  });
}
var Vs, wn, vt, Ti, Jt, Us, js, Ea = class extends (wn = G, Vs = [E], wn) {
  constructor(a, t) {
    super(a, t), V(this, Jt), V(this, Ti, K(vt, 8, this)), K(vt, 11, this), this.state = { initial: {}, current: {} };
    const r = a.registry.plugins.get(Ir), n = r?.register(zp);
    if (n) {
      const i = this.destroy.bind(this);
      this.destroy = () => {
        n(), i();
      };
    }
    this.registerEffect(ta(this, Jt, Us).bind(this, r)), this.registerEffect(ta(this, Jt, js));
  }
};
vt = La(wn);
Ti = /* @__PURE__ */ new WeakMap();
Jt = /* @__PURE__ */ new WeakSet();
Us = function(e) {
  const { overlay: a } = this;
  if (!a || !e) return;
  const t = sr(a);
  if (t) return e.addRoot(t);
};
js = function() {
  var e, a, t, r, n, i, o;
  const { state: l, manager: s, options: D } = this, { dragOperation: p } = s, { position: g, source: c, status: d } = p;
  if (d.idle) {
    l.current = {}, l.initial = {};
    return;
  }
  if (!c) return;
  const { element: m } = c, P = c.pluginConfig(Ea), y = (a = (e = P?.feedback) != null ? e : D?.feedback) != null ? a : "default", v = typeof y == "function" ? y(c, s) : y;
  if (!m || v === "none" || !d.initialized || d.initializing) return;
  const { initial: u } = l, h = (t = this.overlay) != null ? t : m, f = ea(h), b = ea(m), M = !$s(m, h), w = new me(m, { frameTransform: M ? b : null, ignoreTransforms: !M }), A = { x: b.scaleX / f.scaleX, y: b.scaleY / f.scaleY };
  let { width: k, height: q, top: le, left: Ce } = w;
  M && (k = k / A.x, q = q / A.y);
  const Ie = new dp(h), Wa = be(m), { transition: zi, translate: $i, boxSizing: Pg, paddingBlockStart: vg, paddingBlockEnd: yg, paddingInlineStart: Mg, paddingInlineEnd: Og, borderInlineStartWidth: xg, borderInlineEndWidth: Tg, borderBlockStartWidth: wg, borderBlockEndWidth: _g } = Wa, It = zi.split(",").filter((S) => !/^\s*(transform|translate|scale)\b/.test(S)).join(","), Ue = Cr(Wa), Eg = Wa.transform, Vi = v === "clone", Ui = Pg === "content-box", ji = Ui ? parseInt(Mg) + parseInt(Og) + parseInt(xg) + parseInt(Tg) : 0, Fi = Ui ? parseInt(vg) + parseInt(yg) + parseInt(wg) + parseInt(_g) : 0, ae = v !== "move" && !this.overlay ? $p(c, Vi ? "clone" : "hidden") : null, Nr = _(() => mt(s.dragOperation.activatorEvent));
  if (!u.translate) {
    if (this.overlay && Ue) u.translate = { x: Ue.x, y: Ue.y };
    else if ($i !== "none") {
      const S = ft($i);
      S && (u.translate = S);
    }
  }
  if (!u.transformOrigin) {
    const S = _(() => g.current), U = Ce + ((r = Ue?.x) != null ? r : 0), te = le + ((n = Ue?.y) != null ? n : 0);
    u.transformOrigin = { x: (S.x - U * f.scaleX - f.x) / (k * f.scaleX), y: (S.y - te * f.scaleY - f.y) / (q * f.scaleY) };
  }
  const { transformOrigin: sa } = u, Ki = le * f.scaleY + f.y, Hi = Ce * f.scaleX + f.x;
  if (!u.coordinates && (u.coordinates = { x: Hi, y: Ki }, A.x !== 1 || A.y !== 1)) {
    const { scaleX: S, scaleY: U } = b, { x: te, y: Ae } = sa;
    u.coordinates.x += (k * S - k) * te, u.coordinates.y += (q * U - q) * Ae;
  }
  u.dimensions || (u.dimensions = { width: k, height: q }), u.frameTransform || (u.frameTransform = f);
  const Bi = { x: u.coordinates.x - Hi, y: u.coordinates.y - Ki }, Gi = { width: (u.dimensions.width * u.frameTransform.scaleX - k * f.scaleX) * sa.x, height: (u.dimensions.height * u.frameTransform.scaleY - q * f.scaleY) * sa.y }, Rr = { x: Bi.x / f.scaleX + Gi.width, y: Bi.y / f.scaleY + Gi.height }, Yi = { left: Ce + Rr.x, top: le + Rr.y };
  h.setAttribute(fe, "true");
  const Xi = _(() => p.transform), Zi = (i = u.translate) != null ? i : { x: 0, y: 0 }, Cg = Xi.x * f.scaleX + Zi.x, Ig = Xi.y * f.scaleY + Zi.y, Ji = cs();
  Ie.set({ width: k - ji, height: q - Fi, top: Yi.top + Ji.y, left: Yi.left + Ji.x, translate: `${Cg}px ${Ig}px 0`, transform: this.overlay ? "none" : Eg, transition: It ? `${It}, translate 0ms linear` : "translate 0ms linear", scale: M ? `${A.x} ${A.y}` : "", "transform-origin": `${sa.x * 100}% ${sa.y * 100}%` }, H), ae && (m.insertAdjacentElement("afterend", ae), D?.rootElement && (typeof D.rootElement == "function" ? D.rootElement(c) : D.rootElement).appendChild(m)), vn(h) && (h.hasAttribute("popover") || h.setAttribute("popover", "manual"), ya(h), h.addEventListener("beforetoggle", Oo));
  let je, kr, At;
  const Qi = Hp({ placeholder: ae, element: m, feedbackElement: h, frameTransform: f, transformOrigin: sa, width: k, height: q, top: le, left: Ce, widthOffset: ji, heightOffset: Fi, delta: Rr, styles: Ie, dragOperation: p, getTranslate: () => l.current.translate, getElementMutationObserver: () => je, getSavedCellWidths: () => At, setSavedCellWidths: (S) => {
    At = S;
  } }), eo = new me(h);
  _(() => p.shape = eo);
  const qr = oe(h), ao = (S) => {
    this.manager.actions.stop({ event: S });
  }, Ag = mi(qr);
  Nr && qr.addEventListener("resize", ao), _(() => c.status) === "idle" && requestAnimationFrame(() => c.status = "dragging"), ae && (Qi.observe(ae), je = Fp(m, ae, Vi), kr = Kp(m, ae, h));
  const to = (o = s.dragOperation.source) == null ? void 0 : o.id, Sg = () => {
    var S;
    if (!Nr || to == null) return;
    const U = s.registry.draggables.get(to), te = (S = U?.handle) != null ? S : U?.element;
    _e(te) && te.focus();
  }, Lr = () => {
    je?.disconnect(), kr?.disconnect(), Qi.disconnect(), qr.removeEventListener("resize", ao), vn(h) && (h.removeEventListener("beforetoggle", Oo), h.removeAttribute("popover")), h.removeAttribute(fe), Ie.reset();
    const S = () => {
      var U;
      if (At && Tn(m)) {
        const Wr = Array.from(m.cells);
        for (const [St, ga] of Wr.entries()) ga.style.width = (U = At[St]) != null ? U : "";
      }
      c.status = "idle";
      const te = l.current.translate != null, Ae = p.status.dragging;
      ae && (!Ae && te || ae.parentElement !== h.parentElement) && h.isConnected && ae.replaceWith(h), ae?.remove();
    };
    h === this.overlay ? setTimeout(S, 0) : S();
  }, Ng = D?.dropAnimation, ro = this, Rg = Ot(() => {
    var S, U, te;
    const { transform: Ae, status: Wr } = p;
    if (!(!Ae.x && !Ae.y && !l.current.translate) && Wr.dragging) {
      const St = (S = u.translate) != null ? S : { x: 0, y: 0 }, ga = { x: Ae.x / f.scaleX + St.x, y: Ae.y / f.scaleY + St.y }, no = l.current.translate, kg = _(() => p.modifiers), zr = _(() => {
        var $a;
        return ($a = p.shape) == null ? void 0 : $a.current;
      }), za = D?.keyboardTransition, io = Nr && !Ag && za !== null ? `${(U = za?.duration) != null ? U : 250}ms ${(te = za?.easing) != null ? te : "cubic-bezier(0.25, 1, 0.5, 1)"}` : "0ms linear";
      if (Ie.set({ transition: It ? `${It}, translate ${io}` : `translate ${io}`, translate: `${ga.x}px ${ga.y}px 0` }, H), je?.takeRecords(), zr && zr !== eo && no && !kg.length) {
        const $a = ge.delta(ga, no);
        p.shape = de.from(zr.boundingRectangle).translate($a.x * f.scaleX, $a.y * f.scaleY);
      } else p.shape = new me(h);
      l.current.translate = ga;
    }
  }, function() {
    if (p.status.dropped) {
      this.dispose(), c.status = "dropping";
      const S = P?.dropAnimation !== void 0 ? P.dropAnimation : ro.dropAnimation !== void 0 ? ro.dropAnimation : Ng;
      let U = l.current.translate;
      const te = U != null;
      if (!U && m !== h && (U = { x: 0, y: 0 }), !U || S === null) {
        Lr();
        return;
      }
      s.renderer.rendering.then(() => {
        Yp({ source: c, element: m, feedbackElement: h, placeholder: ae, translate: U, moved: te, transition: zi, alignment: c.alignment, styles: Ie, animation: S ?? void 0, getElementMutationObserver: () => je, cleanup: Lr, restoreFocus: Sg });
      });
    }
  });
  return () => {
    Lr(), Rg();
  };
};
pe(vt, 4, "overlay", Vs, Ea, Ti);
la(vt, Ea);
Ea.configure = Ve(Ea);
var Fs = Ea, Va = true, Xp = false, Ks, Hs, Bs, Gs, ke, wi, _i;
Gs = (Bs = [E], T.Forward), Hs = (Ks = [E], T.Reverse);
var yt = class {
  constructor() {
    V(this, wi, K(ke, 8, this, Va)), K(ke, 11, this), V(this, _i, K(ke, 12, this, Va)), K(ke, 15, this);
  }
  isLocked(e) {
    return e === T.Idle ? false : e == null ? this[T.Forward] === Va && this[T.Reverse] === Va : this[e] === Va;
  }
  unlock(e) {
    e !== T.Idle && (this[e] = Xp);
  }
};
ke = La(null);
wi = /* @__PURE__ */ new WeakMap();
_i = /* @__PURE__ */ new WeakMap();
pe(ke, 4, Gs, Bs, yt, wi);
pe(ke, 4, Hs, Ks, yt, _i);
la(ke, yt);
var Zp = [T.Forward, T.Reverse], xo = class {
  constructor() {
    this.x = new yt(), this.y = new yt();
  }
  isLocked() {
    return this.x.isLocked() && this.y.isLocked();
  }
}, Jp = class extends G {
  constructor(e) {
    super(e);
    const a = ra(new xo());
    let t = null;
    this.signal = a, ie(() => {
      const { status: r } = e.dragOperation;
      if (!r.initialized) {
        t = null, a.value = new xo();
        return;
      }
      const { delta: n } = e.dragOperation.position;
      if (t) {
        const i = { x: To(n.x, t.x), y: To(n.y, t.y) }, o = a.peek();
        z(() => {
          for (const l of Pl) for (const s of Zp) i[l] === s && o[l].unlock(s);
          a.value = o;
        });
      }
      t = n;
    });
  }
  get current() {
    return this.signal.peek();
  }
};
function To(e, a) {
  return Math.sign(e - a);
}
var Ys, _n, Mt, Ei, Ne, En, Et = class extends (_n = Tt, Ys = [E], _n) {
  constructor(e) {
    super(e), V(this, Ei, K(Mt, 8, this, false)), K(Mt, 11, this), V(this, Ne), V(this, En, () => {
      if (!N(this, Ne)) return;
      const { element: i, by: o } = N(this, Ne);
      o.y && (i.scrollTop += o.y), o.x && (i.scrollLeft += o.x);
    }), this.scroll = (i, o) => {
      var l;
      if (this.disabled) return false;
      const s = this.getScrollableElements();
      if (!s) return J(this, Ne, void 0), false;
      const { position: D } = this.manager.dragOperation, p = D?.current;
      if (p) {
        const { by: g } = i ?? {}, c = g ? { x: wo(g.x), y: wo(g.y) } : void 0, d = c ? void 0 : this.scrollIntentTracker.current;
        if (d?.isLocked()) return false;
        for (const m of s) {
          const P = Pi(m, g);
          if (P.x || P.y) {
            const { speed: y, direction: v } = Ms(m, p, c, o?.acceleration, o?.threshold);
            if (d) for (const u of Pl) d[u].isLocked(v[u]) && (y[u] = 0, v[u] = 0);
            if (v.x || v.y) {
              const { x: u, y: h } = g ?? v, f = u * y.x, b = h * y.y;
              if (f || b) {
                const M = (l = N(this, Ne)) == null ? void 0 : l.by;
                if (this.autoScrolling && M && (M.x && !f || M.y && !b)) continue;
                return J(this, Ne, { element: m, by: { x: f, y: b } }), pr.schedule(N(this, En)), true;
              }
            }
          }
        }
      }
      return J(this, Ne, void 0), false;
    };
    let a = null, t = null;
    const r = tn(() => {
      const { position: i, source: o } = e.dragOperation;
      if (!i) return null;
      const l = ds(sr(o?.element), i.current);
      return l && (a = l), l ?? a;
    }), n = tn(() => {
      const i = r.value, { documentElement: o } = ka(i);
      if (!i || i === o) {
        const { target: l } = e.dragOperation, s = l?.element;
        if (s) {
          const D = cr(s, { excludeElement: false });
          return t = D, D;
        }
      }
      if (i) {
        const l = cr(i, { excludeElement: false });
        return this.autoScrolling && t && l.size < t?.size ? t : (t = l, l);
      }
      return t = null, null;
    }, rn);
    this.getScrollableElements = () => n.value, this.scrollIntentTracker = new Jp(e), this.destroy = e.monitor.addEventListener("dragmove", (i) => {
      this.disabled || i.defaultPrevented || !mt(e.dragOperation.activatorEvent) || !i.by || this.scroll({ by: i.by }) && i.preventDefault();
    });
  }
};
Mt = La(_n);
Ei = /* @__PURE__ */ new WeakMap();
Ne = /* @__PURE__ */ new WeakMap();
En = /* @__PURE__ */ new WeakMap();
pe(Mt, 4, "autoScrolling", Ys, Et, Ei);
la(Mt, Et);
function wo(e) {
  return e > 0 ? T.Forward : e < 0 ? T.Reverse : T.Idle;
}
var Qp = class {
  constructor(e) {
    this.scheduler = e, this.pending = false, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
      const { tasks: a, resolvers: t } = this;
      this.pending = false, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
      for (const r of a) r();
      for (const r of t) r();
    };
  }
  schedule(e) {
    return this.tasks.add(e), this.pending || (this.pending = true, this.scheduler(this.flush)), new Promise((a) => this.resolvers.add(a));
  }
}, eu = new Qp((e) => {
  typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), au = 10, Cn = class extends G {
  constructor(a, t) {
    super(a, t);
    const r = a.registry.plugins.get(Et);
    if (!r) throw new Error("AutoScroller plugin depends on Scroller plugin");
    this.destroy = ie(() => {
      var n, i, o;
      if (this.disabled) return;
      const { position: l, status: s } = a.dragOperation;
      if (s.dragging) {
        const D = { acceleration: (n = this.options) == null ? void 0 : n.acceleration, threshold: typeof ((i = this.options) == null ? void 0 : i.threshold) == "number" ? { x: this.options.threshold, y: this.options.threshold } : (o = this.options) == null ? void 0 : o.threshold };
        if (r.scroll(void 0, D)) {
          r.autoScrolling = true;
          const g = setInterval(() => eu.schedule(() => r.scroll(void 0, D)), au);
          return () => {
            clearInterval(g);
          };
        } else r.autoScrolling = false;
      }
    });
  }
};
Cn.configure = Ve(Cn);
var Ci = Cn, _o = { capture: true, passive: true }, Qa, tu = class extends Tt {
  constructor(e) {
    super(e), V(this, Qa), this.handleScroll = () => {
      N(this, Qa) == null && J(this, Qa, setTimeout(() => {
        this.manager.collisionObserver.forceUpdate(false), J(this, Qa, void 0);
      }, 50));
    };
    const { dragOperation: a } = this.manager;
    this.destroy = ie(() => {
      var t, r, n;
      if (a.status.dragging) {
        const o = (n = (r = (t = a.source) == null ? void 0 : t.element) == null ? void 0 : r.ownerDocument) != null ? n : document;
        return o.addEventListener("scroll", this.handleScroll, _o), () => {
          o.removeEventListener("scroll", this.handleScroll, _o);
        };
      }
    });
  }
};
Qa = /* @__PURE__ */ new WeakMap();
var ru = "* { user-select: none !important; -webkit-user-select: none !important; }", nu = class extends G {
  constructor(e) {
    super(e), this.manager = e;
    const a = e.registry.plugins.get(Ir), t = a?.register(ru);
    if (this.destroy = ie(() => {
      const { dragOperation: r } = this.manager;
      if (r.status.initialized) return Br(), document.addEventListener("selectionchange", Br, { capture: true }), () => {
        document.removeEventListener("selectionchange", Br, { capture: true });
      };
    }), t) {
      const r = this.destroy.bind(this);
      this.destroy = () => {
        t(), r();
      };
    }
  }
};
function Br() {
  var e;
  (e = document.getSelection()) == null || e.removeAllRanges();
}
var et = Object.freeze({ offset: 10, keyboardCodes: { start: ["Space", "Enter"], cancel: ["Escape"], end: ["Space", "Enter", "Tab"], up: ["ArrowUp"], down: ["ArrowDown"], left: ["ArrowLeft"], right: ["ArrowRight"] }, preventActivation(e, a) {
  var t;
  const r = (t = a.handle) != null ? t : a.element;
  return e.target !== r;
} }), ba, fr = class extends Oa {
  constructor(a, t) {
    super(a), this.manager = a, this.options = t, V(this, ba, []), this.listeners = new hs(), this.handleSourceKeyDown = (r, n, i) => {
      if (this.disabled || r.defaultPrevented || !aa(r.target) || n.disabled) return;
      const { keyboardCodes: o = et.keyboardCodes, preventActivation: l = et.preventActivation } = i ?? {};
      o.start.includes(r.code) && this.manager.dragOperation.status.idle && (l?.(r, n) || this.handleStart(r, n, i));
    };
  }
  bind(a, t = this.options) {
    return ie(() => {
      var n;
      const i = (n = a.handle) != null ? n : a.element, o = (l) => {
        mt(l) && this.handleSourceKeyDown(l, a, t);
      };
      if (i) return i.addEventListener("keydown", o), () => {
        i.removeEventListener("keydown", o);
      };
    });
  }
  handleStart(a, t, r) {
    const { element: n } = t;
    if (!n) throw new Error("Source draggable does not have an associated element");
    a.preventDefault(), a.stopImmediatePropagation(), Os(n);
    const { center: i } = new me(n);
    if (this.manager.actions.start({ event: a, coordinates: { x: i.x, y: i.y }, source: t }).signal.aborted) return this.cleanup();
    this.sideEffects();
    const l = ka(n), s = [this.listeners.bind(l, [{ type: "keydown", listener: (D) => this.handleKeyDown(D, t, r), options: { capture: true } }])];
    N(this, ba).push(...s);
  }
  handleKeyDown(a, t, r) {
    const { keyboardCodes: n = et.keyboardCodes } = r ?? {};
    if (Da(a, [...n.end, ...n.cancel])) {
      a.preventDefault();
      const i = Da(a, n.cancel);
      this.handleEnd(a, i);
      return;
    }
    Da(a, n.up) ? this.handleMove("up", a) : Da(a, n.down) && this.handleMove("down", a), Da(a, n.left) ? this.handleMove("left", a) : Da(a, n.right) && this.handleMove("right", a);
  }
  handleEnd(a, t) {
    this.manager.actions.stop({ event: a, canceled: t }), this.cleanup();
  }
  handleMove(a, t) {
    var r, n;
    const { shape: i } = this.manager.dragOperation, o = t.shiftKey ? 5 : 1;
    let l = { x: 0, y: 0 }, s = (n = (r = this.options) == null ? void 0 : r.offset) != null ? n : et.offset;
    if (typeof s == "number" && (s = { x: s, y: s }), !!i) {
      switch (a) {
        case "up":
          l = { x: 0, y: -s.y * o };
          break;
        case "down":
          l = { x: 0, y: s.y * o };
          break;
        case "left":
          l = { x: -s.x * o, y: 0 };
          break;
        case "right":
          l = { x: s.x * o, y: 0 };
          break;
      }
      (l.x || l.y) && (t.preventDefault(), this.manager.actions.move({ event: t, by: l }));
    }
  }
  sideEffects() {
    const a = this.manager.registry.plugins.get(Ci);
    a?.disabled === false && (a.disable(), N(this, ba).push(() => {
      a.enable();
    }));
  }
  cleanup() {
    N(this, ba).forEach((a) => a()), J(this, ba, []);
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
ba = /* @__PURE__ */ new WeakMap();
fr.configure = Ve(fr);
fr.defaults = et;
var iu = fr;
function Da(e, a) {
  return a.includes(e.code);
}
var Ze, ou = class extends Zl {
  constructor() {
    super(...arguments), V(this, Ze);
  }
  onEvent(e) {
    switch (e.type) {
      case "pointerdown":
        J(this, Ze, Ta(e));
        break;
      case "pointermove":
        if (!N(this, Ze)) return;
        const { x: a, y: t } = Ta(e), r = { x: a - N(this, Ze).x, y: t - N(this, Ze).y }, { tolerance: n } = this.options;
        if (n && cn(r, n)) {
          this.abort();
          return;
        }
        cn(r, this.options.value) && this.activate(e);
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
var fa, Je, lu = class extends Zl {
  constructor() {
    super(...arguments), V(this, fa), V(this, Je);
  }
  onEvent(e) {
    switch (e.type) {
      case "pointerdown":
        J(this, Je, Ta(e)), J(this, fa, setTimeout(() => this.activate(e), this.options.value));
        break;
      case "pointermove":
        if (!N(this, Je)) return;
        const { x: a, y: t } = Ta(e), r = { x: a - N(this, Je).x, y: t - N(this, Je).y };
        cn(r, this.options.tolerance) && this.abort();
        break;
      case "pointerup":
        this.abort();
        break;
    }
  }
  abort() {
    N(this, fa) && (clearTimeout(N(this, fa)), J(this, Je, void 0), J(this, fa, void 0));
  }
};
fa = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
var qe = class {
};
qe.Delay = lu;
qe.Distance = ou;
var In = Object.freeze({ activationConstraints(e, a) {
  var t;
  const { pointerType: r, target: n } = e;
  if (!(r === "mouse" && aa(n) && (a.handle === n || (t = a.handle) != null && t.contains(n)))) return r === "touch" ? [new qe.Delay({ value: 250, tolerance: 5 })] : bp(n) && !e.defaultPrevented ? [new qe.Delay({ value: 200, tolerance: 0 })] : [new qe.Delay({ value: 200, tolerance: 10 }), new qe.Distance({ value: 5 })];
}, preventActivation(e, a) {
  var t;
  const { target: r } = e;
  if (r === a.element || r === a.handle || !aa(r) || (t = a.handle) != null && t.contains(r)) return false;
  const n = zD(r);
  return n === a.element ? false : !!n;
} }), ma, mr = class extends Oa {
  constructor(a, t) {
    super(a), this.manager = a, this.options = t, V(this, ma, /* @__PURE__ */ new Set()), this.listeners = new hs(), this.latest = { event: void 0, coordinates: void 0 }, this.handleMove = () => {
      const { event: r, coordinates: n } = this.latest;
      !r || !n || this.manager.actions.move({ event: r, to: n });
    }, this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  activationConstraints(a, t, r = this.options) {
    const { activationConstraints: n = In.activationConstraints } = r ?? {};
    return typeof n == "function" ? n(a, t) : n;
  }
  bind(a, t = this.options) {
    return ie(() => {
      var n;
      const i = new AbortController(), { signal: o } = i, l = (D) => {
        hp(D) && this.handlePointerDown(D, a, t);
      };
      let s = [(n = a.handle) != null ? n : a.element];
      t?.activatorElements && (Array.isArray(t.activatorElements) ? s = t.activatorElements : s = t.activatorElements(a));
      for (const D of s) D && (Du(D.ownerDocument.defaultView), D.addEventListener("pointerdown", l, { signal: o }));
      return () => i.abort();
    });
  }
  handlePointerDown(a, t, r) {
    if (this.disabled || !a.isPrimary || a.button !== 0 || !aa(a.target) || t.disabled || su(a) || !this.manager.dragOperation.status.idle) return;
    const { preventActivation: n = In.preventActivation } = r ?? {};
    if (n?.(a, t)) return;
    const { target: i } = a, o = _e(i) && i.draggable && i.getAttribute("draggable") === "true", l = ea(t.element), { x: s, y: D } = Ta(a);
    this.initialCoordinates = { x: s * l.scaleX + l.x, y: D * l.scaleY + l.y };
    const p = this.activationConstraints(a, t, r);
    a.sensor = this;
    const g = new AD(p, (P) => this.handleStart(t, P));
    g.signal.onabort = () => this.handleCancel(a), g.onEvent(a), this.controller = g;
    const c = fn(), d = this.listeners.bind(c, [{ type: "pointermove", listener: (P) => this.handlePointerMove(P, t) }, { type: "pointerup", listener: this.handlePointerUp, options: { capture: true } }, { type: "pointercancel", listener: this.handleCancel }, { type: "dragstart", listener: o ? this.handleCancel : Lt, options: { capture: true } }]), m = () => {
      d(), this.initialCoordinates = void 0;
    };
    N(this, ma).add(m);
  }
  handlePointerMove(a, t) {
    var r, n;
    if (((r = this.controller) == null ? void 0 : r.activated) === false) {
      (n = this.controller) == null || n.onEvent(a);
      return;
    }
    if (this.manager.dragOperation.status.dragging) {
      const i = Ta(a), o = ea(t.element);
      i.x = i.x * o.scaleX + o.x, i.y = i.y * o.scaleY + o.y, a.preventDefault(), a.stopPropagation(), this.latest.event = a, this.latest.coordinates = i, pr.schedule(this.handleMove);
    }
  }
  handlePointerUp(a) {
    const { status: t } = this.manager.dragOperation;
    if (!t.idle) {
      a.preventDefault(), a.stopPropagation();
      const r = !t.initialized;
      this.manager.actions.stop({ event: a, canceled: r });
    }
    this.cleanup();
  }
  handleKeyDown(a) {
    a.key === "Escape" && (a.preventDefault(), this.handleCancel(a));
  }
  handleStart(a, t) {
    const { manager: r, initialCoordinates: n } = this;
    if (!n || !r.dragOperation.status.idle || t.defaultPrevented) return;
    if (r.actions.start({ coordinates: n, event: t, source: a }).signal.aborted) return this.cleanup();
    t.preventDefault();
    const l = ka(t.target).body;
    try {
      l.setPointerCapture(t.pointerId);
    } catch {
      this.handleCancel(t);
      return;
    }
    const s = aa(t.target) ? [t.target, l] : l, D = this.listeners.bind(s, [{ type: "touchmove", listener: Lt, options: { passive: false } }, { type: "click", listener: Lt }, { type: "contextmenu", listener: Lt }, { type: "keydown", listener: this.handleKeyDown }]);
    N(this, ma).add(D);
  }
  handleCancel(a) {
    const { dragOperation: t } = this.manager;
    t.status.initialized && this.manager.actions.stop({ event: a, canceled: true }), this.cleanup();
  }
  cleanup() {
    const { controller: a } = this;
    this.controller = void 0, a && !a.signal.aborted && a.abort(), this.latest = { event: void 0, coordinates: void 0 }, N(this, ma).forEach((t) => t()), N(this, ma).clear();
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
ma = /* @__PURE__ */ new WeakMap();
mr.configure = Ve(mr);
mr.defaults = In;
var Xs = mr;
function su(e) {
  return "sensor" in e;
}
function Lt(e) {
  e.preventDefault();
}
function gu() {
}
var Eo = /* @__PURE__ */ new WeakSet();
function Du(e) {
  !e || Eo.has(e) || (e.addEventListener("touchmove", gu, { capture: false, passive: false }), Eo.add(e));
}
var Ma = { modifiers: [], plugins: [As, Ci, qp, Fs, nu], sensors: [Xs, iu] }, Co = class extends RD {
  constructor(e = {}) {
    const a = ce(e.plugins, Ma.plugins), t = ce(e.sensors, Ma.sensors), r = ce(e.modifiers, Ma.modifiers);
    super(Mi(Pt({}, e), { plugins: [tu, Et, Ir, ...a], sensors: t, modifiers: r }));
  }
}, Zs, Js, An, Le, Ii, Ai, Ar = class extends (An = Pe, Js = [E], Zs = [E], An) {
  constructor(e, a) {
    var t = e, { element: r, effects: n = () => [], handle: i } = t, o = Cs(t, ["element", "effects", "handle"]);
    super(Pt({ effects: () => [...n(), () => {
      var l, s;
      const { manager: D } = this;
      if (!D) return;
      const g = ((s = (l = this.sensors) == null ? void 0 : l.map(dt)) != null ? s : [...D.sensors]).map((c) => {
        const d = c instanceof Oa ? c : D.registry.register(c.plugin), m = c instanceof Oa ? void 0 : c.options;
        return d.bind(this, m);
      });
      return function() {
        g.forEach((d) => d());
      };
    }] }, o), a), V(this, Ii, K(Le, 8, this)), K(Le, 11, this), V(this, Ai, K(Le, 12, this)), K(Le, 15, this), this.element = r, this.handle = i;
  }
};
Le = La(An);
Ii = /* @__PURE__ */ new WeakMap();
Ai = /* @__PURE__ */ new WeakMap();
pe(Le, 4, "handle", Js, Ar, Ii);
pe(Le, 4, "element", Zs, Ar, Ai);
la(Le, Ar);
var Qs, eg, Sn, We, Si, Gr, ag, tg, pt, Ni, Ri = class extends (Sn = ve, eg = [E], Qs = [E], Sn) {
  constructor(e, a) {
    var t = e, { element: r, effects: n = () => [] } = t, i = Cs(t, ["element", "effects"]);
    const { collisionDetector: o = Ts } = i, l = (D) => {
      const { manager: p, element: g } = this;
      if (!g || D === null) {
        this.shape = void 0;
        return;
      }
      if (!p) return;
      const c = new me(g), d = _(() => this.shape);
      return c && d?.equals(c) ? d : (this.shape = c, c);
    }, s = ra(false);
    super(Mi(Pt({}, i), { collisionDetector: o, effects: () => [...n(), () => {
      const { element: D, manager: p } = this;
      if (!p) return;
      const { dragOperation: g } = p, { source: c } = g;
      s.value = !!(c && g.status.initialized && D && !this.disabled && this.accepts(c));
    }, () => {
      const { element: D } = this;
      if (s.value && D) {
        const p = new YD(D, l);
        return () => {
          p.disconnect(), this.shape = void 0;
        };
      }
    }, () => {
      var D;
      if ((D = this.manager) != null && D.dragOperation.status.initialized) return () => {
        this.shape = void 0;
      };
    }] }), a), V(this, pt), V(this, Si, K(We, 8, this)), K(We, 11, this), V(this, Ni, K(We, 12, this)), K(We, 15, this), this.element = r, this.refreshShape = () => l();
  }
  set element(e) {
    J(this, pt, e, tg);
  }
  get element() {
    var e;
    return (e = this.proxy) != null ? e : N(this, pt, ag);
  }
};
We = La(Sn);
Si = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakSet();
Ni = /* @__PURE__ */ new WeakMap();
Gr = pe(We, 20, "#element", eg, pt, Si), ag = Gr.get, tg = Gr.set;
pe(We, 4, "proxy", Qs, Ri, Ni);
la(We, Ri);
function pu() {
  const e = rr(0), a = rr(null);
  let t = null;
  tr(e, () => {
    t?.(), a.value = null;
  }, { flush: "post" });
  const r = { get rendering() {
    var i;
    return (i = a.value) != null ? i : Promise.resolve();
  } };
  function n(i) {
    a.value || (a.value = new Promise((o) => {
      t = o;
    })), i(), Lg(() => {
      e.value++;
    });
  }
  return { renderer: r, trackRendering: n };
}
function uu(e) {
  const a = /* @__PURE__ */ Symbol(`${e}Context`);
  return [t, r];
  function t(n) {
    const i = Go(a, n);
    if (i || i === null) return i;
    throw new Error(`Injection \`${a.toString()}\` not found. Component must be used within \`${e}\``);
  }
  function r(n) {
    return Yo(a, n), n;
  }
}
var [cu, du] = uu("DragDropProvider"), hu = Bo({ props: ["manager", "plugins", "sensors", "modifiers"], emits: ["beforeDragStart", "collision", "dragStart", "dragMove", "dragOver", "dragEnd"], __typeProps: {}, __typeEmits: {}, setup(e, { emit: a, slots: t }) {
  var r;
  const { renderer: n, trackRendering: i } = pu(), o = qn((r = e.manager) != null ? r : new Co(e));
  return tr([() => e.manager], () => {
    var l;
    const s = (l = e.manager) != null ? l : new Co(e), D = [];
    s.renderer = n, D.push(s.monitor.addEventListener("beforedragstart", (p, g) => i(() => a("beforeDragStart", p, g)))), D.push(s.monitor.addEventListener("dragstart", (p, g) => a("dragStart", p, g))), D.push(s.monitor.addEventListener("dragover", (p, g) => i(() => a("dragOver", p, g)))), D.push(s.monitor.addEventListener("dragmove", (p, g) => i(() => a("dragMove", p, g)))), D.push(s.monitor.addEventListener("dragend", (p, g) => i(() => a("dragEnd", p, g)))), D.push(s.monitor.addEventListener("collision", (p, g) => a("collision", p, g))), o.value = s, Ln(() => D.forEach((p) => p()));
  }, { immediate: true }), yr(() => {
    o.value.plugins = ce(e.plugins, Ma.plugins), o.value.sensors = ce(e.sensors, Ma.sensors), o.value.modifiers = ce(e.modifiers, Ma.modifiers);
  }), du(Me(() => o.value)), qg(() => {
    e.manager || o.value.destroy();
  }), () => {
    var l;
    return (l = t.default) == null ? void 0 : l.call(t);
  };
} });
function bu() {
  return cu();
}
function fu(e) {
  const a = bu(), t = qn(e(a.value));
  return yr(() => {
    t.value.manager = a.value, Ln(t.value.register());
  }), Me(() => t.value);
}
var mu = Object.create, rg = Object.defineProperty, Pu = Object.defineProperties, vu = Object.getOwnPropertyDescriptor, yu = Object.getOwnPropertyDescriptors, Pr = Object.getOwnPropertySymbols, ng = Object.prototype.hasOwnProperty, ig = Object.prototype.propertyIsEnumerable, Mu = (e, a) => (a = Symbol[e]) ? a : /* @__PURE__ */ Symbol.for("Symbol." + e), Ct = (e) => {
  throw TypeError(e);
}, Nn = (e, a, t) => a in e ? rg(e, a, { enumerable: true, configurable: true, writable: true, value: t }) : e[a] = t, Yr = (e, a) => {
  for (var t in a || (a = {})) ng.call(a, t) && Nn(e, t, a[t]);
  if (Pr) for (var t of Pr(a)) ig.call(a, t) && Nn(e, t, a[t]);
  return e;
}, Xr = (e, a) => Pu(e, yu(a)), Ou = (e, a) => {
  var t = {};
  for (var r in e) ng.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && Pr) for (var r of Pr(e)) a.indexOf(r) < 0 && ig.call(e, r) && (t[r] = e[r]);
  return t;
}, xu = (e) => {
  var a;
  return [, , , mu((a = void 0) != null ? a : null)];
}, og = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], at = (e) => e !== void 0 && typeof e != "function" ? Ct("Function expected") : e, Tu = (e, a, t, r, n) => ({ kind: og[e], name: a, metadata: r, addInitializer: (i) => t._ ? Ct("Already initialized") : n.push(at(i || null)) }), wu = (e, a) => Nn(a, Mu("metadata"), e[3]), Wt = (e, a, t, r) => {
  for (var n = 0, i = e[a >> 1], o = i && i.length; n < o; n++) a & 1 ? i[n].call(t) : r = i[n].call(t, r);
  return r;
}, lg = (e, a, t, r, n, i) => {
  for (var o, l, s, D, p, g = a & 7, c = false, d = false, m = e.length + 1, P = og[g + 5], y = e[m - 1] = [], v = e[m] || (e[m] = []), u = (n = n.prototype, vu({ get [t]() {
    return tt(this, i);
  }, set [t](f) {
    return Qe(this, i, f);
  } }, t)), h = r.length - 1; h >= 0; h--) D = Tu(g, t, s = {}, e[3], v), D.static = c, D.private = d, p = D.access = { has: (f) => t in f }, p.get = (f) => f[t], p.set = (f, b) => f[t] = b, l = (0, r[h])({ get: u.get, set: u.set }, D), s._ = 1, l === void 0 ? at(l) && (u[P] = l) : typeof l != "object" || l === null ? Ct("Object expected") : (at(o = l.get) && (u.get = o), at(o = l.set) && (u.set = o), at(o = l.init) && y.unshift(o));
  return u && rg(n, t, u), n;
}, sg = (e, a, t) => a.has(e) || Ct("Cannot " + t), tt = (e, a, t) => (sg(e, a, "read from private field"), a.get(e)), Ua = (e, a, t) => a.has(e) ? Ct("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(e) : a.set(e, t), Qe = (e, a, t, r) => (sg(e, a, "write to private field"), a.set(e, t), t);
function Oe(e) {
  return e instanceof Li || e instanceof ug;
}
function _u(e) {
  return Oe(e.source) && Oe(e.target);
}
var zt = 10, Eu = class extends G {
  constructor(e) {
    super(e);
    const a = ie(() => {
      const { dragOperation: r } = e;
      if (mt(r.activatorEvent) && Oe(r.source) && r.status.initialized) {
        const n = e.registry.plugins.get(Et);
        if (n) return n.disable(), () => n.enable();
      }
    }), t = e.monitor.addEventListener("dragmove", (r, n) => {
      queueMicrotask(() => {
        if (this.disabled || r.defaultPrevented || !r.nativeEvent) return;
        const { dragOperation: i } = n;
        if (!mt(r.nativeEvent) || !Oe(i.source) || !i.shape) return;
        const { actions: o, collisionObserver: l, registry: s } = n, { by: D } = r;
        if (!D) return;
        const p = Cu(D), { source: g, target: c } = i, { center: d } = i.shape.current, m = [], P = [];
        z(() => {
          for (const b of s.droppables) {
            const { id: M } = b;
            if (!b.accepts(g) || M === c?.id && Oe(b) || !b.element) continue;
            let w = b.shape;
            const A = new me(b.element, { getBoundingClientRect: (k) => xa(k, void 0, 0.2) });
            !A.height || !A.width || (p == "down" && d.y + zt < A.center.y || p == "up" && d.y - zt > A.center.y || p == "left" && d.x - zt > A.center.x || p == "right" && d.x + zt < A.center.x) && (m.push(b), b.shape = A, P.push(() => b.shape = w));
          }
        }), r.preventDefault(), l.disable();
        const y = l.computeCollisions(m, vp);
        z(() => P.forEach((b) => b()));
        const [v] = y;
        if (!v) return;
        const { id: u } = v, { index: h, group: f } = g.sortable;
        o.setDropTarget(u).then(() => {
          const { source: b, target: M, shape: w } = i;
          if (!b || !Oe(b) || !w) return;
          const { index: A, group: k, target: q } = b.sortable, le = h !== A || f !== k, Ce = le ? q : M?.element;
          if (!Ce) return;
          Os(Ce);
          const Ie = new me(Ce);
          if (!Ie) return;
          const Wa = de.delta(Ie, de.from(w.current.boundingRectangle), b.alignment);
          o.move({ by: Wa }), le ? o.setDropTarget(b.id).then(() => l.enable()) : l.enable();
        });
      });
    });
    this.destroy = () => {
      t(), a();
    };
  }
};
function Cu(e) {
  const { x: a, y: t } = e;
  if (a > 0) return "right";
  if (a < 0) return "left";
  if (t > 0) return "down";
  if (t < 0) return "up";
}
var Iu = Object.defineProperty, Au = Object.defineProperties, Su = Object.getOwnPropertyDescriptors, Io = Object.getOwnPropertySymbols, Nu = Object.prototype.hasOwnProperty, Ru = Object.prototype.propertyIsEnumerable, Ao = (e, a, t) => a in e ? Iu(e, a, { enumerable: true, configurable: true, writable: true, value: t }) : e[a] = t, pa = (e, a) => {
  for (var t in a || (a = {})) Nu.call(a, t) && Ao(e, t, a[t]);
  if (Io) for (var t of Io(a)) Ru.call(a, t) && Ao(e, t, a[t]);
  return e;
}, ua = (e, a) => Au(e, Su(a));
function ku(e, a, t) {
  if (a === t) return e;
  const r = e.slice();
  return r.splice(t, 0, r.splice(a, 1)[0]), r;
}
function $t(e, a) {
  const t = String(a);
  return Object.prototype.hasOwnProperty.call(e, t) ? t : void 0;
}
function Zr(e) {
  return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function qu(e, a, t) {
  var r, n;
  const { source: i, target: o, canceled: l } = a.operation;
  if (!i || !o || l) return "preventDefault" in a && a.preventDefault(), e;
  const s = (h, f) => h === f || h !== null && typeof h == "object" && "id" in h && h.id === f;
  if (Array.isArray(e)) {
    const h = e.findIndex((b) => s(b, i.id)), f = e.findIndex((b) => s(b, o.id));
    if (h === -1 || f === -1) {
      if (Zr(i)) {
        const b = i.initialIndex, M = i.index;
        return b === M || b < 0 || b >= e.length ? ("preventDefault" in a && a.preventDefault(), e) : t(e, b, M);
      }
      return e;
    }
    if (!l && "index" in i && typeof i.index == "number") {
      const b = i.index;
      if (b !== h) return t(e, h, b);
    }
    return t(e, h, f);
  }
  const D = Object.entries(e);
  let p = -1, g, c = -1, d;
  for (const [h, f] of D) if (p === -1 && (p = f.findIndex((b) => s(b, i.id)), p !== -1 && (g = h)), c === -1 && (c = f.findIndex((b) => s(b, o.id)), c !== -1 && (d = h)), p !== -1 && c !== -1) break;
  if (p === -1 && Zr(i)) {
    const h = i.initialGroup == null ? void 0 : $t(e, i.initialGroup), f = i.initialIndex, b = i.group == null ? void 0 : $t(e, i.group), M = i.index;
    if (h == null || b == null || h === b && f === M) return "preventDefault" in a && a.preventDefault(), e;
    if (h === b) return ua(pa({}, e), { [h]: t(e[h], f, M) });
    const w = e[h][f];
    return ua(pa({}, e), { [h]: [...e[h].slice(0, f), ...e[h].slice(f + 1)], [b]: [...e[b].slice(0, M), w, ...e[b].slice(M)] });
  }
  if (!i.manager) return e;
  const { dragOperation: m } = i.manager, P = (n = (r = m.shape) == null ? void 0 : r.current.center) != null ? n : m.position.current;
  if (d == null) {
    const h = $t(e, o.id);
    if (h != null) {
      const f = o.shape && P.y > o.shape.center.y ? e[h].length : 0;
      d = h, c = f;
    }
  }
  if (g == null || d == null || g === d && p === c) {
    if (g != null && g === d && p === c && Zr(i)) {
      const h = i.group == null ? void 0 : $t(e, i.group), f = i.group != null && h !== g, b = i.index !== p;
      if (f || b) {
        const M = i.group == null ? g : h;
        if (M != null) {
          if (g === M) return ua(pa({}, e), { [g]: t(e[g], p, i.index) });
          const w = e[g][p];
          return ua(pa({}, e), { [g]: [...e[g].slice(0, p), ...e[g].slice(p + 1)], [M]: [...e[M].slice(0, i.index), w, ...e[M].slice(i.index)] });
        }
      }
    }
    return "preventDefault" in a && a.preventDefault(), e;
  }
  if (g === d) return ua(pa({}, e), { [g]: t(e[g], p, c) });
  const v = o.shape && Math.round(P.y) > Math.round(o.shape.center.y) ? 1 : 0, u = e[g][p];
  return ua(pa({}, e), { [g]: [...e[g].slice(0, p), ...e[g].slice(p + 1)], [d]: [...e[d].slice(0, c + v), u, ...e[d].slice(c + v)] });
}
function Lu(e, a) {
  return qu(e, a, ku);
}
function So(e) {
  const a = /* @__PURE__ */ new Map();
  for (const [, t] of e) for (const r of t) a.set(r.id, r.index);
  return a;
}
function No(e, a, t) {
  var r;
  for (const [n, i] of a) for (const o of i) {
    const l = e.get(o.id);
    if (o.index !== l || o.group !== n || !((r = t.get(n)) != null && r.has(o))) return true;
  }
  return false;
}
var Ro = "__default__", Wu = class extends G {
  constructor(e) {
    super(e);
    const a = () => {
      const r = /* @__PURE__ */ new Map();
      for (const n of e.registry.droppables) if (n instanceof Li) {
        const { sortable: i } = n, { group: o } = i;
        let l = r.get(o);
        l || (l = /* @__PURE__ */ new Set(), r.set(o, l)), l.add(i);
      }
      return r;
    }, t = [e.monitor.addEventListener("dragover", (r, n) => {
      if (this.disabled) return;
      const { dragOperation: i } = n, { source: o, target: l } = i;
      if (!Oe(o) || !Oe(l) || o.sortable === l.sortable) return;
      const s = a(), D = So(s), p = o.sortable.group === l.sortable.group, g = s.get(o.sortable.group), c = p ? g : s.get(l.sortable.group);
      !g || !c || queueMicrotask(() => {
        r.defaultPrevented || n.renderer.rendering.then(() => {
          var d, m;
          const P = a();
          if (No(D, s, P)) return;
          const y = o.sortable.element, v = l.sortable.element;
          if (!v || !y || !p && l.id === o.sortable.group) return;
          const u = Vt(g), h = p ? u : Vt(c), f = (d = o.sortable.group) != null ? d : Ro, b = (m = l.sortable.group) != null ? m : Ro, M = { [f]: u, [b]: h }, w = Lu(M, r);
          if (M === w) return;
          const A = w[b].indexOf(o.sortable), k = w[b].indexOf(l.sortable);
          n.collisionObserver.disable(), ko(y, A, v, k), z(() => {
            for (const [q, le] of w[f].entries()) le.index = q;
            if (!p) for (const [q, le] of w[b].entries()) le.group = l.sortable.group, le.index = q;
          }), n.actions.setDropTarget(o.id).then(() => n.collisionObserver.enable());
        });
      });
    }), e.monitor.addEventListener("dragend", (r, n) => {
      if (!r.canceled) return;
      const { dragOperation: i } = n, { source: o } = i;
      Oe(o) && (o.sortable.initialIndex === o.sortable.index && o.sortable.initialGroup === o.sortable.group || queueMicrotask(() => {
        const l = a(), s = So(l), D = l.get(o.sortable.initialGroup);
        D && n.renderer.rendering.then(() => {
          const p = a();
          if (No(s, l, p)) return;
          const g = Vt(D), c = Vt(D, $u), d = o.sortable.element, m = c.indexOf(o.sortable), P = g[m], y = P?.element;
          !P || !y || !d || (ko(d, P.index, y, o.index), z(() => {
            for (const v of l.values()) {
              const u = Array.from(v).values();
              for (const h of u) h.index = h.initialIndex, h.group = h.initialGroup;
            }
          }));
        });
      }));
    })];
    this.destroy = () => {
      for (const r of t) r();
    };
  }
};
function ko(e, a, t, r) {
  const n = r < a ? "afterend" : "beforebegin";
  t.insertAdjacentElement(n, e);
}
function zu(e, a) {
  return e.index - a.index;
}
function $u(e, a) {
  return e.initialIndex - a.initialIndex;
}
function Vt(e, a = zu) {
  return Array.from(e).sort(a);
}
var qo = [Eu, Wu], gg = { duration: 250, easing: "cubic-bezier(0.25, 1, 0.5, 1)", idle: false };
function Lo(e) {
  var a, t;
  return typeof e == "boolean" ? { draggable: e, droppable: e } : { draggable: (a = e?.draggable) != null ? a : false, droppable: (t = e?.droppable) != null ? t : false };
}
var Ut = new iD(), Dg, pg, ze, ki, rt, nt, qi, Pa;
pg = [E], Dg = [E];
var Sr = class {
  constructor(e, a) {
    Ua(this, ki, Wt(ze, 8, this)), Wt(ze, 11, this), Ua(this, rt), Ua(this, nt), Ua(this, qi, Wt(ze, 12, this)), Wt(ze, 15, this), Ua(this, Pa), this.register = () => (z(() => {
      var m, P;
      (m = this.manager) == null || m.registry.register(this.droppable), (P = this.manager) == null || P.registry.register(this.draggable);
    }), () => this.unregister()), this.unregister = () => {
      z(() => {
        var m, P;
        (m = this.manager) == null || m.registry.unregister(this.droppable), (P = this.manager) == null || P.registry.unregister(this.draggable);
      });
    }, this.destroy = () => {
      z(() => {
        this.droppable.destroy(), this.draggable.destroy();
      });
    };
    var t = e, { effects: r = () => [], disabled: n, group: i, index: o, sensors: l, type: s, transition: D = gg, plugins: p } = t, g = Ou(t, ["effects", "disabled", "group", "index", "sensors", "type", "transition", "plugins"]);
    const c = ce(p, qo), d = Lo(n);
    this.droppable = new Li(Xr(Yr({}, g), { disabled: d.droppable }), a, this), this.draggable = new ug(Xr(Yr({}, g), { disabled: d.draggable, plugins: c, effects: () => [() => {
      var m, P, y;
      const v = (m = this.manager) == null ? void 0 : m.dragOperation.status;
      v?.initializing && this.id === ((y = (P = this.manager) == null ? void 0 : P.dragOperation.source) == null ? void 0 : y.id) && Ut.clear(this.manager), v?.dragging && Ut.set(this.manager, this.id, _(() => ({ initialIndex: this.index, initialGroup: this.group })));
    }, () => {
      const { index: m, group: P, manager: y } = this, v = tt(this, nt), u = tt(this, rt);
      (m !== v || P !== u) && (Qe(this, nt, m), Qe(this, rt, P), this.animate());
    }, () => {
      var m, P;
      const { target: y } = this, { isDragSource: v } = this.draggable;
      ((P = (m = this.draggable.pluginConfig(Fs)) == null ? void 0 : m.feedback) != null ? P : "default") === "move" && v && (this.droppable.disabled = !y);
    }, ...r()], type: s, sensors: l }), a, this), Qe(this, Pa, g.element), this.manager = a, this.index = o, Qe(this, nt, o), this.group = i, Qe(this, rt, i), this.type = s, this.transition = D;
  }
  get initialIndex() {
    var e, a;
    return (a = (e = Ut.get(this.manager, this.id)) == null ? void 0 : e.initialIndex) != null ? a : this.index;
  }
  get initialGroup() {
    var e, a;
    return (a = (e = Ut.get(this.manager, this.id)) == null ? void 0 : e.initialGroup) != null ? a : this.group;
  }
  animate() {
    _(() => {
      const { manager: e, transition: a } = this, { shape: t } = this.droppable;
      if (!e) return;
      const { idle: r } = e.dragOperation.status;
      !t || !a || r && !a.idle || e.renderer.rendering.then(() => {
        const { element: n } = this;
        if (!n) return;
        for (const p of n.getAnimations()) "transitionProperty" in p && (p.transitionProperty === "transform" || p.transitionProperty === "translate" || p.transitionProperty === "scale") && p.cancel();
        const i = this.refreshShape();
        if (!i) return;
        const o = { x: t.boundingRectangle.left - i.boundingRectangle.left, y: t.boundingRectangle.top - i.boundingRectangle.top }, { translate: l } = be(n), s = vo(n, l, false), D = vo(n, l);
        if (o.x || o.y) {
          const p = mi(oe(n)) ? Xr(Yr({}, a), { duration: 0 }) : a;
          xs({ element: n, keyframes: { translate: [`${s.x + o.x}px ${s.y + o.y}px ${s.z}`, `${D.x}px ${D.y}px ${D.z}`] }, options: p }).then(() => {
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
    z(() => {
      this.draggable.manager = e, this.droppable.manager = e;
    });
  }
  set element(e) {
    z(() => {
      const a = tt(this, Pa), t = this.droppable.element, r = this.draggable.element;
      (!t || t === a) && (this.droppable.element = e), (!r || r === a) && (this.draggable.element = e), Qe(this, Pa, e);
    });
  }
  get element() {
    var e, a;
    const t = tt(this, Pa);
    if (t) return (a = (e = mn.get(t)) != null ? e : t) != null ? a : this.droppable.element;
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
    const { disabled: e } = this.draggable, { disabled: a } = this.droppable;
    return e === a ? e : { draggable: e, droppable: a };
  }
  set plugins(e) {
    this.draggable.plugins = ce(e, qo);
  }
  set disabled(e) {
    const a = Lo(e);
    z(() => {
      this.droppable.disabled = a.droppable, this.draggable.disabled = a.draggable;
    });
  }
  set data(e) {
    z(() => {
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
    this.droppable.collisionDetector = e ?? Ts;
  }
  set alignment(e) {
    this.draggable.alignment = e;
  }
  get alignment() {
    return this.draggable.alignment;
  }
  set type(e) {
    z(() => {
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
ze = xu();
ki = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
qi = /* @__PURE__ */ new WeakMap();
Pa = /* @__PURE__ */ new WeakMap();
lg(ze, 4, "index", pg, Sr, ki);
lg(ze, 4, "group", Dg, Sr, qi);
wu(ze, Sr);
var ug = class extends Ar {
  constructor(e, a, t) {
    super(e, a), this.sortable = t;
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
}, Li = class extends Ri {
  constructor(e, a, t) {
    super(e, a), this.sortable = t;
  }
  get index() {
    return this.sortable.index;
  }
  get group() {
    return this.sortable.group;
  }
};
function Vu(e) {
  const a = /* @__PURE__ */ new Map(), t = rr(0);
  return yr(() => {
    const r = W(e);
    if (!r) {
      a.clear();
      return;
    }
    Ln(ie(() => {
      let n = false;
      for (const i of a) {
        const [o] = i, l = _(() => i[1]), s = r[o];
        l !== s && (n = true, a.set(o, s));
      }
      n && t.value++;
    }));
  }, { flush: "post" }), Me(() => {
    const r = W(e);
    return t.value, r && new Proxy(r, { get(n, i) {
      const o = n[i];
      return a.set(i, o), o;
    } });
  });
}
function ye(e) {
  var a, t;
  const r = W(e);
  return (t = (a = r?.$el) != null ? a : r) != null ? t : void 0;
}
function Uu(e) {
  return Object.fromEntries(Object.entries(e).map(([a, t]) => [a, W(t)]));
}
var ju = Object.defineProperty, Fu = Object.defineProperties, Ku = Object.getOwnPropertyDescriptors, Wo = Object.getOwnPropertySymbols, Hu = Object.prototype.hasOwnProperty, Bu = Object.prototype.propertyIsEnumerable, zo = (e, a, t) => a in e ? ju(e, a, { enumerable: true, configurable: true, writable: true, value: t }) : e[a] = t, Jr = (e, a) => {
  for (var t in a || (a = {})) Hu.call(a, t) && zo(e, t, a[t]);
  if (Wo) for (var t of Wo(a)) Bu.call(a, t) && zo(e, t, a[t]);
  return e;
}, Gu = (e, a) => Fu(e, Ku(a));
function Yu(e) {
  const a = Me(() => Jr(Jr({}, gg), W(e.transition))), t = fu((n) => {
    const i = Uu(e);
    return new Sr(Gu(Jr({}, i), { register: false, transition: a.value, element: ye(e.element), handle: ye(e.handle), target: ye(e.target) }), n);
  }), r = Vu(t);
  return yr(() => {
    var n;
    t.value.element = ye(e.element), t.value.handle = ye(e.handle), ye(e.source) && (t.value.source = ye(e.source)), ye(e.target) && (t.value.target = ye(e.target)), t.value.id = W(e.id), t.value.disabled = (n = W(e.disabled)) != null ? n : false, t.value.alignment = W(e.alignment), t.value.plugins = W(e.plugins), t.value.modifiers = W(e.modifiers), t.value.sensors = W(e.sensors), t.value.accept = W(e.accept), t.value.type = W(e.type), t.value.collisionPriority = W(e.collisionPriority), t.value.transition = a.value, W(e.data) && (t.value.data = W(e.data));
  }), tr([() => W(e.group), () => W(e.index)], () => {
    z(() => {
      t.value.group = W(e.group), t.value.index = W(e.index);
    });
  }, { flush: "sync" }), tr(() => W(e.index), () => {
    var n, i;
    (n = t.value.manager) != null && n.dragOperation.status.idle && ((i = t.value.transition) != null && i.idle) && t.value.refreshShape();
  }), { sortable: Wg(t), isDragging: Me(() => r.value.isDragging), isDropping: Me(() => r.value.isDropping), isDragSource: Me(() => r.value.isDragSource), isDropTarget: Me(() => r.value.isDropTarget) };
}
var Xu = Object.defineProperty, Zu = Object.defineProperties, Ju = Object.getOwnPropertyDescriptors, $o = Object.getOwnPropertySymbols, Qu = Object.prototype.hasOwnProperty, ec = Object.prototype.propertyIsEnumerable, Vo = (e, a, t) => a in e ? Xu(e, a, { enumerable: true, configurable: true, writable: true, value: t }) : e[a] = t, Wi = (e, a) => {
  for (var t in a || (a = {})) Qu.call(a, t) && Vo(e, t, a[t]);
  if ($o) for (var t of $o(a)) ec.call(a, t) && Vo(e, t, a[t]);
  return e;
}, cg = (e, a) => Zu(e, Ju(a)), Rn = class extends bt {
  apply({ transform: a }) {
    if (!this.options) return a;
    const { axis: t, value: r } = this.options;
    return cg(Wi({}, a), { [t]: r });
  }
};
Rn.configure = Ve(Rn);
var dg = Rn;
dg.configure({ axis: "x", value: 0 });
dg.configure({ axis: "y", value: 0 });
function ac(e, a, t) {
  const r = Wi({}, a);
  return e.boundingRectangle.top + a.y <= t.top ? r.y = t.top - e.boundingRectangle.top : e.boundingRectangle.bottom + a.y >= t.top + t.height && (r.y = t.top + t.height - e.boundingRectangle.bottom), e.boundingRectangle.left + a.x <= t.left ? r.x = t.left - e.boundingRectangle.left : e.boundingRectangle.right + a.x >= t.left + t.width && (r.x = t.left + t.width - e.boundingRectangle.right), r;
}
var Uo = class extends bt {
  apply({ transform: a }) {
    var t;
    const { size: r = 20 } = (t = this.options) != null ? t : {}, n = typeof r == "number" ? r : r.x, i = typeof r == "number" ? r : r.y;
    return cg(Wi({}, a), { x: Math.ceil(a.x / n) * n, y: Math.ceil(a.y / i) * i });
  }
};
Uo.configure = Ve(Uo);
var kn = class extends bt {
  constructor(a, t) {
    super(a, t), this.boundingRectangle = ra(null), this.destroy = ie(() => {
      if (!this.options) return;
      const { dragOperation: r } = a, { status: n } = r;
      if (n.initialized) {
        const { element: i } = this.options, o = typeof i == "function" ? i(r) : i;
        if (!o) return;
        let l;
        const s = () => {
          this.boundingRectangle.value = oa(o);
        }, D = () => {
          l || (l = setTimeout(() => {
            s(), l = void 0;
          }, 25));
        }, p = new ResizeObserver(s);
        return p.observe(o), document.addEventListener("scroll", D, { passive: true, capture: true }), () => {
          document.removeEventListener("scroll", D, { capture: true }), p.disconnect(), this.boundingRectangle.value = null;
        };
      }
    });
  }
  apply(a) {
    const { shape: t, transform: r } = a;
    if (!t) return r;
    const n = this.boundingRectangle.value;
    if (!n) return r;
    const { initial: i, current: o } = t, { height: l, width: s } = o.boundingRectangle, D = i.center.x - s / 2, p = i.center.y - l / 2;
    return ac(new de(D, p, s, l), r, n);
  }
};
kn.configure = Ve(kn);
var tc = kn;
const ut = (e) => e.source?.element?.parentElement ?? null;
ut.__docgenInfo = Object.assign({ displayName: ut.name ?? ut.__name }, { exportName: "getReorderContainer", displayName: "getReorderContainer", description: "Resolves the active reorder container: the direct DOM parent of the dragged sortable item's\nelement. This is the same element that defines drag movement bounds (see `REORDER_MODIFIERS`'\n`RestrictToElement` contract in `reorderConfig.ts`) and the element autoscroll must keep\nvisible (see `ReorderAutoScroller`). Both owners resolve it through this one helper so the\ncontract cannot drift between them.", type: 2, props: [{ name: "__#46@#private", global: false, description: "", tags: [], required: true, type: "any", schema: "any", declarations: [] }, { name: "status", global: false, description: "Current status of the drag operation", tags: [], required: true, type: "DragOperationStatus", schema: "DragOperationStatus", declarations: [] }, { name: "controller", global: false, description: "The controller for the currentdrag operation", tags: [], required: true, type: "AbortController | undefined", schema: "AbortController | undefined", declarations: [] }, { name: "shape", global: false, description: `Gets the current shape of the dragged entity with history.
Sets the shape of the dragged entity.`, tags: [{ name: "returns", text: "The shape history or null if no shape is set" }, { name: "param", text: "value - The new shape or null to reset" }], required: true, type: "WithHistory<Shape> | null", schema: "WithHistory<Shape> | null", declarations: [] }, { name: "canceled", global: false, description: "Whether the drag operation was canceled", tags: [], required: true, type: "boolean", schema: "boolean", declarations: [] }, { name: "activatorEvent", global: false, description: "The event that initiated the drag operation", tags: [], required: true, type: "Event | null", schema: "Event | null", declarations: [] }, { name: "sourceIdentifier", global: false, description: "Unique identifier of the source draggable entity", tags: [], required: true, type: "UniqueIdentifier | null", schema: "UniqueIdentifier | null", declarations: [] }, { name: "targetIdentifier", global: false, description: "Unique identifier of the target droppable entity", tags: [], required: true, type: "UniqueIdentifier | null", schema: "UniqueIdentifier | null", declarations: [] }, { name: "modifiers", global: false, description: "List of modifiers applied to the drag operation", tags: [], required: true, type: "Modifier<DragDropManager<any, any>, PluginOptions>[]", schema: "Modifier<DragDropManager<any, any>, PluginOptions>[]", declarations: [] }, { name: "position", global: false, description: "Current position of the dragged entity", tags: [], required: true, type: "Position", schema: "Position", declarations: [] }, { name: "source", global: false, description: "Gets the source draggable entity.", tags: [{ name: "returns", text: `The current draggable entity, falling back to the previous
instance to bridge the gap when React unmounts and remounts a sortable
during reparenting (e.g. moving an item between columns).` }], required: true, type: "Draggable<Data> | null", schema: "Draggable<Data> | null", declarations: [] }, { name: "target", global: false, description: "Gets the target droppable entity.", tags: [{ name: "returns", text: "The current droppable entity or null if not found" }], required: true, type: "Droppable<Data> | null", schema: "Droppable<Data> | null", declarations: [] }, { name: "transform", global: false, description: "Gets the current transform after applying all modifiers.", tags: [{ name: "returns", text: "The transformed coordinates" }], required: true, type: "{ x: number; y: number; }", schema: "{ x: number; y: number; }", declarations: [] }, { name: "snapshot", global: false, description: "Creates a snapshot of the current drag operation state.", tags: [{ name: "returns", text: "An immutable snapshot of the current operation state" }], required: true, type: "() => DragOperation<Draggable<Data>, Droppable<Data>>", schema: "() => DragOperation<Draggable<Data>, Droppable<Data>>", declarations: [] }, { name: "reset", global: false, description: "Resets the drag operation to its initial state.", tags: [{ name: "remarks", text: `This method:
- Sets status to idle
- Clears source and target identifiers
- Resets shape history
- Resets position and transform
- Clears modifiers` }], required: true, type: "() => void", schema: "() => void", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/getReorderContainer.ts" });
const rc = (e) => {
  let a = e;
  for (; a; ) {
    if (_e(a) && be(a, true).position === "fixed") return a;
    a = a.parentElement;
  }
  return null;
}, nc = (e) => e.offsetParent === null, ct = (e) => {
  const a = [...cr(e, { excludeElement: false })], t = rc(e);
  if (!t) return a;
  const r = a.filter((i) => i === t || t.contains(i));
  if (nc(t)) return r;
  const n = t.parentElement ? ct(t.parentElement) : [];
  return [...r, ...n];
};
ct.__docgenInfo = Object.assign({ displayName: ct.name ?? ct.__name }, { exportName: "getReorderScrollCandidates", displayName: "getReorderScrollCandidates", description: `Builds the ordered scroll candidate chain for the active reorder container, nearest to
farthest: the container itself when scrollable, its scrollable DOM ancestors, and the document
scrolling element.

When a genuinely viewport-fixed ancestor exists from the container upward (inclusive), only
candidates contained by that fixed boundary are kept, including the boundary itself. Scrolling
the document, or anything else outside a fixed boundary, can never move or reveal content
inside that fixed surface, so those candidates are excluded rather than attempted and ignored.

A \`position: fixed\` element whose containing block is a transformed (or otherwise
containing-block-establishing) ancestor is not treated as a boundary: scrolling that ancestor
still moves the fixed surface and can reveal more of it. dnd-kit's own \`getScrollableAncestors\`
unconditionally stops walking at the first \`position: fixed\` node it meets, so in this case the
walk is resumed from just past that node to pick up the scrollable ancestors it would otherwise
miss.`, type: 2, props: [{ name: "attributes", global: false, description: "The **`Element.attributes`** property returns a live collection of all attribute nodes registered to the specified node.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/attributes)", tags: [], required: true, type: "NamedNodeMap", schema: "NamedNodeMap", declarations: [] }, { name: "classList", global: false, description: "The **`Element.classList`** is a read-only property that returns a live DOMTokenList collection of the `class` attributes of the element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/classList)", tags: [], required: true, type: "DOMTokenList", schema: "DOMTokenList", declarations: [] }, { name: "className", global: false, description: "The **`className`** property of the of the specified element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/className)", tags: [], required: true, type: "string", schema: "string", declarations: [] }, { name: "clientHeight", global: false, description: "The **`clientHeight`** read-only property of the Element interface is zero for elements with no CSS or inline layout boxes; otherwise, it's the inner height of an element in pixels.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientHeight)", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "clientLeft", global: false, description: "The **`clientLeft`** read-only property of the Element interface returns the width of the left border of an element in pixels.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientLeft)", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "clientTop", global: false, description: "The **`clientTop`** read-only property of the Element interface returns the width of the top border of an element in pixels.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientTop)", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "clientWidth", global: false, description: "The **`clientWidth`** read-only property of the Element interface is zero for inline elements and elements with no CSS; otherwise, it's the inner width of an element in pixels.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientWidth)", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "currentCSSZoom", global: false, description: "The **`currentCSSZoom`** read-only property of the Element interface provides the 'effective' CSS `zoom` of an element, taking into account the zoom applied to the element and all its parent elements.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/currentCSSZoom)", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "id", global: false, description: "The **`id`** property of the Element interface represents the element's identifier, reflecting the **`id`** global attribute.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/id)", tags: [], required: true, type: "string", schema: "string", declarations: [] }, { name: "innerHTML", global: false, description: "The **`innerHTML`** property of the Element interface gets or sets the HTML or XML markup contained within the element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/innerHTML)", tags: [], required: true, type: "string", schema: "string", declarations: [] }, { name: "localName", global: false, description: "The **`Element.localName`** read-only property returns the local part of the qualified name of an element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/localName)", tags: [], required: true, type: "string", schema: "string", declarations: [] }, { name: "namespaceURI", global: false, description: "The **`Element.namespaceURI`** read-only property returns the namespace URI of the element, or `null` if the element is not in a namespace.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/namespaceURI)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "onfullscreenchange", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenchange_event)", tags: [], required: true, type: "((this: Element, ev: Event) => any) | null", schema: "((this: Element, ev: Event) => any) | null", declarations: [] }, { name: "onfullscreenerror", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenerror_event)", tags: [], required: true, type: "((this: Element, ev: Event) => any) | null", schema: "((this: Element, ev: Event) => any) | null", declarations: [] }, { name: "outerHTML", global: false, description: "The **`outerHTML`** attribute of the Element DOM interface gets the serialized HTML fragment describing the element including its descendants.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/outerHTML)", tags: [], required: true, type: "string", schema: "string", declarations: [] }, { name: "ownerDocument", global: false, description: "The read-only **`ownerDocument`** property of the Node interface returns the top-level document object of the node.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/ownerDocument)", tags: [], required: true, type: "Document", schema: "Document", declarations: [] }, { name: "part", global: false, description: "The **`part`** property of the Element interface represents the part identifier(s) of the element (i.e., set using the `part` attribute), returned as a DOMTokenList.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/part)", tags: [], required: true, type: "DOMTokenList", schema: "DOMTokenList", declarations: [] }, { name: "prefix", global: false, description: "The **`Element.prefix`** read-only property returns the namespace prefix of the specified element, or `null` if no prefix is specified.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/prefix)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "scrollHeight", global: false, description: "The **`scrollHeight`** read-only property of the Element interface is a measurement of the height of an element's content, including content not visible on the screen due to overflow.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollHeight)", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "scrollLeft", global: false, description: "The **`scrollLeft`** property of the Element interface gets or sets the number of pixels by which an element's content is scrolled from its left edge.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollLeft)", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "scrollTop", global: false, description: "The **`scrollTop`** property of the Element interface gets or sets the number of pixels by which an element's content is scrolled from its top edge.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollTop)", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "scrollWidth", global: false, description: "The **`scrollWidth`** read-only property of the Element interface is a measurement of the width of an element's content, including content not visible on the screen due to overflow.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollWidth)", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "shadowRoot", global: false, description: "The `Element.shadowRoot` read-only property represents the shadow root hosted by the element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/shadowRoot)", tags: [], required: true, type: "ShadowRoot | null", schema: "ShadowRoot | null", declarations: [] }, { name: "slot", global: false, description: "The **`slot`** property of the Element interface returns the name of the shadow DOM slot the element is inserted in.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/slot)", tags: [], required: true, type: "string", schema: "string", declarations: [] }, { name: "tagName", global: false, description: "The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)", tags: [], required: true, type: "string", schema: "string", declarations: [] }, { name: "attachShadow", global: false, description: "The **`Element.attachShadow()`** method attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/attachShadow)", tags: [], required: true, type: "(init: ShadowRootInit) => ShadowRoot", schema: "(init: ShadowRootInit) => ShadowRoot", declarations: [] }, { name: "checkVisibility", global: false, description: "The **`checkVisibility()`** method of the Element interface checks whether the element is visible.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/checkVisibility)", tags: [], required: true, type: "(options?: CheckVisibilityOptions | undefined) => boolean", schema: "(options?: CheckVisibilityOptions | undefined) => boolean", declarations: [] }, { name: "closest", global: false, description: "The **`closest()`** method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/closest)", tags: [], required: true, type: "{ <K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null; <K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null; <K extends keyof MathMLElementTagNameMap>(selector: K): MathMLElementTagNameMap[K] | null; <E extends Element = Element>(selectors: string): E | null; }", schema: "{ <K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null; <K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null; <K extends keyof MathMLElementTagNameMap>(selector: K): MathMLElementTagNameMap[K] | null; <E extends Element = Element>(selectors: string): E | null; }", declarations: [] }, { name: "computedStyleMap", global: false, description: "The **`computedStyleMap()`** method of the Element interface returns a StylePropertyMapReadOnly interface which provides a read-only representation of a CSS declaration block that is an alternative to CSSStyleDeclaration.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/computedStyleMap)", tags: [], required: true, type: "() => StylePropertyMapReadOnly", schema: "() => StylePropertyMapReadOnly", declarations: [] }, { name: "getAttribute", global: false, description: "The **`getAttribute()`** method of the element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttribute)", tags: [], required: true, type: "(qualifiedName: string) => string | null", schema: "(qualifiedName: string) => string | null", declarations: [] }, { name: "getAttributeNS", global: false, description: "The **`getAttributeNS()`** method of the Element interface returns the string value of the attribute with the specified namespace and name.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNS)", tags: [], required: true, type: "(namespace: string | null, localName: string) => string | null", schema: "(namespace: string | null, localName: string) => string | null", declarations: [] }, { name: "getAttributeNames", global: false, description: "The **`getAttributeNames()`** method of the array.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNames)", tags: [], required: true, type: "() => string[]", schema: "() => string[]", declarations: [] }, { name: "getAttributeNode", global: false, description: `Returns the specified attribute of the specified element, as an Attr node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNode)`, tags: [], required: true, type: "(qualifiedName: string) => Attr | null", schema: "(qualifiedName: string) => Attr | null", declarations: [] }, { name: "getAttributeNodeNS", global: false, description: "The **`getAttributeNodeNS()`** method of the Element interface returns the namespaced Attr node of an element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNodeNS)", tags: [], required: true, type: "(namespace: string | null, localName: string) => Attr | null", schema: "(namespace: string | null, localName: string) => Attr | null", declarations: [] }, { name: "getBoundingClientRect", global: false, description: "The **`Element.getBoundingClientRect()`** method returns a position relative to the viewport.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getBoundingClientRect)", tags: [], required: true, type: "() => DOMRect", schema: "() => DOMRect", declarations: [] }, { name: "getClientRects", global: false, description: "The **`getClientRects()`** method of the Element interface returns a collection of DOMRect objects that indicate the bounding rectangles for each CSS border box in a client.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getClientRects)", tags: [], required: true, type: "() => DOMRectList", schema: "() => DOMRectList", declarations: [] }, { name: "getElementsByClassName", global: false, description: "The Element method **`getElementsByClassName()`** returns a live specified class name or names.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByClassName)", tags: [], required: true, type: "(classNames: string) => HTMLCollectionOf<Element>", schema: "(classNames: string) => HTMLCollectionOf<Element>", declarations: [] }, { name: "getElementsByTagName", global: false, description: "The **`Element.getElementsByTagName()`** method returns a live All descendants of the specified element are searched, but not the element itself.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByTagName)", tags: [{ name: "deprecated" }], required: true, type: "{ <K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>; <K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>; <K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>; <K extends keyof HTMLElementDeprecatedTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>; (qualifiedName: string): HTMLCollectionOf<Element>; }", schema: "{ <K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>; <K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>; <K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>; <K extends keyof HTMLElementDeprecatedTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>; (qualifiedName: string): HTMLCollectionOf<Element>; }", declarations: [] }, { name: "getElementsByTagNameNS", global: false, description: "The **`Element.getElementsByTagNameNS()`** method returns a live HTMLCollection of elements with the given tag name belonging to the given namespace.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByTagNameNS)", tags: [], required: true, type: '{ (namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>; (namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>; (namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: string): HTMLCollectionOf<MathMLElement>; (namespace: string | null, localName: string): HTMLCollectionOf<Element>; }', schema: '{ (namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>; (namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>; (namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: string): HTMLCollectionOf<MathMLElement>; (namespace: string | null, localName: string): HTMLCollectionOf<Element>; }', declarations: [] }, { name: "getHTML", global: false, description: "The **`getHTML()`** method of the Element interface is used to serialize an element's DOM to an HTML string.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getHTML)", tags: [], required: true, type: "(options?: GetHTMLOptions | undefined) => string", schema: "(options?: GetHTMLOptions | undefined) => string", declarations: [] }, { name: "hasAttribute", global: false, description: "The **`Element.hasAttribute()`** method returns a **Boolean** value indicating whether the specified element has the specified attribute or not.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttribute)", tags: [], required: true, type: "(qualifiedName: string) => boolean", schema: "(qualifiedName: string) => boolean", declarations: [] }, { name: "hasAttributeNS", global: false, description: "The **`hasAttributeNS()`** method of the Element interface returns a boolean value indicating whether the current element has the specified attribute with the specified namespace.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttributeNS)", tags: [], required: true, type: "(namespace: string | null, localName: string) => boolean", schema: "(namespace: string | null, localName: string) => boolean", declarations: [] }, { name: "hasAttributes", global: false, description: "The **`hasAttributes()`** method of the Element interface returns a boolean value indicating whether the current element has any attributes or not.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttributes)", tags: [], required: true, type: "() => boolean", schema: "() => boolean", declarations: [] }, { name: "hasPointerCapture", global: false, description: "The **`hasPointerCapture()`** method of the pointer capture for the pointer identified by the given pointer ID.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasPointerCapture)", tags: [], required: true, type: "(pointerId: number) => boolean", schema: "(pointerId: number) => boolean", declarations: [] }, { name: "insertAdjacentElement", global: false, description: "The **`insertAdjacentElement()`** method of the relative to the element it is invoked upon.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentElement)", tags: [], required: true, type: "(where: InsertPosition, element: Element) => Element | null", schema: "(where: InsertPosition, element: Element) => Element | null", declarations: [] }, { name: "insertAdjacentHTML", global: false, description: "The **`insertAdjacentHTML()`** method of the the resulting nodes into the DOM tree at a specified position.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentHTML)", tags: [], required: true, type: "(position: InsertPosition, string: string) => void", schema: "(position: InsertPosition, string: string) => void", declarations: [] }, { name: "insertAdjacentText", global: false, description: "The **`insertAdjacentText()`** method of the Element interface, given a relative position and a string, inserts a new text node at the given position relative to the element it is called from.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentText)", tags: [], required: true, type: "(where: InsertPosition, data: string) => void", schema: "(where: InsertPosition, data: string) => void", declarations: [] }, { name: "matches", global: false, description: "The **`matches()`** method of the Element interface tests whether the element would be selected by the specified CSS selector.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/matches)", tags: [], required: true, type: "(selectors: string) => boolean", schema: "(selectors: string) => boolean", declarations: [] }, { name: "releasePointerCapture", global: false, description: "The **`releasePointerCapture()`** method of the previously set for a specific (PointerEvent) _pointer_.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/releasePointerCapture)", tags: [], required: true, type: "(pointerId: number) => void", schema: "(pointerId: number) => void", declarations: [] }, { name: "removeAttribute", global: false, description: "The Element method **`removeAttribute()`** removes the attribute with the specified name from the element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttribute)", tags: [], required: true, type: "(qualifiedName: string) => void", schema: "(qualifiedName: string) => void", declarations: [] }, { name: "removeAttributeNS", global: false, description: "The **`removeAttributeNS()`** method of the If you are working with HTML and you don't need to specify the requested attribute as being part of a specific namespace, use the Element.removeAttribute() method instead.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttributeNS)", tags: [], required: true, type: "(namespace: string | null, localName: string) => void", schema: "(namespace: string | null, localName: string) => void", declarations: [] }, { name: "removeAttributeNode", global: false, description: "The **`removeAttributeNode()`** method of the Element interface removes the specified Attr node from the element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttributeNode)", tags: [], required: true, type: "(attr: Attr) => Attr", schema: "(attr: Attr) => Attr", declarations: [] }, { name: "requestFullscreen", global: false, description: "The **`Element.requestFullscreen()`** method issues an asynchronous request to make the element be displayed in fullscreen mode.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/requestFullscreen)", tags: [], required: true, type: "(options?: FullscreenOptions | undefined) => Promise<void>", schema: "(options?: FullscreenOptions | undefined) => Promise<void>", declarations: [] }, { name: "requestPointerLock", global: false, description: "The **`requestPointerLock()`** method of the Element interface lets you asynchronously ask for the pointer to be locked on the given element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/requestPointerLock)", tags: [], required: true, type: "(options?: PointerLockOptions | undefined) => Promise<void>", schema: "(options?: PointerLockOptions | undefined) => Promise<void>", declarations: [] }, { name: "scroll", global: false, description: "The **`scroll()`** method of the Element interface scrolls the element to a particular set of coordinates inside a given element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scroll)", tags: [], required: true, type: "{ (options?: ScrollToOptions | undefined): void; (x: number, y: number): void; }", schema: "{ (options?: ScrollToOptions | undefined): void; (x: number, y: number): void; }", declarations: [] }, { name: "scrollBy", global: false, description: "The **`scrollBy()`** method of the Element interface scrolls an element by the given amount.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollBy)", tags: [], required: true, type: "{ (options?: ScrollToOptions | undefined): void; (x: number, y: number): void; }", schema: "{ (options?: ScrollToOptions | undefined): void; (x: number, y: number): void; }", declarations: [] }, { name: "scrollIntoView", global: false, description: "The Element interface's **`scrollIntoView()`** method scrolls the element's ancestor containers such that the element on which `scrollIntoView()` is called is visible to the user.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollIntoView)", tags: [], required: true, type: "(arg?: boolean | ScrollIntoViewOptions | undefined) => void", schema: "(arg?: boolean | ScrollIntoViewOptions | undefined) => void", declarations: [] }, { name: "scrollTo", global: false, description: "The **`scrollTo()`** method of the Element interface scrolls to a particular set of coordinates inside a given element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollTo)", tags: [], required: true, type: "{ (options?: ScrollToOptions | undefined): void; (x: number, y: number): void; }", schema: "{ (options?: ScrollToOptions | undefined): void; (x: number, y: number): void; }", declarations: [] }, { name: "setAttribute", global: false, description: "The **`setAttribute()`** method of the Element interface sets the value of an attribute on the specified element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttribute)", tags: [], required: true, type: "(qualifiedName: string, value: string) => void", schema: "(qualifiedName: string, value: string) => void", declarations: [] }, { name: "setAttributeNS", global: false, description: "`setAttributeNS` adds a new attribute or changes the value of an attribute with the given namespace and name.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNS)", tags: [], required: true, type: "(namespace: string | null, qualifiedName: string, value: string) => void", schema: "(namespace: string | null, qualifiedName: string, value: string) => void", declarations: [] }, { name: "setAttributeNode", global: false, description: "The **`setAttributeNode()`** method of the Element interface adds a new Attr node to the specified element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNode)", tags: [], required: true, type: "(attr: Attr) => Attr | null", schema: "(attr: Attr) => Attr | null", declarations: [] }, { name: "setAttributeNodeNS", global: false, description: "The **`setAttributeNodeNS()`** method of the Element interface adds a new namespaced Attr node to an element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNodeNS)", tags: [], required: true, type: "(attr: Attr) => Attr | null", schema: "(attr: Attr) => Attr | null", declarations: [] }, { name: "setHTMLUnsafe", global: false, description: "The **`setHTMLUnsafe()`** method of the Element interface is used to parse a string of HTML into a DocumentFragment, optionally filtering out unwanted elements and attributes, and those that don't belong in the context, and then using it to replace the element's subtree in the DOM.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setHTMLUnsafe)", tags: [], required: true, type: "(html: string) => void", schema: "(html: string) => void", declarations: [] }, { name: "setPointerCapture", global: false, description: "The **`setPointerCapture()`** method of the _capture target_ of future pointer events.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setPointerCapture)", tags: [], required: true, type: "(pointerId: number) => void", schema: "(pointerId: number) => void", declarations: [] }, { name: "toggleAttribute", global: false, description: "The **`toggleAttribute()`** method of the present and adding it if it is not present) on the given element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/toggleAttribute)", tags: [], required: true, type: "(qualifiedName: string, force?: boolean | undefined) => boolean", schema: "(qualifiedName: string, force?: boolean | undefined) => boolean", declarations: [] }, { name: "webkitMatchesSelector", global: false, description: "", tags: [{ name: "deprecated", text: "This is a legacy alias of `matches`.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/matches)" }], required: true, type: "(selectors: string) => boolean", schema: "(selectors: string) => boolean", declarations: [] }, { name: "textContent", global: false, description: "[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)", tags: [], required: true, type: "string", schema: "string", declarations: [] }, { name: "addEventListener", global: false, description: `The **\`addEventListener()\`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)
The **\`addEventListener()\`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)`, tags: [], required: true, type: "{ <K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void; (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void; }", schema: "{ <K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void; (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void; }", declarations: [] }, { name: "removeEventListener", global: false, description: `The **\`removeEventListener()\`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)
The **\`removeEventListener()\`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)`, tags: [], required: true, type: "{ <K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions | undefined): void; (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions | undefined): void; }", schema: "{ <K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions | undefined): void; (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions | undefined): void; }", declarations: [] }, { name: "__@PointerEventsCheck@4114", global: false, description: "", tags: [], required: false, type: "({ 2?: object; 1?: object; } & { result: { pointerEvents: string; tree: Element[]; } | undefined; }) | undefined", schema: "({ 2?: object; 1?: object; } & { result: { pointerEvents: string; tree: Element[]; } | undefined; }) | undefined", declarations: [] }, { name: "__@UIValue@4116", global: false, description: "", tags: [], required: false, type: "string | undefined", schema: "string | undefined", declarations: [] }, { name: "__@InitialValue@4118", global: false, description: "", tags: [], required: false, type: "string | undefined", schema: "string | undefined", declarations: [] }, { name: "__@UISelection@4120", global: false, description: "", tags: [], required: false, type: "UISelection | undefined", schema: "UISelection | undefined", declarations: [] }, { name: "__@TrackChanges@4122", global: false, description: "", tags: [], required: false, type: "{ previousValue?: string; tracked?: string[]; nextValue?: string; } | undefined", schema: "{ previousValue?: string; tracked?: string[]; nextValue?: string; } | undefined", declarations: [] }, { name: "baseURI", global: false, description: "The read-only **`baseURI`** property of the Node interface returns the absolute base URL of the document containing the node.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/baseURI)", tags: [], required: true, type: "string", schema: "string", declarations: [] }, { name: "childNodes", global: false, description: "The read-only **`childNodes`** property of the Node interface returns a live the first child node is assigned index `0`.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/childNodes)", tags: [], required: true, type: "NodeListOf<ChildNode>", schema: "NodeListOf<ChildNode>", declarations: [] }, { name: "firstChild", global: false, description: "The read-only **`firstChild`** property of the Node interface returns the node's first child in the tree, or `null` if the node has no children.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/firstChild)", tags: [], required: true, type: "ChildNode | null", schema: "ChildNode | null", declarations: [] }, { name: "isConnected", global: false, description: "The read-only **`isConnected`** property of the Node interface returns a boolean indicating whether the node is connected (directly or indirectly) to a Document object.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isConnected)", tags: [], required: true, type: "boolean", schema: "boolean", declarations: [] }, { name: "lastChild", global: false, description: "The read-only **`lastChild`** property of the Node interface returns the last child of the node, or `null` if there are no child nodes.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lastChild)", tags: [], required: true, type: "ChildNode | null", schema: "ChildNode | null", declarations: [] }, { name: "nextSibling", global: false, description: "The read-only **`nextSibling`** property of the Node interface returns the node immediately following the specified one in their parent's Node.childNodes, or returns `null` if the specified node is the last child in the parent element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)", tags: [], required: true, type: "ChildNode | null", schema: "ChildNode | null", declarations: [] }, { name: "nodeName", global: false, description: "The read-only **`nodeName`** property of Node returns the name of the current node as a string.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeName)", tags: [], required: true, type: "string", schema: "string", declarations: [] }, { name: "nodeType", global: false, description: "The read-only **`nodeType`** property of a Node interface is an integer that identifies what the node is.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeType)", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "nodeValue", global: false, description: "The **`nodeValue`** property of the Node interface returns or sets the value of the current node.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeValue)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "parentElement", global: false, description: "The read-only **`parentElement`** property of Node interface returns the DOM node's parent Element, or `null` if the node either has no parent, or its parent isn't a DOM Element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentElement)", tags: [], required: true, type: "HTMLElement | null", schema: "HTMLElement | null", declarations: [] }, { name: "parentNode", global: false, description: "The read-only **`parentNode`** property of the Node interface returns the parent of the specified node in the DOM tree.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentNode)", tags: [], required: true, type: "ParentNode | null", schema: "ParentNode | null", declarations: [] }, { name: "previousSibling", global: false, description: "The read-only **`previousSibling`** property of the Node interface returns the node immediately preceding the specified one in its parent's or `null` if the specified node is the first in that list.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/previousSibling)", tags: [], required: true, type: "ChildNode | null", schema: "ChildNode | null", declarations: [] }, { name: "appendChild", global: false, description: "The **`appendChild()`** method of the Node interface adds a node to the end of the list of children of a specified parent node.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/appendChild)", tags: [], required: true, type: "<T extends Node>(node: T) => T", schema: "<T extends Node>(node: T) => T", declarations: [] }, { name: "cloneNode", global: false, description: "The **`cloneNode()`** method of the Node interface returns a duplicate of the node on which this method was called.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/cloneNode)", tags: [], required: true, type: "(subtree?: boolean | undefined) => Node", schema: "(subtree?: boolean | undefined) => Node", declarations: [] }, { name: "compareDocumentPosition", global: false, description: "The **`compareDocumentPosition()`** method of the Node interface reports the position of its argument node relative to the node on which it is called.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/compareDocumentPosition)", tags: [], required: true, type: "(other: Node) => number", schema: "(other: Node) => number", declarations: [] }, { name: "contains", global: false, description: "The **`contains()`** method of the Node interface returns a boolean value indicating whether a node is a descendant of a given node, that is the node itself, one of its direct children (Node.childNodes), one of the children's direct children, and so on.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/contains)", tags: [], required: true, type: "(other: Node | null) => boolean", schema: "(other: Node | null) => boolean", declarations: [] }, { name: "getRootNode", global: false, description: "The **`getRootNode()`** method of the Node interface returns the context object's root, which optionally includes the shadow root if it is available.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/getRootNode)", tags: [], required: true, type: "(options?: GetRootNodeOptions | undefined) => Node", schema: "(options?: GetRootNodeOptions | undefined) => Node", declarations: [] }, { name: "hasChildNodes", global: false, description: "The **`hasChildNodes()`** method of the Node interface returns a boolean value indicating whether the given Node has child nodes or not.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/hasChildNodes)", tags: [], required: true, type: "() => boolean", schema: "() => boolean", declarations: [] }, { name: "insertBefore", global: false, description: "The **`insertBefore()`** method of the Node interface inserts a node before a _reference node_ as a child of a specified _parent node_.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/insertBefore)", tags: [], required: true, type: "<T extends Node>(node: T, child: Node | null) => T", schema: "<T extends Node>(node: T, child: Node | null) => T", declarations: [] }, { name: "isDefaultNamespace", global: false, description: "The **`isDefaultNamespace()`** method of the Node interface accepts a namespace URI as an argument.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isDefaultNamespace)", tags: [], required: true, type: "(namespace: string | null) => boolean", schema: "(namespace: string | null) => boolean", declarations: [] }, { name: "isEqualNode", global: false, description: "The **`isEqualNode()`** method of the Node interface tests whether two nodes are equal.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isEqualNode)", tags: [], required: true, type: "(otherNode: Node | null) => boolean", schema: "(otherNode: Node | null) => boolean", declarations: [] }, { name: "isSameNode", global: false, description: "The **`isSameNode()`** method of the Node interface is a legacy alias the for the `===` strict equality operator.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isSameNode)", tags: [], required: true, type: "(otherNode: Node | null) => boolean", schema: "(otherNode: Node | null) => boolean", declarations: [] }, { name: "lookupNamespaceURI", global: false, description: "The **`lookupNamespaceURI()`** method of the Node interface takes a prefix as parameter and returns the namespace URI associated with it on the given node if found (and `null` if not).\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupNamespaceURI)", tags: [], required: true, type: "(prefix: string | null) => string | null", schema: "(prefix: string | null) => string | null", declarations: [] }, { name: "lookupPrefix", global: false, description: "The **`lookupPrefix()`** method of the Node interface returns a string containing the prefix for a given namespace URI, if present, and `null` if not.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupPrefix)", tags: [], required: true, type: "(namespace: string | null) => string | null", schema: "(namespace: string | null) => string | null", declarations: [] }, { name: "normalize", global: false, description: "The **`normalize()`** method of the Node interface puts the specified node and all of its sub-tree into a _normalized_ form.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/normalize)", tags: [], required: true, type: "() => void", schema: "() => void", declarations: [] }, { name: "removeChild", global: false, description: "The **`removeChild()`** method of the Node interface removes a child node from the DOM and returns the removed node.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/removeChild)", tags: [], required: true, type: "<T extends Node>(child: T) => T", schema: "<T extends Node>(child: T) => T", declarations: [] }, { name: "replaceChild", global: false, description: "The **`replaceChild()`** method of the Node interface replaces a child node within the given (parent) node.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/replaceChild)", tags: [], required: true, type: "<T extends Node>(node: Node, child: T) => T", schema: "<T extends Node>(node: Node, child: T) => T", declarations: [] }, { name: "ELEMENT_NODE", global: false, description: "node is an element.", tags: [], required: true, type: "1", schema: "1", declarations: [] }, { name: "ATTRIBUTE_NODE", global: false, description: "", tags: [], required: true, type: "2", schema: "2", declarations: [] }, { name: "TEXT_NODE", global: false, description: "node is a Text node.", tags: [], required: true, type: "3", schema: "3", declarations: [] }, { name: "CDATA_SECTION_NODE", global: false, description: "node is a CDATASection node.", tags: [], required: true, type: "4", schema: "4", declarations: [] }, { name: "ENTITY_REFERENCE_NODE", global: false, description: "", tags: [], required: true, type: "5", schema: "5", declarations: [] }, { name: "ENTITY_NODE", global: false, description: "", tags: [], required: true, type: "6", schema: "6", declarations: [] }, { name: "PROCESSING_INSTRUCTION_NODE", global: false, description: "node is a ProcessingInstruction node.", tags: [], required: true, type: "7", schema: "7", declarations: [] }, { name: "COMMENT_NODE", global: false, description: "node is a Comment node.", tags: [], required: true, type: "8", schema: "8", declarations: [] }, { name: "DOCUMENT_NODE", global: false, description: "node is a document.", tags: [], required: true, type: "9", schema: "9", declarations: [] }, { name: "DOCUMENT_TYPE_NODE", global: false, description: "node is a doctype.", tags: [], required: true, type: "10", schema: "10", declarations: [] }, { name: "DOCUMENT_FRAGMENT_NODE", global: false, description: "node is a DocumentFragment node.", tags: [], required: true, type: "11", schema: "11", declarations: [] }, { name: "NOTATION_NODE", global: false, description: "", tags: [], required: true, type: "12", schema: "12", declarations: [] }, { name: "DOCUMENT_POSITION_DISCONNECTED", global: false, description: "Set when node and other are not in the same tree.", tags: [], required: true, type: "1", schema: "1", declarations: [] }, { name: "DOCUMENT_POSITION_PRECEDING", global: false, description: "Set when other is preceding node.", tags: [], required: true, type: "2", schema: "2", declarations: [] }, { name: "DOCUMENT_POSITION_FOLLOWING", global: false, description: "Set when other is following node.", tags: [], required: true, type: "4", schema: "4", declarations: [] }, { name: "DOCUMENT_POSITION_CONTAINS", global: false, description: "Set when other is an ancestor of node.", tags: [], required: true, type: "8", schema: "8", declarations: [] }, { name: "DOCUMENT_POSITION_CONTAINED_BY", global: false, description: "Set when other is a descendant of node.", tags: [], required: true, type: "16", schema: "16", declarations: [] }, { name: "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", global: false, description: "", tags: [], required: true, type: "32", schema: "32", declarations: [] }, { name: "dispatchEvent", global: false, description: "The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)", tags: [], required: true, type: "{ (event: Event): boolean; (event: Event): boolean; }", schema: "{ (event: Event): boolean; (event: Event): boolean; }", declarations: [] }, { name: "ariaActiveDescendantElement", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: true, type: "Element | null", schema: "Element | null", declarations: [] }, { name: "ariaAtomic", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaAutoComplete", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaBrailleLabel", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaBrailleRoleDescription", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaBusy", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaChecked", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaColCount", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaColIndex", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaColIndexText", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaColSpan", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaControlsElements", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: true, type: "readonly Element[] | null", schema: "readonly Element[] | null", declarations: [] }, { name: "ariaCurrent", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaDescribedByElements", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: true, type: "readonly Element[] | null", schema: "readonly Element[] | null", declarations: [] }, { name: "ariaDescription", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaDetailsElements", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: true, type: "readonly Element[] | null", schema: "readonly Element[] | null", declarations: [] }, { name: "ariaDisabled", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaErrorMessageElements", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: true, type: "readonly Element[] | null", schema: "readonly Element[] | null", declarations: [] }, { name: "ariaExpanded", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaFlowToElements", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: true, type: "readonly Element[] | null", schema: "readonly Element[] | null", declarations: [] }, { name: "ariaHasPopup", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaHidden", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaInvalid", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaKeyShortcuts", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaLabel", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaLabelledByElements", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: true, type: "readonly Element[] | null", schema: "readonly Element[] | null", declarations: [] }, { name: "ariaLevel", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaLive", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaModal", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaMultiLine", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaMultiSelectable", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaOrientation", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaOwnsElements", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: true, type: "readonly Element[] | null", schema: "readonly Element[] | null", declarations: [] }, { name: "ariaPlaceholder", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaPosInSet", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaPressed", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaReadOnly", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaRelevant", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaRequired", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaRoleDescription", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaRowCount", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaRowIndex", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaRowIndexText", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaRowSpan", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaSelected", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaSetSize", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaSort", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaValueMax", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaValueMin", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaValueNow", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "ariaValueText", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "role", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: true, type: "string | null", schema: "string | null", declarations: [] }, { name: "animate", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animate)", tags: [], required: true, type: "(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions | undefined) => Animation", schema: "(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions | undefined) => Animation", declarations: [] }, { name: "getAnimations", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAnimations)", tags: [], required: true, type: "(options?: GetAnimationsOptions | undefined) => Animation[]", schema: "(options?: GetAnimationsOptions | undefined) => Animation[]", declarations: [] }, { name: "after", global: false, description: `Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/after)`, tags: [], required: true, type: "(...nodes: (string | Node)[]) => void", schema: "(...nodes: (string | Node)[]) => void", declarations: [] }, { name: "before", global: false, description: `Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/before)`, tags: [], required: true, type: "(...nodes: (string | Node)[]) => void", schema: "(...nodes: (string | Node)[]) => void", declarations: [] }, { name: "remove", global: false, description: `Removes node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/remove)`, tags: [], required: true, type: "() => void", schema: "() => void", declarations: [] }, { name: "replaceWith", global: false, description: `Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/replaceWith)`, tags: [], required: true, type: "(...nodes: (string | Node)[]) => void", schema: "(...nodes: (string | Node)[]) => void", declarations: [] }, { name: "nextElementSibling", global: false, description: `Returns the first following sibling that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/nextElementSibling)`, tags: [], required: true, type: "Element | null", schema: "Element | null", declarations: [] }, { name: "previousElementSibling", global: false, description: `Returns the first preceding sibling that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/previousElementSibling)`, tags: [], required: true, type: "Element | null", schema: "Element | null", declarations: [] }, { name: "childElementCount", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/childElementCount)", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "children", global: false, description: `Returns the child elements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/children)`, tags: [], required: true, type: "HTMLCollection", schema: "HTMLCollection", declarations: [] }, { name: "firstElementChild", global: false, description: `Returns the first child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/firstElementChild)`, tags: [], required: true, type: "Element | null", schema: "Element | null", declarations: [] }, { name: "lastElementChild", global: false, description: `Returns the last child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lastElementChild)`, tags: [], required: true, type: "Element | null", schema: "Element | null", declarations: [] }, { name: "append", global: false, description: `Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/append)`, tags: [], required: true, type: "(...nodes: (string | Node)[]) => void", schema: "(...nodes: (string | Node)[]) => void", declarations: [] }, { name: "prepend", global: false, description: `Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/prepend)`, tags: [], required: true, type: "(...nodes: (string | Node)[]) => void", schema: "(...nodes: (string | Node)[]) => void", declarations: [] }, { name: "querySelector", global: false, description: `Returns the first element that is a descendant of node that matches selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelector)`, tags: [{ name: "deprecated" }], required: true, type: "{ <K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null; <K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null; <K extends keyof MathMLElementTagNameMap>(selectors: K): MathMLElementTagNameMap[K] | null; <K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): HTMLElementDeprecatedTagNameMap[K] | null; <E extends Element = Element>(selectors: string): E | null; }", schema: "{ <K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null; <K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null; <K extends keyof MathMLElementTagNameMap>(selectors: K): MathMLElementTagNameMap[K] | null; <K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): HTMLElementDeprecatedTagNameMap[K] | null; <E extends Element = Element>(selectors: string): E | null; }", declarations: [] }, { name: "querySelectorAll", global: false, description: `Returns all element descendants of node that match selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll)`, tags: [{ name: "deprecated" }], required: true, type: "{ <K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>; <K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>; <K extends keyof MathMLElementTagNameMap>(selectors: K): NodeListOf<MathMLElementTagNameMap[K]>; <K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): NodeListOf<HTMLElementDeprecatedTagNameMap[K]>; <E extends Element = Element>(selectors: string): NodeListOf<E>; }", schema: "{ <K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>; <K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>; <K extends keyof MathMLElementTagNameMap>(selectors: K): NodeListOf<MathMLElementTagNameMap[K]>; <K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): NodeListOf<HTMLElementDeprecatedTagNameMap[K]>; <E extends Element = Element>(selectors: string): NodeListOf<E>; }", declarations: [] }, { name: "replaceChildren", global: false, description: `Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/replaceChildren)`, tags: [], required: true, type: "(...nodes: (string | Node)[]) => void", schema: "(...nodes: (string | Node)[]) => void", declarations: [] }, { name: "assignedSlot", global: false, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/assignedSlot)", tags: [], required: true, type: "HTMLSlotElement | null", schema: "HTMLSlotElement | null", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/getReorderScrollCandidates.ts" });
const Ke = "scroll-snap-type", jo = "none", ic = "", oc = (e) => {
  const a = new Set(e.filter((n) => n instanceof HTMLElement)), t = [];
  for (const n of a) t.push({ element: n, value: n.style.getPropertyValue(Ke), priority: n.style.getPropertyPriority(Ke) }), n.style.setProperty(Ke, jo);
  let r = false;
  return { dispose: () => {
    if (!r) {
      r = true;
      for (const { element: n, value: i, priority: o } of t) {
        const l = n.style.getPropertyPriority(Ke);
        n.style.getPropertyValue(Ke) === jo && l === ic && (i ? n.style.setProperty(Ke, i, o) : n.style.removeProperty(Ke));
      }
    }
  } };
}, lc = 10, Fo = (e, a, t, r, n) => {
  const i = t - a, o = n - r;
  if (i <= 0 || o <= 0) return null;
  const l = i / o;
  return { coordinate: a + (e - r) * l, scale: l };
}, sc = (e, a, t, r = lc) => {
  const n = Fo(t.x, e.left, e.right, a.left, a.right), i = Fo(t.y, e.top, e.bottom, a.top, a.bottom);
  return !n || !i ? null : { coordinates: { x: n.coordinate, y: i.coordinate }, tolerance: { x: r * n.scale, y: r * i.scale } };
}, hg = 1, jt = (e, a) => Math.max(0, e - a), gc = (e, a, t, r, n = hg) => t === "y" ? r === T.Reverse ? a.top - e.top > n : r === T.Forward ? e.bottom - a.bottom > n : false : r === T.Reverse ? a.left - e.left > n : r === T.Forward ? e.right - a.right > n : false, Dc = (e, a, t, r, n = hg) => {
  if (e === "container") return { x: r.direction.x * r.speed.x, y: r.direction.y * r.speed.y };
  const i = jt(Math.max(0, t.top - a.top), n), o = jt(Math.max(0, a.bottom - t.bottom), n), l = jt(Math.max(0, t.left - a.left), n), s = jt(Math.max(0, a.right - t.right), n);
  let D = 0;
  r.direction.y === T.Reverse && i > 0 ? D = -Math.min(r.speed.y, i) : r.direction.y === T.Forward && o > 0 && (D = Math.min(r.speed.y, o));
  let p = 0;
  return r.direction.x === T.Reverse && l > 0 ? p = -Math.min(r.speed.x, l) : r.direction.x === T.Forward && s > 0 && (p = Math.min(r.speed.x, s)), { x: p, y: D };
}, Qr = 25, pc = { x: 0.2, y: 0.2 }, bg = (e) => e.x === T.Idle && e.y === T.Idle, Ko = (e, a) => ({ top: e.top * a.scaleY + a.y, right: e.right * a.scaleX + a.x, bottom: e.bottom * a.scaleY + a.y, left: e.left * a.scaleX + a.x, width: e.width * a.scaleX, height: e.height * a.scaleY }), fg = (e) => {
  const a = e === e.ownerDocument.scrollingElement, t = a ? ps(e) : oa(e);
  return { full: t, visible: a ? t : xa(e) };
}, uc = (e, a, t, r) => {
  const n = { x: t ? a.x : T.Idle, y: r ? a.y : T.Idle };
  if (bg(n)) return n;
  const i = Pi(e, n);
  return (n.y === T.Reverse && !i.top || n.y === T.Forward && !i.bottom) && (n.y = T.Idle), (n.x === T.Reverse && !i.left || n.x === T.Forward && !i.right) && (n.x = T.Idle), n;
}, cc = (e, a, t, r) => {
  if (!gc(a, fg(e).visible, t, r)) return false;
  const n = { x: t === "x" ? r : T.Idle, y: t === "y" ? r : T.Idle }, i = Pi(e, n);
  return t === "x" ? r === T.Reverse ? i.left : i.right : r === T.Reverse ? i.top : i.bottom;
}, Ho = (e, a, t, r, n) => {
  for (let i = a; i < e.length; i += 1) {
    const o = e[i];
    if (o && cc(o, t, r, n)) return true;
  }
  return false;
}, dc = (e, a, t, r, n, i, o, l) => {
  const { full: s, visible: D } = fg(e), p = ea(e), g = sc(Ko(s, p), Ko(D, p), r);
  if (!g) return { resolvedX: false, resolvedY: false };
  const { direction: c, speed: d } = Ms(e, g.coordinates, void 0, Qr, pc, g.tolerance), m = { x: Math.min(d.x, Qr), y: Math.min(d.y, Qr) }, P = uc(e, c, n, i);
  if (e === a) {
    const b = l + 1;
    P.x !== T.Idle && Ho(o, b, t, "x", P.x) && (P.x = T.Idle), P.y !== T.Idle && Ho(o, b, t, "y", P.y) && (P.y = T.Idle);
  }
  if (bg(P)) return { resolvedX: false, resolvedY: false };
  const y = e === a ? "container" : "ancestor", u = Dc(y, t, y === "ancestor" ? D : t, { direction: P, speed: m }), h = e.scrollLeft, f = e.scrollTop;
  return (u.x !== 0 || u.y !== 0) && e.scrollTo({ left: h + u.x, top: f + u.y, behavior: "instant" }), { resolvedX: y === "ancestor" ? u.x !== 0 : e.scrollLeft !== h, resolvedY: y === "ancestor" ? u.y !== 0 : e.scrollTop !== f };
}, hc = (e, a, t) => {
  const { position: r, source: n } = e.dragOperation;
  if (!a.isConnected || !n?.element?.isConnected) return;
  const i = r.current, o = oa(a);
  let l = true, s = true;
  for (let D = 0; D < t.length && !(!l && !s); D += 1) {
    const p = t[D];
    if (!p) continue;
    const { resolvedX: g, resolvedY: c } = dc(p, a, o, i, l, s, t, D);
    l && g && (l = false), s && c && (s = false);
  }
};
class bc extends G {
  constructor(a) {
    super(a), this.registerEffect(() => {
      if (this.disabled || !a.dragOperation.status.dragging) return;
      const t = ut(a.dragOperation);
      if (!t) return;
      const r = ct(t);
      if (r.length === 0) return;
      const n = oc(r);
      let i = true, o;
      const l = () => {
        if (!i || this.disabled || !a.dragOperation.status.dragging) {
          i = false;
          return;
        }
        hc(a, t, r), o = requestAnimationFrame(l);
      };
      return o = requestAnimationFrame(l), () => {
        i = false, o !== void 0 && cancelAnimationFrame(o), n.dispose();
      };
    });
  }
}
const fc = (e) => e.pointerType === "touch" || e.pointerType === "pen" ? [new qe.Delay({ value: 400, tolerance: 8 })] : [new qe.Distance({ value: 4 })], mc = [Xs.configure({ activationConstraints: fc })], Qt = (e) => e.filter((a) => a !== As).map((a) => a === Ci ? bc : a), Pc = { duration: 350, easing: "cubic-bezier(0.42, 1.67, 0.21, 0.90)", idle: false }, vc = [tc.configure({ element: ut })];
Qt.__docgenInfo = Object.assign({ displayName: Qt.name ?? Qt.__name }, { exportName: "getReorderPlugins", displayName: "getReorderPlugins", description: 'Centralized plugin set for every `ReorderSurface`: keeps cursor handling, original-element\nfeedback, and selection prevention from the dnd-kit default preset, but excludes the\n`Accessibility` plugin and replaces the default `AutoScroller` with `ReorderAutoScroller`. This\nsurface is pointer-only, and `Accessibility` would advertise unsupported keyboard drag\nsemantics (`aria-roledescription="draggable"`, `aria-grabbed`, screen-reader drag instructions)\non the primary row action. The default `AutoScroller` has no notion of the reorder container\'s\nbounds, so it keeps autoscrolling an outer scrollable ancestor (e.g. a bottom sheet) even once\nthat ancestor can no longer reveal more of the container; `ReorderAutoScroller` replaces it\nrather than running alongside it.', type: 2, props: [{ name: "length", global: false, description: "Gets or sets the length of the array. This is a number one higher than the highest index in the array.", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "toString", global: false, description: "Returns a string representation of an array.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "toLocaleString", global: false, description: "Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.", tags: [], required: true, type: "{ (): string; (locales: string | string[], options?: (Intl.NumberFormatOptions & Intl.DateTimeFormatOptions) | undefined): string; }", schema: "{ (): string; (locales: string | string[], options?: (Intl.NumberFormatOptions & Intl.DateTimeFormatOptions) | undefined): string; }", declarations: [] }, { name: "pop", global: false, description: `Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.`, tags: [], required: true, type: "() => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>> | undefined", schema: "() => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>> | undefined", declarations: [] }, { name: "push", global: false, description: "Appends new elements to the end of an array, and returns the new length of the array.", tags: [{ name: "param", text: "items New elements to add to the array." }], required: true, type: "(...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => number", schema: "(...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => number", declarations: [] }, { name: "concat", global: false, description: `Combines two or more arrays.
This method returns a new array without modifying any existing arrays.`, tags: [{ name: "param", text: "items Additional arrays and/or items to add to the end of the array." }, { name: "param", text: "items Additional arrays and/or items to add to the end of the array." }], required: true, type: "{ (...items: ConcatArray<PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>[]): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]; (...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>> | ConcatArray<PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>)[]): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]; }", schema: "{ (...items: ConcatArray<PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>[]): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]; (...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>> | ConcatArray<PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>)[]): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]; }", declarations: [] }, { name: "join", global: false, description: "Adds all the elements of an array into a string, separated by the specified separator string.", tags: [{ name: "param", text: "separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma." }], required: true, type: "(separator?: string | undefined) => string", schema: "(separator?: string | undefined) => string", declarations: [] }, { name: "reverse", global: false, description: `Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.`, tags: [], required: true, type: "() => (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]", schema: "() => (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]", declarations: [] }, { name: "shift", global: false, description: `Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.`, tags: [], required: true, type: "() => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>> | undefined", schema: "() => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>> | undefined", declarations: [] }, { name: "slice", global: false, description: `Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.`, tags: [{ name: "param", text: `start The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.` }, { name: "param", text: `end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.` }], required: true, type: "(start?: number | undefined, end?: number | undefined) => (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]", schema: "(start?: number | undefined, end?: number | undefined) => (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]", declarations: [] }, { name: "sort", global: false, description: `Sorts an array in place.
This method mutates the array and returns a reference to the same array.`, tags: [{ name: "param", text: "compareFn Function used to determine the order of the elements. It is expected to return\na negative value if the first argument is less than the second argument, zero if they're equal, and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.\n```ts\n[11,2,22,1].sort((a, b) => a - b)\n```" }], required: true, type: "(compareFn?: ((a: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, b: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>) => number) | undefined) => Plugins<DragDropManager<Data, Draggable<Data>, Droppable<Data>>>", schema: "(compareFn?: ((a: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, b: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>) => number) | undefined) => Plugins<DragDropManager<Data, Draggable<Data>, Droppable<Data>>>", declarations: [] }, { name: "splice", global: false, description: "Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.", tags: [{ name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: `deleteCount The number of elements to remove. Omitting this argument will remove all elements from the start
paramater location to end of the array. If value of this argument is either a negative number, zero, undefined, or a type
that cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.` }, { name: "returns", text: "An array containing the elements that were deleted." }, { name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: `deleteCount The number of elements to remove. If value of this argument is either a negative number, zero,
undefined, or a type that cannot be converted to an integer, the function will evaluate the argument as zero and
not remove any elements.` }, { name: "param", text: "items Elements to insert into the array in place of the deleted elements." }, { name: "returns", text: "An array containing the elements that were deleted." }], required: true, type: "{ (start: number, deleteCount?: number | undefined): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]; (start: number, deleteCount: number, ...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]; }", schema: "{ (start: number, deleteCount?: number | undefined): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]; (start: number, deleteCount: number, ...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]; }", declarations: [] }, { name: "unshift", global: false, description: "Inserts new elements at the start of an array, and returns the new length of the array.", tags: [{ name: "param", text: "items Elements to insert at the start of the array." }], required: true, type: "(...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => number", schema: "(...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => number", declarations: [] }, { name: "indexOf", global: false, description: "Returns the index of the first occurrence of a value in an array, or -1 if it is not present.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0." }], required: true, type: "{ (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, fromIndex?: number | undefined): number; (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, fromIndex?: number | undefined): number; }", schema: "{ (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, fromIndex?: number | undefined): number; (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, fromIndex?: number | undefined): number; }", declarations: [] }, { name: "lastIndexOf", global: false, description: "Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array." }], required: true, type: "{ (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, fromIndex?: number | undefined): number; (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, fromIndex?: number | undefined): number; }", schema: "{ (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, fromIndex?: number | undefined): number; (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, fromIndex?: number | undefined): number; }", declarations: [] }, { name: "every", global: false, description: "Determines whether all the members of an array satisfy the specified test.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }, { name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => unknown, thisArg?: any): boolean; }", schema: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => unknown, thisArg?: any): boolean; }", declarations: [] }, { name: "some", global: false, description: "Determines whether the specified callback function returns true for any element of an array.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => unknown, thisArg?: any) => boolean", schema: "(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => unknown, thisArg?: any) => boolean", declarations: [] }, { name: "forEach", global: false, description: "Performs the specified action for each element in an array.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "(callbackfn: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => void, thisArg?: any) => void", schema: "(callbackfn: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => void, thisArg?: any) => void", declarations: [] }, { name: "map", global: false, description: "Calls a defined callback function on each element of an array, and returns an array that contains the results.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "<U>(callbackfn: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => U, thisArg?: any) => U[]", schema: "<U>(callbackfn: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => U, thisArg?: any) => U[]", declarations: [] }, { name: "filter", global: false, description: "Returns the elements of an array that meet the condition specified in a callback function.", tags: [{ name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }, { name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => value is S, thisArg?: any): S[]; (predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => unknown, thisArg?: any): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]; <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>(predicate: BooleanConstructor, thisArg?: any): TSReset.NonFalsy<S>[]; }", schema: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => value is S, thisArg?: any): S[]; (predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => unknown, thisArg?: any): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]; <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>(predicate: BooleanConstructor, thisArg?: any): TSReset.NonFalsy<S>[]; }", declarations: [] }, { name: "reduce", global: false, description: "Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentIndex: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>; (callbackfn: (previousValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentIndex: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, initialValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>; <U>(callbackfn: (previousValue: U, currentValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentIndex: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => U, initialValue: U): U; }", schema: "{ (callbackfn: (previousValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentIndex: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>; (callbackfn: (previousValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentIndex: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, initialValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>; <U>(callbackfn: (previousValue: U, currentValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentIndex: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => U, initialValue: U): U; }", declarations: [] }, { name: "reduceRight", global: false, description: "Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentIndex: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>; (callbackfn: (previousValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentIndex: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, initialValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>; <U>(callbackfn: (previousValue: U, currentValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentIndex: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => U, initialValue: U): U; }", schema: "{ (callbackfn: (previousValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentIndex: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>; (callbackfn: (previousValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentIndex: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, initialValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>; <U>(callbackfn: (previousValue: U, currentValue: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, currentIndex: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => U, initialValue: U): U; }", declarations: [] }, { name: "find", global: false, description: `Returns the value of the first element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, obj: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, obj: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => unknown, thisArg?: any): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>> | undefined; }", schema: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, obj: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, obj: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => unknown, thisArg?: any): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>> | undefined; }", declarations: [] }, { name: "findIndex", global: false, description: `Returns the index of the first element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, obj: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => unknown, thisArg?: any) => number", schema: "(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, obj: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => unknown, thisArg?: any) => number", declarations: [] }, { name: "fill", global: false, description: "Changes all array elements from `start` to `end` index to a static `value` and returns the modified array", tags: [{ name: "param", text: "value value to fill array section with" }, { name: "param", text: `start index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.` }, { name: "param", text: `end index to stop filling the array at. If end is negative, it is treated as
length+end.` }], required: true, type: "(value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, start?: number | undefined, end?: number | undefined) => Plugins<DragDropManager<Data, Draggable<Data>, Droppable<Data>>>", schema: "(value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, start?: number | undefined, end?: number | undefined) => Plugins<DragDropManager<Data, Draggable<Data>, Droppable<Data>>>", declarations: [] }, { name: "copyWithin", global: false, description: `Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target`, tags: [{ name: "param", text: `target If target is negative, it is treated as length+target where length is the
length of the array.` }, { name: "param", text: `start If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.` }, { name: "param", text: "end If not specified, length of the this object is used as its default value." }], required: true, type: "(target: number, start: number, end?: number | undefined) => Plugins<DragDropManager<Data, Draggable<Data>, Droppable<Data>>>", schema: "(target: number, start: number, end?: number | undefined) => Plugins<DragDropManager<Data, Draggable<Data>, Droppable<Data>>>", declarations: [] }, { name: "entries", global: false, description: "Returns an iterable of key, value pairs for every entry in the array", tags: [], required: true, type: "() => ArrayIterator<[number, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>]>", schema: "() => ArrayIterator<[number, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>]>", declarations: [] }, { name: "keys", global: false, description: "Returns an iterable of keys in the array", tags: [], required: true, type: "() => ArrayIterator<number>", schema: "() => ArrayIterator<number>", declarations: [] }, { name: "values", global: false, description: "Returns an iterable of values in the array", tags: [], required: true, type: "() => ArrayIterator<PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>", schema: "() => ArrayIterator<PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>", declarations: [] }, { name: "includes", global: false, description: "Determines whether an array includes a certain element, returning true or false as appropriate.", tags: [{ name: "param", text: "searchElement The element to search for." }, { name: "param", text: "fromIndex The position in this array at which to begin searching for searchElement." }], required: true, type: "{ (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, fromIndex?: number | undefined): boolean; (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, fromIndex?: number | undefined): boolean; }", schema: "{ (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, fromIndex?: number | undefined): boolean; (searchElement: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, fromIndex?: number | undefined): boolean; }", declarations: [] }, { name: "flatMap", global: false, description: `Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.`, tags: [{ name: "param", text: `callback A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.` }], required: true, type: "<U, This = undefined>(callback: (this: This, value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => U | readonly U[], thisArg?: This | undefined) => U[]", schema: "<U, This = undefined>(callback: (this: This, value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => U | readonly U[], thisArg?: This | undefined) => U[]", declarations: [] }, { name: "flat", global: false, description: `Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.`, tags: [{ name: "param", text: "depth The maximum recursion depth" }], required: true, type: "<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]", schema: "<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]", declarations: [] }, { name: "at", global: false, description: "Returns the item located at the specified index.", tags: [{ name: "param", text: "index The zero-based index of the desired code unit. A negative index will count back from the last item." }], required: true, type: "(index: number) => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>> | undefined", schema: "(index: number) => PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>> | undefined", declarations: [] }, { name: "findLast", global: false, description: `Returns the value of the last element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate findLast calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found, findLast
immediately returns that element value. Otherwise, findLast returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => unknown, thisArg?: any): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>> | undefined; }", schema: "{ <S extends PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => unknown, thisArg?: any): PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>> | undefined; }", declarations: [] }, { name: "findLastIndex", global: false, description: `Returns the index of the last element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate findLastIndex calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found,
findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => unknown, thisArg?: any) => number", schema: "(predicate: (value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, index: number, array: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]) => unknown, thisArg?: any) => number", declarations: [] }, { name: "toReversed", global: false, description: "Returns a copy of an array with its elements reversed.", tags: [], required: true, type: "() => (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]", schema: "() => (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]", declarations: [] }, { name: "toSorted", global: false, description: "Returns a copy of an array with its elements sorted.", tags: [{ name: "param", text: "compareFn Function used to determine the order of the elements. It is expected to return\na negative value if the first argument is less than the second argument, zero if they're equal, and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.\n```ts\n[11, 2, 22, 1].toSorted((a, b) => a - b) // [1, 2, 11, 22]\n```" }], required: true, type: "(compareFn?: ((a: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, b: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>) => number) | undefined) => (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]", schema: "(compareFn?: ((a: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>, b: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>) => number) | undefined) => (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]", declarations: [] }, { name: "toSpliced", global: false, description: `Copies an array and removes elements and, if necessary, inserts new elements in their place. Returns the copied array.
Copies an array and removes elements while returning the remaining elements.`, tags: [{ name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "param", text: "items Elements to insert into the copied array in place of the deleted elements." }, { name: "returns", text: "The copied array." }, { name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "returns", text: "A copy of the original array with the remaining elements." }], required: true, type: "{ (start: number, deleteCount: number, ...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]; (start: number, deleteCount?: number | undefined): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]; }", schema: "{ (start: number, deleteCount: number, ...items: (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]; (start: number, deleteCount?: number | undefined): (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]; }", declarations: [] }, { name: "with", global: false, description: `Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array.`, tags: [{ name: "param", text: `index The index of the value to overwrite. If the index is
negative, then it replaces from the end of the array.` }, { name: "param", text: "value The value to write into the copied array." }, { name: "returns", text: "The copied array with the updated value." }], required: true, type: "(index: number, value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>) => (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]", schema: "(index: number, value: PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>) => (PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>)[]", declarations: [] }, { name: "__@iterator@615", global: false, description: "Iterator", tags: [], required: true, type: "() => ArrayIterator<PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>", schema: "() => ArrayIterator<PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions> | PluginDescriptor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginConstructor<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, Plugin<DragDropManager<Data, Draggable<Data>, Droppable<Data>>, PluginOptions>, PluginOptions>>>", declarations: [] }, { name: "__@unscopables@617", global: false, description: `Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.`, tags: [], required: true, type: "{ [x: number]: boolean | undefined; length?: boolean; toString?: boolean; toLocaleString?: boolean; pop?: boolean; push?: boolean; concat?: boolean; join?: boolean; reverse?: boolean; shift?: boolean; slice?: boolean; sort?: boolean; splice?: boolean; unshift?: boolean; indexOf?: boolean; lastIndexOf?: boolean; every?: boolean; some?: boolean; forEach?: boolean; map?: boolean; filter?: boolean; reduce?: boolean; reduceRight?: boolean; find?: boolean; findIndex?: boolean; fill?: boolean; copyWithin?: boolean; entries?: boolean; keys?: boolean; values?: boolean; includes?: boolean; flatMap?: boolean; flat?: boolean; at?: boolean; findLast?: boolean; findLastIndex?: boolean; toReversed?: boolean; toSorted?: boolean; toSpliced?: boolean; with?: boolean; [Symbol.iterator]?: boolean; readonly [Symbol.unscopables]?: boolean; }", schema: "{ [x: number]: boolean | undefined; length?: boolean; toString?: boolean; toLocaleString?: boolean; pop?: boolean; push?: boolean; concat?: boolean; join?: boolean; reverse?: boolean; shift?: boolean; slice?: boolean; sort?: boolean; splice?: boolean; unshift?: boolean; indexOf?: boolean; lastIndexOf?: boolean; every?: boolean; some?: boolean; forEach?: boolean; map?: boolean; filter?: boolean; reduce?: boolean; reduceRight?: boolean; find?: boolean; findIndex?: boolean; fill?: boolean; copyWithin?: boolean; entries?: boolean; keys?: boolean; values?: boolean; includes?: boolean; flatMap?: boolean; flat?: boolean; at?: boolean; findLast?: boolean; findLastIndex?: boolean; toReversed?: boolean; toSorted?: boolean; toSpliced?: boolean; with?: boolean; [Symbol.iterator]?: boolean; readonly [Symbol.unscopables]?: boolean; }", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/reorderConfig.ts" });
const mg = /* @__PURE__ */ Symbol("reorder-surface"), yc = (e) => {
  if (e === "touch") try {
    navigator.vibrate(10);
  } catch {
  }
}, Mc = (e, a) => {
  e !== "touch" && e !== "pen" || requestAnimationFrame(() => {
    const t = document.getSelection();
    t && t.rangeCount > 0 && t.removeAllRanges();
    const r = document.activeElement;
    r instanceof HTMLElement && (r === a || (a?.contains(r) ?? false)) && typeof r.blur == "function" && r.blur();
  });
}, er = (e, a, t) => {
  const r = [...e], [n] = r.splice(a, 1);
  return n === void 0 || r.splice(t, 0, n), r;
}, ar = (e, a) => e.length === a.length && e.every((t, r) => t === a[r]);
er.__docgenInfo = Object.assign({ displayName: er.name ?? er.__name }, { exportName: "moveItem", displayName: "moveItem", description: "Returns a copy of `list` with the item at `from` relocated to `to`.", type: 2, props: [{ name: "length", global: false, description: "Gets the length of the array. This is a number one higher than the highest element defined in an array.", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "toString", global: false, description: "Returns a string representation of an array.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "toLocaleString", global: false, description: "Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.", tags: [], required: true, type: "{ (): string; (locales: string | string[], options?: (Intl.NumberFormatOptions & Intl.DateTimeFormatOptions) | undefined): string; }", schema: "{ (): string; (locales: string | string[], options?: (Intl.NumberFormatOptions & Intl.DateTimeFormatOptions) | undefined): string; }", declarations: [] }, { name: "concat", global: false, description: "Combines two or more arrays.", tags: [{ name: "param", text: "items Additional items to add to the end of array1." }, { name: "param", text: "items Additional items to add to the end of array1." }], required: true, type: "{ (...items: ConcatArray<T>[]): T[]; (...items: (T | ConcatArray<T>)[]): T[]; }", schema: "{ (...items: ConcatArray<T>[]): T[]; (...items: (T | ConcatArray<T>)[]): T[]; }", declarations: [] }, { name: "join", global: false, description: "Adds all the elements of an array separated by the specified separator string.", tags: [{ name: "param", text: "separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma." }], required: true, type: "(separator?: string | undefined) => string", schema: "(separator?: string | undefined) => string", declarations: [] }, { name: "slice", global: false, description: "Returns a section of an array.", tags: [{ name: "param", text: "start The beginning of the specified portion of the array." }, { name: "param", text: "end The end of the specified portion of the array. This is exclusive of the element at the index 'end'." }], required: true, type: "(start?: number | undefined, end?: number | undefined) => T[]", schema: "(start?: number | undefined, end?: number | undefined) => T[]", declarations: [] }, { name: "indexOf", global: false, description: "Returns the index of the first occurrence of a value in an array.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0." }], required: true, type: "{ (searchElement: T, fromIndex?: number | undefined): number; (searchElement: T | (TSReset.WidenLiteral<T> & {}), fromIndex?: number | undefined): number; }", schema: "{ (searchElement: T, fromIndex?: number | undefined): number; (searchElement: T | (TSReset.WidenLiteral<T> & {}), fromIndex?: number | undefined): number; }", declarations: [] }, { name: "lastIndexOf", global: false, description: "Returns the index of the last occurrence of a specified value in an array.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array." }], required: true, type: "{ (searchElement: T, fromIndex?: number | undefined): number; (searchElement: T | (TSReset.WidenLiteral<T> & {}), fromIndex?: number | undefined): number; }", schema: "{ (searchElement: T, fromIndex?: number | undefined): number; (searchElement: T | (TSReset.WidenLiteral<T> & {}), fromIndex?: number | undefined): number; }", declarations: [] }, { name: "every", global: false, description: "Determines whether all the members of an array satisfy the specified test.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }, { name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "{ <S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean; }", schema: "{ <S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean; }", declarations: [] }, { name: "some", global: false, description: "Determines whether the specified callback function returns true for any element of an array.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any) => boolean", schema: "(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any) => boolean", declarations: [] }, { name: "forEach", global: false, description: "Performs the specified action for each element in an array.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any) => void", schema: "(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any) => void", declarations: [] }, { name: "map", global: false, description: "Calls a defined callback function on each element of an array, and returns an array that contains the results.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any) => U[]", schema: "<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any) => U[]", declarations: [] }, { name: "filter", global: false, description: "Returns the elements of an array that meet the condition specified in a callback function.", tags: [{ name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }, { name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "{ <S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[]; (predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[]; <S extends T>(predicate: BooleanConstructor, thisArg?: any): TSReset.NonFalsy<S>[]; }", schema: "{ <S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[]; (predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[]; <S extends T>(predicate: BooleanConstructor, thisArg?: any): TSReset.NonFalsy<S>[]; }", declarations: [] }, { name: "reduce", global: false, description: "Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T; (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T; <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U; }", schema: "{ (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T; (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T; <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U; }", declarations: [] }, { name: "reduceRight", global: false, description: "Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T; (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T; <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U; }", schema: "{ (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T; (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T; <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U; }", declarations: [] }, { name: "find", global: false, description: `Returns the value of the first element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends T>(predicate: (value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined; }", schema: "{ <S extends T>(predicate: (value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined; }", declarations: [] }, { name: "findIndex", global: false, description: `Returns the index of the first element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any) => number", schema: "(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any) => number", declarations: [] }, { name: "entries", global: false, description: "Returns an iterable of key, value pairs for every entry in the array", tags: [], required: true, type: "() => ArrayIterator<[number, T]>", schema: "() => ArrayIterator<[number, T]>", declarations: [] }, { name: "keys", global: false, description: "Returns an iterable of keys in the array", tags: [], required: true, type: "() => ArrayIterator<number>", schema: "() => ArrayIterator<number>", declarations: [] }, { name: "values", global: false, description: "Returns an iterable of values in the array", tags: [], required: true, type: "() => ArrayIterator<T>", schema: "() => ArrayIterator<T>", declarations: [] }, { name: "includes", global: false, description: "Determines whether an array includes a certain element, returning true or false as appropriate.", tags: [{ name: "param", text: "searchElement The element to search for." }, { name: "param", text: "fromIndex The position in this array at which to begin searching for searchElement." }], required: true, type: "{ (searchElement: T, fromIndex?: number | undefined): boolean; (searchElement: T | (TSReset.WidenLiteral<T> & {}), fromIndex?: number | undefined): boolean; }", schema: "{ (searchElement: T, fromIndex?: number | undefined): boolean; (searchElement: T | (TSReset.WidenLiteral<T> & {}), fromIndex?: number | undefined): boolean; }", declarations: [] }, { name: "flatMap", global: false, description: `Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.`, tags: [{ name: "param", text: `callback A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.` }], required: true, type: "<U, This = undefined>(callback: (this: This, value: T, index: number, array: T[]) => U | readonly U[], thisArg?: This | undefined) => U[]", schema: "<U, This = undefined>(callback: (this: This, value: T, index: number, array: T[]) => U | readonly U[], thisArg?: This | undefined) => U[]", declarations: [] }, { name: "flat", global: false, description: `Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.`, tags: [{ name: "param", text: "depth The maximum recursion depth" }], required: true, type: "<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]", schema: "<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]", declarations: [] }, { name: "at", global: false, description: "Returns the item located at the specified index.", tags: [{ name: "param", text: "index The zero-based index of the desired code unit. A negative index will count back from the last item." }], required: true, type: "(index: number) => T | undefined", schema: "(index: number) => T | undefined", declarations: [] }, { name: "findLast", global: false, description: `Returns the value of the last element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate findLast calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found, findLast
immediately returns that element value. Otherwise, findLast returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T | undefined; }", schema: "{ <S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T | undefined; }", declarations: [] }, { name: "findLastIndex", global: false, description: `Returns the index of the last element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate findLastIndex calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found,
findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any) => number", schema: "(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any) => number", declarations: [] }, { name: "toReversed", global: false, description: "Copies the array and returns the copied array with all of its elements reversed.", tags: [], required: true, type: "() => T[]", schema: "() => T[]", declarations: [] }, { name: "toSorted", global: false, description: "Copies and sorts the array.", tags: [{ name: "param", text: "compareFn Function used to determine the order of the elements. It is expected to return\na negative value if the first argument is less than the second argument, zero if they're equal, and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.\n```ts\n[11, 2, 22, 1].toSorted((a, b) => a - b) // [1, 2, 11, 22]\n```" }], required: true, type: "(compareFn?: ((a: T, b: T) => number) | undefined) => T[]", schema: "(compareFn?: ((a: T, b: T) => number) | undefined) => T[]", declarations: [] }, { name: "toSpliced", global: false, description: `Copies an array and removes elements while, if necessary, inserting new elements in their place, returning the remaining elements.
Copies an array and removes elements while returning the remaining elements.`, tags: [{ name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "param", text: "items Elements to insert into the copied array in place of the deleted elements." }, { name: "returns", text: "A copy of the original array with the remaining elements." }, { name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "returns", text: "A copy of the original array with the remaining elements." }], required: true, type: "{ (start: number, deleteCount: number, ...items: T[]): T[]; (start: number, deleteCount?: number | undefined): T[]; }", schema: "{ (start: number, deleteCount: number, ...items: T[]): T[]; (start: number, deleteCount?: number | undefined): T[]; }", declarations: [] }, { name: "with", global: false, description: `Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array`, tags: [{ name: "param", text: `index The index of the value to overwrite. If the index is
negative, then it replaces from the end of the array.` }, { name: "param", text: "value The value to insert into the copied array." }, { name: "returns", text: "A copy of the original array with the inserted value." }], required: true, type: "(index: number, value: T) => T[]", schema: "(index: number, value: T) => T[]", declarations: [] }, { name: "__@iterator@615", global: false, description: "Iterator of values in the array.", tags: [], required: true, type: "() => ArrayIterator<T>", schema: "() => ArrayIterator<T>", declarations: [] }, { name: "__@unscopables@617", global: false, description: `Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.`, tags: [], required: true, type: "{ readonly [x: number]: boolean | undefined; readonly length?: boolean; toString?: boolean; toLocaleString?: boolean; concat?: boolean; join?: boolean; slice?: boolean; indexOf?: boolean; lastIndexOf?: boolean; every?: boolean; some?: boolean; forEach?: boolean; map?: boolean; filter?: boolean; reduce?: boolean; reduceRight?: boolean; find?: boolean; findIndex?: boolean; entries?: boolean; keys?: boolean; values?: boolean; includes?: boolean; flatMap?: boolean; flat?: boolean; at?: boolean; findLast?: boolean; findLastIndex?: boolean; toReversed?: boolean; toSorted?: boolean; toSpliced?: boolean; with?: boolean; [Symbol.iterator]?: boolean; readonly [Symbol.unscopables]?: boolean; }", schema: "{ readonly [x: number]: boolean | undefined; readonly length?: boolean; toString?: boolean; toLocaleString?: boolean; concat?: boolean; join?: boolean; slice?: boolean; indexOf?: boolean; lastIndexOf?: boolean; every?: boolean; some?: boolean; forEach?: boolean; map?: boolean; filter?: boolean; reduce?: boolean; reduceRight?: boolean; find?: boolean; findIndex?: boolean; entries?: boolean; keys?: boolean; values?: boolean; includes?: boolean; flatMap?: boolean; flat?: boolean; at?: boolean; findLast?: boolean; findLastIndex?: boolean; toReversed?: boolean; toSorted?: boolean; toSpliced?: boolean; with?: boolean; [Symbol.iterator]?: boolean; readonly [Symbol.unscopables]?: boolean; }", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/reorderArray.ts" });
ar.__docgenInfo = Object.assign({ displayName: ar.name ?? ar.__name }, { exportName: "isSameOrder", displayName: "isSameOrder", description: "Compares two ordered lists for exact positional equality.", type: 2, props: [{ name: "length", global: false, description: "Gets the length of the array. This is a number one higher than the highest element defined in an array.", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "toString", global: false, description: "Returns a string representation of an array.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "toLocaleString", global: false, description: "Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.", tags: [], required: true, type: "{ (): string; (locales: string | string[], options?: (Intl.NumberFormatOptions & Intl.DateTimeFormatOptions) | undefined): string; }", schema: "{ (): string; (locales: string | string[], options?: (Intl.NumberFormatOptions & Intl.DateTimeFormatOptions) | undefined): string; }", declarations: [] }, { name: "concat", global: false, description: "Combines two or more arrays.", tags: [{ name: "param", text: "items Additional items to add to the end of array1." }, { name: "param", text: "items Additional items to add to the end of array1." }], required: true, type: "{ (...items: ConcatArray<T>[]): T[]; (...items: (T | ConcatArray<T>)[]): T[]; }", schema: "{ (...items: ConcatArray<T>[]): T[]; (...items: (T | ConcatArray<T>)[]): T[]; }", declarations: [] }, { name: "join", global: false, description: "Adds all the elements of an array separated by the specified separator string.", tags: [{ name: "param", text: "separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma." }], required: true, type: "(separator?: string | undefined) => string", schema: "(separator?: string | undefined) => string", declarations: [] }, { name: "slice", global: false, description: "Returns a section of an array.", tags: [{ name: "param", text: "start The beginning of the specified portion of the array." }, { name: "param", text: "end The end of the specified portion of the array. This is exclusive of the element at the index 'end'." }], required: true, type: "(start?: number | undefined, end?: number | undefined) => T[]", schema: "(start?: number | undefined, end?: number | undefined) => T[]", declarations: [] }, { name: "indexOf", global: false, description: "Returns the index of the first occurrence of a value in an array.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0." }], required: true, type: "{ (searchElement: T, fromIndex?: number | undefined): number; (searchElement: T | (TSReset.WidenLiteral<T> & {}), fromIndex?: number | undefined): number; }", schema: "{ (searchElement: T, fromIndex?: number | undefined): number; (searchElement: T | (TSReset.WidenLiteral<T> & {}), fromIndex?: number | undefined): number; }", declarations: [] }, { name: "lastIndexOf", global: false, description: "Returns the index of the last occurrence of a specified value in an array.", tags: [{ name: "param", text: "searchElement The value to locate in the array." }, { name: "param", text: "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array." }], required: true, type: "{ (searchElement: T, fromIndex?: number | undefined): number; (searchElement: T | (TSReset.WidenLiteral<T> & {}), fromIndex?: number | undefined): number; }", schema: "{ (searchElement: T, fromIndex?: number | undefined): number; (searchElement: T | (TSReset.WidenLiteral<T> & {}), fromIndex?: number | undefined): number; }", declarations: [] }, { name: "every", global: false, description: "Determines whether all the members of an array satisfy the specified test.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }, { name: "param", text: `predicate A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "{ <S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean; }", schema: "{ <S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean; }", declarations: [] }, { name: "some", global: false, description: "Determines whether the specified callback function returns true for any element of an array.", tags: [{ name: "param", text: `predicate A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.` }], required: true, type: "(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any) => boolean", schema: "(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any) => boolean", declarations: [] }, { name: "forEach", global: false, description: "Performs the specified action for each element in an array.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any) => void", schema: "(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any) => void", declarations: [] }, { name: "map", global: false, description: "Calls a defined callback function on each element of an array, and returns an array that contains the results.", tags: [{ name: "param", text: "callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any) => U[]", schema: "<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any) => U[]", declarations: [] }, { name: "filter", global: false, description: "Returns the elements of an array that meet the condition specified in a callback function.", tags: [{ name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }, { name: "param", text: "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array." }, { name: "param", text: "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value." }], required: true, type: "{ <S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[]; (predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[]; <S extends T>(predicate: BooleanConstructor, thisArg?: any): TSReset.NonFalsy<S>[]; }", schema: "{ <S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[]; (predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[]; <S extends T>(predicate: BooleanConstructor, thisArg?: any): TSReset.NonFalsy<S>[]; }", declarations: [] }, { name: "reduce", global: false, description: "Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T; (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T; <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U; }", schema: "{ (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T; (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T; <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U; }", declarations: [] }, { name: "reduceRight", global: false, description: "Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.", tags: [{ name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }, { name: "param", text: "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array." }, { name: "param", text: "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value." }], required: true, type: "{ (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T; (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T; <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U; }", schema: "{ (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T; (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T; <U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U; }", declarations: [] }, { name: "find", global: false, description: `Returns the value of the first element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends T>(predicate: (value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined; }", schema: "{ <S extends T>(predicate: (value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined; }", declarations: [] }, { name: "findIndex", global: false, description: `Returns the index of the first element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any) => number", schema: "(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any) => number", declarations: [] }, { name: "entries", global: false, description: "Returns an iterable of key, value pairs for every entry in the array", tags: [], required: true, type: "() => ArrayIterator<[number, T]>", schema: "() => ArrayIterator<[number, T]>", declarations: [] }, { name: "keys", global: false, description: "Returns an iterable of keys in the array", tags: [], required: true, type: "() => ArrayIterator<number>", schema: "() => ArrayIterator<number>", declarations: [] }, { name: "values", global: false, description: "Returns an iterable of values in the array", tags: [], required: true, type: "() => ArrayIterator<T>", schema: "() => ArrayIterator<T>", declarations: [] }, { name: "includes", global: false, description: "Determines whether an array includes a certain element, returning true or false as appropriate.", tags: [{ name: "param", text: "searchElement The element to search for." }, { name: "param", text: "fromIndex The position in this array at which to begin searching for searchElement." }], required: true, type: "{ (searchElement: T, fromIndex?: number | undefined): boolean; (searchElement: T | (TSReset.WidenLiteral<T> & {}), fromIndex?: number | undefined): boolean; }", schema: "{ (searchElement: T, fromIndex?: number | undefined): boolean; (searchElement: T | (TSReset.WidenLiteral<T> & {}), fromIndex?: number | undefined): boolean; }", declarations: [] }, { name: "flatMap", global: false, description: `Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.`, tags: [{ name: "param", text: `callback A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.` }, { name: "param", text: `thisArg An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.` }], required: true, type: "<U, This = undefined>(callback: (this: This, value: T, index: number, array: T[]) => U | readonly U[], thisArg?: This | undefined) => U[]", schema: "<U, This = undefined>(callback: (this: This, value: T, index: number, array: T[]) => U | readonly U[], thisArg?: This | undefined) => U[]", declarations: [] }, { name: "flat", global: false, description: `Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.`, tags: [{ name: "param", text: "depth The maximum recursion depth" }], required: true, type: "<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]", schema: "<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]", declarations: [] }, { name: "at", global: false, description: "Returns the item located at the specified index.", tags: [{ name: "param", text: "index The zero-based index of the desired code unit. A negative index will count back from the last item." }], required: true, type: "(index: number) => T | undefined", schema: "(index: number) => T | undefined", declarations: [] }, { name: "findLast", global: false, description: `Returns the value of the last element in the array where predicate is true, and undefined
otherwise.`, tags: [{ name: "param", text: `predicate findLast calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found, findLast
immediately returns that element value. Otherwise, findLast returns undefined.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "{ <S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T | undefined; }", schema: "{ <S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T | undefined; }", declarations: [] }, { name: "findLastIndex", global: false, description: `Returns the index of the last element in the array where predicate is true, and -1
otherwise.`, tags: [{ name: "param", text: `predicate findLastIndex calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found,
findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.` }, { name: "param", text: `thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.` }], required: true, type: "(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any) => number", schema: "(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any) => number", declarations: [] }, { name: "toReversed", global: false, description: "Copies the array and returns the copied array with all of its elements reversed.", tags: [], required: true, type: "() => T[]", schema: "() => T[]", declarations: [] }, { name: "toSorted", global: false, description: "Copies and sorts the array.", tags: [{ name: "param", text: "compareFn Function used to determine the order of the elements. It is expected to return\na negative value if the first argument is less than the second argument, zero if they're equal, and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.\n```ts\n[11, 2, 22, 1].toSorted((a, b) => a - b) // [1, 2, 11, 22]\n```" }], required: true, type: "(compareFn?: ((a: T, b: T) => number) | undefined) => T[]", schema: "(compareFn?: ((a: T, b: T) => number) | undefined) => T[]", declarations: [] }, { name: "toSpliced", global: false, description: `Copies an array and removes elements while, if necessary, inserting new elements in their place, returning the remaining elements.
Copies an array and removes elements while returning the remaining elements.`, tags: [{ name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "param", text: "items Elements to insert into the copied array in place of the deleted elements." }, { name: "returns", text: "A copy of the original array with the remaining elements." }, { name: "param", text: "start The zero-based location in the array from which to start removing elements." }, { name: "param", text: "deleteCount The number of elements to remove." }, { name: "returns", text: "A copy of the original array with the remaining elements." }], required: true, type: "{ (start: number, deleteCount: number, ...items: T[]): T[]; (start: number, deleteCount?: number | undefined): T[]; }", schema: "{ (start: number, deleteCount: number, ...items: T[]): T[]; (start: number, deleteCount?: number | undefined): T[]; }", declarations: [] }, { name: "with", global: false, description: `Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array`, tags: [{ name: "param", text: `index The index of the value to overwrite. If the index is
negative, then it replaces from the end of the array.` }, { name: "param", text: "value The value to insert into the copied array." }, { name: "returns", text: "A copy of the original array with the inserted value." }], required: true, type: "(index: number, value: T) => T[]", schema: "(index: number, value: T) => T[]", declarations: [] }, { name: "__@iterator@615", global: false, description: "Iterator of values in the array.", tags: [], required: true, type: "() => ArrayIterator<T>", schema: "() => ArrayIterator<T>", declarations: [] }, { name: "__@unscopables@617", global: false, description: `Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.`, tags: [], required: true, type: "{ readonly [x: number]: boolean | undefined; readonly length?: boolean; toString?: boolean; toLocaleString?: boolean; concat?: boolean; join?: boolean; slice?: boolean; indexOf?: boolean; lastIndexOf?: boolean; every?: boolean; some?: boolean; forEach?: boolean; map?: boolean; filter?: boolean; reduce?: boolean; reduceRight?: boolean; find?: boolean; findIndex?: boolean; entries?: boolean; keys?: boolean; values?: boolean; includes?: boolean; flatMap?: boolean; flat?: boolean; at?: boolean; findLast?: boolean; findLastIndex?: boolean; toReversed?: boolean; toSorted?: boolean; toSpliced?: boolean; with?: boolean; [Symbol.iterator]?: boolean; readonly [Symbol.unscopables]?: boolean; }", schema: "{ readonly [x: number]: boolean | undefined; readonly length?: boolean; toString?: boolean; toLocaleString?: boolean; concat?: boolean; join?: boolean; slice?: boolean; indexOf?: boolean; lastIndexOf?: boolean; every?: boolean; some?: boolean; forEach?: boolean; map?: boolean; filter?: boolean; reduce?: boolean; reduceRight?: boolean; find?: boolean; findIndex?: boolean; entries?: boolean; keys?: boolean; values?: boolean; includes?: boolean; flatMap?: boolean; flat?: boolean; at?: boolean; findLast?: boolean; findLastIndex?: boolean; toReversed?: boolean; toSorted?: boolean; toSpliced?: boolean; with?: boolean; [Symbol.iterator]?: boolean; readonly [Symbol.unscopables]?: boolean; }", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/reorder/reorderArray.ts" });
const Oc = "ReorderSurface: itemIds must contain unique values.", vr = (e) => new Set(e).size === e.length, xc = (e) => {
  if (!vr(e)) throw new Error(Oc);
}, Tc = ({ canceled: e, snapshot: a, currentItemIds: t, source: r }) => {
  if (e || !a || !r || !vr(a) || !vr(t) || !ar(t, a)) return null;
  const { initialIndex: n, index: i } = r;
  return n < 0 || n >= a.length || i < 0 || i >= a.length || String(r.id) !== a[n] || n === i ? null : { expectedOrderedIds: a, orderedIds: er(a, n, i) };
}, $c = Bo({ __name: "ReorderSurface", props: { itemIds: {}, disabled: { type: Boolean } }, emits: ["reorder"], setup(e, { emit: a }) {
  const t = e, r = a;
  Yo(mg, { disabled: Me(() => !!t.disabled) }), xc(t.itemIds);
  const n = qn(null), i = rr(void 0), o = (D) => {
    vr(t.itemIds) || D.preventDefault();
  }, l = (D) => {
    n.value = [...t.itemIds];
    const p = D.nativeEvent instanceof PointerEvent ? D.nativeEvent.pointerType : void 0;
    i.value = p, yc(p);
  }, s = (D) => {
    const p = n.value, g = i.value;
    n.value = null, i.value = void 0;
    const { operation: c } = D, d = _u(c) ? c.source : null;
    Mc(g, d?.element);
    const m = Tc({ canceled: D.canceled, snapshot: p, currentItemIds: t.itemIds, source: d });
    m && r("reorder", m);
  };
  return (D, p) => (Vg(), zg(Nt(hu), { sensors: Nt(mc), plugins: Nt(Qt), modifiers: Nt(vc), onBeforeDragStart: o, onDragStart: l, onDragEnd: s }, { default: $g(() => [Ug(D.$slots, "default")]), _: 3 }, 8, ["sensors", "plugins", "modifiers"]));
} }), Vc = ({ id: e, index: a, element: t, handle: r }) => {
  const n = Go(mg, null);
  if (!n) throw new Error("useReorderItem must be used within a ReorderSurface");
  const { isDragging: i } = Yu({ id: e, index: a, element: t, handle: r, disabled: n.disabled, transition: Pc });
  return { isDragging: i };
};
export {
  $c as _,
  Vc as u
};
