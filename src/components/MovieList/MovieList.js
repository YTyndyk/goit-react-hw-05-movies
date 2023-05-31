import { Link, useLocation } from 'react-router-dom';
import { Item } from './MovieList.styled';
export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ title, id, name }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title || name}
          </Link>
        </Item>
      ))}
    </ul>
  );
};
