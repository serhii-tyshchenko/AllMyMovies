import React, { useContext } from 'react';
import { Localization } from 'contexts';
import { useSelector, useDispatch } from 'react-redux';
import { updateSettings } from 'store/actions';
import { ThemeButton } from 'modules/settings';

const ThemeToggler = () => {
  const STR = useContext(Localization);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);
  const uid = useSelector((state) => state.user.uid);

  function handleThemeChange() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(updateSettings(uid, { theme: newTheme }));
  }

  return <ThemeButton theme={theme} onClick={handleThemeChange} STR={STR} />;
};

export { ThemeToggler };
