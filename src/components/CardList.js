import React, { Fragment } from 'react';
import './Components.css';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import Spinner from './Spinner';
import './Components.css';

const CardList = props => {
  let result = null;
  if(props.isLoading){
    return result = <Spinner/>
  }
  result = (
    <Fragment>
      <div className="listFlex1">
        <img className="card-img-top shadowCardList" style={{borderRadius:"20%"}} src={props.artworkUrl100.replace('100x100', '800x800')} alt={props.collectionName} title={props.collectionName}/>
      </div>
      <div className="listFlex2">
        <h5 className="li-head my-3 listFlex2a" title={`${props.trackCount} songs`}>{props.collectionName}</h5>
        <p className="li-summary my-3 h2 listFlex2b" title={`Genre: ${props.primaryGenreName}`}>{props.artistName}</p>
        <button className="shadowCardList moreInfoButton mt-5"><a href={props.collectionViewUrl} className="text-white" target="_blank">More info</a></button>
      </div>
    </Fragment>
  );

  return(
    <div className="d-flex">
      {result}
    </div>
  );
}


CardList.propTypes = {
  artworkUrl100: urlPropType.isRequired,
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  collectionViewUrl: urlPropType.isRequired
}

export default CardList;
