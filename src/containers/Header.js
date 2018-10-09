import React from 'react';
import { connect } from 'react-redux';
import { clearLayout, switchLayout } from '../actions/actions';
import Search from './Search';
import Switch from '@material-ui/core/Switch';
import '../components/Components.css';


const Header = props =>
  <nav className="navbar iTunesColor">
    <div>
      <h2 className="title" onClick={props.clearLayout}>
       ITunes Searcher
      </h2>
    </div>
      <div className="switch">
        <div className="item">List</div>
        <Switch
          className="item"
          defaultChecked
          value="checkedF"
          color="default"
          onChange={props.switchLayout}
        />
        <div className="item">Grid</div>
      </div>
    <Search/>
  </nav>;

const mapStateToProps = state => ({
  layoutSwitch: state.booleanReducer.layoutSwitch
});

const mapDispatchToProps = dispatch => ({
  clearLayout:() => dispatch(clearLayout()),
  switchLayout:() => dispatch(switchLayout())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
