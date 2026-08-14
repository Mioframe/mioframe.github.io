import { B as a, C as n } from "./iframe-Ck9zoa4y.js";
import { c as I, o as L, u as l, a as P, t as R } from "./index-DPLatO-f.js";
const A = () => {
  const r = n();
  L(["Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown", "Enter", " "], () => {
    r.value = true;
  }, { passive: true }), l(["mousedown", "touchstart", "pointerdown"], () => {
    r.value = false;
  }, { passive: true, capture: true });
  const c = n(), d = n();
  l("focusin", ({ target: e }) => {
    r.value && e instanceof HTMLElement && (c.value = e);
  }, { passive: true });
  const t = document.createElement("div");
  t.classList.add("md-focus-indicator"), document.body.appendChild(t);
  const m = () => {
    t.style.opacity = "0";
  }, p = () => {
    t.style.opacity = "1";
  }, h = ({ top: e, left: o, width: s, height: i }) => {
    t.style.top = `${e}px`, t.style.left = `${o}px`, t.style.width = `${s}px`, t.style.height = `${i}px`;
  }, { top: v, left: w, width: g, height: b } = P(d, { immediate: true, updateTiming: "next-frame", reset: false });
  l(window, "blur", () => {
    c.value = void 0;
  });
  const f = n(), S = ["--md-focus-indicator-color", "--md-focus-indicator-thickness", "--md-focus-indicator-offset"];
  a(c, (e) => {
    if (e && !e.classList.contains("md-focus-indicator_hidden")) {
      p();
      const o = e.querySelector("[data-md-focus-indicator-target]"), s = o instanceof HTMLElement ? o : e;
      d.value = s;
      const i = getComputedStyle(s);
      f.value = i.borderRadius;
      const E = getComputedStyle(e);
      for (const u of S) {
        const y = E.getPropertyValue(u).trim();
        y ? t.style.setProperty(u, y) : t.style.removeProperty(u);
      }
    } else d.value = void 0, m();
  }, { immediate: true }), a(f, (e) => {
    t.style.borderRadius = e ?? "";
  }, { immediate: true }), a([v, w, g, b], ([e, o, s, i]) => {
    h({ top: e, left: o, width: s, height: i });
  }, { immediate: true }), a(r, (e) => {
    e ? p() : m();
  }, { immediate: true }), R(() => {
    t.remove();
  });
}, $ = I(A);
export {
  $ as u
};
