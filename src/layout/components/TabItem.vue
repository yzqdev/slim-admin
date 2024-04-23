<script setup lang="ts">
import type { Tab } from "@/store/app";

const props = defineProps<{
  active?: boolean;
  tab: Tab;
}>();

const emit = defineEmits<{
  closeTab: [t: Tab];
}>();

const closeTab = () => {
  emit("closeTab", props.tab);
};
</script>

<template>
  <div class="tab" :class="{ active }">
    <div class="title">
      {{ tab.title }}
    </div>
    <div @click.stop="closeTab" class="close-icon" v-if="active && tab.closable">
      <svg width="16" height="16" stroke="#595959">
        <path d="M 4 4 L 12 12 M 12 4 L 4 12"></path>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tab {
  background: #f4f5f5;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
  padding: 6px 8px;
  max-width: 140px;
  min-width: 60px;

  font-size: 14px;
  transition: background-color 0.3s;

  .title {
    width: 100%;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @at-root .dark {
    .tab {
      &.active {
        background-color: #121212;

        .tabs-before-l,
        .tabs-before-r {
          fill: #121212;
        }
      }
    }
  }
  &.active {
    color: var(--el-color-primary);
    background-color: rgb(224, 239, 255);
    //transition: all 0.3s;
    //border-bottom: 2px solid var(--el-color-primary);

    .tabs-before-l,
    .tabs-before-r {
      fill: #fff;
    }
  }

  .close-icon {
    width: 16px;
    height: 16px;
    border-radius: 50%;

    &:hover {
      background-color: #eee;
    }
  }

  .tabs-before-l,
  .tabs-before-r {
    bottom: 0px;
    position: absolute;
    fill: transparent;
  }

  .tabs-before-l {
    left: -7px;
  }

  .tabs-before-r {
    right: -7px;
  }
}
</style>
