import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function appReducer(state, action){
  //debugger;
console.log(action);
console.log(state);
  if(action.type == types.NOTIFICATION_TRIGGER){
    return {app:{announcement:action.announcement}};
    /*
    return Object.assign({}, state, {
      message: action.message
    });*/
  }
  if(action.type == types.CHANGE_LOCALE){
    return Object.assign({}, state,{locale:action.locale})
  }
  return {app:{announcement:initialState.announcement, locale:initialState.locale}};
}
