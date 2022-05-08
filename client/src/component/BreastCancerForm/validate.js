import meanField from "./meanField";
import _ from "lodash"
import seField from "./seField";
import worstField from "./worstField";

const validate = values => {
    const errors = {}
    _.each(meanField, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
    });
    _.each(seField, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
    });
    _.each(worstField, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
    });
    return errors
  }
export default validate