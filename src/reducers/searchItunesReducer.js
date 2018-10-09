import * as ActionType from '../actions/action-types';

const searchItunesReducer = (state = { searchTerm:'', itunes:null, display:false, currentPage:1, isLoading:false}, action) => {
  if (action.type === ActionType.HANDLE_PAGE){
    return state = {
      ...state,
      currentPage:action.payload
    }
  }
  if (action.type === ActionType.SEARCHTERM){
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
      currentPage:1,
      isLoading:false
      }
    }
  if (action.type === ActionType.CLEARLAYOUT){
    return state = {
      ...state,
      itunes: null,
      display:false
      }
    }
  if (action.type === ActionType.ISLOADING){
    return state = {
      ...state,
      isLoading:true
    }
  }
    return state;
  };

export default searchItunesReducer;
