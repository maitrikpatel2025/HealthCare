import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import diaField from "./diaField";
import _ from "lodash";

const DiabeteFormFirstPage = (props) => {
  const { handleSubmit } = props;

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div>
        {_.map(diaField, ({ label, name,type}) => {
          return (
            <Field
              key={name}
              component={renderField}
              type={type}
              label={label}
              name={name}
            />
          );
        })}
      </div>
      <br />
      <div>
      <button type="submit" className="ui right floated blue button">
          submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "diabeteswizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(DiabeteFormFirstPage);
