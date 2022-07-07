import { LANGUAGES } from 'constants';

import { useLocalization } from 'hooks';
import { UISelect } from 'components';

import useLanguageSelector from './useLanguageSelector';

const NAME_SPACE = 'language-selector';

function LanguageSelector() {
  const dic = useLocalization();
  const { currLanguage, onLanguageChange } = useLanguageSelector();

  return (
    <UISelect
      value={currLanguage}
      onChange={onLanguageChange}
      options={LANGUAGES}
      extraClassName={NAME_SPACE}
      title={dic.TOGGLE_LANGUAGE}
    />
  );
}

export { LanguageSelector };
