import { FETCHITUNESALBUMS } from './types';
import axios from 'axios';

const PATH_BASE = 'https://itunes.apple.com/search';
const PATH_TERM = 'term=';
const COUNTRY = 'country=es';
const ALBUMS = 'entity=album';
const LIMIT = 'limit=60';

export default function fetchITunesAlbums(e) {
  e.preventDefault();
  return dispatch => {
    axios.get(`${PATH_BASE}?${PATH_TERM}+'as'+&${COUNTRY}&${ALBUMS}&${LIMIT}`)
      .then(response =>{
        const itunes = response.data;
        dispatch({
          type: 'FETCHITUNESALBUMS',
          payload: itunes
        });
      });
  }
}


function list(itunes){
  return {
    type: 'FETCHITUNESALBUMS',
    payload: itunes
  };
}
