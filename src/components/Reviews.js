import React from 'react';
const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams;
  return <div>data reviews: {movieId}</div>;
};

export default Reviews;
