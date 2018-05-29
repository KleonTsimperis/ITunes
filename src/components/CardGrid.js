import React from 'react';
import './Components.css';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';

const CardGrid = props =>

  <div className="card mx-auto my-4 shadowCard text-white" style={{width: "280px"}}>
    <img className="card-img-top" src={props.artworkUrl100.replace('100x100', '1200x1200')} alt={props.collectionName} title={props.collectionName}/>
    <div className="card-body mt-1" style={{height:"120px"}} >
      <h5 className="card-title cardTextOverflow text-white text-center" title={`${props.trackCount} songs`}>{props.collectionName}</h5>
        <p className="card-text text-white text-center mt-4 h4" title={`Genre: ${props.primaryGenreName}`}>- {props.artistName} -</p>
    </div>
    <div className="card-body mb-2 mx-auto" style={{height:"70px"}}>
      <button className="b-blue moreInfoButton"><a href={props.collectionViewUrl} className="text-white" target="_blank">More info</a></button>
    </div>
  </div>

  CardGrid.propTypes = {
    artworkUrl100: urlPropType.isRequired,
    collectionName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    collectionViewUrl: urlPropType.isRequired
  }

export default CardGrid;
