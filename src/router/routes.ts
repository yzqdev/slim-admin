import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from "vue-router";

import NotFound from "@/components/NotFound.vue";
import Layout from "@/layout/MainLayout.vue";
import AdminHome from "@/views/AdminHome.vue";
import UserProfile from "@/views/system/UserProfile.vue";
import UserManage from "@/views/system/UserManage.vue";
import CustomDirective from "@/views/others/CustomDirective.vue";
import Charts from "@/views/others/Charts.vue";
import Icons from "@/views/others/Icons.vue";
import Login from "@/views/Login.vue";
import Notice from "@/views/system/Notice.vue";
import ImageList from "@/views/system/ImageList.vue";
const assetRoute: RouteRecordRaw = {
  path: "/asset",
  component: Layout,
  meta: {
    title: "杂项",
    icon: "i-icon-park-outline-all-application",
  },
  children: [
    {
      path: "directives",
      component: CustomDirective,
      name: "Directives",
      meta: {
        title: "自定义指令",
      },
    },
    {
      path: "charts",
      component: Charts,
      name: "Charts",
      meta: {
        title: "图表",
        icon: "i-material-symbols-bar-chart-4-bars-rounded",
      },
    },
    {
      path: "icons",
      component: Icons,
      name: "Icons",
      meta: {
        title: "图标",
        icon: "i-icon-park-outline-grinning-face-with-tightly-closed-eyes-open-mouth",
      },
    },
    {
      path: "img-list",
      component: ImageList,
      name: "ImgList",
      meta: {
        title: "图库",
        icon: "i-icon-park-outline-picture-one",
      },
    },
  ],
};
const adminRoute: RouteRecordRaw = {
  path: "/admin",
  component: Layout,
  meta: {
    title: "首页",
    icon: "i-material-symbols-light-family-home",
  },
  children: [
    {
      path: "home",
      component: AdminHome,
      name: "AdminHome",
      meta: {
        title: "首页",
        icon: "i-icon-park-outline-dashboard-two",
      },
    },
    {
      path: "notice",
      component: Notice,
      name: "Notice",
      meta: {
        title: "通知公告",
        icon: "i-icon-park-outline-volume-notice",
      },
    },
    {
      path: "userManage",
      component: UserManage,
      name: "UserManage",
      meta: {
        title: "用户管理",
        icon: "i-icon-park-outline-every-user",
      },
    },
    {
      path: "profile",
      component: UserProfile,
      name: "Profile",
      meta: {
        title: "用户信息",
        icon: "i-icon-park-outline-user-positioning",
      },
    },
  ],
};

export const menuRoute: RouteRecordRaw[] = [adminRoute, assetRoute];
export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/admin/login" },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "404",
    },
  },
  { path: "/admin/login", component: Login, name: "Login" },
  ...menuRoute,
];
