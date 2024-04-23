<template>
  <icon-selector @selected="onSelectedIcon" />
  <h4>下面是可用的图标</h4>
  <div class="mt-4 flex flex-wrap gap-4">
    <span class="flex items-center justify-center p-2 cursor-pointer border-[var(--el-border-color)] border border-solid" v-for="item in iconList" @click="selectIcon(item)">
      <i class="iconfont" :class="[item]" style="font-size: 2rem"></i>
    </span>

    <div>uno icons</div>
    <div>
      <div :class="['text-2xl', item]" v-for="item in unoIcons"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { iconCss } from "@/constants";

function onSelectedIcon(item: any) {
  ElMessage({ type: "success", message: `选择了${item}` });
}

const state = reactive({
  iconList: [],
  unoIcons: [
    "i-material-symbols-settings-outline",
    "i-material-symbols-bar-chart-4-bars-rounded",
    "i-material-symbols-light-family-home",
    "i-icon-park-outline-all-application",
    "i-icon-park-outline-picture-one",
    "i-icon-park-outline-grinning-face-with-tightly-closed-eyes-open-mouth",
    "i-icon-park-outline-full-screen",
    "i-icon-park-outline-volume-notice",
    "i-icon-park-outline-user-positioning",
    "i-icon-park-outline-every-user",
    "i-icon-park-outline-dashboard-two",
  ],
});
const { iconList, unoIcons } = toRefs(state);
const iconPrefix = "icon-";

function selectIcon(item: string) {
  const iconCode = `<i class="iconfont ${item}" style="font-size: 1.5rem;"></i>`;
  navigator.clipboard.writeText(iconCode).then((res) => {
    ElMessage({ type: "success", message: `选择了${iconCode}` });
  });
}

onMounted(() => {
  axios.get(iconCss).then(({ data }) => {
    const regExp = new RegExp(`\\n\\.(${iconPrefix}.*?):before`, "g");
    let result;

    while ((result = regExp.exec(data))) {
      state.iconList.push(result[1]);
    }
  });
});
</script>

<style lang="scss" scoped></style>
