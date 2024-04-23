<script setup lang="ts">
import { useThemeStore } from "@/store";

const visible = defineModel<boolean>();

const themeStore = useThemeStore();
const { contentPadding } = storeToRefs(themeStore);
watch(contentPadding, (newValue, oldValue) => {
  themeStore.contentPadding = newValue;
});
</script>

<template>
  <el-drawer v-model="visible" title="修改配置" :size="350">
    <el-divider>主题配置</el-divider>
    <el-switch v-model="contentPadding" active-text="开启padding" inactive-text="关闭padding" />
  </el-drawer>
</template>

<style scoped lang="scss"></style>
