<template>
  <el-aside width="15rem" :native-scrollbar="false" bordered class="sidebar">
    <router-link to="/" custom>
      <span class="logo">
        <img class="logo-icon" src="../assets/SG_Logo.ico" />
        <span>Snap</span>
      </span>
    </router-link>
    <el-menu
      :default-active="defaultActive"
      class="side-menu"
      @open="handleOpen"
      :collapse-transition="false"
      @close="handleClose"
      ><el-menu-item index="home" @click="gotoRoute('home')">
        <el-icon>
          <icon-menu />
        </el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item-group>
        <template #title><span>管理</span></template>
        <el-menu-item index="notice" @click="gotoRoute('notice')">
          <el-icon>
            <icon-menu />
          </el-icon>
          <template #title>通知公告</template>
        </el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { h, ref, computed, watchEffect, Component, watch } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

import { useStore } from "vuex";
import { useRoute, RouterLink, useRouter } from "vue-router";
import { Menu } from "../components/type";

let defaultActive = $ref("home");
const router = useRouter();
const route = useRoute();
let currentKey = $ref("");
let expandedKeys = $ref([]);
function gotoRoute(params: string) {
  console.log("cur route", route.name);
  console.log(params);
  router.push({ name: params });
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
}
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

  .logo-icon {
    width: 2rem;
    height: 2rem;
  }
}

.side-menu {
  height: 90vh;
}

.logo svg {
  flex: 0 0 32px;
  height: 32px;
  margin-right: 12px;
  transition: margin 0.3s var(--bezier);
}

.n-layout-sider--collapsed .logo svg {
  margin-right: 0;
}
</style>
