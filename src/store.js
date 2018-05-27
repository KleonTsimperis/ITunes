import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import searchItunesReducer from './reducers/searchItunesReducer';
import booleanReducer from './reducers/booleanReducer';




const middleware= [thunk];

const store = createStore(combineReducers({booleanReducer,searchItunesReducer}), {}, applyMiddleware(...middleware));

export default store;
