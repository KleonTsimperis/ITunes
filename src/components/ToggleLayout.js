import React from 'react';
import './Components.css';
import PropTypes from 'prop-types';

const ToggleLayout = props =>

  <div className="toggleLayout">
    <button onClick={() => props.clearLayout()} className="button2 b-blue rot-135 m-2 .fa-eraser shadowCard text-white">
       <i className="fas fa-eraser"></i>
    </button>
    <button onClick={() => props.switchLayout()} className="button2 b-blue rot-135 m-2 d-block shadowCard text-white">
       {props.grid ? <i className="fas fa-list fa-listIcon"></i> :  <i className="fas fa-th fa-gridIcon"></i>}
     </button>
  </div>;

  ToggleLayout.propTypes = {
    clearLayout: PropTypes.func.isRequired,
    switchLayout: PropTypes.func.isRequired,
    grid: PropTypes.bool.isRequired
  }


export default ToggleLayout;
