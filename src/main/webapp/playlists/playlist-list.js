class PlaylistList extends React.Component {
  state = {
    playlists: []
  }

  findAllPlaylists = () =>
      findAllPlaylists()
      .then((playlists) => this.setState({playlists}))

  createPlaylist = () =>
      createPlaylist()
      .then(() => this.findAllPlaylists())

  deletePlaylist = (id) =>
      deletePlaylist(id)
      .then(() => this.findAllPlaylists())

  componentDidMount = () =>
      this.findAllPlaylists()

  render() {
    return(
        <div className="container-fluid">
          <button
              className="btn btn-success float-right"
              onClick={() => this.createPlaylist()}>
            Create
          </button>
          <a className="btn btn-danger float-right"
             href="../index.html">
            Home
          </a>
          <h1>Playlist List</h1>
          <table className="table">
            <thead>
            <tr>
              <th>Playlist ID</th>
              <th>Title</th>
              <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.playlists.map((playlist) =>
                  <tr key={playlist.id}>
                    <td>{playlist.id}</td>
                    <td>{playlist.title}</td>
                    <td>
                      <a className="btn btn-primary float-right"
                         href={`./playlist-editor.html?id=${playlist.id}`}>
                        Edit
                      </a>
                      <button className="btn btn-danger float-right"
                              onClick={() => this.deletePlaylist(playlist.id)}>
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
    <PlaylistList />,
    document.getElementById('root')
)

