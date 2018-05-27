import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    searchTerm:'',
    itunes:null,
    grid:true,
    additionalPages:false
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "SEARCHTERM":
        state = {
          ...state,
        }
      break;
    case "ITUNES":
        state = {
          ...state,
          itunes:{}
        }
      break;
    case "GRID":
        state = {
          ...state,
          grid:!state.grid
        }
      break;
    case "ADDITIONALPAGES":
        state = {
          ...state,
          additionalPages:!state.additionalPages
        }
      break;
  }
  return state;
};

const store = createStore(reducer);

store.subscribe(()=> "Store Updated", store.getState());

store.dispatch({
    type:"ADD",
    payload:
});


ReactDOM.render(
<Provider store={store}>
  <App2 />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
