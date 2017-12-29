import React, { Component } from 'react';
import './style.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Spotify from './util/Spotify';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      songs: []
    };

    this.searchSpotify = this.searchSpotify.bind(this);
    this.loginStatus = this.loginStatus.bind(this);
    this.login = this.login.bind(this);
  }

  searchSpotify(searchTerm) {
    Spotify.search(searchTerm).then(songs => this.setState({songs: songs}, () => {console.log(this.state.songs);}));
  }

  loginStatus() {
    return Spotify.loginStatus();
  }

  login() {
    return Spotify.login();
  }

  render() {
    return (
      <div className="App">
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <SearchBar loginStatus={this.loginStatus} searchSpotify={this.searchSpotify} login={this.login} />
        <div className="App-playlist">
          <SearchResults songs={this.state.songs} />
          <Playlist />
        </div>
      </div>
    );
  }
}

export default App;
