import React, { Component } from 'react';
import './Components.css';
import PropTypes from 'prop-types';

const Navbar = props =>

  <nav className="navbar iTunesColor">
    <a className="navbar-brand mr-5 mt-2 my-auto"> <h2>{props.children}</h2></a>




    <form className="form-inline">
      <input className="form-control searchBar mr-1" size="30" type="search" placeholder="Search ITunes..." aria-label="Search" value={props.value}
      onChange={props.onSearchChange}/>
      <button onClick={(e) => props.fetchITunesAlbums(e,props.searchTerm)}  className=" searchButton my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>


  Navbar.propTypes = {
    switchLayout: PropTypes.func,
    grid: PropTypes.bool,
    onSearchChange: PropTypes.func.isRequired,
    fetchITunesAlbums: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired
  }
// switchLayout and grid needs to have isRequired


export default Navbar;
