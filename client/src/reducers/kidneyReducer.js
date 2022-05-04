
import _                    from 'lodash';
import {
    CREATE_KIDNEY,
    FETCH_KIDNEYS,
  }                           from "../actions/types";
  
/* import {
  CREATE_KIDNEY,
  FETCH_KIDNEYS,
  FETCH_KIDNEY,
  EDIT_KIDNEY,
  DELETE_KIDNEY,
}                           from "../actions/types"; */


const kidneyReducer = (state = {}, action) => {
    switch (action.type) {

        case FETCH_KIDNEYS:
           return { ...state, ..._.mapKeys(action.payload, '_id')}; 
        case CREATE_KIDNEY:
            return{...state,[action.payload._id]: action.payload};
/*         case FETCH_KIDNEY:
            return{...state,[action.payload._id]: action.payload};
        case EDIT_KIDNEY:
            return{...state,[action.payload._id]: action.payload};
        case DELETE_KIDNEY:
            return _.omit(state,action.payload); */
        default:
            return state;

    }

}

export default kidneyReducer