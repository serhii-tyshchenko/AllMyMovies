import { memo } from 'react';
import { useLocalization } from 'hooks';
import { UIIconButton } from 'components';

import useThemeToggler from './useThemeToggler';
import { btnIconConfig } from './constants';

function ThemeToggler() {
  const dic = useLocalization();

  const { appTheme, handleThemeToggle } = useThemeToggler();

  return (
    <UIIconButton
      icon={btnIconConfig[appTheme]}
      onClick={handleThemeToggle}
      title={dic.TOGGLE_THEME}
    />
  );
}

export default memo(ThemeToggler);
