import { r as U, B as nt, N as j, h as T, C as jt, a1 as Yt, a2 as qt, M as G, d as _t, o as Mt, f as Kt, a3 as Ut, g as Gt, Y as Jt, A as Qt, c as Zt, n as te, t as ee, e as ne } from "./iframe-DtOriYE2.js";
import { b as oe } from "./useOverlay-Wd9lR9Hm.js";
import { _ as ie } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const q = Math.min, M = Math.max, ot = Math.round, et = Math.floor, V = (t) => ({ x: t, y: t }), se = { left: "right", right: "left", bottom: "top", top: "bottom" };
function re(t, e, n) {
  return M(t, q(e, n));
}
function Z(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function z(t) {
  return t.split("-")[0];
}
function tt(t) {
  return t.split("-")[1];
}
function Vt(t) {
  return t === "x" ? "y" : "x";
}
function Ft(t) {
  return t === "y" ? "height" : "width";
}
function _(t) {
  const e = t[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function Wt(t) {
  return Vt(_(t));
}
function le(t, e, n) {
  n === void 0 && (n = false);
  const o = tt(t), i = Wt(t), s = Ft(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = it(r)), [r, it(r)];
}
function ce(t) {
  const e = it(t);
  return [ht(t), e, ht(e)];
}
function ht(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
const Ct = ["left", "right"], Ot = ["right", "left"], ae = ["top", "bottom"], fe = ["bottom", "top"];
function ue(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Ot : Ct : e ? Ct : Ot;
    case "left":
    case "right":
      return e ? ae : fe;
    default:
      return [];
  }
}
function de(t, e, n, o) {
  const i = tt(t);
  let s = ue(z(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(ht)))), s;
}
function it(t) {
  const e = z(t);
  return se[e] + t.slice(e.length);
}
function me(t) {
  var e, n, o, i;
  return { top: (e = t.top) != null ? e : 0, right: (n = t.right) != null ? n : 0, bottom: (o = t.bottom) != null ? o : 0, left: (i = t.left) != null ? i : 0 };
}
function he(t) {
  return typeof t != "number" ? me(t) : { top: t, right: t, bottom: t, left: t };
}
function st(t) {
  const { x: e, y: n, width: o, height: i } = t;
  return { width: o, height: i, top: n, left: e, right: e + o, bottom: n + i, x: e, y: n };
}
function At(t, e, n) {
  let { reference: o, floating: i } = t;
  const s = _(e), r = Wt(e), l = Ft(r), c = z(e), a = s === "y", f = o.x + o.width / 2 - i.width / 2, d = o.y + o.height / 2 - i.height / 2, m = o[l] / 2 - i[l] / 2;
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
  return h && (u[r] += m * (h === "end" ? 1 : -1) * (n && a ? -1 : 1)), u;
}
async function ge(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: o, y: i, platform: s, rects: r, elements: l, strategy: c } = t, { boundary: a = "clippingAncestors", rootBoundary: f = "viewport", elementContext: d = "floating", altBoundary: m = false, padding: u = 0 } = Z(e, t), h = he(u), w = l[m ? d === "floating" ? "reference" : "floating" : d], p = st(await s.getClippingRect({ element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)), boundary: a, rootBoundary: f, strategy: c })), y = d === "floating" ? { x: o, y: i, width: r.floating.width, height: r.floating.height } : r.reference, v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), x = await (s.isElement == null ? void 0 : s.isElement(v)) && await (s.getScale == null ? void 0 : s.getScale(v)) || { x: 1, y: 1 }, O = st(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: y, offsetParent: v, strategy: c }) : y);
  return { top: (p.top - O.top + h.top) / x.y, bottom: (O.bottom - p.bottom + h.bottom) / x.y, left: (p.left - O.left + h.left) / x.x, right: (O.right - p.right + h.right) / x.x };
}
const pe = 50, we = async (t, e, n) => {
  const { placement: o = "bottom", strategy: i = "absolute", middleware: s = [], platform: r } = n, l = r.detectOverflow ? r : { ...r, detectOverflow: ge }, c = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let a = await r.getElementRects({ reference: t, floating: e, strategy: i }), { x: f, y: d } = At(a, o, c), m = o, u = 0;
  const h = {};
  for (let g = 0; g < s.length; g++) {
    const w = s[g];
    if (!w) continue;
    const { name: p, fn: y } = w, { x: v, y: x, data: O, reset: R } = await y({ x: f, y: d, initialPlacement: o, placement: m, strategy: i, middlewareData: h, rects: a, platform: l, elements: { reference: t, floating: e } });
    f = v ?? f, d = x ?? d, h[p] = { ...h[p], ...O }, R && u < pe && (u++, typeof R == "object" && (R.placement && (m = R.placement), R.rects && (a = R.rects === true ? await r.getElementRects({ reference: t, floating: e, strategy: i }) : R.rects), { x: f, y: d } = At(a, m, c)), g = -1);
  }
  return { x: f, y: d, placement: m, strategy: i, middlewareData: h };
}, ye = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n, o;
    const { placement: i, middlewareData: s, rects: r, initialPlacement: l, platform: c, elements: a } = e, { mainAxis: f = true, crossAxis: d = true, fallbackPlacements: m, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: h = "none", flipAlignment: g = true, ...w } = Z(t, e);
    if ((n = s.arrow) != null && n.alignmentOffset) return {};
    const p = z(i), y = _(l), v = z(l) === l, x = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), O = m || (v || !g ? [it(l)] : ce(l)), R = h !== "none";
    !m && R && O.push(...de(l, g, h, x));
    const b = [l, ...O], C = await c.detectOverflow(e, w), E = [];
    let L = ((o = s.flip) == null ? void 0 : o.overflows) || [];
    if (f && E.push(C[p]), d) {
      const k = le(i, r, x);
      E.push(C[k[0]], C[k[1]]);
    }
    if (L = [...L, { placement: i, overflows: E }], !E.every((k) => k <= 0)) {
      var xt, bt;
      const k = (((xt = s.flip) == null ? void 0 : xt.index) || 0) + 1, ut = b[k];
      if (ut && (!(d === "alignment" ? y !== _(ut) : false) || L.every((S) => _(S.placement) === y ? S.overflows[0] > 0 : true))) return { data: { index: k, overflows: L }, reset: { placement: ut } };
      let K = (bt = L.filter((B) => B.overflows[0] <= 0).sort((B, S) => B.overflows[1] - S.overflows[1])[0]) == null ? void 0 : bt.placement;
      if (!K) switch (u) {
        case "bestFit": {
          var Rt;
          const B = (Rt = L.filter((S) => {
            if (R) {
              const W = _(S.placement);
              return W === y || W === "y";
            }
            return true;
          }).map((S) => [S.placement, S.overflows.filter((W) => W > 0).reduce((W, Xt) => W + Xt, 0)]).sort((S, W) => S[1] - W[1])[0]) == null ? void 0 : Rt[0];
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
}, ve = /* @__PURE__ */ new Set(["left", "top"]);
async function xe(t, e) {
  const { placement: n, platform: o, elements: i } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = z(n), l = tt(n), c = _(n) === "y", a = ve.has(r) ? -1 : 1, f = s && c ? -1 : 1, d = Z(e, t);
  let { mainAxis: m, crossAxis: u, alignmentAxis: h } = typeof d == "number" ? { mainAxis: d, crossAxis: 0, alignmentAxis: null } : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
  return l && typeof h == "number" && (u = l === "end" ? h * -1 : h), c ? { x: u * f, y: m * a } : { x: m * a, y: u * f };
}
const be = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    var n, o;
    const { x: i, y: s, placement: r, middlewareData: l } = e, c = await xe(e, t);
    return r === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : { x: i + c.x, y: s + c.y, data: { ...c, placement: r } };
  } };
}, Re = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: o, placement: i, platform: s } = e, { mainAxis: r = true, crossAxis: l = false, limiter: c = { fn: (y) => {
      let { x: v, y: x } = y;
      return { x: v, y: x };
    } }, ...a } = Z(t, e), f = { x: n, y: o }, d = await s.detectOverflow(e, a), m = _(i), u = Vt(m);
    let h = f[u], g = f[m];
    const w = (y, v) => re(v + d[y === "y" ? "top" : "left"], v, v - d[y === "y" ? "bottom" : "right"]);
    r && (h = w(u, h)), l && (g = w(m, g));
    const p = c.fn({ ...e, [u]: h, [m]: g });
    return { ...p, data: { x: p.x - n, y: p.y - o, enabled: { [u]: r, [m]: l } } };
  } };
}, Ce = function(t) {
  return t === void 0 && (t = {}), { name: "size", options: t, async fn(e) {
    const { placement: n, rects: o, platform: i, elements: s } = e, { apply: r = () => {
    }, ...l } = Z(t, e), c = await i.detectOverflow(e, l), a = z(n), f = tt(n), d = _(n) === "y", { width: m, height: u } = o.floating;
    let h, g;
    a === "top" || a === "bottom" ? (h = a, g = f === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (g = a, h = f === "end" ? "top" : "bottom");
    const w = u - c.top - c.bottom, p = m - c.left - c.right, y = q(u - c[h], w), v = q(m - c[g], p), x = e.middlewareData.shift, O = !x;
    let R = y, b = v;
    x != null && x.enabled.x && (b = p), x != null && x.enabled.y && (R = w), O && !f && (d ? b = m - 2 * M(c.left, c.right) : R = u - 2 * M(c.top, c.bottom)), await r({ ...e, availableWidth: b, availableHeight: R });
    const C = await i.getDimensions(s.floating);
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
function F(t) {
  var e;
  return (e = (pt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function pt(t) {
  return rt() ? t instanceof Node || t instanceof A(t).Node : false;
}
function D(t) {
  return rt() ? t instanceof Element || t instanceof A(t).Element : false;
}
function $(t) {
  return rt() ? t instanceof HTMLElement || t instanceof A(t).HTMLElement : false;
}
function St(t) {
  return !rt() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof A(t).ShadowRoot;
}
function lt(t) {
  const { overflow: e, overflowX: n, overflowY: o, display: i } = P(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && i !== "inline" && i !== "contents";
}
function Oe(t) {
  return /^(table|td|th)$/.test(X(t));
}
function ct(t) {
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
const Ae = /transform|translate|scale|rotate|perspective|filter/, Se = /paint|layout|strict|content/, N = (t) => !!t && t !== "none";
let dt;
function wt(t) {
  const e = D(t) ? P(t) : t;
  return N(e.transform) || N(e.translate) || N(e.scale) || N(e.rotate) || N(e.perspective) || !yt() && (N(e.backdropFilter) || N(e.filter)) || Ae.test(e.willChange || "") || Se.test(e.contain || "");
}
function Ee(t) {
  let e = H(t);
  for (; $(e) && !J(e); ) {
    if (wt(e)) return e;
    if (ct(e)) return null;
    e = H(e);
  }
  return null;
}
function yt() {
  return dt == null && (dt = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), dt;
}
function J(t) {
  return /^(html|body|#document)$/.test(X(t));
}
function P(t) {
  return A(t).getComputedStyle(t);
}
function at(t) {
  return D(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function H(t) {
  if (X(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || St(t) && t.host || F(t);
  return St(e) ? e.host : e;
}
function $t(t) {
  const e = H(t);
  return J(e) ? (t.ownerDocument || t).body : $(e) && lt(e) ? e : $t(e);
}
function Q(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = true);
  const i = $t(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = A(i);
  if (s) {
    const l = gt(r);
    return e.concat(r, r.visualViewport || [], lt(i) ? i : [], l && n ? Q(l) : []);
  } else return e.concat(i, Q(i, [], n));
}
function gt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function kt(t) {
  const e = P(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = $(t), s = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, l = ot(n) !== s || ot(o) !== r;
  return l && (n = s, o = r), { width: n, height: o, $: l };
}
function vt(t) {
  return D(t) ? t : t.contextElement;
}
function Y(t) {
  const e = vt(t);
  if (!$(e)) return V(1);
  const n = e.getBoundingClientRect(), { width: o, height: i, $: s } = kt(e);
  let r = (s ? ot(n.width) : n.width) / o, l = (s ? ot(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: r, y: l };
}
const Le = V(0);
function Bt(t) {
  const e = A(t);
  return !yt() || !e.visualViewport ? Le : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function Te(t, e, n) {
  return e === void 0 && (e = false), !!n && e && n === A(t);
}
function I(t, e, n, o) {
  e === void 0 && (e = false), n === void 0 && (n = false);
  const i = t.getBoundingClientRect(), s = vt(t);
  let r = V(1);
  e && (o ? D(o) && (r = Y(o)) : r = Y(t));
  const l = Te(s, n, o) ? Bt(s) : V(0);
  let c = (i.left + l.x) / r.x, a = (i.top + l.y) / r.y, f = i.width / r.x, d = i.height / r.y;
  if (s && o) {
    const m = A(s), u = D(o) ? A(o) : o;
    let h = m, g = gt(h);
    for (; g && u !== h; ) {
      const w = Y(g), p = g.getBoundingClientRect(), y = P(g), v = p.left + (g.clientLeft + parseFloat(y.paddingLeft)) * w.x, x = p.top + (g.clientTop + parseFloat(y.paddingTop)) * w.y;
      c *= w.x, a *= w.y, f *= w.x, d *= w.y, c += v, a += x, h = A(g), g = gt(h);
    }
  }
  return st({ width: f, height: d, x: c, y: a });
}
function ft(t, e) {
  const n = at(t).scrollLeft;
  return e ? e.left + n : I(F(t)).left + n;
}
function Nt(t, e) {
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - ft(t, n), i = n.top + e.scrollTop;
  return { x: o, y: i };
}
function De(t) {
  let { elements: e, rect: n, offsetParent: o, strategy: i } = t;
  const s = i === "fixed", r = F(o), l = e ? ct(e.floating) : false;
  if (o === r || l && s) return n;
  let c = { scrollLeft: 0, scrollTop: 0 }, a = V(1);
  const f = V(0), d = $(o);
  if ((d || !s) && ((X(o) !== "body" || lt(r)) && (c = at(o)), d)) {
    const u = I(o);
    a = Y(o), f.x = u.x + o.clientLeft, f.y = u.y + o.clientTop;
  }
  const m = r && !d && !s ? Nt(r, c) : V(0);
  return { width: n.width * a.x, height: n.height * a.y, x: n.x * a.x - c.scrollLeft * a.x + f.x + m.x, y: n.y * a.y - c.scrollTop * a.y + f.y + m.y };
}
function Pe(t) {
  return t.getClientRects ? Array.from(t.getClientRects()) : [];
}
function _e(t) {
  const e = at(t), n = t.ownerDocument.body, o = M(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = M(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -e.scrollLeft + ft(t);
  const r = -e.scrollTop;
  return P(n).direction === "rtl" && (s += M(t.clientWidth, n.clientWidth) - o), { width: o, height: i, x: s, y: r };
}
const Me = 25;
function Ve(t, e, n) {
  n === void 0 && (n = "viewport");
  const o = n === "layoutViewport", i = A(t), s = F(t), r = i.visualViewport;
  let l = s.clientWidth, c = s.clientHeight, a = 0, f = 0;
  if (r) {
    const m = !yt() || e === "fixed";
    o ? m || (a = -r.offsetLeft, f = -r.offsetTop) : (l = r.width, c = r.height, m && (a = r.offsetLeft, f = r.offsetTop));
  }
  if (ft(s) <= 0) {
    const m = s.ownerDocument, u = m.body, h = getComputedStyle(u), g = m.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, w = Math.abs(s.clientWidth - u.clientWidth - g), p = getComputedStyle(s).scrollbarGutter === "stable both-edges" ? w / 2 : w;
    p <= Me && (l -= p);
  }
  return { width: l, height: c, x: a, y: f };
}
function Fe(t, e) {
  const n = I(t, true, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = Y(t), r = t.clientWidth * s.x, l = t.clientHeight * s.y, c = i * s.x, a = o * s.y;
  return { width: r, height: l, x: c, y: a };
}
function Et(t, e, n) {
  let o;
  if (e === "viewport" || e === "layoutViewport") o = Ve(t, n, e);
  else if (e === "document") o = _e(F(t));
  else if (D(e)) o = Fe(e, n);
  else {
    const i = Bt(t);
    o = { x: e.x - i.x, y: e.y - i.y, width: e.width, height: e.height };
  }
  return st(o);
}
function We(t, e) {
  const n = e.get(t);
  if (n) return n;
  let o = Q(t, [], false).filter((l) => D(l) && X(l) !== "body"), i = null;
  const s = P(t).position === "fixed";
  let r = s ? H(t) : t;
  for (; D(r) && !J(r); ) {
    const l = P(r), c = wt(r), a = i ? i.position : s ? "fixed" : "";
    !c && (a === "fixed" || a === "absolute" && l.position === "static") ? o = o.filter((d) => d !== r) : i = l, r = H(r);
  }
  return e.set(t, o), o;
}
function $e(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: i } = t;
  const r = [...n === "clippingAncestors" ? ct(e) ? [] : We(e, this._c) : [].concat(n), o], l = Et(e, r[0], i);
  let c = l.top, a = l.right, f = l.bottom, d = l.left;
  for (let m = 1; m < r.length; m++) {
    const u = Et(e, r[m], i);
    c = M(u.top, c), a = q(u.right, a), f = q(u.bottom, f), d = M(u.left, d);
  }
  return { width: a - d, height: f - c, x: d, y: c };
}
function ke(t) {
  const { width: e, height: n } = kt(t);
  return { width: e, height: n };
}
function Be(t, e, n) {
  const o = $(e), i = F(e), s = n === "fixed", r = I(t, true, s, e);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = V(0);
  if ((o || !s) && ((X(e) !== "body" || lt(i)) && (l = at(e)), o)) {
    const m = I(e, true, s, e);
    c.x = m.x + e.clientLeft, c.y = m.y + e.clientTop;
  }
  !o && i && (c.x = ft(i));
  const a = i && !o && !s ? Nt(i, l) : V(0), f = r.left + l.scrollLeft - c.x - a.x, d = r.top + l.scrollTop - c.y - a.y;
  return { x: f, y: d, width: r.width, height: r.height };
}
function mt(t) {
  return P(t).position === "static";
}
function Lt(t, e) {
  if (!$(t) || P(t).position === "fixed") return null;
  if (e) return e(t);
  let n = t.offsetParent;
  return F(t) === n && (n = n.ownerDocument.body), n;
}
function zt(t, e) {
  const n = A(t);
  if (ct(t)) return n;
  if (!$(t)) {
    let i = H(t);
    for (; i && !J(i); ) {
      if (D(i) && !mt(i)) return i;
      i = H(i);
    }
    return n;
  }
  let o = Lt(t, e);
  for (; o && Oe(o) && mt(o); ) o = Lt(o, e);
  return o && J(o) && mt(o) && !wt(o) ? n : o || Ee(t) || n;
}
const Ne = async function(t) {
  const e = this.getOffsetParent || zt, n = this.getDimensions, o = await n(t.floating);
  return { reference: Be(t.reference, await e(t.floating), t.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
};
function ze(t) {
  return P(t).direction === "rtl";
}
const He = { convertOffsetParentRelativeRectToViewportRelativeRect: De, getDocumentElement: F, getClippingRect: $e, getOffsetParent: zt, getElementRects: Ne, getClientRects: Pe, getDimensions: ke, getScale: Y, isElement: D, isRTL: ze };
function Ht(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Ie(t, e, n) {
  let o = null, i;
  const s = F(t);
  function r() {
    var f;
    clearTimeout(i), (f = o) == null || f.disconnect(), o = null;
  }
  function l(f, d) {
    f === void 0 && (f = false), d === void 0 && (d = 1), r();
    const m = t.getBoundingClientRect(), { left: u, top: h, width: g, height: w } = m;
    if (f || e(), !g || !w) return;
    const p = et(h), y = et(s.clientWidth - (u + g)), v = et(s.clientHeight - (h + w)), x = et(u), R = { rootMargin: -p + "px " + -y + "px " + -v + "px " + -x + "px", threshold: M(0, q(1, d)) || 1 };
    let b = true;
    function C(E) {
      const L = E[0].intersectionRatio;
      if (!Ht(m, t.getBoundingClientRect())) return l();
      if (L !== d) {
        if (!b) return l();
        L ? l(false, L) : i = setTimeout(() => {
          l(false, 1e-7);
        }, 1e3);
      }
      b = false;
    }
    try {
      o = new IntersectionObserver(C, { ...R, root: s.ownerDocument });
    } catch {
      o = new IntersectionObserver(C, R);
    }
    o.observe(t);
  }
  const c = A(t), a = () => l(n);
  return c.addEventListener("resize", a), l(true), () => {
    c.removeEventListener("resize", a), r();
  };
}
function Qe(t, e, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: i = true, ancestorResize: s = true, elementResize: r = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: c = false } = o, a = vt(t), f = i || s ? [...a ? Q(a) : [], ...e ? Q(e) : []] : [];
  f.forEach((p) => {
    i && p.addEventListener("scroll", n), s && p.addEventListener("resize", n);
  });
  const d = a && l ? Ie(a, n, s) : null;
  let m = -1, u = null;
  r && (u = new ResizeObserver((p) => {
    let [y] = p;
    y && y.target === a && u && e && (u.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var v;
      (v = u) == null || v.observe(e);
    })), n();
  }), a && !c && u.observe(a), e && u.observe(e));
  let h, g = c ? I(t) : null;
  c && w();
  function w() {
    const p = I(t);
    g && !Ht(g, p) && n(), g = p, h = requestAnimationFrame(w);
  }
  return n(), () => {
    var p;
    f.forEach((y) => {
      i && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), d?.(), (p = u) == null || p.disconnect(), u = null, c && cancelAnimationFrame(h);
  };
}
const Ze = be, tn = Re, en = ye, nn = Ce, Xe = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = n ?? {}, s = { ...He, ...i.platform, _c: o };
  return we(t, e, { ...i, platform: s });
};
function je(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function Tt(t) {
  if (je(t)) {
    const e = t.$el;
    return pt(e) && X(e) === "#comment" ? null : e;
  }
  return t;
}
function It(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dt(t, e) {
  const n = It(t);
  return Math.round(e * n) / n;
}
function on(t, e, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, i = T(() => {
    var b;
    return (b = G(n.open)) != null ? b : true;
  }), s = T(() => G(n.middleware)), r = T(() => {
    var b;
    return (b = G(n.placement)) != null ? b : "bottom";
  }), l = T(() => {
    var b;
    return (b = G(n.strategy)) != null ? b : "absolute";
  }), c = T(() => {
    var b;
    return (b = G(n.transform)) != null ? b : true;
  }), a = T(() => Tt(t.value)), f = T(() => Tt(e.value)), d = U(0), m = U(0), u = U(l.value), h = U(r.value), g = jt({}), w = U(false), p = T(() => {
    const b = { position: u.value, left: "0", top: "0" };
    if (!f.value) return b;
    const C = Dt(f.value, d.value), E = Dt(f.value, m.value);
    return c.value ? { ...b, transform: "translate(" + C + "px, " + E + "px)", ...It(f.value) >= 1.5 && { willChange: "transform" } } : { position: u.value, left: C + "px", top: E + "px" };
  });
  let y;
  function v() {
    if (a.value == null || f.value == null) return;
    const b = i.value;
    Xe(a.value, f.value, { middleware: s.value, placement: r.value, strategy: l.value }).then((C) => {
      d.value = C.x, m.value = C.y, u.value = C.strategy, h.value = C.placement, g.value = C.middlewareData, w.value = b !== false;
    });
  }
  function x() {
    typeof y == "function" && (y(), y = void 0);
  }
  function O() {
    if (x(), o === void 0) {
      v();
      return;
    }
    if (a.value != null && f.value != null) {
      y = o(a.value, f.value, v);
      return;
    }
  }
  function R() {
    i.value || (w.value = false);
  }
  return nt([s, r, l, i], v, { flush: "sync" }), nt([a, f], O, { flush: "sync" }), nt(i, R, { flush: "sync" }), Yt() && qt(x), { x: j(d), y: j(m), strategy: j(u), placement: j(h), middlewareData: j(g), isPositioned: j(w), floatingStyles: p, update: v };
}
const sn = _t({ __name: "TeleportContainer", props: { to: {}, container: {}, defer: { type: Boolean }, disabled: { type: Boolean } }, setup(t) {
  const e = t;
  return oe(T(() => e.container)), (n, o) => (Mt(), Kt(Ut, { to: t.to, defer: t.defer, disabled: t.disabled }, [Gt(n.$slots, "default")], 8, ["to", "defer", "disabled"]));
} }), Pt = Jt(/* @__PURE__ */ new Set()), Ye = () => ({ useLoadSymbol: (e) => {
  nt(e, (n) => {
    n && Pt.add(n);
  }, { immediate: true });
}, loadedSymbols: Pt }), qe = _t({ __name: "MDSymbol", props: { name: {} }, setup(t) {
  const e = t, { name: n } = Qt(e), { useLoadSymbol: o, loadedSymbols: i } = Ye(), s = T(() => i.has(n.value));
  return o(n), (r, l) => (Mt(), Zt("i", { class: te(["md-symbol material-symbols-rounded", [{ "md-symbol_not-ready": !s.value }]]), translate: "no", "aria-hidden": "true" }, ee(ne(n)), 3));
} }), rn = ie(qe, [["__scopeId", "data-v-0159d969"]]);
export {
  rn as M,
  sn as _,
  Qe as a,
  nn as b,
  en as f,
  Ze as o,
  tn as s,
  on as u
};
