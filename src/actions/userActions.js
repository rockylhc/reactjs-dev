import * as types from './actionTypes';
import UserApi from '../api/mockUserApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loginSuccess(user){
  return { type:types.LOGIN_SUCCESS, user}
}

export function logoutSuccess(user){
  return { type:types.LOGOUT_SUCCESS, user}
}

export function loginFailed(user){
  return { type:types.LOGIN_ERROR, user}
}

export function logoutFailed(user){
  return { type:types.LOGOUT_ERROR, user}
}

export function loginUser(user){
  return function (dispatch){
    dispatch(beginAjaxCall());
    return UserApi.loginSuccess(user).then(getUser=>{
      dispatch(loginSuccess(getUser));
    }).catch(error=>{
      dispatch(ajaxCallError(error));
      dispatch(loginFailed(user));
      throw(error);
    })
  }
}

export function logoutUser(user){
  return function (dispatch){
    dispatch(beginAjaxCall());
    return UserApi.logoutSuccess(user).then(msg=>{
      dispatch(logoutSuccess(msg));
    }).catch(error=>{
      dispatch(ajaxCallError(error));
      dispatch(logoutFailed(user));
      throw(error);
    })
  }
}
