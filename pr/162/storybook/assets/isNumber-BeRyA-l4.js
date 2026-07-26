function e(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
function n(t) {
  return typeof t == "object" && t !== null;
}
function o(t) {
  return typeof t == "number" || n(t) && e(t) === "[object Number]";
}
export {
  o as i
};
