
const FIND_ALL_PLAYLIST_CREATORS = "https://databasedesignfinalplaylist.herokuapp.com/playlists/findAllPlaylistCreators"
const FIND_PLAYLIST_CREATOR_BY_ID = "https://databasedesignfinalplaylist.herokuapp.com/playlists/findPlaylistCreatorById"
const CREATE_PLAYLIST_CREATOR_URL = "https://databasedesignfinalplaylist.herokuapp.com/playlists/createPlaylistCreator"
const DELETE_PLAYLIST_CREATOR_URL = "https://databasedesignfinalplaylist.herokuapp.com/playlists/deletePlaylistCreator"
const RENAME_PLAYLIST_CREATOR = "https://databasedesignfinalplaylist.herokuapp.com/playlists/renamePlaylistCreator"

const findAllPlaylistCreators = () =>
    fetch(`${FIND_ALL_PLAYLIST_CREATORS}`)
    .then(response => response.json())

const findPlaylistCreatorById = (id) =>
    fetch(`${FIND_PLAYLIST_CREATOR_BY_ID}/${id}`)
    .then(response => response.json())

const createPlaylistCreator = () =>
    fetch(`${CREATE_PLAYLIST_CREATOR_URL}`)
    .then(response => response.json())

const deletePlaylistCreator = (id) =>
    fetch(`${DELETE_PLAYLIST_CREATOR_URL}/${id}`)

const renamePlaylistCreator = (playlistCreator) =>
    fetch(`${RENAME_PLAYLIST_CREATOR}/${playlistCreator.id}/${playlistCreator.title}`)
    .then(response => response.json())
