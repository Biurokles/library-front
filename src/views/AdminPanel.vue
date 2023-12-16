<template>
    <div class="w-3/4 mx-auto">
        <div class="py-2 grid grid-cols-12 w-full text-center divide-x divide-gray-400">
            <div class="col-span-1">Users Id</div>
            <div class="col-span-3">Email</div>
            <div class="col-span-5">Roles</div>
            <div class="col-span-3">Actions</div>
        </div>
        <template v-for="item in usersData" :key="item.id">
            <div class="py-1 grid grid-cols-12 w-full text-center divide-x divide-gray-400 hover:divide-gray-700">
                <div class="col-span-1">{{ item.id }}</div>
                <div class="col-span-3">{{ item.email }}</div>
                <div class="col-span-5">{{ item.roles.join(', ') }}</div>
                <div class="col-span-3 space-x-2"> 
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-0.5 px-4 rounded"
                     v-if="item.roles.length != rolesLen"
                     v-on:click="showDialog(true, item.id, item.roles)">
                        Grant role
                    </button>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-0.5 px-4 rounded" 
                        v-if="item.roles.length > 0"
                        v-on:click="showDialog(false, item.id, item.roles)">
                        Remove role
                    </button>
                </div>
            </div>
        </template>
    </div>

    <dialog id = "roleDialog" class="w-full h-full bg-transparent absolute top-0 before:bg-gray-400 before:bg-opacity-50 before:z-40 before:block before:fixed before:w-full before:min-h-screen">
            <div class="bg-white fixed sm:w-1/2 md:w-1/4 p-2 border border-slate-400 rounded z-50 inset-x-0 mx-auto mt-20">
                <button id = "closeDialogClick" class = "bg-gray-200 hover:bg-gray-400 font-bold py-0.5 px-4 rounded" >close</button>
                <div class="p-4">
                    <p id="roleDialogContent"></p>
                    <input type="hidden" name="roleDialogUsersId" id="roleDialogUsersId"/>
                    <select name="role" id="roleDialogSelect" class="w-full">
                    </select>
                    <button id="roleDialogBtnClick" class="w-1/2 mx-auto bg-gray-200 hover:bg-gray-400 font-bold py-0.5 px-4 rounded">Confirm</button>
                </div>
            </div>
    </dialog>

</template>
<script setup>


import { onMounted, reactive} from "vue";
import {Roles}   from '../consts/roles.js'
import store from '../store'
import Footer from "../components/Footer.vue";
let subs = [];
const usersData = reactive([]);

const rolesArr = Object.values(Roles);
const rolesLen = rolesArr.length;

const showDialog = (isGrant, usersId, roles) => {

    const roleDialog = document.querySelector('#roleDialog');
    roleDialog.show();
    
    const roleDialogContent = document.querySelector('#roleDialogContent');
    const roleDialogUsersId = document.querySelector('#roleDialogUsersId');
    const roleDialogSelect = document.querySelector('#roleDialogSelect');
    
    const roleDialogBtnClick = document.querySelector('#roleDialogBtnClick');
    const closeDialogClick = document.querySelector('#closeDialogClick');
    

    roleDialogUsersId.value = usersId;
    roleDialogSelect.innerHTML = '';

    let selectRolesArray = isGrant ? rolesArr.filter(x => !roles.includes(x)) : roles;


    selectRolesArray.forEach(x => {
        let el = document.createElement("option");
        el.text = x;

        roleDialogSelect.appendChild(el);
    });

    roleDialogContent.innerHTML = isGrant ? "Which role do you want to grant?" : "Which role do you want to remove"
    
    roleDialogBtnClick.addEventListener('click', (el) => {
            store.dispatch('changeUserRole', { 
                        isGrant: isGrant, 
                        usersId: roleDialogUsersId.value,
                        role: roleDialogSelect.value });

            roleDialog.close();
        })

    closeDialogClick.addEventListener('click', (el) => roleDialog.close())

};


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
                        roles: x.roles
                    }))
                )
            }
        })
    )
});
</script>