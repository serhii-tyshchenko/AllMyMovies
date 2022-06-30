/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { UITabs, UIModal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInWithEmail, signInWithGoogle, signUpWithEmail, hideModal,
} from 'store/actions';
import { getIsUserLogged, getIsAuthModalVisible } from 'store/selectors';

import { useLocalization } from 'hooks';

import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { SocialLogInForm } from './SocialLogInForm';

import './AuthModal.scss';

function AuthModal() {
  const dic = useLocalization();
  const dispatch = useDispatch();
  const isLogged = useSelector(getIsUserLogged);
  const isModalVisible = useSelector(getIsAuthModalVisible);
  const initialFormData = { email: '', password: '' };
  const [formData, setFormData] = useState(initialFormData);
  useEffect(() => {
    if (isLogged) {
      setFormData(initialFormData);
      dispatch(hideModal('auth'));
    }
  }, [isLogged]);
  const onModalClose = () => {
    setFormData(initialFormData);
    dispatch(hideModal('auth'));
  }
  const onSignIn = (event) => {
    if (formData.email && formData.password) {
      event.preventDefault();
      dispatch(signInWithEmail(formData.email, formData.password));
    }
  }
  const onSignInWithGoogle = () => {
    dispatch(signInWithGoogle());
  }
  const onSignUp = (event) => {
    if (formData.email && formData.password) {
      event.preventDefault();
      dispatch(signUpWithEmail(formData.email, formData.password));
    }
  }
  const onFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  const onFormReset = () => {
    setFormData(initialFormData);
  }

  return (
    <UIModal isVisible={isModalVisible} onClose={onModalClose} title={dic.AUTHENIFICATION}>
      <UITabs labels={[dic.SIGN_IN, dic.SIGN_UP]} extraClassName="auth-form__tabs" onTabClick={onFormReset}>
        <SignInForm
          onSubmit={onSignIn}
          onChange={onFormChange}
          data={formData}
          dic={dic}
        />
        <SignUpForm
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
