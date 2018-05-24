import React, { Component } from 'react';
import './Components.css';


const Search = props =>




        <form>
          <div className="form-row justify-content-center mt-4">
            <div className="col-6 col-md-3 mb-2 mb-md-0 inputWithIcon">
              <input type="text"
                     className="shadowCard searchBar "
                     placeholder="Search your album..."
                     value={props.value}
                     onChange={props.onSearchChange}
              />
              <i className="fas fa-search"></i>
            </div>
            <div className="col-5 col-md-1">
              <button onClick={(e) => props.fetchITunesAlbums(e,props.searchTerm)} type="submit" className="searchButton  shadowCard text-white">Search</button>
            </div>
          </div>
        </form>





export default Search;
