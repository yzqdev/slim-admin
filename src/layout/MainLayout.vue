<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store";
import { useMediaQuery } from "@vueuse/core";
import { minScreenMaxWidth } from "@/constants";
import AsideMenu from "@/layout/AsideMenu.vue";
import HeaderBar from "@/layout/HeaderBar.vue";
import TabsView from "@/layout/TagsView.vue";
import { useThemeStore } from "@/store";

const isMinScreen = useMediaQuery(`(max-width: ${minScreenMaxWidth}px)`);
const appStore = useAppStore();
const themeStore = useThemeStore();
const getCaches = computed((): string[] => {
  return appStore.tabsChrome.map((i) => i.pathName);
});
const { contentPadding } = storeToRefs(themeStore);
const { asideCollapse } = storeToRefs(appStore);
</script>

<template>
  <el-container class="main">
    <el-aside v-if="!isMinScreen" :width="asideCollapse ? '64px' : '250px'">
      <AsideMenu />
    </el-aside>
    <div v-else class="aside-drawer">
      <el-drawer :size="250" :with-header="false" :show-close="false" @close="appStore.toggleAside()" :modelValue="!asideCollapse" direction="ltr">
        <AsideMenu />
      </el-drawer>
    </div>
    <el-container>
      <el-header>
        <HeaderBar />
      </el-header>
      <TabsView></TabsView>
      <el-main>
        <div :class="[contentPadding ? 'm-4' : '']">
          <router-view v-slot="{ Component, route }">
            <keep-alive :include="getCaches">
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </router-view>
        </div>
      </el-main>
      <!--      <el-footer>Footer</el-footer>-->
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .el-header {
    height: 40px;
  }
  .el-aside {
    transition: 0.3s;
  }
  .aside-drawer {
    :deep(.el-drawer__body) {
      padding: 0 !important;
    }
  }
  .el-main {
    padding: 0;
  }
}
</style>
