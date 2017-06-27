import * as types from './actionTypes';

export let beginAjaxCall = () =>{
  return {type:types.BEGIN_AJAX_CALL }
}

export let ajaxCallError = () =>{
  return {type: types.AJAX_CALL_ERROR}
}
