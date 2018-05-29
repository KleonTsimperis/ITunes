import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import  { Provider }  from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const booleanReducer = (state = { grid:true }, action) => {
  if (action.type === 'GRID'){
    return state = {
      ...state,
      grid:!state.grid
    }
  }
  return state;
};

const searchItunesReducer = (state = { searchTerm:'', itunes:null, display:false, currentPage:1}, action) => {
  if (action.type === 'SEARCHTERM'){
    return state = {
      ...state,
      searchTerm:action.payload
      }
    }
  if (action.type === 'FETCHITUNESALBUMS'){
    return state = {
      ...state,
      itunes: action.payload,
      display:true,
      searchTerm:"",
      currentPage:1
      }
    }
  if (action.type === 'CLEARLAYOUT'){
    return state = {
      ...state,
      itunes: null,
      display:false
      }
    }
  if (action.type === 'PAGE1'){
    return state = {
      ...state,
      currentPage:1
      }
    }
  if (action.type === 'PAGE2'){
    return state = {
      ...state,
      currentPage:2
      }
    }
  if (action.type === 'PAGE3'){
    return state = {
      ...state,
      currentPage:3
      }
    }
    return state;
  }


const middleware = applyMiddleware(thunk, logger)
const store = createStore(combineReducers({booleanReducer,searchItunesReducer}),middleware);
console.log(store.getState());

store.subscribe(() =>{
  console.log("store updated!", store.getState());
});

registerServiceWorker();
ReactDOM.render(
<Provider store={store}>
  <App />
  </Provider>

, document.getElementById('root'));
