import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalization, useToggle } from 'hooks';
import { useDispatch } from 'react-redux';
import { searchMovie } from 'store/actions';
import { UIInput, UIIconButton } from 'components';
import { getClassName } from 'utils';

import './SearchMovieForm.scss';

const NAME_SPACE = 'search-movie-form';

const SearchMovieForm = React.memo(() => {
  const dic = useLocalization();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isFormVisible, toggleForm] = useToggle();

  const handleSubmit = (evt) => {
    if (!query) {
      return;
    }
    evt.preventDefault();
    dispatch(searchMovie(query));
    navigate('/');
  }

  const handleChange = (evt) => setQuery(evt.target.value);

  const componentClassName = getClassName(`${NAME_SPACE}-container`, {
    visible: isFormVisible,
  });

  return (
    <div className={componentClassName}>
      <UIIconButton
        icon="left-open"
        extraClassName={`${NAME_SPACE}__btn-hide`}
        onClick={toggleForm}
      />
      <form className={NAME_SPACE} onSubmit={handleSubmit}>
        <UIInput
          type="search"
          value={query}
          onChange={handleChange}
          extraClassName={`${NAME_SPACE}__input`}
          placeholder={dic.SEARCH_MOVIE_PLACEHOLDER}
          required
        />
        <UIIconButton
          type="submit"
          icon="search"
          title={dic.SEARCH_MOVIE}
          extraClassName={`${NAME_SPACE}__btn`}
          onClick={handleSubmit}
        />
      </form>
      <UIIconButton
        icon="search"
        extraClassName={`${NAME_SPACE}__btn-show`}
        onClick={toggleForm}
      />
    </div>
  );
});

export { SearchMovieForm };
