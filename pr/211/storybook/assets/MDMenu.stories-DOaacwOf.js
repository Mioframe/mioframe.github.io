import { d as g, S as R, k as O, B as x, H as T, o as a, c as b, F as _, b as C, a as f, i as o, q as D, t as U, p as h, w as I, h as $, T as v, j as E, D as P, y as N, Q as V, f as F, U as j, r as q } from "./iframe-BHNpv72I.js";
import { M as B } from "./MDSymbol-DLr1yvVw.js";
import { u as H, a as Q, M as z } from "./useStateLayer-CQEnkQc3.js";
import { u as A, M as L } from "./MDMenuItemBase.vue_vue_type_style_index_0_scoped_fc574696_lang-C0mzT9aB.js";
import { _ as G } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { M as J } from "./MDButton-CZqaqqZE.js";
import "./MDCheckbox.vue_vue_type_style_index_0_scoped_45affbd6_lang-BcMr9jHw.js";
import "./fab-BM7C4Glz.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_fd42f7e0_lang-ScYAOCNP.js";
import "./MDSwitch.vue_vue_type_style_index_0_scoped_579f9506_lang-BGea3e5O.js";
import "./preload-helper-PPVm8Dsz.js";
import "./main-oiYrEGnf.js";
import "./index-CNOjDb4i.js";
import "./useFocusTrap-BywGL3ZE.js";
import "./_commonjsHelpers-CqkleIqs.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_4eb981d2_lang-DV1aMrhv.js";
import "./core-CHv0XPlm.js";
import "./MDLoadingIndicator-BRmkSdIH.js";
const K = ["role"], X = { key: 0, class: "md-menu-item-base__leading" }, Y = { class: "md-menu-item-base__label" }, Z = { key: 1, class: "md-menu-item-base__trailing" }, ee = g({ __name: "MDMenuItemBase", props: v({ label: {}, itemRole: {}, symbolName: {} }, { showSubmenu: { type: Boolean }, showSubmenuModifiers: {} }), emits: v(["click"], ["update:showSubmenu"]), setup(e, { emit: r }) {
  const n = R(e, "showSubmenu"), i = e, l = r, m = O(), { label: t } = x(i), s = E("menuItemEl"), u = P(false);
  T(() => {
    n.value = u.value;
  });
  const d = () => {
    u.value = !u.value, l("click");
  }, { hover: w, focused: k, durationPressedState: S } = H(s, {});
  Q(s);
  const y = N(() => s.value ? () => {
    s.value?.focus();
  } : void 0);
  return A(t, y), (M, c) => (a(), b(_, null, [C("button", { ref_key: "menuItemEl", ref: s, type: "button", class: "md-menu-item-base", role: e.itemRole ?? void 0, onClick: d }, [f(o(z), { hover: o(w), focused: o(k), pressed: o(S) }, null, 8, ["hover", "focused", "pressed"]), e.symbolName ? (a(), b("span", X, [f(o(B), { name: e.symbolName }, null, 8, ["name"])])) : D("", true), C("span", Y, U(o(t)), 1), m.submenu ? (a(), b("span", Z, [f(o(B), { name: "arrow_right" })])) : D("", true)], 8, K), m.submenu ? (a(), h(L, { key: 0, show: u.value, "onUpdate:show": c[0] || (c[0] = (W) => u.value = W), target: s.value, "disabled-teleport": "", placement: "right-start" }, { default: I(() => [$(M.$slots, "submenu", {}, void 0, true)]), _: 3 }, 8, ["show", "target"])) : D("", true)], 64));
} }), te = G(ee, [["__scopeId", "data-v-fc574696"]]), oe = g({ __name: "MDMenuItem", props: { item: {}, itemRole: { default: "menuitem" } }, emits: ["click"], setup(e, { emit: r }) {
  const n = e, i = r, l = (t) => {
    i("click", t ?? n.item);
  }, m = (t) => {
    l(t);
  };
  return (t, s) => {
    const u = j("MDMenuItem", true);
    return a(), h(te, { label: e.item.label, "symbol-name": e.item.symbolName, "item-role": e.itemRole, onClick: l }, V({ _: 2 }, [e.item.submenu ? { name: "submenu", fn: I(() => [(a(true), b(_, null, F(e.item.submenu, (d) => (a(), h(u, { key: d.label, item: d, "item-role": e.itemRole, onClick: m }, null, 8, ["item", "item-role"]))), 128))]), key: "0" } : void 0]), 1032, ["label", "symbol-name", "item-role"]);
  };
} }), ne = g({ __name: "MDMenu", props: v({ target: {}, btns: {}, outsideIgnore: {}, disabledTeleport: { type: Boolean }, placement: { default: "bottom-start" }, ariaLabel: {}, role: { default: "menu" } }, { show: { type: Boolean, required: true }, showModifiers: {} }), emits: v(["click", "interactionOutside", "deactivateFocus"], ["update:show"]), setup(e, { emit: r }) {
  const n = R(e, "show"), i = e, l = r, { target: m, btns: t, outsideIgnore: s, placement: u } = x(i), d = (y) => {
    l("click", y);
  }, w = N(() => i.role === "listbox" ? "option" : void 0), k = () => {
    l("deactivateFocus");
  }, S = () => {
    l("interactionOutside");
  };
  return (y, M) => (a(), h(L, { show: n.value, "onUpdate:show": M[0] || (M[0] = (c) => n.value = c), target: o(m), "outside-ignore": o(s), "disabled-teleport": e.disabledTeleport, placement: o(u), "aria-label": e.ariaLabel, role: e.role, onDeactivateFocus: k, onInteractionOutside: S }, { default: I(() => [(a(true), b(_, null, F(o(t), (c) => (a(), h(oe, { key: c.key, item: c, "item-role": w.value, onClick: d }, null, 8, ["item", "item-role"]))), 128))]), _: 1 }, 8, ["show", "target", "outside-ignore", "disabled-teleport", "placement", "aria-label", "role"]));
} }), se = g({ __name: "MDMenuWithSubmenuStory", setup(e) {
  const r = E("targetEl"), n = q(false), i = [{ key: "plain", label: "Plain item" }, { key: "iconed", label: "Iconed item", symbolName: "star" }, { key: "with-submenu", label: "Has submenu", submenu: [{ key: "sub-one", label: "Submenu one" }, { key: "sub-two", label: "Submenu two" }] }], l = () => {
    n.value = !n.value;
  };
  return (m, t) => (a(), b("div", null, [f(o(J), { ref_key: "targetEl", ref: r, label: "Open menu", onClick: l }, null, 512), f(ne, { show: n.value, "onUpdate:show": t[0] || (t[0] = (s) => n.value = s), target: r.value, btns: i, "aria-label": "Story menu" }, null, 8, ["show", "target"])]));
} }), Ie = { title: "shared/ui/MDMenu", parameters: { layout: "centered" } }, p = { tags: ["visual"], render: () => ({ components: { MDMenuWithSubmenuStory: se }, template: "<MDMenuWithSubmenuStory />" }) };
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
const Ce = ["WithSubmenu"];
export {
  p as WithSubmenu,
  Ce as __namedExportsOrder,
  Ie as default
};
