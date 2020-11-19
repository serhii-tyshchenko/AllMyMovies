/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './UIIconButton.scss';

const UIIconButton = (props) => {
  const {
    icon, children, onClick, extraClassName, title, type,
  } = props;
  const buttonClassName = extraClassName ? `ui-icon-button ui-icon-button--${icon} ${extraClassName}` : `ui-icon-button ui-icon-button--${icon}`;

  return (
    <button type={type} className={buttonClassName} onClick={onClick} title={title}>
      {children}
    </button>
  );
};

UIIconButton.defaultProps = {
  icon: '',
  extraClassName: '',
  title: '',
  onClick: null,
  children: null,
  type: 'button',
};

UIIconButton.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  extraClassName: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export { UIIconButton };
