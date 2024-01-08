<template>
    <div class="flex flex-col p-8 dark:text-black">
        <h1 class="flex justify-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Home </h1>
<p class="flex justify-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">See our new books </p>
        <Books :books="bok"></Books>

    </div>
    <Footer></Footer>
</template>

<script setup>
    import {computed} from '@vue/reactivity'
    import {onMounted, ref } from "vue";
    import { useRoute } from "vue-router";
    import store from "../store";
    import Books from '../components/Books.vue'
    const bok = computed(()=> store.state.NewsBooks)
    onMounted(()=>{
        store.dispatch('searchNewsBooks' );
    })



</script>