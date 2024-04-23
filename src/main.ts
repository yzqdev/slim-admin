import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import "./index.scss";
import axios from "axios";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
import "uno.css";
import { setupDirectives } from "@/directives";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createPinia } from "pinia";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.config.globalProperties.$http = axios;

setupDirectives(app);
app.use(VueViewer);
app.use(router);
const pinia = createPinia();
app.use(pinia);
// import "./element.scss";
app.mount("#app");
