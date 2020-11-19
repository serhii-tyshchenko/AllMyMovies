import React from 'react';
import { UISelect } from 'modules/ui';

import './LanguageSelect.scss';

const LanguageSelect = (props) => {
  const {
    language, onChange, options, STR,
  } = props;

  return (
    <UISelect
      value={language}
      onChange={onChange}
      options={options}
      extraClassName="language-select"
      title={STR.TOGGLE_LANGUAGE}
    />
  );
};

export { LanguageSelect };
