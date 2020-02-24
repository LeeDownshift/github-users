import fetch from 'node-fetch';
import { 
  fetchUserRepositoriesPending, 
  fetchUserRepositoriesSuccess, 
  fetchUserRepositoriesError,
} from '../actions/userRepositoriesActions';
import Config from '../../config';

const fetchUserRepositories = (slug) => {
  const userRepositoriesUrl = `${Config.url}/users/${slug}/repos`;
  
  return dispatch => {
    dispatch(fetchUserRepositoriesPending());
    return fetch(userRepositoriesUrl)
    .then(res => res.json())
    .then(userRepositories => { 
      if(userRepositories.error) throw(userRepositories.error);
      dispatch(fetchUserRepositoriesSuccess(userRepositories));
      return userRepositories;
    })
    .catch(error => {
      dispatch(fetchUserRepositoriesError(error));
    })
  }
}

export default fetchUserRepositories;