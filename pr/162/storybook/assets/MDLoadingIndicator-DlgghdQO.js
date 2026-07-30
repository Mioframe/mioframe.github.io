import { d as wi, f as $i, k as ki, b as Kt, o as Ei } from "./iframe-Dbwnn8Sj.js";
import { _ as Si } from "./_plugin-vue_export-helper-DlAUqK2U.js";
function f(o2, e, t, s) {
  var n = arguments.length, r = n < 3 ? e : s === null ? s = Object.getOwnPropertyDescriptor(e, t) : s, l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") r = Reflect.decorate(o2, e, t, s);
  else for (var p = o2.length - 1; p >= 0; p--) (l = o2[p]) && (r = (n < 3 ? l(r) : n > 3 ? l(e, t, r) : l(e, t)) || r);
  return n > 3 && r && Object.defineProperty(e, t, r), r;
}
function a(o2, e, t, s) {
  if (t === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? o2 !== e || !s : !e.has(o2)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? s : t === "a" ? s.call(o2) : s ? s.value : e.get(o2);
}
function b(o2, e, t, s, n) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? o2 !== e || !n : !e.has(o2)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return s === "a" ? n.call(o2, t) : n ? n.value = t : e.set(o2, t), t;
}
const ct = globalThis, ms = ct.ShadowRoot && (ct.ShadyCSS === void 0 || ct.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, us = /* @__PURE__ */ Symbol(), _s = /* @__PURE__ */ new WeakMap();
let Bs = class {
  constructor(e, t, s) {
    if (this._$cssResult$ = true, s !== us) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ms && e === void 0) {
      const s = t !== void 0 && t.length === 1;
      s && (e = _s.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && _s.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const i = (o2) => new Bs(typeof o2 == "string" ? o2 : o2 + "", void 0, us), A = (o2, ...e) => {
  const t = o2.length === 1 ? o2[0] : e.reduce((s, n, r) => s + ((l) => {
    if (l._$cssResult$ === true) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + o2[r + 1], o2[0]);
  return new Bs(t, o2, us);
}, Mi = (o2, e) => {
  if (ms) o2.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const s = document.createElement("style"), n = ct.litNonce;
    n !== void 0 && s.setAttribute("nonce", n), s.textContent = t.cssText, o2.appendChild(s);
  }
}, Cs = ms ? (o2) => o2 : (o2) => o2 instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const s of e.cssRules) t += s.cssText;
  return i(t);
})(o2) : o2;
const { is: Li, defineProperty: Ai, getOwnPropertyDescriptor: zi, getOwnPropertyNames: Hi, getOwnPropertySymbols: Ti, getPrototypeOf: Fi } = Object, Wt = globalThis, ws = Wt.trustedTypes, Pi = ws ? ws.emptyScript : "", Di = Wt.reactiveElementPolyfillSupport, Ne = (o2, e) => o2, Ht = { toAttribute(o2, e) {
  switch (e) {
    case Boolean:
      o2 = o2 ? Pi : null;
      break;
    case Object:
    case Array:
      o2 = o2 == null ? o2 : JSON.stringify(o2);
  }
  return o2;
}, fromAttribute(o2, e) {
  let t = o2;
  switch (e) {
    case Boolean:
      t = o2 !== null;
      break;
    case Number:
      t = o2 === null ? null : Number(o2);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(o2);
      } catch {
        t = null;
      }
  }
  return t;
} }, fs = (o2, e) => !Li(o2, e), $s = { attribute: true, type: String, converter: Ht, reflect: false, useDefault: false, hasChanged: fs };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), Wt.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let ve = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = $s) {
    if (t.state && (t.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = true), this.elementProperties.set(e, t), !t.noAccessor) {
      const s = /* @__PURE__ */ Symbol(), n = this.getPropertyDescriptor(e, s, t);
      n !== void 0 && Ai(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, s) {
    const { get: n, set: r } = zi(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get: n, set(l) {
      const p = n?.call(this);
      r?.call(this, l), this.requestUpdate(e, p, s);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? $s;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ne("elementProperties"))) return;
    const e = Fi(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ne("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(Ne("properties"))) {
      const t = this.properties, s = [...Hi(t), ...Ti(t)];
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
      for (const n of s) t.unshift(Cs(n));
    } else e !== void 0 && t.push(Cs(e));
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
    return Mi(e, this.constructor.elementStyles), e;
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
      const r = (s.converter?.toAttribute !== void 0 ? s.converter : Ht).toAttribute(t, s.type);
      this._$Em = e, r == null ? this.removeAttribute(n) : this.setAttribute(n, r), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const s = this.constructor, n = s._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const r = s.getPropertyOptions(n), l = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : Ht;
      this._$Em = n;
      const p = l.fromAttribute(t, r.type);
      this[n] = p ?? this._$Ej?.get(n) ?? p, this._$Em = null;
    }
  }
  requestUpdate(e, t, s, n = false, r) {
    if (e !== void 0) {
      const l = this.constructor;
      if (n === false && (r = this[e]), s ??= l.getPropertyOptions(e), !((s.hasChanged ?? fs)(r, t) || s.useDefault && s.reflect && r === this._$Ej?.get(e) && !this.hasAttribute(l._$Eu(e, s)))) return;
      this.C(e, t, s);
    }
    this.isUpdatePending === false && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: s, reflect: n, wrapped: r }, l) {
    s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, l ?? t ?? this[e]), r !== true || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (t = void 0), this._$AL.set(e, t)), n === true && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
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
        for (const [n, r] of this._$Ep) this[n] = r;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [n, r] of s) {
        const { wrapped: l } = r, p = this[n];
        l !== true || this._$AL.has(n) || p === void 0 || this.C(n, void 0, r, p);
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
ve.elementStyles = [], ve.shadowRootOptions = { mode: "open" }, ve[Ne("elementProperties")] = /* @__PURE__ */ new Map(), ve[Ne("finalized")] = /* @__PURE__ */ new Map(), Di?.({ ReactiveElement: ve }), (Wt.reactiveElementVersions ??= []).push("2.1.2");
const vs = globalThis, ks = (o2) => o2, Tt = vs.trustedTypes, Es = Tt ? Tt.createPolicy("lit-html", { createHTML: (o2) => o2 }) : void 0, Us = "$lit$", K = `lit$${Math.random().toFixed(9).slice(2)}$`, Ns = "?" + K, Wi = `<${Ns}>`, ce = document, Ye = () => ce.createComment(""), Ge = (o2) => o2 === null || typeof o2 != "object" && typeof o2 != "function", ys = Array.isArray, Ri = (o2) => ys(o2) || typeof o2?.[Symbol.iterator] == "function", jt = `[ 	
\f\r]`, He = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ss = /-->/g, Ms = />/g, Z = RegExp(`>|${jt}(?:([^\\s"'>=/]+)(${jt}*=${jt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ls = /'/g, As = /"/g, Ks = /^(?:script|style|textarea|title)$/i, Ii = (o2) => (e, ...t) => ({ _$litType$: o2, strings: e, values: t }), L = Ii(1), $e = /* @__PURE__ */ Symbol.for("lit-noChange"), C = /* @__PURE__ */ Symbol.for("lit-nothing"), zs = /* @__PURE__ */ new WeakMap(), ne = ce.createTreeWalker(ce, 129);
function js(o2, e) {
  if (!ys(o2) || !o2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Es !== void 0 ? Es.createHTML(e) : e;
}
const Oi = (o2, e) => {
  const t = o2.length - 1, s = [];
  let n, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = He;
  for (let p = 0; p < t; p++) {
    const m = o2[p];
    let u, v, d = -1, g = 0;
    for (; g < m.length && (l.lastIndex = g, v = l.exec(m), v !== null); ) g = l.lastIndex, l === He ? v[1] === "!--" ? l = Ss : v[1] !== void 0 ? l = Ms : v[2] !== void 0 ? (Ks.test(v[2]) && (n = RegExp("</" + v[2], "g")), l = Z) : v[3] !== void 0 && (l = Z) : l === Z ? v[0] === ">" ? (l = n ?? He, d = -1) : v[1] === void 0 ? d = -2 : (d = l.lastIndex - v[2].length, u = v[1], l = v[3] === void 0 ? Z : v[3] === '"' ? As : Ls) : l === As || l === Ls ? l = Z : l === Ss || l === Ms ? l = He : (l = Z, n = void 0);
    const y = l === Z && o2[p + 1].startsWith("/>") ? " " : "";
    r += l === He ? m + Wi : d >= 0 ? (s.push(u), m.slice(0, d) + Us + m.slice(d) + K + y) : m + K + (d === -2 ? p : y);
  }
  return [js(o2, r + (o2[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
};
class Qe {
  constructor({ strings: e, _$litType$: t }, s) {
    let n;
    this.parts = [];
    let r = 0, l = 0;
    const p = e.length - 1, m = this.parts, [u, v] = Oi(e, t);
    if (this.el = Qe.createElement(u, s), ne.currentNode = this.el.content, t === 2 || t === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (n = ne.nextNode()) !== null && m.length < p; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const d of n.getAttributeNames()) if (d.endsWith(Us)) {
          const g = v[l++], y = n.getAttribute(d).split(K), w = /([.?@])?(.*)/.exec(g);
          m.push({ type: 1, index: r, name: w[2], strings: y, ctor: w[1] === "." ? Ui : w[1] === "?" ? Ni : w[1] === "@" ? Ki : Rt }), n.removeAttribute(d);
        } else d.startsWith(K) && (m.push({ type: 6, index: r }), n.removeAttribute(d));
        if (Ks.test(n.tagName)) {
          const d = n.textContent.split(K), g = d.length - 1;
          if (g > 0) {
            n.textContent = Tt ? Tt.emptyScript : "";
            for (let y = 0; y < g; y++) n.append(d[y], Ye()), ne.nextNode(), m.push({ type: 2, index: ++r });
            n.append(d[g], Ye());
          }
        }
      } else if (n.nodeType === 8) if (n.data === Ns) m.push({ type: 2, index: r });
      else {
        let d = -1;
        for (; (d = n.data.indexOf(K, d + 1)) !== -1; ) m.push({ type: 7, index: r }), d += K.length - 1;
      }
      r++;
    }
  }
  static createElement(e, t) {
    const s = ce.createElement("template");
    return s.innerHTML = e, s;
  }
}
function ke(o2, e, t = o2, s) {
  if (e === $e) return e;
  let n = s !== void 0 ? t._$Co?.[s] : t._$Cl;
  const r = Ge(e) ? void 0 : e._$litDirective$;
  return n?.constructor !== r && (n?._$AO?.(false), r === void 0 ? n = void 0 : (n = new r(o2), n._$AT(o2, t, s)), s !== void 0 ? (t._$Co ??= [])[s] = n : t._$Cl = n), n !== void 0 && (e = ke(o2, n._$AS(o2, e.values), n, s)), e;
}
class Bi {
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
    ne.currentNode = n;
    let r = ne.nextNode(), l = 0, p = 0, m = s[0];
    for (; m !== void 0; ) {
      if (l === m.index) {
        let u;
        m.type === 2 ? u = new nt(r, r.nextSibling, this, e) : m.type === 1 ? u = new m.ctor(r, m.name, m.strings, this, e) : m.type === 6 && (u = new ji(r, this, e)), this._$AV.push(u), m = s[++p];
      }
      l !== m?.index && (r = ne.nextNode(), l++);
    }
    return ne.currentNode = ce, n;
  }
  p(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
}
class nt {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, s, n) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = n, this._$Cv = n?.isConnected ?? true;
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
    e = ke(this, e, t), Ge(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== $e && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Ri(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && Ge(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ce.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: s } = e, n = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = Qe.createElement(js(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === n) this._$AH.p(t);
    else {
      const r = new Bi(n, this), l = r.u(this.options);
      r.p(t), this.T(l), this._$AH = r;
    }
  }
  _$AC(e) {
    let t = zs.get(e.strings);
    return t === void 0 && zs.set(e.strings, t = new Qe(e)), t;
  }
  k(e) {
    ys(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, n = 0;
    for (const r of e) n === t.length ? t.push(s = new nt(this.O(Ye()), this.O(Ye()), this, this.options)) : s = t[n], s._$AI(r), n++;
    n < t.length && (this._$AR(s && s._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(false, true, t); e !== this._$AB; ) {
      const s = ks(e).nextSibling;
      ks(e).remove(), e = s;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}
class Rt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, s, n, r) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = C;
  }
  _$AI(e, t = this, s, n) {
    const r = this.strings;
    let l = false;
    if (r === void 0) e = ke(this, e, t, 0), l = !Ge(e) || e !== this._$AH && e !== $e, l && (this._$AH = e);
    else {
      const p = e;
      let m, u;
      for (e = r[0], m = 0; m < r.length - 1; m++) u = ke(this, p[s + m], t, m), u === $e && (u = this._$AH[m]), l ||= !Ge(u) || u !== this._$AH[m], u === C ? e = C : e !== C && (e += (u ?? "") + r[m + 1]), this._$AH[m] = u;
    }
    l && !n && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Ui extends Rt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class Ni extends Rt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class Ki extends Rt {
  constructor(e, t, s, n, r) {
    super(e, t, s, n, r), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ke(this, e, t, 0) ?? C) === $e) return;
    const s = this._$AH, n = e === C && s !== C || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, r = e !== C && (s === C || n);
    n && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ji {
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
const Vi = vs.litHtmlPolyfillSupport;
Vi?.(Qe, nt), (vs.litHtmlVersions ??= []).push("3.3.3");
const qi = (o2, e, t) => {
  const s = t?.renderBefore ?? e;
  let n = s._$litPart$;
  if (n === void 0) {
    const r = t?.renderBefore ?? null;
    s._$litPart$ = n = new nt(e.insertBefore(Ye(), r), r, void 0, t ?? {});
  }
  return n._$AI(o2), n;
};
const gs = globalThis;
class E extends ve {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = qi(t, this.renderRoot, this.renderOptions);
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
E._$litElement$ = true, E.finalized = true, gs.litElementHydrateSupport?.({ LitElement: E });
const Zi = gs.litElementPolyfillSupport;
Zi?.({ LitElement: E });
(gs.litElementVersions ??= []).push("4.2.2");
const Xi = { attribute: true, type: String, converter: Ht, reflect: false, hasChanged: fs }, Yi = (o2 = Xi, e, t) => {
  const { kind: s, metadata: n } = t;
  let r = globalThis.litPropertyMetadata.get(n);
  if (r === void 0 && globalThis.litPropertyMetadata.set(n, r = /* @__PURE__ */ new Map()), s === "setter" && ((o2 = Object.create(o2)).wrapped = true), r.set(t.name, o2), s === "accessor") {
    const { name: l } = t;
    return { set(p) {
      const m = e.get.call(this);
      e.set.call(this, p), this.requestUpdate(l, m, o2, true, p);
    }, init(p) {
      return p !== void 0 && this.C(l, void 0, o2, p), p;
    } };
  }
  if (s === "setter") {
    const { name: l } = t;
    return function(p) {
      const m = this[l];
      e.call(this, p), this.requestUpdate(l, m, o2, true, p);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function x(o2) {
  return (e, t) => typeof t == "object" ? Yi(o2, e, t) : ((s, n, r) => {
    const l = n.hasOwnProperty(r);
    return n.constructor.createProperty(r, s), l ? Object.getOwnPropertyDescriptor(n, r) : void 0;
  })(o2, e, t);
}
const Gi = (o2, e, t) => (t.configurable = true, t.enumerable = true, Reflect.decorate && typeof e != "object" && Object.defineProperty(o2, e, t), t);
function It(o2, e) {
  return (t, s, n) => {
    const r = (l) => l.renderRoot?.querySelector(o2) ?? null;
    return Gi(t, s, { get() {
      return r(this);
    } });
  };
}
const Vt = (o2) => o2 ?? C;
var Fe, Pe, I;
class ot {
  constructor(e, t) {
    Fe.set(this, void 0), Pe.set(this, void 0), I.set(this, /* @__PURE__ */ new Set()), b(this, Fe, e, "f"), b(this, Pe, t.target, "f"), a(this, Fe, "f").addController(this);
  }
  get targets() {
    return a(this, I, "f").values();
  }
  get hasTargets() {
    return a(this, I, "f").size > 0;
  }
  hostConnected() {
    a(this, Pe, "f") !== null && this.observe(a(this, Pe, "f") ?? a(this, Fe, "f"));
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
Fe = /* @__PURE__ */ new WeakMap(), Pe = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap();
function Qi() {
  return matchMedia("(forced-colors: active)").matches;
}
function Hs(o2, e, t) {
  return o2 + (e - o2) * t;
}
function Ts(o2, e, t, s) {
  const n = Math.pow(1 - s, 2) * o2.x + 2 * (1 - s) * s * e.x + Math.pow(s, 2) * t.x, r = Math.pow(1 - s, 2) * o2.y + 2 * (1 - s) * s * e.y + Math.pow(s, 2) * t.y;
  return { x: n, y: r };
}
function Fs(o2, e, t, s, n) {
  const r = Math.pow(1 - n, 3) * o2.x + 3 * Math.pow(1 - n, 2) * n * e.x + 3 * (1 - n) * Math.pow(n, 2) * t.x + Math.pow(n, 3) * s.x, l = Math.pow(1 - n, 3) * o2.y + 3 * Math.pow(1 - n, 2) * n * e.y + 3 * (1 - n) * Math.pow(n, 2) * t.y + Math.pow(n, 3) * s.y;
  return { x: r, y: l };
}
function Ji(o2) {
  return (o2.match(/[a-zA-Z][^a-zA-Z]*/g) || []).map((t) => {
    const s = t[0], n = t.slice(1).trim().split(/[\s,]+/).filter(Boolean).map(Number);
    return { type: s, nums: n };
  });
}
function en(o2, e) {
  const t = Ji(o2);
  let s = { x: 0, y: 0 }, n = { x: 0, y: 0 };
  const r = [];
  for (const d of t) if (d.type === "M") s = { x: d.nums[0], y: d.nums[1] }, n = s;
  else if (d.type === "L") {
    const g = { x: d.nums[0], y: d.nums[1] }, y = g.x - s.x, w = g.y - s.y;
    r.push({ type: "L", pts: [s, g], length: Math.hypot(y, w) }), s = g;
  } else if (d.type === "H") {
    const g = { x: d.nums[0], y: s.y }, y = g.x - s.x;
    r.push({ type: "L", pts: [s, g], length: Math.abs(y) }), s = g;
  } else if (d.type === "V") {
    const g = { x: s.x, y: d.nums[0] }, y = g.y - s.y;
    r.push({ type: "L", pts: [s, g], length: Math.abs(y) }), s = g;
  } else if (d.type === "Q") {
    const g = { x: d.nums[0], y: d.nums[1] }, y = { x: d.nums[2], y: d.nums[3] };
    let w = 0, z = s;
    const H = 20;
    for (let R = 1; R <= H; R++) {
      const q = R / H, ze = Ts(s, g, y, q);
      w += Math.hypot(ze.x - z.x, ze.y - z.y), z = ze;
    }
    r.push({ type: "Q", pts: [s, g, y], length: w }), s = y;
  } else if (d.type === "C") {
    const g = { x: d.nums[0], y: d.nums[1] }, y = { x: d.nums[2], y: d.nums[3] }, w = { x: d.nums[4], y: d.nums[5] };
    let z = 0, H = s;
    const R = 20;
    for (let q = 1; q <= R; q++) {
      const ze = q / R, Nt = Fs(s, g, y, w, ze);
      z += Math.hypot(Nt.x - H.x, Nt.y - H.y), H = Nt;
    }
    r.push({ type: "C", pts: [s, g, y, w], length: z }), s = w;
  } else if (d.type === "Z") {
    const g = n.x - s.x, y = n.y - s.y;
    r.push({ type: "L", pts: [s, n], length: Math.hypot(g, y) }), s = n;
  }
  const p = r.reduce((d, g) => d + g.length, 0) / (e - 1), m = [];
  let u = 0, v = 0;
  for (let d = 0; d < e; d++) {
    const g = d * p;
    for (; v < r.length && u + r[v].length < g; ) u += r[v].length, v++;
    const y = r[v];
    if (!y) break;
    const w = (g - u) / y.length;
    if (y.type === "L") {
      const [z, H] = y.pts;
      m.push({ x: Hs(z.x, H.x, w), y: Hs(z.y, H.y, w) });
    } else if (y.type === "Q") {
      const [z, H, R] = y.pts;
      m.push(Ts(z, H, R, w));
    } else if (y.type === "C") {
      const [z, H, R, q] = y.pts;
      m.push(Fs(z, H, R, q, w));
    }
  }
  return m;
}
function tn(o2) {
  return `${o2.map((t) => {
    const s = Ps(t.x * 100, 0, 100), n = Ps(t.y * 100, 0, 100);
    return `${s.toFixed(2)}% ${n.toFixed(2)}%`;
  }).join(", ")}`;
}
function Ps(o2, e, t) {
  return Math.max(e, Math.min(t, o2));
}
function sn(o2) {
  let e = 1 / 0, t = 1 / 0, s = -1 / 0, n = -1 / 0;
  for (const r of o2) r.x < e && (e = r.x), r.x > s && (s = r.x), r.y < t && (t = r.y), r.y > n && (n = r.y);
  return { minX: e, minY: t, maxX: s, maxY: n, width: s - e, height: n - t };
}
function nn(o2, e) {
  const t = o2.length, s = new Array(t);
  for (let n = 0; n < t; n++) s[n] = o2[(n + e) % t];
  return s;
}
function on(o2, e) {
  const t = Math.min(e.length, o2.length);
  let s = 0, n = 1 / 0;
  for (let r = 0; r < t; r++) {
    let l = 0;
    for (let p = 0; p < t; p++) {
      const m = e[(p + r) % t], u = o2[p], v = m.x - u.x, d = m.y - u.y;
      if (l += v * v + d * d, l >= n) break;
    }
    l < n && (n = l, s = r);
  }
  return s;
}
function Ds(o2) {
  let e = 0;
  const t = o2.length;
  for (let s = 0; s < t; s++) {
    const n = o2[s], r = o2[(s + 1) % t];
    e += n.x * r.y - r.x * n.y;
  }
  return e / 2;
}
function an(o2) {
  const e = o2.map((n) => {
    const r = sn(n), l = n.map((y) => ({ x: y.x - r.minX, y: y.y - r.minY })), p = Math.max(r.width, r.height) || 1, m = l.map((y) => ({ x: y.x / p, y: y.y / p })), u = r.width / p, v = r.height / p, d = (1 - u) / 2, g = (1 - v) / 2;
    return m.map((y) => ({ x: y.x + d, y: y.y + g }));
  }), t = e[0], s = Math.sign(Ds(t));
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    const l = Math.sign(Ds(r));
    l !== 0 && l !== s && (r = r.slice().reverse());
    const p = on(t, r);
    e[n] = nn(r, p);
  }
  return e;
}
function rn(o2, e) {
  return an(o2.map((t) => en(t, e))).map((t) => tn(t));
}
function Bn(o2) {
  return o2.assignedNodes({ flatten: true }).length > 0;
}
function qt() {
  return matchMedia("(prefers-reduced-motion)").matches;
}
function ln(o2, e = document) {
  return new Promise((t) => {
    const s = e.querySelector(`#${o2}`);
    if (s) {
      t(s);
      return;
    }
    if (document.readyState === "complete" || document.readyState === "interactive") {
      t(e.querySelector(`#${o2}`));
      return;
    }
    document.addEventListener("DOMContentLoaded", () => t(e.querySelector(`#${o2}`)), { once: true });
  });
}
var xe, oe, Ce, Ke, _e, dt, ht, pt, mt, ye, Ft, Vs, ss, qs;
class Ot extends ot {
  constructor(e, t) {
    super(e, t), xe.add(this), Ce.set(this, false), Ke.set(this, void 0), _e.set(this, void 0), dt.set(this, (s) => a(this, xe, "m", Vs).call(this, s)), ht.set(this, (s) => a(this, xe, "m", ss).call(this, s)), pt.set(this, (s) => a(this, xe, "m", qs).call(this, s)), mt.set(this, () => b(this, Ce, true, "f")), ye.set(this, () => b(this, Ce, false, "f")), b(this, Ke, t.callback, "f"), b(this, _e, t.filter, "f");
  }
  _observe(e) {
    e.addEventListener("keydown", a(this, dt, "f")), e.addEventListener("focusin", a(this, ht, "f")), e.addEventListener("focusout", a(this, pt, "f")), e.addEventListener("touchstart", a(this, mt, "f"), { passive: true }), e.addEventListener("touchend", a(this, ye, "f")), e.addEventListener("touchcancel", a(this, ye, "f"));
  }
  _unobserve(e) {
    e.removeEventListener("keydown", a(this, dt, "f")), e.removeEventListener("focusin", a(this, ht, "f")), e.removeEventListener("focusout", a(this, pt, "f")), e.removeEventListener("touchstart", a(this, mt, "f")), e.removeEventListener("touchend", a(this, ye, "f")), e.removeEventListener("touchcancel", a(this, ye, "f"));
  }
}
oe = Ot, Ce = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap(), ye = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakSet(), Vs = function(e) {
  if (a(this, _e, "f")?.call(this, e)) return;
  e.currentTarget.matches(":focus-within") && a(this, xe, "m", ss).call(this, e);
}, ss = function(e) {
  if (a(this, _e, "f")?.call(this, e) || a(this, Ce, "f")) return;
  const t = e.currentTarget;
  a(this, Ke, "f").call(this, true, t.matches(":focus-visible") || a(oe, oe, "f", Ft) || Qi(), t);
}, qs = function(e) {
  a(this, _e, "f")?.call(this, e) || a(this, Ce, "f") || a(this, Ke, "f").call(this, false, false, e.currentTarget);
};
typeof window < "u" && (window.addEventListener("keydown", () => b(oe, oe, true, "f", Ft), { capture: true, passive: true }), window.addEventListener("pointerdown", () => b(oe, oe, false, "f", Ft), { capture: true }));
Ft = { value: false };
var F, ie, G, Q, ut, ge, is, at, rt, Zs, Xs;
class Ys extends ot {
  constructor(e, t) {
    super(e, t), F.add(this), ie.set(this, void 0), G.set(this, /* @__PURE__ */ new Map()), Q.set(this, /* @__PURE__ */ new Map()), ut.set(this, (s) => a(this, F, "m", Zs).call(this, s)), ge.set(this, (s) => a(this, F, "m", Xs).call(this, s)), b(this, ie, t.callback, "f"), this.startDelay = t.startDelay ?? 0, this.endDelay = t.endDelay ?? 0;
  }
  clearDelays() {
    for (const e of this.targets) a(this, F, "m", is).call(this, e);
  }
  _observe(e) {
    e.addEventListener("pointerenter", a(this, ut, "f")), e.addEventListener("pointerleave", a(this, ge, "f")), e.addEventListener("touchend", a(this, ge, "f"));
  }
  _unobserve(e) {
    e.removeEventListener("pointerenter", a(this, ut, "f")), e.removeEventListener("pointerleave", a(this, ge, "f")), e.removeEventListener("touchend", a(this, ge, "f")), a(this, F, "m", is).call(this, e);
  }
}
ie = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), ge = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakSet(), is = function(e) {
  a(this, F, "m", at).call(this, e), a(this, F, "m", rt).call(this, e);
}, at = function(e) {
  return a(this, G, "f").has(e) ? (clearTimeout(a(this, G, "f").get(e)), a(this, G, "f").delete(e)) : false;
}, rt = function(e) {
  return a(this, Q, "f").has(e) ? (clearTimeout(a(this, Q, "f").get(e)), a(this, Q, "f").delete(e)) : false;
}, Zs = function(e) {
  const t = e.target;
  a(this, F, "m", rt).call(this, t), this.startDelay > 0 ? (a(this, F, "m", at).call(this, t), a(this, G, "f").set(t, setTimeout(() => {
    a(this, G, "f").delete(t), a(this, ie, "f").call(this, true, t);
  }, this.startDelay))) : a(this, ie, "f").call(this, true, t);
}, Xs = function(e) {
  const t = e.target;
  a(this, F, "m", at).call(this, t) || (this.endDelay > 0 ? (a(this, F, "m", rt).call(this, t), a(this, Q, "f").set(t, setTimeout(() => {
    a(this, Q, "f").delete(t), a(this, ie, "f").call(this, false, t);
  }, this.endDelay))) : a(this, ie, "f").call(this, false, t));
};
var U, S, B, je, ae, M, Ve, ft, vt, be, yt, gt, Gs, Qs, Js, ei, ti, Zt;
class si extends ot {
  constructor(e, t) {
    super(e, t), U.add(this), S.set(this, void 0), B.set(this, void 0), je.set(this, void 0), ae.set(this, void 0), M.set(this, /* @__PURE__ */ new Map()), Ve.set(this, void 0), ft.set(this, (s) => a(this, U, "m", Gs).call(this, s)), vt.set(this, (s) => a(this, U, "m", Qs).call(this, s)), be.set(this, (s) => a(this, U, "m", Js).call(this, s)), yt.set(this, (s) => a(this, U, "m", ei).call(this, s)), gt.set(this, (s) => a(this, U, "m", ti).call(this, s)), b(this, S, t.capture, "f"), b(this, B, t.callback, "f"), b(this, je, t.filter, "f"), b(this, ae, t.isPressedKey, "f"), b(this, Ve, t.minPressedDuration ?? 0, "f");
  }
  hostConnected() {
    document.addEventListener("pointerup", a(this, vt, "f"), { capture: a(this, S, "f") }), document.addEventListener("touchend", a(this, be, "f"), { capture: a(this, S, "f") }), document.addEventListener("touchcancel", a(this, be, "f"), { capture: a(this, S, "f") }), super.hostConnected();
  }
  hostDisconnected() {
    document.removeEventListener("pointerup", a(this, vt, "f"), { capture: a(this, S, "f") }), document.removeEventListener("touchend", a(this, be, "f"), { capture: a(this, S, "f") }), document.removeEventListener("touchcancel", a(this, be, "f"), { capture: a(this, S, "f") }), super.hostDisconnected(), a(this, M, "f").clear();
  }
  _observe(e) {
    e.addEventListener("pointerdown", a(this, ft, "f"), { capture: a(this, S, "f") }), a(this, ae, "f") && (e.addEventListener("keydown", a(this, yt, "f"), { capture: a(this, S, "f") }), e.addEventListener("keyup", a(this, gt, "f"), { capture: a(this, S, "f") }));
  }
  _unobserve(e) {
    e.removeEventListener("pointerdown", a(this, ft, "f"), { capture: a(this, S, "f") }), a(this, ae, "f") && (e.removeEventListener("keydown", a(this, yt, "f"), { capture: a(this, S, "f") }), e.removeEventListener("keyup", a(this, gt, "f"), { capture: a(this, S, "f") }));
  }
}
S = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), be = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakSet(), Gs = function(e) {
  if (!a(this, je, "f")?.call(this, e) && !(e.pointerType === "mouse" && e.button > 1)) {
    for (const t of e.composedPath()) if (t instanceof HTMLElement && this.isObserving(t)) {
      a(this, M, "f").has(t) || (a(this, M, "f").set(t, performance.now()), a(this, B, "f").call(this, true, { x: e.x, y: e.y }, t));
      break;
    }
  }
}, Qs = function(e) {
  e.pointerType === "mouse" && e.button > 1 || a(this, U, "m", Zt).call(this, e.x, e.y);
}, Js = function(e) {
  a(this, U, "m", Zt).call(this, e.changedTouches[0]?.clientX ?? 0, e.changedTouches[0]?.clientY ?? 0);
}, ei = function(e) {
  if (a(this, je, "f")?.call(this, e) || e.target !== e.currentTarget) return;
  const t = e.currentTarget;
  if (a(this, ae, "f")?.call(this, e.key) && (e.key === " " && e.preventDefault(), !a(this, M, "f").has(t))) {
    a(this, M, "f").set(t, performance.now());
    const s = t.getBoundingClientRect();
    a(this, B, "f").call(this, true, { x: s.x + s.width / 2, y: s.y + s.height / 2 }, t);
  }
}, ti = function(e) {
  const t = e.target;
  if (a(this, M, "f").has(t) && a(this, ae, "f")?.call(this, e.key)) {
    const s = a(this, Ve, "f") - (performance.now() - a(this, M, "f").get(t)), n = t.getBoundingClientRect();
    s > 0 ? setTimeout(() => {
      a(this, M, "f").delete(t), a(this, B, "f").call(this, false, { x: n.x + n.width / 2, y: n.y + n.height / 2 }, t);
    }, s) : (a(this, M, "f").delete(t), a(this, B, "f").call(this, false, { x: n.x + n.width / 2, y: n.y + n.height / 2 }, t));
  }
}, Zt = function(e, t) {
  for (const s of a(this, M, "f")) {
    const n = a(this, Ve, "f") - (performance.now() - s[1]);
    n > 0 ? setTimeout(() => {
      a(this, M, "f").delete(s[0]), a(this, B, "f").call(this, false, { x: e, y: t }, s[0]);
    }, n) : (a(this, M, "f").delete(s[0]), a(this, B, "f").call(this, false, { x: e, y: t }, s[0]));
  }
};
var De, bt, xt, J, We;
class Un extends ot {
  constructor(e, t) {
    if (super(e, t), De.set(this, void 0), bt.set(this, void 0), xt.set(this, void 0), J.set(this, void 0), We.set(this, true), b(this, De, t.callback, "f"), b(this, bt, t.skipInitial ?? false, "f"), b(this, xt, t.config, "f"), !window.ResizeObserver) {
      console.warn("ResizeController error: the browser does not support ResizeObserver.");
      return;
    }
    b(this, J, new ResizeObserver((s, n) => a(this, De, "f").call(this, s, n)), "f");
  }
  async hostUpdated() {
    a(this, J, "f") && !a(this, bt, "f") && a(this, We, "f") && a(this, De, "f").call(this, [], a(this, J, "f")), b(this, We, false, "f");
  }
  _observe(e) {
    a(this, J, "f")?.observe(e, a(this, xt, "f")), b(this, We, true, "f");
  }
  _unobserve(e) {
    a(this, J, "f")?.unobserve(e);
  }
}
De = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap();
const P = (o2) => (e, t) => {
  const s = () => {
    typeof window < "u" && !customElements.get(o2) && customElements.define(o2, e);
  };
  t ? t.addInitializer(s) : s();
};
function ii(o2) {
  const e = /* @__PURE__ */ Symbol("_id");
  return (t, s, n) => {
    const r = n.value;
    return n.value = function(...l) {
      const p = this;
      clearTimeout(p[e]), p[e] = setTimeout(() => r.apply(this, l), o2);
    }, n;
  };
}
var re, Pt, qe, _t, ee, Ws, Xt, ni, oi;
class cn extends ot {
  constructor(e, t) {
    super(e, t), re.add(this), Pt.set(this, void 0), qe.set(this, void 0), _t.set(this, (s) => a(this, re, "m", oi).call(this, s)), ee.set(this, /* @__PURE__ */ new Map()), b(this, Pt, t.debounce === true, "f"), b(this, qe, t.callback, "f");
  }
  getScrollContainers(e) {
    return a(this, ee, "f").get(e);
  }
  _observe(e) {
    const t = a(this, re, "m", ni).call(this, e);
    if (t.length > 0) {
      a(this, ee, "f").set(e, t);
      for (const s of t) (s === document.documentElement ? document : s).addEventListener("scroll", a(this, _t, "f"), { passive: true });
    }
  }
  _unobserve(e) {
    if (a(this, ee, "f").has(e)) {
      for (const t of a(this, ee, "f").get(e)) (t === document.documentElement ? document : t).removeEventListener("scroll", a(this, _t, "f"));
      a(this, ee, "f").delete(e);
    }
  }
  _debounceCallback(e) {
    a(this, qe, "f").call(this, e);
  }
}
Pt = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakSet(), Ws = function(e) {
  const t = e.shadowRoot;
  if (!t) return null;
  const s = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT);
  let n = s.currentNode;
  for (; n; ) {
    if (n instanceof Element && a(this, re, "m", Xt).call(this, n)) return n;
    n = s.nextNode();
  }
  return null;
}, Xt = function(e) {
  const t = getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowY + t.overflowX);
}, ni = function(e) {
  const t = new Array(), s = a(this, re, "m", Ws).call(this, e);
  s && t.push(s);
  let n = e;
  for (; n; ) a(this, re, "m", Xt).call(this, n) && t.push(n), n = n.parentElement;
  return t;
}, oi = function(e) {
  const t = e.target === document ? document.documentElement : e.target;
  a(this, Pt, "f") ? this._debounceCallback(t) : a(this, qe, "f").call(this, t);
};
f([ii(40)], cn.prototype, "_debounceCallback", null);
function ai(o2, ...e) {
  return typeof o2 == "object" && o2 !== null && e.every((t) => t in o2);
}
const j = /* @__PURE__ */ Symbol("internals"), Rs = /* @__PURE__ */ Symbol("_internals"), de = /* @__PURE__ */ Symbol("_customState");
function bs(o2, e) {
  var t;
  class s extends o2 {
    constructor() {
      super(...arguments), this[t] = /* @__PURE__ */ new Set();
    }
    get [(t = de, j)]() {
      return this[Rs] ?? (this[Rs] = this.attachInternals());
    }
  }
  return s.formAssociated = e, s;
}
function ri(o2, e) {
  return de in o2 ? o2[de].has(e) : o2[j].states.has(e);
}
function we(o2, e) {
  ri(o2, e) || (de in o2 && o2[de].add(e), o2[j]?.states.add(e), o2[j]?.states.has(e));
}
function O(o2, e) {
  return de in o2 && o2[de].delete(e), o2[j]?.states.delete(e) ? (o2[j]?.states.has(e), true) : false;
}
function ns(o2, e, t) {
  t ? we(o2, e) : O(o2, e);
}
function li(o2) {
  class e extends o2 {
    constructor() {
      super(...arguments), this.checked = false;
    }
    update(s) {
      super.update(s), s.has("checked") && (this.role === "button" ? (this.ariaPressed = `${this.checked}`, this.ariaChecked = null) : this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = `${this.checked}`, this.ariaPressed = null));
    }
  }
  return f([x({ type: Boolean, reflect: true })], e.prototype, "checked", void 0), e;
}
function dn(o2) {
  class e extends li(o2) {
    constructor() {
      super(...arguments), this.indeterminate = false;
    }
    update(s) {
      super.update(s), s.has("indeterminate") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = !this.checked && this.indeterminate ? "mixed" : `${this.checked}`);
    }
  }
  return f([x({ type: Boolean, reflect: true })], e.prototype, "indeterminate", void 0), e;
}
const Bt = { primary: i("var(--md-sys-color-primary, #6750A4)"), onPrimary: i("var(--md-sys-color-on-primary, #FFFFFF)"), primaryContainer: i("var(--md-sys-color-primary-container, #EADDFF)"), onPrimaryContainer: i("var(--md-sys-color-on-primary-container, #4F378B)"), primaryFixed: i("var(--md-sys-color-primary-fixed, #EADDFF)"), primaryFixedDim: i("var(--md-sys-color-primary-fixed-dim, #D0BCFF)"), onPrimaryFixed: i("var(--md-sys-color-on-primary-fixed, #21005D)"), onPrimaryFixedVariant: i("var(--md-sys-color-on-primary-fixed-variant, #4F378B)"), secondary: i("var(--md-sys-color-secondary, #625B71)"), onSecondary: i("var(--md-sys-color-on-secondary, #FFFFFF)"), secondaryContainer: i("var(--md-sys-color-secondary-container, #E8DEF8)"), onSecondaryContainer: i("var(--md-sys-color-on-secondary-container, #4A4458)"), secondaryFixed: i("var(--md-sys-color-secondary-fixed, #E8DEF8)"), secondaryFixedDim: i("var(--md-sys-color-secondary-fixed-dim, #CCC2DC)"), onSecondaryFixed: i("var(--md-sys-color-on-secondary-fixed, #1D192B)"), onSecondaryFixedVariant: i("var(--md-sys-color-on-secondary-fixed-variant, #4A4458)"), tertiary: i("var(--md-sys-color-tertiary, #7D5260)"), onTertiary: i("var(--md-sys-color-on-tertiary, #FFFFFF)"), tertiaryContainer: i("var(--md-sys-color-tertiary-container, #FFD8E4)"), onTertiaryContainer: i("var(--md-sys-color-on-tertiary-container, #633B48)"), tertiaryFixed: i("var(--md-sys-color-tertiary-fixed, #FFD8E4)"), tertiaryFixedDim: i("var(--md-sys-color-tertiary-fixed-dim, #EFB8C8)"), onTertiaryFixed: i("var(--md-sys-color-on-tertiary-fixed, #31111D)"), onTertiaryFixedVariant: i("var(--md-sys-color-on-tertiary-fixed-variant, #633B48)"), error: i("var(--md-sys-color-error, #B3261E)"), onError: i("var(--md-sys-color-on-error, #FFFFFF)"), errorContainer: i("var(--md-sys-color-error-container, #F9DEDC)"), onErrorContainer: i("var(--md-sys-color-on-error-container, #8C1D18)"), surface: i("var(--md-sys-color-surface, #FEF7FF)"), onSurface: i("var(--md-sys-color-on-surface, #1D1B20)"), onSurfaceVariant: i("var(--md-sys-color-on-surface-variant, #49454F)"), surfaceContainerLowest: i("var(--md-sys-color-surface-container-lowest, #FFFFFF)"), surfaceContainerLow: i("var(--md-sys-color-surface-container-low, #F7F2FA)"), surfaceContainer: i("var(--md-sys-color-surface-container, #F3EDF7)"), surfaceContainerHigh: i("var(--md-sys-color-surface-container-high, #ECE6F0)"), surfaceContainerHighest: i("var(--md-sys-color-surface-container-highest, #E6E0E9)"), surfaceDim: i("var(--md-sys-color-surface-dim, #DED8E1)"), surfaceBright: i("var(--md-sys-color-surface-bright, #FEF7FF)"), surfaceVariant: i("var(--md-sys-color-surface-variant, #E7E0EC)"), inverseSurface: i("var(--md-sys-color-inverse-surface, #322F35)"), inverseOnSurface: i("var(--md-sys-color-inverse-on-surface, #F5EFF7)"), inversePrimary: i("var(--md-sys-color-inverse-primary, #D0BCFF)"), outline: i("var(--md-sys-color-outline, #79747E)"), outlineVariant: i("var(--md-sys-color-outline-variant, #CAC4D0)"), shadow: i("var(--md-sys-color-shadow, #000000)"), scrim: i("var(--md-sys-color-scrim, #000000)") }, Yt = { scale: i("var(--md-sys-density-scale, 0)"), size: i("var(--md-sys-density-size, 0.25rem)") }, hn = { ...Yt, calc(o2) {
  return i(`calc(max(${o2}, ${Yt.scale}) * ${Yt.size})`);
} }, pn = `color-mix(in srgb, var(--m3e-elevation-color, ${Bt.shadow}) 20%, transparent)`, mn = ["0px 0px 0px 0px", "0px 2px 1px -1px", "0px 3px 1px -2px", "0px 3px 3px -2px", "0px 2px 4px -1px", "0px 3px 5px -1px", "0px 3px 5px -1px", "0px 4px 5px -2px", "0px 5px 5px -3px", "0px 5px 6px -3px", "0px 6px 6px -3px", "0px 6px 7px -4px", "0px 7px 8px -4px", "0px 7px 8px -4px", "0px 7px 9px -4px", "0px 8px 9px -5px", "0px 8px 10px -5px", "0px 8px 11px -5px", "0px 9px 11px -5px", "0px 9px 12px -6px", "0px 10px 13px -6px", "0px 10px 13px -6px", "0px 10px 14px -6px", "0px 11px 14px -7px", "0px 11px 15px -7px"], un = `color-mix(in srgb, var(--m3e-elevation-color, ${Bt.shadow}) 14%, transparent)`, fn = ["0px 0px 0px 0px", "0px 1px 1px 0px", "0px 2px 2px 0px", "0px 3px 4px 0px", "0px 4px 5px 0px", "0px 5px 8px 0px", "0px 6px 10px 0px", "0px 7px 10px 1px", "0px 8px 10px 1px", "0px 9px 12px 1px", "0px 10px 14px 1px", "0px 11px 15px 1px", "0px 12px 17px 2px", "0px 13px 19px 2px", "0px 14px 21px 2px", "0px 15px 22px 2px", "0px 16px 24px 2px", "0px 17px 26px 2px", "0px 18px 28px 2px", "0px 19px 29px 2px", "0px 20px 31px 3px", "0px 21px 33px 3px", "0px 22px 35px 3px", "0px 23px 36px 3px", "0px 24px 38px 3px"], vn = `color-mix(in srgb, var(--m3e-elevation-color, ${Bt.shadow}) 12%, transparent)`, yn = ["0px 0px 0px 0px", "0px 1px 3px 0px", "0px 1px 5px 0px", "0px 1px 8px 0px", "0px 1px 10px 0px", "0px 1px 14px 0px", "0px 1px 18px 0px", "0px 2px 16px 1px", "0px 3px 14px 2px", "0px 3px 16px 2px", "0px 4px 18px 3px", "0px 4px 20px 3px", "0px 5px 22px 4px", "0px 5px 24px 4px", "0px 5px 26px 4px", "0px 6px 28px 5px", "0px 6px 30px 5px", "0px 6px 32px 5px", "0px 7px 34px 6px", "0px 7px 36px 6px", "0px 8px 38px 7px", "0px 8px 40px 7px", "0px 8px 42px 7px", "0px 9px 44px 8px", "0px 9px 46px 8px"];
function me(o2) {
  return `${pn} ${mn[o2]},${un} ${fn[o2]},${vn} ${yn[o2]}`;
}
const gn = { level0: i(`var(--md-sys-elevation-level0, ${me(0)})`), level1: i(`var(--md-sys-elevation-level1, ${me(1)})`), level2: i(`var(--md-sys-elevation-level2, ${me(3)})`), level3: i(`var(--md-sys-elevation-level3, ${me(6)})`), level4: i(`var(--md-sys-elevation-level4, ${me(8)})`), level5: i(`var(--md-sys-elevation-level5, ${me(12)})`) };
function $(o2) {
  return i(`var(--md-sys-measurement-space${o2}, ${0.5 * (o2 / 100)}rem)`);
}
$(0), $(25), $(50), $(75), $(100), $(125), $(150), $(175), $(200), $(250), $(300), $(400), $(450), $(500), $(600), $(700), $(800), $(900);
const bn = { emphasized: i("var(--md-sys-motion-easing-emphasized, cubic-bezier(0.2, 0.0, 0, 1.0))"), emphasizedDecelerate: i("var(--md-sys-motion-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))"), emphasizedAccelerate: i("var(--md-sys-motion-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))"), standard: i("var(--md-sys-motion-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))"), standardDecelerate: i("var(--md-sys-motion-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))"), standardAccelerate: i("var(--md-sys-motion-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))") }, xn = { fastSpatial: i("var(--md-sys-motion-spring-fast-spatial, 350ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), defaultSpatial: i("var(--md-sys-motion-spring-default-spatial, 500ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), slowSpatial: i("var(--md-sys-motion-spring-slow-spatial, 750ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), fastEffects: i("var(--md-sys-motion-spring-fast-effects, 150ms cubic-bezier(0.31, 0.94, 0.34, 1.00))"), defaultEffects: i("var(--md-sys-motion-spring-default-effects, 200ms cubic-bezier(0.34, 0.80, 0.34, 1.00))"), slowEffects: i("var(--md-sys-motion-spring-slow-effects, 200ms cubic-bezier(0.34, 0.88, 0.34, 1.00))") }, _n = { short1: i("var(--md-sys-motion-duration-short-1, 50ms)"), short2: i("var(--md-sys-motion-duration-short-2, 100ms)"), short3: i("var(--md-sys-motion-duration-short-3, 150ms)"), short4: i("var(--md-sys-motion-duration-short-4, 200ms)"), medium1: i("var(--md-sys-motion-duration-medium-1, 250ms)"), medium2: i("var(--md-sys-motion-duration-medium-2, 300ms)"), medium3: i("var(--md-sys-motion-duration-medium-3, 350ms)"), medium4: i("var(--md-sys-motion-duration-medium-4, 400ms)"), long1: i("var(--md-sys-motion-duration-long-1, 450ms)"), long2: i("var(--md-sys-motion-duration-long-2, 500ms)"), long3: i("var(--md-sys-motion-duration-long-3, 550ms)"), long4: i("var(--md-sys-motion-duration-long-4, 600ms)"), extraLong1: i("var(--md-sys-motion-duration-extra-long-1, 700ms)"), extraLong2: i("var(--md-sys-motion-duration-extra-long-2, 800ms)"), extraLong3: i("var(--md-sys-motion-duration-extra-long-3, 900ms)"), extraLong4: i("var(--md-sys-motion-duration-extra-long-4, 1000ms)") }, Cn = { easing: bn, duration: _n, spring: xn }, wn = { width: i("var(--m3e-scrollbar-width, auto)"), thinWidth: i("var(--m3e-scrollbar-thin-width, thin)"), color: i("var(--m3e-scrollbar-thumb-color, #938f94) var(--m3e-scrollbar-track-color, transparent)") }, h = { none: i("var(--md-sys-shape-corner-value-none, 0)"), extraSmall: i("var(--md-sys-shape-corner-value-extra-small, 0.25rem)"), small: i("var(--md-sys-shape-corner-value-small, 0.5rem)"), medium: i("var(--md-sys-shape-corner-value-medium, 0.75rem)"), large: i("var(--md-sys-shape-corner-value-large, 1rem)"), largeIncreased: i("var(--md-sys-shape-corner-value-large-increased, 1.25rem)"), extraLarge: i("var(--md-sys-shape-corner-value-extra-large, 1.75rem)"), extraLargeIncreased: i("var(--md-sys-shape-corner-value-extra-large-increased, 2rem)"), extraExtraLarge: i("var(--md-sys-shape-corner-value-extra-extra-large, 3rem)") }, $n = { corner: { full: i("var(--md-sys-shape-corner-full, 624.9375rem)"), extraLargeTop: i(`var(--md-sys-shape-corner-extra-large-top, ${h.extraLarge} ${h.extraLarge} ${h.none} ${h.none})`), extraLarge: i(`var(--md-sys-shape-corner-extra-large, ${h.extraLarge})`), extraLargeEnd: i(`${h.none} ${h.extraLarge} ${h.extraLarge} ${h.none}`), extraLargeStart: i(`${h.extraLarge} ${h.none} ${h.none} ${h.extraLarge}`), largeTop: i(`var(--md-sys-shape-corner-large-top, ${h.large} ${h.large} ${h.none} ${h.none})`), largeEnd: i(`var(--md-sys-shape-corner-large-end, ${h.none} ${h.large} ${h.large} ${h.none})`), largeStart: i(`var(--md-sys-shape-corner-large-start, ${h.large} ${h.none} ${h.none} ${h.large})`), large: i(`var(--md-sys-shape-corner-large, ${h.large})`), medium: i(`var(--md-sys-shape-corner-medium, ${h.medium})`), mediumTop: i(`${h.medium} ${h.medium} ${h.none} ${h.none}`), mediumEnd: i(`${h.none} ${h.medium} ${h.medium} ${h.none}`), mediumStart: i(`${h.medium} ${h.none} ${h.none} ${h.medium}`), small: i(`var(--md-sys-shape-corner-small, ${h.small})`), smallTop: i(`${h.small} ${h.small} ${h.none} ${h.none}`), smallEnd: i(`${h.none} ${h.small} ${h.small} ${h.none}`), smallStart: i(`${h.small} ${h.none} ${h.none} ${h.small}`), extraSmallTop: i(`var(--md-sys-shape-corner-extra-small-top, ${h.extraSmall} ${h.extraSmall} ${h.none} ${h.none})`), extraSmall: i(`var(--md-sys-shape-corner-extra-small, ${h.extraSmall})`), extraSmallEnd: i(`${h.none} ${h.extraSmall} ${h.extraSmall} ${h.none}`), extraSmallStart: i(`${h.extraSmall} ${h.none} ${h.none} ${h.extraSmall}`), extraSmallBottom: i(`${h.none} ${h.none} ${h.extraSmall} ${h.extraSmall}`), none: i(`var(--md-sys-shape-corner-none, ${h.none})`), largeIncreased: i(`var(--md-sys-shape-corner-large-increased, ${h.largeIncreased})`), extraLargeIncreased: i(`var(--md-sys-shape-corner-extra-large-increased, ${h.extraLargeIncreased})`), extraExtraLarge: i(`var(--md-sys-shape-corner-extra-extra-large, ${h.extraExtraLarge})`) } }, kn = { focusStateLayerOpacity: i("var(--md-sys-state-focus-state-layer-opacity, 10%)"), hoverStateLayerOpacity: i("var(--md-sys-state-hover-state-layer-opacity, 8%)"), pressedStateLayerOpacity: i("var(--md-sys-state-pressed-state-layer-opacity, 10%)") }, En = { standard: { display: { large: { fontSize: i("var(--md-sys-typescale-display-large-font-size, 3.5625rem)"), fontWeight: i("var(--md-sys-typescale-display-large-font-weight, 400)"), lineHeight: i("var(--md-sys-typescale-display-large-line-height, 4rem)"), tracking: i("var(--md-sys-typescale-display-large-tracking, 0.015625rem)") }, medium: { fontSize: i("var(--md-sys-typescale-display-medium-font-size, 2.8125rem)"), fontWeight: i("var(--md-sys-typescale-display-medium-font-weight, 400)"), lineHeight: i("var(--md-sys-typescale-display-medium-line-height, 3.25rem)"), tracking: i("var(--md-sys-typescale-display-medium-tracking, 0)") }, small: { fontSize: i("var(--md-sys-typescale-display-small-font-size, 2.25rem)"), fontWeight: i("var(--md-sys-typescale-display-small-font-weight, 400)"), lineHeight: i("var(--md-sys-typescale-display-small-line-height, 2.75rem)"), tracking: i("var(--md-sys-typescale-display-small-tracking, 0)") } }, headline: { large: { fontSize: i("var(--md-sys-typescale-headline-large-font-size, 2rem)"), fontWeight: i("var(--md-sys-typescale-headline-large-font-weight, 400)"), lineHeight: i("var(--md-sys-typescale-headline-large-line-height, 2.5rem)"), tracking: i("var(--md-sys-typescale-headline-large-tracking, 0)") }, medium: { fontSize: i("var(--md-sys-typescale-headline-medium-font-size, 1.75rem)"), fontWeight: i("var(--md-sys-typescale-headline-medium-font-weight, 400)"), lineHeight: i("var(--md-sys-typescale-headline-medium-line-height, 2.25rem)"), tracking: i("var(--md-sys-typescale-headline-medium-tracking, 0)") }, small: { fontSize: i("var(--md-sys-typescale-headline-small-font-size, 1.5rem)"), fontWeight: i("var(--md-sys-typescale-headline-small-font-weight, 400)"), lineHeight: i("var(--md-sys-typescale-headline-small-line-height, 2rem)"), tracking: i("var(--md-sys-typescale-headline-small-tracking, 0)") } }, title: { large: { fontSize: i("var(--md-sys-typescale-title-large-font-size, 1.375rem)"), fontWeight: i("var(--md-sys-typescale-title-large-font-weight, 400)"), lineHeight: i("var(--md-sys-typescale-title-large-line-height, 1.75rem)"), tracking: i("var(--md-sys-typescale-title-large-tracking, 0)") }, medium: { fontSize: i("var(--md-sys-typescale-title-medium-font-size, 1rem)"), fontWeight: i("var(--md-sys-typescale-title-medium-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-title-medium-line-height, 1.5rem)"), tracking: i("var(--md-sys-typescale-title-medium-tracking, 0.009375rem)") }, small: { fontSize: i("var(--md-sys-typescale-title-small-font-size, 0.875rem)"), fontWeight: i("var(--md-sys-typescale-title-small-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-title-small-line-height, 1.25rem)"), tracking: i("var(--md-sys-typescale-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: i("var(--md-sys-typescale-body-large-font-size, 1rem)"), fontWeight: i("var(--md-sys-typescale-body-large-font-weight, 400)"), lineHeight: i("var(--md-sys-typescale-body-large-line-height, 1.5rem)"), tracking: i("var(--md-sys-typescale-body-large-tracking, 0.03125rem)") }, medium: { fontSize: i("var(--md-sys-typescale-body-medium-font-size, 0.875rem)"), fontWeight: i("var(--md-sys-typescale-body-medium-font-weight, 400)"), lineHeight: i("var(--md-sys-typescale-body-medium-line-height, 1.25rem)"), tracking: i("var(--md-sys-typescale-body-medium-tracking, 0.015625rem)") }, small: { fontSize: i("var(--md-sys-typescale-body-small-font-size, 0.75rem)"), fontWeight: i("var(--md-sys-typescale-body-small-font-weight, 400)"), lineHeight: i("var(--md-sys-typescale-body-small-line-height, 1rem)"), tracking: i("var(--md-sys-typescale-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: i("var(--md-sys-typescale-label-large-font-size, 0.875rem)"), fontWeight: i("var(--md-sys-typescale-label-large-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-label-large-line-height, 1.25rem)"), tracking: i("var(--md-sys-typescale-label-large-tracking, 0.00625rem)") }, medium: { fontSize: i("var(--md-sys-typescale-label-medium-font-size, 0.75rem)"), fontWeight: i("var(--md-sys-typescale-label-medium-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-label-medium-line-height, 1rem)"), tracking: i("var(--md-sys-typescale-label-medium-tracking, 0.03125rem)") }, small: { fontSize: i("var(--md-sys-typescale-label-small-font-size, 0.6875rem)"), fontWeight: i("var(--md-sys-typescale-label-small-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-label-small-line-height, 1rem)"), tracking: i("var(--md-sys-typescale-label-small-tracking, 0.03125rem)") } } }, emphasized: { display: { large: { fontSize: i("var(--md-sys-typescale-emphasized-display-large-font-size, 3.5625rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-display-large-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-emphasized-display-large-line-height, 4rem)"), tracking: i("var(--md-sys-typescale-emphasized-display-large-tracking, 0.015625rem)") }, medium: { fontSize: i("var(--md-sys-typescale-emphasized-display-medium-font-size, 2.8125rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-display-medium-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-emphasized-display-medium-line-height, 3.25rem)"), tracking: i("var(--md-sys-typescale-emphasized-display-medium-tracking, 0)") }, small: { fontSize: i("var(--md-sys-typescale-emphasized-display-small-font-size, 2.25rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-display-small-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-emphasized-display-small-line-height, 2.75rem)"), tracking: i("var(--md-sys-typescale-emphasized-display-small-tracking, 0)") } }, headline: { large: { fontSize: i("var(--md-sys-typescale-emphasized-headline-large-font-size, 2rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-headline-large-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-emphasized-headline-large-line-height, 2.5rem)"), tracking: i("var(--md-sys-typescale-emphasized-headline-large-tracking, 0)") }, medium: { fontSize: i("var(--md-sys-typescale-emphasized-headline-medium-font-size, 1.75rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-headline-medium-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-emphasized-headline-medium-line-height, 2.25rem)"), tracking: i("var(--md-sys-typescale-emphasized-headline-medium-tracking, 0)") }, small: { fontSize: i("var(--md-sys-typescale-emphasized-headline-small-font-size, 1.5rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-headline-small-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-emphasized-headline-small-line-height, 2rem)"), tracking: i("var(--md-sys-typescale-emphasized-headline-small-tracking, 0)") } }, title: { large: { fontSize: i("var(--md-sys-typescale-emphasized-title-large-font-size, 1.375rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-title-large-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-emphasized-title-large-line-height, 1.75rem)"), tracking: i("var(--md-sys-typescale-emphasized-title-large-tracking, 0)") }, medium: { fontSize: i("var(--md-sys-typescale-emphasized-title-medium-font-size, 1rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-title-medium-font-weight, 700)"), lineHeight: i("var(--md-sys-typescale-emphasized-title-medium-line-height, 3.5rem)"), tracking: i("var(--md-sys-typescale-emphasized-title-medium-tracking, 0.009375rem)") }, small: { fontSize: i("var(--md-sys-typescale-emphasized-title-small-font-size, 0.875rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-title-small-font-weight, 700)"), lineHeight: i("var(--md-sys-typescale-emphasized-title-small-line-height, 1.25rem)"), tracking: i("var(--md-sys-typescale-emphasized-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: i("var(--md-sys-typescale-emphasized-body-large-font-size, 1rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-body-large-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-emphasized-body-large-line-height, 1.5rem)"), tracking: i("var(--md-sys-typescale-emphasized-body-large-tracking, 0.03125rem)") }, medium: { fontSize: i("var(--md-sys-typescale-emphasized-body-medium-font-size, 0.875rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-body-medium-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-emphasized-body-medium-line-height, 1.25rem)"), tracking: i("var(--md-sys-typescale-emphasized-body-medium-tracking, 0.015625rem)") }, small: { fontSize: i("var(--md-sys-typescale-emphasized-body-small-font-size, 0.75rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-body-small-font-weight, 500)"), lineHeight: i("var(--md-sys-typescale-emphasized-body-small-line-height, 1rem)"), tracking: i("var(--md-sys-typescale-emphasized-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: i("var(--md-sys-typescale-emphasized-label-large-font-size, 0.875rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-label-large-font-weight, 700)"), lineHeight: i("var(--md-sys-typescale-emphasized-label-large-line-height, 1.25rem)"), tracking: i("var(--md-sys-typescale-emphasized-label-large-tracking, 0.00625rem)") }, medium: { fontSize: i("var(--md-sys-typescale-emphasized-label-medium-font-size, 0.75rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-label-medium-font-weight, 700)"), lineHeight: i("var(--md-sys-typescale-emphasized-label-medium-line-height, 1rem)"), tracking: i("var(--md-sys-typescale-emphasized-label-medium-tracking, 0.03125rem)") }, small: { fontSize: i("var(--md-sys-typescale-emphasized-label-small-font-size, 0.6875rem)"), fontWeight: i("var(--md-sys-typescale-emphasized-label-small-font-weight, 700)"), lineHeight: i("var(--md-sys-typescale-emphasized-label-small-line-height, 1rem)"), tracking: i("var(--md-sys-typescale-emphasized-label-small-tracking, 0.03125rem)") } } } }, c = { color: Bt, elevation: gn, motion: Cn, shape: $n, state: kn, typescale: En, scrollbar: wn, density: hn };
function Je(o2) {
  return ai(o2, "disabled");
}
function ci(o2, e = true) {
  class t extends o2 {
    constructor() {
      super(...arguments), this.disabled = false;
    }
    update(n) {
      super.update(n), n.has("disabled") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaDisabled = this.disabled ? "true" : null);
    }
  }
  return f([x({ type: Boolean, reflect: e })], t.prototype, "disabled", void 0), t;
}
function et(o2) {
  return ai(o2, "disabledInteractive") && Je(o2);
}
const Is = ["click", "dblclick", "auxclick", "keydown", "keyup"], Sn = ["Tab", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Left", "Up", "Right", "Down"], Gt = /* @__PURE__ */ Symbol("_suppressedEventHandler");
function Nn(o2) {
  var e;
  class t extends o2 {
    constructor() {
      super(...arguments), this[e] = (n) => {
        if (this.disabledInteractive) {
          if (n instanceof KeyboardEvent && Sn.includes(n.key)) return;
          n.stopImmediatePropagation(), n.preventDefault();
        }
      }, this.disabledInteractive = false;
    }
    connectedCallback() {
      Is.forEach((n) => this.addEventListener(n, this[Gt], true)), super.connectedCallback();
    }
    disconnectedCallback() {
      Is.forEach((n) => this.removeEventListener(n, this[Gt], true)), super.disconnectedCallback();
    }
    update(n) {
      super.update(n), (n.has("disabled") || n.has("disabledInteractive")) && this.role && this.role !== "none" && this.role !== "presentation" && this.role !== "none" && (this.ariaDisabled = this.disabled || this.disabledInteractive ? "true" : null);
    }
  }
  return e = Gt, f([x({ attribute: "disabled-interactive", type: Boolean, reflect: true })], t.prototype, "disabledInteractive", void 0), t;
}
const Te = /* @__PURE__ */ Symbol("_tabindex");
function Kn(o2) {
  var e;
  class t extends o2 {
    constructor() {
      super(...arguments), this[e] = 0;
    }
    connectedCallback() {
      this[Te] = Number.parseInt(this.getAttribute("tabindex") ?? "0"), super.connectedCallback();
    }
    firstUpdated(n) {
      super.firstUpdated(n), !this.hasAttribute("tabindex") && !n.has("disabled") && this.setAttribute("tabindex", `${this[Te]}`);
    }
    update(n) {
      if (super.update(n), n.has("disabled")) if (!this.disabled && this.role !== "none") this.hasAttribute("tabindex") || this.setAttribute("tabindex", `${this[Te]}`);
      else {
        const r = this.getAttribute("tabindex");
        r && (this[Te] = Number.parseInt(r)), this.removeAttribute("tabindex");
      }
    }
  }
  return e = Te, t;
}
const Qt = /* @__PURE__ */ Symbol("_clickHandler");
function jn(o2) {
  var e;
  class t extends o2 {
    constructor() {
      super(...arguments), this.type = "button", this[e] = async (n) => {
        if (n.defaultPrevented || Je(this) && this.disabled || et(this) && this.disabledInteractive) return;
        const r = this[j].form;
        if (!(!r || this.type === "button") && (await new Promise((l) => setTimeout(l)), !n.defaultPrevented)) switch (this.type) {
          case "reset":
            r.reset();
            break;
          case "submit":
            r.addEventListener("submit", (l) => Object.defineProperty(l, "submitter", { configurable: true, enumerable: true, get: () => this }), { capture: true, once: true }), this[j].setFormValue(this.value), r.requestSubmit();
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
      super.connectedCallback(), this.addEventListener("click", this[Qt]);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("click", this[Qt]);
    }
  }
  return e = Qt, t.formAssociated = true, f([x()], t.prototype, "name", null), f([x()], t.prototype, "value", null), f([x()], t.prototype, "type", void 0), t;
}
const ue = /* @__PURE__ */ Symbol("_control"), Jt = /* @__PURE__ */ Symbol("_firstUpdated");
function Ut(o2) {
  var e;
  class t extends o2 {
    constructor() {
      super(...arguments), this[e] = false, this.htmlFor = null;
    }
    get control() {
      return this[ue]?.deref() ?? null;
    }
    connectedCallback() {
      super.connectedCallback();
      const n = this[ue]?.deref();
      n && this.attach(n);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      const n = this[ue];
      n && (this.detach(), this[ue] = n);
    }
    firstUpdated(n) {
      super.firstUpdated(n), this[Jt] = true;
    }
    update(n) {
      if (super.update(n), n.has("htmlFor")) if (this.htmlFor) {
        const r = this.getRootNode();
        r && ln(this.htmlFor, r).then((l) => {
          l !== this.control && (this.control && this.detach(), l instanceof HTMLElement && this.attach(l));
        });
      } else this.control && this[Jt] && this.detach();
    }
    attach(n) {
      this[ue] = new WeakRef(n);
    }
    detach() {
      this[ue] = void 0;
    }
  }
  return e = Jt, f([x({ attribute: "for" })], t.prototype, "htmlFor", void 0), t;
}
function Vn(o2, e = true) {
  var t, s, n, r, l, p, m;
  class u extends o2 {
    constructor() {
      super(...arguments), t.add(this), s.set(this, false), n.set(this, (d) => a(this, t, "m", p).call(this, d)), r.set(this, (d) => a(this, t, "m", m).call(this, d)), l.set(this, () => b(this, s, false, "f"));
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("keydown", a(this, n, "f")), this.addEventListener("keyup", a(this, r, "f")), this.addEventListener("focusout", a(this, l, "f"));
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("keydown", a(this, n, "f")), this.removeEventListener("keyup", a(this, r, "f")), this.removeEventListener("focusout", a(this, l, "f"));
    }
  }
  return s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakSet(), p = function(d) {
    if (d.target !== d.currentTarget || Je(this) && this.disabled || et(this) && this.disabledInteractive) {
      b(this, s, false, "f");
      return;
    }
    (d.key === " " || e && d.key === "Enter") && b(this, s, true, "f");
  }, m = function(d) {
    if (d.target !== d.currentTarget || Je(this) && this.disabled || et(this) && this.disabledInteractive || !a(this, s, "f")) {
      b(this, s, false, "f");
      return;
    }
    b(this, s, false, "f"), this.dispatchEvent(new MouseEvent("click", { cancelable: true, bubbles: true, composed: true }));
  }, u;
}
const Mn = /* @__PURE__ */ Symbol("renderPseudoLink"), es = /* @__PURE__ */ Symbol("_clickHandler");
function qn(o2, e = false) {
  var t, s, n, r, l;
  class p extends o2 {
    constructor() {
      super(...arguments), t.add(this), this[l] = async (u) => {
        if (et(this) && this.disabledInteractive && (u.preventDefault(), u.stopPropagation()), await new Promise((v) => v()), !u.defaultPrevented && this.href) {
          u.preventDefault(), u.stopImmediatePropagation();
          const v = document.createElement("a");
          v.href = this.href, v.rel = this.rel, v.target = this.target, this.download != null && (v.download = this.download), v.addEventListener("click", async () => {
            await new Promise((d) => d()), v.remove();
          }), document.body.appendChild(v), v.click();
        }
      }, this.href = "", this.target = "", this.rel = "";
    }
    get download() {
      return this.getAttribute("download");
    }
    set download(u) {
      const v = this.download;
      v !== u && (u ? this.setAttribute("download", u) : this.removeAttribute("download"), this.requestUpdate("download", v));
    }
    connectedCallback() {
      super.connectedCallback(), e || this.addEventListener("click", this[es]), this.hasAttribute("href") && this.role === "button" && (this.role = "link");
    }
    disconnectedCallback() {
      super.disconnectedCallback(), e || this.removeEventListener("click", this[es]);
    }
    [(t = /* @__PURE__ */ new WeakSet(), l = es, Mn)]() {
      const u = Je(this) && this.disabled, v = et(this) && this.disabledInteractive;
      return !u && !v && this.href ? L`<a href="${this.href}" target="${Vt(this.target || void 0)}" rel="${Vt(this.rel || void 0)}" download="${Vt(this.download || void 0)}" tabindex="-1" aria-hidden="true" @pointerdown="${a(this, t, "m", s)}" @focus="${a(this, t, "m", n)}" @blur="${a(this, t, "m", r)}"></a>` : C;
    }
  }
  return s = function(u) {
    u.button !== 2 ? u.preventDefault() : u.target.removeAttribute("aria-hidden");
  }, n = function(u) {
    u.target.blur(), this.focus();
  }, r = function(u) {
    u.target.setAttribute("aria-hidden", "true");
  }, f([x()], p.prototype, "href", void 0), f([x()], p.prototype, "target", void 0), f([x()], p.prototype, "rel", void 0), f([x({ reflect: false })], p.prototype, "download", null), p;
}
const ts = /* @__PURE__ */ Symbol("_wasConnected");
function Ln(o2) {
  var e;
  class t extends o2 {
    constructor() {
      super(...arguments), this[e] = false;
    }
    reconnectedCallback() {
    }
    connectedCallback() {
      super.connectedCallback(), this[ts] && this.reconnectedCallback();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this[ts] = true;
    }
  }
  return e = ts, t;
}
function pe(o2, e) {
  class t extends o2 {
    connectedCallback() {
      this.role = this.role || e, super.connectedCallback();
    }
  }
  return t;
}
var Ct;
class An extends E {
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
    return L`<slot></slot>`;
  }
}
Ct = /* @__PURE__ */ new WeakMap();
An.styles = A`:host { display: contents; } ::slotted(.material-icons) { font-size: inherit !important; }`;
var T, Ze, Re, di, Ie, Oe, os;
let Ee = class extends bs(E) {
  constructor() {
    super(...arguments), T.add(this), Ze.set(this, false), Re.set(this, false), this.open = false, this.orientation = "vertical", this.noAnimate = false;
  }
  update(e) {
    super.update(e);
    const t = this.noAnimate || e.has("orientation") && !e.has("open");
    if (we(this, "--no-animate"), !a(this, Ze, "f")) {
      this.open && (b(this, Re, true, "f"), a(this, T, "m", Ie).call(this)), b(this, Ze, true, "f");
      return;
    }
    this.toggleAttribute("inert", !this.open), this.open ? (b(this, Re, true, "f"), t || qt() || (a(this, T, "m", Ie).call(this), ns(this, "--overflows", this.orientation === "vertical" ? this.clientHeight < this.scrollHeight : this.orientation === "horizontal" ? this.clientWidth < this.scrollWidth : this.clientHeight < this.scrollHeight || this.clientWidth < this.scrollWidth), a(this, T, "m", Oe).call(this)), O(this, "--closing"), we(this, "--opening"), this.dispatchEvent(new Event("opening")), a(this, T, "m", Oe).call(this), O(this, "--no-animate"), a(this, T, "m", os).call(this), t || qt() ? (a(this, T, "m", Ie).call(this), O(this, "--opening"), this.dispatchEvent(new Event("opened"))) : this.addEventListener("transitionend", () => {
      this.open && (a(this, T, "m", Ie).call(this), O(this, "--opening"), this.dispatchEvent(new Event("opened")));
    }, { once: true })) : (O(this, "--opening"), we(this, "--closing"), this.dispatchEvent(new Event("closing")), a(this, T, "m", os).call(this), a(this, Re, "f") && O(this, "--no-animate"), t || qt() ? (a(this, T, "m", Oe).call(this), O(this, "--closing"), this.dispatchEvent(new Event("closed"))) : requestAnimationFrame(() => {
      a(this, T, "m", Oe).call(this), this.addEventListener("transitionend", () => {
        this.open || (O(this, "--closing"), this.dispatchEvent(new Event("closed")));
      }, { once: true });
    }));
  }
  render() {
    return L`<slot @slotchange="${a(this, T, "m", di)}"></slot>`;
  }
};
Ze = /* @__PURE__ */ new WeakMap();
Re = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakSet();
di = function() {
  b(this, Ze, true, "f");
};
Ie = function() {
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
Oe = function() {
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
os = function() {
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
Ee.styles = A`:host { display: block; overflow: hidden; } :host([orientation="vertical"]) { height: 0px; transition: ${i(`visibility var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        height var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding-top var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding-bottom var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard}`)}; } :host([orientation="horizontal"]) { width: 0px; transition: ${i(`visibility var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        width var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding-left var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding-right var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard}`)}; } :host([orientation="both"]) { height: 0px; width: 0px; transition: ${i(`visibility var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        width var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        height var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard},
        padding var(--m3e-collapsible-animation-duration, ${c.motion.duration.medium1})
          ${c.motion.easing.standard}`)}; } :host(:not(:is(:state(--closing), :--closing)):not([open])) { visibility: hidden; } :host([orientation="vertical"]:not([open])) { min-height: unset !important; padding-top: 0px !important; padding-bottom: 0px !important; } :host([orientation="horizontal"]:not([open])) { min-width: unset !important; padding-left: 0px !important; padding-right: 0px !important; } :host([orientation="both"]:not([open])) { min-height: unset !important; min-width: unset !important; padding: 0px !important; } :host([no-animate]), :host(:is(:state(--no-animate), :--no-animate)) { transition-duration: 0ms; } :host([orientation="vertical"]:is(:state(--opening), :--opening)), :host([orientation="vertical"]:is(:state(--closing), :--closing)) { overflow-y: hidden !important; } :host([orientation="horizontal"]:is(:state(--opening), :--opening)), :host([orientation="horizontal"]:is(:state(--closing), :--closing)) { overflow-x: hidden !important; } :host([orientation="both"]:is(:state(--opening), :--opening)), :host([orientation="both"]:is(:state(--closing), :--closing)) { overflow-y: hidden !important; overflow-x: hidden !important; } :host(:is(:state(--overflows), :--overflows)) { scrollbar-gutter: stable; } ::slotted(*) { --m3e-collapsible-animation-duration: initial; } @media (prefers-reduced-motion) { :host { transition: none; } }`;
f([x({ type: Boolean, reflect: true })], Ee.prototype, "open", void 0);
f([x({ reflect: true })], Ee.prototype, "orientation", void 0);
f([x({ attribute: "no-animate", type: Boolean, reflect: true })], Ee.prototype, "noAnimate", void 0);
Ee = f([P("m3e-collapsible")], Ee);
const D = { liftDuration: i(`var(--m3e-elevation-lift-duration, ${c.motion.duration.short4})`), liftEasing: i(`var(--m3e-elevation-lift-easing, ${c.motion.easing.standard})`), settleDuration: i(`var(--m3e-elevation-settle-duration, ${c.motion.duration.short3})`), settleEasing: i(`var(--m3e-elevation-settle-easing, ${c.motion.easing.standardAccelerate})`), level: i(`var(--m3e-elevation-level, ${c.elevation.level0})`), hoverLevel: i(`var(--m3e-elevation-hover-level, ${c.elevation.level0})`), focusLevel: i(`var(--m3e-elevation-focus-level, ${c.elevation.level0})`), pressedLevel: i(`var(--m3e-elevation-pressed-level, ${c.elevation.level0})`) };
var Be, wt, $t, kt, hi, pi, mi;
let Se = class extends Ut(pe(E, "none")) {
  constructor() {
    super(...arguments), Be.add(this), wt.set(this, new Ys(this, { target: null, callback: (e) => a(this, Be, "m", hi).call(this, e) })), $t.set(this, new Ot(this, { target: null, callback: (e) => a(this, Be, "m", pi).call(this, e) })), kt.set(this, new si(this, { target: null, callback: (e) => a(this, Be, "m", mi).call(this, e) })), this.disabled = false, this.level = null;
  }
  attach(e) {
    super.attach(e), a(this, wt, "f").observe(e), a(this, $t, "f").observe(e), a(this, kt, "f").observe(e);
  }
  detach() {
    this.control && (a(this, wt, "f").unobserve(this.control), a(this, $t, "f").unobserve(this.control), a(this, kt, "f").unobserve(this.control)), super.detach();
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
    return L`<div class="shadow"></div>`;
  }
};
wt = /* @__PURE__ */ new WeakMap();
$t = /* @__PURE__ */ new WeakMap();
kt = /* @__PURE__ */ new WeakMap();
Be = /* @__PURE__ */ new WeakSet();
hi = function(e) {
  this.disabled || (this._shadow?.classList.toggle("hover", e), this._shadow?.classList.toggle("resting", !e));
};
pi = function(e) {
  this.disabled || this._shadow?.classList.toggle("focus", e);
};
mi = function(e) {
  this.disabled || this._shadow?.classList.toggle("pressed", e);
};
Se.styles = A`:host { display: block; } :host, .shadow { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .shadow.resting, .shadow.focus, .shadow.pressed { will-change: box-shadow; transition: ${i(`box-shadow ${D.settleDuration} ${D.settleEasing};`)}; } .shadow.hover { will-change: box-shadow; transition: ${i(`box-shadow ${D.liftDuration} ${D.liftEasing};`)}; } .shadow { box-shadow: ${D.level}; } .shadow.focus { box-shadow: ${D.focusLevel}; } .shadow.hover { box-shadow: ${D.hoverLevel}; } .shadow.pressed { box-shadow: ${D.pressedLevel}; } :host([level="0"]) .shadow { --m3e-elevation-level: ${c.elevation.level0}; --m3e-elevation-hover-level: ${c.elevation.level1}; } :host([level="1"]) .shadow { --m3e-elevation-level: ${c.elevation.level1}; --m3e-elevation-hover-level: ${c.elevation.level2}; } :host([level="2"]) .shadow { --m3e-elevation-level: ${c.elevation.level2}; --m3e-elevation-hover-level: ${c.elevation.level3}; } :host([level="3"]) .shadow { --m3e-elevation-level: ${c.elevation.level3}; --m3e-elevation-hover-level: ${c.elevation.level4}; } :host([level="4"]) .shadow { --m3e-elevation-level: ${c.elevation.level4}; --m3e-elevation-hover-level: ${c.elevation.level5}; } :host([level="5"]) .shadow { --m3e-elevation-level: ${c.elevation.level5}; --m3e-elevation-hover-level: ${D.level}; } :host([level]) .shadow { --m3e-elevation-focus-level: ${D.level}; --m3e-elevation-pressed-level: ${D.level}; } @media (prefers-reduced-motion) { .shadow.resting, .shadow.pressed, .shadow.focus, .shadow.hover { transition: none; } } @media (forced-colors: active) { .shadow { display: none; } }`;
f([It(".shadow")], Se.prototype, "_shadow", void 0);
f([x({ type: Boolean, reflect: true })], Se.prototype, "disabled", void 0);
f([x({ type: Number, reflect: true })], Se.prototype, "level", void 0);
Se = f([P("m3e-elevation")], Se);
const _ = { color: i(`var(--m3e-focus-ring-color, ${c.color.secondary})`), duration: i(`var(--m3e-focus-ring-duration, ${c.motion.duration.long2})`), thickness: i("var(--m3e-focus-ring-thickness, 3px)"), outwardOffset: i("var(--m3e-focus-ring-outward-offset, 2px)"), inwardOffset: i("var(--m3e-focus-ring-inward-offset, 0px)"), visibility: i("var(--m3e-focus-ring-visibility, visible)"), growthFactor: i("var(--m3e-focus-ring-growth-factor, 2)") };
var as, Et, ui;
let Me = class extends Ut(pe(E, "none")) {
  constructor() {
    super(...arguments), as.add(this), Et.set(this, new Ot(this, { target: null, callback: (e, t) => a(this, as, "m", ui).call(this, t) })), this.inward = false, this.disabled = false;
  }
  show() {
    this._outline?.classList.toggle("visible", true);
  }
  hide() {
    this._outline?.classList.toggle("visible", false);
  }
  attach(e) {
    super.attach(e), a(this, Et, "f").observe(e);
  }
  detach() {
    this.control && a(this, Et, "f").unobserve(this.control), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.hide();
  }
  render() {
    return L`<div class="outline"></div>`;
  }
  updated(e) {
    super.updated(e), e.has("disabled") && this.disabled && this.hide();
  }
};
Et = /* @__PURE__ */ new WeakMap();
as = /* @__PURE__ */ new WeakSet();
ui = function(e) {
  this.disabled || (e ? this.show() : this.hide());
};
Me.styles = A`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; outline: none; } .outline { contain: layout style; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; z-index: 1; outline-color: ${_.color}; outline-width: ${_.thickness}; visibility: ${_.visibility}; } .outline.visible { outline-style: solid; } :host(:not([inward])) .outline { outline-offset: ${_.outwardOffset}; } :host([inward]) .outline { outline-offset: calc(${_.inwardOffset} - ${_.thickness}); } :host(:not([inward])) .outline.visible { animation: grow-shrink ${_.duration}; } :host([inward]) .outline.visible { animation: shrink-grow ${_.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @keyframes shrink-grow { 50% { outline-offset: calc( ${_.inwardOffset} - calc(${_.thickness} * ${_.growthFactor}) ); outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @media (prefers-reduced-motion) { :host(:not([inward])) .outline.visible, :host([inward]) .outline.visible { animation: none; } } @media (forced-colors: active) { .outline { outline-color: Highlight; } }`;
f([It(".outline")], Me.prototype, "_outline", void 0);
f([x({ type: Boolean, reflect: true })], Me.prototype, "inward", void 0);
f([x({ type: Boolean, reflect: true })], Me.prototype, "disabled", void 0);
Me = f([P("m3e-focus-ring")], Me);
let rs = class extends dn(ci(pe(E, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return this.indeterminate ? L`<svg viewBox="0 -960 960 960" fill="currentColor"><path Required d="M240-440v-80h480v80H240Z"/></svg>` : this.checked ? L`<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>` : C;
  }
};
rs.styles = A`:host { display: inline-block; vertical-align: middle; width: var(--m3e-checkbox-icon-size, 1.125rem); height: var(--m3e-checkbox-icon-size, 1.125rem); border-radius: var(--m3e-checkbox-container-shape, 2px); box-sizing: border-box; flex: none; contain: layout style paint; } :host(:not([checked]):not([indeterminate])) { border-width: var(--m3e-checkbox-unselected-outline-thickness, 2px); border-style: solid; } :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { background-color: var(--m3e-checkbox-selected-container-color, ${c.color.primary}); color: var(--m3e-checkbox-selected-icon-color, ${c.color.onPrimary}); } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: var(--m3e-checkbox-unselected-outline-color, ${c.color.onSurfaceVariant}); } :host([disabled]:not([checked]):not([indeterminate])) { border-color: color-mix( in srgb, var(--m3e-checkbox-unselected-disabled-outline-color, ${c.color.onSurface}) var(--m3e-checkbox-unselected-disabled-outline-opacity, 38%), transparent ); } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-container-color, ${c.color.onSurface}) var(--m3e-checkbox-selected-disabled-container-opacity, 38%), transparent ); color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-icon-color, ${c.color.surface}) var(--m3e-checkbox-selected-disabled-icon-opacity, 100%), transparent ); } svg { pointer-events: none; } @media (forced-colors: active) { :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { border-color: Highlight; background-color: Highlight; color: HighlightText; } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: CanvasText; background: Canvas; } :host([disabled]:not([checked]):not([indeterminate])) { border-color: GrayText; background-color: Canvas; } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: GrayText; color: Canvas; } }`;
rs = f([P("m3e-pseudo-checkbox")], rs);
let ls = class extends li(ci(pe(E, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return L`<svg class="icon" viewBox="0 0 20 20"><mask id="cutout2"><rect width="100%" height="100%" fill="white"></rect><circle cx="10" cy="10" r="8" fill="black"></circle></mask><circle class="outer circle" cx="10" cy="10" r="10" mask="url(#cutout2)"></circle><circle class="inner circle" cx="10" cy="10" r="5"></circle></svg>`;
  }
};
ls.styles = A`:host { display: inline-block; vertical-align: middle; box-sizing: border-box; width: var(--m3e-radio-icon-size, 1.25rem); height: var(--m3e-radio-icon-size, 1.25rem); flex: none; contain: layout style paint; } .circle { fill: currentColor; } :host(:not([checked])) .circle.inner { opacity: 0; } :host(:not([checked])) { color: var(--m3e-radio-unselected-icon-color, ${c.color.onSurfaceVariant}); } :host([checked]) { color: var(--m3e-radio-selected-icon-color, ${c.color.primary}); } :host([disabled]) { color: color-mix(in srgb, var(--m3e-radio-disabled-icon-color, ${c.color.onSurface}) 38%, transparent); } @media (forced-colors: active) { :host { border-radius: 50%; } :host(:not([checked])) { color: CanvasText; background-color: Canvas; } :host([checked]) { color: HighlightText; background-color: Highlight; } :host([disabled]) { color: GrayText; background-color: Canvas; } }`;
ls = f([P("m3e-pseudo-radio")], ls);
const lt = { color: i(`var(--m3e-ripple-color, ${c.color.onSurface})`), opacity: i(`var(--m3e-ripple-opacity, ${c.state.pressedStateLayerOpacity})`), enterDuration: i(`var(--m3e-ripple-enter-duration, ${c.motion.duration.long1})`), exitDuration: i(`var(--m3e-ripple-exit-duration, ${c.motion.duration.medium3})`) };
var te, k, St, Mt, fi, vi;
let he = class extends Ut(pe(E, "none")) {
  constructor() {
    super(...arguments), te.add(this), k.set(this, null), St.set(this, new si(this, { target: null, minPressedDuration: 225, isPressedKey: (e) => e === " ", callback: (e, { x: t, y: s }) => a(this, te, "m", vi).call(this, e, t, s) })), this.disabled = false, this.centered = false, this.unbounded = false, this.radius = null;
  }
  get visible() {
    return a(this, k, "f") !== null;
  }
  show(e, t, s = false) {
    a(this, te, "m", Mt).call(this);
    const n = this.getBoundingClientRect();
    this.centered && (e = n.left + n.width / 2, t = n.top + n.height / 2);
    let r = this.radius;
    if (!r || isNaN(r)) {
      const m = Math.max(Math.abs(e - n.left), Math.abs(e - n.right)), u = Math.max(Math.abs(t - n.top), Math.abs(t - n.bottom));
      r = Math.sqrt(m * m + u * u);
    }
    const l = e - n.left, p = t - n.top;
    b(this, k, document.createElement("div"), "f"), a(this, k, "f").classList.add("ripple"), s && a(this, k, "f").classList.add("persistent"), a(this, k, "f").style.left = `${l - r}px`, a(this, k, "f").style.top = `${p - r}px`, a(this, k, "f").style.width = `${r * 2}px`, a(this, k, "f").style.height = `${r * 2}px`, a(this, k, "f").addEventListener("animationend", () => a(this, te, "m", fi).call(this, s), { once: true }), a(this, k, "f").addEventListener("transitionend", () => a(this, te, "m", Mt).call(this), { once: true }), this.shadowRoot?.appendChild(a(this, k, "f"));
  }
  hide() {
    a(this, k, "f")?.classList.add("exit");
  }
  attach(e) {
    super.attach(e), a(this, St, "f").observe(e);
  }
  detach() {
    this.control && a(this, St, "f").unobserve(this.control), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), a(this, te, "m", Mt).call(this);
  }
  updated(e) {
    super.updated(e), e.has("disabled") && this.disabled && this.hide();
  }
};
k = /* @__PURE__ */ new WeakMap();
St = /* @__PURE__ */ new WeakMap();
te = /* @__PURE__ */ new WeakSet();
Mt = function() {
  a(this, k, "f")?.remove(), b(this, k, null, "f");
};
fi = function(e) {
  e ? a(this, k, "f")?.classList.add("pressed") : this.hide();
};
vi = function(e, t, s) {
  this.disabled || (e ? this.show(t, s, true) : this.hide());
};
he.styles = A`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } :host(:not([unbounded])) { overflow: hidden; } :host(:not([unbounded])) .ripple { contain: layout style paint; } :host([unbounded]) .ripple { contain: layout style; } .ripple { display: block; position: absolute; inset: 0; pointer-events: none; transform: scale(0); opacity: ${lt.opacity}; border-radius: 50%; filter: blur(20px); background-color: ${lt.color}; transition: ${i(`background-color ${c.motion.duration.short4} ${c.motion.easing.standard}`)}; will-change: transform; animation: ripple ${lt.enterDuration} linear; } .ripple.persistent.pressed { transform: scale(4); } .ripple.exit { transition: opacity ${lt.exitDuration} cubic-bezier(0, 0, 0.2, 0.1); opacity: 0; } @keyframes ripple { to { transform: scale(4); } } @media (prefers-reduced-motion) { .ripple { transform: scale(4); animation-duration: 90ms; } .ripple.exit { transition-duration: 10ms; } } @media (forced-colors: active) { .ripple { display: none; } }`;
f([x({ type: Boolean, reflect: true })], he.prototype, "disabled", void 0);
f([x({ type: Boolean, reflect: true })], he.prototype, "centered", void 0);
f([x({ type: Boolean, reflect: true })], he.prototype, "unbounded", void 0);
f([x({ type: Number })], he.prototype, "radius", void 0);
he = f([P("m3e-ripple")], he);
var Ue;
let Le = class extends bs(E) {
  constructor() {
    super(...arguments), Ue.set(this, () => this._updateScroll()), this.dividers = "above-below", this.thin = false;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("scroll", a(this, Ue, "f"));
  }
  update(e) {
    super.update(e), e.has("dividers") && (this.removeEventListener("scroll", a(this, Ue, "f")), this.dividers !== "none" && this.addEventListener("scroll", a(this, Ue, "f"), { passive: true }));
  }
  render() {
    return L`<slot @slotchange="${this._updateScroll}"></slot>`;
  }
  _updateScroll() {
    const e = (this.dividers === "above" || this.dividers === "above-below") && this.scrollTop > 0, t = (this.dividers === "below" || this.dividers === "above-below") && this.scrollHeight - this.scrollTop - this.clientHeight > 1;
    ns(this, "--above", e), ns(this, "--below", t);
  }
};
Ue = /* @__PURE__ */ new WeakMap();
Le.styles = A`:host { display: block; overflow-y: auto; position: relative; box-sizing: border-box; scrollbar-color: ${c.scrollbar.color}; border-top: var(--m3e-divider-thickness, 1px) solid transparent; border-bottom: var(--m3e-divider-thickness, 1px) solid transparent; outline-color: ${_.color}; outline-width: ${_.thickness}; outline-offset: ${_.outwardOffset}; } :host([thin]) { scrollbar-width: ${c.scrollbar.thinWidth}; } :host(:not([thin])) { scrollbar-width: ${c.scrollbar.width}; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: var(--m3e-divider-color, ${c.color.outlineVariant}); } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: var(--m3e-divider-color, ${c.color.outlineVariant}); } :host(:focus-visible) { outline-style: solid; animation: grow-shrink ${_.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @media (forced-colors: active) { :host { border-top: var(--m3e-divider-thickness, 1px) solid Canvas; border-bottom: var(--m3e-divider-thickness, 1px) solid Canvas; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: GrayText; } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: GrayText; } } @media (prefers-reduced-motion) { :host(:focus-visible) { animation: none; } }`;
f([x()], Le.prototype, "dividers", void 0);
f([x({ type: Boolean, reflect: true })], Le.prototype, "thin", void 0);
f([ii(40)], Le.prototype, "_updateScroll", null);
Le = f([P("m3e-scroll-container")], Le);
var Xe, le, yi, xs;
let Dt = class extends bs(E) {
  constructor() {
    super(...arguments), Xe.add(this), le.set(this, new Array()), this.selectedIndex = null;
  }
  connectedCallback() {
    super.connectedCallback(), we(this, "--no-animate");
  }
  update(e) {
    super.update(e), e.has("selectedIndex") && (this.selectedIndex === null && we(this, "--no-animate"), a(this, Xe, "m", xs).call(this), this.selectedIndex !== null && ri(this, "--no-animate") && requestAnimationFrame(() => {
      this.selectedIndex !== null && O(this, "--no-animate");
    }));
  }
  render() {
    return L`<slot @slotchange="${a(this, Xe, "m", yi)}"></slot>`;
  }
};
le = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakSet();
yi = function(e) {
  const t = [...e.target.assignedElements({ flatten: true })];
  for (const s of a(this, le, "f").filter((n) => !t.includes(n))) s.classList.remove("-before"), s.classList.remove("-after"), s.removeAttribute("inert");
  b(this, le, t, "f"), a(this, Xe, "m", xs).call(this);
};
xs = function() {
  const e = this.selectedIndex ?? a(this, le, "f").length;
  for (let t = 0; t < a(this, le, "f").length; t++) {
    const s = a(this, le, "f")[t];
    s.classList.toggle("-before", t < e), s.classList.toggle("-after", t > e), s.toggleAttribute("inert", t !== e);
  }
};
Dt.styles = A`:host { display: flex; position: relative; overflow: hidden; } ::slotted(*) { width: 100%; top: 0; transition: ${i(`inset-inline-start var(--m3e-slide-animation-duration, ${c.motion.duration.long2}) ${c.motion.easing.standard},
        visibility var(--m3e-slide-animation-duration, ${c.motion.duration.long2}) ${c.motion.easing.standard} allow-discrete`)}; } ::slotted(.-before), ::slotted(.-after) { visibility: hidden; position: absolute; } ::slotted(.-before) { inset-inline-start: -100%; } ::slotted(.-after) { inset-inline-start: 100%; } ::slotted(:not(.-before):not(.-after)) { position: relative; inset-inline-start: 0; } :host(:is(:state(--no-animate), :--no-animate)) ::slotted(*) { transition: none; } @media (prefers-reduced-motion) { ::slotted(*) { transition: none; } }`;
f([x({ attribute: "selected-index", type: Number, reflect: true })], Dt.prototype, "selectedIndex", void 0);
Dt = f([P("m3e-slide")], Dt);
const fe = { hoverColor: i(`var(--m3e-state-layer-hover-color, ${c.color.onSurface})`), hoverOpacity: i(`var(--m3e-state-layer-hover-opacity, ${c.state.hoverStateLayerOpacity})`), focusColor: i(`var(--m3e-state-layer-focus-color, ${c.color.onSurface})`), focusOpacity: i(`var(--m3e-state-layer-focus-opacity, ${c.state.focusStateLayerOpacity})`), duration: i(`var(--m3e-state-layer-duration, ${c.motion.duration.medium1})`), easing: i(`var(--m3e-state-layer-easing, ${c.motion.easing.standard})`) };
var Lt, At, zt, gi, bi;
let Ae = class extends Ut(pe(E, "none")) {
  constructor() {
    super(...arguments), Lt.add(this), At.set(this, new Ys(this, { target: null, callback: (e) => a(this, Lt, "m", gi).call(this, e) })), zt.set(this, new Ot(this, { target: null, callback: (e, t) => a(this, Lt, "m", bi).call(this, t) })), this.disabled = false, this.disableHover = false;
  }
  show(e) {
    this._layer?.classList.toggle(e, true);
  }
  hide(e) {
    this._layer?.classList.toggle(e, false);
  }
  attach(e) {
    super.attach(e), a(this, At, "f").observe(e), a(this, zt, "f").observe(e);
  }
  detach() {
    this.control && (a(this, At, "f").unobserve(this.control), a(this, zt, "f").unobserve(this.control)), super.detach();
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
    return L`<div class="layer"></div>`;
  }
};
At = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakSet();
gi = function(e) {
  !this.disabled && !this.disableHover && (e ? this.show("hover") : this.hide("hover"));
};
bi = function(e) {
  this.disabled || (e ? this.show("focused") : this.hide("focused"));
};
Ae.styles = A`:host { display: block; } :host, .layer { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .layer { contain: layout style paint; will-change: background-color; transition: ${i(`background-color ${fe.duration} ${fe.easing}`)}; } .layer.focused { background-color: color-mix(in srgb, ${fe.focusColor} ${fe.focusOpacity}, transparent); } .layer.hover { background-color: color-mix(in srgb, ${fe.hoverColor} ${fe.hoverOpacity}, transparent); } @media (prefers-reduced-motion) { .layer { transition: none; } } @media (forced-colors: active) { .layer { display: none; } }`;
f([It(".layer")], Ae.prototype, "_layer", void 0);
f([x({ type: Boolean, reflect: true })], Ae.prototype, "disabled", void 0);
f([x({ attribute: "disable-hover", type: Boolean, reflect: true })], Ae.prototype, "disableHover", void 0);
Ae = f([P("m3e-state-layer")], Ae);
var N, tt, W, se, cs, xi, ds, hs;
let V = hs = class extends E {
  constructor() {
    super(), N.add(this), tt.set(this, `m3e-text-highlight-${hs.__nextId++}`), W.set(this, new Array()), se.set(this, null), this.disabled = false, this.term = "", this.caseSensitive = false, this.mode = "contains", this.isSupported && (b(this, se, new CSSStyleSheet(), "f"), a(this, se, "f").replaceSync(A`::highlight(${i(a(this, tt, "f"))}) { background-color: var(--m3e-text-highlight-container-color, ${c.color.secondaryContainer}); color: var(--m3e-text-highlight-color, ${c.color.onSecondaryContainer}); text-decoration: var(--m3e-text-highlight-decoration); text-shadow: var(--m3e-text-highlight-shadow); }`.toString()));
  }
  get isSupported() {
    return !!CSS.highlights;
  }
  get ranges() {
    return a(this, W, "f");
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.shadowRoot && a(this, se, "f") && !this.shadowRoot.adoptedStyleSheets.includes(a(this, se, "f")) && this.shadowRoot.adoptedStyleSheets.push(a(this, se, "f"));
  }
  updated(e) {
    super.updated(e), (e.has("term") || e.has("caseSensitive") || e.has("disabled")) && a(this, N, "m", ds).call(this);
  }
  render() {
    return L`<slot @slotchange="${a(this, N, "m", ds)}"></slot>`;
  }
};
tt = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakMap();
se = /* @__PURE__ */ new WeakMap();
N = /* @__PURE__ */ new WeakSet();
cs = function(e) {
  return !/^\s*$/.test(e.data);
};
xi = function o(e, t) {
  e instanceof HTMLSlotElement ? e.assignedNodes({ flatten: true }).forEach((s) => {
    switch (s.nodeType) {
      case Node.TEXT_NODE:
        a(this, N, "m", cs).call(this, s) && t.push(s);
        break;
      case Node.ELEMENT_NODE:
        a(this, N, "m", o).call(this, s, t);
        break;
    }
  }) : e.childNodes.forEach((s) => {
    switch (s.nodeType) {
      case Node.TEXT_NODE:
        a(this, N, "m", cs).call(this, s) && t.push(s);
        break;
      case Node.ELEMENT_NODE:
        a(this, N, "m", o).call(this, s, t);
        break;
    }
  });
};
ds = function() {
  if (!this.isSupported || !this.isConnected || (CSS.highlights.delete(a(this, tt, "f")), a(this, W, "f").length = 0, this.disabled)) return;
  if (!this.term) {
    this.dispatchEvent(new CustomEvent("highlight", { detail: [...a(this, W, "f")], bubbles: false, composed: false }));
    return;
  }
  const e = new Array();
  if (a(this, N, "m", xi).call(this, this, e), e.length > 0) {
    const t = this.caseSensitive ? this.term : this.term.toLowerCase();
    switch (this.mode) {
      case "starts-with":
        {
          const s = e[0];
          if (((this.caseSensitive ? s.textContent : s.textContent?.toLowerCase()) ?? "").startsWith(t)) {
            const r = new Range();
            r.setStart(s, 0), r.setEnd(s, t.length), a(this, W, "f").push(r);
          }
        }
        break;
      case "ends-with":
        {
          const s = e[e.length - 1], n = (this.caseSensitive ? s.textContent : s.textContent?.toLowerCase()) ?? "";
          if (n.endsWith(t)) {
            const r = n.length - t.length, l = r + t.length, p = new Range();
            p.setStart(s, r), p.setEnd(s, l), a(this, W, "f").push(p);
          }
        }
        break;
      case "contains":
        b(this, W, e.map((s) => ({ el: s, text: (this.caseSensitive ? s.textContent : s.textContent?.toLowerCase()) ?? "" })).map(({ el: s, text: n }) => {
          const r = new Array();
          let l = 0;
          for (; l < n.length; ) {
            const p = n.indexOf(t, l);
            if (p === -1) break;
            r.push(p), l = p + t.length;
          }
          return r.map((p) => {
            const m = new Range();
            return m.setStart(s, p), m.setEnd(s, p + t.length), m;
          });
        }).flat(), "f");
        break;
    }
    a(this, W, "f").length > 0 && CSS.highlights.set(a(this, tt, "f"), new Highlight(...a(this, W, "f")));
  }
  this.dispatchEvent(new CustomEvent("highlight", { detail: [...a(this, W, "f")], bubbles: false, composed: false }));
};
V.styles = A`:host { display: contents; }`;
V.__nextId = 0;
f([x({ type: Boolean, reflect: true })], V.prototype, "disabled", void 0);
f([x()], V.prototype, "term", void 0);
f([x({ attribute: "case-sensitive", type: Boolean })], V.prototype, "caseSensitive", void 0);
f([x()], V.prototype, "mode", void 0);
V = hs = f([P("m3e-text-highlight")], V);
let ps = class extends E {
  render() {
    return L`<span class="base"><slot></slot></span>`;
  }
};
ps.styles = A`:host { flex: 1 1 auto; display: inline-flex; align-items: center; flex-wrap: nowrap; min-width: 0; } .base { flex: 1 1 auto; display: inline; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`;
ps = f([P("m3e-text-overflow")], ps);
const X = { activeIndicatorSize: i("var(--m3e-loading-indicator-size, 2.375rem)"), activeIndicatorColor: i(`var(--m3e-loading-indicator-active-indicator-color, ${c.color.primary})`), containedActiveIndicatorColor: i(`var(--m3e-loading-indicator-contained-active-indicator-color, ${c.color.onPrimaryContainer})`), containedContainerColor: i(`var(--m3e-loading-indicator-contained-container-color, ${c.color.secondaryContainer})`), containerShape: i(`var(--m3e-loading-indicator-container-shape, ${c.shape.corner.full})`), containerSize: i("var(--m3e-loading-indicator-container-size, 3rem)") }, Os = { "4-sided-cookie": "M230.389 50.473C293.109 23.2328 356.767 86.8908 329.527 149.611L325.023 159.981C316.707 179.13 316.707 200.87 325.023 220.019L329.527 230.389C356.767 293.109 293.109 356.767 230.389 329.527L220.019 325.023C200.87 316.707 179.13 316.707 159.981 325.023L149.611 329.527C86.8908 356.767 23.2328 293.109 50.473 230.389L54.9768 220.019C63.2934 200.87 63.2934 179.13 54.9768 159.981L50.473 149.611C23.2328 86.8908 86.8908 23.2328 149.611 50.473L159.981 54.9768C179.13 63.2934 200.87 63.2934 220.019 54.9768L230.389 50.473Z", "9-sided-cookie": "M154.828 43.2756C156.574 41.8498 157.448 41.1369 158.245 40.535C177.03 26.3548 202.97 26.3548 221.755 40.535C222.552 41.1369 223.425 41.8498 225.172 43.2756C225.952 43.9121 226.342 44.2303 226.727 44.5333C235.567 51.4788 246.406 55.4147 257.652 55.7636C258.143 55.7788 258.647 55.785 259.654 55.7975C261.911 55.8255 263.039 55.8395 264.037 55.8898C287.563 57.0742 307.435 73.7107 312.689 96.6205C312.912 97.5928 313.121 98.6991 313.541 100.911C313.728 101.899 313.822 102.393 313.922 102.872C316.219 113.862 321.986 123.828 330.377 131.308C330.743 131.635 331.125 131.962 331.888 132.618C333.599 134.087 334.454 134.821 335.187 135.5C352.445 151.495 356.95 176.983 346.215 197.903C345.76 198.791 345.208 199.773 344.104 201.737C343.611 202.613 343.364 203.052 343.132 203.483C337.812 213.375 335.809 224.708 337.418 235.82C337.488 236.304 337.569 236.8 337.732 237.792C338.096 240.014 338.278 241.125 338.402 242.115C341.318 265.436 328.347 287.851 306.647 296.991C305.726 297.379 304.67 297.778 302.559 298.574C301.617 298.929 301.146 299.107 300.69 299.289C290.241 303.455 281.406 310.852 275.48 320.395C275.221 320.811 274.964 321.243 274.449 322.107C273.297 324.043 272.721 325.011 272.178 325.849C259.387 345.584 235.011 354.436 212.498 347.521C211.543 347.228 210.477 346.856 208.347 346.112C207.396 345.78 206.921 345.614 206.455 345.461C195.767 341.951 184.233 341.951 173.545 345.461C173.079 345.614 172.603 345.78 171.652 346.112C169.522 346.856 168.457 347.228 167.502 347.521C144.989 354.436 120.613 345.584 107.822 325.849C107.279 325.011 106.703 324.043 105.55 322.107C105.036 321.243 104.779 320.811 104.52 320.395C98.5939 310.852 89.7583 303.455 79.3096 299.289C78.8539 299.107 78.3827 298.929 77.4404 298.574C75.3294 297.778 74.274 297.379 73.3529 296.991C51.6523 287.851 38.6819 265.436 41.598 242.115C41.7218 241.125 41.9039 240.014 42.2682 237.792C42.4308 236.8 42.5121 236.304 42.5822 235.82C44.1908 224.708 42.188 213.375 36.8675 203.483C36.6354 203.052 36.389 202.613 35.8962 201.737C34.7921 199.773 34.2401 198.791 33.7845 197.903C23.0499 176.983 27.5544 151.495 44.8128 135.5C45.5454 134.821 46.4007 134.087 48.1113 132.618C48.875 131.962 49.2568 131.635 49.6228 131.308C58.0134 123.828 63.7804 113.862 66.0777 102.872C66.1779 102.393 66.2715 101.899 66.4588 100.911C66.8783 98.699 67.088 97.5928 67.311 96.6204C72.5652 73.7107 92.4369 57.0742 115.962 55.8898C116.961 55.8395 118.089 55.8255 120.346 55.7975C121.353 55.785 121.857 55.7788 122.347 55.7636C133.594 55.4147 144.432 51.4788 153.272 44.5333C153.658 44.2303 154.048 43.9121 154.828 43.2756Z", oval: "M271.309 271.309C201.705 340.913 108.877 360.935 63.9707 316.029C19.0648 271.123 39.0867 178.295 108.691 108.691C178.295 39.0867 271.123 19.0648 316.029 63.9707C360.935 108.877 340.913 201.705 271.309 271.309Z", pentagon: "M155.064 49.459C176.093 34.1803 204.569 34.1803 225.598 49.459L322.926 120.171C343.955 135.45 352.754 162.532 344.722 187.253L307.546 301.668C299.514 326.39 276.476 343.127 250.483 343.127H130.18C104.186 343.127 81.1489 326.39 73.1164 301.668L35.9407 187.253C27.9082 162.532 36.7077 135.45 57.737 120.171L155.064 49.459Z", pill: "M116.116 71.7851C169.162 18.7383 255.168 18.7383 308.215 71.7851C361.262 124.832 361.262 210.838 308.215 263.884L263.884 308.215C210.838 361.262 124.832 361.262 71.7851 308.215C18.7383 255.168 18.7383 169.162 71.7851 116.116L116.116 71.7851Z", "soft-burst": "M175.147 33.1508C181.983 22.2831 198.017 22.2831 204.853 33.1508L221.238 59.2009C225.731 66.3458 234.797 69.2506 242.692 66.0751L271.475 54.4972C283.482 49.6671 296.455 58.9613 295.507 71.7154L293.235 102.288C292.612 110.673 298.215 118.278 306.494 120.284L336.681 127.601C349.275 130.653 354.23 145.692 345.861 155.461L325.8 178.877C320.298 185.3 320.298 194.7 325.8 201.123L345.861 224.539C354.23 234.308 349.275 249.347 336.681 252.399L306.494 259.716C298.215 261.722 292.612 269.327 293.235 277.712L295.507 308.285C296.455 321.039 283.482 330.333 271.475 325.503L242.692 313.925C234.797 310.749 225.731 313.654 221.238 320.799L204.853 346.849C198.017 357.717 181.983 357.717 175.147 346.849L158.762 320.799C154.269 313.654 145.203 310.749 137.308 313.925L108.525 325.503C96.5177 330.333 83.5454 321.039 84.4931 308.285L86.7649 277.712C87.388 269.327 81.785 261.722 73.5056 259.716L43.3186 252.399C30.7252 249.347 25.7702 234.308 34.1391 224.539L54.1997 201.123C59.7018 194.7 59.7018 185.3 54.1997 178.877L34.1391 155.461C25.7702 145.692 30.7252 130.653 43.3186 127.601L73.5056 120.284C81.785 118.278 87.388 110.673 86.7649 102.288L84.4931 71.7154C83.5454 58.9613 96.5177 49.6671 108.525 54.4972L137.308 66.0751C145.203 69.2506 154.269 66.3458 158.762 59.201L175.147 33.1508Z", sunny: "M276.453 68.8118C286.405 69.4881 291.381 69.8263 295.404 71.5853C301.223 74.1305 305.87 78.7766 308.415 84.5965C310.174 88.6186 310.512 93.5948 311.188 103.547L312.732 126.259C313.005 130.284 313.142 132.296 313.579 134.219C314.212 136.997 315.31 139.648 316.827 142.059C317.877 143.728 319.203 145.248 321.856 148.288L336.824 165.438C343.384 172.954 346.663 176.712 348.263 180.8C350.579 186.715 350.579 193.285 348.263 199.2C346.663 203.288 343.384 207.046 336.824 214.562L321.856 231.712C319.203 234.752 317.877 236.272 316.827 237.941C315.31 240.352 314.212 243.003 313.579 245.781C313.142 247.704 313.005 249.716 312.732 253.741L311.188 276.453C310.512 286.405 310.174 291.381 308.415 295.404C305.87 301.223 301.223 305.87 295.404 308.415C291.381 310.174 286.405 310.512 276.453 311.188L253.741 312.732C249.716 313.005 247.704 313.142 245.781 313.579C243.003 314.212 240.352 315.31 237.941 316.827C236.272 317.877 234.752 319.203 231.712 321.856L214.562 336.824C207.046 343.384 203.288 346.663 199.2 348.263C193.285 350.579 186.715 350.579 180.8 348.263C176.712 346.663 172.954 343.384 165.438 336.824L148.288 321.856C145.248 319.203 143.728 317.877 142.059 316.827C139.648 315.31 136.997 314.212 134.219 313.579C132.296 313.142 130.284 313.005 126.259 312.732L103.547 311.188C93.5947 310.512 88.6186 310.174 84.5965 308.415C78.7766 305.87 74.1305 301.223 71.5853 295.404C69.8263 291.381 69.4881 286.405 68.8118 276.453L67.2684 253.741C66.9949 249.716 66.8581 247.704 66.4206 245.781C65.7883 243.003 64.6903 240.352 63.173 237.941C62.123 236.272 60.7965 234.752 58.1437 231.712L43.1756 214.562C36.6164 207.046 33.3369 203.288 31.7366 199.2C29.4211 193.285 29.4211 186.715 31.7366 180.8C33.3369 176.712 36.6164 172.954 43.1756 165.438L58.1437 148.288C60.7965 145.248 62.123 143.728 63.173 142.059C64.6903 139.648 65.7883 136.997 66.4206 134.219C66.8581 132.296 66.9949 130.284 67.2684 126.259L68.8118 103.547C69.4881 93.5948 69.8263 88.6186 71.5853 84.5965C74.1305 78.7766 78.7766 74.1305 84.5965 71.5853C88.6186 69.8263 93.5948 69.4881 103.547 68.8118L126.259 67.2684C130.284 66.9949 132.296 66.8581 134.219 66.4206C136.997 65.7883 139.648 64.6903 142.059 63.173C143.728 62.123 145.248 60.7966 148.288 58.1437L165.438 43.1756C172.954 36.6164 176.712 33.3369 180.8 31.7366C186.715 29.4211 193.285 29.4211 199.2 31.7366C203.288 33.3369 207.046 36.6164 214.562 43.1756L231.712 58.1437C234.752 60.7966 236.272 62.123 237.941 63.173C240.352 64.6903 243.003 65.7883 245.781 66.4206C247.704 66.8581 249.716 66.9949 253.741 67.2684L276.453 68.8118Z" };
let st = new Array();
const _i = /* @__PURE__ */ new Map();
for (const o2 in Os) st.push(Os[o2]), _i.set(o2, st.length - 1);
const Ci = {};
st = rn(st, 300);
for (const o2 of _i) Ci[o2[0]] = i(st[o2[1]]);
const Y = Ci;
let it = class extends Ln(pe(E, "progressbar")) {
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
  firstUpdated(e) {
    super.firstUpdated(e), this._container?.classList.toggle("animate", true);
  }
  render() {
    return L`<div class="container" aria-hidden="true"><div class="active-indicator-wrapper"><div class="active-indicator"></div></div></div>`;
  }
};
it.styles = A`:host { display: inline-block; aspect-ratio: 1 / 1; contain: strict; vertical-align: middle; content-visibility: auto; } :host([variant="uncontained"]) { width: ${X.activeIndicatorSize}; } :host([variant="contained"]) { width: ${X.containerSize}; } :host([variant="uncontained"]) .active-indicator { background-color: ${X.activeIndicatorColor}; } :host([variant="contained"]) .active-indicator { background-color: ${X.containedActiveIndicatorColor}; } :host([variant="contained"]) .container { background-color: ${X.containedContainerColor}; } .container { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; border-radius: ${X.containerShape}; } .active-indicator { margin: auto; aspect-ratio: 1 / 1; width: calc(${X.activeIndicatorSize} * 0.842); transform-origin: center; transition: clip-path ${c.motion.spring.slowEffects}; will-change: transform, clip-path; --_polygon-soft-burst: polygon(${Y["soft-burst"]}); --_polygon-9-sided-cookie: polygon(${Y["9-sided-cookie"]}); --_polygon-pentagon: polygon(${Y.pentagon}); --_polygon-pill: polygon(${Y.pill}); --_polygon-sunny: polygon(${Y.sunny}); --_polygon-4-sided-cookie: polygon(${Y["4-sided-cookie"]}); --_polygon-oval: polygon(${Y.oval}); } .container.animate .active-indicator-wrapper { animation: rotate-outer 4666ms linear infinite; transform-origin: center; display: flex; align-items: center; justify-content: center; will-change: transform; } @keyframes rotate-outer { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } .container.animate .active-indicator { animation: rotate-inner 4666ms cubic-bezier(0.34, 0.88, 0.34, 1) infinite; } @keyframes rotate-inner { 0% { clip-path: var(--_polygon-soft-burst); transform: rotate(0deg); } 14% { clip-path: var(--_polygon-9-sided-cookie); transform: rotate(154deg) scale(1); } 29% { clip-path: var(--_polygon-pentagon); transform: rotate(309deg) scale(1); } 43% { clip-path: var(--_polygon-pill); transform: rotate(463deg) scale(1); } 57% { clip-path: var(--_polygon-sunny); transform: rotate(617deg) scale(1); } 71% { clip-path: var(--_polygon-4-sided-cookie); transform: rotate(771deg) scale(1); } 83% { clip-path: var(--_polygon-oval); transform: rotate(926deg) scale(1); } 100% { clip-path: var(--_polygon-soft-burst); transform: rotate(1080deg) scale(1); } } @media (forced-colors: active) { .active-indicator { background-color: CanvasText !important; } }`;
f([It(".container")], it.prototype, "_container", void 0);
f([x({ reflect: true })], it.prototype, "variant", void 0);
it = f([P("m3e-loading-indicator")], it);
const zn = ["aria-label"], Hn = 24, Tn = 240, Fn = 48, Pn = 38 / 48, Dn = wi({ __name: "MDLoadingIndicator", props: { label: {}, size: { default: 48 } }, setup(o2) {
  const e = o2, t = Kt(() => Number.isFinite(e.size) ? Math.min(Tn, Math.max(Hn, e.size)) : Fn), s = Kt(() => t.value * Pn), n = Kt(() => ({ width: `${t.value}px`, height: `${t.value}px`, "--m3e-loading-indicator-size": `${s.value}px` }));
  return (r, l) => (Ei(), $i("m3e-loading-indicator", { class: "md-loading-indicator", "aria-label": e.label, style: ki(n.value) }, null, 12, zn));
} }), ao = Si(Dn, [["__scopeId", "data-v-c9c869e6"]]);
export {
  bs as A,
  c as D,
  jn as F,
  Vn as K,
  qn as L,
  ao as M,
  si as P,
  pe as R,
  a as _,
  Kn as a,
  Nn as b,
  ci as c,
  E as d,
  Un as e,
  Ot as f,
  C as g,
  ri as h,
  A as i,
  Mn as j,
  L as k,
  O as l,
  Bn as m,
  we as n,
  f as o,
  qt as p,
  It as q,
  i as r,
  ns as s,
  x as t,
  ii as u,
  P as v
};
