import { Input } from './SearchForm.styled';
export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    // console.log(e.target.elements.query.value);
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
      <Input type="text" name="query" />
      <button style={{ height: 31, fontSize: 20 }} type="submit">
        Search movie
      </button>
    </form>
  );
};
