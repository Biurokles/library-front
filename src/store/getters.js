export const getIsUserInRole = (state) => (role) => {
    return state.roles.some(x => x === role);
  }