<template>
  <div class="bg-gray-100 min-h-full dark:bg-gray-800 dark:text-white">
    <navbar/>
    <main class="h-full">
      <router-view/>
    </main>
  </div>
</template>

<script setup>
  import Navbar from '../components/Navbar.vue'
</script>