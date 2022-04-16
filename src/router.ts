import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { setDocumentTitle } from "./utils/meta";
import NotFound from "./components/NotFound.vue";
import Home from "./layout/Home.vue";
import Main from "./views/Main.vue";
import  Login from './views/Login.vue'
import Notice from "./views/Notice.vue";
let routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/admin/login" },
  { path: "/admin/login",   component: Login, name: "login" },

  {
    path: "/admin",
    component: Home,

    children: [
      { path: "home", component: Main, name: "home" },
      { path: "notice", component: Notice, name: "notice" },

      { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  to.meta &&
    typeof to.meta.title !== "undefined" &&
    setDocumentTitle(`${to.meta.title} `);
  next();
});
export default router;
