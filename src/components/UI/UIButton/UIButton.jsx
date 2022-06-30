/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

import { getClassName } from 'utils';

import './UIButton.scss';

const NAME_SPACE = 'ui-button';

function UIButton(props) {
  const {
    onClick, extraClassName, type, btnType, size, text,
  } = props;

  const componentClassName = getClassName(NAME_SPACE, `${NAME_SPACE}--${btnType}`, `${NAME_SPACE}--${size}`, extraClassName);

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
