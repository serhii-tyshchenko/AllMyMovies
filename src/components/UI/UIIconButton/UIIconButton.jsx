/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

import { getClassName } from 'utils';

import { NAME_SPACE } from './constants';

function UIIconButton({ icon, onClick, extraClassName, title, type }) {

  const componentClassName = getClassName(NAME_SPACE, `icon-${icon}`, extraClassName);

  return (
    <button type={type} className={componentClassName} onClick={onClick} title={title}>
      <span className={`${NAME_SPACE}__text`}>{title}</span>
    </button>
  );
}

UIIconButton.defaultProps = {
  extraClassName: '',
  onClick: null,
  type: 'button',
  icon: '',
  title: 'Click me',
};

UIIconButton.propTypes = {
  onClick: PropTypes.func,
  extraClassName: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
};


export { UIIconButton };
