import React from 'react';
import TextField from 'material-ui/TextField'

const TextInput = props => {
  return (
    <div>
      <TextField
        InputProps={{ placeholder: props.placeholder }}
        label={props.label}
        defaultValue={props.value}
        value={props.value}
        name={props.name}
      />

      {props.touched && error && <span>{error}</span>}
    </div>
  )
}

export default TextInput;
