import React from 'react';
import { connect } from 'react-redux';
import '../components/Components.css';
import CardGrid from '../components/CardGrid';
import CardList from '../components/CardList';
import Slide from 'react-reveal';
import PropTypes from 'prop-types';


const MainContent = (props,page) =>{

  let result = (
    <Slide>
      <div className="reactReveal">Fetch me music...</div>
    </Slide>
  );

  if (props.searchItunes.display){
    if (props.searchItunes.currentPage===1){
       page = (item,index) => index < 20;
    } else if (props.searchItunes.currentPage===2){
       page = (item,index) => index > 19 && index <40;
    } else if (props.searchItunes.currentPage===3){
       page = (item,index) => index > 39 && index <60;
    }
    result = (
      <div className={props.toggle.grid ? "row" : ""}>
         {props.searchItunes.itunes.results.filter(page).map((item,index) =>
           <div key={index} className={props.toggle.grid ? "col-md-3" : ""}>
             {props.toggle.grid ?
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
    )
  }

return (
    <div className="container-fluid">
      {result}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    toggle: state.booleanReducer,
    searchItunes: state.searchItunesReducer
  }
}

MainContent.propTypes = {
  grid: PropTypes.bool,
  itunes: PropTypes.shape({
    results: PropTypes.array
  })
}

export default connect(mapStateToProps)(MainContent);
