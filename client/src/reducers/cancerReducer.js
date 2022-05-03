
import _                    from 'lodash';
import {
    CREATE_CANCER,
    FETCH_CANCERS,
  }                           from "../actions/types";
  
/* import {
  CREATE_CANCER,
  FETCH_CANCERS,
  FETCH_CANCER,
  EDIT_CANCER,
  DELETE_CANCER,
}                           from "../actions/types"; */


const cancerReducer = (state = {}, action) => {
    switch (action.type) {

        case FETCH_CANCERS:
           return { ...state, ..._.mapKeys(action.payload, '_id')}; 
        case CREATE_CANCER:
            return{...state,[action.payload._id]: action.payload};
/*         case FETCH_CANCER:
            return{...state,[action.payload._id]: action.payload};
        case EDIT_CANCER:
            return{...state,[action.payload._id]: action.payload};
        case DELETE_CANCER:
            return _.omit(state,action.payload); */
        default:
            return state;

    }

}

export default cancerReducer