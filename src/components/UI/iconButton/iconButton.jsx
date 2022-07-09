/* eslint-disable react/button-has-type */
import { memo } from 'react';
import PropTypes from 'prop-types';
import { getClassName } from 'utils';

import { NAME_SPACE } from './constants';

import './iconButton.scss';

function IconButton({ icon, onClick, extraClassName, title, type }) {

  const componentClassName = getClassName(NAME_SPACE, `icon-${icon}`, extraClassName);

  return (
    <button type={type} className={componentClassName} onClick={onClick} title={title}>
      <span className={`${NAME_SPACE}__text`}>{title}</span>
    </button>
  );
}

IconButton.defaultProps = {
  extraClassName: '',
  onClick: null,
  type: 'button',
  icon: '',
  title: 'Click me',
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  extraClassName: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
};


export default memo(IconButton);
