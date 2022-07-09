import { LANGUAGES } from 'core/constants';

import { useLocalization } from 'hooks';
import { Select } from 'components/ui';

import useLanguageSelector from './useLanguageSelector';

import './languageSelector.scss';

const NAME_SPACE = 'language-selector';

function LanguageSelector() {
  const dic = useLocalization();
  const { currLanguage, onLanguageChange } = useLanguageSelector();

  return (
    <Select
      value={currLanguage}
      onChange={onLanguageChange}
      options={LANGUAGES}
      extraClassName={NAME_SPACE}
      title={dic.TOGGLE_LANGUAGE}
    />
  );
}

export default LanguageSelector;
