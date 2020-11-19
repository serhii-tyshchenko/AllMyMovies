import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Localization } from 'contexts';
import { updateSettings } from 'store/actions';
import { languages } from 'assets/localization';
import { LanguageSelect } from 'modules/settings';

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const STR = useContext(Localization);
  const currLang = useSelector((state) => state.settings.language);
  const uid = useSelector((state) => state.user.uid);
  function handleLanguageChange(evt) {
    const language = evt.target.value;
    dispatch(updateSettings(uid, { language }));
  }

  return (
    <LanguageSelect language={currLang} onChange={handleLanguageChange} options={languages} STR={STR} />
  );
};

export { LanguageSelector };
