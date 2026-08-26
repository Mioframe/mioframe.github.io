import { y as e, r as s } from "./iframe-CErq0b8Q.js";
import { c as u, t as d } from "./index-WznF5o8O.js";
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
