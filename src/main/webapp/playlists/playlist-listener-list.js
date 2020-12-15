class PlaylistListenerList extends React.Component {

    state = {
        playlistListeners: []
    }

    findAllPlaylistListeners = () =>
        findAllPlaylistListeners()
            .then(playlistListeners => this.setState({playlistListeners}))

    componentDidMount = () =>
        this.findAllPlaylistListeners()

    createPlaylistListener = () =>
        createPlaylistListener()
            .then(this.findAllPlaylistListeners)

    deletePlaylistListener = (id) =>
        deletePlaylistListener(id)
            .then(this.findAllPlaylistListeners)

    render() {
        return(
            <div className="container-fluid">
                <button
                    className="btn btn-success float-right"
                    onClick={() => this.createPlaylistListener()}>
                    Create
                </button>
                <a className="btn btn-danger float-right"
                   href="../index.html">
                    Home
                </a>
                <a className="btn btn-primary float-right"
                   href="./playlist-readonly-list.html">
                    Playlist List
                </a>
                <h1>Playlist Listener List</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>PlaylistListenerId</th>
                        <th>Username</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.playlistListeners.map((playlistListener) =>
                            <tr key={playlistListener.id}>
                                <td>{playlistListener.id}</td>
                                <td>{playlistListener.username}</td>
                                <td>
                                    <a className="btn btn-primary float-right"
                                       href={`./playlist-listener-editor.html?id=${playlistListener.id}`}>
                                        Edit
                                    </a>
                                    <button className="btn btn-danger float-right"
                                            onClick={() => this.deletePlaylistListener(playlistListener.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(
    <PlaylistListenerList/>, document.getElementById("root"))
