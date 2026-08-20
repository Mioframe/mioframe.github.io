import { D as l, C as h, y as r } from "./iframe-nwOCuYmc.js";
import { u as w } from "./useLocalSettings-BbvVsZGG.js";
import { c as u, t as v } from "./index-3buOwQeW.js";
const g = (t) => /iPhone|iPad|iPod/.test(t) && /WebKit/.test(t) && !/CriOS|FxiOS/.test(t) ? "safari-ios" : /Chrome\//.test(t) && !/Chromium\/|Edg\/|OPR\//.test(t) ? /Android/.test(t) ? "chrome-android" : "chrome-desktop" : "unknown", I = { "safari-ios": "https://support.apple.com/guide/iphone/bookmark-favorite-webpages-iph42ab2f3a7/ios", "chrome-android": "https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid", "chrome-desktop": "https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop", unknown: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Installing" }, S = (t) => I[t], D = () => window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true, P = u(() => {
  const t = l(null), s = l(D());
  return { retainedPrompt: t, isInstalledForSession: s };
}), b = 720 * 60 * 60 * 1e3, k = 2 ** 31 - 1, C = u(() => {
  const { retainedPrompt: t, isInstalledForSession: s } = P(), { settings: n, isFinished: m } = w(), d = r(() => t.value !== null), a = l(Date.now());
  let o = null;
  const c = (e) => {
    const i = e - Date.now();
    if (i <= 0) {
      a.value = Date.now();
      return;
    }
    o = setTimeout(() => {
      a.value = Date.now(), o = null, c(e);
    }, Math.min(i, k));
  };
  h(() => n.value.pwaInstallWidgetDismissedUntil, (e) => {
    o !== null && (clearTimeout(o), o = null), e !== void 0 && c(e);
  }, { immediate: true }), v(() => {
    o !== null && (clearTimeout(o), o = null);
  });
  const p = r(() => {
    if (!m.value || s.value) return false;
    const e = n.value.pwaInstallWidgetDismissedUntil;
    return !(e !== void 0 && a.value < e);
  }), f = r(() => !s.value);
  return { hasRetainedPrompt: d, isHomeWidgetVisible: p, isSettingsEntryVisible: f, runInstallAction: async () => {
    const e = t.value;
    if (e) {
      try {
        await e.prompt();
      } finally {
        t.value = null;
      }
      return;
    }
    const i = S(g(navigator.userAgent));
    window.open(i, "_blank", "noopener,noreferrer");
  }, dismissHomeWidget: () => {
    n.value.pwaInstallWidgetDismissedUntil = Date.now() + b;
  } };
});
export {
  P as a,
  C as u
};
