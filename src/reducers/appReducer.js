import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {REHYDRATE} from 'redux-persist/constants';

export default function appReducer(state, action){
  if(action.type==types.REHYDRATE){
    return Object.assign({}, state, action.payload.app);
  }

  if(action.type == types.NOTIFICATION_TRIGGER){
    return Object.assign({}, state, {announcement:action.announcement, openAnnouncement:true});
  }
  if(action.type == types.NOTIFICATION_CLOSE){
    return Object.assign({}, state, {openAnnouncement:false});
  }

  if(action.type == types.CHANGE_LOCALE){
    return Object.assign({}, state,{locale:action.locale})
  }

  return state|| {...initialState.app};
}
