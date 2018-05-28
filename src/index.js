import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import  { Provider }  from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const PATH_BASE = 'https://itunes.apple.com/search';
const PATH_TERM = 'term=';
const COUNTRY = 'country=es';
const ALBUMS = 'entity=album';
const LIMIT = 'limit=60';

// const fetchITunesAlbums = (e,searchTerm,error) =>{
//    e.preventDefault();
//    axios.get(`${PATH_BASE}?${PATH_TERM}${searchTerm}&${COUNTRY}&${ALBUMS}&${LIMIT}`)
//         .then(response => this.setState({itunes:response.data}))
//         .catch(error=>console.log(error))
//  }


const booleanReducer = (state = { grid:true, additionalPages:false }, action) => {
  if (action.type === 'GRID'){
    return state = {
      ...state,
      grid:!state.grid
    }
  }
  if (action.type === 'ADDITIONALPAGES'){
    return state = {
      ...state,
      additionalPages:!state.additionalPages
    }
  }
  return state;
};

const searchItunesReducer = (state = { searchTerm:'', itunes:null }, action) => {
  if (action.type === 'SEARCHTERM'){
    return state = {
      ...state,
      searchTerm:action.payload
      }
    }
  if (action.type === 'FETCHITUNESALBUMS'){
    return state = {
      ...state,
      itunes: action.payload

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
