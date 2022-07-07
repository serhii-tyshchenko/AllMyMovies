export { default as getClassName } from './getClassName';
export { default as isEmpty } from './isEmpty';
export { default as sortArrayOfObjects } from './sortArrayOfObjects';
export { default as getPredefinedLists } from './getPredefinedLists';
export { default as getSortOptions } from './getSortOptions';

export const isUndefined = (value) => value === undefined;

export const makeConfig = (config) => (value) =>
  isUndefined(config[value]) ? config.default : config[value];
