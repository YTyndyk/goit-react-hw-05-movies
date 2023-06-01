import React, { useEffect, useState } from 'react';
import { getMovieSearch } from '../components/Services/themoviedbAPI.js/ThemoviedbAPI';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
const STATUS = {
  IDLE: 'idle',
  PENDING: 'panding',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    setStatus(STATUS.PENDING);
    getMovieSearch(query)
      .then(movies => {
        setMovies([...movies.results]);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        console.error(error);
        setStatus(STATUS.REJECTED);
      });
  }, [searchParams]);

  const onSubmit = query => {
    setSearchParams({ query });
  };
  // if (movies.results === []) setStatus(STATUS.REJECTED);
  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {status === STATUS.PENDING && <p>Loading...</p>}
      {status === STATUS.RESOLVED && <MovieList movies={movies} />}
      {status === STATUS.REJECTED && (
        <b>Sorry, we don't have detailed information about this movie !!!</b>
      )}
    </>
  );
};

export default Movies;
