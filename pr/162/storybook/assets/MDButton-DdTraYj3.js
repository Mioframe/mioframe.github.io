import { d as Do, E as Ra, c as qa, g as De, w as pt, n as Re, u as ve, G as qe, a as Ba, t as Wa, S as Ha, A as Oa, l as T, z as bt, e as fe } from "./iframe-DHmUp80w.js";
import { i as Fa } from "./isNumber-BeRyA-l4.js";
import { M as Na } from "./MDCircularProgressIndicator-CnwS-4iP.js";
import { _ as Va } from "./_plugin-vue_export-helper-DlAUqK2U.js";
function m(a2, t, o, r) {
  var l = arguments.length, i = l < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, o) : r, d;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(a2, t, o, r);
  else for (var h = a2.length - 1; h >= 0; h--) (d = a2[h]) && (i = (l < 3 ? d(i) : l > 3 ? d(t, o, i) : d(t, o)) || i);
  return l > 3 && i && Object.defineProperty(t, o, i), i;
}
function s(a2, t, o, r) {
  if (o === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? a2 !== t || !r : !t.has(a2)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? r : o === "a" ? r.call(a2) : r ? r.value : t.get(a2);
}
function y(a2, t, o, r, l) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !l) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? a2 !== t || !l : !t.has(a2)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? l.call(a2, o) : l ? l.value = o : t.set(a2, o), o;
}
const gt = globalThis, Co = gt.ShadowRoot && (gt.ShadyCSS === void 0 || gt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, wo = /* @__PURE__ */ Symbol(), Ro = /* @__PURE__ */ new WeakMap();
let Yo = class {
  constructor(t, o, r) {
    if (this._$cssResult$ = true, r !== wo) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = o;
  }
  get styleSheet() {
    let t = this.o;
    const o = this.t;
    if (Co && t === void 0) {
      const r = o !== void 0 && o.length === 1;
      r && (t = Ro.get(o)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Ro.set(o, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const e = (a2) => new Yo(typeof a2 == "string" ? a2 : a2 + "", void 0, wo), L = (a2, ...t) => {
  const o = a2.length === 1 ? a2[0] : t.reduce((r, l, i) => r + ((d) => {
    if (d._$cssResult$ === true) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(l) + a2[i + 1], a2[0]);
  return new Yo(o, a2, wo);
}, Ua = (a2, t) => {
  if (Co) a2.adoptedStyleSheets = t.map((o) => o instanceof CSSStyleSheet ? o : o.styleSheet);
  else for (const o of t) {
    const r = document.createElement("style"), l = gt.litNonce;
    l !== void 0 && r.setAttribute("nonce", l), r.textContent = o.cssText, a2.appendChild(r);
  }
}, qo = Co ? (a2) => a2 : (a2) => a2 instanceof CSSStyleSheet ? ((t) => {
  let o = "";
  for (const r of t.cssRules) o += r.cssText;
  return e(o);
})(a2) : a2;
const { is: ja, defineProperty: Ka, getOwnPropertyDescriptor: Ga, getOwnPropertyNames: Xa, getOwnPropertySymbols: Ya, getPrototypeOf: Za } = Object, Yt = globalThis, Bo = Yt.trustedTypes, Ja = Bo ? Bo.emptyScript : "", Qa = Yt.reactiveElementPolyfillSupport, Ze = (a2, t) => a2, Vt = { toAttribute(a2, t) {
  switch (t) {
    case Boolean:
      a2 = a2 ? Ja : null;
      break;
    case Object:
    case Array:
      a2 = a2 == null ? a2 : JSON.stringify(a2);
  }
  return a2;
}, fromAttribute(a2, t) {
  let o = a2;
  switch (t) {
    case Boolean:
      o = a2 !== null;
      break;
    case Number:
      o = a2 === null ? null : Number(a2);
      break;
    case Object:
    case Array:
      try {
        o = JSON.parse(a2);
      } catch {
        o = null;
      }
  }
  return o;
} }, So = (a2, t) => !ja(a2, t), Wo = { attribute: true, type: String, converter: Vt, reflect: false, useDefault: false, hasChanged: So };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), Yt.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let $e = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, o = Wo) {
    if (o.state && (o.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t) && ((o = Object.create(o)).wrapped = true), this.elementProperties.set(t, o), !o.noAccessor) {
      const r = /* @__PURE__ */ Symbol(), l = this.getPropertyDescriptor(t, r, o);
      l !== void 0 && Ka(this.prototype, t, l);
    }
  }
  static getPropertyDescriptor(t, o, r) {
    const { get: l, set: i } = Ga(this.prototype, t) ?? { get() {
      return this[o];
    }, set(d) {
      this[o] = d;
    } };
    return { get: l, set(d) {
      const h = l?.call(this);
      i?.call(this, d), this.requestUpdate(t, h, r);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Wo;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ze("elementProperties"))) return;
    const t = Za(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ze("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(Ze("properties"))) {
      const o = this.properties, r = [...Xa(o), ...Ya(o)];
      for (const l of r) this.createProperty(l, o[l]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const o = litPropertyMetadata.get(t);
      if (o !== void 0) for (const [r, l] of o) this.elementProperties.set(r, l);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [o, r] of this.elementProperties) {
      const l = this._$Eu(o, r);
      l !== void 0 && this._$Eh.set(l, o);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const o = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const l of r) o.unshift(qo(l));
    } else t !== void 0 && o.push(qo(t));
    return o;
  }
  static _$Eu(t, o) {
    const r = o.attribute;
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
    const t = /* @__PURE__ */ new Map(), o = this.constructor.elementProperties;
    for (const r of o.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ua(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, o, r) {
    this._$AK(t, r);
  }
  _$ET(t, o) {
    const r = this.constructor.elementProperties.get(t), l = this.constructor._$Eu(t, r);
    if (l !== void 0 && r.reflect === true) {
      const i = (r.converter?.toAttribute !== void 0 ? r.converter : Vt).toAttribute(o, r.type);
      this._$Em = t, i == null ? this.removeAttribute(l) : this.setAttribute(l, i), this._$Em = null;
    }
  }
  _$AK(t, o) {
    const r = this.constructor, l = r._$Eh.get(t);
    if (l !== void 0 && this._$Em !== l) {
      const i = r.getPropertyOptions(l), d = typeof i.converter == "function" ? { fromAttribute: i.converter } : i.converter?.fromAttribute !== void 0 ? i.converter : Vt;
      this._$Em = l;
      const h = d.fromAttribute(o, i.type);
      this[l] = h ?? this._$Ej?.get(l) ?? h, this._$Em = null;
    }
  }
  requestUpdate(t, o, r, l = false, i) {
    if (t !== void 0) {
      const d = this.constructor;
      if (l === false && (i = this[t]), r ??= d.getPropertyOptions(t), !((r.hasChanged ?? So)(i, o) || r.useDefault && r.reflect && i === this._$Ej?.get(t) && !this.hasAttribute(d._$Eu(t, r)))) return;
      this.C(t, o, r);
    }
    this.isUpdatePending === false && (this._$ES = this._$EP());
  }
  C(t, o, { useDefault: r, reflect: l, wrapped: i }, d) {
    r && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, d ?? o ?? this[t]), i !== true || d !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (o = void 0), this._$AL.set(t, o)), l === true && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (o) {
      Promise.reject(o);
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
        const { wrapped: d } = i, h = this[l];
        d !== true || this._$AL.has(l) || h === void 0 || this.C(l, void 0, i, h);
      }
    }
    let t = false;
    const o = this._$AL;
    try {
      t = this.shouldUpdate(o), t ? (this.willUpdate(o), this._$EO?.forEach((r) => r.hostUpdate?.()), this.update(o)) : this._$EM();
    } catch (r) {
      throw t = false, this._$EM(), r;
    }
    t && this._$AE(o);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((o) => o.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t)), this.updated(t);
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
    this._$Eq &&= this._$Eq.forEach((o) => this._$ET(o, this[o])), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
$e.elementStyles = [], $e.shadowRootOptions = { mode: "open" }, $e[Ze("elementProperties")] = /* @__PURE__ */ new Map(), $e[Ze("finalized")] = /* @__PURE__ */ new Map(), Qa?.({ ReactiveElement: $e }), (Yt.reactiveElementVersions ??= []).push("2.1.2");
const Eo = globalThis, Ho = (a2) => a2, Ut = Eo.trustedTypes, Oo = Ut ? Ut.createPolicy("lit-html", { createHTML: (a2) => a2 }) : void 0, Zo = "$lit$", K = `lit$${Math.random().toFixed(9).slice(2)}$`, Jo = "?" + K, en = `<${Jo}>`, ue = document, nt = () => ue.createComment(""), rt = (a2) => a2 === null || typeof a2 != "object" && typeof a2 != "function", Lo = Array.isArray, tn = (a2) => Lo(a2) || typeof a2?.[Symbol.iterator] == "function", to = `[ 	
\f\r]`, Be = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Fo = /-->/g, No = />/g, Z = RegExp(`>|${to}(?:([^\\s"'>=/]+)(${to}*=${to}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Vo = /'/g, Uo = /"/g, Qo = /^(?:script|style|textarea|title)$/i, on = (a2) => (t, ...o) => ({ _$litType$: a2, strings: t, values: o }), S = on(1), Le = /* @__PURE__ */ Symbol.for("lit-noChange"), $ = /* @__PURE__ */ Symbol.for("lit-nothing"), jo = /* @__PURE__ */ new WeakMap(), se = ue.createTreeWalker(ue, 129);
function ea(a2, t) {
  if (!Lo(a2) || !a2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Oo !== void 0 ? Oo.createHTML(t) : t;
}
const an = (a2, t) => {
  const o = a2.length - 1, r = [];
  let l, i = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", d = Be;
  for (let h = 0; h < o; h++) {
    const u = a2[h];
    let b, f, v = -1, R = 0;
    for (; R < u.length && (d.lastIndex = R, f = d.exec(u), f !== null); ) R = d.lastIndex, d === Be ? f[1] === "!--" ? d = Fo : f[1] !== void 0 ? d = No : f[2] !== void 0 ? (Qo.test(f[2]) && (l = RegExp("</" + f[2], "g")), d = Z) : f[3] !== void 0 && (d = Z) : d === Z ? f[0] === ">" ? (d = l ?? Be, v = -1) : f[1] === void 0 ? v = -2 : (v = d.lastIndex - f[2].length, b = f[1], d = f[3] === void 0 ? Z : f[3] === '"' ? Uo : Vo) : d === Uo || d === Vo ? d = Z : d === Fo || d === No ? d = Be : (d = Z, l = void 0);
    const W = d === Z && a2[h + 1].startsWith("/>") ? " " : "";
    i += d === Be ? u + en : v >= 0 ? (r.push(b), u.slice(0, v) + Zo + u.slice(v) + K + W) : u + K + (v === -2 ? h : W);
  }
  return [ea(a2, i + (a2[o] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class st {
  constructor({ strings: t, _$litType$: o }, r) {
    let l;
    this.parts = [];
    let i = 0, d = 0;
    const h = t.length - 1, u = this.parts, [b, f] = an(t, o);
    if (this.el = st.createElement(b, r), se.currentNode = this.el.content, o === 2 || o === 3) {
      const v = this.el.content.firstChild;
      v.replaceWith(...v.childNodes);
    }
    for (; (l = se.nextNode()) !== null && u.length < h; ) {
      if (l.nodeType === 1) {
        if (l.hasAttributes()) for (const v of l.getAttributeNames()) if (v.endsWith(Zo)) {
          const R = f[d++], W = l.getAttribute(v).split(K), be = /([.?@])?(.*)/.exec(R);
          u.push({ type: 1, index: i, name: be[2], strings: W, ctor: be[1] === "." ? rn : be[1] === "?" ? sn : be[1] === "@" ? ln : Zt }), l.removeAttribute(v);
        } else v.startsWith(K) && (u.push({ type: 6, index: i }), l.removeAttribute(v));
        if (Qo.test(l.tagName)) {
          const v = l.textContent.split(K), R = v.length - 1;
          if (R > 0) {
            l.textContent = Ut ? Ut.emptyScript : "";
            for (let W = 0; W < R; W++) l.append(v[W], nt()), se.nextNode(), u.push({ type: 2, index: ++i });
            l.append(v[R], nt());
          }
        }
      } else if (l.nodeType === 8) if (l.data === Jo) u.push({ type: 2, index: i });
      else {
        let v = -1;
        for (; (v = l.data.indexOf(K, v + 1)) !== -1; ) u.push({ type: 7, index: i }), v += K.length - 1;
      }
      i++;
    }
  }
  static createElement(t, o) {
    const r = ue.createElement("template");
    return r.innerHTML = t, r;
  }
}
function Me(a2, t, o = a2, r) {
  if (t === Le) return t;
  let l = r !== void 0 ? o._$Co?.[r] : o._$Cl;
  const i = rt(t) ? void 0 : t._$litDirective$;
  return l?.constructor !== i && (l?._$AO?.(false), i === void 0 ? l = void 0 : (l = new i(a2), l._$AT(a2, o, r)), r !== void 0 ? (o._$Co ??= [])[r] = l : o._$Cl = l), l !== void 0 && (t = Me(a2, l._$AS(a2, t.values), l, r)), t;
}
class nn {
  constructor(t, o) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = o;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: o }, parts: r } = this._$AD, l = (t?.creationScope ?? ue).importNode(o, true);
    se.currentNode = l;
    let i = se.nextNode(), d = 0, h = 0, u = r[0];
    for (; u !== void 0; ) {
      if (d === u.index) {
        let b;
        u.type === 2 ? b = new ut(i, i.nextSibling, this, t) : u.type === 1 ? b = new u.ctor(i, u.name, u.strings, this, t) : u.type === 6 && (b = new dn(i, this, t)), this._$AV.push(b), u = r[++h];
      }
      d !== u?.index && (i = se.nextNode(), d++);
    }
    return se.currentNode = ue, l;
  }
  p(t) {
    let o = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, o), o += r.strings.length - 2) : r._$AI(t[o])), o++;
  }
}
class ut {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, o, r, l) {
    this.type = 2, this._$AH = $, this._$AN = void 0, this._$AA = t, this._$AB = o, this._$AM = r, this.options = l, this._$Cv = l?.isConnected ?? true;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const o = this._$AM;
    return o !== void 0 && t?.nodeType === 11 && (t = o.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, o = this) {
    t = Me(this, t, o), rt(t) ? t === $ || t == null || t === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : t !== this._$AH && t !== Le && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : tn(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== $ && rt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(ue.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: o, _$litType$: r } = t, l = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = st.createElement(ea(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === l) this._$AH.p(o);
    else {
      const i = new nn(l, this), d = i.u(this.options);
      i.p(o), this.T(d), this._$AH = i;
    }
  }
  _$AC(t) {
    let o = jo.get(t.strings);
    return o === void 0 && jo.set(t.strings, o = new st(t)), o;
  }
  k(t) {
    Lo(this._$AH) || (this._$AH = [], this._$AR());
    const o = this._$AH;
    let r, l = 0;
    for (const i of t) l === o.length ? o.push(r = new ut(this.O(nt()), this.O(nt()), this, this.options)) : r = o[l], r._$AI(i), l++;
    l < o.length && (this._$AR(r && r._$AB.nextSibling, l), o.length = l);
  }
  _$AR(t = this._$AA.nextSibling, o) {
    for (this._$AP?.(false, true, o); t !== this._$AB; ) {
      const r = Ho(t).nextSibling;
      Ho(t).remove(), t = r;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class Zt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, o, r, l, i) {
    this.type = 1, this._$AH = $, this._$AN = void 0, this.element = t, this.name = o, this._$AM = l, this.options = i, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = $;
  }
  _$AI(t, o = this, r, l) {
    const i = this.strings;
    let d = false;
    if (i === void 0) t = Me(this, t, o, 0), d = !rt(t) || t !== this._$AH && t !== Le, d && (this._$AH = t);
    else {
      const h = t;
      let u, b;
      for (t = i[0], u = 0; u < i.length - 1; u++) b = Me(this, h[r + u], o, u), b === Le && (b = this._$AH[u]), d ||= !rt(b) || b !== this._$AH[u], b === $ ? t = $ : t !== $ && (t += (b ?? "") + i[u + 1]), this._$AH[u] = b;
    }
    d && !l && this.j(t);
  }
  j(t) {
    t === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class rn extends Zt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === $ ? void 0 : t;
  }
}
class sn extends Zt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== $);
  }
}
class ln extends Zt {
  constructor(t, o, r, l, i) {
    super(t, o, r, l, i), this.type = 5;
  }
  _$AI(t, o = this) {
    if ((t = Me(this, t, o, 0) ?? $) === Le) return;
    const r = this._$AH, l = t === $ && r !== $ || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, i = t !== $ && (r === $ || l);
    l && this.element.removeEventListener(this.name, this, r), i && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class dn {
  constructor(t, o, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = o, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Me(this, t);
  }
}
const cn = Eo.litHtmlPolyfillSupport;
cn?.(st, ut), (Eo.litHtmlVersions ??= []).push("3.3.3");
const un = (a2, t, o) => {
  const r = o?.renderBefore ?? t;
  let l = r._$litPart$;
  if (l === void 0) {
    const i = o?.renderBefore ?? null;
    r._$litPart$ = l = new ut(t.insertBefore(nt(), i), i, void 0, o ?? {});
  }
  return l._$AI(a2), l;
};
const Mo = globalThis;
class E extends $e {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const o = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = un(o, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return Le;
  }
}
E._$litElement$ = true, E.finalized = true, Mo.litElementHydrateSupport?.({ LitElement: E });
const hn = Mo.litElementPolyfillSupport;
hn?.({ LitElement: E });
(Mo.litElementVersions ??= []).push("4.2.2");
const mn = { attribute: true, type: String, converter: Vt, reflect: false, hasChanged: So }, pn = (a2 = mn, t, o) => {
  const { kind: r, metadata: l } = o;
  let i = globalThis.litPropertyMetadata.get(l);
  if (i === void 0 && globalThis.litPropertyMetadata.set(l, i = /* @__PURE__ */ new Map()), r === "setter" && ((a2 = Object.create(a2)).wrapped = true), i.set(o.name, a2), r === "accessor") {
    const { name: d } = o;
    return { set(h) {
      const u = t.get.call(this);
      t.set.call(this, h), this.requestUpdate(d, u, a2, true, h);
    }, init(h) {
      return h !== void 0 && this.C(d, void 0, a2, h), h;
    } };
  }
  if (r === "setter") {
    const { name: d } = o;
    return function(h) {
      const u = this[d];
      t.call(this, h), this.requestUpdate(d, u, a2, true, h);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function g(a2) {
  return (t, o) => typeof o == "object" ? pn(a2, t, o) : ((r, l, i) => {
    const d = l.hasOwnProperty(i);
    return l.constructor.createProperty(i, r), d ? Object.getOwnPropertyDescriptor(l, i) : void 0;
  })(a2, t, o);
}
const bn = (a2, t, o) => (o.configurable = true, o.enumerable = true, Reflect.decorate && typeof t != "object" && Object.defineProperty(a2, t, o), o);
function Y(a2, t) {
  return (o, r, l) => {
    const i = (d) => d.renderRoot?.querySelector(a2) ?? null;
    return bn(o, r, { get() {
      return i(this);
    } });
  };
}
const oo = (a2) => a2 ?? $;
var Fe, Ne, O;
class ht {
  constructor(t, o) {
    Fe.set(this, void 0), Ne.set(this, void 0), O.set(this, /* @__PURE__ */ new Set()), y(this, Fe, t, "f"), y(this, Ne, o.target, "f"), s(this, Fe, "f").addController(this);
  }
  get targets() {
    return s(this, O, "f").values();
  }
  get hasTargets() {
    return s(this, O, "f").size > 0;
  }
  hostConnected() {
    s(this, Ne, "f") !== null && this.observe(s(this, Ne, "f") ?? s(this, Fe, "f"));
  }
  hostDisconnected() {
    this.unobserveAll();
  }
  observe(t) {
    s(this, O, "f").has(t) || (s(this, O, "f").add(t), this._observe(t));
  }
  isObserving(t) {
    return s(this, O, "f").has(t);
  }
  unobserve(t) {
    s(this, O, "f").delete(t) && this._unobserve(t);
  }
  unobserveAll() {
    s(this, O, "f").forEach((t) => this.unobserve(t)), s(this, O, "f").clear();
  }
}
Fe = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap();
function vn() {
  return matchMedia("(forced-colors: active)").matches;
}
function fn(a2) {
  return a2.assignedNodes({ flatten: true }).length > 0;
}
function yt() {
  return matchMedia("(prefers-reduced-motion)").matches;
}
function gn(a2, t = document) {
  return new Promise((o) => {
    const r = t.querySelector(`#${a2}`);
    if (r) {
      o(r);
      return;
    }
    if (document.readyState === "complete" || document.readyState === "interactive") {
      o(t.querySelector(`#${a2}`));
      return;
    }
    document.addEventListener("DOMContentLoaded", () => o(t.querySelector(`#${a2}`)), { once: true });
  });
}
var we, le, Ee, Je, Se, xt, $t, _t, kt, _e, jt, ta, uo, oa;
class mt extends ht {
  constructor(t, o) {
    super(t, o), we.add(this), Ee.set(this, false), Je.set(this, void 0), Se.set(this, void 0), xt.set(this, (r) => s(this, we, "m", ta).call(this, r)), $t.set(this, (r) => s(this, we, "m", uo).call(this, r)), _t.set(this, (r) => s(this, we, "m", oa).call(this, r)), kt.set(this, () => y(this, Ee, true, "f")), _e.set(this, () => y(this, Ee, false, "f")), y(this, Je, o.callback, "f"), y(this, Se, o.filter, "f");
  }
  _observe(t) {
    t.addEventListener("keydown", s(this, xt, "f")), t.addEventListener("focusin", s(this, $t, "f")), t.addEventListener("focusout", s(this, _t, "f")), t.addEventListener("touchstart", s(this, kt, "f"), { passive: true }), t.addEventListener("touchend", s(this, _e, "f")), t.addEventListener("touchcancel", s(this, _e, "f"));
  }
  _unobserve(t) {
    t.removeEventListener("keydown", s(this, xt, "f")), t.removeEventListener("focusin", s(this, $t, "f")), t.removeEventListener("focusout", s(this, _t, "f")), t.removeEventListener("touchstart", s(this, kt, "f")), t.removeEventListener("touchend", s(this, _e, "f")), t.removeEventListener("touchcancel", s(this, _e, "f"));
  }
}
le = mt, Ee = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), we = /* @__PURE__ */ new WeakSet(), ta = function(t) {
  if (s(this, Se, "f")?.call(this, t)) return;
  t.currentTarget.matches(":focus-within") && s(this, we, "m", uo).call(this, t);
}, uo = function(t) {
  if (s(this, Se, "f")?.call(this, t) || s(this, Ee, "f")) return;
  const o = t.currentTarget;
  s(this, Je, "f").call(this, true, o.matches(":focus-visible") || s(le, le, "f", jt) || vn(), o);
}, oa = function(t) {
  s(this, Se, "f")?.call(this, t) || s(this, Ee, "f") || s(this, Je, "f").call(this, false, false, t.currentTarget);
};
typeof window < "u" && (window.addEventListener("keydown", () => y(le, le, true, "f", jt), { capture: true, passive: true }), window.addEventListener("pointerdown", () => y(le, le, false, "f", jt), { capture: true }));
jt = { value: false };
var I, re, Q, ee, Ct, ke, ho, vt, ft, aa, na;
class ra extends ht {
  constructor(t, o) {
    super(t, o), I.add(this), re.set(this, void 0), Q.set(this, /* @__PURE__ */ new Map()), ee.set(this, /* @__PURE__ */ new Map()), Ct.set(this, (r) => s(this, I, "m", aa).call(this, r)), ke.set(this, (r) => s(this, I, "m", na).call(this, r)), y(this, re, o.callback, "f"), this.startDelay = o.startDelay ?? 0, this.endDelay = o.endDelay ?? 0;
  }
  clearDelays() {
    for (const t of this.targets) s(this, I, "m", ho).call(this, t);
  }
  _observe(t) {
    t.addEventListener("pointerenter", s(this, Ct, "f")), t.addEventListener("pointerleave", s(this, ke, "f")), t.addEventListener("touchend", s(this, ke, "f"));
  }
  _unobserve(t) {
    t.removeEventListener("pointerenter", s(this, Ct, "f")), t.removeEventListener("pointerleave", s(this, ke, "f")), t.removeEventListener("touchend", s(this, ke, "f")), s(this, I, "m", ho).call(this, t);
  }
}
re = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakSet(), ho = function(t) {
  s(this, I, "m", vt).call(this, t), s(this, I, "m", ft).call(this, t);
}, vt = function(t) {
  return s(this, Q, "f").has(t) ? (clearTimeout(s(this, Q, "f").get(t)), s(this, Q, "f").delete(t)) : false;
}, ft = function(t) {
  return s(this, ee, "f").has(t) ? (clearTimeout(s(this, ee, "f").get(t)), s(this, ee, "f").delete(t)) : false;
}, aa = function(t) {
  const o = t.target;
  s(this, I, "m", ft).call(this, o), this.startDelay > 0 ? (s(this, I, "m", vt).call(this, o), s(this, Q, "f").set(o, setTimeout(() => {
    s(this, Q, "f").delete(o), s(this, re, "f").call(this, true, o);
  }, this.startDelay))) : s(this, re, "f").call(this, true, o);
}, na = function(t) {
  const o = t.target;
  s(this, I, "m", vt).call(this, o) || (this.endDelay > 0 ? (s(this, I, "m", ft).call(this, o), s(this, ee, "f").set(o, setTimeout(() => {
    s(this, ee, "f").delete(o), s(this, re, "f").call(this, false, o);
  }, this.endDelay))) : s(this, re, "f").call(this, false, o));
};
var V, M, N, Qe, ie, z, et, wt, St, Ce, Et, Lt, sa, la, ia, da, ca, ao;
class To extends ht {
  constructor(t, o) {
    super(t, o), V.add(this), M.set(this, void 0), N.set(this, void 0), Qe.set(this, void 0), ie.set(this, void 0), z.set(this, /* @__PURE__ */ new Map()), et.set(this, void 0), wt.set(this, (r) => s(this, V, "m", sa).call(this, r)), St.set(this, (r) => s(this, V, "m", la).call(this, r)), Ce.set(this, (r) => s(this, V, "m", ia).call(this, r)), Et.set(this, (r) => s(this, V, "m", da).call(this, r)), Lt.set(this, (r) => s(this, V, "m", ca).call(this, r)), y(this, M, o.capture, "f"), y(this, N, o.callback, "f"), y(this, Qe, o.filter, "f"), y(this, ie, o.isPressedKey, "f"), y(this, et, o.minPressedDuration ?? 0, "f");
  }
  hostConnected() {
    document.addEventListener("pointerup", s(this, St, "f"), { capture: s(this, M, "f") }), document.addEventListener("touchend", s(this, Ce, "f"), { capture: s(this, M, "f") }), document.addEventListener("touchcancel", s(this, Ce, "f"), { capture: s(this, M, "f") }), super.hostConnected();
  }
  hostDisconnected() {
    document.removeEventListener("pointerup", s(this, St, "f"), { capture: s(this, M, "f") }), document.removeEventListener("touchend", s(this, Ce, "f"), { capture: s(this, M, "f") }), document.removeEventListener("touchcancel", s(this, Ce, "f"), { capture: s(this, M, "f") }), super.hostDisconnected(), s(this, z, "f").clear();
  }
  _observe(t) {
    t.addEventListener("pointerdown", s(this, wt, "f"), { capture: s(this, M, "f") }), s(this, ie, "f") && (t.addEventListener("keydown", s(this, Et, "f"), { capture: s(this, M, "f") }), t.addEventListener("keyup", s(this, Lt, "f"), { capture: s(this, M, "f") }));
  }
  _unobserve(t) {
    t.removeEventListener("pointerdown", s(this, wt, "f"), { capture: s(this, M, "f") }), s(this, ie, "f") && (t.removeEventListener("keydown", s(this, Et, "f"), { capture: s(this, M, "f") }), t.removeEventListener("keyup", s(this, Lt, "f"), { capture: s(this, M, "f") }));
  }
}
M = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakSet(), sa = function(t) {
  if (!s(this, Qe, "f")?.call(this, t) && !(t.pointerType === "mouse" && t.button > 1)) {
    for (const o of t.composedPath()) if (o instanceof HTMLElement && this.isObserving(o)) {
      s(this, z, "f").has(o) || (s(this, z, "f").set(o, performance.now()), s(this, N, "f").call(this, true, { x: t.x, y: t.y }, o));
      break;
    }
  }
}, la = function(t) {
  t.pointerType === "mouse" && t.button > 1 || s(this, V, "m", ao).call(this, t.x, t.y);
}, ia = function(t) {
  s(this, V, "m", ao).call(this, t.changedTouches[0]?.clientX ?? 0, t.changedTouches[0]?.clientY ?? 0);
}, da = function(t) {
  if (s(this, Qe, "f")?.call(this, t) || t.target !== t.currentTarget) return;
  const o = t.currentTarget;
  if (s(this, ie, "f")?.call(this, t.key) && (t.key === " " && t.preventDefault(), !s(this, z, "f").has(o))) {
    s(this, z, "f").set(o, performance.now());
    const r = o.getBoundingClientRect();
    s(this, N, "f").call(this, true, { x: r.x + r.width / 2, y: r.y + r.height / 2 }, o);
  }
}, ca = function(t) {
  const o = t.target;
  if (s(this, z, "f").has(o) && s(this, ie, "f")?.call(this, t.key)) {
    const r = s(this, et, "f") - (performance.now() - s(this, z, "f").get(o)), l = o.getBoundingClientRect();
    r > 0 ? setTimeout(() => {
      s(this, z, "f").delete(o), s(this, N, "f").call(this, false, { x: l.x + l.width / 2, y: l.y + l.height / 2 }, o);
    }, r) : (s(this, z, "f").delete(o), s(this, N, "f").call(this, false, { x: l.x + l.width / 2, y: l.y + l.height / 2 }, o));
  }
}, ao = function(t, o) {
  for (const r of s(this, z, "f")) {
    const l = s(this, et, "f") - (performance.now() - r[1]);
    l > 0 ? setTimeout(() => {
      s(this, z, "f").delete(r[0]), s(this, N, "f").call(this, false, { x: t, y: o }, r[0]);
    }, l) : (s(this, z, "f").delete(r[0]), s(this, N, "f").call(this, false, { x: t, y: o }, r[0]));
  }
};
var Ve, Mt, Tt, te, Ue;
class yn extends ht {
  constructor(t, o) {
    if (super(t, o), Ve.set(this, void 0), Mt.set(this, void 0), Tt.set(this, void 0), te.set(this, void 0), Ue.set(this, true), y(this, Ve, o.callback, "f"), y(this, Mt, o.skipInitial ?? false, "f"), y(this, Tt, o.config, "f"), !window.ResizeObserver) {
      console.warn("ResizeController error: the browser does not support ResizeObserver.");
      return;
    }
    y(this, te, new ResizeObserver((r, l) => s(this, Ve, "f").call(this, r, l)), "f");
  }
  async hostUpdated() {
    s(this, te, "f") && !s(this, Mt, "f") && s(this, Ue, "f") && s(this, Ve, "f").call(this, [], s(this, te, "f")), y(this, Ue, false, "f");
  }
  _observe(t) {
    s(this, te, "f")?.observe(t, s(this, Tt, "f")), y(this, Ue, true, "f");
  }
  _unobserve(t) {
    s(this, te, "f")?.unobserve(t);
  }
}
Ve = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap();
const D = (a2) => (t, o) => {
  const r = () => {
    typeof window < "u" && !customElements.get(a2) && customElements.define(a2, t);
  };
  o ? o.addInitializer(r) : r();
};
function zo(a2) {
  const t = /* @__PURE__ */ Symbol("_id");
  return (o, r, l) => {
    const i = l.value;
    return l.value = function(...d) {
      const h = this;
      clearTimeout(h[t]), h[t] = setTimeout(() => i.apply(this, d), a2);
    }, l;
  };
}
var de, Kt, tt, zt, oe, Ko, no, ua, ha;
class xn extends ht {
  constructor(t, o) {
    super(t, o), de.add(this), Kt.set(this, void 0), tt.set(this, void 0), zt.set(this, (r) => s(this, de, "m", ha).call(this, r)), oe.set(this, /* @__PURE__ */ new Map()), y(this, Kt, o.debounce === true, "f"), y(this, tt, o.callback, "f");
  }
  getScrollContainers(t) {
    return s(this, oe, "f").get(t);
  }
  _observe(t) {
    const o = s(this, de, "m", ua).call(this, t);
    if (o.length > 0) {
      s(this, oe, "f").set(t, o);
      for (const r of o) (r === document.documentElement ? document : r).addEventListener("scroll", s(this, zt, "f"), { passive: true });
    }
  }
  _unobserve(t) {
    if (s(this, oe, "f").has(t)) {
      for (const o of s(this, oe, "f").get(t)) (o === document.documentElement ? document : o).removeEventListener("scroll", s(this, zt, "f"));
      s(this, oe, "f").delete(t);
    }
  }
  _debounceCallback(t) {
    s(this, tt, "f").call(this, t);
  }
}
Kt = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakSet(), Ko = function(t) {
  const o = t.shadowRoot;
  if (!o) return null;
  const r = document.createTreeWalker(o, NodeFilter.SHOW_ELEMENT);
  let l = r.currentNode;
  for (; l; ) {
    if (l instanceof Element && s(this, de, "m", no).call(this, l)) return l;
    l = r.nextNode();
  }
  return null;
}, no = function(t) {
  const o = getComputedStyle(t);
  return /(auto|scroll)/.test(o.overflow + o.overflowY + o.overflowX);
}, ua = function(t) {
  const o = new Array(), r = s(this, de, "m", Ko).call(this, t);
  r && o.push(r);
  let l = t;
  for (; l; ) s(this, de, "m", no).call(this, l) && o.push(l), l = l.parentElement;
  return o;
}, ha = function(t) {
  const o = t.target === document ? document.documentElement : t.target;
  s(this, Kt, "f") ? this._debounceCallback(o) : s(this, tt, "f").call(this, o);
};
m([zo(40)], xn.prototype, "_debounceCallback", null);
function ma(a2, ...t) {
  return typeof a2 == "object" && a2 !== null && t.every((o) => o in a2);
}
const G = /* @__PURE__ */ Symbol("internals"), Go = /* @__PURE__ */ Symbol("_internals"), he = /* @__PURE__ */ Symbol("_customState");
function Jt(a2, t) {
  var o;
  class r extends a2 {
    constructor() {
      super(...arguments), this[o] = /* @__PURE__ */ new Set();
    }
    get [(o = he, G)]() {
      return this[Go] ?? (this[Go] = this.attachInternals());
    }
  }
  return r.formAssociated = t, r;
}
function Gt(a2, t) {
  return he in a2 ? a2[he].has(t) : a2[G].states.has(t);
}
function j(a2, t) {
  Gt(a2, t) || (he in a2 && a2[he].add(t), a2[G]?.states.add(t), a2[G]?.states.has(t));
}
function k(a2, t) {
  return he in a2 && a2[he].delete(t), a2[G]?.states.delete(t) ? (a2[G]?.states.has(t), true) : false;
}
function lt(a2, t, o) {
  o ? j(a2, t) : k(a2, t);
}
function pa(a2) {
  class t extends a2 {
    constructor() {
      super(...arguments), this.checked = false;
    }
    update(r) {
      super.update(r), r.has("checked") && (this.role === "button" ? (this.ariaPressed = `${this.checked}`, this.ariaChecked = null) : this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = `${this.checked}`, this.ariaPressed = null));
    }
  }
  return m([g({ type: Boolean, reflect: true })], t.prototype, "checked", void 0), t;
}
function $n(a2) {
  class t extends pa(a2) {
    constructor() {
      super(...arguments), this.indeterminate = false;
    }
    update(r) {
      super.update(r), r.has("indeterminate") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = !this.checked && this.indeterminate ? "mixed" : `${this.checked}`);
    }
  }
  return m([g({ type: Boolean, reflect: true })], t.prototype, "indeterminate", void 0), t;
}
const Qt = { primary: e("var(--md-sys-color-primary, #6750A4)"), onPrimary: e("var(--md-sys-color-on-primary, #FFFFFF)"), primaryContainer: e("var(--md-sys-color-primary-container, #EADDFF)"), onPrimaryContainer: e("var(--md-sys-color-on-primary-container, #4F378B)"), primaryFixed: e("var(--md-sys-color-primary-fixed, #EADDFF)"), primaryFixedDim: e("var(--md-sys-color-primary-fixed-dim, #D0BCFF)"), onPrimaryFixed: e("var(--md-sys-color-on-primary-fixed, #21005D)"), onPrimaryFixedVariant: e("var(--md-sys-color-on-primary-fixed-variant, #4F378B)"), secondary: e("var(--md-sys-color-secondary, #625B71)"), onSecondary: e("var(--md-sys-color-on-secondary, #FFFFFF)"), secondaryContainer: e("var(--md-sys-color-secondary-container, #E8DEF8)"), onSecondaryContainer: e("var(--md-sys-color-on-secondary-container, #4A4458)"), secondaryFixed: e("var(--md-sys-color-secondary-fixed, #E8DEF8)"), secondaryFixedDim: e("var(--md-sys-color-secondary-fixed-dim, #CCC2DC)"), onSecondaryFixed: e("var(--md-sys-color-on-secondary-fixed, #1D192B)"), onSecondaryFixedVariant: e("var(--md-sys-color-on-secondary-fixed-variant, #4A4458)"), tertiary: e("var(--md-sys-color-tertiary, #7D5260)"), onTertiary: e("var(--md-sys-color-on-tertiary, #FFFFFF)"), tertiaryContainer: e("var(--md-sys-color-tertiary-container, #FFD8E4)"), onTertiaryContainer: e("var(--md-sys-color-on-tertiary-container, #633B48)"), tertiaryFixed: e("var(--md-sys-color-tertiary-fixed, #FFD8E4)"), tertiaryFixedDim: e("var(--md-sys-color-tertiary-fixed-dim, #EFB8C8)"), onTertiaryFixed: e("var(--md-sys-color-on-tertiary-fixed, #31111D)"), onTertiaryFixedVariant: e("var(--md-sys-color-on-tertiary-fixed-variant, #633B48)"), error: e("var(--md-sys-color-error, #B3261E)"), onError: e("var(--md-sys-color-on-error, #FFFFFF)"), errorContainer: e("var(--md-sys-color-error-container, #F9DEDC)"), onErrorContainer: e("var(--md-sys-color-on-error-container, #8C1D18)"), surface: e("var(--md-sys-color-surface, #FEF7FF)"), onSurface: e("var(--md-sys-color-on-surface, #1D1B20)"), onSurfaceVariant: e("var(--md-sys-color-on-surface-variant, #49454F)"), surfaceContainerLowest: e("var(--md-sys-color-surface-container-lowest, #FFFFFF)"), surfaceContainerLow: e("var(--md-sys-color-surface-container-low, #F7F2FA)"), surfaceContainer: e("var(--md-sys-color-surface-container, #F3EDF7)"), surfaceContainerHigh: e("var(--md-sys-color-surface-container-high, #ECE6F0)"), surfaceContainerHighest: e("var(--md-sys-color-surface-container-highest, #E6E0E9)"), surfaceDim: e("var(--md-sys-color-surface-dim, #DED8E1)"), surfaceBright: e("var(--md-sys-color-surface-bright, #FEF7FF)"), surfaceVariant: e("var(--md-sys-color-surface-variant, #E7E0EC)"), inverseSurface: e("var(--md-sys-color-inverse-surface, #322F35)"), inverseOnSurface: e("var(--md-sys-color-inverse-on-surface, #F5EFF7)"), inversePrimary: e("var(--md-sys-color-inverse-primary, #D0BCFF)"), outline: e("var(--md-sys-color-outline, #79747E)"), outlineVariant: e("var(--md-sys-color-outline-variant, #CAC4D0)"), shadow: e("var(--md-sys-color-shadow, #000000)"), scrim: e("var(--md-sys-color-scrim, #000000)") }, ro = { scale: e("var(--md-sys-density-scale, 0)"), size: e("var(--md-sys-density-size, 0.25rem)") }, _n = { ...ro, calc(a2) {
  return e(`calc(max(${a2}, ${ro.scale}) * ${ro.size})`);
} }, kn = `color-mix(in srgb, var(--m3e-elevation-color, ${Qt.shadow}) 20%, transparent)`, Cn = ["0px 0px 0px 0px", "0px 2px 1px -1px", "0px 3px 1px -2px", "0px 3px 3px -2px", "0px 2px 4px -1px", "0px 3px 5px -1px", "0px 3px 5px -1px", "0px 4px 5px -2px", "0px 5px 5px -3px", "0px 5px 6px -3px", "0px 6px 6px -3px", "0px 6px 7px -4px", "0px 7px 8px -4px", "0px 7px 8px -4px", "0px 7px 9px -4px", "0px 8px 9px -5px", "0px 8px 10px -5px", "0px 8px 11px -5px", "0px 9px 11px -5px", "0px 9px 12px -6px", "0px 10px 13px -6px", "0px 10px 13px -6px", "0px 10px 14px -6px", "0px 11px 14px -7px", "0px 11px 15px -7px"], wn = `color-mix(in srgb, var(--m3e-elevation-color, ${Qt.shadow}) 14%, transparent)`, Sn = ["0px 0px 0px 0px", "0px 1px 1px 0px", "0px 2px 2px 0px", "0px 3px 4px 0px", "0px 4px 5px 0px", "0px 5px 8px 0px", "0px 6px 10px 0px", "0px 7px 10px 1px", "0px 8px 10px 1px", "0px 9px 12px 1px", "0px 10px 14px 1px", "0px 11px 15px 1px", "0px 12px 17px 2px", "0px 13px 19px 2px", "0px 14px 21px 2px", "0px 15px 22px 2px", "0px 16px 24px 2px", "0px 17px 26px 2px", "0px 18px 28px 2px", "0px 19px 29px 2px", "0px 20px 31px 3px", "0px 21px 33px 3px", "0px 22px 35px 3px", "0px 23px 36px 3px", "0px 24px 38px 3px"], En = `color-mix(in srgb, var(--m3e-elevation-color, ${Qt.shadow}) 12%, transparent)`, Ln = ["0px 0px 0px 0px", "0px 1px 3px 0px", "0px 1px 5px 0px", "0px 1px 8px 0px", "0px 1px 10px 0px", "0px 1px 14px 0px", "0px 1px 18px 0px", "0px 2px 16px 1px", "0px 3px 14px 2px", "0px 3px 16px 2px", "0px 4px 18px 3px", "0px 4px 20px 3px", "0px 5px 22px 4px", "0px 5px 24px 4px", "0px 5px 26px 4px", "0px 6px 28px 5px", "0px 6px 30px 5px", "0px 6px 32px 5px", "0px 7px 34px 6px", "0px 7px 36px 6px", "0px 8px 38px 7px", "0px 8px 40px 7px", "0px 8px 42px 7px", "0px 9px 44px 8px", "0px 9px 46px 8px"];
function ge(a2) {
  return `${kn} ${Cn[a2]},${wn} ${Sn[a2]},${En} ${Ln[a2]}`;
}
const Mn = { level0: e(`var(--md-sys-elevation-level0, ${ge(0)})`), level1: e(`var(--md-sys-elevation-level1, ${ge(1)})`), level2: e(`var(--md-sys-elevation-level2, ${ge(3)})`), level3: e(`var(--md-sys-elevation-level3, ${ge(6)})`), level4: e(`var(--md-sys-elevation-level4, ${ge(8)})`), level5: e(`var(--md-sys-elevation-level5, ${ge(12)})`) };
function C(a2) {
  return e(`var(--md-sys-measurement-space${a2}, ${0.5 * (a2 / 100)}rem)`);
}
C(0), C(25), C(50), C(75), C(100), C(125), C(150), C(175), C(200), C(250), C(300), C(400), C(450), C(500), C(600), C(700), C(800), C(900);
const Tn = { emphasized: e("var(--md-sys-motion-easing-emphasized, cubic-bezier(0.2, 0.0, 0, 1.0))"), emphasizedDecelerate: e("var(--md-sys-motion-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))"), emphasizedAccelerate: e("var(--md-sys-motion-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))"), standard: e("var(--md-sys-motion-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))"), standardDecelerate: e("var(--md-sys-motion-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))"), standardAccelerate: e("var(--md-sys-motion-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))") }, zn = { fastSpatial: e("var(--md-sys-motion-spring-fast-spatial, 350ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), defaultSpatial: e("var(--md-sys-motion-spring-default-spatial, 500ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), slowSpatial: e("var(--md-sys-motion-spring-slow-spatial, 750ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), fastEffects: e("var(--md-sys-motion-spring-fast-effects, 150ms cubic-bezier(0.31, 0.94, 0.34, 1.00))"), defaultEffects: e("var(--md-sys-motion-spring-default-effects, 200ms cubic-bezier(0.34, 0.80, 0.34, 1.00))"), slowEffects: e("var(--md-sys-motion-spring-slow-effects, 200ms cubic-bezier(0.34, 0.88, 0.34, 1.00))") }, An = { short1: e("var(--md-sys-motion-duration-short-1, 50ms)"), short2: e("var(--md-sys-motion-duration-short-2, 100ms)"), short3: e("var(--md-sys-motion-duration-short-3, 150ms)"), short4: e("var(--md-sys-motion-duration-short-4, 200ms)"), medium1: e("var(--md-sys-motion-duration-medium-1, 250ms)"), medium2: e("var(--md-sys-motion-duration-medium-2, 300ms)"), medium3: e("var(--md-sys-motion-duration-medium-3, 350ms)"), medium4: e("var(--md-sys-motion-duration-medium-4, 400ms)"), long1: e("var(--md-sys-motion-duration-long-1, 450ms)"), long2: e("var(--md-sys-motion-duration-long-2, 500ms)"), long3: e("var(--md-sys-motion-duration-long-3, 550ms)"), long4: e("var(--md-sys-motion-duration-long-4, 600ms)"), extraLong1: e("var(--md-sys-motion-duration-extra-long-1, 700ms)"), extraLong2: e("var(--md-sys-motion-duration-extra-long-2, 800ms)"), extraLong3: e("var(--md-sys-motion-duration-extra-long-3, 900ms)"), extraLong4: e("var(--md-sys-motion-duration-extra-long-4, 1000ms)") }, Pn = { easing: Tn, duration: An, spring: zn }, In = { width: e("var(--m3e-scrollbar-width, auto)"), thinWidth: e("var(--m3e-scrollbar-thin-width, thin)"), color: e("var(--m3e-scrollbar-thumb-color, #938f94) var(--m3e-scrollbar-track-color, transparent)") }, c = { none: e("var(--md-sys-shape-corner-value-none, 0)"), extraSmall: e("var(--md-sys-shape-corner-value-extra-small, 0.25rem)"), small: e("var(--md-sys-shape-corner-value-small, 0.5rem)"), medium: e("var(--md-sys-shape-corner-value-medium, 0.75rem)"), large: e("var(--md-sys-shape-corner-value-large, 1rem)"), largeIncreased: e("var(--md-sys-shape-corner-value-large-increased, 1.25rem)"), extraLarge: e("var(--md-sys-shape-corner-value-extra-large, 1.75rem)"), extraLargeIncreased: e("var(--md-sys-shape-corner-value-extra-large-increased, 2rem)"), extraExtraLarge: e("var(--md-sys-shape-corner-value-extra-extra-large, 3rem)") }, Dn = { corner: { full: e("var(--md-sys-shape-corner-full, 624.9375rem)"), extraLargeTop: e(`var(--md-sys-shape-corner-extra-large-top, ${c.extraLarge} ${c.extraLarge} ${c.none} ${c.none})`), extraLarge: e(`var(--md-sys-shape-corner-extra-large, ${c.extraLarge})`), extraLargeEnd: e(`${c.none} ${c.extraLarge} ${c.extraLarge} ${c.none}`), extraLargeStart: e(`${c.extraLarge} ${c.none} ${c.none} ${c.extraLarge}`), largeTop: e(`var(--md-sys-shape-corner-large-top, ${c.large} ${c.large} ${c.none} ${c.none})`), largeEnd: e(`var(--md-sys-shape-corner-large-end, ${c.none} ${c.large} ${c.large} ${c.none})`), largeStart: e(`var(--md-sys-shape-corner-large-start, ${c.large} ${c.none} ${c.none} ${c.large})`), large: e(`var(--md-sys-shape-corner-large, ${c.large})`), medium: e(`var(--md-sys-shape-corner-medium, ${c.medium})`), mediumTop: e(`${c.medium} ${c.medium} ${c.none} ${c.none}`), mediumEnd: e(`${c.none} ${c.medium} ${c.medium} ${c.none}`), mediumStart: e(`${c.medium} ${c.none} ${c.none} ${c.medium}`), small: e(`var(--md-sys-shape-corner-small, ${c.small})`), smallTop: e(`${c.small} ${c.small} ${c.none} ${c.none}`), smallEnd: e(`${c.none} ${c.small} ${c.small} ${c.none}`), smallStart: e(`${c.small} ${c.none} ${c.none} ${c.small}`), extraSmallTop: e(`var(--md-sys-shape-corner-extra-small-top, ${c.extraSmall} ${c.extraSmall} ${c.none} ${c.none})`), extraSmall: e(`var(--md-sys-shape-corner-extra-small, ${c.extraSmall})`), extraSmallEnd: e(`${c.none} ${c.extraSmall} ${c.extraSmall} ${c.none}`), extraSmallStart: e(`${c.extraSmall} ${c.none} ${c.none} ${c.extraSmall}`), extraSmallBottom: e(`${c.none} ${c.none} ${c.extraSmall} ${c.extraSmall}`), none: e(`var(--md-sys-shape-corner-none, ${c.none})`), largeIncreased: e(`var(--md-sys-shape-corner-large-increased, ${c.largeIncreased})`), extraLargeIncreased: e(`var(--md-sys-shape-corner-extra-large-increased, ${c.extraLargeIncreased})`), extraExtraLarge: e(`var(--md-sys-shape-corner-extra-extra-large, ${c.extraExtraLarge})`) } }, Rn = { focusStateLayerOpacity: e("var(--md-sys-state-focus-state-layer-opacity, 10%)"), hoverStateLayerOpacity: e("var(--md-sys-state-hover-state-layer-opacity, 8%)"), pressedStateLayerOpacity: e("var(--md-sys-state-pressed-state-layer-opacity, 10%)") }, qn = { standard: { display: { large: { fontSize: e("var(--md-sys-typescale-display-large-font-size, 3.5625rem)"), fontWeight: e("var(--md-sys-typescale-display-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-display-large-line-height, 4rem)"), tracking: e("var(--md-sys-typescale-display-large-tracking, 0.015625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-display-medium-font-size, 2.8125rem)"), fontWeight: e("var(--md-sys-typescale-display-medium-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-display-medium-line-height, 3.25rem)"), tracking: e("var(--md-sys-typescale-display-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-display-small-font-size, 2.25rem)"), fontWeight: e("var(--md-sys-typescale-display-small-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-display-small-line-height, 2.75rem)"), tracking: e("var(--md-sys-typescale-display-small-tracking, 0)") } }, headline: { large: { fontSize: e("var(--md-sys-typescale-headline-large-font-size, 2rem)"), fontWeight: e("var(--md-sys-typescale-headline-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-headline-large-line-height, 2.5rem)"), tracking: e("var(--md-sys-typescale-headline-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-headline-medium-font-size, 1.75rem)"), fontWeight: e("var(--md-sys-typescale-headline-medium-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-headline-medium-line-height, 2.25rem)"), tracking: e("var(--md-sys-typescale-headline-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-headline-small-font-size, 1.5rem)"), fontWeight: e("var(--md-sys-typescale-headline-small-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-headline-small-line-height, 2rem)"), tracking: e("var(--md-sys-typescale-headline-small-tracking, 0)") } }, title: { large: { fontSize: e("var(--md-sys-typescale-title-large-font-size, 1.375rem)"), fontWeight: e("var(--md-sys-typescale-title-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-title-large-line-height, 1.75rem)"), tracking: e("var(--md-sys-typescale-title-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-title-medium-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-title-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-title-medium-line-height, 1.5rem)"), tracking: e("var(--md-sys-typescale-title-medium-tracking, 0.009375rem)") }, small: { fontSize: e("var(--md-sys-typescale-title-small-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-title-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-title-small-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: e("var(--md-sys-typescale-body-large-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-body-large-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-body-large-line-height, 1.5rem)"), tracking: e("var(--md-sys-typescale-body-large-tracking, 0.03125rem)") }, medium: { fontSize: e("var(--md-sys-typescale-body-medium-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-body-medium-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-body-medium-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-body-medium-tracking, 0.015625rem)") }, small: { fontSize: e("var(--md-sys-typescale-body-small-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-body-small-font-weight, 400)"), lineHeight: e("var(--md-sys-typescale-body-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: e("var(--md-sys-typescale-label-large-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-label-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-label-large-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-label-large-tracking, 0.00625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-label-medium-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-label-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-label-medium-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-label-medium-tracking, 0.03125rem)") }, small: { fontSize: e("var(--md-sys-typescale-label-small-font-size, 0.6875rem)"), fontWeight: e("var(--md-sys-typescale-label-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-label-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-label-small-tracking, 0.03125rem)") } } }, emphasized: { display: { large: { fontSize: e("var(--md-sys-typescale-emphasized-display-large-font-size, 3.5625rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-display-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-display-large-line-height, 4rem)"), tracking: e("var(--md-sys-typescale-emphasized-display-large-tracking, 0.015625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-display-medium-font-size, 2.8125rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-display-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-display-medium-line-height, 3.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-display-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-display-small-font-size, 2.25rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-display-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-display-small-line-height, 2.75rem)"), tracking: e("var(--md-sys-typescale-emphasized-display-small-tracking, 0)") } }, headline: { large: { fontSize: e("var(--md-sys-typescale-emphasized-headline-large-font-size, 2rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-headline-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-headline-large-line-height, 2.5rem)"), tracking: e("var(--md-sys-typescale-emphasized-headline-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-headline-medium-font-size, 1.75rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-headline-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-headline-medium-line-height, 2.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-headline-medium-tracking, 0)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-headline-small-font-size, 1.5rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-headline-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-headline-small-line-height, 2rem)"), tracking: e("var(--md-sys-typescale-emphasized-headline-small-tracking, 0)") } }, title: { large: { fontSize: e("var(--md-sys-typescale-emphasized-title-large-font-size, 1.375rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-title-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-title-large-line-height, 1.75rem)"), tracking: e("var(--md-sys-typescale-emphasized-title-large-tracking, 0)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-title-medium-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-title-medium-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-title-medium-line-height, 3.5rem)"), tracking: e("var(--md-sys-typescale-emphasized-title-medium-tracking, 0.009375rem)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-title-small-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-title-small-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-title-small-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: e("var(--md-sys-typescale-emphasized-body-large-font-size, 1rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-body-large-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-body-large-line-height, 1.5rem)"), tracking: e("var(--md-sys-typescale-emphasized-body-large-tracking, 0.03125rem)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-body-medium-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-body-medium-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-body-medium-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-body-medium-tracking, 0.015625rem)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-body-small-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-body-small-font-weight, 500)"), lineHeight: e("var(--md-sys-typescale-emphasized-body-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-emphasized-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: e("var(--md-sys-typescale-emphasized-label-large-font-size, 0.875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-label-large-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-label-large-line-height, 1.25rem)"), tracking: e("var(--md-sys-typescale-emphasized-label-large-tracking, 0.00625rem)") }, medium: { fontSize: e("var(--md-sys-typescale-emphasized-label-medium-font-size, 0.75rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-label-medium-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-label-medium-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-emphasized-label-medium-tracking, 0.03125rem)") }, small: { fontSize: e("var(--md-sys-typescale-emphasized-label-small-font-size, 0.6875rem)"), fontWeight: e("var(--md-sys-typescale-emphasized-label-small-font-weight, 700)"), lineHeight: e("var(--md-sys-typescale-emphasized-label-small-line-height, 1rem)"), tracking: e("var(--md-sys-typescale-emphasized-label-small-tracking, 0.03125rem)") } } } }, n = { color: Qt, elevation: Mn, motion: Pn, shape: Dn, state: Rn, typescale: qn, scrollbar: In, density: _n };
function it(a2) {
  return ma(a2, "disabled");
}
function Ao(a2, t = true) {
  class o extends a2 {
    constructor() {
      super(...arguments), this.disabled = false;
    }
    update(l) {
      super.update(l), l.has("disabled") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaDisabled = this.disabled ? "true" : null);
    }
  }
  return m([g({ type: Boolean, reflect: t })], o.prototype, "disabled", void 0), o;
}
function dt(a2) {
  return ma(a2, "disabledInteractive") && it(a2);
}
const Xo = ["click", "dblclick", "auxclick", "keydown", "keyup"], Bn = ["Tab", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Left", "Up", "Right", "Down"], so = /* @__PURE__ */ Symbol("_suppressedEventHandler");
function Wn(a2) {
  var t;
  class o extends a2 {
    constructor() {
      super(...arguments), this[t] = (l) => {
        if (this.disabledInteractive) {
          if (l instanceof KeyboardEvent && Bn.includes(l.key)) return;
          l.stopImmediatePropagation(), l.preventDefault();
        }
      }, this.disabledInteractive = false;
    }
    connectedCallback() {
      Xo.forEach((l) => this.addEventListener(l, this[so], true)), super.connectedCallback();
    }
    disconnectedCallback() {
      Xo.forEach((l) => this.removeEventListener(l, this[so], true)), super.disconnectedCallback();
    }
    update(l) {
      super.update(l), (l.has("disabled") || l.has("disabledInteractive")) && this.role && this.role !== "none" && this.role !== "presentation" && this.role !== "none" && (this.ariaDisabled = this.disabled || this.disabledInteractive ? "true" : null);
    }
  }
  return t = so, m([g({ attribute: "disabled-interactive", type: Boolean, reflect: true })], o.prototype, "disabledInteractive", void 0), o;
}
const We = /* @__PURE__ */ Symbol("_tabindex");
function Hn(a2) {
  var t;
  class o extends a2 {
    constructor() {
      super(...arguments), this[t] = 0;
    }
    connectedCallback() {
      this[We] = Number.parseInt(this.getAttribute("tabindex") ?? "0"), super.connectedCallback();
    }
    firstUpdated(l) {
      super.firstUpdated(l), !this.hasAttribute("tabindex") && !l.has("disabled") && this.setAttribute("tabindex", `${this[We]}`);
    }
    update(l) {
      if (super.update(l), l.has("disabled")) if (!this.disabled && this.role !== "none") this.hasAttribute("tabindex") || this.setAttribute("tabindex", `${this[We]}`);
      else {
        const i = this.getAttribute("tabindex");
        i && (this[We] = Number.parseInt(i)), this.removeAttribute("tabindex");
      }
    }
  }
  return t = We, o;
}
const lo = /* @__PURE__ */ Symbol("_clickHandler");
function On(a2) {
  var t;
  class o extends a2 {
    constructor() {
      super(...arguments), this.type = "button", this[t] = async (l) => {
        if (l.defaultPrevented || it(this) && this.disabled || dt(this) && this.disabledInteractive) return;
        const i = this[G].form;
        if (!(!i || this.type === "button") && (await new Promise((d) => setTimeout(d)), !l.defaultPrevented)) switch (this.type) {
          case "reset":
            i.reset();
            break;
          case "submit":
            i.addEventListener("submit", (d) => Object.defineProperty(d, "submitter", { configurable: true, enumerable: true, get: () => this }), { capture: true, once: true }), this[G].setFormValue(this.value), i.requestSubmit();
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
      super.connectedCallback(), this.addEventListener("click", this[lo]);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("click", this[lo]);
    }
  }
  return t = lo, o.formAssociated = true, m([g()], o.prototype, "name", null), m([g()], o.prototype, "value", null), m([g()], o.prototype, "type", void 0), o;
}
const ye = /* @__PURE__ */ Symbol("_control"), io = /* @__PURE__ */ Symbol("_firstUpdated");
function eo(a2) {
  var t;
  class o extends a2 {
    constructor() {
      super(...arguments), this[t] = false, this.htmlFor = null;
    }
    get control() {
      return this[ye]?.deref() ?? null;
    }
    connectedCallback() {
      super.connectedCallback();
      const l = this[ye]?.deref();
      l && this.attach(l);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      const l = this[ye];
      l && (this.detach(), this[ye] = l);
    }
    firstUpdated(l) {
      super.firstUpdated(l), this[io] = true;
    }
    update(l) {
      if (super.update(l), l.has("htmlFor")) if (this.htmlFor) {
        const i = this.getRootNode();
        i && gn(this.htmlFor, i).then((d) => {
          d !== this.control && (this.control && this.detach(), d instanceof HTMLElement && this.attach(d));
        });
      } else this.control && this[io] && this.detach();
    }
    attach(l) {
      this[ye] = new WeakRef(l);
    }
    detach() {
      this[ye] = void 0;
    }
  }
  return t = io, m([g({ attribute: "for" })], o.prototype, "htmlFor", void 0), o;
}
function Fn(a2, t = true) {
  var o, r, l, i, d, h, u;
  class b extends a2 {
    constructor() {
      super(...arguments), o.add(this), r.set(this, false), l.set(this, (v) => s(this, o, "m", h).call(this, v)), i.set(this, (v) => s(this, o, "m", u).call(this, v)), d.set(this, () => y(this, r, false, "f"));
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("keydown", s(this, l, "f")), this.addEventListener("keyup", s(this, i, "f")), this.addEventListener("focusout", s(this, d, "f"));
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("keydown", s(this, l, "f")), this.removeEventListener("keyup", s(this, i, "f")), this.removeEventListener("focusout", s(this, d, "f"));
    }
  }
  return r = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakSet(), h = function(v) {
    if (v.target !== v.currentTarget || it(this) && this.disabled || dt(this) && this.disabledInteractive) {
      y(this, r, false, "f");
      return;
    }
    (v.key === " " || t && v.key === "Enter") && y(this, r, true, "f");
  }, u = function(v) {
    if (v.target !== v.currentTarget || it(this) && this.disabled || dt(this) && this.disabledInteractive || !s(this, r, "f")) {
      y(this, r, false, "f");
      return;
    }
    y(this, r, false, "f"), this.dispatchEvent(new MouseEvent("click", { cancelable: true, bubbles: true, composed: true }));
  }, b;
}
const ba = /* @__PURE__ */ Symbol("renderPseudoLink"), co = /* @__PURE__ */ Symbol("_clickHandler");
function Nn(a2, t = false) {
  var o, r, l, i, d;
  class h extends a2 {
    constructor() {
      super(...arguments), o.add(this), this[d] = async (b) => {
        if (dt(this) && this.disabledInteractive && (b.preventDefault(), b.stopPropagation()), await new Promise((f) => f()), !b.defaultPrevented && this.href) {
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
      super.connectedCallback(), t || this.addEventListener("click", this[co]), this.hasAttribute("href") && this.role === "button" && (this.role = "link");
    }
    disconnectedCallback() {
      super.disconnectedCallback(), t || this.removeEventListener("click", this[co]);
    }
    [(o = /* @__PURE__ */ new WeakSet(), d = co, ba)]() {
      const b = it(this) && this.disabled, f = dt(this) && this.disabledInteractive;
      return !b && !f && this.href ? S`<a href="${this.href}" target="${oo(this.target || void 0)}" rel="${oo(this.rel || void 0)}" download="${oo(this.download || void 0)}" tabindex="-1" aria-hidden="true" @pointerdown="${s(this, o, "m", r)}" @focus="${s(this, o, "m", l)}" @blur="${s(this, o, "m", i)}"></a>` : $;
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
function pe(a2, t) {
  class o extends a2 {
    connectedCallback() {
      this.role = this.role || t, super.connectedCallback();
    }
  }
  return o;
}
var At;
class Vn extends E {
  constructor() {
    super(...arguments), At.set(this, (t) => {
      t.defaultPrevented || this._onClick(t);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.parentElement?.addEventListener("click", s(this, At, "f"));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.parentElement?.removeEventListener("click", s(this, At, "f"));
  }
  render() {
    return S`<slot></slot>`;
  }
}
At = /* @__PURE__ */ new WeakMap();
Vn.styles = L`:host { display: contents; } ::slotted(.material-icons) { font-size: inherit !important; }`;
var P, ot, je, va, Ke, Ge, mo;
let Te = class extends Jt(E) {
  constructor() {
    super(...arguments), P.add(this), ot.set(this, false), je.set(this, false), this.open = false, this.orientation = "vertical", this.noAnimate = false;
  }
  update(t) {
    super.update(t);
    const o = this.noAnimate || t.has("orientation") && !t.has("open");
    if (j(this, "--no-animate"), !s(this, ot, "f")) {
      this.open && (y(this, je, true, "f"), s(this, P, "m", Ke).call(this)), y(this, ot, true, "f");
      return;
    }
    this.toggleAttribute("inert", !this.open), this.open ? (y(this, je, true, "f"), o || yt() || (s(this, P, "m", Ke).call(this), lt(this, "--overflows", this.orientation === "vertical" ? this.clientHeight < this.scrollHeight : this.orientation === "horizontal" ? this.clientWidth < this.scrollWidth : this.clientHeight < this.scrollHeight || this.clientWidth < this.scrollWidth), s(this, P, "m", Ge).call(this)), k(this, "--closing"), j(this, "--opening"), this.dispatchEvent(new Event("opening")), s(this, P, "m", Ge).call(this), k(this, "--no-animate"), s(this, P, "m", mo).call(this), o || yt() ? (s(this, P, "m", Ke).call(this), k(this, "--opening"), this.dispatchEvent(new Event("opened"))) : this.addEventListener("transitionend", () => {
      this.open && (s(this, P, "m", Ke).call(this), k(this, "--opening"), this.dispatchEvent(new Event("opened")));
    }, { once: true })) : (k(this, "--opening"), j(this, "--closing"), this.dispatchEvent(new Event("closing")), s(this, P, "m", mo).call(this), s(this, je, "f") && k(this, "--no-animate"), o || yt() ? (s(this, P, "m", Ge).call(this), k(this, "--closing"), this.dispatchEvent(new Event("closed"))) : requestAnimationFrame(() => {
      s(this, P, "m", Ge).call(this), this.addEventListener("transitionend", () => {
        this.open || (k(this, "--closing"), this.dispatchEvent(new Event("closed")));
      }, { once: true });
    }));
  }
  render() {
    return S`<slot @slotchange="${s(this, P, "m", va)}"></slot>`;
  }
};
ot = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakSet();
va = function() {
  y(this, ot, true, "f");
};
Ke = function() {
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
Ge = function() {
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
mo = function() {
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
Te.styles = L`:host { display: block; overflow: hidden; } :host([orientation="vertical"]) { height: 0px; transition: ${e(`visibility var(--m3e-collapsible-animation-duration, ${n.motion.duration.medium1})
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
m([g({ type: Boolean, reflect: true })], Te.prototype, "open", void 0);
m([g({ reflect: true })], Te.prototype, "orientation", void 0);
m([g({ attribute: "no-animate", type: Boolean, reflect: true })], Te.prototype, "noAnimate", void 0);
Te = m([D("m3e-collapsible")], Te);
const q = { liftDuration: e(`var(--m3e-elevation-lift-duration, ${n.motion.duration.short4})`), liftEasing: e(`var(--m3e-elevation-lift-easing, ${n.motion.easing.standard})`), settleDuration: e(`var(--m3e-elevation-settle-duration, ${n.motion.duration.short3})`), settleEasing: e(`var(--m3e-elevation-settle-easing, ${n.motion.easing.standardAccelerate})`), level: e(`var(--m3e-elevation-level, ${n.elevation.level0})`), hoverLevel: e(`var(--m3e-elevation-hover-level, ${n.elevation.level0})`), focusLevel: e(`var(--m3e-elevation-focus-level, ${n.elevation.level0})`), pressedLevel: e(`var(--m3e-elevation-pressed-level, ${n.elevation.level0})`) };
var Xe, Pt, It, Dt, fa, ga, ya;
let ze = class extends eo(pe(E, "none")) {
  constructor() {
    super(...arguments), Xe.add(this), Pt.set(this, new ra(this, { target: null, callback: (t) => s(this, Xe, "m", fa).call(this, t) })), It.set(this, new mt(this, { target: null, callback: (t) => s(this, Xe, "m", ga).call(this, t) })), Dt.set(this, new To(this, { target: null, callback: (t) => s(this, Xe, "m", ya).call(this, t) })), this.disabled = false, this.level = null;
  }
  attach(t) {
    super.attach(t), s(this, Pt, "f").observe(t), s(this, It, "f").observe(t), s(this, Dt, "f").observe(t);
  }
  detach() {
    this.control && (s(this, Pt, "f").unobserve(this.control), s(this, It, "f").unobserve(this.control), s(this, Dt, "f").unobserve(this.control)), super.detach();
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
Pt = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakSet();
fa = function(t) {
  this.disabled || (this._shadow?.classList.toggle("hover", t), this._shadow?.classList.toggle("resting", !t));
};
ga = function(t) {
  this.disabled || this._shadow?.classList.toggle("focus", t);
};
ya = function(t) {
  this.disabled || this._shadow?.classList.toggle("pressed", t);
};
ze.styles = L`:host { display: block; } :host, .shadow { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .shadow.resting, .shadow.focus, .shadow.pressed { will-change: box-shadow; transition: ${e(`box-shadow ${q.settleDuration} ${q.settleEasing};`)}; } .shadow.hover { will-change: box-shadow; transition: ${e(`box-shadow ${q.liftDuration} ${q.liftEasing};`)}; } .shadow { box-shadow: ${q.level}; } .shadow.focus { box-shadow: ${q.focusLevel}; } .shadow.hover { box-shadow: ${q.hoverLevel}; } .shadow.pressed { box-shadow: ${q.pressedLevel}; } :host([level="0"]) .shadow { --m3e-elevation-level: ${n.elevation.level0}; --m3e-elevation-hover-level: ${n.elevation.level1}; } :host([level="1"]) .shadow { --m3e-elevation-level: ${n.elevation.level1}; --m3e-elevation-hover-level: ${n.elevation.level2}; } :host([level="2"]) .shadow { --m3e-elevation-level: ${n.elevation.level2}; --m3e-elevation-hover-level: ${n.elevation.level3}; } :host([level="3"]) .shadow { --m3e-elevation-level: ${n.elevation.level3}; --m3e-elevation-hover-level: ${n.elevation.level4}; } :host([level="4"]) .shadow { --m3e-elevation-level: ${n.elevation.level4}; --m3e-elevation-hover-level: ${n.elevation.level5}; } :host([level="5"]) .shadow { --m3e-elevation-level: ${n.elevation.level5}; --m3e-elevation-hover-level: ${q.level}; } :host([level]) .shadow { --m3e-elevation-focus-level: ${q.level}; --m3e-elevation-pressed-level: ${q.level}; } @media (prefers-reduced-motion) { .shadow.resting, .shadow.pressed, .shadow.focus, .shadow.hover { transition: none; } } @media (forced-colors: active) { .shadow { display: none; } }`;
m([Y(".shadow")], ze.prototype, "_shadow", void 0);
m([g({ type: Boolean, reflect: true })], ze.prototype, "disabled", void 0);
m([g({ type: Number, reflect: true })], ze.prototype, "level", void 0);
ze = m([D("m3e-elevation")], ze);
const _ = { color: e(`var(--m3e-focus-ring-color, ${n.color.secondary})`), duration: e(`var(--m3e-focus-ring-duration, ${n.motion.duration.long2})`), thickness: e("var(--m3e-focus-ring-thickness, 3px)"), outwardOffset: e("var(--m3e-focus-ring-outward-offset, 2px)"), inwardOffset: e("var(--m3e-focus-ring-inward-offset, 0px)"), visibility: e("var(--m3e-focus-ring-visibility, visible)"), growthFactor: e("var(--m3e-focus-ring-growth-factor, 2)") };
var po, Rt, xa;
let Ae = class extends eo(pe(E, "none")) {
  constructor() {
    super(...arguments), po.add(this), Rt.set(this, new mt(this, { target: null, callback: (t, o) => s(this, po, "m", xa).call(this, o) })), this.inward = false, this.disabled = false;
  }
  show() {
    this._outline?.classList.toggle("visible", true);
  }
  hide() {
    this._outline?.classList.toggle("visible", false);
  }
  attach(t) {
    super.attach(t), s(this, Rt, "f").observe(t);
  }
  detach() {
    this.control && s(this, Rt, "f").unobserve(this.control), super.detach();
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
Rt = /* @__PURE__ */ new WeakMap();
po = /* @__PURE__ */ new WeakSet();
xa = function(t) {
  this.disabled || (t ? this.show() : this.hide());
};
Ae.styles = L`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; outline: none; } .outline { contain: layout style; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; z-index: 1; outline-color: ${_.color}; outline-width: ${_.thickness}; visibility: ${_.visibility}; } .outline.visible { outline-style: solid; } :host(:not([inward])) .outline { outline-offset: ${_.outwardOffset}; } :host([inward]) .outline { outline-offset: calc(${_.inwardOffset} - ${_.thickness}); } :host(:not([inward])) .outline.visible { animation: grow-shrink ${_.duration}; } :host([inward]) .outline.visible { animation: shrink-grow ${_.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @keyframes shrink-grow { 50% { outline-offset: calc( ${_.inwardOffset} - calc(${_.thickness} * ${_.growthFactor}) ); outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @media (prefers-reduced-motion) { :host(:not([inward])) .outline.visible, :host([inward]) .outline.visible { animation: none; } } @media (forced-colors: active) { .outline { outline-color: Highlight; } }`;
m([Y(".outline")], Ae.prototype, "_outline", void 0);
m([g({ type: Boolean, reflect: true })], Ae.prototype, "inward", void 0);
m([g({ type: Boolean, reflect: true })], Ae.prototype, "disabled", void 0);
Ae = m([D("m3e-focus-ring")], Ae);
let bo = class extends $n(Ao(pe(E, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return this.indeterminate ? S`<svg viewBox="0 -960 960 960" fill="currentColor"><path Required d="M240-440v-80h480v80H240Z"/></svg>` : this.checked ? S`<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>` : $;
  }
};
bo.styles = L`:host { display: inline-block; vertical-align: middle; width: var(--m3e-checkbox-icon-size, 1.125rem); height: var(--m3e-checkbox-icon-size, 1.125rem); border-radius: var(--m3e-checkbox-container-shape, 2px); box-sizing: border-box; flex: none; contain: layout style paint; } :host(:not([checked]):not([indeterminate])) { border-width: var(--m3e-checkbox-unselected-outline-thickness, 2px); border-style: solid; } :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { background-color: var(--m3e-checkbox-selected-container-color, ${n.color.primary}); color: var(--m3e-checkbox-selected-icon-color, ${n.color.onPrimary}); } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: var(--m3e-checkbox-unselected-outline-color, ${n.color.onSurfaceVariant}); } :host([disabled]:not([checked]):not([indeterminate])) { border-color: color-mix( in srgb, var(--m3e-checkbox-unselected-disabled-outline-color, ${n.color.onSurface}) var(--m3e-checkbox-unselected-disabled-outline-opacity, 38%), transparent ); } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-container-color, ${n.color.onSurface}) var(--m3e-checkbox-selected-disabled-container-opacity, 38%), transparent ); color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-icon-color, ${n.color.surface}) var(--m3e-checkbox-selected-disabled-icon-opacity, 100%), transparent ); } svg { pointer-events: none; } @media (forced-colors: active) { :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { border-color: Highlight; background-color: Highlight; color: HighlightText; } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: CanvasText; background: Canvas; } :host([disabled]:not([checked]):not([indeterminate])) { border-color: GrayText; background-color: Canvas; } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: GrayText; color: Canvas; } }`;
bo = m([D("m3e-pseudo-checkbox")], bo);
let vo = class extends pa(Ao(pe(E, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return S`<svg class="icon" viewBox="0 0 20 20"><mask id="cutout2"><rect width="100%" height="100%" fill="white"></rect><circle cx="10" cy="10" r="8" fill="black"></circle></mask><circle class="outer circle" cx="10" cy="10" r="10" mask="url(#cutout2)"></circle><circle class="inner circle" cx="10" cy="10" r="5"></circle></svg>`;
  }
};
vo.styles = L`:host { display: inline-block; vertical-align: middle; box-sizing: border-box; width: var(--m3e-radio-icon-size, 1.25rem); height: var(--m3e-radio-icon-size, 1.25rem); flex: none; contain: layout style paint; } .circle { fill: currentColor; } :host(:not([checked])) .circle.inner { opacity: 0; } :host(:not([checked])) { color: var(--m3e-radio-unselected-icon-color, ${n.color.onSurfaceVariant}); } :host([checked]) { color: var(--m3e-radio-selected-icon-color, ${n.color.primary}); } :host([disabled]) { color: color-mix(in srgb, var(--m3e-radio-disabled-icon-color, ${n.color.onSurface}) 38%, transparent); } @media (forced-colors: active) { :host { border-radius: 50%; } :host(:not([checked])) { color: CanvasText; background-color: Canvas; } :host([checked]) { color: HighlightText; background-color: Highlight; } :host([disabled]) { color: GrayText; background-color: Canvas; } }`;
vo = m([D("m3e-pseudo-radio")], vo);
const J = { color: e(`var(--m3e-ripple-color, ${n.color.onSurface})`), opacity: e(`var(--m3e-ripple-opacity, ${n.state.pressedStateLayerOpacity})`), enterDuration: e(`var(--m3e-ripple-enter-duration, ${n.motion.duration.long4})`), exitDuration: e(`var(--m3e-ripple-exit-duration, ${n.motion.duration.short2})`), scaleFactor: e("var(--m3e-ripple-scale-factor, 2.5)") };
var ae, w, qt, Bt, $a, _a;
let me = class extends eo(pe(E, "none")) {
  constructor() {
    super(...arguments), ae.add(this), w.set(this, null), qt.set(this, new To(this, { target: null, minPressedDuration: 150, isPressedKey: (t) => t === " ", callback: (t, { x: o, y: r }) => s(this, ae, "m", _a).call(this, t, o, r) })), this.disabled = false, this.centered = false, this.unbounded = false, this.radius = null;
  }
  get visible() {
    return s(this, w, "f") !== null;
  }
  show(t, o, r = false) {
    s(this, ae, "m", Bt).call(this);
    const l = this.getBoundingClientRect();
    this.centered && (t = l.left + l.width / 2, o = l.top + l.height / 2);
    let i = this.radius;
    if (!i || isNaN(i)) {
      const u = Math.max(Math.abs(t - l.left), Math.abs(t - l.right)), b = Math.max(Math.abs(o - l.top), Math.abs(o - l.bottom));
      i = Math.sqrt(u * u + b * b);
    }
    const d = t - l.left, h = o - l.top;
    y(this, w, document.createElement("div"), "f"), s(this, w, "f").classList.add("ripple"), r && s(this, w, "f").classList.add("persistent"), s(this, w, "f").style.left = `${d - i}px`, s(this, w, "f").style.top = `${h - i}px`, s(this, w, "f").style.width = `${i * 2}px`, s(this, w, "f").style.height = `${i * 2}px`, s(this, w, "f").addEventListener("animationend", () => s(this, ae, "m", $a).call(this, r), { once: true }), s(this, w, "f").addEventListener("transitionend", () => s(this, ae, "m", Bt).call(this), { once: true }), this.shadowRoot?.appendChild(s(this, w, "f"));
  }
  hide() {
    s(this, w, "f")?.classList.add("exit");
  }
  attach(t) {
    super.attach(t), s(this, qt, "f").observe(t);
  }
  detach() {
    this.control && s(this, qt, "f").unobserve(this.control), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), s(this, ae, "m", Bt).call(this);
  }
  updated(t) {
    super.updated(t), t.has("disabled") && this.disabled && this.hide();
  }
};
w = /* @__PURE__ */ new WeakMap();
qt = /* @__PURE__ */ new WeakMap();
ae = /* @__PURE__ */ new WeakSet();
Bt = function() {
  s(this, w, "f")?.remove(), y(this, w, null, "f");
};
$a = function(t) {
  t ? s(this, w, "f")?.classList.add("pressed") : this.hide();
};
_a = function(t, o, r) {
  this.disabled || (t ? this.show(o, r, true) : this.hide());
};
me.styles = L`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } :host(:not([unbounded])) { overflow: hidden; } :host(:not([unbounded])) .ripple { contain: layout style paint; } :host([unbounded]) .ripple { contain: layout style; } .ripple { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; transform: scale(0); border-radius: ${n.shape.corner.full}; background-color: color-mix(in srgb, ${J.color} ${J.opacity}, transparent); will-change: background-color, opacity; animation: ripple ${J.enterDuration} linear; } .ripple.persistent.pressed { transform: scale(${J.scaleFactor}); } .ripple.exit { transition: opacity ${J.exitDuration} cubic-bezier(0, 0, 0.2, 0.1); opacity: 0; } @keyframes ripple { to { transform: scale(${J.scaleFactor}); } } @media (prefers-reduced-motion) { .ripple { transform: scale(${J.scaleFactor}); animation-duration: 90ms; } .ripple.exit { transition-duration: 10ms; } } @media (forced-colors: active) { .ripple { display: none; } }`;
m([g({ type: Boolean, reflect: true })], me.prototype, "disabled", void 0);
m([g({ type: Boolean, reflect: true })], me.prototype, "centered", void 0);
m([g({ type: Boolean, reflect: true })], me.prototype, "unbounded", void 0);
m([g({ type: Number })], me.prototype, "radius", void 0);
me = m([D("m3e-ripple")], me);
var Ye;
let Pe = class extends Jt(E) {
  constructor() {
    super(...arguments), Ye.set(this, () => this._updateScroll()), this.dividers = "above-below", this.thin = false;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("scroll", s(this, Ye, "f"));
  }
  update(t) {
    super.update(t), t.has("dividers") && (this.removeEventListener("scroll", s(this, Ye, "f")), this.dividers !== "none" && this.addEventListener("scroll", s(this, Ye, "f"), { passive: true }));
  }
  render() {
    return S`<slot @slotchange="${this._updateScroll}"></slot>`;
  }
  _updateScroll() {
    const t = (this.dividers === "above" || this.dividers === "above-below") && this.scrollTop > 0, o = (this.dividers === "below" || this.dividers === "above-below") && this.scrollHeight - this.scrollTop - this.clientHeight > 1;
    lt(this, "--above", t), lt(this, "--below", o);
  }
};
Ye = /* @__PURE__ */ new WeakMap();
Pe.styles = L`:host { display: block; overflow-y: auto; position: relative; box-sizing: border-box; scrollbar-color: ${n.scrollbar.color}; border-top: var(--m3e-divider-thickness, 1px) solid transparent; border-bottom: var(--m3e-divider-thickness, 1px) solid transparent; outline-color: ${_.color}; outline-width: ${_.thickness}; outline-offset: ${_.outwardOffset}; } :host([thin]) { scrollbar-width: ${n.scrollbar.thinWidth}; } :host(:not([thin])) { scrollbar-width: ${n.scrollbar.width}; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: var(--m3e-divider-color, ${n.color.outlineVariant}); } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: var(--m3e-divider-color, ${n.color.outlineVariant}); } :host(:focus-visible) { outline-style: solid; animation: grow-shrink ${_.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @media (forced-colors: active) { :host { border-top: var(--m3e-divider-thickness, 1px) solid Canvas; border-bottom: var(--m3e-divider-thickness, 1px) solid Canvas; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: GrayText; } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: GrayText; } } @media (prefers-reduced-motion) { :host(:focus-visible) { animation: none; } }`;
m([g()], Pe.prototype, "dividers", void 0);
m([g({ type: Boolean, reflect: true })], Pe.prototype, "thin", void 0);
m([zo(40)], Pe.prototype, "_updateScroll", null);
Pe = m([D("m3e-scroll-container")], Pe);
var at, ce, ka, Po;
let Xt = class extends Jt(E) {
  constructor() {
    super(...arguments), at.add(this), ce.set(this, new Array()), this.selectedIndex = null;
  }
  connectedCallback() {
    super.connectedCallback(), j(this, "--no-animate");
  }
  update(t) {
    super.update(t), t.has("selectedIndex") && (this.selectedIndex === null && j(this, "--no-animate"), s(this, at, "m", Po).call(this), this.selectedIndex !== null && Gt(this, "--no-animate") && requestAnimationFrame(() => {
      this.selectedIndex !== null && k(this, "--no-animate");
    }));
  }
  render() {
    return S`<slot @slotchange="${s(this, at, "m", ka)}"></slot>`;
  }
};
ce = /* @__PURE__ */ new WeakMap();
at = /* @__PURE__ */ new WeakSet();
ka = function(t) {
  const o = [...t.target.assignedElements({ flatten: true })];
  for (const r of s(this, ce, "f").filter((l) => !o.includes(l))) r.classList.remove("-before"), r.classList.remove("-after"), r.removeAttribute("inert");
  y(this, ce, o, "f"), s(this, at, "m", Po).call(this);
};
Po = function() {
  const t = this.selectedIndex ?? s(this, ce, "f").length;
  for (let o = 0; o < s(this, ce, "f").length; o++) {
    const r = s(this, ce, "f")[o];
    r.classList.toggle("-before", o < t), r.classList.toggle("-after", o > t), r.toggleAttribute("inert", o !== t);
  }
};
Xt.styles = L`:host { display: flex; position: relative; overflow: hidden; } ::slotted(*) { width: 100%; top: 0; transition: ${e(`inset-inline-start var(--m3e-slide-animation-duration, ${n.motion.duration.long2}) ${n.motion.easing.standard},
        visibility var(--m3e-slide-animation-duration, ${n.motion.duration.long2}) ${n.motion.easing.standard} allow-discrete`)}; } ::slotted(.-before), ::slotted(.-after) { visibility: hidden; position: absolute; } ::slotted(.-before) { inset-inline-start: -100%; } ::slotted(.-after) { inset-inline-start: 100%; } ::slotted(:not(.-before):not(.-after)) { position: relative; inset-inline-start: 0; } :host(:is(:state(--no-animate), :--no-animate)) ::slotted(*) { transition: none; } @media (prefers-reduced-motion) { ::slotted(*) { transition: none; } }`;
m([g({ attribute: "selected-index", type: Number, reflect: true })], Xt.prototype, "selectedIndex", void 0);
Xt = m([D("m3e-slide")], Xt);
const xe = { hoverColor: e(`var(--m3e-state-layer-hover-color, ${n.color.onSurface})`), hoverOpacity: e(`var(--m3e-state-layer-hover-opacity, ${n.state.hoverStateLayerOpacity})`), focusColor: e(`var(--m3e-state-layer-focus-color, ${n.color.onSurface})`), focusOpacity: e(`var(--m3e-state-layer-focus-opacity, ${n.state.focusStateLayerOpacity})`), duration: e(`var(--m3e-state-layer-duration, ${n.motion.duration.medium1})`), easing: e(`var(--m3e-state-layer-easing, ${n.motion.easing.standard})`) };
var Wt, Ht, Ot, Ca, wa;
let Ie = class extends eo(pe(E, "none")) {
  constructor() {
    super(...arguments), Wt.add(this), Ht.set(this, new ra(this, { target: null, callback: (t) => s(this, Wt, "m", Ca).call(this, t) })), Ot.set(this, new mt(this, { target: null, callback: (t, o) => s(this, Wt, "m", wa).call(this, o) })), this.disabled = false, this.disableHover = false;
  }
  show(t) {
    this._layer?.classList.toggle(t, true);
  }
  hide(t) {
    this._layer?.classList.toggle(t, false);
  }
  attach(t) {
    super.attach(t), s(this, Ht, "f").observe(t), s(this, Ot, "f").observe(t);
  }
  detach() {
    this.control && (s(this, Ht, "f").unobserve(this.control), s(this, Ot, "f").unobserve(this.control)), super.detach();
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
Ht = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakSet();
Ca = function(t) {
  !this.disabled && !this.disableHover && (t ? this.show("hover") : this.hide("hover"));
};
wa = function(t) {
  this.disabled || (t ? this.show("focused") : this.hide("focused"));
};
Ie.styles = L`:host { display: block; } :host, .layer { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .layer { contain: layout style paint; will-change: background-color; transition: ${e(`background-color ${xe.duration} ${xe.easing}`)}; } .layer.focused { background-color: color-mix(in srgb, ${xe.focusColor} ${xe.focusOpacity}, transparent); } .layer.hover { background-color: color-mix(in srgb, ${xe.hoverColor} ${xe.hoverOpacity}, transparent); } @media (prefers-reduced-motion) { .layer { transition: none; } } @media (forced-colors: active) { .layer { display: none; } }`;
m([Y(".layer")], Ie.prototype, "_layer", void 0);
m([g({ type: Boolean, reflect: true })], Ie.prototype, "disabled", void 0);
m([g({ attribute: "disable-hover", type: Boolean, reflect: true })], Ie.prototype, "disableHover", void 0);
Ie = m([D("m3e-state-layer")], Ie);
var U, ct, B, ne, fo, Sa, go, yo;
let X = yo = class extends E {
  constructor() {
    super(), U.add(this), ct.set(this, `m3e-text-highlight-${yo.__nextId++}`), B.set(this, new Array()), ne.set(this, null), this.disabled = false, this.term = "", this.caseSensitive = false, this.mode = "contains", this.isSupported && (y(this, ne, new CSSStyleSheet(), "f"), s(this, ne, "f").replaceSync(L`::highlight(${e(s(this, ct, "f"))}) { background-color: var(--m3e-text-highlight-container-color, ${n.color.secondaryContainer}); color: var(--m3e-text-highlight-color, ${n.color.onSecondaryContainer}); text-decoration: var(--m3e-text-highlight-decoration); text-shadow: var(--m3e-text-highlight-shadow); }`.toString()));
  }
  get isSupported() {
    return !!CSS.highlights;
  }
  get ranges() {
    return s(this, B, "f");
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.shadowRoot && s(this, ne, "f") && !this.shadowRoot.adoptedStyleSheets.includes(s(this, ne, "f")) && this.shadowRoot.adoptedStyleSheets.push(s(this, ne, "f"));
  }
  updated(t) {
    super.updated(t), (t.has("term") || t.has("caseSensitive") || t.has("disabled")) && s(this, U, "m", go).call(this);
  }
  render() {
    return S`<slot @slotchange="${s(this, U, "m", go)}"></slot>`;
  }
};
ct = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakMap();
ne = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakSet();
fo = function(t) {
  return !/^\s*$/.test(t.data);
};
Sa = function a(t, o) {
  t instanceof HTMLSlotElement ? t.assignedNodes({ flatten: true }).forEach((r) => {
    switch (r.nodeType) {
      case Node.TEXT_NODE:
        s(this, U, "m", fo).call(this, r) && o.push(r);
        break;
      case Node.ELEMENT_NODE:
        s(this, U, "m", a).call(this, r, o);
        break;
    }
  }) : t.childNodes.forEach((r) => {
    switch (r.nodeType) {
      case Node.TEXT_NODE:
        s(this, U, "m", fo).call(this, r) && o.push(r);
        break;
      case Node.ELEMENT_NODE:
        s(this, U, "m", a).call(this, r, o);
        break;
    }
  });
};
go = function() {
  if (!this.isSupported || !this.isConnected || (CSS.highlights.delete(s(this, ct, "f")), s(this, B, "f").length = 0, this.disabled)) return;
  if (!this.term) {
    this.dispatchEvent(new CustomEvent("highlight", { detail: [...s(this, B, "f")], bubbles: false, composed: false }));
    return;
  }
  const t = new Array();
  if (s(this, U, "m", Sa).call(this, this, t), t.length > 0) {
    const o = this.caseSensitive ? this.term : this.term.toLowerCase();
    switch (this.mode) {
      case "starts-with":
        {
          const r = t[0];
          if (((this.caseSensitive ? r.textContent : r.textContent?.toLowerCase()) ?? "").startsWith(o)) {
            const i = new Range();
            i.setStart(r, 0), i.setEnd(r, o.length), s(this, B, "f").push(i);
          }
        }
        break;
      case "ends-with":
        {
          const r = t[t.length - 1], l = (this.caseSensitive ? r.textContent : r.textContent?.toLowerCase()) ?? "";
          if (l.endsWith(o)) {
            const i = l.length - o.length, d = i + o.length, h = new Range();
            h.setStart(r, i), h.setEnd(r, d), s(this, B, "f").push(h);
          }
        }
        break;
      case "contains":
        y(this, B, t.map((r) => ({ el: r, text: (this.caseSensitive ? r.textContent : r.textContent?.toLowerCase()) ?? "" })).map(({ el: r, text: l }) => {
          const i = new Array();
          let d = 0;
          for (; d < l.length; ) {
            const h = l.indexOf(o, d);
            if (h === -1) break;
            i.push(h), d = h + o.length;
          }
          return i.map((h) => {
            const u = new Range();
            return u.setStart(r, h), u.setEnd(r, h + o.length), u;
          });
        }).flat(), "f");
        break;
    }
    s(this, B, "f").length > 0 && CSS.highlights.set(s(this, ct, "f"), new Highlight(...s(this, B, "f")));
  }
  this.dispatchEvent(new CustomEvent("highlight", { detail: [...s(this, B, "f")], bubbles: false, composed: false }));
};
X.styles = L`:host { display: contents; }`;
X.__nextId = 0;
m([g({ type: Boolean, reflect: true })], X.prototype, "disabled", void 0);
m([g()], X.prototype, "term", void 0);
m([g({ attribute: "case-sensitive", type: Boolean })], X.prototype, "caseSensitive", void 0);
m([g()], X.prototype, "mode", void 0);
X = yo = m([D("m3e-text-highlight")], X);
let xo = class extends E {
  render() {
    return S`<span class="base"><slot></slot></span>`;
  }
};
xo.styles = L`:host { flex: 1 1 auto; display: inline-flex; align-items: center; flex-wrap: nowrap; min-width: 0; } .base { flex: 1 1 auto; display: inline; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`;
xo = m([D("m3e-text-overflow")], xo);
const x = { "extra-small": { containerHeight: e(`calc(var(--m3e-button-extra-small-container-height, var(--m3e-button-container-height, 2rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-extra-small-outline-thickness, var(--m3e-button-outline-thickness, 1px))"), labelTextFontSize: e(`var(--m3e-button-extra-small-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.label.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-extra-small-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.label.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-extra-small-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.label.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-extra-small-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.label.large.tracking}))`), iconSize: e("var(--m3e-button-extra-small-icon-size, var(--m3e-button-icon-size, 1.25rem))"), shapeRound: e(`var(--m3e-button-extra-small-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-extra-small-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.medium}))`), selectedShapeRound: e(`var(--m3e-button-extra-small-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.medium}))`), selectedShapeSquare: e(`var(--m3e-button-extra-small-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-extra-small-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.small}))`), leadingSpace: e("var(--m3e-button-extra-small-leading-space, var(--m3e-button-leading-space, 0.75rem))"), trailingSpace: e("var(--m3e-button-extra-small-trailing-space, var(--m3e-button-trailing-space, 0.75rem))"), iconLabelSpace: e("var(--m3e-button-extra-small-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))") }, small: { containerHeight: e(`calc(var(--m3e-button-small-container-height, var(--m3e-button-container-height, 2.5rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-small-outline-thickness, var(--m3e-button-outline-thickness, 1px))"), labelTextFontSize: e(`var(--m3e-button-small-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.label.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-small-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.label.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-small-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.label.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-small-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.label.large.tracking}))`), iconSize: e("var(--m3e-button-small-icon-size, var(--m3e-button-icon-size, 1.25rem))"), shapeRound: e(`var(--m3e-button-small-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-small-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.medium}))`), selectedShapeRound: e(`var(--m3e-button-small-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.medium}))`), selectedShapeSquare: e(`var(--m3e-button-small-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-small-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.small}))`), leadingSpace: e("var(--m3e-button-small-leading-space, var(--m3e-button-leading-space, 1rem))"), trailingSpace: e("var(--m3e-button-small-trailing-space, var(--m3e-button-trailing-space, 1rem))"), iconLabelSpace: e("var(--m3e-button-small-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))") }, medium: { containerHeight: e(`calc(var(--m3e-button-medium-container-height, var(--m3e-button-container-height, 3.5rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-medium-outline-thickness, var(--m3e-button-outline-thickness, 1px))"), labelTextFontSize: e(`var(--m3e-button-medium-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.body.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-medium-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.body.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-medium-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.body.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-medium-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.body.large.tracking}))`), iconSize: e("var(--m3e-button-medium-icon-size, var(--m3e-button-icon-size, 1.5rem))"), shapeRound: e(`var(--m3e-button-medium-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-medium-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.large}))`), selectedShapeRound: e(`var(--m3e-button-medium-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.large}))`), selectedShapeSquare: e(`var(--m3e-button-medium-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-medium-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.medium}))`), leadingSpace: e("var(--m3e-button-medium-leading-space, var(--m3e-button-leading-space, 1.5rem))"), trailingSpace: e("var(--m3e-button-medium-trailing-space, var(--m3e-button-trailing-space, 1.5rem))"), iconLabelSpace: e("var(--m3e-button-medium-icon-label-space, var(--m3e-button-icon-label-space, 0.5rem))") }, large: { containerHeight: e(`calc(var(--m3e-button-large-container-height, var(--m3e-button-container-height, 6rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-large-outline-thickness, var(--m3e-button-outline-thickness, 2px))"), labelTextFontSize: e(`var(--m3e-button-large-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.headline.small.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-large-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.headline.small.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-large-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.headline.small.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-large-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.headline.small.tracking}))`), iconSize: e("var(--m3e-button-large-icon-size, var(--m3e-button-icon-size, 2rem))"), shapeRound: e(`var(--m3e-button-large-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-large-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.extraLarge}))`), selectedShapeRound: e(`var(--m3e-button-large-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.extraLarge}))`), selectedShapeSquare: e(`var(--m3e-button-large-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-large-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.large}))`), leadingSpace: e("var(--m3e-button-large-leading-space, var(--m3e-button-leading-space, 3rem))"), trailingSpace: e("var(--m3e-button-large-trailing-space, var(--m3e-button-trailing-space, 3rem))"), iconLabelSpace: e("var(--m3e-button-large-icon-label-space, var(--m3e-button-icon-label-space, 0.75rem))") }, "extra-large": { containerHeight: e(`calc(var(--m3e-button-extra-large-container-height, var(--m3e-button-container-height, 8.5rem)) + ${n.density.calc(-3)})`), outlineThickness: e("var(--m3e-button-extra-large-outline-thickness, var(--m3e-button-outline-thickness, 3px))"), labelTextFontSize: e(`var(--m3e-button-extra-large-label-text-font-size, var(--m3e-button-label-text-font-size, ${n.typescale.standard.headline.large.fontSize}))`), labelTextFontWeight: e(`var(--m3e-button-extra-large-label-text-font-weight, var(--m3e-button-label-text-font-weight, ${n.typescale.standard.headline.large.fontWeight}))`), labelTextLineHeight: e(`var(--m3e-button-extra-large-label-text-line-height, var(--m3e-button-label-text-line-height, ${n.typescale.standard.headline.large.lineHeight}))`), labelTextTracking: e(`var(--m3e-button-extra-large-label-text-tracking, var(--m3e-button-label-text-tracking, ${n.typescale.standard.headline.large.tracking}))`), iconSize: e("var(--m3e-button-extra-large-icon-size, var(--m3e-button-icon-size, 2.5rem))"), shapeRound: e(`var(--m3e-button-extra-large-shape-round, var(--m3e-button-shape-round, ${n.shape.corner.full}))`), shapeSquare: e(`var(--m3e-button-extra-large-shape-square, var(--m3e-button-shape-square, ${n.shape.corner.extraLarge}))`), selectedShapeRound: e(`var(--m3e-button-extra-large-selected-shape-round, var(--m3e-button-selected-shape-round, ${n.shape.corner.extraLarge}))`), selectedShapeSquare: e(`var(--m3e-button-extra-large-selected-shape-square, var(--m3e-button-selected-shape-square, ${n.shape.corner.full}))`), shapePressedMorph: e(`var(--m3e-button-extra-large-shape-pressed-morph, var(--m3e-button-shape-pressed-morph, ${n.shape.corner.large}))`), leadingSpace: e("var(--m3e-button-extra-large-leading-space, var(--m3e-button-leading-space, 4rem))"), trailingSpace: e("var(--m3e-button-extra-large-trailing-space, var(--m3e-button-trailing-space, 4rem))"), iconLabelSpace: e("var(--m3e-button-extra-large-icon-label-space, var(--m3e-button-icon-label-space, 1rem))") } };
function He(a2) {
  return L`:host([size="${e(a2)}"]) .base { height: ${x[a2].containerHeight}; } :host([size="${e(a2)}"]) .wrapper { padding-inline-start: calc(${x[a2].leadingSpace} - calc(var(--_adjacent-shrink, 0px) / 2)); padding-inline-end: calc(${x[a2].trailingSpace} - calc(var(--_adjacent-shrink, 0px) / 2)); column-gap: ${x[a2].iconLabelSpace}; } :host([size="${e(a2)}"]) .label { font-size: ${x[a2].labelTextFontSize}; font-weight: ${x[a2].labelTextFontWeight}; line-height: ${x[a2].labelTextLineHeight}; letter-spacing: ${x[a2].labelTextTracking}; } :host([size="${e(a2)}"]) .icon { font-size: ${x[a2].iconSize}; --m3e-icon-size: ${x[a2].iconSize}; } :host([size="${e(a2)}"]) .base { outline-offset: calc(0px - ${x[a2].outlineThickness}); outline-width: ${x[a2].outlineThickness}; } :host(:not(:is(:state(--connected), :--connected))[size="${e(a2)}"][shape="rounded"]) .base { border-radius: var(--_button-shape, ${x[a2].shapeRound}); } :host( :is(:state(--connected), :--connected)[size="${e(a2)}"][shape="rounded"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${x[a2].shapeRound}); } :host( :not(:is(:state(--connected), :--connected))[size="${e(a2)}"][shape="rounded"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: ${x[a2].selectedShapeRound}; } :host(:not(:is(:state(--connected), :--connected))[size="${e(a2)}"][shape="square"]) .base { border-radius: ${x[a2].shapeSquare}; } :host( :not(:is(:state(--connected), :--connected))[size="${e(a2)}"][shape="square"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${x[a2].selectedShapeSquare}); } :host(:not(:is(:state(--connected), :--connected))[size="${e(a2)}"]:is(:state(--pressed), :--pressed)) .base { border-radius: ${x[a2].shapePressedMorph}; } :host(:is(:state(--connected), :--connected)[size="${e(a2)}"][shape="rounded"]:not([toggle][selected])) .base { border-start-start-radius: var( --_button-rounded-start-shape, var(--_button-shape, ${x[a2].shapeRound}) ); border-end-start-radius: var( --_button-rounded-start-shape, var(--_button-shape, ${x[a2].shapeRound}) ); border-start-end-radius: var( --_button-rounded-end-shape, var(--_button-shape, ${x[a2].shapeRound}) ); border-end-end-radius: var( --_button-rounded-end-shape, var(--_button-shape, ${x[a2].shapeRound}) ); } :host(:is(:state(--connected), :--connected)[size="${e(a2)}"][shape="square"]) .base { border-start-start-radius: var(--_button-square-start-shape, ${x[a2].shapeSquare}); border-end-start-radius: var(--_button-square-start-shape, ${x[a2].shapeSquare}); border-start-end-radius: var(--_button-square-end-shape, ${x[a2].shapeSquare}); border-end-end-radius: var(--_button-square-end-shape, ${x[a2].shapeSquare}); } :host( :is(:state(--connected), :--connected)[size="${e(a2)}"][shape="square"][toggle][selected]:not( :is(:state(--pressed), :--pressed) ) ) .base { border-radius: var(--_button-shape, ${x[a2].selectedShapeSquare}); } :host(:is(:state(--connected), :--connected)[size="${e(a2)}"]:is(:state(--pressed), :--pressed)) .base { border-start-start-radius: var(--_button-start-shape-pressed-morph, ${x[a2].shapePressedMorph}); border-end-start-radius: var(--_button-start-shape-pressed-morph, ${x[a2].shapePressedMorph}); border-start-end-radius: var(--_button-end-shape-pressed-morph, ${x[a2].shapePressedMorph}); border-end-end-radius: var(--_button-end-shape-pressed-morph, ${x[a2].shapePressedMorph}); }`;
}
const Un = [He("extra-small"), He("small"), He("medium"), He("large"), He("extra-large")], jn = L`:host { display: inline-block; outline: none; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); } .base { box-sizing: border-box; vertical-align: middle; display: inline-flex; align-items: center; justify-content: center; position: relative; width: 100%; transition: ${e(`background-color ${n.motion.duration.short4} ${n.motion.easing.standard}`)}; } .touch { position: absolute; height: 3rem; left: 0; right: 0; } :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base { transition: ${e(`background-color ${n.motion.duration.short4} ${n.motion.easing.standard},
          border-radius ${n.motion.spring.fastEffects}`)}; } .wrapper { width: 100%; overflow: hidden; display: inline-flex; align-items: center; justify-content: center; } .label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: ${e(`color ${n.motion.duration.short4} ${n.motion.easing.standard}`)}; } .icon { transition: ${e(`color ${n.motion.duration.short4} ${n.motion.easing.standard}`)}; } :host(:not(:disabled):not([disabled-interactive])) { cursor: pointer; } :host([disabled-interactive]) { cursor: not-allowed; } ::slotted([slot="icon"]), ::slotted([slot="selected-icon"]), ::slotted([slot="trailing-icon"]) { font-size: inherit !important; flex: none; } ::slotted(svg[slot="icon"]), ::slotted(svg[slot="selected-icon"]), ::slotted(svg[slot="trailing-icon"]) { width: 1em; height: 1em; } :host([toggle]:not([selected])) .base.with-selected-icon slot[name="selected-icon"], :host([toggle][selected]) .base.with-selected-icon slot[name="icon"] { display: none; } a { all: unset; display: block; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; z-index: 1; } :host(:is(:state(--grouped), :--grouped):is(:state(--connected), :--connected)) { flex: 1 1 auto; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) { transition: ${e(`width ${n.motion.spring.fastEffects}`)}; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) .wrapper { transition: ${e(`padding-inline ${n.motion.spring.fastEffects}`)}; } :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) { flex-shrink: 0; flex-grow: 0; } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):not( :is(:state(--pressed), :--pressed, :state(--adjacent-pressed), :--adjacent-pressed) ) ) { width: var(--_button-width); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):not( :is(:state(--pressed), :--pressed) ):is(:state(--adjacent-pressed), :--adjacent-pressed) ) { width: calc(var(--_button-width) - var(--_adjacent-shrink, 0px)); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):is( :state(--pressed), :--pressed ):not([disabled-interactive]):not(:disabled) ) { width: calc( var(--_button-width) + calc(var(--_button-width) * var(--m3e-standard-button-group-width-multiplier, 0.15)) ); } :host( :is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected)):is( :state(--adjacent-pressed), :--adjacent-pressed ):not(:is(:state(--pressed), :--pressed)) ) .label { text-overflow: clip; } @media (forced-colors: active) { .base, .label, .icon { transition: none; } :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base { transition: ${e(`border-radius ${n.motion.spring.fastEffects}`)}; } :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .base { background-color: ButtonFace; outline-color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .label, :host([variant]:not(:disabled):not([disabled-interactive]):not([toggle])) .icon { color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .base { background-color: ButtonFace; outline-color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .label, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected]):focus) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .icon, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle]:not([selected])) .icon, :host([variant]:not(:disabled):not([disabled-interactive])[toggle]:not([selected]):focus) .icon { color: ButtonText; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .base { background-color: ButtonText; outline: none; } :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .label, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle][selected]) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]:focus) .label, :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]) .icon, :host([variant]:hover:not(:disabled):not([disabled-interactive])[toggle][selected]) .icon, :host([variant]:not(:disabled):not([disabled-interactive])[toggle][selected]:focus) .icon { forced-color-adjust: none; color: ButtonFace; background-color: ButtonText; } :host([variant]:disabled) .base, :host([variant][disabled-interactive]) .base { outline-color: GrayText; background-color: unset; } :host([variant]:disabled) .label, :host([variant][disabled-interactive]) .label, :host([variant]:disabled) .icon, :host([variant][disabled-interactive]) .icon { color: GrayText; } .base { outline-style: solid; } :host([size="extra-small"]) .base { outline-offset: calc(0px - var(--m3e-button-extra-small-outline-thickness, 1px)); outline-width: var(--m3e-button-extra-small-outline-thickness, 1px); } :host([size="small"]) .base { outline-offset: calc(0px - var(--m3e-button-small-outline-thickness, 1px)); outline-width: var(--m3e-button-small-outline-thickness, 1px); } :host([size="medium"]) .base { outline-offset: calc(0px - var(--m3e-button-medium-outline-thickness, 1px)); outline-width: var(--m3e-button-medium-outline-thickness, 1px); } :host([size="large"]) .base { outline-offset: calc(0px - var(--m3e-button-large-outline-thickness, 2px)); outline-width: var(--m3e-button-large-outline-thickness, 2px); } :host([size="extra-large"]) .base { outline-offset: calc(0px - var(--m3e-button-extra-large-outline-thickness, 3px)); outline-width: var(--m3e-button-extra-large-outline-thickness, 3px); } } @media (prefers-reduced-motion) { :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))), :host(:is(:state(--grouped), :--grouped):not(:is(:state(--connected), :--connected))) .wrapper, :host(:is(:state(--pressed), :--pressed)) .base, :host(:is(:state(--resting), :--resting)) .base, .base, .label, .icon { transition: none; } }`, p = { elevated: { labelTextColor: e(`var(--m3e-elevated-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.primary}))`), iconColor: e(`var(--m3e-elevated-button-icon-color, var(--m3e-button-icon-color, ${n.color.primary}))`), containerColor: e(`var(--m3e-elevated-button-container-color, var(--m3e-button-container-color, ${n.color.surfaceContainerLow}))`), containerElevation: e(`var(--m3e-elevated-button-container-elevation, var(--m3e-button-container-elevation, ${n.elevation.level1}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-elevated-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.primary}))`), unselectedContainerColor: e(`var(--m3e-elevated-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${n.color.surfaceContainerLow}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.onPrimary}))`), selectedIconColor: e(`var(--m3e-elevated-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.onPrimary}))`), selectedContainerColor: e(`var(--m3e-elevated-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.primary}))`), disabled: { containerColor: e(`var(--m3e-elevated-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-elevated-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-elevated-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-elevated-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-elevated-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-elevated-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), containerElevation: e(`var(--m3e-elevated-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${n.elevation.level0}))`) }, hover: { iconColor: e(`var(--m3e-elevated-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-elevated-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-elevated-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-elevated-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), containerElevation: e(`var(--m3e-elevated-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${n.elevation.level2}))`), unselectedIconColor: e(`var(--m3e-elevated-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-elevated-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-elevated-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-elevated-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.onPrimary}))`) }, focus: { iconColor: e(`var(--m3e-elevated-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-elevated-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-elevated-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-elevated-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), containerElevation: e(`var(--m3e-elevated-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${n.elevation.level1}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-elevated-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-elevated-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-elevated-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-elevated-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.onPrimary}))`) }, pressed: { iconColor: e(`var(--m3e-elevated-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-elevated-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-elevated-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-elevated-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), containerElevation: e(`var(--m3e-elevated-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${n.elevation.level1}))`), unselectedLabelTextColor: e(`var(--m3e-elevated-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-elevated-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-elevated-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-elevated-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-elevated-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-elevated-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.onPrimary}))`) } }, outlined: { labelTextColor: e(`var(--m3e-outlined-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.onSurfaceVariant}))`), iconColor: e(`var(--m3e-outlined-button-icon-color, var(--m3e-button-icon-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-outline-color, var(--m3e-button-outline-color, ${n.color.outlineVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedIconColor: e(`var(--m3e-outlined-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.onSurfaceVariant}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedIconColor: e(`var(--m3e-outlined-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedContainerColor: e(`var(--m3e-outlined-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.inverseSurface}))`), disabled: { containerColor: e(`var(--m3e-outlined-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-outlined-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-outlined-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-outlined-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-outlined-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-outlined-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), outlineColor: e(`var(--m3e-outlined-button-disabled-outline-color, var(--m3e-button-disabled-outline-color, ${n.color.outlineVariant}))`) }, hover: { iconColor: e(`var(--m3e-outlined-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.onSurfaceVariant}))`), labelTextColor: e(`var(--m3e-outlined-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-hover-outline-color, var(--m3e-button-hover-outline-color, ${n.color.outlineVariant}))`), stateLayerColor: e(`var(--m3e-outlined-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.onSurfaceVariant}))`), stateLayerOpacity: e(`var(--m3e-outlined-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-outlined-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-outlined-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-outlined-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedStateLayerColor: e(`var(--m3e-outlined-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.inverseOnSurface}))`) }, focus: { iconColor: e(`var(--m3e-outlined-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.onSurfaceVariant}))`), labelTextColor: e(`var(--m3e-outlined-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-focus-outline-color, var(--m3e-button-focus-outline-color, ${n.color.outlineVariant}))`), stateLayerColor: e(`var(--m3e-outlined-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.onSurfaceVariant}))`), stateLayerOpacity: e(`var(--m3e-outlined-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-outlined-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-outlined-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-outlined-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedStateLayerColor: e(`var(--m3e-outlined-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.inverseOnSurface}))`) }, pressed: { iconColor: e(`var(--m3e-outlined-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.onSurfaceVariant}))`), labelTextColor: e(`var(--m3e-outlined-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.onSurfaceVariant}))`), outlineColor: e(`var(--m3e-outlined-button-pressed-outline-color, var(--m3e-button-pressed-outline-color, ${n.color.outlineVariant}))`), stateLayerColor: e(`var(--m3e-outlined-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.onSurfaceVariant}))`), stateLayerOpacity: e(`var(--m3e-outlined-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-outlined-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-outlined-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-outlined-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-outlined-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.inverseOnSurface}))`), selectedLabelTextColor: e(`var(--m3e-outlined-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.inverseOnSurface}))`), selectedStateLayerColor: e(`var(--m3e-outlined-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.inverseOnSurface}))`) } }, filled: { labelTextColor: e(`var(--m3e-filled-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.onPrimary}))`), iconColor: e(`var(--m3e-filled-button-icon-color, var(--m3e-button-icon-color, ${n.color.onPrimary}))`), containerColor: e(`var(--m3e-filled-button-container-color, var(--m3e-button-container-color, ${n.color.primary}))`), containerElevation: e(`var(--m3e-filled-button-container-elevation, var(--m3e-button-container-elevation, ${n.elevation.level0}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedIconColor: e(`var(--m3e-filled-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedContainerColor: e(`var(--m3e-filled-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${n.color.surfaceContainer}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.onPrimary}))`), selectedIconColor: e(`var(--m3e-filled-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.onPrimary}))`), selectedContainerColor: e(`var(--m3e-filled-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.primary}))`), disabled: { containerColor: e(`var(--m3e-filled-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-filled-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-filled-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-filled-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-filled-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-filled-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), containerElevation: e(`var(--m3e-filled-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${n.elevation.level0}))`) }, hover: { iconColor: e(`var(--m3e-filled-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.onPrimary}))`), labelTextColor: e(`var(--m3e-filled-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.onPrimary}))`), stateLayerColor: e(`var(--m3e-filled-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.onPrimary}))`), stateLayerOpacity: e(`var(--m3e-filled-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), containerElevation: e(`var(--m3e-filled-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${n.elevation.level1}))`), unselectedIconColor: e(`var(--m3e-filled-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-filled-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-filled-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-filled-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.onPrimary}))`) }, focus: { iconColor: e(`var(--m3e-filled-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.onPrimary}))`), labelTextColor: e(`var(--m3e-filled-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.onPrimary}))`), stateLayerColor: e(`var(--m3e-filled-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.onPrimary}))`), stateLayerOpacity: e(`var(--m3e-filled-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), containerElevation: e(`var(--m3e-filled-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-filled-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-filled-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-filled-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-filled-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.onPrimary}))`) }, pressed: { iconColor: e(`var(--m3e-filled-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.onPrimary}))`), labelTextColor: e(`var(--m3e-filled-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.onPrimary}))`), stateLayerColor: e(`var(--m3e-filled-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.onPrimary}))`), stateLayerOpacity: e(`var(--m3e-filled-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), containerElevation: e(`var(--m3e-filled-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-filled-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.onSurfaceVariant}))`), unselectedLabelTextColor: e(`var(--m3e-filled-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.onSurfaceVariant}))`), unselectedStateLayerColor: e(`var(--m3e-filled-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.onSurfaceVariant}))`), selectedIconColor: e(`var(--m3e-filled-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.onPrimary}))`), selectedLabelTextColor: e(`var(--m3e-filled-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.onPrimary}))`), selectedStateLayerColor: e(`var(--m3e-filled-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.onPrimary}))`) } }, tonal: { labelTextColor: e(`var(--m3e-tonal-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.onSecondaryContainer}))`), iconColor: e(`var(--m3e-tonal-button-icon-color, var(--m3e-button-icon-color, ${n.color.onSecondaryContainer}))`), containerColor: e(`var(--m3e-tonal-button-container-color, var(--m3e-button-container-color, ${n.color.secondaryContainer}))`), containerElevation: e(`var(--m3e-tonal-button-container-elevation, var(--m3e-button-container-elevation, ${n.elevation.level0}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedIconColor: e(`var(--m3e-tonal-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedContainerColor: e(`var(--m3e-tonal-button-unselected-container-color, var(--m3e-button-unselected-container-color, ${n.color.secondaryContainer}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.onSecondary}))`), selectedIconColor: e(`var(--m3e-tonal-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.onSecondary}))`), selectedContainerColor: e(`var(--m3e-tonal-button-selected-container-color, var(--m3e-button-selected-container-color, ${n.color.secondary}))`), disabled: { containerColor: e(`var(--m3e-tonal-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-tonal-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-tonal-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-tonal-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-tonal-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-tonal-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))"), containerElevation: e(`var(--m3e-tonal-button-disabled-container-elevation, var(--m3e-button-disabled-container-elevation, ${n.elevation.level0}))`) }, hover: { iconColor: e(`var(--m3e-tonal-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.onSecondaryContainer}))`), labelTextColor: e(`var(--m3e-tonal-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.onSecondaryContainer}))`), stateLayerColor: e(`var(--m3e-tonal-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.onSecondaryContainer}))`), stateLayerOpacity: e(`var(--m3e-tonal-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), containerElevation: e(`var(--m3e-tonal-button-hover-container-elevation, var(--m3e-button-hover-container-elevation, ${n.elevation.level1}))`), unselectedIconColor: e(`var(--m3e-tonal-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedStateLayerColor: e(`var(--m3e-tonal-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.onSecondaryContainer}))`), selectedIconColor: e(`var(--m3e-tonal-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.onSecondary}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.onSecondary}))`), selectedStateLayerColor: e(`var(--m3e-tonal-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.onSecondary}))`) }, focus: { iconColor: e(`var(--m3e-tonal-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.onSecondaryContainer}))`), labelTextColor: e(`var(--m3e-tonal-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.onSecondaryContainer}))`), stateLayerColor: e(`var(--m3e-tonal-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.onSecondaryContainer}))`), stateLayerOpacity: e(`var(--m3e-tonal-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), containerElevation: e(`var(--m3e-tonal-button-focus-container-elevation, var(--m3e-button-focus-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-tonal-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedStateLayerColor: e(`var(--m3e-tonal-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.onSecondaryContainer}))`), selectedIconColor: e(`var(--m3e-tonal-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.onSecondary}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.onSecondary}))`), selectedStateLayerColor: e(`var(--m3e-tonal-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.onSecondary}))`) }, pressed: { iconColor: e(`var(--m3e-tonal-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.onSecondaryContainer}))`), labelTextColor: e(`var(--m3e-tonal-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.onSecondaryContainer}))`), stateLayerColor: e(`var(--m3e-tonal-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.onSecondaryContainer}))`), stateLayerOpacity: e(`var(--m3e-tonal-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), containerElevation: e(`var(--m3e-tonal-button-pressed-container-elevation, var(--m3e-button-pressed-container-elevation, ${n.elevation.level0}))`), unselectedIconColor: e(`var(--m3e-tonal-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.onSecondaryContainer}))`), unselectedLabelTextColor: e(`var(--m3e-tonal-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.onSecondaryContainer}))`), unselectedStateLayerColor: e(`var(--m3e-tonal-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.onSecondaryContainer}))`), selectedIconColor: e(`var(--m3e-tonal-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.onSecondary}))`), selectedLabelTextColor: e(`var(--m3e-tonal-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.onSecondary}))`), selectedStateLayerColor: e(`var(--m3e-tonal-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.onSecondary}))`) } }, text: { labelTextColor: e(`var(--m3e-text-button-label-text-color, var(--m3e-button-label-text-color, ${n.color.primary}))`), iconColor: e(`var(--m3e-text-button-icon-color, var(--m3e-button-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-unselected-label-text-color, var(--m3e-button-unselected-label-text-color, ${n.color.primary}))`), unselectedIconColor: e(`var(--m3e-text-button-unselected-icon-color, var(--m3e-button-unselected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-selected-label-text-color, var(--m3e-button-selected-label-text-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-selected-icon-color, var(--m3e-button-selected-icon-color, ${n.color.primary}))`), disabled: { containerColor: e(`var(--m3e-text-button-disabled-container-color, var(--m3e-button-disabled-container-color, ${n.color.onSurface}))`), containerOpacity: e("var(--m3e-text-button-disabled-container-opacity, var(--m3e-button-disabled-container-opacity, 10%))"), iconColor: e(`var(--m3e-text-button-disabled-icon-color, var(--m3e-button-disabled-icon-color, ${n.color.onSurface}))`), iconOpacity: e("var(--m3e-text-button-disabled-icon-opacity, var(--m3e-button-disabled-icon-opacity, 38%))"), labelTextColor: e(`var(--m3e-text-button-disabled-label-text-color, var(--m3e-button-disabled-label-text-color, ${n.color.onSurface}))`), labelTextOpacity: e("var(--m3e-text-button-disabled-label-text-opacity, var(--m3e-button-disabled-label-text-opacity, 38%))") }, hover: { iconColor: e(`var(--m3e-text-button-hover-icon-color, var(--m3e-button-hover-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-text-button-hover-label-text-color, var(--m3e-button-hover-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-text-button-hover-state-layer-color, var(--m3e-button-hover-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-text-button-hover-state-layer-opacity, var(--m3e-button-hover-state-layer-opacity, ${n.state.hoverStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-text-button-hover-unselected-icon-color, var(--m3e-button-hover-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-hover-unselected-label-text-color, var(--m3e-button-hover-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-text-button-hover-unselected-state-layer-color, var(--m3e-button-hover-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-hover-selected-icon-color, var(--m3e-button-hover-selected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-hover-selected-label-text-color, var(--m3e-button-hover-selected-label-text-color, ${n.color.primary}))`), selectedStateLayerColor: e(`var(--m3e-text-button-hover-selected-state-layer-color, var(--m3e-button-hover-selected-state-layer-color, ${n.color.primary}))`) }, focus: { iconColor: e(`var(--m3e-text-button-focus-icon-color, var(--m3e-button-focus-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-text-button-focus-label-text-color, var(--m3e-button-focus-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-text-button-focus-state-layer-color, var(--m3e-button-focus-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-text-button-focus-state-layer-opacity, var(--m3e-button-focus-state-layer-opacity, ${n.state.focusStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-text-button-focus-unselected-icon-color, var(--m3e-button-focus-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-focus-unselected-label-text-color, var(--m3e-button-focus-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-text-button-focus-unselected-state-layer-color, var(--m3e-button-focus-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-focus-selected-icon-color, var(--m3e-button-focus-selected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-focus-selected-label-text-color, var(--m3e-button-focus-selected-label-text-color, ${n.color.primary}))`), selectedStateLayerColor: e(`var(--m3e-text-button-focus-selected-state-layer-color, var(--m3e-button-focus-selected-state-layer-color, ${n.color.primary}))`) }, pressed: { iconColor: e(`var(--m3e-text-button-pressed-icon-color, var(--m3e-button-pressed-icon-color, ${n.color.primary}))`), labelTextColor: e(`var(--m3e-text-button-pressed-label-text-color, var(--m3e-button-pressed-label-text-color, ${n.color.primary}))`), stateLayerColor: e(`var(--m3e-text-button-pressed-state-layer-color, var(--m3e-button-pressed-state-layer-color, ${n.color.primary}))`), stateLayerOpacity: e(`var(--m3e-text-button-pressed-state-layer-opacity, var(--m3e-button-pressed-state-layer-opacity, ${n.state.pressedStateLayerOpacity}))`), unselectedIconColor: e(`var(--m3e-text-button-pressed-unselected-icon-color, var(--m3e-button-pressed-unselected-icon-color, ${n.color.primary}))`), unselectedLabelTextColor: e(`var(--m3e-text-button-pressed-unselected-label-text-color, var(--m3e-button-pressed-unselected-label-text-color, ${n.color.primary}))`), unselectedStateLayerColor: e(`var(--m3e-text-button-pressed-unselected-state-layer-color, var(--m3e-button-pressed-unselected-state-layer-color, ${n.color.primary}))`), selectedIconColor: e(`var(--m3e-text-button-pressed-selected-icon-color, var(--m3e-button-pressed-selected-icon-color, ${n.color.primary}))`), selectedLabelTextColor: e(`var(--m3e-text-button-pressed-selected-label-text-color, var(--m3e-button-pressed-selected-label-text-color, ${n.color.primary}))`), selectedStateLayerColor: e(`var(--m3e-text-button-pressed-selected-state-layer-color, var(--m3e-button-pressed-selected-state-layer-color, ${n.color.primary}))`) } } };
function Oe(a2) {
  return L`:host([variant="${e(a2)}"]:not(:disabled):not([disabled-interactive])) .base { background-color: ${p[a2].containerColor ?? e("unset")}; --m3e-state-layer-hover-color: ${p[a2].hover.stateLayerColor}; --m3e-state-layer-hover-opacity: ${p[a2].hover.stateLayerOpacity}; --m3e-state-layer-focus-color: ${p[a2].focus.stateLayerColor}; --m3e-state-layer-focus-opacity: ${p[a2].focus.stateLayerOpacity}; --m3e-ripple-color: ${p[a2].pressed.stateLayerColor}; --m3e-ripple-opacity: ${p[a2].pressed.stateLayerOpacity}; --m3e-elevation-level: ${p[a2].containerElevation ?? e("unset")}; --m3e-elevation-hover-level: ${p[a2].hover.containerElevation ?? e("unset")}; --m3e-elevation-focus-level: ${p[a2].focus.containerElevation ?? e("unset")}; --m3e-elevation-pressed-level: ${p[a2].pressed.containerElevation ?? e("unset")}; } :host([variant="${e(a2)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .base { background-color: ${p[a2].unselectedContainerColor ?? e("unset")}; --m3e-state-layer-hover-color: ${p[a2].hover.unselectedStateLayerColor}; --m3e-state-layer-focus-color: ${p[a2].focus.unselectedStateLayerColor}; --m3e-ripple-color: ${p[a2].pressed.unselectedStateLayerColor}; } :host([variant="${e(a2)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .base { background-color: ${p[a2].selectedContainerColor ?? e("unset")}; --m3e-state-layer-hover-color: ${p[a2].hover.selectedStateLayerColor}; --m3e-state-layer-focus-color: ${p[a2].focus.selectedStateLayerColor}; --m3e-ripple-color: ${p[a2].pressed.selectedStateLayerColor}; } :host([variant="${e(a2)}"]:not(:disabled):not([disabled-interactive])) .base { outline-color: ${p[a2].outlineColor ?? e("unset")}; } :host([variant="${e(a2)}"]:focus:not(:disabled):not([disabled-interactive])) .base { outline-color: ${p[a2].focus.outlineColor ?? e("unset")}; } :host([variant="${e(a2)}"]:hover:not(:disabled):not([disabled-interactive])) .base { outline-color: ${p[a2].hover.outlineColor ?? e("unset")}; } :host( [variant="${e(a2)}"]:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive]) ) .base { outline-color: ${p[a2].pressed.outlineColor ?? e("unset")}; } :host([variant="${e(a2)}"]:not(:disabled):not([disabled-interactive])) .label { color: ${p[a2].labelTextColor}; } :host([variant="${e(a2)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .label { color: ${p[a2].unselectedLabelTextColor}; } :host([variant="${e(a2)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .label { color: ${p[a2].selectedLabelTextColor}; } :host([variant="${e(a2)}"]:focus:not(:disabled):not([disabled-interactive])) .label { color: ${p[a2].focus.labelTextColor}; } :host([variant="${e(a2)}"][toggle]:not([selected]):focus:not(:disabled):not([disabled-interactive])) .label { color: ${p[a2].focus.unselectedLabelTextColor}; } :host([variant="${e(a2)}"][toggle][selected]:focus:not(:disabled):not([disabled-interactive])) .label { color: ${p[a2].focus.selectedLabelTextColor}; } :host([variant="${e(a2)}"]:hover:not(:disabled):not([disabled-interactive])) .label { color: ${p[a2].hover.labelTextColor}; } :host([variant="${e(a2)}"][toggle]:not([selected]):hover:not(:disabled):not([disabled-interactive])) .label { color: ${p[a2].hover.unselectedLabelTextColor}; } :host([variant="${e(a2)}"][toggle][selected]:hover:not(:disabled):not([disabled-interactive])) .label { color: ${p[a2].hover.selectedLabelTextColor}; } :host( [variant="${e(a2)}"]:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive]) ) .label { color: ${p[a2].pressed.labelTextColor}; } :host( [variant="${e(a2)}"][toggle]:not([selected]):is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .label { color: ${p[a2].pressed.unselectedLabelTextColor}; } :host( [variant="${e(a2)}"][toggle][selected]:is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .label { color: ${p[a2].pressed.selectedLabelTextColor}; } :host([variant="${e(a2)}"]:not(:disabled):not([disabled-interactive])) .icon { color: ${p[a2].iconColor}; } :host([variant="${e(a2)}"][toggle]:not([selected]):not(:disabled):not([disabled-interactive])) .icon { color: ${p[a2].unselectedIconColor}; } :host([variant="${e(a2)}"][toggle][selected]:not(:disabled):not([disabled-interactive])) .icon { color: ${p[a2].selectedIconColor}; } :host([variant="${e(a2)}"]:focus:not(:disabled):not([disabled-interactive])) .icon { color: ${p[a2].focus.iconColor}; } :host([variant="${e(a2)}"][toggle]:not([selected]):focus:not(:disabled):not([disabled-interactive])) .icon { color: ${p[a2].focus.unselectedIconColor}; } :host([variant="${e(a2)}"][toggle][selected]:focus:not(:disabled):not([disabled-interactive])) .icon { color: ${p[a2].focus.selectedIconColor}; } :host([variant="${e(a2)}"]:hover:not(:disabled):not([disabled-interactive])) .icon { color: ${p[a2].hover.iconColor}; } :host([variant="${e(a2)}"][toggle]:not([selected]):hover:not(:disabled):not([disabled-interactive])) .icon { color: ${p[a2].hover.unselectedIconColor}; } :host([variant="${e(a2)}"][toggle][selected]:hover:not(:disabled):not([disabled-interactive])) .icon { color: ${p[a2].hover.selectedIconColor}; } :host( [variant="${e(a2)}"]:is(:state(--pressed), :--pressed):not(:disabled):not([disabled-interactive]) ) .icon { color: ${p[a2].pressed.iconColor}; } :host( [variant="${e(a2)}"][toggle]:not([selected]):is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .icon { color: ${p[a2].pressed.unselectedIconColor}; } :host( [variant="${e(a2)}"][toggle][selected]:is(:state(--pressed), :--pressed):not(:disabled):not( [disabled-interactive] ) ) .icon { color: ${p[a2].pressed.selectedIconColor}; } :host([variant="${e(a2)}"]:disabled) .base, :host([variant="${e(a2)}"][disabled-interactive]) .base { --m3e-elevation-level: ${p[a2].disabled.containerElevation ?? e("unset")}; outline-color: ${p[a2].disabled.outlineColor ?? e("unset")}; background-color: color-mix( in srgb, ${p[a2].disabled.containerColor} ${p[a2].disabled.containerOpacity}, transparent ); } :host([variant="${e(a2)}"]:disabled) .label, :host([variant="${e(a2)}"][disabled-interactive]) .label { color: color-mix( in srgb, ${p[a2].disabled.labelTextColor} ${p[a2].disabled.labelTextOpacity}, transparent ); } :host([variant="${e(a2)}"]:disabled) .icon, :host([variant="${e(a2)}"][disabled-interactive]) .icon { color: color-mix( in srgb, ${p[a2].disabled.iconColor} ${p[a2].disabled.iconOpacity}, transparent ); }`;
}
const Kn = [Oe("text"), Oe("elevated"), Oe("outlined"), Oe("filled"), Oe("tonal"), L`:host([variant="outlined"]:not([toggle][selected]):not(:disabled):not([disabled-interactive])) .base { outline-style: solid; }`];
var F, Ft, Ea, La, $o, _o, ko;
let A = class extends Fn(Nn(On(Hn(Wn(Ao(Jt(pe(E, "button"), true))))))) {
  constructor() {
    super(), F.add(this), this._adjacentPressedTimeout = -1, Ft.set(this, (t) => s(this, F, "m", Ea).call(this, t)), this.variant = "text", this.shape = "rounded", this.size = "small", this.toggle = false, this.selected = false, new yn(this, { callback: () => this._handleResize() }), new mt(this, { callback: (t) => {
      !this.disabledInteractive && !t && !this.grouped && this._base?.style.removeProperty("--_button-shape");
    } }), new To(this, { isPressedKey: (t) => t === " ", minPressedDuration: 150, callback: (t) => {
      !this.disabled && !this.disabledInteractive && (t ? (s(this, F, "m", $o).call(this), s(this, F, "m", _o).call(this, true)) : s(this, F, "m", _o).call(this, false));
    } });
  }
  get grouped() {
    return Gt(this, "--grouped");
  }
  render() {
    return S`<div class="base"><m3e-elevation class="elevation" ?disabled="${this.disabled || this.disabledInteractive}"></m3e-elevation><m3e-state-layer class="state-layer" ?disabled="${this.disabled || this.disabledInteractive}"></m3e-state-layer><m3e-focus-ring class="focus-ring" ?disabled="${this.disabled}"></m3e-focus-ring><m3e-ripple class="ripple" ?disabled="${this.disabled || this.disabledInteractive}"></m3e-ripple><div class="touch" aria-hidden="true"></div>${this[ba]()}<div class="wrapper">${this.toggle ? S`<slot class="icon" name="selected-icon" aria-hidden="true" @slotchange="${s(this, F, "m", La)}"></slot>` : $}<slot class="icon" name="icon" aria-hidden="true"></slot><div class="label">${this.toggle && this.selected ? S`<slot name="selected"><slot></slot></slot>` : S`<slot></slot>`}</div><slot class="icon" name="trailing-icon" aria-hidden="true"></slot></div></div>`;
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", s(this, Ft, "f"));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), ["--pressed", "--resting", "--grouped", "--connected"].forEach((t) => k(this, t)), this._base?.style.removeProperty("--_button-shape"), this.style.removeProperty("--_button-width"), this.style.removeProperty("--_adjacent-shrink"), k(this, "--adjacent-pressed"), this.removeEventListener("click", s(this, Ft, "f"));
  }
  firstUpdated(t) {
    super.firstUpdated(t), [this._elevation, this._focusRing, this._stateLayer, this._ripple].forEach((o) => o?.attach(this));
  }
  updated(t) {
    if (super.updated(t), (t.has("disabled") && this.disabled || t.has("disabledInteractive") && this.disabledInteractive) && (k(this, "--pressed"), k(this, "--resting")), (t.has("toggle") || t.has("selected")) && (this.ariaPressed = this.toggle ? `${this.selected}` : null, this.toggle)) for (const o of this.querySelectorAll("m3e-icon")) o.toggleAttribute("filled", this.selected);
  }
  _handleResize() {
    this.grouped && !Gt(this, "--no-resize") && this !== document.activeElement && (this.style.setProperty("--_button-width", `${this.getBoundingClientRect().width}px`), s(this, F, "m", $o).call(this, true));
  }
};
Ft = /* @__PURE__ */ new WeakMap();
F = /* @__PURE__ */ new WeakSet();
Ea = function(t) {
  (this.disabled || this.disabledInteractive) && (t.preventDefault(), t.stopImmediatePropagation()), this.toggle && !t.defaultPrevented && this.dispatchEvent(new Event("beforeinput", { bubbles: true, cancelable: true })) && (this.selected = !this.selected, this.dispatchEvent(new Event("input", { bubbles: true })), this.dispatchEvent(new Event("change", { bubbles: true })));
};
La = function(t) {
  this._base?.classList.toggle("with-selected-icon", fn(t.target));
};
$o = function(t = false) {
  if (!this._base) return;
  const o = parseFloat(getComputedStyle(this._base).borderRadius);
  if (!isNaN(o) || t) {
    const r = this.clientHeight / 2;
    (r < o || t) && this._base?.style.setProperty("--_button-shape", `${r}px`);
  }
};
_o = function(t) {
  const o = this.getBoundingClientRect().width, r = this.closest("m3e-button-group");
  if (r && r.variant === "standard") {
    const l = [...r.querySelectorAll("m3e-button,m3e-icon-button")];
    for (const d of l) clearTimeout(d._adjacentPressedTimeout), d._adjacentPressedTimeout = -1;
    const i = l.indexOf(this);
    if (t) {
      const d = parseFloat(getComputedStyle(this).getPropertyValue("--m3e-standard-button-group-width-multiplier") || "0.15");
      let h = o * d;
      i > 0 && i < l.length - 1 && (h /= 2);
      for (let u = 0; u < l.length; u++) u == i - 1 || u == i + 1 ? (j(l[u], "--no-resize"), l[u].style.setProperty("--_adjacent-shrink", `${h}px`), j(l[u], "--adjacent-pressed")) : u == i ? (j(l[u], "--no-resize"), l[u].style.removeProperty("--_adjacent-shrink"), k(l[u], "--adjacent-pressed")) : (k(l[u], "--no-resize"), l[u].style.removeProperty("--_adjacent-shrink"), k(l[u], "--adjacent-pressed"));
    } else {
      for (let d = 0; d < l.length; d++) (d == i - 1 || d == i + 1) && l[d].style.setProperty("--_adjacent-shrink", "0px");
      yt() ? s(this, F, "m", ko).call(this, l) : this.addEventListener("transitionend", (d) => {
        d.propertyName === "width" && (this._adjacentPressedTimeout = setTimeout(() => {
          this._adjacentPressedTimeout > -1 && s(this, F, "m", ko).call(this, l);
        }, 600));
      }, { once: true });
    }
  }
  lt(this, "--pressed", t), lt(this, "--resting", !t);
};
ko = function(t) {
  for (const o of t) k(o, "--adjacent-pressed"), k(o, "--no-resize"), o.style.removeProperty("--_adjacent-shrink");
};
A.styles = [Un, Kn, jn];
m([Y(".base")], A.prototype, "_base", void 0);
m([Y(".elevation")], A.prototype, "_elevation", void 0);
m([Y(".focus-ring")], A.prototype, "_focusRing", void 0);
m([Y(".state-layer")], A.prototype, "_stateLayer", void 0);
m([Y(".ripple")], A.prototype, "_ripple", void 0);
m([g({ reflect: true })], A.prototype, "variant", void 0);
m([g({ reflect: true })], A.prototype, "shape", void 0);
m([g({ reflect: true })], A.prototype, "size", void 0);
m([g({ type: Boolean, reflect: true })], A.prototype, "toggle", void 0);
m([g({ type: Boolean, reflect: true })], A.prototype, "selected", void 0);
m([zo(40)], A.prototype, "_handleResize", null);
A = m([D("m3e-button")], A);
const Gn = ["aria-busy", "disabled", "disabledInteractive", "download", "href", "name", "rel", "selected", "shape", "size", "toggle", "target", "type", "value", "variant"], Nt = Do({ __name: "MDButton", props: { nativeType: { default: "button" }, color: { default: "filled" }, label: {}, disabled: { type: Boolean }, disabledInteractive: { type: Boolean }, download: {}, href: {}, loading: { type: [Number, Boolean] }, name: {}, variant: { default: "default" }, size: { default: "small" }, shape: { default: "round" }, selected: { type: Boolean }, target: {}, rel: {}, value: {} }, emits: ["click", "update:selected"], setup(a2, { emit: t }) {
  const o = a2, r = t, l = Ra(), i = Do({ name: "MDButtonSlottedContent", props: { slotName: { type: String, required: true } }, setup(H, { slots: Io }) {
    return () => Oa("span", { slot: H.slotName }, Io.default?.());
  } }), d = T(() => o.loading !== void 0 && o.loading !== false), h = T(() => o.color === "text" && o.variant === "toggle"), u = T(() => o.variant === "toggle" && !h.value), b = T(() => u.value && !!o.selected), f = T(() => o.color), v = T(() => o.size), R = T(() => o.shape === "round" ? "rounded" : "square"), W = T(() => o.nativeType), be = T(() => o.download), Ma = T(() => o.href), Ta = T(() => o.name), za = T(() => o.rel), Aa = T(() => o.target), Pa = T(() => o.value), Ia = (H) => {
    u.value && (H.preventDefault(), r("update:selected", !b.value));
  }, Da = (H) => {
    r("click", H);
  };
  return (H, Io) => (fe(), qa("m3e-button", { class: "md-button", "aria-busy": d.value ? "true" : void 0, disabled: o.disabled, disabledInteractive: o.disabledInteractive, download: be.value, href: Ma.value, name: Ta.value, rel: za.value, selected: b.value, shape: R.value, size: v.value, toggle: u.value, target: Aa.value, type: W.value, value: Pa.value, variant: f.value, onBeforeinput: Ia, onClick: Ha(Da, ["stop"]) }, [l.icon ? (fe(), De(ve(i), { key: 0, class: Re(["md-button__icon", { "md-button__content_loading": d.value }]), "slot-name": "icon" }, { default: pt(() => [bt(H.$slots, "icon", {}, void 0, true)]), _: 3 }, 8, ["class"])) : qe("", true), l["selected-icon"] ? (fe(), De(ve(i), { key: 1, class: Re(["md-button__icon", { "md-button__content_loading": d.value }]), "slot-name": "selected-icon" }, { default: pt(() => [bt(H.$slots, "selected-icon", {}, void 0, true)]), _: 3 }, 8, ["class"])) : qe("", true), Ba("span", { class: Re(["md-button__label-text", { "md-button__content_loading": d.value }]) }, Wa(o.label), 3), l.selected ? (fe(), De(ve(i), { key: 2, class: Re(["md-button__label-text", { "md-button__content_loading": d.value }]), "slot-name": "selected" }, { default: pt(() => [bt(H.$slots, "selected", {}, void 0, true)]), _: 3 }, 8, ["class"])) : qe("", true), l["trailing-icon"] ? (fe(), De(ve(i), { key: 3, class: Re(["md-button__icon", { "md-button__content_loading": d.value }]), "slot-name": "trailing-icon" }, { default: pt(() => [bt(H.$slots, "trailing-icon", {}, void 0, true)]), _: 3 }, 8, ["class"])) : qe("", true), d.value ? (fe(), De(ve(Na), { key: 4, class: "md-button__progress-indicator md-button__progress-indicator_centered", progress: ve(Fa)(o.loading) ? o.loading : void 0, size: 24 }, null, 8, ["progress"])) : qe("", true)], 40, Gn));
} }), mr = Va(Nt, [["__scopeId", "data-v-f50290c2"]]);
Nt.__docgenInfo = Object.assign({ displayName: Nt.name ?? Nt.__name }, { exportName: "default", displayName: "MDButton", type: 1, props: [{ name: "nativeType", global: false, description: "Native button type. Defaults to `button` to avoid accidental form submission.", tags: [], required: false, type: '"button" | "submit" | "reset" | undefined', declarations: [], schema: { kind: "enum", type: '"button" | "submit" | "reset" | undefined', schema: ["undefined", '"button"', '"submit"', '"reset"'] }, default: '"button"' }, { name: "color", global: false, description: "Material Button appearance.", tags: [], required: false, type: '"filled" | "elevated" | "tonal" | "outlined" | "text" | undefined', declarations: [], schema: { kind: "enum", type: '"filled" | "elevated" | "tonal" | "outlined" | "text" | undefined', schema: ["undefined", '"filled"', '"elevated"', '"tonal"', '"outlined"', '"text"'] }, default: '"filled"' }, { name: "label", global: false, description: "Visible label and accessible name.", tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "disabled", global: false, description: "Blocks focus and activation through the renderer's documented disabled contract.", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "disabledInteractive", global: false, description: "Blocks activation while retaining focusability and disabled semantics.", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "download", global: false, description: "Optional filename when the Button acts as a download link.", tags: [], required: false, type: "string | null | undefined", declarations: [], schema: { kind: "enum", type: "string | null | undefined", schema: ["undefined", "null", "string"] } }, { name: "href", global: false, description: "Optional URL that makes the Button act as a link.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "loading", global: false, description: "Shows an indeterminate or determinate progress indicator while preserving activation.", tags: [], required: false, type: "number | boolean | undefined", declarations: [], schema: { kind: "enum", type: "number | boolean | undefined", schema: ["undefined", "number", "false", "true"] } }, { name: "name", global: false, description: "Form field name used by submit Buttons.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "variant", global: false, description: "Stateless action or consumer-controlled toggle intent.", tags: [], required: false, type: '"default" | "toggle" | undefined', declarations: [], schema: { kind: "enum", type: '"default" | "toggle" | undefined', schema: ["undefined", '"default"', '"toggle"'] }, default: '"default"' }, { name: "size", global: false, description: "Material Button size.", tags: [], required: false, type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', declarations: [], schema: { kind: "enum", type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', schema: ["undefined", '"small"', '"extra-small"', '"medium"', '"large"', '"extra-large"'] }, default: '"small"' }, { name: "shape", global: false, description: "Round or square container shape.", tags: [], required: false, type: '"round" | "square" | undefined', declarations: [], schema: { kind: "enum", type: '"round" | "square" | undefined', schema: ["undefined", '"round"', '"square"'] }, default: '"round"' }, { name: "selected", global: false, description: "Consumer-controlled toggle selection. Ignored for default and text buttons.", tags: [], required: false, type: "boolean | undefined", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "target", global: false, description: "Link browsing-context target.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "rel", global: false, description: "Link relationship tokens.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "value", global: false, description: "Form value used by submit Buttons.", tags: [], required: false, type: "string | null | undefined", declarations: [], schema: { kind: "enum", type: "string | null | undefined", schema: ["undefined", "null", "string"] } }, { name: "key", global: true, description: "", tags: [], required: false, type: "PropertyKey", declarations: [], schema: { kind: "enum", type: "PropertyKey", schema: ["string", "number", "symbol"] } }, { name: "ref", global: true, description: "", tags: [], required: false, type: "VNodeRef", declarations: [], schema: { kind: "enum", type: "VNodeRef", schema: ["string", "Ref<any, any>", { kind: "event", type: "(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void" }] } }, { name: "ref_for", global: true, description: "", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "ref_key", global: true, description: "", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "class", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "style", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "tabindex", global: true, description: "", tags: [], required: false, type: "string | number", declarations: [], schema: { kind: "enum", type: "string | number", schema: ["string", "number"] } }, { name: "aria-activedescendant", global: true, description: "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-atomic", global: true, description: "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-autocomplete", global: true, description: `Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`, tags: [], required: false, type: '"none" | "inline" | "list" | "both" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "inline" | "list" | "both" | undefined', schema: ["undefined", '"none"', '"inline"', '"list"', '"both"'] } }, { name: "aria-busy", global: true, description: "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-checked", global: true, description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.', tags: [{ name: "see", text: "aria-pressed" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-colcount", global: true, description: "Defines the total number of columns in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colindex", global: true, description: "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colcount" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colspan", global: true, description: "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-controls", global: true, description: "Identifies the element (or elements) whose contents or presence are controlled by the current element.", tags: [{ name: "see", text: "aria-owns." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-current", global: true, description: "Indicates the element that represents the current item within a container or set of related elements.", tags: [], required: false, type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"page"', '"step"', '"location"', '"date"', '"time"'] } }, { name: "aria-describedby", global: true, description: "Identifies the element (or elements) that describes the object.", tags: [{ name: "see", text: "aria-labelledby" }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-details", global: true, description: "Identifies the element that provides a detailed, extended description for the object.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-disabled", global: true, description: "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.", tags: [{ name: "see", text: "aria-hidden" }, { name: "see", text: "aria-readonly." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-dropeffect", global: true, description: "Indicates what functions can be performed when a dragged object is released on the drop target.", tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: '"none" | "link" | "copy" | "execute" | "move" | "popup" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "link" | "copy" | "execute" | "move" | "popup" | undefined', schema: ["undefined", '"none"', '"link"', '"copy"', '"execute"', '"move"', '"popup"'] } }, { name: "aria-errormessage", global: true, description: "Identifies the element that provides an error message for the object.", tags: [{ name: "see", text: "aria-invalid" }, { name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-expanded", global: true, description: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-flowto", global: true, description: `Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-grabbed", global: true, description: `Indicates an element's "grabbed" state in a drag-and-drop operation.`, tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-haspopup", global: true, description: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", tags: [], required: false, type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"menu"', '"listbox"', '"tree"', '"grid"', '"dialog"'] } }, { name: "aria-hidden", global: true, description: "Indicates whether the element is exposed to an accessibility API.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-invalid", global: true, description: "Indicates the entered value does not conform to the format expected by the application.", tags: [{ name: "see", text: "aria-errormessage." }], required: false, type: 'Booleanish | "grammar" | "spelling" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "grammar" | "spelling" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"grammar"', '"spelling"'] } }, { name: "aria-keyshortcuts", global: true, description: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-label", global: true, description: "Defines a string value that labels the current element.", tags: [{ name: "see", text: "aria-labelledby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-labelledby", global: true, description: "Identifies the element (or elements) that labels the current element.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-level", global: true, description: "Defines the hierarchical level of an element within a structure.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-live", global: true, description: "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", tags: [], required: false, type: '"off" | "assertive" | "polite" | undefined', declarations: [], schema: { kind: "enum", type: '"off" | "assertive" | "polite" | undefined', schema: ["undefined", '"off"', '"assertive"', '"polite"'] } }, { name: "aria-modal", global: true, description: "Indicates whether an element is modal when displayed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiline", global: true, description: "Indicates whether a text box accepts multiple lines of input or only a single line.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiselectable", global: true, description: "Indicates that the user may select more than one item from the current selectable descendants.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-orientation", global: true, description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", tags: [], required: false, type: '"horizontal" | "vertical" | undefined', declarations: [], schema: { kind: "enum", type: '"horizontal" | "vertical" | undefined', schema: ["undefined", '"horizontal"', '"vertical"'] } }, { name: "aria-owns", global: true, description: `Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.`, tags: [{ name: "see", text: "aria-controls." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-placeholder", global: true, description: `Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-posinset", global: true, description: "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-setsize." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-pressed", global: true, description: 'Indicates the current "pressed" state of toggle buttons.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-readonly", global: true, description: "Indicates that the element is not editable, but is otherwise operable.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-relevant", global: true, description: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.", tags: [{ name: "see", text: "aria-atomic." }], required: false, type: '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined', declarations: [], schema: { kind: "enum", type: '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined', schema: ["undefined", '"text"', '"additions"', '"additions removals"', '"additions text"', '"all"', '"removals"', '"removals additions"', '"removals text"', '"text additions"', '"text removals"'] } }, { name: "aria-required", global: true, description: "Indicates that user input is required on the element before a form may be submitted.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-roledescription", global: true, description: "Defines a human-readable, author-localized description for the role of an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-rowcount", global: true, description: "Defines the total number of rows in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowindex", global: true, description: "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowcount" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowspan", global: true, description: "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-selected", global: true, description: 'Indicates the current "selected" state of various widgets.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-pressed." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-setsize", global: true, description: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-posinset." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-sort", global: true, description: "Indicates if items in a table or grid are sorted in ascending or descending order.", tags: [], required: false, type: '"none" | "ascending" | "descending" | "other" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "ascending" | "descending" | "other" | undefined', schema: ["undefined", '"none"', '"ascending"', '"descending"', '"other"'] } }, { name: "aria-valuemax", global: true, description: "Defines the maximum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuemin", global: true, description: "Defines the minimum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuenow", global: true, description: "Defines the current value for a range widget.", tags: [{ name: "see", text: "aria-valuetext." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuetext", global: true, description: "Defines the human readable text alternative of aria-valuenow for a range widget.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: false, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }], events: [{ name: "click", description: "Stable action event normalized from the renderer host click.", tags: [], type: "[event: MouseEvent]", signature: '(event: "click", event: MouseEvent): void', declarations: [], schema: [{ kind: "object", type: "MouseEvent" }] }, { name: "update:selected", description: "Controlled toggle intent; the parent remains the selected-state owner.", tags: [], type: "[selected: boolean]", signature: '(event: "update:selected", selected: boolean): void', declarations: [], schema: [{ kind: "enum", type: "boolean", schema: ["false", "true"] }] }], slots: [{ name: "icon", type: "any", description: "Leading icon content.", declarations: [], schema: "any" }, { name: "selected", type: "any", description: "Label content rendered while a toggle Button is selected.", declarations: [], schema: "any" }, { name: "selected-icon", type: "any", description: "Leading icon rendered while a toggle Button is selected.", declarations: [], schema: "any" }, { name: "trailing-icon", type: "any", description: "Trailing icon content.", declarations: [], schema: "any" }], exposed: [{ name: "$slots", type: "Readonly<InternalSlots> & __VLS_Slots", description: "", declarations: [], schema: { kind: "object", type: "Readonly<InternalSlots> & __VLS_Slots" } }, { name: "nativeType", type: '"button" | "submit" | "reset" | undefined', description: "Native button type. Defaults to `button` to avoid accidental form submission.", declarations: [], schema: { kind: "enum", type: '"button" | "submit" | "reset" | undefined', schema: ["undefined", '"button"', '"submit"', '"reset"'] } }, { name: "color", type: '"filled" | "elevated" | "tonal" | "outlined" | "text" | undefined', description: "Material Button appearance.", declarations: [], schema: { kind: "enum", type: '"filled" | "elevated" | "tonal" | "outlined" | "text" | undefined', schema: ["undefined", '"filled"', '"elevated"', '"tonal"', '"outlined"', '"text"'] } }, { name: "variant", type: '"default" | "toggle" | undefined', description: "Stateless action or consumer-controlled toggle intent.", declarations: [], schema: { kind: "enum", type: '"default" | "toggle" | undefined', schema: ["undefined", '"default"', '"toggle"'] } }, { name: "size", type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', description: "Material Button size.", declarations: [], schema: { kind: "enum", type: '"small" | "extra-small" | "medium" | "large" | "extra-large" | undefined', schema: ["undefined", '"small"', '"extra-small"', '"medium"', '"large"', '"extra-large"'] } }, { name: "shape", type: '"round" | "square" | undefined', description: "Round or square container shape.", declarations: [], schema: { kind: "enum", type: '"round" | "square" | undefined', schema: ["undefined", '"round"', '"square"'] } }, { name: "disabled", type: "boolean | undefined", description: "Blocks focus and activation through the renderer's documented disabled contract.", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "href", type: "string | undefined", description: "Optional URL that makes the Button act as a link.", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "value", type: "string | null | undefined", description: "Form value used by submit Buttons.", declarations: [], schema: { kind: "enum", type: "string | null | undefined", schema: ["undefined", "null", "string"] } }, { name: "label", type: "string", description: "Visible label and accessible name.", declarations: [], schema: "string" }, { name: "disabledInteractive", type: "boolean | undefined", description: "Blocks activation while retaining focusability and disabled semantics.", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "download", type: "string | null | undefined", description: "Optional filename when the Button acts as a download link.", declarations: [], schema: { kind: "enum", type: "string | null | undefined", schema: ["undefined", "null", "string"] } }, { name: "loading", type: "number | boolean | undefined", description: "Shows an indeterminate or determinate progress indicator while preserving activation.", declarations: [], schema: { kind: "enum", type: "number | boolean | undefined", schema: ["undefined", "number", "false", "true"] } }, { name: "name", type: "string | undefined", description: "Form field name used by submit Buttons.", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "selected", type: "boolean | undefined", description: "Consumer-controlled toggle selection. Ignored for default and text buttons.", declarations: [], schema: { kind: "enum", type: "boolean | undefined", schema: ["undefined", "false", "true"] } }, { name: "target", type: "string | undefined", description: "Link browsing-context target.", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "rel", type: "string | undefined", description: "Link relationship tokens.", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/material/components/button/MDButton.vue" });
export {
  mr as M
};
