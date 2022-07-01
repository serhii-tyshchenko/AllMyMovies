/* eslint-disable react/button-has-type */
import { memo } from 'react';
import { getClassName } from 'utils';

import { NAME_SPACE } from './constants';

import { UIButtonDefaultProps, UIButtonPropTypes } from './UIButton.props';

function UIButton({ onClick, extraClassName, type, btnType, size, text }) {

  const componentClassName = getClassName(NAME_SPACE, `${NAME_SPACE}--${btnType}`, `${NAME_SPACE}--${size}`, extraClassName);

  return (
    <button type={type} className={componentClassName} onClick={onClick}>
      {text}
    </button>
  );
}

UIButton.defaultProps = UIButtonDefaultProps;

UIButton.propTypes = UIButtonPropTypes;

export default memo(UIButton);
