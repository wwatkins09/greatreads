import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';

export default combineReducers({
  session: sessionReducer
});
// add entities reducer later
