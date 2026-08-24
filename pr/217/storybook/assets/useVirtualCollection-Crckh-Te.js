import { i as C, C as L, D as H, _ as J, y as x, $ as V, M as D } from "./iframe-BK0Et3mx.js";
function U(o, r, t) {
  const e = new Array(o);
  return new Proxy(e, { get(s, i, l) {
    if (typeof i == "string") {
      const n = i.charCodeAt(0);
      if (n >= 48 && n <= 57) {
        const h = +i;
        if (Number.isInteger(h) && h >= 0 && h < o) {
          let a = s[h];
          if (!a) {
            const m = r[h * 2];
            a = s[h] = { index: h, key: t(h), start: m, size: r[h * 2 + 1], end: m + r[h * 2 + 1], lane: 0 };
          }
          return a;
        }
      }
      if (i === "length") return o;
    }
    return Reflect.get(s, i, l);
  } });
}
function _(o, r, t) {
  let e = t.initialDeps ?? [], s, i = true;
  function l() {
    const n = o();
    return (n.length !== e.length || n.some((a, m) => e[m] !== a)) && (e = n, s = r(...n), t?.onChange && !(i && t.skipInitialOnChange) && t.onChange(s), i = false), s;
  }
  return l.updateDeps = (n) => {
    e = n;
  }, l;
}
function K(o, r) {
  if (o === void 0) throw new Error("Unexpected undefined");
  return o;
}
const q = (o, r) => Math.abs(o - r) < 1.01, $ = (o, r, t) => {
  let e;
  return Object.assign(function(...s) {
    o.clearTimeout(e), e = o.setTimeout(() => r.apply(this, s), t);
  }, { cancel: () => {
    o.clearTimeout(e);
  } });
};
let w;
const j = () => {
  if (w !== void 0) return w;
  if (typeof navigator > "u") return w = false;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return w = true;
  const o = navigator.maxTouchPoints;
  return w = navigator.platform === "MacIntel" && o !== void 0 && o > 0;
}, N = (o) => {
  const { offsetWidth: r, offsetHeight: t } = o;
  return { width: r, height: t };
}, X = (o) => o, G = (o) => {
  const r = Math.max(o.startIndex - o.overscan, 0), e = Math.min(o.endIndex + o.overscan, o.count - 1) - r + 1, s = new Array(e);
  for (let i = 0; i < e; i++) s[i] = r + i;
  return s;
}, Q = (o, r) => {
  const t = o.scrollElement;
  if (!t) return;
  const e = o.targetWindow;
  if (!e) return;
  const s = (l) => {
    const { width: n, height: h } = l;
    r({ width: Math.round(n), height: Math.round(h) });
  };
  if (s(N(t)), !e.ResizeObserver) return () => {
  };
  const i = new e.ResizeObserver((l) => {
    const n = () => {
      const h = l[0];
      if (h?.borderBoxSize) {
        const a = h.borderBoxSize[0];
        if (a) {
          s({ width: a.inlineSize, height: a.blockSize });
          return;
        }
      }
      s(N(t));
    };
    o.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(n) : n();
  });
  return i.observe(t, { box: "border-box" }), () => {
    i.unobserve(t);
  };
}, R = { passive: true }, Y = typeof window > "u" ? true : "onscrollend" in window, Z = (o, r, t) => {
  const e = o.scrollElement;
  if (!e) return;
  const s = o.targetWindow;
  if (!s) return;
  const i = o.options.useScrollendEvent && Y;
  let l = 0;
  const n = i ? null : $(s, () => r(l, false), o.options.isScrollingResetDelay), h = (S) => () => {
    l = t(e), n?.(), r(l, S);
  }, a = h(true), m = h(false);
  return e.addEventListener("scroll", a, R), i && e.addEventListener("scrollend", m, R), () => {
    e.removeEventListener("scroll", a), i && e.removeEventListener("scrollend", m), n?.cancel();
  };
}, tt = (o, r) => Z(o, r, (t) => {
  const { horizontal: e, isRtl: s } = o.options;
  return e ? t.scrollLeft * (s && -1 || 1) : t.scrollTop;
}), et = (o, r, t) => {
  if (t.options.useCachedMeasurements) {
    const e = t.indexFromElement(o), s = t.options.getItemKey(e);
    return t.itemSizeCache.get(s) ?? t.options.estimateSize(e);
  }
  if (r?.borderBoxSize) {
    const e = r.borderBoxSize[0];
    if (e) return Math.round(e[t.options.horizontal ? "inlineSize" : "blockSize"]);
  }
  if (!r) {
    const e = t.indexFromElement(o), s = t.options.getItemKey(e), i = t.itemSizeCache.get(s);
    if (i !== void 0) return i;
  }
  return o[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, st = (o, { adjustments: r = 0, behavior: t }, e) => {
  var s, i;
  (i = (s = e.scrollElement) == null ? void 0 : s.scrollTo) == null || i.call(s, { [e.options.horizontal ? "left" : "top"]: o + r, behavior: t });
}, it = st;
class nt {
  constructor(r) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = false, this.lanesSettling = false, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = false, this._iosJustTouchEnded = false, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, e, s;
      return ((s = (e = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : e.now) == null ? void 0 : s.call(e)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const e = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((i) => {
          const l = () => {
            const n = i.target, h = this.indexFromElement(n);
            if (!n.isConnected) {
              this.observer.unobserve(n);
              for (const [a, m] of this.elementsCache) if (m === n) {
                this.elementsCache.delete(a);
                break;
              }
              return;
            }
            this.isIndexInRange(h) && this.shouldMeasureDuringScroll(h) && this.resizeItem(h, this.options.measureElement(n, i, this));
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
        });
      }));
      return { disconnect: () => {
        var s;
        (s = e()) == null || s.disconnect(), t = null;
      }, observe: (s) => {
        var i;
        return (i = e()) == null ? void 0 : i.observe(s, { box: "border-box" });
      }, unobserve: (s) => {
        var i;
        return (i = e()) == null ? void 0 : i.unobserve(s);
      } };
    })(), this.range = null, this.setOptions = (t) => {
      var e, s;
      const i = { debug: false, initialOffset: 0, overscan: 1, paddingStart: 0, paddingEnd: 0, scrollPaddingStart: 0, scrollPaddingEnd: 0, horizontal: false, getItemKey: X, rangeExtractor: G, onChange: () => {
      }, measureElement: et, initialRect: { width: 0, height: 0 }, scrollMargin: 0, gap: 0, indexAttribute: "data-index", initialMeasurementsCache: [], lanes: 1, anchorTo: "start", followOnAppend: false, scrollEndThreshold: 1, isScrollingResetDelay: 150, enabled: true, isRtl: false, useScrollendEvent: false, useAnimationFrameWithResizeObserver: false, laneAssignmentMode: "estimate", useCachedMeasurements: false };
      for (const f in t) {
        const u = t[f];
        u !== void 0 && (i[f] = u);
      }
      const l = this.options;
      let n = null, h = null, a = false;
      if (l !== void 0 && l.enabled && i.enabled && i.anchorTo === "end" && this.scrollElement !== null) {
        const f = l.count, u = i.count, c = this.getMeasurements(), p = f > 0 ? ((e = c[0]) == null ? void 0 : e.key) ?? l.getItemKey(0) : null, O = f > 0 ? ((s = c[f - 1]) == null ? void 0 : s.key) ?? l.getItemKey(f - 1) : null;
        if (u !== f || f > 0 && u > 0 && (i.getItemKey(0) !== p || i.getItemKey(u - 1) !== O)) {
          a = true;
          const b = f > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? c[0] : null;
          b && (n = [b.key, this.getScrollOffset() - b.start]);
          const E = i.followOnAppend === true ? "auto" : i.followOnAppend || null;
          E && u > f && this.isAtEnd(l.scrollEndThreshold) && (f === 0 || i.getItemKey(u - 1) !== O) && (h = E);
        }
      }
      this.options = i, a && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let m = false, S = 0;
      if (n && this.scrollOffset !== null) {
        const [f, u] = n, c = this.getMeasurements(), { count: p, getItemKey: O } = this.options;
        let d = 0;
        for (; d < p && O(d) !== f; ) d++;
        if (d < p) {
          const g = c[d];
          if (g) {
            const b = Math.max(0, g.start + u);
            b !== this.scrollOffset && (S = b - this.scrollOffset, this.scrollOffset = b, m = true);
          }
        }
      }
      (m || h) && (this.pendingScrollAnchor = [m ? n[0] : null, m ? n[1] : 0, h, S]);
    }, this.notify = (t) => {
      var e, s;
      (s = (e = this.options).onChange) == null || s.call(e, this, t);
    }, this.maybeNotify = _(() => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]), (t) => {
      this.notify(t);
    }, { key: false, debug: () => this.options.debug, initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null] }), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.isScrolling = false, this.scrollDirection = null, this._iosDeferredAdjustment = 0, this._iosTouching = false, this._iosJustTouchEnded = false, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var t;
      const e = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== e) {
        if (this.cleanup(), !e) {
          this.maybeNotify();
          return;
        }
        if (this.scrollElement = e, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((i) => {
          this.observer.observe(i);
        }), this.unsubs.push(this.options.observeElementRect(this, (i) => {
          this.scrollRect = i, this.maybeNotify();
        })), this.unsubs.push(this.options.observeElementOffset(this, (i, l) => {
          if (l && this._intendedScrollOffset === null && i === this.scrollOffset) return;
          this._intendedScrollOffset !== null && Math.abs(i - this._intendedScrollOffset) < 1.5 && (i = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
          const n = this.getScrollOffset();
          this.scrollDirection = l ? n === i ? this.scrollDirection : n < i ? "forward" : "backward" : null, this.scrollOffset = i, this.isScrolling = l, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
        })), "addEventListener" in this.scrollElement) {
          const i = this.scrollElement, l = () => {
            this._iosTouching = true, this._iosJustTouchEnded = false, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, n = () => {
            this._iosTouching = false, !(!j() || this.targetWindow == null) && (this._iosJustTouchEnded = true, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = false, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          i.addEventListener("touchstart", l, R), i.addEventListener("touchend", n, R), this.unsubs.push(() => {
            i.removeEventListener("touchstart", l), i.removeEventListener("touchend", n), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 });
      }
      const s = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, s && this.scrollElement && this.options.enabled) {
        const [i, l, n, h] = s;
        i !== null && !n && (j() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? h !== 0 && (this._iosDeferredAdjustment += h) : this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 })), n && this.scrollToEnd({ behavior: n });
      }
    }, this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
      const t = this.getScrollOffset(), e = this.getMaxScrollOffset();
      if (t < 0 || t > e) return;
      if (this._iosDeferredAdjustment < 0 && t >= e - 1) {
        this._iosDeferredAdjustment = 0;
        return;
      }
      const s = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(t, { adjustments: this.scrollAdjustments += s, behavior: void 0 });
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = _(() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled, this.options.lanes, this.options.laneAssignmentMode, this.options.gap], (t, e, s, i, l, n, h, a) => (this.prevLanes !== void 0 && this.prevLanes !== n && (this.lanesChangedFlag = true), this.prevLanes = n, this.pendingMin = null, { count: t, paddingStart: e, scrollMargin: s, getItemKey: i, enabled: l, lanes: n, laneAssignmentMode: h, gap: a }), { key: false }), this.isIndexInRange = (t) => t >= 0 && t < this.options.count, this.getMeasurements = _(() => [this.getMeasurementOptions(), this.itemSizeCacheVersion], ({ count: t, paddingStart: e, scrollMargin: s, getItemKey: i, enabled: l, lanes: n, laneAssignmentMode: h, gap: a }, m) => {
      const S = this.itemSizeCache;
      if (!l) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
      if (this.laneAssignments.size > t) for (const d of this.laneAssignments.keys()) d >= t && this.laneAssignments.delete(d);
      this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((d) => {
        this.itemSizeCache.set(d.key, d.size);
      }));
      const f = this.lanesSettling ? 0 : this.pendingMin ?? 0;
      if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = false), n === 1) {
        const d = t * 2;
        let g = this._flatMeasurements;
        if (!g || g.length < d) {
          const v = new Float64Array(d);
          g && f > 0 && v.set(g.subarray(0, f * 2)), g = v, this._flatMeasurements = g;
        }
        let b;
        if (f === 0) b = e + s;
        else {
          const v = f - 1;
          b = g[v * 2] + g[v * 2 + 1] + a;
        }
        for (let v = f; v < t; v++) {
          const A = i(v), y = S.get(A), M = typeof y == "number" ? y : this.options.estimateSize(v);
          g[v * 2] = b, g[v * 2 + 1] = M, b += M + a;
        }
        const E = U(t, g, i);
        return this.measurementsCache = E, E;
      }
      const u = this.measurementsCache.slice(0, f), c = new Array(n).fill(void 0), p = new Float64Array(n);
      let O = 0;
      for (let d = 0; d < f; d++) {
        const g = u[d];
        g && (c[g.lane] === void 0 && O++, c[g.lane] = d, p[g.lane] = g.end);
      }
      for (let d = f; d < t; d++) {
        const g = i(d), b = this.laneAssignments.get(d);
        let E, v;
        const A = h === "estimate" || S.has(g);
        if (b !== void 0 && this.options.lanes > 1) {
          E = b;
          const T = c[E], I = T !== void 0 ? u[T] : void 0;
          v = I ? I.end + a : e + s;
        } else if (O === n) {
          let T = 0, I = p[0], W = c[0];
          for (let z = 1; z < n; z++) {
            const F = p[z];
            (F < I || F === I && c[z] < W) && (T = z, I = F, W = c[z]);
          }
          E = T, v = I + a, A && this.laneAssignments.set(d, E);
        } else E = d % this.options.lanes, v = e + s, A && this.laneAssignments.set(d, E);
        const y = S.get(g), M = typeof y == "number" ? y : this.options.estimateSize(d), k = v + M;
        u[d] = { index: d, start: v, size: M, end: k, key: g, lane: E }, c[E] === void 0 && O++, c[E] = d, p[E] = k;
      }
      return this.measurementsCache = u, u;
    }, { key: false, debug: () => this.options.debug }), this.calculateRange = _(() => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes], (t, e, s, i) => t.length === 0 || e === 0 ? (this.range = null, null) : (this.range = ot(t, e, s, i, i === 1 && this._flatMeasurements != null ? this._flatMeasurements : null), this.range), { key: false, debug: () => this.options.debug }), this.getVirtualIndexes = _(() => {
      let t = null, e = null;
      const s = this.calculateRange();
      return s && (t = s.startIndex, e = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, e]), [this.options.rangeExtractor, this.options.overscan, this.options.count, t, e];
    }, (t, e, s, i, l) => i === null || l === null ? [] : t({ startIndex: i, endIndex: l, overscan: e, count: s }), { key: false, debug: () => this.options.debug }), this.indexFromElement = (t) => {
      const e = this.options.indexAttribute, s = t.getAttribute(e);
      return s ? parseInt(s, 10) : (console.warn(`Missing attribute name '${e}={index}' on measured element.`), -1);
    }, this.shouldMeasureDuringScroll = (t) => {
      var e;
      if (!this.scrollState || this.scrollState.behavior !== "smooth") return true;
      const s = this.scrollState.index ?? ((e = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : e.index);
      if (s !== void 0 && this.range) {
        const i = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2)), l = Math.max(0, s - i), n = Math.min(this.options.count - 1, s + i);
        return t >= l && t <= n;
      }
      return true;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((l, n) => {
          l.isConnected || (this.observer.unobserve(l), this.elementsCache.delete(n));
        });
        return;
      }
      const e = this.indexFromElement(t);
      if (!this.isIndexInRange(e)) return;
      const s = this.options.getItemKey(e), i = this.elementsCache.get(s);
      i !== t && (i && this.observer.unobserve(i), this.observer.observe(t), this.elementsCache.set(s, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(e) && this.resizeItem(e, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, e) => {
      var s, i;
      if (!this.isIndexInRange(t)) return;
      let l, n, h;
      const a = this._flatMeasurements;
      if (this.options.lanes === 1 && a !== null) h = this.options.getItemKey(t), n = a[t * 2], l = a[t * 2 + 1];
      else {
        const f = this.measurementsCache[t];
        if (!f) return;
        h = f.key, n = f.start, l = f.size;
      }
      const m = this.itemSizeCache.get(h) ?? l, S = e - m;
      if (S !== 0) {
        const f = this.options.anchorTo === "end" && ((s = this.scrollState) == null ? void 0 : s.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, u = f ? this.getTotalSize() : 0, c = this.getScrollOffset() + this.scrollAdjustments, O = !this.itemSizeCache.has(h) ? n < c : n + m <= c && this.scrollDirection !== "backward", d = ((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[t] ?? { index: t, key: h, start: n, size: l, end: n + l, lane: 0 }, S, this) : O);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(h, e), this.itemSizeCacheVersion++;
        let g = false;
        f ? g = this.applyScrollAdjustment(this.getTotalSize() - u) : d && (g = this.applyScrollAdjustment(S)), this.notify(g);
      }
    }, this.getVirtualItems = _(() => [this.getVirtualIndexes(), this.getMeasurements()], (t, e) => {
      const s = [];
      for (let i = 0, l = t.length; i < l; i++) {
        const n = t[i], h = e[n];
        s.push(h);
      }
      return s;
    }, { key: false, debug: () => this.options.debug }), this.getVirtualItemForOffset = (t) => {
      const e = this.getMeasurements();
      if (e.length === 0) return;
      const s = this._flatMeasurements, i = this.options.lanes === 1 && s != null, l = B(0, e.length - 1, i ? (n) => s[n * 2] : (n) => K(e[n]).start, t);
      return K(e[l]);
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const t = this.scrollElement.document.documentElement;
        return this.options.horizontal ? t.scrollWidth - this.scrollElement.innerWidth : t.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getVirtualDistanceFromEnd = () => Math.max(this.getTotalSize() - this.getSize() - this.getScrollOffset(), 0), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (t = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= t, this.getOffsetForAlignment = (t, e, s = 0) => {
      if (!this.scrollElement) return 0;
      const i = this.getSize(), l = this.getScrollOffset();
      e === "auto" && (e = t >= l + i ? "end" : "start"), e === "center" ? t += (s - i) / 2 : e === "end" && (t -= i);
      const n = this.getMaxScrollOffset();
      return Math.max(Math.min(n, t), 0);
    }, this.getOffsetForIndex = (t, e = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const s = this.getSize(), i = this.getScrollOffset(), l = this.measurementsCache[t];
      if (!l) return;
      if (e === "auto") if (l.end >= i + s - this.options.scrollPaddingEnd) e = "end";
      else if (l.start <= i + this.options.scrollPaddingStart) e = "start";
      else return [i, e];
      if (e === "end" && t === this.options.count - 1) return [this.getMaxScrollOffset(), e];
      const n = e === "end" ? l.end + this.options.scrollPaddingEnd : l.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(n, e, l.size), e];
    }, this.scrollToOffset = (t, { align: e = "start", behavior: s = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const i = this.getOffsetForAlignment(t, e), l = this.now();
      this.scrollState = { index: null, align: e, behavior: s, startedAt: l, lastTargetOffset: i, stableFrames: 0 }, this._scrollToOffset(i, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (t, { align: e = "auto", behavior: s = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0, t = Math.max(0, Math.min(t, this.options.count - 1));
      const i = this.getOffsetForIndex(t, e);
      if (!i) return;
      const [l, n] = i, h = this.now();
      this.scrollState = { index: t, align: n, behavior: s, startedAt: h, lastTargetOffset: l, stableFrames: 0 }, this._scrollToOffset(l, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollBy = (t, { behavior: e = "auto" } = {}) => {
      const s = this.getScrollOffset() + t, i = this.now();
      this.scrollState = { index: null, align: "start", behavior: e, startedAt: i, lastTargetOffset: s, stableFrames: 0 }, this._scrollToOffset(s, { adjustments: void 0, behavior: e }), this.scheduleScrollReconcile();
    }, this.scrollToEnd = ({ behavior: t = "auto" } = {}) => {
      if (this.options.count > 0) {
        this.scrollToIndex(this.options.count - 1, { align: "end", behavior: t });
        return;
      }
      this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), { behavior: t });
    }, this.getTotalSize = () => {
      var t;
      const e = this.getMeasurements();
      let s;
      if (e.length === 0) s = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const i = e.length - 1, l = this._flatMeasurements;
        l != null ? s = l[i * 2] + l[i * 2 + 1] : s = ((t = e[i]) == null ? void 0 : t.end) ?? 0;
      } else {
        const i = Array(this.options.lanes).fill(null);
        let l = e.length - 1;
        for (; l >= 0 && i.some((n) => n === null); ) {
          const n = e[l];
          i[n.lane] === null && (i[n.lane] = n.end), l--;
        }
        s = Math.max(...i.filter((n) => n !== null));
      }
      return Math.max(s - this.options.scrollMargin + this.options.paddingEnd, 0);
    }, this.takeSnapshot = () => {
      const t = [];
      if (this.itemSizeCache.size === 0) return t;
      const e = this.getMeasurements();
      for (const s of e) s && this.itemSizeCache.has(s.key) && t.push({ index: s.index, key: s.key, start: s.start, size: s.size, end: s.end, lane: s.lane });
      return t;
    }, this._scrollToOffset = (t, { adjustments: e, behavior: s }) => {
      this._intendedScrollOffset = t + (e ?? 0), this.options.scrollToFn(t, { behavior: s, adjustments: e }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(false);
    }, this.setOptions(r);
  }
  applyScrollAdjustment(r, t) {
    return r === 0 ? false : j() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += r, false) : (this._scrollToOffset(this.getScrollOffset(), { adjustments: this.scrollAdjustments += r, behavior: t }), this.scrollOffset !== null && (this.scrollOffset += this.scrollAdjustments, this.scrollOffset < 0 && (this.scrollOffset = 0), this.scrollAdjustments = 0), true);
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    const e = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, s = e ? e[0] : this.scrollState.lastTargetOffset, i = 1, l = s !== this.scrollState.lastTargetOffset;
    if (!l && q(s, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= i) {
        this.getScrollOffset() !== s && this._scrollToOffset(s, { adjustments: void 0, behavior: "auto" }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, l) {
      const n = this.getSize() || 600, h = Math.abs(s - this.getScrollOffset()), a = this.scrollState.behavior === "smooth" && h > n;
      this.scrollState.lastTargetOffset = s, a || (this.scrollState.behavior = "auto"), this._scrollToOffset(s, { adjustments: void 0, behavior: a ? "smooth" : "auto" });
    }
    this.scheduleScrollReconcile();
  }
}
const B = (o, r, t, e) => {
  for (; o <= r; ) {
    const s = (o + r) / 2 | 0, i = t(s);
    if (i < e) o = s + 1;
    else if (i > e) r = s - 1;
    else return s;
  }
  return o > 0 ? o - 1 : 0;
};
function lt(o, r, t) {
  let e = 0;
  for (; e <= r; ) {
    const s = (e + r) / 2 | 0, i = o[s * 2];
    if (i < t) e = s + 1;
    else if (i > t) r = s - 1;
    else return s;
  }
  return e > 0 ? e - 1 : 0;
}
function ot(o, r, t, e, s) {
  const i = o.length - 1;
  if (o.length <= e) return { startIndex: 0, endIndex: i };
  if (e === 1 && s !== null) {
    const a = lt(s, i, t);
    let m = a;
    const S = t + r;
    for (; m < i && s[m * 2] + s[m * 2 + 1] < S; ) m++;
    return { startIndex: a, endIndex: m };
  }
  let n = B(0, i, (a) => o[a].start, t), h = n;
  if (e === 1) for (; h < i && o[h].end < t + r; ) h++;
  else if (e > 1) {
    const a = Array(e).fill(0);
    for (; h < i && a.some((S) => S < t + r); ) {
      const S = o[h];
      a[S.lane] = S.end, h++;
    }
    const m = Array(e).fill(t + r);
    for (; n >= 0 && m.some((S) => S >= t); ) {
      const S = o[n];
      m[S.lane] = S.start, n--;
    }
    n = Math.max(0, n - n % e), h = Math.min(i, h + (e - 1 - h % e));
  }
  return { startIndex: n, endIndex: h };
}
function rt(o) {
  const r = new nt(C(o)), t = H(r), e = r._didMount();
  return L(() => C(o).getScrollElement(), (s) => {
    s && r._willUpdate();
  }, { immediate: true }), L(() => C(o), (s) => {
    r.setOptions({ ...s, onChange: (i, l) => {
      var n;
      V(t), (n = s.onChange) == null || n.call(s, i, l);
    } }), r._willUpdate(), V(t);
  }, { immediate: true }), J(e), t;
}
function ht(o) {
  return rt(x(() => ({ observeElementRect: Q, observeElementOffset: tt, scrollToFn: it, ...C(o) })));
}
const P = "data-mioframe-virtual-index";
function ct(o, r) {
  const t = () => D(o), e = (u, c) => {
    if (c < 0 || c >= u.length) throw new RangeError(`useVirtualCollection: no source entry at index ${c}`);
    return u[c];
  }, s = () => D(r.surfaceOffset ?? 0), i = x(() => {
    const u = t();
    return { count: u.length, getScrollElement: () => D(r.root) ?? null, horizontal: r.axis === "horizontal", estimateSize: (c) => {
      const p = e(u, c);
      return typeof r.estimateSize == "number" ? r.estimateSize : r.estimateSize(p, c);
    }, getItemKey: (c) => r.key(e(u, c), c), ...r.overscan === void 0 ? {} : { overscan: r.overscan }, scrollMargin: s(), indexAttribute: P };
  }), l = ht(i), n = x(() => {
    const u = t(), c = s();
    return l.value.getVirtualItems().map((p) => ({ index: p.index, key: p.key, value: e(u, p.index), offset: p.start - c, size: p.size }));
  }), h = x(() => l.value.getTotalSize()), a = x(() => n.value[0]?.offset ?? 0), m = x(() => {
    const u = n.value, c = u[u.length - 1];
    return c ? Math.max(h.value - (c.offset + c.size), 0) : 0;
  });
  function S(u, c) {
    u.setAttribute(P, String(c.index)), l.value.measureElement(u);
  }
  return { items: n, totalSize: h, leadingSize: a, trailingSize: m, vItem: { mounted(u, c) {
    S(u, c.value);
  }, updated(u, c) {
    S(u, c.value);
  } } };
}
export {
  ct as u
};
