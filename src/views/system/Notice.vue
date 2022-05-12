<template>
  <div class="main">
    <h2>发布公告</h2>

    <md-editor-v3 v-model="msg"></md-editor-v3>
    <el-button class="confirm-btn" type="primary" @click="sendNotice"
      >确定</el-button
    >
    <br />
  </div>
</template>

<script setup lang="ts">
let msg = $ref("## 这是一个公告");

async function sendNotice() {}
</script>

<style lang="scss" scoped>
.confirm-btn {
  margin-top: 1rem;
}
</style>
