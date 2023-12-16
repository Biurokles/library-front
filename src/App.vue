<template>
    <router-view/>
</template>

<script setup>
    import axios from 'axios';
    import store from './store'

    var token = localStorage.getItem('token');

    if(!!token)
    {
        store.commit('setUserRoles', token);
    }

</script>

<style scoped>
</style>
