<template>
  <div>
    <WelcomeVue/>
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import WelcomeVue from './components/Welcome.vue';
</script>

<style lang="scss" scoped>

</style>