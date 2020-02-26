const userRepositoriesReducer = (state=[], action) => {
  switch (action.type) {
    case 'FETCH_USER_REPOSITORIES_PENDING': 
      return {
        ...state,
        pending: true,
      }
    case 'FETCH_USER_REPOSITORIES_SUCCESS':
      return {
        ...state,
        pending: false,
        userRepositories: [...action.userRepositories],
      }
    case 'FETCH_USER_REPOSITORIES_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error
      }
      default:
        return state;
    }
  }
  
  export default userRepositoriesReducer;
  