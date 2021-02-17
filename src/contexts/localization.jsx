/* eslint-disable react/prop-types */
import { createContext } from 'react';
import { useSelector } from 'react-redux';
import { getAppLanguage } from 'store/selectors';
import { getLocalization } from 'assets/localization';

const Localization = createContext();
Localization.displayName = 'Localization';

const LocalizationProvider = ({ children }) => {
  const language = useSelector(getAppLanguage);

  return (
    <Localization.Provider value={getLocalization(language)}>
      {children}
    </Localization.Provider>
  );
};

export { Localization, LocalizationProvider };
