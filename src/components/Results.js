import React from 'react';
import './Components.css';
import CardGrid from './CardGrid';
import CardList from './CardList';
import PropTypes from 'prop-types';

const Results = (props,page) =>{
  if (props.currentPage===1){
     page = (item,index) => index < 20;
  } else if (props.currentPage===2){
     page = (item,index) => index > 19 && index <40;
  } else if (props.currentPage===3){
     page = (item,index) => index > 39 && index <60;
  }

return <div className="container-fluid">
   <div className={props.grid ? "row" : ""}>
      {props.itunes.results.filter(page).map((item,index) =>
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
</div>
};

Results.propTypes = {
  grid: PropTypes.bool.isRequired,
  itunes: PropTypes.shape({
    results: PropTypes.array
  })
}

export default Results;
