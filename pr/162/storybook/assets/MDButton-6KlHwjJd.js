import { d as Lo, E as Ca, c as wa, g as Mo, w as Sa, u as Kt, G as To, a as Ea, t as La, S as Ma, A as Ta, l as ze, z as za, e as Gt } from "./iframe-D_xDKw6y.js";
import { i as Aa } from "./isNumber-BeRyA-l4.js";
import { M as Pa } from "./MDCircularProgressIndicator-DXOgureB.js";
import { _ as Ia } from "./_plugin-vue_export-helper-DlAUqK2U.js";
function m(o2, t, a, r) {
  var l = arguments.length, i = l < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, a) : r, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(o2, t, a, r);
  else for (var h = o2.length - 1; h >= 0; h--) (c = o2[h]) && (i = (l < 3 ? c(i) : l > 3 ? c(t, a, i) : c(t, a)) || i);
  return l > 3 && i && Object.defineProperty(t, a, i), i;
}
function s(o2, t, a, r) {
  if (a === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? o2 !== t || !r : !t.has(o2)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return a === "m" ? r : a === "a" ? r.call(o2) : r ? r.value : t.get(o2);
}
function y(o2, t, a, r, l) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !l) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? o2 !== t || !l : !t.has(o2)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? l.call(o2, a) : l ? l.value = a : t.set(o2, a), a;
}
const dt = globalThis, go = dt.ShadowRoot && (dt.ShadyCSS === void 0 || dt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, yo = /* @__PURE__ */ Symbol(), zo = /* @__PURE__ */ new WeakMap();
let Uo = class {
  constructor(t, a, r) {
    if (this._$cssResult$ = true, r !== yo) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = a;
  }
  get styleSheet() {
    let t = this.o;
    const a = this.t;
    if (go && t === void 0) {
      const r = a !== void 0 && a.length === 1;
      r && (t = zo.get(a)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && zo.set(a, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const e = (o2) => new Uo(typeof o2 == "string" ? o2 : o2 + "", void 0, yo), L = (o2, ...t) => {
  const a = o2.length === 1 ? o2[0] : t.reduce((r, l, i) => r + ((c) => {
    if (c._$cssResult$ === true) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(l) + o2[i + 1], o2[0]);
  return new Uo(a, o2, yo);
}, Da = (o2, t) => {
  if (go) o2.adoptedStyleSheets = t.map((a) => a instanceof CSSStyleSheet ? a : a.styleSheet);
  else for (const a of t) {
    const r = document.createElement("style"), l = dt.litNonce;
    l !== void 0 && r.setAttribute("nonce", l), r.textContent = a.cssText, o2.appendChild(r);
  }
}, Ao = go ? (o2) => o2 : (o2) => o2 instanceof CSSStyleSheet ? ((t) => {
  let a = "";
  for (const r of t.cssRules) a += r.cssText;
  return e(a);
})(o2) : o2;
const { is: Ra, defineProperty: qa, getOwnPropertyDescriptor: Wa, getOwnPropertyNames: Ha, getOwnPropertySymbols: Ba, getPrototypeOf: Oa } = Object, Ft = globalThis, Po = Ft.trustedTypes, Fa = Po ? Po.emptyScript : "", Na = Ft.reactiveElementPolyfillSupport, Ue = (o2, t) => o2, Rt = { toAttribute(o2, t) {
  switch (t) {
    case Boolean:
      o2 = o2 ? Fa : null;
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
} }, xo = (o2, t) => !Ra(o2, t), Io = { attribute: true, type: String, converter: Rt, reflect: false, useDefault: false, hasChanged: xo };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), Ft.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let fe = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, a = Io) {
    if (a.state && (a.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t) && ((a = Object.create(a)).wrapped = true), this.elementProperties.set(t, a), !a.noAccessor) {
      const r = /* @__PURE__ */ Symbol(), l = this.getPropertyDescriptor(t, r, a);
      l !== void 0 && qa(this.prototype, t, l);
    }
  }
  static getPropertyDescriptor(t, a, r) {
    const { get: l, set: i } = Wa(this.prototype, t) ?? { get() {
      return this[a];
    }, set(c) {
      this[a] = c;
    } };
    return { get: l, set(c) {
      const h = l?.call(this);
      i?.call(this, c), this.requestUpdate(t, h, r);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Io;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ue("elementProperties"))) return;
    const t = Oa(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ue("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(Ue("properties"))) {
      const a = this.properties, r = [...Ha(a), ...Ba(a)];
      for (const l of r) this.createProperty(l, a[l]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const a = litPropertyMetadata.get(t);
      if (a !== void 0) for (const [r, l] of a) this.elementProperties.set(r, l);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [a, r] of this.elementProperties) {
      const l = this._$Eu(a, r);
      l !== void 0 && this._$Eh.set(l, a);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const a = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const l of r) a.unshift(Ao(l));
    } else t !== void 0 && a.push(Ao(t));
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
    return Da(t, this.constructor.elementStyles), t;
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
    const r = this.constructor.elementProperties.get(t), l = this.constructor._$Eu(t, r);
    if (l !== void 0 && r.reflect === true) {
      const i = (r.converter?.toAttribute !== void 0 ? r.converter : Rt).toAttribute(a, r.type);
      this._$Em = t, i == null ? this.removeAttribute(l) : this.setAttribute(l, i), this._$Em = null;
    }
  }
  _$AK(t, a) {
    const r = this.constructor, l = r._$Eh.get(t);
    if (l !== void 0 && this._$Em !== l) {
      const i = r.getPropertyOptions(l), c = typeof i.converter == "function" ? { fromAttribute: i.converter } : i.converter?.fromAttribute !== void 0 ? i.converter : Rt;
      this._$Em = l;
      const h = c.fromAttribute(a, i.type);
      this[l] = h ?? this._$Ej?.get(l) ?? h, this._$Em = null;
    }
  }
  requestUpdate(t, a, r, l = false, i) {
    if (t !== void 0) {
      const c = this.constructor;
      if (l === false && (i = this[t]), r ??= c.getPropertyOptions(t), !((r.hasChanged ?? xo)(i, a) || r.useDefault && r.reflect && i === this._$Ej?.get(t) && !this.hasAttribute(c._$Eu(t, r)))) return;
      this.C(t, a, r);
    }
    this.isUpdatePending === false && (this._$ES = this._$EP());
  }
  C(t, a, { useDefault: r, reflect: l, wrapped: i }, c) {
    r && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, c ?? a ?? this[t]), i !== true || c !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (a = void 0), this._$AL.set(t, a)), l === true && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
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
        for (const [l, i] of this._$Ep) this[l] = i;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [l, i] of r) {
        const { wrapped: c } = i, h = this[l];
        c !== true || this._$AL.has(l) || h === void 0 || this.C(l, void 0, i, h);
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
fe.elementStyles = [], fe.shadowRootOptions = { mode: "open" }, fe[Ue("elementProperties")] = /* @__PURE__ */ new Map(), fe[Ue("finalized")] = /* @__PURE__ */ new Map(), Na?.({ ReactiveElement: fe }), (Ft.reactiveElementVersions ??= []).push("2.1.2");
const $o = globalThis, Do = (o2) => o2, qt = $o.trustedTypes, Ro = qt ? qt.createPolicy("lit-html", { createHTML: (o2) => o2 }) : void 0, jo = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, Ko = "?" + U, Va = `<${Ko}>`, de = document, Je = () => de.createComment(""), Qe = (o2) => o2 === null || typeof o2 != "object" && typeof o2 != "function", _o = Array.isArray, Ua = (o2) => _o(o2) || typeof o2?.[Symbol.iterator] == "function", Xt = `[ 	
\f\r]`, Ae = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, qo = /-->/g, Wo = />/g, Y = RegExp(`>|${Xt}(?:([^\\s"'>=/]+)(${Xt}*=${Xt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ho = /'/g, Bo = /"/g, Go = /^(?:script|style|textarea|title)$/i, ja = (o2) => (t, ...a) => ({ _$litType$: o2, strings: t, values: a }), S = ja(1), Ce = /* @__PURE__ */ Symbol.for("lit-noChange"), $ = /* @__PURE__ */ Symbol.for("lit-nothing"), Oo = /* @__PURE__ */ new WeakMap(), re = de.createTreeWalker(de, 129);
function Xo(o2, t) {
  if (!_o(o2) || !o2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ro !== void 0 ? Ro.createHTML(t) : t;
}
const Ka = (o2, t) => {
  const a = o2.length - 1, r = [];
  let l, i = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", c = Ae;
  for (let h = 0; h < a; h++) {
    const u = o2[h];
    let b, f, v = -1, R = 0;
    for (; R < u.length && (c.lastIndex = R, f = c.exec(u), f !== null); ) R = c.lastIndex, c === Ae ? f[1] === "!--" ? c = qo : f[1] !== void 0 ? c = Wo : f[2] !== void 0 ? (Go.test(f[2]) && (l = RegExp("</" + f[2], "g")), c = Y) : f[3] !== void 0 && (c = Y) : c === Y ? f[0] === ">" ? (c = l ?? Ae, v = -1) : f[1] === void 0 ? v = -2 : (v = c.lastIndex - f[2].length, b = f[1], c = f[3] === void 0 ? Y : f[3] === '"' ? Bo : Ho) : c === Bo || c === Ho ? c = Y : c === qo || c === Wo ? c = Ae : (c = Y, l = void 0);
    const M = c === Y && o2[h + 1].startsWith("/>") ? " " : "";
    i += c === Ae ? u + Va : v >= 0 ? (r.push(b), u.slice(0, v) + jo + u.slice(v) + U + M) : u + U + (v === -2 ? h : M);
  }
  return [Xo(o2, i + (o2[a] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class et {
  constructor({ strings: t, _$litType$: a }, r) {
    let l;
    this.parts = [];
    let i = 0, c = 0;
    const h = t.length - 1, u = this.parts, [b, f] = Ka(t, a);
    if (this.el = et.createElement(b, r), re.currentNode = this.el.content, a === 2 || a === 3) {
      const v = this.el.content.firstChild;
      v.replaceWith(...v.childNodes);
    }
    for (; (l = re.nextNode()) !== null && u.length < h; ) {
      if (l.nodeType === 1) {
        if (l.hasAttributes()) for (const v of l.getAttributeNames()) if (v.endsWith(jo)) {
          const R = f[c++], M = l.getAttribute(v).split(U), X = /([.?@])?(.*)/.exec(R);
          u.push({ type: 1, index: i, name: X[2], strings: M, ctor: X[1] === "." ? Xa : X[1] === "?" ? Ya : X[1] === "@" ? Za : Nt }), l.removeAttribute(v);
        } else v.startsWith(U) && (u.push({ type: 6, index: i }), l.removeAttribute(v));
        if (Go.test(l.tagName)) {
          const v = l.textContent.split(U), R = v.length - 1;
          if (R > 0) {
            l.textContent = qt ? qt.emptyScript : "";
            for (let M = 0; M < R; M++) l.append(v[M], Je()), re.nextNode(), u.push({ type: 2, index: ++i });
            l.append(v[R], Je());
          }
        }
      } else if (l.nodeType === 8) if (l.data === Ko) u.push({ type: 2, index: i });
      else {
        let v = -1;
        for (; (v = l.data.indexOf(U, v + 1)) !== -1; ) u.push({ type: 7, index: i }), v += U.length - 1;
      }
      i++;
    }
  }
  static createElement(t, a) {
    const r = de.createElement("template");
    return r.innerHTML = t, r;
  }
}
function we(o2, t, a = o2, r) {
  if (t === Ce) return t;
  let l = r !== void 0 ? a._$Co?.[r] : a._$Cl;
  const i = Qe(t) ? void 0 : t._$litDirective$;
  return l?.constructor !== i && (l?._$AO?.(false), i === void 0 ? l = void 0 : (l = new i(o2), l._$AT(o2, a, r)), r !== void 0 ? (a._$Co ??= [])[r] = l : a._$Cl = l), l !== void 0 && (t = we(o2, l._$AS(o2, t.values), l, r)), t;
}
class Ga {
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
    const { el: { content: a }, parts: r } = this._$AD, l = (t?.creationScope ?? de).importNode(a, true);
    re.currentNode = l;
    let i = re.nextNode(), c = 0, h = 0, u = r[0];
    for (; u !== void 0; ) {
      if (c === u.index) {
        let b;
        u.type === 2 ? b = new rt(i, i.nextSibling, this, t) : u.type === 1 ? b = new u.ctor(i, u.name, u.strings, this, t) : u.type === 6 && (b = new Ja(i, this, t)), this._$AV.push(b), u = r[++h];
      }
      c !== u?.index && (i = re.nextNode(), c++);
    }
    return re.currentNode = de, l;
  }
  p(t) {
    let a = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, a), a += r.strings.length - 2) : r._$AI(t[a])), a++;
  }
}
class rt {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, a, r, l) {
    this.type = 2, this._$AH = $, this._$AN = void 0, this._$AA = t, this._$AB = a, this._$AM = r, this.options = l, this._$Cv = l?.isConnected ?? true;
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
    t = we(this, t, a), Qe(t) ? t === $ || t == null || t === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : t !== this._$AH && t !== Ce && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ua(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== $ && Qe(this._$AH) ? this._$AA.nextSibling.data = t : this.T(de.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: a, _$litType$: r } = t, l = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = et.createElement(Xo(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === l) this._$AH.p(a);
    else {
      const i = new Ga(l, this), c = i.u(this.options);
      i.p(a), this.T(c), this._$AH = i;
    }
  }
  _$AC(t) {
    let a = Oo.get(t.strings);
    return a === void 0 && Oo.set(t.strings, a = new et(t)), a;
  }
  k(t) {
    _o(this._$AH) || (this._$AH = [], this._$AR());
    const a = this._$AH;
    let r, l = 0;
    for (const i of t) l === a.length ? a.push(r = new rt(this.O(Je()), this.O(Je()), this, this.options)) : r = a[l], r._$AI(i), l++;
    l < a.length && (this._$AR(r && r._$AB.nextSibling, l), a.length = l);
  }
  _$AR(t = this._$AA.nextSibling, a) {
    for (this._$AP?.(false, true, a); t !== this._$AB; ) {
      const r = Do(t).nextSibling;
      Do(t).remove(), t = r;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class Nt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, a, r, l, i) {
    this.type = 1, this._$AH = $, this._$AN = void 0, this.element = t, this.name = a, this._$AM = l, this.options = i, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = $;
  }
  _$AI(t, a = this, r, l) {
    const i = this.strings;
    let c = false;
    if (i === void 0) t = we(this, t, a, 0), c = !Qe(t) || t !== this._$AH && t !== Ce, c && (this._$AH = t);
    else {
      const h = t;
      let u, b;
      for (t = i[0], u = 0; u < i.length - 1; u++) b = we(this, h[r + u], a, u), b === Ce && (b = this._$AH[u]), c ||= !Qe(b) || b !== this._$AH[u], b === $ ? t = $ : t !== $ && (t += (b ?? "") + i[u + 1]), this._$AH[u] = b;
    }
    c && !l && this.j(t);
  }
  j(t) {
    t === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Xa extends Nt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === $ ? void 0 : t;
  }
}
class Ya extends Nt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== $);
  }
}
class Za extends Nt {
  constructor(t, a, r, l, i) {
    super(t, a, r, l, i), this.type = 5;
  }
  _$AI(t, a = this) {
    if ((t = we(this, t, a, 0) ?? $) === Ce) return;
    const r = this._$AH, l = t === $ && r !== $ || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, i = t !== $ && (r === $ || l);
    l && this.element.removeEventListener(this.name, this, r), i && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ja {
  constructor(t, a, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = a, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    we(this, t);
  }
}
const Qa = $o.litHtmlPolyfillSupport;
Qa?.(et, rt), ($o.litHtmlVersions ??= []).push("3.3.3");
const en = (o2, t, a) => {
  const r = a?.renderBefore ?? t;
  let l = r._$litPart$;
  if (l === void 0) {
    const i = a?.renderBefore ?? null;
    r._$litPart$ = l = new rt(t.insertBefore(Je(), i), i, void 0, a ?? {});
  }
  return l._$AI(o2), l;
};
const ko = globalThis;
class E extends fe {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const a = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = en(a, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return Ce;
  }
}
E._$litElement$ = true, E.finalized = true, ko.litElementHydrateSupport?.({ LitElement: E });
const tn = ko.litElementPolyfillSupport;
tn?.({ LitElement: E });
(ko.litElementVersions ??= []).push("4.2.2");
const on = { attribute: true, type: String, converter: Rt, reflect: false, hasChanged: xo }, an = (o2 = on, t, a) => {
  const { kind: r, metadata: l } = a;
  let i = globalThis.litPropertyMetadata.get(l);
  if (i === void 0 && globalThis.litPropertyMetadata.set(l, i = /* @__PURE__ */ new Map()), r === "setter" && ((o2 = Object.create(o2)).wrapped = true), i.set(a.name, o2), r === "accessor") {
    const { name: c } = a;
    return { set(h) {
      const u = t.get.call(this);
      t.set.call(this, h), this.requestUpdate(c, u, o2, true, h);
    }, init(h) {
      return h !== void 0 && this.C(c, void 0, o2, h), h;
    } };
  }
  if (r === "setter") {
    const { name: c } = a;
    return function(h) {
      const u = this[c];
      t.call(this, h), this.requestUpdate(c, u, o2, true, h);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function g(o2) {
  return (t, a) => typeof a == "object" ? an(o2, t, a) : ((r, l, i) => {
    const c = l.hasOwnProperty(i);
    return l.constructor.createProperty(i, r), c ? Object.getOwnPropertyDescriptor(l, i) : void 0;
  })(o2, t, a);
}
const nn = (o2, t, a) => (a.configurable = true, a.enumerable = true, Reflect.decorate && typeof t != "object" && Object.defineProperty(o2, t, a), a);
function G(o2, t) {
  return (a, r, l) => {
    const i = (c) => c.renderRoot?.querySelector(o2) ?? null;
    return nn(a, r, { get() {
      return i(this);
    } });
  };
}
const Yt = (o2) => o2 ?? $;
var Re, qe, H;
class st {
  constructor(t, a) {
    Re.set(this, void 0), qe.set(this, void 0), H.set(this, /* @__PURE__ */ new Set()), y(this, Re, t, "f"), y(this, qe, a.target, "f"), s(this, Re, "f").addController(this);
  }
  get targets() {
    return s(this, H, "f").values();
  }
  get hasTargets() {
    return s(this, H, "f").size > 0;
  }
  hostConnected() {
    s(this, qe, "f") !== null && this.observe(s(this, qe, "f") ?? s(this, Re, "f"));
  }
  hostDisconnected() {
    this.unobserveAll();
  }
  observe(t) {
    s(this, H, "f").has(t) || (s(this, H, "f").add(t), this._observe(t));
  }
  isObserving(t) {
    return s(this, H, "f").has(t);
  }
  unobserve(t) {
    s(this, H, "f").delete(t) && this._unobserve(t);
  }
  unobserveAll() {
    s(this, H, "f").forEach((t) => this.unobserve(t)), s(this, H, "f").clear();
  }
}
Re = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap();
function rn() {
  return matchMedia("(forced-colors: active)").matches;
}
function sn(o2) {
  return o2.assignedNodes({ flatten: true }).length > 0;
}
function ut() {
  return matchMedia("(prefers-reduced-motion)").matches;
}
function ln(o2, t = document) {
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
var $e, se, ke, je, _e, ht, mt, pt, bt, ge, Wt, Yo, no, Zo;
class lt extends st {
  constructor(t, a) {
    super(t, a), $e.add(this), ke.set(this, false), je.set(this, void 0), _e.set(this, void 0), ht.set(this, (r) => s(this, $e, "m", Yo).call(this, r)), mt.set(this, (r) => s(this, $e, "m", no).call(this, r)), pt.set(this, (r) => s(this, $e, "m", Zo).call(this, r)), bt.set(this, () => y(this, ke, true, "f")), ge.set(this, () => y(this, ke, false, "f")), y(this, je, a.callback, "f"), y(this, _e, a.filter, "f");
  }
  _observe(t) {
    t.addEventListener("keydown", s(this, ht, "f")), t.addEventListener("focusin", s(this, mt, "f")), t.addEventListener("focusout", s(this, pt, "f")), t.addEventListener("touchstart", s(this, bt, "f"), { passive: true }), t.addEventListener("touchend", s(this, ge, "f")), t.addEventListener("touchcancel", s(this, ge, "f"));
  }
  _unobserve(t) {
    t.removeEventListener("keydown", s(this, ht, "f")), t.removeEventListener("focusin", s(this, mt, "f")), t.removeEventListener("focusout", s(this, pt, "f")), t.removeEventListener("touchstart", s(this, bt, "f")), t.removeEventListener("touchend", s(this, ge, "f")), t.removeEventListener("touchcancel", s(this, ge, "f"));
  }
}
se = lt, ke = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), ge = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakSet(), Yo = function(t) {
  if (s(this, _e, "f")?.call(this, t)) return;
  t.currentTarget.matches(":focus-within") && s(this, $e, "m", no).call(this, t);
}, no = function(t) {
  if (s(this, _e, "f")?.call(this, t) || s(this, ke, "f")) return;
  const a = t.currentTarget;
  s(this, je, "f").call(this, true, a.matches(":focus-visible") || s(se, se, "f", Wt) || rn(), a);
}, Zo = function(t) {
  s(this, _e, "f")?.call(this, t) || s(this, ke, "f") || s(this, je, "f").call(this, false, false, t.currentTarget);
};
typeof window < "u" && (window.addEventListener("keydown", () => y(se, se, true, "f", Wt), { capture: true, passive: true }), window.addEventListener("pointerdown", () => y(se, se, false, "f", Wt), { capture: true }));
Wt = { value: false };
var I, ne, J, Q, vt, ye, ro, it, ct, Jo, Qo;
class ea extends st {
  constructor(t, a) {
    super(t, a), I.add(this), ne.set(this, void 0), J.set(this, /* @__PURE__ */ new Map()), Q.set(this, /* @__PURE__ */ new Map()), vt.set(this, (r) => s(this, I, "m", Jo).call(this, r)), ye.set(this, (r) => s(this, I, "m", Qo).call(this, r)), y(this, ne, a.callback, "f"), this.startDelay = a.startDelay ?? 0, this.endDelay = a.endDelay ?? 0;
  }
  clearDelays() {
    for (const t of this.targets) s(this, I, "m", ro).call(this, t);
  }
  _observe(t) {
    t.addEventListener("pointerenter", s(this, vt, "f")), t.addEventListener("pointerleave", s(this, ye, "f")), t.addEventListener("touchend", s(this, ye, "f"));
  }
  _unobserve(t) {
    t.removeEventListener("pointerenter", s(this, vt, "f")), t.removeEventListener("pointerleave", s(this, ye, "f")), t.removeEventListener("touchend", s(this, ye, "f")), s(this, I, "m", ro).call(this, t);
  }
}
ne = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), ye = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakSet(), ro = function(t) {
  s(this, I, "m", it).call(this, t), s(this, I, "m", ct).call(this, t);
}, it = function(t) {
  return s(this, J, "f").has(t) ? (clearTimeout(s(this, J, "f").get(t)), s(this, J, "f").delete(t)) : false;
}, ct = function(t) {
  return s(this, Q, "f").has(t) ? (clearTimeout(s(this, Q, "f").get(t)), s(this, Q, "f").delete(t)) : false;
}, Jo = function(t) {
  const a = t.target;
  s(this, I, "m", ct).call(this, a), this.startDelay > 0 ? (s(this, I, "m", it).call(this, a), s(this, J, "f").set(a, setTimeout(() => {
    s(this, J, "f").delete(a), s(this, ne, "f").call(this, true, a);
  }, this.startDelay))) : s(this, ne, "f").call(this, true, a);
}, Qo = function(t) {
  const a = t.target;
  s(this, I, "m", it).call(this, a) || (this.endDelay > 0 ? (s(this, I, "m", ct).call(this, a), s(this, Q, "f").set(a, setTimeout(() => {
    s(this, Q, "f").delete(a), s(this, ne, "f").call(this, false, a);
  }, this.endDelay))) : s(this, ne, "f").call(this, false, a));
};
var F, T, O, Ke, le, z, Ge, ft, gt, xe, yt, xt, ta, oa, aa, na, ra, Zt;
class Co extends st {
  constructor(t, a) {
    super(t, a), F.add(this), T.set(this, void 0), O.set(this, void 0), Ke.set(this, void 0), le.set(this, void 0), z.set(this, /* @__PURE__ */ new Map()), Ge.set(this, void 0), ft.set(this, (r) => s(this, F, "m", ta).call(this, r)), gt.set(this, (r) => s(this, F, "m", oa).call(this, r)), xe.set(this, (r) => s(this, F, "m", aa).call(this, r)), yt.set(this, (r) => s(this, F, "m", na).call(this, r)), xt.set(this, (r) => s(this, F, "m", ra).call(this, r)), y(this, T, a.capture, "f"), y(this, O, a.callback, "f"), y(this, Ke, a.filter, "f"), y(this, le, a.isPressedKey, "f"), y(this, Ge, a.minPressedDuration ?? 0, "f");
  }
  hostConnected() {
    document.addEventListener("pointerup", s(this, gt, "f"), { capture: s(this, T, "f") }), document.addEventListener("touchend", s(this, xe, "f"), { capture: s(this, T, "f") }), document.addEventListener("touchcancel", s(this, xe, "f"), { capture: s(this, T, "f") }), super.hostConnected();
  }
  hostDisconnected() {
    document.removeEventListener("pointerup", s(this, gt, "f"), { capture: s(this, T, "f") }), document.removeEventListener("touchend", s(this, xe, "f"), { capture: s(this, T, "f") }), document.removeEventListener("touchcancel", s(this, xe, "f"), { capture: s(this, T, "f") }), super.hostDisconnected(), s(this, z, "f").clear();
  }
  _observe(t) {
    t.addEventListener("pointerdown", s(this, ft, "f"), { capture: s(this, T, "f") }), s(this, le, "f") && (t.addEventListener("keydown", s(this, yt, "f"), { capture: s(this, T, "f") }), t.addEventListener("keyup", s(this, xt, "f"), { capture: s(this, T, "f") }));
  }
  _unobserve(t) {
    t.removeEventListener("pointerdown", s(this, ft, "f"), { capture: s(this, T, "f") }), s(this, le, "f") && (t.removeEventListener("keydown", s(this, yt, "f"), { capture: s(this, T, "f") }), t.removeEventListener("keyup", s(this, xt, "f"), { capture: s(this, T, "f") }));
  }
}
T = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakSet(), ta = function(t) {
  if (!s(this, Ke, "f")?.call(this, t) && !(t.pointerType === "mouse" && t.button > 1)) {
    for (const a of t.composedPath()) if (a instanceof HTMLElement && this.isObserving(a)) {
      s(this, z, "f").has(a) || (s(this, z, "f").set(a, performance.now()), s(this, O, "f").call(this, true, { x: t.x, y: t.y }, a));
      break;
    }
  }
}, oa = function(t) {
  t.pointerType === "mouse" && t.button > 1 || s(this, F, "m", Zt).call(this, t.x, t.y);
}, aa = function(t) {
  s(this, F, "m", Zt).call(this, t.changedTouches[0]?.clientX ?? 0, t.changedTouches[0]?.clientY ?? 0);
}, na = function(t) {
  if (s(this, Ke, "f")?.call(this, t) || t.target !== t.currentTarget) return;
  const a = t.currentTarget;
  if (s(this, le, "f")?.call(this, t.key) && (t.key === " " && t.preventDefault(), !s(this, z, "f").has(a))) {
    s(this, z, "f").set(a, performance.now());
    const r = a.getBoundingClientRect();
    s(this, O, "f").call(this, true, { x: r.x + r.width / 2, y: r.y + r.height / 2 }, a);
  }
}, ra = function(t) {
  const a = t.target;
  if (s(this, z, "f").has(a) && s(this, le, "f")?.call(this, t.key)) {
    const r = s(this, Ge, "f") - (performance.now() - s(this, z, "f").get(a)), l = a.getBoundingClientRect();
    r > 0 ? setTimeout(() => {
      s(this, z, "f").delete(a), s(this, O, "f").call(this, false, { x: l.x + l.width / 2, y: l.y + l.height / 2 }, a);
    }, r) : (s(this, z, "f").delete(a), s(this, O, "f").call(this, false, { x: l.x + l.width / 2, y: l.y + l.height / 2 }, a));
  }
}, Zt = function(t, a) {
  for (const r of s(this, z, "f")) {
    const l = s(this, Ge, "f") - (performance.now() - r[1]);
    l > 0 ? setTimeout(() => {
      s(this, z, "f").delete(r[0]), s(this, O, "f").call(this, false, { x: t, y: a }, r[0]);
    }, l) : (s(this, z, "f").delete(r[0]), s(this, O, "f").call(this, false, { x: t, y: a }, r[0]));
  }
};
var We, $t, _t, ee, He;
class cn extends st {
  constructor(t, a) {
    if (super(t, a), We.set(this, void 0), $t.set(this, void 0), _t.set(this, void 0), ee.set(this, void 0), He.set(this, true), y(this, We, a.callback, "f"), y(this, $t, a.skipInitial ?? false, "f"), y(this, _t, a.config, "f"), !window.ResizeObserver) {
      console.warn("ResizeController error: the browser does not support ResizeObserver.");
      return;
    }
    y(this, ee, new ResizeObserver((r, l) => s(this, We, "f").call(this, r, l)), "f");
  }
  async hostUpdated() {
    s(this, ee, "f") && !s(this, $t, "f") && s(this, He, "f") && s(this, We, "f").call(this, [], s(this, ee, "f")), y(this, He, false, "f");
  }
  _observe(t) {
    s(this, ee, "f")?.observe(t, s(this, _t, "f")), y(this, He, true, "f");
  }
  _unobserve(t) {
    s(this, ee, "f")?.unobserve(t);
  }
}
We = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakMap();
const D = (o2) => (t, a) => {
  const r = () => {
    typeof window < "u" && !customElements.get(o2) && customElements.define(o2, t);
  };
  a ? a.addInitializer(r) : r();
};
function wo(o2) {
  const t = /* @__PURE__ */ Symbol("_id");
  return (a, r, l) => {
    const i = l.value;
    return l.value = function(...c) {
      const h = this;
      clearTimeout(h[t]), h[t] = setTimeout(() => i.apply(this, c), o2);
    }, l;
  };
}
var ie, Ht, Xe, kt, te, Fo, Jt, sa, la;
class dn extends st {
  constructor(t, a) {
    super(t, a), ie.add(this), Ht.set(this, void 0), Xe.set(this, void 0), kt.set(this, (r) => s(this, ie, "m", la).call(this, r)), te.set(this, /* @__PURE__ */ new Map()), y(this, Ht, a.debounce === true, "f"), y(this, Xe, a.callback, "f");
  }
  getScrollContainers(t) {
    return s(this, te, "f").get(t);
  }
  _observe(t) {
    const a = s(this, ie, "m", sa).call(this, t);
    if (a.length > 0) {
      s(this, te, "f").set(t, a);
      for (const r of a) (r === document.documentElement ? document : r).addEventListener("scroll", s(this, kt, "f"), { passive: true });
    }
  }
  _unobserve(t) {
    if (s(this, te, "f").has(t)) {
      for (const a of s(this, te, "f").get(t)) (a === document.documentElement ? document : a).removeEventListener("scroll", s(this, kt, "f"));
      s(this, te, "f").delete(t);
    }
  }
  _debounceCallback(t) {
    s(this, Xe, "f").call(this, t);
  }
}
Ht = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakSet(), Fo = function(t) {
  const a = t.shadowRoot;
  if (!a) return null;
  const r = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT);
  let l = r.currentNode;
  for (; l; ) {
    if (l instanceof Element && s(this, ie, "m", Jt).call(this, l)) return l;
    l = r.nextNode();
  }
  return null;
}, Jt = function(t) {
  const a = getComputedStyle(t);
  return /(auto|scroll)/.test(a.overflow + a.overflowY + a.overflowX);
}, sa = function(t) {
  const a = new Array(), r = s(this, ie, "m", Fo).call(this, t);
  r && a.push(r);
  let l = t;
  for (; l; ) s(this, ie, "m", Jt).call(this, l) && a.push(l), l = l.parentElement;
  return a;
}, la = function(t) {
  const a = t.target === document ? document.documentElement : t.target;
  s(this, Ht, "f") ? this._debounceCallback(a) : s(this, Xe, "f").call(this, a);
};
m([wo(40)], dn.prototype, "_debounceCallback", null);
function ia(o2, ...t) {
  return typeof o2 == "object" && o2 !== null && t.every((a) => a in o2);
}
const j = /* @__PURE__ */ Symbol("internals"), No = /* @__PURE__ */ Symbol("_internals"), ue = /* @__PURE__ */ Symbol("_customState");
function Vt(o2, t) {
  var a;
  class r extends o2 {
    constructor() {
      super(...arguments), this[a] = /* @__PURE__ */ new Set();
    }
    get [(a = ue, j)]() {
      return this[No] ?? (this[No] = this.attachInternals());
    }
  }
  return r.formAssociated = t, r;
}
function Bt(o2, t) {
  return ue in o2 ? o2[ue].has(t) : o2[j].states.has(t);
}
function V(o2, t) {
  Bt(o2, t) || (ue in o2 && o2[ue].add(t), o2[j]?.states.add(t), o2[j]?.states.has(t));
}
function k(o2, t) {
  return ue in o2 && o2[ue].delete(t), o2[j]?.states.delete(t) ? (o2[j]?.states.has(t), true) : false;
}
function tt(o2, t, a) {
  a ? V(o2, t) : k(o2, t);
}
function ca(o2) {
  class t extends o2 {
    constructor() {
      super(...arguments), this.checked = false;
    }
    update(r) {
      super.update(r), r.has("checked") && (this.role === "button" ? (this.ariaPressed = `${this.checked}`, this.ariaChecked = null) : this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = `${this.checked}`, this.ariaPressed = null));
    }
  }
  return m([g({ type: Boolean, reflect: true })], t.prototype, "checked", void 0), t;
}
function un(o2) {
  class t extends ca(o2) {
    constructor() {
      super(...arguments), this.indeterminate = false;
    }
    update(r) {
      super.update(r), r.has("indeterminate") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = !this.checked && this.indeterminate ? "mixed" : `${this.checked}`);
    }
  }
  return m([g({ type: Boolean, reflect: true })], t.prototype, "indeterminate", void 0), t;
}
const Ut = { primary: e("var(--md-sys-color-primary, #6750A4)"), onPrimary: e("var(--md-sys-color-on-primary, #FFFFFF)"), primaryContainer: e("var(--md-sys-color-primary-container, #EADDFF)"), onPrimaryContainer: e("var(--md-sys-color-on-primary-container, #4F378B)"), primaryFixed: e("var(--md-sys-color-primary-fixed, #EADDFF)"), primaryFixedDim: e("var(--md-sys-color-primary-fixed-dim, #D0BCFF)"), onPrimaryFixed: e("var(--md-sys-color-on-primary-fixed, #21005D)"), onPrimaryFixedVariant: e("var(--md-sys-color-on-primary-fixed-variant, #4F378B)"), secondary: e("var(--md-sys-color-secondary, #625B71)"), onSecondary: e("var(--md-sys-color-on-secondary, #FFFFFF)"), secondaryContainer: e("var(--md-sys-color-secondary-container, #E8DEF8)"), onSecondaryContainer: e("var(--md-sys-color-on-secondary-container, #4A4458)"), secondaryFixed: e("var(--md-sys-color-secondary-fixed, #E8DEF8)"), secondaryFixedDim: e("var(--md-sys-color-secondary-fixed-dim, #CCC2DC)"), onSecondaryFixed: e("var(--md-sys-color-on-secondary-fixed, #1D192B)"), onSecondaryFixedVariant: e("var(--md-sys-color-on-secondary-fixed-variant, #4A4458)"), tertiary: e("var(--md-sys-color-tertiary, #7D5260)"), onTertiary: e("var(--md-sys-color-on-tertiary, #FFFFFF)"), tertiaryContainer: e("var(--md-sys-color-tertiary-container, #FFD8E4)"), onTertiaryContainer: e("var(--md-sys-color-on-tertiary-container, #633B48)"), tertiaryFixed: e("var(--md-sys-color-tertiary-fixed, #FFD8E4)"), tertiaryFixedDim: e("var(--md-sys-color-tertiary-fixed-dim, #EFB8C8)"), onTertiaryFixed: e("var(--md-sys-color-on-tertiary-fixed, #31111D)"), onTertiaryFixedVariant: e("var(--md-sys-color-on-tertiary-fixed-variant, #633B48)"), error: e("var(--md-sys-color-error, #B3261E)"), onError: e("var(--md-sys-color-on-error, #FFFFFF)"), errorContainer: e("var(--md-sys-color-error-container, #F9DEDC)"), onErrorContainer: e("var(--md-sys-color-on-error-container, #8C1D18)"), surface: e("var(--md-sys-color-surface, #FEF7FF)"), onSurface: e("var(--md-sys-color-on-surface, #1D1B20)"), onSurfaceVariant: e("var(--md-sys-color-on-surface-variant, #49454F)"), surfaceContainerLowest: e("var(--md-sys-color-surface-container-lowest, #FFFFFF)"), surfaceContainerLow: e("var(--md-sys-color-surface-container-low, #F7F2FA)"), surfaceContainer: e("var(--md-sys-color-surface-container, #F3EDF7)"), surfaceContainerHigh: e("var(--md-sys-color-surface-container-high, #ECE6F0)"), surfaceContainerHighest: e("var(--md-sys-color-surface-container-highest, #E6E0E9)"), surfaceDim: e("var(--md-sys-color-surface-dim, #DED8E1)"), surfaceBright: e("var(--md-sys-color-surface-bright, #FEF7FF)"), surfaceVariant: e("var(--md-sys-color-surface-variant, #E7E0EC)"), inverseSurface: e("var(--md-sys-color-inverse-surface, #322F35)"), inverseOnSurface: e("var(--md-sys-color-inverse-on-surface, #F5EFF7)"), inversePrimary: e("var(--md-sys-color-inverse-primary, #D0BCFF)"), outline: e("var(--md-sys-color-outline, #79747E)"), outlineVariant: e("var(--md-sys-color-outline-variant, #CAC4D0)"), shadow: e("var(--md-sys-color-shadow, #000000)"), scrim: e("var(--md-sys-color-scrim, #000000)") }, Qt = { scale: e("var(--md-sys-density-scale, 0)"), size: e("var(--md-sys-density-size, 0.25rem)") }, hn = { ...Qt, calc(o2) {
  return e(`calc(max(${o2}, ${Qt.scale}) * ${Qt.size})`);
} }, mn = `color-mix(in srgb, var(--m3e-elevation-color, ${Ut.shadow}) 20%, transparent)`, pn = ["0px 0px 0px 0px", "0px 2px 1px -1px", "0px 3px 1px -2px", "0px 3px 3px -2px", "0px 2px 4px -1px", "0px 3px 5px -1px", "0px 3px 5px -1px", "0px 4px 5px -2px", "0px 5px 5px -3px", "0px 5px 6px -3px", "0px 6px 6px -3px", "0px 6px 7px -4px", "0px 7px 8px -4px", "0px 7px 8px -4px", "0px 7px 9px -4px", "0px 8px 9px -5px", "0px 8px 10px -5px", "0px 8px 11px -5px", "0px 9px 11px -5px", "0px 9px 12px -6px", "0px 10px 13px -6px", "0px 10px 13px -6px", "0px 10px 14px -6px", "0px 11px 14px -7px", "0px 11px 15px -7px"], bn = `color-mix(in srgb, var(--m3e-elevation-color, ${Ut.shadow}) 14%, transparent)`, vn = ["0px 0px 0px 0px", "0px 1px 1px 0px", "0px 2px 2px 0px", "0px 3px 4px 0px", "0px 4px 5px 0px", "0px 5px 8px 0px", "0px 6px 10px 0px", "0px 7px 10px 1px", "0px 8px 10px 1px", "0px 9px 12px 1px", "0px 10px 14px 1px", "0px 11px 15px 1px", "0px 12px 17px 2px", "0px 13px 19px 2px", "0px 14px 21px 2px", "0px 15px 22px 2px", "0px 16px 24px 2px", "0px 17px 26px 2px", "0px 18px 28px 2px", "0px 19px 29px 2px", "0px 20px 31px 3px", "0px 21px 33px 3px", "0px 22px 35px 3px", "0px 23px 36px 3px", "0px 24px 38px 3px"], fn = `color-mix(in srgb, var(--m3e-elevation-color, ${Ut.shadow}) 12%, transparent)`, gn = ["0px 0px 0px 0px", "0px 1px 3px 0px", "0px 1px 5px 0px", "0px 1px 8px 0px", "0px 1px 10px 0px", "0px 1px 14px 0px", "0px 1px 18px 0px", "0px 2px 16px 1px", "0px 3px 14px 2px", "0px 3px 16px 2px", "0px 4px 18px 3px", "0px 4px 20px 3px", "0px 5px 22px 4px", "0px 5px 24px 4px", "0px 5px 26px 4px", "0px 6px 28px 5px", "0px 6px 30px 5px", "0px 6px 32px 5px", "0px 7px 34px 6px", "0px 7px 36px 6px", "0px 8px 38px 7px", "0px 8px 40px 7px", "0px 8px 42px 7px", "0px 9px 44px 8px", "0px 9px 46px 8px"];
function pe(o2) {
  return `${mn} ${pn[o2]},${bn} ${vn[o2]},${fn} ${gn[o2]}`;
}
const yn = { level0: e(`var(--md-sys-elevation-level0, ${pe(0)})`), level1: e(`var(--md-sys-elevation-level1, ${pe(1)})`), level2: e(`var(--md-sys-elevation-level2, ${pe(3)})`), level3: e(`var(--md-sys-elevation-level3, ${pe(6)})`), level4: e(`var(--md-sys-elevation-level4, ${pe(8)})`), level5: e(`var(--md-sys-elevation-level5, ${pe(12)})`) };
function C(o2) {
  return e(`var(--md-sys-measurement-space${o2}, ${0.5 * (o2 / 100)}rem)`);
}
C(0), C(25), C(50), C(75), C(100), C(125), C(150), C(175), C(200), C(250), C(300), C(400), C(450), C(500), C(600), C(700), C(800), C(900);
const xn = { emphasized: e("var(--md-sys-motion-easing-emphasized, cubic-bezier(0.2, 0.0, 0, 1.0))"), emphasizedDecelerate: e("var(--md-sys-motion-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))"), emphasizedAccelerate: e("var(--md-sys-motion-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))"), standard: e("var(--md-sys-motion-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))"), standardDecelerate: e("var(--md-sys-motion-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))"), standardAccelerate: e("var(--md-sys-motion-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))") }, $n = { fastSpatial: e("var(--md-sys-motion-spring-fast-spatial, 350ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), defaultSpatial: e("var(--md-sys-motion-spring-default-spatial, 500ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), slowSpatial: e("var(--md-sys-motion-spring-slow-spatial, 750ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), fastEffects: e("var(--md-sys-motion-spring-fast-effects, 150ms cubic-bezier(0.31, 0.94, 0.34, 1.00))"), defaultEffects: e("var(--md-sys-motion-spring-default-effects, 200ms cubic-bezier(0.34, 0.80, 0.34, 1.00))"), slowEffects: e("var(--md-sys-motion-spring-slow-effects, 200ms cubic-bezier(0.34, 0.88, 0.34, 1.00))") }, _n = { short1: e("var(--md-sys-motion-duration-short-1, 50ms)"), short2: e("var(--md-sys-motion-duration-short-2, 100ms)"), short3: e("var(--md-sys-motion-duration-short-3, 150ms)"), short4: e("var(--md-sys-motion-duration-short-4, 200ms)"), medium1: e("var(--md-sys-motion-duration-medium-1, 250ms)"), medium2: e("var(--md-sys-motion-duration-medium-2, 300ms)"), medium3: e("var(--md-sys-motion-duration-medium-3, 350ms)"), medium4: e("var(--md-sys-motion-duration-medium-4, 400ms)"), long1: e("var(--md-sys-motion-duration-long-1, 450ms)"), long2: e("var(--md-sys-motion-duration-long-2, 500ms)"), long3: e("var(--md-sys-motion-duration-long-3, 550ms)"), long4: e("var(--md-sys-motion-duration-long-4, 600ms)"), extraLong1: e("var(--md-sys-motion-duration-extra-long-1, 700ms)"), extraLong2: e("var(--md-sys-motion-duration-extra-long-2, 800ms)"), extraLong3: e("var(--md-sys-motion-duration-extra-long-3, 900ms)"), extraLong4: e("var(--md-sys-motion-duration-extra-long-4, 1000ms)") }, kn = { easing: xn, duration: _n, spring: $n }, Cn = { width: e("var(--m3e-scrollbar-width, auto)"), thinWidth: e("var(--m3e-scrollbar-thin-width, thin)"), color: e("var(--m3e-scrollbar-thumb-color, #938f94) var(--m3e-scrollbar-track-color, transparent)") }, d = { none: e("var(--md-sys-shape-corner-value-none, 0)"), extraSmall: e("var(--md-sys-shape-corner-value-extra-small, 0.25rem)"), small: e("var(--md-sys-shape-corner-value-small, 0.5rem)"), medium: e("var(--md-sys-shape-corner-value-medium, 0.75rem)"), large: e("var(--md-sys-shape-corner-value-large, 1rem)"), largeIncreased: e("var(--md-sys-shape-corner-value-large-increased, 1.25rem)"), extraLarge: e("var(--md-sys-shape-corner-value-extra-large, 1.75rem)"), extraLargeIncreased: e("var(--md-sys-shape-corner-value-extra-large-increased, 2rem)"), extraExtraLarge: e("var(--md-sys-shape-corner-value-extra-extra-large, 3rem)") }, wn = { corner: { full: e("var(--md-sys-shape-corner-full, 624.9375rem)"), extraLargeTop: e(`var(--md-sys-shape-corner-extra-large-top, ${d.extraLarge} ${d.extraLarge} ${d.none} ${d.none})`), extraLarge: e(`var(--md-sys-shape-corner-extra-large, ${d.extraLarge})`), extraLargeEnd: e(`${d.none} ${d.extraLarge} ${d.extraLarge} ${d.none}`), extraLargeStart: e(`${d.extraLarge} ${d.none} ${d.none} ${d.extraLarge}`), largeTop: e(`var(--md-sys-shape-corner-large-top, ${d.large} ${d.large} ${d.none} ${d.none})`), largeEnd: e(`var(--md-sys-shape-corner-large-end, ${d.none} ${d.large} ${d.large} ${d.none})`), largeStart: e(`var(--md-sys-shape-corner-large-start, ${d.large} ${d.none} ${d.none} ${d.large})`), large: e(`var(--md-sys-shape-corner-large, ${d.large})`), medium: e(`var(--md-sys-shape-corner-medium, ${d.medium})`), mediumTop: e(`${d.medium} ${d.medium} ${d.none} ${d.none}`), mediumEnd: e(`${d.none} ${d.medium} ${d.medium} ${d.none}`), mediumStart: e(`${d.medium} ${d.none} ${d.none} ${d.medium}`), small: e(`var(--md-sys-shape-corner-small, ${d.small})`), smallTop: e(`${d.small} ${d.small} ${d.none} ${d.none}`), smallEnd: e(`${d.none} ${d.small} ${d.small} ${d.none}`), smallStart: e(`${d.small} ${d.none} ${d.none} ${d.small}`), extraSmallTop: e(`var(--md-sys-shape-corner-extra-small-top, ${d.extraSmall} ${d.extraSmall} ${d.none} ${d.none})`), extraSmall: e(`var(--md-sys-shape-corner-extra-small, ${d.extraSmall})`), extraSmallEnd: e(`${d.none} ${d.extraSmall} ${d.extraSmall} ${d.none}`), extraSmallStart: e(`${d.extraSmall} ${d.none} ${d.none} ${d.extraSmall}`), extraSmallBottom: e(`${d.none} ${d.none} ${d.extraSmall} ${d.extraSmall}`), none: e(`var(--md-sys-shape-corner-none, ${d.none})`), largeIncreased: e(`var(--md-sys-shape-corner-large-increased, ${d.largeIncreased})`), extraLargeIncreased: e(`var(--md-sys-shape-corner-extra-large-increased, ${d.extraLargeIncreased})`), extraExtraLarge: e(`var(--md-sys-shape-corner-extra-extra-large, ${d.extraExtraLarge})`) } }, Sn = { focusStateLayerOpacity: e("var(--md-sys-state-focus-state-layer-opacity, 10%)"), hoverStateLayerOpacity: e("var(--md-sys-state-hover-state-layer-opacity, 8%)"), pressedStateLayerOpacity: e("var(--md-sys-state-pressed-state-layer-opacity, 10%)") }, En = { standard: { display: { large: { fontSize: e("var(--md-sys-typescale-display-large-font-size, 3.5625rem)"), fontWeight: e("var(--md-sys-typescale-display-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-display-large-line-height, 4rem)"), tracking: e("var(--md-sys-typescale-display-large-tracking, 0.015625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-display-medium-font-size, 2.8125rem)"), fontWeight: e("var(--md-sys-typescale-display-medium-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-display-medium-line-height, 3.25rem)"), tracking: e("var(--md-sys-typescale-display-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-display-small-font-size, 2.25rem)"), fontWeight: e("var(--md-sys-typescale-display-small-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-display-small-line-height, 2.75rem)"), tracking: e("var(--md-sys-typescale-display-small-tracking, 0)") } }, headline: { large: { fontSize: e("var(--md-sys-typescale-headline-large-font-size, 2rem)"), fontWeight: e("var(--md-sys-typescale-headline-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-headline-large-line-height, 2.5rem)"), tracking: e("var(--md-sys-typescale-headline-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-headline-medium-font-size, 1.75rem)"), fontWeight: e("var(--md-sys-typescale-headline-medium-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-headline-medium-line-height, 2.25rem)"), tracking: e("var(--md-sys-typescale-headline-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-headline-small-font-size, 1.5rem)"), fontWeight: e("var(--md-sys-typescale-headline-small-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-headline-small-line-height, 2rem)"), tracking: e("var(--md-sys-typescale-headline-small-tracking, 0)") } }, title: { large: { fontSize: e("var(--md-sys-typescale-title-large-font-size, 1.375rem)"), fontWeight: e("var(--md-sys-typescale-title-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-title-large-line-height, 1.75rem)"), tracking: e("var(--md-sys-typescale-title-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-title-medium-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-title-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-title-medium-line-height, 1.5rem)"), tracking: e("var(--md-sys-typescale-title-medium-tracking, 0.009375rem)") }, small: { fontSize: e("var(--md-sys-typescale-title-small-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-title-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-title-small-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: e("var(--md-sys-typescale-body-large-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-body-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-body-large-line-height, 1.5rem)"), tracking: e("var(--md-sys-typescale-body-large-tracking, 0.03125rem)") }, medium: { fontSize: e("var(--md-sys-typescale-body-medium-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-body-medium-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-body-medium-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-body-medium-tracking, 0.015625rem)") }, small: { fontSize: e("var(--md-sys-typescale-body-small-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-body-small-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-body-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: e("var(--md-sys-typescale-label-large-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-label-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-label-large-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-label-large-tracking, 0.00625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-label-medium-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-label-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-label-medium-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-label-medium-tracking, 0.03125rem)") }, small: { fontSize: e("var(--md-sys-typescale-label-small-font-size, 0.6875rem)"), fontWeight: e("var(--md-sys-typescale-label-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-label-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-label-small-tracking, 0.03125rem)") } } }, emphasized: { display: { large: { fontSize: e("var(--md-sys-typescale-emphasized-display-large-font-size, 3.5625rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-display-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-display-large-line-height, 4rem)"), tracking: e("var(--md-sys-typescale-emphasized-display-large-tracking, 0.015625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-display-medium-font-size, 2.8125rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-display-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-display-medium-line-height, 3.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-display-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-display-small-font-size, 2.25rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-display-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-display-small-line-height, 2.75rem)"), tracking: e("var(--md-sys-typescale-emphasized-display-small-tracking, 0)") } }, headline: { large: { fontSize: e("var(--md-sys-typescale-emphasized-headline-large-font-size, 2rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-headline-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-headline-large-line-height, 2.5rem)"), tracking: e("var(--md-sys-typescale-emphasized-headline-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-headline-medium-font-size, 1.75rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-headline-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-headline-medium-line-height, 2.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-headline-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-headline-small-font-size, 1.5rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-headline-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-headline-small-line-height, 2rem)"), tracking: e("var(--md-sys-typescale-emphasized-headline-small-tracking, 0)") } }, title: { large: { fontSize: e("var(--md-sys-typescale-emphasized-title-large-font-size, 1.375rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-title-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-title-large-line-height, 1.75rem)"), tracking: e("var(--md-sys-typescale-emphasized-title-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-title-medium-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-title-medium-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-title-medium-line-height, 3.5rem)"), tracking: e("var(--md-sys-typescale-emphasized-title-medium-tracking, 0.009375rem)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-title-small-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-title-small-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-title-small-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: e("var(--md-sys-typescale-emphasized-body-large-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-body-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-body-large-line-height, 1.5rem)"), tracking: e("var(--md-sys-typescale-emphasized-body-large-tracking, 0.03125rem)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-body-medium-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-body-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-body-medium-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-body-medium-tracking, 0.015625rem)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-body-small-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-body-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-body-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-emphasized-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: e("var(--md-sys-typescale-emphasized-label-large-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-label-large-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-label-large-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-label-large-tracking, 0.00625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-label-medium-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-label-medium-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-label-medium-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-emphasized-label-medium-tracking, 0.03125rem)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-label-small-font-size, 0.6875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-label-small-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-label-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-emphasized-label-small-tracking, 0.03125rem)") } } } }, n = { color: Ut, elevation: yn, motion: kn, shape: wn, state: Sn, typescale: En, scrollbar: Cn, density: hn };
function ot(o2) {
  return ia(o2, "disabled");
}
function So(o2, t = true) {
  class a extends o2 {
    constructor() {
      super(...arguments), this.disabled = false;
    }
    update(l) {
      super.update(l), l.has("disabled") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaDisabled = this.disabled ? "true" : null);
    }
  }
  return m([g({ type: Boolean, reflect: t })], a.prototype, "disabled", void 0), a;
}
function at(o2) {
  return ia(o2, "disabledInteractive") && ot(o2);
}
const Vo = ["click", "dblclick", "auxclick", "keydown", "keyup"], Ln = ["Tab", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Left", "Up", "Right", "Down"], eo = /* @__PURE__ */ Symbol("_suppressedEventHandler");
function Mn(o2) {
  var t;
  class a extends o2 {
    constructor() {
      super(...arguments), this[t] = (l) => {
        if (this.disabledInteractive) {
          if (l instanceof KeyboardEvent && Ln.includes(l.key)) return;
          l.stopImmediatePropagation(), l.preventDefault();
        }
      }, this.disabledInteractive = false;
    }
    connectedCallback() {
      Vo.forEach((l) => this.addEventListener(l, this[eo], true)), super.connectedCallback();
    }
    disconnectedCallback() {
      Vo.forEach((l) => this.removeEventListener(l, this[eo], true)), super.disconnectedCallback();
    }
    update(l) {
      super.update(l), (l.has("disabled") || l.has("disabledInteractive")) && this.role && this.role !== "none" && this.role !== "presentation" && this.role !== "none" && (this.ariaDisabled = this.disabled || this.disabledInteractive ? "true" : null);
    }
  }
  return t = eo, m([g({ attribute: "disabled-interactive", type: Boolean, reflect: true })], a.prototype, "disabledInteractive", void 0), a;
}
const Pe = /* @__PURE__ */ Symbol("_tabindex");
function Tn(o2) {
  var t;
  class a extends o2 {
    constructor() {
      super(...arguments), this[t] = 0;
    }
    connectedCallback() {
      this[Pe] = Number.parseInt(this.getAttribute("tabindex") ?? "0"), super.connectedCallback();
    }
    firstUpdated(l) {
      super.firstUpdated(l), !this.hasAttribute("tabindex") && !l.has("disabled") && this.setAttribute("tabindex", `${this[Pe]}`);
    }
    update(l) {
      if (super.update(l), l.has("disabled")) if (!this.disabled && this.role !== "none") this.hasAttribute("tabindex") || this.setAttribute("tabindex", `${this[Pe]}`);
      else {
        const i = this.getAttribute("tabindex");
        i && (this[Pe] = Number.parseInt(i)), this.removeAttribute("tabindex");
      }
    }
  }
  return t = Pe, a;
}
const to = /* @__PURE__ */ Symbol("_clickHandler");
function zn(o2) {
  var t;
  class a extends o2 {
    constructor() {
      super(...arguments), this.type = "button", this[t] = async (l) => {
        if (l.defaultPrevented || ot(this) && this.disabled || at(this) && this.disabledInteractive) return;
        const i = this[j].form;
        if (!(!i || this.type === "button") && (await new Promise((c) => setTimeout(c)), !l.defaultPrevented)) switch (this.type) {
          case "reset":
            i.reset();
            break;
          case "submit":
            i.addEventListener("submit", (c) => Object.defineProperty(c, "submitter", { configurable: true, enumerable: true, get: () => this }), { capture: true, once: true }), this[j].setFormValue(this.value), i.requestSubmit();
            break;
        }
      };
    }
    get name() {
      return this.getAttribute("name") ?? "";
    }
    set name(l) {
      l ? this.setAttribute("name", l) : this.removeAttribute("name");
    }
    get value() {
      return this.getAttribute("value");
    }
    set value(l) {
      l != null ? this.setAttribute("value", l) : this.removeAttribute("value");
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("click", this[to]);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("click", this[to]);
    }
  }
  return t = to, a.formAssociated = true, m([g()], a.prototype, "name", null), m([g()], a.prototype, "value", null), m([g()], a.prototype, "type", void 0), a;
}
const be = /* @__PURE__ */ Symbol("_control"), oo = /* @__PURE__ */ Symbol("_firstUpdated");
function jt(o2) {
  var t;
  class a extends o2 {
    constructor() {
      super(...arguments), this[t] = false, this.htmlFor = null;
    }
    get control() {
      return this[be]?.deref() ?? null;
    }
    connectedCallback() {
      super.connectedCallback();
      const l = this[be]?.deref();
      l && this.attach(l);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      const l = this[be];
      l && (this.detach(), this[be] = l);
    }
    firstUpdated(l) {
      super.firstUpdated(l), this[oo] = true;
    }
    update(l) {
      if (super.update(l), l.has("htmlFor")) if (this.htmlFor) {
        const i = this.getRootNode();
        i && ln(this.htmlFor, i).then((c) => {
          c !== this.control && (this.control && this.detach(), c instanceof HTMLElement && this.attach(c));
        });
      } else this.control && this[oo] && this.detach();
    }
    attach(l) {
      this[be] = new WeakRef(l);
    }
    detach() {
      this[be] = void 0;
    }
  }
  return t = oo, m([g({ attribute: "for" })], a.prototype, "htmlFor", void 0), a;
}
function An(o2, t = true) {
  var a, r, l, i, c, h, u;
  class b extends o2 {
    constructor() {
      super(...arguments), a.add(this), r.set(this, false), l.set(this, (v) => s(this, a, "m", h).call(this, v)), i.set(this, (v) => s(this, a, "m", u).call(this, v)), c.set(this, () => y(this, r, false, "f"));
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("keydown", s(this, l, "f")), this.addEventListener("keyup", s(this, i, "f")), this.addEventListener("focusout", s(this, c, "f"));
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("keydown", s(this, l, "f")), this.removeEventListener("keyup", s(this, i, "f")), this.removeEventListener("focusout", s(this, c, "f"));
    }
  }
  return r = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakSet(), h = function(v) {
    if (v.target !== v.currentTarget || ot(this) && this.disabled || at(this) && this.disabledInteractive) {
      y(this, r, false, "f");
      return;
    }
    (v.key === " " || t && v.key === "Enter") && y(this, r, true, "f");
  }, u = function(v) {
    if (v.target !== v.currentTarget || ot(this) && this.disabled || at(this) && this.disabledInteractive || !s(this, r, "f")) {
      y(this, r, false, "f");
      return;
    }
    y(this, r, false, "f"), this.dispatchEvent(new MouseEvent("click", { cancelable: true, bubbles: true, composed: true }));
  }, b;
}
const da = /* @__PURE__ */ Symbol("renderPseudoLink"), ao = /* @__PURE__ */ Symbol("_clickHandler");
function Pn(o2, t = false) {
  var a, r, l, i, c;
  class h extends o2 {
    constructor() {
      super(...arguments), a.add(this), this[c] = async (b) => {
        if (at(this) && this.disabledInteractive && (b.preventDefault(), b.stopPropagation()), await new Promise((f) => f()), !b.defaultPrevented && this.href) {
          b.preventDefault(), b.stopImmediatePropagation();
          const f = document.createElement("a");
          f.href = this.href, f.rel = this.rel, f.target = this.target, this.download != null && (f.download = this.download), f.addEventListener("click", async () => {
            await new Promise((v) => v()), f.remove();
          }), document.body.appendChild(f), f.click();
        }
      }, this.href = "", this.target = "", this.rel = "";
    }
    get download() {
      return this.getAttribute("download");
    }
    set download(b) {
      const f = this.download;
      f !== b && (b ? this.setAttribute("download", b) : this.removeAttribute("download"), this.requestUpdate("download", f));
    }
    connectedCallback() {
      super.connectedCallback(), t || this.addEventListener("click", this[ao]), this.hasAttribute("href") && this.role === "button" && (this.role = "link");
    }
    disconnectedCallback() {
      super.disconnectedCallback(), t || this.removeEventListener("click", this[ao]);
    }
    [(a = /* @__PURE__ */ new WeakSet(), c = ao, da)]() {
      const b = ot(this) && this.disabled, f = at(this) && this.disabledInteractive;
      return !b && !f && this.href ? S`<a href="${this.href}" target="${Yt(this.target || void 0)}" rel="${Yt(this.rel || void 0)}" download="${Yt(this.download || void 0)}" tabindex="-1" aria-hidden="true" @pointerdown="${s(this, a, "m", r)}" @focus="${s(this, a, "m", l)}" @blur="${s(this, a, "m", i)}"></a>` : $;
    }
  }
  return r = function(b) {
    b.button !== 2 ? b.preventDefault() : b.target.removeAttribute("aria-hidden");
  }, l = function(b) {
    b.target.blur(), this.focus();
  }, i = function(b) {
    b.target.setAttribute("aria-hidden", "true");
  }, m([g()], h.prototype, "href", void 0), m([g()], h.prototype, "target", void 0), m([g()], h.prototype, "rel", void 0), m([g({ reflect: false })], h.prototype, "download", null), h;
}
function me(o2, t) {
  class a extends o2 {
    connectedCallback() {
      this.role = this.role || t, super.connectedCallback();
    }
  }
  return a;
}
var Ct;
class In extends E {
  constructor() {
    super(...arguments), Ct.set(this, (t) => {
      t.defaultPrevented || this._onClick(t);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.parentElement?.addEventListener("click", s(this, Ct, "f"));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.parentElement?.removeEventListener("click", s(this, Ct, "f"));
  }
  render() {
    return S`<slot></slot>`;
  }
}
Ct = /* @__PURE__ */ new WeakMap();
In.styles = L`:host { display: contents; } ::slotted(.material-icons) { font-size: inherit !important; }`;
var P, Ye, Be, ua, Oe, Fe, so;
let Se = class extends Vt(E) {
  constructor() {
    super(...arguments), P.add(this), Ye.set(this, false), Be.set(this, false), this.open = false, this.orientation = "vertical", this.noAnimate = false;
  }
  update(t) {
    super.update(t);
    const a = this.noAnimate || t.has("orientation") && !t.has("open");
    if (V(this, "--no-animate"), !s(this, Ye, "f")) {
      this.open && (y(this, Be, true, "f"), s(this, P, "m", Oe).call(this)), y(this, Ye, true, "f");
      return;
    }
    this.toggleAttribute("inert", !this.open), this.open ? (y(this, Be, true, "f"), a || ut() || (s(this, P, "m", Oe).call(this), tt(this, "--overflows", this.orientation === "vertical" ? this.clientHeight < this.scrollHeight : this.orientation === "horizontal" ? this.clientWidth < this.scrollWidth : this.clientHeight < this.scrollHeight || this.clientWidth < this.scrollWidth), s(this, P, "m", Fe).call(this)), k(this, "--closing"), V(this, "--opening"), this.dispatchEvent(new Event("opening")), s(this, P, "m", Fe).call(this), k(this, "--no-animate"), s(this, P, "m", so).call(this), a || ut() ? (s(this, P, "m", Oe).call(this), k(this, "--opening"), this.dispatchEvent(new Event("opened"))) : this.addEventListener("transitionend", () => {
      this.open && (s(this, P, "m", Oe).call(this), k(this, "--opening"), this.dispatchEvent(new Event("opened")));
    }, { once: true })) : (k(this, "--opening"), V(this, "--closing"), this.dispatchEvent(new Event("closing")), s(this, P, "m", so).call(this), s(this, Be, "f") && k(this, "--no-animate"), a || ut() ? (s(this, P, "m", Fe).call(this), k(this, "--closing"), this.dispatchEvent(new Event("closed"))) : requestAnimationFrame(() => {
      s(this, P, "m", Fe).call(this), this.addEventListener("transitionend", () => {
        this.open || (k(this, "--closing"), this.dispatchEvent(new Event("closed")));
      }, { once: true });
    }));
  }
  render() {
    return S`<slot @slotchange="${s(this, P, "m", ua)}"></slot>`;
  }
};
Ye = /* @__PURE__ */ new WeakMap();
Be = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakSet();
ua = function() {
  y(this, Ye, true, "f");
};
Oe = function() {
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
Fe = function() {
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
so = function() {
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
Se.styles = L`:host { display: block; overflow: hidden; } :host([orientation="vertical"]) { height: 0px; transition: ${e(`visibility var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
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
m([g({ type: Boolean, reflect: true })], Se.prototype, "open", void 0);
m([g({ reflect: true })], Se.prototype, "orientation", void 0);
m([g({ attribute: "no-animate", type: Boolean, reflect: true })], Se.prototype, "noAnimate", void 0);
Se = m([D("m3e-collapsible")], Se);
const q = { liftDuration: e(`var(--m3e-elevation-lift-duration, ${n.motion.duration.short4})`), liftEasing: e(`var(--m3e-elevation-lift-easing, ${n.motion.easing.standard})`), settleDuration: e(`var(--m3e-elevation-settle-duration, ${n.motion.duration.short3})`), settleEasing: e(`var(--m3e-elevation-settle-easing, ${n.motion.easing.standardAccelerate})`), level: e(`var(--m3e-elevation-level, ${n.elevation.level0})`), hoverLevel: e(`var(--m3e-elevation-hover-level, ${n.elevation.level0})`), focusLevel: e(`var(--m3e-elevation-focus-level, ${n.elevation.level0})`), pressedLevel: e(`var(--m3e-elevation-pressed-level, ${n.elevation.level0})`) };
var Ne, wt, St, Et, ha, ma, pa;
let Ee = class extends jt(me(E, "none")) {
  constructor() {
    super(...arguments), Ne.add(this), wt.set(this, new ea(this, { target: null, callback: (t) => s(this, Ne, "m", ha).call(this, t) })), St.set(this, new lt(this, { target: null, callback: (t) => s(this, Ne, "m", ma).call(this, t) })), Et.set(this, new Co(this, { target: null, callback: (t) => s(this, Ne, "m", pa).call(this, t) })), this.disabled = false, this.level = null;
  }
  attach(t) {
    super.attach(t), s(this, wt, "f").observe(t), s(this, St, "f").observe(t), s(this, Et, "f").observe(t);
  }
  detach() {
    this.control && (s(this, wt, "f").unobserve(this.control), s(this, St, "f").unobserve(this.control), s(this, Et, "f").unobserve(this.control)), super.detach();
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
    return S`<div class="shadow"></div>`;
  }
};
wt = /* @__PURE__ */ new WeakMap();
St = /* @__PURE__ */ new WeakMap();
Et = /* @__PURE__ */ new WeakMap();
Ne = /* @__PURE__ */ new WeakSet();
ha = function(t) {
  this.disabled || (this._shadow?.classList.toggle("hover", t), this._shadow?.classList.toggle("resting", !t));
};
ma = function(t) {
  this.disabled || this._shadow?.classList.toggle("focus", t);
};
pa = function(t) {
  this.disabled || this._shadow?.classList.toggle("pressed", t);
};
Ee.styles = L`:host { display: block; } :host, .shadow { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .shadow.resting, .shadow.focus, .shadow.pressed { will-change: box-shadow; transition: ${e(`box-shadow ${q.settleDuration} ${q.settleEasing};`)}; } .shadow.hover { will-change: box-shadow; transition: ${e(`box-shadow ${q.liftDuration} ${q.liftEasing};`)}; } .shadow { box-shadow: ${q.level}; } .shadow.focus { box-shadow: ${q.focusLevel}; } .shadow.hover { box-shadow: ${q.hoverLevel}; } .shadow.pressed { box-shadow: ${q.pressedLevel}; } :host([level="0"]) .shadow { --m3e-elevation-level: ${n.elevation.level0}; --m3e-elevation-hover-level: ${n.elevation.level1}; } :host([level="1"]) .shadow { --m3e-elevation-level: ${n.elevation.level1}; --m3e-elevation-hover-level: ${n.elevation.level2}; } :host([level="2"]) .shadow { --m3e-elevation-level: ${n.elevation.level2}; --m3e-elevation-hover-level: ${n.elevation.level3}; } :host([level="3"]) .shadow { --m3e-elevation-level: ${n.elevation.level3}; --m3e-elevation-hover-level: ${n.elevation.level4}; } :host([level="4"]) .shadow { --m3e-elevation-level: ${n.elevation.level4}; --m3e-elevation-hover-level: ${n.elevation.level5}; } :host([level="5"]) .shadow { --m3e-elevation-level: ${n.elevation.level5}; --m3e-elevation-hover-level: ${q.level}; } :host([level]) .shadow { --m3e-elevation-focus-level: ${q.level}; --m3e-elevation-pressed-level: ${q.level}; } @media (prefers-reduced-motion) { .shadow.resting, .shadow.pressed, .shadow.focus, .shadow.hover { transition: none; } } @media (forced-colors: active) { .shadow { display: none; } }`;
m([G(".shadow")], Ee.prototype, "_shadow", void 0);
m([g({ type: Boolean, reflect: true })], Ee.prototype, "disabled", void 0);
m([g({ type: Number, reflect: true })], Ee.prototype, "level", void 0);
Ee = m([D("m3e-elevation")], Ee);
const _ = { color: e(`var(--m3e-focus-ring-color, ${n.color.secondary})`), duration: e(`var(--m3e-focus-ring-duration, ${n.motion.duration.long2})`), thickness: e("var(--m3e-focus-ring-thickness, 3px)"), outwardOffset: e("var(--m3e-focus-ring-outward-offset, 2px)"), inwardOffset: e("var(--m3e-focus-ring-inward-offset, 0px)"), visibility: e("var(--m3e-focus-ring-visibility, visible)"), growthFactor: e("var(--m3e-focus-ring-growth-factor, 2)") };
var lo, Lt, ba;
let Le = class extends jt(me(E, "none")) {
  constructor() {
    super(...arguments), lo.add(this), Lt.set(this, new lt(this, { target: null, callback: (t, a) => s(this, lo, "m", ba).call(this, a) })), this.inward = false, this.disabled = false;
  }
  show() {
    this._outline?.classList.toggle("visible", true);
  }
  hide() {
    this._outline?.classList.toggle("visible", false);
  }
  attach(t) {
    super.attach(t), s(this, Lt, "f").observe(t);
  }
  detach() {
    this.control && s(this, Lt, "f").unobserve(this.control), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.hide();
  }
  render() {
    return S`<div class="outline"></div>`;
  }
  updated(t) {
    super.updated(t), t.has("disabled") && this.disabled && this.hide();
  }
};
Lt = /* @__PURE__ */ new WeakMap();
lo = /* @__PURE__ */ new WeakSet();
ba = function(t) {
  this.disabled || (t ? this.show() : this.hide());
};
Le.styles = L`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; outline: none; } .outline { contain: layout style; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; z-index: 1; outline-color: ${_.color}; outline-width: ${_.thickness}; visibility: ${_.visibility}; } .outline.visible { outline-style: solid; } :host(:not([inward])) .outline { outline-offset: ${_.outwardOffset}; } :host([inward]) .outline { outline-offset: calc(${_.inwardOffset} - ${_.thickness}); } :host(:not([inward])) .outline.visible { animation: grow-shrink ${_.duration}; } :host([inward]) .outline.visible { animation: shrink-grow ${_.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @keyframes shrink-grow { 50% { outline-offset: calc( ${_.inwardOffset} - calc(${_.thickness} * ${_.growthFactor}) ); outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @media (prefers-reduced-motion) { :host(:not([inward])) .outline.visible, :host([inward]) .outline.visible { animation: none; } } @media (forced-colors: active) { .outline { outline-color: Highlight; } }`;
m([G(".outline")], Le.prototype, "_outline", void 0);
m([g({ type: Boolean, reflect: true })], Le.prototype, "inward", void 0);
m([g({ type: Boolean, reflect: true })], Le.prototype, "disabled", void 0);
Le = m([D("m3e-focus-ring")], Le);
let io = class extends un(So(me(E, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return this.indeterminate ? S`<svg viewBox="0 -960 960 960" fill="currentColor"><path Required d="M240-440v-80h480v80H240Z"/></svg>` : this.checked ? S`<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>` : $;
  }
};
io.styles = L`:host { display: inline-block; vertical-align: middle; width: var(--m3e-checkbox-icon-size, 1.125rem); height: var(--m3e-checkbox-icon-size, 1.125rem); border-radius: var(--m3e-checkbox-container-shape, 2px); box-sizing: border-box; flex: none; contain: layout style paint; } :host(:not([checked]):not([indeterminate])) { border-width: var(--m3e-checkbox-unselected-outline-thickness, 2px); border-style: solid; } :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { background-color: var(--m3e-checkbox-selected-container-color, ${n.color.primary}); color: var(--m3e-checkbox-selected-icon-color, ${n.color.onPrimary}); } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: var(--m3e-checkbox-unselected-outline-color, ${n.color.onSurfaceVariant}); } :host([disabled]:not([checked]):not([indeterminate])) { border-color: color-mix( in srgb, var(--m3e-checkbox-unselected-disabled-outline-color, ${n.color.onSurface}) var(--m3e-checkbox-unselected-disabled-outline-opacity, 38%), transparent ); } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-container-color, ${n.color.onSurface}) var(--m3e-checkbox-selected-disabled-container-opacity, 38%), transparent ); color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-icon-color, ${n.color.surface}) var(--m3e-checkbox-selected-disabled-icon-opacity, 100%), transparent ); } svg { pointer-events: none; } @media (forced-colors: active) { :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { border-color: Highlight; background-color: Highlight; color: HighlightText; } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: CanvasText; background: Canvas; } :host([disabled]:not([checked]):not([indeterminate])) { border-color: GrayText; background-color: Canvas; } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: GrayText; color: Canvas; } }`;
io = m([D("m3e-pseudo-checkbox")], io);
let co = class extends ca(So(me(E, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return S`<svg class="icon" viewBox="0 0 20 20"><mask id="cutout2"><rect width="100%" height="100%" fill="white"></rect><circle cx="10" cy="10" r="8" fill="black"></circle></mask><circle class="outer circle" cx="10" cy="10" r="10" mask="url(#cutout2)"></circle><circle class="inner circle" cx="10" cy="10" r="5"></circle></svg>`;
  }
};
co.styles = L`:host { display: inline-block; vertical-align: middle; box-sizing: border-box; width: var(--m3e-radio-icon-size, 1.25rem); height: var(--m3e-radio-icon-size, 1.25rem); flex: none; contain: layout style paint; } .circle { fill: currentColor; } :host(:not([checked])) .circle.inner { opacity: 0; } :host(:not([checked])) { color: var(--m3e-radio-unselected-icon-color, ${n.color.onSurfaceVariant}); } :host([checked]) { color: var(--m3e-radio-selected-icon-color, ${n.color.primary}); } :host([disabled]) { color: color-mix(in srgb, var(--m3e-radio-disabled-icon-color, ${n.color.onSurface}) 38%, transparent); } @media (forced-colors: active) { :host { border-radius: 50%; } :host(:not([checked])) { color: CanvasText; background-color: Canvas; } :host([checked]) { color: HighlightText; background-color: Highlight; } :host([disabled]) { color: GrayText; background-color: Canvas; } }`;
co = m([D("m3e-pseudo-radio")], co);
const Z = { color: e(`var(--m3e-ripple-color, ${n.color.onSurface})`), opacity: e(`var(--m3e-ripple-opacity, ${n.state.pressedStateLayerOpacity})`), enterDuration: e(`var(--m3e-ripple-enter-duration, ${n.motion.duration.long4})`), exitDuration: e(`var(--m3e-ripple-exit-duration, ${n.motion.duration.short2})`), scaleFactor: e("var(--m3e-ripple-scale-factor, 2.5)") };
var oe, w, Mt, Tt, va, fa;
let he = class extends jt(me(E, "none")) {
  constructor() {
    super(...arguments), oe.add(this), w.set(this, null), Mt.set(this, new Co(this, { target: null, minPressedDuration: 150, isPressedKey: (t) => t === " ", callback: (t, { x: a, y: r }) => s(this, oe, "m", fa).call(this, t, a, r) })), this.disabled = false, this.centered = false, this.unbounded = false, this.radius = null;
  }
  get visible() {
    return s(this, w, "f") !== null;
  }
  show(t, a, r = false) {
    s(this, oe, "m", Tt).call(this);
    const l = this.getBoundingClientRect();
    this.centered && (t = l.left + l.width / 2, a = l.top + l.height / 2);
    let i = this.radius;
    if (!i || isNaN(i)) {
      const u = Math.max(Math.abs(t - l.left), Math.abs(t - l.right)), b = Math.max(Math.abs(a - l.top), Math.abs(a - l.bottom));
      i = Math.sqrt(u * u + b * b);
    }
    const c = t - l.left, h = a - l.top;
    y(this, w, document.createElement("div"), "f"), s(this, w, "f").classList.add("ripple"), r && s(this, w, "f").classList.add("persistent"), s(this, w, "f").style.left = `${c - i}px`, s(this, w, "f").style.top = `${h - i}px`, s(this, w, "f").style.width = `${i * 2}px`, s(this, w, "f").style.height = `${i * 2}px`, s(this, w, "f").addEventListener("animationend", () => s(this, oe, "m", va).call(this, r), { once: true }), s(this, w, "f").addEventListener("transitionend", () => s(this, oe, "m", Tt).call(this), { once: true }), this.shadowRoot?.appendChild(s(this, w, "f"));
  }
  hide() {
    s(this, w, "f")?.classList.add("exit");
  }
  attach(t) {
    super.attach(t), s(this, Mt, "f").observe(t);
  }
  detach() {
    this.control && s(this, Mt, "f").unobserve(this.control), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), s(this, oe, "m", Tt).call(this);
  }
  updated(t) {
    super.updated(t), t.has("disabled") && this.disabled && this.hide();
  }
};
w = /* @__PURE__ */ new WeakMap();
Mt = /* @__PURE__ */ new WeakMap();
oe = /* @__PURE__ */ new WeakSet();
Tt = function() {
  s(this, w, "f")?.remove(), y(this, w, null, "f");
};
va = function(t) {
  t ? s(this, w, "f")?.classList.add("pressed") : this.hide();
};
fa = function(t, a, r) {
  this.disabled || (t ? this.show(a, r, true) : this.hide());
};
he.styles = L`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } :host(:not([unbounded])) { overflow: hidden; } :host(:not([unbounded])) .ripple { contain: layout style paint; } :host([unbounded]) .ripple { contain: layout style; } .ripple { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; transform: scale(0); border-radius: ${n.shape.corner.full}; background-color: color-mix(in srgb, ${Z.color} ${Z.opacity}, transparent); will-change: background-color, opacity; animation: ripple ${Z.enterDuration} linear; } .ripple.persistent.pressed { transform: scale(${Z.scaleFactor}); } .ripple.exit { transition: opacity ${Z.exitDuration} cubic-bezier(0, 0, 0.2, 0.1); opacity: 0; } @keyframes ripple { to { transform: scale(${Z.scaleFactor}); } } @media (prefers-reduced-motion) { .ripple { transform: scale(${Z.scaleFactor}); animation-duration: 90ms; } .ripple.exit { transition-duration: 10ms; } } @media (forced-colors: active) { .ripple { display: none; } }`;
m([g({ type: Boolean, reflect: true })], he.prototype, "disabled", void 0);
m([g({ type: Boolean, reflect: true })], he.prototype, "centered", void 0);
m([g({ type: Boolean, reflect: true })], he.prototype, "unbounded", void 0);
m([g({ type: Number })], he.prototype, "radius", void 0);
he = m([D("m3e-ripple")], he);
var Ve;
let Me = class extends Vt(E) {
  constructor() {
    super(...arguments), Ve.set(this, () => this._updateScroll()), this.dividers = "above-below", this.thin = false;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("scroll", s(this, Ve, "f"));
  }
  update(t) {
    super.update(t), t.has("dividers") && (this.removeEventListener("scroll", s(this, Ve, "f")), this.dividers !== "none" && this.addEventListener("scroll", s(this, Ve, "f"), { passive: true }));
  }
  render() {
    return S`<slot @slotchange="${this._updateScroll}"></slot>`;
  }
  _updateScroll() {
    const t = (this.dividers === "above" || this.dividers === "above-below") && this.scrollTop > 0, a = (this.dividers === "below" || this.dividers === "above-below") && this.scrollHeight - this.scrollTop - this.clientHeight > 1;
    tt(this, "--above", t), tt(this, "--below", a);
  }
};
Ve = /* @__PURE__ */ new WeakMap();
Me.styles = L`:host { display: block; overflow-y: auto; position: relative; box-sizing: border-box; scrollbar-color: ${n.scrollbar.color}; border-top: var(--m3e-divider-thickness, 1px) solid transparent; border-bottom: var(--m3e-divider-thickness, 1px) solid transparent; outline-color: ${_.color}; outline-width: ${_.thickness}; outline-offset: ${_.outwardOffset}; } :host([thin]) { scrollbar-width: ${n.scrollbar.thinWidth}; } :host(:not([thin])) { scrollbar-width: ${n.scrollbar.width}; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: var(--m3e-divider-color, ${n.color.outlineVariant}); } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: var(--m3e-divider-color, ${n.color.outlineVariant}); } :host(:focus-visible) { outline-style: solid; animation: grow-shrink ${_.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @media (forced-colors: active) { :host { border-top: var(--m3e-divider-thickness, 1px) solid Canvas; border-bottom: var(--m3e-divider-thickness, 1px) solid Canvas; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: GrayText; } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: GrayText; } } @media (prefers-reduced-motion) { :host(:focus-visible) { animation: none; } }`;
m([g()], Me.prototype, "dividers", void 0);
m([g({ type: Boolean, reflect: true })], Me.prototype, "thin", void 0);
m([wo(40)], Me.prototype, "_updateScroll", null);
Me = m([D("m3e-scroll-container")], Me);
var Ze, ce, ga, Eo;
let Ot = class extends Vt(E) {
  constructor() {
    super(...arguments), Ze.add(this), ce.set(this, new Array()), this.selectedIndex = null;
  }
  connectedCallback() {
    super.connectedCallback(), V(this, "--no-animate");
  }
  update(t) {
    super.update(t), t.has("selectedIndex") && (this.selectedIndex === null && V(this, "--no-animate"), s(this, Ze, "m", Eo).call(this), this.selectedIndex !== null && Bt(this, "--no-animate") && requestAnimationFrame(() => {
      this.selectedIndex !== null && k(this, "--no-animate");
    }));
  }
  render() {
    return S`<slot @slotchange="${s(this, Ze, "m", ga)}"></slot>`;
  }
};
ce = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakSet();
ga = function(t) {
  const a = [...t.target.assignedElements({ flatten: true })];
  for (const r of s(this, ce, "f").filter((l) => !a.includes(l))) r.classList.remove("-before"), r.classList.remove("-after"), r.removeAttribute("inert");
  y(this, ce, a, "f"), s(this, Ze, "m", Eo).call(this);
};
Eo = function() {
  const t = this.selectedIndex ?? s(this, ce, "f").length;
  for (let a = 0; a < s(this, ce, "f").length; a++) {
    const r = s(this, ce, "f")[a];
    r.classList.toggle("-before", a < t), r.classList.toggle("-after", a > t), r.toggleAttribute("inert", a !== t);
  }
};
Ot.styles = L`:host { display: flex; position: relative; overflow: hidden; } ::slotted(*) { width: 100%; top: 0; transition: ${e(`inset-inline-start var(--m3e-slide-animation-duration, ${n.motion.duration.long2}) ${n.motion.easing.standard},
        visibility var(--m3e-slide-animation-duration, ${n.motion.duration.long2}) ${n.motion.easing.standard} allow-discrete`)}; } ::slotted(.-before), ::slotted(.-after) { visibility: hidden; position: absolute; } ::slotted(.-before) { inset-inline-start: -100%; } ::slotted(.-after) { inset-inline-start: 100%; } ::slotted(:not(.-before):not(.-after)) { position: relative; inset-inline-start: 0; } :host(:is(:state(--no-animate), :--no-animate)) ::slotted(*) { transition: none; } @media (prefers-reduced-motion) { ::slotted(*) { transition: none; } }`;
m([g({ attribute: "selected-index", type: Number, reflect: true })], Ot.prototype, "selectedIndex", void 0);
Ot = m([D("m3e-slide")], Ot);
const ve = { hoverColor: e(`var(--m3e-state-layer-hover-color, ${n.color.onSurface})`), hoverOpacity: e(`var(--m3e-state-layer-hover-opacity, ${n.state.hoverStateLayerOpacity})`), focusColor: e(`var(--m3e-state-layer-focus-color, ${n.color.onSurface})`), focusOpacity: e(`var(--m3e-state-layer-focus-opacity, ${n.state.focusStateLayerOpacity})`), duration: e(`var(--m3e-state-layer-duration, ${n.motion.duration.medium1})`), easing: e(`var(--m3e-state-layer-easing, ${n.motion.easing.standard})`) };
var zt, At, Pt, ya, xa;
let Te = class extends jt(me(E, "none")) {
  constructor() {
    super(...arguments), zt.add(this), At.set(this, new ea(this, { target: null, callback: (t) => s(this, zt, "m", ya).call(this, t) })), Pt.set(this, new lt(this, { target: null, callback: (t, a) => s(this, zt, "m", xa).call(this, a) })), this.disabled = false, this.disableHover = false;
  }
  show(t) {
    this._layer?.classList.toggle(t, true);
  }
  hide(t) {
    this._layer?.classList.toggle(t, false);
  }
  attach(t) {
    super.attach(t), s(this, At, "f").observe(t), s(this, Pt, "f").observe(t);
  }
  detach() {
    this.control && (s(this, At, "f").unobserve(this.control), s(this, Pt, "f").unobserve(this.control)), super.detach();
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
    return S`<div class="layer"></div>`;
  }
};
At = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakSet();
ya = function(t) {
  !this.disabled && !this.disableHover && (t ? this.show("hover") : this.hide("hover"));
};
xa = function(t) {
  this.disabled || (t ? this.show("focused") : this.hide("focused"));
};
Te.styles = L`:host { display: block; } :host, .layer { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .layer { contain: layout style paint; will-change: background-color; transition: ${e(`background-color ${ve.duration} ${ve.easing}`)}; } .layer.focused { background-color: color-mix(in srgb, ${ve.focusColor} ${ve.focusOpacity}, transparent); } .layer.hover { background-color: color-mix(in srgb, ${ve.hoverColor} ${ve.hoverOpacity}, transparent); } @media (prefers-reduced-motion) { .layer { transition: none; } } @media (forced-colors: active) { .layer { display: none; } }`;
m([G(".layer")], Te.prototype, "_layer", void 0);
m([g({ type: Boolean, reflect: true })], Te.prototype, "disabled", void 0);
m([g({ attribute: "disable-hover", type: Boolean, reflect: true })], Te.prototype, "disableHover", void 0);
Te = m([D("m3e-state-layer")], Te);
var N, nt, W, ae, uo, $a, ho, mo;
let K = mo = class extends E {
  constructor() {
    super(), N.add(this), nt.set(this, `m3e-text-highlight-${mo.__nextId++}`), W.set(this, new Array()), ae.set(this, null), this.disabled = false, this.term = "", this.caseSensitive = false, this.mode = "contains", this.isSupported && (y(this, ae, new CSSStyleSheet(), "f"), s(this, ae, "f").replaceSync(L`::highlight(${e(s(this, nt, "f"))}) { background-color: var(--m3e-text-highlight-container-color, ${n.color.secondaryContainer}); color: var(--m3e-text-highlight-color, ${n.color.onSecondaryContainer}); text-decoration: var(--m3e-text-highlight-decoration); text-shadow: var(--m3e-text-highlight-shadow); }`.toString()));
  }
  get isSupported() {
    return !!CSS.highlights;
  }
  get ranges() {
    return s(this, W, "f");
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.shadowRoot && s(this, ae, "f") && !this.shadowRoot.adoptedStyleSheets.includes(s(this, ae, "f")) && this.shadowRoot.adoptedStyleSheets.push(s(this, ae, "f"));
  }
  updated(t) {
    super.updated(t), (t.has("term") || t.has("caseSensitive") || t.has("disabled")) && s(this, N, "m", ho).call(this);
  }
  render() {
    return S`<slot @slotchange="${s(this, N, "m", ho)}"></slot>`;
  }
};
nt = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakMap();
ae = /* @__PURE__ */ new WeakMap();
N = /* @__PURE__ */ new WeakSet();
uo = function(t) {
  return !/^\s*$/.test(t.data);
};
$a = function o(t, a) {
  t instanceof HTMLSlotElement ? t.assignedNodes({ flatten: true }).forEach((r) => {
    switch (r.nodeType) {
      case Node.TEXT_NODE:
        s(this, N, "m", uo).call(this, r) && a.push(r);
        break;
      case Node.ELEMENT_NODE:
        s(this, N, "m", o).call(this, r, a);
        break;
    }
  }) : t.childNodes.forEach((r) => {
    switch (r.nodeType) {
      case Node.TEXT_NODE:
        s(this, N, "m", uo).call(this, r) && a.push(r);
        break;
      case Node.ELEMENT_NODE:
        s(this, N, "m", o).call(this, r, a);
        break;
    }
  });
};
ho = function() {
  if (!this.isSupported || !this.isConnected || (CSS.highlights.delete(s(this, nt, "f")), s(this, W, "f").length = 0, this.disabled)) return;
  if (!this.term) {
    this.dispatchEvent(new CustomEvent("highlight", { detail: [...s(this, W, "f")], bubbles: false, composed: false }));
    return;
  }
  const t = new Array();
  if (s(this, N, "m", $a).call(this, this, t), t.length > 0) {
    const a = this.caseSensitive ? this.term : this.term.toLowerCase();
    switch (this.mode) {
      case "starts-with":
        {
          const r = t[0];
          if (((this.caseSensitive ? r.textContent : r.textContent?.toLowerCase()) ?? "").startsWith(a)) {
            const i = new Range();
            i.setStart(r, 0), i.setEnd(r, a.length), s(this, W, "f").push(i);
          }
        }
        break;
      case "ends-with":
        {
          const r = t[t.length - 1], l = (this.caseSensitive ? r.textContent : r.textContent?.toLowerCase()) ?? "";
          if (l.endsWith(a)) {
            const i = l.length - a.length, c = i + a.length, h = new Range();
            h.setStart(r, i), h.setEnd(r, c), s(this, W, "f").push(h);
          }
        }
        break;
      case "contains":
        y(this, W, t.map((r) => ({ el: r, text: (this.caseSensitive ? r.textContent : r.textContent?.toLowerCase()) ?? "" })).map(({ el: r, text: l }) => {
          const i = new Array();
          let c = 0;
          for (; c < l.length; ) {
            const h = l.indexOf(a, c);
            if (h === -1) break;
            i.push(h), c = h + a.length;
          }
          return i.map((h) => {
            const u = new Range();
            return u.setStart(r, h), u.setEnd(r, h + a.length), u;
          });
        }).flat(), "f");
        break;
    }
    s(this, W, "f").length > 0 && CSS.highlights.set(s(this, nt, "f"), new Highlight(...s(this, W, "f")));
  }
  this.dispatchEvent(new CustomEvent("highlight", { detail: [...s(this, W, "f")], bubbles: false, composed: false }));
};
K.styles = L`:host { display: contents; }`;
K.__nextId = 0;
m([g({ type: Boolean, reflect: true })], K.prototype, "disabled", void 0);
m([g()], K.prototype, "term", void 0);
m([g({ attribute: "case-sensitive", type: Boolean })], K.prototype, "caseSensitive", void 0);
m([g()], K.prototype, "mode", void 0);
K = mo = m([D("m3e-text-highlight")], K);
let po = class extends E {
  render() {
    return S`<span class="base"><slot></slot></span>`;
  }
};
po.styles = L`:host { flex: 1 1 auto; display: inline-flex; align-items: center; flex-wrap: nowrap; min-width: 0; } .base { flex: 1 1 auto; display: inline; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`;
po = m([D("m3e-text-overflow")], po);
const x = { "extra-small": { containerHeight: e(`calc(var(--m3e-button-extra-small-container-height, var(--m3e-button-container-height, 2rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-extra-small-outline-thickness, var(--m3e-button-outline-thickness, 1px))"), labelTextFontSize: e(`var(--m3e-button-extra-small-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.label.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-extra-small-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.label.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-extra-small-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.label.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-extra-small-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.label.large.tracking}))`), iconSize: e("var(--m3e-button-extra-small-icon-size, var(--m3e-button-icon-size, 1.25rem))"), shapeRound: e(`var(--m3e-button-extra-small-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-extra-small-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.medium}))`), selectedShapeRound: e(`var(--m3e-button-extra-small-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.medium}))`), selectedShapeSquare: e(`var(--m3e-button-extra-small-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-extra-small-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.small}))`), leadingSpace: e("var(--m3e-button-extra-small-leading-space, var(--m3e-button-leading-space, 0.75rem))"), trailingSpace: e("var(--m3e-button-extra-small-trailing-space, var(--m3e-button-trailing-space, 0.75rem))"), iconLabelSpace: e("var(--m3e-button-extra-small-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))") }, small: { containerHeight: e(`calc(var(--m3e-button-small-container-height, var(--m3e-button-container-height, 2.5rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-small-outline-thickness, var(--m3e-button-outline-thickness, 1px))"), labelTextFontSize: e(`var(--m3e-button-small-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.label.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-small-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.label.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-small-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.label.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-small-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.label.large.tracking}))`), iconSize: e("var(--m3e-button-small-icon-size, var(--m3e-button-icon-size, 1.25rem))"), shapeRound: e(`var(--m3e-button-small-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-small-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.medium}))`), selectedShapeRound: e(`var(--m3e-button-small-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.medium}))`), selectedShapeSquare: e(`var(--m3e-button-small-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-small-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.small}))`), leadingSpace: e("var(--m3e-button-small-leading-space, var(--m3e-button-leading-space, 1rem))"), trailingSpace: e("var(--m3e-button-small-trailing-space, var(--m3e-button-trailing-space, 1rem))"), iconLabelSpace: e("var(--m3e-button-small-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))") }, medium: { containerHeight: e(`calc(var(--m3e-button-medium-container-height, var(--m3e-button-container-height, 3.5rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-medium-outline-thickness, var(--m3e-button-outline-thickness, 1px))"), labelTextFontSize: e(`var(--m3e-button-medium-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.body.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-medium-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.body.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-medium-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.body.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-medium-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.body.large.tracking}))`), iconSize: e("var(--m3e-button-medium-icon-size, var(--m3e-button-icon-size, 1.5rem))"), shapeRound: e(`var(--m3e-button-medium-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-medium-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.large}))`), selectedShapeRound: e(`var(--m3e-button-medium-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.large}))`), selectedShapeSquare: e(`var(--m3e-button-medium-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-medium-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.medium}))`), leadingSpace: e("var(--m3e-button-medium-leading-space, var(--m3e-button-leading-space, 1.5rem))"), trailingSpace: e("var(--m3e-button-medium-trailing-space, var(--m3e-button-trailing-space, 1.5rem))"), iconLabelSpace: e("var(--m3e-button-medium-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))") }, large: { containerHeight: e(`calc(var(--m3e-button-large-container-height, var(--m3e-button-container-height, 6rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-large-outline-thickness, var(--m3e-button-outline-thickness, 2px))"), labelTextFontSize: e(`var(--m3e-button-large-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.headline.small.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-large-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.headline.small.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-large-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.headline.small.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-large-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.headline.small.tracking}))`), iconSize: e("var(--m3e-button-large-icon-size, var(--m3e-button-icon-size, 2rem))"), shapeRound: e(`var(--m3e-button-large-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-large-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.extraLarge}))`), selectedShapeRound: e(`var(--m3e-button-large-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.extraLarge}))`), selectedShapeSquare: e(`var(--m3e-button-large-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-large-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.large}))`), leadingSpace: e("var(--m3e-button-large-leading-space, var(--m3e-button-leading-space, 3rem))"), trailingSpace: e("var(--m3e-button-large-trailing-space, var(--m3e-button-trailing-space, 3rem))"), iconLabelSpace: e("var(--m3e-button-large-icon-label-space, var(--m3e-button-icon-label-space, 0.75rem))") }, "extra-large": { containerHeight: e(`calc(var(--m3e-button-extra-large-container-height, var(--m3e-button-container-height, 8.5rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-extra-large-outline-thickness, var(--m3e-button-outline-thickness, 3px))"), labelTextFontSize: e(`var(--m3e-button-extra-large-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.headline.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-extra-large-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.headline.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-extra-large-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.headline.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-extra-large-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.headline.large.tracking}))`), iconSize: e("var(--m3e-button-extra-large-icon-size, var(--m3e-button-icon-size, 2.5rem))"), shapeRound: e(`var(--m3e-button-extra-large-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-extra-large-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.extraLarge}))`), selectedShapeRound: e(`var(--m3e-button-extra-large-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.extraLarge}))`), selectedShapeSquare: e(`var(--m3e-button-extra-large-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-extra-large-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.large}))`), leadingSpace: e("var(--m3e-button-extra-large-leading-space, var(--m3e-button-leading-space, 4rem))"), trailingSpace: e("var(--m3e-button-extra-large-trailing-space, var(--m3e-button-trailing-space, 4rem))"), iconLabelSpace: e("var(--m3e-button-extra-large-icon-label-space, var(--m3e-button-icon-label-space, 1rem))") } };
function Ie(o2) {
  return L`:host([size="${e(o2)}"]) .base { height: ${x[o2].containerHeight}; } :host([size="${e(o2)}"]) .wrapper { padding-inline-start: calc(${x[o2].leadingSpace} - calc(var(--_adjacent-shrink, 0px) / 2)); padding-inline-end: calc(${x[o2].trailingSpace} - calc(var(--_adjacent-shrink, 0px) / 2)); column-gap: ${x[o2].iconLabelSpace}; } :host([size="${e(o2)}"]) .label { font-size: ${x[o2].labelTextFontSize}; font-weight: ${x[o2].labelTextFontWeight}; line-height: ${x[o2].labelTextLineHeight}; letter-spacing: ${x[o2].labelTextTracking}; } :host([size="${e(o2)}"]) .icon { font-size: ${x[o2].iconSize}; --m3e-icon-size: ${x[o2].iconSize}; } :host([size="${e(o2)}"]) .base { outline-offset: calc(0px - ${x[o2].outlineThickness}); outline-width: ${x[o2].outlineThickness}; } :host(:not(:is(:state(--connected), :--connected))[size="${e(o2)}"][shape="rounded"]) .base { border-radius: var(--_button-shape, ${x[o2].shapeRound}); } :host( :is(:state(--connected), :--connected)[size="${e(o2)}"][shape="rounded"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${x[o2].shapeRound}); } :host( :not(:is(:state(--connected), :--connected))[size="${e(o2)}"][shape="rounded"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: ${x[o2].selectedShapeRound}; } :host(:not(:is(:state(--connected), :--connected))[size="${e(o2)}"][shape="square"]) .base { border-radius: ${x[o2].shapeSquare}; } :host( :not(:is(:state(--connected), :--connected))[size="${e(o2)}"][shape="square"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${x[o2].selectedShapeSquare}); } :host(:not(:is(:state(--connected), :--connected))[size="${e(o2)}"]:is(:state(--pressed), :--pressed)) .base { border-radius: ${x[o2].shapePressedMorph}; } :host(:is(:state(--connected), :--connected)[size="${e(o2)}"][shape="rounded"]:not([toggle][selected])) .base { border-start-start-radius: var( --_button-rounded-start-shape, var(--_button-shape, ${x[o2].shapeRound}) ); border-end-start-radius: var( --_button-rounded-start-shape, var(--_button-shape, ${x[o2].shapeRound}) ); border-start-end-radius: var( --_button-rounded-end-shape, var(--_button-shape, ${x[o2].shapeRound}) ); border-end-end-radius: var( --_button-rounded-end-shape, var(--_button-shape, ${x[o2].shapeRound}) ); } :host(:is(:state(--connected), :--connected)[size="${e(o2)}"][shape="square"]) .base { border-start-start-radius: var(--_button-square-start-shape, ${x[o2].shapeSquare}); border-end-start-radius: var(--_button-square-start-shape, ${x[o2].shapeSquare}); border-start-end-radius: var(--_button-square-end-shape, ${x[o2].shapeSquare}); border-end-end-radius: var(--_button-square-end-shape, ${x[o2].shapeSquare}); } :host( :is(:state(--connected), :--connected)[size="${e(o2)}"][shape="square"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${x[o2].selectedShapeSquare}); } :host(:is(:state(--connected), :--connected)[size="${e(o2)}"]:is(:state(--pressed), :--pressed)) .base { border-start-start-radius: var(--_button-start-shape-pressed-morph, ${x[o2].shapePressedMorph}); border-end-start-radius: var(--_button-start-shape-pressed-morph, ${x[o2].shapePressedMorph}); border-start-end-radius: var(--_button-end-shape-pressed-morph, ${x[o2].shapePressedMorph}); border-end-end-radius: var(--_button-end-shape-pressed-morph, ${x[o2].shapePressedMorph}); }`;
}
const Dn = [Ie("extra-small"), Ie("small"), Ie("medium"), Ie("large"), Ie("extra-large")], Rn = L`:host { display: inline-block; outline: none; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); } .base { box-sizing: border-box; vertical-align: middle; display: inline-flex; align-items: center; justify-content: center; position: relative; width: 100%; transition: ${e(`background-color ${n.motion.duration.short4} ${n.motion.easing.standard}`)}; } .touch { position: absolute; height: 3rem; left: 0; right: 0; } :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base { transition: ${e(`background-color ${n.motion.duration.short4} ${n.motion.easing.standard},
          border-radius ${n.motion.spring.fastEffects}`)}; } .wrapper { width: 100%; overflow: hidden; display: inline-flex; align-items: center; justify-content: center; } .label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: ${e(`color ${n.motion.duration.short4} ${n.motion.easing.standard}`)}; } .icon { transition: ${e(`color ${n.motion.duration.short4} ${n.motion.easing.standard}`)}; } :host(:not(:disabled):not([disabled-interactive])) { cursor: pointer; } :host([disabled-interactive]) { cursor: not-allowed; } ::slotted([slot="icon"]), ::slotted([slot="selected-icon"]), ::slotted([slot="trailing-icon"]) { font-size: inherit !important; flex: none; } ::slotted(svg[slot="icon"]), ::slotted(svg[slot="selected-icon"]), ::slotted(svg[slot="trailing-icon"]) { width: 1em; height: 1em; } :host([toggle]:not([selected])) .base.with-selected-icon slot[name="selected-icon"], :host([toggle][selected]) .base.with-selected-icon slot[name="icon"] { display: none; } a { all: unset; display: block; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; z-index: 1; } :host(:is(:state(--grouped), :--grouped):is(:state(--connected), :--connected)) { flex: 1 1 auto; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) { transition: ${e(`width ${n.motion.spring.fastEffects}`)}; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) .wrapper { transition: ${e(`padding-inline ${n.motion.spring.fastEffects}`)}; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) { flex-shrink: 0; flex-grow: 0; } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):not( :is(:state(--pressed), :--pressed, :state(--adjacent-pressed), :--adjacent-pressed) ) ) { width: var(--_button-width); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):not( :is(:state(--pressed), :--pressed) ):is(:state(--adjacent-pressed), :--adjacent-pressed) ) { width: calc(var(--_button-width) - var(--_adjacent-shrink, 0px)); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):is( :state(--pressed), :--pressed ):not([disabled-interactive]):not(:disabled) ) { width: calc( var(--_button-width) + calc(var(--_button-width) * var(--m3e-standard-button-group-width-multiplier, 0.15)) ); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):is( :state(--adjacent-pressed), :--adjacent-pressed ):not(:is(:state(--pressed), :--pressed)) ) .label { text-overflow: clip; } @media (forced-colors: active) { .base, .label, .icon { transition: none; } :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base { transition: ${e(`border-radius ${n.motion.spring.fastEffects}`)}; } :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .base { background-color: ButtonFace; outline-color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .label, :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .icon { color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .base { background-color: ButtonFace; outline-color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .label, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected]):focus) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .icon, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .icon, :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected]):focus) .icon { color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .base { background-color: ButtonText; outline: none; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .label, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle][selected]) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]:focus) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .icon, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle][selected]) .icon, :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]:focus) .icon { forced-color-adjust: none; color: ButtonFace; background-color: ButtonText; } :host([variant]:disabled) .base, :host([variant][disabled-interactive]) .base { outline-color: GrayText; background-color: unset; } :host([variant]:disabled) .label, :host([variant][disabled-interactive]) .label, :host([variant]:disabled) .icon, :host([variant][disabled-interactive]) .icon { color: GrayText; } .base { outline-style: solid; } :host([size="extra-small"]) .base { outline-offset: calc(0px - var(--m3e-button-extra-small-outline-thickness, 1px)); outline-width: var(--m3e-button-extra-small-outline-thickness, 1px); } :host([size="small"]) .base { outline-offset: calc(0px - var(--m3e-button-small-outline-thickness, 1px)); outline-width: var(--m3e-button-small-outline-thickness, 1px); } :host([size="medium"]) .base { outline-offset: calc(0px - var(--m3e-button-medium-outline-thickness, 1px)); outline-width: var(--m3e-button-medium-outline-thickness, 1px); } :host([size="large"]) .base { outline-offset: calc(0px - var(--m3e-button-large-outline-thickness, 2px)); outline-width: var(--m3e-button-large-outline-thickness, 2px); } :host([size="extra-large"]) .base { outline-offset: calc(0px - var(--m3e-button-extra-large-outline-thickness, 3px)); outline-width: var(--m3e-button-extra-large-outline-thickness, 3px); } } @media (prefers-reduced-motion) { :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))), :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) .wrapper, :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base, .base, .label, .icon { transition: none; } }`, p = { elevated: { labelTextColor: e(`var(--m3e-elevated-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.primary}))`), iconColor: e(`var(--m3e-elevated-button-icon-color, var(--m3e-button-icon-color, ${n.color.primary}))`), containerColor: e(`var(--m3e-elevated-button-container-color, var(--m3e-button-container-color, ${n.color.surfaceContainerLow}))`), containerElevation: e(`var(--m3e-elevated-button-container-elevation, var(--m3e-button-container-elevation, ${n.elevation.level1}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-elevated-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.primary}))`), unselectedContainerColor: e(`var(--m3e-elevated-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${n.color.surfaceContainerLow}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.onPrimary}))`), selectedIconColor: e(`var(--m3e-elevated-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.onPrimary}))`), selectedContainerColor: e(`var(--m3e-elevated-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.primary}))`), disabled: { containerColor: e(`var(--m3e-elevated-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-elevated-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-elevated-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-elevated-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-elevated-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-elevated-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), containerElevation: e(`var(--m3e-elevated-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${n.elevation.level0}))`) }, hover: { iconColor: e(`var(--m3e-elevated-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-elevated-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-elevated-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-elevated-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), containerElevation: e(`var(--m3e-elevated-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${n.elevation.level2}))`), unselectedIconColor: e(`var(--m3e-elevated-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-elevated-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-elevated-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-elevated-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.onPrimary}))`) }, focus: { iconColor: e(`var(--m3e-elevated-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-elevated-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-elevated-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-elevated-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), containerElevation: e(`var(--m3e-elevated-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${n.elevation.level1}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-elevated-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-elevated-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-elevated-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-elevated-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.onPrimary}))`) }, pressed: { iconColor: e(`var(--m3e-elevated-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-elevated-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-elevated-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-elevated-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), containerElevation: e(`var(--m3e-elevated-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${n.elevation.level1}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-elevated-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-elevated-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-elevated-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-elevated-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.onPrimary}))`) } }, outlined: { labelTextColor: e(`var(--m3e-outlined-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.onSurfaceVariant}))`), iconColor: e(`var(--m3e-outlined-button-icon-color, var(--m3e-button-icon-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-outline-color, var(--m3e-button-outline-color, ${n.color.outlineVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedIconColor: e(`var(--m3e-outlined-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.onSurfaceVariant}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedIconColor: e(`var(--m3e-outlined-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedContainerColor: e(`var(--m3e-outlined-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.inverseSurface}))`), disabled: { containerColor: e(`var(--m3e-outlined-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-outlined-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-outlined-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-outlined-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-outlined-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-outlined-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), outlineColor: e(`var(--m3e-outlined-button-disabled-outline-color, var(--m3e-button-disabled-outline-color, ${n.color.outlineVariant}))`) }, hover: { iconColor: e(`var(--m3e-outlined-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.onSurfaceVariant}))`), labelTextColor: e(`var(--m3e-outlined-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-hover-outline-color, var(--m3e-button-hover-outline-color, ${n.color.outlineVariant}))`), stateLayerColor: e(`var(--m3e-outlined-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.onSurfaceVariant}))`), stateLayerOpacity: e(`var(--m3e-outlined-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-outlined-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-outlined-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-outlined-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedStateLayerColor: e(`var(--m3e-outlined-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.inverseOnSurface}))`) }, focus: { iconColor: e(`var(--m3e-outlined-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.onSurfaceVariant}))`), labelTextColor: e(`var(--m3e-outlined-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-focus-outline-color, var(--m3e-button-focus-outline-color, ${n.color.outlineVariant}))`), stateLayerColor: e(`var(--m3e-outlined-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.onSurfaceVariant}))`), stateLayerOpacity: e(`var(--m3e-outlined-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-outlined-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-outlined-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-outlined-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedStateLayerColor: e(`var(--m3e-outlined-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.inverseOnSurface}))`) }, pressed: { iconColor: e(`var(--m3e-outlined-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.onSurfaceVariant}))`), labelTextColor: e(`var(--m3e-outlined-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-pressed-outline-color, var(--m3e-button-pressed-outline-color, ${n.color.outlineVariant}))`), stateLayerColor: e(`var(--m3e-outlined-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.onSurfaceVariant}))`), stateLayerOpacity: e(`var(--m3e-outlined-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-outlined-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-outlined-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-outlined-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedStateLayerColor: e(`var(--m3e-outlined-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.inverseOnSurface}))`) } }, filled: { labelTextColor: e(`var(--m3e-filled-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.onPrimary}))`), iconColor: e(`var(--m3e-filled-button-icon-color, var(--m3e-button-icon-color, ${n.color.onPrimary}))`), containerColor: e(`var(--m3e-filled-button-container-color, var(--m3e-button-container-color, ${n.color.primary}))`), containerElevation: e(`var(--m3e-filled-button-container-elevation, var(--m3e-button-container-elevation, ${n.elevation.level0}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedIconColor: e(`var(--m3e-filled-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedContainerColor: e(`var(--m3e-filled-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${n.color.surfaceContainer}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.onPrimary}))`), selectedIconColor: e(`var(--m3e-filled-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.onPrimary}))`), selectedContainerColor: e(`var(--m3e-filled-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.primary}))`), disabled: { containerColor: e(`var(--m3e-filled-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-filled-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-filled-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-filled-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-filled-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-filled-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), containerElevation: e(`var(--m3e-filled-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${n.elevation.level0}))`) }, hover: { iconColor: e(`var(--m3e-filled-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.onPrimary}))`), labelTextColor: e(`var(--m3e-filled-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.onPrimary}))`), stateLayerColor: e(`var(--m3e-filled-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.onPrimary}))`), stateLayerOpacity: e(`var(--m3e-filled-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), containerElevation: e(`var(--m3e-filled-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${n.elevation.level1}))`), unselectedIconColor: e(`var(--m3e-filled-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-filled-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-filled-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-filled-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.onPrimary}))`) }, focus: { iconColor: e(`var(--m3e-filled-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.onPrimary}))`), labelTextColor: e(`var(--m3e-filled-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.onPrimary}))`), stateLayerColor: e(`var(--m3e-filled-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.onPrimary}))`), stateLayerOpacity: e(`var(--m3e-filled-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), containerElevation: e(`var(--m3e-filled-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-filled-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-filled-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-filled-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-filled-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.onPrimary}))`) }, pressed: { iconColor: e(`var(--m3e-filled-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.onPrimary}))`), labelTextColor: e(`var(--m3e-filled-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.onPrimary}))`), stateLayerColor: e(`var(--m3e-filled-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.onPrimary}))`), stateLayerOpacity: e(`var(--m3e-filled-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), containerElevation: e(`var(--m3e-filled-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-filled-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-filled-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-filled-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-filled-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.onPrimary}))`) } }, tonal: { labelTextColor: e(`var(--m3e-tonal-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.onSecondaryContainer}))`), iconColor: e(`var(--m3e-tonal-button-icon-color, var(--m3e-button-icon-color, ${n.color.onSecondaryContainer}))`), containerColor: e(`var(--m3e-tonal-button-container-color, var(--m3e-button-container-color, ${n.color.secondaryContainer}))`), containerElevation: e(`var(--m3e-tonal-button-container-elevation, var(--m3e-button-container-elevation, ${n.elevation.level0}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedIconColor: e(`var(--m3e-tonal-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedContainerColor: e(`var(--m3e-tonal-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${n.color.secondaryContainer}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.onSecondary}))`), selectedIconColor: e(`var(--m3e-tonal-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.onSecondary}))`), selectedContainerColor: e(`var(--m3e-tonal-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.secondary}))`), disabled: { containerColor: e(`var(--m3e-tonal-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-tonal-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-tonal-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-tonal-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-tonal-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-tonal-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), containerElevation: e(`var(--m3e-tonal-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${n.elevation.level0}))`) }, hover: { iconColor: e(`var(--m3e-tonal-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.onSecondaryContainer}))`), labelTextColor: e(`var(--m3e-tonal-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.onSecondaryContainer}))`), stateLayerColor: e(`var(--m3e-tonal-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.onSecondaryContainer}))`), stateLayerOpacity: e(`var(--m3e-tonal-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), containerElevation: e(`var(--m3e-tonal-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${n.elevation.level1}))`), unselectedIconColor: e(`var(--m3e-tonal-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedStateLayerColor: e(`var(--m3e-tonal-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.onSecondaryContainer}))`), selectedIconColor: e(`var(--m3e-tonal-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.onSecondary}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.onSecondary}))`), selectedStateLayerColor: e(`var(--m3e-tonal-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.onSecondary}))`) }, focus: { iconColor: e(`var(--m3e-tonal-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.onSecondaryContainer}))`), labelTextColor: e(`var(--m3e-tonal-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.onSecondaryContainer}))`), stateLayerColor: e(`var(--m3e-tonal-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.onSecondaryContainer}))`), stateLayerOpacity: e(`var(--m3e-tonal-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), containerElevation: e(`var(--m3e-tonal-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-tonal-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedStateLayerColor: e(`var(--m3e-tonal-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.onSecondaryContainer}))`), selectedIconColor: e(`var(--m3e-tonal-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.onSecondary}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.onSecondary}))`), selectedStateLayerColor: e(`var(--m3e-tonal-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.onSecondary}))`) }, pressed: { iconColor: e(`var(--m3e-tonal-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.onSecondaryContainer}))`), labelTextColor: e(`var(--m3e-tonal-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.onSecondaryContainer}))`), stateLayerColor: e(`var(--m3e-tonal-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.onSecondaryContainer}))`), stateLayerOpacity: e(`var(--m3e-tonal-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), containerElevation: e(`var(--m3e-tonal-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-tonal-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedStateLayerColor: e(`var(--m3e-tonal-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.onSecondaryContainer}))`), selectedIconColor: e(`var(--m3e-tonal-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.onSecondary}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.onSecondary}))`), selectedStateLayerColor: e(`var(--m3e-tonal-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.onSecondary}))`) } }, text: { labelTextColor: e(`var(--m3e-text-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.primary}))`), iconColor: e(`var(--m3e-text-button-icon-color, var(--m3e-button-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-text-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.primary}))`), disabled: { containerColor: e(`var(--m3e-text-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-text-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-text-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-text-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-text-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-text-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))") }, hover: { iconColor: e(`var(--m3e-text-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-text-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-text-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-text-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-text-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-text-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.primary}))`), selectedStateLayerColor: e(`var(--m3e-text-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.primary}))`) }, focus: { iconColor: e(`var(--m3e-text-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-text-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-text-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-text-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-text-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-text-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.primary}))`), selectedStateLayerColor: e(`var(--m3e-text-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.primary}))`) }, pressed: { iconColor: e(`var(--m3e-text-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-text-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-text-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-text-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-text-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-text-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.primary}))`), selectedStateLayerColor: e(`var(--m3e-text-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.primary}))`) } } };
function De(o2) {
  return L`:host([variant="${e(o2)}"]:not(:disabled):not([disabled-interactive])) .base { background-color: ${p[o2].containerColor ?? e("unset")}; --m3e-state-layer-hover-color: ${p[o2].hover.stateLayerColor}; --m3e-state-layer-hover-opacity: ${p[o2].hover.stateLayerOpacity}; --m3e-state-layer-focus-color: ${p[o2].focus.stateLayerColor}; --m3e-state-layer-focus-opacity: ${p[o2].focus.stateLayerOpacity}; --m3e-ripple-color: ${p[o2].pressed.stateLayerColor}; --m3e-ripple-opacity: ${p[o2].pressed.stateLayerOpacity}; --m3e-elevation-level: ${p[o2].containerElevation ?? e("unset")}; --m3e-elevation-hover-level: ${p[o2].hover.containerElevation ?? e("unset")}; --m3e-elevation-focus-level: ${p[o2].focus.containerElevation ?? e("unset")}; --m3e-elevation-pressed-level: ${p[o2].pressed.containerElevation ?? e("unset")}; } :host([variant="${e(o2)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .base { background-color: ${p[o2].unselectedContainerColor ?? e("unset")}; --m3e-state-layer-hover-color: ${p[o2].hover.unselectedStateLayerColor}; --m3e-state-layer-focus-color: ${p[o2].focus.unselectedStateLayerColor}; --m3e-ripple-color: ${p[o2].pressed.unselectedStateLayerColor}; } :host([variant="${e(o2)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .base { background-color: ${p[o2].selectedContainerColor ?? e("unset")}; --m3e-state-layer-hover-color: ${p[o2].hover.selectedStateLayerColor}; --m3e-state-layer-focus-color: ${p[o2].focus.selectedStateLayerColor}; --m3e-ripple-color: ${p[o2].pressed.selectedStateLayerColor}; } :host([variant="${e(o2)}"]:not(:disabled):not([disabled-interactive])) .base { outline-color: ${p[o2].outlineColor ?? e("unset")}; } :host([variant="${e(o2)}"]:focus:not(:disabled):not([disabled-interactive])) .base { outline-color: ${p[o2].focus.outlineColor ?? e("unset")}; } :host([variant="${e(o2)}"]:hover:not(:disabled):not([disabled-interactive])) .base { outline-color: ${p[o2].hover.outlineColor ?? e("unset")}; } :host( [variant="${e(o2)}"]:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive]) ) .base { outline-color: ${p[o2].pressed.outlineColor ?? e("unset")}; } :host([variant="${e(o2)}"]:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].labelTextColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].unselectedLabelTextColor}; } :host([variant="${e(o2)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].selectedLabelTextColor}; } :host([variant="${e(o2)}"]:focus:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].focus.labelTextColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):focus:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].focus.unselectedLabelTextColor}; } :host([variant="${e(o2)}"][toggle][selected]:focus:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].focus.selectedLabelTextColor}; } :host([variant="${e(o2)}"]:hover:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].hover.labelTextColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):hover:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].hover.unselectedLabelTextColor}; } :host([variant="${e(o2)}"][toggle][selected]:hover:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].hover.selectedLabelTextColor}; } :host( [variant="${e(o2)}"]:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive]) ) .label { color: ${p[o2].pressed.labelTextColor}; } :host( [variant="${e(o2)}"][toggle]:not([selected]):is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .label { color: ${p[o2].pressed.unselectedLabelTextColor}; } :host( [variant="${e(o2)}"][toggle][selected]:is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .label { color: ${p[o2].pressed.selectedLabelTextColor}; } :host([variant="${e(o2)}"]:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].iconColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].unselectedIconColor}; } :host([variant="${e(o2)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].selectedIconColor}; } :host([variant="${e(o2)}"]:focus:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].focus.iconColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):focus:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].focus.unselectedIconColor}; } :host([variant="${e(o2)}"][toggle][selected]:focus:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].focus.selectedIconColor}; } :host([variant="${e(o2)}"]:hover:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].hover.iconColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):hover:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].hover.unselectedIconColor}; } :host([variant="${e(o2)}"][toggle][selected]:hover:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].hover.selectedIconColor}; } :host( [variant="${e(o2)}"]:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive]) ) .icon { color: ${p[o2].pressed.iconColor}; } :host( [variant="${e(o2)}"][toggle]:not([selected]):is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .icon { color: ${p[o2].pressed.unselectedIconColor}; } :host( [variant="${e(o2)}"][toggle][selected]:is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .icon { color: ${p[o2].pressed.selectedIconColor}; } :host([variant="${e(o2)}"]:disabled) .base, :host([variant="${e(o2)}"][disabled-interactive]) .base { --m3e-elevation-level: ${p[o2].disabled.containerElevation ?? e("unset")}; outline-color: ${p[o2].disabled.outlineColor ?? e("unset")}; background-color: color-mix( in srgb, ${p[o2].disabled.containerColor} ${p[o2].disabled.containerOpacity}, transparent ); } :host([variant="${e(o2)}"]:disabled) .label, :host([variant="${e(o2)}"][disabled-interactive]) .label { color: color-mix( in srgb, ${p[o2].disabled.labelTextColor} ${p[o2].disabled.labelTextOpacity}, transparent ); } :host([variant="${e(o2)}"]:disabled) .icon, :host([variant="${e(o2)}"][disabled-interactive]) .icon { color: color-mix( in srgb, ${p[o2].disabled.iconColor} ${p[o2].disabled.iconOpacity}, transparent ); }`;
}
const qn = [De("text"), De("elevated"), De("outlined"), De("filled"), De("tonal"), L`:host([variant="outlined"]:not([toggle][selected]):not(:disabled):not([disabled-interactive])) .base { outline-style: solid; }`];
var B, It, _a, ka, bo, vo, fo;
let A = class extends An(Pn(zn(Tn(Mn(So(Vt(me(E, "button"), true))))))) {
  constructor() {
    super(), B.add(this), this._adjacentPressedTimeout = -1, It.set(this, (t) => s(this, B, "m", _a).call(this, t)), this.variant = "text", this.shape = "rounded", this.size = "small", this.toggle = false, this.selected = false, new cn(this, { callback: () => this._handleResize() }), new lt(this, { callback: (t) => {
      !this.disabledInteractive && !t && !this.grouped && this._base?.style.removeProperty("--_button-shape");
    } }), new Co(this, { isPressedKey: (t) => t === " ", minPressedDuration: 150, callback: (t) => {
      !this.disabled && !this.disabledInteractive && (t ? (s(this, B, "m", bo).call(this), s(this, B, "m", vo).call(this, true)) : s(this, B, "m", vo).call(this, false));
    } });
  }
  get grouped() {
    return Bt(this, "--grouped");
  }
  render() {
    return S`<div class="base"><m3e-elevation class="elevation" ?disabled="${this.disabled || this.disabledInteractive}"></m3e-elevation><m3e-state-layer class="state-layer" ?disabled="${this.disabled || this.disabledInteractive}"></m3e-state-layer><m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring><m3e-ripple class="ripple" ?disabled="${this.disabled || this.disabledInteractive}"></m3e-ripple><div class="touch" aria-hidden="true"></div>${this[da]()}<div class="wrapper">${this.toggle ? S`<slot class="icon" name="selected-icon" aria-hidden="true" @slotchange="${s(this, B, "m", ka)}"></slot>` : $}<slot class="icon" name="icon" aria-hidden="true"></slot><div class="label">${this.toggle && this.selected ? S`<slot name="selected"><slot></slot></slot>` : S`<slot></slot>`}</div><slot class="icon" name="trailing-icon" aria-hidden="true"></slot></div></div>`;
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", s(this, It, "f"));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), ["--pressed", "--resting", "--grouped", "--connected"].forEach((t) => k(this, t)), this._base?.style.removeProperty("--_button-shape"), this.style.removeProperty("--_button-width"), this.style.removeProperty("--_adjacent-shrink"), k(this, "--adjacent-pressed"), this.removeEventListener("click", s(this, It, "f"));
  }
  firstUpdated(t) {
    super.firstUpdated(t), [this._elevation, this._focusRing, this._stateLayer, this._ripple].forEach((a) => a?.attach(this));
  }
  updated(t) {
    if (super.updated(t), (t.has("disabled") && this.disabled || t.has("disabledInteractive") && this.disabledInteractive) && (k(this, "--pressed"), k(this, "--resting")), (t.has("toggle") || t.has("selected")) && (this.ariaPressed = this.toggle ? `${this.selected}` : null, this.toggle)) for (const a of this.querySelectorAll("m3e-icon")) a.toggleAttribute("filled", this.selected);
  }
  _handleResize() {
    this.grouped && !Bt(this, "--no-resize") && this !== document.activeElement && (this.style.setProperty("--_button-width", `${this.getBoundingClientRect().width}px`), s(this, B, "m", bo).call(this, true));
  }
};
It = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakSet();
_a = function(t) {
  (this.disabled || this.disabledInteractive) && (t.preventDefault(), t.stopImmediatePropagation()), this.toggle && !t.defaultPrevented && this.dispatchEvent(new Event("beforeinput", { bubbles: true, cancelable: true })) && (this.selected = !this.selected, this.dispatchEvent(new Event("input", { bubbles: true })), this.dispatchEvent(new Event("change", { bubbles: true })));
};
ka = function(t) {
  this._base?.classList.toggle("with-selected-icon", sn(t.target));
};
bo = function(t = false) {
  if (!this._base) return;
  const a = parseFloat(getComputedStyle(this._base).borderRadius);
  if (!isNaN(a) || t) {
    const r = this.clientHeight / 2;
    (r < a || t) && this._base?.style.setProperty("--_button-shape", `${r}px`);
  }
};
vo = function(t) {
  const a = this.getBoundingClientRect().width, r = this.closest("m3e-button-group");
  if (r && r.variant === "standard") {
    const l = [...r.querySelectorAll("m3e-button,m3e-icon-button")];
    for (const c of l) clearTimeout(c._adjacentPressedTimeout), c._adjacentPressedTimeout = -1;
    const i = l.indexOf(this);
    if (t) {
      const c = parseFloat(getComputedStyle(this).getPropertyValue("--m3e-standard-button-group-width-multiplier") || "0.15");
      let h = a * c;
      i > 0 && i < l.length - 1 && (h /= 2);
      for (let u = 0; u < l.length; u++) u == i - 1 || u == i + 1 ? (V(l[u], "--no-resize"), l[u].style.setProperty("--_adjacent-shrink", `${h}px`), V(l[u], "--adjacent-pressed")) : u == i ? (V(l[u], "--no-resize"), l[u].style.removeProperty("--_adjacent-shrink"), k(l[u], "--adjacent-pressed")) : (k(l[u], "--no-resize"), l[u].style.removeProperty("--_adjacent-shrink"), k(l[u], "--adjacent-pressed"));
    } else {
      for (let c = 0; c < l.length; c++) (c == i - 1 || c == i + 1) && l[c].style.setProperty("--_adjacent-shrink", "0px");
      ut() ? s(this, B, "m", fo).call(this, l) : this.addEventListener("transitionend", (c) => {
        c.propertyName === "width" && (this._adjacentPressedTimeout = setTimeout(() => {
          this._adjacentPressedTimeout > -1 && s(this, B, "m", fo).call(this, l);
        }, 600));
      }, { once: true });
    }
  }
  tt(this, "--pressed", t), tt(this, "--resting", !t);
};
fo = function(t) {
  for (const a of t) k(a, "--adjacent-pressed"), k(a, "--no-resize"), a.style.removeProperty("--_adjacent-shrink");
};
A.styles = [Dn, qn, Rn];
m([G(".base")], A.prototype, "_base", void 0);
m([G(".elevation")], A.prototype, "_elevation", void 0);
m([G(".focus-ring")], A.prototype, "_focusRing", void 0);
m([G(".state-layer")], A.prototype, "_stateLayer", void 0);
m([G(".ripple")], A.prototype, "_ripple", void 0);
m([g({ reflect: true })], A.prototype, "variant", void 0);
m([g({ reflect: true })], A.prototype, "shape", void 0);
m([g({ reflect: true })], A.prototype, "size", void 0);
m([g({ type: Boolean, reflect: true })], A.prototype, "toggle", void 0);
m([g({ type: Boolean, reflect: true })], A.prototype, "selected", void 0);
m([wo(40)], A.prototype, "_handleResize", null);
A = m([D("m3e-button")], A);
const Wn = ["aria-busy", "disabled", "selected", "shape", "size", "toggle", "type", "variant"], Hn = { class: "md-button__label-text" }, Dt = Lo({ __name: "MDButton", props: { nativeType: { default: "button" }, color: { default: "filled" }, label: {}, disabled: { type: Boolean }, loading: { type: [Number, Boolean] }, variant: { default: "default" }, size: { default: "small" }, shape: { default: "round" }, selected: { type: Boolean } }, emits: ["click", "update:selected"], setup(o2, { emit: t }) {
  const a = o2, r = t, l = Ca(), i = Lo({ name: "MDButtonIconSlot", setup(M, { slots: X }) {
    return () => Ta("span", { class: "md-button__icon", slot: "icon" }, X.default?.());
  } }), c = ze(() => a.loading !== void 0 && a.loading !== false), h = ze(() => a.color === "text" && a.variant === "toggle"), u = ze(() => a.variant === "toggle" && !h.value), b = ze(() => u.value && !!a.selected), f = ze(() => a.shape === "round" ? "rounded" : "square"), v = (M) => {
    u.value && (M.preventDefault(), r("update:selected", !b.value));
  }, R = (M) => {
    r("click", M);
  };
  return (M, X) => (Gt(), wa("m3e-button", { class: "md-button", "aria-busy": c.value ? "true" : void 0, disabled: a.disabled, selected: b.value, shape: f.value, size: a.size, toggle: u.value, type: a.nativeType, variant: a.color, onBeforeinput: v, onClick: Ma(R, ["stop"]) }, [l.icon ? (Gt(), Mo(Kt(i), { key: 0 }, { default: Sa(() => [za(M.$slots, "icon", {}, void 0, true)]), _: 3 })) : To("", true), Ea("span", Hn, La(a.label), 1), c.value ? (Gt(), Mo(Kt(Pa), { key: 1, class: "md-button__progress-indicator", progress: Kt(Aa)(a.loading) ? a.loading : void 0 }, null, 8, ["progress"])) : To("", true)], 40, Wn));
} }), nr = Ia(Dt, [["__scopeId", "data-v-9c83e922"]]);
Dt.__docgenInfo = Object.assign({ displayName: Dt.name ?? Dt.__name }, { exportName: "default", displayName: "MDButton", type: 1, props: [{ name: "nativeType", global: false, description: "Native button type. Defaults to `button` to avoid accidental form submission.", tags: [], required: false, type: '"button" | "submit" | "reset" | undefined', declarations: [], schema: { kind: "enum", type: '"button" | "submit" | "reset" | undefined', schema: ["undefined", '"button"', '"submit"', '"reset"'] }, default: '"button"' }, { name: "color", global: false, description: "Material Button appearance.", tags: [], required: false, type: '"filled" | "elevated" | "outlined" | "tonal" | "text" | undefined', declarations: [], schema: { kind: "enum", type: '"filled" | "elevated" | "outlined" | "tonal" | "text" | undefined', schema: ["undefined", '"filled"', '"elevated"', '"outlined"', '"tonal"', '"text"'] }, default: '"filled"' }, { name: "label", global: false, description: "Visible label and accessible name.", tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "disabled", global: false, description: "Blocks focus and activation through the renderer's documented disabled contract.", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "loading", global: false, description: "Shows an indeterminate or determinate progress indicator while preserving activation.", tags: [], required: false, type: "number | boolean | undefined", declarations: [], schema: { kind: "enum", type: "number | boolean | undefined", schema: ["undefined", "number", "false", "true"] } }, { name: "variant", global: false, description: "Stateless action or consumer-controlled toggle intent.", tags: [], required: false, type: '"default" | "toggle" | undefined', declarations: [], schema: { kind: "enum", type: '"default" | "toggle" | undefined', schema: ["undefined", '"default"', '"toggle"'] }, default: '"default"' }, { name: "size", global: false, description: "Material Button size.", tags: [], required: false, type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', declarations: [], schema: { kind: "enum", type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', schema: ["undefined", '"small"', '"extra-small"', '"medium"', '"large"', '"extra-large"'] }, default: '"small"' }, { name: "shape", global: false, description: "Round or square container shape.", tags: [], required: false, type: '"round" | "square" | undefined', declarations: [], schema: { kind: "enum", type: '"round" | "square" | undefined', schema: ["undefined", '"round"', '"square"'] }, default: '"round"' }, { name: "selected", global: false, description: "Consumer-controlled toggle selection. Ignored for default and text buttons.", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "key", global: true, description: "", tags: [], required: false, type: "PropertyKey", declarations: [], schema: { kind: "enum", type: "PropertyKey", schema: ["string", "number", "symbol"] } }, { name: "ref", global: true, description: "", tags: [], required: false, type: "VNodeRef", declarations: [], schema: { kind: "enum", type: "VNodeRef", schema: ["string", "Ref<any, any>", { kind: "event", type: "(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void" }] } }, { name: "ref_for", global: true, description: "", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "ref_key", global: true, description: "", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "class", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "style", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "tabindex", global: true, description: "", tags: [], required: false, type: "string | number", declarations: [], schema: { kind: "enum", type: "string | number", schema: ["string", "number"] } }, { name: "aria-activedescendant", global: true, description: "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-atomic", global: true, description: "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-autocomplete", global: true, description: `Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`, tags: [], required: false, type: '"none" | "inline" | "list" | "both" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "inline" | "list" | "both" | undefined', schema: ["undefined", '"none"', '"inline"', '"list"', '"both"'] } }, { name: "aria-busy", global: true, description: "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-checked", global: true, description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.', tags: [{ name: "see", text: "aria-pressed" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-colcount", global: true, description: "Defines the total number of columns in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colindex", global: true, description: "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colcount" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colspan", global: true, description: "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-controls", global: true, description: "Identifies the element (or elements) whose contents or presence are controlled by the current element.", tags: [{ name: "see", text: "aria-owns." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-current", global: true, description: "Indicates the element that represents the current item within a container or set of related elements.", tags: [], required: false, type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"page"', '"step"', '"location"', '"date"', '"time"'] } }, { name: "aria-describedby", global: true, description: "Identifies the element (or elements) that describes the object.", tags: [{ name: "see", text: "aria-labelledby" }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-details", global: true, description: "Identifies the element that provides a detailed, extended description for the object.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-disabled", global: true, description: "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.", tags: [{ name: "see", text: "aria-hidden" }, { name: "see", text: "aria-readonly." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-dropeffect", global: true, description: "Indicates what functions can be performed when a dragged object is released on the drop target.", tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: '"none" | "link" | "copy" | "execute" | "move" | "popup" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "link" | "copy" | "execute" | "move" | "popup" | undefined', schema: ["undefined", '"none"', '"link"', '"copy"', '"execute"', '"move"', '"popup"'] } }, { name: "aria-errormessage", global: true, description: "Identifies the element that provides an error message for the object.", tags: [{ name: "see", text: "aria-invalid" }, { name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-expanded", global: true, description: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-flowto", global: true, description: `Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-grabbed", global: true, description: `Indicates an element's "grabbed" state in a drag-and-drop operation.`, tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-haspopup", global: true, description: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", tags: [], required: false, type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"menu"', '"listbox"', '"tree"', '"grid"', '"dialog"'] } }, { name: "aria-hidden", global: true, description: "Indicates whether the element is exposed to an accessibility API.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-invalid", global: true, description: "Indicates the entered value does not conform to the format expected by the application.", tags: [{ name: "see", text: "aria-errormessage." }], required: false, type: 'Booleanish | "grammar" | "spelling" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "grammar" | "spelling" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"grammar"', '"spelling"'] } }, { name: "aria-keyshortcuts", global: true, description: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-label", global: true, description: "Defines a string value that labels the current element.", tags: [{ name: "see", text: "aria-labelledby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-labelledby", global: true, description: "Identifies the element (or elements) that labels the current element.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-level", global: true, description: "Defines the hierarchical level of an element within a structure.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-live", global: true, description: "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", tags: [], required: false, type: '"off" | "assertive" | "polite" | undefined', declarations: [], schema: { kind: "enum", type: '"off" | "assertive" | "polite" | undefined', schema: ["undefined", '"off"', '"assertive"', '"polite"'] } }, { name: "aria-modal", global: true, description: "Indicates whether an element is modal when displayed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiline", global: true, description: "Indicates whether a text box accepts multiple lines of input or only a single line.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiselectable", global: true, description: "Indicates that the user may select more than one item from the current selectable descendants.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-orientation", global: true, description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", tags: [], required: false, type: '"horizontal" | "vertical" | undefined', declarations: [], schema: { kind: "enum", type: '"horizontal" | "vertical" | undefined', schema: ["undefined", '"horizontal"', '"vertical"'] } }, { name: "aria-owns", global: true, description: `Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.`, tags: [{ name: "see", text: "aria-controls." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-placeholder", global: true, description: `Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-posinset", global: true, description: "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-setsize." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-pressed", global: true, description: 'Indicates the current "pressed" state of toggle buttons.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-readonly", global: true, description: "Indicates that the element is not editable, but is otherwise operable.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-relevant", global: true, description: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.", tags: [{ name: "see", text: "aria-atomic." }], required: false, type: '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined', declarations: [], schema: { kind: "enum", type: '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined', schema: ["undefined", '"text"', '"additions"', '"additions removals"', '"additions text"', '"all"', '"removals"', '"removals additions"', '"removals text"', '"text additions"', '"text removals"'] } }, { name: "aria-required", global: true, description: "Indicates that user input is required on the element before a form may be submitted.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-roledescription", global: true, description: "Defines a human-readable, author-localized description for the role of an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-rowcount", global: true, description: "Defines the total number of rows in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowindex", global: true, description: "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowcount" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowspan", global: true, description: "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-selected", global: true, description: 'Indicates the current "selected" state of various widgets.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-pressed." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-setsize", global: true, description: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-posinset." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-sort", global: true, description: "Indicates if items in a table or grid are sorted in ascending or descending order.", tags: [], required: false, type: '"none" | "ascending" | "descending" | "other" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "ascending" | "descending" | "other" | undefined', schema: ["undefined", '"none"', '"ascending"', '"descending"', '"other"'] } }, { name: "aria-valuemax", global: true, description: "Defines the maximum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuemin", global: true, description: "Defines the minimum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuenow", global: true, description: "Defines the current value for a range widget.", tags: [{ name: "see", text: "aria-valuetext." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuetext", global: true, description: "Defines the human readable text alternative of aria-valuenow for a range widget.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: false, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }], events: [{ name: "click", description: "Stable action event normalized from the renderer host click.", tags: [], type: "[event: MouseEvent]", signature: '(event: "click", event: MouseEvent): void', declarations: [], schema: [{ kind: "object", type: "MouseEvent" }] }, { name: "update:selected", description: "Controlled toggle intent; the parent remains the selected-state owner.", tags: [], type: "[selected: boolean]", signature: '(event: "update:selected", selected: boolean): void', declarations: [], schema: [{ kind: "enum", type: "boolean", schema: ["false", "true"] }] }], slots: [{ name: "icon", type: "any", description: "Leading icon content.", declarations: [], schema: "any" }], exposed: [{ name: "$slots", type: "Readonly<InternalSlots> & __VLS_Slots", description: "", declarations: [], schema: { kind: "object", type: "Readonly<InternalSlots> & __VLS_Slots" } }, { name: "nativeType", type: '"button" | "submit" | "reset" | undefined', description: "Native button type. Defaults to `button` to avoid accidental form submission.", declarations: [], schema: { kind: "enum", type: '"button" | "submit" | "reset" | undefined', schema: ["undefined", '"button"', '"submit"', '"reset"'] } }, { name: "variant", type: '"default" | "toggle" | undefined', description: "Stateless action or consumer-controlled toggle intent.", declarations: [], schema: { kind: "enum", type: '"default" | "toggle" | undefined', schema: ["undefined", '"default"', '"toggle"'] } }, { name: "color", type: '"filled" | "elevated" | "outlined" | "tonal" | "text" | undefined', description: "Material Button appearance.", declarations: [], schema: { kind: "enum", type: '"filled" | "elevated" | "outlined" | "tonal" | "text" | undefined', schema: ["undefined", '"filled"', '"elevated"', '"outlined"', '"tonal"', '"text"'] } }, { name: "size", type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', description: "Material Button size.", declarations: [], schema: { kind: "enum", type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', schema: ["undefined", '"small"', '"extra-small"', '"medium"', '"large"', '"extra-large"'] } }, { name: "shape", type: '"round" | "square" | undefined', description: "Round or square container shape.", declarations: [], schema: { kind: "enum", type: '"round" | "square" | undefined', schema: ["undefined", '"round"', '"square"'] } }, { name: "disabled", type: "boolean | undefined", description: "Blocks focus and activation through the renderer's documented disabled contract.", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "label", type: "string", description: "Visible label and accessible name.", declarations: [], schema: "string" }, { name: "loading", type: "number | boolean | undefined", description: "Shows an indeterminate or determinate progress indicator while preserving activation.", declarations: [], schema: { kind: "enum", type: "number | boolean | undefined", schema: ["undefined", "number", "false", "true"] } }, { name: "selected", type: "boolean | undefined", description: "Consumer-controlled toggle selection. Ignored for default and text buttons.", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/material/components/button/MDButton.vue" });
export {
  nr as M
};
