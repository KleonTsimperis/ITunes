import React from 'react';
import './Components.css';
import CardGrid from './CardGrid';
import CardList from './CardList';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';


const AdditionalPages = props =>

<div className="container-fluid">
   <div className={props.grid ? "row" : ""}>
      {props.itunes.results.filter((item,index) => index > 19 && index <40).map((item,index) =>
        <div className={props.grid ? "col-md-3" : ""}>
          {props.grid ?
            <CardGrid
              key={index}
              artworkUrl100={item.artworkUrl100}
              collectionName={item.collectionName}
              primaryGenreName={item.primaryGenreName}
              artistName={item.artistName}
              collectionViewUrl={item.collectionViewUrl}
              grid={item.grid}
            />
            :
            <CardList
              key={index}
              artworkUrl100={item.artworkUrl100}
              collectionName={item.collectionName}
              primaryGenreName={item.primaryGenreName}
              artistName={item.artistName}
              collectionViewUrl={item.collectionViewUrl}
              grid={item.grid}
            />
          }
        </div>
      )}
   </div>
</div>;

AdditionalPages.propTypes = {
  grid: PropTypes.bool.isRequired,
  itunes: PropTypes.shape({
    results: PropTypes.array
  }),
  fetchMorePages: PropTypes.func.isRequired
}

export default AdditionalPages;
