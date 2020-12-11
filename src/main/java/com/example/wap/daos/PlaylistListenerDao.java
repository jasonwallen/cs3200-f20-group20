package com.example.wap.daos;


import com.example.wap.models.PlaylistListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.wap.repositories.PlaylistListenerRepository;

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
      @PathVariable("lid") Integer listenerId) {
    return repository.findById(listenerId).get();
  }
}
