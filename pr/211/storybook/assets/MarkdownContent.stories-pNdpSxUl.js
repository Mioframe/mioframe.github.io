import { M as Se } from "./MDCard-C86QM2IZ.js";
import { d as Bu, c as Nu, s as Ou, y as Pe, o as Pu } from "./iframe-NLCeLsW5.js";
import { _ as $u } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./useStateLayer-DhDWCMWP.js";
import "./index-Dssnc-8d.js";
import "./preload-helper-PPVm8Dsz.js";
const $e = {};
function ju(e) {
  let u = $e[e];
  if (u) return u;
  u = $e[e] = [];
  for (let t = 0; t < 128; t++) {
    const n = String.fromCharCode(t);
    u.push(n);
  }
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    u[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  }
  return u;
}
function H(e, u) {
  typeof u != "string" && (u = H.defaultChars);
  const t = ju(u);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(n) {
    let r = "";
    for (let a = 0, s = n.length; a < s; a += 3) {
      const i = parseInt(n.slice(a + 1, a + 3), 16);
      if (i < 128) {
        r += t[i];
        continue;
      }
      if ((i & 224) === 192 && a + 3 < s) {
        const o = parseInt(n.slice(a + 4, a + 6), 16);
        if ((o & 192) === 128) {
          const c = i << 6 & 1984 | o & 63;
          c < 128 ? r += "\uFFFD\uFFFD" : r += String.fromCharCode(c), a += 3;
          continue;
        }
      }
      if ((i & 240) === 224 && a + 6 < s) {
        const o = parseInt(n.slice(a + 4, a + 6), 16), c = parseInt(n.slice(a + 7, a + 9), 16);
        if ((o & 192) === 128 && (c & 192) === 128) {
          const f = i << 12 & 61440 | o << 6 & 4032 | c & 63;
          f < 2048 || f >= 55296 && f <= 57343 ? r += "\uFFFD\uFFFD\uFFFD" : r += String.fromCharCode(f), a += 6;
          continue;
        }
      }
      if ((i & 248) === 240 && a + 9 < s) {
        const o = parseInt(n.slice(a + 4, a + 6), 16), c = parseInt(n.slice(a + 7, a + 9), 16), f = parseInt(n.slice(a + 10, a + 12), 16);
        if ((o & 192) === 128 && (c & 192) === 128 && (f & 192) === 128) {
          let l = i << 18 & 1835008 | o << 12 & 258048 | c << 6 & 4032 | f & 63;
          l < 65536 || l > 1114111 ? r += "\uFFFD\uFFFD\uFFFD\uFFFD" : (l -= 65536, r += String.fromCharCode(55296 + (l >> 10), 56320 + (l & 1023))), a += 9;
          continue;
        }
      }
      r += "\uFFFD";
    }
    return r;
  });
}
H.defaultChars = ";/?:@&=+$,#";
H.componentChars = "";
const je = {};
function Vu(e) {
  let u = je[e];
  if (u) return u;
  u = je[e] = [];
  for (let t = 0; t < 128; t++) {
    const n = String.fromCharCode(t);
    /^[0-9a-z]$/i.test(n) ? u.push(n) : u.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
  }
  for (let t = 0; t < e.length; t++) u[e.charCodeAt(t)] = e[t];
  return u;
}
function Y(e, u, t) {
  typeof u != "string" && (t = u, u = Y.defaultChars), typeof t > "u" && (t = true);
  const n = Vu(u);
  let r = "";
  for (let a = 0, s = e.length; a < s; a++) {
    const i = e.charCodeAt(a);
    if (t && i === 37 && a + 2 < s && /^[0-9a-f]{2}$/i.test(e.slice(a + 1, a + 3))) {
      r += e.slice(a, a + 3), a += 2;
      continue;
    }
    if (i < 128) {
      r += n[i];
      continue;
    }
    if (i >= 55296 && i <= 57343) {
      if (i >= 55296 && i <= 56319 && a + 1 < s) {
        const o = e.charCodeAt(a + 1);
        if (o >= 56320 && o <= 57343) {
          r += encodeURIComponent(e[a] + e[a + 1]), a++;
          continue;
        }
      }
      r += "%EF%BF%BD";
      continue;
    }
    r += encodeURIComponent(e[a]);
  }
  return r;
}
Y.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Y.componentChars = "-_.!~*'()";
function Te(e) {
  let u = "";
  return u += e.protocol || "", u += e.slashes ? "//" : "", u += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? u += "[" + e.hostname + "]" : u += e.hostname || "", u += e.port ? ":" + e.port : "", u += e.pathname || "", u += e.search || "", u += e.hash || "", u;
}
function de() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const Hu = /^([a-z0-9.+-]+:)/i, Uu = /:[0-9]*$/, Zu = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Wu = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Gu = ["{", "}", "|", "\\", "^", "`"].concat(Wu), Ku = ["'"].concat(Gu), Ve = ["%", "/", "?", ";", "#"].concat(Ku), He = ["/", "?", "#"], Ju = 255, Ue = /^[+a-z0-9A-Z_-]{0,63}$/, Qu = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Ze = { javascript: true, "javascript:": true }, We = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true };
function Re(e, u) {
  if (e && e instanceof de) return e;
  const t = new de();
  return t.parse(e, u), t;
}
de.prototype.parse = function(e, u) {
  let t, n, r, a = e;
  if (a = a.trim(), !u && e.split("#").length === 1) {
    const c = Zu.exec(a);
    if (c) return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  let s = Hu.exec(a);
  if (s && (s = s[0], t = s.toLowerCase(), this.protocol = s, a = a.substr(s.length)), (u || s || a.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = a.substr(0, 2) === "//", r && !(s && Ze[s]) && (a = a.substr(2), this.slashes = true)), !Ze[s] && (r || s && !We[s])) {
    let c = -1;
    for (let d = 0; d < He.length; d++) n = a.indexOf(He[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    let f, l;
    c === -1 ? l = a.lastIndexOf("@") : l = a.lastIndexOf("@", c), l !== -1 && (f = a.slice(0, l), a = a.slice(l + 1), this.auth = f), c = -1;
    for (let d = 0; d < Ve.length; d++) n = a.indexOf(Ve[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    c === -1 && (c = a.length), a[c - 1] === ":" && c--;
    const p = a.slice(0, c);
    a = a.slice(c), this.parseHost(p), this.hostname = this.hostname || "";
    const h = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!h) {
      const d = this.hostname.split(/\./);
      for (let b = 0, m = d.length; b < m; b++) {
        const y = d[b];
        if (y && !y.match(Ue)) {
          let g = "";
          for (let x = 0, _ = y.length; x < _; x++) y.charCodeAt(x) > 127 ? g += "x" : g += y[x];
          if (!g.match(Ue)) {
            const x = d.slice(0, b), _ = d.slice(b + 1), k = y.match(Qu);
            k && (x.push(k[1]), _.unshift(k[2])), _.length && (a = _.join(".") + a), this.hostname = x.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > Ju && (this.hostname = ""), h && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const i = a.indexOf("#");
  i !== -1 && (this.hash = a.substr(i), a = a.slice(0, i));
  const o = a.indexOf("?");
  return o !== -1 && (this.search = a.substr(o), a = a.slice(0, o)), a && (this.pathname = a), We[t] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
de.prototype.parseHost = function(e) {
  let u = Uu.exec(e);
  u && (u = u[0], u !== ":" && (this.port = u.substr(1)), e = e.substr(0, e.length - u.length)), e && (this.hostname = e);
};
const Xu = Object.freeze(Object.defineProperty({ __proto__: null, decode: H, encode: Y, format: Te, parse: Re }, Symbol.toStringTag, { value: "Module" })), iu = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, su = /[\0-\x1F\x7F-\x9F]/, Yu = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Ie = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, ou = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, cu = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, et = Object.freeze(Object.defineProperty({ __proto__: null, Any: iu, Cc: su, Cf: Yu, P: Ie, S: ou, Z: cu }, Symbol.toStringTag, { value: "Module" })), ut = new Uint16Array('\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((e) => e.charCodeAt(0))), tt = new Uint16Array("\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((e) => e.charCodeAt(0)));
var ke;
const rt = /* @__PURE__ */ new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), nt = (ke = String.fromCodePoint) !== null && ke !== void 0 ? ke : function(e) {
  let u = "";
  return e > 65535 && (e -= 65536, u += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), u += String.fromCharCode(e), u;
};
function at(e) {
  var u;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (u = rt.get(e)) !== null && u !== void 0 ? u : e;
}
var F;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(F || (F = {}));
const it = 32;
var O;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(O || (O = {}));
function we(e) {
  return e >= F.ZERO && e <= F.NINE;
}
function st(e) {
  return e >= F.UPPER_A && e <= F.UPPER_F || e >= F.LOWER_A && e <= F.LOWER_F;
}
function ot(e) {
  return e >= F.UPPER_A && e <= F.UPPER_Z || e >= F.LOWER_A && e <= F.LOWER_Z || we(e);
}
function ct(e) {
  return e === F.EQUALS || ot(e);
}
var E;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(E || (E = {}));
var L;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(L || (L = {}));
class lt {
  constructor(u, t, n) {
    this.decodeTree = u, this.emitCodePoint = t, this.errors = n, this.state = E.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = L.Strict;
  }
  startEntity(u) {
    this.decodeMode = u, this.state = E.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  write(u, t) {
    switch (this.state) {
      case E.EntityStart:
        return u.charCodeAt(t) === F.NUM ? (this.state = E.NumericStart, this.consumed += 1, this.stateNumericStart(u, t + 1)) : (this.state = E.NamedEntity, this.stateNamedEntity(u, t));
      case E.NumericStart:
        return this.stateNumericStart(u, t);
      case E.NumericDecimal:
        return this.stateNumericDecimal(u, t);
      case E.NumericHex:
        return this.stateNumericHex(u, t);
      case E.NamedEntity:
        return this.stateNamedEntity(u, t);
    }
  }
  stateNumericStart(u, t) {
    return t >= u.length ? -1 : (u.charCodeAt(t) | it) === F.LOWER_X ? (this.state = E.NumericHex, this.consumed += 1, this.stateNumericHex(u, t + 1)) : (this.state = E.NumericDecimal, this.stateNumericDecimal(u, t));
  }
  addToNumericResult(u, t, n, r) {
    if (t !== n) {
      const a = n - t;
      this.result = this.result * Math.pow(r, a) + parseInt(u.substr(t, a), r), this.consumed += a;
    }
  }
  stateNumericHex(u, t) {
    const n = t;
    for (; t < u.length; ) {
      const r = u.charCodeAt(t);
      if (we(r) || st(r)) t += 1;
      else return this.addToNumericResult(u, n, t, 16), this.emitNumericEntity(r, 3);
    }
    return this.addToNumericResult(u, n, t, 16), -1;
  }
  stateNumericDecimal(u, t) {
    const n = t;
    for (; t < u.length; ) {
      const r = u.charCodeAt(t);
      if (we(r)) t += 1;
      else return this.addToNumericResult(u, n, t, 10), this.emitNumericEntity(r, 2);
    }
    return this.addToNumericResult(u, n, t, 10), -1;
  }
  emitNumericEntity(u, t) {
    var n;
    if (this.consumed <= t) return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (u === F.SEMI) this.consumed += 1;
    else if (this.decodeMode === L.Strict) return 0;
    return this.emitCodePoint(at(this.result), this.consumed), this.errors && (u !== F.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  stateNamedEntity(u, t) {
    const { decodeTree: n } = this;
    let r = n[this.treeIndex], a = (r & O.VALUE_LENGTH) >> 14;
    for (; t < u.length; t++, this.excess++) {
      const s = u.charCodeAt(t);
      if (this.treeIndex = dt(n, r, this.treeIndex + Math.max(1, a), s), this.treeIndex < 0) return this.result === 0 || this.decodeMode === L.Attribute && (a === 0 || ct(s)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = n[this.treeIndex], a = (r & O.VALUE_LENGTH) >> 14, a !== 0) {
        if (s === F.SEMI) return this.emitNamedEntityData(this.treeIndex, a, this.consumed + this.excess);
        this.decodeMode !== L.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  emitNotTerminatedNamedEntity() {
    var u;
    const { result: t, decodeTree: n } = this, r = (n[t] & O.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(t, r, this.consumed), (u = this.errors) === null || u === void 0 || u.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  emitNamedEntityData(u, t, n) {
    const { decodeTree: r } = this;
    return this.emitCodePoint(t === 1 ? r[u] & ~O.VALUE_LENGTH : r[u + 1], n), t === 3 && this.emitCodePoint(r[u + 2], n), n;
  }
  end() {
    var u;
    switch (this.state) {
      case E.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== L.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case E.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case E.NumericHex:
        return this.emitNumericEntity(0, 3);
      case E.NumericStart:
        return (u = this.errors) === null || u === void 0 || u.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case E.EntityStart:
        return 0;
    }
  }
}
function lu(e) {
  let u = "";
  const t = new lt(e, (n) => u += nt(n));
  return function(r, a) {
    let s = 0, i = 0;
    for (; (i = r.indexOf("&", i)) >= 0; ) {
      u += r.slice(s, i), t.startEntity(a);
      const c = t.write(r, i + 1);
      if (c < 0) {
        s = i + t.end();
        break;
      }
      s = i + c, i = c === 0 ? s + 1 : s;
    }
    const o = u + r.slice(s);
    return u = "", o;
  };
}
function dt(e, u, t, n) {
  const r = (u & O.BRANCH_LENGTH) >> 7, a = u & O.JUMP_TABLE;
  if (r === 0) return a !== 0 && n === a ? t : -1;
  if (a) {
    const o = n - a;
    return o < 0 || o >= r ? -1 : e[t + o] - 1;
  }
  let s = t, i = s + r - 1;
  for (; s <= i; ) {
    const o = s + i >>> 1, c = e[o];
    if (c < n) s = o + 1;
    else if (c > n) i = o - 1;
    else return e[o + r];
  }
  return -1;
}
const du = lu(ut);
lu(tt);
function ft(e, u = L.Legacy) {
  return du(e, u);
}
function ht(e) {
  return du(e, L.Strict);
}
function pt(e) {
  return Object.prototype.toString.call(e);
}
function Me(e) {
  return pt(e) === "[object String]";
}
const bt = Object.prototype.hasOwnProperty;
function gt(e, u) {
  return bt.call(e, u);
}
function he(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    if (t) {
      if (typeof t != "object") throw new TypeError(t + "must be object");
      Object.keys(t).forEach(function(n) {
        e[n] = t[n];
      });
    }
  }), e;
}
function fu(e, u, t) {
  return [].concat(e.slice(0, u), t, e.slice(u + 1));
}
function qe(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function G(e) {
  if (e > 65535) {
    e -= 65536;
    const u = 55296 + (e >> 10), t = 56320 + (e & 1023);
    return String.fromCharCode(u, t);
  }
  return String.fromCharCode(e);
}
const hu = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, mt = /&([a-z#][a-z0-9]{1,31});/gi, xt = new RegExp(hu.source + "|" + mt.source, "gi"), _t = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function kt(e, u) {
  if (u.charCodeAt(0) === 35 && _t.test(u)) {
    const n = u[1].toLowerCase() === "x" ? parseInt(u.slice(2), 16) : parseInt(u.slice(1), 10);
    return qe(n) ? G(n) : e;
  }
  const t = ft(e);
  return t !== e ? t : e;
}
function yt(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(hu, "$1");
}
function U(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(xt, function(u, t, n) {
    return t || kt(u, n);
  });
}
const Ct = /[&<>"]/, At = /[&<>"]/g, Dt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
function Et(e) {
  return Dt[e];
}
function P(e) {
  return Ct.test(e) ? e.replace(At, Et) : e;
}
const Ft = /[.?*+^$[\]\\(){}|-]/g;
function wt(e) {
  return e.replace(Ft, "\\$&");
}
function A(e) {
  switch (e) {
    case 9:
    case 32:
      return true;
  }
  return false;
}
function K(e) {
  if (e >= 8192 && e <= 8202) return true;
  switch (e) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return true;
  }
  return false;
}
function pu(e) {
  return Ie.test(e) || ou.test(e);
}
function J(e) {
  return pu(G(e));
}
function Q(e) {
  switch (e) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
function pe(e) {
  return e = e.trim().replace(/\s+/g, " "), "\u1E9E".toLowerCase() === "\u1E7E" && (e = e.replace(/ẞ/g, "\xDF")), e.toLowerCase().toUpperCase();
}
function Ge(e) {
  return e === 32 || e === 9 || e === 10 || e === 13;
}
function be(e) {
  let u = 0;
  for (; u < e.length && Ge(e.charCodeAt(u)); u++) ;
  let t = e.length - 1;
  for (; t >= u && Ge(e.charCodeAt(t)); t--) ;
  return e.slice(u, t + 1);
}
const vt = { mdurl: Xu, ucmicro: et }, St = Object.freeze(Object.defineProperty({ __proto__: null, arrayReplaceAt: fu, asciiTrim: be, assign: he, escapeHtml: P, escapeRE: wt, fromCodePoint: G, has: gt, isMdAsciiPunct: Q, isPunctChar: pu, isPunctCharCode: J, isSpace: A, isString: Me, isValidEntityCode: qe, isWhiteSpace: K, lib: vt, normalizeReference: pe, unescapeAll: U, unescapeMd: yt }, Symbol.toStringTag, { value: "Module" }));
function Tt(e, u, t) {
  let n, r, a, s;
  const i = e.posMax, o = e.pos;
  for (e.pos = u + 1, n = 1; e.pos < i; ) {
    if (a = e.src.charCodeAt(e.pos), a === 93 && (n--, n === 0)) {
      r = true;
      break;
    }
    if (s = e.pos, e.md.inline.skipToken(e), a === 91) {
      if (s === e.pos - 1) n++;
      else if (t) return e.pos = o, -1;
    }
  }
  let c = -1;
  return r && (c = e.pos), e.pos = o, c;
}
function Rt(e, u, t) {
  let n, r = u;
  const a = { ok: false, pos: 0, str: "" };
  if (e.charCodeAt(r) === 60) {
    for (r++; r < t; ) {
      if (n = e.charCodeAt(r), n === 10 || n === 60) return a;
      if (n === 62) return a.pos = r + 1, a.str = U(e.slice(u + 1, r)), a.ok = true, a;
      if (n === 92 && r + 1 < t) {
        r += 2;
        continue;
      }
      r++;
    }
    return a;
  }
  let s = 0;
  for (; r < t && (n = e.charCodeAt(r), !(n === 32 || n < 32 || n === 127)); ) {
    if (n === 92 && r + 1 < t) {
      if (e.charCodeAt(r + 1) === 32) break;
      r += 2;
      continue;
    }
    if (n === 40 && (s++, s > 32)) return a;
    if (n === 41) {
      if (s === 0) break;
      s--;
    }
    r++;
  }
  return u === r || s !== 0 || (a.str = U(e.slice(u, r)), a.pos = r, a.ok = true), a;
}
function It(e, u, t, n) {
  let r, a = u;
  const s = { ok: false, can_continue: false, pos: 0, str: "", marker: 0 };
  if (n) s.str = n.str, s.marker = n.marker;
  else {
    if (a >= t) return s;
    let i = e.charCodeAt(a);
    if (i !== 34 && i !== 39 && i !== 40) return s;
    u++, a++, i === 40 && (i = 41), s.marker = i;
  }
  for (; a < t; ) {
    if (r = e.charCodeAt(a), r === s.marker) return s.pos = a + 1, s.str += U(e.slice(u, a)), s.ok = true, s;
    if (r === 40 && s.marker === 41) return s;
    r === 92 && a + 1 < t && a++, a++;
  }
  return s.can_continue = true, s.str += U(e.slice(u, a)), s;
}
const Mt = Object.freeze(Object.defineProperty({ __proto__: null, parseLinkDestination: Rt, parseLinkLabel: Tt, parseLinkTitle: It }, Symbol.toStringTag, { value: "Module" })), q = {};
q.code_inline = function(e, u, t, n, r) {
  const a = e[u];
  return "<code" + r.renderAttrs(a) + ">" + P(a.content) + "</code>";
};
q.code_block = function(e, u, t, n, r) {
  const a = e[u];
  return "<pre" + r.renderAttrs(a) + "><code>" + P(e[u].content) + `</code></pre>
`;
};
q.fence = function(e, u, t, n, r) {
  const a = e[u], s = a.info ? U(a.info).trim() : "";
  let i = "", o = "";
  if (s) {
    const f = s.split(/(\s+)/g);
    i = f[0], o = f.slice(2).join("");
  }
  let c;
  if (t.highlight ? c = t.highlight(a.content, i, o) || P(a.content) : c = P(a.content), c.indexOf("<pre") === 0) return c + `
`;
  if (s) {
    const f = a.attrIndex("class"), l = a.attrs ? a.attrs.slice() : [];
    f < 0 ? l.push(["class", t.langPrefix + i]) : (l[f] = l[f].slice(), l[f][1] += " " + t.langPrefix + i);
    const p = { attrs: l };
    return `<pre><code${r.renderAttrs(p)}>${c}</code></pre>
`;
  }
  return `<pre><code${r.renderAttrs(a)}>${c}</code></pre>
`;
};
q.image = function(e, u, t, n, r) {
  const a = e[u];
  return a.attrs[a.attrIndex("alt")][1] = r.renderInlineAsText(a.children, t, n), r.renderToken(e, u, t);
};
q.hardbreak = function(e, u, t) {
  return t.xhtmlOut ? `<br />
` : `<br>
`;
};
q.softbreak = function(e, u, t) {
  return t.breaks ? t.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
q.text = function(e, u) {
  return P(e[u].content);
};
q.html_block = function(e, u) {
  return e[u].content;
};
q.html_inline = function(e, u) {
  return e[u].content;
};
function Z() {
  this.rules = he({}, q);
}
Z.prototype.renderAttrs = function(u) {
  let t, n, r;
  if (!u.attrs) return "";
  for (r = "", t = 0, n = u.attrs.length; t < n; t++) r += " " + P(u.attrs[t][0]) + '="' + P(u.attrs[t][1]) + '"';
  return r;
};
Z.prototype.renderToken = function(u, t, n) {
  const r = u[t];
  let a = "";
  if (r.hidden) return "";
  r.block && r.nesting !== -1 && t && u[t - 1].hidden && (a += `
`), a += (r.nesting === -1 ? "</" : "<") + r.tag, a += this.renderAttrs(r), r.nesting === 0 && n.xhtmlOut && (a += " /");
  let s = false;
  if (r.block && (s = true, r.nesting === 1 && t + 1 < u.length)) {
    const i = u[t + 1];
    (i.type === "inline" || i.hidden || i.nesting === -1 && i.tag === r.tag) && (s = false);
  }
  return a += s ? `>
` : ">", a;
};
Z.prototype.renderInline = function(e, u, t) {
  let n = "";
  const r = this.rules;
  for (let a = 0, s = e.length; a < s; a++) {
    const i = e[a].type;
    typeof r[i] < "u" ? n += r[i](e, a, u, t, this) : n += this.renderToken(e, a, u);
  }
  return n;
};
Z.prototype.renderInlineAsText = function(e, u, t) {
  let n = "";
  for (let r = 0, a = e.length; r < a; r++) switch (e[r].type) {
    case "text":
      n += e[r].content;
      break;
    case "image":
      n += this.renderInlineAsText(e[r].children, u, t);
      break;
    case "html_inline":
    case "html_block":
      n += e[r].content;
      break;
    case "softbreak":
    case "hardbreak":
      n += `
`;
      break;
  }
  return n;
};
Z.prototype.render = function(e, u, t) {
  let n = "";
  const r = this.rules;
  for (let a = 0, s = e.length; a < s; a++) {
    const i = e[a].type;
    i === "inline" ? n += this.renderInline(e[a].children, u, t) : typeof r[i] < "u" ? n += r[i](e, a, u, t, this) : n += this.renderToken(e, a, u, t);
  }
  return n;
};
function w() {
  this.__rules__ = [], this.__cache__ = null;
}
w.prototype.__find__ = function(e) {
  for (let u = 0; u < this.__rules__.length; u++) if (this.__rules__[u].name === e) return u;
  return -1;
};
w.prototype.__compile__ = function() {
  const e = this, u = [""];
  e.__rules__.forEach(function(t) {
    t.enabled && t.alt.forEach(function(n) {
      u.indexOf(n) < 0 && u.push(n);
    });
  }), e.__cache__ = {}, u.forEach(function(t) {
    e.__cache__[t] = [], e.__rules__.forEach(function(n) {
      n.enabled && (t && n.alt.indexOf(t) < 0 || e.__cache__[t].push(n.fn));
    });
  });
};
w.prototype.at = function(e, u, t) {
  const n = this.__find__(e), r = t || {};
  if (n === -1) throw new Error("Parser rule not found: " + e);
  this.__rules__[n].fn = u, this.__rules__[n].alt = r.alt || [], this.__cache__ = null;
};
w.prototype.before = function(e, u, t, n) {
  const r = this.__find__(e), a = n || {};
  if (r === -1) throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r, 0, { name: u, enabled: true, fn: t, alt: a.alt || [] }), this.__cache__ = null;
};
w.prototype.after = function(e, u, t, n) {
  const r = this.__find__(e), a = n || {};
  if (r === -1) throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r + 1, 0, { name: u, enabled: true, fn: t, alt: a.alt || [] }), this.__cache__ = null;
};
w.prototype.push = function(e, u, t) {
  const n = t || {};
  this.__rules__.push({ name: e, enabled: true, fn: u, alt: n.alt || [] }), this.__cache__ = null;
};
w.prototype.enable = function(e, u) {
  Array.isArray(e) || (e = [e]);
  const t = [];
  return e.forEach(function(n) {
    const r = this.__find__(n);
    if (r < 0) {
      if (u) return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[r].enabled = true, t.push(n);
  }, this), this.__cache__ = null, t;
};
w.prototype.enableOnly = function(e, u) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(t) {
    t.enabled = false;
  }), this.enable(e, u);
};
w.prototype.disable = function(e, u) {
  Array.isArray(e) || (e = [e]);
  const t = [];
  return e.forEach(function(n) {
    const r = this.__find__(n);
    if (r < 0) {
      if (u) return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[r].enabled = false, t.push(n);
  }, this), this.__cache__ = null, t;
};
w.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function R(e, u, t) {
  this.type = e, this.tag = u, this.attrs = null, this.map = null, this.nesting = t, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = false, this.hidden = false;
}
R.prototype.attrIndex = function(u) {
  if (!this.attrs) return -1;
  const t = this.attrs;
  for (let n = 0, r = t.length; n < r; n++) if (t[n][0] === u) return n;
  return -1;
};
R.prototype.attrPush = function(u) {
  this.attrs ? this.attrs.push(u) : this.attrs = [u];
};
R.prototype.attrSet = function(u, t) {
  const n = this.attrIndex(u), r = [u, t];
  n < 0 ? this.attrPush(r) : this.attrs[n] = r;
};
R.prototype.attrGet = function(u) {
  const t = this.attrIndex(u);
  let n = null;
  return t >= 0 && (n = this.attrs[t][1]), n;
};
R.prototype.attrJoin = function(u, t) {
  const n = this.attrIndex(u);
  n < 0 ? this.attrPush([u, t]) : this.attrs[n][1] = this.attrs[n][1] + " " + t;
};
function bu(e, u, t) {
  this.src = e, this.env = t, this.tokens = [], this.inlineMode = false, this.md = u;
}
bu.prototype.Token = R;
const qt = /\r\n?|\n/g, zt = /\0/g;
function Lt(e) {
  let u;
  u = e.src.replace(qt, `
`), u = u.replace(zt, "\uFFFD"), e.src = u;
}
function Bt(e) {
  let u;
  e.inlineMode ? (u = new e.Token("inline", "", 0), u.content = e.src, u.map = [0, 1], u.children = [], e.tokens.push(u)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function Nt(e) {
  const u = e.tokens;
  for (let t = 0, n = u.length; t < n; t++) {
    const r = u[t];
    r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
  }
}
function Ot(e) {
  return /^<a[>\s]/i.test(e);
}
function Pt(e) {
  return /^<\/a\s*>/i.test(e);
}
function $t(e) {
  const u = e.tokens;
  if (e.md.options.linkify) for (let t = 0, n = u.length; t < n; t++) {
    if (u[t].type !== "inline" || !e.md.linkify.pretest(u[t].content)) continue;
    let r = u[t].children, a = 0;
    for (let s = r.length - 1; s >= 0; s--) {
      const i = r[s];
      if (i.type === "link_close") {
        for (s--; r[s].level !== i.level && r[s].type !== "link_open"; ) s--;
        continue;
      }
      if (i.type === "html_inline" && (Ot(i.content) && a > 0 && a--, Pt(i.content) && a++), !(a > 0) && i.type === "text" && e.md.linkify.test(i.content)) {
        const o = i.content;
        let c = e.md.linkify.match(o);
        const f = [];
        let l = i.level, p = 0;
        c.length > 0 && c[0].index === 0 && s > 0 && r[s - 1].type === "text_special" && (c = c.slice(1));
        for (let h = 0; h < c.length; h++) {
          const d = c[h].url, b = e.md.normalizeLink(d);
          if (!e.md.validateLink(b)) continue;
          let m = c[h].text;
          c[h].schema ? c[h].schema === "mailto:" && !/^mailto:/i.test(m) ? m = e.md.normalizeLinkText("mailto:" + m).replace(/^mailto:/, "") : m = e.md.normalizeLinkText(m) : m = e.md.normalizeLinkText("http://" + m).replace(/^http:\/\//, "");
          const y = c[h].index;
          if (y > p) {
            const k = new e.Token("text", "", 0);
            k.content = o.slice(p, y), k.level = l, f.push(k);
          }
          const g = new e.Token("link_open", "a", 1);
          g.attrs = [["href", b]], g.level = l++, g.markup = "linkify", g.info = "auto", f.push(g);
          const x = new e.Token("text", "", 0);
          x.content = m, x.level = l, f.push(x);
          const _ = new e.Token("link_close", "a", -1);
          _.level = --l, _.markup = "linkify", _.info = "auto", f.push(_), p = c[h].lastIndex;
        }
        if (p < o.length) {
          const h = new e.Token("text", "", 0);
          h.content = o.slice(p), h.level = l, f.push(h);
        }
        u[t].children = r = fu(r, s, f);
      }
    }
  }
}
const gu = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, jt = /\((c|tm|r)\)/i, Vt = /\((c|tm|r)\)/ig, Ht = { c: "\xA9", r: "\xAE", tm: "\u2122" };
function Ut(e, u) {
  return Ht[u.toLowerCase()];
}
function Zt(e) {
  let u = 0;
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    n.type === "text" && !u && (n.content = n.content.replace(Vt, Ut)), n.type === "link_open" && n.info === "auto" && u--, n.type === "link_close" && n.info === "auto" && u++;
  }
}
function Wt(e) {
  let u = 0;
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    n.type === "text" && !u && gu.test(n.content) && (n.content = n.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013")), n.type === "link_open" && n.info === "auto" && u--, n.type === "link_close" && n.info === "auto" && u++;
  }
}
function Gt(e) {
  let u;
  if (e.md.options.typographer) for (u = e.tokens.length - 1; u >= 0; u--) e.tokens[u].type === "inline" && (jt.test(e.tokens[u].content) && Zt(e.tokens[u].children), gu.test(e.tokens[u].content) && Wt(e.tokens[u].children));
}
const Kt = /['"]/, Ke = /['"]/g, Je = "\u2019";
function te(e, u, t, n) {
  e[u] || (e[u] = []), e[u].push({ pos: t, ch: n });
}
function Jt(e, u) {
  let t = "", n = 0;
  u.sort((r, a) => r.pos - a.pos);
  for (let r = 0; r < u.length; r++) {
    const a = u[r];
    t += e.slice(n, a.pos) + a.ch, n = a.pos + 1;
  }
  return t + e.slice(n);
}
function Qt(e, u) {
  let t;
  const n = [], r = {};
  for (let a = 0; a < e.length; a++) {
    const s = e[a], i = e[a].level;
    for (t = n.length - 1; t >= 0 && !(n[t].level <= i); t--) ;
    if (n.length = t + 1, s.type !== "text") continue;
    const o = s.content;
    let c = 0;
    const f = o.length;
    e: for (; c < f; ) {
      Ke.lastIndex = c;
      const l = Ke.exec(o);
      if (!l) break;
      let p = true, h = true;
      c = l.index + 1;
      const d = l[0] === "'";
      let b = 32;
      if (l.index - 1 >= 0) b = o.charCodeAt(l.index - 1);
      else for (t = a - 1; t >= 0 && !(e[t].type === "softbreak" || e[t].type === "hardbreak"); t--) if (e[t].content) {
        b = e[t].content.charCodeAt(e[t].content.length - 1);
        break;
      }
      let m = 32;
      if (c < f) m = o.charCodeAt(c);
      else for (t = a + 1; t < e.length && !(e[t].type === "softbreak" || e[t].type === "hardbreak"); t++) if (e[t].content) {
        m = e[t].content.charCodeAt(0);
        break;
      }
      const y = Q(b) || J(b), g = Q(m) || J(m), x = K(b), _ = K(m);
      if (_ ? p = false : g && (x || y || (p = false)), x ? h = false : y && (_ || g || (h = false)), m === 34 && l[0] === '"' && b >= 48 && b <= 57 && (h = p = false), p && h && (p = y, h = g), !p && !h) {
        d && te(r, a, l.index, Je);
        continue;
      }
      if (h) for (t = n.length - 1; t >= 0; t--) {
        let k = n[t];
        if (n[t].level < i) break;
        if (k.single === d && n[t].level === i) {
          k = n[t];
          let C, D;
          d ? (C = u.md.options.quotes[2], D = u.md.options.quotes[3]) : (C = u.md.options.quotes[0], D = u.md.options.quotes[1]), te(r, a, l.index, D), te(r, k.token, k.pos, C), n.length = t;
          continue e;
        }
      }
      p ? n.push({ token: a, pos: l.index, single: d, level: i }) : h && d && te(r, a, l.index, Je);
    }
  }
  Object.keys(r).forEach(function(a) {
    e[a].content = Jt(e[a].content, r[a]);
  });
}
function Xt(e) {
  if (e.md.options.typographer) for (let u = e.tokens.length - 1; u >= 0; u--) e.tokens[u].type !== "inline" || !Kt.test(e.tokens[u].content) || Qt(e.tokens[u].children, e);
}
function Yt(e) {
  let u, t;
  const n = e.tokens, r = n.length;
  for (let a = 0; a < r; a++) {
    if (n[a].type !== "inline") continue;
    const s = n[a].children, i = s.length;
    for (u = 0; u < i; u++) s[u].type === "text_special" && (s[u].type = "text");
    for (u = t = 0; u < i; u++) s[u].type === "text" && u + 1 < i && s[u + 1].type === "text" ? s[u + 1].content = s[u].content + s[u + 1].content : (u !== t && (s[t] = s[u]), t++);
    u !== t && (s.length = t);
  }
}
const ye = [["normalize", Lt], ["block", Bt], ["inline", Nt], ["linkify", $t], ["replacements", Gt], ["smartquotes", Xt], ["text_join", Yt]];
function ze() {
  this.ruler = new w();
  for (let e = 0; e < ye.length; e++) this.ruler.push(ye[e][0], ye[e][1]);
}
ze.prototype.process = function(e) {
  const u = this.ruler.getRules("");
  for (let t = 0, n = u.length; t < n; t++) u[t](e);
};
ze.prototype.State = bu;
function z(e, u, t, n) {
  this.src = e, this.md = u, this.env = t, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = false, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let a = 0, s = 0, i = 0, o = 0, c = r.length, f = false; s < c; s++) {
    const l = r.charCodeAt(s);
    if (!f) if (A(l)) {
      i++, l === 9 ? o += 4 - o % 4 : o++;
      continue;
    } else f = true;
    (l === 10 || s === c - 1) && (l !== 10 && s++, this.bMarks.push(a), this.eMarks.push(s), this.tShift.push(i), this.sCount.push(o), this.bsCount.push(0), f = false, i = 0, o = 0, a = s + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
z.prototype.push = function(e, u, t) {
  const n = new R(e, u, t);
  return n.block = true, t < 0 && this.level--, n.level = this.level, t > 0 && this.level++, this.tokens.push(n), n;
};
z.prototype.isEmpty = function(u) {
  return this.bMarks[u] + this.tShift[u] >= this.eMarks[u];
};
z.prototype.skipEmptyLines = function(u) {
  for (let t = this.lineMax; u < t && !(this.bMarks[u] + this.tShift[u] < this.eMarks[u]); u++) ;
  return u;
};
z.prototype.skipSpaces = function(u) {
  for (let t = this.src.length; u < t; u++) {
    const n = this.src.charCodeAt(u);
    if (!A(n)) break;
  }
  return u;
};
z.prototype.skipSpacesBack = function(u, t) {
  if (u <= t) return u;
  for (; u > t; ) if (!A(this.src.charCodeAt(--u))) return u + 1;
  return u;
};
z.prototype.skipChars = function(u, t) {
  for (let n = this.src.length; u < n && this.src.charCodeAt(u) === t; u++) ;
  return u;
};
z.prototype.skipCharsBack = function(u, t, n) {
  if (u <= n) return u;
  for (; u > n; ) if (t !== this.src.charCodeAt(--u)) return u + 1;
  return u;
};
z.prototype.getLines = function(u, t, n, r) {
  if (u >= t) return "";
  const a = new Array(t - u);
  for (let s = 0, i = u; i < t; i++, s++) {
    let o = 0;
    const c = this.bMarks[i];
    let f = c, l;
    for (i + 1 < t || r ? l = this.eMarks[i] + 1 : l = this.eMarks[i]; f < l && o < n; ) {
      const p = this.src.charCodeAt(f);
      if (A(p)) p === 9 ? o += 4 - (o + this.bsCount[i]) % 4 : o++;
      else if (f - c < this.tShift[i]) o++;
      else break;
      f++;
    }
    o > n ? a[s] = new Array(o - n + 1).join(" ") + this.src.slice(f, l) : a[s] = this.src.slice(f, l);
  }
  return a.join("");
};
z.prototype.Token = R;
const er = 65536;
function Ce(e, u) {
  const t = e.bMarks[u] + e.tShift[u], n = e.eMarks[u];
  return e.src.slice(t, n);
}
function Qe(e) {
  const u = [], t = e.length;
  let n = 0, r = e.charCodeAt(n), a = false, s = 0, i = "";
  for (; n < t; ) r === 124 && (a ? (i += e.substring(s, n - 1), s = n) : (u.push(i + e.substring(s, n)), i = "", s = n + 1)), a = r === 92, n++, r = e.charCodeAt(n);
  return u.push(i + e.substring(s)), u;
}
function ur(e, u, t, n) {
  if (u + 2 > t) return false;
  let r = u + 1;
  if (e.sCount[r] < e.blkIndent || e.sCount[r] - e.blkIndent >= 4) return false;
  let a = e.bMarks[r] + e.tShift[r];
  if (a >= e.eMarks[r]) return false;
  const s = e.src.charCodeAt(a++);
  if (s !== 124 && s !== 45 && s !== 58 || a >= e.eMarks[r]) return false;
  const i = e.src.charCodeAt(a++);
  if (i !== 124 && i !== 45 && i !== 58 && !A(i) || s === 45 && A(i)) return false;
  for (; a < e.eMarks[r]; ) {
    const _ = e.src.charCodeAt(a);
    if (_ !== 124 && _ !== 45 && _ !== 58 && !A(_)) return false;
    a++;
  }
  let o = Ce(e, u + 1), c = o.split("|");
  const f = [];
  for (let _ = 0; _ < c.length; _++) {
    const k = c[_].trim();
    if (!k) {
      if (_ === 0 || _ === c.length - 1) continue;
      return false;
    }
    if (!/^:?-+:?$/.test(k)) return false;
    k.charCodeAt(k.length - 1) === 58 ? f.push(k.charCodeAt(0) === 58 ? "center" : "right") : k.charCodeAt(0) === 58 ? f.push("left") : f.push("");
  }
  if (o = Ce(e, u).trim(), o.indexOf("|") === -1 || e.sCount[u] - e.blkIndent >= 4) return false;
  c = Qe(o), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop();
  const l = c.length;
  if (l === 0 || l !== f.length) return false;
  if (n) return true;
  const p = e.parentType;
  e.parentType = "table";
  const h = e.md.block.ruler.getRules("blockquote"), d = e.push("table_open", "table", 1), b = [u, 0];
  d.map = b;
  const m = e.push("thead_open", "thead", 1);
  m.map = [u, u + 1];
  const y = e.push("tr_open", "tr", 1);
  y.map = [u, u + 1];
  for (let _ = 0; _ < c.length; _++) {
    const k = e.push("th_open", "th", 1);
    f[_] && (k.attrs = [["style", "text-align:" + f[_]]]);
    const C = e.push("inline", "", 0);
    C.content = c[_].trim(), C.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let g, x = 0;
  for (r = u + 2; r < t && !(e.sCount[r] < e.blkIndent); r++) {
    let _ = false;
    for (let C = 0, D = h.length; C < D; C++) if (h[C](e, r, t, true)) {
      _ = true;
      break;
    }
    if (_ || (o = Ce(e, r).trim(), !o) || e.sCount[r] - e.blkIndent >= 4 || (c = Qe(o), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop(), x += l - c.length, x > er)) break;
    if (r === u + 2) {
      const C = e.push("tbody_open", "tbody", 1);
      C.map = g = [u + 2, 0];
    }
    const k = e.push("tr_open", "tr", 1);
    k.map = [r, r + 1];
    for (let C = 0; C < l; C++) {
      const D = e.push("td_open", "td", 1);
      f[C] && (D.attrs = [["style", "text-align:" + f[C]]]);
      const T = e.push("inline", "", 0);
      T.content = c[C] ? c[C].trim() : "", T.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return g && (e.push("tbody_close", "tbody", -1), g[1] = r), e.push("table_close", "table", -1), b[1] = r, e.parentType = p, e.line = r, true;
}
function tr(e, u, t) {
  if (e.sCount[u] - e.blkIndent < 4) return false;
  let n = u + 1, r = n;
  for (; n < t; ) {
    if (e.isEmpty(n)) {
      n++;
      continue;
    }
    if (e.sCount[n] - e.blkIndent >= 4) {
      n++, r = n;
      continue;
    }
    break;
  }
  e.line = r;
  const a = e.push("code_block", "code", 0);
  return a.content = e.getLines(u, r, 4 + e.blkIndent, false) + `
`, a.map = [u, e.line], true;
}
function rr(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], a = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4 || r + 3 > a) return false;
  const s = e.src.charCodeAt(r);
  if (s !== 126 && s !== 96) return false;
  let i = r;
  r = e.skipChars(r, s);
  let o = r - i;
  if (o < 3) return false;
  const c = e.src.slice(i, r), f = e.src.slice(r, a);
  if (s === 96 && f.indexOf(String.fromCharCode(s)) >= 0) return false;
  if (n) return true;
  let l = u, p = false;
  for (; l++, !(l >= t || (r = i = e.bMarks[l] + e.tShift[l], a = e.eMarks[l], r < a && e.sCount[l] < e.blkIndent)); ) if (e.src.charCodeAt(r) === s && !(e.sCount[l] - e.blkIndent >= 4) && (r = e.skipChars(r, s), !(r - i < o) && (r = e.skipSpaces(r), !(r < a)))) {
    p = true;
    break;
  }
  o = e.sCount[u], e.line = l + (p ? 1 : 0);
  const h = e.push("fence", "code", 0);
  return h.info = f, h.content = e.getLines(u + 1, l, o, true), h.markup = c, h.map = [u, e.line], true;
}
function nr(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], a = e.eMarks[u];
  const s = e.lineMax;
  if (e.sCount[u] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 62) return false;
  if (n) return true;
  const i = [], o = [], c = [], f = [], l = e.md.block.ruler.getRules("blockquote"), p = e.parentType;
  e.parentType = "blockquote";
  let h = false, d;
  for (d = u; d < t; d++) {
    const x = e.sCount[d] < e.blkIndent;
    if (r = e.bMarks[d] + e.tShift[d], a = e.eMarks[d], r >= a) break;
    if (e.src.charCodeAt(r++) === 62 && !x) {
      let k = e.sCount[d] + 1, C, D;
      e.src.charCodeAt(r) === 32 ? (r++, k++, D = false, C = true) : e.src.charCodeAt(r) === 9 ? (C = true, (e.bsCount[d] + k) % 4 === 3 ? (r++, k++, D = false) : D = true) : C = false;
      let T = k;
      for (i.push(e.bMarks[d]), e.bMarks[d] = r; r < a; ) {
        const B = e.src.charCodeAt(r);
        if (A(B)) B === 9 ? T += 4 - (T + e.bsCount[d] + (D ? 1 : 0)) % 4 : T++;
        else break;
        r++;
      }
      h = r >= a, o.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (C ? 1 : 0), c.push(e.sCount[d]), e.sCount[d] = T - k, f.push(e.tShift[d]), e.tShift[d] = r - e.bMarks[d];
      continue;
    }
    if (h) break;
    let _ = false;
    for (let k = 0, C = l.length; k < C; k++) if (l[k](e, d, t, true)) {
      _ = true;
      break;
    }
    if (_) {
      e.lineMax = d, e.blkIndent !== 0 && (i.push(e.bMarks[d]), o.push(e.bsCount[d]), f.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] -= e.blkIndent);
      break;
    }
    i.push(e.bMarks[d]), o.push(e.bsCount[d]), f.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] = -1;
  }
  const b = e.blkIndent;
  e.blkIndent = 0;
  const m = e.push("blockquote_open", "blockquote", 1);
  m.markup = ">";
  const y = [u, 0];
  m.map = y, e.md.block.tokenize(e, u, d);
  const g = e.push("blockquote_close", "blockquote", -1);
  g.markup = ">", e.lineMax = s, e.parentType = p, y[1] = e.line;
  for (let x = 0; x < f.length; x++) e.bMarks[x + u] = i[x], e.tShift[x + u] = f[x], e.sCount[x + u] = c[x], e.bsCount[x + u] = o[x];
  return e.blkIndent = b, true;
}
function ar(e, u, t, n) {
  const r = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4) return false;
  let a = e.bMarks[u] + e.tShift[u];
  const s = e.src.charCodeAt(a++);
  if (s !== 42 && s !== 45 && s !== 95) return false;
  let i = 1;
  for (; a < r; ) {
    const c = e.src.charCodeAt(a++);
    if (c !== s && !A(c)) return false;
    c === s && i++;
  }
  if (i < 3) return false;
  if (n) return true;
  e.line = u + 1;
  const o = e.push("hr", "hr", 0);
  return o.map = [u, e.line], o.markup = Array(i + 1).join(String.fromCharCode(s)), true;
}
function Xe(e, u) {
  const t = e.eMarks[u];
  let n = e.bMarks[u] + e.tShift[u];
  const r = e.src.charCodeAt(n++);
  if (r !== 42 && r !== 45 && r !== 43) return -1;
  if (n < t) {
    const a = e.src.charCodeAt(n);
    if (!A(a)) return -1;
  }
  return n;
}
function Ye(e, u) {
  const t = e.bMarks[u] + e.tShift[u], n = e.eMarks[u];
  let r = t;
  if (r + 1 >= n) return -1;
  let a = e.src.charCodeAt(r++);
  if (a < 48 || a > 57) return -1;
  for (; ; ) {
    if (r >= n) return -1;
    if (a = e.src.charCodeAt(r++), a >= 48 && a <= 57) {
      if (r - t >= 10) return -1;
      continue;
    }
    if (a === 41 || a === 46) break;
    return -1;
  }
  return r < n && (a = e.src.charCodeAt(r), !A(a)) ? -1 : r;
}
function ir(e, u) {
  const t = e.level + 2;
  for (let n = u + 2, r = e.tokens.length - 2; n < r; n++) e.tokens[n].level === t && e.tokens[n].type === "paragraph_open" && (e.tokens[n + 2].hidden = true, e.tokens[n].hidden = true, n += 2);
}
function sr(e, u, t, n) {
  let r, a, s, i, o = u, c = true;
  if (e.sCount[o] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[o] - e.listIndent >= 4 && e.sCount[o] < e.blkIndent) return false;
  let f = false;
  n && e.parentType === "paragraph" && e.sCount[o] >= e.blkIndent && (f = true);
  let l, p, h;
  if ((h = Ye(e, o)) >= 0) {
    if (l = true, s = e.bMarks[o] + e.tShift[o], p = Number(e.src.slice(s, h - 1)), f && p !== 1) return false;
  } else if ((h = Xe(e, o)) >= 0) l = false;
  else return false;
  if (f && e.skipSpaces(h) >= e.eMarks[o]) return false;
  if (n) return true;
  const d = e.src.charCodeAt(h - 1), b = e.tokens.length;
  l ? (i = e.push("ordered_list_open", "ol", 1), p !== 1 && (i.attrs = [["start", p]])) : i = e.push("bullet_list_open", "ul", 1);
  const m = [o, 0];
  i.map = m, i.markup = String.fromCharCode(d);
  let y = false;
  const g = e.md.block.ruler.getRules("list"), x = e.parentType;
  for (e.parentType = "list"; o < t; ) {
    a = h, r = e.eMarks[o];
    const _ = e.sCount[o] + h - (e.bMarks[o] + e.tShift[o]);
    let k = _;
    for (; a < r; ) {
      const j = e.src.charCodeAt(a);
      if (j === 9) k += 4 - (k + e.bsCount[o]) % 4;
      else if (j === 32) k++;
      else break;
      a++;
    }
    const C = a;
    let D;
    C >= r ? D = 1 : D = k - _, D > 4 && (D = 1);
    const T = _ + D;
    i = e.push("list_item_open", "li", 1), i.markup = String.fromCharCode(d);
    const B = [o, 0];
    i.map = B, l && (i.info = e.src.slice(s, h - 1));
    const W = e.tight, _e = e.tShift[o], qu = e.sCount[o], zu = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = T, e.tight = true, e.tShift[o] = C - e.bMarks[o], e.sCount[o] = k, C >= r && e.isEmpty(o + 1) ? e.line = Math.min(e.line + 2, t) : e.md.block.tokenize(e, o, t, true), (!e.tight || y) && (c = false), y = e.line - o > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = zu, e.tShift[o] = _e, e.sCount[o] = qu, e.tight = W, i = e.push("list_item_close", "li", -1), i.markup = String.fromCharCode(d), o = e.line, B[1] = o, o >= t || e.sCount[o] < e.blkIndent || e.sCount[o] - e.blkIndent >= 4) break;
    let Oe = false;
    for (let j = 0, Lu = g.length; j < Lu; j++) if (g[j](e, o, t, true)) {
      Oe = true;
      break;
    }
    if (Oe) break;
    if (l) {
      if (h = Ye(e, o), h < 0) break;
      s = e.bMarks[o] + e.tShift[o];
    } else if (h = Xe(e, o), h < 0) break;
    if (d !== e.src.charCodeAt(h - 1)) break;
  }
  return l ? i = e.push("ordered_list_close", "ol", -1) : i = e.push("bullet_list_close", "ul", -1), i.markup = String.fromCharCode(d), m[1] = o, e.line = o, e.parentType = x, c && ir(e, b), true;
}
function or(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], a = e.eMarks[u], s = u + 1;
  if (e.sCount[u] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91) return false;
  function i(g) {
    const x = e.lineMax;
    if (g >= x || e.isEmpty(g)) return null;
    let _ = false;
    if (e.sCount[g] - e.blkIndent > 3 && (_ = true), e.sCount[g] < 0 && (_ = true), !_) {
      const D = e.md.block.ruler.getRules("reference"), T = e.parentType;
      e.parentType = "reference";
      let B = false;
      for (let W = 0, _e = D.length; W < _e; W++) if (D[W](e, g, x, true)) {
        B = true;
        break;
      }
      if (e.parentType = T, B) return null;
    }
    const k = e.bMarks[g] + e.tShift[g], C = e.eMarks[g];
    return e.src.slice(k, C + 1);
  }
  let o = e.src.slice(r, a + 1);
  a = o.length;
  let c = -1;
  for (r = 1; r < a; r++) {
    const g = o.charCodeAt(r);
    if (g === 91) return false;
    if (g === 93) {
      c = r;
      break;
    } else if (g === 10) {
      const x = i(s);
      x !== null && (o += x, a = o.length, s++);
    } else if (g === 92 && (r++, r < a && o.charCodeAt(r) === 10)) {
      const x = i(s);
      x !== null && (o += x, a = o.length, s++);
    }
  }
  if (c < 0 || o.charCodeAt(c + 1) !== 58) return false;
  for (r = c + 2; r < a; r++) {
    const g = o.charCodeAt(r);
    if (g === 10) {
      const x = i(s);
      x !== null && (o += x, a = o.length, s++);
    } else if (!A(g)) break;
  }
  const f = e.md.helpers.parseLinkDestination(o, r, a);
  if (!f.ok) return false;
  const l = e.md.normalizeLink(f.str);
  if (!e.md.validateLink(l)) return false;
  r = f.pos;
  const p = r, h = s, d = r;
  for (; r < a; r++) {
    const g = o.charCodeAt(r);
    if (g === 10) {
      const x = i(s);
      x !== null && (o += x, a = o.length, s++);
    } else if (!A(g)) break;
  }
  let b = e.md.helpers.parseLinkTitle(o, r, a);
  for (; b.can_continue; ) {
    const g = i(s);
    if (g === null) break;
    o += g, r = a, a = o.length, s++, b = e.md.helpers.parseLinkTitle(o, r, a, b);
  }
  let m;
  for (r < a && d !== r && b.ok ? (m = b.str, r = b.pos) : (m = "", r = p, s = h); r < a; ) {
    const g = o.charCodeAt(r);
    if (!A(g)) break;
    r++;
  }
  if (r < a && o.charCodeAt(r) !== 10 && m) for (m = "", r = p, s = h; r < a; ) {
    const g = o.charCodeAt(r);
    if (!A(g)) break;
    r++;
  }
  if (r < a && o.charCodeAt(r) !== 10) return false;
  const y = pe(o.slice(1, c));
  return y ? (n || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[y] > "u" && (e.env.references[y] = { title: m, href: l }), e.line = s), true) : false;
}
const cr = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"], lr = "[a-zA-Z_:][a-zA-Z0-9:._-]*", dr = "[^\"'=<>`\\x00-\\x20]+", fr = "'[^']*'", hr = '"[^"]*"', pr = "(?:" + dr + "|" + fr + "|" + hr + ")", br = "(?:\\s+" + lr + "(?:\\s*=\\s*" + pr + ")?)", mu = "<[A-Za-z][A-Za-z0-9\\-]*" + br + "*\\s*\\/?>", xu = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", gr = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", mr = "<[?][\\s\\S]*?[?]>", xr = "<![A-Za-z][^>]*>", _r = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", kr = new RegExp("^(?:" + mu + "|" + xu + "|" + gr + "|" + mr + "|" + xr + "|" + _r + ")"), yr = new RegExp("^(?:" + mu + "|" + xu + ")"), $ = [[/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true], [/^<!--/, /-->/, true], [/^<\?/, /\?>/, true], [/^<![A-Z]/, />/, true], [/^<!\[CDATA\[/, /\]\]>/, true], [new RegExp("^</?(" + cr.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true], [new RegExp(yr.source + "\\s*$"), /^$/, false]];
function Cr(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], a = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(r) !== 60) return false;
  let s = e.src.slice(r, a), i = 0;
  for (; i < $.length && !$[i][0].test(s); i++) ;
  if (i === $.length) return false;
  if (n) return $[i][2];
  let o = u + 1;
  const c = $[i][1].test("");
  if (!$[i][1].test(s)) {
    for (; o < t && !(e.sCount[o] < e.blkIndent && (c || !e.isEmpty(o))); o++) if (r = e.bMarks[o] + e.tShift[o], a = e.eMarks[o], s = e.src.slice(r, a), $[i][1].test(s)) {
      s.length !== 0 && o++;
      break;
    }
  }
  e.line = o;
  const f = e.push("html_block", "", 0);
  return f.map = [u, o], f.content = e.getLines(u, o, e.blkIndent, true), true;
}
function Ar(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], a = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4) return false;
  let s = e.src.charCodeAt(r);
  if (s !== 35 || r >= a) return false;
  let i = 1;
  for (s = e.src.charCodeAt(++r); s === 35 && r < a && i <= 6; ) i++, s = e.src.charCodeAt(++r);
  if (i > 6 || r < a && !A(s)) return false;
  if (n) return true;
  a = e.skipSpacesBack(a, r);
  const o = e.skipCharsBack(a, 35, r);
  o > r && A(e.src.charCodeAt(o - 1)) && (a = o), e.line = u + 1;
  const c = e.push("heading_open", "h" + String(i), 1);
  c.markup = "########".slice(0, i), c.map = [u, e.line];
  const f = e.push("inline", "", 0);
  f.content = be(e.src.slice(r, a)), f.map = [u, e.line], f.children = [];
  const l = e.push("heading_close", "h" + String(i), -1);
  return l.markup = "########".slice(0, i), true;
}
function Dr(e, u, t) {
  const n = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[u] - e.blkIndent >= 4) return false;
  const r = e.parentType;
  e.parentType = "paragraph";
  let a = 0, s, i = u + 1;
  for (; i < t && !e.isEmpty(i); i++) {
    if (e.sCount[i] - e.blkIndent > 3) continue;
    if (e.sCount[i] >= e.blkIndent) {
      let h = e.bMarks[i] + e.tShift[i];
      const d = e.eMarks[i];
      if (h < d && (s = e.src.charCodeAt(h), (s === 45 || s === 61) && (h = e.skipChars(h, s), h = e.skipSpaces(h), h >= d))) {
        a = s === 61 ? 1 : 2;
        break;
      }
    }
    if (e.sCount[i] < 0) continue;
    let p = false;
    for (let h = 0, d = n.length; h < d; h++) if (n[h](e, i, t, true)) {
      p = true;
      break;
    }
    if (p) break;
  }
  if (!a) return e.parentType = r, false;
  const o = be(e.getLines(u, i, e.blkIndent, false));
  e.line = i + 1;
  const c = e.push("heading_open", "h" + String(a), 1);
  c.markup = String.fromCharCode(s), c.map = [u, e.line];
  const f = e.push("inline", "", 0);
  f.content = o, f.map = [u, e.line - 1], f.children = [];
  const l = e.push("heading_close", "h" + String(a), -1);
  return l.markup = String.fromCharCode(s), e.parentType = r, true;
}
function Er(e, u, t) {
  const n = e.md.block.ruler.getRules("paragraph"), r = e.parentType;
  let a = u + 1;
  for (e.parentType = "paragraph"; a < t && !e.isEmpty(a); a++) {
    if (e.sCount[a] - e.blkIndent > 3 || e.sCount[a] < 0) continue;
    let c = false;
    for (let f = 0, l = n.length; f < l; f++) if (n[f](e, a, t, true)) {
      c = true;
      break;
    }
    if (c) break;
  }
  const s = be(e.getLines(u, a, e.blkIndent, false));
  e.line = a;
  const i = e.push("paragraph_open", "p", 1);
  i.map = [u, e.line];
  const o = e.push("inline", "", 0);
  return o.content = s, o.map = [u, e.line], o.children = [], e.push("paragraph_close", "p", -1), e.parentType = r, true;
}
const re = [["table", ur, ["paragraph", "reference"]], ["code", tr], ["fence", rr, ["paragraph", "reference", "blockquote", "list"]], ["blockquote", nr, ["paragraph", "reference", "blockquote", "list"]], ["hr", ar, ["paragraph", "reference", "blockquote", "list"]], ["list", sr, ["paragraph", "reference", "blockquote"]], ["reference", or], ["html_block", Cr, ["paragraph", "reference", "blockquote"]], ["heading", Ar, ["paragraph", "reference", "blockquote"]], ["lheading", Dr], ["paragraph", Er]];
function ge() {
  this.ruler = new w();
  for (let e = 0; e < re.length; e++) this.ruler.push(re[e][0], re[e][1], { alt: (re[e][2] || []).slice() });
}
ge.prototype.tokenize = function(e, u, t) {
  const n = this.ruler.getRules(""), r = n.length, a = e.md.options.maxNesting;
  let s = u, i = false;
  for (; s < t && (e.line = s = e.skipEmptyLines(s), !(s >= t || e.sCount[s] < e.blkIndent)); ) {
    if (e.level >= a) {
      e.line = t;
      break;
    }
    const o = e.line;
    let c = false;
    for (let f = 0; f < r; f++) if (c = n[f](e, s, t, false), c) {
      if (o >= e.line) throw new Error("block rule didn't increment state.line");
      break;
    }
    if (!c) throw new Error("none of the block rules matched");
    e.tight = !i, e.isEmpty(e.line - 1) && (i = true), s = e.line, s < t && e.isEmpty(s) && (i = true, s++, e.line = s);
  }
};
ge.prototype.parse = function(e, u, t, n) {
  if (!e) return;
  const r = new this.State(e, u, t, n);
  this.tokenize(r, r.line, r.lineMax);
};
ge.prototype.State = z;
function ee(e, u, t, n) {
  this.src = e, this.env = t, this.md = u, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = false, this.linkLevel = 0;
}
ee.prototype.pushPending = function() {
  const e = new R("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
ee.prototype.push = function(e, u, t) {
  this.pending && this.pushPending();
  const n = new R(e, u, t);
  let r = null;
  return t < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, t > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(r), n;
};
ee.prototype.scanDelims = function(e, u) {
  const t = this.posMax, n = this.src.charCodeAt(e);
  let r;
  if (e === 0) r = 32;
  else if (e === 1) r = this.src.charCodeAt(0), (r & 63488) === 55296 && (r = 65533);
  else if (r = this.src.charCodeAt(e - 1), (r & 64512) === 56320) {
    const m = this.src.charCodeAt(e - 2);
    r = (m & 64512) === 55296 ? 65536 + (m - 55296 << 10) + (r - 56320) : 65533;
  } else (r & 64512) === 55296 && (r = 65533);
  let a = e;
  for (; a < t && this.src.charCodeAt(a) === n; ) a++;
  const s = a - e;
  let i = a < t ? this.src.charCodeAt(a) : 32;
  if ((i & 64512) === 55296) {
    const m = this.src.charCodeAt(a + 1);
    i = (m & 64512) === 56320 ? 65536 + (i - 55296 << 10) + (m - 56320) : 65533;
  } else (i & 64512) === 56320 && (i = 65533);
  const o = Q(r) || J(r), c = Q(i) || J(i), f = K(r), l = K(i), p = !l && (!c || f || o), h = !f && (!o || l || c);
  return { can_open: p && (u || !h || o), can_close: h && (u || !p || c), length: s };
};
ee.prototype.Token = R;
function Fr(e) {
  switch (e) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
function wr(e, u) {
  let t = e.pos;
  for (; t < e.posMax && !Fr(e.src.charCodeAt(t)); ) t++;
  return t === e.pos ? false : (u || (e.pending += e.src.slice(e.pos, t)), e.pos = t, true);
}
const vr = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function Sr(e, u) {
  if (!e.md.options.linkify || e.linkLevel > 0) return false;
  const t = e.pos, n = e.posMax;
  if (t + 3 > n || e.src.charCodeAt(t) !== 58 || e.src.charCodeAt(t + 1) !== 47 || e.src.charCodeAt(t + 2) !== 47) return false;
  const r = e.pending.match(vr);
  if (!r) return false;
  const a = r[1], s = e.md.linkify.matchAtStart(e.src.slice(t - a.length));
  if (!s) return false;
  let i = s.url;
  if (i.length <= a.length) return false;
  let o = i.length;
  for (; o > 0 && i.charCodeAt(o - 1) === 42; ) o--;
  o !== i.length && (i = i.slice(0, o));
  const c = e.md.normalizeLink(i);
  if (!e.md.validateLink(c)) return false;
  if (!u) {
    e.pending = e.pending.slice(0, -a.length);
    const f = e.push("link_open", "a", 1);
    f.attrs = [["href", c]], f.markup = "linkify", f.info = "auto";
    const l = e.push("text", "", 0);
    l.content = e.md.normalizeLinkText(i);
    const p = e.push("link_close", "a", -1);
    p.markup = "linkify", p.info = "auto";
  }
  return e.pos += i.length - a.length, true;
}
function Tr(e, u) {
  let t = e.pos;
  if (e.src.charCodeAt(t) !== 10) return false;
  const n = e.pending.length - 1, r = e.posMax;
  if (!u) if (n >= 0 && e.pending.charCodeAt(n) === 32) if (n >= 1 && e.pending.charCodeAt(n - 1) === 32) {
    let a = n - 1;
    for (; a >= 1 && e.pending.charCodeAt(a - 1) === 32; ) a--;
    e.pending = e.pending.slice(0, a), e.push("hardbreak", "br", 0);
  } else e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
  else e.push("softbreak", "br", 0);
  for (t++; t < r && A(e.src.charCodeAt(t)); ) t++;
  return e.pos = t, true;
}
const Le = [];
for (let e = 0; e < 256; e++) Le.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  Le[e.charCodeAt(0)] = 1;
});
function Rr(e, u) {
  let t = e.pos;
  const n = e.posMax;
  if (e.src.charCodeAt(t) !== 92 || (t++, t >= n)) return false;
  let r = e.src.charCodeAt(t);
  if (r === 10) {
    for (u || e.push("hardbreak", "br", 0), t++; t < n && (r = e.src.charCodeAt(t), !!A(r)); ) t++;
    return e.pos = t, true;
  }
  if (r === 32) {
    if (!u) {
      const i = e.push("text_special", "", 0);
      i.content = "\\", i.markup = "\\", i.info = "escape";
    }
    return e.pos = t, true;
  }
  let a = e.src[t];
  if (r >= 55296 && r <= 56319 && t + 1 < n) {
    const i = e.src.charCodeAt(t + 1);
    i >= 56320 && i <= 57343 && (a += e.src[t + 1], t++);
  }
  const s = "\\" + a;
  if (!u) {
    const i = e.push("text_special", "", 0);
    r < 256 && Le[r] !== 0 ? i.content = a : i.content = s, i.markup = s, i.info = "escape";
  }
  return e.pos = t + 1, true;
}
function Ir(e, u) {
  let t = e.pos;
  if (e.src.charCodeAt(t) !== 96) return false;
  const r = t;
  t++;
  const a = e.posMax;
  for (; t < a && e.src.charCodeAt(t) === 96; ) t++;
  const s = e.src.slice(r, t), i = s.length;
  if (e.backticksScanned && (e.backticks[i] || 0) <= r) return u || (e.pending += s), e.pos += i, true;
  let o = t, c;
  for (; (c = e.src.indexOf("`", o)) !== -1; ) {
    for (o = c + 1; o < a && e.src.charCodeAt(o) === 96; ) o++;
    const f = o - c;
    if (f === i) {
      if (!u) {
        const l = e.push("code_inline", "code", 0);
        l.markup = s, l.content = e.src.slice(t, c).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = o, true;
    }
    e.backticks[f] = c;
  }
  return e.backticksScanned = true, u || (e.pending += s), e.pos += i, true;
}
function Mr(e, u) {
  const t = e.pos, n = e.src.charCodeAt(t);
  if (u || n !== 126) return false;
  const r = e.scanDelims(e.pos, true);
  let a = r.length;
  const s = String.fromCharCode(n);
  if (a < 2) return false;
  let i;
  a % 2 && (i = e.push("text", "", 0), i.content = s, a--);
  for (let o = 0; o < a; o += 2) i = e.push("text", "", 0), i.content = s + s, e.delimiters.push({ marker: n, length: 0, token: e.tokens.length - 1, end: -1, open: r.can_open, close: r.can_close });
  return e.pos += r.length, true;
}
function eu(e, u) {
  let t;
  const n = [], r = u.length;
  for (let a = 0; a < r; a++) {
    const s = u[a];
    if (s.marker !== 126 || s.end === -1) continue;
    const i = u[s.end];
    t = e.tokens[s.token], t.type = "s_open", t.tag = "s", t.nesting = 1, t.markup = "~~", t.content = "", t = e.tokens[i.token], t.type = "s_close", t.tag = "s", t.nesting = -1, t.markup = "~~", t.content = "", e.tokens[i.token - 1].type === "text" && e.tokens[i.token - 1].content === "~" && n.push(i.token - 1);
  }
  for (; n.length; ) {
    const a = n.pop();
    let s = a + 1;
    for (; s < e.tokens.length && e.tokens[s].type === "s_close"; ) s++;
    s--, a !== s && (t = e.tokens[s], e.tokens[s] = e.tokens[a], e.tokens[a] = t);
  }
}
function qr(e) {
  const u = e.tokens_meta, t = e.tokens_meta.length;
  eu(e, e.delimiters);
  for (let n = 0; n < t; n++) u[n] && u[n].delimiters && eu(e, u[n].delimiters);
}
const _u = { tokenize: Mr, postProcess: qr };
function zr(e, u) {
  const t = e.pos, n = e.src.charCodeAt(t);
  if (u || n !== 95 && n !== 42) return false;
  const r = e.scanDelims(e.pos, n === 42);
  for (let a = 0; a < r.length; a++) {
    const s = e.push("text", "", 0);
    s.content = String.fromCharCode(n), e.delimiters.push({ marker: n, length: r.length, token: e.tokens.length - 1, end: -1, open: r.can_open, close: r.can_close });
  }
  return e.pos += r.length, true;
}
function uu(e, u) {
  const t = u.length;
  for (let n = t - 1; n >= 0; n--) {
    const r = u[n];
    if (r.marker !== 95 && r.marker !== 42 || r.end === -1) continue;
    const a = u[r.end], s = n > 0 && u[n - 1].end === r.end + 1 && u[n - 1].marker === r.marker && u[n - 1].token === r.token - 1 && u[r.end + 1].token === a.token + 1, i = String.fromCharCode(r.marker), o = e.tokens[r.token];
    o.type = s ? "strong_open" : "em_open", o.tag = s ? "strong" : "em", o.nesting = 1, o.markup = s ? i + i : i, o.content = "";
    const c = e.tokens[a.token];
    c.type = s ? "strong_close" : "em_close", c.tag = s ? "strong" : "em", c.nesting = -1, c.markup = s ? i + i : i, c.content = "", s && (e.tokens[u[n - 1].token].content = "", e.tokens[u[r.end + 1].token].content = "", n--);
  }
}
function Lr(e) {
  const u = e.tokens_meta, t = e.tokens_meta.length;
  uu(e, e.delimiters);
  for (let n = 0; n < t; n++) u[n] && u[n].delimiters && uu(e, u[n].delimiters);
}
const ku = { tokenize: zr, postProcess: Lr };
function Br(e, u) {
  let t, n, r, a, s = "", i = "", o = e.pos, c = true;
  if (e.src.charCodeAt(e.pos) !== 91) return false;
  const f = e.pos, l = e.posMax, p = e.pos + 1, h = e.md.helpers.parseLinkLabel(e, e.pos, true);
  if (h < 0) return false;
  let d = h + 1;
  if (d < l && e.src.charCodeAt(d) === 40) {
    for (c = false, d++; d < l && (t = e.src.charCodeAt(d), !(!A(t) && t !== 10)); d++) ;
    if (d >= l) return false;
    if (o = d, r = e.md.helpers.parseLinkDestination(e.src, d, e.posMax), r.ok) {
      for (s = e.md.normalizeLink(r.str), e.md.validateLink(s) ? d = r.pos : s = "", o = d; d < l && (t = e.src.charCodeAt(d), !(!A(t) && t !== 10)); d++) ;
      if (r = e.md.helpers.parseLinkTitle(e.src, d, e.posMax), d < l && o !== d && r.ok) for (i = r.str, d = r.pos; d < l && (t = e.src.charCodeAt(d), !(!A(t) && t !== 10)); d++) ;
    }
    (d >= l || e.src.charCodeAt(d) !== 41) && (c = true), d++;
  }
  if (c) {
    if (typeof e.env.references > "u") return false;
    if (d < l && e.src.charCodeAt(d) === 91 ? (o = d + 1, d = e.md.helpers.parseLinkLabel(e, d), d >= 0 ? n = e.src.slice(o, d++) : d = h + 1) : d = h + 1, n || (n = e.src.slice(p, h)), a = e.env.references[pe(n)], !a) return e.pos = f, false;
    s = a.href, i = a.title;
  }
  if (!u) {
    e.pos = p, e.posMax = h;
    const b = e.push("link_open", "a", 1), m = [["href", s]];
    b.attrs = m, i && m.push(["title", i]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = d, e.posMax = l, true;
}
function Nr(e, u) {
  let t, n, r, a, s, i, o, c, f = "";
  const l = e.pos, p = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91) return false;
  const h = e.pos + 2, d = e.md.helpers.parseLinkLabel(e, e.pos + 1, false);
  if (d < 0) return false;
  if (a = d + 1, a < p && e.src.charCodeAt(a) === 40) {
    for (a++; a < p && (t = e.src.charCodeAt(a), !(!A(t) && t !== 10)); a++) ;
    if (a >= p) return false;
    for (c = a, i = e.md.helpers.parseLinkDestination(e.src, a, e.posMax), i.ok && (f = e.md.normalizeLink(i.str), e.md.validateLink(f) ? a = i.pos : f = ""), c = a; a < p && (t = e.src.charCodeAt(a), !(!A(t) && t !== 10)); a++) ;
    if (i = e.md.helpers.parseLinkTitle(e.src, a, e.posMax), a < p && c !== a && i.ok) for (o = i.str, a = i.pos; a < p && (t = e.src.charCodeAt(a), !(!A(t) && t !== 10)); a++) ;
    else o = "";
    if (a >= p || e.src.charCodeAt(a) !== 41) return e.pos = l, false;
    a++;
  } else {
    if (typeof e.env.references > "u") return false;
    if (a < p && e.src.charCodeAt(a) === 91 ? (c = a + 1, a = e.md.helpers.parseLinkLabel(e, a), a >= 0 ? r = e.src.slice(c, a++) : a = d + 1) : a = d + 1, r || (r = e.src.slice(h, d)), s = e.env.references[pe(r)], !s) return e.pos = l, false;
    f = s.href, o = s.title;
  }
  if (!u) {
    n = e.src.slice(h, d);
    const b = [];
    e.md.inline.parse(n, e.md, e.env, b);
    const m = e.push("image", "img", 0), y = [["src", f], ["alt", ""]];
    m.attrs = y, m.children = b, m.content = n, o && y.push(["title", o]);
  }
  return e.pos = a, e.posMax = p, true;
}
const Or = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, Pr = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function $r(e, u) {
  let t = e.pos;
  if (e.src.charCodeAt(t) !== 60) return false;
  const n = e.pos, r = e.posMax;
  for (; ; ) {
    if (++t >= r) return false;
    const s = e.src.charCodeAt(t);
    if (s === 60) return false;
    if (s === 62) break;
  }
  const a = e.src.slice(n + 1, t);
  if (Pr.test(a)) {
    const s = e.md.normalizeLink(a);
    if (!e.md.validateLink(s)) return false;
    if (!u) {
      const i = e.push("link_open", "a", 1);
      i.attrs = [["href", s]], i.markup = "autolink", i.info = "auto";
      const o = e.push("text", "", 0);
      o.content = e.md.normalizeLinkText(a);
      const c = e.push("link_close", "a", -1);
      c.markup = "autolink", c.info = "auto";
    }
    return e.pos += a.length + 2, true;
  }
  if (Or.test(a)) {
    const s = e.md.normalizeLink("mailto:" + a);
    if (!e.md.validateLink(s)) return false;
    if (!u) {
      const i = e.push("link_open", "a", 1);
      i.attrs = [["href", s]], i.markup = "autolink", i.info = "auto";
      const o = e.push("text", "", 0);
      o.content = e.md.normalizeLinkText(a);
      const c = e.push("link_close", "a", -1);
      c.markup = "autolink", c.info = "auto";
    }
    return e.pos += a.length + 2, true;
  }
  return false;
}
function jr(e) {
  return /^<a[>\s]/i.test(e);
}
function Vr(e) {
  return /^<\/a\s*>/i.test(e);
}
function Hr(e) {
  const u = e | 32;
  return u >= 97 && u <= 122;
}
function Ur(e, u) {
  if (!e.md.options.html) return false;
  const t = e.posMax, n = e.pos;
  if (e.src.charCodeAt(n) !== 60 || n + 2 >= t) return false;
  const r = e.src.charCodeAt(n + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !Hr(r)) return false;
  const a = e.src.slice(n).match(kr);
  if (!a) return false;
  if (!u) {
    const s = e.push("html_inline", "", 0);
    s.content = a[0], jr(s.content) && e.linkLevel++, Vr(s.content) && e.linkLevel--;
  }
  return e.pos += a[0].length, true;
}
const Zr = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, Wr = /^&([a-z][a-z0-9]{1,31});/i;
function Gr(e, u) {
  const t = e.pos, n = e.posMax;
  if (e.src.charCodeAt(t) !== 38 || t + 1 >= n) return false;
  if (e.src.charCodeAt(t + 1) === 35) {
    const a = e.src.slice(t).match(Zr);
    if (a) {
      if (!u) {
        const s = a[1][0].toLowerCase() === "x" ? parseInt(a[1].slice(1), 16) : parseInt(a[1], 10), i = e.push("text_special", "", 0);
        i.content = qe(s) ? G(s) : G(65533), i.markup = a[0], i.info = "entity";
      }
      return e.pos += a[0].length, true;
    }
  } else {
    const a = e.src.slice(t).match(Wr);
    if (a) {
      const s = ht(a[0]);
      if (s !== a[0]) {
        if (!u) {
          const i = e.push("text_special", "", 0);
          i.content = s, i.markup = a[0], i.info = "entity";
        }
        return e.pos += a[0].length, true;
      }
    }
  }
  return false;
}
function tu(e) {
  const u = {}, t = e.length;
  if (!t) return;
  let n = 0, r = -2;
  const a = [];
  for (let s = 0; s < t; s++) {
    const i = e[s];
    if (a.push(0), (e[n].marker !== i.marker || r !== i.token - 1) && (n = s), r = i.token, i.length = i.length || 0, !i.close) continue;
    u.hasOwnProperty(i.marker) || (u[i.marker] = [-1, -1, -1, -1, -1, -1]);
    const o = u[i.marker][(i.open ? 3 : 0) + i.length % 3];
    let c = n - a[n] - 1, f = c;
    for (; c > o; c -= a[c] + 1) {
      const l = e[c];
      if (l.marker === i.marker && l.open && l.end < 0) {
        let p = false;
        if ((l.close || i.open) && (l.length + i.length) % 3 === 0 && (l.length % 3 !== 0 || i.length % 3 !== 0) && (p = true), !p) {
          const h = c > 0 && !e[c - 1].open ? a[c - 1] + 1 : 0;
          a[s] = s - c + h, a[c] = h, i.open = false, l.end = s, l.close = false, f = -1, r = -2;
          break;
        }
      }
    }
    f !== -1 && (u[i.marker][(i.open ? 3 : 0) + (i.length || 0) % 3] = f);
  }
}
function Kr(e) {
  const u = e.tokens_meta, t = e.tokens_meta.length;
  tu(e.delimiters);
  for (let n = 0; n < t; n++) u[n] && u[n].delimiters && tu(u[n].delimiters);
}
function Jr(e) {
  let u, t, n = 0;
  const r = e.tokens, a = e.tokens.length;
  for (u = t = 0; u < a; u++) r[u].nesting < 0 && n--, r[u].level = n, r[u].nesting > 0 && n++, r[u].type === "text" && u + 1 < a && r[u + 1].type === "text" ? r[u + 1].content = r[u].content + r[u + 1].content : (u !== t && (r[t] = r[u]), t++);
  u !== t && (r.length = t);
}
const Ae = [["text", wr], ["linkify", Sr], ["newline", Tr], ["escape", Rr], ["backticks", Ir], ["strikethrough", _u.tokenize], ["emphasis", ku.tokenize], ["link", Br], ["image", Nr], ["autolink", $r], ["html_inline", Ur], ["entity", Gr]], De = [["balance_pairs", Kr], ["strikethrough", _u.postProcess], ["emphasis", ku.postProcess], ["fragments_join", Jr]];
function ue() {
  this.ruler = new w();
  for (let e = 0; e < Ae.length; e++) this.ruler.push(Ae[e][0], Ae[e][1]);
  this.ruler2 = new w();
  for (let e = 0; e < De.length; e++) this.ruler2.push(De[e][0], De[e][1]);
}
ue.prototype.skipToken = function(e) {
  const u = e.pos, t = this.ruler.getRules(""), n = t.length, r = e.md.options.maxNesting, a = e.cache;
  if (typeof a[u] < "u") {
    e.pos = a[u];
    return;
  }
  let s = false;
  if (e.level < r) {
    for (let i = 0; i < n; i++) if (e.level++, s = t[i](e, true), e.level--, s) {
      if (u >= e.pos) throw new Error("inline rule didn't increment state.pos");
      break;
    }
  } else e.pos = e.posMax;
  s || e.pos++, a[u] = e.pos;
};
ue.prototype.tokenize = function(e) {
  const u = this.ruler.getRules(""), t = u.length, n = e.posMax, r = e.md.options.maxNesting;
  for (; e.pos < n; ) {
    const a = e.pos;
    let s = false;
    if (e.level < r) {
      for (let i = 0; i < t; i++) if (s = u[i](e, false), s) {
        if (a >= e.pos) throw new Error("inline rule didn't increment state.pos");
        break;
      }
    }
    if (s) {
      if (e.pos >= n) break;
      continue;
    }
    e.pending += e.src[e.pos++];
  }
  e.pending && e.pushPending();
};
ue.prototype.parse = function(e, u, t, n) {
  const r = new this.State(e, u, t, n);
  this.tokenize(r);
  const a = this.ruler2.getRules(""), s = a.length;
  for (let i = 0; i < s; i++) a[i](r);
};
ue.prototype.State = ee;
function Qr(e) {
  const u = {};
  e = e || {}, u.src_Any = iu.source, u.src_Cc = su.source, u.src_Z = cu.source, u.src_P = Ie.source, u.src_ZPCc = [u.src_Z, u.src_P, u.src_Cc].join("|"), u.src_ZCc = [u.src_Z, u.src_Cc].join("|");
  const t = "[><\uFF5C]";
  return u.src_pseudo_letter = `(?:(?!${t}|${u.src_ZPCc})${u.src_Any})`, u.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", u.src_auth = `(?:(?:(?!${u.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`, u.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", u.src_host_terminator = `(?=$|${t}|${u.src_ZPCc})(?!${e["---"] ? "-(?!--)|" : "-|"}_|:\\d|\\.-|\\.(?!$|${u.src_ZPCc}))`, u.src_path = `(?:[/?#](?:(?!${u.src_ZCc}|${t}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${u.src_ZCc}|\\]).)*\\]|\\((?:(?!${u.src_ZCc}|[)]).)*\\)|\\{(?:(?!${u.src_ZCc}|[}]).)*\\}|\\"(?:(?!${u.src_ZCc}|["]).)+\\"|\\'(?:(?!${u.src_ZCc}|[']).)+\\'|\\'(?=${u.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${u.src_ZCc}|[.]|$)|` + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + `,(?!${u.src_ZCc}|$)|;(?!${u.src_ZCc}|$)|\\!+(?!${u.src_ZCc}|[!]|$)|\\?(?!${u.src_ZCc}|[?]|$))+|\\/)?`, u.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}', u.src_xn = "xn--[a-z0-9\\-]{1,59}", u.src_domain_root = "(?:" + u.src_xn + `|${u.src_pseudo_letter}{1,63})`, u.src_domain = "(?:" + u.src_xn + `|(?:${u.src_pseudo_letter})|(?:${u.src_pseudo_letter}(?:-|${u.src_pseudo_letter}){0,61}${u.src_pseudo_letter}))`, u.src_host = `(?:(?:(?:(?:${u.src_domain})\\.)*${u.src_domain}))`, u.tpl_host_fuzzy = "(?:" + u.src_ip4 + `|(?:(?:(?:${u.src_domain})\\.)+(?:%TLDS%)))`, u.tpl_host_no_ip_fuzzy = `(?:(?:(?:${u.src_domain})\\.)+(?:%TLDS%))`, u.src_host_strict = u.src_host + u.src_host_terminator, u.tpl_host_fuzzy_strict = u.tpl_host_fuzzy + u.src_host_terminator, u.src_host_port_strict = u.src_host + u.src_port + u.src_host_terminator, u.tpl_host_port_fuzzy_strict = u.tpl_host_fuzzy + u.src_port + u.src_host_terminator, u.tpl_host_port_no_ip_fuzzy_strict = u.tpl_host_no_ip_fuzzy + u.src_port + u.src_host_terminator, u.tpl_host_fuzzy_test = `localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${u.src_ZPCc}|>|$))`, u.tpl_email_fuzzy = `(^|${t}|"|\\(|${u.src_ZCc})(${u.src_email_name}@${u.tpl_host_fuzzy_strict})`, u.tpl_link_fuzzy = `(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uFF5C]|${u.src_ZPCc}))((?![$+<=>^\`|\uFF5C])${u.tpl_host_port_fuzzy_strict}${u.src_path})`, u.tpl_link_no_ip_fuzzy = `(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uFF5C]|${u.src_ZPCc}))((?![$+<=>^\`|\uFF5C])${u.tpl_host_port_no_ip_fuzzy_strict}${u.src_path})`, u;
}
function ve(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    t && Object.keys(t).forEach(function(n) {
      e[n] = t[n];
    });
  }), e;
}
function me(e) {
  return Object.prototype.toString.call(e);
}
function Xr(e) {
  return me(e) === "[object String]";
}
function Yr(e) {
  return me(e) === "[object Object]";
}
function en(e) {
  return me(e) === "[object RegExp]";
}
function ru(e) {
  return me(e) === "[object Function]";
}
function un(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const yu = { fuzzyLink: true, fuzzyEmail: true, fuzzyIP: false };
function tn(e) {
  return Object.keys(e || {}).reduce(function(u, t) {
    return u || yu.hasOwnProperty(t);
  }, false);
}
const rn = { "http:": { validate: function(e, u, t) {
  const n = e.slice(u);
  return t.re.http || (t.re.http = new RegExp(`^\\/\\/${t.re.src_auth}${t.re.src_host_port_strict}${t.re.src_path}`, "i")), t.re.http.test(n) ? n.match(t.re.http)[0].length : 0;
} }, "https:": "http:", "ftp:": "http:", "//": { validate: function(e, u, t) {
  const n = e.slice(u);
  return t.re.no_http || (t.re.no_http = new RegExp("^" + t.re.src_auth + `(?:localhost|(?:(?:${t.re.src_domain})\\.)+${t.re.src_domain_root})` + t.re.src_port + t.re.src_host_terminator + t.re.src_path, "i")), t.re.no_http.test(n) ? u >= 3 && e[u - 3] === ":" || u >= 3 && e[u - 3] === "/" ? 0 : n.match(t.re.no_http)[0].length : 0;
} }, "mailto:": { validate: function(e, u, t) {
  const n = e.slice(u);
  return t.re.mailto || (t.re.mailto = new RegExp(`^${t.re.src_email_name}@${t.re.src_host_strict}`, "i")), t.re.mailto.test(n) ? n.match(t.re.mailto)[0].length : 0;
} } }, nn = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", an = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
function sn(e) {
  return function(u, t) {
    const n = u.slice(t);
    return e.test(n) ? n.match(e)[0].length : 0;
  };
}
function nu() {
  return function(e, u) {
    u.normalize(e);
  };
}
function fe(e) {
  const u = e.re = Qr(e.__opts__), t = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || t.push(nn), t.push(u.src_xn), u.src_tlds = t.join("|");
  function n(i) {
    return i.replace("%TLDS%", u.src_tlds);
  }
  u.email_fuzzy = RegExp(n(u.tpl_email_fuzzy), "i"), u.email_fuzzy_global = RegExp(n(u.tpl_email_fuzzy), "ig"), u.link_fuzzy = RegExp(n(u.tpl_link_fuzzy), "i"), u.link_fuzzy_global = RegExp(n(u.tpl_link_fuzzy), "ig"), u.link_no_ip_fuzzy = RegExp(n(u.tpl_link_no_ip_fuzzy), "i"), u.link_no_ip_fuzzy_global = RegExp(n(u.tpl_link_no_ip_fuzzy), "ig"), u.host_fuzzy_test = RegExp(n(u.tpl_host_fuzzy_test), "i");
  const r = [];
  e.__compiled__ = {};
  function a(i, o) {
    throw new Error(`(LinkifyIt) Invalid schema "${i}": ${o}`);
  }
  Object.keys(e.__schemas__).forEach(function(i) {
    const o = e.__schemas__[i];
    if (o === null) return;
    const c = { validate: null, link: null };
    if (e.__compiled__[i] = c, Yr(o)) {
      en(o.validate) ? c.validate = sn(o.validate) : ru(o.validate) ? c.validate = o.validate : a(i, o), ru(o.normalize) ? c.normalize = o.normalize : o.normalize ? a(i, o) : c.normalize = nu();
      return;
    }
    if (Xr(o)) {
      r.push(i);
      return;
    }
    a(i, o);
  }), r.forEach(function(i) {
    e.__compiled__[e.__schemas__[i]] && (e.__compiled__[i].validate = e.__compiled__[e.__schemas__[i]].validate, e.__compiled__[i].normalize = e.__compiled__[e.__schemas__[i]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: nu() };
  const s = Object.keys(e.__compiled__).filter(function(i) {
    return i.length > 0 && e.__compiled__[i];
  }).map(un).join("|");
  e.re.schema_test = RegExp(`(^|(?!_)(?:[><\uFF5C]|${u.src_ZPCc}))(${s})`, "i"), e.re.schema_search = RegExp(`(^|(?!_)(?:[><\uFF5C]|${u.src_ZPCc}))(${s})`, "ig"), e.re.schema_at_start = RegExp(`^${e.re.schema_search.source}`, "i"), e.re.pretest = RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`, "i");
}
function Cu(e, u, t, n) {
  const r = e.slice(t, n);
  this.schema = u.toLowerCase(), this.index = t, this.lastIndex = n, this.raw = r, this.text = r, this.url = r;
}
function v(e, u) {
  if (!(this instanceof v)) return new v(e, u);
  u || tn(e) && (u = e, e = {}), this.__opts__ = ve({}, yu, u), this.__schemas__ = ve({}, rn, e), this.__compiled__ = {}, this.__tlds__ = an, this.__tlds_replaced__ = false, this.re = {}, fe(this);
}
v.prototype.add = function(u, t) {
  return this.__schemas__[u] = t, fe(this), this;
};
v.prototype.set = function(u) {
  return this.__opts__ = ve(this.__opts__, u), this;
};
v.prototype.test = function(u) {
  if (!u.length) return false;
  let t, n;
  if (this.re.schema_test.test(u)) {
    for (n = this.re.schema_search, n.lastIndex = 0; (t = n.exec(u)) !== null; ) if (this.testSchemaAt(u, t[2], n.lastIndex)) return true;
  }
  return !!(this.__opts__.fuzzyLink && this.__compiled__["http:"] && u.search(this.re.host_fuzzy_test) >= 0 && u.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy) !== null || this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && u.indexOf("@") >= 0 && u.match(this.re.email_fuzzy) !== null);
};
v.prototype.pretest = function(u) {
  return this.re.pretest.test(u);
};
v.prototype.testSchemaAt = function(u, t, n) {
  return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(u, n, this) : 0;
};
v.prototype.match = function(u) {
  const t = [], n = [], r = [], a = [];
  let s, i, o;
  function c(p, h) {
    return p ? h ? p.index !== h.index ? p.index < h.index ? p : h : p.lastIndex >= h.lastIndex ? p : h : p : h;
  }
  if (!u.length) return null;
  if (this.re.schema_test.test(u)) for (o = this.re.schema_search, o.lastIndex = 0; (s = o.exec(u)) !== null; ) i = this.testSchemaAt(u, s[2], o.lastIndex), i && n.push({ schema: s[2], index: s.index + s[1].length, lastIndex: s.index + s[0].length + i });
  if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) for (o = this.__opts__.fuzzyIP ? this.re.link_fuzzy_global : this.re.link_no_ip_fuzzy_global, o.lastIndex = 0; (s = o.exec(u)) !== null; ) r.push({ schema: "", index: s.index + s[1].length, lastIndex: s.index + s[0].length });
  if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) for (o = this.re.email_fuzzy_global, o.lastIndex = 0; (s = o.exec(u)) !== null; ) a.push({ schema: "mailto:", index: s.index + s[1].length, lastIndex: s.index + s[0].length });
  const f = [0, 0, 0];
  let l = 0;
  for (; ; ) {
    const p = [n[f[0]], a[f[1]], r[f[2]]], h = c(c(p[0], p[1]), p[2]);
    if (!h) break;
    if (h === p[0] ? f[0]++ : h === p[1] ? f[1]++ : f[2]++, h.index < l) continue;
    const d = new Cu(u, h.schema, h.index, h.lastIndex);
    this.__compiled__[d.schema].normalize(d, this), t.push(d), l = h.lastIndex;
  }
  return t.length ? t : null;
};
v.prototype.matchAtStart = function(u) {
  if (!u.length) return null;
  const t = this.re.schema_at_start.exec(u);
  if (!t) return null;
  const n = this.testSchemaAt(u, t[2], t[0].length);
  if (!n) return null;
  const r = new Cu(u, t[2], t.index + t[1].length, t.index + t[0].length + n);
  return this.__compiled__[r.schema].normalize(r, this), r;
};
v.prototype.tlds = function(u, t) {
  return u = Array.isArray(u) ? u : [u], t ? (this.__tlds__ = this.__tlds__.concat(u).sort().filter(function(n, r, a) {
    return n !== a[r - 1];
  }).reverse(), fe(this), this) : (this.__tlds__ = u.slice(), this.__tlds_replaced__ = true, fe(this), this);
};
v.prototype.normalize = function(u) {
  u.schema || (u.url = `http://${u.url}`), u.schema === "mailto:" && !/^mailto:/i.test(u.url) && (u.url = `mailto:${u.url}`);
};
v.prototype.onCompile = function() {
};
const V = 2147483647, I = 36, Be = 1, X = 26, on = 38, cn = 700, Au = 72, Du = 128, Eu = "-", ln = /^xn--/, dn = /[^\0-\x7F]/, fn = /[\x2E\u3002\uFF0E\uFF61]/g, hn = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, Ee = I - Be, M = Math.floor, Fe = String.fromCharCode;
function N(e) {
  throw new RangeError(hn[e]);
}
function pn(e, u) {
  const t = [];
  let n = e.length;
  for (; n--; ) t[n] = u(e[n]);
  return t;
}
function Fu(e, u) {
  const t = e.split("@");
  let n = "";
  t.length > 1 && (n = t[0] + "@", e = t[1]), e = e.replace(fn, ".");
  const r = e.split("."), a = pn(r, u).join(".");
  return n + a;
}
function wu(e) {
  const u = [];
  let t = 0;
  const n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < n) {
      const a = e.charCodeAt(t++);
      (a & 64512) == 56320 ? u.push(((r & 1023) << 10) + (a & 1023) + 65536) : (u.push(r), t--);
    } else u.push(r);
  }
  return u;
}
const bn = (e) => String.fromCodePoint(...e), gn = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : I;
}, au = function(e, u) {
  return e + 22 + 75 * (e < 26) - ((u != 0) << 5);
}, vu = function(e, u, t) {
  let n = 0;
  for (e = t ? M(e / cn) : e >> 1, e += M(e / u); e > Ee * X >> 1; n += I) e = M(e / Ee);
  return M(n + (Ee + 1) * e / (e + on));
}, Su = function(e) {
  const u = [], t = e.length;
  let n = 0, r = Du, a = Au, s = e.lastIndexOf(Eu);
  s < 0 && (s = 0);
  for (let i = 0; i < s; ++i) e.charCodeAt(i) >= 128 && N("not-basic"), u.push(e.charCodeAt(i));
  for (let i = s > 0 ? s + 1 : 0; i < t; ) {
    const o = n;
    for (let f = 1, l = I; ; l += I) {
      i >= t && N("invalid-input");
      const p = gn(e.charCodeAt(i++));
      p >= I && N("invalid-input"), p > M((V - n) / f) && N("overflow"), n += p * f;
      const h = l <= a ? Be : l >= a + X ? X : l - a;
      if (p < h) break;
      const d = I - h;
      f > M(V / d) && N("overflow"), f *= d;
    }
    const c = u.length + 1;
    a = vu(n - o, c, o == 0), M(n / c) > V - r && N("overflow"), r += M(n / c), n %= c, u.splice(n++, 0, r);
  }
  return String.fromCodePoint(...u);
}, Tu = function(e) {
  const u = [];
  e = wu(e);
  const t = e.length;
  let n = Du, r = 0, a = Au;
  for (const o of e) o < 128 && u.push(Fe(o));
  const s = u.length;
  let i = s;
  for (s && u.push(Eu); i < t; ) {
    let o = V;
    for (const f of e) f >= n && f < o && (o = f);
    const c = i + 1;
    o - n > M((V - r) / c) && N("overflow"), r += (o - n) * c, n = o;
    for (const f of e) if (f < n && ++r > V && N("overflow"), f === n) {
      let l = r;
      for (let p = I; ; p += I) {
        const h = p <= a ? Be : p >= a + X ? X : p - a;
        if (l < h) break;
        const d = l - h, b = I - h;
        u.push(Fe(au(h + d % b, 0))), l = M(d / b);
      }
      u.push(Fe(au(l, 0))), a = vu(r, c, i === s), r = 0, ++i;
    }
    ++r, ++n;
  }
  return u.join("");
}, mn = function(e) {
  return Fu(e, function(u) {
    return ln.test(u) ? Su(u.slice(4).toLowerCase()) : u;
  });
}, xn = function(e) {
  return Fu(e, function(u) {
    return dn.test(u) ? "xn--" + Tu(u) : u;
  });
}, Ru = { version: "2.3.1", ucs2: { decode: wu, encode: bn }, decode: Su, encode: Tu, toASCII: xn, toUnicode: mn }, _n = { options: { html: false, xhtmlOut: false, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "\u201C\u201D\u2018\u2019", highlight: null, maxNesting: 100 }, components: { core: {}, block: {}, inline: {} } }, kn = { options: { html: false, xhtmlOut: false, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "\u201C\u201D\u2018\u2019", highlight: null, maxNesting: 20 }, components: { core: { rules: ["normalize", "block", "inline", "text_join"] }, block: { rules: ["paragraph"] }, inline: { rules: ["text"], rules2: ["balance_pairs", "fragments_join"] } } }, yn = { options: { html: true, xhtmlOut: true, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "\u201C\u201D\u2018\u2019", highlight: null, maxNesting: 20 }, components: { core: { rules: ["normalize", "block", "inline", "text_join"] }, block: { rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"] }, inline: { rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"], rules2: ["balance_pairs", "emphasis", "fragments_join"] } } }, Cn = { default: _n, zero: kn, commonmark: yn }, An = /^(vbscript|javascript|file|data):/, Dn = /^data:image\/(gif|png|jpeg|webp);/;
function En(e) {
  const u = e.trim().toLowerCase();
  return An.test(u) ? Dn.test(u) : true;
}
const Iu = ["http:", "https:", "mailto:"];
function Fn(e) {
  const u = Re(e, true);
  if (u.hostname && (!u.protocol || Iu.indexOf(u.protocol) >= 0)) try {
    u.hostname = Ru.toASCII(u.hostname);
  } catch {
  }
  return Y(Te(u));
}
function wn(e) {
  const u = Re(e, true);
  if (u.hostname && (!u.protocol || Iu.indexOf(u.protocol) >= 0)) try {
    u.hostname = Ru.toUnicode(u.hostname);
  } catch {
  }
  return H(Te(u), H.defaultChars + "%");
}
function S(e, u) {
  if (!(this instanceof S)) return new S(e, u);
  u || Me(e) || (u = e || {}, e = "default"), this.inline = new ue(), this.block = new ge(), this.core = new ze(), this.renderer = new Z(), this.linkify = new v(), this.validateLink = En, this.normalizeLink = Fn, this.normalizeLinkText = wn, this.utils = St, this.helpers = he({}, Mt), this.options = {}, this.configure(e), u && this.set(u);
}
S.prototype.set = function(e) {
  return he(this.options, e), this;
};
S.prototype.configure = function(e) {
  const u = this;
  if (Me(e)) {
    const t = e;
    if (e = Cn[t], !e) throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
  }
  if (!e) throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && u.set(e.options), e.components && Object.keys(e.components).forEach(function(t) {
    e.components[t].rules && u[t].ruler.enableOnly(e.components[t].rules), e.components[t].rules2 && u[t].ruler2.enableOnly(e.components[t].rules2);
  }), this;
};
S.prototype.enable = function(e, u) {
  let t = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    t = t.concat(this[r].ruler.enable(e, true));
  }, this), t = t.concat(this.inline.ruler2.enable(e, true));
  const n = e.filter(function(r) {
    return t.indexOf(r) < 0;
  });
  if (n.length && !u) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
  return this;
};
S.prototype.disable = function(e, u) {
  let t = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    t = t.concat(this[r].ruler.disable(e, true));
  }, this), t = t.concat(this.inline.ruler2.disable(e, true));
  const n = e.filter(function(r) {
    return t.indexOf(r) < 0;
  });
  if (n.length && !u) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
  return this;
};
S.prototype.use = function(e) {
  const u = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, u), this;
};
S.prototype.parse = function(e, u) {
  if (typeof e != "string") throw new Error("Input data should be a String");
  const t = new this.core.State(e, this, u);
  return this.core.process(t), t.tokens;
};
S.prototype.render = function(e, u) {
  return u = u || {}, this.renderer.render(this.parse(e, u), this.options, u);
};
S.prototype.parseInline = function(e, u) {
  const t = new this.core.State(e, this, u);
  return t.inlineMode = true, this.core.process(t), t.tokens;
};
S.prototype.renderInline = function(e, u) {
  return u = u || {}, this.renderer.render(this.parseInline(e, u), this.options, u);
};
const vn = /[^a-z0-9\s-]/g, Sn = /\s+/g, ce = (e) => e.trim().toLowerCase().replace(vn, "").replace(Sn, "-") || "section", le = (e, u) => {
  let t = e, n = 1;
  for (; u.has(t); ) t = `${e}-${n}`, n += 1;
  return u.add(t), t;
};
ce.__docgenInfo = Object.assign({ displayName: ce.name ?? ce.__name }, { exportName: "slugifyHeadingText", displayName: "slugifyHeadingText", description: "Slugifies heading text into a deterministic, URL-safe id.", type: 2, props: [{ name: "toString", global: false, description: "Returns a string representation of a string.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "charAt", global: false, description: "Returns the character at the specified index.", tags: [{ name: "param", text: "pos The zero-based index of the desired character." }], required: true, type: "(pos: number) => string", schema: "(pos: number) => string", declarations: [] }, { name: "charCodeAt", global: false, description: "Returns the Unicode value of the character at the specified location.", tags: [{ name: "param", text: "index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned." }], required: true, type: "(index: number) => number", schema: "(index: number) => number", declarations: [] }, { name: "concat", global: false, description: "Returns a string that contains the concatenation of two or more strings.", tags: [{ name: "param", text: "strings The strings to append to the end of the string." }], required: true, type: "(...strings: string[]) => string", schema: "(...strings: string[]) => string", declarations: [] }, { name: "indexOf", global: false, description: "Returns the position of the first occurrence of a substring.", tags: [{ name: "param", text: "searchString The substring to search for in the string" }, { name: "param", text: "position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string." }], required: true, type: "(searchString: string, position?: number | undefined) => number", schema: "(searchString: string, position?: number | undefined) => number", declarations: [] }, { name: "lastIndexOf", global: false, description: "Returns the last occurrence of a substring in the string.", tags: [{ name: "param", text: "searchString The substring to search for." }, { name: "param", text: "position The index at which to begin searching. If omitted, the search begins at the end of the string." }], required: true, type: "(searchString: string, position?: number | undefined) => number", schema: "(searchString: string, position?: number | undefined) => number", declarations: [] }, { name: "localeCompare", global: false, description: `Determines whether two strings are equivalent in the current locale.
Determines whether two strings are equivalent in the current or specified locale.`, tags: [{ name: "param", text: "that String to compare to target string" }, { name: "param", text: "that String to compare to target string" }, { name: "param", text: "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details." }, { name: "param", text: "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details." }, { name: "param", text: "that String to compare to target string" }, { name: "param", text: "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details." }, { name: "param", text: "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details." }], required: true, type: "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: Intl.CollatorOptions | undefined): number; (that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions | undefined): number; }", schema: "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: Intl.CollatorOptions | undefined): number; (that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions | undefined): number; }", declarations: [] }, { name: "match", global: false, description: `Matches a string with a regular expression, and returns an array containing the results of that search.
Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.`, tags: [{ name: "param", text: "regexp A variable name or string literal containing the regular expression pattern and flags." }, { name: "param", text: "matcher An object that supports being matched against." }], required: true, type: "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }", schema: "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }", declarations: [] }, { name: "replace", global: false, description: "Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.", tags: [{ name: "param", text: "searchValue A string or regular expression to search for." }, { name: "param", text: "replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced." }, { name: "param", text: "searchValue A string to search for." }, { name: "param", text: "replacer A function that returns the replacement text." }, { name: "param", text: "searchValue An object that supports searching for and replacing matches within a string." }, { name: "param", text: "replaceValue The replacement text." }, { name: "param", text: "searchValue A object can search for and replace matches within a string." }, { name: "param", text: "replacer A function that returns the replacement text." }], required: true, type: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string; (searchValue: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }, replacer: (substring: string, ...args: any[]) => string): string; }", schema: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string; (searchValue: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }, replacer: (substring: string, ...args: any[]) => string): string; }", declarations: [] }, { name: "search", global: false, description: "Finds the first substring match in a regular expression search.", tags: [{ name: "param", text: "regexp The regular expression pattern and applicable flags." }, { name: "param", text: "searcher An object which supports searching within a string." }], required: true, type: "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }", schema: "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }", declarations: [] }, { name: "slice", global: false, description: "Returns a section of a string.", tags: [{ name: "param", text: "start The index to the beginning of the specified portion of stringObj." }, { name: "param", text: `end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
If this value is not specified, the substring continues to the end of stringObj.` }], required: true, type: "(start?: number | undefined, end?: number | undefined) => string", schema: "(start?: number | undefined, end?: number | undefined) => string", declarations: [] }, { name: "split", global: false, description: "Split a string into substrings using the specified separator and return them as an array.", tags: [{ name: "param", text: "separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned." }, { name: "param", text: "limit A value used to limit the number of elements returned in the array." }, { name: "param", text: "splitter An object that can split a string." }, { name: "param", text: "limit A value used to limit the number of elements returned in the array." }], required: true, type: "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }", schema: "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }", declarations: [] }, { name: "substring", global: false, description: "Returns the substring at the specified location within a String object.", tags: [{ name: "param", text: "start The zero-based index number indicating the beginning of the substring." }, { name: "param", text: `end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
If end is omitted, the characters from start through the end of the original string are returned.` }], required: true, type: "(start: number, end?: number | undefined) => string", schema: "(start: number, end?: number | undefined) => string", declarations: [] }, { name: "toLowerCase", global: false, description: "Converts all the alphabetic characters in a string to lowercase.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "toLocaleLowerCase", global: false, description: "Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.", tags: [], required: true, type: "{ (locales?: string | string[] | undefined): string; (locales?: Intl.LocalesArgument): string; }", schema: "{ (locales?: string | string[] | undefined): string; (locales?: Intl.LocalesArgument): string; }", declarations: [] }, { name: "toUpperCase", global: false, description: "Converts all the alphabetic characters in a string to uppercase.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "toLocaleUpperCase", global: false, description: "Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.", tags: [], required: true, type: "{ (locales?: string | string[] | undefined): string; (locales?: Intl.LocalesArgument): string; }", schema: "{ (locales?: string | string[] | undefined): string; (locales?: Intl.LocalesArgument): string; }", declarations: [] }, { name: "trim", global: false, description: "Removes the leading and trailing white space and line terminator characters from a string.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "length", global: false, description: "Returns the length of a String object.", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "substr", global: false, description: "Gets a substring beginning at the specified location and having the specified length.", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }, { name: "param", text: "from The starting position of the desired substring. The index of the first character in the string is zero." }, { name: "param", text: "length The number of characters to include in the returned substring." }], required: true, type: "(from: number, length?: number | undefined) => string", schema: "(from: number, length?: number | undefined) => string", declarations: [] }, { name: "valueOf", global: false, description: "Returns the primitive value of the specified object.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "codePointAt", global: false, description: `Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.`, tags: [], required: true, type: "(pos: number) => number | undefined", schema: "(pos: number) => number | undefined", declarations: [] }, { name: "includes", global: false, description: `Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.`, tags: [{ name: "param", text: "searchString search string" }, { name: "param", text: "position If position is undefined, 0 is assumed, so as to search all of the String." }], required: true, type: "(searchString: string, position?: number | undefined) => boolean", schema: "(searchString: string, position?: number | undefined) => boolean", declarations: [] }, { name: "endsWith", global: false, description: `Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition \u2013 length(this). Otherwise returns false.`, tags: [], required: true, type: "(searchString: string, endPosition?: number | undefined) => boolean", schema: "(searchString: string, endPosition?: number | undefined) => boolean", declarations: [] }, { name: "normalize", global: false, description: `Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.`, tags: [{ name: "param", text: `form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"` }, { name: "param", text: `form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"` }], required: true, type: '{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }', schema: '{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }', declarations: [] }, { name: "repeat", global: false, description: `Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.`, tags: [{ name: "param", text: "count number of copies to append" }], required: true, type: "(count: number) => string", schema: "(count: number) => string", declarations: [] }, { name: "startsWith", global: false, description: `Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.`, tags: [], required: true, type: "(searchString: string, position?: number | undefined) => boolean", schema: "(searchString: string, position?: number | undefined) => boolean", declarations: [] }, { name: "anchor", global: false, description: "Returns an `<a>` HTML anchor element and sets the name attribute to the text value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }, { name: "param", text: "name" }], required: true, type: "(name: string) => string", schema: "(name: string) => string", declarations: [] }, { name: "big", global: false, description: "Returns a `<big>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "blink", global: false, description: "Returns a `<blink>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "bold", global: false, description: "Returns a `<b>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "fixed", global: false, description: "Returns a `<tt>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "fontcolor", global: false, description: "Returns a `<font>` HTML element and sets the color attribute value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "(color: string) => string", schema: "(color: string) => string", declarations: [] }, { name: "fontsize", global: false, description: "Returns a `<font>` HTML element and sets the size attribute value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }, { name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "{ (size: number): string; (size: string): string; }", schema: "{ (size: number): string; (size: string): string; }", declarations: [] }, { name: "italics", global: false, description: "Returns an `<i>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "link", global: false, description: "Returns an `<a>` HTML element and sets the href attribute value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "(url: string) => string", schema: "(url: string) => string", declarations: [] }, { name: "small", global: false, description: "Returns a `<small>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "strike", global: false, description: "Returns a `<strike>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "sub", global: false, description: "Returns a `<sub>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "sup", global: false, description: "Returns a `<sup>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "padStart", global: false, description: `Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.`, tags: [{ name: "param", text: `maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.` }, { name: "param", text: `fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).` }], required: true, type: "(maxLength: number, fillString?: string | undefined) => string", schema: "(maxLength: number, fillString?: string | undefined) => string", declarations: [] }, { name: "padEnd", global: false, description: `Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.`, tags: [{ name: "param", text: `maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.` }, { name: "param", text: `fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).` }], required: true, type: "(maxLength: number, fillString?: string | undefined) => string", schema: "(maxLength: number, fillString?: string | undefined) => string", declarations: [] }, { name: "trimEnd", global: false, description: "Removes the trailing white space and line terminator characters from a string.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "trimStart", global: false, description: "Removes the leading white space and line terminator characters from a string.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "trimLeft", global: false, description: "Removes the leading white space and line terminator characters from a string.", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility. Use `trimStart` instead" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "trimRight", global: false, description: "Removes the trailing white space and line terminator characters from a string.", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility. Use `trimEnd` instead" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "matchAll", global: false, description: `Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.`, tags: [{ name: "param", text: "regexp A variable name or string literal containing the regular expression pattern and flags." }], required: true, type: "(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>", schema: "(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>", declarations: [] }, { name: "replaceAll", global: false, description: "Replace all instances of a substring in a string, using a regular expression or search string.", tags: [{ name: "param", text: "searchValue A string to search for." }, { name: "param", text: "replaceValue A string containing the text to replace for every successful match of searchValue in this string." }, { name: "param", text: "searchValue A string to search for." }, { name: "param", text: "replacer A function that returns the replacement text." }], required: true, type: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }", schema: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }", declarations: [] }, { name: "at", global: false, description: "Returns a new String consisting of the single UTF-16 code unit located at the specified index.", tags: [{ name: "param", text: "index The zero-based index of the desired code unit. A negative index will count back from the last item." }], required: true, type: "(index: number) => string | undefined", schema: "(index: number) => string | undefined", declarations: [] }, { name: "isWellFormed", global: false, description: "Returns true if all leading surrogates and trailing surrogates appear paired and in order.", tags: [], required: true, type: "() => boolean", schema: "() => boolean", declarations: [] }, { name: "toWellFormed", global: false, description: "Returns a string where all lone or out-of-order surrogates have been replaced by the Unicode replacement character (U+FFFD).", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "__@iterator@612", global: false, description: "Iterator", tags: [], required: true, type: "() => StringIterator<string>", schema: "() => StringIterator<string>", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/markdown/headingId.ts" });
le.__docgenInfo = Object.assign({ displayName: le.name ?? le.__name }, { exportName: "resolveUniqueHeadingId", displayName: "resolveUniqueHeadingId", description: "Resolves a unique heading id for a given slug, appending a numeric suffix on collision.", type: 2, props: [{ name: "toString", global: false, description: "Returns a string representation of a string.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "charAt", global: false, description: "Returns the character at the specified index.", tags: [{ name: "param", text: "pos The zero-based index of the desired character." }], required: true, type: "(pos: number) => string", schema: "(pos: number) => string", declarations: [] }, { name: "charCodeAt", global: false, description: "Returns the Unicode value of the character at the specified location.", tags: [{ name: "param", text: "index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned." }], required: true, type: "(index: number) => number", schema: "(index: number) => number", declarations: [] }, { name: "concat", global: false, description: "Returns a string that contains the concatenation of two or more strings.", tags: [{ name: "param", text: "strings The strings to append to the end of the string." }], required: true, type: "(...strings: string[]) => string", schema: "(...strings: string[]) => string", declarations: [] }, { name: "indexOf", global: false, description: "Returns the position of the first occurrence of a substring.", tags: [{ name: "param", text: "searchString The substring to search for in the string" }, { name: "param", text: "position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string." }], required: true, type: "(searchString: string, position?: number | undefined) => number", schema: "(searchString: string, position?: number | undefined) => number", declarations: [] }, { name: "lastIndexOf", global: false, description: "Returns the last occurrence of a substring in the string.", tags: [{ name: "param", text: "searchString The substring to search for." }, { name: "param", text: "position The index at which to begin searching. If omitted, the search begins at the end of the string." }], required: true, type: "(searchString: string, position?: number | undefined) => number", schema: "(searchString: string, position?: number | undefined) => number", declarations: [] }, { name: "localeCompare", global: false, description: `Determines whether two strings are equivalent in the current locale.
Determines whether two strings are equivalent in the current or specified locale.`, tags: [{ name: "param", text: "that String to compare to target string" }, { name: "param", text: "that String to compare to target string" }, { name: "param", text: "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details." }, { name: "param", text: "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details." }, { name: "param", text: "that String to compare to target string" }, { name: "param", text: "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details." }, { name: "param", text: "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details." }], required: true, type: "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: Intl.CollatorOptions | undefined): number; (that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions | undefined): number; }", schema: "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: Intl.CollatorOptions | undefined): number; (that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions | undefined): number; }", declarations: [] }, { name: "match", global: false, description: `Matches a string with a regular expression, and returns an array containing the results of that search.
Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.`, tags: [{ name: "param", text: "regexp A variable name or string literal containing the regular expression pattern and flags." }, { name: "param", text: "matcher An object that supports being matched against." }], required: true, type: "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }", schema: "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }", declarations: [] }, { name: "replace", global: false, description: "Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.", tags: [{ name: "param", text: "searchValue A string or regular expression to search for." }, { name: "param", text: "replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced." }, { name: "param", text: "searchValue A string to search for." }, { name: "param", text: "replacer A function that returns the replacement text." }, { name: "param", text: "searchValue An object that supports searching for and replacing matches within a string." }, { name: "param", text: "replaceValue The replacement text." }, { name: "param", text: "searchValue A object can search for and replace matches within a string." }, { name: "param", text: "replacer A function that returns the replacement text." }], required: true, type: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string; (searchValue: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }, replacer: (substring: string, ...args: any[]) => string): string; }", schema: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string; (searchValue: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }, replacer: (substring: string, ...args: any[]) => string): string; }", declarations: [] }, { name: "search", global: false, description: "Finds the first substring match in a regular expression search.", tags: [{ name: "param", text: "regexp The regular expression pattern and applicable flags." }, { name: "param", text: "searcher An object which supports searching within a string." }], required: true, type: "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }", schema: "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }", declarations: [] }, { name: "slice", global: false, description: "Returns a section of a string.", tags: [{ name: "param", text: "start The index to the beginning of the specified portion of stringObj." }, { name: "param", text: `end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
If this value is not specified, the substring continues to the end of stringObj.` }], required: true, type: "(start?: number | undefined, end?: number | undefined) => string", schema: "(start?: number | undefined, end?: number | undefined) => string", declarations: [] }, { name: "split", global: false, description: "Split a string into substrings using the specified separator and return them as an array.", tags: [{ name: "param", text: "separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned." }, { name: "param", text: "limit A value used to limit the number of elements returned in the array." }, { name: "param", text: "splitter An object that can split a string." }, { name: "param", text: "limit A value used to limit the number of elements returned in the array." }], required: true, type: "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }", schema: "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }", declarations: [] }, { name: "substring", global: false, description: "Returns the substring at the specified location within a String object.", tags: [{ name: "param", text: "start The zero-based index number indicating the beginning of the substring." }, { name: "param", text: `end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
If end is omitted, the characters from start through the end of the original string are returned.` }], required: true, type: "(start: number, end?: number | undefined) => string", schema: "(start: number, end?: number | undefined) => string", declarations: [] }, { name: "toLowerCase", global: false, description: "Converts all the alphabetic characters in a string to lowercase.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "toLocaleLowerCase", global: false, description: "Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.", tags: [], required: true, type: "{ (locales?: string | string[] | undefined): string; (locales?: Intl.LocalesArgument): string; }", schema: "{ (locales?: string | string[] | undefined): string; (locales?: Intl.LocalesArgument): string; }", declarations: [] }, { name: "toUpperCase", global: false, description: "Converts all the alphabetic characters in a string to uppercase.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "toLocaleUpperCase", global: false, description: "Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.", tags: [], required: true, type: "{ (locales?: string | string[] | undefined): string; (locales?: Intl.LocalesArgument): string; }", schema: "{ (locales?: string | string[] | undefined): string; (locales?: Intl.LocalesArgument): string; }", declarations: [] }, { name: "trim", global: false, description: "Removes the leading and trailing white space and line terminator characters from a string.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "length", global: false, description: "Returns the length of a String object.", tags: [], required: true, type: "number", schema: "number", declarations: [] }, { name: "substr", global: false, description: "Gets a substring beginning at the specified location and having the specified length.", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }, { name: "param", text: "from The starting position of the desired substring. The index of the first character in the string is zero." }, { name: "param", text: "length The number of characters to include in the returned substring." }], required: true, type: "(from: number, length?: number | undefined) => string", schema: "(from: number, length?: number | undefined) => string", declarations: [] }, { name: "valueOf", global: false, description: "Returns the primitive value of the specified object.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "codePointAt", global: false, description: `Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.`, tags: [], required: true, type: "(pos: number) => number | undefined", schema: "(pos: number) => number | undefined", declarations: [] }, { name: "includes", global: false, description: `Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.`, tags: [{ name: "param", text: "searchString search string" }, { name: "param", text: "position If position is undefined, 0 is assumed, so as to search all of the String." }], required: true, type: "(searchString: string, position?: number | undefined) => boolean", schema: "(searchString: string, position?: number | undefined) => boolean", declarations: [] }, { name: "endsWith", global: false, description: `Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition \u2013 length(this). Otherwise returns false.`, tags: [], required: true, type: "(searchString: string, endPosition?: number | undefined) => boolean", schema: "(searchString: string, endPosition?: number | undefined) => boolean", declarations: [] }, { name: "normalize", global: false, description: `Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.`, tags: [{ name: "param", text: `form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"` }, { name: "param", text: `form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"` }], required: true, type: '{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }', schema: '{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }', declarations: [] }, { name: "repeat", global: false, description: `Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.`, tags: [{ name: "param", text: "count number of copies to append" }], required: true, type: "(count: number) => string", schema: "(count: number) => string", declarations: [] }, { name: "startsWith", global: false, description: `Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.`, tags: [], required: true, type: "(searchString: string, position?: number | undefined) => boolean", schema: "(searchString: string, position?: number | undefined) => boolean", declarations: [] }, { name: "anchor", global: false, description: "Returns an `<a>` HTML anchor element and sets the name attribute to the text value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }, { name: "param", text: "name" }], required: true, type: "(name: string) => string", schema: "(name: string) => string", declarations: [] }, { name: "big", global: false, description: "Returns a `<big>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "blink", global: false, description: "Returns a `<blink>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "bold", global: false, description: "Returns a `<b>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "fixed", global: false, description: "Returns a `<tt>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "fontcolor", global: false, description: "Returns a `<font>` HTML element and sets the color attribute value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "(color: string) => string", schema: "(color: string) => string", declarations: [] }, { name: "fontsize", global: false, description: "Returns a `<font>` HTML element and sets the size attribute value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }, { name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "{ (size: number): string; (size: string): string; }", schema: "{ (size: number): string; (size: string): string; }", declarations: [] }, { name: "italics", global: false, description: "Returns an `<i>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "link", global: false, description: "Returns an `<a>` HTML element and sets the href attribute value", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "(url: string) => string", schema: "(url: string) => string", declarations: [] }, { name: "small", global: false, description: "Returns a `<small>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "strike", global: false, description: "Returns a `<strike>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "sub", global: false, description: "Returns a `<sub>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "sup", global: false, description: "Returns a `<sup>` HTML element", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "padStart", global: false, description: `Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.`, tags: [{ name: "param", text: `maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.` }, { name: "param", text: `fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).` }], required: true, type: "(maxLength: number, fillString?: string | undefined) => string", schema: "(maxLength: number, fillString?: string | undefined) => string", declarations: [] }, { name: "padEnd", global: false, description: `Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.`, tags: [{ name: "param", text: `maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.` }, { name: "param", text: `fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).` }], required: true, type: "(maxLength: number, fillString?: string | undefined) => string", schema: "(maxLength: number, fillString?: string | undefined) => string", declarations: [] }, { name: "trimEnd", global: false, description: "Removes the trailing white space and line terminator characters from a string.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "trimStart", global: false, description: "Removes the leading white space and line terminator characters from a string.", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "trimLeft", global: false, description: "Removes the leading white space and line terminator characters from a string.", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility. Use `trimStart` instead" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "trimRight", global: false, description: "Removes the trailing white space and line terminator characters from a string.", tags: [{ name: "deprecated", text: "A legacy feature for browser compatibility. Use `trimEnd` instead" }], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "matchAll", global: false, description: `Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.`, tags: [{ name: "param", text: "regexp A variable name or string literal containing the regular expression pattern and flags." }], required: true, type: "(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>", schema: "(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>", declarations: [] }, { name: "replaceAll", global: false, description: "Replace all instances of a substring in a string, using a regular expression or search string.", tags: [{ name: "param", text: "searchValue A string to search for." }, { name: "param", text: "replaceValue A string containing the text to replace for every successful match of searchValue in this string." }, { name: "param", text: "searchValue A string to search for." }, { name: "param", text: "replacer A function that returns the replacement text." }], required: true, type: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }", schema: "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }", declarations: [] }, { name: "at", global: false, description: "Returns a new String consisting of the single UTF-16 code unit located at the specified index.", tags: [{ name: "param", text: "index The zero-based index of the desired code unit. A negative index will count back from the last item." }], required: true, type: "(index: number) => string | undefined", schema: "(index: number) => string | undefined", declarations: [] }, { name: "isWellFormed", global: false, description: "Returns true if all leading surrogates and trailing surrogates appear paired and in order.", tags: [], required: true, type: "() => boolean", schema: "() => boolean", declarations: [] }, { name: "toWellFormed", global: false, description: "Returns a string where all lone or out-of-order surrogates have been replaced by the Unicode replacement character (U+FFFD).", tags: [], required: true, type: "() => string", schema: "() => string", declarations: [] }, { name: "__@iterator@612", global: false, description: "Iterator", tags: [], required: true, type: "() => StringIterator<string>", schema: "() => StringIterator<string>", declarations: [] }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/mioframe/mioframe/app-source/src/shared/lib/markdown/headingId.ts" });
const Tn = (e) => /^(?:https?:|\/\/)/iu.test(e), Rn = /^(?:https?:|mailto:|tel:)/iu, In = /^[a-z][a-z\d+.-]*:/iu, Mn = (e) => {
  const u = e.trim();
  return u === "" ? false : Rn.test(u) || u.startsWith("//") || u.startsWith("/") || u.startsWith("#") || u.startsWith("./") || u.startsWith("../") ? true : !In.test(u);
}, qn = (e = {}) => {
  const u = new S({ html: false, linkify: false, typographer: false, breaks: false }), t = u.validateLink.bind(u);
  u.validateLink = (l) => t(l) && Mn(l);
  const { openExternalLinksInNewTab: n = false, tableWrapperClassName: r, generateHeadingIds: a = false } = e, s = (l, p, h, d, b) => b.renderToken(l, p, h), i = (l, p, h, d, b) => b.renderToken(l, p, h), o = (l, p, h, d, b) => b.renderToken(l, p, h), c = (l, p, h, d, b) => b.renderToken(l, p, h), f = u.renderer.rules.link_open ?? i;
  if (r !== void 0) {
    const l = u.renderer.rules.table_open ?? o, p = u.renderer.rules.table_close ?? c, h = u.utils.escapeHtml(r);
    u.renderer.rules.table_open = (d, b, m, y, g) => `<div class="${h}">${l(d, b, m, y, g)}`, u.renderer.rules.table_close = (d, b, m, y, g) => `${p(d, b, m, y, g)}</div>`;
  }
  if (a) {
    const l = u.renderer.rules.heading_open ?? s;
    u.renderer.rules.heading_open = (p, h, d, b, m) => {
      const y = p[h], g = p[h + 1];
      if (y !== void 0 && g?.type === "inline") {
        const x = (g.children ?? []).filter((k) => k.type === "text" || k.type === "code_inline").map((k) => k.content).join(""), _ = b.usedHeadingIds ?? /* @__PURE__ */ new Set();
        b.usedHeadingIds = _, y.attrSet("id", le(ce(x), _));
      }
      return l(p, h, d, b, m);
    };
  }
  return n && (u.renderer.rules.link_open = (l, p, h, d, b) => {
    const m = l[p];
    if (m === void 0) return f(l, p, h, d, b);
    const y = m.attrGet("href");
    return y !== null && Tn(y) && (m.attrSet("target", "_blank"), m.attrSet("rel", "noopener noreferrer")), f(l, p, h, d, b);
  }), u;
}, zn = (e, u = {}) => qn(u).render(e), Ln = ["innerHTML"], Bn = "markdown-content__table-scroll", Nn = Bu({ __name: "MarkdownContent", props: { source: {}, variant: { default: "body" }, openExternalLinksInNewTab: { type: Boolean, default: false }, generateHeadingIds: { type: Boolean, default: false } }, setup(e) {
  const u = e, t = Pe(() => ["markdown-content", `markdown-content--${u.variant}`]), n = Pe(() => zn(u.source, { openExternalLinksInNewTab: u.openExternalLinksInNewTab, tableWrapperClassName: Bn, generateHeadingIds: u.generateHeadingIds }));
  return (r, a) => (Pu(), Nu("div", { class: Ou(t.value), innerHTML: n.value }, null, 10, Ln));
} }), xe = $u(Nn, [["__scopeId", "data-v-e92936d2"]]), Mu = `# Markdown Content

Paragraph text with **strong** emphasis, *italic* emphasis, \`inline code\`, and a regular [link](/docs/getting-started).

Second paragraph with an external [OpenAI link](https://openai.com) that can opt into \`target="_blank"\`.

Third paragraph ends with a hard line break.  
This line should stay in the same paragraph after the explicit break.
This next line uses a soft
line break so the current wrapping behavior stays visible.

## Lists

- Bullet one
- Bullet two
- Nested items
  - Nested bullet
  - Another nested bullet with \`code\`

1. First item
2. Second item
3. Third item
   1. Nested ordered item
   2. Nested ordered item two

### Quotes

> Markdown content stays inside the parent layout.
>
> Second quoted paragraph keeps the block styling and spacing visible.
>
> - Nested bullet one
> - Nested bullet two with \`nested code\`

#### Heading Level 4

Compact heading level with ~~deleted text~~ and escaped markdown characters: \\*not italic\\*.

##### Heading Level 5

Angle-bracket autolinks still render through markdown syntax: <https://example.com> and <user@example.com>.

###### Heading Level 6

Inline code with special characters: \`const pattern = /<tag>\\s+\\*value\\*/u;\`

## Code Block

\`\`\`ts
export const message = 'hello markdown';
console.log(message);
\`\`\`

Indented code block:

    const indented = '<section data-kind="sample">';
    console.log(indented);

## Table

| Name | Value | Notes |
| --- | --- | --- |
| Alpha | 1 | Regular table content |
| Beta | 2 | Header background should clip cleanly |

## Aligned Table

| Left | Center | Right |
| :--- | :---: | ---: |
| left | centered | right |
| filled |  | trailing |
|  | empty left | 123 |

## Wide Table

| Column A | Column B | Column C | Column D | Column E | Column F |
| --- | --- | --- | --- | --- | --- |
| Very long project value that should stay inside the scroller | Another long value for overflow testing | Material-style wrapper | Rounded outline | Inner horizontal scroll | Layout stays stable |
| Short | Medium value | More content | More content | More content | More content |

## Images

![Markdown example image](https://placehold.co/960x540/png)

Long unbroken content for overflow-wrap checks:
https://example.com/some/really/really/really/really/really/really/long/path/without/breaks
supercalifragilisticexpialidociousMarkdownOverflowProbeWithoutNaturalBreakpoints

---

Raw HTML stays escaped: <div class="unsafe-html">not rendered as DOM</div>`, On = `## Wide Table

| Column A | Column B | Column C | Column D | Column E | Column F | Column G |
| --- | --- | --- | --- | --- | --- | --- |
| Very long value that should require horizontal scrolling inside the table wrapper | Another long value | More content | More content | More content | More content | More content |
| Second row with long content to prove the card width stays constrained | Another long value | More content | More content | More content | More content | More content |`, Pn = `# Markdown Content

Paragraph text with **strong** emphasis, *italic* emphasis, and a [regular link](/docs/getting-started).

- Bullet one
- Bullet two

> Markdown content stays inside the parent layout.

\`inline code\` and ~~deleted text~~ stay visible.`, Wn = { title: "shared/ui/MarkdownContent", component: xe, args: { source: Mu, variant: "body", openExternalLinksInNewTab: true }, argTypes: { variant: { control: "radio", options: ["body", "article", "compact"] } }, parameters: { layout: "padded" } }, Ne = (e, u) => (t) => ({ components: { MarkdownContent: xe, MDCard: Se }, setup: () => ({ args: t, kitchenSinkMarkdown: Mu, defaultVariant: e }), template: `
    <div style="max-width: 840px; width: 100%;">
      <MDCard variant="${u}" style="max-width: 720px; padding: 24px; gap: 0;">
        <MarkdownContent
          :source="kitchenSinkMarkdown"
          :variant="args.variant ?? defaultVariant"
          :open-external-links-in-new-tab="args.openExternalLinksInNewTab ?? true"
        />
      </MDCard>
    </div>
  ` }), ne = { render: Ne("body", "outlined") }, ae = { args: { variant: "article" }, render: Ne("article", "filled") }, ie = { args: { variant: "compact" }, render: Ne("compact", "outlined") }, se = { tags: ["visual"], render: (e) => ({ components: { MarkdownContent: xe, MDCard: Se }, setup: () => ({ args: e, wideTableMarkdown: On }), template: `
      <div style="max-width: 420px; width: 100%;">
        <MDCard
          data-testid="visual-markdown-content-wide-table"
          variant="outlined"
          style="max-width: 320px; padding: 20px; gap: 0;"
        >
          <MarkdownContent
            :source="wideTableMarkdown"
            variant="body"
            :open-external-links-in-new-tab="args.openExternalLinksInNewTab ?? true"
          />
        </MDCard>
      </div>
    ` }) }, oe = { tags: ["visual"], render: (e) => ({ components: { MarkdownContent: xe, MDCard: Se }, setup: () => ({ args: e, variantsOverviewMarkdown: Pn }), template: `
      <div
        data-testid="visual-markdown-content-variants"
        style="display: inline-grid; gap: 24px; justify-items: start; max-width: 840px; width: fit-content;"
      >
        <MDCard variant="outlined" style="max-width: 720px; padding: 24px; gap: 0;">
          <MarkdownContent
            :source="variantsOverviewMarkdown"
            variant="body"
            :open-external-links-in-new-tab="args.openExternalLinksInNewTab ?? true"
          />
        </MDCard>
        <MDCard variant="filled" style="max-width: 720px; padding: 28px; gap: 0;">
          <MarkdownContent
            :source="variantsOverviewMarkdown"
            variant="article"
            :open-external-links-in-new-tab="args.openExternalLinksInNewTab ?? true"
          />
        </MDCard>
        <MDCard variant="outlined" style="max-width: 640px; padding: 20px; gap: 0;">
          <MarkdownContent
            :source="variantsOverviewMarkdown"
            variant="compact"
            :open-external-links-in-new-tab="args.openExternalLinksInNewTab ?? true"
          />
        </MDCard>
      </div>
    ` }) };
ne.parameters = { ...ne.parameters, docs: { ...ne.parameters?.docs, source: { originalSource: `{
  render: renderInSurface('body', 'outlined')
}`, ...ne.parameters?.docs?.source } } };
ae.parameters = { ...ae.parameters, docs: { ...ae.parameters?.docs, source: { originalSource: `{
  args: {
    variant: 'article'
  },
  render: renderInSurface('article', 'filled')
}`, ...ae.parameters?.docs?.source } } };
ie.parameters = { ...ie.parameters, docs: { ...ie.parameters?.docs, source: { originalSource: `{
  args: {
    variant: 'compact'
  },
  render: renderInSurface('compact', 'outlined')
}`, ...ie.parameters?.docs?.source } } };
se.parameters = { ...se.parameters, docs: { ...se.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: args => ({
    components: {
      MarkdownContent,
      MDCard
    },
    setup: () => ({
      args,
      wideTableMarkdown
    }),
    template: \`
      <div style="max-width: 420px; width: 100%;">
        <MDCard
          data-testid="visual-markdown-content-wide-table"
          variant="outlined"
          style="max-width: 320px; padding: 20px; gap: 0;"
        >
          <MarkdownContent
            :source="wideTableMarkdown"
            variant="body"
            :open-external-links-in-new-tab="args.openExternalLinksInNewTab ?? true"
          />
        </MDCard>
      </div>
    \`
  })
}`, ...se.parameters?.docs?.source } } };
oe.parameters = { ...oe.parameters, docs: { ...oe.parameters?.docs, source: { originalSource: `{
  tags: ['visual'],
  render: args => ({
    components: {
      MarkdownContent,
      MDCard
    },
    setup: () => ({
      args,
      variantsOverviewMarkdown
    }),
    template: \`
      <div
        data-testid="visual-markdown-content-variants"
        style="display: inline-grid; gap: 24px; justify-items: start; max-width: 840px; width: fit-content;"
      >
        <MDCard variant="outlined" style="max-width: 720px; padding: 24px; gap: 0;">
          <MarkdownContent
            :source="variantsOverviewMarkdown"
            variant="body"
            :open-external-links-in-new-tab="args.openExternalLinksInNewTab ?? true"
          />
        </MDCard>
        <MDCard variant="filled" style="max-width: 720px; padding: 28px; gap: 0;">
          <MarkdownContent
            :source="variantsOverviewMarkdown"
            variant="article"
            :open-external-links-in-new-tab="args.openExternalLinksInNewTab ?? true"
          />
        </MDCard>
        <MDCard variant="outlined" style="max-width: 640px; padding: 20px; gap: 0;">
          <MarkdownContent
            :source="variantsOverviewMarkdown"
            variant="compact"
            :open-external-links-in-new-tab="args.openExternalLinksInNewTab ?? true"
          />
        </MDCard>
      </div>
    \`
  })
}`, ...oe.parameters?.docs?.source } } };
const Gn = ["Default", "Article", "Compact", "WideTable", "VariantsOverview"];
export {
  ae as Article,
  ie as Compact,
  ne as Default,
  oe as VariantsOverview,
  se as WideTable,
  Gn as __namedExportsOrder,
  Wn as default
};
