import fetch from 'node-fetch';
import { 
  fetchUsersPending, 
  fetchUsersSuccess, 
  fetchUsersError,
} from '../actions/userActions';
import Config from '../../config';

const usersUrl = `${Config.url}/users`;

const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersPending());
    return fetch(usersUrl)
    .then(res => res.json())
    .then(users => {
      if(users.error) throw(users.error);
      dispatch(fetchUsersSuccess(users));
      return users;
    })
    .catch(error => {
      dispatch(fetchUsersError(error));
    })
  }
}

export default fetchUsers;