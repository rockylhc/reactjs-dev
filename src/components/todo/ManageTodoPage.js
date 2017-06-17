import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from '../../actions/todoActions';

import TodoForm from './TodoForm';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TranslatorHOC from '../../HOC/TranslatorHOC';
const styleSheet = createStyleSheet('PaperSheet', theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
}));
class ManageTodoPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      todo:Object.assign({},this.props.todo),
      errors:{},
      saving: false
    };

    this.updateTodoState = this.updateTodoState.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.todo.id != nextProps.todo.id){
      this.setState({todo:Object.assign({}, nextProps.todo)});
    }
  }

  updateTodoState(event){
    console.log(event);
    const field = event.target.name;
    let Todo = this.state.todo;
    Todo[field] = event.target.value;
    return this.setState({todo: todo});
  }

  handleClick(event){
    event.preventDefault();
    console.log('click');
  }

  saveTodo(event){
    event.preventDefault();
    this.setState({saving:true});
    this.props.actions.saveTodo(this.state.todo)
      .then(()=> this.redirect())
      .catch(error=>{
        this.setState({saving:false});
        console.log(error);
      });
  }

  redirect(){
    this.setState({saving:false});
    //hashHistory.replace('/todo');
  }

  render(){

    return (
      <TodoForm
        onChange={this.updateTodoState}
        onClick={this.handleClick}
        onSave={this.saveTodo}
        todo={this.state.todo}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

function getTodoById(todos, id){
  const todo = todos.filter(todo => todo.id == id);
  if(todo.length) return todo[0];
  return null;
}


function mapStateToProps(state, ownProps){
  let todo ={title:''};

  const todoId = ownProps.match.params.id;

  if(todoId && state.todos.length > 0 ){
    todo = getTodoById(state.todos, todoId);
  }

  return{todo:todo};
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(TodoActions, dispatch)
  };
}

export default TranslatorHOC(connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(ManageTodoPage)));
