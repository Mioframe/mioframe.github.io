import { Z as Q, E as N, M as B, r as x, m as W, d as j, U as q, B as H, c as D, b as g, n as G, e as h, a as Y, g as Z, v as F, G as J, V as X, i as M, h as O, o as T, f as ee, w as te, F as oe, l as se, t as ne } from "./iframe-CNRHCcIb.js";
import { u as ae, a as re, M as le } from "./useStateLayer-BCksD0WW.js";
import { r as ie, u as ce, g as ue, t as de, h as pe, a as me, b as fe } from "./index-B-Gs4PqX.js";
import { u as he } from "./index-BwOXAmVm.js";
import { u as ve } from "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-D7tyCfl9.js";
import "./MDCircularProgressIndicator-C5r2I-c7.js";
import "./useOverlay-CyihAFUR.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-Dlnbs3zC.js";
import { b as be, c as ye } from "./main-CU02kfae.js";
import "./MDIconButton-BqpHyAxV.js";
import "./useLocalSettings-CgRQHwmC.js";
import { u as ge } from "./useFocusTrap-DljKH4hr.js";
import { _ as z } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDSymbol-CsETbD9G.js";
import "./typography-C_Z8eobQ.js";
import "./onInteractionOutside-D1l_utje.js";
const A = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || /* @__PURE__ */ (function() {
  return this;
})();
function we(t, e, { signal: s, edges: l } = {}) {
  let o, n = null;
  const i = l != null && l.includes("leading"), p = l == null || l.includes("trailing"), m = () => {
    n !== null && (t.apply(o, n), o = void 0, n = null);
  }, a = () => {
    p && m(), u();
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
    m();
  }, b = function(...C) {
    if (s?.aborted) return;
    o = this, n = C;
    const E = r == null;
    c(), i && E && m();
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
  }, m = (a, ...r) => new Promise((c, d) => {
    p(a, c, d, r);
  });
  return Object.defineProperties(m, { activeCount: { get: () => l }, pendingCount: { get: () => s.size }, clearQueue: { value() {
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
    const c = Array.from(a, (d, u) => m(r, d, u));
    return Promise.all(c);
  } } }), m;
}
function I(t) {
  if (!((Number.isInteger(t) || t === Number.POSITIVE_INFINITY) && t > 0)) throw new TypeError("Expected `concurrency` to be a number from 1 and up");
}
const He = (t, { throttleMs: e = 1e3 / 10 } = {}) => {
  const s = x(), l = x(), o = ie(false, e * 2);
  ce(t, "scroll", Te(() => {
    o.value = true;
    const a = B(t);
    a ? (s.value = a.scrollTop, l.value = a.scrollLeft) : (s.value = void 0, l.value = void 0);
  }, e));
  const i = async ({ behavior: a = "smooth", left: r, top: c }) => {
    const d = B(t);
    if (d) {
      const u = { behavior: a };
      r !== void 0 && (u.left = r), c !== void 0 && (u.top = c), d.scrollTo(u), await Ee(e), await ue(o).toBe(false, { timeout: 1e4 });
    }
  }, p = ke(1), m = async ({ behavior: a = "smooth", left: r, top: c }) => {
    await p(async () => {
      await N(), await i({ behavior: a, left: r, top: c });
    });
  };
  return de(() => {
    o.value = false, p.clearQueue();
  }), { scrollTo: m, position: Q(W({ scrollTop: s, scrollLeft: l })) };
}, Me = ["aria-hidden"], De = { class: "md-bottom-sheet__header" }, Le = ["aria-label"], Pe = j({ __name: "MDBottomSheetContainer2", props: X({ dragHandleExpandLabel: { default: "Expand sheet" }, dragHandleCloseLabel: { default: "Close sheet" } }, { open: { type: Boolean, required: true }, openModifiers: {}, scrollPosition: {}, scrollPositionModifiers: {} }), emits: ["update:open", "update:scrollPosition"], setup(t) {
  const e = q(t, "open"), s = q(t, "scrollPosition"), l = t, o = M("containerEl"), n = () => {
    e.value = !e.value;
  }, i = M("dragHandleEl"), { hover: p, focused: m, durationPressedState: a } = ae(i);
  re(i);
  const r = M("bodyEl"), { height: c } = pe(r, { height: 0, width: 0 }, { box: "border-box" }), { position: d, scrollTo: u } = He(o, { throttleMs: 1e3 / 60 });
  H(d, ({ scrollTop: f }) => {
    s.value = f;
  }), H([e, c, r], ([f, v, y]) => {
    if (v && y) if (f) {
      const U = Math.min(v, y.offsetTop);
      u({ top: U });
    } else u({ top: 0 });
  }, { immediate: true });
  const w = () => {
    u({ top: 0 });
  }, b = he(), { activate: C, deactivate: E } = ge(o, { allowOutsideClick: true, preventScroll: true });
  let _;
  const k = () => {
    _ !== void 0 && (cancelAnimationFrame(_), _ = void 0);
  };
  H([e, o], async ([f]) => {
    f ? (await N(), o.value && C()) : (k(), E());
  }, { immediate: true, flush: "post" }), fe(() => {
    k(), E();
  });
  const V = (f) => {
    f.key !== "Tab" || !e.value || (k(), _ = requestAnimationFrame(() => {
      if (_ = void 0, !e.value) return;
      const v = o.value, { activeElement: y } = document;
      y instanceof HTMLElement && v?.contains(y) && y.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "auto" });
    }));
  }, $ = ve(), { left: L, width: P } = me($, { updateTiming: "next-frame", windowScroll: false, immediate: false }), K = O(() => ({ paddingLeft: `${L.value}px`, paddingRight: `calc(100% - ${L.value + P.value}px)` })), R = O(() => ({ width: `${P.value}px` }));
  return be(e, () => (e.value = false, false)), ye(e, () => (e.value = false, false)), (f, v) => (T(), D("div", { ref_key: "containerEl", ref: o, class: "md-bottom-sheet md-bottom-sheet__scrim", role: "dialog", "aria-hidden": h(b), style: F(K.value), onClick: J(w, ["self"]), onKeydown: V }, [g("div", { ref_key: "bodyEl", ref: r, class: "md md-bottom-sheet__body", style: F(R.value) }, [g("div", De, [g("button", { ref_key: "dragHandleEl", ref: i, type: "button", class: G(["md-bottom-sheet__drag-handle", { "md-state_hover": h(p), "md-state_focused": h(m), "md-state_pressed": h(a) }]), "aria-label": e.value ? l.dragHandleCloseLabel : l.dragHandleExpandLabel, onClick: n }, [Y(h(le), { hover: h(p), focused: h(m), pressed: h(a) }, null, 8, ["hover", "focused", "pressed"]), v[0] || (v[0] = g("span", { class: "md-bottom-sheet__drag-pill" }, null, -1))], 10, Le)]), Z(f.$slots, "default", {}, void 0, true)], 4)], 44, Me));
} }), Be = z(Pe, [["__scopeId", "data-v-0ef3a680"]]), qe = { class: "md-bottom-sheet-container-keyboard-scroll-story-harness__list" }, Fe = { type: "button" }, Oe = j({ __name: "MDBottomSheetContainerKeyboardScrollStoryHarness", setup(t) {
  const e = x(true), s = x(), l = Array.from({ length: 30 }, (o, n) => `Row ${n}`);
  return (o, n) => (T(), ee(Be, { open: e.value, "onUpdate:open": n[0] || (n[0] = (i) => e.value = i), "scroll-position": s.value, "onUpdate:scrollPosition": n[1] || (n[1] = (i) => s.value = i), "aria-label": "Keyboard scroll test sheet" }, { default: te(() => [g("ul", qe, [(T(true), D(oe, null, se(h(l), (i) => (T(), D("li", { key: i }, [g("button", Fe, ne(i), 1)]))), 128))])]), _: 1 }, 8, ["open", "scroll-position"]));
} }), Ae = z(Oe, [["__scopeId", "data-v-f4c38cc5"]]), nt = { title: "shared/ui/Sheets/MDBottomSheetContainerKeyboardScrollStoryHarness", component: Ae, parameters: { layout: "fullscreen" } }, S = {};
S.parameters = { ...S.parameters, docs: { ...S.parameters?.docs, source: { originalSource: "{}", ...S.parameters?.docs?.source }, description: { story: "A bottom sheet tall enough to require internal scrolling, used by Playwright to verify that\nfocus-trap's Tab/Shift+Tab wrap-around keeps the newly focused element visible even though the\ntrap is configured with `preventScroll: true` (see `MDBottomSheetContainer2.vue`). No screenshot\ncoverage applies here; this fixture owns no visual contract.", ...S.parameters?.docs?.description } } };
const at = ["Default"];
export {
  S as Default,
  at as __namedExportsOrder,
  nt as default
};
