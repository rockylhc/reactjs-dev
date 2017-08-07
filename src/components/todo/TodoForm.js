import React,{Component} from 'react';
import {connect} from 'react-redux';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import {FormControl, FormGroup,  FormLabel} from 'material-ui/Form';
import TextInput from '../common/TextInput';
import TranslatorHOC from '../../HOC/TranslatorHOC';
import validator from 'validator';
import {validated} from 'react-custom-validation';

const styleSheet = createStyleSheet('Homepage', theme => ({
  highprofilebutton: {
    margin: theme.spacing.unit,
    background: 'linear-gradient(45deg, #5C258D 30%, #4389A2 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },
  lowkeybutton: {
    margin: theme.spacing.unit,
    background: 'linear-gradient(45deg, #232526 30%, #414345 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },
}));

const minLength = (field, length, msg) => field.length >= length ? null : msg.replace('${length}',length);

const validationConfig = (props) => {
  const {guid, title} = props.todo;
  const {i18n} = props;
  return {
    fields:['guid', 'title'],
    validations:{
      guid:[[minLength, guid, 6, i18n['validationMessageMinLength']]],
      title:[[minLength, title, 6, i18n['validationMessageMinLength']]]
    },
    options:{
      asyncThrottle:100,
      typingDebounce: [500, 500]
    }
  }
}

const TodoForm = ({...props}) => {
  const {todo, onChange, onValid, onInvalid, onSave, onBlur, onFocus, onReset, errors, classes, $field, $validation, $submit, i18n} = props;

  return(
    <form>
      <FormControl>
        <FormGroup>
          <InputLabel htmlFor="guid">GUID</InputLabel>
          <Input
            name="guid"
            value={todo.guid}
            onBlur={onBlur}
            onFocus={onFocus}
            {...$field('guid', (e) => onChange('guid', e.target.value))}
          />

          {$validation.guid.show && <FormLabel error={true}>{$validation.guid.error.reason}</FormLabel>}

        </FormGroup>
      </FormControl>
      <FormControl>
        <FormGroup>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            name="title"
            value={todo.title}
            onBlur={onBlur}
            {...$field('title', (e) => onChange('title', e.target.value))}
          />
        </FormGroup>
      </FormControl>
      <Button className={classes.highprofilebutton} onClick={(e) => {
        $submit(onValid, onInvalid)
      }} raised>Submit</Button>
      <Button className={classes.lowkeybutton} onClick={onReset} raised>Clear</Button>
    </form>
  )
}

export default withStyles(styleSheet)(TranslatorHOC(validated(validationConfig)(TodoForm)));
