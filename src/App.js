import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Results from './components/Results';
import ToggleLayout from './components/ToggleLayout';
import AdditionalPages from './components/AdditionalPages';
import axios from 'axios';


const PATH_BASE = 'https://itunes.apple.com/search';
const PATH_TERM = 'term=';
const COUNTRY = 'country=es';
const ALBUMS = 'entity=album';
const LIMIT = 'limit=50';

// const try = 'https://itunes.apple.com/search?term=yelp&country=us&entity=software';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm:'',
      itunes:null,
      grid:true,
      additionalPages:false,
      isLoading:false,
      error:null
    }
  }

  switchLayout = () => {
    this.setState({
      grid:!this.state.grid
    })
  }

  onSearchChange = event =>{
    this.setState({
      searchTerm:event.target.value
    })
  }


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



  componentDidMount(){
    this.setState({isLoading:true})
  }

  render() {
    const { itunes, grid, additionalPages, isLoading, error } = this.state;

    return (
       <div>
          <Navbar
            searchTerm={this.state.searchTerm}
            onSearchChange={this.onSearchChange}
            fetchITunesAlbums={this.fetchITunesAlbums}
            switchLayout={this.switchLayout}
            grid={grid}
          > ITunes Searcher
          </Navbar>


          { itunes &&
              <Results itunes={itunes} grid={grid} additionalPages={additionalPages} fetchMorePages={this.fetchMorePages}/>
          }

          { additionalPages &&
              <AdditionalPages itunes={itunes} grid={grid}/>
          }

          <ToggleLayout
            switchLayout={this.switchLayout}
            grid={grid}
          />
      </div>
    );
  }
}

export default App;
