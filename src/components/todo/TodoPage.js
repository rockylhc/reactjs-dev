import React from 'react';
import {Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoList from './TodoList';
import Typography from 'material-ui/Typography';
import * as todoActions from '../../actions/todoActions';
import TranslatorHOC from '../../HOC/TranslatorHOC';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import ManageTodoPage from './ManageTodoPage';
import ViewTodoPage from './ViewTodoPage';
const styleSheet = createStyleSheet('PaperSheet', theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
}));
class TodoPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }
  todoRow(todo, index){
    return <div key={index}>{todo.title}</div>;
  }

  render(){
    const {todos, i18n, match} = this.props;
    return (
      <div>
        <Typography type="headline" component="h1">
          Home
        </Typography>
        <Link to={`create/todo`}>
          <Button> {i18n['addTodo']}</Button>
        </Link>

        <TodoList todos={todos}/>

      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    todos: state.todos //from root reducer,
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(todoActions, dispatch)
  }
}

export default TranslatorHOC(connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(TodoPage)));
