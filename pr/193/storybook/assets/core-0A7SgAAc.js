function f(i2, e, t, s) {
  var n = arguments.length, o = n < 3 ? e : s === null ? s = Object.getOwnPropertyDescriptor(e, t) : s, l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(i2, e, t, s);
  else for (var d = i2.length - 1; d >= 0; d--) (l = i2[d]) && (o = (n < 3 ? l(o) : n > 3 ? l(e, t, o) : l(e, t)) || o);
  return n > 3 && o && Object.defineProperty(e, t, o), o;
}
function a(i2, e, t, s) {
  if (t === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? i2 !== e || !s : !e.has(i2)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? s : t === "a" ? s.call(i2) : s ? s.value : e.get(i2);
}
function b(i2, e, t, s, n) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? i2 !== e || !n : !e.has(i2)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return s === "a" ? n.call(i2, t) : n ? n.value = t : e.set(i2, t), t;
}
const ht = globalThis, bs = ht.ShadowRoot && (ht.ShadyCSS === void 0 || ht.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, xs = /* @__PURE__ */ Symbol(), As = /* @__PURE__ */ new WeakMap();
let Qs = class {
  constructor(e, t, s) {
    if (this._$cssResult$ = true, s !== xs) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (bs && e === void 0) {
      const s = t !== void 0 && t.length === 1;
      s && (e = As.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && As.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const r = (i2) => new Qs(typeof i2 == "string" ? i2 : i2 + "", void 0, xs), F = (i2, ...e) => {
  const t = i2.length === 1 ? i2[0] : e.reduce((s, n, o) => s + ((l) => {
    if (l._$cssResult$ === true) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i2[o + 1], i2[0]);
  return new Qs(t, i2, xs);
}, Li = (i2, e) => {
  if (bs) i2.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const s = document.createElement("style"), n = ht.litNonce;
    n !== void 0 && s.setAttribute("nonce", n), s.textContent = t.cssText, i2.appendChild(s);
  }
}, Ls = bs ? (i2) => i2 : (i2) => i2 instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const s of e.cssRules) t += s.cssText;
  return r(t);
})(i2) : i2;
const { is: zi, defineProperty: Hi, getOwnPropertyDescriptor: Ti, getOwnPropertyNames: Fi, getOwnPropertySymbols: Pi, getPrototypeOf: Di } = Object, It = globalThis, zs = It.trustedTypes, Wi = zs ? zs.emptyScript : "", Ri = It.reactiveElementPolyfillSupport, je = (i2, e) => i2, Pt = { toAttribute(i2, e) {
  switch (e) {
    case Boolean:
      i2 = i2 ? Wi : null;
      break;
    case Object:
    case Array:
      i2 = i2 == null ? i2 : JSON.stringify(i2);
  }
  return i2;
}, fromAttribute(i2, e) {
  let t = i2;
  switch (e) {
    case Boolean:
      t = i2 !== null;
      break;
    case Number:
      t = i2 === null ? null : Number(i2);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(i2);
      } catch {
        t = null;
      }
  }
  return t;
} }, _s = (i2, e) => !zi(i2, e), Hs = { attribute: true, type: String, converter: Pt, reflect: false, useDefault: false, hasChanged: _s };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), It.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let ve = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Hs) {
    if (t.state && (t.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = true), this.elementProperties.set(e, t), !t.noAccessor) {
      const s = /* @__PURE__ */ Symbol(), n = this.getPropertyDescriptor(e, s, t);
      n !== void 0 && Hi(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, s) {
    const { get: n, set: o } = Ti(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get: n, set(l) {
      const d = n?.call(this);
      o?.call(this, l), this.requestUpdate(e, d, s);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Hs;
  }
  static _$Ei() {
    if (this.hasOwnProperty(je("elementProperties"))) return;
    const e = Di(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(je("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(je("properties"))) {
      const t = this.properties, s = [...Fi(t), ...Pi(t)];
      for (const n of s) this.createProperty(n, t[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [s, n] of t) this.elementProperties.set(s, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, s] of this.elementProperties) {
      const n = this._$Eu(t, s);
      n !== void 0 && this._$Eh.set(n, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const s = new Set(e.flat(1 / 0).reverse());
      for (const n of s) t.unshift(Ls(n));
    } else e !== void 0 && t.push(Ls(e));
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
    return Li(e, this.constructor.elementStyles), e;
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
    const s = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, s);
    if (n !== void 0 && s.reflect === true) {
      const o = (s.converter?.toAttribute !== void 0 ? s.converter : Pt).toAttribute(t, s.type);
      this._$Em = e, o == null ? this.removeAttribute(n) : this.setAttribute(n, o), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const s = this.constructor, n = s._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const o = s.getPropertyOptions(n), l = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : Pt;
      this._$Em = n;
      const d = l.fromAttribute(t, o.type);
      this[n] = d ?? this._$Ej?.get(n) ?? d, this._$Em = null;
    }
  }
  requestUpdate(e, t, s, n = false, o) {
    if (e !== void 0) {
      const l = this.constructor;
      if (n === false && (o = this[e]), s ??= l.getPropertyOptions(e), !((s.hasChanged ?? _s)(o, t) || s.useDefault && s.reflect && o === this._$Ej?.get(e) && !this.hasAttribute(l._$Eu(e, s)))) return;
      this.C(e, t, s);
    }
    this.isUpdatePending === false && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: s, reflect: n, wrapped: o }, l) {
    s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, l ?? t ?? this[e]), o !== true || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (t = void 0), this._$AL.set(e, t)), n === true && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
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
        for (const [n, o] of this._$Ep) this[n] = o;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [n, o] of s) {
        const { wrapped: l } = o, d = this[n];
        l !== true || this._$AL.has(n) || d === void 0 || this.C(n, void 0, o, d);
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
ve.elementStyles = [], ve.shadowRootOptions = { mode: "open" }, ve[je("elementProperties")] = /* @__PURE__ */ new Map(), ve[je("finalized")] = /* @__PURE__ */ new Map(), Ri?.({ ReactiveElement: ve }), (It.reactiveElementVersions ??= []).push("2.1.2");
const ws = globalThis, Ts = (i2) => i2, Dt = ws.trustedTypes, Fs = Dt ? Dt.createPolicy("lit-html", { createHTML: (i2) => i2 }) : void 0, Js = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, ei = "?" + j, Oi = `<${ei}>`, ce = document, Je = () => ce.createComment(""), et = (i2) => i2 === null || typeof i2 != "object" && typeof i2 != "function", $s = Array.isArray, Ui = (i2) => $s(i2) || typeof i2?.[Symbol.iterator] == "function", qt = `[ 	
\f\r]`, Fe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ps = /-->/g, Ds = />/g, G = RegExp(`>|${qt}(?:([^\\s"'>=/]+)(${qt}*=${qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ws = /'/g, Rs = /"/g, ti = /^(?:script|style|textarea|title)$/i, Ii = (i2) => (e, ...t) => ({ _$litType$: i2, strings: e, values: t }), T = Ii(1), $e = /* @__PURE__ */ Symbol.for("lit-noChange"), w = /* @__PURE__ */ Symbol.for("lit-nothing"), Os = /* @__PURE__ */ new WeakMap(), re = ce.createTreeWalker(ce, 129);
function si(i2, e) {
  if (!$s(i2) || !i2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Fs !== void 0 ? Fs.createHTML(e) : e;
}
const Bi = (i2, e) => {
  const t = i2.length - 1, s = [];
  let n, o = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Fe;
  for (let d = 0; d < t; d++) {
    const u = i2[d];
    let m, v, h = -1, g = 0;
    for (; g < u.length && (l.lastIndex = g, v = l.exec(u), v !== null); ) g = l.lastIndex, l === Fe ? v[1] === "!--" ? l = Ps : v[1] !== void 0 ? l = Ds : v[2] !== void 0 ? (ti.test(v[2]) && (n = RegExp("</" + v[2], "g")), l = G) : v[3] !== void 0 && (l = G) : l === G ? v[0] === ">" ? (l = n ?? Fe, h = -1) : v[1] === void 0 ? h = -2 : (h = l.lastIndex - v[2].length, m = v[1], l = v[3] === void 0 ? G : v[3] === '"' ? Rs : Ws) : l === Rs || l === Ws ? l = G : l === Ps || l === Ds ? l = Fe : (l = G, n = void 0);
    const y = l === G && i2[d + 1].startsWith("/>") ? " " : "";
    o += l === Fe ? u + Oi : h >= 0 ? (s.push(m), u.slice(0, h) + Js + u.slice(h) + j + y) : u + j + (h === -2 ? d : y);
  }
  return [si(i2, o + (i2[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
};
class tt {
  constructor({ strings: e, _$litType$: t }, s) {
    let n;
    this.parts = [];
    let o = 0, l = 0;
    const d = e.length - 1, u = this.parts, [m, v] = Bi(e, t);
    if (this.el = tt.createElement(m, s), re.currentNode = this.el.content, t === 2 || t === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (n = re.nextNode()) !== null && u.length < d; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const h of n.getAttributeNames()) if (h.endsWith(Js)) {
          const g = v[l++], y = n.getAttribute(h).split(j), k = /([.?@])?(.*)/.exec(g);
          u.push({ type: 1, index: o, name: k[2], strings: y, ctor: k[1] === "." ? Vi : k[1] === "?" ? Ki : k[1] === "@" ? ji : Bt }), n.removeAttribute(h);
        } else h.startsWith(j) && (u.push({ type: 6, index: o }), n.removeAttribute(h));
        if (ti.test(n.tagName)) {
          const h = n.textContent.split(j), g = h.length - 1;
          if (g > 0) {
            n.textContent = Dt ? Dt.emptyScript : "";
            for (let y = 0; y < g; y++) n.append(h[y], Je()), re.nextNode(), u.push({ type: 2, index: ++o });
            n.append(h[g], Je());
          }
        }
      } else if (n.nodeType === 8) if (n.data === ei) u.push({ type: 2, index: o });
      else {
        let h = -1;
        for (; (h = n.data.indexOf(j, h + 1)) !== -1; ) u.push({ type: 7, index: o }), h += j.length - 1;
      }
      o++;
    }
  }
  static createElement(e, t) {
    const s = ce.createElement("template");
    return s.innerHTML = e, s;
  }
}
function ke(i2, e, t = i2, s) {
  if (e === $e) return e;
  let n = s !== void 0 ? t._$Co?.[s] : t._$Cl;
  const o = et(e) ? void 0 : e._$litDirective$;
  return n?.constructor !== o && (n?._$AO?.(false), o === void 0 ? n = void 0 : (n = new o(i2), n._$AT(i2, t, s)), s !== void 0 ? (t._$Co ??= [])[s] = n : t._$Cl = n), n !== void 0 && (e = ke(i2, n._$AS(i2, e.values), n, s)), e;
}
class Ni {
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
    const { el: { content: t }, parts: s } = this._$AD, n = (e?.creationScope ?? ce).importNode(t, true);
    re.currentNode = n;
    let o = re.nextNode(), l = 0, d = 0, u = s[0];
    for (; u !== void 0; ) {
      if (l === u.index) {
        let m;
        u.type === 2 ? m = new it(o, o.nextSibling, this, e) : u.type === 1 ? m = new u.ctor(o, u.name, u.strings, this, e) : u.type === 6 && (m = new qi(o, this, e)), this._$AV.push(m), u = s[++d];
      }
      l !== u?.index && (o = re.nextNode(), l++);
    }
    return re.currentNode = ce, n;
  }
  p(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
}
class it {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, s, n) {
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = n, this._$Cv = n?.isConnected ?? true;
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
    e = ke(this, e, t), et(e) ? e === w || e == null || e === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : e !== this._$AH && e !== $e && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Ui(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== w && et(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ce.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: s } = e, n = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = tt.createElement(si(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === n) this._$AH.p(t);
    else {
      const o = new Ni(n, this), l = o.u(this.options);
      o.p(t), this.T(l), this._$AH = o;
    }
  }
  _$AC(e) {
    let t = Os.get(e.strings);
    return t === void 0 && Os.set(e.strings, t = new tt(e)), t;
  }
  k(e) {
    $s(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, n = 0;
    for (const o of e) n === t.length ? t.push(s = new it(this.O(Je()), this.O(Je()), this, this.options)) : s = t[n], s._$AI(o), n++;
    n < t.length && (this._$AR(s && s._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(false, true, t); e !== this._$AB; ) {
      const s = Ts(e).nextSibling;
      Ts(e).remove(), e = s;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}
class Bt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, s, n, o) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = w;
  }
  _$AI(e, t = this, s, n) {
    const o = this.strings;
    let l = false;
    if (o === void 0) e = ke(this, e, t, 0), l = !et(e) || e !== this._$AH && e !== $e, l && (this._$AH = e);
    else {
      const d = e;
      let u, m;
      for (e = o[0], u = 0; u < o.length - 1; u++) m = ke(this, d[s + u], t, u), m === $e && (m = this._$AH[u]), l ||= !et(m) || m !== this._$AH[u], m === w ? e = w : e !== w && (e += (m ?? "") + o[u + 1]), this._$AH[u] = m;
    }
    l && !n && this.j(e);
  }
  j(e) {
    e === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Vi extends Bt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === w ? void 0 : e;
  }
}
class Ki extends Bt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== w);
  }
}
class ji extends Bt {
  constructor(e, t, s, n, o) {
    super(e, t, s, n, o), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ke(this, e, t, 0) ?? w) === $e) return;
    const s = this._$AH, n = e === w && s !== w || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, o = e !== w && (s === w || n);
    n && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class qi {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ke(this, e);
  }
}
const Xi = ws.litHtmlPolyfillSupport;
Xi?.(tt, it), (ws.litHtmlVersions ??= []).push("3.3.3");
const Yi = (i2, e, t) => {
  const s = t?.renderBefore ?? e;
  let n = s._$litPart$;
  if (n === void 0) {
    const o = t?.renderBefore ?? null;
    s._$litPart$ = n = new it(e.insertBefore(Je(), o), o, void 0, t ?? {});
  }
  return n._$AI(i2), n;
};
const ks = globalThis;
class S extends ve {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Yi(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return $e;
  }
}
S._$litElement$ = true, S.finalized = true, ks.litElementHydrateSupport?.({ LitElement: S });
const Zi = ks.litElementPolyfillSupport;
Zi?.({ LitElement: S });
(ks.litElementVersions ??= []).push("4.2.2");
const Gi = { attribute: true, type: String, converter: Pt, reflect: false, hasChanged: _s }, Qi = (i2 = Gi, e, t) => {
  const { kind: s, metadata: n } = t;
  let o = globalThis.litPropertyMetadata.get(n);
  if (o === void 0 && globalThis.litPropertyMetadata.set(n, o = /* @__PURE__ */ new Map()), s === "setter" && ((i2 = Object.create(i2)).wrapped = true), o.set(t.name, i2), s === "accessor") {
    const { name: l } = t;
    return { set(d) {
      const u = e.get.call(this);
      e.set.call(this, d), this.requestUpdate(l, u, i2, true, d);
    }, init(d) {
      return d !== void 0 && this.C(l, void 0, i2, d), d;
    } };
  }
  if (s === "setter") {
    const { name: l } = t;
    return function(d) {
      const u = this[l];
      e.call(this, d), this.requestUpdate(l, u, i2, true, d);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function x(i2) {
  return (e, t) => typeof t == "object" ? Qi(i2, e, t) : ((s, n, o) => {
    const l = n.hasOwnProperty(o);
    return n.constructor.createProperty(o, s), l ? Object.getOwnPropertyDescriptor(n, o) : void 0;
  })(i2, e, t);
}
const Ji = (i2, e, t) => (t.configurable = true, t.enumerable = true, Reflect.decorate && typeof e != "object" && Object.defineProperty(i2, e, t), t);
function Cs(i2, e) {
  return (t, s, n) => {
    const o = (l) => l.renderRoot?.querySelector(i2) ?? null;
    return Ji(t, s, { get() {
      return o(this);
    } });
  };
}
const Xt = (i2) => i2 ?? w;
var We, Re, I;
class nt {
  constructor(e, t) {
    We.set(this, void 0), Re.set(this, void 0), I.set(this, /* @__PURE__ */ new Set()), b(this, We, e, "f"), b(this, Re, t.target, "f"), a(this, We, "f").addController(this);
  }
  get targets() {
    return a(this, I, "f").values();
  }
  get hasTargets() {
    return a(this, I, "f").size > 0;
  }
  hostConnected() {
    a(this, Re, "f") !== null && this.observe(a(this, Re, "f") ?? a(this, We, "f"));
  }
  hostDisconnected() {
    this.unobserveAll();
  }
  observe(e) {
    a(this, I, "f").has(e) || (a(this, I, "f").add(e), this._observe(e));
  }
  isObserving(e) {
    return a(this, I, "f").has(e);
  }
  unobserve(e) {
    a(this, I, "f").delete(e) && this._unobserve(e);
  }
  unobserveAll() {
    a(this, I, "f").forEach((e) => this.unobserve(e)), a(this, I, "f").clear();
  }
}
We = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap();
function en() {
  return matchMedia("(forced-colors: active)").matches;
}
function Us(i2, e, t) {
  return i2 + (e - i2) * t;
}
function Is(i2, e, t, s) {
  const n = Math.pow(1 - s, 2) * i2.x + 2 * (1 - s) * s * e.x + Math.pow(s, 2) * t.x, o = Math.pow(1 - s, 2) * i2.y + 2 * (1 - s) * s * e.y + Math.pow(s, 2) * t.y;
  return { x: n, y: o };
}
function Bs(i2, e, t, s, n) {
  const o = Math.pow(1 - n, 3) * i2.x + 3 * Math.pow(1 - n, 2) * n * e.x + 3 * (1 - n) * Math.pow(n, 2) * t.x + Math.pow(n, 3) * s.x, l = Math.pow(1 - n, 3) * i2.y + 3 * Math.pow(1 - n, 2) * n * e.y + 3 * (1 - n) * Math.pow(n, 2) * t.y + Math.pow(n, 3) * s.y;
  return { x: o, y: l };
}
function tn(i2) {
  return (i2.match(/[a-zA-Z][^a-zA-Z]*/g) || []).map((t) => {
    const s = t[0], n = t.slice(1).trim().split(/[\s,]+/).filter(Boolean).map(Number);
    return { type: s, nums: n };
  });
}
function sn(i2, e) {
  const t = tn(i2);
  let s = { x: 0, y: 0 }, n = { x: 0, y: 0 };
  const o = [];
  for (const h of t) if (h.type === "M") s = { x: h.nums[0], y: h.nums[1] }, n = s;
  else if (h.type === "L") {
    const g = { x: h.nums[0], y: h.nums[1] }, y = g.x - s.x, k = g.y - s.y;
    o.push({ type: "L", pts: [s, g], length: Math.hypot(y, k) }), s = g;
  } else if (h.type === "H") {
    const g = { x: h.nums[0], y: s.y }, y = g.x - s.x;
    o.push({ type: "L", pts: [s, g], length: Math.abs(y) }), s = g;
  } else if (h.type === "V") {
    const g = { x: s.x, y: h.nums[0] }, y = g.y - s.y;
    o.push({ type: "L", pts: [s, g], length: Math.abs(y) }), s = g;
  } else if (h.type === "Q") {
    const g = { x: h.nums[0], y: h.nums[1] }, y = { x: h.nums[2], y: h.nums[3] };
    let k = 0, L = s;
    const z = 20;
    for (let U = 1; U <= z; U++) {
      const Z = U / z, Te = Is(s, g, y, Z);
      k += Math.hypot(Te.x - L.x, Te.y - L.y), L = Te;
    }
    o.push({ type: "Q", pts: [s, g, y], length: k }), s = y;
  } else if (h.type === "C") {
    const g = { x: h.nums[0], y: h.nums[1] }, y = { x: h.nums[2], y: h.nums[3] }, k = { x: h.nums[4], y: h.nums[5] };
    let L = 0, z = s;
    const U = 20;
    for (let Z = 1; Z <= U; Z++) {
      const Te = Z / U, jt = Bs(s, g, y, k, Te);
      L += Math.hypot(jt.x - z.x, jt.y - z.y), z = jt;
    }
    o.push({ type: "C", pts: [s, g, y, k], length: L }), s = k;
  } else if (h.type === "Z") {
    const g = n.x - s.x, y = n.y - s.y;
    o.push({ type: "L", pts: [s, n], length: Math.hypot(g, y) }), s = n;
  }
  const d = o.reduce((h, g) => h + g.length, 0) / (e - 1), u = [];
  let m = 0, v = 0;
  for (let h = 0; h < e; h++) {
    const g = h * d;
    for (; v < o.length && m + o[v].length < g; ) m += o[v].length, v++;
    const y = o[v];
    if (!y) break;
    const k = (g - m) / y.length;
    if (y.type === "L") {
      const [L, z] = y.pts;
      u.push({ x: Us(L.x, z.x, k), y: Us(L.y, z.y, k) });
    } else if (y.type === "Q") {
      const [L, z, U] = y.pts;
      u.push(Is(L, z, U, k));
    } else if (y.type === "C") {
      const [L, z, U, Z] = y.pts;
      u.push(Bs(L, z, U, Z, k));
    }
  }
  return u;
}
function nn(i2) {
  return `${i2.map((t) => {
    const s = Ns(t.x * 100, 0, 100), n = Ns(t.y * 100, 0, 100);
    return `${s.toFixed(2)}% ${n.toFixed(2)}%`;
  }).join(", ")}`;
}
function Ns(i2, e, t) {
  return Math.max(e, Math.min(t, i2));
}
function rn(i2) {
  let e = 1 / 0, t = 1 / 0, s = -1 / 0, n = -1 / 0;
  for (const o of i2) o.x < e && (e = o.x), o.x > s && (s = o.x), o.y < t && (t = o.y), o.y > n && (n = o.y);
  return { minX: e, minY: t, maxX: s, maxY: n, width: s - e, height: n - t };
}
function an(i2, e) {
  const t = i2.length, s = new Array(t);
  for (let n = 0; n < t; n++) s[n] = i2[(n + e) % t];
  return s;
}
function on(i2, e) {
  const t = Math.min(e.length, i2.length);
  let s = 0, n = 1 / 0;
  for (let o = 0; o < t; o++) {
    let l = 0;
    for (let d = 0; d < t; d++) {
      const u = e[(d + o) % t], m = i2[d], v = u.x - m.x, h = u.y - m.y;
      if (l += v * v + h * h, l >= n) break;
    }
    l < n && (n = l, s = o);
  }
  return s;
}
function Vs(i2) {
  let e = 0;
  const t = i2.length;
  for (let s = 0; s < t; s++) {
    const n = i2[s], o = i2[(s + 1) % t];
    e += n.x * o.y - o.x * n.y;
  }
  return e / 2;
}
function ln(i2) {
  const e = i2.map((n) => {
    const o = rn(n), l = n.map((y) => ({ x: y.x - o.minX, y: y.y - o.minY })), d = Math.max(o.width, o.height) || 1, u = l.map((y) => ({ x: y.x / d, y: y.y / d })), m = o.width / d, v = o.height / d, h = (1 - m) / 2, g = (1 - v) / 2;
    return u.map((y) => ({ x: y.x + h, y: y.y + g }));
  }), t = e[0], s = Math.sign(Vs(t));
  for (let n = 1; n < e.length; n++) {
    let o = e[n];
    const l = Math.sign(Vs(o));
    l !== 0 && l !== s && (o = o.slice().reverse());
    const d = on(t, o);
    e[n] = an(o, d);
  }
  return e;
}
function Dn(i2, e) {
  return ln(i2.map((t) => sn(t, e))).map((t) => nn(t));
}
function Wn(i2) {
  return i2.assignedNodes({ flatten: true }).length > 0;
}
function Yt() {
  return matchMedia("(prefers-reduced-motion)").matches;
}
function dn(i2, e = document) {
  return new Promise((t) => {
    const s = e.querySelector(`#${i2}`);
    if (s) {
      t(s);
      return;
    }
    if (document.readyState === "complete" || document.readyState === "interactive") {
      t(e.querySelector(`#${i2}`));
      return;
    }
    document.addEventListener("DOMContentLoaded", () => t(e.querySelector(`#${i2}`)), { once: true });
  });
}
var xe, ae, we, qe, _e, pt, ut, mt, ft, ye, Wt, ii, ls, ni;
class Nt extends nt {
  constructor(e, t) {
    super(e, t), xe.add(this), we.set(this, false), qe.set(this, void 0), _e.set(this, void 0), pt.set(this, (s) => a(this, xe, "m", ii).call(this, s)), ut.set(this, (s) => a(this, xe, "m", ls).call(this, s)), mt.set(this, (s) => a(this, xe, "m", ni).call(this, s)), ft.set(this, () => b(this, we, true, "f")), ye.set(this, () => b(this, we, false, "f")), b(this, qe, t.callback, "f"), b(this, _e, t.filter, "f");
  }
  _observe(e) {
    e.addEventListener("keydown", a(this, pt, "f")), e.addEventListener("focusin", a(this, ut, "f")), e.addEventListener("focusout", a(this, mt, "f")), e.addEventListener("touchstart", a(this, ft, "f"), { passive: true }), e.addEventListener("touchend", a(this, ye, "f")), e.addEventListener("touchcancel", a(this, ye, "f"));
  }
  _unobserve(e) {
    e.removeEventListener("keydown", a(this, pt, "f")), e.removeEventListener("focusin", a(this, ut, "f")), e.removeEventListener("focusout", a(this, mt, "f")), e.removeEventListener("touchstart", a(this, ft, "f")), e.removeEventListener("touchend", a(this, ye, "f")), e.removeEventListener("touchcancel", a(this, ye, "f"));
  }
}
ae = Nt, we = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ new WeakMap(), ye = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakSet(), ii = function(e) {
  if (a(this, _e, "f")?.call(this, e)) return;
  e.currentTarget.matches(":focus-within") && a(this, xe, "m", ls).call(this, e);
}, ls = function(e) {
  if (a(this, _e, "f")?.call(this, e) || a(this, we, "f")) return;
  const t = e.currentTarget;
  a(this, qe, "f").call(this, true, t.matches(":focus-visible") || a(ae, ae, "f", Wt) || en(), t);
}, ni = function(e) {
  a(this, _e, "f")?.call(this, e) || a(this, we, "f") || a(this, qe, "f").call(this, false, false, e.currentTarget);
};
typeof window < "u" && (window.addEventListener("keydown", () => b(ae, ae, true, "f", Wt), { capture: true, passive: true }), window.addEventListener("pointerdown", () => b(ae, ae, false, "f", Wt), { capture: true }));
Wt = { value: false };
var D, ne, Q, J, vt, ge, ds, at, ot, ri, ai;
class oi extends nt {
  constructor(e, t) {
    super(e, t), D.add(this), ne.set(this, void 0), Q.set(this, /* @__PURE__ */ new Map()), J.set(this, /* @__PURE__ */ new Map()), vt.set(this, (s) => a(this, D, "m", ri).call(this, s)), ge.set(this, (s) => a(this, D, "m", ai).call(this, s)), b(this, ne, t.callback, "f"), this.startDelay = t.startDelay ?? 0, this.endDelay = t.endDelay ?? 0;
  }
  clearDelays() {
    for (const e of this.targets) a(this, D, "m", ds).call(this, e);
  }
  _observe(e) {
    e.addEventListener("pointerenter", a(this, vt, "f")), e.addEventListener("pointerleave", a(this, ge, "f")), e.addEventListener("touchend", a(this, ge, "f"));
  }
  _unobserve(e) {
    e.removeEventListener("pointerenter", a(this, vt, "f")), e.removeEventListener("pointerleave", a(this, ge, "f")), e.removeEventListener("touchend", a(this, ge, "f")), a(this, D, "m", ds).call(this, e);
  }
}
ne = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), ge = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakSet(), ds = function(e) {
  a(this, D, "m", at).call(this, e), a(this, D, "m", ot).call(this, e);
}, at = function(e) {
  return a(this, Q, "f").has(e) ? (clearTimeout(a(this, Q, "f").get(e)), a(this, Q, "f").delete(e)) : false;
}, ot = function(e) {
  return a(this, J, "f").has(e) ? (clearTimeout(a(this, J, "f").get(e)), a(this, J, "f").delete(e)) : false;
}, ri = function(e) {
  const t = e.target;
  a(this, D, "m", ot).call(this, t), this.startDelay > 0 ? (a(this, D, "m", at).call(this, t), a(this, Q, "f").set(t, setTimeout(() => {
    a(this, Q, "f").delete(t), a(this, ne, "f").call(this, true, t);
  }, this.startDelay))) : a(this, ne, "f").call(this, true, t);
}, ai = function(e) {
  const t = e.target;
  a(this, D, "m", at).call(this, t) || (this.endDelay > 0 ? (a(this, D, "m", ot).call(this, t), a(this, J, "f").set(t, setTimeout(() => {
    a(this, J, "f").delete(t), a(this, ne, "f").call(this, false, t);
  }, this.endDelay))) : a(this, ne, "f").call(this, false, t));
};
var N, M, B, Xe, oe, A, Ye, yt, gt, be, bt, xt, li, di, ci, hi, pi, Zt;
class ui extends nt {
  constructor(e, t) {
    super(e, t), N.add(this), M.set(this, void 0), B.set(this, void 0), Xe.set(this, void 0), oe.set(this, void 0), A.set(this, /* @__PURE__ */ new Map()), Ye.set(this, void 0), yt.set(this, (s) => a(this, N, "m", li).call(this, s)), gt.set(this, (s) => a(this, N, "m", di).call(this, s)), be.set(this, (s) => a(this, N, "m", ci).call(this, s)), bt.set(this, (s) => a(this, N, "m", hi).call(this, s)), xt.set(this, (s) => a(this, N, "m", pi).call(this, s)), b(this, M, t.capture, "f"), b(this, B, t.callback, "f"), b(this, Xe, t.filter, "f"), b(this, oe, t.isPressedKey, "f"), b(this, Ye, t.minPressedDuration ?? 0, "f");
  }
  hostConnected() {
    document.addEventListener("pointerup", a(this, gt, "f"), { capture: a(this, M, "f") }), document.addEventListener("touchend", a(this, be, "f"), { capture: a(this, M, "f") }), document.addEventListener("touchcancel", a(this, be, "f"), { capture: a(this, M, "f") }), super.hostConnected();
  }
  hostDisconnected() {
    document.removeEventListener("pointerup", a(this, gt, "f"), { capture: a(this, M, "f") }), document.removeEventListener("touchend", a(this, be, "f"), { capture: a(this, M, "f") }), document.removeEventListener("touchcancel", a(this, be, "f"), { capture: a(this, M, "f") }), super.hostDisconnected(), a(this, A, "f").clear();
  }
  _observe(e) {
    e.addEventListener("pointerdown", a(this, yt, "f"), { capture: a(this, M, "f") }), a(this, oe, "f") && (e.addEventListener("keydown", a(this, bt, "f"), { capture: a(this, M, "f") }), e.addEventListener("keyup", a(this, xt, "f"), { capture: a(this, M, "f") }));
  }
  _unobserve(e) {
    e.removeEventListener("pointerdown", a(this, yt, "f"), { capture: a(this, M, "f") }), a(this, oe, "f") && (e.removeEventListener("keydown", a(this, bt, "f"), { capture: a(this, M, "f") }), e.removeEventListener("keyup", a(this, xt, "f"), { capture: a(this, M, "f") }));
  }
}
M = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), be = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakSet(), li = function(e) {
  if (!a(this, Xe, "f")?.call(this, e) && !(e.pointerType === "mouse" && e.button > 1)) {
    for (const t of e.composedPath()) if (t instanceof HTMLElement && this.isObserving(t)) {
      a(this, A, "f").has(t) || (a(this, A, "f").set(t, performance.now()), a(this, B, "f").call(this, true, { x: e.x, y: e.y }, t));
      break;
    }
  }
}, di = function(e) {
  e.pointerType === "mouse" && e.button > 1 || a(this, N, "m", Zt).call(this, e.x, e.y);
}, ci = function(e) {
  a(this, N, "m", Zt).call(this, e.changedTouches[0]?.clientX ?? 0, e.changedTouches[0]?.clientY ?? 0);
}, hi = function(e) {
  if (a(this, Xe, "f")?.call(this, e) || e.target !== e.currentTarget) return;
  const t = e.currentTarget;
  if (a(this, oe, "f")?.call(this, e.key) && (e.key === " " && e.preventDefault(), !a(this, A, "f").has(t))) {
    a(this, A, "f").set(t, performance.now());
    const s = t.getBoundingClientRect();
    a(this, B, "f").call(this, true, { x: s.x + s.width / 2, y: s.y + s.height / 2 }, t);
  }
}, pi = function(e) {
  const t = e.target;
  if (a(this, A, "f").has(t) && a(this, oe, "f")?.call(this, e.key)) {
    const s = a(this, Ye, "f") - (performance.now() - a(this, A, "f").get(t)), n = t.getBoundingClientRect();
    s > 0 ? setTimeout(() => {
      a(this, A, "f").delete(t), a(this, B, "f").call(this, false, { x: n.x + n.width / 2, y: n.y + n.height / 2 }, t);
    }, s) : (a(this, A, "f").delete(t), a(this, B, "f").call(this, false, { x: n.x + n.width / 2, y: n.y + n.height / 2 }, t));
  }
}, Zt = function(e, t) {
  for (const s of a(this, A, "f")) {
    const n = a(this, Ye, "f") - (performance.now() - s[1]);
    n > 0 ? setTimeout(() => {
      a(this, A, "f").delete(s[0]), a(this, B, "f").call(this, false, { x: e, y: t }, s[0]);
    }, n) : (a(this, A, "f").delete(s[0]), a(this, B, "f").call(this, false, { x: e, y: t }, s[0]));
  }
};
var Oe, _t, wt, ee, Ue;
class Rn extends nt {
  constructor(e, t) {
    if (super(e, t), Oe.set(this, void 0), _t.set(this, void 0), wt.set(this, void 0), ee.set(this, void 0), Ue.set(this, true), b(this, Oe, t.callback, "f"), b(this, _t, t.skipInitial ?? false, "f"), b(this, wt, t.config, "f"), !window.ResizeObserver) {
      console.warn("ResizeController error: the browser does not support ResizeObserver.");
      return;
    }
    b(this, ee, new ResizeObserver((s, n) => a(this, Oe, "f").call(this, s, n)), "f");
  }
  async hostUpdated() {
    a(this, ee, "f") && !a(this, _t, "f") && a(this, Ue, "f") && a(this, Oe, "f").call(this, [], a(this, ee, "f")), b(this, Ue, false, "f");
  }
  _observe(e) {
    a(this, ee, "f")?.observe(e, a(this, wt, "f")), b(this, Ue, true, "f");
  }
  _unobserve(e) {
    a(this, ee, "f")?.unobserve(e);
  }
}
Oe = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap();
const O = (i2) => (e, t) => {
  const s = () => {
    typeof window < "u" && !customElements.get(i2) && customElements.define(i2, e);
  };
  t ? t.addInitializer(s) : s();
};
function mi(i2) {
  const e = /* @__PURE__ */ Symbol("_id");
  return (t, s, n) => {
    const o = n.value;
    return n.value = function(...l) {
      const d = this;
      clearTimeout(d[e]), d[e] = setTimeout(() => o.apply(this, l), i2);
    }, n;
  };
}
var le, Rt, Ze, $t, te, Ks, Gt, fi, vi;
class cn extends nt {
  constructor(e, t) {
    super(e, t), le.add(this), Rt.set(this, void 0), Ze.set(this, void 0), $t.set(this, (s) => a(this, le, "m", vi).call(this, s)), te.set(this, /* @__PURE__ */ new Map()), b(this, Rt, t.debounce === true, "f"), b(this, Ze, t.callback, "f");
  }
  getScrollContainers(e) {
    return a(this, te, "f").get(e);
  }
  _observe(e) {
    const t = a(this, le, "m", fi).call(this, e);
    if (t.length > 0) {
      a(this, te, "f").set(e, t);
      for (const s of t) (s === document.documentElement ? document : s).addEventListener("scroll", a(this, $t, "f"), { passive: true });
    }
  }
  _unobserve(e) {
    if (a(this, te, "f").has(e)) {
      for (const t of a(this, te, "f").get(e)) (t === document.documentElement ? document : t).removeEventListener("scroll", a(this, $t, "f"));
      a(this, te, "f").delete(e);
    }
  }
  _debounceCallback(e) {
    a(this, Ze, "f").call(this, e);
  }
}
Rt = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakSet(), Ks = function(e) {
  const t = e.shadowRoot;
  if (!t) return null;
  const s = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT);
  let n = s.currentNode;
  for (; n; ) {
    if (n instanceof Element && a(this, le, "m", Gt).call(this, n)) return n;
    n = s.nextNode();
  }
  return null;
}, Gt = function(e) {
  const t = getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowY + t.overflowX);
}, fi = function(e) {
  const t = new Array(), s = a(this, le, "m", Ks).call(this, e);
  s && t.push(s);
  let n = e;
  for (; n; ) a(this, le, "m", Gt).call(this, n) && t.push(n), n = n.parentElement;
  return t;
}, vi = function(e) {
  const t = e.target === document ? document.documentElement : e.target;
  a(this, Rt, "f") ? this._debounceCallback(t) : a(this, Ze, "f").call(this, t);
};
f([mi(40)], cn.prototype, "_debounceCallback", null);
function Y(i2, ...e) {
  return typeof i2 == "object" && i2 !== null && e.every((t) => t in i2);
}
const $ = /* @__PURE__ */ Symbol("internals");
function hn(i2) {
  return Y(i2, $);
}
const js = /* @__PURE__ */ Symbol("_internals"), he = /* @__PURE__ */ Symbol("_customState");
function Es(i2, e) {
  var t;
  class s extends i2 {
    constructor() {
      super(...arguments), this[t] = /* @__PURE__ */ new Set();
    }
    get [(t = he, $)]() {
      return this[js] ?? (this[js] = this.attachInternals());
    }
  }
  return s.formAssociated = e, s;
}
function rt(i2, e) {
  return he in i2 ? i2[he].has(e) : i2[$].states.has(e);
}
function q(i2, e) {
  rt(i2, e) || (he in i2 && i2[he].add(e), i2[$]?.states.add(e), i2[$]?.states.has(e));
}
function P(i2, e) {
  return he in i2 && i2[he].delete(e), i2[$]?.states.delete(e) ? (i2[$]?.states.has(e), true) : false;
}
function Ot(i2, e, t) {
  t ? q(i2, e) : P(i2, e);
}
function cs(i2) {
  return Y(i2, "checked");
}
function yi(i2) {
  class e extends i2 {
    constructor() {
      super(...arguments), this.checked = false;
    }
    update(s) {
      super.update(s), s.has("checked") && (this.role === "button" ? (this.ariaPressed = `${this.checked}`, this.ariaChecked = null) : this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = `${this.checked}`, this.ariaPressed = null));
    }
  }
  return f([x({ type: Boolean, reflect: true })], e.prototype, "checked", void 0), e;
}
function qs(i2) {
  return Y(i2, "indeterminate") && cs(i2);
}
function pn(i2) {
  class e extends yi(i2) {
    constructor() {
      super(...arguments), this.indeterminate = false;
    }
    update(s) {
      super.update(s), s.has("indeterminate") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = !this.checked && this.indeterminate ? "mixed" : `${this.checked}`);
    }
  }
  return f([x({ type: Boolean, reflect: true })], e.prototype, "indeterminate", void 0), e;
}
function un(i2) {
  return Y(i2, "dirty", "pristine", "markAsDirty", "markAsPristine");
}
const Qt = /* @__PURE__ */ Symbol("_eventHandler");
function On(i2) {
  var e;
  class t extends i2 {
    constructor() {
      super(...arguments), this[e] = () => this.markAsDirty();
    }
    get dirty() {
      return rt(this, "--dirty");
    }
    get pristine() {
      return !this.dirty;
    }
    connectedCallback() {
      this.markAsPristine(), super.connectedCallback(), this.addEventListener("change", this[Qt]);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("change", this[Qt]);
    }
    markAsPristine() {
      P(this, "--dirty");
    }
    markAsDirty() {
      q(this, "--dirty");
    }
  }
  return e = Qt, t;
}
function Ss(i2) {
  return Y(i2, "touched", "untouched", "markAsTouched", "markAsUntouched");
}
const Jt = /* @__PURE__ */ Symbol("_eventHandler");
function Un(i2) {
  var e;
  class t extends i2 {
    constructor() {
      super(...arguments), this[e] = () => this.markAsTouched();
    }
    get touched() {
      return rt(this, "--touched");
    }
    get untouched() {
      return !this.touched;
    }
    connectedCallback() {
      this.markAsUntouched(), super.connectedCallback(), this.addEventListener("focusout", this[Jt], { capture: true });
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("focusout", this[Jt], { capture: true });
    }
    markAsTouched() {
      q(this, "--touched");
    }
    markAsUntouched() {
      P(this, "--touched");
    }
  }
  return e = Jt, t;
}
const Vt = { primary: r("var(--md-sys-color-primary, #6750A4)"), onPrimary: r("var(--md-sys-color-on-primary, #FFFFFF)"), primaryContainer: r("var(--md-sys-color-primary-container, #EADDFF)"), onPrimaryContainer: r("var(--md-sys-color-on-primary-container, #4F378B)"), primaryFixed: r("var(--md-sys-color-primary-fixed, #EADDFF)"), primaryFixedDim: r("var(--md-sys-color-primary-fixed-dim, #D0BCFF)"), onPrimaryFixed: r("var(--md-sys-color-on-primary-fixed, #21005D)"), onPrimaryFixedVariant: r("var(--md-sys-color-on-primary-fixed-variant, #4F378B)"), secondary: r("var(--md-sys-color-secondary, #625B71)"), onSecondary: r("var(--md-sys-color-on-secondary, #FFFFFF)"), secondaryContainer: r("var(--md-sys-color-secondary-container, #E8DEF8)"), onSecondaryContainer: r("var(--md-sys-color-on-secondary-container, #4A4458)"), secondaryFixed: r("var(--md-sys-color-secondary-fixed, #E8DEF8)"), secondaryFixedDim: r("var(--md-sys-color-secondary-fixed-dim, #CCC2DC)"), onSecondaryFixed: r("var(--md-sys-color-on-secondary-fixed, #1D192B)"), onSecondaryFixedVariant: r("var(--md-sys-color-on-secondary-fixed-variant, #4A4458)"), tertiary: r("var(--md-sys-color-tertiary, #7D5260)"), onTertiary: r("var(--md-sys-color-on-tertiary, #FFFFFF)"), tertiaryContainer: r("var(--md-sys-color-tertiary-container, #FFD8E4)"), onTertiaryContainer: r("var(--md-sys-color-on-tertiary-container, #633B48)"), tertiaryFixed: r("var(--md-sys-color-tertiary-fixed, #FFD8E4)"), tertiaryFixedDim: r("var(--md-sys-color-tertiary-fixed-dim, #EFB8C8)"), onTertiaryFixed: r("var(--md-sys-color-on-tertiary-fixed, #31111D)"), onTertiaryFixedVariant: r("var(--md-sys-color-on-tertiary-fixed-variant, #633B48)"), error: r("var(--md-sys-color-error, #B3261E)"), onError: r("var(--md-sys-color-on-error, #FFFFFF)"), errorContainer: r("var(--md-sys-color-error-container, #F9DEDC)"), onErrorContainer: r("var(--md-sys-color-on-error-container, #8C1D18)"), surface: r("var(--md-sys-color-surface, #FEF7FF)"), onSurface: r("var(--md-sys-color-on-surface, #1D1B20)"), onSurfaceVariant: r("var(--md-sys-color-on-surface-variant, #49454F)"), surfaceContainerLowest: r("var(--md-sys-color-surface-container-lowest, #FFFFFF)"), surfaceContainerLow: r("var(--md-sys-color-surface-container-low, #F7F2FA)"), surfaceContainer: r("var(--md-sys-color-surface-container, #F3EDF7)"), surfaceContainerHigh: r("var(--md-sys-color-surface-container-high, #ECE6F0)"), surfaceContainerHighest: r("var(--md-sys-color-surface-container-highest, #E6E0E9)"), surfaceDim: r("var(--md-sys-color-surface-dim, #DED8E1)"), surfaceBright: r("var(--md-sys-color-surface-bright, #FEF7FF)"), surfaceVariant: r("var(--md-sys-color-surface-variant, #E7E0EC)"), inverseSurface: r("var(--md-sys-color-inverse-surface, #322F35)"), inverseOnSurface: r("var(--md-sys-color-inverse-on-surface, #F5EFF7)"), inversePrimary: r("var(--md-sys-color-inverse-primary, #D0BCFF)"), outline: r("var(--md-sys-color-outline, #79747E)"), outlineVariant: r("var(--md-sys-color-outline-variant, #CAC4D0)"), shadow: r("var(--md-sys-color-shadow, #000000)"), scrim: r("var(--md-sys-color-scrim, #000000)") }, es = { scale: r("var(--md-sys-density-scale, 0)"), size: r("var(--md-sys-density-size, 0.25rem)") }, mn = { ...es, calc(i2) {
  return r(`calc(max(${i2}, ${es.scale}) * ${es.size})`);
} }, fn = `color-mix(in srgb, var(--m3e-elevation-color, ${Vt.shadow}) 20%, transparent)`, vn = ["0px 0px 0px 0px", "0px 2px 1px -1px", "0px 3px 1px -2px", "0px 3px 3px -2px", "0px 2px 4px -1px", "0px 3px 5px -1px", "0px 3px 5px -1px", "0px 4px 5px -2px", "0px 5px 5px -3px", "0px 5px 6px -3px", "0px 6px 6px -3px", "0px 6px 7px -4px", "0px 7px 8px -4px", "0px 7px 8px -4px", "0px 7px 9px -4px", "0px 8px 9px -5px", "0px 8px 10px -5px", "0px 8px 11px -5px", "0px 9px 11px -5px", "0px 9px 12px -6px", "0px 10px 13px -6px", "0px 10px 13px -6px", "0px 10px 14px -6px", "0px 11px 14px -7px", "0px 11px 15px -7px"], yn = `color-mix(in srgb, var(--m3e-elevation-color, ${Vt.shadow}) 14%, transparent)`, gn = ["0px 0px 0px 0px", "0px 1px 1px 0px", "0px 2px 2px 0px", "0px 3px 4px 0px", "0px 4px 5px 0px", "0px 5px 8px 0px", "0px 6px 10px 0px", "0px 7px 10px 1px", "0px 8px 10px 1px", "0px 9px 12px 1px", "0px 10px 14px 1px", "0px 11px 15px 1px", "0px 12px 17px 2px", "0px 13px 19px 2px", "0px 14px 21px 2px", "0px 15px 22px 2px", "0px 16px 24px 2px", "0px 17px 26px 2px", "0px 18px 28px 2px", "0px 19px 29px 2px", "0px 20px 31px 3px", "0px 21px 33px 3px", "0px 22px 35px 3px", "0px 23px 36px 3px", "0px 24px 38px 3px"], bn = `color-mix(in srgb, var(--m3e-elevation-color, ${Vt.shadow}) 12%, transparent)`, xn = ["0px 0px 0px 0px", "0px 1px 3px 0px", "0px 1px 5px 0px", "0px 1px 8px 0px", "0px 1px 10px 0px", "0px 1px 14px 0px", "0px 1px 18px 0px", "0px 2px 16px 1px", "0px 3px 14px 2px", "0px 3px 16px 2px", "0px 4px 18px 3px", "0px 4px 20px 3px", "0px 5px 22px 4px", "0px 5px 24px 4px", "0px 5px 26px 4px", "0px 6px 28px 5px", "0px 6px 30px 5px", "0px 6px 32px 5px", "0px 7px 34px 6px", "0px 7px 36px 6px", "0px 8px 38px 7px", "0px 8px 40px 7px", "0px 8px 42px 7px", "0px 9px 44px 8px", "0px 9px 46px 8px"];
function ue(i2) {
  return `${fn} ${vn[i2]},${yn} ${gn[i2]},${bn} ${xn[i2]}`;
}
const _n = { level0: r(`var(--md-sys-elevation-level0, ${ue(0)})`), level1: r(`var(--md-sys-elevation-level1, ${ue(1)})`), level2: r(`var(--md-sys-elevation-level2, ${ue(3)})`), level3: r(`var(--md-sys-elevation-level3, ${ue(6)})`), level4: r(`var(--md-sys-elevation-level4, ${ue(8)})`), level5: r(`var(--md-sys-elevation-level5, ${ue(12)})`) };
function C(i2) {
  return r(`var(--md-sys-measurement-space${i2}, ${0.5 * (i2 / 100)}rem)`);
}
C(0), C(25), C(50), C(75), C(100), C(125), C(150), C(175), C(200), C(250), C(300), C(400), C(450), C(500), C(600), C(700), C(800), C(900);
const wn = { emphasized: r("var(--md-sys-motion-easing-emphasized, cubic-bezier(0.2, 0.0, 0, 1.0))"), emphasizedDecelerate: r("var(--md-sys-motion-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))"), emphasizedAccelerate: r("var(--md-sys-motion-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))"), standard: r("var(--md-sys-motion-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))"), standardDecelerate: r("var(--md-sys-motion-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))"), standardAccelerate: r("var(--md-sys-motion-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))") }, $n = { fastSpatial: r("var(--md-sys-motion-spring-fast-spatial, 350ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), defaultSpatial: r("var(--md-sys-motion-spring-default-spatial, 500ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), slowSpatial: r("var(--md-sys-motion-spring-slow-spatial, 750ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), fastEffects: r("var(--md-sys-motion-spring-fast-effects, 150ms cubic-bezier(0.31, 0.94, 0.34, 1.00))"), defaultEffects: r("var(--md-sys-motion-spring-default-effects, 200ms cubic-bezier(0.34, 0.80, 0.34, 1.00))"), slowEffects: r("var(--md-sys-motion-spring-slow-effects, 200ms cubic-bezier(0.34, 0.88, 0.34, 1.00))") }, kn = { short1: r("var(--md-sys-motion-duration-short-1, 50ms)"), short2: r("var(--md-sys-motion-duration-short-2, 100ms)"), short3: r("var(--md-sys-motion-duration-short-3, 150ms)"), short4: r("var(--md-sys-motion-duration-short-4, 200ms)"), medium1: r("var(--md-sys-motion-duration-medium-1, 250ms)"), medium2: r("var(--md-sys-motion-duration-medium-2, 300ms)"), medium3: r("var(--md-sys-motion-duration-medium-3, 350ms)"), medium4: r("var(--md-sys-motion-duration-medium-4, 400ms)"), long1: r("var(--md-sys-motion-duration-long-1, 450ms)"), long2: r("var(--md-sys-motion-duration-long-2, 500ms)"), long3: r("var(--md-sys-motion-duration-long-3, 550ms)"), long4: r("var(--md-sys-motion-duration-long-4, 600ms)"), extraLong1: r("var(--md-sys-motion-duration-extra-long-1, 700ms)"), extraLong2: r("var(--md-sys-motion-duration-extra-long-2, 800ms)"), extraLong3: r("var(--md-sys-motion-duration-extra-long-3, 900ms)"), extraLong4: r("var(--md-sys-motion-duration-extra-long-4, 1000ms)") }, Cn = { easing: wn, duration: kn, spring: $n }, En = { width: r("var(--m3e-scrollbar-width, auto)"), thinWidth: r("var(--m3e-scrollbar-thin-width, thin)"), color: r("var(--m3e-scrollbar-thumb-color, #938f94) var(--m3e-scrollbar-track-color, transparent)") }, p = { none: r("var(--md-sys-shape-corner-value-none, 0)"), extraSmall: r("var(--md-sys-shape-corner-value-extra-small, 0.25rem)"), small: r("var(--md-sys-shape-corner-value-small, 0.5rem)"), medium: r("var(--md-sys-shape-corner-value-medium, 0.75rem)"), large: r("var(--md-sys-shape-corner-value-large, 1rem)"), largeIncreased: r("var(--md-sys-shape-corner-value-large-increased, 1.25rem)"), extraLarge: r("var(--md-sys-shape-corner-value-extra-large, 1.75rem)"), extraLargeIncreased: r("var(--md-sys-shape-corner-value-extra-large-increased, 2rem)"), extraExtraLarge: r("var(--md-sys-shape-corner-value-extra-extra-large, 3rem)") }, Sn = { corner: { full: r("var(--md-sys-shape-corner-full, 624.9375rem)"), extraLargeTop: r(`var(--md-sys-shape-corner-extra-large-top, ${p.extraLarge} ${p.extraLarge} ${p.none} ${p.none})`), extraLarge: r(`var(--md-sys-shape-corner-extra-large, ${p.extraLarge})`), extraLargeEnd: r(`${p.none} ${p.extraLarge} ${p.extraLarge} ${p.none}`), extraLargeStart: r(`${p.extraLarge} ${p.none} ${p.none} ${p.extraLarge}`), largeTop: r(`var(--md-sys-shape-corner-large-top, ${p.large} ${p.large} ${p.none} ${p.none})`), largeEnd: r(`var(--md-sys-shape-corner-large-end, ${p.none} ${p.large} ${p.large} ${p.none})`), largeStart: r(`var(--md-sys-shape-corner-large-start, ${p.large} ${p.none} ${p.none} ${p.large})`), large: r(`var(--md-sys-shape-corner-large, ${p.large})`), medium: r(`var(--md-sys-shape-corner-medium, ${p.medium})`), mediumTop: r(`${p.medium} ${p.medium} ${p.none} ${p.none}`), mediumEnd: r(`${p.none} ${p.medium} ${p.medium} ${p.none}`), mediumStart: r(`${p.medium} ${p.none} ${p.none} ${p.medium}`), small: r(`var(--md-sys-shape-corner-small, ${p.small})`), smallTop: r(`${p.small} ${p.small} ${p.none} ${p.none}`), smallEnd: r(`${p.none} ${p.small} ${p.small} ${p.none}`), smallStart: r(`${p.small} ${p.none} ${p.none} ${p.small}`), extraSmallTop: r(`var(--md-sys-shape-corner-extra-small-top, ${p.extraSmall} ${p.extraSmall} ${p.none} ${p.none})`), extraSmall: r(`var(--md-sys-shape-corner-extra-small, ${p.extraSmall})`), extraSmallEnd: r(`${p.none} ${p.extraSmall} ${p.extraSmall} ${p.none}`), extraSmallStart: r(`${p.extraSmall} ${p.none} ${p.none} ${p.extraSmall}`), extraSmallBottom: r(`${p.none} ${p.none} ${p.extraSmall} ${p.extraSmall}`), none: r(`var(--md-sys-shape-corner-none, ${p.none})`), largeIncreased: r(`var(--md-sys-shape-corner-large-increased, ${p.largeIncreased})`), extraLargeIncreased: r(`var(--md-sys-shape-corner-extra-large-increased, ${p.extraLargeIncreased})`), extraExtraLarge: r(`var(--md-sys-shape-corner-extra-extra-large, ${p.extraExtraLarge})`) } }, Mn = { focusStateLayerOpacity: r("var(--md-sys-state-focus-state-layer-opacity, 10%)"), hoverStateLayerOpacity: r("var(--md-sys-state-hover-state-layer-opacity, 8%)"), pressedStateLayerOpacity: r("var(--md-sys-state-pressed-state-layer-opacity, 10%)") }, An = { standard: { display: { large: { fontSize: r("var(--md-sys-typescale-display-large-font-size, 3.5625rem)"), fontWeight: r("var(--md-sys-typescale-display-large-font-weight, 400)"), lineHeight: r("var(--md-sys-typescale-display-large-line-height, 4rem)"), tracking: r("var(--md-sys-typescale-display-large-tracking, 0.015625rem)") }, medium: { fontSize: r("var(--md-sys-typescale-display-medium-font-size, 2.8125rem)"), fontWeight: r("var(--md-sys-typescale-display-medium-font-weight, 400)"), lineHeight: r("var(--md-sys-typescale-display-medium-line-height, 3.25rem)"), tracking: r("var(--md-sys-typescale-display-medium-tracking, 0)") }, small: { fontSize: r("var(--md-sys-typescale-display-small-font-size, 2.25rem)"), fontWeight: r("var(--md-sys-typescale-display-small-font-weight, 400)"), lineHeight: r("var(--md-sys-typescale-display-small-line-height, 2.75rem)"), tracking: r("var(--md-sys-typescale-display-small-tracking, 0)") } }, headline: { large: { fontSize: r("var(--md-sys-typescale-headline-large-font-size, 2rem)"), fontWeight: r("var(--md-sys-typescale-headline-large-font-weight, 400)"), lineHeight: r("var(--md-sys-typescale-headline-large-line-height, 2.5rem)"), tracking: r("var(--md-sys-typescale-headline-large-tracking, 0)") }, medium: { fontSize: r("var(--md-sys-typescale-headline-medium-font-size, 1.75rem)"), fontWeight: r("var(--md-sys-typescale-headline-medium-font-weight, 400)"), lineHeight: r("var(--md-sys-typescale-headline-medium-line-height, 2.25rem)"), tracking: r("var(--md-sys-typescale-headline-medium-tracking, 0)") }, small: { fontSize: r("var(--md-sys-typescale-headline-small-font-size, 1.5rem)"), fontWeight: r("var(--md-sys-typescale-headline-small-font-weight, 400)"), lineHeight: r("var(--md-sys-typescale-headline-small-line-height, 2rem)"), tracking: r("var(--md-sys-typescale-headline-small-tracking, 0)") } }, title: { large: { fontSize: r("var(--md-sys-typescale-title-large-font-size, 1.375rem)"), fontWeight: r("var(--md-sys-typescale-title-large-font-weight, 400)"), lineHeight: r("var(--md-sys-typescale-title-large-line-height, 1.75rem)"), tracking: r("var(--md-sys-typescale-title-large-tracking, 0)") }, medium: { fontSize: r("var(--md-sys-typescale-title-medium-font-size, 1rem)"), fontWeight: r("var(--md-sys-typescale-title-medium-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-title-medium-line-height, 1.5rem)"), tracking: r("var(--md-sys-typescale-title-medium-tracking, 0.009375rem)") }, small: { fontSize: r("var(--md-sys-typescale-title-small-font-size, 0.875rem)"), fontWeight: r("var(--md-sys-typescale-title-small-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-title-small-line-height, 1.25rem)"), tracking: r("var(--md-sys-typescale-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: r("var(--md-sys-typescale-body-large-font-size, 1rem)"), fontWeight: r("var(--md-sys-typescale-body-large-font-weight, 400)"), lineHeight: r("var(--md-sys-typescale-body-large-line-height, 1.5rem)"), tracking: r("var(--md-sys-typescale-body-large-tracking, 0.03125rem)") }, medium: { fontSize: r("var(--md-sys-typescale-body-medium-font-size, 0.875rem)"), fontWeight: r("var(--md-sys-typescale-body-medium-font-weight, 400)"), lineHeight: r("var(--md-sys-typescale-body-medium-line-height, 1.25rem)"), tracking: r("var(--md-sys-typescale-body-medium-tracking, 0.015625rem)") }, small: { fontSize: r("var(--md-sys-typescale-body-small-font-size, 0.75rem)"), fontWeight: r("var(--md-sys-typescale-body-small-font-weight, 400)"), lineHeight: r("var(--md-sys-typescale-body-small-line-height, 1rem)"), tracking: r("var(--md-sys-typescale-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: r("var(--md-sys-typescale-label-large-font-size, 0.875rem)"), fontWeight: r("var(--md-sys-typescale-label-large-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-label-large-line-height, 1.25rem)"), tracking: r("var(--md-sys-typescale-label-large-tracking, 0.00625rem)") }, medium: { fontSize: r("var(--md-sys-typescale-label-medium-font-size, 0.75rem)"), fontWeight: r("var(--md-sys-typescale-label-medium-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-label-medium-line-height, 1rem)"), tracking: r("var(--md-sys-typescale-label-medium-tracking, 0.03125rem)") }, small: { fontSize: r("var(--md-sys-typescale-label-small-font-size, 0.6875rem)"), fontWeight: r("var(--md-sys-typescale-label-small-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-label-small-line-height, 1rem)"), tracking: r("var(--md-sys-typescale-label-small-tracking, 0.03125rem)") } } }, emphasized: { display: { large: { fontSize: r("var(--md-sys-typescale-emphasized-display-large-font-size, 3.5625rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-display-large-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-emphasized-display-large-line-height, 4rem)"), tracking: r("var(--md-sys-typescale-emphasized-display-large-tracking, 0.015625rem)") }, medium: { fontSize: r("var(--md-sys-typescale-emphasized-display-medium-font-size, 2.8125rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-display-medium-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-emphasized-display-medium-line-height, 3.25rem)"), tracking: r("var(--md-sys-typescale-emphasized-display-medium-tracking, 0)") }, small: { fontSize: r("var(--md-sys-typescale-emphasized-display-small-font-size, 2.25rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-display-small-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-emphasized-display-small-line-height, 2.75rem)"), tracking: r("var(--md-sys-typescale-emphasized-display-small-tracking, 0)") } }, headline: { large: { fontSize: r("var(--md-sys-typescale-emphasized-headline-large-font-size, 2rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-headline-large-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-emphasized-headline-large-line-height, 2.5rem)"), tracking: r("var(--md-sys-typescale-emphasized-headline-large-tracking, 0)") }, medium: { fontSize: r("var(--md-sys-typescale-emphasized-headline-medium-font-size, 1.75rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-headline-medium-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-emphasized-headline-medium-line-height, 2.25rem)"), tracking: r("var(--md-sys-typescale-emphasized-headline-medium-tracking, 0)") }, small: { fontSize: r("var(--md-sys-typescale-emphasized-headline-small-font-size, 1.5rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-headline-small-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-emphasized-headline-small-line-height, 2rem)"), tracking: r("var(--md-sys-typescale-emphasized-headline-small-tracking, 0)") } }, title: { large: { fontSize: r("var(--md-sys-typescale-emphasized-title-large-font-size, 1.375rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-title-large-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-emphasized-title-large-line-height, 1.75rem)"), tracking: r("var(--md-sys-typescale-emphasized-title-large-tracking, 0)") }, medium: { fontSize: r("var(--md-sys-typescale-emphasized-title-medium-font-size, 1rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-title-medium-font-weight, 700)"), lineHeight: r("var(--md-sys-typescale-emphasized-title-medium-line-height, 3.5rem)"), tracking: r("var(--md-sys-typescale-emphasized-title-medium-tracking, 0.009375rem)") }, small: { fontSize: r("var(--md-sys-typescale-emphasized-title-small-font-size, 0.875rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-title-small-font-weight, 700)"), lineHeight: r("var(--md-sys-typescale-emphasized-title-small-line-height, 1.25rem)"), tracking: r("var(--md-sys-typescale-emphasized-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: r("var(--md-sys-typescale-emphasized-body-large-font-size, 1rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-body-large-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-emphasized-body-large-line-height, 1.5rem)"), tracking: r("var(--md-sys-typescale-emphasized-body-large-tracking, 0.03125rem)") }, medium: { fontSize: r("var(--md-sys-typescale-emphasized-body-medium-font-size, 0.875rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-body-medium-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-emphasized-body-medium-line-height, 1.25rem)"), tracking: r("var(--md-sys-typescale-emphasized-body-medium-tracking, 0.015625rem)") }, small: { fontSize: r("var(--md-sys-typescale-emphasized-body-small-font-size, 0.75rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-body-small-font-weight, 500)"), lineHeight: r("var(--md-sys-typescale-emphasized-body-small-line-height, 1rem)"), tracking: r("var(--md-sys-typescale-emphasized-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: r("var(--md-sys-typescale-emphasized-label-large-font-size, 0.875rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-label-large-font-weight, 700)"), lineHeight: r("var(--md-sys-typescale-emphasized-label-large-line-height, 1.25rem)"), tracking: r("var(--md-sys-typescale-emphasized-label-large-tracking, 0.00625rem)") }, medium: { fontSize: r("var(--md-sys-typescale-emphasized-label-medium-font-size, 0.75rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-label-medium-font-weight, 700)"), lineHeight: r("var(--md-sys-typescale-emphasized-label-medium-line-height, 1rem)"), tracking: r("var(--md-sys-typescale-emphasized-label-medium-tracking, 0.03125rem)") }, small: { fontSize: r("var(--md-sys-typescale-emphasized-label-small-font-size, 0.6875rem)"), fontWeight: r("var(--md-sys-typescale-emphasized-label-small-font-weight, 700)"), lineHeight: r("var(--md-sys-typescale-emphasized-label-small-line-height, 1rem)"), tracking: r("var(--md-sys-typescale-emphasized-label-small-tracking, 0.03125rem)") } } } }, c = { color: Vt, elevation: _n, motion: Cn, shape: Sn, state: Mn, typescale: An, scrollbar: En, density: mn };
function Ce(i2) {
  return Y(i2, "disabled");
}
function gi(i2, e = true) {
  class t extends i2 {
    constructor() {
      super(...arguments), this.disabled = false;
    }
    update(n) {
      super.update(n), n.has("disabled") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaDisabled = this.disabled ? "true" : null);
    }
  }
  return f([x({ type: Boolean, reflect: e })], t.prototype, "disabled", void 0), t;
}
function Ee(i2) {
  return Y(i2, "disabledInteractive") && Ce(i2);
}
const Xs = ["click", "dblclick", "auxclick", "keydown", "keyup"], Ln = ["Tab", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Left", "Up", "Right", "Down"], ts = /* @__PURE__ */ Symbol("_suppressedEventHandler");
function In(i2) {
  var e;
  class t extends i2 {
    constructor() {
      super(...arguments), this[e] = (n) => {
        if (this.disabledInteractive) {
          if (n instanceof KeyboardEvent && Ln.includes(n.key)) return;
          n.stopImmediatePropagation(), n.preventDefault();
        }
      }, this.disabledInteractive = false;
    }
    connectedCallback() {
      Xs.forEach((n) => this.addEventListener(n, this[ts], true)), super.connectedCallback();
    }
    disconnectedCallback() {
      Xs.forEach((n) => this.removeEventListener(n, this[ts], true)), super.disconnectedCallback();
    }
    update(n) {
      super.update(n), (n.has("disabled") || n.has("disabledInteractive")) && this.role && this.role !== "none" && this.role !== "presentation" && this.role !== "none" && (this.ariaDisabled = this.disabled || this.disabledInteractive ? "true" : null);
    }
  }
  return e = ts, f([x({ attribute: "disabled-interactive", type: Boolean, reflect: true })], t.prototype, "disabledInteractive", void 0), t;
}
const kt = /* @__PURE__ */ Symbol("updateLabels");
function zn(i2) {
  return Y(i2, "labels") && hn(i2);
}
const Pe = /* @__PURE__ */ Symbol("_eventHandler");
function Bn(i2) {
  var e;
  class t extends i2 {
    constructor() {
      super(...arguments), this[e] = (n) => {
        n.defaultPrevented || this[kt]();
      };
    }
    get labels() {
      return this[$].labels;
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("focusout", this[Pe]), this.addEventListener("change", this[Pe]);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("focusout", this[Pe]), this.removeEventListener("change", this[Pe]);
    }
    update(n) {
      super.update(n), this[kt]();
    }
    [(e = Pe, kt)]() {
      const n = this.hasAttribute("tabindex"), o = Ce(this) && this.disabled || Ee(this) && this.disabledInteractive, l = Ss(this) && this.touched && (this.ariaInvalid || rt(this, "--invalid"));
      for (const d of this.labels ?? []) d.style.userSelect = n ? "none" : "", d.style.cursor = !o && n ? "pointer" : "", !o && n ? d.style.setProperty("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)") : d.style.removeProperty("-webkit-tap-highlight-color"), d.style.color = o ? `color-mix(in srgb, ${c.color.onSurface} 38%, transparent)` : l ? `${c.color.error}` : "";
    }
  }
  return t.formAssociated = true, t;
}
const Ys = /* @__PURE__ */ Symbol("formValue"), Zs = /* @__PURE__ */ Symbol("defaultValue"), lt = /* @__PURE__ */ Symbol("_defaultValue"), ss = /* @__PURE__ */ Symbol("_defaultIndeterminate"), is = /* @__PURE__ */ Symbol("_formDisabled");
function Nn(i2) {
  var e, t;
  class s extends i2 {
    constructor() {
      super(...arguments), this[e] = false, this[t] = false;
    }
    get form() {
      return this[$].form;
    }
    get labels() {
      return this[$].labels;
    }
    get [(e = ss, t = is, Ys)]() {
      return null;
    }
    get [Zs]() {
      return this[lt];
    }
    get name() {
      return this.getAttribute("name") ?? "";
    }
    set name(o) {
      o ? this.setAttribute("name", o) : this.removeAttribute("name");
    }
    get disabled() {
      return super.disabled || this[is];
    }
    set disabled(o) {
      super.disabled = o;
    }
    connectedCallback() {
      super.connectedCallback(), cs(this) ? (this[lt] = this.checked, qs(this) && (this[ss] = this.indeterminate)) : "value" in this && (this[lt] = this.value);
    }
    requestUpdate(o, l, d) {
      super.requestUpdate(o, l, d), this[$].setFormValue(this[Ys]);
    }
    formDisabledCallback(o) {
      const l = this.disabled;
      this[is] = o, this.disabled != l && this.requestUpdate("disabled", l);
    }
    formResetCallback() {
      cs(this) ? (this.checked = this[lt] === true, qs(this) && (this.indeterminate = this[ss])) : "value" in this && (this.value = this[Zs]), un(this) && this.markAsPristine(), Ss(this) && this.markAsUntouched();
    }
  }
  return s.formAssociated = true, f([x({ noAccessor: true })], s.prototype, "name", null), f([x({ type: Boolean })], s.prototype, "disabled", null), s;
}
const Gs = /* @__PURE__ */ Symbol("validate"), K = /* @__PURE__ */ Symbol("_updateValidity"), dt = /* @__PURE__ */ Symbol("_validityMessage");
function Vn(i2) {
  var e, t;
  class s extends i2 {
    constructor() {
      super(...arguments), e.add(this);
    }
    get willValidate() {
      return this[$].willValidate;
    }
    get validity() {
      return this[K](), this[$].validity;
    }
    get validationMessage() {
      return this[K](), this[$].validationMessage;
    }
    [(e = /* @__PURE__ */ new WeakSet(), Gs)]() {
      return this[dt] ? { customError: true } : void 0;
    }
    reportValidity() {
      return Ss(this) && this.markAsTouched(), this[K](), this[$].reportValidity();
    }
    checkValidity() {
      return this[K](), this[$].checkValidity();
    }
    setCustomValidity(o) {
      o ? this[dt] = o : this[dt] = void 0, this[K]();
    }
    requestUpdate(o, l, d) {
      super.requestUpdate(o, l, d), this[K]();
    }
    firstUpdated(o) {
      super.firstUpdated(o), this[K]();
    }
    [K]() {
      if (!this.isConnected) return;
      const o = this[Gs](), l = o && Object.keys(o).some((u) => o[u] === true);
      let d = o?.customError ? this[dt] : "";
      o && !d && (d = a(this, e, "m", t).call(this, o)), this[$].setValidity(o, d), this.ariaInvalid = l ? "true" : null, Ot(this, "--invalid", l === true), zn(this) && this[kt]?.();
    }
  }
  return t = function(o) {
    const l = document.createElement("input");
    return l.type = "text", o.valueMissing && (l.required = true, l.value = ""), o.typeMismatch && (l.type = "email", l.value = "not-an-email"), o.patternMismatch && (l.pattern = "[0-9]{4}", l.value = "abcd"), o.tooShort && (l.minLength = 5, l.value = "abc"), o.tooLong && (l.maxLength = 2, l.value = "abcdef"), o.rangeUnderflow && (l.type = "number", l.min = "10", l.value = "5"), o.rangeOverflow && (l.type = "number", l.max = "5", l.value = "10"), o.stepMismatch && (l.type = "number", l.step = "2", l.value = "3"), o.badInput && (l.type = "number", l.value = "abc"), l.setCustomValidity(""), l.checkValidity(), l.validationMessage;
  }, s;
}
const De = /* @__PURE__ */ Symbol("_tabindex");
function Kn(i2) {
  var e;
  class t extends i2 {
    constructor() {
      super(...arguments), this[e] = 0;
    }
    connectedCallback() {
      this[De] = Number.parseInt(this.getAttribute("tabindex") ?? "0"), super.connectedCallback();
    }
    firstUpdated(n) {
      super.firstUpdated(n), !this.hasAttribute("tabindex") && !n.has("disabled") && this.setAttribute("tabindex", `${this[De]}`);
    }
    update(n) {
      if (super.update(n), n.has("disabled")) if (!this.disabled && this.role !== "none") this.hasAttribute("tabindex") || this.setAttribute("tabindex", `${this[De]}`);
      else {
        const o = this.getAttribute("tabindex");
        o && (this[De] = Number.parseInt(o)), this.removeAttribute("tabindex");
      }
    }
  }
  return e = De, t;
}
const ns = /* @__PURE__ */ Symbol("_clickHandler");
function jn(i2) {
  var e;
  class t extends i2 {
    constructor() {
      super(...arguments), this.type = "button", this[e] = async (n) => {
        if (n.defaultPrevented || Ce(this) && this.disabled || Ee(this) && this.disabledInteractive) return;
        const o = this[$].form;
        if (!(!o || this.type === "button") && (await new Promise((l) => setTimeout(l)), !n.defaultPrevented)) switch (this.type) {
          case "reset":
            o.reset();
            break;
          case "submit":
            o.addEventListener("submit", (l) => Object.defineProperty(l, "submitter", { configurable: true, enumerable: true, get: () => this }), { capture: true, once: true }), this[$].setFormValue(this.value), o.requestSubmit();
            break;
        }
      };
    }
    get name() {
      return this.getAttribute("name") ?? "";
    }
    set name(n) {
      n ? this.setAttribute("name", n) : this.removeAttribute("name");
    }
    get value() {
      return this.getAttribute("value");
    }
    set value(n) {
      n != null ? this.setAttribute("value", n) : this.removeAttribute("value");
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("click", this[ns]);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("click", this[ns]);
    }
  }
  return e = ns, t.formAssociated = true, f([x()], t.prototype, "name", null), f([x()], t.prototype, "value", null), f([x()], t.prototype, "type", void 0), t;
}
const me = /* @__PURE__ */ Symbol("_control"), rs = /* @__PURE__ */ Symbol("_firstUpdated");
function Kt(i2) {
  var e;
  class t extends i2 {
    constructor() {
      super(...arguments), this[e] = false, this.htmlFor = null;
    }
    get control() {
      return this[me]?.deref() ?? null;
    }
    connectedCallback() {
      super.connectedCallback();
      const n = this[me]?.deref();
      n && this.attach(n);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      const n = this[me];
      n && (this.detach(), this[me] = n);
    }
    firstUpdated(n) {
      super.firstUpdated(n), this[rs] = true;
    }
    update(n) {
      if (super.update(n), n.has("htmlFor")) if (this.htmlFor) {
        const o = this.getRootNode();
        o && dn(this.htmlFor, o).then((l) => {
          l !== this.control && (this.control && this.detach(), l instanceof HTMLElement && this.attach(l));
        });
      } else this.control && this[rs] && this.detach();
    }
    attach(n) {
      this[me] = new WeakRef(n);
    }
    detach() {
      this[me] = void 0;
    }
  }
  return e = rs, f([x({ attribute: "for" })], t.prototype, "htmlFor", void 0), t;
}
function qn(i2, e = true) {
  var t, s, n, o, l, d, u;
  class m extends i2 {
    constructor() {
      super(...arguments), t.add(this), s.set(this, false), n.set(this, (h) => a(this, t, "m", d).call(this, h)), o.set(this, (h) => a(this, t, "m", u).call(this, h)), l.set(this, () => b(this, s, false, "f"));
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("keydown", a(this, n, "f")), this.addEventListener("keyup", a(this, o, "f")), this.addEventListener("focusout", a(this, l, "f"));
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("keydown", a(this, n, "f")), this.removeEventListener("keyup", a(this, o, "f")), this.removeEventListener("focusout", a(this, l, "f"));
    }
  }
  return s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakSet(), d = function(h) {
    if (h.target !== h.currentTarget || Ce(this) && this.disabled || Ee(this) && this.disabledInteractive) {
      b(this, s, false, "f");
      return;
    }
    (h.key === " " || e && h.key === "Enter") && b(this, s, true, "f");
  }, u = function(h) {
    if (h.target !== h.currentTarget || Ce(this) && this.disabled || Ee(this) && this.disabledInteractive || !a(this, s, "f")) {
      b(this, s, false, "f");
      return;
    }
    b(this, s, false, "f"), this.dispatchEvent(new MouseEvent("click", { cancelable: true, bubbles: true, composed: true }));
  }, m;
}
const Hn = /* @__PURE__ */ Symbol("renderPseudoLink"), as = /* @__PURE__ */ Symbol("_clickHandler");
function Xn(i2, e = false) {
  var t, s, n, o, l;
  class d extends i2 {
    constructor() {
      super(...arguments), t.add(this), this[l] = async (m) => {
        if (Ee(this) && this.disabledInteractive && (m.preventDefault(), m.stopPropagation()), await new Promise((v) => v()), !m.defaultPrevented && this.href) {
          m.preventDefault(), m.stopImmediatePropagation();
          const v = document.createElement("a");
          v.href = this.href, v.rel = this.rel, v.target = this.target, this.download != null && (v.download = this.download), v.addEventListener("click", async () => {
            await new Promise((h) => h()), v.remove();
          }), document.body.appendChild(v), v.click();
        }
      }, this.href = "", this.target = "", this.rel = "";
    }
    get download() {
      return this.getAttribute("download");
    }
    set download(m) {
      const v = this.download;
      v !== m && (m ? this.setAttribute("download", m) : this.removeAttribute("download"), this.requestUpdate("download", v));
    }
    connectedCallback() {
      super.connectedCallback(), e || this.addEventListener("click", this[as]), this.hasAttribute("href") && this.role === "button" && (this.role = "link");
    }
    disconnectedCallback() {
      super.disconnectedCallback(), e || this.removeEventListener("click", this[as]);
    }
    [(t = /* @__PURE__ */ new WeakSet(), l = as, Hn)]() {
      const m = Ce(this) && this.disabled, v = Ee(this) && this.disabledInteractive;
      return !m && !v && this.href ? T`<a href="${this.href}" target="${Xt(this.target || void 0)}" rel="${Xt(this.rel || void 0)}" download="${Xt(this.download || void 0)}" tabindex="-1" aria-hidden="true" @pointerdown="${a(this, t, "m", s)}" @focus="${a(this, t, "m", n)}" @blur="${a(this, t, "m", o)}"></a>` : w;
    }
  }
  return s = function(m) {
    m.button !== 2 ? m.preventDefault() : m.target.removeAttribute("aria-hidden");
  }, n = function(m) {
    m.target.blur(), this.focus();
  }, o = function(m) {
    m.target.setAttribute("aria-hidden", "true");
  }, f([x()], d.prototype, "href", void 0), f([x()], d.prototype, "target", void 0), f([x()], d.prototype, "rel", void 0), f([x({ reflect: false })], d.prototype, "download", null), d;
}
const os = /* @__PURE__ */ Symbol("_wasConnected");
function Yn(i2) {
  var e;
  class t extends i2 {
    constructor() {
      super(...arguments), this[e] = false;
    }
    reconnectedCallback() {
    }
    connectedCallback() {
      super.connectedCallback(), this[os] && this.reconnectedCallback();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this[os] = true;
    }
  }
  return e = os, t;
}
function He(i2, e) {
  class t extends i2 {
    connectedCallback() {
      this.role = this.role || e, super.connectedCallback();
    }
  }
  return t;
}
var Ct;
class Tn extends S {
  constructor() {
    super(...arguments), Ct.set(this, (e) => {
      e.defaultPrevented || this._onClick(e);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.parentElement?.addEventListener("click", a(this, Ct, "f"));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.parentElement?.removeEventListener("click", a(this, Ct, "f"));
  }
  render() {
    return T`<slot></slot>`;
  }
}
Ct = /* @__PURE__ */ new WeakMap();
Tn.styles = F`:host { display: contents; } ::slotted(.material-icons) { font-size: inherit !important; }`;
var H, Ge, Ie, bi, Be, Ne, hs;
let Se = class extends Es(S) {
  constructor() {
    super(...arguments), H.add(this), Ge.set(this, false), Ie.set(this, false), this.open = false, this.orientation = "vertical", this.noAnimate = false;
  }
  update(e) {
    super.update(e);
    const t = this.noAnimate || e.has("orientation") && !e.has("open");
    if (q(this, "--no-animate"), !a(this, Ge, "f")) {
      this.open && (b(this, Ie, true, "f"), a(this, H, "m", Be).call(this)), b(this, Ge, true, "f");
      return;
    }
    this.toggleAttribute("inert", !this.open), this.open ? (b(this, Ie, true, "f"), t || Yt() || (a(this, H, "m", Be).call(this), Ot(this, "--overflows", this.orientation === "vertical" ? this.clientHeight < this.scrollHeight : this.orientation === "horizontal" ? this.clientWidth < this.scrollWidth : this.clientHeight < this.scrollHeight || this.clientWidth < this.scrollWidth), a(this, H, "m", Ne).call(this)), P(this, "--closing"), q(this, "--opening"), this.dispatchEvent(new Event("opening")), a(this, H, "m", Ne).call(this), P(this, "--no-animate"), a(this, H, "m", hs).call(this), t || Yt() ? (a(this, H, "m", Be).call(this), P(this, "--opening"), this.dispatchEvent(new Event("opened"))) : this.addEventListener("transitionend", () => {
      this.open && (a(this, H, "m", Be).call(this), P(this, "--opening"), this.dispatchEvent(new Event("opened")));
    }, { once: true })) : (P(this, "--opening"), q(this, "--closing"), this.dispatchEvent(new Event("closing")), a(this, H, "m", hs).call(this), a(this, Ie, "f") && P(this, "--no-animate"), t || Yt() ? (a(this, H, "m", Ne).call(this), P(this, "--closing"), this.dispatchEvent(new Event("closed"))) : requestAnimationFrame(() => {
      a(this, H, "m", Ne).call(this), this.addEventListener("transitionend", () => {
        this.open || (P(this, "--closing"), this.dispatchEvent(new Event("closed")));
      }, { once: true });
    }));
  }
  render() {
    return T`<slot @slotchange="${a(this, H, "m", bi)}"></slot>`;
  }
};
Ge = /* @__PURE__ */ new WeakMap();
Ie = /* @__PURE__ */ new WeakMap();
H = /* @__PURE__ */ new WeakSet();
bi = function() {
  b(this, Ge, true, "f");
};
Be = function() {
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
hs = function() {
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
Se.styles = F`:host { display: block; overflow: hidden; } :host([orientation="vertical"]) { height: 0px; transition: ${r(`visibility var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        height var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding-top var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding-bottom var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard}`)}; } :host([orientation="horizontal"]) { width: 0px; transition: ${r(`visibility var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        width var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding-left var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding-right var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard}`)}; } :host([orientation="both"]) { height: 0px; width: 0px; transition: ${r(`visibility var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        width var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        height var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard}`)}; } :host(:not(:is(:state(--closing), :--closing)):not([open])) { visibility: hidden; } :host([orientation="vertical"]:not([open])) { min-height: unset !important; padding-top: 0px !important; padding-bottom: 0px !important; } :host([orientation="horizontal"]:not([open])) { min-width: unset !important; padding-left: 0px !important; padding-right: 0px !important; } :host([orientation="both"]:not([open])) { min-height: unset !important; min-width: unset !important; padding: 0px !important; } :host([no-animate]), :host(:is(:state(--no-animate), :--no-animate)) { transition-duration: 0ms; } :host([orientation="vertical"]:is(:state(--opening), :--opening)), :host([orientation="vertical"]:is(:state(--closing), :--closing)) { overflow-y: hidden !important; } :host([orientation="horizontal"]:is(:state(--opening), :--opening)), :host([orientation="horizontal"]:is(:state(--closing), :--closing)) { overflow-x: hidden !important; } :host([orientation="both"]:is(:state(--opening), :--opening)), :host([orientation="both"]:is(:state(--closing), :--closing)) { overflow-y: hidden !important; overflow-x: hidden !important; } :host(:is(:state(--overflows), :--overflows)) { scrollbar-gutter: stable; } ::slotted(*) { --m3e-collapsible-animation-duration: initial; } @media (prefers-reduced-motion) { :host { transition: none; } }`;
f([x({ type: Boolean, reflect: true })], Se.prototype, "open", void 0);
f([x({ reflect: true })], Se.prototype, "orientation", void 0);
f([x({ attribute: "no-animate", type: Boolean, reflect: true })], Se.prototype, "noAnimate", void 0);
Se = f([O("m3e-collapsible")], Se);
const W = { liftDuration: r(`var(--m3e-elevation-lift-duration, ${c.motion.duration.short4})`), liftEasing: r(`var(--m3e-elevation-lift-easing, ${c.motion.easing.standard})`), settleDuration: r(`var(--m3e-elevation-settle-duration, ${c.motion.duration.short3})`), settleEasing: r(`var(--m3e-elevation-settle-easing, ${c.motion.easing.standardAccelerate})`), level: r(`var(--m3e-elevation-level, ${c.elevation.level0})`), hoverLevel: r(`var(--m3e-elevation-hover-level, ${c.elevation.level0})`), focusLevel: r(`var(--m3e-elevation-focus-level, ${c.elevation.level0})`), pressedLevel: r(`var(--m3e-elevation-pressed-level, ${c.elevation.level0})`) };
var Ve, Et, St, Mt, xi, _i, wi;
let Me = class extends Kt(He(S, "none")) {
  constructor() {
    super(...arguments), Ve.add(this), Et.set(this, new oi(this, { target: null, callback: (e) => a(this, Ve, "m", xi).call(this, e) })), St.set(this, new Nt(this, { target: null, callback: (e) => a(this, Ve, "m", _i).call(this, e) })), Mt.set(this, new ui(this, { target: null, callback: (e) => a(this, Ve, "m", wi).call(this, e) })), this.disabled = false, this.level = null;
  }
  attach(e) {
    super.attach(e), a(this, Et, "f").observe(e), a(this, St, "f").observe(e), a(this, Mt, "f").observe(e);
  }
  detach() {
    this.control && (a(this, Et, "f").unobserve(this.control), a(this, St, "f").unobserve(this.control), a(this, Mt, "f").unobserve(this.control)), super.detach();
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
    return T`<div class="shadow"></div>`;
  }
};
Et = /* @__PURE__ */ new WeakMap();
St = /* @__PURE__ */ new WeakMap();
Mt = /* @__PURE__ */ new WeakMap();
Ve = /* @__PURE__ */ new WeakSet();
xi = function(e) {
  this.disabled || (this._shadow?.classList.toggle("hover", e), this._shadow?.classList.toggle("resting", !e));
};
_i = function(e) {
  this.disabled || this._shadow?.classList.toggle("focus", e);
};
wi = function(e) {
  this.disabled || this._shadow?.classList.toggle("pressed", e);
};
Me.styles = F`:host { display: block; } :host, .shadow { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .shadow.resting, .shadow.focus, .shadow.pressed { will-change: box-shadow; transition: ${r(`box-shadow ${W.settleDuration} ${W.settleEasing};`)}; } .shadow.hover { will-change: box-shadow; transition: ${r(`box-shadow ${W.liftDuration} ${W.liftEasing};`)}; } .shadow { box-shadow: ${W.level}; } .shadow.focus { box-shadow: ${W.focusLevel}; } .shadow.hover { box-shadow: ${W.hoverLevel}; } .shadow.pressed { box-shadow: ${W.pressedLevel}; } :host([level="0"]) .shadow { --m3e-elevation-level: ${c.elevation.level0}; --m3e-elevation-hover-level: ${c.elevation.level1}; } :host([level="1"]) .shadow { --m3e-elevation-level: ${c.elevation.level1}; --m3e-elevation-hover-level: ${c.elevation.level2}; } :host([level="2"]) .shadow { --m3e-elevation-level: ${c.elevation.level2}; --m3e-elevation-hover-level: ${c.elevation.level3}; } :host([level="3"]) .shadow { --m3e-elevation-level: ${c.elevation.level3}; --m3e-elevation-hover-level: ${c.elevation.level4}; } :host([level="4"]) .shadow { --m3e-elevation-level: ${c.elevation.level4}; --m3e-elevation-hover-level: ${c.elevation.level5}; } :host([level="5"]) .shadow { --m3e-elevation-level: ${c.elevation.level5}; --m3e-elevation-hover-level: ${W.level}; } :host([level]) .shadow { --m3e-elevation-focus-level: ${W.level}; --m3e-elevation-pressed-level: ${W.level}; } @media (prefers-reduced-motion) { .shadow.resting, .shadow.pressed, .shadow.focus, .shadow.hover { transition: none; } } @media (forced-colors: active) { .shadow { display: none; } }`;
f([Cs(".shadow")], Me.prototype, "_shadow", void 0);
f([x({ type: Boolean, reflect: true })], Me.prototype, "disabled", void 0);
f([x({ type: Number, reflect: true })], Me.prototype, "level", void 0);
Me = f([O("m3e-elevation")], Me);
const _ = { color: r(`var(--m3e-focus-ring-color, ${c.color.secondary})`), duration: r(`var(--m3e-focus-ring-duration, ${c.motion.duration.long2})`), thickness: r("var(--m3e-focus-ring-thickness, 3px)"), outwardOffset: r("var(--m3e-focus-ring-outward-offset, 2px)"), inwardOffset: r("var(--m3e-focus-ring-inward-offset, 0px)"), visibility: r("var(--m3e-focus-ring-visibility, visible)"), growthFactor: r("var(--m3e-focus-ring-growth-factor, 2)") };
var ps, At, $i;
let Ae = class extends Kt(He(S, "none")) {
  constructor() {
    super(...arguments), ps.add(this), At.set(this, new Nt(this, { target: null, callback: (e, t) => a(this, ps, "m", $i).call(this, t) })), this.inward = false, this.disabled = false;
  }
  show() {
    this._outline?.classList.toggle("visible", true);
  }
  hide() {
    this._outline?.classList.toggle("visible", false);
  }
  attach(e) {
    super.attach(e), a(this, At, "f").observe(e);
  }
  detach() {
    this.control && a(this, At, "f").unobserve(this.control), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.hide();
  }
  render() {
    return T`<div class="outline"></div>`;
  }
  updated(e) {
    super.updated(e), e.has("disabled") && this.disabled && this.hide();
  }
};
At = /* @__PURE__ */ new WeakMap();
ps = /* @__PURE__ */ new WeakSet();
$i = function(e) {
  this.disabled || (e ? this.show() : this.hide());
};
Ae.styles = F`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; outline: none; } .outline { contain: layout style; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; z-index: 1; outline-color: ${_.color}; outline-width: ${_.thickness}; visibility: ${_.visibility}; } .outline.visible { outline-style: solid; } :host(:not([inward])) .outline { outline-offset: ${_.outwardOffset}; } :host([inward]) .outline { outline-offset: calc(${_.inwardOffset} - ${_.thickness}); } :host(:not([inward])) .outline.visible { animation: grow-shrink ${_.duration}; } :host([inward]) .outline.visible { animation: shrink-grow ${_.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @keyframes shrink-grow { 50% { outline-offset: calc( ${_.inwardOffset} - calc(${_.thickness} * ${_.growthFactor}) ); outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @media (prefers-reduced-motion) { :host(:not([inward])) .outline.visible, :host([inward]) .outline.visible { animation: none; } } @media (forced-colors: active) { .outline { outline-color: Highlight; } }`;
f([Cs(".outline")], Ae.prototype, "_outline", void 0);
f([x({ type: Boolean, reflect: true })], Ae.prototype, "inward", void 0);
f([x({ type: Boolean, reflect: true })], Ae.prototype, "disabled", void 0);
Ae = f([O("m3e-focus-ring")], Ae);
let us = class extends pn(gi(He(S, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return this.indeterminate ? T`<svg viewBox="0 -960 960 960" fill="currentColor"><path Required d="M240-440v-80h480v80H240Z"/></svg>` : this.checked ? T`<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>` : w;
  }
};
us.styles = F`:host { display: inline-block; vertical-align: middle; width: var(--m3e-checkbox-icon-size, 1.125rem); height: var(--m3e-checkbox-icon-size, 1.125rem); border-radius: var(--m3e-checkbox-container-shape, 2px); box-sizing: border-box; flex: none; contain: layout style paint; } :host(:not([checked]):not([indeterminate])) { border-width: var(--m3e-checkbox-unselected-outline-thickness, 2px); border-style: solid; } :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { background-color: var(--m3e-checkbox-selected-container-color, ${c.color.primary}); color: var(--m3e-checkbox-selected-icon-color, ${c.color.onPrimary}); } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: var(--m3e-checkbox-unselected-outline-color, ${c.color.onSurfaceVariant}); } :host([disabled]:not([checked]):not([indeterminate])) { border-color: color-mix( in srgb, var(--m3e-checkbox-unselected-disabled-outline-color, ${c.color.onSurface}) var(--m3e-checkbox-unselected-disabled-outline-opacity, 38%), transparent ); } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-container-color, ${c.color.onSurface}) var(--m3e-checkbox-selected-disabled-container-opacity, 38%), transparent ); color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-icon-color, ${c.color.surface}) var(--m3e-checkbox-selected-disabled-icon-opacity, 100%), transparent ); } svg { pointer-events: none; } @media (forced-colors: active) { :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { border-color: Highlight; background-color: Highlight; color: HighlightText; } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: CanvasText; background: Canvas; } :host([disabled]:not([checked]):not([indeterminate])) { border-color: GrayText; background-color: Canvas; } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: GrayText; color: Canvas; } }`;
us = f([O("m3e-pseudo-checkbox")], us);
let ms = class extends yi(gi(He(S, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return T`<svg class="icon" viewBox="0 0 20 20"><mask id="cutout2"><rect width="100%" height="100%" fill="white"></rect><circle cx="10" cy="10" r="8" fill="black"></circle></mask><circle class="outer circle" cx="10" cy="10" r="10" mask="url(#cutout2)"></circle><circle class="inner circle" cx="10" cy="10" r="5"></circle></svg>`;
  }
};
ms.styles = F`:host { display: inline-block; vertical-align: middle; box-sizing: border-box; width: var(--m3e-radio-icon-size, 1.25rem); height: var(--m3e-radio-icon-size, 1.25rem); flex: none; contain: layout style paint; } .circle { fill: currentColor; } :host(:not([checked])) .circle.inner { opacity: 0; } :host(:not([checked])) { color: var(--m3e-radio-unselected-icon-color, ${c.color.onSurfaceVariant}); } :host([checked]) { color: var(--m3e-radio-selected-icon-color, ${c.color.primary}); } :host([disabled]) { color: color-mix(in srgb, var(--m3e-radio-disabled-icon-color, ${c.color.onSurface}) 38%, transparent); } @media (forced-colors: active) { :host { border-radius: 50%; } :host(:not([checked])) { color: CanvasText; background-color: Canvas; } :host([checked]) { color: HighlightText; background-color: Highlight; } :host([disabled]) { color: GrayText; background-color: Canvas; } }`;
ms = f([O("m3e-pseudo-radio")], ms);
const ct = { color: r(`var(--m3e-ripple-color, ${c.color.onSurface})`), opacity: r(`var(--m3e-ripple-opacity, ${c.state.pressedStateLayerOpacity})`), enterDuration: r(`var(--m3e-ripple-enter-duration, ${c.motion.duration.long1})`), exitDuration: r(`var(--m3e-ripple-exit-duration, ${c.motion.duration.medium3})`) };
var se, E, Lt, zt, ki, Ci;
let pe = class extends Kt(He(S, "none")) {
  constructor() {
    super(...arguments), se.add(this), E.set(this, null), Lt.set(this, new ui(this, { target: null, minPressedDuration: 225, isPressedKey: (e) => e === " ", callback: (e, { x: t, y: s }) => a(this, se, "m", Ci).call(this, e, t, s) })), this.disabled = false, this.centered = false, this.unbounded = false, this.radius = null;
  }
  get visible() {
    return a(this, E, "f") !== null;
  }
  show(e, t, s = false) {
    a(this, se, "m", zt).call(this);
    const n = this.getBoundingClientRect();
    this.centered && (e = n.left + n.width / 2, t = n.top + n.height / 2);
    let o = this.radius;
    if (!o || isNaN(o)) {
      const u = Math.max(Math.abs(e - n.left), Math.abs(e - n.right)), m = Math.max(Math.abs(t - n.top), Math.abs(t - n.bottom));
      o = Math.sqrt(u * u + m * m);
    }
    const l = e - n.left, d = t - n.top;
    b(this, E, document.createElement("div"), "f"), a(this, E, "f").classList.add("ripple"), s && a(this, E, "f").classList.add("persistent"), a(this, E, "f").style.left = `${l - o}px`, a(this, E, "f").style.top = `${d - o}px`, a(this, E, "f").style.width = `${o * 2}px`, a(this, E, "f").style.height = `${o * 2}px`, a(this, E, "f").addEventListener("animationend", () => a(this, se, "m", ki).call(this, s), { once: true }), a(this, E, "f").addEventListener("transitionend", () => a(this, se, "m", zt).call(this), { once: true }), this.shadowRoot?.appendChild(a(this, E, "f"));
  }
  hide() {
    a(this, E, "f")?.classList.add("exit");
  }
  attach(e) {
    super.attach(e), a(this, Lt, "f").observe(e);
  }
  detach() {
    this.control && a(this, Lt, "f").unobserve(this.control), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), a(this, se, "m", zt).call(this);
  }
  updated(e) {
    super.updated(e), e.has("disabled") && this.disabled && this.hide();
  }
};
E = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
se = /* @__PURE__ */ new WeakSet();
zt = function() {
  a(this, E, "f")?.remove(), b(this, E, null, "f");
};
ki = function(e) {
  e ? a(this, E, "f")?.classList.add("pressed") : this.hide();
};
Ci = function(e, t, s) {
  this.disabled || (e ? this.show(t, s, true) : this.hide());
};
pe.styles = F`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } :host(:not([unbounded])) { overflow: hidden; } :host(:not([unbounded])) .ripple { contain: layout style paint; } :host([unbounded]) .ripple { contain: layout style; } .ripple { display: block; position: absolute; inset: 0; pointer-events: none; transform: scale(0); opacity: ${ct.opacity}; border-radius: 50%; filter: blur(20px); background-color: ${ct.color}; transition: ${r(`background-color ${c.motion.duration.short4} ${c.motion.easing.standard}`)}; will-change: transform; animation: ripple ${ct.enterDuration} linear; } .ripple.persistent.pressed { transform: scale(4); } .ripple.exit { transition: opacity ${ct.exitDuration} cubic-bezier(0, 0, 0.2, 0.1); opacity: 0; } @keyframes ripple { to { transform: scale(4); } } @media (prefers-reduced-motion) { .ripple { transform: scale(4); animation-duration: 90ms; } .ripple.exit { transition-duration: 10ms; } } @media (forced-colors: active) { .ripple { display: none; } }`;
f([x({ type: Boolean, reflect: true })], pe.prototype, "disabled", void 0);
f([x({ type: Boolean, reflect: true })], pe.prototype, "centered", void 0);
f([x({ type: Boolean, reflect: true })], pe.prototype, "unbounded", void 0);
f([x({ type: Number })], pe.prototype, "radius", void 0);
pe = f([O("m3e-ripple")], pe);
var Ke;
let Le = class extends Es(S) {
  constructor() {
    super(...arguments), Ke.set(this, () => this._updateScroll()), this.dividers = "above-below", this.thin = false;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("scroll", a(this, Ke, "f"));
  }
  update(e) {
    super.update(e), e.has("dividers") && (this.removeEventListener("scroll", a(this, Ke, "f")), this.dividers !== "none" && this.addEventListener("scroll", a(this, Ke, "f"), { passive: true }));
  }
  render() {
    return T`<slot @slotchange="${this._updateScroll}"></slot>`;
  }
  _updateScroll() {
    const e = (this.dividers === "above" || this.dividers === "above-below") && this.scrollTop > 0, t = (this.dividers === "below" || this.dividers === "above-below") && this.scrollHeight - this.scrollTop - this.clientHeight > 1;
    Ot(this, "--above", e), Ot(this, "--below", t);
  }
};
Ke = /* @__PURE__ */ new WeakMap();
Le.styles = F`:host { display: block; overflow-y: auto; position: relative; box-sizing: border-box; scrollbar-color: ${c.scrollbar.color}; border-top: var(--m3e-divider-thickness, 1px) solid transparent; border-bottom: var(--m3e-divider-thickness, 1px) solid transparent; outline-color: ${_.color}; outline-width: ${_.thickness}; outline-offset: ${_.outwardOffset}; } :host([thin]) { scrollbar-width: ${c.scrollbar.thinWidth}; } :host(:not([thin])) { scrollbar-width: ${c.scrollbar.width}; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: var(--m3e-divider-color, ${c.color.outlineVariant}); } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: var(--m3e-divider-color, ${c.color.outlineVariant}); } :host(:focus-visible) { outline-style: solid; animation: grow-shrink ${_.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @media (forced-colors: active) { :host { border-top: var(--m3e-divider-thickness, 1px) solid Canvas; border-bottom: var(--m3e-divider-thickness, 1px) solid Canvas; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: GrayText; } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: GrayText; } } @media (prefers-reduced-motion) { :host(:focus-visible) { animation: none; } }`;
f([x()], Le.prototype, "dividers", void 0);
f([x({ type: Boolean, reflect: true })], Le.prototype, "thin", void 0);
f([mi(40)], Le.prototype, "_updateScroll", null);
Le = f([O("m3e-scroll-container")], Le);
var Qe, de, Ei, Ms;
let Ut = class extends Es(S) {
  constructor() {
    super(...arguments), Qe.add(this), de.set(this, new Array()), this.selectedIndex = null;
  }
  connectedCallback() {
    super.connectedCallback(), q(this, "--no-animate");
  }
  update(e) {
    super.update(e), e.has("selectedIndex") && (this.selectedIndex === null && q(this, "--no-animate"), a(this, Qe, "m", Ms).call(this), this.selectedIndex !== null && rt(this, "--no-animate") && requestAnimationFrame(() => {
      this.selectedIndex !== null && P(this, "--no-animate");
    }));
  }
  render() {
    return T`<slot @slotchange="${a(this, Qe, "m", Ei)}"></slot>`;
  }
};
de = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakSet();
Ei = function(e) {
  const t = [...e.target.assignedElements({ flatten: true })];
  for (const s of a(this, de, "f").filter((n) => !t.includes(n))) s.classList.remove("-before"), s.classList.remove("-after"), s.removeAttribute("inert");
  b(this, de, t, "f"), a(this, Qe, "m", Ms).call(this);
};
Ms = function() {
  const e = this.selectedIndex ?? a(this, de, "f").length;
  for (let t = 0; t < a(this, de, "f").length; t++) {
    const s = a(this, de, "f")[t];
    s.classList.toggle("-before", t < e), s.classList.toggle("-after", t > e), s.toggleAttribute("inert", t !== e);
  }
};
Ut.styles = F`:host { display: flex; position: relative; overflow: hidden; } ::slotted(*) { width: 100%; top: 0; transition: ${r(`inset-inline-start var(--m3e-slide-animation-duration, ${c.motion.duration.long2}) ${c.motion.easing.standard},
        visibility var(--m3e-slide-animation-duration, ${c.motion.duration.long2}) ${c.motion.easing.standard} allow-discrete`)}; } ::slotted(.-before), ::slotted(.-after) { visibility: hidden; position: absolute; } ::slotted(.-before) { inset-inline-start: -100%; } ::slotted(.-after) { inset-inline-start: 100%; } ::slotted(:not(.-before):not(.-after)) { position: relative; inset-inline-start: 0; } :host(:is(:state(--no-animate), :--no-animate)) ::slotted(*) { transition: none; } @media (prefers-reduced-motion) { ::slotted(*) { transition: none; } }`;
f([x({ attribute: "selected-index", type: Number, reflect: true })], Ut.prototype, "selectedIndex", void 0);
Ut = f([O("m3e-slide")], Ut);
const fe = { hoverColor: r(`var(--m3e-state-layer-hover-color, ${c.color.onSurface})`), hoverOpacity: r(`var(--m3e-state-layer-hover-opacity, ${c.state.hoverStateLayerOpacity})`), focusColor: r(`var(--m3e-state-layer-focus-color, ${c.color.onSurface})`), focusOpacity: r(`var(--m3e-state-layer-focus-opacity, ${c.state.focusStateLayerOpacity})`), duration: r(`var(--m3e-state-layer-duration, ${c.motion.duration.medium1})`), easing: r(`var(--m3e-state-layer-easing, ${c.motion.easing.standard})`) };
var Ht, Tt, Ft, Si, Mi;
let ze = class extends Kt(He(S, "none")) {
  constructor() {
    super(...arguments), Ht.add(this), Tt.set(this, new oi(this, { target: null, callback: (e) => a(this, Ht, "m", Si).call(this, e) })), Ft.set(this, new Nt(this, { target: null, callback: (e, t) => a(this, Ht, "m", Mi).call(this, t) })), this.disabled = false, this.disableHover = false;
  }
  show(e) {
    this._layer?.classList.toggle(e, true);
  }
  hide(e) {
    this._layer?.classList.toggle(e, false);
  }
  attach(e) {
    super.attach(e), a(this, Tt, "f").observe(e), a(this, Ft, "f").observe(e);
  }
  detach() {
    this.control && (a(this, Tt, "f").unobserve(this.control), a(this, Ft, "f").unobserve(this.control)), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.hide("hover"), this.hide("focused");
  }
  updated(e) {
    super.updated(e), e.has("disabled") && this.disabled && (this.hide("hover"), this.hide("focused")), e.has("disableHover") && this.disableHover && this.hide("hover");
  }
  render() {
    return T`<div class="layer"></div>`;
  }
};
Tt = /* @__PURE__ */ new WeakMap();
Ft = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakSet();
Si = function(e) {
  !this.disabled && !this.disableHover && (e ? this.show("hover") : this.hide("hover"));
};
Mi = function(e) {
  this.disabled || (e ? this.show("focused") : this.hide("focused"));
};
ze.styles = F`:host { display: block; } :host, .layer { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .layer { contain: layout style paint; will-change: background-color; transition: ${r(`background-color ${fe.duration} ${fe.easing}`)}; } .layer.focused { background-color: color-mix(in srgb, ${fe.focusColor} ${fe.focusOpacity}, transparent); } .layer.hover { background-color: color-mix(in srgb, ${fe.hoverColor} ${fe.hoverOpacity}, transparent); } @media (prefers-reduced-motion) { .layer { transition: none; } } @media (forced-colors: active) { .layer { display: none; } }`;
f([Cs(".layer")], ze.prototype, "_layer", void 0);
f([x({ type: Boolean, reflect: true })], ze.prototype, "disabled", void 0);
f([x({ attribute: "disable-hover", type: Boolean, reflect: true })], ze.prototype, "disableHover", void 0);
ze = f([O("m3e-state-layer")], ze);
var V, st, R, ie, fs, Ai, vs, ys;
let X = ys = class extends S {
  constructor() {
    super(), V.add(this), st.set(this, `m3e-text-highlight-${ys.__nextId++}`), R.set(this, new Array()), ie.set(this, null), this.disabled = false, this.term = "", this.caseSensitive = false, this.mode = "contains", this.isSupported && (b(this, ie, new CSSStyleSheet(), "f"), a(this, ie, "f").replaceSync(F`::highlight(${r(a(this, st, "f"))}) { background-color: var(--m3e-text-highlight-container-color, ${c.color.secondaryContainer}); color: var(--m3e-text-highlight-color, ${c.color.onSecondaryContainer}); text-decoration: var(--m3e-text-highlight-decoration); text-shadow: var(--m3e-text-highlight-shadow); }`.toString()));
  }
  get isSupported() {
    return !!CSS.highlights;
  }
  get ranges() {
    return a(this, R, "f");
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.shadowRoot && a(this, ie, "f") && !this.shadowRoot.adoptedStyleSheets.includes(a(this, ie, "f")) && this.shadowRoot.adoptedStyleSheets.push(a(this, ie, "f"));
  }
  updated(e) {
    super.updated(e), (e.has("term") || e.has("caseSensitive") || e.has("disabled")) && a(this, V, "m", vs).call(this);
  }
  render() {
    return T`<slot @slotchange="${a(this, V, "m", vs)}"></slot>`;
  }
};
st = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakSet();
fs = function(e) {
  return !/^\s*$/.test(e.data);
};
Ai = function i(e, t) {
  e instanceof HTMLSlotElement ? e.assignedNodes({ flatten: true }).forEach((s) => {
    switch (s.nodeType) {
      case Node.TEXT_NODE:
        a(this, V, "m", fs).call(this, s) && t.push(s);
        break;
      case Node.ELEMENT_NODE:
        a(this, V, "m", i).call(this, s, t);
        break;
    }
  }) : e.childNodes.forEach((s) => {
    switch (s.nodeType) {
      case Node.TEXT_NODE:
        a(this, V, "m", fs).call(this, s) && t.push(s);
        break;
      case Node.ELEMENT_NODE:
        a(this, V, "m", i).call(this, s, t);
        break;
    }
  });
};
vs = function() {
  if (!this.isSupported || !this.isConnected || (CSS.highlights.delete(a(this, st, "f")), a(this, R, "f").length = 0, this.disabled)) return;
  if (!this.term) {
    this.dispatchEvent(new CustomEvent("highlight", { detail: [...a(this, R, "f")], bubbles: false, composed: false }));
    return;
  }
  const e = new Array();
  if (a(this, V, "m", Ai).call(this, this, e), e.length > 0) {
    const t = this.caseSensitive ? this.term : this.term.toLowerCase();
    switch (this.mode) {
      case "starts-with":
        {
          const s = e[0];
          if (((this.caseSensitive ? s.textContent : s.textContent?.toLowerCase()) ?? "").startsWith(t)) {
            const o = new Range();
            o.setStart(s, 0), o.setEnd(s, t.length), a(this, R, "f").push(o);
          }
        }
        break;
      case "ends-with":
        {
          const s = e[e.length - 1], n = (this.caseSensitive ? s.textContent : s.textContent?.toLowerCase()) ?? "";
          if (n.endsWith(t)) {
            const o = n.length - t.length, l = o + t.length, d = new Range();
            d.setStart(s, o), d.setEnd(s, l), a(this, R, "f").push(d);
          }
        }
        break;
      case "contains":
        b(this, R, e.map((s) => ({ el: s, text: (this.caseSensitive ? s.textContent : s.textContent?.toLowerCase()) ?? "" })).map(({ el: s, text: n }) => {
          const o = new Array();
          let l = 0;
          for (; l < n.length; ) {
            const d = n.indexOf(t, l);
            if (d === -1) break;
            o.push(d), l = d + t.length;
          }
          return o.map((d) => {
            const u = new Range();
            return u.setStart(s, d), u.setEnd(s, d + t.length), u;
          });
        }).flat(), "f");
        break;
    }
    a(this, R, "f").length > 0 && CSS.highlights.set(a(this, st, "f"), new Highlight(...a(this, R, "f")));
  }
  this.dispatchEvent(new CustomEvent("highlight", { detail: [...a(this, R, "f")], bubbles: false, composed: false }));
};
X.styles = F`:host { display: contents; }`;
X.__nextId = 0;
f([x({ type: Boolean, reflect: true })], X.prototype, "disabled", void 0);
f([x()], X.prototype, "term", void 0);
f([x({ attribute: "case-sensitive", type: Boolean })], X.prototype, "caseSensitive", void 0);
f([x()], X.prototype, "mode", void 0);
X = ys = f([O("m3e-text-highlight")], X);
let gs = class extends S {
  render() {
    return T`<span class="base"><slot></slot></span>`;
  }
};
gs.styles = F`:host { flex: 1 1 auto; display: inline-flex; align-items: center; flex-wrap: nowrap; min-width: 0; } .base { flex: 1 1 auto; display: inline; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`;
gs = f([O("m3e-text-overflow")], gs);
export {
  Es as A,
  yi as B,
  Vn as C,
  c as D,
  Nn as E,
  jn as F,
  Ys as G,
  oi as H,
  qn as K,
  Xn as L,
  ui as P,
  He as R,
  Un as T,
  a as _,
  Kn as a,
  In as b,
  gi as c,
  S as d,
  Rn as e,
  Nt as f,
  w as g,
  rt as h,
  F as i,
  Hn as j,
  T as k,
  P as l,
  Wn as m,
  q as n,
  f as o,
  Yt as p,
  Cs as q,
  r,
  Ot as s,
  x as t,
  mi as u,
  O as v,
  Dn as w,
  Yn as x,
  Bn as y,
  On as z
};
