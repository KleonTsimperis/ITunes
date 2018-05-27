import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Results from './components/Results';
import ToggleLayout from './components/ToggleLayout';
import AdditionalPages from './components/AdditionalPages';
import axios from 'axios';
import { connect } from 'react-redux';




const PATH_BASE = 'https://itunes.apple.com/search';
const PATH_TERM = 'term=';
const COUNTRY = 'country=es';
const ALBUMS = 'entity=album';
const LIMIT = 'limit=60';

// const try = 'https://itunes.apple.com/search?term=yelp&country=us&entity=software';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm:'',
      itunes:null,
      grid:true,
      additionalPages:false
    }
  }

  // switchLayout = () => {
  //   this.setState({
  //     grid:!this.state.grid
  //   })
  // }

  // onSearchChange = event =>{
  //   this.setState({
  //     searchTerm:event.target.value
  //   })
  // }


  fetchMorePages = () =>
    this.setState({
      additionalPages:!this.state.additionalPages
    })


  fetchITunesAlbums = (e,searchTerm,error) =>{
     e.preventDefault();
     axios.get(`${PATH_BASE}?${PATH_TERM}${searchTerm}&${COUNTRY}&${ALBUMS}&${LIMIT}`)
          .then(response => this.setState({itunes:response.data}))
          .catch(error=>console.log(error))
   }

  render() {
    // const { itunes, grid, additionalPages } = this.state;
    return (

       <div>
          <Navbar
            // searchTerm={this.state.searchTerm}
            searchTerm={this.props.searchItunes.searchTerm}
            onSearchChange={(e) => this.props.onSearchChange(e.target.value)}
            fetchITunesAlbums={() => this.props.fetchITunesAlbums()}
          > ITunes Searcher
          </Navbar>

          { this.props.searchItunes.itunes &&
              <Results itunes={this.props.searchItunes.itunes} grid={this.props.toggle.grid} additionalPages={this.props.toggle.additionalPages} fetchMorePages={this.fetchMorePages}/>
          }

          { this.props.toggle.additionalPages &&
              <AdditionalPages itunes={this.props.searchItunes.itunes} grid={this.props.toggle.grid}/>
          }

          <ToggleLayout
            switchLayout={()=> this.props.switchLayout()}
            grid={this.props.toggle.grid}
          />
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
      dispatch({
        type:"GRID"
      });
    },
    onSearchChange: (term) => {
      dispatch({
        type:"SEARCHTERM",
        payload:term
      });
    },




  };
};


export default connect(mapStateToProps,mapDispatchToProps)(App);
