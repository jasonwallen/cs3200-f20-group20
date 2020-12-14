package com.example.myapp2.daos;

import com.example.myapp2.models.PlaylistCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.myapp2.repositories.PlaylistCreatorRepository;

@RestController
public class PlaylistCreatorDao {
  @Autowired
  PlaylistCreatorRepository repository;
  @GetMapping("/findAllPlaylistCreators")
  public Iterable<PlaylistCreator> findAllPlaylistCreators() {
    return repository.findAll();
  }
  @GetMapping("/findPlaylistCreatorById/{sid}")
  public PlaylistCreator findPlaylistCreatorById(
      @PathVariable("cid") Integer creatorId) {
    return repository.findById(creatorId).get();
  }
  @GetMapping("createPlaylistCreator")
  public PlaylistCreator createMovie() {
    PlaylistCreator playlistCreator = new PlaylistCreator();
    playlistCreator.setUsername("New Playlist Creator");
    return repository.save(playlistCreator);
  }
  @GetMapping("deletePlaylistCreator/{id}")
  public void deletePlaylistCreator(
          @PathVariable("id") Integer id) {
    repository.deleteById(id);
  }
  @GetMapping("renamePlaylistCreator/{id}/{username}")
  public PlaylistCreator renamePlaylistCreator(
          @PathVariable("id") Integer id,
          @PathVariable("newTitle") String newUsername) {
    PlaylistCreator playlistCreator = repository.findById(id).get();
    playlistCreator.setUsername(newUsername);
    return repository.save(playlistCreator);
  }
}
