import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
} from 'store/actions';
import { getIsUserLogged } from 'store/selectors';
import { useModalContext } from 'hooks';
import { MODAL_NAMES } from 'core/constants';

const initialFormData = { email: '', password: '' };

const isFormValid = (formData) => formData.email && formData.password;

const useAuthModal = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(getIsUserLogged);
  const { hideModal } = useModalContext();
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (isLogged) {
      setFormData(initialFormData);
      hideModal(MODAL_NAMES.AUTH);
    }
  }, [isLogged]);

  const onModalClose = () => {
    setFormData(initialFormData);
    hideModal(MODAL_NAMES.AUTH);
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
    onModalClose,
    onSignIn,
    onSignInWithGoogle,
    onSignUp,
    onFormChange,
    onFormReset,
  };
};

export default useAuthModal;
