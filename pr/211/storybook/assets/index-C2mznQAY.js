import { y as e, r as s } from "./iframe-BXqOV-4W.js";
import { c as u, t as d } from "./index-DozkqKr2.js";
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
