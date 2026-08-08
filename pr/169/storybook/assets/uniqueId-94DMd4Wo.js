import { q as s } from "./index-uugn3NIi.js";
const o = s("idCounter", {}, { mergeDefaults: true }), r = 36, u = (e) => {
  let t = parseInt(o.value[e] ?? "0", r);
  return t >= Number.MAX_SAFE_INTEGER && (t = 0), o.value[e] = (t + 1).toString(r), `${e}${o.value[e]}`;
};
export {
  u as s
};
