import React from 'react';
import PropTypes from 'prop-types';
import { UICheckbox } from 'modules/ui';

import './MoviesListItem.scss';


const MoviesListItem = React.memo((props) => {
  const {
    data: { id, title }, onCompleteClick,
  } = props;

  return (
    <li id={id} className="movies-list-item">
      <input
        type="text"
        className="movies-list-item__title"
        defaultValue={title}
        maxLength="50"
        disabled
      />
      <UICheckbox onChange={onCompleteClick} />
    </li>
  );
});

MoviesListItem.propTypes = {
  data: PropTypes.shape().isRequired,
  onCompleteClick: PropTypes.func.isRequired,
};

export { MoviesListItem };
