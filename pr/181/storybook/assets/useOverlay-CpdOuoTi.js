import { r as G, B as Q, K as X, h as A, A as Ut, a2 as Jt, a3 as Qt, J as U, q as Zt, a4 as te, G as Z, W as ee, m as ne, I as wt, d as oe, o as ie, f as re, a5 as se, g as le } from "./iframe-CGoIUeDj.js";
import { p as ce, t as ae, d as fe, q as ue } from "./index-C3wNNV0M.js";
const q = Math.min, M = Math.max, rt = Math.round, it = Math.floor, V = (t) => ({ x: t, y: t }), de = { left: "right", right: "left", bottom: "top", top: "bottom" };
function me(t, e, n) {
  return M(t, q(e, n));
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
function $t(t) {
  return t === "x" ? "y" : "x";
}
function Nt(t) {
  return t === "y" ? "height" : "width";
}
function k(t) {
  const e = t[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function Bt(t) {
  return $t(k(t));
}
function he(t, e, n) {
  n === void 0 && (n = false);
  const o = ot(t), i = Bt(t), r = Nt(i);
  let s = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = st(s)), [s, st(s)];
}
function pe(t) {
  const e = st(t);
  return [vt(t), e, vt(e)];
}
function vt(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
const Dt = ["left", "right"], Pt = ["right", "left"], ge = ["top", "bottom"], we = ["bottom", "top"];
function ve(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Pt : Dt : e ? Dt : Pt;
    case "left":
    case "right":
      return e ? ge : we;
    default:
      return [];
  }
}
function ye(t, e, n, o) {
  const i = ot(t);
  let r = ve(H(t), n === "start", o);
  return i && (r = r.map((s) => s + "-" + i), e && (r = r.concat(r.map(vt)))), r;
}
function st(t) {
  const e = H(t);
  return de[e] + t.slice(e.length);
}
function xe(t) {
  var e, n, o, i;
  return { top: (e = t.top) != null ? e : 0, right: (n = t.right) != null ? n : 0, bottom: (o = t.bottom) != null ? o : 0, left: (i = t.left) != null ? i : 0 };
}
function be(t) {
  return typeof t != "number" ? xe(t) : { top: t, right: t, bottom: t, left: t };
}
function lt(t) {
  const { x: e, y: n, width: o, height: i } = t;
  return { width: o, height: i, top: n, left: e, right: e + o, bottom: n + i, x: e, y: n };
}
function kt(t, e, n) {
  let { reference: o, floating: i } = t;
  const r = k(e), s = Bt(e), l = Nt(s), c = H(e), a = r === "y", f = o.x + o.width / 2 - i.width / 2, d = o.y + o.height / 2 - i.height / 2, m = o[l] / 2 - i[l] / 2;
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
  const h = ot(e);
  return h && (u[s] += m * (h === "end" ? 1 : -1) * (n && a ? -1 : 1)), u;
}
async function Re(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: o, y: i, platform: r, rects: s, elements: l, strategy: c } = t, { boundary: a = "clippingAncestors", rootBoundary: f = "viewport", elementContext: d = "floating", altBoundary: m = false, padding: u = 0 } = nt(e, t), h = be(u), w = l[m ? d === "floating" ? "reference" : "floating" : d], g = lt(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(w))) == null || n ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)), boundary: a, rootBoundary: f, strategy: c })), v = d === "floating" ? { x: o, y: i, width: s.floating.width, height: s.floating.height } : s.reference, y = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), x = await (r.isElement == null ? void 0 : r.isElement(y)) && await (r.getScale == null ? void 0 : r.getScale(y)) || { x: 1, y: 1 }, O = lt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: v, offsetParent: y, strategy: c }) : v);
  return { top: (g.top - O.top + h.top) / x.y, bottom: (O.bottom - g.bottom + h.bottom) / x.y, left: (g.left - O.left + h.left) / x.x, right: (O.right - g.right + h.right) / x.x };
}
const Ce = 50, Oe = async (t, e, n) => {
  const { placement: o = "bottom", strategy: i = "absolute", middleware: r = [], platform: s } = n, l = s.detectOverflow ? s : { ...s, detectOverflow: Re }, c = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let a = await s.getElementRects({ reference: t, floating: e, strategy: i }), { x: f, y: d } = kt(a, o, c), m = o, u = 0;
  const h = {};
  for (let p = 0; p < r.length; p++) {
    const w = r[p];
    if (!w) continue;
    const { name: g, fn: v } = w, { x: y, y: x, data: O, reset: R } = await v({ x: f, y: d, initialPlacement: o, placement: m, strategy: i, middlewareData: h, rects: a, platform: l, elements: { reference: t, floating: e } });
    f = y ?? f, d = x ?? d, h[g] = { ...h[g], ...O }, R && u < Ce && (u++, typeof R == "object" && (R.placement && (m = R.placement), R.rects && (a = R.rects === true ? await s.getElementRects({ reference: t, floating: e, strategy: i }) : R.rects), { x: f, y: d } = kt(a, m, c)), p = -1);
  }
  return { x: f, y: d, placement: m, strategy: i, middlewareData: h };
}, Ee = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n, o;
    const { placement: i, middlewareData: r, rects: s, initialPlacement: l, platform: c, elements: a } = e, { mainAxis: f = true, crossAxis: d = true, fallbackPlacements: m, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: h = "none", flipAlignment: p = true, ...w } = nt(t, e);
    if ((n = r.arrow) != null && n.alignmentOffset) return {};
    const g = H(i), v = k(l), y = H(l) === l, x = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), O = m || (y || !p ? [st(l)] : pe(l)), R = h !== "none";
    !m && R && O.push(...ye(l, p, h, x));
    const b = [l, ...O], C = await c.detectOverflow(e, w), L = [];
    let T = ((o = r.flip) == null ? void 0 : o.overflows) || [];
    if (f && L.push(C[g]), d) {
      const $ = he(i, s, x);
      L.push(C[$[0]], C[$[1]]);
    }
    if (T = [...T, { placement: i, overflows: L }], !L.every(($) => $ <= 0)) {
      var St, Lt;
      const $ = (((St = r.flip) == null ? void 0 : St.index) || 0) + 1, mt = b[$];
      if (mt && (!(d === "alignment" ? v !== k(mt) : false) || T.every((S) => k(S.placement) === v ? S.overflows[0] > 0 : true))) return { data: { index: $, overflows: T }, reset: { placement: mt } };
      let Y = (Lt = T.filter((N) => N.overflows[0] <= 0).sort((N, S) => N.overflows[1] - S.overflows[1])[0]) == null ? void 0 : Lt.placement;
      if (!Y) switch (u) {
        case "bestFit": {
          var Tt;
          const N = (Tt = T.filter((S) => {
            if (R) {
              const _ = k(S.placement);
              return _ === v || _ === "y";
            }
            return true;
          }).map((S) => [S.placement, S.overflows.filter((_) => _ > 0).reduce((_, Gt) => _ + Gt, 0)]).sort((S, _) => S[1] - _[1])[0]) == null ? void 0 : Tt[0];
          N && (Y = N);
          break;
        }
        case "initialPlacement":
          Y = l;
          break;
      }
      if (i !== Y) return { reset: { placement: Y } };
    }
    return {};
  } };
}, Ae = /* @__PURE__ */ new Set(["left", "top"]);
async function Se(t, e) {
  const { placement: n, platform: o, elements: i } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = H(n), l = ot(n), c = k(n) === "y", a = Ae.has(s) ? -1 : 1, f = r && c ? -1 : 1, d = nt(e, t);
  let { mainAxis: m, crossAxis: u, alignmentAxis: h } = typeof d == "number" ? { mainAxis: d, crossAxis: 0, alignmentAxis: null } : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
  return l && typeof h == "number" && (u = l === "end" ? h * -1 : h), c ? { x: u * f, y: m * a } : { x: m * a, y: u * f };
}
const Le = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    var n, o;
    const { x: i, y: r, placement: s, middlewareData: l } = e, c = await Se(e, t);
    return s === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : { x: i + c.x, y: r + c.y, data: { ...c, placement: s } };
  } };
}, Te = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: o, placement: i, platform: r } = e, { mainAxis: s = true, crossAxis: l = false, limiter: c = { fn: (v) => {
      let { x: y, y: x } = v;
      return { x: y, y: x };
    } }, ...a } = nt(t, e), f = { x: n, y: o }, d = await r.detectOverflow(e, a), m = k(i), u = $t(m);
    let h = f[u], p = f[m];
    const w = (v, y) => me(y + d[v === "y" ? "top" : "left"], y, y - d[v === "y" ? "bottom" : "right"]);
    s && (h = w(u, h)), l && (p = w(m, p));
    const g = c.fn({ ...e, [u]: h, [m]: p });
    return { ...g, data: { x: g.x - n, y: g.y - o, enabled: { [u]: s, [m]: l } } };
  } };
}, De = function(t) {
  return t === void 0 && (t = {}), { name: "size", options: t, async fn(e) {
    const { placement: n, rects: o, platform: i, elements: r } = e, { apply: s = () => {
    }, ...l } = nt(t, e), c = await i.detectOverflow(e, l), a = H(n), f = ot(n), d = k(n) === "y", { width: m, height: u } = o.floating;
    let h, p;
    a === "top" || a === "bottom" ? (h = a, p = f === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (p = a, h = f === "end" ? "top" : "bottom");
    const w = u - c.top - c.bottom, g = m - c.left - c.right, v = q(u - c[h], w), y = q(m - c[p], g), x = e.middlewareData.shift, O = !x;
    let R = v, b = y;
    x != null && x.enabled.x && (b = g), x != null && x.enabled.y && (R = w), O && !f && (d ? b = m - 2 * M(c.left, c.right) : R = u - 2 * M(c.top, c.bottom)), await s({ ...e, availableWidth: b, availableHeight: R });
    const C = await i.getDimensions(r.floating);
    return m !== C.width || u !== C.height ? { reset: { rects: true } } : {};
  } };
};
function ct() {
  return typeof window < "u";
}
function K(t) {
  return Rt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function E(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function F(t) {
  var e;
  return (e = (Rt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Rt(t) {
  return ct() ? t instanceof Node || t instanceof E(t).Node : false;
}
function D(t) {
  return ct() ? t instanceof Element || t instanceof E(t).Element : false;
}
function W(t) {
  return ct() ? t instanceof HTMLElement || t instanceof E(t).HTMLElement : false;
}
function Mt(t) {
  return !ct() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof E(t).ShadowRoot;
}
function at(t) {
  const { overflow: e, overflowX: n, overflowY: o, display: i } = P(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && i !== "inline" && i !== "contents";
}
function Pe(t) {
  return /^(table|td|th)$/.test(K(t));
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
const ke = /transform|translate|scale|rotate|perspective|filter/, Me = /paint|layout|strict|content/, B = (t) => !!t && t !== "none";
let ht;
function Ct(t) {
  const e = D(t) ? P(t) : t;
  return B(e.transform) || B(e.translate) || B(e.scale) || B(e.rotate) || B(e.perspective) || !Ot() && (B(e.backdropFilter) || B(e.filter)) || ke.test(e.willChange || "") || Me.test(e.contain || "");
}
function Ve(t) {
  let e = I(t);
  for (; W(e) && !tt(e); ) {
    if (Ct(e)) return e;
    if (ft(e)) return null;
    e = I(e);
  }
  return null;
}
function Ot() {
  return ht == null && (ht = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), ht;
}
function tt(t) {
  return /^(html|body|#document)$/.test(K(t));
}
function P(t) {
  return E(t).getComputedStyle(t);
}
function ut(t) {
  return D(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function I(t) {
  if (K(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || Mt(t) && t.host || F(t);
  return Mt(e) ? e.host : e;
}
function Ht(t) {
  const e = I(t);
  return tt(e) ? (t.ownerDocument || t).body : W(e) && at(e) ? e : Ht(e);
}
function et(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = true);
  const i = Ht(t), r = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = E(i);
  if (r) {
    const l = yt(s);
    return e.concat(s, s.visualViewport || [], at(i) ? i : [], l && n ? et(l) : []);
  } else return e.concat(i, et(i, [], n));
}
function yt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function It(t) {
  const e = P(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = W(t), r = i ? t.offsetWidth : n, s = i ? t.offsetHeight : o, l = rt(n) !== r || rt(o) !== s;
  return l && (n = r, o = s), { width: n, height: o, $: l };
}
function Et(t) {
  return D(t) ? t : t.contextElement;
}
function j(t) {
  const e = Et(t);
  if (!W(e)) return V(1);
  const n = e.getBoundingClientRect(), { width: o, height: i, $: r } = It(e);
  let s = (r ? rt(n.width) : n.width) / o, l = (r ? rt(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: s, y: l };
}
const Fe = V(0);
function zt(t) {
  const e = E(t);
  return !Ot() || !e.visualViewport ? Fe : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function _e(t, e, n) {
  return e === void 0 && (e = false), !!n && e && n === E(t);
}
function z(t, e, n, o) {
  e === void 0 && (e = false), n === void 0 && (n = false);
  const i = t.getBoundingClientRect(), r = Et(t);
  let s = V(1);
  e && (o ? D(o) && (s = j(o)) : s = j(t));
  const l = _e(r, n, o) ? zt(r) : V(0);
  let c = (i.left + l.x) / s.x, a = (i.top + l.y) / s.y, f = i.width / s.x, d = i.height / s.y;
  if (r && o) {
    const m = E(r), u = D(o) ? E(o) : o;
    let h = m, p = yt(h);
    for (; p && u !== h; ) {
      const w = j(p), g = p.getBoundingClientRect(), v = P(p), y = g.left + (p.clientLeft + parseFloat(v.paddingLeft)) * w.x, x = g.top + (p.clientTop + parseFloat(v.paddingTop)) * w.y;
      c *= w.x, a *= w.y, f *= w.x, d *= w.y, c += y, a += x, h = E(p), p = yt(h);
    }
  }
  return lt({ width: f, height: d, x: c, y: a });
}
function dt(t, e) {
  const n = ut(t).scrollLeft;
  return e ? e.left + n : z(F(t)).left + n;
}
function Kt(t, e) {
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - dt(t, n), i = n.top + e.scrollTop;
  return { x: o, y: i };
}
function We(t) {
  let { elements: e, rect: n, offsetParent: o, strategy: i } = t;
  const r = i === "fixed", s = F(o), l = e ? ft(e.floating) : false;
  if (o === s || l && r) return n;
  let c = { scrollLeft: 0, scrollTop: 0 }, a = V(1);
  const f = V(0), d = W(o);
  if ((d || !r) && ((K(o) !== "body" || at(s)) && (c = ut(o)), d)) {
    const u = z(o);
    a = j(o), f.x = u.x + o.clientLeft, f.y = u.y + o.clientTop;
  }
  const m = s && !d && !r ? Kt(s, c) : V(0);
  return { width: n.width * a.x, height: n.height * a.y, x: n.x * a.x - c.scrollLeft * a.x + f.x + m.x, y: n.y * a.y - c.scrollTop * a.y + f.y + m.y };
}
function $e(t) {
  return t.getClientRects ? Array.from(t.getClientRects()) : [];
}
function Ne(t) {
  const e = ut(t), n = t.ownerDocument.body, o = M(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = M(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -e.scrollLeft + dt(t);
  const s = -e.scrollTop;
  return P(n).direction === "rtl" && (r += M(t.clientWidth, n.clientWidth) - o), { width: o, height: i, x: r, y: s };
}
const Be = 25;
function He(t, e, n) {
  n === void 0 && (n = "viewport");
  const o = n === "layoutViewport", i = E(t), r = F(t), s = i.visualViewport;
  let l = r.clientWidth, c = r.clientHeight, a = 0, f = 0;
  if (s) {
    const m = !Ot() || e === "fixed";
    o ? m || (a = -s.offsetLeft, f = -s.offsetTop) : (l = s.width, c = s.height, m && (a = s.offsetLeft, f = s.offsetTop));
  }
  if (dt(r) <= 0) {
    const m = r.ownerDocument, u = m.body, h = getComputedStyle(u), p = m.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, w = Math.abs(r.clientWidth - u.clientWidth - p), g = getComputedStyle(r).scrollbarGutter === "stable both-edges" ? w / 2 : w;
    g <= Be && (l -= g);
  }
  return { width: l, height: c, x: a, y: f };
}
function Ie(t, e) {
  const n = z(t, true, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = j(t), s = t.clientWidth * r.x, l = t.clientHeight * r.y, c = i * r.x, a = o * r.y;
  return { width: s, height: l, x: c, y: a };
}
function Vt(t, e, n) {
  let o;
  if (e === "viewport" || e === "layoutViewport") o = He(t, n, e);
  else if (e === "document") o = Ne(F(t));
  else if (D(e)) o = Ie(e, n);
  else {
    const i = zt(t);
    o = { x: e.x - i.x, y: e.y - i.y, width: e.width, height: e.height };
  }
  return lt(o);
}
function ze(t, e) {
  const n = e.get(t);
  if (n) return n;
  let o = et(t, [], false).filter((l) => D(l) && K(l) !== "body"), i = null;
  const r = P(t).position === "fixed";
  let s = r ? I(t) : t;
  for (; D(s) && !tt(s); ) {
    const l = P(s), c = Ct(s), a = i ? i.position : r ? "fixed" : "";
    !c && (a === "fixed" || a === "absolute" && l.position === "static") ? o = o.filter((d) => d !== s) : i = l, s = I(s);
  }
  return e.set(t, o), o;
}
function Ke(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: i } = t;
  const s = [...n === "clippingAncestors" ? ft(e) ? [] : ze(e, this._c) : [].concat(n), o], l = Vt(e, s[0], i);
  let c = l.top, a = l.right, f = l.bottom, d = l.left;
  for (let m = 1; m < s.length; m++) {
    const u = Vt(e, s[m], i);
    c = M(u.top, c), a = q(u.right, a), f = q(u.bottom, f), d = M(u.left, d);
  }
  return { width: a - d, height: f - c, x: d, y: c };
}
function Xe(t) {
  const { width: e, height: n } = It(t);
  return { width: e, height: n };
}
function je(t, e, n) {
  const o = W(e), i = F(e), r = n === "fixed", s = z(t, true, r, e);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = V(0);
  if ((o || !r) && ((K(e) !== "body" || at(i)) && (l = ut(e)), o)) {
    const m = z(e, true, r, e);
    c.x = m.x + e.clientLeft, c.y = m.y + e.clientTop;
  }
  !o && i && (c.x = dt(i));
  const a = i && !o && !r ? Kt(i, l) : V(0), f = s.left + l.scrollLeft - c.x - a.x, d = s.top + l.scrollTop - c.y - a.y;
  return { x: f, y: d, width: s.width, height: s.height };
}
function pt(t) {
  return P(t).position === "static";
}
function Ft(t, e) {
  if (!W(t) || P(t).position === "fixed") return null;
  if (e) return e(t);
  let n = t.offsetParent;
  return F(t) === n && (n = n.ownerDocument.body), n;
}
function Xt(t, e) {
  const n = E(t);
  if (ft(t)) return n;
  if (!W(t)) {
    let i = I(t);
    for (; i && !tt(i); ) {
      if (D(i) && !pt(i)) return i;
      i = I(i);
    }
    return n;
  }
  let o = Ft(t, e);
  for (; o && Pe(o) && pt(o); ) o = Ft(o, e);
  return o && tt(o) && pt(o) && !Ct(o) ? n : o || Ve(t) || n;
}
const qe = async function(t) {
  const e = this.getOffsetParent || Xt, n = this.getDimensions, o = await n(t.floating);
  return { reference: je(t.reference, await e(t.floating), t.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
};
function Ye(t) {
  return P(t).direction === "rtl";
}
const Ge = { convertOffsetParentRelativeRectToViewportRelativeRect: We, getDocumentElement: F, getClippingRect: Ke, getOffsetParent: Xt, getElementRects: qe, getClientRects: $e, getDimensions: Xe, getScale: j, isElement: D, isRTL: Ye };
function jt(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Ue(t, e, n) {
  let o = null, i;
  const r = F(t);
  function s() {
    var f;
    clearTimeout(i), (f = o) == null || f.disconnect(), o = null;
  }
  function l(f, d) {
    f === void 0 && (f = false), d === void 0 && (d = 1), s();
    const m = t.getBoundingClientRect(), { left: u, top: h, width: p, height: w } = m;
    if (f || e(), !p || !w) return;
    const g = it(h), v = it(r.clientWidth - (u + p)), y = it(r.clientHeight - (h + w)), x = it(u), R = { rootMargin: -g + "px " + -v + "px " + -y + "px " + -x + "px", threshold: M(0, q(1, d)) || 1 };
    let b = true;
    function C(L) {
      const T = L[0].intersectionRatio;
      if (!jt(m, t.getBoundingClientRect())) return l();
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
function on(t, e, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: i = true, ancestorResize: r = true, elementResize: s = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: c = false } = o, a = Et(t), f = i || r ? [...a ? et(a) : [], ...e ? et(e) : []] : [];
  f.forEach((g) => {
    i && g.addEventListener("scroll", n), r && g.addEventListener("resize", n);
  });
  const d = a && l ? Ue(a, n, r) : null;
  let m = -1, u = null;
  s && (u = new ResizeObserver((g) => {
    let [v] = g;
    v && v.target === a && u && e && (u.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var y;
      (y = u) == null || y.observe(e);
    })), n();
  }), a && !c && u.observe(a), e && u.observe(e));
  let h, p = c ? z(t) : null;
  c && w();
  function w() {
    const g = z(t);
    p && !jt(p, g) && n(), p = g, h = requestAnimationFrame(w);
  }
  return n(), () => {
    var g;
    f.forEach((v) => {
      i && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), d?.(), (g = u) == null || g.disconnect(), u = null, c && cancelAnimationFrame(h);
  };
}
const rn = Le, sn = Te, ln = Ee, cn = De, Je = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = n ?? {}, r = { ...Ge, ...i.platform, _c: o };
  return Oe(t, e, { ...i, platform: r });
};
function Qe(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function _t(t) {
  if (Qe(t)) {
    const e = t.$el;
    return Rt(e) && K(e) === "#comment" ? null : e;
  }
  return t;
}
function qt(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wt(t, e) {
  const n = qt(t);
  return Math.round(e * n) / n;
}
function an(t, e, n) {
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
  }), a = A(() => _t(t.value)), f = A(() => _t(e.value)), d = G(0), m = G(0), u = G(l.value), h = G(s.value), p = Ut({}), w = G(false), g = A(() => {
    const b = { position: u.value, left: "0", top: "0" };
    if (!f.value) return b;
    const C = Wt(f.value, d.value), L = Wt(f.value, m.value);
    return c.value ? { ...b, transform: "translate(" + C + "px, " + L + "px)", ...qt(f.value) >= 1.5 && { willChange: "transform" } } : { position: u.value, left: C + "px", top: L + "px" };
  });
  let v;
  function y() {
    if (a.value == null || f.value == null) return;
    const b = i.value;
    Je(a.value, f.value, { middleware: r.value, placement: s.value, strategy: l.value }).then((C) => {
      d.value = C.x, m.value = C.y, u.value = C.strategy, h.value = C.placement, p.value = C.middlewareData, w.value = b !== false;
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
  return Q([r, s, l, i], y, { flush: "sync" }), Q([a, f], O, { flush: "sync" }), Q(i, R, { flush: "sync" }), Jt() && Qt(x), { x: X(d), y: X(m), strategy: X(u), placement: X(h), middlewareData: X(p), isPositioned: X(w), floatingStyles: g, update: y };
}
const At = (t) => t instanceof Element ? t : t?.$el instanceof HTMLElement ? t.$el : t?.$parent ? At(t.$parent) : document.body, Ze = () => {
  const t = te(), e = ce(() => {
  }, () => {
    if (t?.proxy) return At(t.proxy);
  });
  return Zt(e.trigger), e;
}, xt = /* @__PURE__ */ Symbol("childrenStackKey"), fn = () => {
  const t = ee(/* @__PURE__ */ new Set()), e = Z(xt, void 0), n = e ? Z(e) : void 0, o = /* @__PURE__ */ Symbol("childrenStackKey");
  return wt(xt, o), wt(o, { add: (l) => {
    t.add(l), n?.add(l);
  }, remove: (l) => {
    t.delete(l), n?.remove(l);
  } }), { childStack: t };
}, J = ne(/* @__PURE__ */ new Map()), tn = (t) => {
  const e = A(() => fe(t)), n = Z(xt, void 0), o = n ? Z(n, void 0) : void 0;
  Q(e, (r, s) => {
    s && (o?.remove(s), J.delete(s)), r && o?.add(r);
  }, { immediate: true });
  const i = Ze();
  Q([e, i], ([r, s], [l]) => {
    l && J.delete(l), r && s && J.set(r, s);
  }, { immediate: true }), ae(() => {
    e.value && (o?.remove(e.value), J.delete(e.value));
  });
}, un = oe({ __name: "TeleportContainer", props: { to: {}, container: {}, defer: { type: Boolean }, disabled: { type: Boolean } }, setup(t) {
  const e = t;
  return tn(A(() => e.container)), (n, o) => (ie(), re(se, { to: t.to, defer: t.defer, disabled: t.disabled }, [le(n.$slots, "default")], 8, ["to", "defer", "disabled"]));
} }), bt = (t, e) => {
  if (t instanceof Element) {
    const o = J.get(t);
    if (o && o.matches(e)) return o;
    const i = t.parentElement;
    return i ? i.matches(e) ? i : bt(i, e) : document.body;
  }
  const n = t.$parent;
  if (n) {
    const o = At(n);
    return o.matches(e) ? o : bt(n, e);
  }
  return document.body;
}, Yt = /* @__PURE__ */ Symbol("overlay-container"), gt = (t) => {
  wt(Yt, A(() => t.value));
}, dn = () => {
  const t = ue(), e = A(() => {
    const o = t.value;
    return o ? bt(o, "[data-v-app]") : document.body;
  }), n = Z(Yt, e);
  return A(() => n.value ?? e.value);
};
gt.__docgenInfo = Object.assign({ displayName: gt.name ?? gt.__name }, { exportName: "provideOverlayContainer", displayName: "provideOverlayContainer", type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "HTMLElement | SVGElement | null | undefined", schema: "HTMLElement | SVGElement | null | undefined", declarations: [] }, { name: "__@RefSymbol@301", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", schema: "true", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Overlay/useOverlay.ts" });
export {
  un as _,
  an as a,
  on as b,
  cn as c,
  fn as d,
  ln as f,
  rn as o,
  sn as s,
  dn as u
};
