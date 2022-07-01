import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
  hideModal,
} from 'store/actions';
import { getIsUserLogged, getIsAuthModalVisible } from 'store/selectors';

const initialFormData = { email: '', password: '' };

const isFormValid = (formData) => formData.email && formData.password;

const useAuthModal = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(getIsUserLogged);
  const isModalVisible = useSelector(getIsAuthModalVisible);
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
  };

  const onSignIn = useCallback(
    (evt) => {
      if (isFormValid(formData)) {
        evt.preventDefault();
        dispatch(signInWithEmail(formData.email, formData.password));
      }
    },
    [formData]
  );

  const onSignInWithGoogle = () => dispatch(signInWithGoogle());

  const onSignUp = useCallback(
    (evt) => {
      if (isFormValid(formData)) {
        evt.preventDefault();
        dispatch(signUpWithEmail(formData.email, formData.password));
      }
    },
    [formData]
  );

  const onFormChange = (evt) =>
    setFormData({ ...formData, [evt.target.name]: evt.target.value });

  const onFormReset = () => setFormData(initialFormData);

  return {
    formData,
    isModalVisible,
    onModalClose,
    onSignIn,
    onSignInWithGoogle,
    onSignUp,
    onFormChange,
    onFormReset,
  };
};

export default useAuthModal;
