<template>
  <el-container>

      <sidebar />

    <el-main class="main">
      <Header />
      <Content />
      <Footer />
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue';
import Content from './Content.vue'
import Footer from './Footer.vue'
// workbench
</script>
<style lang="scss" scoped>
.main{
  padding-left: 15rem;
  height: 100%;
  margin: 24px 24px 0px;
  padding-top: 64px;
}
</style>
