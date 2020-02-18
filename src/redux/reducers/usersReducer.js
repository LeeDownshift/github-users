const usersReducer = (state={}, action) => {
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
    default:
      return state;
  }
}

export default usersReducer;