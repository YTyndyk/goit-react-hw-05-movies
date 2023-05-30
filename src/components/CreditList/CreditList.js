const defaultImage =
  'https://www.shutterstock.com/image-vector/no-image-available-vector-hand-600w-745639717.jpg';
export const CreditList = ({ credits }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
      }}
    >
      {credits.map(({ cast_id, profile_path, original_name }) => (
        <li
          style={{
            width: 100,
          }}
          key={cast_id}
        >
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : defaultImage
            }
            alt={original_name}
          />
          <p>{original_name}</p>
        </li>
      ))}
    </ul>
  );
};
