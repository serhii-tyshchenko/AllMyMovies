import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UIInput, UIIconButton } from 'modules/ui';
import './SearchMovieForm.scss';

const SearchMovieForm = React.memo((props) => {
  const { onSubmit, STR } = props;
  const [query, setQuery] = useState('');

  function handleChange(evt) {
    setQuery(evt.target.value);
  }
  function handleSubmit(evt) {
    if (!query) {
      return;
    }
    evt.preventDefault();
    onSubmit(query);
  }

  return (
    <form className="search-movie-form" onSubmit={handleSubmit}>
      <UIInput
        extraClassName="search-movie-form__input"
        value={query}
        onChange={handleChange}
        placeholder={STR.SEARCH_MOVIE_PLACEHOLDER}
        required
      />
      <UIIconButton
        icon="search"
        type="submit"
        title={STR.SEARCH_MOVIE}
        extraClassName="search-movie-form__btn"
        onClick={handleSubmit}
      />
    </form>
  );
});

SearchMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  STR: PropTypes.shape().isRequired,
};

export { SearchMovieForm };
