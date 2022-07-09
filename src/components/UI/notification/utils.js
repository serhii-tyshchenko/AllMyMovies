import { NOTIFICATION_TYPES } from 'core/constants';
import { makeConfig } from 'utils';

const getNotificationTitle = (dic) =>
  makeConfig({
    [NOTIFICATION_TYPES.ERROR]: dic.ERROR,
    [NOTIFICATION_TYPES.WARNING]: dic.WARNING,
    [NOTIFICATION_TYPES.SUCCESS]: dic.SUCCESS,
    default: dic.INFO,
  });

export default getNotificationTitle;
