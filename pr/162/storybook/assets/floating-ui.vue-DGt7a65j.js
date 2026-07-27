import { m as Ut, t as Jt, e as Zt, p as Qt } from "./index-C53DMLGR.js";
import { J as te, Z as ee, l as Z, q as Q, V as ne, G as oe, b as A, x as wt, d as ie, c as re, _ as se, A as le, o as ce, r as G, z as j, s as ae, $ as fe, a0 as ue, y as U } from "./iframe-DV-apvGh.js";
const Rt = (t) => t instanceof Element ? t : t?.$el instanceof HTMLElement ? t.$el : t?.$parent ? Rt(t.$parent) : document.body, de = () => {
  const t = ee(), e = Ut(() => {
  }, () => {
    if (t?.proxy) return Rt(t.proxy);
  });
  return te(e.trigger), e;
}, vt = /* @__PURE__ */ Symbol("childrenStackKey"), on = () => {
  const t = ne(/* @__PURE__ */ new Set()), e = Q(vt, void 0), n = e ? Q(e) : void 0, o = /* @__PURE__ */ Symbol("childrenStackKey");
  return wt(vt, o), wt(o, { add: (l) => {
    t.add(l), n?.add(l);
  }, remove: (l) => {
    t.delete(l), n?.remove(l);
  } }), { childStack: t };
}, J = oe(/* @__PURE__ */ new Map()), me = (t) => {
  const e = A(() => Zt(t)), n = Q(vt, void 0), o = n ? Q(n, void 0) : void 0;
  Z(e, (r, s) => {
    s && (o?.remove(s), J.delete(s)), r && o?.add(r);
  }, { immediate: true });
  const i = de();
  Z([e, i], ([r, s], [l]) => {
    l && J.delete(l), r && s && J.set(r, s);
  }, { immediate: true }), Jt(() => {
    e.value && (o?.remove(e.value), J.delete(e.value));
  });
}, yt = (t, e) => {
  if (t instanceof Element) {
    const o = J.get(t);
    if (o && o.matches(e)) return o;
    const i = t.parentElement;
    return i ? i.matches(e) ? i : yt(i, e) : document.body;
  }
  const n = t.$parent;
  if (n) {
    const o = Rt(n);
    return o.matches(e) ? o : yt(n, e);
  }
  return document.body;
}, Wt = /* @__PURE__ */ Symbol("overlay-container"), pt = (t) => {
  wt(Wt, A(() => t.value));
}, rn = () => {
  const t = Qt(), e = A(() => {
    const o = t.value;
    return o ? yt(o, "[data-v-app]") : document.body;
  }), n = Q(Wt, e);
  return A(() => n.value ?? e.value);
};
pt.__docgenInfo = Object.assign({ displayName: pt.name ?? pt.__name }, { exportName: "provideOverlayContainer", displayName: "provideOverlayContainer", type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "HTMLElement | SVGElement | null | undefined", schema: "HTMLElement | SVGElement | null | undefined", declarations: [] }, { name: "__@RefSymbol@302", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", schema: "true", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Overlay/useOverlay.ts" });
const sn = ie({ __name: "TeleportContainer", props: { to: {}, container: {}, defer: { type: Boolean }, disabled: { type: Boolean } }, setup(t) {
  const e = t;
  return me(A(() => e.container)), (n, o) => (ce(), re(se, { to: t.to, defer: t.defer, disabled: t.disabled }, [le(n.$slots, "default")], 8, ["to", "defer", "disabled"]));
} }), Y = Math.min, V = Math.max, rt = Math.round, it = Math.floor, M = (t) => ({ x: t, y: t }), pe = { left: "right", right: "left", bottom: "top", top: "bottom" };
function he(t, e, n) {
  return V(t, Y(e, n));
}
function nt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function H(t) {
  return t.split("-")[0];
}
function ot(t) {
  return t.split("-")[1];
}
function Nt(t) {
  return t === "x" ? "y" : "x";
}
function Bt(t) {
  return t === "y" ? "height" : "width";
}
function k(t) {
  const e = t[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function Ht(t) {
  return Nt(k(t));
}
function ge(t, e, n) {
  n === void 0 && (n = false);
  const o = ot(t), i = Ht(t), r = Bt(i);
  let s = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = st(s)), [s, st(s)];
}
function we(t) {
  const e = st(t);
  return [xt(t), e, xt(e)];
}
function xt(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
const Dt = ["left", "right"], Pt = ["right", "left"], ve = ["top", "bottom"], ye = ["bottom", "top"];
function xe(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Pt : Dt : e ? Dt : Pt;
    case "left":
    case "right":
      return e ? ve : ye;
    default:
      return [];
  }
}
function be(t, e, n, o) {
  const i = ot(t);
  let r = xe(H(t), n === "start", o);
  return i && (r = r.map((s) => s + "-" + i), e && (r = r.concat(r.map(xt)))), r;
}
function st(t) {
  const e = H(t);
  return pe[e] + t.slice(e.length);
}
function Re(t) {
  var e, n, o, i;
  return { top: (e = t.top) != null ? e : 0, right: (n = t.right) != null ? n : 0, bottom: (o = t.bottom) != null ? o : 0, left: (i = t.left) != null ? i : 0 };
}
function Ce(t) {
  return typeof t != "number" ? Re(t) : { top: t, right: t, bottom: t, left: t };
}
function lt(t) {
  const { x: e, y: n, width: o, height: i } = t;
  return { width: o, height: i, top: n, left: e, right: e + o, bottom: n + i, x: e, y: n };
}
function kt(t, e, n) {
  let { reference: o, floating: i } = t;
  const r = k(e), s = Ht(e), l = Bt(s), c = H(e), a = r === "y", f = o.x + o.width / 2 - i.width / 2, d = o.y + o.height / 2 - i.height / 2, m = o[l] / 2 - i[l] / 2;
  let u;
  switch (c) {
    case "top":
      u = { x: f, y: o.y - i.height };
      break;
    case "bottom":
      u = { x: f, y: o.y + o.height };
      break;
    case "right":
      u = { x: o.x + o.width, y: d };
      break;
    case "left":
      u = { x: o.x - i.width, y: d };
      break;
    default:
      u = { x: o.x, y: o.y };
  }
  const p = ot(e);
  return p && (u[s] += m * (p === "end" ? 1 : -1) * (n && a ? -1 : 1)), u;
}
async function Oe(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: o, y: i, platform: r, rects: s, elements: l, strategy: c } = t, { boundary: a = "clippingAncestors", rootBoundary: f = "viewport", elementContext: d = "floating", altBoundary: m = false, padding: u = 0 } = nt(e, t), p = Ce(u), w = l[m ? d === "floating" ? "reference" : "floating" : d], g = lt(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(w))) == null || n ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)), boundary: a, rootBoundary: f, strategy: c })), v = d === "floating" ? { x: o, y: i, width: s.floating.width, height: s.floating.height } : s.reference, y = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), x = await (r.isElement == null ? void 0 : r.isElement(y)) && await (r.getScale == null ? void 0 : r.getScale(y)) || { x: 1, y: 1 }, O = lt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: v, offsetParent: y, strategy: c }) : v);
  return { top: (g.top - O.top + p.top) / x.y, bottom: (O.bottom - g.bottom + p.bottom) / x.y, left: (g.left - O.left + p.left) / x.x, right: (O.right - g.right + p.right) / x.x };
}
const Ee = 50, Ae = async (t, e, n) => {
  const { placement: o = "bottom", strategy: i = "absolute", middleware: r = [], platform: s } = n, l = s.detectOverflow ? s : { ...s, detectOverflow: Oe }, c = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let a = await s.getElementRects({ reference: t, floating: e, strategy: i }), { x: f, y: d } = kt(a, o, c), m = o, u = 0;
  const p = {};
  for (let h = 0; h < r.length; h++) {
    const w = r[h];
    if (!w) continue;
    const { name: g, fn: v } = w, { x: y, y: x, data: O, reset: R } = await v({ x: f, y: d, initialPlacement: o, placement: m, strategy: i, middlewareData: p, rects: a, platform: l, elements: { reference: t, floating: e } });
    f = y ?? f, d = x ?? d, p[g] = { ...p[g], ...O }, R && u < Ee && (u++, typeof R == "object" && (R.placement && (m = R.placement), R.rects && (a = R.rects === true ? await s.getElementRects({ reference: t, floating: e, strategy: i }) : R.rects), { x: f, y: d } = kt(a, m, c)), h = -1);
  }
  return { x: f, y: d, placement: m, strategy: i, middlewareData: p };
}, Se = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n, o;
    const { placement: i, middlewareData: r, rects: s, initialPlacement: l, platform: c, elements: a } = e, { mainAxis: f = true, crossAxis: d = true, fallbackPlacements: m, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: h = true, ...w } = nt(t, e);
    if ((n = r.arrow) != null && n.alignmentOffset) return {};
    const g = H(i), v = k(l), y = H(l) === l, x = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), O = m || (y || !h ? [st(l)] : we(l)), R = p !== "none";
    !m && R && O.push(...be(l, h, p, x));
    const b = [l, ...O], C = await c.detectOverflow(e, w), L = [];
    let T = ((o = r.flip) == null ? void 0 : o.overflows) || [];
    if (f && L.push(C[g]), d) {
      const W = ge(i, s, x);
      L.push(C[W[0]], C[W[1]]);
    }
    if (T = [...T, { placement: i, overflows: L }], !L.every((W) => W <= 0)) {
      var St, Lt;
      const W = (((St = r.flip) == null ? void 0 : St.index) || 0) + 1, mt = b[W];
      if (mt && (!(d === "alignment" ? v !== k(mt) : false) || T.every((S) => k(S.placement) === v ? S.overflows[0] > 0 : true))) return { data: { index: W, overflows: T }, reset: { placement: mt } };
      let q = (Lt = T.filter((N) => N.overflows[0] <= 0).sort((N, S) => N.overflows[1] - S.overflows[1])[0]) == null ? void 0 : Lt.placement;
      if (!q) switch (u) {
        case "bestFit": {
          var Tt;
          const N = (Tt = T.filter((S) => {
            if (R) {
              const F = k(S.placement);
              return F === v || F === "y";
            }
            return true;
          }).map((S) => [S.placement, S.overflows.filter((F) => F > 0).reduce((F, Gt) => F + Gt, 0)]).sort((S, F) => S[1] - F[1])[0]) == null ? void 0 : Tt[0];
          N && (q = N);
          break;
        }
        case "initialPlacement":
          q = l;
          break;
      }
      if (i !== q) return { reset: { placement: q } };
    }
    return {};
  } };
}, Le = /* @__PURE__ */ new Set(["left", "top"]);
async function Te(t, e) {
  const { placement: n, platform: o, elements: i } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = H(n), l = ot(n), c = k(n) === "y", a = Le.has(s) ? -1 : 1, f = r && c ? -1 : 1, d = nt(e, t);
  let { mainAxis: m, crossAxis: u, alignmentAxis: p } = typeof d == "number" ? { mainAxis: d, crossAxis: 0, alignmentAxis: null } : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
  return l && typeof p == "number" && (u = l === "end" ? p * -1 : p), c ? { x: u * f, y: m * a } : { x: m * a, y: u * f };
}
const De = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    var n, o;
    const { x: i, y: r, placement: s, middlewareData: l } = e, c = await Te(e, t);
    return s === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : { x: i + c.x, y: r + c.y, data: { ...c, placement: s } };
  } };
}, Pe = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: o, placement: i, platform: r } = e, { mainAxis: s = true, crossAxis: l = false, limiter: c = { fn: (v) => {
      let { x: y, y: x } = v;
      return { x: y, y: x };
    } }, ...a } = nt(t, e), f = { x: n, y: o }, d = await r.detectOverflow(e, a), m = k(i), u = Nt(m);
    let p = f[u], h = f[m];
    const w = (v, y) => he(y + d[v === "y" ? "top" : "left"], y, y - d[v === "y" ? "bottom" : "right"]);
    s && (p = w(u, p)), l && (h = w(m, h));
    const g = c.fn({ ...e, [u]: p, [m]: h });
    return { ...g, data: { x: g.x - n, y: g.y - o, enabled: { [u]: s, [m]: l } } };
  } };
}, ke = function(t) {
  return t === void 0 && (t = {}), { name: "size", options: t, async fn(e) {
    const { placement: n, rects: o, platform: i, elements: r } = e, { apply: s = () => {
    }, ...l } = nt(t, e), c = await i.detectOverflow(e, l), a = H(n), f = ot(n), d = k(n) === "y", { width: m, height: u } = o.floating;
    let p, h;
    a === "top" || a === "bottom" ? (p = a, h = f === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (h = a, p = f === "end" ? "top" : "bottom");
    const w = u - c.top - c.bottom, g = m - c.left - c.right, v = Y(u - c[p], w), y = Y(m - c[h], g), x = e.middlewareData.shift, O = !x;
    let R = v, b = y;
    x != null && x.enabled.x && (b = g), x != null && x.enabled.y && (R = w), O && !f && (d ? b = m - 2 * V(c.left, c.right) : R = u - 2 * V(c.top, c.bottom)), await s({ ...e, availableWidth: b, availableHeight: R });
    const C = await i.getDimensions(r.floating);
    return m !== C.width || u !== C.height ? { reset: { rects: true } } : {};
  } };
};
function ct() {
  return typeof window < "u";
}
function X(t) {
  return Ct(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function E(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function _(t) {
  var e;
  return (e = (Ct(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ct(t) {
  return ct() ? t instanceof Node || t instanceof E(t).Node : false;
}
function D(t) {
  return ct() ? t instanceof Element || t instanceof E(t).Element : false;
}
function $(t) {
  return ct() ? t instanceof HTMLElement || t instanceof E(t).HTMLElement : false;
}
function Vt(t) {
  return !ct() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof E(t).ShadowRoot;
}
function at(t) {
  const { overflow: e, overflowX: n, overflowY: o, display: i } = P(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && i !== "inline" && i !== "contents";
}
function Ve(t) {
  return /^(table|td|th)$/.test(X(t));
}
function ft(t) {
  try {
    if (t.matches(":popover-open")) return true;
  } catch {
  }
  try {
    return t.matches(":modal");
  } catch {
    return false;
  }
}
const Me = /transform|translate|scale|rotate|perspective|filter/, _e = /paint|layout|strict|content/, B = (t) => !!t && t !== "none";
let ht;
function Ot(t) {
  const e = D(t) ? P(t) : t;
  return B(e.transform) || B(e.translate) || B(e.scale) || B(e.rotate) || B(e.perspective) || !Et() && (B(e.backdropFilter) || B(e.filter)) || Me.test(e.willChange || "") || _e.test(e.contain || "");
}
function Fe(t) {
  let e = z(t);
  for (; $(e) && !tt(e); ) {
    if (Ot(e)) return e;
    if (ft(e)) return null;
    e = z(e);
  }
  return null;
}
function Et() {
  return ht == null && (ht = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), ht;
}
function tt(t) {
  return /^(html|body|#document)$/.test(X(t));
}
function P(t) {
  return E(t).getComputedStyle(t);
}
function ut(t) {
  return D(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function z(t) {
  if (X(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || Vt(t) && t.host || _(t);
  return Vt(e) ? e.host : e;
}
function zt(t) {
  const e = z(t);
  return tt(e) ? (t.ownerDocument || t).body : $(e) && at(e) ? e : zt(e);
}
function et(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = true);
  const i = zt(t), r = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = E(i);
  if (r) {
    const l = bt(s);
    return e.concat(s, s.visualViewport || [], at(i) ? i : [], l && n ? et(l) : []);
  } else return e.concat(i, et(i, [], n));
}
function bt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function It(t) {
  const e = P(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = $(t), r = i ? t.offsetWidth : n, s = i ? t.offsetHeight : o, l = rt(n) !== r || rt(o) !== s;
  return l && (n = r, o = s), { width: n, height: o, $: l };
}
function At(t) {
  return D(t) ? t : t.contextElement;
}
function K(t) {
  const e = At(t);
  if (!$(e)) return M(1);
  const n = e.getBoundingClientRect(), { width: o, height: i, $: r } = It(e);
  let s = (r ? rt(n.width) : n.width) / o, l = (r ? rt(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: s, y: l };
}
const $e = M(0);
function Xt(t) {
  const e = E(t);
  return !Et() || !e.visualViewport ? $e : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function We(t, e, n) {
  return e === void 0 && (e = false), !!n && e && n === E(t);
}
function I(t, e, n, o) {
  e === void 0 && (e = false), n === void 0 && (n = false);
  const i = t.getBoundingClientRect(), r = At(t);
  let s = M(1);
  e && (o ? D(o) && (s = K(o)) : s = K(t));
  const l = We(r, n, o) ? Xt(r) : M(0);
  let c = (i.left + l.x) / s.x, a = (i.top + l.y) / s.y, f = i.width / s.x, d = i.height / s.y;
  if (r && o) {
    const m = E(r), u = D(o) ? E(o) : o;
    let p = m, h = bt(p);
    for (; h && u !== p; ) {
      const w = K(h), g = h.getBoundingClientRect(), v = P(h), y = g.left + (h.clientLeft + parseFloat(v.paddingLeft)) * w.x, x = g.top + (h.clientTop + parseFloat(v.paddingTop)) * w.y;
      c *= w.x, a *= w.y, f *= w.x, d *= w.y, c += y, a += x, p = E(h), h = bt(p);
    }
  }
  return lt({ width: f, height: d, x: c, y: a });
}
function dt(t, e) {
  const n = ut(t).scrollLeft;
  return e ? e.left + n : I(_(t)).left + n;
}
function jt(t, e) {
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - dt(t, n), i = n.top + e.scrollTop;
  return { x: o, y: i };
}
function Ne(t) {
  let { elements: e, rect: n, offsetParent: o, strategy: i } = t;
  const r = i === "fixed", s = _(o), l = e ? ft(e.floating) : false;
  if (o === s || l && r) return n;
  let c = { scrollLeft: 0, scrollTop: 0 }, a = M(1);
  const f = M(0), d = $(o);
  if ((d || !r) && ((X(o) !== "body" || at(s)) && (c = ut(o)), d)) {
    const u = I(o);
    a = K(o), f.x = u.x + o.clientLeft, f.y = u.y + o.clientTop;
  }
  const m = s && !d && !r ? jt(s, c) : M(0);
  return { width: n.width * a.x, height: n.height * a.y, x: n.x * a.x - c.scrollLeft * a.x + f.x + m.x, y: n.y * a.y - c.scrollTop * a.y + f.y + m.y };
}
function Be(t) {
  return t.getClientRects ? Array.from(t.getClientRects()) : [];
}
function He(t) {
  const e = ut(t), n = t.ownerDocument.body, o = V(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = V(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -e.scrollLeft + dt(t);
  const s = -e.scrollTop;
  return P(n).direction === "rtl" && (r += V(t.clientWidth, n.clientWidth) - o), { width: o, height: i, x: r, y: s };
}
const ze = 25;
function Ie(t, e, n) {
  n === void 0 && (n = "viewport");
  const o = n === "layoutViewport", i = E(t), r = _(t), s = i.visualViewport;
  let l = r.clientWidth, c = r.clientHeight, a = 0, f = 0;
  if (s) {
    const m = !Et() || e === "fixed";
    o ? m || (a = -s.offsetLeft, f = -s.offsetTop) : (l = s.width, c = s.height, m && (a = s.offsetLeft, f = s.offsetTop));
  }
  if (dt(r) <= 0) {
    const m = r.ownerDocument, u = m.body, p = getComputedStyle(u), h = m.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, w = Math.abs(r.clientWidth - u.clientWidth - h), g = getComputedStyle(r).scrollbarGutter === "stable both-edges" ? w / 2 : w;
    g <= ze && (l -= g);
  }
  return { width: l, height: c, x: a, y: f };
}
function Xe(t, e) {
  const n = I(t, true, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = K(t), s = t.clientWidth * r.x, l = t.clientHeight * r.y, c = i * r.x, a = o * r.y;
  return { width: s, height: l, x: c, y: a };
}
function Mt(t, e, n) {
  let o;
  if (e === "viewport" || e === "layoutViewport") o = Ie(t, n, e);
  else if (e === "document") o = He(_(t));
  else if (D(e)) o = Xe(e, n);
  else {
    const i = Xt(t);
    o = { x: e.x - i.x, y: e.y - i.y, width: e.width, height: e.height };
  }
  return lt(o);
}
function je(t, e) {
  const n = e.get(t);
  if (n) return n;
  let o = et(t, [], false).filter((l) => D(l) && X(l) !== "body"), i = null;
  const r = P(t).position === "fixed";
  let s = r ? z(t) : t;
  for (; D(s) && !tt(s); ) {
    const l = P(s), c = Ot(s), a = i ? i.position : r ? "fixed" : "";
    !c && (a === "fixed" || a === "absolute" && l.position === "static") ? o = o.filter((d) => d !== s) : i = l, s = z(s);
  }
  return e.set(t, o), o;
}
function Ke(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: i } = t;
  const s = [...n === "clippingAncestors" ? ft(e) ? [] : je(e, this._c) : [].concat(n), o], l = Mt(e, s[0], i);
  let c = l.top, a = l.right, f = l.bottom, d = l.left;
  for (let m = 1; m < s.length; m++) {
    const u = Mt(e, s[m], i);
    c = V(u.top, c), a = Y(u.right, a), f = Y(u.bottom, f), d = V(u.left, d);
  }
  return { width: a - d, height: f - c, x: d, y: c };
}
function Ye(t) {
  const { width: e, height: n } = It(t);
  return { width: e, height: n };
}
function qe(t, e, n) {
  const o = $(e), i = _(e), r = n === "fixed", s = I(t, true, r, e);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = M(0);
  if ((o || !r) && ((X(e) !== "body" || at(i)) && (l = ut(e)), o)) {
    const m = I(e, true, r, e);
    c.x = m.x + e.clientLeft, c.y = m.y + e.clientTop;
  }
  !o && i && (c.x = dt(i));
  const a = i && !o && !r ? jt(i, l) : M(0), f = s.left + l.scrollLeft - c.x - a.x, d = s.top + l.scrollTop - c.y - a.y;
  return { x: f, y: d, width: s.width, height: s.height };
}
function gt(t) {
  return P(t).position === "static";
}
function _t(t, e) {
  if (!$(t) || P(t).position === "fixed") return null;
  if (e) return e(t);
  let n = t.offsetParent;
  return _(t) === n && (n = n.ownerDocument.body), n;
}
function Kt(t, e) {
  const n = E(t);
  if (ft(t)) return n;
  if (!$(t)) {
    let i = z(t);
    for (; i && !tt(i); ) {
      if (D(i) && !gt(i)) return i;
      i = z(i);
    }
    return n;
  }
  let o = _t(t, e);
  for (; o && Ve(o) && gt(o); ) o = _t(o, e);
  return o && tt(o) && gt(o) && !Ot(o) ? n : o || Fe(t) || n;
}
const Ge = async function(t) {
  const e = this.getOffsetParent || Kt, n = this.getDimensions, o = await n(t.floating);
  return { reference: qe(t.reference, await e(t.floating), t.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
};
function Ue(t) {
  return P(t).direction === "rtl";
}
const Je = { convertOffsetParentRelativeRectToViewportRelativeRect: Ne, getDocumentElement: _, getClippingRect: Ke, getOffsetParent: Kt, getElementRects: Ge, getClientRects: Be, getDimensions: Ye, getScale: K, isElement: D, isRTL: Ue };
function Yt(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Ze(t, e, n) {
  let o = null, i;
  const r = _(t);
  function s() {
    var f;
    clearTimeout(i), (f = o) == null || f.disconnect(), o = null;
  }
  function l(f, d) {
    f === void 0 && (f = false), d === void 0 && (d = 1), s();
    const m = t.getBoundingClientRect(), { left: u, top: p, width: h, height: w } = m;
    if (f || e(), !h || !w) return;
    const g = it(p), v = it(r.clientWidth - (u + h)), y = it(r.clientHeight - (p + w)), x = it(u), R = { rootMargin: -g + "px " + -v + "px " + -y + "px " + -x + "px", threshold: V(0, Y(1, d)) || 1 };
    let b = true;
    function C(L) {
      const T = L[0].intersectionRatio;
      if (!Yt(m, t.getBoundingClientRect())) return l();
      if (T !== d) {
        if (!b) return l();
        T ? l(false, T) : i = setTimeout(() => {
          l(false, 1e-7);
        }, 1e3);
      }
      b = false;
    }
    try {
      o = new IntersectionObserver(C, { ...R, root: r.ownerDocument });
    } catch {
      o = new IntersectionObserver(C, R);
    }
    o.observe(t);
  }
  const c = E(t), a = () => l(n);
  return c.addEventListener("resize", a), l(true), () => {
    c.removeEventListener("resize", a), s();
  };
}
function ln(t, e, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: i = true, ancestorResize: r = true, elementResize: s = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: c = false } = o, a = At(t), f = i || r ? [...a ? et(a) : [], ...e ? et(e) : []] : [];
  f.forEach((g) => {
    i && g.addEventListener("scroll", n), r && g.addEventListener("resize", n);
  });
  const d = a && l ? Ze(a, n, r) : null;
  let m = -1, u = null;
  s && (u = new ResizeObserver((g) => {
    let [v] = g;
    v && v.target === a && u && e && (u.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var y;
      (y = u) == null || y.observe(e);
    })), n();
  }), a && !c && u.observe(a), e && u.observe(e));
  let p, h = c ? I(t) : null;
  c && w();
  function w() {
    const g = I(t);
    h && !Yt(h, g) && n(), h = g, p = requestAnimationFrame(w);
  }
  return n(), () => {
    var g;
    f.forEach((v) => {
      i && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), d?.(), (g = u) == null || g.disconnect(), u = null, c && cancelAnimationFrame(p);
  };
}
const cn = De, an = Pe, fn = Se, un = ke, Qe = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = n ?? {}, r = { ...Je, ...i.platform, _c: o };
  return Ae(t, e, { ...i, platform: r });
};
function tn(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function Ft(t) {
  if (tn(t)) {
    const e = t.$el;
    return Ct(e) && X(e) === "#comment" ? null : e;
  }
  return t;
}
function qt(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $t(t, e) {
  const n = qt(t);
  return Math.round(e * n) / n;
}
function dn(t, e, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, i = A(() => {
    var b;
    return (b = U(n.open)) != null ? b : true;
  }), r = A(() => U(n.middleware)), s = A(() => {
    var b;
    return (b = U(n.placement)) != null ? b : "bottom";
  }), l = A(() => {
    var b;
    return (b = U(n.strategy)) != null ? b : "absolute";
  }), c = A(() => {
    var b;
    return (b = U(n.transform)) != null ? b : true;
  }), a = A(() => Ft(t.value)), f = A(() => Ft(e.value)), d = G(0), m = G(0), u = G(l.value), p = G(s.value), h = ae({}), w = G(false), g = A(() => {
    const b = { position: u.value, left: "0", top: "0" };
    if (!f.value) return b;
    const C = $t(f.value, d.value), L = $t(f.value, m.value);
    return c.value ? { ...b, transform: "translate(" + C + "px, " + L + "px)", ...qt(f.value) >= 1.5 && { willChange: "transform" } } : { position: u.value, left: C + "px", top: L + "px" };
  });
  let v;
  function y() {
    if (a.value == null || f.value == null) return;
    const b = i.value;
    Qe(a.value, f.value, { middleware: r.value, placement: s.value, strategy: l.value }).then((C) => {
      d.value = C.x, m.value = C.y, u.value = C.strategy, p.value = C.placement, h.value = C.middlewareData, w.value = b !== false;
    });
  }
  function x() {
    typeof v == "function" && (v(), v = void 0);
  }
  function O() {
    if (x(), o === void 0) {
      y();
      return;
    }
    if (a.value != null && f.value != null) {
      v = o(a.value, f.value, y);
      return;
    }
  }
  function R() {
    i.value || (w.value = false);
  }
  return Z([r, s, l, i], y, { flush: "sync" }), Z([a, f], O, { flush: "sync" }), Z(i, R, { flush: "sync" }), fe() && ue(x), { x: j(d), y: j(m), strategy: j(u), placement: j(p), middlewareData: j(h), isPositioned: j(w), floatingStyles: g, update: y };
}
export {
  sn as _,
  dn as a,
  ln as b,
  un as c,
  on as d,
  fn as f,
  cn as o,
  an as s,
  rn as u
};
