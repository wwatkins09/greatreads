import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});
// add entities reducer later
