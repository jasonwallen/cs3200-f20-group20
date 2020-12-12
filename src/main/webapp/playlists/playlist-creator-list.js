class PlaylistCreatorList extends React.Component {

state = {
playlistCreators: []
}

findAllPlaylistCreators = () =>
findAllPlaylistCreators()
.then(playlistCreators => this.setState({playlistCreators}))

componentDidMount = () =>
this.findAllPlaylistCreators()

createPlaylistCreator = () =>
createPlaylistCreator()
.then(this.findAllPlaylistCreators)

deletePlaylistCreator = (id) =>
deletePlaylistCreator(id)
.then(this.findAllPlaylistCreators)

render() {
return(
<div>
  <h1>PlaylistCreator List</h1>
  <table>
    <tbody>
    {
    this.state.playlistCreators.map(playlistCreator =>
    <tr>
      <td>
        {playlistCreator.title}
      </td>
      <td>
        <button onClick={() => this.deletePlaylistCreator(playlistCreator.id)}>
        Delete
        </button>
      </td>
      <td>
        <a href={`playlistCreator-editor.html?id=${playlistCreator.id}`}>
          Edit
        </a>
      </td>
    </tr>
    )
    }
    </tbody>
  </table>
  <button onClick={this.createPlaylistCreator}>
    Create
  </button>
</div>
)
}
}

ReactDOM.render(
<PlaylistCreatorList/>, document.getElementById("root"))
