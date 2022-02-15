import { translations, languages } from './translations.ts';

const getLocalization = (lang) => translations[lang];

export { getLocalization, languages };
