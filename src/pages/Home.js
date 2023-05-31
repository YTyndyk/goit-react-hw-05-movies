import { getTrending } from 'components/Services/themoviedbAPI.js/ThemoviedbAPI';
import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
const STATUS = {
  IDLE: 'idle',
  PENDING: 'panding',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    getTrending()
      .then(movies => {
        // console.log(movies.results);
        setMovies([...movies.results]);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        console.error(error);
        setStatus(STATUS.REJECTED);
      });
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: 30 }}> Trending Today</h1>
      {status === STATUS.RESOLVED && <MovieList movies={movies} />}
    </div>
  );
};
export default Home;
