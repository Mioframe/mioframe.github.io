import { p as h, t as C, e as S, q as b } from "./index-CjB46UOO.js";
import { l as k, a2 as O, J as c, C as y, W as w, g as _, y as d, L as m } from "./iframe-ClDK6gw7.js";
const v = (e) => e instanceof Element ? e : e?.$el instanceof HTMLElement ? e.$el : e?.$parent ? v(e.$parent) : document.body, g = () => {
  const e = O(), t = h(() => {
  }, () => {
    if (e?.proxy) return v(e.proxy);
  });
  return k(t.trigger), t;
}, p = /* @__PURE__ */ Symbol("childrenStackKey"), x = () => {
  const e = w(/* @__PURE__ */ new Set()), t = c(p, void 0), o = t ? c(t) : void 0, n = /* @__PURE__ */ Symbol("childrenStackKey");
  return m(p, n), m(n, { add: (r) => {
    e.add(r), o?.add(r);
  }, remove: (r) => {
    e.delete(r), o?.remove(r);
  } }), { childStack: e };
}, l = _(/* @__PURE__ */ new Map()), A = (e) => {
  const t = d(() => S(e)), o = c(p, void 0), n = o ? c(o, void 0) : void 0;
  y(t, (i, s) => {
    s && (n?.remove(s), l.delete(s)), i && n?.add(i);
  }, { immediate: true });
  const a = g();
  y([t, a], ([i, s], [r]) => {
    r && l.delete(r), i && s && l.set(i, s);
  }, { immediate: true }), C(() => {
    t.value && (n?.remove(t.value), l.delete(t.value));
  });
}, f = (e, t) => {
  if (e instanceof Element) {
    const n = l.get(e);
    if (n && n.matches(t)) return n;
    const a = e.parentElement;
    return a ? a.matches(t) ? a : f(a, t) : document.body;
  }
  const o = e.$parent;
  if (o) {
    const n = v(o);
    return n.matches(t) ? n : f(o, t);
  }
  return document.body;
}, E = /* @__PURE__ */ Symbol("overlay-container"), u = (e) => {
  m(E, d(() => e.value));
}, I = () => {
  const e = b(), t = d(() => {
    const n = e.value;
    return n ? f(n, "[data-v-app]") : document.body;
  }), o = c(E, t);
  return d(() => o.value ?? t.value);
};
u.__docgenInfo = Object.assign({ displayName: u.name ?? u.__name }, { exportName: "provideOverlayContainer", displayName: "provideOverlayContainer", type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "HTMLElement | SVGElement | null | undefined", schema: "HTMLElement | SVGElement | null | undefined", declarations: [] }, { name: "__@RefSymbol@403", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", schema: "true", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Overlay/useOverlay.ts" });
export {
  x as a,
  A as b,
  I as u
};
