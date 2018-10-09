import * as ActionTypes from './action-types';

export const switchLayout = () => ({
  type:ActionTypes.GRID
});

export const onSearchChange = searchTerm => ({
  type:ActionTypes.SEARCHTERM,
  payload:searchTerm
});

export const clearLayout = () => ({
  type:ActionTypes.CLEARLAYOUT
});

export const onPageChange = page => ({
  type:ActionTypes.HANDLE_PAGE,
  payload:page
});

export const fetchITunesAlbums = data => ({
  type:ActionTypes.FETCHITUNESALBUMS,
  payload:data
});
