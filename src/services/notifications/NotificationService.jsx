import { useSelector, useDispatch } from 'react-redux';
import { Notification } from 'components/ui';
import { hideNotification } from 'store/actions';
import { getNotifications } from 'store/selectors';

function NotificationService() {
  const dispatch = useDispatch();
  const { message, type } = useSelector(getNotifications);
  const isVisible = !!message;

  const handleCloseClick = () => dispatch(hideNotification());

  return (
    <Notification
      isVisible={isVisible}
      type={type}
      message={message}
      onCloseClick={handleCloseClick}
    />
  );
}

export { NotificationService };
