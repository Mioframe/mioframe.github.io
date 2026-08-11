import { r as U, A as ut, M as j, h as P, B as zt, a1 as It, a2 as Xt, L as G, d as jt, o as Yt, f as qt, a3 as Kt, g as Ut } from "./iframe-DsAhgGMd.js";
import { b as Gt } from "./useOverlay-DD4GUIP-.js";
const q = Math.min, V = Math.max, nt = Math.round, et = Math.floor, F = (t) => ({ x: t, y: t }), Jt = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Qt(t, e, n) {
  return V(t, q(e, n));
}
function Z(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function H(t) {
  return t.split("-")[0];
}
function tt(t) {
  return t.split("-")[1];
}
function Pt(t) {
  return t === "x" ? "y" : "x";
}
function Mt(t) {
  return t === "y" ? "height" : "width";
}
function M(t) {
  const e = t[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function Vt(t) {
  return Pt(M(t));
}
function Zt(t, e, n) {
  n === void 0 && (n = false);
  const o = tt(t), i = Vt(t), r = Mt(i);
  let s = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = ot(s)), [s, ot(s)];
}
function te(t) {
  const e = ot(t);
  return [ht(t), e, ht(e)];
}
function ht(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
const Ct = ["left", "right"], Ot = ["right", "left"], ee = ["top", "bottom"], ne = ["bottom", "top"];
function oe(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Ot : Ct : e ? Ct : Ot;
    case "left":
    case "right":
      return e ? ee : ne;
    default:
      return [];
  }
}
function ie(t, e, n, o) {
  const i = tt(t);
  let r = oe(H(t), n === "start", o);
  return i && (r = r.map((s) => s + "-" + i), e && (r = r.concat(r.map(ht)))), r;
}
function ot(t) {
  const e = H(t);
  return Jt[e] + t.slice(e.length);
}
function re(t) {
  var e, n, o, i;
  return { top: (e = t.top) != null ? e : 0, right: (n = t.right) != null ? n : 0, bottom: (o = t.bottom) != null ? o : 0, left: (i = t.left) != null ? i : 0 };
}
function se(t) {
  return typeof t != "number" ? re(t) : { top: t, right: t, bottom: t, left: t };
}
function it(t) {
  const { x: e, y: n, width: o, height: i } = t;
  return { width: o, height: i, top: n, left: e, right: e + o, bottom: n + i, x: e, y: n };
}
function At(t, e, n) {
  let { reference: o, floating: i } = t;
  const r = M(e), s = Vt(e), l = Mt(s), c = H(e), a = r === "y", f = o.x + o.width / 2 - i.width / 2, d = o.y + o.height / 2 - i.height / 2, m = o[l] / 2 - i[l] / 2;
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
  const h = tt(e);
  return h && (u[s] += m * (h === "end" ? 1 : -1) * (n && a ? -1 : 1)), u;
}
async function le(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: o, y: i, platform: r, rects: s, elements: l, strategy: c } = t, { boundary: a = "clippingAncestors", rootBoundary: f = "viewport", elementContext: d = "floating", altBoundary: m = false, padding: u = 0 } = Z(e, t), h = se(u), w = l[m ? d === "floating" ? "reference" : "floating" : d], p = it(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(w))) == null || n ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)), boundary: a, rootBoundary: f, strategy: c })), v = d === "floating" ? { x: o, y: i, width: s.floating.width, height: s.floating.height } : s.reference, y = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), x = await (r.isElement == null ? void 0 : r.isElement(y)) && await (r.getScale == null ? void 0 : r.getScale(y)) || { x: 1, y: 1 }, O = it(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: v, offsetParent: y, strategy: c }) : v);
  return { top: (p.top - O.top + h.top) / x.y, bottom: (O.bottom - p.bottom + h.bottom) / x.y, left: (p.left - O.left + h.left) / x.x, right: (O.right - p.right + h.right) / x.x };
}
const ce = 50, ae = async (t, e, n) => {
  const { placement: o = "bottom", strategy: i = "absolute", middleware: r = [], platform: s } = n, l = s.detectOverflow ? s : { ...s, detectOverflow: le }, c = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let a = await s.getElementRects({ reference: t, floating: e, strategy: i }), { x: f, y: d } = At(a, o, c), m = o, u = 0;
  const h = {};
  for (let g = 0; g < r.length; g++) {
    const w = r[g];
    if (!w) continue;
    const { name: p, fn: v } = w, { x: y, y: x, data: O, reset: R } = await v({ x: f, y: d, initialPlacement: o, placement: m, strategy: i, middlewareData: h, rects: a, platform: l, elements: { reference: t, floating: e } });
    f = y ?? f, d = x ?? d, h[p] = { ...h[p], ...O }, R && u < ce && (u++, typeof R == "object" && (R.placement && (m = R.placement), R.rects && (a = R.rects === true ? await s.getElementRects({ reference: t, floating: e, strategy: i }) : R.rects), { x: f, y: d } = At(a, m, c)), g = -1);
  }
  return { x: f, y: d, placement: m, strategy: i, middlewareData: h };
}, fe = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n, o;
    const { placement: i, middlewareData: r, rects: s, initialPlacement: l, platform: c, elements: a } = e, { mainAxis: f = true, crossAxis: d = true, fallbackPlacements: m, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: h = "none", flipAlignment: g = true, ...w } = Z(t, e);
    if ((n = r.arrow) != null && n.alignmentOffset) return {};
    const p = H(i), v = M(l), y = H(l) === l, x = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), O = m || (y || !g ? [ot(l)] : te(l)), R = h !== "none";
    !m && R && O.push(...ie(l, g, h, x));
    const b = [l, ...O], C = await c.detectOverflow(e, w), L = [];
    let S = ((o = r.flip) == null ? void 0 : o.overflows) || [];
    if (f && L.push(C[p]), d) {
      const k = Zt(i, s, x);
      L.push(C[k[0]], C[k[1]]);
    }
    if (S = [...S, { placement: i, overflows: L }], !L.every((k) => k <= 0)) {
      var xt, bt;
      const k = (((xt = r.flip) == null ? void 0 : xt.index) || 0) + 1, ft = b[k];
      if (ft && (!(d === "alignment" ? v !== M(ft) : false) || S.every((E) => M(E.placement) === v ? E.overflows[0] > 0 : true))) return { data: { index: k, overflows: S }, reset: { placement: ft } };
      let K = (bt = S.filter((B) => B.overflows[0] <= 0).sort((B, E) => B.overflows[1] - E.overflows[1])[0]) == null ? void 0 : bt.placement;
      if (!K) switch (u) {
        case "bestFit": {
          var Rt;
          const B = (Rt = S.filter((E) => {
            if (R) {
              const _ = M(E.placement);
              return _ === v || _ === "y";
            }
            return true;
          }).map((E) => [E.placement, E.overflows.filter((_) => _ > 0).reduce((_, Ht) => _ + Ht, 0)]).sort((E, _) => E[1] - _[1])[0]) == null ? void 0 : Rt[0];
          B && (K = B);
          break;
        }
        case "initialPlacement":
          K = l;
          break;
      }
      if (i !== K) return { reset: { placement: K } };
    }
    return {};
  } };
}, ue = /* @__PURE__ */ new Set(["left", "top"]);
async function de(t, e) {
  const { placement: n, platform: o, elements: i } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = H(n), l = tt(n), c = M(n) === "y", a = ue.has(s) ? -1 : 1, f = r && c ? -1 : 1, d = Z(e, t);
  let { mainAxis: m, crossAxis: u, alignmentAxis: h } = typeof d == "number" ? { mainAxis: d, crossAxis: 0, alignmentAxis: null } : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
  return l && typeof h == "number" && (u = l === "end" ? h * -1 : h), c ? { x: u * f, y: m * a } : { x: m * a, y: u * f };
}
const me = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    var n, o;
    const { x: i, y: r, placement: s, middlewareData: l } = e, c = await de(e, t);
    return s === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : { x: i + c.x, y: r + c.y, data: { ...c, placement: s } };
  } };
}, he = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: o, placement: i, platform: r } = e, { mainAxis: s = true, crossAxis: l = false, limiter: c = { fn: (v) => {
      let { x: y, y: x } = v;
      return { x: y, y: x };
    } }, ...a } = Z(t, e), f = { x: n, y: o }, d = await r.detectOverflow(e, a), m = M(i), u = Pt(m);
    let h = f[u], g = f[m];
    const w = (v, y) => Qt(y + d[v === "y" ? "top" : "left"], y, y - d[v === "y" ? "bottom" : "right"]);
    s && (h = w(u, h)), l && (g = w(m, g));
    const p = c.fn({ ...e, [u]: h, [m]: g });
    return { ...p, data: { x: p.x - n, y: p.y - o, enabled: { [u]: s, [m]: l } } };
  } };
}, ge = function(t) {
  return t === void 0 && (t = {}), { name: "size", options: t, async fn(e) {
    const { placement: n, rects: o, platform: i, elements: r } = e, { apply: s = () => {
    }, ...l } = Z(t, e), c = await i.detectOverflow(e, l), a = H(n), f = tt(n), d = M(n) === "y", { width: m, height: u } = o.floating;
    let h, g;
    a === "top" || a === "bottom" ? (h = a, g = f === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (g = a, h = f === "end" ? "top" : "bottom");
    const w = u - c.top - c.bottom, p = m - c.left - c.right, v = q(u - c[h], w), y = q(m - c[g], p), x = e.middlewareData.shift, O = !x;
    let R = v, b = y;
    x != null && x.enabled.x && (b = p), x != null && x.enabled.y && (R = w), O && !f && (d ? b = m - 2 * V(c.left, c.right) : R = u - 2 * V(c.top, c.bottom)), await s({ ...e, availableWidth: b, availableHeight: R });
    const C = await i.getDimensions(r.floating);
    return m !== C.width || u !== C.height ? { reset: { rects: true } } : {};
  } };
};
function rt() {
  return typeof window < "u";
}
function X(t) {
  return pt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function A(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function W(t) {
  var e;
  return (e = (pt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function pt(t) {
  return rt() ? t instanceof Node || t instanceof A(t).Node : false;
}
function T(t) {
  return rt() ? t instanceof Element || t instanceof A(t).Element : false;
}
function $(t) {
  return rt() ? t instanceof HTMLElement || t instanceof A(t).HTMLElement : false;
}
function Et(t) {
  return !rt() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof A(t).ShadowRoot;
}
function st(t) {
  const { overflow: e, overflowX: n, overflowY: o, display: i } = D(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && i !== "inline" && i !== "contents";
}
function pe(t) {
  return /^(table|td|th)$/.test(X(t));
}
function lt(t) {
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
const we = /transform|translate|scale|rotate|perspective|filter/, ve = /paint|layout|strict|content/, N = (t) => !!t && t !== "none";
let dt;
function wt(t) {
  const e = T(t) ? D(t) : t;
  return N(e.transform) || N(e.translate) || N(e.scale) || N(e.rotate) || N(e.perspective) || !vt() && (N(e.backdropFilter) || N(e.filter)) || we.test(e.willChange || "") || ve.test(e.contain || "");
}
function ye(t) {
  let e = z(t);
  for (; $(e) && !J(e); ) {
    if (wt(e)) return e;
    if (lt(e)) return null;
    e = z(e);
  }
  return null;
}
function vt() {
  return dt == null && (dt = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), dt;
}
function J(t) {
  return /^(html|body|#document)$/.test(X(t));
}
function D(t) {
  return A(t).getComputedStyle(t);
}
function ct(t) {
  return T(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function z(t) {
  if (X(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || Et(t) && t.host || W(t);
  return Et(e) ? e.host : e;
}
function Ft(t) {
  const e = z(t);
  return J(e) ? (t.ownerDocument || t).body : $(e) && st(e) ? e : Ft(e);
}
function Q(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = true);
  const i = Ft(t), r = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = A(i);
  if (r) {
    const l = gt(s);
    return e.concat(s, s.visualViewport || [], st(i) ? i : [], l && n ? Q(l) : []);
  } else return e.concat(i, Q(i, [], n));
}
function gt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Wt(t) {
  const e = D(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = $(t), r = i ? t.offsetWidth : n, s = i ? t.offsetHeight : o, l = nt(n) !== r || nt(o) !== s;
  return l && (n = r, o = s), { width: n, height: o, $: l };
}
function yt(t) {
  return T(t) ? t : t.contextElement;
}
function Y(t) {
  const e = yt(t);
  if (!$(e)) return F(1);
  const n = e.getBoundingClientRect(), { width: o, height: i, $: r } = Wt(e);
  let s = (r ? nt(n.width) : n.width) / o, l = (r ? nt(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: s, y: l };
}
const xe = F(0);
function _t(t) {
  const e = A(t);
  return !vt() || !e.visualViewport ? xe : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function be(t, e, n) {
  return e === void 0 && (e = false), !!n && e && n === A(t);
}
function I(t, e, n, o) {
  e === void 0 && (e = false), n === void 0 && (n = false);
  const i = t.getBoundingClientRect(), r = yt(t);
  let s = F(1);
  e && (o ? T(o) && (s = Y(o)) : s = Y(t));
  const l = be(r, n, o) ? _t(r) : F(0);
  let c = (i.left + l.x) / s.x, a = (i.top + l.y) / s.y, f = i.width / s.x, d = i.height / s.y;
  if (r && o) {
    const m = A(r), u = T(o) ? A(o) : o;
    let h = m, g = gt(h);
    for (; g && u !== h; ) {
      const w = Y(g), p = g.getBoundingClientRect(), v = D(g), y = p.left + (g.clientLeft + parseFloat(v.paddingLeft)) * w.x, x = p.top + (g.clientTop + parseFloat(v.paddingTop)) * w.y;
      c *= w.x, a *= w.y, f *= w.x, d *= w.y, c += y, a += x, h = A(g), g = gt(h);
    }
  }
  return it({ width: f, height: d, x: c, y: a });
}
function at(t, e) {
  const n = ct(t).scrollLeft;
  return e ? e.left + n : I(W(t)).left + n;
}
function $t(t, e) {
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - at(t, n), i = n.top + e.scrollTop;
  return { x: o, y: i };
}
function Re(t) {
  let { elements: e, rect: n, offsetParent: o, strategy: i } = t;
  const r = i === "fixed", s = W(o), l = e ? lt(e.floating) : false;
  if (o === s || l && r) return n;
  let c = { scrollLeft: 0, scrollTop: 0 }, a = F(1);
  const f = F(0), d = $(o);
  if ((d || !r) && ((X(o) !== "body" || st(s)) && (c = ct(o)), d)) {
    const u = I(o);
    a = Y(o), f.x = u.x + o.clientLeft, f.y = u.y + o.clientTop;
  }
  const m = s && !d && !r ? $t(s, c) : F(0);
  return { width: n.width * a.x, height: n.height * a.y, x: n.x * a.x - c.scrollLeft * a.x + f.x + m.x, y: n.y * a.y - c.scrollTop * a.y + f.y + m.y };
}
function Ce(t) {
  return t.getClientRects ? Array.from(t.getClientRects()) : [];
}
function Oe(t) {
  const e = ct(t), n = t.ownerDocument.body, o = V(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = V(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -e.scrollLeft + at(t);
  const s = -e.scrollTop;
  return D(n).direction === "rtl" && (r += V(t.clientWidth, n.clientWidth) - o), { width: o, height: i, x: r, y: s };
}
const Ae = 25;
function Ee(t, e, n) {
  n === void 0 && (n = "viewport");
  const o = n === "layoutViewport", i = A(t), r = W(t), s = i.visualViewport;
  let l = r.clientWidth, c = r.clientHeight, a = 0, f = 0;
  if (s) {
    const m = !vt() || e === "fixed";
    o ? m || (a = -s.offsetLeft, f = -s.offsetTop) : (l = s.width, c = s.height, m && (a = s.offsetLeft, f = s.offsetTop));
  }
  if (at(r) <= 0) {
    const m = r.ownerDocument, u = m.body, h = getComputedStyle(u), g = m.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, w = Math.abs(r.clientWidth - u.clientWidth - g), p = getComputedStyle(r).scrollbarGutter === "stable both-edges" ? w / 2 : w;
    p <= Ae && (l -= p);
  }
  return { width: l, height: c, x: a, y: f };
}
function Le(t, e) {
  const n = I(t, true, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = Y(t), s = t.clientWidth * r.x, l = t.clientHeight * r.y, c = i * r.x, a = o * r.y;
  return { width: s, height: l, x: c, y: a };
}
function Lt(t, e, n) {
  let o;
  if (e === "viewport" || e === "layoutViewport") o = Ee(t, n, e);
  else if (e === "document") o = Oe(W(t));
  else if (T(e)) o = Le(e, n);
  else {
    const i = _t(t);
    o = { x: e.x - i.x, y: e.y - i.y, width: e.width, height: e.height };
  }
  return it(o);
}
function Se(t, e) {
  const n = e.get(t);
  if (n) return n;
  let o = Q(t, [], false).filter((l) => T(l) && X(l) !== "body"), i = null;
  const r = D(t).position === "fixed";
  let s = r ? z(t) : t;
  for (; T(s) && !J(s); ) {
    const l = D(s), c = wt(s), a = i ? i.position : r ? "fixed" : "";
    !c && (a === "fixed" || a === "absolute" && l.position === "static") ? o = o.filter((d) => d !== s) : i = l, s = z(s);
  }
  return e.set(t, o), o;
}
function Te(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: i } = t;
  const s = [...n === "clippingAncestors" ? lt(e) ? [] : Se(e, this._c) : [].concat(n), o], l = Lt(e, s[0], i);
  let c = l.top, a = l.right, f = l.bottom, d = l.left;
  for (let m = 1; m < s.length; m++) {
    const u = Lt(e, s[m], i);
    c = V(u.top, c), a = q(u.right, a), f = q(u.bottom, f), d = V(u.left, d);
  }
  return { width: a - d, height: f - c, x: d, y: c };
}
function De(t) {
  const { width: e, height: n } = Wt(t);
  return { width: e, height: n };
}
function Pe(t, e, n) {
  const o = $(e), i = W(e), r = n === "fixed", s = I(t, true, r, e);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = F(0);
  if ((o || !r) && ((X(e) !== "body" || st(i)) && (l = ct(e)), o)) {
    const m = I(e, true, r, e);
    c.x = m.x + e.clientLeft, c.y = m.y + e.clientTop;
  }
  !o && i && (c.x = at(i));
  const a = i && !o && !r ? $t(i, l) : F(0), f = s.left + l.scrollLeft - c.x - a.x, d = s.top + l.scrollTop - c.y - a.y;
  return { x: f, y: d, width: s.width, height: s.height };
}
function mt(t) {
  return D(t).position === "static";
}
function St(t, e) {
  if (!$(t) || D(t).position === "fixed") return null;
  if (e) return e(t);
  let n = t.offsetParent;
  return W(t) === n && (n = n.ownerDocument.body), n;
}
function kt(t, e) {
  const n = A(t);
  if (lt(t)) return n;
  if (!$(t)) {
    let i = z(t);
    for (; i && !J(i); ) {
      if (T(i) && !mt(i)) return i;
      i = z(i);
    }
    return n;
  }
  let o = St(t, e);
  for (; o && pe(o) && mt(o); ) o = St(o, e);
  return o && J(o) && mt(o) && !wt(o) ? n : o || ye(t) || n;
}
const Me = async function(t) {
  const e = this.getOffsetParent || kt, n = this.getDimensions, o = await n(t.floating);
  return { reference: Pe(t.reference, await e(t.floating), t.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
};
function Ve(t) {
  return D(t).direction === "rtl";
}
const Fe = { convertOffsetParentRelativeRectToViewportRelativeRect: Re, getDocumentElement: W, getClippingRect: Te, getOffsetParent: kt, getElementRects: Me, getClientRects: Ce, getDimensions: De, getScale: Y, isElement: T, isRTL: Ve };
function Bt(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function We(t, e, n) {
  let o = null, i;
  const r = W(t);
  function s() {
    var f;
    clearTimeout(i), (f = o) == null || f.disconnect(), o = null;
  }
  function l(f, d) {
    f === void 0 && (f = false), d === void 0 && (d = 1), s();
    const m = t.getBoundingClientRect(), { left: u, top: h, width: g, height: w } = m;
    if (f || e(), !g || !w) return;
    const p = et(h), v = et(r.clientWidth - (u + g)), y = et(r.clientHeight - (h + w)), x = et(u), R = { rootMargin: -p + "px " + -v + "px " + -y + "px " + -x + "px", threshold: V(0, q(1, d)) || 1 };
    let b = true;
    function C(L) {
      const S = L[0].intersectionRatio;
      if (!Bt(m, t.getBoundingClientRect())) return l();
      if (S !== d) {
        if (!b) return l();
        S ? l(false, S) : i = setTimeout(() => {
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
  const c = A(t), a = () => l(n);
  return c.addEventListener("resize", a), l(true), () => {
    c.removeEventListener("resize", a), s();
  };
}
function Ne(t, e, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: i = true, ancestorResize: r = true, elementResize: s = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: c = false } = o, a = yt(t), f = i || r ? [...a ? Q(a) : [], ...e ? Q(e) : []] : [];
  f.forEach((p) => {
    i && p.addEventListener("scroll", n), r && p.addEventListener("resize", n);
  });
  const d = a && l ? We(a, n, r) : null;
  let m = -1, u = null;
  s && (u = new ResizeObserver((p) => {
    let [v] = p;
    v && v.target === a && u && e && (u.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var y;
      (y = u) == null || y.observe(e);
    })), n();
  }), a && !c && u.observe(a), e && u.observe(e));
  let h, g = c ? I(t) : null;
  c && w();
  function w() {
    const p = I(t);
    g && !Bt(g, p) && n(), g = p, h = requestAnimationFrame(w);
  }
  return n(), () => {
    var p;
    f.forEach((v) => {
      i && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), d?.(), (p = u) == null || p.disconnect(), u = null, c && cancelAnimationFrame(h);
  };
}
const He = me, ze = he, Ie = fe, Xe = ge, _e = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = n ?? {}, r = { ...Fe, ...i.platform, _c: o };
  return ae(t, e, { ...i, platform: r });
};
function $e(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function Tt(t) {
  if ($e(t)) {
    const e = t.$el;
    return pt(e) && X(e) === "#comment" ? null : e;
  }
  return t;
}
function Nt(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dt(t, e) {
  const n = Nt(t);
  return Math.round(e * n) / n;
}
function je(t, e, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, i = P(() => {
    var b;
    return (b = G(n.open)) != null ? b : true;
  }), r = P(() => G(n.middleware)), s = P(() => {
    var b;
    return (b = G(n.placement)) != null ? b : "bottom";
  }), l = P(() => {
    var b;
    return (b = G(n.strategy)) != null ? b : "absolute";
  }), c = P(() => {
    var b;
    return (b = G(n.transform)) != null ? b : true;
  }), a = P(() => Tt(t.value)), f = P(() => Tt(e.value)), d = U(0), m = U(0), u = U(l.value), h = U(s.value), g = zt({}), w = U(false), p = P(() => {
    const b = { position: u.value, left: "0", top: "0" };
    if (!f.value) return b;
    const C = Dt(f.value, d.value), L = Dt(f.value, m.value);
    return c.value ? { ...b, transform: "translate(" + C + "px, " + L + "px)", ...Nt(f.value) >= 1.5 && { willChange: "transform" } } : { position: u.value, left: C + "px", top: L + "px" };
  });
  let v;
  function y() {
    if (a.value == null || f.value == null) return;
    const b = i.value;
    _e(a.value, f.value, { middleware: r.value, placement: s.value, strategy: l.value }).then((C) => {
      d.value = C.x, m.value = C.y, u.value = C.strategy, h.value = C.placement, g.value = C.middlewareData, w.value = b !== false;
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
  return ut([r, s, l, i], y, { flush: "sync" }), ut([a, f], O, { flush: "sync" }), ut(i, R, { flush: "sync" }), It() && Xt(x), { x: j(d), y: j(m), strategy: j(u), placement: j(h), middlewareData: j(g), isPositioned: j(w), floatingStyles: p, update: y };
}
const Ye = jt({ __name: "TeleportContainer", props: { to: {}, container: {}, defer: { type: Boolean }, disabled: { type: Boolean } }, setup(t) {
  const e = t;
  return Gt(P(() => e.container)), (n, o) => (Yt(), qt(Kt, { to: t.to, defer: t.defer, disabled: t.disabled }, [Ut(n.$slots, "default")], 8, ["to", "defer", "disabled"]));
} });
export {
  Ye as _,
  Ne as a,
  Xe as b,
  Ie as f,
  He as o,
  ze as s,
  je as u
};
