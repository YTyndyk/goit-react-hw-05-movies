import React from 'react';
import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
const MovieDetails = () => {
  const { movieId } = useParams();
  //   console.log(movieId);
  return (
    <>
      MovieDetails :{movieId}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
