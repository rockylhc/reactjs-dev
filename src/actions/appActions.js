import * as types from './actionTypes';
export let fireMessage = (announcement) => {
  return {type:types.NOTIFICATION_TRIGGER, announcement};
}
export let closeMessage = () => {
  return {type:types.NOTIFICATION_CLOSE};
}
export let updateLocale = (locale) => {
  return {type:types.CHANGE_LOCALE, locale};
}
export let broadcastMessage = (announcement) => {
  return function (dispatch){
    dispatch(fireMessage(announcement));
  }
}
export let closeNotification = () => {
  return function (dispatch){
    dispatch(closeMessage());
  }
}
export let changeLocale = (locale) => {
  return function (dispatch){
    dispatch(updateLocale(locale));
  }
}
