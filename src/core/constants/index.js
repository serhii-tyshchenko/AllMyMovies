export const SORT_OPTIONS = {
  NONE: 'none',
  TITLE_ASC: 'title-asc',
  TITLE_DSC: 'title-dsc',
  YEAR_ASC: 'year-asc',
  YEAR_DSC: 'year-dsc',
};

export const MODAL_NAMES = {
  AUTH: 'auth',
  MOVIE_DETAILS: 'movie-details',
};

export const LANGUAGES = [
  { value: 'en', label: 'EN' },
  { value: 'ua', label: 'UA' },
];

export const NOTIFICATION_TYPES = {
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'succes',
};

export const PORTAL_ROOT = document.getElementById('portal-root');

export const APP_ROOT = document.getElementById('root');

export const LS_KEY_NAME = process.env.REACT_APP_NAME;
