import * as types from './actionTypes';
import UserApi from '../api/mockUserApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export let loginSuccess = (user) =>{
  return { type:types.LOGIN_SUCCESS, user}
}

export let logoutSuccess = (user) =>{
  return { type:types.LOGOUT_SUCCESS, user}
}

export let loginFailed = (user) =>{
  return { type:types.LOGIN_ERROR, user}
}

export let logoutFailed = (user) =>{
  return { type:types.LOGOUT_ERROR, user}
}

export let loginUser = (user) =>{
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

export let logoutUser = (user) =>{
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
