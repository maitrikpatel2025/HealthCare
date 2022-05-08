import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import meanField from "./meanField";
import _ from "lodash";

const BreastCancerFormFirstPage = (props) => {
  const { handleSubmit } = props;

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div>
        {_.map(meanField, ({ label, name,type}) => {
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
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(BreastCancerFormFirstPage);
