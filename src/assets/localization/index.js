import { translations, languages } from './translations';

const getLocalization = (lang) => translations[lang];

export { getLocalization, languages };
