import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from '../../actions/todoActions';
import TodoForm from './TodoForm';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TranslatorHOC from '../../HOC/TranslatorHOC';
import update from 'immutability-helper';

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
      todo:Object.assign({},props.todo),
      errors:{},
      saving: false
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.updateTodoState = this.updateTodoState.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.todo.guid != nextProps.todo.guid){
      this.setState({todo:Object.assign({}, nextProps.todo)});
    }
  }
  updateTodoState(el, val){
    let Todo = this.state.todo;
    Todo[el] = val;
    return this.setState(update(this.state,{todo:{[el]:{$set:val}}}));
  }

  handleFocus(event){
    console.log(this.state);
    //let todo = this.state.todo;
    //todo["isTouched"] = true;
    //return this.setState({todo:todo});
  }

  handleClick(event){
    event.preventDefault();
    //console.log('click');
  }

  handleReset(event){
    event.preventDefault();
    //console.log(this);
  }

  saveTodo(event, dispatch){
    event.preventDefault();
    this.setState({saving:true});
    //console.log(this.state)
    /*
    this.props.actions.saveTodo(this.state.todo)
      .then(()=> this.redirect())
      .catch(error=>{
        this.setState({saving:false});
        console.log(error);
      });
      */
  }

  redirect(){
    this.setState({saving:false});
    //hashHistory.replace('/todo');
  }

  render(){
    return (
      <TodoForm
        onChange={this.updateTodoState}
        onFocus={this.handleFocus}
        onBlur={this.validateState}
        onClick={this.handleClick}
        onReset={this.handleReset}
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
  let todo ={guid:'',title:'',id:'',ancestor:'',created:''};

  let errors = {};
  const todoId = ownProps.match.params.id;

  if(todoId && state.todos.length > 0 ){
    todo = getTodoById(state.todos, todoId);
  }

  return{
    todo:todo,
    errors:errors
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(TodoActions, dispatch)
  };
}

export default TranslatorHOC(connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(ManageTodoPage)));
