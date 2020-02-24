const usersReducer = (state=[], action) => {
  switch (action.type) {
    case 'FETCH_USERS_PENDING': 
      return {
        ...state,
        pending: true,
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        pending: false,
        users: [...action.users],
      }
    case 'FETCH_USERS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case 'FETCH_USER_PENDING': 
      return {
        ...state,
        pending: true,
      }
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        pending: false,
        user: action.user,
      }
    case 'FETCH_USER_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}

export default usersReducer;