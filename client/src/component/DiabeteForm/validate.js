import _ from "lodash"
import diaField from "./diaField";


const validate = values => {
    const errors = {}
    _.each(diaField, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
    });
    return errors
  }
export default validate