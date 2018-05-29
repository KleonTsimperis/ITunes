import React from 'react';
import './Components.css';
import CardGrid from './CardGrid';
import CardList from './CardList';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';



const page2 = (item,index) => {
    return index > 19 && index <40;
  }
const page3 = (item,index) => {
    return index > 39 && index <60;
  }

const AdditionalPages = props =>

<div className="container-fluid">
   <div className={props.grid ? "row" : ""}>
      {props.itunes.results.filter((item,index) => index > 19 && index <40).map((item,index) =>
        <div key={index} className={props.grid ? "col-md-3" : ""}>
          {props.grid ?
            <CardGrid
              artworkUrl100={item.artworkUrl100}
              collectionName={item.collectionName}
              primaryGenreName={item.primaryGenreName}
              artistName={item.artistName}
              collectionViewUrl={item.collectionViewUrl}
              grid={item.grid}
              trackCount={item.trackCount}
            />
            :
            <CardList
              artworkUrl100={item.artworkUrl100}
              collectionName={item.collectionName}
              primaryGenreName={item.primaryGenreName}
              artistName={item.artistName}
              collectionViewUrl={item.collectionViewUrl}
              grid={item.grid}
              trackCount={item.trackCount}
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
  fetchMorePages: PropTypes.func
}

export default AdditionalPages;
