import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

export default entitiesReducer({
  users: usersReducer
});
