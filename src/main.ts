import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import MdEditorV3 from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import "./index.css";
import { pinia } from "@/store";
import axios from "axios";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
import * as util from "@/utils/util";
import { setupDirectives } from "@/directives";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.config.globalProperties.$http = axios;
app.config.globalProperties.$util = util;
app.use(MdEditorV3);
setupDirectives(app);
app.use(VueViewer);
app.use(router);
app.use(pinia);
// import "./element.scss";
app.mount("#app");
