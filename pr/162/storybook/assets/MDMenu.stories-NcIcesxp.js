import { d as v, R, D as O, B as E, j as x, m as T, o as a, f as b, g as C, h as f, u as o, E as D, t as U, c as h, w as I, A as $, F as _, S as g, s as P, b as N, T as V, I as j, i as F, r as q } from "./iframe-955962g1.js";
import { M as B } from "./MDSymbol-6RHeOvq7.js";
import { u as A, a as H, M as z } from "./useStateLayer-Bz61Ovd7.js";
import { u as G, M as L } from "./MDMenuItemBase.vue_vue_type_style_index_0_scoped_fc574696_lang-Dosf9UR4.js";
import { _ as J } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { M as K } from "./MDButton-DJOJ8zyQ.js";
import "./MDLoadingIndicator-wOPDO_qT.js";
import "./preload-helper-PPVm8Dsz.js";
import "./index-BpWC5C2P.js";
import "./main-BRXV9cnn.js";
import "./floating-ui.vue-CcOlxF9h.js";
import "./useFocusTrap-CH1IchM4.js";
import "./_commonjsHelpers-CqkleIqs.js";
const Q = ["role"], X = { key: 0, class: "md-menu-item-base__leading" }, Y = { class: "md-menu-item-base__label" }, Z = { key: 1, class: "md-menu-item-base__trailing" }, ee = v({ __name: "MDMenuItemBase", props: g({ label: {}, itemRole: {}, symbolName: {} }, { showSubmenu: { type: Boolean }, showSubmenuModifiers: {} }), emits: g(["click"], ["update:showSubmenu"]), setup(e, { emit: r }) {
  const n = R(e, "showSubmenu"), i = e, l = r, m = O(), { label: t } = E(i), s = x("menuItemEl"), u = P(false);
  T(() => {
    n.value = u.value;
  });
  const d = () => {
    u.value = !u.value, l("click");
  }, { hover: w, focused: k, durationPressedState: S } = A(s, {});
  H(s);
  const y = N(() => s.value ? () => {
    s.value?.focus();
  } : void 0);
  return G(t, y), (M, c) => (a(), b(_, null, [C("button", { ref_key: "menuItemEl", ref: s, type: "button", class: "md-menu-item-base", role: e.itemRole ?? void 0, onClick: d }, [f(o(z), { hover: o(w), focused: o(k), pressed: o(S) }, null, 8, ["hover", "focused", "pressed"]), e.symbolName ? (a(), b("span", X, [f(o(B), { name: e.symbolName }, null, 8, ["name"])])) : D("", true), C("span", Y, U(o(t)), 1), m.submenu ? (a(), b("span", Z, [f(o(B), { name: "arrow_right" })])) : D("", true)], 8, Q), m.submenu ? (a(), h(L, { key: 0, show: u.value, "onUpdate:show": c[0] || (c[0] = (W) => u.value = W), target: s.value, "disabled-teleport": "", placement: "right-start" }, { default: I(() => [$(M.$slots, "submenu", {}, void 0, true)]), _: 3 }, 8, ["show", "target"])) : D("", true)], 64));
} }), te = J(ee, [["__scopeId", "data-v-fc574696"]]), oe = v({ __name: "MDMenuItem", props: { item: {}, itemRole: { default: "menuitem" } }, emits: ["click"], setup(e, { emit: r }) {
  const n = e, i = r, l = (t) => {
    i("click", t ?? n.item);
  }, m = (t) => {
    l(t);
  };
  return (t, s) => {
    const u = V("MDMenuItem", true);
    return a(), h(te, { label: e.item.label, "symbol-name": e.item.symbolName, "item-role": e.itemRole, onClick: l }, j({ _: 2 }, [e.item.submenu ? { name: "submenu", fn: I(() => [(a(true), b(_, null, F(e.item.submenu, (d) => (a(), h(u, { key: d.label, item: d, "item-role": e.itemRole, onClick: m }, null, 8, ["item", "item-role"]))), 128))]), key: "0" } : void 0]), 1032, ["label", "symbol-name", "item-role"]);
  };
} }), ne = v({ __name: "MDMenu", props: g({ target: {}, btns: {}, outsideIgnore: {}, disabledTeleport: { type: Boolean }, placement: { default: "bottom-start" }, ariaLabel: {}, role: { default: "menu" } }, { show: { type: Boolean, required: true }, showModifiers: {} }), emits: g(["click", "interactionOutside", "deactivateFocus"], ["update:show"]), setup(e, { emit: r }) {
  const n = R(e, "show"), i = e, l = r, { target: m, btns: t, outsideIgnore: s, placement: u } = E(i), d = (y) => {
    l("click", y);
  }, w = N(() => i.role === "listbox" ? "option" : void 0), k = () => {
    l("deactivateFocus");
  }, S = () => {
    l("interactionOutside");
  };
  return (y, M) => (a(), h(L, { show: n.value, "onUpdate:show": M[0] || (M[0] = (c) => n.value = c), target: o(m), "outside-ignore": o(s), "disabled-teleport": e.disabledTeleport, placement: o(u), "aria-label": e.ariaLabel, role: e.role, onDeactivateFocus: k, onInteractionOutside: S }, { default: I(() => [(a(true), b(_, null, F(o(t), (c) => (a(), h(oe, { key: c.key, item: c, "item-role": w.value, onClick: d }, null, 8, ["item", "item-role"]))), 128))]), _: 1 }, 8, ["show", "target", "outside-ignore", "disabled-teleport", "placement", "aria-label", "role"]));
} }), se = v({ __name: "MDMenuWithSubmenuStory", setup(e) {
  const r = x("targetEl"), n = q(false), i = [{ key: "plain", label: "Plain item" }, { key: "iconed", label: "Iconed item", symbolName: "star" }, { key: "with-submenu", label: "Has submenu", submenu: [{ key: "sub-one", label: "Submenu one" }, { key: "sub-two", label: "Submenu two" }] }], l = () => {
    n.value = !n.value;
  };
  return (m, t) => (a(), b("div", null, [f(o(K), { ref_key: "targetEl", ref: r, label: "Open menu", onClick: l }, null, 512), f(ne, { show: n.value, "onUpdate:show": t[0] || (t[0] = (s) => n.value = s), target: r.value, btns: i, "aria-label": "Story menu" }, null, 8, ["show", "target"])]));
} }), ge = { title: "shared/ui/MDMenu", parameters: { layout: "centered" } }, p = { tags: ["visual"], render: () => ({ components: { MDMenuWithSubmenuStory: se }, template: "<MDMenuWithSubmenuStory />" }) };
p.parameters = { ...p.parameters, docs: { ...p.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: () => ({
    components: {
      MDMenuWithSubmenuStory
    },
    template: '<MDMenuWithSubmenuStory />'
  })
}`, ...p.parameters?.docs?.source }, description: { story: `Deterministic, fixture-driven menu surface: leading icon, label, and a nested
submenu item with a trailing arrow icon. Used by Playwright to verify the menu
surface, item rendering, and submenu positioning/focus without depending on
\`MDListContainer\` or any List-owned layout.`, ...p.parameters?.docs?.description } } };
const ve = ["WithSubmenu"];
export {
  p as WithSubmenu,
  ve as __namedExportsOrder,
  ge as default
};
