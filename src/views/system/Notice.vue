<template>
  <div class="main">
    <h2>发布公告</h2>

    <md-editor v-model="msg"></md-editor>
    <el-button class="mt-4" type="primary" @click="sendNotice">确定</el-button>
    <br />
  </div>
</template>

<script setup lang="ts">
import "md-editor-v3/lib/style.css";
const msg = ref("## 这是一个公告");
import { MdEditor } from "md-editor-v3";
async function sendNotice() {}
</script>

<style lang="scss" scoped></style>
