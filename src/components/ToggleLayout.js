import React from 'react';

const ToggleLayout = props =>

  <div className="toggleLayout">
    <button onClick={() => props.switchLayout()} className="searchButton  shadowCard text-white">
    {props.grid ?
       <i class="fas fa-list fa-listIcon"></i>
        :
       <i class="fas fa-th fa-gridIcon"></i>
      }
     </button>
  </div>;


export default ToggleLayout;
