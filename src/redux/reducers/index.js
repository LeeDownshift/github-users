import { combineReducers } from 'redux';
import users from './usersReducer';
import userActivity from './userActivityReducer';
import userRepositories from './userRepositoriesReducer';
import userSearch from './userSearchReducer';

const rootReducer = combineReducers({ users, userActivity, userRepositories, userSearch });

export default rootReducer;