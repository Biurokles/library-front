<template>
    <Books :books="books"/>
</template>

<script setup>
    import {computed} from '@vue/reactivity'
    import {onMounted, ref } from "vue";
    import { useRoute } from "vue-router";
    import store from "../store";
    import Books from '../components/Books.vue'
    
    const route = useRoute();
    const books = computed(()=> store.state.booksByAuthor)

    onMounted(()=>{
        store.dispatch('searchBooksByAuthor', route.params.author)
    })
</script>