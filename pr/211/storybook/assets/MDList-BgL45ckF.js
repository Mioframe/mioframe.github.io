import { y as t, J as Se, L as xe, d as ue, k as Ee, u as de, j as M, l as Le, n as ke, o as r, p as $, w as K, c as m, F as le, x as q, m as z, a as De, i as a, s as D, h as g, q as f, b as T, e as I, t as _, r as Ie } from "./iframe-DXgE0LVc.js";
import { u as Ce, a as Me, M as ne } from "./useStateLayer-C5Vvm0Zv.js";
import { i as $e, u as Ve, a as Be, b as Re } from "./MDList.vue_vue_type_style_index_0_scoped_7da43f85_lang-D97YSQjd.js";
import { _ as ce } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const oe = (e) => e === "class" || e === "style" || e === "id" || e.startsWith("data-"), Oe = (e, b) => {
  if (!b) return { rootAttrs: e, interactiveAttrs: {} };
  const l = Object.entries(e).filter(([d]) => oe(d)), i = Object.entries(e).filter(([d]) => !oe(d));
  return { rootAttrs: Object.fromEntries(l), interactiveAttrs: Object.fromEntries(i) };
}, me = /* @__PURE__ */ Symbol("md-list-context"), C = (e) => typeof e == "boolean" || typeof e == "number" || typeof e == "string", re = (e, b) => e.some((l) => Object.is(l, b)), je = (e, b, l, i, d) => {
  const v = [], c = [], u = t(() => {
    if (l.value === "none") return [];
    const s = i.value;
    return l.value === "multiple" ? Array.isArray(s) ? s.filter(C) : [] : C(s) ? [s] : [];
  }), p = { itemTag: t(() => b.value === "ul" ? "li" : "div"), listStyle: t(() => e.value), selectionMode: t(() => l.value), usesListSemantics: t(() => true), isItemSelected(s) {
    return !C(s) || l.value === "none" ? false : re(u.value, s);
  }, selectItem(s) {
    if (!C(s) || l.value === "none") return;
    if (l.value === "single") {
      d(s);
      return;
    }
    const n = re(u.value, s) ? u.value.filter((S) => !Object.is(S, s)) : [...u.value, s];
    d(n);
  }, selectionRegistry: { getItems: () => v, registerItem(s) {
    return v.push(s), () => {
      const n = v.indexOf(s);
      n >= 0 && v.splice(n, 1);
    };
  } }, actionRegistry: { getItems: () => c, registerItem(s) {
    return c.push(s), () => {
      const n = c.indexOf(s);
      n >= 0 && c.splice(n, 1);
    };
  } } };
  return xe(me, p), p;
}, Pe = () => Se(me, null), Ne = { class: "md-list-item__content" }, we = { key: 0, class: "md-list-item__overline" }, Fe = { class: "md-list-item__label-text" }, Ke = { key: 1, class: "md-list-item__trailing" }, qe = ["inert"], ze = { class: "md-list-item__body" }, Je = { class: "md-list-item__content" }, We = { key: 0, class: "md-list-item__overline" }, Xe = { class: "md-list-item__label-text" }, Ye = { key: 1, class: "md-list-item__trailing" }, Ge = ue({ inheritAttrs: false, __name: "MDListItem", props: { containerTag: { default: "div" }, disabled: { type: Boolean }, draggable: { type: Boolean }, dragged: { type: Boolean }, href: {}, labelText: {}, leadingType: { default: "icon" }, lineCount: {}, mode: { default: "static" }, nativeType: { default: "button" }, overline: {}, supportingText: {} }, emits: ["action"], setup(e, { expose: b, emit: l }) {
  const i = e, d = l, v = Ee(), c = de(), u = Pe(), p = t(() => i.mode === "multi-action" && !!v.trailingAction), s = t(() => u?.usesListSemantics.value ?? false), n = t(() => u?.selectionMode.value ?? "none"), S = t(() => u?.listStyle.value ?? "standard"), J = t(() => s.value && n.value !== "none"), h = t(() => i.mode !== "static"), ve = t(() => h.value && !!i.href), W = t(() => h.value && !i.href), fe = t(() => p.value && (!s.value || n.value === "none")), x = t(() => h.value && (s.value ? !J.value : i.mode === "multi-action")), y = t(() => h.value && !s.value && !x.value), E = t(() => ve.value && i.disabled), { hasLeading: X, hasOverline: Y, hasSupportingText: G, hasTrailing: H, resolvedLineCount: V, hostStyle: ge, leadingClass: Q, supportingTextClass: U } = Ve(i, v, "md-list-item"), B = t(() => s.value ? u?.itemTag.value ?? "div" : y.value ? i.href ? "a" : "button" : i.containerTag), be = t(() => {
    if (s.value) return J.value ? "none" : B.value === "li" ? void 0 : "listitem";
    if (B.value !== "li") return typeof c.role == "string" ? c.role : void 0;
  }), ye = t(() => i.href ? "a" : "button"), L = t(() => h.value && !i.disabled), Z = t(() => i.href ? void 0 : i.nativeType), R = M("rootEl"), A = M("primaryActionEl"), ee = M("trailingActionEl"), te = () => ee.value?.querySelector("button, a[href], [tabindex]") ?? null, O = t(() => x.value ? A.value : y.value ? R.value : null), k = Ie(false), { hover: j, focused: P, durationPressedState: N } = Ce(O, { dragged: k }), w = t(() => i.dragged || k.value), pe = t(() => ({ "md-list-item": true, "md-list-item_in-list": s.value, "md-list-item_list-style_segmented": s.value && S.value === "segmented", "md-list-item_has-trailing-action": p.value, "md-list-item_mode_static": i.mode === "static", "md-list-item_mode_single-action": i.mode === "single-action", "md-list-item_mode_multi-action": i.mode === "multi-action", "md-list-item_line-count_1": V.value === 1, "md-list-item_line-count_2": V.value === 2, "md-list-item_line-count_3": V.value === 3, "md-state_hover": L.value && j.value, "md-state_focused": L.value && P.value, "md-state_pressed": L.value && N.value, "md-state_dragged": L.value && w.value, "md-state_disabled": i.disabled })), se = t(() => Oe(c, x.value)), _e = t(() => se.value.rootAttrs), he = t(() => se.value.interactiveAttrs), ie = (o) => {
    if (i.disabled) {
      i.href && (o.preventDefault(), o.stopPropagation());
      return;
    }
    d("action", o);
  }, Ae = (o) => {
    y.value && ie(o);
  }, Te = () => {
    i.disabled || (k.value = true);
  }, ae = () => {
    k.value = false;
  };
  let F = null;
  return Le(() => {
    s.value && (F = u?.actionRegistry.registerItem({ getPrimaryElement: () => A.value ?? null, getTrailingElement: te, isPrimaryDisabled: () => !!i.disabled, isTrailingDisabled: () => !!i.disabled || !$e(te()) }) ?? null);
  }), ke(() => {
    F?.(), F = null;
  }), Me(t(() => i.disabled ? void 0 : O.value)), b({ focusPrimaryAction() {
    A.value?.focus(), A.value || R.value?.focus();
  }, getPrimaryActionElement() {
    return O.value;
  } }), (o, Qe) => (r(), $(q(B.value), z({ ref_key: "rootEl", ref: R }, _e.value, { class: pe.value, style: a(ge), role: be.value, "aria-disabled": y.value && E.value ? "true" : void 0, href: y.value ? e.href : void 0, type: y.value ? Z.value : void 0, disabled: y.value && W.value && e.disabled ? true : void 0, tabindex: y.value && E.value ? -1 : void 0, draggable: e.disabled ? void 0 : e.draggable, onClick: Ae, onDragstart: Te, onDragend: ae, onDrop: ae }), { default: K(() => [x.value ? (r(), m(le, { key: 0 }, [(r(), $(q(ye.value), z({ ref_key: "primaryActionEl", ref: A }, he.value, { class: "md-list-item__primary-action", href: e.href, type: Z.value, disabled: W.value && e.disabled ? true : void 0, "aria-disabled": E.value ? "true" : void 0, tabindex: E.value ? -1 : void 0, onClick: ie }), { default: K(() => [De(a(ne), { hover: a(j), focused: a(P), pressed: a(N), dragged: w.value, disabled: e.disabled }, null, 8, ["hover", "focused", "pressed", "dragged", "disabled"]), a(X) ? (r(), m("span", { key: 0, class: D(["md-list-item__leading", a(Q)]) }, [g(o.$slots, "leading", {}, void 0, true)], 2)) : f("", true), T("span", Ne, [a(Y) ? (r(), m("span", we, [g(o.$slots, "overline", {}, () => [I(_(e.overline), 1)], true)])) : f("", true), T("span", Fe, _(e.labelText), 1), a(G) ? (r(), m("span", { key: 1, class: D(["md-list-item__supporting-text", a(U)]) }, [g(o.$slots, "supportingText", {}, () => [I(_(e.supportingText), 1)], true)], 2)) : f("", true)]), a(H) ? (r(), m("span", Ke, [g(o.$slots, "trailing", {}, void 0, true)])) : f("", true)]), _: 3 }, 16, ["href", "type", "disabled", "aria-disabled", "tabindex"])), fe.value ? (r(), m("span", { key: 0, ref_key: "trailingActionEl", ref: ee, class: "md-list-item__trailing-action", inert: e.disabled || void 0 }, [g(o.$slots, "trailingAction", {}, void 0, true)], 8, qe)) : f("", true)], 64)) : (r(), m(le, { key: 1 }, [y.value ? (r(), $(a(ne), { key: 0, hover: a(j), focused: a(P), pressed: a(N), dragged: w.value, disabled: e.disabled }, null, 8, ["hover", "focused", "pressed", "dragged", "disabled"])) : f("", true), T("span", ze, [a(X) ? (r(), m("span", { key: 0, class: D(["md-list-item__leading", a(Q)]) }, [g(o.$slots, "leading", {}, void 0, true)], 2)) : f("", true), T("span", Je, [a(Y) ? (r(), m("span", We, [g(o.$slots, "overline", {}, () => [I(_(e.overline), 1)], true)])) : f("", true), T("span", Xe, _(e.labelText), 1), a(G) ? (r(), m("span", { key: 1, class: D(["md-list-item__supporting-text", a(U)]) }, [g(o.$slots, "supportingText", {}, () => [I(_(e.supportingText), 1)], true)], 2)) : f("", true)]), a(H) ? (r(), m("span", Ye, [g(o.$slots, "trailing", {}, void 0, true)])) : f("", true)])], 64))]), _: 3 }, 16, ["class", "style", "role", "aria-disabled", "href", "type", "disabled", "tabindex", "draggable"]));
} }), st = ce(Ge, [["__scopeId", "data-v-a4eb7a1a"]]), He = ue({ inheritAttrs: false, __name: "MDList", props: { modelValue: { type: [Boolean, Number, String, Array] }, listStyle: { default: "standard" }, selectionMode: { default: "none" }, tag: { default: "div" } }, emits: ["update:modelValue"], setup(e, { emit: b }) {
  const l = e, i = b, d = M("containerEl"), v = t(() => l.listStyle), c = t(() => l.selectionMode === "none" ? l.tag : "div"), u = je(v, c, t(() => l.selectionMode), t(() => l.modelValue), (n) => {
    i("update:modelValue", n);
  }), p = t(() => l.selectionMode !== "none" ? "listbox" : c.value === "ul" ? null : "list"), s = t(() => l.selectionMode !== "none");
  return Be(d, s, u.selectionRegistry), de(), Re(d, t(() => !s.value), u.actionRegistry), (n, S) => (r(), $(q(c.value), z({ ref_key: "containerEl", ref: d }, n.$attrs, { class: ["md-list", [`md-list_style_${v.value}`, `md-list_selection-mode_${e.selectionMode}`]], role: p.value, "aria-multiselectable": e.selectionMode === "multiple" ? "true" : void 0 }), { default: K(() => [g(n.$slots, "default", {}, void 0, true)]), _: 3 }, 16, ["class", "role", "aria-multiselectable"]));
} }), it = ce(He, [["__scopeId", "data-v-7da43f85"]]);
export {
  st as M,
  it as a,
  Pe as u
};
