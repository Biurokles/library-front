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

export function getUsersData({commit}){
    axiosClient.get(`employee/getUsersData`)
    .then(({data})=>{

        commit('setUsersData', data);
    })
}
export function getBorrowedBooks({commit}){
    axiosClient.get(`borrowing/getBorrowings`)
    .then(({data})=>{
        commit('setBorrowedBooks', data)
    })
}
export function addBookToBasket({commit}, id){
    axiosClient.post('basket', id.toString(), {
        headers: {
          'Accept': 'text/plain',
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log(response.data)
      }).catch(function (error) {
        if (error.response) {
          console.log('Server responded with status code:', error.response.status);
          console.log('Response data:', error.response.data);
        } else if (error.request) {
          console.log('No response received:', error.request);
        } else {
          console.log('Error creating request:', error.message);
        }
      });
}
export function borrowBasket({commit}){
    axiosClient.post('borrowing/borrowBasket')
    .then(({data})=>{
        console.log(data)
    })
}


