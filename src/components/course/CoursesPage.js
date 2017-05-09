import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import MessageShow from './MessageShow';
import * as courseActions from '../../actions/courseActions';
import LinkComponent from '../common/LinkComponent';
import {Grid, Item} from 'semantic-ui-react';
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

      <Grid.Row>
        <Grid.Column>
          <h1>rockylhc learning react redux</h1>
          <Grid.Row>
            <Grid columns={4} verticalAlign="middle">
              <MessageShow message={this.props.message} />
              <Item>
                <Item.Content content='Course' className='ui button' as={Link} to='/course' />
              </Item>
              <LinkComponent componenttext="component1" />
              <LinkComponent componenttext="component2" />
            </Grid>
          </Grid.Row>

        </Grid.Column>
        <Grid.Column>
          <CourseList courses={courses}/>
        </Grid.Column>
      </Grid.Row>

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
