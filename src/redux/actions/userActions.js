export const fetchUsersPending = () => {
  return { type: 'FETCH_USERS_PENDING' }
}

export const fetchUsersSuccess = (users) => {
  return { type: 'FETCH_USERS_SUCCESS', users }
}

export const fetchUsersError = (error) => {
  return { type: 'FETCH_USERS_ERROR', error }
} 

export const fetchUserPending = () => {
  return { type: 'FETCH_USER_PENDING' }
}

export const fetchUserSuccess = (user) => {
  return { type: 'FETCH_USER_SUCCESS', user }
}

export const fetchUserError = (error) => {
  return { type: 'FETCH_USER_ERROR', error }
} 