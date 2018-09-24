import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import  { Provider }  from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booleanReducer from './reducers/booleanReducer';
import searchItunesReducer from './reducers/searchItunesReducer';


const middleware = applyMiddleware(thunk, logger)
const store = createStore(combineReducers({booleanReducer,searchItunesReducer}),middleware);
console.log(store.getState());

registerServiceWorker();
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>

, document.getElementById('root'));
