
import _                    from 'lodash';
import {
    CREATE_DIABETE,
    FETCH_DIABETES,
  }                           from "../actions/types";
  
/* import {
  CREATE_DIABETE,
  FETCH_DIABETES,
  FETCH_DIABETE,
  EDIT_DIABETE,
  DELETE_DIABETE,
}                           from "../actions/types"; */


const daibetesReducer = (state = {}, action) => {
    switch (action.type) {

        case FETCH_DIABETES:
           return { ...state, ..._.mapKeys(action.payload, '_id')}; 
        case CREATE_DIABETE:
            return{...state,[action.payload._id]: action.payload};
/*         case FETCH_DIABETE:
            return{...state,[action.payload._id]: action.payload};
        case EDIT_DIABETE:
            return{...state,[action.payload._id]: action.payload};
        case DELETE_DIABETE:
            return _.omit(state,action.payload); */
        default:
            return state;

    }

}

export default daibetesReducer