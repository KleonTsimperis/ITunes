import React, {Fragment} from 'react';
import './Components.css';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import Spinner from './Spinner';

const CardGrid = props => {
  let result = null;
  if(props.isLoading){
    return result = <Spinner/>
  }
  result = (
    <Fragment>
      <img className="card-img-top" src={props.artworkUrl100.replace('100x100', '1200x1200')} alt={props.collectionName} title={props.collectionName}/>
      <div className="card-body mt-1" style={{height:"120px"}} >
        <h5 className="card-title cardTextOverflow text-white text-center" title={`${props.trackCount} songs`}>{props.collectionName}</h5>
          <p className="card-text text-white text-center mt-4 h4" title={`Genre: ${props.primaryGenreName}`}>- {props.artistName} -</p>
      </div>
      <div className="card-body mb-2 mx-auto" style={{height:"70px"}}>
        <button className="b-blue searchButton"><a href={props.collectionViewUrl} className="text-white" target="_blank">More info</a></button>
      </div>
    </Fragment>
  );

  return(
    <div className="card mx-auto my-4 shadowCard" style={{width: "280px"}}>
      {result}
    </div>
  );
}

  CardGrid.propTypes = {
    artworkUrl100: urlPropType.isRequired,
    collectionName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    collectionViewUrl: urlPropType.isRequired
  }

export default CardGrid;
