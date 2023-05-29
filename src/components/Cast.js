const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams;
  return <div>data cast: {movieId}</div>;
};
export default Cast;
