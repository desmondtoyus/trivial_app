import { combineReducers } from 'redux';
import {
  // eslint-disable-next-line import/named
  sharedReducer,

} from './reducers';

const configureStore = combineReducers({
  shared: sharedReducer,

});
export default configureStore;
