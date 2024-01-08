<template>
    <div class="w-3/4 mx-auto">
        <div class="py-2 grid grid-cols-12 w-full text-center divide-x divide-gray-400">
            <div class="col-span-1">Users Id</div>
            <div class="col-span-3">Email</div>
            <div class="col-span-1">isVerified</div>
            <div class="col-span-7">Borrowings</div>
        </div>
        <template v-for="item in usersData" :key="item.id">
            <div class="py-1 grid grid-cols-12 w-full text-center divide-x divide-gray-400 hover:divide-gray-700">
                <div class="col-span-1">{{ item.id }}</div>
                <div class="col-span-3">{{ item.email }}</div>
                <div class="col-span-1">
                    <label class="switch">
                        <input type="checkbox" v-bind:disabled="item.isVerified" v-bind:checked="item.isVerified" v-on:change="verifyUser(id)">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="col-span-7 grid grid-cols-12">
                    <div class="col-span-12 grid grid-cols-12 p-1" v-for="borrowing in item.unreturnedBorrowings">
                        <div class="col-span-10">
                            {{borrowing.booksTitle}}<br> {{ borrowing.booksAuthors.join(', ') }}<br>Borrowed at: {{ new Date(borrowing.borrowedAt).toLocaleString()}}
                        </div>
                        <div class="col-span-2">
                            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-0.5 px-4 rounded"
                                v-on:click="returnBorrowing(borrowing.borrowingsId)">
                                Return
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>


</template>
<script setup>


import { onMounted, reactive} from "vue";
import {Roles}   from '../consts/roles.js'
import store from '../store'

let subs = [];
const usersData = reactive([]);

const rolesArr = Object.values(Roles);
const rolesLen = rolesArr.length;

const verifyUser = (usersId) => {
    store.dispatch('verifyUser', usersId)
}

const returnBorrowing = (borrowingsId) => {
    store.dispatch('returnBook', borrowingsId)
}


onMounted(()=>{
    store.dispatch('getUsersData');
    
    subs.push(
        store.subscribe((mutation, state) => {
            if(mutation.type === 'setUsersData') {
                usersData.splice(0, usersData.length);
                usersData.push(
                    ...state.usersData.map(x => ({
                        id: x.id,
                        email: x.email,
                        isVerified: x.roles.includes(Roles.VerifiedUser),
                        unreturnedBorrowings: x.unreturnedBorrowings
                    }))
                )
            }
        })
    )
});
</script>

<style>
/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 1rem;
  }
  
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    left: 0;    
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(2rem);
    -ms-transform: translateX(2rem);
    transform: translateX(2rem);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 8px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
  
</style>