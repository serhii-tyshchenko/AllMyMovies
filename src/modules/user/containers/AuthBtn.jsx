import React, { useContext } from 'react';
import { Localization } from 'contexts';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, signOut } from 'store/actions';
import { UIIconButton } from 'modules/ui';

const AuthBtn = () => {
  const STR = useContext(Localization);
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const btnIcon = isLogged ? 'user' : 'user-o';
  const btnTitle = isLogged ? STR.SIGN_OUT : STR.SIGN_IN;
  function handleLogInClick() {
    if (isLogged) {
      dispatch(signOut());
    } else {
      dispatch(showModal({ modalName: 'auth', data: null }));
    }
  }

  return (
    <UIIconButton
      extraClassName="login__btn"
      icon={btnIcon}
      title={btnTitle}
      onClick={handleLogInClick}
    />
  );
};

export { AuthBtn };
