<template>
    <div class="p-8 pb-0">
        <input 
        type="text"
         v-model="keyword"
         class ="rounded border-2 border-gray-200 w-full dark:text-black" 
         placeholder="Search for books"
         @change="searchBooks" 
         />
         <label  class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Search By</label>
 <select v-model="searchBy" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option  value="Title">Title</option>
  <option value="ISBN">ISBN</option>
  <option value="Author">Author</option>
</select>
    </div>
     <Books :books="books"></Books>
     <Footer></Footer>
</template>

<script setup>
import Books from '../components/Books.vue'
import {computed} from '@vue/reactivity'
import{onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import store from "../store";
const route = useRoute();
const books = computed(() => store.state.searchedBooks)
const keyword = ref('');
const searchBy = ref('');
function searchBooks(){
    if(!searchBy.value)
    searchBy.value = "Title";
    if(keyword.value){
        const searchInfo = {keyword:keyword.value, searchBy:searchBy.value}
        store.dispatch('searchBooks',searchInfo);
    }
    else{
        store.commit("setSearchedBooks",[]);
    }

}
onMounted(()=>{
    keyword.value = route.params.name
    if(keyword.value){
        searchBooks();
    }
})
</script>