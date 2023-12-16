<template>
    <div class="flex justify-center gap-10 m-2">
        <div v-for="category in categories" v-bind:key="category">
            <Categories :categories="category"></Categories>
        </div>
        <Books :books="books"/>
    </div>
    <Footer></Footer>
</template>

<script setup>
    import Categories from '../components/Categories.vue';
    import {computed} from '@vue/reactivity';
    import store from '../store';
    import {useRoute} from 'vue-router';
    import {watch} from 'vue';
    import Footer from "../components/Footer.vue"

    store.dispatch('searchCategories');
    const route =useRoute();
    const categories = computed(()=>store.state.categories);
    store.dispatch('searchCategories');
    console.log(categories);
    
    watch(route,()=>{
        store.dispatch('searchBooksByCategory',route.params.letter)
    })
</script>