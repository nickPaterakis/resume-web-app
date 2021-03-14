import React from 'react';

const TextArea = (props) => (
  <div className="form-group">
    <label className={props.labelStyle} htmlFor={props.name}>
      {props.label}
    </label>
    <textarea
      className="text-area"
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

export default TextArea;
