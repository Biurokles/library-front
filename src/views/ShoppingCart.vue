<template>
    <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
          <div class="flex justify-start item-start space-y-2 flex-col">
              <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Shopping cart</h1>
              <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">{{ today }}</p>
          </div> 
          <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
              <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                  <div class="flex flex-col justify-start items-start dark:bg-gray-900 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                      <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                          <div v-for="book in products" :key="book.id" class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
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
                                  <button  @click=" deleteFromCart(book) " class=" text-black dark:text-white font-bold py-2 px-4 rounded">
                                    <i class="pi pi-times" ></i>
                           </button>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
              <!-- user info -->
              <div class="bg-gray-50 dark:bg-gray-900 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                  <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
                  <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                      <div class="flex flex-col justify-start items-start flex-shrink-0">
                          <div class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                              <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                              <div class="flex justify-start items-start flex-col space-y-2">
                                  <p class="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">David Kent</p>
                                  <p class="text-sm dark:text-gray-300 leading-5 text-gray-600">10 Previous Orders</p>
                              </div>
                          </div>
  
                          <div class="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                              <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg" alt="email">
                              <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg" alt="email">
                              <p class="cursor-pointer text-sm leading-5 ">david89@gmail.com</p>
                          </div>
                      </div>
                      <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                          <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                              <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                  <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                  <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                              </div>
                              <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                  <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                  <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                              </div>
                          </div>
                          <div class="flex w-full justify-center items-center md:justify-start md:items-start">
                              <button class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Edit Details</button>
                          </div>
                          <div class="flex w-full justify-center items-center md:justify-start md:items-start">
                              <button v-on:click="borrowRequest" class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Borrow books</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
</template>

<script >
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
  

data() {
  return {
      products: JSON.parse(localStorage.getItem('products')),
      today: this.day()
  };
},
methods: {
  borrowRequest()
{
    console.log('nigger');
},
  deleteFromCart(item)
{
  var cart = JSON.parse(localStorage.getItem('products')) || [];
  var index = cart.findIndex(x => x.title === item.title);
      cart.splice(index, 1);
      localStorage.setItem('products', JSON.stringify(cart));
      this.products = JSON.parse(localStorage.getItem('products'));
      console.log(localStorage.products)
      toast.info(item.title + ' deleted from cart');
},
  day()
  {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); 
      var yyyy = today.getFullYear();
      today = mm + '/' + dd + '/' + yyyy;
  }
}
}
</script>
