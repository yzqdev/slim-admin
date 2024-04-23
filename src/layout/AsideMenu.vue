<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRoute, type RouteRecordRaw } from "vue-router";

import { useAppStore } from "@/store";
import { menuRouteFilter } from "@/router/routeToMenu";
import RouteMenu from "./components/RouteMenu.vue";
import { menuRoute } from "@/router/routes";
import { appName } from "@/constants";
const routeMenu: RouteRecordRaw[] = menuRouteFilter(menuRoute);

const menus = reactive(routeMenu);
const route = useRoute();
const appStore = useAppStore();
const { asideCollapse } = storeToRefs(appStore);
</script>

<template>
  <div class="aside">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="" v-if="asideCollapse" />
      <span class="flex justify-center items-center" v-else>
        <img style="width: 20px; margin-right: 6px; position: relative; top: 3px" src="@/assets/logo.svg" alt="" />
        {{ appName }}
      </span>
    </div>
    <el-menu class="menu" :collapse="asideCollapse" router text-color="#fff" background-color="#001529" :collapse-transition="false" :default-active="route.path">
      <RouteMenu :path="menu.path" :menu="menu" v-for="menu in menus" :key="menu.path" />
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.aside {
  border-right: 1px solid #dcdfe6;
  height: 100vh;
  color: white;
  overflow: hidden;
  background-color: #001529;
  .logo {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 40px;
    }
  }
  :deep(.el-menu) {
    .el-menu {
      color: white;
      background-color: #000c17;
    }

    .el-menu-item.is-active {
      background: var(--el-color-primary);
      color: white;
    }
  }
  .menu {
    height: 100%;
    //height: calc(100vh - 60px);
    overflow: hidden;
    border-right: none;
  }
}
</style>
