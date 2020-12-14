package com.example.myapp2.daos;

import com.example.myapp2.models.Playlist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.myapp2.repositories.PlaylistRepository;

@RestController
public class PlaylistDao {
  @Autowired
  PlaylistRepository playlistRepository;
  @GetMapping("/findAllPlaylists")
  public Iterable<Playlist> findAllPlaylists() {
    return playlistRepository.findAll();
  }
  @GetMapping("/findPlaylistById/{id}")
  public Playlist findPlaylistById(
      @PathVariable("id") Integer pid) {
    return playlistRepository.findById(pid).get();
  }
  @GetMapping("/createPlaylist")
  public Playlist createPlaylist() {
    Playlist playlist = new Playlist();
    playlist.setTitle("New Playlist");
    playlist.setPlaylist_creator_id(-1);
    playlist.setPlaylist_listener_id(-1);
    return playlistRepository.save(playlist);
  }
  @GetMapping("/deletePlaylist/{id}")
  public void deletePlaylist(
      @PathVariable("id") Integer id) {
    playlistRepository.deleteById(id);
  }
  @GetMapping("/renamePlaylist/{id}/{newTitle}")
  public Playlist renamePlaylist(
      @PathVariable("id") Integer id,
      @PathVariable("newTitle") String newTitle) {
    Playlist playlist = playlistRepository.findById(id).get();
    playlist.setTitle(newTitle);
    return playlistRepository.save(playlist);
  }
}
