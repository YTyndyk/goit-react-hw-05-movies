import { Poster } from './MovieCard.styled';
export const MovieCard = ({ poster_path, title, release_date }) => {
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const defaultImage =
    'https://holstovich.art/content/images/1/1000x1000l80br20/kartina-russkiy-voennyy-korabl-idi-nakhy-50804578290634.webp';
  return (
    <>
      <Poster src={poster_path ? poster : defaultImage} alt={title} />
      <h2>
        {title} ({release_date.slice(0, 4)})
      </h2>
    </>
  );
};
