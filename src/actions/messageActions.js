import * as types from './actionTypes';
export function fireMessage(message){
  return {type:types.NOTIFICATION_TRIGGER, message};
}

export function logMessage(message){
  return function (dispatch){
    dispatch(fireMessage(message));
  }
}
