import React from 'react';
import TodoListRow from './TodoListRow';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TranslatorHOC from '../../HOC/TranslatorHOC';
const styleSheet = createStyleSheet('PaperSheet', theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
}));
const TodoList = ({todos}) => {

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>GUID</TableCell>
          <TableCell>ID</TableCell>
          <TableCell>Title</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {todos.map(todo =>
          <TodoListRow key={todo.id} todo={todo}/>
        )}
      </TableBody>
    </Table>
  );
}
export default TranslatorHOC((withStyles(styleSheet)(TodoList)));
