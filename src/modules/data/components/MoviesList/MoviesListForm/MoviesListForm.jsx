import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UIInput, UIIconButton } from 'modules/ui';
import './MoviesListForm.scss';

const MoviesListForm = React.memo((props) => {
  const { onSubmit, STR } = props;
  const [itemTitle, setItemTitle] = useState('');

  function handleItemChange(evt) {
    setItemTitle(evt.target.value);
  }
  function handleSubmit(evt) {
    if (!itemTitle) {
      return;
    }
    evt.preventDefault();
    onSubmit(itemTitle);
    setItemTitle('');
  }

  return (
    <form className="movies-list-form" onSubmit={handleSubmit}>
      <UIInput
        extraClassName="movies-list-form__input"
        value={itemTitle}
        onChange={handleItemChange}
        placeholder={STR.SEARCH_MOVIE_PLACEHOLDER}
        required
      />
      <UIIconButton
        icon="plus"
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
