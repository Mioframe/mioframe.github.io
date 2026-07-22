function l(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function m(e) {
  return typeof e == "object" && e !== null;
}
function a(e) {
  return typeof e == "number" || m(e) && l(e) === "[object Number]";
}
const t = { display: { large: "md-typescale-display-large", medium: "md-typescale-display-medium", small: "md-typescale-display-small" }, label: { large: "md-typescale-label-large", medium: "md-typescale-label-medium", small: "md-typescale-label-small" }, body: { large: "md-typescale-body-large", medium: "md-typescale-body-medium", small: "md-typescale-body-small" }, headline: { large: "md-typescale-headline-large", medium: "md-typescale-headline-medium", small: "md-typescale-headline-small" }, title: { large: "md-typescale-title-large", medium: "md-typescale-title-medium", small: "md-typescale-title-small" } };
export {
  t as M,
  a as i
};
