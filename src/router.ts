import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import { setDocumentTitle } from "./utils/meta";
import NotFound from "./components/NotFound.vue";
import Layout from "./layout/Index.vue";
import Main from "./views/Main.vue";
import UserProfile from "./views/UserProfile.vue";
import UserManage from "./views/UserManage.vue";
import Login from "./views/Login.vue";
import Notice from "./views/Notice.vue";
let routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/admin/login" },
  { path: "/admin/login", component: Login, name: "login" },

  {
    path: "/admin",
    component: Layout,

    children: [
      { path: "home", component: Main, name: "adminHome" },
      { path: "notice", component: Notice, name: "notice" },
      { path: "userManage", component: UserManage, name: "userManage" },
      { path: "profile", component: UserProfile, name: "profile" },

      { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  to.meta &&
    typeof to.meta.title !== "undefined" &&
    setDocumentTitle(`${to.meta.title} `);
  next();
});
export default router;
