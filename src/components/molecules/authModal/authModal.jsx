/* eslint-disable react/prop-types */
import { useLocalization } from 'hooks';

import { Tabs, Modal } from 'components/ui';

import { SignForm } from './signForm';
import { SocialLogIn } from './socialLogIn';

import useAuthModal from './useAuthModal';

import './authModal.scss';

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
    <Modal
      isOpen={isOpen}
      onClose={onModalClose}
      title={dic.AUTHENIFICATION}
      closeBtnTitle={dic.CLOSE}
    >
      <Tabs
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
      </Tabs>
      <SocialLogIn
        onSignInWithGoogle={onSignInWithGoogle}
        dic={dic}
      />
    </Modal>)
}

export { AuthModal };
