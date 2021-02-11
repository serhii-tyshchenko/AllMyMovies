import { useSelector, useDispatch } from 'react-redux';
import { UINotification } from 'components';
import { hideNotification } from 'store/actions';
import { getNotifications } from 'store/selectors';

const NotificationService = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector(getNotifications);
  const isVisible = !!message;

  function handleCloseClick() {
    dispatch(hideNotification());
  }

  return (
    <UINotification
      isVisible={isVisible}
      type={type}
      message={message}
      onCloseClick={handleCloseClick}
    />
  );
};

export { NotificationService };
