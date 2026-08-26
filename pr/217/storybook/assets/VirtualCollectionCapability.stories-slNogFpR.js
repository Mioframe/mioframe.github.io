import { d as K, r as p, c as x, b as a, e as E, Y as k, Z as A, v as f, q as Q, i as c, F as ee, f as te, t as v, y as u, j as ae, o as g } from "./iframe-BfQTtrCL.js";
import { u as ne } from "./useVirtualCollection-Dg5wpov2.js";
import { _ as oe } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
const re = { class: "virtual-collection-capability-fixture" }, ie = { class: "virtual-collection-capability-fixture__controls" }, le = ["max"], se = ["max"], ce = ["data-testid", "data-item-index", "data-item-size", "data-item-offset"], ue = { "data-testid": "vcc-mounted-count" }, de = { "data-testid": "vcc-leading-size" }, fe = { "data-testid": "vcc-trailing-size" }, pe = { "data-testid": "vcc-total-size" }, T = 400, $ = 240, F = 40, ve = K({ __name: "VirtualCollectionCapabilityFixture", props: { axis: { default: "vertical" }, itemCount: { default: 1e4 }, surfaceOffset: { default: 0 }, undefinedValueAt: {} }, setup(i) {
  const r = i, o = u(() => r.axis === "horizontal"), R = u(() => r.surfaceOffset > 0), l = p(Array.from({ length: r.itemCount }, (e, t) => t)), d = p({}), N = u(() => l.value.map((e) => e === r.undefinedValueAt ? void 0 : e));
  function D(e) {
    const t = l.value[e];
    if (t === void 0) throw new RangeError(`fixture: no id at index ${e}`);
    return t;
  }
  function M() {
    l.value = [...l.value].reverse();
  }
  const m = p(0);
  function B() {
    const e = l.value[m.value];
    e !== void 0 && (d.value = { ...d.value, [e]: (d.value[e] ?? 0) + 1 });
  }
  function P() {
    const e = l.value[m.value];
    if (e === void 0) return;
    const t = d.value[e] ?? 0;
    t <= 0 || (d.value = { ...d.value, [e]: t - 1 });
  }
  function U(e) {
    if (e === void 0) return o.value ? "Item undefined" : "Item undefined line 1";
    const t = d.value[e] ?? 0;
    if (o.value) return `Item ${e} ${"x".repeat(t * 12)}`;
    const n = 1 + t;
    return Array.from({ length: n }, (me, J) => `Item ${e} line ${J + 1}`).join(`
`);
  }
  const V = ae("scrollEl"), I = p(0);
  function X() {
    const e = V.value;
    if (!e) return;
    const t = I.value * F;
    o.value ? e.scrollLeft = t : e.scrollTop = t;
  }
  function Z() {
    const e = V.value;
    e && (o.value ? e.scrollLeft = Number.MAX_SAFE_INTEGER : e.scrollTop = Number.MAX_SAFE_INTEGER);
  }
  const G = r.axis, s = ne(N, { root: () => V.value, key: (e, t) => D(t), estimateSize: F, axis: G, overscan: 4, surfaceOffset: () => r.surfaceOffset }), H = s.vItem, L = u(() => ({ overflow: "auto", position: "relative", width: o.value ? `${T}px` : `${$}px`, height: o.value ? `${$}px` : `${T}px` })), j = u(() => ({ display: "flex", flexDirection: o.value ? "row" : "column" })), W = u(() => o.value ? { flex: "none", width: `${r.surfaceOffset}px` } : { flex: "none", height: `${r.surfaceOffset}px` }), q = u(() => ({ display: "flex", flexDirection: o.value ? "row" : "column", margin: "0", padding: "0", listStyle: "none" })), Y = u(() => o.value ? { flex: "none", whiteSpace: "nowrap" } : { flex: "none" });
  function z(e) {
    return o.value ? { flex: "none", width: `${e}px` } : { flex: "none", height: `${e}px` };
  }
  return (e, t) => (g(), x("div", re, [a("div", ie, [a("button", { type: "button", "data-testid": "vcc-toggle-reverse", onClick: M }, " Reverse order "), a("label", null, [t[2] || (t[2] = E(" Index ", -1)), k(a("input", { "onUpdate:modelValue": t[0] || (t[0] = (n) => m.value = n), type: "number", min: "0", max: l.value.length - 1, "data-testid": "vcc-index-input" }, null, 8, le), [[A, m.value, void 0, { number: true }]])]), a("button", { type: "button", "data-testid": "vcc-grow-button", onClick: B }, "Grow item"), a("button", { type: "button", "data-testid": "vcc-shrink-button", onClick: P }, " Shrink item "), a("label", null, [t[3] || (t[3] = E(" Scroll near index ", -1)), k(a("input", { "onUpdate:modelValue": t[1] || (t[1] = (n) => I.value = n), type: "number", min: "0", max: l.value.length - 1, "data-testid": "vcc-scrollto-index-input" }, null, 8, se), [[A, I.value, void 0, { number: true }]])]), a("button", { type: "button", "data-testid": "vcc-scrollto-index-button", onClick: X }, " Scroll near index "), a("button", { type: "button", "data-testid": "vcc-scrollto-end-button", onClick: Z }, " Scroll to end ")]), a("div", { ref: "scrollEl", class: "virtual-collection-capability-fixture__viewport", "data-testid": "vcc-viewport", style: f(L.value) }, [a("div", { class: "virtual-collection-capability-fixture__surface", style: f(j.value) }, [R.value ? (g(), x("div", { key: 0, class: "virtual-collection-capability-fixture__pre-surface", "data-testid": "vcc-pre-surface", style: f(W.value) }, null, 4)) : Q("", true), a("ul", { class: "virtual-collection-capability-fixture__list", style: f(q.value) }, [a("li", { class: "virtual-collection-capability-fixture__spacer", "data-testid": "vcc-leading-spacer", style: f(z(c(s).leadingSize.value)) }, null, 4), (g(true), x(ee, null, te(c(s).items.value, (n) => k((g(), x("li", { key: n.key, class: "virtual-collection-capability-fixture__item", "data-testid": `vcc-item-${n.key}`, "data-item-index": n.index, "data-item-size": n.size, "data-item-offset": n.offset, style: f(Y.value) }, [a("pre", null, v(U(n.value)), 1)], 12, ce)), [[c(H), n]])), 128)), a("li", { class: "virtual-collection-capability-fixture__spacer", "data-testid": "vcc-trailing-spacer", style: f(z(c(s).trailingSize.value)) }, null, 4)], 4)], 4)], 4), a("output", ue, v(c(s).items.value.length), 1), a("output", de, v(c(s).leadingSize.value), 1), a("output", fe, v(c(s).trailingSize.value), 1), a("output", pe, v(c(s).totalSize.value), 1)]));
} }), w = oe(ve, [["__scopeId", "data-v-c0b9eaad"]]), Se = { title: "Shared/virtualization/VirtualCollectionCapability", component: w, parameters: { layout: "padded", docs: { description: { component: "Deterministic fixtures proving the shared useVirtualCollection composable before database migration: bounded mounted items at scale, dynamic vertical/horizontal measurement, stable-key remapping, deep-scroll leading/trailing geometry, and unmount/remount behavior. Not production UI." } } } }, y = { args: { axis: "vertical", itemCount: 1e4 } }, b = { args: { axis: "horizontal", itemCount: 5e3 } }, S = { args: { axis: "vertical", itemCount: 200 } }, _ = { args: { axis: "vertical", itemCount: 1e4, surfaceOffset: 240 } }, C = { render: () => ({ components: { VirtualCollectionCapabilityFixture: w }, setup() {
  const i = p(240);
  return { reduceSurfaceOffset: () => {
    i.value = 96;
  }, surfaceOffset: i };
}, template: `
      <div>
        <button
          type="button"
          data-testid="vcc-change-surface-offset"
          @click="reduceSurfaceOffset"
        >
          Move surface upward
        </button>
        <VirtualCollectionCapabilityFixture
          axis="vertical"
          :item-count="10000"
          :surface-offset="surfaceOffset"
        />
      </div>
    ` }) }, h = { args: { axis: "vertical", itemCount: 20, undefinedValueAt: 5 } }, O = { render: () => ({ components: { VirtualCollectionCapabilityFixture: w }, setup() {
  const i = p(true);
  return { mounted: i, toggle: () => {
    i.value = !i.value;
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
b.parameters = { ...b.parameters, docs: { ...b.parameters?.docs, source: { originalSource: `{
  args: {
    axis: 'horizontal',
    itemCount: 5000
  }
}`, ...b.parameters?.docs?.source } } };
S.parameters = { ...S.parameters, docs: { ...S.parameters?.docs, source: { originalSource: `{
  args: {
    axis: 'vertical',
    itemCount: 200
  }
}`, ...S.parameters?.docs?.source } } };
_.parameters = { ..._.parameters, docs: { ..._.parameters?.docs, source: { originalSource: `{
  args: {
    axis: 'vertical',
    itemCount: 10000,
    surfaceOffset: 240
  }
}`, ..._.parameters?.docs?.source } } };
C.parameters = { ...C.parameters, docs: { ...C.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      VirtualCollectionCapabilityFixture
    },
    setup() {
      const surfaceOffset = ref(240);
      const reduceSurfaceOffset = () => {
        surfaceOffset.value = 96;
      };
      return {
        reduceSurfaceOffset,
        surfaceOffset
      };
    },
    template: \`
      <div>
        <button
          type="button"
          data-testid="vcc-change-surface-offset"
          @click="reduceSurfaceOffset"
        >
          Move surface upward
        </button>
        <VirtualCollectionCapabilityFixture
          axis="vertical"
          :item-count="10000"
          :surface-offset="surfaceOffset"
        />
      </div>
    \`
  })
}`, ...C.parameters?.docs?.source } } };
h.parameters = { ...h.parameters, docs: { ...h.parameters?.docs, source: { originalSource: `{
  args: {
    axis: 'vertical',
    itemCount: 20,
    undefinedValueAt: 5
  }
}`, ...h.parameters?.docs?.source } } };
O.parameters = { ...O.parameters, docs: { ...O.parameters?.docs, source: { originalSource: `{
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
}`, ...O.parameters?.docs?.source } } };
const _e = ["VerticalScale", "HorizontalScale", "RemapAndDeepScroll", "SurfaceOffset", "DynamicSurfaceOffset", "UndefinedSourceValue", "MountCycle"];
export {
  C as DynamicSurfaceOffset,
  b as HorizontalScale,
  O as MountCycle,
  S as RemapAndDeepScroll,
  _ as SurfaceOffset,
  h as UndefinedSourceValue,
  y as VerticalScale,
  _e as __namedExportsOrder,
  Se as default
};
