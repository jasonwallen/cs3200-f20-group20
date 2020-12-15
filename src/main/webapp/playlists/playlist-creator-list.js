class PlaylistCreatorList extends React.Component {
  state = {
    playlistCreators: []
  }

  findAllPlaylistCreators = () =>
      findAllPlaylistCreators()
          .then((playlistCreators) => this.setState({playlistCreators}))

  createPlaylistCreator = () =>
      createPlaylistCreator()
          .then(() => this.findAllPlaylistCreators())

  deletePlaylistCreator = (id) =>
      deletePlaylistCreator(id)
          .then(() => this.findAllPlaylistCreators())

  componentDidMount = () =>
      this.findAllPlaylistCreators()

  render() {
    return(
        <div className="container-fluid">
          <button
              className="btn btn-success float-right"
              onClick={() => this.createPlaylistCreator()}>
            Create
          </button>
          <a className="btn btn-danger float-right"
             href="../index.html">
            Home
          </a>
          <h1>Playlist Creator List</h1>
          <table className="table">
              <thead>
              <tr>
                  <th>PlaylistCreatorId</th>
                  <th>Username</th>
                  <th>&nbsp;</th>
              </tr>
              </thead>
            <tbody>
            {
              this.state.playlistCreators.map((playlistCreator) =>
                  <tr key={playlistCreator.id}>
                    <td>{playlistCreator.id}</td>
                    <td>{playlistCreator.username}</td>
                    <td>
                      <a className="btn btn-primary float-right"
                         href={`./playlist-creator-editor.html?id=${playlistCreator.id}`}>
                        Edit
                      </a>
                      <button className="btn btn-danger float-right"
                              onClick={() => this.deletePlaylistCreator(playlistCreator.id)}>
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
    <PlaylistCreatorList />,
    document.getElementById('root')
)

