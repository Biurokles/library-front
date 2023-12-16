<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5">{{ book.title }}</h1>
        <img         :src="book.coverUrl.slice(5)" :alt="book.title"  class="w-full">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold"> ISBN Number:</strong> {{ book.isbn }}
            </div>
            <div>
                <strong class="font-bold"> Quantity:</strong> {{ book.quantity }}
            </div>
            <div>
                <strong class="font-bold"> Tags:</strong> {{ book.strTags }}
            </div>
        </div>
        <div>
            {{ book.strInstructions }}<br>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)" v-bind:key="ind">
                        <li v-if="book[`strIngredient${ind+1}`]">
                            {{ ind+1 }}.  {{ book[`strIngredient${ind+1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)" v-bind:key="ind">
                        <li v-if="book[`strMeasure${ind+1}`]">
                        {{ book[`strMeasure${ind+1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="mt-4">
            <YouTubeButton :href="book.strYouTube">Go to YouTube</YouTubeButton>
            <a :href="book.strSource" 
                target="_blank" 
                class="ml-3 px-3 py-2 rounded border-2 border-indigo-600 text-white bg-indigo-500 hover:bg-indigo-600 hover:text-white transition-colors">
                View Originial Source</a>
        </div>
    </div>
</template>

<script setup>
    import YouTubeButton from '../components/YouTubeButton.vue'
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