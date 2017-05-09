import React from 'react';
import {Form} from 'semantic-ui-react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="">{defaultOption}</option>
          {options.map((option)=>{
            return <option key={option.value} value={option.value}>{option.text}</option>
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  )
}

export default SelectInput;
