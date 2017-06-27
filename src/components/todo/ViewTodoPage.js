import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';

class ViewTodoPage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      todo:Object.assign({},this.props.todo)
    };

  }

  componentWillReceiveProps(nextProps){
    if(this.props.todo.id != nextProps.todo.id){
      this.setState({todo:Object.assign({}, nextProps.todo)});
    }
  }
  render(){
    const {todo} = this.state;
    return (
        <div>

          <Link to={`/todo/edit/${todo.id}`}>Edit to do {todo.id} {todo.title}</Link>
        </div>

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
    actions:bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTodoPage);
