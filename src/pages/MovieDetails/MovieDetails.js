import { MovieCard } from 'components/MovieCard/MovieCard';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { getMovieById } from 'themoviedbAPI.js/ThemoviedbAPI';
import { Container } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    getMovieById(movieId)
      .then(movie => {
        setMovie(movie);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);
  if (!movie) return;

  return (
    <>
      <Container>
        <Link to={location?.state?.from ?? '/'}>Go to back</Link>
        <MovieCard {...movie} />
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </Container>
      <Outlet />
    </>
  );
};

export default MovieDetails;
