import PropTypes from 'prop-types';
import { useState } from 'react';
import { UIInput, UIIconButton } from 'components';

function MovieMenuForm({ onSubmit, dic }) {
  const [listTitle, setListTitle] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(listTitle);
    setListTitle('');
  }
  const handleChange = (evt) => setListTitle(evt.target.value);

  return (
    <form className="movie-menu-form" onSubmit={handleSubmit}>
      <UIInput
        type="text"
        value={listTitle}
        onChange={handleChange}
        extraClassName="movie-menu-form__input"
        placeholder={dic.NEW_LIST}
        required
      />
      <UIIconButton
        type="submit"
        icon="plus"
        title={dic.ADD}
        extraClassName="movie-menu-form__btn"
      />
    </form>
  );
}

MovieMenuForm.defaultProps = {
  onSubmit: null,
  dic: PropTypes.shape({ NEW_LIST: 'New list', ADD: 'Add' }),
};

MovieMenuForm.propTypes = {
  onSubmit: PropTypes.func,
  dic: PropTypes.shape({ NEW_LIST: PropTypes.string, ADD: PropTypes.string }),
};

export { MovieMenuForm };
