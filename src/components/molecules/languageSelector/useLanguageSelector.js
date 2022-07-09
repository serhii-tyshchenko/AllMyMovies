import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSettings } from 'store/actions';
import { getAppLanguage, getUserId } from 'store/selectors';

const useLanguageSelector = () => {
  const dispatch = useDispatch();
  const currLanguage = useSelector(getAppLanguage);
  const uid = useSelector(getUserId);

  const onLanguageChange = useCallback(
    (evt) => dispatch(updateSettings(uid, { language: evt.target.value })),
    [dispatch, uid]
  );

  return {
    currLanguage,
    onLanguageChange,
  };
};

export default useLanguageSelector;
