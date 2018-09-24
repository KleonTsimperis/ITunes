import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import Results from './components/Results';
import ToggleLayout from './components/ToggleLayout';
import axios from 'axios';
import Pages from './components/Pages';
import Slide from 'react-reveal';
import {switchLayout} from './actions/actions';
import {onSearchChange} from './actions/actions';
import {page} from './actions/actions';
import {clearLayout} from './actions/actions';
import {fetchITunesAlbums} from './actions/actions';

const PATH_BASE = 'https://itunes.apple.com/search';
const PATH_TERM = 'term=';
const COUNTRY = 'country=es';
const ALBUMS = 'entity=album';
const LIMIT = 'limit=60';

class App extends Component {

  render() {
    return (
       <div name="top">
          <Navbar
            clearLayout={()=> this.props.clearLayout()}
            searchTerm={this.props.searchItunes.searchTerm}
            onSearchChange={(e) => this.props.onSearchChange(e.target.value)}
            fetchITunesAlbums={(e) => this.props.fetchITunesAlbums(e,this.props.searchItunes.searchTerm)}
          > ITunes Searcher
          </Navbar>
          { !this.props.searchItunes.display &&
            <Slide>
              <h1 className="reactReveal">Fetch me music...</h1>
            </Slide>
          }
          { this.props.searchItunes.display &&
          <Results
              itunes={this.props.searchItunes.itunes}
              grid={this.props.toggle.grid}
              additionalPages={this.props.toggle.additionalPages}
              fetchMorePages={this.props.fetchMorePages}
              currentPage={this.props.searchItunes.currentPage}
           />
          }

          <ToggleLayout
            switchLayout={()=> this.props.switchLayout()}
            grid={this.props.toggle.grid}
            clearLayout={()=> this.props.clearLayout()}
          />

          { this.props.searchItunes.display &&
          <Pages
            numberOfAlbums={this.props.searchItunes.itunes.results.length}
            page1={()=> this.props.page("PAGE1")}
            page2={()=> this.props.page("PAGE2")}
            page3={()=> this.props.page("PAGE3")}
          />
          }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toggle: state.booleanReducer,
    searchItunes: state.searchItunesReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchLayout: () => {
      dispatch(switchLayout());
    },
    onSearchChange: (searchTerm) => {
      dispatch(onSearchChange(searchTerm));
    },
    clearLayout: () => {
      dispatch(clearLayout());
    },
    page: (pageNumber) => {
      dispatch(page(pageNumber));
    },
    fetchITunesAlbums: (e,searchTerm) => {
      console.log(searchTerm);
      e.preventDefault();
        axios.get(`${PATH_BASE}?${PATH_TERM}${searchTerm}&${COUNTRY}&${ALBUMS}&${LIMIT}`)
          .then(response =>{
            dispatch(fetchITunesAlbums(response.data));
          });
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
