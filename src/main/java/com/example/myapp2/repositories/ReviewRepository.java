package com.example.myapp2.repositories;

import com.example.myapp2.models.Playlist;
import org.springframework.data.repository.CrudRepository;

public interface ReviewRepository extends
    CrudRepository<Playlist, Integer> {
}