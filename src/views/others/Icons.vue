<template>
  <icon-selector @selected="onSelectedIcon" />
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
function onSelectedIcon(item: any) {
  console.log(`%c父组件`, `color:red;font-size:16px;background:transparent`);
  console.log(item);
  ElMessage({ type: "success", message: `选择了${item}` });
}
</script>

<style scoped></style>
