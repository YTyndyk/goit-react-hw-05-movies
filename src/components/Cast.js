import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'components/Services/themoviedbAPI.js/ThemoviedbAPI';
import { CreditList } from './CreditList/CreditList';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId).then(({ cast }) => setCredits(cast));
  }, [movieId]);
  return credits.length > 0 ? (
    <CreditList credits={credits} />
  ) : (
    <p>We no have cast for this movie</p>
  );
};
export default Cast;
