package com.example.myapp2.repositories;

import org.springframework.data.repository.CrudRepository;
import com.example.myapp2.models.PlaylistCreator;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
@Service
public interface PlaylistCreatorRepository extends
    CrudRepository<PlaylistCreator, Integer> {
}
