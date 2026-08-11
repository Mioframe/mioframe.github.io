import { d as f, c as u, b as e, t as s, a as b, w as h, e as I, r as n, o as c, F as y, l as R, f as S } from "./iframe-wWaMc33J.js";
import { _ as x } from "./useReorderItem-CW7kNolP.js";
import { R as C } from "./ReorderSelfScrollableStoryItem-CzdsKLPp.js";
import { _ as D } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
const k = { class: "reorder-activation-story-harness" }, B = { "aria-label": "Controlled IDs" }, g = { "aria-label": "Current order" }, A = { "aria-label": "Reorder count" }, j = { role: "list", "aria-label": "Activation test reorder items" }, w = f({ __name: "ReorderActivationStoryHarness", setup(q) {
  const i = ["alpha", "bravo", "charlie"], t = n([...i]), o = n([...i]), d = n(0), p = () => {
    t.value = ["alpha", "bravo", "alpha"];
  }, m = () => {
    t.value = [...o.value];
  }, _ = (a) => {
    t.value = [...a.orderedIds], o.value = [...a.orderedIds], d.value += 1;
  };
  return (a, E) => (c(), u("div", k, [e("button", { type: "button", onClick: p }, "Use duplicate IDs"), e("button", { type: "button", onClick: m }, "Restore unique IDs"), e("output", B, s(t.value.join(",")), 1), e("output", g, s(o.value.join(",")), 1), e("output", A, s(d.value), 1), b(I(x), { "item-ids": t.value, onReorder: _ }, { default: h(() => [e("div", j, [(c(true), u(y, null, R(o.value, (l, v) => (c(), S(C, { key: l, "item-id": l, index: v }, null, 8, ["item-id", "index"]))), 128))])]), _: 1 }, 8, ["item-ids"])]));
} }), H = D(w, [["__scopeId", "data-v-bc9a4bcc"]]), O = { title: "shared/lib/reorder/ReorderActivationStoryHarness", component: H, parameters: { layout: "padded" } }, r = {};
r.parameters = { ...r.parameters, docs: { ...r.parameters?.docs, source: { originalSource: "{}", ...r.parameters?.docs?.source }, description: { story: "Browser-only fixture for controlled duplicate rejection and recovery through public controls.", ...r.parameters?.docs?.description } } };
const $ = ["Default"];
export {
  r as Default,
  $ as __namedExportsOrder,
  O as default
};
