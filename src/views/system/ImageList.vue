<template>
  <div class="images" v-viewer>
    <img class="img-list" v-for="src in images" :key="src" :src="src" />
  </div>
</template>

<script setup>
let images = $ref([
  "https://picsum.photos/200/200",
  "https://picsum.photos/300/200",
  "https://picsum.photos/250/200",
]);
</script>

<style lang="scss" scoped>
.img-list {
  margin: 1rem;
}
</style>
