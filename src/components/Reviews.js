import React from 'react';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'themoviedbAPI.js/ThemoviedbAPI';
import { ReviewsList } from './ReviewsList/ReviewsList';
const { useParams } = require('react-router-dom');

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => setReviews(results));
  }, [movieId]);
  return reviews.length === 0 ? (
    <p>We don't have any reviews of this movie</p>
  ) : (
    <ReviewsList reviews={reviews} />
  );
};

export default Reviews;
