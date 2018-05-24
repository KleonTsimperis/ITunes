import React from 'react';
import './Components.css';

const Card = props =>

    <div className="card m-5 shadowCard" style={{width: "320px"}}>
        <img className="card-img-top" src={props.artworkUrl100.replace('100x100', '1200x1200')}/>
        <div className="card-body mt-1" style={{height:"120px"}} >
          <h5 className="card-title cardTextOverflow">{props.collectionName}</h5>
          <blockquote className="blockquote">
            <p className="card-text"></p>
            <footer className="blockquote-footer">{props.artistName}</footer>
          </blockquote>
        </div>
        <div className="card-body mb-2" style={{height:"70px"}}>
          <button className="searchButton"><a href={props.collectionViewUrl} className="text-white" target="_blank">More info</a></button>
        </div>
      </div>;

export default Card;
