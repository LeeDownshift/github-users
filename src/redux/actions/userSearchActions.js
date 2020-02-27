export const fetchUserSearchPending = () => {
  return { type: 'FETCH_USER_SEARCH_PENDING' }
}

export const fetchUserSearchSuccess = (searchResults) => {
  return { type: 'FETCH_USER_SEARCH_SUCCESS', searchResults }
}

export const fetchUserSearchError = (error) => {
  return { type: 'FETCH_USER_SEARCH_ERROR', error }
} 