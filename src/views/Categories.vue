<template>
    <h1 class="flex justify-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Categories </h1>
<p class="flex justify-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Click on category to get more specified categories or look for books with given category</p>
    <div class="flex text-2xl justify-center ">
    <div class="py-1" v-for="category in categories" v-bind:key="category">
        <Categories :categories="category"></Categories>
    </div>
</div>
    <Footer></Footer>
</template>

<script setup>
import Categories from '../components/CategoryItem.vue';
import {computed} from '@vue/reactivity';
import store from '../store';
import {useRoute} from 'vue-router';
import {watch} from 'vue';

store.dispatch('searchCategories');
const route =useRoute();
const categories = computed(()=>store.state.categories);
    store.dispatch('searchCategories');
console.log(categories)
watch(route,()=>{
  //  store.dispatch('searchBooksByLetter',route.params.letter)

})


</script>