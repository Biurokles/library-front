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

export function searchBooksByCategory({commit },category ){
   
    axiosClient.get(`book?CategoryId=${category}`)
    .then(({data})=>{
        commit('setBooksByCategory', data)
    })
    
}
export function searchBooksByAuthor({commit }, ing){
    axiosClient.get(`filter.php?i=${ing}`)
    .then(({data})=>{
        commit('setBooksByAuthors', data)
    })
    
}



