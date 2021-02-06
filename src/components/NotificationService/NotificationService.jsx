import { useSelector, useDispatch } from 'react-redux';
import { UINotification } from 'components';
import { hideNotification } from 'store/actions';

const NotificationService = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector((state) => state.notifications);
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
