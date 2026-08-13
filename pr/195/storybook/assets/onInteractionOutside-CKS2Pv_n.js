import { B as E, M as p, h as g } from "./iframe-CkW-Uv9T.js";
import { c as L, t as T, e as d } from "./index-yJ5c8bZu.js";
import { a as k } from "./useOverlay-CNcCrluY.js";
const I = L(() => {
  const t = {}, r = (e) => {
    document.addEventListener(e, (n) => {
      t[e]?.toReversed().forEach((c) => {
        c(n);
      });
    }, { capture: true, passive: true });
  };
  return { add: (e, n) => {
    t[e] || (r(e), t[e] = []), t[e].push(n);
  }, remove: (e, n) => {
    if (t[e]) {
      const c = t[e].indexOf(n);
      c >= 0 && t[e].splice(c, 1);
    }
  } };
});
const A = (t, r, u = {}) => {
  const m = ["click", "touchstart", "keydown", "visibilitychange", "wheel"], { events: e = m, ignore: n = [] } = u, { childStack: c } = k(), i = (o) => {
    const s = o.target instanceof Node ? o.target : void 0;
    if (!s) return;
    const v = p(n).map(d);
    [d(t), ...v, ...c].some((a) => a && (a == s || a.contains(s))) || r(o);
  }, l = g(() => !!d(t)), { add: h, remove: f } = I();
  E(l, (o) => {
    o ? e.forEach((s) => {
      h(s, i);
    }) : e.forEach((s) => {
      f(s, i);
    });
  }, { immediate: true }), T(() => {
    e.forEach((o) => {
      f(o, i);
    });
  });
};
export {
  A as o
};
