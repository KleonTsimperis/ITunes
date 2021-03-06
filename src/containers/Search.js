import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { onSearchChange, fetchITunesAlbums } from '../actions/actions';
import '../components/Components.css';
import PropTypes from 'prop-types';


const PATH_BASE = 'https://itunes.apple.com/search';
const PATH_TERM = 'term=';
const COUNTRY = 'country=es';
const ALBUMS = 'entity=album';
const LIMIT = 'limit=60';

const Search = props =>
  <form>
    <input className="searchBar" size="30" placeholder="Search in ITunes..." aria-label="Search" value={props.searchItunes.searchTerm}
      onChange={(e)=>props.onSearchChange(e.target.value)}/>
    <button onClick={(e) => props.fetchITunesAlbums(e, props.searchItunes.searchTerm)}  className="searchButton" type="submit">Search</button>
  </form>



const mapStateToProps = state => ({
  searchItunes: state.searchItunesReducer
});

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: searchTerm => {
      dispatch(onSearchChange(searchTerm));
    },
    fetchITunesAlbums: (e,searchTerm) => {
      dispatch({type:"ISLOADING"});
      e.preventDefault();
      axios.get(`${PATH_BASE}?${PATH_TERM}${searchTerm}&${COUNTRY}&${ALBUMS}&${LIMIT}`)
           .then(response => dispatch(fetchITunesAlbums(response.data)));
    }
  }
};

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  fetchITunesAlbums: PropTypes.func.isRequired,
  searchTerm: PropTypes.string
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
