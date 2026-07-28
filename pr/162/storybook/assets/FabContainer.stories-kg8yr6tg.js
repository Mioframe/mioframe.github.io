import { d as g, B as L, m as _, f as H, h as E, w as M, u as a, k as u, j as A, b, o as D, g as B, A as T, n as I, r as l, C as R } from "./iframe-08fgOXbT.js";
import { u as j, a as V, b as z, c as O } from "./index-Bq996Qaf.js";
import { i as U } from "./isUndefined-Dgw4-efh.js";
import { u as $, a as N, _ as W, b as q, o as G, s as J } from "./floating-ui.vue-CMr8MNuV.js";
import { u as K } from "./index-q3cnrSo6.js";
import { u as Q, d as X } from "./FabContainer.vue_vue_type_style_index_0_scoped_3ecc84a9_lang-BUzXJRhc.js";
import "./MDCircularProgressIndicator-DywZNdTd.js";
import "./MDOverlayTooltip.vue_vue_type_style_index_0_scoped_237db18c_lang-2xoZjtOl.js";
import "./useStateLayer-CYILdHL8.js";
import "./MDIconButton-DxpY3gQn.js";
import { _ as Y } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import { M as m } from "./MDExtendedFab-z0cvrrRg.js";
import "./preload-helper-PPVm8Dsz.js";
import "./MDSymbol-BgypoeVP.js";
import "./typography-C_Z8eobQ.js";
import "./main-BMjQffmQ.js";
const Z = ["aria-hidden"], ee = g({ __name: "FabContainer", props: { autoHide: { type: Boolean } }, setup(e) {
  const t = e, { autoHide: n } = L(t), s = A("fabContainer"), y = j(), r = l(), { directions: f } = V(y);
  _(() => {
    f.top ? r.value = "top" : f.bottom && (r.value = "bottom");
  });
  const { focused: v } = z(s), x = b(() => !n.value || U(r.value) || r.value === "top" || v.value), C = $(), F = Q(), { floatingStyles: w } = N(F, s, { placement: "bottom-end", strategy: "fixed", transform: false, middleware: [G(({ rects: { floating: c } }) => ({ mainAxis: -c.height })), J({ padding: 16 })], whileElementsMounted: q }), { height: S } = O(s, { height: 0, width: 0 }, { box: "border-box" }), P = b(() => ({ height: `${S.value}px` })), k = K();
  return (c, te) => (D(), H("div", { class: "fab-container fab-container__placeholder", style: u(P.value) }, [E(a(W), { container: s.value, to: a(C) }, { default: M(() => [B("div", { ref: "fabContainer", class: I(["fab-container__surface", { "fab-container__surface_auto-hide": a(n), "fab-container__surface_hidden": !x.value }]), style: u(a(w)), "aria-hidden": a(k) }, [T(c.$slots, "default", {}, void 0, true)], 14, Z)]), _: 3 }, 8, ["container", "to"])], 4));
} }), p = Y(ee, [["__scopeId", "data-v-3ecc84a9"]]), h = g({ name: "StoryPaneHost", props: { width: { type: String, default: "400px" }, height: { type: String, default: "500px" } }, setup(e, { slots: t }) {
  const n = l(null);
  return X(n), () => R("div", { ref: n, class: "story-pane-host", style: { width: e.width, height: e.height, display: "flex", flexDirection: "column", overflow: "auto", position: "relative", borderRadius: "16px", backgroundColor: "var(--md-sys-color-surface)" } }, t.default?.());
} }), Ce = { title: "Project UI/Buttons/FabContainer", component: p, parameters: { layout: "centered", docs: { description: { component: ["**Project-specific placement infrastructure.** `FabContainer` is not an official Material 3 component; it does not appear under any `components/*` Material 3 page and owns no FAB visual tokens or colors.", "", "It composes existing Material foundations (`shared/ui/Overlay` teleport/positioning, `shared/ui/Layout` pane-scroll context) to anchor a single `MDFab` or `MDExtendedFab` action to the bottom of the nearest scrollable pane, matching the Material floating-action-button placement guidance without reimplementing FAB anatomy.", "", "**Props**: `autoHide` (hides the floating action while scrolling down, restores on scroll up or focus-within).", "", "**Slots**: `default` (a single `MDFab` or `MDExtendedFab`).", "", "Consumers own placement decisions (whether to use it at all) and the FAB action itself; `FabContainer` only owns the floating/overlay geometry."].join(`
`) } } } }, d = { render: () => ({ components: { FabContainer: p, MDExtendedFab: m, StoryPaneHost: h }, template: `
      <div class="visual-checker-backdrop">
        <StoryPaneHost>
          <div style="height: 200px;" />
          <FabContainer>
            <MDExtendedFab label="Add" md-symbol="add" />
          </FabContainer>
        </StoryPaneHost>
      </div>
    ` }) }, o = { render: () => ({ components: { FabContainer: p, MDExtendedFab: m, StoryPaneHost: h }, setup() {
  const e = l(true);
  return { isLoading: e, loadContent: () => {
    e.value = false;
  } };
}, template: `
      <div id="fab-pane-host" class="visual-checker-backdrop" style="display: flex; flex-direction: column; gap: 8px;">
        <StoryPaneHost id="fab-test-pane" width="400px" height="500px">
          <div v-if="isLoading" style="height: 80px; display: flex; align-items: center; padding: 16px;">
            Loading...
          </div>
          <template v-else>
            <div
              v-for="i in 6"
              :key="i"
              style="height: 48px; display: flex; align-items: center; padding: 0 16px;"
            >
              Item {{ i }}
            </div>
          </template>
          <FabContainer>
            <MDExtendedFab label="Add" md-symbol="add" />
          </FabContainer>
        </StoryPaneHost>
        <button id="fab-load-content" type="button" @click="loadContent">Load content</button>
      </div>
    ` }) }, i = { render: () => ({ components: { FabContainer: p, MDExtendedFab: m, StoryPaneHost: h }, setup() {
  const e = l(true);
  return { isLoading: e, loadContent: () => {
    e.value = false;
  } };
}, template: `
      <div class="visual-checker-backdrop" style="display: flex; flex-direction: column; gap: 8px;">
        <div id="fab-two-pane-host" style="display: flex; gap: 8px;">
          <StoryPaneHost id="fab-pane-left" width="300px" height="400px">
            <div
              v-for="i in 4"
              :key="i"
              style="height: 48px; display: flex; align-items: center; padding: 0 16px;"
            >
              Left item {{ i }}
            </div>
          </StoryPaneHost>
          <StoryPaneHost id="fab-pane-right" width="300px" height="400px">
            <div v-if="isLoading" style="height: 80px; display: flex; align-items: center; padding: 16px;">
              Loading...
            </div>
            <template v-else>
              <div
                v-for="i in 4"
                :key="i"
                style="height: 48px; display: flex; align-items: center; padding: 0 16px;"
              >
                Right item {{ i }}
              </div>
            </template>
            <FabContainer>
              <MDExtendedFab label="Add" md-symbol="add" />
            </FabContainer>
          </StoryPaneHost>
        </div>
        <button id="fab-two-pane-load-content" type="button" @click="loadContent">Load content</button>
      </div>
    ` }) };
d.parameters = { ...d.parameters, docs: { ...d.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      FabContainer,
      MDExtendedFab,
      StoryPaneHost
    },
    template: \`
      <div class="visual-checker-backdrop">
        <StoryPaneHost>
          <div style="height: 200px;" />
          <FabContainer>
            <MDExtendedFab label="Add" md-symbol="add" />
          </FabContainer>
        </StoryPaneHost>
      </div>
    \`
  })
}`, ...d.parameters?.docs?.source } } };
o.parameters = { ...o.parameters, docs: { ...o.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      FabContainer,
      MDExtendedFab,
      StoryPaneHost
    },
    setup() {
      const isLoading = ref(true);
      const loadContent = () => {
        isLoading.value = false;
      };
      return {
        isLoading,
        loadContent
      };
    },
    template: \`
      <div id="fab-pane-host" class="visual-checker-backdrop" style="display: flex; flex-direction: column; gap: 8px;">
        <StoryPaneHost id="fab-test-pane" width="400px" height="500px">
          <div v-if="isLoading" style="height: 80px; display: flex; align-items: center; padding: 16px;">
            Loading...
          </div>
          <template v-else>
            <div
              v-for="i in 6"
              :key="i"
              style="height: 48px; display: flex; align-items: center; padding: 0 16px;"
            >
              Item {{ i }}
            </div>
          </template>
          <FabContainer>
            <MDExtendedFab label="Add" md-symbol="add" />
          </FabContainer>
        </StoryPaneHost>
        <button id="fab-load-content" type="button" @click="loadContent">Load content</button>
      </div>
    \`
  })
}`, ...o.parameters?.docs?.source }, description: { story: `Verifies that the FAB remains anchored to the pane bottom when async pane
content changes shift the placeholder position in the scroll flow.

Click "Load content" to simulate an async transition from loading state to
loaded content state. The visible FAB must stay at the pane bottom after
the placeholder moves.`, ...o.parameters?.docs?.description } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      FabContainer,
      MDExtendedFab,
      StoryPaneHost
    },
    setup() {
      const isLoading = ref(true);
      const loadContent = () => {
        isLoading.value = false;
      };
      return {
        isLoading,
        loadContent
      };
    },
    template: \`
      <div class="visual-checker-backdrop" style="display: flex; flex-direction: column; gap: 8px;">
        <div id="fab-two-pane-host" style="display: flex; gap: 8px;">
          <StoryPaneHost id="fab-pane-left" width="300px" height="400px">
            <div
              v-for="i in 4"
              :key="i"
              style="height: 48px; display: flex; align-items: center; padding: 0 16px;"
            >
              Left item {{ i }}
            </div>
          </StoryPaneHost>
          <StoryPaneHost id="fab-pane-right" width="300px" height="400px">
            <div v-if="isLoading" style="height: 80px; display: flex; align-items: center; padding: 16px;">
              Loading...
            </div>
            <template v-else>
              <div
                v-for="i in 4"
                :key="i"
                style="height: 48px; display: flex; align-items: center; padding: 0 16px;"
              >
                Right item {{ i }}
              </div>
            </template>
            <FabContainer>
              <MDExtendedFab label="Add" md-symbol="add" />
            </FabContainer>
          </StoryPaneHost>
        </div>
        <button id="fab-two-pane-load-content" type="button" @click="loadContent">Load content</button>
      </div>
    \`
  })
}`, ...i.parameters?.docs?.source }, description: { story: `Verifies that FabContainer anchors to its own pane when two independent
pane containers are present side by side. The FAB belongs to the right pane
and must remain positioned relative to that pane, not the left pane, the
viewport, or the document body.

Click "Load content" to simulate an async content change inside the right
pane. The FAB must stay anchored to the right pane bottom after the shift.`, ...i.parameters?.docs?.description } } };
const Fe = ["Default", "PaneAnchoringLoadingTransition", "TwoPaneLayout"];
export {
  d as Default,
  o as PaneAnchoringLoadingTransition,
  i as TwoPaneLayout,
  Fe as __namedExportsOrder,
  Ce as default
};
