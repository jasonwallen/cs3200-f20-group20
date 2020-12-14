class PlaylistListenerEditor extends React.Component {

    state = {
        playlistListeners: {}
    }

    findPlaylistListenerById = (id) =>
        findPlaylistListenerById(id)
            .then(playlistListener => this.setState({playlistListener}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findPlaylistListenerById(id)
    }

    savePlaylistListener = () =>
        renamePlaylistListener(this.state.playlistListener)

    render() {
        return(
            <div className="container">
                <h1>Playlist Listener Editor {this.state.playlistListener.username}</h1>
                <input className="form-control" readOnly={true} value={this.state.playlistListener.id}/>
                <input
                    onChange={(event) => this.setState({
                        playlistListener: {
                            ...this.state.playlistListener,
                            title: event.target.value
                        }
                    })}
                    className="form-control"
                    value={this.state.playlistListener.username}/>
                <button onClick={this.savePlaylistListener}>
                    Save
                </button>
                <a href="playlist-listener-list.html">
                    Done
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <PlaylistListenerEditor/>, document.getElementById("root"))
