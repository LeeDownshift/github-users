export const fetchUserActivityPending = () => {
  return { type: 'FETCH_USER_ACTIVITY_PENDING' }
}

export const fetchUserActivitySuccess = (userActivity) => {
  return { type: 'FETCH_USER_ACTIVITY_SUCCESS', userActivity }
}

export const fetchUserActivityError = (error) => {
  return { type: 'FETCH_USER_ACTIVITY_ERROR', error }
} 
