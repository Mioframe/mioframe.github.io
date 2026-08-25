import { r as G, C as J, N as j, y as S, D as Yt, a4 as qt, _ as Kt, M as Y, d as Mt, o as Vt, p as Ut, a5 as Gt, h as Jt, W as Qt, B as Zt, c as te, s as ee, t as ne, i as oe } from "./iframe-BJYCZudG.js";
import { e as ie, f as se } from "./main-BjvkPK65.js";
import { c as re, t as le, e as dt } from "./index-DUoaPvWU.js";
import { _ as ce } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const K = Math.min, M = Math.max, ot = Math.round, nt = Math.floor, V = (t) => ({ x: t, y: t }), ae = { left: "right", right: "left", bottom: "top", top: "bottom" };
function fe(t, e, n) {
  return M(t, K(e, n));
}
function tt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function z(t) {
  return t.split("-")[0];
}
function et(t) {
  return t.split("-")[1];
}
function Ft(t) {
  return t === "x" ? "y" : "x";
}
function kt(t) {
  return t === "y" ? "height" : "width";
}
function P(t) {
  const e = t[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function Wt(t) {
  return Ft(P(t));
}
function ue(t, e, n) {
  n === void 0 && (n = false);
  const o = et(t), i = Wt(t), s = kt(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = it(r)), [r, it(r)];
}
function de(t) {
  const e = it(t);
  return [gt(t), e, gt(e)];
}
function gt(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
const Ot = ["left", "right"], Et = ["right", "left"], me = ["top", "bottom"], he = ["bottom", "top"];
function ge(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Et : Ot : e ? Ot : Et;
    case "left":
    case "right":
      return e ? me : he;
    default:
      return [];
  }
}
function pe(t, e, n, o) {
  const i = et(t);
  let s = ge(z(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(gt)))), s;
}
function it(t) {
  const e = z(t);
  return ae[e] + t.slice(e.length);
}
function we(t) {
  var e, n, o, i;
  return { top: (e = t.top) != null ? e : 0, right: (n = t.right) != null ? n : 0, bottom: (o = t.bottom) != null ? o : 0, left: (i = t.left) != null ? i : 0 };
}
function ve(t) {
  return typeof t != "number" ? we(t) : { top: t, right: t, bottom: t, left: t };
}
function st(t) {
  const { x: e, y: n, width: o, height: i } = t;
  return { width: o, height: i, top: n, left: e, right: e + o, bottom: n + i, x: e, y: n };
}
function At(t, e, n) {
  let { reference: o, floating: i } = t;
  const s = P(e), r = Wt(e), l = kt(r), c = z(e), a = s === "y", f = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, d = o[l] / 2 - i[l] / 2;
  let m;
  switch (c) {
    case "top":
      m = { x: f, y: o.y - i.height };
      break;
    case "bottom":
      m = { x: f, y: o.y + o.height };
      break;
    case "right":
      m = { x: o.x + o.width, y: u };
      break;
    case "left":
      m = { x: o.x - i.width, y: u };
      break;
    default:
      m = { x: o.x, y: o.y };
  }
  const h = et(e);
  return h && (m[r] += d * (h === "end" ? 1 : -1) * (n && a ? -1 : 1)), m;
}
async function ye(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: o, y: i, platform: s, rects: r, elements: l, strategy: c } = t, { boundary: a = "clippingAncestors", rootBoundary: f = "viewport", elementContext: u = "floating", altBoundary: d = false, padding: m = 0 } = tt(e, t), h = ve(m), w = l[d ? u === "floating" ? "reference" : "floating" : u], g = st(await s.getClippingRect({ element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)), boundary: a, rootBoundary: f, strategy: c })), v = u === "floating" ? { x: o, y: i, width: r.floating.width, height: r.floating.height } : r.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), x = await (s.isElement == null ? void 0 : s.isElement(y)) && await (s.getScale == null ? void 0 : s.getScale(y)) || { x: 1, y: 1 }, O = st(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: v, offsetParent: y, strategy: c }) : v);
  return { top: (g.top - O.top + h.top) / x.y, bottom: (O.bottom - g.bottom + h.bottom) / x.y, left: (g.left - O.left + h.left) / x.x, right: (O.right - g.right + h.right) / x.x };
}
const xe = 50, be = async (t, e, n) => {
  const { placement: o = "bottom", strategy: i = "absolute", middleware: s = [], platform: r } = n, l = r.detectOverflow ? r : { ...r, detectOverflow: ye }, c = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let a = await r.getElementRects({ reference: t, floating: e, strategy: i }), { x: f, y: u } = At(a, o, c), d = o, m = 0;
  const h = {};
  for (let p = 0; p < s.length; p++) {
    const w = s[p];
    if (!w) continue;
    const { name: g, fn: v } = w, { x: y, y: x, data: O, reset: R } = await v({ x: f, y: u, initialPlacement: o, placement: d, strategy: i, middlewareData: h, rects: a, platform: l, elements: { reference: t, floating: e } });
    f = y ?? f, u = x ?? u, h[g] = { ...h[g], ...O }, R && m < xe && (m++, typeof R == "object" && (R.placement && (d = R.placement), R.rects && (a = R.rects === true ? await r.getElementRects({ reference: t, floating: e, strategy: i }) : R.rects), { x: f, y: u } = At(a, d, c)), p = -1);
  }
  return { x: f, y: u, placement: d, strategy: i, middlewareData: h };
}, Re = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n, o;
    const { placement: i, middlewareData: s, rects: r, initialPlacement: l, platform: c, elements: a } = e, { mainAxis: f = true, crossAxis: u = true, fallbackPlacements: d, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: h = "none", flipAlignment: p = true, ...w } = tt(t, e);
    if ((n = s.arrow) != null && n.alignmentOffset) return {};
    const g = z(i), v = P(l), y = z(l) === l, x = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), O = d || (y || !p ? [it(l)] : de(l)), R = h !== "none";
    !d && R && O.push(...pe(l, p, h, x));
    const b = [l, ...O], C = await c.detectOverflow(e, w), L = [];
    let T = ((o = s.flip) == null ? void 0 : o.overflows) || [];
    if (f && L.push(C[g]), u) {
      const $ = ue(i, r, x);
      L.push(C[$[0]], C[$[1]]);
    }
    if (T = [...T, { placement: i, overflows: L }], !L.every(($) => $ <= 0)) {
      var bt, Rt;
      const $ = (((bt = s.flip) == null ? void 0 : bt.index) || 0) + 1, ut = b[$];
      if (ut && (!(u === "alignment" ? v !== P(ut) : false) || T.every((A) => P(A.placement) === v ? A.overflows[0] > 0 : true))) return { data: { index: $, overflows: T }, reset: { placement: ut } };
      let U = (Rt = T.filter((B) => B.overflows[0] <= 0).sort((B, A) => B.overflows[1] - A.overflows[1])[0]) == null ? void 0 : Rt.placement;
      if (!U) switch (m) {
        case "bestFit": {
          var Ct;
          const B = (Ct = T.filter((A) => {
            if (R) {
              const k = P(A.placement);
              return k === v || k === "y";
            }
            return true;
          }).map((A) => [A.placement, A.overflows.filter((k) => k > 0).reduce((k, jt) => k + jt, 0)]).sort((A, k) => A[1] - k[1])[0]) == null ? void 0 : Ct[0];
          B && (U = B);
          break;
        }
        case "initialPlacement":
          U = l;
          break;
      }
      if (i !== U) return { reset: { placement: U } };
    }
    return {};
  } };
}, Ce = /* @__PURE__ */ new Set(["left", "top"]);
async function Oe(t, e) {
  const { placement: n, platform: o, elements: i } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = z(n), l = et(n), c = P(n) === "y", a = Ce.has(r) ? -1 : 1, f = s && c ? -1 : 1, u = tt(e, t);
  let { mainAxis: d, crossAxis: m, alignmentAxis: h } = typeof u == "number" ? { mainAxis: u, crossAxis: 0, alignmentAxis: null } : { mainAxis: u.mainAxis || 0, crossAxis: u.crossAxis || 0, alignmentAxis: u.alignmentAxis };
  return l && typeof h == "number" && (m = l === "end" ? h * -1 : h), c ? { x: m * f, y: d * a } : { x: d * a, y: m * f };
}
const Ee = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    var n, o;
    const { x: i, y: s, placement: r, middlewareData: l } = e, c = await Oe(e, t);
    return r === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : { x: i + c.x, y: s + c.y, data: { ...c, placement: r } };
  } };
}, Ae = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: o, placement: i, platform: s } = e, { mainAxis: r = true, crossAxis: l = false, limiter: c = { fn: (v) => {
      let { x: y, y: x } = v;
      return { x: y, y: x };
    } }, ...a } = tt(t, e), f = { x: n, y: o }, u = await s.detectOverflow(e, a), d = P(i), m = Ft(d);
    let h = f[m], p = f[d];
    const w = (v, y) => fe(y + u[v === "y" ? "top" : "left"], y, y - u[v === "y" ? "bottom" : "right"]);
    r && (h = w(m, h)), l && (p = w(d, p));
    const g = c.fn({ ...e, [m]: h, [d]: p });
    return { ...g, data: { x: g.x - n, y: g.y - o, enabled: { [m]: r, [d]: l } } };
  } };
}, Se = function(t) {
  return t === void 0 && (t = {}), { name: "size", options: t, async fn(e) {
    const { placement: n, rects: o, platform: i, elements: s } = e, { apply: r = () => {
    }, ...l } = tt(t, e), c = await i.detectOverflow(e, l), a = z(n), f = et(n), u = P(n) === "y", { width: d, height: m } = o.floating;
    let h, p;
    a === "top" || a === "bottom" ? (h = a, p = f === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (p = a, h = f === "end" ? "top" : "bottom");
    const w = m - c.top - c.bottom, g = d - c.left - c.right, v = K(m - c[h], w), y = K(d - c[p], g), x = e.middlewareData.shift, O = !x;
    let R = v, b = y;
    x != null && x.enabled.x && (b = g), x != null && x.enabled.y && (R = w), O && !f && (u ? b = d - 2 * M(c.left, c.right) : R = m - 2 * M(c.top, c.bottom)), await r({ ...e, availableWidth: b, availableHeight: R });
    const C = await i.getDimensions(s.floating);
    return d !== C.width || m !== C.height ? { reset: { rects: true } } : {};
  } };
};
function rt() {
  return typeof window < "u";
}
function X(t) {
  return wt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function E(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function F(t) {
  var e;
  return (e = (wt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function wt(t) {
  return rt() ? t instanceof Node || t instanceof E(t).Node : false;
}
function D(t) {
  return rt() ? t instanceof Element || t instanceof E(t).Element : false;
}
function W(t) {
  return rt() ? t instanceof HTMLElement || t instanceof E(t).HTMLElement : false;
}
function St(t) {
  return !rt() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof E(t).ShadowRoot;
}
function lt(t) {
  const { overflow: e, overflowX: n, overflowY: o, display: i } = _(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && i !== "inline" && i !== "contents";
}
function Le(t) {
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
const Te = /transform|translate|scale|rotate|perspective|filter/, De = /paint|layout|strict|content/, N = (t) => !!t && t !== "none";
let mt;
function vt(t) {
  const e = D(t) ? _(t) : t;
  return N(e.transform) || N(e.translate) || N(e.scale) || N(e.rotate) || N(e.perspective) || !yt() && (N(e.backdropFilter) || N(e.filter)) || Te.test(e.willChange || "") || De.test(e.contain || "");
}
function _e(t) {
  let e = H(t);
  for (; W(e) && !Q(e); ) {
    if (vt(e)) return e;
    if (ct(e)) return null;
    e = H(e);
  }
  return null;
}
function yt() {
  return mt == null && (mt = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), mt;
}
function Q(t) {
  return /^(html|body|#document)$/.test(X(t));
}
function _(t) {
  return E(t).getComputedStyle(t);
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
  return Q(e) ? (t.ownerDocument || t).body : W(e) && lt(e) ? e : $t(e);
}
function Z(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = true);
  const i = $t(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = E(i);
  if (s) {
    const l = pt(r);
    return e.concat(r, r.visualViewport || [], lt(i) ? i : [], l && n ? Z(l) : []);
  } else return e.concat(i, Z(i, [], n));
}
function pt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Bt(t) {
  const e = _(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = W(t), s = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, l = ot(n) !== s || ot(o) !== r;
  return l && (n = s, o = r), { width: n, height: o, $: l };
}
function xt(t) {
  return D(t) ? t : t.contextElement;
}
function q(t) {
  const e = xt(t);
  if (!W(e)) return V(1);
  const n = e.getBoundingClientRect(), { width: o, height: i, $: s } = Bt(e);
  let r = (s ? ot(n.width) : n.width) / o, l = (s ? ot(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: r, y: l };
}
const Pe = V(0);
function Nt(t) {
  const e = E(t);
  return !yt() || !e.visualViewport ? Pe : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function Me(t, e, n) {
  return e === void 0 && (e = false), !!n && e && n === E(t);
}
function I(t, e, n, o) {
  e === void 0 && (e = false), n === void 0 && (n = false);
  const i = t.getBoundingClientRect(), s = xt(t);
  let r = V(1);
  e && (o ? D(o) && (r = q(o)) : r = q(t));
  const l = Me(s, n, o) ? Nt(s) : V(0);
  let c = (i.left + l.x) / r.x, a = (i.top + l.y) / r.y, f = i.width / r.x, u = i.height / r.y;
  if (s && o) {
    const d = E(s), m = D(o) ? E(o) : o;
    let h = d, p = pt(h);
    for (; p && m !== h; ) {
      const w = q(p), g = p.getBoundingClientRect(), v = _(p), y = g.left + (p.clientLeft + parseFloat(v.paddingLeft)) * w.x, x = g.top + (p.clientTop + parseFloat(v.paddingTop)) * w.y;
      c *= w.x, a *= w.y, f *= w.x, u *= w.y, c += y, a += x, h = E(p), p = pt(h);
    }
  }
  return st({ width: f, height: u, x: c, y: a });
}
function ft(t, e) {
  const n = at(t).scrollLeft;
  return e ? e.left + n : I(F(t)).left + n;
}
function zt(t, e) {
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - ft(t, n), i = n.top + e.scrollTop;
  return { x: o, y: i };
}
function Ve(t) {
  let { elements: e, rect: n, offsetParent: o, strategy: i } = t;
  const s = i === "fixed", r = F(o), l = e ? ct(e.floating) : false;
  if (o === r || l && s) return n;
  let c = { scrollLeft: 0, scrollTop: 0 }, a = V(1);
  const f = V(0), u = W(o);
  if ((u || !s) && ((X(o) !== "body" || lt(r)) && (c = at(o)), u)) {
    const m = I(o);
    a = q(o), f.x = m.x + o.clientLeft, f.y = m.y + o.clientTop;
  }
  const d = r && !u && !s ? zt(r, c) : V(0);
  return { width: n.width * a.x, height: n.height * a.y, x: n.x * a.x - c.scrollLeft * a.x + f.x + d.x, y: n.y * a.y - c.scrollTop * a.y + f.y + d.y };
}
function Fe(t) {
  return t.getClientRects ? Array.from(t.getClientRects()) : [];
}
function ke(t) {
  const e = at(t), n = t.ownerDocument.body, o = M(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = M(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -e.scrollLeft + ft(t);
  const r = -e.scrollTop;
  return _(n).direction === "rtl" && (s += M(t.clientWidth, n.clientWidth) - o), { width: o, height: i, x: s, y: r };
}
const We = 25;
function $e(t, e, n) {
  n === void 0 && (n = "viewport");
  const o = n === "layoutViewport", i = E(t), s = F(t), r = i.visualViewport;
  let l = s.clientWidth, c = s.clientHeight, a = 0, f = 0;
  if (r) {
    const d = !yt() || e === "fixed";
    o ? d || (a = -r.offsetLeft, f = -r.offsetTop) : (l = r.width, c = r.height, d && (a = r.offsetLeft, f = r.offsetTop));
  }
  if (ft(s) <= 0) {
    const d = s.ownerDocument, m = d.body, h = getComputedStyle(m), p = d.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, w = Math.abs(s.clientWidth - m.clientWidth - p), g = getComputedStyle(s).scrollbarGutter === "stable both-edges" ? w / 2 : w;
    g <= We && (l -= g);
  }
  return { width: l, height: c, x: a, y: f };
}
function Be(t, e) {
  const n = I(t, true, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = q(t), r = t.clientWidth * s.x, l = t.clientHeight * s.y, c = i * s.x, a = o * s.y;
  return { width: r, height: l, x: c, y: a };
}
function Lt(t, e, n) {
  let o;
  if (e === "viewport" || e === "layoutViewport") o = $e(t, n, e);
  else if (e === "document") o = ke(F(t));
  else if (D(e)) o = Be(e, n);
  else {
    const i = Nt(t);
    o = { x: e.x - i.x, y: e.y - i.y, width: e.width, height: e.height };
  }
  return st(o);
}
function Ne(t, e) {
  const n = e.get(t);
  if (n) return n;
  let o = Z(t, [], false).filter((l) => D(l) && X(l) !== "body"), i = null;
  const s = _(t).position === "fixed";
  let r = s ? H(t) : t;
  for (; D(r) && !Q(r); ) {
    const l = _(r), c = vt(r), a = i ? i.position : s ? "fixed" : "";
    !c && (a === "fixed" || a === "absolute" && l.position === "static") ? o = o.filter((u) => u !== r) : i = l, r = H(r);
  }
  return e.set(t, o), o;
}
function ze(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: i } = t;
  const r = [...n === "clippingAncestors" ? ct(e) ? [] : Ne(e, this._c) : [].concat(n), o], l = Lt(e, r[0], i);
  let c = l.top, a = l.right, f = l.bottom, u = l.left;
  for (let d = 1; d < r.length; d++) {
    const m = Lt(e, r[d], i);
    c = M(m.top, c), a = K(m.right, a), f = K(m.bottom, f), u = M(m.left, u);
  }
  return { width: a - u, height: f - c, x: u, y: c };
}
function He(t) {
  const { width: e, height: n } = Bt(t);
  return { width: e, height: n };
}
function Ie(t, e, n) {
  const o = W(e), i = F(e), s = n === "fixed", r = I(t, true, s, e);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = V(0);
  if ((o || !s) && ((X(e) !== "body" || lt(i)) && (l = at(e)), o)) {
    const d = I(e, true, s, e);
    c.x = d.x + e.clientLeft, c.y = d.y + e.clientTop;
  }
  !o && i && (c.x = ft(i));
  const a = i && !o && !s ? zt(i, l) : V(0), f = r.left + l.scrollLeft - c.x - a.x, u = r.top + l.scrollTop - c.y - a.y;
  return { x: f, y: u, width: r.width, height: r.height };
}
function ht(t) {
  return _(t).position === "static";
}
function Tt(t, e) {
  if (!W(t) || _(t).position === "fixed") return null;
  if (e) return e(t);
  let n = t.offsetParent;
  return F(t) === n && (n = n.ownerDocument.body), n;
}
function Ht(t, e) {
  const n = E(t);
  if (ct(t)) return n;
  if (!W(t)) {
    let i = H(t);
    for (; i && !Q(i); ) {
      if (D(i) && !ht(i)) return i;
      i = H(i);
    }
    return n;
  }
  let o = Tt(t, e);
  for (; o && Le(o) && ht(o); ) o = Tt(o, e);
  return o && Q(o) && ht(o) && !vt(o) ? n : o || _e(t) || n;
}
const Xe = async function(t) {
  const e = this.getOffsetParent || Ht, n = this.getDimensions, o = await n(t.floating);
  return { reference: Ie(t.reference, await e(t.floating), t.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
};
function je(t) {
  return _(t).direction === "rtl";
}
const Ye = { convertOffsetParentRelativeRectToViewportRelativeRect: Ve, getDocumentElement: F, getClippingRect: ze, getOffsetParent: Ht, getElementRects: Xe, getClientRects: Fe, getDimensions: He, getScale: q, isElement: D, isRTL: je };
function It(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function qe(t, e, n) {
  let o = null, i;
  const s = F(t);
  function r() {
    var f;
    clearTimeout(i), (f = o) == null || f.disconnect(), o = null;
  }
  function l(f, u) {
    f === void 0 && (f = false), u === void 0 && (u = 1), r();
    const d = t.getBoundingClientRect(), { left: m, top: h, width: p, height: w } = d;
    if (f || e(), !p || !w) return;
    const g = nt(h), v = nt(s.clientWidth - (m + p)), y = nt(s.clientHeight - (h + w)), x = nt(m), R = { rootMargin: -g + "px " + -v + "px " + -y + "px " + -x + "px", threshold: M(0, K(1, u)) || 1 };
    let b = true;
    function C(L) {
      const T = L[0].intersectionRatio;
      if (!It(d, t.getBoundingClientRect())) return l();
      if (T !== u) {
        if (!b) return l();
        T ? l(false, T) : i = setTimeout(() => {
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
  const c = E(t), a = () => l(n);
  return c.addEventListener("resize", a), l(true), () => {
    c.removeEventListener("resize", a), r();
  };
}
function sn(t, e, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: i = true, ancestorResize: s = true, elementResize: r = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: c = false } = o, a = xt(t), f = i || s ? [...a ? Z(a) : [], ...e ? Z(e) : []] : [];
  f.forEach((g) => {
    i && g.addEventListener("scroll", n), s && g.addEventListener("resize", n);
  });
  const u = a && l ? qe(a, n, s) : null;
  let d = -1, m = null;
  r && (m = new ResizeObserver((g) => {
    let [v] = g;
    v && v.target === a && m && e && (m.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var y;
      (y = m) == null || y.observe(e);
    })), n();
  }), a && !c && m.observe(a), e && m.observe(e));
  let h, p = c ? I(t) : null;
  c && w();
  function w() {
    const g = I(t);
    p && !It(p, g) && n(), p = g, h = requestAnimationFrame(w);
  }
  return n(), () => {
    var g;
    f.forEach((v) => {
      i && v.removeEventListener("scroll", n), s && v.removeEventListener("resize", n);
    }), u?.(), (g = m) == null || g.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const rn = Ee, ln = Ae, cn = Re, an = Se, Ke = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = n ?? {}, s = { ...Ye, ...i.platform, _c: o };
  return be(t, e, { ...i, platform: s });
};
function Ue(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function Dt(t) {
  if (Ue(t)) {
    const e = t.$el;
    return wt(e) && X(e) === "#comment" ? null : e;
  }
  return t;
}
function Xt(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _t(t, e) {
  const n = Xt(t);
  return Math.round(e * n) / n;
}
function fn(t, e, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, i = S(() => {
    var b;
    return (b = Y(n.open)) != null ? b : true;
  }), s = S(() => Y(n.middleware)), r = S(() => {
    var b;
    return (b = Y(n.placement)) != null ? b : "bottom";
  }), l = S(() => {
    var b;
    return (b = Y(n.strategy)) != null ? b : "absolute";
  }), c = S(() => {
    var b;
    return (b = Y(n.transform)) != null ? b : true;
  }), a = S(() => Dt(t.value)), f = S(() => Dt(e.value)), u = G(0), d = G(0), m = G(l.value), h = G(r.value), p = Yt({}), w = G(false), g = S(() => {
    const b = { position: m.value, left: "0", top: "0" };
    if (!f.value) return b;
    const C = _t(f.value, u.value), L = _t(f.value, d.value);
    return c.value ? { ...b, transform: "translate(" + C + "px, " + L + "px)", ...Xt(f.value) >= 1.5 && { willChange: "transform" } } : { position: m.value, left: C + "px", top: L + "px" };
  });
  let v;
  function y() {
    if (a.value == null || f.value == null) return;
    const b = i.value;
    Ke(a.value, f.value, { middleware: s.value, placement: r.value, strategy: l.value }).then((C) => {
      u.value = C.x, d.value = C.y, m.value = C.strategy, h.value = C.placement, p.value = C.middlewareData, w.value = b !== false;
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
  return J([s, r, l, i], y, { flush: "sync" }), J([a, f], O, { flush: "sync" }), J(i, R, { flush: "sync" }), qt() && Kt(x), { x: j(u), y: j(d), strategy: j(m), placement: j(h), middlewareData: j(p), isPositioned: j(w), floatingStyles: g, update: y };
}
const un = Mt({ __name: "TeleportContainer", props: { to: {}, container: {}, defer: { type: Boolean }, disabled: { type: Boolean } }, setup(t) {
  const e = t;
  return ie(S(() => e.container)), (n, o) => (Vt(), Ut(Gt, { to: t.to, defer: t.defer, disabled: t.disabled }, [Jt(n.$slots, "default")], 8, ["to", "defer", "disabled"]));
} }), Ge = re(() => {
  const t = {}, e = (i) => {
    document.addEventListener(i, (s) => {
      t[i]?.toReversed().forEach((r) => {
        r(s);
      });
    }, { capture: true, passive: true });
  };
  return { add: (i, s) => {
    t[i] || (e(i), t[i] = []), t[i].push(s);
  }, remove: (i, s) => {
    if (t[i]) {
      const r = t[i].indexOf(s);
      r >= 0 && t[i].splice(r, 1);
    }
  } };
});
const dn = (t, e, n = {}) => {
  const o = ["click", "touchstart", "keydown", "visibilitychange", "wheel"], { events: i = o, ignore: s = [] } = n, { childStack: r } = se(), l = (u) => {
    const d = u.target instanceof Node ? u.target : void 0;
    if (!d) return;
    const m = Y(s).map(dt);
    [dt(t), ...m, ...r].some((g) => g && (g == d || g.contains(d))) || e(u);
  }, c = S(() => !!dt(t)), { add: a, remove: f } = Ge();
  J(c, (u) => {
    u ? i.forEach((d) => {
      a(d, l);
    }) : i.forEach((d) => {
      f(d, l);
    });
  }, { immediate: true }), le(() => {
    i.forEach((u) => {
      f(u, l);
    });
  });
}, Pt = Qt(/* @__PURE__ */ new Set()), Je = () => ({ useLoadSymbol: (e) => {
  J(e, (n) => {
    n && Pt.add(n);
  }, { immediate: true });
}, loadedSymbols: Pt }), Qe = Mt({ __name: "MDSymbol", props: { name: {} }, setup(t) {
  const e = t, { name: n } = Zt(e), { useLoadSymbol: o, loadedSymbols: i } = Je(), s = S(() => i.has(n.value));
  return o(n), (r, l) => (Vt(), te("i", { class: ee(["md-symbol material-symbols-rounded", [{ "md-symbol_not-ready": !s.value }]]), translate: "no", "aria-hidden": "true" }, ne(oe(n)), 3));
} }), mn = ce(Qe, [["__scopeId", "data-v-0159d969"]]);
export {
  mn as M,
  un as _,
  sn as a,
  rn as b,
  an as c,
  cn as f,
  dn as o,
  ln as s,
  fn as u
};
