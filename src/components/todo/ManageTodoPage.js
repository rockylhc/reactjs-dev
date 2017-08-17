import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from '../../actions/todoActions';
import TodoForm from './TodoForm';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TranslatorHOC from '../../HOC/TranslatorHOC';
import ProtectedHOC from '../../HOC/ProtectedHOC';
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
      saving: false,
      timestamp: Math.floor(Date.now() / 1000)
    };

    this.updateTodoState = this.updateTodoState.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.handleClear = this.handleClear.bind(this);
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

  handleClear(event){
    event.preventDefault();
    this.setState({
      todo:{title:'',guid:'',id:''},
      timestamp:Math.floor(Date.now() / 1000)
    });
  }

  saveTodo(event, dispatch){
    //event.preventDefault();
    this.setState({saving:true});
    console.log(this.state.todo);
    this.props.actions.saveTodo(this.state.todo)
      .then(()=> this.redirect())
      .catch(error=>{
        this.setState({saving:false});
        console.log(error);
      });
  }

  redirect(){
    this.setState({saving:false});
    this.props.history.push('/todo');
  }

  render(){
    const {locale} = this.props;
    return (
      <TodoForm
        key={this.state.timestamp}
        locale={locale}
        onChange={this.updateTodoState}
        onClear={this.handleClear}
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
    errors:errors,
    locale:state.app.locale,
    user:state.user
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TranslatorHOC(withStyles(styleSheet)(ProtectedHOC(ManageTodoPage))));
