/* eslint-disable implicit-arrow-linebreak */
const omdbApiKey = process.env.REACT_APP_OMDB_API_KEY;

const baseUrl = `https://www.omdbapi.com/?apikey=${omdbApiKey}`;

const searchMovie = (query) =>
  fetch(`${baseUrl}&s=${query}`)
    .then((response) => response.json())
    .then((data) => data);

const getMovieInfo = (id) =>
  fetch(`${baseUrl}&i=${id}`)
    .then((response) => response.json())
    .then((data) => data);

export { searchMovie, getMovieInfo };
