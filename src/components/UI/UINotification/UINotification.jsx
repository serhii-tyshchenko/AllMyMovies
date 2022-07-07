import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { UIIconButton } from 'components';
import { getClassName } from 'utils';
import { useLocalization } from 'hooks';
import { PORTAL_ROOT } from 'constants';

import getNotificationTitle from './utils';

const NAME_SPACE = 'ui-notification';

function UINotification(props) {
  const {
    message, type, extraClassName, isVisible, onCloseClick, autoclose,
  } = props;

  const timer = (autoclose && isVisible) ? setTimeout(() => onCloseClick(), 3000) : null;

  useEffect(() => () => {
    clearTimeout(timer);
  });

  const handleCloseClick = () => {
    clearTimeout(timer);
    onCloseClick();
  }

  const dic = useLocalization();

  const notificationTitle = getNotificationTitle(dic)(type);

  const componentClassName = getClassName(NAME_SPACE, {
    [`${NAME_SPACE}--${type}`]: type,
  }, extraClassName);

  if (!isVisible) {
    return null;
  }

  return createPortal((
    <div className={componentClassName}>
      <main className={`${NAME_SPACE}__content`}>
        <h4 className={`${NAME_SPACE}__title`}>{notificationTitle}</h4>
        <span className={`${NAME_SPACE}__message`}>{message}</span>
      </main>
      <UIIconButton
        icon="cancel"
        onClick={handleCloseClick}
        title="Close"
        extraClassName={`${NAME_SPACE}__close-btn`}
      />
    </div>
  ), PORTAL_ROOT);
}

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

export default UINotification;
