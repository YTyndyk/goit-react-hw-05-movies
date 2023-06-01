import { useState } from 'react';
import { Input } from './SearchForm.styled';
import { useSearchParams } from 'react-router-dom';
export const SearchForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  console.log(searchParams.get('query'));
  const handleChange = e => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: name });

    setName('');
    if (!name) {
      alert('Plese, fill the input!');
      return;
    }

    onSubmit(name);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" name="query" value={name} onChange={handleChange} />
      <button style={{ height: 31, fontSize: 20 }} type="submit">
        Search movie
      </button>
    </form>
  );
};
