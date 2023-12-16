<template>
    <div class="p-8">
        <ul>
            <li v-for="item in usersData" :key="item.id">{{ JSON.stringify(item) }}</li>
        </ul>
    </div>

    <Footer></Footer>
</template>
<script setup>

import { onMounted, reactive } from "vue";
import store from '../store'
import Footer from "../components/Footer.vue";

let subs = [];
const usersData = reactive([]);


onMounted(()=>{
    store.dispatch('getUsersData');
    store.dispatch

    subs.push(
        store.subscribe((mutation, state) => {
            if(mutation.type === 'setUsersData') {
                usersData.push(
                    state.usersData.map(x => ({
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