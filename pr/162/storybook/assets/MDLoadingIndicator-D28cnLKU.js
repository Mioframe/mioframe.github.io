import { d as ks, c as Cs, i as $s, l as Es, e as Ms } from "./iframe-DqsqLf0r.js";
import { _ as Ss } from "./_plugin-vue_export-helper-DlAUqK2U.js";
function f(a2, e, t, i) {
  var n = arguments.length, o = n < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(a2, e, t, i);
  else for (var m = a2.length - 1; m >= 0; m--) (l = a2[m]) && (o = (n < 3 ? l(o) : n > 3 ? l(e, t, o) : l(e, t)) || o);
  return n > 3 && o && Object.defineProperty(e, t, o), o;
}
function r(a2, e, t, i) {
  if (t === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? a2 !== e || !i : !e.has(a2)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(a2) : i ? i.value : e.get(a2);
}
function b(a2, e, t, i, n) {
  if (i === "m") throw new TypeError("Private method is not writable");
  if (i === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? a2 !== e || !n : !e.has(a2)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? n.call(a2, t) : n ? n.value = t : e.set(a2, t), t;
}
const dt = globalThis, ui = dt.ShadowRoot && (dt.ShadyCSS === void 0 || dt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, pi = /* @__PURE__ */ Symbol(), _i = /* @__PURE__ */ new WeakMap();
let qi = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = true, i !== pi) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ui && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = _i.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && _i.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const s = (a2) => new qi(typeof a2 == "string" ? a2 : a2 + "", void 0, pi), z = (a2, ...e) => {
  const t = a2.length === 1 ? a2[0] : e.reduce((i, n, o) => i + ((l) => {
    if (l._$cssResult$ === true) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + a2[o + 1], a2[0]);
  return new qi(t, a2, pi);
}, As = (a2, e) => {
  if (ui) a2.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), n = dt.litNonce;
    n !== void 0 && i.setAttribute("nonce", n), i.textContent = t.cssText, a2.appendChild(i);
  }
}, wi = ui ? (a2) => a2 : (a2) => a2 instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return s(t);
})(a2) : a2;
const { is: zs, defineProperty: Ls, getOwnPropertyDescriptor: Ds, getOwnPropertyNames: Ps, getOwnPropertySymbols: Is, getPrototypeOf: Rs } = Object, Tt = globalThis, ki = Tt.trustedTypes, Ws = ki ? ki.emptyScript : "", Hs = Tt.reactiveElementPolyfillSupport, Ue = (a2, e) => a2, Pt = { toAttribute(a2, e) {
  switch (e) {
    case Boolean:
      a2 = a2 ? Ws : null;
      break;
    case Object:
    case Array:
      a2 = a2 == null ? a2 : JSON.stringify(a2);
  }
  return a2;
}, fromAttribute(a2, e) {
  let t = a2;
  switch (e) {
    case Boolean:
      t = a2 !== null;
      break;
    case Number:
      t = a2 === null ? null : Number(a2);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(a2);
      } catch {
        t = null;
      }
  }
  return t;
} }, fi = (a2, e) => !zs(a2, e), Ci = { attribute: true, type: String, converter: Pt, reflect: false, useDefault: false, hasChanged: fi };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), Tt.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let ye = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ci) {
    if (t.state && (t.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = true), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = /* @__PURE__ */ Symbol(), n = this.getPropertyDescriptor(e, i, t);
      n !== void 0 && Ls(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: n, set: o } = Ds(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get: n, set(l) {
      const m = n?.call(this);
      o?.call(this, l), this.requestUpdate(e, m, i);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ci;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ue("elementProperties"))) return;
    const e = Rs(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ue("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(Ue("properties"))) {
      const t = this.properties, i = [...Ps(t), ...Is(t)];
      for (const n of i) this.createProperty(n, t[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, n] of t) this.elementProperties.set(i, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const n = this._$Eu(t, i);
      n !== void 0 && this._$Eh.set(n, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const n of i) t.unshift(wi(n));
    } else e !== void 0 && t.push(wi(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === false ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return As(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((e) => e.hostConnected?.());
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((e) => e.hostDisconnected?.());
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$ET(e, t) {
    const i = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, i);
    if (n !== void 0 && i.reflect === true) {
      const o = (i.converter?.toAttribute !== void 0 ? i.converter : Pt).toAttribute(t, i.type);
      this._$Em = e, o == null ? this.removeAttribute(n) : this.setAttribute(n, o), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const i = this.constructor, n = i._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const o = i.getPropertyOptions(n), l = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : Pt;
      this._$Em = n;
      const m = l.fromAttribute(t, o.type);
      this[n] = m ?? this._$Ej?.get(n) ?? m, this._$Em = null;
    }
  }
  requestUpdate(e, t, i, n = false, o) {
    if (e !== void 0) {
      const l = this.constructor;
      if (n === false && (o = this[e]), i ??= l.getPropertyOptions(e), !((i.hasChanged ?? fi)(o, t) || i.useDefault && i.reflect && o === this._$Ej?.get(e) && !this.hasAttribute(l._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === false && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: n, wrapped: o }, l) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, l ?? t ?? this[e]), o !== true || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), n === true && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
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
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [n, o] of i) {
        const { wrapped: l } = o, m = this[n];
        l !== true || this._$AL.has(n) || m === void 0 || this.C(n, void 0, o, m);
      }
    }
    let e = false;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((i) => i.hostUpdate?.()), this.update(t)) : this._$EM();
    } catch (i) {
      throw e = false, this._$EM(), i;
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
ye.elementStyles = [], ye.shadowRootOptions = { mode: "open" }, ye[Ue("elementProperties")] = /* @__PURE__ */ new Map(), ye[Ue("finalized")] = /* @__PURE__ */ new Map(), Hs?.({ ReactiveElement: ye }), (Tt.reactiveElementVersions ??= []).push("2.1.2");
const gi = globalThis, $i = (a2) => a2, It = gi.trustedTypes, Ei = It ? It.createPolicy("lit-html", { createHTML: (a2) => a2 }) : void 0, Bi = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, Oi = "?" + U, Ts = `<${Oi}>`, ce = document, Ge = () => ce.createComment(""), Qe = (a2) => a2 === null || typeof a2 != "object" && typeof a2 != "function", yi = Array.isArray, Ns = (a2) => yi(a2) || typeof a2?.[Symbol.iterator] == "function", Vt = `[ 	
\f\r]`, Pe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Mi = /-->/g, Si = />/g, Z = RegExp(`>|${Vt}(?:([^\\s"'>=/]+)(${Vt}*=${Vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ai = /'/g, zi = /"/g, Ui = /^(?:script|style|textarea|title)$/i, Fs = (a2) => (e, ...t) => ({ _$litType$: a2, strings: e, values: t }), A = Fs(1), $e = /* @__PURE__ */ Symbol.for("lit-noChange"), w = /* @__PURE__ */ Symbol.for("lit-nothing"), Li = /* @__PURE__ */ new WeakMap(), ae = ce.createTreeWalker(ce, 129);
function Vi(a2, e) {
  if (!yi(a2) || !a2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ei !== void 0 ? Ei.createHTML(e) : e;
}
const qs = (a2, e) => {
  const t = a2.length - 1, i = [];
  let n, o = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Pe;
  for (let m = 0; m < t; m++) {
    const u = a2[m];
    let p, g, c = -1, v = 0;
    for (; v < u.length && (l.lastIndex = v, g = l.exec(u), g !== null); ) v = l.lastIndex, l === Pe ? g[1] === "!--" ? l = Mi : g[1] !== void 0 ? l = Si : g[2] !== void 0 ? (Ui.test(g[2]) && (n = RegExp("</" + g[2], "g")), l = Z) : g[3] !== void 0 && (l = Z) : l === Z ? g[0] === ">" ? (l = n ?? Pe, c = -1) : g[1] === void 0 ? c = -2 : (c = l.lastIndex - g[2].length, p = g[1], l = g[3] === void 0 ? Z : g[3] === '"' ? zi : Ai) : l === zi || l === Ai ? l = Z : l === Mi || l === Si ? l = Pe : (l = Z, n = void 0);
    const y = l === Z && a2[m + 1].startsWith("/>") ? " " : "";
    o += l === Pe ? u + Ts : c >= 0 ? (i.push(p), u.slice(0, c) + Bi + u.slice(c) + U + y) : u + U + (c === -2 ? m : y);
  }
  return [Vi(a2, o + (a2[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class Je {
  constructor({ strings: e, _$litType$: t }, i) {
    let n;
    this.parts = [];
    let o = 0, l = 0;
    const m = e.length - 1, u = this.parts, [p, g] = qs(e, t);
    if (this.el = Je.createElement(p, i), ae.currentNode = this.el.content, t === 2 || t === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (n = ae.nextNode()) !== null && u.length < m; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const c of n.getAttributeNames()) if (c.endsWith(Bi)) {
          const v = g[l++], y = n.getAttribute(c).split(U), k = /([.?@])?(.*)/.exec(v);
          u.push({ type: 1, index: o, name: k[2], strings: y, ctor: k[1] === "." ? Os : k[1] === "?" ? Us : k[1] === "@" ? Vs : Nt }), n.removeAttribute(c);
        } else c.startsWith(U) && (u.push({ type: 6, index: o }), n.removeAttribute(c));
        if (Ui.test(n.tagName)) {
          const c = n.textContent.split(U), v = c.length - 1;
          if (v > 0) {
            n.textContent = It ? It.emptyScript : "";
            for (let y = 0; y < v; y++) n.append(c[y], Ge()), ae.nextNode(), u.push({ type: 2, index: ++o });
            n.append(c[v], Ge());
          }
        }
      } else if (n.nodeType === 8) if (n.data === Oi) u.push({ type: 2, index: o });
      else {
        let c = -1;
        for (; (c = n.data.indexOf(U, c + 1)) !== -1; ) u.push({ type: 7, index: o }), c += U.length - 1;
      }
      o++;
    }
  }
  static createElement(e, t) {
    const i = ce.createElement("template");
    return i.innerHTML = e, i;
  }
}
function Ee(a2, e, t = a2, i) {
  if (e === $e) return e;
  let n = i !== void 0 ? t._$Co?.[i] : t._$Cl;
  const o = Qe(e) ? void 0 : e._$litDirective$;
  return n?.constructor !== o && (n?._$AO?.(false), o === void 0 ? n = void 0 : (n = new o(a2), n._$AT(a2, t, i)), i !== void 0 ? (t._$Co ??= [])[i] = n : t._$Cl = n), n !== void 0 && (e = Ee(a2, n._$AS(a2, e.values), n, i)), e;
}
class Bs {
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
    const { el: { content: t }, parts: i } = this._$AD, n = (e?.creationScope ?? ce).importNode(t, true);
    ae.currentNode = n;
    let o = ae.nextNode(), l = 0, m = 0, u = i[0];
    for (; u !== void 0; ) {
      if (l === u.index) {
        let p;
        u.type === 2 ? p = new at(o, o.nextSibling, this, e) : u.type === 1 ? p = new u.ctor(o, u.name, u.strings, this, e) : u.type === 6 && (p = new js(o, this, e)), this._$AV.push(p), u = i[++m];
      }
      l !== u?.index && (o = ae.nextNode(), l++);
    }
    return ae.currentNode = ce, n;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class at {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, i, n) {
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = n, this._$Cv = n?.isConnected ?? true;
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
    e = Ee(this, e, t), Qe(e) ? e === w || e == null || e === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : e !== this._$AH && e !== $e && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Ns(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== w && Qe(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ce.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: i } = e, n = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Je.createElement(Vi(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === n) this._$AH.p(t);
    else {
      const o = new Bs(n, this), l = o.u(this.options);
      o.p(t), this.T(l), this._$AH = o;
    }
  }
  _$AC(e) {
    let t = Li.get(e.strings);
    return t === void 0 && Li.set(e.strings, t = new Je(e)), t;
  }
  k(e) {
    yi(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, n = 0;
    for (const o of e) n === t.length ? t.push(i = new at(this.O(Ge()), this.O(Ge()), this, this.options)) : i = t[n], i._$AI(o), n++;
    n < t.length && (this._$AR(i && i._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(false, true, t); e !== this._$AB; ) {
      const i = $i(e).nextSibling;
      $i(e).remove(), e = i;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}
class Nt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, n, o) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = o, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = w;
  }
  _$AI(e, t = this, i, n) {
    const o = this.strings;
    let l = false;
    if (o === void 0) e = Ee(this, e, t, 0), l = !Qe(e) || e !== this._$AH && e !== $e, l && (this._$AH = e);
    else {
      const m = e;
      let u, p;
      for (e = o[0], u = 0; u < o.length - 1; u++) p = Ee(this, m[i + u], t, u), p === $e && (p = this._$AH[u]), l ||= !Qe(p) || p !== this._$AH[u], p === w ? e = w : e !== w && (e += (p ?? "") + o[u + 1]), this._$AH[u] = p;
    }
    l && !n && this.j(e);
  }
  j(e) {
    e === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Os extends Nt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === w ? void 0 : e;
  }
}
class Us extends Nt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== w);
  }
}
class Vs extends Nt {
  constructor(e, t, i, n, o) {
    super(e, t, i, n, o), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Ee(this, e, t, 0) ?? w) === $e) return;
    const i = this._$AH, n = e === w && i !== w || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, o = e !== w && (i === w || n);
    n && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class js {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Ee(this, e);
  }
}
const Ks = gi.litHtmlPolyfillSupport;
Ks?.(Je, at), (gi.litHtmlVersions ??= []).push("3.3.3");
const Zs = (a2, e, t) => {
  const i = t?.renderBefore ?? e;
  let n = i._$litPart$;
  if (n === void 0) {
    const o = t?.renderBefore ?? null;
    i._$litPart$ = n = new at(e.insertBefore(Ge(), o), o, void 0, t ?? {});
  }
  return n._$AI(a2), n;
};
const vi = globalThis;
class E extends ye {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Zs(t, this.renderRoot, this.renderOptions);
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
E._$litElement$ = true, E.finalized = true, vi.litElementHydrateSupport?.({ LitElement: E });
const Xs = vi.litElementPolyfillSupport;
Xs?.({ LitElement: E });
(vi.litElementVersions ??= []).push("4.2.2");
const Ys = { attribute: true, type: String, converter: Pt, reflect: false, hasChanged: fi }, Gs = (a2 = Ys, e, t) => {
  const { kind: i, metadata: n } = t;
  let o = globalThis.litPropertyMetadata.get(n);
  if (o === void 0 && globalThis.litPropertyMetadata.set(n, o = /* @__PURE__ */ new Map()), i === "setter" && ((a2 = Object.create(a2)).wrapped = true), o.set(t.name, a2), i === "accessor") {
    const { name: l } = t;
    return { set(m) {
      const u = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(l, u, a2, true, m);
    }, init(m) {
      return m !== void 0 && this.C(l, void 0, a2, m), m;
    } };
  }
  if (i === "setter") {
    const { name: l } = t;
    return function(m) {
      const u = this[l];
      e.call(this, m), this.requestUpdate(l, u, a2, true, m);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function x(a2) {
  return (e, t) => typeof t == "object" ? Gs(a2, e, t) : ((i, n, o) => {
    const l = n.hasOwnProperty(o);
    return n.constructor.createProperty(o, i), l ? Object.getOwnPropertyDescriptor(n, o) : void 0;
  })(a2, e, t);
}
const Qs = (a2, e, t) => (t.configurable = true, t.enumerable = true, Reflect.decorate && typeof e != "object" && Object.defineProperty(a2, e, t), t);
function Ft(a2, e) {
  return (t, i, n) => {
    const o = (l) => l.renderRoot?.querySelector(a2) ?? null;
    return Qs(t, i, { get() {
      return o(this);
    } });
  };
}
const jt = (a2) => a2 ?? w;
var Re, We, N;
class rt {
  constructor(e, t) {
    Re.set(this, void 0), We.set(this, void 0), N.set(this, /* @__PURE__ */ new Set()), b(this, Re, e, "f"), b(this, We, t.target, "f"), r(this, Re, "f").addController(this);
  }
  get targets() {
    return r(this, N, "f").values();
  }
  get hasTargets() {
    return r(this, N, "f").size > 0;
  }
  hostConnected() {
    r(this, We, "f") !== null && this.observe(r(this, We, "f") ?? r(this, Re, "f"));
  }
  hostDisconnected() {
    this.unobserveAll();
  }
  observe(e) {
    r(this, N, "f").has(e) || (r(this, N, "f").add(e), this._observe(e));
  }
  isObserving(e) {
    return r(this, N, "f").has(e);
  }
  unobserve(e) {
    r(this, N, "f").delete(e) && this._unobserve(e);
  }
  unobserveAll() {
    r(this, N, "f").forEach((e) => this.unobserve(e)), r(this, N, "f").clear();
  }
}
Re = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap();
function Js() {
  return matchMedia("(forced-colors: active)").matches;
}
function Di(a2, e, t) {
  return a2 + (e - a2) * t;
}
function Pi(a2, e, t, i) {
  const n = Math.pow(1 - i, 2) * a2.x + 2 * (1 - i) * i * e.x + Math.pow(i, 2) * t.x, o = Math.pow(1 - i, 2) * a2.y + 2 * (1 - i) * i * e.y + Math.pow(i, 2) * t.y;
  return { x: n, y: o };
}
function Ii(a2, e, t, i, n) {
  const o = Math.pow(1 - n, 3) * a2.x + 3 * Math.pow(1 - n, 2) * n * e.x + 3 * (1 - n) * Math.pow(n, 2) * t.x + Math.pow(n, 3) * i.x, l = Math.pow(1 - n, 3) * a2.y + 3 * Math.pow(1 - n, 2) * n * e.y + 3 * (1 - n) * Math.pow(n, 2) * t.y + Math.pow(n, 3) * i.y;
  return { x: o, y: l };
}
function en(a2) {
  return (a2.match(/[a-zA-Z][^a-zA-Z]*/g) || []).map((t) => {
    const i = t[0], n = t.slice(1).trim().split(/[\s,]+/).filter(Boolean).map(Number);
    return { type: i, nums: n };
  });
}
function tn(a2, e) {
  const t = en(a2);
  let i = { x: 0, y: 0 }, n = { x: 0, y: 0 };
  const o = [];
  for (const c of t) if (c.type === "M") i = { x: c.nums[0], y: c.nums[1] }, n = i;
  else if (c.type === "L") {
    const v = { x: c.nums[0], y: c.nums[1] }, y = v.x - i.x, k = v.y - i.y;
    o.push({ type: "L", pts: [i, v], length: Math.hypot(y, k) }), i = v;
  } else if (c.type === "H") {
    const v = { x: c.nums[0], y: i.y }, y = v.x - i.x;
    o.push({ type: "L", pts: [i, v], length: Math.abs(y) }), i = v;
  } else if (c.type === "V") {
    const v = { x: i.x, y: c.nums[0] }, y = v.y - i.y;
    o.push({ type: "L", pts: [i, v], length: Math.abs(y) }), i = v;
  } else if (c.type === "Q") {
    const v = { x: c.nums[0], y: c.nums[1] }, y = { x: c.nums[2], y: c.nums[3] };
    let k = 0, L = i;
    const D = 20;
    for (let T = 1; T <= D; T++) {
      const K = T / D, De = Pi(i, v, y, K);
      k += Math.hypot(De.x - L.x, De.y - L.y), L = De;
    }
    o.push({ type: "Q", pts: [i, v, y], length: k }), i = y;
  } else if (c.type === "C") {
    const v = { x: c.nums[0], y: c.nums[1] }, y = { x: c.nums[2], y: c.nums[3] }, k = { x: c.nums[4], y: c.nums[5] };
    let L = 0, D = i;
    const T = 20;
    for (let K = 1; K <= T; K++) {
      const De = K / T, Ut = Ii(i, v, y, k, De);
      L += Math.hypot(Ut.x - D.x, Ut.y - D.y), D = Ut;
    }
    o.push({ type: "C", pts: [i, v, y, k], length: L }), i = k;
  } else if (c.type === "Z") {
    const v = n.x - i.x, y = n.y - i.y;
    o.push({ type: "L", pts: [i, n], length: Math.hypot(v, y) }), i = n;
  }
  const m = o.reduce((c, v) => c + v.length, 0) / (e - 1), u = [];
  let p = 0, g = 0;
  for (let c = 0; c < e; c++) {
    const v = c * m;
    for (; g < o.length && p + o[g].length < v; ) p += o[g].length, g++;
    const y = o[g];
    if (!y) break;
    const k = (v - p) / y.length;
    if (y.type === "L") {
      const [L, D] = y.pts;
      u.push({ x: Di(L.x, D.x, k), y: Di(L.y, D.y, k) });
    } else if (y.type === "Q") {
      const [L, D, T] = y.pts;
      u.push(Pi(L, D, T, k));
    } else if (y.type === "C") {
      const [L, D, T, K] = y.pts;
      u.push(Ii(L, D, T, K, k));
    }
  }
  return u;
}
function sn(a2) {
  return `${a2.map((t) => {
    const i = Ri(t.x * 100, 0, 100), n = Ri(t.y * 100, 0, 100);
    return `${i.toFixed(2)}% ${n.toFixed(2)}%`;
  }).join(", ")}`;
}
function Ri(a2, e, t) {
  return Math.max(e, Math.min(t, a2));
}
function nn(a2) {
  let e = 1 / 0, t = 1 / 0, i = -1 / 0, n = -1 / 0;
  for (const o of a2) o.x < e && (e = o.x), o.x > i && (i = o.x), o.y < t && (t = o.y), o.y > n && (n = o.y);
  return { minX: e, minY: t, maxX: i, maxY: n, width: i - e, height: n - t };
}
function an(a2, e) {
  const t = a2.length, i = new Array(t);
  for (let n = 0; n < t; n++) i[n] = a2[(n + e) % t];
  return i;
}
function rn(a2, e) {
  const t = Math.min(e.length, a2.length);
  let i = 0, n = 1 / 0;
  for (let o = 0; o < t; o++) {
    let l = 0;
    for (let m = 0; m < t; m++) {
      const u = e[(m + o) % t], p = a2[m], g = u.x - p.x, c = u.y - p.y;
      if (l += g * g + c * c, l >= n) break;
    }
    l < n && (n = l, i = o);
  }
  return i;
}
function Wi(a2) {
  let e = 0;
  const t = a2.length;
  for (let i = 0; i < t; i++) {
    const n = a2[i], o = a2[(i + 1) % t];
    e += n.x * o.y - o.x * n.y;
  }
  return e / 2;
}
function on(a2) {
  const e = a2.map((n) => {
    const o = nn(n), l = n.map((y) => ({ x: y.x - o.minX, y: y.y - o.minY })), m = Math.max(o.width, o.height) || 1, u = l.map((y) => ({ x: y.x / m, y: y.y / m })), p = o.width / m, g = o.height / m, c = (1 - p) / 2, v = (1 - g) / 2;
    return u.map((y) => ({ x: y.x + c, y: y.y + v }));
  }), t = e[0], i = Math.sign(Wi(t));
  for (let n = 1; n < e.length; n++) {
    let o = e[n];
    const l = Math.sign(Wi(o));
    l !== 0 && l !== i && (o = o.slice().reverse());
    const m = rn(t, o);
    e[n] = an(o, m);
  }
  return e;
}
function ln(a2, e) {
  return on(a2.map((t) => tn(t, e))).map((t) => sn(t));
}
function Hn(a2) {
  return a2.assignedNodes({ flatten: true }).length > 0;
}
function Kt() {
  return matchMedia("(prefers-reduced-motion)").matches;
}
function dn(a2, e = document) {
  return new Promise((t) => {
    const i = e.querySelector(`#${a2}`);
    if (i) {
      t(i);
      return;
    }
    if (document.readyState === "complete" || document.readyState === "interactive") {
      t(e.querySelector(`#${a2}`));
      return;
    }
    document.addEventListener("DOMContentLoaded", () => t(e.querySelector(`#${a2}`)), { once: true });
  });
}
var _e, re, ke, Ve, we, ct, ht, mt, ut, ve, Rt, ji, ii, Ki;
class qt extends rt {
  constructor(e, t) {
    super(e, t), _e.add(this), ke.set(this, false), Ve.set(this, void 0), we.set(this, void 0), ct.set(this, (i) => r(this, _e, "m", ji).call(this, i)), ht.set(this, (i) => r(this, _e, "m", ii).call(this, i)), mt.set(this, (i) => r(this, _e, "m", Ki).call(this, i)), ut.set(this, () => b(this, ke, true, "f")), ve.set(this, () => b(this, ke, false, "f")), b(this, Ve, t.callback, "f"), b(this, we, t.filter, "f");
  }
  _observe(e) {
    e.addEventListener("keydown", r(this, ct, "f")), e.addEventListener("focusin", r(this, ht, "f")), e.addEventListener("focusout", r(this, mt, "f")), e.addEventListener("touchstart", r(this, ut, "f"), { passive: true }), e.addEventListener("touchend", r(this, ve, "f")), e.addEventListener("touchcancel", r(this, ve, "f"));
  }
  _unobserve(e) {
    e.removeEventListener("keydown", r(this, ct, "f")), e.removeEventListener("focusin", r(this, ht, "f")), e.removeEventListener("focusout", r(this, mt, "f")), e.removeEventListener("touchstart", r(this, ut, "f")), e.removeEventListener("touchend", r(this, ve, "f")), e.removeEventListener("touchcancel", r(this, ve, "f"));
  }
}
re = qt, ke = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), we = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakSet(), ji = function(e) {
  if (r(this, we, "f")?.call(this, e)) return;
  e.currentTarget.matches(":focus-within") && r(this, _e, "m", ii).call(this, e);
}, ii = function(e) {
  if (r(this, we, "f")?.call(this, e) || r(this, ke, "f")) return;
  const t = e.currentTarget;
  r(this, Ve, "f").call(this, true, t.matches(":focus-visible") || r(re, re, "f", Rt) || Js(), t);
}, Ki = function(e) {
  r(this, we, "f")?.call(this, e) || r(this, ke, "f") || r(this, Ve, "f").call(this, false, false, e.currentTarget);
};
typeof window < "u" && (window.addEventListener("keydown", () => b(re, re, true, "f", Rt), { capture: true, passive: true }), window.addEventListener("pointerdown", () => b(re, re, false, "f", Rt), { capture: true }));
Rt = { value: false };
var I, ne, Q, J, pt, be, si, ot, lt, Zi, Xi;
class Yi extends rt {
  constructor(e, t) {
    super(e, t), I.add(this), ne.set(this, void 0), Q.set(this, /* @__PURE__ */ new Map()), J.set(this, /* @__PURE__ */ new Map()), pt.set(this, (i) => r(this, I, "m", Zi).call(this, i)), be.set(this, (i) => r(this, I, "m", Xi).call(this, i)), b(this, ne, t.callback, "f"), this.startDelay = t.startDelay ?? 0, this.endDelay = t.endDelay ?? 0;
  }
  clearDelays() {
    for (const e of this.targets) r(this, I, "m", si).call(this, e);
  }
  _observe(e) {
    e.addEventListener("pointerenter", r(this, pt, "f")), e.addEventListener("pointerleave", r(this, be, "f")), e.addEventListener("touchend", r(this, be, "f"));
  }
  _unobserve(e) {
    e.removeEventListener("pointerenter", r(this, pt, "f")), e.removeEventListener("pointerleave", r(this, be, "f")), e.removeEventListener("touchend", r(this, be, "f")), r(this, I, "m", si).call(this, e);
  }
}
ne = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), be = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakSet(), si = function(e) {
  r(this, I, "m", ot).call(this, e), r(this, I, "m", lt).call(this, e);
}, ot = function(e) {
  return r(this, Q, "f").has(e) ? (clearTimeout(r(this, Q, "f").get(e)), r(this, Q, "f").delete(e)) : false;
}, lt = function(e) {
  return r(this, J, "f").has(e) ? (clearTimeout(r(this, J, "f").get(e)), r(this, J, "f").delete(e)) : false;
}, Zi = function(e) {
  const t = e.target;
  r(this, I, "m", lt).call(this, t), this.startDelay > 0 ? (r(this, I, "m", ot).call(this, t), r(this, Q, "f").set(t, setTimeout(() => {
    r(this, Q, "f").delete(t), r(this, ne, "f").call(this, true, t);
  }, this.startDelay))) : r(this, ne, "f").call(this, true, t);
}, Xi = function(e) {
  const t = e.target;
  r(this, I, "m", ot).call(this, t) || (this.endDelay > 0 ? (r(this, I, "m", lt).call(this, t), r(this, J, "f").set(t, setTimeout(() => {
    r(this, J, "f").delete(t), r(this, ne, "f").call(this, false, t);
  }, this.endDelay))) : r(this, ne, "f").call(this, false, t));
};
var B, M, q, je, oe, S, Ke, ft, gt, xe, yt, vt, Gi, Qi, Ji, es, ts, Zt;
class is extends rt {
  constructor(e, t) {
    super(e, t), B.add(this), M.set(this, void 0), q.set(this, void 0), je.set(this, void 0), oe.set(this, void 0), S.set(this, /* @__PURE__ */ new Map()), Ke.set(this, void 0), ft.set(this, (i) => r(this, B, "m", Gi).call(this, i)), gt.set(this, (i) => r(this, B, "m", Qi).call(this, i)), xe.set(this, (i) => r(this, B, "m", Ji).call(this, i)), yt.set(this, (i) => r(this, B, "m", es).call(this, i)), vt.set(this, (i) => r(this, B, "m", ts).call(this, i)), b(this, M, t.capture, "f"), b(this, q, t.callback, "f"), b(this, je, t.filter, "f"), b(this, oe, t.isPressedKey, "f"), b(this, Ke, t.minPressedDuration ?? 0, "f");
  }
  hostConnected() {
    document.addEventListener("pointerup", r(this, gt, "f"), { capture: r(this, M, "f") }), document.addEventListener("touchend", r(this, xe, "f"), { capture: r(this, M, "f") }), document.addEventListener("touchcancel", r(this, xe, "f"), { capture: r(this, M, "f") }), super.hostConnected();
  }
  hostDisconnected() {
    document.removeEventListener("pointerup", r(this, gt, "f"), { capture: r(this, M, "f") }), document.removeEventListener("touchend", r(this, xe, "f"), { capture: r(this, M, "f") }), document.removeEventListener("touchcancel", r(this, xe, "f"), { capture: r(this, M, "f") }), super.hostDisconnected(), r(this, S, "f").clear();
  }
  _observe(e) {
    e.addEventListener("pointerdown", r(this, ft, "f"), { capture: r(this, M, "f") }), r(this, oe, "f") && (e.addEventListener("keydown", r(this, yt, "f"), { capture: r(this, M, "f") }), e.addEventListener("keyup", r(this, vt, "f"), { capture: r(this, M, "f") }));
  }
  _unobserve(e) {
    e.removeEventListener("pointerdown", r(this, ft, "f"), { capture: r(this, M, "f") }), r(this, oe, "f") && (e.removeEventListener("keydown", r(this, yt, "f"), { capture: r(this, M, "f") }), e.removeEventListener("keyup", r(this, vt, "f"), { capture: r(this, M, "f") }));
  }
}
M = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakSet(), Gi = function(e) {
  if (!r(this, je, "f")?.call(this, e) && !(e.pointerType === "mouse" && e.button > 1)) {
    for (const t of e.composedPath()) if (t instanceof HTMLElement && this.isObserving(t)) {
      r(this, S, "f").has(t) || (r(this, S, "f").set(t, performance.now()), r(this, q, "f").call(this, true, { x: e.x, y: e.y }, t));
      break;
    }
  }
}, Qi = function(e) {
  e.pointerType === "mouse" && e.button > 1 || r(this, B, "m", Zt).call(this, e.x, e.y);
}, Ji = function(e) {
  r(this, B, "m", Zt).call(this, e.changedTouches[0]?.clientX ?? 0, e.changedTouches[0]?.clientY ?? 0);
}, es = function(e) {
  if (r(this, je, "f")?.call(this, e) || e.target !== e.currentTarget) return;
  const t = e.currentTarget;
  if (r(this, oe, "f")?.call(this, e.key) && (e.key === " " && e.preventDefault(), !r(this, S, "f").has(t))) {
    r(this, S, "f").set(t, performance.now());
    const i = t.getBoundingClientRect();
    r(this, q, "f").call(this, true, { x: i.x + i.width / 2, y: i.y + i.height / 2 }, t);
  }
}, ts = function(e) {
  const t = e.target;
  if (r(this, S, "f").has(t) && r(this, oe, "f")?.call(this, e.key)) {
    const i = r(this, Ke, "f") - (performance.now() - r(this, S, "f").get(t)), n = t.getBoundingClientRect();
    i > 0 ? setTimeout(() => {
      r(this, S, "f").delete(t), r(this, q, "f").call(this, false, { x: n.x + n.width / 2, y: n.y + n.height / 2 }, t);
    }, i) : (r(this, S, "f").delete(t), r(this, q, "f").call(this, false, { x: n.x + n.width / 2, y: n.y + n.height / 2 }, t));
  }
}, Zt = function(e, t) {
  for (const i of r(this, S, "f")) {
    const n = r(this, Ke, "f") - (performance.now() - i[1]);
    n > 0 ? setTimeout(() => {
      r(this, S, "f").delete(i[0]), r(this, q, "f").call(this, false, { x: e, y: t }, i[0]);
    }, n) : (r(this, S, "f").delete(i[0]), r(this, q, "f").call(this, false, { x: e, y: t }, i[0]));
  }
};
var He, bt, xt, ee, Te;
class Tn extends rt {
  constructor(e, t) {
    if (super(e, t), He.set(this, void 0), bt.set(this, void 0), xt.set(this, void 0), ee.set(this, void 0), Te.set(this, true), b(this, He, t.callback, "f"), b(this, bt, t.skipInitial ?? false, "f"), b(this, xt, t.config, "f"), !window.ResizeObserver) {
      console.warn("ResizeController error: the browser does not support ResizeObserver.");
      return;
    }
    b(this, ee, new ResizeObserver((i, n) => r(this, He, "f").call(this, i, n)), "f");
  }
  async hostUpdated() {
    r(this, ee, "f") && !r(this, bt, "f") && r(this, Te, "f") && r(this, He, "f").call(this, [], r(this, ee, "f")), b(this, Te, false, "f");
  }
  _observe(e) {
    r(this, ee, "f")?.observe(e, r(this, xt, "f")), b(this, Te, true, "f");
  }
  _unobserve(e) {
    r(this, ee, "f")?.unobserve(e);
  }
}
He = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap();
const R = (a2) => (e, t) => {
  const i = () => {
    typeof window < "u" && !customElements.get(a2) && customElements.define(a2, e);
  };
  t ? t.addInitializer(i) : i();
};
function ss(a2) {
  const e = /* @__PURE__ */ Symbol("_id");
  return (t, i, n) => {
    const o = n.value;
    return n.value = function(...l) {
      const m = this;
      clearTimeout(m[e]), m[e] = setTimeout(() => o.apply(this, l), a2);
    }, n;
  };
}
var le, Wt, Ze, _t, te, Hi, Xt, ns, as;
class cn extends rt {
  constructor(e, t) {
    super(e, t), le.add(this), Wt.set(this, void 0), Ze.set(this, void 0), _t.set(this, (i) => r(this, le, "m", as).call(this, i)), te.set(this, /* @__PURE__ */ new Map()), b(this, Wt, t.debounce === true, "f"), b(this, Ze, t.callback, "f");
  }
  getScrollContainers(e) {
    return r(this, te, "f").get(e);
  }
  _observe(e) {
    const t = r(this, le, "m", ns).call(this, e);
    if (t.length > 0) {
      r(this, te, "f").set(e, t);
      for (const i of t) (i === document.documentElement ? document : i).addEventListener("scroll", r(this, _t, "f"), { passive: true });
    }
  }
  _unobserve(e) {
    if (r(this, te, "f").has(e)) {
      for (const t of r(this, te, "f").get(e)) (t === document.documentElement ? document : t).removeEventListener("scroll", r(this, _t, "f"));
      r(this, te, "f").delete(e);
    }
  }
  _debounceCallback(e) {
    r(this, Ze, "f").call(this, e);
  }
}
Wt = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakSet(), Hi = function(e) {
  const t = e.shadowRoot;
  if (!t) return null;
  const i = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT);
  let n = i.currentNode;
  for (; n; ) {
    if (n instanceof Element && r(this, le, "m", Xt).call(this, n)) return n;
    n = i.nextNode();
  }
  return null;
}, Xt = function(e) {
  const t = getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowY + t.overflowX);
}, ns = function(e) {
  const t = new Array(), i = r(this, le, "m", Hi).call(this, e);
  i && t.push(i);
  let n = e;
  for (; n; ) r(this, le, "m", Xt).call(this, n) && t.push(n), n = n.parentElement;
  return t;
}, as = function(e) {
  const t = e.target === document ? document.documentElement : e.target;
  r(this, Wt, "f") ? this._debounceCallback(t) : r(this, Ze, "f").call(this, t);
};
f([ss(40)], cn.prototype, "_debounceCallback", null);
function rs(a2, ...e) {
  return typeof a2 == "object" && a2 !== null && e.every((t) => t in a2);
}
const V = /* @__PURE__ */ Symbol("internals"), Ti = /* @__PURE__ */ Symbol("_internals"), he = /* @__PURE__ */ Symbol("_customState");
function bi(a2, e) {
  var t;
  class i extends a2 {
    constructor() {
      super(...arguments), this[t] = /* @__PURE__ */ new Set();
    }
    get [(t = he, V)]() {
      return this[Ti] ?? (this[Ti] = this.attachInternals());
    }
  }
  return i.formAssociated = e, i;
}
function os(a2, e) {
  return he in a2 ? a2[he].has(e) : a2[V].states.has(e);
}
function Ce(a2, e) {
  os(a2, e) || (he in a2 && a2[he].add(e), a2[V]?.states.add(e), a2[V]?.states.has(e));
}
function F(a2, e) {
  return he in a2 && a2[he].delete(e), a2[V]?.states.delete(e) ? (a2[V]?.states.has(e), true) : false;
}
function ni(a2, e, t) {
  t ? Ce(a2, e) : F(a2, e);
}
function ls(a2) {
  class e extends a2 {
    constructor() {
      super(...arguments), this.checked = false;
    }
    update(i) {
      super.update(i), i.has("checked") && (this.role === "button" ? (this.ariaPressed = `${this.checked}`, this.ariaChecked = null) : this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = `${this.checked}`, this.ariaPressed = null));
    }
  }
  return f([x({ type: Boolean, reflect: true })], e.prototype, "checked", void 0), e;
}
function hn(a2) {
  class e extends ls(a2) {
    constructor() {
      super(...arguments), this.indeterminate = false;
    }
    update(i) {
      super.update(i), i.has("indeterminate") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaChecked = !this.checked && this.indeterminate ? "mixed" : `${this.checked}`);
    }
  }
  return f([x({ type: Boolean, reflect: true })], e.prototype, "indeterminate", void 0), e;
}
const Bt = { primary: s("var(--md-sys-color-primary, #6750A4)"), onPrimary: s("var(--md-sys-color-on-primary, #FFFFFF)"), primaryContainer: s("var(--md-sys-color-primary-container, #EADDFF)"), onPrimaryContainer: s("var(--md-sys-color-on-primary-container, #4F378B)"), primaryFixed: s("var(--md-sys-color-primary-fixed, #EADDFF)"), primaryFixedDim: s("var(--md-sys-color-primary-fixed-dim, #D0BCFF)"), onPrimaryFixed: s("var(--md-sys-color-on-primary-fixed, #21005D)"), onPrimaryFixedVariant: s("var(--md-sys-color-on-primary-fixed-variant, #4F378B)"), secondary: s("var(--md-sys-color-secondary, #625B71)"), onSecondary: s("var(--md-sys-color-on-secondary, #FFFFFF)"), secondaryContainer: s("var(--md-sys-color-secondary-container, #E8DEF8)"), onSecondaryContainer: s("var(--md-sys-color-on-secondary-container, #4A4458)"), secondaryFixed: s("var(--md-sys-color-secondary-fixed, #E8DEF8)"), secondaryFixedDim: s("var(--md-sys-color-secondary-fixed-dim, #CCC2DC)"), onSecondaryFixed: s("var(--md-sys-color-on-secondary-fixed, #1D192B)"), onSecondaryFixedVariant: s("var(--md-sys-color-on-secondary-fixed-variant, #4A4458)"), tertiary: s("var(--md-sys-color-tertiary, #7D5260)"), onTertiary: s("var(--md-sys-color-on-tertiary, #FFFFFF)"), tertiaryContainer: s("var(--md-sys-color-tertiary-container, #FFD8E4)"), onTertiaryContainer: s("var(--md-sys-color-on-tertiary-container, #633B48)"), tertiaryFixed: s("var(--md-sys-color-tertiary-fixed, #FFD8E4)"), tertiaryFixedDim: s("var(--md-sys-color-tertiary-fixed-dim, #EFB8C8)"), onTertiaryFixed: s("var(--md-sys-color-on-tertiary-fixed, #31111D)"), onTertiaryFixedVariant: s("var(--md-sys-color-on-tertiary-fixed-variant, #633B48)"), error: s("var(--md-sys-color-error, #B3261E)"), onError: s("var(--md-sys-color-on-error, #FFFFFF)"), errorContainer: s("var(--md-sys-color-error-container, #F9DEDC)"), onErrorContainer: s("var(--md-sys-color-on-error-container, #8C1D18)"), surface: s("var(--md-sys-color-surface, #FEF7FF)"), onSurface: s("var(--md-sys-color-on-surface, #1D1B20)"), onSurfaceVariant: s("var(--md-sys-color-on-surface-variant, #49454F)"), surfaceContainerLowest: s("var(--md-sys-color-surface-container-lowest, #FFFFFF)"), surfaceContainerLow: s("var(--md-sys-color-surface-container-low, #F7F2FA)"), surfaceContainer: s("var(--md-sys-color-surface-container, #F3EDF7)"), surfaceContainerHigh: s("var(--md-sys-color-surface-container-high, #ECE6F0)"), surfaceContainerHighest: s("var(--md-sys-color-surface-container-highest, #E6E0E9)"), surfaceDim: s("var(--md-sys-color-surface-dim, #DED8E1)"), surfaceBright: s("var(--md-sys-color-surface-bright, #FEF7FF)"), surfaceVariant: s("var(--md-sys-color-surface-variant, #E7E0EC)"), inverseSurface: s("var(--md-sys-color-inverse-surface, #322F35)"), inverseOnSurface: s("var(--md-sys-color-inverse-on-surface, #F5EFF7)"), inversePrimary: s("var(--md-sys-color-inverse-primary, #D0BCFF)"), outline: s("var(--md-sys-color-outline, #79747E)"), outlineVariant: s("var(--md-sys-color-outline-variant, #CAC4D0)"), shadow: s("var(--md-sys-color-shadow, #000000)"), scrim: s("var(--md-sys-color-scrim, #000000)") }, Yt = { scale: s("var(--md-sys-density-scale, 0)"), size: s("var(--md-sys-density-size, 0.25rem)") }, mn = { ...Yt, calc(a2) {
  return s(`calc(max(${a2}, ${Yt.scale}) * ${Yt.size})`);
} }, un = `color-mix(in srgb, var(--m3e-elevation-color, ${Bt.shadow}) 20%, transparent)`, pn = ["0px 0px 0px 0px", "0px 2px 1px -1px", "0px 3px 1px -2px", "0px 3px 3px -2px", "0px 2px 4px -1px", "0px 3px 5px -1px", "0px 3px 5px -1px", "0px 4px 5px -2px", "0px 5px 5px -3px", "0px 5px 6px -3px", "0px 6px 6px -3px", "0px 6px 7px -4px", "0px 7px 8px -4px", "0px 7px 8px -4px", "0px 7px 9px -4px", "0px 8px 9px -5px", "0px 8px 10px -5px", "0px 8px 11px -5px", "0px 9px 11px -5px", "0px 9px 12px -6px", "0px 10px 13px -6px", "0px 10px 13px -6px", "0px 10px 14px -6px", "0px 11px 14px -7px", "0px 11px 15px -7px"], fn = `color-mix(in srgb, var(--m3e-elevation-color, ${Bt.shadow}) 14%, transparent)`, gn = ["0px 0px 0px 0px", "0px 1px 1px 0px", "0px 2px 2px 0px", "0px 3px 4px 0px", "0px 4px 5px 0px", "0px 5px 8px 0px", "0px 6px 10px 0px", "0px 7px 10px 1px", "0px 8px 10px 1px", "0px 9px 12px 1px", "0px 10px 14px 1px", "0px 11px 15px 1px", "0px 12px 17px 2px", "0px 13px 19px 2px", "0px 14px 21px 2px", "0px 15px 22px 2px", "0px 16px 24px 2px", "0px 17px 26px 2px", "0px 18px 28px 2px", "0px 19px 29px 2px", "0px 20px 31px 3px", "0px 21px 33px 3px", "0px 22px 35px 3px", "0px 23px 36px 3px", "0px 24px 38px 3px"], yn = `color-mix(in srgb, var(--m3e-elevation-color, ${Bt.shadow}) 12%, transparent)`, vn = ["0px 0px 0px 0px", "0px 1px 3px 0px", "0px 1px 5px 0px", "0px 1px 8px 0px", "0px 1px 10px 0px", "0px 1px 14px 0px", "0px 1px 18px 0px", "0px 2px 16px 1px", "0px 3px 14px 2px", "0px 3px 16px 2px", "0px 4px 18px 3px", "0px 4px 20px 3px", "0px 5px 22px 4px", "0px 5px 24px 4px", "0px 5px 26px 4px", "0px 6px 28px 5px", "0px 6px 30px 5px", "0px 6px 32px 5px", "0px 7px 34px 6px", "0px 7px 36px 6px", "0px 8px 38px 7px", "0px 8px 40px 7px", "0px 8px 42px 7px", "0px 9px 44px 8px", "0px 9px 46px 8px"];
function pe(a2) {
  return `${un} ${pn[a2]},${fn} ${gn[a2]},${yn} ${vn[a2]}`;
}
const bn = { level0: s(`var(--md-sys-elevation-level0, ${pe(0)})`), level1: s(`var(--md-sys-elevation-level1, ${pe(1)})`), level2: s(`var(--md-sys-elevation-level2, ${pe(3)})`), level3: s(`var(--md-sys-elevation-level3, ${pe(6)})`), level4: s(`var(--md-sys-elevation-level4, ${pe(8)})`), level5: s(`var(--md-sys-elevation-level5, ${pe(12)})`) };
function C(a2) {
  return s(`var(--md-sys-measurement-space${a2}, ${0.5 * (a2 / 100)}rem)`);
}
C(0), C(25), C(50), C(75), C(100), C(125), C(150), C(175), C(200), C(250), C(300), C(400), C(450), C(500), C(600), C(700), C(800), C(900);
const xn = { emphasized: s("var(--md-sys-motion-easing-emphasized, cubic-bezier(0.2, 0.0, 0, 1.0))"), emphasizedDecelerate: s("var(--md-sys-motion-easing-emphasized-decelerate, cubic-bezier(0.05, 0.7, 0.1, 1.0))"), emphasizedAccelerate: s("var(--md-sys-motion-easing-emphasized-accelerate, cubic-bezier(0.3, 0.0, 0.8, 0.15))"), standard: s("var(--md-sys-motion-easing-standard, cubic-bezier(0.2, 0.0, 0, 1.0))"), standardDecelerate: s("var(--md-sys-motion-easing-standard-decelerate, cubic-bezier(0, 0, 0, 1))"), standardAccelerate: s("var(--md-sys-motion-easing-standard-accelerate, cubic-bezier(0.3, 0, 1, 1))") }, _n = { fastSpatial: s("var(--md-sys-motion-spring-fast-spatial, 350ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), defaultSpatial: s("var(--md-sys-motion-spring-default-spatial, 500ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), slowSpatial: s("var(--md-sys-motion-spring-slow-spatial, 750ms cubic-bezier(0.27, 1.06, 0.18, 1.00))"), fastEffects: s("var(--md-sys-motion-spring-fast-effects, 150ms cubic-bezier(0.31, 0.94, 0.34, 1.00))"), defaultEffects: s("var(--md-sys-motion-spring-default-effects, 200ms cubic-bezier(0.34, 0.80, 0.34, 1.00))"), slowEffects: s("var(--md-sys-motion-spring-slow-effects, 200ms cubic-bezier(0.34, 0.88, 0.34, 1.00))") }, wn = { short1: s("var(--md-sys-motion-duration-short-1, 50ms)"), short2: s("var(--md-sys-motion-duration-short-2, 100ms)"), short3: s("var(--md-sys-motion-duration-short-3, 150ms)"), short4: s("var(--md-sys-motion-duration-short-4, 200ms)"), medium1: s("var(--md-sys-motion-duration-medium-1, 250ms)"), medium2: s("var(--md-sys-motion-duration-medium-2, 300ms)"), medium3: s("var(--md-sys-motion-duration-medium-3, 350ms)"), medium4: s("var(--md-sys-motion-duration-medium-4, 400ms)"), long1: s("var(--md-sys-motion-duration-long-1, 450ms)"), long2: s("var(--md-sys-motion-duration-long-2, 500ms)"), long3: s("var(--md-sys-motion-duration-long-3, 550ms)"), long4: s("var(--md-sys-motion-duration-long-4, 600ms)"), extraLong1: s("var(--md-sys-motion-duration-extra-long-1, 700ms)"), extraLong2: s("var(--md-sys-motion-duration-extra-long-2, 800ms)"), extraLong3: s("var(--md-sys-motion-duration-extra-long-3, 900ms)"), extraLong4: s("var(--md-sys-motion-duration-extra-long-4, 1000ms)") }, kn = { easing: xn, duration: wn, spring: _n }, Cn = { width: s("var(--m3e-scrollbar-width, auto)"), thinWidth: s("var(--m3e-scrollbar-thin-width, thin)"), color: s("var(--m3e-scrollbar-thumb-color, #938f94) var(--m3e-scrollbar-track-color, transparent)") }, h = { none: s("var(--md-sys-shape-corner-value-none, 0)"), extraSmall: s("var(--md-sys-shape-corner-value-extra-small, 0.25rem)"), small: s("var(--md-sys-shape-corner-value-small, 0.5rem)"), medium: s("var(--md-sys-shape-corner-value-medium, 0.75rem)"), large: s("var(--md-sys-shape-corner-value-large, 1rem)"), largeIncreased: s("var(--md-sys-shape-corner-value-large-increased, 1.25rem)"), extraLarge: s("var(--md-sys-shape-corner-value-extra-large, 1.75rem)"), extraLargeIncreased: s("var(--md-sys-shape-corner-value-extra-large-increased, 2rem)"), extraExtraLarge: s("var(--md-sys-shape-corner-value-extra-extra-large, 3rem)") }, $n = { corner: { full: s("var(--md-sys-shape-corner-full, 624.9375rem)"), extraLargeTop: s(`var(--md-sys-shape-corner-extra-large-top, ${h.extraLarge} ${h.extraLarge} ${h.none} ${h.none})`), extraLarge: s(`var(--md-sys-shape-corner-extra-large, ${h.extraLarge})`), extraLargeEnd: s(`${h.none} ${h.extraLarge} ${h.extraLarge} ${h.none}`), extraLargeStart: s(`${h.extraLarge} ${h.none} ${h.none} ${h.extraLarge}`), largeTop: s(`var(--md-sys-shape-corner-large-top, ${h.large} ${h.large} ${h.none} ${h.none})`), largeEnd: s(`var(--md-sys-shape-corner-large-end, ${h.none} ${h.large} ${h.large} ${h.none})`), largeStart: s(`var(--md-sys-shape-corner-large-start, ${h.large} ${h.none} ${h.none} ${h.large})`), large: s(`var(--md-sys-shape-corner-large, ${h.large})`), medium: s(`var(--md-sys-shape-corner-medium, ${h.medium})`), mediumTop: s(`${h.medium} ${h.medium} ${h.none} ${h.none}`), mediumEnd: s(`${h.none} ${h.medium} ${h.medium} ${h.none}`), mediumStart: s(`${h.medium} ${h.none} ${h.none} ${h.medium}`), small: s(`var(--md-sys-shape-corner-small, ${h.small})`), smallTop: s(`${h.small} ${h.small} ${h.none} ${h.none}`), smallEnd: s(`${h.none} ${h.small} ${h.small} ${h.none}`), smallStart: s(`${h.small} ${h.none} ${h.none} ${h.small}`), extraSmallTop: s(`var(--md-sys-shape-corner-extra-small-top, ${h.extraSmall} ${h.extraSmall} ${h.none} ${h.none})`), extraSmall: s(`var(--md-sys-shape-corner-extra-small, ${h.extraSmall})`), extraSmallEnd: s(`${h.none} ${h.extraSmall} ${h.extraSmall} ${h.none}`), extraSmallStart: s(`${h.extraSmall} ${h.none} ${h.none} ${h.extraSmall}`), extraSmallBottom: s(`${h.none} ${h.none} ${h.extraSmall} ${h.extraSmall}`), none: s(`var(--md-sys-shape-corner-none, ${h.none})`), largeIncreased: s(`var(--md-sys-shape-corner-large-increased, ${h.largeIncreased})`), extraLargeIncreased: s(`var(--md-sys-shape-corner-extra-large-increased, ${h.extraLargeIncreased})`), extraExtraLarge: s(`var(--md-sys-shape-corner-extra-extra-large, ${h.extraExtraLarge})`) } }, En = { focusStateLayerOpacity: s("var(--md-sys-state-focus-state-layer-opacity, 10%)"), hoverStateLayerOpacity: s("var(--md-sys-state-hover-state-layer-opacity, 8%)"), pressedStateLayerOpacity: s("var(--md-sys-state-pressed-state-layer-opacity, 10%)") }, Mn = { standard: { display: { large: { fontSize: s("var(--md-sys-typescale-display-large-font-size, 3.5625rem)"), fontWeight: s("var(--md-sys-typescale-display-large-font-weight, 400)"), lineHeight: s("var(--md-sys-typescale-display-large-line-height, 4rem)"), tracking: s("var(--md-sys-typescale-display-large-tracking, 0.015625rem)") }, medium: { fontSize: s("var(--md-sys-typescale-display-medium-font-size, 2.8125rem)"), fontWeight: s("var(--md-sys-typescale-display-medium-font-weight, 400)"), lineHeight: s("var(--md-sys-typescale-display-medium-line-height, 3.25rem)"), tracking: s("var(--md-sys-typescale-display-medium-tracking, 0)") }, small: { fontSize: s("var(--md-sys-typescale-display-small-font-size, 2.25rem)"), fontWeight: s("var(--md-sys-typescale-display-small-font-weight, 400)"), lineHeight: s("var(--md-sys-typescale-display-small-line-height, 2.75rem)"), tracking: s("var(--md-sys-typescale-display-small-tracking, 0)") } }, headline: { large: { fontSize: s("var(--md-sys-typescale-headline-large-font-size, 2rem)"), fontWeight: s("var(--md-sys-typescale-headline-large-font-weight, 400)"), lineHeight: s("var(--md-sys-typescale-headline-large-line-height, 2.5rem)"), tracking: s("var(--md-sys-typescale-headline-large-tracking, 0)") }, medium: { fontSize: s("var(--md-sys-typescale-headline-medium-font-size, 1.75rem)"), fontWeight: s("var(--md-sys-typescale-headline-medium-font-weight, 400)"), lineHeight: s("var(--md-sys-typescale-headline-medium-line-height, 2.25rem)"), tracking: s("var(--md-sys-typescale-headline-medium-tracking, 0)") }, small: { fontSize: s("var(--md-sys-typescale-headline-small-font-size, 1.5rem)"), fontWeight: s("var(--md-sys-typescale-headline-small-font-weight, 400)"), lineHeight: s("var(--md-sys-typescale-headline-small-line-height, 2rem)"), tracking: s("var(--md-sys-typescale-headline-small-tracking, 0)") } }, title: { large: { fontSize: s("var(--md-sys-typescale-title-large-font-size, 1.375rem)"), fontWeight: s("var(--md-sys-typescale-title-large-font-weight, 400)"), lineHeight: s("var(--md-sys-typescale-title-large-line-height, 1.75rem)"), tracking: s("var(--md-sys-typescale-title-large-tracking, 0)") }, medium: { fontSize: s("var(--md-sys-typescale-title-medium-font-size, 1rem)"), fontWeight: s("var(--md-sys-typescale-title-medium-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-title-medium-line-height, 1.5rem)"), tracking: s("var(--md-sys-typescale-title-medium-tracking, 0.009375rem)") }, small: { fontSize: s("var(--md-sys-typescale-title-small-font-size, 0.875rem)"), fontWeight: s("var(--md-sys-typescale-title-small-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-title-small-line-height, 1.25rem)"), tracking: s("var(--md-sys-typescale-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: s("var(--md-sys-typescale-body-large-font-size, 1rem)"), fontWeight: s("var(--md-sys-typescale-body-large-font-weight, 400)"), lineHeight: s("var(--md-sys-typescale-body-large-line-height, 1.5rem)"), tracking: s("var(--md-sys-typescale-body-large-tracking, 0.03125rem)") }, medium: { fontSize: s("var(--md-sys-typescale-body-medium-font-size, 0.875rem)"), fontWeight: s("var(--md-sys-typescale-body-medium-font-weight, 400)"), lineHeight: s("var(--md-sys-typescale-body-medium-line-height, 1.25rem)"), tracking: s("var(--md-sys-typescale-body-medium-tracking, 0.015625rem)") }, small: { fontSize: s("var(--md-sys-typescale-body-small-font-size, 0.75rem)"), fontWeight: s("var(--md-sys-typescale-body-small-font-weight, 400)"), lineHeight: s("var(--md-sys-typescale-body-small-line-height, 1rem)"), tracking: s("var(--md-sys-typescale-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: s("var(--md-sys-typescale-label-large-font-size, 0.875rem)"), fontWeight: s("var(--md-sys-typescale-label-large-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-label-large-line-height, 1.25rem)"), tracking: s("var(--md-sys-typescale-label-large-tracking, 0.00625rem)") }, medium: { fontSize: s("var(--md-sys-typescale-label-medium-font-size, 0.75rem)"), fontWeight: s("var(--md-sys-typescale-label-medium-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-label-medium-line-height, 1rem)"), tracking: s("var(--md-sys-typescale-label-medium-tracking, 0.03125rem)") }, small: { fontSize: s("var(--md-sys-typescale-label-small-font-size, 0.6875rem)"), fontWeight: s("var(--md-sys-typescale-label-small-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-label-small-line-height, 1rem)"), tracking: s("var(--md-sys-typescale-label-small-tracking, 0.03125rem)") } } }, emphasized: { display: { large: { fontSize: s("var(--md-sys-typescale-emphasized-display-large-font-size, 3.5625rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-display-large-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-emphasized-display-large-line-height, 4rem)"), tracking: s("var(--md-sys-typescale-emphasized-display-large-tracking, 0.015625rem)") }, medium: { fontSize: s("var(--md-sys-typescale-emphasized-display-medium-font-size, 2.8125rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-display-medium-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-emphasized-display-medium-line-height, 3.25rem)"), tracking: s("var(--md-sys-typescale-emphasized-display-medium-tracking, 0)") }, small: { fontSize: s("var(--md-sys-typescale-emphasized-display-small-font-size, 2.25rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-display-small-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-emphasized-display-small-line-height, 2.75rem)"), tracking: s("var(--md-sys-typescale-emphasized-display-small-tracking, 0)") } }, headline: { large: { fontSize: s("var(--md-sys-typescale-emphasized-headline-large-font-size, 2rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-headline-large-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-emphasized-headline-large-line-height, 2.5rem)"), tracking: s("var(--md-sys-typescale-emphasized-headline-large-tracking, 0)") }, medium: { fontSize: s("var(--md-sys-typescale-emphasized-headline-medium-font-size, 1.75rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-headline-medium-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-emphasized-headline-medium-line-height, 2.25rem)"), tracking: s("var(--md-sys-typescale-emphasized-headline-medium-tracking, 0)") }, small: { fontSize: s("var(--md-sys-typescale-emphasized-headline-small-font-size, 1.5rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-headline-small-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-emphasized-headline-small-line-height, 2rem)"), tracking: s("var(--md-sys-typescale-emphasized-headline-small-tracking, 0)") } }, title: { large: { fontSize: s("var(--md-sys-typescale-emphasized-title-large-font-size, 1.375rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-title-large-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-emphasized-title-large-line-height, 1.75rem)"), tracking: s("var(--md-sys-typescale-emphasized-title-large-tracking, 0)") }, medium: { fontSize: s("var(--md-sys-typescale-emphasized-title-medium-font-size, 1rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-title-medium-font-weight, 700)"), lineHeight: s("var(--md-sys-typescale-emphasized-title-medium-line-height, 3.5rem)"), tracking: s("var(--md-sys-typescale-emphasized-title-medium-tracking, 0.009375rem)") }, small: { fontSize: s("var(--md-sys-typescale-emphasized-title-small-font-size, 0.875rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-title-small-font-weight, 700)"), lineHeight: s("var(--md-sys-typescale-emphasized-title-small-line-height, 1.25rem)"), tracking: s("var(--md-sys-typescale-emphasized-title-small-tracking, 0.00625rem)") } }, body: { large: { fontSize: s("var(--md-sys-typescale-emphasized-body-large-font-size, 1rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-body-large-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-emphasized-body-large-line-height, 1.5rem)"), tracking: s("var(--md-sys-typescale-emphasized-body-large-tracking, 0.03125rem)") }, medium: { fontSize: s("var(--md-sys-typescale-emphasized-body-medium-font-size, 0.875rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-body-medium-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-emphasized-body-medium-line-height, 1.25rem)"), tracking: s("var(--md-sys-typescale-emphasized-body-medium-tracking, 0.015625rem)") }, small: { fontSize: s("var(--md-sys-typescale-emphasized-body-small-font-size, 0.75rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-body-small-font-weight, 500)"), lineHeight: s("var(--md-sys-typescale-emphasized-body-small-line-height, 1rem)"), tracking: s("var(--md-sys-typescale-emphasized-body-small-tracking, 0.025rem)") } }, label: { large: { fontSize: s("var(--md-sys-typescale-emphasized-label-large-font-size, 0.875rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-label-large-font-weight, 700)"), lineHeight: s("var(--md-sys-typescale-emphasized-label-large-line-height, 1.25rem)"), tracking: s("var(--md-sys-typescale-emphasized-label-large-tracking, 0.00625rem)") }, medium: { fontSize: s("var(--md-sys-typescale-emphasized-label-medium-font-size, 0.75rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-label-medium-font-weight, 700)"), lineHeight: s("var(--md-sys-typescale-emphasized-label-medium-line-height, 1rem)"), tracking: s("var(--md-sys-typescale-emphasized-label-medium-tracking, 0.03125rem)") }, small: { fontSize: s("var(--md-sys-typescale-emphasized-label-small-font-size, 0.6875rem)"), fontWeight: s("var(--md-sys-typescale-emphasized-label-small-font-weight, 700)"), lineHeight: s("var(--md-sys-typescale-emphasized-label-small-line-height, 1rem)"), tracking: s("var(--md-sys-typescale-emphasized-label-small-tracking, 0.03125rem)") } } } }, d = { color: Bt, elevation: bn, motion: kn, shape: $n, state: En, typescale: Mn, scrollbar: Cn, density: mn };
function et(a2) {
  return rs(a2, "disabled");
}
function ds(a2, e = true) {
  class t extends a2 {
    constructor() {
      super(...arguments), this.disabled = false;
    }
    update(n) {
      super.update(n), n.has("disabled") && this.role && this.role !== "none" && this.role !== "presentation" && (this.ariaDisabled = this.disabled ? "true" : null);
    }
  }
  return f([x({ type: Boolean, reflect: e })], t.prototype, "disabled", void 0), t;
}
function tt(a2) {
  return rs(a2, "disabledInteractive") && et(a2);
}
const Ni = ["click", "dblclick", "auxclick", "keydown", "keyup"], Sn = ["Tab", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Left", "Up", "Right", "Down"], Gt = /* @__PURE__ */ Symbol("_suppressedEventHandler");
function Nn(a2) {
  var e;
  class t extends a2 {
    constructor() {
      super(...arguments), this[e] = (n) => {
        if (this.disabledInteractive) {
          if (n instanceof KeyboardEvent && Sn.includes(n.key)) return;
          n.stopImmediatePropagation(), n.preventDefault();
        }
      }, this.disabledInteractive = false;
    }
    connectedCallback() {
      Ni.forEach((n) => this.addEventListener(n, this[Gt], true)), super.connectedCallback();
    }
    disconnectedCallback() {
      Ni.forEach((n) => this.removeEventListener(n, this[Gt], true)), super.disconnectedCallback();
    }
    update(n) {
      super.update(n), (n.has("disabled") || n.has("disabledInteractive")) && this.role && this.role !== "none" && this.role !== "presentation" && this.role !== "none" && (this.ariaDisabled = this.disabled || this.disabledInteractive ? "true" : null);
    }
  }
  return e = Gt, f([x({ attribute: "disabled-interactive", type: Boolean, reflect: true })], t.prototype, "disabledInteractive", void 0), t;
}
const Ie = /* @__PURE__ */ Symbol("_tabindex");
function Fn(a2) {
  var e;
  class t extends a2 {
    constructor() {
      super(...arguments), this[e] = 0;
    }
    connectedCallback() {
      this[Ie] = Number.parseInt(this.getAttribute("tabindex") ?? "0"), super.connectedCallback();
    }
    firstUpdated(n) {
      super.firstUpdated(n), !this.hasAttribute("tabindex") && !n.has("disabled") && this.setAttribute("tabindex", `${this[Ie]}`);
    }
    update(n) {
      if (super.update(n), n.has("disabled")) if (!this.disabled && this.role !== "none") this.hasAttribute("tabindex") || this.setAttribute("tabindex", `${this[Ie]}`);
      else {
        const o = this.getAttribute("tabindex");
        o && (this[Ie] = Number.parseInt(o)), this.removeAttribute("tabindex");
      }
    }
  }
  return e = Ie, t;
}
const Qt = /* @__PURE__ */ Symbol("_clickHandler");
function qn(a2) {
  var e;
  class t extends a2 {
    constructor() {
      super(...arguments), this.type = "button", this[e] = async (n) => {
        if (n.defaultPrevented || et(this) && this.disabled || tt(this) && this.disabledInteractive) return;
        const o = this[V].form;
        if (!(!o || this.type === "button") && (await new Promise((l) => setTimeout(l)), !n.defaultPrevented)) switch (this.type) {
          case "reset":
            o.reset();
            break;
          case "submit":
            o.addEventListener("submit", (l) => Object.defineProperty(l, "submitter", { configurable: true, enumerable: true, get: () => this }), { capture: true, once: true }), this[V].setFormValue(this.value), o.requestSubmit();
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
const fe = /* @__PURE__ */ Symbol("_control"), Jt = /* @__PURE__ */ Symbol("_firstUpdated");
function Ot(a2) {
  var e;
  class t extends a2 {
    constructor() {
      super(...arguments), this[e] = false, this.htmlFor = null;
    }
    get control() {
      return this[fe]?.deref() ?? null;
    }
    connectedCallback() {
      super.connectedCallback();
      const n = this[fe]?.deref();
      n && this.attach(n);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      const n = this[fe];
      n && (this.detach(), this[fe] = n);
    }
    firstUpdated(n) {
      super.firstUpdated(n), this[Jt] = true;
    }
    update(n) {
      if (super.update(n), n.has("htmlFor")) if (this.htmlFor) {
        const o = this.getRootNode();
        o && dn(this.htmlFor, o).then((l) => {
          l !== this.control && (this.control && this.detach(), l instanceof HTMLElement && this.attach(l));
        });
      } else this.control && this[Jt] && this.detach();
    }
    attach(n) {
      this[fe] = new WeakRef(n);
    }
    detach() {
      this[fe] = void 0;
    }
  }
  return e = Jt, f([x({ attribute: "for" })], t.prototype, "htmlFor", void 0), t;
}
function Bn(a2, e = true) {
  var t, i, n, o, l, m, u;
  class p extends a2 {
    constructor() {
      super(...arguments), t.add(this), i.set(this, false), n.set(this, (c) => r(this, t, "m", m).call(this, c)), o.set(this, (c) => r(this, t, "m", u).call(this, c)), l.set(this, () => b(this, i, false, "f"));
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("keydown", r(this, n, "f")), this.addEventListener("keyup", r(this, o, "f")), this.addEventListener("focusout", r(this, l, "f"));
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("keydown", r(this, n, "f")), this.removeEventListener("keyup", r(this, o, "f")), this.removeEventListener("focusout", r(this, l, "f"));
    }
  }
  return i = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakSet(), m = function(c) {
    if (c.target !== c.currentTarget || et(this) && this.disabled || tt(this) && this.disabledInteractive) {
      b(this, i, false, "f");
      return;
    }
    (c.key === " " || e && c.key === "Enter") && b(this, i, true, "f");
  }, u = function(c) {
    if (c.target !== c.currentTarget || et(this) && this.disabled || tt(this) && this.disabledInteractive || !r(this, i, "f")) {
      b(this, i, false, "f");
      return;
    }
    b(this, i, false, "f"), this.dispatchEvent(new MouseEvent("click", { cancelable: true, bubbles: true, composed: true }));
  }, p;
}
const An = /* @__PURE__ */ Symbol("renderPseudoLink"), ei = /* @__PURE__ */ Symbol("_clickHandler");
function On(a2, e = false) {
  var t, i, n, o, l;
  class m extends a2 {
    constructor() {
      super(...arguments), t.add(this), this[l] = async (p) => {
        if (tt(this) && this.disabledInteractive && (p.preventDefault(), p.stopPropagation()), await new Promise((g) => g()), !p.defaultPrevented && this.href) {
          p.preventDefault(), p.stopImmediatePropagation();
          const g = document.createElement("a");
          g.href = this.href, g.rel = this.rel, g.target = this.target, this.download != null && (g.download = this.download), g.addEventListener("click", async () => {
            await new Promise((c) => c()), g.remove();
          }), document.body.appendChild(g), g.click();
        }
      }, this.href = "", this.target = "", this.rel = "";
    }
    get download() {
      return this.getAttribute("download");
    }
    set download(p) {
      const g = this.download;
      g !== p && (p ? this.setAttribute("download", p) : this.removeAttribute("download"), this.requestUpdate("download", g));
    }
    connectedCallback() {
      super.connectedCallback(), e || this.addEventListener("click", this[ei]), this.hasAttribute("href") && this.role === "button" && (this.role = "link");
    }
    disconnectedCallback() {
      super.disconnectedCallback(), e || this.removeEventListener("click", this[ei]);
    }
    [(t = /* @__PURE__ */ new WeakSet(), l = ei, An)]() {
      const p = et(this) && this.disabled, g = tt(this) && this.disabledInteractive;
      return !p && !g && this.href ? A`<a href="${this.href}" target="${jt(this.target || void 0)}" rel="${jt(this.rel || void 0)}" download="${jt(this.download || void 0)}" tabindex="-1" aria-hidden="true" @pointerdown="${r(this, t, "m", i)}" @focus="${r(this, t, "m", n)}" @blur="${r(this, t, "m", o)}"></a>` : w;
    }
  }
  return i = function(p) {
    p.button !== 2 ? p.preventDefault() : p.target.removeAttribute("aria-hidden");
  }, n = function(p) {
    p.target.blur(), this.focus();
  }, o = function(p) {
    p.target.setAttribute("aria-hidden", "true");
  }, f([x()], m.prototype, "href", void 0), f([x()], m.prototype, "target", void 0), f([x()], m.prototype, "rel", void 0), f([x({ reflect: false })], m.prototype, "download", null), m;
}
const ti = /* @__PURE__ */ Symbol("_wasConnected");
function zn(a2) {
  var e;
  class t extends a2 {
    constructor() {
      super(...arguments), this[e] = false;
    }
    reconnectedCallback() {
    }
    connectedCallback() {
      super.connectedCallback(), this[ti] && this.reconnectedCallback();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this[ti] = true;
    }
  }
  return e = ti, t;
}
function ue(a2, e) {
  class t extends a2 {
    connectedCallback() {
      this.role = this.role || e, super.connectedCallback();
    }
  }
  return t;
}
var wt;
class Ln extends E {
  constructor() {
    super(...arguments), wt.set(this, (e) => {
      e.defaultPrevented || this._onClick(e);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.parentElement?.addEventListener("click", r(this, wt, "f"));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.parentElement?.removeEventListener("click", r(this, wt, "f"));
  }
  render() {
    return A`<slot></slot>`;
  }
}
wt = /* @__PURE__ */ new WeakMap();
Ln.styles = z`:host { display: contents; } ::slotted(.material-icons) { font-size: inherit !important; }`;
var P, Xe, Ne, cs, Fe, qe, ai;
let Me = class extends bi(E) {
  constructor() {
    super(...arguments), P.add(this), Xe.set(this, false), Ne.set(this, false), this.open = false, this.orientation = "vertical", this.noAnimate = false;
  }
  update(e) {
    super.update(e);
    const t = this.noAnimate || e.has("orientation") && !e.has("open");
    if (Ce(this, "--no-animate"), !r(this, Xe, "f")) {
      this.open && (b(this, Ne, true, "f"), r(this, P, "m", Fe).call(this)), b(this, Xe, true, "f");
      return;
    }
    this.toggleAttribute("inert", !this.open), this.open ? (b(this, Ne, true, "f"), t || Kt() || (r(this, P, "m", Fe).call(this), ni(this, "--overflows", this.orientation === "vertical" ? this.clientHeight < this.scrollHeight : this.orientation === "horizontal" ? this.clientWidth < this.scrollWidth : this.clientHeight < this.scrollHeight || this.clientWidth < this.scrollWidth), r(this, P, "m", qe).call(this)), F(this, "--closing"), Ce(this, "--opening"), this.dispatchEvent(new Event("opening")), r(this, P, "m", qe).call(this), F(this, "--no-animate"), r(this, P, "m", ai).call(this), t || Kt() ? (r(this, P, "m", Fe).call(this), F(this, "--opening"), this.dispatchEvent(new Event("opened"))) : this.addEventListener("transitionend", () => {
      this.open && (r(this, P, "m", Fe).call(this), F(this, "--opening"), this.dispatchEvent(new Event("opened")));
    }, { once: true })) : (F(this, "--opening"), Ce(this, "--closing"), this.dispatchEvent(new Event("closing")), r(this, P, "m", ai).call(this), r(this, Ne, "f") && F(this, "--no-animate"), t || Kt() ? (r(this, P, "m", qe).call(this), F(this, "--closing"), this.dispatchEvent(new Event("closed"))) : requestAnimationFrame(() => {
      r(this, P, "m", qe).call(this), this.addEventListener("transitionend", () => {
        this.open || (F(this, "--closing"), this.dispatchEvent(new Event("closed")));
      }, { once: true });
    }));
  }
  render() {
    return A`<slot @slotchange="${r(this, P, "m", cs)}"></slot>`;
  }
};
Xe = /* @__PURE__ */ new WeakMap();
Ne = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakSet();
cs = function() {
  b(this, Xe, true, "f");
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
qe = function() {
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
ai = function() {
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
Me.styles = z`:host { display: block; overflow: hidden; } :host([orientation="vertical"]) { height: 0px; transition: ${s(`visibility var(--m3e-collapsible-animation-duration, ${d.motion.duration.medium1})
          ${d.motion.easing.standard},
        height var(--m3e-collapsible-animation-duration, ${d.motion.duration.medium1})
          ${d.motion.easing.standard},
        padding-top var(--m3e-collapsible-animation-duration, ${d.motion.duration.medium1})
          ${d.motion.easing.standard},
        padding-bottom var(--m3e-collapsible-animation-duration, ${d.motion.duration.medium1})
          ${d.motion.easing.standard}`)}; } :host([orientation="horizontal"]) { width: 0px; transition: ${s(`visibility var(--m3e-collapsible-animation-duration, ${d.motion.duration.medium1})
          ${d.motion.easing.standard},
        width var(--m3e-collapsible-animation-duration, ${d.motion.duration.medium1})
          ${d.motion.easing.standard},
        padding-left var(--m3e-collapsible-animation-duration, ${d.motion.duration.medium1})
          ${d.motion.easing.standard},
        padding-right var(--m3e-collapsible-animation-duration, ${d.motion.duration.medium1})
          ${d.motion.easing.standard}`)}; } :host([orientation="both"]) { height: 0px; width: 0px; transition: ${s(`visibility var(--m3e-collapsible-animation-duration, ${d.motion.duration.medium1})
          ${d.motion.easing.standard},
        width var(--m3e-collapsible-animation-duration, ${d.motion.duration.medium1})
          ${d.motion.easing.standard},
        height var(--m3e-collapsible-animation-duration, ${d.motion.duration.medium1})
          ${d.motion.easing.standard},
        padding var(--m3e-collapsible-animation-duration, ${d.motion.duration.medium1})
          ${d.motion.easing.standard}`)}; } :host(:not(:is(:state(--closing), :--closing)):not([open])) { visibility: hidden; } :host([orientation="vertical"]:not([open])) { min-height: unset !important; padding-top: 0px !important; padding-bottom: 0px !important; } :host([orientation="horizontal"]:not([open])) { min-width: unset !important; padding-left: 0px !important; padding-right: 0px !important; } :host([orientation="both"]:not([open])) { min-height: unset !important; min-width: unset !important; padding: 0px !important; } :host([no-animate]), :host(:is(:state(--no-animate), :--no-animate)) { transition-duration: 0ms; } :host([orientation="vertical"]:is(:state(--opening), :--opening)), :host([orientation="vertical"]:is(:state(--closing), :--closing)) { overflow-y: hidden !important; } :host([orientation="horizontal"]:is(:state(--opening), :--opening)), :host([orientation="horizontal"]:is(:state(--closing), :--closing)) { overflow-x: hidden !important; } :host([orientation="both"]:is(:state(--opening), :--opening)), :host([orientation="both"]:is(:state(--closing), :--closing)) { overflow-y: hidden !important; overflow-x: hidden !important; } :host(:is(:state(--overflows), :--overflows)) { scrollbar-gutter: stable; } ::slotted(*) { --m3e-collapsible-animation-duration: initial; } @media (prefers-reduced-motion) { :host { transition: none; } }`;
f([x({ type: Boolean, reflect: true })], Me.prototype, "open", void 0);
f([x({ reflect: true })], Me.prototype, "orientation", void 0);
f([x({ attribute: "no-animate", type: Boolean, reflect: true })], Me.prototype, "noAnimate", void 0);
Me = f([R("m3e-collapsible")], Me);
const W = { liftDuration: s(`var(--m3e-elevation-lift-duration, ${d.motion.duration.short4})`), liftEasing: s(`var(--m3e-elevation-lift-easing, ${d.motion.easing.standard})`), settleDuration: s(`var(--m3e-elevation-settle-duration, ${d.motion.duration.short3})`), settleEasing: s(`var(--m3e-elevation-settle-easing, ${d.motion.easing.standardAccelerate})`), level: s(`var(--m3e-elevation-level, ${d.elevation.level0})`), hoverLevel: s(`var(--m3e-elevation-hover-level, ${d.elevation.level0})`), focusLevel: s(`var(--m3e-elevation-focus-level, ${d.elevation.level0})`), pressedLevel: s(`var(--m3e-elevation-pressed-level, ${d.elevation.level0})`) };
var Be, kt, Ct, $t, hs, ms, us;
let Se = class extends Ot(ue(E, "none")) {
  constructor() {
    super(...arguments), Be.add(this), kt.set(this, new Yi(this, { target: null, callback: (e) => r(this, Be, "m", hs).call(this, e) })), Ct.set(this, new qt(this, { target: null, callback: (e) => r(this, Be, "m", ms).call(this, e) })), $t.set(this, new is(this, { target: null, callback: (e) => r(this, Be, "m", us).call(this, e) })), this.disabled = false, this.level = null;
  }
  attach(e) {
    super.attach(e), r(this, kt, "f").observe(e), r(this, Ct, "f").observe(e), r(this, $t, "f").observe(e);
  }
  detach() {
    this.control && (r(this, kt, "f").unobserve(this.control), r(this, Ct, "f").unobserve(this.control), r(this, $t, "f").unobserve(this.control)), super.detach();
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
kt = /* @__PURE__ */ new WeakMap();
Ct = /* @__PURE__ */ new WeakMap();
$t = /* @__PURE__ */ new WeakMap();
Be = /* @__PURE__ */ new WeakSet();
hs = function(e) {
  this.disabled || (this._shadow?.classList.toggle("hover", e), this._shadow?.classList.toggle("resting", !e));
};
ms = function(e) {
  this.disabled || this._shadow?.classList.toggle("focus", e);
};
us = function(e) {
  this.disabled || this._shadow?.classList.toggle("pressed", e);
};
Se.styles = z`:host { display: block; } :host, .shadow { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .shadow.resting, .shadow.focus, .shadow.pressed { will-change: box-shadow; transition: ${s(`box-shadow ${W.settleDuration} ${W.settleEasing};`)}; } .shadow.hover { will-change: box-shadow; transition: ${s(`box-shadow ${W.liftDuration} ${W.liftEasing};`)}; } .shadow { box-shadow: ${W.level}; } .shadow.focus { box-shadow: ${W.focusLevel}; } .shadow.hover { box-shadow: ${W.hoverLevel}; } .shadow.pressed { box-shadow: ${W.pressedLevel}; } :host([level="0"]) .shadow { --m3e-elevation-level: ${d.elevation.level0}; --m3e-elevation-hover-level: ${d.elevation.level1}; } :host([level="1"]) .shadow { --m3e-elevation-level: ${d.elevation.level1}; --m3e-elevation-hover-level: ${d.elevation.level2}; } :host([level="2"]) .shadow { --m3e-elevation-level: ${d.elevation.level2}; --m3e-elevation-hover-level: ${d.elevation.level3}; } :host([level="3"]) .shadow { --m3e-elevation-level: ${d.elevation.level3}; --m3e-elevation-hover-level: ${d.elevation.level4}; } :host([level="4"]) .shadow { --m3e-elevation-level: ${d.elevation.level4}; --m3e-elevation-hover-level: ${d.elevation.level5}; } :host([level="5"]) .shadow { --m3e-elevation-level: ${d.elevation.level5}; --m3e-elevation-hover-level: ${W.level}; } :host([level]) .shadow { --m3e-elevation-focus-level: ${W.level}; --m3e-elevation-pressed-level: ${W.level}; } @media (prefers-reduced-motion) { .shadow.resting, .shadow.pressed, .shadow.focus, .shadow.hover { transition: none; } } @media (forced-colors: active) { .shadow { display: none; } }`;
f([Ft(".shadow")], Se.prototype, "_shadow", void 0);
f([x({ type: Boolean, reflect: true })], Se.prototype, "disabled", void 0);
f([x({ type: Number, reflect: true })], Se.prototype, "level", void 0);
Se = f([R("m3e-elevation")], Se);
const _ = { color: s(`var(--m3e-focus-ring-color, ${d.color.secondary})`), duration: s(`var(--m3e-focus-ring-duration, ${d.motion.duration.long2})`), thickness: s("var(--m3e-focus-ring-thickness, 3px)"), outwardOffset: s("var(--m3e-focus-ring-outward-offset, 2px)"), inwardOffset: s("var(--m3e-focus-ring-inward-offset, 0px)"), visibility: s("var(--m3e-focus-ring-visibility, visible)"), growthFactor: s("var(--m3e-focus-ring-growth-factor, 2)") };
var ri, Et, ps;
let Ae = class extends Ot(ue(E, "none")) {
  constructor() {
    super(...arguments), ri.add(this), Et.set(this, new qt(this, { target: null, callback: (e, t) => r(this, ri, "m", ps).call(this, t) })), this.inward = false, this.disabled = false;
  }
  show() {
    this._outline?.classList.toggle("visible", true);
  }
  hide() {
    this._outline?.classList.toggle("visible", false);
  }
  attach(e) {
    super.attach(e), r(this, Et, "f").observe(e);
  }
  detach() {
    this.control && r(this, Et, "f").unobserve(this.control), super.detach();
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
Et = /* @__PURE__ */ new WeakMap();
ri = /* @__PURE__ */ new WeakSet();
ps = function(e) {
  this.disabled || (e ? this.show() : this.hide());
};
Ae.styles = z`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; outline: none; } .outline { contain: layout style; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; z-index: 1; outline-color: ${_.color}; outline-width: ${_.thickness}; visibility: ${_.visibility}; } .outline.visible { outline-style: solid; } :host(:not([inward])) .outline { outline-offset: ${_.outwardOffset}; } :host([inward]) .outline { outline-offset: calc(${_.inwardOffset} - ${_.thickness}); } :host(:not([inward])) .outline.visible { animation: grow-shrink ${_.duration}; } :host([inward]) .outline.visible { animation: shrink-grow ${_.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @keyframes shrink-grow { 50% { outline-offset: calc( ${_.inwardOffset} - calc(${_.thickness} * ${_.growthFactor}) ); outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @media (prefers-reduced-motion) { :host(:not([inward])) .outline.visible, :host([inward]) .outline.visible { animation: none; } } @media (forced-colors: active) { .outline { outline-color: Highlight; } }`;
f([Ft(".outline")], Ae.prototype, "_outline", void 0);
f([x({ type: Boolean, reflect: true })], Ae.prototype, "inward", void 0);
f([x({ type: Boolean, reflect: true })], Ae.prototype, "disabled", void 0);
Ae = f([R("m3e-focus-ring")], Ae);
let oi = class extends hn(ds(ue(E, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return this.indeterminate ? A`<svg viewBox="0 -960 960 960" fill="currentColor"><path Required d="M240-440v-80h480v80H240Z"/></svg>` : this.checked ? A`<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>` : w;
  }
};
oi.styles = z`:host { display: inline-block; vertical-align: middle; width: var(--m3e-checkbox-icon-size, 1.125rem); height: var(--m3e-checkbox-icon-size, 1.125rem); border-radius: var(--m3e-checkbox-container-shape, 2px); box-sizing: border-box; flex: none; contain: layout style paint; } :host(:not([checked]):not([indeterminate])) { border-width: var(--m3e-checkbox-unselected-outline-thickness, 2px); border-style: solid; } :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { background-color: var(--m3e-checkbox-selected-container-color, ${d.color.primary}); color: var(--m3e-checkbox-selected-icon-color, ${d.color.onPrimary}); } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: var(--m3e-checkbox-unselected-outline-color, ${d.color.onSurfaceVariant}); } :host([disabled]:not([checked]):not([indeterminate])) { border-color: color-mix( in srgb, var(--m3e-checkbox-unselected-disabled-outline-color, ${d.color.onSurface}) var(--m3e-checkbox-unselected-disabled-outline-opacity, 38%), transparent ); } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-container-color, ${d.color.onSurface}) var(--m3e-checkbox-selected-disabled-container-opacity, 38%), transparent ); color: color-mix( in srgb, var(--m3e-checkbox-selected-disabled-icon-color, ${d.color.surface}) var(--m3e-checkbox-selected-disabled-icon-opacity, 100%), transparent ); } svg { pointer-events: none; } @media (forced-colors: active) { :host(:not([disabled])[checked]), :host(:not([disabled])[indeterminate]) { border-color: Highlight; background-color: Highlight; color: HighlightText; } :host(:not([disabled]):not([checked]):not([indeterminate])) { border-color: CanvasText; background: Canvas; } :host([disabled]:not([checked]):not([indeterminate])) { border-color: GrayText; background-color: Canvas; } :host([disabled][checked]), :host([disabled][indeterminate]) { background-color: GrayText; color: Canvas; } }`;
oi = f([R("m3e-pseudo-checkbox")], oi);
let li = class extends ls(ds(ue(E, "none"))) {
  connectedCallback() {
    super.connectedCallback(), this.ariaHidden = "true";
  }
  render() {
    return A`<svg class="icon" viewBox="0 0 20 20"><mask id="cutout2"><rect width="100%" height="100%" fill="white"></rect><circle cx="10" cy="10" r="8" fill="black"></circle></mask><circle class="outer circle" cx="10" cy="10" r="10" mask="url(#cutout2)"></circle><circle class="inner circle" cx="10" cy="10" r="5"></circle></svg>`;
  }
};
li.styles = z`:host { display: inline-block; vertical-align: middle; box-sizing: border-box; width: var(--m3e-radio-icon-size, 1.25rem); height: var(--m3e-radio-icon-size, 1.25rem); flex: none; contain: layout style paint; } .circle { fill: currentColor; } :host(:not([checked])) .circle.inner { opacity: 0; } :host(:not([checked])) { color: var(--m3e-radio-unselected-icon-color, ${d.color.onSurfaceVariant}); } :host([checked]) { color: var(--m3e-radio-selected-icon-color, ${d.color.primary}); } :host([disabled]) { color: color-mix(in srgb, var(--m3e-radio-disabled-icon-color, ${d.color.onSurface}) 38%, transparent); } @media (forced-colors: active) { :host { border-radius: 50%; } :host(:not([checked])) { color: CanvasText; background-color: Canvas; } :host([checked]) { color: HighlightText; background-color: Highlight; } :host([disabled]) { color: GrayText; background-color: Canvas; } }`;
li = f([R("m3e-pseudo-radio")], li);
const X = { color: s(`var(--m3e-ripple-color, ${d.color.onSurface})`), opacity: s(`var(--m3e-ripple-opacity, ${d.state.pressedStateLayerOpacity})`), enterDuration: s(`var(--m3e-ripple-enter-duration, ${d.motion.duration.long4})`), exitDuration: s(`var(--m3e-ripple-exit-duration, ${d.motion.duration.short2})`), scaleFactor: s("var(--m3e-ripple-scale-factor, 2.5)") };
var ie, $, Mt, St, fs, gs;
let me = class extends Ot(ue(E, "none")) {
  constructor() {
    super(...arguments), ie.add(this), $.set(this, null), Mt.set(this, new is(this, { target: null, minPressedDuration: 150, isPressedKey: (e) => e === " ", callback: (e, { x: t, y: i }) => r(this, ie, "m", gs).call(this, e, t, i) })), this.disabled = false, this.centered = false, this.unbounded = false, this.radius = null;
  }
  get visible() {
    return r(this, $, "f") !== null;
  }
  show(e, t, i = false) {
    r(this, ie, "m", St).call(this);
    const n = this.getBoundingClientRect();
    this.centered && (e = n.left + n.width / 2, t = n.top + n.height / 2);
    let o = this.radius;
    if (!o || isNaN(o)) {
      const u = Math.max(Math.abs(e - n.left), Math.abs(e - n.right)), p = Math.max(Math.abs(t - n.top), Math.abs(t - n.bottom));
      o = Math.sqrt(u * u + p * p);
    }
    const l = e - n.left, m = t - n.top;
    b(this, $, document.createElement("div"), "f"), r(this, $, "f").classList.add("ripple"), i && r(this, $, "f").classList.add("persistent"), r(this, $, "f").style.left = `${l - o}px`, r(this, $, "f").style.top = `${m - o}px`, r(this, $, "f").style.width = `${o * 2}px`, r(this, $, "f").style.height = `${o * 2}px`, r(this, $, "f").addEventListener("animationend", () => r(this, ie, "m", fs).call(this, i), { once: true }), r(this, $, "f").addEventListener("transitionend", () => r(this, ie, "m", St).call(this), { once: true }), this.shadowRoot?.appendChild(r(this, $, "f"));
  }
  hide() {
    r(this, $, "f")?.classList.add("exit");
  }
  attach(e) {
    super.attach(e), r(this, Mt, "f").observe(e);
  }
  detach() {
    this.control && r(this, Mt, "f").unobserve(this.control), super.detach();
  }
  connectedCallback() {
    this.ariaHidden = "true", super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), r(this, ie, "m", St).call(this);
  }
  updated(e) {
    super.updated(e), e.has("disabled") && this.disabled && this.hide();
  }
};
$ = /* @__PURE__ */ new WeakMap();
Mt = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakSet();
St = function() {
  r(this, $, "f")?.remove(), b(this, $, null, "f");
};
fs = function(e) {
  e ? r(this, $, "f")?.classList.add("pressed") : this.hide();
};
gs = function(e, t, i) {
  this.disabled || (e ? this.show(t, i, true) : this.hide());
};
me.styles = z`:host { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } :host(:not([unbounded])) { overflow: hidden; } :host(:not([unbounded])) .ripple { contain: layout style paint; } :host([unbounded]) .ripple { contain: layout style; } .ripple { display: block; position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; transform: scale(0); border-radius: ${d.shape.corner.full}; background-color: color-mix(in srgb, ${X.color} ${X.opacity}, transparent); will-change: background-color, opacity; animation: ripple ${X.enterDuration} linear; } .ripple.persistent.pressed { transform: scale(${X.scaleFactor}); } .ripple.exit { transition: opacity ${X.exitDuration} cubic-bezier(0, 0, 0.2, 0.1); opacity: 0; } @keyframes ripple { to { transform: scale(${X.scaleFactor}); } } @media (prefers-reduced-motion) { .ripple { transform: scale(${X.scaleFactor}); animation-duration: 90ms; } .ripple.exit { transition-duration: 10ms; } } @media (forced-colors: active) { .ripple { display: none; } }`;
f([x({ type: Boolean, reflect: true })], me.prototype, "disabled", void 0);
f([x({ type: Boolean, reflect: true })], me.prototype, "centered", void 0);
f([x({ type: Boolean, reflect: true })], me.prototype, "unbounded", void 0);
f([x({ type: Number })], me.prototype, "radius", void 0);
me = f([R("m3e-ripple")], me);
var Oe;
let ze = class extends bi(E) {
  constructor() {
    super(...arguments), Oe.set(this, () => this._updateScroll()), this.dividers = "above-below", this.thin = false;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("scroll", r(this, Oe, "f"));
  }
  update(e) {
    super.update(e), e.has("dividers") && (this.removeEventListener("scroll", r(this, Oe, "f")), this.dividers !== "none" && this.addEventListener("scroll", r(this, Oe, "f"), { passive: true }));
  }
  render() {
    return A`<slot @slotchange="${this._updateScroll}"></slot>`;
  }
  _updateScroll() {
    const e = (this.dividers === "above" || this.dividers === "above-below") && this.scrollTop > 0, t = (this.dividers === "below" || this.dividers === "above-below") && this.scrollHeight - this.scrollTop - this.clientHeight > 1;
    ni(this, "--above", e), ni(this, "--below", t);
  }
};
Oe = /* @__PURE__ */ new WeakMap();
ze.styles = z`:host { display: block; overflow-y: auto; position: relative; box-sizing: border-box; scrollbar-color: ${d.scrollbar.color}; border-top: var(--m3e-divider-thickness, 1px) solid transparent; border-bottom: var(--m3e-divider-thickness, 1px) solid transparent; outline-color: ${_.color}; outline-width: ${_.thickness}; outline-offset: ${_.outwardOffset}; } :host([thin]) { scrollbar-width: ${d.scrollbar.thinWidth}; } :host(:not([thin])) { scrollbar-width: ${d.scrollbar.width}; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: var(--m3e-divider-color, ${d.color.outlineVariant}); } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: var(--m3e-divider-color, ${d.color.outlineVariant}); } :host(:focus-visible) { outline-style: solid; animation: grow-shrink ${_.duration}; } @keyframes grow-shrink { 50% { outline-width: calc(${_.thickness} * ${_.growthFactor}); } } @media (forced-colors: active) { :host { border-top: var(--m3e-divider-thickness, 1px) solid Canvas; border-bottom: var(--m3e-divider-thickness, 1px) solid Canvas; } :host(:not(:focus-visible):is(:state(--above), :--above)) { border-top-color: GrayText; } :host(:not(:focus-visible):is(:state(--below), :--below)) { border-bottom-color: GrayText; } } @media (prefers-reduced-motion) { :host(:focus-visible) { animation: none; } }`;
f([x()], ze.prototype, "dividers", void 0);
f([x({ type: Boolean, reflect: true })], ze.prototype, "thin", void 0);
f([ss(40)], ze.prototype, "_updateScroll", null);
ze = f([R("m3e-scroll-container")], ze);
var Ye, de, ys, xi;
let Ht = class extends bi(E) {
  constructor() {
    super(...arguments), Ye.add(this), de.set(this, new Array()), this.selectedIndex = null;
  }
  connectedCallback() {
    super.connectedCallback(), Ce(this, "--no-animate");
  }
  update(e) {
    super.update(e), e.has("selectedIndex") && (this.selectedIndex === null && Ce(this, "--no-animate"), r(this, Ye, "m", xi).call(this), this.selectedIndex !== null && os(this, "--no-animate") && requestAnimationFrame(() => {
      this.selectedIndex !== null && F(this, "--no-animate");
    }));
  }
  render() {
    return A`<slot @slotchange="${r(this, Ye, "m", ys)}"></slot>`;
  }
};
de = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakSet();
ys = function(e) {
  const t = [...e.target.assignedElements({ flatten: true })];
  for (const i of r(this, de, "f").filter((n) => !t.includes(n))) i.classList.remove("-before"), i.classList.remove("-after"), i.removeAttribute("inert");
  b(this, de, t, "f"), r(this, Ye, "m", xi).call(this);
};
xi = function() {
  const e = this.selectedIndex ?? r(this, de, "f").length;
  for (let t = 0; t < r(this, de, "f").length; t++) {
    const i = r(this, de, "f")[t];
    i.classList.toggle("-before", t < e), i.classList.toggle("-after", t > e), i.toggleAttribute("inert", t !== e);
  }
};
Ht.styles = z`:host { display: flex; position: relative; overflow: hidden; } ::slotted(*) { width: 100%; top: 0; transition: ${s(`inset-inline-start var(--m3e-slide-animation-duration, ${d.motion.duration.long2}) ${d.motion.easing.standard},
        visibility var(--m3e-slide-animation-duration, ${d.motion.duration.long2}) ${d.motion.easing.standard} allow-discrete`)}; } ::slotted(.-before), ::slotted(.-after) { visibility: hidden; position: absolute; } ::slotted(.-before) { inset-inline-start: -100%; } ::slotted(.-after) { inset-inline-start: 100%; } ::slotted(:not(.-before):not(.-after)) { position: relative; inset-inline-start: 0; } :host(:is(:state(--no-animate), :--no-animate)) ::slotted(*) { transition: none; } @media (prefers-reduced-motion) { ::slotted(*) { transition: none; } }`;
f([x({ attribute: "selected-index", type: Number, reflect: true })], Ht.prototype, "selectedIndex", void 0);
Ht = f([R("m3e-slide")], Ht);
const ge = { hoverColor: s(`var(--m3e-state-layer-hover-color, ${d.color.onSurface})`), hoverOpacity: s(`var(--m3e-state-layer-hover-opacity, ${d.state.hoverStateLayerOpacity})`), focusColor: s(`var(--m3e-state-layer-focus-color, ${d.color.onSurface})`), focusOpacity: s(`var(--m3e-state-layer-focus-opacity, ${d.state.focusStateLayerOpacity})`), duration: s(`var(--m3e-state-layer-duration, ${d.motion.duration.medium1})`), easing: s(`var(--m3e-state-layer-easing, ${d.motion.easing.standard})`) };
var At, zt, Lt, vs, bs;
let Le = class extends Ot(ue(E, "none")) {
  constructor() {
    super(...arguments), At.add(this), zt.set(this, new Yi(this, { target: null, callback: (e) => r(this, At, "m", vs).call(this, e) })), Lt.set(this, new qt(this, { target: null, callback: (e, t) => r(this, At, "m", bs).call(this, t) })), this.disabled = false, this.disableHover = false;
  }
  show(e) {
    this._layer?.classList.toggle(e, true);
  }
  hide(e) {
    this._layer?.classList.toggle(e, false);
  }
  attach(e) {
    super.attach(e), r(this, zt, "f").observe(e), r(this, Lt, "f").observe(e);
  }
  detach() {
    this.control && (r(this, zt, "f").unobserve(this.control), r(this, Lt, "f").unobserve(this.control)), super.detach();
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
    return A`<div class="layer"></div>`;
  }
};
zt = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakSet();
vs = function(e) {
  !this.disabled && !this.disableHover && (e ? this.show("hover") : this.hide("hover"));
};
bs = function(e) {
  this.disabled || (e ? this.show("focused") : this.hide("focused"));
};
Le.styles = z`:host { display: block; } :host, .layer { position: absolute; left: 0; top: 0; right: 0; bottom: 0; pointer-events: none; border-radius: inherit; } .layer { contain: layout style paint; will-change: background-color; transition: ${s(`background-color ${ge.duration} ${ge.easing}`)}; } .layer.focused { background-color: color-mix(in srgb, ${ge.focusColor} ${ge.focusOpacity}, transparent); } .layer.hover { background-color: color-mix(in srgb, ${ge.hoverColor} ${ge.hoverOpacity}, transparent); } @media (prefers-reduced-motion) { .layer { transition: none; } } @media (forced-colors: active) { .layer { display: none; } }`;
f([Ft(".layer")], Le.prototype, "_layer", void 0);
f([x({ type: Boolean, reflect: true })], Le.prototype, "disabled", void 0);
f([x({ attribute: "disable-hover", type: Boolean, reflect: true })], Le.prototype, "disableHover", void 0);
Le = f([R("m3e-state-layer")], Le);
var O, it, H, se, di, xs, ci, hi;
let j = hi = class extends E {
  constructor() {
    super(), O.add(this), it.set(this, `m3e-text-highlight-${hi.__nextId++}`), H.set(this, new Array()), se.set(this, null), this.disabled = false, this.term = "", this.caseSensitive = false, this.mode = "contains", this.isSupported && (b(this, se, new CSSStyleSheet(), "f"), r(this, se, "f").replaceSync(z`::highlight(${s(r(this, it, "f"))}) { background-color: var(--m3e-text-highlight-container-color, ${d.color.secondaryContainer}); color: var(--m3e-text-highlight-color, ${d.color.onSecondaryContainer}); text-decoration: var(--m3e-text-highlight-decoration); text-shadow: var(--m3e-text-highlight-shadow); }`.toString()));
  }
  get isSupported() {
    return !!CSS.highlights;
  }
  get ranges() {
    return r(this, H, "f");
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.shadowRoot && r(this, se, "f") && !this.shadowRoot.adoptedStyleSheets.includes(r(this, se, "f")) && this.shadowRoot.adoptedStyleSheets.push(r(this, se, "f"));
  }
  updated(e) {
    super.updated(e), (e.has("term") || e.has("caseSensitive") || e.has("disabled")) && r(this, O, "m", ci).call(this);
  }
  render() {
    return A`<slot @slotchange="${r(this, O, "m", ci)}"></slot>`;
  }
};
it = /* @__PURE__ */ new WeakMap();
H = /* @__PURE__ */ new WeakMap();
se = /* @__PURE__ */ new WeakMap();
O = /* @__PURE__ */ new WeakSet();
di = function(e) {
  return !/^\s*$/.test(e.data);
};
xs = function a(e, t) {
  e instanceof HTMLSlotElement ? e.assignedNodes({ flatten: true }).forEach((i) => {
    switch (i.nodeType) {
      case Node.TEXT_NODE:
        r(this, O, "m", di).call(this, i) && t.push(i);
        break;
      case Node.ELEMENT_NODE:
        r(this, O, "m", a).call(this, i, t);
        break;
    }
  }) : e.childNodes.forEach((i) => {
    switch (i.nodeType) {
      case Node.TEXT_NODE:
        r(this, O, "m", di).call(this, i) && t.push(i);
        break;
      case Node.ELEMENT_NODE:
        r(this, O, "m", a).call(this, i, t);
        break;
    }
  });
};
ci = function() {
  if (!this.isSupported || !this.isConnected || (CSS.highlights.delete(r(this, it, "f")), r(this, H, "f").length = 0, this.disabled)) return;
  if (!this.term) {
    this.dispatchEvent(new CustomEvent("highlight", { detail: [...r(this, H, "f")], bubbles: false, composed: false }));
    return;
  }
  const e = new Array();
  if (r(this, O, "m", xs).call(this, this, e), e.length > 0) {
    const t = this.caseSensitive ? this.term : this.term.toLowerCase();
    switch (this.mode) {
      case "starts-with":
        {
          const i = e[0];
          if (((this.caseSensitive ? i.textContent : i.textContent?.toLowerCase()) ?? "").startsWith(t)) {
            const o = new Range();
            o.setStart(i, 0), o.setEnd(i, t.length), r(this, H, "f").push(o);
          }
        }
        break;
      case "ends-with":
        {
          const i = e[e.length - 1], n = (this.caseSensitive ? i.textContent : i.textContent?.toLowerCase()) ?? "";
          if (n.endsWith(t)) {
            const o = n.length - t.length, l = o + t.length, m = new Range();
            m.setStart(i, o), m.setEnd(i, l), r(this, H, "f").push(m);
          }
        }
        break;
      case "contains":
        b(this, H, e.map((i) => ({ el: i, text: (this.caseSensitive ? i.textContent : i.textContent?.toLowerCase()) ?? "" })).map(({ el: i, text: n }) => {
          const o = new Array();
          let l = 0;
          for (; l < n.length; ) {
            const m = n.indexOf(t, l);
            if (m === -1) break;
            o.push(m), l = m + t.length;
          }
          return o.map((m) => {
            const u = new Range();
            return u.setStart(i, m), u.setEnd(i, m + t.length), u;
          });
        }).flat(), "f");
        break;
    }
    r(this, H, "f").length > 0 && CSS.highlights.set(r(this, it, "f"), new Highlight(...r(this, H, "f")));
  }
  this.dispatchEvent(new CustomEvent("highlight", { detail: [...r(this, H, "f")], bubbles: false, composed: false }));
};
j.styles = z`:host { display: contents; }`;
j.__nextId = 0;
f([x({ type: Boolean, reflect: true })], j.prototype, "disabled", void 0);
f([x()], j.prototype, "term", void 0);
f([x({ attribute: "case-sensitive", type: Boolean })], j.prototype, "caseSensitive", void 0);
f([x()], j.prototype, "mode", void 0);
j = hi = f([R("m3e-text-highlight")], j);
let mi = class extends E {
  render() {
    return A`<span class="base"><slot></slot></span>`;
  }
};
mi.styles = z`:host { flex: 1 1 auto; display: inline-flex; align-items: center; flex-wrap: nowrap; min-width: 0; } .base { flex: 1 1 auto; display: inline; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`;
mi = f([R("m3e-text-overflow")], mi);
const Y = { activeIndicatorSize: s("var(--m3e-loading-indicator-size, 2.375rem)"), activeIndicatorColor: s(`var(--m3e-loading-indicator-active-indicator-color, ${d.color.primary})`), containedActiveIndicatorColor: s(`var(--m3e-loading-indicator-contained-active-indicator-color, ${d.color.onPrimaryContainer})`), containedContainerColor: s(`var(--m3e-loading-indicator-contained-container-color, ${d.color.secondaryContainer})`), containerShape: s(`var(--m3e-loading-indicator-container-shape, ${d.shape.corner.full})`), containerSize: s("var(--m3e-loading-indicator-container-size, 3rem)") }, Fi = { "4-sided-cookie": "M230.389 50.473C293.109 23.2328 356.767 86.8908 329.527 149.611L325.023 159.981C316.707 179.13 316.707 200.87 325.023 220.019L329.527 230.389C356.767 293.109 293.109 356.767 230.389 329.527L220.019 325.023C200.87 316.707 179.13 316.707 159.981 325.023L149.611 329.527C86.8908 356.767 23.2328 293.109 50.473 230.389L54.9768 220.019C63.2934 200.87 63.2934 179.13 54.9768 159.981L50.473 149.611C23.2328 86.8908 86.8908 23.2328 149.611 50.473L159.981 54.9768C179.13 63.2934 200.87 63.2934 220.019 54.9768L230.389 50.473Z", "9-sided-cookie": "M154.828 43.2756C156.574 41.8498 157.448 41.1369 158.245 40.535C177.03 26.3548 202.97 26.3548 221.755 40.535C222.552 41.1369 223.425 41.8498 225.172 43.2756C225.952 43.9121 226.342 44.2303 226.727 44.5333C235.567 51.4788 246.406 55.4147 257.652 55.7636C258.143 55.7788 258.647 55.785 259.654 55.7975C261.911 55.8255 263.039 55.8395 264.037 55.8898C287.563 57.0742 307.435 73.7107 312.689 96.6205C312.912 97.5928 313.121 98.6991 313.541 100.911C313.728 101.899 313.822 102.393 313.922 102.872C316.219 113.862 321.986 123.828 330.377 131.308C330.743 131.635 331.125 131.962 331.888 132.618C333.599 134.087 334.454 134.821 335.187 135.5C352.445 151.495 356.95 176.983 346.215 197.903C345.76 198.791 345.208 199.773 344.104 201.737C343.611 202.613 343.364 203.052 343.132 203.483C337.812 213.375 335.809 224.708 337.418 235.82C337.488 236.304 337.569 236.8 337.732 237.792C338.096 240.014 338.278 241.125 338.402 242.115C341.318 265.436 328.347 287.851 306.647 296.991C305.726 297.379 304.67 297.778 302.559 298.574C301.617 298.929 301.146 299.107 300.69 299.289C290.241 303.455 281.406 310.852 275.48 320.395C275.221 320.811 274.964 321.243 274.449 322.107C273.297 324.043 272.721 325.011 272.178 325.849C259.387 345.584 235.011 354.436 212.498 347.521C211.543 347.228 210.477 346.856 208.347 346.112C207.396 345.78 206.921 345.614 206.455 345.461C195.767 341.951 184.233 341.951 173.545 345.461C173.079 345.614 172.603 345.78 171.652 346.112C169.522 346.856 168.457 347.228 167.502 347.521C144.989 354.436 120.613 345.584 107.822 325.849C107.279 325.011 106.703 324.043 105.55 322.107C105.036 321.243 104.779 320.811 104.52 320.395C98.5939 310.852 89.7583 303.455 79.3096 299.289C78.8539 299.107 78.3827 298.929 77.4404 298.574C75.3294 297.778 74.274 297.379 73.3529 296.991C51.6523 287.851 38.6819 265.436 41.598 242.115C41.7218 241.125 41.9039 240.014 42.2682 237.792C42.4308 236.8 42.5121 236.304 42.5822 235.82C44.1908 224.708 42.188 213.375 36.8675 203.483C36.6354 203.052 36.389 202.613 35.8962 201.737C34.7921 199.773 34.2401 198.791 33.7845 197.903C23.0499 176.983 27.5544 151.495 44.8128 135.5C45.5454 134.821 46.4007 134.087 48.1113 132.618C48.875 131.962 49.2568 131.635 49.6228 131.308C58.0134 123.828 63.7804 113.862 66.0777 102.872C66.1779 102.393 66.2715 101.899 66.4588 100.911C66.8783 98.699 67.088 97.5928 67.311 96.6204C72.5652 73.7107 92.4369 57.0742 115.962 55.8898C116.961 55.8395 118.089 55.8255 120.346 55.7975C121.353 55.785 121.857 55.7788 122.347 55.7636C133.594 55.4147 144.432 51.4788 153.272 44.5333C153.658 44.2303 154.048 43.9121 154.828 43.2756Z", oval: "M271.309 271.309C201.705 340.913 108.877 360.935 63.9707 316.029C19.0648 271.123 39.0867 178.295 108.691 108.691C178.295 39.0867 271.123 19.0648 316.029 63.9707C360.935 108.877 340.913 201.705 271.309 271.309Z", pentagon: "M155.064 49.459C176.093 34.1803 204.569 34.1803 225.598 49.459L322.926 120.171C343.955 135.45 352.754 162.532 344.722 187.253L307.546 301.668C299.514 326.39 276.476 343.127 250.483 343.127H130.18C104.186 343.127 81.1489 326.39 73.1164 301.668L35.9407 187.253C27.9082 162.532 36.7077 135.45 57.737 120.171L155.064 49.459Z", pill: "M116.116 71.7851C169.162 18.7383 255.168 18.7383 308.215 71.7851C361.262 124.832 361.262 210.838 308.215 263.884L263.884 308.215C210.838 361.262 124.832 361.262 71.7851 308.215C18.7383 255.168 18.7383 169.162 71.7851 116.116L116.116 71.7851Z", "soft-burst": "M175.147 33.1508C181.983 22.2831 198.017 22.2831 204.853 33.1508L221.238 59.2009C225.731 66.3458 234.797 69.2506 242.692 66.0751L271.475 54.4972C283.482 49.6671 296.455 58.9613 295.507 71.7154L293.235 102.288C292.612 110.673 298.215 118.278 306.494 120.284L336.681 127.601C349.275 130.653 354.23 145.692 345.861 155.461L325.8 178.877C320.298 185.3 320.298 194.7 325.8 201.123L345.861 224.539C354.23 234.308 349.275 249.347 336.681 252.399L306.494 259.716C298.215 261.722 292.612 269.327 293.235 277.712L295.507 308.285C296.455 321.039 283.482 330.333 271.475 325.503L242.692 313.925C234.797 310.749 225.731 313.654 221.238 320.799L204.853 346.849C198.017 357.717 181.983 357.717 175.147 346.849L158.762 320.799C154.269 313.654 145.203 310.749 137.308 313.925L108.525 325.503C96.5177 330.333 83.5454 321.039 84.4931 308.285L86.7649 277.712C87.388 269.327 81.785 261.722 73.5056 259.716L43.3186 252.399C30.7252 249.347 25.7702 234.308 34.1391 224.539L54.1997 201.123C59.7018 194.7 59.7018 185.3 54.1997 178.877L34.1391 155.461C25.7702 145.692 30.7252 130.653 43.3186 127.601L73.5056 120.284C81.785 118.278 87.388 110.673 86.7649 102.288L84.4931 71.7154C83.5454 58.9613 96.5177 49.6671 108.525 54.4972L137.308 66.0751C145.203 69.2506 154.269 66.3458 158.762 59.201L175.147 33.1508Z", sunny: "M276.453 68.8118C286.405 69.4881 291.381 69.8263 295.404 71.5853C301.223 74.1305 305.87 78.7766 308.415 84.5965C310.174 88.6186 310.512 93.5948 311.188 103.547L312.732 126.259C313.005 130.284 313.142 132.296 313.579 134.219C314.212 136.997 315.31 139.648 316.827 142.059C317.877 143.728 319.203 145.248 321.856 148.288L336.824 165.438C343.384 172.954 346.663 176.712 348.263 180.8C350.579 186.715 350.579 193.285 348.263 199.2C346.663 203.288 343.384 207.046 336.824 214.562L321.856 231.712C319.203 234.752 317.877 236.272 316.827 237.941C315.31 240.352 314.212 243.003 313.579 245.781C313.142 247.704 313.005 249.716 312.732 253.741L311.188 276.453C310.512 286.405 310.174 291.381 308.415 295.404C305.87 301.223 301.223 305.87 295.404 308.415C291.381 310.174 286.405 310.512 276.453 311.188L253.741 312.732C249.716 313.005 247.704 313.142 245.781 313.579C243.003 314.212 240.352 315.31 237.941 316.827C236.272 317.877 234.752 319.203 231.712 321.856L214.562 336.824C207.046 343.384 203.288 346.663 199.2 348.263C193.285 350.579 186.715 350.579 180.8 348.263C176.712 346.663 172.954 343.384 165.438 336.824L148.288 321.856C145.248 319.203 143.728 317.877 142.059 316.827C139.648 315.31 136.997 314.212 134.219 313.579C132.296 313.142 130.284 313.005 126.259 312.732L103.547 311.188C93.5947 310.512 88.6186 310.174 84.5965 308.415C78.7766 305.87 74.1305 301.223 71.5853 295.404C69.8263 291.381 69.4881 286.405 68.8118 276.453L67.2684 253.741C66.9949 249.716 66.8581 247.704 66.4206 245.781C65.7883 243.003 64.6903 240.352 63.173 237.941C62.123 236.272 60.7965 234.752 58.1437 231.712L43.1756 214.562C36.6164 207.046 33.3369 203.288 31.7366 199.2C29.4211 193.285 29.4211 186.715 31.7366 180.8C33.3369 176.712 36.6164 172.954 43.1756 165.438L58.1437 148.288C60.7965 145.248 62.123 143.728 63.173 142.059C64.6903 139.648 65.7883 136.997 66.4206 134.219C66.8581 132.296 66.9949 130.284 67.2684 126.259L68.8118 103.547C69.4881 93.5948 69.8263 88.6186 71.5853 84.5965C74.1305 78.7766 78.7766 74.1305 84.5965 71.5853C88.6186 69.8263 93.5948 69.4881 103.547 68.8118L126.259 67.2684C130.284 66.9949 132.296 66.8581 134.219 66.4206C136.997 65.7883 139.648 64.6903 142.059 63.173C143.728 62.123 145.248 60.7966 148.288 58.1437L165.438 43.1756C172.954 36.6164 176.712 33.3369 180.8 31.7366C186.715 29.4211 193.285 29.4211 199.2 31.7366C203.288 33.3369 207.046 36.6164 214.562 43.1756L231.712 58.1437C234.752 60.7966 236.272 62.123 237.941 63.173C240.352 64.6903 243.003 65.7883 245.781 66.4206C247.704 66.8581 249.716 66.9949 253.741 67.2684L276.453 68.8118Z" };
let st = new Array();
const _s = /* @__PURE__ */ new Map();
for (const a2 in Fi) st.push(Fi[a2]), _s.set(a2, st.length - 1);
const ws = {};
st = ln(st, 300);
for (const a2 of _s) ws[a2[0]] = s(st[a2[1]]);
const G = ws;
let nt = class extends zn(ue(E, "progressbar")) {
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
    return A`<div class="container" aria-hidden="true"><div class="active-indicator-wrapper"><div class="active-indicator"></div></div></div>`;
  }
};
nt.styles = z`:host { display: inline-block; aspect-ratio: 1 / 1; contain: strict; vertical-align: middle; content-visibility: auto; } :host([variant="uncontained"]) { width: ${Y.activeIndicatorSize}; } :host([variant="contained"]) { width: ${Y.containerSize}; } :host([variant="uncontained"]) .active-indicator { background-color: ${Y.activeIndicatorColor}; } :host([variant="contained"]) .active-indicator { background-color: ${Y.containedActiveIndicatorColor}; } :host([variant="contained"]) .container { background-color: ${Y.containedContainerColor}; } .container { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; border-radius: ${Y.containerShape}; } .active-indicator { margin: auto; aspect-ratio: 1 / 1; width: calc(${Y.activeIndicatorSize} * 0.842); transform-origin: center; transition: clip-path ${d.motion.spring.slowEffects}; will-change: transform, clip-path; --_polygon-soft-burst: polygon(${G["soft-burst"]}); --_polygon-9-sided-cookie: polygon(${G["9-sided-cookie"]}); --_polygon-pentagon: polygon(${G.pentagon}); --_polygon-pill: polygon(${G.pill}); --_polygon-sunny: polygon(${G.sunny}); --_polygon-4-sided-cookie: polygon(${G["4-sided-cookie"]}); --_polygon-oval: polygon(${G.oval}); } .container.animate .active-indicator-wrapper { animation: rotate-outer 4666ms linear infinite; transform-origin: center; display: flex; align-items: center; justify-content: center; will-change: transform; } @keyframes rotate-outer { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } .container.animate .active-indicator { animation: rotate-inner 4666ms cubic-bezier(0.34, 0.88, 0.34, 1) infinite; } @keyframes rotate-inner { 0% { clip-path: var(--_polygon-soft-burst); transform: rotate(0deg); } 14% { clip-path: var(--_polygon-9-sided-cookie); transform: rotate(154deg) scale(1); } 29% { clip-path: var(--_polygon-pentagon); transform: rotate(309deg) scale(1); } 43% { clip-path: var(--_polygon-pill); transform: rotate(463deg) scale(1); } 57% { clip-path: var(--_polygon-sunny); transform: rotate(617deg) scale(1); } 71% { clip-path: var(--_polygon-4-sided-cookie); transform: rotate(771deg) scale(1); } 83% { clip-path: var(--_polygon-oval); transform: rotate(926deg) scale(1); } 100% { clip-path: var(--_polygon-soft-burst); transform: rotate(1080deg) scale(1); } } @media (forced-colors: active) { .active-indicator { background-color: CanvasText !important; } }`;
f([Ft(".container")], nt.prototype, "_container", void 0);
f([x({ reflect: true })], nt.prototype, "variant", void 0);
nt = f([R("m3e-loading-indicator")], nt);
const Dn = ["aria-label"], Dt = ks({ __name: "MDLoadingIndicator", props: { label: {}, size: {} }, setup(a2) {
  const e = a2, t = Es(() => e.size ? { "--m3e-loading-indicator-size": e.size } : void 0);
  return (i, n) => (Ms(), Cs("m3e-loading-indicator", { class: "md-loading-indicator", "aria-label": e.label, style: $s(t.value) }, null, 12, Dn));
} }), ia = Ss(Dt, [["__scopeId", "data-v-ae044826"]]);
Dt.__docgenInfo = Object.assign({ displayName: Dt.name ?? Dt.__name }, { exportName: "default", displayName: "MDLoadingIndicator", type: 1, props: [{ name: "label", global: false, description: `Accessible purpose of the ongoing process (Loading indicator accessibility:
"Write a label describing the purpose of the loading indicator, such as
loading news article or refreshing page").`, tags: [], required: true, type: "string", declarations: [], schema: "string" }, { name: "size", global: false, description: `Active indicator size as a CSS length (Loading indicator overview/guidelines:
the indicator "can scale in size" between 24dp and 240dp). Defaults to the
official Material default of 38dp.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "key", global: true, description: "", tags: [], required: false, type: "PropertyKey", declarations: [], schema: { kind: "enum", type: "PropertyKey", schema: ["string", "number", "symbol"] } }, { name: "ref", global: true, description: "", tags: [], required: false, type: "VNodeRef", declarations: [], schema: { kind: "enum", type: "VNodeRef", schema: ["string", "Ref<any, any>", { kind: "event", type: "(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void" }] } }, { name: "ref_for", global: true, description: "", tags: [], required: false, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }, { name: "ref_key", global: true, description: "", tags: [], required: false, type: "string", declarations: [], schema: "string" }, { name: "class", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "style", global: true, description: "", tags: [], required: false, type: "unknown", declarations: [], schema: "unknown" }, { name: "tabindex", global: true, description: "", tags: [], required: false, type: "string | number", declarations: [], schema: { kind: "enum", type: "string | number", schema: ["string", "number"] } }, { name: "aria-activedescendant", global: true, description: "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-atomic", global: true, description: "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-autocomplete", global: true, description: `Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`, tags: [], required: false, type: '"none" | "inline" | "list" | "both" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "inline" | "list" | "both" | undefined', schema: ["undefined", '"none"', '"inline"', '"list"', '"both"'] } }, { name: "aria-busy", global: true, description: "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-checked", global: true, description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.', tags: [{ name: "see", text: "aria-pressed" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-colcount", global: true, description: "Defines the total number of columns in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colindex", global: true, description: "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colcount" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-colspan", global: true, description: "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-colindex" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-controls", global: true, description: "Identifies the element (or elements) whose contents or presence are controlled by the current element.", tags: [{ name: "see", text: "aria-owns." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-current", global: true, description: "Indicates the element that represents the current item within a container or set of related elements.", tags: [], required: false, type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "page" | "step" | "location" | "date" | "time" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"page"', '"step"', '"location"', '"date"', '"time"'] } }, { name: "aria-describedby", global: true, description: "Identifies the element (or elements) that describes the object.", tags: [{ name: "see", text: "aria-labelledby" }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-details", global: true, description: "Identifies the element that provides a detailed, extended description for the object.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-disabled", global: true, description: "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.", tags: [{ name: "see", text: "aria-hidden" }, { name: "see", text: "aria-readonly." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-dropeffect", global: true, description: "Indicates what functions can be performed when a dragged object is released on the drop target.", tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined', schema: ["undefined", '"none"', '"copy"', '"execute"', '"link"', '"move"', '"popup"'] } }, { name: "aria-errormessage", global: true, description: "Identifies the element that provides an error message for the object.", tags: [{ name: "see", text: "aria-invalid" }, { name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-expanded", global: true, description: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-flowto", global: true, description: `Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-grabbed", global: true, description: `Indicates an element's "grabbed" state in a drag-and-drop operation.`, tags: [{ name: "deprecated", text: "in ARIA 1.1" }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-haspopup", global: true, description: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.", tags: [], required: false, type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"menu"', '"listbox"', '"tree"', '"grid"', '"dialog"'] } }, { name: "aria-hidden", global: true, description: "Indicates whether the element is exposed to an accessibility API.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-invalid", global: true, description: "Indicates the entered value does not conform to the format expected by the application.", tags: [{ name: "see", text: "aria-errormessage." }], required: false, type: 'Booleanish | "grammar" | "spelling" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "grammar" | "spelling" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"grammar"', '"spelling"'] } }, { name: "aria-keyshortcuts", global: true, description: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-label", global: true, description: "Defines a string value that labels the current element.", tags: [{ name: "see", text: "aria-labelledby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-labelledby", global: true, description: "Identifies the element (or elements) that labels the current element.", tags: [{ name: "see", text: "aria-describedby." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-level", global: true, description: "Defines the hierarchical level of an element within a structure.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-live", global: true, description: "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.", tags: [], required: false, type: '"off" | "assertive" | "polite" | undefined', declarations: [], schema: { kind: "enum", type: '"off" | "assertive" | "polite" | undefined', schema: ["undefined", '"off"', '"assertive"', '"polite"'] } }, { name: "aria-modal", global: true, description: "Indicates whether an element is modal when displayed.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiline", global: true, description: "Indicates whether a text box accepts multiple lines of input or only a single line.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-multiselectable", global: true, description: "Indicates that the user may select more than one item from the current selectable descendants.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-orientation", global: true, description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.", tags: [], required: false, type: '"horizontal" | "vertical" | undefined', declarations: [], schema: { kind: "enum", type: '"horizontal" | "vertical" | undefined', schema: ["undefined", '"horizontal"', '"vertical"'] } }, { name: "aria-owns", global: true, description: `Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.`, tags: [{ name: "see", text: "aria-controls." }], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-placeholder", global: true, description: `Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`, tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-posinset", global: true, description: "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-setsize." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-pressed", global: true, description: 'Indicates the current "pressed" state of toggle buttons.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-selected." }], required: false, type: 'Booleanish | "mixed" | undefined', declarations: [], schema: { kind: "enum", type: 'Booleanish | "mixed" | undefined', schema: ["undefined", "false", "true", '"true"', '"false"', '"mixed"'] } }, { name: "aria-readonly", global: true, description: "Indicates that the element is not editable, but is otherwise operable.", tags: [{ name: "see", text: "aria-disabled." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-relevant", global: true, description: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.", tags: [{ name: "see", text: "aria-atomic." }], required: false, type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', declarations: [], schema: { kind: "enum", type: '"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined', schema: ["undefined", '"additions"', '"additions removals"', '"additions text"', '"all"', '"removals"', '"removals additions"', '"removals text"', '"text"', '"text additions"', '"text removals"'] } }, { name: "aria-required", global: true, description: "Indicates that user input is required on the element before a form may be submitted.", tags: [], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-roledescription", global: true, description: "Defines a human-readable, author-localized description for the role of an element.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "aria-rowcount", global: true, description: "Defines the total number of rows in a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowindex", global: true, description: "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowcount" }, { name: "see", text: "aria-rowspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-rowspan", global: true, description: "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.", tags: [{ name: "see", text: "aria-rowindex" }, { name: "see", text: "aria-colspan." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-selected", global: true, description: 'Indicates the current "selected" state of various widgets.', tags: [{ name: "see", text: "aria-checked" }, { name: "see", text: "aria-pressed." }], required: false, type: "Booleanish | undefined", declarations: [], schema: { kind: "enum", type: "Booleanish | undefined", schema: ["undefined", "false", "true", '"true"', '"false"'] } }, { name: "aria-setsize", global: true, description: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.", tags: [{ name: "see", text: "aria-posinset." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-sort", global: true, description: "Indicates if items in a table or grid are sorted in ascending or descending order.", tags: [], required: false, type: '"none" | "ascending" | "descending" | "other" | undefined', declarations: [], schema: { kind: "enum", type: '"none" | "ascending" | "descending" | "other" | undefined', schema: ["undefined", '"none"', '"ascending"', '"descending"', '"other"'] } }, { name: "aria-valuemax", global: true, description: "Defines the maximum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuemin", global: true, description: "Defines the minimum allowed value for a range widget.", tags: [], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuenow", global: true, description: "Defines the current value for a range widget.", tags: [{ name: "see", text: "aria-valuetext." }], required: false, type: "Numberish | undefined", declarations: [], schema: { kind: "enum", type: "Numberish | undefined", schema: ["undefined", "string", "number"] } }, { name: "aria-valuetext", global: true, description: "Defines the human readable text alternative of aria-valuenow for a range widget.", tags: [], required: false, type: "string | undefined", declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }, { name: "ariaActiveDescendantElement", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)", tags: [], required: false, type: "Element | null", declarations: [], schema: { kind: "enum", type: "Element | null", schema: ["null", { kind: "object", type: "Element" }] } }, { name: "ariaAtomic", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaAutoComplete", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBrailleRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaBusy", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaChecked", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaColSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaControlsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaCurrent", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDescribedByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaDetailsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaDisabled", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaErrorMessageElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaExpanded", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaFlowToElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaHasPopup", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaHidden", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaInvalid", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaKeyShortcuts", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLabelledByElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaLevel", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaLive", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaModal", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiLine", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaMultiSelectable", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOrientation", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaOwnsElements", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)", tags: [], required: false, type: "readonly Element[] | null", declarations: [], schema: { kind: "enum", type: "readonly Element[] | null", schema: ["null", { kind: "array", type: "readonly Element[]" }] } }, { name: "ariaPlaceholder", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPosInSet", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaPressed", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaReadOnly", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRelevant", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRequired", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRoleDescription", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowCount", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndex", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowIndexText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaRowSpan", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSelected", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSetSize", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaSort", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMax", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueMin", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueNow", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "ariaValueText", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }, { name: "role", global: true, description: "[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)", tags: [], required: false, type: "string | null", declarations: [], schema: { kind: "enum", type: "string | null", schema: ["null", "string"] } }], events: [], slots: [], exposed: [{ name: "label", type: "string", description: `Accessible purpose of the ongoing process (Loading indicator accessibility:
"Write a label describing the purpose of the loading indicator, such as
loading news article or refreshing page").`, declarations: [], schema: "string" }, { name: "size", type: "string | undefined", description: `Active indicator size as a CSS length (Loading indicator overview/guidelines:
the indicator "can scale in size" between 24dp and 240dp). Defaults to the
official Material default of 38dp.`, declarations: [], schema: { kind: "enum", type: "string | undefined", schema: ["undefined", "string"] } }], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/ui/material/components/loading-indicator/MDLoadingIndicator.vue" });
export {
  bi as A,
  d as D,
  qn as F,
  Bn as K,
  On as L,
  ia as M,
  is as P,
  ue as R,
  r as _,
  Fn as a,
  Nn as b,
  ds as c,
  E as d,
  Tn as e,
  qt as f,
  w as g,
  os as h,
  z as i,
  An as j,
  A as k,
  F as l,
  Hn as m,
  Ce as n,
  f as o,
  Kt as p,
  Ft as q,
  s as r,
  ni as s,
  x as t,
  ss as u,
  R as v
};
