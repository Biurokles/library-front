import axiosClient from "../axiosClient";

export function searchBooks({commit },searchInfo){
   
        axiosClient.get(`/book?SearchBy=${searchInfo.searchBy}&Value=${searchInfo.keyword}`)
        .then(({data})=>{
            commit('setSearchedBooks', data)
        })
        
}
export function searchCategories({commit}){
    axiosClient.get(`category/getTree`)
    .then(({data})=>{
        commit('setCategories', data)
    })
}

export function searchBooksByLetter({commit }, ){
   
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data})=>{
        commit('setBooksByLetter', data)
    })
    
}
export function searchBooksByAuthor({commit }, ing){
    axiosClient.get(`filter.php?i=${ing}`)
    .then(({data})=>{
        commit('setBooksByAuthors', data)
    })
    
}



