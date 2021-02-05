import { useSelector, useDispatch } from 'react-redux';
import { UINotification } from 'components';
import { hideNotification } from 'store/actions';

const NotificationService = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector((state) => state.notifications);
  const isVisible = !!message;
  const timer = isVisible ? setTimeout(() => dispatch(hideNotification()), 3000) : null;

  function handleCloseClick() {
    clearTimeout(timer);
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
