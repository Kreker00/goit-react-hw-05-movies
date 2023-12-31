import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=8f33823ca84e1a0e665e0e760de9426d';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?${API_KEY}`);
  return data;
};

export const searchMoviesByKeyword = async query => {
  const { data } = await axios.get(
    `/search/movie?${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return data;
};

export const fetchMovieDetails = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}?${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchMovieCredits = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?${API_KEY}&language=en-US`
  );
  return data.cast;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?${API_KEY}&language=en-US`
  );
  return data.results;
};
