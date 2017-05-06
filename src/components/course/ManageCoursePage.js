import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import {hashHistory} from 'react-router';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      course:Object.assign({},this.props.course),
      errors:{},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.course.id != nextProps.course.id){
      this.setState({course:Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(event){
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse(event){
    event.preventDefault();
    this.setState({saving:true});
    this.props.actions.saveCourse(this.state.course)
      .then(()=> this.redirect())
      .catch(error=>{
        this.setState({saving:false});
        console.log(error);
      });
  }

  redirect(){
    this.setState({saving:false});
    hashHistory.replace('/courses');
  }

  render(){

    return (
      <CourseForm
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        allAuthors={this.props.authors}
        course={this.state.course}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

function getCourseById(courses, id){
  const course = courses.filter(course => course.id == id);
  if(course.length) return course[0];
  return null;
}

function mapStateToProps(state, ownProps){
  console.log(state);
  let course ={id:'', watchHref:'',title:'',authorId:'',length:'',category:''}
  const courseId = ownProps.params.id;

  if(courseId && state.courses.length > 0 ){
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    }
  });

  return{course:course, authors:authorsFormattedForDropdown};
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
