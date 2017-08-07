import React from 'react';
import Input from 'material-ui/Input';

const TextInput = props => {
//console.log(props)
  return (
      <Input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
    />
  )
}

export default TextInput;
