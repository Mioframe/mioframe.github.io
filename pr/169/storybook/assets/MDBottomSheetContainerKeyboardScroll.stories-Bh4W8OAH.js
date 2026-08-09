import { X as U, G as W, p as j, r as x, y as q, d as N, S as A, l as H, f as D, g, n as G, u as h, h as J, A as X, k as B, J as Y, T as Z, j as M, b as F, o as T, c as ee, w as te, i as oe, F as se, t as ne } from "./iframe-BmKBn1Mu.js";
import { u as ae, a as re, M as ie } from "./useStateLayer-DalrK0pL.js";
import { r as le, f as ce, h as ue, t as de, c as pe, i as fe, e as me } from "./index-CROe5JIw.js";
import { a as he } from "./index-CTAbr4nr.js";
import { u as ve } from "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-Dna3Omro.js";
import "./MDCircularProgressIndicator-DOisiz-R.js";
import "./useOverlay-DJ1otShK.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-B1Q_jGFY.js";
import { b as be, c as ye } from "./main-s0GXXqFc.js";
import "./MDIconButton-7IB94KEA.js";
import "./useLocalSettings-Bb4TLqpL.js";
import { u as ge } from "./useFocusTrap-Ci7JbyrG.js";
import { _ as z } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDSymbol-BfB6TF8u.js";
import "./floating-ui.vue-C3Ysfbvu.js";
import "./typography-C_Z8eobQ.js";
import "./onInteractionOutside-C4f8P7lC.js";
const O = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || /* @__PURE__ */ (function() {
  return this;
})();
function we(t, e, { signal: s, edges: i } = {}) {
  let o, n = null;
  const l = i != null && i.includes("leading"), p = i == null || i.includes("trailing"), f = () => {
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
  }, b = function(...k) {
    if (s?.aborted) return;
    o = this, n = k;
    const E = r == null;
    c(), l && E && f();
  };
  return b.schedule = c, b.cancel = u, b.flush = w, s?.addEventListener("abort", u, { once: true }), b;
}
const _e = typeof O.DOMException < "u" ? O.DOMException : Error;
var Se = class extends _e {
  constructor(t = "The operation was aborted") {
    super(t);
  }
};
function Ee(t, { signal: e } = {}) {
  return new Promise((s, i) => {
    const o = () => {
      i(new Se());
    }, n = () => {
      clearTimeout(l), o();
    };
    if (e?.aborted) return o();
    const l = setTimeout(() => {
      e?.removeEventListener("abort", n), s();
    }, t);
    e?.addEventListener("abort", n, { once: true });
  });
}
function Te(t, e, { signal: s, edges: i = ["leading", "trailing"] } = {}) {
  let o = null;
  const n = we(function(...p) {
    o = Date.now(), t.apply(this, p);
  }, e, { signal: s, edges: i }), l = function(...p) {
    if (o == null && (o = Date.now()), Date.now() - o >= e) {
      o = Date.now(), t.apply(this, p), n.cancel(), n.schedule();
      return;
    }
    n.apply(this, p);
  };
  return l.cancel = n.cancel, l.flush = n.flush, l;
}
class xe {
  value;
  next;
  constructor(e) {
    this.value = e;
  }
}
class ke {
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
function Ce(t) {
  let e = false;
  if (typeof t == "object" && ({ concurrency: t, rejectOnClear: e = false } = t), I(t), typeof e != "boolean") throw new TypeError("Expected `rejectOnClear` to be a boolean");
  const s = new ke();
  let i = 0;
  const o = () => {
    i < t && s.size > 0 && (i++, s.dequeue().run());
  }, n = () => {
    i--, o();
  }, l = async (a, r, c) => {
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
    }).then(l.bind(void 0, a, r, d)), i < t && o();
  }, f = (a, ...r) => new Promise((c, d) => {
    p(a, c, d, r);
  });
  return Object.defineProperties(f, { activeCount: { get: () => i }, pendingCount: { get: () => s.size }, clearQueue: { value() {
    if (!e) {
      s.clear();
      return;
    }
    const a = AbortSignal.abort().reason;
    for (; s.size > 0; ) s.dequeue().reject(a);
  } }, concurrency: { get: () => t, set(a) {
    I(a), t = a, queueMicrotask(() => {
      for (; i < t && s.size > 0; ) o();
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
  const s = x(), i = x(), o = le(false, e * 2);
  ce(t, "scroll", Te(() => {
    o.value = true;
    const a = q(t);
    a ? (s.value = a.scrollTop, i.value = a.scrollLeft) : (s.value = void 0, i.value = void 0);
  }, e));
  const l = async ({ behavior: a = "smooth", left: r, top: c }) => {
    const d = q(t);
    if (d) {
      const u = { behavior: a };
      r !== void 0 && (u.left = r), c !== void 0 && (u.top = c), d.scrollTo(u), await Ee(e), await ue(o).toBe(false, { timeout: 1e4 });
    }
  }, p = Ce(1), f = async ({ behavior: a = "smooth", left: r, top: c }) => {
    await p(async () => {
      await j(), await l({ behavior: a, left: r, top: c });
    });
  };
  return de(() => {
    o.value = false, p.clearQueue();
  }), { scrollTo: f, position: U(W({ scrollTop: s, scrollLeft: i })) };
}, Me = ["aria-hidden"], De = { class: "md-bottom-sheet__header" }, Le = ["aria-label"], Pe = N({ __name: "MDBottomSheetContainer2", props: Z({ dragHandleExpandLabel: { default: "Expand sheet" }, dragHandleCloseLabel: { default: "Close sheet" } }, { open: { type: Boolean, required: true }, openModifiers: {}, scrollPosition: {}, scrollPositionModifiers: {} }), emits: ["update:open", "update:scrollPosition"], setup(t) {
  const e = A(t, "open"), s = A(t, "scrollPosition"), i = t, o = M("containerEl"), n = () => {
    e.value = !e.value;
  }, l = M("dragHandleEl"), { hover: p, focused: f, durationPressedState: a } = ae(l);
  re(l);
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
  }, b = he(), { activate: k, deactivate: E } = ge(o, { allowOutsideClick: true, preventScroll: true });
  let _;
  const C = () => {
    _ !== void 0 && (cancelAnimationFrame(_), _ = void 0);
  };
  H([e, o], async ([m]) => {
    m ? (await j(), o.value && k()) : (C(), E());
  }, { immediate: true, flush: "post" }), me(() => {
    C(), E();
  });
  const $ = (m) => {
    m.key !== "Tab" || !e.value || (C(), _ = requestAnimationFrame(() => {
      if (_ = void 0, !e.value) return;
      const v = o.value, { activeElement: y } = document;
      y instanceof HTMLElement && v?.contains(y) && y.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "auto" });
    }));
  }, K = ve(), { left: L, width: P } = fe(K, { updateTiming: "next-frame", windowScroll: false, immediate: false }), V = F(() => ({ paddingLeft: `${L.value}px`, paddingRight: `calc(100% - ${L.value + P.value}px)` })), R = F(() => ({ width: `${P.value}px` }));
  return be(e, () => (e.value = false, false)), ye(e, () => (e.value = false, false)), (m, v) => (T(), D("div", { ref_key: "containerEl", ref: o, class: "md-bottom-sheet md-bottom-sheet__scrim", role: "dialog", "aria-hidden": h(b), style: B(V.value), onClick: Y(w, ["self"]), onKeydown: $ }, [g("div", { ref_key: "bodyEl", ref: r, class: "md md-bottom-sheet__body", style: B(R.value) }, [g("div", De, [g("button", { ref_key: "dragHandleEl", ref: l, type: "button", class: G(["md-bottom-sheet__drag-handle", { "md-state_hover": h(p), "md-state_focused": h(f), "md-state_pressed": h(a) }]), "aria-label": e.value ? i.dragHandleCloseLabel : i.dragHandleExpandLabel, onClick: n }, [J(h(ie), { hover: h(p), focused: h(f), pressed: h(a) }, null, 8, ["hover", "focused", "pressed"]), v[0] || (v[0] = g("span", { class: "md-bottom-sheet__drag-pill" }, null, -1))], 10, Le)]), X(m.$slots, "default", {}, void 0, true)], 4)], 44, Me));
} }), qe = z(Pe, [["__scopeId", "data-v-0ef3a680"]]), Ae = { class: "md-bottom-sheet-container-keyboard-scroll-story-harness__list" }, Be = { type: "button" }, Fe = N({ __name: "MDBottomSheetContainerKeyboardScrollStoryHarness", setup(t) {
  const e = x(true), s = x(), i = Array.from({ length: 30 }, (o, n) => `Row ${n}`);
  return (o, n) => (T(), ee(qe, { open: e.value, "onUpdate:open": n[0] || (n[0] = (l) => e.value = l), "scroll-position": s.value, "onUpdate:scrollPosition": n[1] || (n[1] = (l) => s.value = l), "aria-label": "Keyboard scroll test sheet" }, { default: te(() => [g("ul", Ae, [(T(true), D(se, null, oe(h(i), (l) => (T(), D("li", { key: l }, [g("button", Be, ne(l), 1)]))), 128))])]), _: 1 }, 8, ["open", "scroll-position"]));
} }), Oe = z(Fe, [["__scopeId", "data-v-f4c38cc5"]]), at = { title: "shared/ui/Sheets/MDBottomSheetContainerKeyboardScrollStoryHarness", component: Oe, parameters: { layout: "fullscreen" } }, S = {};
S.parameters = { ...S.parameters, docs: { ...S.parameters?.docs, source: { originalSource: "{}", ...S.parameters?.docs?.source }, description: { story: "A bottom sheet tall enough to require internal scrolling, used by Playwright to verify that\nfocus-trap's Tab/Shift+Tab wrap-around keeps the newly focused element visible even though the\ntrap is configured with `preventScroll: true` (see `MDBottomSheetContainer2.vue`). No screenshot\ncoverage applies here; this fixture owns no visual contract.", ...S.parameters?.docs?.description } } };
const rt = ["Default"];
export {
  S as Default,
  rt as __namedExportsOrder,
  at as default
};
