import isUndefined from './isUndefined';

const makeConfig = (config) => (value) =>
  isUndefined(config[value]) ? config.default : config[value];

export default makeConfig;
