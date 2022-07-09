import { useDispatch, useSelector } from 'react-redux';

import { signOut } from 'store/actions';
import { getIsUserLogged } from 'store/selectors';

import { IconButton } from 'components/ui';
import { useLocalization, useModalContext } from 'hooks';
import { MODAL_NAMES } from 'core/constants';

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
    <IconButton
      icon={btnIcon}
      title={btnTitle}
      onClick={handleLogInClick}
    />
  );
}

export default AuthBtn;
