import React from 'react';
import './Components.css';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';

const CardList = props =>

<div id="pattern" className="pattern my-4 d-flex align-items-start flex-column">
  <ul className="list img-list">
    <li >
        <div className="li-img listCardContainer">
          <img className="card-img-top shadowCardList img-fluid" style={{borderRadius:"20%"}} src={props.artworkUrl100.replace('100x100', '800x800')} alt={props.collectionName} title={props.collectionName}/>
        </div>
        <div className="li-text">
          <h1 className="li-head m-3" title={`${props.trackCount} songs`}>{props.collectionName}</h1>
          <p className="li-summary m-3 h2" title={`Genre: ${props.primaryGenreName}`}>{props.artistName}</p>
          <p className="li-action "><button id="listButton" className="shadowCardList w-25 m-3 b-blue moreInfoButton"><a href={props.collectionViewUrl} className="text-white" target="_blank">More info</a></button></p>
        </div>
    </li>
  </ul>
</div>

CardList.propTypes = {
  artworkUrl100: urlPropType.isRequired,
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  collectionViewUrl: urlPropType.isRequired
}

export default CardList;
