import { combineReducers } from 'redux';
import user from '../reducers/user';

// Combine Reducer has all reducer at one place
export default combineReducers({
  user,
}); 