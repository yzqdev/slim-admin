<template>
  <icon-selector @selected="onSelectedIcon" />
  <h4>下面是可用的图标</h4>
  <div class="mt-4 flex flex-wrap gap-4">
    <span
      class="flex items-center justify-center p-2 cursor-pointer border-[var(--el-border-color)] border border-solid"
      v-for="item in iconList"
      @click="selectIcon(item)"
    >
      <i class="iconfont" :class="[item]" style="font-size: 2rem"></i>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";

import axios from "axios";
import { iconCss } from "@/constants";

function onSelectedIcon(item: any) {
  ElMessage({ type: "success", message: `选择了${item}` });
}

let iconPrefix = "icon-";
let iconList = $ref<string[]>([]);
function selectIcon(item: string) {
  let iconCode = `<i class="iconfont ${item}" style="font-size: 1.5rem;"></i>`;
  navigator.clipboard.writeText(iconCode).then((res) => {
    ElMessage({ type: "success", message: `选择了${iconCode}` });
  });
}
onMounted(() => {
  axios.get(iconCss).then(({ data }) => {
    const regExp = new RegExp(`\\n\\.(${iconPrefix}.*?):before`, "g");
    let result;

    while ((result = regExp.exec(data))) {
      iconList.push(result[1]);
    }
  });
});
</script>

<style lang="scss" scoped></style>
