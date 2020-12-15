class PlaylistListenerEditor extends React.Component {

    state = {
        playlistListener: {}
    }

    findPlaylistListenerById = (id) =>
        findPlaylistListenerById(id)
            .then(playlistListener => this.setState({playlistListener}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findPlaylistListenerById(id)
    }

    submitForm = () =>
        renamePlaylistListener(this.state.playlistListener)
            .then(this.findPlaylistListenerById)

    render() {
        return(
            <div className="container-fluid">
                <h1>Playlist Listener Editor {this.state.playlistListener.username}</h1>
                <form>
                    <input
                        value={this.state.playlistListener.id}
                        className="form-control"
                        readOnly={true}/>
                    <input
                        onChange={
                            (event) =>
                                this.setState({
                                    playlistListener: {...this.state.playlistListener, username: event.target.value}
                                })}
                        className="form-control"
                        value={this.state.playlistListener.username}/>
                    <button
                        type="button"
                        onClick={() => this.submitForm()}
                        className="btn btn-success">
                        Save
                    </button>
                    <a className="btn btn-danger" href="./playlist-listener-list.html">
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
    <PlaylistListenerEditor/>, document.getElementById("root"))
