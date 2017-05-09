import React from 'react';
import CourseListRow from './CourseListRow';
import {Table} from 'semantic-ui-react';
const CourseList = ({courses, deleteCourse}) => {
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Author</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Length</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {courses.map(course =>
          <CourseListRow key={course.id} course={course}/>
        )}
      </Table.Body>
    </Table>
  );
}

export default CourseList;
