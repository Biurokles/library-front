<template>
    <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
          <div class="flex justify-start item-start space-y-2 flex-col">
              <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Borrowed Books</h1>
          </div> 
    </div>
    <div v-for="book in books" v-bind:key="book" v-bind:book="book">
            <h1 class="text-5xl font-bold mb-5">{{ book.booksTitle}}</h1>
            <div class="grid grid-cols-1 sm:grid-cols-4 text-lg py-2">
            <div>
                <strong class="font-bold"> ISBN Number:</strong> {{ book.booksISBN }}
            </div>
            <div>
                <strong class="font-bold"> Authors:</strong><div v-for="author in book.booksAuthors" v-bind:key="author">
                {{ author }}</div>
            </div>
            <div>
                <strong class="font-bold"> Borrowed:</strong> {{ book.borrowedAt}}
            </div>
        </div>    
    </div>
    <div v-if="!books.length" class="dark:text-white flex justify-center text-gray-600 ">
        Borrow some book to check on them
    </div>
</template>


<script setup>
import {computed} from '@vue/reactivity'
import{onMounted} from 'vue';
import store from "../store";
const books = computed(()=> store.state.borrowings.borrowings.filter((word)=>word.returnedAt==null))
onMounted(()=>{
    store.dispatch('getBorrowings');
})

</script>