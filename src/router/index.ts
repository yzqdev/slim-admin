import { createRouter, createWebHashHistory } from "vue-router";
import { setDocumentTitle } from "@/utils/meta";
import { routes } from "@/router/routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  to.meta && typeof to.meta.title !== "undefined" && setDocumentTitle(`${to.meta.title} `);
  next();
});
export default router;
