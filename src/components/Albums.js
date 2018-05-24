import React, { Component } from 'react';

const isSearched = function(pattern){
  return function(item){
    return item.album.toLowerCase().includes(pattern.toLowerCase());
  }
}

const Albums = props =>
  <div>
    {props.albums.filter(isSearched(props.searchTerm)).map((item)=>
      <div style={{height:'70px'}}>
        <p key={item.id}>{item.album}</p> from <em>{item.band}</em>
        <button onClick={()=>props.dismiss(item.id)}>X</button>
      <br/></div>
    )}
  </div>;



export default Albums;


// <Albums
//   searchTerm={this.state.searchTerm}
//   albums={this.state.albums}
//   dismiss={this.albumDismiss}
// />

//
// <button onClick={this.fetchITunesAlbums(this.state.searchTerm)} >Temp Button to fetch data</button>
