<template>
    <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
          <div class="flex justify-start item-start space-y-2 flex-col">
              <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Borrowed Books</h1>
          </div> 
          <Books :books="books"></Books>
          <Footer></Footer>
      </div>
</template>


<script setup>
import {computed} from '@vue/reactivity'
import{onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import store from "../store";
const route = useRoute();
 
// there is none get for borrowedList/Books abythink

// const books = computed(() => store.state.searchedBooks)
// const keyword = ref('');
// const searchBy = ref('');
// function searchBooks(){
//     if(!searchBy.value)
//     searchBy.value = "Title";
//     if(keyword.value){
//         const searchInfo = {keyword:keyword.value, searchBy:searchBy.value}
//         store.dispatch('searchBooks',searchInfo);
//     }
//     else{
//         store.commit("setSearchedBooks",[]);
//     }

// }
// onMounted(()=>{
//     keyword.value = route.params.name
//     if(keyword.value){
//         searchBooks();
//     }
// })
</script>