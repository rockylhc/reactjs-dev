import React,{Component} from 'react';
import {connect} from 'react-redux';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import {FormControl, FormGroup,  FormLabel} from 'material-ui/Form';
import TranslatorHOC from '../../HOC/TranslatorHOC';
import validator from 'validator';
import {validated} from 'react-custom-validation';

const styleSheet = createStyleSheet('LoginForm', theme => ({
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
    background: 'linear-gradient(45deg, #2a311b 30%, #2e4c24 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(127, 165, 170, .30)',
  },
  greyoutbutton: {
    margin: theme.spacing.unit,
    background: 'linear-gradient(45deg, #3c6477 30%, #103d69 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(22, 75, 75, .30)',
  },
}));

const minLength = (field, length, msg) => field.length >= length ? null : msg.replace('${length}',length);

const validationConfig = (props) => {
  const {todo:{guid, title, id},i18n} = props;
  return {
    fields:['username', 'password', 'id'],
    validations:{
      username:[[minLength, username, 1, i18n['validationMessageRequired']]],
      password:[[minLength, password, 1, i18n['validationMessageRequired']]],
    },
    options:{
      asyncThrottle:100,
      typingDebounce: [500, 500]
    }
  }
}

const LoginForm = ({...props}) => {
  const {todo, onChange, onInvalid, onSave, onClear, errors, classes, $field, $validation, $submit, i18n} = props;
  return(
    <form>
      <FormControl>
        <FormGroup>
          <InputLabel htmlFor="guid">{i18n['username']}</InputLabel>
          <Input
            name="username"
            value={user.username}
            {...$field('username', (e) => onChange('username', e.target.value))}
          />
          {$validation.username.show && <FormLabel error={true}>{$validation.username.error.reason}</FormLabel>}

        </FormGroup>
      </FormControl>


      <FormControl>
        <FormGroup>
          <InputLabel htmlFor="password">{i18n['password']}</InputLabel>
          <Input
            name="password"
            value={todo.title}
            {...$field('title', (e) => onChange('title', e.target.value))}
          />
          {$validation.title.show && <FormLabel error={true}>{$validation.title.error.reason}</FormLabel>}
        </FormGroup>
      </FormControl>
      <Button className={classes.highprofilebutton} onClick={(e) => {
        $submit(onSave, onInvalid)
      }} raised>{i18n['submit']}</Button>
      <Button className={classes.lowkeybutton} onClick={onClear} raised>{i18n['clear']}</Button>
    </form>
  )
}

export default withStyles(styleSheet)(TranslatorHOC(validated(validationConfig)(LoginForm)));
