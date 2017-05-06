import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function messageReducer(state= initialState.message, action){
  //debugger;
  if(action.type == types.NOTIFICATION_TRIGGER){
    return action.message;
    /*
    return Object.assign({}, state, {
      message: action.message
    });*/
  }
  return state;
}
