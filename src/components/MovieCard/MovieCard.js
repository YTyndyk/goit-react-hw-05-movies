import {
  Poster,
  Wrapper,
  MovieInfo,
  MovieTitle,
  MovieText,
} from './MovieCard.styled';
export const MovieCard = props => {
  const { poster_path, title, release_date, overview, vote_average, genres } =
    props.movie;
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const defaultImage =
    'https://holstovich.art/content/images/1/1000x1000l80br20/kartina-russkiy-voennyy-korabl-idi-nakhy-50804578290634.webp';

  const userScore = (vote_average * 10).toFixed();
  const genresList = genres.map(ganre => ganre.name).join(', ');
  return (
    <Wrapper>
      <Poster src={poster_path ? poster : defaultImage} alt={title} />
      <MovieInfo>
        <MovieTitle>
          {title} ({release_date.slice(0, 4)})
        </MovieTitle>
        <MovieText>User score: {userScore}%</MovieText>
        <h2>Overview</h2>
        <MovieText>{overview}</MovieText>
        <h2>Genres</h2>
        <MovieText>{genresList}</MovieText>
      </MovieInfo>
    </Wrapper>
  );
};
