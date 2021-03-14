import React from 'react';

const Input = (props) => (
  <div className="form-group">
    <label className={props.labelStyle} htmlFor={props.name}>
      {props.label}
    </label>
    <input
      className={props.className}
      type="text"
      {...props}
    />
    {!props.valid 
      ? (
        <div className="error">
          <p className="error-message">
            {props.errorMessage}
          </p>
        </div>
      )
      : null}
  </div>
);

export default Input;
