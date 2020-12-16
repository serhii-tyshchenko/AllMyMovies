import { useContext } from 'react';
import { Localization } from 'contexts';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, signOut } from 'store/actions';
import { UIIconButton } from 'components';

const AuthBtn = () => {
  const STR = useContext(Localization);
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);

  function handleLogInClick() {
    if (isLogged) {
      dispatch(signOut());
    } else {
      dispatch(showModal({ modalName: 'auth', data: null }));
    }
  }

  return (
    <UIIconButton
      icon={isLogged ? 'user' : 'user-o'}
      title={isLogged ? STR.SIGN_OUT : STR.SIGN_IN}
      onClick={handleLogInClick}
    />
  );
};

export { AuthBtn };
