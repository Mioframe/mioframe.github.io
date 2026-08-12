import { t as Te, i as Se, e as Ne, n as Fe } from "./index-DqUS5Yfi.js";
import { B as Ee, C as ne, h as Ae, M as ie } from "./iframe-n94PV55C.js";
var fe = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], M = fe.join(","), de = typeof Element > "u", C = de ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, _ = !de && Element.prototype.getRootNode ? function(n) {
  var e;
  return n == null || (e = n.getRootNode) === null || e === void 0 ? void 0 : e.call(n);
} : function(n) {
  return n?.ownerDocument;
}, G = function(e, t) {
  var r;
  t === void 0 && (t = true);
  var u = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), s = u === "" || u === "true", a = s || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : G(e.parentNode));
  return a;
}, ke = function(e) {
  var t, r = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, "contenteditable");
  return r === "" || r === "true";
}, ve = function(e, t, r) {
  if (G(e)) return [];
  var u = Array.prototype.slice.apply(e.querySelectorAll(M));
  return t && C.call(e, M) && u.unshift(e), u = u.filter(r), u;
}, V = function(e, t, r) {
  for (var u = [], s = Array.from(e); s.length; ) {
    var a = s.shift();
    if (!G(a, false)) if (a.tagName === "SLOT") {
      var c = a.assignedElements(), h = c.length ? c : a.children, w = V(h, true, r);
      r.flatten ? u.push.apply(u, w) : u.push({ scopeParent: a, candidates: w });
    } else {
      var N = C.call(a, M);
      N && r.filter(a) && (t || !e.includes(a)) && u.push(a);
      var m = a.shadowRoot || typeof r.getShadowRoot == "function" && r.getShadowRoot(a), T = !G(m, false) && (!r.shadowRootFilter || r.shadowRootFilter(a));
      if (m && T) {
        var A = V(m === true ? a.children : m.children, true, r);
        r.flatten ? u.push.apply(u, A) : u.push({ scopeParent: a, candidates: A });
      } else s.unshift.apply(s, a.children);
    }
  }
  return u;
}, be = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, P = function(e) {
  if (!e) throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || ke(e)) && !be(e) ? 0 : e.tabIndex;
}, Re = function(e, t) {
  var r = P(e);
  return r < 0 && t && !be(e) ? 0 : r;
}, Ie = function(e, t) {
  return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, he = function(e) {
  return e.tagName === "INPUT";
}, De = function(e) {
  return he(e) && e.type === "hidden";
}, Pe = function(e) {
  var t = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return t;
}, Ce = function(e, t) {
  for (var r = 0; r < e.length; r++) if (e[r].checked && e[r].form === t) return e[r];
}, Oe = function(e) {
  if (!e.name) return true;
  var t = e.form || _(e), r = function(c) {
    return t.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, u;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") u = r(window.CSS.escape(e.name));
  else try {
    u = r(e.name);
  } catch (a) {
    return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), false;
  }
  var s = Ce(u, e.form);
  return !s || s === e;
}, Le = function(e) {
  return he(e) && e.type === "radio";
}, je = function(e) {
  return Le(e) && !Oe(e);
}, xe = function(e) {
  var t, r = e && _(e), u = (t = r) === null || t === void 0 ? void 0 : t.host, s = false;
  if (r && r !== e) {
    var a, c, h;
    for (s = !!((a = u) !== null && a !== void 0 && (c = a.ownerDocument) !== null && c !== void 0 && c.contains(u) || e != null && (h = e.ownerDocument) !== null && h !== void 0 && h.contains(e)); !s && u; ) {
      var w, N, m;
      r = _(u), u = (w = r) === null || w === void 0 ? void 0 : w.host, s = !!((N = u) !== null && N !== void 0 && (m = N.ownerDocument) !== null && m !== void 0 && m.contains(u));
    }
  }
  return s;
}, oe = function(e) {
  var t = e.getBoundingClientRect(), r = t.width, u = t.height;
  return r === 0 && u === 0;
}, Be = function(e, t) {
  var r = t.displayCheck, u = t.getShadowRoot;
  if (r === "full-native" && "checkVisibility" in e) {
    var s = e.checkVisibility({ checkOpacity: false, opacityProperty: false, contentVisibilityAuto: true, visibilityProperty: true, checkVisibilityCSS: true });
    return !s;
  }
  var a = getComputedStyle(e), c = a.visibility;
  if (c === "hidden" || c === "collapse") return true;
  var h = C.call(e, "details>summary:first-of-type"), w = h ? e.parentElement : e;
  if (C.call(w, "details:not([open]) *")) return true;
  if (!r || r === "full" || r === "full-native" || r === "legacy-full") {
    if (typeof u == "function") {
      for (var N = e; e; ) {
        var m = e.parentElement, T = _(e);
        if (m && !m.shadowRoot && u(m) === true) return oe(e);
        e.assignedSlot ? e = e.assignedSlot : !m && T !== e.ownerDocument ? e = T.host : e = m;
      }
      e = N;
    }
    if (xe(e)) return !e.getClientRects().length;
    if (r !== "legacy-full") return true;
  } else if (r === "non-zero-area") return oe(e);
  return false;
}, Ke = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t; ) {
    if (t.tagName === "FIELDSET" && t.disabled) {
      for (var r = 0; r < t.children.length; r++) {
        var u = t.children.item(r);
        if (u.tagName === "LEGEND") return C.call(t, "fieldset[disabled] *") ? true : !u.contains(e);
      }
      return true;
    }
    t = t.parentElement;
  }
  return false;
}, q = function(e, t) {
  return !(t.disabled || De(t) || Be(t, e) || Pe(t) || Ke(t));
}, Z = function(e, t) {
  return !(je(t) || P(t) < 0 || !q(e, t));
}, Me = function(e) {
  var t = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(t) || t >= 0);
}, pe = function(e) {
  var t = [], r = [];
  return e.forEach(function(u, s) {
    var a = !!u.scopeParent, c = a ? u.scopeParent : u, h = Re(c, a), w = a ? pe(u.candidates) : c;
    h === 0 ? a ? t.push.apply(t, w) : t.push(c) : r.push({ documentOrder: s, tabIndex: h, item: u, isScope: a, content: w });
  }), r.sort(Ie).reduce(function(u, s) {
    return s.isScope ? u.push.apply(u, s.content) : u.push(s.content), u;
  }, []).concat(t);
}, _e = function(e, t) {
  t = t || {};
  var r;
  return t.getShadowRoot ? r = V([e], t.includeContainer, { filter: Z.bind(null, t), flatten: false, getShadowRoot: t.getShadowRoot, shadowRootFilter: Me }) : r = ve(e, t.includeContainer, Z.bind(null, t)), pe(r);
}, Ge = function(e, t) {
  t = t || {};
  var r;
  return t.getShadowRoot ? r = V([e], t.includeContainer, { filter: q.bind(null, t), flatten: true, getShadowRoot: t.getShadowRoot }) : r = ve(e, t.includeContainer, q.bind(null, t)), r;
}, O = function(e, t) {
  if (t = t || {}, !e) throw new Error("No node provided");
  return C.call(e, M) === false ? false : Z(t, e);
}, Ve = fe.concat("iframe:not([inert]):not([inert] *)").join(","), H = function(e, t) {
  if (t = t || {}, !e) throw new Error("No node provided");
  return C.call(e, Ve) === false ? false : q(t, e);
};
function z(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
  return r;
}
function qe(n) {
  if (Array.isArray(n)) return z(n);
}
function ue(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!t) {
    if (Array.isArray(n) || (t = ye(n)) || e) {
      t && (n = t);
      var r = 0, u = function() {
      };
      return { s: u, n: function() {
        return r >= n.length ? { done: true } : { done: false, value: n[r++] };
      }, e: function(h) {
        throw h;
      }, f: u };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, a = true, c = false;
  return { s: function() {
    t = t.call(n);
  }, n: function() {
    var h = t.next();
    return a = h.done, h;
  }, e: function(h) {
    c = true, s = h;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (c) throw s;
    }
  } };
}
function Ue(n, e, t) {
  return (e = ze(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: true, configurable: true, writable: true }) : n[e] = t, n;
}
function We(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Ye() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function se(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function le(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? se(Object(t), true).forEach(function(r) {
      Ue(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : se(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function He(n) {
  return qe(n) || We(n) || ye(n) || Ye();
}
function Ze(n, e) {
  if (typeof n != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function ze(n) {
  var e = Ze(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function ye(n, e) {
  if (n) {
    if (typeof n == "string") return z(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? z(n, e) : void 0;
  }
}
var k = { getActiveTrap: function(e) {
  return e?.length > 0 ? e[e.length - 1] : null;
}, activateTrap: function(e, t) {
  var r = k.getActiveTrap(e);
  t !== r && k.pauseTrap(e);
  var u = e.indexOf(t);
  u === -1 || e.splice(u, 1), e.push(t);
}, deactivateTrap: function(e, t) {
  var r = e.indexOf(t);
  r !== -1 && e.splice(r, 1), k.unpauseTrap(e);
}, pauseTrap: function(e) {
  var t = k.getActiveTrap(e);
  t?._setPausedState(true);
}, unpauseTrap: function(e) {
  var t = k.getActiveTrap(e);
  t && !t._isManuallyPaused() && t._setPausedState(false);
} }, Xe = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, $e = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, x = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, Je = function(e) {
  return x(e) && !e.shiftKey;
}, Qe = function(e) {
  return x(e) && e.shiftKey;
}, ce = function(e) {
  return setTimeout(e, 0);
}, j = function(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) r[u - 1] = arguments[u];
  return typeof e == "function" ? e.apply(void 0, r) : e;
}, K = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, et = [], tt = function(e, t) {
  var r = t?.document || document, u = t?.trapStack || et, s = le({ returnFocusOnDeactivate: true, escapeDeactivates: true, delayInitialFocus: true, delayReturnFocus: true, isolateSubtrees: false, isKeyForward: Je, isKeyBackward: Qe }, t), a = { containers: [], containerGroups: [], tabbableGroups: [], adjacentElements: /* @__PURE__ */ new Set(), alreadySilent: /* @__PURE__ */ new Set(), nodeFocusedBeforeActivation: null, mostRecentlyFocusedNode: null, active: false, paused: false, manuallyPaused: false, delayInitialFocusTimer: void 0, recentNavEvent: void 0 }, c, h = function(i, o, l) {
    return i && i[o] !== void 0 ? i[o] : s[l || o];
  }, w = function(i, o) {
    var l = typeof o?.composedPath == "function" ? o.composedPath() : void 0;
    return a.containerGroups.findIndex(function(v) {
      var d = v.container, y = v.tabbableNodes;
      return d.contains(i) || l?.includes(d) || y.find(function(f) {
        return f === i;
      });
    });
  }, N = function(i) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = o.hasFallback, v = l === void 0 ? false : l, d = o.params, y = d === void 0 ? [] : d, f = s[i];
    if (typeof f == "function" && (f = f.apply(void 0, He(y))), f === true && (f = void 0), !f) {
      if (f === void 0 || f === false) return f;
      throw new Error("`".concat(i, "` was specified but was not a node, or did not return a node"));
    }
    var p = f;
    if (typeof f == "string") {
      try {
        p = r.querySelector(f);
      } catch (b) {
        throw new Error("`".concat(i, '` appears to be an invalid selector; error="').concat(b.message, '"'));
      }
      if (!p && !v) throw new Error("`".concat(i, "` as selector refers to no known node"));
    }
    return p;
  }, m = function(i) {
    var o = i.activeElement;
    return o ? o.shadowRoot && o.shadowRoot.activeElement !== null ? m(o.shadowRoot) : o : null;
  }, T = function() {
    var i = N("initialFocus", { hasFallback: true });
    if (i === false) return false;
    if (i === void 0 || i && !H(i, s.tabbableOptions)) {
      var o = m(r);
      if (w(o) >= 0) i = o;
      else {
        var l = a.tabbableGroups[0], v = l && l.firstTabbableNode;
        i = v || N("fallbackFocus");
      }
    } else i === null && (i = N("fallbackFocus"));
    if (!i) throw new Error("Your focus-trap needs to have at least one focusable element");
    return i;
  }, A = function() {
    if (a.containerGroups = a.containers.map(function(i) {
      var o = _e(i, s.tabbableOptions), l = Ge(i, s.tabbableOptions), v = o.length > 0 ? o[0] : void 0, d = o.length > 0 ? o[o.length - 1] : void 0, y = l.find(function(b) {
        return O(b);
      }), f = l.slice().reverse().find(function(b) {
        return O(b);
      }), p = !!o.find(function(b) {
        return P(b) > 0;
      });
      return { container: i, tabbableNodes: o, focusableNodes: l, posTabIndexesFound: p, firstTabbableNode: v, lastTabbableNode: d, firstDomTabbableNode: y, lastDomTabbableNode: f, nextTabbableNode: function(S) {
        var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, E = o.indexOf(S);
        return E < 0 ? F ? l.slice(l.indexOf(S) + 1).find(function(I) {
          return O(I);
        }) : l.slice(0, l.indexOf(S)).reverse().find(function(I) {
          return O(I);
        }) : o[E + (F ? 1 : -1)];
      } };
    }), a.tabbableGroups = a.containerGroups.filter(function(i) {
      return i.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !N("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(i) {
      return i.posTabIndexesFound;
    }) && a.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, R = function(i) {
    if (i !== false && i !== m(document)) {
      if (!i || !i.focus) {
        R(T());
        return;
      }
      i.focus({ preventScroll: !!s.preventScroll }), a.mostRecentlyFocusedNode = i, Xe(i) && i.select();
    }
  }, X = function(i) {
    var o = N("setReturnFocus", { params: [i] });
    return o || (o === false ? false : i);
  }, $ = function(i) {
    var o = i.target, l = i.event, v = i.isBackward, d = v === void 0 ? false : v;
    o = o || K(l), A();
    var y = null;
    if (a.tabbableGroups.length > 0) {
      var f = w(o, l), p = f >= 0 ? a.containerGroups[f] : void 0;
      if (f < 0) d ? y = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : y = a.tabbableGroups[0].firstTabbableNode;
      else if (d) {
        var b = a.tabbableGroups.findIndex(function(W) {
          var Y = W.firstTabbableNode;
          return o === Y;
        });
        if (b < 0 && (p.container === o || H(o, s.tabbableOptions) && !O(o, s.tabbableOptions) && !p.nextTabbableNode(o, false)) && (b = f), b >= 0) {
          var S = b === 0 ? a.tabbableGroups.length - 1 : b - 1, F = a.tabbableGroups[S];
          y = P(o) >= 0 ? F.lastTabbableNode : F.lastDomTabbableNode;
        } else x(l) || (y = p.nextTabbableNode(o, false));
      } else {
        var E = a.tabbableGroups.findIndex(function(W) {
          var Y = W.lastTabbableNode;
          return o === Y;
        });
        if (E < 0 && (p.container === o || H(o, s.tabbableOptions) && !O(o, s.tabbableOptions) && !p.nextTabbableNode(o)) && (E = f), E >= 0) {
          var I = E === a.tabbableGroups.length - 1 ? 0 : E + 1, D = a.tabbableGroups[I];
          y = P(o) >= 0 ? D.firstTabbableNode : D.firstDomTabbableNode;
        } else x(l) || (y = p.nextTabbableNode(o));
      }
    } else y = N("fallbackFocus");
    return y;
  }, B = function(i) {
    var o = K(i);
    if (!(w(o, i) >= 0)) {
      if (j(s.clickOutsideDeactivates, i)) {
        c.deactivate({ returnFocus: s.returnFocusOnDeactivate });
        return;
      }
      j(s.allowOutsideClick, i) || i.preventDefault();
    }
  }, J = function(i) {
    var o = K(i), l = w(o, i) >= 0;
    if (l || o instanceof Document) l && (a.mostRecentlyFocusedNode = o);
    else {
      i.stopImmediatePropagation();
      var v, d = true;
      if (a.mostRecentlyFocusedNode) if (P(a.mostRecentlyFocusedNode) > 0) {
        var y = w(a.mostRecentlyFocusedNode), f = a.containerGroups[y].tabbableNodes;
        if (f.length > 0) {
          var p = f.findIndex(function(b) {
            return b === a.mostRecentlyFocusedNode;
          });
          p >= 0 && (s.isKeyForward(a.recentNavEvent) ? p + 1 < f.length && (v = f[p + 1], d = false) : p - 1 >= 0 && (v = f[p - 1], d = false));
        }
      } else a.containerGroups.some(function(b) {
        return b.tabbableNodes.some(function(S) {
          return P(S) > 0;
        });
      }) || (d = false);
      else d = false;
      d && (v = $({ target: a.mostRecentlyFocusedNode, isBackward: s.isKeyBackward(a.recentNavEvent) })), R(v || a.mostRecentlyFocusedNode || T());
    }
    a.recentNavEvent = void 0;
  }, me = function(i) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    a.recentNavEvent = i;
    var l = $({ event: i, isBackward: o });
    l && (x(i) && i.preventDefault(), R(l));
  }, Q = function(i) {
    (s.isKeyForward(i) || s.isKeyBackward(i)) && me(i, s.isKeyBackward(i));
  }, ee = function(i) {
    $e(i) && j(s.escapeDeactivates, i) !== false && (i.preventDefault(), c.deactivate());
  }, te = function(i) {
    var o = K(i);
    w(o, i) >= 0 || j(s.clickOutsideDeactivates, i) || j(s.allowOutsideClick, i) || (i.preventDefault(), i.stopImmediatePropagation());
  }, ae = function() {
    if (a.active) {
      k.activateTrap(u, c);
      var i;
      return s.delayInitialFocus ? i = new Promise(function(o) {
        a.delayInitialFocusTimer = ce(function() {
          R(T()), o();
        });
      }) : R(T()), r.addEventListener("focusin", J, true), r.addEventListener("mousedown", B, { capture: true, passive: false }), r.addEventListener("touchstart", B, { capture: true, passive: false }), r.addEventListener("click", te, { capture: true, passive: false }), r.addEventListener("keydown", Q, { capture: true, passive: false }), r.addEventListener("keydown", ee), i;
    }
  }, ge = function(i) {
    a.active && !a.paused && c._setSubtreeIsolation(false), a.adjacentElements.clear(), a.alreadySilent.clear();
    var o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), v = ue(i), d;
    try {
      for (v.s(); !(d = v.n()).done; ) {
        var y = d.value;
        o.add(y);
        for (var f = typeof ShadowRoot < "u" && y.getRootNode() instanceof ShadowRoot, p = y; p; ) {
          o.add(p);
          var b = p.parentElement, S = [];
          b ? S = b.children : !b && f && (S = p.getRootNode().children, b = p.getRootNode().host, f = typeof ShadowRoot < "u" && b.getRootNode() instanceof ShadowRoot);
          var F = ue(S), E;
          try {
            for (F.s(); !(E = F.n()).done; ) {
              var I = E.value;
              l.add(I);
            }
          } catch (D) {
            F.e(D);
          } finally {
            F.f();
          }
          p = b;
        }
      }
    } catch (D) {
      v.e(D);
    } finally {
      v.f();
    }
    o.forEach(function(D) {
      l.delete(D);
    }), a.adjacentElements = l;
  }, re = function() {
    if (a.active) return r.removeEventListener("focusin", J, true), r.removeEventListener("mousedown", B, true), r.removeEventListener("touchstart", B, true), r.removeEventListener("click", te, true), r.removeEventListener("keydown", Q, true), r.removeEventListener("keydown", ee), c;
  }, we = function(i) {
    var o = a.mostRecentlyFocusedNode;
    if (o) {
      var l = i.some(function(d) {
        var y = Array.from(d.removedNodes);
        return y.some(function(f) {
          return f === o || typeof f.contains == "function" && f.contains(o);
        });
      });
      if (l && a.containers.some(function(d) {
        return d?.isConnected;
      })) {
        A();
        var v = T();
        R(v);
      }
    }
  }, U = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(we) : void 0, L = function() {
    U && (U.disconnect(), a.active && !a.paused && a.containers.map(function(i) {
      U.observe(i, { subtree: true, childList: true });
    }));
  };
  return c = { get active() {
    return a.active;
  }, get paused() {
    return a.paused;
  }, activate: function(i) {
    if (a.active) return this;
    var o = h(i, "onActivate"), l = h(i, "onPostActivate"), v = h(i, "checkCanFocusTrap"), d = k.getActiveTrap(u), y = false;
    if (d && !d.paused) {
      var f;
      (f = d._setSubtreeIsolation) === null || f === void 0 || f.call(d, false), y = true;
    }
    try {
      v || A(), a.active = true, a.paused = false, a.nodeFocusedBeforeActivation = m(r), o?.({ trap: c });
      var p = function() {
        v && A();
        var F = function() {
          c._setSubtreeIsolation(true), L(), l?.({ trap: c });
        }, E = ae();
        E ? E.then(F) : F();
      };
      if (v) return v(a.containers.concat()).then(p, p), this;
      p();
    } catch (S) {
      if (d === k.getActiveTrap(u) && y) {
        var b;
        (b = d._setSubtreeIsolation) === null || b === void 0 || b.call(d, true);
      }
      throw S;
    }
    return this;
  }, deactivate: function(i) {
    if (!a.active) return this;
    var o = le({ onDeactivate: s.onDeactivate, onPostDeactivate: s.onPostDeactivate, checkCanReturnFocus: s.checkCanReturnFocus }, i);
    clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || c._setSubtreeIsolation(false), a.alreadySilent.clear(), re(), a.active = false, a.paused = false, L(), k.deactivateTrap(u, c);
    var l = h(o, "onDeactivate"), v = h(o, "onPostDeactivate"), d = h(o, "checkCanReturnFocus"), y = h(o, "delayReturnFocus"), f = h(o, "returnFocus", "returnFocusOnDeactivate");
    l?.({ trap: c });
    var p = function() {
      f && R(X(a.nodeFocusedBeforeActivation)), v?.({ trap: c });
    }, b = function() {
      y && f ? ce(p) : p();
    };
    return f && d ? (d(X(a.nodeFocusedBeforeActivation)).then(b, b), this) : (b(), this);
  }, pause: function(i) {
    return a.active ? (a.manuallyPaused = true, this._setPausedState(true, i)) : this;
  }, unpause: function(i) {
    return a.active ? (a.manuallyPaused = false, u[u.length - 1] !== this ? this : this._setPausedState(false, i)) : this;
  }, updateContainerElements: function(i) {
    var o = [].concat(i).filter(Boolean);
    return a.containers = o.map(function(l) {
      return typeof l == "string" ? r.querySelector(l) : l;
    }), s.isolateSubtrees && ge(a.containers), a.active && (A(), a.paused || c._setSubtreeIsolation(true)), L(), this;
  } }, Object.defineProperties(c, { _isManuallyPaused: { value: function() {
    return a.manuallyPaused;
  } }, _setPausedState: { value: function(i, o) {
    if (a.paused === i) return this;
    if (a.paused = i, i) {
      var l = h(o, "onPause"), v = h(o, "onPostPause");
      l?.({ trap: c }), re(), c._setSubtreeIsolation(false), L(), v?.({ trap: c });
    } else {
      var d = h(o, "onUnpause"), y = h(o, "onPostUnpause");
      d?.({ trap: c });
      var f = function() {
        A();
        var b = function() {
          c._setSubtreeIsolation(true), L(), y?.({ trap: c });
        }, S = ae();
        S ? S.then(b) : b();
      };
      f();
    }
    return this;
  } }, _setSubtreeIsolation: { value: function(i) {
    s.isolateSubtrees && a.adjacentElements.forEach(function(o) {
      var l;
      i ? s.isolateSubtrees === "aria-hidden" ? ((o.ariaHidden === "true" || ((l = o.getAttribute("aria-hidden")) === null || l === void 0 ? void 0 : l.toLowerCase()) === "true") && a.alreadySilent.add(o), o.setAttribute("aria-hidden", "true")) : ((o.inert || o.hasAttribute("inert")) && a.alreadySilent.add(o), o.setAttribute("inert", true)) : a.alreadySilent.has(o) || (s.isolateSubtrees === "aria-hidden" ? o.removeAttribute("aria-hidden") : o.removeAttribute("inert"));
    });
  } } }), c.updateContainerElements(e), c;
};
function nt(n, e = {}) {
  let t;
  const { immediate: r, ...u } = e, s = ne(false), a = ne(false), c = (m) => t && t.activate(m), h = (m) => t && t.deactivate(m), w = () => {
    t && (t.pause(), a.value = true);
  }, N = () => {
    t && (t.unpause(), a.value = false);
  };
  return Ee(Ae(() => Se(ie(n)).map((m) => {
    const T = ie(m);
    return typeof T == "string" ? T : Ne(T);
  }).filter(Fe)), (m) => {
    if (m.length) if (!t) t = tt(m, { ...u, onActivate(T) {
      s.value = true, e.onActivate && e.onActivate(T);
    }, onDeactivate(T) {
      s.value = false, e.onDeactivate && e.onDeactivate(T);
    } }), r && c();
    else {
      const T = t?.active;
      t?.updateContainerElements(m), !T && r && c();
    }
  }, { flush: "post" }), Te(() => h()), { hasFocus: s, isPaused: a, activate: c, deactivate: h, pause: w, unpause: N };
}
export {
  nt as u
};
