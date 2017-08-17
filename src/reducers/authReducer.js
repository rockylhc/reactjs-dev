import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state=initialState.user, action){
  if(action.type==types.CHECK_AUTH){
    console.log(state)
    console.log(action)
    return state;
  }
  return state;
}
