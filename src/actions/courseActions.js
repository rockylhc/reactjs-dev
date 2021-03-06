import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export let loadCoursesSuccess =(courses) => {
  return { type:types.LOAD_COURSES_SUCCESS, courses}
}

export let createCourseSuccess =(course) => {
  return {type:types.CREATE_COURSE_SUCCESS, course}
}

export let updateCourseSuccess =(course) => {
  return {type:types.UPDATE_COURSE_SUCCESS, course}
}

export let loadCourses =() => {
  return function (dispatch){
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses=>{
      dispatch(loadCoursesSuccess(courses));
    }).catch(error=>{
      throw(error);
    })
  }
}

export let saveCourse = (course) => {
  return function (dispatch, getState){
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse=>{
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
      dispatch(createCourseSuccess(savedCourse));
    }).catch(error=>{
      dispatch(ajaxCallError(error));
      throw(error);
    })
  }
}
