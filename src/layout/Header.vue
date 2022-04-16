<template>
  <header class="header"><span v-html="notice"></span>
    <el-dropdown>
            <span class='el-dropdown-link '>
                <el-avatar :size='30'
                           src='https://img-static.mihoyo.com/communityweb/upload/222b847170feb3f2babcc1bd4f0e30dd.png'/>
                <el-button type="text" class='ml-2'>{{ userInfo.name }}</el-button>
                <el-icon> <arrow-down/></el-icon>
            </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-link href='https://github.com' target='_blank' :underline='false'>个人中心</el-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-link href='https://github.com' target='_blank' :underline='false'>项目地址</el-link>
          </el-dropdown-item>
          <el-dropdown-item divided @click='logout'>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </header>
</template>

<script setup>
import {ArrowDown} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";

let router = useRouter()
let userInfo = $ref({name: 'keqing'})
let notice = $ref("您有一条新的公告");

function logout() {
  localStorage.clear()
  router.push({name: 'login'})
}
</script>

<style lang="scss" scoped>
.header {
  height: 3rem;
  padding:0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .el-dropdown-link {
    display: flex;
    align-items: center;
    padding: 0 2rem;
  }
}
</style>
