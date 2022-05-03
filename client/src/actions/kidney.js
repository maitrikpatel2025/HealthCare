import kidney from '../api/index';

/* import {
    CREATE_KINDEY,
    FETCH_KINDEYS,
    FETCH_KINDEY,
    DELETE_KINDEY,
    EDIT_KINDEY
  } from './types'; */
import {
  CREATE_KINDEY,
  FETCH_KINDEYS,
} from './types';


export const createKidney = formValues => async (dispatch) => {
  const response = await kidney.post('/healthcare/api/v1/kindey/add', { ...formValues });
  dispatch({ type: CREATE_KINDEY, payload: response.data });
};

export const fetchKidneys = () => async dispatch => {
  const response = await kidney.get('/healthcare/api/v1/kindey');
  dispatch({ type: FETCH_KINDEYS, payload: response.data });
};
/* 
export const fetchKidney= _id => async dispatch => {
  const response = await kidney.get(`/healthcare/api/v1/kindey/${_id}`);

  dispatch({ type: FETCH_KINDEY, payload: response.data });
};

export const editKidney= (_id, formValues) => async dispatch => {
  const response = await kidney.put(`/healthcare/api/v1/kindey/${_id}`, formValues);

  dispatch({ type: EDIT_KINDEY, payload: response.data });
};

export const deleteKidney= _id => async dispatch => {
  await kidney.delete(`/healthcare/api/v1/kindey/${_id}`);

  dispatch({ type: DELETE_KINDEY, payload: _id });
}; */