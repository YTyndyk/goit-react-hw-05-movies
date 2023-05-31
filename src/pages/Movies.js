import React, { useEffect, useState } from 'react';
import { getMovieSearch } from '../themoviedbAPI.js/ThemoviedbAPI';
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

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {status === STATUS.RESOLVED && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
