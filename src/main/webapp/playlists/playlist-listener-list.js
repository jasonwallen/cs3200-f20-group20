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
            <div>
                <h1>PlaylistListener List</h1>
                <table>
                    <tbody>
                    {
                        this.state.playlistListeners.map(playlistListener =>
                            <tr>
                                <td>
                                    {playlistListener.username}
                                </td>
                                <td>
                                    <button onClick={() => this.deletePlaylistListener(playlistListener.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`playlistListener-editor.html?id=${playlistListener.id}`}>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={this.createPlaylistListener}>
                    Create
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <PlaylistListenerList/>, document.getElementById("root"))
