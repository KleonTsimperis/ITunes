import React from 'react';
import { connect } from 'react-redux';
import { clearLayout, switchLayout } from '../actions/actions';
import Search from './Search';
import Switch from '@material-ui/core/Switch';
import '../components/Components.css';

const Header = props =>
  <nav className="navbar iTunesColor">
    <a className="navbar-brand mr-5 mt-2 my-auto">
     <h2 className="neon title" onClick={props.clearLayout}>
      ITunes Searcher
     </h2>
    </a>
      <div className="navFlex">
        <div className="item">LIST</div>
        <Switch
          className="item"
          defaultChecked
          value="checkedF"
          color="default"
          onChange={props.switchLayout}
        />
        <div className="item">GRID</div>
      </div>
    <Search/>
  </nav>;

const mapDispatchToProps = dispatch => ({
  clearLayout:() => dispatch(clearLayout()),
  switchLayout:() => dispatch(switchLayout())
});

export default connect(null,mapDispatchToProps)(Header);
