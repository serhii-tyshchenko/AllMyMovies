import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInWithEmail, signInWithGoogle, signUpWithEmail, hideModal,
} from 'store/actions';
import { AuthModal } from '../components';

const AuthContainer = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const isModalVisible = useSelector((state) => state.modals.auth.isVisible);
  const initialFormData = { email: '', password: '' };
  const [formData, setFormData] = useState(initialFormData);
  useEffect(() => {
    if (isLogged) {
      setFormData(initialFormData);
      dispatch(hideModal('auth'));
    }
  }, [isLogged]);
  function onModalClose() {
    setFormData(initialFormData);
    dispatch(hideModal('auth'));
  }
  function onSignIn(event) {
    event.preventDefault();
    if (formData.email && formData.password) {
      dispatch(signInWithEmail(formData.email, formData.password));
    }
  }
  function onSignInWithGoogle() {
    dispatch(signInWithGoogle());
  }
  function onSignUp(event) {
    event.preventDefault();
    if (formData.email && formData.password) {
      dispatch(signUpWithEmail(formData.email, formData.password));
    }
  }
  function onFormChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function onFormReset() {
    setFormData(initialFormData);
  }

  return (
    <AuthModal
      isVisible={isModalVisible}
      onClose={onModalClose}
      data={formData}
      onChange={onFormChange}
      onTabClick={onFormReset}
      onSignIn={onSignIn}
      onSignUp={onSignUp}
      onSignInWithGoogle={onSignInWithGoogle}
    />
  );
};

export { AuthContainer };
