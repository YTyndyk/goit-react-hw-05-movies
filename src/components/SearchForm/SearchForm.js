export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { query } = e.target.elements;
    if (!query.value) {
      alert('Plese, fill the input!');
      return;
    }
    onSubmit(query.value);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" required />
      <button type="submit">Search movie</button>
    </form>
  );
};
