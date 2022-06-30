import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalization } from 'hooks';
import { useDispatch } from 'react-redux';
import { searchMovie } from 'store/actions';
import { UIInput, UIIconButton } from 'components';

import './SearchMovieForm.scss';

const SearchMovieForm = React.memo(() => {
  const dic = useLocalization();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);

  const handleSubmit = (evt) => {
    if (query) {
      evt.preventDefault();
      dispatch(searchMovie(query));
      navigate('/');
    }
  }
  const handleChange = (evt) => {
    setQuery(evt.target.value);
  }
  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  }

  return (
    <div className={`search-movie-form-container${isFormVisible ? ' visible' : ''}`}>
      <UIIconButton
        icon="left-open"
        extraClassName="search-movie-form__btn-hide"
        onClick={toggleForm}
      />
      <form className="search-movie-form" onSubmit={handleSubmit}>
        <UIInput
          type="search"
          value={query}
          onChange={handleChange}
          extraClassName="search-movie-form__input"
          placeholder={dic.SEARCH_MOVIE_PLACEHOLDER}
          required
        />
        <UIIconButton
          type="submit"
          icon="search"
          title={dic.SEARCH_MOVIE}
          extraClassName="search-movie-form__btn"
          onClick={handleSubmit}
        />
      </form>
      <UIIconButton
        icon="search"
        extraClassName="search-movie-form__btn-show"
        onClick={toggleForm}
      />
    </div>
  );
});

export { SearchMovieForm };
