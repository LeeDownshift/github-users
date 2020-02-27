const userSearchReducer = (state=[], action) => {
  switch (action.type) {
    case 'FETCH_USER_SEARCH_PENDING': 
      return {
        ...state,
        pending: true,
      }
    case 'FETCH_USER_SEARCH_SUCCESS':
      return {
        ...state,
        pending: false,
        users: [...action.users],
      }
    case 'FETCH_USER_SEARCH_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error
      }
      default:
        return state;
    }
  }
  
  export default userSearchReducer;