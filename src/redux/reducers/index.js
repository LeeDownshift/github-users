import { combineReducers } from 'redux';
import users from './usersReducer';
import userActivity from './userActivityReducer';
import userRepositories from './userRepositoriesReducer';

const rootReducer = combineReducers({ users, userActivity, userRepositories });

export default rootReducer;