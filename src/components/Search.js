import React from 'react';
import './Components.css';
import PropTypes from 'prop-types';


const Search = props =>

  <form className="form-inline">
    <input className="searchBar mr-1" size="30" type="search" placeholder="Search in ITunes..." aria-label="Search" value={props.searchTerm}
    onChange={props.onSearchChange}/>
    <button onClick={(e) => props.fetchITunesAlbums(e)}  className=" button2 button2width b-blue rot-135 my-2 my-sm-0" type="submit">Search</button>
  </form>;

  Search.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
    fetchITunesAlbums: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired
  }


export default Search;
