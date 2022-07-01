import { useSelector, useDispatch } from 'react-redux';
import { updateSettings } from 'store/actions';
import { getAppLanguage, getUserId } from 'store/selectors';
import { languages } from 'localization';

import { useLocalization } from 'hooks';
import { UISelect } from 'components';

function LanguageSelector() {
  const dispatch = useDispatch();
  const dic = useLocalization();
  const currLang = useSelector(getAppLanguage);
  const uid = useSelector(getUserId);

  const handleLanguageChange = (evt) => {
    const language = evt.target.value;
    dispatch(updateSettings(uid, { language }));
  }

  return (
    <UISelect
      value={currLang}
      onChange={handleLanguageChange}
      options={languages}
      extraClassName="language-selector"
      title={dic.TOGGLE_LANGUAGE}
    />
  );
}

export { LanguageSelector };
