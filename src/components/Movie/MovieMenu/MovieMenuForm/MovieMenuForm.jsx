import PropTypes from 'prop-types';
import { useState } from 'react';
import { UIInput, UIIconButton } from 'components';

import './MovieMenuForm.scss';

function MovieMenuForm({ onSubmit, STR }) {
  const [listTitle, setListTitle] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(listTitle);
    setListTitle('');
  }
  const handleChange = (evt) => {
    setListTitle(evt.target.value);
  }

  return (
    <form className="movie-menu-form" onSubmit={handleSubmit}>
      <UIInput
        type="text"
        value={listTitle}
        onChange={handleChange}
        extraClassName="movie-menu-form__input"
        placeholder={STR.NEW_LIST}
        required
      />
      <UIIconButton
        type="submit"
        icon="plus"
        title={STR.ADD}
        extraClassName="movie-menu-form__btn"
      />
    </form>
  );
}

MovieMenuForm.defaultProps = {
  onSubmit: null,
  STR: PropTypes.shape({ NEW_LIST: 'New list', ADD: 'Add' }),
};

MovieMenuForm.propTypes = {
  onSubmit: PropTypes.func,
  STR: PropTypes.shape({ NEW_LIST: PropTypes.string, ADD: PropTypes.string }),
};

export { MovieMenuForm };
