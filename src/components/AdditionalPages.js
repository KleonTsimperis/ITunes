import React from 'react';
import './Components.css';
import Card from './Card';




const AdditionalPages = props =>
  <div>


      {props.itunes.results.filter((item,index) => index > 20).map((item,index) =>
        <div className="col-md-3">
          <Card
            key={index}
            artworkUrl100={item.artworkUrl100}
            collectionName={item.collectionName}
            primaryGenreName={item.primaryGenreName}
            artistName={item.artistName}
            collectionViewUrl={item.collectionViewUrl}
          />
        </div>
      )}
  </div>;

export default AdditionalPages;
