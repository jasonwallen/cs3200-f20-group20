class PlaylistCreatorEditor extends React.Component {

  state = {
    playlistCreator: {}
  }

  findPlaylistCreatorById = (id) =>
      findPlaylistCreatorById(id)
      .then(playlistCreator => this.setState({playlistCreator}))

  componentDidMount = () => {
    const id = window.location.search.split("=")[1]
    this.findPlaylistCreatorById(id)
  }

  savePlaylistCreator = () =>
      renamePlaylistCreator(this.state.playlistCreator)

  render() {
    return(
        <div className="container">
          <h1>Playlist Creator Editor {this.state.playlistCreator.username}</h1>
          <input className="form-control" readOnly={true} value={this.state.playlistCreator.id}/>
          <input
              onChange={(event) => this.setState({
                playlistCreator: {
                  ...this.state.playlistCreator,
                  title: event.target.value
                }
              })}
              className="form-control"
              value={this.state.playlistCreator.username}/>
          <button onClick={this.savePlaylistCreator}>
            Save
          </button>
          <a href="playlist-creator-list.html">
            Done
          </a>
        </div>
    )
  }
}

ReactDOM.render(
    <PlaylistCreatorEditor/>, document.getElementById("root"))
