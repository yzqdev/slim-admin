<script setup lang="ts">
const getCaches = ref(["CounterLive", "RouteAlive"]);
</script>

<template>
  <router-link to="/alive/route">route</router-link>
  <router-link to="/alive/counter">counter</router-link>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="getCaches">
      <component :is="Component" :key="route.fullPath" />
    </keep-alive>
  </router-view>
</template>

<style scoped lang="scss"></style>
