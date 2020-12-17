/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './UIButton.scss';

const UIButton = (props) => {
  const {
    onClick, extraClassName, type, btnType, size, text,
  } = props;
  const buttonClassName = `ui-button ui-button--${btnType} ui-button--${size} ${extraClassName}`;

  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  );
};

UIButton.defaultProps = {
  extraClassName: '',
  onClick: null,
  size: 'normal',
  type: 'button',
  btnType: 'default',
  text: 'Some Text',
};

UIButton.propTypes = {
  extraClassName: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string,
  btnType: PropTypes.string,
  text: PropTypes.string,
};

export { UIButton };
