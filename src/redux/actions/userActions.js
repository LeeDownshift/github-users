export const fetchUsersPending = () => {
  return { type: 'FETCH_USERS_PENDING' }
}

export const fetchUsersSuccess = (users) => {
  return { type: 'FETCH_USERS_SUCCESS', users }
}

export const fetchUsersError = (error) => {
  return { type: 'FETCH_USERS_ERROR', error }
} 