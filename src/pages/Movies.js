import React, { useEffect, useState } from 'react';
import { getMovieSearch } from '../components/Services/themoviedbAPI.js/ThemoviedbAPI';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { PageNotFound } from './PageNotFound/PageNotFound';
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
      {status === STATUS.PENDING && <p>Loading...</p>}
      {status === STATUS.RESOLVED && <MovieList movies={movies} />}
      {status === STATUS.RESOLVED && movies.length === 0 && (
        <p>Oops! We couldn’t find anything. Change your request, please!</p>
      )}
      {status === STATUS.REJECTED && <PageNotFound />}
    </>
  );
};

export default Movies;
