package com.example.wap.controllers;

import com.example.wap.models.PlaylistListener;
import com.example.wap.models.PlaylistCreator;
import com.example.wap.repositories.PlaylistListenerRepository;
import com.example.wap.repositories.PlaylistCreatorRepository;
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
