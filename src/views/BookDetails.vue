<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5">{{ bookinfo.title }}</h1>
        <img :src="bookinfo.coverUrl.slice(5)" :alt="bookinfo.title"  class="w-full">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold"> ISBN Number:</strong> {{ bookinfo.isbn }}
            </div>
            <div>
                <strong class="font-bold"> Quantity:</strong> {{ bookinfo.quantity }}
            </div>
            <div>
                <strong class="font-bold"> Category:</strong> {{ bookinfo.category.name }}
            </div>
        </div>
        <div>
            <h2 class="text-2xl font-semibold mb-3">Description</h2>
            {{ bookinfo.longDescription }}<br>
        </div>
      
    </div>
</template>

<script setup>
    import {onMounted, ref} from 'vue'
    import { useRoute } from 'vue-router'
    import {computed} from '@vue/reactivity';
    import store from '../store';
    const bookinfo = computed(()=>store.state.booksById);
    const route = useRoute();
    console.log(route.params.id);
    onMounted(()=>
    {
        store.dispatch('searchBooksById',route.params.id);
    })
</script>