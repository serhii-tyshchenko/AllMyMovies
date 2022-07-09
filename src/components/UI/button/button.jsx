/* eslint-disable react/button-has-type */
import { memo } from 'react';
import { getClassName } from 'utils';

import { NAME_SPACE } from './constants';

import { buttonDefaultProps, buttonPropTypes } from './button.props';

import './button.scss';

function Button({ onClick, extraClassName, type, btnType, size, text }) {

  const componentClassName = getClassName(NAME_SPACE, `${NAME_SPACE}--${btnType}`, `${NAME_SPACE}--${size}`, extraClassName);

  return (
    <button type={type} className={componentClassName} onClick={onClick}>
      {text}
    </button>
  );
}

Button.defaultProps = buttonDefaultProps;

Button.propTypes = buttonPropTypes;

export default memo(Button);
