import { d as J, r as m, c as x, b as a, e as k, Y as z, Z as w, v as d, q as K, i as s, F as Q, f as ee, t as v, y as c, j as te, o as g } from "./iframe-DLSTxgr3.js";
import { u as ae } from "./useVirtualCollection-xQwpRM_b.js";
import { _ as ne } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
const oe = { class: "virtual-collection-capability-fixture" }, ie = { class: "virtual-collection-capability-fixture__controls" }, le = ["max"], re = ["max"], se = ["data-testid", "data-item-index", "data-item-size", "data-item-offset"], ce = { "data-testid": "vcc-mounted-count" }, ue = { "data-testid": "vcc-leading-size" }, de = { "data-testid": "vcc-trailing-size" }, pe = { "data-testid": "vcc-total-size" }, A = 400, O = 240, T = 40, ve = J({ __name: "VirtualCollectionCapabilityFixture", props: { axis: { default: "vertical" }, itemCount: { default: 1e4 }, surfaceOffset: { default: 0 }, undefinedValueAt: {} }, setup(p) {
  const i = p, o = c(() => i.axis === "horizontal"), R = c(() => i.surfaceOffset > 0), l = m(Array.from({ length: i.itemCount }, (e, t) => t)), u = m({}), N = c(() => l.value.map((e) => e === i.undefinedValueAt ? void 0 : e));
  function F(e) {
    const t = l.value[e];
    if (t === void 0) throw new RangeError(`fixture: no id at index ${e}`);
    return t;
  }
  function D() {
    l.value = [...l.value].reverse();
  }
  const f = m(0);
  function M() {
    const e = l.value[f.value];
    e !== void 0 && (u.value = { ...u.value, [e]: (u.value[e] ?? 0) + 1 });
  }
  function B() {
    const e = l.value[f.value];
    if (e === void 0) return;
    const t = u.value[e] ?? 0;
    t <= 0 || (u.value = { ...u.value, [e]: t - 1 });
  }
  function P(e) {
    if (e === void 0) return o.value ? "Item undefined" : "Item undefined line 1";
    const t = u.value[e] ?? 0;
    if (o.value) return `Item ${e} ${"x".repeat(t * 12)}`;
    const n = 1 + t;
    return Array.from({ length: n }, (me, Y) => `Item ${e} line ${Y + 1}`).join(`
`);
  }
  const I = te("scrollEl"), V = m(0);
  function U() {
    const e = I.value;
    if (!e) return;
    const t = V.value * T;
    o.value ? e.scrollLeft = t : e.scrollTop = t;
  }
  function X() {
    const e = I.value;
    e && (o.value ? e.scrollLeft = Number.MAX_SAFE_INTEGER : e.scrollTop = Number.MAX_SAFE_INTEGER);
  }
  const Z = i.axis, r = ae(N, { root: () => I.value, key: (e, t) => F(t), estimateSize: T, axis: Z, overscan: 4, surfaceOffset: () => i.surfaceOffset }), G = r.vItem, H = c(() => ({ overflow: "auto", position: "relative", width: o.value ? `${A}px` : `${O}px`, height: o.value ? `${O}px` : `${A}px` })), L = c(() => ({ display: "flex", flexDirection: o.value ? "row" : "column" })), j = c(() => o.value ? { flex: "none", width: `${i.surfaceOffset}px` } : { flex: "none", height: `${i.surfaceOffset}px` }), W = c(() => ({ display: "flex", flexDirection: o.value ? "row" : "column", margin: "0", padding: "0", listStyle: "none" })), q = c(() => o.value ? { flex: "none", whiteSpace: "nowrap" } : { flex: "none" });
  function E(e) {
    return o.value ? { flex: "none", width: `${e}px` } : { flex: "none", height: `${e}px` };
  }
  return (e, t) => (g(), x("div", oe, [a("div", ie, [a("button", { type: "button", "data-testid": "vcc-toggle-reverse", onClick: D }, " Reverse order "), a("label", null, [t[2] || (t[2] = k(" Index ", -1)), z(a("input", { "onUpdate:modelValue": t[0] || (t[0] = (n) => f.value = n), type: "number", min: "0", max: l.value.length - 1, "data-testid": "vcc-index-input" }, null, 8, le), [[w, f.value, void 0, { number: true }]])]), a("button", { type: "button", "data-testid": "vcc-grow-button", onClick: M }, "Grow item"), a("button", { type: "button", "data-testid": "vcc-shrink-button", onClick: B }, " Shrink item "), a("label", null, [t[3] || (t[3] = k(" Scroll near index ", -1)), z(a("input", { "onUpdate:modelValue": t[1] || (t[1] = (n) => V.value = n), type: "number", min: "0", max: l.value.length - 1, "data-testid": "vcc-scrollto-index-input" }, null, 8, re), [[w, V.value, void 0, { number: true }]])]), a("button", { type: "button", "data-testid": "vcc-scrollto-index-button", onClick: U }, " Scroll near index "), a("button", { type: "button", "data-testid": "vcc-scrollto-end-button", onClick: X }, " Scroll to end ")]), a("div", { ref: "scrollEl", class: "virtual-collection-capability-fixture__viewport", "data-testid": "vcc-viewport", style: d(H.value) }, [a("div", { class: "virtual-collection-capability-fixture__surface", style: d(L.value) }, [R.value ? (g(), x("div", { key: 0, class: "virtual-collection-capability-fixture__pre-surface", "data-testid": "vcc-pre-surface", style: d(j.value) }, null, 4)) : K("", true), a("ul", { class: "virtual-collection-capability-fixture__list", style: d(W.value) }, [a("li", { class: "virtual-collection-capability-fixture__spacer", "data-testid": "vcc-leading-spacer", style: d(E(s(r).leadingSize.value)) }, null, 4), (g(true), x(Q, null, ee(s(r).items.value, (n) => z((g(), x("li", { key: n.key, class: "virtual-collection-capability-fixture__item", "data-testid": `vcc-item-${n.key}`, "data-item-index": n.index, "data-item-size": n.size, "data-item-offset": n.offset, style: d(q.value) }, [a("pre", null, v(P(n.value)), 1)], 12, se)), [[s(G), n]])), 128)), a("li", { class: "virtual-collection-capability-fixture__spacer", "data-testid": "vcc-trailing-spacer", style: d(E(s(r).trailingSize.value)) }, null, 4)], 4)], 4)], 4), a("output", ce, v(s(r).items.value.length), 1), a("output", ue, v(s(r).leadingSize.value), 1), a("output", de, v(s(r).trailingSize.value), 1), a("output", pe, v(s(r).totalSize.value), 1)]));
} }), $ = ne(ve, [["__scopeId", "data-v-c0b9eaad"]]), _e = { title: "Shared/virtualization/VirtualCollectionCapability", component: $, parameters: { layout: "padded", docs: { description: { component: "Deterministic fixtures proving the shared useVirtualCollection composable before database migration: bounded mounted items at scale, dynamic vertical/horizontal measurement, stable-key remapping, deep-scroll leading/trailing geometry, and unmount/remount behavior. Not production UI." } } } }, y = { args: { axis: "vertical", itemCount: 1e4 } }, _ = { args: { axis: "horizontal", itemCount: 5e3 } }, b = { args: { axis: "vertical", itemCount: 200 } }, S = { args: { axis: "vertical", itemCount: 1e4, surfaceOffset: 240 } }, C = { args: { axis: "vertical", itemCount: 20, undefinedValueAt: 5 } }, h = { render: () => ({ components: { VirtualCollectionCapabilityFixture: $ }, setup() {
  const p = m(true);
  return { mounted: p, toggle: () => {
    p.value = !p.value;
  } };
}, template: `
      <div>
        <button type="button" data-testid="mount-cycle-toggle" @click="toggle">Toggle mount</button>
        <VirtualCollectionCapabilityFixture v-if="mounted" axis="vertical" :item-count="200" />
      </div>
    ` }) };
y.parameters = { ...y.parameters, docs: { ...y.parameters?.docs, source: { originalSource: `{
  args: {
    axis: 'vertical',
    itemCount: 10000
  }
}`, ...y.parameters?.docs?.source } } };
_.parameters = { ..._.parameters, docs: { ..._.parameters?.docs, source: { originalSource: `{
  args: {
    axis: 'horizontal',
    itemCount: 5000
  }
}`, ..._.parameters?.docs?.source } } };
b.parameters = { ...b.parameters, docs: { ...b.parameters?.docs, source: { originalSource: `{
  args: {
    axis: 'vertical',
    itemCount: 200
  }
}`, ...b.parameters?.docs?.source } } };
S.parameters = { ...S.parameters, docs: { ...S.parameters?.docs, source: { originalSource: `{
  args: {
    axis: 'vertical',
    itemCount: 10000,
    surfaceOffset: 240
  }
}`, ...S.parameters?.docs?.source } } };
C.parameters = { ...C.parameters, docs: { ...C.parameters?.docs, source: { originalSource: `{
  args: {
    axis: 'vertical',
    itemCount: 20,
    undefinedValueAt: 5
  }
}`, ...C.parameters?.docs?.source } } };
h.parameters = { ...h.parameters, docs: { ...h.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      VirtualCollectionCapabilityFixture
    },
    setup() {
      const mounted = ref(true);
      const toggle = () => {
        mounted.value = !mounted.value;
      };
      return {
        mounted,
        toggle
      };
    },
    template: \`
      <div>
        <button type="button" data-testid="mount-cycle-toggle" @click="toggle">Toggle mount</button>
        <VirtualCollectionCapabilityFixture v-if="mounted" axis="vertical" :item-count="200" />
      </div>
    \`
  })
}`, ...h.parameters?.docs?.source } } };
const be = ["VerticalScale", "HorizontalScale", "RemapAndDeepScroll", "SurfaceOffset", "UndefinedSourceValue", "MountCycle"];
export {
  _ as HorizontalScale,
  h as MountCycle,
  b as RemapAndDeepScroll,
  S as SurfaceOffset,
  C as UndefinedSourceValue,
  y as VerticalScale,
  be as __namedExportsOrder,
  _e as default
};
