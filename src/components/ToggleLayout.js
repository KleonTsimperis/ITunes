import React from 'react';

const ToggleLayout = props =>

  <div className="toggleLayout">
    <button onClick={() => props.switchLayout()} className="searchButton  shadowCard text-white">{props.grid ? 'List' : 'Grid'}</button>
  </div>;

export default ToggleLayout;
