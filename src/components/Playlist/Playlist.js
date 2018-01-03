import React from 'react';
import Song from '../Song/Song';
import './Playlist.css'

class Playlist extends React.Component {

  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.clearPlaylistField = this.clearPlaylistField.bind(this);
    this.revertPlaylistField = this.revertPlaylistField.bind(this);
  }

  handleRemove(index) {
    this.props.remove(index);
  }

  savePlaylist(event) {
    const playListInput = document.getElementById('playListName');
    this.props.createPlaylist(playListInput.value);
    playListInput.value = 'New Playlist';
  }

  clearPlaylistField(event) {
    const playListInput = document.getElementById('playListName');
    if (playListInput.value === 'New Playlist') {
      playListInput.value = '';
    }
  }

  revertPlaylistField(event) {
    const playListInput = document.getElementById('playListName');
    if (playListInput.value === '') {
      playListInput.value = 'New Playlist';
    }
  }

  render() {
    return (
      <div className="Playlist">
        <input id='playListName' onMouseEnter={this.clearPlaylistField} onMouseLeave={this.revertPlaylistField} type='text' defaultValue='New Playlist' />
        <div className='TrackList'>
          { this.props.addedSongs.map((song, index) => {
            return (
              <div className="Track" key={index}>
                <Song song={song} />
                <a onClick={() => this.handleRemove(index)} className="Track-action">-</a>
              </div>
            )
          })}
        </div>
        <a onClick={this.savePlaylist} className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
