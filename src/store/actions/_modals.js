import { SHOW_MODAL, HIDE_MODAL } from '../action-types';

export const showModal = (data) => ({
  type: SHOW_MODAL,
  payload: data,
});

export const hideModal = (modalName) => ({
  type: HIDE_MODAL,
  payload: modalName,
});
