import fetch from 'node-fetch';
import { 
  fetchUserSearchPending, fetchUserSearchSuccess, fetchUserSearchError,
} from '../actions/userSearchActions';
import Config from '../../config';

const fetchUserSearch = (term) => {
  const userSearchUrl = `${Config.url}/users?q=${term}`;

  return dispatch => {
    dispatch(fetchUserSearchPending());
    return fetch(userSearchUrl)
    .then(res => res.json())
    .then(searchResults => {
      if(searchResults.error) throw(searchResults.error);
      dispatch(fetchUserSearchSuccess(searchResults));
      return searchResults;
    })
    .catch(error => {
      dispatch(fetchUserSearchError(error));
    })
  }
}

export default fetchUserSearch;