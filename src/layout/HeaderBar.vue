<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store";
import { useUserStore } from "@/store";
import { useFullscreen, useMediaQuery } from "@vueuse/core";
import Breadcrumb from "@/layout/components/Breadcrumb.vue";

import ThemeSwitch from "@/layout/components/themeSwitch/Index.vue";
import SettingPanel from "@/layout/SettingPanel.vue";
//===========
const appStore = useAppStore();
const router = useRouter();
const { asideCollapse } = storeToRefs(appStore);
//==========
const userStore = useUserStore();
const { username } = storeToRefs(userStore);
const state = reactive({
  settingVisible: false,
});
const { settingVisible } = toRefs(state);
const isMobile = useMediaQuery(`(max-width: 750px)`);
const { isFullscreen, toggle } = useFullscreen();
const loginOut = () => {
  userStore.logout();
  router.push({ name: "Login" });
};
</script>

<template>
  <div class="header">
    <div class="header-left">
      <el-icon @click="appStore.toggleAside()" :size="22" :class="asideCollapse ? '' : 'aside-collapse'">
        <expand />
      </el-icon>

      <Breadcrumb v-if="!isMobile" />
    </div>
    <div class="header-right">
      <div class="i-icon-park-outline-full-screen cursor-pointer" @click="toggle"></div>
      <div class="i-material-symbols-settings-outline mx-2 cursor-pointer" @click="settingVisible = true"></div>

      <el-dropdown>
        <span class="cursor-pointer">
          {{ username }}
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <ThemeSwitch v-if="false" @toggleDarkMode="appStore.toggleDarkMode()" />
    </div>
  </div>
  <setting-panel v-model="settingVisible"></setting-panel>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .aside-collapse {
    transform: rotate(180deg);
  }
  .header-left {
    display: flex;
    .breadcrumb {
      line-height: 2;
      margin-left: 20px;
    }
  }
  .header-right {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
