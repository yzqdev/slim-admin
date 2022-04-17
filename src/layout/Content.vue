<template>
  <el-main class="content">
    <div class="wrap" :class="[themeConfig.contentPadding?'extra':'']">
      <router-view />
    </div>
  </el-main>
</template>
 <script setup lang="ts">
 import {useStore} from "vuex";

 let store=useStore()
let themeConfig=$computed(() => {
  return store.getters.themeConfig
})

 </script>
<style lang="scss" scoped>
.content {
  padding: 1.5rem;
  height: 100%;
  background-color: #f5f6f7;
  .wrap {
    min-height: calc(100% - 4rem);

  }
  .extra{
    background-color: white;
    padding: 1.5rem;
  }
}
</style>
