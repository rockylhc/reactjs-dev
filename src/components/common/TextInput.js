import React from 'react';
import TextField from 'material-ui/TextField';

const TextInput = props => {
console.log(props)
  return (
      <TextField
        label={props.label}
        onChange={props.onChange}
        value={props.value||''}
        type={props.type}
        name={props.name}
      />
  )
}

export default TextInput;
