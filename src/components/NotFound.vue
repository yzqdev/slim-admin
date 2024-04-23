<template>
  <div class="w-full">
    <el-result :status="type" :title="type" :subTitle="config[type].desc">
      <template #extra>
        <el-button type="primary" @click="handleToHome">返回首页</el-button>
      </template>
    </el-result>
  </div>
</template>

<script lang="ts" setup>
import types from "./type";

const router = useRouter();
const props = defineProps({
  type: {
    type: String,
    default: "404",
  },
});
const config = ref(types);

function handleToHome() {
  router.push({ name: "AdminHome" });
}
</script>
