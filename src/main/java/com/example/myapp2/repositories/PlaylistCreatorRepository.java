package com.example.myapp2.repositories;
import org.springframework.data.repository.CrudRepository;
import com.example.myapp2.models.PlaylistCreator;

public interface PlaylistCreatorRepository extends
    CrudRepository<PlaylistCreator, Integer> {
}
