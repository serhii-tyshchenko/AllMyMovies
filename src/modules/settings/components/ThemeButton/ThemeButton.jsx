import React from 'react';
import { UIIconButton } from 'modules/ui';

import './ThemeButton.scss';

const ThemeButton = (props) => {
  const { theme, onClick, STR } = props;
  const btnIcon = theme === 'light' ? 'moon' : 'sun';
  return <UIIconButton icon={btnIcon} onClick={onClick} title={STR.TOGGLE_THEME} />;
};

export { ThemeButton };
