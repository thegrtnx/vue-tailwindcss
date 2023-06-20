<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-urbanpay-primary">
    <SiteNavigation/>
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteNavigationVue from './components/SiteNavigation.vue';
</script>

<style lang="scss" scoped>

</style>