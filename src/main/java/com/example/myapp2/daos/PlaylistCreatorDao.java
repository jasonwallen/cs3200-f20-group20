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
  PlaylistCreatorRepository playlistCreatorRepository;
  @GetMapping("/findAllPlaylistCreators")
  public Iterable<PlaylistCreator> findAllPlaylistCreators() {
    return playlistCreatorRepository.findAll();
  }
  @GetMapping("/findPlaylistCreatorById/{cid}")
  public PlaylistCreator findPlaylistCreatorById(
      @PathVariable("cid") Integer cid) {
    return playlistCreatorRepository.findById(cid).get();
  }
  @GetMapping("/createPlaylistCreator")
  public PlaylistCreator createPlaylistCreator() {
    PlaylistCreator playlistCreator = new PlaylistCreator();
    playlistCreator.setUsername("New Playlist Creator");
    return playlistCreatorRepository.save(playlistCreator);
  }
  @GetMapping("/deletePlaylistCreator/{id}")
  public void deletePlaylistCreator(
          @PathVariable("id") Integer id) {
    playlistCreatorRepository.deleteById(id);
  }
  @GetMapping("/renamePlaylistCreator/{id}/{newUsername}")
  public PlaylistCreator renamePlaylistCreator(
          @PathVariable("id") Integer id,
          @PathVariable("newUsername") String newUsername) {
    PlaylistCreator playlistCreator = playlistCreatorRepository.findById(id).get();
    playlistCreator.setUsername(newUsername);
    return playlistCreatorRepository.save(playlistCreator);
  }
}
