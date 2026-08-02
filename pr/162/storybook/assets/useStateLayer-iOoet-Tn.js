import { q as H, x as q, d as O, f as I, n as U, b as p, o as V, l as R, r as b, m as j } from "./iframe-Xcq9FKdn.js";
import { _ as K } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { d as f, e as y, v as G, i as W, x as L } from "./index-rmfyeyxm.js";
const z = { trailing: true };
function Y(n, e = 25, a = {}) {
  if (a = { ...z, ...a }, !Number.isFinite(e)) throw new TypeError("Expected `wait` to be a finite number");
  let l, s, r = [], t, o;
  const u = (c, v) => (t = J(n, c, v), t.finally(() => {
    if (t = null, a.trailing && o && !s) {
      const E = u(c, o);
      return o = null, E;
    }
  }), t), m = function(...c) {
    return a.trailing && (o = c), t || new Promise((v) => {
      const E = !s && a.leading;
      clearTimeout(s), s = setTimeout(() => {
        s = null;
        const C = a.leading ? l : u(this, c);
        o = null;
        for (const $ of r) $(C);
        r = [];
      }, e), E ? (l = u(this, c), v(l)) : r.push(v);
    });
  }, d = (c) => {
    c && (clearTimeout(c), s = null);
  };
  return m.isPending = () => !!s, m.cancel = () => {
    d(s), r = [], o = null;
  }, m.flush = () => {
    if (d(s), !o || t) return;
    const c = o;
    return o = null, u(this, c);
  }, m;
}
async function J(n, e, a) {
  return await n.apply(e, a);
}
const N = /* @__PURE__ */ Symbol("MDStateLayerForcedState"), ce = (n) => {
  q(N, n);
}, Q = () => H(N, void 0), Z = O({ __name: "MDStateLayer", props: { hover: { type: Boolean, default: false }, focused: { type: Boolean, default: false }, pressed: { type: Boolean, default: false }, dragged: { type: Boolean, default: false }, disabled: { type: Boolean, default: false } }, setup(n) {
  const e = n, a = Q(), l = p(() => a?.hovered?.value ?? e.hover), s = p(() => a?.focused?.value ?? e.focused), r = p(() => a?.pressed?.value ?? e.pressed), t = p(() => a?.dragged?.value ?? e.dragged);
  return (o, u) => (V(), I("span", { class: U(["md-state-layer", { "md-state_hover": !e.disabled && l.value, "md-state_focused": !e.disabled && s.value, "md-state_pressed": !e.disabled && r.value, "md-state_dragged": !e.disabled && t.value, "md-state_disabled": e.disabled }]), "aria-hidden": "true" }, null, 2));
} }), de = K(Z, [["__scopeId", "data-v-73ae0dfb"]]), i = /* @__PURE__ */ Object.create(null), k = 6e4, A = k * 60, S = A * 24, B = S * 365.25;
i.year = i.yr = i.y = B;
i.month = i.mo = i.mth = B / 12;
i.week = i.wk = i.w = S * 7;
i.day = i.d = S;
i.hour = i.hr = i.h = A;
i.minute = i.min = i.m = k;
i.second = i.sec = i.s = 1e3;
i.millisecond = i.millisec = i.ms = 1;
i.microsecond = i.microsec = i.us = i.\u00B5s = 1e-3;
i.nanosecond = i.nanosec = i.ns = 1e-6;
i.group = ",";
i.decimal = ".";
i.placeholder = " _";
const D = /((?:\d{1,16}(?:\.\d{1,16})?|\.\d{1,16})(?:[eE][-+]?\d{1,4})?)\s*([\p{L}]{0,14})/gu;
T.unit = i;
let x, M = null, P;
function T(n = "", e = "ms") {
  let a = null, l, s = T.unit;
  (s.placeholder !== M || s.group !== P) && (x = new RegExp(`(\\d)[${(M = s.placeholder) ?? ""}${(P = s.group) ?? ""}](\\d)`, "g")), n = String(n);
  let r = n.replace(x, "$1$2");
  s.decimal !== "." && (r = r.replaceAll(s.decimal, ".")), D.lastIndex = 0;
  for (let t; t = D.exec(r); ) {
    let o = t[2];
    if (o) o = o.toLowerCase();
    else if (l) {
      for (const u in s) if (s[u] < l) {
        o = u;
        break;
      }
    } else o = e;
    l = o = s[o] || (o.endsWith("s") ? s[o.slice(0, -1)] : void 0), typeof o == "number" && (a = (a || 0) + t[1] * o);
  }
  return a && a / (s[e] || 1) * (n.trimStart()[0] === "-" ? -1 : 1);
}
let h;
const X = (n) => {
  const e = p(() => y(n)), a = b(false);
  f(e, ["mousedown", "dragstart", "touchstart"], ({ currentTarget: t }) => {
    t instanceof Element && t === y(e) && (!h || !t.contains(h)) && (h = t, a.value = true);
  }, { passive: true }), f(window, ["mouseleave", "mouseup", "drop", "dragend", "touchend", "touchcancel"], () => {
    h = void 0, a.value = false;
  });
  const l = b(false);
  let s;
  const r = () => {
    const o = y(e);
    return o instanceof Element ? T(getComputedStyle(o).getPropertyValue("transition-duration")) ?? 200 : 200;
  };
  return R(a, (t) => {
    t ? (l.value = t, clearTimeout(s), s = setTimeout(() => {
      l.value = a.value, s = void 0;
    }, r())) : s === void 0 && (l.value = a.value);
  }, { immediate: true }), { pressed: a, durationPressedState: l };
};
function ee(n) {
  return typeof n == "symbol" || n instanceof Symbol;
}
function te(n) {
  return ee(n) ? NaN : Number(n);
}
const ae = () => new Promise(requestAnimationFrame), se = async ({ target: n, clientX: e, clientY: a }) => {
  const { left: l, top: s, right: r, bottom: t } = n.getBoundingClientRect(), o = e - l, u = a - s, m = Math.max(Math.hypot(l - e, s - a), Math.hypot(r - e, s - a), Math.hypot(l - e, t - a), Math.hypot(r - e, t - a)) * 2, d = document.createElement("span");
  d.classList.add("md-ripple"), d.style.setProperty("--md-ripple-y", `${u}px`), d.style.setProperty("--md-ripple-x", `${o}px`), d.style.setProperty("--md-ripple-diameter", `${m}px`), n.prepend(d);
  const c = 1e3;
  await ae();
  const v = d.animate([{ "--md-ripple-opacity": 1, "--md-ripple-scale": 0 }, { "--md-ripple-opacity": 1, "--md-ripple-scale": 1 }, { "--md-ripple-opacity": 0, "--md-ripple-scale": 1 }], { duration: c });
  return v.addEventListener("finish", () => {
    d.remove();
  }), v;
};
let g;
const pe = (n) => {
  const e = p(() => y(n));
  let a;
  const l = async (t) => {
    const { target: o, clientX: u, clientY: m } = t;
    o instanceof Element && o === y(e) && (!g || !o.contains(g)) && (g = o, a = await se({ clientX: u, clientY: m, target: o }));
  }, s = () => {
    if (g = void 0, a?.effect instanceof KeyframeEffect) {
      const { target: t } = a.effect;
      if (t instanceof Element) {
        const u = te(a.effect.getTiming().duration);
        a.playbackRate = u / 200;
      }
    }
  };
  f(e, "pointerdown", ({ currentTarget: t, clientX: o, clientY: u }) => {
    l({ clientX: o, clientY: u, target: t });
  }, { passive: true }), f(e, ["pointerup", "pointerout", "pointerleave", "touchend", "touchcancel", "keyup", "touchmove", "pointermove"], () => {
    s();
  });
  const r = Y(({ currentTarget: t, key: o }) => {
    (o === " " || o === "Enter") && t instanceof Element && l({ clientX: 0, clientY: 0, target: t });
  }, 500, { leading: true });
  f(e, "keydown", (t) => {
    r(t);
  });
}, F = 'input, select, textarea, button, [tabindex]:not([tabindex="-1"])', ne = (n, e) => {
  const a = p(() => {
    const s = y(n);
    if (s) {
      if (e?.useTarget && s.matches(F)) return s;
      const r = s.querySelector(F);
      return r instanceof HTMLElement ? r : void 0;
    }
  }), { focused: l } = G(a, e);
  return j(() => {
    e?.initialValue && (l.value = !!a.value);
  }), { focused: l };
}, w = (n) => n !== "touch", oe = W(() => {
  const n = b([]), e = p(() => n.value.at(-1)), a = () => {
    n.value = [];
  }, l = (r) => {
    n.value.includes(r) && s(r), n.value.push(r);
  }, s = (r) => {
    const t = n.value.indexOf(r);
    t >= 0 && n.value.splice(t, 1);
  };
  return f("pointerdown", (r) => {
    w(r.pointerType) || a();
  }, { passive: true, capture: true }), f(["touchstart", "pointercancel", "touchcancel", "dragstart", "drop"], a, { passive: true, capture: true }), { clear: a, push: l, remove: s, lastTarget: e };
}), re = (n) => {
  const e = p(() => y(n)), { lastTarget: a, push: l, remove: s } = oe();
  return f(e, "pointerenter", (r) => {
    if (!w(r.pointerType)) return;
    const { currentTarget: t } = r;
    t instanceof Element && t === e.value && l(t);
  }), f(e, "pointerleave", (r) => {
    if (!w(r.pointerType)) return;
    const { currentTarget: t } = r;
    t instanceof Element && s(t);
  }), R(e, (r, t) => {
    t instanceof Element && s(t);
  }, { immediate: true }), p(() => !!e.value && e.value === a.value);
}, _ = (n, e = {}) => {
  const { pressed: a, durationPressedState: l } = X(n), s = re(n), { focused: r } = ne(n, { useTarget: true, focusVisible: true }), t = e.dragged ?? b(false);
  return e.hover && L(s, e.hover), e.focused && L(r, e.focused), { hover: s, focused: r, pressed: a, durationPressedState: l, dragged: t };
};
_.__docgenInfo = Object.assign({ displayName: _.name ?? _.__name }, { exportName: "useStateLayer", displayName: "useStateLayer", description: "Collect host interaction state for a Material state layer without owning host semantics.", type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "HTMLElement | null", schema: "HTMLElement | null", declarations: [] }, { name: "__@RefSymbol@301", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", schema: "true", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/State/useStateLayer.ts" });
export {
  de as M,
  pe as a,
  re as b,
  ne as c,
  X as d,
  ce as p,
  _ as u
};
