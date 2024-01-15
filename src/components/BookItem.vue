<template>
           <div  class="bg-white shadow rounded-xl transition-all hover:scale-105 " >
          
       <router-link :to="{name: 'bookDetails', params: {id: book.id}}">
        <img 
        :src="book.coverUrl.slice(5)" 
        :alt="book.title" 
        class="rounded-t-xl w-full h-48 object-cover">
       </router-link>
        <div class="p-3">
        <h3 class="dark:text-black font-semibold">{{ book.title }} </h3>   
        <p class="mb-4 dark:text-black">   </p>
        <div class="flex items-center justify-between">
        </div>
        {{ book.shortDescription }}
        <div v-if="borrowed" > 
        <div v-if="!active">
            <button @click="handleClick()  "  class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i class="pi pi-shopping-bag" ></i>
            </button>
          </div>
          <div v-else>
            <button @click=" handleClick() "  class="bg-red-400 text-white font-bold py-2 px-4 rounded">
                <i class="pi pi-shopping-bag" ></i>
            </button>
          </div>
        </div>
       </div>
    </div>
</template>
<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import store from '../store';
import axiosClient from '../axiosClient';

export default {
  props: {
book: Object,

},
  data() {
    return {
      active: this.isInCart(),
      borrowed: null,
    };
  },
  async mounted()
  {
     this.borrowed =await  this.borrowedBooks();
  },
  methods: {
     borrowedBooks()
     
    {
      if(localStorage.getItem('token')){
        return new Promise(async (resolve) => {
       let result = await axiosClient.post(`borrowing/getBorrowings`)
       let data = result.data.borrowings;
       console.log(data)
       if(data)
       {
        const found = data.findLast(x=>x.booksId==this.book.id)
      if(found.returnedAt!=null)
        {
          console.log(found)
          resolve(true);
        }
        console.log(found)
        resolve(false);
       }
    });        
      }
      return true
      
  },
    isInCart() {
      var products = localStorage.getItem('products');
      if (products == null || products == [] || products=="0")
      {
        return false;
      }
      else if(products.some(item => item === this.book))
      {
        return true;
      }
      return false;
    },
    
      handleClick() {
      var products = JSON.parse(localStorage.getItem('products')) || [];
      
      if(this.active)
      {
        console.log('kasowanie')
        var index = products.findIndex(x => x.strMeal === this.book.title);
        products.splice(index, 1);
        if(localStorage.getItem('token')!=null)
        {
          store.dispatch('deleteBookFromBasket',this.book.id)
        }
        toast.info(this.book.title + ' deleted from cart');
      }
      else{
        console.log('dodawanie')
        products.push(this.book);
        if(localStorage.getItem('token')!=null)
        {
          console.log('api')
          store.dispatch('addBookToBasket',this.book.id);  
        }
        toast.info(this.book.title + ' added to cart ' + JSON.parse(this.book.id));
      }
    
      localStorage.setItem('products', JSON.stringify(products));
      this.active = !this.active;
      products = JSON.parse(localStorage.getItem('products')) || [];
    },
  }
  }
</script>