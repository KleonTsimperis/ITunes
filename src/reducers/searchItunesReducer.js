import { FETCH_LIST } from '../actions/type';




const searchItunesReducer = (state = { searchTerm:'', itunes:null }, action) => {
  if (action.type === 'FETCH_LIST'){
    return state = {
      ...state,
      itunes: action.payload
      }
    }

  if (action.type === "ITUNES"){
    return state = {
      ...state,
      }
    }
      return state;
  }

export default searchItunesReducer;
