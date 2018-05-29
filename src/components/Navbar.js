import React from 'react';
import './Components.css';
import PropTypes from 'prop-types';
import Search from './Search';

const Navbar = props =>


  <nav className="navbar iTunesColor" >
    <a className="navbar-brand mr-5 mt-2 my-auto">
     <h2 className="neon title" onClick={() => props.clearLayout()}>
      {props.children}
     </h2>
    </a>

    <Search
      searchTerm={props.searchTerm}
      onSearchChange={props.onSearchChange}
      fetchITunesAlbums={(e) => props.fetchITunesAlbums(e)}
     />

  </nav>;

  Navbar.propTypes = {
    clearLayout: PropTypes.func,
    onSearchChange: PropTypes.func.isRequired,
    fetchITunesAlbums: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired
  }

export default Navbar;
