<template>
  <header class="header"><span v-html="notice"></span></header>
</template>

<script setup>
let notice = $ref("");
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: calc(100% - 15rem);
  left: 15rem;
  padding: 1.5rem;
}
</style>
