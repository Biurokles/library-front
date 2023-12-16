<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Authors</h1>
       <router-link :to="{
            name: 'byAuthor',
            params: {author: author.id },
            }"
            v-for="author of authors"
            v-bind:key="author.id"
            class="block bg-white rounded p-3 mb-3 shadow text-black">
            <h3 class=" text-2xl font-bold mb-2">{{ author.fullName}}</h3>
            <p>Total number of books: {{ author.numberOfBooks }}</p>
        </router-link>
    </div>
    <Footer></Footer>
</template>

<script setup>
    import Footer from '../components/Footer.vue';
    import { onMounted, ref } from "vue";
    import axiosClient from "../axiosClient";

    const authors = ref([])
    
    onMounted(()=>{
    axiosClient.get('author')
    .then(({data})=>
    {
        authors.value = data;
    });
</script>