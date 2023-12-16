<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5">{{ book.title }}</h1>
        <img :src="book.coverUrl.slice(5)" :alt="book.title"  class="w-full">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold"> ISBN Number:</strong> {{ book.isbn }}
            </div>
            <div>
                <strong class="font-bold"> Quantity:</strong> {{ book.quantity }}
            </div>
            <div>
                <strong class="font-bold"> Category:</strong> {{ book.category.name }}
            </div>
        </div>
        <div>
            <h2 class="text-2xl font-semibold mb-3">Description</h2>
            {{ book.longDescription }}<br>
        </div>
      
    </div>
</template>

<script setup>
    import {onMounted, ref} from 'vue'
    import { useRoute } from 'vue-router'
    import {computed} from '@vue/reactivity';
    import store from '../store';
    const book = computed(()=>store.state.booksById);
    const route = useRoute();
    console.log(route.params.id);
    onMounted(()=>
    {
        store.dispatch('searchBooksById',route.params.id);
    })
</script>