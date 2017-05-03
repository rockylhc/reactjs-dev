import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render(){
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <Link
          className="btn btn-primary"
          to="/course"
        >Add Course</Link>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses //from root reducer
  };
}

function mapDispatchToProps(dispatch){
  return {
    //coursePageCreateCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
