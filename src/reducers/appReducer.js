import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function appReducer(state, action){
  if(action.type == types.NOTIFICATION_TRIGGER){
    return Object.assign({}, state, {announcement:action.announcement});

  }
  if(action.type == types.CHANGE_LOCALE){
    return Object.assign({}, state,{locale:action.locale})
  }

  return {...initialState.app};
}
