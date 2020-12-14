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

    submitForm = () =>
        renamePlaylistCreator(this.state.playlistCreator)
            .then(this.findPlaylistCreatorById)

    render() {
        return(
            <div className="container-fluid">
                <h1>Playlist Creator Editor {this.state.playlistCreator.username}</h1>
                <form>
                    <input
                        value={this.state.playlistCreator.id}
                        className="form-control"
                        readOnly={true}/>
                    <input
                        onChange={
                            (event) =>
                                this.setState({
                                    playlistCreator: {...this.state.playlistCreator, username: event.target.value}
                                })}
                        className="form-control"
                        value={this.state.playlistCreator.username}/>
                    <button
                        type="button"
                        onClick={() => this.submitForm()}
                        className="btn btn-success">
                        Save
                    </button>
                    <a className="btn btn-danger" href="./playlist-creator-list.html">
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
    <PlaylistCreatorEditor/>, document.getElementById("root"))
