export const fetchUserRepositoriesPending = () => {
  return { type: 'FETCH_USER_REPOSITORIES_PENDING' }
}

export const fetchUserRepositoriesSuccess = (userRepositories) => {
  return { type: 'FETCH_USER_REPOSITORIES_SUCCESS', userRepositories }
}

export const fetchUserRepositoriesError = (error) => {
  return { type: 'FETCH_USER_REPOSITORIES_ERROR', error }
} 
