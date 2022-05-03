import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import cancerReducer from "./cancerReducer";
import daibetesReducer from "./diabetesReducer";
import heartReducer from "./heartReducer";
import kidneyReducer from "./kidneyReducer";
import liverReducer from "./liverReducer";


export default combineReducers({
  form: formReducer,
  cancer: cancerReducer,
  diabetes: daibetesReducer,
  heart: heartReducer,
  kidney: kidneyReducer,
  liver: liverReducer
});