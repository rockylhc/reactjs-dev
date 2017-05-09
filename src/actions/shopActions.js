import * as types from './actionTypes';
import ShopApi from '../api/mockShopApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadShopsSuccess(shops){
  return { type:types.LOAD_SHOPS_SUCCESS, shops}
}

export function loadShops(){
  return function (dispatch){
    dispatch(beginAjaxCall());
    return ShopApi.getAllShops().then(shops=>{
      dispatch(loadShopsSuccess(shops));
    }).catch(error=>{
      throw(error);
    })
  }
}

