<template>
  <div v-if="showFooter" class="h-12 flex justify-center items-center">
    <span>Copyright © 2021-2022 yzqdev</span>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/themeConfig";

let themeStore = useThemeStore();
let showFooter = $computed(() => {
  return themeStore.showFooter;
});
</script>

<style lang="scss" scoped></style>
