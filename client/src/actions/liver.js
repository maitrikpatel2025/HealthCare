import liver from '../api/index';

/* import {
    CREATE_LIVER,
    FETCH_LIVERS,
    FETCH_LIVER,
    DELETE_LIVER,
    EDIT_LIVER
  } from './types'; */
import {
  CREATE_LIVER,
  FETCH_LIVERS,
} from './types';


export const createLiver = formValues => async (dispatch) => {
  const response = await liver.post('/healthcare/api/v1/liver/add', { ...formValues });
  dispatch({ type: CREATE_LIVER, payload: response.data });
};

export const fetchLivers = () => async dispatch => {
  const response = await liver.get('/healthcare/api/v1/liver');
  dispatch({ type: FETCH_LIVERS, payload: response.data });
};
/* 
export const fetchLiver= _id => async dispatch => {
  const response = await liver.get(`/healthcare/api/v1/liver/${_id}`);

  dispatch({ type: FETCH_LIVER, payload: response.data });
};

export const editLiver= (_id, formValues) => async dispatch => {
  const response = await liver.put(`/healthcare/api/v1/liver/${_id}`, formValues);

  dispatch({ type: EDIT_LIVER, payload: response.data });
};

export const deleteLiver= _id => async dispatch => {
  await liver.delete(`/healthcare/api/v1/liver/${_id}`);

  dispatch({ type: DELETE_LIVER, payload: _id });
}; */