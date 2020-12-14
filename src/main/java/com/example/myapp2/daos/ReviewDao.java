package com.example.myapp2.daos;

import com.example.myapp2.models.Review;
import com.example.myapp2.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReviewDao {
  @Autowired
  ReviewRepository reviewRepository;
  @GetMapping("/findAllReviews")
  public Iterable<Review> findAllReviews() {
    return reviewRepository.findAll();
  }
  @GetMapping("/findReviewById/{id}")
  public Review findReviewById(
      @PathVariable("id") Integer id) {
    return reviewRepository.findById(id).get();
  }
  @GetMapping("/createReview")
  public Review createReview() {
    Review review = new Review();
    review.setComment("New Playlist");
    review.setSongId(-1);
    return reviewRepository.save(review);
  }
  @GetMapping("/deleteReview/{id}")
  public void deleteReview(
      @PathVariable("id") Integer id) {
    reviewRepository.deleteById(id);
  }
  @GetMapping("/changeReview/{id}/{newComment}")
  public Review renameReview(
      @PathVariable("id") Integer id,
      @PathVariable("newComment") String newComment) {
    Review review = reviewRepository.findById(id).get();
    review.setComment(newComment);
    return reviewRepository.save(review);
  }
}
