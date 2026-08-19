import { d as g, B as H, H as M, c as P, a as k, w as E, i as o, v as m, j as L, y as v, o as _, b as D, s as V, h as T, r as l, Z } from "./iframe-DDkSuJan.js";
import "./MDButton.vue_vue_type_style_index_0_scoped_4eb981d2_lang-DV1aMrhv.js";
import "./MDLoadingIndicator.vue_vue_type_style_index_0_scoped_fd42f7e0_lang-ScYAOCNP.js";
import "./MDCheckbox.vue_vue_type_style_index_0_scoped_45affbd6_lang-BcMr9jHw.js";
import "./fab-BM7C4Glz.js";
import { M as h } from "./MDExtendedFloatingActionButton-BgSvplIh.js";
import "./MDSwitch.vue_vue_type_style_index_0_scoped_579f9506_lang-BGea3e5O.js";
import { d as j, j as I, k as R, h as z } from "./index-DscIcJBt.js";
import { i as O } from "./isUndefined-Dgw4-efh.js";
import { b as U } from "./main-TFyAOPvb.js";
import { u as $, a as N, _ as W, b as q, s as G } from "./MDSymbol-9TBSrjmB.js";
import { a as J } from "./index-BvLzgPRu.js";
import { u as K, d as Q } from "./FabContainer.vue_vue_type_style_index_0_scoped_7d3751a5_lang-BAu_aIS6.js";
import "./MDIconButton-E0wteWoC.js";
import "./useStateLayer-CzWujM1l.js";
import "./useLocalSettings-BjlaATIh.js";
import { _ as X } from "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./preload-helper-PPVm8Dsz.js";
import "./core-CHv0XPlm.js";
const Y = ["aria-hidden"], tt = g({ __name: "FabContainer", props: { autoHide: { type: Boolean } }, setup(t) {
  const e = t, { autoHide: n } = H(e), s = L("fabContainer"), x = j(), r = l(), { directions: f } = I(x);
  M(() => {
    f.top ? r.value = "top" : f.bottom && (r.value = "bottom");
  });
  const { focused: y } = R(s), b = v(() => !n.value || O(r.value) || r.value === "top" || y.value), C = U(), F = K(), { floatingStyles: w } = $(F, s, { placement: "bottom-end", strategy: "fixed", transform: false, middleware: [q(({ rects: { floating: p } }) => ({ mainAxis: -p.height })), G({ padding: 16 })], whileElementsMounted: N }), { height: B } = z(s, { height: 0, width: 0 }, { box: "border-box" }), S = v(() => ({ height: `${B.value}px` })), A = J();
  return (p, et) => (_(), P("div", { class: "fab-container fab-container__placeholder", style: m(S.value) }, [k(o(W), { container: s.value, to: o(C) }, { default: E(() => [D("div", { ref: "fabContainer", class: V(["fab-container__surface", { "fab-container__surface_auto-hide": o(n), "fab-container__surface_hidden": !b.value }]), style: m(o(w)), "aria-hidden": o(A) }, [T(p.$slots, "default", {}, void 0, true)], 14, Y)]), _: 3 }, 8, ["container", "to"])], 4));
} }), c = X(tt, [["__scopeId", "data-v-7d3751a5"]]), u = g({ name: "StoryPaneHost", props: { width: { type: String, default: "400px" }, height: { type: String, default: "500px" } }, setup(t, { slots: e }) {
  const n = l(null);
  return Q(n), () => Z("div", { ref: n, class: "story-pane-host", style: { width: t.width, height: t.height, display: "flex", flexDirection: "column", overflow: "auto", position: "relative", borderRadius: "16px", backgroundColor: "var(--md-sys-color-surface)" } }, e.default?.());
} }), Bt = { title: "Project UI/Buttons/FabContainer", component: c, parameters: { layout: "centered", docs: { description: { component: ["**Project-specific placement infrastructure.** `FabContainer` is not an official Material 3 component; it does not appear under any `components/*` Material 3 page and owns no FAB visual tokens or colors.", "", "It composes existing Material foundations (`shared/ui/Overlay` teleport/positioning, `shared/ui/Layout` pane-scroll context) to anchor a single `MDFab` or `MDExtendedFloatingActionButton` action to the bottom of the nearest scrollable pane, matching the Material floating-action-button placement guidance without reimplementing FAB anatomy.", "", "**Props**: `autoHide` (hides the floating action while scrolling down, restores on scroll up or focus-within).", "", "**Slots**: `default` (a single `MDFab` or `MDExtendedFloatingActionButton`).", "", "Consumers own placement decisions (whether to use it at all) and the FAB action itself; `FabContainer` only owns the floating/overlay geometry."].join(`
`) } } } }, d = { render: () => ({ components: { FabContainer: c, MDExtendedFloatingActionButton: h, StoryPaneHost: u }, template: `
      <div class="visual-checker-backdrop">
        <StoryPaneHost>
          <div style="height: 200px;" />
          <FabContainer>
            <MDExtendedFloatingActionButton>
              <template #icon>
                <svg aria-hidden="true" fill="currentColor" focusable="false" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" />
                </svg>
              </template>
              Add
            </MDExtendedFloatingActionButton>
          </FabContainer>
        </StoryPaneHost>
      </div>
    ` }) }, a = { render: () => ({ components: { FabContainer: c, MDExtendedFloatingActionButton: h, StoryPaneHost: u }, setup() {
  const t = l(true);
  return { isLoading: t, loadContent: () => {
    t.value = false;
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
            <MDExtendedFloatingActionButton>
              <template #icon>
                <svg aria-hidden="true" fill="currentColor" focusable="false" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" />
                </svg>
              </template>
              Add
            </MDExtendedFloatingActionButton>
          </FabContainer>
        </StoryPaneHost>
        <button id="fab-load-content" type="button" @click="loadContent">Load content</button>
      </div>
    ` }) }, i = { render: () => ({ components: { FabContainer: c, MDExtendedFloatingActionButton: h, StoryPaneHost: u }, setup() {
  const t = l(true);
  return { isLoading: t, loadContent: () => {
    t.value = false;
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
              <MDExtendedFloatingActionButton>
                <template #icon>
                  <svg aria-hidden="true" fill="currentColor" focusable="false" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" />
                  </svg>
                </template>
                Add
              </MDExtendedFloatingActionButton>
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
      MDExtendedFloatingActionButton,
      StoryPaneHost
    },
    template: \`
      <div class="visual-checker-backdrop">
        <StoryPaneHost>
          <div style="height: 200px;" />
          <FabContainer>
            <MDExtendedFloatingActionButton>
              <template #icon>
                <svg aria-hidden="true" fill="currentColor" focusable="false" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" />
                </svg>
              </template>
              Add
            </MDExtendedFloatingActionButton>
          </FabContainer>
        </StoryPaneHost>
      </div>
    \`
  })
}`, ...d.parameters?.docs?.source } } };
a.parameters = { ...a.parameters, docs: { ...a.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      FabContainer,
      MDExtendedFloatingActionButton,
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
            <MDExtendedFloatingActionButton>
              <template #icon>
                <svg aria-hidden="true" fill="currentColor" focusable="false" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" />
                </svg>
              </template>
              Add
            </MDExtendedFloatingActionButton>
          </FabContainer>
        </StoryPaneHost>
        <button id="fab-load-content" type="button" @click="loadContent">Load content</button>
      </div>
    \`
  })
}`, ...a.parameters?.docs?.source }, description: { story: `Verifies that the FAB remains anchored to the pane bottom when async pane
content changes shift the placeholder position in the scroll flow.

Click "Load content" to simulate an async transition from loading state to
loaded content state. The visible FAB must stay at the pane bottom after
the placeholder moves.`, ...a.parameters?.docs?.description } } };
i.parameters = { ...i.parameters, docs: { ...i.parameters?.docs, source: { originalSource: `{
  render: () => ({
    components: {
      FabContainer,
      MDExtendedFloatingActionButton,
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
              <MDExtendedFloatingActionButton>
                <template #icon>
                  <svg aria-hidden="true" fill="currentColor" focusable="false" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" />
                  </svg>
                </template>
                Add
              </MDExtendedFloatingActionButton>
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
const St = ["Default", "PaneAnchoringLoadingTransition", "TwoPaneLayout"];
export {
  d as Default,
  a as PaneAnchoringLoadingTransition,
  i as TwoPaneLayout,
  St as __namedExportsOrder,
  Bt as default
};
