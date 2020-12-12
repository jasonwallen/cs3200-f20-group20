package com.example.myapp2.controllers;

import com.example.myapp2.models.PlaylistCreator;
import com.example.myapp2.repositories.PlaylistCreatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlaylistCreatorController {
  @Autowired
  PlaylistCreatorRepository playlistCreatorRepository;
  @GetMapping("/api/playlistCreators")
  public List<PlaylistCreator> findAllCourses() {
    return (List<PlaylistCreator>) playlistCreatorRepository.findAll();
  }
}
