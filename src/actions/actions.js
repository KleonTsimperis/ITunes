import * as ActionTypes from './action-types';

export const switchLayout = () => {
  return {
    type:ActionTypes.GRID
  }
};

export const onSearchChange = searchTerm => {
  return{
    type:ActionTypes.SEARCHTERM,
    payload:searchTerm
  }
};

export const clearLayout = () => {
  return{
    type:ActionTypes.CLEARLAYOUT
  }
};

export const page = pageNumber => {
  return{
    type:ActionTypes[pageNumber]
  }
};

export const fetchITunesAlbums = data => {
  return{
    type:ActionTypes.FETCHITUNESALBUMS,
    payload:data
  }
};
