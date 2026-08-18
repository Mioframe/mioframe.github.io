import { d as C, j as D, o as m, c as b, s as N, p as g, i as s, q as L, b as S, a as E, t as O, y as v, S as G, F as q, f as F, T as I, L as T, J as H, C as Q, D as M } from "./iframe-Cs7PXa1J.js";
import { b as A, c as $, d as j, a as V, M as w } from "./useStateLayer-C3LfESGZ.js";
import { M as W } from "./MDSymbol-C1e1Iab2.js";
import { _ as K } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./useOverlay-Du8-D_qA.js";
import { t as Z } from "./index-RiRbiydp.js";
import "./useLocalSettings-DtI8Fuf-.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-L1RBoJhT.js";
import { M as U } from "./MDIconButton-Ca4woIeB.js";
function ee(e, i = 0) {
  if (!Number.isInteger(i)) throw new Error("Precision must be an integer.");
  const t = Math.pow(10, i);
  return Math.round(e * t) / t;
}
var p = ((e) => (e.collapsed = "collapsed", e.expanded = "expanded", e))(p || {}), _ = ((e) => (e.vertical = "vertical", e.railHorizontal = "rail-horizontal", e))(_ || {});
const te = { class: "md-navigation-rail-button__symbol-container" }, ae = { class: "md-navigation-rail-button__label" }, oe = C({ __name: "MDNavigationRailButton", props: { symbol: {}, label: {}, active: { type: Boolean }, type: {}, hasRipple: { type: Boolean } }, emits: ["click"], setup(e, { emit: i }) {
  const t = e, a = i, o = D("refEl"), u = A(o), { focused: r } = $(o, { useTarget: true, focusVisible: true }), { durationPressedState: c } = j(o);
  V(v(() => t.hasRipple ? o.value : void 0));
  const d = v(() => t.type === _.railHorizontal), y = (f) => {
    a("click", f);
  };
  return (f, R) => (m(), b("button", { ref_key: "refEl", ref: o, type: "button", class: N(["md-navigation-rail-button md", [{ _active: e.active }, `_type-${e.type}`]]), onClick: y }, [d.value ? (m(), g(s(w), { key: 0, hover: s(u), focused: s(r), pressed: s(c) }, null, 8, ["hover", "focused", "pressed"])) : L("", true), S("span", te, [e.type === s(_).vertical ? (m(), g(s(w), { key: 0, hover: s(u), focused: s(r), pressed: s(c) }, null, 8, ["hover", "focused", "pressed"])) : L("", true), E(s(W), { class: "md-navigation-rail-button__symbol", name: e.symbol }, null, 8, ["name"])]), S("span", ae, O(e.label), 1)], 2));
} }), ne = K(oe, [["__scopeId", "data-v-518bf59b"]]);
p.collapsed;
const se = { class: "md-navigation-bar-button__label" }, ie = C({ __name: "MDNavigationBarButton", props: { label: {}, symbol: {}, active: { type: Boolean }, type: {} }, emits: ["click"], setup(e, { emit: i }) {
  const t = i, a = D("el");
  V(a);
  const o = A(a), { focused: u } = $(a, { useTarget: true, focusVisible: true }), { durationPressedState: r } = j(a), c = (d) => {
    t("click", d);
  };
  return (d, y) => (m(), b("button", { ref_key: "el", ref: a, class: N(["md-navigation-bar-button md", [{ _active: e.active }, `_type-${e.type}`]]), type: "button", onClick: c }, [E(s(w), { hover: s(o), focused: s(u), pressed: s(r) }, null, 8, ["hover", "focused", "pressed"]), E(s(W), { class: "md-navigation-bar-button__symbol", name: e.symbol }, null, 8, ["name"]), S("span", se, O(e.label), 1)], 2));
} }), re = K(ie, [["__scopeId", "data-v-2183c128"]]);
var J = ((e) => (e.vertical = "vertical", e.horizontal = "horizontal", e))(J || {});
J.vertical;
const le = /* @__PURE__ */ Symbol("splitLayoutKey"), P = (e) => {
  T(le, e);
};
P.__docgenInfo = Object.assign({ displayName: P.name ?? P.__name }, { exportName: "setupSplitLayoutContext", displayName: "setupSplitLayoutContext", type: 2, props: [{ name: "numberOfPanes", global: false, description: "", tags: [], required: true, type: "Ref<number, number>", schema: "Ref<number, number>", declarations: [] }, { name: "bodyLeft", global: false, description: "", tags: [], required: true, type: "Ref<number, number>", schema: "Ref<number, number>", declarations: [] }, { name: "bodyWidth", global: false, description: "", tags: [], required: true, type: "Ref<number, number>", schema: "Ref<number, number>", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Layout/useSplitLayoutContext.ts" });
const ue = /* @__PURE__ */ Symbol("allowedBottomNavigation"), k = (e) => {
  const i = H(ue);
  if (!i) throw new Error("Split layout is not provided");
  const { numberOfBottomNavigationBans: t } = i;
  Q(e, (a) => {
    a ? t.value = Math.max(t.value - 1, 0) : t.value += 1;
  }, { immediate: true }), Z(() => {
    e.value || (t.value -= 1);
  });
};
k.__docgenInfo = Object.assign({ displayName: k.name ?? k.__name }, { exportName: "defineAllowedBottomNavigation", displayName: "defineAllowedBottomNavigation", description: "\u0414\u0430\u0451\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0438\u0436\u043D\u0435\u0433\u043E \u0431\u0430\u0440\u0430 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0441 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u043C Pane", type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "boolean", schema: "boolean", declarations: [] }, { name: "__@RefSymbol@415", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", schema: "true", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Layout/allowedBottomNavigation.ts" });
const B = ({ panesWidth: e, bodyLeft: i, bodyWidth: t }) => {
  const a = M(), o = M(), u = M(), r = (n) => {
    const l = Math.max(t.value, 0);
    return Math.min(l, Math.max(0, ee(n - i.value)));
  }, c = () => {
    a.value = void 0, o.value = void 0, u.value = void 0;
  }, d = () => {
    const n = u.value, l = o.value;
    l !== void 0 && n?.hasPointerCapture(l) && n.releasePointerCapture(l);
  };
  return { activeResizePaneIndex: a, onResizePointerDown: (n, l) => {
    const { currentTarget: h } = l;
    if (h instanceof HTMLElement) {
      const { previousElementSibling: z } = h;
      z instanceof HTMLElement && (l.preventDefault(), e.value[n] = z.offsetWidth, a.value = n, o.value = l.pointerId, u.value = h, h.setPointerCapture(l.pointerId));
    }
  }, onResizePointerEnd: (n) => {
    n.pointerId === o.value && (d(), c());
  }, onResizeLostPointerCapture: (n) => {
    n.pointerId === o.value && c();
  }, onBodyPointerMove: (n) => {
    a.value !== void 0 && n.pointerId === o.value && (e.value[a.value] = r(n.clientX));
  } };
};
B.__docgenInfo = Object.assign({ displayName: B.name ?? B.__name }, { exportName: "usePaneResize", displayName: "usePaneResize", type: 2, props: [{ name: "panesWidth", global: false, description: "", tags: [], required: true, type: "Readonly<Ref<number[], number[]>>", schema: "Readonly<Ref<number[], number[]>>", declarations: [] }, { name: "bodyLeft", global: false, description: "", tags: [], required: true, type: "Readonly<Ref<number, number>>", schema: "Readonly<Ref<number, number>>", declarations: [] }, { name: "bodyWidth", global: false, description: "", tags: [], required: true, type: "Readonly<Ref<number, number>>", schema: "Readonly<Ref<number, number>>", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Layout/usePaneResize.ts" });
const X = /* @__PURE__ */ Symbol("PROVIDE_PANE_SCROLL_CONTAINER_KEY"), ce = v(() => document.body), x = (e) => {
  T(X, v(() => e.value));
}, Ce = () => H(X, ce);
x.__docgenInfo = Object.assign({ displayName: x.name ?? x.__name }, { exportName: "definePaneScrollContainer", displayName: "definePaneScrollContainer", description: `Provides the pane body scroll container element for descendants to inject via
.`, type: 2, props: [{ name: "value", global: false, description: "", tags: [], required: true, type: "HTMLElement | null | undefined", schema: "HTMLElement | null | undefined", declarations: [] }, { name: "__@RefSymbol@415", global: false, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: true, type: "true", schema: "true", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/Layout/paneScrollContainer.ts" });
export {
  x as d,
  Ce as u
};
