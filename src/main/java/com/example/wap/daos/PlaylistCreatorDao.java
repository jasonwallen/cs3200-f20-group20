package com.example.wap.daos;


import com.example.wap.models.PlaylistCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.wap.repositories.PlaylistCreatorRepository;

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
}
