/* eslint-disable react/prop-types */
import { UITabs, UIModal } from 'components';

import { useLocalization } from 'hooks';

import { SignForm } from './SignForm';
import { SocialLogInForm } from './SocialLogInForm';

import useAuthModal from './useAuthModal';

function AuthModal({ isOpen }) {
  const dic = useLocalization();
  const {
    onFormChange,
    onFormReset,
    onModalClose,
    formData,
    onSignIn,
    onSignUp,
    onSignInWithGoogle
  } = useAuthModal();

  return (
    <UIModal
      isOpen={isOpen}
      onClose={onModalClose}
      title={dic.AUTHENIFICATION}
      closeBtnTitle={dic.CLOSE}
    >
      <UITabs
        labels={[dic.SIGN_IN, dic.SIGN_UP]}
        extraClassName="auth-form__tabs"
        onTabClick={onFormReset}
      >
        <SignForm
          onSubmit={onSignIn}
          onChange={onFormChange}
          data={formData}
          dic={dic}
        />
        <SignForm
          onSubmit={onSignUp}
          onChange={onFormChange}
          data={formData}
          dic={dic}
        />
      </UITabs>
      <SocialLogInForm
        onSignInWithGoogle={onSignInWithGoogle}
        dic={dic}
      />
    </UIModal>)
}

export { AuthModal };
