import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import BooksByAuthor from '../views/BooksByAuthor.vue'
import Authors from '../views/Authors.vue'
import BooksByCategories from '../views/BooksByCategories.vue'
import Categories from '../views/Categories.vue'
import BooksByName from '../views/BooksByName.vue' 
import BookDetails from '../views/BookDetails.vue'
import ShoppingCart from '../views/ShoppingCart.vue'



const routes = [
    {
        path:'/',
        component: DefaultLayout,
        children:[
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-Name/:name?',
                name: 'byName',
                component: BooksByName
            },
            {
                path: '/authors',
                name: 'authors',
                component: Authors
            },
            {
                path: '/by-Author/:author',
                name: 'byAuthor',
                component: BooksByAuthor
            },
            {
                path: '/categories',
                name: 'categories',
                component: Categories,
            },
            {
                path: '/by-Category/:category',
                name: 'byCategory',
                component: BooksByCategories,
            },
            {
                path: '/book/:id',
                name: 'bookDetails',
                component: BookDetails,
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/shoppingcart',
        name: 'shoppingcart',
        component: ShoppingCart
    }


]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;