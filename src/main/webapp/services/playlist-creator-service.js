const FIND_ALL_PLAYLIST_CREATORS = "http://localhost:8080/findAllPlaylistCreators"
const FIND_PLAYLIST_CREATOR_BY_ID = "http://localhost:8080/findPlaylistCreatorById"
const CREATE_PLAYLIST_CREATOR_URL = "http://localhost:8080/createPlaylistCreator"
const DELETE_PLAYLIST_CREATOR_URL = "http://localhost:8080/deletePlaylistCreator"
const RENAME_PLAYLIST_CREATOR = "http://localhost:8080/renamePlaylistCreator"

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
