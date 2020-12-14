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
          <h1>PlaylistCreator List</h1>
          <table className="table">
            <tbody>
            {
              this.state.playlistCreators.map((playlistCreator) =>
                  <tr key={playlistCreator.id}>
                    <td>{playlistCreator.id}</td>
                    <td>{playlistCreator.username}</td>
                    <td>
                      <a className="btn btn-primary float-right"
                         href={`/playlistCreator-editor/playlistCreator-editor.html?playlistCreatorId=${playlistCreator.id}`}>
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

