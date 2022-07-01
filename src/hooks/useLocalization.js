import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getAppLanguage } from 'store/selectors';

import { dic } from 'localization';

const useLocalization = () => {
  const language = useSelector(getAppLanguage);

  return useMemo(() => dic[language], [language]);
};

export default useLocalization;
