import { MovieCard } from 'components/MovieCard/MovieCard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { getMovieById } from 'themoviedbAPI.js/ThemoviedbAPI';
import { Container } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
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

  const backdrop = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie?.backdrop_path}`;
  return (
    <>
      <Container backdrop_path={backdrop}>
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
