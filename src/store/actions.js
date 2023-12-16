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


export function changeUserRole({commit}, {isGrant, usersId, role}){
    isGrant
    ? axiosClient.post(`admin/userRoles`, {usersId, role})
        .then(({data}) => store.dispatch('getUsersData')
        )
    : axiosClient.delete(`admin/userRoles`, {data: {usersId, role}})
    .then(({data}) => store.dispatch('getUsersData')
    )
}



