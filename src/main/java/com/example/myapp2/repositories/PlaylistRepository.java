package com.example.myapp2.repositories;

import com.example.myapp2.models.Playlist;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

// @Repository
// Service
public interface PlaylistRepository extends
    CrudRepository<Playlist, Integer> {
}


