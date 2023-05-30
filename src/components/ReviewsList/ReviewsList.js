export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content ? content : '...'}</p>
        </li>
      ))}
    </ul>
  );
};
