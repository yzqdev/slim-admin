<script setup lang="ts">
import zhCn from "element-plus/es/locale/lang/zh-cn";

const locale = ref(zhCn);
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<style lang="scss"></style>
