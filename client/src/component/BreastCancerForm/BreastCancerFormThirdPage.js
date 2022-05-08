import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "./renderField";
import validate from "./validate";
import worstField from "./worstField";
import _ from 'lodash';

// const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

// const renderColorSelector = ({ input, meta: { touched, error } }) => (
//   <div>
//     <select className="ui fluid dropdown" {...input}>
//       <option value="">Select a color...</option>
//       {colors.map((val) => (
//         <option value={val} key={val}>
//           {val}
//         </option>
//       ))}
//     </select>
//     {touched && error && <span>{error}</span>}
//   </div>
// );

const BreastCancerFormThirdPage = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      {_.map(worstField, ({ label, name, type }) => {
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

      <div>
        <button
          type="submit"
          className="ui left floated button"
          onClick={previousPage}
        >
          Previous
        </button>
        <button type="submit" className="ui right floated blue button">
          submit
        </button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(BreastCancerFormThirdPage);
