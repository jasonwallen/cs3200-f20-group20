package com.example.myapp2.repositories;

import com.example.myapp2.models.Review;
import org.springframework.data.repository.CrudRepository;

public interface ReviewRepository extends
    CrudRepository<Review, Integer> {
}