import { combineReducers } from 'redux';
import { apiReducer } from './apiReducer';
import { usersReducer } from './usersReducer';

export default combineReducers({
  api: apiReducer,
  users: usersReducer
});
