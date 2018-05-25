import React from 'react';
import './Components.css';
import CardGrid from './CardGrid';
import CardList from './CardList';
import PropTypes from 'prop-types';


const Results = props =>

<div className="container-fluid">
   <div className={props.grid ? "row" : ""}>
      {props.itunes.results.filter((item,index) => index < 20).map((item,index) =>
        <div key={index} className={props.grid ? "col-md-3" : ""}>
          {props.grid ?
            <CardGrid
              artworkUrl100={item.artworkUrl100}
              collectionName={item.collectionName}
              primaryGenreName={item.primaryGenreName}
              artistName={item.artistName}
              collectionViewUrl={item.collectionViewUrl}
              grid={item.grid}
            />
            :
            <CardList
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
        <button onClick={() => props.fetchMorePages()}>CLICK ME FOR ADDITIONAL PAGES</button>
   </div>
</div>;

Results.propTypes = {
  grid: PropTypes.bool.isRequired,
  itunes: PropTypes.shape({
    results: PropTypes.array
  }),
  fetchMorePages: PropTypes.func.isRequired
}


export default Results;
