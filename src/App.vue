
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Shared header on every page -->
    <HeaderView />

    <!-- Current route's page content -->
    <main class="flex-1">
      <RouterView />
    </main>

    <!-- Shared footer on every page -->
    <FooterView />
  </div>
</template>

<style>
.v-btn {
  text-transform: none;
}
</style>
