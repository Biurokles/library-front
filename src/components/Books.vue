<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8" >
        <BookItem  v-for="book in books" v-bind:key="book.idMeal" v-bind:book="book"/>
    </div>
    <div v-if="!books.length" class="dark:text-white flex justify-center text-gray-600 ">
        There are no books
    </div>
</template>

<script setup>

    import BookItem from './BookItem.vue';

    const {books} = defineProps({
        books: {
            required:true,
            type: Array
        }
    })

</script>