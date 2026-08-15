import { J as $, L as q, d as O, c as I, s as U, y as p, o as V, C as R, r as b, H as j } from "./iframe-C_sqhipz.js";
import { _ as K } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { u as f, e as y, v as G, c as W, x as L } from "./index-C-YHG7D4.js";
const z = { trailing: true };
function J(n, e = 25, a = {}) {
  if (a = { ...z, ...a }, !Number.isFinite(e)) throw new TypeError("Expected `wait` to be a finite number");
  let l, s, r = [], t, o;
  const c = (u, v) => (t = Y(n, u, v), t.finally(() => {
    if (t = null, a.trailing && o && !s) {
      const E = c(u, o);
      return o = null, E;
    }
  }), t), m = function(...u) {
    return a.trailing && (o = u), t || new Promise((v) => {
      const E = !s && a.leading;
      clearTimeout(s), s = setTimeout(() => {
        s = null;
        const B = a.leading ? l : c(this, u);
        o = null;
        for (const H of r) H(B);
        r = [];
      }, e), E ? (l = c(this, u), v(l)) : r.push(v);
    });
  }, d = (u) => {
    u && (clearTimeout(u), s = null);
  };
  return m.isPending = () => !!s, m.cancel = () => {
    d(s), r = [], o = null;
  }, m.flush = () => {
    if (d(s), !o || t) return;
    const u = o;
    return o = null, c(this, u);
  }, m;
}
async function Y(n, e, a) {
  return await n.apply(e, a);
}
function Q(n) {
  return typeof n == "symbol" || n instanceof Symbol;
}
function Z(n) {
  return Q(n) ? NaN : Number(n);
}
const C = /* @__PURE__ */ Symbol("MDStateLayerForcedState"), ue = (n) => {
  q(C, n);
}, X = () => $(C, void 0), ee = O({ __name: "MDStateLayer", props: { hover: { type: Boolean, default: false }, focused: { type: Boolean, default: false }, pressed: { type: Boolean, default: false }, dragged: { type: Boolean, default: false }, disabled: { type: Boolean, default: false } }, setup(n) {
  const e = n, a = X(), l = p(() => a?.hovered?.value ?? e.hover), s = p(() => a?.focused?.value ?? e.focused), r = p(() => a?.pressed?.value ?? e.pressed), t = p(() => a?.dragged?.value ?? e.dragged);
  return (o, c) => (V(), I("span", { class: U(["md-state-layer", { "md-state_hover": !e.disabled && l.value, "md-state_focused": !e.disabled && s.value, "md-state_pressed": !e.disabled && r.value, "md-state_dragged": !e.disabled && t.value, "md-state_disabled": e.disabled }]), "aria-hidden": "true" }, null, 2));
} }), de = K(ee, [["__scopeId", "data-v-73ae0dfb"]]), i = /* @__PURE__ */ Object.create(null), N = 6e4, k = N * 60, S = k * 24, A = S * 365.25;
i.year = i.yr = i.y = A;
i.month = i.mo = i.mth = A / 12;
i.week = i.wk = i.w = S * 7;
i.day = i.d = S;
i.hour = i.hr = i.h = k;
i.minute = i.min = i.m = N;
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
      for (const c in s) if (s[c] < l) {
        o = c;
        break;
      }
    } else o = e;
    l = o = s[o] || (o.endsWith("s") ? s[o.slice(0, -1)] : void 0), typeof o == "number" && (a = (a || 0) + t[1] * o);
  }
  return a && a / (s[e] || 1) * (n.trimStart()[0] === "-" ? -1 : 1);
}
let h;
const te = (n) => {
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
}, ae = () => new Promise(requestAnimationFrame), se = async ({ target: n, clientX: e, clientY: a }) => {
  const { left: l, top: s, right: r, bottom: t } = n.getBoundingClientRect(), o = e - l, c = a - s, m = Math.max(Math.hypot(l - e, s - a), Math.hypot(r - e, s - a), Math.hypot(l - e, t - a), Math.hypot(r - e, t - a)) * 2, d = document.createElement("span");
  d.classList.add("md-ripple"), d.style.setProperty("--md-ripple-y", `${c}px`), d.style.setProperty("--md-ripple-x", `${o}px`), d.style.setProperty("--md-ripple-diameter", `${m}px`), n.prepend(d);
  const u = 1e3;
  await ae();
  const v = d.animate([{ "--md-ripple-opacity": 1, "--md-ripple-scale": 0 }, { "--md-ripple-opacity": 1, "--md-ripple-scale": 1 }, { "--md-ripple-opacity": 0, "--md-ripple-scale": 1 }], { duration: u });
  return v.addEventListener("finish", () => {
    d.remove();
  }), v;
};
let g;
const pe = (n) => {
  const e = p(() => y(n));
  let a;
  const l = async (t) => {
    const { target: o, clientX: c, clientY: m } = t;
    o instanceof Element && o === y(e) && (!g || !o.contains(g)) && (g = o, a = await se({ clientX: c, clientY: m, target: o }));
  }, s = () => {
    if (g = void 0, a?.effect instanceof KeyframeEffect) {
      const { target: t } = a.effect;
      if (t instanceof Element) {
        const c = Z(a.effect.getTiming().duration);
        a.playbackRate = c / 200;
      }
    }
  };
  f(e, "pointerdown", ({ currentTarget: t, clientX: o, clientY: c }) => {
    l({ clientX: o, clientY: c, target: t });
  }, { passive: true }), f(e, ["pointerup", "pointerout", "pointerleave", "touchend", "touchcancel", "keyup", "touchmove", "pointermove"], () => {
    s();
  });
  const r = J(({ currentTarget: t, key: o }) => {
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
  const { pressed: a, durationPressedState: l } = te(n), s = re(n), { focused: r } = ne(n, { useTarget: true, focusVisible: true }), t = e.dragged ?? b(false);
  return e.hover && L(s, e.hover), e.focused && L(r, e.focused), { hover: s, focused: r, pressed: a, durationPressedState: l, dragged: t };
};
_.__docgenInfo = Object.assign({ displayName: _.name ?? _.__name }, { exportName: "useStateLayer", displayName: "useStateLayer", description: "Collect host interaction state for a Material state layer without owning host semantics.", type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "HTMLElement | null", schema: "HTMLElement | null", declarations: [] }, { name: "__@RefSymbol@303", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", schema: "true", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/State/useStateLayer.ts" });
export {
  de as M,
  pe as a,
  re as b,
  ne as c,
  te as d,
  ue as p,
  _ as u
};
