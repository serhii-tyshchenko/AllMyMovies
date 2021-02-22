import PropTypes from 'prop-types';
import { useState } from 'react';
import { UIInput, UIIconButton } from 'components';

import './MovieMenuForm.scss';

const MovieMenuForm = ({ onSubmit }) => {
  const [listTitle, setListTitle] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(listTitle);
    setListTitle('');
  }
  function handleChange(evt) {
    setListTitle(evt.target.value);
  }

  return (
    <form className="movie-menu-form" onSubmit={handleSubmit}>
      <UIInput
        type="text"
        value={listTitle}
        onChange={handleChange}
        extraClassName="movie-menu-form__input"
        placeholder="New list"
        required
      />
      <UIIconButton
        type="submit"
        icon="plus"
        title="add"
        extraClassName="movie-menu-form__btn"
      />
    </form>
  );
};

MovieMenuForm.defaultProps = {
  onSubmit: null,
};

MovieMenuForm.propTypes = {
  onSubmit: PropTypes.func,
};

export { MovieMenuForm };
