import { d as H, c as n, b as t, e as w, Y as _, Z as D, a as P, w as L, i as o, t as b, r as x, j as N, o as s, v as r, F as m, f, y as z } from "./iframe-C6NtDZga.js";
import { u as V } from "./useVirtualCollection-BY90HRKT.js";
import { M as U } from "./MDTable-BDKXOFf0.js";
import { _ as j } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
const X = { class: "database-virtualization-capability-fixture" }, Y = { class: "database-virtualization-capability-fixture__controls" }, Z = ["max"], q = ["max"], J = { "data-testid": "db-virt-header-row" }, K = ["data-testid", "data-col-size", "aria-colindex"], Q = { "aria-hidden": "true", "data-testid": "db-virt-row-spacer-top" }, tt = ["colspan"], et = ["data-testid", "data-row-size", "aria-rowindex"], at = ["data-testid", "aria-colindex"], it = { key: 0, class: "database-virtualization-capability-fixture__row-label" }, ot = { "aria-hidden": "true", "data-testid": "db-virt-row-spacer-bottom" }, lt = ["colspan"], rt = { "data-testid": "db-virt-mounted-rows" }, nt = { "data-testid": "db-virt-mounted-cols" }, st = 28, dt = 96, ut = "520px", ct = "360px", vt = H({ __name: "DatabaseVirtualizationCapabilityFixture", props: { rowCount: { default: 5e3 }, colCount: { default: 300 } }, setup(v) {
  const C = v, k = N("scrollEl"), R = z(() => Array.from({ length: C.rowCount }, (a, i) => i)), E = z(() => Array.from({ length: C.colCount }, (a, i) => i)), u = x({}), c = x({}), y = x(0);
  function I() {
    const a = y.value;
    u.value = { ...u.value, [a]: (u.value[a] ?? 0) + 1 };
  }
  function G() {
    const a = y.value, i = u.value[a] ?? 0;
    i <= 0 || (u.value = { ...u.value, [a]: i - 1 });
  }
  const h = x(0);
  function M() {
    const a = h.value;
    c.value = { ...c.value, [a]: (c.value[a] ?? 0) + 1 };
  }
  function T() {
    const a = h.value;
    c.value = { ...c.value, [a]: 0 };
  }
  function A(a) {
    const i = 1 + (u.value[a] ?? 0);
    return Array.from({ length: i }, (e, d) => `Row ${a} line ${d + 1}`).join(`
`);
  }
  function B(a, i) {
    const e = c.value[i] ?? 0;
    return `R${a}C${i}${"w".repeat(e * 10)}`;
  }
  const p = V(R, { root: () => k.value, key: (a) => a, estimateSize: st, overscan: 4 }), l = V(E, { root: () => k.value, key: (a) => a, estimateSize: dt, axis: "horizontal", overscan: 4 }), O = p.vItem, W = l.vItem, S = z(() => l.items.value.length + 2);
  function $(a) {
    return { minWidth: `${a.size}px` };
  }
  const F = { overflow: "auto", width: ut, height: ct };
  return (a, i) => (s(), n("div", X, [t("div", Y, [t("label", null, [i[2] || (i[2] = w(" Grow row ", -1)), _(t("input", { "onUpdate:modelValue": i[0] || (i[0] = (e) => y.value = e), type: "number", min: "0", max: v.rowCount - 1, "data-testid": "db-virt-grow-row-index" }, null, 8, Z), [[D, y.value, void 0, { number: true }]])]), t("button", { type: "button", "data-testid": "db-virt-grow-row-button", onClick: I }, "Grow row"), t("button", { type: "button", "data-testid": "db-virt-shrink-row-button", onClick: G }, " Shrink row "), t("label", null, [i[3] || (i[3] = w(" Grow column body content ", -1)), _(t("input", { "onUpdate:modelValue": i[1] || (i[1] = (e) => h.value = e), type: "number", min: "0", max: v.colCount - 1, "data-testid": "db-virt-grow-col-index" }, null, 8, q), [[D, h.value, void 0, { number: true }]])]), t("button", { type: "button", "data-testid": "db-virt-grow-col-button", onClick: M }, " Grow column "), t("button", { type: "button", "data-testid": "db-virt-reset-col-button", onClick: T }, " Reset column body content ")]), t("div", { ref: "scrollEl", class: "database-virtualization-capability-fixture__viewport", "data-testid": "db-virt-viewport", style: F }, [P(o(U), { class: "database-virtualization-capability-fixture__table", "data-testid": "db-virt-table", "aria-rowcount": v.rowCount + 1, "aria-colcount": v.colCount }, { default: L(() => [t("colgroup", null, [t("col", { style: r({ width: `${o(l).leadingSize.value}px` }) }, null, 4), (s(true), n(m, null, f(o(l).items.value, (e) => (s(), n("col", { key: e.key }))), 128)), t("col", { style: r({ width: `${o(l).trailingSize.value}px` }) }, null, 4)]), t("thead", null, [t("tr", J, [t("th", { "aria-hidden": "true", "data-testid": "db-virt-header-spacer-left", style: r({ width: `${o(l).leadingSize.value}px` }) }, [t("div", { class: "database-virtualization-capability-fixture__spacer-phantom", style: r({ width: `${o(l).leadingSize.value}px` }) }, null, 4)], 4), (s(true), n(m, null, f(o(l).items.value, (e) => _((s(), n("th", { key: e.key, class: "database-virtualization-capability-fixture__header-cell", "data-testid": `db-virt-header-cell-${e.key}`, "data-col-size": e.size, "aria-colindex": e.index + 1, style: r($(e)) }, [w(" Col " + b(e.key), 1)], 12, K)), [[o(W), e]])), 128)), t("th", { "aria-hidden": "true", "data-testid": "db-virt-header-spacer-right", style: r({ width: `${o(l).trailingSize.value}px` }) }, [t("div", { class: "database-virtualization-capability-fixture__spacer-phantom", style: r({ width: `${o(l).trailingSize.value}px` }) }, null, 4)], 4)])]), t("tbody", null, [t("tr", Q, [t("td", { class: "database-virtualization-capability-fixture__row-spacer-cell", colspan: S.value, style: r({ height: `${o(p).leadingSize.value}px` }) }, null, 12, tt)]), (s(true), n(m, null, f(o(p).items.value, (e) => _((s(), n("tr", { key: e.key, class: "database-virtualization-capability-fixture__row", "data-testid": `db-virt-row-${e.key}`, "data-row-size": e.size, "aria-rowindex": e.index + 2 }, [t("td", { "aria-hidden": "true", style: r({ width: `${o(l).leadingSize.value}px` }) }, null, 4), (s(true), n(m, null, f(o(l).items.value, (d) => (s(), n("td", { key: d.key, class: "database-virtualization-capability-fixture__cell", "data-testid": `db-virt-cell-${e.key}-${d.key}`, "aria-colindex": d.index + 1, style: r($(d)) }, [d.index === 0 ? (s(), n("pre", it, b(A(e.key)), 1)) : (s(), n(m, { key: 1 }, [w(b(B(e.key, d.key)), 1)], 64))], 12, at))), 128)), t("td", { "aria-hidden": "true", style: r({ width: `${o(l).trailingSize.value}px` }) }, null, 4)], 8, et)), [[o(O), e]])), 128)), t("tr", ot, [t("td", { class: "database-virtualization-capability-fixture__row-spacer-cell", colspan: S.value, style: r({ height: `${o(p).trailingSize.value}px` }) }, null, 12, lt)])])]), _: 1 }, 8, ["aria-rowcount", "aria-colcount"])], 512), t("output", rt, b(o(p).items.value.length), 1), t("output", nt, b(o(l).items.value.length), 1)]));
} }), pt = j(vt, [["__scopeId", "data-v-f8b3e429"]]), _t = { title: "Entities/databaseData/DatabaseVirtualizationCapability", component: pt, parameters: { layout: "padded", docs: { description: { component: "Deterministic synthetic native-table fixture proving the native-table-first database DOM model (docs/database-virtualization.md) through the real shared useVirtualCollection composable and actual MDTable: semantic table structure, virtual spacer rows/columns, dynamic <tr>/<th> measurement, deep offsets, and logical accessibility metadata over partial DOM. Uses no worker/service/persistence and clones no production editor/relation/toolbar behavior." } } } }, g = { args: { rowCount: 5e3, colCount: 300 } };
g.parameters = { ...g.parameters, docs: { ...g.parameters?.docs, source: { originalSource: `{
  args: {
    rowCount: 5000,
    colCount: 300
  }
}`, ...g.parameters?.docs?.source } } };
const xt = ["Default"];
export {
  g as Default,
  xt as __namedExportsOrder,
  _t as default
};
