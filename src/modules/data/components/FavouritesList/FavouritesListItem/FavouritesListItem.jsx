import React from 'react';
import { UIIconButton } from 'modules/ui';
import PropTypes from 'prop-types';

import './FavouritesListItem.scss';

const FavouritesListItem = React.memo((props) => {
  const {
    data: { id, title },
    onRemoveClick,
    onAddClick,
    onBlur,
  } = props;

  return (
    <li id={id} className="favourites-list-item">
      <UIIconButton
        id={id}
        extraClassName="favourites-list-item__btn-add"
        icon="plus"
        onClick={onAddClick}
      />
      <input
        type="text"
        className="favourites-list-item__title"
        defaultValue={title}
        onBlur={onBlur}
        maxLength="50"
      />
      <UIIconButton id={id} icon="trash" onClick={onRemoveClick} />
    </li>
  );
});

FavouritesListItem.propTypes = {
  data: PropTypes.shape().isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};


export { FavouritesListItem };
