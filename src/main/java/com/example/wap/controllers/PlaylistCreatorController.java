package com.example.wap.controllers;

import com.example.wap.models.PlaylistCreator;
import com.example.wap.repositories.PlaylistCreatorRepository;
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
