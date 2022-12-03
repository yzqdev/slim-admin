<template>
  <el-main class="p-4 h-full bg-[#f5f6f7]">
    <div
      class="min-h-[calc(100%-4rem)]"
      :class="[themeConfig.contentPadding ? 'bg-white p-6' : '']"
    >
      <router-view />
    </div>
  </el-main>
</template>
<script setup lang="ts">
import { useThemeStore } from "@/store/themeConfig";

let themeStore = useThemeStore();
let themeConfig = $computed(() => {
  return themeStore.$state;
});
</script>
<style lang="scss" scoped></style>
