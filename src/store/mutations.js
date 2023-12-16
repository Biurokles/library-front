export  function setSearchedBooks(state,books)
{
state.searchedBooks = books
}

export  function setCategories(state,category)
{
state.categories = category
}
export  function setBooksByCategory(state,books)
{
state.booksByCategory = books
}
export  function setBooksByAuthors(state,books)
{
state.booksByAuthor = books
}

export function setUserRoles(state, token)
{
    state.roles = JSON.parse(window.atob(token.split('.')[1]))["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
}
