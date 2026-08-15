function m(n2, e, t, s) {
  var i = arguments.length, o = i < 3 ? e : s === null ? s = Object.getOwnPropertyDescriptor(e, t) : s, l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(n2, e, t, s);
  else for (var d = n2.length - 1; d >= 0; d--) (l = n2[d]) && (o = (i < 3 ? l(o) : i > 3 ? l(e, t, o) : l(e, t)) || o);
  return i > 3 && o && Object.defineProperty(e, t, o), o;
}
function r(n2, e, t, s) {
  if (t === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? n2 !== e || !s : !e.has(n2)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? s : t === "a" ? s.call(n2) : s ? s.value : e.get(n2);
}
function _(n2, e, t, s, i) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? n2 !== e || !i : !e.has(n2)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return s === "a" ? i.call(n2, t) : i ? i.value = t : e.set(n2, t), t;
}
const _t = globalThis, Ts = _t.ShadowRoot && (_t.ShadyCSS === void 0 || _t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ps = /* @__PURE__ */ Symbol(), Us = /* @__PURE__ */ new WeakMap();
let hi = class {
  constructor(e, t, s) {
    if (this._$cssResult$ = true, s !== Ps) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Ts && e === void 0) {
      const s = t !== void 0 && t.length === 1;
      s && (e = Us.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && Us.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const a = (n2) => new hi(typeof n2 == "string" ? n2 : n2 + "", void 0, Ps), L = (n2, ...e) => {
  const t = n2.length === 1 ? n2[0] : e.reduce((s, i, o) => s + ((l) => {
    if (l._$cssResult$ === true) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + n2[o + 1], n2[0]);
  return new hi(t, n2, Ps);
}, qi = (n2, e) => {
  if (Ts) n2.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const s = document.createElement("style"), i = _t.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = t.cssText, n2.appendChild(s);
  }
}, Bs = Ts ? (n2) => n2 : (n2) => n2 instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const s of e.cssRules) t += s.cssText;
  return a(t);
})(n2) : n2;
const { is: Ki, defineProperty: ji, getOwnPropertyDescriptor: Xi, getOwnPropertyNames: Yi, getOwnPropertySymbols: Zi, getPrototypeOf: Gi } = Object, Jt = globalThis, Ns = Jt.trustedTypes, Ji = Ns ? Ns.emptyScript : "", Qi = Jt.reactiveElementPolyfillSupport, Je = (n2, e) => n2, Vt = { toAttribute(n2, e) {
  switch (e) {
    case Boolean:
      n2 = n2 ? Ji : null;
      break;
    case Object:
    case Array:
      n2 = n2 == null ? n2 : JSON.stringify(n2);
  }
  return n2;
}, fromAttribute(n2, e) {
  let t = n2;
  switch (e) {
    case Boolean:
      t = n2 !== null;
      break;
    case Number:
      t = n2 === null ? null : Number(n2);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(n2);
      } catch {
        t = null;
      }
  }
  return t;
} }, Fs = (n2, e) => !Ki(n2, e), Vs = { attribute: true, type: String, converter: Vt, reflect: false, useDefault: false, hasChanged: Fs };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), Jt.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let xe = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Vs) {
    if (t.state && (t.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = true), this.elementProperties.set(e, t), !t.noAccessor) {
      const s = /* @__PURE__ */ Symbol(), i = this.getPropertyDescriptor(e, s, t);
      i !== void 0 && ji(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, s) {
    const { get: i, set: o } = Xi(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get: i, set(l) {
      const d = i?.call(this);
      o?.call(this, l), this.requestUpdate(e, d, s);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Vs;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Je("elementProperties"))) return;
    const e = Gi(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Je("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(Je("properties"))) {
      const t = this.properties, s = [...Yi(t), ...Zi(t)];
      for (const i of s) this.createProperty(i, t[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [s, i] of t) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, s] of this.elementProperties) {
      const i = this._$Eu(t, s);
      i !== void 0 && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const s = new Set(e.flat(1 / 0).reverse());
      for (const i of s) t.unshift(Bs(i));
    } else e !== void 0 && t.push(Bs(e));
    return t;
  }
  static _$Eu(e, t) {
    const s = t.attribute;
    return s === false ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
  }
  addController(e) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
  }
  removeController(e) {
    this._$EO?.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const s of t.keys()) this.hasOwnProperty(s) && (e.set(s, this[s]), delete this[s]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return qi(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((e) => e.hostConnected?.());
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((e) => e.hostDisconnected?.());
  }
  attributeChangedCallback(e, t, s) {
    this._$AK(e, s);
  }
  _$ET(e, t) {
    const s = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, s);
    if (i !== void 0 && s.reflect === true) {
      const o = (s.converter?.toAttribute !== void 0 ? s.converter : Vt).toAttribute(t, s.type);
      this._$Em = e, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const s = this.constructor, i = s._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const o = s.getPropertyOptions(i), l = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : Vt;
      this._$Em = i;
      const d = l.fromAttribute(t, o.type);
      this[i] = d ?? this._$Ej?.get(i) ?? d, this._$Em = null;
    }
  }
  requestUpdate(e, t, s, i = false, o) {
    if (e !== void 0) {
      const l = this.constructor;
      if (i === false && (o = this[e]), s ??= l.getPropertyOptions(e), !((s.hasChanged ?? Fs)(o, t) || s.useDefault && s.reflect && o === this._$Ej?.get(e) && !this.hasAttribute(l._$Eu(e, s)))) return;
      this.C(e, t, s);
    }
    this.isUpdatePending === false && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: s, reflect: i, wrapped: o }, l) {
    s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, l ?? t ?? this[e]), o !== true || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (t = void 0), this._$AL.set(e, t)), i === true && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [i, o] of this._$Ep) this[i] = o;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [i, o] of s) {
        const { wrapped: l } = o, d = this[i];
        l !== true || this._$AL.has(i) || d === void 0 || this.C(i, void 0, o, d);
      }
    }
    let e = false;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((s) => s.hostUpdate?.()), this.update(t)) : this._$EM();
    } catch (s) {
      throw e = false, this._$EM(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach((t) => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(e)), this.updated(e);
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
  shouldUpdate(e) {
    return true;
  }
  update(e) {
    this._$Eq &&= this._$Eq.forEach((t) => this._$ET(t, this[t])), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
xe.elementStyles = [], xe.shadowRootOptions = { mode: "open" }, xe[Je("elementProperties")] = /* @__PURE__ */ new Map(), xe[Je("finalized")] = /* @__PURE__ */ new Map(), Qi?.({ ReactiveElement: xe }), (Jt.reactiveElementVersions ??= []).push("2.1.2");
const Ds = globalThis, qs = (n2) => n2, qt = Ds.trustedTypes, Ks = qt ? qt.createPolicy("lit-html", { createHTML: (n2) => n2 }) : void 0, pi = "$lit$", G = `lit$${Math.random().toFixed(9).slice(2)}$`, ui = "?" + G, en = `<${ui}>`, ue = document, at = () => ue.createComment(""), rt = (n2) => n2 === null || typeof n2 != "object" && typeof n2 != "function", Ws = Array.isArray, tn = (n2) => Ws(n2) || typeof n2?.[Symbol.iterator] == "function", as = `[ 	
\f\r]`, Oe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, js = /-->/g, Xs = />/g, te = RegExp(`>|${as}(?:([^\\s"'>=/]+)(${as}*=${as}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ys = /'/g, Zs = /"/g, mi = /^(?:script|style|textarea|title)$/i, sn = (n2) => (e, ...t) => ({ _$litType$: n2, strings: e, values: t }), A = sn(1), Le = /* @__PURE__ */ Symbol.for("lit-noChange"), $ = /* @__PURE__ */ Symbol.for("lit-nothing"), Gs = /* @__PURE__ */ new WeakMap(), le = ue.createTreeWalker(ue, 129);
function fi(n2, e) {
  if (!Ws(n2) || !n2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ks !== void 0 ? Ks.createHTML(e) : e;
}
const nn = (n2, e) => {
  const t = n2.length - 1, s = [];
  let i, o = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Oe;
  for (let d = 0; d < t; d++) {
    const h = n2[d];
    let f, y, p = -1, b = 0;
    for (; b < h.length && (l.lastIndex = b, y = l.exec(h), y !== null); ) b = l.lastIndex, l === Oe ? y[1] === "!--" ? l = js : y[1] !== void 0 ? l = Xs : y[2] !== void 0 ? (mi.test(y[2]) && (i = RegExp("</" + y[2], "g")), l = te) : y[3] !== void 0 && (l = te) : l === te ? y[0] === ">" ? (l = i ?? Oe, p = -1) : y[1] === void 0 ? p = -2 : (p = l.lastIndex - y[2].length, f = y[1], l = y[3] === void 0 ? te : y[3] === '"' ? Zs : Ys) : l === Zs || l === Ys ? l = te : l === js || l === Xs ? l = Oe : (l = te, i = void 0);
    const v = l === te && n2[d + 1].startsWith("/>") ? " " : "";
    o += l === Oe ? h + en : p >= 0 ? (s.push(f), h.slice(0, p) + pi + h.slice(p) + G + v) : h + G + (p === -2 ? d : v);
  }
  return [fi(n2, o + (n2[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
};
class ot {
  constructor({ strings: e, _$litType$: t }, s) {
    let i;
    this.parts = [];
    let o = 0, l = 0;
    const d = e.length - 1, h = this.parts, [f, y] = nn(e, t);
    if (this.el = ot.createElement(f, s), le.currentNode = this.el.content, t === 2 || t === 3) {
      const p = this.el.content.firstChild;
      p.replaceWith(...p.childNodes);
    }
    for (; (i = le.nextNode()) !== null && h.length < d; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const p of i.getAttributeNames()) if (p.endsWith(pi)) {
          const b = y[l++], v = i.getAttribute(p).split(G), C = /([.?@])?(.*)/.exec(b);
          h.push({ type: 1, index: o, name: C[2], strings: v, ctor: C[1] === "." ? rn : C[1] === "?" ? on : C[1] === "@" ? ln : Qt }), i.removeAttribute(p);
        } else p.startsWith(G) && (h.push({ type: 6, index: o }), i.removeAttribute(p));
        if (mi.test(i.tagName)) {
          const p = i.textContent.split(G), b = p.length - 1;
          if (b > 0) {
            i.textContent = qt ? qt.emptyScript : "";
            for (let v = 0; v < b; v++) i.append(p[v], at()), le.nextNode(), h.push({ type: 2, index: ++o });
            i.append(p[b], at());
          }
        }
      } else if (i.nodeType === 8) if (i.data === ui) h.push({ type: 2, index: o });
      else {
        let p = -1;
        for (; (p = i.data.indexOf(G, p + 1)) !== -1; ) h.push({ type: 7, index: o }), p += G.length - 1;
      }
      o++;
    }
  }
  static createElement(e, t) {
    const s = ue.createElement("template");
    return s.innerHTML = e, s;
  }
}
function ze(n2, e, t = n2, s) {
  if (e === Le) return e;
  let i = s !== void 0 ? t._$Co?.[s] : t._$Cl;
  const o = rt(e) ? void 0 : e._$litDirective$;
  return i?.constructor !== o && (i?._$AO?.(false), o === void 0 ? i = void 0 : (i = new o(n2), i._$AT(n2, t, s)), s !== void 0 ? (t._$Co ??= [])[s] = i : t._$Cl = i), i !== void 0 && (e = ze(n2, i._$AS(n2, e.values), i, s)), e;
}
class an {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: s } = this._$AD, i = (e?.creationScope ?? ue).importNode(t, true);
    le.currentNode = i;
    let o = le.nextNode(), l = 0, d = 0, h = s[0];
    for (; h !== void 0; ) {
      if (l === h.index) {
        let f;
        h.type === 2 ? f = new ht(o, o.nextSibling, this, e) : h.type === 1 ? f = new h.ctor(o, h.name, h.strings, this, e) : h.type === 6 && (f = new cn(o, this, e)), this._$AV.push(f), h = s[++d];
      }
      l !== h?.index && (o = le.nextNode(), l++);
    }
    return le.currentNode = ue, i;
  }
  p(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
}
class ht {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, s, i) {
    this.type = 2, this._$AH = $, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = i, this._$Cv = i?.isConnected ?? true;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = ze(this, e, t), rt(e) ? e === $ || e == null || e === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : e !== this._$AH && e !== Le && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : tn(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== $ && rt(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ue.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: s } = e, i = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = ot.createElement(fi(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === i) this._$AH.p(t);
    else {
      const o = new an(i, this), l = o.u(this.options);
      o.p(t), this.T(l), this._$AH = o;
    }
  }
  _$AC(e) {
    let t = Gs.get(e.strings);
    return t === void 0 && Gs.set(e.strings, t = new ot(e)), t;
  }
  k(e) {
    Ws(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, i = 0;
    for (const o of e) i === t.length ? t.push(s = new ht(this.O(at()), this.O(at()), this, this.options)) : s = t[i], s._$AI(o), i++;
    i < t.length && (this._$AR(s && s._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(false, true, t); e !== this._$AB; ) {
      const s = qs(e).nextSibling;
      qs(e).remove(), e = s;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}
class Qt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, s, i, o) {
    this.type = 1, this._$AH = $, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = $;
  }
  _$AI(e, t = this, s, i) {
    const o = this.strings;
    let l = false;
    if (o === void 0) e = ze(this, e, t, 0), l = !rt(e) || e !== this._$AH && e !== Le, l && (this._$AH = e);
    else {
      const d = e;
      let h, f;
      for (e = o[0], h = 0; h < o.length - 1; h++) f = ze(this, d[s + h], t, h), f === Le && (f = this._$AH[h]), l ||= !rt(f) || f !== this._$AH[h], f === $ ? e = $ : e !== $ && (e += (f ?? "") + o[h + 1]), this._$AH[h] = f;
    }
    l && !i && this.j(e);
  }
  j(e) {
    e === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class rn extends Qt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === $ ? void 0 : e;
  }
}
class on extends Qt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== $);
  }
}
class ln extends Qt {
  constructor(e, t, s, i, o) {
    super(e, t, s, i, o), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ze(this, e, t, 0) ?? $) === Le) return;
    const s = this._$AH, i = e === $ && s !== $ || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, o = e !== $ && (s === $ || i);
    i && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class cn {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ze(this, e);
  }
}
const dn = Ds.litHtmlPolyfillSupport;
dn?.(ot, ht), (Ds.litHtmlVersions ??= []).push("3.3.3");
const hn = (n2, e, t) => {
  const s = t?.renderBefore ?? e;
  let i = s._$litPart$;
  if (i === void 0) {
    const o = t?.renderBefore ?? null;
    s._$litPart$ = i = new ht(e.insertBefore(at(), o), o, void 0, t ?? {});
  }
  return i._$AI(n2), i;
};
const Rs = globalThis;
class E extends xe {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = hn(t, this.renderRoot, this.renderOptions);
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
E._$litElement$ = true, E.finalized = true, Rs.litElementHydrateSupport?.({ LitElement: E });
const pn = Rs.litElementPolyfillSupport;
pn?.({ LitElement: E });
(Rs.litElementVersions ??= []).push("4.2.2");
const un = { attribute: true, type: String, converter: Vt, reflect: false, hasChanged: Fs }, mn = (n2 = un, e, t) => {
  const { kind: s, metadata: i } = t;
  let o = globalThis.litPropertyMetadata.get(i);
  if (o === void 0 && globalThis.litPropertyMetadata.set(i, o = /* @__PURE__ */ new Map()), s === "setter" && ((n2 = Object.create(n2)).wrapped = true), o.set(t.name, n2), s === "accessor") {
    const { name: l } = t;
    return { set(d) {
      const h = e.get.call(this);
      e.set.call(this, d), this.requestUpdate(l, h, n2, true, d);
    }, init(d) {
      return d !== void 0 && this.C(l, void 0, n2, d), d;
    } };
  }
  if (s === "setter") {
    const { name: l } = t;
    return function(d) {
      const h = this[l];
      e.call(this, d), this.requestUpdate(l, h, n2, true, d);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function g(n2) {
  return (e, t) => typeof t == "object" ? mn(n2, e, t) : ((s, i, o) => {
    const l = i.hasOwnProperty(o);
    return i.constructor.createProperty(o, s), l ? Object.getOwnPropertyDescriptor(i, o) : void 0;
  })(n2, e, t);
}
const fn = (n2, e, t) => (t.configurable = true, t.enumerable = true, Reflect.decorate && typeof e != "object" && Object.defineProperty(n2, e, t), t);
function pt(n2, e) {
  return (t, s, i) => {
    const o = (l) => l.renderRoot?.querySelector(n2) ?? null;
    return fn(t, s, { get() {
      return o(this);
    } });
  };
}
const rs = (n2) => n2 ?? $;
var Ne, Ve, U;
class ut {
  constructor(e, t) {
    Ne.set(this, void 0), Ve.set(this, void 0), U.set(this, /* @__PURE__ */ new Set()), _(this, Ne, e, "f"), _(this, Ve, t.target, "f"), r(this, Ne, "f").addController(this);
  }
  get targets() {
    return r(this, U, "f").values();
  }
  get hasTargets() {
    return r(this, U, "f").size > 0;
  }
  hostConnected() {
    r(this, Ve, "f") !== null && this.observe(r(this, Ve, "f") ?? r(this, Ne, "f"));
  }
  hostDisconnected() {
    this.unobserveAll();
  }
  observe(e) {
    r(this, U, "f").has(e) || (r(this, U, "f").add(e), this._observe(e));
  }
  isObserving(e) {
    return r(this, U, "f").has(e);
  }
  unobserve(e) {
    r(this, U, "f").delete(e) && this._unobserve(e);
  }
  unobserveAll() {
    r(this, U, "f").forEach((e) => this.unobserve(e)), r(this, U, "f").clear();
  }
}
Ne = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap();
function yn() {
  return matchMedia("(forced-colors: active)").matches;
}
function Js(n2, e, t) {
  return n2 + (e - n2) * t;
}
function Qs(n2, e, t, s) {
  const i = Math.pow(1 - s, 2) * n2.x + 2 * (1 - s) * s * e.x + Math.pow(s, 2) * t.x, o = Math.pow(1 - s, 2) * n2.y + 2 * (1 - s) * s * e.y + Math.pow(s, 2) * t.y;
  return { x: i, y: o };
}
function ei(n2, e, t, s, i) {
  const o = Math.pow(1 - i, 3) * n2.x + 3 * Math.pow(1 - i, 2) * i * e.x + 3 * (1 - i) * Math.pow(i, 2) * t.x + Math.pow(i, 3) * s.x, l = Math.pow(1 - i, 3) * n2.y + 3 * Math.pow(1 - i, 2) * i * e.y + 3 * (1 - i) * Math.pow(i, 2) * t.y + Math.pow(i, 3) * s.y;
  return { x: o, y: l };
}
function vn(n2) {
  return (n2.match(/[a-zA-Z][^a-zA-Z]*/g) || []).map((t) => {
    const s = t[0], i = t.slice(1).trim().split(/[\s,]+/).filter(Boolean).map(Number);
    return { type: s, nums: i };
  });
}
function gn(n2, e) {
  const t = vn(n2);
  let s = { x: 0, y: 0 }, i = { x: 0, y: 0 };
  const o = [];
  for (const p of t) if (p.type === "M") s = { x: p.nums[0], y: p.nums[1] }, i = s;
  else if (p.type === "L") {
    const b = { x: p.nums[0], y: p.nums[1] }, v = b.x - s.x, C = b.y - s.y;
    o.push({ type: "L", pts: [s, b], length: Math.hypot(v, C) }), s = b;
  } else if (p.type === "H") {
    const b = { x: p.nums[0], y: s.y }, v = b.x - s.x;
    o.push({ type: "L", pts: [s, b], length: Math.abs(v) }), s = b;
  } else if (p.type === "V") {
    const b = { x: s.x, y: p.nums[0] }, v = b.y - s.y;
    o.push({ type: "L", pts: [s, b], length: Math.abs(v) }), s = b;
  } else if (p.type === "Q") {
    const b = { x: p.nums[0], y: p.nums[1] }, v = { x: p.nums[2], y: p.nums[3] };
    let C = 0, z = s;
    const H = 20;
    for (let I = 1; I <= H; I++) {
      const ee = I / H, Re = Qs(s, b, v, ee);
      C += Math.hypot(Re.x - z.x, Re.y - z.y), z = Re;
    }
    o.push({ type: "Q", pts: [s, b, v], length: C }), s = v;
  } else if (p.type === "C") {
    const b = { x: p.nums[0], y: p.nums[1] }, v = { x: p.nums[2], y: p.nums[3] }, C = { x: p.nums[4], y: p.nums[5] };
    let z = 0, H = s;
    const I = 20;
    for (let ee = 1; ee <= I; ee++) {
      const Re = ee / I, ns = ei(s, b, v, C, Re);
      z += Math.hypot(ns.x - H.x, ns.y - H.y), H = ns;
    }
    o.push({ type: "C", pts: [s, b, v, C], length: z }), s = C;
  } else if (p.type === "Z") {
    const b = i.x - s.x, v = i.y - s.y;
    o.push({ type: "L", pts: [s, i], length: Math.hypot(b, v) }), s = i;
  }
  const d = o.reduce((p, b) => p + b.length, 0) / (e - 1), h = [];
  let f = 0, y = 0;
  for (let p = 0; p < e; p++) {
    const b = p * d;
    for (; y < o.length && f + o[y].length < b; ) f += o[y].length, y++;
    const v = o[y];
    if (!v) break;
    const C = (b - f) / v.length;
    if (v.type === "L") {
      const [z, H] = v.pts;
      h.push({ x: Js(z.x, H.x, C), y: Js(z.y, H.y, C) });
    } else if (v.type === "Q") {
      const [z, H, I] = v.pts;
      h.push(Qs(z, H, I, C));
    } else if (v.type === "C") {
      const [z, H, I, ee] = v.pts;
      h.push(ei(z, H, I, ee, C));
    }
  }
  return h;
}
function bn(n2) {
  return `${n2.map((t) => {
    const s = ti(t.x * 100, 0, 100), i = ti(t.y * 100, 0, 100);
    return `${s.toFixed(2)}% ${i.toFixed(2)}%`;
  }).join(", ")}`;
}
function ti(n2, e, t) {
  return Math.max(e, Math.min(t, n2));
}
function xn(n2) {
  let e = 1 / 0, t = 1 / 0, s = -1 / 0, i = -1 / 0;
  for (const o of n2) o.x < e && (e = o.x), o.x > s && (s = o.x), o.y < t && (t = o.y), o.y > i && (i = o.y);
  return { minX: e, minY: t, maxX: s, maxY: i, width: s - e, height: i - t };
}
function _n(n2, e) {
  const t = n2.length, s = new Array(t);
  for (let i = 0; i < t; i++) s[i] = n2[(i + e) % t];
  return s;
}
function wn(n2, e) {
  const t = Math.min(e.length, n2.length);
  let s = 0, i = 1 / 0;
  for (let o = 0; o < t; o++) {
    let l = 0;
    for (let d = 0; d < t; d++) {
      const h = e[(d + o) % t], f = n2[d], y = h.x - f.x, p = h.y - f.y;
      if (l += y * y + p * p, l >= i) break;
    }
    l < i && (i = l, s = o);
  }
  return s;
}
function si(n2) {
  let e = 0;
  const t = n2.length;
  for (let s = 0; s < t; s++) {
    const i = n2[s], o = n2[(s + 1) % t];
    e += i.x * o.y - o.x * i.y;
  }
  return e / 2;
}
function $n(n2) {
  const e = n2.map((i) => {
    const o = xn(i), l = i.map((v) => ({ x: v.x - o.minX, y: v.y - o.minY })), d = Math.max(o.width, o.height) || 1, h = l.map((v) => ({ x: v.x / d, y: v.y / d })), f = o.width / d, y = o.height / d, p = (1 - f) / 2, b = (1 - y) / 2;
    return h.map((v) => ({ x: v.x + p, y: v.y + b }));
  }), t = e[0], s = Math.sign(si(t));
  for (let i = 1; i < e.length; i++) {
    let o = e[i];
    const l = Math.sign(si(o));
    l !== 0 && l !== s && (o = o.slice().reverse());
    const d = wn(t, o);
    e[i] = _n(o, d);
  }
  return e;
}
function ea(n2, e) {
  return $n(n2.map((t) => gn(t, e))).map((t) => bn(t));
}
function ta(n2) {
  return n2.assignedNodes({ flatten: true }).length > 0;
}
function wt() {
  return matchMedia("(prefers-reduced-motion)").matches;
}
function kn(n2, e = document) {
  return new Promise((t) => {
    const s = e.querySelector(`#${n2}`);
    if (s) {
      t(s);
      return;
    }
    if (document.readyState === "complete" || document.readyState === "interactive") {
      t(e.querySelector(`#${n2}`));
      return;
    }
    document.addEventListener("DOMContentLoaded", () => t(e.querySelector(`#${n2}`)), { once: true });
  });
}
var Se, ce, Ae, Qe, Me, $t, kt, Ct, Et, _e, Kt, yi, bs, vi;
class es extends ut {
  constructor(e, t) {
    super(e, t), Se.add(this), Ae.set(this, false), Qe.set(this, void 0), Me.set(this, void 0), $t.set(this, (s) => r(this, Se, "m", yi).call(this, s)), kt.set(this, (s) => r(this, Se, "m", bs).call(this, s)), Ct.set(this, (s) => r(this, Se, "m", vi).call(this, s)), Et.set(this, () => _(this, Ae, true, "f")), _e.set(this, () => _(this, Ae, false, "f")), _(this, Qe, t.callback, "f"), _(this, Me, t.filter, "f");
  }
  _observe(e) {
    e.addEventListener("keydown", r(this, $t, "f")), e.addEventListener("focusin", r(this, kt, "f")), e.addEventListener("focusout", r(this, Ct, "f")), e.addEventListener("touchstart", r(this, Et, "f"), { passive: true }), e.addEventListener("touchend", r(this, _e, "f")), e.addEventListener("touchcancel", r(this, _e, "f"));
  }
  _unobserve(e) {
    e.removeEventListener("keydown", r(this, $t, "f")), e.removeEventListener("focusin", r(this, kt, "f")), e.removeEventListener("focusout", r(this, Ct, "f")), e.removeEventListener("touchstart", r(this, Et, "f")), e.removeEventListener("touchend", r(this, _e, "f")), e.removeEventListener("touchcancel", r(this, _e, "f"));
  }
}
ce = es, Ae = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakSet(), yi = function(e) {
  if (r(this, Me, "f")?.call(this, e)) return;
  e.currentTarget.matches(":focus-within") && r(this, Se, "m", bs).call(this, e);
}, bs = function(e) {
  if (r(this, Me, "f")?.call(this, e) || r(this, Ae, "f")) return;
  const t = e.currentTarget;
  r(this, Qe, "f").call(this, true, t.matches(":focus-visible") || r(ce, ce, "f", Kt) || yn(), t);
}, vi = function(e) {
  r(this, Me, "f")?.call(this, e) || r(this, Ae, "f") || r(this, Qe, "f").call(this, false, false, e.currentTarget);
};
typeof window < "u" && (window.addEventListener("keydown", () => _(ce, ce, true, "f", Kt), { capture: true, passive: true }), window.addEventListener("pointerdown", () => _(ce, ce, false, "f", Kt), { capture: true }));
Kt = { value: false };
var D, oe, se, ie, St, we, xs, yt, vt, gi, bi;
class xi extends ut {
  constructor(e, t) {
    super(e, t), D.add(this), oe.set(this, void 0), se.set(this, /* @__PURE__ */ new Map()), ie.set(this, /* @__PURE__ */ new Map()), St.set(this, (s) => r(this, D, "m", gi).call(this, s)), we.set(this, (s) => r(this, D, "m", bi).call(this, s)), _(this, oe, t.callback, "f"), this.startDelay = t.startDelay ?? 0, this.endDelay = t.endDelay ?? 0;
  }
  clearDelays() {
    for (const e of this.targets) r(this, D, "m", xs).call(this, e);
  }
  _observe(e) {
    e.addEventListener("pointerenter", r(this, St, "f")), e.addEventListener("pointerleave", r(this, we, "f")), e.addEventListener("touchend", r(this, we, "f"));
  }
  _unobserve(e) {
    e.removeEventListener("pointerenter", r(this, St, "f")), e.removeEventListener("pointerleave", r(this, we, "f")), e.removeEventListener("touchend", r(this, we, "f")), r(this, D, "m", xs).call(this, e);
  }
}
oe = /* @__PURE__ */ new WeakMap(), se = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), we = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakSet(), xs = function(e) {
  r(this, D, "m", yt).call(this, e), r(this, D, "m", vt).call(this, e);
}, yt = function(e) {
  return r(this, se, "f").has(e) ? (clearTimeout(r(this, se, "f").get(e)), r(this, se, "f").delete(e)) : false;
}, vt = function(e) {
  return r(this, ie, "f").has(e) ? (clearTimeout(r(this, ie, "f").get(e)), r(this, ie, "f").delete(e)) : false;
}, gi = function(e) {
  const t = e.target;
  r(this, D, "m", vt).call(this, t), this.startDelay > 0 ? (r(this, D, "m", yt).call(this, t), r(this, se, "f").set(t, setTimeout(() => {
    r(this, se, "f").delete(t), r(this, oe, "f").call(this, true, t);
  }, this.startDelay))) : r(this, oe, "f").call(this, true, t);
}, bi = function(e) {
  const t = e.target;
  r(this, D, "m", yt).call(this, t) || (this.endDelay > 0 ? (r(this, D, "m", vt).call(this, t), r(this, ie, "f").set(t, setTimeout(() => {
    r(this, ie, "f").delete(t), r(this, oe, "f").call(this, false, t);
  }, this.endDelay))) : r(this, oe, "f").call(this, false, t));
};
var M, S, V, et, de, P, B, tt, Mt, At, $e, Lt, zt, _i, wi, $i, ki, Ci, os, ke;
class ts extends ut {
  constructor(e, t) {
    super(e, t), M.add(this), S.set(this, void 0), V.set(this, void 0), et.set(this, void 0), de.set(this, void 0), P.set(this, /* @__PURE__ */ new Map()), B.set(this, /* @__PURE__ */ new Map()), tt.set(this, void 0), Mt.set(this, (s) => r(this, M, "m", _i).call(this, s)), At.set(this, (s) => r(this, M, "m", wi).call(this, s)), $e.set(this, (s) => r(this, M, "m", $i).call(this, s)), Lt.set(this, (s) => r(this, M, "m", ki).call(this, s)), zt.set(this, (s) => r(this, M, "m", Ci).call(this, s)), _(this, S, t.capture, "f"), _(this, V, t.callback, "f"), _(this, et, t.filter, "f"), _(this, de, t.isPressedKey, "f"), _(this, tt, t.minPressedDuration ?? 0, "f");
  }
  hostConnected() {
    document.addEventListener("pointerup", r(this, At, "f"), { capture: r(this, S, "f") }), document.addEventListener("touchend", r(this, $e, "f"), { capture: r(this, S, "f") }), document.addEventListener("touchcancel", r(this, $e, "f"), { capture: r(this, S, "f") }), super.hostConnected();
  }
  hostDisconnected() {
    document.removeEventListener("pointerup", r(this, At, "f"), { capture: r(this, S, "f") }), document.removeEventListener("touchend", r(this, $e, "f"), { capture: r(this, S, "f") }), document.removeEventListener("touchcancel", r(this, $e, "f"), { capture: r(this, S, "f") }), super.hostDisconnected();
    for (const e of r(this, B, "f").values()) clearTimeout(e);
    r(this, B, "f").clear(), r(this, P, "f").clear();
  }
  _observe(e) {
    e.addEventListener("pointerdown", r(this, Mt, "f"), { capture: r(this, S, "f") }), r(this, de, "f") && (e.addEventListener("keydown", r(this, Lt, "f"), { capture: r(this, S, "f") }), e.addEventListener("keyup", r(this, zt, "f"), { capture: r(this, S, "f") }));
  }
  _unobserve(e) {
    e.removeEventListener("pointerdown", r(this, Mt, "f"), { capture: r(this, S, "f") }), r(this, de, "f") && (e.removeEventListener("keydown", r(this, Lt, "f"), { capture: r(this, S, "f") }), e.removeEventListener("keyup", r(this, zt, "f"), { capture: r(this, S, "f") })), r(this, M, "m", ke).call(this, e), r(this, P, "f").delete(e);
  }
}
S = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakSet(), _i = function(e) {
  if (!r(this, et, "f")?.call(this, e) && !(e.pointerType === "mouse" && e.button > 1)) {
    for (const t of e.composedPath()) if (t instanceof HTMLElement && this.isObserving(t)) {
      r(this, M, "m", ke).call(this, t), r(this, P, "f").set(t, performance.now()), r(this, V, "f").call(this, true, { x: e.x, y: e.y }, t);
      break;
    }
  }
}, wi = function(e) {
  e.pointerType === "mouse" && e.button > 1 || r(this, M, "m", os).call(this, e.x, e.y);
}, $i = function(e) {
  r(this, M, "m", os).call(this, e.changedTouches[0]?.clientX ?? 0, e.changedTouches[0]?.clientY ?? 0);
}, ki = function(e) {
  if (r(this, et, "f")?.call(this, e) || e.target !== e.currentTarget) return;
  const t = e.currentTarget;
  if (r(this, de, "f")?.call(this, e.key) && (e.key === " " && e.preventDefault(), !e.repeat)) {
    r(this, M, "m", ke).call(this, t), r(this, P, "f").set(t, performance.now());
    const s = t.getBoundingClientRect();
    r(this, V, "f").call(this, true, { x: s.x + s.width / 2, y: s.y + s.height / 2 }, t);
  }
}, Ci = function(e) {
  if (e.target !== e.currentTarget) return;
  const t = e.currentTarget;
  if (r(this, P, "f").has(t) && r(this, de, "f")?.call(this, e.key)) {
    r(this, M, "m", ke).call(this, t);
    const s = r(this, tt, "f") - (performance.now() - r(this, P, "f").get(t)), i = t.getBoundingClientRect();
    s > 0 ? r(this, B, "f").set(t, setTimeout(() => {
      r(this, P, "f").delete(t), r(this, B, "f").delete(t), r(this, V, "f").call(this, false, { x: i.x + i.width / 2, y: i.y + i.height / 2 }, t);
    }, s)) : (r(this, P, "f").delete(t), r(this, V, "f").call(this, false, { x: i.x + i.width / 2, y: i.y + i.height / 2 }, t));
  }
}, os = function(e, t) {
  for (const s of r(this, P, "f")) {
    r(this, M, "m", ke).call(this, s[0]);
    const i = r(this, tt, "f") - (performance.now() - s[1]);
    i > 0 ? r(this, B, "f").set(s[0], setTimeout(() => {
      r(this, P, "f").delete(s[0]), r(this, B, "f").delete(s[0]), r(this, V, "f").call(this, false, { x: e, y: t }, s[0]);
    }, i)) : (r(this, P, "f").delete(s[0]), r(this, V, "f").call(this, false, { x: e, y: t }, s[0]));
  }
}, ke = function(e) {
  const t = r(this, B, "f").get(e);
  t !== void 0 && (clearTimeout(t), r(this, B, "f").delete(e));
};
var qe, Ht, Tt, ne, Ke;
class sa extends ut {
  constructor(e, t) {
    if (super(e, t), qe.set(this, void 0), Ht.set(this, void 0), Tt.set(this, void 0), ne.set(this, void 0), Ke.set(this, true), _(this, qe, t.callback, "f"), _(this, Ht, t.skipInitial ?? false, "f"), _(this, Tt, t.config, "f"), !window.ResizeObserver) {
      console.warn("ResizeController error: the browser does not support ResizeObserver.");
      return;
    }
    _(this, ne, new ResizeObserver((s, i) => r(this, qe, "f").call(this, s, i)), "f");
  }
  async hostUpdated() {
    r(this, ne, "f") && !r(this, Ht, "f") && r(this, Ke, "f") && r(this, qe, "f").call(this, [], r(this, ne, "f")), _(this, Ke, false, "f");
  }
  _observe(e) {
    r(this, ne, "f")?.observe(e, r(this, Tt, "f")), _(this, Ke, true, "f");
  }
  _unobserve(e) {
    r(this, ne, "f")?.unobserve(e);
  }
}
qe = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), ne = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap();
const W = (n2) => (e, t) => {
  const s = () => {
    typeof window < "u" && !customElements.get(n2) && customElements.define(n2, e);
  };
  t ? t.addInitializer(s) : s();
};
function Ei(n2) {
  const e = /* @__PURE__ */ Symbol("_id");
  return (t, s, i) => {
    const o = i.value;
    return i.value = function(...l) {
      const d = this;
      clearTimeout(d[e]), d[e] = setTimeout(() => o.apply(this, l), n2);
    }, i;
  };
}
var he, jt, st, Pt, ae, ii, ls, Si, Mi;
class Cn extends ut {
  constructor(e, t) {
    super(e, t), he.add(this), jt.set(this, void 0), st.set(this, void 0), Pt.set(this, (s) => r(this, he, "m", Mi).call(this, s)), ae.set(this, /* @__PURE__ */ new Map()), _(this, jt, t.debounce === true, "f"), _(this, st, t.callback, "f");
  }
  getScrollContainers(e) {
    return r(this, ae, "f").get(e);
  }
  _observe(e) {
    const t = r(this, he, "m", Si).call(this, e);
    if (t.length > 0) {
      r(this, ae, "f").set(e, t);
      for (const s of t) (s === document.documentElement ? document : s).addEventListener("scroll", r(this, Pt, "f"), { passive: true });
    }
  }
  _unobserve(e) {
    if (r(this, ae, "f").has(e)) {
      for (const t of r(this, ae, "f").get(e)) (t === document.documentElement ? document : t).removeEventListener("scroll", r(this, Pt, "f"));
      r(this, ae, "f").delete(e);
    }
  }
  _debounceCallback(e) {
    r(this, st, "f").call(this, e);
  }
}
jt = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), he = /* @__PURE__ */ new WeakSet(), ii = function(e) {
  const t = e.shadowRoot;
  if (!t) return null;
  const s = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT);
  let i = s.currentNode;
  for (; i; ) {
    if (i instanceof Element && r(this, he, "m", ls).call(this, i)) return i;
    i = s.nextNode();
  }
  return null;
}, ls = function(e) {
  const t = getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowY + t.overflowX);
}, Si = function(e) {
  const t = new Array(), s = r(this, he, "m", ii).call(this, e);
  s && t.push(s);
  let i = e;
  for (; i; ) r(this, he, "m", ls).call(this, i) && t.push(i), i = i.parentElement;
  return t;
}, Mi = function(e) {
  const t = e.target === document ? document.documentElement : e.target;
  r(this, jt, "f") ? this._debounceCallback(t) : r(this, st, "f").call(this, t);
};
m([Ei(40)], Cn.prototype, "_debounceCallback", null);
function Q(n2, ...e) {
  return typeof n2 == "object" && n2 !== null && e.every((t) => t in n2);
}
const k = /* @__PURE__ */ Symbol("internals");
function En(n2) {
  return Q(n2, k);
}
const ni = /* @__PURE__ */ Symbol("_internals"), me = /* @__PURE__ */ Symbol("_customState");
function ss(n2, e) {
  var t;
  class s extends n2 {
    constructor() {
      super(...arguments), this[t] = /* @__PURE__ */ new Set();
    }
    get [(t = me, k)]() {
      return this[ni] ?? (this[ni] = this.attachInternals());
    }
  }
  return s.formAssociated = e, s;
}
function mt(n2, e) {
  return me in n2 ? n2[me].has(e) : n2[k].states.has(e);
}
function j(n2, e) {
  mt(n2, e) || (me in n2 && n2[me].add(e), n2[k]?.states.add(e), n2[k]?.states.has(e));
}
function F(n2, e) {
  return me in n2 && n2[me].delete(e), n2[k]?.states.delete(e) ? (n2[k]?.states.has(e), true) : false;
}
function Xt(n2, e, t) {
  t ? j(n2, e) : F(n2, e);
}
function Yt(n2) {
  return Q(n2, "checked");
}
function Ai(n2) {
  class e extends n2 {
    constructor() {
      super(...arguments), this.checked = false;
    }
    update(s) {
      super.update(s), s.has("checked") && (this.role === "button" ? (this.ariaPressed = `${this.checked}`, this.ariaChecked = null) : this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = `${this.checked}`, this.ariaPressed = null));
    }
  }
  return m([g({ type: Boolean, reflect: true })], e.prototype, "checked", void 0), e;
}
function ai(n2) {
  return Q(n2, "indeterminate") && Yt(n2);
}
function Sn(n2) {
  class e extends Ai(n2) {
    constructor() {
      super(...arguments), this.indeterminate = false;
    }
    update(s) {
      super.update(s), s.has("indeterminate") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = !this.checked && this.indeterminate ? "mixed" : `${this.checked}`);
    }
  }
  return m([g({ type: Boolean, reflect: true })], e.prototype, "indeterminate", void 0), e;
}
function Mn(n2) {
  return Q(n2, "dirty", "pristine", "markAsDirty", "markAsPristine");
}
const cs = /* @__PURE__ */ Symbol("_eventHandler");
function ia(n2) {
  var e;
  class t extends n2 {
    constructor() {
      super(...arguments), this[e] = () => this.markAsDirty();
    }
    get dirty() {
      return mt(this, "--dirty");
    }
    get pristine() {
      return !this.dirty;
    }
    connectedCallback() {
      this.markAsPristine(), super.connectedCallback(), this.addEventListener("change", this[cs]);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("change", this[cs]);
    }
    markAsPristine() {
      F(this, "--dirty");
    }
    markAsDirty() {
      j(this, "--dirty");
    }
  }
  return e = cs, t;
}
function Os(n2) {
  return Q(n2, "touched", "untouched", "markAsTouched", "markAsUntouched");
}
const ds = /* @__PURE__ */ Symbol("_eventHandler");
function na(n2) {
  var e;
  class t extends n2 {
    constructor() {
      super(...arguments), this[e] = () => this.markAsTouched();
    }
    get touched() {
      return mt(this, "--touched");
    }
    get untouched() {
      return !this.touched;
    }
    connectedCallback() {
      this.markAsUntouched(), super.connectedCallback(), this.addEventListener("focusout", this[ds], { capture: true });
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("focusout", this[ds], { capture: true });
    }
    markAsTouched() {
      j(this, "--touched");
    }
    markAsUntouched() {
      F(this, "--touched");
    }
  }
  return e = ds, t;
}
const is = { primary: a("var(--md-sys-color-primary, #6750A4)"), onPrimary: a("var(--md-sys-color-on-primary, #FFFFFF)"), primaryContainer: a("var(--md-sys-color-primary-container, #EADDFF)"), onPrimaryContainer: a("var(--md-sys-color-on-primary-container, #4F378B)"), primaryFixed: a("var(--md-sys-color-primary-fixed, #EADDFF)"), primaryFixedDim: a("var(--md-sys-color-primary-fixed-dim, #D0BCFF)"), onPrimaryFixed: a("var(--md-sys-color-on-primary-fixed, #21005D)"), onPrimaryFixedVariant: a("var(--md-sys-color-on-primary-fixed-variant, #4F378B)"), secondary: a("var(--md-sys-color-secondary, #625B71)"), onSecondary: a("var(--md-sys-color-on-secondary, #FFFFFF)"), secondaryContainer: a("var(--md-sys-color-secondary-container, #E8DEF8)"), onSecondaryContainer: a("var(--md-sys-color-on-secondary-container, #4A4458)"), secondaryFixed: a("var(--md-sys-color-secondary-fixed, #E8DEF8)"), secondaryFixedDim: a("var(--md-sys-color-secondary-fixed-dim, #CCC2DC)"), onSecondaryFixed: a("var(--md-sys-color-on-secondary-fixed, #1D192B)"), onSecondaryFixedVariant: a("var(--md-sys-color-on-secondary-fixed-variant, #4A4458)"), tertiary: a("var(--md-sys-color-tertiary, #7D5260)"), onTertiary: a("var(--md-sys-color-on-tertiary, #FFFFFF)"), tertiaryContainer: a("var(--md-sys-color-tertiary-container, #FFD8E4)"), onTertiaryContainer: a("var(--md-sys-color-on-tertiary-container, #633B48)"), tertiaryFixed: a("var(--md-sys-color-tertiary-fixed, #FFD8E4)"), tertiaryFixedDim: a("var(--md-sys-color-tertiary-fixed-dim, #EFB8C8)"), onTertiaryFixed: a("var(--md-sys-color-on-tertiary-fixed, #31111D)"), onTertiaryFixedVariant: a("var(--md-sys-color-on-tertiary-fixed-variant, #633B48)"), error: a("var(--md-sys-color-error, #B3261E)"), onError: a("var(--md-sys-color-on-error, #FFFFFF)"), errorContainer: a("var(--md-sys-color-error-container, #F9DEDC)"), onErrorContainer: a("var(--md-sys-color-on-error-container, #8C1D18)"), surface: a("var(--md-sys-color-surface, #FEF7FF)"), onSurface: a("var(--md-sys-color-on-surface, #1D1B20)"), onSurfaceVariant: a("var(--md-sys-color-on-surface-variant, #49454F)"), surfaceContainerLowest: a("var(--md-sys-color-surface-container-lowest, #FFFFFF)"), surfaceContainerLow: a("var(--md-sys-color-surface-container-low, #F7F2FA)"), surfaceContainer: a("var(--md-sys-color-surface-container, #F3EDF7)"), surfaceContainerHigh: a("var(--md-sys-color-surface-container-high, #ECE6F0)"), surfaceContainerHighest: a("var(--md-sys-color-surface-container-highest, #E6E0E9)"), surfaceDim: a("var(--md-sys-color-surface-dim, #DED8E1)"), surfaceBright: a("var(--md-sys-color-surface-bright, #FEF7FF)"), surfaceVariant: a("var(--md-sys-color-surface-variant, #E7E0EC)"), inverseSurface: a("var(--md-sys-color-inverse-surface, #322F35)"), inverseOnSurface: a("var(--md-sys-color-inverse-on-surface, #F5EFF7)"), inversePrimary: a("var(--md-sys-color-inverse-primary, #D0BCFF)"), outline: a("var(--md-sys-color-outline, #79747E)"), outlineVariant: a("var(--md-sys-color-outline-variant, #CAC4D0)"), shadow: a("var(--md-sys-color-shadow, #000000)"), scrim: a("var(--md-sys-color-scrim, #000000)") }, Ie = { scale: a("var(--md-sys-density-scale, 0)"), size: a("var(--md-sys-density-size, 4px)") }, An = { ...Ie, calc(n2) {
  return a(`calc(max(${n2}, ${Ie.scale}) * ${Ie.size})`);
}, calcHalf(n2) {
  return a(`calc(max(${n2}, ${Ie.scale}) * (${Ie.size} / 2))`);
} }, Ln = `color-mix(in srgb, var(--m3e-elevation-color, ${is.shadow}) 20%, transparent)`, zn = ["0px 0px 0px 0px", "0px 2px 1px -1px", "0px 3px 1px -2px", "0px 3px 3px -2px", "0px 2px 4px -1px", "0px 3px 5px -1px", "0px 3px 5px -1px", "0px 4px 5px -2px", "0px 5px 5px -3px", "0px 5px 6px -3px", "0px 6px 6px -3px", "0px 6px 7px -4px", "0px 7px 8px -4px", "0px 7px 8px -4px", "0px 7px 9px -4px", "0px 8px 9px -5px", "0px 8px 10px -5px", "0px 8px 11px -5px", "0px 9px 11px -5px", "0px 9px 12px -6px", "0px 10px 13px -6px", "0px 10px 13px -6px", "0px 10px 14px -6px", "0px 11px 14px -7px", "0px 11px 15px -7px"], Hn = `color-mix(in srgb, var(--m3e-elevation-color, ${is.shadow}) 14%, transparent)`, Tn = ["0px 0px 0px 0px", "0px 1px 1px 0px", "0px 2px 2px 0px", "0px 3px 4px 0px", "0px 4px 5px 0px", "0px 5px 8px 0px", "0px 6px 10px 0px", "0px 7px 10px 1px", "0px 8px 10px 1px", "0px 9px 12px 1px", "0px 10px 14px 1px", "0px 11px 15px 1px", "0px 12px 17px 2px", "0px 13px 19px 2px", "0px 14px 21px 2px", "0px 15px 22px 2px", "0px 16px 24px 2px", "0px 17px 26px 2px", "0px 18px 28px 2px", "0px 19px 29px 2px", "0px 20px 31px 3px", "0px 21px 33px 3px", "0px 22px 35px 3px", "0px 23px 36px 3px", "0px 24px 38px 3px"], Pn = `color-mix(in srgb, var(--m3e-elevation-color, ${is.shadow}) 12%, transparent)`, Fn = ["0px 0px 0px 0px", "0px 1px 3px 0px", "0px 1px 5px 0px", "0px 1px 8px 0px", "0px 1px 10px 0px", "0px 1px 14px 0px", "0px 1px 18px 0px", "0px 2px 16px 1px", "0px 3px 14px 2px", "0px 3px 16px 2px", "0px 4px 18px 3px", "0px 4px 20px 3px", "0px 5px 22px 4px", "0px 5px 24px 4px", "0px 5px 26px 4px", "0px 6px 28px 5px", "0px 6px 30px 5px", "0px 6px 32px 5px", "0px 7px 34px 6px", "0px 7px 36px 6px", "0px 8px 38px 7px", "0px 8px 40px 7px", "0px 8px 42px 7px", "0px 9px 44px 8px", "0px 9px 46px 8px"];
function ge(n2) {
  return `${Ln} ${zn[n2]},${Hn} ${Tn[n2]},${Pn} ${Fn[n2]}`;
}
const Dn = { level0: a(`var(--md-sys-elevation-level0, ${ge(0)})`), level1: a(`var(--md-sys-elevation-level1, ${ge(1)})`), level2: a(`var(--md-sys-elevation-level2, ${ge(3)})`), level3: a(`var(--md-sys-elevation-level3, ${ge(6)})`), level4: a(`var(--md-sys-elevation-level4, ${ge(8)})`), level5: a(`var(--md-sys-elevation-level5, ${ge(12)})`) };
function x(n2) {
  return a(`var(--md-sys-measurement-space${n2}, ${8 * (n2 / 100)}px)`);
}
const Wn = { space0: x(0), space25: x(25), space50: x(50), space75: x(75), space100: x(100), space125: x(125), space150: x(150), space175: x(175), space200: x(200), space225: x(225), space250: x(250), space300: x(300), space325: x(325), space350: x(350), space375: x(375), space400: x(400), space425: x(425), space450: x(450), space475: x(475), space500: x(500), space525: x(525), space550: x(550), space575: x(575), space600: x(600), space625: x(625), space650: x(650), space675: x(675), space700: x(700), space725: x(725), space750: x(750), space775: x(775), space800: x(800), space825: x(825), space850: x(850), space875: x(875), space900: x(900) }, Rn = { emphasized: a("var(--md-sys-motion-easing-emphasized, cubic-bezier(0.2, 0.0, 0, 1.0))"), emphasizedDecelerate: a("var(--md-sys-motion-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))"), emphasizedAccelerate: a("var(--md-sys-motion-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))"), standard: a("var(--md-sys-motion-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))"), standardDecelerate: a("var(--md-sys-motion-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))"), standardAccelerate: a("var(--md-sys-motion-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))") }, On = { fastSpatial: a("var(--md-sys-motion-spring-fast-spatial, 350ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), defaultSpatial: a("var(--md-sys-motion-spring-default-spatial, 500ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), slowSpatial: a("var(--md-sys-motion-spring-slow-spatial, 750ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), fastEffects: a("var(--md-sys-motion-spring-fast-effects, 150ms cubic-bezier(0.31, 0.94, 0.34, 1.00))"), defaultEffects: a("var(--md-sys-motion-spring-default-effects, 200ms cubic-bezier(0.34, 0.80, 0.34, 1.00))"), slowEffects: a("var(--md-sys-motion-spring-slow-effects, 200ms cubic-bezier(0.34, 0.88, 0.34, 1.00))") }, In = { short1: a("var(--md-sys-motion-duration-short-1, 50ms)"), short2: a("var(--md-sys-motion-duration-short-2, 100ms)"), short3: a("var(--md-sys-motion-duration-short-3, 150ms)"), short4: a("var(--md-sys-motion-duration-short-4, 200ms)"), medium1: a("var(--md-sys-motion-duration-medium-1, 250ms)"), medium2: a("var(--md-sys-motion-duration-medium-2, 300ms)"), medium3: a("var(--md-sys-motion-duration-medium-3, 350ms)"), medium4: a("var(--md-sys-motion-duration-medium-4, 400ms)"), long1: a("var(--md-sys-motion-duration-long-1, 450ms)"), long2: a("var(--md-sys-motion-duration-long-2, 500ms)"), long3: a("var(--md-sys-motion-duration-long-3, 550ms)"), long4: a("var(--md-sys-motion-duration-long-4, 600ms)"), extraLong1: a("var(--md-sys-motion-duration-extra-long-1, 700ms)"), extraLong2: a("var(--md-sys-motion-duration-extra-long-2, 800ms)"), extraLong3: a("var(--md-sys-motion-duration-extra-long-3, 900ms)"), extraLong4: a("var(--md-sys-motion-duration-extra-long-4, 1000ms)") }, Un = { easing: Rn, duration: In, spring: On }, Bn = { width: a("var(--m3e-scrollbar-width, auto)"), thinWidth: a("var(--m3e-scrollbar-thin-width, thin)"), color: a("var(--m3e-scrollbar-thumb-color, #938f94) var(--m3e-scrollbar-track-color, transparent)") }, u = { none: a("var(--md-sys-shape-corner-value-none, 0)"), extraSmall: a("var(--md-sys-shape-corner-value-extra-small, 4px)"), small: a("var(--md-sys-shape-corner-value-small, 8px)"), medium: a("var(--md-sys-shape-corner-value-medium, 12px)"), large: a("var(--md-sys-shape-corner-value-large, 16px)"), largeIncreased: a("var(--md-sys-shape-corner-value-large-increased, 20px)"), extraLarge: a("var(--md-sys-shape-corner-value-extra-large, 28px)"), extraLargeIncreased: a("var(--md-sys-shape-corner-value-extra-large-increased, 32px)"), extraExtraLarge: a("var(--md-sys-shape-corner-value-extra-extra-large, 48px)") }, Nn = { corner: { full: a("var(--md-sys-shape-corner-full, 9999px)"), extraLargeTop: a(`var(--md-sys-shape-corner-extra-large-top, ${u.extraLarge} ${u.extraLarge} ${u.none} ${u.none})`), extraLarge: a(`var(--md-sys-shape-corner-extra-large, ${u.extraLarge})`), extraLargeEnd: a(`${u.none} ${u.extraLarge} ${u.extraLarge} ${u.none}`), extraLargeStart: a(`${u.extraLarge} ${u.none} ${u.none} ${u.extraLarge}`), largeTop: a(`var(--md-sys-shape-corner-large-top, ${u.large} ${u.large} ${u.none} ${u.none})`), largeEnd: a(`var(--md-sys-shape-corner-large-end, ${u.none} ${u.large} ${u.large} ${u.none})`), largeStart: a(`var(--md-sys-shape-corner-large-start, ${u.large} ${u.none} ${u.none} ${u.large})`), large: a(`var(--md-sys-shape-corner-large, ${u.large})`), medium: a(`var(--md-sys-shape-corner-medium, ${u.medium})`), mediumTop: a(`${u.medium} ${u.medium} ${u.none} ${u.none}`), mediumEnd: a(`${u.none} ${u.medium} ${u.medium} ${u.none}`), mediumStart: a(`${u.medium} ${u.none} ${u.none} ${u.medium}`), small: a(`var(--md-sys-shape-corner-small, ${u.small})`), smallTop: a(`${u.small} ${u.small} ${u.none} ${u.none}`), smallEnd: a(`${u.none} ${u.small} ${u.small} ${u.none}`), smallStart: a(`${u.small} ${u.none} ${u.none} ${u.small}`), extraSmallTop: a(`var(--md-sys-shape-corner-extra-small-top, ${u.extraSmall} ${u.extraSmall} ${u.none} ${u.none})`), extraSmall: a(`var(--md-sys-shape-corner-extra-small, ${u.extraSmall})`), extraSmallEnd: a(`${u.none} ${u.extraSmall} ${u.extraSmall} ${u.none}`), extraSmallStart: a(`${u.extraSmall} ${u.none} ${u.none} ${u.extraSmall}`), extraSmallBottom: a(`${u.none} ${u.none} ${u.extraSmall} ${u.extraSmall}`), none: a(`var(--md-sys-shape-corner-none, ${u.none})`), largeIncreased: a(`var(--md-sys-shape-corner-large-increased, ${u.largeIncreased})`), extraLargeIncreased: a(`var(--md-sys-shape-corner-extra-large-increased, ${u.extraLargeIncreased})`), extraExtraLarge: a(`var(--md-sys-shape-corner-extra-extra-large, ${u.extraExtraLarge})`) } }, Vn = { focusStateLayerOpacity: a("var(--md-sys-state-focus-state-layer-opacity, 10%)"), hoverStateLayerOpacity: a("var(--md-sys-state-hover-state-layer-opacity, 8%)"), pressedStateLayerOpacity: a("var(--md-sys-state-pressed-state-layer-opacity, 10%)") }, qn = { standard: { display: { large: { fontSize: a("var(--md-sys-typescale-display-large-font-size, 3.5625rem)"), fontWeight: a("var(--md-sys-typescale-display-large-font-weight, 400)"), lineHeight: a("var(--md-sys-typescale-display-large-line-height, 4rem)"), tracking: a("var(--md-sys-typescale-display-large-tracking, 0.015625rem)") }, medium: { fontSize: a("var(--md-sys-typescale-display-medium-font-size, 2.8125rem)"), fontWeight: a("var(--md-sys-typescale-display-medium-font-weight, 400)"), lineHeight: a("var(--md-sys-typescale-display-medium-line-height, 3.25rem)"), tracking: a("var(--md-sys-typescale-display-medium-tracking, 0)") }, small: { fontSize: a("var(--md-sys-typescale-display-small-font-size, 2.25rem)"), fontWeight: a("var(--md-sys-typescale-display-small-font-weight, 400)"), lineHeight: a("var(--md-sys-typescale-display-small-line-height, 2.75rem)"), tracking: a("var(--md-sys-typescale-display-small-tracking, 0)") } }, headline: { large: { fontSize: a("var(--md-sys-typescale-headline-large-font-size, 2rem)"), fontWeight: a("var(--md-sys-typescale-headline-large-font-weight, 400)"), lineHeight: a("var(--md-sys-typescale-headline-large-line-height, 2.5rem)"), tracking: a("var(--md-sys-typescale-headline-large-tracking, 0)") }, medium: { fontSize: a("var(--md-sys-typescale-headline-medium-font-size, 1.75rem)"), fontWeight: a("var(--md-sys-typescale-headline-medium-font-weight, 400)"), lineHeight: a("var(--md-sys-typescale-headline-medium-line-height, 2.25rem)"), tracking: a("var(--md-sys-typescale-headline-medium-tracking, 0)") }, small: { fontSize: a("var(--md-sys-typescale-headline-small-font-size, 1.5rem)"), fontWeight: a("var(--md-sys-typescale-headline-small-font-weight, 400)"), lineHeight: a("var(--md-sys-typescale-headline-small-line-height, 2rem)"), tracking: a("var(--md-sys-typescale-headline-small-tracking, 0)") } }, title: { large: { fontSize: a("var(--md-sys-typescale-title-large-font-size, 1.375rem)"), fontWeight: a("var(--md-sys-typescale-title-large-font-weight, 400)"), lineHeight: a("var(--md-sys-typescale-title-large-line-height, 1.75rem)"), tracking: a("var(--md-sys-typescale-title-large-tracking, 0)") }, medium: { fontSize: a("var(--md-sys-typescale-title-medium-font-size, 1rem)"), fontWeight: a("var(--md-sys-typescale-title-medium-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-title-medium-line-height, 1.5rem)"), tracking: a("var(--md-sys-typescale-title-medium-tracking, 0.009375rem)") }, small: { fontSize: a("var(--md-sys-typescale-title-small-font-size, 0.875rem)"), fontWeight: a("var(--md-sys-typescale-title-small-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-title-small-line-height, 1.25rem)"), tracking: a("var(--md-sys-typescale-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: a("var(--md-sys-typescale-body-large-font-size, 1rem)"), fontWeight: a("var(--md-sys-typescale-body-large-font-weight, 400)"), lineHeight: a("var(--md-sys-typescale-body-large-line-height, 1.5rem)"), tracking: a("var(--md-sys-typescale-body-large-tracking, 0.03125rem)") }, medium: { fontSize: a("var(--md-sys-typescale-body-medium-font-size, 0.875rem)"), fontWeight: a("var(--md-sys-typescale-body-medium-font-weight, 400)"), lineHeight: a("var(--md-sys-typescale-body-medium-line-height, 1.25rem)"), tracking: a("var(--md-sys-typescale-body-medium-tracking, 0.015625rem)") }, small: { fontSize: a("var(--md-sys-typescale-body-small-font-size, 0.75rem)"), fontWeight: a("var(--md-sys-typescale-body-small-font-weight, 400)"), lineHeight: a("var(--md-sys-typescale-body-small-line-height, 1rem)"), tracking: a("var(--md-sys-typescale-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: a("var(--md-sys-typescale-label-large-font-size, 0.875rem)"), fontWeight: a("var(--md-sys-typescale-label-large-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-label-large-line-height, 1.25rem)"), tracking: a("var(--md-sys-typescale-label-large-tracking, 0.00625rem)") }, medium: { fontSize: a("var(--md-sys-typescale-label-medium-font-size, 0.75rem)"), fontWeight: a("var(--md-sys-typescale-label-medium-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-label-medium-line-height, 1rem)"), tracking: a("var(--md-sys-typescale-label-medium-tracking, 0.03125rem)") }, small: { fontSize: a("var(--md-sys-typescale-label-small-font-size, 0.6875rem)"), fontWeight: a("var(--md-sys-typescale-label-small-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-label-small-line-height, 1rem)"), tracking: a("var(--md-sys-typescale-label-small-tracking, 0.03125rem)") } } }, emphasized: { display: { large: { fontSize: a("var(--md-sys-typescale-emphasized-display-large-font-size, 3.5625rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-display-large-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-emphasized-display-large-line-height, 4rem)"), tracking: a("var(--md-sys-typescale-emphasized-display-large-tracking, 0.015625rem)") }, medium: { fontSize: a("var(--md-sys-typescale-emphasized-display-medium-font-size, 2.8125rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-display-medium-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-emphasized-display-medium-line-height, 3.25rem)"), tracking: a("var(--md-sys-typescale-emphasized-display-medium-tracking, 0)") }, small: { fontSize: a("var(--md-sys-typescale-emphasized-display-small-font-size, 2.25rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-display-small-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-emphasized-display-small-line-height, 2.75rem)"), tracking: a("var(--md-sys-typescale-emphasized-display-small-tracking, 0)") } }, headline: { large: { fontSize: a("var(--md-sys-typescale-emphasized-headline-large-font-size, 2rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-headline-large-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-emphasized-headline-large-line-height, 2.5rem)"), tracking: a("var(--md-sys-typescale-emphasized-headline-large-tracking, 0)") }, medium: { fontSize: a("var(--md-sys-typescale-emphasized-headline-medium-font-size, 1.75rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-headline-medium-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-emphasized-headline-medium-line-height, 2.25rem)"), tracking: a("var(--md-sys-typescale-emphasized-headline-medium-tracking, 0)") }, small: { fontSize: a("var(--md-sys-typescale-emphasized-headline-small-font-size, 1.5rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-headline-small-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-emphasized-headline-small-line-height, 2rem)"), tracking: a("var(--md-sys-typescale-emphasized-headline-small-tracking, 0)") } }, title: { large: { fontSize: a("var(--md-sys-typescale-emphasized-title-large-font-size, 1.375rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-title-large-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-emphasized-title-large-line-height, 1.75rem)"), tracking: a("var(--md-sys-typescale-emphasized-title-large-tracking, 0)") }, medium: { fontSize: a("var(--md-sys-typescale-emphasized-title-medium-font-size, 1rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-title-medium-font-weight, 700)"), lineHeight: a("var(--md-sys-typescale-emphasized-title-medium-line-height, 3.5rem)"), tracking: a("var(--md-sys-typescale-emphasized-title-medium-tracking, 0.009375rem)") }, small: { fontSize: a("var(--md-sys-typescale-emphasized-title-small-font-size, 0.875rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-title-small-font-weight, 700)"), lineHeight: a("var(--md-sys-typescale-emphasized-title-small-line-height, 1.25rem)"), tracking: a("var(--md-sys-typescale-emphasized-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: a("var(--md-sys-typescale-emphasized-body-large-font-size, 1rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-body-large-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-emphasized-body-large-line-height, 1.5rem)"), tracking: a("var(--md-sys-typescale-emphasized-body-large-tracking, 0.03125rem)") }, medium: { fontSize: a("var(--md-sys-typescale-emphasized-body-medium-font-size, 0.875rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-body-medium-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-emphasized-body-medium-line-height, 1.25rem)"), tracking: a("var(--md-sys-typescale-emphasized-body-medium-tracking, 0.015625rem)") }, small: { fontSize: a("var(--md-sys-typescale-emphasized-body-small-font-size, 0.75rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-body-small-font-weight, 500)"), lineHeight: a("var(--md-sys-typescale-emphasized-body-small-line-height, 1rem)"), tracking: a("var(--md-sys-typescale-emphasized-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: a("var(--md-sys-typescale-emphasized-label-large-font-size, 0.875rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-label-large-font-weight, 700)"), lineHeight: a("var(--md-sys-typescale-emphasized-label-large-line-height, 1.25rem)"), tracking: a("var(--md-sys-typescale-emphasized-label-large-tracking, 0.00625rem)") }, medium: { fontSize: a("var(--md-sys-typescale-emphasized-label-medium-font-size, 0.75rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-label-medium-font-weight, 700)"), lineHeight: a("var(--md-sys-typescale-emphasized-label-medium-line-height, 1rem)"), tracking: a("var(--md-sys-typescale-emphasized-label-medium-tracking, 0.03125rem)") }, small: { fontSize: a("var(--md-sys-typescale-emphasized-label-small-font-size, 0.6875rem)"), fontWeight: a("var(--md-sys-typescale-emphasized-label-small-font-weight, 700)"), lineHeight: a("var(--md-sys-typescale-emphasized-label-small-line-height, 1rem)"), tracking: a("var(--md-sys-typescale-emphasized-label-small-tracking, 0.03125rem)") } } } }, c = { color: is, elevation: Dn, motion: Un, shape: Nn, state: Vn, typescale: qn, scrollbar: Bn, density: An, measurement: Wn };
function He(n2) {
  return Q(n2, "disabled");
}
function Li(n2, e = true) {
  class t extends n2 {
    constructor() {
      super(...arguments), this.disabled = false;
    }
    update(i) {
      super.update(i), i.has("disabled") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaDisabled = this.disabled ? "true" : null);
    }
  }
  return m([g({ type: Boolean, reflect: e })], t.prototype, "disabled", void 0), t;
}
function Te(n2) {
  return Q(n2, "disabledInteractive") && He(n2);
}
const ri = ["click", "dblclick", "auxclick", "keydown", "keyup"], Kn = ["Tab", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Left", "Up", "Right", "Down"], hs = /* @__PURE__ */ Symbol("_suppressedEventHandler");
function aa(n2) {
  var e;
  class t extends n2 {
    constructor() {
      super(...arguments), this[e] = (i) => {
        if (this.disabledInteractive) {
          if (i instanceof KeyboardEvent && Kn.includes(i.key)) return;
          i.stopImmediatePropagation(), i.preventDefault();
        }
      }, this.disabledInteractive = false;
    }
    connectedCallback() {
      ri.forEach((i) => this.addEventListener(i, this[hs], true)), super.connectedCallback();
    }
    disconnectedCallback() {
      ri.forEach((i) => this.removeEventListener(i, this[hs], true)), super.disconnectedCallback();
    }
    update(i) {
      super.update(i), (i.has("disabled") || i.has("disabledInteractive")) && this.role && this.role !== "none" && this.role !== "presentation" && this.role !== "none" && (this.ariaDisabled = this.disabled || this.disabledInteractive ? "true" : null);
    }
  }
  return e = hs, m([g({ attribute: "disabled-interactive", type: Boolean, reflect: true })], t.prototype, "disabledInteractive", void 0), t;
}
const Ft = /* @__PURE__ */ Symbol("updateLabels");
function jn(n2) {
  return Q(n2, "labels") && En(n2);
}
const Ue = /* @__PURE__ */ Symbol("_eventHandler");
function ra(n2) {
  var e;
  class t extends n2 {
    constructor() {
      super(...arguments), this[e] = (i) => {
        i.defaultPrevented || this[Ft]();
      };
    }
    get labels() {
      return this[k].labels;
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("focusout", this[Ue]), this.addEventListener("change", this[Ue]);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("focusout", this[Ue]), this.removeEventListener("change", this[Ue]);
    }
    update(i) {
      super.update(i), this[Ft]();
    }
    [(e = Ue, Ft)]() {
      const i = this.hasAttribute("tabindex"), o = He(this) && this.disabled || Te(this) && this.disabledInteractive, l = Os(this) && this.touched && (this.ariaInvalid || mt(this, "--invalid"));
      for (const d of this.labels ?? []) d.style.userSelect = i ? "none" : "", d.style.cursor = !o && i ? "pointer" : "", !o && i ? d.style.setProperty("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)") : d.style.removeProperty("-webkit-tap-highlight-color"), d.style.color = o ? `color-mix(in srgb, ${c.color.onSurface} 38%, transparent)` : l ? `${c.color.error}` : "";
    }
  }
  return t.formAssociated = true, t;
}
const oi = /* @__PURE__ */ Symbol("formValue"), li = /* @__PURE__ */ Symbol("defaultValue"), gt = /* @__PURE__ */ Symbol("_defaultValue"), ps = /* @__PURE__ */ Symbol("_defaultIndeterminate"), us = /* @__PURE__ */ Symbol("_formDisabled");
function oa(n2) {
  var e, t;
  class s extends n2 {
    constructor() {
      super(...arguments), this[e] = false, this[t] = false;
    }
    get form() {
      return this[k].form;
    }
    get labels() {
      return this[k].labels;
    }
    get [(e = ps, t = us, oi)]() {
      return null;
    }
    get [li]() {
      return this[gt];
    }
    get name() {
      return this.getAttribute("name") ?? "";
    }
    set name(o) {
      o ? this.setAttribute("name", o) : this.removeAttribute("name");
    }
    get disabled() {
      return super.disabled || this[us];
    }
    set disabled(o) {
      super.disabled = o;
    }
    connectedCallback() {
      super.connectedCallback(), Yt(this) ? (this[gt] = this.checked, ai(this) && (this[ps] = this.indeterminate)) : "value" in this && (this[gt] = this.value);
    }
    requestUpdate(o, l, d) {
      super.requestUpdate(o, l, d), this[k].setFormValue(this[oi]);
    }
    formDisabledCallback(o) {
      const l = this.disabled;
      this[us] = o, this.disabled != l && this.requestUpdate("disabled", l);
    }
    formResetCallback() {
      Yt(this) ? (this.checked = this[gt] === true, ai(this) && (this.indeterminate = this[ps])) : "value" in this && (this.value = this[li]), Mn(this) && this.markAsPristine(), Os(this) && this.markAsUntouched();
    }
  }
  return s.formAssociated = true, m([g({ noAccessor: true })], s.prototype, "name", null), m([g({ type: Boolean })], s.prototype, "disabled", null), s;
}
const Zt = /* @__PURE__ */ Symbol("validate"), ci = /* @__PURE__ */ Symbol("defaultValidationMessages"), Y = /* @__PURE__ */ Symbol("_updateValidity"), bt = /* @__PURE__ */ Symbol("_validityMessage"), ms = /* @__PURE__ */ Symbol("_validationMessages");
function la(n2) {
  var e;
  class t extends n2 {
    constructor() {
      super(...arguments), this[e] = {};
    }
    get willValidate() {
      return this[k].willValidate;
    }
    get validity() {
      return this[Y](), this[k].validity;
    }
    get validationMessage() {
      return this[Y](), this[k].validationMessage;
    }
    get [(e = ms, ci)]() {
      return { valueMissing: "This field is required.", typeMismatch: "The value is not in the correct format.", patternMismatch: "The value does not match the required pattern.", tooLong: "The value is too long.", tooShort: "The value is too short.", rangeUnderflow: "The value is too small.", rangeOverflow: "The value is too large.", stepMismatch: "The value is not a valid step.", badInput: "The value is invalid.", customError: "The value is invalid." };
    }
    set validationMessages(i) {
      this[ms] = i;
    }
    get validationMessages() {
      return { ...this[ci], ...this[ms] };
    }
    [Zt]() {
      return this[bt] ? { customError: true } : void 0;
    }
    reportValidity() {
      return Os(this) && this.markAsTouched(), this[Y](), this[k].reportValidity();
    }
    checkValidity() {
      return this[Y](), this[k].checkValidity();
    }
    setCustomValidity(i) {
      i ? this[bt] = i : this[bt] = void 0, this[Y]();
    }
    requestUpdate(i, o, l) {
      super.requestUpdate(i, o, l), this[Y]();
    }
    firstUpdated(i) {
      super.firstUpdated(i), this[Y]();
    }
    [Y]() {
      if (!this.isConnected) return;
      const i = this[Zt](), o = i?.customError ? this[bt] || this._getValidityMessage(i) : this._getValidityMessage(i), l = !!o;
      this[k].setValidity(i, o), this.ariaInvalid = l ? "true" : null, Xt(this, "--invalid", l === true), jn(this) && this[Ft]?.();
    }
    _getValidityMessage(i) {
      if (i) {
        const o = this.validationMessages;
        for (const l in i) if (i[l]) {
          const d = o[l];
          if (typeof d == "string") return d;
          if (typeof d == "function") return d(this);
        }
      }
      return "";
    }
  }
  return m([g({ type: Object })], t.prototype, "validationMessages", null), t;
}
const Be = /* @__PURE__ */ Symbol("_tabindex");
function ca(n2) {
  var e;
  class t extends n2 {
    constructor() {
      super(...arguments), this[e] = 0;
    }
    connectedCallback() {
      this[Be] = Number.parseInt(this.getAttribute("tabindex") ?? "0"), super.connectedCallback();
    }
    firstUpdated(i) {
      super.firstUpdated(i), !this.hasAttribute("tabindex") && !i.has("disabled") && this.setAttribute("tabindex", `${this[Be]}`);
    }
    update(i) {
      if (super.update(i), i.has("disabled")) if (!this.disabled && this.role !== "none") this.hasAttribute("tabindex") || this.setAttribute("tabindex", `${this[Be]}`);
      else {
        const o = this.getAttribute("tabindex");
        o && (this[Be] = Number.parseInt(o)), this.removeAttribute("tabindex");
      }
    }
  }
  return e = Be, t;
}
const fs = /* @__PURE__ */ Symbol("_clickHandler");
function da(n2) {
  var e;
  class t extends n2 {
    constructor() {
      super(...arguments), this.type = "button", this[e] = async (i) => {
        if (i.defaultPrevented || He(this) && this.disabled || Te(this) && this.disabledInteractive) return;
        const o = this[k].form;
        if (!(!o || this.type === "button") && (await new Promise((l) => setTimeout(l)), !i.defaultPrevented)) switch (this.type) {
          case "reset":
            o.reset();
            break;
          case "submit":
            o.addEventListener("submit", (l) => Object.defineProperty(l, "submitter", { configurable: true, enumerable: true, get: () => this }), { capture: true, once: true }), this[k].setFormValue(this.value), o.requestSubmit();
            break;
        }
      };
    }
    get name() {
      return this.getAttribute("name") ?? "";
    }
    set name(i) {
      i ? this.setAttribute("name", i) : this.removeAttribute("name");
    }
    get value() {
      return this.getAttribute("value");
    }
    set value(i) {
      i != null ? this.setAttribute("value", i) : this.removeAttribute("value");
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("click", this[fs]);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("click", this[fs]);
    }
  }
  return e = fs, t.formAssociated = true, m([g()], t.prototype, "name", null), m([g()], t.prototype, "value", null), m([g()], t.prototype, "type", void 0), t;
}
const be = /* @__PURE__ */ Symbol("_control"), ys = /* @__PURE__ */ Symbol("_firstUpdated");
function ft(n2) {
  var e;
  class t extends n2 {
    constructor() {
      super(...arguments), this[e] = false, this.htmlFor = null;
    }
    get control() {
      return this[be]?.deref() ?? null;
    }
    connectedCallback() {
      super.connectedCallback();
      const i = this[be]?.deref();
      i && this.attach(i);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      const i = this[be];
      i && (this.detach(), this[be] = i);
    }
    firstUpdated(i) {
      super.firstUpdated(i), this[ys] = true;
    }
    update(i) {
      if (super.update(i), i.has("htmlFor")) if (this.htmlFor) {
        const o = this.getRootNode();
        o && kn(this.htmlFor, o).then((l) => {
          l !== this.control && (this.control && this.detach(), l instanceof HTMLElement && this.attach(l));
        });
      } else this.control && this[ys] && this.detach();
    }
    attach(i) {
      this[be] = new WeakRef(i);
    }
    detach() {
      this[be] = void 0;
    }
  }
  return e = ys, m([g({ attribute: "for" })], t.prototype, "htmlFor", void 0), t;
}
function ha(n2, e = true) {
  var t, s, i, o, l, d, h;
  class f extends n2 {
    constructor() {
      super(...arguments), t.add(this), s.set(this, false), i.set(this, (p) => r(this, t, "m", d).call(this, p)), o.set(this, (p) => r(this, t, "m", h).call(this, p)), l.set(this, () => _(this, s, false, "f"));
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("keydown", r(this, i, "f")), this.addEventListener("keyup", r(this, o, "f")), this.addEventListener("focusout", r(this, l, "f"));
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("keydown", r(this, i, "f")), this.removeEventListener("keyup", r(this, o, "f")), this.removeEventListener("focusout", r(this, l, "f"));
    }
  }
  return s = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakSet(), d = function(p) {
    if (p.target !== p.currentTarget || He(this) && this.disabled || Te(this) && this.disabledInteractive) {
      _(this, s, false, "f");
      return;
    }
    (p.key === " " || e && p.key === "Enter") && _(this, s, true, "f");
  }, h = function(p) {
    if (p.target !== p.currentTarget || He(this) && this.disabled || Te(this) && this.disabledInteractive || !r(this, s, "f")) {
      _(this, s, false, "f");
      return;
    }
    _(this, s, false, "f"), this.dispatchEvent(new MouseEvent("click", { cancelable: true, bubbles: true, composed: true }));
  }, f;
}
const Xn = /* @__PURE__ */ Symbol("renderPseudoLink"), vs = /* @__PURE__ */ Symbol("_clickHandler");
function pa(n2, e = false) {
  var t, s, i, o, l;
  class d extends n2 {
    constructor() {
      super(...arguments), t.add(this), this[l] = async (f) => {
        if (Te(this) && this.disabledInteractive && (f.preventDefault(), f.stopPropagation()), await new Promise((y) => y()), !f.defaultPrevented && this.href) {
          f.preventDefault(), f.stopImmediatePropagation();
          const y = document.createElement("a");
          y.href = this.href, y.rel = this.rel, y.target = this.target, this.download != null && (y.download = this.download), y.addEventListener("click", async () => {
            await new Promise((p) => p()), y.remove();
          }), document.body.appendChild(y), y.click();
        }
      }, this.href = "", this.target = "", this.rel = "";
    }
    get download() {
      return this.getAttribute("download");
    }
    set download(f) {
      const y = this.download;
      y !== f && (f ? this.setAttribute("download", f) : this.removeAttribute("download"), this.requestUpdate("download", y));
    }
    connectedCallback() {
      super.connectedCallback(), e || this.addEventListener("click", this[vs]), this.hasAttribute("href") && this.role === "button" && (this.role = "link");
    }
    disconnectedCallback() {
      super.disconnectedCallback(), e || this.removeEventListener("click", this[vs]);
    }
    [(t = /* @__PURE__ */ new WeakSet(), l = vs, Xn)]() {
      const f = He(this) && this.disabled, y = Te(this) && this.disabledInteractive;
      return !f && !y && this.href ? A`<a href="${this.href}" target="${rs(this.target || void 0)}" rel="${rs(this.rel || void 0)}" download="${rs(this.download || void 0)}" tabindex="-1" aria-hidden="true" @pointerdown="${r(this, t, "m", s)}" @focus="${r(this, t, "m", i)}" @blur="${r(this, t, "m", o)}"></a>` : $;
    }
  }
  return s = function(f) {
    f.button !== 2 ? f.preventDefault() : f.target.removeAttribute("aria-hidden");
  }, i = function(f) {
    f.target.blur(), this.focus();
  }, o = function(f) {
    f.target.setAttribute("aria-hidden", "true");
  }, m([g()], d.prototype, "href", void 0), m([g()], d.prototype, "target", void 0), m([g()], d.prototype, "rel", void 0), m([g({ reflect: false })], d.prototype, "download", null), d;
}
const gs = /* @__PURE__ */ Symbol("_wasConnected");
function Yn(n2) {
  var e;
  class t extends n2 {
    constructor() {
      super(...arguments), this[e] = false;
    }
    reconnectedCallback() {
    }
    connectedCallback() {
      super.connectedCallback(), this[gs] && this.reconnectedCallback();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this[gs] = true;
    }
  }
  return e = gs, t;
}
function ua(n2, e = true) {
  class t extends n2 {
    constructor() {
      super(...arguments), this.required = false;
    }
    get optional() {
      return !this.required;
    }
    update(i) {
      super.update(i), i.has("required") && e && (this.ariaRequired = `${this.required}`);
    }
  }
  return m([g({ type: Boolean, reflect: true })], t.prototype, "required", void 0), t;
}
function ma(n2) {
  class e extends n2 {
    [Zt]() {
      const s = super[Zt]();
      if (!s && this.required) {
        if (Yt(this) && !this.checked) return { valueMissing: true };
        if (!this.value) return { valueMissing: true };
      }
      return s;
    }
  }
  return e;
}
function ve(n2, e) {
  class t extends n2 {
    connectedCallback() {
      this.role = this.role || e, super.connectedCallback();
    }
  }
  return t;
}
const di = /* @__PURE__ */ Symbol("resumeAnimation");
function Zn(n2) {
  class e extends n2 {
    connectedCallback() {
      super.connectedCallback(), j(this, "--no-animate"), this[di]();
    }
    [di]() {
      requestAnimationFrame(() => F(this, "--no-animate"));
    }
  }
  return e;
}
var Dt;
class Gn extends E {
  constructor() {
    super(...arguments), Dt.set(this, (e) => {
      e.defaultPrevented || this._onClick(e);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.parentElement?.addEventListener("click", r(this, Dt, "f"));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.parentElement?.removeEventListener("click", r(this, Dt, "f"));
  }
  render() {
    return A`<slot></slot>`;
  }
}
Dt = /* @__PURE__ */ new WeakMap();
Gn.styles = L`:host { display: contents; } ::slotted(.material-icons) { font-size: inherit !important; }`;
var T, it, je, zi, Xe, Ye, _s;
let Pe = class extends ss(E) {
  constructor() {
    super(...arguments), T.add(this), it.set(this, false), je.set(this, false), this.open = false, this.orientation = "vertical", this.noAnimate = false;
  }
  update(e) {
    super.update(e);
    const t = this.noAnimate || e.has("orientation") && !e.has("open");
    if (j(this, "--no-animate"), !r(this, it, "f")) {
      this.open && (_(this, je, true, "f"), r(this, T, "m", Xe).call(this)), _(this, it, true, "f");
      return;
    }
    this.toggleAttribute("inert", !this.open), this.open ? (_(this, je, true, "f"), t || wt() || (r(this, T, "m", Xe).call(this), Xt(this, "--overflows", this.orientation === "vertical" ? this.clientHeight < this.scrollHeight : this.orientation === "horizontal" ? this.clientWidth < this.scrollWidth : this.clientHeight < this.scrollHeight || this.clientWidth < this.scrollWidth), r(this, T, "m", Ye).call(this)), F(this, "--closing"), j(this, "--opening"), this.dispatchEvent(new Event("opening")), r(this, T, "m", Ye).call(this), F(this, "--no-animate"), r(this, T, "m", _s).call(this), t || wt() ? (r(this, T, "m", Xe).call(this), F(this, "--opening"), this.dispatchEvent(new Event("opened"))) : this.addEventListener("transitionend", () => {
      this.open && (r(this, T, "m", Xe).call(this), F(this, "--opening"), this.dispatchEvent(new Event("opened")));
    }, { once: true })) : (F(this, "--opening"), j(this, "--closing"), this.dispatchEvent(new Event("closing")), r(this, T, "m", _s).call(this), r(this, je, "f") && F(this, "--no-animate"), t || wt() ? (r(this, T, "m", Ye).call(this), F(this, "--closing"), this.dispatchEvent(new Event("closed"))) : requestAnimationFrame(() => {
      r(this, T, "m", Ye).call(this), this.addEventListener("transitionend", () => {
        this.open || (F(this, "--closing"), this.dispatchEvent(new Event("closed")));
      }, { once: true });
    }));
  }
  render() {
    return A`<slot @slotchange="${r(this, T, "m", zi)}"></slot>`;
  }
};
it = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakSet();
zi = function() {
  _(this, it, true, "f");
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
_s = function() {
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
Pe.styles = L`:host { display: block; overflow: hidden; } :host([orientation="vertical"]) { height: 0px; transition: ${a(`visibility var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        height var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding-top var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding-bottom var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard}`)}; } :host([orientation="horizontal"]) { width: 0px; transition: ${a(`visibility var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        width var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding-left var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding-right var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard}`)}; } :host([orientation="both"]) { height: 0px; width: 0px; transition: ${a(`visibility var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        width var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        height var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard}`)}; } :host(:not(:is(:state(--closing), :--closing)):not([open])) { visibility: hidden; } :host([orientation="vertical"]:not([open])) { min-height: unset !important; padding-top: 0px !important; padding-bottom: 0px !important; } :host([orientation="horizontal"]:not([open])) { min-width: unset !important; padding-left: 0px !important; padding-right: 0px !important; } :host([orientation="both"]:not([open])) { min-height: unset !important; min-width: unset !important; padding: 0px !important; } :host([no-animate]), :host(:is(:state(--no-animate), :--no-animate)) { transition-duration: 0ms; } :host([orientation="vertical"]:is(:state(--opening), :--opening)), :host([orientation="vertical"]:is(:state(--closing), :--closing)) { overflow-y: hidden !important; } :host([orientation="horizontal"]:is(:state(--opening), :--opening)), :host([orientation="horizontal"]:is(:state(--closing), :--closing)) { overflow-x: hidden !important; } :host([orientation="both"]:is(:state(--opening), :--opening)), :host([orientation="both"]:is(:state(--closing), :--closing)) { overflow-y: hidden !important; overflow-x: hidden !important; } :host(:is(:state(--overflows), :--overflows)) { scrollbar-gutter: stable; } ::slotted(*) { --m3e-collapsible-animation-duration: initial; } @media (prefers-reduced-motion) { :host { transition: none; } }`;
m([g({ type: Boolean, reflect: true })], Pe.prototype, "open", void 0);
m([g({ reflect: true })], Pe.prototype, "orientation", void 0);
m([g({ attribute: "no-animate", type: Boolean, reflect: true })], Pe.prototype, "noAnimate", void 0);
Pe = m([W("m3e-collapsible")], Pe);
const R = { liftDuration: a(`var(--m3e-elevation-lift-duration, ${c.motion.duration.short4})`), liftEasing: a(`var(--m3e-elevation-lift-easing, ${c.motion.easing.standard})`), settleDuration: a(`var(--m3e-elevation-settle-duration, ${c.motion.duration.short3})`), settleEasing: a(`var(--m3e-elevation-settle-easing, ${c.motion.easing.standardAccelerate})`), level: a(`var(--m3e-elevation-level, ${c.elevation.level0})`), hoverLevel: a(`var(--m3e-elevation-hover-level, ${c.elevation.level0})`), focusLevel: a(`var(--m3e-elevation-focus-level, ${c.elevation.level0})`), pressedLevel: a(`var(--m3e-elevation-pressed-level, ${c.elevation.level0})`) };
var Ze, Wt, Rt, Ot, Hi, Ti, Pi;
let Fe = class extends ft(ve(E, "none")) {
  constructor() {
    super(...arguments), Ze.add(this), Wt.set(this, new xi(this, { target: null, callback: (e) => r(this, Ze, "m", Hi).call(this, e) })), Rt.set(this, new es(this, { target: null, callback: (e) => r(this, Ze, "m", Ti).call(this, e) })), Ot.set(this, new ts(this, { target: null, callback: (e) => r(this, Ze, "m", Pi).call(this, e) })), this.disabled = false, this.level = null;
  }
  attach(e) {
    super.attach(e), r(this, Wt, "f").observe(e), r(this, Rt, "f").observe(e), r(this, Ot, "f").observe(e);
  }
  detach() {
    this.control && (r(this, Wt, "f").unobserve(this.control), r(this, Rt, "f").unobserve(this.control), r(this, Ot, "f").unobserve(this.control)), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._shadow?.classList.toggle("hover", false), this._shadow?.classList.toggle("focus", false), this._shadow?.classList.toggle("pressed", false), this._shadow?.classList.toggle("resting", false);
  }
  updated(e) {
    super.updated(e), e.has("disabled") && this.disabled && (this._shadow?.classList.toggle("hover", false), this._shadow?.classList.toggle("focus", false), this._shadow?.classList.toggle("pressed", false), this._shadow?.classList.toggle("resting", true));
  }
  render() {
    return A`<div class="shadow"></div>`;
  }
};
Wt = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakSet();
Hi = function(e) {
  this.disabled || (this._shadow?.classList.toggle("hover", e), this._shadow?.classList.toggle("resting", !e));
};
Ti = function(e) {
  this.disabled || this._shadow?.classList.toggle("focus", e);
};
Pi = function(e) {
  this.disabled || this._shadow?.classList.toggle("pressed", e);
};
Fe.styles = L`:host { display: block; } :host, .shadow { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .shadow.resting, .shadow.focus, .shadow.pressed { will-change: box-shadow; transition: ${a(`box-shadow ${R.settleDuration} ${R.settleEasing};`)}; } .shadow.hover { will-change: box-shadow; transition: ${a(`box-shadow ${R.liftDuration} ${R.liftEasing};`)}; } .shadow { box-shadow: ${R.level}; } .shadow.focus { box-shadow: ${R.focusLevel}; } .shadow.hover { box-shadow: ${R.hoverLevel}; } .shadow.pressed { box-shadow: ${R.pressedLevel}; } :host([level="0"]) .shadow { --m3e-elevation-level: ${c.elevation.level0}; --m3e-elevation-hover-level: ${c.elevation.level1}; } :host([level="1"]) .shadow { --m3e-elevation-level: ${c.elevation.level1}; --m3e-elevation-hover-level: ${c.elevation.level2}; } :host([level="2"]) .shadow { --m3e-elevation-level: ${c.elevation.level2}; --m3e-elevation-hover-level: ${c.elevation.level3}; } :host([level="3"]) .shadow { --m3e-elevation-level: ${c.elevation.level3}; --m3e-elevation-hover-level: ${c.elevation.level4}; } :host([level="4"]) .shadow { --m3e-elevation-level: ${c.elevation.level4}; --m3e-elevation-hover-level: ${c.elevation.level5}; } :host([level="5"]) .shadow { --m3e-elevation-level: ${c.elevation.level5}; --m3e-elevation-hover-level: ${R.level}; } :host([level]) .shadow { --m3e-elevation-focus-level: ${R.level}; --m3e-elevation-pressed-level: ${R.level}; } @media (prefers-reduced-motion) { .shadow.resting, .shadow.pressed, .shadow.focus, .shadow.hover { transition: none; } } @media (forced-colors: active) { .shadow { display: none; } }`;
m([pt(".shadow")], Fe.prototype, "_shadow", void 0);
m([g({ type: Boolean, reflect: true })], Fe.prototype, "disabled", void 0);
m([g({ type: Number, reflect: true })], Fe.prototype, "level", void 0);
Fe = m([W("m3e-elevation")], Fe);
const w = { color: a(`var(--m3e-focus-ring-color, ${c.color.secondary})`), duration: a(`var(--m3e-focus-ring-duration, ${c.motion.duration.long2})`), thickness: a("var(--m3e-focus-ring-thickness, 3px)"), outwardOffset: a("var(--m3e-focus-ring-outward-offset, 2px)"), inwardOffset: a("var(--m3e-focus-ring-inward-offset, 0px)"), visibility: a("var(--m3e-focus-ring-visibility, visible)"), growthFactor: a("var(--m3e-focus-ring-growth-factor, 2)") };
var ws, It, Fi;
let De = class extends ft(ve(E, "none")) {
  constructor() {
    super(...arguments), ws.add(this), It.set(this, new es(this, { target: null, callback: (e, t) => r(this, ws, "m", Fi).call(this, t) })), this.inward = false, this.disabled = false;
  }
  show() {
    this._outline?.classList.toggle("visible", true);
  }
  hide() {
    this._outline?.classList.toggle("visible", false);
  }
  attach(e) {
    super.attach(e), r(this, It, "f").observe(e);
  }
  detach() {
    this.control && r(this, It, "f").unobserve(this.control), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.hide();
  }
  render() {
    return A`<div class="outline"></div>`;
  }
  updated(e) {
    super.updated(e), e.has("disabled") && this.disabled && this.hide();
  }
};
It = /* @__PURE__ */ new WeakMap();
ws = /* @__PURE__ */ new WeakSet();
Fi = function(e) {
  this.disabled || (e ? this.show() : this.hide());
};
De.styles = L`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; outline: none; } .outline { contain: layout style; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; z-index: 1; outline-color: ${w.color}; outline-width: ${w.thickness}; visibility: ${w.visibility}; } .outline.visible { outline-style: solid; } :host(:not([inward])) .outline { outline-offset: ${w.outwardOffset}; } :host([inward]) .outline { outline-offset: calc(${w.inwardOffset} - ${w.thickness}); } :host(:not([inward])) .outline.visible { animation: grow-shrink ${w.duration}; } :host([inward]) .outline.visible { animation: shrink-grow ${w.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${w.thickness} * ${w.growthFactor}); } } @keyframes shrink-grow { 50% { outline-offset: calc( ${w.inwardOffset} - calc(${w.thickness} * ${w.growthFactor}) ); outline-width: calc(${w.thickness} * ${w.growthFactor}); } } @media (prefers-reduced-motion) { :host(:not([inward])) .outline.visible, :host([inward]) .outline.visible { animation: none; } } @media (forced-colors: active) { .outline { outline-color: Highlight; } }`;
m([pt(".outline")], De.prototype, "_outline", void 0);
m([g({ type: Boolean, reflect: true })], De.prototype, "inward", void 0);
m([g({ type: Boolean, reflect: true })], De.prototype, "disabled", void 0);
De = m([W("m3e-focus-ring")], De);
let $s = class extends Sn(Li(ve(E, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return this.indeterminate ? A`<svg viewBox="0 -960 960 960" fill="currentColor"><path Required d="M240-440v-80h480v80H240Z"/></svg>` : this.checked ? A`<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>` : $;
  }
};
$s.styles = L`:host { display: inline-block; vertical-align: middle; width: var(--m3e-checkbox-icon-size, 18px); height: var(--m3e-checkbox-icon-size, 18px); border-radius: var(--m3e-checkbox-container-shape, 2px); box-sizing: border-box; flex: none; contain: layout style paint; line-height: 0; } :host(:not([checked]):not([indeterminate])) { border-width: var(--m3e-checkbox-unselected-outline-thickness, 2px); border-style: solid; } :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { background-color: var(--m3e-checkbox-selected-container-color, ${c.color.primary}); color: var(--m3e-checkbox-selected-icon-color, ${c.color.onPrimary}); } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: var(--m3e-checkbox-unselected-outline-color, ${c.color.onSurfaceVariant}); } :host([disabled]:not([checked]):not([indeterminate])) { border-color: color-mix( in srgb, var(--m3e-checkbox-unselected-disabled-outline-color, ${c.color.onSurface}) var(--m3e-checkbox-unselected-disabled-outline-opacity, 38%), transparent ); } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-container-color, ${c.color.onSurface}) var(--m3e-checkbox-selected-disabled-container-opacity, 38%), transparent ); color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-icon-color, ${c.color.surface}) var(--m3e-checkbox-selected-disabled-icon-opacity, 100%), transparent ); } svg { pointer-events: none; } @media (forced-colors: active) { :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { border-color: Highlight; background-color: Highlight; color: HighlightText; } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: CanvasText; background: Canvas; } :host([disabled]:not([checked]):not([indeterminate])) { border-color: GrayText; background-color: Canvas; } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: GrayText; color: Canvas; } }`;
$s = m([W("m3e-pseudo-checkbox")], $s);
let ks = class extends Ai(Li(ve(E, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return A`<svg class="icon" viewBox="0 0 20 20"><mask id="cutout2"><rect width="100%" height="100%" fill="white"></rect><circle cx="10" cy="10" r="8" fill="black"></circle></mask><circle class="outer circle" cx="10" cy="10" r="10" mask="url(#cutout2)"></circle><circle class="inner circle" cx="10" cy="10" r="5"></circle></svg>`;
  }
};
ks.styles = L`:host { display: inline-block; vertical-align: middle; box-sizing: border-box; width: var(--m3e-radio-icon-size, 20px); height: var(--m3e-radio-icon-size, 20px); flex: none; contain: layout style paint; line-height: 0; } .circle { fill: currentColor; } :host(:not([checked])) .circle.inner { opacity: 0; } :host(:not([checked])) { color: var(--m3e-radio-unselected-icon-color, ${c.color.onSurfaceVariant}); } :host([checked]) { color: var(--m3e-radio-selected-icon-color, ${c.color.primary}); } :host([disabled]) { color: color-mix(in srgb, var(--m3e-radio-disabled-icon-color, ${c.color.onSurface}) 38%, transparent); } @media (forced-colors: active) { :host { border-radius: 50%; } :host(:not([checked])) { color: CanvasText; background-color: Canvas; } :host([checked]) { color: HighlightText; background-color: Highlight; } :host([disabled]) { color: GrayText; background-color: Canvas; } }`;
ks = m([W("m3e-pseudo-radio")], ks);
const xt = { color: a(`var(--m3e-ripple-color, ${c.color.onSurface})`), opacity: a(`var(--m3e-ripple-opacity, ${c.state.pressedStateLayerOpacity})`), enterDuration: a(`var(--m3e-ripple-enter-duration, ${c.motion.duration.long1})`), exitDuration: a(`var(--m3e-ripple-exit-duration, ${c.motion.duration.medium3})`) };
var Ce, q, Ut, Cs, Di, Wi;
let fe = class extends ft(ve(E, "none")) {
  constructor() {
    super(...arguments), Ce.add(this), q.set(this, /* @__PURE__ */ new Set()), Ut.set(this, new ts(this, { target: null, minPressedDuration: 0, isPressedKey: (e) => e === " ", callback: (e, { x: t, y: s }) => r(this, Ce, "m", Wi).call(this, e, t, s) })), this.disabled = false, this.centered = false, this.unbounded = false, this.radius = null;
  }
  get visible() {
    return r(this, q, "f").size > 0;
  }
  show(e, t, s = false) {
    const i = this.getBoundingClientRect();
    this.centered && (e = i.left + i.width / 2, t = i.top + i.height / 2);
    let o = this.radius;
    if (!o || isNaN(o)) {
      const f = Math.max(Math.abs(e - i.left), Math.abs(e - i.right)), y = Math.max(Math.abs(t - i.top), Math.abs(t - i.bottom));
      o = Math.sqrt(f * f + y * y);
    }
    const l = e - i.left, d = t - i.top, h = document.createElement("div");
    if (h.classList.add("ripple"), s && h.classList.add("persistent"), h.style.left = `${l - o}px`, h.style.top = `${d - o}px`, h.style.width = `${o * 2}px`, h.style.height = `${o * 2}px`, h.addEventListener("animationend", () => r(this, Ce, "m", Di).call(this, h, s), { once: true }), h.addEventListener("transitionend", (f) => {
      f.propertyName === "opacity" && r(this, Ce, "m", Cs).call(this, h);
    }, { once: true }), !this.shadowRoot) {
      r(this, q, "f").delete(h);
      return;
    }
    r(this, q, "f").add(h), this.shadowRoot.appendChild(h);
  }
  hide() {
    for (const e of r(this, q, "f")) e.classList.add("exit");
  }
  attach(e) {
    super.attach(e), r(this, Ut, "f").observe(e);
  }
  detach() {
    this.control && r(this, Ut, "f").unobserve(this.control), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), r(this, Ce, "m", Cs).call(this);
  }
  updated(e) {
    super.updated(e), e.has("disabled") && this.disabled && this.hide();
  }
};
q = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
Ce = /* @__PURE__ */ new WeakSet();
Cs = function(e) {
  if (e) e.remove(), r(this, q, "f").delete(e);
  else {
    for (const t of r(this, q, "f")) t.remove();
    r(this, q, "f").clear();
  }
};
Di = function(e, t) {
  t ? e.classList.add("pressed") : e.classList.add("exit");
};
Wi = function(e, t, s) {
  this.disabled || (e ? this.show(t, s, true) : this.hide());
};
fe.styles = L`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } :host(:not([unbounded])) { overflow: hidden; } :host(:not([unbounded])) .ripple { contain: layout style paint; } :host([unbounded]) .ripple { contain: layout style; } .ripple { display: block; position: absolute; inset: 0; pointer-events: none; transform: scale(0); opacity: ${xt.opacity}; border-radius: 50%; filter: blur(20px); background-color: ${xt.color}; transition: ${a(`background-color ${c.motion.duration.short1} ${c.motion.easing.standard}`)}; will-change: transform, background-color, opacity; animation: ripple ${xt.enterDuration} linear; } .ripple.persistent.pressed { transform: scale(4); } .ripple.exit { transition: ${a(`opacity ${xt.exitDuration} cubic-bezier(0, 0, 0.2, 0.1),
        background-color ${c.motion.duration.short1} ${c.motion.easing.standard}`)}; opacity: 0; } @keyframes ripple { to { transform: scale(4); } } @media (prefers-reduced-motion) { .ripple { transform: scale(4); animation-duration: 90ms; } .ripple:not(.exit), .ripple.exit { transition-duration: 10ms; } } @media (forced-colors: active) { .ripple { display: none; } }`;
m([g({ type: Boolean, reflect: true })], fe.prototype, "disabled", void 0);
m([g({ type: Boolean, reflect: true })], fe.prototype, "centered", void 0);
m([g({ type: Boolean, reflect: true })], fe.prototype, "unbounded", void 0);
m([g({ type: Number })], fe.prototype, "radius", void 0);
fe = m([W("m3e-ripple")], fe);
var Ge;
let We = class extends ss(E) {
  constructor() {
    super(...arguments), Ge.set(this, () => this._updateScroll()), this.dividers = "above-below", this.thin = false;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("scroll", r(this, Ge, "f"));
  }
  update(e) {
    super.update(e), e.has("dividers") && (this.removeEventListener("scroll", r(this, Ge, "f")), this.dividers !== "none" && this.addEventListener("scroll", r(this, Ge, "f"), { passive: true }));
  }
  render() {
    return A`<slot @slotchange="${this._updateScroll}"></slot>`;
  }
  _updateScroll() {
    const e = (this.dividers === "above" || this.dividers === "above-below") && this.scrollTop > 0, t = (this.dividers === "below" || this.dividers === "above-below") && this.scrollHeight - this.scrollTop - this.clientHeight > 1;
    Xt(this, "--above", e), Xt(this, "--below", t);
  }
};
Ge = /* @__PURE__ */ new WeakMap();
We.styles = L`:host { display: block; overflow-y: auto; position: relative; box-sizing: border-box; scrollbar-color: ${c.scrollbar.color}; border-top: var(--m3e-divider-thickness, 1px) solid transparent; border-bottom: var(--m3e-divider-thickness, 1px) solid transparent; outline-color: ${w.color}; outline-width: ${w.thickness}; outline-offset: ${w.outwardOffset}; } :host([thin]) { scrollbar-width: ${c.scrollbar.thinWidth}; } :host(:not([thin])) { scrollbar-width: ${c.scrollbar.width}; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: var(--m3e-divider-color, ${c.color.outlineVariant}); } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: var(--m3e-divider-color, ${c.color.outlineVariant}); } :host(:focus-visible) { outline-style: solid; animation: grow-shrink ${w.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${w.thickness} * ${w.growthFactor}); } } @media (forced-colors: active) { :host { border-top: var(--m3e-divider-thickness, 1px) solid Canvas; border-bottom: var(--m3e-divider-thickness, 1px) solid Canvas; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: GrayText; } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: GrayText; } } @media (prefers-reduced-motion) { :host(:focus-visible) { animation: none; } }`;
m([g()], We.prototype, "dividers", void 0);
m([g({ type: Boolean, reflect: true })], We.prototype, "thin", void 0);
m([Ei(40)], We.prototype, "_updateScroll", null);
We = m([W("m3e-scroll-container")], We);
var Ee, Bt, Es, Ri, Oi;
let X = class extends Zn(Yn(ft(ve(ss(E), "none")))) {
  constructor() {
    super(...arguments), Ee.add(this), Bt.set(this, new ts(this, { target: null, isPressedKey: (e) => e === " ", callback: (e, t) => r(this, Ee, "m", Ri).call(this, e, t) })), this.disabled = false, this.selected = false, this.bounce = false, this.centered = false;
  }
  show(e) {
    this._stateLayer?.show(e);
  }
  hide(e) {
    this._stateLayer?.hide(e);
  }
  attach(e) {
    super.attach(e), r(this, Bt, "f").observe(e), this._stateLayer?.attach(e);
  }
  detach() {
    this.control && (r(this, Bt, "f").unobserve(this.control), this._stateLayer?.detach()), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  reconnectedCallback() {
    super.reconnectedCallback(), r(this, Ee, "m", Es).call(this);
  }
  firstUpdated(e) {
    super.firstUpdated(e), r(this, Ee, "m", Es).call(this);
  }
  render() {
    return A`<div class="base" @animationend="${r(this, Ee, "m", Oi)}"><div class="indicator"></div><m3e-state-layer class="state-layer" enable-pressed ?disabled="${this.disabled}"></m3e-state-layer></div>`;
  }
};
Bt = /* @__PURE__ */ new WeakMap();
Ee = /* @__PURE__ */ new WeakSet();
Es = function() {
  const e = this._stateLayer;
  e && this.control !== e.control && (this.control ? e.attach(this.control) : e.detach());
};
Ri = function(e, t) {
  if (this.disabled || this.selected || this.centered || wt()) return;
  const s = this._base;
  if (e && s) {
    const i = s.getBoundingClientRect(), o = Math.min(Math.max(t.x - i.left, i.height), i.width - i.height);
    s?.style.setProperty("--_pressed-origin-x", `${o}px`);
  }
};
Oi = function() {
  this._base?.style.removeProperty("--_pressed-origin-x");
};
X.styles = L`:host { display: block; } .state-layer { --m3e-state-layer-hover-color: var( --m3e-selection-indicator-state-layer-hover-color, ${c.color.onSurface} ); --m3e-state-layer-hover-opacity: var( --m3e-selection-indicator-state-layer-hover-opacity, ${c.state.hoverStateLayerOpacity} ); --m3e-state-layer-focus-color: var( --m3e-selection-indicator-state-layer-focus-color, ${c.color.onSurface} ); --m3e-state-layer-focus-opacity: var( --m3e-selection-indicator-state-layer-focus-opacity, ${c.state.focusStateLayerOpacity} ); --m3e-state-layer-pressed-color: var( --m3e-selection-indicator-state-layer-pressed-color, ${c.color.onSurface} ); --m3e-state-layer-pressed-opacity: var( --m3e-selection-indicator-state-layer-pressed-opacity, ${c.state.pressedStateLayerOpacity} ); --m3e-state-layer-duration: var( --m3e-selection-indicator-state-layer-duration, ${c.motion.duration.medium1} ); --m3e-state-layer-easing: var( --m3e-selection-indicator-state-layer-easing, ${c.motion.easing.standard} ); } :host, .base, .indicator { position: absolute; inset: 0; pointer-events: none; border-radius: inherit; } .indicator { opacity: 0; will-change: opacity; } :host(:not([disabled])) .indicator { background-color: var(--m3e-selection-indicator-color, ${c.color.secondaryContainer}); } :host(:not(:is(:state(--no-animate), :--no-animate))) .indicator { transition: ${a(`opacity var(--m3e-selection-indicator-state-layer-duration, ${c.motion.duration.medium1}) var(--m3e-selection-indicator-state-layer-easing, ${c.motion.easing.standard})`)}; } .base { contain: layout style paint; } :host(:not([centered])) .base { transform-origin: var(--_pressed-origin-x, center) center; } :host([centered]) .base { transform-origin: center center; } :host([selected]:not([bounce]):not(:is(:state(--no-animate), :--no-animate))) .base { animation: ${a(`grow ${c.motion.duration.medium2} ${c.motion.easing.standardDecelerate}`)}; } :host([selected][bounce]:not(:is(:state(--no-animate), :--no-animate))) .base { animation: ${a(`grow-bounce ${c.motion.duration.medium2} ${c.motion.easing.standardDecelerate}`)}; } :host([selected]) .indicator { opacity: 1; transition: none; } :host(:not(:is(:state(--no-animate), :--no-animate))) .indicator { transition: ${a(`opacity ${c.motion.duration.short4} ${c.motion.easing.standard}`)}; } @keyframes grow { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } } @keyframes grow-bounce { 0% { transform: scaleX(0); } 60% { transform: scaleX(1.05); } 100% { transform: scaleX(1); } } @media (prefers-reduced-motion) { :host(:not(:is(:state(--no-animate), :--no-animate))) .indicator { transition: none; } :host([selected]:not([bounce]):not(:is(:state(--no-animate), :--no-animate))) .base, :host([selected][bounce]:not(:is(:state(--no-animate), :--no-animate))) .base { animation: none; } }`;
m([pt(".base")], X.prototype, "_base", void 0);
m([pt(".state-layer")], X.prototype, "_stateLayer", void 0);
m([g({ type: Boolean, reflect: true })], X.prototype, "disabled", void 0);
m([g({ type: Boolean, reflect: true })], X.prototype, "selected", void 0);
m([g({ type: Boolean, reflect: true })], X.prototype, "bounce", void 0);
m([g({ type: Boolean, reflect: true })], X.prototype, "centered", void 0);
X = m([W("m3e-selection-indicator")], X);
var nt, pe, Ii, Is;
let Gt = class extends ss(E) {
  constructor() {
    super(...arguments), nt.add(this), pe.set(this, new Array()), this.selectedIndex = null;
  }
  connectedCallback() {
    super.connectedCallback(), j(this, "--no-animate");
  }
  update(e) {
    super.update(e), e.has("selectedIndex") && (this.selectedIndex === null && j(this, "--no-animate"), r(this, nt, "m", Is).call(this), this.selectedIndex !== null && mt(this, "--no-animate") && requestAnimationFrame(() => {
      this.selectedIndex !== null && F(this, "--no-animate");
    }));
  }
  render() {
    return A`<slot @slotchange="${r(this, nt, "m", Ii)}"></slot>`;
  }
};
pe = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakSet();
Ii = function(e) {
  const t = [...e.target.assignedElements({ flatten: true })];
  for (const s of r(this, pe, "f").filter((i) => !t.includes(i))) s.classList.remove("-before"), s.classList.remove("-after"), s.removeAttribute("inert");
  _(this, pe, t, "f"), r(this, nt, "m", Is).call(this);
};
Is = function() {
  const e = this.selectedIndex ?? r(this, pe, "f").length;
  for (let t = 0; t < r(this, pe, "f").length; t++) {
    const s = r(this, pe, "f")[t];
    s.classList.toggle("-before", t < e), s.classList.toggle("-after", t > e), s.toggleAttribute("inert", t !== e);
  }
};
Gt.styles = L`:host { display: flex; position: relative; overflow: hidden; } ::slotted(*) { width: 100%; top: 0; transition: ${a(`inset-inline-start var(--m3e-slide-animation-duration, ${c.motion.duration.long2}) ${c.motion.easing.standard},
        visibility var(--m3e-slide-animation-duration, ${c.motion.duration.long2}) ${c.motion.easing.standard} allow-discrete`)}; } ::slotted(.-before), ::slotted(.-after) { visibility: hidden; position: absolute; } ::slotted(.-before) { inset-inline-start: -100%; } ::slotted(.-after) { inset-inline-start: 100%; } ::slotted(:not(.-before):not(.-after)) { position: relative; inset-inline-start: 0; } :host(:is(:state(--no-animate), :--no-animate)) ::slotted(*) { transition: none; } @media (prefers-reduced-motion) { ::slotted(*) { transition: none; } }`;
m([g({ attribute: "selected-index", type: Number, reflect: true })], Gt.prototype, "selectedIndex", void 0);
Gt = m([W("m3e-slide")], Gt);
const Z = { hoverColor: a(`var(--m3e-state-layer-hover-color, ${c.color.onSurface})`), hoverOpacity: a(`var(--m3e-state-layer-hover-opacity, ${c.state.hoverStateLayerOpacity})`), focusColor: a(`var(--m3e-state-layer-focus-color, ${c.color.onSurface})`), focusOpacity: a(`var(--m3e-state-layer-focus-opacity, ${c.state.focusStateLayerOpacity})`), pressedColor: a(`var(--m3e-state-layer-pressed-color, ${c.color.onSurface})`), pressedOpacity: a(`var(--m3e-state-layer-pressed-opacity, ${c.state.pressedStateLayerOpacity})`), duration: a(`var(--m3e-state-layer-duration, ${c.motion.duration.medium1})`), easing: a(`var(--m3e-state-layer-easing, ${c.motion.easing.standard})`) };
var N, lt, Nt, ct, Ui, Bi, Ni, Ss, Ms;
let ye = class extends ft(ve(E, "none")) {
  constructor() {
    super(...arguments), N.add(this), lt.set(this, new xi(this, { target: null, callback: (e) => r(this, N, "m", Ui).call(this, e) })), Nt.set(this, new es(this, { target: null, callback: (e, t) => r(this, N, "m", Bi).call(this, t) })), ct.set(this, new ts(this, { target: null, capture: true, minPressedDuration: 225, isPressedKey: (e) => e === " ", callback: (e) => r(this, N, "m", Ni).call(this, e) })), this.disabled = false, this.disableHover = false, this.enablePressed = false;
  }
  show(e) {
    this._layer?.classList.toggle(e, true);
  }
  hide(e) {
    this._layer?.classList.toggle(e, false);
  }
  attach(e) {
    super.attach(e), r(this, Nt, "f").observe(e), r(this, N, "m", Ss).call(this), r(this, N, "m", Ms).call(this);
  }
  detach() {
    this.control && (r(this, lt, "f").unobserve(this.control), r(this, Nt, "f").unobserve(this.control), r(this, ct, "f").unobserve(this.control)), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.hide("hover"), this.hide("focused");
  }
  updated(e) {
    super.updated(e), e.has("disabled") && this.disabled && (this.hide("hover"), this.hide("focused")), e.has("disableHover") && this.disableHover && (r(this, N, "m", Ss).call(this), this.hide("hover")), e.has("enablePressed") && !this.enablePressed && (r(this, N, "m", Ms).call(this), this.hide("pressed"));
  }
  render() {
    return A`<div class="layer"></div>`;
  }
};
lt = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
ct = /* @__PURE__ */ new WeakMap();
N = /* @__PURE__ */ new WeakSet();
Ui = function(e) {
  !this.disabled && !this.disableHover && (e ? this.show("hover") : this.hide("hover"));
};
Bi = function(e) {
  this.disabled || (e ? this.show("focused") : this.hide("focused"));
};
Ni = function(e) {
  !this.disabled && this.enablePressed && (e ? this.show("pressed") : this.hide("pressed"));
};
Ss = function() {
  this.control && (this.disableHover ? r(this, lt, "f").unobserve(this.control) : r(this, lt, "f").observe(this.control));
};
Ms = function() {
  this.control && (this.enablePressed ? r(this, ct, "f").observe(this.control) : r(this, ct, "f").unobserve(this.control));
};
ye.styles = L`:host { display: block; } :host, .layer { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .layer { contain: layout style paint; will-change: background-color; transition: ${a(`background-color ${Z.duration} ${Z.easing}`)}; } .layer.focused { background-color: color-mix(in srgb, ${Z.focusColor} ${Z.focusOpacity}, transparent); } .layer.hover { background-color: color-mix(in srgb, ${Z.hoverColor} ${Z.hoverOpacity}, transparent); } .layer.pressed { background-color: color-mix( in srgb, ${Z.pressedColor} ${Z.pressedOpacity}, transparent ); } @media (prefers-reduced-motion) { .layer { transition: none; } } @media (forced-colors: active) { .layer { display: none; } }`;
m([pt(".layer")], ye.prototype, "_layer", void 0);
m([g({ type: Boolean, reflect: true })], ye.prototype, "disabled", void 0);
m([g({ attribute: "disable-hover", type: Boolean, reflect: true })], ye.prototype, "disableHover", void 0);
m([g({ attribute: "enable-pressed", type: Boolean, reflect: true })], ye.prototype, "enablePressed", void 0);
ye = m([W("m3e-state-layer")], ye);
var K, dt, O, re, As, Vi, Ls, zs;
let J = zs = class extends E {
  constructor() {
    super(), K.add(this), dt.set(this, `m3e-text-highlight-${zs.__nextId++}`), O.set(this, new Array()), re.set(this, null), this.disabled = false, this.term = "", this.caseSensitive = false, this.mode = "contains", this.isSupported && (_(this, re, new CSSStyleSheet(), "f"), r(this, re, "f").replaceSync(L`::highlight(${a(r(this, dt, "f"))}) { background-color: var(--m3e-text-highlight-container-color, Highlight); color: var(--m3e-text-highlight-color, HighlightText); text-decoration: var(--m3e-text-highlight-decoration); text-shadow: var(--m3e-text-highlight-shadow); }`.toString()));
  }
  get isSupported() {
    return !!CSS.highlights;
  }
  get ranges() {
    return r(this, O, "f");
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.shadowRoot && r(this, re, "f") && !this.shadowRoot.adoptedStyleSheets.includes(r(this, re, "f")) && this.shadowRoot.adoptedStyleSheets.push(r(this, re, "f"));
  }
  updated(e) {
    super.updated(e), (e.has("term") || e.has("caseSensitive") || e.has("disabled")) && r(this, K, "m", Ls).call(this);
  }
  render() {
    return A`<slot @slotchange="${r(this, K, "m", Ls)}"></slot>`;
  }
};
dt = /* @__PURE__ */ new WeakMap();
O = /* @__PURE__ */ new WeakMap();
re = /* @__PURE__ */ new WeakMap();
K = /* @__PURE__ */ new WeakSet();
As = function(e) {
  return !/^\s*$/.test(e.data);
};
Vi = function n(e, t) {
  e instanceof HTMLSlotElement ? e.assignedNodes({ flatten: true }).forEach((s) => {
    switch (s.nodeType) {
      case Node.TEXT_NODE:
        r(this, K, "m", As).call(this, s) && t.push(s);
        break;
      case Node.ELEMENT_NODE:
        r(this, K, "m", n).call(this, s, t);
        break;
    }
  }) : e.childNodes.forEach((s) => {
    switch (s.nodeType) {
      case Node.TEXT_NODE:
        r(this, K, "m", As).call(this, s) && t.push(s);
        break;
      case Node.ELEMENT_NODE:
        r(this, K, "m", n).call(this, s, t);
        break;
    }
  });
};
Ls = function() {
  if (!this.isSupported || !this.isConnected || (CSS.highlights.delete(r(this, dt, "f")), r(this, O, "f").length = 0, this.disabled)) return;
  if (!this.term) {
    this.dispatchEvent(new CustomEvent("highlight", { detail: [...r(this, O, "f")], bubbles: false, composed: false }));
    return;
  }
  const e = new Array();
  if (r(this, K, "m", Vi).call(this, this, e), e.length > 0) {
    const t = this.caseSensitive ? this.term : this.term.toLowerCase();
    switch (this.mode) {
      case "starts-with":
        {
          const s = e[0];
          if (((this.caseSensitive ? s.textContent : s.textContent?.toLowerCase()) ?? "").startsWith(t)) {
            const o = new Range();
            o.setStart(s, 0), o.setEnd(s, t.length), r(this, O, "f").push(o);
          }
        }
        break;
      case "ends-with":
        {
          const s = e[e.length - 1], i = (this.caseSensitive ? s.textContent : s.textContent?.toLowerCase()) ?? "";
          if (i.endsWith(t)) {
            const o = i.length - t.length, l = o + t.length, d = new Range();
            d.setStart(s, o), d.setEnd(s, l), r(this, O, "f").push(d);
          }
        }
        break;
      case "contains":
        _(this, O, e.map((s) => ({ el: s, text: (this.caseSensitive ? s.textContent : s.textContent?.toLowerCase()) ?? "" })).map(({ el: s, text: i }) => {
          const o = new Array();
          let l = 0;
          for (; l < i.length; ) {
            const d = i.indexOf(t, l);
            if (d === -1) break;
            o.push(d), l = d + t.length;
          }
          return o.map((d) => {
            const h = new Range();
            return h.setStart(s, d), h.setEnd(s, d + t.length), h;
          });
        }).flat(), "f");
        break;
    }
    r(this, O, "f").length > 0 && CSS.highlights.set(r(this, dt, "f"), new Highlight(...r(this, O, "f")));
  }
  this.dispatchEvent(new CustomEvent("highlight", { detail: [...r(this, O, "f")], bubbles: false, composed: false }));
};
J.styles = L`:host { display: contents; }`;
J.__nextId = 0;
m([g({ type: Boolean, reflect: true })], J.prototype, "disabled", void 0);
m([g()], J.prototype, "term", void 0);
m([g({ attribute: "case-sensitive", type: Boolean })], J.prototype, "caseSensitive", void 0);
m([g()], J.prototype, "mode", void 0);
J = zs = m([W("m3e-text-highlight")], J);
let Hs = class extends E {
  render() {
    return A`<span class="base"><slot></slot></span>`;
  }
};
Hs.styles = L`:host { flex: 1 1 auto; display: inline-flex; align-items: center; flex-wrap: nowrap; min-width: 0; } .base { flex: 1 1 auto; display: inline; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`;
Hs = m([W("m3e-text-overflow")], Hs);
export {
  ss as A,
  Sn as B,
  la as C,
  c as D,
  oa as E,
  da as F,
  oi as G,
  xi as H,
  ea as I,
  Yn as J,
  ha as K,
  pa as L,
  Ai as M,
  ts as P,
  ve as R,
  na as T,
  r as _,
  ca as a,
  aa as b,
  Li as c,
  E as d,
  sa as e,
  es as f,
  $ as g,
  mt as h,
  L as i,
  Xn as j,
  A as k,
  F as l,
  ta as m,
  j as n,
  m as o,
  wt as p,
  pt as q,
  a as r,
  Xt as s,
  g as t,
  Ei as u,
  W as v,
  ra as w,
  ma as x,
  ia as y,
  ua as z
};
