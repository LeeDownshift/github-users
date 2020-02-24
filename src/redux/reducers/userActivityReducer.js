const userActivityReducer = (state=[], action) => {
  switch (action.type) {
    case 'FETCH_USER_ACTIVITY_PENDING': 
      return {
        ...state,
        pending: true,
      }
    case 'FETCH_USER_ACTIVITY_SUCCESS':
      return {
        ...state,
        pending: false,
        userActivity: [...action.userActivity],
      }
    case 'FETCH_USER_ACTIVITY_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error
      }
      default:
        return state;
    }
  }
  
  export default userActivityReducer;