
import _                    from 'lodash';
import {
    CREATE_LIVER,
    FETCH_LIVERS,
  }                           from "../actions/types";
  
/* import {
  CREATE_LIVER,
  FETCH_LIVERS,
  FETCH_LIVER,
  EDIT_LIVER,
  DELETE_LIVER,
}                           from "../actions/types"; */


const liverReducer = (state = {}, action) => {
    switch (action.type) {

        case FETCH_LIVERS:
           return { ...state, ..._.mapKeys(action.payload, '_id')}; 
        case CREATE_LIVER:
            return{...state,[action.payload._id]: action.payload};
/*         case FETCH_LIVER:
            return{...state,[action.payload._id]: action.payload};
        case EDIT_LIVER:
            return{...state,[action.payload._id]: action.payload};
        case DELETE_LIVER:
            return _.omit(state,action.payload); */
        default:
            return state;

    }

}

export default liverReducer