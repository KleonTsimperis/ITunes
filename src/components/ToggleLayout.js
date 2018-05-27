import React from 'react';

const ToggleLayout = props =>

  <div className="toggleLayout">
    <button onClick={() => props.switchLayout()} className="searchButton  shadowCard text-white">
    {props.grid ?
       <i className="fas fa-list fa-listIcon"></i>
        :
       <i className="fas fa-th fa-gridIcon"></i>
      }
     </button>
  </div>;


export default ToggleLayout;
