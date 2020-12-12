package com.example.myapp2.controllers;

import com.example.myapp2.models.PlaylistListener;
import com.example.myapp2.models.PlaylistCreator;
import com.example.myapp2.repositories.PlaylistListenerRepository;
import com.example.myapp2.repositories.PlaylistCreatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlaylistListenerController {
  @Autowired
  PlaylistListenerRepository playlistListenerRepository;
  @GetMapping("/api/playlistListeners")
  public List<PlaylistListener> findAllCourses() {
    return (List<PlaylistListener>) playlistListenerRepository.findAll();
  }
}
