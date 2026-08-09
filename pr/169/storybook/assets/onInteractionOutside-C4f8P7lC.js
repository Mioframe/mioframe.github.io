import { l as E, y as g, b as p } from "./iframe-BmKBn1Mu.js";
import { d as L, t as T, g as d } from "./index-CROe5JIw.js";
import { a as k } from "./useOverlay-DJ1otShK.js";
const I = L(() => {
  const t = {}, c = (e) => {
    document.addEventListener(e, (n) => {
      t[e]?.toReversed().forEach((r) => {
        r(n);
      });
    }, { capture: true, passive: true });
  };
  return { add: (e, n) => {
    t[e] || (c(e), t[e] = []), t[e].push(n);
  }, remove: (e, n) => {
    if (t[e]) {
      const r = t[e].indexOf(n);
      r >= 0 && t[e].splice(r, 1);
    }
  } };
});
const A = (t, c, u = {}) => {
  const m = ["click", "touchstart", "keydown", "visibilitychange", "wheel"], { events: e = m, ignore: n = [] } = u, { childStack: r } = k(), i = (o) => {
    const s = o.target instanceof Node ? o.target : void 0;
    if (!s) return;
    const v = g(n).map(d);
    [d(t), ...v, ...r].some((a) => a && (a == s || a.contains(s))) || c(o);
  }, l = p(() => !!d(t)), { add: h, remove: f } = I();
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
