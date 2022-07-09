import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSettings } from 'store/actions';
import { getUserId, getAppTheme } from 'store/selectors';

import { themeToggleConfig } from './constants';

const useThemeToggler = () => {
  const dispatch = useDispatch();
  const appTheme = useSelector(getAppTheme);
  const uid = useSelector(getUserId);

  const handleThemeToggle = useCallback(() => {
    dispatch(updateSettings(uid, { theme: themeToggleConfig[appTheme] }));
  }, [appTheme, uid, dispatch]);

  return {
    handleThemeToggle,
    appTheme,
  };
};

export default useThemeToggler;
