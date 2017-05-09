import React from 'react';
import {Form} from 'semantic-ui-react';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if(error && error.length > 0){
    wrapperClass += ' '+'haserror';
  }

  return (
    <Form.Field>
      <label htmlFor={name}>{label}</label>

        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}

    </Form.Field>
  )
}

export default TextInput;
