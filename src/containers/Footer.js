import React from 'react';
import { connect } from 'react-redux';
import Pages from '../components/Pages';
import { page } from '../actions/actions';

const Footer = props => {
  let footer = null;
  if(props.searchItunes.display){
    footer = (
      <Pages
        numberOfAlbums={props.searchItunes.itunes.results.length}
        page1={()=> props.page("PAGE1")}
        page2={()=> props.page("PAGE2")}
        page3={()=> props.page("PAGE3")}
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
})

const mapDispatchToProps = dispatch => {
  return {
    page: (pageNumber) => {
      dispatch(page(pageNumber));
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer);
