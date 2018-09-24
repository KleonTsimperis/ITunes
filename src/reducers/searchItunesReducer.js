import * as ActionType from '../actions/action-types';

const searchItunesReducer = (state = { searchTerm:'', itunes:null, display:false, currentPage:1}, action) => {
  if (action.type === 'SEARCHTERM'){
    return state = {
      ...state,
      searchTerm:action.payload
      }
    }
  if (action.type === ActionType.FETCHITUNESALBUMS){
    return state = {
      ...state,
      itunes: action.payload,
      display:true,
      searchTerm:"",
      currentPage:1
      }
    }
  if (action.type === ActionType.CLEARLAYOUT){
    return state = {
      ...state,
      itunes: null,
      display:false
      }
    }
  if (action.type === ActionType.PAGE1){
    return state = {
      ...state,
      currentPage:1
      }
    }
  if (action.type === ActionType.PAGE2){
    return state = {
      ...state,
      currentPage:2
      }
    }
  if (action.type === ActionType.PAGE3){
    return state = {
      ...state,
      currentPage:3
      }
    }
    return state;
  };

export default searchItunesReducer;
