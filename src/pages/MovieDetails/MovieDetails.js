import { MovieCard } from 'components/MovieCard/MovieCard';
import React, { useEffect, useState, Suspense, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { getMovieById } from 'components/Services/themoviedbAPI.js/ThemoviedbAPI';
import { Container } from './MovieDetails.styled';
import { MovieText } from 'components/MovieCard/MovieCard.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location?.state?.from ?? '/');
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
        <Link
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontWeight: 500,
            margin: 10,
            color: 'black',
            textDecoration: 'none',
          }}
          to={backLinkLocationRef.current}
        >
          Go to back
        </Link>
        <MovieCard movie={movie} />
        <ul>
          <li>
            <Link
              style={{ textDecoration: 'none', fontSize: 26, color: 'inherit' }}
              to="cast"
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none', fontSize: 26, color: 'inherit' }}
              to="reviews"
            >
              Reviews
            </Link>
          </li>
        </ul>
        <MovieText>Additional information</MovieText>
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
