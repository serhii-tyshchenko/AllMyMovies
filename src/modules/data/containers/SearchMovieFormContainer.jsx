import { useContext, useCallback } from 'react';
import { Localization } from 'contexts';
import { useDispatch } from 'react-redux';
import { searchMovie } from 'store/actions';
import { SearchMovieForm } from '../components';

const SearchMovieFormContainer = () => {
  const STR = useContext(Localization);
  const dispatch = useDispatch();

  function handleSubmit(query) {
    dispatch(searchMovie(query));
  }

  return (
    <SearchMovieForm
      onSubmit={useCallback(handleSubmit, [dispatch])}
      STR={STR}
    />
  );
};

export { SearchMovieFormContainer };
