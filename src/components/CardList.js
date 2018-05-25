import React from 'react';
import './Components.css';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';

const CardList = props =>

<div id="pattern" className="pattern my-4 d-flex align-items-start flex-column">
  <ul className="list img-list">
    <li>
        <div className="li-img">
          <img className="card-img-top" src={props.artworkUrl100.replace('100x100', '1200x1200')}/>
        </div>
        <div className="li-text">
          <h4 className="li-head">{props.collectionName}</h4>
          <p className="li-summary">{props.artistName}</p>
          <p className="li-action"><button id="listButton" className="searchButton w-25"><a href={props.collectionViewUrl} className="text-white" target="_blank">More info</a></button></p>
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
