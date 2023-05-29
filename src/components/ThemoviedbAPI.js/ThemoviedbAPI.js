import axios from 'axios';

// const api_Key =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzlhYmIwYTQwZGUwYWUzNGRiZWNkNzJjZTA0Yjc1MiIsInN1YiI6IjY0NmY1MGE3ODk0ZWQ2MDEzM2IxYTk2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WCRJ_2DO-NRmqGfxV0DItW4razwUHxym7IKU9YHtu5c';
// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/trending/all/day?api_key=b79abb0a40de0ae34dbecd72ce04b752 ',
//   params: { language: 'en-US' },
//   headers: { accept: 'application/json', Authorization: `Bearer ${api_Key}` },
// };

// const getTrending = () => axios.request(options);
// // getTrending().then(console.log).catch(console.warn);
// axios.defaults.baseURL = `https://api.themoviedb.org/3`;
// axios.defaults.params = {
//   api_key: `80849c20aa63241eb028c4e7b7d0f3a8`,
//   include_adult: false,
//   // language: 'en' / 'uk',
// };
axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `80849c20aa63241eb028c4e7b7d0f3a8`,
  include_adult: false,
};

export const getTrending = async (page = 1, lng) => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        page,
        language: lng,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
};
export const getMovieSearch = async (page = 1, query = '', lng) => {
  try {
    const { data } = await axios.get(
      `/search/movie?page=${page}&query=${query}&language=${lng}`
    );
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};
export default getTrending;
