import { X as U, E as j, M as q, r as x, g as W, d as N, S as B, C as H, c as D, b as g, s as G, i as h, a as X, h as Y, v as F, G as J, T as Z, j as M, y as O, o as T, p as ee, w as te, F as oe, f as se, t as ne } from "./iframe-DXGjpGPQ.js";
import { u as ae, a as re, M as le } from "./useStateLayer-DDIxYjNA.js";
import { r as ie, u as ce, g as ue, t as de, h as pe, a as fe, b as me } from "./index-ttGw4SEv.js";
import { u as he } from "./index-Db7wP7pB.js";
import { u as ve } from "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-DFJ2T2lq.js";
import "./useOverlay-0x4FqwID.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-9bMqUcjS.js";
import { b as be, c as ye } from "./main-BGlFmGsG.js";
import "./MDIconButton-BgPw1dH-.js";
import "./useLocalSettings-CQdseWCO.js";
import { u as ge } from "./useFocusTrap-B7uJSlni.js";
import { _ as z } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDSymbol-CzLw1CZl.js";
import "./onInteractionOutside-efhT10A3.js";
const A = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || /* @__PURE__ */ (function() {
  return this;
})();
function we(t, e, { signal: s, edges: l } = {}) {
  let o, n = null;
  const i = l != null && l.includes("leading"), p = l == null || l.includes("trailing"), f = () => {
    n !== null && (t.apply(o, n), o = void 0, n = null);
  }, a = () => {
    p && f(), u();
  };
  let r = null;
  const c = () => {
    r != null && clearTimeout(r), r = setTimeout(() => {
      r = null, a();
    }, e);
  }, d = () => {
    r !== null && (clearTimeout(r), r = null);
  }, u = () => {
    d(), o = void 0, n = null;
  }, w = () => {
    f();
  }, b = function(...C) {
    if (s?.aborted) return;
    o = this, n = C;
    const E = r == null;
    c(), i && E && f();
  };
  return b.schedule = c, b.cancel = u, b.flush = w, s?.addEventListener("abort", u, { once: true }), b;
}
const _e = typeof A.DOMException < "u" ? A.DOMException : Error;
var Se = class extends _e {
  constructor(t = "The operation was aborted") {
    super(t);
  }
};
function Ee(t, { signal: e } = {}) {
  return new Promise((s, l) => {
    const o = () => {
      l(new Se());
    }, n = () => {
      clearTimeout(i), o();
    };
    if (e?.aborted) return o();
    const i = setTimeout(() => {
      e?.removeEventListener("abort", n), s();
    }, t);
    e?.addEventListener("abort", n, { once: true });
  });
}
function Te(t, e, { signal: s, edges: l = ["leading", "trailing"] } = {}) {
  let o = null;
  const n = we(function(...p) {
    o = Date.now(), t.apply(this, p);
  }, e, { signal: s, edges: l }), i = function(...p) {
    if (o == null && (o = Date.now()), Date.now() - o >= e) {
      o = Date.now(), t.apply(this, p), n.cancel(), n.schedule();
      return;
    }
    n.apply(this, p);
  };
  return i.cancel = n.cancel, i.flush = n.flush, i;
}
class xe {
  value;
  next;
  constructor(e) {
    this.value = e;
  }
}
class Ce {
  #e;
  #t;
  #o;
  constructor() {
    this.clear();
  }
  enqueue(e) {
    const s = new xe(e);
    this.#e ? (this.#t.next = s, this.#t = s) : (this.#e = s, this.#t = s), this.#o++;
  }
  dequeue() {
    const e = this.#e;
    if (e) return this.#e = this.#e.next, this.#o--, this.#e || (this.#t = void 0), e.value;
  }
  peek() {
    if (this.#e) return this.#e.value;
  }
  clear() {
    this.#e = void 0, this.#t = void 0, this.#o = 0;
  }
  get size() {
    return this.#o;
  }
  *[Symbol.iterator]() {
    let e = this.#e;
    for (; e; ) yield e.value, e = e.next;
  }
  *drain() {
    for (; this.#e; ) yield this.dequeue();
  }
}
function ke(t) {
  let e = false;
  if (typeof t == "object" && ({ concurrency: t, rejectOnClear: e = false } = t), I(t), typeof e != "boolean") throw new TypeError("Expected `rejectOnClear` to be a boolean");
  const s = new Ce();
  let l = 0;
  const o = () => {
    l < t && s.size > 0 && (l++, s.dequeue().run());
  }, n = () => {
    l--, o();
  }, i = async (a, r, c) => {
    const d = (async () => a(...c))();
    r(d);
    try {
      await d;
    } catch {
    }
    n();
  }, p = (a, r, c, d) => {
    const u = { reject: c };
    new Promise((w) => {
      u.run = w, s.enqueue(u);
    }).then(i.bind(void 0, a, r, d)), l < t && o();
  }, f = (a, ...r) => new Promise((c, d) => {
    p(a, c, d, r);
  });
  return Object.defineProperties(f, { activeCount: { get: () => l }, pendingCount: { get: () => s.size }, clearQueue: { value() {
    if (!e) {
      s.clear();
      return;
    }
    const a = AbortSignal.abort().reason;
    for (; s.size > 0; ) s.dequeue().reject(a);
  } }, concurrency: { get: () => t, set(a) {
    I(a), t = a, queueMicrotask(() => {
      for (; l < t && s.size > 0; ) o();
    });
  } }, map: { async value(a, r) {
    const c = Array.from(a, (d, u) => f(r, d, u));
    return Promise.all(c);
  } } }), f;
}
function I(t) {
  if (!((Number.isInteger(t) || t === Number.POSITIVE_INFINITY) && t > 0)) throw new TypeError("Expected `concurrency` to be a number from 1 and up");
}
const He = (t, { throttleMs: e = 1e3 / 10 } = {}) => {
  const s = x(), l = x(), o = ie(false, e * 2);
  ce(t, "scroll", Te(() => {
    o.value = true;
    const a = q(t);
    a ? (s.value = a.scrollTop, l.value = a.scrollLeft) : (s.value = void 0, l.value = void 0);
  }, e));
  const i = async ({ behavior: a = "smooth", left: r, top: c }) => {
    const d = q(t);
    if (d) {
      const u = { behavior: a };
      r !== void 0 && (u.left = r), c !== void 0 && (u.top = c), d.scrollTo(u), await Ee(e), await ue(o).toBe(false, { timeout: 1e4 });
    }
  }, p = ke(1), f = async ({ behavior: a = "smooth", left: r, top: c }) => {
    await p(async () => {
      await j(), await i({ behavior: a, left: r, top: c });
    });
  };
  return de(() => {
    o.value = false, p.clearQueue();
  }), { scrollTo: f, position: U(W({ scrollTop: s, scrollLeft: l })) };
}, Me = ["aria-hidden"], De = { class: "md-bottom-sheet__header" }, Le = ["aria-label"], Pe = N({ __name: "MDBottomSheetContainer2", props: Z({ dragHandleExpandLabel: { default: "Expand sheet" }, dragHandleCloseLabel: { default: "Close sheet" } }, { open: { type: Boolean, required: true }, openModifiers: {}, scrollPosition: {}, scrollPositionModifiers: {} }), emits: ["update:open", "update:scrollPosition"], setup(t) {
  const e = B(t, "open"), s = B(t, "scrollPosition"), l = t, o = M("containerEl"), n = () => {
    e.value = !e.value;
  }, i = M("dragHandleEl"), { hover: p, focused: f, durationPressedState: a } = ae(i);
  re(i);
  const r = M("bodyEl"), { height: c } = pe(r, { height: 0, width: 0 }, { box: "border-box" }), { position: d, scrollTo: u } = He(o, { throttleMs: 1e3 / 60 });
  H(d, ({ scrollTop: m }) => {
    s.value = m;
  }), H([e, c, r], ([m, v, y]) => {
    if (v && y) if (m) {
      const Q = Math.min(v, y.offsetTop);
      u({ top: Q });
    } else u({ top: 0 });
  }, { immediate: true });
  const w = () => {
    u({ top: 0 });
  }, b = he(), { activate: C, deactivate: E } = ge(o, { allowOutsideClick: true, preventScroll: true });
  let _;
  const k = () => {
    _ !== void 0 && (cancelAnimationFrame(_), _ = void 0);
  };
  H([e, o], async ([m]) => {
    m ? (await j(), o.value && C()) : (k(), E());
  }, { immediate: true, flush: "post" }), me(() => {
    k(), E();
  });
  const $ = (m) => {
    m.key !== "Tab" || !e.value || (k(), _ = requestAnimationFrame(() => {
      if (_ = void 0, !e.value) return;
      const v = o.value, { activeElement: y } = document;
      y instanceof HTMLElement && v?.contains(y) && y.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "auto" });
    }));
  }, K = ve(), { left: L, width: P } = fe(K, { updateTiming: "next-frame", windowScroll: false, immediate: false }), V = O(() => ({ paddingLeft: `${L.value}px`, paddingRight: `calc(100% - ${L.value + P.value}px)` })), R = O(() => ({ width: `${P.value}px` }));
  return be(e, () => (e.value = false, false)), ye(e, () => (e.value = false, false)), (m, v) => (T(), D("div", { ref_key: "containerEl", ref: o, class: "md-bottom-sheet md-bottom-sheet__scrim", role: "dialog", "aria-hidden": h(b), style: F(V.value), onClick: J(w, ["self"]), onKeydown: $ }, [g("div", { ref_key: "bodyEl", ref: r, class: "md md-bottom-sheet__body", style: F(R.value) }, [g("div", De, [g("button", { ref_key: "dragHandleEl", ref: i, type: "button", class: G(["md-bottom-sheet__drag-handle", { "md-state_hover": h(p), "md-state_focused": h(f), "md-state_pressed": h(a) }]), "aria-label": e.value ? l.dragHandleCloseLabel : l.dragHandleExpandLabel, onClick: n }, [X(h(le), { hover: h(p), focused: h(f), pressed: h(a) }, null, 8, ["hover", "focused", "pressed"]), v[0] || (v[0] = g("span", { class: "md-bottom-sheet__drag-pill" }, null, -1))], 10, Le)]), Y(m.$slots, "default", {}, void 0, true)], 4)], 44, Me));
} }), qe = z(Pe, [["__scopeId", "data-v-0ef3a680"]]), Be = { class: "md-bottom-sheet-container-keyboard-scroll-story-harness__list" }, Fe = { type: "button" }, Oe = N({ __name: "MDBottomSheetContainerKeyboardScrollStoryHarness", setup(t) {
  const e = x(true), s = x(), l = Array.from({ length: 30 }, (o, n) => `Row ${n}`);
  return (o, n) => (T(), ee(qe, { open: e.value, "onUpdate:open": n[0] || (n[0] = (i) => e.value = i), "scroll-position": s.value, "onUpdate:scrollPosition": n[1] || (n[1] = (i) => s.value = i), "aria-label": "Keyboard scroll test sheet" }, { default: te(() => [g("ul", Be, [(T(true), D(oe, null, se(h(l), (i) => (T(), D("li", { key: i }, [g("button", Fe, ne(i), 1)]))), 128))])]), _: 1 }, 8, ["open", "scroll-position"]));
} }), Ae = z(Oe, [["__scopeId", "data-v-f4c38cc5"]]), tt = { title: "shared/ui/Sheets/MDBottomSheetContainerKeyboardScrollStoryHarness", component: Ae, parameters: { layout: "fullscreen" } }, S = {};
S.parameters = { ...S.parameters, docs: { ...S.parameters?.docs, source: { originalSource: "{}", ...S.parameters?.docs?.source }, description: { story: "A bottom sheet tall enough to require internal scrolling, used by Playwright to verify that\nfocus-trap's Tab/Shift+Tab wrap-around keeps the newly focused element visible even though the\ntrap is configured with `preventScroll: true` (see `MDBottomSheetContainer2.vue`). No screenshot\ncoverage applies here; this fixture owns no visual contract.", ...S.parameters?.docs?.description } } };
const ot = ["Default"];
export {
  S as Default,
  ot as __namedExportsOrder,
  tt as default
};
