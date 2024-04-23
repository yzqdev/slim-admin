<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { type RouteRecordRaw } from "vue-router";
import { useAppStore, type Tab } from "@/store";

import { CloseBold } from "@element-plus/icons-vue";
import VTab from "./components/TabItem.vue";

const route = useRoute();
const router = useRouter();
const activePath = ref(route.path);
const appStore = useAppStore();
const { tabsChrome } = storeToRefs(appStore);

router.afterEach((to) => {
  //当前路由不执行
  activePath.value = to.path;
  pushThisRoute(to.path, to.meta.title as string, to.name as string);
});

const pushThisRoute = (path: string, title: string, pathName: string): void => {
  let tab: Tab = { path, title, closable: true, pathName };
  appStore.pushTabsChrome(tab);
};
//刷新时当前的页面
pushThisRoute(route.path, route.meta.title as string, route.name as string);

const clickTab = (t: Tab) => {
  if (t.path == activePath.value) {
    return;
  }
  router.push(t.path);
};
const removeTab = (t: Tab) => {
  if (tabsChrome.value.length == 1) {
    //最少保留一个
    return;
  }
  let r = appStore.removeTabChrome(t);
  if (r) {
    router.push(r.path);
  }
};

const removeAllTab = () => {
  router.push("/");
  appStore.removeAllTab();
};
</script>
<template>
  <div class="nav-tab shadow-md">
    <div ref="tabRef" class="tabs shadow-2xl">
      <VTab v-for="t in tabsChrome" :tab="t" :active="activePath === t.path" @click="clickTab(t)" @closeTab="removeTab" />
    </div>

    <div class="nav-action">
      <el-dropdown>
        <div class="more-btn">
          <el-icon>
            <MoreFilled />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="removeAllTab" :icon="CloseBold">关闭全部标签</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-tab {
  display: flex;
  align-items: center;
  border-top: 1px dashed #ebeef4;
  //background-color: #ebeef4;

  overflow-x: auto;
  overflow-y: hidden;
  .tabs {
    padding: 8px 10px;
    display: flex;
    width: 100%;

    .item {
    }
  }

  .tabs-main {
    cursor: pointer;
  }

  .tabs-close {
    border-radius: 50%;
    cursor: pointer;
  }

  .tabs-label {
    font-size: 14px;
    color: var(--system-primary-color);
    //#409eff
  }

  .nav-action {
    //width: 40px;
    //height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    .more-btn {
      cursor: pointer;
    }
  }

  @at-root .dark {
    .nav-tab {
      background-color: #000;
    }
  }
}
</style>
