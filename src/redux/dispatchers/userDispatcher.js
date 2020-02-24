import fetch from 'node-fetch';
import { 
  fetchUserPending, 
  fetchUserSuccess, 
  fetchUserError,
} from '../actions/userActions';
import Config from '../../config';

const fetchUser = (slug) => {
  const userUrl = `${Config.url}/users/${slug}`;
  const userRepositoryUrl = `${userUrl}/repos`;
  const userActivityUrl = `${userUrl}/events`;
  
  return dispatch => {
    dispatch(fetchUserPending());
    return fetch(userUrl)
    .then(res => res.json())
    .then(user => { 
      if(user.error) throw(user.error);
      dispatch(fetchUserSuccess(user));
      return user;
    })
    .catch(error => {
      dispatch(fetchUserError(error));
    })
  }
}

export default fetchUser;