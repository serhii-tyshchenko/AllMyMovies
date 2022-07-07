import { useDispatch, useSelector } from 'react-redux';

import { signOut } from 'store/actions';
import { getIsUserLogged } from 'store/selectors';

import { UIIconButton } from 'components';
import { useLocalization, useModalContext } from 'hooks';
import { MODAL_NAMES } from 'constants';

function AuthBtn() {
  const dic = useLocalization();
  const dispatch = useDispatch();
  const isLogged = useSelector(getIsUserLogged);
  const { showModal } = useModalContext();

  const handleLogInClick = () => isLogged
    ? dispatch(signOut())
    : showModal(MODAL_NAMES.AUTH);

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
