<script setup lang="ts">
import { type RouteRecordRaw } from "vue-router";
import RenderIcon from "@/layout/components/renderIcon";

defineProps<{
  menu: RouteRecordRaw;
  path: string;
}>();
</script>

<template>
  <el-sub-menu v-if="menu.children && menu.children.length !== 0" :index="path">
    <template #title>
      <render-icon :icon-name="menu.meta.icon" class="mr-2"></render-icon>
      <span>{{ menu.meta.title ? menu.meta.title : "" }}</span>
    </template>
    <RouteMenu v-for="m in menu.children" :menu="m" :key="m.path" :path="path + '/' + m.path" />
  </el-sub-menu>
  <el-menu-item v-else :index="menu.redirect ? menu.redirect : path">
    <render-icon :icon-name="menu.meta.icon" class="mr-2"></render-icon>
    <span>{{ menu.meta.title ? menu.meta.title : "" }}</span>
  </el-menu-item>
</template>

<style scoped></style>
