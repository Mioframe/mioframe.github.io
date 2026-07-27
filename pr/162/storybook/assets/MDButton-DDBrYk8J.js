import { d as No, E as ja, c as Vo, g as no, w as ro, u as so, G as lo, a as Ka, t as Za, S as Xa, A as Ya, l as te, z as io, e as We } from "./iframe-BgyhjvgD.js";
import { _ as Ga } from "./_plugin-vue_export-helper-DlAUqK2U.js";
function p(o2, t, a, r) {
  var s = arguments.length, i = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, a) : r, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(o2, t, a, r);
  else for (var u = o2.length - 1; u >= 0; u--) (c = o2[u]) && (i = (s < 3 ? c(i) : s > 3 ? c(t, a, i) : c(t, a)) || i);
  return s > 3 && i && Object.defineProperty(t, a, i), i;
}
function l(o2, t, a, r) {
  if (a === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? o2 !== t || !r : !t.has(o2)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return a === "m" ? r : a === "a" ? r.call(o2) : r ? r.value : t.get(o2);
}
function $(o2, t, a, r, s) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? o2 !== t || !s : !t.has(o2)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? s.call(o2, a) : s ? s.value = a : t.set(o2, a), a;
}
const xt = globalThis, Po = xt.ShadowRoot && (xt.ShadyCSS === void 0 || xt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Io = /* @__PURE__ */ Symbol(), Uo = /* @__PURE__ */ new WeakMap();
let ua = class {
  constructor(t, a, r) {
    if (this._$cssResult$ = true, r !== Io) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = a;
  }
  get styleSheet() {
    let t = this.o;
    const a = this.t;
    if (Po && t === void 0) {
      const r = a !== void 0 && a.length === 1;
      r && (t = Uo.get(a)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Uo.set(a, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const e = (o2) => new ua(typeof o2 == "string" ? o2 : o2 + "", void 0, Io), T = (o2, ...t) => {
  const a = o2.length === 1 ? o2[0] : t.reduce((r, s, i) => r + ((c) => {
    if (c._$cssResult$ === true) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + o2[i + 1], o2[0]);
  return new ua(a, o2, Io);
}, Qa = (o2, t) => {
  if (Po) o2.adoptedStyleSheets = t.map((a) => a instanceof CSSStyleSheet ? a : a.styleSheet);
  else for (const a of t) {
    const r = document.createElement("style"), s = xt.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = a.cssText, o2.appendChild(r);
  }
}, jo = Po ? (o2) => o2 : (o2) => o2 instanceof CSSStyleSheet ? ((t) => {
  let a = "";
  for (const r of t.cssRules) a += r.cssText;
  return e(a);
})(o2) : o2;
const { is: Ja, defineProperty: en, getOwnPropertyDescriptor: tn, getOwnPropertyNames: on, getOwnPropertySymbols: an, getPrototypeOf: nn } = Object, Qt = globalThis, Ko = Qt.trustedTypes, rn = Ko ? Ko.emptyScript : "", sn = Qt.reactiveElementPolyfillSupport, Je = (o2, t) => o2, jt = { toAttribute(o2, t) {
  switch (t) {
    case Boolean:
      o2 = o2 ? rn : null;
      break;
    case Object:
    case Array:
      o2 = o2 == null ? o2 : JSON.stringify(o2);
  }
  return o2;
}, fromAttribute(o2, t) {
  let a = o2;
  switch (t) {
    case Boolean:
      a = o2 !== null;
      break;
    case Number:
      a = o2 === null ? null : Number(o2);
      break;
    case Object:
    case Array:
      try {
        a = JSON.parse(o2);
      } catch {
        a = null;
      }
  }
  return a;
} }, Do = (o2, t) => !Ja(o2, t), Zo = { attribute: true, type: String, converter: jt, reflect: false, useDefault: false, hasChanged: Do };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), Qt.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let ke = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, a = Zo) {
    if (a.state && (a.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t) && ((a = Object.create(a)).wrapped = true), this.elementProperties.set(t, a), !a.noAccessor) {
      const r = /* @__PURE__ */ Symbol(), s = this.getPropertyDescriptor(t, r, a);
      s !== void 0 && en(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, a, r) {
    const { get: s, set: i } = tn(this.prototype, t) ?? { get() {
      return this[a];
    }, set(c) {
      this[a] = c;
    } };
    return { get: s, set(c) {
      const u = s?.call(this);
      i?.call(this, c), this.requestUpdate(t, u, r);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zo;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Je("elementProperties"))) return;
    const t = nn(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Je("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(Je("properties"))) {
      const a = this.properties, r = [...on(a), ...an(a)];
      for (const s of r) this.createProperty(s, a[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const a = litPropertyMetadata.get(t);
      if (a !== void 0) for (const [r, s] of a) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [a, r] of this.elementProperties) {
      const s = this._$Eu(a, r);
      s !== void 0 && this._$Eh.set(s, a);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const a = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const s of r) a.unshift(jo(s));
    } else t !== void 0 && a.push(jo(t));
    return a;
  }
  static _$Eu(t, a) {
    const r = a.attribute;
    return r === false ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), a = this.constructor.elementProperties;
    for (const r of a.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Qa(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, a, r) {
    this._$AK(t, r);
  }
  _$ET(t, a) {
    const r = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, r);
    if (s !== void 0 && r.reflect === true) {
      const i = (r.converter?.toAttribute !== void 0 ? r.converter : jt).toAttribute(a, r.type);
      this._$Em = t, i == null ? this.removeAttribute(s) : this.setAttribute(s, i), this._$Em = null;
    }
  }
  _$AK(t, a) {
    const r = this.constructor, s = r._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const i = r.getPropertyOptions(s), c = typeof i.converter == "function" ? { fromAttribute: i.converter } : i.converter?.fromAttribute !== void 0 ? i.converter : jt;
      this._$Em = s;
      const u = c.fromAttribute(a, i.type);
      this[s] = u ?? this._$Ej?.get(s) ?? u, this._$Em = null;
    }
  }
  requestUpdate(t, a, r, s = false, i) {
    if (t !== void 0) {
      const c = this.constructor;
      if (s === false && (i = this[t]), r ??= c.getPropertyOptions(t), !((r.hasChanged ?? Do)(i, a) || r.useDefault && r.reflect && i === this._$Ej?.get(t) && !this.hasAttribute(c._$Eu(t, r)))) return;
      this.C(t, a, r);
    }
    this.isUpdatePending === false && (this._$ES = this._$EP());
  }
  C(t, a, { useDefault: r, reflect: s, wrapped: i }, c) {
    r && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, c ?? a ?? this[t]), i !== true || c !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (a = void 0), this._$AL.set(t, a)), s === true && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (a) {
      Promise.reject(a);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [s, i] of this._$Ep) this[s] = i;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [s, i] of r) {
        const { wrapped: c } = i, u = this[s];
        c !== true || this._$AL.has(s) || u === void 0 || this.C(s, void 0, i, u);
      }
    }
    let t = false;
    const a = this._$AL;
    try {
      t = this.shouldUpdate(a), t ? (this.willUpdate(a), this._$EO?.forEach((r) => r.hostUpdate?.()), this.update(a)) : this._$EM();
    } catch (r) {
      throw t = false, this._$EM(), r;
    }
    t && this._$AE(a);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((a) => a.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return true;
  }
  update(t) {
    this._$Eq &&= this._$Eq.forEach((a) => this._$ET(a, this[a])), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
ke.elementStyles = [], ke.shadowRootOptions = { mode: "open" }, ke[Je("elementProperties")] = /* @__PURE__ */ new Map(), ke[Je("finalized")] = /* @__PURE__ */ new Map(), sn?.({ ReactiveElement: ke }), (Qt.reactiveElementVersions ??= []).push("2.1.2");
const Ro = globalThis, Xo = (o2) => o2, Kt = Ro.trustedTypes, Yo = Kt ? Kt.createPolicy("lit-html", { createHTML: (o2) => o2 }) : void 0, ha = "$lit$", Y = `lit$${Math.random().toFixed(9).slice(2)}$`, ma = "?" + Y, ln = `<${ma}>`, ye = document, st = () => ye.createComment(""), lt = (o2) => o2 === null || typeof o2 != "object" && typeof o2 != "function", qo = Array.isArray, cn = (o2) => qo(o2) || typeof o2?.[Symbol.iterator] == "function", co = `[ 	
\f\r]`, Be = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Go = /-->/g, Qo = />/g, oe = RegExp(`>|${co}(?:([^\\s"'>=/]+)(${co}*=${co}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Jo = /'/g, ea = /"/g, pa = /^(?:script|style|textarea|title)$/i, dn = (o2) => (t, ...a) => ({ _$litType$: o2, strings: t, values: a }), M = dn(1), Te = /* @__PURE__ */ Symbol.for("lit-noChange"), k = /* @__PURE__ */ Symbol.for("lit-nothing"), ta = /* @__PURE__ */ new WeakMap(), me = ye.createTreeWalker(ye, 129);
function ba(o2, t) {
  if (!qo(o2) || !o2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Yo !== void 0 ? Yo.createHTML(t) : t;
}
const un = (o2, t) => {
  const a = o2.length - 1, r = [];
  let s, i = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", c = Be;
  for (let u = 0; u < a; u++) {
    const d = o2[u];
    let v, f, h = -1, g = 0;
    for (; g < d.length && (c.lastIndex = g, f = c.exec(d), f !== null); ) g = c.lastIndex, c === Be ? f[1] === "!--" ? c = Go : f[1] !== void 0 ? c = Qo : f[2] !== void 0 ? (pa.test(f[2]) && (s = RegExp("</" + f[2], "g")), c = oe) : f[3] !== void 0 && (c = oe) : c === oe ? f[0] === ">" ? (c = s ?? Be, h = -1) : f[1] === void 0 ? h = -2 : (h = c.lastIndex - f[2].length, v = f[1], c = f[3] === void 0 ? oe : f[3] === '"' ? ea : Jo) : c === ea || c === Jo ? c = oe : c === Go || c === Qo ? c = Be : (c = oe, s = void 0);
    const y = c === oe && o2[u + 1].startsWith("/>") ? " " : "";
    i += c === Be ? d + ln : h >= 0 ? (r.push(v), d.slice(0, h) + ha + d.slice(h) + Y + y) : d + Y + (h === -2 ? u : y);
  }
  return [ba(o2, i + (o2[a] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class it {
  constructor({ strings: t, _$litType$: a }, r) {
    let s;
    this.parts = [];
    let i = 0, c = 0;
    const u = t.length - 1, d = this.parts, [v, f] = un(t, a);
    if (this.el = it.createElement(v, r), me.currentNode = this.el.content, a === 2 || a === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (s = me.nextNode()) !== null && d.length < u; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const h of s.getAttributeNames()) if (h.endsWith(ha)) {
          const g = f[c++], y = s.getAttribute(h).split(Y), S = /([.?@])?(.*)/.exec(g);
          d.push({ type: 1, index: i, name: S[2], strings: y, ctor: S[1] === "." ? mn : S[1] === "?" ? pn : S[1] === "@" ? bn : Jt }), s.removeAttribute(h);
        } else h.startsWith(Y) && (d.push({ type: 6, index: i }), s.removeAttribute(h));
        if (pa.test(s.tagName)) {
          const h = s.textContent.split(Y), g = h.length - 1;
          if (g > 0) {
            s.textContent = Kt ? Kt.emptyScript : "";
            for (let y = 0; y < g; y++) s.append(h[y], st()), me.nextNode(), d.push({ type: 2, index: ++i });
            s.append(h[g], st());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ma) d.push({ type: 2, index: i });
      else {
        let h = -1;
        for (; (h = s.data.indexOf(Y, h + 1)) !== -1; ) d.push({ type: 7, index: i }), h += Y.length - 1;
      }
      i++;
    }
  }
  static createElement(t, a) {
    const r = ye.createElement("template");
    return r.innerHTML = t, r;
  }
}
function Ae(o2, t, a = o2, r) {
  if (t === Te) return t;
  let s = r !== void 0 ? a._$Co?.[r] : a._$Cl;
  const i = lt(t) ? void 0 : t._$litDirective$;
  return s?.constructor !== i && (s?._$AO?.(false), i === void 0 ? s = void 0 : (s = new i(o2), s._$AT(o2, a, r)), r !== void 0 ? (a._$Co ??= [])[r] = s : a._$Cl = s), s !== void 0 && (t = Ae(o2, s._$AS(o2, t.values), s, r)), t;
}
class hn {
  constructor(t, a) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = a;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: a }, parts: r } = this._$AD, s = (t?.creationScope ?? ye).importNode(a, true);
    me.currentNode = s;
    let i = me.nextNode(), c = 0, u = 0, d = r[0];
    for (; d !== void 0; ) {
      if (c === d.index) {
        let v;
        d.type === 2 ? v = new bt(i, i.nextSibling, this, t) : d.type === 1 ? v = new d.ctor(i, d.name, d.strings, this, t) : d.type === 6 && (v = new vn(i, this, t)), this._$AV.push(v), d = r[++u];
      }
      c !== d?.index && (i = me.nextNode(), c++);
    }
    return me.currentNode = ye, s;
  }
  p(t) {
    let a = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, a), a += r.strings.length - 2) : r._$AI(t[a])), a++;
  }
}
class bt {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, a, r, s) {
    this.type = 2, this._$AH = k, this._$AN = void 0, this._$AA = t, this._$AB = a, this._$AM = r, this.options = s, this._$Cv = s?.isConnected ?? true;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const a = this._$AM;
    return a !== void 0 && t?.nodeType === 11 && (t = a.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, a = this) {
    t = Ae(this, t, a), lt(t) ? t === k || t == null || t === "" ? (this._$AH !== k && this._$AR(), this._$AH = k) : t !== this._$AH && t !== Te && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : cn(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== k && lt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(ye.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: a, _$litType$: r } = t, s = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = it.createElement(ba(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === s) this._$AH.p(a);
    else {
      const i = new hn(s, this), c = i.u(this.options);
      i.p(a), this.T(c), this._$AH = i;
    }
  }
  _$AC(t) {
    let a = ta.get(t.strings);
    return a === void 0 && ta.set(t.strings, a = new it(t)), a;
  }
  k(t) {
    qo(this._$AH) || (this._$AH = [], this._$AR());
    const a = this._$AH;
    let r, s = 0;
    for (const i of t) s === a.length ? a.push(r = new bt(this.O(st()), this.O(st()), this, this.options)) : r = a[s], r._$AI(i), s++;
    s < a.length && (this._$AR(r && r._$AB.nextSibling, s), a.length = s);
  }
  _$AR(t = this._$AA.nextSibling, a) {
    for (this._$AP?.(false, true, a); t !== this._$AB; ) {
      const r = Xo(t).nextSibling;
      Xo(t).remove(), t = r;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class Jt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, a, r, s, i) {
    this.type = 1, this._$AH = k, this._$AN = void 0, this.element = t, this.name = a, this._$AM = s, this.options = i, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = k;
  }
  _$AI(t, a = this, r, s) {
    const i = this.strings;
    let c = false;
    if (i === void 0) t = Ae(this, t, a, 0), c = !lt(t) || t !== this._$AH && t !== Te, c && (this._$AH = t);
    else {
      const u = t;
      let d, v;
      for (t = i[0], d = 0; d < i.length - 1; d++) v = Ae(this, u[r + d], a, d), v === Te && (v = this._$AH[d]), c ||= !lt(v) || v !== this._$AH[d], v === k ? t = k : t !== k && (t += (v ?? "") + i[d + 1]), this._$AH[d] = v;
    }
    c && !s && this.j(t);
  }
  j(t) {
    t === k ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class mn extends Jt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === k ? void 0 : t;
  }
}
class pn extends Jt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== k);
  }
}
class bn extends Jt {
  constructor(t, a, r, s, i) {
    super(t, a, r, s, i), this.type = 5;
  }
  _$AI(t, a = this) {
    if ((t = Ae(this, t, a, 0) ?? k) === Te) return;
    const r = this._$AH, s = t === k && r !== k || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, i = t !== k && (r === k || s);
    s && this.element.removeEventListener(this.name, this, r), i && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class vn {
  constructor(t, a, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = a, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Ae(this, t);
  }
}
const fn = Ro.litHtmlPolyfillSupport;
fn?.(it, bt), (Ro.litHtmlVersions ??= []).push("3.3.3");
const yn = (o2, t, a) => {
  const r = a?.renderBefore ?? t;
  let s = r._$litPart$;
  if (s === void 0) {
    const i = a?.renderBefore ?? null;
    r._$litPart$ = s = new bt(t.insertBefore(st(), i), i, void 0, a ?? {});
  }
  return s._$AI(o2), s;
};
const Ho = globalThis;
class z extends ke {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const a = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = yn(a, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return Te;
  }
}
z._$litElement$ = true, z.finalized = true, Ho.litElementHydrateSupport?.({ LitElement: z });
const gn = Ho.litElementPolyfillSupport;
gn?.({ LitElement: z });
(Ho.litElementVersions ??= []).push("4.2.2");
const xn = { attribute: true, type: String, converter: jt, reflect: false, hasChanged: Do }, $n = (o2 = xn, t, a) => {
  const { kind: r, metadata: s } = a;
  let i = globalThis.litPropertyMetadata.get(s);
  if (i === void 0 && globalThis.litPropertyMetadata.set(s, i = /* @__PURE__ */ new Map()), r === "setter" && ((o2 = Object.create(o2)).wrapped = true), i.set(a.name, o2), r === "accessor") {
    const { name: c } = a;
    return { set(u) {
      const d = t.get.call(this);
      t.set.call(this, u), this.requestUpdate(c, d, o2, true, u);
    }, init(u) {
      return u !== void 0 && this.C(c, void 0, o2, u), u;
    } };
  }
  if (r === "setter") {
    const { name: c } = a;
    return function(u) {
      const d = this[c];
      t.call(this, u), this.requestUpdate(c, d, o2, true, u);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function x(o2) {
  return (t, a) => typeof a == "object" ? $n(o2, t, a) : ((r, s, i) => {
    const c = s.hasOwnProperty(i);
    return s.constructor.createProperty(i, r), c ? Object.getOwnPropertyDescriptor(s, i) : void 0;
  })(o2, t, a);
}
const Cn = (o2, t, a) => (a.configurable = true, a.enumerable = true, Reflect.decorate && typeof t != "object" && Object.defineProperty(o2, t, a), a);
function X(o2, t) {
  return (a, r, s) => {
    const i = (c) => c.renderRoot?.querySelector(o2) ?? null;
    return Cn(a, r, { get() {
      return i(this);
    } });
  };
}
const uo = (o2) => o2 ?? k;
var Ve, Ue, N;
class vt {
  constructor(t, a) {
    Ve.set(this, void 0), Ue.set(this, void 0), N.set(this, /* @__PURE__ */ new Set()), $(this, Ve, t, "f"), $(this, Ue, a.target, "f"), l(this, Ve, "f").addController(this);
  }
  get targets() {
    return l(this, N, "f").values();
  }
  get hasTargets() {
    return l(this, N, "f").size > 0;
  }
  hostConnected() {
    l(this, Ue, "f") !== null && this.observe(l(this, Ue, "f") ?? l(this, Ve, "f"));
  }
  hostDisconnected() {
    this.unobserveAll();
  }
  observe(t) {
    l(this, N, "f").has(t) || (l(this, N, "f").add(t), this._observe(t));
  }
  isObserving(t) {
    return l(this, N, "f").has(t);
  }
  unobserve(t) {
    l(this, N, "f").delete(t) && this._unobserve(t);
  }
  unobserveAll() {
    l(this, N, "f").forEach((t) => this.unobserve(t)), l(this, N, "f").clear();
  }
}
Ve = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap();
function _n() {
  return matchMedia("(forced-colors: active)").matches;
}
function oa(o2, t, a) {
  return o2 + (t - o2) * a;
}
function aa(o2, t, a, r) {
  const s = Math.pow(1 - r, 2) * o2.x + 2 * (1 - r) * r * t.x + Math.pow(r, 2) * a.x, i = Math.pow(1 - r, 2) * o2.y + 2 * (1 - r) * r * t.y + Math.pow(r, 2) * a.y;
  return { x: s, y: i };
}
function na(o2, t, a, r, s) {
  const i = Math.pow(1 - s, 3) * o2.x + 3 * Math.pow(1 - s, 2) * s * t.x + 3 * (1 - s) * Math.pow(s, 2) * a.x + Math.pow(s, 3) * r.x, c = Math.pow(1 - s, 3) * o2.y + 3 * Math.pow(1 - s, 2) * s * t.y + 3 * (1 - s) * Math.pow(s, 2) * a.y + Math.pow(s, 3) * r.y;
  return { x: i, y: c };
}
function kn(o2) {
  return (o2.match(/[a-zA-Z][^a-zA-Z]*/g) || []).map((a) => {
    const r = a[0], s = a.slice(1).trim().split(/[\s,]+/).filter(Boolean).map(Number);
    return { type: r, nums: s };
  });
}
function wn(o2, t) {
  const a = kn(o2);
  let r = { x: 0, y: 0 }, s = { x: 0, y: 0 };
  const i = [];
  for (const h of a) if (h.type === "M") r = { x: h.nums[0], y: h.nums[1] }, s = r;
  else if (h.type === "L") {
    const g = { x: h.nums[0], y: h.nums[1] }, y = g.x - r.x, S = g.y - r.y;
    i.push({ type: "L", pts: [r, g], length: Math.hypot(y, S) }), r = g;
  } else if (h.type === "H") {
    const g = { x: h.nums[0], y: r.y }, y = g.x - r.x;
    i.push({ type: "L", pts: [r, g], length: Math.abs(y) }), r = g;
  } else if (h.type === "V") {
    const g = { x: r.x, y: h.nums[0] }, y = g.y - r.y;
    i.push({ type: "L", pts: [r, g], length: Math.abs(y) }), r = g;
  } else if (h.type === "Q") {
    const g = { x: h.nums[0], y: h.nums[1] }, y = { x: h.nums[2], y: h.nums[3] };
    let S = 0, _ = r;
    const P = 20;
    for (let O = 1; O <= P; O++) {
      const ee = O / P, He = aa(r, g, y, ee);
      S += Math.hypot(He.x - _.x, He.y - _.y), _ = He;
    }
    i.push({ type: "Q", pts: [r, g, y], length: S }), r = y;
  } else if (h.type === "C") {
    const g = { x: h.nums[0], y: h.nums[1] }, y = { x: h.nums[2], y: h.nums[3] }, S = { x: h.nums[4], y: h.nums[5] };
    let _ = 0, P = r;
    const O = 20;
    for (let ee = 1; ee <= O; ee++) {
      const He = ee / O, ao = na(r, g, y, S, He);
      _ += Math.hypot(ao.x - P.x, ao.y - P.y), P = ao;
    }
    i.push({ type: "C", pts: [r, g, y, S], length: _ }), r = S;
  } else if (h.type === "Z") {
    const g = s.x - r.x, y = s.y - r.y;
    i.push({ type: "L", pts: [r, s], length: Math.hypot(g, y) }), r = s;
  }
  const u = i.reduce((h, g) => h + g.length, 0) / (t - 1), d = [];
  let v = 0, f = 0;
  for (let h = 0; h < t; h++) {
    const g = h * u;
    for (; f < i.length && v + i[f].length < g; ) v += i[f].length, f++;
    const y = i[f];
    if (!y) break;
    const S = (g - v) / y.length;
    if (y.type === "L") {
      const [_, P] = y.pts;
      d.push({ x: oa(_.x, P.x, S), y: oa(_.y, P.y, S) });
    } else if (y.type === "Q") {
      const [_, P, O] = y.pts;
      d.push(aa(_, P, O, S));
    } else if (y.type === "C") {
      const [_, P, O, ee] = y.pts;
      d.push(na(_, P, O, ee, S));
    }
  }
  return d;
}
function Sn(o2) {
  return `${o2.map((a) => {
    const r = ra(a.x * 100, 0, 100), s = ra(a.y * 100, 0, 100);
    return `${r.toFixed(2)}% ${s.toFixed(2)}%`;
  }).join(", ")}`;
}
function ra(o2, t, a) {
  return Math.max(t, Math.min(a, o2));
}
function En(o2) {
  let t = 1 / 0, a = 1 / 0, r = -1 / 0, s = -1 / 0;
  for (const i of o2) i.x < t && (t = i.x), i.x > r && (r = i.x), i.y < a && (a = i.y), i.y > s && (s = i.y);
  return { minX: t, minY: a, maxX: r, maxY: s, width: r - t, height: s - a };
}
function Ln(o2, t) {
  const a = o2.length, r = new Array(a);
  for (let s = 0; s < a; s++) r[s] = o2[(s + t) % a];
  return r;
}
function Mn(o2, t) {
  const a = Math.min(t.length, o2.length);
  let r = 0, s = 1 / 0;
  for (let i = 0; i < a; i++) {
    let c = 0;
    for (let u = 0; u < a; u++) {
      const d = t[(u + i) % a], v = o2[u], f = d.x - v.x, h = d.y - v.y;
      if (c += f * f + h * h, c >= s) break;
    }
    c < s && (s = c, r = i);
  }
  return r;
}
function sa(o2) {
  let t = 0;
  const a = o2.length;
  for (let r = 0; r < a; r++) {
    const s = o2[r], i = o2[(r + 1) % a];
    t += s.x * i.y - i.x * s.y;
  }
  return t / 2;
}
function zn(o2) {
  const t = o2.map((s) => {
    const i = En(s), c = s.map((y) => ({ x: y.x - i.minX, y: y.y - i.minY })), u = Math.max(i.width, i.height) || 1, d = c.map((y) => ({ x: y.x / u, y: y.y / u })), v = i.width / u, f = i.height / u, h = (1 - v) / 2, g = (1 - f) / 2;
    return d.map((y) => ({ x: y.x + h, y: y.y + g }));
  }), a = t[0], r = Math.sign(sa(a));
  for (let s = 1; s < t.length; s++) {
    let i = t[s];
    const c = Math.sign(sa(i));
    c !== 0 && c !== r && (i = i.slice().reverse());
    const u = Mn(a, i);
    t[s] = Ln(i, u);
  }
  return t;
}
function Tn(o2, t) {
  return zn(o2.map((a) => wn(a, t))).map((a) => Sn(a));
}
function An(o2) {
  return o2.assignedNodes({ flatten: true }).length > 0;
}
function $t() {
  return matchMedia("(prefers-reduced-motion)").matches;
}
function Pn(o2, t = document) {
  return new Promise((a) => {
    const r = t.querySelector(`#${o2}`);
    if (r) {
      a(r);
      return;
    }
    if (document.readyState === "complete" || document.readyState === "interactive") {
      a(t.querySelector(`#${o2}`));
      return;
    }
    document.addEventListener("DOMContentLoaded", () => a(t.querySelector(`#${o2}`)), { once: true });
  });
}
var Le, pe, ze, et, Me, Ct, _t, kt, wt, we, Zt, va, xo, fa;
class ft extends vt {
  constructor(t, a) {
    super(t, a), Le.add(this), ze.set(this, false), et.set(this, void 0), Me.set(this, void 0), Ct.set(this, (r) => l(this, Le, "m", va).call(this, r)), _t.set(this, (r) => l(this, Le, "m", xo).call(this, r)), kt.set(this, (r) => l(this, Le, "m", fa).call(this, r)), wt.set(this, () => $(this, ze, true, "f")), we.set(this, () => $(this, ze, false, "f")), $(this, et, a.callback, "f"), $(this, Me, a.filter, "f");
  }
  _observe(t) {
    t.addEventListener("keydown", l(this, Ct, "f")), t.addEventListener("focusin", l(this, _t, "f")), t.addEventListener("focusout", l(this, kt, "f")), t.addEventListener("touchstart", l(this, wt, "f"), { passive: true }), t.addEventListener("touchend", l(this, we, "f")), t.addEventListener("touchcancel", l(this, we, "f"));
  }
  _unobserve(t) {
    t.removeEventListener("keydown", l(this, Ct, "f")), t.removeEventListener("focusin", l(this, _t, "f")), t.removeEventListener("focusout", l(this, kt, "f")), t.removeEventListener("touchstart", l(this, wt, "f")), t.removeEventListener("touchend", l(this, we, "f")), t.removeEventListener("touchcancel", l(this, we, "f"));
  }
}
pe = ft, ze = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), we = /* @__PURE__ */ new WeakMap(), Le = /* @__PURE__ */ new WeakSet(), va = function(t) {
  if (l(this, Me, "f")?.call(this, t)) return;
  t.currentTarget.matches(":focus-within") && l(this, Le, "m", xo).call(this, t);
}, xo = function(t) {
  if (l(this, Me, "f")?.call(this, t) || l(this, ze, "f")) return;
  const a = t.currentTarget;
  l(this, et, "f").call(this, true, a.matches(":focus-visible") || l(pe, pe, "f", Zt) || _n(), a);
}, fa = function(t) {
  l(this, Me, "f")?.call(this, t) || l(this, ze, "f") || l(this, et, "f").call(this, false, false, t.currentTarget);
};
typeof window < "u" && (window.addEventListener("keydown", () => $(pe, pe, true, "f", Zt), { capture: true, passive: true }), window.addEventListener("pointerdown", () => $(pe, pe, false, "f", Zt), { capture: true }));
Zt = { value: false };
var W, he, se, le, St, Se, $o, yt, gt, ya, ga;
class xa extends vt {
  constructor(t, a) {
    super(t, a), W.add(this), he.set(this, void 0), se.set(this, /* @__PURE__ */ new Map()), le.set(this, /* @__PURE__ */ new Map()), St.set(this, (r) => l(this, W, "m", ya).call(this, r)), Se.set(this, (r) => l(this, W, "m", ga).call(this, r)), $(this, he, a.callback, "f"), this.startDelay = a.startDelay ?? 0, this.endDelay = a.endDelay ?? 0;
  }
  clearDelays() {
    for (const t of this.targets) l(this, W, "m", $o).call(this, t);
  }
  _observe(t) {
    t.addEventListener("pointerenter", l(this, St, "f")), t.addEventListener("pointerleave", l(this, Se, "f")), t.addEventListener("touchend", l(this, Se, "f"));
  }
  _unobserve(t) {
    t.removeEventListener("pointerenter", l(this, St, "f")), t.removeEventListener("pointerleave", l(this, Se, "f")), t.removeEventListener("touchend", l(this, Se, "f")), l(this, W, "m", $o).call(this, t);
  }
}
he = /* @__PURE__ */ new WeakMap(), se = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakSet(), $o = function(t) {
  l(this, W, "m", yt).call(this, t), l(this, W, "m", gt).call(this, t);
}, yt = function(t) {
  return l(this, se, "f").has(t) ? (clearTimeout(l(this, se, "f").get(t)), l(this, se, "f").delete(t)) : false;
}, gt = function(t) {
  return l(this, le, "f").has(t) ? (clearTimeout(l(this, le, "f").get(t)), l(this, le, "f").delete(t)) : false;
}, ya = function(t) {
  const a = t.target;
  l(this, W, "m", gt).call(this, a), this.startDelay > 0 ? (l(this, W, "m", yt).call(this, a), l(this, se, "f").set(a, setTimeout(() => {
    l(this, se, "f").delete(a), l(this, he, "f").call(this, true, a);
  }, this.startDelay))) : l(this, he, "f").call(this, true, a);
}, ga = function(t) {
  const a = t.target;
  l(this, W, "m", yt).call(this, a) || (this.endDelay > 0 ? (l(this, W, "m", gt).call(this, a), l(this, le, "f").set(a, setTimeout(() => {
    l(this, le, "f").delete(a), l(this, he, "f").call(this, false, a);
  }, this.endDelay))) : l(this, he, "f").call(this, false, a));
};
var j, I, U, tt, be, D, ot, Et, Lt, Ee, Mt, zt, $a, Ca, _a, ka, wa, ho;
class Wo extends vt {
  constructor(t, a) {
    super(t, a), j.add(this), I.set(this, void 0), U.set(this, void 0), tt.set(this, void 0), be.set(this, void 0), D.set(this, /* @__PURE__ */ new Map()), ot.set(this, void 0), Et.set(this, (r) => l(this, j, "m", $a).call(this, r)), Lt.set(this, (r) => l(this, j, "m", Ca).call(this, r)), Ee.set(this, (r) => l(this, j, "m", _a).call(this, r)), Mt.set(this, (r) => l(this, j, "m", ka).call(this, r)), zt.set(this, (r) => l(this, j, "m", wa).call(this, r)), $(this, I, a.capture, "f"), $(this, U, a.callback, "f"), $(this, tt, a.filter, "f"), $(this, be, a.isPressedKey, "f"), $(this, ot, a.minPressedDuration ?? 0, "f");
  }
  hostConnected() {
    document.addEventListener("pointerup", l(this, Lt, "f"), { capture: l(this, I, "f") }), document.addEventListener("touchend", l(this, Ee, "f"), { capture: l(this, I, "f") }), document.addEventListener("touchcancel", l(this, Ee, "f"), { capture: l(this, I, "f") }), super.hostConnected();
  }
  hostDisconnected() {
    document.removeEventListener("pointerup", l(this, Lt, "f"), { capture: l(this, I, "f") }), document.removeEventListener("touchend", l(this, Ee, "f"), { capture: l(this, I, "f") }), document.removeEventListener("touchcancel", l(this, Ee, "f"), { capture: l(this, I, "f") }), super.hostDisconnected(), l(this, D, "f").clear();
  }
  _observe(t) {
    t.addEventListener("pointerdown", l(this, Et, "f"), { capture: l(this, I, "f") }), l(this, be, "f") && (t.addEventListener("keydown", l(this, Mt, "f"), { capture: l(this, I, "f") }), t.addEventListener("keyup", l(this, zt, "f"), { capture: l(this, I, "f") }));
  }
  _unobserve(t) {
    t.removeEventListener("pointerdown", l(this, Et, "f"), { capture: l(this, I, "f") }), l(this, be, "f") && (t.removeEventListener("keydown", l(this, Mt, "f"), { capture: l(this, I, "f") }), t.removeEventListener("keyup", l(this, zt, "f"), { capture: l(this, I, "f") }));
  }
}
I = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), be = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), j = /* @__PURE__ */ new WeakSet(), $a = function(t) {
  if (!l(this, tt, "f")?.call(this, t) && !(t.pointerType === "mouse" && t.button > 1)) {
    for (const a of t.composedPath()) if (a instanceof HTMLElement && this.isObserving(a)) {
      l(this, D, "f").has(a) || (l(this, D, "f").set(a, performance.now()), l(this, U, "f").call(this, true, { x: t.x, y: t.y }, a));
      break;
    }
  }
}, Ca = function(t) {
  t.pointerType === "mouse" && t.button > 1 || l(this, j, "m", ho).call(this, t.x, t.y);
}, _a = function(t) {
  l(this, j, "m", ho).call(this, t.changedTouches[0]?.clientX ?? 0, t.changedTouches[0]?.clientY ?? 0);
}, ka = function(t) {
  if (l(this, tt, "f")?.call(this, t) || t.target !== t.currentTarget) return;
  const a = t.currentTarget;
  if (l(this, be, "f")?.call(this, t.key) && (t.key === " " && t.preventDefault(), !l(this, D, "f").has(a))) {
    l(this, D, "f").set(a, performance.now());
    const r = a.getBoundingClientRect();
    l(this, U, "f").call(this, true, { x: r.x + r.width / 2, y: r.y + r.height / 2 }, a);
  }
}, wa = function(t) {
  const a = t.target;
  if (l(this, D, "f").has(a) && l(this, be, "f")?.call(this, t.key)) {
    const r = l(this, ot, "f") - (performance.now() - l(this, D, "f").get(a)), s = a.getBoundingClientRect();
    r > 0 ? setTimeout(() => {
      l(this, D, "f").delete(a), l(this, U, "f").call(this, false, { x: s.x + s.width / 2, y: s.y + s.height / 2 }, a);
    }, r) : (l(this, D, "f").delete(a), l(this, U, "f").call(this, false, { x: s.x + s.width / 2, y: s.y + s.height / 2 }, a));
  }
}, ho = function(t, a) {
  for (const r of l(this, D, "f")) {
    const s = l(this, ot, "f") - (performance.now() - r[1]);
    s > 0 ? setTimeout(() => {
      l(this, D, "f").delete(r[0]), l(this, U, "f").call(this, false, { x: t, y: a }, r[0]);
    }, s) : (l(this, D, "f").delete(r[0]), l(this, U, "f").call(this, false, { x: t, y: a }, r[0]));
  }
};
var je, Tt, At, ie, Ke;
class In extends vt {
  constructor(t, a) {
    if (super(t, a), je.set(this, void 0), Tt.set(this, void 0), At.set(this, void 0), ie.set(this, void 0), Ke.set(this, true), $(this, je, a.callback, "f"), $(this, Tt, a.skipInitial ?? false, "f"), $(this, At, a.config, "f"), !window.ResizeObserver) {
      console.warn("ResizeController error: the browser does not support ResizeObserver.");
      return;
    }
    $(this, ie, new ResizeObserver((r, s) => l(this, je, "f").call(this, r, s)), "f");
  }
  async hostUpdated() {
    l(this, ie, "f") && !l(this, Tt, "f") && l(this, Ke, "f") && l(this, je, "f").call(this, [], l(this, ie, "f")), $(this, Ke, false, "f");
  }
  _observe(t) {
    l(this, ie, "f")?.observe(t, l(this, At, "f")), $(this, Ke, true, "f");
  }
  _unobserve(t) {
    l(this, ie, "f")?.unobserve(t);
  }
}
je = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap();
const H = (o2) => (t, a) => {
  const r = () => {
    typeof window < "u" && !customElements.get(o2) && customElements.define(o2, t);
  };
  a ? a.addInitializer(r) : r();
};
function Bo(o2) {
  const t = /* @__PURE__ */ Symbol("_id");
  return (a, r, s) => {
    const i = s.value;
    return s.value = function(...c) {
      const u = this;
      clearTimeout(u[t]), u[t] = setTimeout(() => i.apply(this, c), o2);
    }, s;
  };
}
var ve, Xt, at, Pt, ce, la, mo, Sa, Ea;
class Dn extends vt {
  constructor(t, a) {
    super(t, a), ve.add(this), Xt.set(this, void 0), at.set(this, void 0), Pt.set(this, (r) => l(this, ve, "m", Ea).call(this, r)), ce.set(this, /* @__PURE__ */ new Map()), $(this, Xt, a.debounce === true, "f"), $(this, at, a.callback, "f");
  }
  getScrollContainers(t) {
    return l(this, ce, "f").get(t);
  }
  _observe(t) {
    const a = l(this, ve, "m", Sa).call(this, t);
    if (a.length > 0) {
      l(this, ce, "f").set(t, a);
      for (const r of a) (r === document.documentElement ? document : r).addEventListener("scroll", l(this, Pt, "f"), { passive: true });
    }
  }
  _unobserve(t) {
    if (l(this, ce, "f").has(t)) {
      for (const a of l(this, ce, "f").get(t)) (a === document.documentElement ? document : a).removeEventListener("scroll", l(this, Pt, "f"));
      l(this, ce, "f").delete(t);
    }
  }
  _debounceCallback(t) {
    l(this, at, "f").call(this, t);
  }
}
Xt = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakSet(), la = function(t) {
  const a = t.shadowRoot;
  if (!a) return null;
  const r = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT);
  let s = r.currentNode;
  for (; s; ) {
    if (s instanceof Element && l(this, ve, "m", mo).call(this, s)) return s;
    s = r.nextNode();
  }
  return null;
}, mo = function(t) {
  const a = getComputedStyle(t);
  return /(auto|scroll)/.test(a.overflow + a.overflowY + a.overflowX);
}, Sa = function(t) {
  const a = new Array(), r = l(this, ve, "m", la).call(this, t);
  r && a.push(r);
  let s = t;
  for (; s; ) l(this, ve, "m", mo).call(this, s) && a.push(s), s = s.parentElement;
  return a;
}, Ea = function(t) {
  const a = t.target === document ? document.documentElement : t.target;
  l(this, Xt, "f") ? this._debounceCallback(a) : l(this, at, "f").call(this, a);
};
p([Bo(40)], Dn.prototype, "_debounceCallback", null);
function La(o2, ...t) {
  return typeof o2 == "object" && o2 !== null && t.every((a) => a in o2);
}
const G = /* @__PURE__ */ Symbol("internals"), ia = /* @__PURE__ */ Symbol("_internals"), ge = /* @__PURE__ */ Symbol("_customState");
function eo(o2, t) {
  var a;
  class r extends o2 {
    constructor() {
      super(...arguments), this[a] = /* @__PURE__ */ new Set();
    }
    get [(a = ge, G)]() {
      return this[ia] ?? (this[ia] = this.attachInternals());
    }
  }
  return r.formAssociated = t, r;
}
function Yt(o2, t) {
  return ge in o2 ? o2[ge].has(t) : o2[G].states.has(t);
}
function Z(o2, t) {
  Yt(o2, t) || (ge in o2 && o2[ge].add(t), o2[G]?.states.add(t), o2[G]?.states.has(t));
}
function E(o2, t) {
  return ge in o2 && o2[ge].delete(t), o2[G]?.states.delete(t) ? (o2[G]?.states.has(t), true) : false;
}
function ct(o2, t, a) {
  a ? Z(o2, t) : E(o2, t);
}
function Ma(o2) {
  class t extends o2 {
    constructor() {
      super(...arguments), this.checked = false;
    }
    update(r) {
      super.update(r), r.has("checked") && (this.role === "button" ? (this.ariaPressed = `${this.checked}`, this.ariaChecked = null) : this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = `${this.checked}`, this.ariaPressed = null));
    }
  }
  return p([x({ type: Boolean, reflect: true })], t.prototype, "checked", void 0), t;
}
function Rn(o2) {
  class t extends Ma(o2) {
    constructor() {
      super(...arguments), this.indeterminate = false;
    }
    update(r) {
      super.update(r), r.has("indeterminate") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = !this.checked && this.indeterminate ? "mixed" : `${this.checked}`);
    }
  }
  return p([x({ type: Boolean, reflect: true })], t.prototype, "indeterminate", void 0), t;
}
const to = { primary: e("var(--md-sys-color-primary, #6750A4)"), onPrimary: e("var(--md-sys-color-on-primary, #FFFFFF)"), primaryContainer: e("var(--md-sys-color-primary-container, #EADDFF)"), onPrimaryContainer: e("var(--md-sys-color-on-primary-container, #4F378B)"), primaryFixed: e("var(--md-sys-color-primary-fixed, #EADDFF)"), primaryFixedDim: e("var(--md-sys-color-primary-fixed-dim, #D0BCFF)"), onPrimaryFixed: e("var(--md-sys-color-on-primary-fixed, #21005D)"), onPrimaryFixedVariant: e("var(--md-sys-color-on-primary-fixed-variant, #4F378B)"), secondary: e("var(--md-sys-color-secondary, #625B71)"), onSecondary: e("var(--md-sys-color-on-secondary, #FFFFFF)"), secondaryContainer: e("var(--md-sys-color-secondary-container, #E8DEF8)"), onSecondaryContainer: e("var(--md-sys-color-on-secondary-container, #4A4458)"), secondaryFixed: e("var(--md-sys-color-secondary-fixed, #E8DEF8)"), secondaryFixedDim: e("var(--md-sys-color-secondary-fixed-dim, #CCC2DC)"), onSecondaryFixed: e("var(--md-sys-color-on-secondary-fixed, #1D192B)"), onSecondaryFixedVariant: e("var(--md-sys-color-on-secondary-fixed-variant, #4A4458)"), tertiary: e("var(--md-sys-color-tertiary, #7D5260)"), onTertiary: e("var(--md-sys-color-on-tertiary, #FFFFFF)"), tertiaryContainer: e("var(--md-sys-color-tertiary-container, #FFD8E4)"), onTertiaryContainer: e("var(--md-sys-color-on-tertiary-container, #633B48)"), tertiaryFixed: e("var(--md-sys-color-tertiary-fixed, #FFD8E4)"), tertiaryFixedDim: e("var(--md-sys-color-tertiary-fixed-dim, #EFB8C8)"), onTertiaryFixed: e("var(--md-sys-color-on-tertiary-fixed, #31111D)"), onTertiaryFixedVariant: e("var(--md-sys-color-on-tertiary-fixed-variant, #633B48)"), error: e("var(--md-sys-color-error, #B3261E)"), onError: e("var(--md-sys-color-on-error, #FFFFFF)"), errorContainer: e("var(--md-sys-color-error-container, #F9DEDC)"), onErrorContainer: e("var(--md-sys-color-on-error-container, #8C1D18)"), surface: e("var(--md-sys-color-surface, #FEF7FF)"), onSurface: e("var(--md-sys-color-on-surface, #1D1B20)"), onSurfaceVariant: e("var(--md-sys-color-on-surface-variant, #49454F)"), surfaceContainerLowest: e("var(--md-sys-color-surface-container-lowest, #FFFFFF)"), surfaceContainerLow: e("var(--md-sys-color-surface-container-low, #F7F2FA)"), surfaceContainer: e("var(--md-sys-color-surface-container, #F3EDF7)"), surfaceContainerHigh: e("var(--md-sys-color-surface-container-high, #ECE6F0)"), surfaceContainerHighest: e("var(--md-sys-color-surface-container-highest, #E6E0E9)"), surfaceDim: e("var(--md-sys-color-surface-dim, #DED8E1)"), surfaceBright: e("var(--md-sys-color-surface-bright, #FEF7FF)"), surfaceVariant: e("var(--md-sys-color-surface-variant, #E7E0EC)"), inverseSurface: e("var(--md-sys-color-inverse-surface, #322F35)"), inverseOnSurface: e("var(--md-sys-color-inverse-on-surface, #F5EFF7)"), inversePrimary: e("var(--md-sys-color-inverse-primary, #D0BCFF)"), outline: e("var(--md-sys-color-outline, #79747E)"), outlineVariant: e("var(--md-sys-color-outline-variant, #CAC4D0)"), shadow: e("var(--md-sys-color-shadow, #000000)"), scrim: e("var(--md-sys-color-scrim, #000000)") }, po = { scale: e("var(--md-sys-density-scale, 0)"), size: e("var(--md-sys-density-size, 0.25rem)") }, qn = { ...po, calc(o2) {
  return e(`calc(max(${o2}, ${po.scale}) * ${po.size})`);
} }, Hn = `color-mix(in srgb, var(--m3e-elevation-color, ${to.shadow}) 20%, transparent)`, Wn = ["0px 0px 0px 0px", "0px 2px 1px -1px", "0px 3px 1px -2px", "0px 3px 3px -2px", "0px 2px 4px -1px", "0px 3px 5px -1px", "0px 3px 5px -1px", "0px 4px 5px -2px", "0px 5px 5px -3px", "0px 5px 6px -3px", "0px 6px 6px -3px", "0px 6px 7px -4px", "0px 7px 8px -4px", "0px 7px 8px -4px", "0px 7px 9px -4px", "0px 8px 9px -5px", "0px 8px 10px -5px", "0px 8px 11px -5px", "0px 9px 11px -5px", "0px 9px 12px -6px", "0px 10px 13px -6px", "0px 10px 13px -6px", "0px 10px 14px -6px", "0px 11px 14px -7px", "0px 11px 15px -7px"], Bn = `color-mix(in srgb, var(--m3e-elevation-color, ${to.shadow}) 14%, transparent)`, Fn = ["0px 0px 0px 0px", "0px 1px 1px 0px", "0px 2px 2px 0px", "0px 3px 4px 0px", "0px 4px 5px 0px", "0px 5px 8px 0px", "0px 6px 10px 0px", "0px 7px 10px 1px", "0px 8px 10px 1px", "0px 9px 12px 1px", "0px 10px 14px 1px", "0px 11px 15px 1px", "0px 12px 17px 2px", "0px 13px 19px 2px", "0px 14px 21px 2px", "0px 15px 22px 2px", "0px 16px 24px 2px", "0px 17px 26px 2px", "0px 18px 28px 2px", "0px 19px 29px 2px", "0px 20px 31px 3px", "0px 21px 33px 3px", "0px 22px 35px 3px", "0px 23px 36px 3px", "0px 24px 38px 3px"], On = `color-mix(in srgb, var(--m3e-elevation-color, ${to.shadow}) 12%, transparent)`, Nn = ["0px 0px 0px 0px", "0px 1px 3px 0px", "0px 1px 5px 0px", "0px 1px 8px 0px", "0px 1px 10px 0px", "0px 1px 14px 0px", "0px 1px 18px 0px", "0px 2px 16px 1px", "0px 3px 14px 2px", "0px 3px 16px 2px", "0px 4px 18px 3px", "0px 4px 20px 3px", "0px 5px 22px 4px", "0px 5px 24px 4px", "0px 5px 26px 4px", "0px 6px 28px 5px", "0px 6px 30px 5px", "0px 6px 32px 5px", "0px 7px 34px 6px", "0px 7px 36px 6px", "0px 8px 38px 7px", "0px 8px 40px 7px", "0px 8px 42px 7px", "0px 9px 44px 8px", "0px 9px 46px 8px"];
function $e(o2) {
  return `${Hn} ${Wn[o2]},${Bn} ${Fn[o2]},${On} ${Nn[o2]}`;
}
const Vn = { level0: e(`var(--md-sys-elevation-level0, ${$e(0)})`), level1: e(`var(--md-sys-elevation-level1, ${$e(1)})`), level2: e(`var(--md-sys-elevation-level2, ${$e(3)})`), level3: e(`var(--md-sys-elevation-level3, ${$e(6)})`), level4: e(`var(--md-sys-elevation-level4, ${$e(8)})`), level5: e(`var(--md-sys-elevation-level5, ${$e(12)})`) };
function L(o2) {
  return e(`var(--md-sys-measurement-space${o2}, ${0.5 * (o2 / 100)}rem)`);
}
L(0), L(25), L(50), L(75), L(100), L(125), L(150), L(175), L(200), L(250), L(300), L(400), L(450), L(500), L(600), L(700), L(800), L(900);
const Un = { emphasized: e("var(--md-sys-motion-easing-emphasized, cubic-bezier(0.2, 0.0, 0, 1.0))"), emphasizedDecelerate: e("var(--md-sys-motion-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))"), emphasizedAccelerate: e("var(--md-sys-motion-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))"), standard: e("var(--md-sys-motion-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))"), standardDecelerate: e("var(--md-sys-motion-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))"), standardAccelerate: e("var(--md-sys-motion-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))") }, jn = { fastSpatial: e("var(--md-sys-motion-spring-fast-spatial, 350ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), defaultSpatial: e("var(--md-sys-motion-spring-default-spatial, 500ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), slowSpatial: e("var(--md-sys-motion-spring-slow-spatial, 750ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), fastEffects: e("var(--md-sys-motion-spring-fast-effects, 150ms cubic-bezier(0.31, 0.94, 0.34, 1.00))"), defaultEffects: e("var(--md-sys-motion-spring-default-effects, 200ms cubic-bezier(0.34, 0.80, 0.34, 1.00))"), slowEffects: e("var(--md-sys-motion-spring-slow-effects, 200ms cubic-bezier(0.34, 0.88, 0.34, 1.00))") }, Kn = { short1: e("var(--md-sys-motion-duration-short-1, 50ms)"), short2: e("var(--md-sys-motion-duration-short-2, 100ms)"), short3: e("var(--md-sys-motion-duration-short-3, 150ms)"), short4: e("var(--md-sys-motion-duration-short-4, 200ms)"), medium1: e("var(--md-sys-motion-duration-medium-1, 250ms)"), medium2: e("var(--md-sys-motion-duration-medium-2, 300ms)"), medium3: e("var(--md-sys-motion-duration-medium-3, 350ms)"), medium4: e("var(--md-sys-motion-duration-medium-4, 400ms)"), long1: e("var(--md-sys-motion-duration-long-1, 450ms)"), long2: e("var(--md-sys-motion-duration-long-2, 500ms)"), long3: e("var(--md-sys-motion-duration-long-3, 550ms)"), long4: e("var(--md-sys-motion-duration-long-4, 600ms)"), extraLong1: e("var(--md-sys-motion-duration-extra-long-1, 700ms)"), extraLong2: e("var(--md-sys-motion-duration-extra-long-2, 800ms)"), extraLong3: e("var(--md-sys-motion-duration-extra-long-3, 900ms)"), extraLong4: e("var(--md-sys-motion-duration-extra-long-4, 1000ms)") }, Zn = { easing: Un, duration: Kn, spring: jn }, Xn = { width: e("var(--m3e-scrollbar-width, auto)"), thinWidth: e("var(--m3e-scrollbar-thin-width, thin)"), color: e("var(--m3e-scrollbar-thumb-color, #938f94) var(--m3e-scrollbar-track-color, transparent)") }, m = { none: e("var(--md-sys-shape-corner-value-none, 0)"), extraSmall: e("var(--md-sys-shape-corner-value-extra-small, 0.25rem)"), small: e("var(--md-sys-shape-corner-value-small, 0.5rem)"), medium: e("var(--md-sys-shape-corner-value-medium, 0.75rem)"), large: e("var(--md-sys-shape-corner-value-large, 1rem)"), largeIncreased: e("var(--md-sys-shape-corner-value-large-increased, 1.25rem)"), extraLarge: e("var(--md-sys-shape-corner-value-extra-large, 1.75rem)"), extraLargeIncreased: e("var(--md-sys-shape-corner-value-extra-large-increased, 2rem)"), extraExtraLarge: e("var(--md-sys-shape-corner-value-extra-extra-large, 3rem)") }, Yn = { corner: { full: e("var(--md-sys-shape-corner-full, 624.9375rem)"), extraLargeTop: e(`var(--md-sys-shape-corner-extra-large-top, ${m.extraLarge} ${m.extraLarge} ${m.none} ${m.none})`), extraLarge: e(`var(--md-sys-shape-corner-extra-large, ${m.extraLarge})`), extraLargeEnd: e(`${m.none} ${m.extraLarge} ${m.extraLarge} ${m.none}`), extraLargeStart: e(`${m.extraLarge} ${m.none} ${m.none} ${m.extraLarge}`), largeTop: e(`var(--md-sys-shape-corner-large-top, ${m.large} ${m.large} ${m.none} ${m.none})`), largeEnd: e(`var(--md-sys-shape-corner-large-end, ${m.none} ${m.large} ${m.large} ${m.none})`), largeStart: e(`var(--md-sys-shape-corner-large-start, ${m.large} ${m.none} ${m.none} ${m.large})`), large: e(`var(--md-sys-shape-corner-large, ${m.large})`), medium: e(`var(--md-sys-shape-corner-medium, ${m.medium})`), mediumTop: e(`${m.medium} ${m.medium} ${m.none} ${m.none}`), mediumEnd: e(`${m.none} ${m.medium} ${m.medium} ${m.none}`), mediumStart: e(`${m.medium} ${m.none} ${m.none} ${m.medium}`), small: e(`var(--md-sys-shape-corner-small, ${m.small})`), smallTop: e(`${m.small} ${m.small} ${m.none} ${m.none}`), smallEnd: e(`${m.none} ${m.small} ${m.small} ${m.none}`), smallStart: e(`${m.small} ${m.none} ${m.none} ${m.small}`), extraSmallTop: e(`var(--md-sys-shape-corner-extra-small-top, ${m.extraSmall} ${m.extraSmall} ${m.none} ${m.none})`), extraSmall: e(`var(--md-sys-shape-corner-extra-small, ${m.extraSmall})`), extraSmallEnd: e(`${m.none} ${m.extraSmall} ${m.extraSmall} ${m.none}`), extraSmallStart: e(`${m.extraSmall} ${m.none} ${m.none} ${m.extraSmall}`), extraSmallBottom: e(`${m.none} ${m.none} ${m.extraSmall} ${m.extraSmall}`), none: e(`var(--md-sys-shape-corner-none, ${m.none})`), largeIncreased: e(`var(--md-sys-shape-corner-large-increased, ${m.largeIncreased})`), extraLargeIncreased: e(`var(--md-sys-shape-corner-extra-large-increased, ${m.extraLargeIncreased})`), extraExtraLarge: e(`var(--md-sys-shape-corner-extra-extra-large, ${m.extraExtraLarge})`) } }, Gn = { focusStateLayerOpacity: e("var(--md-sys-state-focus-state-layer-opacity, 10%)"), hoverStateLayerOpacity: e("var(--md-sys-state-hover-state-layer-opacity, 8%)"), pressedStateLayerOpacity: e("var(--md-sys-state-pressed-state-layer-opacity, 10%)") }, Qn = { standard: { display: { large: { fontSize: e("var(--md-sys-typescale-display-large-font-size, 3.5625rem)"), fontWeight: e("var(--md-sys-typescale-display-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-display-large-line-height, 4rem)"), tracking: e("var(--md-sys-typescale-display-large-tracking, 0.015625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-display-medium-font-size, 2.8125rem)"), fontWeight: e("var(--md-sys-typescale-display-medium-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-display-medium-line-height, 3.25rem)"), tracking: e("var(--md-sys-typescale-display-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-display-small-font-size, 2.25rem)"), fontWeight: e("var(--md-sys-typescale-display-small-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-display-small-line-height, 2.75rem)"), tracking: e("var(--md-sys-typescale-display-small-tracking, 0)") } }, headline: { large: { fontSize: e("var(--md-sys-typescale-headline-large-font-size, 2rem)"), fontWeight: e("var(--md-sys-typescale-headline-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-headline-large-line-height, 2.5rem)"), tracking: e("var(--md-sys-typescale-headline-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-headline-medium-font-size, 1.75rem)"), fontWeight: e("var(--md-sys-typescale-headline-medium-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-headline-medium-line-height, 2.25rem)"), tracking: e("var(--md-sys-typescale-headline-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-headline-small-font-size, 1.5rem)"), fontWeight: e("var(--md-sys-typescale-headline-small-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-headline-small-line-height, 2rem)"), tracking: e("var(--md-sys-typescale-headline-small-tracking, 0)") } }, title: { large: { fontSize: e("var(--md-sys-typescale-title-large-font-size, 1.375rem)"), fontWeight: e("var(--md-sys-typescale-title-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-title-large-line-height, 1.75rem)"), tracking: e("var(--md-sys-typescale-title-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-title-medium-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-title-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-title-medium-line-height, 1.5rem)"), tracking: e("var(--md-sys-typescale-title-medium-tracking, 0.009375rem)") }, small: { fontSize: e("var(--md-sys-typescale-title-small-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-title-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-title-small-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: e("var(--md-sys-typescale-body-large-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-body-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-body-large-line-height, 1.5rem)"), tracking: e("var(--md-sys-typescale-body-large-tracking, 0.03125rem)") }, medium: { fontSize: e("var(--md-sys-typescale-body-medium-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-body-medium-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-body-medium-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-body-medium-tracking, 0.015625rem)") }, small: { fontSize: e("var(--md-sys-typescale-body-small-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-body-small-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-body-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: e("var(--md-sys-typescale-label-large-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-label-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-label-large-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-label-large-tracking, 0.00625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-label-medium-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-label-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-label-medium-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-label-medium-tracking, 0.03125rem)") }, small: { fontSize: e("var(--md-sys-typescale-label-small-font-size, 0.6875rem)"), fontWeight: e("var(--md-sys-typescale-label-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-label-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-label-small-tracking, 0.03125rem)") } } }, emphasized: { display: { large: { fontSize: e("var(--md-sys-typescale-emphasized-display-large-font-size, 3.5625rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-display-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-display-large-line-height, 4rem)"), tracking: e("var(--md-sys-typescale-emphasized-display-large-tracking, 0.015625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-display-medium-font-size, 2.8125rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-display-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-display-medium-line-height, 3.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-display-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-display-small-font-size, 2.25rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-display-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-display-small-line-height, 2.75rem)"), tracking: e("var(--md-sys-typescale-emphasized-display-small-tracking, 0)") } }, headline: { large: { fontSize: e("var(--md-sys-typescale-emphasized-headline-large-font-size, 2rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-headline-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-headline-large-line-height, 2.5rem)"), tracking: e("var(--md-sys-typescale-emphasized-headline-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-headline-medium-font-size, 1.75rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-headline-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-headline-medium-line-height, 2.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-headline-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-headline-small-font-size, 1.5rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-headline-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-headline-small-line-height, 2rem)"), tracking: e("var(--md-sys-typescale-emphasized-headline-small-tracking, 0)") } }, title: { large: { fontSize: e("var(--md-sys-typescale-emphasized-title-large-font-size, 1.375rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-title-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-title-large-line-height, 1.75rem)"), tracking: e("var(--md-sys-typescale-emphasized-title-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-title-medium-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-title-medium-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-title-medium-line-height, 3.5rem)"), tracking: e("var(--md-sys-typescale-emphasized-title-medium-tracking, 0.009375rem)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-title-small-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-title-small-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-title-small-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: e("var(--md-sys-typescale-emphasized-body-large-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-body-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-body-large-line-height, 1.5rem)"), tracking: e("var(--md-sys-typescale-emphasized-body-large-tracking, 0.03125rem)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-body-medium-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-body-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-body-medium-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-body-medium-tracking, 0.015625rem)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-body-small-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-body-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-body-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-emphasized-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: e("var(--md-sys-typescale-emphasized-label-large-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-label-large-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-label-large-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-label-large-tracking, 0.00625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-label-medium-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-label-medium-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-label-medium-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-emphasized-label-medium-tracking, 0.03125rem)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-label-small-font-size, 0.6875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-label-small-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-label-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-emphasized-label-small-tracking, 0.03125rem)") } } } }, n = { color: to, elevation: Vn, motion: Zn, shape: Yn, state: Gn, typescale: Qn, scrollbar: Xn, density: qn };
function dt(o2) {
  return La(o2, "disabled");
}
function Fo(o2, t = true) {
  class a extends o2 {
    constructor() {
      super(...arguments), this.disabled = false;
    }
    update(s) {
      super.update(s), s.has("disabled") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaDisabled = this.disabled ? "true" : null);
    }
  }
  return p([x({ type: Boolean, reflect: t })], a.prototype, "disabled", void 0), a;
}
function ut(o2) {
  return La(o2, "disabledInteractive") && dt(o2);
}
const ca = ["click", "dblclick", "auxclick", "keydown", "keyup"], Jn = ["Tab", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Left", "Up", "Right", "Down"], bo = /* @__PURE__ */ Symbol("_suppressedEventHandler");
function er(o2) {
  var t;
  class a extends o2 {
    constructor() {
      super(...arguments), this[t] = (s) => {
        if (this.disabledInteractive) {
          if (s instanceof KeyboardEvent && Jn.includes(s.key)) return;
          s.stopImmediatePropagation(), s.preventDefault();
        }
      }, this.disabledInteractive = false;
    }
    connectedCallback() {
      ca.forEach((s) => this.addEventListener(s, this[bo], true)), super.connectedCallback();
    }
    disconnectedCallback() {
      ca.forEach((s) => this.removeEventListener(s, this[bo], true)), super.disconnectedCallback();
    }
    update(s) {
      super.update(s), (s.has("disabled") || s.has("disabledInteractive")) && this.role && this.role !== "none" && this.role !== "presentation" && this.role !== "none" && (this.ariaDisabled = this.disabled || this.disabledInteractive ? "true" : null);
    }
  }
  return t = bo, p([x({ attribute: "disabled-interactive", type: Boolean, reflect: true })], a.prototype, "disabledInteractive", void 0), a;
}
const Fe = /* @__PURE__ */ Symbol("_tabindex");
function tr(o2) {
  var t;
  class a extends o2 {
    constructor() {
      super(...arguments), this[t] = 0;
    }
    connectedCallback() {
      this[Fe] = Number.parseInt(this.getAttribute("tabindex") ?? "0"), super.connectedCallback();
    }
    firstUpdated(s) {
      super.firstUpdated(s), !this.hasAttribute("tabindex") && !s.has("disabled") && this.setAttribute("tabindex", `${this[Fe]}`);
    }
    update(s) {
      if (super.update(s), s.has("disabled")) if (!this.disabled && this.role !== "none") this.hasAttribute("tabindex") || this.setAttribute("tabindex", `${this[Fe]}`);
      else {
        const i = this.getAttribute("tabindex");
        i && (this[Fe] = Number.parseInt(i)), this.removeAttribute("tabindex");
      }
    }
  }
  return t = Fe, a;
}
const vo = /* @__PURE__ */ Symbol("_clickHandler");
function or(o2) {
  var t;
  class a extends o2 {
    constructor() {
      super(...arguments), this.type = "button", this[t] = async (s) => {
        if (s.defaultPrevented || dt(this) && this.disabled || ut(this) && this.disabledInteractive) return;
        const i = this[G].form;
        if (!(!i || this.type === "button") && (await new Promise((c) => setTimeout(c)), !s.defaultPrevented)) switch (this.type) {
          case "reset":
            i.reset();
            break;
          case "submit":
            i.addEventListener("submit", (c) => Object.defineProperty(c, "submitter", { configurable: true, enumerable: true, get: () => this }), { capture: true, once: true }), this[G].setFormValue(this.value), i.requestSubmit();
            break;
        }
      };
    }
    get name() {
      return this.getAttribute("name") ?? "";
    }
    set name(s) {
      s ? this.setAttribute("name", s) : this.removeAttribute("name");
    }
    get value() {
      return this.getAttribute("value");
    }
    set value(s) {
      s != null ? this.setAttribute("value", s) : this.removeAttribute("value");
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("click", this[vo]);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("click", this[vo]);
    }
  }
  return t = vo, a.formAssociated = true, p([x()], a.prototype, "name", null), p([x()], a.prototype, "value", null), p([x()], a.prototype, "type", void 0), a;
}
const Ce = /* @__PURE__ */ Symbol("_control"), fo = /* @__PURE__ */ Symbol("_firstUpdated");
function oo(o2) {
  var t;
  class a extends o2 {
    constructor() {
      super(...arguments), this[t] = false, this.htmlFor = null;
    }
    get control() {
      return this[Ce]?.deref() ?? null;
    }
    connectedCallback() {
      super.connectedCallback();
      const s = this[Ce]?.deref();
      s && this.attach(s);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      const s = this[Ce];
      s && (this.detach(), this[Ce] = s);
    }
    firstUpdated(s) {
      super.firstUpdated(s), this[fo] = true;
    }
    update(s) {
      if (super.update(s), s.has("htmlFor")) if (this.htmlFor) {
        const i = this.getRootNode();
        i && Pn(this.htmlFor, i).then((c) => {
          c !== this.control && (this.control && this.detach(), c instanceof HTMLElement && this.attach(c));
        });
      } else this.control && this[fo] && this.detach();
    }
    attach(s) {
      this[Ce] = new WeakRef(s);
    }
    detach() {
      this[Ce] = void 0;
    }
  }
  return t = fo, p([x({ attribute: "for" })], a.prototype, "htmlFor", void 0), a;
}
function ar(o2, t = true) {
  var a, r, s, i, c, u, d;
  class v extends o2 {
    constructor() {
      super(...arguments), a.add(this), r.set(this, false), s.set(this, (h) => l(this, a, "m", u).call(this, h)), i.set(this, (h) => l(this, a, "m", d).call(this, h)), c.set(this, () => $(this, r, false, "f"));
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("keydown", l(this, s, "f")), this.addEventListener("keyup", l(this, i, "f")), this.addEventListener("focusout", l(this, c, "f"));
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("keydown", l(this, s, "f")), this.removeEventListener("keyup", l(this, i, "f")), this.removeEventListener("focusout", l(this, c, "f"));
    }
  }
  return r = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakSet(), u = function(h) {
    if (h.target !== h.currentTarget || dt(this) && this.disabled || ut(this) && this.disabledInteractive) {
      $(this, r, false, "f");
      return;
    }
    (h.key === " " || t && h.key === "Enter") && $(this, r, true, "f");
  }, d = function(h) {
    if (h.target !== h.currentTarget || dt(this) && this.disabled || ut(this) && this.disabledInteractive || !l(this, r, "f")) {
      $(this, r, false, "f");
      return;
    }
    $(this, r, false, "f"), this.dispatchEvent(new MouseEvent("click", { cancelable: true, bubbles: true, composed: true }));
  }, v;
}
const za = /* @__PURE__ */ Symbol("renderPseudoLink"), yo = /* @__PURE__ */ Symbol("_clickHandler");
function nr(o2, t = false) {
  var a, r, s, i, c;
  class u extends o2 {
    constructor() {
      super(...arguments), a.add(this), this[c] = async (v) => {
        if (ut(this) && this.disabledInteractive && (v.preventDefault(), v.stopPropagation()), await new Promise((f) => f()), !v.defaultPrevented && this.href) {
          v.preventDefault(), v.stopImmediatePropagation();
          const f = document.createElement("a");
          f.href = this.href, f.rel = this.rel, f.target = this.target, this.download != null && (f.download = this.download), f.addEventListener("click", async () => {
            await new Promise((h) => h()), f.remove();
          }), document.body.appendChild(f), f.click();
        }
      }, this.href = "", this.target = "", this.rel = "";
    }
    get download() {
      return this.getAttribute("download");
    }
    set download(v) {
      const f = this.download;
      f !== v && (v ? this.setAttribute("download", v) : this.removeAttribute("download"), this.requestUpdate("download", f));
    }
    connectedCallback() {
      super.connectedCallback(), t || this.addEventListener("click", this[yo]), this.hasAttribute("href") && this.role === "button" && (this.role = "link");
    }
    disconnectedCallback() {
      super.disconnectedCallback(), t || this.removeEventListener("click", this[yo]);
    }
    [(a = /* @__PURE__ */ new WeakSet(), c = yo, za)]() {
      const v = dt(this) && this.disabled, f = ut(this) && this.disabledInteractive;
      return !v && !f && this.href ? M`<a href="${this.href}" target="${uo(this.target || void 0)}" rel="${uo(this.rel || void 0)}" download="${uo(this.download || void 0)}" tabindex="-1" aria-hidden="true" @pointerdown="${l(this, a, "m", r)}" @focus="${l(this, a, "m", s)}" @blur="${l(this, a, "m", i)}"></a>` : k;
    }
  }
  return r = function(v) {
    v.button !== 2 ? v.preventDefault() : v.target.removeAttribute("aria-hidden");
  }, s = function(v) {
    v.target.blur(), this.focus();
  }, i = function(v) {
    v.target.setAttribute("aria-hidden", "true");
  }, p([x()], u.prototype, "href", void 0), p([x()], u.prototype, "target", void 0), p([x()], u.prototype, "rel", void 0), p([x({ reflect: false })], u.prototype, "download", null), u;
}
const go = /* @__PURE__ */ Symbol("_wasConnected");
function rr(o2) {
  var t;
  class a extends o2 {
    constructor() {
      super(...arguments), this[t] = false;
    }
    reconnectedCallback() {
    }
    connectedCallback() {
      super.connectedCallback(), this[go] && this.reconnectedCallback();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this[go] = true;
    }
  }
  return t = go, a;
}
function J(o2, t) {
  class a extends o2 {
    connectedCallback() {
      this.role = this.role || t, super.connectedCallback();
    }
  }
  return a;
}
var It;
class sr extends z {
  constructor() {
    super(...arguments), It.set(this, (t) => {
      t.defaultPrevented || this._onClick(t);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.parentElement?.addEventListener("click", l(this, It, "f"));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.parentElement?.removeEventListener("click", l(this, It, "f"));
  }
  render() {
    return M`<slot></slot>`;
  }
}
It = /* @__PURE__ */ new WeakMap();
sr.styles = T`:host { display: contents; } ::slotted(.material-icons) { font-size: inherit !important; }`;
var q, nt, Ze, Ta, Xe, Ye, Co;
let Pe = class extends eo(z) {
  constructor() {
    super(...arguments), q.add(this), nt.set(this, false), Ze.set(this, false), this.open = false, this.orientation = "vertical", this.noAnimate = false;
  }
  update(t) {
    super.update(t);
    const a = this.noAnimate || t.has("orientation") && !t.has("open");
    if (Z(this, "--no-animate"), !l(this, nt, "f")) {
      this.open && ($(this, Ze, true, "f"), l(this, q, "m", Xe).call(this)), $(this, nt, true, "f");
      return;
    }
    this.toggleAttribute("inert", !this.open), this.open ? ($(this, Ze, true, "f"), a || $t() || (l(this, q, "m", Xe).call(this), ct(this, "--overflows", this.orientation === "vertical" ? this.clientHeight < this.scrollHeight : this.orientation === "horizontal" ? this.clientWidth < this.scrollWidth : this.clientHeight < this.scrollHeight || this.clientWidth < this.scrollWidth), l(this, q, "m", Ye).call(this)), E(this, "--closing"), Z(this, "--opening"), this.dispatchEvent(new Event("opening")), l(this, q, "m", Ye).call(this), E(this, "--no-animate"), l(this, q, "m", Co).call(this), a || $t() ? (l(this, q, "m", Xe).call(this), E(this, "--opening"), this.dispatchEvent(new Event("opened"))) : this.addEventListener("transitionend", () => {
      this.open && (l(this, q, "m", Xe).call(this), E(this, "--opening"), this.dispatchEvent(new Event("opened")));
    }, { once: true })) : (E(this, "--opening"), Z(this, "--closing"), this.dispatchEvent(new Event("closing")), l(this, q, "m", Co).call(this), l(this, Ze, "f") && E(this, "--no-animate"), a || $t() ? (l(this, q, "m", Ye).call(this), E(this, "--closing"), this.dispatchEvent(new Event("closed"))) : requestAnimationFrame(() => {
      l(this, q, "m", Ye).call(this), this.addEventListener("transitionend", () => {
        this.open || (E(this, "--closing"), this.dispatchEvent(new Event("closed")));
      }, { once: true });
    }));
  }
  render() {
    return M`<slot @slotchange="${l(this, q, "m", Ta)}"></slot>`;
  }
};
nt = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakMap();
q = /* @__PURE__ */ new WeakSet();
Ta = function() {
  $(this, nt, true, "f");
};
Xe = function() {
  switch (this.orientation) {
    case "vertical":
      this.style.height = "auto";
      break;
    case "horizontal":
      this.style.width = "auto";
      break;
    case "both":
      this.style.height = this.style.width = "auto";
      break;
  }
};
Ye = function() {
  switch (this.orientation) {
    case "vertical":
      this.style.height = "";
      break;
    case "horizontal":
      this.style.width = "";
      break;
    case "both":
      this.style.height = this.style.width = "";
      break;
  }
};
Co = function() {
  switch (this.orientation) {
    case "vertical":
      this.style.height = `${this.scrollHeight}px`;
      break;
    case "horizontal":
      this.style.width = `${this.scrollWidth}px`;
      break;
    case "both":
      this.style.height = `${this.scrollHeight}px`, this.style.width = `${this.scrollWidth}px`;
      break;
  }
};
Pe.styles = T`:host { display: block; overflow: hidden; } :host([orientation="vertical"]) { height: 0px; transition: ${e(`visibility var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
          ${n.motion.easing.standard},
        height var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
          ${n.motion.easing.standard},
        padding-top var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
          ${n.motion.easing.standard},
        padding-bottom var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
          ${n.motion.easing.standard}`)}; } :host([orientation="horizontal"]) { width: 0px; transition: ${e(`visibility var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
          ${n.motion.easing.standard},
        width var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
          ${n.motion.easing.standard},
        padding-left var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
          ${n.motion.easing.standard},
        padding-right var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
          ${n.motion.easing.standard}`)}; } :host([orientation="both"]) { height: 0px; width: 0px; transition: ${e(`visibility var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
          ${n.motion.easing.standard},
        width var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
          ${n.motion.easing.standard},
        height var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
          ${n.motion.easing.standard},
        padding var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
          ${n.motion.easing.standard}`)}; } :host(:not(:is(:state(--closing), :--closing)):not([open])) { visibility: hidden; } :host([orientation="vertical"]:not([open])) { min-height: unset !important; padding-top: 0px !important; padding-bottom: 0px !important; } :host([orientation="horizontal"]:not([open])) { min-width: unset !important; padding-left: 0px !important; padding-right: 0px !important; } :host([orientation="both"]:not([open])) { min-height: unset !important; min-width: unset !important; padding: 0px !important; } :host([no-animate]), :host(:is(:state(--no-animate), :--no-animate)) { transition-duration: 0ms; } :host([orientation="vertical"]:is(:state(--opening), :--opening)), :host([orientation="vertical"]:is(:state(--closing), :--closing)) { overflow-y: hidden !important; } :host([orientation="horizontal"]:is(:state(--opening), :--opening)), :host([orientation="horizontal"]:is(:state(--closing), :--closing)) { overflow-x: hidden !important; } :host([orientation="both"]:is(:state(--opening), :--opening)), :host([orientation="both"]:is(:state(--closing), :--closing)) { overflow-y: hidden !important; overflow-x: hidden !important; } :host(:is(:state(--overflows), :--overflows)) { scrollbar-gutter: stable; } ::slotted(*) { --m3e-collapsible-animation-duration: initial; } @media (prefers-reduced-motion) { :host { transition: none; } }`;
p([x({ type: Boolean, reflect: true })], Pe.prototype, "open", void 0);
p([x({ reflect: true })], Pe.prototype, "orientation", void 0);
p([x({ attribute: "no-animate", type: Boolean, reflect: true })], Pe.prototype, "noAnimate", void 0);
Pe = p([H("m3e-collapsible")], Pe);
const B = { liftDuration: e(`var(--m3e-elevation-lift-duration, ${n.motion.duration.short4})`), liftEasing: e(`var(--m3e-elevation-lift-easing, ${n.motion.easing.standard})`), settleDuration: e(`var(--m3e-elevation-settle-duration, ${n.motion.duration.short3})`), settleEasing: e(`var(--m3e-elevation-settle-easing, ${n.motion.easing.standardAccelerate})`), level: e(`var(--m3e-elevation-level, ${n.elevation.level0})`), hoverLevel: e(`var(--m3e-elevation-hover-level, ${n.elevation.level0})`), focusLevel: e(`var(--m3e-elevation-focus-level, ${n.elevation.level0})`), pressedLevel: e(`var(--m3e-elevation-pressed-level, ${n.elevation.level0})`) };
var Ge, Dt, Rt, qt, Aa, Pa, Ia;
let Ie = class extends oo(J(z, "none")) {
  constructor() {
    super(...arguments), Ge.add(this), Dt.set(this, new xa(this, { target: null, callback: (t) => l(this, Ge, "m", Aa).call(this, t) })), Rt.set(this, new ft(this, { target: null, callback: (t) => l(this, Ge, "m", Pa).call(this, t) })), qt.set(this, new Wo(this, { target: null, callback: (t) => l(this, Ge, "m", Ia).call(this, t) })), this.disabled = false, this.level = null;
  }
  attach(t) {
    super.attach(t), l(this, Dt, "f").observe(t), l(this, Rt, "f").observe(t), l(this, qt, "f").observe(t);
  }
  detach() {
    this.control && (l(this, Dt, "f").unobserve(this.control), l(this, Rt, "f").unobserve(this.control), l(this, qt, "f").unobserve(this.control)), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._shadow?.classList.toggle("hover", false), this._shadow?.classList.toggle("focus", false), this._shadow?.classList.toggle("pressed", false), this._shadow?.classList.toggle("resting", false);
  }
  updated(t) {
    super.updated(t), t.has("disabled") && this.disabled && (this._shadow?.classList.toggle("hover", false), this._shadow?.classList.toggle("focus", false), this._shadow?.classList.toggle("pressed", false), this._shadow?.classList.toggle("resting", true));
  }
  render() {
    return M`<div class="shadow"></div>`;
  }
};
Dt = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
qt = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakSet();
Aa = function(t) {
  this.disabled || (this._shadow?.classList.toggle("hover", t), this._shadow?.classList.toggle("resting", !t));
};
Pa = function(t) {
  this.disabled || this._shadow?.classList.toggle("focus", t);
};
Ia = function(t) {
  this.disabled || this._shadow?.classList.toggle("pressed", t);
};
Ie.styles = T`:host { display: block; } :host, .shadow { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .shadow.resting, .shadow.focus, .shadow.pressed { will-change: box-shadow; transition: ${e(`box-shadow ${B.settleDuration} ${B.settleEasing};`)}; } .shadow.hover { will-change: box-shadow; transition: ${e(`box-shadow ${B.liftDuration} ${B.liftEasing};`)}; } .shadow { box-shadow: ${B.level}; } .shadow.focus { box-shadow: ${B.focusLevel}; } .shadow.hover { box-shadow: ${B.hoverLevel}; } .shadow.pressed { box-shadow: ${B.pressedLevel}; } :host([level="0"]) .shadow { --m3e-elevation-level: ${n.elevation.level0}; --m3e-elevation-hover-level: ${n.elevation.level1}; } :host([level="1"]) .shadow { --m3e-elevation-level: ${n.elevation.level1}; --m3e-elevation-hover-level: ${n.elevation.level2}; } :host([level="2"]) .shadow { --m3e-elevation-level: ${n.elevation.level2}; --m3e-elevation-hover-level: ${n.elevation.level3}; } :host([level="3"]) .shadow { --m3e-elevation-level: ${n.elevation.level3}; --m3e-elevation-hover-level: ${n.elevation.level4}; } :host([level="4"]) .shadow { --m3e-elevation-level: ${n.elevation.level4}; --m3e-elevation-hover-level: ${n.elevation.level5}; } :host([level="5"]) .shadow { --m3e-elevation-level: ${n.elevation.level5}; --m3e-elevation-hover-level: ${B.level}; } :host([level]) .shadow { --m3e-elevation-focus-level: ${B.level}; --m3e-elevation-pressed-level: ${B.level}; } @media (prefers-reduced-motion) { .shadow.resting, .shadow.pressed, .shadow.focus, .shadow.hover { transition: none; } } @media (forced-colors: active) { .shadow { display: none; } }`;
p([X(".shadow")], Ie.prototype, "_shadow", void 0);
p([x({ type: Boolean, reflect: true })], Ie.prototype, "disabled", void 0);
p([x({ type: Number, reflect: true })], Ie.prototype, "level", void 0);
Ie = p([H("m3e-elevation")], Ie);
const w = { color: e(`var(--m3e-focus-ring-color, ${n.color.secondary})`), duration: e(`var(--m3e-focus-ring-duration, ${n.motion.duration.long2})`), thickness: e("var(--m3e-focus-ring-thickness, 3px)"), outwardOffset: e("var(--m3e-focus-ring-outward-offset, 2px)"), inwardOffset: e("var(--m3e-focus-ring-inward-offset, 0px)"), visibility: e("var(--m3e-focus-ring-visibility, visible)"), growthFactor: e("var(--m3e-focus-ring-growth-factor, 2)") };
var _o, Ht, Da;
let De = class extends oo(J(z, "none")) {
  constructor() {
    super(...arguments), _o.add(this), Ht.set(this, new ft(this, { target: null, callback: (t, a) => l(this, _o, "m", Da).call(this, a) })), this.inward = false, this.disabled = false;
  }
  show() {
    this._outline?.classList.toggle("visible", true);
  }
  hide() {
    this._outline?.classList.toggle("visible", false);
  }
  attach(t) {
    super.attach(t), l(this, Ht, "f").observe(t);
  }
  detach() {
    this.control && l(this, Ht, "f").unobserve(this.control), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.hide();
  }
  render() {
    return M`<div class="outline"></div>`;
  }
  updated(t) {
    super.updated(t), t.has("disabled") && this.disabled && this.hide();
  }
};
Ht = /* @__PURE__ */ new WeakMap();
_o = /* @__PURE__ */ new WeakSet();
Da = function(t) {
  this.disabled || (t ? this.show() : this.hide());
};
De.styles = T`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; outline: none; } .outline { contain: layout style; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; z-index: 1; outline-color: ${w.color}; outline-width: ${w.thickness}; visibility: ${w.visibility}; } .outline.visible { outline-style: solid; } :host(:not([inward])) .outline { outline-offset: ${w.outwardOffset}; } :host([inward]) .outline { outline-offset: calc(${w.inwardOffset} - ${w.thickness}); } :host(:not([inward])) .outline.visible { animation: grow-shrink ${w.duration}; } :host([inward]) .outline.visible { animation: shrink-grow ${w.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${w.thickness} * ${w.growthFactor}); } } @keyframes shrink-grow { 50% { outline-offset: calc( ${w.inwardOffset} - calc(${w.thickness} * ${w.growthFactor}) ); outline-width: calc(${w.thickness} * ${w.growthFactor}); } } @media (prefers-reduced-motion) { :host(:not([inward])) .outline.visible, :host([inward]) .outline.visible { animation: none; } } @media (forced-colors: active) { .outline { outline-color: Highlight; } }`;
p([X(".outline")], De.prototype, "_outline", void 0);
p([x({ type: Boolean, reflect: true })], De.prototype, "inward", void 0);
p([x({ type: Boolean, reflect: true })], De.prototype, "disabled", void 0);
De = p([H("m3e-focus-ring")], De);
let ko = class extends Rn(Fo(J(z, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return this.indeterminate ? M`<svg viewBox="0 -960 960 960" fill="currentColor"><path Required d="M240-440v-80h480v80H240Z"/></svg>` : this.checked ? M`<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>` : k;
  }
};
ko.styles = T`:host { display: inline-block; vertical-align: middle; width: var(--m3e-checkbox-icon-size, 1.125rem); height: var(--m3e-checkbox-icon-size, 1.125rem); border-radius: var(--m3e-checkbox-container-shape, 2px); box-sizing: border-box; flex: none; contain: layout style paint; } :host(:not([checked]):not([indeterminate])) { border-width: var(--m3e-checkbox-unselected-outline-thickness, 2px); border-style: solid; } :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { background-color: var(--m3e-checkbox-selected-container-color, ${n.color.primary}); color: var(--m3e-checkbox-selected-icon-color, ${n.color.onPrimary}); } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: var(--m3e-checkbox-unselected-outline-color, ${n.color.onSurfaceVariant}); } :host([disabled]:not([checked]):not([indeterminate])) { border-color: color-mix( in srgb, var(--m3e-checkbox-unselected-disabled-outline-color, ${n.color.onSurface}) var(--m3e-checkbox-unselected-disabled-outline-opacity, 38%), transparent ); } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-container-color, ${n.color.onSurface}) var(--m3e-checkbox-selected-disabled-container-opacity, 38%), transparent ); color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-icon-color, ${n.color.surface}) var(--m3e-checkbox-selected-disabled-icon-opacity, 100%), transparent ); } svg { pointer-events: none; } @media (forced-colors: active) { :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { border-color: Highlight; background-color: Highlight; color: HighlightText; } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: CanvasText; background: Canvas; } :host([disabled]:not([checked]):not([indeterminate])) { border-color: GrayText; background-color: Canvas; } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: GrayText; color: Canvas; } }`;
ko = p([H("m3e-pseudo-checkbox")], ko);
let wo = class extends Ma(Fo(J(z, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return M`<svg class="icon" viewBox="0 0 20 20"><mask id="cutout2"><rect width="100%" height="100%" fill="white"></rect><circle cx="10" cy="10" r="8" fill="black"></circle></mask><circle class="outer circle" cx="10" cy="10" r="10" mask="url(#cutout2)"></circle><circle class="inner circle" cx="10" cy="10" r="5"></circle></svg>`;
  }
};
wo.styles = T`:host { display: inline-block; vertical-align: middle; box-sizing: border-box; width: var(--m3e-radio-icon-size, 1.25rem); height: var(--m3e-radio-icon-size, 1.25rem); flex: none; contain: layout style paint; } .circle { fill: currentColor; } :host(:not([checked])) .circle.inner { opacity: 0; } :host(:not([checked])) { color: var(--m3e-radio-unselected-icon-color, ${n.color.onSurfaceVariant}); } :host([checked]) { color: var(--m3e-radio-selected-icon-color, ${n.color.primary}); } :host([disabled]) { color: color-mix(in srgb, var(--m3e-radio-disabled-icon-color, ${n.color.onSurface}) 38%, transparent); } @media (forced-colors: active) { :host { border-radius: 50%; } :host(:not([checked])) { color: CanvasText; background-color: Canvas; } :host([checked]) { color: HighlightText; background-color: Highlight; } :host([disabled]) { color: GrayText; background-color: Canvas; } }`;
wo = p([H("m3e-pseudo-radio")], wo);
const ae = { color: e(`var(--m3e-ripple-color, ${n.color.onSurface})`), opacity: e(`var(--m3e-ripple-opacity, ${n.state.pressedStateLayerOpacity})`), enterDuration: e(`var(--m3e-ripple-enter-duration, ${n.motion.duration.long4})`), exitDuration: e(`var(--m3e-ripple-exit-duration, ${n.motion.duration.short2})`), scaleFactor: e("var(--m3e-ripple-scale-factor, 2.5)") };
var de, A, Wt, Bt, Ra, qa;
let xe = class extends oo(J(z, "none")) {
  constructor() {
    super(...arguments), de.add(this), A.set(this, null), Wt.set(this, new Wo(this, { target: null, minPressedDuration: 150, isPressedKey: (t) => t === " ", callback: (t, { x: a, y: r }) => l(this, de, "m", qa).call(this, t, a, r) })), this.disabled = false, this.centered = false, this.unbounded = false, this.radius = null;
  }
  get visible() {
    return l(this, A, "f") !== null;
  }
  show(t, a, r = false) {
    l(this, de, "m", Bt).call(this);
    const s = this.getBoundingClientRect();
    this.centered && (t = s.left + s.width / 2, a = s.top + s.height / 2);
    let i = this.radius;
    if (!i || isNaN(i)) {
      const d = Math.max(Math.abs(t - s.left), Math.abs(t - s.right)), v = Math.max(Math.abs(a - s.top), Math.abs(a - s.bottom));
      i = Math.sqrt(d * d + v * v);
    }
    const c = t - s.left, u = a - s.top;
    $(this, A, document.createElement("div"), "f"), l(this, A, "f").classList.add("ripple"), r && l(this, A, "f").classList.add("persistent"), l(this, A, "f").style.left = `${c - i}px`, l(this, A, "f").style.top = `${u - i}px`, l(this, A, "f").style.width = `${i * 2}px`, l(this, A, "f").style.height = `${i * 2}px`, l(this, A, "f").addEventListener("animationend", () => l(this, de, "m", Ra).call(this, r), { once: true }), l(this, A, "f").addEventListener("transitionend", () => l(this, de, "m", Bt).call(this), { once: true }), this.shadowRoot?.appendChild(l(this, A, "f"));
  }
  hide() {
    l(this, A, "f")?.classList.add("exit");
  }
  attach(t) {
    super.attach(t), l(this, Wt, "f").observe(t);
  }
  detach() {
    this.control && l(this, Wt, "f").unobserve(this.control), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), l(this, de, "m", Bt).call(this);
  }
  updated(t) {
    super.updated(t), t.has("disabled") && this.disabled && this.hide();
  }
};
A = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakMap();
de = /* @__PURE__ */ new WeakSet();
Bt = function() {
  l(this, A, "f")?.remove(), $(this, A, null, "f");
};
Ra = function(t) {
  t ? l(this, A, "f")?.classList.add("pressed") : this.hide();
};
qa = function(t, a, r) {
  this.disabled || (t ? this.show(a, r, true) : this.hide());
};
xe.styles = T`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } :host(:not([unbounded])) { overflow: hidden; } :host(:not([unbounded])) .ripple { contain: layout style paint; } :host([unbounded]) .ripple { contain: layout style; } .ripple { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; transform: scale(0); border-radius: ${n.shape.corner.full}; background-color: color-mix(in srgb, ${ae.color} ${ae.opacity}, transparent); will-change: background-color, opacity; animation: ripple ${ae.enterDuration} linear; } .ripple.persistent.pressed { transform: scale(${ae.scaleFactor}); } .ripple.exit { transition: opacity ${ae.exitDuration} cubic-bezier(0, 0, 0.2, 0.1); opacity: 0; } @keyframes ripple { to { transform: scale(${ae.scaleFactor}); } } @media (prefers-reduced-motion) { .ripple { transform: scale(${ae.scaleFactor}); animation-duration: 90ms; } .ripple.exit { transition-duration: 10ms; } } @media (forced-colors: active) { .ripple { display: none; } }`;
p([x({ type: Boolean, reflect: true })], xe.prototype, "disabled", void 0);
p([x({ type: Boolean, reflect: true })], xe.prototype, "centered", void 0);
p([x({ type: Boolean, reflect: true })], xe.prototype, "unbounded", void 0);
p([x({ type: Number })], xe.prototype, "radius", void 0);
xe = p([H("m3e-ripple")], xe);
var Qe;
let Re = class extends eo(z) {
  constructor() {
    super(...arguments), Qe.set(this, () => this._updateScroll()), this.dividers = "above-below", this.thin = false;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("scroll", l(this, Qe, "f"));
  }
  update(t) {
    super.update(t), t.has("dividers") && (this.removeEventListener("scroll", l(this, Qe, "f")), this.dividers !== "none" && this.addEventListener("scroll", l(this, Qe, "f"), { passive: true }));
  }
  render() {
    return M`<slot @slotchange="${this._updateScroll}"></slot>`;
  }
  _updateScroll() {
    const t = (this.dividers === "above" || this.dividers === "above-below") && this.scrollTop > 0, a = (this.dividers === "below" || this.dividers === "above-below") && this.scrollHeight - this.scrollTop - this.clientHeight > 1;
    ct(this, "--above", t), ct(this, "--below", a);
  }
};
Qe = /* @__PURE__ */ new WeakMap();
Re.styles = T`:host { display: block; overflow-y: auto; position: relative; box-sizing: border-box; scrollbar-color: ${n.scrollbar.color}; border-top: var(--m3e-divider-thickness, 1px) solid transparent; border-bottom: var(--m3e-divider-thickness, 1px) solid transparent; outline-color: ${w.color}; outline-width: ${w.thickness}; outline-offset: ${w.outwardOffset}; } :host([thin]) { scrollbar-width: ${n.scrollbar.thinWidth}; } :host(:not([thin])) { scrollbar-width: ${n.scrollbar.width}; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: var(--m3e-divider-color, ${n.color.outlineVariant}); } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: var(--m3e-divider-color, ${n.color.outlineVariant}); } :host(:focus-visible) { outline-style: solid; animation: grow-shrink ${w.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${w.thickness} * ${w.growthFactor}); } } @media (forced-colors: active) { :host { border-top: var(--m3e-divider-thickness, 1px) solid Canvas; border-bottom: var(--m3e-divider-thickness, 1px) solid Canvas; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: GrayText; } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: GrayText; } } @media (prefers-reduced-motion) { :host(:focus-visible) { animation: none; } }`;
p([x()], Re.prototype, "dividers", void 0);
p([x({ type: Boolean, reflect: true })], Re.prototype, "thin", void 0);
p([Bo(40)], Re.prototype, "_updateScroll", null);
Re = p([H("m3e-scroll-container")], Re);
var rt, fe, Ha, Oo;
let Gt = class extends eo(z) {
  constructor() {
    super(...arguments), rt.add(this), fe.set(this, new Array()), this.selectedIndex = null;
  }
  connectedCallback() {
    super.connectedCallback(), Z(this, "--no-animate");
  }
  update(t) {
    super.update(t), t.has("selectedIndex") && (this.selectedIndex === null && Z(this, "--no-animate"), l(this, rt, "m", Oo).call(this), this.selectedIndex !== null && Yt(this, "--no-animate") && requestAnimationFrame(() => {
      this.selectedIndex !== null && E(this, "--no-animate");
    }));
  }
  render() {
    return M`<slot @slotchange="${l(this, rt, "m", Ha)}"></slot>`;
  }
};
fe = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakSet();
Ha = function(t) {
  const a = [...t.target.assignedElements({ flatten: true })];
  for (const r of l(this, fe, "f").filter((s) => !a.includes(s))) r.classList.remove("-before"), r.classList.remove("-after"), r.removeAttribute("inert");
  $(this, fe, a, "f"), l(this, rt, "m", Oo).call(this);
};
Oo = function() {
  const t = this.selectedIndex ?? l(this, fe, "f").length;
  for (let a = 0; a < l(this, fe, "f").length; a++) {
    const r = l(this, fe, "f")[a];
    r.classList.toggle("-before", a < t), r.classList.toggle("-after", a > t), r.toggleAttribute("inert", a !== t);
  }
};
Gt.styles = T`:host { display: flex; position: relative; overflow: hidden; } ::slotted(*) { width: 100%; top: 0; transition: ${e(`inset-inline-start var(--m3e-slide-animation-duration, ${n.motion.duration.long2}) ${n.motion.easing.standard},
        visibility var(--m3e-slide-animation-duration, ${n.motion.duration.long2}) ${n.motion.easing.standard} allow-discrete`)}; } ::slotted(.-before), ::slotted(.-after) { visibility: hidden; position: absolute; } ::slotted(.-before) { inset-inline-start: -100%; } ::slotted(.-after) { inset-inline-start: 100%; } ::slotted(:not(.-before):not(.-after)) { position: relative; inset-inline-start: 0; } :host(:is(:state(--no-animate), :--no-animate)) ::slotted(*) { transition: none; } @media (prefers-reduced-motion) { ::slotted(*) { transition: none; } }`;
p([x({ attribute: "selected-index", type: Number, reflect: true })], Gt.prototype, "selectedIndex", void 0);
Gt = p([H("m3e-slide")], Gt);
const _e = { hoverColor: e(`var(--m3e-state-layer-hover-color, ${n.color.onSurface})`), hoverOpacity: e(`var(--m3e-state-layer-hover-opacity, ${n.state.hoverStateLayerOpacity})`), focusColor: e(`var(--m3e-state-layer-focus-color, ${n.color.onSurface})`), focusOpacity: e(`var(--m3e-state-layer-focus-opacity, ${n.state.focusStateLayerOpacity})`), duration: e(`var(--m3e-state-layer-duration, ${n.motion.duration.medium1})`), easing: e(`var(--m3e-state-layer-easing, ${n.motion.easing.standard})`) };
var Ft, Ot, Nt, Wa, Ba;
let qe = class extends oo(J(z, "none")) {
  constructor() {
    super(...arguments), Ft.add(this), Ot.set(this, new xa(this, { target: null, callback: (t) => l(this, Ft, "m", Wa).call(this, t) })), Nt.set(this, new ft(this, { target: null, callback: (t, a) => l(this, Ft, "m", Ba).call(this, a) })), this.disabled = false, this.disableHover = false;
  }
  show(t) {
    this._layer?.classList.toggle(t, true);
  }
  hide(t) {
    this._layer?.classList.toggle(t, false);
  }
  attach(t) {
    super.attach(t), l(this, Ot, "f").observe(t), l(this, Nt, "f").observe(t);
  }
  detach() {
    this.control && (l(this, Ot, "f").unobserve(this.control), l(this, Nt, "f").unobserve(this.control)), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.hide("hover"), this.hide("focused");
  }
  updated(t) {
    super.updated(t), t.has("disabled") && this.disabled && (this.hide("hover"), this.hide("focused")), t.has("disableHover") && this.disableHover && this.hide("hover");
  }
  render() {
    return M`<div class="layer"></div>`;
  }
};
Ot = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
Ft = /* @__PURE__ */ new WeakSet();
Wa = function(t) {
  !this.disabled && !this.disableHover && (t ? this.show("hover") : this.hide("hover"));
};
Ba = function(t) {
  this.disabled || (t ? this.show("focused") : this.hide("focused"));
};
qe.styles = T`:host { display: block; } :host, .layer { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .layer { contain: layout style paint; will-change: background-color; transition: ${e(`background-color ${_e.duration} ${_e.easing}`)}; } .layer.focused { background-color: color-mix(in srgb, ${_e.focusColor} ${_e.focusOpacity}, transparent); } .layer.hover { background-color: color-mix(in srgb, ${_e.hoverColor} ${_e.hoverOpacity}, transparent); } @media (prefers-reduced-motion) { .layer { transition: none; } } @media (forced-colors: active) { .layer { display: none; } }`;
p([X(".layer")], qe.prototype, "_layer", void 0);
p([x({ type: Boolean, reflect: true })], qe.prototype, "disabled", void 0);
p([x({ attribute: "disable-hover", type: Boolean, reflect: true })], qe.prototype, "disableHover", void 0);
qe = p([H("m3e-state-layer")], qe);
var K, ht, F, ue, So, Fa, Eo, Lo;
let Q = Lo = class extends z {
  constructor() {
    super(), K.add(this), ht.set(this, `m3e-text-highlight-${Lo.__nextId++}`), F.set(this, new Array()), ue.set(this, null), this.disabled = false, this.term = "", this.caseSensitive = false, this.mode = "contains", this.isSupported && ($(this, ue, new CSSStyleSheet(), "f"), l(this, ue, "f").replaceSync(T`::highlight(${e(l(this, ht, "f"))}) { background-color: var(--m3e-text-highlight-container-color, ${n.color.secondaryContainer}); color: var(--m3e-text-highlight-color, ${n.color.onSecondaryContainer}); text-decoration: var(--m3e-text-highlight-decoration); text-shadow: var(--m3e-text-highlight-shadow); }`.toString()));
  }
  get isSupported() {
    return !!CSS.highlights;
  }
  get ranges() {
    return l(this, F, "f");
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.shadowRoot && l(this, ue, "f") && !this.shadowRoot.adoptedStyleSheets.includes(l(this, ue, "f")) && this.shadowRoot.adoptedStyleSheets.push(l(this, ue, "f"));
  }
  updated(t) {
    super.updated(t), (t.has("term") || t.has("caseSensitive") || t.has("disabled")) && l(this, K, "m", Eo).call(this);
  }
  render() {
    return M`<slot @slotchange="${l(this, K, "m", Eo)}"></slot>`;
  }
};
ht = /* @__PURE__ */ new WeakMap();
F = /* @__PURE__ */ new WeakMap();
ue = /* @__PURE__ */ new WeakMap();
K = /* @__PURE__ */ new WeakSet();
So = function(t) {
  return !/^\s*$/.test(t.data);
};
Fa = function o(t, a) {
  t instanceof HTMLSlotElement ? t.assignedNodes({ flatten: true }).forEach((r) => {
    switch (r.nodeType) {
      case Node.TEXT_NODE:
        l(this, K, "m", So).call(this, r) && a.push(r);
        break;
      case Node.ELEMENT_NODE:
        l(this, K, "m", o).call(this, r, a);
        break;
    }
  }) : t.childNodes.forEach((r) => {
    switch (r.nodeType) {
      case Node.TEXT_NODE:
        l(this, K, "m", So).call(this, r) && a.push(r);
        break;
      case Node.ELEMENT_NODE:
        l(this, K, "m", o).call(this, r, a);
        break;
    }
  });
};
Eo = function() {
  if (!this.isSupported || !this.isConnected || (CSS.highlights.delete(l(this, ht, "f")), l(this, F, "f").length = 0, this.disabled)) return;
  if (!this.term) {
    this.dispatchEvent(new CustomEvent("highlight", { detail: [...l(this, F, "f")], bubbles: false, composed: false }));
    return;
  }
  const t = new Array();
  if (l(this, K, "m", Fa).call(this, this, t), t.length > 0) {
    const a = this.caseSensitive ? this.term : this.term.toLowerCase();
    switch (this.mode) {
      case "starts-with":
        {
          const r = t[0];
          if (((this.caseSensitive ? r.textContent : r.textContent?.toLowerCase()) ?? "").startsWith(a)) {
            const i = new Range();
            i.setStart(r, 0), i.setEnd(r, a.length), l(this, F, "f").push(i);
          }
        }
        break;
      case "ends-with":
        {
          const r = t[t.length - 1], s = (this.caseSensitive ? r.textContent : r.textContent?.toLowerCase()) ?? "";
          if (s.endsWith(a)) {
            const i = s.length - a.length, c = i + a.length, u = new Range();
            u.setStart(r, i), u.setEnd(r, c), l(this, F, "f").push(u);
          }
        }
        break;
      case "contains":
        $(this, F, t.map((r) => ({ el: r, text: (this.caseSensitive ? r.textContent : r.textContent?.toLowerCase()) ?? "" })).map(({ el: r, text: s }) => {
          const i = new Array();
          let c = 0;
          for (; c < s.length; ) {
            const u = s.indexOf(a, c);
            if (u === -1) break;
            i.push(u), c = u + a.length;
          }
          return i.map((u) => {
            const d = new Range();
            return d.setStart(r, u), d.setEnd(r, u + a.length), d;
          });
        }).flat(), "f");
        break;
    }
    l(this, F, "f").length > 0 && CSS.highlights.set(l(this, ht, "f"), new Highlight(...l(this, F, "f")));
  }
  this.dispatchEvent(new CustomEvent("highlight", { detail: [...l(this, F, "f")], bubbles: false, composed: false }));
};
Q.styles = T`:host { display: contents; }`;
Q.__nextId = 0;
p([x({ type: Boolean, reflect: true })], Q.prototype, "disabled", void 0);
p([x()], Q.prototype, "term", void 0);
p([x({ attribute: "case-sensitive", type: Boolean })], Q.prototype, "caseSensitive", void 0);
p([x()], Q.prototype, "mode", void 0);
Q = Lo = p([H("m3e-text-highlight")], Q);
let Mo = class extends z {
  render() {
    return M`<span class="base"><slot></slot></span>`;
  }
};
Mo.styles = T`:host { flex: 1 1 auto; display: inline-flex; align-items: center; flex-wrap: nowrap; min-width: 0; } .base { flex: 1 1 auto; display: inline; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`;
Mo = p([H("m3e-text-overflow")], Mo);
const C = { "extra-small": { containerHeight: e(`calc(var(--m3e-button-extra-small-container-height, var(--m3e-button-container-height, 2rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-extra-small-outline-thickness, var(--m3e-button-outline-thickness, 1px))"), labelTextFontSize: e(`var(--m3e-button-extra-small-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.label.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-extra-small-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.label.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-extra-small-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.label.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-extra-small-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.label.large.tracking}))`), iconSize: e("var(--m3e-button-extra-small-icon-size, var(--m3e-button-icon-size, 1.25rem))"), shapeRound: e(`var(--m3e-button-extra-small-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-extra-small-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.medium}))`), selectedShapeRound: e(`var(--m3e-button-extra-small-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.medium}))`), selectedShapeSquare: e(`var(--m3e-button-extra-small-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-extra-small-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.small}))`), leadingSpace: e("var(--m3e-button-extra-small-leading-space, var(--m3e-button-leading-space, 0.75rem))"), trailingSpace: e("var(--m3e-button-extra-small-trailing-space, var(--m3e-button-trailing-space, 0.75rem))"), iconLabelSpace: e("var(--m3e-button-extra-small-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))") }, small: { containerHeight: e(`calc(var(--m3e-button-small-container-height, var(--m3e-button-container-height, 2.5rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-small-outline-thickness, var(--m3e-button-outline-thickness, 1px))"), labelTextFontSize: e(`var(--m3e-button-small-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.label.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-small-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.label.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-small-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.label.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-small-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.label.large.tracking}))`), iconSize: e("var(--m3e-button-small-icon-size, var(--m3e-button-icon-size, 1.25rem))"), shapeRound: e(`var(--m3e-button-small-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-small-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.medium}))`), selectedShapeRound: e(`var(--m3e-button-small-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.medium}))`), selectedShapeSquare: e(`var(--m3e-button-small-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-small-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.small}))`), leadingSpace: e("var(--m3e-button-small-leading-space, var(--m3e-button-leading-space, 1rem))"), trailingSpace: e("var(--m3e-button-small-trailing-space, var(--m3e-button-trailing-space, 1rem))"), iconLabelSpace: e("var(--m3e-button-small-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))") }, medium: { containerHeight: e(`calc(var(--m3e-button-medium-container-height, var(--m3e-button-container-height, 3.5rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-medium-outline-thickness, var(--m3e-button-outline-thickness, 1px))"), labelTextFontSize: e(`var(--m3e-button-medium-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.body.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-medium-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.body.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-medium-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.body.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-medium-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.body.large.tracking}))`), iconSize: e("var(--m3e-button-medium-icon-size, var(--m3e-button-icon-size, 1.5rem))"), shapeRound: e(`var(--m3e-button-medium-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-medium-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.large}))`), selectedShapeRound: e(`var(--m3e-button-medium-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.large}))`), selectedShapeSquare: e(`var(--m3e-button-medium-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-medium-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.medium}))`), leadingSpace: e("var(--m3e-button-medium-leading-space, var(--m3e-button-leading-space, 1.5rem))"), trailingSpace: e("var(--m3e-button-medium-trailing-space, var(--m3e-button-trailing-space, 1.5rem))"), iconLabelSpace: e("var(--m3e-button-medium-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))") }, large: { containerHeight: e(`calc(var(--m3e-button-large-container-height, var(--m3e-button-container-height, 6rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-large-outline-thickness, var(--m3e-button-outline-thickness, 2px))"), labelTextFontSize: e(`var(--m3e-button-large-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.headline.small.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-large-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.headline.small.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-large-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.headline.small.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-large-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.headline.small.tracking}))`), iconSize: e("var(--m3e-button-large-icon-size, var(--m3e-button-icon-size, 2rem))"), shapeRound: e(`var(--m3e-button-large-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-large-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.extraLarge}))`), selectedShapeRound: e(`var(--m3e-button-large-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.extraLarge}))`), selectedShapeSquare: e(`var(--m3e-button-large-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-large-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.large}))`), leadingSpace: e("var(--m3e-button-large-leading-space, var(--m3e-button-leading-space, 3rem))"), trailingSpace: e("var(--m3e-button-large-trailing-space, var(--m3e-button-trailing-space, 3rem))"), iconLabelSpace: e("var(--m3e-button-large-icon-label-space, var(--m3e-button-icon-label-space, 0.75rem))") }, "extra-large": { containerHeight: e(`calc(var(--m3e-button-extra-large-container-height, var(--m3e-button-container-height, 8.5rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-extra-large-outline-thickness, var(--m3e-button-outline-thickness, 3px))"), labelTextFontSize: e(`var(--m3e-button-extra-large-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.headline.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-extra-large-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.headline.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-extra-large-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.headline.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-extra-large-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.headline.large.tracking}))`), iconSize: e("var(--m3e-button-extra-large-icon-size, var(--m3e-button-icon-size, 2.5rem))"), shapeRound: e(`var(--m3e-button-extra-large-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-extra-large-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.extraLarge}))`), selectedShapeRound: e(`var(--m3e-button-extra-large-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.extraLarge}))`), selectedShapeSquare: e(`var(--m3e-button-extra-large-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-extra-large-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.large}))`), leadingSpace: e("var(--m3e-button-extra-large-leading-space, var(--m3e-button-leading-space, 4rem))"), trailingSpace: e("var(--m3e-button-extra-large-trailing-space, var(--m3e-button-trailing-space, 4rem))"), iconLabelSpace: e("var(--m3e-button-extra-large-icon-label-space, var(--m3e-button-icon-label-space, 1rem))") } };
function Oe(o2) {
  return T`:host([size="${e(o2)}"]) .base { height: ${C[o2].containerHeight}; } :host([size="${e(o2)}"]) .wrapper { padding-inline-start: calc(${C[o2].leadingSpace} - calc(var(--_adjacent-shrink, 0px) / 2)); padding-inline-end: calc(${C[o2].trailingSpace} - calc(var(--_adjacent-shrink, 0px) / 2)); column-gap: ${C[o2].iconLabelSpace}; } :host([size="${e(o2)}"]) .label { font-size: ${C[o2].labelTextFontSize}; font-weight: ${C[o2].labelTextFontWeight}; line-height: ${C[o2].labelTextLineHeight}; letter-spacing: ${C[o2].labelTextTracking}; } :host([size="${e(o2)}"]) .icon { font-size: ${C[o2].iconSize}; --m3e-icon-size: ${C[o2].iconSize}; } :host([size="${e(o2)}"]) .base { outline-offset: calc(0px - ${C[o2].outlineThickness}); outline-width: ${C[o2].outlineThickness}; } :host(:not(:is(:state(--connected), :--connected))[size="${e(o2)}"][shape="rounded"]) .base { border-radius: var(--_button-shape, ${C[o2].shapeRound}); } :host( :is(:state(--connected), :--connected)[size="${e(o2)}"][shape="rounded"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${C[o2].shapeRound}); } :host( :not(:is(:state(--connected), :--connected))[size="${e(o2)}"][shape="rounded"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: ${C[o2].selectedShapeRound}; } :host(:not(:is(:state(--connected), :--connected))[size="${e(o2)}"][shape="square"]) .base { border-radius: ${C[o2].shapeSquare}; } :host( :not(:is(:state(--connected), :--connected))[size="${e(o2)}"][shape="square"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${C[o2].selectedShapeSquare}); } :host(:not(:is(:state(--connected), :--connected))[size="${e(o2)}"]:is(:state(--pressed), :--pressed)) .base { border-radius: ${C[o2].shapePressedMorph}; } :host(:is(:state(--connected), :--connected)[size="${e(o2)}"][shape="rounded"]:not([toggle][selected])) .base { border-start-start-radius: var( --_button-rounded-start-shape, var(--_button-shape, ${C[o2].shapeRound}) ); border-end-start-radius: var( --_button-rounded-start-shape, var(--_button-shape, ${C[o2].shapeRound}) ); border-start-end-radius: var( --_button-rounded-end-shape, var(--_button-shape, ${C[o2].shapeRound}) ); border-end-end-radius: var( --_button-rounded-end-shape, var(--_button-shape, ${C[o2].shapeRound}) ); } :host(:is(:state(--connected), :--connected)[size="${e(o2)}"][shape="square"]) .base { border-start-start-radius: var(--_button-square-start-shape, ${C[o2].shapeSquare}); border-end-start-radius: var(--_button-square-start-shape, ${C[o2].shapeSquare}); border-start-end-radius: var(--_button-square-end-shape, ${C[o2].shapeSquare}); border-end-end-radius: var(--_button-square-end-shape, ${C[o2].shapeSquare}); } :host( :is(:state(--connected), :--connected)[size="${e(o2)}"][shape="square"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${C[o2].selectedShapeSquare}); } :host(:is(:state(--connected), :--connected)[size="${e(o2)}"]:is(:state(--pressed), :--pressed)) .base { border-start-start-radius: var(--_button-start-shape-pressed-morph, ${C[o2].shapePressedMorph}); border-end-start-radius: var(--_button-start-shape-pressed-morph, ${C[o2].shapePressedMorph}); border-start-end-radius: var(--_button-end-shape-pressed-morph, ${C[o2].shapePressedMorph}); border-end-end-radius: var(--_button-end-shape-pressed-morph, ${C[o2].shapePressedMorph}); }`;
}
const lr = [Oe("extra-small"), Oe("small"), Oe("medium"), Oe("large"), Oe("extra-large")], ir = T`:host { display: inline-block; outline: none; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); } .base { box-sizing: border-box; vertical-align: middle; display: inline-flex; align-items: center; justify-content: center; position: relative; width: 100%; transition: ${e(`background-color ${n.motion.duration.short4} ${n.motion.easing.standard}`)}; } .touch { position: absolute; height: 3rem; left: 0; right: 0; } :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base { transition: ${e(`background-color ${n.motion.duration.short4} ${n.motion.easing.standard},
          border-radius ${n.motion.spring.fastEffects}`)}; } .wrapper { width: 100%; overflow: hidden; display: inline-flex; align-items: center; justify-content: center; } .label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: ${e(`color ${n.motion.duration.short4} ${n.motion.easing.standard}`)}; } .icon { transition: ${e(`color ${n.motion.duration.short4} ${n.motion.easing.standard}`)}; } :host(:not(:disabled):not([disabled-interactive])) { cursor: pointer; } :host([disabled-interactive]) { cursor: not-allowed; } ::slotted([slot="icon"]), ::slotted([slot="selected-icon"]), ::slotted([slot="trailing-icon"]) { font-size: inherit !important; flex: none; } ::slotted(svg[slot="icon"]), ::slotted(svg[slot="selected-icon"]), ::slotted(svg[slot="trailing-icon"]) { width: 1em; height: 1em; } :host([toggle]:not([selected])) .base.with-selected-icon slot[name="selected-icon"], :host([toggle][selected]) .base.with-selected-icon slot[name="icon"] { display: none; } a { all: unset; display: block; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; z-index: 1; } :host(:is(:state(--grouped), :--grouped):is(:state(--connected), :--connected)) { flex: 1 1 auto; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) { transition: ${e(`width ${n.motion.spring.fastEffects}`)}; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) .wrapper { transition: ${e(`padding-inline ${n.motion.spring.fastEffects}`)}; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) { flex-shrink: 0; flex-grow: 0; } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):not( :is(:state(--pressed), :--pressed, :state(--adjacent-pressed), :--adjacent-pressed) ) ) { width: var(--_button-width); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):not( :is(:state(--pressed), :--pressed) ):is(:state(--adjacent-pressed), :--adjacent-pressed) ) { width: calc(var(--_button-width) - var(--_adjacent-shrink, 0px)); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):is( :state(--pressed), :--pressed ):not([disabled-interactive]):not(:disabled) ) { width: calc( var(--_button-width) + calc(var(--_button-width) * var(--m3e-standard-button-group-width-multiplier, 0.15)) ); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):is( :state(--adjacent-pressed), :--adjacent-pressed ):not(:is(:state(--pressed), :--pressed)) ) .label { text-overflow: clip; } @media (forced-colors: active) { .base, .label, .icon { transition: none; } :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base { transition: ${e(`border-radius ${n.motion.spring.fastEffects}`)}; } :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .base { background-color: ButtonFace; outline-color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .label, :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .icon { color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .base { background-color: ButtonFace; outline-color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .label, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected]):focus) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .icon, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .icon, :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected]):focus) .icon { color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .base { background-color: ButtonText; outline: none; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .label, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle][selected]) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]:focus) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .icon, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle][selected]) .icon, :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]:focus) .icon { forced-color-adjust: none; color: ButtonFace; background-color: ButtonText; } :host([variant]:disabled) .base, :host([variant][disabled-interactive]) .base { outline-color: GrayText; background-color: unset; } :host([variant]:disabled) .label, :host([variant][disabled-interactive]) .label, :host([variant]:disabled) .icon, :host([variant][disabled-interactive]) .icon { color: GrayText; } .base { outline-style: solid; } :host([size="extra-small"]) .base { outline-offset: calc(0px - var(--m3e-button-extra-small-outline-thickness, 1px)); outline-width: var(--m3e-button-extra-small-outline-thickness, 1px); } :host([size="small"]) .base { outline-offset: calc(0px - var(--m3e-button-small-outline-thickness, 1px)); outline-width: var(--m3e-button-small-outline-thickness, 1px); } :host([size="medium"]) .base { outline-offset: calc(0px - var(--m3e-button-medium-outline-thickness, 1px)); outline-width: var(--m3e-button-medium-outline-thickness, 1px); } :host([size="large"]) .base { outline-offset: calc(0px - var(--m3e-button-large-outline-thickness, 2px)); outline-width: var(--m3e-button-large-outline-thickness, 2px); } :host([size="extra-large"]) .base { outline-offset: calc(0px - var(--m3e-button-extra-large-outline-thickness, 3px)); outline-width: var(--m3e-button-extra-large-outline-thickness, 3px); } } @media (prefers-reduced-motion) { :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))), :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) .wrapper, :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base, .base, .label, .icon { transition: none; } }`, b = { elevated: { labelTextColor: e(`var(--m3e-elevated-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.primary}))`), iconColor: e(`var(--m3e-elevated-button-icon-color, var(--m3e-button-icon-color, ${n.color.primary}))`), containerColor: e(`var(--m3e-elevated-button-container-color, var(--m3e-button-container-color, ${n.color.surfaceContainerLow}))`), containerElevation: e(`var(--m3e-elevated-button-container-elevation, var(--m3e-button-container-elevation, ${n.elevation.level1}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-elevated-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.primary}))`), unselectedContainerColor: e(`var(--m3e-elevated-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${n.color.surfaceContainerLow}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.onPrimary}))`), selectedIconColor: e(`var(--m3e-elevated-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.onPrimary}))`), selectedContainerColor: e(`var(--m3e-elevated-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.primary}))`), disabled: { containerColor: e(`var(--m3e-elevated-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-elevated-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-elevated-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-elevated-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-elevated-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-elevated-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), containerElevation: e(`var(--m3e-elevated-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${n.elevation.level0}))`) }, hover: { iconColor: e(`var(--m3e-elevated-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-elevated-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-elevated-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-elevated-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), containerElevation: e(`var(--m3e-elevated-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${n.elevation.level2}))`), unselectedIconColor: e(`var(--m3e-elevated-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-elevated-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-elevated-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-elevated-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.onPrimary}))`) }, focus: { iconColor: e(`var(--m3e-elevated-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-elevated-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-elevated-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-elevated-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), containerElevation: e(`var(--m3e-elevated-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${n.elevation.level1}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-elevated-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-elevated-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-elevated-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-elevated-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.onPrimary}))`) }, pressed: { iconColor: e(`var(--m3e-elevated-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-elevated-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-elevated-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-elevated-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), containerElevation: e(`var(--m3e-elevated-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${n.elevation.level1}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-elevated-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-elevated-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-elevated-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-elevated-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.onPrimary}))`) } }, outlined: { labelTextColor: e(`var(--m3e-outlined-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.onSurfaceVariant}))`), iconColor: e(`var(--m3e-outlined-button-icon-color, var(--m3e-button-icon-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-outline-color, var(--m3e-button-outline-color, ${n.color.outlineVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedIconColor: e(`var(--m3e-outlined-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.onSurfaceVariant}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedIconColor: e(`var(--m3e-outlined-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedContainerColor: e(`var(--m3e-outlined-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.inverseSurface}))`), disabled: { containerColor: e(`var(--m3e-outlined-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-outlined-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-outlined-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-outlined-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-outlined-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-outlined-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), outlineColor: e(`var(--m3e-outlined-button-disabled-outline-color, var(--m3e-button-disabled-outline-color, ${n.color.outlineVariant}))`) }, hover: { iconColor: e(`var(--m3e-outlined-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.onSurfaceVariant}))`), labelTextColor: e(`var(--m3e-outlined-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-hover-outline-color, var(--m3e-button-hover-outline-color, ${n.color.outlineVariant}))`), stateLayerColor: e(`var(--m3e-outlined-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.onSurfaceVariant}))`), stateLayerOpacity: e(`var(--m3e-outlined-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-outlined-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-outlined-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-outlined-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedStateLayerColor: e(`var(--m3e-outlined-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.inverseOnSurface}))`) }, focus: { iconColor: e(`var(--m3e-outlined-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.onSurfaceVariant}))`), labelTextColor: e(`var(--m3e-outlined-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-focus-outline-color, var(--m3e-button-focus-outline-color, ${n.color.outlineVariant}))`), stateLayerColor: e(`var(--m3e-outlined-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.onSurfaceVariant}))`), stateLayerOpacity: e(`var(--m3e-outlined-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-outlined-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-outlined-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-outlined-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedStateLayerColor: e(`var(--m3e-outlined-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.inverseOnSurface}))`) }, pressed: { iconColor: e(`var(--m3e-outlined-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.onSurfaceVariant}))`), labelTextColor: e(`var(--m3e-outlined-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-pressed-outline-color, var(--m3e-button-pressed-outline-color, ${n.color.outlineVariant}))`), stateLayerColor: e(`var(--m3e-outlined-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.onSurfaceVariant}))`), stateLayerOpacity: e(`var(--m3e-outlined-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-outlined-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-outlined-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-outlined-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedStateLayerColor: e(`var(--m3e-outlined-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.inverseOnSurface}))`) } }, filled: { labelTextColor: e(`var(--m3e-filled-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.onPrimary}))`), iconColor: e(`var(--m3e-filled-button-icon-color, var(--m3e-button-icon-color, ${n.color.onPrimary}))`), containerColor: e(`var(--m3e-filled-button-container-color, var(--m3e-button-container-color, ${n.color.primary}))`), containerElevation: e(`var(--m3e-filled-button-container-elevation, var(--m3e-button-container-elevation, ${n.elevation.level0}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedIconColor: e(`var(--m3e-filled-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedContainerColor: e(`var(--m3e-filled-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${n.color.surfaceContainer}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.onPrimary}))`), selectedIconColor: e(`var(--m3e-filled-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.onPrimary}))`), selectedContainerColor: e(`var(--m3e-filled-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.primary}))`), disabled: { containerColor: e(`var(--m3e-filled-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-filled-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-filled-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-filled-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-filled-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-filled-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), containerElevation: e(`var(--m3e-filled-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${n.elevation.level0}))`) }, hover: { iconColor: e(`var(--m3e-filled-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.onPrimary}))`), labelTextColor: e(`var(--m3e-filled-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.onPrimary}))`), stateLayerColor: e(`var(--m3e-filled-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.onPrimary}))`), stateLayerOpacity: e(`var(--m3e-filled-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), containerElevation: e(`var(--m3e-filled-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${n.elevation.level1}))`), unselectedIconColor: e(`var(--m3e-filled-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-filled-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-filled-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-filled-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.onPrimary}))`) }, focus: { iconColor: e(`var(--m3e-filled-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.onPrimary}))`), labelTextColor: e(`var(--m3e-filled-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.onPrimary}))`), stateLayerColor: e(`var(--m3e-filled-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.onPrimary}))`), stateLayerOpacity: e(`var(--m3e-filled-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), containerElevation: e(`var(--m3e-filled-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-filled-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-filled-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-filled-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-filled-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.onPrimary}))`) }, pressed: { iconColor: e(`var(--m3e-filled-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.onPrimary}))`), labelTextColor: e(`var(--m3e-filled-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.onPrimary}))`), stateLayerColor: e(`var(--m3e-filled-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.onPrimary}))`), stateLayerOpacity: e(`var(--m3e-filled-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), containerElevation: e(`var(--m3e-filled-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-filled-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-filled-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-filled-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-filled-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.onPrimary}))`) } }, tonal: { labelTextColor: e(`var(--m3e-tonal-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.onSecondaryContainer}))`), iconColor: e(`var(--m3e-tonal-button-icon-color, var(--m3e-button-icon-color, ${n.color.onSecondaryContainer}))`), containerColor: e(`var(--m3e-tonal-button-container-color, var(--m3e-button-container-color, ${n.color.secondaryContainer}))`), containerElevation: e(`var(--m3e-tonal-button-container-elevation, var(--m3e-button-container-elevation, ${n.elevation.level0}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedIconColor: e(`var(--m3e-tonal-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedContainerColor: e(`var(--m3e-tonal-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${n.color.secondaryContainer}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.onSecondary}))`), selectedIconColor: e(`var(--m3e-tonal-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.onSecondary}))`), selectedContainerColor: e(`var(--m3e-tonal-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.secondary}))`), disabled: { containerColor: e(`var(--m3e-tonal-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-tonal-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-tonal-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-tonal-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-tonal-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-tonal-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), containerElevation: e(`var(--m3e-tonal-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${n.elevation.level0}))`) }, hover: { iconColor: e(`var(--m3e-tonal-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.onSecondaryContainer}))`), labelTextColor: e(`var(--m3e-tonal-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.onSecondaryContainer}))`), stateLayerColor: e(`var(--m3e-tonal-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.onSecondaryContainer}))`), stateLayerOpacity: e(`var(--m3e-tonal-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), containerElevation: e(`var(--m3e-tonal-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${n.elevation.level1}))`), unselectedIconColor: e(`var(--m3e-tonal-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedStateLayerColor: e(`var(--m3e-tonal-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.onSecondaryContainer}))`), selectedIconColor: e(`var(--m3e-tonal-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.onSecondary}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.onSecondary}))`), selectedStateLayerColor: e(`var(--m3e-tonal-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.onSecondary}))`) }, focus: { iconColor: e(`var(--m3e-tonal-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.onSecondaryContainer}))`), labelTextColor: e(`var(--m3e-tonal-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.onSecondaryContainer}))`), stateLayerColor: e(`var(--m3e-tonal-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.onSecondaryContainer}))`), stateLayerOpacity: e(`var(--m3e-tonal-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), containerElevation: e(`var(--m3e-tonal-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-tonal-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedStateLayerColor: e(`var(--m3e-tonal-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.onSecondaryContainer}))`), selectedIconColor: e(`var(--m3e-tonal-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.onSecondary}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.onSecondary}))`), selectedStateLayerColor: e(`var(--m3e-tonal-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.onSecondary}))`) }, pressed: { iconColor: e(`var(--m3e-tonal-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.onSecondaryContainer}))`), labelTextColor: e(`var(--m3e-tonal-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.onSecondaryContainer}))`), stateLayerColor: e(`var(--m3e-tonal-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.onSecondaryContainer}))`), stateLayerOpacity: e(`var(--m3e-tonal-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), containerElevation: e(`var(--m3e-tonal-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-tonal-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedStateLayerColor: e(`var(--m3e-tonal-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.onSecondaryContainer}))`), selectedIconColor: e(`var(--m3e-tonal-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.onSecondary}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.onSecondary}))`), selectedStateLayerColor: e(`var(--m3e-tonal-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.onSecondary}))`) } }, text: { labelTextColor: e(`var(--m3e-text-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.primary}))`), iconColor: e(`var(--m3e-text-button-icon-color, var(--m3e-button-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-text-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.primary}))`), disabled: { containerColor: e(`var(--m3e-text-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-text-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-text-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-text-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-text-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-text-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))") }, hover: { iconColor: e(`var(--m3e-text-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-text-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-text-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-text-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-text-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-text-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.primary}))`), selectedStateLayerColor: e(`var(--m3e-text-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.primary}))`) }, focus: { iconColor: e(`var(--m3e-text-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-text-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-text-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-text-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-text-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-text-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.primary}))`), selectedStateLayerColor: e(`var(--m3e-text-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.primary}))`) }, pressed: { iconColor: e(`var(--m3e-text-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-text-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-text-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-text-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-text-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-text-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.primary}))`), selectedStateLayerColor: e(`var(--m3e-text-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.primary}))`) } } };
function Ne(o2) {
  return T`:host([variant="${e(o2)}"]:not(:disabled):not([disabled-interactive])) .base { background-color: ${b[o2].containerColor ?? e("unset")}; --m3e-state-layer-hover-color: ${b[o2].hover.stateLayerColor}; --m3e-state-layer-hover-opacity: ${b[o2].hover.stateLayerOpacity}; --m3e-state-layer-focus-color: ${b[o2].focus.stateLayerColor}; --m3e-state-layer-focus-opacity: ${b[o2].focus.stateLayerOpacity}; --m3e-ripple-color: ${b[o2].pressed.stateLayerColor}; --m3e-ripple-opacity: ${b[o2].pressed.stateLayerOpacity}; --m3e-elevation-level: ${b[o2].containerElevation ?? e("unset")}; --m3e-elevation-hover-level: ${b[o2].hover.containerElevation ?? e("unset")}; --m3e-elevation-focus-level: ${b[o2].focus.containerElevation ?? e("unset")}; --m3e-elevation-pressed-level: ${b[o2].pressed.containerElevation ?? e("unset")}; } :host([variant="${e(o2)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .base { background-color: ${b[o2].unselectedContainerColor ?? e("unset")}; --m3e-state-layer-hover-color: ${b[o2].hover.unselectedStateLayerColor}; --m3e-state-layer-focus-color: ${b[o2].focus.unselectedStateLayerColor}; --m3e-ripple-color: ${b[o2].pressed.unselectedStateLayerColor}; } :host([variant="${e(o2)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .base { background-color: ${b[o2].selectedContainerColor ?? e("unset")}; --m3e-state-layer-hover-color: ${b[o2].hover.selectedStateLayerColor}; --m3e-state-layer-focus-color: ${b[o2].focus.selectedStateLayerColor}; --m3e-ripple-color: ${b[o2].pressed.selectedStateLayerColor}; } :host([variant="${e(o2)}"]:not(:disabled):not([disabled-interactive])) .base { outline-color: ${b[o2].outlineColor ?? e("unset")}; } :host([variant="${e(o2)}"]:focus:not(:disabled):not([disabled-interactive])) .base { outline-color: ${b[o2].focus.outlineColor ?? e("unset")}; } :host([variant="${e(o2)}"]:hover:not(:disabled):not([disabled-interactive])) .base { outline-color: ${b[o2].hover.outlineColor ?? e("unset")}; } :host( [variant="${e(o2)}"]:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive]) ) .base { outline-color: ${b[o2].pressed.outlineColor ?? e("unset")}; } :host([variant="${e(o2)}"]:not(:disabled):not([disabled-interactive])) .label { color: ${b[o2].labelTextColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .label { color: ${b[o2].unselectedLabelTextColor}; } :host([variant="${e(o2)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .label { color: ${b[o2].selectedLabelTextColor}; } :host([variant="${e(o2)}"]:focus:not(:disabled):not([disabled-interactive])) .label { color: ${b[o2].focus.labelTextColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):focus:not(:disabled):not([disabled-interactive])) .label { color: ${b[o2].focus.unselectedLabelTextColor}; } :host([variant="${e(o2)}"][toggle][selected]:focus:not(:disabled):not([disabled-interactive])) .label { color: ${b[o2].focus.selectedLabelTextColor}; } :host([variant="${e(o2)}"]:hover:not(:disabled):not([disabled-interactive])) .label { color: ${b[o2].hover.labelTextColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):hover:not(:disabled):not([disabled-interactive])) .label { color: ${b[o2].hover.unselectedLabelTextColor}; } :host([variant="${e(o2)}"][toggle][selected]:hover:not(:disabled):not([disabled-interactive])) .label { color: ${b[o2].hover.selectedLabelTextColor}; } :host( [variant="${e(o2)}"]:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive]) ) .label { color: ${b[o2].pressed.labelTextColor}; } :host( [variant="${e(o2)}"][toggle]:not([selected]):is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .label { color: ${b[o2].pressed.unselectedLabelTextColor}; } :host( [variant="${e(o2)}"][toggle][selected]:is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .label { color: ${b[o2].pressed.selectedLabelTextColor}; } :host([variant="${e(o2)}"]:not(:disabled):not([disabled-interactive])) .icon { color: ${b[o2].iconColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .icon { color: ${b[o2].unselectedIconColor}; } :host([variant="${e(o2)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .icon { color: ${b[o2].selectedIconColor}; } :host([variant="${e(o2)}"]:focus:not(:disabled):not([disabled-interactive])) .icon { color: ${b[o2].focus.iconColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):focus:not(:disabled):not([disabled-interactive])) .icon { color: ${b[o2].focus.unselectedIconColor}; } :host([variant="${e(o2)}"][toggle][selected]:focus:not(:disabled):not([disabled-interactive])) .icon { color: ${b[o2].focus.selectedIconColor}; } :host([variant="${e(o2)}"]:hover:not(:disabled):not([disabled-interactive])) .icon { color: ${b[o2].hover.iconColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):hover:not(:disabled):not([disabled-interactive])) .icon { color: ${b[o2].hover.unselectedIconColor}; } :host([variant="${e(o2)}"][toggle][selected]:hover:not(:disabled):not([disabled-interactive])) .icon { color: ${b[o2].hover.selectedIconColor}; } :host( [variant="${e(o2)}"]:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive]) ) .icon { color: ${b[o2].pressed.iconColor}; } :host( [variant="${e(o2)}"][toggle]:not([selected]):is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .icon { color: ${b[o2].pressed.unselectedIconColor}; } :host( [variant="${e(o2)}"][toggle][selected]:is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .icon { color: ${b[o2].pressed.selectedIconColor}; } :host([variant="${e(o2)}"]:disabled) .base, :host([variant="${e(o2)}"][disabled-interactive]) .base { --m3e-elevation-level: ${b[o2].disabled.containerElevation ?? e("unset")}; outline-color: ${b[o2].disabled.outlineColor ?? e("unset")}; background-color: color-mix( in srgb, ${b[o2].disabled.containerColor} ${b[o2].disabled.containerOpacity}, transparent ); } :host([variant="${e(o2)}"]:disabled) .label, :host([variant="${e(o2)}"][disabled-interactive]) .label { color: color-mix( in srgb, ${b[o2].disabled.labelTextColor} ${b[o2].disabled.labelTextOpacity}, transparent ); } :host([variant="${e(o2)}"]:disabled) .icon, :host([variant="${e(o2)}"][disabled-interactive]) .icon { color: color-mix( in srgb, ${b[o2].disabled.iconColor} ${b[o2].disabled.iconOpacity}, transparent ); }`;
}
const cr = [Ne("text"), Ne("elevated"), Ne("outlined"), Ne("filled"), Ne("tonal"), T`:host([variant="outlined"]:not([toggle][selected]):not(:disabled):not([disabled-interactive])) .base { outline-style: solid; }`];
var V, Vt, Oa, Na, zo, To, Ao;
let R = class extends ar(nr(or(tr(er(Fo(eo(J(z, "button"), true))))))) {
  constructor() {
    super(), V.add(this), this._adjacentPressedTimeout = -1, Vt.set(this, (t) => l(this, V, "m", Oa).call(this, t)), this.variant = "text", this.shape = "rounded", this.size = "small", this.toggle = false, this.selected = false, new In(this, { callback: () => this._handleResize() }), new ft(this, { callback: (t) => {
      !this.disabledInteractive && !t && !this.grouped && this._base?.style.removeProperty("--_button-shape");
    } }), new Wo(this, { isPressedKey: (t) => t === " ", minPressedDuration: 150, callback: (t) => {
      !this.disabled && !this.disabledInteractive && (t ? (l(this, V, "m", zo).call(this), l(this, V, "m", To).call(this, true)) : l(this, V, "m", To).call(this, false));
    } });
  }
  get grouped() {
    return Yt(this, "--grouped");
  }
  render() {
    return M`<div class="base"><m3e-elevation class="elevation" ?disabled="${this.disabled || this.disabledInteractive}"></m3e-elevation><m3e-state-layer class="state-layer" ?disabled="${this.disabled || this.disabledInteractive}"></m3e-state-layer><m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring><m3e-ripple class="ripple" ?disabled="${this.disabled || this.disabledInteractive}"></m3e-ripple><div class="touch" aria-hidden="true"></div>${this[za]()}<div class="wrapper">${this.toggle ? M`<slot class="icon" name="selected-icon" aria-hidden="true" @slotchange="${l(this, V, "m", Na)}"></slot>` : k}<slot class="icon" name="icon" aria-hidden="true"></slot><div class="label">${this.toggle && this.selected ? M`<slot name="selected"><slot></slot></slot>` : M`<slot></slot>`}</div><slot class="icon" name="trailing-icon" aria-hidden="true"></slot></div></div>`;
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", l(this, Vt, "f"));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), ["--pressed", "--resting", "--grouped", "--connected"].forEach((t) => E(this, t)), this._base?.style.removeProperty("--_button-shape"), this.style.removeProperty("--_button-width"), this.style.removeProperty("--_adjacent-shrink"), E(this, "--adjacent-pressed"), this.removeEventListener("click", l(this, Vt, "f"));
  }
  firstUpdated(t) {
    super.firstUpdated(t), [this._elevation, this._focusRing, this._stateLayer, this._ripple].forEach((a) => a?.attach(this));
  }
  updated(t) {
    if (super.updated(t), (t.has("disabled") && this.disabled || t.has("disabledInteractive") && this.disabledInteractive) && (E(this, "--pressed"), E(this, "--resting")), (t.has("toggle") || t.has("selected")) && (this.ariaPressed = this.toggle ? `${this.selected}` : null, this.toggle)) for (const a of this.querySelectorAll("m3e-icon")) a.toggleAttribute("filled", this.selected);
  }
  _handleResize() {
    this.grouped && !Yt(this, "--no-resize") && this !== document.activeElement && (this.style.setProperty("--_button-width", `${this.getBoundingClientRect().width}px`), l(this, V, "m", zo).call(this, true));
  }
};
Vt = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakSet();
Oa = function(t) {
  (this.disabled || this.disabledInteractive) && (t.preventDefault(), t.stopImmediatePropagation()), this.toggle && !t.defaultPrevented && this.dispatchEvent(new Event("beforeinput", { bubbles: true, cancelable: true })) && (this.selected = !this.selected, this.dispatchEvent(new Event("input", { bubbles: true })), this.dispatchEvent(new Event("change", { bubbles: true })));
};
Na = function(t) {
  this._base?.classList.toggle("with-selected-icon", An(t.target));
};
zo = function(t = false) {
  if (!this._base) return;
  const a = parseFloat(getComputedStyle(this._base).borderRadius);
  if (!isNaN(a) || t) {
    const r = this.clientHeight / 2;
    (r < a || t) && this._base?.style.setProperty("--_button-shape", `${r}px`);
  }
};
To = function(t) {
  const a = this.getBoundingClientRect().width, r = this.closest("m3e-button-group");
  if (r && r.variant === "standard") {
    const s = [...r.querySelectorAll("m3e-button,m3e-icon-button")];
    for (const c of s) clearTimeout(c._adjacentPressedTimeout), c._adjacentPressedTimeout = -1;
    const i = s.indexOf(this);
    if (t) {
      const c = parseFloat(getComputedStyle(this).getPropertyValue("--m3e-standard-button-group-width-multiplier") || "0.15");
      let u = a * c;
      i > 0 && i < s.length - 1 && (u /= 2);
      for (let d = 0; d < s.length; d++) d == i - 1 || d == i + 1 ? (Z(s[d], "--no-resize"), s[d].style.setProperty("--_adjacent-shrink", `${u}px`), Z(s[d], "--adjacent-pressed")) : d == i ? (Z(s[d], "--no-resize"), s[d].style.removeProperty("--_adjacent-shrink"), E(s[d], "--adjacent-pressed")) : (E(s[d], "--no-resize"), s[d].style.removeProperty("--_adjacent-shrink"), E(s[d], "--adjacent-pressed"));
    } else {
      for (let c = 0; c < s.length; c++) (c == i - 1 || c == i + 1) && s[c].style.setProperty("--_adjacent-shrink", "0px");
      $t() ? l(this, V, "m", Ao).call(this, s) : this.addEventListener("transitionend", (c) => {
        c.propertyName === "width" && (this._adjacentPressedTimeout = setTimeout(() => {
          this._adjacentPressedTimeout > -1 && l(this, V, "m", Ao).call(this, s);
        }, 600));
      }, { once: true });
    }
  }
  ct(this, "--pressed", t), ct(this, "--resting", !t);
};
Ao = function(t) {
  for (const a of t) E(a, "--adjacent-pressed"), E(a, "--no-resize"), a.style.removeProperty("--_adjacent-shrink");
};
R.styles = [lr, cr, ir];
p([X(".base")], R.prototype, "_base", void 0);
p([X(".elevation")], R.prototype, "_elevation", void 0);
p([X(".focus-ring")], R.prototype, "_focusRing", void 0);
p([X(".state-layer")], R.prototype, "_stateLayer", void 0);
p([X(".ripple")], R.prototype, "_ripple", void 0);
p([x({ reflect: true })], R.prototype, "variant", void 0);
p([x({ reflect: true })], R.prototype, "shape", void 0);
p([x({ reflect: true })], R.prototype, "size", void 0);
p([x({ type: Boolean, reflect: true })], R.prototype, "toggle", void 0);
p([x({ type: Boolean, reflect: true })], R.prototype, "selected", void 0);
p([Bo(40)], R.prototype, "_handleResize", null);
R = p([H("m3e-button")], R);
const ne = { activeIndicatorSize: e("var(--m3e-loading-indicator-size, 2.375rem)"), activeIndicatorColor: e(`var(--m3e-loading-indicator-active-indicator-color, ${n.color.primary})`), containedActiveIndicatorColor: e(`var(--m3e-loading-indicator-contained-active-indicator-color, ${n.color.onPrimaryContainer})`), containedContainerColor: e(`var(--m3e-loading-indicator-contained-container-color, ${n.color.secondaryContainer})`), containerShape: e(`var(--m3e-loading-indicator-container-shape, ${n.shape.corner.full})`), containerSize: e("var(--m3e-loading-indicator-container-size, 3rem)") }, da = { "4-sided-cookie": "M230.389 50.473C293.109 23.2328 356.767 86.8908 329.527 149.611L325.023 159.981C316.707 179.13 316.707 200.87 325.023 220.019L329.527 230.389C356.767 293.109 293.109 356.767 230.389 329.527L220.019 325.023C200.87 316.707 179.13 316.707 159.981 325.023L149.611 329.527C86.8908 356.767 23.2328 293.109 50.473 230.389L54.9768 220.019C63.2934 200.87 63.2934 179.13 54.9768 159.981L50.473 149.611C23.2328 86.8908 86.8908 23.2328 149.611 50.473L159.981 54.9768C179.13 63.2934 200.87 63.2934 220.019 54.9768L230.389 50.473Z", "9-sided-cookie": "M154.828 43.2756C156.574 41.8498 157.448 41.1369 158.245 40.535C177.03 26.3548 202.97 26.3548 221.755 40.535C222.552 41.1369 223.425 41.8498 225.172 43.2756C225.952 43.9121 226.342 44.2303 226.727 44.5333C235.567 51.4788 246.406 55.4147 257.652 55.7636C258.143 55.7788 258.647 55.785 259.654 55.7975C261.911 55.8255 263.039 55.8395 264.037 55.8898C287.563 57.0742 307.435 73.7107 312.689 96.6205C312.912 97.5928 313.121 98.6991 313.541 100.911C313.728 101.899 313.822 102.393 313.922 102.872C316.219 113.862 321.986 123.828 330.377 131.308C330.743 131.635 331.125 131.962 331.888 132.618C333.599 134.087 334.454 134.821 335.187 135.5C352.445 151.495 356.95 176.983 346.215 197.903C345.76 198.791 345.208 199.773 344.104 201.737C343.611 202.613 343.364 203.052 343.132 203.483C337.812 213.375 335.809 224.708 337.418 235.82C337.488 236.304 337.569 236.8 337.732 237.792C338.096 240.014 338.278 241.125 338.402 242.115C341.318 265.436 328.347 287.851 306.647 296.991C305.726 297.379 304.67 297.778 302.559 298.574C301.617 298.929 301.146 299.107 300.69 299.289C290.241 303.455 281.406 310.852 275.48 320.395C275.221 320.811 274.964 321.243 274.449 322.107C273.297 324.043 272.721 325.011 272.178 325.849C259.387 345.584 235.011 354.436 212.498 347.521C211.543 347.228 210.477 346.856 208.347 346.112C207.396 345.78 206.921 345.614 206.455 345.461C195.767 341.951 184.233 341.951 173.545 345.461C173.079 345.614 172.603 345.78 171.652 346.112C169.522 346.856 168.457 347.228 167.502 347.521C144.989 354.436 120.613 345.584 107.822 325.849C107.279 325.011 106.703 324.043 105.55 322.107C105.036 321.243 104.779 320.811 104.52 320.395C98.5939 310.852 89.7583 303.455 79.3096 299.289C78.8539 299.107 78.3827 298.929 77.4404 298.574C75.3294 297.778 74.274 297.379 73.3529 296.991C51.6523 287.851 38.6819 265.436 41.598 242.115C41.7218 241.125 41.9039 240.014 42.2682 237.792C42.4308 236.8 42.5121 236.304 42.5822 235.82C44.1908 224.708 42.188 213.375 36.8675 203.483C36.6354 203.052 36.389 202.613 35.8962 201.737C34.7921 199.773 34.2401 198.791 33.7845 197.903C23.0499 176.983 27.5544 151.495 44.8128 135.5C45.5454 134.821 46.4007 134.087 48.1113 132.618C48.875 131.962 49.2568 131.635 49.6228 131.308C58.0134 123.828 63.7804 113.862 66.0777 102.872C66.1779 102.393 66.2715 101.899 66.4588 100.911C66.8783 98.699 67.088 97.5928 67.311 96.6204C72.5652 73.7107 92.4369 57.0742 115.962 55.8898C116.961 55.8395 118.089 55.8255 120.346 55.7975C121.353 55.785 121.857 55.7788 122.347 55.7636C133.594 55.4147 144.432 51.4788 153.272 44.5333C153.658 44.2303 154.048 43.9121 154.828 43.2756Z", oval: "M271.309 271.309C201.705 340.913 108.877 360.935 63.9707 316.029C19.0648 271.123 39.0867 178.295 108.691 108.691C178.295 39.0867 271.123 19.0648 316.029 63.9707C360.935 108.877 340.913 201.705 271.309 271.309Z", pentagon: "M155.064 49.459C176.093 34.1803 204.569 34.1803 225.598 49.459L322.926 120.171C343.955 135.45 352.754 162.532 344.722 187.253L307.546 301.668C299.514 326.39 276.476 343.127 250.483 343.127H130.18C104.186 343.127 81.1489 326.39 73.1164 301.668L35.9407 187.253C27.9082 162.532 36.7077 135.45 57.737 120.171L155.064 49.459Z", pill: "M116.116 71.7851C169.162 18.7383 255.168 18.7383 308.215 71.7851C361.262 124.832 361.262 210.838 308.215 263.884L263.884 308.215C210.838 361.262 124.832 361.262 71.7851 308.215C18.7383 255.168 18.7383 169.162 71.7851 116.116L116.116 71.7851Z", "soft-burst": "M175.147 33.1508C181.983 22.2831 198.017 22.2831 204.853 33.1508L221.238 59.2009C225.731 66.3458 234.797 69.2506 242.692 66.0751L271.475 54.4972C283.482 49.6671 296.455 58.9613 295.507 71.7154L293.235 102.288C292.612 110.673 298.215 118.278 306.494 120.284L336.681 127.601C349.275 130.653 354.23 145.692 345.861 155.461L325.8 178.877C320.298 185.3 320.298 194.7 325.8 201.123L345.861 224.539C354.23 234.308 349.275 249.347 336.681 252.399L306.494 259.716C298.215 261.722 292.612 269.327 293.235 277.712L295.507 308.285C296.455 321.039 283.482 330.333 271.475 325.503L242.692 313.925C234.797 310.749 225.731 313.654 221.238 320.799L204.853 346.849C198.017 357.717 181.983 357.717 175.147 346.849L158.762 320.799C154.269 313.654 145.203 310.749 137.308 313.925L108.525 325.503C96.5177 330.333 83.5454 321.039 84.4931 308.285L86.7649 277.712C87.388 269.327 81.785 261.722 73.5056 259.716L43.3186 252.399C30.7252 249.347 25.7702 234.308 34.1391 224.539L54.1997 201.123C59.7018 194.7 59.7018 185.3 54.1997 178.877L34.1391 155.461C25.7702 145.692 30.7252 130.653 43.3186 127.601L73.5056 120.284C81.785 118.278 87.388 110.673 86.7649 102.288L84.4931 71.7154C83.5454 58.9613 96.5177 49.6671 108.525 54.4972L137.308 66.0751C145.203 69.2506 154.269 66.3458 158.762 59.201L175.147 33.1508Z", sunny: "M276.453 68.8118C286.405 69.4881 291.381 69.8263 295.404 71.5853C301.223 74.1305 305.87 78.7766 308.415 84.5965C310.174 88.6186 310.512 93.5948 311.188 103.547L312.732 126.259C313.005 130.284 313.142 132.296 313.579 134.219C314.212 136.997 315.31 139.648 316.827 142.059C317.877 143.728 319.203 145.248 321.856 148.288L336.824 165.438C343.384 172.954 346.663 176.712 348.263 180.8C350.579 186.715 350.579 193.285 348.263 199.2C346.663 203.288 343.384 207.046 336.824 214.562L321.856 231.712C319.203 234.752 317.877 236.272 316.827 237.941C315.31 240.352 314.212 243.003 313.579 245.781C313.142 247.704 313.005 249.716 312.732 253.741L311.188 276.453C310.512 286.405 310.174 291.381 308.415 295.404C305.87 301.223 301.223 305.87 295.404 308.415C291.381 310.174 286.405 310.512 276.453 311.188L253.741 312.732C249.716 313.005 247.704 313.142 245.781 313.579C243.003 314.212 240.352 315.31 237.941 316.827C236.272 317.877 234.752 319.203 231.712 321.856L214.562 336.824C207.046 343.384 203.288 346.663 199.2 348.263C193.285 350.579 186.715 350.579 180.8 348.263C176.712 346.663 172.954 343.384 165.438 336.824L148.288 321.856C145.248 319.203 143.728 317.877 142.059 316.827C139.648 315.31 136.997 314.212 134.219 313.579C132.296 313.142 130.284 313.005 126.259 312.732L103.547 311.188C93.5947 310.512 88.6186 310.174 84.5965 308.415C78.7766 305.87 74.1305 301.223 71.5853 295.404C69.8263 291.381 69.4881 286.405 68.8118 276.453L67.2684 253.741C66.9949 249.716 66.8581 247.704 66.4206 245.781C65.7883 243.003 64.6903 240.352 63.173 237.941C62.123 236.272 60.7965 234.752 58.1437 231.712L43.1756 214.562C36.6164 207.046 33.3369 203.288 31.7366 199.2C29.4211 193.285 29.4211 186.715 31.7366 180.8C33.3369 176.712 36.6164 172.954 43.1756 165.438L58.1437 148.288C60.7965 145.248 62.123 143.728 63.173 142.059C64.6903 139.648 65.7883 136.997 66.4206 134.219C66.8581 132.296 66.9949 130.284 67.2684 126.259L68.8118 103.547C69.4881 93.5948 69.8263 88.6186 71.5853 84.5965C74.1305 78.7766 78.7766 74.1305 84.5965 71.5853C88.6186 69.8263 93.5948 69.4881 103.547 68.8118L126.259 67.2684C130.284 66.9949 132.296 66.8581 134.219 66.4206C136.997 65.7883 139.648 64.6903 142.059 63.173C143.728 62.123 145.248 60.7966 148.288 58.1437L165.438 43.1756C172.954 36.6164 176.712 33.3369 180.8 31.7366C186.715 29.4211 193.285 29.4211 199.2 31.7366C203.288 33.3369 207.046 36.6164 214.562 43.1756L231.712 58.1437C234.752 60.7966 236.272 62.123 237.941 63.173C240.352 64.6903 243.003 65.7883 245.781 66.4206C247.704 66.8581 249.716 66.9949 253.741 67.2684L276.453 68.8118Z" };
let mt = new Array();
const Va = /* @__PURE__ */ new Map();
for (const o2 in da) mt.push(da[o2]), Va.set(o2, mt.length - 1);
const Ua = {};
mt = Tn(mt, 300);
for (const o2 of Va) Ua[o2[0]] = e(mt[o2[1]]);
const re = Ua;
let pt = class extends rr(J(z, "progressbar")) {
  constructor() {
    super(...arguments), this.variant = "uncontained";
  }
  connectedCallback() {
    super.connectedCallback(), this.ariaValueMin = this.ariaValueMin || "0", this.ariaValueMax = this.ariaValueMax || "100";
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._container?.classList.toggle("animate", false);
  }
  reconnectedCallback() {
    super.reconnectedCallback(), this._container?.classList.toggle("animate", true);
  }
  firstUpdated(t) {
    super.firstUpdated(t), this._container?.classList.toggle("animate", true);
  }
  render() {
    return M`<div class="container" aria-hidden="true"><div class="active-indicator-wrapper"><div class="active-indicator"></div></div></div>`;
  }
};
pt.styles = T`:host { display: inline-block; aspect-ratio: 1 / 1; contain: strict; vertical-align: middle; content-visibility: auto; } :host([variant="uncontained"]) { width: ${ne.activeIndicatorSize}; } :host([variant="contained"]) { width: ${ne.containerSize}; } :host([variant="uncontained"]) .active-indicator { background-color: ${ne.activeIndicatorColor}; } :host([variant="contained"]) .active-indicator { background-color: ${ne.containedActiveIndicatorColor}; } :host([variant="contained"]) .container { background-color: ${ne.containedContainerColor}; } .container { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; border-radius: ${ne.containerShape}; } .active-indicator { margin: auto; aspect-ratio: 1 / 1; width: calc(${ne.activeIndicatorSize} * 0.842); transform-origin: center; transition: clip-path ${n.motion.spring.slowEffects}; will-change: transform, clip-path; --_polygon-soft-burst: polygon(${re["soft-burst"]}); --_polygon-9-sided-cookie: polygon(${re["9-sided-cookie"]}); --_polygon-pentagon: polygon(${re.pentagon}); --_polygon-pill: polygon(${re.pill}); --_polygon-sunny: polygon(${re.sunny}); --_polygon-4-sided-cookie: polygon(${re["4-sided-cookie"]}); --_polygon-oval: polygon(${re.oval}); } .container.animate .active-indicator-wrapper { animation: rotate-outer 4666ms linear infinite; transform-origin: center; display: flex; align-items: center; justify-content: center; will-change: transform; } @keyframes rotate-outer { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } .container.animate .active-indicator { animation: rotate-inner 4666ms cubic-bezier(0.34, 0.88, 0.34, 1) infinite; } @keyframes rotate-inner { 0% { clip-path: var(--_polygon-soft-burst); transform: rotate(0deg); } 14% { clip-path: var(--_polygon-9-sided-cookie); transform: rotate(154deg) scale(1); } 29% { clip-path: var(--_polygon-pentagon); transform: rotate(309deg) scale(1); } 43% { clip-path: var(--_polygon-pill); transform: rotate(463deg) scale(1); } 57% { clip-path: var(--_polygon-sunny); transform: rotate(617deg) scale(1); } 71% { clip-path: var(--_polygon-4-sided-cookie); transform: rotate(771deg) scale(1); } 83% { clip-path: var(--_polygon-oval); transform: rotate(926deg) scale(1); } 100% { clip-path: var(--_polygon-soft-burst); transform: rotate(1080deg) scale(1); } } @media (forced-colors: active) { .active-indicator { background-color: CanvasText !important; } }`;
p([X(".container")], pt.prototype, "_container", void 0);
p([x({ reflect: true })], pt.prototype, "variant", void 0);
pt = p([H("m3e-loading-indicator")], pt);
const dr = ["aria-busy", "disabled", "selected", "shape", "size", "toggle", "type", "variant"], ur = { key: 0, class: "md-button__loading-indicator" }, hr = { class: "md-button__label-text" }, Ut = No({ __name: "MDButton", props: { nativeType: { default: "button" }, color: { default: "filled" }, label: {}, disabled: { type: Boolean }, variant: { default: "default" }, size: { default: "small" }, shape: { default: "round" }, selected: { type: Boolean }, loading: { type: Boolean } }, emits: ["click", "update:selected"], setup(o2, { emit: t }) {
  const a = o2, r = t, s = ja(), i = No({ name: "MDButtonSlottedContent", props: { slotName: { type: String, required: true } }, setup(_, { slots: P }) {
    return () => Ya("span", { slot: _.slotName }, P.default?.());
  } }), c = te(() => a.variant === "toggle"), u = te(() => c.value && !!a.selected), d = te(() => !!a.loading), v = te(() => a.color), f = te(() => a.size), h = te(() => a.shape === "round" ? "rounded" : "square"), g = te(() => a.nativeType), y = (_) => {
    c.value && (_.preventDefault(), r("update:selected", !u.value));
  }, S = (_) => {
    r("click", _);
  };
  return (_, P) => (We(), Vo("m3e-button", { class: "md-button", "aria-busy": d.value ? "true" : void 0, disabled: a.disabled, selected: u.value, shape: h.value, size: f.value, toggle: c.value, type: g.value, variant: v.value, onBeforeinput: y, onClick: Xa(S, ["stop"]) }, [d.value || s.icon ? (We(), no(so(i), { key: 0, class: "md-button__icon", "slot-name": "icon" }, { default: ro(() => [d.value ? (We(), Vo("m3e-loading-indicator", ur)) : io(_.$slots, "icon", { key: 1 }, void 0, true)]), _: 3 })) : lo("", true), s["selected-icon"] ? (We(), no(so(i), { key: 1, class: "md-button__icon", "slot-name": "selected-icon" }, { default: ro(() => [io(_.$slots, "selected-icon", {}, void 0, true)]), _: 3 })) : lo("", true), Ka("span", hr, Za(a.label), 1), s.selected ? (We(), no(so(i), { key: 2, class: "md-button__label-text", "slot-name": "selected" }, { default: ro(() => [io(_.$slots, "selected", {}, void 0, true)]), _: 3 })) : lo("", true)], 40, dr));
} }), zr = Ga(Ut, [["__scopeId", "data-v-c1361d21"]]);
Ut.__docgenInfo = Object.assign({ displayName: Ut.name ?? Ut.__name }, { exportName: "default", displayName: "MDButton", type: 1, props: [{ name: "nativeType", global: false, description: "Native button type. Defaults to `button` to avoid accidental form submission.", tags: [], required: false, type: '"button" | "submit" | "reset" | undefined', declarations: [], schema: { kind: "enum", type: '"button" | "submit" | "reset" | undefined', schema: ["undefined", '"button"', '"submit"', '"reset"'] }, default: '"button"' }, { name: "color", global: false, description: "Material Button appearance.", tags: [], required: false, type: '"text" | "filled" | "elevated" | "tonal" | "outlined" | undefined', declarations: [], schema: { kind: "enum", type: '"text" | "filled" | "elevated" | "tonal" | "outlined" | undefined', schema: ["undefined", '"text"', '"filled"', '"elevated"', '"tonal"', '"outlined"'] }, default: '"filled"' }, { name: "label", global: false, description: "Visible label and accessible name.", tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "disabled", global: false, description: "Blocks focus and activation through the renderer's documented disabled contract.", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "variant", global: false, description: "Stateless action or consumer-controlled toggle intent.", tags: [], required: false, type: '"default" | "toggle" | undefined', declarations: [], schema: { kind: "enum", type: '"default" | "toggle" | undefined', schema: ["undefined", '"default"', '"toggle"'] }, default: '"default"' }, { name: "size", global: false, description: "Material Button size.", tags: [], required: false, type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', declarations: [], schema: { kind: "enum", type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', schema: ["undefined", '"small"', '"extra-small"', '"medium"', '"large"', '"extra-large"'] }, default: '"small"' }, { name: "shape", global: false, description: "Round or square container shape.", tags: [], required: false, type: '"round" | "square" | undefined', declarations: [], schema: { kind: "enum", type: '"round" | "square" | undefined', schema: ["undefined", '"round"', '"square"'] }, default: '"round"' }, { name: "selected", global: false, description: "Consumer-controlled toggle selection. Ignored for default actions.", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "loading", global: false, description: `Shows a Material Loading indicator in place of the leading icon for a short
async action (Loading indicator placement guidance).`, tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "key", global: true, description: "", tags: [], required: false, type: "PropertyKey", declarations: [], schema: { kind: "enum", type: "PropertyKey", schema: ["string", "number", "symbol"] } }, { name: "ref", global: true, description: "", tags: [], required: false, type: "VNodeRef", declarations: [], schema: { kind: "enum", type: "VNodeRef", schema: ["string", "Ref<any, any>", { kind: "event", type: "(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void" }] } }, { name: "ref_for", global: true, description: "", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "ref_key", global: true, description: "", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "class", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "style", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "tabindex", global: true, description: "", tags: [], required: false, type: "string | number", declarations: [], schema: { kind: "enum", type: "string | number", schema: ["string", "number"] } }, { name: "aria-activedescendant", global: true, description: "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-atomic", global: true, description: "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-autocomplete", global: true, description: `Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`, tags: [], required: false, type: '"none" | "inline" | "list" | "both" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "inline" | "list" | "both" | undefined', schema: ["undefined", '"none"', '"inline"', '"list"', '"both"'] } }, { name: "aria-busy", global: true, description: "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-checked", global: true, description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.', tags: [{ name: "see", text: "aria-pressed" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-colcount", global: true, description: "Defines the total number of columns in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colindex", global: true, description: "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colcount" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colspan", global: true, description: "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-controls", global: true, description: "Identifies the element (or elements) whose contents or presence are controlled by the current element.", tags: [{ name: "see", text: "aria-owns." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-current", global: true, description: "Indicates the element that represents the current item within a container or set of related elements.", tags: [], required: false, type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"page"', '"step"', '"location"', '"date"', '"time"'] } }, { name: "aria-describedby", global: true, description: "Identifies the element (or elements) that describes the object.", tags: [{ name: "see", text: "aria-labelledby" }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-details", global: true, description: "Identifies the element that provides a detailed, extended description for the object.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-disabled", global: true, description: "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.", tags: [{ name: "see", text: "aria-hidden" }, { name: "see", text: "aria-readonly." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-dropeffect", global: true, description: "Indicates what functions can be performed when a dragged object is released on the drop target.", tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined', schema: ["undefined", '"none"', '"copy"', '"execute"', '"link"', '"move"', '"popup"'] } }, { name: "aria-errormessage", global: true, description: "Identifies the element that provides an error message for the object.", tags: [{ name: "see", text: "aria-invalid" }, { name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-expanded", global: true, description: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-flowto", global: true, description: `Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-grabbed", global: true, description: `Indicates an element's "grabbed" state in a drag-and-drop operation.`, tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-haspopup", global: true, description: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", tags: [], required: false, type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"menu"', '"listbox"', '"tree"', '"grid"', '"dialog"'] } }, { name: "aria-hidden", global: true, description: "Indicates whether the element is exposed to an accessibility API.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-invalid", global: true, description: "Indicates the entered value does not conform to the format expected by the application.", tags: [{ name: "see", text: "aria-errormessage." }], required: false, type: 'Booleanish | "grammar" | "spelling" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "grammar" | "spelling" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"grammar"', '"spelling"'] } }, { name: "aria-keyshortcuts", global: true, description: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-label", global: true, description: "Defines a string value that labels the current element.", tags: [{ name: "see", text: "aria-labelledby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-labelledby", global: true, description: "Identifies the element (or elements) that labels the current element.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-level", global: true, description: "Defines the hierarchical level of an element within a structure.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-live", global: true, description: "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", tags: [], required: false, type: '"off" | "assertive" | "polite" | undefined', declarations: [], schema: { kind: "enum", type: '"off" | "assertive" | "polite" | undefined', schema: ["undefined", '"off"', '"assertive"', '"polite"'] } }, { name: "aria-modal", global: true, description: "Indicates whether an element is modal when displayed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiline", global: true, description: "Indicates whether a text box accepts multiple lines of input or only a single line.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiselectable", global: true, description: "Indicates that the user may select more than one item from the current selectable descendants.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-orientation", global: true, description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", tags: [], required: false, type: '"horizontal" | "vertical" | undefined', declarations: [], schema: { kind: "enum", type: '"horizontal" | "vertical" | undefined', schema: ["undefined", '"horizontal"', '"vertical"'] } }, { name: "aria-owns", global: true, description: `Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.`, tags: [{ name: "see", text: "aria-controls." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-placeholder", global: true, description: `Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-posinset", global: true, description: "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-setsize." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-pressed", global: true, description: 'Indicates the current "pressed" state of toggle buttons.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-readonly", global: true, description: "Indicates that the element is not editable, but is otherwise operable.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-relevant", global: true, description: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.", tags: [{ name: "see", text: "aria-atomic." }], required: false, type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', declarations: [], schema: { kind: "enum", type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', schema: ["undefined", '"additions"', '"additions removals"', '"additions text"', '"all"', '"removals"', '"removals additions"', '"removals text"', '"text"', '"text additions"', '"text removals"'] } }, { name: "aria-required", global: true, description: "Indicates that user input is required on the element before a form may be submitted.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-roledescription", global: true, description: "Defines a human-readable, author-localized description for the role of an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-rowcount", global: true, description: "Defines the total number of rows in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowindex", global: true, description: "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowcount" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowspan", global: true, description: "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-selected", global: true, description: 'Indicates the current "selected" state of various widgets.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-pressed." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-setsize", global: true, description: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-posinset." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-sort", global: true, description: "Indicates if items in a table or grid are sorted in ascending or descending order.", tags: [], required: false, type: '"none" | "ascending" | "descending" | "other" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "ascending" | "descending" | "other" | undefined', schema: ["undefined", '"none"', '"ascending"', '"descending"', '"other"'] } }, { name: "aria-valuemax", global: true, description: "Defines the maximum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuemin", global: true, description: "Defines the minimum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuenow", global: true, description: "Defines the current value for a range widget.", tags: [{ name: "see", text: "aria-valuetext." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuetext", global: true, description: "Defines the human readable text alternative of aria-valuenow for a range widget.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: false, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }], events: [{ name: "click", description: "Stable action event normalized from the renderer host click.", tags: [], type: "[event: MouseEvent]", signature: '(event: "click", event: MouseEvent): void', declarations: [], schema: [{ kind: "object", type: "MouseEvent" }] }, { name: "update:selected", description: "Controlled toggle intent; the parent remains the selected-state owner.", tags: [], type: "[selected: boolean]", signature: '(event: "update:selected", selected: boolean): void', declarations: [], schema: [{ kind: "enum", type: "boolean", schema: ["false", "true"] }] }], slots: [{ name: "icon", type: "any", description: "Leading icon content.", declarations: [], schema: "any" }, { name: "selected", type: "any", description: "Label content rendered while a toggle Button is selected.", declarations: [], schema: "any" }, { name: "selected-icon", type: "any", description: "Leading icon rendered while a toggle Button is selected.", declarations: [], schema: "any" }], exposed: [{ name: "$slots", type: "Readonly<InternalSlots> & __VLS_Slots", description: "", declarations: [], schema: { kind: "object", type: "Readonly<InternalSlots> & __VLS_Slots" } }, { name: "nativeType", type: '"button" | "submit" | "reset" | undefined', description: "Native button type. Defaults to `button` to avoid accidental form submission.", declarations: [], schema: { kind: "enum", type: '"button" | "submit" | "reset" | undefined', schema: ["undefined", '"button"', '"submit"', '"reset"'] } }, { name: "color", type: '"text" | "filled" | "elevated" | "tonal" | "outlined" | undefined', description: "Material Button appearance.", declarations: [], schema: { kind: "enum", type: '"text" | "filled" | "elevated" | "tonal" | "outlined" | undefined', schema: ["undefined", '"text"', '"filled"', '"elevated"', '"tonal"', '"outlined"'] } }, { name: "variant", type: '"default" | "toggle" | undefined', description: "Stateless action or consumer-controlled toggle intent.", declarations: [], schema: { kind: "enum", type: '"default" | "toggle" | undefined', schema: ["undefined", '"default"', '"toggle"'] } }, { name: "size", type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', description: "Material Button size.", declarations: [], schema: { kind: "enum", type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', schema: ["undefined", '"small"', '"extra-small"', '"medium"', '"large"', '"extra-large"'] } }, { name: "shape", type: '"round" | "square" | undefined', description: "Round or square container shape.", declarations: [], schema: { kind: "enum", type: '"round" | "square" | undefined', schema: ["undefined", '"round"', '"square"'] } }, { name: "disabled", type: "boolean | undefined", description: "Blocks focus and activation through the renderer's documented disabled contract.", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "label", type: "string", description: "Visible label and accessible name.", declarations: [], schema: "string" }, { name: "selected", type: "boolean | undefined", description: "Consumer-controlled toggle selection. Ignored for default actions.", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "loading", type: "boolean | undefined", description: `Shows a Material Loading indicator in place of the leading icon for a short
async action (Loading indicator placement guidance).`, declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/material/components/button/MDButton.vue" });
export {
  zr as M
};
