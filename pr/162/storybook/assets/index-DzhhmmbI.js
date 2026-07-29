import { b as e, r as s } from "./iframe-DC9_iB_W.js";
import { i as u, t as i } from "./index-BRY4_dFI.js";
const a = u(() => {
  const t = s(0);
  return { add: () => t.value += 1, remove: () => t.value -= 1, quantity: t };
}), l = () => {
  const { add: t, quantity: r, remove: o } = a(), n = t();
  return i(() => {
    o();
  }), e(() => n < r.value);
}, m = () => {
  const { quantity: t } = a();
  return e(() => t.value > 0);
};
export {
  l as a,
  m as u
};
