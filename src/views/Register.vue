<template>

    <div class="flex justify-center items-center mt-44">
     <div class="w-full max-w-xs">
       <h1 class="text-4xl font-bold mb-4 dark:text-white">Sign up</h1>
       <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="reg_form" @submit.prevent="checkForm">
  
        <!-- <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p> -->

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
             v-model="password1"
 
             class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
             id="password"
             type="password"
             placeholder="*******"
           />
 
           <span class="text-xs text-red-700" id="passwordHelp"></span>
         </div>
         <div class="password-input mb-6">
           <label
             for="identity"
             class="block text-gray-700 text-sm font-bold mb-2"
             >Repeat Password</label
           >
 
           <input
           aria-describedby="passwordHelp"
             v-model="password2"
 
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

         </div>
       </form>
     </div>
   </div>
 </template>
 
 <script >
  import axiosClient from '../axiosClient';
  
  export default{
    name: 'registerPage',
    data() {
      return {
        email:'',
        password1:'',
        password2:''
      }; 
    },
    methods:{
      checkForm(){
        if(this.email && this.password1 && this.password1 === this.password2){
          const user_data = {
            email:  this.email,
            password: this.password1,
            repeatedPassword: this.password2
          }
          // console.log(user_data)
          axiosClient.post('auth/register', user_data)
          .then(repsonse => {
            // console.log(repsonse);
            alert("Succesfull registration!");
            this.$router.push({path: '/login'})
          }).catch (error =>{
            console.log(error);
            return false
          })
          return true;
        }
        return false;
      }
    }
  }
 </script>