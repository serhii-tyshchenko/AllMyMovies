import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../action-types';

export const showNotification = (data) => ({
  type: SHOW_NOTIFICATION,
  payload: data,
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});
