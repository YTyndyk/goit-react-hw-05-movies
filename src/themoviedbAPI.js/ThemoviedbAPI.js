import axios from 'axios';

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
export const getMovieSearch = async (query = '') => {
  try {
    const { data } = await axios.get(
      `/search/movie?page=1&query=${query}&language=en`
    );
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};
export const getMovieById = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}?language=en`);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};
export const getMovieCredits = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/credits?language=en`);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};
export const getMovieReviews = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews?language=en`);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};
