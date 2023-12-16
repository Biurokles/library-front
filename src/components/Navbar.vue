<template>
        <header class="bg-white dark:text-white dark:bg-gray-700  text-black shadow h-24 flex justify-between items-stretch">
    <router-link :to="{name:'home'}" class="inline-flex items-center h-full px-5">
      Home
    </router-link>

  <div class="flex items-center gap-1 dark:text-white">
    <button @click="toggleDark()" class="bg-white text-black font-bold py-2 px-4 rounded  dark:bg-gray-700 dark:text-white">
      <i :class="isDark?'pi pi-moon':'pi pi-sun'"></i>
      {{ isDark? "Dark":"Light" }} Mode
    </button>
    <router-link :to="{name:'shoppingcart'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200 dark:hover:bg-purple-700">

<i class="pi pi-shopping-cart pr-2"></i>Shopping cart
</router-link>
    <router-link :to="{name:'byName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200 dark:hover:bg-purple-700">
      <i class="pi pi-search pr-2"></i>Search Books
    </router-link>
    <router-link :to="{name:'byCategory'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200 dark:hover:bg-purple-700">
      Book by Category
    </router-link>
    <router-link :to="{name:'authors'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200 dark:hover:bg-purple-700">
      Authors
    </router-link>
    
    <router-link v-if="!isLogged"  :to="{name:'login'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200 dark:hover:bg-purple-700">
      Sign in
    </router-link>
    <router-link v-if="!isLogged"  :to="{name:'register'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200 dark:hover:bg-purple-700">
      Sign up
    </router-link>
    <router-link v-if="isLogged"  :to="{name:'home'}" v-on:click="logout()" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200 dark:hover:bg-purple-700">
      Logout
    </router-link>
  </div>
</header>
</template>
<script setup> 
import {useDark, useToggle} from "@vueuse/core";
import 'primeicons/primeicons.css';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const isLogged = localStorage.getItem('token')==undefined ? false:true;
const logout =  function () {
  localStorage.removeItem('token');
  location.reload();
}

</script>