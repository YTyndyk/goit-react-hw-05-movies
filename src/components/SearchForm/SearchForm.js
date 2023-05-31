import { Input } from './SearchForm.styled';
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
      <Input type="text" name="query" required />
      <button style={{ height: 31, fontSize: 20 }} type="submit">
        Search movie
      </button>
    </form>
  );
};
