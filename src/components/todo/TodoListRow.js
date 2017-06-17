import React from 'react';
import {Link} from 'react-router-dom';
import {
  TableBody,
  TableCell,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
const TodoListRow = ({todo}) => {
  return (
    <TableRow>
      <TableCell><Link to={'/todo/'+todo.id}>{todo.guid}</Link></TableCell>
      <TableCell>
        <Link to={'/todo/'+todo.id}>
          {todo.id}
        </Link>
      </TableCell>
      <TableCell><Link to={'/todo/'+todo.id}>{todo.title}</Link></TableCell>
    </TableRow>
  );
};

export default TodoListRow;
