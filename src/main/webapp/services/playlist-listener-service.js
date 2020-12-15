const FIND_ALL_PLAYLIST_LISTENERS = "http://localhost:8080/findAllPlaylistListeners"
const FIND_PLAYLIST_LISTENER_BY_ID = "http://localhost:8080/findPlaylistListenerById"
const CREATE_PLAYLIST_LISTENER_URL = "http://localhost:8080/createPlaylistListener"
const DELETE_PLAYLIST_LISTENER_URL = "http://localhost:8080/deletePlaylistListener"
const RENAME_PLAYLIST_LISTENER = "http://localhost:8080/renamePlaylistListener"

const findAllPlaylistListeners = () =>
    fetch(`${FIND_ALL_PLAYLIST_LISTENERS}`)
        .then(response => response.json())

const findPlaylistListenerById = (id) =>
    fetch(`${FIND_PLAYLIST_LISTENER_BY_ID}/${id}`)
        .then(response => response.json())

const createPlaylistListener = () =>
    fetch(`${CREATE_PLAYLIST_LISTENER_URL}`)
        .then(response => response.json())

const deletePlaylistListener = (id) =>
    fetch(`${DELETE_PLAYLIST_LISTENER_URL}/${id}`)

const renamePlaylistListener = (playlistListener) =>
    fetch(`${RENAME_PLAYLIST_LISTENER}/${playlistListener.id}/${playlistListener.username}`)
        .then(response => response.json())
