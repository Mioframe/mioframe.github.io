import { d as To, E as La, c as Ma, g as zo, w as Ta, n as Ao, u as Gt, G as Po, a as za, t as Aa, S as Pa, A as Ia, l as U, z as Da, e as Xt } from "./iframe-Cs02imFl.js";
import { i as Ra } from "./isNumber-BeRyA-l4.js";
import { M as qa } from "./MDCircularProgressIndicator-3oJJhrSf.js";
import { _ as Wa } from "./_plugin-vue_export-helper-DlAUqK2U.js";
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
const ut = globalThis, yo = ut.ShadowRoot && (ut.ShadyCSS === void 0 || ut.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, xo = /* @__PURE__ */ Symbol(), Io = /* @__PURE__ */ new WeakMap();
let Go = class {
  constructor(t, a, r) {
    if (this._$cssResult$ = true, r !== xo) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = a;
  }
  get styleSheet() {
    let t = this.o;
    const a = this.t;
    if (yo && t === void 0) {
      const r = a !== void 0 && a.length === 1;
      r && (t = Io.get(a)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Io.set(a, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const e = (o2) => new Go(typeof o2 == "string" ? o2 : o2 + "", void 0, xo), L = (o2, ...t) => {
  const a = o2.length === 1 ? o2[0] : t.reduce((r, l, i) => r + ((c) => {
    if (c._$cssResult$ === true) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(l) + o2[i + 1], o2[0]);
  return new Go(a, o2, xo);
}, Ha = (o2, t) => {
  if (yo) o2.adoptedStyleSheets = t.map((a) => a instanceof CSSStyleSheet ? a : a.styleSheet);
  else for (const a of t) {
    const r = document.createElement("style"), l = ut.litNonce;
    l !== void 0 && r.setAttribute("nonce", l), r.textContent = a.cssText, o2.appendChild(r);
  }
}, Do = yo ? (o2) => o2 : (o2) => o2 instanceof CSSStyleSheet ? ((t) => {
  let a = "";
  for (const r of t.cssRules) a += r.cssText;
  return e(a);
})(o2) : o2;
const { is: Ba, defineProperty: Oa, getOwnPropertyDescriptor: Fa, getOwnPropertyNames: Na, getOwnPropertySymbols: Va, getPrototypeOf: Ua } = Object, Nt = globalThis, Ro = Nt.trustedTypes, ja = Ro ? Ro.emptyScript : "", Ka = Nt.reactiveElementPolyfillSupport, je = (o2, t) => o2, qt = { toAttribute(o2, t) {
  switch (t) {
    case Boolean:
      o2 = o2 ? ja : null;
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
} }, $o = (o2, t) => !Ba(o2, t), qo = { attribute: true, type: String, converter: qt, reflect: false, useDefault: false, hasChanged: $o };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), Nt.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let ye = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, a = qo) {
    if (a.state && (a.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t) && ((a = Object.create(a)).wrapped = true), this.elementProperties.set(t, a), !a.noAccessor) {
      const r = /* @__PURE__ */ Symbol(), l = this.getPropertyDescriptor(t, r, a);
      l !== void 0 && Oa(this.prototype, t, l);
    }
  }
  static getPropertyDescriptor(t, a, r) {
    const { get: l, set: i } = Fa(this.prototype, t) ?? { get() {
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
    return this.elementProperties.get(t) ?? qo;
  }
  static _$Ei() {
    if (this.hasOwnProperty(je("elementProperties"))) return;
    const t = Ua(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(je("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(je("properties"))) {
      const a = this.properties, r = [...Na(a), ...Va(a)];
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
      for (const l of r) a.unshift(Do(l));
    } else t !== void 0 && a.push(Do(t));
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
    return Ha(t, this.constructor.elementStyles), t;
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
      const i = (r.converter?.toAttribute !== void 0 ? r.converter : qt).toAttribute(a, r.type);
      this._$Em = t, i == null ? this.removeAttribute(l) : this.setAttribute(l, i), this._$Em = null;
    }
  }
  _$AK(t, a) {
    const r = this.constructor, l = r._$Eh.get(t);
    if (l !== void 0 && this._$Em !== l) {
      const i = r.getPropertyOptions(l), c = typeof i.converter == "function" ? { fromAttribute: i.converter } : i.converter?.fromAttribute !== void 0 ? i.converter : qt;
      this._$Em = l;
      const h = c.fromAttribute(a, i.type);
      this[l] = h ?? this._$Ej?.get(l) ?? h, this._$Em = null;
    }
  }
  requestUpdate(t, a, r, l = false, i) {
    if (t !== void 0) {
      const c = this.constructor;
      if (l === false && (i = this[t]), r ??= c.getPropertyOptions(t), !((r.hasChanged ?? $o)(i, a) || r.useDefault && r.reflect && i === this._$Ej?.get(t) && !this.hasAttribute(c._$Eu(t, r)))) return;
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
ye.elementStyles = [], ye.shadowRootOptions = { mode: "open" }, ye[je("elementProperties")] = /* @__PURE__ */ new Map(), ye[je("finalized")] = /* @__PURE__ */ new Map(), Ka?.({ ReactiveElement: ye }), (Nt.reactiveElementVersions ??= []).push("2.1.2");
const _o = globalThis, Wo = (o2) => o2, Wt = _o.trustedTypes, Ho = Wt ? Wt.createPolicy("lit-html", { createHTML: (o2) => o2 }) : void 0, Xo = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, Yo = "?" + j, Ga = `<${Yo}>`, de = document, Qe = () => de.createComment(""), et = (o2) => o2 === null || typeof o2 != "object" && typeof o2 != "function", ko = Array.isArray, Xa = (o2) => ko(o2) || typeof o2?.[Symbol.iterator] == "function", Yt = `[ 	
\f\r]`, Pe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Bo = /-->/g, Oo = />/g, Y = RegExp(`>|${Yt}(?:([^\\s"'>=/]+)(${Yt}*=${Yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Fo = /'/g, No = /"/g, Zo = /^(?:script|style|textarea|title)$/i, Ya = (o2) => (t, ...a) => ({ _$litType$: o2, strings: t, values: a }), S = Ya(1), Se = /* @__PURE__ */ Symbol.for("lit-noChange"), $ = /* @__PURE__ */ Symbol.for("lit-nothing"), Vo = /* @__PURE__ */ new WeakMap(), re = de.createTreeWalker(de, 129);
function Jo(o2, t) {
  if (!ko(o2) || !o2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ho !== void 0 ? Ho.createHTML(t) : t;
}
const Za = (o2, t) => {
  const a = o2.length - 1, r = [];
  let l, i = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", c = Pe;
  for (let h = 0; h < a; h++) {
    const u = o2[h];
    let b, f, v = -1, D = 0;
    for (; D < u.length && (c.lastIndex = D, f = c.exec(u), f !== null); ) D = c.lastIndex, c === Pe ? f[1] === "!--" ? c = Bo : f[1] !== void 0 ? c = Oo : f[2] !== void 0 ? (Zo.test(f[2]) && (l = RegExp("</" + f[2], "g")), c = Y) : f[3] !== void 0 && (c = Y) : c === Y ? f[0] === ">" ? (c = l ?? Pe, v = -1) : f[1] === void 0 ? v = -2 : (v = c.lastIndex - f[2].length, b = f[1], c = f[3] === void 0 ? Y : f[3] === '"' ? No : Fo) : c === No || c === Fo ? c = Y : c === Bo || c === Oo ? c = Pe : (c = Y, l = void 0);
    const W = c === Y && o2[h + 1].startsWith("/>") ? " " : "";
    i += c === Pe ? u + Ga : v >= 0 ? (r.push(b), u.slice(0, v) + Xo + u.slice(v) + j + W) : u + j + (v === -2 ? h : W);
  }
  return [Jo(o2, i + (o2[a] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class tt {
  constructor({ strings: t, _$litType$: a }, r) {
    let l;
    this.parts = [];
    let i = 0, c = 0;
    const h = t.length - 1, u = this.parts, [b, f] = Za(t, a);
    if (this.el = tt.createElement(b, r), re.currentNode = this.el.content, a === 2 || a === 3) {
      const v = this.el.content.firstChild;
      v.replaceWith(...v.childNodes);
    }
    for (; (l = re.nextNode()) !== null && u.length < h; ) {
      if (l.nodeType === 1) {
        if (l.hasAttributes()) for (const v of l.getAttributeNames()) if (v.endsWith(Xo)) {
          const D = f[c++], W = l.getAttribute(v).split(j), pe = /([.?@])?(.*)/.exec(D);
          u.push({ type: 1, index: i, name: pe[2], strings: W, ctor: pe[1] === "." ? Qa : pe[1] === "?" ? en : pe[1] === "@" ? tn : Vt }), l.removeAttribute(v);
        } else v.startsWith(j) && (u.push({ type: 6, index: i }), l.removeAttribute(v));
        if (Zo.test(l.tagName)) {
          const v = l.textContent.split(j), D = v.length - 1;
          if (D > 0) {
            l.textContent = Wt ? Wt.emptyScript : "";
            for (let W = 0; W < D; W++) l.append(v[W], Qe()), re.nextNode(), u.push({ type: 2, index: ++i });
            l.append(v[D], Qe());
          }
        }
      } else if (l.nodeType === 8) if (l.data === Yo) u.push({ type: 2, index: i });
      else {
        let v = -1;
        for (; (v = l.data.indexOf(j, v + 1)) !== -1; ) u.push({ type: 7, index: i }), v += j.length - 1;
      }
      i++;
    }
  }
  static createElement(t, a) {
    const r = de.createElement("template");
    return r.innerHTML = t, r;
  }
}
function Ee(o2, t, a = o2, r) {
  if (t === Se) return t;
  let l = r !== void 0 ? a._$Co?.[r] : a._$Cl;
  const i = et(t) ? void 0 : t._$litDirective$;
  return l?.constructor !== i && (l?._$AO?.(false), i === void 0 ? l = void 0 : (l = new i(o2), l._$AT(o2, a, r)), r !== void 0 ? (a._$Co ??= [])[r] = l : a._$Cl = l), l !== void 0 && (t = Ee(o2, l._$AS(o2, t.values), l, r)), t;
}
class Ja {
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
        u.type === 2 ? b = new st(i, i.nextSibling, this, t) : u.type === 1 ? b = new u.ctor(i, u.name, u.strings, this, t) : u.type === 6 && (b = new on(i, this, t)), this._$AV.push(b), u = r[++h];
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
class st {
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
    t = Ee(this, t, a), et(t) ? t === $ || t == null || t === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : t !== this._$AH && t !== Se && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Xa(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== $ && et(this._$AH) ? this._$AA.nextSibling.data = t : this.T(de.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: a, _$litType$: r } = t, l = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = tt.createElement(Jo(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === l) this._$AH.p(a);
    else {
      const i = new Ja(l, this), c = i.u(this.options);
      i.p(a), this.T(c), this._$AH = i;
    }
  }
  _$AC(t) {
    let a = Vo.get(t.strings);
    return a === void 0 && Vo.set(t.strings, a = new tt(t)), a;
  }
  k(t) {
    ko(this._$AH) || (this._$AH = [], this._$AR());
    const a = this._$AH;
    let r, l = 0;
    for (const i of t) l === a.length ? a.push(r = new st(this.O(Qe()), this.O(Qe()), this, this.options)) : r = a[l], r._$AI(i), l++;
    l < a.length && (this._$AR(r && r._$AB.nextSibling, l), a.length = l);
  }
  _$AR(t = this._$AA.nextSibling, a) {
    for (this._$AP?.(false, true, a); t !== this._$AB; ) {
      const r = Wo(t).nextSibling;
      Wo(t).remove(), t = r;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class Vt {
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
    if (i === void 0) t = Ee(this, t, a, 0), c = !et(t) || t !== this._$AH && t !== Se, c && (this._$AH = t);
    else {
      const h = t;
      let u, b;
      for (t = i[0], u = 0; u < i.length - 1; u++) b = Ee(this, h[r + u], a, u), b === Se && (b = this._$AH[u]), c ||= !et(b) || b !== this._$AH[u], b === $ ? t = $ : t !== $ && (t += (b ?? "") + i[u + 1]), this._$AH[u] = b;
    }
    c && !l && this.j(t);
  }
  j(t) {
    t === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Qa extends Vt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === $ ? void 0 : t;
  }
}
class en extends Vt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== $);
  }
}
class tn extends Vt {
  constructor(t, a, r, l, i) {
    super(t, a, r, l, i), this.type = 5;
  }
  _$AI(t, a = this) {
    if ((t = Ee(this, t, a, 0) ?? $) === Se) return;
    const r = this._$AH, l = t === $ && r !== $ || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, i = t !== $ && (r === $ || l);
    l && this.element.removeEventListener(this.name, this, r), i && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class on {
  constructor(t, a, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = a, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Ee(this, t);
  }
}
const an = _o.litHtmlPolyfillSupport;
an?.(tt, st), (_o.litHtmlVersions ??= []).push("3.3.3");
const nn = (o2, t, a) => {
  const r = a?.renderBefore ?? t;
  let l = r._$litPart$;
  if (l === void 0) {
    const i = a?.renderBefore ?? null;
    r._$litPart$ = l = new st(t.insertBefore(Qe(), i), i, void 0, a ?? {});
  }
  return l._$AI(o2), l;
};
const Co = globalThis;
class E extends ye {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const a = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = nn(a, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return Se;
  }
}
E._$litElement$ = true, E.finalized = true, Co.litElementHydrateSupport?.({ LitElement: E });
const rn = Co.litElementPolyfillSupport;
rn?.({ LitElement: E });
(Co.litElementVersions ??= []).push("4.2.2");
const sn = { attribute: true, type: String, converter: qt, reflect: false, hasChanged: $o }, ln = (o2 = sn, t, a) => {
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
  return (t, a) => typeof a == "object" ? ln(o2, t, a) : ((r, l, i) => {
    const c = l.hasOwnProperty(i);
    return l.constructor.createProperty(i, r), c ? Object.getOwnPropertyDescriptor(l, i) : void 0;
  })(o2, t, a);
}
const cn = (o2, t, a) => (a.configurable = true, a.enumerable = true, Reflect.decorate && typeof t != "object" && Object.defineProperty(o2, t, a), a);
function X(o2, t) {
  return (a, r, l) => {
    const i = (c) => c.renderRoot?.querySelector(o2) ?? null;
    return cn(a, r, { get() {
      return i(this);
    } });
  };
}
const Zt = (o2) => o2 ?? $;
var qe, We, H;
class lt {
  constructor(t, a) {
    qe.set(this, void 0), We.set(this, void 0), H.set(this, /* @__PURE__ */ new Set()), y(this, qe, t, "f"), y(this, We, a.target, "f"), s(this, qe, "f").addController(this);
  }
  get targets() {
    return s(this, H, "f").values();
  }
  get hasTargets() {
    return s(this, H, "f").size > 0;
  }
  hostConnected() {
    s(this, We, "f") !== null && this.observe(s(this, We, "f") ?? s(this, qe, "f"));
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
qe = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap();
function dn() {
  return matchMedia("(forced-colors: active)").matches;
}
function un(o2) {
  return o2.assignedNodes({ flatten: true }).length > 0;
}
function ht() {
  return matchMedia("(prefers-reduced-motion)").matches;
}
function hn(o2, t = document) {
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
var ke, se, we, Ke, Ce, mt, pt, bt, vt, xe, Ht, Qo, ro, ea;
class it extends lt {
  constructor(t, a) {
    super(t, a), ke.add(this), we.set(this, false), Ke.set(this, void 0), Ce.set(this, void 0), mt.set(this, (r) => s(this, ke, "m", Qo).call(this, r)), pt.set(this, (r) => s(this, ke, "m", ro).call(this, r)), bt.set(this, (r) => s(this, ke, "m", ea).call(this, r)), vt.set(this, () => y(this, we, true, "f")), xe.set(this, () => y(this, we, false, "f")), y(this, Ke, a.callback, "f"), y(this, Ce, a.filter, "f");
  }
  _observe(t) {
    t.addEventListener("keydown", s(this, mt, "f")), t.addEventListener("focusin", s(this, pt, "f")), t.addEventListener("focusout", s(this, bt, "f")), t.addEventListener("touchstart", s(this, vt, "f"), { passive: true }), t.addEventListener("touchend", s(this, xe, "f")), t.addEventListener("touchcancel", s(this, xe, "f"));
  }
  _unobserve(t) {
    t.removeEventListener("keydown", s(this, mt, "f")), t.removeEventListener("focusin", s(this, pt, "f")), t.removeEventListener("focusout", s(this, bt, "f")), t.removeEventListener("touchstart", s(this, vt, "f")), t.removeEventListener("touchend", s(this, xe, "f")), t.removeEventListener("touchcancel", s(this, xe, "f"));
  }
}
se = it, we = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakSet(), Qo = function(t) {
  if (s(this, Ce, "f")?.call(this, t)) return;
  t.currentTarget.matches(":focus-within") && s(this, ke, "m", ro).call(this, t);
}, ro = function(t) {
  if (s(this, Ce, "f")?.call(this, t) || s(this, we, "f")) return;
  const a = t.currentTarget;
  s(this, Ke, "f").call(this, true, a.matches(":focus-visible") || s(se, se, "f", Ht) || dn(), a);
}, ea = function(t) {
  s(this, Ce, "f")?.call(this, t) || s(this, we, "f") || s(this, Ke, "f").call(this, false, false, t.currentTarget);
};
typeof window < "u" && (window.addEventListener("keydown", () => y(se, se, true, "f", Ht), { capture: true, passive: true }), window.addEventListener("pointerdown", () => y(se, se, false, "f", Ht), { capture: true }));
Ht = { value: false };
var P, ne, J, Q, ft, $e, so, ct, dt, ta, oa;
class aa extends lt {
  constructor(t, a) {
    super(t, a), P.add(this), ne.set(this, void 0), J.set(this, /* @__PURE__ */ new Map()), Q.set(this, /* @__PURE__ */ new Map()), ft.set(this, (r) => s(this, P, "m", ta).call(this, r)), $e.set(this, (r) => s(this, P, "m", oa).call(this, r)), y(this, ne, a.callback, "f"), this.startDelay = a.startDelay ?? 0, this.endDelay = a.endDelay ?? 0;
  }
  clearDelays() {
    for (const t of this.targets) s(this, P, "m", so).call(this, t);
  }
  _observe(t) {
    t.addEventListener("pointerenter", s(this, ft, "f")), t.addEventListener("pointerleave", s(this, $e, "f")), t.addEventListener("touchend", s(this, $e, "f"));
  }
  _unobserve(t) {
    t.removeEventListener("pointerenter", s(this, ft, "f")), t.removeEventListener("pointerleave", s(this, $e, "f")), t.removeEventListener("touchend", s(this, $e, "f")), s(this, P, "m", so).call(this, t);
  }
}
ne = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakSet(), so = function(t) {
  s(this, P, "m", ct).call(this, t), s(this, P, "m", dt).call(this, t);
}, ct = function(t) {
  return s(this, J, "f").has(t) ? (clearTimeout(s(this, J, "f").get(t)), s(this, J, "f").delete(t)) : false;
}, dt = function(t) {
  return s(this, Q, "f").has(t) ? (clearTimeout(s(this, Q, "f").get(t)), s(this, Q, "f").delete(t)) : false;
}, ta = function(t) {
  const a = t.target;
  s(this, P, "m", dt).call(this, a), this.startDelay > 0 ? (s(this, P, "m", ct).call(this, a), s(this, J, "f").set(a, setTimeout(() => {
    s(this, J, "f").delete(a), s(this, ne, "f").call(this, true, a);
  }, this.startDelay))) : s(this, ne, "f").call(this, true, a);
}, oa = function(t) {
  const a = t.target;
  s(this, P, "m", ct).call(this, a) || (this.endDelay > 0 ? (s(this, P, "m", dt).call(this, a), s(this, Q, "f").set(a, setTimeout(() => {
    s(this, Q, "f").delete(a), s(this, ne, "f").call(this, false, a);
  }, this.endDelay))) : s(this, ne, "f").call(this, false, a));
};
var F, M, O, Ge, le, T, Xe, gt, yt, _e, xt, $t, na, ra, sa, la, ia, Jt;
class wo extends lt {
  constructor(t, a) {
    super(t, a), F.add(this), M.set(this, void 0), O.set(this, void 0), Ge.set(this, void 0), le.set(this, void 0), T.set(this, /* @__PURE__ */ new Map()), Xe.set(this, void 0), gt.set(this, (r) => s(this, F, "m", na).call(this, r)), yt.set(this, (r) => s(this, F, "m", ra).call(this, r)), _e.set(this, (r) => s(this, F, "m", sa).call(this, r)), xt.set(this, (r) => s(this, F, "m", la).call(this, r)), $t.set(this, (r) => s(this, F, "m", ia).call(this, r)), y(this, M, a.capture, "f"), y(this, O, a.callback, "f"), y(this, Ge, a.filter, "f"), y(this, le, a.isPressedKey, "f"), y(this, Xe, a.minPressedDuration ?? 0, "f");
  }
  hostConnected() {
    document.addEventListener("pointerup", s(this, yt, "f"), { capture: s(this, M, "f") }), document.addEventListener("touchend", s(this, _e, "f"), { capture: s(this, M, "f") }), document.addEventListener("touchcancel", s(this, _e, "f"), { capture: s(this, M, "f") }), super.hostConnected();
  }
  hostDisconnected() {
    document.removeEventListener("pointerup", s(this, yt, "f"), { capture: s(this, M, "f") }), document.removeEventListener("touchend", s(this, _e, "f"), { capture: s(this, M, "f") }), document.removeEventListener("touchcancel", s(this, _e, "f"), { capture: s(this, M, "f") }), super.hostDisconnected(), s(this, T, "f").clear();
  }
  _observe(t) {
    t.addEventListener("pointerdown", s(this, gt, "f"), { capture: s(this, M, "f") }), s(this, le, "f") && (t.addEventListener("keydown", s(this, xt, "f"), { capture: s(this, M, "f") }), t.addEventListener("keyup", s(this, $t, "f"), { capture: s(this, M, "f") }));
  }
  _unobserve(t) {
    t.removeEventListener("pointerdown", s(this, gt, "f"), { capture: s(this, M, "f") }), s(this, le, "f") && (t.removeEventListener("keydown", s(this, xt, "f"), { capture: s(this, M, "f") }), t.removeEventListener("keyup", s(this, $t, "f"), { capture: s(this, M, "f") }));
  }
}
M = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakSet(), na = function(t) {
  if (!s(this, Ge, "f")?.call(this, t) && !(t.pointerType === "mouse" && t.button > 1)) {
    for (const a of t.composedPath()) if (a instanceof HTMLElement && this.isObserving(a)) {
      s(this, T, "f").has(a) || (s(this, T, "f").set(a, performance.now()), s(this, O, "f").call(this, true, { x: t.x, y: t.y }, a));
      break;
    }
  }
}, ra = function(t) {
  t.pointerType === "mouse" && t.button > 1 || s(this, F, "m", Jt).call(this, t.x, t.y);
}, sa = function(t) {
  s(this, F, "m", Jt).call(this, t.changedTouches[0]?.clientX ?? 0, t.changedTouches[0]?.clientY ?? 0);
}, la = function(t) {
  if (s(this, Ge, "f")?.call(this, t) || t.target !== t.currentTarget) return;
  const a = t.currentTarget;
  if (s(this, le, "f")?.call(this, t.key) && (t.key === " " && t.preventDefault(), !s(this, T, "f").has(a))) {
    s(this, T, "f").set(a, performance.now());
    const r = a.getBoundingClientRect();
    s(this, O, "f").call(this, true, { x: r.x + r.width / 2, y: r.y + r.height / 2 }, a);
  }
}, ia = function(t) {
  const a = t.target;
  if (s(this, T, "f").has(a) && s(this, le, "f")?.call(this, t.key)) {
    const r = s(this, Xe, "f") - (performance.now() - s(this, T, "f").get(a)), l = a.getBoundingClientRect();
    r > 0 ? setTimeout(() => {
      s(this, T, "f").delete(a), s(this, O, "f").call(this, false, { x: l.x + l.width / 2, y: l.y + l.height / 2 }, a);
    }, r) : (s(this, T, "f").delete(a), s(this, O, "f").call(this, false, { x: l.x + l.width / 2, y: l.y + l.height / 2 }, a));
  }
}, Jt = function(t, a) {
  for (const r of s(this, T, "f")) {
    const l = s(this, Xe, "f") - (performance.now() - r[1]);
    l > 0 ? setTimeout(() => {
      s(this, T, "f").delete(r[0]), s(this, O, "f").call(this, false, { x: t, y: a }, r[0]);
    }, l) : (s(this, T, "f").delete(r[0]), s(this, O, "f").call(this, false, { x: t, y: a }, r[0]));
  }
};
var He, _t, kt, ee, Be;
class mn extends lt {
  constructor(t, a) {
    if (super(t, a), He.set(this, void 0), _t.set(this, void 0), kt.set(this, void 0), ee.set(this, void 0), Be.set(this, true), y(this, He, a.callback, "f"), y(this, _t, a.skipInitial ?? false, "f"), y(this, kt, a.config, "f"), !window.ResizeObserver) {
      console.warn("ResizeController error: the browser does not support ResizeObserver.");
      return;
    }
    y(this, ee, new ResizeObserver((r, l) => s(this, He, "f").call(this, r, l)), "f");
  }
  async hostUpdated() {
    s(this, ee, "f") && !s(this, _t, "f") && s(this, Be, "f") && s(this, He, "f").call(this, [], s(this, ee, "f")), y(this, Be, false, "f");
  }
  _observe(t) {
    s(this, ee, "f")?.observe(t, s(this, kt, "f")), y(this, Be, true, "f");
  }
  _unobserve(t) {
    s(this, ee, "f")?.unobserve(t);
  }
}
He = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap();
const I = (o2) => (t, a) => {
  const r = () => {
    typeof window < "u" && !customElements.get(o2) && customElements.define(o2, t);
  };
  a ? a.addInitializer(r) : r();
};
function So(o2) {
  const t = /* @__PURE__ */ Symbol("_id");
  return (a, r, l) => {
    const i = l.value;
    return l.value = function(...c) {
      const h = this;
      clearTimeout(h[t]), h[t] = setTimeout(() => i.apply(this, c), o2);
    }, l;
  };
}
var ie, Bt, Ye, Ct, te, Uo, Qt, ca, da;
class pn extends lt {
  constructor(t, a) {
    super(t, a), ie.add(this), Bt.set(this, void 0), Ye.set(this, void 0), Ct.set(this, (r) => s(this, ie, "m", da).call(this, r)), te.set(this, /* @__PURE__ */ new Map()), y(this, Bt, a.debounce === true, "f"), y(this, Ye, a.callback, "f");
  }
  getScrollContainers(t) {
    return s(this, te, "f").get(t);
  }
  _observe(t) {
    const a = s(this, ie, "m", ca).call(this, t);
    if (a.length > 0) {
      s(this, te, "f").set(t, a);
      for (const r of a) (r === document.documentElement ? document : r).addEventListener("scroll", s(this, Ct, "f"), { passive: true });
    }
  }
  _unobserve(t) {
    if (s(this, te, "f").has(t)) {
      for (const a of s(this, te, "f").get(t)) (a === document.documentElement ? document : a).removeEventListener("scroll", s(this, Ct, "f"));
      s(this, te, "f").delete(t);
    }
  }
  _debounceCallback(t) {
    s(this, Ye, "f").call(this, t);
  }
}
Bt = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakSet(), Uo = function(t) {
  const a = t.shadowRoot;
  if (!a) return null;
  const r = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT);
  let l = r.currentNode;
  for (; l; ) {
    if (l instanceof Element && s(this, ie, "m", Qt).call(this, l)) return l;
    l = r.nextNode();
  }
  return null;
}, Qt = function(t) {
  const a = getComputedStyle(t);
  return /(auto|scroll)/.test(a.overflow + a.overflowY + a.overflowX);
}, ca = function(t) {
  const a = new Array(), r = s(this, ie, "m", Uo).call(this, t);
  r && a.push(r);
  let l = t;
  for (; l; ) s(this, ie, "m", Qt).call(this, l) && a.push(l), l = l.parentElement;
  return a;
}, da = function(t) {
  const a = t.target === document ? document.documentElement : t.target;
  s(this, Bt, "f") ? this._debounceCallback(a) : s(this, Ye, "f").call(this, a);
};
m([So(40)], pn.prototype, "_debounceCallback", null);
function ua(o2, ...t) {
  return typeof o2 == "object" && o2 !== null && t.every((a) => a in o2);
}
const K = /* @__PURE__ */ Symbol("internals"), jo = /* @__PURE__ */ Symbol("_internals"), ue = /* @__PURE__ */ Symbol("_customState");
function Ut(o2, t) {
  var a;
  class r extends o2 {
    constructor() {
      super(...arguments), this[a] = /* @__PURE__ */ new Set();
    }
    get [(a = ue, K)]() {
      return this[jo] ?? (this[jo] = this.attachInternals());
    }
  }
  return r.formAssociated = t, r;
}
function Ot(o2, t) {
  return ue in o2 ? o2[ue].has(t) : o2[K].states.has(t);
}
function V(o2, t) {
  Ot(o2, t) || (ue in o2 && o2[ue].add(t), o2[K]?.states.add(t), o2[K]?.states.has(t));
}
function k(o2, t) {
  return ue in o2 && o2[ue].delete(t), o2[K]?.states.delete(t) ? (o2[K]?.states.has(t), true) : false;
}
function ot(o2, t, a) {
  a ? V(o2, t) : k(o2, t);
}
function ha(o2) {
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
function bn(o2) {
  class t extends ha(o2) {
    constructor() {
      super(...arguments), this.indeterminate = false;
    }
    update(r) {
      super.update(r), r.has("indeterminate") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = !this.checked && this.indeterminate ? "mixed" : `${this.checked}`);
    }
  }
  return m([g({ type: Boolean, reflect: true })], t.prototype, "indeterminate", void 0), t;
}
const jt = { primary: e("var(--md-sys-color-primary, #6750A4)"), onPrimary: e("var(--md-sys-color-on-primary, #FFFFFF)"), primaryContainer: e("var(--md-sys-color-primary-container, #EADDFF)"), onPrimaryContainer: e("var(--md-sys-color-on-primary-container, #4F378B)"), primaryFixed: e("var(--md-sys-color-primary-fixed, #EADDFF)"), primaryFixedDim: e("var(--md-sys-color-primary-fixed-dim, #D0BCFF)"), onPrimaryFixed: e("var(--md-sys-color-on-primary-fixed, #21005D)"), onPrimaryFixedVariant: e("var(--md-sys-color-on-primary-fixed-variant, #4F378B)"), secondary: e("var(--md-sys-color-secondary, #625B71)"), onSecondary: e("var(--md-sys-color-on-secondary, #FFFFFF)"), secondaryContainer: e("var(--md-sys-color-secondary-container, #E8DEF8)"), onSecondaryContainer: e("var(--md-sys-color-on-secondary-container, #4A4458)"), secondaryFixed: e("var(--md-sys-color-secondary-fixed, #E8DEF8)"), secondaryFixedDim: e("var(--md-sys-color-secondary-fixed-dim, #CCC2DC)"), onSecondaryFixed: e("var(--md-sys-color-on-secondary-fixed, #1D192B)"), onSecondaryFixedVariant: e("var(--md-sys-color-on-secondary-fixed-variant, #4A4458)"), tertiary: e("var(--md-sys-color-tertiary, #7D5260)"), onTertiary: e("var(--md-sys-color-on-tertiary, #FFFFFF)"), tertiaryContainer: e("var(--md-sys-color-tertiary-container, #FFD8E4)"), onTertiaryContainer: e("var(--md-sys-color-on-tertiary-container, #633B48)"), tertiaryFixed: e("var(--md-sys-color-tertiary-fixed, #FFD8E4)"), tertiaryFixedDim: e("var(--md-sys-color-tertiary-fixed-dim, #EFB8C8)"), onTertiaryFixed: e("var(--md-sys-color-on-tertiary-fixed, #31111D)"), onTertiaryFixedVariant: e("var(--md-sys-color-on-tertiary-fixed-variant, #633B48)"), error: e("var(--md-sys-color-error, #B3261E)"), onError: e("var(--md-sys-color-on-error, #FFFFFF)"), errorContainer: e("var(--md-sys-color-error-container, #F9DEDC)"), onErrorContainer: e("var(--md-sys-color-on-error-container, #8C1D18)"), surface: e("var(--md-sys-color-surface, #FEF7FF)"), onSurface: e("var(--md-sys-color-on-surface, #1D1B20)"), onSurfaceVariant: e("var(--md-sys-color-on-surface-variant, #49454F)"), surfaceContainerLowest: e("var(--md-sys-color-surface-container-lowest, #FFFFFF)"), surfaceContainerLow: e("var(--md-sys-color-surface-container-low, #F7F2FA)"), surfaceContainer: e("var(--md-sys-color-surface-container, #F3EDF7)"), surfaceContainerHigh: e("var(--md-sys-color-surface-container-high, #ECE6F0)"), surfaceContainerHighest: e("var(--md-sys-color-surface-container-highest, #E6E0E9)"), surfaceDim: e("var(--md-sys-color-surface-dim, #DED8E1)"), surfaceBright: e("var(--md-sys-color-surface-bright, #FEF7FF)"), surfaceVariant: e("var(--md-sys-color-surface-variant, #E7E0EC)"), inverseSurface: e("var(--md-sys-color-inverse-surface, #322F35)"), inverseOnSurface: e("var(--md-sys-color-inverse-on-surface, #F5EFF7)"), inversePrimary: e("var(--md-sys-color-inverse-primary, #D0BCFF)"), outline: e("var(--md-sys-color-outline, #79747E)"), outlineVariant: e("var(--md-sys-color-outline-variant, #CAC4D0)"), shadow: e("var(--md-sys-color-shadow, #000000)"), scrim: e("var(--md-sys-color-scrim, #000000)") }, eo = { scale: e("var(--md-sys-density-scale, 0)"), size: e("var(--md-sys-density-size, 0.25rem)") }, vn = { ...eo, calc(o2) {
  return e(`calc(max(${o2}, ${eo.scale}) * ${eo.size})`);
} }, fn = `color-mix(in srgb, var(--m3e-elevation-color, ${jt.shadow}) 20%, transparent)`, gn = ["0px 0px 0px 0px", "0px 2px 1px -1px", "0px 3px 1px -2px", "0px 3px 3px -2px", "0px 2px 4px -1px", "0px 3px 5px -1px", "0px 3px 5px -1px", "0px 4px 5px -2px", "0px 5px 5px -3px", "0px 5px 6px -3px", "0px 6px 6px -3px", "0px 6px 7px -4px", "0px 7px 8px -4px", "0px 7px 8px -4px", "0px 7px 9px -4px", "0px 8px 9px -5px", "0px 8px 10px -5px", "0px 8px 11px -5px", "0px 9px 11px -5px", "0px 9px 12px -6px", "0px 10px 13px -6px", "0px 10px 13px -6px", "0px 10px 14px -6px", "0px 11px 14px -7px", "0px 11px 15px -7px"], yn = `color-mix(in srgb, var(--m3e-elevation-color, ${jt.shadow}) 14%, transparent)`, xn = ["0px 0px 0px 0px", "0px 1px 1px 0px", "0px 2px 2px 0px", "0px 3px 4px 0px", "0px 4px 5px 0px", "0px 5px 8px 0px", "0px 6px 10px 0px", "0px 7px 10px 1px", "0px 8px 10px 1px", "0px 9px 12px 1px", "0px 10px 14px 1px", "0px 11px 15px 1px", "0px 12px 17px 2px", "0px 13px 19px 2px", "0px 14px 21px 2px", "0px 15px 22px 2px", "0px 16px 24px 2px", "0px 17px 26px 2px", "0px 18px 28px 2px", "0px 19px 29px 2px", "0px 20px 31px 3px", "0px 21px 33px 3px", "0px 22px 35px 3px", "0px 23px 36px 3px", "0px 24px 38px 3px"], $n = `color-mix(in srgb, var(--m3e-elevation-color, ${jt.shadow}) 12%, transparent)`, _n = ["0px 0px 0px 0px", "0px 1px 3px 0px", "0px 1px 5px 0px", "0px 1px 8px 0px", "0px 1px 10px 0px", "0px 1px 14px 0px", "0px 1px 18px 0px", "0px 2px 16px 1px", "0px 3px 14px 2px", "0px 3px 16px 2px", "0px 4px 18px 3px", "0px 4px 20px 3px", "0px 5px 22px 4px", "0px 5px 24px 4px", "0px 5px 26px 4px", "0px 6px 28px 5px", "0px 6px 30px 5px", "0px 6px 32px 5px", "0px 7px 34px 6px", "0px 7px 36px 6px", "0px 8px 38px 7px", "0px 8px 40px 7px", "0px 8px 42px 7px", "0px 9px 44px 8px", "0px 9px 46px 8px"];
function ve(o2) {
  return `${fn} ${gn[o2]},${yn} ${xn[o2]},${$n} ${_n[o2]}`;
}
const kn = { level0: e(`var(--md-sys-elevation-level0, ${ve(0)})`), level1: e(`var(--md-sys-elevation-level1, ${ve(1)})`), level2: e(`var(--md-sys-elevation-level2, ${ve(3)})`), level3: e(`var(--md-sys-elevation-level3, ${ve(6)})`), level4: e(`var(--md-sys-elevation-level4, ${ve(8)})`), level5: e(`var(--md-sys-elevation-level5, ${ve(12)})`) };
function C(o2) {
  return e(`var(--md-sys-measurement-space${o2}, ${0.5 * (o2 / 100)}rem)`);
}
C(0), C(25), C(50), C(75), C(100), C(125), C(150), C(175), C(200), C(250), C(300), C(400), C(450), C(500), C(600), C(700), C(800), C(900);
const Cn = { emphasized: e("var(--md-sys-motion-easing-emphasized, cubic-bezier(0.2, 0.0, 0, 1.0))"), emphasizedDecelerate: e("var(--md-sys-motion-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))"), emphasizedAccelerate: e("var(--md-sys-motion-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))"), standard: e("var(--md-sys-motion-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))"), standardDecelerate: e("var(--md-sys-motion-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))"), standardAccelerate: e("var(--md-sys-motion-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))") }, wn = { fastSpatial: e("var(--md-sys-motion-spring-fast-spatial, 350ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), defaultSpatial: e("var(--md-sys-motion-spring-default-spatial, 500ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), slowSpatial: e("var(--md-sys-motion-spring-slow-spatial, 750ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), fastEffects: e("var(--md-sys-motion-spring-fast-effects, 150ms cubic-bezier(0.31, 0.94, 0.34, 1.00))"), defaultEffects: e("var(--md-sys-motion-spring-default-effects, 200ms cubic-bezier(0.34, 0.80, 0.34, 1.00))"), slowEffects: e("var(--md-sys-motion-spring-slow-effects, 200ms cubic-bezier(0.34, 0.88, 0.34, 1.00))") }, Sn = { short1: e("var(--md-sys-motion-duration-short-1, 50ms)"), short2: e("var(--md-sys-motion-duration-short-2, 100ms)"), short3: e("var(--md-sys-motion-duration-short-3, 150ms)"), short4: e("var(--md-sys-motion-duration-short-4, 200ms)"), medium1: e("var(--md-sys-motion-duration-medium-1, 250ms)"), medium2: e("var(--md-sys-motion-duration-medium-2, 300ms)"), medium3: e("var(--md-sys-motion-duration-medium-3, 350ms)"), medium4: e("var(--md-sys-motion-duration-medium-4, 400ms)"), long1: e("var(--md-sys-motion-duration-long-1, 450ms)"), long2: e("var(--md-sys-motion-duration-long-2, 500ms)"), long3: e("var(--md-sys-motion-duration-long-3, 550ms)"), long4: e("var(--md-sys-motion-duration-long-4, 600ms)"), extraLong1: e("var(--md-sys-motion-duration-extra-long-1, 700ms)"), extraLong2: e("var(--md-sys-motion-duration-extra-long-2, 800ms)"), extraLong3: e("var(--md-sys-motion-duration-extra-long-3, 900ms)"), extraLong4: e("var(--md-sys-motion-duration-extra-long-4, 1000ms)") }, En = { easing: Cn, duration: Sn, spring: wn }, Ln = { width: e("var(--m3e-scrollbar-width, auto)"), thinWidth: e("var(--m3e-scrollbar-thin-width, thin)"), color: e("var(--m3e-scrollbar-thumb-color, #938f94) var(--m3e-scrollbar-track-color, transparent)") }, d = { none: e("var(--md-sys-shape-corner-value-none, 0)"), extraSmall: e("var(--md-sys-shape-corner-value-extra-small, 0.25rem)"), small: e("var(--md-sys-shape-corner-value-small, 0.5rem)"), medium: e("var(--md-sys-shape-corner-value-medium, 0.75rem)"), large: e("var(--md-sys-shape-corner-value-large, 1rem)"), largeIncreased: e("var(--md-sys-shape-corner-value-large-increased, 1.25rem)"), extraLarge: e("var(--md-sys-shape-corner-value-extra-large, 1.75rem)"), extraLargeIncreased: e("var(--md-sys-shape-corner-value-extra-large-increased, 2rem)"), extraExtraLarge: e("var(--md-sys-shape-corner-value-extra-extra-large, 3rem)") }, Mn = { corner: { full: e("var(--md-sys-shape-corner-full, 624.9375rem)"), extraLargeTop: e(`var(--md-sys-shape-corner-extra-large-top, ${d.extraLarge} ${d.extraLarge} ${d.none} ${d.none})`), extraLarge: e(`var(--md-sys-shape-corner-extra-large, ${d.extraLarge})`), extraLargeEnd: e(`${d.none} ${d.extraLarge} ${d.extraLarge} ${d.none}`), extraLargeStart: e(`${d.extraLarge} ${d.none} ${d.none} ${d.extraLarge}`), largeTop: e(`var(--md-sys-shape-corner-large-top, ${d.large} ${d.large} ${d.none} ${d.none})`), largeEnd: e(`var(--md-sys-shape-corner-large-end, ${d.none} ${d.large} ${d.large} ${d.none})`), largeStart: e(`var(--md-sys-shape-corner-large-start, ${d.large} ${d.none} ${d.none} ${d.large})`), large: e(`var(--md-sys-shape-corner-large, ${d.large})`), medium: e(`var(--md-sys-shape-corner-medium, ${d.medium})`), mediumTop: e(`${d.medium} ${d.medium} ${d.none} ${d.none}`), mediumEnd: e(`${d.none} ${d.medium} ${d.medium} ${d.none}`), mediumStart: e(`${d.medium} ${d.none} ${d.none} ${d.medium}`), small: e(`var(--md-sys-shape-corner-small, ${d.small})`), smallTop: e(`${d.small} ${d.small} ${d.none} ${d.none}`), smallEnd: e(`${d.none} ${d.small} ${d.small} ${d.none}`), smallStart: e(`${d.small} ${d.none} ${d.none} ${d.small}`), extraSmallTop: e(`var(--md-sys-shape-corner-extra-small-top, ${d.extraSmall} ${d.extraSmall} ${d.none} ${d.none})`), extraSmall: e(`var(--md-sys-shape-corner-extra-small, ${d.extraSmall})`), extraSmallEnd: e(`${d.none} ${d.extraSmall} ${d.extraSmall} ${d.none}`), extraSmallStart: e(`${d.extraSmall} ${d.none} ${d.none} ${d.extraSmall}`), extraSmallBottom: e(`${d.none} ${d.none} ${d.extraSmall} ${d.extraSmall}`), none: e(`var(--md-sys-shape-corner-none, ${d.none})`), largeIncreased: e(`var(--md-sys-shape-corner-large-increased, ${d.largeIncreased})`), extraLargeIncreased: e(`var(--md-sys-shape-corner-extra-large-increased, ${d.extraLargeIncreased})`), extraExtraLarge: e(`var(--md-sys-shape-corner-extra-extra-large, ${d.extraExtraLarge})`) } }, Tn = { focusStateLayerOpacity: e("var(--md-sys-state-focus-state-layer-opacity, 10%)"), hoverStateLayerOpacity: e("var(--md-sys-state-hover-state-layer-opacity, 8%)"), pressedStateLayerOpacity: e("var(--md-sys-state-pressed-state-layer-opacity, 10%)") }, zn = { standard: { display: { large: { fontSize: e("var(--md-sys-typescale-display-large-font-size, 3.5625rem)"), fontWeight: e("var(--md-sys-typescale-display-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-display-large-line-height, 4rem)"), tracking: e("var(--md-sys-typescale-display-large-tracking, 0.015625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-display-medium-font-size, 2.8125rem)"), fontWeight: e("var(--md-sys-typescale-display-medium-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-display-medium-line-height, 3.25rem)"), tracking: e("var(--md-sys-typescale-display-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-display-small-font-size, 2.25rem)"), fontWeight: e("var(--md-sys-typescale-display-small-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-display-small-line-height, 2.75rem)"), tracking: e("var(--md-sys-typescale-display-small-tracking, 0)") } }, headline: { large: { fontSize: e("var(--md-sys-typescale-headline-large-font-size, 2rem)"), fontWeight: e("var(--md-sys-typescale-headline-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-headline-large-line-height, 2.5rem)"), tracking: e("var(--md-sys-typescale-headline-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-headline-medium-font-size, 1.75rem)"), fontWeight: e("var(--md-sys-typescale-headline-medium-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-headline-medium-line-height, 2.25rem)"), tracking: e("var(--md-sys-typescale-headline-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-headline-small-font-size, 1.5rem)"), fontWeight: e("var(--md-sys-typescale-headline-small-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-headline-small-line-height, 2rem)"), tracking: e("var(--md-sys-typescale-headline-small-tracking, 0)") } }, title: { large: { fontSize: e("var(--md-sys-typescale-title-large-font-size, 1.375rem)"), fontWeight: e("var(--md-sys-typescale-title-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-title-large-line-height, 1.75rem)"), tracking: e("var(--md-sys-typescale-title-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-title-medium-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-title-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-title-medium-line-height, 1.5rem)"), tracking: e("var(--md-sys-typescale-title-medium-tracking, 0.009375rem)") }, small: { fontSize: e("var(--md-sys-typescale-title-small-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-title-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-title-small-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: e("var(--md-sys-typescale-body-large-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-body-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-body-large-line-height, 1.5rem)"), tracking: e("var(--md-sys-typescale-body-large-tracking, 0.03125rem)") }, medium: { fontSize: e("var(--md-sys-typescale-body-medium-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-body-medium-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-body-medium-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-body-medium-tracking, 0.015625rem)") }, small: { fontSize: e("var(--md-sys-typescale-body-small-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-body-small-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-body-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: e("var(--md-sys-typescale-label-large-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-label-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-label-large-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-label-large-tracking, 0.00625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-label-medium-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-label-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-label-medium-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-label-medium-tracking, 0.03125rem)") }, small: { fontSize: e("var(--md-sys-typescale-label-small-font-size, 0.6875rem)"), fontWeight: e("var(--md-sys-typescale-label-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-label-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-label-small-tracking, 0.03125rem)") } } }, emphasized: { display: { large: { fontSize: e("var(--md-sys-typescale-emphasized-display-large-font-size, 3.5625rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-display-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-display-large-line-height, 4rem)"), tracking: e("var(--md-sys-typescale-emphasized-display-large-tracking, 0.015625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-display-medium-font-size, 2.8125rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-display-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-display-medium-line-height, 3.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-display-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-display-small-font-size, 2.25rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-display-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-display-small-line-height, 2.75rem)"), tracking: e("var(--md-sys-typescale-emphasized-display-small-tracking, 0)") } }, headline: { large: { fontSize: e("var(--md-sys-typescale-emphasized-headline-large-font-size, 2rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-headline-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-headline-large-line-height, 2.5rem)"), tracking: e("var(--md-sys-typescale-emphasized-headline-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-headline-medium-font-size, 1.75rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-headline-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-headline-medium-line-height, 2.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-headline-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-headline-small-font-size, 1.5rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-headline-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-headline-small-line-height, 2rem)"), tracking: e("var(--md-sys-typescale-emphasized-headline-small-tracking, 0)") } }, title: { large: { fontSize: e("var(--md-sys-typescale-emphasized-title-large-font-size, 1.375rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-title-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-title-large-line-height, 1.75rem)"), tracking: e("var(--md-sys-typescale-emphasized-title-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-title-medium-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-title-medium-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-title-medium-line-height, 3.5rem)"), tracking: e("var(--md-sys-typescale-emphasized-title-medium-tracking, 0.009375rem)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-title-small-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-title-small-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-title-small-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: e("var(--md-sys-typescale-emphasized-body-large-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-body-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-body-large-line-height, 1.5rem)"), tracking: e("var(--md-sys-typescale-emphasized-body-large-tracking, 0.03125rem)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-body-medium-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-body-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-body-medium-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-body-medium-tracking, 0.015625rem)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-body-small-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-body-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-body-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-emphasized-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: e("var(--md-sys-typescale-emphasized-label-large-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-label-large-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-label-large-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-label-large-tracking, 0.00625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-label-medium-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-label-medium-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-label-medium-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-emphasized-label-medium-tracking, 0.03125rem)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-label-small-font-size, 0.6875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-label-small-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-label-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-emphasized-label-small-tracking, 0.03125rem)") } } } }, n = { color: jt, elevation: kn, motion: En, shape: Mn, state: Tn, typescale: zn, scrollbar: Ln, density: vn };
function at(o2) {
  return ua(o2, "disabled");
}
function Eo(o2, t = true) {
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
function nt(o2) {
  return ua(o2, "disabledInteractive") && at(o2);
}
const Ko = ["click", "dblclick", "auxclick", "keydown", "keyup"], An = ["Tab", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Left", "Up", "Right", "Down"], to = /* @__PURE__ */ Symbol("_suppressedEventHandler");
function Pn(o2) {
  var t;
  class a extends o2 {
    constructor() {
      super(...arguments), this[t] = (l) => {
        if (this.disabledInteractive) {
          if (l instanceof KeyboardEvent && An.includes(l.key)) return;
          l.stopImmediatePropagation(), l.preventDefault();
        }
      }, this.disabledInteractive = false;
    }
    connectedCallback() {
      Ko.forEach((l) => this.addEventListener(l, this[to], true)), super.connectedCallback();
    }
    disconnectedCallback() {
      Ko.forEach((l) => this.removeEventListener(l, this[to], true)), super.disconnectedCallback();
    }
    update(l) {
      super.update(l), (l.has("disabled") || l.has("disabledInteractive")) && this.role && this.role !== "none" && this.role !== "presentation" && this.role !== "none" && (this.ariaDisabled = this.disabled || this.disabledInteractive ? "true" : null);
    }
  }
  return t = to, m([g({ attribute: "disabled-interactive", type: Boolean, reflect: true })], a.prototype, "disabledInteractive", void 0), a;
}
const Ie = /* @__PURE__ */ Symbol("_tabindex");
function In(o2) {
  var t;
  class a extends o2 {
    constructor() {
      super(...arguments), this[t] = 0;
    }
    connectedCallback() {
      this[Ie] = Number.parseInt(this.getAttribute("tabindex") ?? "0"), super.connectedCallback();
    }
    firstUpdated(l) {
      super.firstUpdated(l), !this.hasAttribute("tabindex") && !l.has("disabled") && this.setAttribute("tabindex", `${this[Ie]}`);
    }
    update(l) {
      if (super.update(l), l.has("disabled")) if (!this.disabled && this.role !== "none") this.hasAttribute("tabindex") || this.setAttribute("tabindex", `${this[Ie]}`);
      else {
        const i = this.getAttribute("tabindex");
        i && (this[Ie] = Number.parseInt(i)), this.removeAttribute("tabindex");
      }
    }
  }
  return t = Ie, a;
}
const oo = /* @__PURE__ */ Symbol("_clickHandler");
function Dn(o2) {
  var t;
  class a extends o2 {
    constructor() {
      super(...arguments), this.type = "button", this[t] = async (l) => {
        if (l.defaultPrevented || at(this) && this.disabled || nt(this) && this.disabledInteractive) return;
        const i = this[K].form;
        if (!(!i || this.type === "button") && (await new Promise((c) => setTimeout(c)), !l.defaultPrevented)) switch (this.type) {
          case "reset":
            i.reset();
            break;
          case "submit":
            i.addEventListener("submit", (c) => Object.defineProperty(c, "submitter", { configurable: true, enumerable: true, get: () => this }), { capture: true, once: true }), this[K].setFormValue(this.value), i.requestSubmit();
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
      super.connectedCallback(), this.addEventListener("click", this[oo]);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("click", this[oo]);
    }
  }
  return t = oo, a.formAssociated = true, m([g()], a.prototype, "name", null), m([g()], a.prototype, "value", null), m([g()], a.prototype, "type", void 0), a;
}
const fe = /* @__PURE__ */ Symbol("_control"), ao = /* @__PURE__ */ Symbol("_firstUpdated");
function Kt(o2) {
  var t;
  class a extends o2 {
    constructor() {
      super(...arguments), this[t] = false, this.htmlFor = null;
    }
    get control() {
      return this[fe]?.deref() ?? null;
    }
    connectedCallback() {
      super.connectedCallback();
      const l = this[fe]?.deref();
      l && this.attach(l);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      const l = this[fe];
      l && (this.detach(), this[fe] = l);
    }
    firstUpdated(l) {
      super.firstUpdated(l), this[ao] = true;
    }
    update(l) {
      if (super.update(l), l.has("htmlFor")) if (this.htmlFor) {
        const i = this.getRootNode();
        i && hn(this.htmlFor, i).then((c) => {
          c !== this.control && (this.control && this.detach(), c instanceof HTMLElement && this.attach(c));
        });
      } else this.control && this[ao] && this.detach();
    }
    attach(l) {
      this[fe] = new WeakRef(l);
    }
    detach() {
      this[fe] = void 0;
    }
  }
  return t = ao, m([g({ attribute: "for" })], a.prototype, "htmlFor", void 0), a;
}
function Rn(o2, t = true) {
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
    if (v.target !== v.currentTarget || at(this) && this.disabled || nt(this) && this.disabledInteractive) {
      y(this, r, false, "f");
      return;
    }
    (v.key === " " || t && v.key === "Enter") && y(this, r, true, "f");
  }, u = function(v) {
    if (v.target !== v.currentTarget || at(this) && this.disabled || nt(this) && this.disabledInteractive || !s(this, r, "f")) {
      y(this, r, false, "f");
      return;
    }
    y(this, r, false, "f"), this.dispatchEvent(new MouseEvent("click", { cancelable: true, bubbles: true, composed: true }));
  }, b;
}
const ma = /* @__PURE__ */ Symbol("renderPseudoLink"), no = /* @__PURE__ */ Symbol("_clickHandler");
function qn(o2, t = false) {
  var a, r, l, i, c;
  class h extends o2 {
    constructor() {
      super(...arguments), a.add(this), this[c] = async (b) => {
        if (nt(this) && this.disabledInteractive && (b.preventDefault(), b.stopPropagation()), await new Promise((f) => f()), !b.defaultPrevented && this.href) {
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
      super.connectedCallback(), t || this.addEventListener("click", this[no]), this.hasAttribute("href") && this.role === "button" && (this.role = "link");
    }
    disconnectedCallback() {
      super.disconnectedCallback(), t || this.removeEventListener("click", this[no]);
    }
    [(a = /* @__PURE__ */ new WeakSet(), c = no, ma)]() {
      const b = at(this) && this.disabled, f = nt(this) && this.disabledInteractive;
      return !b && !f && this.href ? S`<a href="${this.href}" target="${Zt(this.target || void 0)}" rel="${Zt(this.rel || void 0)}" download="${Zt(this.download || void 0)}" tabindex="-1" aria-hidden="true" @pointerdown="${s(this, a, "m", r)}" @focus="${s(this, a, "m", l)}" @blur="${s(this, a, "m", i)}"></a>` : $;
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
var wt;
class Wn extends E {
  constructor() {
    super(...arguments), wt.set(this, (t) => {
      t.defaultPrevented || this._onClick(t);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.parentElement?.addEventListener("click", s(this, wt, "f"));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.parentElement?.removeEventListener("click", s(this, wt, "f"));
  }
  render() {
    return S`<slot></slot>`;
  }
}
wt = /* @__PURE__ */ new WeakMap();
Wn.styles = L`:host { display: contents; } ::slotted(.material-icons) { font-size: inherit !important; }`;
var A, Ze, Oe, pa, Fe, Ne, lo;
let Le = class extends Ut(E) {
  constructor() {
    super(...arguments), A.add(this), Ze.set(this, false), Oe.set(this, false), this.open = false, this.orientation = "vertical", this.noAnimate = false;
  }
  update(t) {
    super.update(t);
    const a = this.noAnimate || t.has("orientation") && !t.has("open");
    if (V(this, "--no-animate"), !s(this, Ze, "f")) {
      this.open && (y(this, Oe, true, "f"), s(this, A, "m", Fe).call(this)), y(this, Ze, true, "f");
      return;
    }
    this.toggleAttribute("inert", !this.open), this.open ? (y(this, Oe, true, "f"), a || ht() || (s(this, A, "m", Fe).call(this), ot(this, "--overflows", this.orientation === "vertical" ? this.clientHeight < this.scrollHeight : this.orientation === "horizontal" ? this.clientWidth < this.scrollWidth : this.clientHeight < this.scrollHeight || this.clientWidth < this.scrollWidth), s(this, A, "m", Ne).call(this)), k(this, "--closing"), V(this, "--opening"), this.dispatchEvent(new Event("opening")), s(this, A, "m", Ne).call(this), k(this, "--no-animate"), s(this, A, "m", lo).call(this), a || ht() ? (s(this, A, "m", Fe).call(this), k(this, "--opening"), this.dispatchEvent(new Event("opened"))) : this.addEventListener("transitionend", () => {
      this.open && (s(this, A, "m", Fe).call(this), k(this, "--opening"), this.dispatchEvent(new Event("opened")));
    }, { once: true })) : (k(this, "--opening"), V(this, "--closing"), this.dispatchEvent(new Event("closing")), s(this, A, "m", lo).call(this), s(this, Oe, "f") && k(this, "--no-animate"), a || ht() ? (s(this, A, "m", Ne).call(this), k(this, "--closing"), this.dispatchEvent(new Event("closed"))) : requestAnimationFrame(() => {
      s(this, A, "m", Ne).call(this), this.addEventListener("transitionend", () => {
        this.open || (k(this, "--closing"), this.dispatchEvent(new Event("closed")));
      }, { once: true });
    }));
  }
  render() {
    return S`<slot @slotchange="${s(this, A, "m", pa)}"></slot>`;
  }
};
Ze = /* @__PURE__ */ new WeakMap();
Oe = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakSet();
pa = function() {
  y(this, Ze, true, "f");
};
Fe = function() {
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
Ne = function() {
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
lo = function() {
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
Le.styles = L`:host { display: block; overflow: hidden; } :host([orientation="vertical"]) { height: 0px; transition: ${e(`visibility var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
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
m([g({ type: Boolean, reflect: true })], Le.prototype, "open", void 0);
m([g({ reflect: true })], Le.prototype, "orientation", void 0);
m([g({ attribute: "no-animate", type: Boolean, reflect: true })], Le.prototype, "noAnimate", void 0);
Le = m([I("m3e-collapsible")], Le);
const R = { liftDuration: e(`var(--m3e-elevation-lift-duration, ${n.motion.duration.short4})`), liftEasing: e(`var(--m3e-elevation-lift-easing, ${n.motion.easing.standard})`), settleDuration: e(`var(--m3e-elevation-settle-duration, ${n.motion.duration.short3})`), settleEasing: e(`var(--m3e-elevation-settle-easing, ${n.motion.easing.standardAccelerate})`), level: e(`var(--m3e-elevation-level, ${n.elevation.level0})`), hoverLevel: e(`var(--m3e-elevation-hover-level, ${n.elevation.level0})`), focusLevel: e(`var(--m3e-elevation-focus-level, ${n.elevation.level0})`), pressedLevel: e(`var(--m3e-elevation-pressed-level, ${n.elevation.level0})`) };
var Ve, St, Et, Lt, ba, va, fa;
let Me = class extends Kt(me(E, "none")) {
  constructor() {
    super(...arguments), Ve.add(this), St.set(this, new aa(this, { target: null, callback: (t) => s(this, Ve, "m", ba).call(this, t) })), Et.set(this, new it(this, { target: null, callback: (t) => s(this, Ve, "m", va).call(this, t) })), Lt.set(this, new wo(this, { target: null, callback: (t) => s(this, Ve, "m", fa).call(this, t) })), this.disabled = false, this.level = null;
  }
  attach(t) {
    super.attach(t), s(this, St, "f").observe(t), s(this, Et, "f").observe(t), s(this, Lt, "f").observe(t);
  }
  detach() {
    this.control && (s(this, St, "f").unobserve(this.control), s(this, Et, "f").unobserve(this.control), s(this, Lt, "f").unobserve(this.control)), super.detach();
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
St = /* @__PURE__ */ new WeakMap();
Et = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
Ve = /* @__PURE__ */ new WeakSet();
ba = function(t) {
  this.disabled || (this._shadow?.classList.toggle("hover", t), this._shadow?.classList.toggle("resting", !t));
};
va = function(t) {
  this.disabled || this._shadow?.classList.toggle("focus", t);
};
fa = function(t) {
  this.disabled || this._shadow?.classList.toggle("pressed", t);
};
Me.styles = L`:host { display: block; } :host, .shadow { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .shadow.resting, .shadow.focus, .shadow.pressed { will-change: box-shadow; transition: ${e(`box-shadow ${R.settleDuration} ${R.settleEasing};`)}; } .shadow.hover { will-change: box-shadow; transition: ${e(`box-shadow ${R.liftDuration} ${R.liftEasing};`)}; } .shadow { box-shadow: ${R.level}; } .shadow.focus { box-shadow: ${R.focusLevel}; } .shadow.hover { box-shadow: ${R.hoverLevel}; } .shadow.pressed { box-shadow: ${R.pressedLevel}; } :host([level="0"]) .shadow { --m3e-elevation-level: ${n.elevation.level0}; --m3e-elevation-hover-level: ${n.elevation.level1}; } :host([level="1"]) .shadow { --m3e-elevation-level: ${n.elevation.level1}; --m3e-elevation-hover-level: ${n.elevation.level2}; } :host([level="2"]) .shadow { --m3e-elevation-level: ${n.elevation.level2}; --m3e-elevation-hover-level: ${n.elevation.level3}; } :host([level="3"]) .shadow { --m3e-elevation-level: ${n.elevation.level3}; --m3e-elevation-hover-level: ${n.elevation.level4}; } :host([level="4"]) .shadow { --m3e-elevation-level: ${n.elevation.level4}; --m3e-elevation-hover-level: ${n.elevation.level5}; } :host([level="5"]) .shadow { --m3e-elevation-level: ${n.elevation.level5}; --m3e-elevation-hover-level: ${R.level}; } :host([level]) .shadow { --m3e-elevation-focus-level: ${R.level}; --m3e-elevation-pressed-level: ${R.level}; } @media (prefers-reduced-motion) { .shadow.resting, .shadow.pressed, .shadow.focus, .shadow.hover { transition: none; } } @media (forced-colors: active) { .shadow { display: none; } }`;
m([X(".shadow")], Me.prototype, "_shadow", void 0);
m([g({ type: Boolean, reflect: true })], Me.prototype, "disabled", void 0);
m([g({ type: Number, reflect: true })], Me.prototype, "level", void 0);
Me = m([I("m3e-elevation")], Me);
const _ = { color: e(`var(--m3e-focus-ring-color, ${n.color.secondary})`), duration: e(`var(--m3e-focus-ring-duration, ${n.motion.duration.long2})`), thickness: e("var(--m3e-focus-ring-thickness, 3px)"), outwardOffset: e("var(--m3e-focus-ring-outward-offset, 2px)"), inwardOffset: e("var(--m3e-focus-ring-inward-offset, 0px)"), visibility: e("var(--m3e-focus-ring-visibility, visible)"), growthFactor: e("var(--m3e-focus-ring-growth-factor, 2)") };
var io, Mt, ga;
let Te = class extends Kt(me(E, "none")) {
  constructor() {
    super(...arguments), io.add(this), Mt.set(this, new it(this, { target: null, callback: (t, a) => s(this, io, "m", ga).call(this, a) })), this.inward = false, this.disabled = false;
  }
  show() {
    this._outline?.classList.toggle("visible", true);
  }
  hide() {
    this._outline?.classList.toggle("visible", false);
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
    super.disconnectedCallback(), this.hide();
  }
  render() {
    return S`<div class="outline"></div>`;
  }
  updated(t) {
    super.updated(t), t.has("disabled") && this.disabled && this.hide();
  }
};
Mt = /* @__PURE__ */ new WeakMap();
io = /* @__PURE__ */ new WeakSet();
ga = function(t) {
  this.disabled || (t ? this.show() : this.hide());
};
Te.styles = L`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; outline: none; } .outline { contain: layout style; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; z-index: 1; outline-color: ${_.color}; outline-width: ${_.thickness}; visibility: ${_.visibility}; } .outline.visible { outline-style: solid; } :host(:not([inward])) .outline { outline-offset: ${_.outwardOffset}; } :host([inward]) .outline { outline-offset: calc(${_.inwardOffset} - ${_.thickness}); } :host(:not([inward])) .outline.visible { animation: grow-shrink ${_.duration}; } :host([inward]) .outline.visible { animation: shrink-grow ${_.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @keyframes shrink-grow { 50% { outline-offset: calc( ${_.inwardOffset} - calc(${_.thickness} * ${_.growthFactor}) ); outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @media (prefers-reduced-motion) { :host(:not([inward])) .outline.visible, :host([inward]) .outline.visible { animation: none; } } @media (forced-colors: active) { .outline { outline-color: Highlight; } }`;
m([X(".outline")], Te.prototype, "_outline", void 0);
m([g({ type: Boolean, reflect: true })], Te.prototype, "inward", void 0);
m([g({ type: Boolean, reflect: true })], Te.prototype, "disabled", void 0);
Te = m([I("m3e-focus-ring")], Te);
let co = class extends bn(Eo(me(E, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return this.indeterminate ? S`<svg viewBox="0 -960 960 960" fill="currentColor"><path Required d="M240-440v-80h480v80H240Z"/></svg>` : this.checked ? S`<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>` : $;
  }
};
co.styles = L`:host { display: inline-block; vertical-align: middle; width: var(--m3e-checkbox-icon-size, 1.125rem); height: var(--m3e-checkbox-icon-size, 1.125rem); border-radius: var(--m3e-checkbox-container-shape, 2px); box-sizing: border-box; flex: none; contain: layout style paint; } :host(:not([checked]):not([indeterminate])) { border-width: var(--m3e-checkbox-unselected-outline-thickness, 2px); border-style: solid; } :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { background-color: var(--m3e-checkbox-selected-container-color, ${n.color.primary}); color: var(--m3e-checkbox-selected-icon-color, ${n.color.onPrimary}); } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: var(--m3e-checkbox-unselected-outline-color, ${n.color.onSurfaceVariant}); } :host([disabled]:not([checked]):not([indeterminate])) { border-color: color-mix( in srgb, var(--m3e-checkbox-unselected-disabled-outline-color, ${n.color.onSurface}) var(--m3e-checkbox-unselected-disabled-outline-opacity, 38%), transparent ); } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-container-color, ${n.color.onSurface}) var(--m3e-checkbox-selected-disabled-container-opacity, 38%), transparent ); color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-icon-color, ${n.color.surface}) var(--m3e-checkbox-selected-disabled-icon-opacity, 100%), transparent ); } svg { pointer-events: none; } @media (forced-colors: active) { :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { border-color: Highlight; background-color: Highlight; color: HighlightText; } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: CanvasText; background: Canvas; } :host([disabled]:not([checked]):not([indeterminate])) { border-color: GrayText; background-color: Canvas; } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: GrayText; color: Canvas; } }`;
co = m([I("m3e-pseudo-checkbox")], co);
let uo = class extends ha(Eo(me(E, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return S`<svg class="icon" viewBox="0 0 20 20"><mask id="cutout2"><rect width="100%" height="100%" fill="white"></rect><circle cx="10" cy="10" r="8" fill="black"></circle></mask><circle class="outer circle" cx="10" cy="10" r="10" mask="url(#cutout2)"></circle><circle class="inner circle" cx="10" cy="10" r="5"></circle></svg>`;
  }
};
uo.styles = L`:host { display: inline-block; vertical-align: middle; box-sizing: border-box; width: var(--m3e-radio-icon-size, 1.25rem); height: var(--m3e-radio-icon-size, 1.25rem); flex: none; contain: layout style paint; } .circle { fill: currentColor; } :host(:not([checked])) .circle.inner { opacity: 0; } :host(:not([checked])) { color: var(--m3e-radio-unselected-icon-color, ${n.color.onSurfaceVariant}); } :host([checked]) { color: var(--m3e-radio-selected-icon-color, ${n.color.primary}); } :host([disabled]) { color: color-mix(in srgb, var(--m3e-radio-disabled-icon-color, ${n.color.onSurface}) 38%, transparent); } @media (forced-colors: active) { :host { border-radius: 50%; } :host(:not([checked])) { color: CanvasText; background-color: Canvas; } :host([checked]) { color: HighlightText; background-color: Highlight; } :host([disabled]) { color: GrayText; background-color: Canvas; } }`;
uo = m([I("m3e-pseudo-radio")], uo);
const Z = { color: e(`var(--m3e-ripple-color, ${n.color.onSurface})`), opacity: e(`var(--m3e-ripple-opacity, ${n.state.pressedStateLayerOpacity})`), enterDuration: e(`var(--m3e-ripple-enter-duration, ${n.motion.duration.long4})`), exitDuration: e(`var(--m3e-ripple-exit-duration, ${n.motion.duration.short2})`), scaleFactor: e("var(--m3e-ripple-scale-factor, 2.5)") };
var oe, w, Tt, zt, ya, xa;
let he = class extends Kt(me(E, "none")) {
  constructor() {
    super(...arguments), oe.add(this), w.set(this, null), Tt.set(this, new wo(this, { target: null, minPressedDuration: 150, isPressedKey: (t) => t === " ", callback: (t, { x: a, y: r }) => s(this, oe, "m", xa).call(this, t, a, r) })), this.disabled = false, this.centered = false, this.unbounded = false, this.radius = null;
  }
  get visible() {
    return s(this, w, "f") !== null;
  }
  show(t, a, r = false) {
    s(this, oe, "m", zt).call(this);
    const l = this.getBoundingClientRect();
    this.centered && (t = l.left + l.width / 2, a = l.top + l.height / 2);
    let i = this.radius;
    if (!i || isNaN(i)) {
      const u = Math.max(Math.abs(t - l.left), Math.abs(t - l.right)), b = Math.max(Math.abs(a - l.top), Math.abs(a - l.bottom));
      i = Math.sqrt(u * u + b * b);
    }
    const c = t - l.left, h = a - l.top;
    y(this, w, document.createElement("div"), "f"), s(this, w, "f").classList.add("ripple"), r && s(this, w, "f").classList.add("persistent"), s(this, w, "f").style.left = `${c - i}px`, s(this, w, "f").style.top = `${h - i}px`, s(this, w, "f").style.width = `${i * 2}px`, s(this, w, "f").style.height = `${i * 2}px`, s(this, w, "f").addEventListener("animationend", () => s(this, oe, "m", ya).call(this, r), { once: true }), s(this, w, "f").addEventListener("transitionend", () => s(this, oe, "m", zt).call(this), { once: true }), this.shadowRoot?.appendChild(s(this, w, "f"));
  }
  hide() {
    s(this, w, "f")?.classList.add("exit");
  }
  attach(t) {
    super.attach(t), s(this, Tt, "f").observe(t);
  }
  detach() {
    this.control && s(this, Tt, "f").unobserve(this.control), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), s(this, oe, "m", zt).call(this);
  }
  updated(t) {
    super.updated(t), t.has("disabled") && this.disabled && this.hide();
  }
};
w = /* @__PURE__ */ new WeakMap();
Tt = /* @__PURE__ */ new WeakMap();
oe = /* @__PURE__ */ new WeakSet();
zt = function() {
  s(this, w, "f")?.remove(), y(this, w, null, "f");
};
ya = function(t) {
  t ? s(this, w, "f")?.classList.add("pressed") : this.hide();
};
xa = function(t, a, r) {
  this.disabled || (t ? this.show(a, r, true) : this.hide());
};
he.styles = L`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } :host(:not([unbounded])) { overflow: hidden; } :host(:not([unbounded])) .ripple { contain: layout style paint; } :host([unbounded]) .ripple { contain: layout style; } .ripple { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; transform: scale(0); border-radius: ${n.shape.corner.full}; background-color: color-mix(in srgb, ${Z.color} ${Z.opacity}, transparent); will-change: background-color, opacity; animation: ripple ${Z.enterDuration} linear; } .ripple.persistent.pressed { transform: scale(${Z.scaleFactor}); } .ripple.exit { transition: opacity ${Z.exitDuration} cubic-bezier(0, 0, 0.2, 0.1); opacity: 0; } @keyframes ripple { to { transform: scale(${Z.scaleFactor}); } } @media (prefers-reduced-motion) { .ripple { transform: scale(${Z.scaleFactor}); animation-duration: 90ms; } .ripple.exit { transition-duration: 10ms; } } @media (forced-colors: active) { .ripple { display: none; } }`;
m([g({ type: Boolean, reflect: true })], he.prototype, "disabled", void 0);
m([g({ type: Boolean, reflect: true })], he.prototype, "centered", void 0);
m([g({ type: Boolean, reflect: true })], he.prototype, "unbounded", void 0);
m([g({ type: Number })], he.prototype, "radius", void 0);
he = m([I("m3e-ripple")], he);
var Ue;
let ze = class extends Ut(E) {
  constructor() {
    super(...arguments), Ue.set(this, () => this._updateScroll()), this.dividers = "above-below", this.thin = false;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("scroll", s(this, Ue, "f"));
  }
  update(t) {
    super.update(t), t.has("dividers") && (this.removeEventListener("scroll", s(this, Ue, "f")), this.dividers !== "none" && this.addEventListener("scroll", s(this, Ue, "f"), { passive: true }));
  }
  render() {
    return S`<slot @slotchange="${this._updateScroll}"></slot>`;
  }
  _updateScroll() {
    const t = (this.dividers === "above" || this.dividers === "above-below") && this.scrollTop > 0, a = (this.dividers === "below" || this.dividers === "above-below") && this.scrollHeight - this.scrollTop - this.clientHeight > 1;
    ot(this, "--above", t), ot(this, "--below", a);
  }
};
Ue = /* @__PURE__ */ new WeakMap();
ze.styles = L`:host { display: block; overflow-y: auto; position: relative; box-sizing: border-box; scrollbar-color: ${n.scrollbar.color}; border-top: var(--m3e-divider-thickness, 1px) solid transparent; border-bottom: var(--m3e-divider-thickness, 1px) solid transparent; outline-color: ${_.color}; outline-width: ${_.thickness}; outline-offset: ${_.outwardOffset}; } :host([thin]) { scrollbar-width: ${n.scrollbar.thinWidth}; } :host(:not([thin])) { scrollbar-width: ${n.scrollbar.width}; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: var(--m3e-divider-color, ${n.color.outlineVariant}); } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: var(--m3e-divider-color, ${n.color.outlineVariant}); } :host(:focus-visible) { outline-style: solid; animation: grow-shrink ${_.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @media (forced-colors: active) { :host { border-top: var(--m3e-divider-thickness, 1px) solid Canvas; border-bottom: var(--m3e-divider-thickness, 1px) solid Canvas; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: GrayText; } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: GrayText; } } @media (prefers-reduced-motion) { :host(:focus-visible) { animation: none; } }`;
m([g()], ze.prototype, "dividers", void 0);
m([g({ type: Boolean, reflect: true })], ze.prototype, "thin", void 0);
m([So(40)], ze.prototype, "_updateScroll", null);
ze = m([I("m3e-scroll-container")], ze);
var Je, ce, $a, Lo;
let Ft = class extends Ut(E) {
  constructor() {
    super(...arguments), Je.add(this), ce.set(this, new Array()), this.selectedIndex = null;
  }
  connectedCallback() {
    super.connectedCallback(), V(this, "--no-animate");
  }
  update(t) {
    super.update(t), t.has("selectedIndex") && (this.selectedIndex === null && V(this, "--no-animate"), s(this, Je, "m", Lo).call(this), this.selectedIndex !== null && Ot(this, "--no-animate") && requestAnimationFrame(() => {
      this.selectedIndex !== null && k(this, "--no-animate");
    }));
  }
  render() {
    return S`<slot @slotchange="${s(this, Je, "m", $a)}"></slot>`;
  }
};
ce = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakSet();
$a = function(t) {
  const a = [...t.target.assignedElements({ flatten: true })];
  for (const r of s(this, ce, "f").filter((l) => !a.includes(l))) r.classList.remove("-before"), r.classList.remove("-after"), r.removeAttribute("inert");
  y(this, ce, a, "f"), s(this, Je, "m", Lo).call(this);
};
Lo = function() {
  const t = this.selectedIndex ?? s(this, ce, "f").length;
  for (let a = 0; a < s(this, ce, "f").length; a++) {
    const r = s(this, ce, "f")[a];
    r.classList.toggle("-before", a < t), r.classList.toggle("-after", a > t), r.toggleAttribute("inert", a !== t);
  }
};
Ft.styles = L`:host { display: flex; position: relative; overflow: hidden; } ::slotted(*) { width: 100%; top: 0; transition: ${e(`inset-inline-start var(--m3e-slide-animation-duration, ${n.motion.duration.long2}) ${n.motion.easing.standard},
        visibility var(--m3e-slide-animation-duration, ${n.motion.duration.long2}) ${n.motion.easing.standard} allow-discrete`)}; } ::slotted(.-before), ::slotted(.-after) { visibility: hidden; position: absolute; } ::slotted(.-before) { inset-inline-start: -100%; } ::slotted(.-after) { inset-inline-start: 100%; } ::slotted(:not(.-before):not(.-after)) { position: relative; inset-inline-start: 0; } :host(:is(:state(--no-animate), :--no-animate)) ::slotted(*) { transition: none; } @media (prefers-reduced-motion) { ::slotted(*) { transition: none; } }`;
m([g({ attribute: "selected-index", type: Number, reflect: true })], Ft.prototype, "selectedIndex", void 0);
Ft = m([I("m3e-slide")], Ft);
const ge = { hoverColor: e(`var(--m3e-state-layer-hover-color, ${n.color.onSurface})`), hoverOpacity: e(`var(--m3e-state-layer-hover-opacity, ${n.state.hoverStateLayerOpacity})`), focusColor: e(`var(--m3e-state-layer-focus-color, ${n.color.onSurface})`), focusOpacity: e(`var(--m3e-state-layer-focus-opacity, ${n.state.focusStateLayerOpacity})`), duration: e(`var(--m3e-state-layer-duration, ${n.motion.duration.medium1})`), easing: e(`var(--m3e-state-layer-easing, ${n.motion.easing.standard})`) };
var At, Pt, It, _a, ka;
let Ae = class extends Kt(me(E, "none")) {
  constructor() {
    super(...arguments), At.add(this), Pt.set(this, new aa(this, { target: null, callback: (t) => s(this, At, "m", _a).call(this, t) })), It.set(this, new it(this, { target: null, callback: (t, a) => s(this, At, "m", ka).call(this, a) })), this.disabled = false, this.disableHover = false;
  }
  show(t) {
    this._layer?.classList.toggle(t, true);
  }
  hide(t) {
    this._layer?.classList.toggle(t, false);
  }
  attach(t) {
    super.attach(t), s(this, Pt, "f").observe(t), s(this, It, "f").observe(t);
  }
  detach() {
    this.control && (s(this, Pt, "f").unobserve(this.control), s(this, It, "f").unobserve(this.control)), super.detach();
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
Pt = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakSet();
_a = function(t) {
  !this.disabled && !this.disableHover && (t ? this.show("hover") : this.hide("hover"));
};
ka = function(t) {
  this.disabled || (t ? this.show("focused") : this.hide("focused"));
};
Ae.styles = L`:host { display: block; } :host, .layer { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .layer { contain: layout style paint; will-change: background-color; transition: ${e(`background-color ${ge.duration} ${ge.easing}`)}; } .layer.focused { background-color: color-mix(in srgb, ${ge.focusColor} ${ge.focusOpacity}, transparent); } .layer.hover { background-color: color-mix(in srgb, ${ge.hoverColor} ${ge.hoverOpacity}, transparent); } @media (prefers-reduced-motion) { .layer { transition: none; } } @media (forced-colors: active) { .layer { display: none; } }`;
m([X(".layer")], Ae.prototype, "_layer", void 0);
m([g({ type: Boolean, reflect: true })], Ae.prototype, "disabled", void 0);
m([g({ attribute: "disable-hover", type: Boolean, reflect: true })], Ae.prototype, "disableHover", void 0);
Ae = m([I("m3e-state-layer")], Ae);
var N, rt, q, ae, ho, Ca, mo, po;
let G = po = class extends E {
  constructor() {
    super(), N.add(this), rt.set(this, `m3e-text-highlight-${po.__nextId++}`), q.set(this, new Array()), ae.set(this, null), this.disabled = false, this.term = "", this.caseSensitive = false, this.mode = "contains", this.isSupported && (y(this, ae, new CSSStyleSheet(), "f"), s(this, ae, "f").replaceSync(L`::highlight(${e(s(this, rt, "f"))}) { background-color: var(--m3e-text-highlight-container-color, ${n.color.secondaryContainer}); color: var(--m3e-text-highlight-color, ${n.color.onSecondaryContainer}); text-decoration: var(--m3e-text-highlight-decoration); text-shadow: var(--m3e-text-highlight-shadow); }`.toString()));
  }
  get isSupported() {
    return !!CSS.highlights;
  }
  get ranges() {
    return s(this, q, "f");
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.shadowRoot && s(this, ae, "f") && !this.shadowRoot.adoptedStyleSheets.includes(s(this, ae, "f")) && this.shadowRoot.adoptedStyleSheets.push(s(this, ae, "f"));
  }
  updated(t) {
    super.updated(t), (t.has("term") || t.has("caseSensitive") || t.has("disabled")) && s(this, N, "m", mo).call(this);
  }
  render() {
    return S`<slot @slotchange="${s(this, N, "m", mo)}"></slot>`;
  }
};
rt = /* @__PURE__ */ new WeakMap();
q = /* @__PURE__ */ new WeakMap();
ae = /* @__PURE__ */ new WeakMap();
N = /* @__PURE__ */ new WeakSet();
ho = function(t) {
  return !/^\s*$/.test(t.data);
};
Ca = function o(t, a) {
  t instanceof HTMLSlotElement ? t.assignedNodes({ flatten: true }).forEach((r) => {
    switch (r.nodeType) {
      case Node.TEXT_NODE:
        s(this, N, "m", ho).call(this, r) && a.push(r);
        break;
      case Node.ELEMENT_NODE:
        s(this, N, "m", o).call(this, r, a);
        break;
    }
  }) : t.childNodes.forEach((r) => {
    switch (r.nodeType) {
      case Node.TEXT_NODE:
        s(this, N, "m", ho).call(this, r) && a.push(r);
        break;
      case Node.ELEMENT_NODE:
        s(this, N, "m", o).call(this, r, a);
        break;
    }
  });
};
mo = function() {
  if (!this.isSupported || !this.isConnected || (CSS.highlights.delete(s(this, rt, "f")), s(this, q, "f").length = 0, this.disabled)) return;
  if (!this.term) {
    this.dispatchEvent(new CustomEvent("highlight", { detail: [...s(this, q, "f")], bubbles: false, composed: false }));
    return;
  }
  const t = new Array();
  if (s(this, N, "m", Ca).call(this, this, t), t.length > 0) {
    const a = this.caseSensitive ? this.term : this.term.toLowerCase();
    switch (this.mode) {
      case "starts-with":
        {
          const r = t[0];
          if (((this.caseSensitive ? r.textContent : r.textContent?.toLowerCase()) ?? "").startsWith(a)) {
            const i = new Range();
            i.setStart(r, 0), i.setEnd(r, a.length), s(this, q, "f").push(i);
          }
        }
        break;
      case "ends-with":
        {
          const r = t[t.length - 1], l = (this.caseSensitive ? r.textContent : r.textContent?.toLowerCase()) ?? "";
          if (l.endsWith(a)) {
            const i = l.length - a.length, c = i + a.length, h = new Range();
            h.setStart(r, i), h.setEnd(r, c), s(this, q, "f").push(h);
          }
        }
        break;
      case "contains":
        y(this, q, t.map((r) => ({ el: r, text: (this.caseSensitive ? r.textContent : r.textContent?.toLowerCase()) ?? "" })).map(({ el: r, text: l }) => {
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
    s(this, q, "f").length > 0 && CSS.highlights.set(s(this, rt, "f"), new Highlight(...s(this, q, "f")));
  }
  this.dispatchEvent(new CustomEvent("highlight", { detail: [...s(this, q, "f")], bubbles: false, composed: false }));
};
G.styles = L`:host { display: contents; }`;
G.__nextId = 0;
m([g({ type: Boolean, reflect: true })], G.prototype, "disabled", void 0);
m([g()], G.prototype, "term", void 0);
m([g({ attribute: "case-sensitive", type: Boolean })], G.prototype, "caseSensitive", void 0);
m([g()], G.prototype, "mode", void 0);
G = po = m([I("m3e-text-highlight")], G);
let bo = class extends E {
  render() {
    return S`<span class="base"><slot></slot></span>`;
  }
};
bo.styles = L`:host { flex: 1 1 auto; display: inline-flex; align-items: center; flex-wrap: nowrap; min-width: 0; } .base { flex: 1 1 auto; display: inline; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`;
bo = m([I("m3e-text-overflow")], bo);
const x = { "extra-small": { containerHeight: e(`calc(var(--m3e-button-extra-small-container-height, var(--m3e-button-container-height, 2rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-extra-small-outline-thickness, var(--m3e-button-outline-thickness, 1px))"), labelTextFontSize: e(`var(--m3e-button-extra-small-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.label.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-extra-small-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.label.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-extra-small-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.label.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-extra-small-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.label.large.tracking}))`), iconSize: e("var(--m3e-button-extra-small-icon-size, var(--m3e-button-icon-size, 1.25rem))"), shapeRound: e(`var(--m3e-button-extra-small-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-extra-small-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.medium}))`), selectedShapeRound: e(`var(--m3e-button-extra-small-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.medium}))`), selectedShapeSquare: e(`var(--m3e-button-extra-small-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-extra-small-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.small}))`), leadingSpace: e("var(--m3e-button-extra-small-leading-space, var(--m3e-button-leading-space, 0.75rem))"), trailingSpace: e("var(--m3e-button-extra-small-trailing-space, var(--m3e-button-trailing-space, 0.75rem))"), iconLabelSpace: e("var(--m3e-button-extra-small-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))") }, small: { containerHeight: e(`calc(var(--m3e-button-small-container-height, var(--m3e-button-container-height, 2.5rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-small-outline-thickness, var(--m3e-button-outline-thickness, 1px))"), labelTextFontSize: e(`var(--m3e-button-small-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.label.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-small-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.label.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-small-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.label.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-small-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.label.large.tracking}))`), iconSize: e("var(--m3e-button-small-icon-size, var(--m3e-button-icon-size, 1.25rem))"), shapeRound: e(`var(--m3e-button-small-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-small-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.medium}))`), selectedShapeRound: e(`var(--m3e-button-small-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.medium}))`), selectedShapeSquare: e(`var(--m3e-button-small-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-small-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.small}))`), leadingSpace: e("var(--m3e-button-small-leading-space, var(--m3e-button-leading-space, 1rem))"), trailingSpace: e("var(--m3e-button-small-trailing-space, var(--m3e-button-trailing-space, 1rem))"), iconLabelSpace: e("var(--m3e-button-small-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))") }, medium: { containerHeight: e(`calc(var(--m3e-button-medium-container-height, var(--m3e-button-container-height, 3.5rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-medium-outline-thickness, var(--m3e-button-outline-thickness, 1px))"), labelTextFontSize: e(`var(--m3e-button-medium-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.body.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-medium-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.body.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-medium-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.body.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-medium-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.body.large.tracking}))`), iconSize: e("var(--m3e-button-medium-icon-size, var(--m3e-button-icon-size, 1.5rem))"), shapeRound: e(`var(--m3e-button-medium-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-medium-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.large}))`), selectedShapeRound: e(`var(--m3e-button-medium-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.large}))`), selectedShapeSquare: e(`var(--m3e-button-medium-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-medium-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.medium}))`), leadingSpace: e("var(--m3e-button-medium-leading-space, var(--m3e-button-leading-space, 1.5rem))"), trailingSpace: e("var(--m3e-button-medium-trailing-space, var(--m3e-button-trailing-space, 1.5rem))"), iconLabelSpace: e("var(--m3e-button-medium-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))") }, large: { containerHeight: e(`calc(var(--m3e-button-large-container-height, var(--m3e-button-container-height, 6rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-large-outline-thickness, var(--m3e-button-outline-thickness, 2px))"), labelTextFontSize: e(`var(--m3e-button-large-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.headline.small.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-large-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.headline.small.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-large-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.headline.small.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-large-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.headline.small.tracking}))`), iconSize: e("var(--m3e-button-large-icon-size, var(--m3e-button-icon-size, 2rem))"), shapeRound: e(`var(--m3e-button-large-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-large-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.extraLarge}))`), selectedShapeRound: e(`var(--m3e-button-large-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.extraLarge}))`), selectedShapeSquare: e(`var(--m3e-button-large-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-large-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.large}))`), leadingSpace: e("var(--m3e-button-large-leading-space, var(--m3e-button-leading-space, 3rem))"), trailingSpace: e("var(--m3e-button-large-trailing-space, var(--m3e-button-trailing-space, 3rem))"), iconLabelSpace: e("var(--m3e-button-large-icon-label-space, var(--m3e-button-icon-label-space, 0.75rem))") }, "extra-large": { containerHeight: e(`calc(var(--m3e-button-extra-large-container-height, var(--m3e-button-container-height, 8.5rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-extra-large-outline-thickness, var(--m3e-button-outline-thickness, 3px))"), labelTextFontSize: e(`var(--m3e-button-extra-large-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.headline.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-extra-large-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.headline.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-extra-large-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.headline.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-extra-large-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.headline.large.tracking}))`), iconSize: e("var(--m3e-button-extra-large-icon-size, var(--m3e-button-icon-size, 2.5rem))"), shapeRound: e(`var(--m3e-button-extra-large-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-extra-large-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.extraLarge}))`), selectedShapeRound: e(`var(--m3e-button-extra-large-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.extraLarge}))`), selectedShapeSquare: e(`var(--m3e-button-extra-large-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-extra-large-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.large}))`), leadingSpace: e("var(--m3e-button-extra-large-leading-space, var(--m3e-button-leading-space, 4rem))"), trailingSpace: e("var(--m3e-button-extra-large-trailing-space, var(--m3e-button-trailing-space, 4rem))"), iconLabelSpace: e("var(--m3e-button-extra-large-icon-label-space, var(--m3e-button-icon-label-space, 1rem))") } };
function De(o2) {
  return L`:host([size="${e(o2)}"]) .base { height: ${x[o2].containerHeight}; } :host([size="${e(o2)}"]) .wrapper { padding-inline-start: calc(${x[o2].leadingSpace} - calc(var(--_adjacent-shrink, 0px) / 2)); padding-inline-end: calc(${x[o2].trailingSpace} - calc(var(--_adjacent-shrink, 0px) / 2)); column-gap: ${x[o2].iconLabelSpace}; } :host([size="${e(o2)}"]) .label { font-size: ${x[o2].labelTextFontSize}; font-weight: ${x[o2].labelTextFontWeight}; line-height: ${x[o2].labelTextLineHeight}; letter-spacing: ${x[o2].labelTextTracking}; } :host([size="${e(o2)}"]) .icon { font-size: ${x[o2].iconSize}; --m3e-icon-size: ${x[o2].iconSize}; } :host([size="${e(o2)}"]) .base { outline-offset: calc(0px - ${x[o2].outlineThickness}); outline-width: ${x[o2].outlineThickness}; } :host(:not(:is(:state(--connected), :--connected))[size="${e(o2)}"][shape="rounded"]) .base { border-radius: var(--_button-shape, ${x[o2].shapeRound}); } :host( :is(:state(--connected), :--connected)[size="${e(o2)}"][shape="rounded"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${x[o2].shapeRound}); } :host( :not(:is(:state(--connected), :--connected))[size="${e(o2)}"][shape="rounded"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: ${x[o2].selectedShapeRound}; } :host(:not(:is(:state(--connected), :--connected))[size="${e(o2)}"][shape="square"]) .base { border-radius: ${x[o2].shapeSquare}; } :host( :not(:is(:state(--connected), :--connected))[size="${e(o2)}"][shape="square"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${x[o2].selectedShapeSquare}); } :host(:not(:is(:state(--connected), :--connected))[size="${e(o2)}"]:is(:state(--pressed), :--pressed)) .base { border-radius: ${x[o2].shapePressedMorph}; } :host(:is(:state(--connected), :--connected)[size="${e(o2)}"][shape="rounded"]:not([toggle][selected])) .base { border-start-start-radius: var( --_button-rounded-start-shape, var(--_button-shape, ${x[o2].shapeRound}) ); border-end-start-radius: var( --_button-rounded-start-shape, var(--_button-shape, ${x[o2].shapeRound}) ); border-start-end-radius: var( --_button-rounded-end-shape, var(--_button-shape, ${x[o2].shapeRound}) ); border-end-end-radius: var( --_button-rounded-end-shape, var(--_button-shape, ${x[o2].shapeRound}) ); } :host(:is(:state(--connected), :--connected)[size="${e(o2)}"][shape="square"]) .base { border-start-start-radius: var(--_button-square-start-shape, ${x[o2].shapeSquare}); border-end-start-radius: var(--_button-square-start-shape, ${x[o2].shapeSquare}); border-start-end-radius: var(--_button-square-end-shape, ${x[o2].shapeSquare}); border-end-end-radius: var(--_button-square-end-shape, ${x[o2].shapeSquare}); } :host( :is(:state(--connected), :--connected)[size="${e(o2)}"][shape="square"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${x[o2].selectedShapeSquare}); } :host(:is(:state(--connected), :--connected)[size="${e(o2)}"]:is(:state(--pressed), :--pressed)) .base { border-start-start-radius: var(--_button-start-shape-pressed-morph, ${x[o2].shapePressedMorph}); border-end-start-radius: var(--_button-start-shape-pressed-morph, ${x[o2].shapePressedMorph}); border-start-end-radius: var(--_button-end-shape-pressed-morph, ${x[o2].shapePressedMorph}); border-end-end-radius: var(--_button-end-shape-pressed-morph, ${x[o2].shapePressedMorph}); }`;
}
const Hn = [De("extra-small"), De("small"), De("medium"), De("large"), De("extra-large")], Bn = L`:host { display: inline-block; outline: none; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); } .base { box-sizing: border-box; vertical-align: middle; display: inline-flex; align-items: center; justify-content: center; position: relative; width: 100%; transition: ${e(`background-color ${n.motion.duration.short4} ${n.motion.easing.standard}`)}; } .touch { position: absolute; height: 3rem; left: 0; right: 0; } :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base { transition: ${e(`background-color ${n.motion.duration.short4} ${n.motion.easing.standard},
          border-radius ${n.motion.spring.fastEffects}`)}; } .wrapper { width: 100%; overflow: hidden; display: inline-flex; align-items: center; justify-content: center; } .label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: ${e(`color ${n.motion.duration.short4} ${n.motion.easing.standard}`)}; } .icon { transition: ${e(`color ${n.motion.duration.short4} ${n.motion.easing.standard}`)}; } :host(:not(:disabled):not([disabled-interactive])) { cursor: pointer; } :host([disabled-interactive]) { cursor: not-allowed; } ::slotted([slot="icon"]), ::slotted([slot="selected-icon"]), ::slotted([slot="trailing-icon"]) { font-size: inherit !important; flex: none; } ::slotted(svg[slot="icon"]), ::slotted(svg[slot="selected-icon"]), ::slotted(svg[slot="trailing-icon"]) { width: 1em; height: 1em; } :host([toggle]:not([selected])) .base.with-selected-icon slot[name="selected-icon"], :host([toggle][selected]) .base.with-selected-icon slot[name="icon"] { display: none; } a { all: unset; display: block; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; z-index: 1; } :host(:is(:state(--grouped), :--grouped):is(:state(--connected), :--connected)) { flex: 1 1 auto; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) { transition: ${e(`width ${n.motion.spring.fastEffects}`)}; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) .wrapper { transition: ${e(`padding-inline ${n.motion.spring.fastEffects}`)}; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) { flex-shrink: 0; flex-grow: 0; } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):not( :is(:state(--pressed), :--pressed, :state(--adjacent-pressed), :--adjacent-pressed) ) ) { width: var(--_button-width); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):not( :is(:state(--pressed), :--pressed) ):is(:state(--adjacent-pressed), :--adjacent-pressed) ) { width: calc(var(--_button-width) - var(--_adjacent-shrink, 0px)); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):is( :state(--pressed), :--pressed ):not([disabled-interactive]):not(:disabled) ) { width: calc( var(--_button-width) + calc(var(--_button-width) * var(--m3e-standard-button-group-width-multiplier, 0.15)) ); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):is( :state(--adjacent-pressed), :--adjacent-pressed ):not(:is(:state(--pressed), :--pressed)) ) .label { text-overflow: clip; } @media (forced-colors: active) { .base, .label, .icon { transition: none; } :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base { transition: ${e(`border-radius ${n.motion.spring.fastEffects}`)}; } :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .base { background-color: ButtonFace; outline-color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .label, :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .icon { color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .base { background-color: ButtonFace; outline-color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .label, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected]):focus) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .icon, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .icon, :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected]):focus) .icon { color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .base { background-color: ButtonText; outline: none; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .label, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle][selected]) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]:focus) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .icon, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle][selected]) .icon, :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]:focus) .icon { forced-color-adjust: none; color: ButtonFace; background-color: ButtonText; } :host([variant]:disabled) .base, :host([variant][disabled-interactive]) .base { outline-color: GrayText; background-color: unset; } :host([variant]:disabled) .label, :host([variant][disabled-interactive]) .label, :host([variant]:disabled) .icon, :host([variant][disabled-interactive]) .icon { color: GrayText; } .base { outline-style: solid; } :host([size="extra-small"]) .base { outline-offset: calc(0px - var(--m3e-button-extra-small-outline-thickness, 1px)); outline-width: var(--m3e-button-extra-small-outline-thickness, 1px); } :host([size="small"]) .base { outline-offset: calc(0px - var(--m3e-button-small-outline-thickness, 1px)); outline-width: var(--m3e-button-small-outline-thickness, 1px); } :host([size="medium"]) .base { outline-offset: calc(0px - var(--m3e-button-medium-outline-thickness, 1px)); outline-width: var(--m3e-button-medium-outline-thickness, 1px); } :host([size="large"]) .base { outline-offset: calc(0px - var(--m3e-button-large-outline-thickness, 2px)); outline-width: var(--m3e-button-large-outline-thickness, 2px); } :host([size="extra-large"]) .base { outline-offset: calc(0px - var(--m3e-button-extra-large-outline-thickness, 3px)); outline-width: var(--m3e-button-extra-large-outline-thickness, 3px); } } @media (prefers-reduced-motion) { :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))), :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) .wrapper, :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base, .base, .label, .icon { transition: none; } }`, p = { elevated: { labelTextColor: e(`var(--m3e-elevated-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.primary}))`), iconColor: e(`var(--m3e-elevated-button-icon-color, var(--m3e-button-icon-color, ${n.color.primary}))`), containerColor: e(`var(--m3e-elevated-button-container-color, var(--m3e-button-container-color, ${n.color.surfaceContainerLow}))`), containerElevation: e(`var(--m3e-elevated-button-container-elevation, var(--m3e-button-container-elevation, ${n.elevation.level1}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-elevated-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.primary}))`), unselectedContainerColor: e(`var(--m3e-elevated-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${n.color.surfaceContainerLow}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.onPrimary}))`), selectedIconColor: e(`var(--m3e-elevated-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.onPrimary}))`), selectedContainerColor: e(`var(--m3e-elevated-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.primary}))`), disabled: { containerColor: e(`var(--m3e-elevated-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-elevated-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-elevated-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-elevated-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-elevated-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-elevated-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), containerElevation: e(`var(--m3e-elevated-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${n.elevation.level0}))`) }, hover: { iconColor: e(`var(--m3e-elevated-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-elevated-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-elevated-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-elevated-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), containerElevation: e(`var(--m3e-elevated-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${n.elevation.level2}))`), unselectedIconColor: e(`var(--m3e-elevated-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-elevated-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-elevated-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-elevated-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.onPrimary}))`) }, focus: { iconColor: e(`var(--m3e-elevated-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-elevated-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-elevated-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-elevated-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), containerElevation: e(`var(--m3e-elevated-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${n.elevation.level1}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-elevated-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-elevated-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-elevated-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-elevated-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.onPrimary}))`) }, pressed: { iconColor: e(`var(--m3e-elevated-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-elevated-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-elevated-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-elevated-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), containerElevation: e(`var(--m3e-elevated-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${n.elevation.level1}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-elevated-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-elevated-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-elevated-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-elevated-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.onPrimary}))`) } }, outlined: { labelTextColor: e(`var(--m3e-outlined-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.onSurfaceVariant}))`), iconColor: e(`var(--m3e-outlined-button-icon-color, var(--m3e-button-icon-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-outline-color, var(--m3e-button-outline-color, ${n.color.outlineVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedIconColor: e(`var(--m3e-outlined-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.onSurfaceVariant}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedIconColor: e(`var(--m3e-outlined-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedContainerColor: e(`var(--m3e-outlined-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.inverseSurface}))`), disabled: { containerColor: e(`var(--m3e-outlined-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-outlined-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-outlined-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-outlined-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-outlined-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-outlined-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), outlineColor: e(`var(--m3e-outlined-button-disabled-outline-color, var(--m3e-button-disabled-outline-color, ${n.color.outlineVariant}))`) }, hover: { iconColor: e(`var(--m3e-outlined-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.onSurfaceVariant}))`), labelTextColor: e(`var(--m3e-outlined-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-hover-outline-color, var(--m3e-button-hover-outline-color, ${n.color.outlineVariant}))`), stateLayerColor: e(`var(--m3e-outlined-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.onSurfaceVariant}))`), stateLayerOpacity: e(`var(--m3e-outlined-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-outlined-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-outlined-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-outlined-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedStateLayerColor: e(`var(--m3e-outlined-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.inverseOnSurface}))`) }, focus: { iconColor: e(`var(--m3e-outlined-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.onSurfaceVariant}))`), labelTextColor: e(`var(--m3e-outlined-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-focus-outline-color, var(--m3e-button-focus-outline-color, ${n.color.outlineVariant}))`), stateLayerColor: e(`var(--m3e-outlined-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.onSurfaceVariant}))`), stateLayerOpacity: e(`var(--m3e-outlined-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-outlined-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-outlined-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-outlined-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedStateLayerColor: e(`var(--m3e-outlined-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.inverseOnSurface}))`) }, pressed: { iconColor: e(`var(--m3e-outlined-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.onSurfaceVariant}))`), labelTextColor: e(`var(--m3e-outlined-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-pressed-outline-color, var(--m3e-button-pressed-outline-color, ${n.color.outlineVariant}))`), stateLayerColor: e(`var(--m3e-outlined-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.onSurfaceVariant}))`), stateLayerOpacity: e(`var(--m3e-outlined-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-outlined-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-outlined-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-outlined-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedStateLayerColor: e(`var(--m3e-outlined-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.inverseOnSurface}))`) } }, filled: { labelTextColor: e(`var(--m3e-filled-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.onPrimary}))`), iconColor: e(`var(--m3e-filled-button-icon-color, var(--m3e-button-icon-color, ${n.color.onPrimary}))`), containerColor: e(`var(--m3e-filled-button-container-color, var(--m3e-button-container-color, ${n.color.primary}))`), containerElevation: e(`var(--m3e-filled-button-container-elevation, var(--m3e-button-container-elevation, ${n.elevation.level0}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedIconColor: e(`var(--m3e-filled-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedContainerColor: e(`var(--m3e-filled-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${n.color.surfaceContainer}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.onPrimary}))`), selectedIconColor: e(`var(--m3e-filled-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.onPrimary}))`), selectedContainerColor: e(`var(--m3e-filled-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.primary}))`), disabled: { containerColor: e(`var(--m3e-filled-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-filled-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-filled-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-filled-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-filled-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-filled-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), containerElevation: e(`var(--m3e-filled-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${n.elevation.level0}))`) }, hover: { iconColor: e(`var(--m3e-filled-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.onPrimary}))`), labelTextColor: e(`var(--m3e-filled-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.onPrimary}))`), stateLayerColor: e(`var(--m3e-filled-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.onPrimary}))`), stateLayerOpacity: e(`var(--m3e-filled-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), containerElevation: e(`var(--m3e-filled-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${n.elevation.level1}))`), unselectedIconColor: e(`var(--m3e-filled-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-filled-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-filled-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-filled-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.onPrimary}))`) }, focus: { iconColor: e(`var(--m3e-filled-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.onPrimary}))`), labelTextColor: e(`var(--m3e-filled-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.onPrimary}))`), stateLayerColor: e(`var(--m3e-filled-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.onPrimary}))`), stateLayerOpacity: e(`var(--m3e-filled-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), containerElevation: e(`var(--m3e-filled-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-filled-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-filled-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-filled-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-filled-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.onPrimary}))`) }, pressed: { iconColor: e(`var(--m3e-filled-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.onPrimary}))`), labelTextColor: e(`var(--m3e-filled-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.onPrimary}))`), stateLayerColor: e(`var(--m3e-filled-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.onPrimary}))`), stateLayerOpacity: e(`var(--m3e-filled-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), containerElevation: e(`var(--m3e-filled-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-filled-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-filled-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-filled-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-filled-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.onPrimary}))`) } }, tonal: { labelTextColor: e(`var(--m3e-tonal-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.onSecondaryContainer}))`), iconColor: e(`var(--m3e-tonal-button-icon-color, var(--m3e-button-icon-color, ${n.color.onSecondaryContainer}))`), containerColor: e(`var(--m3e-tonal-button-container-color, var(--m3e-button-container-color, ${n.color.secondaryContainer}))`), containerElevation: e(`var(--m3e-tonal-button-container-elevation, var(--m3e-button-container-elevation, ${n.elevation.level0}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedIconColor: e(`var(--m3e-tonal-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedContainerColor: e(`var(--m3e-tonal-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${n.color.secondaryContainer}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.onSecondary}))`), selectedIconColor: e(`var(--m3e-tonal-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.onSecondary}))`), selectedContainerColor: e(`var(--m3e-tonal-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.secondary}))`), disabled: { containerColor: e(`var(--m3e-tonal-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-tonal-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-tonal-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-tonal-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-tonal-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-tonal-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), containerElevation: e(`var(--m3e-tonal-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${n.elevation.level0}))`) }, hover: { iconColor: e(`var(--m3e-tonal-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.onSecondaryContainer}))`), labelTextColor: e(`var(--m3e-tonal-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.onSecondaryContainer}))`), stateLayerColor: e(`var(--m3e-tonal-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.onSecondaryContainer}))`), stateLayerOpacity: e(`var(--m3e-tonal-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), containerElevation: e(`var(--m3e-tonal-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${n.elevation.level1}))`), unselectedIconColor: e(`var(--m3e-tonal-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedStateLayerColor: e(`var(--m3e-tonal-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.onSecondaryContainer}))`), selectedIconColor: e(`var(--m3e-tonal-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.onSecondary}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.onSecondary}))`), selectedStateLayerColor: e(`var(--m3e-tonal-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.onSecondary}))`) }, focus: { iconColor: e(`var(--m3e-tonal-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.onSecondaryContainer}))`), labelTextColor: e(`var(--m3e-tonal-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.onSecondaryContainer}))`), stateLayerColor: e(`var(--m3e-tonal-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.onSecondaryContainer}))`), stateLayerOpacity: e(`var(--m3e-tonal-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), containerElevation: e(`var(--m3e-tonal-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-tonal-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedStateLayerColor: e(`var(--m3e-tonal-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.onSecondaryContainer}))`), selectedIconColor: e(`var(--m3e-tonal-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.onSecondary}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.onSecondary}))`), selectedStateLayerColor: e(`var(--m3e-tonal-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.onSecondary}))`) }, pressed: { iconColor: e(`var(--m3e-tonal-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.onSecondaryContainer}))`), labelTextColor: e(`var(--m3e-tonal-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.onSecondaryContainer}))`), stateLayerColor: e(`var(--m3e-tonal-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.onSecondaryContainer}))`), stateLayerOpacity: e(`var(--m3e-tonal-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), containerElevation: e(`var(--m3e-tonal-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-tonal-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedStateLayerColor: e(`var(--m3e-tonal-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.onSecondaryContainer}))`), selectedIconColor: e(`var(--m3e-tonal-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.onSecondary}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.onSecondary}))`), selectedStateLayerColor: e(`var(--m3e-tonal-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.onSecondary}))`) } }, text: { labelTextColor: e(`var(--m3e-text-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.primary}))`), iconColor: e(`var(--m3e-text-button-icon-color, var(--m3e-button-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-text-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.primary}))`), disabled: { containerColor: e(`var(--m3e-text-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-text-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-text-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-text-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-text-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-text-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))") }, hover: { iconColor: e(`var(--m3e-text-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-text-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-text-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-text-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-text-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-text-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.primary}))`), selectedStateLayerColor: e(`var(--m3e-text-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.primary}))`) }, focus: { iconColor: e(`var(--m3e-text-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-text-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-text-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-text-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-text-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-text-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.primary}))`), selectedStateLayerColor: e(`var(--m3e-text-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.primary}))`) }, pressed: { iconColor: e(`var(--m3e-text-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-text-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-text-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-text-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-text-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-text-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.primary}))`), selectedStateLayerColor: e(`var(--m3e-text-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.primary}))`) } } };
function Re(o2) {
  return L`:host([variant="${e(o2)}"]:not(:disabled):not([disabled-interactive])) .base { background-color: ${p[o2].containerColor ?? e("unset")}; --m3e-state-layer-hover-color: ${p[o2].hover.stateLayerColor}; --m3e-state-layer-hover-opacity: ${p[o2].hover.stateLayerOpacity}; --m3e-state-layer-focus-color: ${p[o2].focus.stateLayerColor}; --m3e-state-layer-focus-opacity: ${p[o2].focus.stateLayerOpacity}; --m3e-ripple-color: ${p[o2].pressed.stateLayerColor}; --m3e-ripple-opacity: ${p[o2].pressed.stateLayerOpacity}; --m3e-elevation-level: ${p[o2].containerElevation ?? e("unset")}; --m3e-elevation-hover-level: ${p[o2].hover.containerElevation ?? e("unset")}; --m3e-elevation-focus-level: ${p[o2].focus.containerElevation ?? e("unset")}; --m3e-elevation-pressed-level: ${p[o2].pressed.containerElevation ?? e("unset")}; } :host([variant="${e(o2)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .base { background-color: ${p[o2].unselectedContainerColor ?? e("unset")}; --m3e-state-layer-hover-color: ${p[o2].hover.unselectedStateLayerColor}; --m3e-state-layer-focus-color: ${p[o2].focus.unselectedStateLayerColor}; --m3e-ripple-color: ${p[o2].pressed.unselectedStateLayerColor}; } :host([variant="${e(o2)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .base { background-color: ${p[o2].selectedContainerColor ?? e("unset")}; --m3e-state-layer-hover-color: ${p[o2].hover.selectedStateLayerColor}; --m3e-state-layer-focus-color: ${p[o2].focus.selectedStateLayerColor}; --m3e-ripple-color: ${p[o2].pressed.selectedStateLayerColor}; } :host([variant="${e(o2)}"]:not(:disabled):not([disabled-interactive])) .base { outline-color: ${p[o2].outlineColor ?? e("unset")}; } :host([variant="${e(o2)}"]:focus:not(:disabled):not([disabled-interactive])) .base { outline-color: ${p[o2].focus.outlineColor ?? e("unset")}; } :host([variant="${e(o2)}"]:hover:not(:disabled):not([disabled-interactive])) .base { outline-color: ${p[o2].hover.outlineColor ?? e("unset")}; } :host( [variant="${e(o2)}"]:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive]) ) .base { outline-color: ${p[o2].pressed.outlineColor ?? e("unset")}; } :host([variant="${e(o2)}"]:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].labelTextColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].unselectedLabelTextColor}; } :host([variant="${e(o2)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].selectedLabelTextColor}; } :host([variant="${e(o2)}"]:focus:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].focus.labelTextColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):focus:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].focus.unselectedLabelTextColor}; } :host([variant="${e(o2)}"][toggle][selected]:focus:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].focus.selectedLabelTextColor}; } :host([variant="${e(o2)}"]:hover:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].hover.labelTextColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):hover:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].hover.unselectedLabelTextColor}; } :host([variant="${e(o2)}"][toggle][selected]:hover:not(:disabled):not([disabled-interactive])) .label { color: ${p[o2].hover.selectedLabelTextColor}; } :host( [variant="${e(o2)}"]:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive]) ) .label { color: ${p[o2].pressed.labelTextColor}; } :host( [variant="${e(o2)}"][toggle]:not([selected]):is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .label { color: ${p[o2].pressed.unselectedLabelTextColor}; } :host( [variant="${e(o2)}"][toggle][selected]:is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .label { color: ${p[o2].pressed.selectedLabelTextColor}; } :host([variant="${e(o2)}"]:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].iconColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].unselectedIconColor}; } :host([variant="${e(o2)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].selectedIconColor}; } :host([variant="${e(o2)}"]:focus:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].focus.iconColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):focus:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].focus.unselectedIconColor}; } :host([variant="${e(o2)}"][toggle][selected]:focus:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].focus.selectedIconColor}; } :host([variant="${e(o2)}"]:hover:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].hover.iconColor}; } :host([variant="${e(o2)}"][toggle]:not([selected]):hover:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].hover.unselectedIconColor}; } :host([variant="${e(o2)}"][toggle][selected]:hover:not(:disabled):not([disabled-interactive])) .icon { color: ${p[o2].hover.selectedIconColor}; } :host( [variant="${e(o2)}"]:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive]) ) .icon { color: ${p[o2].pressed.iconColor}; } :host( [variant="${e(o2)}"][toggle]:not([selected]):is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .icon { color: ${p[o2].pressed.unselectedIconColor}; } :host( [variant="${e(o2)}"][toggle][selected]:is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .icon { color: ${p[o2].pressed.selectedIconColor}; } :host([variant="${e(o2)}"]:disabled) .base, :host([variant="${e(o2)}"][disabled-interactive]) .base { --m3e-elevation-level: ${p[o2].disabled.containerElevation ?? e("unset")}; outline-color: ${p[o2].disabled.outlineColor ?? e("unset")}; background-color: color-mix( in srgb, ${p[o2].disabled.containerColor} ${p[o2].disabled.containerOpacity}, transparent ); } :host([variant="${e(o2)}"]:disabled) .label, :host([variant="${e(o2)}"][disabled-interactive]) .label { color: color-mix( in srgb, ${p[o2].disabled.labelTextColor} ${p[o2].disabled.labelTextOpacity}, transparent ); } :host([variant="${e(o2)}"]:disabled) .icon, :host([variant="${e(o2)}"][disabled-interactive]) .icon { color: color-mix( in srgb, ${p[o2].disabled.iconColor} ${p[o2].disabled.iconOpacity}, transparent ); }`;
}
const On = [Re("text"), Re("elevated"), Re("outlined"), Re("filled"), Re("tonal"), L`:host([variant="outlined"]:not([toggle][selected]):not(:disabled):not([disabled-interactive])) .base { outline-style: solid; }`];
var B, Dt, wa, Sa, vo, fo, go;
let z = class extends Rn(qn(Dn(In(Pn(Eo(Ut(me(E, "button"), true))))))) {
  constructor() {
    super(), B.add(this), this._adjacentPressedTimeout = -1, Dt.set(this, (t) => s(this, B, "m", wa).call(this, t)), this.variant = "text", this.shape = "rounded", this.size = "small", this.toggle = false, this.selected = false, new mn(this, { callback: () => this._handleResize() }), new it(this, { callback: (t) => {
      !this.disabledInteractive && !t && !this.grouped && this._base?.style.removeProperty("--_button-shape");
    } }), new wo(this, { isPressedKey: (t) => t === " ", minPressedDuration: 150, callback: (t) => {
      !this.disabled && !this.disabledInteractive && (t ? (s(this, B, "m", vo).call(this), s(this, B, "m", fo).call(this, true)) : s(this, B, "m", fo).call(this, false));
    } });
  }
  get grouped() {
    return Ot(this, "--grouped");
  }
  render() {
    return S`<div class="base"><m3e-elevation class="elevation" ?disabled="${this.disabled || this.disabledInteractive}"></m3e-elevation><m3e-state-layer class="state-layer" ?disabled="${this.disabled || this.disabledInteractive}"></m3e-state-layer><m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring><m3e-ripple class="ripple" ?disabled="${this.disabled || this.disabledInteractive}"></m3e-ripple><div class="touch" aria-hidden="true"></div>${this[ma]()}<div class="wrapper">${this.toggle ? S`<slot class="icon" name="selected-icon" aria-hidden="true" @slotchange="${s(this, B, "m", Sa)}"></slot>` : $}<slot class="icon" name="icon" aria-hidden="true"></slot><div class="label">${this.toggle && this.selected ? S`<slot name="selected"><slot></slot></slot>` : S`<slot></slot>`}</div><slot class="icon" name="trailing-icon" aria-hidden="true"></slot></div></div>`;
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", s(this, Dt, "f"));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), ["--pressed", "--resting", "--grouped", "--connected"].forEach((t) => k(this, t)), this._base?.style.removeProperty("--_button-shape"), this.style.removeProperty("--_button-width"), this.style.removeProperty("--_adjacent-shrink"), k(this, "--adjacent-pressed"), this.removeEventListener("click", s(this, Dt, "f"));
  }
  firstUpdated(t) {
    super.firstUpdated(t), [this._elevation, this._focusRing, this._stateLayer, this._ripple].forEach((a) => a?.attach(this));
  }
  updated(t) {
    if (super.updated(t), (t.has("disabled") && this.disabled || t.has("disabledInteractive") && this.disabledInteractive) && (k(this, "--pressed"), k(this, "--resting")), (t.has("toggle") || t.has("selected")) && (this.ariaPressed = this.toggle ? `${this.selected}` : null, this.toggle)) for (const a of this.querySelectorAll("m3e-icon")) a.toggleAttribute("filled", this.selected);
  }
  _handleResize() {
    this.grouped && !Ot(this, "--no-resize") && this !== document.activeElement && (this.style.setProperty("--_button-width", `${this.getBoundingClientRect().width}px`), s(this, B, "m", vo).call(this, true));
  }
};
Dt = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakSet();
wa = function(t) {
  (this.disabled || this.disabledInteractive) && (t.preventDefault(), t.stopImmediatePropagation()), this.toggle && !t.defaultPrevented && this.dispatchEvent(new Event("beforeinput", { bubbles: true, cancelable: true })) && (this.selected = !this.selected, this.dispatchEvent(new Event("input", { bubbles: true })), this.dispatchEvent(new Event("change", { bubbles: true })));
};
Sa = function(t) {
  this._base?.classList.toggle("with-selected-icon", un(t.target));
};
vo = function(t = false) {
  if (!this._base) return;
  const a = parseFloat(getComputedStyle(this._base).borderRadius);
  if (!isNaN(a) || t) {
    const r = this.clientHeight / 2;
    (r < a || t) && this._base?.style.setProperty("--_button-shape", `${r}px`);
  }
};
fo = function(t) {
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
      ht() ? s(this, B, "m", go).call(this, l) : this.addEventListener("transitionend", (c) => {
        c.propertyName === "width" && (this._adjacentPressedTimeout = setTimeout(() => {
          this._adjacentPressedTimeout > -1 && s(this, B, "m", go).call(this, l);
        }, 600));
      }, { once: true });
    }
  }
  ot(this, "--pressed", t), ot(this, "--resting", !t);
};
go = function(t) {
  for (const a of t) k(a, "--adjacent-pressed"), k(a, "--no-resize"), a.style.removeProperty("--_adjacent-shrink");
};
z.styles = [Hn, On, Bn];
m([X(".base")], z.prototype, "_base", void 0);
m([X(".elevation")], z.prototype, "_elevation", void 0);
m([X(".focus-ring")], z.prototype, "_focusRing", void 0);
m([X(".state-layer")], z.prototype, "_stateLayer", void 0);
m([X(".ripple")], z.prototype, "_ripple", void 0);
m([g({ reflect: true })], z.prototype, "variant", void 0);
m([g({ reflect: true })], z.prototype, "shape", void 0);
m([g({ reflect: true })], z.prototype, "size", void 0);
m([g({ type: Boolean, reflect: true })], z.prototype, "toggle", void 0);
m([g({ type: Boolean, reflect: true })], z.prototype, "selected", void 0);
m([So(40)], z.prototype, "_handleResize", null);
z = m([I("m3e-button")], z);
const Fn = ["aria-busy", "disabled", "selected", "shape", "size", "toggle", "type", "variant"], Rt = To({ __name: "MDButton", props: { nativeType: { default: "button" }, color: { default: "filled" }, label: {}, disabled: { type: Boolean }, loading: { type: [Number, Boolean] }, variant: { default: "default" }, size: { default: "small" }, shape: { default: "round" }, selected: { type: Boolean } }, emits: ["click", "update:selected"], setup(o2, { emit: t }) {
  const a = o2, r = t, l = La(), i = To({ name: "MDButtonIconSlot", setup(be, { slots: Mo }) {
    return () => Ia("span", { class: "md-button__icon", slot: "icon" }, Mo.default?.());
  } }), c = U(() => a.loading !== void 0 && a.loading !== false), h = U(() => a.color === "text" && a.variant === "toggle"), u = U(() => a.variant === "toggle" && !h.value), b = U(() => u.value && !!a.selected), f = U(() => a.color), v = U(() => a.size), D = U(() => a.shape === "round" ? "rounded" : "square"), W = U(() => a.nativeType), pe = (be) => {
    u.value && (be.preventDefault(), r("update:selected", !b.value));
  }, Ea = (be) => {
    r("click", be);
  };
  return (be, Mo) => (Xt(), Ma("m3e-button", { class: "md-button", "aria-busy": c.value ? "true" : void 0, disabled: a.disabled, selected: b.value, shape: D.value, size: v.value, toggle: u.value, type: W.value, variant: f.value, onBeforeinput: pe, onClick: Pa(Ea, ["stop"]) }, [l.icon ? (Xt(), zo(Gt(i), { key: 0, class: Ao({ "md-button__content_loading": c.value }) }, { default: Ta(() => [Da(be.$slots, "icon", {}, void 0, true)]), _: 3 }, 8, ["class"])) : Po("", true), za("span", { class: Ao(["md-button__label-text", { "md-button__content_loading": c.value }]) }, Aa(a.label), 3), c.value ? (Xt(), zo(Gt(qa), { key: 1, class: "md-button__progress-indicator md-button__progress-indicator_centered", progress: Gt(Ra)(a.loading) ? a.loading : void 0, size: 24 }, null, 8, ["progress"])) : Po("", true)], 40, Fn));
} }), lr = Wa(Rt, [["__scopeId", "data-v-e346b65e"]]);
Rt.__docgenInfo = Object.assign({ displayName: Rt.name ?? Rt.__name }, { exportName: "default", displayName: "MDButton", type: 1, props: [{ name: "nativeType", global: false, description: "Native button type. Defaults to `button` to avoid accidental form submission.", tags: [], required: false, type: '"button" | "submit" | "reset" | undefined', declarations: [], schema: { kind: "enum", type: '"button" | "submit" | "reset" | undefined', schema: ["undefined", '"button"', '"submit"', '"reset"'] }, default: '"button"' }, { name: "color", global: false, description: "Material Button appearance.", tags: [], required: false, type: '"filled" | "elevated" | "tonal" | "outlined" | "text" | undefined', declarations: [], schema: { kind: "enum", type: '"filled" | "elevated" | "tonal" | "outlined" | "text" | undefined', schema: ["undefined", '"filled"', '"elevated"', '"tonal"', '"outlined"', '"text"'] }, default: '"filled"' }, { name: "label", global: false, description: "Visible label and accessible name.", tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "disabled", global: false, description: "Blocks focus and activation through the renderer's documented disabled contract.", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "loading", global: false, description: "Shows an indeterminate or determinate progress indicator while preserving activation.", tags: [], required: false, type: "number | boolean | undefined", declarations: [], schema: { kind: "enum", type: "number | boolean | undefined", schema: ["undefined", "number", "false", "true"] } }, { name: "variant", global: false, description: "Stateless action or consumer-controlled toggle intent.", tags: [], required: false, type: '"default" | "toggle" | undefined', declarations: [], schema: { kind: "enum", type: '"default" | "toggle" | undefined', schema: ["undefined", '"default"', '"toggle"'] }, default: '"default"' }, { name: "size", global: false, description: "Material Button size.", tags: [], required: false, type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', declarations: [], schema: { kind: "enum", type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', schema: ["undefined", '"small"', '"extra-small"', '"medium"', '"large"', '"extra-large"'] }, default: '"small"' }, { name: "shape", global: false, description: "Round or square container shape.", tags: [], required: false, type: '"round" | "square" | undefined', declarations: [], schema: { kind: "enum", type: '"round" | "square" | undefined', schema: ["undefined", '"round"', '"square"'] }, default: '"round"' }, { name: "selected", global: false, description: "Consumer-controlled toggle selection. Ignored for default and text buttons.", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "key", global: true, description: "", tags: [], required: false, type: "PropertyKey", declarations: [], schema: { kind: "enum", type: "PropertyKey", schema: ["string", "number", "symbol"] } }, { name: "ref", global: true, description: "", tags: [], required: false, type: "VNodeRef", declarations: [], schema: { kind: "enum", type: "VNodeRef", schema: ["string", "Ref<any, any>", { kind: "event", type: "(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void" }] } }, { name: "ref_for", global: true, description: "", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "ref_key", global: true, description: "", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "class", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "style", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "tabindex", global: true, description: "", tags: [], required: false, type: "string | number", declarations: [], schema: { kind: "enum", type: "string | number", schema: ["string", "number"] } }, { name: "aria-activedescendant", global: true, description: "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-atomic", global: true, description: "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-autocomplete", global: true, description: `Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`, tags: [], required: false, type: '"none" | "inline" | "list" | "both" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "inline" | "list" | "both" | undefined', schema: ["undefined", '"none"', '"inline"', '"list"', '"both"'] } }, { name: "aria-busy", global: true, description: "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-checked", global: true, description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.', tags: [{ name: "see", text: "aria-pressed" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-colcount", global: true, description: "Defines the total number of columns in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colindex", global: true, description: "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colcount" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colspan", global: true, description: "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-controls", global: true, description: "Identifies the element (or elements) whose contents or presence are controlled by the current element.", tags: [{ name: "see", text: "aria-owns." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-current", global: true, description: "Indicates the element that represents the current item within a container or set of related elements.", tags: [], required: false, type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"page"', '"step"', '"location"', '"date"', '"time"'] } }, { name: "aria-describedby", global: true, description: "Identifies the element (or elements) that describes the object.", tags: [{ name: "see", text: "aria-labelledby" }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-details", global: true, description: "Identifies the element that provides a detailed, extended description for the object.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-disabled", global: true, description: "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.", tags: [{ name: "see", text: "aria-hidden" }, { name: "see", text: "aria-readonly." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-dropeffect", global: true, description: "Indicates what functions can be performed when a dragged object is released on the drop target.", tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: '"none" | "link" | "copy" | "execute" | "move" | "popup" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "link" | "copy" | "execute" | "move" | "popup" | undefined', schema: ["undefined", '"none"', '"link"', '"copy"', '"execute"', '"move"', '"popup"'] } }, { name: "aria-errormessage", global: true, description: "Identifies the element that provides an error message for the object.", tags: [{ name: "see", text: "aria-invalid" }, { name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-expanded", global: true, description: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-flowto", global: true, description: `Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-grabbed", global: true, description: `Indicates an element's "grabbed" state in a drag-and-drop operation.`, tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-haspopup", global: true, description: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", tags: [], required: false, type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"menu"', '"listbox"', '"tree"', '"grid"', '"dialog"'] } }, { name: "aria-hidden", global: true, description: "Indicates whether the element is exposed to an accessibility API.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-invalid", global: true, description: "Indicates the entered value does not conform to the format expected by the application.", tags: [{ name: "see", text: "aria-errormessage." }], required: false, type: 'Booleanish | "grammar" | "spelling" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "grammar" | "spelling" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"grammar"', '"spelling"'] } }, { name: "aria-keyshortcuts", global: true, description: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-label", global: true, description: "Defines a string value that labels the current element.", tags: [{ name: "see", text: "aria-labelledby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-labelledby", global: true, description: "Identifies the element (or elements) that labels the current element.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-level", global: true, description: "Defines the hierarchical level of an element within a structure.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-live", global: true, description: "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", tags: [], required: false, type: '"off" | "assertive" | "polite" | undefined', declarations: [], schema: { kind: "enum", type: '"off" | "assertive" | "polite" | undefined', schema: ["undefined", '"off"', '"assertive"', '"polite"'] } }, { name: "aria-modal", global: true, description: "Indicates whether an element is modal when displayed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiline", global: true, description: "Indicates whether a text box accepts multiple lines of input or only a single line.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiselectable", global: true, description: "Indicates that the user may select more than one item from the current selectable descendants.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-orientation", global: true, description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", tags: [], required: false, type: '"horizontal" | "vertical" | undefined', declarations: [], schema: { kind: "enum", type: '"horizontal" | "vertical" | undefined', schema: ["undefined", '"horizontal"', '"vertical"'] } }, { name: "aria-owns", global: true, description: `Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.`, tags: [{ name: "see", text: "aria-controls." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-placeholder", global: true, description: `Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-posinset", global: true, description: "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-setsize." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-pressed", global: true, description: 'Indicates the current "pressed" state of toggle buttons.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-readonly", global: true, description: "Indicates that the element is not editable, but is otherwise operable.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-relevant", global: true, description: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.", tags: [{ name: "see", text: "aria-atomic." }], required: false, type: '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined', declarations: [], schema: { kind: "enum", type: '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined', schema: ["undefined", '"text"', '"additions"', '"additions removals"', '"additions text"', '"all"', '"removals"', '"removals additions"', '"removals text"', '"text additions"', '"text removals"'] } }, { name: "aria-required", global: true, description: "Indicates that user input is required on the element before a form may be submitted.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-roledescription", global: true, description: "Defines a human-readable, author-localized description for the role of an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-rowcount", global: true, description: "Defines the total number of rows in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowindex", global: true, description: "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowcount" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowspan", global: true, description: "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-selected", global: true, description: 'Indicates the current "selected" state of various widgets.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-pressed." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-setsize", global: true, description: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-posinset." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-sort", global: true, description: "Indicates if items in a table or grid are sorted in ascending or descending order.", tags: [], required: false, type: '"none" | "ascending" | "descending" | "other" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "ascending" | "descending" | "other" | undefined', schema: ["undefined", '"none"', '"ascending"', '"descending"', '"other"'] } }, { name: "aria-valuemax", global: true, description: "Defines the maximum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuemin", global: true, description: "Defines the minimum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuenow", global: true, description: "Defines the current value for a range widget.", tags: [{ name: "see", text: "aria-valuetext." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuetext", global: true, description: "Defines the human readable text alternative of aria-valuenow for a range widget.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: false, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }], events: [{ name: "click", description: "Stable action event normalized from the renderer host click.", tags: [], type: "[event: MouseEvent]", signature: '(event: "click", event: MouseEvent): void', declarations: [], schema: [{ kind: "object", type: "MouseEvent" }] }, { name: "update:selected", description: "Controlled toggle intent; the parent remains the selected-state owner.", tags: [], type: "[selected: boolean]", signature: '(event: "update:selected", selected: boolean): void', declarations: [], schema: [{ kind: "enum", type: "boolean", schema: ["false", "true"] }] }], slots: [{ name: "icon", type: "any", description: "Leading icon content.", declarations: [], schema: "any" }], exposed: [{ name: "$slots", type: "Readonly<InternalSlots> & __VLS_Slots", description: "", declarations: [], schema: { kind: "object", type: "Readonly<InternalSlots> & __VLS_Slots" } }, { name: "nativeType", type: '"button" | "submit" | "reset" | undefined', description: "Native button type. Defaults to `button` to avoid accidental form submission.", declarations: [], schema: { kind: "enum", type: '"button" | "submit" | "reset" | undefined', schema: ["undefined", '"button"', '"submit"', '"reset"'] } }, { name: "color", type: '"filled" | "elevated" | "tonal" | "outlined" | "text" | undefined', description: "Material Button appearance.", declarations: [], schema: { kind: "enum", type: '"filled" | "elevated" | "tonal" | "outlined" | "text" | undefined', schema: ["undefined", '"filled"', '"elevated"', '"tonal"', '"outlined"', '"text"'] } }, { name: "variant", type: '"default" | "toggle" | undefined', description: "Stateless action or consumer-controlled toggle intent.", declarations: [], schema: { kind: "enum", type: '"default" | "toggle" | undefined', schema: ["undefined", '"default"', '"toggle"'] } }, { name: "size", type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', description: "Material Button size.", declarations: [], schema: { kind: "enum", type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', schema: ["undefined", '"small"', '"extra-small"', '"medium"', '"large"', '"extra-large"'] } }, { name: "shape", type: '"round" | "square" | undefined', description: "Round or square container shape.", declarations: [], schema: { kind: "enum", type: '"round" | "square" | undefined', schema: ["undefined", '"round"', '"square"'] } }, { name: "label", type: "string", description: "Visible label and accessible name.", declarations: [], schema: "string" }, { name: "disabled", type: "boolean | undefined", description: "Blocks focus and activation through the renderer's documented disabled contract.", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "loading", type: "number | boolean | undefined", description: "Shows an indeterminate or determinate progress indicator while preserving activation.", declarations: [], schema: { kind: "enum", type: "number | boolean | undefined", schema: ["undefined", "number", "false", "true"] } }, { name: "selected", type: "boolean | undefined", description: "Consumer-controlled toggle selection. Ignored for default and text buttons.", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/material/components/button/MDButton.vue" });
export {
  lr as M
};
