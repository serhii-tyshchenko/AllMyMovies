import React from 'react';
import PropTypes from 'prop-types';
import { UICheckbox } from 'modules/ui';

import './ShoppingListItem.scss';


const ShoppingListItem = React.memo((props) => {
  const {
    data: { id, title }, onCompleteClick,
  } = props;

  return (
    <li id={id} className="shopping-list-item">
      <input
        type="text"
        className="shopping-list-item__title"
        defaultValue={title}
        maxLength="50"
        disabled
      />
      <UICheckbox onChange={onCompleteClick} />
    </li>
  );
});

ShoppingListItem.propTypes = {
  data: PropTypes.shape().isRequired,
  onCompleteClick: PropTypes.func.isRequired,
};

export { ShoppingListItem };
