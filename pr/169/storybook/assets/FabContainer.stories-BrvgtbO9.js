import { d as p, A as c, r as s } from "./iframe-BunZ6L-5.js";
import { F as o, d as m } from "./FabContainer-Bjx2YsbO.js";
import { M as d } from "./MDExtendedFab-CWpBQVdK.js";
import "./preload-helper-PPVm8Dsz.js";
import "./useStateLayer-DKHZottX.js";
import "./_plugin-vue_export-helper-DlAUqK2U.js";
import "./isUndefined-Dgw4-efh.js";
import "./MDOverlayTooltip-BHbqCA2z.js";
import "./typography-qm14BBLM.js";
import "./MDSymbol-B8X8ggct.js";
import "./MDButton-CBELW13G.js";
import "./MDCircularProgressIndicator-ZuQHwcY_.js";
import "./MDFab-tlKdDndz.js";
import "./MDIconButton-CPPri3Ap.js";
import "./useLocalSettings-kTsz5G_a.js";
const r = p({ name: "StoryPaneHost", props: { width: { type: String, default: "400px" }, height: { type: String, default: "500px" } }, setup(e, { slots: i }) {
  const l = s(null);
  return m(l), () => c("div", { ref: l, class: "story-pane-host", style: { width: e.width, height: e.height, display: "flex", flexDirection: "column", overflow: "auto", position: "relative", borderRadius: "16px", backgroundColor: "var(--md-sys-color-surface)" } }, i.default?.());
} }), H = { title: "Project UI/Buttons/FabContainer", component: o, parameters: { layout: "centered", docs: { description: { component: ["**Project-specific placement infrastructure.** `FabContainer` is not an official Material 3 component; it does not appear under any `components/*` Material 3 page and owns no FAB visual tokens or colors.", "", "It composes existing Material foundations (`shared/ui/Overlay` teleport/positioning, `shared/ui/Layout` pane-scroll context) to anchor a single `MDFab` or `MDExtendedFab` action to the bottom of the nearest scrollable pane, matching the Material floating-action-button placement guidance without reimplementing FAB anatomy.", "", "**Props**: `autoHide` (hides the floating action while scrolling down, restores on scroll up or focus-within).", "", "**Slots**: `default` (a single `MDFab` or `MDExtendedFab`).", "", "Consumers own placement decisions (whether to use it at all) and the FAB action itself; `FabContainer` only owns the floating/overlay geometry."].join(`
`) } } } }, a = { render: () => ({ components: { FabContainer: o, MDExtendedFab: d, StoryPaneHost: r }, template: `
      <div class="visual-checker-backdrop">
        <StoryPaneHost>
          <div style="height: 200px;" />
          <FabContainer>
            <MDExtendedFab label="Add" md-symbol="add" />
          </FabContainer>
        </StoryPaneHost>
      </div>
    ` }) }, t = { render: () => ({ components: { FabContainer: o, MDExtendedFab: d, StoryPaneHost: r }, setup() {
  const e = s(true);
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
    ` }) }, n = { render: () => ({ components: { FabContainer: o, MDExtendedFab: d, StoryPaneHost: r }, setup() {
  const e = s(true);
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
a.parameters = { ...a.parameters, docs: { ...a.parameters?.docs, source: { originalSource: `{
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
}`, ...a.parameters?.docs?.source } } };
t.parameters = { ...t.parameters, docs: { ...t.parameters?.docs, source: { originalSource: `{
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
}`, ...t.parameters?.docs?.source }, description: { story: `Verifies that the FAB remains anchored to the pane bottom when async pane
content changes shift the placeholder position in the scroll flow.

Click "Load content" to simulate an async transition from loading state to
loaded content state. The visible FAB must stay at the pane bottom after
the placeholder moves.`, ...t.parameters?.docs?.description } } };
n.parameters = { ...n.parameters, docs: { ...n.parameters?.docs, source: { originalSource: `{
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
}`, ...n.parameters?.docs?.source }, description: { story: `Verifies that FabContainer anchors to its own pane when two independent
pane containers are present side by side. The FAB belongs to the right pane
and must remain positioned relative to that pane, not the left pane, the
viewport, or the document body.

Click "Load content" to simulate an async content change inside the right
pane. The FAB must stay anchored to the right pane bottom after the shift.`, ...n.parameters?.docs?.description } } };
const M = ["Default", "PaneAnchoringLoadingTransition", "TwoPaneLayout"];
export {
  a as Default,
  t as PaneAnchoringLoadingTransition,
  n as TwoPaneLayout,
  M as __namedExportsOrder,
  H as default
};
