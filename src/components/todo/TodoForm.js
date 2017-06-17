import React,{Component} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import TranslatorHOC from '../../HOC/TranslatorHOC';
import Typography from 'material-ui/Typography';
import validate from '../validator/validate';

class TodoForm extends Component{
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
    const { reset, onSave, onChange, pristine, saving, submitting, i18n, todo } = this.props;
    console.log(this);
    return(
      <form onSubmit={onSave}>
        <Typography type="headline" component="h1">
          {i18n['manageRestaurant']}
        </Typography>
        <Field name="title" component={TextInput} onChange={onChange} label="Title" />
        <button type="submit" disabled={pristine || submitting}>{submitting? 'Saving...': 'Save'}</button>

        <button type="button" disabled={pristine || submitting}onClick={reset}>Clear Values</button>
      </form>
    )
  }
}
function getTodoById(todos, id){
  const todo = todos.filter(todo => todo.id == id);
  if(todo.length) return todo[0];
  return null;
}

function mapStateToProps(state, ownProps){
  console.log(state)
  /*
  let todo ={title:''};

  const todoId = ownProps.match.params.id;

  if(todoId && state.todos.length > 0 ){
    todo = getTodoById(state.todos, todoId);
  }

  return{todo:todo};
  */
}
export default TranslatorHOC(connect(mapStateToProps))(reduxForm({form: 'TodoForm', validate})(TodoForm)));
//export default TranslatorHOC(reduxForm({form: 'TodoForm', validate})(TodoForm));
