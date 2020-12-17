/* eslint-disable implicit-arrow-linebreak */
const omdbApiKey = process.env.REACT_APP_OMDB_API_KEY;

class API {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = `https://www.omdbapi.com/?apikey=${this.apiKey}`;
  }

  searchMovie = (query) =>
    fetch(`${this.baseUrl}&s=${query}`)
      .then((response) => response.json())
      .then((data) => data);

  getMovieInfo = (id) =>
    fetch(`${this.baseUrl}&i=${id}`)
      .then((response) => response.json())
      .then((data) => data);
}

export default new API(omdbApiKey);
