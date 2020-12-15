class PlaylistEditor extends React.Component {

  state = {
    playlist: {}
  }

  findPlaylistById = (id) =>
      findPlaylistById(id)
      .then(playlist => this.setState({playlist}))

  componentDidMount = () => {
    const id = window.location.search.split("=")[1]
    this.findPlaylistById(id)
  }

  submitForm = () =>
      renamePlaylist(this.state.playlist)
      .then(this.findPlaylistById)

  render() {
    return(
        <div className="container-fluid">
          <h1>Playlist Editor {this.state.playlist.title}</h1>
          <form>
            <input
                value={this.state.playlist.id}
                className="form-control"
                readOnly={true}/>
            <input
                onChange={
                  (event) =>
                      this.setState({
                        playlist: {...this.state.playlist, title: event.target.value}
                      })}
                className="form-control"
                value={this.state.playlist.title}/>
            <button
                type="button"
                onClick={() => this.submitForm()}
                className="btn btn-success">
              Save
            </button>
            <a className="btn btn-danger" href="./playlist-list.html">
              Cancel
            </a>
          </form>
          {/*<a href={`./section-list.html?courseId=${this.state.course.courseId}`}>*/}
          {/*    Playlists*/}
          {/*</a>*/}
        </div>
    )
  }
}

ReactDOM.render(
    <PlaylistEditor/>, document.getElementById("root"))
