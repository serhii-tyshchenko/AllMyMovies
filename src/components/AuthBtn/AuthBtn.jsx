import { useDispatch, useSelector } from 'react-redux';

import { showModal, signOut } from 'store/actions';
import { getIsUserLogged } from 'store/selectors';

import { UIIconButton } from 'components';
import { useLocalization } from 'hooks';

function AuthBtn() {
  const dic = useLocalization();
  const dispatch = useDispatch();
  const isLogged = useSelector(getIsUserLogged);

  const handleLogInClick = () => {
    if (isLogged) {
      dispatch(signOut());
    } else {
      dispatch(showModal({ modalName: 'auth', data: null }));
    }
  }

  const btnIcon = isLogged ? 'user' : 'user-o';
  const btnTitle = isLogged ? dic.SIGN_OUT : dic.SIGN_IN;

  return (
    <UIIconButton
      icon={btnIcon}
      title={btnTitle}
      onClick={handleLogInClick}
    />
  );
}

export { AuthBtn };
