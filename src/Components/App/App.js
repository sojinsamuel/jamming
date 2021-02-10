import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      playlistName: 'Playlist 1',
      playListTracks: [
        {name: 'playname1', artist: 'playartist1', album: 'playalbum1', id: 4},
        {name: 'playname2', artist: 'playartist2', album: 'playalbum2', id: 5},
        {name: 'playname3', artist: 'playartist3', album: 'playalbum3', id: 6}
      ],
      searchResults: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
      ]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  
  addTrack(track){
    const addList = this.state.playListTracks;
    if(addList.find(saved => saved.id === track.id)){
      return;
    }
    addList.push(track);
    this.setState({playListTracks: addList});
  }

  removeTrack(track){
    const removeList = this.state.playListTracks.filter(current => current.id !== track.id);
    this.setState({playListTracks: removeList});
  }

  savePlaylist(){
    const trackURIs = this.state.playListTracks.map(track => track.uri);
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd = {this.addTrack}/>
            <Playlist 
              playlistName={this.state.playlistName} 
              playListTracks={this.state.playListTracks}
              onNameChange={this.updatePlaylistName}
              onRemove = {this.removeTrack}
              onSave = {this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
