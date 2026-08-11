import { Y as Q, D as N, L as q, r as x, m as W, d as j, T as A, A as H, c as M, b as g, n as Y, e as h, a as G, g as J, v as B, E as X, U as Z, i as D, h as F, o as T, f as ee, w as te, F as oe, l as se, t as ne } from "./iframe-DELGgwUH.js";
import { u as ae, a as re, M as ie } from "./useStateLayer-DYMhia-s.js";
import { r as le, u as ce, g as ue, t as de, h as pe, b as me, a as fe } from "./index-9vxt_rMU.js";
import { u as he } from "./index-pIOqsQQB.js";
import { u as ve } from "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-DuG25Gka.js";
import "./MDCircularProgressIndicator-BYUTk6L0.js";
import "./useOverlay-DVFklsX5.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-Dyjm5VwP.js";
import { b as be, c as ye } from "./main-DfT22653.js";
import "./MDIconButton-fFrtwTua.js";
import "./useLocalSettings-CCZy25nm.js";
import { u as ge } from "./useFocusTrap-CRdaBe4S.js";
import { _ as z } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDSymbol-vfFgnK4v.js";
import "./TeleportContainer.vue_vue_type_script_setup_true_lang-CiTtZCJ7.js";
import "./typography-C_Z8eobQ.js";
import "./onInteractionOutside-BG6AMJ-w.js";
const O = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || /* @__PURE__ */ (function() {
  return this;
})();
function we(t, e, { signal: s, edges: i } = {}) {
  let o, n = null;
  const l = i != null && i.includes("leading"), p = i == null || i.includes("trailing"), m = () => {
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
    c(), l && E && m();
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
  }, m = (a, ...r) => new Promise((c, d) => {
    p(a, c, d, r);
  });
  return Object.defineProperties(m, { activeCount: { get: () => i }, pendingCount: { get: () => s.size }, clearQueue: { value() {
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
    const c = Array.from(a, (d, u) => m(r, d, u));
    return Promise.all(c);
  } } }), m;
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
  }, p = ke(1), m = async ({ behavior: a = "smooth", left: r, top: c }) => {
    await p(async () => {
      await N(), await l({ behavior: a, left: r, top: c });
    });
  };
  return de(() => {
    o.value = false, p.clearQueue();
  }), { scrollTo: m, position: Q(W({ scrollTop: s, scrollLeft: i })) };
}, De = ["aria-hidden"], Me = { class: "md-bottom-sheet__header" }, Le = ["aria-label"], Pe = j({ __name: "MDBottomSheetContainer2", props: Z({ dragHandleExpandLabel: { default: "Expand sheet" }, dragHandleCloseLabel: { default: "Close sheet" } }, { open: { type: Boolean, required: true }, openModifiers: {}, scrollPosition: {}, scrollPositionModifiers: {} }), emits: ["update:open", "update:scrollPosition"], setup(t) {
  const e = A(t, "open"), s = A(t, "scrollPosition"), i = t, o = D("containerEl"), n = () => {
    e.value = !e.value;
  }, l = D("dragHandleEl"), { hover: p, focused: m, durationPressedState: a } = ae(l);
  re(l);
  const r = D("bodyEl"), { height: c } = pe(r, { height: 0, width: 0 }, { box: "border-box" }), { position: d, scrollTo: u } = He(o, { throttleMs: 1e3 / 60 });
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
  const $ = (f) => {
    f.key !== "Tab" || !e.value || (k(), _ = requestAnimationFrame(() => {
      if (_ = void 0, !e.value) return;
      const v = o.value, { activeElement: y } = document;
      y instanceof HTMLElement && v?.contains(y) && y.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "auto" });
    }));
  }, K = ve(), { left: L, width: P } = me(K, { updateTiming: "next-frame", windowScroll: false, immediate: false }), V = F(() => ({ paddingLeft: `${L.value}px`, paddingRight: `calc(100% - ${L.value + P.value}px)` })), R = F(() => ({ width: `${P.value}px` }));
  return be(e, () => (e.value = false, false)), ye(e, () => (e.value = false, false)), (f, v) => (T(), M("div", { ref_key: "containerEl", ref: o, class: "md-bottom-sheet md-bottom-sheet__scrim", role: "dialog", "aria-hidden": h(b), style: B(V.value), onClick: X(w, ["self"]), onKeydown: $ }, [g("div", { ref_key: "bodyEl", ref: r, class: "md md-bottom-sheet__body", style: B(R.value) }, [g("div", Me, [g("button", { ref_key: "dragHandleEl", ref: l, type: "button", class: Y(["md-bottom-sheet__drag-handle", { "md-state_hover": h(p), "md-state_focused": h(m), "md-state_pressed": h(a) }]), "aria-label": e.value ? i.dragHandleCloseLabel : i.dragHandleExpandLabel, onClick: n }, [G(h(ie), { hover: h(p), focused: h(m), pressed: h(a) }, null, 8, ["hover", "focused", "pressed"]), v[0] || (v[0] = g("span", { class: "md-bottom-sheet__drag-pill" }, null, -1))], 10, Le)]), J(f.$slots, "default", {}, void 0, true)], 4)], 44, De));
} }), qe = z(Pe, [["__scopeId", "data-v-0ef3a680"]]), Ae = { class: "md-bottom-sheet-container-keyboard-scroll-story-harness__list" }, Be = { type: "button" }, Fe = j({ __name: "MDBottomSheetContainerKeyboardScrollStoryHarness", setup(t) {
  const e = x(true), s = x(), i = Array.from({ length: 30 }, (o, n) => `Row ${n}`);
  return (o, n) => (T(), ee(qe, { open: e.value, "onUpdate:open": n[0] || (n[0] = (l) => e.value = l), "scroll-position": s.value, "onUpdate:scrollPosition": n[1] || (n[1] = (l) => s.value = l), "aria-label": "Keyboard scroll test sheet" }, { default: te(() => [g("ul", Ae, [(T(true), M(oe, null, se(h(i), (l) => (T(), M("li", { key: l }, [g("button", Be, ne(l), 1)]))), 128))])]), _: 1 }, 8, ["open", "scroll-position"]));
} }), Oe = z(Fe, [["__scopeId", "data-v-f4c38cc5"]]), at = { title: "shared/ui/Sheets/MDBottomSheetContainerKeyboardScrollStoryHarness", component: Oe, parameters: { layout: "fullscreen" } }, S = {};
S.parameters = { ...S.parameters, docs: { ...S.parameters?.docs, source: { originalSource: "{}", ...S.parameters?.docs?.source }, description: { story: "A bottom sheet tall enough to require internal scrolling, used by Playwright to verify that\nfocus-trap's Tab/Shift+Tab wrap-around keeps the newly focused element visible even though the\ntrap is configured with `preventScroll: true` (see `MDBottomSheetContainer2.vue`). No screenshot\ncoverage applies here; this fixture owns no visual contract.", ...S.parameters?.docs?.description } } };
const rt = ["Default"];
export {
  S as Default,
  rt as __namedExportsOrder,
  at as default
};
