<template>
  <el-aside width="12rem" :native-scrollbar="false" bordered class="sidebar">
    <el-menu
      :unique-opened="false"
      :default-active="defaultActive"
      class="side-menu"
      background-color="#001529"
      text-color="#fff"
      @open="handleOpen"
      :collapse-transition="false"
      @close="handleClose"
    >
      <router-link to="/" custom>
        <span class="logo">
          <img v-if="false" class="logo-icon" src="../assets/logo.png" />
          <span></span>
        </span>
      </router-link>
      <template v-for="item in menus">
        <template v-if="item.subs">
          <el-sub-menu :index="item.name" :key="item.name">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu
                v-if="subItem.subs"
                :index="subItem.name"
                :key="subItem.name"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  @click="gotoRoute(subItem)"
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item
                @click="gotoRoute(subItem)"
                v-else
                :index="subItem.name"
                :key="subItem.name"
              >
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item
            @click="gotoRoute(item)"
            :index="item.name"
            :key="item.name"
          >
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  CreditCard,
  HomeFilled,
  User,
  PieChart,
  AlarmClock,
  ArrowDown,
} from "@element-plus/icons-vue";

import { useRoute, RouterLink, useRouter } from "vue-router";
import { Menu } from "@/components/type";
import { useThemeStore } from "@/store/themeConfig";

let defaultActive = $ref<string>("AdminHome");
const router = useRouter();
const route = useRoute();
let themeStore = useThemeStore();
let defaultMenu = [
  { index: "/home", name: "AdminHome", title: "首页", icon: HomeFilled },
  {
    index: "/setting",
    name: "task",
    title: "管理",
    icon: "aa",
    subs: [
      { index: "Profile", name: "Profile", title: "用户信息" },
      { index: "/userManage", name: "UserManage", title: "用户管理" },
      { index: "/notice", name: "Notice", title: `通知公告` },
    ],
  },
  {
    index: "/others",
    name: "settings",
    title: "功能组件",
    icon: "aa",
    subs: [
      { index: "/Charts", name: "Charts", title: "图表" },
      { index: "/ImgList", name: "ImgList", title: "图库" },
      { index: "/Icons", name: "Icons", title: `图标` },
      { index: "/Directives", name: "Directives", title: `指令` },
    ],
  },
];
let menus = $ref(defaultMenu);

function gotoRoute(params: any) {
  router.push({ name: params.name });
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
let themeConfig = $computed(() => {
  return themeStore.$state;
});
watch(
  themeConfig,
  (val, oldVal) => {
    if (val.dark) {
      console.log(`%cdark`, `color:red;font-size:16px;background:transparent`);
    } else {
    }
  },
  { immediate: true }
);
watch(
  route,
  (val, oldVal) => {
    defaultActive = val.name;
    console.log("move to ", val.name);
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.sidebar {
  width: 15rem;
  background-color: #001529;
  height: 100%;
  .logo {
    position: sticky;
    top: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    text-align: center;
    font-size: 1.8em;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    background: #001529;
    color: white;
    .logo-icon {
      width: 2rem;
      height: 2rem;
    }
  }
  :deep(.el-menu) {
    .el-menu {
      background-color: #000c17;
    }
    .el-menu-item.is-active {
      background: var(--el-color-primary);
      color: white;
    }
  }
}

.side-menu {
  height: 90vh;
}
</style>
