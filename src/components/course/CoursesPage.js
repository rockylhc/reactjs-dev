import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import MessageShow from './MessageShow';
import * as courseActions from '../../actions/courseActions';
import LinkComponent from '../common/LinkComponent';

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render(){
    const {courses, message} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <MessageShow message={this.props.message} />
        <Link
          className="btn btn-primary"
          to="/course"
        >Add Course</Link>
        <LinkComponent componenttext="component1" />
        <LinkComponent componenttext="component2" />
        <CourseList courses={courses}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    message: state.message,
    courses: state.courses //from root reducer,
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
