/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

import './UIIconButton.scss';

function UIIconButton(props) {
  const {
    icon, onClick, extraClassName, title, type,
  } = props;
  const componentClassName = `ui-icon-button icon-${icon} ${extraClassName}`;

  return (
    <button type={type} className={componentClassName} onClick={onClick} title={title}>
      <span className="ui-icon-button__text">{title}</span>
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
