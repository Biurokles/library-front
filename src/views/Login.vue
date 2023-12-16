<template>
   <div class="flex justify-center items-center mt-44">
    <div class="w-full max-w-xs">
      <h1 class="text-4xl font-bold mb-4 dark:text-white">Log in</h1>
      <form @submit.prevent="checkForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <div class="identity-input mb-4">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Email</label
          >
          <input
            id="identity"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email"
            aria-describedby="emailHelp"
            v-model="email"
          />
          <span class="text-xs text-red-700" id="emailHelp"></span>
        </div>

        <div class="password-input mb-6">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Password</label
          >

          <input
            aria-describedby="passwordHelp"
            v-model="password"

            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="*******"
          />

          <span class="text-xs text-red-700" id="passwordHelp"></span>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <RouterLink
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          :to="{name:'register'}"
          >
            Register
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script >
import axiosClient from '../axiosClient';

export default{
  name: 'loginPage',
  data() {
    return {
      email:'',
      password:''
    }; 
  },
  methods:{
    checkForm(){
      if(this.email && this.password){
        const user_data = {
          email:  this.email,
          password: this.password
        }
        // console.log(user_data)
        axiosClient.post('auth/login', user_data)
        .then(repsonse => {
          let tk = repsonse.data['token'];
          if(tk){
            localStorage.setItem('token',repsonse.data['token']);
            alert("Succesfull login!");
            this.$router.push({path: '/'})  
            return true;
          }else{
            alert("Incorrect login details");
            return false
          }
        }).catch (error =>{
          console.log(error);
          return false
        })
      }
      return false;
    }
  }
}
</script>
