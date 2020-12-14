package com.example.myapp2.daos;

import com.example.myapp2.models.PlaylistListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.myapp2.repositories.PlaylistListenerRepository;

@RestController
public class PlaylistListenerDao {
  @Autowired
  PlaylistListenerRepository repository;
  @GetMapping("/findAllPlaylistListeners")
  public Iterable<PlaylistListener> findAllPlaylistListeners() {
    return repository.findAll();
  }
  @GetMapping("/findPlaylistListenerById/{sid}")
  public PlaylistListener findPlaylistListenerById(
      @PathVariable("sid") Integer listenerId) {
    return repository.findById(listenerId).get();
  }
  @GetMapping("/createPlaylistListener")
  public PlaylistListener createPlaylistListener() {
    PlaylistListener playlistListener = new PlaylistListener();
    playlistListener.setUsername("New Playlist Listener");
    return repository.save(playlistListener);
  }
  @GetMapping("/deletePlaylistListener/{id}")
  public void deletePlaylistListener(
          @PathVariable("id") Integer id) {
    repository.deleteById(id);
  }
  @GetMapping("/renamePlaylistListener/{id}/{newUsername}")
  public PlaylistListener renamePlaylistListener(
          @PathVariable("id") Integer id,
          @PathVariable("newUsername") String newUsername) {
    PlaylistListener playlistListener = repository.findById(id).get();
    playlistListener.setUsername(newUsername);
    return repository.save(playlistListener);
  }
}

