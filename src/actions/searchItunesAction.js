import { FETCH_LIST } from './type';
import axios from 'axios';

const PATH_BASE = 'https://itunes.apple.com/search';
const PATH_TERM = 'term=';
const COUNTRY = 'country=es';
const ALBUMS = 'entity=album';
const LIMIT = 'limit=60';

export const fetchITunesAlbums = () => dispatch => {
    e.preventDefault();
    axios.get(`${PATH_BASE}?${PATH_TERM}${searchTerm}&${COUNTRY}&${ALBUMS}&${LIMIT}`)
         .then(response => dipsatch(
           type:FETCH_LIST,
           payload: response.data
         ))
         .catch(error=>console.log(error));

}
