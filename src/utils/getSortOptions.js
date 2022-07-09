import { SORT_OPTIONS } from 'core/constants';

const getSortOptions = (dic) => [
  { value: SORT_OPTIONS.NONE, label: '— — —', disabled: true },
  { value: SORT_OPTIONS.TITLE_ASC, label: dic.SORT_BY_TITLE_A_Z },
  { value: SORT_OPTIONS.TITLE_DSC, label: dic.SORT_BY_TITLE_Z_A },
  { value: SORT_OPTIONS.YEAR_ASC, label: dic.SORT_BY_YEAR_ASC },
  { value: SORT_OPTIONS.YEAR_DSC, label: dic.SORT_BY_YEAR_DSC },
];

export default getSortOptions;
