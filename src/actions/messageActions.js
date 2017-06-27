import * as types from './actionTypes';
export let fireMessage = (announcement) => {
  return {type:types.NOTIFICATION_TRIGGER, announcement};
}

export let broadcastMessage = (announcement) => {
  return function (dispatch){
    dispatch(fireMessage(announcement));
  }
}
