
import _                    from 'lodash';
import {
    CREATE_HEART,
    FETCH_HEARTS,
  }                           from "../actions/types";
  
/* import {
  CREATE_HEART,
  FETCH_HEARTS,
  FETCH_HEART,
  EDIT_HEART,
  DELETE_HEART,
}                           from "../actions/types"; */


const heartReducer = (state = {}, action) => {
    switch (action.type) {

        case FETCH_HEARTS:
           return { ...state, ..._.mapKeys(action.payload, '_id')}; 
        case CREATE_HEART:
            return{...state,[action.payload._id]: action.payload};
/*         case FETCH_HEART:
            return{...state,[action.payload._id]: action.payload};
        case EDIT_HEART:
            return{...state,[action.payload._id]: action.payload};
        case DELETE_HEART:
            return _.omit(state,action.payload); */
        default:
            return state;

    }

}

export default heartReducer