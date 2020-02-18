import { fetchUsersPending, fetchUsersSuccess, fetchUsersError } from '../actions/userActions';

const url = 'https://api.github.com';
const usersUrl = `${url}/users`;
// const userUrl = `${url}/users/id`;
// const userRepositoryUrl = `${url}/users/id/repos`;
// const userActivityUrl = `${url}/users/id/events`;

const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersPending());
    return fetch(usersUrl)
    .then(res => res.json())
    .then(users => {
      if(users.error) throw(users.error);
      dispatch(fetchUsersSuccess(users));;
      return users;
    })
    .catch(error => {
      dispatch(fetchUsersError(error));
    })
  }
}

export default fetchUsers;