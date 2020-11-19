import React, { useContext } from 'react';
import { Localization } from 'contexts';
import PropTypes from 'prop-types';
import { UITabs, UIModal } from 'modules/ui';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { SocialLogInForm } from './SocialLogInForm';
import './AuthModal.scss';

const AuthModal = (props) => {
  const {
    data,
    isVisible,
    onClose,
    onChange,
    onTabClick,
    onSignIn,
    onSignUp,
    onSignInWithGoogle,
  } = props;
  const STR = useContext(Localization);

  return (
    <UIModal isVisible={isVisible} onClose={onClose} title={STR.AUTHENIFICATION}>
      <UITabs
        labels={[STR.SIGN_IN, STR.SIGN_UP]}
        extraClassName="auth-form__tabs"
        onTabClick={onTabClick}
      >
        <SignInForm onSubmit={onSignIn} onChange={onChange} data={data} STR={STR} />
        <SignUpForm onSubmit={onSignUp} onChange={onChange} data={data} STR={STR} />
      </UITabs>
      <SocialLogInForm onSignInWithGoogle={onSignInWithGoogle} STR={STR} />
    </UIModal>
  );
};

AuthModal.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onTabClick: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
  onSignInWithGoogle: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export { AuthModal };
