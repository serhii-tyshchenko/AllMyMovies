/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

import './UIButton.scss';

function UIButton(props) {
  const {
    onClick, extraClassName, type, btnType, size, text,
  } = props;
  const componentClassName = `ui-button ui-button--${btnType} ui-button--${size} ${extraClassName}`;

  return (
    <button type={type} className={componentClassName} onClick={onClick}>
      {text}
    </button>
  );
}

UIButton.defaultProps = {
  extraClassName: '',
  onClick: null,
  type: 'button',
  btnType: 'primary',
  size: 'normal',
  text: 'Button',
};

UIButton.propTypes = {
  onClick: PropTypes.func,
  extraClassName: PropTypes.string,
  type: PropTypes.string,
  btnType: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
};

export { UIButton };
