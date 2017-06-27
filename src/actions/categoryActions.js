import CategoryApi from  '../api/mockCategoryApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export let loadCategoriesSuccess =(categories) => {
  return {type:types.LOAD_CATEGORIES_SUCCESS, categories};
}

export let loadCategories =() => {
  return dispatch => {
    dispatch(beginAjaxCall());
    return CategoryApi.getAllCategories().then(categories=>{
      dispatch(loadCategoriesSuccess(categories));
    }).catch(error => {
      throw(error);
    })
  }
}
