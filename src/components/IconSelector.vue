<template>
  <el-popover trigger="click" placement="bottom" width="400">
    <template #reference>
      <el-button>
        <span v-if="selectItem">
          <i class="iconfont" :class="[selectItem]" style="font-size: 20px"></i>
        </span>
        {{ selectItem }}
      </el-button>
    </template>
    <el-scrollbar class="grid-wrapper">
      <section style="height: 300px" class="grid-icon">
        <div v-for="item of icons" :key="item">
          <div class="icons" @click="onIconClick(item)">
            <i class="iconfont" :class="[item]" style="font-size: 20px"></i>
          </div>
        </div>
      </section>
    </el-scrollbar>
    <div class="page">
      <el-pagination :page="currentPage" :page-size="pageSize" :total="itemCount" @current-change="onUpdatePage" />
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { computed, onMounted, toRef } from "vue";
import axios from "axios";
import { iconCss } from "@/constants";

const props = defineProps({
  onUpdateIcon: Function,
});

const emit = defineEmits(["selected"]);
const iconPrefix = "icon-";
const state = reactive({
  iconList: [],
  icons: [],
  currentPage: 1,
  pageSize: 40,
  selectItem: "点击我选择图标",
});
const { iconList, icons, currentPage, pageSize, selectItem } = toRefs(state);
onMounted(() => {
  axios.get(iconCss).then(({ data }) => {
    const regExp = new RegExp(`\\n\\.(${iconPrefix}.*?):before`, "g");
    let result;

    while ((result = regExp.exec(data))) {
      state.iconList.push(result[1]);
    }
    state.icons = state.iconList.slice(0, 40);
  });
});

const itemCount = computed(() => state.iconList.length);

function onUpdatePage(page: number) {
  currentPage.value = page;
  state.icons.length = 0;
  const start = (state.currentPage - 1) * state.pageSize;
  state.icons.push(...state.iconList.slice(start, start + state.pageSize));
}

const { onUpdateIcon } = props;

function onIconClick(item: any) {
  state.selectItem = item;
  if (onUpdateIcon) {
    onUpdateIcon(item);
  } else {
    emit("selected", item);
  }
}
</script>
<style lang="scss" scoped>
.grid-wrapper {
  .icon-wrapper {
    cursor: pointer;
    border: 1px solid #f5f5f5;
  }
  .grid-icon {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #f5f5f5;
    cursor: pointer;
  }
}
</style>
