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

export  function setBooksById(state,books)
{
    state.booksById = books
}

export  function setNewsBooks(state,books)
{
    state.NewsBooks = books
}
export  function setBooksByAuthors(state,books)
{
    state.booksByAuthor = books
}

export function setUserRoles(state, token)
{
    var roles = JSON.parse(window.atob(token.split('.')[1]))["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    state.roles = Array.isArray(roles) ? roles : [roles];
}

export function setUsersData(state, data)
{
    state.usersData = data;
}

export function logout(state)
{
    localStorage.removeItem('token');
    state.roles = [];
}

export function setBasketBooks(state, books)
{
    state.basketBooks = books
}

export function setBorrowings(state, borrowings)
{
    state.borrowings = borrowings
}
