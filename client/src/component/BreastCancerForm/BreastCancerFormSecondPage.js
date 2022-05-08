import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import seField from './seField'
import _ from 'lodash'

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false

const BreastCancerFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form  className="ui form"  onSubmit={handleSubmit}>
         {_.map(seField, ({ label, name,type}) => {
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
        <button  type="submit"
          className="ui left floated button"onClick={previousPage}>
          Previous
        </button>
        <button type="submit"
          className="ui right floated blue button">
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(BreastCancerFormSecondPage)