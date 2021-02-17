import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Localization } from 'contexts';
import { updateSettings } from 'store/actions';
import { getAppLanguage, getUserId } from 'store/selectors';
import { languages } from 'assets/localization';
import { UISelect } from 'components';

import './LanguageSelector.scss';

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const STR = useContext(Localization);
  const currLang = useSelector(getAppLanguage);
  const uid = useSelector(getUserId);

  function handleLanguageChange(evt) {
    const language = evt.target.value;
    dispatch(updateSettings(uid, { language }));
  }

  return (
    <UISelect
      value={currLang}
      onChange={handleLanguageChange}
      options={languages}
      extraClassName="language-selector"
      title={STR.TOGGLE_LANGUAGE}
    />
  );
};

export { LanguageSelector };
