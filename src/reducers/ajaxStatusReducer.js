import * as types from '../actions/actionTypes';
import initialState from './initialState';


function actionTypeEndsInSuccessOrFailed(type){
  return type.substring(type.length - 8) == '_SUCCESS' || type.substring(type.length - 8) == '_FAILED';
}
export default function ajaxStatusReducer(state= initialState.numAjaxCallsInProgress, action){
  if(action.type == types.BEGIN_AJAX_CALL){
    return state + 1;
  }else if(action.type == types.AJAX_CALL_ERROR || actionTypeEndsInSuccessOrFailed(action.type)){
    return state - 1;
  }
  return state;
}
