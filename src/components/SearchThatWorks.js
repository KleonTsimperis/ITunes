import React, { Component } from 'react';


const Search = props =>

  <form onSubmit={(e)=>props.fetchITunesAlbums(e,props.searchTerm)}>
    <div className="form-row">
      <div className="col-6 col-md-5 mb-2 mb-md-0 ">
        <input type="text"
               className="form-control form-control-lg "
               placeholder="Search your album..."
               value={props.searchTerm}
               onChange={props.onSearchChange}
        />
      </div>
        <button onClick={(e)=> props.fetchITunesAlbums(e,props.searchTerm)} >meh</button>

    </div>
  </form>;




export default Search;
