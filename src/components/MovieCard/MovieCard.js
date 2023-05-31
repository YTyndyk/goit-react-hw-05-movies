import { useState } from 'react';
import { Poster } from './MovieCard.styled';
export const MovieCard = props => {
  const [score, setScore] = useState(0);
  // console.log({ props });
  const { poster_path, title, release_date, overview, vote_average, genres } =
    props;
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const defaultImage =
    'https://holstovich.art/content/images/1/1000x1000l80br20/kartina-russkiy-voennyy-korabl-idi-nakhy-50804578290634.webp';

  const userScore = (vote_average * 10).toFixed();
  setScore(userScore);
  return (
    <>
      <Poster src={poster_path ? poster : defaultImage} alt={title} />
      <h1>{title}</h1>
      <p>User score: {score}%</p>
      <p>({release_date.slice(0, 4)})</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{genres}</p>
      <div>Additional information</div>
    </>
  );
};
