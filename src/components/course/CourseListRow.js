import React from 'react';
import {Link} from 'react-router';
import {Table} from 'semantic-ui-react';
const CourseListRow = ({course}) => {
  return (
    <Table.Row>
      <Table.HeaderCell><a href={course.watchHref} target="_blank">Watch</a></Table.HeaderCell>
      <Table.HeaderCell><Link to={'/course/'+course.id}>{course.title}</Link></Table.HeaderCell>
      <Table.HeaderCell>{course.authorId}</Table.HeaderCell>
      <Table.HeaderCell>{course.category}</Table.HeaderCell>
      <Table.HeaderCell>{course.length}</Table.HeaderCell>
    </Table.Row>
  );
};

export default CourseListRow;
