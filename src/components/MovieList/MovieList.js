import { Link } from 'react-router-dom';
export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, id, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title || name} </Link>
        </li>
      ))}
    </ul>
  );
};
