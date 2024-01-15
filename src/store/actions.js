import axios from "axios";
import axiosClient from "../axiosClient";
import store from "../store"

export function searchBooks({commit },searchInfo){
    axiosClient.get(`/book?SearchBy=${searchInfo.searchBy}&Value=${searchInfo.keyword}`)
    .then(({data})=>{
        commit('setSearchedBooks', data)
    })
    axiosClient.get(`/book?SearchBy=${searchInfo.searchBy}&Value=${searchInfo.keyword}`)
    .then(({data})=>{
        commit('setSearchedBooks', data)
    })
}


export function searchCategories({commit}){
    axiosClient.get('category/getTree')
    .then(({data})=>{
        commit('setCategories', data)
    })
}

export function searchBooksByCategory({commit },category ){
    axiosClient.get(`book?CategoryId=${category}`)
    .then(({data})=>{
        commit('setBooksByCategory', data)
    })
}

export function searchBooksById({commit },id ){
    axiosClient.get(`book/${id}`)
    .then(({data})=>{
        commit('setBooksById', data)
    })
}

export function searchNewsBooks({commit } ){
    axiosClient.get('book/news?count=10')
    .then(({data})=>{
        commit('setNewsBooks', data)
    })

}

export function searchBooksByAuthor({commit }, author){
    axiosClient.get(`book?AuthorId=${author}`)
    .then(({data})=>{
        commit('setBooksByAuthors', data)
    })   
}

export function getUsersData({commit}){
    axiosClient.get(`employee/getUsersData`)
    .then(({data})=>{
        commit('setUsersData', data);
    })
}


export function changxeUserRole({commit}, {isGrant, usersId, role}){
    isGrant
    ? axiosClient.post(`admin/userRoles`, {usersId, role})
        .then(({data}) => store.dispatch('getUsersData')
        )
    : axiosClient.delete(`admin/userRoles`, {data: {usersId, role}})
        .then(({data}) => store.dispatch('getUsersData')
    )
}


export function verifyUser({commit}, usersId){
    axiosClient.post(`employee/verifyUser?usersId=${usersId}`)
        .then(({data}) => store.dispatch('getUsersData'));
}

export function returnBook({commit}, borrowingsId){
    axiosClient.post('borrowing/returnBook', [borrowingsId])
        .then(({data}) => store.dispatch('getUsersData'));
}

export async function getBasketBooks({ commit }) {
    await axiosClient.get(`basket`)
        .then(({ data }) => {
            commit('setBasketBooks', data);
        })
        .catch(error => {
            console.error("Error fetching basket books:", error);
        });
}

export function addBookToBasket({ commit }, id) {
    const headers = {
        'Accept': 'text/plain',
        'Content-Type': 'application/json',
      };
    axiosClient.post(`basket`,id,{ headers })
        .catch(error => {
            console.error("Error adding book to basket:", error);
        });
        store.dispatch('getBasketBooks');
}

export function deleteBookFromBasket({ commit }, id) {
    const headers = {
        'Accept': 'text/plain',
        'Content-Type': 'application/json',
      };
    axiosClient.delete(`basket`,id,{ headers })
        .catch(error => {
            console.error("Error deleting book from basket:", error);
        });
        store.dispatch('getBasketBooks');
}

export function getBorrowings({commit}){
    axiosClient.post(`borrowing/getBorrowings`)
    .then(({data})=>{
        commit('setBorrowings', data)
    })
}