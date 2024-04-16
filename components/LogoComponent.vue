<template>
  <router-link :to="localePath('/')" class="logo">
    <img src="@/assets/images/logo.svg" draggable="false" alt="" />
  </router-link>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

</script>

<style scoped></style>
