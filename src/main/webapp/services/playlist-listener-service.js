const FIND_ALL_PLAYLIST_LISTENERS = "https://databasedesignfinalplaylist.herokuapp.com/findAllPlaylistListeners"
const FIND_PLAYLIST_LISTENER_BY_ID = "https://databasedesignfinalplaylist.herokuapp.com/findPlaylistListenerById"
const CREATE_PLAYLIST_LISTENER_URL = "https://databasedesignfinalplaylist.herokuapp.com/createPlaylistListener"
const DELETE_PLAYLIST_LISTENER_URL = "https://databasedesignfinalplaylist.herokuapp.com/deletePlaylistListener"
const RENAME_PLAYLIST_LISTENER = "https://databasedesignfinalplaylist.herokuapp.com/renamePlaylistListener"

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
    fetch(`${RENAME_PLAYLIST_LISTENER}/${playlistListener.id}/${playlistListener.title}`)
        .then(response => response.json())
