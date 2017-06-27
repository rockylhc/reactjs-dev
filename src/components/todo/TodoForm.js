import React,{Component} from 'react';
import TextInput from '../common/TextInput';
import {connect} from 'react-redux';
import TranslatorHOC from '../../HOC/TranslatorHOC';
import Typography from 'material-ui/Typography';

class TodoForm extends Component{
  constructor(props, context){
    super(props, context);
  }

  componentWillReceiveProps(nextProps){
    //console.log(this);
  }
  render(){
    const { reset, onSave, onChange, pristine, saving, submitting, i18n, todo } = this.props;

    return(

      <Validation.components.Form onSubmit={(todo)=>this.onSave(todo)}>
        <Typography type="headline" component="h1">
          {i18n['manageTodo']}
        </Typography>
        <label>
          <Validation.components.Input
            onFocus={this.removeApiError}
            type="text"
            errorClassName="is-invalid-input"
            containerClassName=""
            value={todo.title}
            name="title"
            validations={['required']}
          />
        </label>

        <Validation.components.Button className="button">Submit</Validation.components.Button>

      </Validation.components.Form>

    )
  }
}
function getTodoById(todos, id){
  const todo = todos.filter(todo => todo.id == id);
  if(todo.length) return todo[0];
  return null;
}


export default TranslatorHOC((connect(null)(TodoForm)));
