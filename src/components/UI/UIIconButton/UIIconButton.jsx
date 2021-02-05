/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

import './UIIconButton.scss';

const UIIconButton = (props) => {
  const {
    icon, onClick, extraClassName, title, type,
  } = props;
  const buttonClassName = extraClassName ? `ui-icon-button icon-${icon} ${extraClassName}` : `ui-icon-button icon-${icon}`;

  return (
    <button type={type} className={buttonClassName} onClick={onClick} title={title}>
      <span className="ui-icon-button__text">{title}</span>
    </button>
  );
};

UIIconButton.defaultProps = {
  icon: '',
  extraClassName: '',
  title: 'Click me',
  onClick: null,
  type: 'button',
};

UIIconButton.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  extraClassName: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
};

export { UIIconButton };
