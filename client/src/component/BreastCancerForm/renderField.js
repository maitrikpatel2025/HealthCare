import React from "react";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div className="field">
      <label
      >
        {label}
      </label>
      <input
        {...input}
        placeholder={label}
        type={type}
      />
      {touched && error && <p className="text-red-500">{error}</p>}
    </div>
    <br/>
  </div>
);

export default renderField;
