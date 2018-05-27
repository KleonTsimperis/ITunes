import { combineReducers } from 'redux';
import searchItunesReducer from './searchItunesReducer';
import booleanReducer from './booleanReducer';

export default combineReducers({
  searchItunesReducer: searchItunesReducer,
  booleanReducer: booleanReducer
});
 
