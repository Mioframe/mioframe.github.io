import { h as e, r as s } from "./iframe-DELGgwUH.js";
import { c as u, t as d } from "./index-9vxt_rMU.js";
const a = u(() => {
  const t = s(0);
  return { add: () => t.value += 1, remove: () => t.value -= 1, quantity: t };
}), l = () => {
  const { add: t, quantity: r, remove: o } = a(), n = t();
  return d(() => {
    o();
  }), e(() => n < r.value);
}, m = () => {
  const { quantity: t } = a();
  return e(() => t.value > 0);
};
export {
  m as a,
  l as u
};
