import { UITabs, UIModal } from 'components';

import { useLocalization } from 'hooks';

import { SignForm } from './SignForm';
import { SocialLogInForm } from './SocialLogInForm';

import useAuthModal from './useAuthModal';

function AuthModal() {
  const dic = useLocalization();
  const {
    isModalVisible,
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
      isVisible={isModalVisible}
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
