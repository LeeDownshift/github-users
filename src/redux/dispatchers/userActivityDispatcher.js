import fetch from 'node-fetch';
import { 
  fetchUserActivityPending, 
  fetchUserActivitySuccess, 
  fetchUserActivityError,
} from '../actions/userActivityActions';
import Config from '../../config';

const fetchUserActivity = (slug) => {
  const userActivityUrl = `${Config.url}/users/${slug}/events`;
  
  return dispatch => {
    dispatch(fetchUserActivityPending());
    return fetch(userActivityUrl)
    .then(res => res.json())
    .then(userActivity => { 
      if(userActivity.error) throw(userActivity.error);
      dispatch(fetchUserActivitySuccess(userActivity));
      return userActivity;
    })
    .catch(error => {
      dispatch(fetchUserActivityError(error));
    })
  }
}

export default fetchUserActivity;