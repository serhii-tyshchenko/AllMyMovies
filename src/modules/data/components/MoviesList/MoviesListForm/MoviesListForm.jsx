import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UIInput, UIIconButton } from 'modules/ui';
import './MoviesListForm.scss';

const MoviesListForm = React.memo((props) => {
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
    setQuery('');
  }

  return (
    <form className="movies-list-form" onSubmit={handleSubmit}>
      <UIInput
        extraClassName="movies-list-form__input"
        value={query}
        onChange={handleChange}
        placeholder={STR.SEARCH_MOVIE_PLACEHOLDER}
        required
      />
      <UIIconButton
        icon="search"
        type="submit"
        title={STR.SEARCH_MOVIE}
        extraClassName="movies-list-form__btn"
        onClick={handleSubmit}
      />
    </form>
  );
});

MoviesListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  STR: PropTypes.shape().isRequired,
};

export { MoviesListForm };
