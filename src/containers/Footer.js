import React from 'react';
import { connect } from 'react-redux';
import { onPageChange } from '../actions/actions';
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';

const Footer = props => {
  let footer = null;
  if(props.searchItunes.display){
    footer = (
        <Pagination
          defaultCurrent={1}
          total={props.searchItunes.itunes.results.length}
          defaultPageSize={20}
          onChange={props.onPageChange}
          onClick={window.scrollTo(0,0)}
        />
    );
  }
  return(
    <div>
      {footer}
    </div>
  );
}

const mapStateToProps = state => ({
  searchItunes: state.searchItunesReducer
});

const mapDispatchToProps = dispatch => ({
  onPageChange:page => dispatch(onPageChange(page))
});

export default connect(mapStateToProps,mapDispatchToProps)(Footer);
