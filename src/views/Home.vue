<template>
    <div class="flex flex-col p-8 dark:text-black">
        <input type="text" class ="rounded border-2 dark:text-black border-gray-200 w-full" 
        placeholder="Search for books ">
    </div>
    <Footer></Footer>
</template>

<script setup>
    import Footer from '../components/Footer.vue';
    import { computed, onMounted } from "vue";
    import store from "../store";
    import { ref } from 'vue'
    import axiosClient from "../axiosClient"



    const ingredients = ref([])
</script>