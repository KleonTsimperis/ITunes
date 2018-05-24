import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import GridResults from './components/GridResults';
import ListResults from './components/ListResults';
import ToggleLayout from './components/ToggleLayout';
import AdditionalPages from './components/AdditionalPages';


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
      additionalPages:false
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

  albumDismiss = id => {
    const updatedList =this.state.albums.filter(item=>item.id !== id );
    this.setState({
      albums:updatedList
    })
  }

  fetchMorePages = () =>
    this.setState({
      additionalPages:!this.state.additionalPages
    })


  fetchITunesAlbums = (e,searchTerm) =>{
    e.preventDefault();
    fetch(`${PATH_BASE}?${PATH_TERM}${searchTerm}&${COUNTRY}&${ALBUMS}&${LIMIT}`)
      .then(response=> response.json())
      .then(itunes=>this.setState({itunes}))
      .catch(e=>e);
  }

  componentDidMount(e){
    const { searchTerm } = this.state;
  }

  render() {
    const { itunes, grid, additionalPages } = this.state;
    return (
        <div>
          <Navbar/>
          <Search
            searchTerm={this.state.searchTerm}
            onSearchChange={this.onSearchChange}
            fetchITunesAlbums={this.fetchITunesAlbums}
            switchLayout={this.switchLayout}
          />
          {itunes &&
            <div>
            {
              this.state.grid ? <GridResults itunes={itunes} additionalPages={additionalPages} fetchMorePages={this.fetchMorePages} /> : <ListResults itunes={itunes} additionalPages={additionalPages} fetchMorePages={this.fetchMorePages}/>
            }
            </div>
          }
          {additionalPages &&
            <AdditionalPages itunes={itunes}/>
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
