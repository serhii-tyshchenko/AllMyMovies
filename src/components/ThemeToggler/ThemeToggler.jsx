import { useContext } from 'react';
import { Localization } from 'contexts';
import { useSelector, useDispatch } from 'react-redux';
import { updateSettings } from 'store/actions';
import { getUserId, getAppTheme } from 'store/selectors';
import { UIIconButton } from 'components';

const ThemeToggler = () => {
  const STR = useContext(Localization);
  const dispatch = useDispatch();
  const theme = useSelector(getAppTheme);
  const uid = useSelector(getUserId);
  const btnIcon = theme === 'light' ? 'moon' : 'sun';

  function handleThemeChange() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(updateSettings(uid, { theme: newTheme }));
  }

  return (
    <UIIconButton
      icon={btnIcon}
      onClick={handleThemeChange}
      title={STR.TOGGLE_THEME}
    />
  );
};

export { ThemeToggler };
