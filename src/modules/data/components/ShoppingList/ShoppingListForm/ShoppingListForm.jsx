import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UIInput, UIIconButton } from 'modules/ui';
import './ShoppingListForm.scss';

const ShoppingListForm = React.memo((props) => {
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
    <form className="shopping-list-form" onSubmit={handleSubmit}>
      <UIInput
        extraClassName="shopping-list-form__input"
        value={itemTitle}
        onChange={handleItemChange}
        placeholder={STR.ENTER_ITEM}
        required
      />
      <UIIconButton
        icon="plus"
        type="submit"
        title={STR.ADD_ITEM}
        extraClassName="shopping-list-form__btn"
        onClick={handleSubmit}
      />
    </form>
  );
});

ShoppingListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  STR: PropTypes.shape().isRequired,
};

export { ShoppingListForm };
