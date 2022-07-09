import { memo } from 'react';
import { useLocalization } from 'hooks';
import { IconButton } from 'components/ui';

import useThemeToggler from './useThemeToggler';
import { btnIconConfig } from './constants';

function ThemeToggler() {
  const dic = useLocalization();

  const { appTheme, handleThemeToggle } = useThemeToggler();

  return (
    <IconButton
      icon={btnIconConfig[appTheme]}
      onClick={handleThemeToggle}
      title={dic.TOGGLE_THEME}
    />
  );
}

export default memo(ThemeToggler);
