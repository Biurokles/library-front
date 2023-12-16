<template>
    
    <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div class="flex flex-col justify-start items-start dark:bg-gray-900 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Borrowings</p>
                    <div v-for="book in books" :key="book.id" class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                        <div class="pb-4 md:pb-8 w-full md:w-40">
                            <img class="w-full hidden md:block" :src="book.coverUrl.slice(5)" :alt="book.title"  />
                        </div>
                    <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                        <div class="w-full flex flex-col justify-start items-start space-y-8">
                            <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{{ book.title }}</h3>
                            <div class="flex justify-start items-start flex-col space-y-2">
                                <p class="text-base dark:text-white xl:text-lg leading-6">Category :  {{ book.category.name }}</p>
                                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-700">Author's :  {{ (book.authors==[]) ? book.authors:"unknown" }} </span> {{ book.strCategory }}</p>
                            </div>
                        </div>
                        <div class="flex justify-between space-x-8 items-start w-full">
                            <p class="text-base dark:text-white xl:text-lg leading-6"></p>
                            <!-- <button  @click=" deleteFromCart(book) " class=" text-black dark:text-white font-bold py-2 px-4 rounded">
                                <i class="pi pi-times" ></i>
                    </button> -->
                        </div>
                    </div>
                </div>
          </div>

      </div>
    </div>
</template>

<script>
import axiosClient from "../axiosClient";
export default{
    data() {
        return {
            books: []
        }
    },
    created(){
        this.getData()
    },
    methods:{
            getData(){
                axiosClient.post('borrowings/getBorrowings')
                .then(response => {
                    console.log(response.data)
                    this.books = response.data;
                }).catch(function (error) {
                if (error.response) {
                    console.log('Server responded with status code:', error.response.status);
                    console.log('Response data:', error.response.data);
                } else if (error.request) {
                    console.log('No response received:', error.request);
                } else {
                    console.log('Error creating request:', error.message);
                }
            });
        }
    }
}
</script>