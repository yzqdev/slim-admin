import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MdEditorV3 from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import "./index.css";
import { pinia } from "@/store";
import axios from "axios";

import * as util from "util";
import { setupDirectives } from "@/directives";
const app = createApp(App);
app.config.globalProperties.$http = axios;
app.config.globalProperties.$util = util;
app.use(MdEditorV3);
setupDirectives(app);
app.use(router);
app.use(pinia);
app.mount("#app");
