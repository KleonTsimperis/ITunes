import { SEARCHTERM,  FETCHITUNESALBUMS} from '../actions/type';




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
      itunes:action.payload

      }
    }
      return state;
  }

export default searchItunesReducer;
