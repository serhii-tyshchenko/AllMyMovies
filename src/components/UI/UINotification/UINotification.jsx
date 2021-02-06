import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { UIIconButton } from 'components';

import './UINotification.scss';

const titles = {
  error: 'Error',
  warning: 'Warning',
  success: 'Succes',
};

const UINotification = (props) => {
  const {
    message, type, extraClassName, isVisible, onCloseClick, autoclose,
  } = props;
  const modalRoot = document.getElementById('modal-root');
  let componentClassName = 'ui-notification';
  if (type) {
    componentClassName += ` ui-notification--${type}`;
  }
  if (extraClassName) {
    componentClassName += ` ${extraClassName}`;
  }

  const timer = (autoclose && isVisible) ? setTimeout(() => onCloseClick(), 3000) : null;

  function handleCloseClick() {
    clearTimeout(timer);
    onCloseClick();
  }

  return isVisible ? createPortal((
    <div className={componentClassName}>
      <main className="ui-notification__content">
        {titles[type] && (<h4 className="ui-notification__title">{titles[type]}</h4>)}
        <span className="ui-notification__message">{message}</span>
      </main>
      <UIIconButton
        icon="cancel"
        onClick={handleCloseClick}
        title="Close"
        extraClassName="ui-notification__close-btn"
      />
    </div>
  ), modalRoot) : null;
};

UINotification.defaultProps = {
  message: 'Info message',
  type: 'info',
  extraClassName: '',
  isVisible: false,
  onCloseClick: null,
  autoclose: true,
};

UINotification.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  extraClassName: PropTypes.string,
  isVisible: PropTypes.bool,
  autoclose: PropTypes.bool,
  onCloseClick: PropTypes.func,
};

export { UINotification };
