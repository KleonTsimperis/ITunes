import React, { Component } from 'react';

const Button = props =>

<div className="col-5 col-md-2">
  <button  onClick={(e)=>props.fetchITunesAlbums(e,props.searchTerm)} className="btn btn-block btn-lg btn-primary">{props.children}</button>
</div>;

export default Button;
