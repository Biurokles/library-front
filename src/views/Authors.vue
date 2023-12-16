<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Authors</h1>
        <router-link :to="{
            name: 'byAuthor',
            params: {author: author.strIngredient },
            }"
            v-for="author of computedAuthors"
            v-bind:key="author.idIngredient"
            class="block bg-white rounded p-3 mb-3 shadow text-black">
            <h3 class=" text-2xl font-bold mb-2">{{ author.strIngredient}}</h3>
            <p>{{ author.strDescription }}</p>
        </router-link>
    </div>
    <Footer></Footer>
</template>

<script setup>
    import Footer from '../components/Footer.vue';
    import {computed} from '@vue/reactivity'
    import { onMounted, ref } from "vue";
    import axiosClient from "../axiosClient";

    const keyword = ref('')
    const authors = ref([])

    const computedAuthors = computed(()=>
    {
        if(!computedAuthors) return authors;
        return authors.value.filter((i)=>{
            return (i.strDescription || '').toLowerCase().includes(keyword.value.toLowerCase())||
            i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
        })
    })
    
    onMounted(()=>{
        axiosClient.get('list.php?i=list')
        .then(({data})=>
        {
            authors.value = data.meals;
        });
    });
</script>