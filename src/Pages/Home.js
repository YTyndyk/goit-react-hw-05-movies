import getTrending from 'components/ThemoviedbAPI.js/ThemoviedbAPI';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <h1>Trending Today</h1>
      {status === STATUS.RESOLVED && (
        <ul>
          {movies.map(({ title, id, name }) =>
            title ? (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            ) : (
              <li key={id}>
                <Link to={`/movies/${id}`}>{name}</Link>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};
export default Home;
