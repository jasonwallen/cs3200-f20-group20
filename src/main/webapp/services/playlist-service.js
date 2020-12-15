
const FIND_ALL_PLAYLISTS = "http://localhost:8080/findAllPlaylists"
const FIND_PLAYLIST_BY_ID = "http://localhost:8080/findPlaylistById"
const CREATE_PLAYLIST_URL = "http://localhost:8080/createPlaylist"
const DELETE_PLAYLIST_URL = "http://localhost:8080/deletePlaylist"
const RENAME_PLAYLIST = "http://localhost:8080/renamePlaylist"

const findAllPlaylists = () =>
    fetch(`${FIND_ALL_PLAYLISTS}`)
    .then(response => response.json())

const findPlaylistById = (id) =>
    fetch(`${FIND_PLAYLIST_BY_ID}/${id}`)
    .then(response => response.json())

const createPlaylist = () =>
    fetch(`${CREATE_PLAYLIST_URL}`)
    .then(response => response.json())

const deletePlaylist = (id) =>
    fetch(`${DELETE_PLAYLIST_URL}/${id}`)

const renamePlaylist = (playlist) =>
    fetch(`${RENAME_PLAYLIST}/${playlist.id}/${playlist.title}`)
    .then(response => response.json())
